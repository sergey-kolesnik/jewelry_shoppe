<script lang="ts" setup>
  import BaseHeader from '@/layouts/BaseHeader.vue'
  import HomeSlider from './components/HomeSlider.vue'
  import SectionAbout from './components/SectionAbout.vue'
</script>

<template>
  <div>
    <NuxtLayout>
      <BaseHeader />
      <HomeSlider />
      <SectionAbout />
    </NuxtLayout>
  </div>
</template>
