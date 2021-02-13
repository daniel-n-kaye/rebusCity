function staticRefs() {

}

staticRefs.initializeCanvas = function() {
    canvas = createCanvas(400, 400); // creates canvas, saves to p5 variable
    canvas.id('canvas'); // sets id of DOM canvas element
    canvas.parent('container'); // sets parent of canvas as container div
}