function gameOfThrones(s) {
  // Initialize empty list/array
  let new_string = [];

  // loop through the original string
  // add the chars to the new list
  // only if the char does not exist
  // on the new list

  for (let i = 0; i < s.length; i++) {
    if (new_string.indexOf(s[i]) === -1) {
      new_string.push(s[i]);
    } else {
      new_string = new_string.filter((char) => char !== s[i]);
    }
  }
  // check the length of the new list
  // if length is zero and
  // original length is even or
  // if the length of new list is 1
  // original string length is odd
  //the given string is palindromic
  if (
    (new_string.length == 0 && s.length % 2 == 0) ||
    (new_string.length == 1 && s.length % 2 == 1)
  ) {
    return "YES";
  } else {
    return "NO";
  }
}
// driver code
console.log(gameOfThrones("aaabbbb"));
