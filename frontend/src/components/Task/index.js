import TaskContainer from "./index.style";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

const Task = ({ title, columnIndex, taskIndex, onTaskMove }) => {
  const taskRef = useRef();

  const [_, drag] = useDrag({
    type: "BOX",

    item: { title, columnIndex, taskIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      const dragColumnIndex = item.columnIndex;
      const dragTaskIndex = item.taskIndex;
      const hoverColumnIndex = columnIndex;
      const hoverTaskIndex = taskIndex;

      onTaskMove(
        dragColumnIndex,
        dragTaskIndex,
        hoverColumnIndex,
        hoverTaskIndex
      );
    },
  });

  drag(drop(taskRef));

  return (
    <TaskContainer ref={taskRef}>
      <span>{title}</span>
    </TaskContainer>
  );
};

export default Task;
