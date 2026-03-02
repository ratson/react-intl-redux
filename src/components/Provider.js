import { Provider as ReduxProvider } from 'react-redux'
import PropTypes from 'prop-types'

import IntlProvider from './IntlProvider'

const Provider = ({ store, children }) =>
  <ReduxProvider store={store}>
    <IntlProvider>
      {children}
    </IntlProvider>
  </ReduxProvider>

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default Provider
