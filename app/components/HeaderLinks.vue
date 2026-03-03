<script lang="ts" setup>
  import { NAVIGATION_ITEMS_HEADER } from '@/types/navigationHeader'
</script>
<template>
  <nav class="header__nav nav">
    <ul class="nav__list">
      <li v-for="item in NAVIGATION_ITEMS_HEADER" :key="item.id" class="nav__item">
        <a :href="item.href" class="nav__link">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>


<style ts="scss" scoped>
    .nav__list {
        display: flex;
    }
</style>