'use strict';

module.exports=function(grunt) {

  var Hjson=require('hjson');
  var async=require('async');
  var path=require('path');

  function convert(file, ext)
  {
    var text=grunt.file.read(file);
    var data=Hjson.parse(text);
    switch (ext)
    {
      case '.json': return JSON.stringify(data);
      case '.hjson': return Hjson.stringify(data);
      default: throw new Error('Only destination files with the extensions .json or .hjson are supported!');
    }
  }

  grunt.registerMultiTask('hjson', 'Convert Hjson from/to JSON.', function() {

    var done=this.async();

    async.forEach(this.files, function (f, next) {
      var destFile=f.dest;
      var destExt=path.extname(f.dest);

      if (f.src.length!==1)
        next(new Error('Each source file needs to map to one destination file!'));

      var res=convert(f.src[0], destExt);
      grunt.file.write(destFile, res);
      grunt.log.writeln('File "'+destFile+'" converted.');
      next(true);//success
    }, done);
  });

};
