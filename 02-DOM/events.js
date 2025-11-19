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

// On récupère le nombre de <li> déjà présents dans la liste + 1 pour le prochain ajout
let i = elItemList.getElementsByTagName('li').length + 1;

// Ajout d'un nouvel item dans la liste
elAddBtn.addEventListener('click', function(e) {
	
	const elNewItem = document.createElement('li');
	elNewItem.textContent = `Item #${i++}`;
	
	elItemList.append(elNewItem);
});

