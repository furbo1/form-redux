
import {createStore} from 'redux'
import {myreducers} from './Reducer'
let store = createStore(myreducers)

export default store