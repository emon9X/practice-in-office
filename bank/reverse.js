function reverseString(text) {
  let splitString = text.split(' ');
  let nullString = [];
  for (let i = splitString.length - 1; i >= 0; i--) {
    if (splitString[i] !== '') {
      nullString.push(splitString[i]);
    }
  }
  console.log(nullString);
  return nullString.join(" ");
}

const theText = '  hello,  how    are              you  ';
console.log(reverseString(theText));
