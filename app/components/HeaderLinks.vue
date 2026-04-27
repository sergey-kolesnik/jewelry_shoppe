<script lang="ts" setup>
  import { NAVIGATION_PRIMARY } from '~/constants/navigation'
</script>
<template>
  <nav class="header__nav nav">
    <ul class="nav__list">
      <li v-for="item in NAVIGATION_PRIMARY" :key="item.id" class="nav__item">
        <a :href="item.href" class="nav__link">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    &__list {
      display: flex;
      flex: 1;
      gap: 64px;
      justify-content: center;

      @media (max-width: $breakpoint-l) {
        gap: 32px;
      }
    }

    &__item:last-child {
      padding-right: 48px;
      margin-right: 48px;
      border-right: 1px solid $dark-gray-color;
    }

    &__link {
      @include text-style(16px, $black-color, 27px);
    }
  }
</style>
