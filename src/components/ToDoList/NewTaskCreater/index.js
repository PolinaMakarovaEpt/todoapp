import React, { Component } from 'react';
import './index.css';

class AddTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  onCreate(e) {

    if (e.key === 'Enter') {
      if (this.state.input !== '') {

        const newTask = {
          title: this.state.input,
          checked: false,
          id: Date.now()
        };

        this.props.onCreate(newTask);
        this.setState({
          input: ''
        });
      }
    }
  }

  handleChange(e) {

    this.setState({
      input: e.target.value
    });
  }

  handleClick(e) {

    e.preventDefault();

    if (this.state.input !== '') {

      const newTask = {
        title: this.state.input,
        checked: false,
        id: Date.now()
      }

      this.props.onClick(newTask);
      this.setState({
        input: ''
      });
    }
  }

  render() {

    return (
      <div className="add-task">

        <input
          value={this.state.input}
          autoFocus placeholder="Введите дело"
          onKeyPress={this.onCreate.bind(this)}
          onChange={this.handleChange.bind(this)} />

        <button id="add" onClick={this.handleClick.bind(this)}>Добавить</button>

      </div>
    );
  }
}

export default AddTask;
