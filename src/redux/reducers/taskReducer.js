import taskTypes from "../actions/taskActions";

const taskReducer = (state = [], action) => {
  let newTasks;

  switch (action.type) {
    case taskTypes.ADD_TASK_RESULT:
      newTasks = state.concat({ ...action.payload });
      return newTasks;

    case taskTypes.UPDATE_TASK_RESULT:
      newTasks = [...state];
      const index = newTasks.findIndex(task => task.id === action.payload.id);
      newTasks[index] = { ...action.payload };
      return newTasks;

    case taskTypes.REMOVE_TASK_RESULT:
      newTasks = state.filter(task => task.id !== action.payload.id);
      return newTasks;

    case taskTypes.RETRIEVE_TASKS_RESULT:
      return action.payload;

    default:
      return state;
  }
};

export default taskReducer;