import { IntlProvider, intlReducer, updateIntl } from '..'

test('exports', () => {
  expect(IntlProvider).toBeTruthy()
  expect(intlReducer).toBeTruthy()
  expect(updateIntl).toBeTruthy()
})
