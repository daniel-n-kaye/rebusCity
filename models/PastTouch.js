////////////////////////////////////////////////////////////////////////////////
// PastTouch ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// object used to record the location and time of a previous touch point
// used to calculate swiping velocity & direciton

class PastTouch {
    constructor(x, y) {
        this.time = frameCount; // records frame when this touch position was registered
        this.position = createVector(x, y); // vector to save x and y location of past touch
    }
}