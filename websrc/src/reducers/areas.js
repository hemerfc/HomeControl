import { List, Map } from 'immutable'
import { uid } from "../util"

const intialState = List([
  Map({ id: uid(), name: "Estações 01 a 10" }),
  Map({ id: uid(), name: "Estações 11 a 20" }),
  Map({ id: uid(), name: "Conferencia" }),
  Map({ id: uid(), name: "Expedição" })
])

const areas = (state = intialState, action) => {
  switch (action.type) {
    case 'AREA_ADD':
      return state.push(Map({id: action.data.id, name: action.data.name}))
    default:
      return state
  }
}

export default areas
