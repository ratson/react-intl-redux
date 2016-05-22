/* global document */
import {addLocaleData, FormattedMessage} from 'react-intl';
import {createStore, combineReducers} from 'redux'
import {Provider, intlReducer} from 'react-intl-redux'
import itLocaleData from 'react-intl/locale-data/it'
import React from 'react'
import ReactDOM from 'react-dom'

addLocaleData(itLocaleData)

const reducer = combineReducers({
  intl: intlReducer,
})
const initialState = {
  intl: {
    defaultLocale: 'zh',
    locale: 'it',
    messages: {
      'app.greeting': 'Ciao!',
    },
  },
}
const store = createStore(reducer, initialState)

const App = () => {
  return (
    <p>
      <FormattedMessage id="app.greeting" defaultMessage="你好!" />
    </p>
  )
}

const rootDiv = document.createElement('div')
document.body.appendChild(rootDiv)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDiv
)
