'use client';

import { z } from 'zod';
import {
  createInvitationSchema,
  formInvitSchema,
  getUsersSchema,
  roleSchema,
  userIdSchema,
} from '@/src/lib/schemas';
import { useEffect, useState } from 'react';
import AdminLayoutHeader from '../components/AdminLayoutHeader';
import { Skeleton } from '@/components/ui/skeleton';
import { toast, Toaster } from 'sonner';
import dynamic from 'next/dynamic';
import { AdminUserColumn } from './components/AdminUserColumn';
import { AdminCreateInvitDialog } from './components/adminCreateInvitDialog';
import { authClient } from '@/src/lib/auth-client';

const AdminUserTable = dynamic(
  () => import('./components/AdminUserTable').then((mod) => mod.AdminUserTable),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] max-w' />,
  }
);

type UserDataTypes = z.infer<typeof getUsersSchema>;

export default function UsersContent() {
  const [users, setUsers] = useState<UserDataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const session = authClient.useSession();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/user');
        const data = await res.json();
        if (data.status === 200) {
          setUsers(data.data);
          setIsLoading(false);
        } else {
          console.error('Error fetching users:', data.message);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const onCreateInvit = async (
    values: z.infer<typeof formInvitSchema>
  ): Promise<boolean> => {
    setIsFetching(true);
    const body = {
      ...values,
      inviterId:
        session?.data?.user.id === null
          ? 'eRWib5Aw4yZ0GfmvZCsi4xoVQRtPhDZF'
          : session?.data?.user.id,
    };
    try {
      const verifyValues = createInvitationSchema.safeParse(body);
      if (verifyValues.success) {
        const res = await fetch('/api/admin/invit', {
          method: 'POST',
          body: JSON.stringify(verifyValues.data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        switch (data.status) {
          case 201:
            setFormError('');
            setIsFetching(false);
            const body = {
              email: values.email,
              invitationCode: data.data[0].id,
            };
            const sendMail = await fetch(`/api/admin/send`, {
              method: 'POST',
              body: JSON.stringify(body),
            });
            await sendMail.json();
            toast.success('Invitation créée avec succès.');
            return true;
          case 400:
            setFormError(data.message);
            setIsFetching(false);
            return false;
          case 404:
            setFormError(
              "Erreur lors de la création de l'invitation: Utilisateur créateur non trouvé"
            );
            setIsFetching(false);
            return false;
          default:
            setFormError(
              "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
            );
            setIsFetching(false);
            return false;
        }
      } else {
        console.error(verifyValues.error);
        setFormError(verifyValues.error.errors[0].message);
        setIsFetching(false);
        return false;
      }
    } catch (error) {
      console.error('Error creating invitation:', error);
      setFormError(
        "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
      );
    }
    return true;
  };

  const onChangeRole = async (id: string, role: string) => {
    const verifyId = userIdSchema.safeParse(id);
    const verifyRole = roleSchema.safeParse(role);
    if (verifyId.success === false) {
      toast.error(verifyId.error.errors[0].message);
    } else {
      if (verifyRole.success === false) {
        toast.error(verifyRole.error.errors[0].message);
      } else {
        if (id === session?.data?.user?.id) {
          toast.error('Vous ne pouvez pas modifier votre propre rôle.');
          return;
        } else {
          setIsFetching(true);
          try {
            const res = await fetch(`/api/admin/user/${id}`, {
              method: 'PUT',
              body: JSON.stringify({ role }),
            });
            const data = await res.json();
            switch (data.status) {
              case 200:
                const updatedUsers = users.map((user) => {
                  if (user.id === id) {
                    return { ...user, role: data.data[0].role };
                  }
                  return user;
                });
                setUsers(updatedUsers);
                toast.success(
                  "Le rôle de l'utilisateur a été modifié avec succès."
                );
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
            console.error('Error changing admin:', error);
            toast.error(
              "Une erreur s'est produite en interne. Veuillez réessayer plus tard."
            );
          }
        }
      }
    }
    setIsFetching(false);
  };

  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <AdminLayoutHeader
            title='Utilisateurs'
            content='Gérer les Utilisateurs'
          />
        </div>
        <Skeleton className='h-[400px] max-w' />
      </div>
    );
  } else {
    return (
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <AdminLayoutHeader
              title='Utilisateurs'
              content='Gérer les Utilisateurs'
            />
          </div>
          <div>
            <AdminCreateInvitDialog
              onCreate={onCreateInvit}
              errorMessage={formError}
            />
          </div>
        </div>
        <AdminUserTable
          columns={AdminUserColumn({ onChangeRole, isFetching })}
          data={users}
        />
        <Toaster richColors />
      </div>
    );
  }
}
