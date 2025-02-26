import { NewBlogType } from '@/src/interfaces/blog'
import Editor from '../../components/Editor'

type AdminCreateSecondStepProps = {
  article: NewBlogType
  setArticle: (article: NewBlogType) => void
}

const AdminCreateSecondStep = ({ article, setArticle }: AdminCreateSecondStepProps) => {
  return <Editor content={article.content} onChange={content => setArticle({ ...article, content: content })} />
}

export default AdminCreateSecondStep
