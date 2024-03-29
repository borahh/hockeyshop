// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/alpinejs/dist/module.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {
      exports: {}
    };
    callback(module.exports, module);
  }

  return module.exports;
};

var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module)) if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
      get: () => module[key],
      enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
    });
  }

  return target;
};

var __toModule = module => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {
    get: () => module.default,
    enumerable: true
  } : {
    value: module,
    enumerable: true
  })), module);
}; // node_modules/@vue/shared/dist/shared.cjs.js


var require_shared_cjs = __commonJS(exports => {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");

    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
  }

  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  var isGloballyWhitelisted = /* @__PURE__ */makeMap(GLOBALS_WHITE_LISTED);
  var range = 2;

  function generateCodeFrame(source, start2 = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];

    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;

      if (count >= start2) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;

          if (j === i) {
            const pad = start2 - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start2);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }

            count += lineLength + 1;
          }
        }

        break;
      }
    }

    return res.join("\n");
  }

  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
  var isBooleanAttr2 = /* @__PURE__ */makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  var attrValidationCache = {};

  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }

    const isUnsafe = unsafeAttrCharRE.test(name);

    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }

    return attrValidationCache[name] = !isUnsafe;
  }

  var propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  var isNoUnitNumericStyleProp = /* @__PURE__ */makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
  var isKnownAttr = /* @__PURE__ */makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);

  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};

      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }

      return res;
    } else if (isObject(value)) {
      return value;
    }
  }

  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;

  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }

  function stringifyStyle(styles) {
    let ret = "";

    if (!styles) {
      return ret;
    }

    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);

      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }

    return ret;
  }

  function normalizeClass(value) {
    let res = "";

    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);

        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }

    return res.trim();
  }

  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */makeMap(SVG_TAGS);
  var isVoidTag = /* @__PURE__ */makeMap(VOID_TAGS);
  var escapeRE = /["'&<>]/;

  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);

    if (!match) {
      return str;
    }

    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;

        case 38:
          escaped = "&amp;";
          break;

        case 39:
          escaped = "&#39;";
          break;

        case 60:
          escaped = "&lt;";
          break;

        case 62:
          escaped = "&gt;";
          break;

        default:
          continue;
      }

      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }

      lastIndex = index + 1;
      html += escaped;
    }

    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }

  var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }

  function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;

    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }

    return equal;
  }

  function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);

    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }

    aValidType = isArray(a);
    bValidType = isArray(b);

    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }

    aValidType = isObject(a);
    bValidType = isObject(b);

    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }

      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;

      if (aKeysCount !== bKeysCount) {
        return false;
      }

      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);

        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }

    return String(a) === String(b);
  }

  function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
  }

  var toDisplayString = val => {
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };

  var replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }

    return val;
  };

  var babelParserDefaultPlugins = ["bigInt", "optionalChaining", "nullishCoalescingOperator"];
  var EMPTY_OBJ = Object.freeze({});
  var EMPTY_ARR = Object.freeze([]);

  var NOOP = () => {};

  var NO = () => false;

  var onRE = /^on[^a-z]/;

  var isOn = key => onRE.test(key);

  var isModelListener = key => key.startsWith("onUpdate:");

  var extend = Object.assign;

  var remove = (arr, el) => {
    const i = arr.indexOf(el);

    if (i > -1) {
      arr.splice(i, 1);
    }
  };

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var hasOwn = (val, key) => hasOwnProperty.call(val, key);

  var isArray = Array.isArray;

  var isMap = val => toTypeString(val) === "[object Map]";

  var isSet = val => toTypeString(val) === "[object Set]";

  var isDate = val => val instanceof Date;

  var isFunction = val => typeof val === "function";

  var isString = val => typeof val === "string";

  var isSymbol = val => typeof val === "symbol";

  var isObject = val => val !== null && typeof val === "object";

  var isPromise = val => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };

  var objectToString = Object.prototype.toString;

  var toTypeString = value => objectToString.call(value);

  var toRawType = value => {
    return toTypeString(value).slice(8, -1);
  };

  var isPlainObject = val => toTypeString(val) === "[object Object]";

  var isIntegerKey = key => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;

  var isReservedProp = /* @__PURE__ */makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");

  var cacheStringFunction = fn => {
    const cache = Object.create(null);
    return str => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };

  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction(str => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction(str => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction(str => str ? `on${capitalize(str)}` : ``);

  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);

  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };

  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };

  var toNumber = val => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };

  var _globalThis;

  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };

  exports.EMPTY_ARR = EMPTY_ARR;
  exports.EMPTY_OBJ = EMPTY_OBJ;
  exports.NO = NO;
  exports.NOOP = NOOP;
  exports.PatchFlagNames = PatchFlagNames;
  exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.def = def;
  exports.escapeHtml = escapeHtml;
  exports.escapeHtmlComment = escapeHtmlComment;
  exports.extend = extend;
  exports.generateCodeFrame = generateCodeFrame;
  exports.getGlobalThis = getGlobalThis;
  exports.hasChanged = hasChanged;
  exports.hasOwn = hasOwn;
  exports.hyphenate = hyphenate;
  exports.invokeArrayFns = invokeArrayFns;
  exports.isArray = isArray;
  exports.isBooleanAttr = isBooleanAttr2;
  exports.isDate = isDate;
  exports.isFunction = isFunction;
  exports.isGloballyWhitelisted = isGloballyWhitelisted;
  exports.isHTMLTag = isHTMLTag;
  exports.isIntegerKey = isIntegerKey;
  exports.isKnownAttr = isKnownAttr;
  exports.isMap = isMap;
  exports.isModelListener = isModelListener;
  exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
  exports.isObject = isObject;
  exports.isOn = isOn;
  exports.isPlainObject = isPlainObject;
  exports.isPromise = isPromise;
  exports.isReservedProp = isReservedProp;
  exports.isSSRSafeAttrName = isSSRSafeAttrName;
  exports.isSVGTag = isSVGTag;
  exports.isSet = isSet;
  exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isVoidTag = isVoidTag;
  exports.looseEqual = looseEqual;
  exports.looseIndexOf = looseIndexOf;
  exports.makeMap = makeMap;
  exports.normalizeClass = normalizeClass;
  exports.normalizeStyle = normalizeStyle;
  exports.objectToString = objectToString;
  exports.parseStringStyle = parseStringStyle;
  exports.propsToAttrMap = propsToAttrMap;
  exports.remove = remove;
  exports.slotFlagsText = slotFlagsText;
  exports.stringifyStyle = stringifyStyle;
  exports.toDisplayString = toDisplayString;
  exports.toHandlerKey = toHandlerKey;
  exports.toNumber = toNumber;
  exports.toRawType = toRawType;
  exports.toTypeString = toTypeString;
}); // node_modules/@vue/shared/index.js


var require_shared = __commonJS((exports, module) => {
  "use strict";

  if (false) {
    module.exports = null;
  } else {
    module.exports = require_shared_cjs();
  }
}); // node_modules/@vue/reactivity/dist/reactivity.cjs.js


var require_reactivity_cjs = __commonJS(exports => {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var shared = require_shared();
  var targetMap = new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol("iterate");
  var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");

  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }

  function effect3(fn, options = shared.EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }

    const effect4 = createReactiveEffect(fn, options);

    if (!options.lazy) {
      effect4();
    }

    return effect4;
  }

  function stop2(effect4) {
    if (effect4.active) {
      cleanup(effect4);

      if (effect4.options.onStop) {
        effect4.options.onStop();
      }

      effect4.active = false;
    }
  }

  var uid = 0;

  function createReactiveEffect(fn, options) {
    const effect4 = function reactiveEffect() {
      if (!effect4.active) {
        return fn();
      }

      if (!effectStack.includes(effect4)) {
        cleanup(effect4);

        try {
          enableTracking();
          effectStack.push(effect4);
          activeEffect = effect4;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };

    effect4.id = uid++;
    effect4.allowRecurse = !!options.allowRecurse;
    effect4._isEffect = true;
    effect4.active = true;
    effect4.raw = fn;
    effect4.deps = [];
    effect4.options = options;
    return effect4;
  }

  function cleanup(effect4) {
    const {
      deps
    } = effect4;

    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect4);
      }

      deps.length = 0;
    }
  }

  var shouldTrack = true;
  var trackStack = [];

  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }

  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }

  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }

  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }

    let depsMap = targetMap.get(target);

    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }

    let dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, dep = new Set());
    }

    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);

      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }

  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);

    if (!depsMap) {
      return;
    }

    const effects = new Set();

    const add2 = effectsToAdd => {
      if (effectsToAdd) {
        effectsToAdd.forEach(effect4 => {
          if (effect4 !== activeEffect || effect4.allowRecurse) {
            effects.add(effect4);
          }
        });
      }
    };

    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && shared.isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }

      switch (type) {
        case "add":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));

            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (shared.isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }

          break;

        case "delete":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));

            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }

          break;

        case "set":
          if (shared.isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }

          break;
      }
    }

    const run = effect4 => {
      if (effect4.options.onTrigger) {
        effect4.options.onTrigger({
          effect: effect4,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }

      if (effect4.options.scheduler) {
        effect4.options.scheduler(effect4);
      } else {
        effect4();
      }
    };

    effects.forEach(run);
  }

  var isNonTrackableKeys = /* @__PURE__ */shared.makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(key => Symbol[key]).filter(shared.isSymbol));
  var get2 = /* @__PURE__ */createGetter();
  var shallowGet = /* @__PURE__ */createGetter(false, true);
  var readonlyGet = /* @__PURE__ */createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach(key => {
    const method = Array.prototype[key];

    arrayInstrumentations[key] = function (...args) {
      const arr = toRaw2(this);

      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }

      const res = method.apply(arr, args);

      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw2));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach(key => {
    const method = Array.prototype[key];

    arrayInstrumentations[key] = function (...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });

  function createGetter(isReadonly2 = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }

      const targetIsArray = shared.isArray(target);

      if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }

      const res = Reflect.get(target, key, receiver);

      if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }

      if (!isReadonly2) {
        track(target, "get", key);
      }

      if (shallow) {
        return res;
      }

      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }

      if (shared.isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive3(res);
      }

      return res;
    };
  }

  var set2 = /* @__PURE__ */createSetter();
  var shallowSet = /* @__PURE__ */createSetter(true);

  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];

      if (!shallow) {
        value = toRaw2(value);
        oldValue = toRaw2(oldValue);

        if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }

      const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);

      if (target === toRaw2(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }

      return result;
    };
  }

  function deleteProperty(target, key) {
    const hadKey = shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);

    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }

    return result;
  }

  function has(target, key) {
    const result = Reflect.has(target, key);

    if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }

    return result;
  }

  function ownKeys(target) {
    track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }

  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,

    set(target, key) {
      {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },

    deleteProperty(target, key) {
      {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }

  };
  var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });

  var toReactive = value => shared.isObject(value) ? reactive3(value) : value;

  var toReadonly = value => shared.isObject(value) ? readonly(value) : value;

  var toShallow = value => value;

  var getProto = v => Reflect.getPrototypeOf(v);

  function get$1(target, key, isReadonly2 = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);

    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }

    !isReadonly2 && track(rawTarget, "get", rawKey);
    const {
      has: has2
    } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;

    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }

  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);

    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }

    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }

  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }

  function add(value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);

    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }

    return this;
  }

  function set$1(key, value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const {
      has: has2,
      get: get3
    } = getProto(target);
    let hadKey = has2.call(target, key);

    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }

    const oldValue = get3.call(target, key);
    target.set(key, value);

    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (shared.hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }

    return this;
  }

  function deleteEntry(key) {
    const target = toRaw2(this);
    const {
      has: has2,
      get: get3
    } = getProto(target);
    let hadKey = has2.call(target, key);

    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }

    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);

    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }

    return result;
  }

  function clear() {
    const target = toRaw2(this);
    const hadItems = target.size !== 0;
    const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();

    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }

    return result;
  }

  function createForEach(isReadonly2, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw2(target);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }

  function createIterableMethod(method, isReadonly2, isShallow) {
    return function (...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw2(target);
      const targetIsMap = shared.isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const {
            value,
            done
          } = innerIterator.next();
          return done ? {
            value,
            done
          } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },

        [Symbol.iterator]() {
          return this;
        }

      };
    };
  }

  function createReadonlyMethod(type) {
    return function (...args) {
      {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
      }
      return type === "delete" ? false : this;
    };
  }

  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has$1.call(this, key, true);
    },

    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has$1.call(this, key, true);
    },

    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });

  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }

      return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }

  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };

  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw2(key);

    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = shared.toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }

  var reactiveMap = new WeakMap();
  var shallowReactiveMap = new WeakMap();
  var readonlyMap = new WeakMap();
  var shallowReadonlyMap = new WeakMap();

  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;

      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;

      default:
        return 0;
    }
  }

  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
  }

  function reactive3(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }

    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }

  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }

  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }

  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }

  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!shared.isObject(target)) {
      {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }

    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }

    const existingProxy = proxyMap.get(target);

    if (existingProxy) {
      return existingProxy;
    }

    const targetType = getTargetType(target);

    if (targetType === 0) {
      return target;
    }

    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }

  function isReactive2(value) {
    if (isReadonly(value)) {
      return isReactive2(value["__v_raw"]);
    }

    return !!(value && value["__v_isReactive"]);
  }

  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }

  function isProxy(value) {
    return isReactive2(value) || isReadonly(value);
  }

  function toRaw2(observed) {
    return observed && toRaw2(observed["__v_raw"]) || observed;
  }

  function markRaw(value) {
    shared.def(value, "__v_skip", true);
    return value;
  }

  var convert = val => shared.isObject(val) ? reactive3(val) : val;

  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }

  function ref(value) {
    return createRef(value);
  }

  function shallowRef(value) {
    return createRef(value, true);
  }

  var RefImpl = class {
    constructor(_rawValue, _shallow = false) {
      this._rawValue = _rawValue;
      this._shallow = _shallow;
      this.__v_isRef = true;
      this._value = _shallow ? _rawValue : convert(_rawValue);
    }

    get value() {
      track(toRaw2(this), "get", "value");
      return this._value;
    }

    set value(newVal) {
      if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw2(this), "set", "value", newVal);
      }
    }

  };

  function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
      return rawValue;
    }

    return new RefImpl(rawValue, shallow);
  }

  function triggerRef(ref2) {
    trigger(toRaw2(ref2), "set", "value", ref2.value);
  }

  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }

  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];

      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };

  function proxyRefs(objectWithRefs) {
    return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }

  var CustomRefImpl = class {
    constructor(factory) {
      this.__v_isRef = true;
      const {
        get: get3,
        set: set3
      } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
      this._get = get3;
      this._set = set3;
    }

    get value() {
      return this._get();
    }

    set value(newVal) {
      this._set(newVal);
    }

  };

  function customRef(factory) {
    return new CustomRefImpl(factory);
  }

  function toRefs(object) {
    if (!isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }

    const ret = shared.isArray(object) ? new Array(object.length) : {};

    for (const key in object) {
      ret[key] = toRef(object, key);
    }

    return ret;
  }

  var ObjectRefImpl = class {
    constructor(_object, _key) {
      this._object = _object;
      this._key = _key;
      this.__v_isRef = true;
    }

    get value() {
      return this._object[this._key];
    }

    set value(newVal) {
      this._object[this._key] = newVal;
    }

  };

  function toRef(object, key) {
    return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
  }

  var ComputedRefImpl = class {
    constructor(getter, _setter, isReadonly2) {
      this._setter = _setter;
      this._dirty = true;
      this.__v_isRef = true;
      this.effect = effect3(getter, {
        lazy: true,
        scheduler: () => {
          if (!this._dirty) {
            this._dirty = true;
            trigger(toRaw2(this), "set", "value");
          }
        }
      });
      this["__v_isReadonly"] = isReadonly2;
    }

    get value() {
      const self2 = toRaw2(this);

      if (self2._dirty) {
        self2._value = this.effect();
        self2._dirty = false;
      }

      track(self2, "get", "value");
      return self2._value;
    }

    set value(newValue) {
      this._setter(newValue);
    }

  };

  function computed(getterOrOptions) {
    let getter;
    let setter;

    if (shared.isFunction(getterOrOptions)) {
      getter = getterOrOptions;

      setter = () => {
        console.warn("Write operation failed: computed value is readonly");
      };
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }

    return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
  }

  exports.ITERATE_KEY = ITERATE_KEY;
  exports.computed = computed;
  exports.customRef = customRef;
  exports.effect = effect3;
  exports.enableTracking = enableTracking;
  exports.isProxy = isProxy;
  exports.isReactive = isReactive2;
  exports.isReadonly = isReadonly;
  exports.isRef = isRef;
  exports.markRaw = markRaw;
  exports.pauseTracking = pauseTracking;
  exports.proxyRefs = proxyRefs;
  exports.reactive = reactive3;
  exports.readonly = readonly;
  exports.ref = ref;
  exports.resetTracking = resetTracking;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.stop = stop2;
  exports.toRaw = toRaw2;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.track = track;
  exports.trigger = trigger;
  exports.triggerRef = triggerRef;
  exports.unref = unref;
}); // node_modules/@vue/reactivity/index.js


var require_reactivity = __commonJS((exports, module) => {
  "use strict";

  if (false) {
    module.exports = null;
  } else {
    module.exports = require_reactivity_cjs();
  }
}); // packages/alpinejs/src/scheduler.js


var flushPending = false;
var flushing = false;
var queue = [];

function scheduler(callback) {
  queueJob(callback);
}

function queueJob(job) {
  if (!queue.includes(job)) queue.push(job);
  queueFlush();
}

function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}

function flushJobs() {
  flushPending = false;
  flushing = true;

  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }

  queue.length = 0;
  flushing = false;
} // packages/alpinejs/src/reactivity.js


var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;

function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}

function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;

  effect = callback => engine.effect(callback, {
    scheduler: task => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    }
  });

  raw = engine.raw;
}

function overrideEffect(override) {
  effect = override;
}

function elementBoundEffect(el) {
  let cleanup = () => {};

  let wrappedEffect = callback => {
    let effectReference = effect(callback);

    if (!el._x_effects) {
      el._x_effects = new Set();

      el._x_runEffects = () => {
        el._x_effects.forEach(i => i());
      };
    }

    el._x_effects.add(effectReference);

    cleanup = () => {
      if (effectReference === void 0) return;

      el._x_effects.delete(effectReference);

      release(effectReference);
    };
  };

  return [wrappedEffect, () => {
    cleanup();
  }];
} // packages/alpinejs/src/mutation.js


var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];

function onElAdded(callback) {
  onElAddeds.push(callback);
}

function onElRemoved(callback) {
  onElRemoveds.push(callback);
}

function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}

function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];

  el._x_attributeCleanups[name].push(callback);
}

function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups) return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach(i => i());
      delete el._x_attributeCleanups[name];
    }
  });
}

var observer = new MutationObserver(onMutate);
var currentlyObserving = false;

function startObservingMutations() {
  observer.observe(document, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeOldValue: true
  });
  currentlyObserving = true;
}

function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}

var recordQueue = [];
var willProcessRecordQueue = false;

function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());

  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}

function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}

function mutateDom(callback) {
  if (!currentlyObserving) return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}

var isCollecting = false;
var deferredMutations = [];

function deferMutations() {
  isCollecting = true;
}

function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}

function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }

  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = new Map();
  let removedAttributes = new Map();

  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver) continue;

    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach(node => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach(node => node.nodeType === 1 && removedNodes.push(node));
    }

    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;

      let add = () => {
        if (!addedAttributes.has(el)) addedAttributes.set(el, []);
        addedAttributes.get(el).push({
          name,
          value: el.getAttribute(name)
        });
      };

      let remove = () => {
        if (!removedAttributes.has(el)) removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };

      if (el.hasAttribute(name) && oldValue === null) {
        add();
      } else if (el.hasAttribute(name)) {
        remove();
        add();
      } else {
        remove();
      }
    }
  }

  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach(i => i(el, attrs));
  });

  for (let node of removedNodes) {
    if (addedNodes.includes(node)) continue;
    onElRemoveds.forEach(i => i(node));
  }

  addedNodes.forEach(node => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });

  for (let node of addedNodes) {
    if (removedNodes.includes(node)) continue;
    if (!node.isConnected) continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach(i => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }

  addedNodes.forEach(node => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
} // packages/alpinejs/src/scope.js


function scope(node) {
  return mergeProxies(closestDataStack(node));
}

function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter(i => i !== data2);
  };
}

function refreshScope(element, scope2) {
  let existingScope = element._x_dataStack[0];
  Object.entries(scope2).forEach(([key, value]) => {
    existingScope[key] = value;
  });
}

function closestDataStack(node) {
  if (node._x_dataStack) return node._x_dataStack;

  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }

  if (!node.parentNode) {
    return [];
  }

  return closestDataStack(node.parentNode);
}

function mergeProxies(objects) {
  let thisProxy = new Proxy({}, {
    ownKeys: () => {
      return Array.from(new Set(objects.flatMap(i => Object.keys(i))));
    },
    has: (target, name) => {
      return objects.some(obj => obj.hasOwnProperty(name));
    },
    get: (target, name) => {
      return (objects.find(obj => {
        if (obj.hasOwnProperty(name)) {
          let descriptor = Object.getOwnPropertyDescriptor(obj, name);

          if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
            return true;
          }

          if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
            let getter = descriptor.get;
            let setter = descriptor.set;
            let property = descriptor;
            getter = getter && getter.bind(thisProxy);
            setter = setter && setter.bind(thisProxy);
            if (getter) getter._x_alreadyBound = true;
            if (setter) setter._x_alreadyBound = true;
            Object.defineProperty(obj, name, { ...property,
              get: getter,
              set: setter
            });
          }

          return true;
        }

        return false;
      }) || {})[name];
    },
    set: (target, name, value) => {
      let closestObjectWithKey = objects.find(obj => obj.hasOwnProperty(name));

      if (closestObjectWithKey) {
        closestObjectWithKey[name] = value;
      } else {
        objects[objects.length - 1][name] = value;
      }

      return true;
    }
  });
  return thisProxy;
} // packages/alpinejs/src/interceptor.js


function initInterceptors(data2) {
  let isObject = val => typeof val === "object" && !Array.isArray(val) && val !== null;

  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, {
      value,
      enumerable
    }]) => {
      if (enumerable === false || value === void 0) return;
      let path = basePath === "" ? key : `${basePath}.${key}`;

      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };

  return recurse(data2);
}

function interceptor(callback, mutateObj = () => {}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,

    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), value => set(data2, path, value), path, key);
    }

  };
  mutateObj(obj);
  return initialValue => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);

      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }

    return obj;
  };
}

function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}

function set(obj, path, value) {
  if (typeof path === "string") path = path.split(".");
  if (path.length === 1) obj[path[0]] = value;else if (path.length === 0) throw error;else {
    if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
} // packages/alpinejs/src/magics.js


var magics = {};

function magic(name, callback) {
  magics[name] = callback;
}

function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, {
          Alpine: alpine_default,
          interceptor
        });
      },

      enumerable: false
    });
  });
  return obj;
} // packages/alpinejs/src/utils/error.js


function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}

function handleError(error2, el, expression = void 0) {
  Object.assign(error2, {
    el,
    expression
  });
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
} // packages/alpinejs/src/evaluator.js


function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)(value => result = value, extras);
  return result;
}

function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}

var theEvaluatorFunction = normalEvaluator;

function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}

function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];

  if (typeof expression === "function") {
    return generateEvaluatorFromFunction(dataStack, expression);
  }

  let evaluator = generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}

function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {}, {
    scope: scope2 = {},
    params = []
  } = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}

var evaluatorMemo = {};

function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }

  let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;

  const safeAsyncFunction = () => {
    try {
      return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };

  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}

function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {}, {
    scope: scope2 = {},
    params = []
  } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);

    if (typeof func === "function") {
      let promise = func(func, completeScope).catch(error2 => handleError(error2, el, expression));

      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then(result => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch(error2 => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}

function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (typeof value === "function") {
    let result = value.apply(scope2, params);

    if (result instanceof Promise) {
      result.then(i => runIfTypeOfFunction(receiver, i, scope2, params)).catch(error2 => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else {
    receiver(value);
  }
} // packages/alpinejs/src/directives.js


var prefixAsString = "x-";

function prefix(subject = "") {
  return prefixAsString + subject;
}

function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}

var directiveHandlers = {};

function directive(name, callback) {
  directiveHandlers[name] = callback;
}

function directives(el, attributes, originalAttributeOverride) {
  let transformedAttributeMap = {};
  let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map(directive2 => {
    return getDirectiveHandler(el, directive2);
  });
}

function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter(attr => !outNonAlpineAttributes(attr));
}

var isDeferringHandlers = false;
var directiveHandlerStacks = new Map();
var currentHandlerStackKey = Symbol();

function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);

  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length) directiveHandlerStacks.get(key).shift()();

    directiveHandlerStacks.delete(key);
  };

  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };

  callback(flushHandlers);
  stopDeferring();
}

function getDirectiveHandler(el, directive2) {
  let noop = () => {};

  let handler3 = directiveHandlers[directive2.type] || noop;
  let cleanups = [];

  let cleanup = callback => cleanups.push(callback);

  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };

  let doCleanup = () => cleanups.forEach(i => i());

  onAttributeRemoved(el, directive2.original, doCleanup);

  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf) return;
    handler3.inline && handler3.inline(el, directive2, utilities);
    handler3 = handler3.bind(handler3, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
  };

  fullHandler.runCleanups = doCleanup;
  return fullHandler;
}

var startingWith = (subject, replacement) => ({
  name,
  value
}) => {
  if (name.startsWith(subject)) name = name.replace(subject, replacement);
  return {
    name,
    value
  };
};

var into = i => i;

function toTransformedAttributes(callback = () => {}) {
  return ({
    name,
    value
  }) => {
    let {
      name: newName,
      value: newValue
    } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, {
      name,
      value
    });
    if (newName !== name) callback(newName, name);
    return {
      name: newName,
      value: newValue
    };
  };
}

var attributeTransformers = [];

function mapAttributes(callback) {
  attributeTransformers.push(callback);
}

function outNonAlpineAttributes({
  name
}) {
  return alpineAttributeRegex().test(name);
}

var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);

function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({
    name,
    value
  }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace(".", "")),
      expression: value,
      original
    };
  };
}

var DEFAULT = "DEFAULT";
var directiveOrder = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "transition", "show", "if", DEFAULT, "teleport", "element"];

function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
} // packages/alpinejs/src/utils/dispatch.js


function dispatch(el, name, detail = {}) {
  el.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true
  }));
} // packages/alpinejs/src/nextTick.js


var tickStack = [];
var isHolding = false;

function nextTick(callback) {
  tickStack.push(callback);
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
}

function releaseNextTicks() {
  isHolding = false;

  while (tickStack.length) tickStack.shift()();
}

function holdNextTicks() {
  isHolding = true;
} // packages/alpinejs/src/utils/walk.js


function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach(el2 => walk(el2, callback));
    return;
  }

  let skip = false;
  callback(el, () => skip = true);
  if (skip) return;
  let node = el.firstElementChild;

  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
} // packages/alpinejs/src/utils/warn.js


function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
} // packages/alpinejs/src/lifecycle.js


function start() {
  if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded(el => initTree(el, walk));
  onElRemoved(el => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach(handle => handle());
  });

  let outNestedComponents = el => !closestRoot(el.parentElement, true);

  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach(el => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}

var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];

function rootSelectors() {
  return rootSelectorCallbacks.map(fn => fn());
}

function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map(fn => fn());
}

function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}

function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}

function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, element => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some(selector => element.matches(selector))) return true;
  });
}

function findClosest(el, callback) {
  if (!el) return;
  if (callback(el)) return el;
  if (el._x_teleportBack) el = el._x_teleportBack;
  if (!el.parentElement) return;
  return findClosest(el.parentElement, callback);
}

function isRoot(el) {
  return rootSelectors().some(selector => el.matches(selector));
}

function initTree(el, walker = walk) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      directives(el2, el2.attributes).forEach(handle => handle());
      el2._x_ignore && skip();
    });
  });
}

function destroyTree(root) {
  walk(root, el => cleanupAttributes(el));
} // packages/alpinejs/src/utils/classes.js


function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }

  return setClassesFromString(el, value);
}

function setClassesFromString(el, classString) {
  let split = classString2 => classString2.split(" ").filter(Boolean);

  let missingClasses = classString2 => classString2.split(" ").filter(i => !el.classList.contains(i)).filter(Boolean);

  let addClassesAndReturnUndo = classes => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };

  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}

function setClassesFromObject(el, classObject) {
  let split = classString => classString.split(" ").filter(Boolean);

  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach(i => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach(i => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach(i => el.classList.add(i));
    added.forEach(i => el.classList.remove(i));
  };
} // packages/alpinejs/src/utils/styles.js


function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }

  return setStylesFromString(el, value);
}

function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    el.style.setProperty(kebabCase(key), value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}

function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}

function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
} // packages/alpinejs/src/utils/once.js


function once(callback, fallback = () => {}) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
} // packages/alpinejs/src/directives/x-transition.js


directive("transition", (el, {
  value,
  modifiers,
  expression
}, {
  evaluate: evaluate2
}) => {
  if (typeof expression === "function") expression = evaluate2(expression);

  if (!expression) {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});

function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    enter: classes => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": classes => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": classes => {
      el._x_transition.enter.end = classes;
    },
    leave: classes => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": classes => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": classes => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}

function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);

  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }

  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }

  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0);
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;

  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }

  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}

function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition) el._x_transition = {
    enter: {
      during: defaultValue,
      start: defaultValue,
      end: defaultValue
    },
    leave: {
      during: defaultValue,
      start: defaultValue,
      end: defaultValue
    },

    in(before = () => {}, after = () => {}) {
      transition(el, setFunction, {
        during: this.enter.during,
        start: this.enter.start,
        end: this.enter.end
      }, before, after);
    },

    out(before = () => {}, after = () => {}) {
      transition(el, setFunction, {
        during: this.leave.during,
        start: this.leave.start,
        end: this.leave.end
      }, before, after);
    }

  };
}

window.Element.prototype._x_toggleAndCascadeWithTransitions = function (el, value, show, hide) {
  let clickAwayCompatibleShow = () => {
    document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
  };

  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }

    return;
  }

  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {}, () => resolve(hide));

    el._x_transitioning.beforeCancel(() => reject({
      isFromCancelledTransition: true
    }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);

    if (closest) {
      if (!closest._x_hideChildren) closest._x_hideChildren = [];

      closest._x_hideChildren.push(el);
    } else {
      queueMicrotask(() => {
        let hideAfterChildren = el2 => {
          let carry = Promise.all([el2._x_hidePromise, ...(el2._x_hideChildren || []).map(hideAfterChildren)]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };

        hideAfterChildren(el).catch(e => {
          if (!e.isFromCancelledTransition) throw e;
        });
      });
    }
  });
};

function closestHide(el) {
  let parent = el.parentNode;
  if (!parent) return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}

function transition(el, setFunction, {
  during,
  start: start2,
  end
} = {}, before = () => {}, after = () => {}) {
  if (el._x_transitioning) el._x_transitioning.cancel();

  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }

  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },

    during() {
      undoDuring = setFunction(el, during);
    },

    before,

    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },

    after,

    cleanup() {
      undoDuring();
      undoEnd();
    }

  });
}

function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore) stages.before();

      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }

      stages.after();
      if (el.isConnected) stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],

    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },

    cancel: once(function () {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }

      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted) return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted) return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}

function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1) return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue) return fallback;

  if (key === "scale") {
    if (isNaN(rawValue)) return fallback;
  }

  if (key === "duration") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match) return match[1];
  }

  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }

  return rawValue;
} // packages/alpinejs/src/clone.js


var isCloning = false;

function skipDuringClone(callback, fallback = () => {}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}

function clone(oldEl, newEl) {
  if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
}

function cloneTree(el) {
  let hasRunThroughFirstEl = false;

  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3)) return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };

  initTree(el, shallowWalker);
}

function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {};
  });
  callback();
  overrideEffect(cache);
} // packages/alpinejs/src/utils/bind.js


function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings) el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;

  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;

    case "style":
      bindStyles(el, value);
      break;

    case "class":
      bindClasses(el, value);
      break;

    default:
      bindAttribute(el, name, value);
      break;
  }
}

function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }

    if (window.fromModel) {
      el.checked = checkedAttrLooseCompare(el.value, value);
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value) return;
    el.value = value;
  }
}

function bindClasses(el, value) {
  if (el._x_undoAddedClasses) el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}

function bindStyles(el, value) {
  if (el._x_undoAddedStyles) el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}

function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name)) value = name;
    setIfChanged(el, name, value);
  }
}

function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}

function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map(value2 => {
    return value2 + "";
  });
  Array.from(el.options).forEach(option => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}

function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}

function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}

function isBooleanAttr(attrName) {
  const booleanAttributes = ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"];
  return booleanAttributes.includes(attrName);
}

function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}

function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
  let attr = el.getAttribute(name);
  if (attr === null) return typeof fallback === "function" ? fallback() : fallback;

  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }

  if (attr === "") return true;
  return attr;
} // packages/alpinejs/src/utils/debounce.js


function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function () {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} // packages/alpinejs/src/utils/throttle.js


function throttle(func, limit) {
  let inThrottle;
  return function () {
    let context = this,
        args = arguments;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
} // packages/alpinejs/src/plugin.js


function plugin(callback) {
  callback(alpine_default);
} // packages/alpinejs/src/store.js


var stores = {};
var isReactive = false;

function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }

  if (value === void 0) {
    return stores[name];
  }

  stores[name] = value;

  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }

  initInterceptors(stores[name]);
}

function getStores() {
  return stores;
} // packages/alpinejs/src/binds.js


var binds = {};

function bind2(name, object) {
  binds[name] = typeof object !== "function" ? () => object : object;
}

function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }

    });
  });
  return obj;
} // packages/alpinejs/src/datas.js


var datas = {};

function data(name, callback) {
  datas[name] = callback;
}

function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },

      enumerable: false
    });
  });
  return obj;
} // packages/alpinejs/src/alpine.js


var Alpine = {
  get reactive() {
    return reactive;
  },

  get release() {
    return release;
  },

  get effect() {
    return effect;
  },

  get raw() {
    return raw;
  },

  version: "3.8.1",
  flushAndStopDeferringMutations,
  disableEffectScheduling,
  setReactivityEngine,
  closestDataStack,
  skipDuringClone,
  addRootSelector,
  addInitSelector,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  setEvaluator,
  mergeProxies,
  findClosest,
  closestRoot,
  interceptor,
  transition,
  setStyles,
  mutateDom,
  directive,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  bound: getBinding,
  $data: scope,
  data,
  bind: bind2
};
var alpine_default = Alpine; // packages/alpinejs/src/index.js

var import_reactivity9 = __toModule(require_reactivity()); // packages/alpinejs/src/magics/$nextTick.js


magic("nextTick", () => nextTick); // packages/alpinejs/src/magics/$dispatch.js

magic("dispatch", el => dispatch.bind(dispatch, el)); // packages/alpinejs/src/magics/$watch.js

magic("watch", el => (key, callback) => {
  let evaluate2 = evaluateLater(el, key);
  let firstTime = true;
  let oldValue;
  effect(() => evaluate2(value => {
    JSON.stringify(value);

    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }

    firstTime = false;
  }));
}); // packages/alpinejs/src/magics/$store.js

magic("store", getStores); // packages/alpinejs/src/magics/$data.js

magic("data", el => scope(el)); // packages/alpinejs/src/magics/$root.js

magic("root", el => closestRoot(el)); // packages/alpinejs/src/magics/$refs.js

magic("refs", el => {
  if (el._x_refs_proxy) return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});

function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;

  while (currentEl) {
    if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }

  return refObjects;
} // packages/alpinejs/src/ids.js


var globalIdMemo = {};

function findAndIncrementId(name) {
  if (!globalIdMemo[name]) globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}

function closestIdRoot(el, name) {
  return findClosest(el, element => {
    if (element._x_ids && element._x_ids[name]) return true;
  });
}

function setIdRoot(el, name) {
  if (!el._x_ids) el._x_ids = {};
  if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
} // packages/alpinejs/src/magics/$id.js


magic("id", el => (name, key = null) => {
  let root = closestIdRoot(el, name);
  let id = root ? root._x_ids[name] : findAndIncrementId(name);
  return key ? `${name}-${id}-${key}` : `${name}-${id}`;
}); // packages/alpinejs/src/magics/$el.js

magic("el", el => el); // packages/alpinejs/src/directives/x-teleport.js

directive("teleport", (el, {
  expression
}, {
  cleanup
}) => {
  if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
  let target = document.querySelector(expression);
  if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;

  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach(eventName => {
      clone2.addEventListener(eventName, e => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }

  addScopeToNode(clone2, {}, el);
  mutateDom(() => {
    target.appendChild(clone2);
    initTree(clone2);
    clone2._x_ignore = true;
  });
  cleanup(() => clone2.remove());
}); // packages/alpinejs/src/directives/x-ignore.js

var handler = () => {};

handler.inline = (el, {
  modifiers
}, {
  cleanup
}) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};

directive("ignore", handler); // packages/alpinejs/src/directives/x-effect.js

directive("effect", (el, {
  expression
}, {
  effect: effect3
}) => effect3(evaluateLater(el, expression))); // packages/alpinejs/src/utils/on.js

function on(el, event, modifiers, callback) {
  let listenerTarget = el;

  let handler3 = e => callback(e);

  let options = {};

  let wrapHandler = (callback2, wrapper) => e => wrapper(callback2, e);

  if (modifiers.includes("dot")) event = dotSyntax(event);
  if (modifiers.includes("camel")) event = camelCase2(event);
  if (modifiers.includes("passive")) options.passive = true;
  if (modifiers.includes("capture")) options.capture = true;
  if (modifiers.includes("window")) listenerTarget = window;
  if (modifiers.includes("document")) listenerTarget = document;
  if (modifiers.includes("prevent")) handler3 = wrapHandler(handler3, (next, e) => {
    e.preventDefault();
    next(e);
  });
  if (modifiers.includes("stop")) handler3 = wrapHandler(handler3, (next, e) => {
    e.stopPropagation();
    next(e);
  });
  if (modifiers.includes("self")) handler3 = wrapHandler(handler3, (next, e) => {
    e.target === el && next(e);
  });

  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler3 = wrapHandler(handler3, (next, e) => {
      if (el.contains(e.target)) return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
      if (el._x_isShown === false) return;
      next(e);
    });
  }

  handler3 = wrapHandler(handler3, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }

    next(e);
  });

  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = debounce(handler3, wait);
  }

  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = throttle(handler3, wait);
  }

  if (modifiers.includes("once")) {
    handler3 = wrapHandler(handler3, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler3, options);
    });
  }

  listenerTarget.addEventListener(event, handler3, options);
  return () => {
    listenerTarget.removeEventListener(event, handler3, options);
  };
}

function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}

function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}

function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

function kebabCase2(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}

function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}

function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter(i => {
    return !["window", "document", "prevent", "stop", "once"].includes(i);
  });

  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }

  if (keyModifiers.length === 0) return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
      if (modifier === "cmd" || modifier === "super") modifier = "meta";
      return e[`${modifier}Key`];
    });

    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    }
  }

  return true;
}

function keyToModifiers(key) {
  if (!key) return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    ctrl: "control",
    slash: "/",
    space: "-",
    spacebar: "-",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "="
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map(modifier => {
    if (modifierToKeyMap[modifier] === key) return modifier;
  }).filter(modifier => modifier);
} // packages/alpinejs/src/directives/x-model.js


directive("model", (el, {
  modifiers,
  expression
}, {
  effect: effect3,
  cleanup
}) => {
  let evaluate2 = evaluateLater(el, expression);
  let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
  let evaluateAssignment = evaluateLater(el, assignmentExpression);
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
  let removeListener = on(el, event, modifiers, e => {
    evaluateAssignment(() => {}, {
      scope: {
        $event: e,
        rightSideOfExpression: assigmentFunction
      }
    });
  });
  cleanup(() => removeListener());
  let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
  el._x_model = {
    get() {
      let result;
      evaluate2(value => result = value);
      return result;
    },

    set(value) {
      evaluateSetModel(() => {}, {
        scope: {
          __placeholder: value
        }
      });
    }

  };

  el._x_forceModelUpdate = () => {
    evaluate2(value => {
      if (value === void 0 && expression.match(/\./)) value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    });
  };

  effect3(() => {
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;

    el._x_forceModelUpdate();
  });
});

function generateAssignmentFunction(el, modifiers, expression) {
  if (el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
  }

  return (event, currentValue) => {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0) {
        return event.detail || event.target.value;
      } else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el2 => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map(option => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        let rawValue = event.target.value;
        return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
      }
    });
  };
}

function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}

function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}

function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
} // packages/alpinejs/src/directives/x-cloak.js


directive("cloak", el => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak"))))); // packages/alpinejs/src/directives/x-init.js

addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, {
  expression
}) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate(el, expression, {}, false);
  }

  return evaluate(el, expression, {}, false);
})); // packages/alpinejs/src/directives/x-text.js

directive("text", (el, {
  expression
}, {
  effect: effect3,
  evaluateLater: evaluateLater2
}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2(value => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
}); // packages/alpinejs/src/directives/x-html.js

directive("html", (el, {
  expression
}, {
  effect: effect3,
  evaluateLater: evaluateLater2
}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2(value => {
      el.innerHTML = value;
    });
  });
}); // packages/alpinejs/src/directives/x-bind.js

mapAttributes(startingWith(":", into(prefix("bind:"))));
directive("bind", (el, {
  value,
  modifiers,
  expression,
  original
}, {
  effect: effect3
}) => {
  if (!value) {
    return applyBindingsObject(el, expression, original, effect3);
  }

  if (value === "key") return storeKeyForXFor(el, expression);
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2(result => {
    if (result === void 0 && expression.match(/\./)) result = "";
    mutateDom(() => bind(el, value, result, modifiers));
  }));
});

function applyBindingsObject(el, expression, original, effect3) {
  let bindingProviders = {};
  injectBindingProviders(bindingProviders);
  let getBindings = evaluateLater(el, expression);
  let cleanupRunners = [];

  while (cleanupRunners.length) cleanupRunners.pop()();

  getBindings(bindings => {
    let attributes = Object.entries(bindings).map(([name, value]) => ({
      name,
      value
    }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map(attribute => {
      if (staticAttributes.find(attr => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }

      return attribute;
    });
    directives(el, attributes, original).map(handle => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
  }, {
    scope: bindingProviders
  });
}

function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
} // packages/alpinejs/src/directives/x-data.js


addRootSelector(() => `[${prefix("data")}]`);
directive("data", skipDuringClone((el, {
  expression
}, {
  cleanup
}) => {
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, {
    scope: dataProviderContext
  });
  if (data2 === void 0) data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup(() => {
    undo();
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
  });
})); // packages/alpinejs/src/directives/x-show.js

directive("show", (el, {
  modifiers,
  expression
}, {
  effect: effect3
}) => {
  let evaluate2 = evaluateLater(el, expression);

  let hide = () => mutateDom(() => {
    el.style.display = "none";
    el._x_isShown = false;
  });

  let show = () => mutateDom(() => {
    if (el.style.length === 1 && el.style.display === "none") {
      el.removeAttribute("style");
    } else {
      el.style.removeProperty("display");
    }

    el._x_isShown = true;
  });

  let clickAwayCompatibleShow = () => setTimeout(show);

  let toggle = once(value => value ? show() : hide(), value => {
    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
    } else {
      value ? clickAwayCompatibleShow() : hide();
    }
  });
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2(value => {
    if (!firstTime && value === oldValue) return;
    if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
}); // packages/alpinejs/src/directives/x-for.js

directive("for", (el, {
  expression
}, {
  effect: effect3,
  cleanup
}) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup(() => {
    Object.values(el._x_lookup).forEach(el2 => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});

function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject = i => typeof i === "object" && !Array.isArray(i);

  let templateEl = el;
  evaluateItems(items => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    if (items === void 0) items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];

    if (isObject(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey(value2 => keys.push(value2), {
          scope: {
            index: key,
            ...scope2
          }
        });
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey(value => keys.push(value), {
          scope: {
            index: i,
            ...scope2
          }
        });
        scopes.push(scope2);
      }
    }

    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];

    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1) removes.push(key);
    }

    prevKeys = prevKeys.filter(key => !removes.includes(key));
    let lastKey = "template";

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);

      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }

      lastKey = key;
    }

    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }

    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
    }

    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      addScopeToNode(clone2, reactive(scope2), templateEl);
      mutateDom(() => {
        lastEl.after(clone2);
        initTree(clone2);
      });

      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }

      lookup[key] = clone2;
    }

    for (let i = 0; i < sames.length; i++) {
      refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
    }

    templateEl._x_prevKeys = keys;
  });
}

function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch) return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);

  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();

    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }

  return res;
}

function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};

  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map(i => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map(i => i.trim());
    names.forEach(name => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }

  if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}

function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
} // packages/alpinejs/src/directives/x-ref.js


function handler2() {}

handler2.inline = (el, {
  expression
}, {
  cleanup
}) => {
  let root = closestRoot(el);
  if (!root._x_refs) root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup(() => delete root._x_refs[expression]);
};

directive("ref", handler2); // packages/alpinejs/src/directives/x-if.js

directive("if", (el, {
  expression
}, {
  effect: effect3,
  cleanup
}) => {
  let evaluate2 = evaluateLater(el, expression);

  let show = () => {
    if (el._x_currentIfEl) return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      initTree(clone2);
    });
    el._x_currentIfEl = clone2;

    el._x_undoIf = () => {
      clone2.remove();
      delete el._x_currentIfEl;
    };

    return clone2;
  };

  let hide = () => {
    if (!el._x_undoIf) return;

    el._x_undoIf();

    delete el._x_undoIf;
  };

  effect3(() => evaluate2(value => {
    value ? show() : hide();
  }));
  cleanup(() => el._x_undoIf && el._x_undoIf());
}); // packages/alpinejs/src/directives/x-id.js

directive("id", (el, {
  expression
}, {
  evaluate: evaluate2
}) => {
  let names = evaluate2(expression);
  names.forEach(name => setIdRoot(el, name));
}); // packages/alpinejs/src/directives/x-on.js

mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, {
  value,
  modifiers,
  expression
}, {
  cleanup
}) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {};

  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents) el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
  }

  let removeListener = on(el, value, modifiers, e => {
    evaluate2(() => {}, {
      scope: {
        $event: e
      },
      params: [e]
    });
  });
  cleanup(() => removeListener());
})); // packages/alpinejs/src/index.js

alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
  reactive: import_reactivity9.reactive,
  effect: import_reactivity9.effect,
  release: import_reactivity9.stop,
  raw: import_reactivity9.toRaw
});
var src_default = alpine_default; // packages/alpinejs/builds/module.js

var module_default = src_default;
exports.default = module_default;
},{}],"helpers/getVariationEl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariationEl = getVariationEl;

function getVariationEl(variation, data) {
  var ul;
  variation.list.forEach(function (item) {
    var el = document.querySelector("ul[data-attribute_name=\"".concat(item, "\"]"));

    if (el) {
      ul = el;
    }
  });
  var list = Array.from(ul.querySelectorAll('li'));
  var el = list.find(function (el) {
    return el.getAttribute(variation.selector) === data;
  });
  return el;
}
},{}],"helpers/getAbsoluteHeight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbsoluteHeight = getAbsoluteHeight;

/**
 *
 * Get Absolute Height including TOP-BOTTOM Margins
 *
 */
function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;
  var styles = window.getComputedStyle(el);
  var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
  return el.offsetHeight + margin;
}
},{}],"calculator/ui.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatorUI = void 0;

var _getAbsoluteHeight = require("../helpers/getAbsoluteHeight");

var calculatorUI = {
  // State to manage current step
  currentStep: 0,
  maxStep: 0,
  onSubmit: false,
  onDataObtained: false,
  dataObtained: {
    fit: undefined,
    scale: undefined,
    size: undefined
  },
  // Step to manage variations matching
  matchedVariations: false,
  // State to manage wraper state
  open: false,
  // Getters
  getCurrentStep: function getCurrentStep() {
    return this.currentStep + 1;
  },
  getMaxStep: function getMaxStep() {
    return this.maxStep + 1;
  },
  // Handler to manage wraper state
  toggleOpen: function toggleOpen() {
    this.open = !this.open;
  },
  onToggleOpen: function onToggleOpen() {
    if (this.open) {
      this.$el.style.maxHeight = 300 + this.$el.scrollHeight + (0, _getAbsoluteHeight.getAbsoluteHeight)('.calculator__wraper__content__nav') + 'px';
    } else {
      this.$el.style.maxHeight = null;
    }
  },
  showPrevHandler: function showPrevHandler() {
    if (this.currentStep == 0) {
      return 'invisible';
    } else {
      return 'visible';
    }
  },
  handlePrev: function handlePrev() {
    this.currentStep--;
  },
  showNextHandler: function showNextHandler() {
    return this.currentStep !== this.maxStep;
  },
  handleNext: function handleNext() {
    this.currentStep++;
  },
  showFinalHandler: function showFinalHandler() {
    return this.currentStep == this.maxStep;
  },
  handleFinal: function handleFinal() {
    this.onSubmit = true;
  },
  restart: function restart() {
    this.onToggleOpen();
    this.onSubmit = false;
    this.currentStep = 0;
  }
};
exports.calculatorUI = calculatorUI;
},{"../helpers/getAbsoluteHeight":"helpers/getAbsoluteHeight.js"}],"calculator/types/BauerIcehockeySkates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerIcehockeySkates = BauerIcehockeySkates;

var _getVariationEl = require("../../helpers/getVariationEl");

var _ui = require("../ui");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerIcehockeySkates() {
  return _objectSpread(_objectSpread({}, _ui.calculatorUI), {}, {
    maxStep: 3,
    units: [{
      id: 'EU'
    }, {
      id: 'US'
    }],
    lengthInput: '0',
    getLengthValue: function getLengthValue(i) {
      return this.lengthInputValues[this.selectedUnit][parseInt(this.lengthInput, 10) + i];
    },
    getBauerValue: function getBauerValue(i) {
      return this.lengthInputValues['BAUER'][parseInt(this.lengthInput, 10) + i];
    },
    selectedUnit: 'EU',
    lengthInputValues: {
      US: ['7.0Y', '7.5Y', '8.0Y', '8.5Y', '9.0Y', '9.5Y', '10.0Y', '10.5Y', '11.0Y', '11.5Y', '12.0Y', '12.0Y', '12.5Y', '13.0Y', '13.0Y', '13.5Y', '1.0', '1.5', '1.5', '2.0', '2.5', '3.0', '3.0', '3.5', '4.0', '4.5', '5.0', '5.0', '5.5', '6.0', '6.5', '7.0', '7.0', '7.5', '8.0', '8.5', '8.5', '9.0', '9.5', '10.0', '10.0', '10.5', '11.0', '11.5', '12.0', '12.5', '12.5', '13.0', '13.5'],
      EU: ['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28', '28.5', '29', '29.5', '30', '30.5', '31', '31.5', '32', '32.5', '33', '33.5', '34', '34.5', '35', '35.5', '36', '36.5', '37.0', '37.5', '38', '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44', '44.5', '45', '45.5', '46', '46.5', '47', '47.5', '48'],
      BAUER: ['6.0Y', '7.0Y', '7.0Y', '8.0Y', '8.0Y', '8.5Y', '9.0Y', '9.5Y', '10.0Y', '10.5Y', '11.0Y', '11.0Y', '11.5Y', '12.0Y', '12.0Y', '12.5Y', '13.0Y', '13.5Y', '13.5Y', '1.0', '1.5', '2.0', '2.0', '2.5', '3.0', '3.5', '4.0', '4.0', '4.5', '5.0', '5.5', '6.0', '6.0', '6.0', '6.5', '7.0', '7.0', '7.5', '8.0', '8.5', '8.5', '9.0', '9.5', '10.0', '10.5', '11.0', '11.0', '11.5', '12.0']
    },
    reccomendLength: function reccomendLength() {
      var yth = false;
      var length = document.querySelector('input[name = "__length"]').value;

      if (length.includes('Y')) {
        yth = true;
      }

      var scale = document.querySelector('input[name = "__scale"]').value;
      var fit = document.querySelector('input[name = "__fit"]:checked').value;
      var width = document.querySelector('input[name = "__width"]:checked').value;
      var height = document.querySelector('input[name = "__height"]:checked').value;

      var get_length = function get_length(fit, length, yth) {
        if (fit === '0') {
          var i = parseFloat(length - 0.5).toFixed(1);
          return yth ? i + 'Y' : i;
        } else if (fit === '1') {
          var _i = parseFloat(length).toFixed(1);

          return yth ? _i + 'Y' : _i;
        } else if (fit === '2') {
          var _i2 = parseFloat(length + 0.5).toFixed(1);

          return yth ? _i2 + 'Y' : _i2;
        }
      };

      var get_scale = function get_scale(scale, width, height) {
        switch (width) {
          // Narrow Width
          case '0':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'fit1';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // Medium

              case '1':
                if (scale === 'scale_fit') {
                  return 'fit1';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // High

              case '2':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
            }

            break;
          // Medium Width

          case '1':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // Medium

              case '1':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // High

              case '2':
                if (scale === 'scale_fit') {
                  return 'fit3';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
            }

            break;
          // Wide Width

          case '2':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
              // Medium

              case '1':
                if (scale === 'scale_fit') {
                  return 'fit3';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
              // High

              case '2':
                if (scale === 'scale_fit') {
                  return 'fit3';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
            }

            break;

          default:
            if (scale === 'scale_fit') {
              return 'fit1';
            } else if (scale === 'scale_ee') {
              return 'd';
            }

        }
      };

      var data = {
        fit: get_length(fit, parseInt(length, 10), yth),
        scale: get_scale(scale, width, height)
      };
      this.dataObtained = data;
      var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

      if (AvailableVariationsLoader.length.value.split(',').includes(this.dataObtained.fit) && AvailableVariationsLoader.width.value.split(',').includes(this.dataObtained.scale)) {
        var selectFit = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.length, this.dataObtained.fit);
        var selectScale = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.width, this.dataObtained.scale);

        if (selectFit && selectScale) {
          this.matchedVariations = true;

          if (selectFit.classList.contains('disabled')) {
            this.matchedVariations = false;
          }

          if (!selectFit.classList.contains('selected')) {
            selectFit.click();
          }

          if (selectScale.classList.contains('disabled')) {
            this.matchedVariations = false;
          }

          if (!selectScale.classList.contains('selected')) {
            selectScale.click();
          }
        } else {
          this.matchedVariations = false;
        }
      } else {
        this.matchedVariations = false;
      }

      this.onDataObtained = true;
    },
    handleFinal: function handleFinal() {
      this.reccomendLength();
      this.onSubmit = true;
    }
  });
}
},{"../../helpers/getVariationEl":"helpers/getVariationEl.js","../ui":"calculator/ui.js"}],"calculator/types/CCMSkates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMSkates = CCMSkates;

var _getVariationEl = require("../../helpers/getVariationEl");

var _ui = require("../ui");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMSkates() {
  return _objectSpread(_objectSpread({}, _ui.calculatorUI), {}, {
    maxStep: 3,
    units: [{
      id: 'EU'
    }, {
      id: 'US'
    }],
    lengthInput: '0',
    getLengthValue: function getLengthValue(i) {
      return this.lengthInputValues[this.selectedUnit][parseInt(this.lengthInput, 10) + i];
    },
    getBauerValue: function getBauerValue(i) {
      return this.lengthInputValues['BAUER'][parseInt(this.lengthInput, 10) + i];
    },
    selectedUnit: 'EU',
    lengthInputValues: {
      US: ['7.0Y', '7.5Y', '8.0Y', '8.5Y', '9.0Y', '9.5Y', '10.0Y', '10.5Y', '11.0Y', '11.5Y', '12.0Y', '12.0Y', '12.5Y', '13.0Y', '13.0Y', '13.5Y', '1.0', '1.5', '1.5', '2.0', '2.5', '3.0', '3.0', '3.5', '4.0', '4.5', '5.0', '5.0', '5.5', '6.0', '6.5', '7.0', '7.0', '7.5', '8.0', '8.5', '8.5', '9.0', '9.5', '10.0', '10.0', '10.5', '11.0', '11.5', '12.0', '12.5', '12.5', '13.0', '13.5'],
      EU: ['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28', '28.5', '29', '29.5', '30', '30.5', '31', '31.5', '32', '32.5', '33', '33.5', '34', '34.5', '35', '35.5', '36', '36.5', '37.0', '37.5', '38', '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44', '44.5', '45', '45.5', '46', '46.5', '47', '47.5', '48'],
      BAUER: ['6.0Y', '7.0Y', '7.0Y', '8.0Y', '8.0Y', '8.5Y', '9.0Y', '9.5Y', '10.0Y', '10.5Y', '11.0Y', '11.0Y', '11.5Y', '12.0Y', '12.0Y', '12.5Y', '13.0Y', '13.5Y', '13.5Y', '1.0', '1.5', '2.0', '2.0', '2.5', '3.0', '3.5', '4.0', '4.0', '4.5', '5.0', '5.5', '6.0', '6.0', '6.0', '6.5', '7.0', '7.0', '7.5', '8.0', '8.5', '8.5', '9.0', '9.5', '10.0', '10.5', '11.0', '11.0', '11.5', '12.0']
    },
    reccomendLength: function reccomendLength() {
      var yth = false;
      var length = document.querySelector('input[name = "__length"]').value;

      if (length.includes('Y')) {
        yth = true;
      }

      var scale = document.querySelector('input[name = "__scale"]').value;
      var fit = document.querySelector('input[name = "__fit"]:checked').value;
      var width = document.querySelector('input[name = "__width"]:checked').value;
      var height = document.querySelector('input[name = "__height"]:checked').value;

      var get_length = function get_length(fit, length, yth) {
        if (fit === '0') {
          var i = parseFloat(length - 0.5).toFixed(1);
          return yth ? i + 'Y' : i;
        } else if (fit === '1') {
          var _i = parseFloat(length).toFixed(1);

          return yth ? _i + 'Y' : _i;
        } else if (fit === '2') {
          var _i2 = parseFloat(length + 0.5).toFixed(1);

          return yth ? _i2 + 'Y' : _i2;
        }
      };

      var get_scale = function get_scale(scale, width, height) {
        switch (width) {
          // Tapered Width
          case '0':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'Tapered';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // Medium

              case '1':
                if (scale === 'scale_fit') {
                  return 'Tapered';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // High

              case '2':
                if (scale === 'scale_fit') {
                  return 'Regular';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
            }

            break;
          // Medium Width

          case '1':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'Regular';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // Medium

              case '1':
                if (scale === 'scale_fit') {
                  return 'Regular';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }

                break;
              // High

              case '2':
                if (scale === 'scale_fit') {
                  return 'Wide';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
            }

            break;
          // Wide Width

          case '2':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'Regular';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
              // Medium

              case '1':
                if (scale === 'scale_fit') {
                  return 'Wide';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
              // High

              case '2':
                if (scale === 'scale_fit') {
                  return 'Wide';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }

                break;
            }

            break;

          default:
            if (scale === 'scale_fit') {
              return 'Tapered';
            } else if (scale === 'scale_ee') {
              return 'd';
            }

        }
      };

      var data = {
        fit: get_length(fit, parseInt(length, 10), yth),
        scale: get_scale(scale, width, height)
      };
      this.dataObtained = data;
      var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

      if (AvailableVariationsLoader.length.value.split(',').includes(this.dataObtained.fit) && AvailableVariationsLoader.width.value.split(',').includes(this.dataObtained.scale)) {
        var selectFit = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.length, this.dataObtained.fit);
        var selectScale = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.width, this.dataObtained.scale);

        if (selectFit && selectScale) {
          this.matchedVariations = true;

          if (selectFit.classList.contains('disabled')) {
            this.matchedVariations = false;
          }

          if (!selectFit.classList.contains('selected')) {
            selectFit.click();
          }

          if (selectScale.classList.contains('disabled')) {
            this.matchedVariations = false;
          }

          if (!selectScale.classList.contains('selected')) {
            selectScale.click();
          }
        } else {
          this.matchedVariations = false;
        }
      } else {
        this.matchedVariations = false;
      }

      this.onDataObtained = true;
    },
    handleFinal: function handleFinal() {
      this.reccomendLength();
      this.onSubmit = true;
    }
  });
}
},{"../../helpers/getVariationEl":"helpers/getVariationEl.js","../ui":"calculator/ui.js"}],"calculator/unitConverter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cmToInch = void 0;
var cmToInch = {
  selectedUnit: 'cm',
  units: [{
    id: 'cm'
  }, {
    id: 'in'
  }],
  convert: function convert(x) {
    if (this.selectedUnit === 'cm') {
      return x;
    } else if (this.selectedUnit === 'in') {
      var y = x / 2.54;
      return y.toFixed(0);
    }
  },
  invert: function invert(x) {
    if (this.selectedUnit === 'cm') {
      return x;
    } else if (this.selectedUnit === 'in') {
      var y = x * 2.54;
      return y.toFixed(0);
    }
  }
};
exports.cmToInch = cmToInch;
},{}],"calculator/types/ElbowPads/CCMBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElbowPads = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ElbowPads = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 1,
  getForeArmValue: function getForeArmValue() {
    var chest = this.convert(this.input.foreArmLength);
    return chest;
  },
  getBicepValue: function getBicepValue() {
    var chest = this.convert(this.input.bicepCirc);
    return chest;
  },
  getHeightValue: function getHeightValue() {
    return this.convert(this.input.height);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    console.log(size);
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.ElbowPads = ElbowPads;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/ElbowPads/CCMElbowPadsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMElbowPadsJR = CCMElbowPadsJR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMElbowPadsJR() {
  return _objectSpread(_objectSpread({}, _CCMBase.ElbowPads), {}, {
    getForeArmInput: function getForeArmInput(i) {
      var output = {
        a: [16, 20],
        b: [18, 22],
        c: [20, 25]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 127 && height <= 137) {
        return output.a[i];
      } else if (height >= 138 && height <= 147) {
        return output.b[i];
      } else if (height >= 148 && height <= 157) {
        return output.c[i];
      }
    },
    getBicepInput: function getBicepInput(i) {
      var output = {
        a: [18, 23],
        b: [20, 25],
        c: [23, 28]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 127 && height <= 137) {
        return output.a[i];
      } else if (height >= 138 && height <= 147) {
        return output.b[i];
      } else if (height >= 148 && height <= 157) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var foreArm = document.getElementById('foreArmLength');
      var bicep = document.getElementById('bicepCirc');
      foreArm.setAttribute('min', this.getForeArmInput(0));
      foreArm.setAttribute('max', this.getForeArmInput(1));
      var foreArmvalue = parseFloat((this.getForeArmInput(0) + this.getForeArmInput(1)) / 2).toFixed(0);

      foreArm._x_model.set(foreArmvalue);

      bicep.setAttribute('min', this.getBicepInput(0));
      bicep.setAttribute('max', this.getBicepInput(1));
      var bicepValue = parseFloat((this.getBicepInput(0) + this.getBicepInput(1)) / 2).toFixed(0);

      bicep._x_model.set(bicepValue);

      this.currentStep++;
    },
    input: {
      foreArmLength: 16,
      bicepCirc: 18,
      height: 127
    },
    rangeFrom: {
      foreArmLength: 16,
      bicepCirc: 18,
      height: 127
    },
    rangeTo: {
      foreArmLength: 25,
      bicepCirc: 28,
      height: 157
    },
    getResult: function getResult() {
      var foreArmLength = parseInt(this.input.foreArmLength, 10);
      var bicepCirc = parseInt(this.input.bicepCirc, 10);
      var height = parseInt(this.input.height, 10);

      if (foreArmLength >= 16 && foreArmLength <= 20 && bicepCirc >= 18 && bicepCirc <= 23 && height >= 127 && height <= 137) {
        return 'S';
      } else if (foreArmLength >= 18 && foreArmLength <= 22 && bicepCirc >= 20 && bicepCirc <= 25 && height >= 137 && height <= 147) {
        return 'M';
      } else if (foreArmLength >= 20 && foreArmLength <= 25 && bicepCirc >= 23 && bicepCirc <= 28 && height >= 147 && height <= 157) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ElbowPads/CCMBase.js"}],"calculator/types/ElbowPads/CCMElbowPadsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMElbowPadsSR = CCMElbowPadsSR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMElbowPadsSR() {
  return _objectSpread(_objectSpread({}, _CCMBase.ElbowPads), {}, {
    getForeArmInput: function getForeArmInput(i) {
      var output = {
        a: [23, 27],
        b: [25, 29],
        c: [28, 32],
        d: [29, 50]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 157 && height <= 168) {
        return output.a[i];
      } else if (height >= 169 && height <= 178) {
        return output.b[i];
      } else if (height >= 179 && height <= 182) {
        return output.c[i];
      } else if (height >= 183 && height <= 210) {
        return output.d[i];
      }
    },
    getBicepInput: function getBicepInput(i) {
      var output = {
        a: [25, 30],
        b: [28, 36],
        c: [33, 41],
        d: [38, 50]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 157 && height <= 168) {
        return output.a[i];
      } else if (height >= 169 && height <= 178) {
        return output.b[i];
      } else if (height >= 179 && height <= 182) {
        return output.c[i];
      } else if (height >= 183 && height <= 210) {
        return output.d[i];
      }
    },
    handleNext: function handleNext() {
      var foreArm = document.getElementById('foreArmLength');
      var bicep = document.getElementById('bicepCirc');
      foreArm.setAttribute('min', this.getForeArmInput(0));
      foreArm.setAttribute('max', this.getForeArmInput(1));
      var foreArmvalue = parseFloat((this.getForeArmInput(0) + this.getForeArmInput(1)) / 2).toFixed(0);

      foreArm._x_model.set(foreArmvalue);

      bicep.setAttribute('min', this.getBicepInput(0));
      bicep.setAttribute('max', this.getBicepInput(1));
      var bicepValue = parseFloat((this.getBicepInput(0) + this.getBicepInput(1)) / 2).toFixed(0);

      bicep._x_model.set(bicepValue);

      this.currentStep++;
    },
    input: {
      foreArmLength: 23,
      bicepCirc: 25,
      height: 157
    },
    rangeFrom: {
      foreArmLength: 23,
      bicepCirc: 25,
      height: 157
    },
    rangeTo: {
      foreArmLength: 32,
      bicepCirc: 41,
      height: 188
    },
    getResult: function getResult() {
      var foreArmLength = parseInt(this.input.foreArmLength, 10);
      var bicepCirc = parseInt(this.input.bicepCirc, 10);
      var height = parseInt(this.input.height, 10);

      if (foreArmLength >= 23 && foreArmLength <= 27 && bicepCirc >= 25 && bicepCirc <= 30 && height >= 157 && height <= 168) {
        return 'S';
      } else if (foreArmLength >= 25 && foreArmLength <= 29 && bicepCirc >= 28 && bicepCirc <= 36 && height >= 168 && height <= 178) {
        return 'M';
      } else if (foreArmLength >= 28 && foreArmLength <= 32 && bicepCirc >= 33 && bicepCirc <= 41 && height >= 178 && height <= 188) {
        return 'L';
      } else if (foreArmLength >= 29 && bicepCirc >= 38 && height >= 183) {
        return 'XL';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ElbowPads/CCMBase.js"}],"calculator/types/ElbowPads/CCMElbowPadsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMElbowPadsYT = CCMElbowPadsYT;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMElbowPadsYT() {
  return _objectSpread(_objectSpread({}, _CCMBase.ElbowPads), {}, {
    getForeArmInput: function getForeArmInput(i) {
      var output = {
        a: [11, 15],
        b: [14, 17],
        c: [15, 19]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 109) {
        return output.a[i];
      } else if (height >= 110 && height <= 117) {
        return output.b[i];
      } else if (height >= 118 && height <= 127) {
        return output.c[i];
      }
    },
    getBicepInput: function getBicepInput(i) {
      var output = {
        a: [14, 17],
        b: [16, 19],
        c: [18, 21]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 109) {
        return output.a[i];
      } else if (height >= 110 && height <= 117) {
        return output.b[i];
      } else if (height >= 118 && height <= 127) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var foreArm = document.getElementById('foreArmLength');
      var bicep = document.getElementById('bicepCirc');
      foreArm.setAttribute('min', this.getForeArmInput(0));
      foreArm.setAttribute('max', this.getForeArmInput(1));
      var foreArmvalue = parseFloat((this.getForeArmInput(0) + this.getForeArmInput(1)) / 2).toFixed(0);

      foreArm._x_model.set(foreArmvalue);

      bicep.setAttribute('min', this.getBicepInput(0));
      bicep.setAttribute('max', this.getBicepInput(1));
      var bicepValue = parseFloat((this.getBicepInput(0) + this.getBicepInput(1)) / 2).toFixed(0);

      bicep._x_model.set(bicepValue);

      this.currentStep++;
    },
    input: {
      foreArmLength: 11,
      bicepCirc: 14,
      height: 102
    },
    rangeFrom: {
      foreArmLength: 11,
      bicepCirc: 14,
      height: 102
    },
    rangeTo: {
      foreArmLength: 19,
      bicepCirc: 21,
      height: 127
    },
    getResult: function getResult() {
      var foreArmLength = parseInt(this.input.foreArmLength, 10);
      var bicepCirc = parseInt(this.input.bicepCirc, 10);
      var height = parseInt(this.input.height, 10);

      if (foreArmLength >= 11 && foreArmLength <= 15 && bicepCirc >= 14 && bicepCirc <= 17 && height >= 102 && height <= 109) {
        return 'S';
      } else if (foreArmLength >= 14 && foreArmLength <= 17 && bicepCirc >= 16 && bicepCirc <= 19 && height >= 109 && height <= 117) {
        return 'M';
      } else if (foreArmLength >= 15 && foreArmLength <= 19 && bicepCirc >= 18 && bicepCirc <= 21 && height >= 117 && height <= 127) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ElbowPads/CCMBase.js"}],"calculator/types/ElbowPads/BauerBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElbowPads = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ElbowPads = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 0,
  getLengthValue: function getLengthValue() {
    return this.convert(this.input.length);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.ElbowPads = ElbowPads;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/ElbowPads/BauerElbowPadsINT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerElbowPadsINT = BauerElbowPadsINT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerElbowPadsINT() {
  return _objectSpread(_objectSpread({}, _BauerBase.ElbowPads), {}, {
    input: {
      length: 24
    },
    rangeFrom: {
      length: 24
    },
    rangeTo: {
      length: 29
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 24 && length <= 26) {
        return 'M';
      } else if (length >= 27 && length <= 29) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ElbowPads/BauerBase.js"}],"calculator/types/ElbowPads/BauerElbowPadsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerElbowPadsJR = BauerElbowPadsJR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerElbowPadsJR() {
  return _objectSpread(_objectSpread({}, _BauerBase.ElbowPads), {}, {
    input: {
      length: 20
    },
    rangeFrom: {
      length: 20
    },
    rangeTo: {
      length: 25
    },
    getResult: function getResult() {
      var Length = this.invert(parseFloat(this.input.length, 10));

      if (Length >= 20 && Length <= 22) {
        return 'S';
      } else if (Length >= 23 && Length <= 25) {
        return 'M';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ElbowPads/BauerBase.js"}],"calculator/types/ElbowPads/BauerElbowPadsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerElbowPadsSR = BauerElbowPadsSR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerElbowPadsSR() {
  return _objectSpread(_objectSpread({}, _BauerBase.ElbowPads), {}, {
    input: {
      length: 27
    },
    rangeFrom: {
      length: 27
    },
    rangeTo: {
      length: 37
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 27 && length <= 31) {
        return 'M';
      } else if (length >= 32 && length <= 34) {
        return 'L';
      } else if (length >= 35 && length <= 37) {
        return 'XL';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ElbowPads/BauerBase.js"}],"calculator/types/ElbowPads/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CCMElbowPadsJR = require("./CCMElbowPadsJR");

Object.keys(_CCMElbowPadsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMElbowPadsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMElbowPadsJR[key];
    }
  });
});

var _CCMElbowPadsSR = require("./CCMElbowPadsSR");

Object.keys(_CCMElbowPadsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMElbowPadsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMElbowPadsSR[key];
    }
  });
});

var _CCMElbowPadsYT = require("./CCMElbowPadsYT");

Object.keys(_CCMElbowPadsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMElbowPadsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMElbowPadsYT[key];
    }
  });
});

var _BauerElbowPadsINT = require("./BauerElbowPadsINT");

Object.keys(_BauerElbowPadsINT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerElbowPadsINT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerElbowPadsINT[key];
    }
  });
});

var _BauerElbowPadsJR = require("./BauerElbowPadsJR");

Object.keys(_BauerElbowPadsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerElbowPadsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerElbowPadsJR[key];
    }
  });
});

var _BauerElbowPadsSR = require("./BauerElbowPadsSR");

Object.keys(_BauerElbowPadsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerElbowPadsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerElbowPadsSR[key];
    }
  });
});
},{"./CCMElbowPadsJR":"calculator/types/ElbowPads/CCMElbowPadsJR.js","./CCMElbowPadsSR":"calculator/types/ElbowPads/CCMElbowPadsSR.js","./CCMElbowPadsYT":"calculator/types/ElbowPads/CCMElbowPadsYT.js","./BauerElbowPadsINT":"calculator/types/ElbowPads/BauerElbowPadsINT.js","./BauerElbowPadsJR":"calculator/types/ElbowPads/BauerElbowPadsJR.js","./BauerElbowPadsSR":"calculator/types/ElbowPads/BauerElbowPadsSR.js"}],"calculator/types/ElbowPads/BauerElbowPadsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerElbowPadsYT = BauerElbowPadsYT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerElbowPadsYT() {
  return _objectSpread(_objectSpread({}, _BauerBase.ElbowPads), {}, {
    input: {
      length: 15
    },
    rangeFrom: {
      length: 15
    },
    rangeTo: {
      length: 20
    },
    getResult: function getResult() {
      var Length = this.invert(parseFloat(this.input.length, 10));

      if (Length >= 15 && Length <= 16) {
        return 'S';
      } else if (Length >= 17 && Length <= 18) {
        return 'M';
      } else if (Length >= 19 && Length <= 20) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ElbowPads/BauerBase.js"}],"calculator/types/Gloves/CCMBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gloves = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Gloves = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 0,
  getLengthValue: function getLengthValue() {
    return this.convert(this.input.length);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.Gloves = Gloves;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/Gloves/CCMGlovesJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMGlovesJR = CCMGlovesJR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMGlovesJR() {
  return _objectSpread(_objectSpread({}, _CCMBase.Gloves), {}, {
    input: {
      length: 13
    },
    rangeFrom: {
      length: 13
    },
    rangeTo: {
      length: 18
    },
    getResult: function getResult() {
      var length = parseInt(this.input.length, 10);

      if (length >= 13 && length <= 15.5) {
        return '10';
      } else if (length >= 14 && length <= 16.5) {
        return '11';
      } else if (length >= 15.5 && length <= 18) {
        return '12';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/Gloves/CCMBase.js"}],"calculator/types/Gloves/CCMGlovesSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMGlovesSR = CCMGlovesSR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMGlovesSR() {
  return _objectSpread(_objectSpread({}, _CCMBase.Gloves), {}, {
    input: {
      length: 16.5
    },
    rangeFrom: {
      length: 16.5
    },
    rangeTo: {
      length: 22
    },
    getResult: function getResult() {
      var length = parseFloat(this.input.length, 10);

      if (length >= 16 && length <= 18) {
        return '13';
      } else if (length >= 18.5 && length <= 19) {
        return '14';
      } else if (length >= 19.5 && length <= 22) {
        return '15';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/Gloves/CCMBase.js"}],"calculator/types/Gloves/CCMGlovesYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMGlovesYT = CCMGlovesYT;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMGlovesYT() {
  return _objectSpread(_objectSpread({}, _CCMBase.Gloves), {}, {
    input: {
      length: 10.5
    },
    rangeFrom: {
      length: 10.5
    },
    rangeTo: {
      length: 14
    },
    getResult: function getResult() {
      var length = parseFloat(this.input.length, 10);

      if (length >= 10.5 && length <= 13.5) {
        return '8';
      } else if (length >= 14) {
        return '9';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/Gloves/CCMBase.js"}],"calculator/types/Gloves/BauerBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gloves = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Gloves = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 0,
  getLengthValue: function getLengthValue() {
    return this.convert(this.input.length);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.Gloves = Gloves;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/Gloves/BauerGlovesYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerGlovesYT = BauerGlovesYT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerGlovesYT() {
  return _objectSpread(_objectSpread({}, _BauerBase.Gloves), {}, {
    input: {
      length: 10.5
    },
    rangeFrom: {
      length: 10.5
    },
    rangeTo: {
      length: 14
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 10.5 && length <= 13) {
        return '8';
      } else if (length >= 13.5 && length <= 14) {
        return '9';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/Gloves/BauerBase.js"}],"calculator/types/Gloves/BauerGlovesJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerGlovesJR = BauerGlovesJR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerGlovesJR() {
  return _objectSpread(_objectSpread({}, _BauerBase.Gloves), {}, {
    input: {
      length: 14
    },
    rangeFrom: {
      length: 14
    },
    rangeTo: {
      length: 16.5
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 14 && length <= 15.5) {
        return '10';
      } else if (length >= 16 && length <= 16.5) {
        return '11';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/Gloves/BauerBase.js"}],"calculator/types/Gloves/BauerGlovesINT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerGlovesINT = BauerGlovesINT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerGlovesINT() {
  return _objectSpread(_objectSpread({}, _BauerBase.Gloves), {}, {
    input: {
      length: 17
    },
    rangeFrom: {
      length: 17
    },
    rangeTo: {
      length: 19
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 17 && length <= 18) {
        return '12';
      } else if (length >= 18.5 && length <= 19) {
        return '13';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/Gloves/BauerBase.js"}],"calculator/types/Gloves/BauerGlovesSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerGlovesSR = BauerGlovesSR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerGlovesSR() {
  return _objectSpread(_objectSpread({}, _BauerBase.Gloves), {}, {
    input: {
      length: 19.5
    },
    rangeFrom: {
      length: 19.5
    },
    rangeTo: {
      length: 22
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 19.5 && length <= 20.5) {
        return '14';
      } else if (length >= 21 && length <= 22) {
        return '15';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/Gloves/BauerBase.js"}],"calculator/types/Gloves/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CCMGlovesJR = require("./CCMGlovesJR");

Object.keys(_CCMGlovesJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMGlovesJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMGlovesJR[key];
    }
  });
});

var _CCMGlovesSR = require("./CCMGlovesSR");

Object.keys(_CCMGlovesSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMGlovesSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMGlovesSR[key];
    }
  });
});

var _CCMGlovesYT = require("./CCMGlovesYT");

Object.keys(_CCMGlovesYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMGlovesYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMGlovesYT[key];
    }
  });
});

var _BauerGlovesYT = require("./BauerGlovesYT");

Object.keys(_BauerGlovesYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerGlovesYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerGlovesYT[key];
    }
  });
});

var _BauerGlovesJR = require("./BauerGlovesJR");

Object.keys(_BauerGlovesJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerGlovesJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerGlovesJR[key];
    }
  });
});

var _BauerGlovesINT = require("./BauerGlovesINT");

Object.keys(_BauerGlovesINT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerGlovesINT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerGlovesINT[key];
    }
  });
});

var _BauerGlovesSR = require("./BauerGlovesSR");

Object.keys(_BauerGlovesSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerGlovesSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerGlovesSR[key];
    }
  });
});
},{"./CCMGlovesJR":"calculator/types/Gloves/CCMGlovesJR.js","./CCMGlovesSR":"calculator/types/Gloves/CCMGlovesSR.js","./CCMGlovesYT":"calculator/types/Gloves/CCMGlovesYT.js","./BauerGlovesYT":"calculator/types/Gloves/BauerGlovesYT.js","./BauerGlovesJR":"calculator/types/Gloves/BauerGlovesJR.js","./BauerGlovesINT":"calculator/types/Gloves/BauerGlovesINT.js","./BauerGlovesSR":"calculator/types/Gloves/BauerGlovesSR.js"}],"calculator/types/PlayerPants/CCMBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerPants = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlayerPants = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 1,
  getWaistValue: function getWaistValue() {
    var waist = this.convert(this.input.waist);
    return waist;
  },
  getHeightValue: function getHeightValue() {
    return this.convert(this.input.height);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.PlayerPants = PlayerPants;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/PlayerPants/CCMPlayerPantsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMPlayerPantsJR = CCMPlayerPantsJR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMPlayerPantsJR() {
  return _objectSpread(_objectSpread({}, _CCMBase.PlayerPants), {}, {
    getWaistInput: function getWaistInput(i) {
      var output = {
        a: [30, 58],
        b: [58, 64],
        c: [62, 72],
        d: [69, 79],
        e: [69, 74]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 110 && height <= 126) {
        return output.a[i];
      } else if (height >= 127 && height <= 137) {
        return output.b[i];
      } else if (height >= 138 && height <= 147) {
        return output.c[i];
      } else if (height >= 148 && height <= 157) {
        return output.d[i];
      } else if (height >= 158 && height <= 170) {
        return output.e[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('waistInput');
      el.setAttribute('min', this.getWaistInput(0));
      el.setAttribute('max', this.getWaistInput(1));
      var value = parseFloat((this.getWaistInput(0) + this.getWaistInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      waist: 58,
      height: 127
    },
    rangeFrom: {
      waist: 58,
      height: 127
    },
    rangeTo: {
      waist: 79,
      height: 170
    },
    getResult: function getResult() {
      var height = parseInt(this.input.height, 10);
      var waist = parseInt(this.input.waist, 10);

      if (waist <= 58 && height <= 132) {
        return 'XS';
      } else if (waist >= 58 && waist <= 64 && height >= 127 && height <= 137) {
        return 'S';
      } else if (waist >= 62 && waist <= 72 && height >= 137 && height <= 147) {
        return 'M';
      } else if (waist >= 69 && waist <= 79 && height >= 147 && height <= 157) {
        return 'L';
      } else if (waist >= 69 && waist <= 74 && height >= 163 && height <= 170) {
        return 'XL';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/PlayerPants/CCMBase.js"}],"calculator/types/PlayerPants/CCMPlayerPantsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMPlayerPantsSR = CCMPlayerPantsSR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMPlayerPantsSR() {
  return _objectSpread(_objectSpread({}, _CCMBase.PlayerPants), {}, {
    getWaistInput: function getWaistInput(i) {
      var output = {
        a: [74, 82],
        b: [79, 89],
        c: [86, 99],
        d: [86, 107]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 157 && height <= 168) {
        return output.a[i];
      } else if (height >= 169 && height <= 178) {
        return output.b[i];
      } else if (height >= 179 && height <= 182) {
        return output.c[i];
      } else if (height >= 183 && height <= 210) {
        return output.d[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('waistInput');
      el.setAttribute('min', this.getWaistInput(0));
      el.setAttribute('max', this.getWaistInput(1));
      var value = parseFloat((this.getWaistInput(0) + this.getWaistInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      waist: 74,
      height: 157
    },
    rangeFrom: {
      waist: 74,
      height: 157
    },
    rangeTo: {
      waist: 107,
      height: 188
    },
    getResult: function getResult() {
      var height = parseInt(this.input.height, 10);
      var waist = parseInt(this.input.waist, 10);

      if (waist >= 74 && waist <= 82 && height >= 157 && height <= 168) {
        return 'S';
      } else if (waist >= 79 && waist <= 89 && height >= 168 && height <= 178) {
        return 'M';
      } else if (waist >= 86 && waist <= 99 && height >= 178 && height <= 188) {
        return 'L';
      } else if (waist >= 95 && waist <= 107 && height >= 183) {
        return 'XL';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/PlayerPants/CCMBase.js"}],"calculator/types/PlayerPants/CCMPlayerPantsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMPlayerPantsYT = CCMPlayerPantsYT;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMPlayerPantsYT() {
  return _objectSpread(_objectSpread({}, _CCMBase.PlayerPants), {}, {
    getWaistInput: function getWaistInput(i) {
      var output = {
        a: [51, 55],
        b: [53, 57],
        c: [56, 60]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 109) {
        return output.a[i];
      } else if (height >= 110 && height <= 117) {
        return output.b[i];
      } else if (height >= 118 && height <= 127) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('waistInput');
      el.setAttribute('min', this.getWaistInput(0));
      el.setAttribute('max', this.getWaistInput(1));
      var value = parseFloat((this.getWaistInput(0) + this.getWaistInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      waist: 51,
      height: 102
    },
    rangeFrom: {
      waist: 51,
      height: 102
    },
    rangeTo: {
      waist: 60,
      height: 127
    },
    getResult: function getResult() {
      var height = parseInt(this.input.height, 10);
      var waist = parseInt(this.input.waist, 10);

      if (waist >= 51 && waist <= 55 && height >= 102 && height <= 109) {
        return 'S';
      } else if (waist >= 53 && waist <= 57 && height >= 109 && height <= 117) {
        return 'M';
      } else if (waist >= 56 && waist <= 60 && height >= 117 && height <= 127) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/PlayerPants/CCMBase.js"}],"calculator/types/PlayerPants/CCMPlayerPantsWOMEN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMPlayerPantsWomen = CCMPlayerPantsWomen;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMPlayerPantsWomen() {
  return _objectSpread(_objectSpread({}, _CCMBase.PlayerPants), {}, {
    getWaistInput: function getWaistInput(i) {
      var output = {
        a: [64, 74],
        b: [74, 84],
        c: [84, 94]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 150 && height <= 160) {
        return output.a[i];
      } else if (height >= 161 && height <= 170) {
        return output.b[i];
      } else if (height >= 171 && height <= 183) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('waistInput');
      el.setAttribute('min', this.getWaistInput(0));
      el.setAttribute('max', this.getWaistInput(1));
      var value = parseFloat((this.getWaistInput(0) + this.getWaistInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      waist: 64,
      height: 150
    },
    rangeFrom: {
      waist: 64,
      height: 150
    },
    rangeTo: {
      waist: 94,
      height: 183
    },
    getResult: function getResult() {
      var height = parseInt(this.input.height, 10);
      var waist = parseInt(this.input.waist, 10);

      if (waist >= 64 && waist <= 74 && height >= 150 && height <= 160) {
        return 'S';
      } else if (waist >= 74 && waist <= 84 && height >= 160 && height <= 170) {
        return 'M';
      } else if (waist >= 84 && waist <= 94 && height >= 170 && height <= 183) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/PlayerPants/CCMBase.js"}],"calculator/types/PlayerPants/BauerBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerPants = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlayerPants = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 0,
  getWaistValue: function getWaistValue() {
    var waist = this.convert(this.input.waist);
    return waist;
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.PlayerPants = PlayerPants;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/PlayerPants/BauerPlayerPantsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerPlayerPantsYT = BauerPlayerPantsYT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerPlayerPantsYT() {
  return _objectSpread(_objectSpread({}, _BauerBase.PlayerPants), {}, {
    input: {
      waist: 48
    },
    rangeFrom: {
      waist: 48
    },
    rangeTo: {
      waist: 61
    },
    getResult: function getResult() {
      var waist = this.invert(parseFloat(this.input.waist, 10));

      if (waist >= 48 && waist <= 52) {
        return 'S';
      } else if (waist >= 53 && waist <= 55) {
        return 'M';
      } else if (waist >= 56 && waist <= 61) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/PlayerPants/BauerBase.js"}],"calculator/types/PlayerPants/BauerPlayerPantsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerPlayerPantsJR = BauerPlayerPantsJR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerPlayerPantsJR() {
  return _objectSpread(_objectSpread({}, _BauerBase.PlayerPants), {}, {
    input: {
      waist: 61
    },
    rangeFrom: {
      waist: 61
    },
    rangeTo: {
      waist: 72
    },
    getResult: function getResult() {
      var waist = this.invert(parseFloat(this.input.waist, 10));

      if (waist >= 61 && waist <= 64) {
        return 'S';
      } else if (waist >= 65 && waist <= 68) {
        return 'M';
      } else if (waist >= 69 && waist <= 72) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/PlayerPants/BauerBase.js"}],"calculator/types/PlayerPants/BauerPlayerPantsINT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerPlayerPantsINT = BauerPlayerPantsINT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerPlayerPantsINT() {
  return _objectSpread(_objectSpread({}, _BauerBase.PlayerPants), {}, {
    input: {
      waist: 72
    },
    rangeFrom: {
      waist: 72
    },
    rangeTo: {
      waist: 86
    },
    getResult: function getResult() {
      var waist = this.invert(parseFloat(this.input.waist, 10));

      if (waist >= 72 && waist <= 78) {
        return 'M';
      } else if (waist >= 79 && waist <= 86) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/PlayerPants/BauerBase.js"}],"calculator/types/PlayerPants/BauerPlayerPantsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerPlayerPantsSR = BauerPlayerPantsSR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerPlayerPantsSR() {
  return _objectSpread(_objectSpread({}, _BauerBase.PlayerPants), {}, {
    input: {
      waist: 86
    },
    rangeFrom: {
      waist: 86
    },
    rangeTo: {
      waist: 102
    },
    getResult: function getResult() {
      var waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 86 && waist <= 91) {
        return 'M';
      } else if (waist >= 92 && waist <= 97) {
        return 'L';
      } else if (waist >= 98 && waist <= 102) {
        return 'XL';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/PlayerPants/BauerBase.js"}],"calculator/types/PlayerPants/BauerPlayerPantsWOMEN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerPlayerPantsWOMEN = BauerPlayerPantsWOMEN;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerPlayerPantsWOMEN() {
  return _objectSpread(_objectSpread({}, _BauerBase.PlayerPants), {}, {
    input: {
      waist: 61
    },
    rangeFrom: {
      waist: 61
    },
    rangeTo: {
      waist: 84
    },
    getResult: function getResult() {
      var waist = this.invert(parseFloat(this.input.waist, 10));

      if (waist >= 61 && waist <= 69) {
        return 'XS';
      } else if (waist >= 66 && waist <= 74) {
        return 'S';
      } else if (waist >= 71 && waist <= 79) {
        return 'M';
      } else if (waist >= 76 && waist <= 84) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/PlayerPants/BauerBase.js"}],"calculator/types/PlayerPants/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CCMPlayerPantsJR = require("./CCMPlayerPantsJR");

Object.keys(_CCMPlayerPantsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMPlayerPantsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMPlayerPantsJR[key];
    }
  });
});

var _CCMPlayerPantsSR = require("./CCMPlayerPantsSR");

Object.keys(_CCMPlayerPantsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMPlayerPantsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMPlayerPantsSR[key];
    }
  });
});

var _CCMPlayerPantsYT = require("./CCMPlayerPantsYT");

Object.keys(_CCMPlayerPantsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMPlayerPantsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMPlayerPantsYT[key];
    }
  });
});

var _CCMPlayerPantsWOMEN = require("./CCMPlayerPantsWOMEN");

Object.keys(_CCMPlayerPantsWOMEN).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMPlayerPantsWOMEN[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMPlayerPantsWOMEN[key];
    }
  });
});

var _BauerPlayerPantsYT = require("./BauerPlayerPantsYT");

Object.keys(_BauerPlayerPantsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerPlayerPantsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerPlayerPantsYT[key];
    }
  });
});

var _BauerPlayerPantsJR = require("./BauerPlayerPantsJR");

Object.keys(_BauerPlayerPantsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerPlayerPantsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerPlayerPantsJR[key];
    }
  });
});

var _BauerPlayerPantsINT = require("./BauerPlayerPantsINT");

Object.keys(_BauerPlayerPantsINT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerPlayerPantsINT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerPlayerPantsINT[key];
    }
  });
});

var _BauerPlayerPantsSR = require("./BauerPlayerPantsSR");

Object.keys(_BauerPlayerPantsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerPlayerPantsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerPlayerPantsSR[key];
    }
  });
});

var _BauerPlayerPantsWOMEN = require("./BauerPlayerPantsWOMEN");

Object.keys(_BauerPlayerPantsWOMEN).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerPlayerPantsWOMEN[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerPlayerPantsWOMEN[key];
    }
  });
});
},{"./CCMPlayerPantsJR":"calculator/types/PlayerPants/CCMPlayerPantsJR.js","./CCMPlayerPantsSR":"calculator/types/PlayerPants/CCMPlayerPantsSR.js","./CCMPlayerPantsYT":"calculator/types/PlayerPants/CCMPlayerPantsYT.js","./CCMPlayerPantsWOMEN":"calculator/types/PlayerPants/CCMPlayerPantsWOMEN.js","./BauerPlayerPantsYT":"calculator/types/PlayerPants/BauerPlayerPantsYT.js","./BauerPlayerPantsJR":"calculator/types/PlayerPants/BauerPlayerPantsJR.js","./BauerPlayerPantsINT":"calculator/types/PlayerPants/BauerPlayerPantsINT.js","./BauerPlayerPantsSR":"calculator/types/PlayerPants/BauerPlayerPantsSR.js","./BauerPlayerPantsWOMEN":"calculator/types/PlayerPants/BauerPlayerPantsWOMEN.js"}],"calculator/types/ShinGuards/CCMBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShinGuards = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShinGuards = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 1,
  getLengthValue: function getLengthValue() {
    var length = this.convert(this.input.length);
    return length;
  },
  getHeightValue: function getHeightValue() {
    return this.convert(this.input.height);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.ShinGuards = ShinGuards;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/ShinGuards/CCMShinGuardsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShinGuardsJR = CCMShinGuardsJR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShinGuardsJR() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShinGuards), {}, {
    getTibiaInput: function getTibiaInput(i) {
      var output = {
        a: [28, 30],
        b: [30, 33],
        c: [33, 36]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 132 && height <= 142) {
        return output.a[i];
      } else if (height >= 143 && height <= 152) {
        return output.b[i];
      } else if (height >= 153 && height <= 163) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('lengthInput');
      el.setAttribute('min', this.getTibiaInput(0));
      el.setAttribute('max', this.getTibiaInput(1));
      var value = parseFloat((this.getTibiaInput(0) + this.getTibiaInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      height: 132,
      length: 28
    },
    rangeFrom: {
      height: 132,
      length: 28
    },
    rangeTo: {
      height: 163,
      length: 36
    },
    getResult: function getResult() {
      var length = parseInt(this.input.length, 10);
      var height = parseInt(this.input.height, 10);

      if (height >= 132 && height <= 142 && length >= 28 && length <= 30) {
        return '11';
      } else if (height >= 142 && height <= 152 && length >= 30 && length <= 33) {
        return '12';
      } else if (height >= 152 && height <= 163 && length >= 33 && length <= 36) {
        return '13';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ShinGuards/CCMBase.js"}],"calculator/types/ShinGuards/CCMShinGuardsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShinGuardsSR = CCMShinGuardsSR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShinGuardsSR() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShinGuards), {}, {
    getTibiaInput: function getTibiaInput(i) {
      var output = {
        a: [36, 38],
        b: [38, 41],
        c: [41, 43],
        d: [43, 48]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 163 && height <= 173) {
        return output.a[i];
      } else if (height >= 174 && height <= 183) {
        return output.b[i];
      } else if (height >= 184 && height <= 193) {
        return output.c[i];
      } else if (height >= 194 && height <= 210) {
        return output.d[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('lengthInput');
      el.setAttribute('min', this.getTibiaInput(0));
      el.setAttribute('max', this.getTibiaInput(1));
      var value = parseFloat((this.getTibiaInput(0) + this.getTibiaInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      height: 163,
      length: 36
    },
    rangeFrom: {
      height: 163,
      length: 36
    },
    rangeTo: {
      height: 210,
      length: 48
    },
    getResult: function getResult() {
      var length = parseInt(this.input.length, 10);
      var height = parseInt(this.input.height, 10);

      if (height >= 163 && height <= 173 && length >= 36 && length <= 38) {
        return '14';
      } else if (height >= 173 && height <= 183 && length >= 38 && length <= 41) {
        return '15';
      } else if (height >= 183 && height <= 193 && length >= 41 && length <= 43) {
        return '16';
      } else if (height >= 193 && length >= 43 && length <= 46) {
        return '17';
      } // } else if (height >= 193 && length >= 46 && length <= 48) {
      //   return '18';
      // }

    }
  });
}
},{"./CCMBase":"calculator/types/ShinGuards/CCMBase.js"}],"calculator/types/ShinGuards/CCMShinGuardsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShinGuardsYT = CCMShinGuardsYT;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShinGuardsYT() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShinGuards), {}, {
    getTibiaInput: function getTibiaInput(i) {
      var output = {
        a: [20, 23],
        b: [23, 25],
        c: [25, 28]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 112) {
        return output.a[i];
      } else if (height >= 113 && height <= 122) {
        return output.b[i];
      } else if (height >= 123 && height <= 132) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('lengthInput');
      el.setAttribute('min', this.getTibiaInput(0));
      el.setAttribute('max', this.getTibiaInput(1));
      var value = parseFloat((this.getTibiaInput(0) + this.getTibiaInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      height: 102,
      length: 20
    },
    rangeFrom: {
      height: 102,
      length: 20
    },
    rangeTo: {
      height: 132,
      length: 28
    },
    getResult: function getResult() {
      var length = parseInt(this.input.length, 10);
      var height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 112 && length >= 20 && length <= 23) {
        return '8';
      } else if (height >= 112 && height <= 122 && length >= 23 && length <= 25) {
        return '9';
      } else if (height >= 122 && height <= 132 && length >= 25 && length <= 28) {
        return '10';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ShinGuards/CCMBase.js"}],"calculator/types/ShinGuards/BauerBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShinGuards = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShinGuards = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 0,
  getLengthValue: function getLengthValue() {
    var length = this.convert(this.input.length);
    return length;
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.ShinGuards = ShinGuards;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/ShinGuards/BauerShinGuardsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShinGuardsYT = BauerShinGuardsYT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShinGuardsYT() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShinGuards), {}, {
    input: {
      length: 25.5
    },
    rangeFrom: {
      length: 25.5
    },
    rangeTo: {
      length: 33.5
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 25.5 && length <= 28) {
        return '8';
      } else if (length >= 28.5 && length <= 31) {
        return '9';
      } else if (length >= 31.5 && length <= 33.5) {
        return '10';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShinGuards/BauerBase.js"}],"calculator/types/ShinGuards/BauerShinGuardsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShinGuardsJR = BauerShinGuardsJR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShinGuardsJR() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShinGuards), {}, {
    input: {
      length: 33.5
    },
    rangeFrom: {
      length: 33.5
    },
    rangeTo: {
      length: 38.5
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 33.5 && length <= 36) {
        return '11';
      } else if (length >= 36.5 && length <= 38.5) {
        return '12';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShinGuards/BauerBase.js"}],"calculator/types/ShinGuards/BauerShinGuardsINT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShinGuardsINT = BauerShinGuardsINT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShinGuardsINT() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShinGuards), {}, {
    input: {
      length: 38.5
    },
    rangeFrom: {
      length: 38.5
    },
    rangeTo: {
      length: 43.5
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 38.5 && length <= 41) {
        return '13';
      } else if (length >= 41.5 && length <= 43.5) {
        return '14';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShinGuards/BauerBase.js"}],"calculator/types/ShinGuards/BauerShinGuardsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShinGuardsSR = BauerShinGuardsSR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShinGuardsSR() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShinGuards), {}, {
    input: {
      length: 43.5
    },
    rangeFrom: {
      length: 43.5
    },
    rangeTo: {
      length: 51.5
    },
    getResult: function getResult() {
      var length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 43.5 && length <= 46) {
        return '15';
      } else if (length >= 46.5 && length <= 48.5) {
        return '16';
      } else if (length >= 49 && length <= 51.5) {
        return '17';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShinGuards/BauerBase.js"}],"calculator/types/ShinGuards/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CCMShinGuardsJR = require("./CCMShinGuardsJR");

Object.keys(_CCMShinGuardsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShinGuardsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShinGuardsJR[key];
    }
  });
});

var _CCMShinGuardsSR = require("./CCMShinGuardsSR");

Object.keys(_CCMShinGuardsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShinGuardsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShinGuardsSR[key];
    }
  });
});

var _CCMShinGuardsYT = require("./CCMShinGuardsYT");

Object.keys(_CCMShinGuardsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShinGuardsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShinGuardsYT[key];
    }
  });
});

var _BauerShinGuardsYT = require("./BauerShinGuardsYT");

Object.keys(_BauerShinGuardsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShinGuardsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShinGuardsYT[key];
    }
  });
});

var _BauerShinGuardsJR = require("./BauerShinGuardsJR");

Object.keys(_BauerShinGuardsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShinGuardsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShinGuardsJR[key];
    }
  });
});

var _BauerShinGuardsINT = require("./BauerShinGuardsINT");

Object.keys(_BauerShinGuardsINT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShinGuardsINT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShinGuardsINT[key];
    }
  });
});

var _BauerShinGuardsSR = require("./BauerShinGuardsSR");

Object.keys(_BauerShinGuardsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShinGuardsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShinGuardsSR[key];
    }
  });
});
},{"./CCMShinGuardsJR":"calculator/types/ShinGuards/CCMShinGuardsJR.js","./CCMShinGuardsSR":"calculator/types/ShinGuards/CCMShinGuardsSR.js","./CCMShinGuardsYT":"calculator/types/ShinGuards/CCMShinGuardsYT.js","./BauerShinGuardsYT":"calculator/types/ShinGuards/BauerShinGuardsYT.js","./BauerShinGuardsJR":"calculator/types/ShinGuards/BauerShinGuardsJR.js","./BauerShinGuardsINT":"calculator/types/ShinGuards/BauerShinGuardsINT.js","./BauerShinGuardsSR":"calculator/types/ShinGuards/BauerShinGuardsSR.js"}],"calculator/types/ShoulderPads/CCMBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoulderPads = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShoulderPads = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 1,
  getChestValue: function getChestValue() {
    var chest = this.convert(this.input.chest);
    return chest;
  },
  getHeightValue: function getHeightValue() {
    return this.convert(this.input.height);
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    console.log(size);
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.ShoulderPads = ShoulderPads;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/ShoulderPads/CCMShoulderPadsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShoulderPadsJR = CCMShoulderPadsJR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShoulderPadsJR() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShoulderPads), {}, {
    getChestInput: function getChestInput(i) {
      var output = {
        a: [60, 76],
        b: [67, 81],
        c: [75, 89]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 127 && height <= 137) {
        return output.a[i];
      } else if (height >= 138 && height <= 147) {
        return output.b[i];
      } else if (height >= 148 && height <= 157) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('chestInput');
      el.setAttribute('min', this.getChestInput(0));
      el.setAttribute('max', this.getChestInput(1));
      var value = parseFloat((this.getChestInput(0) + this.getChestInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      chest: 60,
      height: 127
    },
    rangeFrom: {
      chest: 60,
      height: 127
    },
    rangeTo: {
      chest: 89,
      height: 157
    },
    getResult: function getResult() {
      var chest = parseInt(this.input.chest, 10);
      var height = parseInt(this.input.height, 10);

      if (chest >= 60 && chest <= 76 && height >= 127 && height <= 137) {
        return 'S';
      } else if (chest >= 67 && chest <= 81 && height >= 137 && height <= 147) {
        return 'M';
      } else if (chest >= 75 && chest <= 89 && height >= 147 && height <= 157) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ShoulderPads/CCMBase.js"}],"calculator/types/ShoulderPads/CCMShoulderPadsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShoulderPadsSR = CCMShoulderPadsSR;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShoulderPadsSR() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShoulderPads), {}, {
    getChestInput: function getChestInput(i) {
      var output = {
        a: [86, 97],
        b: [94, 104],
        c: [102, 112],
        d: [109, 122]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 157 && height <= 168) {
        return output.a[i];
      } else if (height >= 169 && height <= 178) {
        return output.b[i];
      } else if (height >= 179 && height <= 188) {
        return output.c[i];
      } else if (height >= 189 && height <= 210) {
        return output.d[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('chestInput');
      el.setAttribute('min', this.getChestInput(0));
      el.setAttribute('max', this.getChestInput(1));
      var value = parseFloat((this.getChestInput(0) + this.getChestInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      height: 157,
      chest: 86
    },
    rangeFrom: {
      height: 157
    },
    rangeTo: {
      height: 210
    },
    getResult: function getResult() {
      var chest = parseInt(this.input.chest, 10);
      var height = parseInt(this.input.height, 10);

      if (chest >= 86 && chest <= 97 && height >= 157 && height <= 168) {
        return 'S';
      } else if (chest >= 94 && chest <= 104 && height >= 168 && height <= 178) {
        return 'M';
      } else if (chest >= 102 && chest <= 112 && height >= 178 && height <= 188) {
        return 'L';
      } else if (chest >= 109 && chest <= 122 && height >= 183 && height <= 210) {
        return 'XL';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ShoulderPads/CCMBase.js"}],"calculator/types/ShoulderPads/CCMShoulderPadsWOMEN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShoulderPadsWomen = CCMShoulderPadsWomen;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShoulderPadsWomen() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShoulderPads), {}, {
    getChestInput: function getChestInput(i) {
      var output = {
        a: [71, 84],
        b: [84, 99],
        c: [99, 119]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 150 && height <= 160) {
        return output.a[i];
      } else if (height >= 161 && height <= 170) {
        return output.b[i];
      } else if (height >= 171 && height <= 183) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('chestInput');
      el.setAttribute('min', this.getChestInput(0));
      el.setAttribute('max', this.getChestInput(1));
      var value = parseFloat((this.getChestInput(0) + this.getChestInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      chest: 71,
      height: 150
    },
    rangeFrom: {
      chest: 71,
      height: 150
    },
    rangeTo: {
      chest: 119,
      height: 183
    },
    getResult: function getResult() {
      var chest = parseInt(this.input.chest, 10);
      var height = parseInt(this.input.height, 10);

      if (chest >= 71 && chest <= 84 && height >= 150 && height <= 160) {
        return 'S';
      } else if (chest >= 84 && chest <= 99 && height >= 160 && height <= 170) {
        return 'M';
      } else if (chest >= 99 && chest <= 119 && height >= 170 && height <= 183) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ShoulderPads/CCMBase.js"}],"calculator/types/ShoulderPads/CCMShoulderPadsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCMShoulderPadsYT = CCMShoulderPadsYT;

var _CCMBase = require("./CCMBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CCMShoulderPadsYT() {
  return _objectSpread(_objectSpread({}, _CCMBase.ShoulderPads), {}, {
    getChestInput: function getChestInput(i) {
      var output = {
        a: [48, 58],
        b: [58, 64],
        c: [58, 70]
      };
      var height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 109) {
        return output.a[i];
      } else if (height >= 110 && height <= 116) {
        return output.b[i];
      } else if (height >= 117 && height <= 127) {
        return output.c[i];
      }
    },
    handleNext: function handleNext() {
      var el = document.getElementById('chestInput');
      el.setAttribute('min', this.getChestInput(0));
      el.setAttribute('max', this.getChestInput(1));
      var value = parseFloat((this.getChestInput(0) + this.getChestInput(1)) / 2).toFixed(0);

      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      chest: 58,
      height: 102
    },
    rangeFrom: {
      chest: 58,
      height: 102
    },
    rangeTo: {
      chest: 70,
      height: 127
    },
    getResult: function getResult() {
      var chest = parseInt(this.input.chest, 10);
      var height = parseInt(this.input.height, 10);

      if (chest <= 58 && height >= 102 && height <= 109) {
        return 'S';
      } else if (chest >= 58 && chest <= 64 && height >= 102 && height <= 122) {
        return 'M';
      } else if (chest >= 60 && chest <= 70 && height >= 117 && height <= 127) {
        return 'L';
      }
    }
  });
}
},{"./CCMBase":"calculator/types/ShoulderPads/CCMBase.js"}],"calculator/types/ShoulderPads/BauerBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoulderPads = void 0;

var _getVariationEl = require("../../../helpers/getVariationEl");

var _ui = require("../../ui");

var _unitConverter = require("../../unitConverter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShoulderPads = _objectSpread(_objectSpread(_objectSpread({}, _ui.calculatorUI), _unitConverter.cmToInch), {}, {
  maxStep: 0,
  getChestValue: function getChestValue() {
    var chest = this.convert(this.input.chest);
    return chest;
  },
  handleFinal: function handleFinal() {
    var size = this.getResult();
    console.log(size);
    this.dataObtained.size = size;
    var AvailableVariationsLoader = JSON.parse(document.getElementById('AvailableVariationsLoader').getAttribute('data-variations'));

    if (AvailableVariationsLoader.size.value.split(',').includes(this.dataObtained.size)) {
      var selectSize = (0, _getVariationEl.getVariationEl)(AvailableVariationsLoader.size, this.dataObtained.size);

      if (selectSize) {
        this.matchedVariations = true;

        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }

        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }

    this.onDataObtained = true;
    this.onSubmit = true;
  }
});

exports.ShoulderPads = ShoulderPads;
},{"../../../helpers/getVariationEl":"helpers/getVariationEl.js","../../ui":"calculator/ui.js","../../unitConverter":"calculator/unitConverter.js"}],"calculator/types/ShoulderPads/BauerShoulderPadsYT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShoulderPadsYT = BauerShoulderPadsYT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShoulderPadsYT() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShoulderPads), {}, {
    input: {
      chest: 51
    },
    rangeFrom: {
      chest: 51
    },
    rangeTo: {
      chest: 64
    },
    getResult: function getResult() {
      var chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 51 && chest <= 55) {
        return 'S';
      } else if (chest >= 56 && chest <= 60) {
        return 'M';
      } else if (chest >= 61 && chest <= 64) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShoulderPads/BauerBase.js"}],"calculator/types/ShoulderPads/BauerShoulderPadsJR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShoulderPadsJR = BauerShoulderPadsJR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShoulderPadsJR() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShoulderPads), {}, {
    input: {
      chest: 65
    },
    rangeFrom: {
      chest: 65
    },
    rangeTo: {
      chest: 72
    },
    getResult: function getResult() {
      var chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 65 && chest <= 68) {
        return 'S';
      } else if (chest >= 69 && chest <= 72) {
        return 'M';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShoulderPads/BauerBase.js"}],"calculator/types/ShoulderPads/BauerShoulderPadsINT.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShoulderPadsINT = BauerShoulderPadsINT;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShoulderPadsINT() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShoulderPads), {}, {
    input: {
      chest: 73
    },
    rangeFrom: {
      chest: 73
    },
    rangeTo: {
      chest: 96
    },
    getResult: function getResult() {
      var chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 73 && chest <= 81) {
        return 'M';
      } else if (chest >= 82 && chest <= 96) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShoulderPads/BauerBase.js"}],"calculator/types/ShoulderPads/BauerShoulderPadsSR.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShoulderPadsSR = BauerShoulderPadsSR;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShoulderPadsSR() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShoulderPads), {}, {
    input: {
      chest: 97
    },
    rangeFrom: {
      chest: 97
    },
    rangeTo: {
      chest: 117
    },
    getResult: function getResult() {
      var chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 97 && chest <= 103) {
        return 'M';
      } else if (chest >= 104 && chest <= 111) {
        return 'L';
      } else if (chest >= 112 && chest <= 117) {
        return 'XL';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShoulderPads/BauerBase.js"}],"calculator/types/ShoulderPads/BauerShoulderPadsWOMEN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BauerShoulderPadsWOMEN = BauerShoulderPadsWOMEN;

var _BauerBase = require("./BauerBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BauerShoulderPadsWOMEN() {
  return _objectSpread(_objectSpread({}, _BauerBase.ShoulderPads), {}, {
    input: {
      chest: 76
    },
    rangeFrom: {
      chest: 76
    },
    rangeTo: {
      chest: 102
    },
    getResult: function getResult() {
      var chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 76 && chest <= 86) {
        return 'XS';
      } else if (chest >= 81 && chest <= 91) {
        return 'S';
      } else if (chest >= 86 && chest <= 97) {
        return 'M';
      } else if (chest >= 91 && chest <= 102) {
        return 'L';
      }
    }
  });
}
},{"./BauerBase":"calculator/types/ShoulderPads/BauerBase.js"}],"calculator/types/ShoulderPads/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CCMShoulderPadsJR = require("./CCMShoulderPadsJR");

Object.keys(_CCMShoulderPadsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShoulderPadsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShoulderPadsJR[key];
    }
  });
});

var _CCMShoulderPadsSR = require("./CCMShoulderPadsSR");

Object.keys(_CCMShoulderPadsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShoulderPadsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShoulderPadsSR[key];
    }
  });
});

var _CCMShoulderPadsWOMEN = require("./CCMShoulderPadsWOMEN");

Object.keys(_CCMShoulderPadsWOMEN).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShoulderPadsWOMEN[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShoulderPadsWOMEN[key];
    }
  });
});

var _CCMShoulderPadsYT = require("./CCMShoulderPadsYT");

Object.keys(_CCMShoulderPadsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CCMShoulderPadsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CCMShoulderPadsYT[key];
    }
  });
});

var _BauerShoulderPadsYT = require("./BauerShoulderPadsYT");

Object.keys(_BauerShoulderPadsYT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShoulderPadsYT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShoulderPadsYT[key];
    }
  });
});

var _BauerShoulderPadsJR = require("./BauerShoulderPadsJR");

Object.keys(_BauerShoulderPadsJR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShoulderPadsJR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShoulderPadsJR[key];
    }
  });
});

var _BauerShoulderPadsINT = require("./BauerShoulderPadsINT");

Object.keys(_BauerShoulderPadsINT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShoulderPadsINT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShoulderPadsINT[key];
    }
  });
});

var _BauerShoulderPadsSR = require("./BauerShoulderPadsSR");

Object.keys(_BauerShoulderPadsSR).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShoulderPadsSR[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShoulderPadsSR[key];
    }
  });
});

var _BauerShoulderPadsWOMEN = require("./BauerShoulderPadsWOMEN");

Object.keys(_BauerShoulderPadsWOMEN).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BauerShoulderPadsWOMEN[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BauerShoulderPadsWOMEN[key];
    }
  });
});
},{"./CCMShoulderPadsJR":"calculator/types/ShoulderPads/CCMShoulderPadsJR.js","./CCMShoulderPadsSR":"calculator/types/ShoulderPads/CCMShoulderPadsSR.js","./CCMShoulderPadsWOMEN":"calculator/types/ShoulderPads/CCMShoulderPadsWOMEN.js","./CCMShoulderPadsYT":"calculator/types/ShoulderPads/CCMShoulderPadsYT.js","./BauerShoulderPadsYT":"calculator/types/ShoulderPads/BauerShoulderPadsYT.js","./BauerShoulderPadsJR":"calculator/types/ShoulderPads/BauerShoulderPadsJR.js","./BauerShoulderPadsINT":"calculator/types/ShoulderPads/BauerShoulderPadsINT.js","./BauerShoulderPadsSR":"calculator/types/ShoulderPads/BauerShoulderPadsSR.js","./BauerShoulderPadsWOMEN":"calculator/types/ShoulderPads/BauerShoulderPadsWOMEN.js"}],"calculator.js":[function(require,module,exports) {
"use strict";

var _alpinejs = _interopRequireDefault(require("alpinejs"));

var _BauerIcehockeySkates = require("./calculator/types/BauerIcehockeySkates");

var _CCMSkates = require("./calculator/types/CCMSkates");

var _ElbowPads = require("./calculator/types/ElbowPads");

var _BauerElbowPadsYT = require("./calculator/types/ElbowPads/BauerElbowPadsYT");

var _Gloves = require("./calculator/types/Gloves");

var _PlayerPants = require("./calculator/types/PlayerPants");

var _ShinGuards = require("./calculator/types/ShinGuards");

var _ShoulderPads = require("./calculator/types/ShoulderPads");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_alpinejs.default) {
  _alpinejs.default.data('BauerIcehockeySkates', _BauerIcehockeySkates.BauerIcehockeySkates);

  _alpinejs.default.data('CCMSkates', _CCMSkates.CCMSkates);

  _alpinejs.default.data('BauerGlovesSR', _Gloves.BauerGlovesSR);

  _alpinejs.default.data('BauerGlovesJR', _Gloves.BauerGlovesJR);

  _alpinejs.default.data('BauerGlovesYT', _Gloves.BauerGlovesYT);

  _alpinejs.default.data('BauerGlovesINT', _Gloves.BauerGlovesINT);

  _alpinejs.default.data('CCMGlovesSR', _Gloves.CCMGlovesSR);

  _alpinejs.default.data('CCMGlovesJR', _Gloves.CCMGlovesJR);

  _alpinejs.default.data('CCMGlovesYT', _Gloves.CCMGlovesYT);

  _alpinejs.default.data('BauerShoulderPadsJR', _ShoulderPads.BauerShoulderPadsJR);

  _alpinejs.default.data('BauerShoulderPadsSR', _ShoulderPads.BauerShoulderPadsSR);

  _alpinejs.default.data('BauerShoulderPadsYT', _ShoulderPads.BauerShoulderPadsYT);

  _alpinejs.default.data('BauerShoulderPadsINT', _ShoulderPads.BauerShoulderPadsINT);

  _alpinejs.default.data('BauerShoulderPadsWOMEN', _ShoulderPads.BauerShoulderPadsWOMEN);

  _alpinejs.default.data('CCMShoulderPadsJR', _ShoulderPads.CCMShoulderPadsJR);

  _alpinejs.default.data('CCMShoulderPadsYT', _ShoulderPads.CCMShoulderPadsYT);

  _alpinejs.default.data('CCMShoulderPadsSR', _ShoulderPads.CCMShoulderPadsSR);

  _alpinejs.default.data('CCMShoulderPadsWOMEN', _ShoulderPads.CCMShoulderPadsWOMEN);

  _alpinejs.default.data('BauerElbowPadsSR', _ElbowPads.BauerElbowPadsSR);

  _alpinejs.default.data('BauerElbowPadsJR', _ElbowPads.BauerElbowPadsJR);

  _alpinejs.default.data('BauerElbowPadsYT', _BauerElbowPadsYT.BauerElbowPadsYT);

  _alpinejs.default.data('BauerElbowPadsINT', _ElbowPads.BauerElbowPadsINT);

  _alpinejs.default.data('CCMElbowPadsSR', _ElbowPads.CCMElbowPadsSR);

  _alpinejs.default.data('CCMElbowPadsJR', _ElbowPads.CCMElbowPadsJR);

  _alpinejs.default.data('CCMElbowPadsYT', _ElbowPads.CCMElbowPadsYT);

  _alpinejs.default.data('BauerShinGuardsJR', _ShinGuards.BauerShinGuardsJR);

  _alpinejs.default.data('BauerShinGuardsSR', _ShinGuards.BauerShinGuardsSR);

  _alpinejs.default.data('BauerShinGuardsYT', _ShinGuards.BauerShinGuardsYT);

  _alpinejs.default.data('BauerShinGuardsINT', _ShinGuards.BauerShinGuardsINT);

  _alpinejs.default.data('CCMShinGuardsJR', _ShinGuards.CCMShinGuardsJR);

  _alpinejs.default.data('CCMShinGuardsSR', _ShinGuards.CCMShinGuardsSR);

  _alpinejs.default.data('CCMShinGuardsYT', _ShinGuards.CCMShinGuardsYT);

  _alpinejs.default.data('BauerPlayerPantsJR', _PlayerPants.BauerPlayerPantsJR);

  _alpinejs.default.data('BauerPlayerPantsSR', _PlayerPants.BauerPlayerPantsSR);

  _alpinejs.default.data('BauerPlayerPantsYT', _PlayerPants.BauerPlayerPantsYT);

  _alpinejs.default.data('BauerPlayerPantsINT', _PlayerPants.BauerPlayerPantsINT);

  _alpinejs.default.data('BauerPlayerPantsWOMEN', _PlayerPants.BauerPlayerPantsWOMEN);

  _alpinejs.default.data('CCMPlayerPantsJR', _PlayerPants.CCMPlayerPantsJR);

  _alpinejs.default.data('CCMPlayerPantsSR', _PlayerPants.CCMPlayerPantsSR);

  _alpinejs.default.data('CCMPlayerPantsWOMEN', _PlayerPants.CCMPlayerPantsWOMEN);

  _alpinejs.default.data('CCMPlayerPantsYT', _PlayerPants.CCMPlayerPantsYT);

  _alpinejs.default.start();
}
},{"alpinejs":"../../node_modules/alpinejs/dist/module.esm.js","./calculator/types/BauerIcehockeySkates":"calculator/types/BauerIcehockeySkates.js","./calculator/types/CCMSkates":"calculator/types/CCMSkates.js","./calculator/types/ElbowPads":"calculator/types/ElbowPads/index.js","./calculator/types/ElbowPads/BauerElbowPadsYT":"calculator/types/ElbowPads/BauerElbowPadsYT.js","./calculator/types/Gloves":"calculator/types/Gloves/index.js","./calculator/types/PlayerPants":"calculator/types/PlayerPants/index.js","./calculator/types/ShinGuards":"calculator/types/ShinGuards/index.js","./calculator/types/ShoulderPads":"calculator/types/ShoulderPads/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./calculator");
},{"./calculator":"calculator.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58383" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/bundle.js.map