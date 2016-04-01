const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        '.'
      ],
      browser: [],
      routes: {
        '/index.html': 'src/index.html'
      },
      index: 'src/index.html'
    }
  };
};
