import { FC } from 'react'
import { I_SDD, I_state } from 'react-sdd'
import { Arrow, Keyboard, Line } from './_common/icon'

export
type I_NES_gamepad_btn = 'left' | 'right' | 'up' | 'down'
  | 'select' | 'start' | 'A' | 'B'

export
type I_NES_gamepad_map = Record<I_NES_gamepad_btn, string>

export
interface NES_gamepad_map_props {
  sdd: I_SDD<I_NES_gamepad_map>
  active: I_state<I_NES_gamepad_btn | null>
}

export
const NES_gamepad_map: FC<NES_gamepad_map_props> = props => {
  const map = props.sdd.useState()
  return <div className='k2g nes-container'>
    <div className='d-pad'>
      <div className='up-down'>
        <button className='gp-btn'>
          <Arrow />
          <Line type='left_bottom'>
            <Keyboard />
          </Line>
        </button>
      </div>
    </div>
  </div>
}
