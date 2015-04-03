module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['lib/*', 'index.js'],
      tasks: ['webpack']
    },
    webpack: {
      build: {
        entry: "./index.js",
        output: {
          path: "js",
          filename: "bundle.js"
        }
      }
    },
    devserver: {server: {}},
    concurrent: {
      tasks: ['devserver', 'watch'],
      options: {
          logConcurrentOutput: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-devserver');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['webpack', 'concurrent']);

};
