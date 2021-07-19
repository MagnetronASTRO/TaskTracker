import { v4 } from "uuid";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          title: action.task.title,
          date: action.task.date,
          id: v4(),
        },
      ];
    // case "EDIT_TASK":
    //   return state.filter((task) => task.id === action.id);
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
