"use strict";
exports.id = 7134;
exports.ids = [7134];
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

/***/ 10037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ DAY_IN_SECONDS)
/* harmony export */ });
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = 3600;
const DAY_IN_SECONDS = 86400;
const MONTH_IN_SECONDS = 2629800;
const YEAR_IN_SECONDS = 31557600;
/**
 * Format number of seconds into year, month, day, hour, minute, seconds
 *
 * @param seconds
 */ const getTimePeriods = (seconds)=>{
    let delta = Math.abs(seconds);
    const timeLeft = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    if (delta >= YEAR_IN_SECONDS) {
        timeLeft.years = Math.floor(delta / YEAR_IN_SECONDS);
        delta -= timeLeft.years * YEAR_IN_SECONDS;
    }
    if (delta >= MONTH_IN_SECONDS) {
        timeLeft.months = Math.floor(delta / MONTH_IN_SECONDS);
        delta -= timeLeft.months * MONTH_IN_SECONDS;
    }
    if (delta >= DAY_IN_SECONDS) {
        timeLeft.days = Math.floor(delta / DAY_IN_SECONDS);
        delta -= timeLeft.days * DAY_IN_SECONDS;
    }
    if (delta >= HOUR_IN_SECONDS) {
        timeLeft.hours = Math.floor(delta / HOUR_IN_SECONDS);
        delta -= timeLeft.hours * HOUR_IN_SECONDS;
    }
    if (delta >= MINUTE_IN_SECONDS) {
        timeLeft.minutes = Math.floor(delta / MINUTE_IN_SECONDS);
        delta -= timeLeft.minutes * MINUTE_IN_SECONDS;
    }
    timeLeft.seconds = delta;
    return timeLeft;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTimePeriods);


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


/***/ })

};
;
//# sourceMappingURL=7134.js.map