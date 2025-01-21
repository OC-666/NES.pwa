export
interface SDD<State> {
  state: State
  set_state: (new_state: Partial<State>) => void
}
