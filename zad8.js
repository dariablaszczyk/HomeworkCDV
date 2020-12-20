let num = Number(prompt("Ile rzedow ma miec choineczka?"));

for (i = 1; i <= num; i++) {
   let tree = "";
   tree = "";
   for (j = i; j < num; j++) {
      tree += " ";
   }
   for (k = 0; k < (i * 2) - 1; k++) {
      tree += "*";
   }
   console.log(tree);
};