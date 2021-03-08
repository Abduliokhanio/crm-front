import {combineReducers} from 'redux'
import leadReducer from './leadReducer'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
    leadReducer,
    noteReducer
})

export default rootReducer