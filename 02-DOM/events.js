// Afficher dynamiquement la taille de l'écran :
const elWidthSpan = document.getElementById('target-width');

const elHeightSpan = document.getElementById('target-height');

// Donner un nom à la fonction permettra de pouvoir l'appeler au moins une fois, en dehors de l'évènement
function handleWindowResize() {

	elWidthSpan.textContent = window.innerWidth;
	elHeightSpan.textContent = window.innerHeight;
}

// On attache l'évènement à la fonction
// L'évènement est attaché à window car on surveille si le navigateur est redimentionné
window.addEventListener('resize', handleWindowResize);

// Appel de la fonction pour que les valeurs s'affichent après l'actualisation de la page, même s'il n'y a pas eu de redimensionnement
handleWindowResize();


// Gestion de la liste
const elItemList = document.getElementById('list');
const elAddBtn 	 = document.getElementById('btn-add');
const elDelBtn 	 = document.getElementById('btn-del');

// On récupère le nombre de <li> déjà présents dans la liste + 1 pour le prochain ajout
let i = elItemList.getElementsByTagName('li').length;

// Ajout d'un nouvel item dans la liste
elAddBtn.addEventListener('click', function(e) {
	
	const elNewItem = document.createElement('li');
	elNewItem.textContent = `Item #${++i}`;
	
	elItemList.append(elNewItem);
});

// Suppression du dernier item dans la liste
elDelBtn.addEventListener('click', function(e) {
	
	// Test si la liste comporte au moins 1 élément à supprimer
	// càd, si i est >= 1
	if(i < 1) {
		
		alert("Liste vide");
		return; //< Sortie de la fonction, en cas d'erreur
	}
	
	const elItemToDelete = 
		elItemList.getElementsByTagName('li')[i - 1];
	
	elItemToDelete.remove();
	
	i--;
});


// Incrémentations
let j = 3;
console.log(j);		// => 3
console.log(j++);	// => 3, puis incrémentation (4)
console.log(++j);	// => incrémentation, renvoi 5