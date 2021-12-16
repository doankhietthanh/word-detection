import React from "react";
import styled from "styled-components";

const Container = styled.textarea`
  width: 80%;
  height: 80%;

  z-index: 111;
  outline: none;

  background-color: #00000000;

  font-size: 18px;

  padding: 10px;
`;

const TextArea = ({ text, setText }) => {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return <Container onChange={handleOnChange} value={text}></Container>;
};

export default TextArea;
