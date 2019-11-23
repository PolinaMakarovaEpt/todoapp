import React from 'react';
import Task from './Task/index';

function TasksList(props) {

  return (
    <div className="tasks">
      {props.tasks.map((task) => {
        return <Task task={task}
          onDelete={props.onDelete}
          onCheck={props.onCheck}
          key={task.id} />
      })
      }
    </div>
  );
}

export default TasksList;
