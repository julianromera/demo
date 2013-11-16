/**
 * PoliteJS Demo
 *
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg : grunt.file.readJSON("package.json"),

		politeConf : grunt.file.readJSON("polite.json"),

		polite: {
			build: {

			}
		},

		watch: {
			build: {
				files: [
					'./contents/**/*.*',
					'./node_modules/grunt-polite/**/*.js'
				],
				tasks: [
					'default'
				]
			}
		}

	});





	/**
	 * Load Dependencies
	 */

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-polite");





	/**
	 * Register Tasks
	 */

	grunt.registerTask('default', [
		'polite'
	]);

	grunt.registerTask('start', [
		'default',
		'watch:build'
	]);

	grunt.registerTask('deploy', [
		'default',
		// push to remote task
	]);

};