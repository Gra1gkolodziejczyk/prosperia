import { Skeleton } from '@/components/ui/skeleton'

const FaqAccordionLoading = () => {
  return (
    <div className='space-y-1 mx-auto flex flex-col items-center'>
      <Skeleton className='h-[53px] w-[50%]' />
      <Skeleton className='h-[53px] w-[50%]' />
      <Skeleton className='h-[53px] w-[50%]' />
      <Skeleton className='h-[53px] w-[50%]' />
    </div>
  )
}

export default FaqAccordionLoading
