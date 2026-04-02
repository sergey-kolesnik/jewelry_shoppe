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
    //   pointer-events: auto;
    //   cursor: pointer !important;
    position: absolute;
    bottom: 216px;
    left: 39px;
    z-index: 2;

    &__title {
      margin-bottom: 16px;

      @include text-style(33px, $white-color, 43px, map.get($font-weights, medium));
    }

    &__price {
      margin-bottom: 48px;

      @include text-style(26px, $white-color, 35px);
    }

    &__button {
      z-index: 10;
      min-width: 193px;
      padding: 13px 31px;
      pointer-events: auto;
      cursor: pointer !important;
      border: $white-color 2px solid;
      border-radius: 6px;

      @include text-style(20px, $white-color, 100%, map.get($font-weights, bold));
    }
  }
</style>
