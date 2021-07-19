import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

const ContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default ContextProvider;
