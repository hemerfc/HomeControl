import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { areaSelect } from '../../actions'

export const TemperatureMonitor = ({ state, onChange, onMove }) => (
  <div className="monitor panel panel-primary">
    <div className="panel-heading">
      <div className="row">
        <div className="col-xs-3">
            <div className="huge">*</div>
        </div>
        <div className="col-xs-9 text-right">
          <div className="huge">{state.get('value')}</div>
          <div>{state.get('name')}</div>
        </div>
      </div>
    </div>
  </div>
)

export default TemperatureMonitor
