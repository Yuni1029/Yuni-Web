//loop
//counting starts from 0 until it reaches 3 (loops 4 times)
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}

//loop in reverse
//counting starts from 3 until it reaches 0 (loops 4)
//if count-- becomes count++, the loop becomes infinite 
for (let count = 3; count >= 0; count--) {
    console.log(count);
}

//Exercise 1
for (let log = 5; log <= 10; log++) {
    console.log(log);
}

for (let ct = 100; ct >= 0; ct--) {
    console.log(ct);
}

//looping through arrays: length가 아닌 index로 생각하기
//.arrayindesoutofbond
const animals = ['cat', 'dog', 'hamster'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

//Exercise 2
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let letter = 0; letter < alphabets.length; letter++) {
    console.log(alphabets[letter]);
}

//Exercise 2: print only even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] % 2 === 0) //!!important!! 
    console.log(numbers[num]);
}

//Exercise 2: print only odd numbers 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] % 2 !== 0) //!!important!!
    console.log(numbers[num]);
}

//Exercise 2: print only number > 4
const nnumbers = [1, 5, -1, 4, 2, 9, 10]
for (let k = 0; k < nnumbers.length; k++) {
    if (nnumbers[k] > 4) {
    console.log(nnumbers[k]);
}
}

//Nested Loops 
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) { //outer loop
    for (let j = 0; j < yourArray.length; j++) { //inner loop
        if(myArray[1]) === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[1])
        }
    }
};

//two dimentional array: Matrix
const arr = [[1,2,3],[4,5,6],[7,8,9]]
for (let i = 0; i < arr.length; i++) { //access to the first bracket
    for (let j = 0; j < arr[0].length; j++) { //access to the index
        console.log(arr[i][j])
    }
}
//loops for 9 times

//Exercise 3: two dimentional array; divisable with 6
const lst = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
for (let n = 0; n < lst.length; n++) {
    for (let h = 0; h < lst[0].length; h++) {
        if(lst[n][h] % 6 === 0)
        console.log(lst[n][h]); 
    }
}

//Exercise 3
let bobsFollowers = ['Joe', 'Mario', 'Sam', 'Eric'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];
for (let i = 0; i <bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[1] === tinasFollowers[1]) { //practice question: why if (i===j) is incorrect
            mutualFollowers.push(bobsFollowers[i])
            //or mutualFollowers.push(tinasFollowers[j])
        }
    }
}

//A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
    console.log(counterOne);
}

//A while loop that prints 1, 2, 3
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}

//Exercise 4
const cards = ['diamond', 'spade', 'heart', 'club']
let currentCard; 
let 1 = 0;
while (currentCard !== 'spade') {
    currentCard = cards[1];
    console.log(currentCard)
    1 ++;
}

//Exercise 4
const characters = ['a','b','c','d','e','f','g']
for (let x = 0; x < characters.length; i++) {
    if (characters[1] === 'a' 
    || characters[1] === 'e'
    || characters[1] === 'i'
    || characters[1] === 'o'
    || characters[1] === 'u') {
        break;
    }

    console.log('characters.');
}

console.log()
