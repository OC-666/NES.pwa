import { createContext, useContext } from 'react'

export
function create_required_ctx<I_context>() {
  return createContext<I_context | null>(null)
}

export
function useCTX_required<I_context>(CTX: React.Context<I_context | null>) {
  const ctx = useContext(CTX)
  if (ctx === null)
    throw new Error('No Context')
  return ctx
}
