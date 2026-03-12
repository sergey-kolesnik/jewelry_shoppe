<script lang="ts" setup>
  import type { Component } from 'vue'
  import { useAttrs } from 'vue'

  import SearchIcon from '~/assets/icons/SearchIcon.vue'
  import CartIcon from '~/assets/icons/CartIcon.vue'
  import UserIcon from '~/assets/icons/UserIcon.vue'

  defineOptions({ inheritAttrs: false })
  const attrs = useAttrs()

  const icons: Component[] = [SearchIcon, CartIcon, UserIcon]
</script>

<template>
  <div v-bind="attrs">
    <component :is="icon" v-for="(icon, index) in icons" :key="index" class="header__icon" />
  </div>
</template>

<style lang="scss" scoped>
  .header {
    &__icon {
      min-width: 21px;
      cursor: pointer;

      @media (max-width: $breakpoint-s) {
        display: none;
      }
    }

    &__icon:not(:last-child) {
      margin-right: 39px;

      @media (max-width: $breakpoint-s) {
        margin-right: 0;
      }
    }

    @media (max-width: $breakpoint-s) {
      &__icon:nth-child(2) {
        display: inline-block;
        min-width: 18px;
        margin-right: 16px;
      }
    }
  }
</style>
