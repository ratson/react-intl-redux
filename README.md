React Intl Redux
=========================

[Redux](https://github.com/reactjs/redux) binding for [React Intl](https://github.com/yahoo/react-intl).

## Installation

```
npm install react-intl-redux react react-intl react-redux --save
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {FormattedNumber} from 'react-intl'
import {Provider, intlReducer} from 'react-intl-redux'
import reducers from '<project-path>/reducers'

const reducer = combineReducers({
  ...reducers,
  intl: intlReducer,
})

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <FormattedNumber value={1000}/>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('container'))
```

### Provide `locale` and `messages` on load

You should provide a different `locale` and `messages` if your user is not using `en` locale.

```js
const initialState = {
  intl: {
    locale: 'it',
    messages: {
      'app.greeting': 'Ciao!',
    },
  },
  // ...other initialState
}
const store = createStore(reducer, initialState)
```

Refer to the [`initial-locale` example](https://github.com/ratson/react-intl-redux/tree/master/examples/initial-locale) for more details.

### Switch `locale` and `messages` on request

You could also switch `locale` on user's request by dispatching `updateIntl` action.

```js
import {updateIntl} from 'react-intl-redux'

store.dispatch(updateIntl({
  locale,
  messages,
}))
```

### `Provider` vs `IntlProvider`

In most cases, `react-intl-redux` will be wrapped immediately after `Provider` from `react-redux`. For convenient, `react-intl-redux` provides `Provider` to do that for you.

However, if you don't want it, you could do it manually via `IntlProvider`. For example,

```js
import React from 'react'
import {IntlProvider} from 'react-intl-redux'
import {Provider} from 'react-redux'

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <App/>
    </IntlProvider>
  </Provider>
)
```
