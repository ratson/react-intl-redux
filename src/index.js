export { default as IntlProvider } from './components/IntlProvider';
export { default as Provider } from './components/Provider';

export const UPDATE = '@@intl/UPDATE'

export const updateIntl = ({ locale, formats, messages }) => ({
  type: UPDATE,
  payload: { locale, formats, messages },
})

export const initialState = {
  locale: 'en',
  messages: {},
}

export function intlReducer(state = initialState, action) {
  if (action.type !== UPDATE) {
    return state
  }

  return { ...state, ...action.payload }
}
