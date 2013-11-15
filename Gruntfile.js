/**
 * PoliteJS Demo
 *
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg : grunt.file.readJSON("package.json"),

		polite : grunt.file.readJSON("polite.json")

	});


	/**
	 * Load Dependencies
	 */


	/**
	 * Register Tasks
	 */

	grunt.registerTask('default', []);

	grunt.registerTask('start', []);

	grunt.registerTask('deploy', []);

};