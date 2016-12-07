var followKey = function(e) {
	var keyCode = e.keyCode;
	var el = e.target;
	var tagName = el.tagName.toLowerCase();
	var prevElement = e.target.previousElementSibling;
	var nextElement = e.target.nextElementSibling;
	var elChildren = el.children;
	var subMenu = elChildren[1];
	var isTopLevelMenuItem = e;
	var parentEl = e.target.parentElement;
	var parentLevel2 = e.target.parentElement.parentElement;
	var parentLevel3 = e.target.parentElement.parentElement.parentElement;
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
		e.preventDefault();
		nextElement.focus();
	}

	// Left Arrow on top level menu
	if(keyCode === 37 && prevElement && !isSecondLevelMenu) {
		e.preventDefault();
		prevElement.focus();
	}

	// Open Submenu
	if((keyCode === 13 || keyCode === 40 || keyCode === 32) && subMenu) {
		e.preventDefault();
		subMenu.style.display = 'block';
		subMenu.setAttribute('aria-hidden', 'false');
		subMenu.setAttribute('aria-expanded', 'true');
		var subMenuItems = subMenu.children;
		subMenuItems[0].focus();
	}

	// Open Submenu
	if(keyCode === 38 && subMenu) {
		e.preventDefault();
		subMenu.style.display = 'block';
		subMenu.setAttribute('aria-hidden', 'false');
		subMenu.setAttribute('aria-expanded', 'true');
		var subMenuItems = subMenu.children;
		subMenuItems[subMenuItems.length - 1].focus();
	}

	// Close Submenu
	if(keyCode === 9 && isSecondLevelMenu) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
	}

	// Move to right top level
	if(keyCode === 39 && isSecondLevelMenu && e.target.parentElement.parentElement.nextElementSibling) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.nextElementSibling.focus();
	}

	// Move to left top level
	if(keyCode === 37 && isSecondLevelMenu && e.target.parentElement.parentElement.previousElementSibling) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.previousElementSibling.focus();
	}

	// Move to left top level
	if(keyCode === 9 && e.shiftKey && isSecondLevelMenu && e.target.parentElement.parentElement.previousElementSibling) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.previousElementSibling.focus();
	}

	// Move to left top level
	if(keyCode === 9 && !e.shiftKey && isSecondLevelMenu && e.target.parentElement.parentElement.nextElementSibling) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.nextElementSibling.focus();
	}

	// Top Arrow
	if(keyCode === 38 && isSecondLevelMenu && prevElement) {
		e.preventDefault();
		prevElement.focus();
	}

	// Down Arrow
	if(keyCode === 40 && isSecondLevelMenu && nextElement) {
		e.preventDefault();
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
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.focus();
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

/////////////////\\\\\\\\\\\\\\\\\\\\

// Vertical menu

var followVerticalMenu = function(e) {
	var keyCode = e.keyCode;
	var el = e.target;
	var tagName = el.tagName.toLowerCase();
	var prevElement = e.target.previousElementSibling;
	var nextElement = e.target.nextElementSibling;
	var elChildren = el.children;
	var subMenu = elChildren[1];
	var isTopLevelMenuItem = e;
	var parentEl = e.target.parentElement;
	var parentLevel2 = e.target.parentElement.parentElement;
	var parentLevel3 = e.target.parentElement.parentElement.parentElement;
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

	// Down Arrrow on top level menu
	if(keyCode === 40 && nextElement && !isSecondLevelMenu) {
		e.preventDefault();
		nextElement.focus();
	}

	// Top Arrow on top level menu
	if(keyCode === 38 && prevElement && !isSecondLevelMenu) {
		e.preventDefault();
		prevElement.focus();
	}

	// Open Submenu
	if((keyCode === 13 || keyCode === 39 || keyCode === 32) && subMenu) {
		e.preventDefault();
		subMenu.style.display = 'block';
		subMenu.setAttribute('aria-hidden', 'false');
		subMenu.setAttribute('aria-expanded', 'true');
		var subMenuItems = subMenu.children;
		subMenuItems[0].focus();
	}

	// Open Submenu
	if(keyCode === 37 && subMenu) {
		e.preventDefault();
		subMenu.style.display = 'block';
		subMenu.setAttribute('aria-hidden', 'false');
		subMenu.setAttribute('aria-expanded', 'true');
		var subMenuItems = subMenu.children;
		subMenuItems[subMenuItems.length - 1].focus();
	}

	// Close Submenu
	if(keyCode === 9 && isSecondLevelMenu) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.nextElementSibling.focus();
	}

	// Move to left top level
	if(keyCode === 9 && e.shiftKey && isSecondLevelMenu && e.target.parentElement.parentElement.previousElementSibling) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.previousElementSibling.focus();
	}

	// Top Arrow
	if(keyCode === 38 && isSecondLevelMenu && prevElement) {
		e.preventDefault();
		prevElement.focus();
	}

	// Down Arrow
	if(keyCode === 40 && isSecondLevelMenu && nextElement) {
		e.preventDefault();
		nextElement.focus();
	}

	// Move to bottom top level
	if(keyCode === 37 && isSecondLevelMenu && e.target.parentElement.parentElement.previousElementSibling) {
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.focus();
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
		e.preventDefault();
		e.target.parentElement.setAttribute('aria-hidden', 'true');
		e.target.parentElement.setAttribute('aria-expanded', 'false');
		e.target.parentElement.style.display = 'none';
		e.target.parentElement.parentElement.focus();
	}
};

var verticalMenu = document.getElementById('vertical-navigation');
verticalMenu.onkeydown = function(e) {
	followVerticalMenu(e);
}

var verticalMenuWithSubmenu = document.getElementById('vertical-navigation-with-menu');
verticalMenuWithSubmenu.onkeydown = function(e) {
	followVerticalMenu(e);
}
