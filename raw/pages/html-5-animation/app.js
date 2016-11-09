// Draw the main surface of the app.
class app {
  constructor($el, appWidth, appHeight) {
    this.appWidth = appWidth || 1140;
    this.appHeight = appHeight || 500;

    // App colors
    this.screenColorBlue = '#175DD7';
    this.screenColorNavy = 'navy';
    this.screenColorLightBlue = '#61C6F2';
    this.screenColorGreen = '#7EAD07';
    this.colorWhite = '#ffffff';
    this.colorLightGray = '#cccccc';
    this.colorOrange = '#FC5F20';
    this.colorDarkOrange = '#ce3e06';
    this.roadColor = '#656A6E';
    this.colorBlack ='#000000';


    this.$el = $el;
    this.appCoordinates = this.$el.getBoundingClientRect();
    this.appLeft = this.appCoordinates.left;
    this.appTop = this.appCoordinates.top;
    this.$context = $el.getContext('2d');

    // Execute app functions
    this.printScreen();
  }

  printScreen() {
    this.$context.fillStyle = this.colorDarkOrange;
    this.$context.fillRect(0, 0, this.appWidth, this.appHeight);

    this.printCircleAnimation();
    this.printTriangle();
    this.printShape();
    this.print3dShape();
    this.print3dShapeRect();
    this.print3dShapeRect2();
  }

  print3dShape() {
    this.$context.fillStyle = 'green';
    this.$context.globalAlpha = 0.2;
    for(var i = 0; i < 10; i++) {
        this.$context.fillRect(this.appWidth / 2 + i*10, 100, 100, 200);
    }
  }

  print3dShapeRect() {
    this.$context.fillStyle = 'blue';
    this.$context.globalAlpha = 0.3;
    for(var i = 0; i < 10; i++) {
        this.$context.fillRect(this.appWidth / 2 + 200 + i*2, 100 + i*2, 100, 100);
    }
  }

  print3dShapeRect2() {
    this.$context.fillStyle = 'green';
    this.$context.globalAlpha = 0.3;
    for(var i = 0; i < 10; i++) {
        this.$context.fillRect(this.appWidth / 2 + 340 + i*5, 100 + i*5, 100, 100);
    }
  }

  printCircleAnimation() {
    var counter = 0;
    var ct = 0;
    var $this = this;
    var circleCounter = 1;
    var x1 = [1, 2, 3, 4, 5, 6, 7, 8];
    var y1 = [1, 1, 1, 1, 1, 1, 1, 1];
    var x2 = [8, 1, 2, 3, 4, 5, 6, 7];
    var y2 = [1, 1, 1, 1, 1, 1, 1, 1];
    var circleAnimate = window.setInterval(function(){
        $this.printCircle(x2[circleCounter] * 60, y2[circleCounter] * 60, 30, $this.colorDarkOrange, 0.5);
        $this.printCircle(x1[circleCounter] * 60, y1[circleCounter] * 60, 30, 'orange', 0.5);
        circleCounter++;
        if(circleCounter === 8) {
            circleCounter = 0;
        }
    }, 100);
  }

  printTriangle() {
    var counter = 0;
    var ct = 0;
    var $this = this;
    var circleCounter = 1;
    var x1 = [1, 2, 3, 2.5, 2, 1.5];
    var y1 = [5, 5, 5, 4,   3, 4];
    var x2 = [1.5, 1, 2, 3, 2.5, 2];
    var y2 = [4, 5, 5, 5, 4,   3];
    var circleAnimate = window.setInterval(function(){
        $this.printCircle(x2[circleCounter] * 60, y2[circleCounter] * 60, 30, $this.colorDarkOrange, 0.5);
        $this.printCircle(x1[circleCounter] * 60, y1[circleCounter] * 60, 30, 'yellow', 0.5);
        circleCounter++;
        if(circleCounter === 6) {
            circleCounter = 0;
        }
    }, 100);
  }

  printShape() {
    var counter = 0;
    var ct = 0;
    var $this = this;
    var circleCounter = 1;
    var x1 = [5, 6, 7, 8, 9, 10];
    var y1 = [4, 5, 6, 7, 8, 9];
    var x2 = [10, 5, 6, 7, 8, 9];
    var y2 = [9, 4, 5, 6, 7, 8];
    var circleAnimate = window.setInterval(function(){
        $this.printCircle(x2[circleCounter] * 50, y2[circleCounter] * 50, 80, $this.colorDarkOrange, 1);
        $this.printCircle(x1[circleCounter] * 50, y1[circleCounter] * 50, 80, 'green', 1);
        circleCounter++;
        if(circleCounter === 6) {
            circleCounter = 0;
        }
    }, 100);
  }

  printCircle(x1, y1, r1, cl, op) {
    this.$context.fillStyle = cl;
    this.$context.globalAlpha = op;
    this.$context.beginPath();
    this.$context.arc(x1, y1, r1, 0, 2 * Math.PI, false);
    this.$context.fill();
  }
};
// Initialize the app
var $app = document.getElementById('app');
var obj = new app($app, 1140, 500);