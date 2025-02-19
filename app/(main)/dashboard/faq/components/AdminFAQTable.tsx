'use client'

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { cn } from '@/src/lib'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onDragEnd?: (result: unknown) => void
  onDelete?: (id: string) => void
}

export const AdminFAQTable = <TData, TValue>({
  columns,
  data,
  onDragEnd = () => {}
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className='rounded-md border'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Table className='w-full table-auto'>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        'truncate whitespace-nowrap overflow-hidden',
                        header.column.id === 'id' && 'w-[15px]',
                        header.column.id === 'question' && 'max-w-[250px] min-w-[150px]',
                        header.column.id === 'answer' &&
                          'w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px]',
                        header.column.id === 'createdAt' && 'w-[25px]',
                        header.column.id === 'actions' && 'w-[10px]'
                      )}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <Droppable droppableId='table'>
            {provided => (
              <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row, index) => (
                    <Draggable key={row.id} draggableId={row.id} index={index}>
                      {provided => (
                        <TableRow
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          data-state={row.getIsSelected() && 'selected'}
                          className='h-12'>
                          {row.getVisibleCells().map(cell => {
                            const formatedDate =
                              cell.column.id === 'createdAt'
                                ? new Date(cell.getValue() as string).toLocaleDateString('fr-FR')
                                : null
                            return (
                              <TableCell
                                key={cell.id}
                                className={cn(
                                  'truncate whitespace-nowrap overflow-hidden',
                                  cell.column.id === 'id' && 'w-[15px]',
                                  cell.column.id === 'question' && 'max-w-[250px] min-w-[150px]',
                                  cell.column.id === 'answer' &&
                                    'w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px]',
                                  cell.column.id === 'createdAt' && '-w-[25px]',
                                  cell.column.id === 'actions' && 'w-[10px]'
                                )}>
                                {cell.column.id === 'createdAt'
                                  ? formatedDate
                                  : flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className='h-24 text-center'>
                      Aucun Résultat
                    </TableCell>
                  </TableRow>
                )}
                {provided.placeholder}
              </TableBody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </div>
  )
}
