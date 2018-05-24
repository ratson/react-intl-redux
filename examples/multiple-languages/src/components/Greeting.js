import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

const Greeting = () => (
  <p>
    <FormattedMessage id="app.greeting" defaultMessage="Hello!" />
  </p>
)

export default connect()(Greeting)
