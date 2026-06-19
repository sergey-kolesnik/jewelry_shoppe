<script setup lang="ts">
  import { ITEMS_PER_PAGE_OPTIONS } from '~/constants/pagination'
</script>

<template>
  <div class="per-page">
    <ul class="per-page__list">
      <li v-for="(value, index) in ITEMS_PER_PAGE_OPTIONS" :key="index" class="per-page__item">
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
    }
  }
</style>
