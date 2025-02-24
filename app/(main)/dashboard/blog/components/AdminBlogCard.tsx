import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BlogType } from '@/src/interfaces/blog'

type AdminBlogCardProps = {
  blog: BlogType
}

const AdminBlogCard = ({ blog }: AdminBlogCardProps) => {
  return (
    <Card
      key={blog.id}
      className='group cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-lg'>
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={blog.mainImage}
          alt={blog.title}
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          width={600}
          height={400}
          priority
        />
      </div>
      <CardContent className='flex flex-col space-y-4 p-6'>
        <div className='flex gap-2 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]'>
          {blog.categories.map((category, index) => (
            <Badge key={index} variant='secondary' className='flex-shrink-0'>
              {category.name}
            </Badge>
          ))}
        </div>
        <div className='space-y-3'>
          <p className='text-sm text-muted-foreground'>{new Date(blog.createdAt).toLocaleDateString('fr-FR')}</p>
          <h2 className='text-xl font-bold leading-tight tracking-tight'>{blog.title}</h2>
          <div className='text-muted-foreground line-clamp-4 overflow-hidden'>{blog.summary}</div>
        </div>
        <div className='flex items-end justify-between'>
          <Link href={`/dashboard/blog/${blog.id}`} passHref>
            <Button variant='link' className='p-0 h-auto text-sm text-secondary'>
              Lire la suite →
            </Button>
          </Link>
          <Link href={`/dashboard/blog/update/${blog.id}`} passHref>
            <Button variant='default'>Modifier</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminBlogCard
