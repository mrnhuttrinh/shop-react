var gulp = require("gulp");
var del = require("del");
var jshint = require("gulp-jshint");
var cache = require("gulp-cached");
var react = require("gulp-react");
var jscs = require("gulp-jscs");
// Load plugins
var $ = require("gulp-load-plugins")();
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require('reactify'); 
var babelify = require('babelify');
var source = require("vinyl-source-stream");
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var sourceFile = "./app/scripts/app.js";

var destFolder = "./dist/scripts";
var destFileName = "app.js";

// clean dist foler
gulp.task("clean", function(callback) {
    $.cache.clearAll();
    callback(del.sync(["dist/styles", "dist/scripts", "dist/images"]));
});

// build app script js
gulp.task("buildScripts", function() {
    return browserify(sourceFile)
        .require("react")
        .bundle()
        .pipe(source(destFileName))
        .pipe(gulp.dest("dist/scripts"));
});

// copy file html from app dev to dist folder
gulp.task("html", function() {
    return gulp.src("app/*.html")
        .pipe(gulp.dest("dist"));
});

// copy file js extend to vendor folder
gulp.task("vendor", function() {
    return gulp.src("./bower_components/**")
        .pipe(gulp.dest("dist/vendor"));
});

gulp.task("styles", ["moveCss", "assets"]);

gulp.task("img", function() {
    return gulp.src(["./app/img/**/*.*"], { base: "./app/img/" })
        .pipe(gulp.dest("dist/img"));
});

gulp.task("fonts", function() {
    return gulp.src(["./app/fonts/**/*.*"], { base: "./app/fonts/" })
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("assets", ["img", "fonts", "js"]);

gulp.task("moveCss",["clean"], function(){
    return gulp.src(["./app/styles/**/*.css"], { base: "./app/styles/" })
        .pipe(gulp.dest("dist/styles"));
});

gulp.task("js", function() {
    return gulp.src(["./app/js/**/*.*"], { base: "./app/js/" })
        .pipe(gulp.dest("dist/js"));
});

gulp.task("images", function() {
    return gulp.src("app/images/**/*")
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest("dist/images"))
        .pipe($.size());
});

gulp.task("extras", function() {
    return gulp.src(["app/*.txt", "app/*.ico"])
        .pipe(gulp.dest("dist/"))
        .pipe($.size());
});

// ---

gulp.task("watch", ["dev", "vendor", "html", "styles", "images", "extras"], function() {

    browserSync({
        notify: false,
        logPrefix: "BS",
        // Run as an https by uncommenting "https: true"
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        server: ["dist", "app"]
    });

    // // Watch .html files
    // gulp.watch("app/*.html", reload);

    // gulp.watch(["app/styles/**/*.css"], ["styles", reload]);

    // // Watch image files
    // gulp.watch("app/images/**/*", reload);
});

// var bundler = watchify(browserify({
//     entries: [sourceFile],
//     debug: true,
//     insertGlobals: true,
//     cache: {},
//     packageCache: {},
//     fullPaths: true
// }).require("react"));

// var bundler = watchify(browserify({
//     entries: [sourceFile],
//     transform: [reactify],
//     debug: true,
//     cache: {}, packageCache: {}, fullPaths: true
// }));


var bundler = watchify(browserify({
    entries: [sourceFile],
    debug: true,
    insertGlobals: true,
    cache: {},
    packageCache: {},
    fullPaths: true
}).transform("babelify", {
    extensions: [".babel"]
}));

bundler.on("update", rebundle);
bundler.on("log", $.util.log);

function rebundle() {
    return bundler.bundle()
        // log errors if they happen
        .on("error", $.util.log.bind($.util, "Browserify Error"))
        .pipe(source(destFileName))
        .pipe(gulp.dest(destFolder))
        .on("end", function() {
            reload();
        });
}

gulp.task("dev", rebundle);

// build all app
gulp.task("build", ["buildScripts", "vendor", "html", "styles", "images", "extras"], function() {
    gulp.src("dist/scripts/app.js")
        .pipe($.uglify())
        .pipe($.stripDebug())
        .pipe(gulp.dest("dist/scripts"));
});

// Default task
gulp.task("default", ["clean", "build"]);