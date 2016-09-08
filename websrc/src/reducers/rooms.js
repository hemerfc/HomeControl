import { List, Map } from 'immutable'
import { uid } from "../util"

const intialState = List([
  Map({ id: 1, name: "Suite 1" }),
  Map({ id: 2, name: "Suite 2" }),
  Map({ id: 3, name: "Sala" }),
  Map({ id: 4, name: "Cozinha" })
])

const rooms = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default rooms
