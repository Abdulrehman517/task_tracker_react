import React, { Component } from "react";
class AddTask extends Component {
  state = {
    title: "",
    day: "",
    completed: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      title: this.state.title,
      day: this.state.day,
      completed: this.state.completed,
    });
  };
  render() {
    let { title, day, completed } = this.state;
    return (
      <>
        <div className="form-control">
          <form className="add-form" onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label>Task</label>
              <input
                type="text"
                placeholder="Add Task"
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label>Day </label>
              <input
                type="text"
                placeholder="Add Day "
                value={day}
                onChange={(e) => this.setState({ day: e.target.value })}
              />
            </div>
            <div className="form-control form-control-check">
              <label>Set Reminder</label>
              <input
                type="checkbox"
                checked={completed}
                value={completed}
                onChange={(e) =>
                  this.setState({ completed: e.currentTarget.checked })
                }
              />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
          </form>
        </div>
      </>
    );
  }
}

export default AddTask;
