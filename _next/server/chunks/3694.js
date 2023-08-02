"use strict";
exports.id = 3694;
exports.ids = [3694];
exports.modules = {

/***/ 16588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80423);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DescriptionWithTx = ({ txHash , txChainId , children ,  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            typeof children === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                as: "p",
                children: children
            }) : children,
            txHash && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                external: true,
                href: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getBlockExploreLink */ .C)(txHash, "transaction", txChainId || chainId),
                children: [
                    t("View on %site%", {
                        site: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getBlockExploreName */ .X0)(txChainId || chainId)
                    }),
                    ": ",
                    (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(txHash, 8, 0)
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptionWithTx);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* reexport safe */ _DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__]);
_DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useCallWithMarketGasPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__);



function useCallWithMarketGasPrice() {
    /**
   * Perform a contract call with a gas price returned from useGasPrice
   * @param contract Used to perform the call
   * @param methodName The name of the method called
   * @param methodArgs An array of arguments to pass to the method
   * @param overrides An overrides object to pass to the method. gasPrice passed in here will take priority over the price returned by useGasPrice
   * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
   */ const callWithMarketGasPrice = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (contract, methodName, methodArgs = [], overrides = null)=>{
        (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.addBreadcrumb)({
            type: "Transaction",
            message: `Call with market gas price`,
            data: {
                contractAddress: contract.address,
                methodName,
                methodArgs,
                overrides
            }
        });
        const contractMethod = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(contract, methodName);
        const tx = await contractMethod(...methodArgs, {
            ...overrides
        });
        if (tx) {
            (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.addBreadcrumb)({
                type: "Transaction",
                message: `Transaction sent: ${tx.hash}`,
                data: {
                    hash: tx.hash,
                    from: tx.from,
                    gasLimit: tx.gasLimit?.toString(),
                    nonce: tx.nonce
                }
            });
        }
        return tx;
    }, []);
    return {
        callWithMarketGasPrice
    };
}


/***/ }),

/***/ 78950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCatchTxError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91397);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var utils_sentry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20233);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_3__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_3__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// -32000 is insufficient funds for gas * price + value
const isGasEstimationError = (err)=>err?.data?.code === -32000;
function useCatchTxError() {
    const { provider  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { toastError , toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .p)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: txResponseLoading , 1: setTxResponseLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleNormalError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((error, tx)=>{
        (0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(error);
        if (tx) {
            toastError(t("Error"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: tx.hash,
                children: t("Please try again. Confirm the transaction and make sure you are paying enough gas!")
            }));
        } else {
            toastError(t("Error"), t("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
        }
    }, [
        t,
        toastError
    ]);
    const fetchWithCatchTxError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (callTx)=>{
        let tx = null;
        try {
            setLoading(true);
            /**
         * https://github.com/vercel/swr/pull/1450
         *
         * wait for useSWRMutation finished, so we could apply SWR in case manually trigger tx call
         */ tx = await callTx();
            toastSuccess(`${t("Transaction Submitted")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: tx.hash
            }));
            const receipt = await tx.wait();
            return receipt;
        } catch (error) {
            if (!(0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .isUserRejected */ .Z)(error)) {
                if (!tx) {
                    handleNormalError(error);
                } else {
                    provider.call(tx, tx.blockNumber).then(()=>{
                        handleNormalError(error, tx);
                    }).catch((err)=>{
                        if (isGasEstimationError(err)) {
                            handleNormalError(error, tx);
                        } else {
                            (0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(err);
                            let recursiveErr = err;
                            let reason;
                            // for MetaMask
                            if (recursiveErr?.data?.message) {
                                reason = recursiveErr?.data?.message;
                            } else {
                                // for other wallets
                                // Reference
                                // https://github.com/Uniswap/interface/blob/ac962fb00d457bc2c4f59432d7d6d7741443dfea/src/hooks/useSwapCallback.tsx#L216-L222
                                while(recursiveErr){
                                    reason = recursiveErr.reason ?? recursiveErr.message ?? reason;
                                    recursiveErr = recursiveErr.error ?? recursiveErr.data?.originalError;
                                }
                            }
                            const REVERT_STR = "execution reverted: ";
                            const indexInfo = reason?.indexOf(REVERT_STR);
                            const isRevertedError = indexInfo >= 0;
                            if (isRevertedError) reason = reason.substring(indexInfo + REVERT_STR.length);
                            toastError(t("Failed"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                                txHash: tx.hash,
                                children: isRevertedError ? t("Transaction failed with error: %reason%", {
                                    reason
                                }) : t("Transaction failed. For detailed error message:")
                            }));
                        }
                    });
                }
            }
        } finally{
            setLoading(false);
        }
        return null;
    }, [
        handleNormalError,
        toastError,
        provider,
        toastSuccess,
        t
    ]);
    const fetchTxResponse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (callTx)=>{
        let tx = null;
        try {
            setTxResponseLoading(true);
            /**
         * https://github.com/vercel/swr/pull/1450
         *
         * wait for useSWRMutation finished, so we could apply SWR in case manually trigger tx call
         */ tx = await callTx();
            toastSuccess(`${t("Transaction Submitted")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: tx.hash
            }));
            return tx;
        } catch (error) {
            if (!(0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .isUserRejected */ .Z)(error)) {
                if (!tx) {
                    handleNormalError(error);
                } else {
                    provider.call(tx, tx.blockNumber).then(()=>{
                        handleNormalError(error, tx);
                    }).catch((err)=>{
                        if (isGasEstimationError(err)) {
                            handleNormalError(error, tx);
                        } else {
                            (0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(err);
                            let recursiveErr = err;
                            let reason;
                            // for MetaMask
                            if (recursiveErr?.data?.message) {
                                reason = recursiveErr?.data?.message;
                            } else {
                                // for other wallets
                                // Reference
                                // https://github.com/Uniswap/interface/blob/ac962fb00d457bc2c4f59432d7d6d7741443dfea/src/hooks/useSwapCallback.tsx#L216-L222
                                while(recursiveErr){
                                    reason = recursiveErr.reason ?? recursiveErr.message ?? reason;
                                    recursiveErr = recursiveErr.error ?? recursiveErr.data?.originalError;
                                }
                            }
                            const REVERT_STR = "execution reverted: ";
                            const indexInfo = reason?.indexOf(REVERT_STR);
                            const isRevertedError = indexInfo >= 0;
                            if (isRevertedError) reason = reason.substring(indexInfo + REVERT_STR.length);
                            toastError(t("Failed"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                                txHash: tx.hash,
                                children: isRevertedError ? t("Transaction failed with error: %reason%", {
                                    reason
                                }) : t("Transaction failed. For detailed error message:")
                            }));
                        }
                    });
                }
            }
        } finally{
            setTxResponseLoading(false);
        }
        return null;
    }, [
        handleNormalError,
        toastError,
        provider,
        toastSuccess,
        t
    ]);
    return {
        fetchWithCatchTxError,
        fetchTxResponse,
        loading,
        txResponseLoading
    };
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

/***/ 20233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ logError),
/* harmony export */   "Z": () => (/* binding */ isUserRejected)
/* harmony export */ });
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);

const assignError = (maybeError)=>{
    if (typeof maybeError === "string") {
        return new Error(maybeError);
    }
    if (typeof maybeError === "object") {
        const error = new Error(maybeError?.message ?? String(maybeError));
        if (maybeError?.stack) {
            error.stack = maybeError.stack;
        }
        if (maybeError?.code) {
            error.name = maybeError.code;
        }
        return error;
    }
    return maybeError;
};
const isUserRejected = (err)=>{
    // provider user rejected error code
    return typeof err === "object" && "code" in err && err.code === 4001;
};
const ENABLED_LOG = false;
const logError = (error)=>{
    if (ENABLED_LOG) {
        if (error instanceof Error) {
            (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.captureException)(error);
        } else {
            (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.captureException)(assignError(error), error);
        }
    }
    console.error(error);
};


/***/ }),

/***/ 15713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-df4f0a61-0"
})`
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
CardBody.defaultProps = {
    p: "24px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);


/***/ }),

/***/ 78448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Loading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-d9a6ed17-0"
})`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #ddd;
  border-bottom: 8px solid #ddd;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


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
//# sourceMappingURL=3694.js.map