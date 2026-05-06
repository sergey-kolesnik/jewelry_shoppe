<script lang="ts" setup>
  import type { BaseInputProps } from '~/types/inputProps.types'

  const props = defineProps<BaseInputProps>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
</script>

<template>
  <div class="base-input">
    <label v-if="props.label" :for="props.id" class="base-input__label">
      {{ props.label }}
    </label>

    <div class="base-input__control">
      <input
        :id="props.id"
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        class="base-input__field"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="props.error" class="base-input__error">
        {{ props.error }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .base-input {
    width: 100%;

    &__control {
      position: relative;
    }

    &__error {
      position: absolute;
      top: 40px;
      left: 0;
      z-index: 1;
      padding: 1px 6px;
      white-space: nowrap;
      background: red;
      border: 1px solid $black-color;
    }
  }
</style>
