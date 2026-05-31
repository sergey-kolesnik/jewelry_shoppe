<script setup lang="ts">
  import { computed } from 'vue'
  import { usePage } from '~/composable/usePage'
  import BaseButton from './BaseButton.vue'
  import type { BasePaginatorProps } from '~/types/paginatorProps.types'

  const props = defineProps<BasePaginatorProps>()
  const { currentPage, goToPage, prev, next } = usePage()

  const ITEMS_IN_PAGE = 6

  const totalCountPage = computed(() => Math.ceil((props.totalCountProduct ?? 0) / ITEMS_IN_PAGE))

  const buttons = computed(() => {
    const result = ['<', currentPage.value, currentPage.value + 1, currentPage.value + 2, '>']
    return result
  })

  const handlePageClick = (value: number | string) => {
    switch (value) {
      case '<':
        prev()
        break
      case '>':
        next(totalCountPage.value)
        break
      default:
        goToPage(Number(value))
    }
  }
</script>

<template>
  <div class="paginator">
    <BaseButton
      v-for="value in buttons"
      type="button"
      variant="transparent"
      @click="handlePageClick(value)"
    >
      {{ value }}
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
  .paginator {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
  }
</style>
