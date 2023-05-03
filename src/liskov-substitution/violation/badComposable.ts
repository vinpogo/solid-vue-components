import { computed, ref } from 'vue'
type Row = {
  label: string
  value: number
}

export function useTableSort(initialState: string, data: Row[]) {
  const state = ref(initialState)
  const sortedData = computed(() => {
    const sorted = [...data].sort((a, b) => 0) // my sorting logic based on label
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
