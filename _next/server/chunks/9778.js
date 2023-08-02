"use strict";
exports.id = 9778;
exports.ids = [9778];
exports.modules = {

/***/ 22422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__]);
_Box__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = ({ children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        px: [
            "16px",
            "24px"
        ],
        mx: "auto",
        maxWidth: "1200px",
        ...props,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
/* harmony import */ var _Layouts_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__, _Layouts_Container__WEBPACK_IMPORTED_MODULE_3__]);
([_Box__WEBPACK_IMPORTED_MODULE_2__, _Layouts_Container__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Outer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a56468b1-0"
})`
  background: ${({ theme , background  })=>background || theme.colors.gradientBubblegum};
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Layouts_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a56468b1-1"
})`
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
`;
const PageHeader = ({ background , children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Outer, {
        background: background,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inner, {
            children: children
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=9778.js.map