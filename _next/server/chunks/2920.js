"use strict";
exports.id = 2920;
exports.ids = [2920];
exports.modules = {

/***/ 12920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93304);
/* harmony import */ var _ActivityHistory_ActivityHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__, _ActivityHistory_ActivityHistory__WEBPACK_IMPORTED_MODULE_3__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__, _ActivityHistory_ActivityHistory__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Activity = ()=>{
    const collectionAddress = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.collectionAddress;
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useGetCollection */ .YD)(collectionAddress);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityHistory_ActivityHistory__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            collection: collection
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activity);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=2920.js.map