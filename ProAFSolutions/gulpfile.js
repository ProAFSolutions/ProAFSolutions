/// <binding BeforeBuild='default' Clean='clean' ProjectOpened='default' />

// include plug-ins
var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var runSequence = require('run-sequence');
var amdOptimize = require("amd-optimize") 


var config = {
    //Include all js files but exclude any min.js files
    src: [
        'build/app.config.js',
        'build/services/base.service.js',
        'build/components/shared/base.controller.js',        
        'build/**/*.js' 
    ],
    libs: [
        //Core
        'node_modules/jquery/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-translate/dist/angular-translate.js',
        'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'js/modernizr-custom.js',               
        'node_modules/angular-ui-router/release/angular-ui-router.js',         
        'node_modules/underscore/underscore.js',
        
        //Template's plugins       
        'js/bootstrap.min.js',
        'js/wow.min.js',
        'js/jquery.nav.js',
        'js/jquery.knob.js',
        'js/owl.carousel.min.js',
        'js/smoothscroll.js',
        'js/jquery.vegas.min.js',
        'js/zerif.js'

    ],
    css: [
        'css/bootstrap.min.css',
        'css/owl.theme.css',
        'css/owl.carousel.css',
        'css/jquery.vegas.min.css',
        'css/animate.min.css',
        'assets/icon-fonts/icons.css',
        'css/pixeden-icons.css',   
        'css/site.css',
        'css/responsive.css',
        'css/custom.css'
    ]
}

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources;
    var css;
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'Release') {
        sources = gulp.src(['./dist/libs.min.js', './dist/app.min.js'], { read: false });
        css = gulp.src([], { read: false });
    }
    else {
        sources = gulp.src(config.libs.concat(config.src), { read: false });
        css = gulp.src(config.css, { read: false });
    }
    return target.pipe(inject(css))
                 .pipe(inject(sources))
                 .pipe(gulp.dest('./'));
});

gulp.task('clean',function () {
    return del(['dist/*.js']);
});

gulp.task('scripts:app', function () {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'Release') {
        return gulp.src(config.src)
         .pipe(concat('app.min.js'))
         .pipe(uglify({ mangle: false }))
         .pipe(gulp.dest('dist/'));
    }
});

gulp.task('scripts:libs', function () {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'Release') {
        return gulp.src(config.libs)
          .pipe(concat('libs.min.js'))
          .pipe(uglify({ mangle: false }))
          .pipe(gulp.dest('dist/'));
    }
});

gulp.task('build', function (cb) {
    runSequence('clean', ['scripts:libs', 'scripts:app'],'index', cb);
});

gulp.task('default', ['build']);
