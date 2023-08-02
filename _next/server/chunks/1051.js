"use strict";
exports.id = 1051;
exports.ids = [1051];
exports.modules = {

/***/ 43437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BY": () => (/* binding */ LP_HOLDERS_FEE),
/* harmony export */   "Bq": () => (/* binding */ ONE_DAY_UNIX),
/* harmony export */   "DY": () => (/* binding */ PCS_ETH_START),
/* harmony export */   "MV": () => (/* binding */ WEEKS_IN_YEAR),
/* harmony export */   "OZ": () => (/* binding */ MINIMUM_SEARCH_CHARACTERS),
/* harmony export */   "Rr": () => (/* binding */ PCS_V2_START),
/* harmony export */   "Tb": () => (/* binding */ ONE_HOUR_SECONDS),
/* harmony export */   "Vd": () => (/* binding */ ETH_TOKEN_BLACKLIST),
/* harmony export */   "hT": () => (/* binding */ TREASURY_FEE),
/* harmony export */   "om": () => (/* binding */ TOTAL_FEE),
/* harmony export */   "si": () => (/* binding */ ITEMS_PER_INFO_TABLE_PAGE),
/* harmony export */   "tE": () => (/* binding */ TOKEN_BLACKLIST),
/* harmony export */   "xy": () => (/* binding */ BUYBACK_FEE)
/* harmony export */ });
const MINIMUM_SEARCH_CHARACTERS = 2;
const WEEKS_IN_YEAR = 52.1429;
const TOTAL_FEE = 0.0025;
const LP_HOLDERS_FEE = 0.0017;
const TREASURY_FEE = 0.000225;
const BUYBACK_FEE = 0.000575;
const PCS_V2_START = 1619136000 // April 23, 2021, 12:00:00 AM
;
const PCS_ETH_START = 1664130827 // Sep 23, 2022, 02:33:47 AM
;
const ONE_DAY_UNIX = 86400 // 24h * 60m * 60s
;
const ONE_HOUR_SECONDS = 3600;
const ITEMS_PER_INFO_TABLE_PAGE = 10;
// These tokens are either incorrectly priced or have some other issues that spoil the query data
// None of them present any interest as they have almost 0 daily trade volume
const TOKEN_BLACKLIST = [
    // These ones are copied from v1 info
    "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
    "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
    "0xe31debd7abff90b06bca21010dd860d8701fd901",
    "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
    "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007",
    "0xfd158609228b43aa380140b46fff3cdf9ad315de",
    "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea",
    "0x205969b3ad459f7eba0dee07231a6357183d3fb6",
    "0x0bd67d358636fd7b0597724aa4f20beedbf3073a",
    "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075",
    "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30",
    "0x041929a760d7049edaef0db246fa76ec975e90cc",
    "0xba098df8c6409669f5e6ec971ac02cd5982ac108",
    "0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94",
    "0xe99512305bf42745fae78003428dcaf662afb35d",
    "0xbE609EAcbFca10F6E5504D39E3B113F808389056",
    "0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e",
    "0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b",
    // These ones are newly found
    "0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653",
    "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b", 
];
const ETH_TOKEN_BLACKLIST = [
    "0x72b169ad8af6c4fb53056b6a2a85602ad6863864"
];


/***/ }),

/***/ 7964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lx": () => (/* binding */ DEFAULT_LIST_OF_LISTS),
/* harmony export */   "US": () => (/* binding */ UNSUPPORTED_LIST_URLS),
/* harmony export */   "VX": () => (/* binding */ WARNING_LIST_URLS),
/* harmony export */   "c8": () => (/* binding */ DEFAULT_ACTIVE_LIST_URLS),
/* harmony export */   "mg": () => (/* binding */ OFFICIAL_LISTS)
/* harmony export */ });
const PANCAKE_EXTENDED = "https://tokens.pancakeswap.finance/pancakeswap-extended.json";
const COINGECKO = "https://tokens.pancakeswap.finance/coingecko.json";
const CMC = "https://tokens.pancakeswap.finance/cmc.json";
// List of official tokens list
const OFFICIAL_LISTS = [
    PANCAKE_EXTENDED
];
const UNSUPPORTED_LIST_URLS = [];
const WARNING_LIST_URLS = [];
// lower index == higher priority for token import
const DEFAULT_LIST_OF_LISTS = [
    PANCAKE_EXTENDED,
    CMC,
    COINGECKO,
    ...UNSUPPORTED_LIST_URLS,
    ...WARNING_LIST_URLS, 
];
// default lists to be 'active' aka searched across
const DEFAULT_ACTIVE_LIST_URLS = [];


/***/ }),

/***/ 31196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EH": () => (/* binding */ useIsUserAddedToken),
/* harmony export */   "U8": () => (/* binding */ useCurrency),
/* harmony export */   "ZN": () => (/* binding */ useIsTokenActive),
/* harmony export */   "dQ": () => (/* binding */ useToken),
/* harmony export */   "e_": () => (/* binding */ useAllTokens),
/* harmony export */   "l6": () => (/* binding */ useUnsupportedTokens),
/* harmony export */   "uq": () => (/* binding */ useOfficialsAndUserAddedTokens),
/* harmony export */   "zd": () => (/* binding */ useWarningTokens)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49935);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49213);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17943);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26680);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87070);
/* harmony import */ var _state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18534);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5305);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74860);
/* harmony import */ var _useNativeCurrency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, _state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__, _state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_9__, _useContract__WEBPACK_IMPORTED_MODULE_11__, _useNativeCurrency__WEBPACK_IMPORTED_MODULE_12__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, _state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__, _state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_9__, _useContract__WEBPACK_IMPORTED_MODULE_11__, _useNativeCurrency__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-param-reassign */ 












const mapWithoutUrls = (tokenMap, chainId)=>Object.keys(tokenMap[chainId] || {}).reduce((newMap, address)=>{
        newMap[address] = tokenMap[chainId][address].token;
        return newMap;
    }, {});
/**
 * Returns all tokens that are from active urls and user added tokens
 */ function useAllTokens() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const tokenMap = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__/* .combinedTokenMapFromActiveUrlsAtom */ .i);
    const userAddedTokens = (0,_state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        return userAddedTokens// reduce into all ALL_TOKENS filtered by the current chain
        .reduce((tokenMap_, token)=>{
            tokenMap_[token.address] = token;
            return tokenMap_;
        }, // must make a copy because reduce modifies the map, and we do not
        // want to make a copy in every iteration
        mapWithoutUrls(tokenMap, chainId));
    }, [
        userAddedTokens,
        tokenMap,
        chainId
    ]);
}
/**
 * Returns all tokens that are from officials token list and user added tokens
 */ function useOfficialsAndUserAddedTokens() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const tokenMap = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__/* .combinedTokenMapFromOfficialsUrlsAtom */ .HW);
    const userAddedTokens = (0,_state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        return userAddedTokens// reduce into all ALL_TOKENS filtered by the current chain
        .reduce((tokenMap_, token)=>{
            tokenMap_[token.address] = token;
            return tokenMap_;
        }, // must make a copy because reduce modifies the map, and we do not
        // want to make a copy in every iteration
        mapWithoutUrls(tokenMap, chainId));
    }, [
        userAddedTokens,
        tokenMap,
        chainId
    ]);
}
function useUnsupportedTokens() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const unsupportedTokensMap = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useUnsupportedTokenList */ .Rx)();
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>mapWithoutUrls(unsupportedTokensMap, chainId), [
        unsupportedTokensMap,
        chainId
    ]);
}
function useWarningTokens() {
    const warningTokensMap = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useWarningTokenList */ .c6)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>mapWithoutUrls(warningTokensMap, chainId), [
        warningTokensMap,
        chainId
    ]);
}
function useIsTokenActive(token) {
    const activeTokens = useAllTokens();
    if (!activeTokens || !token) {
        return false;
    }
    return !!activeTokens[token.address];
}
// Check if currency is included in custom list from user storage
function useIsUserAddedToken(currency) {
    const userAddedTokens = (0,_state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    if (!currency) {
        return false;
    }
    return !!userAddedTokens.find((token)=>currency?.equals(token));
}
// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/;
function parseStringOrBytes32(str, bytes32, defaultValue) {
    return str && str.length > 0 ? str : bytes32 && BYTES32_REGEX.test(bytes32) && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(bytes32)[31] === 0 ? (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.parseBytes32String)(bytes32) : defaultValue;
}
// undefined if invalid or does not exist
// null if loading
// otherwise returns the token
function useToken(tokenAddress) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const tokens = useAllTokens();
    const address = (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isAddress */ .UJ)(tokenAddress);
    const tokenContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_11__/* .useTokenContract */ .Ib)(address || undefined, false);
    const tokenContractBytes32 = (0,_useContract__WEBPACK_IMPORTED_MODULE_11__/* .useBytes32TokenContract */ .gs)(address || undefined, false);
    const token = address ? tokens[address] : undefined;
    const tokenName = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContract, "name", undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .NEVER_RELOAD */ .DB);
    const tokenNameBytes32 = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContractBytes32, "name", undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .NEVER_RELOAD */ .DB);
    const symbol = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContract, "symbol", undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .NEVER_RELOAD */ .DB);
    const symbolBytes32 = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContractBytes32, "symbol", undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .NEVER_RELOAD */ .DB);
    const decimals = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContract, "decimals", undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_8__/* .NEVER_RELOAD */ .DB);
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        if (token) return token;
        if (!chainId || !address) return undefined;
        if (decimals.loading || symbol.loading || tokenName.loading) return null;
        if (decimals.result) {
            return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ERC20Token(chainId, address, decimals.result[0], parseStringOrBytes32(symbol.result?.[0], symbolBytes32.result?.[0], "UNKNOWN"), parseStringOrBytes32(tokenName.result?.[0], tokenNameBytes32.result?.[0], "Unknown Token"));
        }
        return undefined;
    }, [
        address,
        chainId,
        decimals.loading,
        decimals.result,
        symbol.loading,
        symbol.result,
        symbolBytes32.result,
        token,
        tokenName.loading,
        tokenName.result,
        tokenNameBytes32.result, 
    ]);
}
function useCurrency(currencyId) {
    const native = (0,_useNativeCurrency__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const isNative = currencyId?.toUpperCase() === native.symbol?.toUpperCase() || currencyId?.toLowerCase() === config_constants__WEBPACK_IMPORTED_MODULE_3__/* .GELATO_NATIVE */ .ag;
    const token = useToken(isNative ? undefined : currencyId);
    return isNative ? native : token;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useNativeCurrency)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__]);
_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useNativeCurrency() {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        try {
            return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Native.onChain(chainId);
        } catch (e) {
            return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Native.onChain(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC);
        }
    }, [
        chainId
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jV": () => (/* binding */ COOKIE_THEME_KEY),
/* harmony export */   "zE": () => (/* binding */ THEME_DOMAIN)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const COOKIE_THEME_KEY = "theme";
const THEME_DOMAIN = ".pancakeswap.finance";
const useTheme = ()=>{
    const { resolvedTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    const handleSwitchTheme = (themeValue)=>{
        try {
            setTheme(themeValue);
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(COOKIE_THEME_KEY, themeValue, {
                domain: THEME_DOMAIN
            });
        } catch (err) {
        // ignore set cookie error for perp theme
        }
    };
    return {
        isDark: resolvedTheme === "dark",
        theme,
        setTheme: handleSwitchTheme
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dw": () => (/* binding */ multiChainPaths),
/* harmony export */   "Ho": () => (/* binding */ multiChainQueryEndPoint),
/* harmony export */   "J5": () => (/* binding */ checkIsStableSwap),
/* harmony export */   "OO": () => (/* binding */ multiChainBlocksClient),
/* harmony export */   "Pi": () => (/* binding */ multiChainId),
/* harmony export */   "WR": () => (/* binding */ multiChainQueryMainToken),
/* harmony export */   "YM": () => (/* binding */ multiChainStartTime),
/* harmony export */   "nA": () => (/* binding */ multiChainScan),
/* harmony export */   "rf": () => (/* binding */ getMultiChainQueryEndPointWithStableSwap),
/* harmony export */   "z2": () => (/* binding */ multiChainTokenBlackList)
/* harmony export */ });
/* unused harmony export multiChainQueryClient */
/* harmony import */ var utils_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25997);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10494);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43437);




const multiChainQueryMainToken = {
    BSC: "BNB",
    ETH: "ETH"
};
const multiChainBlocksClient = {
    BSC: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .BLOCKS_CLIENT */ .I0,
    ETH: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .BLOCKS_CLIENT_ETH */ .Hs
};
const multiChainStartTime = {
    BSC: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .PCS_V2_START */ .Rr,
    ETH: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .PCS_ETH_START */ .DY
};
const multiChainId = {
    BSC: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC,
    ETH: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM
};
const multiChainPaths = {
    [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC]: "",
    [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM]: "/eth"
};
const multiChainQueryClient = {
    BSC: utils_graphql__WEBPACK_IMPORTED_MODULE_0__/* .infoClient */ .dQ,
    ETH: utils_graphql__WEBPACK_IMPORTED_MODULE_0__/* .infoClientETH */ .GJ
};
const multiChainQueryEndPoint = {
    BSC: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .INFO_CLIENT */ .JY,
    ETH: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .INFO_CLIENT_ETH */ .EC
};
const multiChainScan = {
    BSC: "BscScan",
    ETH: "EtherScan"
};
const multiChainTokenBlackList = {
    BSC: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .TOKEN_BLACKLIST */ .tE,
    ETH: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .ETH_TOKEN_BLACKLIST */ .Vd
};
const getMultiChainQueryEndPointWithStableSwap = (chainName)=>{
    const isStableSwap = checkIsStableSwap();
    if (isStableSwap) return utils_graphql__WEBPACK_IMPORTED_MODULE_0__/* .infoStableSwapClient */ .MS;
    return multiChainQueryClient[chainName];
};
const checkIsStableSwap = ()=>window.location.href.includes("stableSwap");


/***/ }),

/***/ 87434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A$": () => (/* binding */ usePoolTransactionsSWR),
/* harmony export */   "H8": () => (/* binding */ useProtocolTransactionsSWR),
/* harmony export */   "Jj": () => (/* binding */ useTokenChartDataSWR),
/* harmony export */   "P6": () => (/* binding */ usePoolsForTokenSWR),
/* harmony export */   "QB": () => (/* binding */ useTokenPriceDataSWR),
/* harmony export */   "U1": () => (/* binding */ useStableSwapPath),
/* harmony export */   "Xx": () => (/* binding */ useProtocolChartDataSWR),
/* harmony export */   "ZF": () => (/* binding */ useTokenDatasSWR),
/* harmony export */   "b6": () => (/* binding */ useTokenDataSWR),
/* harmony export */   "ft": () => (/* binding */ useAllPoolDataSWR),
/* harmony export */   "gw": () => (/* binding */ usePoolDatasSWR),
/* harmony export */   "hb": () => (/* binding */ useMultiChainPath),
/* harmony export */   "hw": () => (/* binding */ useProtocolDataSWR),
/* harmony export */   "jF": () => (/* binding */ useAllTokenDataSWR),
/* harmony export */   "nT": () => (/* binding */ useTokenTransactionsSWR),
/* harmony export */   "qg": () => (/* binding */ useGetChainName),
/* harmony export */   "zo": () => (/* binding */ usePoolChartDataSWR)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_info_queries_pools_chartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34149);
/* harmony import */ var state_info_queries_pools_poolData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60979);
/* harmony import */ var state_info_queries_pools_transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84808);
/* harmony import */ var state_info_queries_protocol_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14274);
/* harmony import */ var state_info_queries_protocol_overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77980);
/* harmony import */ var state_info_queries_protocol_transactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9171);
/* harmony import */ var state_info_queries_tokens_chartData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93463);
/* harmony import */ var state_info_queries_tokens_poolsForToken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57806);
/* harmony import */ var state_info_queries_tokens_priceData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23594);
/* harmony import */ var state_info_queries_tokens_tokenData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67193);
/* harmony import */ var state_info_queries_tokens_transactions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73832);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79847);
/* harmony import */ var utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73806);
/* harmony import */ var views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15051);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_queries_pools_poolData__WEBPACK_IMPORTED_MODULE_4__, state_info_queries_protocol_chart__WEBPACK_IMPORTED_MODULE_6__, state_info_queries_protocol_overview__WEBPACK_IMPORTED_MODULE_7__, state_info_queries_tokens_tokenData__WEBPACK_IMPORTED_MODULE_12__, swr_immutable__WEBPACK_IMPORTED_MODULE_14__, views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__]);
([state_info_queries_pools_poolData__WEBPACK_IMPORTED_MODULE_4__, state_info_queries_protocol_chart__WEBPACK_IMPORTED_MODULE_6__, state_info_queries_protocol_overview__WEBPACK_IMPORTED_MODULE_7__, state_info_queries_tokens_tokenData__WEBPACK_IMPORTED_MODULE_12__, swr_immutable__WEBPACK_IMPORTED_MODULE_14__, views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















// Protocol hooks
const refreshIntervalForInfo = 15000 // 15s
;
const SWR_SETTINGS = {
    refreshInterval: refreshIntervalForInfo
};
const useProtocolDataSWR = ()=>{
    const chainName = useGetChainName();
    const [t24, t48] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_15__/* .getDeltaTimestamps */ .z)();
    const { blocks  } = (0,views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__/* .useBlockFromTimeStampSWR */ .T)([
        t24,
        t48
    ]);
    const [block24, block48] = blocks ?? [];
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data: protocolData  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])(chainName && block24 && block48 ? [
        `info/protocol/updateProtocolData/${type}`,
        chainName
    ] : null, ()=>(0,state_info_queries_protocol_overview__WEBPACK_IMPORTED_MODULE_7__/* .fetchProtocolData */ .z)(chainName, block24, block48));
    return protocolData ?? undefined;
};
const useProtocolChartDataSWR = ()=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data: chartData  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/protocol/updateProtocolChartData/${type}`,
        chainName
    ], ()=>(0,state_info_queries_protocol_chart__WEBPACK_IMPORTED_MODULE_6__/* .fetchGlobalChartData */ .g)(chainName));
    return chartData ?? undefined;
};
const useProtocolTransactionsSWR = ()=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data: transactions  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/protocol/updateProtocolTransactionsData/${type}`,
        chainName
    ], ()=>(0,state_info_queries_protocol_transactions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(chainName), SWR_SETTINGS);
    return transactions ?? undefined;
};
const useAllPoolDataSWR = ()=>{
    const chainName = useGetChainName();
    const [t24h, t48h, t7d, t14d] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_15__/* .getDeltaTimestamps */ .z)();
    const { blocks  } = (0,views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__/* .useBlockFromTimeStampSWR */ .T)([
        t24h,
        t48h,
        t7d,
        t14d
    ]);
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])(blocks && chainName && [
        `info/pools/data/${type}`,
        chainName
    ], ()=>(0,state_info_queries_pools_poolData__WEBPACK_IMPORTED_MODULE_4__/* .fetchAllPoolData */ .d7)(blocks, chainName));
    return data ?? {};
};
const usePoolDatasSWR = (poolAddresses)=>{
    const name = poolAddresses.join("");
    const chainName = useGetChainName();
    const [t24h, t48h, t7d, t14d] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_15__/* .getDeltaTimestamps */ .z)();
    const { blocks  } = (0,views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__/* .useBlockFromTimeStampSWR */ .T)([
        t24h,
        t48h,
        t7d,
        t14d
    ]);
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])(blocks && chainName && [
        `info/pool/data/${name}`,
        chainName
    ], ()=>(0,state_info_queries_pools_poolData__WEBPACK_IMPORTED_MODULE_4__/* .fetchAllPoolDataWithAddress */ .HA)(blocks, chainName, poolAddresses), SWR_SETTINGS);
    const poolsWithData = poolAddresses.map((address)=>{
        return data?.[address]?.data;
    }).filter((pool)=>pool);
    return poolsWithData;
};
const usePoolChartDataSWR = (address)=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/pool/chartData/${address}/${type}`,
        chainName
    ], ()=>(0,state_info_queries_pools_chartData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(chainName, address));
    return data?.data ?? undefined;
};
const usePoolTransactionsSWR = (address)=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/pool/transactionsData/${address}/${type}`,
        chainName
    ], ()=>(0,state_info_queries_pools_transactions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(chainName, address), SWR_SETTINGS);
    return data?.data ?? undefined;
};
// Tokens hooks
const useAllTokenDataSWR = ()=>{
    const chainName = useGetChainName();
    const [t24h, t48h, t7d, t14d] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_15__/* .getDeltaTimestamps */ .z)();
    const { blocks  } = (0,views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__/* .useBlockFromTimeStampSWR */ .T)([
        t24h,
        t48h,
        t7d,
        t14d
    ]);
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])(blocks && chainName && [
        `info/token/data/${type}`,
        chainName
    ], ()=>(0,state_info_queries_tokens_tokenData__WEBPACK_IMPORTED_MODULE_12__/* .fetchAllTokenData */ .bN)(chainName, blocks));
    return data ?? {};
};
const useTokenDatasSWR = (addresses)=>{
    const name = addresses.join("");
    const chainName = useGetChainName();
    const [t24h, t48h, t7d, t14d] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_15__/* .getDeltaTimestamps */ .z)();
    const { blocks  } = (0,views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_16__/* .useBlockFromTimeStampSWR */ .T)([
        t24h,
        t48h,
        t7d,
        t14d
    ]);
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])(blocks && chainName && [
        `info/token/data/${name}`,
        chainName
    ], ()=>(0,state_info_queries_tokens_tokenData__WEBPACK_IMPORTED_MODULE_12__/* .fetchAllTokenDataByAddresses */ ._X)(chainName, blocks, addresses), SWR_SETTINGS);
    const tokensWithData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!addresses) {
            return undefined;
        }
        return addresses.map((a)=>{
            return data?.[a]?.data;
        }).filter((d)=>d && d.exists);
    }, [
        addresses,
        data
    ]);
    return tokensWithData ?? undefined;
};
const useTokenDataSWR = (address)=>{
    const allTokenData = useTokenDatasSWR([
        address
    ]);
    return allTokenData.find((d)=>d.address === address) ?? undefined;
};
const usePoolsForTokenSWR = (address)=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/token/poolAddress/${address}/${type}`,
        chainName
    ], ()=>(0,state_info_queries_tokens_poolsForToken__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(chainName, address));
    return data?.addresses ?? undefined;
};
const useTokenChartDataSWR = (address)=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])(address && chainName && [
        `info/token/chartData/${address}/${type}`,
        chainName
    ], ()=>(0,state_info_queries_tokens_chartData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(chainName, address), SWR_SETTINGS);
    return data?.data ?? undefined;
};
const useTokenPriceDataSWR = (address, interval, timeWindow)=>{
    const utcCurrentTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)(new Date()) * 1000;
    const startTimestamp = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfHour)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.sub)(utcCurrentTime, timeWindow)));
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/token/priceData/${address}/${type}`,
        chainName
    ], ()=>(0,state_info_queries_tokens_priceData__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(chainName, address, interval, startTimestamp), SWR_SETTINGS);
    return data?.data ?? undefined;
};
const useTokenTransactionsSWR = (address)=>{
    const chainName = useGetChainName();
    const type = (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "stableSwap" : "swap";
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_14__["default"])([
        `info/token/transactionsData/${address}/${type}`,
        chainName
    ], ()=>(0,state_info_queries_tokens_transactions__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(chainName, address), SWR_SETTINGS);
    return data?.data ?? undefined;
};
const useGetChainName = ()=>{
    const path = window.location.href;
    const getChain = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (path.includes("eth") || path.includes("chainId=1")) return "ETH";
        return "BSC";
    }, [
        path
    ]);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getChain());
    const result = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>name, [
        name
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setName(getChain());
    }, [
        getChain
    ]);
    return result;
};
const useMultiChainPath = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { chainName  } = router.query;
    return chainName ? `/${chainName}` : "";
};
const useStableSwapPath = ()=>{
    return (0,_constant__WEBPACK_IMPORTED_MODULE_17__/* .checkIsStableSwap */ .J5)() ? "?type=stableSwap" : "";
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ mapSwaps),
/* harmony export */   "Hr": () => (/* binding */ fetchChartData),
/* harmony export */   "Iq": () => (/* binding */ mapPairDayData),
/* harmony export */   "_h": () => (/* binding */ mapBurns),
/* harmony export */   "k9": () => (/* binding */ mapMints),
/* harmony export */   "sL": () => (/* binding */ fetchChartDataWithAddress),
/* harmony export */   "v5": () => (/* binding */ mapDayData)
/* harmony export */ });
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43437);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_info_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29209);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79467);





const mapMints = (mint)=>{
    return {
        type: state_info_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionType.MINT */ .i.MINT,
        hash: mint.id.split("-")[0],
        timestamp: mint.timestamp,
        sender: mint.to,
        token0Symbol: mint.pair.token0.symbol,
        token1Symbol: mint.pair.token1.symbol,
        token0Address: mint.pair.token0.id,
        token1Address: mint.pair.token1.id,
        amountUSD: parseFloat(mint.amountUSD),
        amountToken0: parseFloat(mint.amount0),
        amountToken1: parseFloat(mint.amount1)
    };
};
const mapBurns = (burn)=>{
    return {
        type: state_info_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionType.BURN */ .i.BURN,
        hash: burn.id.split("-")[0],
        timestamp: burn.timestamp,
        sender: burn.sender,
        token0Symbol: burn.pair.token0.symbol,
        token1Symbol: burn.pair.token1.symbol,
        token0Address: burn.pair.token0.id,
        token1Address: burn.pair.token1.id,
        amountUSD: parseFloat(burn.amountUSD),
        amountToken0: parseFloat(burn.amount0),
        amountToken1: parseFloat(burn.amount1)
    };
};
const mapSwaps = (swap)=>{
    return {
        type: state_info_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionType.SWAP */ .i.SWAP,
        hash: swap.id.split("-")[0],
        timestamp: swap.timestamp,
        sender: swap.from,
        token0Symbol: swap.pair.token0.symbol,
        token1Symbol: swap.pair.token1.symbol,
        token0Address: swap.pair.token0.id,
        token1Address: swap.pair.token1.id,
        amountUSD: parseFloat(swap.amountUSD),
        amountToken0: parseFloat(swap.amount0In) - parseFloat(swap.amount0Out),
        amountToken1: parseFloat(swap.amount1In) - parseFloat(swap.amount1Out)
    };
};
const mapDayData = (tokenDayData)=>({
        date: tokenDayData.date,
        volumeUSD: parseFloat(tokenDayData.dailyVolumeUSD),
        liquidityUSD: parseFloat(tokenDayData.totalLiquidityUSD)
    });
const mapPairDayData = (pairDayData)=>({
        date: pairDayData.date,
        volumeUSD: parseFloat(pairDayData.dailyVolumeUSD),
        liquidityUSD: parseFloat(pairDayData.reserveUSD)
    });
// Common helper function to retrieve chart data
// Used for both Pool and Token charts
const fetchChartData = async (chainName, getEntityDayDatas)=>{
    let chartEntries = [];
    let error = false;
    let skip = 0;
    let allFound = false;
    while(!allFound){
        // eslint-disable-next-line no-await-in-loop
        const { data , error: fetchError  } = await getEntityDayDatas(chainName, skip);
        skip += 1000;
        allFound = data?.length < 1000;
        error = fetchError;
        if (data) {
            chartEntries = chartEntries.concat(data);
        }
    }
    if (error || chartEntries.length === 0) {
        return {
            error: true
        };
    }
    const formattedDayDatas = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_0___default()(chartEntries.map((dayData)=>{
        // At this stage we track unix day ordinal for each data point to check for empty days later
        const dayOrdinal = parseInt((dayData.date / config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq).toFixed(0));
        return [
            dayOrdinal,
            dayData
        ];
    }));
    console.warn(formattedDayDatas);
    const availableDays = Object.keys(formattedDayDatas).map((dayOrdinal)=>parseInt(dayOrdinal, 10));
    const firstAvailableDayData = formattedDayDatas[availableDays[0]];
    // fill in empty days ( there will be no day datas if no trades made that day )
    let timestamp = firstAvailableDayData?.date ?? _constant__WEBPACK_IMPORTED_MODULE_3__/* .multiChainStartTime */ .YM[chainName];
    let latestLiquidityUSD = firstAvailableDayData?.liquidityUSD ?? 0;
    const endTimestamp = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.getUnixTime)(new Date());
    while(timestamp < endTimestamp - config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq){
        timestamp += config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq;
        const dayOrdinal = parseInt((timestamp / config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq).toFixed(0), 10);
        if (!Object.keys(formattedDayDatas).includes(dayOrdinal.toString())) {
            formattedDayDatas[dayOrdinal] = {
                date: timestamp,
                volumeUSD: 0,
                liquidityUSD: latestLiquidityUSD
            };
        } else {
            latestLiquidityUSD = formattedDayDatas[dayOrdinal].liquidityUSD;
        }
    }
    return {
        data: Object.values(formattedDayDatas),
        error: false
    };
};
const fetchChartDataWithAddress = async (chainName, getEntityDayDatas, address)=>{
    let chartEntries = [];
    let error = false;
    let skip = 0;
    let allFound = false;
    while(!allFound){
        // eslint-disable-next-line no-await-in-loop
        const { data , error: fetchError  } = await getEntityDayDatas(chainName, skip, address);
        skip += 1000;
        allFound = data?.length < 1000;
        error = fetchError;
        if (data) {
            chartEntries = chartEntries.concat(data);
        }
    }
    if (error || chartEntries.length === 0) {
        return {
            error: true
        };
    }
    const formattedDayDatas = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_0___default()(chartEntries.map((dayData)=>{
        // At this stage we track unix day ordinal for each data point to check for empty days later
        const dayOrdinal = parseInt((dayData.date / config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq).toFixed(0));
        return [
            dayOrdinal,
            dayData
        ];
    }));
    console.warn(formattedDayDatas);
    const availableDays = Object.keys(formattedDayDatas).map((dayOrdinal)=>parseInt(dayOrdinal, 10));
    const firstAvailableDayData = formattedDayDatas[availableDays[0]];
    // fill in empty days ( there will be no day datas if no trades made that day )
    let timestamp = firstAvailableDayData?.date ?? _constant__WEBPACK_IMPORTED_MODULE_3__/* .multiChainStartTime */ .YM[chainName];
    let latestLiquidityUSD = firstAvailableDayData?.liquidityUSD ?? 0;
    const endTimestamp = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.getUnixTime)(new Date());
    while(timestamp < endTimestamp - config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq){
        timestamp += config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq;
        const dayOrdinal = parseInt((timestamp / config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .ONE_DAY_UNIX */ .Bq).toFixed(0), 10);
        if (!Object.keys(formattedDayDatas).includes(dayOrdinal.toString())) {
            formattedDayDatas[dayOrdinal] = {
                date: timestamp,
                volumeUSD: 0,
                liquidityUSD: latestLiquidityUSD
            };
        } else {
            latestLiquidityUSD = formattedDayDatas[dayOrdinal].liquidityUSD;
        }
    }
    return {
        data: Object.values(formattedDayDatas),
        error: false
    };
};


/***/ }),

/***/ 34149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95379);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);



const getPoolChartData = async (chainName, skip, address)=>{
    try {
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
      query pairDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
        pairDayDatas(
          first: 1000
          skip: $skip
          where: { pairAddress: $address, date_gt: $startTime }
          orderBy: date
          orderDirection: asc
        ) {
          date
          dailyVolumeUSD
          reserveUSD
        }
      }
    `;
        const { pairDayDatas  } = await (0,_constant__WEBPACK_IMPORTED_MODULE_2__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query, {
            startTime: _constant__WEBPACK_IMPORTED_MODULE_2__/* .multiChainStartTime */ .YM[chainName],
            skip,
            address
        });
        const data = pairDayDatas.map(_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapPairDayData */ .Iq);
        return {
            data,
            error: false
        };
    } catch (error) {
        console.error("Failed to fetch pool chart data", error);
        return {
            error: true
        };
    }
};
const fetchPoolChartData = async (chainName, address)=>{
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__/* .fetchChartDataWithAddress */ .sL)(chainName, getPoolChartData, address);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPoolChartData);


/***/ }),

/***/ 60979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HA": () => (/* binding */ fetchAllPoolDataWithAddress),
/* harmony export */   "d7": () => (/* binding */ fetchAllPoolData),
/* harmony export */   "jf": () => (/* binding */ fetchPoolData)
/* harmony export */ });
/* unused harmony export parsePoolData */
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41485);
/* harmony import */ var utils_getLpFeesAndApr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78030);
/* harmony import */ var utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73806);
/* harmony import */ var views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15051);
/* harmony import */ var views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48608);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87434);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79467);
/* harmony import */ var _topPools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25607);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__, _topPools__WEBPACK_IMPORTED_MODULE_6__]);
([views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__, _topPools__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-param-reassign */ 









/**
 * Data for displaying pool tables (on multiple pages, used throughout the site)
 * Note: Don't try to refactor it to use variables, server throws error if blocks passed as undefined variable
 * only works if its hard-coded into query string
 */ const POOL_AT_BLOCK = (chainName, block, pools)=>{
    const blockString = block ? `block: {number: ${block}}` : ``;
    const addressesString = `["${pools.join('","')}"]`;
    return `pairs(
    where: { id_in: ${addressesString} }
    ${blockString}
    orderBy: trackedReserve${_constant__WEBPACK_IMPORTED_MODULE_5__/* .multiChainQueryMainToken */ .WR[chainName]}
    orderDirection: desc
  ) {
    id
    reserve0
    reserve1
    reserveUSD
    volumeUSD
    token0Price
    token1Price
    token0 {
      id
      symbol
      name
    }
    token1 {
      id
      symbol
      name
    }
  }`;
};
const fetchPoolData = async (block24h, block48h, block7d, block14d, poolAddresses, chainName = "BSC")=>{
    const weeksQuery = chainName === "BSC" ? `twoWeeksAgo: ${POOL_AT_BLOCK(chainName, block14d, poolAddresses)}` : "";
    try {
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
      query pools {
        now: ${POOL_AT_BLOCK(chainName, null, poolAddresses)}
        oneDayAgo: ${POOL_AT_BLOCK(chainName, block24h, poolAddresses)}
        twoDaysAgo: ${POOL_AT_BLOCK(chainName, block48h, poolAddresses)}
        oneWeekAgo: ${POOL_AT_BLOCK(chainName, block7d, poolAddresses)}
        ${weeksQuery}
      }
    `;
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_5__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query);
        return {
            data,
            error: false
        };
    } catch (error) {
        console.error("Failed to fetch pool data", error);
        return {
            error: true
        };
    }
};
// Transforms pools into "0xADDRESS: { ...PoolFields }" format and cast strings to numbers
const parsePoolData = (pairs)=>{
    if (!pairs) {
        return {};
    }
    return pairs.reduce((accum, poolData)=>{
        const { volumeUSD , reserveUSD , reserve0 , reserve1 , token0Price , token1Price  } = poolData;
        accum[poolData.id] = {
            ...poolData,
            volumeUSD: parseFloat(volumeUSD),
            reserveUSD: parseFloat(reserveUSD),
            reserve0: parseFloat(reserve0),
            reserve1: parseFloat(reserve1),
            token0Price: parseFloat(token0Price),
            token1Price: parseFloat(token1Price)
        };
        return accum;
    }, {});
};
/**
 * Fetch top pools by liquidity
 */ const usePoolDatas = (poolAddresses)=>{
    const { 0: fetchState , 1: setFetchState  } = useState({
        error: false
    });
    const [t24h, t48h, t7d, t14d] = getDeltaTimestamps();
    const { blocks , error: blockError  } = useBlocksFromTimestamps([
        t24h,
        t48h,
        t7d,
        t14d
    ]);
    const [block24h, block48h, block7d, block14d] = blocks ?? [];
    const chainName = useGetChainName();
    useEffect(()=>{
        const fetch = async ()=>{
            const { error , data  } = await fetchPoolData(block24h.number, block48h.number, block7d.number, block14d.number, poolAddresses, chainName);
            if (error) {
                setFetchState({
                    error: true
                });
            } else {
                const formattedPoolData = parsePoolData(data?.now);
                const formattedPoolData24h = parsePoolData(data?.oneDayAgo);
                const formattedPoolData48h = parsePoolData(data?.twoDaysAgo);
                const formattedPoolData7d = parsePoolData(data?.oneWeekAgo);
                const formattedPoolData14d = parsePoolData(data?.twoWeeksAgo);
                // Calculate data and format
                const formatted = poolAddresses.reduce((accum, address)=>{
                    // Undefined data is possible if pool is brand new and didn't exist one day ago or week ago.
                    const current = formattedPoolData[address];
                    const oneDay = formattedPoolData24h[address];
                    const twoDays = formattedPoolData48h[address];
                    const week = formattedPoolData7d[address];
                    const twoWeeks = formattedPoolData14d[address];
                    const [volumeUSD, volumeUSDChange] = getChangeForPeriod(current?.volumeUSD, oneDay?.volumeUSD, twoDays?.volumeUSD);
                    const [volumeUSDWeek, volumeUSDChangeWeek] = getChangeForPeriod(current?.volumeUSD, week?.volumeUSD, twoWeeks?.volumeUSD);
                    const liquidityUSD = current ? current.reserveUSD : 0;
                    const liquidityUSDChange = getPercentChange(current?.reserveUSD, oneDay?.reserveUSD);
                    const liquidityToken0 = current ? current.reserve0 : 0;
                    const liquidityToken1 = current ? current.reserve1 : 0;
                    const { totalFees24h , totalFees7d , lpFees24h , lpFees7d , lpApr7d  } = getLpFeesAndApr(volumeUSD, volumeUSDWeek, liquidityUSD);
                    if (current) {
                        accum[address] = {
                            address,
                            token0: {
                                address: current.token0.id,
                                name: current.token0.name,
                                symbol: current.token0.symbol
                            },
                            token1: {
                                address: current.token1.id,
                                name: current.token1.name,
                                symbol: current.token1.symbol
                            },
                            token0Price: current.token0Price,
                            token1Price: current.token1Price,
                            volumeUSD,
                            volumeUSDChange,
                            volumeUSDWeek,
                            volumeUSDChangeWeek,
                            totalFees24h,
                            totalFees7d,
                            lpFees24h,
                            lpFees7d,
                            lpApr7d,
                            liquidityUSD,
                            liquidityUSDChange,
                            liquidityToken0,
                            liquidityToken1
                        };
                    }
                    return accum;
                }, {});
                setFetchState({
                    data: formatted,
                    error: false
                });
            }
        };
        const allBlocksAvailable = block24h?.number && block48h?.number && block7d?.number && block14d?.number;
        if (poolAddresses.length > 0 && allBlocksAvailable && !blockError) {
            fetch();
        }
    }, [
        poolAddresses,
        block24h,
        block48h,
        block7d,
        block14d,
        blockError,
        chainName
    ]);
    return fetchState;
};
const fetchAllPoolDataWithAddress = async (blocks, chainName, poolAddresses)=>{
    const [block24h, block48h, block7d, block14d] = blocks ?? [];
    const { data  } = await fetchPoolData(block24h.number, block48h.number, block7d.number, block14d.number, poolAddresses, chainName);
    const formattedPoolData = parsePoolData(data?.now);
    const formattedPoolData24h = parsePoolData(data?.oneDayAgo);
    const formattedPoolData48h = parsePoolData(data?.twoDaysAgo);
    const formattedPoolData7d = parsePoolData(data?.oneWeekAgo);
    const formattedPoolData14d = parsePoolData(data?.twoWeeksAgo);
    // Calculate data and format
    const formatted = poolAddresses.reduce((accum, address)=>{
        // Undefined data is possible if pool is brand new and didn't exist one day ago or week ago.
        const current = formattedPoolData[address];
        const oneDay = formattedPoolData24h[address];
        const twoDays = formattedPoolData48h[address];
        const week = formattedPoolData7d[address];
        const twoWeeks = formattedPoolData14d[address];
        const [volumeUSD, volumeUSDChange] = (0,utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_7__/* .getChangeForPeriod */ .T)(current?.volumeUSD, oneDay?.volumeUSD, twoDays?.volumeUSD);
        const [volumeUSDWeek, volumeUSDChangeWeek] = (0,utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_7__/* .getChangeForPeriod */ .T)(current?.volumeUSD, week?.volumeUSD, twoWeeks?.volumeUSD);
        const liquidityUSD = current ? current.reserveUSD : 0;
        const liquidityUSDChange = (0,views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getPercentChange */ .Y)(current?.reserveUSD, oneDay?.reserveUSD);
        const liquidityToken0 = current ? current.reserve0 : 0;
        const liquidityToken1 = current ? current.reserve1 : 0;
        const { totalFees24h , totalFees7d , lpFees24h , lpFees7d , lpApr7d  } = (0,utils_getLpFeesAndApr__WEBPACK_IMPORTED_MODULE_9__/* .getLpFeesAndApr */ .z)(volumeUSD, volumeUSDWeek, liquidityUSD);
        if (current) {
            accum[address] = {
                data: {
                    address,
                    token0: {
                        address: current.token0.id,
                        name: current.token0.name,
                        symbol: current.token0.symbol
                    },
                    token1: {
                        address: current.token1.id,
                        name: current.token1.name,
                        symbol: current.token1.symbol
                    },
                    token0Price: current.token0Price,
                    token1Price: current.token1Price,
                    volumeUSD,
                    volumeUSDChange,
                    volumeUSDWeek,
                    volumeUSDChangeWeek,
                    totalFees24h,
                    totalFees7d,
                    lpFees24h,
                    lpFees7d,
                    lpApr7d,
                    liquidityUSD,
                    liquidityUSDChange,
                    liquidityToken0,
                    liquidityToken1
                }
            };
        }
        return accum;
    }, {});
    return formatted;
};
const fetchAllPoolData = async (blocks, chainName)=>{
    const poolAddresses = await (0,_topPools__WEBPACK_IMPORTED_MODULE_6__/* .fetchTopPoolAddresses */ .w)(chainName);
    return fetchAllPoolDataWithAddress(blocks, chainName, poolAddresses);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (usePoolDatas)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ fetchTopPoolAddresses)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73806);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79467);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_4__]);
_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * Initial pools to display on the home page
 */ const fetchTopPools = async (chainName, timestamp24hAgo)=>{
    const isStableSwap = (0,_constant__WEBPACK_IMPORTED_MODULE_3__/* .checkIsStableSwap */ .J5)();
    let whereCondition = chainName === "BSC" ? `where: { dailyTxns_gt: 300, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: ${timestamp24hAgo} }` : `where: { date_gt: ${timestamp24hAgo}, token0_not_in: $blacklist, token1_not_in: $blacklist, dailyVolumeUSD_gt: 2000 }`;
    if (isStableSwap) whereCondition = "";
    try {
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
      query topPools($blacklist: [String!]) {
        pairDayDatas(
          first: 30
          ${whereCondition}
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `;
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_3__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query, {
            blacklist: _constant__WEBPACK_IMPORTED_MODULE_3__/* .multiChainTokenBlackList */ .z2[chainName]
        });
        // pairDayDatas id has compound id "0xPOOLADDRESS-NUMBERS", extracting pool address with .split('-')
        return data.pairDayDatas.map((p)=>p.id.split("-")[0]);
    } catch (error) {
        console.error("Failed to fetch top pools", error);
        return [];
    }
};
/**
 * Fetch top addresses by volume
 */ const useTopPoolAddresses = ()=>{
    const { 0: topPoolAddresses , 1: setTopPoolAddresses  } = useState([]);
    const [timestamp24hAgo] = getDeltaTimestamps();
    const chainName = useGetChainName();
    useEffect(()=>{
        const fetch = async ()=>{
            const addresses = await fetchTopPools(chainName, timestamp24hAgo);
            setTopPoolAddresses(addresses);
        };
        if (topPoolAddresses.length === 0) {
            fetch();
        }
    }, [
        topPoolAddresses,
        timestamp24hAgo,
        chainName
    ]);
    return topPoolAddresses;
};
const fetchTopPoolAddresses = async (chainName)=>{
    const [timestamp24hAgo] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__/* .getDeltaTimestamps */ .z)();
    const addresses = await fetchTopPools(chainName, timestamp24hAgo);
    return addresses;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useTopPoolAddresses)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95379);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);



/**
 * Transactions of the given pool, used on Pool page
 */ const POOL_TRANSACTIONS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query poolTransactions($address: Bytes!) {
    mints(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      to
      amount0
      amount1
      amountUSD
    }
    swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
    burns(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
    }
  }
`;
const fetchPoolTransactions = async (chainName, address)=>{
    try {
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_2__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(POOL_TRANSACTIONS, {
            address
        });
        const mints = data.mints.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapMints */ .k9);
        const burns = data.burns.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapBurns */ ._h);
        const swaps = data.swaps.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapSwaps */ .H_);
        return {
            data: [
                ...mints,
                ...burns,
                ...swaps
            ],
            error: false
        };
    } catch (error) {
        console.error(`Failed to fetch transactions for pool ${address}`, error);
        return {
            error: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPoolTransactions);


/***/ }),

/***/ 14274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ fetchGlobalChartData)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95379);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79467);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_4__]);
_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-await-in-loop */ 




/**
 * Data for displaying Liquidity and Volume charts on Overview page
 */ const PANCAKE_DAY_DATAS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query overviewCharts($startTime: Int!, $skip: Int!) {
    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {
      date
      dailyVolumeUSD
      totalLiquidityUSD
    }
  }
`;
const getOverviewChartData = async (chainName, skip)=>{
    try {
        const { pancakeDayDatas  } = await (0,_constant__WEBPACK_IMPORTED_MODULE_3__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(PANCAKE_DAY_DATAS, {
            startTime: _constant__WEBPACK_IMPORTED_MODULE_3__/* .multiChainStartTime */ .YM[chainName],
            skip
        });
        const data = pancakeDayDatas.map(_helpers__WEBPACK_IMPORTED_MODULE_2__/* .mapDayData */ .v5);
        return {
            data,
            error: false
        };
    } catch (error) {
        console.error("Failed to fetch overview chart data", error);
        return {
            error: true
        };
    }
};
/**
 * Fetch historic chart data
 */ const useFetchGlobalChartData = ()=>{
    const { 0: overviewChartData , 1: setOverviewChartData  } = useState();
    const { 0: error , 1: setError  } = useState(false);
    const chainName = useGetChainName();
    useEffect(()=>{
        const fetch = async ()=>{
            const { data  } = await fetchChartData(chainName, getOverviewChartData);
            if (data) {
                setOverviewChartData(data);
            } else {
                setError(true);
            }
        };
        if (!overviewChartData && !error) {
            fetch();
        }
    }, [
        overviewChartData,
        error,
        chainName
    ]);
    return {
        error,
        data: overviewChartData
    };
};
const fetchGlobalChartData = async (chainName)=>{
    const { data  } = await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .fetchChartData */ .Hr)(chainName, getOverviewChartData);
    return data;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useFetchGlobalChartData)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ fetchProtocolData)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41485);
/* harmony import */ var utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73806);
/* harmony import */ var views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15051);
/* harmony import */ var views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48608);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79467);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








/**
 * Latest Liquidity, Volume and Transaction count
 */ const getOverviewData = async (chainName, block)=>{
    const factoryString = (0,_constant__WEBPACK_IMPORTED_MODULE_4__/* .checkIsStableSwap */ .J5)() ? `factories` : `pancakeFactories`;
    try {
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`query overview {
      ${factoryString}(
        ${block ? `block: { number: ${block}}` : ``}
        first: 1) {
        totalTransactions
        totalVolumeUSD
        totalLiquidityUSD
      }
    }`;
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_4__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query);
        return {
            data,
            error: false
        };
    } catch (error) {
        console.error("Failed to fetch info overview", error);
        return {
            data: null,
            error: true
        };
    }
};
const formatPancakeFactoryResponse = (rawPancakeFactory)=>{
    if (rawPancakeFactory) {
        return {
            totalTransactions: parseFloat(rawPancakeFactory.totalTransactions),
            totalVolumeUSD: parseFloat(rawPancakeFactory.totalVolumeUSD),
            totalLiquidityUSD: parseFloat(rawPancakeFactory.totalLiquidityUSD)
        };
    }
    return null;
};
const useFetchProtocolData = ()=>{
    const { 0: fetchState , 1: setFetchState  } = useState({
        error: false
    });
    const [t24, t48] = getDeltaTimestamps();
    const { blocks , error: blockError  } = useBlocksFromTimestamps([
        t24,
        t48
    ]);
    const [block24, block48] = blocks ?? [];
    const chainName = useGetChainName();
    useEffect(()=>{
        const fetchData = async ()=>{
            const [{ error , data  }, { error: error24 , data: data24  }, { error: error48 , data: data48  }] = await Promise.all([
                getOverviewData(chainName),
                getOverviewData(chainName, block24?.number ?? undefined),
                getOverviewData(chainName, block48?.number ?? undefined), 
            ]);
            const anyError = error || error24 || error48;
            const overviewData = formatPancakeFactoryResponse(data?.pancakeFactories?.[0]);
            const overviewData24 = formatPancakeFactoryResponse(data24?.pancakeFactories?.[0]);
            const overviewData48 = formatPancakeFactoryResponse(data48?.pancakeFactories?.[0]);
            const allDataAvailable = overviewData && overviewData24 && overviewData48;
            if (anyError || !allDataAvailable) {
                setFetchState({
                    error: true
                });
            } else {
                const [volumeUSD, volumeUSDChange] = getChangeForPeriod(overviewData.totalVolumeUSD, overviewData24.totalVolumeUSD, overviewData48.totalVolumeUSD);
                const liquidityUSDChange = getPercentChange(overviewData.totalLiquidityUSD, overviewData24.totalLiquidityUSD);
                // 24H transactions
                const [txCount, txCountChange] = getChangeForPeriod(overviewData.totalTransactions, overviewData24.totalTransactions, overviewData48.totalTransactions);
                const protocolData = {
                    volumeUSD,
                    volumeUSDChange: typeof volumeUSDChange === "number" ? volumeUSDChange : 0,
                    liquidityUSD: overviewData.totalLiquidityUSD,
                    liquidityUSDChange,
                    txCount,
                    txCountChange
                };
                setFetchState({
                    error: false,
                    data: protocolData
                });
            }
        };
        const allBlocksAvailable = block24?.number && block48?.number;
        if (allBlocksAvailable && !blockError && !fetchState.data) {
            fetchData();
        }
    }, [
        block24,
        block48,
        blockError,
        fetchState,
        chainName
    ]);
    return fetchState;
};
const fetchProtocolData = async (chainName, block24, block48)=>{
    const [{ data  }, { data: data24  }, { data: data48  }] = await Promise.all([
        getOverviewData(chainName),
        getOverviewData(chainName, block24?.number ?? undefined),
        getOverviewData(chainName, block48?.number ?? undefined), 
    ]);
    if (data.factories && data.factories.length > 0) data.pancakeFactories = data.factories;
    if (data24.factories && data24.factories.length > 0) data24.pancakeFactories = data24.factories;
    if (data48.factories && data48.factories.length > 0) data48.pancakeFactories = data48.factories;
    // const anyError = error || error24 || error48
    const overviewData = formatPancakeFactoryResponse(data?.pancakeFactories?.[0]);
    const overviewData24 = formatPancakeFactoryResponse(data24?.pancakeFactories?.[0]);
    const overviewData48 = formatPancakeFactoryResponse(data48?.pancakeFactories?.[0]);
    // const allDataAvailable = overviewData && overviewData24 && overviewData48
    const [volumeUSD, volumeUSDChange] = (0,utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_6__/* .getChangeForPeriod */ .T)(overviewData.totalVolumeUSD, overviewData24.totalVolumeUSD, overviewData48.totalVolumeUSD);
    const liquidityUSDChange = (0,views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getPercentChange */ .Y)(overviewData.totalLiquidityUSD, overviewData24.totalLiquidityUSD);
    // 24H transactions
    const [txCount, txCountChange] = (0,utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_6__/* .getChangeForPeriod */ .T)(overviewData.totalTransactions, overviewData24.totalTransactions, overviewData48.totalTransactions);
    const protocolData = {
        volumeUSD,
        volumeUSDChange: typeof volumeUSDChange === "number" ? volumeUSDChange : 0,
        liquidityUSD: overviewData.totalLiquidityUSD,
        liquidityUSDChange,
        txCount,
        txCountChange
    };
    return protocolData;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useFetchProtocolData)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95379);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);



/**
 * Transactions for Transaction table on the Home page
 */ const GLOBAL_TRANSACTIONS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query overviewTransactions {
    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      to
      amount0
      amount1
      amountUSD
    }
    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
    }
  }
`;
const fetchTopTransactions = async (chainName)=>{
    try {
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_2__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(GLOBAL_TRANSACTIONS);
        if (!data) {
            return undefined;
        }
        const mints = data.mints.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapMints */ .k9);
        const burns = data.burns.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapBurns */ ._h);
        const swaps = data.swaps.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapSwaps */ .H_);
        return [
            ...mints,
            ...burns,
            ...swaps
        ].sort((a, b)=>{
            return parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10);
        });
    } catch  {
        return undefined;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTopTransactions);


/***/ }),

/***/ 93463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95379);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);



const getTokenChartData = async (chainName, skip, address)=>{
    try {
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
      query tokenDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
        tokenDayDatas(
          first: 1000
          skip: $skip
          where: { token: $address, date_gt: $startTime }
          orderBy: date
          orderDirection: asc
        ) {
          date
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
    `;
        const { tokenDayDatas  } = await (0,_constant__WEBPACK_IMPORTED_MODULE_2__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query, {
            startTime: _constant__WEBPACK_IMPORTED_MODULE_2__/* .multiChainStartTime */ .YM[chainName],
            skip,
            address
        });
        const data = tokenDayDatas.map(_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapDayData */ .v5);
        return {
            data,
            error: false
        };
    } catch (error) {
        console.error("Failed to fetch token chart data", error);
        return {
            error: true
        };
    }
};
const fetchTokenChartData = async (chainName, address)=>{
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__/* .fetchChartDataWithAddress */ .sL)(chainName, getTokenChartData, address);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTokenChartData);


/***/ }),

/***/ 57806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43437);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79467);



/**
 * Data for showing Pools table on the Token page
 */ const POOLS_FOR_TOKEN = (chainName)=>{
    const transactionGT = chainName === "ETH" ? 1 : 100;
    return graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query poolsForToken($address: Bytes!, $blacklist: [String!]) {
    asToken0: pairs(
      first: 15
      orderBy: trackedReserve${_constant__WEBPACK_IMPORTED_MODULE_1__/* .multiChainQueryMainToken */ .WR[chainName]}
      orderDirection: desc
      where: { totalTransactions_gt: ${transactionGT}, token0: $address, token1_not_in: $blacklist }
    ) {
      id
    }
    asToken1: pairs(
      first: 15
      orderBy: trackedReserve${_constant__WEBPACK_IMPORTED_MODULE_1__/* .multiChainQueryMainToken */ .WR[chainName]}
      orderDirection: desc
      where: { totalTransactions_gt: ${transactionGT}, token1: $address, token0_not_in: $blacklist }
    ) {
      id
    }
  }
`;
};
const fetchPoolsForToken = async (chainName, address)=>{
    try {
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_1__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(POOLS_FOR_TOKEN(chainName), {
            address,
            blacklist: config_constants_info__WEBPACK_IMPORTED_MODULE_2__/* .TOKEN_BLACKLIST */ .tE
        });
        return {
            error: false,
            addresses: data.asToken0.concat(data.asToken1).map((p)=>p.id)
        };
    } catch (error) {
        console.error(`Failed to fetch pools for token ${address}`, error);
        return {
            error: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPoolsForToken);


/***/ }),

/***/ 23594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33992);
/* harmony import */ var views_Info_utils_infoQueryHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56615);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79467);






const getPriceSubqueries = (chainName, tokenAddress, blocks)=>blocks.map((block)=>`
      t${block.timestamp}:token(id:"${tokenAddress}", block: { number: ${block.number} }) { 
        derived${_constant__WEBPACK_IMPORTED_MODULE_5__/* .multiChainQueryMainToken */ .WR[chainName]}
      }
      b${block.timestamp}: bundle(id:"1", block: { number: ${block.number} }) { 
        ${_constant__WEBPACK_IMPORTED_MODULE_5__/* .multiChainQueryMainToken */ .WR[chainName].toLowerCase()}Price
      }
    `);
/**
 * Price data for token and bnb based on block number
 */ const priceQueryConstructor = (subqueries)=>{
    return graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query tokenPriceData {
      ${subqueries}
    }
  `;
};
const fetchTokenPriceData = async (chainName, address, interval, startTimestamp)=>{
    // Construct timestamps to query against
    const endTimestamp = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)(new Date());
    const timestamps = [];
    let time = startTimestamp;
    while(time <= endTimestamp){
        timestamps.push(time);
        time += interval;
    }
    try {
        const blocks = await (0,utils_getBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_2__/* .getBlocksFromTimestamps */ .z)(timestamps, "asc", 500, chainName);
        if (!blocks || blocks.length === 0) {
            console.error("Error fetching blocks for timestamps", timestamps);
            return {
                error: false
            };
        }
        const prices = await (0,views_Info_utils_infoQueryHelpers__WEBPACK_IMPORTED_MODULE_3__/* .multiQuery */ .L)(priceQueryConstructor, getPriceSubqueries(chainName, address, blocks), _constant__WEBPACK_IMPORTED_MODULE_5__/* .multiChainQueryEndPoint */ .Ho[chainName], 200);
        console.warn("fetchTokenPriceData", {
            chainName,
            prices
        });
        if (!prices) {
            console.error("Price data failed to load");
            return {
                error: false
            };
        }
        // format token BNB price results
        const tokenPrices = [];
        const mainToken = _constant__WEBPACK_IMPORTED_MODULE_5__/* .multiChainQueryMainToken */ .WR[chainName];
        // Get Token prices in BNB
        Object.keys(prices).forEach((priceKey)=>{
            const timestamp = priceKey.split("t")[1];
            // if its BNB price e.g. `b123` split('t')[1] will be undefined and skip BNB price entry
            if (timestamp) {
                tokenPrices.push({
                    timestamp,
                    derivedBNB: prices[priceKey]?.[`derived${mainToken}`] ? parseFloat(prices[priceKey][`derived${mainToken}`]) : 0,
                    priceUSD: 0
                });
            }
        });
        console.warn("pricesPart1", tokenPrices);
        // Go through BNB USD prices and calculate Token price based on it
        Object.keys(prices).forEach((priceKey)=>{
            const timestamp = priceKey.split("b")[1];
            // if its Token price e.g. `t123` split('b')[1] will be undefined and skip Token price entry
            if (timestamp) {
                const tokenPriceIndex = tokenPrices.findIndex((tokenPrice)=>tokenPrice.timestamp === timestamp);
                if (tokenPriceIndex >= 0) {
                    const { derivedBNB  } = tokenPrices[tokenPriceIndex];
                    tokenPrices[tokenPriceIndex].priceUSD = parseFloat(prices[priceKey]?.[`${mainToken.toLowerCase()}Price`] ?? 0) * derivedBNB;
                }
            }
        });
        // graphql-request does not guarantee same ordering of batched requests subqueries, hence sorting by timestamp from oldest to newest
        const sortedTokenPrices = lodash_orderBy__WEBPACK_IMPORTED_MODULE_4___default()(tokenPrices, (tokenPrice)=>parseInt(tokenPrice.timestamp, 10));
        const formattedHistory = [];
        // for each timestamp, construct the open and close price
        for(let i = 0; i < sortedTokenPrices.length - 1; i++){
            formattedHistory.push({
                time: parseFloat(sortedTokenPrices[i].timestamp),
                open: sortedTokenPrices[i].priceUSD,
                close: sortedTokenPrices[i + 1].priceUSD,
                high: sortedTokenPrices[i + 1].priceUSD,
                low: sortedTokenPrices[i].priceUSD
            });
        }
        return {
            data: formattedHistory,
            error: false
        };
    } catch (error) {
        console.error(`Failed to fetch price data for token ${address}`, error);
        return {
            error: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTokenPriceData);


/***/ }),

/***/ 67193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_X": () => (/* binding */ fetchAllTokenDataByAddresses),
/* harmony export */   "bN": () => (/* binding */ fetchAllTokenData)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73806);
/* harmony import */ var utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41485);
/* harmony import */ var views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15051);
/* harmony import */ var views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48608);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79467);
/* harmony import */ var _topTokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__, _topTokens__WEBPACK_IMPORTED_MODULE_5__]);
([views_Info_hooks_useBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__, _topTokens__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-param-reassign */ 







/**
 * Main token data to display on Token page
 */ const TOKEN_AT_BLOCK = (chainName, block, tokens)=>{
    const addressesString = `["${tokens.join('","')}"]`;
    const blockString = block ? `block: {number: ${block}}` : ``;
    return `tokens(
      where: {id_in: ${addressesString}}
      ${blockString}
      orderBy: tradeVolumeUSD
      orderDirection: desc
    ) {
      id
      symbol
      name
      derived${_constant__WEBPACK_IMPORTED_MODULE_4__/* .multiChainQueryMainToken */ .WR[chainName]}
      derivedUSD
      tradeVolumeUSD
      totalTransactions
      totalLiquidity
    }
  `;
};
const fetchTokenData = async (chainName, block24h, block48h, block7d, block14d, tokenAddresses)=>{
    try {
        const weeksQuery = chainName === "BSC" ? `twoWeeksAgo: ${TOKEN_AT_BLOCK(chainName, block14d, tokenAddresses)}` : "";
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
      query tokens {
        now: ${TOKEN_AT_BLOCK(chainName, null, tokenAddresses)}
        oneDayAgo: ${TOKEN_AT_BLOCK(chainName, block24h, tokenAddresses)}
        twoDaysAgo: ${TOKEN_AT_BLOCK(chainName, block48h, tokenAddresses)}
        oneWeekAgo: ${TOKEN_AT_BLOCK(chainName, block7d, tokenAddresses)}
        ${weeksQuery}
      }
    `;
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_4__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query);
        return {
            data,
            error: false
        };
    } catch (error) {
        console.error("Failed to fetch token data", error);
        return {
            error: true
        };
    }
};
// Transforms tokens into "0xADDRESS: { ...TokenFields }" format and cast strings to numbers
const parseTokenData = (tokens)=>{
    if (!tokens) {
        return {};
    }
    return tokens.reduce((accum, tokenData)=>{
        const { derivedBNB , derivedUSD , tradeVolumeUSD , totalTransactions , totalLiquidity , derivedETH  } = tokenData;
        accum[tokenData.id] = {
            ...tokenData,
            derivedBNB: derivedBNB ? 0 : parseFloat(derivedBNB),
            derivedETH: derivedETH ? 0 : parseFloat(derivedETH),
            derivedUSD: parseFloat(derivedUSD),
            tradeVolumeUSD: parseFloat(tradeVolumeUSD),
            totalTransactions: parseFloat(totalTransactions),
            totalLiquidity: parseFloat(totalLiquidity)
        };
        return accum;
    }, {});
};
/**
 * Fetch top addresses by volume
 */ const useFetchedTokenDatas = (chainName, tokenAddresses)=>{
    const { 0: fetchState , 1: setFetchState  } = useState({
        error: false
    });
    const [t24h, t48h, t7d, t14d] = getDeltaTimestamps();
    const { blocks , error: blockError  } = useBlocksFromTimestamps([
        t24h,
        t48h,
        t7d,
        t14d
    ]);
    const [block24h, block48h, block7d, block14d] = blocks ?? [];
    useEffect(()=>{
        const fetch = async ()=>{
            const { error , data  } = await fetchTokenData(chainName, block24h.number, block48h.number, block7d.number, block14d.number, tokenAddresses);
            if (error) {
                setFetchState({
                    error: true
                });
            } else {
                const parsed = parseTokenData(data?.now);
                const parsed24 = parseTokenData(data?.oneDayAgo);
                const parsed48 = parseTokenData(data?.twoDaysAgo);
                const parsed7d = parseTokenData(data?.oneWeekAgo);
                const parsed14d = parseTokenData(data?.twoWeeksAgo);
                // Calculate data and format
                const formatted = tokenAddresses.reduce((accum, address)=>{
                    const current = parsed[address];
                    const oneDay = parsed24[address];
                    const twoDays = parsed48[address];
                    const week = parsed7d[address];
                    const twoWeeks = parsed14d[address];
                    const [volumeUSD, volumeUSDChange] = getChangeForPeriod(current?.tradeVolumeUSD, oneDay?.tradeVolumeUSD, twoDays?.tradeVolumeUSD);
                    const [volumeUSDWeek] = getChangeForPeriod(current?.tradeVolumeUSD, week?.tradeVolumeUSD, twoWeeks?.tradeVolumeUSD);
                    const liquidityUSD = current ? current.totalLiquidity * current.derivedUSD : 0;
                    const liquidityUSDOneDayAgo = oneDay ? oneDay.totalLiquidity * oneDay.derivedUSD : 0;
                    const liquidityUSDChange = getPercentChange(liquidityUSD, liquidityUSDOneDayAgo);
                    const liquidityToken = current ? current.totalLiquidity : 0;
                    // Prices of tokens for now, 24h ago and 7d ago
                    const priceUSD = current ? current.derivedUSD : 0;
                    const priceUSDOneDay = oneDay ? oneDay.derivedUSD : 0;
                    const priceUSDWeek = week ? week.derivedUSD : 0;
                    const priceUSDChange = getPercentChange(priceUSD, priceUSDOneDay);
                    const priceUSDChangeWeek = getPercentChange(priceUSD, priceUSDWeek);
                    const txCount = getAmountChange(current?.totalTransactions, oneDay?.totalTransactions);
                    accum[address] = {
                        exists: !!current,
                        address,
                        name: current ? current.name : "",
                        symbol: current ? current.symbol : "",
                        volumeUSD,
                        volumeUSDChange,
                        volumeUSDWeek,
                        txCount,
                        liquidityUSD,
                        liquidityUSDChange,
                        liquidityToken,
                        priceUSD,
                        priceUSDChange,
                        priceUSDChangeWeek
                    };
                    return accum;
                }, {});
                setFetchState({
                    data: formatted,
                    error: false
                });
            }
        };
        const allBlocksAvailable = block24h?.number && block48h?.number && block7d?.number && block14d?.number;
        if (tokenAddresses.length > 0 && allBlocksAvailable && !blockError) {
            fetch();
        }
    }, [
        tokenAddresses,
        block24h,
        block48h,
        block7d,
        block14d,
        blockError,
        chainName
    ]);
    return fetchState;
};
const fetchAllTokenDataByAddresses = async (chainName, blocks, tokenAddresses)=>{
    const [block24h, block48h, block7d, block14d] = blocks ?? [];
    const { data  } = await fetchTokenData(chainName, block24h.number, block48h.number, block7d.number, block14d.number, tokenAddresses);
    const parsed = parseTokenData(data?.now);
    const parsed24 = parseTokenData(data?.oneDayAgo);
    const parsed48 = parseTokenData(data?.twoDaysAgo);
    const parsed7d = parseTokenData(data?.oneWeekAgo);
    const parsed14d = parseTokenData(data?.twoWeeksAgo);
    // Calculate data and format
    const formatted = tokenAddresses.reduce((accum, address)=>{
        const current = parsed[address];
        const oneDay = parsed24[address];
        const twoDays = parsed48[address];
        const week = parsed7d[address];
        const twoWeeks = parsed14d[address];
        const [volumeUSD, volumeUSDChange] = (0,utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_6__/* .getChangeForPeriod */ .T)(current?.tradeVolumeUSD, oneDay?.tradeVolumeUSD, twoDays?.tradeVolumeUSD);
        const [volumeUSDWeek] = (0,utils_getChangeForPeriod__WEBPACK_IMPORTED_MODULE_6__/* .getChangeForPeriod */ .T)(current?.tradeVolumeUSD, week?.tradeVolumeUSD, twoWeeks?.tradeVolumeUSD);
        const liquidityUSD = current ? current.totalLiquidity * current.derivedUSD : 0;
        const liquidityUSDOneDayAgo = oneDay ? oneDay.totalLiquidity * oneDay.derivedUSD : 0;
        const liquidityUSDChange = (0,views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getPercentChange */ .Y)(liquidityUSD, liquidityUSDOneDayAgo);
        const liquidityToken = current ? current.totalLiquidity : 0;
        // Prices of tokens for now, 24h ago and 7d ago
        const priceUSD = current ? current.derivedUSD : 0;
        const priceUSDOneDay = oneDay ? oneDay.derivedUSD : 0;
        const priceUSDWeek = week ? week.derivedUSD : 0;
        const priceUSDChange = (0,views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getPercentChange */ .Y)(priceUSD, priceUSDOneDay);
        const priceUSDChangeWeek = (0,views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getPercentChange */ .Y)(priceUSD, priceUSDWeek);
        const txCount = (0,views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getAmountChange */ .D)(current?.totalTransactions, oneDay?.totalTransactions);
        accum[address] = {
            data: {
                exists: !!current,
                address,
                name: current ? current.name : "",
                symbol: current ? current.symbol : "",
                volumeUSD,
                volumeUSDChange,
                volumeUSDWeek,
                txCount,
                liquidityUSD,
                liquidityUSDChange,
                liquidityToken,
                priceUSD,
                priceUSDChange,
                priceUSDChangeWeek
            }
        };
        return accum;
    }, {});
    return formatted;
};
const fetchAllTokenData = async (chainName, blocks)=>{
    const tokenAddresses = await (0,_topTokens__WEBPACK_IMPORTED_MODULE_5__/* .fetchTokenAddresses */ .T)(chainName);
    const data = await fetchAllTokenDataByAddresses(chainName, blocks, tokenAddresses);
    return data;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useFetchedTokenDatas)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ fetchTokenAddresses)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73806);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87434);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * Tokens to display on Home page
 * The actual data is later requested in tokenData.ts
 * Note: dailyTxns_gt: 300 is there to prevent fetching incorrectly priced tokens with high dailyVolumeUSD
 */ const fetchTopTokens = async (chainName, timestamp24hAgo)=>{
    const whereCondition = chainName === "ETH" ? `where: { date_gt: ${timestamp24hAgo}, token_not_in: $blacklist, dailyVolumeUSD_gt:2000 }` : (0,_constant__WEBPACK_IMPORTED_MODULE_4__/* .checkIsStableSwap */ .J5)() ? "" : `where: { dailyTxns_gt: 300, id_not_in: $blacklist, date_gt: ${timestamp24hAgo}}`;
    const firstCount = 30;
    try {
        const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
      query topTokens($blacklist: [String!]) {
        tokenDayDatas(
          first: ${firstCount}
          ${whereCondition}
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `;
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_4__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(query, {
            blacklist: _constant__WEBPACK_IMPORTED_MODULE_4__/* .multiChainTokenBlackList */ .z2[chainName]
        });
        // tokenDayDatas id has compound id "0xTOKENADDRESS-NUMBERS", extracting token address with .split('-')
        return data.tokenDayDatas.map((t)=>t.id.split("-")[0]);
    } catch (error) {
        console.warn("fetchTopTokens", {
            chainName,
            timestamp24hAgo
        });
        console.error("Failed to fetch top tokens", error);
        return [];
    }
};
/**
 * Fetch top addresses by volume
 */ const useTopTokenAddresses = ()=>{
    const { 0: topTokenAddresses , 1: setTopTokenAddresses  } = useState([]);
    const [timestamp24hAgo] = getDeltaTimestamps();
    const chainName = useGetChainName();
    const fetch = useCallback(async ()=>{
        const addresses = await fetchTopTokens(chainName, timestamp24hAgo);
        if (addresses.length > 0) setTopTokenAddresses(addresses);
    }, [
        timestamp24hAgo,
        chainName
    ]);
    useEffect(()=>{
        fetch();
    }, [
        chainName,
        fetch
    ]);
    return topTokenAddresses;
};
const fetchTokenAddresses = async (chainName)=>{
    const [timestamp24hAgo] = (0,utils_getDeltaTimestamps__WEBPACK_IMPORTED_MODULE_2__/* .getDeltaTimestamps */ .z)();
    const addresses = await fetchTopTokens(chainName, timestamp24hAgo);
    return addresses;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useTopTokenAddresses)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95379);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);



/**
 * Data to display transaction table on Token page
 */ const TOKEN_TRANSACTIONS = ()=>{
    const isStableSwap = (0,_constant__WEBPACK_IMPORTED_MODULE_2__/* .checkIsStableSwap */ .J5)();
    const whereToken0 = isStableSwap ? "pair_: {token0: $address}" : "token0: $address";
    const whereToken1 = isStableSwap ? "pair_: {token1: $address}" : "token1: $address";
    return graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query tokenTransactions($address: Bytes!) {
      mintsAs0: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${whereToken0} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        to
        amount0
        amount1
        amountUSD
      }
      mintsAs1: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${whereToken1} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        to
        amount0
        amount1
        amountUSD
      }
      swapsAs0: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${whereToken0} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        from
        amount0In
        amount1In
        amount0Out
        amount1Out
        amountUSD
      }
      swapsAs1: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${whereToken1} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        from
        amount0In
        amount1In
        amount0Out
        amount1Out
        amountUSD
      }
      burnsAs0: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${whereToken0} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        sender
        amount0
        amount1
        amountUSD
      }
      burnsAs1: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${whereToken1} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        sender
        amount0
        amount1
        amountUSD
      }
    }
  `;
};
const fetchTokenTransactions = async (chainName, address)=>{
    try {
        const data = await (0,_constant__WEBPACK_IMPORTED_MODULE_2__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName).request(TOKEN_TRANSACTIONS(), {
            address
        });
        const mints0 = data.mintsAs0.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapMints */ .k9);
        const mints1 = data.mintsAs1.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapMints */ .k9);
        const burns0 = data.burnsAs0.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapBurns */ ._h);
        const burns1 = data.burnsAs1.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapBurns */ ._h);
        const swaps0 = data.swapsAs0.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapSwaps */ .H_);
        const swaps1 = data.swapsAs1.map(state_info_queries_helpers__WEBPACK_IMPORTED_MODULE_1__/* .mapSwaps */ .H_);
        return {
            data: [
                ...mints0,
                ...mints1,
                ...burns0,
                ...burns1,
                ...swaps0,
                ...swaps1
            ],
            error: false
        };
    } catch (error) {
        console.error(`Failed to fetch transactions for token ${address}`, error);
        return {
            error: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTokenTransactions);


/***/ }),

/***/ 29209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ TransactionType)
/* harmony export */ });
var TransactionType;
(function(TransactionType) {
    TransactionType[TransactionType["SWAP"] = 0] = "SWAP";
    TransactionType[TransactionType["MINT"] = 1] = "MINT";
    TransactionType[TransactionType["BURN"] = 2] = "BURN";
})(TransactionType || (TransactionType = {}));


/***/ }),

/***/ 26680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EF": () => (/* binding */ useIsListActive),
/* harmony export */   "HW": () => (/* binding */ combinedTokenMapFromOfficialsUrlsAtom),
/* harmony export */   "R0": () => (/* binding */ useAllLists),
/* harmony export */   "Rx": () => (/* binding */ useUnsupportedTokenList),
/* harmony export */   "Ti": () => (/* binding */ selectorByUrlsAtom),
/* harmony export */   "c6": () => (/* binding */ useWarningTokenList),
/* harmony export */   "eL": () => (/* binding */ tokenListFromOfficialsUrlsAtom),
/* harmony export */   "eu": () => (/* binding */ useInactiveListUrls),
/* harmony export */   "i": () => (/* binding */ combinedTokenMapFromActiveUrlsAtom),
/* harmony export */   "qB": () => (/* binding */ useCombinedInactiveList),
/* harmony export */   "v0": () => (/* binding */ useActiveListUrls),
/* harmony export */   "z0": () => (/* binding */ useCombinedActiveList)
/* harmony export */ });
/* unused harmony exports combinedTokenMapFromInActiveUrlsAtom, combinedTokenMapFromUnsupportedUrlsAtom, combinedTokenMapFromWarningUrlsAtom, listToTokenMap */
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3256);
/* harmony import */ var config_constants_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7964);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82451);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9941);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63385);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72502);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_constants_tokenLists_pancake_default_tokenlist_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56699);
/* harmony import */ var _config_constants_tokenLists_pancake_unsupported_tokenlist_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15118);
/* harmony import */ var _config_constants_tokenLists_pancake_warning_tokenlist_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53707);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_3__, _lists__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_3__, _lists__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














// use ordering of default list of lists to assign priority
function sortByListPriority(urlA, urlB) {
    const first = config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.includes */ .Lx.includes(urlA) ? config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.indexOf */ .Lx.indexOf(urlA) : Number.MAX_SAFE_INTEGER;
    const second = config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.includes */ .Lx.includes(urlB) ? config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.indexOf */ .Lx.indexOf(urlB) : Number.MAX_SAFE_INTEGER;
    // need reverse order to make sure mapping includes top priority last
    if (first < second) return 1;
    if (first > second) return -1;
    return 0;
}
function enumKeys(obj) {
    return Object.keys(obj).filter((k)=>Number.isNaN(+k));
}
// -------------------------------------
//   Selectors
// -------------------------------------
const selectorActiveUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>get(_lists__WEBPACK_IMPORTED_MODULE_13__/* .listsAtom */ .l)?.activeListUrls ?? []);
const selectorByUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>get(_lists__WEBPACK_IMPORTED_MODULE_13__/* .listsAtom */ .l)?.byUrl ?? {});
const activeListUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const urls = get(selectorActiveUrlsAtom);
    return urls?.filter((url)=>!config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .UNSUPPORTED_LIST_URLS.includes */ .US.includes(url));
});
const combineTokenMapsWithDefault = (lists, urls)=>{
    const defaultTokenMap = listToTokenMap(_config_constants_tokenLists_pancake_default_tokenlist_json__WEBPACK_IMPORTED_MODULE_10__);
    if (!urls) return defaultTokenMap;
    return combineMaps(combineTokenMaps(lists, urls), defaultTokenMap);
};
const combineTokenMaps = (lists, urls)=>{
    if (!urls) return _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY_LIST */ .rP;
    return urls.slice()// sort by priority so top priority goes last
    .sort(sortByListPriority).reduce((allTokens, currentUrl)=>{
        const current = lists[currentUrl]?.current;
        if (!current) return allTokens;
        try {
            const newTokens = Object.assign(listToTokenMap(current));
            return combineMaps(allTokens, newTokens);
        } catch (error) {
            console.error("Could not show token list due to error", error);
            return allTokens;
        }
    }, _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY_LIST */ .rP);
};
const combinedTokenMapFromActiveUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const [selectorByUrls, selectorActiveUrls] = [
        get(selectorByUrlsAtom),
        get(selectorActiveUrlsAtom)
    ];
    return combineTokenMapsWithDefault(selectorByUrls, selectorActiveUrls);
});
const inactiveUrlAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const [lists, urls] = [
        get(selectorByUrlsAtom),
        get(selectorActiveUrlsAtom)
    ];
    return Object.keys(lists).filter((url)=>!urls?.includes(url) && !config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .UNSUPPORTED_LIST_URLS.includes */ .US.includes(url));
});
const combinedTokenMapFromInActiveUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const [lists, inactiveUrl] = [
        get(selectorByUrlsAtom),
        get(inactiveUrlAtom)
    ];
    return combineTokenMaps(lists, inactiveUrl);
});
const combinedTokenMapFromOfficialsUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const lists = get(selectorByUrlsAtom);
    return combineTokenMapsWithDefault(lists, config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .OFFICIAL_LISTS */ .mg);
});
const tokenListFromOfficialsUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const lists = get(selectorByUrlsAtom);
    const mergedTokenLists = config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .OFFICIAL_LISTS.reduce */ .mg.reduce((acc, url)=>{
        if (lists?.[url]?.current?.tokens) {
            acc.push(...lists?.[url]?.current.tokens);
        }
        return acc;
    }, []);
    const mergedList = mergedTokenLists.length > 0 ? [
        ..._config_constants_tokenLists_pancake_default_tokenlist_json__WEBPACK_IMPORTED_MODULE_10__.tokens,
        ...mergedTokenLists
    ] : _config_constants_tokenLists_pancake_default_tokenlist_json__WEBPACK_IMPORTED_MODULE_10__.tokens;
    return lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(lodash_groupBy__WEBPACK_IMPORTED_MODULE_5___default()(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8___default()(mergedList, (tokenInfo)=>`${tokenInfo.chainId}#${tokenInfo.address}`), "chainId"), (tokenInfos)=>lodash_keyBy__WEBPACK_IMPORTED_MODULE_6___default()(tokenInfos, "address"));
});
const combinedTokenMapFromUnsupportedUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const lists = get(selectorByUrlsAtom);
    // get hard coded unsupported tokens
    const localUnsupportedListMap = listToTokenMap(_config_constants_tokenLists_pancake_unsupported_tokenlist_json__WEBPACK_IMPORTED_MODULE_11__);
    // get any loaded unsupported tokens
    const loadedUnsupportedListMap = combineTokenMaps(lists, config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .UNSUPPORTED_LIST_URLS */ .US);
    return combineMaps(localUnsupportedListMap, loadedUnsupportedListMap);
});
const combinedTokenMapFromWarningUrlsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)((get)=>{
    const lists = get(selectorByUrlsAtom);
    // get hard coded unsupported tokens
    const localUnsupportedListMap = listToTokenMap(_config_constants_tokenLists_pancake_warning_tokenlist_json__WEBPACK_IMPORTED_MODULE_12__);
    // get any loaded unsupported tokens
    const loadedUnsupportedListMap = combineTokenMaps(lists, config_constants_lists__WEBPACK_IMPORTED_MODULE_2__/* .WARNING_LIST_URLS */ .VX);
    return combineMaps(localUnsupportedListMap, loadedUnsupportedListMap);
});
const listCache = typeof WeakMap !== "undefined" ? new WeakMap() : null;
function listToTokenMap(list) {
    const result = listCache?.get(list);
    if (result) return result;
    const tokenMap = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8___default()(list.tokens, (tokenInfo)=>`${tokenInfo.chainId}#${tokenInfo.address}`).map((tokenInfo)=>new _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__/* .WrappedTokenInfo */ .DT(tokenInfo));
    const groupedTokenMap = lodash_groupBy__WEBPACK_IMPORTED_MODULE_5___default()(tokenMap, "chainId");
    const tokenAddressMap = lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(groupedTokenMap, (tokenInfoList)=>lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(lodash_keyBy__WEBPACK_IMPORTED_MODULE_6___default()(tokenInfoList, "address"), (tokenInfo)=>({
                token: tokenInfo,
                list
            })));
    // add chain id item if not exist
    enumKeys(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId).forEach((chainId)=>{
        if (!(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId[chainId] in tokenAddressMap)) {
            Object.defineProperty(tokenAddressMap, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId[chainId], {
                value: {}
            });
        }
    });
    listCache?.set(list, tokenAddressMap);
    return tokenAddressMap;
}
// -------------------------------------
//   Hooks
// -------------------------------------
function useAllLists() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(selectorByUrlsAtom);
}
function combineMaps(map1, map2) {
    return {
        [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM]: {
            ...map1[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM],
            ...map2[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM]
        },
        [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.RINKEBY]: {
            ...map1[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.RINKEBY],
            ...map2[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.RINKEBY]
        },
        [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.GOERLI]: {
            ...map1[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.GOERLI],
            ...map2[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.GOERLI]
        },
        [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC]: {
            ...map1[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC],
            ...map2[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC]
        },
        [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET]: {
            ...map1[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET],
            ...map2[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET]
        }
    };
}
// filter out unsupported lists
function useActiveListUrls() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(activeListUrlsAtom);
}
function useInactiveListUrls() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(inactiveUrlAtom);
}
// get all the tokens from active lists, combine with local default tokens
function useCombinedActiveList() {
    const activeTokens = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(combinedTokenMapFromActiveUrlsAtom);
    return activeTokens;
}
// all tokens from inactive lists
function useCombinedInactiveList() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(combinedTokenMapFromInActiveUrlsAtom);
}
// list of tokens not supported on interface, used to show warnings and prevent swaps and adds
function useUnsupportedTokenList() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(combinedTokenMapFromUnsupportedUrlsAtom);
}
// list of warning tokens on interface, used to show warnings and prevent adds
function useWarningTokenList() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(combinedTokenMapFromWarningUrlsAtom);
}
function useIsListActive(url) {
    const activeListUrls = useActiveListUrls();
    return (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>Boolean(activeListUrls?.includes(url)), [
        activeListUrls,
        url
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ listsAtom),
/* harmony export */   "n": () => (/* binding */ useListState)
/* harmony export */ });
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3256);
/* harmony import */ var config_constants_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_0__]);
_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    lastInitializedDefaultListOfLists: config_constants_lists__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LIST_OF_LISTS */ .Lx,
    byUrl: {
        ...config_constants_lists__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LIST_OF_LISTS.concat */ .Lx.concat(...config_constants_lists__WEBPACK_IMPORTED_MODULE_1__/* .UNSUPPORTED_LIST_URLS */ .US).reduce((memo, listUrl)=>{
            memo[listUrl] = _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_0__/* .NEW_LIST_STATE */ .Pu;
            return memo;
        }, {})
    },
    activeListUrls: config_constants_lists__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTIVE_LIST_URLS */ .c8
};
const listReducer = (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_0__/* .createTokenListReducer */ .g6)(initialState, config_constants_lists__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LIST_OF_LISTS */ .Lx, config_constants_lists__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ACTIVE_LIST_URLS */ .c8);
const { listsAtom , useListState  } = (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_0__/* .createListsAtom */ .jy)("listv2", listReducer, initialState);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$2": () => (/* binding */ useUserSlippageTolerance),
/* harmony export */   "$c": () => (/* binding */ useUserLimitOrderAcceptedWarning),
/* harmony export */   "$f": () => (/* binding */ useZapModeManager),
/* harmony export */   "A6": () => (/* binding */ useUserTransactionTTL),
/* harmony export */   "B3": () => (/* binding */ useTrackedTokenPairs),
/* harmony export */   "Ce": () => (/* binding */ toV2LiquidityToken),
/* harmony export */   "DG": () => (/* binding */ useExpertModeManager),
/* harmony export */   "FT": () => (/* binding */ usePhishingBannerManager),
/* harmony export */   "Fh": () => (/* binding */ useGasPrice),
/* harmony export */   "Hx": () => (/* binding */ useWatchlistPools),
/* harmony export */   "LO": () => (/* binding */ useIsExpertMode),
/* harmony export */   "OE": () => (/* binding */ useExchangeChartViewManager),
/* harmony export */   "QG": () => (/* binding */ useRemoveUserAddedToken),
/* harmony export */   "RO": () => (/* binding */ useUserSingleHopOnly),
/* harmony export */   "TL": () => (/* binding */ useUserPredictionChartDisclaimerShow),
/* harmony export */   "TO": () => (/* binding */ useAudioModeManager),
/* harmony export */   "XD": () => (/* binding */ useUserFarmStakedOnly),
/* harmony export */   "YF": () => (/* binding */ useSubgraphHealthIndicatorManager),
/* harmony export */   "Yi": () => (/* binding */ useUserPoolsViewMode),
/* harmony export */   "_E": () => (/* binding */ useAddUserToken),
/* harmony export */   "oI": () => (/* binding */ useUserPredictionAcceptedRisk),
/* harmony export */   "sg": () => (/* binding */ useUserPredictionChainlinkChartDisclaimerShow),
/* harmony export */   "tw": () => (/* binding */ useUserPoolStakedOnly),
/* harmony export */   "uB": () => (/* binding */ usePairAdder),
/* harmony export */   "vD": () => (/* binding */ useExchangeChartManager),
/* harmony export */   "wX": () => (/* binding */ useUserExpertModeAcknowledgementShow),
/* harmony export */   "y9": () => (/* binding */ useUserFarmsViewMode),
/* harmony export */   "z6": () => (/* binding */ useWatchlistTokens)
/* harmony export */ });
/* unused harmony export useUserUsernameVisibility */
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3256);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38190);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65498);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92794);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65342);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79847);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31196);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9270);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15941);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36204);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15444);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_11__, swr__WEBPACK_IMPORTED_MODULE_12__, _index__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_11__, swr__WEBPACK_IMPORTED_MODULE_12__, _index__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function useAudioModeManager() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const audioPlay = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.audioPlay);
    const toggleSetAudioMode = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (audioPlay) {
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .muteAudio */ .B8)());
        } else {
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .unmuteAudio */ .u7)());
        }
    }, [
        audioPlay,
        dispatch
    ]);
    return [
        audioPlay,
        toggleSetAudioMode
    ];
}
function usePhishingBannerManager() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const hideTimestampPhishingWarningBanner = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.hideTimestampPhishingWarningBanner);
    const now = Date.now();
    const showPhishingWarningBanner = hideTimestampPhishingWarningBanner ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(now, hideTimestampPhishingWarningBanner) >= 1 : true;
    const hideBanner = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .hidePhishingWarningBanner */ .l5)());
    }, [
        dispatch
    ]);
    return [
        showPhishingWarningBanner,
        hideBanner
    ];
}
// Get user preference for exchange price chart
// For mobile layout chart is hidden by default
function useExchangeChartManager(isMobile) {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const isChartDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.isExchangeChartDisplayed);
    const setUserChartPreference = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((isDisplayed)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .setIsExchangeChartDisplayed */ .hN)(isDisplayed));
    }, [
        dispatch
    ]);
    return [
        isMobile ? false : isChartDisplayed,
        setUserChartPreference
    ];
}
function useExchangeChartViewManager() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const chartViewMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.userChartViewMode);
    const setUserChartViewPreference = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((view)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .setChartViewMode */ .p9)(view));
    }, [
        dispatch
    ]);
    return [
        chartViewMode,
        setUserChartViewPreference
    ];
}
function useZapModeManager() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const zapEnabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>!state.user.userZapDisabled);
    const setZapEnable = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((enable)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .setZapDisabled */ .G8)(!enable));
    }, [
        dispatch
    ]);
    return [
        zapEnabled,
        setZapEnable
    ];
}
function useSubgraphHealthIndicatorManager() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const isSubgraphHealthIndicatorDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.isSubgraphHealthIndicatorDisplayed);
    const setSubgraphHealthIndicatorDisplayedPreference = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((newIsDisplayed)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .setSubgraphHealthIndicatorDisplayed */ .Hr)(newIsDisplayed));
    }, [
        dispatch
    ]);
    return [
        isSubgraphHealthIndicatorDisplayed,
        setSubgraphHealthIndicatorDisplayedPreference
    ];
}
function useIsExpertMode() {
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.userExpertMode);
}
function useExpertModeManager() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const expertMode = useIsExpertMode();
    const toggleSetExpertMode = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserExpertMode */ .zv)({
            userExpertMode: !expertMode
        }));
    }, [
        expertMode,
        dispatch
    ]);
    return [
        expertMode,
        toggleSetExpertMode
    ];
}
function useUserSingleHopOnly() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const singleHopOnly = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.userSingleHopOnly);
    const setSingleHopOnly = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((newSingleHopOnly)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserSingleHopOnly */ .fO)({
            userSingleHopOnly: newSingleHopOnly
        }));
    }, [
        dispatch
    ]);
    return [
        singleHopOnly,
        setSingleHopOnly
    ];
}
function useUserSlippageTolerance() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userSlippageTolerance = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userSlippageTolerance;
    });
    const setUserSlippageTolerance = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((slippage)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserSlippageTolerance */ .rQ)({
            userSlippageTolerance: slippage
        }));
    }, [
        dispatch
    ]);
    return [
        userSlippageTolerance,
        setUserSlippageTolerance
    ];
}
function useUserFarmStakedOnly(isActive) {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userFarmStakedOnly = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userFarmStakedOnly;
    });
    const setUserFarmStakedOnly = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((stakedOnly)=>{
        const farmStakedOnly = stakedOnly ? _actions__WEBPACK_IMPORTED_MODULE_14__/* .FarmStakedOnly.TRUE */ .GR.TRUE : _actions__WEBPACK_IMPORTED_MODULE_14__/* .FarmStakedOnly.FALSE */ .GR.FALSE;
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserFarmStakedOnly */ .Gs)({
            userFarmStakedOnly: farmStakedOnly
        }));
    }, [
        dispatch
    ]);
    return [
        userFarmStakedOnly === _actions__WEBPACK_IMPORTED_MODULE_14__/* .FarmStakedOnly.ON_FINISHED */ .GR.ON_FINISHED ? !isActive : userFarmStakedOnly === _actions__WEBPACK_IMPORTED_MODULE_14__/* .FarmStakedOnly.TRUE */ .GR.TRUE,
        setUserFarmStakedOnly, 
    ];
}
function useUserPoolStakedOnly() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userPoolStakedOnly = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userPoolStakedOnly;
    });
    const setUserPoolStakedOnly = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((stakedOnly)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserPoolStakedOnly */ .mm)({
            userPoolStakedOnly: stakedOnly
        }));
    }, [
        dispatch
    ]);
    return [
        userPoolStakedOnly,
        setUserPoolStakedOnly
    ];
}
function useUserPoolsViewMode() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userPoolsViewMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userPoolsViewMode;
    });
    const setUserPoolsViewMode = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((viewMode)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserPoolsViewMode */ .d4)({
            userPoolsViewMode: viewMode
        }));
    }, [
        dispatch
    ]);
    return [
        userPoolsViewMode,
        setUserPoolsViewMode
    ];
}
function useUserFarmsViewMode() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userFarmsViewMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userFarmsViewMode;
    });
    const setUserFarmsViewMode = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((viewMode)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserFarmsViewMode */ .gk)({
            userFarmsViewMode: viewMode
        }));
    }, [
        dispatch
    ]);
    return [
        userFarmsViewMode,
        setUserFarmsViewMode
    ];
}
function useUserPredictionAcceptedRisk() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userPredictionAcceptedRisk = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userPredictionAcceptedRisk;
    });
    const setUserPredictionAcceptedRisk = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((acceptedRisk)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserPredictionAcceptedRisk */ .RC)({
            userAcceptedRisk: acceptedRisk
        }));
    }, [
        dispatch
    ]);
    return [
        userPredictionAcceptedRisk,
        setUserPredictionAcceptedRisk
    ];
}
function useUserLimitOrderAcceptedWarning() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userLimitOrderAcceptedWarning = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userLimitOrderAcceptedWarning;
    });
    const setUserLimitOrderAcceptedWarning = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((acceptedRisk)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserLimitOrderAcceptedWarning */ .X)({
            userAcceptedRisk: acceptedRisk
        }));
    }, [
        dispatch
    ]);
    return [
        userLimitOrderAcceptedWarning,
        setUserLimitOrderAcceptedWarning
    ];
}
function useUserPredictionChartDisclaimerShow() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userPredictionChartDisclaimerShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userPredictionChartDisclaimerShow;
    });
    const setPredictionUserChartDisclaimerShow = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((showDisclaimer)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserPredictionChartDisclaimerShow */ .c4)({
            userShowDisclaimer: showDisclaimer
        }));
    }, [
        dispatch
    ]);
    return [
        userPredictionChartDisclaimerShow,
        setPredictionUserChartDisclaimerShow
    ];
}
function useUserPredictionChainlinkChartDisclaimerShow() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userPredictionChainlinkChartDisclaimerShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userPredictionChainlinkChartDisclaimerShow;
    });
    const setPredictionUserChainlinkChartDisclaimerShow = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((showDisclaimer)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserPredictionChainlinkChartDisclaimerShow */ .YA)({
            userShowDisclaimer: showDisclaimer
        }));
    }, [
        dispatch
    ]);
    return [
        userPredictionChainlinkChartDisclaimerShow,
        setPredictionUserChainlinkChartDisclaimerShow
    ];
}
function useUserExpertModeAcknowledgementShow() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userExpertModeAcknowledgementShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userExpertModeAcknowledgementShow;
    });
    const setUserExpertModeAcknowledgementShow = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((showAcknowledgement)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserExpertModeAcknowledgementShow */ ._C)({
            userExpertModeAcknowledgementShow: showAcknowledgement
        }));
    }, [
        dispatch
    ]);
    return [
        userExpertModeAcknowledgementShow,
        setUserExpertModeAcknowledgementShow
    ];
}
function useUserUsernameVisibility() {
    const dispatch = useAppDispatch();
    const userUsernameVisibility = useSelector((state)=>{
        return state.user.userUsernameVisibility;
    });
    const setUserUsernameVisibility = useCallback((usernameVisibility)=>{
        dispatch(updateUserUsernameVisibility({
            userUsernameVisibility: usernameVisibility
        }));
    }, [
        dispatch
    ]);
    return [
        userUsernameVisibility,
        setUserUsernameVisibility
    ];
}
function useUserTransactionTTL() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const userDeadline = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.user.userDeadline;
    });
    const setUserDeadline = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((deadline)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .updateUserDeadline */ .gw)({
            userDeadline: deadline
        }));
    }, [
        dispatch
    ]);
    return [
        userDeadline,
        setUserDeadline
    ];
}
function useAddUserToken() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((token)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .addSerializedToken */ .eg)({
            serializedToken: token.serialize
        }));
    }, [
        dispatch
    ]);
}
function useRemoveUserAddedToken() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((chainId, address)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .removeSerializedToken */ .zQ)({
            chainId,
            address
        }));
    }, [
        dispatch
    ]);
}
function useGasPrice(chainIdOverride) {
    const { chainId: chainId_ , chain  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const library = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_11__/* .useWeb3LibraryContext */ .Hp)();
    const chainId = chainIdOverride ?? chainId_;
    const { data: bscProviderGasPrice = _types__WEBPACK_IMPORTED_MODULE_15__/* .GAS_PRICE_GWEI["default"] */ .j4["default"]  } = (0,swr__WEBPACK_IMPORTED_MODULE_12__["default"])(library && library.provider && chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC && [
        "bscProviderGasPrice",
        library.provider
    ], async ()=>{
        const gasPrice = await library.getGasPrice();
        return gasPrice.toString();
    }, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const { data  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useFeeData)({
        chainId,
        enabled: chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC && chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET,
        watch: true
    });
    if (chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC) {
        return bscProviderGasPrice;
    }
    if (chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET) {
        return _types__WEBPACK_IMPORTED_MODULE_15__/* .GAS_PRICE_GWEI.testnet */ .j4.testnet;
    }
    if (chain?.testnet) {
        return data?.formatted?.maxPriorityFeePerGas;
    }
    return data?.formatted?.gasPrice;
}
function serializePair(pair) {
    return {
        token0: pair.token0.serialize,
        token1: pair.token1.serialize
    };
}
function usePairAdder() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((pair)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .addSerializedPair */ .f9)({
            serializedPair: serializePair(pair)
        }));
    }, [
        dispatch
    ]);
}
/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 */ function toV2LiquidityToken([tokenA, tokenB]) {
    return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ERC20Token(tokenA.chainId, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Pair.getAddress(tokenA, tokenB), 18, "Cake-LP", "Pancake LPs");
}
/**
 * Returns all the pairs of tokens that are tracked by the user for the current chain ID.
 */ function useTrackedTokenPairs() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const tokens = (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__/* .useOfficialsAndUserAddedTokens */ .uq)();
    // pinned pairs
    const pinnedPairs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>chainId ? config_constants_exchange__WEBPACK_IMPORTED_MODULE_6__/* .PINNED_PAIRS */ .Q8[chainId] ?? [] : [], [
        chainId
    ]);
    const { data: farmPairs = []  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])(chainId && [
        "track-farms-pairs",
        chainId
    ], async ()=>{
        const farms = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_16__.getFarmConfig)(chainId);
        const fPairs = farms.filter((farm)=>farm.pid !== 0).map((farm)=>[
                (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__/* .deserializeToken */ .iG)(farm.token),
                (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__/* .deserializeToken */ .iG)(farm.quoteToken)
            ]);
        return fPairs;
    });
    // pairs for every token against every base
    const generatedPairs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>chainId ? lodash_flatMap__WEBPACK_IMPORTED_MODULE_3___default()(Object.keys(tokens), (tokenAddress)=>{
            const token = tokens[tokenAddress];
            // for each token on the current chain,
            return(// loop through all bases on the current chain
            (config_constants_exchange__WEBPACK_IMPORTED_MODULE_6__/* .BASES_TO_TRACK_LIQUIDITY_FOR */ .xu[chainId] ?? [])// to construct pairs of the given token with each base
            .map((base)=>{
                if (base.address === token.address) {
                    return null;
                }
                return [
                    base,
                    token
                ];
            }).filter((p)=>p !== null));
        }) : [], [
        tokens,
        chainId
    ]);
    // pairs saved by users
    const savedSerializedPairs = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(({ user: { pairs  }  })=>pairs);
    const userPairs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!chainId || !savedSerializedPairs) return [];
        const forChain = savedSerializedPairs[chainId];
        if (!forChain) return [];
        return Object.keys(forChain).map((pairId)=>{
            return [
                (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__/* .deserializeToken */ .iG)(forChain[pairId].token0),
                (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__/* .deserializeToken */ .iG)(forChain[pairId].token1)
            ];
        });
    }, [
        savedSerializedPairs,
        chainId
    ]);
    const combinedList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>userPairs.concat(generatedPairs).concat(pinnedPairs).concat(farmPairs), [
        generatedPairs,
        pinnedPairs,
        userPairs,
        farmPairs
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        // dedupes pairs of tokens in the combined list
        const keyed = combinedList.reduce((memo, [tokenA, tokenB])=>{
            const sorted = tokenA.sortsBefore(tokenB);
            const key = sorted ? `${tokenA.address}:${tokenB.address}` : `${tokenB.address}:${tokenA.address}`;
            if (memo[key]) return memo;
            memo[key] = sorted ? [
                tokenA,
                tokenB
            ] : [
                tokenB,
                tokenA
            ];
            return memo;
        }, {});
        return Object.keys(keyed).map((key)=>keyed[key]);
    }, [
        combinedList
    ]);
}
const useWatchlistTokens = ()=>{
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const savedTokens = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.watchlistTokens) ?? [];
    const updatedSavedTokens = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((address)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .addWatchlistToken */ .zS)({
            address
        }));
    }, [
        dispatch
    ]);
    return [
        savedTokens,
        updatedSavedTokens
    ];
};
const useWatchlistPools = ()=>{
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .TL)();
    const savedPools = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.watchlistPools) ?? [];
    const updateSavedPools = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((address)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_14__/* .addWatchlistPool */ .Dn)({
            address
        }));
    }, [
        dispatch
    ]);
    return [
        savedPools,
        updateSavedPools
    ];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUserAddedTokens)
/* harmony export */ });
/* unused harmony export userAddedTokenSelector */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3256);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_3__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const selectUserTokens = ({ user: { tokens  }  })=>tokens;
const userAddedTokenSelector = (chainId)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectUserTokens, (serializedTokensMap)=>Object.values(serializedTokensMap?.[chainId] ?? {}).map(_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_3__/* .deserializeToken */ .iG));
function useUserAddedTokens() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>userAddedTokenSelector(chainId), [
        chainId
    ]));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ formatAmount)
/* harmony export */ });
/* unused harmony export getFirstThreeNonZeroDecimals */
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

// Returns first 2 digits after first non-zero decimal
// i.e. 0.001286 -> 0.0012, 0.9845 -> 0.98, 0.0102 -> 0.010, etc
// Intended to be used for tokens whose value is less than $1
// https://stackoverflow.com/a/23887837
const getFirstThreeNonZeroDecimals = (value)=>{
    return value.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];
};
/**
 * This function is used to format token prices, liquidity, amount of tokens in TX, and in general any numbers on info section
 * @param amount - amount to be formatted
 * @param notation - whether to show 1M or 1,000,000
 * @param displayThreshold - threshold below which it will return simply <displayThreshold instead of actual value, e.g. if 0.001 -> returns <0.001 for 0.0005
 * @param tokenPrecision - set to true when you want precision to be 3 decimals for values < 1 and 2 decimals for values > 1
 * @param isInteger - if true the values will contain decimal part only if the amount is > 1000
 * @returns formatted string ready to be displayed
 */ const formatAmount = (amount, options)=>{
    const { notation =amount >= 10000 ? "compact" : "standard" , displayThreshold , tokenPrecision , isInteger ,  } = options || {
        notation: amount >= 10000 ? "compact" : "standard"
    };
    if (amount === 0) {
        if (isInteger) {
            return "0";
        }
        return "0.00";
    }
    if (!amount) return "-";
    if (displayThreshold && amount < displayThreshold) {
        return `<${displayThreshold}`;
    }
    if (amount < 1 && !tokenPrecision) {
        return getFirstThreeNonZeroDecimals(amount);
    }
    let precision = 2;
    if (tokenPrecision) {
        precision = amount < 1 ? 3 : 2;
    }
    let format = `0.${"0".repeat(precision)}a`;
    if (notation === "standard") {
        format = `0,0.${"0".repeat(precision)}`;
    }
    if (isInteger && amount < 1000) {
        format = "0";
    }
    const amountWithPrecision = parseFloat(amount.toFixed(precision));
    // toUpperCase is needed cause numeral doesn't have support for capital K M B out of the box
    return numeral__WEBPACK_IMPORTED_MODULE_0___default()(amountWithPrecision).format(format).toUpperCase();
};


/***/ }),

/***/ 33992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getBlocksFromTimestamps)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);
/* harmony import */ var _views_Info_utils_infoQueryHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56615);




const getBlockSubqueries = (timestamps)=>timestamps.map((timestamp)=>{
        return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${timestamp}, timestamp_lt: ${timestamp + 600} }) {
      number
    }`;
    });
const blocksQueryConstructor = (subqueries)=>{
    return graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`query blocks {
    ${subqueries}
  }`;
};
/**
 * @notice Fetches block objects for an array of timestamps.
 * @param {Array} timestamps
 */ const getBlocksFromTimestamps = async (timestamps, sortDirection = "desc", skipCount = 500, chainName = "BSC")=>{
    if (timestamps?.length === 0) {
        return [];
    }
    const fetchedData = await (0,_views_Info_utils_infoQueryHelpers__WEBPACK_IMPORTED_MODULE_3__/* .multiQuery */ .L)(blocksQueryConstructor, getBlockSubqueries(timestamps), state_info_constant__WEBPACK_IMPORTED_MODULE_2__/* .multiChainBlocksClient */ .OO[chainName], skipCount);
    const blocks = [];
    if (fetchedData) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key of Object.keys(fetchedData)){
            if (fetchedData[key].length > 0) {
                blocks.push({
                    timestamp: key.split("t")[1],
                    number: parseInt(fetchedData[key][0].number, 10)
                });
            }
        }
        // graphql-request does not guarantee same ordering of batched requests subqueries, hence manual sorting
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(blocks, (block)=>block.number, sortDirection);
    }
    return blocks;
};


/***/ }),

/***/ 41485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getChangeForPeriod)
/* harmony export */ });
/* harmony import */ var _views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48608);

/**
 * Given current value and value 1 and 2 periods (e.g. 1day + 2days, 1week - 2weeks) returns the amount change for latest period
 * and percentage change compared to the previous period.
 * @param valueNow - current value
 * @param valueOnePeriodAgo - value 1 period ago (e.g. 1 day or 1 week ago), period unit must be same as valueTwoPeriodsAgo
 * @param valueTwoPeriodsAgo - value 2 periods ago (e.g. 2 days or 2 weeks ago), period unit must be same as valueOnePeriodAgo
 * @returns amount change for the latest period and percentage change compared to previous period
 */ const getChangeForPeriod = (valueNow, valueOnePeriodAgo, valueTwoPeriodsAgo)=>{
    const currentPeriodAmount = (0,_views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_0__/* .getAmountChange */ .D)(valueNow, valueOnePeriodAgo);
    const previousPeriodAmount = (0,_views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_0__/* .getAmountChange */ .D)(valueOnePeriodAgo, valueTwoPeriodsAgo);
    const percentageChange = (0,_views_Info_utils_infoDataHelpers__WEBPACK_IMPORTED_MODULE_0__/* .getPercentChange */ .Y)(currentPeriodAmount, previousPeriodAmount);
    return [
        currentPeriodAmount,
        percentageChange
    ];
};


/***/ }),

/***/ 73806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getDeltaTimestamps)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns UTC timestamps for 24h ago, 48h ago, 7d ago and 14d ago relative to current date and time
 */ const getDeltaTimestamps = ()=>{
    const utcCurrentTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)(new Date()) * 1000;
    const t24h = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfMinute)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.subDays)(utcCurrentTime, 1)));
    const t48h = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfMinute)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.subDays)(utcCurrentTime, 2)));
    const t7d = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfMinute)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.subWeeks)(utcCurrentTime, 1)));
    const t14d = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.startOfMinute)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.subWeeks)(utcCurrentTime, 2)));
    return [
        t24h,
        t48h,
        t7d,
        t14d
    ];
};


/***/ }),

/***/ 78030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getLpFeesAndApr)
/* harmony export */ });
/* harmony import */ var _config_constants_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43437);

const getLpFeesAndApr = (volumeUSD, volumeUSDWeek, liquidityUSD)=>{
    const totalFees24h = volumeUSD * _config_constants_info__WEBPACK_IMPORTED_MODULE_0__/* .TOTAL_FEE */ .om;
    const totalFees7d = volumeUSDWeek * _config_constants_info__WEBPACK_IMPORTED_MODULE_0__/* .TOTAL_FEE */ .om;
    const lpFees24h = volumeUSD * _config_constants_info__WEBPACK_IMPORTED_MODULE_0__/* .LP_HOLDERS_FEE */ .BY;
    const lpFees7d = volumeUSDWeek * _config_constants_info__WEBPACK_IMPORTED_MODULE_0__/* .LP_HOLDERS_FEE */ .BY;
    const lpApr7d = liquidityUSD > 0 ? volumeUSDWeek * _config_constants_info__WEBPACK_IMPORTED_MODULE_0__/* .LP_HOLDERS_FEE */ .BY * _config_constants_info__WEBPACK_IMPORTED_MODULE_0__/* .WEEKS_IN_YEAR */ .MV * 100 / liquidityUSD : 0;
    return {
        totalFees24h,
        totalFees7d,
        lpFees24h,
        lpFees7d,
        lpApr7d: lpApr7d !== Infinity ? lpApr7d : 0
    };
};


/***/ }),

/***/ 3063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);

const mapping = {
    [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC]: "smartchain",
    [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM]: "ethereum"
};
const getTokenLogoURL = (token)=>{
    if (token && mapping[token.chainId]) {
        return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`;
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTokenLogoURL);


/***/ }),

/***/ 25997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GJ": () => (/* binding */ infoClientETH),
/* harmony export */   "MS": () => (/* binding */ infoStableSwapClient),
/* harmony export */   "dQ": () => (/* binding */ infoClient),
/* harmony export */   "iR": () => (/* binding */ bitQueryServerClient),
/* harmony export */   "vA": () => (/* binding */ getGQLHeaders),
/* harmony export */   "yH": () => (/* binding */ infoServerClient)
/* harmony export */ });
/* unused harmony exports infoClientWithChain, stableSwapClient */
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10494);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);



// Extra headers
// Mostly for dev environment
// No production env check since production preview might also need them
const getGQLHeaders = (endpoint)=>{
    if (endpoint === config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY) {
        return {
            "X-Sf": process.env.NEXT_PUBLIC_SF_HEADER || // hack for inject CI secret on window
             false && // @ts-ignore
            0
        };
    }
    return undefined;
};
const infoClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY, {
    headers: getGQLHeaders(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY)
});
const infoClientWithChain = (chainId)=>{
    return new GraphQLClient(INFO_CLIENT_WITH_CHAIN[chainId], {
        headers: getGQLHeaders(INFO_CLIENT_WITH_CHAIN[chainId])
    });
};
const infoClientETH = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT_ETH */ .EC);
const infoStableSwapClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .STABLESWAP_SUBGRAPH_CLIENT */ .gr);
const infoServerClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY, {
    headers: {
        "X-Sf": process.env.SF_HEADER
    },
    timeout: 5000
});
const stableSwapClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .STABLESWAP_SUBGRAPH_CLIENT */ .gr, {
    headers: getGQLHeaders(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .STABLESWAP_SUBGRAPH_CLIENT */ .gr)
});
const bitQueryServerClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .BIT_QUERY */ .d$, {
    headers: {
        // only server, no `NEXT_PUBLIC` not going to expose in client
        "X-API-KEY": process.env.BIT_QUERY_HEADER
    },
    timeout: 5000
});


/***/ }),

/***/ 10549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const requestWithTimeout = (graphQLClient, request, variables, timeout = 30000)=>{
    return Promise.race([
        variables ? graphQLClient.request(request, variables) : graphQLClient.request(request),
        new Promise((_, reject)=>{
            setTimeout(()=>{
                reject(new Error(`Request timed out after ${timeout} milliseconds`));
            }, timeout);
        }), 
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestWithTimeout);


/***/ }),

/***/ 15051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useBlockFromTimeStampSWR)
/* harmony export */ });
/* unused harmony export useBlocksFromTimestamps */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87434);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79847);
/* harmony import */ var utils_getBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_1__, swr_immutable__WEBPACK_IMPORTED_MODULE_2__]);
([state_info_hooks__WEBPACK_IMPORTED_MODULE_1__, swr_immutable__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/**
 * for a given array of timestamps, returns block entities
 * @param timestamps
 * @param sortDirection
 * @param skipCount
 */ const useBlocksFromTimestamps = (timestamps, sortDirection = "desc", skipCount = 1000)=>{
    const { 0: blocks , 1: setBlocks  } = useState();
    const { 0: error , 1: setError  } = useState(false);
    const timestampsString = JSON.stringify(timestamps);
    const blocksString = blocks ? JSON.stringify(blocks) : undefined;
    const chainName = useGetChainName();
    useEffect(()=>{
        const fetchData = async ()=>{
            const timestampsArray = JSON.parse(timestampsString);
            const result = await getBlocksFromTimestamps(timestampsArray, sortDirection, skipCount, chainName);
            if (result.length === 0) {
                setError(true);
            } else {
                setBlocks(result);
            }
        };
        const blocksArray = blocksString ? JSON.parse(blocksString) : undefined;
        if (!blocksArray && !error && chainName) {
            fetchData();
        }
    }, [
        blocksString,
        error,
        skipCount,
        sortDirection,
        timestampsString,
        chainName
    ]);
    return {
        blocks,
        error
    };
};
const useBlockFromTimeStampSWR = (timestamps, sortDirection = "desc", skipCount = 1000)=>{
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetChainName */ .qg)();
    const timestampsString = JSON.stringify(timestamps);
    const timestampsArray = JSON.parse(timestampsString);
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `info/blocks/${timestampsString}`,
        chainName
    ], ()=>(0,utils_getBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_3__/* .getBlocksFromTimestamps */ .z)(timestampsArray, sortDirection, skipCount, chainName));
    return {
        blocks: data
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getAmountChange),
/* harmony export */   "Y": () => (/* binding */ getPercentChange)
/* harmony export */ });
/**
 * Get increase/decrease of value compared to the previous value (e.g. 24h volume compared to 24h volume the day before )
 * @param valueNow - more recent value
 * @param valueBefore - value to compare with
 */ const getAmountChange = (valueNow, valueBefore)=>{
    if (valueNow && valueBefore) {
        return valueNow - valueBefore;
    }
    if (valueNow) {
        return valueNow;
    }
    return 0;
};
/**
 * Get increase/decrease of value compared to the previous value as a percentage
 * @param valueNow - more recent value
 * @param valueBefore - value to compare with
 */ const getPercentChange = (valueNow, valueBefore)=>{
    if (valueNow && valueBefore) {
        return (valueNow - valueBefore) / valueBefore * 100;
    }
    return 0;
};


/***/ }),

/***/ 56615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ multiQuery)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25997);
/* harmony import */ var utils_requestWithTimeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10549);



/**
 * Helper function to get large amount GraphQL subqueries
 * @param queryConstructor constructor function that combines subqueries
 * @param subqueries individual queries
 * @param endpoint GraphQL endpoint
 * @param skipCount how many subqueries to fire at a time
 * @returns
 */ const multiQuery = async (queryConstructor, subqueries, endpoint, skipCount = 1000)=>{
    let fetchedData = {};
    let allFound = false;
    let skip = 0;
    const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint, {
        headers: (0,utils_graphql__WEBPACK_IMPORTED_MODULE_1__/* .getGQLHeaders */ .vA)(endpoint)
    });
    try {
        while(!allFound){
            let end = subqueries.length;
            if (skip + skipCount < subqueries.length) {
                end = skip + skipCount;
            }
            const subqueriesSlice = subqueries.slice(skip, end);
            // eslint-disable-next-line no-await-in-loop
            const result = await (0,utils_requestWithTimeout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(client, queryConstructor(subqueriesSlice));
            fetchedData = {
                ...fetchedData,
                ...result
            };
            allFound = Object.keys(result).length < skipCount || skip + skipCount > subqueries.length;
            skip += skipCount;
        }
        return fetchedData;
    } catch (error) {
        console.error("Failed to fetch info data", error);
        return null;
    }
};


/***/ }),

/***/ 33231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44259);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 56699:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"PancakeSwap Default List","timestamp":"2022-01-26T11:45:09Z","version":{"major":4,"minor":0,"patch":0},"tags":{},"logoURI":"https://pancakeswap.finance/logo.png","keywords":["pancake","default"],"tokens":[{"name":"Wrapped BNB","symbol":"WBNB","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059fF775485246999027B3197955","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"},{"name":"Venus","symbol":"XVS","address":"0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63.png"},{"name":"VAI Stablecoin","symbol":"VAI","address":"0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7.png"},{"name":"Alpaca","symbol":"ALPACA","address":"0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F.png"},{"name":"Belt","symbol":"BELT","address":"0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png"},{"name":"TokoCrypto","symbol":"TKO","address":"0x9f589e3eabe42ebC94A44727b3f3531C0c877809","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png"},{"name":"Nerve Finance","symbol":"NRV","address":"0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096.png"},{"name":"Ellipsis","symbol":"EPS","address":"0xA7f552078dcC247C2684336020c03648500C6d9F","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xA7f552078dcC247C2684336020c03648500C6d9F.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0xFa60D973F7642B748046464e165A65B7323b0DEE","chainId":97,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814","chainId":97,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E","chainId":4,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png"},{"name":"Wrapped Ether","address":"0xc778417E063141139Fce010982780140Aa0cD5Ab","symbol":"WETH","decimals":18,"chainId":4,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png"},{"name":"Wrapped Ether","address":"0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6","symbol":"WETH","decimals":18,"chainId":5,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png"},{"name":"Wrapped Ether","address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","symbol":"WETH","decimals":18,"chainId":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"},{"name":"USD Coin","address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","symbol":"USDC","decimals":6,"chainId":1,"logoURI":"https://pancakeswap.finance/images/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png"},{"name":"Test USD Coin","address":"0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b","symbol":"tUSDC","decimals":6,"chainId":4,"logoURI":"https://pancakeswap.finance/images/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png"},{"name":"Test USD Coin","address":"0x07865c6E87B9F70255377e024ace6630C1Eaa37F","symbol":"tUSDC","decimals":6,"chainId":5,"logoURI":"https://pancakeswap.finance/images/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png"},{"name":"Tether USD","address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","symbol":"USDT","decimals":6,"chainId":1,"logoURI":"https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png"},{"name":"Wrapped BNB","symbol":"WBNB","address":"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd","chainId":97,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"},{"name":"Wrapped BTC","symbol":"WBTC","address":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","chainId":1,"decimals":8,"logoURI":"https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png"}]}');

/***/ }),

/***/ 15118:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Pancake Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["pancake","unsupported"],"tokens":[]}');

/***/ }),

/***/ 53707:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Pancake Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["pancake","unsupported"],"tokens":[{"name":"Pokemoney Coin","symbol":"PMY","address":"0x32ff5b4C3B1744F0344D96fA2f87799Ed2805749","chainId":56,"decimals":18}]}');

/***/ })

};
;
//# sourceMappingURL=1051.js.map