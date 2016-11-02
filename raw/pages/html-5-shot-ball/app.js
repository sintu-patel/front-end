var $blue = '#8A2BE2';
var app = document.getElementById('app');
var ctx = app.getContext('2d');
var element = app.getBoundingClientRect();
var canvasLeft = element.left;
var canvasTop = element.top;
var targetCr = {
  x: 0,
  y: 0
};
var count = 0;
var leftPos = 0;
var killed = false;
var missCount = 0;
var gameLevel = 1;

// Draw board
ctx.fillStyle = $blue;
ctx.fillRect(0, 0, 1000, 500);
// Focus on app
app.focus();
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

var intervalID = window.setInterval(function(){
  clearRectObj(leftPos - 140, 0, leftPos, 130);
  leftPos = leftPos + gameLevel;
  drawBall(leftPos, 80)
  targetCr = {
    x: leftPos,
    y: 130
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
var drawBallSuccess = function(x, y) {
  var radius = 30;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.font="italic 20pt Calibri";
  var gameLevelText = gameLevel;
  if(gameLevelText < 10) {
    gameLevelText = '0' + gameLevelText;
  }
  ctx.fillText(gameLevelText, x - 15, y + 10, 200);

  ctx.fillStyle = 'white';
  ctx.font="italic 20pt Calibri";
  ctx.fillText('Level', x - 30, y - 40, 200);
}

var hitTarget = function(hit) {
  var isXTrue = (hit.x < targetCr.x) && (targetCr.x - hit.x <= 50);
  var isYTrue = (hit.y > targetCr.y) && (hit.y - targetCr.y <= 10);

  if(isXTrue && isYTrue) {
    drawBallSuccess(940, 100);
    killed = true;
    gameLevel = gameLevel + 1;
  }
};

var startTarget = function(action) {
  var countObj = 0;
  var yPos = 350;

  if(action === 'stop') {
    clearInterval(intervalOB);
  }
  if(action === 'start') {
    var intervalOB = window.setInterval(function(){
      countObj = countObj + 1;
      yPos = yPos - countObj;
      clearRectObj(200, yPos + 10, 10, 65);
      drawObject(yPos);
      hitTarget({x: 200, y: yPos});
      if(yPos <= 80) {
        clearInterval(intervalOB);
      }
    }, 10);
  }
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
  ctx.fillRect(700, 270, 220, 210);
  var radius = 50;
  ctx.beginPath();
  ctx.arc(810, 380, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.fillStyle = '#FF4400';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle="#ffffff";
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.font="italic 20pt Calibri";
  ctx.fillText('Total attempts', 730, 250, 200);
  ctx.font="italic 40pt Calibri";
  var text = missCount;
  if(text < 10) {
    text = '0' + text;
  }
  ctx.fillText(text, 780, 395, 1000);
}
printScore(0);
drawButton(460);

var buttonAction = function(e) {
  var x = e.clientX - canvasLeft;
  var y = e.clientY - canvasTop;

  if(x > 180 && x < 240 && y > 440 && y < 480) {
    startTarget('start');
    printScore(missCount);
    missCount++;
  }

  else if(x > 400 && x < 440 && y > 440 && y < 480) {
    resetGame();
  }
}

var mouseMoveAction = function(e) {
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
}

var keyAction = function (e) {
  if((e.keyCode === 13 || e.keyCode === 32)) {
    startTarget('start');
    printScore(missCount);
    missCount++;
  }

  if(e.keyCode === 27) {
    resetGame();
  }
}

drawBallSuccess(940, 100);
var resetGame = function() {
  count = 0;
  leftPos = 0;
  killed = false;
  missCount = 0;
  gameLevel = 1;
  drawBallSuccess(940, 100);
  printScore(missCount);
}

app.onclick = function(e) {
  buttonAction(e);
};
app.onmousemove = function(e) {
  mouseMoveAction(e);
};

app.addEventListener('keydown', keyAction, true);
