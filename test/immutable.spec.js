import Immutable from 'immutable'
import test from 'ava'

import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import React from 'react'

import { IntlProvider, intlReducer } from '..'

test('IntlProvider should render default en locale', t => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const initialState = Immutable.fromJS({
    intl: {
      locale: 'en',
      messages: {}
    }
  })
  const store = createStore(reducer, initialState)
  const intlSelector = state => state.get('intl').toJS()
  const App = () => (
    <Provider store={store}>
      <IntlProvider intlSelector={intlSelector}>
        <FormattedNumber value={1000} />
      </IntlProvider>
    </Provider>
  )
  const app = shallow(<App />)
  t.is(app.html(), '<span>1,000</span>')
})
