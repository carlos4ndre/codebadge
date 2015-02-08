var page = require('webpage').create();
var system = require('system');
var fs = require('fs');
var handlebars = require('handlebars');
var optparse = require('optparse');

var DEFAULT_THEME = 'robot';
var DEFAULT_IMAGE_FORMAT = 'png';
var DEFAULT_IMAGE_QUALITY = '100';
var DEFAULT_FILENAME = 'codebadge';
var DEFAULT_DIRECTORY = '.';

var templatePath = 'web/templates/codebadge.html';
var badgeHtmlPath = 'web/codebadge.html';


// define options
var SWITCHES = [
  ['-d', '--debug', 'Enables debug mode'],
  ['-h', '--help', 'Shows help sections'],
  ['--format [png|gif|jpeg|pdf]', 'Sets the output format of the image'],
  ['--quality [1..100]', 'Sets the quality of the image'],
  ['--theme THEME', 'Selects a theme for the badge'],
  ['--filename NAME', 'Sets a name for the output file'],
  ['--directory DIR', 'Write image to target directory']
];
// Internal variable to store options.
var options = {
    filename: DEFAULT_FILENAME,
    directory: DEFAULT_DIRECTORY,
    image_format: DEFAULT_IMAGE_FORMAT,
    image_quality: DEFAULT_IMAGE_QUALITY,
    badge_name: undefined,
    badge_status: undefined,
    badge_description: undefined,
    badge_theme: DEFAULT_THEME
};
var parser = new optparse.OptionParser(SWITCHES)
parser.banner = 'Usage: codebadgejs [badge name] [badge status] [description]'
parser.on(1, function(value) {
  options.badge_name = value;
});
parser.on(2, function(value) {
  options.badge_status = value;
});
parser.on(3, function(value) {
  options.badge_description = value;
});
parser.on('format', function(name, value) {
  options.image_format = value;
});
parser.on('quality', function(name, value) {
  options.image_quality = value;
});
parser.on('theme', function(name, value) {
  options.badge_theme = value;
});
parser.on('filename', function(name, value) {
  options.filename = value;
});
parser.on('directory', function(name, value) {
  options.directory = value;
});
parser.on('help', function() {
    console.log(parser.toString());
});
// Parse command line arguments
parser.parse(system.args);

// build webpage from template
var data = {
  "name": options.badge_name,
  "status": options.badge_status,
  "theme": options.badge_theme,
  "description": options.badge_description
}
var template = handlebars.compile(fs.read(templatePath));

// render badge
fs.write(badgeHtmlPath, template(data), 'w');
page.open(badgeHtmlPath, function start(status) {
  var filepath = options.directory + '/' + options.filename + '.' + options.image_format;
  page.render(filepath, {format: options.image_format, quality: options.image_quality});
  phantom.exit();
});
