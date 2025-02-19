import { z } from 'zod'

const HeaderSchema = z.object({
  title: z.string().min(1, 'Titre obligatoire'),
  content: z.string().min(1, 'Description obligatoire')
})

type HeaderProps = z.infer<typeof HeaderSchema>

const AdminLayoutHeader = ({ title, content }: HeaderProps) => {
  HeaderSchema.safeParse({ title, content })

  return (
    <div className='space-y-2.5'>
      <div className='space-y-1'>
        <h1 className='text-2x1 font-semibold tracking-tight'>{title}</h1>
        {content && <p className='text-muted-foreground'>{content}</p>}
      </div>
    </div>
  )
}

export default AdminLayoutHeader
