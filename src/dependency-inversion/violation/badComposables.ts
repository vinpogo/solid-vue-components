import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}

type Point = { x: number; y: number }

export function useRectangle() {
  const { x, y } = useMouse()
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
  onMounted(() => {
    window.addEventListener('mousedown', setStart)
    window.addEventListener('mouseup', setEnd)
  })

  return { width, height }
}
