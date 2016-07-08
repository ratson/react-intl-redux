import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'
import React from 'react'

const mapStateToProps = (state) => {
  const {intl} = state
  return {
    ...intl,
    key: intl.locale,
  }
}

export default connect(mapStateToProps)(IntlProvider)
