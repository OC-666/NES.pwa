import { ReactNode } from 'react'
import { I_label_position, Line2kb } from './icon'
import { useCTX_k2g } from '../context'

/** 需要定制的（与其他 btn 不同），通过 props 传入 */
interface I_gamepad_btn_props {
  from: string
  label_position: I_label_position
  children: ReactNode
}

export
function Gamepad_btn(props: I_gamepad_btn_props) {
  const ctx = useCTX_k2g()
  const activated = props.from === ctx.ui.useState(s => s.activated_btn)
  const target = ctx.map.useState(s => s[props.from])
  return <button
    className={'gp-btn ' + (activated  ? 'waiting' : '')}
    onClick={() => {
      ctx.ui.set_state(() => ({ activated_btn: props.from }))
    }}
  >
    {props.children}
    <Line2kb
      type={props.label_position}
      target={target}
    />
  </button>
}
