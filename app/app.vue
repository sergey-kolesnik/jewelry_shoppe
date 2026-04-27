<script lang="ts" setup>
  import BaseHeader from '@/layouts/BaseHeader.vue'
  import HomeSlider from '@/components/HomeSlider.vue'
  import SectionAbout from '@/components/SectionAbout.vue'
  import BaseFooter from '@/layouts/BaseFooter.vue'
</script>

<template>
  <div>
    <NuxtLayout>
      <BaseHeader />
      <HomeSlider />
      <SectionAbout />
      <BaseFooter />
    </NuxtLayout>
  </div>
</template>
