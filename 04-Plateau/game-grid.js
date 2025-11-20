const GRID_SIZE_WIDTH = 8;
const GRID_SIZE_HEIGHT = 8;
const TILE_SIZE = 40;

const elGridContainer = document.getElementById('grid-layer');

// Création des cases du plateau de jeu
for (let y = 0; y < GRID_SIZE_HEIGHT; y++) {
    for (let x = 0; x < GRID_SIZE_WIDTH; x++) {

        const elCellDiv = document.createElement("div");   
		elCellDiv.className = "cell";		
        elGridContainer.appendChild(elCellDiv);
    }
}
