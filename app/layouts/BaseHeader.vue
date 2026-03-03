<script lang="ts" setup>
  import LogoIcon from '@/assets/icons/LogoIcon.vue'
  import HeaderLinks from '~/components/HeaderLinks.vue'
  import HeaderIcons from '~/components/HeaderIcons.vue'
</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <div class="container header__container">
        <LogoIcon class="header__logo" />
        <HeaderLinks class="header__links" />
        <HeaderIcons class="header__icons"/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
    .header__container {
        display: flex;
        flex-direction: row;
    }
</style>
