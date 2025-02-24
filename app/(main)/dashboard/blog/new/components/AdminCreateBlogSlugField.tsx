import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, Pencil, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { isSlugAvailable } from '../../blog.fetch'

type AdminCreateBlogSlugFieldProps = {
  slug: string | null
  onChangeSlug: (slug: string) => void
  title: string | null
}

const AdminCreateBlogSlugField = ({ slug, onChangeSlug, title }: AdminCreateBlogSlugFieldProps) => {
  const [newSlug, setNewSlug] = useState<string>(slug ?? '')
  const [isEditing, setIsEditing] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)

  const onGenerateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  useEffect(() => {
    if (slug === '') {
      const autoSlug = onGenerateSlug(title ?? '')
      if (autoSlug !== newSlug) {
        setNewSlug(autoSlug)
        onChangeSlug(autoSlug)
        onCheckSlugIsAvailable(autoSlug)
      }
    }
  }, [title, newSlug, onChangeSlug, slug])

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSlug = e.target.value
    const autoSlug = onGenerateSlug(updatedSlug)
    setNewSlug(autoSlug)
    onChangeSlug(autoSlug)
    onCheckSlugIsAvailable(autoSlug)
  }

  const onCheckSlugIsAvailable = async (slug: string) => {
    const available = await isSlugAvailable(slug)
    if (!available) {
      setIsAvailable(false)
    } else {
      setIsAvailable(true)
    }
  }

  const onSaveSlug = () => {
    setIsEditing(false)
    const autoSlug = onGenerateSlug(newSlug)
    onChangeSlug(autoSlug)
    onCheckSlugIsAvailable(autoSlug)
  }

  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <Label htmlFor='slug'>Custom URL</Label>
        {!isEditing ? (
          <Button variant='ghost' size='sm' onClick={() => setIsEditing(true)} className='h-8 px-2'>
            <Pencil className='h-4 w-4' />
          </Button>
        ) : (
          <div className='flex gap-1'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => {
                setIsEditing(false)
              }}
              className='h-8 px-2'>
              <X className='h-4 w-4' />
            </Button>
            <Button variant='ghost' size='sm' onClick={onSaveSlug} className='h-8 px-2'>
              <Check className='h-4 w-4' />
            </Button>
          </div>
        )}
      </div>
      <div className='flex items-center gap-2'>
        <div className='text-sm text-muted-foreground'>/articles/</div>
        {isEditing ? (
          <Input id='slug' value={newSlug} onChange={handleSlugChange} className='flex-1' />
        ) : (
          <div className='text-sm'>{newSlug}</div>
        )}
      </div>
      {!isAvailable && <div className='text-sm text-red-500'>Cet Url est deja utilisé</div>}
    </div>
  )
}

export default AdminCreateBlogSlugField
