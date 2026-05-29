<script setup lang="ts">
  import type { Product } from '~/types/product.types'

  const props = defineProps<{
    product: Product
  }>()
</script>

<template>
  <div class="product-card">
    <img :src="props.product.image" :alt="props.product.description" class="product-card__image" />
    <h3 class="product-card__title">
      {{ props.product.title }}
    </h3>
    <div class="product-card__price-wrapper">
      <span class="product-card__currency"> $ </span>
      <span class="product-card__price">
        {{ props.product.price }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'sass:map';

  .product-card {
    width: calc((100% - (2 * 24px)) / 3);

    &__image {
      margin-bottom: 24px;
      border-radius: 8px;
    }

    &__title {
      margin-bottom: 16px;

      @include text-style(20px, $black-color, 26px);
    }

    &__currency,
    &__price {
      @include text-style(20px, $accent-color, 26px, map.get($font-weights, medium));
    }
  }
</style>
