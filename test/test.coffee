
expect = require "expect.js"
Browser = require "zombie" 
browser = new Browser() 

describe 'Googleのテスト', ->
    it 'google.comにアクセスできる？', (done) ->
      browser.visit 'http://www.google.com', ->
        expect(browser.text 'title').to.equal 'Google'
        done()
