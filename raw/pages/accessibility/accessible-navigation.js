var topLevelMenu = document.getElementById('top-level-menu');

topLevelMenu.onkeydown = function(e) {
	var keyCode = e.keyCode;
	var el = e.srcElement;
	var tagName = el.tagName.toLowerCase();
	var prevElement = e.target.previousElementSibling;
	var nextElement = e.target.nextElementSibling;

	// Follow link
	if(tagName !== 'a' && keyCode === 13) {
		var elChildren = el.children;
		var childTag = elChildren[0];
		var childTagName = childTag.tagName.toLowerCase();

		if(tagName === 'li' && elChildren.length === 1 && childTagName === 'a') {
			childTag.click();
		}
	}
	// Right Arrrow
	if(keyCode === 39 && nextElement) {
		nextElement.focus();
	}

	if(keyCode === 37 && prevElement) {
		prevElement.focus();
	}

}