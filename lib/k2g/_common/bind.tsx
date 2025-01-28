import { useEffect } from 'react'
import { useCTX_k2g } from './context'

export
function Bind() {
  const ctx = useCTX_k2g()

  useEffect(() => {
    const listen_keydown = (e: KeyboardEvent) => {
      const to = e.code
      const from = ctx.ui.get_state().activated_btn
      const map = ctx.map.get_state()

      /* return if no btn activated */
      if (from === null) return

      /* deactivate the btn */
      ctx.ui.set_state(() => ({ activated_btn: null }))

      /* unchanged */
      if (map[from] === to)
        return

      /* determine occupied */
      if (Object.values(map).includes(to)) {
        ctx.on_occupied()
        return
      }

      /* bind the key */
      ctx.map.set_state(() => ({
        [from]: to
      }))
    }

    window.addEventListener('keydown', listen_keydown)
    return () => {
      window.removeEventListener('keydown', listen_keydown)
    }
  }, [])

  return <></>
}
