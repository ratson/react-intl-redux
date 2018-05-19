import React from 'react'
import { connect } from 'react-redux'
import { updateIntl } from 'react-intl-redux'

import store from '../store'

const SwitchLocale = connect(state => ({
  currentLocale: state.intl.locale,
  locales: state.locales
}))(({ currentLocale, locales }) => (
  <select
    value={currentLocale}
    onChange={e =>
      store.dispatch(
        updateIntl({
          locale: e.target.value,
          messages: locales[e.target.value]
        })
      )
    }
  >
    {Object.keys(locales).map(locale => <option key={locale}>{locale}</option>)}
  </select>
))

export default SwitchLocale
