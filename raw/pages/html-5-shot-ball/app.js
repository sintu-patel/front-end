var $green = '#4CAF50';
var $colorGreenLight = '#4CDF00';
var app = document.getElementById('app');
var ctx = app.getContext('2d');
ctx.fillStyle = $green;
ctx.fillRect(0, 0, 1000, 500);
var element = app.getBoundingClientRect();
var canvasLeft = element.left;
var canvasTop = element.top;

// Draw a circle
var drawBall = function(x, y) {
  var radius = 50;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = $colorGreenLight;
  ctx.fill();
}

// Clear Rectangle

var clearRectObj = function (x, y, w, h) {
  ctx.clearRect(x, y, w, h);
  ctx.fillStyle = $green;
  ctx.fillRect(x, y, w, h);
}

var count = 0;
var leftPos = 0;
var intervalID = window.setInterval(function(){
  clearRectObj(0, 0, leftPos, 110);
  leftPos = leftPos + 1;
  drawBall(leftPos, 60)
  if(leftPos >= 500) {
    leftPos = 0;
  }
}, 10);


// Draw object
var drawObject = function(y) {
  ctx.fillStyle = $colorGreenLight;
  ctx.fillRect(200, y, 40, 40);
}

var startTarget = function() {
  var countObj = 0;
  var yPos = 360;
  var intervalOB = window.setInterval(function(){
    countObj = countObj + 1;
    yPos = yPos - countObj;
    clearRectObj(200, yPos + 10, 40, 40);
    drawObject(yPos);
    if(yPos <= 90) {
      clearInterval(intervalOB);
    }
  }, 10);
}

drawObject(400);
app.onclick = function(e) {
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;

  if(x > 200 && x < 240 && y > 400 && y < 440) {
    startTarget();
  }
};
