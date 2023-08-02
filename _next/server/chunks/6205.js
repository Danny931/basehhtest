"use strict";
exports.id = 6205;
exports.ids = [6205];
exports.modules = {

/***/ 66205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72502);

const farms = [
    /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */ {
        pid: 0,
        lpSymbol: "CAKE",
        lpAddress: "0x36e3E4fF6471559b19F66bD10985534d5e214D44",
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.syrup */ .dI.syrup,
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.wbnb */ .dI.wbnb
    },
    {
        pid: 3,
        lpSymbol: "BUSD-CAKE LP",
        lpAddress: "0xb98C30fA9f5e9cf6749B7021b4DDc0DBFe73b73e",
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.busd */ .dI.busd,
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.cake */ .dI.cake
    },
    {
        pid: 4,
        lpSymbol: "CAKE-BNB LP",
        lpAddress: "0xa96818CA65B57bEc2155Ba5c81a70151f63300CD",
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.cake */ .dI.cake,
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.wbnb */ .dI.wbnb
    },
    {
        pid: 10,
        lpSymbol: "BNB-BUSD LP",
        lpAddress: "0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897",
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.wbnb */ .dI.wbnb,
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.busd */ .dI.busd
    },
    {
        pid: 9,
        lpSymbol: "USDC-BUSD LP",
        lpAddress: "0xd1742b5eC6798cEB8C791e0ebbEf606A4946f67E",
        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.usdc */ .dI.usdc,
        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__/* .bscTestnetTokens.busd */ .dI.busd,
        stableSwapAddress: "0x1288026D2c5a76A5bfb0730F615131A448f4Ad06",
        infoStableSwapAddress: "0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546"
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
//# sourceMappingURL=6205.js.map