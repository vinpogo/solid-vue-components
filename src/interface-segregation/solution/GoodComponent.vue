<template>
  <input v-model="label" type="text" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string }>()
const emit = defineEmits<{ (e: 'update:field', label: string): void }>()

const label = computed({
  get: () => props.label,
  set: (value) => emit('update:field', value)
})
</script>
