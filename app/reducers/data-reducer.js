import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_DATA:
      return {
        ...state,
        all: action.data
      };
    case types.ADD_TODO:
      console.log('attempting to add', action.newTodo);
      return {
        ...state,
        all: [
          action.newTodo,
          ...state.all
        ]
      };
    case types.EDIT_TODO:
      console.log('attempting to edit', action.newTodo);
      let j = state.all.findIndex(function(todo){
        return todo.id === action.newTodo.id
      })
      return {
        ...state,
        all: [
          ...state.all.slice(0, j),
          action.newTodo,
          ...state.all.slice(j+1)
        ]
      };
    case types.DELETE_TODO:
      console.log('attempting to delete', action.oldTodo);
      let i = state.all.findIndex(function(todo){
        return todo.id === action.oldTodo.id
      })
      return {
        ...state,
        all: [
          ...state.all.slice(0, i),
          ...state.all.slice(i+1)
        ]
      };
    default:
      return state;
  }
};
