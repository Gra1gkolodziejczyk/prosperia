'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CategoryType } from '@/src/interfaces/category'
import { cn } from '@/src/lib'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

interface PropsType {
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  categories: CategoryType[]
}
const CategoryList = ({ selectedCategories, onCategoryChange, categories }: PropsType) => {
  const [open, setOpen] = useState(false)

  const toggleCategory = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    onCategoryChange(updatedCategories)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
          {selectedCategories.length > 0
            ? `${selectedCategories.length} catégories sélectionnées`
            : 'Selectionner une catégorie'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandList>
            <CommandEmpty>Aucune Categorie trouvé</CommandEmpty>
            <CommandGroup className='max-h-64 overflow-auto'>
              {categories.map(category => (
                <CommandItem key={category.id} onSelect={() => toggleCategory(category.id)}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selectedCategories.includes(category.id) ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {category.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default CategoryList
