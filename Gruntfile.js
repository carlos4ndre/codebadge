module.exports = function(grunt) {
  //--------------------------==
  // Configure grunt plugins
  //--------------------------==
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["node_modules", "results", "web/codebadge.html", "*.{png,gif,jpg,pdf}"],
    mochaTest: {
      test: {
        options: {
          reporter: 'nyan',
          timeout: 10000
        },
        src: ['test/**/*.js']
      }
    }
  });

  //-----------------------==
  // Load grunt plugins
  //-----------------------==
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
}
