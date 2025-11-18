console.log("Hello World!");

// prompt = récupère une information utilisateur
// Number = permet de faire une conversion des données saisies (par défaut, en chaine de caractère)
// let intNumber = Number(prompt("Donne-moi un nombre"));
// console.log(intNumber * 2);

// Carré de nombres
const arrNumbers = [5, 12, 6, 10, 8, 6];
console.log(arrNumbers);

// Avec une boucle FOR
let arrSquaresWithFor = [];
for(let i = 0; i < arrNumbers.length; i++) {
	arrSquaresWithFor[i] = arrNumbers[i] * arrNumbers[i];
}

console.log(arrSquaresWithFor);

// Avec la méthode MAP
let arrSquaresWithMap = arrNumbers.map(n => n * n);

console.log(arrSquaresWithMap);

let strHello = "Bonjour le monde";
let strTest	 = "";
strHello.foreach((s) => {
	strTest += s + s;
});