import { Action } from 'hyperapp'
import { I_root_state } from './state'

export
const new_keydown: Action<I_root_state, string> =
(state, payload) => ({
  last_key: payload,
  history: [...state.history, payload],
})
