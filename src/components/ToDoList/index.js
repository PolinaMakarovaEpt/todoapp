import React, { Component } from 'react';
import { createStore } from 'redux';
import './index.css';
import AddTask from '../NewTaskCreater/index';
import TasksList from '../TaskList/index';
import Footer from '../Footer/index';
import ToDoListReduser from '../../reducers/ToDoListRedusers';
import { createNewTask, deleteTask, checkTask, clearCompleted, changeFilter, onLoad } from '../../actions/ToDoListActions';

class ToDoList extends Component {

  constructor() {
    super();

    this.store = createStore(ToDoListReduser);
    let state = this.store.getState();

    this.state = state;

    this.store.subscribe(() => {
      let state = this.store.getState();
      this.setState(state);
    });
  }

  createNewTask(task) {
    this.store.dispatch(createNewTask(task));
  }

  handleClick(task) {
    this.store.dispatch(createNewTask(task));
  }

  deleteTask(taskId) {
    const ifDelete = window.confirm('Удалить дело?')

    if (ifDelete) {
      this.store.dispatch(deleteTask(taskId))
    }
  }

  checkTask(task) {
    this.store.dispatch(checkTask(task))
  }

  changeFilter(filterValue) {
    this.store.dispatch(changeFilter(filterValue));
  }

  clearCompleted() {
    const ifClear = window.confirm('Удалить все завершенные дела?')

    if (ifClear) {
      this.store.dispatch(clearCompleted());
    }
  }

  componentDidUpdate() {
    localStorage.setItem("storage", JSON.stringify(this.state.tasks));

  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("storage"));
    const tasks = (data && [...data]) || [];
    this.store.dispatch(onLoad(tasks));
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
