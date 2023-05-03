<template>
  <MyInput v-model="input" />
  <MyButton @click="onClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')

function onClick() {
  // do something
}
</script>
