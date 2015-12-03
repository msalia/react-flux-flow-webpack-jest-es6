webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Applicaiton Initializer
	 * @flow
	 */
	
	var App = __webpack_require__(1);
	var AppActions = __webpack_require__(176);
	var AppConstants = __webpack_require__(160);
	var AppDispatcher = __webpack_require__(162);
	var ExampleStore = __webpack_require__(177);
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(169);
	
	var $__0=  AppConstants,ActionTypes=$__0.ActionTypes;
	
	/* Inital entry point and bootstrapper for application */
	function Initializer(){"use strict";}
	
	    Object.defineProperty(Initializer.prototype,"initialize",{writable:true,configurable:true,value:function()       {"use strict"; var ret = (function () {
	        // Perform store initialization
	        AppDispatcher.register(function(action)  {
	            if (action.type === ActionTypes.INIT_LOAD) {
	                var stores = [
	                    ExampleStore,
	                ];
	                AppDispatcher.waitFor(
	                    stores.map(function(store)  {return store.getDispatchToken();})
	                );
	
	                // Render the application
	                ReactDOM.render(
	                    React.createElement(App, null),
	                    document.getElementById("app-root")
	                );
	            }
	        });
	
	        // send the initializing action
	        AppActions.initLoad();
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).void);}});
	
	
	
	var initializer = new Initializer();
	initializer.initialize();
	
	module.exports = Initializer;


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	var React = __webpack_require__(2);
	
	var cn = __webpack_require__(159);
	
	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){App[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;App.prototype=Object.create(____SuperProtoOf____Class0);App.prototype.constructor=App;App.__superConstructor__=____Class0;
	
	    function App(props) {"use strict";
	        ____Class0.call(this,props);
	        this.props = props;
	    }
	
	    Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	        return (
	            React.createElement("div", {className: cn('welcome-banner')}, 
	                "Welcome, ", this.props.name
	            )
	        );
	    }});
	
	
	
	App.propTypes = {
	    name: React.PropTypes.string,
	};
	
	App.defaultProps = {
	    name: 'User',
	};
	
	module.exports = App;


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Application Constants
	 * @flow
	 */
	
	var keyMirror = __webpack_require__(161);
	
	var AppConstants = {
	
	    ActionTypes: keyMirror({
	        INIT_LOAD: null,
	    }),
	
	};
	
	module.exports = AppConstants;


/***/ },

/***/ 161:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	
	"use strict";
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;


/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Application Dispatcher
	 * @flow
	 */
	
	var Dispatcher = __webpack_require__(163).Dispatcher;
	var AppDispatcher = new Dispatcher();
	
	AppDispatcher.handleViewAction = function(action)  {
	    this.dispatch({
	        source: 'VIEW_ACTION',
	        action: action,
	    });
	}.bind(this);
	
	module.exports = AppDispatcher;


/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * BaseStore
	 * @flow
	 */
	
	var AppDispatcher = __webpack_require__(162);
	var EventEmitter = __webpack_require__(171).EventEmitter;
	var React = __webpack_require__(2);
	
	var invariant = __webpack_require__(167);
	
	for(var EventEmitter____Key in EventEmitter){if(EventEmitter.hasOwnProperty(EventEmitter____Key)){BaseStore[EventEmitter____Key]=EventEmitter[EventEmitter____Key];}}var ____SuperProtoOfEventEmitter=EventEmitter===null?null:EventEmitter.prototype;BaseStore.prototype=Object.create(____SuperProtoOfEventEmitter);BaseStore.prototype.constructor=BaseStore;BaseStore.__superConstructor__=EventEmitter;
	
	    function BaseStore() {"use strict";
	        EventEmitter.call(this);
	        this.actions = {};
	        this.dispatchToken = AppDispatcher.register(this.onDispatch.bind(this));
	    }
	
	    Object.defineProperty(BaseStore.prototype,"onDispatch",{writable:true,configurable:true,value:function(payload        )       {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).object])); var ret = (function (payload) {
	        var callback = this.actions[payload.type];
	        callback && callback(payload);
	        return true;
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).boolean);}});
	
	    Object.defineProperty(BaseStore.prototype,"addAction",{writable:true,configurable:true,value:function(action        , callback          )       {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).string, __webpack_require__(168).function])); var ret = (function (action, callback) {
	        invariant(!this.actions[action], ("" + action + " already exists."));
	        this.actions[action] = callback.bind(this);
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).void);}});
	
	    Object.defineProperty(BaseStore.prototype,"getDispatchToken",{writable:true,configurable:true,value:function()         {"use strict"; var ret = (function () {
	        return this.dispatchToken;
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).string);}});
	
	    Object.defineProperty(BaseStore.prototype,"getDispatcher",{writable:true,configurable:true,value:function()         {"use strict"; var ret = (function () {
	        return AppDispatcher;
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).object);}});
	
	    Object.defineProperty(BaseStore.prototype,"emitChange",{writable:true,configurable:true,value:function()       {"use strict"; var ret = (function () {
	        ____SuperProtoOfEventEmitter.emit.call(this,'change');
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).void);}});
	
	    Object.defineProperty(BaseStore.prototype,"addChangeListener",{writable:true,configurable:true,value:function(callback          )       {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).function])); var ret = (function (callback) {
	        ____SuperProtoOfEventEmitter.addListener.call(this,'change', callback);
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).void);}});
	
	    Object.defineProperty(BaseStore.prototype,"removeChangeListener",{writable:true,configurable:true,value:function(callback          )       {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).function])); var ret = (function (callback) {
	        ____SuperProtoOfEventEmitter.removeListener.call(this,'change', callback);
	    }).apply(this, arguments); return __webpack_require__(168).check(ret, __webpack_require__(168).void);}});
	
	
	
	module.exports = BaseStore;


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 168:
/***/ function(module, exports) {

	//     flowcheck 0.2.7
	//     https://github.com/gcanti/flowcheck
	//     (c) 2015 Giulio Canti <giulio.canti@gmail.com>
	//     flowcheck may be freely distributed under the MIT license.
	//     (checked with Flow and transpiled with jsx)
	/* @flow */
	'use strict';
	function getFunctionName(f) {
	  return f.displayName || f.name || ("<function" + f.length + ">");
	}
	function Failure(actual, expected, ctx) {
	  this.actual = actual;
	  this.expected = expected;
	  this.ctx = ctx;
	}
	Failure.prototype.toString = function () {
	  var ctx = this.ctx ? this.ctx.join(' / ') : '';
	  ctx = ctx ? (", context: " + ctx) : ', (no context)';
	  return ("Expected an instance of " + this.expected.name + " got " + (Failure.stringify(this.actual) + ctx));
	};
	Failure.stringify = function (x) {
	  try { // handle circular references
	    return JSON.stringify(x, function (k, v) {
	      if (typeof v === 'function') {
	        return ("[" + getFunctionName(v) + ", Function]");
	      } // handle functions
	      if (v instanceof RegExp) {
	        return ("[" + String(v) + ", RegExp]");
	      } // handle regexps
	      return v;
	    }, 2);
	  } catch (e) {}
	  return String(x);
	};
	function Type(name, validate) {
	  this.name = name;
	  this.validate = validate;
	}
	Type.prototype.is = function (x) {
	  return this.validate(x, null, true) === null;
	};
	function define(name, is) {
	  var type = new Type(name, function (x, ctx) {
	    return is(x) ? null : [new Failure(x, type, ctx)];
	  });
	  return type;
	}
	var Any = define('any', function () {
	  return true;
	});
	var Mixed = define('mixed', function () {
	  return true;
	});
	var Void = define('void', function (x) {
	  return x === void 0;
	});
	var Str = define('string', function (x) {
	  return typeof x === 'string';
	});
	var Num = define('number', function (x) {
	  return typeof x === 'number';
	});
	var Bool = define('boolean', function (x) {
	  return x === true || x === false;
	});
	var Arr = define('array', function (x) {
	  return x instanceof Array;
	});
	var Obj = define('object', function (x) {
	  return x !== null && x !== undefined && typeof x === 'object' && !Arr.is(x);
	});
	var Func = define('function', function (x) {
	  return typeof x === 'function';
	});
	function validate(x, type, ctx, failOnFirstError) {
	  if (type.validate) {
	    return type.validate(x, ctx, failOnFirstError);
	  }
	  return x instanceof type ? null : [new Failure(x, type, ctx)];
	}
	function list(type, name) {
	  name = name || ("Array<" + type.name + ">");
	  return new Type(name, function (x, ctx, failOnFirstError) {
	    ctx = ctx || [];
	    ctx.push(name);
	    // if x is not an array, fail fast
	    if (!Arr.is(x)) {
	      return [new Failure(x, Arr, ctx)];
	    }
	    var errors = null,
	        suberrors;
	    for (var i = 0, len = x.length; i < len; i++) {
	      suberrors = validate(x[i], type, ctx.concat(i));
	      if (suberrors) {
	        if (failOnFirstError) {
	          return suberrors;
	        }
	        errors = errors || [];
	        errors.push.apply(errors, suberrors);
	      }
	    }
	    return errors;
	  });
	}
	function optional(type, name) {
	  name = name || (type.name + "?");
	  return new Type(name, function (x, ctx, failOnFirstError) {
	    if (x === void 0) {
	      return null;
	    }
	    ctx = ctx || [];
	    ctx.push(name);
	    return validate(x, type, ctx, failOnFirstError);
	  });
	}
	function maybe(type, name) {
	  name = name || ("?" + type.name);
	  return new Type(name, function (x, ctx, failOnFirstError) {
	    if (x === null) {
	      return null;
	    }
	    ctx = ctx || [];
	    ctx.push(name);
	    return validate(x, type, ctx, failOnFirstError);
	  });
	}
	function getName(type) {
	  return type.name;
	}
	function tuple(types, name) {
	  name = name || ("[" + types.map(getName).join(', ') + "]");
	  var dimension = types.length;
	  var type = new Type(name, function (x, ctx, failOnFirstError) {
	    ctx = ctx || [];
	    // if x is not an array, fail fast
	    if (!Arr.is(x)) {
	      return [new Failure(x, Arr, ctx.concat(name))];
	    }
	    // if x has a wrong length, fail failOnFirstError
	    if (x.length !== dimension) {
	      return [new Failure(x, type, ctx)];
	    }
	    var errors = null,
	        suberrors;
	    for (var i = 0; i < dimension; i++) {
	      suberrors = validate(x[i], types[i], ctx.concat(name, i));
	      if (suberrors) {
	        if (failOnFirstError) {
	          return suberrors;
	        }
	        errors = errors || [];
	        errors.push.apply(errors, suberrors);
	      }
	    }
	    return errors;
	  });
	  return type;
	}
	function dict(domain, codomain, name) {
	  name = name || ("{[key: " + domain.name + "]: " + codomain.name + "}");
	  return new Type(name, function (x, ctx, failOnFirstError) {
	    ctx = ctx || [];
	    // if x is not an object, fail fast
	    if (!Obj.is(x)) {
	      return [new Failure(x, Obj, ctx.concat(name))];
	    }
	    var errors = null,
	        suberrors;
	    for (var k in x) {
	      if (x.hasOwnProperty(k)) {
	        // check domain
	        suberrors = validate(k, domain, ctx.concat(name, k));
	        if (suberrors) {
	          if (failOnFirstError) {
	            return suberrors;
	          }
	          errors = errors || [];
	          errors.push.apply(errors, suberrors);
	        }
	        // check codomain
	        suberrors = validate(x[k], codomain, ctx.concat(name, k));
	        if (suberrors) {
	          if (failOnFirstError) {
	            return suberrors;
	          }
	          errors = errors || [];
	          errors.push.apply(errors, suberrors);
	        }
	      }
	    }
	    return errors;
	  });
	}
	function shape(props, name) {
	  name = name || ("{" + Object.keys(props).map(function (k) {
	    return k + ': ' + props[k].name + ';';
	  }).join(' ') + "}");
	  return new Type(name, function (x, ctx, failOnFirstError) {
	    ctx = ctx || [];
	    // if x is not an object, fail fast
	    if (!Obj.is(x)) {
	      return [new Failure(x, Obj, ctx.concat(name))];
	    }
	    var errors = null,
	        suberrors;
	    for (var k in props) {
	      if (props.hasOwnProperty(k)) {
	        suberrors = validate(x[k], props[k], ctx.concat(name, k));
	        if (suberrors) {
	          if (failOnFirstError) {
	            return suberrors;
	          }
	          errors = errors || [];
	          errors.push.apply(errors, suberrors);
	        }
	      }
	    }
	    return errors;
	  });
	}
	function union(types, name) {
	  name = name || types.map(getName).join(' | ');
	  var type = new Type(name, function (x, ctx) {
	    ctx = (ctx || []).concat(name);
	    if (types.some(function (type) {
	      return validate(x, type, ctx, true) === null;
	    })) {
	      return null;
	    }
	    return [new Failure(x, type, ctx)];
	  });
	  return type;
	}
	function slice(arr, start, end) {
	  return Array.prototype.slice.call(arr, start, end);
	}
	function args(types, varargs) {
	  var name = ("(" + types.map(getName).join(', ') + ", ..." + (varargs || Any).name + ")");
	  var length = types.length;
	  var typesTuple = tuple(types);
	  if (varargs) {
	    varargs = list(varargs);
	  }
	  return new Type(name, function (x, ctx, failOnFirstError) {
	    ctx = ctx || [];
	    var args = x;
	    // test if args is an array-like structure
	    if (args.hasOwnProperty('length')) {
	      args = slice(args, 0, length);
	      // handle optional arguments filling the array with undefined values
	      if (args.length < length) {
	        args.length = length;
	      }
	    }
	    var errors = null,
	        suberrors;
	    suberrors = typesTuple.validate(args, ctx.concat('arguments'), failOnFirstError);
	    if (suberrors) {
	      if (failOnFirstError) {
	        return suberrors;
	      }
	      errors = errors || [];
	      errors.push.apply(errors, suberrors);
	    }
	    if (varargs) {
	      suberrors = varargs.validate(slice(x, length), ctx.concat('varargs'), failOnFirstError);
	      if (suberrors) {
	        if (failOnFirstError) {
	          return suberrors;
	        }
	        errors = errors || [];
	        errors.push.apply(errors, suberrors);
	      }
	    }
	    return errors;
	  });
	}
	function check(x, type) {
	  var errors = validate(x, type);
	  if (errors) {
	    var message = [].concat(errors).join('\n');
	    throw new TypeError(message);
	  }
	  return x;
	}
	module.exports = {
	  Failure: Failure,
	  Type: Type,
	  define: define,
	  any: Any,
	  mixed: Mixed,
	  'void': Void,
	  number: Num,
	  string: Str,
	  'boolean': Bool,
	  object: Obj,
	  'function': Func,
	  list: list,
	  optional: optional,
	  maybe: maybe,
	  tuple: tuple,
	  dict: dict,
	  shape: shape,
	  union: union,
	  arguments: args,
	  check: check
	};

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var fbemitter = {
	  EventEmitter: __webpack_require__(172)
	};
	
	module.exports = fbemitter;


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BaseEventEmitter
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EmitterSubscription = __webpack_require__(173);
	var EventSubscriptionVendor = __webpack_require__(175);
	
	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(14);
	
	/**
	 * @class BaseEventEmitter
	 * @description
	 * An EventEmitter is responsible for managing a set of listeners and publishing
	 * events to them when it is told that such events happened. In addition to the
	 * data for the given event it also sends a event control object which allows
	 * the listeners/handlers to prevent the default behavior of the given event.
	 *
	 * The emitter is designed to be generic enough to support all the different
	 * contexts in which one might want to emit events. It is a simple multicast
	 * mechanism on top of which extra functionality can be composed. For example, a
	 * more advanced emitter may use an EventHolder and EventFactory.
	 */
	
	var BaseEventEmitter = (function () {
	  /**
	   * @constructor
	   */
	
	  function BaseEventEmitter() {
	    _classCallCheck(this, BaseEventEmitter);
	
	    this._subscriber = new EventSubscriptionVendor();
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a listener to be invoked when events of the specified type are
	   * emitted. An optional calling context may be provided. The data arguments
	   * emitted will be passed to the listener function.
	   *
	   * TODO: Annotate the listener arg's type. This is tricky because listeners
	   *       can be invoked with varargs.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
	    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
	  };
	
	  /**
	   * Similar to addListener, except that the listener is removed after it is
	   * invoked once.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke only once when the
	   *   specified event is emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
	    var emitter = this;
	    return this.addListener(eventType, function () {
	      emitter.removeCurrentListener();
	      listener.apply(context, arguments);
	    });
	  };
	
	  /**
	   * Removes all of the registered listeners, including those registered as
	   * listener maps.
	   *
	   * @param {?string} eventType - Optional name of the event whose registered
	   *   listeners to remove
	   */
	
	  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
	    this._subscriber.removeAllSubscriptions(eventType);
	  };
	
	  /**
	   * Provides an API that can be called during an eventing cycle to remove the
	   * last listener that was invoked. This allows a developer to provide an event
	   * object that can remove the listener (or listener map) during the
	   * invocation.
	   *
	   * If it is called when not inside of an emitting cycle it will throw.
	   *
	   * @throws {Error} When called not during an eventing cycle
	   *
	   * @example
	   *   var subscription = emitter.addListenerMap({
	   *     someEvent: function(data, event) {
	   *       console.log(data);
	   *       emitter.removeCurrentListener();
	   *     }
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   *   emitter.emit('someEvent', 'def'); // does not log anything
	   */
	
	  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
	    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
	    this._subscriber.removeSubscription(this._currentSubscription);
	  };
	
	  /**
	   * Returns an array of listeners that are currently registered for the given
	   * event.
	   *
	   * @param {string} eventType - Name of the event to query
	   * @return {array}
	   */
	
	  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
	      return subscription.listener;
	    }) : [];
	  };
	
	  /**
	   * Emits an event of the given type with the given data. All handlers of that
	   * particular type will be notified.
	   *
	   * @param {string} eventType - Name of the event to emit
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   *
	   * @example
	   *   emitter.addListener('someEvent', function(message) {
	   *     console.log(message);
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   */
	
	  BaseEventEmitter.prototype.emit = function emit(eventType) {
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    if (subscriptions) {
	      var keys = Object.keys(subscriptions);
	      for (var ii = 0; ii < keys.length; ii++) {
	        var key = keys[ii];
	        var subscription = subscriptions[key];
	        // The subscription may have been removed during this event loop.
	        if (subscription) {
	          this._currentSubscription = subscription;
	          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
	        }
	      }
	      this._currentSubscription = null;
	    }
	  };
	
	  /**
	   * Provides a hook to override how the emitter emits an event to a specific
	   * subscription. This allows you to set up logging and error boundaries
	   * specific to your environment.
	   *
	   * @param {EmitterSubscription} subscription
	   * @param {string} eventType
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   */
	
	  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
	    var args = Array.prototype.slice.call(arguments, 2);
	    subscription.listener.apply(subscription.context, args);
	  };
	
	  return BaseEventEmitter;
	})();
	
	module.exports = BaseEventEmitter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EmitterSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventSubscription = __webpack_require__(174);
	
	/**
	 * EmitterSubscription represents a subscription with listener and context data.
	 */
	
	var EmitterSubscription = (function (_EventSubscription) {
	  _inherits(EmitterSubscription, _EventSubscription);
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
	   *   this subscription
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  function EmitterSubscription(subscriber, listener, context) {
	    _classCallCheck(this, EmitterSubscription);
	
	    _EventSubscription.call(this, subscriber);
	    this.listener = listener;
	    this.context = context;
	  }
	
	  return EmitterSubscription;
	})(EventSubscription);
	
	module.exports = EmitterSubscription;

/***/ },

/***/ 174:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EventSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * EventSubscription represents a subscription to a particular event. It can
	 * remove its own subscription.
	 */
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EventSubscription = (function () {
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
	   *   this subscription.
	   */
	
	  function EventSubscription(subscriber) {
	    _classCallCheck(this, EventSubscription);
	
	    this.subscriber = subscriber;
	  }
	
	  /**
	   * Removes this subscription from the subscriber that controls it.
	   */
	
	  EventSubscription.prototype.remove = function remove() {
	    this.subscriber.removeSubscription(this);
	  };
	
	  return EventSubscription;
	})();
	
	module.exports = EventSubscription;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EventSubscriptionVendor
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(14);
	
	/**
	 * EventSubscriptionVendor stores a set of EventSubscriptions that are
	 * subscribed to a particular event type.
	 */
	
	var EventSubscriptionVendor = (function () {
	  function EventSubscriptionVendor() {
	    _classCallCheck(this, EventSubscriptionVendor);
	
	    this._subscriptionsForType = {};
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a subscription keyed by an event type.
	   *
	   * @param {string} eventType
	   * @param {EventSubscription} subscription
	   */
	
	  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
	    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
	    if (!this._subscriptionsForType[eventType]) {
	      this._subscriptionsForType[eventType] = [];
	    }
	    var key = this._subscriptionsForType[eventType].length;
	    this._subscriptionsForType[eventType].push(subscription);
	    subscription.eventType = eventType;
	    subscription.key = key;
	    return subscription;
	  };
	
	  /**
	   * Removes a bulk set of the subscriptions.
	   *
	   * @param {?string} eventType - Optional name of the event type whose
	   *   registered supscriptions to remove, if null remove all subscriptions.
	   */
	
	  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
	    if (eventType === undefined) {
	      this._subscriptionsForType = {};
	    } else {
	      delete this._subscriptionsForType[eventType];
	    }
	  };
	
	  /**
	   * Removes a specific subscription. Instead of calling this function, call
	   * `subscription.remove()` directly.
	   *
	   * @param {object} subscription
	   */
	
	  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
	    var eventType = subscription.eventType;
	    var key = subscription.key;
	
	    var subscriptionsForType = this._subscriptionsForType[eventType];
	    if (subscriptionsForType) {
	      delete subscriptionsForType[key];
	    }
	  };
	
	  /**
	   * Returns the array of subscriptions that are currently registered for the
	   * given event type.
	   *
	   * Note: This array can be potentially sparse as subscriptions are deleted
	   * from it when they are removed.
	   *
	   * TODO: This returns a nullable array. wat?
	   *
	   * @param {string} eventType
	   * @return {?array}
	   */
	
	  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
	    return this._subscriptionsForType[eventType];
	  };
	
	  return EventSubscriptionVendor;
	})();
	
	module.exports = EventSubscriptionVendor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Application Actions
	 * @flow
	 */
	
	var AppConstants = __webpack_require__(160);
	var AppDispatcher = __webpack_require__(162);
	
	var $__0=  AppConstants,ActionTypes=$__0.ActionTypes;
	
	function AppActions(){"use strict";}
	
	    Object.defineProperty(AppActions.prototype,"dispatch",{writable:true,configurable:true,value:function(type        , data         ) {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).string, __webpack_require__(168).optional(__webpack_require__(168).object)]));
	        AppDispatcher.dispatch(Object.assign({ type:type}, data ));
	    }});
	
	    Object.defineProperty(AppActions.prototype,"initLoad",{writable:true,configurable:true,value:function(data         ) {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).optional(__webpack_require__(168).object)]));
	        this.dispatch(ActionTypes.INIT_LOAD, data);
	    }});
	
	;
	
	module.exports = new AppActions();


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Data Store
	 * @flow
	 */
	
	var AppConstants = __webpack_require__(160);
	var BaseStore = __webpack_require__(166);
	
	var $__0=  AppConstants,ActionTypes=$__0.ActionTypes;
	
	for(var BaseStore____Key in BaseStore){if(BaseStore.hasOwnProperty(BaseStore____Key)){ExampleStore[BaseStore____Key]=BaseStore[BaseStore____Key];}}var ____SuperProtoOfBaseStore=BaseStore===null?null:BaseStore.prototype;ExampleStore.prototype=Object.create(____SuperProtoOfBaseStore);ExampleStore.prototype.constructor=ExampleStore;ExampleStore.__superConstructor__=BaseStore;
	
	    function ExampleStore() {"use strict";
	        BaseStore.call(this);
	        this.setupActions();
	    }
	
	    Object.defineProperty(ExampleStore.prototype,"setupActions",{writable:true,configurable:true,value:function() {"use strict";
	        this.addAction(ActionTypes.INIT_LOAD, this.initLoad);
	    }});
	
	    Object.defineProperty(ExampleStore.prototype,"initLoad",{writable:true,configurable:true,value:function(action        ) {"use strict";__webpack_require__(168).check(arguments, __webpack_require__(168).arguments([__webpack_require__(168).object]));
	        this.emitChange();
	    }});
	
	
	
	module.exports = new ExampleStore();


/***/ }

});
//# sourceMappingURL=app.bundle.js.map