import { FC } from 'react'
import { I_SDD } from 'react-sdd'
import { Arrow, Line2kb } from './_common/icon'

export
type I_NES_gamepad_btn = 'left' | 'right' | 'up' | 'down'
  | 'select' | 'start' | 'A' | 'B'

export
type I_NES_gamepad_map = Record<I_NES_gamepad_btn, string>

export
interface NES_gamepad_map_props {
  map: I_SDD<I_NES_gamepad_map>
  ui: I_SDD<{
    activated_btn: I_NES_gamepad_btn | null
  }>
}

export
const NES_gamepad_map: FC<NES_gamepad_map_props> = props => {
  const map = props.map.useState()
  const activated_btn = props.ui.useState(s => s.activated_btn)
  const activate = (key: I_NES_gamepad_btn) =>
    () => props.ui.set_state(() => ({ activated_btn: key }))

  return <div className='k2g nes-container'>
    <div className='d-pad'>
      <div className='left-right'>
        <button
          className={'gp-btn ' + (
            activated_btn === 'left' ? 'waiting' : ''
          )}
          onClick={activate('left')}
        >
          <Arrow direction='left' />
          <Line2kb
            type='left'
            target={map.left}
          />
        </button>
        <button
          className={'gp-btn ' + (
            activated_btn === 'right' ? 'waiting' : ''
          )}
          onClick={activate('right')}
        >
          <Arrow direction='right' />
          <Line2kb
            type='right_bottom'
            target={map.right}
          />
        </button>
      </div>
      <div className='up-down'>
        <button
          className={'gp-btn ' + (
            activated_btn === 'up' ? 'waiting' : ''
          )}
          onClick={activate('up')}
        >
          <Arrow />
          <Line2kb
            type='left_top'
            target={map.up}
          />
        </button>
        <button
          className={'gp-btn ' + (
            activated_btn === 'down' ? 'waiting' : ''
          )}
          onClick={activate('down')}
        >
          <Arrow direction='down' />
          <Line2kb
            type='left_bottom'
            target={map.down}
          />
        </button>
      </div>
    </div>
  </div>
}
