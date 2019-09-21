import test from 'ava'

import { createStore, combineReducers } from 'redux'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import React from 'react'

import { IntlProvider, intlReducer } from '../..'

test('IntlProvider should render default en locale', t => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const store = createStore(reducer)
  const App = () => (
    <Provider store={store}>
      <IntlProvider textComponent="span">
        <FormattedNumber value={1000} />
      </IntlProvider>
    </Provider>
  )
  const app = shallow(<App />)
  t.is(app.html(), '<span>1,000</span>')
})
