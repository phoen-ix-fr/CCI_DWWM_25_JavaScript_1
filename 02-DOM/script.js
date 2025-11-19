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

const elPotionItem = document.querySelector("#inventory li");
elPotionItem.remove();

// En une ligne :
// document.querySelector("#inventory li").remove();


const elButton = document.getElementById('btn-click');

elButton.addEventListener('click', function(e) {
	
	console.log(e);
	
	// alert("Tu as cliqué!");
	
	const elNewItem = document.createElement('li');
	elNewItem.textContent = "Armures";

	elInventoryList.appendChild(elNewItem);
});


// Notation en fonction fléchée :
/*
elButton.addEventListener('click', () => {
	alert("Tu as cliqué!");
});
*/

// Notation complète
/*
function handleClick() {
	alert("Tu as cliqué!");
}

elButton.addEventListener('click', handleClick);
*/