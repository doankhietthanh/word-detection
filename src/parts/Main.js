import React from "react";
import styled from "styled-components";
import HighLight from "../components/HighLight";
import TextArea from "../components/TextArea";

const Container = styled.div`
  flex: 3;
  height: 100%;
  background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Main = () => {
  return (
    <Container>
      <TextArea />
      <HighLight />
    </Container>
  );
};

export default Main;
