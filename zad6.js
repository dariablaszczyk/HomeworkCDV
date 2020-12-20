let str = "ABRAKADABRA";
let arr = [...str];
console.log(...arr);

for (let i = 0; i < str.length; i++) {
   let a1 = arr;
   a1[i] = arr.splice(i, 0, " ");
   arr.pop();
   console.log(a1.join().replaceAll(",", " "));
};


