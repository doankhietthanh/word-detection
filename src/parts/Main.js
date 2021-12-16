import React from "react";
import styled from "styled-components";
import HighLight from "../components/HighLight";
import TextArea from "../components/TextArea";

const Container = styled.div`
  flex: 4;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Main = ({ text, setText, words, color }) => {
  return (
    <Container>
      <TextArea text={text} setText={setText}></TextArea>
      <HighLight text={text} words={words} color={color} />
    </Container>
  );
};

export default Main;
