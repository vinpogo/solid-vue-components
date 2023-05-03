<template>
  <input
    v-model="input"
    class="my-styling-class"
    @keydown.esc="revertInput"
    @focusin="cacheInput"
  />
  <button class="my-button-class" @click="onClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const cachedInput = ref('')

function cacheInput() {
  cachedInput.value = input.value
}

function revertInput() {
  input.value = cachedInput.value
}

function onClick() {}
</script>

<style>
.my-input-class {
}
.my-button-class {
}
</style>
