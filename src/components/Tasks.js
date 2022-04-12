import { Grid, Paper, Typography, Button } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import React, { Component } from "react";
import Header from "./Header";
import AddTask from "./Addtask";
class Tasks extends Component {
  state = {
    open: false,
    tasks: [
      {
        title: "task1",
        day: "Friday",
        completed: false,
      },
      {
        title: "task2",
        day: "Friday",
        completed: true,
      },
      {
        title: "task3",
        day: "Friday",
        completed: false,
      },
    ],
  };
  handleDelete = (index) => {
    let { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState(tasks);
  };
  handleDoubleClick = (index) => {
    let { tasks } = this.state;
    tasks[index]["completed"] = !tasks[index]["completed"];
    this.setState(tasks);
  };
  handleForm = () => {
    this.setState({ open: true });
  };
  handleSubmit = (data) => {
    let { tasks } = this.state;

    tasks.push(data);
    this.setState(tasks);

    this.setState({ open: false });
  };
  render() {
    return (
      <>
        <Grid container direction="column" className="container">
          <Grid item>
            <Header title="Task Tracker" />
            <Button onClick={this.handleForm} className="btn">
              Add
            </Button>

            {this.state.open ? <AddTask onSubmit={this.handleSubmit} /> : ""}
          </Grid>
          <Grid item className="task">
            {this.state.tasks.map((task, index) => (
              <Paper
                className={`task  ${task.completed && "reminder"}`}
                key={index}
                onClick={() => this.handleDoubleClick(index)}
              >
                <Typography>
                  {task.title}
                  <FaTimes
                    style={{
                      color: "red",
                      marginLeft: "75%",
                      cursor: "pointer",
                    }}
                    onClick={() => this.handleDelete(index)}
                  />
                </Typography>
                <Typography>{task.day}</Typography>
                <Typography>{task.completed.toString()}</Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Tasks;
