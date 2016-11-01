var $blue = '#8A2BE2';
var app = document.getElementById('app');
var ctx = app.getContext('2d');
ctx.fillStyle = $blue;
ctx.fillRect(0, 0, 1000, 500);
var element = app.getBoundingClientRect();
var canvasLeft = element.left;
var canvasTop = element.top;

// Draw a circle
var drawBall = function(x, y) {
  var radius = 50;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'yellow';
  ctx.fill();
}

// Clear Rectangle

var clearRectObj = function (x, y, w, h) {
  ctx.clearRect(x, y, w, h);
  ctx.fillStyle = $blue;
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
  ctx.fillStyle = 'orange';
  ctx.fillRect(200, y, 10, 50);
}

// Draw a circle
var killed = false;
var drawBallSuccess = function(x, y) {
  var radius = 60;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.font="italic 20pt Calibri";
  ctx.fillText('Success', x - 40, y + 10, 200);
}

var hitTarget = function(hit) {

  if(((hit.x < targetCr.x) && (targetCr.x - hit.x <= 10)) && ((hit.y > targetCr.y) && (hit.y - targetCr.y) <= 20)) {
    clearInterval(intervalID);
    setTimeout(function() {
      drawBallSuccess(hit.x, 60)
    }, 100)
    killed = true;
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
  ctx.fillStyle = '#FF8C00';
  ctx.font = '20px Arial';
  ctx.fillText('START', 120, 465, 200);
  var grd = ctx.createRadialGradient(220, 460, 5, 230, 470, 20);
  grd.addColorStop(0, "#FF4400");
  grd.addColorStop(1, "red");
  ctx.fillStyle = grd;

  var radius = 20;
  ctx.beginPath();
  ctx.arc(210, y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle="#FF8C00";
  ctx.stroke();
}

var drawResetButton = function(y) {
  ctx.fillStyle = '#FF8C00';
  ctx.font = '20px Arial';
  ctx.fillText('RESET', 320, 465, 200);
  ctx.fillStyle = 'red';

  var radius = 20;
  ctx.beginPath();
  ctx.arc(420, y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle="#FF8C00";
  ctx.stroke();
}

drawResetButton(460);

var printScore = function(missCount) {
  ctx.fillStyle = '#FF8C00';
  ctx.fillRect(700, 190, 220, 210);
  var radius = 50;
  ctx.beginPath();
  ctx.arc(810, 300, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.fillStyle = '#FF4400';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle="#ffffff";
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.font="italic 20pt Calibri";
  ctx.fillText('Total attempts', 730, 230, 200);
  ctx.font="italic 40pt Calibri";
  var text = missCount;
  if(text < 10) {
    text = '0' + text;
  }
  ctx.fillText(text, 780, 315, 1000);
}

drawButton(460);
var missCount = 0;
app.onclick = function(e) {
  
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;

  if(!killed && x > 180 && x < 240 && y > 440 && y < 480) {
    startTarget();
    printScore(missCount);
    missCount++;
  }

  else if(x > 400 && x < 440 && y > 440 && y < 480) {
    location.reload();
  }
};
app.onmousemove = function(e) {
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;

  if(x > 180 && x < 240 && y > 440 && y < 480) {
    app.style.cursor = 'pointer';
  }

  else if(x > 400 && x < 440 && y > 440 && y < 480) {
    app.style.cursor = 'pointer';
  }

  else {
    app.style.cursor = 'not-allowed';
  }
};
