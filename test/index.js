
var rework = require('rework');
var clearfix = require('..');
var fs = require('fs');
var path = require('path');
var read = fs.readFileSync;
var readdir = fs.readdirSync;

describe('should support clear:', function() {
  readdir('test/fixture').forEach(function(file) {
    if (~file.indexOf('.out')) return
    var base = path.basename(file, '.css')
    var input = read('test/fixture/' + file, 'utf8')
    var output = read('test/fixture/' + base + '.out.css', 'utf8')

    it(base, function(){
      var css = rework(input)
        .use(clearfix)
        .toString().trim()

      css.should.equal(output.trim())
    })
  })
})
