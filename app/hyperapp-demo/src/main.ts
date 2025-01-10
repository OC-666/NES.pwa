import { app, h } from 'hyperapp'

import { init_state } from './state'
import { new_keydown } from './action'
import { Last } from './ui/last'
import { History } from './ui/history'

app({
  init: init_state,
  node: document.getElementById('root')!,
  view: state =>
    h('main', {}, [
      Last(state.last_key),
      History(state.history),
    ]),
  subscriptions: () => [
    [
      function(dispatch) {
        function listen_keydown(evt: KeyboardEvent) {
          dispatch(new_keydown, evt.key)
        }
        document.addEventListener('keydown', listen_keydown)
        return () => {
          document.removeEventListener('keydown', listen_keydown)
        }
      },
      null,
    ],
  ],
})
