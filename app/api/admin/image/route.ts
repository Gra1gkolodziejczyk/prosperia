import { NextRequest, NextResponse } from 'next/server'
import { UTApi } from 'uploadthing/server'

export const DELETE = async (req: NextRequest) => {
  try {
    const url = await req.json()
    if (url !== null) {
      const utapi = new UTApi()
      const id = url.split('/').pop()
      await utapi.deleteFiles(id)
    } else {
      return NextResponse.json({
        status: 400,
        message: 'URL not found',
        data: []
      })
    }
  } catch {
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      data: []
    })
  }
}
