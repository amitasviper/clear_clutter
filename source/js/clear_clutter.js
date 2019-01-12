function removeElementById(element_id){
	var element = document.getElementById(element_id);
	if (element !== undefined && element !== null){
		element.remove();
	}
};

function removeElementByClassName(element_class){
	var elements = document.getElementsByClassName(element_class);
	while (elements.length > 0) {
		elements[0].remove();
		elements = document.getElementsByClassName(element_class);
	}
};

function clearClutter(){
	var elementsById = ['left-sidebar'];
	var elementsByClass = ['metabar', 'u-fixed', 'postMeterBar'];

	for(var i=0; i < elementsById.length; i ++) {
		removeElementById(elementsById[i]);
	};

	for(var i=0; i < elementsByClass.length; i ++) {
		removeElementByClassName(elementsByClass[i]);
	};
};

// $(document).ready(clearClutter);

// document.body.style.background = "#606060";
// document.body.style.color = "#000";
// document.body.style.fontWeight = "bold";