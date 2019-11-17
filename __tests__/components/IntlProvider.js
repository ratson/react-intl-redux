import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { IntlProvider, intlReducer } from '../..'

Enzyme.configure({ adapter: new Adapter() })

test('IntlProvider should render default en locale', () => {
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

  expect(app.html()).toBe('<span>1,000</span>')
})
