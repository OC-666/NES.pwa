import { Gamepad_btn } from './button'

/** Select & Start */
export
function SS() {
  return <div className='ss'>
    <Gamepad_btn from='select' label_position='bottom'>
      <span className='from'>select</span>
    </Gamepad_btn>
    <Gamepad_btn from='start' label_position='bottom'>
      <span className='from'>start</span>
    </Gamepad_btn>
  </div>
}
