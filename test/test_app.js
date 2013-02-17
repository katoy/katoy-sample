var Browser, browser, expect;

expect = require("expect.js");

Browser = require("zombie");

browser = new Browser();

TEST_URL = 'http://localhost:3000';

describe('アクセスのテスト', function() {
    return it('トップページのタイトルは Express か？', function(done) {
        return browser.visit(TEST_URL, function() {
            expect(browser.text('title')).to.equal('Express');
            return done();
        });
    });
});

