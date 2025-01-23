import { SDD } from 'react-sdd'
import type { I_user_settings } from './user-settings'
import { default_emulator_map, default_ingame_map } from './user-settings/control'
import { default_theme } from './user-settings/theme'
import { I_ui } from './ui'
import { default_ui__setting_control } from './ui/settings'

export
interface I_app_state {
  user_settings: I_user_settings
  ui: I_ui
}

export
const app_state: I_app_state = {
  user_settings: {
    theme: SDD(default_theme),
    control: {
      game: SDD(default_ingame_map, (os, ns) => {
        // duplicate checking
        const old_kvs = Object.entries(os)
        const new_kvs = Object.entries(ns)
        for (const [nk, nv] of new_kvs)
          for (const [ok, ov] of old_kvs)
            if (nk !== ok && nv === ov)
              throw Error('dont map one key (on keyboard) to multiple button (on gamepad)')
        return ns
      }),
      emulator: SDD(default_emulator_map),
    }
  },
  ui: {
    settings: {
      control: SDD(default_ui__setting_control)
    }
  },
}
