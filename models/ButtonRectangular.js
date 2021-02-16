////TODO: label/comment these, and possibly put them inside the button rectangular class somehow?
//const rectangularButtonWidth_desktopMode = 100;
//const rectangularButtonWidth_mobileMode = 130;
//const rectangularButtonHeight_desktopMode = 20;
//const rectangularButtonHeight_mobileMode = 50;


/** Rectangular button object drawn with p5.js methods (NOT a DOM element)
 * currently only used for confirmation of 'clear data' */
class ButtonRectangular {
    /**
     * Constructs a new rectangular button object that displays the given text
     * @param {string} text
     * @param {boolean} isDesktopMode true if the app is currently in desktop mode, otherwise false, meaning the app is in mobile mode
     */
    constructor(text, isDesktopMode) {

        /** rectangular button's width (px)
         * @type {number} */
        this.width;

        // set width to default value, based on weather we are in desktop or mobile mode
        if (isDesktopMode) this.width = ButtonRectangular.WIDTH_DESKTOP;
        else this.width = ButtonRectangular.WIDTH_MOBILE;

        /** rectangular button's height (px)
         * @type {number} */
        this.height;

        // set height to default value, based on weather we are in desktop or mobile mode
        if (isDesktopMode) this.height = ButtonRectangular.HEIGHT_DESKTOP;
        else this.height = this.ButtonRectangular.HEIGHT_MOBILE;

        /** position of top-left corner of button (px)
         @type {number} */
        //? Can we instead have a show/hide property or something? This is p5js mimicing weird CSS workarounds, which I don't think we need
        this.position = new XYPosition(-this.width, -this.height); // defaults the button location to be off-screen

        /** text to display inside button
         * @type {string} */
        this.text = text;
    }

    /** Draws button to canvas */
    draw() {
        //! draws rectangle
        stroke(192);
        strokeWeight(1.5);
        fill(255);
        if (this.isHovered())
            stroke(0);  // makes button outline black if mouse if hovered over button
        rect(this.position.x, this.position.y, this.width, this.height, 5);

        //! draws text
        textAlign(CENTER);
        noStroke();
        fill(192);
        if (this.isHovered()) fill(0);  // makes text color black if mouse if hovered over button
        textSize(14)
        if (isMobileMode()) textSize(24);
        text(this.text, this.position.x + (this.width / 2), this.position.y + (this.height / 2) + 4); // 7 = textSize / 2
    }

    /**
     * sets location (top-left corner) of button (px)
     * @param {number} x
     * @param {number} y
     */
    setLocation(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    /** 
     * Resizes this button's width and height based on whether the appi sin desktop or mobile mode
     * @param {boolean} isDesktopMode true if the app is currently in desktop mode,
     * otherwise false (meaning the app is currently in mobile mode)
     */
    resize(isDesktopMode) {
        if (isDesktopMode) {
            this.width = rectangularButtonWidth_desktopMode;
            this.height = rectangularButtonHeight_desktopMode;
        } else {
            this.width = rectangularButtonWidth_mobileMode;
            this.height = rectangularButtonHeight_mobileMode;
        }
    }

    /**
     * returns true if mouse is currently hovering over this button, otherwise returns false
     * @returns {boolean}
     */
    isHovered() {
        if (mouseX > this.position.x && mouseX < this.position.x + this.width &&
            mouseY > this.position.y && mouseY < this.position.y + this.height) {
            return true;
        } else {
            return false;
        }
    }
}

// Decalre static properties
//? Is there a better way to declare class static properties, and to actually make them non-editable?
/** rest intellisense */
ButtonRectangular.WIDTH_DESKTOP = 100;
ButtonRectangular.WIDTH_MOBILE = 130;
ButtonRectangular.HEIGHT_DESKTOP = 20;
ButtonRectangular.HEIGHT_MOBILE = 50;