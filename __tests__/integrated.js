import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { IntlProvider, intlReducer, updateIntl } from '..'

Enzyme.configure({ adapter: new Adapter() })

test('change locale', () => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const store = createStore(reducer)
  const App = () => (
    <Provider store={store}>
      <IntlProvider textComponent="span">
        <FormattedNumber value={1000.95} />
      </IntlProvider>
    </Provider>
  )
  const app = mount(<App />)

  expect(app.html()).toBe('<span>1,000.95</span>')
  expect(store.getState().intl.locale).toBe('en')

  store.dispatch(updateIntl({ locale: 'fr-FR' }))
  // expect(app.html()).toBe('<span>1&nbsp;000,95</span>')

  store.dispatch(updateIntl({ locale: 'en-GB' }))
  expect(app.html()).toBe('<span>1,000.95</span>')
})
