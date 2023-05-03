import { ref } from 'vue'

export function useCachedValue() {
  const value = ref('')
  let cachedValue = ''

  function cacheValue() {
    cachedValue = value.value
  }

  function revertValue() {
    value.value = cachedValue
  }

  return { value, cacheValue, revertValue }
}
