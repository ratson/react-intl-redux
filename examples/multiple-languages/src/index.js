import { IntlProvider } from 'react-intl-redux'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import Greeting from './components/Greeting'
import SwitchLocale from './components/SwitchLocale'
import store, { UPDATE_LOCALES } from './store'

const App = () => {
  const handleLoadLocales = () => {
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

  return (
    <Provider store={store}>
      <IntlProvider>
        <div>
          <Greeting />
          <p>
            <button type="button" onClick={handleLoadLocales}>
              Local locales
            </button>{' '}
            <SwitchLocale />
          </p>
        </div>
      </IntlProvider>
    </Provider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
