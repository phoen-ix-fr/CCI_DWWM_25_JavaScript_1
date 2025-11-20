const elSquareDiv = 
	document.getElementById('square');
	
const intIncrementPx = 50;
	
let x = 0;
let y = 0;

const intMaxX = window.innerWidth 
	- elSquareDiv.offsetWidth;
	
const intMaxY = window.innerHeight
	- elSquareDiv.offsetHeight;
	
const intMinX = 0;
const intMinY = 0;

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
	
	elSquareDiv.style.left = `${x}px`;
	elSquareDiv.style.top  = `${y}px`;
});