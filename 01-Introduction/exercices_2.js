// Exercice 2 - Nombre entier + somme

// On demande un nombre entier à l'utilisateur
let nbrUser = 0;
do {
	nbrUser = Number(prompt("Donnez-moi un nombre entier"));
}
while((nbrUser % 1 != 0) || isNaN(nbrUser));

let nbrSum = 0;
for(let i = 1; i <= nbrUser; i++) {
	nbrSum += i;
}

console.log(`Somme de 1 à ${nbrUser} = ${nbrSum}`);