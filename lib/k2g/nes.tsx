import { D_pad } from './_common/d-pad'
import { CTX_k2g, I_k2g_ctx } from './_common/context'
import { Bind } from './_common/bind'
import { Gamepad_btn } from './_common/button'
import { SS } from './_common/ss'

export
function NES_gamepad_map(props: I_k2g_ctx) {
  return (
    <CTX_k2g.Provider value={props}>
      <Bind />
      <div className='k2g nes-container'>
        <D_pad />
        <SS />
        <AB />
        <h5>老霸王 - NES</h5>
      </div>
    </CTX_k2g.Provider>
  )
}

/** A & B */
function AB() {
  return <div className='AB'>
    <Gamepad_btn from='A' label_position='bottom'>
      <span className='from'>A</span>
    </Gamepad_btn>
    <Gamepad_btn from='B' label_position='bottom'>
      <span className='from'>B</span>
    </Gamepad_btn>
  </div>
}
