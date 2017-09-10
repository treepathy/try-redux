import { createStore, combineReducers } from 'redux'

// Action Types
const INSERT_NUMBER = 'INSERT_NUMBER'
const REMOVE_INDEX = 'REMOVE_INDEX'
const SET_NAME = 'SET_NAME'

// Action Creators of above Action Types
const insertNumber = value => ({
  type: INSERT_NUMBER,
  payload: value
})

const removeIndex = idx => ({
  type: REMOVE_INDEX,
  payload: idx
})

const setName = name => ({
  type: SET_NAME,
  payload: name
})

// Reducers for State Attributes
const numbers = (state = [], action) => {
  switch (action.type) {
    case INSERT_NUMBER:
      return [
          ...state,
          action.payload
        ]
      break;
    case REMOVE_INDEX:
      // return state.filter( (elem, idx) => idx !== action.payload )
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
      break;
    default:
      return state
  }
}

const name = (state = '', action) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload
      break;
    default:
      return state
  }
}

// Redux State Container
const store = createStore(combineReducers({
  numbers,
  name
}))

// Subscribing to State to listen for changes
store.subscribe(() => {
  console.log('State -> ', store.getState(), '\n')
})

// Dispatching Actions
store.dispatch(insertNumber(5))
store.dispatch(insertNumber(10))
store.dispatch(insertNumber(15))
store.dispatch(insertNumber(5))
store.dispatch(insertNumber(10))
store.dispatch(insertNumber(15))
store.dispatch(setName('Dracarys'))
store.dispatch(removeIndex(2))
store.dispatch(removeIndex(1))
store.dispatch(removeIndex(0))
store.dispatch(setName('BEND THE KNEE'))
