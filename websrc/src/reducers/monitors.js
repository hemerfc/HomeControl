import { List, Map } from 'immutable'
import { uid } from "../util"

const intialState = List([
  Map({ id: 1, name: "Monitor Blue", type:"light", roomId:1, value:0 }),
  Map({ id: 2, name: "Monitor Green", type:"air", roomId:1, value:0 }),
  Map({ id: 3, name: "Monitor Red", type:"light", roomId:1, value:0 })
])

const monitors = (state = intialState, action) => {
  switch (action.type) {
    case 'MONITOR_UPDATE':
      return state.map(t => {
        if(t.get('id') == action.data.id) {
          return t.set('value', action.data.value);
        } else {
          return t;
        }
      });
    case 'MONITOR_MOVE':
      return state.map(t => {
        if(t.get('id') == action.data.id) {
          return t.set('x', action.data.x)
                  .set('y', action.data.y);
        } else {
          return t;
        }
      });
    default:
      return state
  }
}

export default monitors
