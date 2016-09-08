import { combineReducers } from 'redux'
import monitors from './monitors'
import rooms from './rooms'
import selectedRoom from './selectedRoom'

const reducers = combineReducers({
  monitors,
  rooms,
  selectedRoom
})

export default reducers
