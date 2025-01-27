import { Arrow } from './icon'
import { Gamepad_btn } from '../button'

export
function Dpad() {
  return <div className='d-pad'>
    <div className='left-right'>
      <Gamepad_btn from='left' label_position='left'>
        <Arrow direction='left' />
      </Gamepad_btn>
      <Gamepad_btn from='right' label_position='bottom_right'>
        <Arrow direction='right' />
      </Gamepad_btn>
    </div>
    <div className='up-down'>
      <Gamepad_btn from='up' label_position='top_left'>
        <Arrow direction='up' />
      </Gamepad_btn>
      <Gamepad_btn from='down' label_position='bottom_left'>
        <Arrow direction='down' />
      </Gamepad_btn>
    </div>
  </div>
}
