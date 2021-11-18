"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./components/sharing/sharing.tsx":
/*!****************************************!*\
  !*** ./components/sharing/sharing.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sharing\": function() { return /* binding */ Sharing; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var content_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! content/config */ \"./content/config.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/timsmith/Projects/iamtimsmith.com-next/components/sharing/sharing.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import _ from './sharing.module.scss';\n\n\nvar Sharing = function Sharing(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var url = \"\".concat(content_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].siteUrl, \"/blog/\").concat(post.slug);\n  var image = \"\".concat(url, \"/twitter-card.jpg\");\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      showing = _useState[0],\n      setShowing = _useState[1];\n\n  var socials = [{\n    name: \"Facebook\",\n    href: \"https://www.facebook.com/sharer/sharer.php?u=\".concat(url),\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFacebookF, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }, _this)\n  }, {\n    name: \"Twitter\",\n    href: \"https://twitter.com/share?url=\".concat(url, \"&text=Check out this article!\"),\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }, _this)\n  }, {\n    name: \"Linkedin\",\n    href: \"https://www.linkedin.com/shareArticle?mini=true&url=\".concat(url),\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaLinkedin, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 10\n    }, _this)\n  }, {\n    name: \"Pinterest\",\n    href: \"https://pinterest.com/pin/create/button/?url=\".concat(url, \"&media=\").concat(image, \"&description=\").concat(title),\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPinterest, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 10\n    }, _this)\n  }, {\n    name: \"Email\",\n    href: \"mailto:?&body=Check%20this%20article%20out!%0A%0A\".concat(url),\n    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaEnvelope, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 10\n    }, _this)\n  }];\n\n  var handleScroll = function handleScroll() {\n    return setShowing(window.scrollY > 100 && window.scrollY < document.body.clientHeight - 2000);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      return document.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"aside\", {\n    className: showing ? \"sharing show\" : \"sharing\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: \"sharing__label\",\n      children: \"Share:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }, _this), socials.map(function (site) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n        className: \"sharing__\".concat(site.name.toLowerCase()),\n        href: site.href,\n        target: \"_parent\",\n        rel: \"noreferrer nofollow\",\n        title: \"Share to \".concat(site.name),\n        \"aria-label\": \"Share to \".concat(site.name),\n        children: site.icon\n      }, site.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Sharing, \"VOp+3ukcEnd6RSMh6rA+bev7UNA=\");\n\n_c = Sharing;\n\nvar _c;\n\n$RefreshReg$(_c, \"Sharing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsS0FBaEIsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQTVETTs7R0FBTVQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2hhcmluZy9zaGFyaW5nLnRzeD83Yzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0RmFGYWNlYm9va0YsXG5cdEZhVHdpdHRlcixcblx0RmFMaW5rZWRpbixcblx0RmFQaW50ZXJlc3QsXG5cdEZhRW52ZWxvcGUsXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBjb25maWcgZnJvbSAnY29udGVudC9jb25maWcnO1xuLy8gaW1wb3J0IF8gZnJvbSAnLi9zaGFyaW5nLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGNvbnN0IFNoYXJpbmcgPSAoeyBwb3N0IH0pID0+IHtcblx0Y29uc3QgdXJsID0gYCR7Y29uZmlnLnNpdGVVcmx9L2Jsb2cvJHtwb3N0LnNsdWd9YDtcblx0Y29uc3QgaW1hZ2UgPSBgJHt1cmx9L3R3aXR0ZXItY2FyZC5qcGdgO1xuXHRjb25zdCBbc2hvd2luZywgc2V0U2hvd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3Qgc29jaWFscyA9IFtcblx0XHR7XG5cdFx0XHRuYW1lOiBgRmFjZWJvb2tgLFxuXHRcdFx0aHJlZjogYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG5cdFx0XHRpY29uOiA8RmFGYWNlYm9va0YgLz4sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBgVHdpdHRlcmAsXG5cdFx0XHRocmVmOiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT91cmw9JHt1cmx9JnRleHQ9Q2hlY2sgb3V0IHRoaXMgYXJ0aWNsZSFgLFxuXHRcdFx0aWNvbjogPEZhVHdpdHRlciAvPixcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IGBMaW5rZWRpbmAsXG5cdFx0XHRocmVmOiBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7dXJsfWAsXG5cdFx0XHRpY29uOiA8RmFMaW5rZWRpbiAvPixcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IGBQaW50ZXJlc3RgLFxuXHRcdFx0aHJlZjogYGh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPSR7dXJsfSZtZWRpYT0ke2ltYWdlfSZkZXNjcmlwdGlvbj0ke3RpdGxlfWAsXG5cdFx0XHRpY29uOiA8RmFQaW50ZXJlc3QgLz4sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBgRW1haWxgLFxuXHRcdFx0aHJlZjogYG1haWx0bzo/JmJvZHk9Q2hlY2slMjB0aGlzJTIwYXJ0aWNsZSUyMG91dCElMEElMEEke3VybH1gLFxuXHRcdFx0aWNvbjogPEZhRW52ZWxvcGUgLz4sXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PlxuXHRcdHNldFNob3dpbmcoXG5cdFx0XHR3aW5kb3cuc2Nyb2xsWSA+IDEwMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gMjAwMFxuXHRcdCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLCBoYW5kbGVTY3JvbGwpO1xuXHRcdHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGBzY3JvbGxgLCBoYW5kbGVTY3JvbGwpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8YXNpZGUgY2xhc3NOYW1lPXtzaG93aW5nID8gYHNoYXJpbmcgc2hvd2AgOiBgc2hhcmluZ2B9PlxuXHRcdFx0PHAgY2xhc3NOYW1lPSdzaGFyaW5nX19sYWJlbCc+U2hhcmU6PC9wPlxuXHRcdFx0e3NvY2lhbHMubWFwKHNpdGUgPT4gKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YHNoYXJpbmdfXyR7c2l0ZS5uYW1lLnRvTG93ZXJDYXNlKCl9YH1cblx0XHRcdFx0XHRocmVmPXtzaXRlLmhyZWZ9XG5cdFx0XHRcdFx0dGFyZ2V0PSdfcGFyZW50J1xuXHRcdFx0XHRcdHJlbD0nbm9yZWZlcnJlciBub2ZvbGxvdydcblx0XHRcdFx0XHR0aXRsZT17YFNoYXJlIHRvICR7c2l0ZS5uYW1lfWB9XG5cdFx0XHRcdFx0YXJpYS1sYWJlbD17YFNoYXJlIHRvICR7c2l0ZS5uYW1lfWB9XG5cdFx0XHRcdFx0a2V5PXtzaXRlLm5hbWV9PlxuXHRcdFx0XHRcdHtzaXRlLmljb259XG5cdFx0XHRcdDwvYT5cblx0XHRcdCkpfVxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYUZhY2Vib29rRiIsIkZhVHdpdHRlciIsIkZhTGlua2VkaW4iLCJGYVBpbnRlcmVzdCIsIkZhRW52ZWxvcGUiLCJjb25maWciLCJTaGFyaW5nIiwicG9zdCIsInVybCIsInNpdGVVcmwiLCJzbHVnIiwiaW1hZ2UiLCJzaG93aW5nIiwic2V0U2hvd2luZyIsInNvY2lhbHMiLCJuYW1lIiwiaHJlZiIsImljb24iLCJ0aXRsZSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsInNpdGUiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sharing/sharing.tsx\n");

/***/ })

});