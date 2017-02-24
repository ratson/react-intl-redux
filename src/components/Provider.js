import {Provider as ReduxProvider} from 'react-redux'
import React, {PropTypes} from 'react'

import IntlProvider from './IntlProvider'

// eslint-disable-next-line react/prop-types
const Provider = ({store, children}) => (
  <ReduxProvider store={store}>
    <IntlProvider>
      {children}
    </IntlProvider>
  </ReduxProvider>
  )

Provider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Provider
