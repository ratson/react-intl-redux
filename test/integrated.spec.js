import test from 'ava'

import { createStore, combineReducers } from 'redux'
import { FormattedDate } from 'react-intl'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import React from 'react'

import { IntlProvider, intlReducer, updateIntl } from '../src'

test('change locale', t => {
  const reducer = combineReducers({
    intl: intlReducer,
  })
  const store = createStore(reducer)
  const App = () => (
    <Provider store={store}>
      <IntlProvider>
        <FormattedDate value={new Date(0)} />
      </IntlProvider>
    </Provider>
  )
  const app = mount(<App />)
  t.is(app.html(), '<span>1/1/1970</span>')

  store.dispatch(updateIntl({ locale: 'it' }))
  t.is(app.html(), '<span>1970-1-1</span>')

  store.dispatch(updateIntl({ locale: 'en-GB' }))
  t.is(app.html(), '<span>1/1/1970</span>')
})
