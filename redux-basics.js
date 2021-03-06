const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
      break
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value
      }
      break
    default:
      return state
  }
}

// store
const store = createStore(rootReducer)
console.log('[store]', store.getState())

// subscription
store.subscribe(() => console.log('[subcription]', store.getState()))

// dispatching action
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
console.log('[dispatch]', store.getState())
