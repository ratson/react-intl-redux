import test from 'ava'

import { UPDATE, updateIntl } from 'react-intl-redux'

test('updateIntl should create action', t => {
  const locale = 'it'
  const messages = {}
  t.deepEqual(updateIntl({ locale, messages }), {
    type: UPDATE,
    payload: { locale, messages, formats: undefined },
  })
})

test('updateIntl should include formats', t => {
  const locale = 'it'
  const formats = {}
  t.deepEqual(updateIntl({ locale, formats }), {
    type: UPDATE,
    payload: { locale, formats, messages: undefined },
  })
})
