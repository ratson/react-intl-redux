import { initialState, intlReducer, UPDATE } from '..'

test('initialState should default to en', () => {
  expect(initialState).toEqual({
    locale: 'en',
    messages: {}
  })
})

test('intlReducer should set initial state', () => {
  expect(intlReducer(undefined, {})).toEqual(initialState)
})

test('intlReducer can update state', () => {
  const payload = {
    locale: 'it',
    messages: {}
  }
  const action = {
    type: UPDATE,
    payload
  }
  expect(intlReducer(undefined, action)).toEqual(payload)
})
