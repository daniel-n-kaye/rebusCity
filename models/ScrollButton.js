
////////////////////////////////////////////////////////////////////////////////
// scroll button arrow class ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// used on desktop mode for clickable scrollup and scroll down buttons

// scroll up and down arrows for desktop mode
class ScrollButton {
    constructor(dir) {
        this.direction = dir;
        // size of arrow containing box
        this.arrowWidth = 50;
        this.arrowHeight = 10;
        this.opacity = 0;
        this.opacityTimer = 0;
        this.setValues(); // sets values used to draw arrow
        this.topY;
        this.bottomY;
    }

    setValues() {
        this.pointY;  // y value of point of arrow
        this.dir = 1; // direction of arrow multiplication vector
        if (this.direction === 'up') {
            this.pointY = 10;
            this.topY = this.pointY;
            this.bottomY = this.topY + this.arrowHeight;
        } else
            if (this.direction === 'down') {
                this.pointY = height - 10;
                this.dir *= -1; // allows me to use same formula below to make both up and down arrow vectors
                this.bottomY = this.pointY;
                this.topY = this.bottomY - this.arrowHeight;
            }
    }

    draw() {
        // styles arrow
        strokeWeight(2.5);
        noFill();
        let distToMouse = dist(mouseX, mouseY, width / 2, this.pointY);
        // if mouse is not close to button, and the rebuses haven't been recently scrolled (opacityTimer)...
        if (this.opacityTimer <= 0 && distToMouse > rebusSizeCurrent / 2) {
            return; // don't draw the arrow, and end the function here
        }
        // maps opactiy based on distance to mouse
        this.opacity = map(distToMouse, 0, rebusSizeCurrent / 2, (255 * 0.5), 0);
        // if the opacity timer is not active...
        if (this.opacityTimer <= 0) {
            // set the opacity based on distance only
            stroke(0, this.opacity);
        } else
            // if the opacity time is active...
            if (this.opacityTimer > 0) {
                // use whichever is darker to set the opacity, but continue to incrimentally decrease the opacity timer
                stroke(0, max(this.opacity, this.opacityTimer));
                this.opacityTimer -= 5;
            }
        if (this.isHovered()) {
            stroke(0, 255);
        }
        // draws arrow
        beginShape();
        vertex(width / 2 - this.arrowWidth / 2, this.pointY + this.dir * this.arrowHeight);
        vertex(width / 2, this.pointY);
        vertex(width / 2 + this.arrowWidth / 2, this.pointY + this.dir * this.arrowHeight);
        endShape();
    }

    // returns true if mosue is currently hovered over this arrow, otherwise returns false
    isHovered() {
        let bool = false;
        if (mouseX > width / 2 - (this.arrowWidth / 2 - 5) &&
            mouseX < width / 2 + (this.arrowWidth / 2 + 5) &&
            mouseY > this.topY - 5 &&
            mouseY < this.bottomY + 5) {
            bool = true;
        }
        return bool;
    }
}