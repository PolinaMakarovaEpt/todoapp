import React, { Component } from 'react';
import './index.css';
import AddTask from './NewTaskCreater/index';
import TasksList from './TaskList/index';
import Footer from './Footer/index';

class ToDoList extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
      filter: "all"
    }
  }

  createNewTask(task) {

    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  handleClick(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(taskId) {
    const ifDelete = window.confirm('Удалить задачу?')

    if (ifDelete) {
      const newTasksList = this.state.tasks.filter((t) => {
        return t.id !== taskId;
      });

      this.setState({
        tasks: newTasksList
      });
    }
  }

  checkTask(task) {
    const newTasksList = [...this.state.tasks]

    newTasksList.forEach((t) => {
      if (t.id === task.id) {
        t.checked = task.checked;
        return;
      }
    });

    this.setState({
      tasks: newTasksList
    });
  }

  changeFilter(filterValue) {
    this.setState({
      filter: filterValue
    });
  }

  clearCompleted() {
    const ifClear = window.confirm('Удалить все завершенные дела?')

    if (ifClear) {
      this.setState({
        tasks: this.state.tasks.filter((t) => !t.checked)
      });
    }
  }

  saveTodos = () => {
    const tasks = this.state.tasks;
    localStorage.setItem("storage", JSON.stringify(tasks));
  }

  componentDidUpdate() {
    this.saveTodos();
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("storage"));
    const tasks = (data && [...data]) || [];
    this.setState({ tasks });
  }

  render() {

    let filteredTasks = [];

    if (this.state.filter === 'all') filteredTasks = this.state.tasks;
    if (this.state.filter === 'active') filteredTasks = this.state.tasks.filter((t) => !t.checked);
    if (this.state.filter === 'completed') filteredTasks = this.state.tasks.filter((t) => t.checked);

    return (
      <div className="todolist">
        <h3>{this.state.tasks.filter((t) => !t.checked).length === 0 ? "Все дела завершены! Добавьте новое" : "Добавить новое дело"}</h3>
        <AddTask
          onCreate={this.createNewTask.bind(this)}
          onClick={this.handleClick.bind(this)} />

        <TasksList
          tasks={filteredTasks}
          onDelete={this.deleteTask.bind(this)}
          onCheck={this.checkTask.bind(this)} />

        <Footer
          tasks={this.state.tasks}
          filter={this.state.filter}
          onFilterChanged={this.changeFilter.bind(this)}
          onClearCompleted={this.clearCompleted.bind(this)}
        />
      </div>
    );
  }
}

export default ToDoList;
