import { useState } from "react";
import Task from "../Task";
import TasksColumnContainer from "./index.style";
import { Field, Form, Formik } from "formik";

const initialValues = { title: "" };

const TasksColumn = ({ title, tasks = [], onTaskCreated = () => {} }) => {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  const toggleFooterView = () => setIsAddingNewTask(!isAddingNewTask);

  const handleAddTask = (values) => {
    toggleFooterView();
    onTaskCreated(values, title);
  };

  const handleTitleEnterKeyDown = (e, submitForm) => {
    if ((e.charCode || e.keyCode) === 13) {
      e.preventDefault();
      submitForm();
    }
  };

  return (
    <TasksColumnContainer>
      <header>
        <span>{title}</span>
      </header>
      <div className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
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
