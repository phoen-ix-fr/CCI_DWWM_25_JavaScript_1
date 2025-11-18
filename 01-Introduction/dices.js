// Demander 1 nombre entre 1 et 4

// Récupérer la fonction sur le site MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
	
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

let nbrDices = 0;

do {
	nbrDices = Number(prompt("Donnez-moi un nombre de dés entre 1 et 4"));
}
while((nbrDices % 1 != 0)  
	|| isNaN(nbrDices)
	|| nbrDices > 4 || nbrDices < 1
);

// Calculer la valeur du lancé des dés
// Solution 1 - Calculer le max total (par rapport au nombre de dés) et le min total : 1 dé => entre 1 et 6, 2 dés => 2 et 12... n dés => 1*n et 6*n
/*
const nbrMinValue = 1 * nbrDices;
const nbrMaxValue = 6 * nbrDices;

// Total des dés lancés par l'utilisateur
const nbrUserValue = getRandomInt(nbrMinValue, nbrMaxValue);

// La valeur à battre
const nbrValueToWin = getRandomInt(nbrMinValue, nbrMaxValue);

console.log(`La valeur à battre est ${nbrValueToWin}`);

console.log(`La valeur du lancé est ${nbrUserValue}`);

if(nbrUserValue > nbrValueToWin) {
	console.log("L'utilisateur a gagné");
}
else {
	console.log("L'utilisateur a perdu");	
}
*/

// Solution 2 - Calcul des valeurs pour chaque dés
const nbrMinValue = 1 * nbrDices;
const nbrMaxValue = 6 * nbrDices;

// Génère les valeurs des différents dés de l'utilisateur
let arrDicesValues = [];
let nbrUserValue = 0;
for(let i = 0; i < nbrDices; i++) {
	
	// Valeur aléatoire d'un dé
	let intDiceValue = getRandomInt(1, 6);
	
	// Je stocke la valeur dans le tableau des dés + je l'additionne au total
	nbrUserValue += intDiceValue;
	arrDicesValues.push(intDiceValue);
}

// La valeur à battre
const nbrValueToWin = getRandomInt(nbrMinValue, nbrMaxValue);

console.log(`La valeur à battre est ${nbrValueToWin}`);

console.log(`La valeur du lancé est ${nbrUserValue} : ${arrDicesValues.join(', ')}`);

if(nbrUserValue > nbrValueToWin) {
	console.log("L'utilisateur a gagné");
}
else {
	console.log("L'utilisateur a perdu");	
}
