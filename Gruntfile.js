module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		csso: {
			compress: {
				options: {
					report: 'gzip'
				},
				files: {
					'static/css/blvwork.css': ['static/css/bootstrap.css', 'static/css/style.css']
				}
			}
		},
		imgo: {
			images: {
				src: 'static/img/*.*'
			}
		},
		svgmin: {
			options: {
				plugins: [{
					removeViewBox: false
				}]
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'static/svg/src',
					src: ['*.svg'],
					dest: 'static/svg/min',
					ext: '.svg'
				}]
			}
		},
		webfont: {
			icons: {
				src: 'static/svg/min/*.svg',
				dest: 'static/css/fonts',
				destCss: 'static/css',
				ligatures: true,
				options: {
					font: 'icons'
				}
			}
		},
		watch: {
			files: ['static/css/bootstrap.css', 'static/css/style.css'],
			tasks: ['csso']
		},
		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-imgo');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('server', ['connect', 'watch']);
	grunt.registerTask('default', ['csso', 'imgo']);
};