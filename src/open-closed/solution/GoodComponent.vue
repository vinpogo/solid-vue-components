<template>
  <div v-for="label in props.data" :key="label">
    <slot name="list-item" :label="label" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: string[] }>()
</script>
