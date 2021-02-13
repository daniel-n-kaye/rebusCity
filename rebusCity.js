//#region ABOUT

////////////////////////////////////////////////////////////////////////////////
// About ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Title: Rebus City
// Author: Daniel Kaye
// Author Site: http://www.dnkaye.com/
// Latest Stable Release: 05/27/2020
// Version: Beta 1.0.5
//
// What is it?
//  Rebus City is an attempt to create an interactive catelog of (most) of the
//  rebus puzzles created by Daniel Kaye, in website form, using javascrip and
//  p5.js
//
// What is a rebus puzzle?
//  A rebus puzzle is a collections of letters, symbols, and images that add up
//  to a known word or phrase, sometimes relating to a particulat topic or
//  category, for example 'coding' or 'snowboarding'
//
// What can you do on this site?
//  You can browser and attempt to solve rebus puzzles, while thes site lets you
//  know if you've entered a correct or incorrect answer, how many you've solved,
//  privdes hints, and other random statistics.
//  
// My Coding Style Guide:
//  TODO: Update to use new Visual Studios standards
//  comments after OR above the line they're about
//  no code longer than 80 charecters ('cept paths & comments)
//  no empty lines within a function
//  one empty line between functions
//  three empty lines before new section

//#endregion ABOUT

//#region TODO
//TODO: Move this all to a seperate word or log file, I think
// RECENTLY ADDED FEATURES ////////////////////
//
//  X-add js unit tests somehow
//  X add to github and share with greg
//  X-add copyright rebus city 2020 in footer (right in the middle?)
//  X-add warning for IE users before trying to load page ('IE doesn't support ES6)
//
//  1.0.5 5/27/20
//
//  XX-Added Hints
//  XX-Mouse WHeel and finger swipe velocity-based scrolling
//  X-fix strongest category stat to count for ties!
//  X-click outside an active rebus, desktop or mobile, deactivates that rebus
//  X-added gif to replace preload 'Loading...' text
//  X-left-right arrowkeys scroll single rebuses (if user's device has a keyboard)
//  X-Added Tony's Birthday to SSBP Database (See: function SSBP())
//  X-autoscroll when a rebus partially offscreen is selected
//  X-scroll also only by row, for PC browser windows that have less than 3 rows (OR just decrease rebus size based on window height, maybe???)
//  X-Up and Down scroll buttons on desktop mode, fade in with mouse proximity, also activated by arrowkeys
//
//  1.0.4 4/19/20
//
//  X-Added flavicon
//  X-Made clicking/touches sort-of work on iphones/ipads, and fixed some outstanding clikc/touch/textbox focus issues
//
//  1.0.3 4/15/20
//  X-up'd number of alternate answer max from 8 to 16, and saved some effeciency inside the loop where they're loaded
//
//  1.0.2 4/15/20
//  X-made categories list & category dropdown menut & rebus filter include  each rebus' second category too, if it has/had one
//
//  1.0.1 4/15/20
//  X-made 'touch' on ipads/safari trigger 'mousePressed function, attempt to fix bug for one user
//
//  1.0.0 4/13/20
//  X-hamburger menu for mobile
//  X-completed rebus count
//  X-more (funny) stats
//  X-little x to exit out of an active rebus on mobile
//  X-warning before cleaning all data
//  X-accept alternate answers
//  X-about placeholder
//  X-contact placeholder
//  X-save stat data between sessions
//  X-reset scale when rotateing from landscape back to portraite on a phone (or just prevent rotate into landscape mode FOR NOW?), or just a warning???
//  X-logo
//  X-add dropdown arrow to dropdown menus
//  X-make sure hash doesn't prevent back-button usage from main page, or on desktop
//
//  XX-make options menu display 'Menu' when not in use (not stats)
//  XX-after choosing 'yes' or 'no' from clear screen on a phone, it also selects the rebus you tapped beneath....need to fix
//
//
//  THINGS TO CHANGE/FIX FOR NEXT RELEASE ////////////////////////
//
//  THINGS THAT MIGHT BE FIXED/CHANGED FOR NEXT RELEASE ////////////////////
//
//  -mobile l/r buttons as opposed to swiping
//  -mobile l/r swiping animation
//  -make rebuses 'breath' when mouse is hovering over them
//  -save previous category and active rebus name
//  
//  THINGS TO BE CHANGE/FIXED EVENTUALLY...  ////////////////////
//
//  -custom dropdown menus (not native HTML select, they're not customizeable
//    enough for my liking)
//  -contact page (design and impliment as html element probs, same for all below)
//  -shop page (design and impliment)
//    -(popup after completing 9 rebuses,
//    -select rebuses like images to pick which go on your shirt/coaster
//  -donate page (design and impliment) - say "things I will do with your money: buy tacos... gain beliefe that I can turn a life-long puzzle passion into a sustainable career" - "things I won't do: gotta think fo something funny here..."
//  -about page (design and impliment)
//  -donate placeholder
//  -shop placeholder
//  -fine-tune hashing/backbutton issue
//  -download save file to user's PC just incase - and allow user to upload if they want
//  -hide/encode answers in csv somehow?
//  -smooth out scrolling more that one 'set' (of 9 rebuses) with mousewheel/pad (don't slow down inbetweenthose scrolls??)
//  -subcategories - maybe add dropdown?// actually switch to 'tags' then each rebus can have unlmited categories. still need something for specific subcategeories, like RRG climbing puzzles though
//  -fade in rectangle outline for active rebuses in desktop mode
//  -Center displayed rebuses? display partial rebuses above if you can scroll up, or some other indication
//  -stop double scroll when using mousepad...
//  -add 'filter out solved/unsolved' (gotta design it somehow)
//  -first time visiting? show rebus examples (centered) first, maybe with a popup about hints and a way to skip past it?
//  -way to share a rebus (send .jpg, and insta + website links?)
//  -slighty animation (rubberbanding) when user is at top/bottom but tries to keep scrolling
//  -slight animation when user tries to scroll left/right but there's not more
//  -mobile, have the last puzzle selected highlighted so you can see it after a user exits active rebus mode (maybe fades out?)
//  -prevent autofill sugggestions in mobile browsers in input box
//  -a few encouraging popups once you've solved enough rebuses! (like, man, that's the harders one, nice job!) or when you complete a full category
//  -popups when you reach a new rebus rank ('see stats for more info' suggestion too)
//  -styling of input box across mobile/esktop browsers
//  -category search box in categoryDropdown (maybe with custom non-select menu?)
//  -shuffle order (or at least make new ones appear on top?, with 'new' badge_
//  -category dropdown green when all have been solved, or has a progress bar (green rectangle overlay representing % complete) or a little number like (2/6)
//  -add facebook links (after making fb page)
//  -make mobile landscape mode on a mobile device more appropriate for a phone, right now it just displays the standard desktop mode
//  -on desktop, two clicks required to go back to last website, any way to make it jsut one?
//  -make hints visible if a rebus has been solved, after hovering, just like the answer, but if you view them it doesn't set them to viewwed/used or adjust any of the stats of hintsused and solvedWithoutHints
//  -close enough spelling algorythm (see:  Llevenshtein Distance)
//  -make close button respond to window size change responsivley (add to resizeWindowResponsivley)
//  -scroll bar (or other scroll indication?)
//  -option to select, download, and share up to 9 at once - or 12 - creates a 8.5  x 11 (or a4) with their selected rebuses, and my logo
//  -use list of categories instead of first/second/third, ect
//  -refactor all x/y objects to use a single 2d vector object instead of two different variables for x and y
//  -*Update all methods using intellisense comments for visual studios
//  -fix 'X' location button for active rebus in mobile - doesn't adapt when i flex browser screen size!
//  -fix 'x' button for all about/hint/contact windows = use two lines instead of an 'x' charecter, becaues often it's not centered, and the font could change!
//  -namespace all p5 variables
//  -Convert lost of simple x/y postion vectors to my own 2dposition class! (then they'll show up in intellisense, and if i dont' need all the extra data/properties taht come with a p5.vector object, why use em? I can easily switch it out anytime to, just by changing the point where it's constructed, as long as i keep the .x and .y syntax the same!)
//  -refactor all stat variables into a (view) model (see todo comments in that area!)

// #endregion TODO

//#region GLOBAL VARIABLES

//#region GLOBAL VARIABLES - DEBUG AND TESTING

//? Is there a way to do #IF DEBUG, like in C#? I haven't found one yet.

/** when true, unit tests will be run 
 @type {boolean} */
let runUnitTests = true; //! Change to false before release!
//let runUnitTests = false; //! Change to true to test!

//#endregion GLOBAL VARIABLES - DEBUG AND TESTING

//#region GLOBAL VARIABLES - LOADING

/** (p5.Table) holds imported csv data table as p5 table objects */
let rebusDataTable;

/** internal path to .csv file of rebus data table info
 @type {string} */
const csvPath = 'data/rebusCityDataTable.csv';

/** internal path to .csv file of rebus tank names
 @type {string} */
const rebusRankCsvPath = 'data/rebusRanks.csv';

/** (p5.Image) image to display while loading */
let loadingImage;

/** true while rebus images and data tables are still loading 
 @type {boolean} */
let loading = true; // set to false once all rebus images have loaded

/** counter to keep track of number of rebus images that have finished loading.
 * Used to calculate loading bar animaion 
 * @type {int} */
let loadingCounter = 0; // 

//#endregion GLOBAL VARIABLES - LOADING

//#region GLOBAL VARIABLES - REBUS DATA

/** stores total number of rebuse puzzles, before the rebuses object array is created
 * @type {number}*/
let totalNumberOfRebuses;

/**
 * Array of all rebus objects
 * @type {Rebus[]} of rebuses}
 * */
let rebuses = []; // stores array of all rebus objects

/** stores the list of currently filtered rebus indices
 * @type {number[]} */
let filteredRebusIndices = []; // stores the list of currently filtered rebus indices

/** true when a rebus is currently selected/active
 * @type {boolean} */
let isARebusIsCurrentlyActive = false;

/** stores index of currently active rebus 
 * @type {number} */
let activeRebusIndex;

/** stores index of currently active rebus IN THE FILTERED ARRAY
 * @type {number} */
let activeFilteredRebusIndex;

/** stores array of categories to be used for filtering rebuses,
 * populated from rebus data table
 * @type {string[]} */
let categories = [];

/** only rebuses that match this current category are drawn
 *  @type {string} */
let currentCategory = 'General';

/** Y value at which to draw the first rebus puzzle (used to control scrolling)
 * @type {number} */
let startingY = 0;

/** largest a rebus should get (px) (rebus won't look good if any bigger).
 * Rebuses are square, so a height variable sin't needed
 * @type {number} */
const rebusSizeMax = 180;

/** stores current width of a rebus (changes responivley based on screen size)
 * @type {number} */
let rebusSizeCurrent = 180;

/** spacing (px) between rebuses in desktop mode.
 * (there is no spacing inbetween rebuses in mobile mode)
 * @type {number} */
const spacingBetweenRebusesDesktop = 25;

/** current horizontal spacing based on screen size.
 * This should either be spacingBetweenRebusesDesktop or '0'
 * (because there is no spacing inbetween rebuses in mobile mode)
 * @type {number} */
let spacingBetweenRebusesCurrent = 25;

/** width & height of active rebus images when displayed in mobile mode.
 * can change, based on the currnet screen or window size
 * @type {number} */
let activeRebusSizeMobile = rebusSizeCurrent * 2;

/** Position (px) of top-left corner of active rebus image when drawing on mobile mode.
 *  x value doesn't matter, it will be set in the 'resize' funtion(s), based off of the browser's screen size
 * @type {XYPosition} */
let activeRebusPositionMobile = new XYPosition(0, 10);

/** Stores the number of full rebuses that fit on the current screen.
 * Recalculated every time window is resized.
 * @type {number} */
let numOfRowsThatFitOnscreen;

/** height (px) of a single row of rebuses, included buffer space below that row.
 * Updated whenever screen size changes.
 * @type {number} */
let rowHeight;

/** number of rows of rebuses in the current category. (filteredRebuses.length / 3, rounded up).
 * Updates when category is changed 
 * @type {number} */
let numOfRows;

//#endregion GLOBAL VARIABLES - REBUS DATA

//#region GLOBAL VARIABLES - INPUT TEXT BOX PROPERTIES

/** height of text box on mobile devices (px)
 * @type {number} */
const textBoxHeightMobile = 40;

/** Location (px) of top-left corner of input text box on mobile devices.
 *  It's initial values don' tmatter, they will be set based on the screen size in the 'screen resized' functions
 * @type {XYPosition} */
let textBoxPositionMobile = new XYPosition(0, 0);

//#endregion GLOBAL VARIABLES - INPUT TEXT BOX PROPERTIES

//#region GLOBAL VARIABLES - ANIMATION AND SCROLLING

/** true if user is currently swiping their finger
 * @type {boolean} */
let isUserCurrentlySwiping = false;

/** true if rebus list is currently scrolling
 * @type {boolean} */
let areRebusesCurrentlyScrolling = false;

/** Amount (px) more needed to be scrolled.
 * Can be positive (down) or negative (up)
 * @type {number} */
let scrollDistanceRemaining = 0;

//? how exactly is this used?
/** number of times the native scrolling event (mouse wheel / touchpad swipe) is fired per 100ms.
 * Note: Originally, I was using the 'value' of the scroll event, but it is incredible inconsistent between browsers,
 * so I found using the number of times the even is fired to me more effective in capturing the scroll rate (I think?)
 * @type {number} */
let scrollRate = 0;

/** Value of the startingY global variable at the moment when the use stared touching the screen
 * @type {number} */
let startingYValueWhenTouchStarted;

/** x,y position at which the current touch/swipe started
 * Initial values don't matter, they will be reset as soon as a touch is started
 * @type {XYPosition} */
let touchStartedPosition = new XYPosition(0, 0);

/** x,y position at which the current touch/swipe ended
 * Initial values don't matter, they will be reset as soon as a touch is ended
 * @type {XYPosition} */
let touchEndedPosition = new XYPosition(0, 0);

/** velocity in pixels / milisecond of current or last swipe
 * @type {number} */
let swipeVelocity = 0;

let swipeVelocityRemaining = 0; // remaining velocity to prope swiping

/** array of all past touches of current swipe
 * @type {PastTouch[]} */
let pastTouches = [];

//#endregion GLOBAL VARIABLES - ANIMATION AND SCROLLING

//#region GLOBAL VARIABLES - STATES
//! keep track of what type of device is being used
//  this way various functions can query this without using the media query and other checks used in the 'windowResized' function
//  also, toggled by the 'windowResized' function

//TODO: fix how enum types are represened in intellisense preview...
/** Enum representing what screen modes rebus city can be in.
 * Right now only two options: desktop or mobile */
const ScreenModes = Object.freeze({
    "desktopMode": 1,
    "mobileMode": 2
});

/** Current screen mode that this rebus city script is set to
 * @type {ScreenModes} */
let screenMode = ScreenModes.desktopMode;

/** Returns true if the screenMode is currently set to desktop mode */
let isDesktopMode = () => screenMode === ScreenModes.desktopMode ? true : false;

/** Returns true if the screenMode is currently set to mobile mode */
let isMobileMode = () => screenMode === ScreenModes.mobileMode ? true : false;

//! states - objects, only one can be active at a time, and that determains what's durrently being drawn
//? Do i still even need this?
//TODO:Refactor to be a sude javasript 'enum'

//TODO: fix how enum types are represened in intellisense preview...
/** Enum representing the various states that rebus city can be in. */
const States = Object.freeze({
    "rebusMode": 1,
    "statMode": 2,
    "clearMode": 3,
    "contactMode": 4,
    "aboutMode": 5,
    "loading": 6
});

/** The current state of the rebus city app.
 * Basically, the mode is what is being displayed/active right now. Rebus mode shows all the interactive rebus puzzles, about mode shows the 'about' window, ect
 *  @type {States} */
//TODO: Use this and add a 'loading' state to replace 'loading' bool?
let currentState = States.rebusMode;

//#endregion GLOBAL VARIABLES - STATES

//#region GLOBAL VARIALBES - BUTTONS

// buttons (as objects) used throughout program.
// Note, these are NOT DOM elements, just JS objects.

/** button with x used to close things
 * @type {ButtonRound} */
let closeButton;

/** rectangular button that says 'yes', used in confirming 'clear data'
 * @type {ButtonRectangular} */
let yesButton;

/** rectangular button that says 'no', used in confirming 'clear data'
 * @type {ButtonRectangular} */
let noButton;

/** circular button with question mark that displays hints
 * @type {ButtonRound} */
let hintButton;

/** fade-in scroll up arrow used in desktop mode
 * @type {ScrollButton} */
let scrollButtonUp;

/** fade-in scroll down arrow used in desktop mode
 * @type {ScrollButton} */
let scrollButtonDown;

/** scroll bar to incidate vertical position in currently active rebus list, interactive on desktop mode
 * @type {ScrollBar} */
let scrollBar;

//#endregion GLOBAL VARIALBES - BUTTONS

//#region GLOBAL VARIABLES - USER STATS
//TODO: refactor all these to be a view model? All can be fetchend whenever stats is opend, OR a rebus is solved, or whatever  instead of keeping track of each one, maybe on ebig function that is just 'refresh stats'

//TODO: Refactor into get function from list of rebuses, maybe? so I don't ahve to keep updataing. But I don't want to slow down the frame rate either
/** number of rebus puzzles that have been solved
 *  @type {number} */
let numberOfCompletedRebuses = 0;

//TODO: refactor to 'get' function'?
/** number of rebus puzzles the user solved without looking at their hints
 *  @type {number} */
let numberOfCompletedRebusesWithoutHints = 0;

//TODO: refactor to 'get' function'?
/** number of rebus puzzles that have been solved in the current category
 *  @type {number} */
let numberOfCompletedRebusesInCurrentCategory = 0;

//TODO: refactor to 'get' function'?
/** List of names of all solved rebuses (used for local storage i think, not the stats window)
 *  @type {string[]} */
let solvedRebusNames = [];

/** Used to help calculate the 'worst guess yet' stat
 *  @type {number} */
let numberOfIncorrectGuesses = 0;

//TODO: refactor to 'get' function'?
/** number of hints a user has used
 *  @type {number} */
let numberOfHintsUsed = 0;

//TODO: refactor to 'get' function'?
/** category that the user has solved the most rebuses in, based on quantity (not %)
 *  @type {string} */
let strongestCategory = 'none yet';

/** user's 'worst' incorrect guess made so far
 *  @type {string} */
let worstGuessSoFar = 'none yet';

/** stores time (in seconds) that this tab (in the browser) has been active.
 * Stored in, and retrieved from, user's browser's local storage and cummulative over time.
 *  @type {number} */
let totalTimePlaying = 0;

/** true if the tab with this script is active
 *  @type {bool} */
let isTabActive = true;

//TODO: refactor to 'get' function'?
/** time (seconds) it's taken user to solve each puzzle, on average
 *  @type {number} */
let rebusSolvingRate;

/** data table holding all of the rebus ranks imported from the rebus ranks .csv file
 * (type: p5.Table) */
let rebusRankDataTable;

/** array containing all rebus ranks.
 * Loaded from csv file during setup
 *  @type {string[]} */
let rebusRanks = [];

//TODO: refactor to 'get' function'?
/** stringified list of which hints for which rebuses have been used.
 * Used for saving to and loading from global storage (I think?)
 *  @type {string[]} */
let hintsUsed = [];

//#endregion GLOBAL VARIABLES - USER STATS

//#region GLOBAL VARIABLES - DOM ELEMENTS
// All DOM elements created within this script
// Stored as p5.element objects so their CSS properties and events/inputs can be used in p5.js functions
// ordered here from 'top' to 'bottom' (sort of)

/** DIV that contains all DOM navbar elements
 * (type: p5.Element) */
let navbar;

/** current height of nav bar (px)
 * updated based on the screen size, and whenever the screen size changes
 * @type {numbers} */
let navbarHeightCurrent = 40;

/** height of nav bar when in desktop mode (px)
 * @type {number} */
const navbarHeightDesktop = 40;

/** height of nav bar when in mobile mode (px)
 * @type {number} */
const navbarHeightMobile = 120;

/** <div> element that contains main canvas and text input box
 * (type: p5.Element) */
let container;

/** <p> element containing rebus city logo
 * (type: p5.Element) */
let logo;

/** <div> element, that conatins link element to @rebus.city instagram page
 * (type: p5.Element) */
let instagramLinkContainer;

/** URL to rebus city instagram page
 * @type {string} */
const instagramLinkURL = 'https://www.instagram.com/rebus.city/';

/** <a> element with istagram logo background, that linkes to @rebus.city instagram
 * (type: p5.Element) */
let instagramLinkIcon;

/** <select> element containing dropdown options menu
 * (type: p5.Element) */
let optionsMenu;

/** <select> element containing dropdown cateogry menu
 * (type: p5.Element) */
let categoryMenu;

/** <input> element for entering rebus solution guesses
 * (type: p5.Element) */
let textInputBox;

/** <p> element that contains and displays the hint string when needed
 * (type: p5.Element) */
let hintText;

/** <canvas> element that contains entire p5.js sketch!
 * (type: p5.Element) */
let canvas; // holds DOM canvas element

/** <div> footer element
 * (type: p5.Element) */
let footer;

/** height (px) of footer <div>
 * @type {} */
const footerHeight = 20;

/** <p> element dispalying current number of rebuses solved
 * (type: p5.Element) */
let totalScoreP; //

/** <p> element displaying current number of rebuses for current category solved
 * (type: p5.Element) */
let categoryScoreP;

/** <p> element containing current copyright year, goes in footer
 * @type {} */
let copyrightP;

//#endregion GLOBAL VARIABLES - DOM ELEMENTS

//#endregion GLOBAL VARIABLES

//#region PRELOAD

/** runs before setup(), script doesn't continue until everything in preload has finished loading.
 * (built in p5 method) */
function preload() {
    // loads rebus data table .csv file into p5.table object
    rebusDataTable = loadTable(csvPath, 'csv', 'header');
    // loading image, must preload so it can be displayed while everything else loads
    loadingImage = loadImage('data/thinkOutsideTheBox.jpg');
    // loads data table of rebus ranks
    rebusRankDataTable = loadTable(rebusRankCsvPath, 'csv', 'header');
}

//! these are actual setup functions......
//#region PRELOAD HELPER METHODS
// functions called/used during the preload() function


/** draws loading bar animation and loading logo/image */
function drawLoadingAnimation() {
    // draws loading bar rectangle fill based on number of images loaded
    noStroke();
    fill(170);
    rect(20, 40, ((width - 40) * (loadingCounter / totalNumberOfRebuses)), 20, 5);
    // draws outline of loading bar rectange
    stroke(0);
    noFill();
    strokeWeight(1);
    rect(20, 40, width - 40, 20, 5);
    // draws loading image
    noStroke();
    fill(192);
    textSize(16);
    textAlign(CENTER);
    text('Rebus City - Think Outside The Box',
        width / 2, height / 2 + rebusSizeMax / 2);
    // positions doesn't quite work on very small browser windows yet....
    image(loadingImage, width / 2 - rebusSizeMax / 2, height / 2 - rebusSizeCurrent,
        rebusSizeMax, rebusSizeMax);
}

//#endregion PRELOAD HELPER METHODS

//#endregion PRELOAD

//#region SETUP

/** Runs once, only after preload() is complete.
 * draw() may start before this function is complete.
 * (built in p5 method) */
function setup() {
    // saves total number of rebus puzzels to global variables
    //TODO: switch all other instances to rebuses[].length
    totalNumberOfRebuses = rebusDataTable.getRowCount();
    // loads all images and changes gloabl variable once all our loaded
    for (let i = 0; i < totalNumberOfRebuses; i++) {
        let imageFileName = 'data/images/' + rebusDataTable.getString(i, 'fileName')
        //loadImages(i, 'data/images/' + rebusDataTable.getString(i, 'fileName'));
        loadImages(i, imageFileName);
    }
    categories = createCategories(rebusDataTable, totalNumberOfRebuses); // creates category list
    // initializes Canvas of correct size (based on screen size), and ties DOM object to p5 variable
    //initializeCanvas();
    staticRefs.initializeCanvas();
    // creates all DOM elements and saves them all as p5.Element objects
    //TODO: group these all in one method
    rebusRanks = createRanks(rebusRankDataTable);  // creates array of rebus ranks (for stats page) from table
    createNavbar();
    createFooter();
    createLogo();
    createInstagramLink();
    createCategoryMenu();
    createOptionsMenu();
    createTextInputBox();
    createContainer();
    createTotalScoreP();
    createCategoryScoreP();
    createCopyrightP();
    createHintButtons();
    createHintText();
    createScrollButtons();
    createScrollBar();
    // performs initial resizing of all DOM elements (including canvas) based on device screen size
    resizeWindowResponsivly();  // this function is also called any time the window is resized
    setInterval(calcScrollRate, 100);
}

//#region SETUP - HELPER METHODS
// functions called within Setup()


/** Loads all rebus images (asyncronously).
* Then initiates all rebus objects using callbacks and closure
* (remind me to look up what 'javascript closure' is, not 100% sure how/why this works)
 * @param {any} index index of the rebus object who's image is being loaded
 * @param {any} fileName name of image file that corresponds to the rebus at rebuses[index]
 * */
function loadImages(index, fileName) {
    loadImage(fileName, imageLoaded); // loads each images, and runs 'imageLoaded' as a callback once each image is finished loading
    function imageLoaded(img) {  // takes a loaded image and...
        rebuses[index] = new Rebus(img, fileName, index); // initiayes a new rebus object with it, it's filename, and the original index that was used to load the image. the 'index' use useful inside the rebus object for finding later after shuffling the order of all the rebuses
        //     print(index + ' ' + fileName + ' at ' + floor(millis()));  // enable for loading error debugging
        loadingCounter++; // incriments the counter b/c another images has finished loading
        if (loadingCounter === totalNumberOfRebuses) { // once all iamges have loaded....
            //       loadingComplete(); // performs a number of actions that need to happen after loading is complere
            loading = false;  // changes global variable, affects drip() loop, b/c we are no longer in 'loading' mode
            print('Loading Complete');
            location.hash = 'loaded'  // required so i can override rist back button push to get back to this page from the mobile active rebus page;
            loadFromLocalStorage();  // loads any previously solved rebuses from user's browser's local storage
            footer.show();  // unhides footer, which is hidden while the loading animvaiton is being shown
            setInterval(calcTimePlaying, 1000);  // sets interval to call function that keeps track of how long user's been playing at rebus city ever 1000ms (aka every second)
            setInterval(updateScores, 1000); // updates scores every 1 second, ensures that update occurs AFTER loading local storage has completed (would make this a callback of the loadLocalStorageData function, but I'm not sure how)
            resizeWindowResponsivly();  // necesary to update numOfRowsThatFitOnscreen, and maybe other things
            scrollBar.calcLen();
            scrollBar.calcPos();
            //       print(rebuses);  // enable to check if rebus data loaded correctly
        }
    }
}

/** creats an array of all the categories, extrated from the rebus data table
 * @param {p5.Element} rebusDataTable data table containing all rebus information
 * @param {number} totalNumberOfRebuses total numnber of rebuses in data table
 * @returns {string[]} */
function createCategories(rebusDataTable, totalNumberOfRebuses) {
    // populates list of categories (avoids duplicates);
    let categories = [];
    categories[0] = 'All'; // sets first value of 'categories' array to the first line of the data table, used to start comparason
    // for every other line of the data table (hence why i starts at 1 and not 0)...
    for (let i = 1; i < totalNumberOfRebuses; i++) { // for each line in the data table....
        if (!(categories.includes(rebusDataTable.getString(i, 'category')))) { // if that line's category is NOT already included in the list of all categories...
            categories.push(rebusDataTable.getString(i, 'category'));  // add it to the lst of all categories
        }
        if (rebusDataTable.getString(i, 'secondCategory') != '' &&  // if the rebus has a second category &&
            !(categories.includes(rebusDataTable.getString(i, 'secondCategory')))) { // the second category is not already part of the categories list...
            //         print('adding second category!');
            categories.push(rebusDataTable.getString(i, 'secondCategory'));  // add it to the lst of all categories
        }
    }
    //   print(categories);
    return categories;
}

/** returns an array of all rebus ranks and saved to a global variable.
 * data extracted from p5 table object created for .csv
 * @param rebusRankDataTable (p5.table object) containing all rebus ranks
 * @returns {string[]} */
function createRanks(rebusRankDataTable) {
    let rows = rebusRankDataTable.getRows();
    let rebusRanks = [];
    for (let row of rows)
        rebusRanks.push(row.get(1));
    //print(rebusRanks); (debug)
    return rebusRanks
}

//#endregion SETUP - HELPER METHODS

//#endregion SETUP

//#region DRAW LOOP

////////////////////////////////////////////////////////////////////////////////
// Draw Loop ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// runs continiously (once per frame) after setup runs once
function draw() {
    if (loading) {  // if images are still loading...
        drawLoadingAnimation(); // draw the loading bar grphics
    }
    if (!loading) { // if all images have been loaded...
        // runs all unit tests once, IF the run unit test bool is true/enabled
        if (runUnitTests) {
            runUnitTests = false;
            runAllUnitTests();
        }
        background(255);  // redraw white background (to cover up previous images)
        if (touches.length > 0) drag();  // moves rebuses based on finger draw, if finger is currently pressed
        drawRebuses();  // draws grid of rebuses
        if (isMobileMode() && isARebusIsCurrentlyActive) { // if user is using a mobile device and one of the rebuses is active...
            drawActiveRebus();  // draw the active rebus
        }
        drawGUI();  // draws all graphic user interface objects
        if (swipeVelocityRemaining != 0)
            swipeAnimation();
    }
}

//#endregion DRAW LOOP


////////////////////////////////////////////////////////////////////////////////
// Window Resized //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 

// runsonce every tiem window is resized
function windowResized() {
    print('resizing window...');
    resizeWindowResponsivly();
    print('window has been resized');
}



////////////////////////////////////////////////////////////////////////////////
// Mouse Pressed ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// runs once every time a mouse button is pressed
function mousePressed() {
    // if rebuses are still loading...
    if (loading) return;  // end mousePressed function
    if (mouseButton === LEFT) {
        // if scroll bar was clicked on....
        if (scrollBar.isHovered()) {
            scrollBar.clickedOn();  // set scroll bar to clicked on mode (stays until mosue is released)
            deactivateAllRebuses(); // can't be scrolling with that silly textbox floating around // TODO: move so text box is only turned off if the textbos rebus goes partially off screen?
        }
    }
}

// runs once every time a mouse button is released
function mouseReleased() {
    print('mouse released started!');
    // if rebuses are still loading...
    if (loading) return;  // end mouseReleased function
    // if user is currently dragging scrollbar...
    if (scrollBar.clicked) {
        // release the scrollbar, end the mouseReleased function
        scrollBar.clicked = false;
        settle(); // resets rebus movement from dragging scroll bar
        return;
    }
    // prevents clicking on a rebus is user currently is swiping
    if (isUserCurrentlySwiping) {
        isUserCurrentlySwiping = false;
        print("user is swiping, can't click now");
        return;
    }
    // closes stats or clear screen if they're open and it's close button was clicked
    if (currentState !== States.rebusMode && closeButton.isHovered()) {
        currentState = States.rebusMode;
        print('exited back to rebus mode');
        return;
    }
    // clears all data if user selects yes, exits the 'clear all data' window if user selects no
    if (currentState === States.clearMode) {  // if clear all data window is currently being drawn...
        if (yesButton.isHovered()) {
            print('yes clicked');
            clearSavedData();
            currentState = States.rebusMode;
            return;
        } else
            if (noButton.isHovered()) {
                print('no clicked');
                currentState = States.rebusMode;
                return;
            }
    }
    // scrolls up or down if the up or down arrow was clicked on
    if (isDesktopMode()) {
        if (scrollButtonDown.isHovered()) {
            scrollDown();
            return;
        } else if (scrollButtonUp.isHovered()) {
            scrollUp();
            return;
        }
    }
    // detects if the active rebuses's main 'hint' button has been clicked on, and toggles it between a '?' and a 'X', also toggles the visibility of the hint1 and hint2 buttons below it
    // if the hint button is clicked on and a rebus is currently active (to prevent next condition from having a null index)
    if (hintButton) { // ensures hint button exists before testing weather it is hovered over (ex: if someone clicks during loading, it may not have been initialized yet)
        if (hintButton.isHovered() && isARebusIsCurrentlyActive && isDesktopMode()) {
            if (rebuses[activeRebusIndex].isHovered()) {  // and the active rebus is also hovered over]
                print('clicked on hint button');
                rebuses[activeRebusIndex].showHints = !rebuses[activeRebusIndex].showHints; // toggle the showHints property and then...
                if (rebuses[activeRebusIndex].showHints) {  // if showHints is now true...
                    hintButton.setStyle('hintButtonActive');  // set hint button's appearance to active mode
                    toggleHints(12);  // both hint buttons are initalized in the 'inactive and unviewed' style, this call toggles the hint button's style to 'inactive but previously viewed' if that hint has been viewed by the user before
                    if (rebuses[activeRebusIndex].hint1Active) {  // if hint1 was previously active for this rebus....
                        toggleHints(1); // make thei hint1 button display as active, and turn on the hint1 text
                    } else
                        if (rebuses[activeRebusIndex].hint2Active) {  // if hint2 was previously active for this rebus....
                            toggleHints(2); // make thei hint2 button display as active, and turn on the hint2 text
                        }
                }
                else {  // else (this assumeds showHints is false, aka the hints were previously shown, but the 'X' button was just clicked on and now the hints and hint buttons need to be hidden) 
                    hintButton.setStyle('hintButtonInactive');  // changes the main hint button to it's 'inactive' ('?') stlye
                    toggleHints(0); // hides the hint1 and hint2 button
                }
            }
            return; // ends function here, all actions from one click should be completed, hopefully improves effeciency
        }
    }
    // detects if main hint button has been pressed on mobile, and we are not currently hosinwg hints (prevents tapping on 'invisible' main hint button, which is in the same locaiton as the h1 button)
    if (hintButton.isHovered() && isARebusIsCurrentlyActive && isMobileMode() && !rebuses[activeRebusIndex].showHints) {
        print('touched hint button on mobile mode!');
        //     hintButton.setLocation(-hintButton.r, -hintButton.r); // hides '?' main hint button by setting it's location outside the canvas
        rebuses[activeRebusIndex].showHints = true; // in 'drawActiveRebus' this triggers hint1 & hint2 buttons to be drawn
        // sets locations of hint1 and hint2 buttons for mobile mode
        h1Button.setLocation(width - (rebusSizeCurrent / 4), (10 + hintButton.r) * 2.6);
        h2Button.setLocation(width - (rebusSizeCurrent / 4), (10 + hintButton.r) * 4.1);
        // sets size of h1 and h2 buttons for mobile mode
        h1Button.r = closeButton.r;
        h2Button.r = closeButton.r;
        h1Button.textSize = closeButton.r * 1.5;
        h2Button.textSize = closeButton.r * 1.5;
        // sets initial style of h1 and h2 buttons
        if (rebuses[activeRebusIndex].hint1) {  // if active rebus has a hint 1....
            if (!rebuses[activeRebusIndex].hint1Viewed) {  // and that hint has not been used...
                h1Button.setStyle('h1or2ButtonInactive');
            } else { // if the hint has been viewed...
                h1Button.setStyle('h1or2ButtonInactiveViewed');
            }
        }
        if (rebuses[activeRebusIndex].hint2) {  // if active rebus has a hint 2....
            if (!rebuses[activeRebusIndex].hint2Viewed) {  // and that hint has not been used...
                h2Button.setStyle('h1or2ButtonInactive');
            } else { // if the hint has been viewed...
                h2Button.setStyle('h1or2ButtonInactiveViewed');
            }
        }
        if (rebuses[activeRebusIndex].numOfHints > 0) { // ends mouseclink funtion here to hint1 isn't also detected as 'clicked on'right away since it's inthe same location that the main hint button was in. ALSO doesn't end if there are not hints, because it needs to continue on to display 'this rebus has no hints yet' text
            mouseX = 0; mouseY = 0; // needed because on mobile, mouseX and mouseY always retain the value of the last spot the user touched, and since the h1 button appears in the same spot the main hint button was previously in, the computer thinks the 'mouse' is still hovered over that location, and draws the h1 button with it's hovered state instead of it's normal state
            return;
        }
    }
    // detects if hint1 or hint2 button has been clicked on
    // if a rebus is currently active (to prevent next condition from having a null index)...
    if (isARebusIsCurrentlyActive) {
        if (rebuses[activeRebusIndex].showHints) {  // and the active rebus is displaying hints...
            if (h1Button.isHovered()) { // show hint #1
                print('clicked on hint button 1');
                toggleHints(1);
                return; // ends function here, all actions from one click should be completed, hopefully improves effeciency
            }
            if (h2Button.isHovered()) { // show hint #2
                print('clicked on hint button 2');
                toggleHints(2);
                return; // ends function here, all actions from one click should be completed, hopefully improves effeciency
            }
        }
    }
    // exits out of 'active rebus' display mdoe on a mobile device if the 'X' button is pressed
    // if an active rebus is being drawn on a phone, and the close button is pushed
    if (isMobileMode() && isARebusIsCurrentlyActive && closeButton.isHovered()) {
        if (rebuses[activeRebusIndex].showHints) {
            print('exiting hint mode');
            hintText.hide();
            document.getElementById('textbox').focus()
            rebuses[activeRebusIndex].showHints = false;
            return;
        } else {
            print('exiting active rebus mode');
            deactivateAllRebuses(); // close active rebus mode
            return; // ends mouseReturned function, prevents multiple actions from a single click
        }
    }
    // deactivates active rebus on mobile if user taps in empty space next to the rebus
    if (isMobileMode() && isARebusIsCurrentlyActive && !closeButton.isHovered()) {
        if (touchedOutsideActiveRebus()) {
            deactivateAllRebuses();
        }
    }
    // if a rebus was clicked on, it sets that rebus to be the 'active' rebus
    // if the mouse is within the canvas and it's currently 'rebus mode' (not stats mode or about mode or... ect)
    if (mouseY > 0 && mouseY < height && mouseX > 0 && mouseX < width && currentState === States.rebusMode) {
        // checks to see if any rebus was clicked on, and if so sets it to active
        let clickedOnANewRebus = false; // records if user clicked on a new rebus or not (if not, they must have clicked on either the current active rebus OR the buffer space inbetween rebuses)
        for (let index of filteredRebusIndices) {
            // if the rebus is hovered over AND it's either desktop mode OR no rebuses are active...
            //  and the rebus has not yet been solved....
            //  and it's not currently already the active rebus...
            if (rebuses[index].isHovered() && (!isARebusIsCurrentlyActive || isDesktopMode()) && !rebuses[index].solved && activeFilteredRebusIndex != index) {
                // if its mobile mode && the selected rebus is partially off screen...
                if (isMobileMode() && !isRebusOnScreen(index)) {
                    // then scroll up and end the function now (ie don't set the active rebus, scroll up instead)
                    scrollDown();
                    return;
                }
                print('clicked on new active rebus');
                clickedOnANewRebus = true;
                setActiveRebus(index);
            }
        }
        // deactivates the current rebus if a new rebus wasn't clicked on
        // AKA: This means the user clicked on the white space between rebuses
        if (!clickedOnANewRebus && isDesktopMode()) {
            print('clicked on nothing, deactivating all rebuses');
            deactivateAllRebuses();
        }
    }
    // deactivates a rebus if the user clickes to the left or right of the canvas
    if (mouseX < 0 || mouseX > width) {
        print('clicked outside canvas, deactivating current rebus');
        deactivateAllRebuses();
    }
}


// returns true if user is viewing site on one of the listed apple devices (can be foolwed be browers extensions or users if they desire)
function iOS() {
    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];
    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) { return true; }
        }
    }
    return false;
}



////////////////////////////////////////////////////////////////////////////////
// Touch Swipe Events //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// got the swipe detection functions from the internet, lets see if it works...
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    touchUpX = xUp;
    touchUpY = yUp;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            print('swiped left!');
            if (isARebusIsCurrentlyActive) {
                incrimentActiveRebus('backward');
            }
        } else {
            /* right swipe */
            print('swiped right!');
            if (isARebusIsCurrentlyActive) {
                incrimentActiveRebus('foward');
            }
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
            //             print('swiped up!');
            if (!isARebusIsCurrentlyActive) {
                //               scrollDown();
            }
        } else {
            /* down swipe */
            //             print('swiped down!');
            if (!isARebusIsCurrentlyActive) {
                //               scrollUp();
            }
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

// hmm why did I need this?
function touchStarted() {
    print('touch started!!!');
    swipeVelocity = 0;
    swipeVelocityRemaining = 0;
    touchStartedPosition.x = mouseX;
    touchStartedPosition.y = mouseY;
    startingYValueWhenTouchStarted = startingY;  // saves startingY
    pastTouches = []; // clears previous sqipe from array
    pastTouches[0] = new PastTouch(mouseX, mouseY);
    //   print('touchDownX: ' + touchStartedPosition.x + ', touchStartedY: ' + touchStartedPosition.y);
}

function touchMoved() {
    //print('touch moved!!!');
    // if user is touching with a finger (aka the left mouse button isn't pressed down)...
    //   if(mouseButton != 'left'){ //  note: the browsers I tested register a left mouseclick as lowercase string 'left'
    //     swiping = true; // prevents something from being clicked on while user is in the middle of swiping their finger
    //     print('swiping!');
    pastTouches.push(new PastTouch(mouseX, mouseY));  // records every movement of the touch/swipe to the array of past touches
    swipeVelocity = calcVelocity(); // every time the touch moves, it recalculates the velocity useing the past 10(?) frames
    //print('swipeVelocity: ' + swipeVelocity)
    //   }
}

function touchEnded() {
    print('touch ended!!!');
    if (iOS()) {
        print('iso device, calling mouseReleased from touchEnded');
        mouseReleased();
    }
    //   swiping = false;  // swipe finished
    touchEndedPosition = createVector(mouseX, mouseY);
    if (abs(swipeVelocity) > 30) {
        print('runing');
        swipeVelocityRemaining = swipeVelocity;
        scrollDown();
        swipeVelocity = 0;
    } else {
        settle();
    }
    //   print(pastTouches);
}

// returns the velocity base don the past 10(?) frames (about 1/3 of a second);
function calcVelocity() {
    let l = pastTouches.length; // current length of touches
    let distances = []; // velocities to average
    let frames = 10;
    for (let i = 0; i < l && i < frames; i++) { // i < l ends this early if number of frames need to calculate swipe velocity is less that the current number of recorded past touches, sorta
        let current = pastTouches[l - 1];
        let past = pastTouches[l - (i + 1)];
        //     let d = dist(past.position.x, past.position.y, current.position.x, current.position.y);
        let d = current.position.y - past.position.y;
        distances.push(d);
    }
    let sum = distances.reduce((a, b) => a + b, 0);
    let velocity = sum / distances.length;
    return velocity;
}



////////////////////////////////////////////////////////////////////////////////
// Scroll mouse Wheel / track pad //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// functions to process input from mouseWheel and trackpads

// functions from internet to normalize scroll wheel inputs across browser
/* The flag that determines whether the wheel event is supported. */
var supportsWheel = false;
var scrollCount = 0; // used to calculate how many times scroll event.delta has been called in the past 100ms
/* The function that will run when the events are triggered. */
function DoSomething(e) {
    /* Check whether the wheel event is supported. */
    if (e.type == "wheel") supportsWheel = true;
    else if (supportsWheel) return;
    /* Determine the direction of the scroll (< 0 → up, > 0 → down). */
    var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
    if (delta > 0) {
        if (scrollDistanceRemaining < 0) scrollDistanceRemaining = 0;  // makes scroll abrutly change direction if rebuses were currently scrolling in the oposite directions
        scrollCount++;
    }
    if (delta < 0) {
        if (scrollDistanceRemaining > 0) scrollDistanceRemaining = 0;  // makes scroll abrutly change direction if rebuses were currently scrolling in the oposite directions
        scrollCount--;
    }
    //   console.log(delta);
}

function calcScrollRate() {
    if (scrollCount == 0) {
        scrollRate = 0;
        //     print('scrollRate: ' + scrollRate);
        return;  // ends function if mousewheel/touchpad isn't currently being swiped
    }
    scrollRate = scrollCount;
    //   print('scrollRate: ' + scrollRate);
    scrollCount = 0;
}

/* Add the event listeners for each event. */
document.addEventListener('wheel', DoSomething);
document.addEventListener('mousewheel', DoSomething);
document.addEventListener('DOMMouseScroll', DoSomething);


// runs once anytime a mouse wheel event is detected (anytime user scrolls mouse wheel or slides two fingers on a laptop touchpad, ect)
function mouseWheel(event) {
    //   print(event.delta);  //prints scroll wheel value;
    if (event.delta > 0 && !areRebusesCurrentlyScrolling) {
        scrollDown();
    } else
        if (event.delta < 0 && !areRebusesCurrentlyScrolling) {
            scrollUp();
        }
    return false;
}



////////////////////////////////////////////////////////////////////////////////
// Key Pressed /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//  runs once anytime a keyboard button is pressed
function keyPressed() {
    if (keyCode === ESCAPE) { // if user pressed 'esc' key...
        // if the active rebus is showing hints...
        if (isARebusIsCurrentlyActive) {
            // exits out of hint mode, but DOESN't deactive taht rebus
            if (rebuses[activeRebusIndex].showHints) {
                hintButton.setStyle('hintButtonInactive');
                rebuses[activeRebusIndex].showHints = false;
                // the next part is needed twice, once to catch when a rebus is active but hints are not, and once for when no rebuses are active
            } else
                // if hint mode wasn't activated, it exits out of the current mode or rebus
                deactivateAllRebuses(); // deactivate all rebuses
            currentState = States.rebusMode;
        } else {
            // if hint mode wasn't activated, it exits out of the current mode or rebus
            deactivateAllRebuses(); // deactivate all rebuses
            currentState = States.rebusMode;
        }
    }
    if ((keyCode === ENTER || keyCode === RETURN) && isARebusIsCurrentlyActive) {  // if user pressed enter or return and a rebus is currently active...
        checkGuess(textInputBox.value()); // check if their guess is correct
    }
    if (keyCode === DOWN_ARROW) { // if user pressed down arrow
        scrollDown(); // scroll down
    }
    if (keyCode === UP_ARROW) { // if user pressed up arrow
        scrollUp(); // scroll up
    }
    if (isDesktopMode() && isARebusIsCurrentlyActive) {  // If user is not on a mobile device AND there is currently an active rebus
        if (keyCode === LEFT_ARROW) { // if user pressed left arrow
            print('left arrow pressed');
            incrimentActiveRebus('backward');
        }
        if (keyCode === RIGHT_ARROW) { // if user pressed right arrow
            print('right arrow pressed');
            incrimentActiveRebus('foward');
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// Back Button Pressed /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  called when any action that changes a hash (including the back button) is pressed

// if a hash change is requested (this includes the back button, I think)
window.onhashchange = function () {
    // if there is currently already an active rebus AND the user is using a mobile device...
    if (isARebusIsCurrentlyActive && isMobileMode()) {
        // deactivating rebuses essentialaly 'exits' out of active rebus mobile mode
        deactivateAllRebuses();
        location.hash = 'home'; // have to add a new hash when you back out of mobile active mode to be used for the next time, the initial loading one only lastas one back button useage
    }
}



////////////////////////////////////////////////////////////////////////////////
// Dropdown Options Menu Input Events //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// all functions to handel events from options menu


function optionsMenuInput() {
    print('running potoins menu processing function');
    let selection = optionsMenu.value();
    if (selection === 'Clear') {
        deactivateAllRebuses(); // prevents input text box from appearing on top of window
        print('clear selected!');
        closeButton = new ButtonRound();
        closeButton.char = 'X';
        yesButton = new ButtonRectangular('yes');
        noButton = new ButtonRectangular('no');
        if (isMobileMode()) { // alters default button size to be larger if user in on a mobile device
            yesButton.setSize(130, 50);
            noButton.setSize(130, 50);
        }
        currentState = States.clearMode;
        return;
    } else
        //TODO: Reactorwith switch case statement?
        if (selection === 'Stats') {
            deactivateAllRebuses(); // prevents input text box from appearing on top of window
            print('stats selected!');
            rebusSolvingRate = calcRebusSolvingRate(); // only calculated when stats menu is opened
            closeButton = new ButtonRound();
            closeButton.char = 'X';
            currentState = States.statMode;
        } else
            if (selection === 'Contact') {
                deactivateAllRebuses(); // prevents input text box from appearing on top of window
                print('contact selected!');
                closeButton = new ButtonRound();
                closeButton.char = 'X';
                currentState = States.contactMode;
            } else
                if (selection === 'About') {
                    deactivateAllRebuses(); // prevents input text box from appearing on top of window
                    print('about selected!');
                    closeButton = new ButtonRound();
                    closeButton.char = 'X';
                    currentState = States.aboutMode;
                }
    // code form internet..... should reset select value to 'Menu' after a choice is made?
    let id = 'optionsMenu';
    let valueToSelect = 'Menu';
    let element = document.getElementById(id);
    element.value = valueToSelect;
    element.blur();
    if (isMobileMode()) { optionsMenu.value(''); }
}





// initializes canvas
function initializeCanvas() {
    canvas = createCanvas(400, 400); // creates canvas, saves to p5 variable
    canvas.id('canvas'); // sets id of DOM canvas element
    canvas.parent('container'); // sets parent of canvas as container div
}

// creates navbar DIV
function createNavbar() {
    navbar = select('#navbar'); // grabs navbar div created in HTML and assigns it to p5 variable
    navbar.hide();  // hides until loading is complete, and it is unhidden natrually in the darwGUI function
}

// initializes footer
function createFooter() {
    footer = select('#footer'); // grabs footer div created in HTML and assignes it to p5 variable
    footer.style('height', footerHeight + 'px'); // sets height CSS property of footer
    footer.style('text-align', 'center');
    footer.hide();  // hides footer during loading sequence
}

// creates logo DOM element and assigns it to p5 variable 
function createLogo() {
    logo = createP('<strong>Rebus.City</strong><span> BETA</span>');
    logo.id('logo');
    logo.parent('navbar');
}

// creates instagram linke <a> DOM element and assigns it to p5 variable 
function createInstagramLink() {
    instagramLinkContainer = createDiv('');
    instagramLinkContainer.id('instagramLinkContainer');
    instagramLinkContainer.parent('navbar');
    instagramLinkIcon = createA(instagramLinkURL, '', '_blank');
    instagramLinkIcon.id('instagramLinkIcon');
    instagramLinkIcon.parent('instagramLinkContainer');
}

// creates category menu
function createCategoryMenu() {
    categoryMenu = createSelect('category');  // creates DOM select element and asignes it to p5 variable
    categoryMenu.parent('#navbar'); // asigns parent as navbar div
    // adds category options from array (originally pulled from .csv rebus data table)
    for (let category of categories) {
        //     print(category);
        categoryMenu.option(category);
    }
    categoryMenu.changed(changeCategory); // runs the changeCategory function anytime it's value is changed
    categoryMenu.selected('General'); // sets default category upon page loadImages
    categoryMenu.id('categories'); // assigns an ID so it can be called with javascript functions
}

// creates options menu
function createOptionsMenu() {
    optionsMenu = createSelect('options');  // creates DOM select element and asigns it to p5 variable
    optionsMenu.parent('#navbar'); // asigns parent as navbar div
    optionsMenu.id('optionsMenu');
    optionsMenu.changed(optionsMenuInput);  // function called whenever an option is selected from this menu
    // ads options to options menu
    optionsMenu.option('Menu');
    optionsMenu.option('Stats');
    optionsMenu.option('Clear');
    optionsMenu.option('Contact');
    //   optionsMenu.option('donate');
    optionsMenu.option('About');
    //  styles options menu to right side (default is left, which works of category dropdown menu but not this one)
    optionsMenu.style('float', 'right');
    ////////////////////////
    //   // Get all options within <select id='foo'>...</select>
    var op = document.getElementById("optionsMenu").getElementsByTagName("option");
    for (var i = 0; i < op.length; i++) {
        //   // lowercase comparison for case-insensitivity
        if (op[i].value == 'Menu') {
            op[i].disabled = true;
            op[i].id = 'testID';
        }
    }
}

// creates the textbox input object
function createTextInputBox() {
    textInputBox = createInput('');  // creates DOM input element and asigns it to a p5 variable
    textInputBox.id('textbox'); // gives DOM element an ID
    textInputBox.parent('container'); // and a parent (div container with canvas, so it can be position absolutly relative to canvas, and drawn on top of canvas)
    textInputBox.hide();  // hides initially, until a rebus is selected for guessing
}

// creates container object (as p5 variable)
function createContainer() {
    container = select('#container'); // asigns DOM div to p5 element
}

// creates DOM <p> element that will display the total number of rebuses solved
function createTotalScoreP() {
    totalScoreP = createP('<strong>' + numberOfCompletedRebuses + '</strong>' + ' / ' + totalNumberOfRebuses + ' total');
    totalScoreP.parent('footer');
    totalScoreP.id('totalScore');
}

function createCategoryScoreP() {
    categoryScoreP = createP('<strong>' + numberOfCompletedRebusesInCurrentCategory + '</strong>' + ' / ' + filteredRebusIndices.length + ' ' + currentCategory);
    categoryScoreP.parent('footer');
    categoryScoreP.id('categoryScore');
}

function createCopyrightP() {
    copyrightP = createP('&copy; 2020 RebusCity');
    copyrightP.parent('footer');
    copyrightP.id('copyright');
}

// creats the small round buttons that the user clicks on to show hints
function createHintButtons() {
    hintButton = new ButtonRound();
    hintButton.setStyle('hintButtonInactive');
    h1Button = new ButtonRound();
    h1Button.char = '1';
    h2Button = new ButtonRound();
    h2Button.char = '2';
    let hintButtons = [hintButton, h1Button, h2Button]; // array of all buttons
    // sets properties that are similar between all hint buttons
    for (let i = 0; i < hintButtons.length; i++) {
        hintButtons[i].r = rebusSizeCurrent * 0.045;
        if (i > 0) {  // sets properties for all but the first hint button
            hintButtons[i].setStyle('h1or2ButtonInactive'); // defaults hint1 and hint2 button the their 'inactive' style
        }
    }
}

// creats hint text <p> element, used to display text of hint when user clicks on corresponding hint button
function createHintText() {
    hintText = createP('no hints');
    hintText.id('hintText');
    hintText.parent('container'); // hosts hint text to div that acts as container for canvas
    hintText.hide();  // hides hint text initially, until user clicks on a hint button
}

// initalizes scroll button objects
function createScrollButtons() {
    scrollButtonUp = new ScrollButton('up');
    scrollButtonDown = new ScrollButton('down');
}

// initializes scroll bar object
function createScrollBar() {
    scrollBar = new ScrollBar();
}



////////////////////////////////////////////////////////////////////////////////
// Mouse Input Functions ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// helper functions used for processing mouse events

// returns true if mouse tapped outside the active rebus, text input box, and any current buttons. else returns false
function touchedOutsideActiveRebus() {
    let bool = false;
    // A series of conditions define if the tap/click was in a blank space outside the active rebus
    // if touch below the nav bar, and above the bottom of the active rebus image....
    if (mouseY > 0 && mouseY < textBoxPositionMobile.y) {
        // if touch was between the left edge of the canvas and the left edge of the rebus
        if (mouseX < (activeRebusPositionMobile.x)) {
            print('p1');
            bool = true;
        } else
            // if touch was between the right edge of the rebus and the right edge of the canvas...
            if (mouseX > (activeRebusPositionMobile.x + activeRebusSizeMobile) &&
                // and none of the buttons were touched....
                !closeButton.isHovered() && !hintButton.isHovered() && !h1Button.isHovered() && !h2Button.isHovered()) {
                print('p2');
                bool = true;
            }
    } else
        // if touch was to the left or right side of the text box...
        if (
            (mouseX < textBoxPositionMobile.x || mouseX > width - textBoxPositionMobile.x) &&
            mouseY > textBoxPositionMobile.y &&
            mouseY < textBoxPositionMobile.y + textBoxHeightMobile) {
            print('p3');
            bool = true;
        } else
            // if youch was between the bottom of the text box and the bottom of the canvas (AKA above the keyboard, if active)
            if (mouseY > textBoxPositionMobile.y + textBoxHeightMobile && textBoxHeightMobile && mouseY < height) {
                print('p4');
                bool = true;
            }
    print('p:' + bool);
    return bool;
}

let cow = new Object();
cow.randomProperty = 'cow propr';
console.log(cow.randomProperty);


////////////////////////////////////////////////////////////////////////////////
// Drawing Functions ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 

// draws the grid of rebus puzzles
// only draws what fits on the screen, from the current starting point, using the category-filterd list of rebuses
function drawRebuses() {
    filterRebuses();  // filters the rebuses each time before drawing them (is it necea=sary? idk) maybe later i can filter just when category is changed
    // animates scrolling up or down, if a scroll was recently called
    if (areRebusesCurrentlyScrolling) {  // if the scroll timer is above 0...
        scrollAnimation();  // execute the scroll animation
    }
    let x = 0;  // x position to draw first rebus
    let y = startingY;  // y position to draw first rebus in grid
    // loops through all filtered indices
    for (let i = 0; i < filteredRebusIndices.length; i++) {
        // if the y location is NOT above the top of the canvas (ie - negative)...
        if (y >= -(rebusSizeMax + spacingBetweenRebusesDesktop)) {
            // draws the rebus at the x & y location
            rebuses[filteredRebusIndices[i]].drawRebus(x, y);
        }
        // iterates x location to the right the width of a rebus and any required horizontal spacing
        x += (rebusSizeCurrent + spacingBetweenRebusesCurrent);
        // if the end of the row is reached, iterate down to next row...
        if (x > 0.75 * width) {
            x = 0;  // resets x
            y += rebusSizeCurrent + spacingBetweenRebusesCurrent; // iterates y down the size of one rebus plus any vertical spaceing (for now horizontal and vertial spacing are always the same)
        }
        // if the canvas is full of rebuses (the next y value is below the height) then stop drawing rebuses (to save memory and stuff)
        if (y > height) {
            return;
        }
    }
}

// draws input text box
function drawTextInputBox(x, y) {
    if (isDesktopMode()) {
        // only moves textbox position around for desktop mode
        textInputBox.position(x + 20, y + rebusSizeCurrent + 3, 'relative'); // moves textbox under active rebus
    }
    if (isMobileMode()) {
        textInputBox.position(textBoxPositionMobile.x, textBoxPositionMobile.y, 'relative');  // positions text box centered under mobile large drawing of active rebus
    }
}

// called only on mobile devices (hopefully), draws enlarged active rebus screens out other rebuses behind it
function drawActiveRebus() {
    // draws translucent rectangle over everything else to fade it out
    stroke(0);
    fill(0, 200);
    rect(0, 0, width, height);
    //draws selected rebus larger and centered
    image(rebuses[activeRebusIndex].image, activeRebusPositionMobile.x, activeRebusPositionMobile.y,
        activeRebusSizeMobile, activeRebusSizeMobile);
    // test code to work on swiping animation on mobile
    //   if(touches.length > 0){
    //     activeRebusPositionMobile.x += 1;
    //   }
    // draws red rectangle if a recently incorrect answer was entered (on mobile)
    if (rebuses[activeRebusIndex].incorrectAnimationTimer > 0) {
        noStroke();
        fill(255, 0, 0, rebuses[activeRebusIndex].incorrectAnimationTimer)
        rect(activeRebusPositionMobile.x - 1, activeRebusPositionMobile.y - 1, activeRebusSizeMobile, activeRebusSizeMobile, 5);
        rebuses[activeRebusIndex].incorrectAnimationTimer -= 2;
    }
    // draws translucent black rectangle on which to draw hints if hint mode is on
    if (rebuses[activeRebusIndex].showHints) {
        noStroke();
        fill(255, 255 * 0.9);
        rect(activeRebusPositionMobile.x - 1, activeRebusPositionMobile.y - 1, activeRebusSizeMobile, activeRebusSizeMobile, 5);
    }
    // draws outline rectangle over selected rebus
    stroke(217);
    noFill();
    strokeWeight(3);
    rect(activeRebusPositionMobile.x - 1, activeRebusPositionMobile.y - 1,
        activeRebusSizeMobile + 2, activeRebusSizeMobile + 2, 5); // the '-1s' and '+2s' make the outline rectangle a tiny bit larger than the image, in order for the border radius to cover up the image's hard 90 corners
    closeButton.draw(); // draws 'X' button to close out of actuve rebus mode
    if (!rebuses[activeRebusIndex].showHints)
        hintButton.draw(); // draws '?' botton to access hints, does not draw it when hint buttons 1 and 2 are being shown
    // draws h1 and h2 buttons when shotHints is turned on
    if (rebuses[activeRebusIndex].showHints) {
        // if rebuses has a hint 1, draw the hint 1 button
        if (rebuses[activeRebusIndex].hint1) h1Button.draw();
        // if rebuses has a hint 2, draw the hint 2 button
        if (rebuses[activeRebusIndex].hint2) h2Button.draw();
        // draws hint text at top
        noStroke();
        fill(0);
        textAlign(CENTER);
        textSize(18);
        let hintTextXLoc = width / 2; // center horizontally
        let hintTextYLoc = activeRebusPositionMobile.y + (activeRebusSizeMobile * 0.1); // near top of large rebus
        text(`hints: ${rebuses[activeRebusIndex].numOfHintsUsed()} / ${rebuses[activeRebusIndex].numOfHints}`, hintTextXLoc, hintTextYLoc);
    }
}

// darws the temporary stats screen
//TODO: Refactor this terrible method (DRY!)
function drawStatsScreen() {
    // draws background rectangle
    let buffer = rebusSizeCurrent / 4;  // buffer for boundary rectangle
    stroke(192);
    fill(255);
    strokeWeight(1.5);
    let statsWindowHeight = 500;
    if (isMobileMode()) { statsWindowHeight = height - buffer * 2; }
    rect(buffer, buffer, width - buffer * 2, statsWindowHeight, 5);
    // draws stats
    buffer += 20; // buffer for text
    noStroke();
    fill(0);
    textAlign(LEFT);
    textSize(20);
    text('Stats:', buffer, buffer + 20);
    textSize(14);
    let nextLineY = buffer + 20 + 50;
    let newLineSpacing = 25;
    if (isMobileMode()) { newLineSpacing = 23; }
    let extraLineSpacing = 25;
    if (isMobileMode()) { extraLineSpacing = 12; }
    let secondColumn = width / 2;
    if (isMobileMode()) { secondColumn = width - buffer; }
    // what's a 'for loop?'
    textAlign(LEFT);
    text('Total Rebuses Solved:', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(numberOfCompletedRebuses + ' (' + round(((numberOfCompletedRebuses / rebuses.length) * 100), 1) + '%)', secondColumn, nextLineY);
    nextLineY += newLineSpacing;
    textAlign(LEFT);
    text('Strongest Category:', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(strongestCategory, secondColumn, nextLineY);
    nextLineY += newLineSpacing + extraLineSpacing;
    textAlign(LEFT);
    text('Total Time Playing: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(convertSecondsToTimeString(), secondColumn, nextLineY);
    nextLineY += newLineSpacing;
    textAlign(LEFT);
    text('Rebus solving rate: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(rebusSolvingRate, secondColumn, nextLineY);
    nextLineY += newLineSpacing + extraLineSpacing;
    textAlign(LEFT);
    text('Hints used:', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(numberOfHintsUsed, secondColumn, nextLineY);
    nextLineY += newLineSpacing;
    textAlign(LEFT);
    text('Solved without hints: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(numberOfCompletedRebusesWithoutHints + ' (' + floor((numberOfCompletedRebusesWithoutHints / numberOfCompletedRebuses) * 100) + '%)', secondColumn, nextLineY);
    nextLineY += newLineSpacing + extraLineSpacing;
    textAlign(LEFT);
    text('Average guesses per rebus: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(round((numberOfIncorrectGuesses + numberOfCompletedRebuses) / numberOfCompletedRebuses), secondColumn, nextLineY);
    nextLineY += newLineSpacing;
    textAlign(LEFT);
    text('Correct Guess Percentage: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(calcCorrectGuessPercentage(), secondColumn, nextLineY);
    nextLineY += newLineSpacing + extraLineSpacing;
    textAlign(LEFT);
    text('Number of incorrect guesses: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(numberOfIncorrectGuesses, secondColumn, nextLineY);
    nextLineY += newLineSpacing;
    textAlign(LEFT);
    text('Worst guess so far:', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(worstGuessSoFar, secondColumn, nextLineY);
    nextLineY += newLineSpacing + extraLineSpacing;
    textAlign(LEFT);
    text('Rebus City Rank: ', buffer, nextLineY);
    if (isMobileMode()) { textAlign(RIGHT); }
    text(calcRebusRank(), secondColumn, nextLineY);
    // sets location of close button
    closeButton.setLocation(width - 70, 70);
    if (isMobileMode()) { closeButton.setLocation(width - 60, 60); }
    closeButton.draw(); // draws close button
}

// draws clear confirmation window
function drawClearScreen() {
    // draws background rectangle
    let buffer = rebusSizeCurrent / 4;  // buffer for boundary rectangle
    stroke(192);
    fill(255);
    strokeWeight(1.5);
    let clearWindowHeight = 200;
    if (isMobileMode()) { clearWindowHeight = height / 2; }
    rect(buffer, buffer, width - buffer * 2, clearWindowHeight, 5);
    // draws text
    fill(0);
    noStroke();
    textAlign(CENTER);
    if (isMobileMode()) { textSize(24); }
    text('Are you sure?', width / 2, buffer * 2.5);
    fill(192);
    if (isDesktopMode()) {
        text('This will reset all solved rebuses and stats.', width / 2, buffer * 2.5 + 20);
    } else if (isMobileMode()) {
        text('This will reset all', width / 2, buffer * 4);
        text('solved rebuses and stats.', width / 2, buffer * 5);
    }
    // sets location of close button
    closeButton.setLocation(width - 70, 70);
    if (isMobileMode()) { closeButton.setLocation(width - 60, 60); }
    closeButton.draw(); // draws close button
    // sets location of yes and no buttons
    yesButton.setLocation(width / 2 + 10, clearWindowHeight / 2 + buffer * 2);
    noButton.setLocation(width / 2 - (yesButton.w + 10), clearWindowHeight / 2 + buffer * 2);
    yesButton.draw();
    noButton.draw();
}

// draws contact window (placeholder)
function drawContactScreen() {
    // draws background rectangle
    let buffer = rebusSizeCurrent / 4;  // buffer for boundary rectangle
    stroke(192);
    fill(255);
    strokeWeight(1.5);
    let contactWindowHeight = 500;
    if (isMobileMode()) { contactWindowHeight = height - buffer * 2; }
    rect(buffer, buffer, width - buffer * 2, contactWindowHeight, 5);
    // draws text
    fill(192);
    noStroke();
    textAlign(LEFT);
    textSize(20);
    text('Contact', buffer + 20, buffer + 40);
    // text
    textAlign(CENTER);
    textStyle(ITALIC);
    if (isMobileMode()) {
        text('contact form under construction', width / 2, (height / 2) - 23);
        text('please contact us on instagram', width / 2, (height / 2));
        textStyle(BOLD);
        text('@rebus.city', width / 2, (height / 2) + 46);
        textStyle(NORMAL);
    }
    if (isDesktopMode()) {
        text('contact form under construction', width / 2, buffer * 3.5);
        text('please contact us on instagram', width / 2, buffer * 4);
        textStyle(BOLD);
        text('@rebus.city', width / 2, buffer * 6);
        textStyle(NORMAL);
    }
    // sets location of close button
    closeButton.setLocation(width - 70, 70);
    if (isMobileMode()) { closeButton.setLocation(width - 60, 60); }
    closeButton.draw(); // draws close button
}

// draws about window (placeholder)
function drawAboutScreen() {
    // draws background rectangle
    let buffer = rebusSizeCurrent / 4;  // buffer for boundary rectangle
    stroke(192);
    fill(255);
    strokeWeight(1.5);
    let aboutWindowHeight = 500;
    if (isMobileMode()) { aboutWindowHeight = height - buffer * 2; }
    rect(buffer, buffer, width - buffer * 2, aboutWindowHeight, 5);
    // draws text
    fill(192);
    noStroke();
    textAlign(LEFT);
    textSize(20);
    text('About', buffer + 20, buffer + 40);
    // text
    if (isDesktopMode()) {
        let nextLine = buffer + 80;
        let lineSpacing = 16;
        textSize(14);
        text('Rebus City is an interactive archive of rebus puzzles', buffer + 20, nextLine);
        fill(0);
        text('Rebus City', buffer + 20, nextLine);  // writes over the previous line to make a few works in black
        fill(192);
        nextLine += lineSpacing;
        text('designed by me, Daniel Kaye.', buffer + 20, nextLine);
        nextLine += lineSpacing * 1.5;
        text('I love making and solving these puzzles, and want to share', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('them with anyone else who might get some enjoyment (or', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('frustration) out of them.', buffer + 20, nextLine);
        nextLine += lineSpacing * 2;
        fill(0);
        text('What is a Rebus Puzzle?', buffer + 20, nextLine);
        fill(192);
        nextLine += lineSpacing * 1.5;
        text('A rebus puzzle is a combination of letters, symbols, and', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('pictures that add up to a known word or phrase. Some puzzles', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('may require specific knowledge about a certain topic, or', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('category, to be solved.', buffer + 20, nextLine);
        nextLine += lineSpacing * 2;
        fill(255, 0, 0);
        textStyle(ITALIC);
        text('*This is a beta version, so you may encounter bugs*', buffer + 20, nextLine);
        textStyle(NORMAL);
        fill(192);
        nextLine += lineSpacing * 2;
        text('Please feel free to contact me with feedback or bugs under', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('the "contact" page.', buffer + 20, nextLine);
    } else if (isMobileMode()) {
        let nextLine = buffer + 80;
        let lineSpacing = 16;
        textSize(14);
        text('Rebus City is an interactive archive of', buffer + 20, nextLine);
        fill(0);
        text('Rebus City', buffer + 20, nextLine);  // writes over the previous line to make a few works in black
        fill(192);
        nextLine += lineSpacing;
        text('rebus puzzles designed by me, Daniel Kaye.', buffer + 20, nextLine);
        nextLine += lineSpacing * 1.5;
        text('I love making and solving these puzzles,', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('and want to share them with anyone else', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('who might get some enjoyment (or', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('frustration) out of them.', buffer + 20, nextLine);
        nextLine += lineSpacing * 2;
        fill(0);
        text('What is a Rebus Puzzle?', buffer + 20, nextLine);
        fill(192);
        nextLine += lineSpacing * 1.5;
        text('A rebus puzzle is a combination of letters,', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('symbols, and pictures that add up to a', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('known word or phrase. Some puzzles may', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('require specific knowledge about a certain', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text(' topic, or category, to be solved.', buffer + 20, nextLine);
        nextLine += lineSpacing * 2;
        fill(255, 0, 0);
        textStyle(ITALIC);
        textAlign(CENTER);
        text('*This is a beta version, so', width / 2, nextLine);
        nextLine += lineSpacing;
        text('you may encounter bugs*', width / 2, nextLine);
        textStyle(NORMAL);
        textAlign(LEFT);
        fill(192);
        nextLine += lineSpacing * 2;
        text('Please feel free to contact me with', buffer + 20, nextLine);
        nextLine += lineSpacing;
        text('feedback or bugs on the contact page.', buffer + 20, nextLine);
    }
    // sets location of close button
    closeButton.setLocation(width - 70, 70);
    if (isMobileMode()) { closeButton.setLocation(width - 60, 60); }
    closeButton.draw(); // draws close button
}

// draws the scroll up and scroll down buttons if on desktop mode, and if there are more rebuses to scroll too
function drawScrollButtons() {
    scrollButtonUp.draw();
    scrollButtonDown.draw();
}

// draws scroll bar (only while scrolling, different on mobile and desktop, only clickable on desktop)
function drawScrollBar() {
    if (numOfRowsThatFitOnscreen <= (filteredRebusIndices.length / 3)) {
        scrollBar.draw();
    }
}



////////////////////////////////////////////////////////////////////////////////
// GUI Functions ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// functions that help draw any GUI elements

// draws any GUI elements (that are not native DOM things);
function drawGUI() {
    drawScrollBar();  // draws scroll bar (only if currently scrolling)
    // hides header & footer if a mobile keyboard is active, so the active rebus and text input box actually stay/fit on the screen
    if (isMobileMode() && isTextInputBoxFocused()) {
        navbar.hide();
        footer.hide();
    } else if (!isTextInputBoxFocused()) {
        navbar.show();
        footer.show();
    }
    if (isDesktopMode()) {
        drawScrollButtons();
    }
    drawSolution(); // draws solution to solved & hovered/touched rebus puzzles
    // draws stats screen if stats mode is on
    //TODO: Refactor with enum and swtichcase?
    if (currentState === States.statMode) {
        drawStatsScreen();
    } else
        // draws clear confirmation window if clearMode is on
        if (currentState === States.clearMode) {
            drawClearScreen();
        } else
            // draws contact window if contactMode is on
            if (currentState === States.contactMode) {
                drawContactScreen();
            } else
                // draws clear confirmation window if clearMode is on
                if (currentState === States.aboutMode) {
                    drawAboutScreen();
                }
}

// draws solution to solved & hovered/touched rebus puzzles
// uses global varialbes to manage opacity and time delays
// maybe there's a more effecient way using javascript, but I don't know it yet
// uses different methods based upont desktop or mobile device
function drawSolution() {
    // for all rebuses that match the current category filter....
    for (let index of filteredRebusIndices) {
        // if the rebus is solved && the mouse is hovered over it (desktop mode only)...
        if (rebuses[index].solved && rebuses[index].isHovered() && isDesktopMode()) {
            // if 30 frames have passed...
            if (rebuses[index].hoverDuration > 30) {
                // opacity lets the answer fade in!
                let opacity = (rebuses[index].hoverDuration - 30) * 10;
                if (opacity > 255) {
                    opacity = 255;
                }
                fill(192, opacity);
                noStroke();
                textSize(14);
                textAlign(CENTER);
                text(rebuses[index].answer, rebuses[index].xLoc + rebusSizeCurrent / 2,
                    rebuses[index].yLoc + rebusSizeCurrent + spacingBetweenRebusesCurrent / 2 + 5);
            }
        }
        // if finger is held down over a solved rebus on a mobile device....
        if (rebuses[index].solved && isMobileMode() && rebuses[index].isHovered() && touches.length > 0 && !isARebusIsCurrentlyActive) {
            // doesn't start showing answer until finger has been hold over rebus for 30 frames
            if (rebuses[index].hoverDuration > 30) {
                // opacity lets the answer fade in!
                let opacity = (rebuses[index].hoverDuration - 30) * 15;
                if (opacity > 230) {
                    opacity = 230;
                }
                // xOffset sets the text and rectangle displaying the answer a little to the left or right, depending which column the rebus is in
                let xOffset;
                // if rebus is in the left column...
                if (rebuses[index].xLoc == 0) {
                    // offset answer display to left side of screen
                    xOffset = -0.9 * (rebusSizeCurrent / 2);
                    // if rebus is in the right column...
                } else if (rebuses[index].xLoc > width / 2) {
                    // offset answer display to right side of screen
                    xOffset = 0.9 * (rebusSizeCurrent / 2);
                    // if rebus is in center column...
                } else {
                    xOffset = 0;  // no offset / keep answer display in center
                }
                // yOffset draws the answer below the rebus if the rebus it at/near the top of the screen (because it's too ahrd to show it above/on top of the navbar DIV element)
                let yOffset = 0;  //stays at zero unless...
                // if rebus is at the top of the screen....
                if (rebuses[index].yLoc == 0) {
                    yOffset = rebusSizeCurrent * 2;
                }
                // draws rectangle in which to write text
                fill(0, opacity);
                strokeWeight(1);
                stroke(192);
                rect(rebusSizeCurrent / 2 + xOffset, rebuses[index].yLoc - rebusSizeCurrent / 2 + yOffset, rebusSizeCurrent * 2, rebusSizeCurrent / 4, 5);
                // draws text with answer
                fill(255, opacity + 25);
                noStroke();
                textSize(18);
                textAlign(CENTER);
                text(rebuses[index].answer, width / 2 + xOffset, rebuses[index].yLoc - (rebusSizeCurrent / 4 + rebusSizeCurrent / 16) + yOffset);
            }
        }
    }
}



////////////////////////////////////////////////////////////////////////////////
// Sorting and Filtering Functions /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// functions for sorting and filtering all the rebuses

// saves a list of filtered rebus indices
function filterRebuses() {
    let filteredArray = [];
    for (let rebus of rebuses) {  // for every rebus...
        // if the rebus's category (or secondary category) are equal to the current category, or current category is set to 'all'...
        if (rebus.category === currentCategory ||
            rebus.secondCategory === currentCategory ||
            currentCategory === 'All') {
            filteredArray.push(rebus.index);  // then add that rebus's index to the list fo filtered rebuses
        }
        filteredRebusIndices = filteredArray;
    }
    numOfRows = ceil(filteredRebusIndices.length / 3);
}

// changes current category
function changeCategory() {
    currentCategory = categoryMenu.value();
    filterRebuses(); // get it outta draw rebuses draw loop!!! // has to be called before updating numOfRows
    startingY = 0;
    deactivateAllRebuses();
    document.getElementById('categories').blur();  // sets this dropdown to not be focused once a category is chosen, if left along when you change a category then press an up or down arrow, it scrolls to a different category in the dropdown instead of scrolling down/up the rebuses, as a user would probably expect
    updateScores(); // updates the category score in the bottom right!
    print('category changed!');
}

// calculates total number of rebuses solved in the current categoryMenu
function updateNumberOfCompletedRebusesInCurrentCategory() {
    let x = 0;
    for (let index of filteredRebusIndices) {
        if (rebuses[index].solved) {
            x += 1;
        }
    }
    numberOfCompletedRebusesInCurrentCategory = x;
}

// updates the scoers (global variables and HTML at bottom of screen)
function updateScores() {
    updateNumberOfCompletedRebusesInCurrentCategory();  // updates category solved score gloval variable counter
    // updates HTML elements in footer:
    totalScoreP.html('<strong>' + numberOfCompletedRebuses + '</strong>' + ' / ' + totalNumberOfRebuses + ' total');
    categoryScoreP.html('<strong>' + numberOfCompletedRebusesInCurrentCategory + '</strong>' + ' / ' + filteredRebusIndices.length + ' ' + currentCategory);
}

// incriments the currently active rebus based a directional argument of 'left' or 'right'
function incrimentActiveRebus(direction) {
    if (direction === 'foward') { // if input was foward
        // check to make sure this isn't the last rebus
        if (activeFilteredRebusIndex < filteredRebusIndices.length - 1) {
            // and if not move the filtered rebus index foward to the next rebus
            activeFilteredRebusIndex += 1;
        }
    } else
        if (direction === 'backward') {  // if input was backward
            // check to make sure this isn't the first rebus
            if (activeFilteredRebusIndex > 0) {
                // and if not move the filtered rebus index back to the previous rebus
                activeFilteredRebusIndex -= 1;
            }
        }
    // set active rebus index to match the filtere rebuses index
    setActiveRebus(rebuses[filteredRebusIndices[activeFilteredRebusIndex]].index);
}


////////////////////////////////////////////////////////////////////////////////
// Resize Functions ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// all functions called/used to resize elements in response to the (changing) screen size

// resizes the window for all screen types and sizes
function resizeWindowResponsivly() {
    //   print('resizing window responivley called');
    // if the current window width is larger than the maximum width required to display 3 rebuses across (at a nice resolution)...
    if (windowWidth > maxCanvasWidth()) {
        // adjusts global variables in response to new screen size
        screenMode = ScreenModes.desktopMode;
        // resizes or repositions all necesary elements based on 'desktop' settings
        resizeCanvas(maxCanvasWidth(), calcCanvasHeight('desktop'));
        resizeNavbar('desktop');
        resizeLogo('desktop');
        resizeInstagramLink('desktop');
        resizeOptionsMenu('desktop');
        resizeCategoryMenu('desktop');
        resizeRebusWidth('desktop');
        resizeHorizontalSpacing('desktop');
        resizeContainer('desktop');
        resizeTextInputBox('desktop');
        resizeScore('desktop');
        resizeHintText('desktop');
        resizeButtons('desktop');
    } else
    // if the window is smaller than the maximum 3-horz-rebus display size...
    {
        // adjusts global variables in response to new screen size
        screenMode = ScreenModes.mobileMode;
        // resizes or repositions all necesary elements based on 'mobile' settings
        resizeCanvas(windowWidth, calcCanvasHeight('mobile'));
        resizeNavbar('mobile');
        resizeLogo('mobile');
        resizeInstagramLink('mobile');
        resizeOptionsMenu('mobile');
        resizeCategoryMenu('mobile');
        resizeRebusWidth('mobile');
        resizeHorizontalSpacing('mobile');
        resizeContainer('mobile');
        resizeTextInputBox('mobile');
        resizeScore('mobile');
        resizeHintText('mobile');
        resizeButtons('mobile');
        resizeActiveRebusMobileVariables();
    }
    // things to do for screen resizing regardless of desktop or mobile mode:
    calcNumOfRowsThatFitOnscreen();
    calcRowHeight();
}

// calculates and updates the global variable that keeps track of how many rows of rebuses fit vertically on the current screen
function calcNumOfRowsThatFitOnscreen() {
    numOfRowsThatFitOnscreen = floor(height / (rebusSizeCurrent + spacingBetweenRebusesCurrent));
}

// calculates height required for row of rebuses, including buffer, based on current screen size
function calcRowHeight() {
    rowHeight = rebusSizeCurrent + spacingBetweenRebusesCurrent;
}

// returns the max width (px) the canvas should stretch twod
function maxCanvasWidth() {
    // maximum rebus with * 3 columns of rebuses + horizontal Spacing between rebuses * 2
    return (rebusSizeMax * 3 + spacingBetweenRebusesDesktop * 2);
}

// recalculates the height of the canvas based on current screen size and activity
function calcCanvasHeight(screenSize) {
    // if being viewed on a desktop device....
    if (screenSize === 'desktop') {
        // screen height should be the full height, minus the height of the navbar and footer
        return (windowHeight - navbarHeightDesktop - footerHeight - 2); // the minus 2 prevents the scroll bar from appearing by default. I think because or borders or something the width of the page becomes 1 pixel bigger than the width of the canvas
    } else
        // if being viewed on a mobile size screen, and the input text box is not active...
        if (isTextInputBoxFocused() === false && screenSize === 'mobile') {
            // basically same as desktop mode, but with a different navbar height
            return (windowHeight - navbarHeightMobile - footerHeight - 2);
        } else
            // this runs only if input text box (and therefore phone keyboard) are active.
            //  this keeps the current canvas height the same, so it doesn't shrink to accomodate for the mobile keyboard pop-up.
            //  if it did shrink in response to mobile keyboard, it becomes to short to display the active rebus
            // to compensate instead the navbar and footer are hidden when the /input textbox is focused/keyboard is activated/
            if (isTextInputBoxFocused() === true && screenSize === 'mobile') {
                return height;  // keeps canvas height the same
            }
}

// resizes navbar based on screen size
function resizeNavbar(screenSize) {
    if (screenSize === 'desktop') {
        navbarHeightCurrent = navbarHeightDesktop;  // set so it can be used in other functions without having to be queried
        navbar.style('height', navbarHeightDesktop + 'px');
        navbar.style('width', width + 'px'); // navbar width = canvas width, which is calculated just before this is called
    }
    if (screenSize === 'mobile') {
        navbarHeightCurrent = navbarHeightMobile;  // set so it can be used in other functions without having to be queried
        navbar.style('height', navbarHeightMobile + 'px');
        navbar.style('width', windowWidth + 'px'); // navbar width = window width
    }
}


// resizes and repositions logo based on viewing device window/viewport size
function resizeLogo(screenSize) {
    if (screenSize === 'desktop') {
        //     logo.style('margin-left',(rebusWidthCurrent + horizontalSpacingCurrent + floor(rebusWidthCurrent * 0.14) + 22) + 'px');
        logo.style('margin-left', (rebusSizeCurrent + spacingBetweenRebusesCurrent + floor(rebusSizeCurrent * 0.13)) + 'px');
        logo.style('padding-left', '');
        logo.style('font-size', '28px');
        logo.style('text-align', 'left');
        logo.style('width', '');
        logo.style('margin-top', '2px');
    }
    if (screenSize === 'mobile') {
        logo.style('margin-left', 'auto');
        logo.style('padding-left', '3%');
        logo.style('font-size', '32px');
        logo.style('text-align', 'center');
        logo.style('width', '100%');
        logo.style('margin-top', 15 + 'px');
    }
}

// resizes and repositions instagram link icon based on viewing device window/viewport size
function resizeInstagramLink(screenSize) {
    if (screenSize === 'desktop') {
        instagramLinkIcon.style('width', '20px');
        instagramLinkIcon.style('height', '20px');
        instagramLinkIcon.style('background-size', '20px');
        instagramLinkIcon.style('left', ((rebusSizeCurrent * 2) + 8) + 'px'); // same left margin as logo, minus the instagram link image width and  some padding at the end, which is 2
        instagramLinkIcon.style('top', '2px');
    }
    if (screenSize === 'mobile') {
        instagramLinkIcon.style('width', '40px');
        instagramLinkIcon.style('height', '40px');
        instagramLinkIcon.style('background-size', '40px');
        instagramLinkIcon.style('top', (120 - 40 - 10) + 'px');
        instagramLinkIcon.style('left', (rebusSizeCurrent * 0.1) + 'px');
    }
}

// resizes options menu based on screen size
function resizeOptionsMenu(screenSize) {
    // resizes/restyles/repositions options menu for desktop browsers
    if (screenSize === 'desktop') {
        optionsMenu.style('width', '120px');
        optionsMenu.style('height', '20px');
        optionsMenu.style('background-image', 'url("data/dropdownArrowGrey.png")');
        optionsMenu.style('background-position', 'right');
        optionsMenu.style('background-repeat', 'no-repeat');
        optionsMenu.style('background-size', 'contain');
        optionsMenu.style('border', 'none');
        optionsMenu.style('border', '1.5px solid #c0c0c0');
        optionsMenu.style('margin-top', '10px');
        optionsMenu.style('margin-right', '');
        optionsMenu.style('margin-left', '');
        optionsMenu.value('Menu');
    }
    // makes hamburger options menu for mobile browsers (TODO!)
    else {
        optionsMenu.style('width', '40px');
        optionsMenu.style('height', '40px');
        optionsMenu.style('background-image', 'url("data/hamburgerButton.png")');
        optionsMenu.style('background-position', 'center');
        optionsMenu.style('background-repeat', 'no-repeat');
        optionsMenu.style('background-size', 'cover');
        optionsMenu.style('border', 'none');
        optionsMenu.style('margin-top', (120 - 40 - 10) + 'px');
        optionsMenu.style('margin-right', '5%');
        optionsMenu.style('margin-left', '0px');
        optionsMenu.value('');
    }
}

// resizes options menu based on screen size
function resizeCategoryMenu(screenSize) {
    // resizes/restyles/repositions category menu for desktop browsers
    if (screenSize === 'desktop') {
        categoryMenu.style('width', '120px');
        categoryMenu.style('height', '20px');
        categoryMenu.style('margin-top', '10px');
        categoryMenu.style('margin-left', '');
        categoryMenu.style('margin-right', '');
        categoryMenu.style('font-size', 'small');
        categoryMenu.style('border-width', '1.5px');
    }
    //  center and enlargen category button for mobile screens
    else {
        categoryMenu.style('width', '55%');
        categoryMenu.style('height', '40px');
        categoryMenu.style('margin-top', (120 - 40 - 10) + 'px');
        categoryMenu.style('margin-left', (100 - 55) / 2 + '%');
        categoryMenu.style('margin-right', '0px');
        categoryMenu.style('font-size', 'large');
        categoryMenu.style('border-width', '2px');
    }
}

// resizes rebus width based on display size
function resizeRebusWidth(screenSize) {
    // if screen is wide enough, use maximum rebus width
    if (screenSize === 'desktop') {
        rebusSizeCurrent = rebusSizeMax;
    }
    //  if screen is smaller, scale rebuses
    else {
        rebusSizeCurrent = width / 3;  // no horizontal spacing used in 'mobile' mode
    }
}

// resizes distance variable for horizontal spacing inbetween puzzles!
function resizeHorizontalSpacing(screenSize) {
    // if screen is wide enough, use standard spacing inbetween puzzles (needed to make room for text box)
    if (screenSize === 'desktop') {
        spacingBetweenRebusesCurrent = spacingBetweenRebusesDesktop;
    }
    //  if screen is smaller, text box appears differently, so no padding between rebus puzzles is needed
    else {
        spacingBetweenRebusesCurrent = 0;
    }
}

// resizes container div based on screen width, which in turns positions canvas (and this div) in the center of the screen on wide screens
function resizeContainer(screenSize) {
    if (screenSize === 'desktop') {
        container.style('width', maxCanvasWidth() + 'px');
    } else {
        container.style('width', '100%');
    }
}

// repositions and resizes textbox based on screen size, makes it bottom and centered for mobile and under the active rebus for large screens
function resizeTextInputBox(screenSize) {
    if (screenSize === 'desktop') {
        textInputBox.style('height', '20px');
        textInputBox.style('width', '140px');
        textInputBox.style('font-size', 'small');
    } else {
        textInputBox.style('height', textBoxHeightMobile + 'px');
        textInputBox.style('width', '80%');
        textInputBox.style('font-size', 'large');
    }
}

//resizes score (at bottom) based on screen size
function resizeScore(screenSize) {
    // fuck CSS. 'm not quite sure how this works, but it does!
    if (screenSize === 'desktop') {
        categoryScoreP.style('width', width + 'px');
        totalScoreP.style('width', width + 'px');
        copyrightP.style('width', width + 'px');
        categoryScoreP.style('left', (((windowWidth - width) / 2) - ((width / 3) * 0.13)) + 'px'); // doesn't have padding, uses margin for right offset instead
        totalScoreP.style('left', ((windowWidth - width) / 2) + 'px');
        copyrightP.style('left', (((windowWidth - width) / 2) - ((width / 3) * 0.13)) + 'px'); // doesn't have padding, uses margin for right offset instead
        categoryScoreP.style('right', '');
        totalScoreP.style('padding-left', ((width / 3) * 0.13) + 'px');
        copyrightP.style('padding-left', ((width / 3) * 0.13) + 'px');
        categoryScoreP.style('position', 'absolute');
        totalScoreP.style('position', 'absolute');
        copyrightP.style('position', 'absolute');
    } else {
        categoryScoreP.style('width', '90%');
        totalScoreP.style('width', '90%');
        copyrightP.style('width', '90%');
        categoryScoreP.style('left', '');
        totalScoreP.style('left', '5%');
        copyrightP.style('left', '5%');
        categoryScoreP.style('right', '5%');
        totalScoreP.style('padding-left', '');
        copyrightP.style('padding-left', '');
        categoryScoreP.style('position', 'absolute');
        totalScoreP.style('position', 'absolute');
        copyrightP.style('position', 'absolute');
    }
}

// repositions and restyles the hint text based on the screen device and size
function resizeHintText(screenSize) {
    if (screenSize === 'desktop') {
        hintText.style('width', (rebusSizeCurrent * 0.7) + 'px');
        hintText.style('color', 'white');
        hintText.style('font-size', 'medium');
    } else {
        hintText.style('width', floor(activeRebusSizeMobile * 0.7) + 'px');
        hintText.style('color', 'black');
        hintText.style('font-size', 'large');
        hintText.position(activeRebusPositionMobile.x + (0.15 * activeRebusSizeMobile), activeRebusPositionMobile.y, 'relative');
    }
}

// resizes and restyles all buttons responivley, based on the screensize
function resizeButtons(screenSize) {
    if (screenSize == 'desktop') {
        scrollButtonUp.setValues();
        scrollButtonDown.setValues();
    } else {
        hintButton.opacity = 255;
    }
}

// resizes the width of an active rebus display (only shown on mobileMode)
// placed here so it will upadte every time the window resizes (and when program initializes)
// works the same way on mobile and desktop, so it doesn't need to take any arguments
function resizeActiveRebusMobileVariables() {
    // actually resize mobile values...
    activeRebusSizeMobile = rebusSizeCurrent * 2; // makes active rebus on mobile twice as big as normal rebus, aka 2/3 the screen size
    activeRebusPositionMobile.x = width / 2 - activeRebusSizeMobile / 2; // horizontally centers active rebus image
    textBoxPositionMobile.y = activeRebusSizeMobile + 2 * activeRebusPositionMobile.y; // height of active rebus plus a butter on top and on bottom
    textBoxPositionMobile.x = floor(width * 0.1); // text box is set to 80% in css, so this centers it horizontally
}

// // cool function i found that performs an action when a phone rotates between landscape and portrate mode. couldn't get it to reset the browser zoom though...
// function doOnOrientationChange() {
//   if(!loading){
//     switch(window.orientation) {  
//       case -90: case 90:
//         resizeWindowResponsivly();
//         alert('landscape');
//         break; 
//       default:
//         resizeWindowResponsivly();
//         alert('portrait');
//         break; 
//     }
//   }
// }

// window.addEventListener('orientationchange', doOnOrientationChange);

// // Initial execution if needed
// doOnOrientationChange();



////////////////////////////////////////////////////////////////////////////////
// Scroll Functions /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
//  functions that navigate and scroll the wonderful world of rebuses

// scrolls down the list of rebuses
function scrollDown() {
    print('scrolling down');
    if (scrollDistanceRemaining < 0) {
        // using remainder eliminates any queued extra rolls in the scroll
        scrollDistanceRemaining = rowHeight - (-1 * (scrollDistanceRemaining % rowHeight));
        return;
    }
    // if there there are more rebuses below...
    if (!atBottom() &&
        //     !currentlyScrolling &&  // prevents a ne scroll before the current scroll animation is complete TODO - maybe i'll allow this later, or only near the end of the current scroll, but it's a bit complicated- everything that checks if another scroll is allowed and all the variables used to calculate it are really only in place once the previous scroll has finished..
        !isCategoryMenuFocused()) {  // prevents scrolling while the user is havigating the category menu using the up/down arrows
        //     print('scrolling down!');
        // if the scroll down button hasn't been pressed too many times....
        //  this prevents someone pressing the down arrow like 30 times, then having to wait 30 seconds until it finishes scrolling
        if (scrollDistanceRemaining < (rebusSizeCurrent + spacingBetweenRebusesCurrent) * 0.5) { // dedede
            // calculates distance (px) needed to scroll down one more row
            scrollDistanceRemaining += rowHeight;
        }
        //  adjusts global variable to tell drawRebuses to call the scrollAnimation function while it's drawing all the rebuses
        areRebusesCurrentlyScrolling = true;
        deactivateAllRebuses(); // prevents text box from getting 'caught' at the bottom or top of the page while scrolling
        scrollButtonDown.opacityTimer = (255 * 0.75); // makes down arrow flash on the screen
    } else {  // if there aren't more rebuses below...
        print('at bottom already!') // lets user/console know there's no where else to scroll
        // TODO - maybe i should add some sort of animation here so user knows they're already at the bottom of the list?
    }
}

// scrolls up the list of rebuses
function scrollUp() {
    // reverses direction if I was jsut scrolling the other way
    if (scrollDistanceRemaining > 0) {
        // using remainder eliminates any queued extra rolls in the scroll
        scrollDistanceRemaining = -1 * (rowHeight - (scrollDistanceRemaining % rowHeight));
        return;
    }
    // if there there are more rebuses above...
    if (!atTop()) {
        //     print('scrolling up!');
        // if the scroll down button hasn't been pressed too many times....
        //  this prevents someone pressing the down arrow like 30 times, then having to wait 30 seconds until it finishes scrolling
        if (scrollDistanceRemaining > -1 * ((rebusSizeCurrent + spacingBetweenRebusesCurrent) * 0.5)) {
            // calculates distance (px) needed to scroll down 3 rows of rebuses
            scrollDistanceRemaining -= rowHeight;
        }
        //  adjusts global variable to tell drawRebuses to call the scrollAnimation function while it's drawing all the rebuses
        areRebusesCurrentlyScrolling = true;
        deactivateAllRebuses(); // prevents text box from getting 'caught' at the bottom or top of the page while scrolling
        scrollButtonUp.opacityTimer = (255 * 0.75); // makes down arrow flahs on the screen
    } else {  // if there aren't more rebuses below...
        print('at top already!') // lets user/console know there's no where else to scroll
        // TODO - maybe i should add some sort of animation here so user knows they're already at the bottom of the list?
    }
}

// returns true if there are not more rebuses below
function atBottom() {
    // not sure why 1.5 works but 1 or 2 doesnt..... maybe there's a better way #ifItAin'tBrokeDon'tFixIt
    if (abs(startingY) < (rowHeight * (numOfRows - 1.5)) - scrollDistanceRemaining) {
        return false;
    } else {
        return true;
    }
}

// returns true if there are not more rebuses above
function atTop() {
    if (startingY < -(rebusSizeCurrent)) {
        return false;
    } else {
        return true;
    }
}

// performs scrolling animation by moving the starting y value for drawing all the rebuses up or down, then resetting the y value and incrimenting the index at which to start drawing rebuses once scrolling is complete
function scrollAnimation() {
    // if scrolling down....
    if (scrollDistanceRemaining > 0) {
        // keeps down scrolling arrow opacity at it's darkest value as long as there's more than a full row left to scroll
        if (scrollDistanceRemaining > rebusSizeCurrent + spacingBetweenRebusesCurrent) {
            scrollButtonDown.opacityTimer = (255 * 0.75);
        }
        // incriments scrollDistanceRemaining if down arrow button is held down while the programing is already scrolling...
        // basically adds another row to the scrolling if the button is held while the previous amount of queued scrollling is going to finish soon...
        if (scrollDistanceRemaining < rowHeight / 2 &&
            keyIsPressed && keyCode === DOWN_ARROW && !atBottom()) {
            scrollDown();
        }
        // keeps scroll based on mouse wheel or touchpad swipe velocity
        if (scrollDistanceRemaining < rowHeight / 2 && scrollRate > 0) {
            scrollDown();
        }
        // keeps scrolling based on velocity
        //     if(scrollDistanceRemaining < rowHeight/2 && swipeVelocityRemaining > 30){
        //       scrollDown();
        // //       swipeVelocityRemaining -= 10;
        //     }
        // tiered scrolling conditions that slow scroll as it nears the end
        if (scrollDistanceRemaining > rebusSizeCurrent * 0.5) {
            // velocity based on swipe input
            //       if(swipeVelocityRemaining > 30){
            //         startingY -= 12 + (swipeVelocityRemaining);
            //         scrollDistanceRemaining -= 12 + (swipeVelocityRemaining);
            //         swipeVelocityRemaining -= 5;
            //       } else {
            // velocity based on mousewheel or mousepad input
            startingY -= 12 + ((scrollRate * scrollRate) / 3);
            scrollDistanceRemaining -= 12 + ((scrollRate * scrollRate) / 3);
            //       }
            print(scrollRate);
        } else if (scrollDistanceRemaining > 10) {
            let x = scrollDistanceRemaining * 0.125;
            scrollDistanceRemaining -= x;
            startingY -= x;
        } else if (scrollDistanceRemaining > 1) {
            scrollDistanceRemaining -= 1;
            startingY -= 1;
        } else {
            scrollDistanceRemaining = 0;
        }
    } else
        // if scrolling up....
        if (scrollDistanceRemaining < 0) {
            // keeps down scrolling arrow opacity at it's darkest value as long as there's more than a full row left to scroll
            if (scrollDistanceRemaining < -1 * (rebusSizeCurrent + spacingBetweenRebusesCurrent)) {
                scrollButtonUp.opacityTimer = (255 * 0.75);
            }
            // incriments scrollDistanceRemaining if up arrow button is held down while the programing is already scrolling...
            // basically adds another row to the scrolling if the button is held while the previous amount of queued scrollling is going to finish soon...
            if (scrollDistanceRemaining > -1 * (rowHeight / 2) &&
                keyIsPressed && keyCode === UP_ARROW && !atTop()) {
                scrollUp();
            }
            // keeps scroll based on velocity
            if (scrollDistanceRemaining > -1 * (rowHeight / 2) && scrollRate < 0) {
                scrollUp();
            }
            // tiered scrolling conditions that slow scroll as it nears the end
            if (scrollDistanceRemaining < -1 * rebusSizeCurrent * 0.5) {
                let deltaY = 12 + ((scrollRate * scrollRate) / 3);  // squareing scroll rate essentialy negeates negative values, use of abs() is not necesary, clever ;)
                //       print('deltaY: ' + deltaY);
                startingY += 12 + ((scrollRate * scrollRate) / 3);
                scrollDistanceRemaining += 12 + ((scrollRate * scrollRate) / 3);
            } else if (scrollDistanceRemaining < -10) {
                let deltaY = scrollDistanceRemaining * 0.125;
                //       print('deltaY: ' + deltaY);
                let x = scrollDistanceRemaining * 0.125;
                scrollDistanceRemaining -= x;
                startingY -= x;
            } else if (scrollDistanceRemaining < -1) {
                let deltaY = 1;
                //       print('deltaY: ' + deltaY);
                scrollDistanceRemaining += 1;
                startingY += 1;
            } else {
                scrollDistanceRemaining = 0;
            }
        }
    // if scrolling is finished, rounds startingY to closest row value, and sets global scrolling variable to false
    if (scrollDistanceRemaining == 0) {
        areRebusesCurrentlyScrolling = false;
        // rounds startingY to closest exact row
        let remainder = abs(startingY % rowHeight); //either0.1 or 239.9
        if (remainder < rowHeight / 2) {
            // round down
            startingY += remainder;
        } else
            if (remainder > rowHeight / 2) {
                // rounds up
                startingY -= (rowHeight - remainder);
            }
        // rounds off any tiny decimal places
        startingY = round(startingY);
    }
}

// scrolls and easses/settles into closest row of rebuses
function settle() {
    //   print('running settle');
    let remainder = abs(startingY % rowHeight); // pixels left to scroll to reach an even interval
    if (remainder > 0) areRebusesCurrentlyScrolling = true;
    // if closest even row is up....
    if (remainder < rowHeight / 2) {
        // scroll up to next even row
        scrollDistanceRemaining = -remainder;
        // if closest even row is down...
    } else if (remainder >= rowHeight / 2) {
        // scropp down to next even row....
        scrollDistanceRemaining = rowHeight - remainder;
    }
}

// moves mouse along with finger drag
function drag() {
    if (touches.length > 0) {
        //     print(touches);
        //let delta = touchStartedY - touches[0].y;
        let delta = touchStartedPosition.y - touches[0].y;
        let limitTop = 0;
        let limitBottom = -1 * ((numOfRows - 1) * rowHeight);
        startingY = startingYValueWhenTouchStarted - delta;
        if (startingY > limitTop) startingY = limitTop;
        if (startingY < limitBottom) startingY = limitBottom;
    }
}

// swipe animation
function swipeAnimation() {
    print('running swipeAnimation');
    if (abs(swipeVelocityRemaining) > 10) {
        startingY += swipeVelocityRemaining / 4;
        swipeVelocityRemaining *= 0.95;
        upperLimit = 0;
        lowerLimit = -1 * rowHeight * (numOfRows - 1);
        if (startingY > upperLimit) startingY = upperLimit;
        if (startingY < lowerLimit) startingY = lowerLimit;
    } else {
        settle();
        swipeVelocityRemaining = 0;
    }
}

// sudocode for all things scrolling
// set velocity(velocity, dir)
// velocity and dir variables = input from device (wheel, mousepad, finger), up until max velocity
// scroll(velocity, direction)
// if velocity != 0...
// scroll dir at velocity for 1 frame
// decrese velocity by smooth formula
// smooth formula
// if velocity <= slowing point
// map velocity decrease with quadratic curve to the next stopping point (smooth!)
// if velocity > slowing point
// decrease velocity by standard amount (or maybe I need to decrease it by exponential amount, like 10%? idk)
// when mouse wheel
// if MouseWheel is still spinning....
// get velocity and direction of mousewheel or touchpad swipe
// convert velocity to scale of speeds used in this program
// convert based on browser and input device
// set that velocity and dir with set velocity()
//if stopped suddenly while mouse wheeling, send 0 velocity input to set velocity (?)

// when scorllBar (desktop only) - maybe unclickable indicator on mobile that fadesin when scrolling
// draw
// height equals % of rebuses shown on screen
// minimum height
// position represents %down list of durrent rebuses
// if clicked
// record current position relative to mouse/touch Y value, and keep that position
// once released
// ease to clocset interval position
// arrow key or button (DESKTOP)
// if pressed once - scroll down smoothly the number of FULL rebuses taht currently fit on screen only
// if held (arrow key only), continue scrolling down at max fixed speed until released, then slow down to next closest lock position
// when touched (mobile or desktop)
// single flick - similar to mousewheel, scroll down at velocity, stop at interval, second flick adds more velocity
// if touched and held, scroll with finger
// if tapped while flying, stopped where tapped, but don't select that rebus, when finger released ease back to cloest position




////////////////////////////////////////////////////////////////////////////////
// Saving User Progress Functions (local storage) //////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// functions for asving and retrieving and user's progress

// saves a solved puzzle to browser's local storage
function saveToLocalStorage() {
    //   print('saving solved rebuses');
    let str1 = stringifySolvedRebusNames();  //turns array of solved rebus into comma-seperated string
    let str2 = stringifyStats();
    let str3 = stringifyHintsUsed();
    localStorage.setItem('solvedRebuses', str1);
    localStorage.setItem('stats', str2);
    localStorage.setItem('hintsUsed', str3);
}

// loads any previously solved rebuses from user's browser's local storage
function loadFromLocalStorage() {
    loadSolvedRebusesFromLocalStorage(); // loads previously solved rebuses
    destringifyAndLoadStats();  // loads stats
    destringifyAndLoadHintsUsed(); // loads prevously used hints
}

// loads any previously solved rebuses from user's brower's local storage
function loadSolvedRebusesFromLocalStorage() {
    //   print('loadingSolvedRebuses');
    if (localStorage.getItem('solvedRebuses') !== null) {  // only loads the data if there is data to load
        //     print('there is solved rebus data');
        let str = localStorage.getItem('solvedRebuses');
        solvedRebusNames = destringifySolvedRebusNames(str);
        for (let rebus of rebuses) {
            for (let element of solvedRebusNames) {
                if (rebus.name === element) {
                    rebus.solved = true;
                }
            }
        }
        numberOfCompletedRebuses = solvedRebusNames.length;
    }
    //   print('solvedRebusesLoaded');
}

// stringifies array of solved rebus names
//  returns a single string of comma-seperated solved rebus names
function stringifySolvedRebusNames() {
    return join(solvedRebusNames, ',');
}

// destringifies stored comma-seperated string of solved rebus names
//  returns an array of solved rebus name strings
function destringifySolvedRebusNames(str) {
    return splitTokens(str, ',');
}

// turns all stat dat into a string (key:value pairs, comma seperated) and saves it to local storage
function stringifyStats() {
    let str;
    // saves total time playing so far, in seconds
    str = 'totalTimePlaying:' + totalTimePlaying;
    str = str + ','; // comma used as seperator between key value pairs
    // saves total number of incorrect guesses so far
    str = str + 'numberOfIncorrectGuesses:' + numberOfIncorrectGuesses;
    str = str + ',';
    // saves worst guess so far
    str = str + 'worstGuessSoFar:' + worstGuessSoFar;
    return str;
}

// destringifies and loads stats from local storage from the user's previous session
function destringifyAndLoadStats() {
    if (localStorage.getItem('stats') !== null) {  // only loads the data if there is data to load
        // splits the loaded stats string an array of key:value pairs
        let loadedDataStr = splitTokens(localStorage.getItem('stats'), ',');
        let arrayOfLoadedStats = [];
        for (let pair of loadedDataStr) {  // for every key-value pair saved in this array...
            arrayOfLoadedStats.push(splitTokens(pair, ':'));  // turn a key-value pair stored as a string into an array with a length of 2, with the first index storing the key, and the second index storing the value
        }
        for (let array of arrayOfLoadedStats) {
            if (array[0] === 'totalTimePlaying') { totalTimePlaying = Number(array[1]); } else
                if (array[0] === 'numberOfIncorrectGuesses') { numberOfIncorrectGuesses = Number(array[1]); } else
                    if (array[0] === 'worstGuessSoFar') { worstGuessSoFar = array[1]; }
        }
        //     print(arrayOfLoadedStats);
    }
}

// stores used hints as a string along with their corresponding rebus object's name
function stringifyHintsUsed() {
    let str = '';
    for (let i = 0; i < hintsUsed.length; i++) {
        // for the first item don't precede it with a comma
        if (i === 0) {
            str = hintsUsed[i];
        } else if (i > 0) {
            str = str + ',' + hintsUsed[i];
        }
    }
    return str;
}

// loads any hints used in the previous session(s)
function destringifyAndLoadHintsUsed() {
    if (localStorage.getItem('hintsUsed') !== null) {  // only loads the data if there is data to load
        let arr = split(localStorage.getItem('hintsUsed'), ',');
        //     print('arr: ' + arr);
        for (let nmPair of arr) {
            hintsUsed.push(nmPair);
        }
        // updates global variable that keeps track of num of used hints
        numberOfHintsUsed = arr.length;
        //     print('loaded used hints: ' + hintsUsed);
        // updates rebus object internal varialbes to reflect hints used in the user's previous session(s)
        for (let hint of hintsUsed) {
            let splitNvPair = split(hint, ':'); // splits the stored name-value pair in array with two strings
            let n = splitNvPair[0]; // stores first half of the name-value pair, which should be the name of the rebus
            let h = splitNvPair[1]; // stores second half of the name-value pair, which should be which hint was used, either h1 or h2
            for (let i = 0; i < rebuses.length; i++) {  // for every rebus...
                if (rebuses[i].name === n) { // if that rebus's name matches the name of the used hint name-value pair...
                    if (h === 'h1') { // if it's the first hint....
                        rebuses[i].hint1Viewed = true; // set the first hint to used
                    }
                    if (h === 'h2') { // if it's the second hint...
                        rebuses[i].hint2Viewed = true; // set the second hint to used
                    }
                    // if the rebus has been solved (t's obviously been solve dusing a hint!)
                    if (rebuses[i].solved) {
                        numberOfCompletedRebusesWithoutHints += 1;
                    }
                    i = rebuses.length; // stops the loops through all rebuses early once the name-value pair has been identified and assigned property - in my vauge attempts make this program at least SLIGHTLY less ineffecient
                }
            }
        }
    }
}

// clears all user saved data (solved rebuses, stats, ect);
function clearSavedData() {
    print('clearing saved data');
    solvedRebusNames = [];  // empties array of solved rebus names
    setAllRebusPuzzlesToUnsolved();
    updateScores(); // resets solved scores to zero
    resetAllStats();  // resets all stats to their default values
    saveToLocalStorage(); // saves all cleared stats (at their default/empty values) to the brower's local storage (so it can't load any data from before the lcear button was pressed the next time the uers visits the site)
}



////////////////////////////////////////////////////////////////////////////////
// stats Functions //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// used to calculate and display the stats on the state page/mode

// returns the category with the highest number of rebuses solved
function calcStrongestCategory() {
    let catScores = new p5.Table(); // creates table to tally solved rebus categories
    catScores.addColumn('category');
    catScores.addColumn('tally');
    // adds all categories to table
    for (let cat of categories) {
        let newRow = catScores.addRow();
        newRow.set('category', cat);
        newRow.set('tally', 0);
    }
    // if a rebus is solved, increases the talley by one of it's category (and second category, if it has one)
    for (let rebus of rebuses) {
        if (rebus.solved) {
            let row = catScores.findRow(rebus.category, 'category');
            let oldTally = int(row.get('tally'));
            row.setString('tally', oldTally + 1);
            if (rebus.secondCategory !== '') {
                let row = catScores.findRow(rebus.secondCategory, 'category');
                let oldTally = int(row.get('tally'));
                row.setString('tally', oldTally + 1);
            }
        }
    }
    // finds category with most tallys
    let cat = '';
    let strongestCategoryTally = 0;
    for (let i = 0; i < catScores.getRowCount(); i++) {
        let x = catScores.get(i, 'tally');
        if (x > strongestCategoryTally) {
            strongestCategoryTally = x;
            cat = catScores.get(i, 'category');
        } else
            if (x == strongestCategoryTally && x > 0) {
                cat = cat + ' and ' + catScores.get(i, 'category');
            }
    }
    if (strongestCategoryTally > 0) {
        strongestCategory = cat;
    }
    //   print(catScores);
}

// recalculates 'worst wrong answer so far' stat
function calcWorstWrongAnswer(guess) {
    numberOfIncorrectGuesses += 1;  // incriment number of incorrrect guesses counter
    if (numberOfIncorrectGuesses == 1) {  // if it's the first wrong guess...
        worstGuessSoFar = guess;  // set that guess as worst answer
    } else {
        let x = random(0, numberOfIncorrectGuesses);
        //     print('x: ' + x + ', numOfIncGues: ' + numberOfIncorrectGuesses*0.9);
        if (x > numberOfIncorrectGuesses * 0.9) { // replaces previous 'worst' guess about 80% of the time
            //       print('replacing ' + worstGuessSoFar + ' with ' + guess);
            worstGuessSoFar = guess;
        }
    }
}

// resets all stats
function resetAllStats() {
    strongestCategory = 'none yet';
    numberOfIncorrectGuesses = 0;
    worstGuessSoFar = 'none yet';
    totalTimePlaying = 0;
    numberOfHintsUsed = 0;
    numberOfCompletedRebusesWithoutHints = 0;
    hintsUsed = [];
}

// called with set interval every 1000ms, incriments counter if tab is active
function calcTimePlaying() {
    if (isTabActive) {
        totalTimePlaying += 1;
        saveToLocalStorage(); // needed here to save  the 'total time played' stat in the brower's local store every time it's changed aka every time this function is called
    }
}

// called with set interval every 1000ms, incriments counter if tab is active
function convertSecondsToTimeString() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    seconds = totalTimePlaying;
    if (seconds >= 60) {
        seconds = totalTimePlaying % 60;
        minutes = floor(totalTimePlaying / 60);
    }
    if (minutes >= 60) {
        hours = floor(minutes / 60);
        minutes = minutes % 60;
    }
    // converts and formats number variables into a time string '*H:MM:SS'
    let secondsStr;
    if (seconds < 10) {
        secondsStr = '0' + seconds.toString();
    } else {
        secondsStr = seconds.toString();
    }
    let minutesStr;
    if (minutes < 10) {
        minutesStr = '0' + minutes.toString();
    } else {
        minutesStr = minutes.toString();
    }
    return (hours.toString() + ':' + minutesStr + ':' + secondsStr);
}

// returns a string with the average time to solve a single rebus, formatted nicely
function calcRebusSolvingRate() {
    //   print('running calcRebusSolvingRate');
    let str;
    let rate;
    if (numberOfCompletedRebuses == 0) {
        str = 'none';
    }
    if (numberOfCompletedRebuses > 0) { // avoids dividing by 0
        rate = floor(totalTimePlaying / numberOfCompletedRebuses);
    }
    if (rate < 60) {
        let rateStr = rate.toString();
        str = rateStr + 's per rebus';
    }
    if (rate > 60) {
        let minutes = floor(rate / 60);
        let minutesStr = minutes.toString();
        let seconds = rate % 60;
        let secondsStr = seconds.toString();
        str = minutesStr + 'm ' + secondsStr + 's per rebus';
    }
    //   print('finished calcRebusSolvingRate, resule: ' + str);
    return str;
}

// returns the correct guess percentage
function calcCorrectGuessPercentage() {
    let str;
    let percentage;
    if (numberOfCompletedRebuses == 0) {
        str = '0%';
    } else {
        let totalNumberOfGuesses = numberOfCompletedRebuses + numberOfIncorrectGuesses;
        percentage = round((numberOfCompletedRebuses / totalNumberOfGuesses) * 100, 2); // calculates percentage and rounds to two decimal places
        str = percentage + '%';
    }
    return str;
}

// retrns user's current rebus ranking
function calcRebusRank() {
    let index = numberOfCompletedRebuses;
    index = map(index, 0, rebuses.length, 0, rebusRanks.length - 1);
    index = floor(index);
    return rebusRanks[index];
}



////////////////////////////////////////////////////////////////////////////////
// Misc Functions //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
// don't have a logical place to put these yet

// sets active rebus puzzle
function setActiveRebus(index) {
    print('setting actie rebus index to: ' + index);
    deactivateAllRebuses();
    activeRebusIndex = index;
    // if the selected rebus is partially off the screen, scroll up so it's on the screen
    drawRebuses(); // resets the x and y location values for rebus, requred for the isRebusOnScreenFunction
    if (!isRebusOnScreen(activeRebusIndex)) { // if the clicked on rebus is not on the screen, scroll up so that it isRebusOnScreen
        scrollDown();
    }
    // sets activeFIlteredRebusIndex
    for (let i = 0; i < filteredRebusIndices.length; i++) {
        if (index == rebuses[filteredRebusIndices[i]].index) {
            activeFilteredRebusIndex = i;
        }
    }
    //   print('active rebus index: ' + activeRebusIndex);
    //   print('active filtered rebus index: ' + activeFilteredRebusIndex);
    rebuses[filteredRebusIndices[activeFilteredRebusIndex]].active = true;
    // resets hover durration counter when rebus is made active (so hint icon doesn't appear immedietly if user clicks on a rebus they've been hovering mose over before clicked on
    rebuses[filteredRebusIndices[activeFilteredRebusIndex]].hoverDuration = 0;
    textInputBox.show();  // unhides text box when a rebus is active (so user can enter guesses!)
    isARebusIsCurrentlyActive = true; // global variable, used to trigger actions in draw loop
    if (isMobileMode()) { // if user is on a mobile device...
        closeButton = new ButtonRound();  // creates a new close button
        closeButton.setLocation(width - (rebusSizeCurrent / 4), 10 + closeButton.r); // sets the location of that close button
        closeButton.setStyle('closeButtonMobile');  // styles close button for mobile
        closeButton.textSize = closeButton.r * 1.5;
        hintButton.textSize = closeButton.r * 1.5;
        if (rebuses[activeRebusIndex].numOfHints > 0) {
            hintButton.setStyle('hintButtonMobile');
        } else {
            hintButton.setStyle('hintButtonMobileNoHints');
        }
    }
    // sets the text input box to active as soon as the rebus is activated
    if (!isTextInputBoxFocused()) {
        document.getElementById('textbox').focus()
        //     print('setting focus to text box');
    }
}

// deactivates all rebus puzzles
function deactivateAllRebuses() {
    print('deactivating all rebuses!');
    for (let rebus of rebuses) {
        rebus.active = false;
        rebus.showHints = false;  // turns off 'show hints' so the next time the rebus is activated the hints won't be turned on
        rebus.xLoc = -240;
        rebus.yLoc = -240;
    }
    textInputBox.hide();  // hides text input box
    textInputBox.value(''); // clears text from input box
    // resets hint buttons, hides hint text
    hintButton.setStyle('hintButtonInactive');
    h1Button.setStyle('h1or2ButtonInactive');
    h2Button.setStyle('h1or2ButtonInactive');
    hintText.hide();
    isARebusIsCurrentlyActive = false; // global variable, used to trigger actions in draw loop
}

// sets all solved rebus puzzles back to unsolved
function setAllRebusPuzzlesToUnsolved() {
    // sets all rebus objects to unsolved
    for (let rebus of rebuses) {
        rebus.solved = false;
        rebus.hint1Viewed = false;
        rebus.hint2Viewed = false;
        rebus.hint1Active = false;
        rebus.hint2Active = false;
    }
    // resets solved counter
    numberOfCompletedRebuses = 0;
    // overwrites local storage no rebuses are solved upon refresh
    saveToLocalStorage();
}

// reutns true if the inpux text box is currently 'focused' on
function isTextInputBoxFocused() {
    return document.activeElement === document.getElementById('textbox'); // javascript functions, can't combined javascript document.activeElement with p5.element object textInputBox, unfortunatley. but hey, helps me to start learning actual javasript! :P
}

// reutns true if category dropdown menu is currently 'focused' on
function isCategoryMenuFocused() {
    return document.activeElement === document.getElementById('categories'); // javascript functions, can't combined javascript document.activeElement with p5.element object textInputBox, unfortunatley. but hey, helps me to start learning actual javasript! :P
}

// toggles a global variable if tab is the active tab or not
window.onblur = function () { isTabActive = false; } // called when window focus is changed, i think...
window.onfocus = function () { isTabActive = true; }

// checks if a user's guess types into the text input box was correct
function checkGuess(guess) {
    // simplifies guess and answer strings for comparason
    //   print('checking guess: ' + guess);
    let adjustedGuess = guess.toLowerCase(); // converts guess to all lower-case
    adjustedGuess = adjustedGuess.replace(/\W/g, ''); // removes all non-alphanumeric charecters
    //   print('adjusted guess: ' + adjustedGuess);
    let adjustedAnswer = rebuses[activeRebusIndex].answer.toLowerCase(); // converts answer to all lower case
    adjustedAnswer = adjustedAnswer.replace(/\W/g, ''); // removes all non-alphanumeric charecters
    //   print('adjusted answer: ' + adjustedAnswer);
    let adjustedAnswers = []; // array to hold all possible answers
    adjustedAnswers.push(adjustedAnswer); // adds main answer to adjusted answer list
    if (rebuses[activeRebusIndex].alternateAnswers.length > 0) {  // if the rebus has any alternate answers...
        let nextAdjustedAnswer;
        for (let str of rebuses[activeRebusIndex].alternateAnswers) { // for every alternate answer the rebus has...
            nextAdjustedAnswer = str.toLowerCase(); // converts alternate answer to lower case
            nextAdjustedAnswer = nextAdjustedAnswer.replace(/\W/g, ''); // removes all non-alphanumeric charecters
            adjustedAnswers.push(nextAdjustedAnswer); // adds alternate answer to the list of possible answers to check guess against
        }
    }
    // checks to see if guess matches either the answer or any of the alternate answers
    let correct = false;
    //   print(adjustedAnswers);
    for (let answer of adjustedAnswers) {
        if (adjustedGuess === answer) { correct = true; }
    }
    // if guess was correct...
    if (correct) {
        print('Correct guess!');
        rebuses[filteredRebusIndices[activeFilteredRebusIndex]].solved = true; // set rebus to solved
        solvedRebusNames.push(rebuses[filteredRebusIndices[activeFilteredRebusIndex]].name);  // saves name of rebus, to be stringified and saved to local storage
        //     print(solvedRebusNames);
        saveToLocalStorage(); // saves the new solved puzzle and any related stat data to browser's local storage
        deactivateAllRebuses(); // sets the just-solved rebus to not active (aka hides input textbox)
        numberOfCompletedRebuses += 1; // incriments the 'solved rebuses' counter
        // if neither of this rebuses's hints have been viewed...
        if (!rebuses[filteredRebusIndices[activeFilteredRebusIndex]].hint1Viewed && !rebuses[filteredRebusIndices[activeFilteredRebusIndex]].hint2Viewed) {
            // incriment the 'solved without hints' counter
            numberOfCompletedRebusesWithoutHints += 1;
        }
        updateScores(); // updates scores at bottom of screen
        calcStrongestCategory();
        // if guess in incorrect...
    } else {
        print('Incorrect guess!');
        textInputBox.value(''); // clears text input box after an incorrect guess was submitted
        if (rebuses[activeRebusIndex].incorrectAnimationTimer < 150) {  // if you give lots of incorrect answers really fast, this conditional prevents the red from becoming too opaque
            rebuses[activeRebusIndex].incorrectAnimationTimer += 60; // triggers 'red' animation for for 60 frames
        } else {
            rebuses[activeRebusIndex].incorrectAnimationTimer = 150;  // sets red opacity only to max value of 150
        }
        calcWorstWrongAnswer(guess);  // recalculates the user's worst answer so far
        saveToLocalStorage(); // saves the incorrect answer count & worst answer yet stats to the local storage
    }
}

// toggles which hint is currently being shown
// 0 argument = no hints / deactivate hints
// 12 argument = something....
function toggleHints(hintNumber) {
    // if puzzle has no hints....
    if (rebuses[activeRebusIndex].numOfHints === 0) {
        hintText.html("This puzzle doesn't yet have any hints");
    }
    let hintTextLocX = rebuses[activeRebusIndex].xLoc + (rebusSizeCurrent * 0.15);
    let hintTextLocY = rebuses[activeRebusIndex].yLoc + (rebusSizeCurrent * 0.14);
    hintText.show(); // makes hint text visible
    // if hint1 button was clicked on and this rebus actually has a hint 1...
    if (hintNumber === 1 && rebuses[activeRebusIndex].hint1) {
        h1Button.setStyle('h1or2ButtonActive'); // set style of hint1 button to 'active' (FYI: active used and active unused are the same)
        h2Button.setStyle('h1or2ButtonInactive'); // set style of hint2 btton to 'inactive'
        if (rebuses[activeRebusIndex].hint2Viewed) {  // if hint2 has already been used....
            h2Button.setStyle('h1or2ButtonInactiveViewed');  // then override the style of the hint 2 button by setting it to 'inactive but viewed' mode
        }
        // if hint 1 hasn't been viewed before...
        if (rebuses[activeRebusIndex].hint1Viewed === false) {
            rebuses[activeRebusIndex].hint1Viewed = true; // set hint1 value inside this rebus object to used
            numberOfHintsUsed += 1; // incriment 'number of hints used' counter (for stats)
            hintsUsed.push(rebuses[activeRebusIndex].name + ':h1');  // adds this hint ot the list of used hints
        }
        // toggles which hint is the active hint within the active rebus object
        rebuses[activeRebusIndex].hint1Active = true;
        rebuses[activeRebusIndex].hint2Active = false;
        hintText.show();  // unhides hinttext DOM <p> element
        if (isDesktopMode()) {  // hint text repositions is irrelevatn on mobile devices (hints always stay in same places)
            hintText.position(hintTextLocX, hintTextLocY);  // positions hintText relative to the location of this (the active) rebus
        }
        hintText.html(rebuses[activeRebusIndex].hint1); // updates the hintText <p> DOM element with the hint text (string) stored in this rebus object
        return; // ends function early, saves some effeciency maybe?
    }
    // if hint2 button was clicked on and this rebus actually has a hint 2...
    if (hintNumber === 2 && rebuses[activeRebusIndex].hint2) {
        hintTextLocY += rebusSizeCurrent * 0.11;  // incriments downward slightly the location of the second hint button
        h2Button.setStyle('h1or2ButtonActive'); // set style of hint2 button to 'active' (FYI: active used and active unused are the same)
        h1Button.setStyle('h1or2ButtonInactive'); // set style of hint1 btton to 'inactive'
        if (rebuses[activeRebusIndex].hint1Viewed) { // if hint1 has already been used....
            h1Button.setStyle('h1or2ButtonInactiveViewed');  // then override the style of the hint 1 button by setting it to 'inactive but viewed' mode
        }
        // if hint 2 hasn't been viewed before...
        if (rebuses[activeRebusIndex].hint2Viewed === false) {
            rebuses[activeRebusIndex].hint2Viewed = true;  // set hint2 value inside this rebus object to viewed
            numberOfHintsUsed += 1; // incriment 'number of hints used' counter (for stats)
            hintsUsed.push(rebuses[activeRebusIndex].name + ':h2');  // adds this hint to the list of used hints
        }
        // toggles the active hint within the active rebus object
        rebuses[activeRebusIndex].hint2Active = true;
        rebuses[activeRebusIndex].hint1Active = false;
        hintText.show();  // unhides hinttext DOM <p> element
        if (isDesktopMode()) {  // hint text repositions is irrelevatn on mobile devices (hints always stay in same places)
            hintText.position(hintTextLocX, hintTextLocY);  // positions hintText relative to the location of this (the active) rebus
        }
        hintText.html(rebuses[activeRebusIndex].hint2); // updates the hintText <p> DOM element with the hint text (string) stored in this rebus object
        return; // ends function early, saves some effeciency maybe?
    }
    // by default, when the '?' hint button is clicked on a rebus, both hint1 and hint2 buttons are reinitalized with a default style of 'inactive and unviewed'
    //  this case checks to see if either of the hints have been viewed before (in this OR a previous session), and if so it updates their default style to be "inactive and viewed' instead
    if (hintNumber === 12) {
        // if hint1 has been viewed before, sets it's style to 'inactive but viewed'
        if (rebuses[activeRebusIndex].hint1Viewed) {
            h1Button.setStyle('h1or2ButtonInactiveViewed');
        }
        // if hint2 has been viewed before, sets it's style to 'inactive but viewed'
        if (rebuses[activeRebusIndex].hint2Viewed) {
            h2Button.setStyle('h1or2ButtonInactiveViewed');
        }
        hintText.hide();  // makes sure the int text is initally hidden until either the hint1 or hint2 button has been clicked on
    }
    // hides hint text
    //  FYI: hint1 & hint2 buttons should already be hidden because the call to this toggles off the rebus's 'showHints' variable, which prevents the hint buttons from being drawn
    //  hintText needs to be hidden because it's a ODM <p> element, not a p5-generated button object though. Make sense? Hope so, it did when I wrote it. Sorta...
    if (hintNumber === 0) {
        hintText.hide();
    }
}

// returns true if the rebus at the argument index is fully displayed on the screen
function isRebusOnScreen(index) {
    let bool = true;
    if (rebuses[index].yLoc + rebusSizeCurrent + spacingBetweenRebusesCurrent > height) {
        bool = false;
    }
    return bool;
}