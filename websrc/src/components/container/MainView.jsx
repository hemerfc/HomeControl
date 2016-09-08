import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Monitor from '../presenter/Monitor'
import { monitorSelect } from '../../actions'

export const MainView = ({ monitors, isEditing, currentArea, onMonitorClick }) => (
  <div className="plantview">
    <div id="plantviewContent" className="content">
      <div id="drawingArea">
        {monitors.map(monitor =>
          <Monitor key={monitor.get('id')} state={monitor}
                   onClick={() => onMonitorClick(monitor.get('id'))}
                   className={isEditing?"default edit":"default"} />)}
          </div>
          <img id="bg" src={currentArea.ImgUrl} />
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
