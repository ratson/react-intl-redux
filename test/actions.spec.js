import should from 'should'

import {UPDATE, updateIntl} from '../src'

describe('updateIntl', function() {

  it('should create action', () => {
    const locale = 'it'
    const messages = {}
    should(updateIntl({locale, messages})).be.eql({
      type: UPDATE,
      payload: {locale, messages},
    })
  })

})
