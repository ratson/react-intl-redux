import {connect, Provider as ReduxProvider} from 'react-redux'
import {IntlProvider} from 'react-intl'
import React, {PropTypes} from 'react'
import warning from 'warning'

const mapStateToProps = (state) => {
  const {intl} = state
  return {
    ...intl,
    key: intl.locale,
  }
}

const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider)

const Provider = ({store, ...props}) => {
  warning(!(props.locale || props.messages), '[react-intl-redux] pass `locale` and `messages` is deprecated, please set them in `initalState` instead. https://github.com/ratson/react-intl-redux/issues/4')  // eslint-disable-line
  return (
    <ReduxProvider store={store}>
      <ConnectedIntlProvider {...props} />
    </ReduxProvider>
  )
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}

export default Provider
