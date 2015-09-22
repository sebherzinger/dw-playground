var gulp = require('gulp'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	jade = require('gulp-jade'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass');

/**
 * Cleans the directory before building again
 */
gulp.task('clean', function() {
	
});

/**
 * Compiles the JADE templates
 */
gulp.task('build-jade', function() {
	gulp.src('./app/**/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./dist'));
});

/**
 * Compiles the SASS files
 */
gulp.task('build-sass', function() {
    gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'));
});

/**
 * Compiles the JAVASCRIPT files
 */
gulp.task('build-js', function() {
  
});

/**
 * Watcher
 */
gulp.task('watch', function() {
	gulp.watch('./app/*.jade', ['build-jade']);
	gulp.watch('./app/sass/*.scss', ['build-sass']);
	gulp.watch('./app/js/*.js', ['build-js']);
});

/**
 * Default task
 */
gulp.task('default', ['watch']);