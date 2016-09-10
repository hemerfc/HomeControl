import { List, Map } from 'immutable'
import { uid } from "../util"

const intialState = List([
  Map({ id: 1, name: "Monitor 1", type:"light", roomId:1, value:"on" }),
  Map({ id: 2, name: "Monitor 2", type:"air", roomId:1, value:"20" }),
  Map({ id: 3, name: "Monitor 3", type:"light", roomId:1, value:"off" }),
  Map({ id: 4, name: "Monitor 4", type:"air", roomId:1, value:"" })
])

const monitors = (state = intialState, action) => {
  switch (action.type) {
    case 'MONITOR_UPDATE_VALUE':
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
