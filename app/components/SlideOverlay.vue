<template>
  <div class="slide-overlay">
    <h2 class="slide-overlay__title">Gold big hoops</h2>
    <p class="slide-overlay__price">$&nbsp;68,00</p>
    <button class="slide-overlay__button">View Product</button>
  </div>
</template>

<style lang="scss" scoped>
  @use 'sass:map';

  .slide-overlay {
    position: absolute;
    bottom: 216px;
    left: 39px;
    z-index: 2;

    @media (max-width: $breakpoint-m) {
      bottom: 33px;
      left: 8px;
    }

    @media (max-width: $breakpoint-m) {
      bottom: 46px;
      left: 8px;
    }

    &__title {
      margin-bottom: 16px;

      @include text-style(33px, $white-color, 43px, map.get($font-weights, medium));

      @media (max-width: $breakpoint-m) {
        margin-bottom: 3px;
        font-size: 20px;
        line-height: 26px;
      }
    }

    &__price {
      margin-bottom: 48px;

      @include text-style(26px, $white-color, 35px);

      @media (max-width: $breakpoint-m) {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 22px;
      }
    }

    &__button {
      min-width: 193px;
      padding: 13px 31px;
      cursor: pointer;
      border: $white-color 2px solid;
      border-radius: 6px;

      @include text-style(20px, $white-color, 100%, map.get($font-weights, bold));

      @media (max-width: $breakpoint-m) {
        min-width: 92px;
        height: 29px;
        padding: 6px 10px;
        font-size: 12px;
      }
    }
  }
</style>
