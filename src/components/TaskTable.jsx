import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({tasks, toggleTask}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow
            key={task.name}
            task={task}
            toggleTask={toggleTask}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
