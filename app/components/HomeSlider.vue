<script lang="ts" setup>
  import { computed } from 'vue'
  import { useGetAllImages } from '~/composable/api/imagesSlider/useGetImagesSlider'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Autoplay } from 'swiper/modules'
  const LIMIT_IMAGES = 10
  const { data } = await useGetAllImages({ limit: LIMIT_IMAGES })
  const photos = computed(() => data.value ?? [])
</script>
<template>
  <section class="home-slider">
    <div class="container home-slider__container">
      <ClientOnly>
        <Swiper
          :modules="[Pagination, Autoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="slide in photos" :key="slide.id">
            <img :src="slide.download_url" :alt="slide.author" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-slider {
    &__container {
      // overflow: hidden;
    }
  }

  .swiper,
  .swiper-slide {
    max-height: 646px;
    border-radius: 16px;
  }

  :deep(.swiper-pagination) {
    bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :deep(.swiper-pagination-bullet) {
    width: 9px;
    height: 9px;
    outline-offset: -1px;
    background: $white-color;
    opacity: 1;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 16px;
    height: 16px;
    background: transparent;
    border: 1px solid $white-color;
  }
</style>
