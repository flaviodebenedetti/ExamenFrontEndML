'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var path = require('path');
var merge = require('merge-stream');
var node_sass = require('node-sass');
var browserSync = require('browser-sync').create();

//Tarea para compilar archivos sass a css
gulp.task("sass", gulp.series(copyBowerStyles, gulp.parallel(sassFunction)));

gulp.task('connect', gulp.series(connectServer));

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task("watch", function (done) {
  gulp.watch('public/testML/**/*.scss', gulp.series('sass'));
});

function sassFunction() {
	return gulp.src('public/testML/scss/style.scss')
    .pipe(sourcemaps.init())
    //.pipe(notify('Changed SASS File'))
		.pipe(rename('styles-flavio.css'))
		.pipe(gulp.dest(path.join('../styles/', 'css')));
};


function copyBowerStyles() {
	var jeet = gulp.src('node_modules/jeet/scss/**/*')
		.pipe(gulp.dest('public/testML/styles/libs/jeet'));
	return merge(jeet);
};

function connectServer(done) {
	browserSync.init({
		port: 8089,
		codeSync: false,
		open: true,
		server: {
			baseDir: './',
			middleware: [{
				route: '/',
				handle: function (req, res, next) {
					res.writeHead(302, { 'Location': 'public/testML/inicio.html#/'});
					res.end();
					next();
				}
			}],
		},
		ui: {
			port: 2222,
		}
	});
};

gulp.task('run', gulp.series('connect', 'watch', function runDev() {
	runFirstTime = false;
	console.log('YOU CAN START YOUR WORK in http://localhost:8089 GOOD CODE...');
}));
