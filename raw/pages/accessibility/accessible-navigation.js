var followKey = function(e) {
	var keyCode = e.keyCode;
	var el = e.srcElement;
	var tagName = el.tagName.toLowerCase();
	var prevElement = e.target.previousElementSibling;
	var nextElement = e.target.nextElementSibling;
	var elChildren = el.children;
	var subMenu = elChildren[1];

	// Follow link
	if(tagName !== 'a' && keyCode === 13) {
		var anchorTag = elChildren[0];
		var isAnchorTag = anchorTag.tagName.toLowerCase() === 'a';

		if(tagName === 'li' && elChildren.length === 1 && isAnchorTag) {
			anchorTag.click();
		}
	}
	// Right Arrrow on top level menu
	if(keyCode === 39 && nextElement) {
		nextElement.focus();
	}

	// Left Arrow on top level menu
	if(keyCode === 37 && prevElement) {
		prevElement.focus();
	}

	// Open Submenu
	if(keyCode === 13 && subMenu) {
		subMenu.style.display = 'block';
		var subMenuItems = subMenu.children;
		subMenuItems[0].focus();
	}
}

var topLevelMenu = document.getElementById('top-level-menu');
topLevelMenu.onkeydown = function(e) {
	followKey(e);
}

var navWithMenu = document.getElementById('nav-with-menu');
navWithMenu.onkeydown = function(e) {
	followKey(e);
}