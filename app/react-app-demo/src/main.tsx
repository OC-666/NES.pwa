import React from 'react'
import ReactDom from 'react-dom/client'
import { DemoButton } from '@oboy/lib-demo/button'

ReactDom.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <div>hello, this is a react app</div>
    <DemoButton />
  </React.StrictMode>
)
