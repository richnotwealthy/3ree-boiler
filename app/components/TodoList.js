import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Col } from 'react-flexbox-grid/lib/index';
import Todo from './Todo';
import TodoInput from './TodoInput';
import emitters from '../socket/emitters';

class TodoList extends Component {
  handleAdd(todo) {
    emitters.addTodoEmit(todo);
  }

  render() {
    const {todos} = this.props;

    return (
      <Col md={12}>
        <TodoInput addTodo={this.handleAdd} />
        {todos.map((todo, i) => {
          return (
            <Todo key={i} label={todo.value} isDone={todo.isDone} />
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