<script setup lang="ts">
  import { computed } from 'vue'
  import { useGetAllProducts } from '~/composable/api/products/getAllProducts'
  import ProductCard from '~/components/ProductCard.vue'
  import ProductFilters from '~/components/ProductFilters.vue'
  import Paginator from '~/components/Paginator.vue'
  import { ITEMS_IN_PAGE } from '~/constants/pagination'
  import { usePage } from '~/composable/usePage'

  const { queryPage, currentPage, replacePage } = usePage()

  if (!queryPage.value) {
    replacePage()
  }

  const { data: products } = await useGetAllProducts()

  const paginatedProducts = computed(() =>
    products.value?.slice(
      (currentPage.value - 1) * ITEMS_IN_PAGE,
      currentPage.value * ITEMS_IN_PAGE,
    ),
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
        <div class="shop__content">
          <div class="shop__products">
            <ProductCard
              v-for="product in paginatedProducts"
              :id="product.id"
              :key="product.id"
              :product="product"
              class="shop__product"
            />
          </div>
          <Paginator :totalCountProduct="products?.length || 0" class="shop__paginator" />
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

    &__content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }

    &__products {
      display: flex;
      flex-wrap: wrap;
      gap: 70px 24px;
      min-height: 854px;
      margin-bottom: 86px;
    }

    &__paginator {
      margin-bottom: 118px;
    }

    @keyframes slide {
      0% {
        opacity: 0;
        transform: scale(0.8) rotate(-5deg);
      }

      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    .shop__product {
      animation: slide 0.5s ease-out;
    }
  }
</style>
