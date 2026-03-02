import { render } from '@testing-library/react'
import { FormattedNumber } from 'react-intl'
import { configureStore } from '@reduxjs/toolkit'
import { intlReducer, Provider } from '../../src/'

test('Provider should render default en locale', () => {
  const store = configureStore({ reducer: { intl: intlReducer } })
  const { container } = render(
    <Provider store={store}>
      <FormattedNumber value={1000} />
    </Provider>
  )

  expect(container.textContent).toBe('1,000')
})
