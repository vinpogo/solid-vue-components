<template>
  <div class="input-wrapper-class">
    <!-- bind all props and event here to input -->
    <input v-model="localValue" class="my-input-class" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue: string }>() //all the props to seem like an input
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>() // define events from an input

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
