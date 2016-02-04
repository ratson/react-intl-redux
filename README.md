React Intl Redux
=========================

## Installation

```
npm install --save react-intl-redux
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
