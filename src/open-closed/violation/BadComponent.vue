<template>
  <div v-for="label in props.data" :key="label">
    <ComponentA v-if="type === 'A'" :label="label" />
    <ComponentB v-if="type === 'B'" :label="label" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ type: 'A' | 'B'; data: string[] }>()
</script>
