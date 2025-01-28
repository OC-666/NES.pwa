import { D_pad } from './_common/d-pad'
import { CTX_k2g, I_k2g_ctx } from './_common/context'
import { Bind } from './_common/bind'
import { Gamepad_btn } from './_common/button'

export
function NES_gamepad_map(props: I_k2g_ctx) {
  return (
    <CTX_k2g.Provider value={props}>
      <Bind />
      <div className='k2g nes-container'>
        <D_pad />
        <SS />
        <AB />
      </div>
    </CTX_k2g.Provider>
  )
}

/** Select & Start */
function SS() {
  return <div className='ss'>
    <Gamepad_btn from='select' label_position='top'>
      <span className='from'>select</span>
    </Gamepad_btn>
    <Gamepad_btn from='start' label_position='top'>
      <span className='from'>start</span>
    </Gamepad_btn>
  </div>
}

/** A & B */
function AB() {
  return <div className='AB'>
    <Gamepad_btn from='A' label_position='top'>
      <span className='from'>A</span>
    </Gamepad_btn>
    <Gamepad_btn from='B' label_position='top'>
      <span className='from'>B</span>
    </Gamepad_btn>
  </div>
}
