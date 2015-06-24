var extend = require('./utils/tiny-extend'),
    sub = require('./utils/sub'),
    constants = require('./constants'),
    makeMethod = require('./utils/make-method'),
    getConfig = require('./utils/get-config'),
    camelCase = require('./utils/camel-case'),
    inMemoryAuthCache = require('./plugins/in-memory-auth-cache'),
    versionKey = constants.headers.VERSION,
    version = constants.version;


function makeClient(clientCls) {
  return function(cfg) {
    return new clientCls(extend({}, this, cfg));
  };
}

var camelToDash = Object.keys(constants.headers).reduce(function(t, k) {
  var dashed = constants.headers[k];
  t[camelCase(dashed)] = dashed;
  return t;
}, {});

function normalizeContext(context) {
  return Object.keys(context).reduce(function(m, k) {
    var dashed = camelToDash[k];
    if (dashed && !(dashed in context)) {
      m[dashed] = context[k];
    } else {
      m[k] = context[k];
    }
    return m;
  }, {});
}

function cloneContext(ctx) {
  var newCtx;
  if (!ctx) return {};
  try {
    newCtx = JSON.parse(JSON.stringify(ctx));
  } catch(e) {
    throw new Error('Could not serialize context when creating Client. Do not assign non-serializable objects to the client.context.');
  }
  newCtx[versionKey] = newCtx[versionKey] || version;
  return newCtx;
}

function isContextSufficient(context) {
  return context && context.appKey && context.sharedSecret && context.baseUrl;
}

function Client(cfg) {
  cfg = cfg || {};
  var context = normalizeContext(cfg.context || {});
  if (!isContextSufficient(context)) {
    context = context ? extend(getConfig(), context) : getConfig();
  }
  this.context = cloneContext(context);
  this.defaultRequestOptions = extend({}, Client.defaultRequestOptions, cfg.defaultRequestOptions);
  if (cfg.plugins) {
    this.plugins = cfg.plugins.slice();
    this.plugins.forEach(function(p) {
      p(this);
    }.bind(this));
  }
  this.authenticationStorage = this.authenticationStorage || inMemoryAuthCache(this);
}

// statics
extend(Client, {
  defaultRequestOptions: {},
  method: makeMethod,
  sub: function(methods) {
    return makeClient(sub(Client, methods));
  },
  constants: constants
});

// // instance
// extend(Client.prototype, {
//   root: makeClient(Client),
//   commerce: require('./clients/commerce')(Client),
//   content: require('./clients/content')(Client),
//   event: require('./clients/event')(Client),
//   platform: require('./clients/platform')(Client)
// });

module.exports = Client;