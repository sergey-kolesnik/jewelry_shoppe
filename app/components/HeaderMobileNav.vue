<script lang="ts" setup>
  import {
    NAVIGATION_ITEMS_HEADER_MOBILE,
    NAVIGATION_ACTIONS_MOBILE,
  } from '~/constants/navigationHeader'
</script>

<template>
  <ul class="header__links-mobile">
    <li v-for="item in NAVIGATION_ITEMS_HEADER_MOBILE" :key="item.id" class="header__item-mobile">
      <a :href="item.href" class="header__link-mobile">
        {{ item.label }}
      </a>
    </li>
  </ul>
  <ul class="header__actions-mobile">
    <li v-for="item in NAVIGATION_ACTIONS_MOBILE" :key="item.id" class="header__actions-item">
      <a href="" class="header__actions-link">
        <component :is="item.icon" class="header__actions-icon" />
        <span class="header__action-label">
          {{ item.label }}
        </span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .header {
    &__links-mobile {
      border-bottom: 1px solid $gray-color;
    }

    &__item-mobile,
    &__links-mobile,
    &__actions-item {
      margin-bottom: 24px;
    }

    &__actions-icon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }

    &header__link-mobile,
    &header__action-label {
      @include text-style(20px, $black-color, 26px);
    }
  }
</style>
