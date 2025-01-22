let str = "JavaScript";
console.log(str.charAt(4)); // S

console.log("Hello World".includes("World")); // true

const sentence = "Hello world! How are you?";
const words = sentence.split(' ');
console.log(words);// ["Hello", "world!", "How", "are", "you?"]

// const words = ["Hello", "world!", "How", "are", "you?"];
// const sentence = words.join(' ');
// console.log(sentence);// "Hello world! How are you?"

const text = "Hello World";
console.log(text.toLowerCase());// "hello world"
console.log(text.toUpperCase());// "HELLO WORLD"
console.log(text.trim());// "Hello World"

console.log(parseInt("123")); // 123

let num = 3.14159;
console.log(num.toFixed(2)); // 3.14

console.log(Math.random()); // 0.123456789 (난수)