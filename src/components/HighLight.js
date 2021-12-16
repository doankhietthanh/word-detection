import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #00000000;
  width: 80%;
  height: 80%;

  position: absolute;
  margin: 0;
  padding: 0;

  white-space: pre-wrap;

  overflow-y: auto;

  font-size: 18px;
  padding: 10px;
`;

const Mark = styled.mark`
  background-color: ${(props) => props.primary};
  padding: 0;
`;

const HighLight = ({ words, text, color }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [];
    let count = -1;
    let pre_count = -1;
    let data_temp = "";
    [...text].forEach((item, index) => {
      pre_count = count;
      for (let i = 0; i < words.length; i++) {
        if (words[i][1].includes(index)) {
          count = words[i][0].length - 1;
          break;
        }
      }

      if (pre_count === -1 && count !== -1) {
        data.push({ mark: false, data: data_temp });
        data_temp = "";
      }

      data_temp += text[index];
      if (count !== -1) count--;

      if (pre_count === 0 && count === -1) {
        data.push({ mark: true, data: data_temp });
        data_temp = "";
      }
    });

    setData(data);
  }, [words]);
  return (
    <Container>
      {data.map((item, index) => {
        if (item.mark) {
          console.log(color);
          console.log(item.data);
          const _color = color[item.data.toLowerCase()];
          return (
            <Mark key={index} primary={_color}>
              {item.data}
            </Mark>
          );
        }
        return <span key={index}>{item.data}</span>;
      })}
    </Container>
  );
};

export default HighLight;
