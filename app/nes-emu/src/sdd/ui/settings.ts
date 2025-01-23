import { I_NES_gamepad_btn } from 'k2g/nes'

export
interface I_ui__settings_control {
  activated_btn: I_NES_gamepad_btn | null
}

export
const default_ui__setting_control: I_ui__settings_control = {
  activated_btn: null
}
