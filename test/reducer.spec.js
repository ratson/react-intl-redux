import should from 'should'

import {intlReducer} from '../src'

describe('intlReducer', function() {

  it('should set initial state', () => {
    const locale = 'it'
    const messages = {}
    should(intlReducer(undefined, {})).be.eql({
      locale: 'en',
      messages: {},
    })
  })

})
