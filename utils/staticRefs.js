function staticRefs() {

}

staticRefs.initializeCanvas = function() {
    canvas = createCanvas(400, 400); // creates canvas, saves to p5 variable
    canvas.id('canvas'); // sets id of DOM canvas element
    canvas.parent('container'); // sets parent of canvas as container div
}

/**
 *  returns true if the given argument is a function
 *  got from here: https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
 * @param {any} functionToCheck
 * @returns {boolean}
 */
staticRefs.isFunction = function(thingToCheck) {
    return thingToCheck && {}.toString.call(thingToCheck) === '[object Function]';
}