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
          <div className={"toggle btn btn-primary " +
                          (state.get('value')==1?" on":" off") }
               data-toggle="toggle" style={{ width: '102px', height: '34px' }}
               onClick={(e)=> { onChange(state.get('value')==1?0:1);
                               e.preventDefault() }}>
            <div className="toggle-group">
              <label className="btn btn-primary toggle-on">Ligado</label>
              <label className="btn btn-default active toggle-off">Desligado</label>
              <span className="toggle-handle btn btn-default"></span>
            </div>
          </div>
          <div>Detalhes</div>
        </div>
      </div>
    </div>
  </div>
)

export default  LightMonitor
