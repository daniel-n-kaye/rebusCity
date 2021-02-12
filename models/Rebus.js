////////////////////////////////////////////////////////////////////////////////
// Rebus Class /////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// class to hold all rebus objects

class Rebus {
    constructor(img, fileName, index) {
        this.index = index; // stores originally loaded index, useful once rebus order is randomized
        this.fileName = fileName; // for image, including extension
        let splitFileName = split(fileName, '/'); // splits full path by folders (aka by backslasshes)
        let rebusNameWithExtensionAndPrefix = splitFileName[splitFileName.length - 1]; // grabs just rebus name, which is the last portion of the file path
        let rebusNameWithPrefix = split(rebusNameWithExtensionAndPrefix, '.')[0]; // removes file extension
        this.name = rebusNameWithPrefix.substring(6); // remove '_rebus' prefix, saves just name (category) and number
        this.image = img; // .jpg

        // topleft corner of where the rebus will be drawn from
        //TODO: Refactor this to use a 2d vector object instead of 2 variables
        this.xLoc = -240; // sets initial location off the canvas, so it can't accidentally be picked up by isHovered()
        this.yLoc = -240;

        this.active = false; // is thie currently the active (clicked on) rebus?
        this.solved = false; // has this rebus been solved?
        this.showHints = false;
        this.incorrectAnimationTimer = 0; // used to animate red rectangle when rebus is answeres incorrectly
        this.hoverDuration = 0;  // used to know how long the mouse/finger has been hovered over this rebus, used for time-delayed animations

        // each rebus can fit into multiple categores
        this.category = rebusDataTable.getString(index, 'category');
        this.subCategory = rebusDataTable.getString(index, 'subCategory');
        this.secondCategory = rebusDataTable.getString(index, 'secondCategory');
        this.secondSubCategory = rebusDataTable.getString(index, 'secondSubCategory');
        this.hint1 = rebusDataTable.getString(index, 'hint1');
        this.hint2 = rebusDataTable.getString(index, 'hint2');
        this.hint1Active = false;
        this.hint2Active = false;
        this.hint1Viewed = false; // true if hint1 has been viewed by user
        this.hint2Viewed = false; // true if hint2 has been viewed by user
        this.numOfHints = 0;  // records total number of hints this rebus hasOwnProperty
        // calculates number of hints this rebus has, and stores it in object variable (if a string is null (aka - there is no hint entered in the data table)) then the conditional evaluates to false, otherwise it's true
        if (this.hint1) { this.numOfHints += 1; }
        if (this.hint2) { this.numOfHints += 1; }
        // answer that is accepted and displayed once rebus is solved
        this.answer = rebusDataTable.getString(index, 'answer');
        // list of all other possible accepted (but never displayed) answered
        this.alternateAnswers = [];
        //for loop to populated alternateAnswers list from data table
        for (let i = 0; i < 15; i++) {
            if (rebusDataTable.getString(index, 'alternateAnswer' + (i + 1))) { // if that alternat eanswer exists...
                this.alternateAnswers.push(rebusDataTable.getString(index, 'alternateAnswer' + (i + 1))); // add it to the alternate answers list array
                //         print(i + ' ' + this.alternateAnswers[i]);
            } else { i = 15; }  // ends the loop if you've reached the end of the alternate answers for this rebus
        }
        //     print(this.alternateAnswers);
        // hints available to user if they cannot solve (but will incur point deduction somehow)
        this.hint1 = rebusDataTable.getString(index, 'hint1');
        this.hint2 = rebusDataTable.getString(index, 'hint2');
    }

    /**
     * Extracts the name of this rebus from the given file name
     * Example: fileName: "data/images/rebus_architecture_00.jpg" --> becomes "architecture_00"
     * @param {string} fileName file name parat
     * @returns {string} rebus name
     */
    getRebusNameFromFileName(fileName) {
        let splitFileName = split(fileName, '/'); // splits full path by folders (aka by backslasshes)
        let rebusNameWithExtensionAndPrefix = splitFileName[splitFileName.length - 1]; // grabs just rebus name, which is the last portion of the file path
        let rebusNameWithPrefix = split(rebusNameWithExtensionAndPrefix, '.')[0]; // removes file extension
        let name = rebusNameWithPrefix.substring(6); // remove '_rebus' prefix, saves just name (category) and number
        return name;
    }



    // draws this rebus to the screen
    drawRebus(x, y) {
        this.xLoc = x;  // top left corner to start drawing rebus
        this.yLoc = y;  // top left corner to start drawing 
        //     print(`${this.xLoc}, ${this.yLoc}`);
        // keeps track of how long the rebus has been hovered over
        this.incrimentHoverTimer();
        // draws rebus
        image(this.image, this.xLoc, this.yLoc, rebusSizeCurrent, rebusSizeCurrent);
        // draws red rectangle if an incorrect guess was recently entered
        if (this.incorrectAnimationTimer > 0 && desktopMode) {
            noStroke();
            fill(255, 0, 0, this.incorrectAnimationTimer)
            rect(this.xLoc + 1, this.yLoc + 1, rebusSizeCurrent - 2, rebusSizeCurrent - 2, 5);  // '-1' prevents the red from appearing outsid ethe active rebus outline...
            this.incorrectAnimationTimer -= 2;
        }
        // draws rebus differently if it's 'active' aka been clicked on
        // mobile mode active rebuses are drawn on top of everything else, through another function in the draw() loop
        if (this.active) {
            // draws outline rectangle
            stroke(217);
            strokeWeight(3);
            noFill();
            // screens out the rebus image IF user if the rebus's hint menu is currently active && their not using a mobile device
            if (this.showHints && desktopMode) {
                fill(0, (255 * 0.75));
            }
            rect(this.xLoc + 2, this.yLoc + 2, rebusSizeCurrent - 4, rebusSizeCurrent - 4, 5);  // +2 & -4 requried so outline doesn't got outside canvas and get slightly cutoff
            // draws input text box, location based on the rebus's X & Y location in desktop mode
            drawTextInputBox(this.xLoc, this.yLoc);
            // draws hint button(s), screen, and hint text
            this.drawHintButtons();
        }
        // if mouse is hovered of a rebdeaus && it's not the active rebus... (only on desktop mode)
        if (this.isHovered() && !this.active && desktopMode && !this.solved && currentMode === 'rebusMode') {
            // draws translucent white rectangle over hovered rebus to slightly dim it's appearance
            fill(255, 150);
            noStroke(1);
            rect(this.xLoc, this.yLoc, rebusSizeCurrent, rebusSizeCurrent, 5);
        }
        // if this rebus has been solved, draw green rectangle over it
        if (this.solved) {
            noStroke();
            fill(0, 255, 0, 25); // green transparent fill
            if (this.hint1Viewed || this.hint2Viewed) { // if either hint has been used
                fill(100, 255, 25, 25);  // use green/yellow transparent fill instead
            }
            if (this.hint1Viewed || this.hint2Viewed) { // if both hints has been used
                fill(150, 200, 50, 25);  // use yellow/green transparent fill instead
            }
            rect(this.xLoc + 1, this.yLoc + 1, rebusSizeCurrent - 2, rebusSizeCurrent - 2);
        }
    }

    drawHintButtons() {
        // sets location of hint button (relative to the active rebus's location on desktop mode)
        if (desktopMode) {
            let buttonSpacing = hintButton.r * 2.5;
            let xOffset = rebusSizeCurrent * 0.075;
            let yOffset = rebusSizeCurrent * 0.075;
            hintButton.setLocation(this.xLoc + xOffset, this.yLoc + yOffset);
            h1Button.setLocation(this.xLoc + xOffset, this.yLoc + yOffset + buttonSpacing);
            h2Button.setLocation(this.xLoc + xOffset, this.yLoc + yOffset + (buttonSpacing * 2));
        } else
            // hint button location is fixed in mobile mode, based on the device's screen/window dimensions
            if (mobileMode && isARebusIsCurrentlyActive) {
                hintButton.r = closeButton.r; // make hintButton match the radius of closeButon (so they're the same size);
                hintButton.setLocation(width - (rebusSizeCurrent / 4), (10 + hintButton.r) * 2.6); // sets location of hint button on mobile screens (top left, opposite of close button)
            }
        // determines opacity of first hint button, based on proximity of mouse (desktop mode only)
        if (desktopMode) {
            let d = dist(mouseX, mouseY, hintButton.x, hintButton.y);
            let opacity = 0;
            let proximity = rebusSizeCurrent / 2;
            if (d < proximity || this.showHints) {  // if the mouse is close to the hint button, OR showHint mode is turned on (aka the hint button was clicked and "hintmode' (hints are currently being shown) is on)
                opacity = map(d, 0, proximity, 255, 0);
                if (this.showHints) { opacity = 255; }  // if the hint button is clicked on before the button-fade-in is complete, finish the fade in by setting the opacity to 255
                hintButton.opacity = opacity;
                // draws main hint button
                hintButton.draw();
            }
        }
        // if the hint button has been clicked on...
        if (this.showHints && desktopMode) {
            // draws the number of hints used, and all the hints and their buttons
            let usedHints = this.numOfHintsUsed();
            let hintTextXLoc;
            let hintTextYLoc;
            noStroke();
            // position & formatting of hints remaining text on desktop mode
            fill(192);
            textAlign(LEFT);
            textSize(12);
            hintTextXLoc = this.xLoc + (0.15 * rebusSizeCurrent);
            hintTextYLoc = this.yLoc + (0.105 * rebusSizeCurrent);
            text('Hints: ' + usedHints + ' / ' + this.numOfHints, hintTextXLoc, hintTextYLoc);
            if (this.numOfHints > 0) { h1Button.draw(); }
            if (this.numOfHints > 1) { h2Button.draw(); }
        }
    }

    // returns true if the mouse is hovered of this rebus
    isHovered() {
        let bool = false;
        // checks mouse X & Y location (relative to canvas) against location at which rebus is drawn
        if (mouseX > this.xLoc && mouseX < this.xLoc + rebusSizeCurrent &&
            mouseY > this.yLoc && mouseY < this.yLoc + rebusSizeCurrent) {
            bool = true;
        }
        return bool;
    }

    // keeps track of how long the rebus has been hovered over
    incrimentHoverTimer() {
        if (this.isHovered()) {
            this.hoverDuration += 1;
        } else {
            // resets hover counter if mouse is no longer over this rebus
            this.hoverDuration = 0;
        }
    }

    // returns number of hints that have been used
    numOfHintsUsed() {
        let x = 0;
        if (this.hint1Viewed) {
            x += 1;
        }
        if (this.hint2Viewed) {
            x += 1;
        }
        return x;
    }
}