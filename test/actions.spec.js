import should from 'should'

import { UPDATE, updateIntl } from '../src'

describe('updateIntl', () => {
  it('should create action', () => {
    const locale = 'it'
    const messages = {}
    should(updateIntl({ locale, messages })).be.eql({
      type: UPDATE,
      payload: { locale, messages, formats: undefined },
    })
  })

  it('should include formats', () => {
    const locale = 'it'
    const formats = {}
    should(updateIntl({ locale, formats })).be.eql({
      type: UPDATE,
      payload: { locale, formats, messages: undefined },
    })
  })
})
