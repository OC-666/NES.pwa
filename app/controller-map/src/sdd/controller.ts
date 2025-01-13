export
interface I_controller {
  fullname: string
  keys: string[]
}

export
interface I_controller_nes extends I_controller {
  fullname: 'Nintendo Entertainment System'
  keys: ['up', 'down', 'left', 'right', 'select', 'start', 'A', 'B']
}

export
interface I_controller_snes extends I_controller {
  fullname: 'Super Nintendo Entertainment System'
  keys: ['up', 'down', 'left', 'right', 'select', 'start', 'A', 'B',
    'X', 'Y', 'L', 'R']
}

export
interface I_controller_gba extends I_controller {
  fullname: 'GameBoy Advance'
  keys: ['up', 'down', 'left', 'right', 'select', 'start', 'A', 'B',
    'L', 'R']
}
