import { type Ref, ref, watch } from 'vue'
type SomeType = any
declare function saveToServer(value: SomeType): Promise<void>

export function useAutoSave(data: Ref<SomeType>) {
  const isSaving = ref(false)

  let timer: ReturnType<typeof setTimeout>
  function debouncedSave() {
    isSaving.value = true
    clearTimeout(timer)
    timer = setTimeout(async () => {
      await saveToServer(data.value)
      isSaving.value = false
    }, 1000)
  }

  watch(data, debouncedSave)

  return { isSaving, save: debouncedSave }
}
