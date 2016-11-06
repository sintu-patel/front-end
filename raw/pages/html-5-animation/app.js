// Draw the main surface of the app.
class app {
  constructor($el, appWidth, appHeight) {
    this.appWidth = appWidth || 1140;
    this.appHeight = appHeight || 500;

    // App colors
    this.screenColorBlue = '#175DD7';
    this.screenColorLightBlue = '#61C6F2';
    this.screenColorGreen = '#7EAD07';

    this.$el = $el;
    this.appCoordinates = this.$el.getBoundingClientRect();
    this.appLeft = this.appCoordinates.left;
    this.appTop = this.appCoordinates.top;
    this.$context = $el.getContext('2d');

    // Execute app functions
    this.printScreen();
  }

  printScreen() {
    var gradient = this.$context.createLinearGradient(0, 0, this.appWidth, this.appHeight);
    gradient.addColorStop(0, this.screenColorBlue);
    gradient.addColorStop(1, this.screenColorLightBlue);

    this.$context.fillStyle = gradient;
    this.$context.fillRect(0, 0, this.appWidth, this.appHeight);
  }
};
// Initialize the app
var $app = document.getElementById('app');
var obj = new app($app, 1140, 500);