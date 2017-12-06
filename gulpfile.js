//Source Tutorial: http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/

var gulp = require("gulp"),
sass = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer")


//compile scss
gulp.task("scss", function() {
	gulp.src("src/scss/**/*.scss")
	.pipe(sass({
		outputStyle : "compressed"
	}))
	.pipe(autoprefixer({
		browsers : ["last 20 versions"]
	}))
	.pipe(gulp.dest("static/css"))
})

//watch folder for changes
gulp.task("watch", ["scss"], function () {
	gulp.watch("src/scss/**/*", ["scss"])
})

gulp.task("default", ["watch"])