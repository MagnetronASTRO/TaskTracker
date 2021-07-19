import React, { useContext } from "react";
import { TodoContext } from "./TaskContext";
import { ButtonGroup, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const TaskDetails = ({ task }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <div className="taskcontainer">
      <Button
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px 10px 20px",
        }}
      >
        <div>
          <div className="title">{task.title}</div>
          <div className="date">{task.date}</div>
        </div>
        {/* <Button onClick={() => dispatch({ type: "EDIT_TASK", id: task.id })}>
            <EditIcon />
          </Button> */}
        <Button
          onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}
          style={{
            borderRadius: "70px",
            width: "70px",
            height: "70px",
            fontSize: "40px",
          }}
        >
          <DeleteIcon
            style={{
              fontSize: "30px",
              color: "#ff1744",
            }}
          />
        </Button>
      </Button>
    </div>
  );
};

export default TaskDetails;
