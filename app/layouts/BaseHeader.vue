<script lang="ts" setup>
  import LogoIcon from '@/assets/icons/LogoIcon.vue'
  import HeaderLinks from '~/components/HeaderLinks.vue'
  import HeaderIcons from '~/components/HeaderIcons.vue'
  import BurgerIcon from '~/assets/icons/BurgerIcon.vue'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__line">
        <LogoIcon class="header__logo" />
        <div class="header__right">
          <HeaderLinks class="header__links" />
          <HeaderIcons class="header__icons" />
          <BurgerIcon class="header__burger" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding-top: 64px;

    &__logo {
      width: 158px;

      @media (max-width: $breakpoint-s) {
        width: 99px;
      }
    }

    &__right {
      display: flex;
      align-items: center;
      margin-left: auto;

    }

    &__links {
      @media (max-width: $breakpoint-s) {
        display: none;
      }
    }

    &__icons {
      display: flex;
    }

    &__burger {
      display: none;
      cursor: pointer;
      

      @media (max-width: $breakpoint-s) {
        display: block;
      }
    }

    &__line {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding-bottom: 17px;
      border-bottom: 1px solid $gray-color;

      @media (max-width: $breakpoint-s) {
        border-bottom: none;
      }
    }
  }
</style>
