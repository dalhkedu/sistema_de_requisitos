"use strict"
let gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './assets/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("./assets/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /assets/js folder
gulp.task('js', function () {
    return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("./assets/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['./node_modules/bootstrap/scss/bootstrap.scss', './assets/scss/*.scss'], gulp.series('sass'));
    gulp.watch("./*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('js', 'serve'));