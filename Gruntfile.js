module.exports = function (grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		"sass": {
			dist: {
				files: {
					'public/stylesheets/app.css': 'dist/stylesheets/app.scss'
				}
			}
		},
		"watch": {
			css: {
				files: ['dist/stylesheets/**/*.scss'],
				tasks: ['sass']
			},
			browserify: {
				files: ['dist/javascripts/**/*.es6'],
				tasks: ['browserify']
			}
		},
		browserify: {
			dist: {
				options: {
					transform: ["babelify"]
				},
				files: {
					'public/javascripts/app.js': ['dist/javascripts/**/*.es6']
				}
			}
		}
	});
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('compile', ['sass', 'browserify']);
}