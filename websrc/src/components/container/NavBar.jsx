import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export const NavBar = ({ isEditing, rooms, selectedRoom, selectRoom, exit }) => (
  <nav className="navbar-default navbar-static-top navbar-inverse">
  	<div className="navbar-header">
  		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
  			<span className="sr-only">Toggle navigation</span>
  			<span className="icon-bar"></span>
  			<span className="icon-bar"></span>
  			<span className="icon-bar"></span>
  		</button>
      <a className="main-icon">
        <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
      </a>
      <a className="navbar-brand" href="#">Home</a>
  	</div>
  	<div id="navbar" className="navbar-collapse collapse">
  		<ul className="nav navbar-nav">
  			<li className="dropdown">
  			  <a href="#" className="dropdown-toggle" data-toggle="dropdown"
             role="button" aria-haspopup="true" aria-expanded="false">
             Comodo: {selectedRoom.get('name')}
             <span className="caret"></span>
          </a>
  			  <ul className="dropdown-menu">
            {rooms.map(room =>
              <li key={room.get('id')}>
                  <a href="#" onClick={() => selectRoom(room)}>
                    { room.get('name') }
                  </a>
              </li>)
            }
  			    <li role="separator" className="divider"></li>
  			    <li><a href="#">Ajustes</a></li>
  			  </ul>
  			</li>
  		</ul>
  		<ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={() => exit()}>Sair</a></li>
  		</ul>
  	</div>
  </nav>
)

// return container component connected woth the store
export default connect(
(state) => {
  return {
    rooms: state.rooms,
    selectedRoom: state.selectedRoom
  }
},
(dispatch) => {
  return {
    selectRoom: (room) => {
      dispatch(actions.roomSelect(room))
    },
    exit: () => {
      //dispatch(exit())
    },
  }
})(NavBar)
