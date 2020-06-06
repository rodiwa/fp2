import { INIT_DB_LOAD } from '../actions'

const databaseReducer = (state = {}, action) => {
  switch(action.type) {
    case INIT_DB_LOAD:
      return action.payload
    default:
      return state
  }
}

export default databaseReducer
