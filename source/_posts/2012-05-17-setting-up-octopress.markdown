---
layout: post
title: "Setting up Octopress"
description: "Step by step guide how to set up Octopress blogging engine hosted on Github Pages. No database, Markdown for content and lightweight Ruby templating."
date: 2012-05-17 22:18
comments: true
categories: [development, ruby, github, octopress]
---
## Steps I've taken

Note: 'username' is your Github username and 'myblog' is the name of your blog / site which you'll have to replace in the instructions. Don't sweat too much about the latter, it's just a project name you won't necessary have to use on your site.

### Set up Github repository for hosting

Go to: https://github.com/new

Fill in form and create repo called "username.github.com"

### Set up Octopress [&#8594;](http://octopress.org/docs/setup/)

If you don't have it yet, install [rbenv](https://github.com/sstephenson/rbenv#section_2) and [ruby-build](https://github.com/sstephenson/ruby-build#installing-ruby-build) (to handle Ruby runtimes and build gems). If you're on Windows this is going to be a bit more complicated, but setting up [RubyInstaller](http://rubyinstaller.org/downloads) and [Ruby Development Kit](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit) is not that bad.

```
$ rbenv install 1.9.2-p290
$ git clone git://github.com/imathis/octopress.git myblog
$ cd myblog
$ gem install bundler
$ rbenv rehash
$ bundle install
$ rbenv rehash
```

### Get a nice theme [&#8594;](http://zespia.tw/Octopress-Theme-Slash/)

```
$ git clone git://github.com/tommy351/Octopress-Theme-Slash.git .themes/slash
$ rake install['slash']
```

### Configure Octopress [&#8594;](http://octopress.org/docs/configuring/)

Edit at least "Main Configs" in _config.yml. You can come back later to fill in the rest.

### Set site up for Github Pages

```
$ rake setup_github_pages
```
    
Paste your Github repo URL: git@github.com:username/username.github.com.git when prompted.

This will set up some folders and the structure of the Git repos. `Master` branch will track the actual generated website (the contents of `_deploy` folder) and `source` will be the sources you are going to edit.

### Create your first post [&#8594;](http://octopress.org/docs/blogging/)

```
$ rake new_post["Hello World!"]
```
    
Edit contents of myblog/source/_posts/yyyy-mm-dd-hello-world.markdown

### Generate page and see it in your browser [&#8594;](http://octopress.org/docs/deploying/github/)

```
$ rake generate
$ powify create myblog
$ powify browse myblog
```
    
See if it's all good locally

```
$ rake deploy
```

Check the real thing: http://username.github.com
