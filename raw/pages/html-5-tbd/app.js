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
    this.colorDarkGreen = '#0D923F';


    this.$el = $el;
    this.appCoordinates = this.$el.getBoundingClientRect();
    this.appLeft = this.appCoordinates.left;
    this.appTop = this.appCoordinates.top;
    this.$context = $el.getContext('2d');

    // Execute app functions
    this.printScreen();
  }

  printScreen() {
    this.$context.fillStyle = this.colorDarkGreen;
    this.$context.fillRect(0, 0, this.appWidth, this.appHeight);

    // Print Over screen
    this.print3dShape(100, 100);
  }

  print3dShape(a, b) {
    var c1 = {x: a,       y: b};
    var c2 = {x: a + 200, y: b};
    var c3 = {x: a + 200, y: b + 100};
    var c4 = {x: a,       y: b + 100};
    var c5 = {x: a + 50,  y: b - 50};
    var c6 = {x: a + 250, y: b - 50};
    var c7 = {x: a + 250, y: b + 50};

    var c = [c1, c2, c3, c4];
    var l1 = [c1, c2];
    var l2 = [c2, c3];
    var l3 = [c3, c4];
    var l4 = [c4, c1];
    var l5 = [c1, c5];
    var l6 = [c2, c6];
    var l7 = [c5, c6];
    var l8 = [c6, c7];
    var l9 = [c7, c3];
    var l = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
    var i;
    for(i = 0; i < l.length; i++) {
        this.printLine(l[i][0].x, l[i][0].y, l[i][1].x, l[i][1].y);
    }
  }

  printLine(x1, y1, x2, y2) {
    this.$context.beginPath();
    this.$context.moveTo(x1, y1);
    this.$context.lineTo(x2, y2);
    this.$context.strokeStyle = this.screenColorGreen;
    this.$context.stroke();
  }
};
// Initialize the app
var $app = document.getElementById('app');
var obj = new app($app, 1140, 500);