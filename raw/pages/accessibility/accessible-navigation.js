var followKey = function(e) {
	var keyCode = e.keyCode;
	var el = e.srcElement;
	var tagName = el.tagName.toLowerCase();
	var prevElement = e.target.previousElementSibling;
	var nextElement = e.target.nextElementSibling;
	var elChildren = el.children;
	var subMenu = elChildren[1];
	var isTopLevelMenuItem = e;
	var parentEl = e.path[1];
	var parentLevel2 = e.path[2];
	var parentLevel3 = e.path[3];
	var parentLevel3Class = parentLevel3.getAttribute('class');
	var classMatch = new RegExp('first-level-menu');
	var isSecondLevelMenu = classMatch.test(parentLevel3Class);

	// Follow link
	if(tagName !== 'a' && keyCode === 13) {
		var anchorTag = elChildren[0];
		var isAnchorTag = anchorTag.tagName.toLowerCase() === 'a';

		if(tagName === 'li' && elChildren.length === 1 && isAnchorTag) {
			anchorTag.click();
		}
	}
	// Right Arrrow on top level menu
	if(keyCode === 39 && nextElement && !isSecondLevelMenu) {
		nextElement.focus();
	}

	// Left Arrow on top level menu
	if(keyCode === 37 && prevElement && !isSecondLevelMenu) {
		prevElement.focus();
	}

	// Open Submenu
	if((keyCode === 13 || keyCode === 40 || keyCode === 32) && subMenu) {
		e.preventDefault();
		subMenu.style.display = 'block';
		var subMenuItems = subMenu.children;
		subMenuItems[0].focus();
	}

	// Open Submenu
	if(keyCode === 38 && subMenu) {
		e.preventDefault();
		subMenu.style.display = 'block';
		var subMenuItems = subMenu.children;
		subMenuItems[subMenuItems.length - 1].focus();
	}

	// Close Submenu
	if(keyCode === 9 && isSecondLevelMenu) {
		e.path[1].style.display = 'none';
	}

	// Move to right top level
	if(keyCode === 39 && isSecondLevelMenu && e.path[2].nextElementSibling) {
		e.path[1].style.display = 'none';
		e.path[2].nextElementSibling.focus();
	}

	// Move to left top level
	if(keyCode === 37 && isSecondLevelMenu && e.path[2].previousElementSibling) {
		e.path[1].style.display = 'none';
		e.path[2].previousElementSibling.focus();
	}

	// Top Arrow
	if(keyCode === 38 && isSecondLevelMenu && prevElement) {
		prevElement.focus();
	}

	// Down Arrow
	if(keyCode === 40 && isSecondLevelMenu && nextElement) {
		nextElement.focus();
	}

	// Sub menu item action
	if(keyCode === 32 && isSecondLevelMenu) {
		e.preventDefault();
		var anchorTag = elChildren[0];
		var isAnchorTag = anchorTag.tagName.toLowerCase() === 'a';

		if(tagName === 'li' && elChildren.length === 1 && isAnchorTag) {
			anchorTag.click();
		}
	}

	// Down Arrow
	if(keyCode === 27 && isSecondLevelMenu) {
		e.path[1].style.display = 'none';
		e.path[2].focus();
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