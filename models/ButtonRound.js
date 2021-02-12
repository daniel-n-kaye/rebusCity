
////////////////////////////////////////////////////////////////////////////////
// round button Class //////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// round buttons used for closing windows and hints and more....

class ButtonRound {
    constructor(x, y) {
        this.r = floor(0.07 * rebusSizeCurrent);  // default button Radius
        if (mobileMode) { this.r *= 2; }  // default mobile radius
        this.xStrokeLength = 0.6 * this.r;
        if (x && y) { // if constructor was provided with both an x & y value...
            this.x = x;
            this.y = y;
        } else
            if (!x) { // if constructor recieved no values
                // defaults location to off the screen
                this.x = -this.r * 2;
                this.y = -this.r * 2;
            }
        this.char = 'X';  // default fill is an x
        this.opacity = 255; // default opacity value
        this.circleStrokeWeight = 1.5;  // default stroke weight of circle
        this.circleStroke = 192; // defaul stroke color of circle
        this.circleStrokeHover = 0;  // default stroke hover color of circle
        this.circleFill = 255; // default stroke fill of circle
        this.circleFillHover = 192;
        this.circleNoFill = false;
        this.charFill = 192; // default text fill color
        this.charFillHover = 0; // default text fill color
        this.textSize = 14; // default text size
    }

    // draws button
    draw() {
        // draws outer circle
        stroke(this.circleStroke, this.opacity);
        strokeWeight(this.circleStrokeWeight);
        fill(this.circleFill, this.opacity);
        if (this.isHovered()) {
            stroke(this.circleStrokeHover, this.opacity);
            fill(this.circleFillHover, this.opacity);
        }
        if (this.circleNoFill) {
            noFill();
        }
        circle(this.x, this.y, 2 * this.r);
        // draws text ('char') inside circle
        noStroke();
        textAlign(CENTER);
        textSize(this.textSize);
        fill(this.charFill, this.opacity);
        if (this.isHovered()) {
            fill(this.charFillHover, this.opacity);
        }
        // if the char is X, offsets the letter down just slightly so it fits better inside the circle
        let yOffset = 0;
        if (this.char === 'X') {
            yOffset = this.r * (1 / 8);
            if (mobileMode) { yOffset -= 1; }
        }
        text(this.char, this.x, this.y + (this.r / 2) + yOffset);
    }

    // sets location (x & y of center of button)
    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    // sets the style for the button based on string argument
    setStyle(str) {
        //     print(`running setStyle on ${this.char}, style = ${str}`);
        if (str === 'hintButtonActive') {
            this.circleStrokeWeight = 1.5;
            this.circleStroke = 192;
            this.circleStrokeHover = 255;
            this.circleFill = 192;
            this.circleFillHover = 192;
            this.circleNoFill = false;
            this.charFill = 255;
            this.charFillHover = 255;
            this.char = 'X';
            return;
        }
        if (str === 'hintButtonInactive') {
            this.circleFill = 255;
            this.circleFillHover = 255;
            this.circleStroke = 192;
            this.circleStrokeHover = 0;
            this.charFill = 192;
            this.charFillHover = (192 / 2);
            this.circleNoFill = false;
            this.char = '?';
            return;
        }
        if (str === 'h1or2ButtonActive') {
            this.circleFill = 192;
            this.circleFillHover = 192;
            this.circleStroke = 255;
            this.circleStrokeHover = 255;
            this.charFill = 255;
            this.charFillHover = 255;
            this.circleNoFill = false;
            if (mobileMode) {
                this.circleStrokeWeight = 2;
            }
            return;
        }
        if (str === 'h1or2ButtonInactive') {
            this.circleFillHover = 255;
            this.circleStroke = 192;
            this.circleStrokeHover = 255;
            this.charFill = 192;
            this.charFillHover = 255;
            this.circleNoFill = true;
            if (mobileMode) {
                this.circleStrokeWeight = 2;
            }
            return;
        }
        if (str === 'h1or2ButtonInactiveViewed') {
            this.circleFill = 192;
            this.circleFillHover = 192;
            this.circleStroke = 192;
            this.circleStrokeHover = 255;
            this.charFill = 255;
            this.charFillHover = 255;
            this.circleNoFill = false;
            return;
        }
        if (str === 'closeButtonMobile') {
            this.circleFill = 192;
            this.circleFillHover = 192;
            this.circleStroke = 192;
            this.circleStrokeHover = 255;
            this.charFill = 255;
            this.charFillHover = 255;
            this.circleStrokeWeight = 2;
        }
        if (str === 'hintButtonMobile') {
            this.circleFill = 192;
            this.circleFillHover = 192;
            this.circleStroke = 192;
            this.circleStrokeHover = 255
            this.charFill = 255;
            this.charFillHover = 255;
            this.circleStrokeWeight = 2;
        }
        if (str === 'hintButtonMobileNoHints') {
            this.circleNoFill = true;
            this.charFill = 192;
            this.circleStroke = 192;
            this.circleStrokeWeight = 2;
        }
    }

    // returns true if mouse is currently hovering over this rebus
    isHovered() {
        if (dist(mouseX, mouseY, this.x, this.y) <= this.r) {
            return true;
        } else {
            return false;
        }
    }
}