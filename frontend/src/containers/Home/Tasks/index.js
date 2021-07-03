import { useEffect, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import TasksColumn from "../../../components/TasksColumn";
import TasksContainer from "./index.style";
import axios from "axios";

const Tasks = () => {
  const [columns, setColumns] = useState([
    { title: "To do", tasks: [] },
    { title: "Doing", tasks: [] },
    { title: "Done", tasks: [] },
  ]);

  const getDBTask = async () => {
    const { data } = await axios.get(
      "https://3filczyyad.execute-api.us-east-1.amazonaws.com/Prod/todo_items"
    );
    const columnsCopy = JSON.parse(JSON.stringify(columns));
    data.forEach((task) => {
      columnsCopy[task.columnIndex].tasks.push(task);
    });
    setColumns(columnsCopy);
  };

  const createDBTask = async ({ task }) => {
    const {
      data: { data },
    } = await axios.post(
      "https://3filczyyad.execute-api.us-east-1.amazonaws.com/Prod/todo_item",
      task
    );
    return data;
  };

  const updateDBTask = ({ task }) =>
    axios.put(
      `https://3filczyyad.execute-api.us-east-1.amazonaws.com/Prod/todo_item/${task.id}`,
      task
    );

  useEffect(() => {
    getDBTask();
  }, []);

  const handleCreateTask = async ({ title }, columnIndex) =>
    createDBTask({ task: { title, columnIndex } }).then((task) =>
      setColumns(
        Object.assign([], columns, {
          [columnIndex]: {
            ...columns[columnIndex],
            tasks: [...columns[columnIndex].tasks, task],
          },
        })
      )
    );

  const handleMoveTask = (
    dragColumnIndex,
    dragTaskIndex,
    hoverColumnIndex,
    hoverTaskIndex
  ) => {
    const list = JSON.parse(JSON.stringify(columns));
    const dragTask = list[dragColumnIndex].tasks[dragTaskIndex];
    if (hoverTaskIndex !== undefined) {
      list[hoverColumnIndex].tasks.splice(hoverTaskIndex, 0, dragTask);
    } else {
      list[hoverColumnIndex].tasks.push(dragTask);
    }
    list[dragColumnIndex].tasks.splice(dragTaskIndex, 1);
    setColumns(list);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TasksContainer>
        {columns.map((column, index) => (
          <TasksColumn
            key={column.title}
            tasks={column.tasks}
            title={column.title}
            columnIndex={index}
            onTaskCreated={(task) => handleCreateTask(task, index)}
            onTaskMove={handleMoveTask}
          ></TasksColumn>
        ))}
      </TasksContainer>
    </DndProvider>
  );
};

export default Tasks;
