import { Badge } from '@/components/ui/badge'
import { NewBlogType } from '@/src/interfaces/blog'
import Image from 'next/image'

type AdminCreateBlogThirdStepProps = {
  article: NewBlogType
}

const AdminCreateBlogThirdStep = ({ article }: AdminCreateBlogThirdStepProps) => {
  return (
    <article className='prose lg:prose-xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
      <div className='flex flex-wrap gap-2 my-4'>
        {article.categories.map((category, index) => (
          <Badge key={index} variant='secondary'>
            {category.name}
          </Badge>
        ))}
      </div>
      {article.mainImage && (
        <div className='max-h-[400px] overflow-hidden rounded-lg'>
          <Image
            src={article.mainImage || '/placeholder.svg'}
            alt={article.title}
            width={800}
            height={400}
            priority={true}
            className='object-cover rounded-lg border border-gray-300'
          />
        </div>
      )}
      <div
        className='p-4 min-h-[200px] flex flex-col gap-4 rounded-lg'
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  )
}

export default AdminCreateBlogThirdStep
