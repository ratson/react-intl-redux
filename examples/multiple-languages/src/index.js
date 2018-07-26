/* eslint-env browser */
import { addLocaleData } from 'react-intl'
import { IntlProvider } from 'react-intl-redux'
import { Provider } from 'react-redux'
import itLocaleData from 'react-intl/locale-data/it'
import zhLocaleData from 'react-intl/locale-data/zh'
import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from './components/Greeting'
import SwitchLocale from './components/SwitchLocale'
import store, { DevTools } from './store'

addLocaleData([...itLocaleData, ...zhLocaleData])

const UPDATE_LOCALES = 'UPDATE_LOCALES'

class App extends React.Component {
  handleLoadlLocales = () => {
    store.dispatch({
      type: UPDATE_LOCALES,
      payload: {
        en: {
          'app.greeting': 'Hello!'
        },
        it: {
          'app.greeting': 'Ciao!'
        },
        zh: {
          'app.greeting': '你好!'
        }
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider>
          <div>
            <Greeting />
            <p>
              <button type="button" onClick={this.handleLoadlLocales}>
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
