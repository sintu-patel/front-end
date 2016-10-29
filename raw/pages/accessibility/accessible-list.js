var verticalList = function(e) {
	if (e.keyCode === 40 && e.target.nextElementSibling) {
		e.target.nextElementSibling.focus();
		e.preventDefault();
	}

	if (e.keyCode === 38 && e.target.previousElementSibling) {
		e.target.previousElementSibling.focus();
		e.preventDefault();
	}
};

var verticalListElement = document.getElementById('vertical-list');
verticalListElement.onkeydown = function(e) {
	verticalList(e);
}
/// 
var horizontalList = function(e) {
	if (e.keyCode === 39 && e.target.nextElementSibling) {
		e.target.nextElementSibling.focus();
		e.preventDefault();
	}

	if (e.keyCode === 37 && e.target.previousElementSibling) {
		e.target.previousElementSibling.focus();
		e.preventDefault();
	}
};

var horizontalListElement = document.getElementById('horizontal-list');
horizontalListElement.onkeydown = function(e) {
	horizontalList(e);
}

//

var verticalTabbing = function(e) {
	if (e.keyCode === 40 && e.target.nextElementSibling) {
		e.target.nextElementSibling.focus();
		e.preventDefault();
	}

	if (e.keyCode === 38 && e.target.previousElementSibling) {
		e.target.previousElementSibling.focus();
		e.preventDefault();
	}
};

var verticalElement = document.getElementById('vertical-element');
verticalElement.onkeydown = function(e) {
	verticalTabbing(e);
}
/// 
var horizontalTabbing = function(e) {
	if (e.keyCode === 39 && e.target.nextElementSibling) {
		e.target.nextElementSibling.focus();
		e.preventDefault();
	}

	if (e.keyCode === 37 && e.target.previousElementSibling) {
		e.target.previousElementSibling.focus();
		e.preventDefault();
	}
};

var horizontalElement = document.getElementById('horizontal-element');
horizontalElement.onkeydown = function(e) {
	horizontalTabbing(e);
}