import { useApiFetch } from '@/composable/api/useApiFetch'
import type { Product } from '~/types/product.types'

export const useGetAllProducts = () => {
  return useApiFetch<Product[]>('/products', {
    baseURL: 'https://shoppe-api-eleet.amvera.io', // или возьмите из config.public
    headers: {
      Authorization: 'amigo',
    },
  })
}
