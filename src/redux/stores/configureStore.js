import { combineReducers, createStore, applyMiddleware } from "redux";
import taskReducer from "../reducers/taskReducer";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
    const combinedReducers = combineReducers({
        tasks: taskReducer,
    });
    
    const store = createStore(combinedReducers, 
        composeWithDevTools(applyMiddleware(...middlewares)));

    // const store = createStore(combinedReducers);

    initSagas(sagaMiddleware);

    return store;
}

export default configureStore;
