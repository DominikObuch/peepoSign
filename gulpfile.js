'use strict';
const {src, dest, series, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const uglify = require('gulp-uglify');
const image = require('gulp-image');

const config = {
    app: {
        jsFiles: './app/js/**/**.js',
        scssFiles: './app/scss/**/**.scss',
        cssFiles: './app/css/**.css',
        htmlFiles: 'app/**.html',
        imageFiles: './app/img/**',
        jsDirectory: './app/js',
        scssDirectory: './app/scss',
        cssDirectory: './app/css',
        base: './app/'
    },
    docs: {
        base: './docs',
        cssDirectory: './docs/css',
        jsDirectory: './docs/js',
        imageDirectory: './docs/img'
    }
};

//browsersync config functions
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: config.app.base
        },
        open: false,
        port: 3000
    });
    if (done) {
        done();
    }
}
function browserSyncReload(done) {
    browserSync.reload();
    if (done) {
        done();
    }
}
//turn scss to css, lint it and add sourcemaps
function scss(done) {
    src(`${config.app.scssDirectory}/main.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(dest(config.app.cssDirectory));
    if (done) {
        done();
    }
}
//merge all js files into one and add source maps for js
function scripts(done) {
    del.sync(`${config.app.jsDirectory}/main.js`, {allowEmpty: true});
    src(config.app.jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(dest(config.app.jsDirectory));
    if (done) {
        done();
    }
}

// Watch files
function watchFiles() {
    browserSyncInit();
    watch(config.app.scssFiles, series(scss, browserSyncReload));
    watch([
        config.app.jsFiles, `!${config.app.jsDirectory}/main.js`
    ], series(scripts, browserSyncReload));
    watch(config.app.htmlFiles, browserSyncReload);
    watch(`{config.app.imageDirectory}/**`, series(browserSyncReload));
}

//clean old build
function cleanDocs(done) {
    del.sync(config.docs.base, {
        dot: true,
        allowEmpty: true
    });
    if (done) {
        done();
    }
}
function minHtml(done) {
    src(config.app.htmlFiles)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(dest(config.docs.base));
    if (done) {
        done();
    }
}
function minJs(done) {
    src([
        config.app.jsFiles, `!${config.app.jsDirectory}/main.js`
    ], {allowEmpty: true})
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest(config.docs.jsDirectory));
    if (done) {
        done();
    }
}
function minCss(done) {
    src(config.app.cssFiles)
    .pipe(cleanCSS({removeComments:true}))
        .pipe(dest(config.docs.cssDirectory));
    if (done) {
        done();
    }
}
function imageMin(done) {
    src(`${config.app.imageFiles}/**`)
        .pipe(image())
        .pipe(dest(config.docs.imageDirectory))
    if (done) {
        done()
    }
}
exports.scss = scss;
exports.watch = series(scripts, watchFiles);
exports.clean = cleanDocs;
exports.js = scripts;
exports.build = series(parallel(scss, scripts, cleanDocs), parallel(imageMin, minHtml, minJs, minCss));