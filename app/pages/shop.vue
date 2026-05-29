<script setup lang="ts">
  import { useGetAllProducts } from '~/composable/api/products/getAllProducts'
  import ProductCard from '~/components/ProductCard.vue'
  import ProductFilters from '~/components/ProductFilters.vue'
  const { data: products } = await useGetAllProducts()
</script>

<template>
  <section class="shop">
    <div class="container shop__container">
      <h1 class="shop__title section-title">Shop The Latest</h1>
      <div class="shop__wrapper">
        <aside class="shop__aside">
          <ProductFilters />
        </aside>
        <div class="shop__products">
          <ProductCard
            v-for="product in products?.slice(0, 9)"
            :id="product.id"
            :key="product.id"
            :product="product"
            class="shop__product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .shop {
    &__wrapper {
      display: flex;
      gap: 31px;
    }

    &__products {
      display: flex;
      flex-wrap: wrap;
      gap: 70px 24px;
    }
  }
</style>
