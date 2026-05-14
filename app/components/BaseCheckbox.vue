<script lang="ts" setup>
  import type { BaseCheckboxProps } from '~/types/checkboxProps.types'

  const props = defineProps<BaseCheckboxProps>()
  const model = defineModel<boolean>({ default: false })
</script>

<template>
  <div class="checkbox">
    <input :id="props.id" v-model="model" type="checkbox" class="checkbox__input" />
    <label :for="props.for" class="checkbox__label">{{ props.labelText }}</label>
  </div>
</template>

<style lang="scss" scoped>
  .checkbox {
    display: inline-flex;
    align-items: center;
  }
</style>
