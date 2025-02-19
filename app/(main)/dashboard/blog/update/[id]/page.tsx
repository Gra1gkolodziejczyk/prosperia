'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { blogSchema, createBlogFormSchema, idSchema } from '@/src/lib/schemas'
import { Content } from '@tiptap/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'
import { UploadButton } from '../../components/UploadButton'
import Image from 'next/image'
import { Editor } from '../../components/Editor'
import CategoryList from '../../components/CategoryList'
import { CategoryType } from '@/src/interfaces/category'
import { BlogResInterface } from '@/src/interfaces/blog'
import { AdminDeleteDialog } from '../../../components/AdminDeleteDialog'
import { Trash2 } from 'lucide-react'

const BlogAdminDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<z.infer<typeof blogSchema> | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState<Content>(null)
  const [mainImage, setMainImage] = useState<string | null>(null)
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [deleteId, setDeleteId] = useState<string>('')
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState(false)

  const form = useForm<z.infer<typeof createBlogFormSchema>>({
    defaultValues: {
      title: blog?.title
    }
  })

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.id) {
        router.push('/dashboard/blog')
      } else {
        const verifyId = idSchema.safeParse(params.id)
        if (verifyId.success) {
          const res = await fetch(`/api/blog/${verifyId.data}`)
          const data = await res.json()
          if (data.status === 200) {
            setBlog(data.data[0])
            setContent(data.data[0].content)
            setMainImage(data.data[0].mainImage)
            setSelectedCategories(data.data[0].categories.map((category: { id: string }) => category.id))
            form.reset({
              title: data.data[0].title
            })
          } else {
            router.push('/dashboard/blog')
          }
        } else {
          router.push('/dashboard/blog')
        }
      }
    }
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/admin/category')
        const data = await res.json()
        if (data) {
          setCategories(data.data)
        }
      } catch (error) {
        toast.error('Erreur lors de la récupération des catégories')
        console.error('Error fetching Categories:', error)
      }
    }
    fetchCategories()
    fetchBlog()
  }, [])

  const onDeleteImage = async () => {
    try {
      await fetch('/api/admin/image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mainImage)
      })
      setMainImage(null)
      toast.success('Image supprimée avec succès!')
    } catch (error) {
      console.error(error)
      toast.error("Erreur lors de la suppression de l'image")
    }
    setIsHovered(false)
  }

  const deleteIsConfirm = async (isConfirm: boolean) => {
    setOpenConfirmDelete(false)
    console.log('deleteIsConfirm', isConfirm, deleteId)
    if (!isConfirm || deleteId === '') {
      console.error('Error deleting Blog:', deleteId, isConfirm)
      toast.error('Erreur lors de la suppression de la Blog')
      return
    }
    try {
      const id = deleteId
      const res = await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
      const data: BlogResInterface = await res.json()
      switch (data.status) {
        case 200:
          toast.success('Blog supprimée avec succès')
          console.log('Blog deleted:', data.data)
          router.push(`/dashboard/blog`)
          console.log('Blog deleted:', data.data)
          break
        case 404:
          console.error('Blog not found')
          toast.error('Erreur lors de la suppression de la Blog: Blog non trouvée')
          break
        case 400:
          console.error('Bad request')
          toast.error(data.message)
          break
        default:
          console.error('Error deleting Blog:', data.message)
          toast.error("Une erreur s'est produite en interne. Veuillez réessayer plus tard.")
          break
      }
    } catch (error) {
      console.error('Error deleting Blog:', error)
      toast.error("Une erreur s'est produite en interne. Veuillez réessayer plus tard.")
    }
    setDeleteId('')
  }

  const onSubmit = async (values: z.infer<typeof createBlogFormSchema>) => {
    setError(null)
    const validateTitle = createBlogFormSchema.safeParse(values)
    if (!validateTitle.success) {
      setError(validateTitle.error.errors[0].message)
      return
    } else {
      if (!content) {
        setError('Veuillez saisir un contenu.')
        return
      } else if (!mainImage) {
        setError('Veuillez ajouter une image principale.')
        return
      } else {
        try {
          const res = await fetch(`/api/admin/blog/${blog?.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: validateTitle.data.title,
              content: content,
              mainImage,
              creatorId: blog?.creatorId,
              categoryIds: selectedCategories
            })
          })
          const data = await res.json()
          switch (data.status) {
            case 200:
              toast.success('Article update avec succès!')
              router.push(`/dashboard/blog`)
              break
            case 400:
              setError(data.message)
              break
            case 404:
              setError('Article non trouvé.')
              break
            default:
              setError("Une erreur est survenue lors de la création de l'article.")
              break
          }
        } catch (error) {
          console.error(error)
          setError("Une erreur est survenue lors de la création de l'article.")
        }
      }
    }
  }

  if (!blog) {
    return <div></div>
  } else {
    return (
      <div className='flex flex-col gap-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex justify-between items-center mb-4'>
              <h1>Modifier votre Article</h1>
              <div className='flex gap-4'>
                <Button variant='default' type='submit' className='mt-4 justify-center'>
                  Modifier
                </Button>
                <Button
                  variant='secondary'
                  type='button'
                  onClick={() => {
                    setDeleteId(blog.id)
                    setOpenConfirmDelete(true)
                  }}
                  className='mt-4 justify-center'>
                  Supprimer
                </Button>
              </div>
            </div>
            {error && (
              <Alert variant='destructive' className='mb-4'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Entrez votre titre' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className='flex flex-row gap-4 w-full'>
          <div className='flex justify-center items-center w-1/2 border-r border-gray-300'>
            {mainImage ? (
              <div
                className='relative mt-3 group w-[160px] h-[160px]'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Image
                  src={mainImage}
                  alt='Main Image'
                  width={160}
                  height={160}
                  className='object-cover rounded-lg border border-gray-300'
                />
                {isHovered && (
                  <div className='absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 rounded-bl-lg'>
                    <Button onClick={onDeleteImage}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <UploadButton
                appearance={{
                  button:
                    'bg-[#1e3e36] text-white rounded-lg h-9 px-4 py-2 ut-uploading:cursor-not-allowed after:bg-[#7ca998]'
                }}
                endpoint='blogImage'
                onClientUploadComplete={res => {
                  setMainImage(res?.[0]?.ufsUrl || null)
                  toast.success('Upload successful!')
                }}
                onUploadError={error => {
                  console.error(error)
                  toast.error(`Upload failed: ${error.message}`)
                }}
                content={{
                  button({ ready }) {
                    if (ready) return <div>Ajouter une Image</div>
                    return 'Chargement...'
                  }
                }}
              />
            )}
          </div>
          <div className='flex justify-center items-center w-1/2 pl-4'>
            <div className='w-3/5'>
              <CategoryList
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={setSelectedCategories}
              />
            </div>
          </div>
        </div>
        <Editor content={blog.content} onChange={setContent} />
        <Toaster richColors />
        {openConfirmDelete && (
          <AdminDeleteDialog
            confirmDelete={isConfirm => deleteIsConfirm(isConfirm)}
            title='Blog'
            desc='Êtes-vous sûr de vouloir supprimer ce Blog ?'
          />
        )}
      </div>
    )
  }
}

export default BlogAdminDetailPage
