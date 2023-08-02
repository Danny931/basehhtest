(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 53078:
/***/ (() => {

var _global = (typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}); _global.SENTRY_RELEASE={id:"k5749YRIthqpA0xkVOpIA"};

/***/ }),

/***/ 8512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81995);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_NotFound__WEBPACK_IMPORTED_MODULE_3__]);
_views_NotFound__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */ 



const CustomErrorComponent = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_NotFound__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        statusCode: props.statusCode
    });
CustomErrorComponent.getInitialProps = async (contextData)=>{
    // In case this is running in a serverless function, await this in order to give Sentry
    // time to send the error before the lambda exits
    await (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureUnderscoreErrorException)(contextData);
    // This will contain the status code of the response
    return next_error__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(contextData);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomErrorComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90542:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
global.__rewriteFramesDistDir__ = ".next";
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const ENV = process.env.VERCEL_ENV || "production";
(0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init)({
    dsn: SENTRY_DSN,
    environment: ENV === "production" ? "production" : "development",
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 0
});


/***/ }),

/***/ 6187:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 51541:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/address");

/***/ }),

/***/ 65757:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 49935:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 26644:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 90399:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 76693:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/solidity");

/***/ }),

/***/ 93138:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/units");

/***/ }),

/***/ 18310:
/***/ ((module) => {

"use strict";
module.exports = require("@gnosis.pm/safe-apps-wagmi");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 58097:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 51554:
/***/ ((module) => {

"use strict";
module.exports = require("@uniswap/token-lists");

/***/ }),

/***/ 75888:
/***/ ((module) => {

"use strict";
module.exports = require("ajv");

/***/ }),

/***/ 22575:
/***/ ((module) => {

"use strict";
module.exports = require("big.js");

/***/ }),

/***/ 34215:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js");

/***/ }),

/***/ 97312:
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js-light");

/***/ }),

/***/ 64175:
/***/ ((module) => {

"use strict";
module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 5805:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ 52424:
/***/ ((module) => {

"use strict";
module.exports = require("jsbi");

/***/ }),

/***/ 72607:
/***/ ((module) => {

"use strict";
module.exports = require("local-storage");

/***/ }),

/***/ 3182:
/***/ ((module) => {

"use strict";
module.exports = require("localforage");

/***/ }),

/***/ 90221:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/chunk");

/***/ }),

/***/ 57626:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/fromPairs");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 50541:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ 66011:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/orderBy");

/***/ }),

/***/ 9822:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/reduce");

/***/ }),

/***/ 10582:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniq");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 95566:
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

"use strict";
module.exports = require("styled-system");

/***/ }),

/***/ 8780:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ 60656:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-warning");

/***/ }),

/***/ 86350:
/***/ ((module) => {

"use strict";
module.exports = require("toformat");

/***/ }),

/***/ 8906:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ 22216:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/chains");

/***/ }),

/***/ 51276:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ 74738:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ 79035:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ 61556:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ 21176:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 82451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

"use strict";
module.exports = import("jotai/utils");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

"use strict";
module.exports = import("swr/immutable");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,7775,9660,3480,3579,2993,7854,1995], () => (__webpack_exec__(53078), __webpack_exec__(90542), __webpack_exec__(8512)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=_error.js.map