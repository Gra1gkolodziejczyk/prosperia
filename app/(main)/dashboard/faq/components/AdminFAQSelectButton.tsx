import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { cn } from '@/src/lib'
import { pageEnumSchema } from '@/src/lib/schemas'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

type ButtonProps = {
  onSelectPage: (page: string) => void
  defaultPage?: string
}

const AdminFAQSelectButton = ({ onSelectPage, defaultPage }: ButtonProps) => {
  const [selected, setSelected] = useState<string | null>(defaultPage || null)
  const [open, setOpen] = useState<boolean>(false)
  const pages = Object.values(pageEnumSchema.enum)

  const handleSelect = (page: string) => {
    setSelected(page)
    onSelectPage(page)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' type='button' className='w-[200px] flex justify-between'>
          {selected || 'Selectionner une page'}
          <ChevronDown className='w-4 h-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-2'>
        <div className='flex flex-col gap-2'>
          {pages.map(option => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={cn(
                'flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800',
                selected === option && 'bg-gray-200 dark:bg-gray-700'
              )}>
              {option}
              {selected === option && <Check className='w-4 h-4 text-green-500' />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AdminFAQSelectButton
