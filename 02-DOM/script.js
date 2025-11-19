const elTargetDiv =
	document.getElementById('target');
	
const elNewParagraph =
	document.createElement('p');

elNewParagraph.textContent = 
	"Hello World !";
	
// Rajoute un enfant (appendChild) à elTargetDiv
elTargetDiv.appendChild(elNewParagraph);

// Fonctionne aussi :
// document.getElementById('target').appendChild(elNewParagraph);

const elInventoryList = document.getElementById('inventory');

const elNewItem = document.createElement('li');
elNewItem.textContent = "Armures";

elInventoryList.appendChild(elNewItem);

const elPotionItem = document.querySelector("#inventory li");
elPotionItem.remove();

// En une ligne :
// document.querySelector("#inventory li").remove();