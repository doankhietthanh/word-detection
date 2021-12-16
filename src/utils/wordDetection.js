const wordDetection = (text, minLength) => {
  const regex = new RegExp(
    `([\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}\\p{Connector_Punctuation}\\p{Join_Control}]+){${minLength},}`,
    "gu"
  );
  let result;
  const words = {};
  while ((result = regex.exec(text))) {
    const word = result[0].toLowerCase();
    if (!words[word]) {
      words[word] = [];
    }
    words[word].push(result.index);
  }
  return words;
};

export default wordDetection;
