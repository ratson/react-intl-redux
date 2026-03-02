import { configureStore } from '@reduxjs/toolkit'
import { intlReducer } from 'react-intl-redux'

export const UPDATE_LOCALES = 'UPDATE_LOCALES'

function localesReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

// Redux DevTools Extension is automatically enabled by configureStore.
// Install the browser extension to inspect state:
// https://github.com/reduxjs/redux-devtools/tree/main/extension
const store = configureStore({
  reducer: {
    intl: intlReducer,
    locales: localesReducer,
  },
})

export default store
