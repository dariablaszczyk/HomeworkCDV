let sum = 0;
let num = [];

let input = prompt("Podaj liczby do policzenia średniej");
const arr = input.split(', ');
for (let i = 0; i < arr.length; i++) {
   if (Number(arr[i])) num.push(Number(arr[i]));
};

let len = num.length;
num.forEach(function (x) {
   sum += x;
});

let output = alert(`Srednia wynosi ${sum / len}`);

