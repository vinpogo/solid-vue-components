import { type Ref, ref, watch } from 'vue'
type SomeType = any

export function useAutoSave(
  data: Ref<SomeType>,
  saveFn: (data: SomeType) => Promise<void>,
  options: { debounceTime: number } = { debounceTime: 1000 }
) {
  const isSaving = ref(false)

  let timer: ReturnType<typeof setTimeout>
  function debouncedSave() {
    isSaving.value = true
    clearTimeout(timer)
    timer = setTimeout(async () => {
      await saveFn(data.value)
      isSaving.value = false
    }, options.debounceTime)
  }

  watch(data, debouncedSave)

  return { isSaving, save: debouncedSave }
}
