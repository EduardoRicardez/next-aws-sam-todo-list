import { useState } from "react";
import Task from "../Task";
import TasksColumnContainer from "./index.style";
import { Field, Form, Formik } from "formik";
import { useDrop } from "react-dnd";

const initialValues = { title: "" };

const TasksColumn = ({
  title,
  tasks = [],
  onTaskCreated = () => {},
  onTaskMove = () => {},
  columnIndex,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        const dragColumnIndex = item.columnIndex;
        const dragTaskIndex = item.taskIndex;
        const hoverColumnIndex = columnIndex;

        onTaskMove(dragColumnIndex, dragTaskIndex, hoverColumnIndex);
      }
    },
  });

  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  const toggleFooterView = () => setIsAddingNewTask(!isAddingNewTask);

  const handleAddTask = async (values) => {
    await onTaskCreated(values, title);
    toggleFooterView();
  };

  const handleTitleEnterKeyDown = (e, submitForm) => {
    if ((e.charCode || e.keyCode) === 13) {
      e.preventDefault();
      submitForm();
    }
  };

  return (
    <TasksColumnContainer ref={drop}>
      <header>
        <span>{title}</span>
      </header>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            {...task}
            columnIndex={columnIndex}
            taskIndex={index}
            onTaskMove={onTaskMove}
          />
        ))}
      </div>
      <footer>
        {!isAddingNewTask && (
          <button onClick={toggleFooterView}>Add one task</button>
        )}
        {isAddingNewTask && (
          <div className="add-task-container">
            <Formik initialValues={initialValues} onSubmit={handleAddTask}>
              {({ submitForm }) => (
                <Form>
                  <Field
                    name="title"
                    as="textarea"
                    placeholder="Write a title for this task..."
                    onKeyDown={(e) => handleTitleEnterKeyDown(e, submitForm)}
                    autoFocus={true}
                  />

                  <div className="add-task-container_actions">
                    <button type="submit">Add task</button>
                    <button type="button" onClick={toggleFooterView}>
                      X
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </footer>
    </TasksColumnContainer>
  );
};

export default TasksColumn;
