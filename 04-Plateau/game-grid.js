const GRID_SIZE_WIDTH 	= 8;
const GRID_SIZE_HEIGHT 	= 8;
const TILE_SIZE 		= 40;

const PLAYER_CLASS 		= "archer";

// Layers du plateau de jeu - grid + jetons
const elGridContainer 	= document.getElementById('grid-layer');
const elTokenLayer 		= document.getElementById('token-layer');

// Div du joueur
const elPlayer 			= document.createElement('div');

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

let posPlayer = { x: 0, y: 0 };

// Gestion du mouvement du joueur
document.addEventListener('keydown', (e) => {
	
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
	
	const intRealX = posPlayer.x * (TILE_SIZE + 2);
	const intRealY = posPlayer.y * (TILE_SIZE + 2);
	
	elPlayer.style.left = `${intRealX}px`;
	elPlayer.style.top = `${intRealY}px`;
	
});