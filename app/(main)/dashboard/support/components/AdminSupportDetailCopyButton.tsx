import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type AdminSupportDetailCopyButtonProps = {
  email: string
}

const AdminSupportDetailCopyButton = ({ email }: AdminSupportDetailCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='none' size='icon' onClick={onCopy}>
            {isCopied ? <Check className='h-3 w-3' /> : <Copy className='h-3 w-3' />}
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}

export default AdminSupportDetailCopyButton
