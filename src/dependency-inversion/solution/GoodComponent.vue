<template>
  <div v-for="item in props.items" :key="item.label">
    {{ item.label }}
    <button @click="markAsDone(item)" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ items: { label: string; done: boolean }[] }>()
const emit = defineEmits<{
  (e: 'markAsDone', item: { label: string; done: boolean }): void
}>()
function markAsDone(item: { label: string; done: boolean }) {
  emit('markAsDone', item)
}
</script>
