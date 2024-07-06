"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("nprogress/nprogress.css");

var _nprogress2 = require("nprogress");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _nprogress2.configure)({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 50,
  //跳转进度条速度
  showSpinner: false // 是否显示右侧加载动画

});

function delay(duration) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
}

var _default = [{
  name: "About",
  path: "/about",
  component: function component() {
    var AboutComp;
    return regeneratorRuntime.async(function component$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log('组件加载...')
            (0, _nprogress2.start)(); // await delay(5000)

            _context.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/About'));
            }));

          case 3:
            AboutComp = _context.sent;
            (0, _nprogress2.done)(); // console.log('组件加载成功')

            return _context.abrupt("return", AboutComp);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  meta: {
    title: '关于'
  }
}, {
  name: "Blog",
  path: "/article",
  component: function component() {
    var BlogComp;
    return regeneratorRuntime.async(function component$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _nprogress2.start)();
            _context2.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/Blog'));
            }));

          case 3:
            BlogComp = _context2.sent;
            (0, _nprogress2.done)();
            return _context2.abrupt("return", BlogComp);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  meta: {
    title: '博客'
  }
}, {
  name: "CategoryBlog",
  path: "/article/cate/:categoryId",
  component: function component() {
    var BlogComp;
    return regeneratorRuntime.async(function component$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _nprogress2.start)();
            _context3.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/Blog'));
            }));

          case 3:
            BlogComp = _context3.sent;
            (0, _nprogress2.done)();
            return _context3.abrupt("return", BlogComp);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  meta: {
    title: '博客'
  }
}, {
  name: "Details",
  path: "/article/:id",
  component: function component() {
    var detailsComp;
    return regeneratorRuntime.async(function component$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _nprogress2.start)();
            _context4.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/Blog/Detail'));
            }));

          case 3:
            detailsComp = _context4.sent;
            (0, _nprogress2.done)();
            return _context4.abrupt("return", detailsComp);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  meta: {
    title: '博客详情'
  }
}, {
  name: "Home",
  path: "/",
  component: function component() {
    var homeComp;
    return regeneratorRuntime.async(function component$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            (0, _nprogress2.start)();
            _context5.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/Home'));
            }));

          case 3:
            homeComp = _context5.sent;
            (0, _nprogress2.done)();
            return _context5.abrupt("return", homeComp);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  meta: {
    title: '主页'
  }
}, {
  name: "Message",
  path: "/message",
  component: function component() {
    var messageComp;
    return regeneratorRuntime.async(function component$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            (0, _nprogress2.start)();
            _context6.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/Message'));
            }));

          case 3:
            messageComp = _context6.sent;
            (0, _nprogress2.done)();
            return _context6.abrupt("return", messageComp);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  meta: {
    title: '留言板'
  }
}, {
  name: "Project",
  path: "/project",
  component: function component() {
    var projectComp;
    return regeneratorRuntime.async(function component$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            (0, _nprogress2.start)();
            _context7.next = 3;
            return regeneratorRuntime.awrap(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('@/views/Project'));
            }));

          case 3:
            projectComp = _context7.sent;
            (0, _nprogress2.done)();
            return _context7.abrupt("return", projectComp);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  meta: {
    title: '项目&效果'
  }
}];
exports["default"] = _default;