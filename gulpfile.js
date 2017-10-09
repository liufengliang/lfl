var gulp = require('gulp');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat')

gulp.task('connect',function(){
	connect.server({
		port:3000,
		liverload:true
	})
})

gulp.task('script',function(){
	gulp.src(['js/script.js','js/script1.js'])
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest("./js"))
})
gulp.task('default',['script'])
