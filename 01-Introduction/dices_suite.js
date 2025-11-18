// Récupérer la fonction sur le site MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
	
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// Suite pour permettre les relances et stocker les résultats
const arrResults = []; 	//< Tableau des résultats total des différents lancés
let nbrDices = 0;		//< Nombre dés lancés (entre 1 et 4)

// Récupérer le nombre de dés lancés par l'utilisateur
do {
	nbrDices = Number(prompt("Donnez-moi un nombre de dés entre 1 et 4"));
}
while((nbrDices % 1 != 0)  
	|| isNaN(nbrDices)
	|| nbrDices > 4 || nbrDices < 1
);

// On calcul la valeur à battre
const nbrMinValue = 1 * nbrDices;
const nbrMaxValue = 6 * nbrDices;

const nbrValueToWin = getRandomInt(nbrMinValue, nbrMaxValue);
console.log(`La valeur à battre est ${nbrValueToWin}`);

// On englobe dans un do-while pour gérer les relances
do {
	
	// On effectue ensuite les opérations pour les dés utilisateur
	let arrDicesValues = [];
	let nbrUserValue = 0;
	for(let i = 0; i < nbrDices; i++) {
		
		// Valeur aléatoire d'un dé
		let intDiceValue = getRandomInt(1, 6);
		
		// Je stocke la valeur dans le tableau des dés + je l'additionne au total
		nbrUserValue += intDiceValue;
		arrDicesValues.push(intDiceValue);
	}
	
	arrResults.push(nbrUserValue);

	console.log(`La valeur du lancé est ${nbrUserValue} : ${arrDicesValues.join(', ')}`);

	if(nbrUserValue > nbrValueToWin) {
		console.log("L'utilisateur a gagné");
	}
	else {
		console.log("L'utilisateur a perdu");	
	}
	
} // On demande à l'utilisateur s'il veut relancer
while(window.confirm("Voulez-vous relancer ?"));

console.log(`Valeur des différents lancés : ${arrResults.join(', ')}`);