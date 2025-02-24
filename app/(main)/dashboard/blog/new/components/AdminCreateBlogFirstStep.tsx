import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NewBlogType } from '@/src/interfaces/blog'
import { CategoryType } from '@/src/interfaces/category'
import AdminCreateBlogUploadImage from './AdminCreateBlogUploadImage'
import CategoryList from '../../components/CategoryList'
import { Textarea } from '@/components/ui/textarea'
import AdminCategoryCreateButton from '../../../category/components/AdminCategoryCreateButton'
import AdminCreateBlogSlugField from './AdminCreateBlogSlugField'

type AdminCreateBlogFirstStepProps = {
  categories: CategoryType[]
  article: NewBlogType
  setArticle: (article: NewBlogType) => void
}

const AdminCreateBlogFirstStep = ({ categories, article, setArticle }: AdminCreateBlogFirstStepProps) => {
  const [newArticle, setNewArticle] = useState<NewBlogType>(article)

  useEffect(() => {
    setArticle(newArticle)
  }, [newArticle, setArticle])

  return (
    <div className='max-w-3xl mx-auto'>
      <Card>
        <CardHeader>
          <CardTitle>D&eacute;tail de l&apos;Article</CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='title'>Titre</Label>
            <Input
              id='title'
              placeholder='Entrez votre titre'
              value={newArticle.title ?? ''}
              onChange={e => setNewArticle({ ...newArticle, title: e.target.value })}
            />
          </div>
          <AdminCreateBlogSlugField
            slug={newArticle.customUrl}
            onChangeSlug={slug => setNewArticle({ ...newArticle, customUrl: slug })}
            title={newArticle.title}
          />

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <Label>Image</Label>
              <div className='border rounded-lg p-4 bg-muted/10'>
                <AdminCreateBlogUploadImage
                  mainImage={newArticle.mainImage}
                  onChangeImage={mainImage => setNewArticle({ ...newArticle, mainImage })}
                />
              </div>
            </div>

            <div className='space-y-2'>
              <Label>Categories</Label>
              <div className='border rounded-lg p-4 bg-muted/10 flex flex-col'>
                <CategoryList
                  categories={categories}
                  selectedCategories={newArticle.categories}
                  onCategoryChange={selectedCategories =>
                    setNewArticle({ ...newArticle, categories: selectedCategories })
                  }
                />
                <div className='mt-4'>
                  <AdminCategoryCreateButton categories={categories} />
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='summary'>R&eacute;sum&eacute;</Label>
            <Textarea
              id='summary'
              placeholder='Ecrivez votre r&eacute;sum&eacute;'
              value={newArticle.summary ?? ''}
              onChange={e => setNewArticle({ ...newArticle, summary: e.target.value })}
              rows={4}
              className='resize-none'
            />
            <p className='text-sm text-muted-foreground'>
              Le r&eacute;sum&eacute; est la premi&egrave;re chose que les lecteurs verront. Il doit &ecirc;tre concis
              et attrayant.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminCreateBlogFirstStep
