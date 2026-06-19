<script setup lang="ts">
  import { computed } from 'vue'
  import { usePage } from '~/composable/usePage'
  import BaseButton from './BaseButton.vue'
  import { ITEMS_IN_PAGE } from '~/constants/pagination.js'
  import type { PaginatorProps } from '~/types/paginatorProps.types'

  const props = defineProps<PaginatorProps>()
  const { currentPage, goToPage, prev, next } = usePage()

  const totalCountPage = computed(() => Math.ceil((props.totalCountProduct ?? 0) / ITEMS_IN_PAGE))

  const buttons = computed(() => {
    const result: (number | string)[] = []

    if (currentPage.value > 1) {
      result.push('<')
    }
    if (currentPage.value >= 3) {
      result.push(currentPage.value - 2)
    }

    if (currentPage.value >= 2) {
      result.push(currentPage.value - 1)
    }

    for (let i = 0; i < 3; i++) {
      const page = currentPage.value + i
      if (page <= totalCountPage.value) {
        result.push(page)
      }
    }

    if (currentPage.value < totalCountPage.value) {
      result.push('>')
    }

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
      :class="['paginator__button', { 'paginator__button--active': value === currentPage }]"
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

    &__button {
      width: 45px;
      height: 45px;
      border: 1px $gray-color solid;
      border-radius: 4px;

      @include text-style(14px, $black-color, 22px);

      &--active {
        color: white;
        background-color: $black-color;
      }
    }

    &__button:not(:last-child) {
      margin-right: 12px;
    }
  }
</style>
