import { render } from '@testing-library/react'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { IntlProvider, intlReducer } from '../../src/'

test('IntlProvider should render default en locale', () => {
  const store = configureStore({ reducer: { intl: intlReducer } })
  const { container } = render(
    <Provider store={store}>
      <IntlProvider>
        <FormattedNumber value={1000} />
      </IntlProvider>
    </Provider>
  )

  expect(container.textContent).toBe('1,000')
})
