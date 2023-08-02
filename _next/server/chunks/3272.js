"use strict";
exports.id = 3272;
exports.ids = [3272];
exports.modules = {

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72502);

const farms = [
    {
        pid: 34,
        vaultPid: 3,
        lpSymbol: "CELR-WETH LP",
        lpAddress: "0xF8E1FA0648F87c115F26E43271B3D6e4a80A2944",
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .goerliTestnetTokens.weth */ .On.weth,
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .goerliTestnetTokens.celr */ .On.celr
    },
    {
        pid: 23,
        vaultPid: 3,
        lpSymbol: "LEET-WETH LP",
        lpAddress: "0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109",
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .goerliTestnetTokens.weth */ .On.weth,
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .goerliTestnetTokens.leet */ .On.leet
    }, 
].map((p)=>({
        ...p,
        token: p.token.serialize,
        quoteToken: p.quoteToken.serialize
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (farms);


/***/ })

};
;
//# sourceMappingURL=3272.js.map