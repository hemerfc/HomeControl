import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { areaSelect } from '../../actions'

export const Monitor = ({ state, onClick, onMove }) => (
  <div className="monitor panel panel-primary">
    <div className="panel-heading">
      <div className="row">
        <div className="col-xs-3">
          <span className="glyphicon glyphicon-flash" aria-hidden="true"></span>
        </div>
        <div className="col-xs-9 text-right">
          <div className="huge">{state.get('name')}</div>
          <div>Detalhes</div>
        </div>
      </div>
    </div>
  </div>
)

export default  Monitor
