'use client'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { NewBlogType } from '@/src/interfaces/blog'
import { CategoryType } from '@/src/interfaces/category'
import AdminCreateBlogFirstStep from './AdminCreateBlogFirstStep'
import AdminCreateBlogHeader from './AdminCreateBlogHeader'
import AdminCreateSecondStep from './AdminCreateSecondStep'
import AdminCreateBlogThirdStep from './AdminCreateBlogThirdStep'
import AdminCreateErrorDialog from './AdminCreateErrorDialog'
import { createBlog } from '@/src/actions/blog.action'

type AdminCreateBlogBodyProps = {
  categories: CategoryType[]
  userId: string
}

const AdminCreateBlogBody = ({ categories, userId }: AdminCreateBlogBodyProps) => {
  const [article, setArticle] = useState<NewBlogType>({
    title: '',
    content: '',
    mainImage: '',
    customUrl: '',
    categories: [],
    summary: '',
    creatorId: userId,
    isPublished: false
  })
  const [step, setStep] = useState(0)
  const [errorMessage, setErrorMessage] = useState<string[]>([])

  const router = useRouter()

  const onSubmit = async (isPublished: boolean) => {
    console.log(isPublished)
    const newArticle = { ...article, isPublished }
    console.log(newArticle)
    const resp = await createBlog(newArticle)
    if (resp.success) {
      router.push('/dashboard/blog')
      toast.success(resp.message)
    } else {
      toast.error(resp.message)
    }
  }

  const renderStepComponent = () => {
    switch (step) {
      case 0:
        return <AdminCreateBlogFirstStep categories={categories} article={article} setArticle={setArticle} />
      case 1:
        return <AdminCreateSecondStep article={article} setArticle={setArticle} />
      case 2:
        return <AdminCreateBlogThirdStep article={article} />
      default:
        return <AdminCreateBlogFirstStep categories={categories} article={article} setArticle={setArticle} />
    }
  }
  return (
    <div className='space-y-4'>
      <AdminCreateBlogHeader
        step={step}
        onChangeStep={setStep}
        article={article}
        setError={setErrorMessage}
        onSubmit={onSubmit}
      />
      {renderStepComponent()}
      <AdminCreateErrorDialog errorMessage={errorMessage} setError={setErrorMessage} />
    </div>
  )
}

export default AdminCreateBlogBody
