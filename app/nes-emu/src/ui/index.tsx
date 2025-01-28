import { FC } from 'react'
import { NES_gamepad_map } from 'k2g/nes'
import { I_app_state } from '../sdd'

import 'k2g/style'

interface I_app_props {
  app_state: I_app_state
}

export
const App: FC<I_app_props> = props => {
  return <div style={{ padding: 100 }}>
    <NES_gamepad_map
      map={props.app_state.user_settings.control.game}
      ui={props.app_state.ui.settings.control}
      on_occupied={() => {}}
    />
  </div>
}
