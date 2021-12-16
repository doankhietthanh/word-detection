import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 2;
  height: 100%;
`;

const Cover = styled.div`
  margin: 100px 50px;
`;

const SliderCover = styled.div``;

const ListCover = styled.div``;

const List = styled.div`
  height: 400px;
  overflow: auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
`;

const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  border-right: 5px solid ${(props) => props.primary};
`;

const Total = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  border-radius: 50%;

  line-height: 0;
  user-select: none;
`;

const Word = styled.div`
  background-color: ${(props) => props.primary};
  padding: 4px 10px;
  border-radius: 3px;
  color: white;

  font-size: 16px;
`;

const Action = ({ minCharacter, setMinCharacter, words, color }) => {
  return (
    <Container>
      <Cover>
        <SliderCover>
          <Slider
            min={1}
            max={10}
            value={minCharacter}
            onChange={setMinCharacter}
          />
        </SliderCover>
        <ListCover>
          <List>
            {words.map((item, index) => {
              const _color = color[item[0]];
              return (
                <Item key={item[0]}>
                  <Total primary={_color}>{item[1].length}</Total>
                  <ArrowLeft primary={_color}></ArrowLeft>
                  <Word primary={_color}>{item[0]}</Word>
                </Item>
              );
            })}
          </List>
        </ListCover>
      </Cover>
    </Container>
  );
};

export default Action;
