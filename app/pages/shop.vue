<script setup lang="ts">
  import { computed } from 'vue'
  import { useGetAllProducts } from '~/composable/api/products/getAllProducts'
  import ProductCard from '~/components/ProductCard.vue'
  import ProductFilters from '~/components/ProductFilters.vue'
  import BasePaginator from '~/components/BasePaginator.vue'
  import { usePage } from '~/composable/usePage'

  const { queryPage, currentPage, replacePage } = usePage()

  if (!queryPage.value) {
    replacePage()
  }

  const { data: products } = await useGetAllProducts()

  const paginatedProducts = computed(() =>
    products.value?.slice((currentPage.value - 1) * 6, currentPage.value * 6),
  )
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
            v-for="product in paginatedProducts"
            :id="product.id"
            :key="product.id"
            :product="product"
            class="shop__product"
          />
          <BasePaginator :totalCountProduct="products?.length || 0" />
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
