import * as ACTIONS from './actions'

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case ACTIONS.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case ACTIONS.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case ACTIONS.SUB:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case ACTIONS.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
        })
      }
    case ACTIONS.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.id
      )
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state
  }
}

export default reducer
