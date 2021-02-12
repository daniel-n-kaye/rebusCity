
////////////////////////////////////////////////////////////////////////////////
// scroll bar Class ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// draws scroll bar, and can be clicked on and dragged to scroll quickly

// scroll bar objects
class ScrollBar {
    constructor() {
        this.h;  // current height of scroll bar
        this.p; // current vertical position of center of scroll bar
        this.pClicked;
        this.startingYClicked;
        this.x;  // horizontal position\
        this.buffer = 5;
        this.topBound;
        this.bottomBount;
        this.strokeWeight = 5;
        this.opacity = 0;  // opacity of scroll bar
        this.opacityTimeout = 0; // time delaye before scrollbar fades away
        this.clicked = false; // true if the scroll bar is currently clicked on
        // calculates initial position upon initialization
        this.calcLen();
        this.calcPos();
    }

    // calculates height of scrollbar based on canvas height, num of rebueses in current category, and a min and max size value
    calcLen() {
        let hMin = 40;
        let hMax = rebusSizeCurrent;
        this.h = height * (numOfRowsThatFitOnscreen / (filteredRebusIndices.length / 3));
        if (this.h > hMax) { this.h = hMax; }
        if (this.h < hMin) { this.h = hMin; }
    }

    // calculates current position of scrollbar
    calcPos() {
        this.x = width - this.buffer;
        this.topBound = this.h / 2 + this.buffer;
        this.bottomBound = height - ((this.h / 2) + this.buffer);
        this.p = map(startingY, 0, -(numOfRows - 1) * rowHeight, this.topBound, this.bottomBound);
    }

    // draws scroll bar
    draw() {
        //     print(this.x + ', ' + this.p);
        // increases opacity while rebuses are scrollling
        if (areRebusesCurrentlyScrolling && this.opacity <= 255) {
            this.opacity += 8;
            this.opacityTimeout = 0;
        } else
            // decreses opacity after scrolling is finished, with a slight delay
            if (!areRebusesCurrentlyScrolling && this.opacity > 0) {
                if (this.opacityTimeout < 30) {
                    this.opacityTimeout++;
                } else {
                    this.opacity -= 8;
                }
            }
        // calculates opacity due to mouse proximity
        let distFromMouseOpacity = 0;
        if (this.distToMouse() < 100) {
            distFromMouseOpacity = map(this.distToMouse(), 0, 100, 255, 0);
        }
        // if scrolling (or recently scrolled - due to opacity) OR if mouse is nearby, draw the scroll bar
        if (this.opacity > 0 || this.distToMouse() < 100) {
            this.calcLen(); // calculates length (doesn't need to be done every frame probably)
            this.calcPos(); // calculates vertical position
            // sets styles
            noFill();
            let o = max(this.opacity, distFromMouseOpacity); // opacity is equal to the darker value of scrolling or mouse proximity
            stroke(192, o);
            strokeWeight(this.strokeWeight);
            // if scrollbar is currently clicked on and being dragged...
            if (this.clicked) {
                let upperLimit = 0;
                let lowerLimit = -((numOfRows - 1) * rowHeight);
                let mouseDraggedAmount = this.pClicked - mouseY;  // distance mouse has been moved since it was clicked, ie. scroll by that much, proportional by number of rows to canvas height
                mouseDraggedAmount = map(mouseDraggedAmount, 0, height - this.h, upperLimit, lowerLimit); // top of initial range subtracts this.h to adjust for height of scroll bar (half height at bottom naf half height at top)
                startingY = this.startingYClicked - (mouseDraggedAmount);
                if (startingY > upperLimit) startingY = upperLimit;
                if (startingY < lowerLimit) startingY = lowerLimit;
                this.opacity = 255;
                stroke(0);
            }
            // if on a desktop device, draws one (clickable) scrollbar on right side
            if (desktopMode) {
                line(this.x, this.p + (this.h / 2), this.x, this.p - (this.h / 2));
            } else
                // if on a mobile device, draws a line on both sides, non clickable
                if (mobileMode) {
                    fill(192, o);
                    noStroke();
                    rect(0 - this.strokeWeight / 2, this.p - (this.h / 2), this.strokeWeight, this.h, 3);
                    rect(width - this.strokeWeight / 2, this.p - (this.h / 2), this.strokeWeight, this.h, 3);
                }
        }
    }

    // returns true if mouse is currently hovered over scroll bar
    isHovered() {
        if (mouseX > this.x - this.strokeWeight / 2 &&
            mouseX < width &&
            mouseY > this.p - this.h / 2 &&
            mouseY < this.p + this.h / 2) {
            return true;
        } else return false;
    }

    //returns the shortest distance from the mouse to the scroll bar
    distToMouse() {
        let d;
        let yTop = this.p - this.h / 2; // y value at top of scroll bar
        let yBottom = this.p + this.h / 2;  // y value at bottom of scroll bar
        if (mouseY < yTop) {  // if mouse is above top of scroll bar...
            d = dist(this.x, yTop, mouseX, mouseY);
        } else if (mouseY < yBottom) {  // if mouse is horizontal from scroll bar...
            d = abs(this.x - mouseX);
        } else { // if mouse is below scrollbar...
            d = dist(this.x, yBottom, mouseX, mouseY)
        }
        return d;
    }

    // called once every time the scroll bar is clicked on
    clickedOn() {
        print('scroll bar clicked on');
        this.clicked = true;
        this.pClicked = mouseY;
        this.startingYClicked = startingY;
    }
}