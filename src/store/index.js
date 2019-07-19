import {createStore} from 'redux'
import reducer from '../reducer'

const initialState = { text: 'Redux' };
const store = createStore(reducer, initialState);

export default store;
