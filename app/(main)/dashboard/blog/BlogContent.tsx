'use client';

import { Button } from '@/components/ui/button';
import AdminLayoutHeader from '../components/AdminLayoutHeader';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { blogSchema } from '@/src/lib';
import { z } from 'zod';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

type BlogType = z.infer<typeof blogSchema>;

export default function BlogContent() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        if (data) {
          setBlogs(data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <AdminLayoutHeader
              title='Blogs'
              content='Gérer les Articles de Blog'
            />
          </div>
          <div>
            <Link href={'/dashboard/blog/create'}>
              <Button variant='default'>Creer un nouveau</Button>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap gap-8'>
          <Skeleton className='w-64 h-48' />
          <Skeleton className='w-64 h-48' />
          <Skeleton className='w-64 h-48' />
          <Skeleton className='w-64 h-48' />
          <Skeleton className='w-64 h-48' />
          <Skeleton className='w-64 h-48' />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <AdminLayoutHeader
            title='Blogs'
            content='Gérer les Articles de Blog'
          />
        </div>
        <div>
          <Link href={'/dashboard/blog/create'}>
            <Button variant='default'>Creer un nouveau</Button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className='group cursor-pointer flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm transition-all hover:shadow-lg'
          >
            <div className='relative aspect-video overflow-hidden rounded-t-lg max-h[400px] max-w-full'>
              <Image
                src={blog.mainImage}
                alt={blog.title}
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                width={600}
                height={400}
                priority={true}
              />
            </div>
            <div className='flex flex-1 flex-col space-y-4 p-6'>
              <div className='flex flex-wrap gap-2'>
                {blog.categories.map((category, index) => (
                  <Badge key={index} variant='secondary'>
                    {category.name}
                  </Badge>
                ))}
              </div>
              <div className='space-y-3'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {new Date(blog.createdAt).toLocaleDateString('fr-FR')}
                </p>
                <h2 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white'>
                  {blog.title}
                </h2>
                <div
                  className='text-gray-600 dark:text-gray-300 line-clamp-4 overflow-hidden text-ellipsis'
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
              <div className='flex-1 flex items-end justify-between'>
                <Link href={`/dashboard/blog/${blog.id}`}>
                  <button className='inline-flex items-center text-sm font-medium text-secondary'>
                    Lire la suite
                    <svg
                      className='ml-1 h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </Link>
                <Link href={`/dashboard/blog/update/${blog.id}`}>
                  <Button variant='default'>Modifier</Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
