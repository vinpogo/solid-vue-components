import { computed, ref } from 'vue'

export function useTableSort<T extends { label: string }[]>(
  initialState: 'Ascending' | 'Descending' | 'None',
  data: T[]
) {
  const state = ref(initialState)
  const sortedData = computed(() => {
    const sorted = [...data].sort((a, b) => 0) // my sorting logic
    return sorted
  })
  function toggle() {
    switch (state.value) {
      case 'Ascending':
        state.value = 'Descending'
        break
      case 'Descending':
        state.value = 'None'
        break
      case 'None':
        state.value = 'Ascending'
        break
      default:
        throw new Error(`unknown state ${state.value}`)
    }
  }

  return { state, toggle, sortedData }
}
