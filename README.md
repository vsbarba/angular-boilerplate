Angular Boilerplate
===============================================================================

This is my opinionated angular boilerplate. This project is based on
[ng-bp](https://github.com/ngbp/ngbp) made by their awesome team.

Angular Boilerplate is powered by Grunt.js, Bower, Node.js, LESS. This angular
project also uses [angular ui-router](https://github.com/angular-ui/ui-router).

[Download TORO.IO - Widget Sandbox](https://github.com/vsbarba/angular-boilerplate/archive/master.zipp)

How to Use
==========

### Prerequisite

Before proceeding, [Node JS](http://nodejs.org) installed otherwise non of the stuff here will
actually work.

You may install NodeJS by [downloading](http://nodejs.org/dist/v0.10.25/node-v0.10.25.pkg)
via [NodeJS.org](http://nodejs.org/) or via Homebrew:

`$ brew install node`

### Usage

Once downloaded, you may have to chage these files to match your project and
the dependencies to run or develop your app with.

`bower.json`
this is used to download front-end packages such as Bootstrap, jQuery &amp; Fontawesome
with the latest-stable build fresh off their repositories.

`package.json`
this is used to download `devDependencies` that `Gruntfile.js` uses to build your
application.

### Directory Structure

Jekyll Barebones uses TORO Commerce UIKit so you can dive in to coding immediately,
basic Bootstrap features are added initially but extended features such as
Charts and other stuff **needs** to be added by you manually.

``` shell
jekyll-barebone   # root directory
├── application
│   ├── _includes
│   ├── _layouts
│   ├── _posts
│   ├── _source
│   ├── assets
│   │   ├── css
│   │   ├── fonts
|   │   ├── img
|   |   └── js
|   ├── index.html
|   └── your-page.html
├── _config.yml
├── bower.json
├── Gruntfile.js
└── package.json
```

The goal for setting the directory structure like this is so that we can keep
development files away from the application directory, although this can be done
programatically, we would like to access these files often to change the build
output.

### Adding Image files

Place your raw image(`.jpg`, `.png`, `.gif`) files to `application/_source/img`
so they can be included via grunt build. Images in this directory will be optimised
and compressed, the out file will have up to 20% Less of the original file size.

### Adding Javascript files

Place your application `.js` inside `application/assets/js/app/` so you may specify
or use these to any of your page that needs it.

Grunt Tasks
===========

These are the default tasks that Gruntfile executes, you may add necessary tasks
to build your application. You may run `$ grunt` to perform default tasks.

**copy**

it copies all packages downloaded inside `bower_components`

`$ grunt updatepackage`

**less**

compiles the default Less stylesheet and outputs it to `application/assets/css`
with a full and minified version.


**watch**

you may run this while working on your less stylesheets, it watches `application/_source/less/`
directory for file changes and automatically executes the less task that compiles
less stylesheets to css, outputs go to `application/assets/css`.

`$ grunt buildcss`

**imagemin**

optimises image files `*.{gif,jpg,png}` and compresses
these up to 20% less of the the original file size.

`$ grunt buildimg`
