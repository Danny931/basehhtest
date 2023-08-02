"use strict";
exports.id = 8861;
exports.ids = [8861];
exports.modules = {

/***/ 68861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72502);

const farms = [
    {
        pid: 124,
        vaultPid: 1,
        lpSymbol: "ETH-USDC LP",
        lpAddress: "0x2E8135bE71230c6B1B4045696d41C09Db0414226",
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .ethereumTokens.weth */ .uR.weth,
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .ethereumTokens.usdc */ .uR.usdc
    },
    {
        pid: 125,
        vaultPid: 2,
        lpSymbol: "ETH-USDT LP",
        lpAddress: "0x17C1Ae82D99379240059940093762c5e4539aba5",
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .ethereumTokens.weth */ .uR.weth,
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .ethereumTokens.usdt */ .uR.usdt
    },
    {
        pid: 126,
        vaultPid: 3,
        lpSymbol: "WBTC-ETH LP",
        lpAddress: "0x4AB6702B3Ed3877e9b1f203f90cbEF13d663B0e8",
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .ethereumTokens.weth */ .uR.weth,
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .ethereumTokens.wbtc */ .uR.wbtc
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
//# sourceMappingURL=8861.js.map