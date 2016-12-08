import should from 'should'

import {intlReducer} from '../src'

describe('intlReducer', () => {
  it('should set initial state', () => {
    should(intlReducer(undefined, {})).be.eql({
      locale: 'en',
      messages: {},
    })
  })

  it('can update state', () => {
    const payload = {
      locale: 'it',
      messages: {},
    }
    const action = {
      type: '@@intl/UPDATE',
      payload,
    }
    should(intlReducer(undefined, action)).be.eql(payload)
  })
})
