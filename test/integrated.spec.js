import test from 'ava'

import { createStore, combineReducers } from 'redux'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import React from 'react'

import { IntlProvider, intlReducer, updateIntl } from '..'

test('change locale', t => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const store = createStore(reducer)
  const App = () => (
    <Provider store={store}>
      <IntlProvider>
        <FormattedNumber value={1000.95} />
      </IntlProvider>
    </Provider>
  )
  const app = mount(<App />)
  t.is(app.html(), '<span>1,000.95</span>')
  t.is(store.getState().intl.locale, 'en')

  store.dispatch(updateIntl({ locale: 'fr-FR' }))
  t.is(app.html(), '<span>1&nbsp;000,95</span>')

  store.dispatch(updateIntl({ locale: 'en-GB' }))
  t.is(app.html(), '<span>1,000.95</span>')
})
