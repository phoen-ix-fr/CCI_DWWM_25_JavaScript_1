/* JavaScript ICI */
// Récupération des éléments du DOM
const elTaskList 	= document.getElementById('taskList');
const elTaskInput 	= document.getElementById('taskInput');

const arrStrTask	= [];	//< Tableau qui stockera la liste des tâches affichées

// Association des évènements des clics sur les boutons

// Pour l'ajout, on créer un nouvel élément dans le DOM qu'on ajoute à la liste
document.getElementById('addBtn').addEventListener('click', () => {
	
	const strTaskText = elTaskInput.value; //< Récupération du texte de l'input
	
	// Création d'un nouvel élément <li> dans ma liste
	const elTaskItem = document.createElement('li');
	/*
	elTaskItem.textContent = strTaskText; 	//< Affecte un contenu textuel simple
											//< <li>Le texte de l'input</li>
	*/
	
	elTaskItem.classList.add('task-item');	//< Rajoute la classe CSS au li	
	
	// <li><span class="task-text">....</span>...</li>
	const elTaskSpan = document.createElement('span');
	elTaskSpan.textContent = strTaskText;
	elTaskSpan.classList.add('task-text');
	
	elTaskItem.append(elTaskSpan);
											
	const elTaskButton = document.createElement('button');
	elTaskButton.textContent = "Supprimer";
	elTaskButton.classList.add('delete-btn');
	
	elTaskItem.append(elTaskButton); //< Ajoute le bouton au <li>
	
	// Ajouter le <li> au <ul> : elTaskList
	elTaskList.append(elTaskItem);
	
	arrStrTask.push(strTaskText); //< Ajout de la tâche dans le tableau
});

// Pour la suppression on supprimer tous les éléments du DOM dans la liste
document.getElementById('clearAllBtn').addEventListener('click', () => {
	
});