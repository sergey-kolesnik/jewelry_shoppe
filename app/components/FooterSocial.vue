<script lang="ts" setup>
  import { SOCIAL_ICONS } from '~/constants/social'
</script>

<template>
  <div class="social">
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
    &__list {
      display: flex;
      justify-content: flex-end;
    }

    &__item:not(:last-child) {
      margin-right: 30px;
    }
  }
</style>
