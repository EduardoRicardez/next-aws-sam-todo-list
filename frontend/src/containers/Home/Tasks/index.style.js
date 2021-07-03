import styled from "styled-components";

const TasksContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 8px;
  background-color: rgb(0, 121, 191);
  height:100vh;
  padding:8px;
  align-items:flex-start;
`;

export default TasksContainer;
