"use strict";
exports.id = 4126;
exports.ids = [4126];
exports.modules = {

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTokenList)
/* harmony export */ });
/* harmony import */ var _uniswap_token_lists_src_tokenlist_schema_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44704);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75888);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_uriToHttp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86287);
/* eslint-disable no-continue */ /* eslint-disable no-await-in-loop */ 


const tokenListValidator = new (ajv__WEBPACK_IMPORTED_MODULE_1___default())({
    allErrors: true
}).compile(_uniswap_token_lists_src_tokenlist_schema_json__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 */ async function getTokenList(listUrl) {
    const urls = (0,_pancakeswap_utils_uriToHttp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(listUrl);
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const isLast = i === urls.length - 1;
        let response;
        try {
            response = await fetch(url);
        } catch (error) {
            console.error("Failed to fetch list", listUrl, error);
            if (isLast) throw new Error(`Failed to download list ${listUrl}`);
            continue;
        }
        if (!response.ok) {
            if (isLast) throw new Error(`Failed to download list ${listUrl}`);
            continue;
        }
        const json = await response.json();
        if (!tokenListValidator(json)) {
            const validationErrors = tokenListValidator.errors?.reduce((memo, error)=>{
                const add = `${error.dataPath} ${error.message ?? ""}`;
                return memo.length > 0 ? `${memo}; ${add}` : `${add}`;
            }, "") ?? "unknown error";
            throw new Error(`Token list failed validation: ${validationErrors}`);
        }
        return json;
    }
    throw new Error("Unrecognized list URL protocol.");
}


/***/ })

};
;
//# sourceMappingURL=4126.js.map