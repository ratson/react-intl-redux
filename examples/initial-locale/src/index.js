/* globals document */
import { addLocaleData, FormattedMessage } from 'react-intl'
import { createStore, combineReducers } from 'redux'
import { IntlProvider, intlReducer } from 'react-intl-redux'
import { Provider } from 'react-redux'
import itLocaleData from 'react-intl/locale-data/it'
import zhLocaleData from 'react-intl/locale-data/zh'
import React from 'react'
import ReactDOM from 'react-dom'

addLocaleData([...itLocaleData, ...zhLocaleData])

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

const App = () =>
  <Provider store={store}>
    <IntlProvider>
      <p>
        <FormattedMessage id="app.greeting" defaultMessage="你好!" />
      </p>
    </IntlProvider>
  </Provider>

ReactDOM.render(<App />, document.getElementById('root'))
