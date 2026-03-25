// <!-- https://picsum.photos/v2/list?limit=10 -->

import { useApiFetch } from "@/composable/api/useApiFetch";

// export type PicsumImage = {
//   id: string
//   author: string
//   width: number
//   height: number
//   url: string
//   download_url: string
// }

// https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill


// export const useGetAllImages = (options: { id?: number, q?: number, w?: number, h?: number, fit?: string} = {}) => {
//   const { id, q, w, h, fit } = options
  
//   return useApiFetch('/album.png', {
//       params: {
//           id,
//           q,
//           w,
//           h,
//           fit,
//       },
//   })
// }

export const useGetAllImages = (options: { limit?: number } = {}) => {
  const { limit } = options
  
  return useApiFetch('/v2/list', {
      params: {
          limit,
      },
  })
}


