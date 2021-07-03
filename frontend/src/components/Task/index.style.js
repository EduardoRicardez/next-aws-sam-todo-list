import styled from "styled-components";

const TaskContainer = styled.div`
    height: auto;
    margin-bottom: 4px;
    min-height: 54px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    border: 0;
    width: 100%;
    padding: 8px;
    cursor:pointer;
    span{
       word-wrap: break-word;
    }
`;

export default TaskContainer;
