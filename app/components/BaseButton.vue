<script lang="ts" setup>
  import type { BaseButtonProps } from '~/types/buttonProps.types'

  const props = defineProps<BaseButtonProps>()
</script>

<template>
  <button :type="props.type" :class="['base-button', `base-button--${props.variant}`]">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .base-button {
    padding: 0;
    cursor: pointer;
  }

  .base-button--transparent {
    background-color: transparent;
    border: none;
  }
</style>
