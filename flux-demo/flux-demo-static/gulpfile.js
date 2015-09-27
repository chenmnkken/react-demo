var gulp = require('gulp');
var gutil = require('gulp-util');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var cacheify = require('cacheify');
var levelup = require('levelup');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var connect = require('gulp-connect');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix= new LessPluginAutoPrefix({ browsers: ['last 2 versions'] });
var db = levelup('./.cache');

var srcRoot = 'src';
var jsSrcPath = './src/js/component/flux-demo.js';
var jsDestPath = './src/js';

var browserOpts = {
    entries: [jsSrcPath],
    debug: true,
    insertGlobals: true,
    detectGlobals: false
};

gulp.task('connect', function () {
    connect.server({
        root: [srcRoot],
        port: 3001,
        livereload: true,
        fallback: 'src/index.html'
    });
});

gulp.task('watch-html', function () {
    gulp.watch(srcRoot + '/**/*.html', function () {
        return gulp.src(srcRoot + '/**/*.html')
            .pipe(connect.reload());
    });
});

var bundle = function () {
    return watcher.bundle()
        .on('error', function (err) {
            console.log(err.message);
            console.log(err.stack);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(jsDestPath))
        .pipe(connect.reload());
};

var babelifyCache = cacheify(babelify.configure({
    externalHelpers: true,
    stage: 0
}), db);

var bundler = browserify(browserOpts)
    .transform(babelifyCache);

var watcher = watchify(bundler)
    .on('update', bundle)
    .on('log', gutil.log);

gulp.task('watch-js', bundle);
gulp.task('watch', ['watch-js', 'watch-html'])
gulp.task('default', ['connect', 'watch']);
