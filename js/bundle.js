/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var bemxjst = __webpack_require__(1),
	    bemhtml = 'oninit(function(t,i){function s(t,i){this.ctx="undefined"==typeof t?"":t,this.apply=i,this._str="";var s=this;this._buf={push:function(){var t=o.call(arguments).join("");s._str+=t},join:function(){return this._str}},this._=this,this._start=!0,this._mode="",this._listLength=0,this._notNewList=!1,this.position=0,this.block=e,this.elem=e,this.mods=e,this.elemMods=e}var e,n={},r=Object.prototype.toString,o=Array.prototype.slice,a=Array.isArray||function(t){return"[object Array]"===r.call(t)},l={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(t){function i(t,i){var s=r+t;return i!==!0&&(s+=r+i),s}function s(t,s,e){var n=t;return e&&(n+=i(s,e)),n}function n(t,e,n,r){var a=s(t)+o+e;return r&&(a+=i(n,r)),a}var r="_",o="__",a="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:a,MOD_DELIM:r,ELEM_DELIM:o,buildModPostfix:i,buildClass:function(t,i,r,o){var a=typeof r;if("string"===a||"boolean"===a){var l=typeof o;"string"!==l&&"boolean"!==l&&(o=r,r=i,i=e)}else"undefined"!==a?r=e:i&&"string"!=typeof i&&(i=e);return i||r?i?n(t,i,r,o):s(t,r,o):t},buildModsClasses:function(t,i,e){var r="";if(e){var o;for(o in e)if(e.hasOwnProperty(o)){var a=e[o];(a||0===a)&&("boolean"!=typeof a&&(a+=""),r+=" "+(i?n(t,i,o,a):s(t,o,a)))}}return r},buildClasses:function(t,i,e){var r="";return r+=i?n(t,i):s(t),r+=this.buildModsClasses(t,i,e)}}}(n);var h=function(){var t={\'"\':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},i=function(i){return t[i]||i};return function(t){return t=new RegExp(t,"g"),function(s){return(""+s).replace(t,i)}}}();i.BEMContext=s,s.prototype.isArray=a,s.prototype.isSimple=function(t){if(!t||t===!0)return!0;var i=typeof t;return"string"===i||"number"===i},s.prototype.isShortTag=function(t){return l.hasOwnProperty(t)},s.prototype.extend=function(t,i){if(!t||!i)return t||i;var s,e={};for(s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);for(s in i)i.hasOwnProperty(s)&&(e[s]=i[s]);return e},s.prototype.identify=function(){var t=0,i=+new Date,s="__"+i,e=function(){return"uniq"+i+ ++t};return function(t,i){return t?i||t[s]?t[s]:t[s]=e():e()}}(),s.prototype.xmlEscape=h("[&<>]"),s.prototype.attrEscape=h(\'["&<>]\'),s.prototype.BEM=n,s.prototype.isFirst=function(){return 1===this.position},s.prototype.isLast=function(){return this.position===this._listLength},s.prototype.generateId=function(){return this.identify(this.ctx)};var c=t.apply;t.apply=s.apply=function(t){var i=new s(t||this,c);return i.apply(),i._str},s.prototype.reapply=s.apply}),match(""===this._mode)(match()(function(){this.ctx||(this.ctx={});var t=this.ctx.block,i=this.ctx.elem,s=this._currBlock||this.block;local("default",{block:t||(i?s:void 0),_currBlock:t||i?void 0:s,elem:i,mods:t?this.ctx.mods||(this.ctx.mods={}):this.mods,elemMods:this.ctx.elemMods||{}})(function(){this.block||this.elem?this.position=(this.position||0)+1:this._listLength--,apply()})}),match(function(){return this.isArray(this.ctx)})(function(){var t=this.ctx,i=t.length,s=0,e=this.position,n=this._notNewList;for(n?this._listLength+=i-1:(this.position=0,this._listLength=i),this._notNewList=!0;i>s;)apply({ctx:t[s++]});n||(this.position=e)}),match(!this.ctx)(function(){this._listLength--}),match(function(){return this.isSimple(this.ctx)})(function(){this._listLength--;var t=this.ctx;(t&&t!==!0||0===t)&&(this._str+=t+"")}),match(this.ctx&&this.ctx._vow)(function(){applyCtx(this.ctx._value)})),def()(function(){var t,i,s,e=this.BEM.INTERNAL,n=this.ctx;local({_str:""})(function(){var r=this.block;if(i=apply("tag"),"undefined"!=typeof i||(i=n.tag),"undefined"!=typeof i||(i="div"),i){var o,a;r&&n.js!==!1&&(a=apply("js"),a=a?this.extend(n.js,a===!0?{}:a):n.js===!0?{}:n.js,a&&((o={})[e.buildClass(r,n.elem)]=a)),this._str+="<"+i,t=apply("bem"),"undefined"!=typeof t||(t="undefined"!=typeof n.bem?n.bem:n.block||n.elem);var l=apply("cls");l||(l=n.cls);var h=n.block&&o&&!n.elem;if(t||l){if(this._str+=\' class="\',t){this._str+=e.buildClasses(r,n.elem,n.elemMods||n.mods);var c=apply("mix");if(n.mix&&(c=c?[].concat(c,n.mix):n.mix),c){var p={},u=function(t,i){return(t||"")+"__"+(i||"")};p[u(r,this.elem)]=!0,this.isArray(c)||(c=[c]);for(var f=0;f<c.length;f++){var m=c[f],d=m.block||m.elem,y=m.block||m._block||this.block,_=m.elem||m._elem||this.elem;if(d&&(this._str+=" "),this._str+=e[d?"buildClasses":"buildModsClasses"](y,m.elem||m._elem||(m.block?void 0:this.elem),m.elemMods||m.mods),m.js&&((o||(o={}))[e.buildClass(y,m.elem)]=m.js===!0?{}:m.js,h||(h=y&&!m.elem)),d&&!p[u(y,_)]){p[u(y,_)]=!0;var v=apply("mix",{block:y,elem:_});if(v)for(var b=0;b<v.length;b++){var x=v[b];(x.block||x.elem)&&p[u(x.block,x.elem)]||(x._block=y,x._elem=_,c.splice(f+1,0,x))}}}}}l&&(this._str+=t?" "+l:l),this._str+=h?\' i-bem"\':\'"\'}t&&o&&(this._str+=\' data-bem="\'+this.attrEscape(JSON.stringify(o))+\'"\');var g=apply("attrs");if(g=this.extend(g,n.attrs)){var k,L;for(k in g)L=g[k],"undefined"!=typeof L&&(this._str+=" "+k+\'="\'+this.attrEscape(this.isSimple(L)?L:this.reapply(L))+\'"\')}}if(this.isShortTag(i))this._str+="/>";else{i&&(this._str+=">");var M=apply("content");(M||0===M)&&(t=r||this.elem,apply("",{_notNewList:!1,position:t?1:this.position,_listLength:t?1:this._listLength,ctx:M})),i&&(this._str+="</"+i+">")}s=this._str}),this._buf.push(s)}),tag()(void 0),attrs()(void 0),cls()(void 0),js()(void 0),bem()(void 0),mix()(void 0),content()(function(){return this.ctx.content});';

	window.compile = function(source) {
	    return bemxjst.generate(bemhtml + source, {
	        wrap: true,
	        exportName: 'BEMHTML',
	        optimize: false,
	        cache: false,
	        modulesDeps: false
	    });
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var bemhtml = exports;

	// Runtime
	bemhtml.runtime = __webpack_require__(2);

	// Compiler
	bemhtml.Compiler = __webpack_require__(3).Compiler;

	// API functions
	bemhtml.pretranslate = __webpack_require__(4).pretranslate;
	bemhtml.translate = __webpack_require__(4).translate;
	bemhtml.pregenerate = __webpack_require__(4).pregenerate;
	bemhtml.generate = __webpack_require__(4).generate;
	bemhtml.compile = __webpack_require__(4).compile;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var __$that = this,
	      __$blockRef = {},
	      __$elemRef = {},
	      __$queue = [];

	  // Called after all matches
	  function __$flush() {
	    __$queue.filter(function(item) {
	      return !item.__$parent;
	    }).forEach(function(item) {
	      function apply(conditions, item) {
	        if (item && item.__$children) {
	          // Sub-template
	          var subcond = conditions.concat(item.__$cond);
	          item.__$children.forEach(function(child) {
	            apply(subcond, child);
	          });
	        } else {
	          var hasBlock = false;
	          var hasElem = false;
	          conditions = conditions.filter(function(cond) {
	            if (cond === __$blockRef) {
	              hasBlock = true;
	              return false;
	            }
	            if (cond === __$elemRef) {
	              hasElem = true;
	              return false;
	            }
	            return true;
	          });
	          if (hasBlock && !hasElem) conditions.push(!__$that.elem);

	          // Body
	          template.apply(null, conditions)(item);
	        }
	      }
	      apply([], item);
	    });
	  };

	  // Matching
	  function match() {
	    function fn() {
	      var args = Array.prototype.slice.call(arguments);

	      args.forEach(function(arg) {
	        if (arg && arg.__$children) {
	          // Sub-template
	          arg.__$parent = fn;
	        }
	        fn.__$children.push(arg);
	      });

	      // Handle match().match()
	      var res = fn;
	      while (res.__$parent) res = res.__$parent;
	      return res;
	    };
	    __$queue.push(fn);
	    fn.__$children = [];
	    fn.__$parent = null;
	    fn.__$cond = Array.prototype.slice.call(arguments);

	    fn.match = match;
	    fn.elemMatch = elemMatch;
	    fn.block = block;
	    fn.elem = elem;
	    fn.mode = mode;
	    fn.mod = mod;
	    fn.elemMod = elemMod;
	    fn.def = def;
	    fn.tag = tag;
	    fn.attrs = attrs;
	    fn.cls = cls;
	    fn.js = js;
	    fn.jsAttr = jsAttr;
	    fn.bem = bem;
	    fn.mix = mix;
	    fn.content = content;
	    fn.replace = replace;
	    fn.extend = extend;

	    // match().match()
	    if (this && this.__$children) {
	      this.__$children.push(fn);
	      fn.__$parent = this;
	    }

	    return fn;
	  };

	  function block(name) {
	    return match.call(this, __$blockRef, __$that.block === name);
	  };

	  function elemMatch() {
	    var args = Array.prototype.slice.call(arguments);
	    return match.apply(this, [__$elemRef].concat(args));
	  }

	  function elem(name) {
	    return match.call(this, __$elemRef, __$that.elem === name);
	  };

	  function mode(name) {
	    return match.call(this, __$that._mode === name);
	  };

	  function mod(name, value) {
	    return match.call(this, __$that.mods, function() {
	      return __$that.mods[name] === value;
	    });
	  }

	  function elemMod(name, value) {
	    return match.call(this, __$that.elemMods, function() {
	      return __$that.elemMods[name] === value;
	    });
	  }

	  function def() { return mode.call(this, 'default'); };
	  function tag() { return mode.call(this, 'tag'); };
	  function attrs() { return mode.call(this,'attrs'); };
	  function cls() { return mode.call(this, 'cls'); };
	  function js() { return mode.call(this, 'js'); };
	  function jsAttr() { return mode.call(this, 'jsAttr'); };
	  function bem() { return mode.call(this, 'bem'); };
	  function mix() { return mode.call(this, 'mix'); };
	  function content() { return mode.call(this, 'content'); };
	  function replace() {
	    var self = this;
	    return function (body) {
	      return self.def()(function () { return applyCtx(body()) });
	    };
	  };
	  function extend() {
	    var self = this;
	    return function (body) {
	      return self.def()(function () {
	        return applyCtx(this.extend(this.ctx, body()));
	      });
	    };
	  };

	  // Apply by mode, local by mode and applyCtx
	  apply = function(apply) {
	    return function bemApply() {
	      var args = Array.prototype.map.call(arguments, function(arg) {
	        if (typeof arg === 'string') {
	          return { _mode: arg };
	        } else {
	          return arg;
	        }
	      });
	      return apply.apply(null, args);
	    };
	  }(apply);

	  applyNext = function(applyNext) {
	    return function bemApplyNext() {
	      var args = Array.prototype.map.call(arguments, function(arg) {
	        if (typeof arg === 'string') {
	          return { _mode: arg };
	        } else {
	          return arg;
	        }
	      });
	      return applyNext.apply(null, args);
	    };
	  }(applyNext);

	  local = function(local) {
	    return function bemLocal() {
	      var args = Array.prototype.map.call(arguments, function(arg) {
	        if (typeof arg === 'string') {
	          return { _mode: arg };
	        } else {
	          return arg;
	        }
	      });
	      return local.apply(null, args);
	    };
	  }(local);

	  function applyCtx() {
	    var context = arguments[arguments.length - 1];
	    var rest = Array.prototype.slice.call(arguments, 0, -1);
	    return applyNext.apply(this, [{ _mode: '', ctx: context }].concat(rest));
	  };
	}.toString().replace(/^function\s*\(\)\s*{|}$/g, '');


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var bemhtml = __webpack_require__(1);
	var assert = __webpack_require__(6);
	var vm = __webpack_require__(7);
	var esprima = __webpack_require__(8);
	var estraverse = __webpack_require__(9);
	var uglify = __webpack_require__(5);
	var xjst = __webpack_require__(10);

	function Compiler(options) {
	  options = this.options = options || {};
	  if (options.cache === true) {
	    if (options.optimize === false || options['no-opt']) {
	      throw new Error('Cache doesn\'t work with development build');
	    }
	  }

	  this.globals = {
	    _mode: '$$mode',
	    block: '$$block',
	    elem: '$$elem',
	    elemMods: '$$elemMods',
	    mods: '$$mods'
	  };
	  this.options.globalInit = {
	    mode: '_mode',
	    block: 'block',
	    elem: 'elem',
	    elemMods: 'elemMods',
	    mods: 'mods'
	  };
	  this.options.globals = {
	    mode: '',
	    block: '',
	    elem: '',
	    elemMods: null,
	    mods: null
	  };
	  this.options.scoreFilter = this._bumpMode;
	  this.globalKeys = Object.keys(this.globals);
	  this.globalValues = this.globalKeys.map(function(key) {
	    return this.globals[key];
	  }, this);

	  this.matches = {
	    match: true, elemMatch: true,
	    block: true, elem: true, mode: true, mod: true, elemMod: true,
	    def: true, tag: true, attrs: true, cls: true,
	    js: true, jsAttr: true, bem: true, mix: true, content: true,
	    replace: true, extend: true
	  };
	};
	exports.Compiler = Compiler;

	// Ensure that `this._mode` predicate is always top-level
	Compiler.prototype._bumpMode = function _bumpMode(ast) {
	  if (ast.type !== 'MemberExpression' || ast.computed)
	    return 0;
	  var obj = ast.object;
	  var prop = ast.property;
	  if (obj.type !== 'Identifier' || obj.name !== '__$ctx')
	    return 0;
	  if (prop.type !== 'Identifier' || prop.name !== '_mode')
	    return 0;

	  return Infinity;
	};

	Compiler.prototype.pretranslate = function pretranslate(ast) {
	  // Ok, I admit it. Translation process is a bit fucked.
	  var self = this;
	  var allowed = {
	    Program: true,
	    ExpressionStatement: true,
	    CallExpression: true,
	    MemberExpression: true
	  };
	  ast = estraverse.replace(ast, {
	    enter: function(ast, parent, notify) {
	      // Do not get too deep
	      if (!allowed[ast.type]) {
	        this.skip();
	      }
	    },
	    leave: function(ast, parent) {
	      // `replace' detected in children would bubble up here
	      var extendedMode = ast.extendedMode;

	      // 1. mark all match calls
	      ast = self.markMatches(ast);

	      // Propagate `replace' flag if detected in markMatches or set in children
	      if (ast.extendedMode || extendedMode) {
	        extendedMode = ast.extendedMode || extendedMode;
	        parent.extendedMode = extendedMode;
	      }

	      // 2. replace all custom matches with match() calls
	      ast = self.replaceCustom(ast);

	      // 3. Merge match(cond).match(cond) into match(cond, cond) and
	      //    match(cond)(match(cond)) into match()(match(cond, cond)
	      ast = self.mergeMatches(ast);

	      // Recover `replace' flag possibly removed by replaceCustom & mergeMatches
	      if (extendedMode) ast.extendedMode = extendedMode;
	      return ast;
	    }
	  });

	  // 4. Flatten every statement and replace local/apply/applyNext/applyCtx
	  for (var i = 0; i < ast.body.length; i++) {
	    var stmt = ast.body[i];
	    if (stmt.type !== 'ExpressionStatement' ||
	        !stmt.expression.bemMarked) {
	      continue;
	    }

	    var exprs = this.flatten(stmt.expression);
	    ast.body.splice.apply(ast.body, [ i, 1 ].concat(exprs.map(function(expr) {
	      return {
	        type: 'ExpressionStatement',
	        expression: expr
	      }
	    })));
	    i += exprs.length - 1;
	  }

	  return ast;
	};

	Compiler.prototype.translate = function translate(ast, code) {
	  ast = this.pretranslate(ast);
	  return this.replaceContext(xjst.translate(ast, code, this.options));
	};

	Compiler.prototype.markMatches = function markMatches(ast) {
	  // Propagate marks through member expressions
	  if (ast.type === 'MemberExpression' &&
	      ast.object.type === 'CallExpression' && ast.object.bemMarked) {
	    return {
	      type: 'MemberExpression',
	      computed: ast.computed,
	      object: ast.object,
	      property: ast.property,
	      bemMarked: true
	    };
	  }

	  if (ast.type !== 'CallExpression') {
	    // When detected desugar replace() and extend() into def(), propagate
	    // extendedMode so that their bodies get desugared too
	    if (ast.type === 'Identifier' &&
	        (ast.name === 'replace' || ast.name === 'extend')) {
	      ast.extendedMode = ast.name;
	      ast.name = 'def';
	    }
	    return ast;
	  }

	  // Propagate marks through calls
	  if (ast.callee.type === 'CallExpression' && ast.callee.bemMarked) {
	    return {
	      type: 'CallExpression',
	      callee: ast.callee,
	      arguments: ast.arguments,
	      bemMarked: true
	    };
	  }

	  // match()
	  // NOTE: Marks are created here
	  if (ast.callee.type === 'Identifier') {
	    var name = ast.callee.name;
	    if (!this.matches[name]) return ast;
	    return {
	      type: 'CallExpression',
	      callee: ast.callee,
	      arguments: ast.arguments,
	      bemMarked: true
	    };
	  }

	  // .match()
	  if (ast.callee.type === 'MemberExpression' && ast.callee.bemMarked) {
	    var type = ast.callee.property.type;
	    assert(type === 'Literal' || type === 'Identifier',
	           'match().prop could be only literal or identifier');
	    var prop = ast.callee.property.name || ast.callee.property.value;
	    if (!this.matches[prop]) return ast;
	    return {
	      type: 'CallExpression',
	      callee: ast.callee,
	      arguments: ast.arguments,
	      bemMarked: true
	    };
	  }

	  return ast;
	};

	Compiler.prototype.getBinop = function getBinop(name, args) {
	  var lhs;
	  var rhs;
	  if (name === 'elemMatch') {
	    return args;
	  } else if (name === 'block' || name === 'elem' || name === 'mode') {
	    lhs = name === 'mode' ? '_mode' : name;
	    rhs = args[0];
	    assert.equal(args.length, 1,
	                 'block/elem/mode predicates must have only one argument');
	  } else if (name === 'mod' || name === 'elemMod') {
	    assert.equal(args.length, 2,
	                 'mod() predicates must have two arguments');
	    // Modificator/Elem-Modificator predicate
	    return [{
	      type: 'MemberExpression',
	      computed: false,
	      object: { type: 'ThisExpression' },
	      property: { type: 'Identifier', name: name + 's' }
	    }, {
	      type: 'BinaryExpression',
	      operator: '===',
	      left: {
	        type: 'MemberExpression',
	        computed: true,
	        object: {
	          type: 'MemberExpression',
	          computed: false,
	          object: { type: 'ThisExpression' },
	          property: { type: 'Identifier', name: name + 's' }
	        },
	        property: args[0]
	      },
	      right: args[1]
	    }];
	  } else {
	    // Mode predicates
	    assert.equal(args.length, 0,
	                 'mode literal predicates can\'t have arguments');
	    lhs = '_mode';
	    rhs = { type: 'Literal', value: name === 'def' ? 'default' : name };
	  }
	  assert(lhs && rhs);

	  return [{
	    type: 'BinaryExpression',
	    operator: '===',
	    left: {
	      type: 'MemberExpression',
	      computed: false,
	      object: { type: 'ThisExpression' },
	      property: { type: 'Identifier', name: lhs }
	    },
	    right: rhs
	  }];
	};

	Compiler.prototype.replaceCustom = function replaceCustom(ast) {
	  if (ast.type !== 'CallExpression' || !ast.bemMarked) return ast;

	  var callee = ast.callee;
	  if (callee.type === 'Identifier') {
	    var name = callee.name;

	    if (!this.matches[name]) {
	      return ast;
	    }

	    // Just replace predicates
	    if (name === 'match') return ast;

	    return {
	      type: 'CallExpression',
	      _blockMatch: name === 'block',
	      _elemMatch: name === 'elemMatch' || name === 'elem',
	      callee: {
	        type: 'Identifier',
	        name: 'match'
	      },
	      arguments: this.getBinop(name, ast.arguments),
	      bemMarked: true
	    };
	  } else if (callee.type === 'MemberExpression') {
	    var property = callee.property;
	    var name = property.name || property.value;
	    if (!this.matches[name]) {
	      return ast;
	    }

	    // Just replace predicates
	    if (name === 'match') return ast;

	    return {
	      type: 'CallExpression',
	      _blockMatch: name === 'block',
	      _elemMatch: name === 'elemMatch' || name === 'elem',
	      callee: {
	        type: 'MemberExpression',
	        computed: false,
	        object: callee.object,
	        property: { type: 'Identifier', name: 'match' }
	      },
	      arguments: this.getBinop(name, ast.arguments),
	      bemMarked: true
	    };
	  }

	  return ast;
	};

	Compiler.prototype.mergeMatches = function mergeMatches(ast) {
	  if (ast.type !== 'CallExpression' || !ast.bemMarked) return ast;

	  // (match(...).match)(...) => match(...)
	  if (ast.callee.type === 'MemberExpression') {
	    var obj = ast.callee.object;
	    assert.equal(obj.type, 'CallExpression');
	    ast = {
	      type: 'CallExpression',
	      _blockMatch: ast._blockMatch || obj._blockMatch,
	      _elemMatch: ast._elemMatch || obj._elemMatch,
	      callee: obj.callee,
	      arguments: ast.arguments.concat(obj.arguments),
	      bemMarked: true
	    };
	  }

	  return ast;
	};

	Compiler.prototype.flatten = function flatten(expr) {
	  var extendedMode = expr.extendedMode;

	  function addNoElem(predicates, blockMatch, elemMatch) {
	    if (blockMatch && !elemMatch) {
	      return predicates.concat({
	        type: 'UnaryExpression',
	        operator: '!',
	        argument: {
	          type: 'MemberExpression',
	          computed: false,
	          property: { type: 'Identifier', name: 'elem' },
	          object: { type: 'ThisExpression' }
	        }
	      });
	    }

	    return predicates;
	  }

	  function dive(expr, blockMatch, elemMatch) {
	    // At this point only match(...)(match(...)(...), body) expressions are
	    // present.
	    assert.equal(expr.type, 'CallExpression');
	    assert.equal(expr.callee.type, 'CallExpression');

	    blockMatch = blockMatch || expr.callee._blockMatch || false;
	    elemMatch = elemMatch || expr.callee._elemMatch || false;

	    var predicates = expr.callee.arguments;

	    var res = [];

	    // Visit sub-templates and bodies
	    expr.arguments.forEach(function(arg) {
	      if (arg.bemMarked) {
	        dive(arg, blockMatch, elemMatch).forEach(function(t) {
	          var tblockMatch = blockMatch || t.blockMatch;
	          var telemMatch = elemMatch || t.elemMatch;

	          res.push({
	            predicates: addNoElem(predicates, tblockMatch, telemMatch),
	            predicates: predicates.concat(t.predicates),
	            blockMatch: tblockMatch,
	            elemMatch: telemMatch,
	            body: t.body
	          });
	        });
	      } else {
	        // Body
	        res.push({
	          predicates: addNoElem(predicates, blockMatch, elemMatch),
	          blockMatch: blockMatch,
	          elemMatch: elemMatch,
	          body: arg
	        });
	      }
	    });

	    return res;
	  }

	  return dive(expr).map(function(t) {
	    return {
	      type: 'CallExpression',
	      callee: {
	        type: 'CallExpression',
	        callee: { type: 'Identifier', name: 'template' },
	        arguments: t.predicates
	      },
	      arguments: [ this.replaceBody(t.body, extendedMode) ]
	    };
	  }, this);
	};

	Compiler.prototype.desugarExtended = function desugarExtended(body, mode) {
	  if (mode) {
	    body.body = estraverse.replace(body.body, {
	      enter: function (ast, parent) {
	        // don't mess with nested scopes
	        if (ast.type === 'FunctionDeclaration' ||
	            ast.type === 'FunctionExpression') {
	          this.skip();
	        }
	      },
	      leave: function (ast) {
	        if (ast.type === 'ReturnStatement') {
	          var applyCtxArgNode,
	              applyCtxNode;

	          if (mode === 'replace') {
	            applyCtxArgNode = ast.argument;
	          } else if (mode === 'extend') {
	            applyCtxArgNode = {
	              type: 'CallExpression',
	              callee: {
	                type: 'MemberExpression',
	                computed: false,
	                object: { type: 'ThisExpression' },
	                property: { type: 'Identifier', name: 'extend' }
	              },
	              arguments: [
	                {
	                  type: 'MemberExpression',
	                  computed: false,
	                  object: { type: 'ThisExpression' },
	                  property: { type: 'Identifier', name: 'ctx' }
	                },
	                ast.argument
	              ]
	            };
	          }

	          applyCtxNode = {
	            type: 'CallExpression',
	            callee: { type: 'Identifier', name: 'applyCtx'},
	            arguments: [ applyCtxArgNode ]
	          };
	          return {type: 'ReturnStatement', argument: applyCtxNode};
	        }
	        return ast;
	      }
	    });
	  }
	};

	Compiler.prototype.replaceBody = function replaceBody(body, extendedMode) {
	  var self = this;

	  // desugar bodies in replace() and extend()
	  this.desugarExtended(body, extendedMode);

	  return estraverse.replace(body, {
	    leave: function(node) {
	      if (node.type !== 'CallExpression') return;

	      // apply(locals)
	      if (node.callee.type === 'Identifier') {
	        var name = node.callee.name;
	        if (name !== 'apply' &&
	            name !== 'applyNext' &&
	            name !== 'applyCtx') {
	          return;
	        }

	        return name === 'applyCtx' ? self.replaceApplyCtx(node) :
	                                     self.replaceApply(node);
	      // local(locals)(body)
	      } else if (node.callee.type === 'CallExpression' &&
	                 node.callee.callee.type === 'Identifier') {
	        var name = node.callee.callee.name;
	        if (name !== 'local') return;

	        return self.replaceLocal(node);
	      }
	    }
	  });
	};

	Compiler.prototype.getModeObj = function getModeObj(mode) {
	  return {
	    type: 'ObjectExpression',
	    properties: [{
	      type: 'Property',
	      key: { type: 'Literal', value: '_mode' },
	      value: mode,
	      kind: 'init'
	    }]
	  };
	};

	Compiler.prototype.replaceApplyCtx = function replaceApplyCtx(ast) {
	  // applyCtx(newCtx) => applyNext({ _mode: '', ctx: newCtx })
	  assert(ast.arguments.length >= 1,
	         'applyCtx() must have at least one argument');
	  var changes = [{
	    type: 'ObjectExpression',
	    properties: [{
	      type: 'Property',
	      key: { type: 'Literal', value: '_mode' },
	      value: { type: 'Literal', value: '' },
	      kind: 'init'
	    }, {
	      type: 'Property',
	      key: { type: 'Literal', value: 'ctx' },
	      value: ast.arguments[ast.arguments.length - 1],
	      kind: 'init'
	    }]
	  }].concat(ast.arguments.slice(0, -1));
	  return this.traceChanges(changes, {
	    type: 'CallExpression',
	    callee: { type: 'Identifier', name: 'applyNext' },
	    arguments: changes
	  });
	};

	Compiler.prototype.replaceApply = function replaceApply(ast) {
	  // apply(mode, {})
	  var changes = ast.arguments.map(function(arg) {
	    if (arg.type !== 'Literal') return arg;
	    return this.getModeObj(arg);
	  }, this);

	  return this.traceChanges(changes, {
	    type: 'CallExpression',
	    callee: ast.callee,
	    arguments: changes
	  });
	};

	Compiler.prototype.replaceLocal = function replaceLocal(ast) {
	  // (local(mode, {}))(body)
	  var changes = ast.callee.arguments.map(function(arg) {
	    if (arg.type !== 'Literal') return arg;
	    return this.getModeObj(arg);
	  }, this);

	  return this.traceChanges(changes, {
	    type: 'CallExpression',
	    callee: {
	      type: 'CallExpression',
	      callee: ast.callee.callee,
	      arguments: changes
	    },
	    arguments: ast.arguments
	  });
	};

	Compiler.prototype.traceChanges = function traceChanges(changes, expr) {
	  if (this.options.cache !== true) return expr;

	  // Translate changes AST array to pairs of key/value
	  var pairs = changes.reduce(function(prev, cur) {
	    return prev.concat(cur.properties);
	  }, []).map(function(property) {
	    return {
	      key: property.key.name || property.key.value,
	      value: property.value
	    };
	  });

	  // Filter changes that could be logged
	  // (Literal values and movements)
	  pairs = pairs.map(function(pair) {
	    function toArr(arr) {
	      return {
	        type: 'ArrayExpression',
	        elements: arr.map(function(elem) {
	          return { type: 'Literal', value: elem }
	        })
	      };
	    }
	    var key = toArr(pair.key.split(/\./g));

	    var val = pair.value;
	    if (val.type === 'Literal') return { key: key, val: val, path: null };

	    var path = [];
	    while (val.type === 'MemberExpression' && !val.computed) {
	      path.unshift(val.property.name);
	      val = val.object;
	    }

	    if (val.type === 'ThisExpression') {
	      return {
	        key: key,
	        val: { type: 'Literal', value: 1 },
	        path: toArr(path)
	      };
	    }

	    return null;
	  });

	  var data = pairs.filter(function(pair) {
	    return pair !== null;
	  }).map(function(pair) {
	    return {
	      type: 'ArrayExpression',
	      elements: pair.path ? [pair.key, pair.path, pair.val] :
	                            [pair.key, pair.val]
	    };
	  });

	  // No changes
	  if (data.length === 0) return expr;

	  var history = {
	    type: 'MemberExpression',
	    computed: false,
	    property: { type: 'Identifier', name: '__$history' },
	    object: { type: 'ThisExpression' }
	  };

	  // this.__$history.push(...)
	  var save = {
	    type: 'CallExpression',
	    callee: {
	      type: 'MemberExpression',
	      computed: false,
	      property: { type: 'Identifier', name: 'push' },
	      object: history
	    },
	    arguments: data
	  };

	  // this.__$history = this.__$history.slice(0, -data.len);
	  var restore = {
	    type: 'AssignmentExpression',
	    operator: '=',
	    left: history,
	    right: {
	      type: 'CallExpression',
	      callee: {
	        type: 'MemberExpression',
	        computed: false,
	        property: { type: 'Identifier', name: 'slice' },
	        object: history
	      },
	      arguments: [
	        { type: 'Literal', value: 0 },
	        { type: 'Literal', value: -data.length }
	      ]
	    }
	  };

	  function check(expr) {
	    return {
	      type: 'IfStatement',
	      test: history,
	      consequent: { type: 'ExpressionStatement', expression: expr },
	      alternate: null
	    };
	  }

	  // function() { push_history(); invoke local; }.call(this)
	  var res = { type: 'Identifier', name: '__$r' };
	  return {
	    type: 'CallExpression',
	    arguments: [{ type: 'ThisExpression' }],
	    callee: {
	      type: 'MemberExpression',
	      computed: false,
	      property: { type: 'Identifier', name: 'call' },
	      object: {
	        type: 'FunctionExpression',
	        id: null,
	        params: [],
	        defaults: [],
	        rest: null,
	        generator: false,
	        expression: false,
	        body: {
	          type: 'BlockStatement',
	          body: [{
	            type: 'VariableDeclaration',
	            kind: 'var',
	            declarations: [{
	              type: 'VariableDeclarator',
	              id: res,
	              init: null
	            }]
	          },
	          check(save),
	          {
	            type: 'ExpressionStatement',
	            expression: {
	              type: 'AssignmentExpression',
	              operator: '=',
	              left: res,
	              right: expr
	            }
	          },
	          check(restore),
	          {
	            type: 'ReturnStatement',
	            argument: res
	          }]
	        }
	      }
	    }
	  };
	};

	Compiler.prototype.pregenerate = function pregenerate(code) {
	  var ast = esprima.parse(code, {
	    loc: true
	  });

	  ast = this.pretranslate(ast);

	  return uglify.AST_Node.from_mozilla_ast(ast).print_to_string();
	};

	Compiler.prototype.wrap = function wrap(code) {
	  if (!this.options.wrap)
	    return code;

	  var opts = this.options;
	  var exportName = opts.exportName || 'BEMHTML';
	  var deps = opts.modulesDeps;
	  var modulesDeps = deps ? ', ' + JSON.stringify(Object.keys(deps)) : '';
	  var modulesProvidedDeps =  deps ? ', ' + Object.keys(deps).map(function(module) {
	    var providedName = deps[module];
	    return providedName === true ? module : providedName;
	  }).join(', ') : '';

	  return '(function(g) {\n' +
	         '  var __bem_xjst = function(exports' + modulesProvidedDeps + ') {\n' +
	         '     ' + code + ';\n' +
	         '     return exports;\n' +
	         '  }\n' +
	         '  var defineAsGlobal = true;\n' +
	         '  if(typeof exports === "object") {\n' +
	         '    exports["' + exportName + '"] = __bem_xjst({}' + modulesProvidedDeps + ');\n' +
	         '    defineAsGlobal = false;\n' +
	         '  }\n' +
	         '  if(typeof modules === "object") {\n' +
	         '    modules.define("' + exportName + '"' + modulesDeps + ',\n' +
	         '      function(provide' + modulesProvidedDeps + ') {\n' +
	         '        provide(__bem_xjst({}' + modulesProvidedDeps + ')) });\n' +
	         '    defineAsGlobal = false;\n' +
	         '  }\n' +
	         '  defineAsGlobal && (g["' + exportName + '"] = __bem_xjst({}' + modulesProvidedDeps + '));\n' +
	         '})(this);'
	};

	Compiler.prototype.generate = function generate(code) {
	  if (this.options['no-opt'] || this.options.optimize === false) {
	    var source = '/// -------------------------------------\n' +
	                 '/// --------- BEM-XJST Runtime Start ----\n' +
	                 '/// -------------------------------------\n' +
	                 bemhtml.runtime + ';\n' +
	                 ';\n' +
	                 '/// -------------------------------------\n' +
	                 '/// --------- BEM-XJST Runtime End ------\n' +
	                 '/// -------------------------------------\n' +
	                 '\n' +
	                 '/// -------------------------------------\n' +
	                 '/// ------ BEM-XJST User-code Start -----\n' +
	                 '/// -------------------------------------\n' +
	                 code + ';\n' +
	                 '/// -------------------------------------\n' +
	                 '/// ------ BEM-XJST User-code End -------\n' +
	                 '/// -------------------------------------\n' +
	                 '__$flush();\n';
	    return this.wrap(xjst.generate(source, this.options));
	  }

	  var ast = esprima.parse(code, {
	    loc: true
	  });

	  ast = this.translate(ast, code);

	  var out = uglify.AST_Node.from_mozilla_ast(ast).print_to_string({ beautify: true });

	  return this.wrap(out);
	};

	Compiler.prototype.compile = function compile(code) {
	  var out = this.generate(code),
	      exports = {};

	  vm.runInNewContext(out, { exports: exports, console: console });

	  return exports;
	};

	Compiler.prototype.replaceContext = function replaceContext(ast) {
	  var self = this;

	  function translateProp(prop) {
	    if (self.globals.hasOwnProperty(prop))
	      return self.globals[prop];
	    else
	      return false;
	  };

	  var applyc = [];
	  var map = null;

	  return estraverse.replace(ast, {
	    enter: function(node) {
	      var isFunction = node.type === 'FunctionDeclaration' ||
	                       node.type === 'FunctionExpression';
	      var id = node.id && node.id.name;
	      if (applyc.length === 0 &&
	          isFunction &&
	          (map !== null || /^(applyc|__\$[bg]\d+)$/.test(id))) {
	        applyc.push(node);
	      } else if (applyc.length === 0 &&
	                 node.type === 'VariableDeclarator' &&
	                 /^__\$m\d+$/.test(id)) {
	        map = node;
	      } else if (isFunction && /^__\$lb/.test(id)) {
	        applyc.push(node);
	      } else if (applyc.length === 0) {
	        return;
	      }

	      if (applyc[applyc.length - 1] !== node && isFunction) {
	        return;
	      }

	      if (node.type === 'MemberExpression' &&
	          node.computed === false &&
	          node.object.type === 'Identifier' &&
	          node.object.name === '__$ctx') {
	        var prop = translateProp(node.property.name || node.property.value);
	        if (!prop)
	          return;

	        return { type: 'Identifier', name: prop };
	      }
	    },
	    leave: function(node) {
	      if (applyc[applyc.length - 1] === node)
	        applyc.pop();
	      if (node === map)
	        map = null;
	    }
	  });
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var bemhtml = __webpack_require__(1);

	exports.pretranslate = function pretranslate(ast, options) {
	  return new bemhtml.Compiler(options).pretranslate(ast);
	};

	exports.translate = function translate(ast, options) {
	  return new bemhtml.Compiler(options).translate(ast);
	};

	exports.pregenerate = function pregenerate(code, options) {
	  return new bemhtml.Compiler(options).pregenerate(code);
	};

	exports.generate = function generate(code, options) {
	  return new bemhtml.Compiler(options).generate(code);
	};

	exports.compile = function compile(code, options) {
	  return new bemhtml.Compiler(options).compile(code);
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var AST_Node = {};


	/***********************************************************************

	  A JavaScript tokenizer / parser / beautifier / compressor.
	  https://github.com/mishoo/UglifyJS2

	  -------------------------------- (C) ---------------------------------

	                           Author: Mihai Bazon
	                         <mihai.bazon@gmail.com>
	                       http://mihai.bazon.net/blog

	  Distributed under the BSD license:

	    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

	    Redistribution and use in source and binary forms, with or without
	    modification, are permitted provided that the following conditions
	    are met:

	        * Redistributions of source code must retain the above
	          copyright notice, this list of conditions and the following
	          disclaimer.

	        * Redistributions in binary form must reproduce the above
	          copyright notice, this list of conditions and the following
	          disclaimer in the documentation and/or other materials
	          provided with the distribution.

	    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
	    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
	    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
	    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
	    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
	    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
	    SUCH DAMAGE.

	 ***********************************************************************/

	"use strict";

	function DEFNODE(type, props, methods, base) {
	    if (arguments.length < 4) base = AST_Node;
	    if (!props) props = [];
	    else props = props.split(/\s+/);
	    var self_props = props;
	    if (base && base.PROPS)
	        props = props.concat(base.PROPS);
	    var code = "return function AST_" + type + "(props){ if (props) { ";
	    for (var i = props.length; --i >= 0;) {
	        code += "this." + props[i] + " = props." + props[i] + ";";
	    }
	    var proto = base && new base;
	    if (proto && proto.initialize || (methods && methods.initialize))
	        code += "this.initialize();";
	    code += "}}";
	    var ctor = new Function(code)();
	    if (proto) {
	        ctor.prototype = proto;
	        ctor.BASE = base;
	    }
	    if (base) base.SUBCLASSES.push(ctor);
	    ctor.prototype.CTOR = ctor;
	    ctor.PROPS = props || null;
	    ctor.SELF_PROPS = self_props;
	    ctor.SUBCLASSES = [];
	    if (type) {
	        ctor.prototype.TYPE = ctor.TYPE = type;
	    }
	    if (methods) for (i in methods) if (methods.hasOwnProperty(i)) {
	        if (/^\$/.test(i)) {
	            ctor[i.substr(1)] = methods[i];
	        } else {
	            ctor.prototype[i] = methods[i];
	        }
	    }
	    ctor.DEFMETHOD = function(name, method) {
	        this.prototype[name] = method;
	    };
	    return ctor;
	};

	var AST_Token = DEFNODE("Token", "type value line col pos endline endcol endpos nlb comments_before file", {
	}, null);

	var AST_Node = DEFNODE("Node", "start end", {
	    clone: function() {
	        return new this.CTOR(this);
	    },
	    $documentation: "Base class of all AST nodes",
	    $propdoc: {
	        start: "[AST_Token] The first token of this node",
	        end: "[AST_Token] The last token of this node"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this);
	    },
	    walk: function(visitor) {
	        return this._walk(visitor); // not sure the indirection will be any help
	    }
	}, null);

	AST_Node.warn_function = null;
	AST_Node.warn = function(txt, props) {
	    if (AST_Node.warn_function)
	        AST_Node.warn_function(string_template(txt, props));
	};

	/* -----[ statements ]----- */

	var AST_Statement = DEFNODE("Statement", null, {
	    $documentation: "Base class of all statements",
	});

	var AST_Debugger = DEFNODE("Debugger", null, {
	    $documentation: "Represents a debugger statement",
	}, AST_Statement);

	var AST_Directive = DEFNODE("Directive", "value scope quote", {
	    $documentation: "Represents a directive, like \"use strict\";",
	    $propdoc: {
	        value: "[string] The value of this directive as a plain string (it's not an AST_String!)",
	        scope: "[AST_Scope/S] The scope that this directive affects",
	        quote: "[string] the original quote character"
	    },
	}, AST_Statement);

	var AST_SimpleStatement = DEFNODE("SimpleStatement", "body", {
	    $documentation: "A statement consisting of an expression, i.e. a = 1 + 2",
	    $propdoc: {
	        body: "[AST_Node] an expression node (should not be instanceof AST_Statement)"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.body._walk(visitor);
	        });
	    }
	}, AST_Statement);

	function walk_body(node, visitor) {
	    if (node.body instanceof AST_Statement) {
	        node.body._walk(visitor);
	    }
	    else node.body.forEach(function(stat){
	        stat._walk(visitor);
	    });
	};

	var AST_Block = DEFNODE("Block", "body", {
	    $documentation: "A body of statements (usually bracketed)",
	    $propdoc: {
	        body: "[AST_Statement*] an array of statements"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            walk_body(this, visitor);
	        });
	    }
	}, AST_Statement);

	var AST_BlockStatement = DEFNODE("BlockStatement", null, {
	    $documentation: "A block statement",
	}, AST_Block);

	var AST_EmptyStatement = DEFNODE("EmptyStatement", null, {
	    $documentation: "The empty statement (empty block or simply a semicolon)",
	    _walk: function(visitor) {
	        return visitor._visit(this);
	    }
	}, AST_Statement);

	var AST_StatementWithBody = DEFNODE("StatementWithBody", "body", {
	    $documentation: "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",
	    $propdoc: {
	        body: "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.body._walk(visitor);
	        });
	    }
	}, AST_Statement);

	var AST_LabeledStatement = DEFNODE("LabeledStatement", "label", {
	    $documentation: "Statement with a label",
	    $propdoc: {
	        label: "[AST_Label] a label definition"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.label._walk(visitor);
	            this.body._walk(visitor);
	        });
	    }
	}, AST_StatementWithBody);

	var AST_IterationStatement = DEFNODE("IterationStatement", null, {
	    $documentation: "Internal class.  All loops inherit from it."
	}, AST_StatementWithBody);

	var AST_DWLoop = DEFNODE("DWLoop", "condition", {
	    $documentation: "Base class for do/while statements",
	    $propdoc: {
	        condition: "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"
	    }
	}, AST_IterationStatement);

	var AST_Do = DEFNODE("Do", null, {
	    $documentation: "A `do` statement",
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.body._walk(visitor);
	            this.condition._walk(visitor);
	        });
	    }
	}, AST_DWLoop);

	var AST_While = DEFNODE("While", null, {
	    $documentation: "A `while` statement",
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.condition._walk(visitor);
	            this.body._walk(visitor);
	        });
	    }
	}, AST_DWLoop);

	var AST_For = DEFNODE("For", "init condition step", {
	    $documentation: "A `for` statement",
	    $propdoc: {
	        init: "[AST_Node?] the `for` initialization code, or null if empty",
	        condition: "[AST_Node?] the `for` termination clause, or null if empty",
	        step: "[AST_Node?] the `for` update clause, or null if empty"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            if (this.init) this.init._walk(visitor);
	            if (this.condition) this.condition._walk(visitor);
	            if (this.step) this.step._walk(visitor);
	            this.body._walk(visitor);
	        });
	    }
	}, AST_IterationStatement);

	var AST_ForIn = DEFNODE("ForIn", "init name object", {
	    $documentation: "A `for ... in` statement",
	    $propdoc: {
	        init: "[AST_Node] the `for/in` initialization code",
	        name: "[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",
	        object: "[AST_Node] the object that we're looping through"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.init._walk(visitor);
	            this.object._walk(visitor);
	            this.body._walk(visitor);
	        });
	    }
	}, AST_IterationStatement);

	var AST_With = DEFNODE("With", "expression", {
	    $documentation: "A `with` statement",
	    $propdoc: {
	        expression: "[AST_Node] the `with` expression"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	            this.body._walk(visitor);
	        });
	    }
	}, AST_StatementWithBody);

	/* -----[ scope and functions ]----- */

	var AST_Scope = DEFNODE("Scope", "directives variables functions uses_with uses_eval parent_scope enclosed cname", {
	    $documentation: "Base class for all statements introducing a lexical scope",
	    $propdoc: {
	        directives: "[string*/S] an array of directives declared in this scope",
	        variables: "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
	        functions: "[Object/S] like `variables`, but only lists function declarations",
	        uses_with: "[boolean/S] tells whether this scope uses the `with` statement",
	        uses_eval: "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
	        parent_scope: "[AST_Scope?/S] link to the parent scope",
	        enclosed: "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
	        cname: "[integer/S] current index for mangling variables (used internally by the mangler)",
	    },
	}, AST_Block);

	var AST_Toplevel = DEFNODE("Toplevel", "globals", {
	    $documentation: "The toplevel scope",
	    $propdoc: {
	        globals: "[Object/S] a map of name -> SymbolDef for all undeclared names",
	    },
	    wrap_enclose: function(arg_parameter_pairs) {
	        var self = this;
	        var args = [];
	        var parameters = [];

	        arg_parameter_pairs.forEach(function(pair) {
	            var splitAt = pair.lastIndexOf(":");

	            args.push(pair.substr(0, splitAt));
	            parameters.push(pair.substr(splitAt + 1));
	        });

	        var wrapped_tl = "(function(" + parameters.join(",") + "){ '$ORIG'; })(" + args.join(",") + ")";
	        wrapped_tl = parse(wrapped_tl);
	        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function before(node){
	            if (node instanceof AST_Directive && node.value == "$ORIG") {
	                return MAP.splice(self.body);
	            }
	        }));
	        return wrapped_tl;
	    },
	    wrap_commonjs: function(name, export_all) {
	        var self = this;
	        var to_export = [];
	        if (export_all) {
	            self.figure_out_scope();
	            self.walk(new TreeWalker(function(node){
	                if (node instanceof AST_SymbolDeclaration && node.definition().global) {
	                    if (!find_if(function(n){ return n.name == node.name }, to_export))
	                        to_export.push(node);
	                }
	            }));
	        }
	        var wrapped_tl = "(function(exports, global){ global['" + name + "'] = exports; '$ORIG'; '$EXPORTS'; }({}, (function(){return this}())))";
	        wrapped_tl = parse(wrapped_tl);
	        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function before(node){
	            if (node instanceof AST_SimpleStatement) {
	                node = node.body;
	                if (node instanceof AST_String) switch (node.getValue()) {
	                  case "$ORIG":
	                    return MAP.splice(self.body);
	                  case "$EXPORTS":
	                    var body = [];
	                    to_export.forEach(function(sym){
	                        body.push(new AST_SimpleStatement({
	                            body: new AST_Assign({
	                                left: new AST_Sub({
	                                    expression: new AST_SymbolRef({ name: "exports" }),
	                                    property: new AST_String({ value: sym.name }),
	                                }),
	                                operator: "=",
	                                right: new AST_SymbolRef(sym),
	                            }),
	                        }));
	                    });
	                    return MAP.splice(body);
	                }
	            }
	        }));
	        return wrapped_tl;
	    }
	}, AST_Scope);

	var AST_Lambda = DEFNODE("Lambda", "name argnames uses_arguments", {
	    $documentation: "Base class for functions",
	    $propdoc: {
	        name: "[AST_SymbolDeclaration?] the name of this function",
	        argnames: "[AST_SymbolFunarg*] array of function arguments",
	        uses_arguments: "[boolean/S] tells whether this function accesses the arguments array"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            if (this.name) this.name._walk(visitor);
	            this.argnames.forEach(function(arg){
	                arg._walk(visitor);
	            });
	            walk_body(this, visitor);
	        });
	    }
	}, AST_Scope);

	var AST_Accessor = DEFNODE("Accessor", null, {
	    $documentation: "A setter/getter function.  The `name` property is always null."
	}, AST_Lambda);

	var AST_Function = DEFNODE("Function", null, {
	    $documentation: "A function expression"
	}, AST_Lambda);

	var AST_Defun = DEFNODE("Defun", null, {
	    $documentation: "A function definition"
	}, AST_Lambda);

	/* -----[ JUMPS ]----- */

	var AST_Jump = DEFNODE("Jump", null, {
	    $documentation: "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"
	}, AST_Statement);

	var AST_Exit = DEFNODE("Exit", "value", {
	    $documentation: "Base class for “exits” (`return` and `throw`)",
	    $propdoc: {
	        value: "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, this.value && function(){
	            this.value._walk(visitor);
	        });
	    }
	}, AST_Jump);

	var AST_Return = DEFNODE("Return", null, {
	    $documentation: "A `return` statement"
	}, AST_Exit);

	var AST_Throw = DEFNODE("Throw", null, {
	    $documentation: "A `throw` statement"
	}, AST_Exit);

	var AST_LoopControl = DEFNODE("LoopControl", "label", {
	    $documentation: "Base class for loop control statements (`break` and `continue`)",
	    $propdoc: {
	        label: "[AST_LabelRef?] the label, or null if none",
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, this.label && function(){
	            this.label._walk(visitor);
	        });
	    }
	}, AST_Jump);

	var AST_Break = DEFNODE("Break", null, {
	    $documentation: "A `break` statement"
	}, AST_LoopControl);

	var AST_Continue = DEFNODE("Continue", null, {
	    $documentation: "A `continue` statement"
	}, AST_LoopControl);

	/* -----[ IF ]----- */

	var AST_If = DEFNODE("If", "condition alternative", {
	    $documentation: "A `if` statement",
	    $propdoc: {
	        condition: "[AST_Node] the `if` condition",
	        alternative: "[AST_Statement?] the `else` part, or null if not present"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.condition._walk(visitor);
	            this.body._walk(visitor);
	            if (this.alternative) this.alternative._walk(visitor);
	        });
	    }
	}, AST_StatementWithBody);

	/* -----[ SWITCH ]----- */

	var AST_Switch = DEFNODE("Switch", "expression", {
	    $documentation: "A `switch` statement",
	    $propdoc: {
	        expression: "[AST_Node] the `switch` “discriminant”"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	            walk_body(this, visitor);
	        });
	    }
	}, AST_Block);

	var AST_SwitchBranch = DEFNODE("SwitchBranch", null, {
	    $documentation: "Base class for `switch` branches",
	}, AST_Block);

	var AST_Default = DEFNODE("Default", null, {
	    $documentation: "A `default` switch branch",
	}, AST_SwitchBranch);

	var AST_Case = DEFNODE("Case", "expression", {
	    $documentation: "A `case` switch branch",
	    $propdoc: {
	        expression: "[AST_Node] the `case` expression"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	            walk_body(this, visitor);
	        });
	    }
	}, AST_SwitchBranch);

	/* -----[ EXCEPTIONS ]----- */

	var AST_Try = DEFNODE("Try", "bcatch bfinally", {
	    $documentation: "A `try` statement",
	    $propdoc: {
	        bcatch: "[AST_Catch?] the catch block, or null if not present",
	        bfinally: "[AST_Finally?] the finally block, or null if not present"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            walk_body(this, visitor);
	            if (this.bcatch) this.bcatch._walk(visitor);
	            if (this.bfinally) this.bfinally._walk(visitor);
	        });
	    }
	}, AST_Block);

	var AST_Catch = DEFNODE("Catch", "argname", {
	    $documentation: "A `catch` node; only makes sense as part of a `try` statement",
	    $propdoc: {
	        argname: "[AST_SymbolCatch] symbol for the exception"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.argname._walk(visitor);
	            walk_body(this, visitor);
	        });
	    }
	}, AST_Block);

	var AST_Finally = DEFNODE("Finally", null, {
	    $documentation: "A `finally` node; only makes sense as part of a `try` statement"
	}, AST_Block);

	/* -----[ VAR/CONST ]----- */

	var AST_Definitions = DEFNODE("Definitions", "definitions", {
	    $documentation: "Base class for `var` or `const` nodes (variable declarations/initializations)",
	    $propdoc: {
	        definitions: "[AST_VarDef*] array of variable definitions"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.definitions.forEach(function(def){
	                def._walk(visitor);
	            });
	        });
	    }
	}, AST_Statement);

	var AST_Var = DEFNODE("Var", null, {
	    $documentation: "A `var` statement"
	}, AST_Definitions);

	var AST_Const = DEFNODE("Const", null, {
	    $documentation: "A `const` statement"
	}, AST_Definitions);

	var AST_VarDef = DEFNODE("VarDef", "name value", {
	    $documentation: "A variable declaration; only appears in a AST_Definitions node",
	    $propdoc: {
	        name: "[AST_SymbolVar|AST_SymbolConst] name of the variable",
	        value: "[AST_Node?] initializer, or null of there's no initializer"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.name._walk(visitor);
	            if (this.value) this.value._walk(visitor);
	        });
	    }
	});

	/* -----[ OTHER ]----- */

	var AST_Call = DEFNODE("Call", "expression args", {
	    $documentation: "A function call expression",
	    $propdoc: {
	        expression: "[AST_Node] expression to invoke as function",
	        args: "[AST_Node*] array of arguments"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	            this.args.forEach(function(arg){
	                arg._walk(visitor);
	            });
	        });
	    }
	});

	var AST_New = DEFNODE("New", null, {
	    $documentation: "An object instantiation.  Derives from a function call since it has exactly the same properties"
	}, AST_Call);

	var AST_Seq = DEFNODE("Seq", "car cdr", {
	    $documentation: "A sequence expression (two comma-separated expressions)",
	    $propdoc: {
	        car: "[AST_Node] first element in sequence",
	        cdr: "[AST_Node] second element in sequence"
	    },
	    $cons: function(x, y) {
	        var seq = new AST_Seq(x);
	        seq.car = x;
	        seq.cdr = y;
	        return seq;
	    },
	    $from_array: function(array) {
	        if (array.length == 0) return null;
	        if (array.length == 1) return array[0].clone();
	        var list = null;
	        for (var i = array.length; --i >= 0;) {
	            list = AST_Seq.cons(array[i], list);
	        }
	        var p = list;
	        while (p) {
	            if (p.cdr && !p.cdr.cdr) {
	                p.cdr = p.cdr.car;
	                break;
	            }
	            p = p.cdr;
	        }
	        return list;
	    },
	    to_array: function() {
	        var p = this, a = [];
	        while (p) {
	            a.push(p.car);
	            if (p.cdr && !(p.cdr instanceof AST_Seq)) {
	                a.push(p.cdr);
	                break;
	            }
	            p = p.cdr;
	        }
	        return a;
	    },
	    add: function(node) {
	        var p = this;
	        while (p) {
	            if (!(p.cdr instanceof AST_Seq)) {
	                var cell = AST_Seq.cons(p.cdr, node);
	                return p.cdr = cell;
	            }
	            p = p.cdr;
	        }
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.car._walk(visitor);
	            if (this.cdr) this.cdr._walk(visitor);
	        });
	    }
	});

	var AST_PropAccess = DEFNODE("PropAccess", "expression property", {
	    $documentation: "Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`",
	    $propdoc: {
	        expression: "[AST_Node] the “container” expression",
	        property: "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"
	    }
	});

	var AST_Dot = DEFNODE("Dot", null, {
	    $documentation: "A dotted property access expression",
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	        });
	    }
	}, AST_PropAccess);

	var AST_Sub = DEFNODE("Sub", null, {
	    $documentation: "Index-style property access, i.e. `a[\"foo\"]`",
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	            this.property._walk(visitor);
	        });
	    }
	}, AST_PropAccess);

	var AST_Unary = DEFNODE("Unary", "operator expression", {
	    $documentation: "Base class for unary expressions",
	    $propdoc: {
	        operator: "[string] the operator",
	        expression: "[AST_Node] expression that this unary operator applies to"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.expression._walk(visitor);
	        });
	    }
	});

	var AST_UnaryPrefix = DEFNODE("UnaryPrefix", null, {
	    $documentation: "Unary prefix expression, i.e. `typeof i` or `++i`"
	}, AST_Unary);

	var AST_UnaryPostfix = DEFNODE("UnaryPostfix", null, {
	    $documentation: "Unary postfix expression, i.e. `i++`"
	}, AST_Unary);

	var AST_Binary = DEFNODE("Binary", "left operator right", {
	    $documentation: "Binary expression, i.e. `a + b`",
	    $propdoc: {
	        left: "[AST_Node] left-hand side expression",
	        operator: "[string] the operator",
	        right: "[AST_Node] right-hand side expression"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.left._walk(visitor);
	            this.right._walk(visitor);
	        });
	    }
	});

	var AST_Conditional = DEFNODE("Conditional", "condition consequent alternative", {
	    $documentation: "Conditional expression using the ternary operator, i.e. `a ? b : c`",
	    $propdoc: {
	        condition: "[AST_Node]",
	        consequent: "[AST_Node]",
	        alternative: "[AST_Node]"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.condition._walk(visitor);
	            this.consequent._walk(visitor);
	            this.alternative._walk(visitor);
	        });
	    }
	});

	var AST_Assign = DEFNODE("Assign", null, {
	    $documentation: "An assignment expression — `a = b + 5`",
	}, AST_Binary);

	/* -----[ LITERALS ]----- */

	var AST_Array = DEFNODE("Array", "elements", {
	    $documentation: "An array literal",
	    $propdoc: {
	        elements: "[AST_Node*] array of elements"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.elements.forEach(function(el){
	                el._walk(visitor);
	            });
	        });
	    }
	});

	var AST_Object = DEFNODE("Object", "properties", {
	    $documentation: "An object literal",
	    $propdoc: {
	        properties: "[AST_ObjectProperty*] array of properties"
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.properties.forEach(function(prop){
	                prop._walk(visitor);
	            });
	        });
	    }
	});

	var AST_ObjectProperty = DEFNODE("ObjectProperty", "key value", {
	    $documentation: "Base class for literal object properties",
	    $propdoc: {
	        key: "[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",
	        value: "[AST_Node] property value.  For setters and getters this is an AST_Function."
	    },
	    _walk: function(visitor) {
	        return visitor._visit(this, function(){
	            this.value._walk(visitor);
	        });
	    }
	});

	var AST_ObjectKeyVal = DEFNODE("ObjectKeyVal", "quote", {
	    $documentation: "A key: value object property",
	    $propdoc: {
	        quote: "[string] the original quote character"
	    }
	}, AST_ObjectProperty);

	var AST_ObjectSetter = DEFNODE("ObjectSetter", null, {
	    $documentation: "An object setter property",
	}, AST_ObjectProperty);

	var AST_ObjectGetter = DEFNODE("ObjectGetter", null, {
	    $documentation: "An object getter property",
	}, AST_ObjectProperty);

	var AST_Symbol = DEFNODE("Symbol", "scope name thedef", {
	    $propdoc: {
	        name: "[string] name of this symbol",
	        scope: "[AST_Scope/S] the current scope (not necessarily the definition scope)",
	        thedef: "[SymbolDef/S] the definition of this symbol"
	    },
	    $documentation: "Base class for all symbols",
	});

	var AST_SymbolAccessor = DEFNODE("SymbolAccessor", null, {
	    $documentation: "The name of a property accessor (setter/getter function)"
	}, AST_Symbol);

	var AST_SymbolDeclaration = DEFNODE("SymbolDeclaration", "init", {
	    $documentation: "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",
	    $propdoc: {
	        init: "[AST_Node*/S] array of initializers for this declaration."
	    }
	}, AST_Symbol);

	var AST_SymbolVar = DEFNODE("SymbolVar", null, {
	    $documentation: "Symbol defining a variable",
	}, AST_SymbolDeclaration);

	var AST_SymbolConst = DEFNODE("SymbolConst", null, {
	    $documentation: "A constant declaration"
	}, AST_SymbolDeclaration);

	var AST_SymbolFunarg = DEFNODE("SymbolFunarg", null, {
	    $documentation: "Symbol naming a function argument",
	}, AST_SymbolVar);

	var AST_SymbolDefun = DEFNODE("SymbolDefun", null, {
	    $documentation: "Symbol defining a function",
	}, AST_SymbolDeclaration);

	var AST_SymbolLambda = DEFNODE("SymbolLambda", null, {
	    $documentation: "Symbol naming a function expression",
	}, AST_SymbolDeclaration);

	var AST_SymbolCatch = DEFNODE("SymbolCatch", null, {
	    $documentation: "Symbol naming the exception in catch",
	}, AST_SymbolDeclaration);

	var AST_Label = DEFNODE("Label", "references", {
	    $documentation: "Symbol naming a label (declaration)",
	    $propdoc: {
	        references: "[AST_LoopControl*] a list of nodes referring to this label"
	    },
	    initialize: function() {
	        this.references = [];
	        this.thedef = this;
	    }
	}, AST_Symbol);

	var AST_SymbolRef = DEFNODE("SymbolRef", null, {
	    $documentation: "Reference to some symbol (not definition/declaration)",
	}, AST_Symbol);

	var AST_LabelRef = DEFNODE("LabelRef", null, {
	    $documentation: "Reference to a label symbol",
	}, AST_Symbol);

	var AST_This = DEFNODE("This", null, {
	    $documentation: "The `this` symbol",
	}, AST_Symbol);

	var AST_Constant = DEFNODE("Constant", null, {
	    $documentation: "Base class for all constants",
	    getValue: function() {
	        return this.value;
	    }
	});

	var AST_String = DEFNODE("String", "value quote", {
	    $documentation: "A string literal",
	    $propdoc: {
	        value: "[string] the contents of this string",
	        quote: "[string] the original quote character"
	    }
	}, AST_Constant);

	var AST_Number = DEFNODE("Number", "value", {
	    $documentation: "A number literal",
	    $propdoc: {
	        value: "[number] the numeric value"
	    }
	}, AST_Constant);

	var AST_RegExp = DEFNODE("RegExp", "value", {
	    $documentation: "A regexp literal",
	    $propdoc: {
	        value: "[RegExp] the actual regexp"
	    }
	}, AST_Constant);

	var AST_Atom = DEFNODE("Atom", null, {
	    $documentation: "Base class for atoms",
	}, AST_Constant);

	var AST_Null = DEFNODE("Null", null, {
	    $documentation: "The `null` atom",
	    value: null
	}, AST_Atom);

	var AST_NaN = DEFNODE("NaN", null, {
	    $documentation: "The impossible value",
	    value: 0/0
	}, AST_Atom);

	var AST_Undefined = DEFNODE("Undefined", null, {
	    $documentation: "The `undefined` value",
	    value: (function(){}())
	}, AST_Atom);

	var AST_Hole = DEFNODE("Hole", null, {
	    $documentation: "A hole in an array",
	    value: (function(){}())
	}, AST_Atom);

	var AST_Infinity = DEFNODE("Infinity", null, {
	    $documentation: "The `Infinity` value",
	    value: 1/0
	}, AST_Atom);

	var AST_Boolean = DEFNODE("Boolean", null, {
	    $documentation: "Base class for booleans",
	}, AST_Atom);

	var AST_False = DEFNODE("False", null, {
	    $documentation: "The `false` atom",
	    value: false
	}, AST_Boolean);

	var AST_True = DEFNODE("True", null, {
	    $documentation: "The `true` atom",
	    value: true
	}, AST_Boolean);

	/* -----[ TreeWalker ]----- */

	function TreeWalker(callback) {
	    this.visit = callback;
	    this.stack = [];
	};
	TreeWalker.prototype = {
	    _visit: function(node, descend) {
	        this.stack.push(node);
	        var ret = this.visit(node, descend ? function(){
	            descend.call(node);
	        } : noop);
	        if (!ret && descend) {
	            descend.call(node);
	        }
	        this.stack.pop();
	        return ret;
	    },
	    parent: function(n) {
	        return this.stack[this.stack.length - 2 - (n || 0)];
	    },
	    push: function (node) {
	        this.stack.push(node);
	    },
	    pop: function() {
	        return this.stack.pop();
	    },
	    self: function() {
	        return this.stack[this.stack.length - 1];
	    },
	    find_parent: function(type) {
	        var stack = this.stack;
	        for (var i = stack.length; --i >= 0;) {
	            var x = stack[i];
	            if (x instanceof type) return x;
	        }
	    },
	    has_directive: function(type) {
	        return this.find_parent(AST_Scope).has_directive(type);
	    },
	    in_boolean_context: function() {
	        var stack = this.stack;
	        var i = stack.length, self = stack[--i];
	        while (i > 0) {
	            var p = stack[--i];
	            if ((p instanceof AST_If           && p.condition === self) ||
	                (p instanceof AST_Conditional  && p.condition === self) ||
	                (p instanceof AST_DWLoop       && p.condition === self) ||
	                (p instanceof AST_For          && p.condition === self) ||
	                (p instanceof AST_UnaryPrefix  && p.operator == "!" && p.expression === self))
	            {
	                return true;
	            }
	            if (!(p instanceof AST_Binary && (p.operator == "&&" || p.operator == "||")))
	                return false;
	            self = p;
	        }
	    },
	    loopcontrol_target: function(label) {
	        var stack = this.stack;
	        if (label) for (var i = stack.length; --i >= 0;) {
	            var x = stack[i];
	            if (x instanceof AST_LabeledStatement && x.label.name == label.name) {
	                return x.body;
	            }
	        } else for (var i = stack.length; --i >= 0;) {
	            var x = stack[i];
	            if (x instanceof AST_Switch || x instanceof AST_IterationStatement)
	                return x;
	        }
	    }
	};

	/***********************************************************************

	  A JavaScript tokenizer / parser / beautifier / compressor.
	  https://github.com/mishoo/UglifyJS2

	  -------------------------------- (C) ---------------------------------

	                           Author: Mihai Bazon
	                         <mihai.bazon@gmail.com>
	                       http://mihai.bazon.net/blog

	  Distributed under the BSD license:

	    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

	    Redistribution and use in source and binary forms, with or without
	    modification, are permitted provided that the following conditions
	    are met:

	        * Redistributions of source code must retain the above
	          copyright notice, this list of conditions and the following
	          disclaimer.

	        * Redistributions in binary form must reproduce the above
	          copyright notice, this list of conditions and the following
	          disclaimer in the documentation and/or other materials
	          provided with the distribution.

	    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
	    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
	    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
	    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
	    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
	    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
	    SUCH DAMAGE.

	 ***********************************************************************/

	"use strict";

	(function(){

	    var MOZ_TO_ME = {
	        ExpressionStatement: function(M) {
	            var expr = M.expression;
	            if (expr.type === "Literal" && typeof expr.value === "string") {
	                return new AST_Directive({
	                    start: my_start_token(M),
	                    end: my_end_token(M),
	                    value: expr.value
	                });
	            }
	            return new AST_SimpleStatement({
	                start: my_start_token(M),
	                end: my_end_token(M),
	                body: from_moz(expr)
	            });
	        },
	        TryStatement: function(M) {
	            var handlers = M.handlers || [M.handler];
	            if (handlers.length > 1 || M.guardedHandlers && M.guardedHandlers.length) {
	                throw new Error("Multiple catch clauses are not supported.");
	            }
	            return new AST_Try({
	                start    : my_start_token(M),
	                end      : my_end_token(M),
	                body     : from_moz(M.block).body,
	                bcatch   : from_moz(handlers[0]),
	                bfinally : M.finalizer ? new AST_Finally(from_moz(M.finalizer)) : null
	            });
	        },
	        Property: function(M) {
	            var key = M.key;
	            var name = key.type == "Identifier" ? key.name : key.value;
	            var args = {
	                start    : my_start_token(key),
	                end      : my_end_token(M.value),
	                key      : name,
	                value    : from_moz(M.value)
	            };
	            switch (M.kind) {
	              case "init":
	                return new AST_ObjectKeyVal(args);
	              case "set":
	                args.value.name = from_moz(key);
	                return new AST_ObjectSetter(args);
	              case "get":
	                args.value.name = from_moz(key);
	                return new AST_ObjectGetter(args);
	            }
	        },
	        ObjectExpression: function(M) {
	            return new AST_Object({
	                start      : my_start_token(M),
	                end        : my_end_token(M),
	                properties : M.properties.map(function(prop){
	                    prop.type = "Property";
	                    return from_moz(prop)
	                })
	            });
	        },
	        SequenceExpression: function(M) {
	            return AST_Seq.from_array(M.expressions.map(from_moz));
	        },
	        MemberExpression: function(M) {
	            return new (M.computed ? AST_Sub : AST_Dot)({
	                start      : my_start_token(M),
	                end        : my_end_token(M),
	                property   : M.computed ? from_moz(M.property) : M.property.name,
	                expression : from_moz(M.object)
	            });
	        },
	        SwitchCase: function(M) {
	            return new (M.test ? AST_Case : AST_Default)({
	                start      : my_start_token(M),
	                end        : my_end_token(M),
	                expression : from_moz(M.test),
	                body       : M.consequent.map(from_moz)
	            });
	        },
	        VariableDeclaration: function(M) {
	            return new (M.kind === "const" ? AST_Const : AST_Var)({
	                start       : my_start_token(M),
	                end         : my_end_token(M),
	                definitions : M.declarations.map(from_moz)
	            });
	        },
	        Literal: function(M) {
	            var val = M.value, args = {
	                start  : my_start_token(M),
	                end    : my_end_token(M)
	            };
	            if (val === null) return new AST_Null(args);
	            switch (typeof val) {
	              case "string":
	                args.value = val;
	                return new AST_String(args);
	              case "number":
	                args.value = val;
	                return new AST_Number(args);
	              case "boolean":
	                return new (val ? AST_True : AST_False)(args);
	              default:
	                args.value = val;
	                return new AST_RegExp(args);
	            }
	        },
	        Identifier: function(M) {
	            var p = FROM_MOZ_STACK[FROM_MOZ_STACK.length - 2];
	            return new (  p.type == "LabeledStatement" ? AST_Label
	                        : p.type == "VariableDeclarator" && p.id === M ? (p.kind == "const" ? AST_SymbolConst : AST_SymbolVar)
	                        : p.type == "FunctionExpression" ? (p.id === M ? AST_SymbolLambda : AST_SymbolFunarg)
	                        : p.type == "FunctionDeclaration" ? (p.id === M ? AST_SymbolDefun : AST_SymbolFunarg)
	                        : p.type == "CatchClause" ? AST_SymbolCatch
	                        : p.type == "BreakStatement" || p.type == "ContinueStatement" ? AST_LabelRef
	                        : AST_SymbolRef)({
	                            start : my_start_token(M),
	                            end   : my_end_token(M),
	                            name  : M.name
	                        });
	        }
	    };

	    MOZ_TO_ME.UpdateExpression =
	    MOZ_TO_ME.UnaryExpression = function To_Moz_Unary(M) {
	        var prefix = "prefix" in M ? M.prefix
	            : M.type == "UnaryExpression" ? true : false;
	        return new (prefix ? AST_UnaryPrefix : AST_UnaryPostfix)({
	            start      : my_start_token(M),
	            end        : my_end_token(M),
	            operator   : M.operator,
	            expression : from_moz(M.argument)
	        });
	    };

	    map("Program", AST_Toplevel, "body@body");
	    map("EmptyStatement", AST_EmptyStatement);
	    map("BlockStatement", AST_BlockStatement, "body@body");
	    map("IfStatement", AST_If, "test>condition, consequent>body, alternate>alternative");
	    map("LabeledStatement", AST_LabeledStatement, "label>label, body>body");
	    map("BreakStatement", AST_Break, "label>label");
	    map("ContinueStatement", AST_Continue, "label>label");
	    map("WithStatement", AST_With, "object>expression, body>body");
	    map("SwitchStatement", AST_Switch, "discriminant>expression, cases@body");
	    map("ReturnStatement", AST_Return, "argument>value");
	    map("ThrowStatement", AST_Throw, "argument>value");
	    map("WhileStatement", AST_While, "test>condition, body>body");
	    map("DoWhileStatement", AST_Do, "test>condition, body>body");
	    map("ForStatement", AST_For, "init>init, test>condition, update>step, body>body");
	    map("ForInStatement", AST_ForIn, "left>init, right>object, body>body");
	    map("DebuggerStatement", AST_Debugger);
	    map("FunctionDeclaration", AST_Defun, "id>name, params@argnames, body%body");
	    map("VariableDeclarator", AST_VarDef, "id>name, init>value");
	    map("CatchClause", AST_Catch, "param>argname, body%body");

	    map("ThisExpression", AST_This);
	    map("ArrayExpression", AST_Array, "elements@elements");
	    map("FunctionExpression", AST_Function, "id>name, params@argnames, body%body");
	    map("BinaryExpression", AST_Binary, "operator=operator, left>left, right>right");
	    map("LogicalExpression", AST_Binary, "operator=operator, left>left, right>right");
	    map("AssignmentExpression", AST_Assign, "operator=operator, left>left, right>right");
	    map("ConditionalExpression", AST_Conditional, "test>condition, consequent>consequent, alternate>alternative");
	    map("NewExpression", AST_New, "callee>expression, arguments@args");
	    map("CallExpression", AST_Call, "callee>expression, arguments@args");

	    def_to_moz(AST_Directive, function To_Moz_Directive(M) {
	        return {
	            type: "ExpressionStatement",
	            expression: {
	                type: "Literal",
	                value: M.value
	            }
	        };
	    });

	    def_to_moz(AST_SimpleStatement, function To_Moz_ExpressionStatement(M) {
	        return {
	            type: "ExpressionStatement",
	            expression: to_moz(M.body)
	        };
	    });

	    def_to_moz(AST_SwitchBranch, function To_Moz_SwitchCase(M) {
	        return {
	            type: "SwitchCase",
	            test: to_moz(M.expression),
	            consequent: M.body.map(to_moz)
	        };
	    });

	    def_to_moz(AST_Try, function To_Moz_TryStatement(M) {
	        return {
	            type: "TryStatement",
	            block: to_moz_block(M),
	            handler: to_moz(M.bcatch),
	            guardedHandlers: [],
	            finalizer: to_moz(M.bfinally)
	        };
	    });

	    def_to_moz(AST_Catch, function To_Moz_CatchClause(M) {
	        return {
	            type: "CatchClause",
	            param: to_moz(M.argname),
	            guard: null,
	            body: to_moz_block(M)
	        };
	    });

	    def_to_moz(AST_Definitions, function To_Moz_VariableDeclaration(M) {
	        return {
	            type: "VariableDeclaration",
	            kind: M instanceof AST_Const ? "const" : "var",
	            declarations: M.definitions.map(to_moz)
	        };
	    });

	    def_to_moz(AST_Seq, function To_Moz_SequenceExpression(M) {
	        return {
	            type: "SequenceExpression",
	            expressions: M.to_array().map(to_moz)
	        };
	    });

	    def_to_moz(AST_PropAccess, function To_Moz_MemberExpression(M) {
	        var isComputed = M instanceof AST_Sub;
	        return {
	            type: "MemberExpression",
	            object: to_moz(M.expression),
	            computed: isComputed,
	            property: isComputed ? to_moz(M.property) : {type: "Identifier", name: M.property}
	        };
	    });

	    def_to_moz(AST_Unary, function To_Moz_Unary(M) {
	        return {
	            type: M.operator == "++" || M.operator == "--" ? "UpdateExpression" : "UnaryExpression",
	            operator: M.operator,
	            prefix: M instanceof AST_UnaryPrefix,
	            argument: to_moz(M.expression)
	        };
	    });

	    def_to_moz(AST_Binary, function To_Moz_BinaryExpression(M) {
	        return {
	            type: M.operator == "&&" || M.operator == "||" ? "LogicalExpression" : "BinaryExpression",
	            left: to_moz(M.left),
	            operator: M.operator,
	            right: to_moz(M.right)
	        };
	    });

	    def_to_moz(AST_Object, function To_Moz_ObjectExpression(M) {
	        return {
	            type: "ObjectExpression",
	            properties: M.properties.map(to_moz)
	        };
	    });

	    def_to_moz(AST_ObjectProperty, function To_Moz_Property(M) {
	        var key = (
	            is_identifier(M.key)
	            ? {type: "Identifier", name: M.key}
	            : {type: "Literal", value: M.key}
	        );
	        var kind;
	        if (M instanceof AST_ObjectKeyVal) {
	            kind = "init";
	        } else
	        if (M instanceof AST_ObjectGetter) {
	            kind = "get";
	        } else
	        if (M instanceof AST_ObjectSetter) {
	            kind = "set";
	        }
	        return {
	            type: "Property",
	            kind: kind,
	            key: key,
	            value: to_moz(M.value)
	        };
	    });

	    def_to_moz(AST_Symbol, function To_Moz_Identifier(M) {
	        var def = M.definition();
	        return {
	            type: "Identifier",
	            name: def ? def.mangled_name || def.name : M.name
	        };
	    });

	    def_to_moz(AST_Constant, function To_Moz_Literal(M) {
	        var value = M.value;
	        if (typeof value === 'number' && (value < 0 || (value === 0 && 1 / value < 0))) {
	            return {
	                type: "UnaryExpression",
	                operator: "-",
	                prefix: true,
	                argument: {
	                    type: "Literal",
	                    value: -value
	                }
	            };
	        }
	        return {
	            type: "Literal",
	            value: value
	        };
	    });

	    def_to_moz(AST_Atom, function To_Moz_Atom(M) {
	        return {
	            type: "Identifier",
	            name: String(M.value)
	        };
	    });

	    AST_Boolean.DEFMETHOD("to_mozilla_ast", AST_Constant.prototype.to_mozilla_ast);
	    AST_Null.DEFMETHOD("to_mozilla_ast", AST_Constant.prototype.to_mozilla_ast);
	    AST_Hole.DEFMETHOD("to_mozilla_ast", function To_Moz_ArrayHole() { return null });

	    AST_Block.DEFMETHOD("to_mozilla_ast", AST_BlockStatement.prototype.to_mozilla_ast);
	    AST_Lambda.DEFMETHOD("to_mozilla_ast", AST_Function.prototype.to_mozilla_ast);

	    /* -----[ tools ]----- */

	    function my_start_token(moznode) {
	        var loc = moznode.loc, start = loc && loc.start;
	        var range = moznode.range;
	        return new AST_Token({
	            file    : loc && loc.source,
	            line    : start && start.line,
	            col     : start && start.column,
	            pos     : range ? range[0] : moznode.start,
	            endline : start && start.line,
	            endcol  : start && start.column,
	            endpos  : range ? range[0] : moznode.start
	        });
	    };

	    function my_end_token(moznode) {
	        var loc = moznode.loc, end = loc && loc.end;
	        var range = moznode.range;
	        return new AST_Token({
	            file    : loc && loc.source,
	            line    : end && end.line,
	            col     : end && end.column,
	            pos     : range ? range[1] : moznode.end,
	            endline : end && end.line,
	            endcol  : end && end.column,
	            endpos  : range ? range[1] : moznode.end
	        });
	    };

	    function map(moztype, mytype, propmap) {
	        var moz_to_me = "function From_Moz_" + moztype + "(M){\n";
	        moz_to_me += "return new " + mytype.name + "({\n" +
	            "start: my_start_token(M),\n" +
	            "end: my_end_token(M)";

	        var me_to_moz = "function To_Moz_" + moztype + "(M){\n";
	        me_to_moz += "return {\n" +
	            "type: " + JSON.stringify(moztype);

	        if (propmap) propmap.split(/\s*,\s*/).forEach(function(prop){
	            var m = /([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(prop);
	            if (!m) throw new Error("Can't understand property map: " + prop);
	            var moz = m[1], how = m[2], my = m[3];
	            moz_to_me += ",\n" + my + ": ";
	            me_to_moz += ",\n" + moz + ": ";
	            switch (how) {
	                case "@":
	                    moz_to_me += "M." + moz + ".map(from_moz)";
	                    me_to_moz += "M." +  my + ".map(to_moz)";
	                    break;
	                case ">":
	                    moz_to_me += "from_moz(M." + moz + ")";
	                    me_to_moz += "to_moz(M." + my + ")";
	                    break;
	                case "=":
	                    moz_to_me += "M." + moz;
	                    me_to_moz += "M." + my;
	                    break;
	                case "%":
	                    moz_to_me += "from_moz(M." + moz + ").body";
	                    me_to_moz += "to_moz_block(M)";
	                    break;
	                default:
	                    throw new Error("Can't understand operator in propmap: " + prop);
	            }
	        });

	        moz_to_me += "\n})\n}";
	        me_to_moz += "\n}\n}";

	        //moz_to_me = parse(moz_to_me).print_to_string({ beautify: true });
	        //me_to_moz = parse(me_to_moz).print_to_string({ beautify: true });
	        //console.log(moz_to_me);

	        moz_to_me = new Function("my_start_token", "my_end_token", "from_moz", "return(" + moz_to_me + ")")(
	            my_start_token, my_end_token, from_moz
	        );
	        me_to_moz = new Function("to_moz", "to_moz_block", "return(" + me_to_moz + ")")(
	            to_moz, to_moz_block
	        );
	        MOZ_TO_ME[moztype] = moz_to_me;
	        def_to_moz(mytype, me_to_moz);
	    };

	    var FROM_MOZ_STACK = null;

	    function from_moz(node) {
	        FROM_MOZ_STACK.push(node);
	        var ret = node != null ? MOZ_TO_ME[node.type](node) : null;
	        FROM_MOZ_STACK.pop();
	        return ret;
	    };

	    AST_Node.from_mozilla_ast = function(node){
	        var save_stack = FROM_MOZ_STACK;
	        FROM_MOZ_STACK = [];
	        var ast = from_moz(node);
	        FROM_MOZ_STACK = save_stack;
	        return ast;
	    };

	    function set_moz_loc(mynode, moznode, myparent) {
	        var start = mynode.start;
	        var end = mynode.end;
	        if (start.pos != null && end.endpos != null) {
	            moznode.range = [start.pos, end.endpos];
	        }
	        if (start.line) {
	            moznode.loc = {
	                start: {line: start.line, column: start.col},
	                end: end.endline ? {line: end.endline, column: end.endcol} : null
	            };
	            if (start.file) {
	                moznode.loc.source = start.file;
	            }
	        }
	        return moznode;
	    };

	    function def_to_moz(mytype, handler) {
	        mytype.DEFMETHOD("to_mozilla_ast", function() {
	            return set_moz_loc(this, handler(this));
	        });
	    };

	    function to_moz(node) {
	        return node != null ? node.to_mozilla_ast() : null;
	    };

	    function to_moz_block(node) {
	        return {
	            type: "BlockStatement",
	            body: node.body.map(to_moz)
	        };
	    };

	})();

	module.exports = AST_Node;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	// when used in node, this will actually load the util module we depend on
	// versus loading the builtin util module as happens otherwise
	// this is a bug in node module loading as far as I am concerned
	var util = __webpack_require__(14);

	var pSlice = Array.prototype.slice;
	var hasOwn = Object.prototype.hasOwnProperty;

	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert = module.exports = ok;

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  }
	  else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;

	      // try to strip useless frames
	      var fn_name = stackStartFunction.name;
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }

	      this.stack = out;
	    }
	  }
	};

	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);

	function replacer(key, value) {
	  if (util.isUndefined(value)) {
	    return '' + value;
	  }
	  if (util.isNumber(value) && !isFinite(value)) {
	    return value.toString();
	  }
	  if (util.isFunction(value) || util.isRegExp(value)) {
	    return value.toString();
	  }
	  return value;
	}

	function truncate(s, n) {
	  if (util.isString(s)) {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}

	function getMessage(self) {
	  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(JSON.stringify(self.expected, replacer), 128);
	}

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);

	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);

	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);

	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};

	function _deepEqual(actual, expected) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
	    if (actual.length != expected.length) return false;

	    for (var i = 0; i < actual.length; i++) {
	      if (actual[i] !== expected[i]) return false;
	    }

	    return true;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!util.isObject(actual) && !util.isObject(expected)) {
	    return actual == expected;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected);
	  }
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b) {
	  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b)) {
	    return a === b;
	  }
	  var aIsArgs = isArguments(a),
	      bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b);
	  }
	  var ka = objectKeys(a),
	      kb = objectKeys(b),
	      key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key])) return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);

	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};

	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);

	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  } else if (actual instanceof expected) {
	    return true;
	  } else if (expected.call({}, actual) === true) {
	    return true;
	  }

	  return false;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (util.isString(expected)) {
	    message = expected;
	    expected = null;
	  }

	  try {
	    block();
	  } catch (e) {
	    actual = e;
	  }

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  if (!shouldThrow && expectedException(actual, expected)) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);

	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [true].concat(pSlice.call(arguments)));
	};

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/message) {
	  _throws.apply(this, [false].concat(pSlice.call(arguments)));
	};

	assert.ifError = function(err) { if (err) {throw err;}};

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var indexOf = __webpack_require__(16);

	var Object_keys = function (obj) {
	    if (Object.keys) return Object.keys(obj)
	    else {
	        var res = [];
	        for (var key in obj) res.push(key)
	        return res;
	    }
	};

	var forEach = function (xs, fn) {
	    if (xs.forEach) return xs.forEach(fn)
	    else for (var i = 0; i < xs.length; i++) {
	        fn(xs[i], i, xs);
	    }
	};

	var defineProp = (function() {
	    try {
	        Object.defineProperty({}, '_', {});
	        return function(obj, name, value) {
	            Object.defineProperty(obj, name, {
	                writable: true,
	                enumerable: false,
	                configurable: true,
	                value: value
	            })
	        };
	    } catch(e) {
	        return function(obj, name, value) {
	            obj[name] = value;
	        };
	    }
	}());

	var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
	'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
	'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
	'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
	'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

	function Context() {}
	Context.prototype = {};

	var Script = exports.Script = function NodeScript (code) {
	    if (!(this instanceof Script)) return new Script(code);
	    this.code = code;
	};

	Script.prototype.runInContext = function (context) {
	    if (!(context instanceof Context)) {
	        throw new TypeError("needs a 'context' argument.");
	    }
	    
	    var iframe = document.createElement('iframe');
	    if (!iframe.style) iframe.style = {};
	    iframe.style.display = 'none';
	    
	    document.body.appendChild(iframe);
	    
	    var win = iframe.contentWindow;
	    var wEval = win.eval, wExecScript = win.execScript;

	    if (!wEval && wExecScript) {
	        // win.eval() magically appears when this is called in IE:
	        wExecScript.call(win, 'null');
	        wEval = win.eval;
	    }
	    
	    forEach(Object_keys(context), function (key) {
	        win[key] = context[key];
	    });
	    forEach(globals, function (key) {
	        if (context[key]) {
	            win[key] = context[key];
	        }
	    });
	    
	    var winKeys = Object_keys(win);

	    var res = wEval.call(win, this.code);
	    
	    forEach(Object_keys(win), function (key) {
	        // Avoid copying circular objects like `top` and `window` by only
	        // updating existing context properties or new properties in the `win`
	        // that was only introduced after the eval.
	        if (key in context || indexOf(winKeys, key) === -1) {
	            context[key] = win[key];
	        }
	    });

	    forEach(globals, function (key) {
	        if (!(key in context)) {
	            defineProp(context, key, win[key]);
	        }
	    });
	    
	    document.body.removeChild(iframe);
	    
	    return res;
	};

	Script.prototype.runInThisContext = function () {
	    return eval(this.code); // maybe...
	};

	Script.prototype.runInNewContext = function (context) {
	    var ctx = Script.createContext(context);
	    var res = this.runInContext(ctx);

	    forEach(Object_keys(ctx), function (key) {
	        context[key] = ctx[key];
	    });

	    return res;
	};

	forEach(Object_keys(Script.prototype), function (name) {
	    exports[name] = Script[name] = function (code) {
	        var s = Script(code);
	        return s[name].apply(s, [].slice.call(arguments, 1));
	    };
	});

	exports.createScript = function (code) {
	    return exports.Script(code);
	};

	exports.createContext = Script.createContext = function (context) {
	    var copy = new Context();
	    if(typeof context === 'object') {
	        forEach(Object_keys(context), function (key) {
	            copy[key] = context[key];
	        });
	    }
	    return copy;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
	  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
	  Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
	  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
	  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
	  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
	  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
	  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
	  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
	  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	/*jslint bitwise:true plusplus:true */
	/*global esprima:true, define:true, exports:true, window: true,
	createLocationMarker: true,
	throwError: true, generateStatement: true, peek: true,
	parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
	parseFunctionDeclaration: true, parseFunctionExpression: true,
	parseFunctionSourceElements: true, parseVariableIdentifier: true,
	parseLeftHandSideExpression: true,
	parseUnaryExpression: true,
	parseStatement: true, parseSourceElement: true */

	(function (root, factory) {
	    'use strict';

	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
	    // Rhino, and plain browser loading.
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        factory(exports);
	    } else {
	        factory((root.esprima = {}));
	    }
	}(this, function (exports) {
	    'use strict';

	    var Token,
	        TokenName,
	        FnExprTokens,
	        Syntax,
	        PropertyKind,
	        Messages,
	        Regex,
	        SyntaxTreeDelegate,
	        source,
	        strict,
	        index,
	        lineNumber,
	        lineStart,
	        length,
	        delegate,
	        lookahead,
	        state,
	        extra;

	    Token = {
	        BooleanLiteral: 1,
	        EOF: 2,
	        Identifier: 3,
	        Keyword: 4,
	        NullLiteral: 5,
	        NumericLiteral: 6,
	        Punctuator: 7,
	        StringLiteral: 8,
	        RegularExpression: 9
	    };

	    TokenName = {};
	    TokenName[Token.BooleanLiteral] = 'Boolean';
	    TokenName[Token.EOF] = '<end>';
	    TokenName[Token.Identifier] = 'Identifier';
	    TokenName[Token.Keyword] = 'Keyword';
	    TokenName[Token.NullLiteral] = 'Null';
	    TokenName[Token.NumericLiteral] = 'Numeric';
	    TokenName[Token.Punctuator] = 'Punctuator';
	    TokenName[Token.StringLiteral] = 'String';
	    TokenName[Token.RegularExpression] = 'RegularExpression';

	    // A function following one of those tokens is an expression.
	    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
	                    'return', 'case', 'delete', 'throw', 'void',
	                    // assignment operators
	                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
	                    '&=', '|=', '^=', ',',
	                    // binary/unary operators
	                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
	                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
	                    '<=', '<', '>', '!=', '!=='];

	    Syntax = {
	        AssignmentExpression: 'AssignmentExpression',
	        ArrayExpression: 'ArrayExpression',
	        BlockStatement: 'BlockStatement',
	        BinaryExpression: 'BinaryExpression',
	        BreakStatement: 'BreakStatement',
	        CallExpression: 'CallExpression',
	        CatchClause: 'CatchClause',
	        ConditionalExpression: 'ConditionalExpression',
	        ContinueStatement: 'ContinueStatement',
	        DoWhileStatement: 'DoWhileStatement',
	        DebuggerStatement: 'DebuggerStatement',
	        EmptyStatement: 'EmptyStatement',
	        ExpressionStatement: 'ExpressionStatement',
	        ForStatement: 'ForStatement',
	        ForInStatement: 'ForInStatement',
	        FunctionDeclaration: 'FunctionDeclaration',
	        FunctionExpression: 'FunctionExpression',
	        Identifier: 'Identifier',
	        IfStatement: 'IfStatement',
	        Literal: 'Literal',
	        LabeledStatement: 'LabeledStatement',
	        LogicalExpression: 'LogicalExpression',
	        MemberExpression: 'MemberExpression',
	        NewExpression: 'NewExpression',
	        ObjectExpression: 'ObjectExpression',
	        Program: 'Program',
	        Property: 'Property',
	        ReturnStatement: 'ReturnStatement',
	        SequenceExpression: 'SequenceExpression',
	        SwitchStatement: 'SwitchStatement',
	        SwitchCase: 'SwitchCase',
	        ThisExpression: 'ThisExpression',
	        ThrowStatement: 'ThrowStatement',
	        TryStatement: 'TryStatement',
	        UnaryExpression: 'UnaryExpression',
	        UpdateExpression: 'UpdateExpression',
	        VariableDeclaration: 'VariableDeclaration',
	        VariableDeclarator: 'VariableDeclarator',
	        WhileStatement: 'WhileStatement',
	        WithStatement: 'WithStatement'
	    };

	    PropertyKind = {
	        Data: 1,
	        Get: 2,
	        Set: 4
	    };

	    // Error messages should be identical to V8.
	    Messages = {
	        UnexpectedToken:  'Unexpected token %0',
	        UnexpectedNumber:  'Unexpected number',
	        UnexpectedString:  'Unexpected string',
	        UnexpectedIdentifier:  'Unexpected identifier',
	        UnexpectedReserved:  'Unexpected reserved word',
	        UnexpectedEOS:  'Unexpected end of input',
	        NewlineAfterThrow:  'Illegal newline after throw',
	        InvalidRegExp: 'Invalid regular expression',
	        UnterminatedRegExp:  'Invalid regular expression: missing /',
	        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
	        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
	        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
	        NoCatchOrFinally:  'Missing catch or finally after try',
	        UnknownLabel: 'Undefined label \'%0\'',
	        Redeclaration: '%0 \'%1\' has already been declared',
	        IllegalContinue: 'Illegal continue statement',
	        IllegalBreak: 'Illegal break statement',
	        IllegalReturn: 'Illegal return statement',
	        StrictModeWith:  'Strict mode code may not include a with statement',
	        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
	        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
	        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
	        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
	        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
	        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
	        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
	        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
	        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
	        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
	        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
	        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
	        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
	        StrictReservedWord:  'Use of future reserved word in strict mode'
	    };

	    // See also tools/generate-unicode-regex.py.
	    Regex = {
	        NonAsciiIdentifierStart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'),
	        NonAsciiIdentifierPart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]')
	    };

	    // Ensure the condition is true, otherwise throw an error.
	    // This is only to have a better contract semantic, i.e. another safety net
	    // to catch a logic error. The condition shall be fulfilled in normal case.
	    // Do NOT use this to enforce a certain condition on any user input.

	    function assert(condition, message) {
	        if (!condition) {
	            throw new Error('ASSERT: ' + message);
	        }
	    }

	    function isDecimalDigit(ch) {
	        return (ch >= 48 && ch <= 57);   // 0..9
	    }

	    function isHexDigit(ch) {
	        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
	    }

	    function isOctalDigit(ch) {
	        return '01234567'.indexOf(ch) >= 0;
	    }


	    // 7.2 White Space

	    function isWhiteSpace(ch) {
	        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
	            (ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
	    }

	    // 7.3 Line Terminators

	    function isLineTerminator(ch) {
	        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
	    }

	    // 7.6 Identifier Names and Identifiers

	    function isIdentifierStart(ch) {
	        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
	            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
	            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
	            (ch === 0x5C) ||                      // \ (backslash)
	            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
	    }

	    function isIdentifierPart(ch) {
	        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
	            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
	            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
	            (ch >= 0x30 && ch <= 0x39) ||         // 0..9
	            (ch === 0x5C) ||                      // \ (backslash)
	            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
	    }

	    // 7.6.1.2 Future Reserved Words

	    function isFutureReservedWord(id) {
	        switch (id) {
	        case 'class':
	        case 'enum':
	        case 'export':
	        case 'extends':
	        case 'import':
	        case 'super':
	            return true;
	        default:
	            return false;
	        }
	    }

	    function isStrictModeReservedWord(id) {
	        switch (id) {
	        case 'implements':
	        case 'interface':
	        case 'package':
	        case 'private':
	        case 'protected':
	        case 'public':
	        case 'static':
	        case 'yield':
	        case 'let':
	            return true;
	        default:
	            return false;
	        }
	    }

	    function isRestrictedWord(id) {
	        return id === 'eval' || id === 'arguments';
	    }

	    // 7.6.1.1 Keywords

	    function isKeyword(id) {
	        if (strict && isStrictModeReservedWord(id)) {
	            return true;
	        }

	        // 'const' is specialized as Keyword in V8.
	        // 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
	        // Some others are from future reserved words.

	        switch (id.length) {
	        case 2:
	            return (id === 'if') || (id === 'in') || (id === 'do');
	        case 3:
	            return (id === 'var') || (id === 'for') || (id === 'new') ||
	                (id === 'try') || (id === 'let');
	        case 4:
	            return (id === 'this') || (id === 'else') || (id === 'case') ||
	                (id === 'void') || (id === 'with') || (id === 'enum');
	        case 5:
	            return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                (id === 'class') || (id === 'super');
	        case 6:
	            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                (id === 'switch') || (id === 'export') || (id === 'import');
	        case 7:
	            return (id === 'default') || (id === 'finally') || (id === 'extends');
	        case 8:
	            return (id === 'function') || (id === 'continue') || (id === 'debugger');
	        case 10:
	            return (id === 'instanceof');
	        default:
	            return false;
	        }
	    }

	    // 7.4 Comments

	    function addComment(type, value, start, end, loc) {
	        var comment, attacher;

	        assert(typeof start === 'number', 'Comment must have valid position');

	        // Because the way the actual token is scanned, often the comments
	        // (if any) are skipped twice during the lexical analysis.
	        // Thus, we need to skip adding a comment if the comment array already
	        // handled it.
	        if (state.lastCommentStart >= start) {
	            return;
	        }
	        state.lastCommentStart = start;

	        comment = {
	            type: type,
	            value: value
	        };
	        if (extra.range) {
	            comment.range = [start, end];
	        }
	        if (extra.loc) {
	            comment.loc = loc;
	        }
	        extra.comments.push(comment);

	        if (extra.attachComment) {
	            attacher = {
	                comment: comment,
	                leading: null,
	                trailing: null,
	                range: [start, end]
	            };
	            extra.pendingComments.push(attacher);
	        }
	    }

	    function skipSingleLineComment(offset) {
	        var start, loc, ch, comment;

	        start = index - offset;
	        loc = {
	            start: {
	                line: lineNumber,
	                column: index - lineStart - offset
	            }
	        };

	        while (index < length) {
	            ch = source.charCodeAt(index);
	            ++index;
	            if (isLineTerminator(ch)) {
	                if (extra.comments) {
	                    comment = source.slice(start + offset, index - 1);
	                    loc.end = {
	                        line: lineNumber,
	                        column: index - lineStart - 1
	                    };
	                    addComment('Line', comment, start, index - 1, loc);
	                }
	                if (ch === 13 && source.charCodeAt(index) === 10) {
	                    ++index;
	                }
	                ++lineNumber;
	                lineStart = index;
	                return;
	            }
	        }

	        if (extra.comments) {
	            comment = source.slice(start + offset, index);
	            loc.end = {
	                line: lineNumber,
	                column: index - lineStart
	            };
	            addComment('Line', comment, start, index, loc);
	        }
	    }

	    function skipMultiLineComment() {
	        var start, loc, ch, comment;

	        if (extra.comments) {
	            start = index - 2;
	            loc = {
	                start: {
	                    line: lineNumber,
	                    column: index - lineStart - 2
	                }
	            };
	        }

	        while (index < length) {
	            ch = source.charCodeAt(index);
	            if (isLineTerminator(ch)) {
	                if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
	                    ++index;
	                }
	                ++lineNumber;
	                ++index;
	                lineStart = index;
	                if (index >= length) {
	                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	                }
	            } else if (ch === 0x2A) {
	                // Block comment ends with '*/'.
	                if (source.charCodeAt(index + 1) === 0x2F) {
	                    ++index;
	                    ++index;
	                    if (extra.comments) {
	                        comment = source.slice(start + 2, index - 2);
	                        loc.end = {
	                            line: lineNumber,
	                            column: index - lineStart
	                        };
	                        addComment('Block', comment, start, index, loc);
	                    }
	                    return;
	                }
	                ++index;
	            } else {
	                ++index;
	            }
	        }

	        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	    }

	    function skipComment() {
	        var ch, start;

	        start = (index === 0);
	        while (index < length) {
	            ch = source.charCodeAt(index);

	            if (isWhiteSpace(ch)) {
	                ++index;
	            } else if (isLineTerminator(ch)) {
	                ++index;
	                if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
	                    ++index;
	                }
	                ++lineNumber;
	                lineStart = index;
	                start = true;
	            } else if (ch === 0x2F) { // U+002F is '/'
	                ch = source.charCodeAt(index + 1);
	                if (ch === 0x2F) {
	                    ++index;
	                    ++index;
	                    skipSingleLineComment(2);
	                    start = true;
	                } else if (ch === 0x2A) {  // U+002A is '*'
	                    ++index;
	                    ++index;
	                    skipMultiLineComment();
	                } else {
	                    break;
	                }
	            } else if (start && ch === 0x2D) { // U+002D is '-'
	                // U+003E is '>'
	                if ((source.charCodeAt(index + 1) === 0x2D) && (source.charCodeAt(index + 2) === 0x3E)) {
	                    // '-->' is a single-line comment
	                    index += 3;
	                    skipSingleLineComment(3);
	                } else {
	                    break;
	                }
	            } else if (ch === 0x3C) { // U+003C is '<'
	                if (source.slice(index + 1, index + 4) === '!--') {
	                    ++index; // `<`
	                    ++index; // `!`
	                    ++index; // `-`
	                    ++index; // `-`
	                    skipSingleLineComment(4);
	                } else {
	                    break;
	                }
	            } else {
	                break;
	            }
	        }
	    }

	    function scanHexEscape(prefix) {
	        var i, len, ch, code = 0;

	        len = (prefix === 'u') ? 4 : 2;
	        for (i = 0; i < len; ++i) {
	            if (index < length && isHexDigit(source[index])) {
	                ch = source[index++];
	                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
	            } else {
	                return '';
	            }
	        }
	        return String.fromCharCode(code);
	    }

	    function getEscapedIdentifier() {
	        var ch, id;

	        ch = source.charCodeAt(index++);
	        id = String.fromCharCode(ch);

	        // '\u' (U+005C, U+0075) denotes an escaped character.
	        if (ch === 0x5C) {
	            if (source.charCodeAt(index) !== 0x75) {
	                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	            }
	            ++index;
	            ch = scanHexEscape('u');
	            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
	                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	            }
	            id = ch;
	        }

	        while (index < length) {
	            ch = source.charCodeAt(index);
	            if (!isIdentifierPart(ch)) {
	                break;
	            }
	            ++index;
	            id += String.fromCharCode(ch);

	            // '\u' (U+005C, U+0075) denotes an escaped character.
	            if (ch === 0x5C) {
	                id = id.substr(0, id.length - 1);
	                if (source.charCodeAt(index) !== 0x75) {
	                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	                }
	                ++index;
	                ch = scanHexEscape('u');
	                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
	                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	                }
	                id += ch;
	            }
	        }

	        return id;
	    }

	    function getIdentifier() {
	        var start, ch;

	        start = index++;
	        while (index < length) {
	            ch = source.charCodeAt(index);
	            if (ch === 0x5C) {
	                // Blackslash (U+005C) marks Unicode escape sequence.
	                index = start;
	                return getEscapedIdentifier();
	            }
	            if (isIdentifierPart(ch)) {
	                ++index;
	            } else {
	                break;
	            }
	        }

	        return source.slice(start, index);
	    }

	    function scanIdentifier() {
	        var start, id, type;

	        start = index;

	        // Backslash (U+005C) starts an escaped character.
	        id = (source.charCodeAt(index) === 0x5C) ? getEscapedIdentifier() : getIdentifier();

	        // There is no keyword or literal with only one character.
	        // Thus, it must be an identifier.
	        if (id.length === 1) {
	            type = Token.Identifier;
	        } else if (isKeyword(id)) {
	            type = Token.Keyword;
	        } else if (id === 'null') {
	            type = Token.NullLiteral;
	        } else if (id === 'true' || id === 'false') {
	            type = Token.BooleanLiteral;
	        } else {
	            type = Token.Identifier;
	        }

	        return {
	            type: type,
	            value: id,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            range: [start, index]
	        };
	    }


	    // 7.7 Punctuators

	    function scanPunctuator() {
	        var start = index,
	            code = source.charCodeAt(index),
	            code2,
	            ch1 = source[index],
	            ch2,
	            ch3,
	            ch4;

	        switch (code) {

	        // Check for most common single-character punctuators.
	        case 0x2E:  // . dot
	        case 0x28:  // ( open bracket
	        case 0x29:  // ) close bracket
	        case 0x3B:  // ; semicolon
	        case 0x2C:  // , comma
	        case 0x7B:  // { open curly brace
	        case 0x7D:  // } close curly brace
	        case 0x5B:  // [
	        case 0x5D:  // ]
	        case 0x3A:  // :
	        case 0x3F:  // ?
	        case 0x7E:  // ~
	            ++index;
	            if (extra.tokenize) {
	                if (code === 0x28) {
	                    extra.openParenToken = extra.tokens.length;
	                } else if (code === 0x7B) {
	                    extra.openCurlyToken = extra.tokens.length;
	                }
	            }
	            return {
	                type: Token.Punctuator,
	                value: String.fromCharCode(code),
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };

	        default:
	            code2 = source.charCodeAt(index + 1);

	            // '=' (U+003D) marks an assignment or comparison operator.
	            if (code2 === 0x3D) {
	                switch (code) {
	                case 0x25:  // %
	                case 0x26:  // &
	                case 0x2A:  // *:
	                case 0x2B:  // +
	                case 0x2D:  // -
	                case 0x2F:  // /
	                case 0x3C:  // <
	                case 0x3E:  // >
	                case 0x5E:  // ^
	                case 0x7C:  // |
	                    index += 2;
	                    return {
	                        type: Token.Punctuator,
	                        value: String.fromCharCode(code) + String.fromCharCode(code2),
	                        lineNumber: lineNumber,
	                        lineStart: lineStart,
	                        range: [start, index]
	                    };

	                case 0x21: // !
	                case 0x3D: // =
	                    index += 2;

	                    // !== and ===
	                    if (source.charCodeAt(index) === 0x3D) {
	                        ++index;
	                    }
	                    return {
	                        type: Token.Punctuator,
	                        value: source.slice(start, index),
	                        lineNumber: lineNumber,
	                        lineStart: lineStart,
	                        range: [start, index]
	                    };
	                default:
	                    break;
	                }
	            }
	            break;
	        }

	        // Peek more characters.

	        ch2 = source[index + 1];
	        ch3 = source[index + 2];
	        ch4 = source[index + 3];

	        // 4-character punctuator: >>>=

	        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
	            if (ch4 === '=') {
	                index += 4;
	                return {
	                    type: Token.Punctuator,
	                    value: '>>>=',
	                    lineNumber: lineNumber,
	                    lineStart: lineStart,
	                    range: [start, index]
	                };
	            }
	        }

	        // 3-character punctuators: === !== >>> <<= >>=

	        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
	            index += 3;
	            return {
	                type: Token.Punctuator,
	                value: '>>>',
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };
	        }

	        if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
	            index += 3;
	            return {
	                type: Token.Punctuator,
	                value: '<<=',
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };
	        }

	        if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
	            index += 3;
	            return {
	                type: Token.Punctuator,
	                value: '>>=',
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };
	        }

	        // Other 2-character punctuators: ++ -- << >> && ||

	        if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0)) {
	            index += 2;
	            return {
	                type: Token.Punctuator,
	                value: ch1 + ch2,
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };
	        }

	        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
	            ++index;
	            return {
	                type: Token.Punctuator,
	                value: ch1,
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };
	        }

	        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	    }

	    // 7.8.3 Numeric Literals

	    function scanHexLiteral(start) {
	        var number = '';

	        while (index < length) {
	            if (!isHexDigit(source[index])) {
	                break;
	            }
	            number += source[index++];
	        }

	        if (number.length === 0) {
	            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	        }

	        if (isIdentifierStart(source.charCodeAt(index))) {
	            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseInt('0x' + number, 16),
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            range: [start, index]
	        };
	    }

	    function scanOctalLiteral(start) {
	        var number = '0' + source[index++];
	        while (index < length) {
	            if (!isOctalDigit(source[index])) {
	                break;
	            }
	            number += source[index++];
	        }

	        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
	            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseInt(number, 8),
	            octal: true,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            range: [start, index]
	        };
	    }

	    function scanNumericLiteral() {
	        var number, start, ch;

	        ch = source[index];
	        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
	            'Numeric literal must start with a decimal digit or a decimal point');

	        start = index;
	        number = '';
	        if (ch !== '.') {
	            number = source[index++];
	            ch = source[index];

	            // Hex number starts with '0x'.
	            // Octal number starts with '0'.
	            if (number === '0') {
	                if (ch === 'x' || ch === 'X') {
	                    ++index;
	                    return scanHexLiteral(start);
	                }
	                if (isOctalDigit(ch)) {
	                    return scanOctalLiteral(start);
	                }

	                // decimal number starts with '0' such as '09' is illegal.
	                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
	                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	                }
	            }

	            while (isDecimalDigit(source.charCodeAt(index))) {
	                number += source[index++];
	            }
	            ch = source[index];
	        }

	        if (ch === '.') {
	            number += source[index++];
	            while (isDecimalDigit(source.charCodeAt(index))) {
	                number += source[index++];
	            }
	            ch = source[index];
	        }

	        if (ch === 'e' || ch === 'E') {
	            number += source[index++];

	            ch = source[index];
	            if (ch === '+' || ch === '-') {
	                number += source[index++];
	            }
	            if (isDecimalDigit(source.charCodeAt(index))) {
	                while (isDecimalDigit(source.charCodeAt(index))) {
	                    number += source[index++];
	                }
	            } else {
	                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	            }
	        }

	        if (isIdentifierStart(source.charCodeAt(index))) {
	            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	        }

	        return {
	            type: Token.NumericLiteral,
	            value: parseFloat(number),
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            range: [start, index]
	        };
	    }

	    // 7.8.4 String Literals

	    function scanStringLiteral() {
	        var str = '', quote, start, ch, code, unescaped, restore, octal = false;

	        quote = source[index];
	        assert((quote === '\'' || quote === '"'),
	            'String literal must starts with a quote');

	        start = index;
	        ++index;

	        while (index < length) {
	            ch = source[index++];

	            if (ch === quote) {
	                quote = '';
	                break;
	            } else if (ch === '\\') {
	                ch = source[index++];
	                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                    case 'n':
	                        str += '\n';
	                        break;
	                    case 'r':
	                        str += '\r';
	                        break;
	                    case 't':
	                        str += '\t';
	                        break;
	                    case 'u':
	                    case 'x':
	                        restore = index;
	                        unescaped = scanHexEscape(ch);
	                        if (unescaped) {
	                            str += unescaped;
	                        } else {
	                            index = restore;
	                            str += ch;
	                        }
	                        break;
	                    case 'b':
	                        str += '\b';
	                        break;
	                    case 'f':
	                        str += '\f';
	                        break;
	                    case 'v':
	                        str += '\x0B';
	                        break;

	                    default:
	                        if (isOctalDigit(ch)) {
	                            code = '01234567'.indexOf(ch);

	                            // \0 is not octal escape sequence
	                            if (code !== 0) {
	                                octal = true;
	                            }

	                            if (index < length && isOctalDigit(source[index])) {
	                                octal = true;
	                                code = code * 8 + '01234567'.indexOf(source[index++]);

	                                // 3 digits are only allowed when string starts
	                                // with 0, 1, 2, 3
	                                if ('0123'.indexOf(ch) >= 0 &&
	                                        index < length &&
	                                        isOctalDigit(source[index])) {
	                                    code = code * 8 + '01234567'.indexOf(source[index++]);
	                                }
	                            }
	                            str += String.fromCharCode(code);
	                        } else {
	                            str += ch;
	                        }
	                        break;
	                    }
	                } else {
	                    ++lineNumber;
	                    if (ch ===  '\r' && source[index] === '\n') {
	                        ++index;
	                    }
	                    lineStart = index;
	                }
	            } else if (isLineTerminator(ch.charCodeAt(0))) {
	                break;
	            } else {
	                str += ch;
	            }
	        }

	        if (quote !== '') {
	            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	        }

	        return {
	            type: Token.StringLiteral,
	            value: str,
	            octal: octal,
	            lineNumber: lineNumber,
	            lineStart: lineStart,
	            range: [start, index]
	        };
	    }

	    function scanRegExp() {
	        var str, ch, start, pattern, flags, value, classMarker = false, restore, terminated = false;

	        lookahead = null;
	        skipComment();

	        start = index;
	        ch = source[index];
	        assert(ch === '/', 'Regular expression literal must start with a slash');
	        str = source[index++];

	        while (index < length) {
	            ch = source[index++];
	            str += ch;
	            if (ch === '\\') {
	                ch = source[index++];
	                // ECMA-262 7.8.5
	                if (isLineTerminator(ch.charCodeAt(0))) {
	                    throwError({}, Messages.UnterminatedRegExp);
	                }
	                str += ch;
	            } else if (isLineTerminator(ch.charCodeAt(0))) {
	                throwError({}, Messages.UnterminatedRegExp);
	            } else if (classMarker) {
	                if (ch === ']') {
	                    classMarker = false;
	                }
	            } else {
	                if (ch === '/') {
	                    terminated = true;
	                    break;
	                } else if (ch === '[') {
	                    classMarker = true;
	                }
	            }
	        }

	        if (!terminated) {
	            throwError({}, Messages.UnterminatedRegExp);
	        }

	        // Exclude leading and trailing slash.
	        pattern = str.substr(1, str.length - 2);

	        flags = '';
	        while (index < length) {
	            ch = source[index];
	            if (!isIdentifierPart(ch.charCodeAt(0))) {
	                break;
	            }

	            ++index;
	            if (ch === '\\' && index < length) {
	                ch = source[index];
	                if (ch === 'u') {
	                    ++index;
	                    restore = index;
	                    ch = scanHexEscape('u');
	                    if (ch) {
	                        flags += ch;
	                        for (str += '\\u'; restore < index; ++restore) {
	                            str += source[restore];
	                        }
	                    } else {
	                        index = restore;
	                        flags += 'u';
	                        str += '\\u';
	                    }
	                } else {
	                    str += '\\';
	                }
	            } else {
	                flags += ch;
	                str += ch;
	            }
	        }

	        try {
	            value = new RegExp(pattern, flags);
	        } catch (e) {
	            throwError({}, Messages.InvalidRegExp);
	        }



	        if (extra.tokenize) {
	            return {
	                type: Token.RegularExpression,
	                value: value,
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [start, index]
	            };
	        }
	        return {
	            literal: str,
	            value: value,
	            range: [start, index]
	        };
	    }

	    function collectRegex() {
	        var pos, loc, regex, token;

	        skipComment();

	        pos = index;
	        loc = {
	            start: {
	                line: lineNumber,
	                column: index - lineStart
	            }
	        };

	        regex = scanRegExp();
	        loc.end = {
	            line: lineNumber,
	            column: index - lineStart
	        };

	        if (!extra.tokenize) {
	            // Pop the previous token, which is likely '/' or '/='
	            if (extra.tokens.length > 0) {
	                token = extra.tokens[extra.tokens.length - 1];
	                if (token.range[0] === pos && token.type === 'Punctuator') {
	                    if (token.value === '/' || token.value === '/=') {
	                        extra.tokens.pop();
	                    }
	                }
	            }

	            extra.tokens.push({
	                type: 'RegularExpression',
	                value: regex.literal,
	                range: [pos, index],
	                loc: loc
	            });
	        }

	        return regex;
	    }

	    function isIdentifierName(token) {
	        return token.type === Token.Identifier ||
	            token.type === Token.Keyword ||
	            token.type === Token.BooleanLiteral ||
	            token.type === Token.NullLiteral;
	    }

	    function advanceSlash() {
	        var prevToken,
	            checkToken;
	        // Using the following algorithm:
	        // https://github.com/mozilla/sweet.js/wiki/design
	        prevToken = extra.tokens[extra.tokens.length - 1];
	        if (!prevToken) {
	            // Nothing before that: it cannot be a division.
	            return collectRegex();
	        }
	        if (prevToken.type === 'Punctuator') {
	            if (prevToken.value === ']') {
	                return scanPunctuator();
	            }
	            if (prevToken.value === ')') {
	                checkToken = extra.tokens[extra.openParenToken - 1];
	                if (checkToken &&
	                        checkToken.type === 'Keyword' &&
	                        (checkToken.value === 'if' ||
	                         checkToken.value === 'while' ||
	                         checkToken.value === 'for' ||
	                         checkToken.value === 'with')) {
	                    return collectRegex();
	                }
	                return scanPunctuator();
	            }
	            if (prevToken.value === '}') {
	                // Dividing a function by anything makes little sense,
	                // but we have to check for that.
	                if (extra.tokens[extra.openCurlyToken - 3] &&
	                        extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
	                    // Anonymous function.
	                    checkToken = extra.tokens[extra.openCurlyToken - 4];
	                    if (!checkToken) {
	                        return scanPunctuator();
	                    }
	                } else if (extra.tokens[extra.openCurlyToken - 4] &&
	                        extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
	                    // Named function.
	                    checkToken = extra.tokens[extra.openCurlyToken - 5];
	                    if (!checkToken) {
	                        return collectRegex();
	                    }
	                } else {
	                    return scanPunctuator();
	                }
	                // checkToken determines whether the function is
	                // a declaration or an expression.
	                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
	                    // It is an expression.
	                    return scanPunctuator();
	                }
	                // It is a declaration.
	                return collectRegex();
	            }
	            return collectRegex();
	        }
	        if (prevToken.type === 'Keyword') {
	            return collectRegex();
	        }
	        return scanPunctuator();
	    }

	    function advance() {
	        var ch;

	        skipComment();

	        if (index >= length) {
	            return {
	                type: Token.EOF,
	                lineNumber: lineNumber,
	                lineStart: lineStart,
	                range: [index, index]
	            };
	        }

	        ch = source.charCodeAt(index);

	        // Very common: ( and ) and ;
	        if (ch === 0x28 || ch === 0x29 || ch === 0x3A) {
	            return scanPunctuator();
	        }

	        // String literal starts with single quote (U+0027) or double quote (U+0022).
	        if (ch === 0x27 || ch === 0x22) {
	            return scanStringLiteral();
	        }

	        if (isIdentifierStart(ch)) {
	            return scanIdentifier();
	        }

	        // Dot (.) U+002E can also start a floating-point number, hence the need
	        // to check the next character.
	        if (ch === 0x2E) {
	            if (isDecimalDigit(source.charCodeAt(index + 1))) {
	                return scanNumericLiteral();
	            }
	            return scanPunctuator();
	        }

	        if (isDecimalDigit(ch)) {
	            return scanNumericLiteral();
	        }

	        // Slash (/) U+002F can also start a regex.
	        if (extra.tokenize && ch === 0x2F) {
	            return advanceSlash();
	        }

	        return scanPunctuator();
	    }

	    function collectToken() {
	        var start, loc, token, range, value;

	        skipComment();
	        start = index;
	        loc = {
	            start: {
	                line: lineNumber,
	                column: index - lineStart
	            }
	        };

	        token = advance();
	        loc.end = {
	            line: lineNumber,
	            column: index - lineStart
	        };

	        if (token.type !== Token.EOF) {
	            range = [token.range[0], token.range[1]];
	            value = source.slice(token.range[0], token.range[1]);
	            extra.tokens.push({
	                type: TokenName[token.type],
	                value: value,
	                range: range,
	                loc: loc
	            });
	        }

	        return token;
	    }

	    function lex() {
	        var token;

	        token = lookahead;
	        index = token.range[1];
	        lineNumber = token.lineNumber;
	        lineStart = token.lineStart;

	        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();

	        index = token.range[1];
	        lineNumber = token.lineNumber;
	        lineStart = token.lineStart;

	        return token;
	    }

	    function peek() {
	        var pos, line, start;

	        pos = index;
	        line = lineNumber;
	        start = lineStart;
	        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
	        index = pos;
	        lineNumber = line;
	        lineStart = start;
	    }

	    SyntaxTreeDelegate = {

	        name: 'SyntaxTree',

	        markStart: function () {
	            skipComment();
	            if (extra.loc) {
	                state.markerStack.push(index - lineStart);
	                state.markerStack.push(lineNumber);
	            }
	            if (extra.range) {
	                state.markerStack.push(index);
	            }
	        },

	        processComment: function (node) {
	            var i, attacher, pos, len, candidate;

	            if (typeof node.type === 'undefined' || node.type === Syntax.Program) {
	                return;
	            }

	            // Check for possible additional trailing comments.
	            peek();

	            for (i = 0; i < extra.pendingComments.length; ++i) {
	                attacher = extra.pendingComments[i];
	                if (node.range[0] >= attacher.comment.range[1]) {
	                    candidate = attacher.leading;
	                    if (candidate) {
	                        pos = candidate.range[0];
	                        len = candidate.range[1] - pos;
	                        if (node.range[0] <= pos && (node.range[1] - node.range[0] >= len)) {
	                            attacher.leading = node;
	                        }
	                    } else {
	                        attacher.leading = node;
	                    }
	                }
	                if (node.range[1] <= attacher.comment.range[0]) {
	                    candidate = attacher.trailing;
	                    if (candidate) {
	                        pos = candidate.range[0];
	                        len = candidate.range[1] - pos;
	                        if (node.range[0] <= pos && (node.range[1] - node.range[0] >= len)) {
	                            attacher.trailing = node;
	                        }
	                    } else {
	                        attacher.trailing = node;
	                    }
	                }
	            }
	        },

	        markEnd: function (node) {
	            if (extra.range) {
	                node.range = [state.markerStack.pop(), index];
	            }
	            if (extra.loc) {
	                node.loc = {
	                    start: {
	                        line: state.markerStack.pop(),
	                        column: state.markerStack.pop()
	                    },
	                    end: {
	                        line: lineNumber,
	                        column: index - lineStart
	                    }
	                };
	                this.postProcess(node);
	            }
	            if (extra.attachComment) {
	                this.processComment(node);
	            }
	            return node;
	        },

	        markEndIf: function (node) {
	            if (node.range || node.loc) {
	                if (extra.loc) {
	                    state.markerStack.pop();
	                    state.markerStack.pop();
	                }
	                if (extra.range) {
	                    state.markerStack.pop();
	                }
	            } else {
	                this.markEnd(node);
	            }
	            return node;
	        },

	        postProcess: function (node) {
	            if (extra.source) {
	                node.loc.source = extra.source;
	            }
	            return node;
	        },

	        createArrayExpression: function (elements) {
	            return {
	                type: Syntax.ArrayExpression,
	                elements: elements
	            };
	        },

	        createAssignmentExpression: function (operator, left, right) {
	            return {
	                type: Syntax.AssignmentExpression,
	                operator: operator,
	                left: left,
	                right: right
	            };
	        },

	        createBinaryExpression: function (operator, left, right) {
	            var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
	                        Syntax.BinaryExpression;
	            return {
	                type: type,
	                operator: operator,
	                left: left,
	                right: right
	            };
	        },

	        createBlockStatement: function (body) {
	            return {
	                type: Syntax.BlockStatement,
	                body: body
	            };
	        },

	        createBreakStatement: function (label) {
	            return {
	                type: Syntax.BreakStatement,
	                label: label
	            };
	        },

	        createCallExpression: function (callee, args) {
	            return {
	                type: Syntax.CallExpression,
	                callee: callee,
	                'arguments': args
	            };
	        },

	        createCatchClause: function (param, body) {
	            return {
	                type: Syntax.CatchClause,
	                param: param,
	                body: body
	            };
	        },

	        createConditionalExpression: function (test, consequent, alternate) {
	            return {
	                type: Syntax.ConditionalExpression,
	                test: test,
	                consequent: consequent,
	                alternate: alternate
	            };
	        },

	        createContinueStatement: function (label) {
	            return {
	                type: Syntax.ContinueStatement,
	                label: label
	            };
	        },

	        createDebuggerStatement: function () {
	            return {
	                type: Syntax.DebuggerStatement
	            };
	        },

	        createDoWhileStatement: function (body, test) {
	            return {
	                type: Syntax.DoWhileStatement,
	                body: body,
	                test: test
	            };
	        },

	        createEmptyStatement: function () {
	            return {
	                type: Syntax.EmptyStatement
	            };
	        },

	        createExpressionStatement: function (expression) {
	            return {
	                type: Syntax.ExpressionStatement,
	                expression: expression
	            };
	        },

	        createForStatement: function (init, test, update, body) {
	            return {
	                type: Syntax.ForStatement,
	                init: init,
	                test: test,
	                update: update,
	                body: body
	            };
	        },

	        createForInStatement: function (left, right, body) {
	            return {
	                type: Syntax.ForInStatement,
	                left: left,
	                right: right,
	                body: body,
	                each: false
	            };
	        },

	        createFunctionDeclaration: function (id, params, defaults, body) {
	            return {
	                type: Syntax.FunctionDeclaration,
	                id: id,
	                params: params,
	                defaults: defaults,
	                body: body,
	                rest: null,
	                generator: false,
	                expression: false
	            };
	        },

	        createFunctionExpression: function (id, params, defaults, body) {
	            return {
	                type: Syntax.FunctionExpression,
	                id: id,
	                params: params,
	                defaults: defaults,
	                body: body,
	                rest: null,
	                generator: false,
	                expression: false
	            };
	        },

	        createIdentifier: function (name) {
	            return {
	                type: Syntax.Identifier,
	                name: name
	            };
	        },

	        createIfStatement: function (test, consequent, alternate) {
	            return {
	                type: Syntax.IfStatement,
	                test: test,
	                consequent: consequent,
	                alternate: alternate
	            };
	        },

	        createLabeledStatement: function (label, body) {
	            return {
	                type: Syntax.LabeledStatement,
	                label: label,
	                body: body
	            };
	        },

	        createLiteral: function (token) {
	            return {
	                type: Syntax.Literal,
	                value: token.value,
	                raw: source.slice(token.range[0], token.range[1])
	            };
	        },

	        createMemberExpression: function (accessor, object, property) {
	            return {
	                type: Syntax.MemberExpression,
	                computed: accessor === '[',
	                object: object,
	                property: property
	            };
	        },

	        createNewExpression: function (callee, args) {
	            return {
	                type: Syntax.NewExpression,
	                callee: callee,
	                'arguments': args
	            };
	        },

	        createObjectExpression: function (properties) {
	            return {
	                type: Syntax.ObjectExpression,
	                properties: properties
	            };
	        },

	        createPostfixExpression: function (operator, argument) {
	            return {
	                type: Syntax.UpdateExpression,
	                operator: operator,
	                argument: argument,
	                prefix: false
	            };
	        },

	        createProgram: function (body) {
	            return {
	                type: Syntax.Program,
	                body: body
	            };
	        },

	        createProperty: function (kind, key, value) {
	            return {
	                type: Syntax.Property,
	                key: key,
	                value: value,
	                kind: kind
	            };
	        },

	        createReturnStatement: function (argument) {
	            return {
	                type: Syntax.ReturnStatement,
	                argument: argument
	            };
	        },

	        createSequenceExpression: function (expressions) {
	            return {
	                type: Syntax.SequenceExpression,
	                expressions: expressions
	            };
	        },

	        createSwitchCase: function (test, consequent) {
	            return {
	                type: Syntax.SwitchCase,
	                test: test,
	                consequent: consequent
	            };
	        },

	        createSwitchStatement: function (discriminant, cases) {
	            return {
	                type: Syntax.SwitchStatement,
	                discriminant: discriminant,
	                cases: cases
	            };
	        },

	        createThisExpression: function () {
	            return {
	                type: Syntax.ThisExpression
	            };
	        },

	        createThrowStatement: function (argument) {
	            return {
	                type: Syntax.ThrowStatement,
	                argument: argument
	            };
	        },

	        createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
	            return {
	                type: Syntax.TryStatement,
	                block: block,
	                guardedHandlers: guardedHandlers,
	                handlers: handlers,
	                finalizer: finalizer
	            };
	        },

	        createUnaryExpression: function (operator, argument) {
	            if (operator === '++' || operator === '--') {
	                return {
	                    type: Syntax.UpdateExpression,
	                    operator: operator,
	                    argument: argument,
	                    prefix: true
	                };
	            }
	            return {
	                type: Syntax.UnaryExpression,
	                operator: operator,
	                argument: argument,
	                prefix: true
	            };
	        },

	        createVariableDeclaration: function (declarations, kind) {
	            return {
	                type: Syntax.VariableDeclaration,
	                declarations: declarations,
	                kind: kind
	            };
	        },

	        createVariableDeclarator: function (id, init) {
	            return {
	                type: Syntax.VariableDeclarator,
	                id: id,
	                init: init
	            };
	        },

	        createWhileStatement: function (test, body) {
	            return {
	                type: Syntax.WhileStatement,
	                test: test,
	                body: body
	            };
	        },

	        createWithStatement: function (object, body) {
	            return {
	                type: Syntax.WithStatement,
	                object: object,
	                body: body
	            };
	        }
	    };

	    // Return true if there is a line terminator before the next token.

	    function peekLineTerminator() {
	        var pos, line, start, found;

	        pos = index;
	        line = lineNumber;
	        start = lineStart;
	        skipComment();
	        found = lineNumber !== line;
	        index = pos;
	        lineNumber = line;
	        lineStart = start;

	        return found;
	    }

	    // Throw an exception

	    function throwError(token, messageFormat) {
	        var error,
	            args = Array.prototype.slice.call(arguments, 2),
	            msg = messageFormat.replace(
	                /%(\d)/g,
	                function (whole, index) {
	                    assert(index < args.length, 'Message reference must be in range');
	                    return args[index];
	                }
	            );

	        if (typeof token.lineNumber === 'number') {
	            error = new Error('Line ' + token.lineNumber + ': ' + msg);
	            error.index = token.range[0];
	            error.lineNumber = token.lineNumber;
	            error.column = token.range[0] - lineStart + 1;
	        } else {
	            error = new Error('Line ' + lineNumber + ': ' + msg);
	            error.index = index;
	            error.lineNumber = lineNumber;
	            error.column = index - lineStart + 1;
	        }

	        error.description = msg;
	        throw error;
	    }

	    function throwErrorTolerant() {
	        try {
	            throwError.apply(null, arguments);
	        } catch (e) {
	            if (extra.errors) {
	                extra.errors.push(e);
	            } else {
	                throw e;
	            }
	        }
	    }


	    // Throw an exception because of the token.

	    function throwUnexpected(token) {
	        if (token.type === Token.EOF) {
	            throwError(token, Messages.UnexpectedEOS);
	        }

	        if (token.type === Token.NumericLiteral) {
	            throwError(token, Messages.UnexpectedNumber);
	        }

	        if (token.type === Token.StringLiteral) {
	            throwError(token, Messages.UnexpectedString);
	        }

	        if (token.type === Token.Identifier) {
	            throwError(token, Messages.UnexpectedIdentifier);
	        }

	        if (token.type === Token.Keyword) {
	            if (isFutureReservedWord(token.value)) {
	                throwError(token, Messages.UnexpectedReserved);
	            } else if (strict && isStrictModeReservedWord(token.value)) {
	                throwErrorTolerant(token, Messages.StrictReservedWord);
	                return;
	            }
	            throwError(token, Messages.UnexpectedToken, token.value);
	        }

	        // BooleanLiteral, NullLiteral, or Punctuator.
	        throwError(token, Messages.UnexpectedToken, token.value);
	    }

	    // Expect the next token to match the specified punctuator.
	    // If not, an exception will be thrown.

	    function expect(value) {
	        var token = lex();
	        if (token.type !== Token.Punctuator || token.value !== value) {
	            throwUnexpected(token);
	        }
	    }

	    // Expect the next token to match the specified keyword.
	    // If not, an exception will be thrown.

	    function expectKeyword(keyword) {
	        var token = lex();
	        if (token.type !== Token.Keyword || token.value !== keyword) {
	            throwUnexpected(token);
	        }
	    }

	    // Return true if the next token matches the specified punctuator.

	    function match(value) {
	        return lookahead.type === Token.Punctuator && lookahead.value === value;
	    }

	    // Return true if the next token matches the specified keyword

	    function matchKeyword(keyword) {
	        return lookahead.type === Token.Keyword && lookahead.value === keyword;
	    }

	    // Return true if the next token is an assignment operator

	    function matchAssign() {
	        var op;

	        if (lookahead.type !== Token.Punctuator) {
	            return false;
	        }
	        op = lookahead.value;
	        return op === '=' ||
	            op === '*=' ||
	            op === '/=' ||
	            op === '%=' ||
	            op === '+=' ||
	            op === '-=' ||
	            op === '<<=' ||
	            op === '>>=' ||
	            op === '>>>=' ||
	            op === '&=' ||
	            op === '^=' ||
	            op === '|=';
	    }

	    function consumeSemicolon() {
	        var line;

	        // Catch the very common case first: immediately a semicolon (U+003B).
	        if (source.charCodeAt(index) === 0x3B) {
	            lex();
	            return;
	        }

	        line = lineNumber;
	        skipComment();
	        if (lineNumber !== line) {
	            return;
	        }

	        if (match(';')) {
	            lex();
	            return;
	        }

	        if (lookahead.type !== Token.EOF && !match('}')) {
	            throwUnexpected(lookahead);
	        }
	    }

	    // Return true if provided expression is LeftHandSideExpression

	    function isLeftHandSide(expr) {
	        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
	    }

	    // 11.1.4 Array Initialiser

	    function parseArrayInitialiser() {
	        var elements = [];

	        expect('[');

	        while (!match(']')) {
	            if (match(',')) {
	                lex();
	                elements.push(null);
	            } else {
	                elements.push(parseAssignmentExpression());

	                if (!match(']')) {
	                    expect(',');
	                }
	            }
	        }

	        expect(']');

	        return delegate.createArrayExpression(elements);
	    }

	    // 11.1.5 Object Initialiser

	    function parsePropertyFunction(param, first) {
	        var previousStrict, body;

	        previousStrict = strict;
	        delegate.markStart();
	        body = parseFunctionSourceElements();
	        if (first && strict && isRestrictedWord(param[0].name)) {
	            throwErrorTolerant(first, Messages.StrictParamName);
	        }
	        strict = previousStrict;
	        return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body));
	    }

	    function parseObjectPropertyKey() {
	        var token;

	        delegate.markStart();
	        token = lex();

	        // Note: This function is called only from parseObjectProperty(), where
	        // EOF and Punctuator tokens are already filtered out.

	        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
	            if (strict && token.octal) {
	                throwErrorTolerant(token, Messages.StrictOctalLiteral);
	            }
	            return delegate.markEnd(delegate.createLiteral(token));
	        }

	        return delegate.markEnd(delegate.createIdentifier(token.value));
	    }

	    function parseObjectProperty() {
	        var token, key, id, value, param;

	        token = lookahead;
	        delegate.markStart();

	        if (token.type === Token.Identifier) {

	            id = parseObjectPropertyKey();

	            // Property Assignment: Getter and Setter.

	            if (token.value === 'get' && !match(':')) {
	                key = parseObjectPropertyKey();
	                expect('(');
	                expect(')');
	                value = parsePropertyFunction([]);
	                return delegate.markEnd(delegate.createProperty('get', key, value));
	            }
	            if (token.value === 'set' && !match(':')) {
	                key = parseObjectPropertyKey();
	                expect('(');
	                token = lookahead;
	                if (token.type !== Token.Identifier) {
	                    expect(')');
	                    throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
	                    value = parsePropertyFunction([]);
	                } else {
	                    param = [ parseVariableIdentifier() ];
	                    expect(')');
	                    value = parsePropertyFunction(param, token);
	                }
	                return delegate.markEnd(delegate.createProperty('set', key, value));
	            }
	            expect(':');
	            value = parseAssignmentExpression();
	            return delegate.markEnd(delegate.createProperty('init', id, value));
	        }
	        if (token.type === Token.EOF || token.type === Token.Punctuator) {
	            throwUnexpected(token);
	        } else {
	            key = parseObjectPropertyKey();
	            expect(':');
	            value = parseAssignmentExpression();
	            return delegate.markEnd(delegate.createProperty('init', key, value));
	        }
	    }

	    function parseObjectInitialiser() {
	        var properties = [], property, name, key, kind, map = {}, toString = String;

	        expect('{');

	        while (!match('}')) {
	            property = parseObjectProperty();

	            if (property.key.type === Syntax.Identifier) {
	                name = property.key.name;
	            } else {
	                name = toString(property.key.value);
	            }
	            kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

	            key = '$' + name;
	            if (Object.prototype.hasOwnProperty.call(map, key)) {
	                if (map[key] === PropertyKind.Data) {
	                    if (strict && kind === PropertyKind.Data) {
	                        throwErrorTolerant({}, Messages.StrictDuplicateProperty);
	                    } else if (kind !== PropertyKind.Data) {
	                        throwErrorTolerant({}, Messages.AccessorDataProperty);
	                    }
	                } else {
	                    if (kind === PropertyKind.Data) {
	                        throwErrorTolerant({}, Messages.AccessorDataProperty);
	                    } else if (map[key] & kind) {
	                        throwErrorTolerant({}, Messages.AccessorGetSet);
	                    }
	                }
	                map[key] |= kind;
	            } else {
	                map[key] = kind;
	            }

	            properties.push(property);

	            if (!match('}')) {
	                expect(',');
	            }
	        }

	        expect('}');

	        return delegate.createObjectExpression(properties);
	    }

	    // 11.1.6 The Grouping Operator

	    function parseGroupExpression() {
	        var expr;

	        expect('(');

	        expr = parseExpression();

	        expect(')');

	        return expr;
	    }


	    // 11.1 Primary Expressions

	    function parsePrimaryExpression() {
	        var type, token, expr;

	        if (match('(')) {
	            return parseGroupExpression();
	        }

	        type = lookahead.type;
	        delegate.markStart();

	        if (type === Token.Identifier) {
	            expr =  delegate.createIdentifier(lex().value);
	        } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
	            if (strict && lookahead.octal) {
	                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
	            }
	            expr = delegate.createLiteral(lex());
	        } else if (type === Token.Keyword) {
	            if (matchKeyword('this')) {
	                lex();
	                expr = delegate.createThisExpression();
	            } else if (matchKeyword('function')) {
	                expr = parseFunctionExpression();
	            }
	        } else if (type === Token.BooleanLiteral) {
	            token = lex();
	            token.value = (token.value === 'true');
	            expr = delegate.createLiteral(token);
	        } else if (type === Token.NullLiteral) {
	            token = lex();
	            token.value = null;
	            expr = delegate.createLiteral(token);
	        } else if (match('[')) {
	            expr = parseArrayInitialiser();
	        } else if (match('{')) {
	            expr = parseObjectInitialiser();
	        } else if (match('/') || match('/=')) {
	            if (typeof extra.tokens !== 'undefined') {
	                expr = delegate.createLiteral(collectRegex());
	            } else {
	                expr = delegate.createLiteral(scanRegExp());
	            }
	            peek();
	        }

	        if (expr) {
	            return delegate.markEnd(expr);
	        }

	        throwUnexpected(lex());
	    }

	    // 11.2 Left-Hand-Side Expressions

	    function parseArguments() {
	        var args = [];

	        expect('(');

	        if (!match(')')) {
	            while (index < length) {
	                args.push(parseAssignmentExpression());
	                if (match(')')) {
	                    break;
	                }
	                expect(',');
	            }
	        }

	        expect(')');

	        return args;
	    }

	    function parseNonComputedProperty() {
	        var token;

	        delegate.markStart();
	        token = lex();

	        if (!isIdentifierName(token)) {
	            throwUnexpected(token);
	        }

	        return delegate.markEnd(delegate.createIdentifier(token.value));
	    }

	    function parseNonComputedMember() {
	        expect('.');

	        return parseNonComputedProperty();
	    }

	    function parseComputedMember() {
	        var expr;

	        expect('[');

	        expr = parseExpression();

	        expect(']');

	        return expr;
	    }

	    function parseNewExpression() {
	        var callee, args;

	        delegate.markStart();
	        expectKeyword('new');
	        callee = parseLeftHandSideExpression();
	        args = match('(') ? parseArguments() : [];

	        return delegate.markEnd(delegate.createNewExpression(callee, args));
	    }

	    function parseLeftHandSideExpressionAllowCall() {
	        var marker, previousAllowIn, expr, args, property;

	        marker = createLocationMarker();

	        previousAllowIn = state.allowIn;
	        state.allowIn = true;
	        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
	        state.allowIn = previousAllowIn;

	        while (match('.') || match('[') || match('(')) {
	            if (match('(')) {
	                args = parseArguments();
	                expr = delegate.createCallExpression(expr, args);
	            } else if (match('[')) {
	                property = parseComputedMember();
	                expr = delegate.createMemberExpression('[', expr, property);
	            } else {
	                property = parseNonComputedMember();
	                expr = delegate.createMemberExpression('.', expr, property);
	            }
	            if (marker) {
	                marker.apply(expr);
	            }
	        }

	        return expr;
	    }

	    function parseLeftHandSideExpression() {
	        var marker, previousAllowIn, expr, property;

	        marker = createLocationMarker();

	        previousAllowIn = state.allowIn;
	        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
	        state.allowIn = previousAllowIn;

	        while (match('.') || match('[')) {
	            if (match('[')) {
	                property = parseComputedMember();
	                expr = delegate.createMemberExpression('[', expr, property);
	            } else {
	                property = parseNonComputedMember();
	                expr = delegate.createMemberExpression('.', expr, property);
	            }
	            if (marker) {
	                marker.apply(expr);
	            }
	        }

	        return expr;
	    }

	    // 11.3 Postfix Expressions

	    function parsePostfixExpression() {
	        var expr, token;

	        delegate.markStart();
	        expr = parseLeftHandSideExpressionAllowCall();

	        if (lookahead.type === Token.Punctuator) {
	            if ((match('++') || match('--')) && !peekLineTerminator()) {
	                // 11.3.1, 11.3.2
	                if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
	                    throwErrorTolerant({}, Messages.StrictLHSPostfix);
	                }

	                if (!isLeftHandSide(expr)) {
	                    throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
	                }

	                token = lex();
	                expr = delegate.createPostfixExpression(token.value, expr);
	            }
	        }

	        return delegate.markEndIf(expr);
	    }

	    // 11.4 Unary Operators

	    function parseUnaryExpression() {
	        var token, expr;

	        delegate.markStart();

	        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
	            expr = parsePostfixExpression();
	        } else if (match('++') || match('--')) {
	            token = lex();
	            expr = parseUnaryExpression();
	            // 11.4.4, 11.4.5
	            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
	                throwErrorTolerant({}, Messages.StrictLHSPrefix);
	            }

	            if (!isLeftHandSide(expr)) {
	                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
	            }

	            expr = delegate.createUnaryExpression(token.value, expr);
	        } else if (match('+') || match('-') || match('~') || match('!')) {
	            token = lex();
	            expr = parseUnaryExpression();
	            expr = delegate.createUnaryExpression(token.value, expr);
	        } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
	            token = lex();
	            expr = parseUnaryExpression();
	            expr = delegate.createUnaryExpression(token.value, expr);
	            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
	                throwErrorTolerant({}, Messages.StrictDelete);
	            }
	        } else {
	            expr = parsePostfixExpression();
	        }

	        return delegate.markEndIf(expr);
	    }

	    function binaryPrecedence(token, allowIn) {
	        var prec = 0;

	        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
	            return 0;
	        }

	        switch (token.value) {
	        case '||':
	            prec = 1;
	            break;

	        case '&&':
	            prec = 2;
	            break;

	        case '|':
	            prec = 3;
	            break;

	        case '^':
	            prec = 4;
	            break;

	        case '&':
	            prec = 5;
	            break;

	        case '==':
	        case '!=':
	        case '===':
	        case '!==':
	            prec = 6;
	            break;

	        case '<':
	        case '>':
	        case '<=':
	        case '>=':
	        case 'instanceof':
	            prec = 7;
	            break;

	        case 'in':
	            prec = allowIn ? 7 : 0;
	            break;

	        case '<<':
	        case '>>':
	        case '>>>':
	            prec = 8;
	            break;

	        case '+':
	        case '-':
	            prec = 9;
	            break;

	        case '*':
	        case '/':
	        case '%':
	            prec = 11;
	            break;

	        default:
	            break;
	        }

	        return prec;
	    }

	    // 11.5 Multiplicative Operators
	    // 11.6 Additive Operators
	    // 11.7 Bitwise Shift Operators
	    // 11.8 Relational Operators
	    // 11.9 Equality Operators
	    // 11.10 Binary Bitwise Operators
	    // 11.11 Binary Logical Operators

	    function parseBinaryExpression() {
	        var marker, markers, expr, token, prec, stack, right, operator, left, i;

	        marker = createLocationMarker();
	        left = parseUnaryExpression();

	        token = lookahead;
	        prec = binaryPrecedence(token, state.allowIn);
	        if (prec === 0) {
	            return left;
	        }
	        token.prec = prec;
	        lex();

	        markers = [marker, createLocationMarker()];
	        right = parseUnaryExpression();

	        stack = [left, token, right];

	        while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {

	            // Reduce: make a binary expression from the three topmost entries.
	            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
	                right = stack.pop();
	                operator = stack.pop().value;
	                left = stack.pop();
	                expr = delegate.createBinaryExpression(operator, left, right);
	                markers.pop();
	                marker = markers.pop();
	                if (marker) {
	                    marker.apply(expr);
	                }
	                stack.push(expr);
	                markers.push(marker);
	            }

	            // Shift.
	            token = lex();
	            token.prec = prec;
	            stack.push(token);
	            markers.push(createLocationMarker());
	            expr = parseUnaryExpression();
	            stack.push(expr);
	        }

	        // Final reduce to clean-up the stack.
	        i = stack.length - 1;
	        expr = stack[i];
	        markers.pop();
	        while (i > 1) {
	            expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
	            i -= 2;
	            marker = markers.pop();
	            if (marker) {
	                marker.apply(expr);
	            }
	        }

	        return expr;
	    }


	    // 11.12 Conditional Operator

	    function parseConditionalExpression() {
	        var expr, previousAllowIn, consequent, alternate;

	        delegate.markStart();
	        expr = parseBinaryExpression();

	        if (match('?')) {
	            lex();
	            previousAllowIn = state.allowIn;
	            state.allowIn = true;
	            consequent = parseAssignmentExpression();
	            state.allowIn = previousAllowIn;
	            expect(':');
	            alternate = parseAssignmentExpression();

	            expr = delegate.markEnd(delegate.createConditionalExpression(expr, consequent, alternate));
	        } else {
	            delegate.markEnd({});
	        }

	        return expr;
	    }

	    // 11.13 Assignment Operators

	    function parseAssignmentExpression() {
	        var token, left, right, node;

	        token = lookahead;
	        delegate.markStart();
	        node = left = parseConditionalExpression();

	        if (matchAssign()) {
	            // LeftHandSideExpression
	            if (!isLeftHandSide(left)) {
	                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
	            }

	            // 11.13.1
	            if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
	                throwErrorTolerant(token, Messages.StrictLHSAssignment);
	            }

	            token = lex();
	            right = parseAssignmentExpression();
	            node = delegate.createAssignmentExpression(token.value, left, right);
	        }

	        return delegate.markEndIf(node);
	    }

	    // 11.14 Comma Operator

	    function parseExpression() {
	        var expr;

	        delegate.markStart();
	        expr = parseAssignmentExpression();

	        if (match(',')) {
	            expr = delegate.createSequenceExpression([ expr ]);

	            while (index < length) {
	                if (!match(',')) {
	                    break;
	                }
	                lex();
	                expr.expressions.push(parseAssignmentExpression());
	            }
	        }

	        return delegate.markEndIf(expr);
	    }

	    // 12.1 Block

	    function parseStatementList() {
	        var list = [],
	            statement;

	        while (index < length) {
	            if (match('}')) {
	                break;
	            }
	            statement = parseSourceElement();
	            if (typeof statement === 'undefined') {
	                break;
	            }
	            list.push(statement);
	        }

	        return list;
	    }

	    function parseBlock() {
	        var block;

	        delegate.markStart();
	        expect('{');

	        block = parseStatementList();

	        expect('}');

	        return delegate.markEnd(delegate.createBlockStatement(block));
	    }

	    // 12.2 Variable Statement

	    function parseVariableIdentifier() {
	        var token;

	        delegate.markStart();
	        token = lex();

	        if (token.type !== Token.Identifier) {
	            throwUnexpected(token);
	        }

	        return delegate.markEnd(delegate.createIdentifier(token.value));
	    }

	    function parseVariableDeclaration(kind) {
	        var init = null, id;

	        delegate.markStart();
	        id = parseVariableIdentifier();

	        // 12.2.1
	        if (strict && isRestrictedWord(id.name)) {
	            throwErrorTolerant({}, Messages.StrictVarName);
	        }

	        if (kind === 'const') {
	            expect('=');
	            init = parseAssignmentExpression();
	        } else if (match('=')) {
	            lex();
	            init = parseAssignmentExpression();
	        }

	        return delegate.markEnd(delegate.createVariableDeclarator(id, init));
	    }

	    function parseVariableDeclarationList(kind) {
	        var list = [];

	        do {
	            list.push(parseVariableDeclaration(kind));
	            if (!match(',')) {
	                break;
	            }
	            lex();
	        } while (index < length);

	        return list;
	    }

	    function parseVariableStatement() {
	        var declarations;

	        expectKeyword('var');

	        declarations = parseVariableDeclarationList();

	        consumeSemicolon();

	        return delegate.createVariableDeclaration(declarations, 'var');
	    }

	    // kind may be `const` or `let`
	    // Both are experimental and not in the specification yet.
	    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
	    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
	    function parseConstLetDeclaration(kind) {
	        var declarations;

	        delegate.markStart();

	        expectKeyword(kind);

	        declarations = parseVariableDeclarationList(kind);

	        consumeSemicolon();

	        return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind));
	    }

	    // 12.3 Empty Statement

	    function parseEmptyStatement() {
	        expect(';');
	        return delegate.createEmptyStatement();
	    }

	    // 12.4 Expression Statement

	    function parseExpressionStatement() {
	        var expr = parseExpression();
	        consumeSemicolon();
	        return delegate.createExpressionStatement(expr);
	    }

	    // 12.5 If statement

	    function parseIfStatement() {
	        var test, consequent, alternate;

	        expectKeyword('if');

	        expect('(');

	        test = parseExpression();

	        expect(')');

	        consequent = parseStatement();

	        if (matchKeyword('else')) {
	            lex();
	            alternate = parseStatement();
	        } else {
	            alternate = null;
	        }

	        return delegate.createIfStatement(test, consequent, alternate);
	    }

	    // 12.6 Iteration Statements

	    function parseDoWhileStatement() {
	        var body, test, oldInIteration;

	        expectKeyword('do');

	        oldInIteration = state.inIteration;
	        state.inIteration = true;

	        body = parseStatement();

	        state.inIteration = oldInIteration;

	        expectKeyword('while');

	        expect('(');

	        test = parseExpression();

	        expect(')');

	        if (match(';')) {
	            lex();
	        }

	        return delegate.createDoWhileStatement(body, test);
	    }

	    function parseWhileStatement() {
	        var test, body, oldInIteration;

	        expectKeyword('while');

	        expect('(');

	        test = parseExpression();

	        expect(')');

	        oldInIteration = state.inIteration;
	        state.inIteration = true;

	        body = parseStatement();

	        state.inIteration = oldInIteration;

	        return delegate.createWhileStatement(test, body);
	    }

	    function parseForVariableDeclaration() {
	        var token, declarations;

	        delegate.markStart();
	        token = lex();
	        declarations = parseVariableDeclarationList();

	        return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value));
	    }

	    function parseForStatement() {
	        var init, test, update, left, right, body, oldInIteration;

	        init = test = update = null;

	        expectKeyword('for');

	        expect('(');

	        if (match(';')) {
	            lex();
	        } else {
	            if (matchKeyword('var') || matchKeyword('let')) {
	                state.allowIn = false;
	                init = parseForVariableDeclaration();
	                state.allowIn = true;

	                if (init.declarations.length === 1 && matchKeyword('in')) {
	                    lex();
	                    left = init;
	                    right = parseExpression();
	                    init = null;
	                }
	            } else {
	                state.allowIn = false;
	                init = parseExpression();
	                state.allowIn = true;

	                if (matchKeyword('in')) {
	                    // LeftHandSideExpression
	                    if (!isLeftHandSide(init)) {
	                        throwErrorTolerant({}, Messages.InvalidLHSInForIn);
	                    }

	                    lex();
	                    left = init;
	                    right = parseExpression();
	                    init = null;
	                }
	            }

	            if (typeof left === 'undefined') {
	                expect(';');
	            }
	        }

	        if (typeof left === 'undefined') {

	            if (!match(';')) {
	                test = parseExpression();
	            }
	            expect(';');

	            if (!match(')')) {
	                update = parseExpression();
	            }
	        }

	        expect(')');

	        oldInIteration = state.inIteration;
	        state.inIteration = true;

	        body = parseStatement();

	        state.inIteration = oldInIteration;

	        return (typeof left === 'undefined') ?
	                delegate.createForStatement(init, test, update, body) :
	                delegate.createForInStatement(left, right, body);
	    }

	    // 12.7 The continue statement

	    function parseContinueStatement() {
	        var label = null, key;

	        expectKeyword('continue');

	        // Optimize the most common form: 'continue;'.
	        if (source.charCodeAt(index) === 0x3B) {
	            lex();

	            if (!state.inIteration) {
	                throwError({}, Messages.IllegalContinue);
	            }

	            return delegate.createContinueStatement(null);
	        }

	        if (peekLineTerminator()) {
	            if (!state.inIteration) {
	                throwError({}, Messages.IllegalContinue);
	            }

	            return delegate.createContinueStatement(null);
	        }

	        if (lookahead.type === Token.Identifier) {
	            label = parseVariableIdentifier();

	            key = '$' + label.name;
	            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
	                throwError({}, Messages.UnknownLabel, label.name);
	            }
	        }

	        consumeSemicolon();

	        if (label === null && !state.inIteration) {
	            throwError({}, Messages.IllegalContinue);
	        }

	        return delegate.createContinueStatement(label);
	    }

	    // 12.8 The break statement

	    function parseBreakStatement() {
	        var label = null, key;

	        expectKeyword('break');

	        // Catch the very common case first: immediately a semicolon (U+003B).
	        if (source.charCodeAt(index) === 0x3B) {
	            lex();

	            if (!(state.inIteration || state.inSwitch)) {
	                throwError({}, Messages.IllegalBreak);
	            }

	            return delegate.createBreakStatement(null);
	        }

	        if (peekLineTerminator()) {
	            if (!(state.inIteration || state.inSwitch)) {
	                throwError({}, Messages.IllegalBreak);
	            }

	            return delegate.createBreakStatement(null);
	        }

	        if (lookahead.type === Token.Identifier) {
	            label = parseVariableIdentifier();

	            key = '$' + label.name;
	            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
	                throwError({}, Messages.UnknownLabel, label.name);
	            }
	        }

	        consumeSemicolon();

	        if (label === null && !(state.inIteration || state.inSwitch)) {
	            throwError({}, Messages.IllegalBreak);
	        }

	        return delegate.createBreakStatement(label);
	    }

	    // 12.9 The return statement

	    function parseReturnStatement() {
	        var argument = null;

	        expectKeyword('return');

	        if (!state.inFunctionBody) {
	            throwErrorTolerant({}, Messages.IllegalReturn);
	        }

	        // 'return' followed by a space and an identifier is very common.
	        if (source.charCodeAt(index) === 0x20) {
	            if (isIdentifierStart(source.charCodeAt(index + 1))) {
	                argument = parseExpression();
	                consumeSemicolon();
	                return delegate.createReturnStatement(argument);
	            }
	        }

	        if (peekLineTerminator()) {
	            return delegate.createReturnStatement(null);
	        }

	        if (!match(';')) {
	            if (!match('}') && lookahead.type !== Token.EOF) {
	                argument = parseExpression();
	            }
	        }

	        consumeSemicolon();

	        return delegate.createReturnStatement(argument);
	    }

	    // 12.10 The with statement

	    function parseWithStatement() {
	        var object, body;

	        if (strict) {
	            throwErrorTolerant({}, Messages.StrictModeWith);
	        }

	        expectKeyword('with');

	        expect('(');

	        object = parseExpression();

	        expect(')');

	        body = parseStatement();

	        return delegate.createWithStatement(object, body);
	    }

	    // 12.10 The swith statement

	    function parseSwitchCase() {
	        var test,
	            consequent = [],
	            statement;

	        delegate.markStart();
	        if (matchKeyword('default')) {
	            lex();
	            test = null;
	        } else {
	            expectKeyword('case');
	            test = parseExpression();
	        }
	        expect(':');

	        while (index < length) {
	            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
	                break;
	            }
	            statement = parseStatement();
	            consequent.push(statement);
	        }

	        return delegate.markEnd(delegate.createSwitchCase(test, consequent));
	    }

	    function parseSwitchStatement() {
	        var discriminant, cases, clause, oldInSwitch, defaultFound;

	        expectKeyword('switch');

	        expect('(');

	        discriminant = parseExpression();

	        expect(')');

	        expect('{');

	        cases = [];

	        if (match('}')) {
	            lex();
	            return delegate.createSwitchStatement(discriminant, cases);
	        }

	        oldInSwitch = state.inSwitch;
	        state.inSwitch = true;
	        defaultFound = false;

	        while (index < length) {
	            if (match('}')) {
	                break;
	            }
	            clause = parseSwitchCase();
	            if (clause.test === null) {
	                if (defaultFound) {
	                    throwError({}, Messages.MultipleDefaultsInSwitch);
	                }
	                defaultFound = true;
	            }
	            cases.push(clause);
	        }

	        state.inSwitch = oldInSwitch;

	        expect('}');

	        return delegate.createSwitchStatement(discriminant, cases);
	    }

	    // 12.13 The throw statement

	    function parseThrowStatement() {
	        var argument;

	        expectKeyword('throw');

	        if (peekLineTerminator()) {
	            throwError({}, Messages.NewlineAfterThrow);
	        }

	        argument = parseExpression();

	        consumeSemicolon();

	        return delegate.createThrowStatement(argument);
	    }

	    // 12.14 The try statement

	    function parseCatchClause() {
	        var param, body;

	        delegate.markStart();
	        expectKeyword('catch');

	        expect('(');
	        if (match(')')) {
	            throwUnexpected(lookahead);
	        }

	        param = parseVariableIdentifier();
	        // 12.14.1
	        if (strict && isRestrictedWord(param.name)) {
	            throwErrorTolerant({}, Messages.StrictCatchVariable);
	        }

	        expect(')');
	        body = parseBlock();
	        return delegate.markEnd(delegate.createCatchClause(param, body));
	    }

	    function parseTryStatement() {
	        var block, handlers = [], finalizer = null;

	        expectKeyword('try');

	        block = parseBlock();

	        if (matchKeyword('catch')) {
	            handlers.push(parseCatchClause());
	        }

	        if (matchKeyword('finally')) {
	            lex();
	            finalizer = parseBlock();
	        }

	        if (handlers.length === 0 && !finalizer) {
	            throwError({}, Messages.NoCatchOrFinally);
	        }

	        return delegate.createTryStatement(block, [], handlers, finalizer);
	    }

	    // 12.15 The debugger statement

	    function parseDebuggerStatement() {
	        expectKeyword('debugger');

	        consumeSemicolon();

	        return delegate.createDebuggerStatement();
	    }

	    // 12 Statements

	    function parseStatement() {
	        var type = lookahead.type,
	            expr,
	            labeledBody,
	            key;

	        if (type === Token.EOF) {
	            throwUnexpected(lookahead);
	        }

	        delegate.markStart();

	        if (type === Token.Punctuator) {
	            switch (lookahead.value) {
	            case ';':
	                return delegate.markEnd(parseEmptyStatement());
	            case '{':
	                return delegate.markEnd(parseBlock());
	            case '(':
	                return delegate.markEnd(parseExpressionStatement());
	            default:
	                break;
	            }
	        }

	        if (type === Token.Keyword) {
	            switch (lookahead.value) {
	            case 'break':
	                return delegate.markEnd(parseBreakStatement());
	            case 'continue':
	                return delegate.markEnd(parseContinueStatement());
	            case 'debugger':
	                return delegate.markEnd(parseDebuggerStatement());
	            case 'do':
	                return delegate.markEnd(parseDoWhileStatement());
	            case 'for':
	                return delegate.markEnd(parseForStatement());
	            case 'function':
	                return delegate.markEnd(parseFunctionDeclaration());
	            case 'if':
	                return delegate.markEnd(parseIfStatement());
	            case 'return':
	                return delegate.markEnd(parseReturnStatement());
	            case 'switch':
	                return delegate.markEnd(parseSwitchStatement());
	            case 'throw':
	                return delegate.markEnd(parseThrowStatement());
	            case 'try':
	                return delegate.markEnd(parseTryStatement());
	            case 'var':
	                return delegate.markEnd(parseVariableStatement());
	            case 'while':
	                return delegate.markEnd(parseWhileStatement());
	            case 'with':
	                return delegate.markEnd(parseWithStatement());
	            default:
	                break;
	            }
	        }

	        expr = parseExpression();

	        // 12.12 Labelled Statements
	        if ((expr.type === Syntax.Identifier) && match(':')) {
	            lex();

	            key = '$' + expr.name;
	            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
	                throwError({}, Messages.Redeclaration, 'Label', expr.name);
	            }

	            state.labelSet[key] = true;
	            labeledBody = parseStatement();
	            delete state.labelSet[key];
	            return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody));
	        }

	        consumeSemicolon();

	        return delegate.markEnd(delegate.createExpressionStatement(expr));
	    }

	    // 13 Function Definition

	    function parseFunctionSourceElements() {
	        var sourceElement, sourceElements = [], token, directive, firstRestricted,
	            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody;

	        delegate.markStart();
	        expect('{');

	        while (index < length) {
	            if (lookahead.type !== Token.StringLiteral) {
	                break;
	            }
	            token = lookahead;

	            sourceElement = parseSourceElement();
	            sourceElements.push(sourceElement);
	            if (sourceElement.expression.type !== Syntax.Literal) {
	                // this is not directive
	                break;
	            }
	            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
	            if (directive === 'use strict') {
	                strict = true;
	                if (firstRestricted) {
	                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
	                }
	            } else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }

	        oldLabelSet = state.labelSet;
	        oldInIteration = state.inIteration;
	        oldInSwitch = state.inSwitch;
	        oldInFunctionBody = state.inFunctionBody;

	        state.labelSet = {};
	        state.inIteration = false;
	        state.inSwitch = false;
	        state.inFunctionBody = true;

	        while (index < length) {
	            if (match('}')) {
	                break;
	            }
	            sourceElement = parseSourceElement();
	            if (typeof sourceElement === 'undefined') {
	                break;
	            }
	            sourceElements.push(sourceElement);
	        }

	        expect('}');

	        state.labelSet = oldLabelSet;
	        state.inIteration = oldInIteration;
	        state.inSwitch = oldInSwitch;
	        state.inFunctionBody = oldInFunctionBody;

	        return delegate.markEnd(delegate.createBlockStatement(sourceElements));
	    }

	    function parseParams(firstRestricted) {
	        var param, params = [], token, stricted, paramSet, key, message;
	        expect('(');

	        if (!match(')')) {
	            paramSet = {};
	            while (index < length) {
	                token = lookahead;
	                param = parseVariableIdentifier();
	                key = '$' + token.value;
	                if (strict) {
	                    if (isRestrictedWord(token.value)) {
	                        stricted = token;
	                        message = Messages.StrictParamName;
	                    }
	                    if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
	                        stricted = token;
	                        message = Messages.StrictParamDupe;
	                    }
	                } else if (!firstRestricted) {
	                    if (isRestrictedWord(token.value)) {
	                        firstRestricted = token;
	                        message = Messages.StrictParamName;
	                    } else if (isStrictModeReservedWord(token.value)) {
	                        firstRestricted = token;
	                        message = Messages.StrictReservedWord;
	                    } else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
	                        firstRestricted = token;
	                        message = Messages.StrictParamDupe;
	                    }
	                }
	                params.push(param);
	                paramSet[key] = true;
	                if (match(')')) {
	                    break;
	                }
	                expect(',');
	            }
	        }

	        expect(')');

	        return {
	            params: params,
	            stricted: stricted,
	            firstRestricted: firstRestricted,
	            message: message
	        };
	    }

	    function parseFunctionDeclaration() {
	        var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict;

	        delegate.markStart();

	        expectKeyword('function');
	        token = lookahead;
	        id = parseVariableIdentifier();
	        if (strict) {
	            if (isRestrictedWord(token.value)) {
	                throwErrorTolerant(token, Messages.StrictFunctionName);
	            }
	        } else {
	            if (isRestrictedWord(token.value)) {
	                firstRestricted = token;
	                message = Messages.StrictFunctionName;
	            } else if (isStrictModeReservedWord(token.value)) {
	                firstRestricted = token;
	                message = Messages.StrictReservedWord;
	            }
	        }

	        tmp = parseParams(firstRestricted);
	        params = tmp.params;
	        stricted = tmp.stricted;
	        firstRestricted = tmp.firstRestricted;
	        if (tmp.message) {
	            message = tmp.message;
	        }

	        previousStrict = strict;
	        body = parseFunctionSourceElements();
	        if (strict && firstRestricted) {
	            throwError(firstRestricted, message);
	        }
	        if (strict && stricted) {
	            throwErrorTolerant(stricted, message);
	        }
	        strict = previousStrict;

	        return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body));
	    }

	    function parseFunctionExpression() {
	        var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict;

	        delegate.markStart();
	        expectKeyword('function');

	        if (!match('(')) {
	            token = lookahead;
	            id = parseVariableIdentifier();
	            if (strict) {
	                if (isRestrictedWord(token.value)) {
	                    throwErrorTolerant(token, Messages.StrictFunctionName);
	                }
	            } else {
	                if (isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = Messages.StrictFunctionName;
	                } else if (isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = Messages.StrictReservedWord;
	                }
	            }
	        }

	        tmp = parseParams(firstRestricted);
	        params = tmp.params;
	        stricted = tmp.stricted;
	        firstRestricted = tmp.firstRestricted;
	        if (tmp.message) {
	            message = tmp.message;
	        }

	        previousStrict = strict;
	        body = parseFunctionSourceElements();
	        if (strict && firstRestricted) {
	            throwError(firstRestricted, message);
	        }
	        if (strict && stricted) {
	            throwErrorTolerant(stricted, message);
	        }
	        strict = previousStrict;

	        return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body));
	    }

	    // 14 Program

	    function parseSourceElement() {
	        if (lookahead.type === Token.Keyword) {
	            switch (lookahead.value) {
	            case 'const':
	            case 'let':
	                return parseConstLetDeclaration(lookahead.value);
	            case 'function':
	                return parseFunctionDeclaration();
	            default:
	                return parseStatement();
	            }
	        }

	        if (lookahead.type !== Token.EOF) {
	            return parseStatement();
	        }
	    }

	    function parseSourceElements() {
	        var sourceElement, sourceElements = [], token, directive, firstRestricted;

	        while (index < length) {
	            token = lookahead;
	            if (token.type !== Token.StringLiteral) {
	                break;
	            }

	            sourceElement = parseSourceElement();
	            sourceElements.push(sourceElement);
	            if (sourceElement.expression.type !== Syntax.Literal) {
	                // this is not directive
	                break;
	            }
	            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
	            if (directive === 'use strict') {
	                strict = true;
	                if (firstRestricted) {
	                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
	                }
	            } else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }

	        while (index < length) {
	            sourceElement = parseSourceElement();
	            if (typeof sourceElement === 'undefined') {
	                break;
	            }
	            sourceElements.push(sourceElement);
	        }
	        return sourceElements;
	    }

	    function parseProgram() {
	        var body;

	        delegate.markStart();
	        strict = false;
	        peek();
	        body = parseSourceElements();
	        return delegate.markEnd(delegate.createProgram(body));
	    }

	    function attachComments() {
	        var i, attacher, comment, leading, trailing;

	        for (i = 0; i < extra.pendingComments.length; ++i) {
	            attacher = extra.pendingComments[i];
	            comment = attacher.comment;
	            leading = attacher.leading;
	            if (leading) {
	                if (typeof leading.leadingComments === 'undefined') {
	                    leading.leadingComments = [];
	                }
	                leading.leadingComments.push(attacher.comment);
	            }
	            trailing = attacher.trailing;
	            if (trailing) {
	                if (typeof trailing.trailingComments === 'undefined') {
	                    trailing.trailingComments = [];
	                }
	                trailing.trailingComments.push(attacher.comment);
	            }
	        }
	        extra.pendingComments = [];
	    }

	    function filterTokenLocation() {
	        var i, entry, token, tokens = [];

	        for (i = 0; i < extra.tokens.length; ++i) {
	            entry = extra.tokens[i];
	            token = {
	                type: entry.type,
	                value: entry.value
	            };
	            if (extra.range) {
	                token.range = entry.range;
	            }
	            if (extra.loc) {
	                token.loc = entry.loc;
	            }
	            tokens.push(token);
	        }

	        extra.tokens = tokens;
	    }

	    function LocationMarker() {
	        this.startIndex = index;
	        this.startLine = lineNumber;
	        this.startColumn = index - lineStart;
	    }

	    LocationMarker.prototype = {
	        constructor: LocationMarker,

	        apply: function (node) {
	            if (extra.range) {
	                node.range = [this.startIndex, index];
	            }
	            if (extra.loc) {
	                node.loc = {
	                    start: {
	                        line: this.startLine,
	                        column: this.startColumn
	                    },
	                    end: {
	                        line: lineNumber,
	                        column: index - lineStart
	                    }
	                };
	                node = delegate.postProcess(node);
	            }
	            if (extra.attachComment) {
	                delegate.processComment(node);
	            }
	        }
	    };

	    function createLocationMarker() {
	        if (!extra.loc && !extra.range) {
	            return null;
	        }

	        skipComment();

	        return new LocationMarker();
	    }

	    function tokenize(code, options) {
	        var toString,
	            token,
	            tokens;

	        toString = String;
	        if (typeof code !== 'string' && !(code instanceof String)) {
	            code = toString(code);
	        }

	        delegate = SyntaxTreeDelegate;
	        source = code;
	        index = 0;
	        lineNumber = (source.length > 0) ? 1 : 0;
	        lineStart = 0;
	        length = source.length;
	        lookahead = null;
	        state = {
	            allowIn: true,
	            labelSet: {},
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            lastCommentStart: -1
	        };

	        extra = {};

	        // Options matching.
	        options = options || {};

	        // Of course we collect tokens here.
	        options.tokens = true;
	        extra.tokens = [];
	        extra.tokenize = true;
	        // The following two fields are necessary to compute the Regex tokens.
	        extra.openParenToken = -1;
	        extra.openCurlyToken = -1;

	        extra.range = (typeof options.range === 'boolean') && options.range;
	        extra.loc = (typeof options.loc === 'boolean') && options.loc;

	        if (typeof options.comment === 'boolean' && options.comment) {
	            extra.comments = [];
	        }
	        if (typeof options.tolerant === 'boolean' && options.tolerant) {
	            extra.errors = [];
	        }

	        if (length > 0) {
	            if (typeof source[0] === 'undefined') {
	                // Try first to convert to a string. This is good as fast path
	                // for old IE which understands string indexing for string
	                // literals only and not for string object.
	                if (code instanceof String) {
	                    source = code.valueOf();
	                }
	            }
	        }

	        try {
	            peek();
	            if (lookahead.type === Token.EOF) {
	                return extra.tokens;
	            }

	            token = lex();
	            while (lookahead.type !== Token.EOF) {
	                try {
	                    token = lex();
	                } catch (lexError) {
	                    token = lookahead;
	                    if (extra.errors) {
	                        extra.errors.push(lexError);
	                        // We have to break on the first error
	                        // to avoid infinite loops.
	                        break;
	                    } else {
	                        throw lexError;
	                    }
	                }
	            }

	            filterTokenLocation();
	            tokens = extra.tokens;
	            if (typeof extra.comments !== 'undefined') {
	                tokens.comments = extra.comments;
	            }
	            if (typeof extra.errors !== 'undefined') {
	                tokens.errors = extra.errors;
	            }
	        } catch (e) {
	            throw e;
	        } finally {
	            extra = {};
	        }
	        return tokens;
	    }

	    function parse(code, options) {
	        var program, toString;

	        toString = String;
	        if (typeof code !== 'string' && !(code instanceof String)) {
	            code = toString(code);
	        }

	        delegate = SyntaxTreeDelegate;
	        source = code;
	        index = 0;
	        lineNumber = (source.length > 0) ? 1 : 0;
	        lineStart = 0;
	        length = source.length;
	        lookahead = null;
	        state = {
	            allowIn: true,
	            labelSet: {},
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            lastCommentStart: -1,
	            markerStack: []
	        };

	        extra = {};
	        if (typeof options !== 'undefined') {
	            extra.range = (typeof options.range === 'boolean') && options.range;
	            extra.loc = (typeof options.loc === 'boolean') && options.loc;
	            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

	            if (extra.loc && options.source !== null && options.source !== undefined) {
	                extra.source = toString(options.source);
	            }

	            if (typeof options.tokens === 'boolean' && options.tokens) {
	                extra.tokens = [];
	            }
	            if (typeof options.comment === 'boolean' && options.comment) {
	                extra.comments = [];
	            }
	            if (typeof options.tolerant === 'boolean' && options.tolerant) {
	                extra.errors = [];
	            }
	            if (extra.attachComment) {
	                extra.range = true;
	                extra.pendingComments = [];
	                extra.comments = [];
	            }
	        }

	        if (length > 0) {
	            if (typeof source[0] === 'undefined') {
	                // Try first to convert to a string. This is good as fast path
	                // for old IE which understands string indexing for string
	                // literals only and not for string object.
	                if (code instanceof String) {
	                    source = code.valueOf();
	                }
	            }
	        }

	        try {
	            program = parseProgram();
	            if (typeof extra.comments !== 'undefined') {
	                program.comments = extra.comments;
	            }
	            if (typeof extra.tokens !== 'undefined') {
	                filterTokenLocation();
	                program.tokens = extra.tokens;
	            }
	            if (typeof extra.errors !== 'undefined') {
	                program.errors = extra.errors;
	            }
	            if (extra.attachComment) {
	                attachComments();
	            }
	        } catch (e) {
	            throw e;
	        } finally {
	            extra = {};
	        }

	        return program;
	    }

	    // Sync with *.json manifests.
	    exports.version = '1.1.1';

	    exports.tokenize = tokenize;

	    exports.parse = parse;

	    // Deep copy.
	    exports.Syntax = (function () {
	        var name, types = {};

	        if (typeof Object.create === 'function') {
	            types = Object.create(null);
	        }

	        for (name in Syntax) {
	            if (Syntax.hasOwnProperty(name)) {
	                types[name] = Syntax[name];
	            }
	        }

	        if (typeof Object.freeze === 'function') {
	            Object.freeze(types);
	        }

	        return types;
	    }());

	}));
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	  Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
	  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	/*jslint vars:false, bitwise:true*/
	/*jshint indent:4*/
	/*global exports:true, define:true*/
	(function (root, factory) {
	    'use strict';

	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
	    // and plain browser loading,
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        factory(exports);
	    } else {
	        factory((root.estraverse = {}));
	    }
	}(this, function (exports) {
	    'use strict';

	    var Syntax,
	        isArray,
	        VisitorOption,
	        VisitorKeys,
	        BREAK,
	        SKIP;

	    Syntax = {
	        AssignmentExpression: 'AssignmentExpression',
	        ArrayExpression: 'ArrayExpression',
	        ArrayPattern: 'ArrayPattern',
	        ArrowFunctionExpression: 'ArrowFunctionExpression',
	        BlockStatement: 'BlockStatement',
	        BinaryExpression: 'BinaryExpression',
	        BreakStatement: 'BreakStatement',
	        CallExpression: 'CallExpression',
	        CatchClause: 'CatchClause',
	        ClassBody: 'ClassBody',
	        ClassDeclaration: 'ClassDeclaration',
	        ClassExpression: 'ClassExpression',
	        ConditionalExpression: 'ConditionalExpression',
	        ContinueStatement: 'ContinueStatement',
	        DebuggerStatement: 'DebuggerStatement',
	        DirectiveStatement: 'DirectiveStatement',
	        DoWhileStatement: 'DoWhileStatement',
	        EmptyStatement: 'EmptyStatement',
	        ExpressionStatement: 'ExpressionStatement',
	        ForStatement: 'ForStatement',
	        ForInStatement: 'ForInStatement',
	        FunctionDeclaration: 'FunctionDeclaration',
	        FunctionExpression: 'FunctionExpression',
	        Identifier: 'Identifier',
	        IfStatement: 'IfStatement',
	        Literal: 'Literal',
	        LabeledStatement: 'LabeledStatement',
	        LogicalExpression: 'LogicalExpression',
	        MemberExpression: 'MemberExpression',
	        MethodDefinition: 'MethodDefinition',
	        NewExpression: 'NewExpression',
	        ObjectExpression: 'ObjectExpression',
	        ObjectPattern: 'ObjectPattern',
	        Program: 'Program',
	        Property: 'Property',
	        ReturnStatement: 'ReturnStatement',
	        SequenceExpression: 'SequenceExpression',
	        SwitchStatement: 'SwitchStatement',
	        SwitchCase: 'SwitchCase',
	        ThisExpression: 'ThisExpression',
	        ThrowStatement: 'ThrowStatement',
	        TryStatement: 'TryStatement',
	        UnaryExpression: 'UnaryExpression',
	        UpdateExpression: 'UpdateExpression',
	        VariableDeclaration: 'VariableDeclaration',
	        VariableDeclarator: 'VariableDeclarator',
	        WhileStatement: 'WhileStatement',
	        WithStatement: 'WithStatement',
	        YieldExpression: 'YieldExpression'
	    };

	    function ignoreJSHintError() { }

	    isArray = Array.isArray;
	    if (!isArray) {
	        isArray = function isArray(array) {
	            return Object.prototype.toString.call(array) === '[object Array]';
	        };
	    }

	    function deepCopy(obj) {
	        var ret = {}, key, val;
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                val = obj[key];
	                if (typeof val === 'object' && val !== null) {
	                    ret[key] = deepCopy(val);
	                } else {
	                    ret[key] = val;
	                }
	            }
	        }
	        return ret;
	    }

	    function shallowCopy(obj) {
	        var ret = {}, key;
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    ignoreJSHintError(shallowCopy);

	    // based on LLVM libc++ upper_bound / lower_bound
	    // MIT License

	    function upperBound(array, func) {
	        var diff, len, i, current;

	        len = array.length;
	        i = 0;

	        while (len) {
	            diff = len >>> 1;
	            current = i + diff;
	            if (func(array[current])) {
	                len = diff;
	            } else {
	                i = current + 1;
	                len -= diff + 1;
	            }
	        }
	        return i;
	    }

	    function lowerBound(array, func) {
	        var diff, len, i, current;

	        len = array.length;
	        i = 0;

	        while (len) {
	            diff = len >>> 1;
	            current = i + diff;
	            if (func(array[current])) {
	                i = current + 1;
	                len -= diff + 1;
	            } else {
	                len = diff;
	            }
	        }
	        return i;
	    }
	    ignoreJSHintError(lowerBound);

	    VisitorKeys = {
	        AssignmentExpression: ['left', 'right'],
	        ArrayExpression: ['elements'],
	        ArrayPattern: ['elements'],
	        ArrowFunctionExpression: ['params', 'defaults', 'rest', 'body'],
	        BlockStatement: ['body'],
	        BinaryExpression: ['left', 'right'],
	        BreakStatement: ['label'],
	        CallExpression: ['callee', 'arguments'],
	        CatchClause: ['param', 'body'],
	        ClassBody: ['body'],
	        ClassDeclaration: ['id', 'body', 'superClass'],
	        ClassExpression: ['id', 'body', 'superClass'],
	        ConditionalExpression: ['test', 'consequent', 'alternate'],
	        ContinueStatement: ['label'],
	        DebuggerStatement: [],
	        DirectiveStatement: [],
	        DoWhileStatement: ['body', 'test'],
	        EmptyStatement: [],
	        ExpressionStatement: ['expression'],
	        ForStatement: ['init', 'test', 'update', 'body'],
	        ForInStatement: ['left', 'right', 'body'],
	        ForOfStatement: ['left', 'right', 'body'],
	        FunctionDeclaration: ['id', 'params', 'defaults', 'rest', 'body'],
	        FunctionExpression: ['id', 'params', 'defaults', 'rest', 'body'],
	        Identifier: [],
	        IfStatement: ['test', 'consequent', 'alternate'],
	        Literal: [],
	        LabeledStatement: ['label', 'body'],
	        LogicalExpression: ['left', 'right'],
	        MemberExpression: ['object', 'property'],
	        MethodDefinition: ['key', 'value'],
	        NewExpression: ['callee', 'arguments'],
	        ObjectExpression: ['properties'],
	        ObjectPattern: ['properties'],
	        Program: ['body'],
	        Property: ['key', 'value'],
	        ReturnStatement: ['argument'],
	        SequenceExpression: ['expressions'],
	        SwitchStatement: ['discriminant', 'cases'],
	        SwitchCase: ['test', 'consequent'],
	        ThisExpression: [],
	        ThrowStatement: ['argument'],
	        TryStatement: ['block', 'handlers', 'handler', 'guardedHandlers', 'finalizer'],
	        UnaryExpression: ['argument'],
	        UpdateExpression: ['argument'],
	        VariableDeclaration: ['declarations'],
	        VariableDeclarator: ['id', 'init'],
	        WhileStatement: ['test', 'body'],
	        WithStatement: ['object', 'body'],
	        YieldExpression: ['argument']
	    };

	    // unique id
	    BREAK = {};
	    SKIP = {};

	    VisitorOption = {
	        Break: BREAK,
	        Skip: SKIP
	    };

	    function Reference(parent, key) {
	        this.parent = parent;
	        this.key = key;
	    }

	    Reference.prototype.replace = function replace(node) {
	        this.parent[this.key] = node;
	    };

	    function Element(node, path, wrap, ref) {
	        this.node = node;
	        this.path = path;
	        this.wrap = wrap;
	        this.ref = ref;
	    }

	    function Controller() { }

	    // API:
	    // return property path array from root to current node
	    Controller.prototype.path = function path() {
	        var i, iz, j, jz, result, element;

	        function addToPath(result, path) {
	            if (isArray(path)) {
	                for (j = 0, jz = path.length; j < jz; ++j) {
	                    result.push(path[j]);
	                }
	            } else {
	                result.push(path);
	            }
	        }

	        // root node
	        if (!this.__current.path) {
	            return null;
	        }

	        // first node is sentinel, second node is root element
	        result = [];
	        for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
	            element = this.__leavelist[i];
	            addToPath(result, element.path);
	        }
	        addToPath(result, this.__current.path);
	        return result;
	    };

	    // API:
	    // return array of parent elements
	    Controller.prototype.parents = function parents() {
	        var i, iz, result;

	        // first node is sentinel
	        result = [];
	        for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
	            result.push(this.__leavelist[i].node);
	        }

	        return result;
	    };

	    // API:
	    // return current node
	    Controller.prototype.current = function current() {
	        return this.__current.node;
	    };

	    Controller.prototype.__execute = function __execute(callback, element) {
	        var previous, result;

	        result = undefined;

	        previous  = this.__current;
	        this.__current = element;
	        this.__state = null;
	        if (callback) {
	            result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
	        }
	        this.__current = previous;

	        return result;
	    };

	    // API:
	    // notify control skip / break
	    Controller.prototype.notify = function notify(flag) {
	        this.__state = flag;
	    };

	    // API:
	    // skip child nodes of current node
	    Controller.prototype.skip = function () {
	        this.notify(SKIP);
	    };

	    // API:
	    // break traversals
	    Controller.prototype['break'] = function () {
	        this.notify(BREAK);
	    };

	    Controller.prototype.__initialize = function(root, visitor) {
	        this.visitor = visitor;
	        this.root = root;
	        this.__worklist = [];
	        this.__leavelist = [];
	        this.__current = null;
	        this.__state = null;
	    };

	    Controller.prototype.traverse = function traverse(root, visitor) {
	        var worklist,
	            leavelist,
	            element,
	            node,
	            nodeType,
	            ret,
	            key,
	            current,
	            current2,
	            candidates,
	            candidate,
	            sentinel;

	        this.__initialize(root, visitor);

	        sentinel = {};

	        // reference
	        worklist = this.__worklist;
	        leavelist = this.__leavelist;

	        // initialize
	        worklist.push(new Element(root, null, null, null));
	        leavelist.push(new Element(null, null, null, null));

	        while (worklist.length) {
	            element = worklist.pop();

	            if (element === sentinel) {
	                element = leavelist.pop();

	                ret = this.__execute(visitor.leave, element);

	                if (this.__state === BREAK || ret === BREAK) {
	                    return;
	                }
	                continue;
	            }

	            if (element.node) {

	                ret = this.__execute(visitor.enter, element);

	                if (this.__state === BREAK || ret === BREAK) {
	                    return;
	                }

	                worklist.push(sentinel);
	                leavelist.push(element);

	                if (this.__state === SKIP || ret === SKIP) {
	                    continue;
	                }

	                node = element.node;
	                nodeType = element.wrap || node.type;
	                candidates = VisitorKeys[nodeType];

	                current = candidates.length;
	                while ((current -= 1) >= 0) {
	                    key = candidates[current];
	                    candidate = node[key];
	                    if (!candidate) {
	                        continue;
	                    }

	                    if (!isArray(candidate)) {
	                        worklist.push(new Element(candidate, key, null, null));
	                        continue;
	                    }

	                    current2 = candidate.length;
	                    while ((current2 -= 1) >= 0) {
	                        if (!candidate[current2]) {
	                            continue;
	                        }
	                        if ((nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === candidates[current]) {
	                            element = new Element(candidate[current2], [key, current2], 'Property', null);
	                        } else {
	                            element = new Element(candidate[current2], [key, current2], null, null);
	                        }
	                        worklist.push(element);
	                    }
	                }
	            }
	        }
	    };

	    Controller.prototype.replace = function replace(root, visitor) {
	        var worklist,
	            leavelist,
	            node,
	            nodeType,
	            target,
	            element,
	            current,
	            current2,
	            candidates,
	            candidate,
	            sentinel,
	            outer,
	            key;

	        this.__initialize(root, visitor);

	        sentinel = {};

	        // reference
	        worklist = this.__worklist;
	        leavelist = this.__leavelist;

	        // initialize
	        outer = {
	            root: root
	        };
	        element = new Element(root, null, null, new Reference(outer, 'root'));
	        worklist.push(element);
	        leavelist.push(element);

	        while (worklist.length) {
	            element = worklist.pop();

	            if (element === sentinel) {
	                element = leavelist.pop();

	                target = this.__execute(visitor.leave, element);

	                // node may be replaced with null,
	                // so distinguish between undefined and null in this place
	                if (target !== undefined && target !== BREAK && target !== SKIP) {
	                    // replace
	                    element.ref.replace(target);
	                }

	                if (this.__state === BREAK || target === BREAK) {
	                    return outer.root;
	                }
	                continue;
	            }

	            target = this.__execute(visitor.enter, element);

	            // node may be replaced with null,
	            // so distinguish between undefined and null in this place
	            if (target !== undefined && target !== BREAK && target !== SKIP) {
	                // replace
	                element.ref.replace(target);
	                element.node = target;
	            }

	            if (this.__state === BREAK || target === BREAK) {
	                return outer.root;
	            }

	            // node may be null
	            node = element.node;
	            if (!node) {
	                continue;
	            }

	            worklist.push(sentinel);
	            leavelist.push(element);

	            if (this.__state === SKIP || target === SKIP) {
	                continue;
	            }

	            nodeType = element.wrap || node.type;
	            candidates = VisitorKeys[nodeType];

	            current = candidates.length;
	            while ((current -= 1) >= 0) {
	                key = candidates[current];
	                candidate = node[key];
	                if (!candidate) {
	                    continue;
	                }

	                if (!isArray(candidate)) {
	                    worklist.push(new Element(candidate, key, null, new Reference(node, key)));
	                    continue;
	                }

	                current2 = candidate.length;
	                while ((current2 -= 1) >= 0) {
	                    if (!candidate[current2]) {
	                        continue;
	                    }
	                    if (nodeType === Syntax.ObjectExpression && 'properties' === candidates[current]) {
	                        element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
	                    } else {
	                        element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
	                    }
	                    worklist.push(element);
	                }
	            }
	        }

	        return outer.root;
	    };

	    function traverse(root, visitor) {
	        var controller = new Controller();
	        return controller.traverse(root, visitor);
	    }

	    function replace(root, visitor) {
	        var controller = new Controller();
	        return controller.replace(root, visitor);
	    }

	    function extendCommentRange(comment, tokens) {
	        var target;

	        target = upperBound(tokens, function search(token) {
	            return token.range[0] > comment.range[0];
	        });

	        comment.extendedRange = [comment.range[0], comment.range[1]];

	        if (target !== tokens.length) {
	            comment.extendedRange[1] = tokens[target].range[0];
	        }

	        target -= 1;
	        if (target >= 0) {
	            comment.extendedRange[0] = tokens[target].range[1];
	        }

	        return comment;
	    }

	    function attachComments(tree, providedComments, tokens) {
	        // At first, we should calculate extended comment ranges.
	        var comments = [], comment, len, i, cursor;

	        if (!tree.range) {
	            throw new Error('attachComments needs range information');
	        }

	        // tokens array is empty, we attach comments to tree as 'leadingComments'
	        if (!tokens.length) {
	            if (providedComments.length) {
	                for (i = 0, len = providedComments.length; i < len; i += 1) {
	                    comment = deepCopy(providedComments[i]);
	                    comment.extendedRange = [0, tree.range[0]];
	                    comments.push(comment);
	                }
	                tree.leadingComments = comments;
	            }
	            return tree;
	        }

	        for (i = 0, len = providedComments.length; i < len; i += 1) {
	            comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
	        }

	        // This is based on John Freeman's implementation.
	        cursor = 0;
	        traverse(tree, {
	            enter: function (node) {
	                var comment;

	                while (cursor < comments.length) {
	                    comment = comments[cursor];
	                    if (comment.extendedRange[1] > node.range[0]) {
	                        break;
	                    }

	                    if (comment.extendedRange[1] === node.range[0]) {
	                        if (!node.leadingComments) {
	                            node.leadingComments = [];
	                        }
	                        node.leadingComments.push(comment);
	                        comments.splice(cursor, 1);
	                    } else {
	                        cursor += 1;
	                    }
	                }

	                // already out of owned node
	                if (cursor === comments.length) {
	                    return VisitorOption.Break;
	                }

	                if (comments[cursor].extendedRange[0] > node.range[1]) {
	                    return VisitorOption.Skip;
	                }
	            }
	        });

	        cursor = 0;
	        traverse(tree, {
	            leave: function (node) {
	                var comment;

	                while (cursor < comments.length) {
	                    comment = comments[cursor];
	                    if (node.range[1] < comment.extendedRange[0]) {
	                        break;
	                    }

	                    if (node.range[1] === comment.extendedRange[0]) {
	                        if (!node.trailingComments) {
	                            node.trailingComments = [];
	                        }
	                        node.trailingComments.push(comment);
	                        comments.splice(cursor, 1);
	                    } else {
	                        cursor += 1;
	                    }
	                }

	                // already out of owned node
	                if (cursor === comments.length) {
	                    return VisitorOption.Break;
	                }

	                if (comments[cursor].extendedRange[0] > node.range[1]) {
	                    return VisitorOption.Skip;
	                }
	            }
	        });

	        return tree;
	    }

	    exports.version = '1.5.1-dev';
	    exports.Syntax = Syntax;
	    exports.traverse = traverse;
	    exports.replace = replace;
	    exports.attachComments = attachComments;
	    exports.VisitorKeys = VisitorKeys;
	    exports.VisitorOption = VisitorOption;
	    exports.Controller = Controller;
	}));
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var xjst = exports;

	// Export utils
	xjst.utils = __webpack_require__(11);

	// Export compiler stuff
	xjst.compiler = __webpack_require__(15);

	// Export cli
	xjst.run = __webpack_require__(12).run;

	// Compatibility APIs
	xjst.generate = __webpack_require__(13).generate;
	xjst.compile = __webpack_require__(13).compile;
	xjst.translate = __webpack_require__(13).translate;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var utils = exports;

	var estraverse = __webpack_require__(9);

	utils.run = function run(templates, context) {
	  var ignore = context.$ignore;
	  var globalCtx = __$$globalCtx;
	  if (!ignore) {
	    context.$ignore = [];
	    ignore = context.$ignore;
	  }

	  var index = 0;
	  var currentId = null;
	  var last = null;

	  function template() {
	    var id = index++;
	    var match = !context.$override &&
	                Array.prototype.every.call(arguments, function(cond) {
	      try {
	        return typeof cond === 'function' ? cond.call(context) : cond;
	      } catch (e) {
	        if (/Cannot read property/.test(e.message))
	          return false;
	      }
	    });

	    // Respect applyNext
	    if (match && ignore.indexOf(id) !== -1) match = false;

	    // Ignore body if match failed
	    if (!match) return function() {};

	    // Set current id
	    currentId = id;

	    return function bodyHandler(body) {
	      last = {
	        id: id,
	        body: typeof body === 'function' ? body.bind(context)
	                                         : function() { return body }
	      };

	      return null;
	    };
	  };

	  function local() {
	    var backup = [];
	    var args = Array.prototype.slice.call(arguments);

	    args.forEach(function(change) {
	      if (change === null)
	        return;

	      if (typeof change !== 'object')
	        throw new Error('apply() and local() accepts only object literals');

	      Object.keys(change).forEach(function(key) {
	        var parts = key.split('.'),
	            newValue = change[key],
	            oldValue,
	            isGlobal = parts[0] === '$$global',
	            subContext = isGlobal ? globalCtx : context;

	        if (isGlobal) {
	          parts.shift();
	        }

	        // Dive inside
	        for (var i = 0; i < parts.length - 1; i++) {
	          subContext = subContext[parts[i]];
	        }

	        // Set property and remember old value
	        oldValue = subContext[parts[i]];
	        subContext[parts[i]] = newValue;

	        // Push old value to backup list
	        backup.push({
	          isGlobal: isGlobal,
	          key: parts,
	          value: oldValue
	        });
	      });
	    });

	    return function bodyHandler(body) {
	      var result = typeof body === 'function' ? body.call(context) : body;

	      // Rollback old values
	      for (var i = backup.length - 1; i >= 0; i--) {
	        var subContext = backup[i].isGlobal ? globalCtx : context,
	            change = backup[i];

	        // Dive inside
	        for (var j = 0; j < change.key.length - 1; j++) {
	          subContext = subContext[change.key[j]];
	        }

	        // Restore value
	        subContext[change.key[j]] = change.value;
	      }

	      return result;
	    };
	  };

	  function apply() {
	    return local.apply(this, arguments)(function() {
	      return run(templates, context);
	    });
	  };

	  function applyNext() {
	    return local.apply(this, arguments)(function() {
	      var len = ignore.push(currentId);
	      var ret = run(templates, context);
	      if (len === ignore.length)
	        ignore.pop();
	      return ret;
	    });
	  };

	  function oninit(cb) {
	    if (context.$init) {
	      if (context.$context && !context.$context.resetApplyNext) {
	        context.$context.resetApplyNext = function(context) {
	          context.$ignore.length = 0;
	        };
	      }

	      cb(exports, context.$context);
	    }
	  }

	  function fetch(name) {
	    var parts = name.split('.'),
	        value = globalCtx;

	    // Dive inside
	    for (var i = 0; i < parts.length; i++) {
	      value = value[parts[i]];
	    }

	    return value;
	  }

	  function set(name, val) {
	    var parts = name.split('.'),
	        value = globalCtx;

	    // Dive inside
	    for (var i = 0; i < parts.length - 1; i++) {
	      value = value[parts[i]];
	    }
	    value[parts[i]] = val;

	    return value;
	  };

	  templates.call(context, template, local, apply, applyNext, oninit, fetch,
	                 set);

	  if (!last) {
	    if (context.$init) return;
	    throw new Error('Match failed');
	  }

	  return last.body();
	};

	utils.cloneAst = function cloneAst(ast) {
	  if (ast === null || ast === undefined ||
	      typeof ast === 'number' || typeof ast === 'string' ||
	      typeof ast === 'boolean' || ast instanceof RegExp) {
	    return ast;
	  }
	  if (Array.isArray(ast)) return ast.map(cloneAst);

	  var res = {};
	  Object.keys(ast).forEach(function(key) {
	    res[key] = cloneAst(ast[key]);
	  })

	  return res;
	};

	var visitorKeys = estraverse.VisitorKeys;

	var identifyMap = {
	  AssignmentExpression: function(ast) {
	    return ast.operator;
	  },
	  BinaryExpression: function(ast) {
	    return ast.operator;
	  },
	  FunctionDeclaration: function(ast) {
	    return ast.generator + ':' + ast.expression;
	  },
	  FunctionExpression: function(ast) {
	    return ast.generator + ':' + ast.expression;
	  },
	  Identifier: function(ast) {
	    return ast.name;
	  },
	  Literal: function(ast) {
	    return JSON.stringify(ast.value);
	  },
	  MemberExpression: function(ast) {
	    return ast.computed;
	  },
	  Property: function(ast) {
	    return ast.kind;
	  },
	  UnaryExpression: function(ast) {
	    return ast.operator + ':' + ast.prefix;
	  },
	  UpdateExpression: function(ast) {
	    return ast.prefix;
	  },
	  VariableDeclaration: function(ast) {
	    return ast.kind;
	  }
	};

	utils.identify = identify;
	function identify(ast) {
	  if (!ast)
	    return '';
	  if (Array.isArray(ast))
	    return '[' + ast.map(identify).join(',') + ']';

	  var t = ast.type;
	  var out = '{' + t;
	  var map = identifyMap[t];
	  if (map)
	    out += ':' + map(ast);

	  var keys = visitorKeys[t];
	  if (keys.length)
	    out += '->';
	  for (var i = 0; i < keys.length; i++) {
	    if (i !== 0)
	      out += ',';
	    out += identify(ast[keys[i]]);
	  }

	  out += '}';
	  return out;
	};

	utils.isLiteral = function isLiteral(ast) {
	  if (ast.type === 'Literal')
	    return true;

	  if (ast.type === 'Identifier' && ast.name === 'undefined')
	    return true;

	  if (ast.type === 'ObjectExpression') {
	    return ast.properties.every(function(prop) {
	      return isLiteral(prop.value);
	    });
	  }

	  if (ast.type === 'ArrayExpression') {
	    return ast.elements.every(function(elem) {
	      return isLiteral(elem);
	    });
	  }

	  return false;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var xjst = __webpack_require__(10),
	    q = __webpack_require__(22),
	    fs = {};

	//
	// ### function run (options)
	// #### @options {Object} Compiler options
	// Compiles input stream or file and writes result to output stream or file
	//
	exports.run = function run(options) {
	  var input = [],
	      deferred = q.defer();

	  options.input.on('data', function(chunk) {
	    input.push(chunk);
	  });

	  options.input.once('end', function() {
	    finish(input.join(''));
	  });

	  options.input.resume();

	  function finish(source) {
	    var out = xjst.generate(source, options);

	    options.output.write(out);

	    if (options.output === process.stdout) {
	      options.output.write('\n');
	    } else {
	      options.output.end();
	    }

	    deferred.resolve();
	  }

	  return deferred.promise;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var xjst = __webpack_require__(10);

	exports.generate = function generate(code, options) {
	  return xjst.compiler.create(options).generate(code);
	};

	exports.compile = function compile(code, options) {
	  return xjst.compiler.create(options).compile(code);
	};

	exports.translate = function translate(ast, code, options) {
	  if (typeof code !== 'string') {
	    options = code;
	    code = null;
	  }
	  return xjst.compiler.create(options).translate(ast, code);
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(20);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(23);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(21)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Entities
	exports.Predicate = __webpack_require__(18).Predicate;
	exports.GenericBody = __webpack_require__(18).GenericBody;
	exports.Body = __webpack_require__(18).Body;
	exports.Template = __webpack_require__(18).Template;
	exports.Map = __webpack_require__(18).Map;
	exports.Group = __webpack_require__(18).Group;
	exports.Pair = __webpack_require__(18).Pair;

	// Helpers
	exports.Jailer = __webpack_require__(19).Jailer;
	exports.Inliner = __webpack_require__(19).Inliner;
	exports.Splitter = __webpack_require__(19).Splitter;
	exports.MapFlattener = __webpack_require__(19).MapFlattener;

	// Base
	exports.Compiler = __webpack_require__(17).Compiler;

	// API method
	exports.create = __webpack_require__(17).create;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var esprima = __webpack_require__(8),
	    uglify = __webpack_require__(5),
	    estraverse = __webpack_require__(9),
	    vm = __webpack_require__(7),
	    util = __webpack_require__(14),
	    assert = __webpack_require__(6);

	var xjst = __webpack_require__(10);
	var compiler = __webpack_require__(15);

	// Get required constructors
	var Inliner = compiler.Inliner;
	var Splitter = compiler.Splitter;
	var MapFlattener = compiler.MapFlattener;
	var Jailer = compiler.Jailer;
	var Template = compiler.Template;
	var Predicate = compiler.Predicate;
	var Group = compiler.Group;
	var Map = compiler.Map;
	var utils = xjst.utils;

	// Compiler constructor
	function Compiler(options) {
	  this.options = options || {};

	  this.code = null;
	  this.idHash = {};
	  this.revIdHash = {};
	  this.scores = {};
	  this.idCount = 0;
	  this.bodyId = 1;
	  this.bodyUid = 0;
	  this.mapId = 1;
	  this.applyNext = {
	    value: 0,
	    count: 0,
	    prop: null
	  };

	  this.ctx = { type: 'Identifier', name: '__$ctx' };
	  this.ref = { type: 'Identifier', name: '__$ref' };

	  this.renderStack = [];
	  this.renderHistory = [];
	  this.renderCacheMap = {};
	  this.sharedBodies = {};
	  this.maps = {};

	  // Context extensions from local({}) stmts
	  this.extensions = {};

	  // Global vars from local(null, {})
	  this.globals = {};
	  if (this.options.globals) {
	    Object.keys(this.options.globals).forEach(function(name) {
	      return this.globals['$$' + name] = this.options.globals[name];
	    }, this);
	  }
	  this.globalInit = {};
	  if (this.options.globalInit) {
	    Object.keys(this.options.globalInit).forEach(function(name) {
	      return this.globalInit['$$' + name] = this.options.globalInit[name];
	    }, this);
	  }

	  this.program = null;
	  this.inputProgram = null;

	  this.jailer = Jailer.create();
	  this.inliner = Inliner.create();
	  this.splitter = Splitter.create(this);
	  this.flattener = MapFlattener.create(this);
	};
	exports.Compiler = Compiler;

	exports.create = function create(options) {
	  return new Compiler(options);
	};

	// Generate source code from input code
	Compiler.prototype.generate = function generate(code) {
	  if (this.options['no-opt'] || this.options.optimize === false) {
	    return '/// -------------------------------------\n' +
	           '/// ---------- Bootstrap start ----------\n' +
	           '/// -------------------------------------\n' +
	           'var __$$globalCtx = ' +
	               JSON.stringify(this.options.globals || {}) + ';\n' +
	           utils.run.toString() + ';\n' +
	           'exports.apply = function apply(ctx) {\n' +
	           '  try {\n' +
	           '    return applyc(ctx || this);\n' +
	           '  } catch (e) {\n' +
	           '    e.xjstContext = ctx || this;\n' +
	           '    throw e;\n' +
	           '  }\n' +
	           '};' +
	           'function applyc(ctx) {\n' +
	           '  return run(templates, ctx);\n' +
	           '};\n' +
	           'try {\n' +
	           '  applyc({\n' +
	           '    $init: true,\n' +
	           '    $exports: exports,\n' +
	           '    $context: {\n' +
	           '      recordExtensions: function() {}\n' +
	           '    }\n' +
	           '  });\n' +
	           '} catch (e) {\n' +
	           '  // Just ignore any errors\n' +
	           '}\n' +
	           'function templates(template, local, apply, applyNext, oninit, ' +
	                              '__$$fetch, __$$set) {\n' +
	           '/// -------------------------------------\n' +
	           '/// ---------- Bootstrap end ------------\n' +
	           '/// -------------------------------------\n' +
	           '\n' +
	           '/// -------------------------------------\n' +
	           '/// ---------- User code start ----------\n' +
	           '/// -------------------------------------\n' +
	           code +
	           '/// -------------------------------------\n' +
	           '/// ---------- User code end ------------\n' +
	           '/// -------------------------------------\n' +
	           '};';
	  }

	  var ast = esprima.parse(code, {
	    loc: true
	  });
	  assert.equal(ast.type, 'Program');

	  ast = this.translate(ast, code);

	  var uast = uglify.AST_Node.from_mozilla_ast(ast);

	  return uast.print_to_string({
	    beautify: this.options.beautify === false ? false : true
	  });
	};

	// Compile source to js function
	Compiler.prototype.compile = function compile(code) {
	  var out = this.generate(code),
	      exports = {};

	  vm.runInNewContext(
	    '(function(exports, console) {\n' +
	    out +
	    '\n})(exports, console)',
	    {
	      exports: exports,
	      console: console
	    }
	  );

	  return exports;
	};

	Compiler.prototype.getNodeLine = function getNodeLine(node) {
	  if (!this.code || !node.loc)
	    return '';

	  var loc = node.loc.start;
	  var lines = this.code.split(/\r\n|\r|\n/g);
	  var line = lines[loc.line - 1];
	  var arrow = '';
	  for (var i = 0; i < loc.column; i++)
	    arrow += ' ';
	  arrow += '^';

	  return ' at ' + loc.line + ':' + loc.column + '\n' + line + '\n' + arrow;
	};

	Compiler.prototype.assert = function assert(node, cond, text) {
	  if (cond)
	    return;

	  if (!text)
	    text = 'Assertion failed';
	  throw new Error(text + this.getNodeLine(node));
	};

	Compiler.prototype.assertEqual = function assertEqual(node, lhs, rhs, text) {
	  if (lhs === rhs)
	    return;

	  if (!text)
	    text = 'Expected ' + rhs + ', but got ' + lhs;
	  throw new Error(text + this.getNodeLine(node));
	};

	// Run compiler in phases to translate AST to AST
	Compiler.prototype.translate = function translate(ast, code) {
	  if (code)
	    this.code = code;

	  // 1. Get all template()() invokations (and other chunks of code)
	  var program = this.getTemplates(ast);

	  // 2. Transform template predicates in a compiler-readable form
	  program.templates = program.templates.map(this.transformTemplates.bind(this));

	  var result = this._translate2(program, false);

	  // Prevent apply inlinings
	  this.inlineDepth = this.maxInlineDepth;

	  // 3.  Add maps to result
	  // NOTE: this could possibly generate more shared bodies,
	  // so order is important here.
	  this.addMaps(result);

	  // 4. Add shared bodies to result
	  this.addBodies(result);

	  // 5. Inline function expressions
	  result = this.inliner.inline(result);

	  // 6. Split big functions into small ones
	  result = this.splitter.split(result);

	  return result;
	};

	Compiler.prototype._translate2 = function translate2(program, bodyOnly) {
	  var cacheKey = this._renderCacheKey(program.templates);
	  var res = this.probeRenderCache(cacheKey);
	  if (res && bodyOnly) return xjst.utils.cloneAst(res);

	  var old = this.program;

	  this.program = program;
	  this.inputProgram = this.inputProgram || program;
	  this.inlineDepth++;

	  // Save render stack from enemies
	  var oldRender = { stack: this.renderStack, history: this.renderHistory };
	  this.renderStack = [];
	  this.renderHistory = [];

	  // Roll-out local() and apply/applyNext() calls
	  program.templates.forEach(function(template) {
	    template.rollOut();
	  });

	  // Group templates
	  program.templates = this.sortGroup(program.templates);

	  // Flatten maps (disable for now)
	  // program.templates = this.flattener.flatten(program.templates);

	  // Restore `this.program`
	  this.program = old;

	  // Render program back to AST form
	  var res = this.render(program, bodyOnly);

	  // Restore render stack
	  this.renderStack = oldRender.stack;
	  this.renderHistory = oldRender.history;

	  // Restore inline depth
	  this.inlineDepth--;

	  this.renderCache(cacheKey, res);
	  return res;
	};

	// Filter out templates from program's body
	Compiler.prototype.getTemplates = function getTemplates(ast) {
	  var other = [],
	      init = [];

	  return {
	    templates: ast.body.filter(function(stmt) {
	      function fail() {
	        other.push(stmt);
	        return false;
	      };

	      if (stmt.type !== 'ExpressionStatement') return fail();

	      var expr = stmt.expression;
	      if (expr.type !== 'CallExpression') return fail();

	      var callee = expr.callee;
	      if (callee.type === 'CallExpression') {
	        if (callee.callee.type !== 'Identifier' ||
	            callee.callee.name !== 'template') {
	          return fail();
	        }
	      } else if (callee.type === 'Identifier' && callee.name === 'oninit') {
	        init = init.concat(expr.arguments);
	        return false;
	      } else {
	        return fail();
	      }

	      return true;
	    }).reverse(),
	    init: init,
	    other: other
	  };
	};

	// Get unique id for a javascript value
	Compiler.prototype.getId = function getId(value) {
	  var key = utils.identify(value);

	  if (this.idHash.hasOwnProperty(key)) {
	    this.idHash[key].score++;
	    return this.idHash[key].id;
	  }

	  var id = this.idCount++;
	  this.idHash[key] = { id: id, key: key, value: value, score: 0 };
	  this.revIdHash[id] = this.idHash[key];

	  return id;
	};

	Compiler.prototype.accountScore = function accountScore(key, value) {
	  if (!this.scores.hasOwnProperty(key)) {
	    this.scores[key] = { count: 0, variance: 0, values: {} };
	  }

	  var item = this.scores[key];
	  item.count++;
	  if (!item.values.hasOwnProperty(value)) {
	    item.values[value] = 1;
	    item.variance++;
	  } else {
	    item.values[value]++;
	  }
	};

	// Get score for unique javascript value
	Compiler.prototype.getScore = function getScore(id) {
	  var bump = 0;
	  if (this.options.scoreFilter) {
	    var value = this.revIdHash[id] || '';
	    bump = this.options.scoreFilter(value.value, value.score, value.key);
	  }
	  if (!this.scores.hasOwnProperty(id)) return bump + 0;

	  return bump + this.scores[id].count;
	};

	// Return unique applyNext flag
	Compiler.prototype.getApplyNext = function getApplyNext() {
	  // Overflow
	  if (this.applyNext.value === 1073741824 || this.applyNext.value === 0) {
	    this.applyNext.value = 1;
	    this.applyNext.prop = {
	      type: 'Identifier',
	      name: '__$a' + this.applyNext.count++
	    };
	  }

	  var value = {
	    type: 'Literal',
	    value: this.applyNext.value
	  };
	  this.applyNext.value <<= 1;

	  return { prop: this.applyNext.prop, value: value };
	};

	Compiler.prototype.sanitize = function sanitize(stmt) {
	  return this.replaceThis(stmt);
	};

	// Replace `this` with `__$ctx`
	Compiler.prototype.replaceThis = function replaceThis(stmt) {
	  var ctx = this.ctx;
	  return estraverse.replace(stmt, {
	    enter: function(node, parent, notify) {
	      if (node.type === 'ThisExpression') {
	        return ctx;
	      } else if (node.type === 'FunctionDeclaration' ||
	                 node.type === 'FunctionExpression') {
	        this.skip();
	      }
	    }
	  });
	};

	Compiler.prototype.replaceFetch = function replaceFetch(stmt) {
	  var self = this;
	  return estraverse.replace(stmt, {
	    enter: function(node, parent, notify) {
	      if (node.type === 'CallExpression' &&
	          node.callee.type === 'Identifier') {
	        var name = node.callee.name;
	        if (name !== '__$$fetch' && name !== '__$$set')
	          return;

	        if (name === '__$$fetch')
	          self.assertEqual(node, node.arguments.length, 1, 'Invalid arg cnt');
	        else
	          self.assertEqual(node, node.arguments.length, 2, 'Invalid arg cnt');
	        self.assertEqual(node.arguments[0], node.arguments[0].type, 'Literal');
	        self.assertEqual(node.arguments[0],
	                         typeof node.arguments[0].value,
	                         'string');

	        var id = self.fetchGlobal(node.arguments[0].value);

	        if (name === '__$$fetch') {
	          return id;
	        } else {
	          return {
	            type: 'AssignmentExpression',
	            operator: '=',
	            left: id,
	            right: node.arguments[1]
	          };
	        }
	      }
	    }
	  });
	};

	Compiler.prototype.jailVars = function jailVars(stmt) {
	  return this.jailer.jail(stmt);
	};

	Compiler.prototype.addChange = function addChange(predicate) {
	  var predicates = Array.isArray(predicate) ? predicate : [ predicate ];

	  this.renderHistory.push(predicates.length);
	  for (var i = 0; i < predicates.length; i++) {
	    this.renderStack.push(predicates[i]);
	  }
	};

	Compiler.prototype.revertChange = function revertChange() {
	  if (this.renderHistory.length === 0) throw new Error('Render OOB');
	  var n = this.renderHistory.pop();
	  for (var i = 0; i < n; i++) {
	    this.renderStack.pop();
	  }
	};

	Compiler.prototype.registerBody = function registerBody(body) {
	  if (body.shareable && this.sharedBodies.hasOwnProperty(body.id)) {
	    this.shareBody(body);
	    return true;
	  }
	  if (body.shareable && body.primitive) {
	    this.shareBody(body);
	    return true;
	  }

	  return false;
	};

	Compiler.prototype.shareBody = function shareBody(body) {
	  assert(body.shareable);
	  body.id = body.id === null ? this.bodyId++ : body.id;
	  this.sharedBodies[body.id] = body;
	};

	Compiler.prototype.unshareBody = function unshareBody(body) {
	  assert(body.shareable);
	  delete this.sharedBodies[body.id];
	};

	Compiler.prototype._renderCacheKey = function _renderCacheKey(templates) {
	  return templates.map(function(t) {
	    return t.uid.toString(36);
	  }).join(':');
	};

	Compiler.prototype.probeRenderCache = function probeRenderCache(key) {
	  return this.renderCacheMap[key];
	};

	Compiler.prototype.renderCache = function renderCache(key, body) {
	  this.renderCacheMap[key] = body;
	};

	Compiler.prototype.addBodies = function addBodies(result) {
	  var changed = true,
	      visited = {};

	  while (changed) {
	    changed = false;
	    Object.keys(this.sharedBodies).forEach(function(id) {
	      if (visited.hasOwnProperty(id)) return;
	      visited[id] = true;
	      changed = true;

	      var body = this.sharedBodies[id];
	      assert.equal(body.id, id);

	      var out = body.render(true).apply;
	      out = Array.isArray(out) ? out.slice() : [out];

	      // Optimization:
	      // If last statement isn't return - return
	      if (out.length === 0 || out[out.length - 1].type !== 'ReturnStatement') {
	        out = out.concat({
	          type: 'ReturnStatement',
	          argument: this.ref
	        });
	      }

	      result.body.push({
	        type: 'FunctionDeclaration',
	        id: this.getBodyName(body),
	        params: [ this.ctx, this.ref ],
	        defaults: [],
	        rest: null,
	        generator: false,
	        expression: false,
	        body: {
	          type: 'BlockStatement',
	          body: out
	        }
	      });
	    }, this);
	  }
	};

	Compiler.prototype.registerMap = function registerMap(map) {
	  if (map.id) return;
	  map.id = this.mapId++;
	  this.maps[map.id] = map;
	};

	Compiler.prototype.addMaps = function addMaps(result) {
	  Object.keys(this.maps).forEach(function(id) {
	    var map = this.maps[id];
	    result.body.push(map.getMap());
	  }, this);
	};

	Compiler.prototype.getBodyName = function getBodyName(body) {
	  assert(body.shared);
	  assert(this.sharedBodies.hasOwnProperty(body.id));
	  return { type: 'Identifier', name: '__$b' + body.id };
	};

	Compiler.prototype.getMapName = function getMapName(map) {
	  assert(this.maps.hasOwnProperty(map.id));
	  return { type: 'Identifier', name: '__$m' + map.id };
	};

	Compiler.prototype.renderArray = function renderArray(bodies) {
	  var out = { apply: [], other: [], init: [] };

	  bodies.forEach(function(body) {
	    var ast = body.render();
	    if (ast.apply) out.apply = out.apply.concat(ast.apply);
	    if (ast.other) out.other = ast.other.concat(out.other);
	    if (ast.init) out.init = out.init.concat(ast.init);
	  }, this);

	  return out;
	};

	Compiler.prototype.checkRef = function checkRef(expr) {
	  var self = this;
	  var res = { type: 'Identifier', name: '__$r' };

	  function cantBeRef(value) {
	    if (value.type === 'Literal' ||
	        value.type === 'ObjectExpression' ||
	        value.type === 'ArrayExpression') {
	      return true;
	    }

	    if (value.type === 'ExpressionStatement')
	      return cantBeRef(value.expression);

	    if (value.type === 'BinaryExpression')
	      return cantBeRef(value.left) && cantBeRef(value.right);

	    if (value.type === 'CallExpression')
	      return false;

	    if (value.type === 'Identifier' && value.name !== 'undefined')
	      return false;

	    return true;
	  }

	  // Fastest case, just literal
	  if (!expr || cantBeRef(expr))
	    return { apply: [{ type: 'ReturnStatement', argument: expr }] };

	  // Simple case
	  // if (expr !== __$ref) return expr;
	  if (expr.type === 'Identifier') {
	    return {
	      apply: [{
	        type: 'IfStatement',
	        test: {
	          type: 'BinaryExpression',
	          operator: '!==',
	          left: expr,
	          right: this.ref
	        },
	        consequent: {
	          type: 'ReturnStatement',
	          argument: expr
	        },
	        alternate: null
	      }]
	    };
	  }

	  // var __$r = expr
	  // if (__$r !== __$ref) return __$r;
	  return {
	    apply: [{
	      type: 'VariableDeclaration',
	      kind: 'var',
	      declarations: [{
	        type: 'VariableDeclarator',
	        id: res,
	        init: expr
	      }]
	    }, {
	      type: 'IfStatement',
	      test: {
	        type: 'BinaryExpression',
	        operator: '!==',
	        left: res,
	        right: this.ref
	      },
	      consequent: {
	        type: 'ReturnStatement',
	        argument: res
	      },
	      alternate: null
	    }]
	  };
	};

	// Transform AST templates into readable form
	Compiler.prototype.transformTemplates = function transformTemplates(template) {
	  var expr = template.expression,
	      predicates = expr.callee.arguments,
	      body = expr.arguments[0] || { type: 'Identifier', name: 'undefined' };

	  this.assert(body,
	              body.type === 'FunctionExpression' || utils.isLiteral(body),
	             'Only literal or function is allowed in template\'s body');

	  function isConst(val) {
	    return val.type === 'Literal';
	  }

	  // Translate all predicates to `a === c` form
	  // and map as { expr, value } pair
	  predicates = predicates.map(function(pred) {
	    var expr,
	        value;

	    if (pred.type === 'FunctionExpression') {
	      if (pred.body.body.length === 1 &&
	          pred.body.body[0].type === 'ReturnStatement') {
	        pred = pred.body.body[0].argument;
	      } else {
	        pred = {
	          type: 'CallExpression',
	          callee: {
	            type: 'MemberExpression',
	            computed: false,
	            object: pred,
	            property: { type: 'Identifier', name: 'call' }
	          },
	          arguments: [ { type: 'ThisExpression'} ]
	        };
	      }
	    }

	    if (pred.type === 'BinaryExpression' && pred.operator === '===') {
	      if (isConst(pred.right)) {
	        // expr === const
	        expr = pred.left;
	        value = pred.right;
	      } else {
	        // const === expr
	        expr = pred.right;
	        value = pred.left;
	      }
	    } else {
	      // expr <=> !(expr) === false
	      expr = {
	        type: 'UnaryExpression',
	        prefix: true,
	        operator: '!',
	        argument: pred
	      };
	      value = { type: 'Literal', value: false };
	    }

	    return new Predicate(this, expr, value);
	  }, this);

	  return new Template(this, predicates, body);
	};

	// Sort and group templates by first predicate
	// (recursively)
	Compiler.prototype.sortGroup = function sortGroup(templates) {
	  var self = this,
	      out = templates.slice();

	  // Sort predicates in templates by popularity
	  templates.forEach(function(template) {
	    template.predicates.sort(function(a, b) {
	      return b.getScore() - a.getScore();
	    });
	  });

	  var groups = [];

	  // Group templates by first predicate
	  groups.push(templates.reduce(function(acc, template) {
	    if (acc.length === 0) return [ template ];

	    if (template.predicates.length === 0 ||
	        acc[0].predicates.length === 0 ||
	        acc[0].predicates[0].id !== template.predicates[0].id) {
	      groups.push(acc);
	      return [ template ];
	    }

	    acc.push(template);
	    return acc;
	  }, []));

	  // Create `Group` instance for each group and .sortGroup() them again
	  out = groups.reduce(function(acc, group) {
	    if (group.length <= 1) return acc.concat(group);

	    // Remove first predicate
	    var pairs = group.map(function(member) {
	      return { predicate: member.predicates.shift(), body: member };
	    });

	    // Pairs all have the same predicate,
	    // find pairs with same constant and .sortGroup() them too
	    var subgroups = {};
	    pairs.forEach(function(pair) {
	      var id = pair.predicate.valueId;
	      if (!subgroups[id]) {
	        subgroups[id] = [ pair ];
	      } else {
	        subgroups[id].push(pair);
	      }
	    });

	    // Sort group each subgroup again
	    pairs = Object.keys(subgroups).reduce(function(acc, key) {
	      var subgroup = subgroups[key];
	      if (subgroup.length === 0) return acc;

	      var predicate = subgroup[0].predicate;
	      acc.push({
	        predicate: predicate,
	        bodies: self.sortGroup(subgroup.map(function(member) {
	          return member.body;
	        }))
	      });

	      return acc;
	    }, []);

	    return acc.concat(new Group(self, pairs));
	  }, []);

	  return out;
	};

	Compiler.prototype.fetchGlobal = function fetchGlobal(name) {
	  var parts = name.split('.');
	  var parent = '$$' + parts[0];

	  if (!this.globals.hasOwnProperty(parent) && parent !== '__proto__')
	    this.globals[parent] = null;

	  var ret = { type: 'Identifier', name: parent };
	  for (var i = 1; i < parts.length; i++) {
	    ret = {
	      type: 'MemberExpression',
	      computed: true,
	      object: ret,
	      property: { type: 'Literal', value: parts[i] }
	    };
	  }

	  return ret;
	};

	Compiler.prototype.registerExtension = function registerExtension(name) {
	  if (name !== '__proto__')
	    this.extensions[name] = true;
	};

	Compiler.prototype.getRecordExtensions = function getRecordExtensions() {
	  var ctx = { type: 'Identifier', name: 'ctx' };
	  var body = [];

	  Object.keys(this.extensions).forEach(function(name) {
	    body.push({
	      type: 'ExpressionStatement',
	      expression: {
	        type: 'AssignmentExpression',
	        operator: '=',
	        left: {
	          type: 'MemberExpression',
	          computed: true,
	          object: ctx,
	          property: { type: 'Literal', value: name }
	        },

	        // Old apply flags should have boolean value
	        // New flags - number
	        // Other - undefined
	        right: /^__\$anflg/.test(name) ? { type: 'Literal', value: false } :
	               /^__\$a\d+$/.test(name) ?
	                  { type: 'Literal', value: 0 } :
	                  { type: 'Identifier', name: 'undefined' }
	      }
	    });
	  }, this);

	  return {
	    type: 'FunctionExpression',
	    id: null,
	    params: [ ctx ],
	    defaults: [],
	    rest: null,
	    generator: false,
	    expression: false,
	    body: {
	      type: 'BlockStatement',
	      body: body
	    }
	  };
	};

	Compiler.prototype.getResetApplyNext = function getResetApplyNext() {
	  var ctx = { type: 'Identifier', name: 'ctx' };
	  var body = [];

	  for (var i = 0; i < this.applyNext.count; i++) {
	    body.push({
	      type: 'ExpressionStatement',
	      expression: {
	        type: 'AssignmentExpression',
	        operator: '=',
	        left: {
	          type: 'MemberExpression',
	          computed: true,
	          object: ctx,
	          property: { type: 'Literal', value: '__$a' + i }
	        },
	        right: { type: 'Literal', value: 0 }
	      }
	    });
	  }

	  return {
	    type: 'FunctionExpression',
	    id: null,
	    params: [ ctx ],
	    defaults: [],
	    rest: null,
	    generator: false,
	    expression: false,
	    body: {
	      type: 'BlockStatement',
	      body: body
	    }
	  };
	};

	Compiler.prototype.render = function render(program, bodyOnly) {
	  var stmts = [],
	      initializers = program.init.slice(),
	      applyBody = program.other.map(function(stmt) {
	        return this.replaceFetch(this.sanitize(stmt));
	      }, this),
	      applyContext = {
	        type: 'LogicalExpression',
	        operator: '||',
	        left: { type: 'Identifier', name: 'ctx' },
	        right: { type: 'ThisExpression' }
	      },
	      apply = {
	        type: 'FunctionDeclaration',
	        id: { type: 'Identifier', name: 'apply' },
	        params: [{ type: 'Identifier', name: 'ctx' }],
	        defaults: [],
	        rest: null,
	        generator: false,
	        expression: false,
	        body: {
	          type: 'BlockStatement',
	          body: [{
	            type: 'TryStatement',
	            block: {
	              type: 'BlockStatement',
	              body: [{
	                type: 'ReturnStatement',
	                argument: {
	                  type: 'CallExpression',
	                  callee: { type: 'Identifier', name: 'applyc' },
	                  arguments: [{ type: 'Identifier', name: 'ctx' }, this.ref]
	                }
	              }]
	            },
	            guardedHandlers: [],
	            handlers: [{
	              type: 'CatchClause',
	              param: { type: 'Identifier', name: 'e' },
	              body: {
	                type: 'BlockStatement',
	                body: [{
	                  type: 'ExpressionStatement',
	                  expression: {
	                    type: 'AssignmentExpression',
	                    operator: '=',
	                    left: {
	                      type: 'MemberExpression',
	                      computed: false,
	                      object: { type: 'Identifier', name: 'e' },
	                      property: { type: 'Identifier', name: 'xjstContext' }
	                    },
	                    right: { type: 'Identifier', name: 'ctx' }
	                  }
	                }, {
	                  type: 'ThrowStatement',
	                  argument: { type: 'Identifier', name: 'e' }
	                }]
	              }
	            }],
	            finalizer: null
	          }]
	        }
	      },
	      applyc = {
	        type: 'FunctionDeclaration',
	        id: { type: 'Identifier', name: 'applyc' },
	        params: [ this.ctx, this.ref ],
	        defaults: [],
	        rest: null,
	        generator: false,
	        expression: false,
	        body: {
	          type: 'BlockStatement',
	          body: null
	        }
	      };

	  // var __$ref = {};
	  stmts.push({
	    type: 'VariableDeclaration',
	    kind: 'var',
	    declarations: [{
	      type: 'VariableDeclarator',
	      id: this.ref,
	      init: { type: 'ObjectExpression', properties: [] }
	    }]
	  });

	  // exports.apply = apply
	  stmts.push(apply);
	  stmts.push({
	    type: 'ExpressionStatement',
	    expression: {
	      type: 'AssignmentExpression',
	      operator: '=',
	      left: {
	        type: 'MemberExpression',
	        computed: false,
	        object: { type: 'Identifier', name: 'exports' },
	        property: { type: 'Identifier', name: 'apply' }
	      },
	      right: { type: 'Identifier', name: 'apply' }
	    }
	  });

	  // applyc
	  stmts.push(applyc);

	  // Call applyc once to allow users override exports
	  // [init functions].forEach(function(fn) { fn(exports, this) }, ctx);
	  stmts.push({
	    type: 'ExpressionStatement',
	    expression: {
	      type: 'CallExpression',
	      callee: {
	        type: 'MemberExpression',
	        computed: false,
	        property: { type: 'Identifier', name: 'forEach'},
	        object: {
	          type: 'ArrayExpression',
	          elements: initializers
	        }
	      },
	      arguments: [{
	        type: 'FunctionExpression',
	        id: null,
	        params: [ { type: 'Identifier', name: 'fn' } ],
	        defaults: [],
	        rest: null,
	        generator: false,
	        expression: false,
	        body: {
	          type: 'BlockStatement',
	          body: [{
	            type: 'ExpressionStatement',
	            expression: {
	              type: 'CallExpression',
	              callee: { type: 'Identifier', name: 'fn' },
	              arguments: [
	                { type: 'Identifier', name: 'exports' },
	                { type: 'ThisExpression' }
	              ]
	            }
	          }]
	        }
	      }, {
	        type: 'ObjectExpression',
	        properties: [{
	          type: 'Property',
	          key: { type: 'Literal', value: 'recordExtensions' },
	          value: this.getRecordExtensions(),
	          kind: 'init'
	        }, {
	          type: 'Property',
	          key: { type: 'Literal', value: 'resetApplyNext' },
	          value: this.getResetApplyNext(),
	          kind: 'init'
	        }]
	      }]
	    }
	  });

	  // Render each template
	  var out = this.renderArray(program.templates);

	  // global variables
	  var globals = this.globals;
	  var globalInit = this.globalInit;
	  var globalKeys = Object.keys(globals);
	  if (globalKeys.length !== 0) {
	    stmts.unshift({
	      type: 'VariableDeclaration',
	      kind: 'var',
	      declarations: globalKeys.map(function(name) {
	        // Initialize globals from the context if asked
	        if (globalInit[name]) {
	          apply.body.body.unshift({
	            type: 'ExpressionStatement',
	            expression: {
	              type: 'AssignmentExpression',
	              operator: '=',
	              left: { type: 'Identifier', name: name },
	              right: {
	                type: 'MemberExpression',
	                computed: true,
	                object: { type: 'Identifier', name: 'ctx' },
	                property: { type: 'Literal', value: globalInit[name] }
	              }
	            }
	          });
	        }

	        // Declare globals
	        return {
	          type: 'VariableDeclarator',
	          id: { type: 'Identifier', name: name },
	          init: { type: 'Literal', value: globals[name] }
	        };
	      }, this)
	    });
	  }

	  // ctx = ctx || this
	  apply.body.body.unshift({
	    type: 'ExpressionStatement',
	    expression: {
	      type: 'AssignmentExpression',
	      operator: '=',
	      left: { type: 'Identifier', name: 'ctx' },
	      right: applyContext
	    }
	  });

	  /// Apply to the bottom
	  if (out.apply) applyBody = applyBody.concat(out.apply);

	  // Other to the top
	  if (out.other) applyBody = out.other.concat(applyBody);

	  // Initializers to the initializers array
	  if (out.init) {
	    if (Array.isArray(out.init)) {
	      initializers.push.apply(initializers, out.init);
	    } else {
	      initializers.push(out.init);
	    }
	  }

	  if (bodyOnly)
	    return applyBody;

	  // Set function's body
	  applyc.body.body = applyBody;

	  return {
	    type: 'Program',
	    body: stmts
	  };
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports.Predicate = __webpack_require__(24).Predicate;
	exports.GenericBody = __webpack_require__(25).GenericBody;
	exports.Body = __webpack_require__(25).Body;
	exports.Template = __webpack_require__(26).Template;
	exports.Map = __webpack_require__(27).Map;
	exports.Group = __webpack_require__(28).Group;
	exports.Pair = __webpack_require__(29).Pair;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports.Jailer = __webpack_require__(30).Jailer;
	exports.Inliner = __webpack_require__(31).Inliner;
	exports.Splitter = __webpack_require__(32).Splitter;
	exports.MapFlattener = __webpack_require__(33).MapFlattener;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    draining = true;
	    var currentQueue;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        var i = -1;
	        while (++i < len) {
	            currentQueue[i]();
	        }
	        len = queue.length;
	    }
	    draining = false;
	}
	process.nextTick = function (fun) {
	    queue.push(fun);
	    if (!draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// vim:ts=4:sts=4:sw=4:
	/*!
	 *
	 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
	 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
	 *
	 * With parts by Tyler Close
	 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
	 * at http://www.opensource.org/licenses/mit-license.html
	 * Forked at ref_send.js version: 2009-05-11
	 *
	 * With parts by Mark Miller
	 * Copyright (C) 2011 Google Inc.
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

	(function (definition) {
	    // Turn off strict mode for this function so we can assign to global.Q
	    /* jshint strict: false */

	    // This file will function properly as a <script> tag, or a module
	    // using CommonJS and NodeJS or RequireJS module formats.  In
	    // Common/Node/RequireJS, the module exports the Q API and when
	    // executed as a simple <script>, it creates a Q global instead.

	    // Montage Require
	    if (typeof bootstrap === "function") {
	        bootstrap("promise", definition);

	    // CommonJS
	    } else if (true) {
	        module.exports = definition();

	    // RequireJS
	    } else if (typeof define === "function" && define.amd) {
	        define(definition);

	    // SES (Secure EcmaScript)
	    } else if (typeof ses !== "undefined") {
	        if (!ses.ok()) {
	            return;
	        } else {
	            ses.makeQ = definition;
	        }

	    // <script>
	    } else {
	        Q = definition();
	    }

	})(function () {
	"use strict";

	var hasStacks = false;
	try {
	    throw new Error();
	} catch (e) {
	    hasStacks = !!e.stack;
	}

	// All code after this point will be filtered from stack traces reported
	// by Q.
	var qStartingLine = captureLine();
	var qFileName;

	// shims

	// used for fallback in "allResolved"
	var noop = function () {};

	// Use the fastest possible means to execute a task in a future turn
	// of the event loop.
	var nextTick =(function () {
	    // linked list of tasks (single, with head node)
	    var head = {task: void 0, next: null};
	    var tail = head;
	    var flushing = false;
	    var requestTick = void 0;
	    var isNodeJS = false;

	    function flush() {
	        /* jshint loopfunc: true */

	        while (head.next) {
	            head = head.next;
	            var task = head.task;
	            head.task = void 0;
	            var domain = head.domain;

	            if (domain) {
	                head.domain = void 0;
	                domain.enter();
	            }

	            try {
	                task();

	            } catch (e) {
	                if (isNodeJS) {
	                    // In node, uncaught exceptions are considered fatal errors.
	                    // Re-throw them synchronously to interrupt flushing!

	                    // Ensure continuation if the uncaught exception is suppressed
	                    // listening "uncaughtException" events (as domains does).
	                    // Continue in next event to avoid tick recursion.
	                    if (domain) {
	                        domain.exit();
	                    }
	                    setTimeout(flush, 0);
	                    if (domain) {
	                        domain.enter();
	                    }

	                    throw e;

	                } else {
	                    // In browsers, uncaught exceptions are not fatal.
	                    // Re-throw them asynchronously to avoid slow-downs.
	                    setTimeout(function() {
	                       throw e;
	                    }, 0);
	                }
	            }

	            if (domain) {
	                domain.exit();
	            }
	        }

	        flushing = false;
	    }

	    nextTick = function (task) {
	        tail = tail.next = {
	            task: task,
	            domain: isNodeJS && process.domain,
	            next: null
	        };

	        if (!flushing) {
	            flushing = true;
	            requestTick();
	        }
	    };

	    if (typeof process !== "undefined" && process.nextTick) {
	        // Node.js before 0.9. Note that some fake-Node environments, like the
	        // Mocha test runner, introduce a `process` global without a `nextTick`.
	        isNodeJS = true;

	        requestTick = function () {
	            process.nextTick(flush);
	        };

	    } else if (typeof setImmediate === "function") {
	        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
	        if (typeof window !== "undefined") {
	            requestTick = setImmediate.bind(window, flush);
	        } else {
	            requestTick = function () {
	                setImmediate(flush);
	            };
	        }

	    } else if (typeof MessageChannel !== "undefined") {
	        // modern browsers
	        // http://www.nonblocking.io/2011/06/windownexttick.html
	        var channel = new MessageChannel();
	        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
	        // working message ports the first time a page loads.
	        channel.port1.onmessage = function () {
	            requestTick = requestPortTick;
	            channel.port1.onmessage = flush;
	            flush();
	        };
	        var requestPortTick = function () {
	            // Opera requires us to provide a message payload, regardless of
	            // whether we use it.
	            channel.port2.postMessage(0);
	        };
	        requestTick = function () {
	            setTimeout(flush, 0);
	            requestPortTick();
	        };

	    } else {
	        // old browsers
	        requestTick = function () {
	            setTimeout(flush, 0);
	        };
	    }

	    return nextTick;
	})();

	// Attempt to make generics safe in the face of downstream
	// modifications.
	// There is no situation where this is necessary.
	// If you need a security guarantee, these primordials need to be
	// deeply frozen anyway, and if you don’t need a security guarantee,
	// this is just plain paranoid.
	// However, this does have the nice side-effect of reducing the size
	// of the code by reducing x.call() to merely x(), eliminating many
	// hard-to-minify characters.
	// See Mark Miller’s explanation of what this does.
	// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
	var call = Function.call;
	function uncurryThis(f) {
	    return function () {
	        return call.apply(f, arguments);
	    };
	}
	// This is equivalent, but slower:
	// uncurryThis = Function_bind.bind(Function_bind.call);
	// http://jsperf.com/uncurrythis

	var array_slice = uncurryThis(Array.prototype.slice);

	var array_reduce = uncurryThis(
	    Array.prototype.reduce || function (callback, basis) {
	        var index = 0,
	            length = this.length;
	        // concerning the initial value, if one is not provided
	        if (arguments.length === 1) {
	            // seek to the first value in the array, accounting
	            // for the possibility that is is a sparse array
	            do {
	                if (index in this) {
	                    basis = this[index++];
	                    break;
	                }
	                if (++index >= length) {
	                    throw new TypeError();
	                }
	            } while (1);
	        }
	        // reduce
	        for (; index < length; index++) {
	            // account for the possibility that the array is sparse
	            if (index in this) {
	                basis = callback(basis, this[index], index);
	            }
	        }
	        return basis;
	    }
	);

	var array_indexOf = uncurryThis(
	    Array.prototype.indexOf || function (value) {
	        // not a very good shim, but good enough for our one use of it
	        for (var i = 0; i < this.length; i++) {
	            if (this[i] === value) {
	                return i;
	            }
	        }
	        return -1;
	    }
	);

	var array_map = uncurryThis(
	    Array.prototype.map || function (callback, thisp) {
	        var self = this;
	        var collect = [];
	        array_reduce(self, function (undefined, value, index) {
	            collect.push(callback.call(thisp, value, index, self));
	        }, void 0);
	        return collect;
	    }
	);

	var object_create = Object.create || function (prototype) {
	    function Type() { }
	    Type.prototype = prototype;
	    return new Type();
	};

	var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

	var object_keys = Object.keys || function (object) {
	    var keys = [];
	    for (var key in object) {
	        if (object_hasOwnProperty(object, key)) {
	            keys.push(key);
	        }
	    }
	    return keys;
	};

	var object_toString = uncurryThis(Object.prototype.toString);

	function isObject(value) {
	    return value === Object(value);
	}

	// generator related shims

	// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
	function isStopIteration(exception) {
	    return (
	        object_toString(exception) === "[object StopIteration]" ||
	        exception instanceof QReturnValue
	    );
	}

	// FIXME: Remove this helper and Q.return once ES6 generators are in
	// SpiderMonkey.
	var QReturnValue;
	if (typeof ReturnValue !== "undefined") {
	    QReturnValue = ReturnValue;
	} else {
	    QReturnValue = function (value) {
	        this.value = value;
	    };
	}

	// Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
	// engine that has a deployed base of browsers that support generators.
	// However, SM's generators use the Python-inspired semantics of
	// outdated ES6 drafts.  We would like to support ES6, but we'd also
	// like to make it possible to use generators in deployed browsers, so
	// we also support Python-style generators.  At some point we can remove
	// this block.
	var hasES6Generators;
	try {
	    /* jshint evil: true, nonew: false */
	    new Function("(function* (){ yield 1; })");
	    hasES6Generators = true;
	} catch (e) {
	    hasES6Generators = false;
	}

	// long stack traces

	var STACK_JUMP_SEPARATOR = "From previous event:";

	function makeStackTraceLong(error, promise) {
	    // If possible, transform the error stack trace by removing Node and Q
	    // cruft, then concatenating with the stack trace of `promise`. See #57.
	    if (hasStacks &&
	        promise.stack &&
	        typeof error === "object" &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	        var stacks = [];
	        for (var p = promise; !!p; p = p.source) {
	            if (p.stack) {
	                stacks.unshift(p.stack);
	            }
	        }
	        stacks.unshift(error.stack);

	        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
	        error.stack = filterStackString(concatedStacks);
	    }
	}

	function filterStackString(stackString) {
	    var lines = stackString.split("\n");
	    var desiredLines = [];
	    for (var i = 0; i < lines.length; ++i) {
	        var line = lines[i];

	        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	            desiredLines.push(line);
	        }
	    }
	    return desiredLines.join("\n");
	}

	function isNodeFrame(stackLine) {
	    return stackLine.indexOf("(module.js:") !== -1 ||
	           stackLine.indexOf("(node.js:") !== -1;
	}

	function getFileNameAndLineNumber(stackLine) {
	    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
	    // In IE10 function name can have spaces ("Anonymous function") O_o
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) {
	        return [attempt1[1], Number(attempt1[2])];
	    }

	    // Anonymous functions: "at filename:lineNumber:columnNumber"
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) {
	        return [attempt2[1], Number(attempt2[2])];
	    }

	    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) {
	        return [attempt3[1], Number(attempt3[2])];
	    }
	}

	function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

	    if (!fileNameAndLineNumber) {
	        return false;
	    }

	    var fileName = fileNameAndLineNumber[0];
	    var lineNumber = fileNameAndLineNumber[1];

	    return fileName === qFileName &&
	        lineNumber >= qStartingLine &&
	        lineNumber <= qEndingLine;
	}

	// discover own file name and line number range for filtering stack
	// traces
	function captureLine() {
	    if (!hasStacks) {
	        return;
	    }

	    try {
	        throw new Error();
	    } catch (e) {
	        var lines = e.stack.split("\n");
	        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
	        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	        if (!fileNameAndLineNumber) {
	            return;
	        }

	        qFileName = fileNameAndLineNumber[0];
	        return fileNameAndLineNumber[1];
	    }
	}

	function deprecate(callback, name, alternative) {
	    return function () {
	        if (typeof console !== "undefined" &&
	            typeof console.warn === "function") {
	            console.warn(name + " is deprecated, use " + alternative +
	                         " instead.", new Error("").stack);
	        }
	        return callback.apply(callback, arguments);
	    };
	}

	// end of shims
	// beginning of real work

	/**
	 * Constructs a promise for an immediate reference, passes promises through, or
	 * coerces promises from different systems.
	 * @param value immediate reference or promise
	 */
	function Q(value) {
	    // If the object is already a Promise, return it directly.  This enables
	    // the resolve function to both be used to created references from objects,
	    // but to tolerably coerce non-promises to promises.
	    if (isPromise(value)) {
	        return value;
	    }

	    // assimilate thenables
	    if (isPromiseAlike(value)) {
	        return coerce(value);
	    } else {
	        return fulfill(value);
	    }
	}
	Q.resolve = Q;

	/**
	 * Performs a task in a future turn of the event loop.
	 * @param {Function} task
	 */
	Q.nextTick = nextTick;

	/**
	 * Controls whether or not long stack traces will be on
	 */
	Q.longStackSupport = false;

	/**
	 * Constructs a {promise, resolve, reject} object.
	 *
	 * `resolve` is a callback to invoke with a more resolved value for the
	 * promise. To fulfill the promise, invoke `resolve` with any value that is
	 * not a thenable. To reject the promise, invoke `resolve` with a rejected
	 * thenable, or invoke `reject` with the reason directly. To resolve the
	 * promise to another thenable, thus putting it in the same state, invoke
	 * `resolve` with that other thenable.
	 */
	Q.defer = defer;
	function defer() {
	    // if "messages" is an "Array", that indicates that the promise has not yet
	    // been resolved.  If it is "undefined", it has been resolved.  Each
	    // element of the messages array is itself an array of complete arguments to
	    // forward to the resolved promise.  We coerce the resolution value to a
	    // promise using the `resolve` function because it handles both fully
	    // non-thenable values and other thenables gracefully.
	    var messages = [], progressListeners = [], resolvedPromise;

	    var deferred = object_create(defer.prototype);
	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, operands) {
	        var args = array_slice(arguments);
	        if (messages) {
	            messages.push(args);
	            if (op === "when" && operands[1]) { // progress operand
	                progressListeners.push(operands[1]);
	            }
	        } else {
	            nextTick(function () {
	                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
	            });
	        }
	    };

	    // XXX deprecated
	    promise.valueOf = deprecate(function () {
	        if (messages) {
	            return promise;
	        }
	        var nearerValue = nearer(resolvedPromise);
	        if (isPromise(nearerValue)) {
	            resolvedPromise = nearerValue; // shorten chain
	        }
	        return nearerValue;
	    }, "valueOf", "inspect");

	    promise.inspect = function () {
	        if (!resolvedPromise) {
	            return { state: "pending" };
	        }
	        return resolvedPromise.inspect();
	    };

	    if (Q.longStackSupport && hasStacks) {
	        try {
	            throw new Error();
	        } catch (e) {
	            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
	            // accessor around; that causes memory leaks as per GH-111. Just
	            // reify the stack trace as a string ASAP.
	            //
	            // At the same time, cut off the first line; it's always just
	            // "[object Promise]\n", as per the `toString`.
	            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
	        }
	    }

	    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
	    // consolidating them into `become`, since otherwise we'd create new
	    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

	    function become(newPromise) {
	        resolvedPromise = newPromise;
	        promise.source = newPromise;

	        array_reduce(messages, function (undefined, message) {
	            nextTick(function () {
	                newPromise.promiseDispatch.apply(newPromise, message);
	            });
	        }, void 0);

	        messages = void 0;
	        progressListeners = void 0;
	    }

	    deferred.promise = promise;
	    deferred.resolve = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(Q(value));
	    };

	    deferred.fulfill = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(fulfill(value));
	    };
	    deferred.reject = function (reason) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(reject(reason));
	    };
	    deferred.notify = function (progress) {
	        if (resolvedPromise) {
	            return;
	        }

	        array_reduce(progressListeners, function (undefined, progressListener) {
	            nextTick(function () {
	                progressListener(progress);
	            });
	        }, void 0);
	    };

	    return deferred;
	}

	/**
	 * Creates a Node-style callback that will resolve or reject the deferred
	 * promise.
	 * @returns a nodeback
	 */
	defer.prototype.makeNodeResolver = function () {
	    var self = this;
	    return function (error, value) {
	        if (error) {
	            self.reject(error);
	        } else if (arguments.length > 2) {
	            self.resolve(array_slice(arguments, 1));
	        } else {
	            self.resolve(value);
	        }
	    };
	};

	/**
	 * @param resolver {Function} a function that returns nothing and accepts
	 * the resolve, reject, and notify functions for a deferred.
	 * @returns a promise that may be resolved with the given resolve and reject
	 * functions, or rejected by a thrown exception in resolver
	 */
	Q.promise = promise;
	function promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("resolver must be a function.");
	    }
	    var deferred = defer();
	    try {
	        resolver(deferred.resolve, deferred.reject, deferred.notify);
	    } catch (reason) {
	        deferred.reject(reason);
	    }
	    return deferred.promise;
	}

	// XXX experimental.  This method is a way to denote that a local value is
	// serializable and should be immediately dispatched to a remote upon request,
	// instead of passing a reference.
	Q.passByCopy = function (object) {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return object;
	};

	Promise.prototype.passByCopy = function () {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return this;
	};

	/**
	 * If two promises eventually fulfill to the same value, promises that value,
	 * but otherwise rejects.
	 * @param x {Any*}
	 * @param y {Any*}
	 * @returns {Any*} a promise for x and y if they are the same, but a rejection
	 * otherwise.
	 *
	 */
	Q.join = function (x, y) {
	    return Q(x).join(y);
	};

	Promise.prototype.join = function (that) {
	    return Q([this, that]).spread(function (x, y) {
	        if (x === y) {
	            // TODO: "===" should be Object.is or equiv
	            return x;
	        } else {
	            throw new Error("Can't join: not the same: " + x + " " + y);
	        }
	    });
	};

	/**
	 * Returns a promise for the first of an array of promises to become fulfilled.
	 * @param answers {Array[Any*]} promises to race
	 * @returns {Any*} the first promise to be fulfilled
	 */
	Q.race = race;
	function race(answerPs) {
	    return promise(function(resolve, reject) {
	        // Switch to this once we can assume at least ES5
	        // answerPs.forEach(function(answerP) {
	        //     Q(answerP).then(resolve, reject);
	        // });
	        // Use this in the meantime
	        for (var i = 0, len = answerPs.length; i < len; i++) {
	            Q(answerPs[i]).then(resolve, reject);
	        }
	    });
	}

	Promise.prototype.race = function () {
	    return this.then(Q.race);
	};

	/**
	 * Constructs a Promise with a promise descriptor object and optional fallback
	 * function.  The descriptor contains methods like when(rejected), get(name),
	 * set(name, value), post(name, args), and delete(name), which all
	 * return either a value, a promise for a value, or a rejection.  The fallback
	 * accepts the operation name, a resolver, and any further arguments that would
	 * have been forwarded to the appropriate method above had a method been
	 * provided with the proper name.  The API makes no guarantees about the nature
	 * of the returned object, apart from that it is usable whereever promises are
	 * bought and sold.
	 */
	Q.makePromise = Promise;
	function Promise(descriptor, fallback, inspect) {
	    if (fallback === void 0) {
	        fallback = function (op) {
	            return reject(new Error(
	                "Promise does not support operation: " + op
	            ));
	        };
	    }
	    if (inspect === void 0) {
	        inspect = function () {
	            return {state: "unknown"};
	        };
	    }

	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, args) {
	        var result;
	        try {
	            if (descriptor[op]) {
	                result = descriptor[op].apply(promise, args);
	            } else {
	                result = fallback.call(promise, op, args);
	            }
	        } catch (exception) {
	            result = reject(exception);
	        }
	        if (resolve) {
	            resolve(result);
	        }
	    };

	    promise.inspect = inspect;

	    // XXX deprecated `valueOf` and `exception` support
	    if (inspect) {
	        var inspected = inspect();
	        if (inspected.state === "rejected") {
	            promise.exception = inspected.reason;
	        }

	        promise.valueOf = deprecate(function () {
	            var inspected = inspect();
	            if (inspected.state === "pending" ||
	                inspected.state === "rejected") {
	                return promise;
	            }
	            return inspected.value;
	        });
	    }

	    return promise;
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.then = function (fulfilled, rejected, progressed) {
	    var self = this;
	    var deferred = defer();
	    var done = false;   // ensure the untrusted promise makes at most a
	                        // single call to one of the callbacks

	    function _fulfilled(value) {
	        try {
	            return typeof fulfilled === "function" ? fulfilled(value) : value;
	        } catch (exception) {
	            return reject(exception);
	        }
	    }

	    function _rejected(exception) {
	        if (typeof rejected === "function") {
	            makeStackTraceLong(exception, self);
	            try {
	                return rejected(exception);
	            } catch (newException) {
	                return reject(newException);
	            }
	        }
	        return reject(exception);
	    }

	    function _progressed(value) {
	        return typeof progressed === "function" ? progressed(value) : value;
	    }

	    nextTick(function () {
	        self.promiseDispatch(function (value) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_fulfilled(value));
	        }, "when", [function (exception) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_rejected(exception));
	        }]);
	    });

	    // Progress propagator need to be attached in the current tick.
	    self.promiseDispatch(void 0, "when", [void 0, function (value) {
	        var newValue;
	        var threw = false;
	        try {
	            newValue = _progressed(value);
	        } catch (e) {
	            threw = true;
	            if (Q.onerror) {
	                Q.onerror(e);
	            } else {
	                throw e;
	            }
	        }

	        if (!threw) {
	            deferred.notify(newValue);
	        }
	    }]);

	    return deferred.promise;
	};

	/**
	 * Registers an observer on a promise.
	 *
	 * Guarantees:
	 *
	 * 1. that fulfilled and rejected will be called only once.
	 * 2. that either the fulfilled callback or the rejected callback will be
	 *    called, but not both.
	 * 3. that fulfilled and rejected will not be called in this turn.
	 *
	 * @param value      promise or immediate reference to observe
	 * @param fulfilled  function to be called with the fulfilled value
	 * @param rejected   function to be called with the rejection exception
	 * @param progressed function to be called on any progress notifications
	 * @return promise for the return value from the invoked callback
	 */
	Q.when = when;
	function when(value, fulfilled, rejected, progressed) {
	    return Q(value).then(fulfilled, rejected, progressed);
	}

	Promise.prototype.thenResolve = function (value) {
	    return this.then(function () { return value; });
	};

	Q.thenResolve = function (promise, value) {
	    return Q(promise).thenResolve(value);
	};

	Promise.prototype.thenReject = function (reason) {
	    return this.then(function () { throw reason; });
	};

	Q.thenReject = function (promise, reason) {
	    return Q(promise).thenReject(reason);
	};

	/**
	 * If an object is not a promise, it is as "near" as possible.
	 * If a promise is rejected, it is as "near" as possible too.
	 * If it’s a fulfilled promise, the fulfillment value is nearer.
	 * If it’s a deferred promise and the deferred has been resolved, the
	 * resolution is "nearer".
	 * @param object
	 * @returns most resolved (nearest) form of the object
	 */

	// XXX should we re-do this?
	Q.nearer = nearer;
	function nearer(value) {
	    if (isPromise(value)) {
	        var inspected = value.inspect();
	        if (inspected.state === "fulfilled") {
	            return inspected.value;
	        }
	    }
	    return value;
	}

	/**
	 * @returns whether the given object is a promise.
	 * Otherwise it is a fulfilled value.
	 */
	Q.isPromise = isPromise;
	function isPromise(object) {
	    return isObject(object) &&
	        typeof object.promiseDispatch === "function" &&
	        typeof object.inspect === "function";
	}

	Q.isPromiseAlike = isPromiseAlike;
	function isPromiseAlike(object) {
	    return isObject(object) && typeof object.then === "function";
	}

	/**
	 * @returns whether the given object is a pending promise, meaning not
	 * fulfilled or rejected.
	 */
	Q.isPending = isPending;
	function isPending(object) {
	    return isPromise(object) && object.inspect().state === "pending";
	}

	Promise.prototype.isPending = function () {
	    return this.inspect().state === "pending";
	};

	/**
	 * @returns whether the given object is a value or fulfilled
	 * promise.
	 */
	Q.isFulfilled = isFulfilled;
	function isFulfilled(object) {
	    return !isPromise(object) || object.inspect().state === "fulfilled";
	}

	Promise.prototype.isFulfilled = function () {
	    return this.inspect().state === "fulfilled";
	};

	/**
	 * @returns whether the given object is a rejected promise.
	 */
	Q.isRejected = isRejected;
	function isRejected(object) {
	    return isPromise(object) && object.inspect().state === "rejected";
	}

	Promise.prototype.isRejected = function () {
	    return this.inspect().state === "rejected";
	};

	//// BEGIN UNHANDLED REJECTION TRACKING

	// This promise library consumes exceptions thrown in handlers so they can be
	// handled by a subsequent promise.  The exceptions get added to this array when
	// they are created, and removed when they are handled.  Note that in ES6 or
	// shimmed environments, this would naturally be a `Set`.
	var unhandledReasons = [];
	var unhandledRejections = [];
	var unhandledReasonsDisplayed = false;
	var trackUnhandledRejections = true;
	function displayUnhandledReasons() {
	    if (
	        !unhandledReasonsDisplayed &&
	        typeof window !== "undefined" &&
	        !window.Touch &&
	        window.console
	    ) {
	        console.warn("[Q] Unhandled rejection reasons (should be empty):",
	                     unhandledReasons);
	    }

	    unhandledReasonsDisplayed = true;
	}

	function logUnhandledReasons() {
	    for (var i = 0; i < unhandledReasons.length; i++) {
	        var reason = unhandledReasons[i];
	        console.warn("Unhandled rejection reason:", reason);
	    }
	}

	function resetUnhandledRejections() {
	    unhandledReasons.length = 0;
	    unhandledRejections.length = 0;
	    unhandledReasonsDisplayed = false;

	    if (!trackUnhandledRejections) {
	        trackUnhandledRejections = true;

	        // Show unhandled rejection reasons if Node exits without handling an
	        // outstanding rejection.  (Note that Browserify presently produces a
	        // `process` global without the `EventEmitter` `on` method.)
	        if (typeof process !== "undefined" && process.on) {
	            process.on("exit", logUnhandledReasons);
	        }
	    }
	}

	function trackRejection(promise, reason) {
	    if (!trackUnhandledRejections) {
	        return;
	    }

	    unhandledRejections.push(promise);
	    if (reason && typeof reason.stack !== "undefined") {
	        unhandledReasons.push(reason.stack);
	    } else {
	        unhandledReasons.push("(no stack) " + reason);
	    }
	    displayUnhandledReasons();
	}

	function untrackRejection(promise) {
	    if (!trackUnhandledRejections) {
	        return;
	    }

	    var at = array_indexOf(unhandledRejections, promise);
	    if (at !== -1) {
	        unhandledRejections.splice(at, 1);
	        unhandledReasons.splice(at, 1);
	    }
	}

	Q.resetUnhandledRejections = resetUnhandledRejections;

	Q.getUnhandledReasons = function () {
	    // Make a copy so that consumers can't interfere with our internal state.
	    return unhandledReasons.slice();
	};

	Q.stopUnhandledRejectionTracking = function () {
	    resetUnhandledRejections();
	    if (typeof process !== "undefined" && process.on) {
	        process.removeListener("exit", logUnhandledReasons);
	    }
	    trackUnhandledRejections = false;
	};

	resetUnhandledRejections();

	//// END UNHANDLED REJECTION TRACKING

	/**
	 * Constructs a rejected promise.
	 * @param reason value describing the failure
	 */
	Q.reject = reject;
	function reject(reason) {
	    var rejection = Promise({
	        "when": function (rejected) {
	            // note that the error has been handled
	            if (rejected) {
	                untrackRejection(this);
	            }
	            return rejected ? rejected(reason) : this;
	        }
	    }, function fallback() {
	        return this;
	    }, function inspect() {
	        return { state: "rejected", reason: reason };
	    });

	    // Note that the reason has not been handled.
	    trackRejection(rejection, reason);

	    return rejection;
	}

	/**
	 * Constructs a fulfilled promise for an immediate reference.
	 * @param value immediate reference
	 */
	Q.fulfill = fulfill;
	function fulfill(value) {
	    return Promise({
	        "when": function () {
	            return value;
	        },
	        "get": function (name) {
	            return value[name];
	        },
	        "set": function (name, rhs) {
	            value[name] = rhs;
	        },
	        "delete": function (name) {
	            delete value[name];
	        },
	        "post": function (name, args) {
	            // Mark Miller proposes that post with no name should apply a
	            // promised function.
	            if (name === null || name === void 0) {
	                return value.apply(void 0, args);
	            } else {
	                return value[name].apply(value, args);
	            }
	        },
	        "apply": function (thisp, args) {
	            return value.apply(thisp, args);
	        },
	        "keys": function () {
	            return object_keys(value);
	        }
	    }, void 0, function inspect() {
	        return { state: "fulfilled", value: value };
	    });
	}

	/**
	 * Converts thenables to Q promises.
	 * @param promise thenable promise
	 * @returns a Q promise
	 */
	function coerce(promise) {
	    var deferred = defer();
	    nextTick(function () {
	        try {
	            promise.then(deferred.resolve, deferred.reject, deferred.notify);
	        } catch (exception) {
	            deferred.reject(exception);
	        }
	    });
	    return deferred.promise;
	}

	/**
	 * Annotates an object such that it will never be
	 * transferred away from this process over any promise
	 * communication channel.
	 * @param object
	 * @returns promise a wrapping of that object that
	 * additionally responds to the "isDef" message
	 * without a rejection.
	 */
	Q.master = master;
	function master(object) {
	    return Promise({
	        "isDef": function () {}
	    }, function fallback(op, args) {
	        return dispatch(object, op, args);
	    }, function () {
	        return Q(object).inspect();
	    });
	}

	/**
	 * Spreads the values of a promised array of arguments into the
	 * fulfillment callback.
	 * @param fulfilled callback that receives variadic arguments from the
	 * promised array
	 * @param rejected callback that receives the exception if the promise
	 * is rejected.
	 * @returns a promise for the return value or thrown exception of
	 * either callback.
	 */
	Q.spread = spread;
	function spread(value, fulfilled, rejected) {
	    return Q(value).spread(fulfilled, rejected);
	}

	Promise.prototype.spread = function (fulfilled, rejected) {
	    return this.all().then(function (array) {
	        return fulfilled.apply(void 0, array);
	    }, rejected);
	};

	/**
	 * The async function is a decorator for generator functions, turning
	 * them into asynchronous generators.  Although generators are only part
	 * of the newest ECMAScript 6 drafts, this code does not cause syntax
	 * errors in older engines.  This code should continue to work and will
	 * in fact improve over time as the language improves.
	 *
	 * ES6 generators are currently part of V8 version 3.19 with the
	 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
	 * for longer, but under an older Python-inspired form.  This function
	 * works on both kinds of generators.
	 *
	 * Decorates a generator function such that:
	 *  - it may yield promises
	 *  - execution will continue when that promise is fulfilled
	 *  - the value of the yield expression will be the fulfilled value
	 *  - it returns a promise for the return value (when the generator
	 *    stops iterating)
	 *  - the decorated function returns a promise for the return value
	 *    of the generator or the first rejected promise among those
	 *    yielded.
	 *  - if an error is thrown in the generator, it propagates through
	 *    every following yield until it is caught, or until it escapes
	 *    the generator function altogether, and is translated into a
	 *    rejection for the promise returned by the decorated generator.
	 */
	Q.async = async;
	function async(makeGenerator) {
	    return function () {
	        // when verb is "send", arg is a value
	        // when verb is "throw", arg is an exception
	        function continuer(verb, arg) {
	            var result;
	            if (hasES6Generators) {
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    return reject(exception);
	                }
	                if (result.done) {
	                    return result.value;
	                } else {
	                    return when(result.value, callback, errback);
	                }
	            } else {
	                // FIXME: Remove this case when SM does ES6 generators.
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    if (isStopIteration(exception)) {
	                        return exception.value;
	                    } else {
	                        return reject(exception);
	                    }
	                }
	                return when(result, callback, errback);
	            }
	        }
	        var generator = makeGenerator.apply(this, arguments);
	        var callback = continuer.bind(continuer, "next");
	        var errback = continuer.bind(continuer, "throw");
	        return callback();
	    };
	}

	/**
	 * The spawn function is a small wrapper around async that immediately
	 * calls the generator and also ends the promise chain, so that any
	 * unhandled errors are thrown instead of forwarded to the error
	 * handler. This is useful because it's extremely common to run
	 * generators at the top-level to work with libraries.
	 */
	Q.spawn = spawn;
	function spawn(makeGenerator) {
	    Q.done(Q.async(makeGenerator)());
	}

	// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
	/**
	 * Throws a ReturnValue exception to stop an asynchronous generator.
	 *
	 * This interface is a stop-gap measure to support generator return
	 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
	 * generators like Chromium 29, just use "return" in your generator
	 * functions.
	 *
	 * @param value the return value for the surrounding generator
	 * @throws ReturnValue exception with the value.
	 * @example
	 * // ES6 style
	 * Q.async(function* () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      return foo + bar;
	 * })
	 * // Older SpiderMonkey style
	 * Q.async(function () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      Q.return(foo + bar);
	 * })
	 */
	Q["return"] = _return;
	function _return(value) {
	    throw new QReturnValue(value);
	}

	/**
	 * The promised function decorator ensures that any promise arguments
	 * are settled and passed as values (`this` is also settled and passed
	 * as a value).  It will also ensure that the result of a function is
	 * always a promise.
	 *
	 * @example
	 * var add = Q.promised(function (a, b) {
	 *     return a + b;
	 * });
	 * add(Q(a), Q(B));
	 *
	 * @param {function} callback The function to decorate
	 * @returns {function} a function that has been decorated.
	 */
	Q.promised = promised;
	function promised(callback) {
	    return function () {
	        return spread([this, all(arguments)], function (self, args) {
	            return callback.apply(self, args);
	        });
	    };
	}

	/**
	 * sends a message to a value in a future turn
	 * @param object* the recipient
	 * @param op the name of the message operation, e.g., "when",
	 * @param args further arguments to be forwarded to the operation
	 * @returns result {Promise} a promise for the result of the operation
	 */
	Q.dispatch = dispatch;
	function dispatch(object, op, args) {
	    return Q(object).dispatch(op, args);
	}

	Promise.prototype.dispatch = function (op, args) {
	    var self = this;
	    var deferred = defer();
	    nextTick(function () {
	        self.promiseDispatch(deferred.resolve, op, args);
	    });
	    return deferred.promise;
	};

	/**
	 * Gets the value of a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to get
	 * @return promise for the property value
	 */
	Q.get = function (object, key) {
	    return Q(object).dispatch("get", [key]);
	};

	Promise.prototype.get = function (key) {
	    return this.dispatch("get", [key]);
	};

	/**
	 * Sets the value of a property in a future turn.
	 * @param object    promise or immediate reference for object object
	 * @param name      name of property to set
	 * @param value     new value of property
	 * @return promise for the return value
	 */
	Q.set = function (object, key, value) {
	    return Q(object).dispatch("set", [key, value]);
	};

	Promise.prototype.set = function (key, value) {
	    return this.dispatch("set", [key, value]);
	};

	/**
	 * Deletes a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to delete
	 * @return promise for the return value
	 */
	Q.del = // XXX legacy
	Q["delete"] = function (object, key) {
	    return Q(object).dispatch("delete", [key]);
	};

	Promise.prototype.del = // XXX legacy
	Promise.prototype["delete"] = function (key) {
	    return this.dispatch("delete", [key]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param value     a value to post, typically an array of
	 *                  invocation arguments for promises that
	 *                  are ultimately backed with `resolve` values,
	 *                  as opposed to those backed with URLs
	 *                  wherein the posted value can be any
	 *                  JSON serializable object.
	 * @return promise for the return value
	 */
	// bound locally because it is used by other methods
	Q.mapply = // XXX As proposed by "Redsandro"
	Q.post = function (object, name, args) {
	    return Q(object).dispatch("post", [name, args]);
	};

	Promise.prototype.mapply = // XXX As proposed by "Redsandro"
	Promise.prototype.post = function (name, args) {
	    return this.dispatch("post", [name, args]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param ...args   array of invocation arguments
	 * @return promise for the return value
	 */
	Q.send = // XXX Mark Miller's proposed parlance
	Q.mcall = // XXX As proposed by "Redsandro"
	Q.invoke = function (object, name /*...args*/) {
	    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
	};

	Promise.prototype.send = // XXX Mark Miller's proposed parlance
	Promise.prototype.mcall = // XXX As proposed by "Redsandro"
	Promise.prototype.invoke = function (name /*...args*/) {
	    return this.dispatch("post", [name, array_slice(arguments, 1)]);
	};

	/**
	 * Applies the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param args      array of application arguments
	 */
	Q.fapply = function (object, args) {
	    return Q(object).dispatch("apply", [void 0, args]);
	};

	Promise.prototype.fapply = function (args) {
	    return this.dispatch("apply", [void 0, args]);
	};

	/**
	 * Calls the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q["try"] =
	Q.fcall = function (object /* ...args*/) {
	    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
	};

	Promise.prototype.fcall = function (/*...args*/) {
	    return this.dispatch("apply", [void 0, array_slice(arguments)]);
	};

	/**
	 * Binds the promised function, transforming return values into a fulfilled
	 * promise and thrown errors into a rejected one.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q.fbind = function (object /*...args*/) {
	    var promise = Q(object);
	    var args = array_slice(arguments, 1);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};
	Promise.prototype.fbind = function (/*...args*/) {
	    var promise = this;
	    var args = array_slice(arguments);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};

	/**
	 * Requests the names of the owned properties of a promised
	 * object in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @return promise for the keys of the eventually settled object
	 */
	Q.keys = function (object) {
	    return Q(object).dispatch("keys", []);
	};

	Promise.prototype.keys = function () {
	    return this.dispatch("keys", []);
	};

	/**
	 * Turns an array of promises into a promise for an array.  If any of
	 * the promises gets rejected, the whole array is rejected immediately.
	 * @param {Array*} an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns a promise for an array of the corresponding values
	 */
	// By Mark Miller
	// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
	Q.all = all;
	function all(promises) {
	    return when(promises, function (promises) {
	        var countDown = 0;
	        var deferred = defer();
	        array_reduce(promises, function (undefined, promise, index) {
	            var snapshot;
	            if (
	                isPromise(promise) &&
	                (snapshot = promise.inspect()).state === "fulfilled"
	            ) {
	                promises[index] = snapshot.value;
	            } else {
	                ++countDown;
	                when(
	                    promise,
	                    function (value) {
	                        promises[index] = value;
	                        if (--countDown === 0) {
	                            deferred.resolve(promises);
	                        }
	                    },
	                    deferred.reject,
	                    function (progress) {
	                        deferred.notify({ index: index, value: progress });
	                    }
	                );
	            }
	        }, void 0);
	        if (countDown === 0) {
	            deferred.resolve(promises);
	        }
	        return deferred.promise;
	    });
	}

	Promise.prototype.all = function () {
	    return all(this);
	};

	/**
	 * Waits for all promises to be settled, either fulfilled or
	 * rejected.  This is distinct from `all` since that would stop
	 * waiting at the first rejection.  The promise returned by
	 * `allResolved` will never be rejected.
	 * @param promises a promise for an array (or an array) of promises
	 * (or values)
	 * @return a promise for an array of promises
	 */
	Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
	function allResolved(promises) {
	    return when(promises, function (promises) {
	        promises = array_map(promises, Q);
	        return when(all(array_map(promises, function (promise) {
	            return when(promise, noop, noop);
	        })), function () {
	            return promises;
	        });
	    });
	}

	Promise.prototype.allResolved = function () {
	    return allResolved(this);
	};

	/**
	 * @see Promise#allSettled
	 */
	Q.allSettled = allSettled;
	function allSettled(promises) {
	    return Q(promises).allSettled();
	}

	/**
	 * Turns an array of promises into a promise for an array of their states (as
	 * returned by `inspect`) when they have all settled.
	 * @param {Array[Any*]} values an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns {Array[State]} an array of states for the respective values.
	 */
	Promise.prototype.allSettled = function () {
	    return this.then(function (promises) {
	        return all(array_map(promises, function (promise) {
	            promise = Q(promise);
	            function regardless() {
	                return promise.inspect();
	            }
	            return promise.then(regardless, regardless);
	        }));
	    });
	};

	/**
	 * Captures the failure of a promise, giving an oportunity to recover
	 * with a callback.  If the given promise is fulfilled, the returned
	 * promise is fulfilled.
	 * @param {Any*} promise for something
	 * @param {Function} callback to fulfill the returned promise if the
	 * given promise is rejected
	 * @returns a promise for the return value of the callback
	 */
	Q.fail = // XXX legacy
	Q["catch"] = function (object, rejected) {
	    return Q(object).then(void 0, rejected);
	};

	Promise.prototype.fail = // XXX legacy
	Promise.prototype["catch"] = function (rejected) {
	    return this.then(void 0, rejected);
	};

	/**
	 * Attaches a listener that can respond to progress notifications from a
	 * promise's originating deferred. This listener receives the exact arguments
	 * passed to ``deferred.notify``.
	 * @param {Any*} promise for something
	 * @param {Function} callback to receive any progress notifications
	 * @returns the given promise, unchanged
	 */
	Q.progress = progress;
	function progress(object, progressed) {
	    return Q(object).then(void 0, void 0, progressed);
	}

	Promise.prototype.progress = function (progressed) {
	    return this.then(void 0, void 0, progressed);
	};

	/**
	 * Provides an opportunity to observe the settling of a promise,
	 * regardless of whether the promise is fulfilled or rejected.  Forwards
	 * the resolution to the returned promise when the callback is done.
	 * The callback can return a promise to defer completion.
	 * @param {Any*} promise
	 * @param {Function} callback to observe the resolution of the given
	 * promise, takes no arguments.
	 * @returns a promise for the resolution of the given promise when
	 * ``fin`` is done.
	 */
	Q.fin = // XXX legacy
	Q["finally"] = function (object, callback) {
	    return Q(object)["finally"](callback);
	};

	Promise.prototype.fin = // XXX legacy
	Promise.prototype["finally"] = function (callback) {
	    callback = Q(callback);
	    return this.then(function (value) {
	        return callback.fcall().then(function () {
	            return value;
	        });
	    }, function (reason) {
	        // TODO attempt to recycle the rejection with "this".
	        return callback.fcall().then(function () {
	            throw reason;
	        });
	    });
	};

	/**
	 * Terminates a chain of promises, forcing rejections to be
	 * thrown as exceptions.
	 * @param {Any*} promise at the end of a chain of promises
	 * @returns nothing
	 */
	Q.done = function (object, fulfilled, rejected, progress) {
	    return Q(object).done(fulfilled, rejected, progress);
	};

	Promise.prototype.done = function (fulfilled, rejected, progress) {
	    var onUnhandledError = function (error) {
	        // forward to a future turn so that ``when``
	        // does not catch it and turn it into a rejection.
	        nextTick(function () {
	            makeStackTraceLong(error, promise);
	            if (Q.onerror) {
	                Q.onerror(error);
	            } else {
	                throw error;
	            }
	        });
	    };

	    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
	    var promise = fulfilled || rejected || progress ?
	        this.then(fulfilled, rejected, progress) :
	        this;

	    if (typeof process === "object" && process && process.domain) {
	        onUnhandledError = process.domain.bind(onUnhandledError);
	    }

	    promise.then(void 0, onUnhandledError);
	};

	/**
	 * Causes a promise to be rejected if it does not get fulfilled before
	 * some milliseconds time out.
	 * @param {Any*} promise
	 * @param {Number} milliseconds timeout
	 * @param {String} custom error message (optional)
	 * @returns a promise for the resolution of the given promise if it is
	 * fulfilled before the timeout, otherwise rejected.
	 */
	Q.timeout = function (object, ms, message) {
	    return Q(object).timeout(ms, message);
	};

	Promise.prototype.timeout = function (ms, message) {
	    var deferred = defer();
	    var timeoutId = setTimeout(function () {
	        deferred.reject(new Error(message || "Timed out after " + ms + " ms"));
	    }, ms);

	    this.then(function (value) {
	        clearTimeout(timeoutId);
	        deferred.resolve(value);
	    }, function (exception) {
	        clearTimeout(timeoutId);
	        deferred.reject(exception);
	    }, deferred.notify);

	    return deferred.promise;
	};

	/**
	 * Returns a promise for the given value (or promised value), some
	 * milliseconds after it resolved. Passes rejections immediately.
	 * @param {Any*} promise
	 * @param {Number} milliseconds
	 * @returns a promise for the resolution of the given promise after milliseconds
	 * time has elapsed since the resolution of the given promise.
	 * If the given promise rejects, that is passed immediately.
	 */
	Q.delay = function (object, timeout) {
	    if (timeout === void 0) {
	        timeout = object;
	        object = void 0;
	    }
	    return Q(object).delay(timeout);
	};

	Promise.prototype.delay = function (timeout) {
	    return this.then(function (value) {
	        var deferred = defer();
	        setTimeout(function () {
	            deferred.resolve(value);
	        }, timeout);
	        return deferred.promise;
	    });
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided as an array, and returns a promise.
	 *
	 *      Q.nfapply(FS.readFile, [__filename])
	 *      .then(function (content) {
	 *      })
	 *
	 */
	Q.nfapply = function (callback, args) {
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfapply = function (args) {
	    var deferred = defer();
	    var nodeArgs = array_slice(args);
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided individually, and returns a promise.
	 * @example
	 * Q.nfcall(FS.readFile, __filename)
	 * .then(function (content) {
	 * })
	 *
	 */
	Q.nfcall = function (callback /*...args*/) {
	    var args = array_slice(arguments, 1);
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfcall = function (/*...args*/) {
	    var nodeArgs = array_slice(arguments);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Wraps a NodeJS continuation passing function and returns an equivalent
	 * version that returns a promise.
	 * @example
	 * Q.nfbind(FS.readFile, __filename)("utf-8")
	 * .then(console.log)
	 * .done()
	 */
	Q.nfbind =
	Q.denodeify = function (callback /*...args*/) {
	    var baseArgs = array_slice(arguments, 1);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        Q(callback).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nfbind =
	Promise.prototype.denodeify = function (/*...args*/) {
	    var args = array_slice(arguments);
	    args.unshift(this);
	    return Q.denodeify.apply(void 0, args);
	};

	Q.nbind = function (callback, thisp /*...args*/) {
	    var baseArgs = array_slice(arguments, 2);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        function bound() {
	            return callback.apply(thisp, arguments);
	        }
	        Q(bound).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nbind = function (/*thisp, ...args*/) {
	    var args = array_slice(arguments, 0);
	    args.unshift(this);
	    return Q.nbind.apply(void 0, args);
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback with a given array of arguments, plus a provided callback.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param {Array} args arguments to pass to the method; the callback
	 * will be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nmapply = // XXX As proposed by "Redsandro"
	Q.npost = function (object, name, args) {
	    return Q(object).npost(name, args);
	};

	Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
	Promise.prototype.npost = function (name, args) {
	    var nodeArgs = array_slice(args || []);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback, forwarding the given variadic arguments, plus a provided
	 * callback argument.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param ...args arguments to pass to the method; the callback will
	 * be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nsend = // XXX Based on Mark Miller's proposed "send"
	Q.nmcall = // XXX Based on "Redsandro's" proposal
	Q.ninvoke = function (object, name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 2);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
	Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
	Promise.prototype.ninvoke = function (name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 1);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * If a function would like to support both Node continuation-passing-style and
	 * promise-returning-style, it can end its internal promise chain with
	 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
	 * elects to use a nodeback, the result will be sent there.  If they do not
	 * pass a nodeback, they will receive the result promise.
	 * @param object a result (or a promise for a result)
	 * @param {Function} nodeback a Node.js-style callback
	 * @returns either the promise or nothing
	 */
	Q.nodeify = nodeify;
	function nodeify(object, nodeback) {
	    return Q(object).nodeify(nodeback);
	}

	Promise.prototype.nodeify = function (nodeback) {
	    if (nodeback) {
	        this.then(function (value) {
	            nextTick(function () {
	                nodeback(null, value);
	            });
	        }, function (error) {
	            nextTick(function () {
	                nodeback(error);
	            });
	        });
	    } else {
	        return this;
	    }
	};

	// All code before this point will be filtered from stack traces.
	var qEndingLine = captureLine();

	return Q;

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21), __webpack_require__(34).setImmediate))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var xjst = __webpack_require__(10);

	// Predicate constructor
	function Predicate(compiler, expr, value) {
	  this.compiler = compiler;

	  this.expr = this.compiler.sanitize(expr);
	  this.value = value;

	  this.id = compiler.getId(expr, expr);
	  this.valueId = compiler.getId(value, value);

	  this.simplify();

	  compiler.accountScore(this.id, this.valueId);
	};
	exports.Predicate = Predicate;

	Predicate.prototype.clone = function clone() {
	  return new Predicate(this.compiler,
	                       xjst.utils.cloneAst(this.expr),
	                       xjst.utils.cloneAst(this.value));
	};

	Predicate.prototype.getScore = function getScore() {
	  return this.compiler.getScore(this.id);
	};

	Predicate.prototype.render = function render() {
	  if (this.value !== null) {
	    return {
	      type: 'BinaryExpression',
	      operator: '===',
	      left: this.getExpr(),
	      right: this.compiler.replaceFetch(this.value)
	    };
	  } else {
	    return this.getExpr();
	  }
	};

	Predicate.prototype.simplify = function simplify() {
	  // !(something) === false => something
	  if (this.value.type === 'Literal' &&
	      this.value.value === false &&
	      this.expr.type === 'UnaryExpression' &&
	      this.expr.operator === '!') {
	    this.expr = this.expr.argument;
	    this.value = null;
	  }
	};

	Predicate.prototype.getExpr = function getExpr() {
	  return this.compiler.replaceFetch(this.expr);
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(14);
	var estraverse = __webpack_require__(9);
	var entities = __webpack_require__(18);

	var Predicate = entities.Predicate;

	function GenericBody(compiler) {
	  this.id = null;
	  this.compiler = compiler;
	  this.uid = this.compiler.bodyUid++;
	  this.shared = false;
	  this.shareable = true;
	  this.primitive = false;
	};
	exports.GenericBody = GenericBody;

	GenericBody.prototype.getChildren = function getChildren() {
	  return [];
	};

	GenericBody.prototype.mapChildren = function mapChildren(fn, ctx) {
	  // No-op
	};

	GenericBody.prototype.callExpr = function callExpr(ast) {
	  var lazyAst = ast || this._render();
	  this.shared = this.compiler.registerBody(this);

	  // Fast case - inline returned value
	  if (lazyAst.apply &&
	      lazyAst.apply.length === 1 &&
	      lazyAst.apply[0].type === 'ReturnStatement') {
	    this.compiler.unshareBody(this);
	    return lazyAst.apply[0].argument;
	  }

	  return {
	    type: 'CallExpression',
	    callee: this.compiler.getBodyName(this),
	    arguments: [ this.compiler.ctx, this.compiler.ref ]
	  };
	};

	GenericBody.prototype.wrapResult = function wrapResult(res) {
	  var sp = this.compiler.splitter.getSplitPoint();
	  var apply = res.apply;

	  // Add split point
	  apply = [ sp ].concat(apply);

	  return {
	    apply: apply,
	    other: res.other,
	    init: res.init
	  };
	};

	GenericBody.prototype.render = function render(notShared) {
	  this.shared = this.compiler.registerBody(this);
	  var ast = this._render();
	  var result;

	  if (!notShared && this.shared) {
	    result = this.compiler.checkRef(this.callExpr(ast));
	  } else {
	    result = ast;
	  }

	  return this.wrapResult(result);
	};

	function Body(compiler, body, id, rolledOut) {
	  GenericBody.call(this, compiler);
	  this.primitive = true;

	  if (body instanceof Body) {
	    // Clone
	    var parent = body;

	    this.id = parent.id;
	    this.uid = parent.uid;
	    this.shared = parent.shared;
	    this.rolledOut = parent.shared;
	    this.body = xjst.utils.cloneAst(parent.body);

	    this.applyNext = parent.applyNext;
	  } else {
	    this.body = Array.isArray(body) ? body : [ body ];

	    this.rolledOut = false;
	    this.applyNext = null;
	  }

	  this.pairIndex = 0;
	  this.localRef = {};
	};
	util.inherits(Body, GenericBody);
	exports.Body = Body;

	Body.prototype.clone = function clone() {
	  this.compiler.shareBody(this);
	  return new Body(this.compiler, this);
	};

	Body.prototype.rollOut = function rollOut() {
	  if (this.rolledOut) return;

	  for (var i = this.body.length - 1; i >= 0; i--) {
	    var stmt = this.body[i];
	    this.compiler.sanitize(stmt);

	    var block = {
	      type: 'BlockStatement',
	      body: [ stmt ]
	    };
	    estraverse.replace(block, {
	      enter: this.rollOutSpecific.bind(this),
	      leave: this.leaveSpecific.bind(this)
	    });

	    // Inline!
	    if (block.body.length !== 1 || block.body[0] !== stmt) {
	      Array.prototype.splice.apply(this.body, [i, 1].concat(block.body));
	    }
	  }

	  // Add last return
	  if (this.body.length === 0 ||
	      this.body[this.body.length - 1].type !== 'ReturnStatement') {
	    this.body.push({ type: 'ReturnStatement', argument: null });
	  }

	  // Jail local vars
	  this.body = this.compiler.jailVars(this.body);
	  this.rolledOut = true;
	};

	Body.prototype.rollOutSpecific = function rollOutSpecific(node) {
	  if (node.type !== 'CallExpression') return;

	  // apply(locals) or __$$fetch(identifier)
	  if (node.callee.type === 'Identifier') {
	    var name = node.callee.name;
	    if (name === 'apply' || name === 'applyNext') {
	      return this.rollOutApply(node, name, node.arguments);
	    } else if (name === '__$$fetch') {
	      this.compiler.assertEqual(node, node.arguments.length, 1);
	      this.compiler.assertEqual(node, node.arguments[0].type, 'Literal');
	      return this.rollOutFetch(node.arguments[0].value);
	    } else if (name === '__$$set') {
	      this.compiler.assertEqual(node, node.arguments.length, 2);
	      this.compiler.assertEqual(node, node.arguments[0].type, 'Literal');
	      return this.rollOutSet(node.arguments[0].value,
	                             node.arguments[1]);
	    }
	  // local(locals)(body)
	  } else if (node.callee.type === 'CallExpression' &&
	             node.callee.callee.type === 'Identifier') {
	    var name = node.callee.callee.name;
	    if (name !== 'local') return;

	    return this.rollOutLocal(node, node.callee.arguments, node.arguments[0]);
	  }
	};

	Body.prototype.leaveSpecific = function leaveSpecific(node, parent) {
	  if (node.localMarked === this.localRef) {
	    delete node.localMarked;
	    this.compiler.revertChange();
	  }
	};

	// Roll-out apply expression
	Body.prototype.rollOutApply = function rollOutApply(ast, type, changes) {
	  var ctx = this.compiler.ctx;
	  var ref = this.compiler.ref;

	  // Process changes in local
	  if (changes.length > 0) {
	    return this.rollOutLocal(ast, changes, function() {
	      return this.rollOutApply(ast, type, [])
	    });
	  }

	  if (type !== 'apply') {
	    // applyNext, heh
	    if (!this.applyNext) {
	      this.applyNext = this.compiler.getApplyNext(),
	      this.applyNext.member = {
	        type: 'MemberExpression',
	        computed: false,
	        object: ctx,
	        property: this.applyNext.prop
	      };
	      this.applyNext.pred = new Predicate(this.compiler, {
	        type: 'BinaryExpression',
	        operator: '&',
	        left: this.applyNext.member,
	        right: this.applyNext.value
	      }, { type: 'Literal', value: 0 });
	    }

	    return this.rollOutApply(ast, 'apply', changes.concat({
	      type: 'ObjectExpression',
	      properties: [{
	        type: 'Property',
	        key: this.applyNext.prop,
	        value: {
	          type: 'BinaryExpression',
	          operator: '|',
	          left: this.applyNext.member,
	          right: this.applyNext.value,
	        },
	        kind: 'init'
	      }]
	    }));
	  }

	  // Limit inline depth
	  return {
	    type: 'CallExpression',
	    callee: { type: 'Identifier', name: 'applyc' },
	    arguments: [ ctx, ref ]
	  };
	};

	// Roll-out local expression
	Body.prototype.rollOutLocal = function rollOutLocal(ast, changes, body) {
	  var self = this,
	      ctx = this.compiler.ctx,
	      pairs = [],
	      predicates = [];

	  function getVar() {
	    return { type: 'Identifier', name: '__$l' + self.pairIndex++ };
	  }

	  function addPair(prop, value) {
	    predicates.push(new Predicate(self.compiler, prop, value));

	    pairs.push({
	      prop: prop,
	      value: value,
	      variable: getVar()
	    });
	  }

	  // Generate list of prop/value pairs
	  changes.forEach(function(change) {
	    if (change.type === 'Literal')
	      return;
	    this.compiler.assertEqual(
	        change,
	        change.type,
	        'ObjectExpression',
	        'apply() and local() accepts only object literals');
	    change.properties.forEach(function(property) {
	      var keys = (property.key.name || property.key.value).split('.');
	      var isGlobal = keys[0] === '$$global';
	      if (isGlobal)
	        keys.shift();
	      if (isGlobal) {
	        var prop = this.compiler.fetchGlobal(keys.join('.'));
	      } else {
	        var prop = keys.reduce(function(left, right, i, l) {
	          var sub = {
	            type: 'MemberExpression',
	            computed: false,
	            object: left,
	            property: { type: 'Identifier', name: right }
	          };

	          self.compiler.registerExtension(right);

	          return sub;
	        }, ctx);
	      }

	      addPair(this.compiler.sanitize(prop),
	              this.compiler.sanitize(property.value));
	    }, this);
	  }, this);

	  var result = { type: 'Identifier', name: '__$r' };
	  var before = [];
	  var after = [];

	  var ret = {
	    localMarked: this.localRef,
	    type: 'CallExpression',
	    callee: null,
	    arguments: []
	  };

	  this.compiler.addChange(predicates);
	  if (typeof body === 'function') {
	    body = body.call(this);
	  }

	  // Replace `this` in body
	  if (body.type === 'FunctionExpression') {
	    body.body = this.compiler.sanitize(body.body);
	  } else {
	    body = this.compiler.sanitize(body);
	  }

	  // Declare __$r var
	  before.push({
	    type: 'VariableDeclaration',
	    kind: 'var',
	    declarations: [{
	      type: 'VariableDeclarator',
	      id: result,
	      init: null
	    }]
	  });

	  pairs.forEach(function(pair) {
	    var left = pair.prop;

	    // Store object
	    if (left.type === 'MemberExpression' && left.object !== ctx) {
	      var tmp = getVar();
	      before.push({
	        type: 'VariableDeclaration',
	        kind: 'var',
	        declarations: [{
	          type: 'VariableDeclarator',
	          id: tmp,
	          init: left.object
	        }]
	      });

	      left = {
	        type: 'MemberExpression',
	        computed: left.computed,
	        object: tmp,
	        property: left.property
	      };
	    }

	    before.push({
	      type: 'VariableDeclaration',
	      kind: 'var',
	      declarations: [{
	        type: 'VariableDeclarator',
	        id: pair.variable,
	        init: left
	      }]
	    });
	    before.push({
	      type: 'ExpressionStatement',
	      expression: {
	        type: 'AssignmentExpression',
	        operator: '=',
	        left: left,
	        right: pair.value
	      }
	    });

	    after.push({
	      type: 'ExpressionStatement',
	      expression: {
	        type: 'AssignmentExpression',
	        operator: '=',
	        left: left,
	        right: pair.variable
	      }
	    });
	  }, this);

	  var noreturn = false;
	  if (body.type === 'FunctionExpression') {
	    body = {
	      type: 'CallExpression',
	      callee: body,
	      arguments: []
	    };
	  }

	  if (body.type === 'ExpressionStatement') {
	    body = body.expression;
	  }
	  body = [].concat(before, {
	    type: 'ExpressionStatement',
	    expression: {
	      type: 'AssignmentExpression',
	      operator: '=',
	      left: result,
	      right: body
	    }
	  }, after);

	  var func = {
	    type: 'FunctionExpression',
	    id: { type: 'Identifier', name: '__$lb' },
	    params: [],
	    defaults: [],
	    rest: null,
	    generator: false,
	    expression: false,
	    body: {
	      type: 'BlockStatement',
	      body: body.concat({
	        type: 'ReturnStatement',
	        argument: result
	      })
	    }
	  };

	  ret.callee = func;
	  return ret;
	};

	Body.prototype.rollOutFetch = function rollOutFetch(id) {
	  return this.compiler.fetchGlobal(id);
	};

	Body.prototype.rollOutSet = function rollOutSet(id, value) {
	  return {
	    type: 'AssignmentExpression',
	    operator: '=',
	    left: this.compiler.fetchGlobal(id),
	    right: value
	  };
	};

	// Render body
	Body.prototype._render = function render() {
	  return {
	    apply: this.body,
	    other: null,
	    init: []
	  };
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(14);
	var entities = __webpack_require__(18);

	var GenericBody = entities.GenericBody;
	var Body = entities.Body;
	var Predicate = entities.Predicate;

	// Template constructor
	function Template(compiler, predicates, body) {
	  GenericBody.call(this, compiler);

	  this.shareable = false;
	  this.predicates = predicates;

	  if (body.type === 'FunctionExpression') {
	    // function() { body } => body
	    this.body = body.body.body;
	  } else if (!Array.isArray(body)) {
	    // stmt => return stmt;
	    this.body = [ { type: 'ReturnStatement', argument: body } ];
	  }

	  if (body instanceof Body) {
	    this.body = body.clone();
	  } else {
	    this.body = new Body(compiler, this.body);
	  }
	};
	util.inherits(Template, GenericBody);
	exports.Template = Template;

	Template.prototype.getChildren = function getChildren() {
	  return [this.body];
	};

	Template.prototype.mapChildren = function mapChildren(fn, ctx) {
	  this.body = fn.call(ctx, this.body);
	};

	Template.prototype.clone = function clone() {
	  var r = new Template(this.compiler, this.predicates.map(function(predicate) {
	    return predicate.clone();
	  }), this.body);

	  r.uid = this.uid;

	  return r;
	};

	// Roll-out apply/applyNext() and local() calls
	Template.prototype.rollOut = function rollOut() {
	  var body = this.body;

	  this.compiler.addChange(this.predicates);
	  body.rollOut();
	  this.compiler.revertChange();
	};

	Template.prototype.getPredicates = function getPredicates() {
	  if (this.predicates.length === 0) return {};

	  return {
	    type: 'IfStatement',
	    test: this.predicates.map(function(pred) {
	      return pred.render();
	    }).reduce(function(left, right) {
	      return {
	        type: 'BinaryExpression',
	        operator: '&&',
	        left: left,
	        right: right
	      };
	    }),
	    consequent: null,
	    alternate: null
	  };
	};

	// Render template to AST form
	Template.prototype._render = function render() {
	  // If we came here - we're compiling without optimizations
	  var res,
	      body = this.body.render();

	  if (this.body.applyNext)
	    this.predicates.push(this.body.applyNext.pred);

	  // Identity template()
	  if (this.predicates.length === 0)
	    return body;

	  res = this.getPredicates();
	  res.consequent = { type: 'BlockStatement', body: body.apply };

	  return {
	    apply: res,
	    other: body.other,
	    init: body.init
	  };
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6);
	var util = __webpack_require__(14);
	var entities = __webpack_require__(18);

	var GenericBody = entities.GenericBody;

	function Map(compiler, pairs) {
	  GenericBody.call(this, compiler);

	  this.shareable = false;
	  this.pairs = {};
	  if (pairs && pairs.length >= 1) {
	    this.predicate = pairs[0].predicate.getExpr();
	    this.predicateId = pairs[0].predicate.id;

	    pairs.forEach(function(pair) {
	      pair.bodies.forEach(function(body) {
	        assert(pair.predicate.value !== null);
	        this.add(this.predicate, pair.predicate.value, body);
	      }, this);
	    }, this);
	  } else {
	    this.predicate = null;
	    this.predicateId = null;
	  }

	  this.compiler.registerMap(this);
	};
	util.inherits(Map, GenericBody);
	exports.Map = Map;

	Map.prototype.getChildren = function getChildren() {
	  return Object.keys(this.pairs).map(function(key) {
	    var pair = this.pairs[key];
	    return pair.bodies;
	  }, this).reduce(function(left, right) {
	    return left.concat(right);
	  }, []);
	};

	Map.prototype.mapChildren = function mapChildren(fn, ctx) {
	  Object.keys(this.pairs).forEach(function(key) {
	    var pair = this.pairs[key];
	    pair.bodies = pair.bodies.map(fn, ctx);
	  }, this);
	};

	Map.prototype.add = function add(predicate, value, body) {
	  assert(value.type === 'Literal');
	  if (this.predicate === null) {
	    this.predicate = predicate;
	    this.predicateId = this.compiler.getId(predicate);
	  }

	  var valueId = this.compiler.getId(value);
	  body.shareable = false;
	  if (!this.pairs[valueId]) {
	    this.pairs[valueId] = {
	      value: value,
	      bodies: [body]
	    };
	  } else {
	    this.pairs[valueId].bodies.push(body);
	  }
	};

	Map.prototype.getMap = function getMap() {
	  return {
	    type: 'VariableDeclaration',
	    kind: 'var',
	    declarations: [{
	      type: 'VariableDeclarator',
	      id: this.compiler.getMapName(this),
	      init: {
	        type: 'ObjectExpression',
	        properties: Object.keys(this.pairs).map(function(id) {
	          var pair = this.pairs[id];
	          var out = [];
	          if (pair.bodies.length === 1) {
	            out = out.concat(pair.bodies[0].render(true).apply);
	          } else {
	            pair.bodies.forEach(function(body) {
	              out = out.concat(body.render().apply);
	            });
	          }
	          out = out.concat({
	            type: 'ReturnStatement',
	            argument: this.compiler.ref
	          });
	          return {
	            type: 'Property',
	            key: pair.value,
	            value: {
	              type: 'FunctionExpression',
	              id: null,
	              params: [ this.compiler.ctx, this.compiler.ref ],
	              defaults: [],
	              rest: null,
	              generator: false,
	              expression: false,
	              body: {
	                type: 'BlockStatement',
	                body: out
	              }
	            },
	            kind: 'init'
	          }
	        }, this)
	      }
	    }]
	  };
	};

	Map.prototype.render = function render() {
	  assert(this.predicate !== null);
	  var res = { type: 'Identifier', name: '__$mr' },
	      check = this.compiler.checkRef(res);

	  return this.wrapResult({
	    apply: [{
	      type: 'VariableDeclaration',
	      kind: 'var',
	      declarations: [{
	        type: 'VariableDeclarator',
	        id: res,
	        init: {
	          type: 'MemberExpression',
	          computed: true,
	          object: this.compiler.getMapName(this),
	          property: this.predicate
	        }
	      }]
	    }, {
	      type: 'IfStatement',
	      test: res,
	      consequent: {
	        type: 'BlockStatement',
	        body: [{
	          type: 'ExpressionStatement',
	          expression: {
	            type: 'AssignmentExpression',
	            operator: '=',
	            left: res,
	            right: {
	              type: 'CallExpression',
	              callee: res,
	              arguments: [this.compiler.ctx, this.compiler.ref]
	            }
	          }
	        }].concat(check.apply)
	      },
	      alternate: null
	    }]
	  });
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6);
	var util = __webpack_require__(14);
	var entities = __webpack_require__(18);

	var GenericBody = entities.GenericBody;
	var Map = entities.Map;

	function Group(compiler, pairs) {
	  if (pairs.length > 16) return new Map(compiler, pairs);

	  GenericBody.call(this, compiler);
	  assert(pairs.length > 0);

	  this.predicate = pairs[0].predicate;
	  this.pairs = pairs;
	};
	util.inherits(Group, GenericBody);
	exports.Group = Group;

	Group.prototype.getChildren = function getChildren() {
	  return this.pairs.map(function(pair) {
	    return pair.bodies;
	  }).reduce(function(left, right) {
	    return left.concat(right);
	  }, []);
	};

	Group.prototype.mapChildren = function mapChildren(fn, ctx) {
	  this.pairs.forEach(function(pair) {
	    pair.bodies =  pair.bodies.map(fn, ctx);
	  });
	};

	Group.prototype._render = function render() {
	  var t = { type: 'Identifier', name: '__$t' };

	  var result = [],
	      other = [],
	      init = [];

	  result.push({
	    type: 'VariableDeclaration',
	    kind: 'var',
	    declarations: [{
	      type: 'VariableDeclarator',
	      id: t,
	      init: this.predicate.getExpr()
	    }]
	  });

	  result.push(this.pairs.map(function(pair) {
	    var out = [];
	    pair.bodies.forEach(function(body) {
	      this.compiler.addChange(pair.predicate);
	      var local = body.render();

	      assert(!body.applyNext);

	      if (local.apply) out = out.concat(local.apply);
	      if (local.other) other = other.concat(local.other);
	      if (local.init) init = init.concat(local.init);
	      this.compiler.revertChange();
	    }, this);

	    return {
	      type: 'IfStatement',
	      test: pair.predicate.value ? {
	        type: 'BinaryExpression',
	        operator: '===',
	        left: t,
	        right: pair.predicate.value
	      } : t,
	      consequent: {
	        type: 'BlockStatement',
	        body: out
	      },
	      alternate: null
	    };
	  }, this).reduceRight(function(prev, next) {
	    next.alternate = prev;
	    return next;
	  }));

	  return {
	    apply: result,
	    other: other,
	    init: init
	  };
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6);
	var util = __webpack_require__(14);
	var entities = __webpack_require__(18);

	var GenericBody = entities.GenericBody;
	var Map = entities.Map;

	function Pair(compiler, left, right) {
	  GenericBody.call(this, compiler);

	  this.left = left;
	  this.right = right;
	};
	util.inherits(Pair, GenericBody);
	exports.Pair = Pair;

	Pair.prototype.getChildren = function getChildren() {
	  return [ this.left, this.right ];
	};

	Pair.prototype.mapChildren = function mapChildren(fn, ctx) {
	  this.left = fn.call(ctx, this.left);
	  this.right = fn.call(ctx, this.right);
	};

	Pair.prototype._render = function render() {
	  var left = this.left.render();
	  var right = this.right.render();

	  return {
	    apply: (left.apply || []).concat(right.apply || []),
	    other: (left.other || []).concat(right.other || []),
	    init: (left.init || []).concat(right.init || [])
	  };
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6);
	var estraverse = __webpack_require__(9);

	function Jailer() {
	  this.jailIndex = 0;
	};
	exports.Jailer = Jailer;

	Jailer.create = function create() {
	  return new Jailer();
	};

	Jailer.prototype.jail = function jail(node) {
	  var self = this,
	      current = {},
	      stack = [current];

	  function register(name, parent) {
	    var scope = parent ? stack[stack.length - 2] : current;
	    assert.ok(scope);

	    if (!scope.hasOwnProperty(name))
	      scope[name] = name + '__$' + self.jailIndex++;

	    return { type: 'Identifier', name: scope[name] };
	  }

	  (Array.isArray(node) ? node : [node]).forEach(function(node) {
	    estraverse.replace(node, {
	      enter: function(node, parent, notify) {
	        if (node.type === 'VariableDeclarator') {
	          // Change variable's name
	          return {
	            type: 'VariableDeclarator',
	            id: register(node.id.name),
	            init: node.init
	          };
	        } else if (node.type === 'Identifier') {
	          if ((parent.type === 'FunctionExpression' ||
	               parent.type === 'FunctionDeclaration')) {
	            if (node === parent.id) {
	              return register(node.name, true);
	            } else if (parent.params.indexOf(node) !== -1) {
	              current[node.name] = node.name;
	            }
	          } else if (!(parent.type === 'Property' && parent.key === node) &&
	                     !(parent.type === 'MemberExpression' &&
	                       parent.computed === false &&
	                       parent.property === node)) {
	            var name;
	            for (var i = stack.length - 1; i >= 0; i--) {
	              if (stack[i].hasOwnProperty(node.name)) {
	                name = stack[i][node.name];
	                break;
	              }
	            }
	            return {
	              type: 'Identifier',
	              name: name || node.name
	            };
	          }
	        } else if (node.type === 'FunctionExpression' ||
	                   node.type === 'FunctionDeclaration') {
	          // Enter new scope
	          current = {};
	          stack.push(current);
	        }
	      },
	      leave: function(node) {
	        if (node.type === 'FunctionExpression' ||
	            node.type === 'FunctionDeclaration') {
	          stack.pop();
	          current = stack[stack.length - 1];
	          assert(stack.length > 0);
	        }
	      }
	    });
	  });

	  return node;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var estraverse = __webpack_require__(9);

	function Inliner() {
	  this.lastBlock = null;
	  this.lastStmt = null;
	  this.blockHistory = [];
	  this.stmtHistory = [];
	  this.blockSubsts = [];
	  this.localRef = {};
	};
	exports.Inliner = Inliner;

	Inliner.create = function create() {
	  return new Inliner();
	};

	Inliner.inline = function inline(ast) {
	  return new Inliner().inline(ast);
	};

	Inliner.prototype.inline = function run(ast) {
	  estraverse.replace(ast, {
	    enter: this.enter.bind(this),
	    leave: this.leave.bind(this)
	  });
	  return ast;
	};

	Inliner.prototype.enter = function enter(node, parent) {
	  if (Array.isArray(node.body)) {
	    this.blockHistory.push(node);
	    this.lastBlock = node;
	  }
	  if (/Statement/.test(node.type) || node.type === 'VariableDeclaration') {
	    this.stmtHistory.push(node);
	    this.lastStmt = node;
	  }
	};

	Inliner.prototype.leave = function leave(node) {
	  // Inline stmts if we're leaving block
	  this.tryInline(node);

	  if (Array.isArray(node.body) && node === this.lastBlock) {
	    this.blockHistory.pop();
	    this.lastBlock = this.blockHistory[this.blockHistory.length - 1];
	  }

	  if (node === this.lastStmt) {
	    this.stmtHistory.pop();
	    this.lastStmt = this.stmtHistory[this.stmtHistory.length - 1];
	  }

	  // Try inlining closure
	  this.inlineClosure(node);
	};

	Inliner.prototype.inlineClosure = function inlineClosure(node) {
	  if (node.type !== 'CallExpression')
	    return;

	  var callee = node.callee;
	  var isCallThis = callee.type === 'MemberExpression' &&
	                   callee.object.type === 'FunctionExpression' &&
	                   ((callee.property.name ||
	                     callee.property.value) === 'call') &&
	                   node.arguments.length >= 1 &&
	                   node.arguments[0].type === 'ThisExpression';
	  var noThis = callee.type === 'FunctionExpression' &&
	               node.arguments.length === 0 &&
	               this.noThisUsage(callee);
	  if (!isCallThis && !noThis)
	    return;

	  // Skip nested blocks
	  // TODO(indutny): figure out where they're created
	  var stmts = isCallThis ? node.callee.object.body : node.callee.body;
	  do {
	    var last = stmts;
	    while (stmts.type === 'BlockStatement') stmts = stmts.body;
	    while (Array.isArray(stmts) &&
	           stmts.length === 1 &&
	           stmts[0].type === 'BlockStatement') {
	      stmts = stmts[0].body;
	    }
	  } while (last !== stmts);

	  var body;
	  var result;
	  if (stmts.length === 1 && stmts[0].type === 'ReturnStatement') {
	    // local()(function() { return expr })
	    result = stmts[0].argument;
	  } else {
	    var pre = stmts.slice(0, -1),
	        last = stmts[stmts.length - 1];

	    if (pre.every(this.isNonReturn.bind(this))) {
	      if (this.isNonReturn(last)) {
	        // (function() { non-return* }).call(this)
	        body = stmts;
	      } else if (last.type === 'ReturnStatement') {
	        // (function() { non-return*; return ... }).call(this)
	        body = pre;
	        result = last.argument;
	      }
	    }
	  }

	  if (!body && !result)
	    return;

	  // Inline function's body into last block
	  if (!this.lastBlock || !this.lastStmt)
	    return;

	  var index = this.lastBlock.body.indexOf(this.lastStmt);
	  if (index === -1)
	    return;

	  body = body || [];
	  result = result || { type: 'Identifier', name: 'undefined' };

	  // Try replacing statement when leaving it
	  this.blockSubsts.push({
	    index: index,
	    block: this.lastBlock,
	    from: node,
	    body: body,
	    result: result
	  });

	  // Sort by decreasing index to ensure replacement order
	  // XXX: Use insertion sort
	  this.blockSubsts.sort(function(a, b) {
	    return b.index - a.index;
	  });
	};

	Inliner.prototype.tryInline = function tryInline(node) {
	  if (node !== this.lastBlock || !this.blockSubsts.length)
	    return;

	  this.blockSubsts = this.blockSubsts.filter(function(item) {
	    if (item.block !== this.lastBlock) return true;

	    var stmt = item.block.body[item.index],
	        subst = null;

	    var stmts = item.body.concat(stmt),
	        res = item.result;

	    if (stmt.type === 'ExpressionStatement' &&
	        stmt.expression.type === 'AssignmentExpression' &&
	        stmt.expression.right === item.from) {
	      subst = stmts;
	      stmt.expression.right = res;
	    } else if (stmt.type === 'VariableDeclaration' &&
	               stmt.declarations.length === 1 &&
	               stmt.declarations[0].init === item.from) {
	      subst = stmts;
	      stmt.declarations[0].init = res;
	    } else if (stmt.type === 'ExpressionStatement' &&
	               stmt.expression === item.from) {
	      subst = stmts.slice(0, -1);
	    } else if (stmt.type === 'ReturnStatement' &&
	               stmt.argument === item.from) {
	      stmt.argument = res;
	      subst = stmts;
	    }

	    if (subst !== null) {
	      Array.prototype.splice.apply(item.block.body,
	                                   [item.index, 1].concat(subst));
	    }
	    return false;
	  }, this);
	};

	Inliner.prototype.isNonReturn = function isNonReturn(ast) {
	  if (!ast)
	    return true;

	  if (ast.type === 'BlockStatement')
	    return ast.body.every(this.isNonReturn.bind(this));

	  if (ast.type === 'IfStatement')
	    return this.isNonReturn(ast.consequent) && this.isNonReturn(ast.alternate);

	  if (ast.type === 'WhileStatement' ||
	      ast.type === 'DoWhileStatement' ||
	      ast.type === 'ForStatement' ||
	      ast.type === 'ForInStatement')
	    return this.isNonReturn(ast.body);

	  if (ast.type === 'VarStatement') {
	    return ast.declarations.every(function(decl) {
	      return /^__\$/.test(decl.id.name);
	    });
	  }

	  return ast.type !== 'ReturnStatement';
	};

	Inliner.prototype.noThisUsage = function noThisUsage(ast) {
	  var res = true;
	  estraverse.traverse(ast, {
	    enter: function(ast) {
	      if (ast.type === 'ThisExpression') {
	        res = false;
	        this.skip();
	      } else if (ast.type === 'FunctionExpression') {
	        this.skip();
	      }
	    }
	  });

	  return res;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6);
	var estraverse = __webpack_require__(9);

	function Splitter(compiler) {
	  this.compiler = compiler;
	  this.splitPoint = 'xjst::split_point';
	  this.groupId = 0;
	  this.groups = [];

	  this.currentBody = null;
	  this.inApplyc = false;
	  this.sizeLimit = 32;
	};

	exports.Splitter = Splitter;

	Splitter.create = function create(compiler) {
	  return new Splitter(compiler);
	};

	Splitter.prototype.getSplitPoint = function getSplitPoint() {
	  return {
	    type: 'ExpressionStatement',
	    expression: {
	      type: 'Literal',
	      value: this.splitPoint
	    }
	  };
	};

	Splitter.prototype.split = function split(ast) {
	  assert(ast.body);
	  this.findFunctions(ast).forEach(function(fn) {
	    this.inApplyc = fn.type === 'FunctionDeclaration' &&
	                    fn.id &&
	                    fn.id.name === 'applyc';
	    fn.body = this.splitBody(fn.body);
	  }, this);
	  ast.body = ast.body.concat(this.getGroups());
	  return ast;
	};

	Splitter.prototype.getGroups = function getGroups() {
	  var result = [];
	  this.groups.forEach(function(group) {
	    result = result.concat(group.render());
	  });
	  return result;
	};

	Splitter.prototype.findFunctions = function findFunctions(ast) {
	  var result = [];
	  var self = this;

	  estraverse.traverse(ast, {
	    leave: function(node) {
	      if (node.type !== 'FunctionExpression' &&
	          node.type !== 'FunctionDeclaration') {
	        return;
	      }

	      var hasCtx = node.params.some(function(arg) {
	        return arg.name === self.compiler.ctx.name;
	      });
	      var hasRef = node.params.some(function(arg) {
	        return arg.name === self.compiler.ref.name;
	      });
	      if (hasCtx && hasRef)
	        result.push(node);
	    }
	  });

	  return result;
	};

	Splitter.prototype.splitBody = function splitBody(body) {
	  // NOTE: We'll modify bodies in-place
	  estraverse.traverse(body, {
	    enter: function(node) {
	      if (node.type === 'FunctionExpression' ||
	          node.type === 'FunctionStatement') {
	        return this.skip();
	      }
	    },
	    leave: this.splitBodyLeave.bind(this)
	  });

	  return body;
	};

	Splitter.prototype.isSplitPoint = function isSplitPoint(node) {
	  return node.type === 'ExpressionStatement' &&
	         node.expression.type === 'Literal' &&
	         node.expression.value === this.splitPoint;
	};

	Splitter.prototype.splitBodyLeave = function splitBodyLeave(node, parent) {
	  if (node.type !== 'BlockStatement')
	    return;

	  // Count statements in all nested bodies and split where limit is reached
	  this.currentBody = parent ? undefined : node;
	  this.countAndSplit(node);
	};

	Splitter.prototype.countAndSplit = function countAndSplit(stmt) {
	  var currentSize = 0;

	  if (!stmt)
	    return currentSize;

	  // Cache results to prevent exponential time
	  if (stmt._splitState)
	    return stmt._splitState.stmtCount;
	  assert(stmt.type !== 'BodyStatement');

	  // Visit bodies
	  if (stmt.type === 'BlockStatement') {
	    var groups = [];
	    var stmts = [];
	    var calls = [];

	    // Do it from end to start to inline code at beginning
	    stmt.body.slice().reverse().forEach(function(stmt) {
	      // Split group if size limit is reached
	      if (this.isSplitPoint(stmt) && currentSize > this.sizeLimit) {
	        var group = this.createGroup(stmts, currentSize);
	        stmts = [];

	        groups.push(group);
	        currentSize = 0;
	        calls = [group.callStmts()].concat(calls);
	      }

	      stmts.push(stmt);
	      currentSize += this.countAndSplit(stmt);
	    }, this);

	    // Smallest group should be inlined anyway if everything is split
	    if (this.currentBody === stmt &&
	        stmts.length === groups.length &&
	        groups.length > 0) {
	      var minSize = Infinity;
	      var minGroup = null;
	      var minIndex;
	      groups.forEach(function(group, i) {
	        if (group.size > minSize)
	          return;
	        minSize = group.size;
	        minGroup = group;
	        minIndex = i;
	      });
	      calls.splice(calls.length - minIndex - 1, 1);
	      stmts = minGroup.body.concat(stmts);
	      currentSize += minSize;
	      minGroup.remove();
	    }

	    stmt.body = stmts.slice().reverse();
	    calls.forEach(function(call) {
	      stmt.body = stmt.body.concat(call);
	    });
	    stmt.body = stmt.body.filter(function(stmt) {
	      return !this.isSplitPoint(stmt);
	    }, this);

	    // Add return __$ref in top-level body
	    if (this.currentBody === stmt &&
	        !this.inApplyc &&
	        stmt.body[stmt.body.length - 1].type !== 'ReturnStatement') {
	      stmt.body.push({
	        type: 'ReturnStatement',
	        argument: this.compiler.ref
	      })
	    }
	    stmt._splitState = { stmtCount: currentSize };
	    return currentSize;
	  }

	  // Each statement counts
	  if (!this.isSplitPoint(stmt))
	    currentSize++;

	  // Nested statements too
	  if (stmt.type === 'IfStatement') {
	    currentSize += this.countAndSplit(stmt.consequent);
	    currentSize += this.countAndSplit(stmt.alternate);
	    return currentSize;
	  }

	  // Visit blocks and loops
	  if (stmt.body) {
	    currentSize += this.countAndSplit(stmt.body);
	    return currentSize;
	  }

	  return currentSize;
	};

	Splitter.prototype.createGroup = function createGroup(stmts, size) {
	  return new Group(this, stmts, size);
	};

	Splitter.prototype.groupName = function groupName(id) {
	  return {
	    type: 'Identifier',
	    name: '__$g' + id
	  };
	};

	function Group(splitter, stmts, size) {
	  this.splitter = splitter;

	  // NOTE: body is reversed here
	  this.id = this.splitter.groupId++;
	  this.name = this.splitter.groupName(this.id);
	  this.body = stmts;
	  this.size = size;

	  this.splitter.groups.push(this);
	};

	Group.prototype.remove = function remove() {
	  var index = this.splitter.groups.indexOf(this);
	  if (index === -1)
	    return;
	  this.splitter.groups.splice(index, 1);
	};

	Group.prototype.callStmts = function callStmts() {
	  return this.splitter.compiler.checkRef({
	    type: 'CallExpression',
	    callee: this.name,
	    arguments: [
	      this.splitter.compiler.ctx,
	      this.splitter.compiler.ref
	    ]
	  }).apply;
	};

	Group.prototype.render = function render() {
	  return {
	    type: 'FunctionDeclaration',
	    id: this.name,
	    params: [ this.splitter.compiler.ctx, this.splitter.compiler.ref ],
	    defaults: [],
	    rest: null,
	    generator: false,
	    expression: false,
	    body: {
	      type: 'BlockStatement',
	      body: this.body.slice().reverse().filter(function(stmt) {
	        return !this.splitter.isSplitPoint(stmt);
	      }, this).concat({
	        type: 'ReturnStatement',
	        argument: this.splitter.compiler.ref
	      })
	    }
	  };
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6);

	var compiler = __webpack_require__(15);
	var Map = compiler.Map;
	var Pair = compiler.Pair;

	function MapFlattener(compiler) {
	  this.compiler = compiler;

	  this.separator = '::';
	}
	exports.MapFlattener = MapFlattener;

	MapFlattener.create = function create(compiler) {
	  return new MapFlattener(compiler);
	};

	MapFlattener.prototype.walk = function walk(node, parent) {
	  // Flatten all children first
	  node.mapChildren(function(child) {
	    return this.walk(child, node);
	  }, this);

	  if (!(node instanceof Map))
	    return node;

	  // Check that children are maps too
	  var hasNested = node.getChildren().some(function(child) {
	    if (child instanceof Map)
	      return true;
	    else
	      return false;
	  });

	  // Flatten only parent node for now
	  if (parent || !hasNested)
	    return node;

	  // Clone all pairs
	  var pairs = Object.keys(node.pairs).map(function(key) {
	    return {
	      value: node.pairs[key].value,
	      bodies: node.pairs[key].bodies
	    };
	  });

	  // Filter map children and find most popular subpredicate
	  var subpredicates = {};
	  var subpredicateExprs = {};
	  pairs = pairs.filter(function(pair) {
	    pair.bodies = pair.bodies.filter(function(body) {
	      if (!(body instanceof Map) || !body.predicate)
	        return false;

	      if (!subpredicates[body.predicateId])
	        subpredicates[body.predicateId] = 1;
	      else
	        subpredicates[body.predicateId]++;
	      subpredicateExprs[body.predicateId] = body.predicate;

	      return true;
	    });
	    return pair.bodies.length !== 0;
	  });

	  var subpredicateId = Object.keys(subpredicates).map(function(key) {
	    return { id: key, count: subpredicates[key] };
	  }).sort(function(a, b){
	    return b.count - a.count;
	  })[0].id | 0;
	  var subpredicate = subpredicateExprs[subpredicateId];

	  // Filter subbodies with different predicate
	  pairs = pairs.filter(function(pair) {
	    pair.bodies = pair.bodies.filter(function(body) {
	      return body.predicateId === subpredicateId;
	    });
	    return pair.bodies.length !== 0;
	  });

	  // Flatten
	  var flatMap = new Map(this.compiler);
	  var predicate = {
	    type: 'BinaryExpression',
	    operator: '+',
	    left: node.predicate,
	    right: {
	      type: 'BinaryExpression',
	      operator: '+',
	      left: { type: 'Literal', value: this.separator },
	      right: subpredicate
	    }
	  };
	  pairs.forEach(function(pair) {
	    assert.equal(pair.value.type, 'Literal');

	    var left = pair.value.value;
	    pair.bodies.forEach(function(body) {
	      Object.keys(body.pairs).forEach(function(subkey) {
	        var subpair = body.pairs[subkey];
	        assert.equal(subpair.value.type, 'Literal');

	        var key = left + this.separator + subpair.value.value;
	        subpair.bodies.forEach(function(subbody) {
	          flatMap.add(predicate, { type: 'Literal', value: key }, subbody);
	        });
	      }, this);
	    }, this);
	  }, this);

	  return new Pair(this.compiler, flatMap, node);
	};

	MapFlattener.prototype.flatten = function flatten(program) {
	  return program.map(function(node) {
	    return this.walk(node);
	  }, this);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(21).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34).setImmediate, __webpack_require__(34).clearImmediate))

/***/ }
/******/ ]);