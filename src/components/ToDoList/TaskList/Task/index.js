import React, { Component } from 'react';
import './index.css';

class Task extends Component {

  constructor(props) {
    super(props);

    this.handleDelete = props.onDelete;
    this.handleCheck = props.onCheck;
  }

  onDelete(e) {
    this.handleDelete(this.props.task.id);
  }

  onCheck(e) {
    let task = { ...this.props.task };

    task.checked = !task.checked;

    this.handleCheck(task);
  }

  render() {

    return (
      <div>

        <div className={this.props.task.checked ? "checked" : "task"} onClick={this.onCheck.bind(this)}>
          {this.props.task.title}
        </div>

        <span className="delete" onClick={this.onDelete.bind(this)}>x</span> <hr />

      </div>
    );
  }
}

export default Task;
