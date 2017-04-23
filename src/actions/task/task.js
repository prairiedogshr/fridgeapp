import axios from 'axios'
import {ADD_TASK, COMPLETE_TASK, UNDO_COMPLETE_TASK} from '../actionTypes'

export const addTask = (taskText) => {
  return (dispatch) => {
    return axios.post('/api/tasks', taskText)
      .then((data) => {
        return dispatch({
          type: ADD_TASK,
          payload: {
            task_id: data.data.task_id,
            house_in_task: taskText.house_in_task,
            task_name: taskText.task_name
          }
        });
      });
  };
};

export const completeTask = (task) => {
  return (dispatch) => {
    return axios.put(`/api/tasks/${task.task_id}`, {
      id: task.task_id,
      key: 'task_is_done',
      value: 1
    })
      .then((data) => {
        return dispatch({
          type: COMPLETE_TASK,
          payload: task,
        });
      });
  };
};

export const undoCompleteTask = (task) => {
  return (dispatch) => {
    return axios.put(`/api/tasks/${task.task_id}`, {
      id: task.task_id,
      key: 'task_is_done',
      value: 0
    })
      .then((data) => {
        return dispatch({
          type: UNDO_COMPLETE_TASK,
          payload: task,
        });
      });
  };
};
