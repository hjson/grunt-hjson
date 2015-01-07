module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    hjson: {
      cvt: {
        files: [
          {
            expand: true,
            cwd: 'test/src/',
            src: ['*.hjson'],
            dest: 'test/dist/',
            ext: '.json',
          },
        ],
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['hjson']);
};

