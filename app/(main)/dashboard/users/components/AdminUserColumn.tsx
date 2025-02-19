'use client';

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getUsersSchema } from '@/src/lib';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Shield, ShieldCheck, ShieldX } from 'lucide-react';

type userDataType = z.infer<typeof getUsersSchema>;

type PropsType = {
  onChangeRole?: (id: string, role: string) => void;
  isFetching?: boolean;
};

export const AdminUserColumn = ({ onChangeRole, isFetching }: PropsType) => {
  const columns: ColumnDef<userDataType>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'Nom',
      cell: ({ row }) => <div className=''>{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'email',
      header: 'Mail',
      cell: ({ row }) => <div className=''>{row.getValue('email')}</div>,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => {
        return (
          <div className='w-[75px] capitalize'>
            <div className='px-2 py-1 rounded'>{row.original.role}</div>
          </div>
        );
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='h-8 w-8 p-0'
                disabled={isFetching}
              >
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {user.role === 'superAdmin' ? (
                <>
                  <DropdownMenuItem
                    onClick={() =>
                      onChangeRole && onChangeRole(user.id, 'user')
                    }
                  >
                    <ShieldX className='mr-2 h-4 w-4' />
                    Passer User
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      onChangeRole && onChangeRole(user.id, 'admin')
                    }
                  >
                    <Shield className='mr-2 h-4 w-4' />
                    Passer Admin
                  </DropdownMenuItem>
                </>
              ) : user.role === 'admin' ? (
                <>
                  <DropdownMenuItem
                    onClick={() =>
                      onChangeRole && onChangeRole(user.id, 'user')
                    }
                  >
                    <ShieldX className='mr-2 h-4 w-4' />
                    Passer User
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      onChangeRole && onChangeRole(user.id, 'superAdmin')
                    }
                  >
                    <ShieldCheck className='mr-2 h-4 w-4' />
                    Passer Super Admin
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem
                    onClick={() =>
                      onChangeRole && onChangeRole(user.id, 'admin')
                    }
                  >
                    <Shield className='mr-2 h-4 w-4' />
                    Passer Admin
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      onChangeRole && onChangeRole(user.id, 'superAdmin')
                    }
                  >
                    <ShieldCheck className='mr-2 h-4 w-4' />
                    Passer Super Admin
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  return columns;
};
