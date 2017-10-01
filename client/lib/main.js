/* eslint no-unused-vars: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const appEl = document.getElementById('app')

ReactDOM.render(<App />, appEl)

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    ReactDOM.unmountComponentAtNode(appEl)
    const NextApp = require('./components/App.js').default
    ReactDOM.render(<NextApp />, appEl)
  })
}
