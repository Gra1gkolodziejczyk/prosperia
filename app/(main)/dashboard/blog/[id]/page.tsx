'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { BlogType } from '@/src/interfaces/blog'
import { idSchema } from '@/src/lib/schemas'

const BlogAdminDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<BlogType | null>(null)

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
            console.log(data.data)
            setBlog(data.data[0])
          } else {
            router.push('/dashboard/blog')
          }
        } else {
          router.push('/dashboard/blog')
        }
      }
    }
    fetchBlog()
  }, [])

  if (!blog) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'></div>
      </div>
    )
  } else {
    return (
      <div className='container mx-auto p-4'>
        <Link href='/dashboard/blog'>
          <Button variant='outline' className='mb-4'>
            ← Retour
          </Button>
        </Link>
        <article className='prose lg:prose-xl mx-auto'>
          <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
          <div className='flex flex-wrap gap-2 my-4'>
            {blog.categories.map((category, index) => (
              <Badge key={index} variant='secondary'>
                {category.name}
              </Badge>
            ))}
          </div>
          {blog.mainImage && (
            <div className='max-h-[400px] overflow-hidden rounded-lg'>
              <Image
                src={blog.mainImage || '/placeholder.svg'}
                alt={blog.title}
                width={800}
                height={400}
                priority={true}
                className='object-cover rounded-lg border border-gray-300'
              />
            </div>
          )}
          <div
            className='p-4 min-h-[200px] flex flex-col gap-4 rounded-lg'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    )
  }
}

export default BlogAdminDetailPage
