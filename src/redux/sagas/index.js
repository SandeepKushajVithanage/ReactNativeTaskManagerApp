import * as taskSaga from './taskSaga';

export function initSagas(sagaMiddleware) {
    Object.values(taskSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}