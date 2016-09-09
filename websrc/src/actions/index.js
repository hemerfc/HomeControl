
export const roomSelect = (id) => {
  return { type: 'ROOM_SELECT', data : id }
}

export const MonitorUpdate = (id, value) => {
  return { type: 'MONITOR_UPDATE', data : {id: id, value : value} }
}
