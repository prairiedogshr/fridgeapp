import axios from 'axios'
import { ADD_TASK, COMPLETE_TASK, UNDO_COMPLETE_TASK } from '../actionTypes'

export const addTask = (taskText) => {
  console.log('ACTION - adding Task: ', taskText);
    // const state = getState()
  return (dispatch) => {
    return axios.post('/api/tasks', taskText)
    .then((data) => {
      console.log(data);
      return dispatch({
        type: ADD_TASK,
        payload: taskText,
      });
    });
  };
};

export const completeTask = (task) => {
  console.log(`ACTION - completing task: ${task.task_id}`);
  return (dispatch) => {
    return axios.put(`/api/tasks/${task.task_id}`, { id: task.task_id, key: 'task_is_done', value: 1 })
    .then((data) => {
      console.log("THE DATA", task);
      return dispatch({
        type: COMPLETE_TASK,
        payload: task,
      });
    });
  };
};

export const undoCompleteTask = (task) => {
  console.log(`ACTION - UNDO task: ${task.task_id}`);
  return (dispatch) => {
    return axios.put(`/api/tasks/${task.task_id}`, { id: task.task_id, key: 'task_is_done', value: 0 })
    .then((data) => {
      console.log("THE DATA", task);
      return dispatch({
        type: UNDO_COMPLETE_TASK,
        payload: task,
      });
    });
  };
};
