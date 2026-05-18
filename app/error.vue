<script setup lang="ts">
  import { computed } from 'vue'
  import type { NuxtError } from '#app'
  import { clearError } from '#app'
  import BaseButton from './components/BaseButton.vue'
  import BaseLoader from './components/BaseLoader.vue'

  const props = defineProps<{ error: NuxtError }>()
  const handleError = () => clearError({ redirect: '/' })

  const statusCode = computed(() => props.error.status || 500)
  const titleError = computed(() => `${statusCode.value} ERROR`)
  const errorMessage = computed(() => {
    switch (statusCode.value) {
      case 404:
        return 'This page not found;'
      case 500:
        return 'Internal server error;'
      default:
        return 'Something went wrong;'
    }
  })
</script>

<template>
  <NuxtLayout>
    <section class="error-page">
      <div class="container error-page__container">
        <BaseLoader class="error-page__loader" />
        <h1 class="error-page__title">{{ titleError }}</h1>
        <p class="error-page__content">
          {{ errorMessage }}<br />
          Back to&nbsp;home and start again
        </p>
        <BaseButton
          type="button"
          variant="transparent"
          class="error-page__button"
          @click="handleError"
        >
          HOMEPAGE
        </BaseButton>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  @use 'sass:map';

  .error-page {
    &__container {
      margin: 0 auto;
      text-align: center;
    }

    &__loader,
    &__title {
      margin-bottom: 24px;
    }

    &__title {
      @include text-style(33px, $black-color, 43px);
    }

    &__content {
      margin-bottom: 64px;

      @include text-style(20px, $dark-gray-color, 26px);
    }

    &__button {
      padding: 16px 49px;
      margin-bottom: 266px;
      border: 1px $black-color solid;
      border-radius: 4px;

      @include text-style(16px, $black-color, normal, map.get($font-weights, bold));
    }

    &__button:hover {
      background-color: burlywood;
    }
  }
</style>
