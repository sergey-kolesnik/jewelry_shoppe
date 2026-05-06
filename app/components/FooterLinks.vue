<script lang="ts" setup>
  import { NAVIGATION_SECONDARY } from '~/constants/navigation'
</script>

<template>
  <ul class="footer-links">
    <li v-for="item in NAVIGATION_SECONDARY" :key="item.id" class="footer-links__item">
      <a class="footer-links__link" :href="item.href">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .footer-links {
    display: flex;
    margin-bottom: 48px;

    &__item:not(:last-child) {
      margin-right: 41px;
    }

    &__link {
      text-transform: uppercase;
    }
  }
</style>
