---
layout: post
title: "Setting up rmate with Sublime Text for remote file editing over SSH"
date: 2012-09-02 02:20
comments: true
external-url: 
categories: 
---
If you want to be able to edit files using your local Sublime Text 2 app over SSH, you can use `rmate` which is a small remote connection script developed originally for TextMate.

This is how it goes:

0. Install the [rsub](https://github.com/henrikpersson/rsub) plugin for ST2, which is available through [Package Control](http://wbond.net/sublime_packages/package_control) too.
1. Add a remote forwarding line under the right host in your `~/.ssh/config` file to enable connection: `RemoteForward 52698 127.0.0.1:52698` – see [plugin docs](https://github.com/henrikpersson/rsub#ssh-tunneling) for a bit more info
2. SSH in to your remote: `ssh example_user@123.456.78.90`
3. Download rmate: `curl https://raw.github.com/aurora/rmate/master/rmate > rmate`
4. Move it in place: `sudo mv rmate /usr/local/bin` – you can put in `~/bin` too if you only want to set it up for yourself, but sharing is caring :)
5. Make it executable: `sudo chmod +x /usr/local/bin/rmate`
6. Profit: `rmate .profile` – make sure you have an open ST2 window to enable listening!

The main reason why I really like this is because you can also `sudo rmate` with system config files and be able to actually save them back, as opposed to editing via an SFTP client where you need to log in with `root` to be able to do this.