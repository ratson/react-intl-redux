import { IntlProvider, intlReducer, updateIntl } from '../src/'

test('exports', () => {
  expect(IntlProvider).toBeTruthy()
  expect(intlReducer).toBeTruthy()
  expect(updateIntl).toBeTruthy()
})
