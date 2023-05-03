<template>
  <input v-model="label" type="text" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
type MyField = {
  value: number
  label: string
}
const props = defineProps<{ field: MyField }>()
const emit = defineEmits<{ (e: 'update:field', field: MyField): void }>()

const label = computed({
  get: () => props.field.label,
  set: (value) => emit('update:field', { ...props.field, label: value })
})
</script>
