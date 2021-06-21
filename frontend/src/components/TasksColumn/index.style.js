import styled from "styled-components";

const TasksColumnContainer = styled.div`
  width: 100%;
  background-color: #ebecf0;
  border-radius: 3px;
  padding: 10px 8px;

  header {
    font-weight: 700;
    padding-bottom: 8px;
  }

  footer {
    padding-top: 8px;
    button {
      width: 100%;
      text-align: left;
      padding: 4px 8px;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .add-task-container {
    textarea {
      overflow: hidden;
      overflow-wrap: break-word;
      resize: none;
      height: 72px;
      margin-bottom: 4px;
      max-height: 162px;
      min-height: 54px;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
      outline: 0;
      border: 0;
      width: 100%;
      padding: 8px;
    }
    &_actions {
      display: flex;
      justify-content: flex-start;
      button {
        width: auto;
      }
      button:first-child {
        background-color: #0079bf;
        color: #fff;
        font-weight: 400;
        margin-right: 4px;
      }
    }
  }
`;

export default TasksColumnContainer;
