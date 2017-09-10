import { createStore, combineReducers } from 'redux'

// Action Types
const INSERT_NUMBER = 'INSERT_NUMBER'
const REMOVE_NUMBER = 'REMOVE_NUMBER'
const SET_NAME = 'SET_NAME'

// Action Creators of above Action Types
const insertActionCreator = value => {
  console.log(`Insering ${value} in numbers`)
  return {
    type: INSERT_NUMBER,
    payload: value
  }
}

const removeActionCreator = idx => {
  console.log(`Removing index ${idx} from numbers`)
  return {
    type: REMOVE_NUMBER,
    payload: idx
  }
}

const setNameActionCreator = name => {
    console.log(`Setting name as ${name}`)
    return {
      type: SET_NAME,
      payload: name
    }
}

// Reducers for State Attributes
const numbersReducer = (state = [], action) => {
  switch (action.type) {
    case INSERT_NUMBER:
      return [
          ...state,
          action.payload
        ]
      break;
    case REMOVE_NUMBER:
      return state.filter( (elem, idx) => idx !== action.payload )
      break;
    default:
      return state
  }
}

const nameReducer = (state = '', action) => {
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
  numbers: numbersReducer,
  name: nameReducer
}))

// Subsribing to State to listen for changes
store.subscribe(() => {
  console.log('State -> ', store.getState(), '\n')
})

// Dispatching Actions
store.dispatch(insertActionCreator(5))
store.dispatch(insertActionCreator(10))
store.dispatch(insertActionCreator(15))
store.dispatch(insertActionCreator(5))
store.dispatch(insertActionCreator(10))
store.dispatch(insertActionCreator(15))
store.dispatch(setNameActionCreator('Dracarys'))
store.dispatch(removeActionCreator(2))
store.dispatch(removeActionCreator(1))
store.dispatch(removeActionCreator(0))
store.dispatch(setNameActionCreator('BEND THE KNEE'))
