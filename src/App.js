import { useEffect, useState } from "react";
import styled from "styled-components";
import Action from "./parts/Action";
import Main from "./parts/Main";
import wordDetection from "./utils/wordDetection";

const sample = `Paste your text by pressing Ctrl+V or ⌘+V. (Once you click here, these instructions will be cleared for your convenience ;)

The slider on the top right can be used to adjust the minimum length of words to detect. The default setting is 4, so words like 'and', 'for', 'the', etc. won't pollute the analysis. The duplicate words can be found below the slider highlighted by various colors. The list is sorted by the number of occurrence starting with the highest. The highlighting for any individual word can be turned off by clicking on the word in the list.

You can edit your text here, duplicates are detected real time. When you're finished editing, you can copy or clear the result using the corresponding buttons. You can also turn off the spell checker if you don't need it.

~~~

I often find myself sending emails and messages consisting of two or three sentences. This is where I usually commit an unintentional word repetition, but only realize it after hitting send. This tool comes handy for such cases, and you're free to use it for your benefit as well! :)`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const getHue = (index, total) => {
  return 360 - (360 / total) * index;
};

const getHSL = (index, total) => {
  const hue = getHue(index, total);
  return `hsl(${hue + 20}, 100%, ${180 < hue && hue < 360 ? 80 : 50}%)`;
};
function App() {
  const [minCharacter, setMinCharacter] = useState(1);
  const [words, setWords] = useState([]);
  const [text, setText] = useState(sample);
  const [color, setColor] = useState({});

  useEffect(() => {
    const _color = {};
    for (let i = 0; i < words.length; i++) {
      _color[words[i][0]] = getHSL(i, words.length);
    }

    setColor(_color);
  }, [words]);

  useEffect(() => {
    const _words = wordDetection(text, minCharacter);
    let object2Array = Object.entries(_words);
    object2Array = object2Array.filter((item) => {
      return item[1].length !== 1;
    });
    object2Array.sort((a, b) => {
      return b[1].length - a[1].length;
    });

    setWords(object2Array);
  }, [minCharacter, text]);
  return (
    <Container>
      <Main text={text} setText={setText} words={words} color={color} />
      <Action
        color={color}
        words={words}
        minCharacter={minCharacter}
        setMinCharacter={setMinCharacter}
      />
    </Container>
  );
}

export default App;
