React Intl Redux
=========================

## Installation

```
npm install --save react react-intl react-redux react-intl-redux
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { FormattedNumber } from 'react-intl';
import { createStore, combineReducers } from 'redux'
import { Provider, intlReducer } from 'react-intl-redux'
import reducers from '<project-path>/reducers'

const reducer = combineReducers({
  ...reducers,
  intl: intlReducer,
})

const store = createStore(reducer)

const App = () => {
  return (
    <p>
      <FormattedNumber value={10} />
    </p>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
```

### Provide `locale` and `messages` on load

You should provide a different `locale` and `messages` if your user is not using `en` locale.

```js
const messages = {
  'app.greeting': 'Ciao!',
}

<Provider store={store} locale="it" messages={messages}>
  <App />
</Provider>
```

### Switch `locale` and `messages` on request

You could also switch `locale` on user's request by dispatching `update` action.

```js
import {update} from 'react-intl-redux'

dispatch(update({
  locale,
  messages,
}))
```
