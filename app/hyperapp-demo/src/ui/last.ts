import { h, text, type VNode } from 'hyperapp'
import { I_root_state } from '../state'

export
const Last = (key: string | null): VNode<I_root_state> =>
  h('p', {},
    key === null
      ? text('Press Any Key to Continue')
      : h('span', {}, [
        text('the last key is '),
        h('strong', {},
          text(key)
        ),
      ])
  )
