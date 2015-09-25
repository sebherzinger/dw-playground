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
	gulp.src('./app/templates/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./dist'));
});

/**
 * Compress IMAGES
 */
gulp.task('compress-images', function() {
    gulp.src('./app/img/*.{png,gif,jpg}')
        .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest('./dist/assets/img'));
});

/**
 * Move FONTS
 */
gulp.task('copy-fonts', function() {
	gulp.src('./app/fonts/**/*.{ttf,woff,eof,svg}')
		.pipe(gulp.dest('./dist/assets/fonts'));
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
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/bootstrap-sass/assets/javascript/bootstrap.min.js',
		'./node_modules/jquery-plugin-viewport-checker/dist/jquery.viewportchecker.min.js',
		'./node_modules/parsleyjs/dist/parsley.min.js',
		'./node_modules/scrollreveal/dist/scrollReveal.min.js',
		'./app/js/main.js'
	])
		.pipe(concat('all.js'))
    	.pipe(gulp.dest('./dist/assets/js'));
});

/**
 * Watcher
 */
gulp.task('watch', function() {
	gulp.watch('./app/templates/**/*.jade', ['build-jade']);
	gulp.watch('./app/sass/*.scss', ['build-sass']);
	gulp.watch('./app/js/*.js', ['build-js']);
});

/**
 * Default task
 */
gulp.task('default', ['watch']);
