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
    </div>
  </div>
</template>
