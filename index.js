function isPalindrome(word) {
  // Write your algorithm here
  const originalArray = word.split("");
  let newArray = [];

  for(i = originalArray.length - 1; i >= 0; i--){
    newArray.push(originalArray[i]);
  }

  return (newArray.join("") === word);
}

/* 
  Add your pseudocode here
  
  split string into array
  iterate through array backward
  to create new array
  is new array = first array?
  apparently since theyre objects theyre reference has to be equal
  so convert back to a string and check that
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("aaaaaabbbbbbbbaaaaaa"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
