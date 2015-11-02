module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      minify: {
        options: {
          compress: true,
		  sourceMap: true,
          yuicompress: true,
          cleancss: true,
          optimization: 2
        },
        files: {
          "assets/css/main.min.css": "assets/less/main.less" // destination file and source file
        }
      },

	  compile: {
        options: {
          compress: false,
		  sourceMap: true,
          yuicompress: false,
		  cleancss: false
          
        },
        files: {
          "assets/css/main.css": "assets/less/main.less" // destination file and source file
        }
      }

    },
  });
  grunt.registerTask('default', ['less']);
};
