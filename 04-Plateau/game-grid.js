const GRID_SIZE_WIDTH 	= 8;
const GRID_SIZE_HEIGHT 	= 8;
const TILE_SIZE 		= 40;

const PLAYER_CLASS 		= "archer";

const elGridContainer 	= document.getElementById('grid-layer');
const elTokenLayer 		= document.getElementById('token-layer');

// Création des cases du plateau de jeu
for (let y = 0; y < GRID_SIZE_HEIGHT; y++) {
    for (let x = 0; x < GRID_SIZE_WIDTH; x++) {

        const elCellDiv = document.createElement("div");   
		elCellDiv.className = "cell";		
        elGridContainer.appendChild(elCellDiv);
    }
}

// Création du joueur
const elPlayer = document.createElement('div');
elPlayer.classList.add('player');
elPlayer.style.backgroundImage = `url("assets/player_${PLAYER_CLASS}.png")`;

elTokenLayer.append(elPlayer);

// Gestion du mouvement du joueur
// TODO