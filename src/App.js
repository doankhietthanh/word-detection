import styled from "styled-components";
import Action from "./parts/Action";
import Main from "./parts/Main";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Main />
      <Action />
    </Container>
  );
}

export default App;
