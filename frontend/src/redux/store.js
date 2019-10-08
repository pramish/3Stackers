import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middlewares = [Thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
