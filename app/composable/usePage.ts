import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

export const usePage = () => {
  const route = useRoute()
  const router = useRouter()

  const currentPage = computed({
    get: () => Number(route.query.page) || 1,
    set: (val: number) => router.push({ query: { ...route.query, page: val } }),
  })

  const queryPage = computed(() => route.query.page as string | undefined)

  const replacePage = () => {
    router.replace({
      query: {
        page: currentPage.value,
      },
    })
  }

  const goToPage = (val: number) => {
    currentPage.value = val
  }

  const prev = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const next = (totalCountPage: number) => {
    if (currentPage.value < totalCountPage) {
      currentPage.value++
    }
  }

  return {
    queryPage,
    currentPage,
    replacePage,
    goToPage,
    prev,
    next,
  }
}
