import { D_pad } from './_common/d-pad'
import { CTX_k2g, I_k2g_ctx } from './_common/context'
import { Bind } from './_common/bind'

export
function NES_gamepad_map(props: I_k2g_ctx) {
  return (
    <CTX_k2g.Provider value={props}>
      <Bind />
      <div className='k2g nes-container'>
        <D_pad />
        
      </div>
    </CTX_k2g.Provider>
  )
}
