let year = Number(prompt("Podaj rok"));
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
   alert("Rok przestępny");
} else {
   alert("Rok nieprzestępny");
};