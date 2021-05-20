const {
    watch,
    src,
    dest,
    series,
    parallel
} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer');
const csslint = require('gulp-csslint');

const config = {
    app: {
        js: [
            './app/js/**/*.js',
        ],
        scss: './app/scss/**.scss',
        css: './app/css/',
        images: './app/img/*.*',
        html: 'app/**.html',
        base: 'app/.'
    },
    dist: {
        base: './dist/',
        images: './dist/images'
    }
}

function scss() {
    src(config.app.scss)
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(csslint())
        .pipe(csslint.formatter("compact"))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write("./sourcemaps"))
        .pipe(dest(config.app.css))
}

function serve(){
    browserSync.init({
      server: {
        baseDir: config.app.base
      }    
    });
   
  }

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles() {
    scss()
    serve()
    watch(config.app.scss, series(scss, reload));
    watch(config.app.js, reload)
    watch(config.app.html,reload)

}
exports.watch = watchFiles
exports.scss = scss