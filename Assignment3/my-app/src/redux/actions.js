import { ADD_TODO, DELETE_TODO, EDIT_TODO, MOVE_TODO } from "./actionTypes";

export function addTask(id) {
  return { type: ADD_TODO, id };
}

export function moveTask(fromListId, toListId, id) {
  return { type: MOVE_TODO, fromListId, toListId, id };
}

export function editTask(id, value) {
  return { type: EDIT_TODO, id, value };
}

export function deleteTask(listId, id) {
  return { type: DELETE_TODO, listId, id };
}
