import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { areaSelect } from '../../actions'

export const LightMonitor = ({ state, onChange, onMove }) => (
  <div className="monitor panel panel-primary">
    <div className="panel-heading">
      <div className="row">
        <div className="col-xs-3">
            <img className="icon"
                 src={state.get('value') == "on"?
                    "content/img/light-on.png":
                    "content/img/light-off.png"} />
        </div>
        <div className="col-xs-9 text-right">
          <div className="huge">{state.get('name')}</div>
          <div>Detalhes {state.get('value')}</div>
        </div>
      </div>
    </div>
  </div>
)

export default  LightMonitor
