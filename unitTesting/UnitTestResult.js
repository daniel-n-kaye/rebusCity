/** Object representing the results from a single unit tests */
class UnitTestResult {
    constructor(testGroupName, testName, passed, expectedResult, actualResult) {
        this.testGroupName = testGroupName;
        this.testName = testName;
        this.passed = passed;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }

    /** Returns a string representation of the 'passed' boolean (Ex: "Passed!" or "Failed!") */
    getPassOrFailText() {
        return this.passed ? 'Passed!' : 'Failed';
    }
}