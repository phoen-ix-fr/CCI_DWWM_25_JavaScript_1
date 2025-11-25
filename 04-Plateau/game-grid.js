const GRID_SIZE_WIDTH 	= 8;
const GRID_SIZE_HEIGHT 	= 8;
const TILE_SIZE 		= 40;

const PLAYER_CLASS 		= "archer";

const ENEMIES_NUMBER	= 2;			//< Nombre d'ennemis à créer sur mon plateau
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
const elEnemyDiv = document.createElement('div');
elEnemyDiv.classList.add('enemy');
elEnemyDiv.style.backgroundImage = `url("assets/enemy_${ENEMIES_CLASS}.png")`;
elTokenLayer.append(elEnemyDiv);

const posEnemy = {
	x: getRandomIntBetween(0, GRID_SIZE_WIDTH - 1),
	y: getRandomIntBetween(0, GRID_SIZE_HEIGHT - 1)
};

// Rendu graphique de l'ennemi
const intRealEnemyX = posEnemy.x * (TILE_SIZE + 2);
const intRealEnemyY = posEnemy.y * (TILE_SIZE + 2);

elEnemyDiv.style.left = `${intRealEnemyX}px`;
elEnemyDiv.style.top  = `${intRealEnemyY}px`;


// Gestion du mouvement du joueur
document.addEventListener('keydown', (e) => {
	
	// Logique pure de calcul du mouvement
	switch(e.key) {
		case 'ArrowUp':
			if(posPlayer.y > 0) posPlayer.y--;			
			break;
			
		case 'ArrowDown':
			if(posPlayer.y < GRID_SIZE_HEIGHT - 1) posPlayer.y++;	
			break;
			
		case 'ArrowLeft':
			if(posPlayer.x > 0) posPlayer.x--;	
			break;
			
		case 'ArrowRight':
			if(posPlayer.x < GRID_SIZE_WIDTH - 1) posPlayer.x++;
			break;
	}
	
	// Rendu graphique
	const intRealX = posPlayer.x * (TILE_SIZE + 2);
	const intRealY = posPlayer.y * (TILE_SIZE + 2);
	
	elPlayer.style.left = `${intRealX}px`;
	elPlayer.style.top 	= `${intRealY}px`;
	
});