function removeSidebar(){
	var left_sidebar = document.getElementById('left-sidebar');
	left_sidebar.remove();
};

$(document).ready(removeSidebar);