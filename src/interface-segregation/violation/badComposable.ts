type MyEntity = {
  a: number[]
  b: string[]
  c: boolean[]
}
export function useFoo(entity: MyEntity) {
  const state = entity.a
  // doo something with state
  // doo nothing else with b or c

  return { state }
}
