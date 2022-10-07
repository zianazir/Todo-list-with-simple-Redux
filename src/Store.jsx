import { createStore } from 'redux';
import rootReducer from './Reducer';

const store = createStore(rootReducer,{} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store                            //import the store in main.jsx with providers so that it gets connected