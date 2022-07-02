import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (donValue) => {
    return (
      tasks.filter(task => task.done === donValue)
      .map((task) => (
      <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ))
    );
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead className="table-primary">
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
};

export default TaskTable;
