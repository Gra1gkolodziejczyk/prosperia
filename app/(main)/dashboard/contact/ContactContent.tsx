'use client';

import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import AdminLayoutHeader from '../components/AdminLayoutHeader';
import { idSchema, messageSchema } from '@/src/lib';
import { MessageResInterface } from '@/src/interfaces/message';
import { AdminMessageTable } from './components/AdminContactTable';
import { AdminContactColumn } from './components/AdminContactColumn';
import { AdminDeleteDialog } from '../components/AdminDeleteDialog';
import { AdminContactDetailDialog } from './components/AdminContactDetailDialog';

type messageDataType = z.infer<typeof messageSchema>;

export default function ContactContent() {
  const [messages, setMessages] = useState<messageDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [deleteId, setDeleteId] = useState<string>('');
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
  const [details, setDetails] = useState<messageDataType | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/admin/message');
        const data: MessageResInterface = await res.json();
        if (data.status === 200) {
          setMessages(data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const onDelete = async (id: string) => {
    const verifyId = idSchema.safeParse(id);
    if (verifyId.success === false) {
      toast.error(
        'Erreur lors de la modification du statut de la vue du message: ID invalide'
      );
    } else {
      setDeleteId(id);
      setOpenConfirmDelete(true);
    }
  };

  const deleteIsConfirm = async (isConfirm: boolean) => {
    setOpenConfirmDelete(false);
    if (isConfirm) {
      try {
        setIsFetching(true);
        const id = deleteId;
        const res = await fetch(`/api/admin/message/${id}`, {
          method: 'DELETE',
        });
        const data: MessageResInterface = await res.json();
        switch (data.status) {
          case 200:
            toast.success('Message supprimé avec succès');
            setMessages(data.data);
            break;
          case 404:
            toast.error(
              'Erreur lors de la suppression du message: Message non trouvé'
            );
            break;
          case 400:
            toast.error(data.message);
            break;
          default:
            toast.error(
              "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
            );
            break;
        }
      } catch (error) {
        toast.error(
          "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
        );
        console.error('Error deleting message:', error);
      }
      setIsFetching(false);
      setDeleteId('');
    }
  };

  const onChangeView = async (id: string) => {
    const verifyId = idSchema.safeParse(id);
    if (verifyId.success === false) {
      toast.error(
        'Erreur lors de la modification du statut de la vue du message: ID invalide'
      );
    } else {
      setIsFetching(true);
      try {
        const res = await fetch(`/api/admin/message/${id}`, {
          method: 'PATCH',
        });
        const data: MessageResInterface = await res.json();
        switch (data.status) {
          case 200:
            toast.success('Statut de la vue du message modifié avec succès');
            setMessages((prev) =>
              prev.map((message) =>
                message.id === id
                  ? { ...message, isViewed: data.data[0].isViewed }
                  : message
              )
            );
            if (details) {
              setDetails({ ...details, isViewed: data.data[0].isViewed });
            }
            break;
          case 404:
            toast.error(
              'Erreur lors de la modification du statut de la vue du message: Message non trouvé'
            );
            break;
          case 400:
            toast.error(data.message);
            break;
          default:
            toast.error(
              "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
            );
            break;
        }
      } catch (error) {
        toast.error(
          "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
        );
        console.error('Error changing view status of message:', error);
      }
    }
    setIsFetching(false);
  };

  const onViewDetail = async (message: messageDataType) => {
    setDetails(message);
  };

  const onChangeDetail = (id: string) => {
    if (id) {
      onChangeView(id);
    } else {
      setDetails(null);
    }
  };

  if (!isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <AdminLayoutHeader
            title='Message'
            content='Gérer les formulaires de contact'
          />
        </div>
        <AdminMessageTable
          columns={AdminContactColumn({
            onDelete,
            onChangeView,
            onViewDetail,
            isFetching,
          })}
          data={messages}
        />
        {openConfirmDelete && (
          <AdminDeleteDialog
            confirmDelete={deleteIsConfirm}
            title='Contact'
            desc='Êtes-vous sûr de vouloir supprimer ce message ?'
          />
        )}
        {details && (
          <AdminContactDetailDialog
            onChangeDetail={onChangeDetail}
            data={details}
            isLoading={isFetching}
          />
        )}
        <Toaster richColors />
      </div>
    );
  } else {
    return (
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <AdminLayoutHeader
            title='Message'
            content='Gérer les formulaires de contact'
          />
        </div>
        <Skeleton className='h-[400px] max-w' />
      </div>
    );
  }
}
