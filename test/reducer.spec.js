import should from 'should'

import {initialState, intlReducer, UPDATE} from '../src'

describe('intlReducer', () => {
  it('should set initial state', () => {
    should(intlReducer(undefined, {})).be.eql(initialState)
  })

  it('can update state', () => {
    const payload = {
      locale: 'it',
      messages: {},
    }
    const action = {
      type: UPDATE,
      payload,
    }
    should(intlReducer(undefined, action)).be.eql(payload)
  })
})
