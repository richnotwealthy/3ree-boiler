import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.addTodo(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input type="text" onChange={this.handleChange}/>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoInput;