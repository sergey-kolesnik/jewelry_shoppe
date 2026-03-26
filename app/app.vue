<script lang="ts" setup>
  import { computed } from 'vue'
  import BaseHeader from '@/layouts/BaseHeader.vue'
  import { useGetAllImages } from './composable/api/imagesSlider/useGetImagesSlider'

  // const data = await useGetAllImages({id: 10, q: 95, w: 1300, h: 700, fit: 'fill'})
  const { data } = await useGetAllImages({ limit: 10 })

  const photos = computed(() => data.value?.photos ?? [])
</script>

<template>
  <div>
    <NuxtLayout>
      <BaseHeader />
    </NuxtLayout>
    <div v-for="photo in photos" :key="photo.id">
      <img :src="photo.url" alt="" loading="lazy" />
      {{ photo.url }}
    </div>
  </div>
</template>
