import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { FormattedNumber } from 'react-intl'
import { combineReducers, createStore } from 'redux'
import { intlReducer, Provider } from '../..'

Enzyme.configure({ adapter: new Adapter() })

test('Provider should render default en locale', () => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const store = createStore(reducer)
  const App = () => (
    <Provider store={store}>
      <FormattedNumber value={1000} />
    </Provider>
  )
  const app = shallow(<App />)

  expect(app.html()).toBe('1,000')
})
