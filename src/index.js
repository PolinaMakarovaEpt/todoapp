import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <ToDoList />
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();
