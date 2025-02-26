'use server'

import { UTApi } from 'uploadthing/server'

const utapi = new UTApi()

export const deleteImage = async (url: string) => {
  try {
    const id = url.split('/').pop()
    if (id) {
      await utapi.deleteFiles(id)
      return { success: true, message: 'Image a bien été supprimée' }
    }
  } catch (error) {
    console.log(`Error deleting image: ${error}`)
  }
  return { success: false, message: "Erreur lors de la suppression de l'image" }
}
