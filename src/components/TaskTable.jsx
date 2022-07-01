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
    <table>
      <thead>
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
