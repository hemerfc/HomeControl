import { combineReducers } from 'redux'
import monitors from './monitors'
import rooms from './rooms'
import selectedRoom from './selectedRoom'

let time = function reducer(state = "", action){
  switch(action.type){
    case 'time':
      console.log(action.data)
      return action.data;
    default:
      return state;
  }
}

const reducers = combineReducers({
  monitors,
  rooms,
  selectedRoom,
  time
})

export default reducers
