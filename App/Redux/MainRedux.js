const mainReducer = (state = 'HOME', action) => {
  if (action.type === 'HOME') {
    return 'HOME'
  }
  if (action.type === 'SEARCH') {
    return 'SEARCH'
  }
  if (action.type === 'SELL') {
    return 'SELL'
  }
  if (action.type === 'NOTIFY') {
    return 'NOTIFY'
  }
  if (action.type === 'USER') {
    return 'USER'
  }
}
export default mainReducer
