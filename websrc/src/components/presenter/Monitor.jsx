import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { areaSelect } from '../../actions'

export const Monitor = ({ state, onClick, onMove }) => (
  <div onClick={onClick}>
    {state.get('name')}
  </div>
)

export default  Monitor
