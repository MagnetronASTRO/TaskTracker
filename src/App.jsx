import React from "react";
import Navbar from "./pages/Navbar";
import TaskContextProvider from "./pages/TaskContext";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TodoList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
