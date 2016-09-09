// Create HTML

var resources = resources ? resources.data : null;
var toDo = toDoData ? toDoData.data : null;
function createHtml(data) {
  var html = '';
  var i = 0;
  for(i = 0; i < data.length; i++ ) {
    html += '<li>';
    html += '<a href=\"' + data[i].hyperLink + '\" target="blank" >';
    html += data[i].name;
    html += '</a>';
    html += '</li>';
  }
  return html;
}

if(resources) {
  var resourcesHtml = createHtml(resources);
  var $resource = document.getElementById('resource-list');
  if($resource) {
    $resource.innerHTML = resourcesHtml;
  }
}

if(toDo) {
  var toDoHtml = createHtml(toDo);
  var $todo = document.getElementById('todo-list');

  if($todo) {
    $todo.innerHTML = toDoHtml;
  }
}