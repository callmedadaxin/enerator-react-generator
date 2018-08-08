import { combineReducers } from 'redux'
import { ADD_USER } from '../actions'

const initList = []
const list = (state = initList, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    default:
      return state
  }
}

export default combineReducers({
  list
})
