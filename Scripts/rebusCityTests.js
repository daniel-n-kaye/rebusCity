/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/rebusCityLocal.js" />


var fs = require('fs')
var myCode = fs.readFileSync('rebusCityLocal.js', 'utf-8') // depends on the file encoding
eval(myCode)

describe('First Rebsut City Test', function () {
    it("description of test?", function () {
        expect(testRebusMethod()).toEqual('data/rebusCityDataTable.csv');
    });
});