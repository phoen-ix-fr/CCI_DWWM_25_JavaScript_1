// Exercice 1 - Nombre entre 1 et 10 : pair ou impair
let nbrUser = 0;

do {

	nbrUser = Number(prompt("Donnez-moi un nombre entre 1 et 10"));
}
while((nbrUser % 1 != 0)  
	|| isNaN(nbrUser)
	|| nbrUser > 10 || nbrUser < 1
);

if(nbrUser % 2 == 0) {
	console.log(`${nbrUser} est pair`);
}
else {		
	console.log(`${nbrUser} est impair`);
}

