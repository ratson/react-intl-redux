import {connect, Provider as ReduxProvider} from 'react-redux'
import {IntlProvider} from 'react-intl'
import React, {PropTypes} from 'react'

const Provider = ({store, ...props}) => {
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

const mapStateToProps = (state) => {
  const {intl} = state
  return {
    ...intl,
  }
}

export default connect(mapStateToProps)(Provider)
