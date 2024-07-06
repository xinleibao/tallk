"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// console.log(Mock)
_mockjs["default"].mock('/api/blogtype', 'get', {
  code: 0,
  msg: "",
  'data|10-20': [{
    'id|+1': 1,
    'name': '分类@id',
    'articleCount|0-300': 0,
    'order|+1': 1
  }]
});

_mockjs["default"].mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
  var query = _querystring["default"].parse(options.url); // console.log(query)


  var data = _defineProperty({
    'total|2000-3000': 0
  }, "rows|".concat(query.limit || 10), [{
    'id': '@guid',
    'title': '@ctitle(1,50)',
    'description': '@cparagraph(1,10)',
    'category': {
      'id|1-10': 1,
      'name': '分类@id'
    },
    'scanNumber|0-3000': 0,
    //浏览量
    'commentNumber|0-300': 0,
    //评论数量
    'thumb|1': ["@image(300x250, @color, @color, @natural)", null],
    'createDate': '@date("T")'
  }]);

  return _mockjs["default"].mock({
    code: 0,
    msg: "",
    data: data
  });
});

_mockjs["default"].mock(/^\/api\/blog\/[^/]+$/, 'get', {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    title: "CORS跨域方案详解",
    category: {
      "id|1-10": 1,
      name: "分类@id"
    },
    description: "@cparagraph(1, 10)",
    "scanNumber|0-10000": 0,
    "commentNumber|0-100": 0,
    createDate: "@date('T')",
    toc: [{
      name: "概述",
      anchor: "article-md-title-1"
    }, {
      name: "简单请求",
      anchor: "article-md-title-2",
      children: [{
        name: "简单请求的判定",
        anchor: "article-md-title-3"
      }, {
        name: "简单请求的交互规范",
        anchor: "article-md-title-4"
      }]
    }, {
      name: "需要预检的请求",
      anchor: "article-md-title-5"
    }, {
      name: "附带身份凭证的请求",
      anchor: "article-md-title-6"
    }, {
      name: "一个额外的补充",
      anchor: "article-md-title-7"
    }],
    "thumb|1": [_mockjs["default"].Random.image("300x250", "#000", "#fff", "Random Image"), null],
    htmlContent: "<blockquote>\n    <p>\u9605\u8BFB\u672C\u6587\uFF0C\u4F60\u9700\u8981\u9996\u5148\u77E5\u9053\uFF1A</p><ol>\n    <li>\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565</li>\n    <li>\u8DE8\u57DF\u95EE\u9898</li>\n    <li>JSONP\u539F\u7406</li>\n    <li>cookie\u539F\u7406</li>\n    </ol>\n    </blockquote>\n    <p>JSONP\u5E76\u4E0D\u662F\u4E00\u4E2A\u597D\u7684\u8DE8\u57DF\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u81F3\u5C11\u6709\u7740\u4E0B\u9762\u4E24\u4E2A\u4E25\u91CD\u95EE\u9898\uFF1A</p><ol>\n    <li><strong>\u4F1A\u6253\u4E71\u670D\u52A1\u5668\u7684\u6D88\u606F\u683C\u5F0F</strong>\uFF1AJSONP\u8981\u6C42\u670D\u52A1\u5668\u54CD\u5E94\u4E00\u6BB5JS\u4EE3\u7801\uFF0C\u4F46\u5728\u975E\u8DE8\u57DF\u7684\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u5668\u53C8\u9700\u8981\u54CD\u5E94\u4E00\u4E2A\u6B63\u5E38\u7684JSON\u683C\u5F0F</li>\n    <li><strong>\u53EA\u80FD\u5B8C\u6210GET\u8BF7\u6C42</strong>\uFF1AJSONP\u7684\u539F\u7406\u4F1A\u8981\u6C42\u6D4F\u89C8\u5668\u7AEF\u751F\u6210\u4E00\u4E2A<code>script</code>\u5143\u7D20\uFF0C\u800C<code>script</code>\u5143\u7D20\u53D1\u51FA\u7684\u8BF7\u6C42\u53EA\u80FD\u662F<code>get</code>\u8BF7\u6C42</li>\n    </ol>\n    <p>\u6240\u4EE5\uFF0CCORS\u662F\u4E00\u79CD\u66F4\u597D\u7684\u8DE8\u57DF\u89E3\u51B3\u65B9\u6848\u3002</p><h1 id=\"article-md-title-1\">\u6982\u8FF0</h1><p><code>CORS</code>\u662F\u57FA\u4E8E<code>http1.1</code>\u7684\u4E00\u79CD\u8DE8\u57DF\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u7684\u5168\u79F0\u662F<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring\uFF0C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u3002</p><p>\u5B83\u7684\u603B\u4F53\u601D\u8DEF\u662F\uFF1A<strong>\u5982\u679C\u6D4F\u89C8\u5668\u8981\u8DE8\u57DF\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u8D44\u6E90\uFF0C\u9700\u8981\u83B7\u5F97\u670D\u52A1\u5668\u7684\u5141\u8BB8</strong></p><figure class=\"markdown-image\">\n          \n          <img style=\"width:auto\" src=\"http://mdrs.yuanjin.tech/img/image-20200421152122793.png\" title=\"image-20200421152122793\" alt=\"image-20200421152122793\">\n          <figcaption>image-20200421152122793</figcaption>\n      \n        </figure><p>\u800C\u8981\u77E5\u9053\uFF0C\u4E00\u4E2A\u8BF7\u6C42\u53EF\u4EE5\u9644\u5E26\u5F88\u591A\u4FE1\u606F\uFF0C\u4ECE\u800C\u4F1A\u5BF9\u670D\u52A1\u5668\u9020\u6210\u4E0D\u540C\u7A0B\u5EA6\u7684\u5F71\u54CD</p><p>\u6BD4\u5982\u6709\u7684\u8BF7\u6C42\u53EA\u662F\u83B7\u53D6\u4E00\u4E9B\u65B0\u95FB\uFF0C\u6709\u7684\u8BF7\u6C42\u4F1A\u6539\u52A8\u670D\u52A1\u5668\u7684\u6570\u636E</p><p>\u9488\u5BF9\u4E0D\u540C\u7684\u8BF7\u6C42\uFF0CCORS\u89C4\u5B9A\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u4EA4\u4E92\u6A21\u5F0F\uFF0C\u5206\u522B\u662F\uFF1A</p><ul>\n    <li><strong>\u7B80\u5355\u8BF7\u6C42</strong></li>\n    <li><strong>\u9700\u8981\u9884\u68C0\u7684\u8BF7\u6C42</strong></li>\n    <li><strong>\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42</strong></li>\n    </ul>\n    <p>\u8FD9\u4E09\u79CD\u6A21\u5F0F\u4ECE\u4E0A\u5230\u4E0B\u5C42\u5C42\u9012\u8FDB\uFF0C\u8BF7\u6C42\u53EF\u4EE5\u505A\u7684\u4E8B\u8D8A\u6765\u8D8A\u591A\uFF0C\u8981\u6C42\u4E5F\u8D8A\u6765\u8D8A\u4E25\u683C\u3002</p><p>\u4E0B\u9762\u5206\u522B\u8BF4\u660E\u4E09\u79CD\u8BF7\u6C42\u6A21\u5F0F\u7684\u5177\u4F53\u89C4\u8303\u3002</p><h1 id=\"article-md-title-2\">\u7B80\u5355\u8BF7\u6C42</h1><p>\u5F53\u6D4F\u89C8\u5668\u7AEF\u8FD0\u884C\u4E86\u4E00\u6BB5ajax\u4EE3\u7801\uFF08\u65E0\u8BBA\u662F\u4F7F\u7528XMLHttpRequest\u8FD8\u662Ffetch api\uFF09\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9996\u5148\u5224\u65AD\u5B83\u5C5E\u4E8E\u54EA\u4E00\u79CD\u8BF7\u6C42\u6A21\u5F0F</p><h2 id=\"article-md-title-3\">\u7B80\u5355\u8BF7\u6C42\u7684\u5224\u5B9A</h2><p>\u5F53\u8BF7\u6C42<strong>\u540C\u65F6\u6EE1\u8DB3</strong>\u4EE5\u4E0B\u6761\u4EF6\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BA4\u4E3A\u5B83\u662F\u4E00\u4E2A\u7B80\u5355\u8BF7\u6C42\uFF1A</p><ol>\n    <li><p><strong>\u8BF7\u6C42\u65B9\u6CD5\u5C5E\u4E8E\u4E0B\u9762\u7684\u4E00\u79CD\uFF1A</strong></p><ul>\n    <li>get</li>\n    <li>post</li>\n    <li>head</li>\n    </ul>\n    </li>\n    <li><p><strong>\u8BF7\u6C42\u5934\u4EC5\u5305\u542B\u5B89\u5168\u7684\u5B57\u6BB5\uFF0C\u5E38\u89C1\u7684\u5B89\u5168\u5B57\u6BB5\u5982\u4E0B\uFF1A</strong></p><ul>\n    <li><code>Accept</code></li>\n    <li><code>Accept-Language</code></li>\n    <li><code>Content-Language</code></li>\n    <li><code>Content-Type</code></li>\n    <li><code>DPR</code></li>\n    <li><code>Downlink</code></li>\n    <li><code>Save-Data</code></li>\n    <li><code>Viewport-Width</code></li>\n    <li><code>Width</code></li>\n    </ul>\n    </li>\n    <li><p><strong>\u8BF7\u6C42\u5934\u5982\u679C\u5305\u542B<code>Content-Type</code>\uFF0C\u4EC5\u9650\u4E0B\u9762\u7684\u503C\u4E4B\u4E00\uFF1A</strong></p><ul>\n    <li><code>text/plain</code></li>\n    <li><code>multipart/form-data</code></li>\n    <li><code>application/x-www-form-urlencoded</code></li>\n    </ul>\n    </li>\n    </ol>\n    <p>\u5982\u679C\u4EE5\u4E0A\u4E09\u4E2A\u6761\u4EF6\u540C\u65F6\u6EE1\u8DB3\uFF0C\u6D4F\u89C8\u5668\u5224\u5B9A\u4E3A\u7B80\u5355\u8BF7\u6C42\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u4F8B\u5B50\uFF1A</p><pre><code class=\"language-js\"><span class=\"hljs-comment\">// \u7B80\u5355\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/news\"</span>);\n    \n    <span class=\"hljs-comment\">// \u8BF7\u6C42\u65B9\u6CD5\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u4E0D\u662F\u7B80\u5355\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/news\"</span>, {\n      <span class=\"hljs-attr\">method</span>:<span class=\"hljs-string\">\"PUT\"</span>\n    })\n    \n    <span class=\"hljs-comment\">// \u52A0\u5165\u4E86\u989D\u5916\u7684\u8BF7\u6C42\u5934\uFF0C\u4E0D\u662F\u7B80\u5355\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/news\"</span>, {\n      <span class=\"hljs-attr\">headers</span>:{\n        <span class=\"hljs-attr\">a</span>: <span class=\"hljs-number\">1</span>\n      }\n    })\n    \n    <span class=\"hljs-comment\">// \u7B80\u5355\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/news\"</span>, {\n      <span class=\"hljs-attr\">method</span>: <span class=\"hljs-string\">\"post\"</span>\n    })\n    \n    <span class=\"hljs-comment\">// content-type\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u4E0D\u662F\u7B80\u5355\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/news\"</span>, {\n      <span class=\"hljs-attr\">method</span>: <span class=\"hljs-string\">\"post\"</span>,\n      <span class=\"hljs-attr\">headers</span>: {\n        <span class=\"hljs-string\">\"content-type\"</span>: <span class=\"hljs-string\">\"application/json\"</span>\n      }\n    })</code></pre>\n    <h2 id=\"article-md-title-4\">\u7B80\u5355\u8BF7\u6C42\u7684\u4EA4\u4E92\u89C4\u8303</h2><p>\u5F53\u6D4F\u89C8\u5668\u5224\u5B9A\u67D0\u4E2A<strong>ajax\u8DE8\u57DF\u8BF7\u6C42</strong>\u662F<strong>\u7B80\u5355\u8BF7\u6C42</strong>\u65F6\uFF0C\u4F1A\u53D1\u751F\u4EE5\u4E0B\u7684\u4E8B\u60C5</p><ol>\n    <li><strong>\u8BF7\u6C42\u5934\u4E2D\u4F1A\u81EA\u52A8\u6DFB\u52A0<code>Origin</code>\u5B57\u6BB5</strong></li>\n    </ol>\n    <p>\u6BD4\u5982\uFF0C\u5728\u9875\u9762<code>http://my.com/index.html</code>\u4E2D\u6709\u4EE5\u4E0B\u4EE3\u7801\u9020\u6210\u4E86\u8DE8\u57DF</p><pre><code class=\"language-js\"><span class=\"hljs-comment\">// \u7B80\u5355\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/news\"</span>);</code></pre>\n    <p>\u8BF7\u6C42\u53D1\u51FA\u540E\uFF0C\u8BF7\u6C42\u5934\u4F1A\u662F\u4E0B\u9762\u7684\u683C\u5F0F\uFF1A</p><pre><code>GET /api/news/ HTTP/1.1\n    Host: crossdomain.com\n    Connection: keep-alive\n    ...\n    Referer: http://my.com/index.html\n    Origin: http://my.com</code></pre><p>\u770B\u5230\u6700\u540E\u4E00\u884C\u6CA1\uFF0C<code>Origin</code>\u5B57\u6BB5\u4F1A\u544A\u8BC9\u670D\u52A1\u5668\uFF0C\u662F\u54EA\u4E2A\u6E90\u5730\u5740\u5728\u8DE8\u57DF\u8BF7\u6C42</p><ol start=\"2\">\n    <li><strong>\u670D\u52A1\u5668\u54CD\u5E94\u5934\u4E2D\u5E94\u5305\u542B<code>Access-Control-Allow-Origin</code></strong></li>\n    </ol>\n    <p>\u5F53\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u5982\u679C\u5141\u8BB8\u8BE5\u8BF7\u6C42\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u9700\u8981\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5</p><p>\u8BE5\u5B57\u6BB5\u7684\u503C\u53EF\u4EE5\u662F\uFF1A</p><ul>\n    <li>*\uFF1A\u8868\u793A\u6211\u5F88\u5F00\u653E\uFF0C\u4EC0\u4E48\u4EBA\u6211\u90FD\u5141\u8BB8\u8BBF\u95EE</li>\n    <li>\u5177\u4F53\u7684\u6E90\uFF1A\u6BD4\u5982<code>http://my.com</code>\uFF0C\u8868\u793A\u6211\u5C31\u5141\u8BB8\u4F60\u8BBF\u95EE</li>\n    </ul>\n    <blockquote>\n    <p>\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E24\u4E2A\u503C\u5BF9\u4E8E\u5BA2\u6237\u7AEF<code>http://my.com</code>\u800C\u8A00\uFF0C\u90FD\u4E00\u6837\uFF0C\u56E0\u4E3A\u5BA2\u6237\u7AEF\u624D\u4E0D\u4F1A\u7BA1\u5176\u4ED6\u6E90\u670D\u52A1\u5668\u5141\u4E0D\u5141\u8BB8\uFF0C\u5C31\u5173\u5FC3\u81EA\u5DF1\u662F\u5426\u88AB\u5141\u8BB8</p><p>\u5F53\u7136\uFF0C\u670D\u52A1\u5668\u4E5F\u53EF\u4EE5\u7EF4\u62A4\u4E00\u4E2A\u53EF\u88AB\u5141\u8BB8\u7684\u6E90\u5217\u8868\uFF0C\u5982\u679C\u8BF7\u6C42\u7684<code>Origin</code>\u547D\u4E2D\u8BE5\u5217\u8868\uFF0C\u624D\u54CD\u5E94<code>*</code>\u6216\u5177\u4F53\u7684\u6E90</p><p><strong>\u4E3A\u4E86\u907F\u514D\u540E\u7EED\u7684\u9EBB\u70E6\uFF0C\u5F3A\u70C8\u63A8\u8350\u54CD\u5E94\u5177\u4F53\u7684\u6E90</strong></p></blockquote>\n    <p>\u5047\u8BBE\u670D\u52A1\u5668\u505A\u51FA\u4E86\u4EE5\u4E0B\u7684\u54CD\u5E94\uFF1A</p><pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    ...\n    \n    \u6D88\u606F\u4F53\u4E2D\u7684\u6570\u636E</code></pre><p>\u5F53\u6D4F\u89C8\u5668\u770B\u5230\u670D\u52A1\u5668\u5141\u8BB8\u81EA\u5DF1\u8BBF\u95EE\u540E\uFF0C\u9AD8\u5174\u7684\u50CF\u4E00\u4E2A\u4E24\u767E\u65A4\u7684\u5B69\u5B50\uFF0C\u4E8E\u662F\uFF0C\u5B83\u5C31\u628A\u54CD\u5E94\u987A\u5229\u7684\u4EA4\u7ED9js\uFF0C\u4EE5\u5B8C\u6210\u540E\u7EED\u7684\u64CD\u4F5C</p><p>\u4E0B\u56FE\u7B80\u8FF0\u4E86\u6574\u4E2A\u4EA4\u4E92\u8FC7\u7A0B</p><figure class=\"markdown-image\">\n          \n          <img style=\"width:auto\" src=\"http://mdrs.yuanjin.tech/img/image-20200421162846480.png\" title=\"image-20200421162846480\" alt=\"image-20200421162846480\">\n          <figcaption>image-20200421162846480</figcaption>\n      \n        </figure><h1 id=\"article-md-title-5\">\u9700\u8981\u9884\u68C0\u7684\u8BF7\u6C42</h1><p>\u7B80\u5355\u7684\u8BF7\u6C42\u5BF9\u670D\u52A1\u5668\u7684\u5A01\u80C1\u4E0D\u5927\uFF0C\u6240\u4EE5\u5141\u8BB8\u4F7F\u7528\u4E0A\u8FF0\u7684\u7B80\u5355\u4EA4\u4E92\u5373\u53EF\u5B8C\u6210\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u8BA4\u4E3A\u8FD9\u662F\u4E00\u79CD\u7B80\u5355\u8BF7\u6C42\uFF0C\u5C31\u4F1A\u6309\u7167\u4E0B\u9762\u7684\u6D41\u7A0B\u8FDB\u884C\uFF1A</p><ol>\n    <li><strong>\u6D4F\u89C8\u5668\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\uFF0C\u8BE2\u95EE\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8</strong></li>\n    <li><strong>\u670D\u52A1\u5668\u5141\u8BB8</strong></li>\n    <li><strong>\u6D4F\u89C8\u5668\u53D1\u9001\u771F\u5B9E\u8BF7\u6C42</strong></li>\n    <li><strong>\u670D\u52A1\u5668\u5B8C\u6210\u771F\u5B9E\u7684\u54CD\u5E94</strong></li>\n    </ol>\n    <p>\u6BD4\u5982\uFF0C\u5728\u9875\u9762<code>http://my.com/index.html</code>\u4E2D\u6709\u4EE5\u4E0B\u4EE3\u7801\u9020\u6210\u4E86\u8DE8\u57DF</p><pre><code class=\"language-js\"><span class=\"hljs-comment\">// \u9700\u8981\u9884\u68C0\u7684\u8BF7\u6C42</span>\n    fetch(<span class=\"hljs-string\">\"http://crossdomain.com/api/user\"</span>, {\n      <span class=\"hljs-attr\">method</span>:<span class=\"hljs-string\">\"POST\"</span>, <span class=\"hljs-comment\">// post \u8BF7\u6C42</span>\n      <span class=\"hljs-attr\">headers</span>:{  <span class=\"hljs-comment\">// \u8BBE\u7F6E\u8BF7\u6C42\u5934</span>\n        <span class=\"hljs-attr\">a</span>: <span class=\"hljs-number\">1</span>,\n        <span class=\"hljs-attr\">b</span>: <span class=\"hljs-number\">2</span>,\n        <span class=\"hljs-string\">\"content-type\"</span>: <span class=\"hljs-string\">\"application/json\"</span>\n      },\n      <span class=\"hljs-attr\">body</span>: <span class=\"hljs-built_in\">JSON</span>.stringify({ <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\"\u8881\u5C0F\u8FDB\"</span>, <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">18</span> }) <span class=\"hljs-comment\">// \u8BBE\u7F6E\u8BF7\u6C42\u4F53</span>\n    });</code></pre>\n    <p>\u6D4F\u89C8\u5668\u53D1\u73B0\u5B83\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u8BF7\u6C42\uFF0C\u5219\u4F1A\u6309\u7167\u4E0B\u9762\u7684\u6D41\u7A0B\u4E0E\u670D\u52A1\u5668\u4EA4\u4E92</p><ol>\n    <li><strong>\u6D4F\u89C8\u5668\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\uFF0C\u8BE2\u95EE\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8</strong></li>\n    </ol>\n    <pre><code>OPTIONS /api/user HTTP/1.1\n    Host: crossdomain.com\n    ...\n    Origin: http://my.com\n    Access-Control-Request-Method: POST\n    Access-Control-Request-Headers: a, b, content-type</code></pre><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u5E76\u975E\u6211\u4EEC\u60F3\u8981\u53D1\u51FA\u7684\u771F\u5B9E\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u4E0D\u5305\u542B\u6211\u4EEC\u7684\u54CD\u5E94\u5934\uFF0C\u4E5F\u6CA1\u6709\u6D88\u606F\u4F53\u3002</p><p>\u8FD9\u662F\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF0C\u5B83\u7684\u76EE\u7684\u662F\u8BE2\u95EE\u670D\u52A1\u5668\uFF0C\u662F\u5426\u5141\u8BB8\u540E\u7EED\u7684\u771F\u5B9E\u8BF7\u6C42\u3002</p><p>\u9884\u68C0\u8BF7\u6C42<strong>\u6CA1\u6709\u8BF7\u6C42\u4F53</strong>\uFF0C\u5B83\u5305\u542B\u4E86\u540E\u7EED\u771F\u5B9E\u8BF7\u6C42\u8981\u505A\u7684\u4E8B\u60C5</p><p>\u9884\u68C0\u8BF7\u6C42\u6709\u4EE5\u4E0B\u7279\u5F81\uFF1A</p><ul>\n    <li>\u8BF7\u6C42\u65B9\u6CD5\u4E3A<code>OPTIONS</code></li>\n    <li>\u6CA1\u6709\u8BF7\u6C42\u4F53</li>\n    <li>\u8BF7\u6C42\u5934\u4E2D\u5305\u542B<ul>\n    <li><code>Origin</code>\uFF1A\u8BF7\u6C42\u7684\u6E90\uFF0C\u548C\u7B80\u5355\u8BF7\u6C42\u7684\u542B\u4E49\u4E00\u81F4</li>\n    <li><code>Access-Control-Request-Method</code>\uFF1A\u540E\u7EED\u7684\u771F\u5B9E\u8BF7\u6C42\u5C06\u4F7F\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5</li>\n    <li><code>Access-Control-Request-Headers</code>\uFF1A\u540E\u7EED\u7684\u771F\u5B9E\u8BF7\u6C42\u4F1A\u6539\u52A8\u7684\u8BF7\u6C42\u5934</li>\n    </ul>\n    </li>\n    </ul>\n    <ol start=\"2\">\n    <li><strong>\u670D\u52A1\u5668\u5141\u8BB8</strong></li>\n    </ol>\n    <p>\u670D\u52A1\u5668\u6536\u5230\u9884\u68C0\u8BF7\u6C42\u540E\uFF0C\u53EF\u4EE5\u68C0\u67E5\u9884\u68C0\u8BF7\u6C42\u4E2D\u5305\u542B\u7684\u4FE1\u606F\uFF0C\u5982\u679C\u5141\u8BB8\u8FD9\u6837\u7684\u8BF7\u6C42\uFF0C\u9700\u8981\u54CD\u5E94\u4E0B\u9762\u7684\u6D88\u606F\u683C\u5F0F</p><pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    Access-Control-Allow-Methods: POST\n    Access-Control-Allow-Headers: a, b, content-type\n    Access-Control-Max-Age: 86400\n    ...</code></pre><p>\u5BF9\u4E8E\u9884\u68C0\u8BF7\u6C42\uFF0C\u4E0D\u9700\u8981\u54CD\u5E94\u4EFB\u4F55\u7684\u6D88\u606F\u4F53\uFF0C\u53EA\u9700\u8981\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0\uFF1A</p><ul>\n    <li><code>Access-Control-Allow-Origin</code>\uFF1A\u548C\u7B80\u5355\u8BF7\u6C42\u4E00\u6837\uFF0C\u8868\u793A\u5141\u8BB8\u7684\u6E90</li>\n    <li><code>Access-Control-Allow-Methods</code>\uFF1A\u8868\u793A\u5141\u8BB8\u7684\u540E\u7EED\u771F\u5B9E\u7684\u8BF7\u6C42\u65B9\u6CD5</li>\n    <li><code>Access-Control-Allow-Headers</code>\uFF1A\u8868\u793A\u5141\u8BB8\u6539\u52A8\u7684\u8BF7\u6C42\u5934</li>\n    <li><code>Access-Control-Max-Age</code>\uFF1A\u544A\u8BC9\u6D4F\u89C8\u5668\uFF0C\u591A\u5C11\u79D2\u5185\uFF0C\u5BF9\u4E8E\u540C\u6837\u7684\u8BF7\u6C42\u6E90\u3001\u65B9\u6CD5\u3001\u5934\uFF0C\u90FD\u4E0D\u9700\u8981\u518D\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\u4E86</li>\n    </ul>\n    <ol start=\"3\">\n    <li><strong>\u6D4F\u89C8\u5668\u53D1\u9001\u771F\u5B9E\u8BF7\u6C42</strong></li>\n    </ol>\n    <p>\u9884\u68C0\u88AB\u670D\u52A1\u5668\u5141\u8BB8\u540E\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u53D1\u9001\u771F\u5B9E\u8BF7\u6C42\u4E86\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u4F1A\u53D1\u751F\u4E0B\u9762\u7684\u8BF7\u6C42\u6570\u636E</p><pre><code>POST /api/user HTTP/1.1\n    Host: crossdomain.com\n    Connection: keep-alive\n    ...\n    Referer: http://my.com/index.html\n    Origin: http://my.com\n    \n    {\"name\": \"\u8881\u5C0F\u8FDB\", \"age\": 18 }</code></pre><ol start=\"4\">\n    <li><strong>\u670D\u52A1\u5668\u54CD\u5E94\u771F\u5B9E\u8BF7\u6C42</strong></li>\n    </ol>\n    <pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    ...\n    \n    \u6DFB\u52A0\u7528\u6237\u6210\u529F</code></pre><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u5B8C\u6210\u9884\u68C0\u4E4B\u540E\uFF0C\u540E\u7EED\u7684\u5904\u7406\u4E0E\u7B80\u5355\u8BF7\u6C42\u76F8\u540C</p><p>\u4E0B\u56FE\u7B80\u8FF0\u4E86\u6574\u4E2A\u4EA4\u4E92\u8FC7\u7A0B</p><figure class=\"markdown-image\">\n          \n          <img style=\"width:auto\" src=\"http://mdrs.yuanjin.tech/img/image-20200421165913320.png\" title=\"image-20200421165913320\" alt=\"image-20200421165913320\">\n          <figcaption>image-20200421165913320</figcaption>\n      \n        </figure><h1 id=\"article-md-title-6\">\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42</h1><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cajax\u7684\u8DE8\u57DF\u8BF7\u6C42\u5E76\u4E0D\u4F1A\u9644\u5E26cookie\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0C\u67D0\u4E9B\u9700\u8981\u6743\u9650\u7684\u64CD\u4F5C\u5C31\u65E0\u6CD5\u8FDB\u884C</p><p>\u4E0D\u8FC7\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5C31\u53EF\u4EE5\u5B9E\u73B0\u9644\u5E26cookie</p><pre><code class=\"language-js\"><span class=\"hljs-comment\">// xhr</span>\n    <span class=\"hljs-keyword\">var</span> xhr = <span class=\"hljs-keyword\">new</span> XMLHttpRequest();\n    xhr.withCredentials = <span class=\"hljs-literal\">true</span>;\n    \n    <span class=\"hljs-comment\">// fetch api</span>\n    fetch(url, {\n      <span class=\"hljs-attr\">credentials</span>: <span class=\"hljs-string\">\"include\"</span>\n    })</code></pre>\n    <p>\u8FD9\u6837\u4E00\u6765\uFF0C\u8BE5\u8DE8\u57DF\u7684ajax\u8BF7\u6C42\u5C31\u662F\u4E00\u4E2A<em>\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42</em></p><p>\u5F53\u4E00\u4E2A\u8BF7\u6C42\u9700\u8981\u9644\u5E26cookie\u65F6\uFF0C\u65E0\u8BBA\u5B83\u662F\u7B80\u5355\u8BF7\u6C42\uFF0C\u8FD8\u662F\u9884\u68C0\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u5728\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0<code>cookie</code>\u5B57\u6BB5</p><p>\u800C\u670D\u52A1\u5668\u54CD\u5E94\u65F6\uFF0C\u9700\u8981\u660E\u786E\u544A\u77E5\u5BA2\u6237\u7AEF\uFF1A\u670D\u52A1\u5668\u5141\u8BB8\u8FD9\u6837\u7684\u51ED\u636E</p><p>\u544A\u77E5\u7684\u65B9\u5F0F\u4E5F\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0\uFF1A<code>Access-Control-Allow-Credentials: true</code>\u5373\u53EF</p><p>\u5BF9\u4E8E\u4E00\u4E2A\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\uFF0C\u82E5\u670D\u52A1\u5668\u6CA1\u6709\u660E\u786E\u544A\u77E5\uFF0C\u6D4F\u89C8\u5668\u4ECD\u7136\u89C6\u4E3A\u8DE8\u57DF\u88AB\u62D2\u7EDD\u3002</p><p>\u53E6\u5916\u8981\u7279\u522B\u6CE8\u610F\u7684\u662F\uFF1A<strong>\u5BF9\u4E8E\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u4E0D\u5F97\u8BBE\u7F6E <code>Access-Control-Allow-Origin \u7684\u503C\u4E3A*</code></strong>\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350\u4F7F\u7528*\u7684\u539F\u56E0</p><h1 id=\"article-md-title-7\">\u4E00\u4E2A\u989D\u5916\u7684\u8865\u5145</h1><p>\u5728\u8DE8\u57DF\u8BBF\u95EE\u65F6\uFF0CJS\u53EA\u80FD\u62FF\u5230\u4E00\u4E9B\u6700\u57FA\u672C\u7684\u54CD\u5E94\u5934\uFF0C\u5982\uFF1ACache-Control\u3001Content-Language\u3001Content-Type\u3001Expires\u3001Last-Modified\u3001Pragma\uFF0C\u5982\u679C\u8981\u8BBF\u95EE\u5176\u4ED6\u5934\uFF0C\u5219\u9700\u8981\u670D\u52A1\u5668\u8BBE\u7F6E\u672C\u54CD\u5E94\u5934\u3002</p><p><code>Access-Control-Expose-Headers</code>\u5934\u8BA9\u670D\u52A1\u5668\u628A\u5141\u8BB8\u6D4F\u89C8\u5668\u8BBF\u95EE\u7684\u5934\u653E\u5165\u767D\u540D\u5355\uFF0C\u4F8B\u5982\uFF1A</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>\u8FD9\u6837JS\u5C31\u80FD\u591F\u8BBF\u95EE\u6307\u5B9A\u7684\u54CD\u5E94\u5934\u4E86\u3002</p>"
  }
});

_mockjs["default"].mock('/api/comment', 'post', {
  code: 0,
  msg: '',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": ["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]
  }
});

_mockjs["default"].mock(/^\/api\/comment\/?(\?.+)?$/, 'get', function (options) {
  var query = _querystring["default"].parse(options.url); // console.log(query)


  return _mockjs["default"].mock({
    code: 0,
    msg: "",
    data: _defineProperty({
      'total|50-200': 0
    }, "rows|".concat(query.limit || 10), [{
      id: '@guid',
      nickname: '@cname',
      content: "@cparagraph(1, 10)",
      createDate: Date.now(),
      "avatar|1": ["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg", "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]
    }])
  });
});