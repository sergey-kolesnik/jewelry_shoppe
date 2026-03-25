<script lang="ts" setup>
import { useFetch } from '#app';
  import BaseHeader from '@/layouts/BaseHeader.vue'
  import { useGetAllImages } from './composable/api/imagesSlider/useGetImagesSlider';

  // const data = await useGetAllImages({id: 10, q: 95, w: 1300, h: 700, fit: 'fill'})
  const {data,error} = await useGetAllImages({limit: 10})
  console.log(data.value)
  console.log(error.value)
  
  // console.log(data)
</script>

<template>
  <div>
    <NuxtLayout>
      <BaseHeader />
    </NuxtLayout>
  </div>
</template>
