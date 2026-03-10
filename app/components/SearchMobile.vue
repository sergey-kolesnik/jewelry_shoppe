<script lang="ts" setup>
  import SearchIcon from '~/assets/icons/SearchIcon.vue'
</script>

<template>
  <form class="search" action="">
    <SearchIcon class="search__icon" />
    <input class="search__input" type="text" placeholder="Search" />
  </form>
</template>

<style lang="scss" scoped>
  .search {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    &__icon {
      position: absolute;
      left: 10px;
      bottom: 10px;
      width: 12px;
      height: 12px;
      color: $dark-gray-color;
    }

    &__input {
      width: 100%;
      height: 32px;
      padding-left: 30px;
      background-color: $light-gray-color;
      border: none;
      border-radius: 4px;
    }

    &__input::placeholder {
      @include text-style(12px, $dark-gray-color, 20px);
    }
  }
</style>
