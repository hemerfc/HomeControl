import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NavBar from './components/container/NavBar'
import MainView from './components/container/MainView'
import reducer from './reducers'
import { areaAddRange } from './actions'

const store = createStore(reducer)

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <MainView />
        <NavBar />
      </div>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)