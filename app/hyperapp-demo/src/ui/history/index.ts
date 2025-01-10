import { h, text, type VNode } from 'hyperapp'
import { type I_root_state } from '../../state'

export
const History = (history: string[]): VNode<I_root_state> =>
  h('div', {}, [
    h('h2', {}, text('History')),
    h('ul', {},
      history.map(item =>
        h('li', {}, text(item))
      )
    )
  ])
