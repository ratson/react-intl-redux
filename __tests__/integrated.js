import { render, act } from '@testing-library/react'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { IntlProvider, intlReducer, updateIntl } from '../src/'

test('change locale', () => {
  const store = configureStore({ reducer: { intl: intlReducer } })
  const App = () => (
    <Provider store={store}>
      <IntlProvider>
        <FormattedNumber value={1000.95} />
      </IntlProvider>
    </Provider>
  )
  const { container } = render(<App />)

  expect(container.textContent).toBe('1,000.95')
  expect(store.getState().intl.locale).toBe('en')

  act(() => {
    store.dispatch(updateIntl({ locale: 'fr-FR' }))
  })
  // expect(container.textContent).toBe('1\u202f000,95') // locale output varies by environment

  act(() => {
    store.dispatch(updateIntl({ locale: 'en-GB' }))
  })
  expect(container.textContent).toBe('1,000.95')
})
