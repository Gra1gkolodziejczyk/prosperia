'use client';

import { categoryFormSchema } from '@/src/lib/schemas';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';
import AdminLayoutHeader from '../components/AdminLayoutHeader';
import { AdminCreateCategoryDialog } from './components/CreateCategoryDialog';
import { CategoryType } from '@/src/interfaces/category';

export default function CategoryContent() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [formError, setFormError] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/admin/category');
        const data = await res.json();
        if (data) {
          setCategories(data.data);
        }
      } catch (error) {
        toast.error('Erreur lors de la récupération des catégories');
        console.error('Error fetching Categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const onDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/category/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data) {
        setCategories(categories.filter((category) => category.id !== id));
        toast.success('Catégorie supprimée avec succès');
      }
    } catch (error) {
      toast.error('Erreur lors de la suppression de la catégorie');
      console.error('Error deleting Category:', error);
    }
  };

  const onCreate = async (name: string): Promise<boolean> => {
    const verifyName = categoryFormSchema.safeParse({ name });
    if (verifyName.success) {
      try {
        const res = await fetch('/api/admin/category', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });
        const data = await res.json();
        switch (data.status) {
          case 201:
            setCategories([...categories, data.data[0]]);
            toast.success('Catégorie créée avec succès');
            setFormError('');
            return true;
          case 400:
            setFormError(data.message);
            return false;
          default:
            toast.error('Erreur lors de la création de la catégorie');
            return false;
        }
      } catch (error) {
        toast.error('Erreur lors de la création de la catégorie');
        console.error('Error creating Category:', error);
        return false;
      }
    } else {
      toast.error(verifyName.error.errors[0].message);
      return false;
    }
  };

  return (
    <div className='space-y-4'>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <AdminLayoutHeader
            title='Catégories'
            content='Gérer les Catégories'
          />
        </div>
        <div>
          <AdminCreateCategoryDialog
            onCreate={onCreate}
            errorMessage={formError}
          />
        </div>
      </div>
      {categories.length > 0 ? (
        <div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {categories.map((category) => (
              <div
                key={category.id}
                className='bg-white shadow-md rounded-md p-4'
              >
                <div className='flex flex-row items-center justify-between'>
                  <div>
                    <p className='text-lg font-semibold'>{category.name}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => onDelete(category.id)}
                      className='text-red-500 hover:text-red-700'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <Toaster richColors />
    </div>
  );
}
