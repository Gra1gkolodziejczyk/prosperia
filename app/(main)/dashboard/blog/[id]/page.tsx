import Link from 'next/link'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { idSchema } from '@/src/lib/schemas'
import { getBlogById } from '../blog.fetch'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const BlogAdminDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  if (!id) {
    redirect('/')
  } else {
    const verifyId = idSchema.safeParse(id)
    if (!verifyId.success) {
      redirect('/')
    } else {
      const blog = await getBlogById(id)
      if (!blog) {
        redirect('/')
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
  }
}

export default BlogAdminDetailPage
