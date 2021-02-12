////////////////////////////////////////////////////////////////////////////////
// rectangular button Class ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// used for confirmation of clear data, and taht's it so far...

class ButtonRectangular {
    constructor(t) {
        this.w = 100; // width (px)
        this.h = 20;  // height (px)
        this.x = -this.w; // x location (top-left) - defaults button to display offscreen
        this.y = -this.h; // y location (t)op left) - defaults button to display offscreen
        this.t = t; // text to display inside button
    }

    // draws button
    draw() {
        // draws outer circle
        stroke(192);
        strokeWeight(1.5);
        fill(255);
        if (this.isHovered()) {
            stroke(0);  // makes button black if mouse if hovered
        }
        rect(this.x, this.y, this.w, this.h, 5);
        // draws text
        textAlign(CENTER);
        noStroke();
        fill(192);
        if (this.isHovered()) {
            fill(0);  // makes button black if mouse if hovered
        }
        textSize(14)
        if (mobileMode) { textSize(24); }
        text(this.t, this.x + (this.w / 2), this.y + (this.h / 2) + 4); // 7 = textSize / 2
    }

    // sets location (x & y of center of button)
    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    // sets the button's width and height
    setSize(w, h) {
        this.w = w;
        this.h = h;
    }

    // returns true if mouse is currently hovering over this button
    isHovered() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h) {
            return true;
        } else {
            return false;
        }
    }
}