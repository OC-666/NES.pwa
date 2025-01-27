import { I_SDD } from 'react-sdd'

export
interface I_gamepad_props<I_btn extends string> {
  map: I_SDD<Record<I_btn, string>>
  ui: I_SDD<{
    activated_btn: I_btn | null
  }>
}
