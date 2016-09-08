import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LightMonitor from '../presenter/LightMonitor'
import { monitorSelect } from '../../actions'

export const MainView = ({ monitors, isEditing, currentArea, onMonitorClick }) => (
  <div className="container-fluid">
    <div className="row">
      {monitors.map(monitor =>
        <div key={monitor.get('id')} className="col-lg-3 col-md-6">
            <LightMonitor state={monitor}
                  onClick={() => onMonitorClick(monitor.get('id'))}
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
    onMonitorClick: (id) => {
      dispatch(monitorSelect(id))
    }
  }
})(MainView)
