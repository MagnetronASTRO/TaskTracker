import React, { useContext } from "react";
import TodoDetails from "./TodoDetails";
import { TodoContext } from "./TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TodoContext);
  return tasks.length ? (
    <div className="task-list">
      {tasks.map((task) => {
        return <TodoDetails task={task} key={task.id} />;
      })}
    </div>
  ) : (
    <div className="empty">Nothing to do. Hello free time :).</div>
  );
};

export default TaskList;
