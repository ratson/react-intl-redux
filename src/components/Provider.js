import {Provider as ReduxProvider} from 'react-redux'
import React, {PropTypes} from 'react'

import IntlProvider from './IntlProvider'

const Provider = ({store, children}) => (
  <ReduxProvider store={store}>
    <IntlProvider>
      {children}
    </IntlProvider>
  </ReduxProvider>
  )

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}

export default Provider
