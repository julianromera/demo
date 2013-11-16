/**
 * PoliteJS Demo
 *
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg : grunt.file.readJSON("package.json"),

		polite: {
			build: {
				src: './web-source',
				dest: './web-build/'
			}
		},

		clean: {
			build: ['<%= polite.build.dest %>']
		},

		copy: {
			'polite-content-assets': {
				expand: true,
				cwd: '<%= polite.build.src %>/contents/',
				src: ['assets/**'],
				dest: '<%= polite.build.dest %>'
			},
			'polite-template-assets': {
				expand: true,
				cwd: '<%= polite.build.src %>/template/assets/',
				src: ['**'],
				dest: '<%= polite.build.dest %>/template-assets/'
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
		'clean:build',
		'copy:polite-content-assets',
		'copy:polite-template-assets',
		'polite'
	]);

	grunt.registerTask('start', [
		'default',
		'watch:build'
	]);

	grunt.registerTask('deploy', [
		'default'
		// push to remote task
	]);

};