import { create } from 'zustand'

type I_validate<State> = (old_state: State, new_state: Partial<State>) => Partial<State>

/**
 * State Driven Dev.
 * The set function merges state at only one level.
 * https://zustand.docs.pmnd.rs/guides/immutable-state-and-merging#nested-objects
 */
export
const SDD = <State>(initial_state: State, v?: I_validate<State>) => {
  const useState = create(() => initial_state)
  return {
    useState,
    get_state: useState.getState,
    set_state: (calc_new_state: (os: State) => Partial<State>) => {
      useState.setState(os =>
        v
          ? v(os, calc_new_state(os))
          : calc_new_state(os)
      )
    },
    reset_state: () =>
      useState.setState(initial_state)
    ,
  }
}

export
type I_SDD<State> = ReturnType<typeof SDD<State>>
