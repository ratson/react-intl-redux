import {Provider as ReduxProvider} from 'react-redux'
import React, {PropTypes} from 'react'
import {storeShape} from 'react-redux/lib/utils/PropTypes'

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
  store: storeShape.isRequired,
}

export default Provider
