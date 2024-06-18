"use-strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function compilaSass() {
    return gulp
    .src("src/scss/*.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error",sass.logError))
    .pipe(gulp.dest("build/css"));
}

gulp.task("default", watch);
gulp.task('sass',compilaSass);



function watch() {
    gulp.watch("src/scss/*.scss", compilaSass);
}