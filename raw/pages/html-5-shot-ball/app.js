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

var targetCr = {
  x: 0,
  y: 0
};

var count = 0;
var leftPos = 0;
var intervalID = window.setInterval(function(){
  clearRectObj(leftPos - 110, 0, leftPos, 110);
  leftPos = leftPos + 1;
  drawBall(leftPos, 60)
  targetCr = {
    x: leftPos,
    y: 110
  };
  if(leftPos >= 500) {
    leftPos = 0;
  }
}, 1);


// Draw object
var drawObject = function(y) {
  ctx.fillStyle = 'red';
  ctx.fillRect(200, y, 10, 50);
}

var hitTarget = function(hit) {

  if(((hit.x < targetCr.x) && (targetCr.x - hit.x <= 10)) && ((hit.y > targetCr.y) && (hit.y - targetCr.y) <= 20)) {
    clearInterval(intervalID);
  }
};

var startTarget = function() {
  var countObj = 0;
  var yPos = 350;
  var intervalOB = window.setInterval(function(){
    countObj = countObj + 1;
    yPos = yPos - countObj;
    clearRectObj(200, yPos + 10, 10, 65);
    drawObject(yPos);
    hitTarget({x: 200, y: yPos});
    if(yPos <= 60) {
      clearInterval(intervalOB);
    }
  }, 10);
}

var drawButton = function(y) {
  var radius = 20;
  ctx.beginPath();
  ctx.arc(220, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = $colorGreenLight;
  ctx.fill();
}

drawButton(460);
app.onclick = function(e) {
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;

  if(x > 200 && x < 240 && y > 440 && y < 480) {
    startTarget();
  }
};

app.onmousemove = function(e) {
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;

  if(x > 200 && x < 240 && y > 440 && y < 480) {
    app.style.cursor = 'pointer';
  }

  else {
    app.style.cursor = 'move';
  }
};
