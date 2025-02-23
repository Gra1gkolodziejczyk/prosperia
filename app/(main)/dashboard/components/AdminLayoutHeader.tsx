type AdminLayoutHeaderProps = {
  title: string
  content: string
}

const AdminLayoutHeader = ({ title, content }: AdminLayoutHeaderProps) => {
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
