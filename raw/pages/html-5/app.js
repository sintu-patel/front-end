// Color vairables

var $green = '#4CAF50';
var $colorGreenLight = '#4CDF00';

// Draw Line Starts
var lineCanvas = document.getElementById('line-canvas');
var element = lineCanvas.getBoundingClientRect();
var canvasLeft = element.left;
var canvasTop = element.top;
var ctx = lineCanvas.getContext('2d');
ctx.fillStyle = $green;
ctx.fillRect(0, 0, 400, 400);

var clickCount = 0;
var prevCoordinate = {
  x: 0,
  y: 0
};
var currentCoordinate = {
  x: 0,
  y: 0
};

var drawMousePath = function(C, P) {
  if(clickCount > 0) {
    ctx.strokeStyle = $colorGreenLight;
    ctx.beginPath();
    ctx.moveTo(P.x, P.y);
    ctx.lineTo(C.x, C.y);
    ctx.stroke();
  }
  prevCoordinate = {
    x: C.x,
    y: C.y
  };

  clickCount = clickCount + 1;
}

lineCanvas.onclick = function(e) {
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;
  currentCoordinate = {
    x: x,
    y: y
  };
  drawMousePath(currentCoordinate, prevCoordinate)
};

// Draw Line Ends
// Draw Line Starts
var rectCanvas = document.getElementById('rect-canvas');
var elementRect = rectCanvas.getBoundingClientRect();
var rectLeft = elementRect.left;
var rectTop = elementRect.top;
var ctxRect = rectCanvas.getContext('2d');
ctxRect.fillStyle = $green;
ctxRect.fillRect(0, 0, 400, 400);

var colorCount = 0;
rectCanvas.onclick = function(e) {
  colorCount = colorCount + 1;
  if(colorCount > 9) {
    colorCount = 0;
  }
  var x = e.clientX - rectLeft;
  var y = e.clientY - rectTop;

  ctxRect.fillStyle = '#' + colorCount + 'CDF' + colorCount + colorCount;
  ctxRect.fillRect(x, y, 30, 30);
};
