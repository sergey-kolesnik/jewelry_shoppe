<script lang="ts" setup>
  import { SOCIAL_ICONS } from '~/constants/social'
</script>

<template>
  <div class="social">
    <p class="social__follow">Follow&nbsp;us</p>
    <div class="social__line" />
    <ul class="social__list">
      <li v-for="link in SOCIAL_ICONS" :key="link.id" class="social__item">
        <a :href="link.href" class="social__link">
          <component :is="link.icon" class="social__image" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .social {
    display: flex;
    justify-content: flex-end;

    @media (max-width: $breakpoint-m) {
      justify-content: flex-start;
      margin-bottom: 36px;
    }

    &__follow,
    &__line {
      display: none;

      @media (max-width: $breakpoint-m) {
        display: block;
      }
    }

    &__follow {
      margin-right: 15px;

      @include text-style(12px, $black-color, 20px);
    }

    &__line {
      width: 47px;
      margin-right: 4px;
      border-bottom: 1px $black-color solid;
    }

    &__list {
      display: flex;
    }

    &__image {
      @media (max-width: $breakpoint-m) {
        display: block;
        width: 12px;
        height: 12px;
      }
    }

    &__item:not(:last-child) {
      margin-right: 30px;

      @media (max-width: $breakpoint-m) {
        margin-right: 16px;
      }
    }
  }
</style>
