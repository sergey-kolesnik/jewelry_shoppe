<script lang="ts" setup>
  import SearchIcon from '~/assets/icons/SearchIcon.vue'
  import CartIcon from '~/assets/icons/CartIcon.vue'
  import UserIcon from '~/assets/icons/UserIcon.vue'
</script>

<template>
  <SearchIcon class="header__icon" />
  <CartIcon class="header__icon" />
  <UserIcon class="header__icon" />
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
