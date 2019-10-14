var fs = require('fs-extra')
var Purgecss = require('purgecss')
var purgecss = new Purgecss({
  content: ['./dist/agency/index.html', './dist/agency/*.js'],
  css: ['./dist/agency/styles.css']
})
var purgecssResult = purgecss.purge()
fs.outputFile('./dist/agency/styles.css', purgecssResult[0].css);
