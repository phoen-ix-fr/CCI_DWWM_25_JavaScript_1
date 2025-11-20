const elSquareDiv = 
	document.getElementById('square');
	
const elDangerZnDiv =
	document.getElementById('danger-zone');
	
const intIncrementPx = 50;
	
let x = 0;
let y = 0;

let blInDangerZone = false;

const intMaxX = window.innerWidth 
	- elSquareDiv.offsetWidth;
	
const intMaxY = window.innerHeight
	- elSquareDiv.offsetHeight;
	
const intMinX = 0;
const intMinY = 0;

// Zone de danger
const dangerZoneX 		= 100;
const dangerZoneY 		= 50;
const dangerZoneWidth 	= 500;
const dangerZoneHeight 	= 100;

elDangerZnDiv.style.left 	= `${dangerZoneX}px`;
elDangerZnDiv.style.top 	= `${dangerZoneY}px`;
elDangerZnDiv.style.width 	= `${dangerZoneWidth}px`;
elDangerZnDiv.style.height 	= `${dangerZoneHeight}px`;

document.addEventListener('keydown', e => {	

	switch(e.key) {
		case 'ArrowUp':
			y -= intIncrementPx;
			break;
		case 'ArrowDown':
			y += intIncrementPx;
			break;
		case 'ArrowLeft':
			x -= intIncrementPx;
			break;
		case 'ArrowRight':
			x += intIncrementPx;
			break;
	}
	
	y = Math.max(intMinY, y);
	y = Math.min(intMaxY, y);
	
	x = Math.max(intMinX, x);
	x = Math.min(intMaxX, x);
	
	console.log(`${x};${y}`);
	
	if(x >= dangerZoneX && y >= dangerZoneY
		&& x < (dangerZoneX + dangerZoneWidth)
		&& y < (dangerZoneY + dangerZoneHeight)
	){
		if(!blInDangerZone) { 
			elSquareDiv.style.backgroundColor = 'red';
			blInDangerZone = true;
		}		
	}
	else {
		
		if(blInDangerZone) { 
			elSquareDiv.style.backgroundColor = 'blue';
			blInDangerZone = false;
		}
	}
	
	elSquareDiv.style.left = `${x}px`;
	elSquareDiv.style.top  = `${y}px`;
});