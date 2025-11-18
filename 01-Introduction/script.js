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


// Chercher l'avant dernière occurence d'un caractère dans une chaine de caractères
const strInputString 		= "Bonjour"
const chrCharacter 			= 'o';

// Récupère l'index de la première occurence
let firstIndex 	= strInputString.indexOf(chrCharacter);

// Je cherche à partir de la première occurence + 1
let secondIndex = strInputString.indexOf(chrCharacter, firstIndex + 1);

// Récupère l'index de la dernière occurence
let lastIndex	= strInputString.indexOf(chrCharacter);


let arrIndexes = [];

// Boucle FOR sans aucune méthode des Arrays
for(let i = 0; i < strInputString.length; i++) {
	console.log(strInputString[i]);
	
	if(strInputString[i] === chrCharacter) {
		arrIndexes.push(i);
	}
}

console.log(arrIndexes[arrIndexes.length - 1]);