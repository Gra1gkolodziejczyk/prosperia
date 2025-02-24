import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { NewBlogType } from '@/src/interfaces/blog'
import { newBlogFormSchema } from '@/src/lib/schemas'
import { cn } from '@/src/lib/utils'

type AdminCreateBlogHeaderProps = {
  step: number
  onChangeStep: (step: number) => void
  article: NewBlogType
  setError: (message: string[]) => void
  onSubmit: (value: boolean) => void
}

const AdminCreateBlogHeader = ({ step, onChangeStep, article, setError, onSubmit }: AdminCreateBlogHeaderProps) => {
  const stepText = ['Détail', 'Contenu', 'Preview']

  const handlePrevious = () => {
    if (step > 0) {
      onChangeStep(step - 1)
    }
  }

  const handleNext = () => {
    if (step === 0) {
      onChangeStep(step + 1)
    } else if (step === 1) {
      const validateArticle = newBlogFormSchema.safeParse(article)
      if (validateArticle.success) {
        onChangeStep(step + 1)
      } else {
        console.log(validateArticle.error.errors)
        setError(validateArticle.error.errors.map(error => error.message))
      }
    } else if (step === 2) {
      onSubmit(true)
    }
  }

  return (
    <div>
      <div className='space-y-4 flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <Button onClick={handlePrevious} disabled={step === 0} variant='outline'>
            Precedent
          </Button>
          <Button onClick={handleNext}>{step === 2 ? 'Publier' : 'Suivant'}</Button>
          {step === 2 && (
            <Button onClick={() => onSubmit(false)} variant='outline'>
              Sauvegarder en Brouillon
            </Button>
          )}
        </div>
        <div className='font-semibold '>
          Etape {step + 1} sur 3: {stepText[step]}
        </div>
      </div>
      <div className='mt-4 space-y-4'>
        <Progress value={50 * step} />
        <div className='flex flex-row justify-between'>
          {stepText.map((text, index) => (
            <div key={index} className={cn(`text-sm ${step >= index ? 'font-semibold' : 'font-normal'}`)}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminCreateBlogHeader
