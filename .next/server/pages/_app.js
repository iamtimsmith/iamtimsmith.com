(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
// EXTERNAL MODULE: ./utils/siteContext.tsx
var siteContext = __webpack_require__(8092);
// EXTERNAL MODULE: ./components/toggle/toggle.module.scss
var toggle_module = __webpack_require__(6980);
var toggle_module_default = /*#__PURE__*/__webpack_require__.n(toggle_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/toggle/toggle.tsx






const Toggle = () => {
  const {
    toggleTheme
  } = (0,external_react_.useContext)(siteContext/* SiteContext */.D);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    onClick: () => toggleTheme(),
    "aria-label": "Toggle Theme",
    className: (toggle_module_default()).toggle,
    children: [/*#__PURE__*/jsx_runtime_.jsx(io5_namespaceObject.IoSunnyOutline, {
      className: (toggle_module_default()).toggle__light
    }), /*#__PURE__*/jsx_runtime_.jsx(io5_namespaceObject.IoMoonOutline, {
      className: (toggle_module_default()).toggle__dark
    })]
  });
};
;// CONCATENATED MODULE: ./components/toggle/index.ts

// EXTERNAL MODULE: ./components/header/header.module.scss
var header_module = __webpack_require__(9928);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/header/header.tsx







const Header = () => {
  const {
    siteTitle,
    mainmenu
  } = (0,external_react_.useContext)(siteContext/* SiteContext */.D);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (header_module_default()).header,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (header_module_default()).header__logo,
        children: siteTitle
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: (header_module_default()).header__nav,
      children: [mainmenu.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: item.url,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: item.name
        })
      }, item.name)), /*#__PURE__*/jsx_runtime_.jsx(Toggle, {})]
    })]
  });
};
;// CONCATENATED MODULE: ./components/header/index.ts

;// CONCATENATED MODULE: external "react-icons/gi"
const gi_namespaceObject = require("react-icons/gi");
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./components/footer/footer.module.scss
var footer_module = __webpack_require__(2451);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer/footer.tsx







const Footer = () => {
  const {
    socialmenu,
    siteTitle
  } = (0,external_react_.useContext)(siteContext/* SiteContext */.D);

  const getIcon = site => {
    switch (site) {
      case 'twitter':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaTwitter, {});

      case 'linkedin':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaLinkedin, {});

      case 'github':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGithub, {});

      case 'dev':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaDev, {});

      default:
        return null;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (footer_module_default()).footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: (footer_module_default()).footer__socials,
      children: socialmenu.map(social => /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: social.url,
        target: "_blank",
        rel: "noreferrer nofollow",
        "aria-label": social.name,
        children: getIcon(social.name.toLowerCase())
      }, social.name))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["\xA9 ", new Date().getFullYear(), ". All rights reserved. Made with", ' ', /*#__PURE__*/jsx_runtime_.jsx(gi_namespaceObject.GiTechnoHeart, {}), " by ", siteTitle, "."]
    })]
  });
};
;// CONCATENATED MODULE: ./components/footer/index.ts

// EXTERNAL MODULE: ./content/config.ts
var config = __webpack_require__(5681);
// EXTERNAL MODULE: ./components/socials/socials.module.scss
var socials_module = __webpack_require__(5737);
var socials_module_default = /*#__PURE__*/__webpack_require__.n(socials_module);
;// CONCATENATED MODULE: ./components/socials/socials.tsx






const Socials = () => {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const getIcon = site => {
    switch (site) {
      case 'twitter':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaTwitter, {});

      case 'linkedin':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaLinkedin, {});

      case 'github':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGithub, {});

      case 'dev':
        return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaDev, {});

      default:
        return null;
    }
  };

  const handleShow = () => setShow(window.scrollY > 0);

  const handleClick = () => window[`scrollTo`]({
    top: 0,
    behavior: `smooth`
  });

  (0,external_react_.useEffect)(() => {
    document.addEventListener(`scroll`, handleShow);
    return () => document.removeEventListener(`scroll`, handleShow);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: (socials_module_default()).socials,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: (socials_module_default()).socials__nav,
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: show ? (socials_module_default()).show : '',
        onClick: () => handleClick(),
        children: "\u2191"
      }), config/* default.socialmenu.map */.Z.socialmenu.map(social => /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: social.url,
        target: "_blank",
        rel: "noreferrer nofollow",
        children: getIcon(social.name.toLowerCase())
      }, social.name))]
    })
  });
};
;// CONCATENATED MODULE: ./components/socials/index.ts

// EXTERNAL MODULE: ./components/layout/layout.module.scss
var layout_module = __webpack_require__(7818);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./components/layout/layout.tsx







const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    className: (layout_module_default()).layout,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {}), /*#__PURE__*/jsx_runtime_.jsx(Socials, {})]
  });
};
;// CONCATENATED MODULE: ./components/layout/index.ts

;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(siteContext/* SiteProvider */.q, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      src: "/handleThemes.js",
      strategy: "beforeInteractive"
    }), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2451:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__LV2HF",
	"footer__socials": "footer_footer__socials__0EFT5"
};


/***/ }),

/***/ 9928:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__GSKJx",
	"header__logo": "header_header__logo__mTmBu",
	"header__nav": "header_header__nav__1oZfg"
};


/***/ }),

/***/ 7818:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "layout_layout__yqn2P"
};


/***/ }),

/***/ 5737:
/***/ ((module) => {

// Exports
module.exports = {
	"socials": "socials_socials__d4gBZ",
	"socials__nav": "socials_socials__nav__SmiYR",
	"show": "socials_show__h5cRJ"
};


/***/ }),

/***/ 6980:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": "toggle_toggle__jzkKG",
	"toggle__light": "toggle_toggle__light__nZk2e",
	"toggle__dark": "toggle_toggle__dark__xtvA1"
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,681,92], () => (__webpack_exec__(3386)));
module.exports = __webpack_exports__;

})();