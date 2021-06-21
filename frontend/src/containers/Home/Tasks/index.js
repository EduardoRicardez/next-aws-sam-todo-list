import { useEffect, useState } from "react";
import TasksColumn from "../../../components/TasksColumn";
import TasksContainer from "./index.style";

const taskColumns = ["To do", "Doing", "Done"];

const Tasks = () => {
  const [tasks, setTasks] = useState([[], [], []]);
  const handleCreateTask = ({ title }, index) => {
    const newTask = { title };
    setTasks(Object.assign([], tasks, { [index]: [...tasks[index], newTask] }));
  };
  useEffect(() => {
    console.log(tasks);
  });
  return (
    <TasksContainer>
      {taskColumns.map((title, index) => (
        <TasksColumn
          key={title}
          tasks={tasks[index]}
          title={title}
          onTaskCreated={(task) => handleCreateTask(task, index)}
        ></TasksColumn>
      ))}
    </TasksContainer>
  );
};

export default Tasks;
