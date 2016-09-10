import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import NavBar from './components/container/NavBar'
import MainView from './components/container/MainView'
import reducer from './reducers'
import { areaAddRange } from './actions'
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';

// bin socket.io to actions
let socket = io()
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <NavBar />
        <MainView />
      </div>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
