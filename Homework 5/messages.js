let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];

//8
let lastThree = secretMessage.slice(21,26);
//9
console.log(lastThree[2]);

//2
let lastRemoved = secretMessage.pop();
//3
console.log(lastRemoved.length);

//4
secretMessage.push('to','Program');
console.log(secretMessage);

//5
secretMessage[7] = 'right';
console.log(secretMessage);

//6
let firstRemoved = secretMessage.shift();
console.log(firstRemoved);

//7
let newLength = secretMessage.unshift('Programming','or','Coding');
console.log(newLength);

//10
const update = (secretMessage.length);
if (update > 2) {
    secretMessage[secretMessage.length-1] = 'right';
} else {
    secretMessage.pop();
}

console.log(secretMessage);


