import { UPDATE, updateIntl } from '..'

test('updateIntl should create action', () => {
  const locale = 'it'
  const messages = {}

  expect(updateIntl({ locale, messages })).toEqual({
    type: UPDATE,
    payload: { locale, messages, formats: undefined }
  })
})

test('updateIntl should include formats', () => {
  const locale = 'it'
  const formats = {}

  expect(updateIntl({ locale, formats })).toEqual({
    type: UPDATE,
    payload: { locale, formats, messages: undefined }
  })
})
