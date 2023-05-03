export function useFoo(entity: { a: number[] }) {
  const state = entity.a
  // doo something with state

  return { state }
}
