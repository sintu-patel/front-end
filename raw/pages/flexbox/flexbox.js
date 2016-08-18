$(document).ready(function(){
  mountData('paragraph');
});

// Change content of an element with respective to class in data
var mountData = function(cssClass) {
  var text = pageData.main[cssClass];
  var $page = $('.page');
  $page.find('.' + cssClass).html(text);
};
