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
const chrCharacter 			= 'u';

// Récupère l'index de la première occurence
let firstIndex 	= strInputString.indexOf(chrCharacter);

// Je cherche à partir de la première occurence + 1
let secondIndex = strInputString.indexOf(chrCharacter, firstIndex + 1);

// Récupère l'index de la dernière occurence
let lastIndex	= strInputString.lastIndexOf(chrCharacter);

// On cherche à partir de la fin, avant la dernière occurence, l'occurence précédente
let penultimateIndex = strInputString.lastIndexOf(chrCharacter, lastIndex - 1);


// Boucle FOR sans aucune méthode des Arrays

let arrIndexes = []; //< Tableau qui va stocker tous les index de mon caractère dans la chaine

for(let i = 0; i < strInputString.length; i++) {
	
	if(strInputString[i] == chrCharacter) {
		arrIndexes.push(i);
	}
}

if(arrIndexes.length > 0) {
	
	if(arrIndexes.length >= 2) {
		
		console.log(`Avant dernière occurence: ${arrIndexes[arrIndexes.length - 2]}`);
	}
	else {
		console.log(`Avant dernière occurence: ${arrIndexes[0]}`);
	}
}
else {
	console.log('Aucune occurence trouvée');
}