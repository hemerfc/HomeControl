const selectedArea = (state = 0, action) => {
  switch (action.type) {
    case 'AREA_SELECT':
      return action.data
    default:
      return state
  }
}

export default selectedArea
