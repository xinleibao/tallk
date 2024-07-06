"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (!window.VueRouter) {
  // 如果没有全局变量没有vue-router 代表是开发坏境
  _vue["default"].use(_vueRouter["default"]);
}

var router = new _vueRouter["default"]({
  routes: _routes["default"],
  mode: 'history'
});
router.afterEach(function (to, from) {
  // to.meta.title && (document.title = to.meta.title)
  if (to.meta.title) {
    _utils.titleController.setRouteTitle(to.meta.title);
  }
});
var _default = router;
exports["default"] = _default;