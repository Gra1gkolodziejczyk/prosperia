import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { messageSchema } from '@/src/lib';
import { ColumnDef } from '@tanstack/react-table';
import {
  ArrowUpDown,
  Bookmark,
  BookmarkCheck,
  Eye,
  MoreHorizontal,
  Trash2,
} from 'lucide-react';

type messageDataType = z.infer<typeof messageSchema>;

type PropsType = {
  onDelete?: (id: string) => void;
  onChangeView?: (id: string) => void;
  onViewDetail?: (message: messageDataType) => void;
  isFetching?: boolean;
};

export const AdminContactColumn = ({
  onDelete,
  onChangeView,
  onViewDetail,
  isFetching,
}: PropsType) => {
  const columns: ColumnDef<messageDataType>[] = [
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
      accessorKey: 'isViewed',
      header: 'Statut',
      cell: ({ row }) => {
        return (
          <div className='w-[75px] capitalize'>
            {row.original.isViewed === true ? (
              <div className='px-2 py-1 rounded'>Lu</div>
            ) : (
              <div className='px-2 py-1 rounded'> Non Lu</div>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: 'topic',
      header: 'Sujet',
      cell: ({ row }) => (
        <div className='text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[700px]'>
          {row.getValue('topic')}
        </div>
      ),
    },
    {
      accessorKey: 'createdAt',
      header: ({ column }) => {
        return (
          <div className='flex items-center w-[100px] justify-center'>
            Date
            <Button
              variant='none'
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              <ArrowUpDown />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => (
        <div className='w-[100px] text-center capitalize'>
          {new Date(row.getValue('createdAt') as string).toLocaleDateString(
            'fr-FR'
          )}
        </div>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const message = row.original;

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
              <DropdownMenuItem
                onClick={() => onViewDetail && onViewDetail(message)}
              >
                <Eye className='mr-2 h-4 w-4' />
                Afficher en detail
              </DropdownMenuItem>
              {message.isViewed ? (
                <DropdownMenuItem
                  onClick={() => onChangeView && onChangeView(message.id)}
                >
                  <Bookmark className='mr-2 h-4 w-4' />
                  Mettre en non Lu
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() => onChangeView && onChangeView(message.id)}
                >
                  <BookmarkCheck className='mr-2 h-4 w-4' />
                  Mettre en Lu
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={() => onDelete && onDelete(message.id)}
                className='text-destructive'
              >
                <Trash2 className='mr-2 h-4 w-4' />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  return columns;
};
