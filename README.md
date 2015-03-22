# codebadge

Tool to generate codebadges reporting the status of your projects.

## Installation

    $ npm install

## Usage

```
codebadgejs [badge name] [badge status] [description]

Available options:
  -d, --debug                       Enables debug mode
  -h, --help                        Shows help sections
      --format [png|gif|jpeg|pdf]   Sets the output format of the image
      --quality [1..100]            Sets the quality of the image
      --theme THEME                 Selects a theme for the badge
      --filename NAME               Sets a name for the output file
      --directory DIR               Write image to target directory
```

## Examples

### Stable CodeBadge

```$ phantomjs codebadge.js build stable  " All Good! "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/my-stable-badge.png)

### Warning CodeBadge

```$ phantomjs codebadge.js build warning  " 23 tests failing "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/my-warning-badge.png)

### Critical CodeBadge

```$ phantomjs codebadge.js build critical  " codemageddon has arrived! :( "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/my-crtical-badge.png)

### Unknown Codebadge

```$ phantomjs codebadge.js build unknown  " Nothing happened "```

![Critical Badge](https://raw.githubusercontent.com/carlos4ndre/codebadge/master/demo/my-unknown-badge.png)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
