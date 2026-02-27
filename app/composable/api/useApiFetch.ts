import type { UseFetchOptions } from 'nuxt/app'
import { useRuntimeConfig, useCookie, useFetch } from 'nuxt/app'
import { computed } from 'vue'

export const useApiFetch = <DataT = unknown>(request: string, options?: UseFetchOptions<DataT>) => {
  const config = useRuntimeConfig()
  const authToken = useCookie('authToken')
  const API_BASE_URL = computed(() => config.public.apiBaseUrl as string)

  if (!config.public.apiBaseUrl) {
    throw new Error('API_BASE_URL is not set')
  }

  const defaults: UseFetchOptions<DataT> = {
    baseURL: API_BASE_URL,
    key: request + JSON.stringify(options?.params),
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken.value ? `Bearer ${authToken.value}` : '',
    },
  }

  const params = { ...defaults, ...options }

  return useFetch(request, params)
}
