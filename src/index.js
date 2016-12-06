import warning from 'warning'

export IntlProvider from './components/IntlProvider'
export Provider from './components/Provider'

export const UPDATE = '@@intl/UPDATE'
export const ADD = '@@intl/ADD'
export const CHANGE = '@@intl/CHANGE'

export const updateIntl = ({locale, messages}) => ({
  type: UPDATE,
  payload: {locale, messages},
})

export const update = (intl) => {
  warning(false, '[react-intl-redux] `update` is going to be removed, use `updateIntl` instead')
  return updateIntl(intl)
}

// add messages to locale store. Doesn't update selected locale.
export const addIntl = ({locale, messages}) => ({
  type: ADD,
  payload: { locale, messages },
})

// changes selected locale.
export const changeLocale = (locale) => ({
  type: CHANGE,
  payload: { locale },
})

const initialState = {
  locale: 'en',
  messages: {},
  localeStore: {}
}

export function intlReducer(state = initialState, action) {
  const localeStore = state.localeStore
  if (action.type === ADD) {
    const payloadLocale = action.payload.locale
    if (payloadLocale in localeStore) {
      let locale1 = localeStore[payloadLocale]
      locale1.messages = Object.assign({}, locale1.messages, action.payload.messages)
    } else {
      localeStore[payloadLocale] = action.payload
    }
    if (state.locale === payloadLocale) {
      state.messages = Object.assign({}, state.messages, action.payload.messages)
    }
    return Object.assign({}, state)
  }
  if (action.type === CHANGE) {
    const payloadLocale = action.payload.locale
    if (payloadLocale in localeStore) {
      return {...state, ...state.localeStore[payloadLocale] }
    }
  }
  if (action.type === UPDATE) {
    return { ...state, ...action.payload }
  }
  return state
}
