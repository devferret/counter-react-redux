import * as ACTIONS from '../actions'

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default counterReducer
