# grunt-hjson

Hjson to/from JSON convert plugin for grunt.

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
