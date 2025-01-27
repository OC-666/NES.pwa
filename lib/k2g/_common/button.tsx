import { ReactNode } from 'react'
import { I_position, Line2kb } from './icon'
import { useCTX_required, create_required_ctx } from './context'

/** 通用的操作，通过 ctx 传入 */
interface I_gamepad_btn_ctx {
  map: Record<string, string>
  activated_btn: string | null
  activate: (f: string) => void
  bind: (from: string, to: string) => void
}

export
const Gamepad_btn_ctx = create_required_ctx<I_gamepad_btn_ctx>()

/** 需要定制的，通过 props 传入 */
interface I_gamepad_btn_props<I_btn extends string> {
  from: I_btn
  label_position: I_position
  children: ReactNode
}

export
function Gamepad_btn<I_btn extends string>(props: I_gamepad_btn_props<I_btn>) {
  const ctx = useCTX_required(Gamepad_btn_ctx)
  return <button
    className={'gp-btn ' + (
      ctx.activated_btn === props.from ? 'waiting' : ''
    )}
    onClick={() => ctx.activate(props.from)}
  >
    {props.children}
    <Line2kb
      type={props.label_position}
      target={ctx.map[props.from]}
    />
  </button>
}
