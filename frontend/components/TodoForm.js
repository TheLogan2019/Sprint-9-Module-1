import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleSubmit = () => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  };

  handleChange = () => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input onChange={thishandleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
