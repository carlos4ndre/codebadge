module.exports = function(grunt) {
  //--------------------------==
  // Configure grunt plugins
  //--------------------------==
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["node_modules", "web/codebadge.html", "*.{png,gif,jpg,pdf}"],
  });

  //-----------------------==
  // Load grunt plugins
  //-----------------------==
  grunt.loadNpmTasks('grunt-contrib-clean');
}
