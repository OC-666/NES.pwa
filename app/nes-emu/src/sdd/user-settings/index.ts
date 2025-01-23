import { I_SDD } from 'react-sdd'
import type { I_control } from './control'
import { I_theme } from './theme'

export
interface I_user_settings {
  control: I_control
  theme: I_SDD<I_theme>
}
