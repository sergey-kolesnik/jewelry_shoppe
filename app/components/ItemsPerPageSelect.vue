<script setup lang="ts">
  import { ITEMS_PER_PAGE_OPTIONS } from '~/constants/pagination'
  defineProps<{
    modelValue: number
  }>()

  const emit = defineEmits<{
    'update:modelValue': [value: number]
  }>()

  const handleClick = (value: number) => {
    emit('update:modelValue', value)
  }
</script>

<template>
  <div class="per-page">
    <ul class="per-page__list">
      <li
        v-for="(value, index) in ITEMS_PER_PAGE_OPTIONS"
        :key="index"
        class="per-page__item"
        @click="handleClick(value)"
      >
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .per-page {
    &__list {
      display: flex;
      flex-direction: row;
      gap: 10px;
      padding: 5px;
      margin-bottom: 10px;
      border: 1px $black-color solid;
      border-radius: 10px;
    }

    &__item {
      cursor: pointer;

      @include text-style(16px, $black-color, 16px);
    }

    &__item:not(:last-child) {
      padding-right: 5px;
      border-right: 1px $black-color solid;
    }

    &__item:hover {
      color: $accent-color;
    }
  }
</style>
