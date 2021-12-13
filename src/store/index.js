import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import reduxSaga from 'redux-saga';
// import makeRootReducer from '../redux/reducers';


const initalState = {};

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(saga)))
const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(makeRootReducer, applyMiddleware(reduxSaga));

//store.subscribe(() => console.log(store.getState()));

export default store;