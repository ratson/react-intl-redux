import test from 'ava'

import { initialState, intlReducer, UPDATE } from 'react-intl-redux'

test('initialState should default to en', t => {
  t.deepEqual(initialState, {
    locale: 'en',
    messages: {}
  })
})

test('intlReducer should set initial state', t => {
  t.deepEqual(intlReducer(undefined, {}), initialState)
})

test('intlReducer can update state', t => {
  const payload = {
    locale: 'it',
    messages: {}
  }
  const action = {
    type: UPDATE,
    payload
  }
  t.deepEqual(intlReducer(undefined, action), payload)
})
