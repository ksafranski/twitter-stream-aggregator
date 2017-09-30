System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  transpiler: 'babel',
  babelOptions: {
    'optional': [
      'runtime',
      'optimisation.modules.system'
    ]
  },
  paths: {
    'github:*': 'jspm_packages/github/*',
    'npm:*': 'jspm_packages/npm/*'
  },

  map: {
    'babel': 'npm:babel-core@5.8.38',
    'babel-runtime': 'npm:babel-runtime@5.8.38',
    'core-js': 'npm:core-js@1.2.7',
    'react': 'npm:react@16.0.0',
    'react-bootstrap': 'npm:react-bootstrap@0.31.3',
    'react-dom': 'npm:react-dom@16.0.0',
    'socket.io-client': 'github:socketio/socket.io-client@2.0.3',
    'github:jspm/nodelibs-assert@0.1.0': {
      'assert': 'npm:assert@1.4.1'
    },
    'github:jspm/nodelibs-buffer@0.1.1': {
      'buffer': 'npm:buffer@5.0.8'
    },
    'github:jspm/nodelibs-domain@0.1.0': {
      'domain-browser': 'npm:domain-browser@1.1.7'
    },
    'github:jspm/nodelibs-events@0.1.1': {
      'events': 'npm:events@1.0.2'
    },
    'github:jspm/nodelibs-http@1.7.1': {
      'Base64': 'npm:Base64@0.2.1',
      'events': 'github:jspm/nodelibs-events@0.1.1',
      'inherits': 'npm:inherits@2.0.1',
      'stream': 'github:jspm/nodelibs-stream@0.1.0',
      'url': 'github:jspm/nodelibs-url@0.1.0',
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'github:jspm/nodelibs-https@0.1.0': {
      'https-browserify': 'npm:https-browserify@0.0.0'
    },
    'github:jspm/nodelibs-path@0.1.0': {
      'path-browserify': 'npm:path-browserify@0.0.0'
    },
    'github:jspm/nodelibs-process@0.1.2': {
      'process': 'npm:process@0.11.10'
    },
    'github:jspm/nodelibs-stream@0.1.0': {
      'stream-browserify': 'npm:stream-browserify@1.0.0'
    },
    'github:jspm/nodelibs-string_decoder@0.1.0': {
      'string_decoder': 'npm:string_decoder@0.10.31'
    },
    'github:jspm/nodelibs-url@0.1.0': {
      'url': 'npm:url@0.10.3'
    },
    'github:jspm/nodelibs-util@0.1.0': {
      'util': 'npm:util@0.10.3'
    },
    'github:jspm/nodelibs-vm@0.1.0': {
      'vm-browserify': 'npm:vm-browserify@0.0.4'
    },
    'github:jspm/nodelibs-zlib@0.1.0': {
      'browserify-zlib': 'npm:browserify-zlib@0.1.4'
    },
    'npm:asap@2.0.6': {
      'domain': 'github:jspm/nodelibs-domain@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:assert@1.4.1': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0',
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'util': 'npm:util@0.10.3'
    },
    'npm:babel-runtime@5.8.38': {
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:babel-runtime@6.26.0': {
      'core-js': 'npm:core-js@2.5.1',
      'regenerator-runtime': 'npm:regenerator-runtime@0.11.0'
    },
    'npm:browserify-zlib@0.1.4': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0',
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'pako': 'npm:pako@0.2.9',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'readable-stream': 'npm:readable-stream@2.3.3',
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:buffer@5.0.8': {
      'base64-js': 'npm:base64-js@1.2.1',
      'ieee754': 'npm:ieee754@1.1.8'
    },
    'npm:core-js@1.2.7': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
    },
    'npm:core-js@2.5.1': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
    },
    'npm:core-util-is@1.0.2': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1'
    },
    'npm:debug@2.6.9': {
      'ms': 'npm:ms@2.0.0'
    },
    'npm:domain-browser@1.1.7': {
      'events': 'github:jspm/nodelibs-events@0.1.1'
    },
    'npm:encoding@0.1.12': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'iconv-lite': 'npm:iconv-lite@0.4.19'
    },
    'npm:engine.io-client@3.1.2': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'component-emitter': 'npm:component-emitter@1.2.1',
      'component-inherit': 'npm:component-inherit@0.0.3',
      'debug': 'npm:debug@2.6.9',
      'engine.io-parser': 'npm:engine.io-parser@2.1.1',
      'has-cors': 'npm:has-cors@1.1.0',
      'indexof': 'npm:indexof@0.0.1',
      'parseqs': 'npm:parseqs@0.0.5',
      'parseuri': 'npm:parseuri@0.0.5',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'yeast': 'npm:yeast@0.1.2'
    },
    'npm:engine.io-parser@2.1.1': {
      'after': 'npm:after@0.8.2',
      'arraybuffer.slice': 'npm:arraybuffer.slice@0.0.6',
      'base64-arraybuffer': 'npm:base64-arraybuffer@0.1.5',
      'blob': 'npm:blob@0.0.4',
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'has-binary2': 'npm:has-binary2@1.0.2'
    },
    'npm:fbjs@0.8.16': {
      'core-js': 'npm:core-js@1.2.7',
      'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
      'loose-envify': 'npm:loose-envify@1.3.1',
      'object-assign': 'npm:object-assign@4.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'promise': 'npm:promise@7.3.1',
      'setimmediate': 'npm:setimmediate@1.0.5',
      'ua-parser-js': 'npm:ua-parser-js@0.7.14'
    },
    'npm:has-binary2@1.0.2': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'isarray': 'npm:isarray@2.0.1'
    },
    'npm:https-browserify@0.0.0': {
      'http': 'github:jspm/nodelibs-http@1.7.1'
    },
    'npm:iconv-lite@0.4.19': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'stream': 'github:jspm/nodelibs-stream@0.1.0',
      'string_decoder': 'github:jspm/nodelibs-string_decoder@0.1.0',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
    },
    'npm:inherits@2.0.1': {
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:inherits@2.0.3': {
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:invariant@2.2.2': {
      'loose-envify': 'npm:loose-envify@1.3.1',
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:isomorphic-fetch@2.2.1': {
      'node-fetch': 'npm:node-fetch@1.7.3',
      'whatwg-fetch': 'npm:whatwg-fetch@2.0.3'
    },
    'npm:loose-envify@1.3.1': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'js-tokens': 'npm:js-tokens@3.0.2',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'stream': 'github:jspm/nodelibs-stream@0.1.0',
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:node-fetch@1.7.3': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'encoding': 'npm:encoding@0.1.12',
      'http': 'github:jspm/nodelibs-http@1.7.1',
      'https': 'github:jspm/nodelibs-https@0.1.0',
      'is-stream': 'npm:is-stream@1.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'stream': 'github:jspm/nodelibs-stream@0.1.0',
      'url': 'github:jspm/nodelibs-url@0.1.0',
      'util': 'github:jspm/nodelibs-util@0.1.0',
      'zlib': 'github:jspm/nodelibs-zlib@0.1.0'
    },
    'npm:pako@0.2.9': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:parseqs@0.0.5': {
      'better-assert': 'npm:better-assert@1.0.2'
    },
    'npm:parseuri@0.0.5': {
      'better-assert': 'npm:better-assert@1.0.2'
    },
    'npm:path-browserify@0.0.0': {
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:process-nextick-args@1.0.7': {
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:process@0.11.10': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0',
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'vm': 'github:jspm/nodelibs-vm@0.1.0'
    },
    'npm:promise@7.3.1': {
      'asap': 'npm:asap@2.0.6',
      'fs': 'github:jspm/nodelibs-fs@0.1.2'
    },
    'npm:prop-types-extra@1.0.1': {
      'react': 'npm:react@16.0.0',
      'warning': 'npm:warning@3.0.0'
    },
    'npm:prop-types@15.6.0': {
      'fbjs': 'npm:fbjs@0.8.16',
      'loose-envify': 'npm:loose-envify@1.3.1',
      'object-assign': 'npm:object-assign@4.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:punycode@1.3.2': {
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:react-bootstrap@0.31.3': {
      'babel-runtime': 'npm:babel-runtime@6.26.0',
      'classnames': 'npm:classnames@2.2.5',
      'dom-helpers': 'npm:dom-helpers@3.2.1',
      'invariant': 'npm:invariant@2.2.2',
      'keycode': 'npm:keycode@2.1.9',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'prop-types': 'npm:prop-types@15.6.0',
      'prop-types-extra': 'npm:prop-types-extra@1.0.1',
      'react': 'npm:react@16.0.0',
      'react-dom': 'npm:react-dom@16.0.0',
      'react-overlays': 'npm:react-overlays@0.7.1',
      'react-prop-types': 'npm:react-prop-types@0.4.0',
      'uncontrollable': 'npm:uncontrollable@4.1.0',
      'warning': 'npm:warning@3.0.0'
    },
    'npm:react-dom@16.0.0': {
      'fbjs': 'npm:fbjs@0.8.16',
      'loose-envify': 'npm:loose-envify@1.3.1',
      'object-assign': 'npm:object-assign@4.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'prop-types': 'npm:prop-types@15.6.0',
      'react': 'npm:react@16.0.0',
      'stream': 'github:jspm/nodelibs-stream@0.1.0'
    },
    'npm:react-overlays@0.7.1': {
      'classnames': 'npm:classnames@2.2.5',
      'dom-helpers': 'npm:dom-helpers@3.2.1',
      'prop-types': 'npm:prop-types@15.6.0',
      'prop-types-extra': 'npm:prop-types-extra@1.0.1',
      'react': 'npm:react@16.0.0',
      'react-dom': 'npm:react-dom@16.0.0',
      'warning': 'npm:warning@3.0.0'
    },
    'npm:react-prop-types@0.4.0': {
      'react': 'npm:react@16.0.0',
      'warning': 'npm:warning@3.0.0'
    },
    'npm:react@16.0.0': {
      'fbjs': 'npm:fbjs@0.8.16',
      'loose-envify': 'npm:loose-envify@1.3.1',
      'object-assign': 'npm:object-assign@4.1.1',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'prop-types': 'npm:prop-types@15.6.0'
    },
    'npm:readable-stream@1.1.14': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'core-util-is': 'npm:core-util-is@1.0.2',
      'events': 'github:jspm/nodelibs-events@0.1.1',
      'inherits': 'npm:inherits@2.0.1',
      'isarray': 'npm:isarray@0.0.1',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'stream-browserify': 'npm:stream-browserify@1.0.0',
      'string_decoder': 'npm:string_decoder@0.10.31'
    },
    'npm:readable-stream@2.3.3': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'core-util-is': 'npm:core-util-is@1.0.2',
      'events': 'github:jspm/nodelibs-events@0.1.1',
      'inherits': 'npm:inherits@2.0.3',
      'isarray': 'npm:isarray@1.0.0',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'process-nextick-args': 'npm:process-nextick-args@1.0.7',
      'safe-buffer': 'npm:safe-buffer@5.1.1',
      'stream': 'github:jspm/nodelibs-stream@0.1.0',
      'string_decoder': 'npm:string_decoder@1.0.3',
      'util-deprecate': 'npm:util-deprecate@1.0.2'
    },
    'npm:regenerator-runtime@0.11.0': {
      'path': 'github:jspm/nodelibs-path@0.1.0'
    },
    'npm:safe-buffer@5.1.1': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1'
    },
    'npm:setimmediate@1.0.5': {
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'warning': 'npm:warning@3.0.0'
    },
    'npm:socket.io-client@2.0.3': {
      'backo2': 'npm:backo2@1.0.2',
      'base64-arraybuffer': 'npm:base64-arraybuffer@0.1.5',
      'component-bind': 'npm:component-bind@1.0.0',
      'component-emitter': 'npm:component-emitter@1.2.1',
      'debug': 'npm:debug@2.6.9',
      'engine.io-client': 'npm:engine.io-client@3.1.2',
      'has-cors': 'npm:has-cors@1.1.0',
      'indexof': 'npm:indexof@0.0.1',
      'object-component': 'npm:object-component@0.0.3',
      'parseqs': 'npm:parseqs@0.0.5',
      'parseuri': 'npm:parseuri@0.0.5',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'socket.io-parser': 'npm:socket.io-parser@3.1.2',
      'to-array': 'npm:to-array@0.1.4'
    },
    'npm:socket.io-parser@3.1.2': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'component-emitter': 'npm:component-emitter@1.2.1',
      'debug': 'npm:debug@2.6.9',
      'has-binary2': 'npm:has-binary2@1.0.2',
      'isarray': 'npm:isarray@2.0.1'
    },
    'npm:stream-browserify@1.0.0': {
      'events': 'github:jspm/nodelibs-events@0.1.1',
      'inherits': 'npm:inherits@2.0.1',
      'readable-stream': 'npm:readable-stream@1.1.14'
    },
    'npm:string_decoder@0.10.31': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1'
    },
    'npm:string_decoder@1.0.3': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
      'safe-buffer': 'npm:safe-buffer@5.1.1'
    },
    'npm:ua-parser-js@0.7.14': {
      'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
    },
    'npm:uncontrollable@4.1.0': {
      'invariant': 'npm:invariant@2.2.2',
      'process': 'github:jspm/nodelibs-process@0.1.2',
      'react': 'npm:react@16.0.0'
    },
    'npm:url@0.10.3': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0',
      'punycode': 'npm:punycode@1.3.2',
      'querystring': 'npm:querystring@0.2.0',
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:util-deprecate@1.0.2': {
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:util@0.10.3': {
      'inherits': 'npm:inherits@2.0.1',
      'process': 'github:jspm/nodelibs-process@0.1.2'
    },
    'npm:vm-browserify@0.0.4': {
      'indexof': 'npm:indexof@0.0.1'
    },
    'npm:warning@3.0.0': {
      'loose-envify': 'npm:loose-envify@1.3.1',
      'process': 'github:jspm/nodelibs-process@0.1.2'
    }
  }
})
