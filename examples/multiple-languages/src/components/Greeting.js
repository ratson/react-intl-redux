import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'

const Greeting = () => (
  <p>
    <FormattedMessage id="app.greeting" defaultMessage="Hello!" />
  </p>
)

export default injectIntl(connect()(Greeting))
