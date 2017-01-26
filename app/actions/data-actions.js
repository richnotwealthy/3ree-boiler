import * as types from './action-types';

export const loadAllData = (data) => {
  return {
    type: types.LOAD_ALL_DATA,
    data
  };
}

export const addTodo = (newTodo) => {
  return {
    type: types.ADD_TODO,
    newTodo
  };
}

export const editTodo = (newTodo) => {
  return {
    type: types.EDIT_TODO,
    newTodo
  };
}

export const deleteTodo = (oldTodo) => {
  return {
    type: types.DELETE_TODO,
    oldTodo
  };
}

export default {
  loadAllData,
  addTodo,
  editTodo,
  deleteTodo
}
