import React from 'react'
import ReactDom from 'react-dom/client'
import { app_state } from './sdd'
import { App } from './ui'
import './global.css'

main()

function main() {
  initialize()

  ReactDom.createRoot(
    document.getElementById('root')!
  ).render(
    <React.StrictMode>
      <App app_state={app_state} />
    </React.StrictMode>
  )
}

function initialize() {
  const theme = app_state.user_settings.theme.get_state()
  document.documentElement.style.setProperty('---fore-color', theme.fore_color.join(' '))
  document.documentElement.style.setProperty('---back-color', theme.back_color.join(' '))
}
