import * as ACTIONS from '../actions'

const initialState = {
  results: []
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.value
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

export default resultReducer
