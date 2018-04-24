'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var path = require('path');
var browserSync = require('browser-sync').create();

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {
 return gulp.src('/scss/*.scss') //Ruta de la carpeta sass apuntando a los archivos `.scss`
  .pipe(sass().on('error', sass.logError)) //Compila los archivos `.scss` y muestra posibles errores
  .pipe(gulp.dest('/css'))//Carpeta donde se guardaran los archivos `.css` compilado
  .pipe(notify("Tarea sass terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

gulp.task("sass", gulp.series(sassFunction));

gulp.task('connect', gulp.series(connectServer));

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task("watch", function (done) {
  gulp.watch('public/testML/**/*.scss', gulp.series('sass'));
});

function sassFunction() {
	return gulp.src('public/testML/scss/style.scss')
    .pipe(sourcemaps.init())
    //.pipe(notify('Changed SASS File'))
		.pipe(rename('pija.css'))
		.pipe(gulp.dest(path.join('public/testML/styles/', 'css')));
};

function connectServer(done) {
	browserSync.init({
		port: 8089,
		server: {
			baseDir: 'public/testML/inicio.html'
		},
		ui: {
			port: 2222,
		}
	});
	return done();
};

gulp.task('run', gulp.series('connect', 'watch', function runDev() {
	runFirstTime = false;
	console.log('YOU CAN START YOUR WORK in http://localhost:8089 GOOD CODE...');
}));