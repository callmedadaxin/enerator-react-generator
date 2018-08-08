import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'

import store from './store'

const render = (App) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
}
Loadable.preloadReady().then(() => {
  render(App)
})

module.hot.accept('./app', () => {
  try {
    const nextApp = require('./app').default

    render(nextApp)
  } catch (error) {
    console.error(`==> 😭  Routes hot reloading error ${error}`)
  }
})
