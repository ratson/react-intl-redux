import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

function defaultSelector(state) {
  return state.intl
}

const mapStateToProps = (state, { intlSelector = defaultSelector }) =>
  intlSelector(state)

export default connect(mapStateToProps, null, null, { pure: false })(
  IntlProvider
)
