'use client'

import { BlogType, NewBlogType } from '@/src/interfaces/blog'
import { CategoryType } from '@/src/interfaces/category'
import { useState } from 'react'
import AdminCreateBlogFirstStep from '../../../new/components/AdminCreateBlogFirstStep'
import AdminCreateBlogHeader from '../../../new/components/AdminCreateBlogHeader'
import AdminCreateBlogThirdStep from '../../../new/components/AdminCreateBlogThirdStep'
import AdminCreateErrorDialog from '../../../new/components/AdminCreateErrorDialog'
import AdminCreateSecondStep from '../../../new/components/AdminCreateSecondStep'
import { updateBlog } from '@/src/actions/blog.action'
import { useRouter } from 'next/navigation'

type AdminUpdateBlogBodyProps = {
  article: BlogType
  categories: CategoryType[]
}

const AdminUpdateBlogBody = ({ article, categories }: AdminUpdateBlogBodyProps) => {
  const [newArticle, setNewArticle] = useState<NewBlogType>({
    title: article.title,
    content: article.content,
    mainImage: article.mainImage,
    customUrl: article.customUrl,
    categories: article.categories,
    summary: article.summary,
    creatorId: article.creatorId,
    isPublished: article.isPublished
  })
  const [step, setStep] = useState(0)
  const [errorMessage, setErrorMessage] = useState<string[]>([])

  const router = useRouter()

  const onSubmit = async (isPublished: boolean) => {
    const updateArticle: BlogType = {
      id: article.id,
      title: newArticle.title,
      content: newArticle.content,
      mainImage: newArticle.mainImage,
      customUrl: newArticle.customUrl,
      categories: newArticle.categories,
      summary: newArticle.summary,
      creatorId: newArticle.creatorId,
      isPublished: isPublished,
      updatedAt: new Date(article.updatedAt),
      createdAt: new Date(article.createdAt)
    }
    const resp = await updateBlog(updateArticle)
    if (resp) {
      router.push('/dashboard/blog')
    } else {
      console.error('Error updating blog')
    }
  }

  const renderStepComponent = () => {
    switch (step) {
      case 0:
        return <AdminCreateBlogFirstStep categories={categories} article={newArticle} setArticle={setNewArticle} />
      case 1:
        return <AdminCreateSecondStep article={newArticle} setArticle={setNewArticle} />
      case 2:
        return <AdminCreateBlogThirdStep article={newArticle} />
      default:
        return <AdminCreateBlogFirstStep categories={categories} article={newArticle} setArticle={setNewArticle} />
    }
  }
  return (
    <div className='space-y-4'>
      <AdminCreateBlogHeader
        step={step}
        onChangeStep={setStep}
        article={newArticle}
        setError={setErrorMessage}
        onSubmit={onSubmit}
      />
      {renderStepComponent()}
      <AdminCreateErrorDialog errorMessage={errorMessage} setError={setErrorMessage} />
    </div>
  )
}

export default AdminUpdateBlogBody
