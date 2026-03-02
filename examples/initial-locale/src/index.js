import { FormattedMessage } from 'react-intl'
import { configureStore } from '@reduxjs/toolkit'
import { IntlProvider, intlReducer } from 'react-intl-redux'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

const store = configureStore({
  reducer: { intl: intlReducer },
  preloadedState: {
    intl: {
      defaultLocale: 'zh',
      locale: 'it',
      messages: {
        'app.greeting': 'Ciao!'
      }
    }
  }
})

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <p>
        <FormattedMessage id="app.greeting" defaultMessage="你好!" />
      </p>
    </IntlProvider>
  </Provider>
)

createRoot(document.getElementById('root')).render(<App />)
