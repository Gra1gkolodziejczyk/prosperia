import { NewBlogType } from '@/src/interfaces/blog'
import Editor from '../../components/Editor'

type AdminCreateSecondStepProps = {
  article: NewBlogType
  setArticle: (article: NewBlogType) => void
}

const AdminCreateSecondStep = ({ article, setArticle }: AdminCreateSecondStepProps) => {
  return (
    <Editor
      content={JSON.stringify(article.content)}
      onChange={newContent => setArticle({ ...article, content: newContent?.toString() || '' })}
    />
  )
}

export default AdminCreateSecondStep
