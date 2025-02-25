import React from 'react'
import AdminCategoryHeader from './components/AdminCategoryHeader'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  const noCategories: { id: string; name: string; createdAt: Date }[] = []
  return (
    <div className='space-y-4'>
      <AdminCategoryHeader categories={noCategories} />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Card className='flex flex-col w-70'>
          <div className='flex flex-row items-center justify-between p-4'>
            <Skeleton className='h-10 w-1/2' />
          </div>
        </Card>
        <Card className='flex flex-col '>
          <div className='flex flex-row items-center justify-between p-4'>
            <Skeleton className='h-10 w-1/2' />
          </div>
        </Card>
        <Card className='flex flex-col '>
          <div className='flex flex-row items-center justify-between p-4'>
            <Skeleton className='h-10 w-1/2' />
          </div>
        </Card>
        <Card className='flex flex-col '>
          <div className='flex flex-row items-center justify-between p-4'>
            <Skeleton className='h-10 w-1/2' />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Loading
