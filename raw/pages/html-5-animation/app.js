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
  }

  printCircleAnimation() {
    var counter = 0;
    var ct = 0;
    var $this = this;
    var circleCounter = 1;
    var x1 = [1, 2, 3, 4];
    var y1 = [1, 1, 1, 1];
    var x2 = [4, 1, 2, 3];
    var y2 = [1, 1, 1, 1];
    var circleAnimate = window.setInterval(function(){
        $this.printCircle(x2[circleCounter] * 100, y2[circleCounter] * 100, 50, $this.colorDarkOrange);
        $this.printCircle(x1[circleCounter] * 100, y1[circleCounter] * 100, 50, '#FF0800');
        circleCounter++;
        if(circleCounter === 4) {
            circleCounter = 0;
        }
    }, 100);
  }

  printCircle(x1, y1, r1, cl) {
    this.$context.fillStyle = cl;
    this.$context.globalAlpha = 0.5;
    this.$context.beginPath();
    this.$context.arc(x1, y1, r1, 0, 2 * Math.PI, false);
    this.$context.fill();
  }
};
// Initialize the app
var $app = document.getElementById('app');
var obj = new app($app, 1140, 500);