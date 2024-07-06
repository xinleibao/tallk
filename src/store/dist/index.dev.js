"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _vue = _interopRequireDefault(require("vue"));

var _banner = _interopRequireDefault(require("./banner"));

var _setting = _interopRequireDefault(require("./setting"));

var _about = _interopRequireDefault(require("./about"));

var _project = _interopRequireDefault(require("./project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (!window.Vuex) {
  // 不影响开发坏境
  (0, _vuex.install)(_vue["default"]);
} // Vue.use(Vuex)


var _default = new _vuex.Store({
  modules: {
    banner: _banner["default"],
    setting: _setting["default"],
    about: _about["default"],
    project: _project["default"]
  },
  strict: true
});

exports["default"] = _default;