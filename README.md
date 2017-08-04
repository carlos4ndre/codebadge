[![Travis build](https://secure.travis-ci.org/carlos4ndre/codebadge.svg?branch=master
"Build Status")](https://travis-ci.org/carlos4ndre/codebadge)
<a href="https://codeclimate.com/github/carlos4ndre/codebadge"><img src="https://codeclimate.com/github/carlos4ndre/codebadge/badges/gpa.svg" /></a>
<a href="https://codeclimate.com/github/carlos4ndre/codebadge"><img src="https://codeclimate.com/github/carlos4ndre/codebadge/badges/issue_count.svg" /></a>

# codebadge

Tool to generate codebadges reporting the status of your projects.

## Installation

```
$ npm install
```

## Usage

```
npm run codebadge -- [badge name] [badge status] [description]

Available options:
  -d, --debug                       Enables debug mode
  -h, --help                        Shows help sections
      --format [png|gif|jpeg|pdf]   Sets the output format of the image
      --quality [1..100]            Sets the quality of the image
      --theme THEME                 Selects a theme for the badge
      --filename NAME               Sets a name for the output file
      --directory DIR               Write image to target directory
```
## Themes

* Github (default)
* Tron
* Robot

## Examples

### Stable CodeBadge

```$ npm run codebadge -- build stable " All Good! "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/stable-badge.png)

### Warning CodeBadge

```$ npm run codebadge -- build warning " 23 tests failing "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/warning-badge.png)

### Critical CodeBadge

```$ npm run codebadge -- build critical " codemageddon has arrived! :( "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/critical-badge.png)

### Unknown Codebadge

```$ npm run codebadge -- build unknown " no build information was provided "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/unknown-badge.png)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
