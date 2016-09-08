import { combineReducers } from 'redux'
import monitors from './monitors'
import areas from './areas'
import selectedArea from './selectedArea'

const reducers = combineReducers({
  monitors,
  areas,
  selectedArea
})

export default reducers
