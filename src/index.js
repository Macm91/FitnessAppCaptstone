import React from 'react'
import ReactDOM from 'react-dom' 
import { Provider } from 'react-redux'
// import {createStore} from 'redux'
import { store } from './app/store'
import { Store } from 'redux'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)