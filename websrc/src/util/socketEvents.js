//import io from 'socket.io-client'
const socket = io()

socket.on('action', (action) => console.log("received ", action))

const scoketEvents = {
  socket: socket,
  updateMonitor: (id, value) => {
    let action = {type: 'MONITOR_UPDATE', data: { id:id , value: value}}
    socket.emit('action', action)
  }
}

export default scoketEvents
