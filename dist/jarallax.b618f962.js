// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"assets/jarallax/jarallax.js":[function(require,module,exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.6
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/
(function (g) {
  function d(f) {
    if (a[f]) return a[f].exports;var c = a[f] = { i: f, l: !1, exports: {} };g[f].call(c.exports, c, c.exports, d);c.l = !0;return c.exports;
  }var a = {};d.m = g;d.c = a;d.d = function (f, c, a) {
    d.o(f, c) || Object.defineProperty(f, c, { enumerable: !0, get: a });
  };d.r = function (f) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" });Object.defineProperty(f, "__esModule", { value: !0 });
  };d.t = function (f, c) {
    c & 1 && (f = d(f));if (c & 8 || c & 4 && "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && f && f.__esModule) return f;
    var a = Object.create(null);d.r(a);Object.defineProperty(a, "default", { enumerable: !0, value: f });if (c & 2 && "string" != typeof f) for (var g in f) {
      d.d(a, g, function (c) {
        return f[c];
      }.bind(null, g));
    }return a;
  };d.n = function (a) {
    var c = a && a.__esModule ? function () {
      return a["default"];
    } : function () {
      return a;
    };d.d(c, "a", c);return c;
  };d.o = function (a, c) {
    return Object.prototype.hasOwnProperty.call(a, c);
  };d.p = "";return d(d.s = 11);
})([,, function (g, d, a) {
  g.exports = function (a) {
    "complete" === document.readyState || "interactive" === document.readyState ? a.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
      "interactive" === document.readyState && a.call();
    }) : document.addEventListener && document.addEventListener("DOMContentLoaded", a);
  };
},, function (g, d, a) {
  d = a(5);g.exports = "undefined" !== typeof window ? window : "undefined" !== typeof d ? d : "undefined" !== typeof self ? self : {};
}, function (g, d, a) {
  d = "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (a) {
    return typeof a === "undefined" ? "undefined" : _typeof(a);
  } : function (a) {
    return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof(a);
  };a = function () {
    return this;
  }();try {
    a = a || Function("return this")() || (0, eval)("this");
  } catch (f) {
    "object" === ("undefined" === typeof window ? "undefined" : d(window)) && (a = window);
  }g.exports = a;
},,,,,, function (g, d, a) {
  g.exports = a(12);
}, function (g, d, a) {
  var f = "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (a) {
    return typeof a === "undefined" ? "undefined" : _typeof(a);
  } : function (a) {
    return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof(a);
  };g = (g = a(2)) && g.__esModule ? g : { default: g };var c = a(4),
      p = (a = a(13)) && a.__esModule ? a : { default: a },
      q = c.window.jarallax;c.window.jarallax = p.default;c.window.jarallax.noConflict = function () {
    c.window.jarallax = q;return this;
  };if ("undefined" !== typeof c.jQuery) {
    a = function a() {
      var a = arguments || [];Array.prototype.unshift.call(a, this);a = p.default.apply(c.window, a);return "object" !== ("undefined" === typeof a ? "undefined" : f(a)) ? a : this;
    };a.constructor = p.default.constructor;var z = c.jQuery.fn.jarallax;c.jQuery.fn.jarallax = a;c.jQuery.fn.jarallax.noConflict = function () {
      c.jQuery.fn.jarallax = z;return this;
    };
  }(0, g.default)(function () {
    (0, p.default)(document.querySelectorAll("[data-jarallax]"));
  });
}, function (g, d, a) {
  (function (f) {
    function c(a) {
      v = n.window.innerWidth || document.documentElement.clientWidth;k = n.window.innerHeight || document.documentElement.clientHeight;"object" !== ("undefined" === typeof a ? "undefined" : m(a)) || "load" !== a.type && "dom-loaded" !== a.type || (w = !0);
    }function g() {
      if (r.length) {
        x = void 0 !== n.window.pageYOffset ? n.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;var a = w || !t || t.width !== v || t.height !== k,
            l = A || a || !t || t.y !== x;A = w = !1;if (a || l) r.forEach(function (e) {
          if (a) e.onResize();if (l) e.onScroll();
        }), t = { width: v, height: k, y: x };(0, D.default)(g);
      }
    }Object.defineProperty(d, "__esModule", { value: !0 });var q = function () {
      return function (a, l) {
        if (Array.isArray(a)) return a;if (Symbol.iterator in Object(a)) {
          var e = [],
              b = !0,
              h = !1,
              c = void 0;try {
            for (var d = a[Symbol.iterator](), f; !(b = (f = d.next()).done) && (e.push(f.value), !l || e.length !== l); b = !0) {}
          } catch (g) {
            h = !0, c = g;
          } finally {
            try {
              if (!b && d["return"]) d["return"]();
            } finally {
              if (h) throw c;
            }
          }return e;
        }throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        z = function () {
      function a(l, e) {
        for (var b = 0; b < e.length; b++) {
          var h = e[b];h.enumerable = h.enumerable || !1;h.configurable = !0;"value" in h && (h.writable = !0);Object.defineProperty(l, h.key, h);
        }
      }return function (l, e, b) {
        e && a(l.prototype, e);b && a(l, b);return l;
      };
    }(),
        m = "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (a) {
      return typeof a === "undefined" ? "undefined" : _typeof(a);
    } : function (a) {
      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof(a);
    },
        u = a(2),
        u = u && u.__esModule ? u : { default: u },
        y = a(14),
        D = y && y.__esModule ? y : { default: y },
        n = a(4),
        G = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
        B = function () {
      for (var a = ["transform", "WebkitTransform", "MozTransform"], l = document.createElement("div"), e = 0; e < a.length; e++) {
        if (l && void 0 !== l.style[a[e]]) return a[e];
      }return !1;
    }(),
        v = void 0,
        k = void 0,
        x = void 0,
        w = !1,
        A = !1;c();n.window.addEventListener("resize", c);n.window.addEventListener("orientationchange", c);n.window.addEventListener("load", c);(0, u.default)(function () {
      c({ type: "dom-loaded" });
    });var r = [],
        t = !1,
        E = f.ResizeObserver ? new f.ResizeObserver(function (a) {
      a && a.length && (0, D.default)(function () {
        a.forEach(function (a) {
          if (a.target && a.target.jarallax) {
            if (!w) a.target.jarallax.onResize();A = !0;
          }
        });
      });
    }) : !1,
        H = 0,
        F = function () {
      function a(l, e) {
        if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
        var b = this;b.instanceID = H++;b.$item = l;b.defaults = { type: "scroll", speed: .5, imgSrc: null, imgElement: ".jarallax-img", imgSize: "cover", imgPosition: "50% 50%", imgRepeat: "no-repeat", keepImg: !1, elementInViewport: null, zIndex: -100, disableParallax: !1, disableVideo: !1, automaticResize: !0, videoSrc: null, videoStartTime: 0, videoEndTime: 0, videoVolume: 0, videoPlayOnlyVisible: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null };var h = b.$item.getAttribute("data-jarallax"),
            d = JSON.parse(h || "{}");h && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
        var c = b.$item.dataset || {},
            f = {};Object.keys(c).forEach(function (a) {
          var l = a.substr(0, 1).toLowerCase() + a.substr(1);l && "undefined" !== typeof b.defaults[l] && (f[l] = c[a]);
        });b.options = b.extend({}, b.defaults, d, f, e);b.pureOptions = b.extend({}, b.options);Object.keys(b.options).forEach(function (a) {
          "true" === b.options[a] ? b.options[a] = !0 : "false" === b.options[a] && (b.options[a] = !1);
        });b.options.speed = Math.min(2, Math.max(-1, parseFloat(b.options.speed)));if (b.options.noAndroid || b.options.noIos) console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), b.options.disableParallax || (b.options.noIos && b.options.noAndroid ? b.options.disableParallax = /iPad|iPhone|iPod|Android/ : b.options.noIos ? b.options.disableParallax = /iPad|iPhone|iPod/ : b.options.noAndroid && (b.options.disableParallax = /Android/));"string" === typeof b.options.disableParallax && (b.options.disableParallax = new RegExp(b.options.disableParallax));if (b.options.disableParallax instanceof RegExp) {
          var g = b.options.disableParallax;b.options.disableParallax = function () {
            return g.test(navigator.userAgent);
          };
        }"function" !== typeof b.options.disableParallax && (b.options.disableParallax = function () {
          return !1;
        });"string" === typeof b.options.disableVideo && (b.options.disableVideo = new RegExp(b.options.disableVideo));if (b.options.disableVideo instanceof RegExp) {
          var k = b.options.disableVideo;b.options.disableVideo = function () {
            return k.test(navigator.userAgent);
          };
        }"function" !== typeof b.options.disableVideo && (b.options.disableVideo = function () {
          return !1;
        });(h = b.options.elementInViewport) && "object" === ("undefined" === typeof h ? "undefined" : m(h)) && "undefined" !== typeof h.length && (h = q(h, 1)[0]);h instanceof Element || (h = null);b.options.elementInViewport = h;b.image = { src: b.options.imgSrc || null, $container: null, useImgTag: !1, position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed" };b.initImg() && b.canInitParallax() && b.init();
      }z(a, [{ key: "css", value: function value(a, e) {
          if ("string" === typeof e) return n.window.getComputedStyle(a).getPropertyValue(e);e.transform && B && (e[B] = e.transform);Object.keys(e).forEach(function (b) {
            a.style[b] = e[b];
          });return a;
        } }, { key: "extend", value: function value(a) {
          var e = arguments;a = a || {};Object.keys(arguments).forEach(function (b) {
            e[b] && Object.keys(e[b]).forEach(function (h) {
              a[h] = e[b][h];
            });
          });return a;
        } }, { key: "getWindowData", value: function value() {
          return { width: v, height: k, y: x };
        } }, { key: "initImg", value: function value() {
          var a = this.options.imgElement;a && "string" === typeof a && (a = this.$item.querySelector(a));a instanceof Element || (a = null);a && (this.options.keepImg ? this.image.$item = a.cloneNode(!0) : (this.image.$item = a, this.image.$itemParent = a.parentNode), this.image.useImgTag = !0);if (this.image.$item) return !0;null === this.image.src && (this.image.src = this.css(this.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, ""));return !(!this.image.src || "none" === this.image.src);
        } }, { key: "canInitParallax", value: function value() {
          return B && !this.options.disableParallax();
        } }, { key: "init", value: function value() {
          var a = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" },
              e = {};if (!this.options.keepImg) {
            var b = this.$item.getAttribute("style");
            b && this.$item.setAttribute("data-jarallax-original-styles", b);this.image.useImgTag && (b = this.image.$item.getAttribute("style")) && this.image.$item.setAttribute("data-jarallax-original-styles", b);
          }"static" === this.css(this.$item, "position") && this.css(this.$item, { position: "relative" });"auto" === this.css(this.$item, "z-index") && this.css(this.$item, { zIndex: 0 });this.image.$container = document.createElement("div");this.css(this.image.$container, a);this.css(this.image.$container, { "z-index": this.options.zIndex });
          G && this.css(this.image.$container, { opacity: .9999 });this.image.$container.setAttribute("id", "jarallax-container-" + this.instanceID);this.$item.appendChild(this.image.$container);this.image.useImgTag ? e = this.extend({ "object-fit": this.options.imgSize, "object-position": this.options.imgPosition, "font-family": "object-fit: " + this.options.imgSize + "; object-position: " + this.options.imgPosition + ";", "max-width": "none" }, a, e) : (this.image.$item = document.createElement("div"), this.image.src && (e = this.extend({ "background-position": this.options.imgPosition,
            "background-size": this.options.imgSize, "background-repeat": this.options.imgRepeat, "background-image": 'url("' + this.image.src + '")' }, a, e)));if ("opacity" === this.options.type || "scale" === this.options.type || "scale-opacity" === this.options.type || 1 === this.options.speed) this.image.position = "absolute";if ("fixed" === this.image.position) for (a = 0, b = this.$item; null !== b && b !== document && 0 === a;) {
            var h = this.css(b, "-webkit-transform") || this.css(b, "-moz-transform") || this.css(b, "transform");h && "none" !== h && (a = 1, this.image.position = "absolute");b = b.parentNode;
          }e.position = this.image.position;this.css(this.image.$item, e);this.image.$container.appendChild(this.image.$item);this.onResize();this.onScroll(!0);this.options.automaticResize && E && E.observe(this.$item);this.options.onInit && this.options.onInit.call(this);"none" !== this.css(this.$item, "background-image") && this.css(this.$item, { "background-image": "none" });this.addToParallaxList();
        } }, { key: "addToParallaxList", value: function value() {
          r.push(this);1 === r.length && g();
        } }, { key: "removeFromParallaxList",
        value: function value() {
          var a = this;r.forEach(function (e, b) {
            e.instanceID === a.instanceID && r.splice(b, 1);
          });
        } }, { key: "destroy", value: function value() {
          this.removeFromParallaxList();var a = this.$item.getAttribute("data-jarallax-original-styles");this.$item.removeAttribute("data-jarallax-original-styles");a ? this.$item.setAttribute("style", a) : this.$item.removeAttribute("style");if (this.image.useImgTag) {
            var e = this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles");
            e ? this.image.$item.setAttribute("style", a) : this.image.$item.removeAttribute("style");this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item);
          }this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles);this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container);this.options.onDestroy && this.options.onDestroy.call(this);delete this.$item.jarallax;
        } }, { key: "clipContainer", value: function value() {
          if ("fixed" === this.image.position) {
            var a = this.image.$container.getBoundingClientRect(),
                e = a.width,
                a = a.height;this.$clipStyles || (this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles));e = "#jarallax-container-" + this.instanceID + " {\n           clip: rect(0 " + e + "px " + a + "px 0);\n           clip: rect(0, " + e + "px, " + a + "px, 0);\n        }";this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = e : this.$clipStyles.innerHTML = e;
          }
        } }, { key: "coverImage", value: function value() {
          var a = this.image.$container.getBoundingClientRect(),
              e = a.height,
              b = this.options.speed,
              h = "scroll" === this.options.type || "scroll-opacity" === this.options.type,
              c = 0,
              d = e,
              f = 0;h && (0 > b ? (c = b * Math.max(e, k), k < e && (c -= b * (e - k))) : c = b * (e + k), d = 1 < b ? Math.abs(c - k) : 0 > b ? c / b + Math.abs(c) : d + (k - e) * (1 - b), c /= 2);this.parallaxScrollDistance = c;f = h ? (k - d) / 2 : (e - d) / 2;this.css(this.image.$item, { height: d + "px", marginTop: f + "px", left: "fixed" === this.image.position ? a.left + "px" : "0", width: a.width + "px" });this.options.onCoverImage && this.options.onCoverImage.call(this);return { image: { height: d, marginTop: f }, container: a };
        } }, { key: "isVisible", value: function value() {
          return this.isElementInViewport || !1;
        } }, { key: "onScroll", value: function value(a) {
          var e = this.$item.getBoundingClientRect(),
              b = e.top,
              c = e.height,
              d = {},
              f = e;this.options.elementInViewport && (f = this.options.elementInViewport.getBoundingClientRect());this.isElementInViewport = 0 <= f.bottom && 0 <= f.right && f.top <= k && f.left <= v;if (a || this.isElementInViewport) {
            a = Math.max(0, b);var f = Math.max(0, c + b),
                g = Math.max(0, -b),
                C = Math.max(0, b + c - k),
                n = Math.max(0, c - (b + c - k)),
                p = Math.max(0, -b + k - c),
                q = 1 - 2 * (k - b) / (k + c),
                m = 1;c < k ? m = 1 - (g || C) / c : f <= k ? m = f / k : n <= k && (m = n / k);if ("opacity" === this.options.type || "scale-opacity" === this.options.type || "scroll-opacity" === this.options.type) d.transform = "translate3d(0,0,0)", d.opacity = m;if ("scale" === this.options.type || "scale-opacity" === this.options.type) c = 1, c = 0 > this.options.speed ? c - this.options.speed * m : c + this.options.speed * (1 - m), d.transform = "scale(" + c + ") translate3d(0,0,0)";if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) c = this.parallaxScrollDistance * q, "absolute" === this.image.position && (c -= b), d.transform = "translate3d(0," + c + "px,0)";this.css(this.image.$item, d);this.options.onScroll && this.options.onScroll.call(this, { section: e, beforeTop: a, beforeTopEnd: f, afterTop: g, beforeBottom: C, beforeBottomEnd: n, afterBottom: p, visiblePercent: m, fromViewportCenter: q });
          }
        } }, { key: "onResize", value: function value() {
          this.coverImage();this.clipContainer();
        } }]);
      return a;
    }();f = function f(a) {
      if ("object" === ("undefined" === typeof HTMLElement ? "undefined" : m(HTMLElement)) ? a instanceof HTMLElement : a && "object" === ("undefined" === typeof a ? "undefined" : m(a)) && null !== a && 1 === a.nodeType && "string" === typeof a.nodeName) a = [a];var c = arguments[1],
          e = Array.prototype.slice.call(arguments, 2),
          b = a.length,
          d = 0,
          f = void 0;for (d; d < b; d++) {
        if ("object" === ("undefined" === typeof c ? "undefined" : m(c)) || "undefined" === typeof c ? a[d].jarallax || (a[d].jarallax = new F(a[d], c)) : a[d].jarallax && (f = a[d].jarallax[c].apply(a[d].jarallax, e)), "undefined" !== typeof f) return f;
      }return a;
    };f.constructor = F;d.default = f;
  }).call(this, a(5));
}, function (g, d, a) {
  function f(a) {
    var c = +new Date(),
        d = Math.max(0, 16 - (c - p));a = setTimeout(a, d);return p = c, a;
  }d = a(4);var c = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || f,
      p = +new Date();a = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.mozCancelAnimationFrame || clearTimeout;Function.prototype.bind && (c = c.bind(d), a = a.bind(d));d = g.exports = c;d.cancel = a;
}]);
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49860' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/jarallax/jarallax.js"], null)
//# sourceMappingURL=/jarallax.b618f962.map