import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { UploadButton } from '../../components/UploadButton'

type AdminCreateBlogUploadImageProps = {
  mainImage: string | null
  onChangeImage: (image: string) => void
}

const AdminCreateBlogUploadImage = ({ mainImage, onChangeImage }: AdminCreateBlogUploadImageProps) => {
  const [image, setImage] = useState<string | null>(mainImage)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const onDeleteImage = () => {
    setImage(null)
    onChangeImage('')
  }

  return (
    <div className='h-[88px] flex items-center justify-center'>
      {image ? (
        <div
          className='flex justify-center items-center relative h-[88px] block'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <Image
            src={image}
            alt='Main Image'
            width={160}
            height={160}
            className='object-cover rounded-lg border border-gray-300'
          />
          {isHovered && (
            <div className='absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 rounded-bl-lg'>
              <Button onClick={onDeleteImage} variant='destructive'>
                <Trash2 size={16} />
              </Button>
            </div>
          )}
        </div>
      ) : (
        <UploadButton
          appearance={{
            button:
              'bg-[#1e3e36] text-white rounded-lg h-9 px-4 py-2 ut-uploading:cursor-not-allowed after:bg-[#7ca998]'
          }}
          endpoint='blogImage'
          onClientUploadComplete={res => {
            setImage(res?.[0]?.ufsUrl || null)
            onChangeImage(res?.[0]?.ufsUrl || '')
          }}
          onUploadError={error => {
            console.error(error)
          }}
          content={{
            button({ ready }) {
              if (ready) return <div>Ajouter une Image</div>
              return 'Chargement...'
            }
          }}
        />
      )}
    </div>
  )
}

export default AdminCreateBlogUploadImage
