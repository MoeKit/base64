var base64 = require('../index');
var expect = require('expect');
describe('base64', function () {
    it('normal usage', function () {
        expect(base64.encode('1344771')).to.be('MTM0NDc3MQ==');
        expect(base64.decode('MTM0NDc3MQ==')).to.be('1344771');
        expect(base64.isBase64('MTM0NDc3MQ==')).to.be(true);
        expect(base64.isBase64('1344771')).to.be(false);
    });
});


