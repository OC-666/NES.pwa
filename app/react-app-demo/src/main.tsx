import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom/client'
import { DemoButton } from '@oboy/lib-demo/button'

const App = () => {
  const [key, set_key] = useState<string | null>(null)
  useEffect(() => {
    const listener = (evt: KeyboardEvent) => {
      set_key(evt.code)
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  })

  return <div>{
    key
      ? 'pressing: ' + key
      : 'presse a key'
    }</div>
}

ReactDom.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <div>hello, this is a react app</div>
    <App />
    <DemoButton />
  </React.StrictMode>
)
