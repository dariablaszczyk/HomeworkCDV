let word1 = prompt("Wpisz słowo");
let word2 = prompt("Wpisz drugie słowo");

let arr1 = word1.split("");
let arr2 = word2.split("");

let newArr1 = [...arr1].reverse();

if (newArr1.join() === arr2.join()) {
   console.log("Dwa podane słowa są anagramami");
} else {
   console.log("Podane słowa nie są anagramami");
};
