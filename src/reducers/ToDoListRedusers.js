import { actionType } from '../actions/ToDoListActions';

export default function ToDoListReduser(oldState, action) {
    switch (action.type) {

        case actionType.CREATE_NEW_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks, action.task],
                filter: "all"
            };

        case actionType.DELETE_TASK:
            let newState = { ...oldState };
            newState.tasks = oldState.tasks.filter((t) => {
                return t.id !== action.taskId
            });
            return newState;

        // return {
        //     ...oldState,
        //     tasks: oldState.tasks.filter((t) => {
        //         t.id !== action.taskId
        //     })
        // }

        case actionType.CHECK_TASK:
            let newCheckState = { ...oldState };
            newCheckState.tasks = [...newCheckState.tasks];
            newCheckState.tasks.forEach((task, index) => {
                if (task.id === action.task.id) {
                    newCheckState.tasks[index] = {
                        ...task,
                        checked: action.task.checked
                    }
                }
            });
            return newCheckState;

        case actionType.CHANGE_FILTER:
            return {
                ...oldState,
                filter: action.value
            };

        case actionType.CLEAR_COMPLETED:
            return {
                ...oldState,
                tasks: oldState.tasks.filter((t) => !t.checked)
            };

        case actionType.ON_LOAD:
            return {
                ...oldState,
                tasks: action.tasks
            };

        // let newState = {...oldState};
        // newState.tasks = newState.tasks.filter((t) => !t.checked)
        // return newState;

        // case actionType.SAVE_TODOS: 
        //     console.log(action.tasks)
        //         const tasks = action.tasks;
        //         // const tasks = this.state;
        //         localStorage.setItem("storage", JSON.stringify(tasks));
        //     return oldState;


        default:
            // if (oldState) {
            //     return oldState;
            // }

            return {
                tasks: [],
                filter: "all"
            };
    }
}