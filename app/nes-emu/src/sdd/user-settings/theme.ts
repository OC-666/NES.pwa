import { big_tail, I_color } from 'big-tail'

type I_theme_mode = 'random' | 'system' | 'dark' | 'light'

export
interface I_theme {
  mode: I_theme_mode
  fore_color: I_color
  back_color: I_color
}

export
const default_theme: I_theme = (() => {
  const [fore_color, back_color] = big_tail()
  return {
    mode: 'random',
    fore_color, back_color,
  }
})()
