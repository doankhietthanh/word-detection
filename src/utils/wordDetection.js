const wordDetection = (phrase) => {
  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/\n|[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/]|[0-9]/g, " ");

  let phrase_array = phrase.split(" ");

  phrase_array = phrase_array.filter((item) => {
    return item !== "" && item !== " ";
  });
  phrase_array = phrase_array.map((item) => {
    if (item.charAt(0) == "'" && item.charAt(item.length - 1) == "'")
      item = item.replace(/'/g, "");
    return item;
  });
  const object_word = {};
  phrase_array.forEach((i) => {
    if (object_word[i] == undefined) object_word[i] = 1;
    else object_word[i]++;
  });
  return object_word;
};

export default wordDetection;
