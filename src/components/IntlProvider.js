import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

function defaultSelector(state) {
  const { intl } = state
  return {
    key: intl.locale,
    ...intl
  }
}

const mapStateToProps = (state, { intlSelector = defaultSelector }) =>
  intlSelector(state)

export default connect(mapStateToProps)(IntlProvider)
