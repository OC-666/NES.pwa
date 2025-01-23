import { I_SDD } from 'react-sdd'
import { I_ui__settings_control } from './settings'

export
interface I_ui {
  settings: {
    control: I_SDD<I_ui__settings_control>
  }
}
