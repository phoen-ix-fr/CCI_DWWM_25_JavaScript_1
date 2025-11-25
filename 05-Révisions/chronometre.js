/* Javascript ICI */
let intTimerId = null; 		//< On déclare l'identifiant de l'interval
let intHoursCount 	 = 0;	//< Compteur des heures
let intMinutesCount  = 0;	//< Compteur des minutes
let intSecondsCount  = 0;	//< Compteur des secondes

const elHoursDisplay   = document.getElementById('hours');
const elMinutesDisplay = document.getElementById('minutes');
const elSecondsDisplay = document.getElementById('seconds');

const elStartButton	   = document.getElementById('startBtn');
const elStopButton	   = document.getElementById('stopBtn');
const elResumeButton   = document.getElementById('resumeBtn');
const elResetButton    = document.getElementById('resetBtn');

// Etat initial des boutons
elStartButton.disabled 	= false;
elStopButton.disabled 	= true;
elResumeButton.disabled = true;
elResetButton.disabled 	= true;


function updateDisplay() {
	elHoursDisplay.textContent   = String(intHoursCount).padStart(2, '0'); // On affiche avec deux digits, avec des 0 au début
	elMinutesDisplay.textContent = String(intMinutesCount).padStart(2, '0'); // On affiche avec deux digits, avec des 0 au début
	elSecondsDisplay.textContent = String(intSecondsCount).padStart(2, '0'); // On affiche avec deux digits, avec des 0 au début
}

function incrementTime() {
	intSecondsCount++; //< On incrément les secondes
	
	if(intSecondsCount === 60) {
		intSecondsCount = 0;
		intMinutesCount++;
	}
	
	if(intMinutesCount === 60) {
		intMinutesCount = 0;
		intHoursCount++;
	}
	
	updateDisplay();
}

function startTimer() {
	
	// Si aucun interval n'est déjà en cours
	if(intTimerId === null) {
		
		intTimerId = setInterval(incrementTime, 1);
		
		elStartButton.disabled 	= true;
		elStopButton.disabled 	= false;
		elResumeButton.disabled = true;
		elResetButton.disabled 	= true;
	}
}

function resumeTimer() {
	
	startTimer();
}

function resetTimer() {
		
	clearInterval(intTimerId);
	intTimerId = null;
	
	intSecondsCount = 0;
	intMinutesCount = 0;
	intHoursCount = 0;
	
	updateDisplay();
	
	elStartButton.disabled 	= false;
	elStopButton.disabled 	= true;
	elResumeButton.disabled = true;
	elResetButton.disabled 	= true;
}

function stopTimer() {
	
	if(intTimerId !== null) {
		
		clearInterval(intTimerId);
		intTimerId = null;
		
		elStartButton.disabled 	= true;
		elStopButton.disabled 	= true;
		elResumeButton.disabled = false;
		elResetButton.disabled 	= false;
	}
}

elStartButton.addEventListener('click', startTimer);

elStopButton.addEventListener('click', stopTimer);

elResumeButton.addEventListener('click', resumeTimer);

elResetButton.addEventListener('click', resetTimer);

