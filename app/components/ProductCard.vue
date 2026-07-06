<script setup lang="ts">
  import type { Product } from '~/types/product.types'

  const props = defineProps<{
    product: Product
  }>()
</script>

<template>
  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img
        :src="props.product.image"
        :alt="props.product.description"
        class="product-card__image"
      />
      <div class="product-card__add-to-card">
        <span class="product-card__add-to-card-text"> ADD TO CART </span>
      </div>
    </div>
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

    &__image-wrapper {
      position: relative;
      margin-bottom: 24px;
    }

    &__image {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 8px;
    }

    &__add-to-card {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      display: none;
      padding-top: 21px;
      padding-bottom: 21px;
      text-align: center;
      background-color: rgba($white-color, 0.5);
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:hover &__add-to-card {
      display: block;
    }

    &__add-to-card-text {
      @include text-style(16px, $black-color, 26px, map.get($font-weights, bold));
    }

    &__title {
      margin-bottom: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      @include text-style(20px, $black-color, 26px);
    }

    &__currency,
    &__price {
      @include text-style(20px, $accent-color, 26px, map.get($font-weights, medium));
    }
  }
</style>
