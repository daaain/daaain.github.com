---
layout: post
title: "Loading Javascript / CSS files from Jammit's assets.yml with Jasmine Gem to avoid duplication"
date: 2013-01-29 18:33
comments: true
external-url: 
categories: 
---
Got a really handy one-liner working today, but it took me some time to figure out so thought I should post it.

Using the latest Jasmine Gem (only on Github master as of 2013/01/29) you just need to create `spec/javascripts/support/jasmine_helper.rb` and drop this in there (note that `jasmine_helper.rb` takes the responsibility of custom configs over from `jasmine_config.rb` from now on!):

```
require 'yaml'
require 'erb'

Jasmine.configure do |config|
  config.src_files = lambda { Jasmine::PathExpander.expand(config.src_dir, YAML.load(ERB.new(File.read('config/assets.yml')).result)['javascripts']['workspace']) }
end
```

What it does is to load `assets.yml`, parse the YAML array `javascripts: workspace:`, uses Jasmine's `PathExpander.expand` method to actually glob the files from the paths listed there and finally wraps the whole thing into a lambda so that it acts as a method.