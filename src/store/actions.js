export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUB = 'SUB'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const incrementCount = () => dispatch =>
  dispatch({
    type: INCREMENT
  })

export const decrementCount = () => dispatch =>
  dispatch({
    type: DECREMENT
  })

export const addCount = value => dispatch =>
  dispatch({
    type: ADD,
    value: value
  })

export const subCount = value => dispatch =>
  dispatch({
    type: SUB,
    value: value
  })

export const storeCount = value => dispatch =>
  dispatch({
    type: STORE_RESULT,
    value: value
  })

export const deleteCount = id => dispatch =>
  dispatch({
    type: DELETE_RESULT,
    id: id
  })
