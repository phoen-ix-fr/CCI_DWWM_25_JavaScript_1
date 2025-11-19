const elForm = document.getElementById('exo4');

const elInput = document.getElementById('exo4-value');

const elDisplaySpan = document.getElementById('exo4-value-display');

const elTargetDiv = document.getElementById('target');

let i = 0; //< Compteur du nombre d'itérations

elForm.addEventListener('submit', function(e) {
	
	// Empêche l'envoi du formulaire au serveur
	e.preventDefault();
	
	const intIterationsNbr = elInput.value;
	
	const intIntervalId = setInterval(() => {
		
		i++; //< Incrémente le compteur
		
		const elNewPar = document.createElement('p');
		elNewPar.textContent = `Hello World - ${i}`;
		
		elTargetDiv.append(elNewPar);
		
		if(i >= intIterationsNbr) {
			clearInterval(intIntervalId);
		}
		
	}, 1000);
});

elInput.addEventListener('change', function(e) {
	
	elDisplaySpan.textContent = e.target.valueAsNumber;
});

const elChronoP = document.getElementById('chrono');

let iCounter = 0;

const intervalId = setInterval(() => {
	
	iCounter += 3;
	
	elChronoP.textContent = iCounter;
	
	// if(iCounter % 3 == 0) { console.log(iCounter); }
	
}, 3000); //< Optimal, car s'exécute toutes les 3 secondes