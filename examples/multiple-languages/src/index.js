/* globals document */
import { addLocaleData, FormattedMessage } from 'react-intl'
import { createStore, combineReducers } from 'redux'
import { IntlProvider, intlReducer, updateIntl } from 'react-intl-redux'
import { Provider, connect } from 'react-redux'
import itLocaleData from 'react-intl/locale-data/it'
import zhLocaleData from 'react-intl/locale-data/zh'
import React from 'react'
import ReactDOM from 'react-dom'

import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

addLocaleData([...itLocaleData, ...zhLocaleData])

const UPDATE_LOCALES = 'UPDATE_LOCALES'

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

const reducer = combineReducers({
  intl: intlReducer,
  locales: localesReducer,
})
const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
  >
    <LogMonitor />
  </DockMonitor>
)
const store = createStore(reducer, {}, DevTools.instrument())

const SwitchLocale = connect((state, props) => ({
  currentLocale: state.intl.locale,
  locales: state.locales,
}))(({ currentLocale, locales, onChange }) => (
  <select
    value={currentLocale}
    onChange={e =>
      store.dispatch(
        updateIntl({
          locale: e.target.value,
          messages: locales[e.target.value],
        })
      )}
  >
    {Object.keys(locales).map(locale => <option key={locale}>{locale}</option>)}
  </select>
))

class App extends React.Component {
  handleLoadlLocales = () => {
    store.dispatch({
      type: UPDATE_LOCALES,
      payload: {
        en: {
          'app.greeting': 'Hello!',
        },
        it: {
          'app.greeting': 'Ciao!',
        },
        zh: {
          'app.greeting': '你好!',
        },
      },
    })
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider>
          <div>
            <p>
              <FormattedMessage id="app.greeting" defaultMessage="Hello!" />
            </p>
            <p>
              <button onClick={this.handleLoadlLocales}>
                Local locales
              </button>{' '}
              <SwitchLocale />
            </p>
            <DevTools />
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
