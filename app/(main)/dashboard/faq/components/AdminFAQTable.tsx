import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { GripVertical } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from '@/components/ui/table'
import { FAQType } from '@/src/interfaces/faq'
import AdminFAQTableSelectButton from './AdminFAQTableSelectButton'
import { changeFAQOrder } from '@/src/actions/faq.action'
import { useEffect, useState } from 'react'

type AdminFAQTableProps = {
  faqs: FAQType[]
}

const AdminFAQTable = ({ faqs }: AdminFAQTableProps) => {
  const [faqlist, setFaqlist] = useState<FAQType[]>(faqs)

  useEffect(() => {
    setFaqlist(faqs)
  }, [faqs])

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(faqs)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    const updatedFaqs = items.map((item, index) => ({
      ...item,
      orderId: index
    }))
    setFaqlist(updatedFaqs)
    const resp = await changeFAQOrder(updatedFaqs)
    if (resp) {
      console.log('FAQs reordered')
    } else {
      console.log('Error reordering FAQs')
    }
  }

  return (
    <Card className='px-4'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Table className='mx-auto'>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Question</TableHead>
              <TableHead>Réponse</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <Droppable droppableId='faqs'>
            {provided => (
              <TableBody {...provided.droppableProps} ref={provided.innerRef}>
                {faqlist.map((faq, index) => (
                  <Draggable key={faq.id} draggableId={faq.id} index={index}>
                    {provided => (
                      <TableRow
                        key={faq.id}
                        className='h-16 overflow-hidden'
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        <TableCell className='w-[15px]' {...provided.dragHandleProps}>
                          <GripVertical className='w-6 h-6 text-gray-400' />
                        </TableCell>
                        <TableCell className='truncate whitespace-nowrap overflow-hidden max-w-[250px] min-w-[150px]'>
                          {faq.question}
                        </TableCell>
                        <TableCell className='text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[50px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[650px]'>
                          {faq.answer}
                        </TableCell>
                        <TableCell>
                          <AdminFAQTableSelectButton faq={faq} />
                        </TableCell>
                      </TableRow>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TableBody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </Card>
  )
}

export default AdminFAQTable
