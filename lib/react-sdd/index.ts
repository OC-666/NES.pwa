import { create } from 'zustand'

type I_validate<State> = (os: State, ns: Partial<State>) => Partial<State>

/**
 * State Driven Dev.
 * The set function merges state at only one level.
 * https://zustand.docs.pmnd.rs/guides/immutable-state-and-merging#nested-objects
 */
export
const SDD = <State>(initial_state: State, validate?: I_validate<State>) => {
  const useState = create(() => initial_state)
  return {
    useState,
    set_state: (new_state: State) =>
      useState.setState(
        validate
          ? old_state => validate(old_state, new_state)
          : new_state
      )
    ,
    reset_state: () =>
      useState.setState(initial_state)
    ,
  }
}

export
type I_SDD<State> = ReturnType<typeof SDD<State>>

export
interface I_state<V> {
  val: V
  set: (calc: (old_v: V) => V) => void
}
