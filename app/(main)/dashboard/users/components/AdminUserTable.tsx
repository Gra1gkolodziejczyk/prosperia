'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { z } from 'zod';
import { getUsersSchema } from '@/src/lib';

type UserDataType = z.infer<typeof getUsersSchema>;

interface DataTableProps {
  columns: ColumnDef<UserDataType, unknown>[];
  data: UserDataType[];
}

export const AdminUserTable = ({ columns, data }: DataTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='w-full'>
      <div className='rounded-md border'>
        <Table>
          <TableHeader className=''>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${
                        header.id === 'role'
                          ? 'w-[75px] sticky right-0 z-10'
                          : header.id === 'actions'
                            ? 'w-[25px] sticky right-0 z-10'
                            : header.id === 'select'
                              ? 'w-[25px] sticky left-0 z-10'
                              : header.id === 'name'
                                ? 'w-[200px] sticky left-0 z-10'
                                : ''
                      } text-center`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className='text-center'
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`${
                        cell.id === 'role'
                          ? 'w-[75px] sticky right-0 z-10 text-center'
                          : cell.id === 'actions'
                            ? 'w-[25px] sticky right-0 z-10'
                            : cell.id === 'select'
                              ? 'w-[25px] sticky left-0 z-10'
                              : cell.id === 'name'
                                ? 'w-[200px] sticky left-0 z-10'
                                : ''
                      }text-center`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  Aucun Résultat
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
