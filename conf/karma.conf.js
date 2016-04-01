const conf = require('./gulp.conf');

module.exports = function (config) {
  const configuration = {
    browsers: [
      'PhantomJS'
    ],
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    frameworks: [
      'phantomjs-shim',
      'jspm',
      'jasmine'
    ],
    jspm: {
      loadFiles: [
        'jspm_packages/npm/reflect-metadata@0.1.2/Reflect.js',
        'node_modules/es6-shim/es6-shim.js',
        conf.path.src('app/**/*.js')
      ],
      config: 'jspm.config.js'
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-phantomjs-shim'),
      require('karma-coverage'),
      require('karma-jspm')
    ]
  };

  config.set(configuration);
};
