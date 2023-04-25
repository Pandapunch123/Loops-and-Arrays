//Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

let inputTest = "hello"; "ukelele"; "awesome"; "onomonopia"; "textbook";
let vowelCount = 0;
let constCount = 0;

//"a", "e", "i", "o", and "u" are considered vowels. 
const vowels = ["a", "e", "i", "o", "u"];

//Every other letter is considered a consonant.
for (let i = 0; i < inputTest.length; i++) {
  if (vowels.includes(inputTest[i])) {
    vowelCount += 1;
  } else {
    constCount++;
  }
}

console.log(
  `${inputTest} has ${constCount} consonants and ${vowelCount} vowels.`
);
