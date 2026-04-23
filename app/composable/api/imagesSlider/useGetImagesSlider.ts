import { useApiFetch } from '@/composable/api/useApiFetch'
import type { Photo } from '~/types/imageSlider.type'

export const useGetAllImages = (options: { limit?: number } = {}) => {
  const { limit } = options
  return useApiFetch<Photo[]>('/v2/list', { params: { limit } })
}
