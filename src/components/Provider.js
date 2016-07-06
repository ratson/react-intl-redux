import {connect, Provider as ReduxProvider} from 'react-redux'
import React, {PropTypes} from 'react'
import warning from 'warning'

import IntlProvider from './IntlProvider'

const Provider = ({store, ...props}) => {
  warning(!(props.locale || props.messages), '[react-intl-redux] pass `locale` and `messages` is deprecated, please set them in `initalState` instead. https://github.com/ratson/react-intl-redux/issues/4')  // eslint-disable-line
  warning(true, '[react-intl-redux] `Provider` is going to be removed, use `IntlProvider` instead')  // eslint-disable-line
  return (
    <ReduxProvider store={store}>
      <IntlProvider {...props} />
    </ReduxProvider>
  )
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}

export default Provider
