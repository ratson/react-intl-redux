export Provider from './components/Provider'

export const UPDATE = '@@intl/UPDATE'

export const update = ({locale, messages}) => {
  return {
    type: UPDATE,
    payload: {locale, messages},
  }
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
