<script lang="ts" setup>
  import LogoIcon from '@/assets/icons/LogoIcon.vue'
  import HeaderLinks from '~/components/HeaderLinks.vue'
  import HeaderIcons from '~/components/HeaderIcons.vue'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__line">
        <LogoIcon class="header__logo" />
        <div class="header__right">
          <HeaderLinks class="header__links" />
          <HeaderIcons class="header__icons" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding-top: 64px;

    &__logo {
      min-width: 158px;
    }

    &__right {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    &__icons {
      display: flex;
    }

    &__line {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 17px;
      width: 100%;
      border-bottom: 1px solid $gray-color;
    }
  }
</style>
