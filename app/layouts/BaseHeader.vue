<script lang="ts" setup>
  import { ref } from 'vue'
  import LogoIcon from '@/assets/icons/LogoIcon.vue'
  import HeaderLinks from '~/components/HeaderLinks.vue'
  import HeaderIcons from '~/components/HeaderIcons.vue'
  import BurgerIcon from '~/assets/icons/BurgerIcon.vue'
  import BasePopup from '~/components/BasePopup.vue'
  import SearchMobile from '~/components/SearchMobile.vue'
  import CloseIcon from '~/assets/icons/CloseIcon.vue'
  import HeaderMobileNav from '~/components/HeaderMobileNav.vue'

  const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__line">
        <LogoIcon class="header__logo" />
        <div class="header__right">
          <HeaderLinks class="header__links" />
          <HeaderIcons class="header__icons" />

          <BurgerIcon v-if="!isMenuOpen" class="header__burger" @click="isMenuOpen = !isMenuOpen" />
          <CloseIcon v-else class="header__close" @click="isMenuOpen = !isMenuOpen" />
        </div>
      </div>
      <SearchMobile class="header__search-mobile" />
    </div>
  </header>
  <div class="header__popup">
    <BasePopup v-if="isMenuOpen">
      <HeaderMobileNav />
    </BasePopup>
  </div>
</template>

<style scoped lang="scss">
  .header {
    padding-top: 64px;

    &__logo {
      width: 158px;

      @media (max-width: $breakpoint-m) {
        width: 99px;
      }
    }

    &__right {
      display: flex;
      align-items: center;
      // margin-left: auto;
    }

    &__links {
      @media (max-width: $breakpoint-m) {
        display: none;
      }
    }

    &__icons {
      display: flex;
      gap: 39px;

      @media (max-width: $breakpoint-m) {
        gap: 24px;
      }
    }

    &__burger,
    &__close {
      display: none;
      width: 20px;
      cursor: pointer;

      @media (max-width: $breakpoint-m) {
        display: block;
      }
    }

    &__line {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;;
      width: 100%;
      padding-bottom: 17px;
      border-bottom: 1px solid $gray-color;

      @media (max-width: $breakpoint-m) {
        border-bottom: none;
      }
    }

    &__popup {
      position: relative;
    }
  }
</style>
