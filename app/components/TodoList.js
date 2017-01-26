import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-flexbox-grid/lib/index';
import Todo from './Todo';
import TodoInput from './TodoInput';
import emitters from '../socket/emitters';

class TodoList extends Component {
  handleAdd(todo) {
    emitters.addTodoEmit(todo);
  }

  handleEdit(id, status) {
    emitters.editTodoEmit(id, status);
  }

  handleDelete(id) {
    emitters.deleteTodoEmit(id);
  }

  render() {
    const {todos} = this.props;

    return (
      <Col md={12}>
        <TodoInput addTodo={this.handleAdd} />
        {todos.map((todo) => {
          return (
            <Todo key={todo.id}
              id={todo.id}
              label={todo.value}
              isDone={todo.isDone}
              deleteTodo={this.handleDelete}
              editTodo={this.handleEdit}
              />
          );
        })}
      </Col>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

function mapStateToProps(state, props) {
  return {
    todos: state.data.all || [],
  };
}

export default connect(mapStateToProps)(TodoList);