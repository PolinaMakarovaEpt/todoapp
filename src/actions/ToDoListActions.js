export const actionType = {
    CREATE_NEW_TASK: "CREATE_NEW_TASK",
    DELETE_TASK: "DELETE_TASK",
    CHECK_TASK: "CHECK_TASK",
    CHANGE_FILTER: "CHANGE_FILTER",
    CLEAR_COMPLETED: "CLEAR_COMPLETED",
    SAVE_TODOS: "SAVE_TODOS",
    ON_LOAD: "ON_LOAD"
}

export const createNewTask = (task) => {
    return {
        type: actionType.CREATE_NEW_TASK,
        task: task
    }
}

export const deleteTask = (taskId) => {
    return {
        type: actionType.DELETE_TASK,
        taskId: taskId
    }
}

export const checkTask = (task) => {
    return {
        type: actionType.CHECK_TASK,
        task: task
    }
}

export const clearCompleted = () => {
    return {
        type: actionType.CLEAR_COMPLETED
    }
};

export const changeFilter = (filterValue) => {
    return {
        type: actionType.CHANGE_FILTER,
        value: filterValue
    }
};

export const onLoad = (tasks) => {
    return {
        type: actionType.ON_LOAD,
        tasks: tasks
    }
}

// export const saveTodos = (tasks) => {
//     return {
//         type: actionType.SAVE_TODOS,
//         tasks: tasks
//     }
// };




// export const changeFilterActoin = {
//     type: actionType.CHANGE_FILTER
// };

// export const createNewTaskAction = {
//     type: actionType.CREATE_NEW_TASK,
//     id: Date.now(),
//     title: "",
//     checked: true
// };