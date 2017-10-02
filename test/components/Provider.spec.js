import test from 'ava'

import { createStore, combineReducers } from 'redux'
import { FormattedNumber } from 'react-intl'
import { shallow } from 'enzyme'
import React from 'react'

import { Provider, intlReducer } from '../../src'

test('Provider should render default en locale', t => {
  const reducer = combineReducers({
    intl: intlReducer,
  })
  const store = createStore(reducer)
  const App = () => (
    <Provider store={store}>
      <FormattedNumber value={1000} />
    </Provider>
  )
  const app = shallow(<App />)
  t.is(app.html(), '<span>1,000</span>')
})
