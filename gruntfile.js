module.exports = function(grunt) {

  grunt.initConfig({
    devserver: {server: {}},
  });

  grunt.loadNpmTasks('grunt-devserver');

  grunt.registerTask('default', ['devserver']);

};
