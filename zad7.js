let num = Number(prompt("Podaj liczbę:"));

for (let i = 0; i < num; i++) {
   let line = Array(2 * num).fill("*");
   console.log(...line);
}
