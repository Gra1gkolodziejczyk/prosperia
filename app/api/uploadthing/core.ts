import { isUserAdmin } from '@/src/actions/admin.action'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

export const ourFileRouter = {
  blogImage: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 }
  })
    .middleware(async () => {
      if (!(await isUserAdmin())) {
        throw new Error('Unauthorized')
      }
      return { status: 'good' }
    })
    .onUploadComplete(async ({ file }) => {
      return { url: file.ufsUrl }
    })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
