<script setup lang="ts">
  import BaseHeader from './BaseHeader.vue'
  import BaseFooter from './BaseFooter.vue'
</script>

<template>
  <div>
    <BaseHeader />
    <slot />
    <BaseFooter />
  </div>
</template>
