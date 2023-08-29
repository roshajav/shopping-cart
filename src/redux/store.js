import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers"; // Importing combined reducers
import rootSaga from "./sagas"; // Importing  root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Apply middleware
const middleware = [sagaMiddleware];

// Create the Redux store with the combined reducers and applied middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

// Run your root saga
sagaMiddleware.run(rootSaga);

export default store;
