import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LightMonitor from '../presenter/LightMonitor'
import { MonitorUpdate } from '../../actions'
import socketEvents from '../../util/socketEvents'

export const MainView = ({ monitors, isEditing, currentArea, onMonitorUpdate }) => (
  <div className="container-fluid">
    <div className="row">
      {monitors.map(monitor =>
        <div key={monitor.get('id')} className="col-lg-3 col-md-6">
            <LightMonitor state={monitor}
                  onChange={(value) => onMonitorUpdate(monitor.get('id'), value)}
                  className={isEditing?"default edit":"default"} />
        </div>
      )}
    </div>
  </div>
)

// return container component connected woth the store

export default connect(
(state) => {
  return {
    monitors: state.monitors,
    isEditing: state.isEditing,
    currentArea: state.selectedArea
  }
},
(dispatch) => {
  return {
    onMonitorUpdate: (id, value) => {
      socketEvents.updateMonitor(id, value)
      //dispatch(MonitorUpdate(id, value))
    }
  }
})(MainView)
