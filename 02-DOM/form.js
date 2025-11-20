const arrQuestions = [
	"Quel est le nom de votre personnage ?",
	"Quelle est sa caractéristique principale entre la force, l’intelligence, la change et l’agilité ?",
	"Quel est son arme ou on outil favori parmi l’épée, la hache, l’arc, le bâton et les cailloux ?",
	"Quel est sa devise ou son objectif de vie ?",
	"Dans quel environnement est -il le plus à l’aise : la forêt, le désert, les montagnes ou les grottes ?"
];

/**
	Affiche la question de l'index donné dans le label
	
	@param Number index Index du tableau des questions
	
	@return Retourne vrai si la question suivante est affichée, retourne faux s'il n'y a plus de question
*/
function showQuestion(index) {
	
	if(index < arrQuestions.length) {
		elQuestionLabel.textContent = 
			`(${index + 1}) - ${arrQuestions[index]}`;
			
		return true;
	}
	else {
		
		return false;
	}
}

let arrAnswers = [];
let i = 0;

const elQuestionLabel = 
	document.querySelector("#character-builder label");
	
// elQuestionLabel.textContent = arrQuestions[i];
showQuestion(0);
	
const elForm = document.getElementById('character-builder');

const elSummaryDiv = document.getElementById('summary');

elForm.addEventListener('submit', (e) => {
	
	e.preventDefault(); //< Empêche l'action par défaut d'envoi des données au serveur
	
	/*
	if(i < arrQuestions.length - 1) {
		elQuestionLabel.textContent = arrQuestions[++i];
	}
	*/
		
	// On récupère la valeur du champ par son nom
	// name="answer" => elForm.answer
	arrAnswers[i] = elForm.answer.value;
	
	if(!showQuestion(++i)) {
		
		const elAnswersList = document.createElement('ol');
		
		arrAnswers.forEach(a => {
			
			const elAnswerItem = document.createElement('li');
			
			elAnswerItem.textContent = a;
			
			elAnswersList.append(elAnswerItem);			
		});
		
		elSummaryDiv.append(elAnswersList);
	}
});

