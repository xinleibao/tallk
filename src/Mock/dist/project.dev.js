"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 'data|10-20': [{
//     id: '@uuid',
//     name: '@ctitle(1,10)',
//     'url|1': ['@url', null],
//     'github|1': ['@url', null],
//     'description|1-3': ['@cparagraph(1,5)'],
//     thumb: '@image(300x250,@color,#fff,@natural)'
// }]
_mockjs["default"].mock('/api/project', 'get', {
  code: 0,
  msg: '',
  'data|10-20': [{
    id: '@uuid',
    name: '@ctitle(1,10)',
    'url|1': ['@url', null],
    'github|1': ['@url', null],
    'description|1-3': ['@cparagraph(1,5)'],
    thumb: '@image(300x250,@color,#fff,@natural)'
  }]
});