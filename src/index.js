import warning from 'warning'

export IntlProvider from './components/IntlProvider'
export Provider from './components/Provider'

export const UPDATE = '@@intl/UPDATE'

export const updateIntl = ({locale, messages}) => ({
  type: UPDATE,
  payload: {locale, messages},
})

export const update = (intl) => {
  warning(false, '[react-intl-redux] `update` is going to be removed, use `updateIntl` instead')
  return updateIntl(intl)
}

const initialState = {
  locale: 'en',
  messages: {},
}

export function intlReducer(state = initialState, action) {
  if (action.type !== UPDATE) {
    return state
  }

  return { ...state, ...action.payload }
}
