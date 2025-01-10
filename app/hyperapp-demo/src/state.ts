export
interface I_root_state {
  last_key: string | null
  history: string[]
}

export
const init_state = (): I_root_state => ({
  last_key: null,
  history: [],
})
