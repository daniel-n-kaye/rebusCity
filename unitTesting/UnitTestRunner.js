//TODO: Add exception handling!
/** Class to execute unit tests, and record and display their results */
class UnitTestRunner {
    constructor() {
        /** List to hold all unit test result objects 
         @type {UnitTestResult} */
        this.testResults = [];
    }

    /** Reutns a html string (with tags) describing the test results of all run tests */
    getFormattedTestResults() {
        let formattedTestResults = "<h1>Unit Test Results</h1>";
        formattedTestResults += this.getTestSummary();
        let previousTestGroupName;
        for (let testResult of this.testResults) {
            // starts new group header
            if (testResult.testGroupName != previousTestGroupName)
                formattedTestResults += "<h3>" + testResult.testGroupName + "</h3>";
            previousTestGroupName = testResult.testGroupName;
            // adds line for test result for that test
            if (!testResult.passed) {
                formattedTestResults += '<p style = "color:red;font-weight:bold;">';
            }
            else {
                formattedTestResults += '<p>';
            }
            formattedTestResults += testResult.testName + "::" + testResult.getPassOrFailText() + "</p>";
            if (!testResult.passed) {
                formattedTestResults += "<p>&emsp;Expected Result: " + testResult.expectedResult + "</p>"
                formattedTestResults += "<p>&emsp;Actual Result: " + testResult.actualResult + "</p>"
            }
        }

        return formattedTestResults;
    }

    /** Returns an html <p> string representing how many tests were run and passed (example: '<p>9/10 tests passed</p>') */
    getTestSummary() {
        let numOfTestsRun = this.testResults.length;
        let numOfTestsPassed = 0;
        for (let testResult of this.testResults) {
            if (testResult.passed)
                numOfTestsPassed++;
        }
        return "<p>Total Tests Passed: " + numOfTestsPassed + "/" + numOfTestsRun + "</p>";
    }

    /**
     * Executes the given test method and records the results
     * @param {string} testGroupName name of group this unit test should belong to
     * @param {string} testName name of the specific unit test, basically describing what it does and/or what method it's testing
     * @param {any} testMethod actual function that will produce the actual result fromt the test
     * @param {any} expectedResult expected result from the test method in the previous argument, will be compared to this with '==' operator.
     */
    executeTest(testGroupName, testName, testMethod, expectedResult) {
        let actualResult = testMethod(); // run given test method
        let passed = expectedResult == actualResult; // deteminer whether actual result matched the expected
        // create a new unit test result object to store this test's results
        let testResult = new UnitTestResult(testGroupName, testName, passed, expectedResult, actualResult);
        this.testResults.push(testResult); // add this test result to this classes's list of test results
    }
}