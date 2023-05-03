<template>
  <div v-for="item in props.items" :key="item.label">
    {{ item.label }}
    <button @click="markAsDone(item)" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ items: { label: string; done: boolean }[] }>()

function markAsDone(item: { label: string; done: boolean }) {
  item.done = true
}
</script>
