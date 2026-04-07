<script lang="ts" setup>
  import { computed } from 'vue'
  import { useGetAllImages } from '~/composable/api/imagesSlider/useGetImagesSlider'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Autoplay } from 'swiper/modules'
  import SlideOverlay from './SlideOverlay.vue'

  const LIMIT_IMAGES = 10
  const { data } = await useGetAllImages({ limit: LIMIT_IMAGES })
  const photos = computed(() => data.value ?? [])
</script>
<template>
  <section class="home-slider">
    <div class="container home-slider__container">
      <ClientOnly>
        <Swiper
          class="home-slider__swiper"
          :modules="[Pagination, Autoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="slide in photos" :key="slide.id" class="home-slider__slide">
            <img :src="slide.download_url" :alt="slide.author" loading="lazy" />
          </SwiperSlide>
          <SlideOverlay class="home-slider__overlay" />
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-slider {
    &__swiper {
      position: relative;
      overflow: hidden;
    }
  }

  .swiper,
  .swiper-slide {
    height: 646px;
    overflow: hidden;
    border-radius: 16px;

    @media (max-width: $breakpoint-xl) {
      height: 500px;
    }

    @media (max-width: $breakpoint-l) {
      height: 450px;
    }

    @media (max-width: $breakpoint-m) {
      height: 354px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :deep(.swiper-pagination) {
    bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: $breakpoint-m) {
      bottom: 9px;
    }
  }

  :deep(.swiper-pagination-bullet) {
    width: 9px;
    height: 9px;
    margin: 0;
    outline-offset: -1px;
    background: $white-color;
    opacity: 1;

    @media (max-width: $breakpoint-m) {
      width: 4px;
      height: 4px;
    }
  }

  :deep(.swiper-pagination-bullet:not(:last-child)) {
    margin-right: 14px;

    @media (max-width: $breakpoint-m) {
      margin-right: 9px;
    }
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 16px;
    height: 16px;
    background: transparent;
    border: 1px solid $white-color;

    @media (max-width: $breakpoint-m) {
      width: 7px;
      height: 7px;
    }
  }
</style>
