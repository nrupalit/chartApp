import { createStore, combineReducers } from 'redux';
import Reducer from './Reducers';

const rootReducer = combineReducers({
  Reducer: Reducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;