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
      var index = state.all.findIndex(function(todo){
        return todo.id === action.newTodo.id
      })
      return {
        ...state,
        all: [
          action.newTodo,
          ...state.all.slice(0, index),
          ...state.all.slice(index+1)
        ]
      };
    default:
      return state;
  }
};
