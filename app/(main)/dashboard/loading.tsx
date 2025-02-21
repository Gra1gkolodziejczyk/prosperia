import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <Loader2 size={32} className='animate-spin' />
    </div>
  )
}

export default Loading
