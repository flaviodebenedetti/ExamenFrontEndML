/* var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');

gulp.task('run', ['scss', 'watch']);

gulp.task('scss', function() {
    gulp.src('public/testML/styles/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('public/testML/styles/*.scss', ['scss']);
});
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {
 return gulp.src('public/testML/scss/*.scss') //Ruta de la carpeta sass apuntando a los archivos `.scss`
  .pipe(sass().on('error', sass.logError)) //Compila los archivos `.scss` y muestra posibles errores
  .pipe(gulp.dest('public/testML//css'))//Carpeta donde se guardaran los archivos `.css` compilado
  .pipe(notify("Tarea sass terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('./sass/**/*', ['sass']);
});

//Tarea por defecto
gulp.task('default',['watch', 'sass']);