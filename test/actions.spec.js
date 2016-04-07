import should from 'should'

import {UPDATE, update} from '../src'

describe('update action', function() {

  it('creates actions', () => {
    const locale = 'it'
    const messages = {}
    should(update({locale, messages})).be.eql({
      type: UPDATE,
      payload: {locale, messages},
    })
  })

})
