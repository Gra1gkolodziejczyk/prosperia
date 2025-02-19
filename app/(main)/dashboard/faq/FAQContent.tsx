'use client';

import { DropResult } from '@hello-pangea/dnd';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import AdminLayoutHeader from '../components/AdminLayoutHeader';
import { AdminFAQTable } from './components/AdminFAQTable';
import { AdminFAQColumn } from './components/AdminFAQColumn';
import { AdminFAQAddDialog } from './components/AdminFAQAddDialog';
import { AdminFAQUpdateDialog } from './components/AdminFAQUpdateDialog';
import { faqSchema } from '@/src/lib/schemas';
import { NewFAQInterface } from '@/src/interfaces/faq';
import { toast, Toaster } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { AdminDeleteDialog } from '../components/AdminDeleteDialog';
import AdminSelectPageButton from './components/AdminSelectPageButton';

type FAQDataType = z.infer<typeof faqSchema>;

export default function FAQContent() {
  const [faqs, setFaqs] = useState<FAQDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState('accueil');
  const [wantDelete, setWantDelete] = useState<string | null>(null);
  const [wantUpdate, setWantUpdate] = useState<FAQDataType | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch('/api/faq');
        const data = await res.json();
        if (data) {
          setFaqs(data.data);
        }
      } catch (error) {
        toast.error('Erreur lors de la récupération des FAQs');
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFAQs();
  }, []);

  const onSelectPage = (page: string) => {
    setSelectedPage(page);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(faqs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    const updatedFaqs = items.map((item, index) => ({
      ...item,
      order: index + 1,
    }));
    setFaqs(updatedFaqs);
    updateFaqOrder(updatedFaqs);
  };

  const updateFaqOrder = async (changedFaqs: FAQDataType[]) => {
    try {
      const res = await fetch('/api/admin/faq/order', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changedFaqs),
      });
      const data = await res.json();
      if (data) {
        toast.success('Ordre mis à jour avec succès');
      }
    } catch (error) {
      toast.error("Erreur lors de la mise à jour de l'ordre");
      console.error('Error updating FAQ order:', error);
    }
  };

  const onBackUpdate = () => {
    setWantUpdate(null);
  };

  const onCreate = async ({
    question,
    answer,
    page,
  }: NewFAQInterface): Promise<boolean> => {
    try {
      const res = await fetch('/api/admin/faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          answer,
          page,
          order: faqs.length + 1,
        }),
      });
      const data = await res.json();
      if (data) {
        setFaqs([...faqs, data.data]);
        toast.success('FAQ créée avec succès');
        return true;
      }
      return false;
    } catch (error) {
      toast.error('Erreur lors de la création de la FAQ');
      console.error('Error creating FAQ:', error);
      return false;
    }
  };

  const onDelete = (id: string) => {
    setWantDelete(id);
  };

  const deleteIsConfirm = async (isConfirm: boolean) => {
    if (isConfirm && wantDelete) {
      try {
        const res = await fetch(`/api/admin/faq/${wantDelete}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data) {
          const updatedFaqs = faqs
            .filter((faq) => faq.id !== wantDelete)
            .map((faq, index) => ({
              ...faq,
              order: index + 1,
            }));
          setFaqs(updatedFaqs);
          updateFaqOrder(updatedFaqs);
          toast.success('FAQ supprimée avec succès');
        }
      } catch (error) {
        toast.error('Erreur lors de la suppression de la FAQ');
        console.error('Error deleting FAQ:', error);
      }
    }
    setWantDelete(null);
  };

  const setwantUpdate = (faq: FAQDataType) => {
    setWantUpdate(faq);
  };

  const onUpdate = async (updateFAQ: FAQDataType): Promise<boolean> => {
    try {
      const res = await fetch(`/api/admin/faq/${updateFAQ.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateFAQ),
      });
      const data = await res.json();
      if (data) {
        setFaqs(faqs.map((faq) => (faq.id === updateFAQ.id ? updateFAQ : faq)));
        toast.success('FAQ mise à jour avec succès');
        return true;
      }
      return false;
    } catch (error) {
      toast.error('Erreur lors de la mise à jour de la FAQ');
      console.error('Error updating FAQ:', error);
      return false;
    }
  };

  return (
    <div className='flex flex-col gap-8'>
      <Toaster position='top-center' />
      <AdminLayoutHeader
        title='FAQ'
        content='Gérez les questions fréquemment posées'
      />
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <AdminSelectPageButton
            defaultPage={selectedPage}
            onSelectPage={onSelectPage}
          />
          <AdminFAQAddDialog onCreate={onCreate} errorMessage='' />
        </div>
        {loading ? (
          <Skeleton className='h-[500px] w-full' />
        ) : (
          <AdminFAQTable
            data={faqs.filter((faq) => faq.page === selectedPage)}
            columns={AdminFAQColumn({
              onDelete,
              setwantUpdate,
            })}
            onDragEnd={onDragEnd as unknown as (result: unknown) => void}
          />
        )}
      </div>
      {wantDelete && (
        <AdminDeleteDialog
          confirmDelete={deleteIsConfirm}
          title='Supprimer la FAQ'
          desc='Êtes-vous sûr de vouloir supprimer cette FAQ ?'
        />
      )}
      {wantUpdate && (
        <AdminFAQUpdateDialog
          faq={wantUpdate}
          onUpdate={onUpdate}
          onBack={onBackUpdate}
          errorMessage=''
        />
      )}
    </div>
  );
}
