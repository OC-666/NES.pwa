import { createContext, useContext } from 'react'
import { I_SDD } from 'react-sdd'

export
interface I_k2g_ctx {
  map: I_SDD<Record<string, string>>
  ui: I_SDD<{
    activated_btn: string | null
  }>
  on_occupied: () => void
}

export
const CTX_k2g = createContext<I_k2g_ctx | null>(null)

export
function useCTX_k2g() {
  const ctx = useContext(CTX_k2g)
  if (ctx === null)
    throw new Error('No k2g Context')
  return ctx
}
