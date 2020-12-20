let word = prompt("Podaj słowo");
let arr = word.split("");

let newArr = [...arr].reverse();

if (newArr.join() === arr.join()) {
   console.log("Słowo jest palindromem");
} else {
   console.log("Słowo nie jest palindromem");
};
