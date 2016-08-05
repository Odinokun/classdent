"use strict"; // подсказки в консоли при ошибках

const gulp          = require('gulp');
const notify        = require("gulp-notify");  // Нотификатор;
const fileinclude   = require('gulp-file-include'); //работа с инклюдами

gulp.task('html', function() {
    gulp.src('html/*.html')
        .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
        .pipe(gulp.dest(''))

        .pipe(notify('Update HTML!'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('include/*html', ['build']);
    gulp.watch('html/*html', ['build']);
});
