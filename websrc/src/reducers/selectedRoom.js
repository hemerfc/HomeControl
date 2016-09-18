import { List, Map } from 'immutable'
import { uid } from "../util"

const intialState = Map({ id: 0, name: "" })

const selectedRoom = (state = intialState, action) => {
  switch (action.type) {
    case 'ROOM_SELECT':
      return action.data
    default:
      return state
  }
}

export default selectedRoom
