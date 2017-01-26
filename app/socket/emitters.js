import {socket} from './listeners';
// import {browserHistory} from 'react-router';

export const addTodoEmit = (todo) => {
  let dataToSave = {
    value: todo,
    isDone: false
  }
  socket.emit('add-todo', dataToSave);
}

export default {
  addTodoEmit
}