var base64 = require('../src/base64');
var expect = require('expect');
describe('base64', function () {
    it('normal usage', function () {
        expect(base64.encode('1344771')).to.be('MTM0NDc3MQ==');
        expect(base64.decode('MTM0NDc3MQ==')).to.be('1344771');
    });
});


