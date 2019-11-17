import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Immutable from 'immutable'
import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { IntlProvider, intlReducer } from '..'

Enzyme.configure({ adapter: new Adapter() })

test('IntlProvider should render default en locale', () => {
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
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const intlSelector = state => state.get('intl').toJS()
  const App = () => (
    <Provider store={store}>
      <IntlProvider intlSelector={intlSelector} textComponent="span">
        <FormattedNumber value={1000} />
      </IntlProvider>
    </Provider>
  )
  const app = shallow(<App />)

  expect(app.html()).toBe('<span>1,000</span>')
})
