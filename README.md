# grunt-hjson

[![Build Status](https://img.shields.io/travis/laktak/grunt-hjson.svg?style=flat-square)](http://travis-ci.org/laktak/grunt-hjson)
[![NPM version](https://img.shields.io/npm/v/grunt-hjson.svg?style=flat-square)](http://www.npmjs.com/package/grunt-hjson)

Hjson plugin for grunt, converts from and to JSON.

[Hjson](http://hjson.org), the Human JSON. A configuration file format that caters to humans and helps reduce the errors they make.

It supports `#`, `//` and `/**/` style comments as well as avoiding trailing/missing comma and other mistakes. For details and syntax see [hjson.org](http://hjson.org).

## Usage

First, install `grunt-hjson` as a development dependency:

```shell
npm install --save-dev grunt-hjson
```

Then, add it to your `gruntfile.js`:

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    hjson: {
      cvt: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['*.hjson'],
            dest: 'dist/',
            ext: '.json',
          },
        ],
      }
    }
  });

  grunt.loadNpmTasks('grunt-hjson');

  grunt.registerTask('default', ['hjson']);
};
```

To convert to Hjson specify the `.hjson` extension in `ext`.
