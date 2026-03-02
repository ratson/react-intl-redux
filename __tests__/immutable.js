import { render } from '@testing-library/react'
import Immutable from 'immutable'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { IntlProvider, intlReducer } from '../src/'

function combineImmutableReducers(reducers) {
  return function (state = Immutable.Map(), action) {
    return state.withMutations(mutableState => {
      Object.keys(reducers).forEach(key => {
        mutableState.set(key, reducers[key](state.get(key), action))
      })
    })
  }
}

test('IntlProvider should render default en locale', () => {
  const reducer = combineImmutableReducers({
    intl: intlReducer
  })
  const initialState = Immutable.fromJS({
    intl: {
      locale: 'en',
      messages: {}
    }
  })
  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  })
  const intlSelector = state => state.get('intl').toJS()
  const { container } = render(
    <Provider store={store}>
      <IntlProvider intlSelector={intlSelector}>
        <FormattedNumber value={1000} />
      </IntlProvider>
    </Provider>
  )

  expect(container.textContent).toBe('1,000')
})
