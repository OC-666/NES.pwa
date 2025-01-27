import { Dpad } from './_common/dpad'
import { I_gamepad_props } from './_common/type'
import { Gamepad_btn_ctx } from './_common/button'

export
type I_NES_gamepad_btn = 'left' | 'right' | 'up' | 'down'
  | 'select' | 'start' | 'A' | 'B'

function valid_key(key: string): key is I_NES_gamepad_btn {
  return ['left', 'right', 'up', 'down', 'select', 'start', 'A', 'B'].includes(key)
}

export
function NES_gamepad_map(props: I_gamepad_props<I_NES_gamepad_btn>) {
  const map = props.map.useState()
  const activated_btn = props.ui.useState(s => s.activated_btn)

  return (
    <Gamepad_btn_ctx.Provider value={{
      map,
      bind: (from: string, to: string) => {
        if (!valid_key(from))
          throw Error('Invalid Key: ' + from)

        props.ui.set_state(() => ({ activated_btn: null }))

        if (map[from] === to)
          return // unchanged
        if (Object.values(map).includes(to)) { // 注意与上一个 if 的顺序
          // noty.error('Key already bound')
          return
        }

        props.map.set_state(() => ({ [from]: to }))
      },
      activated_btn,
      activate: (key: string) => {
        props.ui.set_state(() => {
          if (valid_key(key)) // 动态判断 key 是否合法
            return { activated_btn: key }
          else
            throw Error('Invalid Key: ' + key)
        })
      },
    }}>
      <div className='k2g nes-container'>
        <Dpad />
      </div>
    </Gamepad_btn_ctx.Provider>
  )
}
