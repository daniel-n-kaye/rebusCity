if (detectInternetExplorer())
    alert("Warning: Your current browser in not supported, and RebusCity.com may not display properly!");

/** Returns true if the site is being viewed through Internet Explorer
* @returns {bool} */
function detectInternetExplorer() {
    user_agent = navigator.userAgent;
    var isBrowserIE = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
    return isBrowserIE;
}