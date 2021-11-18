(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 1967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ EmailSignup)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/email-signup/email-signup.tsx


const EmailSignup = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("p", {});
};
;// CONCATENATED MODULE: ./components/email-signup/index.ts


/***/ }),

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* reexport */ Gif)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/gif/gif.module.scss
var gif_module = __webpack_require__(7738);
var gif_module_default = /*#__PURE__*/__webpack_require__.n(gif_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/gif/gif.tsx




const Gif = ({
  src,
  alt,
  width = 400
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
    className: (gif_module_default()).gif,
    children: [/*#__PURE__*/jsx_runtime_.jsx("video", {
      src: src,
      width: width,
      autoPlay: true,
      loop: true,
      playsInline: true,
      muted: true
    }), alt && /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
      children: alt
    })]
  });
};
;// CONCATENATED MODULE: ./components/gif/index.ts


/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ Image)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/image/image.module.scss
var image_module = __webpack_require__(6515);
var image_module_default = /*#__PURE__*/__webpack_require__.n(image_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/image/image.tsx





const Image = ({
  src,
  alt,
  width = 500
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
    className: (image_module_default()).image,
    children: [src.indexOf('://') ? /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: src,
      alt: alt,
      width: width
    }) : /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
      src: src,
      alt: alt,
      width: width
    }), /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
      children: alt
    })]
  });
};
;// CONCATENATED MODULE: ./components/image/index.ts


/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ PostFooter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/bio/index.ts + 1 modules
var bio = __webpack_require__(4694);
// EXTERNAL MODULE: ./components/seo/index.ts + 1 modules
var seo = __webpack_require__(5444);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/tags/tags.module.scss
var tags_module = __webpack_require__(3041);
var tags_module_default = /*#__PURE__*/__webpack_require__.n(tags_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/tags/tags.tsx





const Tags = ({
  tags = []
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (tags_module_default()).tags,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Tags: "
    }), tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: `/blog/tags/${tag}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: (tags_module_default()).tags__tag,
        children: ["#", tag]
      })
    }, tag))]
  });
};
;// CONCATENATED MODULE: ./components/tags/index.ts

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./content/config.ts
var config = __webpack_require__(5681);
// EXTERNAL MODULE: ./components/sharing/sharing.module.scss
var sharing_module = __webpack_require__(5370);
var sharing_module_default = /*#__PURE__*/__webpack_require__.n(sharing_module);
;// CONCATENATED MODULE: ./components/sharing/sharing.tsx






const Sharing = ({
  post
}) => {
  const url = `${config/* default.siteUrl */.Z.siteUrl}/blog/${post.slug}`;
  const image = config/* default.siteUrl */.Z.siteUrl + post.image;
  const {
    0: showing,
    1: setShowing
  } = (0,external_react_.useState)(false);
  const socials = [{
    name: `Facebook`,
    href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaFacebookF, {})
  }, {
    name: `Twitter`,
    href: `https://twitter.com/share?url=${url}&text=Check out this article!`,
    icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaTwitter, {})
  }, {
    name: `Linkedin`,
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
    icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaLinkedin, {})
  }, {
    name: `Pinterest`,
    href: `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${post.title}`,
    icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaPinterest, {})
  }, {
    name: `Email`,
    href: `mailto:?&body=Check%20this%20article%20out!%0A%0A${url}`,
    icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaEnvelope, {})
  }];

  const handleScroll = () => setShowing(window.scrollY > 100 && window.scrollY < document.body.clientHeight - 2000);

  (0,external_react_.useEffect)(() => {
    document.addEventListener(`scroll`, handleScroll);
    return () => document.removeEventListener(`scroll`, handleScroll);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: showing ? `${(sharing_module_default()).sharing} ${(sharing_module_default()).show}` : (sharing_module_default()).sharing,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (sharing_module_default()).sharing__label,
      children: "Share:"
    }), socials.map(site => /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (sharing_module_default())[`sharing__${site.name.toLowerCase()}`],
      href: site.href,
      target: "_parent",
      rel: "noreferrer nofollow",
      title: `Share to ${site.name}`,
      "aria-label": `Share to ${site.name}`,
      children: site.icon
    }, site.name))]
  });
};
;// CONCATENATED MODULE: ./components/sharing/index.ts

;// CONCATENATED MODULE: ./components/post-footer/post-footer.tsx








const PostFooter = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* Seo */.p, {
      title: data.title,
      description: data.description,
      image: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx(bio/* Bio */.w, {
      showAuthorName: true
    }), data.tags && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Tags, {
        tags: data.tags
      }), /*#__PURE__*/jsx_runtime_.jsx(Sharing, {
        post: data
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/post-footer/index.ts


/***/ }),

/***/ 209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5438);
/* harmony import */ var components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7709);
/* harmony import */ var components_post_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2666);
/* harmony import */ var components_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8354);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5444);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3503);
/* harmony import */ var components_email_signup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1967);
/* harmony import */ var utils_contentHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5261);
/* harmony import */ var remark_unwrap_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8438);
/* harmony import */ var content_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5681);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_unwrap_images__WEBPACK_IMPORTED_MODULE_11__]);
remark_unwrap_images__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const BlogPost = ({
  post,
  posts,
  totalPages,
  page
}) => {
  {
    /* Individual Post */
  }
  if (post) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h1", {
      children: [post.title, !post.published && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
        className: "draft",
        children: "- Draft"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, _objectSpread(_objectSpread({}, post.content), {}, {
      components: {
        Gif: components_gif__WEBPACK_IMPORTED_MODULE_6__/* .Gif */ .n,
        EmailSignup: components_email_signup__WEBPACK_IMPORTED_MODULE_9__/* .EmailSignup */ .m,
        Seo: components_seo__WEBPACK_IMPORTED_MODULE_7__/* .Seo */ .p,
        img: components_image__WEBPACK_IMPORTED_MODULE_8__/* .Image */ .E
      }
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_post_footer__WEBPACK_IMPORTED_MODULE_5__/* .PostFooter */ .z, {
      data: post
    })]
  });
  {
    /* Paginated blog page */
  }
  if (posts) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h1", {
      children: "Blog"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_posts__WEBPACK_IMPORTED_MODULE_3__/* .Posts */ .V, {
      content: posts
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_pagination__WEBPACK_IMPORTED_MODULE_4__/* .Pagination */ .t, {
      page: page,
      totalPages: totalPages
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);
const getStaticProps = async ({
  params
}) => {
  // If page is a paginated blog page
  if (!isNaN(params.slug)) {
    const totalPages = Math.ceil((0,utils_contentHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getAllContent */ .GV)('posts', []).length / content_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"].postsPerPage */ .Z.postsPerPage);
    const posts = (0,utils_contentHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getAllContent */ .GV)('posts', ['title', 'slug', 'description', 'published'], content_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"].postsPerPage */ .Z.postsPerPage, (parseInt(params.slug) - 1) * content_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"].postsPerPage */ .Z.postsPerPage);
    return {
      props: {
        posts,
        totalPages,
        page: parseInt(params.slug)
      }
    };
  } // If blog post, render normally
  else {
    const post = (0,utils_contentHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getContentBySlug */ ._T)('posts', params.slug, ['title', 'slug', 'image', 'content', 'published', 'tags', 'description']);
    post.content = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(post.content, {
      mdxOptions: {
        remarkPlugins: [__webpack_require__(2423), remark_unwrap_images__WEBPACK_IMPORTED_MODULE_11__["default"]]
      }
    });
    return {
      props: {
        post
      }
    };
  }
};
const getStaticPaths = async () => {
  // Get all posts
  const posts = (0,utils_contentHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getAllContent */ .GV)('posts', ['slug']);
  const pageCount = Math.ceil(posts.length / content_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"].postsPerPage */ .Z.postsPerPage);
  const pages = [];

  for (let i = 1; i < pageCount; i++) pages.push(i);

  return {
    paths: [// Create individual blog posts
    ...posts.map(post => ({
      params: {
        slug: post.slug
      }
    })), // Create pages for paginated blog posts
    ...pages.map(page => ({
      params: {
        slug: `${page + 1}`
      }
    }))],
    fallback: false
  };
};
});

/***/ }),

/***/ 7738:
/***/ ((module) => {

// Exports
module.exports = {
	"gif": "gif_gif__ueMl1"
};


/***/ }),

/***/ 6515:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "image_image__4ehsq"
};


/***/ }),

/***/ 5370:
/***/ ((module) => {

// Exports
module.exports = {
	"sharing": "sharing_sharing__wOTFd",
	"show": "sharing_show__zDjdd",
	"sharing__label": "sharing_sharing__label__KVRKB",
	"sharing__facebook": "sharing_sharing__facebook__iXMkD",
	"sharing__twitter": "sharing_sharing__twitter__MD4B_",
	"sharing__linkedin": "sharing_sharing__linkedin__aPORG",
	"sharing__pinterest": "sharing_sharing__pinterest__czSgm",
	"sharing__email": "sharing_sharing__email__A3j8g"
};


/***/ }),

/***/ 3041:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": "tags_tags__ipX4V",
	"tags__tag": "tags_tags__tag__qYSPA"
};


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 276:
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote");

/***/ }),

/***/ 7112:
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("remark-prism");

/***/ }),

/***/ 8438:
/***/ ((module) => {

"use strict";
module.exports = import("remark-unwrap-images");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,675,681,261,438,92,444,694,709], () => (__webpack_exec__(209)));
module.exports = __webpack_exports__;

})();