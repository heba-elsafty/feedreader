const gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require("gulp-sass"),
		autoprefixer = require('gulp-autoprefixer'),
		sourcemaps  = require('gulp-sourcemaps'),
		eslint = require('gulp-eslint'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify-es').default,
		babel  = require('gulp-babel'),
		jasmineBrowser = require('gulp-jasmine-browser');
		reload  = browserSync.reload;

// DEFAULT TASK
gulp.task("default",['styles','copy-html','copy-fonts','lint','scripts-dist','tests'] ,function() {
	gulp.watch("assets/stylesheet/**/*.scss", ["styles"])
	gulp.watch('./index.html', ['copy-html']);
	gulp.watch('assets/fonts/**', ['copy-fonts']);
	gulp.watch('assets/js/**/*.js', ['lint']);
	gulp.watch('js/**/*.js', ['scripts-dist']);
	gulp.watch('assets/tests/**/*.js', ['tests']);
	browserSync.init({
		server: "./"
	})
	gulp.watch("*.html").on("change", reload);
	gulp.watch("*.scss").on("change", reload);
	gulp.watch("*.js").on("change", reload);
});


gulp.task('styles' ,function() {
	gulp
	.src('assets/stylesheet/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.stream());
});

// Copt HTML TASK
gulp.task('copy-html', function() {
	gulp
	.src('./index.html')
	.pipe(gulp.dest("./dist"))
});

// Copt fonts TASK
gulp.task('copy-fonts', function() {
	gulp
	.src('assets/fonts/**')
	.pipe(gulp.dest("./dist/fonts"))
});

gulp.task('lint', function() {
  return gulp.src('assets/js/**/*.js').pipe(eslint({
    'rules':{
        'quotes': [1, 'single'],
        'semi': [1, 'always']
    }
  }))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('scripts', function() {
	gulp
		.src(['assets/js/**/*.js'])
		.pipe(babel() )
		.pipe(concat("all.js"))
		.pipe(gulp.dest("dist/js"));
});

gulp.task('scripts-dist', function() {
	gulp
		.src(['assets/js/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat("all.js"))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("dist/js"));
});


gulp.task('tests', function() {
	return gulp
			.src('assets/tests/**/*.js')
			.pipe(sourcemaps.init())
			.pipe(concat("alltestes.js"))
			.pipe(uglify())
			.pipe(jasmineBrowser.specRunner({ console: true }))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest("dist/tests/specs/"));
});
