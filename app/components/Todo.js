import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.editTodo(this.props.id, e.target.checked);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    const {label, isDone} = this.props;

    return (
      <div>
        {label}
        <input
          type="checkbox"
          checked={isDone}
          onChange={this.handleChange}
          style={{margin: 20}}
        />
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Todo;