$(document).ready(function(){
  var mountData = function(cssClass) {
    return pageData.main[cssClass];
  };

  var $page = $('.page');
  var $html = '<p>' + mountData('paragraph') + '</p>'
  $page.find('.paragraph').html($html);
});
