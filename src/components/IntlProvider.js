import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

function defaultSelector(state) {
  return state.intl
}

function defaultKeySelector(intl) {
  return intl.locale
}

const mapStateToProps = (state, { intlSelector = defaultSelector, keySelector = defaultKeySelector }) => {
  const intl = intlSelector(state)
  const key = keySelector(intl)
  return { ...intl, key }
}

export default connect(mapStateToProps)(IntlProvider)
