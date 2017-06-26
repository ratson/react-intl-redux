import should from 'should'

import { createStore, combineReducers } from 'redux'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import React from 'react'

import { IntlProvider, intlReducer } from '../../src'

describe('IntlProvider', () => {
  it('should render default en locale', () => {
    const reducer = combineReducers({
      intl: intlReducer,
    })
    const store = createStore(reducer)
    const App = () => (
      <Provider store={store}>
        <IntlProvider>
          <FormattedNumber value={1000} />
        </IntlProvider>
      </Provider>
    )
    const app = shallow(<App />)
    should(app.html()).be.exactly('<span>1,000</span>')
  })
})
