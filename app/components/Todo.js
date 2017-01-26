import React, {Component} from 'react';

class Todo extends Component {
  render() {
    const {label, isDone, deleteTodo} = this.props;

    return (
      <div>
        {label}
        <input
          type="checkbox"
          checked={isDone}
          onChange={deleteTodo}
        />
      <button>Delete</button>
      </div>
    );
  }
}

export default Todo;