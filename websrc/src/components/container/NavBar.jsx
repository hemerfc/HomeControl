import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export const NavBar = ({ isEditing, areas, selectedArea, selectArea, deleteArea,
                         editArea, createArea, showDevices, startEdit,
                         completeEdit, createMonitor, exit }) => (
  <nav className="navbar navbar-inverse">
  	<div className="navbar-header">
  		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
  			<span className="sr-only">Toggle navigation</span>
  			<span className="icon-bar"></span>
  			<span className="icon-bar"></span>
  			<span className="icon-bar"></span>
  		</button>
  		<a className="navbar-brand" href="#"><img src="/content/img/logo_134x50.png" alt="Águia Sistemas"/></a>
  	</div>
  	<div id="navbar" className="navbar-collapse collapse">
  		<ul className="nav navbar-nav">
  			<li className="dropdown">
  			  <a href="#" className="dropdown-toggle" data-toggle="dropdown"
             role="button" aria-haspopup="true" aria-expanded="false">
             Area: {selectedArea.name}
             <span className="caret"></span>
          </a>
  			  <ul className="dropdown-menu">
            {areas.map(area =>
              <li key={area.id}>
                  <a href="#" onClick={() => selectArea(area)}>
                    { area.name }

                    <span onClick={() => deleteArea(area)} className={isEditing?"":"hide"}
                    className="glyphicon glyphicon-trash" aria-hidden="true"></span>

                    <span onClick={() => editArea(area)} className={isEditing?"":"hide"}
                    className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                  </a>
                {area.name}
              </li>)
            }
            {!isEditing?null:
      				<li>
      					<a href="#" onClick={() => createArea()}>Nova Area<span
                   className="glyphicon glyphicon-plus"></span></a>
      				</li>
            }
  			    <li role="separator" className="divider"></li>
  				<li><a href="#" onClick={() => showDevices()}>Dispositivos</a></li>
  			    <li><a href="#">Ajustes</a></li>
  			  </ul>
  			</li>
  			<li className="dropdown">
  				<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
             aria-haspopup="true" aria-expanded="false">
             Relatórios<span className="caret"></span>
          </a>
  				<ul className="dropdown-menu">
  					<li><a onClick={() => showTensaoChart()} href="#">Tensão</a></li>
  					<li><a onClick={() => showPropertyHistory()} href="#">Property History</a></li>
  				</ul>
  			</li>
  		</ul>
  		<ul className="nav navbar-nav navbar-right">
  			<li className={isEditing?"":"hide"}><a href="#" onClick={() => startEdit()}>Editar</a></li>
  			<li className={isEditing?"":"hide"}><a href="#" onClick={() => completeEdit()}>Concluir</a></li>
  			<li className={isEditing?"":"hide"}><a href="#" onClick={() => createMonitor()}>Criar Monitor</a></li>
        <li><a href="#" onClick={() => exit()}>Sair</a></li>
  		</ul>
  	</div>
  </nav>
)

// return container component connected woth the store
export default connect(
(state) => {
  return { isEditing : state.isEditing,
           areas: state.areas,
           selectedArea: state.selectedArea }
},
(dispatch) => {
  return {
    selectArea: (area) => {
      dispatch(actions.areaSelect(area))
    },
    deleteArea: (area) => {
      dispatch(actions.areaDelete(area))
    },
    editArea: (area) => {
      //dispatch(areaEdit(area))
    },
    createArea: () => {
      //dispatch(areaCreate())
    },
    showDevices: () => {
      //dispatch(devicesShow())
    },
    startEdit: () => {
      //dispatch(startEdit())
    },
    completeEdit: () => {
      //dispatch(completeEdit())
    },
    createMonitor: () => {
      //dispatch(monitorCreate())
    },
    exit: () => {
      //dispatch(edit())
    },
  }
})(NavBar)
