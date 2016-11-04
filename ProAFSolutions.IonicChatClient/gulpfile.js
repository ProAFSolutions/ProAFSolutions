/// <binding BeforeBuild='default' />
var gulp = require('gulp');
var rename = require('gulp-rename');
var paths = {  
    tsc: ['./app/**/*.ts']
};

gulp.task('serve:before', ['watch']);

gulp.task('default', ['tsc']);



// Run gulp watch in conjunction with Ionic serve to 
// reflect live changes to TypeScript files in app directory
gulp.task('watch', function () {  
    gulp.watch(paths.tsc, ['tsc']);
});

// Run gulp tsc to transpile your TypeScript files from
// app directory to www/js directory
gulp.task('tsc', function () {
    var sourcemaps = require("gulp-sourcemaps");
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject.src('app')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .js
        .pipe(sourcemaps.write('./',
            {
                includeContent: true,
                sourceRoot: function (file) {
                    return file.cwd + '../../app/';
                }
            }))
        .pipe(gulp.dest('www/js/'));
});