var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Run everything
gulp.task('default', ['browserSync']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('watch', ['browserSync'], function() {
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});
