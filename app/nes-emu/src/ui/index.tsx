import { useState } from 'react'
import { I_NES_gamepad_btn, NES_gamepad_map } from 'k2g/nes'
import { app_state } from '../sdd'

import 'k2g/style'

export
const App = () => {
  const [active, set_active] = useState<I_NES_gamepad_btn | null>(null)
  return <div style={{ padding: 200 }}>
    <NES_gamepad_map
      sdd={app_state.user_settings.control.game}
      active={{ val: active, set: set_active }}
    />
  </div>
}
