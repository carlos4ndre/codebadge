describe('CodeBadge', function(){
  var shell = require('shelljs');
  var SCREENSHOTS_DIR = 'test/screenshots'

  describe('Rendering a codebadge', function() {
    it('should render a stable codebadge', function(done) {
      var args = [ 'build', 'stable', '" passing "' ]
      var opts = [ '--filename stable-badge', '--directory ' + SCREENSHOTS_DIR ]
      var cmd = 'phantomjs codebadge.js ' + args.join(" ") + " " + opts.join(" ");
      if(shell.exec(cmd).code == 0) {
        done();
      }
    })

    it('should render a warning codebadge ', function(done) {
      var args = [ 'build', 'warning', '" 5 tests are failing "' ]
      var opts = [ '--filename warning-badge', '--directory ' + SCREENSHOTS_DIR ]
      var cmd = 'phantomjs codebadge.js ' + args.join(" ") + " " + opts.join(" ");
      if(shell.exec(cmd).code == 0) {
        done();
      }
    })

    it('should render a critical codebadge ', function(done) {
      var args = [ 'build', 'critical', '" codemageddon has arrived! "' ]
      var opts = [ '--filename critical-badge', '--directory ' + SCREENSHOTS_DIR ]
      var cmd = 'phantomjs codebadge.js ' + args.join(" ") + " " + opts.join(" ");
      if(shell.exec(cmd).code == 0) {
        done();
      }
    })

    it('should render an unknown codebadge ', function(done) {
      var args = [ 'build', 'unknown', '" no build information was provided "' ]
      var opts = [ '--filename unknown-badge', '--directory ' + SCREENSHOTS_DIR ]
      var cmd = 'phantomjs codebadge.js ' + args.join(" ") + " " + opts.join(" ");
      if(shell.exec(cmd).code == 0) {
        done();
      }
    })

  })
})
