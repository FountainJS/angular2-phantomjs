SystemJS.config({
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'plugins': [
      'babel-plugin-angular2-annotations',
      'babel-plugin-transform-decorators-legacy',
      'babel-plugin-transform-class-properties',
      'babel-plugin-transform-flow-strip-types'
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'angular2': 'npm:angular2@2.0.0-beta.13',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'axios': 'npm:axios@0.9.1',
    'babel': 'npm:babel-core@6.7.4',
    'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.0.0',
    'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.6.0',
    'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
    'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.7.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'core-js': 'npm:core-js@1.2.6',
    'es6-promise': 'npm:es6-promise@3.1.2',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'plugin-babel': 'npm:systemjs-plugin-babel@0.0.8',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.4',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'tty': 'github:jspm/nodelibs-tty@0.2.0-alpha',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.5.15'
  },
  packages: {
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.5.1'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.2.1'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:axios@0.9.1': {
      'map': {
        'follow-redirects': 'npm:follow-redirects@0.0.7'
      }
    },
    'npm:babel-code-frame@6.7.4': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'chalk': 'npm:chalk@1.1.3',
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@1.0.3',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:babel-core@6.7.4': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.7.4',
        'babel-generator': 'npm:babel-generator@6.7.2',
        'babel-helpers': 'npm:babel-helpers@6.6.0',
        'babel-messages': 'npm:babel-messages@6.7.2',
        'babel-register': 'npm:babel-register@6.7.2',
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'babel-template': 'npm:babel-template@6.7.0',
        'babel-traverse': 'npm:babel-traverse@6.7.4',
        'babel-types': 'npm:babel-types@6.7.2',
        'babylon': 'npm:babylon@6.7.0',
        'convert-source-map': 'npm:convert-source-map@1.2.0',
        'debug': 'npm:debug@2.2.0',
        'json5': 'npm:json5@0.4.0',
        'lodash': 'npm:lodash@3.10.1',
        'minimatch': 'npm:minimatch@2.0.10',
        'path-exists': 'npm:path-exists@1.0.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'private': 'npm:private@0.1.6',
        'shebang-regex': 'npm:shebang-regex@1.0.0',
        'slash': 'npm:slash@1.0.0',
        'source-map': 'npm:source-map@0.5.3'
      }
    },
    'npm:babel-generator@6.7.2': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.7.2',
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'babel-types': 'npm:babel-types@6.7.2',
        'detect-indent': 'npm:detect-indent@3.0.1',
        'is-integer': 'npm:is-integer@1.0.6',
        'lodash': 'npm:lodash@3.10.1',
        'repeating': 'npm:repeating@1.1.3',
        'source-map': 'npm:source-map@0.5.3',
        'trim-right': 'npm:trim-right@1.0.1'
      }
    },
    'npm:babel-helpers@6.6.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'babel-template': 'npm:babel-template@6.7.0'
      }
    },
    'npm:babel-messages@6.7.2': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:babel-plugin-angular2-annotations@5.0.0': {
      'map': {
        'babel-generator': 'npm:babel-generator@6.7.2'
      }
    },
    'npm:babel-plugin-syntax-class-properties@6.5.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:babel-plugin-syntax-decorators@6.5.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:babel-plugin-syntax-flow@6.5.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:babel-plugin-transform-class-properties@6.6.0': {
      'map': {
        'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.5.0',
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
      'map': {
        'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.5.0',
        'babel-runtime': 'npm:babel-runtime@6.6.1',
        'babel-template': 'npm:babel-template@6.7.0'
      }
    },
    'npm:babel-plugin-transform-flow-strip-types@6.7.0': {
      'map': {
        'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.5.0',
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:babel-register@6.7.2': {
      'map': {
        'babel-core': 'npm:babel-core@6.7.4',
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'core-js': 'npm:core-js@2.2.1',
        'home-or-tmp': 'npm:home-or-tmp@1.0.0',
        'lodash': 'npm:lodash@3.10.1',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'path-exists': 'npm:path-exists@1.0.0',
        'source-map-support': 'npm:source-map-support@0.2.10'
      }
    },
    'npm:babel-runtime@6.6.1': {
      'map': {
        'core-js': 'npm:core-js@2.2.1'
      }
    },
    'npm:babel-template@6.7.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'babel-traverse': 'npm:babel-traverse@6.7.4',
        'babel-types': 'npm:babel-types@6.7.2',
        'babylon': 'npm:babylon@6.7.0',
        'lodash': 'npm:lodash@3.10.1'
      }
    },
    'npm:babel-traverse@6.7.4': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.7.4',
        'babel-messages': 'npm:babel-messages@6.7.2',
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'babel-types': 'npm:babel-types@6.7.2',
        'babylon': 'npm:babylon@6.7.0',
        'debug': 'npm:debug@2.2.0',
        'globals': 'npm:globals@8.18.0',
        'invariant': 'npm:invariant@2.2.1',
        'lodash': 'npm:lodash@3.10.1',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:babel-types@6.7.2': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38',
        'babel-traverse': 'npm:babel-traverse@6.7.4',
        'esutils': 'npm:esutils@2.0.2',
        'lodash': 'npm:lodash@3.10.1',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2'
      }
    },
    'npm:babylon@6.7.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@5.8.38'
      }
    },
    'npm:brace-expansion@1.1.3': {
      'map': {
        'balanced-match': 'npm:balanced-match@0.3.0',
        'concat-map': 'npm:concat-map@0.0.1'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'pako': 'npm:pako@0.2.8',
        'readable-stream': 'npm:readable-stream@2.0.6'
      }
    },
    'npm:buffer@4.5.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.1.2',
        'ieee754': 'npm:ieee754@1.1.6',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:detect-indent@3.0.1': {
      'map': {
        'get-stdin': 'npm:get-stdin@4.0.1',
        'minimist': 'npm:minimist@1.2.0',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:follow-redirects@0.0.7': {
      'map': {
        'debug': 'npm:debug@2.2.0',
        'stream-consume': 'npm:stream-consume@0.1.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:home-or-tmp@1.0.0': {
      'map': {
        'os-tmpdir': 'npm:os-tmpdir@1.0.1',
        'user-home': 'npm:user-home@1.1.1'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.1.0'
      }
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'npm:is-integer@1.0.6': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'npm:loose-envify@1.1.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'npm:minimatch@2.0.10': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.3'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:readable-stream@2.0.6': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.6',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.0.6'
      }
    },
    'npm:stream-http@2.2.1': {
      'map': {
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'inherits': 'npm:inherits@2.0.1',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    }
  }
});
