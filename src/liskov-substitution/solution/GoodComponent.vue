<template>
  <div class="input-wrapper-class">
    <input v-bind="$attrs" class="my-input-class" />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
