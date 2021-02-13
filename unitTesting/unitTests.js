/** Holds and runs all unit tests within! */
function runAllUnitTests() {

    // object that actually runs all unit tests, stores the results, and displays them in a new html page
    let unitTestRunner = new UnitTestRunner();

    //#region PRELOAD TESTS
    //TODO: Make these run as SOON as we start the setup function! - but save the results?

    //#region rebusDataTable TESTS

    unitTestRunner.executeTest(
        'Preload - rebusDataTable',
        'Did rebus data table load?',
        function () {
            return rebusDataTable != null ? 'yes' : 'no';
        },
        'yes'
    );

    unitTestRunner.executeTest(
        'Preload - rebusDataTable',
        'Does rebus data table have at least one row',
        function () {
            return rebusDataTable.getRowCount() > 0 ? 'yes' : 'no';
        },
        'yes'
    );

    unitTestRunner.executeTest(
        'Preload - rebusDataTable',
        'Does rebus data table have at least one colums',
        function () {
            return rebusDataTable.getColumnCount() > 0 ? 'yes' : 'no';
        },
        'yes'
    );

    //#endregion rebusDataTable TESTS

    //#region loadingImage TESTS

    unitTestRunner.executeTest(
        'Preload - loadingImage',
        'Does loadingImage load?',
        function () {
            return loadingImage != null ? 'yes' : 'no';
        },
        'yes'
    );

    //#endregion loadingImage TESTS

    //#region rebusRankDataTable TESTS

    unitTestRunner.executeTest(
        'Preload - rebusRankDataTable',
        'Does rebusRankDataTable load?',
        function () {
            return rebusRankDataTable != null ? 'yes' : 'no';
        },
        'yes'
    );

    unitTestRunner.executeTest(
        'Preload - rebusRankDataTable',
        'Does rebusRankDataTable have one column?',
        function () {
            return rebusRankDataTable.getColumnCount();
        },
        1
    );

    unitTestRunner.executeTest(
        'Preload - rebusRankDataTable',
        'Does rebusRankDataTable have at least 17 rows/ranks?',
        function () {
            return rebusRankDataTable.getRowCount()
        },
        x => x >= 17
    );

    //#endregion rebusRankDataTable TESTS

    //#endregion PRELOAD TESTS

    //#region LOAD AND SETUP() TESTS

    unitTestRunner.executeTest(
        'Setup - rebuses',
        'Did all rows of the rebusDataTable get created as rebus objects in rebuses?',
        function () {
            return rebuses.length;
        },
        totalNumberOfRebuses
    );

    //#endregion LOAD AND SETUP() TESTS


    newpage = window.open('unitTesting/unitTestResults.html');
    let str = unitTestRunner.getFormattedTestResults();
    //TODO: get this working better, not just with 'document.write' but actually add DOM elements to the body of the new test result page...
    //TODO: Move this to unit test runner! (unitTestRunner.showResults() or something?)
    newpage.document.write(str);
}