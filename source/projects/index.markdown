---
layout: page
title: Projects
---
## Web

### 2012 | JSSoundRecorder – Javascript sound collector and music maker

[Open website](http://daaain.github.com/JSSoundRecorder)

<img src="/images/projects/soundcollector.jpg" width="400"></img>

The result of London Music Hack Day 2012. A foray into Web Audio, Web Workers and Binary Blob / File URL APIs, all coming together into a live sound recorder, a sound editor and a simple sequencer, enabling you to quickly record some sounds around you and play around making some simple loops with them.

### 2012 | Balance Projector – experimental personal finance web app

[Open website](http://daaain.github.com/projector/app/index.html#/projector)

<img src="/images/projects/projector.jpg" width="400"></img>

An experiment in using Google's awesome Angular.js framework. It's a learning project both in using Angular.js and saving user data locally.

### 2010 | Granimator – iPad wallpaper app showcase

[Open website](http://granimator.com/)

<img src="/images/projects/granimator.jpg" width="400"></img>

A wallpaper showcase website built for Granimator iPad app, where users can upload their creations. Built with Ruby on Rails and includes working on the backend API for uploading wallpaper images from the iPad app.

### 2008 | Flaunt-it – interior decorating company portfolio

[Open website](/projects/flaunt-it/)

<img src="/images/projects/flaunt-it.jpg" width="400"></img>

A company website for Flaunt-it with a dynamically generated grid of projects. Try reloading the page to see a different layout every time!

### 2007 | David Fettes – nature photographer portfolio

[Open website](http://www.davidfettes.com/)

<img src="/images/projects/davidfettes.jpg" width="400"></img>

A portfolio website for David Fettes, showcasing his breathtaking nature photos.

## Open source

### Guard-Jasmine2JUnit

[Open Github repository](https://github.com/daaain/Guard-Jasmine2JUnit)

A script that converts output from Guard-Jasmine to the XML format used by JUnit. This allows for running tests on continuos integration servers like Jenkins, complete with test reports!

It's using Guard-Jasmine with PhantomJS, a nice mix of convenience and high fidelity headless browser environment, also reusable for real time test evaluation in your development environment.

### Guard-Steering

[Open Github repository](https://github.com/daaain/guard-steering)

Lets you set up a [Guard](https://github.com/guard/guard) that will run [Steering](https://github.com/pixeltrix/steering) whenever a [Handlebars.js](https://github.com/wycats/handlebars.js) template is added / updated.

The reason this Gem was born is developing a HTML5 based desktop application which relies on static compilation. Still wanting to get the benefit of having fast Handlebars templating, precompilation is now done development time instead of loading the templates and letting the full runtime JS do the work.

### SmileBankStatementToCSV

[Open Github repository](https://github.com/daaain/SmileBankStatementToCSV)

A simple script to scrape statement data from Smile Bank's online banking interface for manual exporting.

Get Bookmarklet on the project page: [http://daaain.github.com/SmileBankStatementToCSV/](http://daaain.github.com/SmileBankStatementToCSV/)

Just log in to Smile and once you're on a statement page (works for both current and older ones) click on the bookmarklet.

In a few seconds after getting the statement data and converting to CSV it shows a jQuery Fancybox with the text preselected, so you only have to press ctrl + c / cmd + c and paste the exported data into your favourite texteditor.