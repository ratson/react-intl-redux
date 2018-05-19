import { createStore, combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'
import React from 'react'

import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

const UPDATE_LOCALES = 'UPDATE_LOCALES'

function localesReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  intl: intlReducer,
  locales: localesReducer
})

export const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
  >
    <LogMonitor />
  </DockMonitor>
)

const store = createStore(reducer, {}, DevTools.instrument())

export default store
