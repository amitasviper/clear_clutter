function removeElementById(element_id, toggle){
	var element = document.getElementById(element_id);
	if (element !== undefined && element !== null){
		if (toggle === true){
			element.classList.add("hide-element");
			console.log("Removing the elements");
		}
		else {
			element.classList.remove("hide-element");
			console.log("Showing the elements");
		}
	}
};

function removeElementByClassName(element_class, toggle){
	var elements = document.getElementsByClassName(element_class);
	for(var i = 0; i < elements.length; i ++){
		if (toggle === true){
			elements[i].classList.add("hide-element");
			console.log("Removing the elements");
		}
		else {
			elements[i].classList.remove("hide-element");
			console.log("Showing the elements");
		}
		// elements = document.getElementsByClassName(element_class);
	}
};

function removeByTagName(tag_name, toggle) {
	var elements = document.getElementsByTagName(tag_name);
	for(var i = 0; i < elements.length; i ++){
		if (toggle === true){
			elements[i].classList.add("hide-element");
			console.log("Removing the elements");
		}
		else {
			elements[i].classList.remove("hide-element");
			console.log("Showing the elements");
		}
	}
}

function clearClutter(toggle){
	var elementsById = ['left-sidebar'];
	var elementsByClass = ['metabar', 'u-fixed', 'postMeterBar'];
	var elementsByTag = ['nav']

	for(var i=0; i < elementsById.length; i ++) {
		removeElementById(elementsById[i], toggle);
	};

	for(var i=0; i < elementsByClass.length; i ++) {
		removeElementByClassName(elementsByClass[i], toggle);
	};

	for(var i=0; i < elementsByTag.length; i ++) {
		removeByTagName(elementsByTag[i], toggle);
	};
};

chrome.storage.sync.get(['counter'], function(result) {
  var value = result.counter;
  if (value === undefined) {
  	value = 0;
  }
  
  if(value % 2 === 1) {
  	// document.body.classList.add("dark-theme");
  	clearClutter(true);
	// document.body.style.background = "#606060";
	// document.body.style.color = "#000";
	// document.body.style.fontWeight = "bold";
	}
	else {
		// document.body.classList.remove("dark-theme");
		clearClutter(false);
		// document.body.style.background = "#FFF";
		// document.body.style.color = "#F00";
		// document.body.style.fontWeight = "normal";
	}

	value++;
	chrome.storage.sync.set({counter: value}, function() {

	});
});



// if(counter % 2 === 0) {
// 	document.body.style.background = "#606060";
// 	document.body.style.color = "#000";
// 	document.body.style.fontWeight = "bold";
// }
// else {
// 	document.body.style.background = "#FFF";
// 	document.body.style.color = "#F00";
// 	document.body.style.fontWeight = "normal";
// }
// counter++;