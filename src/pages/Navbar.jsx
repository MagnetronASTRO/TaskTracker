import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { TodoContext } from "./TaskContext";
import PropTypes from "prop-types";
import { AddContainer } from "./StyledComp";

const Navbar = () => {
  const { tasks } = useContext(TodoContext);
  const [isOpen, toggleForm] = useState(false);
  const { dispatch } = useContext(TodoContext);
  const [title, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", task: { title, date } });
    setTask("");
    setDate("");
  };

  const handleOpen = () => {
    toggleForm(true);
  };

  const handleClose = () => {
    toggleForm(false);
  };
  return (
    <div className="navbar">
      <div className="navContent">
        <h1>Todo List</h1>
        <p>{tasks.length} task left...</p>
      </div>
      <div className="addbtnwrapper">
        <Button
          className="addbtn"
          onClick={handleOpen}
          style={{
            borderRadius: "70px",
            width: "70px",
            height: "70px",
          }}
        >
          <Add
            style={{
              fontSize: "30px",
            }}
          />
        </Button>
      </div>
      <AddContainer className="addform" isOpen={isOpen}>
        <div className="formwrapper">
          <form onSubmit={handleSubmit}>
            <h2>Add your task to list</h2>
            <input
              type="text"
              placeholder="Task name"
              value={title}
              onChange={(e) => setTask(e.target.value)}
              required
            />
            <input
              style={{ marginTop: "10px" }}
              type="text"
              placeholder="When/till when"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              onClick={handleClose}
              style={{
                marginTop: "30px",
                backgroundColor: "#30fedf",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              ADD
            </Button>
          </form>
        </div>
      </AddContainer>
    </div>
  );
};

Navbar.propTypes = {
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Navbar;
