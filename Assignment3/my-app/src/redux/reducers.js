import { ADD_TODO, DELETE_TODO, EDIT_TODO, MOVE_TODO } from "./actionTypes";
import _ from "lodash";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

function lists(state, action) {
  if (state === undefined) {
    return {
      backlog: { id: "backlog", title: "Backlog", tasks: [] },
      inProgress: { id: "inProgress", title: "In Progress", tasks: [] },
      evaluation: { id: "evaluation", title: "Evaluation", tasks: [] },
      done: { id: "done", title: "Done", tasks: [] },
    };
  }

  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        backlog: {
          ...state.backlog,
          tasks: state.backlog.tasks.concat(action.id),
        },
      };
    }
    case MOVE_TODO: {
      const from = state[action.fromListId];
      const to = state[action.toListId];
      return {
        ...state,
        [from.id]: { ...from, tasks: _.without(from.tasks, action.id) },
        [to.id]: { ...to, tasks: to.tasks.concat(action.id) },
      };
    }
    case DELETE_TODO: {
      const list = state[action.listId];
      return {
        ...state,
        [list.id]: { ...list, tasks: _.without(list.tasks, action.id) },
      };
    }
    default:
      return state;
  }
}

function tasks(state, action) {
  if (state === undefined) {
    return {
      1: { id: 1, title: "Task 1" },
      2: { id: 2, title: "Task 2" },
      3: { id: 3, title: "Task 3" },
      4: { id: 4, title: "Task 4" },
    };
  }

  let task;

  switch (action.type) {
    case ADD_TODO:
      task = { id: action.id, title: "New Task" };
      return {
        ...state,
        [action.id]: task,
      };
    case EDIT_TODO:
      task = state[action.id];
      return {
        ...state,
        [action.id]: { ...task, title: action.value },
      };
    case DELETE_TODO:
      return _.omit(state, action.id);
    default:
      return state;
  }
}

const enhancer = applyMiddleware(thunk);
export const store = createStore(lists, enhancer);

export default combineReducers({ lists, tasks });
