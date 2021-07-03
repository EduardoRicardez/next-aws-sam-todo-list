import styled from "styled-components";

const Cindy = () => {
  return (
    <Container>
      <div className="paper profile"></div>
      <div className="paper">
        <header>PROFILE</header>
        <div className="paper__content"></div>
      </div>
      <div className="paper"></div>
      <div className="paper"></div>
      <div className="paper"></div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(200px, auto));
  grid-template-areas: "profile profile . ." "profile profile . .";
  gap: 16px;
  padding: 32px;

  .paper {
    background-color: #f7f7f7;
    border-radius: 8px;
    overflow: hidden;
    padding: 8px;

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .profile {
    grid-area: profile;
  }

  .box {
    height: 50px;
    width: 100%;
    background-color: red;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px;
  }
`;

export default Cindy;
