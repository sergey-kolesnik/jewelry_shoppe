export type Photo = {
  id: number
  title: string
  user: number
  description: string
  url: string
}

export type ApiPhotosResponse = {
  succes: true
  total_photos: number
  message: string
  offset: number
  limit: number
  photos: Photo[]
}
