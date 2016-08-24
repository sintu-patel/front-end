// Hello world program
var helloWorld = "<span>Hello World Typescript</span>";
function printName(text) {
    document.getElementById('hello-world').innerHTML = text;
}
printName(helloWorld);
function calculateArea(shape) {
    var area = shape.width * shape.height;
    var displayText = 'The ';
    displayText += shape.name;
    displayText += ' with width ';
    displayText += shape.width;
    displayText += ' and heigth ';
    displayText += shape.height;
    displayText += ' equals to area of ';
    displayText += shape.width * shape.height;
    var interfaceElement = document.getElementById('interface');
    interfaceElement.innerHTML = displayText;
}
calculateArea({ name: 'Hello Rectangle', width: 65, height: 13 });
// Functions : Normal java script
var shape = {
    name: "rectangle",
    test: function () {
        var arrowElement = document.getElementById('arrow-functions');
        arrowElement.innerHTML = this.name;
        setTimeout(function () {
            arrowElement.innerHTML = this.name;
        }, 3000);
    }
};
shape.test();
// Arrow Functions : Type script
var shapeArrow = {
    name: "rectangle",
    test: function () {
        var _this = this;
        var arrowElement = document.getElementById('arrow-functions-2');
        arrowElement.innerHTML = this.name;
        setTimeout(function () {
            arrowElement.innerHTML = _this.name;
        }, 3000);
    }
};
shapeArrow.test();
