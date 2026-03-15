<template>
  <div class="container popup">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .popup {
    position: absolute;
    top: 39px;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: $white-color;
  }
</style>
