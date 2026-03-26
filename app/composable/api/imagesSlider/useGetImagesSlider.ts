import { useApiFetch } from '@/composable/api/useApiFetch'
import type { ApiPhotosResponse } from '~/types/imageSlider.type'

export const useGetAllImages = (options: { limit?: number } = {}) => {
  const { limit } = options

  return useApiFetch<ApiPhotosResponse>('/v1/sample-data/photos', {
    params: {
      limit,
    },
  })
}
