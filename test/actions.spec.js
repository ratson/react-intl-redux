import should from 'should'

import {UPDATE, updateIntl} from '../src'

describe('update action', function() {

  it('creates actions', () => {
    const locale = 'it'
    const messages = {}
    should(updateIntl({locale, messages})).be.eql({
      type: UPDATE,
      payload: {locale, messages},
    })
  })

})
