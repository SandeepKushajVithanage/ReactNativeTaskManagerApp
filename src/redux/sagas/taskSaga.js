import { take, takeEvery, put } from 'redux-saga/effects'

import taskTypes from '../actions/taskActions';
import { getTasks, addTask, updateTask, removeTask } from '../../api/taskAPIs';
import { retrieveTasksResult, addTaskResult, removeTaskResult, updateTaskResult } from '../actions/taskActions';

export function* watchTaskSaga() {
   yield takeEvery(taskTypes.RETRIEVE_TASKS, getTasksSaga);
   yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
   yield takeEvery(taskTypes.UPDATE_TASK, updateTaskSaga);
   yield takeEvery(taskTypes.REMOVE_TASK, removeTaskSaga);
}

function* getTasksSaga() {
    const { data } = yield getTasks();
    yield put(retrieveTasksResult(data));
}

function* addTaskSaga({ payload }) {
    const { data } = yield addTask(payload);
    yield put(addTaskResult(data));
}

function* removeTaskSaga({ payload }) {
    yield removeTask(payload.id);
    yield put(removeTaskResult(payload.id));
}

function* updateTaskSaga({ payload }) {
    const { data } = yield updateTask(payload);
    yield put(updateTaskResult(data));
}