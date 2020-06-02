const gulp = require('gulp'),
      ejs = require('gulp-ejs'),
      fs = require('fs'),
      rename = require('gulp-rename'),
      htmlmin = require('gulp-htmlmin');
 
gulp.task('ejs', function(done){
	const json = JSON.parse(fs.readFileSync('index.json'))

	gulp.src('index.ejs')
	.pipe(ejs({ json }))
    .pipe(rename({ extname: json.date + '.html' }))
    .pipe(htmlmin({
        // 余白を除去する
        collapseWhitespace : true,
        // HTMLコメントを除去する
        removeComments : true
    }))
    .pipe(gulp.dest('dest'));

  gulp.src('index.json')
    .pipe(rename({ extname: json.date + '.json' }))
    .pipe(gulp.dest('json'));

  done();
});


