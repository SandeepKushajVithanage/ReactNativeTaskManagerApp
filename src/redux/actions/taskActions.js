const taskTypes = {
    RETRIEVE_TASKS: 'RETRIEVE_TASKS',
    RETRIEVE_TASKS_RESULT: 'RETRIEVE_TASKS_RESULT',
    ADD_TASK: 'ADD_TASK',
    ADD_TASK_RESULT: 'ADD_TASK_RESULT',
    UPDATE_TASK: 'UPDATE_TASK',
    UPDATE_TASK_RESULT: 'UPDATE_TASK_RESULT',
    REMOVE_TASK: 'REMOVE_TASK',
    REMOVE_TASK_RESULT: 'REMOVE_TASK_RESULT',
};

export const addTask = (payload) => ({ type: taskTypes.ADD_TASK, payload });

export const addTaskResult = (payload) => ({ type: taskTypes.ADD_TASK_RESULT, payload });

export const updateTask = (id, task) => ({ type: taskTypes.UPDATE_TASK, payload: { id, task }});

export const updateTaskResult = (payload) => ({ type: taskTypes.UPDATE_TASK_RESULT, payload });

export const removeTask = (id) => ({ type: taskTypes.REMOVE_TASK, payload: { id }});

export const removeTaskResult = (id) => ({ type: taskTypes.REMOVE_TASK_RESULT, payload: { id }});

export const retrieveTasks = () => ({ type: taskTypes.RETRIEVE_TASKS });

export const retrieveTasksResult = (payload) => ({ type: taskTypes.RETRIEVE_TASKS_RESULT, payload });

export default taskTypes;