function palindrome(str) {
  let regex = /[^A-Za-z0-9]/g;   //all non-alphanumeric characters will be remove
  let newStr = str.replace(regex, "").toLowerCase(); // removing all non-alphanumeric characters
  let word = "";
  for(let i = newStr.length-1; i >= 0; i--) { // looping word from backward to get reversed word
    word += newStr[i];
  }
  return word === newStr ? true : false; // if the original word it same with reversed than it is palindrome
}

console.log(palindrome("A man, a plan, a canal. Panama"));