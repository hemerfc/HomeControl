export const areaAdd = (area) => {
  return { type: 'AREA_ADD', data : area }
}

export const areaDelete = (area) => {
  return { type: 'AREA_DELETE', data : area }
}

export const areaSelect = (id) => {
  return { type: 'AREA_SELECT', data : id }
}

export const monitorSelect = (id) => {
  return { type: 'MONITOR_SELECT', data : id }
}
