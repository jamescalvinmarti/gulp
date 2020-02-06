// Require Filesystem module
var fs = require("fs");

var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier');
let cleanCSS = require('gulp-clean-css');

// Require the Obfuscator Module
var JavaScriptObfuscator = require('javascript-obfuscator');

// Read the file of your original JavaScript Code as text
fs.readFile('activitat1.js', "UTF-8", function (err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    var obfuscationResult = JavaScriptObfuscator.obfuscate(data);

    // Write the obfuscated code into a new file
    fs.writeFile('dist/activitat1.js', obfuscationResult.getObfuscatedCode(), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});

// Read the file of your original JavaScript Code as text
fs.readFile('activitat2.js', "UTF-8", function (err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    var obfuscationResult = JavaScriptObfuscator.obfuscate(data);

    // Write the obfuscated code into a new file
    fs.writeFile('dist/activitat2.js', obfuscationResult.getObfuscatedCode(), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
    gulp.src('*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
});