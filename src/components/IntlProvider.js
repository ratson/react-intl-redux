import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

function defaultSelector(state) {
  return state.intl
}

const mapStateToProps = (state, { intlSelector = defaultSelector }) => {
  const intl = intlSelector(state)
  return {
    ...intl,
    key: intl.locale,
  }
}

export default connect(mapStateToProps)(IntlProvider)
