import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import reducer from '../reducer'

const middleWare = [thunk]

const makeRootReducer = asyncReducers => {
  return combineReducers({
    ...asyncReducers
  })
}

const store = createStore(
  reducer,
  {},
  applyMiddleware(...middleWare)
)

store.async = {}

export function registerReducer (store, reducers) {
  store.async[reducers.key] = reducers.reducer
  store.replaceReducer(makeRootReducer(store.async))
}

if (module.hot) {
  module.hot.accept('../reducer', () => {
    const nextRootReducer = require('../reducer')

    store.replaceReducer(nextRootReducer)
  })
}

export default store
