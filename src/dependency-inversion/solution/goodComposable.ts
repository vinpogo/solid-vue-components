import { ref, computed, type Ref } from 'vue'

type Point = { x: number; y: number }

export function useRectangle(coordinateTracker: () => { x: Ref<number>; y: Ref<number> }) {
  const { x, y } = coordinateTracker()
  const start = ref<Point>({ x: 0, y: 0 })
  const end = ref<Point>({ x: 0, y: 0 })

  const width = computed(() => Math.abs(start.value.x - end.value.x))
  const height = computed(() => Math.abs(start.value.y - end.value.y))

  function setStart() {
    start.value = { x: x.value, y: y.value }
  }
  function setEnd() {
    end.value = { x: x.value, y: y.value }
  }

  return { width, height, setStart, setEnd }
}
