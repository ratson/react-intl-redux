import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'
import {Iterable} from 'immutable'

const mapStateToProps = (state) => {
  let intl
  if (Iterable.isIterable(state)) {
    intl = state.get('intl')
  } else {
    intl = state.intl
  }
    
  return {
    ...intl,
    key: intl.locale,
  }
}

export default connect(mapStateToProps)(IntlProvider)
