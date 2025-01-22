import type { I_SDD } from 'react-sdd'
import type { I_NES_gamepad_map } from 'k2g/nes'

/** keyboard only, gamepad support for mapping is not available */
export
interface I_control {
  game: I_SDD<I_ingame_map>
  emulator: I_SDD<I_emulator_map>
}

/** in-game controls, such as the d-pad, A button, B button, ... */
export
type I_ingame_map = I_NES_gamepad_map

export
const default_ingame_map: I_ingame_map = {
  left: 'KeyA',
  right: 'KeyD',
  up: 'KeyW',
  down: 'KeyS',

  select: 'KeyF',
  start: 'KeyJ',
  
  A: 'KeyK',
  B: 'KeyL',
}

/** emulator controls, such as Open Menu, Speed Up, ... */
export
interface I_emulator_map {
  open_menu: string
  speed_up: string
  /** save state to default slot */
  save_state: string
}

export
const default_emulator_map: I_emulator_map = {
  open_menu: 'Space',
  speed_up: 'Enter',
  save_state: 'CapsLock',
}
