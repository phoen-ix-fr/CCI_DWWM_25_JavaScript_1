const GRID_SIZE_WIDTH 	= 8;	// Nombre de cellules en largeur
const GRID_SIZE_HEIGHT 	= 8;	// Nombre de cellules en hauteur
const TILE_SIZE 		= 40;	// Taille d'une cellule en pixels

const PLAYER_CLASS 		= "archer";

const ENEMIES_NUMBER	= 4;			//< Nombre d'ennemis à créer sur mon plateau
const ENEMIES_CLASS		= "skeleton";

// Layers du plateau de jeu - grid + jetons
const elGridContainer 	= document.getElementById('grid-layer');
const elTokenLayer 		= document.getElementById('token-layer');

// Element DIV du joueur
const elPlayer 			= document.createElement('div');
let posPlayer 			= { x: 0, y: 0 };

// Tableau des positions des ennemis
let arrPosEnemies 		= [];

/**
	Retourne un nombre aléatoire compris entre les bornes
	@see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	
	@param Number min Valeur minimale du nombre aléatoire demandé
	@param Number max Valeur maximale du nombre aléatoire demandé
	
	@return Number Nombre alétoire généré
*/
function getRandomIntBetween(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

/**
	Retourne un objet { x, y } correspondant à des coordonnées disponibles
	sur le plateau de jeu.
	On vérifiera cette disponibilité à l'aide des variables correspondantes
	aux positions des ennemis et du joueur
	
	@return {x, y} Position (coordonnées) disponible sur le plateau
*/
function getRandomAvailablePosition() {
	
	// Nombre de cases déjà utilisées : nbre d'ennemis + 1 joueur
	const intTokenNbr = arrPosEnemies.length + 1;
	
	// Nombre total de cases du plateau
	const intTokenMax = GRID_SIZE_WIDTH * GRID_SIZE_HEIGHT;
	
	if(intTokenNbr >= intTokenMax) {
		return; // Sort de la fonction et renvoi "rien" (NULL)
	}
	
	let pos; //< Position qui sera générée aléatoirement
	
	do {
		
		// Génération de nouvelles coordonées aléatoires
		pos = {
			x: getRandomIntBetween(0, GRID_SIZE_WIDTH),
			y: getRandomIntBetween(0, GRID_SIZE_HEIGHT)
		};
	
	} while(!isCellAvailable(pos.x, pos.y)); // Si la cellule est disponible OK, sinon on boucle
	
	return pos;
}

/**
	Vérifie si les coordonnées sont disponibles
	
	@param Number x Coordonées en abs à tester
	@param Number y Coordonées en ord à tester
	
	@return Boolean Si la cellule est disponible ou non
*/
function isCellAvailable(x, y) {
	
	// Vérifie si l'une des coordonées des ennemis est la coordonée à tester
	const blCellIsEnemy = isCellEnemy(x, y);
	
	// Vérifie si la coordonée du joueur est la coordonnée à tester
	const blCellIsPlayer = posPlayer.x === x && posPlayer.y === y;
	
	// Si la coordonnée à tester n'est pas la case du joueur OU un ennemi
	return !(blCellIsPlayer || blCellIsEnemy);
}

/**
	Vérifie les coordonnées correspondent à un ennemi sur le plateau
	
	@param Number x Coordonées en abs à tester
	@param Number y Coordonées en ord à tester
	
	@return Boolean Si la cellule est un ennemi
*/
function isCellEnemy(x, y) {
	
	const blCellIsEnemy = arrPosEnemies.some(pos => {
		return pos.x === x && pos.y === y;
	});
	
	return blCellIsEnemy;
}

// Création des cases du plateau de jeu
for (let y = 0; y < GRID_SIZE_HEIGHT; y++) {
    for (let x = 0; x < GRID_SIZE_WIDTH; x++) {

        const elCellDiv = document.createElement("div");  
		
		elCellDiv.className = "cell";		
        elGridContainer.appendChild(elCellDiv);
    }
}

// Création du joueur
elPlayer.classList.add('player');
elPlayer.style.backgroundImage = `url("assets/player_${PLAYER_CLASS}.png")`;
elTokenLayer.append(elPlayer);

// Création des ennemis
for(let i = 0; i < ENEMIES_NUMBER; i++) {

	// Création d'un ennemi
	const elEnemyDiv = document.createElement('div');
	elEnemyDiv.classList.add('enemy');
	elEnemyDiv.style.backgroundImage = `url("assets/enemy_${ENEMIES_CLASS}.png")`;
	elTokenLayer.append(elEnemyDiv);

	const posEnemy = getRandomAvailablePosition();

	// Rendu graphique de l'ennemi
	const intRealEnemyX = posEnemy.x * (TILE_SIZE + 2);
	const intRealEnemyY = posEnemy.y * (TILE_SIZE + 2);

	elEnemyDiv.style.left = `${intRealEnemyX}px`;
	elEnemyDiv.style.top  = `${intRealEnemyY}px`;
	
	arrPosEnemies.push(posEnemy); //< On garde en mémoire les coordonées de l'ennemi
}

console.log(arrPosEnemies, posPlayer);

// Gestion du mouvement du joueur
document.addEventListener('keydown', (e) => {
	
	// Créer une position provisoire pour les calculs
	let posPlayerNext = { x: posPlayer.x, y: posPlayer.y };
	
	// Logique pure de calcul du mouvement
	switch(e.key) {
		case 'ArrowUp':
			if(posPlayerNext.y > 0) posPlayerNext.y--;			
			break;
			
		case 'ArrowDown':
			if(posPlayerNext.y < GRID_SIZE_HEIGHT - 1) posPlayerNext.y++;	
			break;
			
		case 'ArrowLeft':
			if(posPlayerNext.x > 0) posPlayerNext.x--;	
			break;
			
		case 'ArrowRight':
			if(posPlayerNext.x < GRID_SIZE_WIDTH - 1) posPlayerNext.x++;
			break;
	}
	
	// Si la prochaine position est un ennemi, alors combat
	if(isCellEnemy(posPlayerNext.x, posPlayerNext.y)) {
		
		elPlayer.classList.add('in-battle');
	}
	else {
		
		elPlayer.classList.remove('in-battle');
		
		// Sinon, on dit que la position du joueur est sa position suivante
		posPlayer.x = posPlayerNext.x;
		posPlayer.y = posPlayerNext.y;
	
		// Rendu graphique
		const intRealX = posPlayer.x * (TILE_SIZE + 2);
		const intRealY = posPlayer.y * (TILE_SIZE + 2);
		
		elPlayer.style.left = `${intRealX}px`;
		elPlayer.style.top 	= `${intRealY}px`;
	}
});