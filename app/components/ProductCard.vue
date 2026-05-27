<script setup lang="ts">
  import type { Product } from '~/types/product.types'

  const props = defineProps<{
    product: Product
  }>()
</script>

<template>
  {{ props }}
</template>
