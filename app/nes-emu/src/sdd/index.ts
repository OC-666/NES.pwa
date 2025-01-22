import { SDD } from 'react-sdd'
import type { I_user_settings } from './user-settings'
import { default_emulator_map, default_ingame_map } from './user-settings/control'

export
interface I_app_state {
  user_settings: I_user_settings
}

export
const app_state: I_app_state = {
  user_settings: {
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
}
