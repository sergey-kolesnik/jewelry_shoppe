<script setup lang="ts">
  import { useGetAllProducts } from '~/composable/api/products/getAllProducts'
  import ProductCard from '~/components/ProductCard.vue'
  import ProductFilters from '~/components/ProductFilters.vue'
  const testProd = {
    id: 123,
    title: 'Серьги',
    price: 50,
    description: 'Серьги золотые',
    image:
      'https://shoppe-api-eleet.amvera.io/img/earrings/sergi-pusety-iz-belogo-zolota-2092913.jpg',
    category: 'Категория Серьги',
  }

  const products = await useGetAllProducts()
</script>

<template>
  <section class="shop">
    <h1 class="shop__title">Shop</h1>
    {{ products }}
    <ProductFilters />
    <ProductCard :product="testProd" />
  </section>
</template>
