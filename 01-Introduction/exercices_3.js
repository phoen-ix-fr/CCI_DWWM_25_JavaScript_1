// Exercice 3 - Table de multiplication
let nbrUser = 0;

do {
	nbrUser = Number(prompt("Donnez-moi un nombre entre 1 et 10"));
}
while((nbrUser % 1 != 0)  
	|| isNaN(nbrUser)
	|| nbrUser > 10 || nbrUser < 1
);

for(let i = 1; i <= 10; i++) {
	console.log(`${nbrUser} x ${i} = ${nbrUser * i}`);
}