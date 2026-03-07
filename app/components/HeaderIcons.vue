<script lang="ts" setup>
  import type { Component } from 'vue'

  import SearchIcon from '~/assets/icons/SearchIcon.vue'
  import CartIcon from '~/assets/icons/CartIcon.vue'
  import UserIcon from '~/assets/icons/UserIcon.vue'

  const icons: Component[] = [SearchIcon, CartIcon, UserIcon]
</script>

<template>
  <component :is="icon" v-for="(icon, index) in icons" :key="index" class="header__icon" />
</template>

<style lang="scss" scoped>
  .header {
    &__icon {
      min-width: 21px;
    }

    &__icon:not(:last-child) {
      margin-right: 39px;
    }
  }
</style>
