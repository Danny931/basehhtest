"use strict";
exports.id = 2605;
exports.ids = [2605,7013,7854];
exports.modules = {

/***/ 97344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ButtonArrangement),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83502);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33231);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




var ButtonArrangement;
(function(ButtonArrangement) {
    ButtonArrangement["ROW"] = "row";
    ButtonArrangement["SEQUENTIAL"] = "sequential";
})(ButtonArrangement || (ButtonArrangement = {}));
const StyledApproveConfirmButtonRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c0273ef8-0"
})`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  ${({ theme  })=>theme.mediaQueries.md} {
    grid-template-columns: 1fr 24px 1fr;
  }
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c0273ef8-1"
})`
  width: 100%;

  ${({ theme  })=>theme.mediaQueries.md} {
    min-width: 160px;
  }
`;
const iconAttrs = {
    width: "24px",
    color: "textDisabled"
};
const ChevronRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).attrs(iconAttrs).withConfig({
    componentId: "sc-c0273ef8-2"
})`
  display: none;

  ${({ theme  })=>theme.mediaQueries.md} {
    display: block;
  }
`;
const ChevronBottom = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).attrs(iconAttrs).withConfig({
    componentId: "sc-c0273ef8-3"
})`
  display: block;

  ${({ theme  })=>theme.mediaQueries.md} {
    display: none;
  }
`;
const spinnerIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    spin: true,
    color: "currentColor"
});
const ApproveConfirmButtons = ({ isApproveDisabled , isApproving , isConfirming , isConfirmDisabled , onApprove , onConfirm , buttonArrangement =ButtonArrangement.ROW , confirmLabel , confirmId ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const confirmButtonText = confirmLabel ?? t("Confirm");
    const ApproveConfirmRow = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledApproveConfirmButtonRow, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        disabled: isApproveDisabled,
                        onClick: onApprove,
                        endIcon: isApproving ? spinnerIcon : undefined,
                        isLoading: isApproving,
                        children: isApproving ? t("Enabling") : t("Enable")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChevronRight, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChevronBottom, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        id: confirmId,
                        onClick: onConfirm,
                        disabled: isConfirmDisabled,
                        isLoading: isConfirming,
                        endIcon: isConfirming ? spinnerIcon : undefined,
                        children: isConfirming ? t("Confirming") : confirmButtonText
                    })
                })
            ]
        });
    };
    const ApproveConfirmSequential = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: isApproveDisabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    id: confirmId,
                    onClick: onConfirm,
                    disabled: isConfirmDisabled,
                    isLoading: isConfirming,
                    endIcon: isConfirming ? spinnerIcon : undefined,
                    children: isConfirming ? t("Confirming") : confirmButtonText
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    onClick: onApprove,
                    endIcon: isApproving ? spinnerIcon : undefined,
                    isLoading: isApproving,
                    children: isApproving ? t("Enabling") : t("Enable")
                })
            })
        });
    };
    return buttonArrangement === ButtonArrangement.ROW ? ApproveConfirmRow() : ApproveConfirmSequential();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApproveConfirmButtons);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h2": () => (/* binding */ GreyCard),
/* harmony export */   "hl": () => (/* binding */ LightCard),
/* harmony export */   "m5": () => (/* binding */ LightGreyCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-21be8dee-0"
})`
  width: ${({ width  })=>width ?? "100%"};
  padding: ${({ padding  })=>padding ?? "1.25rem"};
  border: ${({ border  })=>border};
  border-radius: ${({ borderRadius  })=>borderRadius ?? "16px"};
  background-color: ${({ theme  })=>theme.colors.background};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
const LightCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-1"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
`;
const LightGreyCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-2"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  background-color: ${({ theme  })=>theme.colors.background};
`;
const GreyCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-3"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 46684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ TokenImage),
/* harmony export */   "q": () => (/* binding */ TokenPairImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83548);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27387);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);



const getImageUrlFromToken = (token)=>{
    const address = token?.isNative ? token.wrapped.address : token.address;
    if (token.chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC) {
        return `/images/${token.chainId}/tokens/${address}.png`;
    }
    return `/images/tokens/${address}.png`;
};
const TokenPairImage = ({ primaryToken , secondaryToken , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        primarySrc: getImageUrlFromToken(primaryToken),
        secondarySrc: getImageUrlFromToken(secondaryToken),
        ...props
    });
};
const TokenImage = ({ token , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        src: getImageUrlFromToken(token),
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FLAG_FARM)
/* harmony export */ });
const FLAG_FARM = "pkg";


/***/ }),

/***/ 64850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _useCatchTxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _useCatchTxError__WEBPACK_IMPORTED_MODULE_3__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _useCatchTxError__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const initialState = {
    approvalState: "idle",
    confirmState: "idle"
};
const reducer = (state, actions)=>{
    switch(actions.type){
        case "approve_sending":
            return {
                ...state,
                approvalState: "loading"
            };
        case "approve_receipt":
            return {
                ...state,
                approvalState: "success"
            };
        case "approve_error":
            return {
                ...state,
                approvalState: "fail"
            };
        case "confirm_sending":
            return {
                ...state,
                confirmState: "loading"
            };
        case "confirm_receipt":
            return {
                ...state,
                confirmState: "success"
            };
        case "confirm_error":
            return {
                ...state,
                confirmState: "fail"
            };
        default:
            return state;
    }
};
const useApproveConfirmTransaction = ({ onApprove , onConfirm , onRequiresApproval , onSuccess =(lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()) , onApproveSuccess =(lodash_noop__WEBPACK_IMPORTED_MODULE_1___default())  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
    const handlePreApprove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onRequiresApproval);
    const { fetchWithCatchTxError  } = (0,_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const handleApprove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            dispatch({
                type: "approve_sending"
            });
            return onApprove();
        });
        if (receipt?.status) {
            dispatch({
                type: "approve_receipt"
            });
            onApproveSuccess({
                state,
                receipt
            });
        } else {
            dispatch({
                type: "approve_error"
            });
        }
    }, [
        onApprove,
        onApproveSuccess,
        state,
        fetchWithCatchTxError
    ]);
    const handleConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (params = {})=>{
        const receipt = await fetchWithCatchTxError(()=>{
            dispatch({
                type: "confirm_sending"
            });
            return onConfirm(params);
        });
        if (receipt?.status) {
            dispatch({
                type: "confirm_receipt"
            });
            onSuccess({
                state,
                receipt
            });
        } else {
            dispatch({
                type: "confirm_error"
            });
        }
    }, [
        onConfirm,
        dispatch,
        onSuccess,
        state,
        fetchWithCatchTxError
    ]);
    // Check if approval is necessary, re-check if account changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (account && handlePreApprove.current) {
            handlePreApprove.current().then((requiresApproval)=>{
                if (!requiresApproval) {
                    dispatch({
                        type: "approve_receipt"
                    });
                }
            });
        }
    }, [
        account,
        handlePreApprove,
        dispatch
    ]);
    return {
        isApproving: state.approvalState === "loading",
        isApproved: state.approvalState === "success",
        isConfirming: state.confirmState === "loading",
        isConfirmed: state.confirmState === "success",
        hasApproveFailed: state.approvalState === "fail",
        hasConfirmFailed: state.confirmState === "fail",
        handleApprove,
        handleConfirm
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApproveConfirmTransaction);

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

/***/ 34195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ featureFarmApiAtom),
/* harmony export */   "y": () => (/* binding */ useFeatureFlag)
/* harmony export */ });
/* harmony import */ var config_flag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20380);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const storage = {
    ...(0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>sessionStorage),
    delayInit: true
};
const featureFarmApiAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)("feature-farm-api", config_flag__WEBPACK_IMPORTED_MODULE_2__/* .FLAG_FARM */ .u, // @ts-ignore
storage);
featureFarmApiAtom.onMount = (set)=>{
    const params = new URL(window.location.href).searchParams;
    const flag = params.get("use");
    if (flag === "farmApi") {
        set("api");
    }
};
function useFeatureFlag(featureAtom) {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtomValue)(featureAtom);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useSlowRefreshEffect),
/* harmony export */   "a": () => (/* binding */ useFastRefreshEffect)
/* harmony export */ });
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17943);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15941);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const EMPTY_ARRAY = [];
function useFastRefreshEffect(effect, deps) {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data =0  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(chainId && [
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .FAST_INTERVAL */ .sR,
        "blockNumber",
        chainId
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect.bind(null, data), [
        data,
        ...deps || EMPTY_ARRAY
    ]);
}
function useSlowRefreshEffect(effect, deps) {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data =0  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(chainId && [
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOW_INTERVAL */ .KI,
        "blockNumber",
        chainId
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect.bind(null, data), [
        data,
        ...deps || EMPTY_ARRAY
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nn": () => (/* binding */ useGetCakeBalance),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nu": () => (/* binding */ useGetBnbBalance)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72502);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17943);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15941);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85576);
/* harmony import */ var utils_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11536);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74860);
/* harmony import */ var _useSWRContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_8__, _useContract__WEBPACK_IMPORTED_MODULE_11__, _useSWRContract__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_8__, _useContract__WEBPACK_IMPORTED_MODULE_11__, _useSWRContract__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useTokenBalance = (tokenAddress, forceBSC)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const contract = (0,_useContract__WEBPACK_IMPORTED_MODULE_11__/* .useTokenContract */ .Ib)(tokenAddress, false);
    const key = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>account ? {
            contract: forceBSC ? contract.connect(utils_providers__WEBPACK_IMPORTED_MODULE_10__/* .bscRpcProvider */ .v) : contract,
            methodName: "balanceOf",
            params: [
                account
            ]
        } : null, [
        account,
        contract,
        forceBSC
    ]);
    const { data , status , ...rest } = (0,_useSWRContract__WEBPACK_IMPORTED_MODULE_12__/* .useSWRContract */ .Av)(key, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_3__/* .FAST_INTERVAL */ .sR
    });
    return {
        ...rest,
        fetchStatus: status,
        balance: data ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(data.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW
    };
};
const useGetBnbBalance = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { status , data , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])([
        account,
        "bnbBalance"
    ], async ()=>{
        return utils_providers__WEBPACK_IMPORTED_MODULE_10__/* .bscRpcProvider.getBalance */ .v.getBalance(account);
    });
    return {
        balance: data || _ethersproject_constants__WEBPACK_IMPORTED_MODULE_5__.Zero,
        fetchStatus: status,
        refresh: mutate
    };
};
const useGetCakeBalance = ()=>{
    const { chainId  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { balance , fetchStatus  } = useTokenBalance(_pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .CAKE */ .cr[chainId]?.address || _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .CAKE */ .cr[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_6__.ChainId.BSC]?.address, true);
    // TODO: Remove ethers conversion once useTokenBalance is converted to ethers.BigNumber
    return {
        balance: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(balance.toString()),
        fetchStatus
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTokenBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cs": () => (/* binding */ usePollFarmsWithUserData),
/* harmony export */   "Dx": () => (/* binding */ useFarmUser),
/* harmony export */   "E2": () => (/* binding */ useFarms),
/* harmony export */   "Iu": () => (/* binding */ usePriceCakeBusd),
/* harmony export */   "f5": () => (/* binding */ useFarmsLength),
/* harmony export */   "f6": () => (/* binding */ useFarmFromPid),
/* harmony export */   "w5": () => (/* binding */ useLpTokenPrice)
/* harmony export */ });
/* unused harmony exports usePollCoreFarmData, useFarmsPoolLength, useFarmFromLpSymbol, useBusdPriceFromPid */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17943);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36695);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36204);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79847);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85576);
/* harmony import */ var views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62704);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12895);
/* harmony import */ var hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68175);
/* harmony import */ var hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34195);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65498);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44868);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__, _selectors__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__, _selectors__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function useFarmsLength() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(chainId ? [
        "farmsLength",
        chainId
    ] : null, async ()=>{
        const mc = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getMasterchefContract */ .aE)(undefined, chainId);
        return (await mc.poolLength()).toNumber();
    });
}
const usePollFarmsWithUserData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { proxyAddress , proxyCreated , isLoading: isProxyContractLoading ,  } = (0,views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .featureFarmApiAtom */ .x);
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(chainId ? [
        "publicFarmData",
        chainId
    ] : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__.getFarmConfig)(chainId);
        const pids = farmsConfig.map((farmToFetch)=>farmToFetch.pid);
        dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmsPublicDataAsync */ .eG)({
            pids,
            chainId,
            flag: farmFlag
        }));
    }, {
        refreshInterval: farmFlag === "api" ? 50 * 1000 : config_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOW_INTERVAL */ .KI
    });
    const name = proxyCreated ? [
        "farmsWithUserData",
        account,
        proxyAddress,
        chainId
    ] : [
        "farmsWithUserData",
        account,
        chainId
    ];
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(account && chainId && !isProxyContractLoading ? name : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__.getFarmConfig)(chainId);
        const pids = farmsConfig.map((farmToFetch)=>farmToFetch.pid);
        const params = proxyCreated ? {
            account,
            pids,
            proxyAddress,
            chainId
        } : {
            account,
            pids,
            chainId
        };
        dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmUserDataAsync */ .IV)(params));
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOW_INTERVAL */ .KI
    });
};
/**
 * Fetches the "core" farm data used globally
 * 2 = CAKE-BNB LP
 * 3 = BUSD-BNB LP
 */ const coreFarmPIDs = {
    56: [
        2,
        3
    ],
    97: [
        4,
        10
    ],
    5: [
        13,
        11
    ],
    1: [
        124,
        125
    ]
};
const usePollCoreFarmData = ()=>{
    const dispatch = useAppDispatch();
    const { chainId  } = useActiveWeb3React();
    const farmFlag = useFeatureFlag(featureFarmApiAtom);
    useEffect(()=>{
        if (chainId) {
            dispatch(fetchInitialFarmsData({
                chainId
            }));
        }
    }, [
        chainId,
        dispatch
    ]);
    useFastRefreshEffect(()=>{
        if (chainId && farmFlag !== "api") {
            dispatch(fetchFarmsPublicDataAsync({
                pids: coreFarmPIDs[chainId],
                chainId,
                flag: farmFlag
            }));
        }
    }, [
        dispatch,
        chainId,
        farmFlag
    ]);
};
const useFarms = ()=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .farmSelector */ .b4)(chainId), [
        chainId
    ]));
};
const useFarmsPoolLength = ()=>{
    return useSelector((state)=>state.farms.poolLength);
};
const useFarmFromPid = (pid)=>{
    const farmFromPid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeFarmFromPidSelector */ .Fy)(pid), [
        pid
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(farmFromPid);
};
const useFarmFromLpSymbol = (lpSymbol)=>{
    const farmFromLpSymbol = useMemo(()=>farmFromLpSymbolSelector(lpSymbol), [
        lpSymbol
    ]);
    return useSelector(farmFromLpSymbol);
};
const useFarmUser = (pid)=>{
    const farmFromPidUser = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeUserFarmFromPidSelector */ .RL)(pid), [
        pid
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(farmFromPidUser);
};
// Return the base token price for a farm, from a given pid
const useBusdPriceFromPid = (pid)=>{
    const busdPriceFromPid = useMemo(()=>makeBusdPriceFromPidSelector(pid), [
        pid
    ]);
    return useSelector(busdPriceFromPid);
};
const useLpTokenPrice = (symbol)=>{
    const lpTokenPriceFromLpSymbol = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeLpTokenPriceFromLpSymbolSelector */ .Ud)(symbol), [
        symbol
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(lpTokenPriceFromLpSymbol);
};
/**
 * @deprecated use the BUSD hook in /hooks
 */ const usePriceCakeBusd = ({ forceMainnet  } = {
    forceMainnet: false
})=>{
    const price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__/* .useCakeBusdPrice */ .S9)({
        forceMainnet
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>price ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(price.toSignificant(6)) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_8__/* .BIG_ZERO */ .HW, [
        price
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fy": () => (/* binding */ makeFarmFromPidSelector),
/* harmony export */   "RL": () => (/* binding */ makeUserFarmFromPidSelector),
/* harmony export */   "Ud": () => (/* binding */ makeLpTokenPriceFromLpSymbolSelector),
/* harmony export */   "b4": () => (/* binding */ farmSelector)
/* harmony export */ });
/* unused harmony exports makeBusdPriceFromPidSelector, priceCakeFromPidSelector, farmFromLpSymbolSelector */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64150);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45366);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3256);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__]);
_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const deserializeFarmUserData = (farm)=>{
    return {
        allowance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.allowance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        tokenBalance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.tokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        stakedBalance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        earnings: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.earnings) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        proxy: {
            allowance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.allowance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            tokenBalance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.tokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            stakedBalance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            earnings: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.earnings) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW
        }
    };
};
const deserializeFarm = (farm)=>{
    const { lpAddress , lpSymbol , pid , vaultPid , dual , multiplier , isCommunity , auctionHostingStartSeconds , quoteTokenPriceBusd , tokenPriceBusd , boosted , infoStableSwapAddress ,  } = farm;
    const auctionHostingStartDate = !(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(auctionHostingStartSeconds) ? new Date(auctionHostingStartSeconds * 1000) : null;
    const auctionHostingEndDate = auctionHostingStartDate ? date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1___default()(auctionHostingStartDate, _config_constants__WEBPACK_IMPORTED_MODULE_6__/* .FARM_AUCTION_HOSTING_IN_SECONDS */ .ki) : null;
    const now = Date.now();
    const isFarmCommunity = isCommunity || !!(auctionHostingStartDate && auctionHostingEndDate && auctionHostingStartDate.getTime() < now && auctionHostingEndDate.getTime() > now);
    return {
        lpAddress,
        lpSymbol,
        pid,
        vaultPid,
        dual,
        multiplier,
        isCommunity: isFarmCommunity,
        auctionHostingEndDate: auctionHostingEndDate?.toJSON(),
        quoteTokenPriceBusd,
        tokenPriceBusd,
        token: (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__/* .deserializeToken */ .iG)(farm.token),
        quoteToken: (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__/* .deserializeToken */ .iG)(farm.quoteToken),
        userData: deserializeFarmUserData(farm),
        tokenAmountTotal: farm.tokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenAmountTotal) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        quoteTokenAmountTotal: farm.quoteTokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.quoteTokenAmountTotal) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTotalInQuoteToken: farm.lpTotalInQuoteToken ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalInQuoteToken) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTotalSupply: farm.lpTotalSupply ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalSupply) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTokenPrice: farm.lpTokenPrice ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTokenPrice) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        tokenPriceVsQuote: farm.tokenPriceVsQuote ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenPriceVsQuote) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        poolWeight: farm.poolWeight ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.poolWeight) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        boosted,
        isStable: Boolean(infoStableSwapAddress)
    };
};
const selectCakeFarm = (state)=>state.farms.data.find((f)=>f.pid === 2);
const selectFarmByKey = (key, value)=>(state)=>state.farms.data.find((f)=>f[key] === value);
const makeFarmFromPidSelector = (pid)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("pid", pid)
    ], (farm)=>deserializeFarm(farm));
const makeBusdPriceFromPidSelector = (pid)=>createSelector([
        selectFarmByKey("pid", pid)
    ], (farm)=>{
        return farm && new BigNumber(farm.tokenPriceBusd);
    });
const makeUserFarmFromPidSelector = (pid)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("pid", pid)
    ], (farm)=>{
        const { allowance , tokenBalance , stakedBalance , earnings , proxy  } = deserializeFarmUserData(farm);
        return {
            allowance,
            tokenBalance,
            stakedBalance,
            earnings,
            proxy
        };
    });
const priceCakeFromPidSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
    selectCakeFarm
], (cakeBnbFarm)=>{
    const cakePriceBusdAsString = cakeBnbFarm?.tokenPriceBusd;
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(cakePriceBusdAsString);
});
const farmFromLpSymbolSelector = (lpSymbol)=>createSelector([
        selectFarmByKey("lpSymbol", lpSymbol)
    ], (farm)=>deserializeFarm(farm));
const makeLpTokenPriceFromLpSymbolSelector = (lpSymbol)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("lpSymbol", lpSymbol)
    ], (farm)=>{
        let lpTokenPrice = _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
        if (farm) {
            const lpTotalInQuoteToken = farm.lpTotalInQuoteToken ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalInQuoteToken) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
            const lpTotalSupply = farm.lpTotalSupply ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalSupply) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
            if (lpTotalSupply.gt(0) && lpTotalInQuoteToken.gt(0)) {
                const farmTokenPriceInUsd = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenPriceBusd);
                const tokenAmountTotal = farm.tokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenAmountTotal) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
                // Total value of base token in LP
                const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(tokenAmountTotal);
                // Double it to get overall value in LP
                const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2);
                // Divide total value of all tokens, by the number of LP tokens
                const totalLpTokens = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceAmount */ .U4)(lpTotalSupply);
                lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens);
            }
        }
        return lpTokenPrice;
    });
const farmSelector = (chainId)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)((state)=>state.farms, (farms)=>{
        const deserializedFarmsData = farms.data.map(deserializeFarm).filter((farm)=>farm.token.chainId === chainId);
        const { loadArchivedFarmsData , userDataLoaded , poolLength , regularCakePerBlock  } = farms;
        return {
            loadArchivedFarmsData,
            userDataLoaded,
            data: deserializedFarmsData,
            poolLength,
            regularCakePerBlock
        };
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ usePool),
/* harmony export */   "Es": () => (/* binding */ useCakeVaultUserData),
/* harmony export */   "FM": () => (/* binding */ useFetchIfo),
/* harmony export */   "Xo": () => (/* binding */ useCakeVault),
/* harmony export */   "YX": () => (/* binding */ useDeserializedPoolByVaultKey),
/* harmony export */   "cq": () => (/* binding */ useIfoCredit),
/* harmony export */   "dd": () => (/* binding */ useIfoCeiling),
/* harmony export */   "eB": () => (/* binding */ useVaultPoolByKey),
/* harmony export */   "f6": () => (/* binding */ usePoolsWithVault),
/* harmony export */   "l7": () => (/* binding */ usePoolsPageFetch),
/* harmony export */   "uf": () => (/* binding */ useCakeVaultPublicData)
/* harmony export */ });
/* unused harmony export useFetchPublicPoolsData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36204);
/* harmony import */ var hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68175);
/* harmony import */ var hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34195);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17943);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79847);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65498);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73486);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34376);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93638);
/* harmony import */ var _farms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44868);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, ___WEBPACK_IMPORTED_MODULE_10__, _selectors__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, ___WEBPACK_IMPORTED_MODULE_10__, _selectors__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const lPoolAddresses = config_constants_pools__WEBPACK_IMPORTED_MODULE_9__/* .livePools.filter */ .$$.filter(({ sousId  })=>sousId !== 0).map(({ earningToken  })=>earningToken.address);
// Only fetch farms for live pools
const getActiveFarms = async (chainId)=>{
    const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_14__.getFarmConfig)(chainId);
    return farmsConfig.filter(({ token , pid , quoteToken  })=>pid !== 0 && (token.symbol === "CAKE" && quoteToken.symbol === "WBNB" || token.symbol === "BUSD" && quoteToken.symbol === "WBNB" || lPoolAddresses.find((poolAddress)=>poolAddress === token.address))).map((farm)=>farm.pid);
};
const getCakePriceFarms = async (chainId)=>{
    const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_14__.getFarmConfig)(chainId);
    return farmsConfig.filter(({ token , pid , quoteToken  })=>pid !== 0 && (token.symbol === "CAKE" && quoteToken.symbol === "WBNB" || token.symbol === "BUSD" && quoteToken.symbol === "WBNB")).map((farm)=>farm.pid);
};
const useFetchPublicPoolsData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .featureFarmApiAtom */ .x);
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useSlowRefreshEffect */ .X)((currentBlock)=>{
        const fetchPoolsDataWithFarms = async ()=>{
            const activeFarms = await getActiveFarms(chainId);
            await dispatch((0,_farms__WEBPACK_IMPORTED_MODULE_12__/* .fetchFarmsPublicDataAsync */ .eG)({
                pids: activeFarms,
                chainId,
                flag: farmFlag
            }));
            (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchPoolsPublicDataAsync */ .ht)(currentBlock, chainId));
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchPoolsStakingLimitsAsync */ .E$)());
            });
        };
        fetchPoolsDataWithFarms();
    }, [
        dispatch,
        chainId,
        farmFlag
    ]);
};
const usePool = (sousId)=>{
    const poolWithUserDataLoadingSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_13__/* .makePoolWithUserDataLoadingSelector */ .Eo)(sousId), [
        sousId
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(poolWithUserDataLoadingSelector);
};
const usePoolsWithVault = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_13__/* .poolsWithVaultSelector */ .l_);
};
const useDeserializedPoolByVaultKey = (vaultKey)=>{
    const vaultPoolWithKeySelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_13__/* .makeVaultPoolWithKeySelector */ .Fs)(vaultKey), [
        vaultKey
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(vaultPoolWithKeySelector);
};
const usePoolsPageFetch = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    useFetchPublicPoolsData();
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useFastRefreshEffect */ .a)(()=>{
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultPublicData */ .P4)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeFlexibleSideVaultPublicData */ .i)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchIfoPublicDataAsync */ .aG)());
            if (account) {
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchPoolsUserDataAsync */ .XK)(account));
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                    account
                }));
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeFlexibleSideVaultUserData */ .dU)({
                    account
                }));
            }
        });
    }, [
        account,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultFees */ .HX)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeFlexibleSideVaultFees */ .qd)());
        });
    }, [
        dispatch
    ]);
};
const useCakeVaultUserData = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useFastRefreshEffect */ .a)(()=>{
        if (account) {
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
        }
    }, [
        account,
        dispatch
    ]);
};
const useCakeVaultPublicData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useFastRefreshEffect */ .a)(()=>{
        dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultPublicData */ .P4)());
    }, [
        dispatch
    ]);
};
const useFetchIfo = ()=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .featureFarmApiAtom */ .x);
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])("fetchIfoPublicData", async ()=>{
        const cakePriceFarms = await getCakePriceFarms(chainId);
        await dispatch((0,_farms__WEBPACK_IMPORTED_MODULE_12__/* .fetchFarmsPublicDataAsync */ .eG)({
            pids: cakePriceFarms,
            chainId,
            flag: farmFlag
        }));
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakePoolPublicDataAsync */ .PE)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultPublicData */ .P4)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchIfoPublicDataAsync */ .aG)());
        });
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_7__/* .FAST_INTERVAL */ .sR
    });
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])(account && "fetchIfoUserData", async ()=>{
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakePoolUserDataAsync */ .wI)(account));
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchUserIfoCreditDataAsync */ .Ck)(account));
        });
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_7__/* .FAST_INTERVAL */ .sR
    });
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])("fetchCakeVaultFees", async ()=>{
        dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultFees */ .HX)());
    });
};
const useCakeVault = ()=>{
    return useVaultPoolByKey(_types__WEBPACK_IMPORTED_MODULE_11__/* .VaultKey.CakeVault */ .om.CakeVault);
};
const useVaultPoolByKey = (key)=>{
    const vaultPoolByKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_13__/* .makeVaultPoolByKey */ .SN)(key), [
        key
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(vaultPoolByKey);
};
const useIfoCredit = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_13__/* .ifoCreditSelector */ .BZ);
};
const useIfoCeiling = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_13__/* .ifoCeilingSelector */ .C8);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BZ": () => (/* binding */ ifoCreditSelector),
/* harmony export */   "C8": () => (/* binding */ ifoCeilingSelector),
/* harmony export */   "Eo": () => (/* binding */ makePoolWithUserDataLoadingSelector),
/* harmony export */   "Fs": () => (/* binding */ makeVaultPoolWithKeySelector),
/* harmony export */   "SN": () => (/* binding */ makeVaultPoolByKey),
/* harmony export */   "l_": () => (/* binding */ poolsWithVaultSelector)
/* harmony export */ });
/* unused harmony export poolsWithUserDataLoadingSelector */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85576);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93638);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90438);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34376);
/* harmony import */ var _utils_cakePool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27240);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__]);
([_helpers__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const selectPoolsData = (state)=>state.pools.data;
const selectPoolData = (sousId)=>(state)=>state.pools.data.find((p)=>p.sousId === sousId);
const selectUserDataLoaded = (state)=>state.pools.userDataLoaded;
const selectVault = (key)=>(state)=>key ? state.pools[key] : _index__WEBPACK_IMPORTED_MODULE_5__/* .initialPoolVaultState */ .XW;
const selectIfo = (state)=>state.pools.ifo;
const selectIfoUserCredit = (state)=>state.pools.ifo.credit ?? _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__/* .BIG_ZERO */ .HW;
const makePoolWithUserDataLoadingSelector = (sousId)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
        selectPoolData(sousId),
        selectUserDataLoaded
    ], (pool, userDataLoaded)=>{
        return {
            pool: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .transformPool */ .xK)(pool),
            userDataLoaded
        };
    });
const poolsWithUserDataLoadingSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    selectPoolsData,
    selectUserDataLoaded
], (pools, userDataLoaded)=>{
    return {
        pools: pools.map(_helpers__WEBPACK_IMPORTED_MODULE_4__/* .transformPool */ .xK),
        userDataLoaded
    };
});
const makeVaultPoolByKey = (key)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
        selectVault(key)
    ], (vault)=>(0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .transformVault */ .LJ)(key, vault));
const poolsWithVaultSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    poolsWithUserDataLoadingSelector,
    makeVaultPoolByKey(_types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeVault */ .om.CakeVault),
    makeVaultPoolByKey(_types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeFlexibleSideVault */ .om.CakeFlexibleSideVault), 
], (poolsWithUserDataLoading, deserializedLockedCakeVault, deserializedFlexibleSideCakeVault)=>{
    const { pools , userDataLoaded  } = poolsWithUserDataLoading;
    const cakePool = pools.find((pool)=>!pool.isFinished && pool.sousId === 0);
    const withoutCakePool = pools.filter((pool)=>pool.sousId !== 0);
    const cakeAutoVault = {
        ...cakePool,
        ...deserializedLockedCakeVault,
        vaultKey: _types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeVault */ .om.CakeVault,
        userData: {
            ...cakePool.userData,
            ...deserializedLockedCakeVault.userData
        }
    };
    const lockedVaultPosition = (0,_utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .getVaultPosition */ .cP)(deserializedLockedCakeVault.userData);
    const hasFlexibleSideSharesStaked = deserializedFlexibleSideCakeVault.userData.userShares.gt(0);
    const cakeAutoFlexibleSideVault = lockedVaultPosition > _utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .VaultPosition.Flexible */ .PS.Flexible || hasFlexibleSideSharesStaked ? [
        {
            ...cakePool,
            ...deserializedFlexibleSideCakeVault,
            vaultKey: _types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeFlexibleSideVault */ .om.CakeFlexibleSideVault,
            userData: {
                ...cakePool.userData,
                ...deserializedFlexibleSideCakeVault.userData
            }
        }, 
    ] : [];
    return {
        pools: [
            cakeAutoVault,
            ...cakeAutoFlexibleSideVault,
            ...withoutCakePool
        ],
        userDataLoaded
    };
});
const makeVaultPoolWithKeySelector = (vaultKey)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(poolsWithVaultSelector, ({ pools  })=>pools.find((p)=>p.vaultKey === vaultKey));
const ifoCreditSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    selectIfoUserCredit
], (ifoUserCredit)=>{
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(ifoUserCredit);
});
const ifoCeilingSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    selectIfo
], (ifoData)=>{
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(ifoData.ceiling);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IM": () => (/* binding */ isStaked),
/* harmony export */   "PS": () => (/* binding */ VaultPosition),
/* harmony export */   "cP": () => (/* binding */ getVaultPosition),
/* harmony export */   "p1": () => (/* binding */ isLocked)
/* harmony export */ });
/* unused harmony exports isLockedEnd, isAfterBurning */
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73486);

const isStaked = ({ userShares  })=>userShares && userShares.gt(0);
const isLocked = ({ userShares , locked  })=>isStaked({
        userShares
    }) && Boolean(locked) // && !isAfter(new Date(lockEndTime * 1000), new Date())
;
const isLockedEnd = ({ userShares , locked , lockEndTime  })=>lockEndTime && lockEndTime !== "0" && isLocked({
        userShares,
        locked
    }) && Date.now() >= parseInt(lockEndTime) * 1000 && Date.now() <= new Date(parseInt(lockEndTime) * 1000).getTime() + config_constants_pools__WEBPACK_IMPORTED_MODULE_0__/* .UNLOCK_FREE_DURATION */ .by * 1000;
const isAfterBurning = ({ userShares , locked , lockEndTime  })=>lockEndTime && lockEndTime !== "0" && isLocked({
        userShares,
        locked
    }) && Date.now() > new Date(parseInt(lockEndTime) * 1000).getTime() + config_constants_pools__WEBPACK_IMPORTED_MODULE_0__/* .UNLOCK_FREE_DURATION */ .by * 1000;
var VaultPosition;
(function(VaultPosition) {
    VaultPosition[VaultPosition["None"] = 0] = "None";
    VaultPosition[VaultPosition["Flexible"] = 1] = "Flexible";
    VaultPosition[VaultPosition["Locked"] = 2] = "Locked";
    VaultPosition[VaultPosition["LockedEnd"] = 3] = "LockedEnd";
    VaultPosition[VaultPosition["AfterBurning"] = 4] = "AfterBurning";
})(VaultPosition || (VaultPosition = {}));
const getVaultPosition = (params)=>{
    if (isAfterBurning(params)) {
        return VaultPosition.AfterBurning;
    }
    if (isLockedEnd(params)) {
        return VaultPosition.LockedEnd;
    }
    if (isLocked(params)) {
        return VaultPosition.Locked;
    }
    if (isStaked(params)) {
        return VaultPosition.Flexible;
    }
    return VaultPosition.None;
};


/***/ }),

/***/ 63103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ requiresApproval)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);

const requiresApproval = async (contract, account, spenderAddress, minimumRequired = 0)=>{
    try {
        const response = await contract.allowance(account, spenderAddress);
        const hasMinimumRequired = typeof minimumRequired === "number" && minimumRequired > 0 || _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.isBigNumber(minimumRequired) && minimumRequired.gt(0);
        if (hasMinimumRequired) {
            return response.lt(minimumRequired);
        }
        return response.lte(0);
    } catch (error) {
        return true;
    }
};


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

/***/ 62704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useBCakeProxyContractAddress)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15941);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17943);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_farms_src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65267);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useBCakeProxyContractAddress = (account, chainId)=>{
    const bCakeFarmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useBCakeFarmBoosterContract */ .gh)();
    const isSupportedChain = _pancakeswap_farms_src_index__WEBPACK_IMPORTED_MODULE_4__/* .bCakeSupportedChainId.includes */ .P4.includes(chainId);
    const { data , status , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(account && isSupportedChain && [
        "proxyAddress",
        account
    ], async ()=>bCakeFarmBoosterContract.proxyContract(account));
    const isLoading = isSupportedChain ? status !== config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .FetchStatus.Fetched */ .iF.Fetched : false;
    return {
        proxyAddress: data,
        isLoading,
        proxyCreated: data && data !== config_constants__WEBPACK_IMPORTED_MODULE_1__/* .NO_PROXY_CONTRACT */ .h5,
        refreshProxyAddress: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22422);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ba2a990c-0"
})`
  background-image: url('/images/ifos/assets/ifo-banner-${({ theme  })=>theme.isDark ? "dark" : "light"}.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: auto 100%;
`;
const StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ba2a990c-1"
})`
  font-size: 40px;

  ${({ theme  })=>theme.mediaQueries.md} {
    font-size: 64px;
  }
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ba2a990c-2"
})`
  background-color: ${({ theme  })=>theme.colors.tertiary};
  color: ${({ theme  })=>theme.colors.primary};
  padding: 4px 13px;
  height: auto;
  text-transform: uppercase;
  align-self: flex-start;
  font-size: 12px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  border-radius: 8px;
  margin-left: 8px;
`;
const DesktopButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ba2a990c-3"
})`
  align-self: flex-end;
`;
const StyledSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ba2a990c-4"
})`
  font-size: 16px;

  ${({ theme  })=>theme.mediaQueries.md} {
    font-size: 20px;
  }
`;
const Hero = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const handleClick = ()=>{
        const howToElem = document.getElementById("ifo-how-to");
        if (howToElem != null) {
            howToElem.scrollIntoView();
        } else {
            router.push("/ifo#ifo-how-to");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        mb: "8px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledHero, {
            py: [
                "16px",
                "16px",
                "32px"
            ],
            minHeight: [
                "212px",
                "212px",
                "197px"
            ],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    flexDirection: [
                        "column",
                        "column",
                        "column",
                        "row"
                    ],
                    style: {
                        gap: "4px"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledHeading, {
                                    as: "h1",
                                    mb: [
                                        "12px",
                                        "12px",
                                        "16px"
                                    ],
                                    children: t("IFO: Initial Farm Offerings")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledSubTitle, {
                                    bold: true,
                                    children: [
                                        t("Buy new tokens launching on BNB Smart Chain"),
                                        isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                                            onClick: handleClick,
                                            children: t("How does it work?")
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopButton, {
                            onClick: handleClick,
                            variant: "subtle",
                            children: t("How does it work?")
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ne": () => (/* binding */ MessageTextLink),
/* harmony export */   "Y2": () => (/* binding */ CardsWrapper),
/* harmony export */   "rg": () => (/* binding */ StyledCard)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80423);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-996aa41e-0"
})`
  background: none;
  max-width: 368px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
`;
const CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-996aa41e-1"
})`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  ${({ theme  })=>theme.mediaQueries.xxl} {
    grid-template-columns: ${({ singleCard  })=>singleCard ? "1fr" : "1fr 1fr"};
    justify-items: ${({ singleCard  })=>singleCard ? "center" : "unset"};
  }

  > div:nth-child(1) {
    order: ${({ shouldReverse  })=>shouldReverse ? 2 : 1};
  }

  > div:nth-child(2) {
    order: ${({ shouldReverse  })=>shouldReverse ? 1 : 2};
  }
`;
const MessageTextLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-996aa41e-2"
})`
  display: inline;
  text-decoration: underline;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44259);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13128);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53175);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59235);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45698);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72502);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85576);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SmartContractIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 -15 122.000000 122.000000",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            transform: "translate(0.000000,122.000000) scale(0.100000,-0.100000)",
            stroke: "none",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M465 1200 c-102 -27 -142 -46 -221 -105 -153 -115 -244 -293 -244 -480 0 -136 62 -311 119 -334 30 -13 96 -6 119 12 9 7 12 57 12 188 0 211 -1 209 95 209 95 0 95 1 95 -201 0 -180 2 -186 48 -153 22 15 22 19 22 234 0 257 -3 250 95 250 97 0 95 4 95 -226 0 -107 4 -194 9 -194 4 0 20 9 35 21 l26 20 0 244 c0 281 -6 265 98 265 43 0 63 -5 73 -17 10 -12 15 -65 19 -205 l5 -189 67 56 c86 71 148 148 148 185 0 82 -113 249 -218 322 -152 106 -334 142 -497 98z"
            })
        })
    });
};
const ProposalIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.037 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM9.287 9.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM10.037 12a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.287 4a2 2 0 012-2h13a2 2 0 012 2v15c0 1.66-1.34 3-3 3h-14c-1.66 0-3-1.34-3-3v-2c0-.55.45-1 1-1h2V4zm0 16h11v-2h-12v1c0 .55.45 1 1 1zm14 0c.55 0 1-.45 1-1V4h-13v12h10c.55 0 1 .45 1 1v2c0 .55.45 1 1 1z"
            })
        ]
    });
};
const FIXED_MIN_DOLLAR_FOR_ACHIEVEMENT = _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__/* .BIG_TEN */ .xp;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fc358c64-0"
})`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 16px;

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-direction: row;
    align-items: initial;
  }
`;
const AchievementFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fc358c64-1"
})`
  ${({ isFinished  })=>isFinished ? "filter: grayscale(100%)" : ""};
  text-align: left;
`;
const InlinePrize = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fc358c64-2"
})`
  display: inline-flex;
  vertical-align: top;
`;
const IfoAchievement = ({ ifo , publicIfoData  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const tokenName = ifo.token.symbol?.toLowerCase();
    const projectUrl = ifo.token.projectLink;
    const campaignTitle = ifo.name;
    const minLpForAchievement = publicIfoData.thresholdPoints ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatBigNumber */ .dp)(publicIfoData.thresholdPoints, 3) : FIXED_MIN_DOLLAR_FOR_ACHIEVEMENT.div(publicIfoData.currencyPriceInUSD).toNumber().toFixed(3);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        p: "16px",
        pb: "32px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AchievementFlex, {
                isFinished: publicIfoData.status === "finished",
                alignItems: "flex-start",
                flex: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        src: `/images/achievements/ifo-${tokenName}.svg`,
                        fallbackSrc: "/images/achievements/ifo-placeholder-bun.png",
                        width: 56,
                        height: 56,
                        mr: "8px"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        ml: "8px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                color: "secondary",
                                fontSize: "12px",
                                children: `${t("Achievement")}:`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    bold: true,
                                    mr: "8px",
                                    lineHeight: 1.2,
                                    children: [
                                        t("IFO Shopper: %title%", {
                                            title: campaignTitle
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InlinePrize, {
                                            alignItems: "center",
                                            ml: "8px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    color: "textSubtle",
                                                    width: "16px",
                                                    mr: "4px"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    lineHeight: 1.2,
                                                    color: "textSubtle",
                                                    children: publicIfoData.numberPoints
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            publicIfoData.currencyPriceInUSD.gt(0) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                fontSize: "12px",
                                children: t("Commit ~%amount% %symbol% in total to earn!", {
                                    amount: minLpForAchievement,
                                    symbol: ifo.currency === _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .bscTokens.cake */ .ds.cake ? "CAKE" : "LP"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                minHeight: 18,
                                width: 80
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                gap: "16px",
                                pt: "24px",
                                pl: "4px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        external: true,
                                        href: projectUrl,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            color: "textSubtle"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        external: true,
                                        href: ifo.articleUrl,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProposalIcon, {
                                            color: "textSubtle"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        external: true,
                                        href: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreLink */ .C)(ifo.address, "address"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmartContractIcon, {
                                            color: "textSubtle"
                                        })
                                    }),
                                    ifo.twitterUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        external: true,
                                        href: ifo.twitterUrl,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            color: "textSubtle"
                                        })
                                    }),
                                    ifo.telegramUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        external: true,
                                        href: ifo.telegramUrl,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            color: "textSubtle"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            ifo.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                alignItems: "flex-end",
                flexDirection: "column",
                flex: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    fontSize: "14px",
                    lineHeight: 1.2,
                    style: {
                        whiteSpace: "pre-line"
                    },
                    children: ifo.description
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoAchievement);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11218);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36576);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ClaimButton = ({ poolId , ifoVersion , walletIfoData  })=>{
    const userPoolCharacteristics = walletIfoData[poolId];
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .useToast */ .p)();
    const { fetchWithCatchTxError  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const setPendingTx = (isPending)=>walletIfoData.setPendingTx(isPending, poolId);
    const handleClaim = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            setPendingTx(true);
            return ifoVersion === 1 ? walletIfoData.contract.harvest() : walletIfoData.contract.harvestPool(poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic ? 0 : 1);
        });
        if (receipt?.status) {
            walletIfoData.setIsClaimed(poolId);
            toastSuccess(t("Success!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("You have successfully claimed available tokens.")
            }));
        }
        setPendingTx(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onClick: handleClaim,
        disabled: userPoolCharacteristics.isPendingTx,
        width: "100%",
        isLoading: userPoolCharacteristics.isPendingTx,
        endIcon: userPoolCharacteristics.isPendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            spin: true,
            color: "currentColor"
        }) : null,
        children: t("Claim")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36576);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15318);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26488);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var _ContributeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22129);
/* harmony import */ var _GetTokenModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_4__, state_block_hooks__WEBPACK_IMPORTED_MODULE_5__, _ContributeModal__WEBPACK_IMPORTED_MODULE_7__, _GetTokenModal__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_4__, state_block_hooks__WEBPACK_IMPORTED_MODULE_5__, _ContributeModal__WEBPACK_IMPORTED_MODULE_7__, _GetTokenModal__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ContributeButton = ({ poolId , ifo , publicIfoData , walletIfoData  })=>{
    const publicPoolCharacteristics = publicIfoData[poolId];
    const userPoolCharacteristics = walletIfoData[poolId];
    const { isPendingTx , amountTokenCommittedInLP  } = userPoolCharacteristics;
    const { limitPerUserInLP  } = publicPoolCharacteristics;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* .useToast */ .p)();
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentBlock */ .je)();
    const { balance: userCurrencyBalance  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)(ifo.currency.address);
    // Refetch all the data, and display a message when fetching is done
    const handleContributeSuccess = async (amount, txHash)=>{
        await Promise.all([
            publicIfoData.fetchIfoData(currentBlock),
            walletIfoData.fetchIfoData()
        ]);
        toastSuccess(t("Success!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
            txHash: txHash,
            children: t("You have contributed %amount% CAKE to this IFO!", {
                amount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .getBalanceNumber */ .mW)(amount)
            })
        }));
    };
    const [onPresentContributeModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContributeModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        poolId: poolId,
        creditLeft: walletIfoData.ifoCredit?.creditLeft,
        ifo: ifo,
        publicIfoData: publicIfoData,
        walletIfoData: walletIfoData,
        onSuccess: handleContributeSuccess,
        userCurrencyBalance: userCurrencyBalance
    }), false);
    const [onPresentGetTokenModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GetTokenModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        currency: ifo.currency
    }), false);
    const noNeedCredit = ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic;
    const isMaxCommitted = !noNeedCredit && walletIfoData.ifoCredit?.creditLeft && walletIfoData.ifoCredit?.creditLeft.isLessThanOrEqualTo(0) || limitPerUserInLP.isGreaterThan(0) && amountTokenCommittedInLP.isGreaterThanOrEqualTo(limitPerUserInLP);
    const isDisabled = isPendingTx || isMaxCommitted || publicIfoData.status !== "live";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        onClick: userCurrencyBalance.isEqualTo(0) ? onPresentGetTokenModal : onPresentContributeModal,
        width: "100%",
        disabled: isDisabled,
        children: isMaxCommitted && publicIfoData.status === "live" ? t("Max. Committed") : t("Commit CAKE")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72502);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(63815);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(84373);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97344);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36576);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7599);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6429);
/* harmony import */ var hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64850);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80361);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74860);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24671);
/* harmony import */ var utils_requiresApproval__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__, components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_7__, components_Toast__WEBPACK_IMPORTED_MODULE_8__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_11__, hooks_useContract__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__, components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_7__, components_Toast__WEBPACK_IMPORTED_MODULE_8__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_11__, hooks_useContract__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const MessageTextLink = styled_components__WEBPACK_IMPORTED_MODULE_15___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
    componentId: "sc-361388da-0"
})`
  display: inline;
  text-decoration: underline;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`;
const multiplierValues = [
    0.1,
    0.25,
    0.5,
    0.75,
    1
];
// Default value for transaction setting, tweak based on BSC network congestion.
const gasPrice = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.parseUnits)("10", "gwei").toString();
const HasVestingNotice = ({ url  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        maxWidth: "350px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            variant: "warning",
            mb: "16px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        fontSize: "14px",
                        color: "#D67E0A",
                        children: t("This IFO has token vesting. Purchased tokens are released over a period of time.")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageTextLink, {
                        external: true,
                        href: url,
                        color: "#D67E0A",
                        display: "inline",
                        children: t("Learn more in the vote proposal")
                    })
                ]
            })
        })
    });
};
const ContributeModal = ({ poolId , ifo , publicIfoData , walletIfoData , userCurrencyBalance , creditLeft , onDismiss , onSuccess ,  })=>{
    const publicPoolCharacteristics = publicIfoData[poolId];
    const userPoolCharacteristics = walletIfoData[poolId];
    const { currency , articleUrl  } = ifo;
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* .useToast */ .p)();
    const { limitPerUserInLP , vestingInformation  } = publicPoolCharacteristics;
    const { amountTokenCommittedInLP  } = userPoolCharacteristics;
    const { contract  } = walletIfoData;
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)("");
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3React */ .Ge)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_12__/* .useCallWithMarketGasPrice */ .r)();
    const raisingTokenContractReader = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_13__/* .useERC20 */ .X_)(currency.address, false);
    const raisingTokenContractApprover = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_13__/* .useERC20 */ .X_)(currency.address);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const valueWithTokenDecimals = new (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default())(value).times(config__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
    const label = currency === _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__/* .bscTokens.cake */ .ds.cake ? t("Max. CAKE entry") : t("Max. token entry");
    const { isApproving , isApproved , isConfirmed , isConfirming , handleApprove , handleConfirm  } = (0,hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
        onRequiresApproval: async ()=>{
            return (0,utils_requiresApproval__WEBPACK_IMPORTED_MODULE_17__/* .requiresApproval */ .S)(raisingTokenContractReader, account, contract.address);
        },
        onApprove: ()=>{
            return callWithMarketGasPrice(raisingTokenContractApprover, "approve", [
                contract.address,
                _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.MaxUint256
            ], {
                gasPrice
            });
        },
        onApproveSuccess: ({ receipt  })=>{
            toastSuccess(t("Successfully Enabled!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_8__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("You can now participate in the %symbol% IFO.", {
                    symbol: ifo.token.symbol
                })
            }));
        },
        onConfirm: ()=>{
            return callWithMarketGasPrice(contract, "depositPool", [
                valueWithTokenDecimals.toString(),
                poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_10__/* .PoolIds.poolBasic */ .vr.poolBasic ? 0 : 1
            ], {
                gasPrice
            });
        },
        onSuccess: async ({ receipt  })=>{
            await onSuccess(valueWithTokenDecimals, receipt.transactionHash);
            onDismiss?.();
        }
    });
    // in v3 max token entry is based on ifo credit and hard cap limit per user minus amount already committed
    const maximumTokenEntry = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(()=>{
        if (!creditLeft || ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_10__/* .PoolIds.poolBasic */ .vr.poolBasic) {
            return limitPerUserInLP.minus(amountTokenCommittedInLP);
        }
        if (limitPerUserInLP.isGreaterThan(0)) {
            if (limitPerUserInLP.isGreaterThan(0)) {
                return limitPerUserInLP.minus(amountTokenCommittedInLP).isLessThanOrEqualTo(creditLeft) ? limitPerUserInLP.minus(amountTokenCommittedInLP) : creditLeft;
            }
        }
        return creditLeft;
    }, [
        creditLeft,
        limitPerUserInLP,
        amountTokenCommittedInLP,
        ifo.version,
        poolId
    ]);
    // include user balance for input
    const maximumTokenCommittable = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(()=>{
        return maximumTokenEntry.isLessThanOrEqualTo(userCurrencyBalance) ? maximumTokenEntry : userCurrencyBalance;
    }, [
        maximumTokenEntry,
        userCurrencyBalance
    ]);
    const basicTooltipContent = t("For the private sale, each eligible participant will be able to commit any amount of CAKE up to the maximum commit limit, which is published along with the IFO voting proposal.");
    const unlimitedToolipContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                display: "inline",
                children: [
                    t("For the public sale, Max CAKE entry is capped by"),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                bold: true,
                display: "inline",
                children: [
                    t("the number of iCAKE."),
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                display: "inline",
                children: t("Lock more CAKE for longer durations to increase the maximum number of CAKE you can commit to the sale.")
            })
        ]
    });
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_10__/* .PoolIds.poolBasic */ .vr.poolBasic ? basicTooltipContent : unlimitedToolipContent, {});
    const isWarning = valueWithTokenDecimals.isGreaterThan(userCurrencyBalance) || valueWithTokenDecimals.isGreaterThan(maximumTokenEntry);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
        title: t("Contribute %symbol%", {
            symbol: currency.symbol
        }),
        onDismiss: onDismiss,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* .ModalBody */ .fe, {
            maxWidth: "360px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                p: "2px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        mb: "16px",
                        children: [
                            tooltipVisible && tooltip,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                ref: targetRef,
                                children: [
                                    label,
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                children: `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_16__/* .formatNumber */ .uf)((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_16__/* .getBalanceAmount */ .U4)(maximumTokenEntry, currency.decimals).toNumber(), 3, 3)} ${ifo.currency.symbol}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                children: [
                                    t("Commit"),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                flexGrow: 1,
                                justifyContent: "flex-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        src: ifo.currency.symbol === "CAKE" ? "/images/cake.svg" : `/images/farms/${currency.symbol.split(" ")[0].toLowerCase()}.svg`,
                                        width: 24,
                                        height: 24
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        ml: "4px",
                                        children: currency.symbol
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        value: value,
                        currencyValue: `${publicIfoData.currencyPriceInUSD.times(value || 0).toFixed(2)} USD`,
                        onUserInput: setValue,
                        isWarning: isWarning,
                        decimals: currency.decimals,
                        onBlur: ()=>{
                            if (isWarning) {
                                // auto adjust to max value
                                setValue((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_16__/* .getBalanceAmount */ .U4)(maximumTokenCommittable).toString());
                            }
                        },
                        mb: "8px"
                    }),
                    isWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        color: valueWithTokenDecimals.isGreaterThan(userCurrencyBalance) ? "failure" : "warning",
                        textAlign: "right",
                        fontSize: "12px",
                        mb: "8px",
                        children: valueWithTokenDecimals.isGreaterThan(userCurrencyBalance) ? t("Insufficient Balance") : t("Exceeded max CAKE entry")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textAlign: "right",
                        fontSize: "12px",
                        mb: "16px",
                        children: t("Balance: %balance%", {
                            balance: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_16__/* .getBalanceAmount */ .U4)(userCurrencyBalance, currency.decimals).toString()
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        mb: "16px",
                        children: multiplierValues.map((multiplierValue, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                scale: "xs",
                                variant: "tertiary",
                                onClick: ()=>setValue((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_16__/* .getBalanceAmount */ .U4)(maximumTokenCommittable.times(multiplierValue)).toString()),
                                mr: index < multiplierValues.length - 1 ? "8px" : 0,
                                children: [
                                    multiplierValue * 100,
                                    "%"
                                ]
                            }, multiplierValue))
                    }),
                    vestingInformation.percentage > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HasVestingNotice, {
                        url: articleUrl
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "12px",
                        mb: "24px",
                        children: [
                            t("If you don’t commit enough CAKE, you may not receive a meaningful amount of IFO tokens, or you may not receive any IFO tokens at all."),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                display: "inline",
                                href: "https://docs.pancakeswap.finance/products/ifo-initial-farm-offering",
                                external: true,
                                children: t("Read more")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        isApproveDisabled: isConfirmed || isConfirming || isApproved,
                        isApproving: isApproving,
                        isConfirmDisabled: !isApproved || isConfirmed || valueWithTokenDecimals.isNaN() || valueWithTokenDecimals.eq(0) || isWarning,
                        isConfirming: isConfirming,
                        onApprove: handleApprove,
                        onConfirm: handleConfirm
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63815);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12486);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const GetTokenModal = ({ currency , onDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        title: t("%symbol% required", {
            symbol: currency.symbol
        }),
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* .ModalBody */ .fe, {
            maxWidth: "288px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: `/images/tokens/${currency.address}.png`,
                    width: 72,
                    height: 72,
                    margin: "auto",
                    mb: "24px"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    mb: "16px",
                    children: t("You’ll need %symbol% tokens to participate in the IFO!", {
                        symbol: currency.symbol
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    mb: "24px",
                    children: t("Get %symbol%, or make sure your tokens aren’t staked somewhere else.", {
                        symbol: currency.symbol
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                    external: true,
                    href: `/swap?outputCurrency=${currency.address}`,
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        color: "white"
                    }),
                    minWidth: "100%" // Bypass the width="fit-content" on Links
                    ,
                    children: t("Get %symbol%", {
                        symbol: currency.symbol
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetTokenModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IFORequirements)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5438);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22573);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _Icons_OkNFT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86300);
/* harmony import */ var _Icons_OkProfilePoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92652);
/* harmony import */ var _TransWithElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _Icons_OkNFT__WEBPACK_IMPORTED_MODULE_4__, _Icons_OkProfilePoints__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _Icons_OkNFT__WEBPACK_IMPORTED_MODULE_4__, _Icons_OkProfilePoints__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const NotOkNFT = ({ admissionProfile  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const keyword = "%Pancake Squad NFT%";
    const rawText = t(`Set %Pancake Squad NFT% as Pancake Profile avatar`);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransWithElement__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        text: rawText,
        keyword: keyword,
        element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    style: {
                        display: "inline"
                    },
                    href: `https://pancakeswap.finance/nfts/collections/${admissionProfile}`,
                    children: t("Pancake Squad NFT")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
            ]
        })
    });
};
const NotOkProfilePoints = ({ pointThreshold  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const keyword = "%Pancake Profile%";
    const rawText = t(`Reach %point% or more %Pancake Profile% points`, {
        point: pointThreshold
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransWithElement__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        text: rawText,
        keyword: keyword,
        element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    style: {
                        display: "inline"
                    },
                    href: `https://pancakeswap.finance/profile/${account}/achievements/`,
                    children: t("Pancake Profile")
                })
            ]
        })
    });
};
const configCriterias = (pointThreshold, admissionProfile, t)=>({
        isQualifiedNFT: {
            OkIcon: _Icons_OkNFT__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            okMsg: t("Eligible NFT avatar found!"),
            notOkMsg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotOkNFT, {
                admissionProfile: admissionProfile
            }),
            NotOkIcon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            name: t("Pancake Squad")
        },
        isQualifiedPoints: {
            OkIcon: _Icons_OkProfilePoints__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            okMsg: t("Profile Points threshold met!"),
            notOkMsg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotOkProfilePoints, {
                pointThreshold: pointThreshold
            }),
            NotOkIcon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            name: t("Profile points")
        }
    });
function Item({ type , isOk , isSingle , pointThreshold , admissionProfile  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const config = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>configCriterias(pointThreshold, admissionProfile, t), [
        t,
        pointThreshold,
        admissionProfile
    ]);
    const name = config[type]?.name;
    const Icon = isOk ? config[type]?.OkIcon : config[type]?.NotOkIcon;
    const msg = isOk ? config[type]?.okMsg : config[type]?.notOkMsg;
    const { tooltipVisible , targetRef , tooltip  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(msg, {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        ref: targetRef,
        mx: "4px",
        p: "8px",
        justifyContent: isSingle ? "flex-start" : "center",
        flex: "1",
        flexWrap: "wrap",
        borderRadius: "8px",
        border: isOk ? "1px solid" : "1px dashed",
        borderColor: isOk ? "secondary" : "textDisabled",
        background: isOk ? "bubblegum" : "backgroundDisabled",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                px: "8px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    width: "32px",
                    color: isOk ? "secondary" : "textDisabled"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                small: true,
                textAlign: "center",
                px: "8px",
                color: isOk ? "secondary" : "textDisabled",
                children: name
            }),
            tooltipVisible && tooltip
        ]
    });
}
function IFORequirements({ criterias , pointThreshold , admissionProfile  }) {
    if (!criterias?.length) return null;
    const isSingle = criterias.length === 1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        mx: "8px",
        children: criterias.map(({ type , value  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                isSingle: isSingle,
                type: type,
                isOk: value,
                pointThreshold: pointThreshold,
                admissionProfile: admissionProfile
            }, type);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const OkNFTIcon = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        width: "36",
        height: "31",
        fill: "none",
        viewBox: "0 0 36 31",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.94833 17.7599C8.79375 17.0481 11.2644 16.6325 13.9355 16.6325C16.6066 16.6325 19.0773 17.0481 20.9227 17.7599C21.8416 18.1143 22.6647 18.5648 23.2782 19.1243C23.8923 19.6843 24.3871 20.444 24.3871 21.3772C24.3871 23.4113 22.8371 25.1102 20.8115 25.2962L20.6517 25.3109C16.1836 25.7212 11.6874 25.7212 7.21931 25.3109L7.05951 25.2962C5.03395 25.1102 3.48389 23.4113 3.48389 21.3772C3.48389 20.444 3.97873 19.6843 4.59276 19.1243C5.20628 18.5648 6.02945 18.1143 6.94833 17.7599Z",
                fill: "#7645D9"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.2943 1.16129C10.1307 1.16129 9.25312 2.20729 9.46671 3.33949L9.97212 6.01857C8.25999 6.76629 6.96776 8.05741 6.96776 9.67742V10.6628C6.96776 12.0021 7.86284 13.1234 9.11416 13.8804C10.3752 14.6433 12.0813 15.0968 13.9355 15.0968C15.7897 15.0968 17.4958 14.6433 18.7568 13.8804C20.0082 13.1234 20.9032 12.0021 20.9032 10.6628V9.67742C20.9032 8.04879 19.5976 6.75268 17.8709 6.00645L18.374 3.33949C18.5876 2.20729 17.71 1.16129 16.5465 1.16129C15.5197 1.16129 14.6873 1.98525 14.6873 3.00165V5.26847C14.4403 5.25189 14.1894 5.2434 13.9355 5.2434C13.6712 5.2434 13.4102 5.2526 13.1534 5.27054V3.00165C13.1534 1.98525 12.321 1.16129 11.2943 1.16129Z",
                fill: "#7645D9"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "26.7098",
                cy: "20.9031",
                r: "8.46981",
                fill: "#7645D9",
                stroke: "#EDF6FF",
                strokeWidth: "1.64103"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M25.7969 22.8313L30.5809 18.0381C30.581 18.038 30.581 18.038 30.5811 18.0379C30.6004 18.0186 30.6274 18.0067 30.6603 18.0067C30.6933 18.0067 30.7203 18.0187 30.7397 18.0381L30.8048 18.1031C30.8467 18.145 30.8467 18.2108 30.8048 18.2527L30.8038 18.2537L25.3146 23.7614C25.2488 23.8199 25.171 23.8109 25.1229 23.7665L22.9188 21.5439L22.9188 21.5439L22.9164 21.5414C22.8745 21.4996 22.8745 21.4338 22.9164 21.3919L22.9814 21.3269L22.4012 20.7467L22.9814 21.3269C23.0008 21.3075 23.0278 21.2954 23.0608 21.2954C23.0936 21.2954 23.1204 21.3073 23.1398 21.3264C23.14 21.3266 23.1401 21.3267 23.1403 21.3269L24.6342 22.8301L25.215 23.4145L25.7969 22.8313Z",
                fill: "#ECF8FF",
                stroke: "white",
                strokeWidth: "1.64103"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OkNFTIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const ProfilePoints = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        width: "39",
        height: "31",
        viewBox: "0 0 39 31",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.7391 2.45008C9.77247 2.68208 9.17691 3.65378 9.40891 4.62045C9.5031 5.01293 9.95601 6.07579 10.4608 7.19996H5.99961C4.67961 7.19996 3.59961 8.27996 3.59961 9.59996V10.8C3.59961 11.1825 3.63561 11.5561 3.7044 11.918C4.18592 14.4508 6.27411 16.4025 8.86761 16.728C8.96211 16.953 9.07011 17.171 9.19058 17.3811C10.0339 18.852 11.4881 19.9335 13.1996 20.28L13.1996 22.8H9.59961C8.93687 22.8 8.39961 23.3372 8.39961 24C8.39961 24.6627 8.93687 25.2 9.59961 25.2H19.1996C19.2022 25.2 19.2048 25.2 19.2074 25.1999C19.8665 25.1958 20.3996 24.6601 20.3996 24C20.3996 23.3372 19.8624 22.8 19.1996 22.8H15.5996V20.28C15.7219 20.2552 15.8428 20.2267 15.9623 20.1946C17.7547 19.7127 19.2229 18.4155 19.9316 16.728C20.3021 16.6815 20.6623 16.6018 21.009 16.4919C23.4356 15.7231 25.1996 13.4775 25.1996 10.8V9.59996C25.1996 8.27996 24.1196 7.19996 22.7996 7.19996H18.3384C18.8432 6.07579 19.2961 5.01293 19.3903 4.62045C19.6223 3.65378 19.0268 2.68208 18.0601 2.45008C17.0934 2.21808 16.1217 2.81364 15.8897 3.7803L15.069 7.19996H13.7302L12.9095 3.7803C12.6775 2.81364 11.7058 2.21808 10.7391 2.45008ZM22.7996 10.8C22.7996 12.36 21.7916 13.68 20.3996 14.184V9.59996H22.7996V10.8ZM8.39961 14.184C7.00761 13.68 5.99961 12.36 5.99961 10.8V9.59996H8.39961V14.184Z",
                fill: "#7645D9"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "29.2903",
                cy: "21.2903",
                r: "8.46981",
                fill: "#7645D9",
                stroke: "#EDF6FF",
                strokeWidth: "1.64103"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M28.378 23.2185L33.162 18.4253C33.162 18.4252 33.1621 18.4252 33.1621 18.4251C33.1815 18.4058 33.2084 18.3938 33.2414 18.3938C33.2744 18.3938 33.3014 18.4059 33.3208 18.4253L33.3858 18.4903C33.4277 18.5322 33.4277 18.598 33.3858 18.6399L33.3849 18.6408L27.8957 24.1486C27.8299 24.2071 27.7521 24.1981 27.7039 24.1536L25.4999 21.9311L25.4999 21.9311L25.4974 21.9286C25.4555 21.8867 25.4555 21.821 25.4974 21.7791L25.5625 21.714L24.9823 21.1338L25.5625 21.714C25.5819 21.6946 25.6089 21.6826 25.6419 21.6826C25.6747 21.6826 25.7015 21.6944 25.7209 21.7136C25.721 21.7137 25.7212 21.7139 25.7213 21.714L27.2153 23.2173L27.796 23.8016L28.378 23.2185Z",
                fill: "#ECF8FF",
                stroke: "white",
                strokeWidth: "1.64103"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePoints);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39480);
/* harmony import */ var _ContributeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39245);
/* harmony import */ var _ClaimButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64243);
/* harmony import */ var _Skeletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4994);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29245);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_4__, _ContributeButton__WEBPACK_IMPORTED_MODULE_5__, _ClaimButton__WEBPACK_IMPORTED_MODULE_6__, _Skeletons__WEBPACK_IMPORTED_MODULE_7__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_4__, _ContributeButton__WEBPACK_IMPORTED_MODULE_5__, _ClaimButton__WEBPACK_IMPORTED_MODULE_6__, _Skeletons__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const IfoCardActions = ({ poolId , ifo , publicIfoData , walletIfoData , hasProfile , isLoading , isEligible , enableStatus ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const userPoolCharacteristics = walletIfoData[poolId];
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeletons__WEBPACK_IMPORTED_MODULE_7__/* .SkeletonCardActions */ .r0, {});
    }
    if (!account) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: "100%"
        });
    }
    if (!hasProfile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            to: `/profile/${account.toLowerCase()}`,
            width: "100%",
            children: t("Activate your Profile")
        });
    }
    const needClaim = publicIfoData.status === "finished" && !userPoolCharacteristics.hasClaimed && (userPoolCharacteristics.offeringAmountInToken.isGreaterThan(0) || userPoolCharacteristics.refundingAmountInLP.isGreaterThan(0));
    if (needClaim) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClaimButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            poolId: poolId,
            ifoVersion: ifo.version,
            walletIfoData: walletIfoData
        });
    }
    if (enableStatus !== _types__WEBPACK_IMPORTED_MODULE_8__/* .EnableStatus.ENABLED */ .W.ENABLED && publicIfoData.status === "coming_soon" || ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic && !isEligible) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (publicIfoData.status === "live" || publicIfoData.status === "coming_soon") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContributeButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            poolId: poolId,
            ifo: ifo,
            publicIfoData: publicIfoData,
            walletIfoData: walletIfoData
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoCardActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72502);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36695);
/* harmony import */ var utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10037);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37926);
/* harmony import */ var _Skeletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4994);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _Skeletons__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _Skeletons__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const FooterEntry = ({ label , value , tooltipContent  })=>{
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            tooltipVisible && tooltip,
            tooltipContent ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ref: targetRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    small: true,
                    color: "textSubtle",
                    children: label
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                small: true,
                color: "textSubtle",
                children: label
            }),
            value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                small: true,
                textAlign: "right",
                children: value
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                height: 21,
                width: 80
            })
        ]
    });
};
const MaxTokenEntry = ({ maxToken , ifo , poolId  })=>{
    const isCurrencyCake = ifo.currency === _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_1__/* .bscTokens.cake */ .ds.cake;
    const isV3 = ifo.version >= 3;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const basicTooltipContent = ifo.version >= 3.1 ? t("For the private sale, each eligible participant will be able to commit any amount of CAKE up to the maximum commit limit, which is published along with the IFO voting proposal.") : t("For the basic sale, Max CAKE entry is capped by minimum between your average CAKE balance in the iCAKE, or the pool’s hard cap. To increase the max entry, Stake more CAKE into the iCAKE");
    const unlimitedToolipContent = ifo.version >= 3.1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                display: "inline",
                children: [
                    t("For the public sale, Max CAKE entry is capped by"),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                bold: true,
                display: "inline",
                children: [
                    t("the number of iCAKE."),
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                display: "inline",
                children: t("Lock more CAKE for longer durations to increase the maximum number of CAKE you can commit to the sale.")
            })
        ]
    }) : t("For the unlimited sale, Max CAKE entry is capped by your average CAKE balance in the iCake. To increase the max entry, Stake more CAKE into the iCake");
    const tooltipContent = poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic ? basicTooltipContent : unlimitedToolipContent;
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    const label = isCurrencyCake ? t("Max. CAKE entry") : t("Max. token entry");
    const price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(ifo.currency);
    const dollarValueOfToken = (0,utils_prices__WEBPACK_IMPORTED_MODULE_14__/* .multiplyPriceByAmount */ .a)(price, maxToken, ifo.currency.decimals);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isV3 && tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                label: isV3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    small: true,
                    color: "textSubtle",
                    ref: targetRef,
                    children: label
                }) : label,
                value: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    small: true,
                    textAlign: "right",
                    color: maxToken > 0 ? "text" : "failure",
                    children: `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(maxToken, 3, 3)} ${!isCurrencyCake ? ifo.currency.symbol : ""} ${` ~($${dollarValueOfToken.toFixed(0)})`}`
                })
            })
        ]
    });
};
const IfoCardDetails = ({ isEligible , poolId , ifo , publicIfoData , walletIfoData ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { status , currencyPriceInUSD  } = publicIfoData;
    const poolCharacteristic = publicIfoData[poolId];
    const walletCharacteristic = walletIfoData[poolId];
    let version3MaxTokens = walletIfoData.ifoCredit?.creditLeft ? walletIfoData.ifoCredit.creditLeft.gt(poolCharacteristic.limitPerUserInLP.minus(walletCharacteristic.amountTokenCommittedInLP)) ? poolCharacteristic.limitPerUserInLP.minus(walletCharacteristic.amountTokenCommittedInLP) : walletIfoData.ifoCredit.creditLeft : null;
    // unlimited pool just show the credit left
    version3MaxTokens = poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited ? walletIfoData.ifoCredit?.creditLeft : version3MaxTokens;
    /* Format start */ const maxLpTokens = (ifo.version === 3 || ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited) && ifo.isActive ? version3MaxTokens ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(version3MaxTokens, ifo.currency.decimals) : 0 : (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(poolCharacteristic.limitPerUserInLP, ifo.currency.decimals);
    const taxRate = `${poolCharacteristic.taxRate}%`;
    const totalCommittedPercent = poolCharacteristic.totalAmountPool.div(poolCharacteristic.raisingAmountPool).times(100).toFixed(2);
    const totalLPCommitted = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(poolCharacteristic.totalAmountPool, ifo.currency.decimals);
    const totalLPCommittedInUSD = currencyPriceInUSD.times(totalLPCommitted);
    const totalCommitted = `~$${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(totalLPCommittedInUSD.toNumber(), 0, 0)} (${totalCommittedPercent}%)`;
    const sumTaxesOverflow = poolCharacteristic.totalAmountPool.times(poolCharacteristic.taxRate).times(0.01);
    const sumTaxesOverflowInUSD = currencyPriceInUSD.times(sumTaxesOverflow);
    const pricePerTokenWithFeeToOriginalRatio = sumTaxesOverflow.plus(poolCharacteristic.raisingAmountPool).div(poolCharacteristic.offeringAmountPool).div(poolCharacteristic.raisingAmountPool.div(poolCharacteristic.offeringAmountPool));
    const pricePerTokenWithFeeNumber = pricePerTokenWithFeeToOriginalRatio.times(ifo.tokenOfferingPrice).toNumber();
    const maxPrecision = ifo.tokenOfferingPrice < 1 ? 4 : 2;
    const pricePerTokenWithFee = `~$${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(pricePerTokenWithFeeNumber, 0, maxPrecision)}`;
    const raisingTokenToBurn = ifo[poolId].cakeToBurn || sumTaxesOverflowInUSD.gt(0) && `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(sumTaxesOverflow), 0, 2)} (~$${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(sumTaxesOverflowInUSD), 0, 2)})`;
    const maxToken = ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic && !isEligible ? 0 : maxLpTokens;
    const tokenEntry = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaxTokenEntry, {
        poolId: poolId,
        ifo: ifo,
        maxToken: maxToken
    });
    const durationInSeconds = ifo.version >= 3.2 ? poolCharacteristic.vestingInformation.duration : 0;
    const vestingDays = Math.ceil(durationInSeconds / utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_15__/* .DAY_IN_SECONDS */ .i);
    /* Format end */ const renderBasedOnIfoStatus = ()=>{
        if (status === "coming_soon") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    tokenEntry,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Funds to raise:"),
                        value: ifo[poolId].raiseAmount
                    }),
                    raisingTokenToBurn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("CAKE to burn:"),
                        value: raisingTokenToBurn
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Price per %symbol%:", {
                            symbol: ifo.token.symbol
                        }),
                        value: `$${ifo.tokenOfferingPrice}`
                    })
                ]
            });
        }
        if (status === "live") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    tokenEntry,
                    poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Price per %symbol%:", {
                            symbol: ifo.token.symbol
                        }),
                        value: `$${ifo.tokenOfferingPrice}`
                    }),
                    poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Additional fee:"),
                        value: taxRate
                    }),
                    poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Price per %symbol% with fee:", {
                            symbol: ifo.token.symbol
                        }),
                        value: pricePerTokenWithFee
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Total committed:"),
                        value: currencyPriceInUSD.gt(0) ? totalCommitted : null
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Funds to raise:"),
                        value: ifo[poolId].raiseAmount
                    }),
                    raisingTokenToBurn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("CAKE to burn:"),
                        value: raisingTokenToBurn
                    }),
                    ifo.version >= 3.2 && poolCharacteristic.vestingInformation.percentage > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                                label: t("Vested percentage:"),
                                value: `${poolCharacteristic.vestingInformation.percentage}%`,
                                tooltipContent: t("%percentageVested%% of the purchased token will get vested and released linearly over a period of time. %percentageTgeRelease%% of the purchased token will be released immediately and available for claiming when IFO ends.", {
                                    percentageVested: poolCharacteristic.vestingInformation.percentage,
                                    percentageTgeRelease: new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(100).minus(poolCharacteristic.vestingInformation.percentage).toString()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                                label: t("Vesting schedule:"),
                                value: `${vestingDays} days`,
                                tooltipContent: t("The vested tokens will be released linearly over a period of %days% days.", {
                                    days: vestingDays
                                })
                            })
                        ]
                    })
                ]
            });
        }
        if (status === "finished") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    (poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic || ifo.isActive) && tokenEntry,
                    poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Additional fee:"),
                        value: taxRate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Total committed:"),
                        value: currencyPriceInUSD.gt(0) ? totalCommitted : null
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Funds to raise:"),
                        value: ifo[poolId].raiseAmount
                    }),
                    raisingTokenToBurn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("CAKE to burn:"),
                        value: raisingTokenToBurn
                    }),
                    ifo.version > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Price per %symbol%:", {
                            symbol: ifo.token.symbol
                        }),
                        value: `$${ifo.tokenOfferingPrice ? ifo.tokenOfferingPrice : "?"}`
                    }),
                    ifo.version > 1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                        label: t("Price per %symbol% with fee:", {
                            symbol: ifo.token.symbol
                        }),
                        value: pricePerTokenWithFee
                    })
                ]
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeletons__WEBPACK_IMPORTED_MODULE_7__/* .SkeletonCardDetails */ .X2, {});
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        paddingTop: "24px",
        children: renderBasedOnIfoStatus()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoCardDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(67013);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(24674);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20201);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72502);
/* harmony import */ var config_constants_ifo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87840);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24671);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11496);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46684);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29245);
/* harmony import */ var _PercentageOfTotal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82633);
/* harmony import */ var _Skeletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4994);
/* harmony import */ var _IFORequirements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68706);
/* harmony import */ var _IfoCardStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52465);
/* harmony import */ var _StakeVaultButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34941);
/* harmony import */ var _VestingAvailableToClaim__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75786);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__, components_TokenImage__WEBPACK_IMPORTED_MODULE_9__, _PercentageOfTotal__WEBPACK_IMPORTED_MODULE_11__, _Skeletons__WEBPACK_IMPORTED_MODULE_12__, _IFORequirements__WEBPACK_IMPORTED_MODULE_13__, _IfoCardStyles__WEBPACK_IMPORTED_MODULE_14__, _StakeVaultButton__WEBPACK_IMPORTED_MODULE_15__, _VestingAvailableToClaim__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__, components_TokenImage__WEBPACK_IMPORTED_MODULE_9__, _PercentageOfTotal__WEBPACK_IMPORTED_MODULE_11__, _Skeletons__WEBPACK_IMPORTED_MODULE_12__, _IFORequirements__WEBPACK_IMPORTED_MODULE_13__, _IfoCardStyles__WEBPACK_IMPORTED_MODULE_14__, _StakeVaultButton__WEBPACK_IMPORTED_MODULE_15__, _VestingAvailableToClaim__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const TokenSection = ({ primaryToken , secondaryToken , children , ...props })=>{
    const renderTokenComponent = ()=>{
        if (!primaryToken) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                width: 32,
                mr: "16px"
            });
        }
        if (primaryToken && secondaryToken) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_9__/* .TokenPairImage */ .q, {
                variant: "inverted",
                primaryToken: primaryToken,
                height: 32,
                width: 32,
                secondaryToken: secondaryToken,
                mr: "16px"
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_9__/* .TokenImage */ .O, {
            token: primaryToken,
            height: 32,
            width: 32,
            mr: "16px"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        ...props,
        children: [
            renderTokenComponent(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
};
const CommitTokenSection = ({ commitToken , ...props })=>{
    if (commitToken.equals(config_constants_ifo__WEBPACK_IMPORTED_MODULE_5__/* .cakeBnbLpToken */ .b)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenSection, {
            primaryToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__/* .bscTokens.cake */ .ds.cake,
            secondaryToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__/* .bscTokens.wbnb */ .ds.wbnb,
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenSection, {
        primaryToken: commitToken,
        ...props
    });
};
const Label = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        bold: true,
        fontSize: "12px",
        color: "secondary",
        textTransform: "uppercase",
        ...props
    });
const Value = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        bold: true,
        fontSize: "20px",
        style: {
            wordBreak: "break-all"
        },
        ...props
    });
const OnSaleInfo = ({ token , saleAmount , distributionRatio  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenSection, {
        primaryToken: token,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                    textTransform: "uppercase",
                    children: t("On sale")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Value, {
                    children: saleAmount
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    fontSize: "14px",
                    color: "textSubtle",
                    children: t("%ratio%% of total sale", {
                        ratio: distributionRatio
                    })
                })
            ]
        })
    });
};
const IfoCardTokens = ({ criterias , isEligible , poolId , ifo , publicIfoData , walletIfoData , hasProfile , isLoading , onApprove , enableStatus ,  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(t("Sorry, you didn’t contribute enough CAKE to meet the minimum threshold. You didn’t buy anything in this sale, but you can still reclaim your CAKE."), {
        placement: "bottom"
    });
    const publicPoolCharacteristics = publicIfoData[poolId];
    const userPoolCharacteristics = walletIfoData[poolId];
    const { offeringAmountInToken , amountTokenCommittedInLP , refundingAmountInLP  } = userPoolCharacteristics;
    const spentAmount = amountTokenCommittedInLP.minus(refundingAmountInLP);
    const { currency , token , version  } = ifo;
    const { hasClaimed  } = userPoolCharacteristics;
    const distributionRatio = ifo[poolId].distributionRatio * 100;
    const credit = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useIfoCredit */ .cq)();
    const tooltipContentOfSpent = t('Based on "overflow" sales method. %refundingAmount% unspent %spentToken% are available to claim after the sale is completed.', {
        refundingAmount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(refundingAmountInLP, ifo.currency.decimals).toFixed(4),
        spentToken: ifo.currency.symbol
    });
    const { targetRef: tagTargetRefOfSpent , tooltip: tagTooltipOfSpent , tooltipVisible: tagTooltipVisibleOfSpent ,  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(tooltipContentOfSpent, {
        placement: "bottom"
    });
    const hasNFT = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const data = criterias.find((obj)=>obj.type === "isQualifiedNFT");
        const userHasNFT = data?.value;
        return userHasNFT;
    }, [
        criterias
    ]);
    const renderTokenSection = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeletons__WEBPACK_IMPORTED_MODULE_12__/* .SkeletonCardTokens */ .cL, {});
        }
        if (!account) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OnSaleInfo, {
                token: token,
                distributionRatio: distributionRatio,
                saleAmount: ifo[poolId].saleAmount
            });
        }
        let message;
        if (account && !hasProfile) {
            message = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                my: "24px",
                p: "8px",
                variant: "warning",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* .MessageText */ .Y, {
                            display: "inline",
                            children: publicIfoData.status === "finished" ? t("Activate PancakeSwap Profile to take part in next IFO‘s!") : t("You need an active PancakeSwap Profile to take part in an IFO!")
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_IfoCardStyles__WEBPACK_IMPORTED_MODULE_14__/* .MessageTextLink */ .Ne, {
                            href: "/ifo#ifo-how-to",
                            color: "#D67E0A",
                            display: "inline",
                            children: [
                                t("How does it work?"),
                                " \xbb"
                            ]
                        })
                    ]
                })
            });
        }
        const ifov31Msg = ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolBasic */ .vr.poolBasic && criterias?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            mt: "16px",
            children: [
                !isEligible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    mb: "24px",
                    p: "8px",
                    variant: "warning",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        color: "warning",
                        width: "24px"
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* .MessageText */ .Y, {
                        small: true,
                        display: "inline",
                        children: t("Meet any one of the following requirements to be eligible.")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IFORequirements__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    criterias: criterias,
                    admissionProfile: publicPoolCharacteristics?.admissionProfile,
                    pointThreshold: publicPoolCharacteristics?.pointThreshold
                }),
                isEligible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    mt: "24px",
                    p: "8px",
                    variant: "success",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* .MessageText */ .Y, {
                        small: true,
                        display: "inline",
                        children: hasNFT ? t("Using eligible NFT for entry. Do not remove or edit your profile avatar before claiming.") : t("You are eligible to participate in this Private Sale!")
                    })
                })
            ]
        }) : null;
        if ((ifo.version === 3 || ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited) && (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(credit) === 0) {
            message = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                my: "24px",
                p: "8px",
                variant: "danger",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* .MessageText */ .Y, {
                            display: "inline",
                            children: t("You don’t have any iCAKE available for IFO public sale.")
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_IfoCardStyles__WEBPACK_IMPORTED_MODULE_14__/* .MessageTextLink */ .Ne, {
                            display: "inline",
                            fontWeight: 700,
                            href: "/ifo#ifo-how-to",
                            color: "failure",
                            children: [
                                t("How does it work?"),
                                " \xbb"
                            ]
                        })
                    ]
                })
            });
        }
        if (account && !hasProfile) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OnSaleInfo, {
                        token: token,
                        distributionRatio: distributionRatio,
                        saleAmount: ifo[poolId].saleAmount
                    }),
                    message
                ]
            });
        }
        message = ifov31Msg || message;
        if (publicIfoData.status === "coming_soon") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TokenSection, {
                        primaryToken: ifo.token,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                children: t("On sale")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Value, {
                                children: ifo[poolId].saleAmount
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        fontSize: "14px",
                        color: "textSubtle",
                        pl: "48px",
                        children: t("%ratio%% of total sale", {
                            ratio: distributionRatio
                        })
                    }),
                    message,
                    enableStatus !== _types__WEBPACK_IMPORTED_MODULE_10__/* .EnableStatus.ENABLED */ .W.ENABLED && account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                        width: "100%",
                        mt: "16px",
                        onClick: onApprove,
                        isLoading: enableStatus === _types__WEBPACK_IMPORTED_MODULE_10__/* .EnableStatus.IS_ENABLING */ .W.IS_ENABLING,
                        endIcon: enableStatus === _types__WEBPACK_IMPORTED_MODULE_10__/* .EnableStatus.IS_ENABLING */ .W.IS_ENABLING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                            spin: true,
                            color: "currentColor"
                        }) : null,
                        children: t("Enable")
                    })
                ]
            });
        }
        if (publicIfoData.status === "live") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CommitTokenSection, {
                        commitToken: ifo.currency,
                        mb: "24px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                children: t("Your %symbol% committed", {
                                    symbol: currency.symbol
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Value, {
                                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(amountTokenCommittedInLP, currency.decimals)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PercentageOfTotal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                userAmount: amountTokenCommittedInLP,
                                totalAmount: publicPoolCharacteristics.totalAmountPool
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                                    children: t("Your %symbol% spent", {
                                                        symbol: currency.symbol
                                                    })
                                                }),
                                                tagTooltipVisibleOfSpent && tagTooltipOfSpent,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    ref: tagTargetRefOfSpent,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                                        ml: "4px",
                                                        width: "15px",
                                                        height: "15px",
                                                        color: "textSubtle"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                            bold: true,
                                            decimals: 4,
                                            fontSize: "20px",
                                            value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(spentAmount, currency.decimals)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TokenSection, {
                        primaryToken: ifo.token,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                children: t("%symbol% to receive", {
                                    symbol: token.symbol
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Value, {
                                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(offeringAmountInToken, token.decimals)
                            }),
                            version >= 3.2 && publicPoolCharacteristics.vestingInformation.percentage > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VestingAvailableToClaim__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                amountToReceive: offeringAmountInToken,
                                percentage: publicPoolCharacteristics.vestingInformation.percentage,
                                decimals: token.decimals
                            })
                        ]
                    }),
                    message
                ]
            });
        }
        if (publicIfoData.status === "finished") {
            return amountTokenCommittedInLP.isEqualTo(0) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                flexDirection: "column",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        width: 80,
                        mb: "16px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        fontWeight: 600,
                        children: t("You didn’t participate in this sale!")
                    }),
                    ifov31Msg || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                textAlign: "center",
                                fontSize: "14px",
                                children: t("To participate in the next IFO, lock some CAKE in the fixed-term staking CAKE pool!")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_IfoCardStyles__WEBPACK_IMPORTED_MODULE_14__/* .MessageTextLink */ .Ne, {
                                href: "/ifo#ifo-how-to",
                                textAlign: "center",
                                children: [
                                    t("How does it work?"),
                                    " \xbb"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakeVaultButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                mt: "24px"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CommitTokenSection, {
                        commitToken: ifo.currency,
                        mb: "24px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                children: hasClaimed ? t("Your %symbol% RECLAIMED", {
                                    symbol: currency.symbol
                                }) : t("Your %symbol% TO RECLAIM", {
                                    symbol: currency.symbol
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Value, {
                                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(refundingAmountInLP, currency.decimals)
                                    }),
                                    hasClaimed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        color: "success",
                                        ml: "8px"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PercentageOfTotal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                userAmount: amountTokenCommittedInLP,
                                totalAmount: publicPoolCharacteristics.totalAmountPool
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TokenSection, {
                        primaryToken: ifo.token,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Label, {
                                children: [
                                    " ",
                                    hasClaimed ? t("%symbol% received", {
                                        symbol: token.symbol
                                    }) : t("%symbol% to receive", {
                                        symbol: token.symbol
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Value, {
                                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(offeringAmountInToken, token.decimals)
                                    }),
                                    !hasClaimed && offeringAmountInToken.isEqualTo(0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: targetRef,
                                        style: {
                                            display: "flex",
                                            marginLeft: "8px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {})
                                    }),
                                    hasClaimed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        color: "success",
                                        ml: "8px"
                                    })
                                ]
                            })
                        ]
                    }),
                    hasClaimed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        my: "24px",
                        p: "8px",
                        variant: "success",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* .MessageText */ .Y, {
                            children: t("You’ve successfully claimed tokens back.")
                        })
                    })
                ]
            });
        }
        return null;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
        children: [
            tooltipVisible && tooltip,
            renderTokenSection()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoCardTokens);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33430);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const StyledIfoVestingFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-95b813ab-0"
})`
  padding: 16px;
  margin: 0 -12px -12px;
  background-color: ${({ theme  })=>theme.colors.background};
`;
const FooterEntry = ({ label , value  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                bold: true,
                fontSize: "12px",
                color: "textSubtle",
                textTransform: "uppercase",
                children: label
            }),
            value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                bold: true,
                small: true,
                textAlign: "right",
                children: value
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                height: 21,
                width: 80
            })
        ]
    });
};
const IfoVestingFooter = ({ ifo , poolId , publicIfoData , walletIfoData ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { token  } = ifo;
    const { vestingInformation  } = publicIfoData[poolId];
    const { vestingAmountTotal  } = walletIfoData[poolId];
    const releaseRate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const rate = new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(vestingAmountTotal).div(vestingInformation.duration);
        const rateBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .getFullDisplayBalance */ .NJ)(rate, token.decimals, 5);
        return new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(rateBalance).gte(0.00001) ? rateBalance : "< 0.00001";
    }, [
        vestingInformation,
        vestingAmountTotal,
        token
    ]);
    const releaseDate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const currentTimeStamp = new Date().getTime();
        const date = publicIfoData.vestingStartTime === 0 ? currentTimeStamp : (publicIfoData.vestingStartTime + vestingInformation.duration) * 1000;
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(date, "MM/dd/yyyy HH:mm");
    }, [
        publicIfoData,
        vestingInformation
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledIfoVestingFooter, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                label: t("Release rate"),
                value: t("%releaseRate% per second", {
                    releaseRate
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterEntry, {
                label: t("Fully released date"),
                value: releaseDate
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoVestingFooter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94022);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Step__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_Step__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-da6c8dbf-0"
})`
  width: 100%;
  height: 2px;
  border-radius: 4px;
  margin: 10px 4px auto 4px;
  background-color: ${({ isPastSpacer , theme  })=>isPastSpacer ? theme.colors.textSubtle : theme.colors.textDisabled};
`;
const ProgressStepper = ({ poolId , publicIfoData  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { 0: steps , 1: setSteps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: activeStepIndex , 1: setActiveStepIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { vestingStartTime  } = publicIfoData;
        const { cliff , duration  } = publicIfoData[poolId]?.vestingInformation;
        const currentTimeStamp = new Date().getTime();
        const timeSalesEnded = vestingStartTime * 1000;
        const timeCliff = vestingStartTime === 0 ? currentTimeStamp : (vestingStartTime + cliff) * 1000;
        const timeVestingEnd = vestingStartTime === 0 ? currentTimeStamp : (vestingStartTime + duration) * 1000;
        let index = 0;
        if (vestingStartTime > 0) {
            if (currentTimeStamp >= timeVestingEnd) {
                index = 2;
            } else if (timeVestingEnd >= currentTimeStamp && timeCliff <= currentTimeStamp) {
                index = 1;
            } else {
                index = 0;
            }
        }
        setActiveStepIndex(index);
        setSteps([
            {
                text: t("Sales ended"),
                timeStamp: timeSalesEnded
            },
            {
                text: cliff === 0 ? t("Vesting Start") : t("Cliff"),
                timeStamp: timeCliff
            },
            {
                text: t("Vesting end"),
                timeStamp: timeVestingEnd
            }, 
        ]);
    }, [
        t,
        poolId,
        publicIfoData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: steps.map((step, index)=>{
            const isPastSpacer = index < activeStepIndex;
            return(// eslint-disable-next-line react/no-array-index-key
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Step__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        index: index,
                        stepText: step.text,
                        timeStamp: step.timeStamp,
                        activeStepIndex: activeStepIndex
                    }),
                    index + 1 < steps.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Spacer, {
                        isPastSpacer: isPastSpacer
                    })
                ]
            }, index));
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressStepper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ReleasedChart = ({ percentage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "78px",
        height: "78px",
        viewBox: "0 0 42 42",
        style: {
            transform: "rotate(-90deg) scaleY(-1)"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "21",
                cy: "21",
                r: "15.91549430918954",
                fill: "transparent",
                stroke: "#7645D9",
                strokeWidth: "5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "21",
                cy: "21",
                r: "15.91549430918954",
                fill: "transparent",
                stroke: "#D7CAEC",
                strokeWidth: "5",
                strokeDasharray: "100",
                strokeDashoffset: percentage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReleasedChart);


/***/ }),

/***/ 94213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45366);
/* harmony import */ var _ReleasedChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-9e0d6747-0"
})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  align-self: center;
  background-color: ${({ theme , isActive  })=>isActive ? theme.colors.secondary : "#d7caec"};
`;
const ReleasedTokenInfo = ({ ifo , amountReleased , amountInVesting , isVestingOver ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { token  } = ifo;
    const amount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const totalReleasedAmount = isVestingOver ? amountReleased.plus(amountInVesting) : amountReleased;
        const released = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(totalReleasedAmount, token.decimals);
        const inVesting = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(amountInVesting, token.decimals);
        const total = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(released).plus(inVesting);
        const releasedPercentage = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(released).div(total).times(100).toFixed(2);
        const releasedPercentageDisplay = (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(releasedPercentage) ? "0" : releasedPercentage;
        const inVestingPercentage = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(inVesting).div(total).times(100).toFixed(2);
        const inVestingPercentageDisplay = (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(inVestingPercentage) ? "0" : inVestingPercentage;
        return {
            released,
            releasedPercentage,
            releasedPercentageDisplay,
            inVesting,
            inVestingPercentage,
            inVestingPercentageDisplay
        };
    }, [
        token,
        amountReleased,
        amountInVesting,
        isVestingOver
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        mb: "24px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReleasedChart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                percentage: Number(amount.releasedPercentage)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                flexDirection: "column",
                alignSelf: "center",
                width: "100%",
                ml: "20px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        mb: "7px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                                        isActive: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        ml: "4px",
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        children: t("Released")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ml: "auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        fontSize: "14px",
                                        bold: true,
                                        as: "span",
                                        mr: "4px",
                                        children: `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(amount.released, 4, 4)}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        fontSize: "14px",
                                        as: "span",
                                        children: `(${amount.releasedPercentageDisplay}%)`
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        ml: "4px",
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        children: t("Vested")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ml: "auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        fontSize: "14px",
                                        bold: true,
                                        as: "span",
                                        mr: "4px",
                                        children: isVestingOver ? "-" : `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(amount.inVesting, 4, 4)}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        fontSize: "14px",
                                        as: "span",
                                        children: `(${amount.inVestingPercentageDisplay}%)`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReleasedTokenInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20201);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67854);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const sharedFlexStyles = `
  min-width: 86px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ExpiredWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-87c75e24-0"
})`
  ${sharedFlexStyles}

  svg {
    fill: ${({ theme  })=>theme.colors.textSubtle};
  }
`;
const ActiveWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-87c75e24-1"
})`
  ${sharedFlexStyles}
`;
const FutureWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-87c75e24-2"
})`
  ${sharedFlexStyles}

  svg {
    fill: ${({ theme  })=>theme.colors.textDisabled};
  }
`;
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-87c75e24-3"
})`
  margin: 4px 0;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme  })=>theme.colors.secondary};
`;
const StyledDateText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-87c75e24-4"
})`
  font-size: 12px;
  line-height: 120%;
  min-height: 29px;
  text-align: center;
  color: ${({ theme  })=>theme.colors.textSubtle};
`;
const Step = ({ index , stepText , timeStamp , activeStepIndex  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const isExpired = index < activeStepIndex;
    const isActive = index === activeStepIndex;
    const isFuture = index > activeStepIndex;
    const timeFormat = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (timeStamp === 0) {
            return t("Now");
        }
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(timeStamp, "MM/dd/yyyy HH:mm");
    }, [
        t,
        timeStamp
    ]);
    if (isExpired) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ExpiredWrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledText, {
                    textTransform: "uppercase",
                    children: stepText
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDateText, {
                    children: timeFormat
                })
            ]
        });
    }
    if (isActive) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ActiveWrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledText, {
                    textTransform: "uppercase",
                    children: stepText
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDateText, {
                    children: timeFormat
                })
            ]
        });
    }
    if (isFuture) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FutureWrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledText, {
                    textTransform: "uppercase",
                    children: stepText
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDateText, {
                    children: timeFormat
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: "Er"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Step);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46684);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27156);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, components_Card__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, components_Card__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const TotalAvailableClaim = ({ ifo , amountAvailableToClaim ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { token  } = ifo;
    const amountAvailable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>amountAvailableToClaim.gt(0) ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getFullDisplayBalance */ .NJ)(amountAvailableToClaim, token.decimals, 4) : "0", [
        token,
        amountAvailableToClaim
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Card__WEBPACK_IMPORTED_MODULE_3__/* .LightGreyCard */ .m5, {
        mt: "24px",
        mb: "8px",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_2__/* .TokenImage */ .O, {
                    mr: "16px",
                    width: 32,
                    height: 32,
                    token: token,
                    style: {
                        alignSelf: "flex-start"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            bold: true,
                            color: "secondary",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            children: t("%symbol% available to claim", {
                                symbol: token.symbol
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            as: "span",
                            bold: true,
                            fontSize: "20px",
                            children: amountAvailable
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalAvailableClaim);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42791);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27156);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46684);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_1__, components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([components_Card__WEBPACK_IMPORTED_MODULE_1__, components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const TotalPurchased = ({ ifo , poolId , walletIfoData  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { token  } = ifo;
    const { offeringAmountInToken , amountTokenCommittedInLP , refundingAmountInLP  } = walletIfoData[poolId];
    const spentAmount = amountTokenCommittedInLP.minus(refundingAmountInLP);
    const tooltipContentOfSpent = t('Based on "overflow" sales method. %refundingAmount% unspent %spentToken% are available to claim after the sale is completed.', {
        refundingAmount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceNumber */ .mW)(refundingAmountInLP, ifo.currency.decimals).toFixed(4),
        spentToken: ifo.currency.symbol
    });
    const { targetRef: tagTargetRefOfSpent , tooltip: tagTooltipOfSpent , tooltipVisible: tagTooltipVisibleOfSpent ,  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(tooltipContentOfSpent, {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_1__/* .LightGreyCard */ .m5, {
        mt: "35px",
        mb: "24px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_2__/* .TokenImage */ .O, {
                        mr: "16px",
                        width: 32,
                        height: 32,
                        token: token,
                        style: {
                            alignSelf: "flex-start"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                color: "secondary",
                                bold: true,
                                fontSize: "12px",
                                textTransform: "uppercase",
                                children: t("Total %symbol% purchased", {
                                    symbol: token.symbol
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                bold: true,
                                prefix: "~",
                                decimals: 4,
                                fontSize: "20px",
                                value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceNumber */ .mW)(offeringAmountInToken, token.decimals)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_2__/* .TokenImage */ .O, {
                        mr: "16px",
                        width: 32,
                        height: 32,
                        token: ifo.currency,
                        style: {
                            alignSelf: "flex-start"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                bold: true,
                                color: "secondary",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                children: t("Your %symbol% committed", {
                                    symbol: ifo.currency.symbol
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                bold: true,
                                decimals: 4,
                                fontSize: "20px",
                                value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceNumber */ .mW)(amountTokenCommittedInLP, ifo.currency.decimals)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ml: "48px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    bold: true,
                                    color: "secondary",
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    children: t("Your %symbol% spent", {
                                        symbol: ifo.currency.symbol
                                    })
                                }),
                                tagTooltipVisibleOfSpent && tagTooltipOfSpent,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    ref: tagTargetRefOfSpent,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        ml: "4px",
                                        width: "15px",
                                        height: "15px",
                                        color: "textSubtle"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            bold: true,
                            decimals: 4,
                            fontSize: "20px",
                            value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceNumber */ .mW)(spentAmount, ifo.currency.decimals)
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalPurchased);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22868);
/* harmony import */ var views_Ifos_hooks_useIfoVesting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48825);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _ProgressStepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62264);
/* harmony import */ var _TotalPurchased__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36772);
/* harmony import */ var _TotalAvailableClaim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59964);
/* harmony import */ var _ReleasedTokenInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94213);
/* harmony import */ var _IfoVestingFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14821);
/* harmony import */ var _ClaimButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64243);
/* harmony import */ var _VestingClaimButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProgressStepper__WEBPACK_IMPORTED_MODULE_6__, _TotalPurchased__WEBPACK_IMPORTED_MODULE_7__, _TotalAvailableClaim__WEBPACK_IMPORTED_MODULE_8__, _ReleasedTokenInfo__WEBPACK_IMPORTED_MODULE_9__, _IfoVestingFooter__WEBPACK_IMPORTED_MODULE_10__, _ClaimButton__WEBPACK_IMPORTED_MODULE_11__, _VestingClaimButton__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([_ProgressStepper__WEBPACK_IMPORTED_MODULE_6__, _TotalPurchased__WEBPACK_IMPORTED_MODULE_7__, _TotalAvailableClaim__WEBPACK_IMPORTED_MODULE_8__, _ReleasedTokenInfo__WEBPACK_IMPORTED_MODULE_9__, _IfoVestingFooter__WEBPACK_IMPORTED_MODULE_10__, _ClaimButton__WEBPACK_IMPORTED_MODULE_11__, _VestingClaimButton__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const IfoVestingCard = ({ poolId , ifo , publicIfoData , walletIfoData ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { token  } = ifo;
    const { vestingStartTime  } = publicIfoData;
    const userPool = walletIfoData[poolId];
    const { duration  } = publicIfoData[poolId]?.vestingInformation;
    const currentTimeStamp = new Date().getTime();
    const timeVestingEnd = vestingStartTime === 0 ? currentTimeStamp : (vestingStartTime + duration) * 1000;
    const isVestingOver = currentTimeStamp > timeVestingEnd;
    const { amountReleased , amountInVesting , amountAvailableToClaim , amountAlreadyClaimed  } = (0,views_Ifos_hooks_useIfoVesting__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        poolId,
        publicIfoData,
        walletIfoData
    });
    const amountClaimed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>amountAlreadyClaimed.gt(0) ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getFullDisplayBalance */ .NJ)(amountAlreadyClaimed, token.decimals, 4) : "0", [
        token,
        amountAlreadyClaimed
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProgressStepper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        poolId: poolId,
                        publicIfoData: publicIfoData
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TotalPurchased__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        ifo: ifo,
                        poolId: poolId,
                        walletIfoData: walletIfoData
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReleasedTokenInfo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        ifo: ifo,
                        amountReleased: amountReleased,
                        amountInVesting: amountInVesting,
                        isVestingOver: isVestingOver
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Divider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TotalAvailableClaim__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        ifo: ifo,
                        amountAvailableToClaim: amountAvailableToClaim
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        mb: "24px",
                        color: "textSubtle",
                        fontSize: "14px",
                        children: t("You’ve already claimed %amount% %symbol%", {
                            symbol: token.symbol,
                            amount: amountClaimed
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        mb: "24px",
                        children: !userPool.isVestingInitialized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClaimButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            poolId: poolId,
                            ifoVersion: ifo.version,
                            walletIfoData: walletIfoData
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VestingClaimButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            poolId: poolId,
                            amountAvailableToClaim: amountAvailableToClaim,
                            walletIfoData: walletIfoData
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoVestingFooter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ifo: ifo,
                poolId: poolId,
                publicIfoData: publicIfoData,
                walletIfoData: walletIfoData
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoVestingCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);



const PercentageOfTotal = ({ userAmount , totalAmount , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const percentOfUserContribution = totalAmount.isGreaterThan(0) ? userAmount.div(totalAmount).times(100).toNumber() : 0;
    const percentOfUserDisplay = percentOfUserContribution.toLocaleString(undefined, {
        maximumFractionDigits: 5
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        fontSize: "14px",
        color: "textSubtle",
        ...props,
        children: t("%num% of total", {
            num: `${percentOfUserDisplay}%`
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercentageOfTotal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X2": () => (/* binding */ SkeletonCardDetails),
/* harmony export */   "cL": () => (/* binding */ SkeletonCardTokens),
/* harmony export */   "r0": () => (/* binding */ SkeletonCardActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const SkeletonCardActions = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        height: "48px"
    });
};
const SkeletonCardTokens = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        variant: "circle",
                        width: "32px",
                        height: "32px",
                        mr: "16px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        width: "90%"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        variant: "circle",
                        width: "32px",
                        height: "32px",
                        mr: "16px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        width: "90%"
                    })
                ]
            })
        ]
    });
};
const SkeletonCardDetails = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                mb: "8px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (null);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);






const VestingAvailableToClaim = ({ amountToReceive , percentage , decimals ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const num = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const vestingaPercentage = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(100).minus(percentage).div(100);
        const total = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amountToReceive).times(vestingaPercentage);
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getFullDisplayBalance */ .NJ)(total, decimals, 2);
    }, [
        amountToReceive,
        percentage,
        decimals
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        fontSize: "14px",
        color: "textSubtle",
        children: t("~%num% available to claim at sales end", {
            num
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VestingAvailableToClaim);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11218);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78950);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ClaimButton = ({ poolId , amountAvailableToClaim , walletIfoData  })=>{
    const userPoolCharacteristics = walletIfoData[poolId];
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .useToast */ .p)();
    const { fetchWithCatchTxError  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const setPendingTx = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((isPending)=>{
        return walletIfoData.setPendingTx(isPending, poolId);
    }, [
        poolId,
        walletIfoData
    ]);
    const handleClaim = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            setPendingTx(true);
            return walletIfoData.contract.release(userPoolCharacteristics.vestingId);
        });
        if (receipt?.status) {
            walletIfoData.setIsClaimed(poolId);
            toastSuccess(t("Success!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("You have successfully claimed available tokens.")
            }));
        }
        setPendingTx(false);
    }, [
        poolId,
        walletIfoData,
        userPoolCharacteristics,
        t,
        fetchWithCatchTxError,
        setPendingTx,
        toastSuccess
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        width: "100%",
        onClick: handleClaim,
        isLoading: userPoolCharacteristics.isPendingTx,
        disabled: amountAvailableToClaim.lte(0) || userPoolCharacteristics.isPendingTx,
        endIcon: userPoolCharacteristics.isPendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            spin: true,
            color: "currentColor"
        }) : null,
        children: t("Claim")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "u": () => (/* binding */ cardConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23992);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6429);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46775);
/* harmony import */ var views_Ifos_hooks_v3_useCriterias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43755);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9270);
/* harmony import */ var _IfoCardTokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75329);
/* harmony import */ var _IfoCardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73965);
/* harmony import */ var _IfoCardDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78753);
/* harmony import */ var _IfoVestingCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59297);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, _IfoCardTokens__WEBPACK_IMPORTED_MODULE_8__, _IfoCardActions__WEBPACK_IMPORTED_MODULE_9__, _IfoCardDetails__WEBPACK_IMPORTED_MODULE_10__, _IfoVestingCard__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, _IfoCardTokens__WEBPACK_IMPORTED_MODULE_8__, _IfoCardActions__WEBPACK_IMPORTED_MODULE_9__, _IfoCardDetails__WEBPACK_IMPORTED_MODULE_10__, _IfoVestingCard__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-633afa71-0"
})`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 3px 0;
  height: fit-content;
`;
const cardConfig = (t, poolId, meta)=>{
    switch(poolId){
        case config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolBasic */ .vr.poolBasic:
            if (meta?.version >= 3.1) {
                const MSG_MAP = {
                    needQualifiedNFT: t("Set PancakeSquad NFT as Pancake Profile avatar."),
                    needQualifiedPoints: t("Reach a certain Pancake Profile Points threshold.")
                };
                const msgs = Object.keys(meta).filter((criteria)=>meta[criteria]).map((criteria)=>MSG_MAP[criteria]).filter(Boolean);
                return {
                    title: t("Private Sale"),
                    variant: "blue",
                    tooltip: msgs?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: t("Meet any one of the requirements to join:")
                            }),
                            msgs.map((msg)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    ml: "16px",
                                    as: "li",
                                    children: msg
                                }, msg))
                        ]
                    }) : null
                };
            }
            return {
                title: t("Basic Sale"),
                variant: "blue",
                tooltip: t("Every person can only commit a limited amount, but may expect a higher return per token committed.")
            };
        case config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited:
            return {
                title: meta?.version >= 3.1 ? t("Public Sale") : t("Unlimited Sale"),
                variant: "violet",
                tooltip: t("No limits on the amount you can commit. Additional fee applies when claiming.")
            };
        default:
            return {
                title: "",
                variant: "blue",
                tooltip: ""
            };
    }
};
const SmallCard = ({ poolId , ifo , publicIfoData , walletIfoData , onApprove , enableStatus ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .useWeb3React */ .Ge)();
    const { admissionProfile , pointThreshold , vestingInformation  } = publicIfoData[poolId];
    const { needQualifiedNFT , needQualifiedPoints  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return ifo.version >= 3.1 && poolId === config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolBasic */ .vr.poolBasic ? {
            needQualifiedNFT: Boolean(admissionProfile),
            needQualifiedPoints: pointThreshold ? pointThreshold > 0 : false
        } : {};
    }, [
        ifo.version,
        admissionProfile,
        pointThreshold,
        poolId
    ]);
    const config = cardConfig(t, poolId, {
        version: ifo.version,
        needQualifiedNFT,
        needQualifiedPoints
    });
    const { hasActiveProfile , isLoading: isProfileLoading  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useProfile */ .Un)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(config.tooltip, {
        placement: "bottom"
    });
    const isLoading = isProfileLoading || publicIfoData.status === "idle";
    const { isEligible , criterias  } = (0,views_Ifos_hooks_v3_useCriterias__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(walletIfoData[poolId], {
        needQualifiedNFT,
        needQualifiedPoints
    });
    const isVesting = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return account && ifo.version >= 3.2 && vestingInformation.percentage > 0 && publicIfoData.status === "finished" && walletIfoData[poolId].amountTokenCommittedInLP.gt(0);
    }, [
        account,
        ifo,
        poolId,
        publicIfoData,
        vestingInformation,
        walletIfoData
    ]);
    const cardTitle = ifo.cIFO ? `${config.title} (cIFO)` : config.title;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCard, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        p: "16px 24px",
                        variant: config.variant,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    bold: true,
                                    fontSize: "20px",
                                    lineHeight: 1,
                                    children: cardTitle
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: targetRef,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        p: "12px",
                        children: isVesting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoVestingCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            ifo: ifo,
                            poolId: poolId,
                            publicIfoData: publicIfoData,
                            walletIfoData: walletIfoData
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoCardTokens__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    criterias: criterias,
                                    isEligible: isEligible,
                                    poolId: poolId,
                                    ifo: ifo,
                                    publicIfoData: publicIfoData,
                                    walletIfoData: walletIfoData,
                                    hasProfile: hasActiveProfile,
                                    isLoading: isLoading,
                                    onApprove: onApprove,
                                    enableStatus: enableStatus
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    mt: "24px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoCardActions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        isEligible: isEligible,
                                        poolId: poolId,
                                        ifo: ifo,
                                        publicIfoData: publicIfoData,
                                        walletIfoData: walletIfoData,
                                        hasProfile: hasActiveProfile,
                                        isLoading: isLoading,
                                        enableStatus: enableStatus
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoCardDetails__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    isEligible: isEligible,
                                    poolId: poolId,
                                    ifo: ifo,
                                    publicIfoData: publicIfoData,
                                    walletIfoData: walletIfoData
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ IfoRibbon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59045);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60609);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68999);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Timer__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_Timer__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const BigCurve = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fc07736d-0"
})`
  width: 150%;
  position: absolute;
  top: -150%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme  })=>theme.mediaQueries.md} {
    border-radius: 50%;
  }

  ${({ $status , theme  })=>{
    switch($status){
        case "coming_soon":
            return `
          background: ${theme.colors.tertiary};
        `;
        case "live":
            return `
          background: linear-gradient(#8051D6 100%, #492286 100%);
        `;
        case "finished":
            return `
          background: ${theme.colors.input};
        `;
        default:
            return "";
    }
}}
`;
const IfoRibbon = ({ publicIfoData  })=>{
    const { status  } = publicIfoData;
    let Component;
    if (status === "finished") {
        Component = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IfoRibbonEnd, {});
    } else if (status === "live") {
        Component = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IfoRibbonLive, {
            publicIfoData: publicIfoData
        });
    } else if (status === "coming_soon") {
        Component = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IfoRibbonSoon, {
            publicIfoData: publicIfoData
        });
    }
    if (status === "idle") {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            status === "live" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                variant: "flat",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .Bar */ .$, {
                    $useDark: true,
                    $background: "linear-gradient(273deg, #ffd800 -2.87%, #eb8c00 113.73%)",
                    style: {
                        width: `${Math.min(Math.max(publicIfoData.progress, 0), 100)}%`
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: [
                    "48px",
                    "48px",
                    "48px",
                    "75px"
                ],
                position: "relative",
                overflow: "hidden",
                children: Component
            })
        ]
    });
};
const IfoRibbonEnd = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BigCurve, {
                $status: "finished"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                position: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    as: "h3",
                    scale: "lg",
                    color: "textSubtle",
                    children: t("Sale Finished!")
                })
            })
        ]
    });
};
const IfoRibbonSoon = ({ publicIfoData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BigCurve, {
                $status: "coming_soon"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                position: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    as: "h3",
                    scale: "lg",
                    color: "secondary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Timer__WEBPACK_IMPORTED_MODULE_3__/* .SoonTimer */ .Y, {
                        publicIfoData: publicIfoData
                    })
                })
            })
        ]
    });
};
const IfoRibbonLive = ({ publicIfoData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BigCurve, {
                $status: "live"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                position: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Timer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    publicIfoData: publicIfoData
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var views_Ifos_contexts_IfoContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90991);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);






const StakeVaultButton = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { isExpanded , setIsExpanded  } = (0,views_Ifos_contexts_IfoContext__WEBPACK_IMPORTED_MODULE_3__/* .useConfig */ .ZR)();
    const isFinishedPage = router.pathname.includes("history");
    const scrollToTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);
    const handleClickButton = ()=>{
        // Always expand for mobile
        if (!isExpanded) {
            setIsExpanded(true);
        }
        if (isFinishedPage) {
            router.push("/ifo");
        } else {
            scrollToTop();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        ...props,
        onClick: handleClickButton,
        children: t("Go to CAKE pool")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakeVaultButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ SoonTimer),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47418);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87514);
/* harmony import */ var utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10037);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const GradientText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ecc97440-0"
})`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
`;
const FlexGap = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ecc97440-1"
})`
  gap: ${({ gap  })=>gap};
`;
const SoonTimer = ({ publicIfoData  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { status , secondsUntilStart , startBlockNum  } = publicIfoData;
    const timeUntil = (0,utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(secondsUntilStart);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        justifyContent: "center",
        position: "relative",
        children: status === "idle" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            animation: "pulse",
            variant: "rect",
            width: "100%",
            height: "48px"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            external: true,
            href: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getBlockExploreLink */ .C)(startBlockNum, "countdown", chainId),
            color: "secondary",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FlexGap, {
                    gap: "8px",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            as: "h3",
                            scale: "lg",
                            color: "secondary",
                            children: t("Start in")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FlexGap, {
                            gap: "4px",
                            alignItems: "baseline",
                            children: [
                                timeUntil.days ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            scale: "lg",
                                            color: "secondary",
                                            children: timeUntil.days
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            color: "secondary",
                                            children: t("d")
                                        })
                                    ]
                                }) : null,
                                timeUntil.days || timeUntil.hours ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            color: "secondary",
                                            scale: "lg",
                                            children: timeUntil.hours
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            color: "secondary",
                                            children: t("h")
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            color: "secondary",
                                            scale: "lg",
                                            children: !timeUntil.days && !timeUntil.hours && timeUntil.minutes === 0 ? "< 1" : timeUntil.minutes
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            color: "secondary",
                                            children: t("m")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    ml: "4px",
                    color: "secondary"
                })
            ]
        })
    });
};
const EndInHeading = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ecc97440-2"
})`
  color: white;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;

  ${({ theme  })=>theme.mediaQueries.md} {
    font-size: 24px;
  }
`;
const LiveNowHeading = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(EndInHeading).withConfig({
    componentId: "sc-ecc97440-3"
})`
  color: white;
  ${({ theme  })=>theme.mediaQueries.md} {
    background: -webkit-linear-gradient(#ffd800, #eb8c00);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
  }
`;
const LiveTimer = ({ publicIfoData  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { status , secondsUntilEnd , endBlockNum  } = publicIfoData;
    const timeUntil = (0,utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(secondsUntilEnd);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        justifyContent: "center",
        position: "relative",
        children: status === "idle" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            animation: "pulse",
            variant: "rect",
            width: "100%",
            height: "48px"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            external: true,
            href: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getBlockExploreLink */ .C)(endBlockNum, "countdown", chainId),
            color: "white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    width: "42px",
                    mr: "8px"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FlexGap, {
                    gap: "8px",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LiveNowHeading, {
                            textTransform: "uppercase",
                            as: "h3",
                            children: `${t("Live Now")}!`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EndInHeading, {
                            as: "h3",
                            scale: "lg",
                            color: "white",
                            children: t("Ends in")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FlexGap, {
                            gap: "4px",
                            alignItems: "baseline",
                            children: [
                                timeUntil.days ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GradientText, {
                                            scale: "lg",
                                            children: timeUntil.days
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            color: "white",
                                            children: t("d")
                                        })
                                    ]
                                }) : null,
                                timeUntil.days || timeUntil.hours ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GradientText, {
                                            scale: "lg",
                                            children: timeUntil.hours
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            color: "white",
                                            children: t("h")
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GradientText, {
                                            scale: "lg",
                                            children: !timeUntil.days && !timeUntil.hours && timeUntil.minutes === 0 ? "< 1" : timeUntil.minutes
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            color: "white",
                                            children: t("m")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    ml: "4px",
                    color: "white"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiveTimer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KK": () => (/* binding */ IfoCurrentCard),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ke": () => (/* binding */ StyledCardBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(63157);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6429);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74860);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65726);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79847);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17943);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26488);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_requiresApproval__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63103);
/* harmony import */ var _hooks_useIfoApprove__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34800);
/* harmony import */ var _IfoCardStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52465);
/* harmony import */ var _Achievement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73542);
/* harmony import */ var _IfoPoolCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73688);
/* harmony import */ var _IfoRibbon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85993);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29245);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, state_block_hooks__WEBPACK_IMPORTED_MODULE_12__, _hooks_useIfoApprove__WEBPACK_IMPORTED_MODULE_15__, _IfoCardStyles__WEBPACK_IMPORTED_MODULE_16__, _Achievement__WEBPACK_IMPORTED_MODULE_17__, _IfoPoolCard__WEBPACK_IMPORTED_MODULE_18__, _IfoRibbon__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, state_block_hooks__WEBPACK_IMPORTED_MODULE_12__, _hooks_useIfoApprove__WEBPACK_IMPORTED_MODULE_15__, _IfoCardStyles__WEBPACK_IMPORTED_MODULE_16__, _Achievement__WEBPACK_IMPORTED_MODULE_17__, _IfoPoolCard__WEBPACK_IMPORTED_MODULE_18__, _IfoRibbon__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z).withConfig({
    componentId: "sc-603f6c0e-0"
})`
  width: 100%;
  margin: auto;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  ${({ $isCurrent  })=>$isCurrent && `
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  > div {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  `}

  > div {
    background: ${({ theme , $isCurrent  })=>$isCurrent ? theme.colors.gradientBubblegum : theme.colors.dropdown};
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;

    > div {
      border-top-left-radius: 32px;
      border-top-right-radius: 32px;
    }
  }
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z).withConfig({
    componentId: "sc-603f6c0e-1"
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${({ $isCurrent  })=>$isCurrent ? "64px" : "112px"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: ${({ theme  })=>theme.colors.dropdown};
  background-image: ${({ ifoId  })=>`url('/images/ifos/${ifoId}-bg.png')`};
  ${({ theme  })=>theme.mediaQueries.md} {
    height: 112px;
  }
`;
const StyledCardBody = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
    componentId: "sc-603f6c0e-2"
})`
  padding: 24px 16px;
  ${({ theme  })=>theme.mediaQueries.md} {
    padding: 24px;
  }
`;
const StyledCardFooter = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z).withConfig({
    componentId: "sc-603f6c0e-3"
})`
  padding: 0;
  background: ${({ theme  })=>theme.colors.backgroundAlt};
  text-align: center;
`;
const StyledNoHatBunny = styled_components__WEBPACK_IMPORTED_MODULE_13___default().div.withConfig({
    componentId: "sc-603f6c0e-4"
})`
  position: absolute;
  left: -24px;
  z-index: 1;
  top: 33px;
  display: none;

  > img {
    width: 78px;
  }

  ${({ theme  })=>theme.mediaQueries.xl} {
    display: block;
    left: auto;
    top: ${({ $isLive  })=>$isLive ? "63px" : "48px"};
    right: ${({ $isCurrent  })=>$isCurrent ? "17px" : "90px"};

    > img {
      width: 123px;
    }
  }

  ${({ theme  })=>theme.mediaQueries.xxl} {
    right: 90px;
  }
`;
const NoHatBunny = ({ isLive , isCurrent  })=>{
    const { isXs , isSm , isMd  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
    const isSmallerThanTablet = isXs || isSm || isMd;
    if (isSmallerThanTablet && isLive) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledNoHatBunny, {
        $isLive: isLive,
        $isCurrent: isCurrent,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: `/images/ifos/assets/bunnypop-${!isSmallerThanTablet ? "right" : "left"}.png`,
            width: 123,
            height: 162,
            alt: "bunny"
        })
    });
};
// Active Ifo
const IfoCurrentCard = ({ ifo , publicIfoData , walletIfoData  })=>{
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
    const shouldShowBunny = publicIfoData.status === "live" || publicIfoData.status === "coming_soon";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                className: "sticky-header",
                position: "sticky",
                bottom: "48px",
                width: "100%",
                zIndex: 6,
                maxWidth: [
                    "400px",
                    "400px",
                    "400px",
                    "100%"
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                        $isCurrent: true,
                        ifoId: ifo.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoRibbon__WEBPACK_IMPORTED_MODULE_19__/* .IfoRibbon */ .Q, {
                        publicIfoData: publicIfoData
                    }),
                    shouldShowBunny && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoHatBunny, {
                        isLive: publicIfoData.status === "live"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                position: "relative",
                width: "100%",
                maxWidth: [
                    "400px",
                    "400px",
                    "400px",
                    "400px",
                    "400px",
                    "100%"
                ],
                children: [
                    !isMobile && shouldShowBunny && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoHatBunny, {
                        isCurrent: true,
                        isLive: publicIfoData.status === "live"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCard, {
                        $isCurrent: true,
                        children: [
                            !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                                        $isCurrent: true,
                                        ifoId: ifo.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoRibbon__WEBPACK_IMPORTED_MODULE_19__/* .IfoRibbon */ .Q, {
                                        publicIfoData: publicIfoData
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IfoCard, {
                                ifo: ifo,
                                publicIfoData: publicIfoData,
                                walletIfoData: walletIfoData
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCardFooter, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* .ExpandableLabel */ .L, {
                                        expanded: isExpanded,
                                        onClick: ()=>setIsExpanded(!isExpanded),
                                        children: isExpanded ? t("Hide") : t("Details")
                                    }),
                                    isExpanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Achievement__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        ifo: ifo,
                                        publicIfoData: publicIfoData
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const FoldableContent = styled_components__WEBPACK_IMPORTED_MODULE_13___default().div.withConfig({
    componentId: "sc-603f6c0e-5"
})`
  display: ${({ isVisible  })=>isVisible ? "block" : "none"};
`;
// Past Ifo
const IfoFoldableCard = ({ ifo , publicIfoData , walletIfoData  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const wrapperEl = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        const hash = asPath.split("#")[1];
        if (hash === ifo.id) {
            setIsExpanded(true);
            wrapperEl.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        asPath,
        ifo
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        id: ifo.id,
        ref: wrapperEl,
        position: "relative",
        children: [
            isExpanded && isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoHatBunny, {
                isLive: false
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                as: StyledCard,
                borderRadius: "32px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        position: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                                ifoId: ifo.id,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* .ExpandableButton */ .N, {
                                    expanded: isExpanded,
                                    onClick: ()=>setIsExpanded((prev)=>!prev)
                                })
                            }),
                            isExpanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoRibbon__WEBPACK_IMPORTED_MODULE_19__/* .IfoRibbon */ .Q, {
                                    publicIfoData: publicIfoData
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FoldableContent, {
                        isVisible: isExpanded,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IfoCard, {
                                ifo: ifo,
                                publicIfoData: publicIfoData,
                                walletIfoData: walletIfoData
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Achievement__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                ifo: ifo,
                                publicIfoData: publicIfoData
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const IfoCard = ({ ifo , publicIfoData , walletIfoData  })=>{
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useCurrentBlock */ .je)();
    const { fetchIfoData: fetchPublicIfoData , isInitialized: isPublicIfoDataInitialized , secondsUntilEnd  } = publicIfoData;
    const { contract , fetchIfoData: fetchWalletIfoData , resetIfoData: resetWalletIfoData , isInitialized: isWalletDataInitialized ,  } = walletIfoData;
    const { 0: enableStatus , 1: setEnableStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(_types__WEBPACK_IMPORTED_MODULE_20__/* .EnableStatus.DISABLED */ .W.DISABLED);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const raisingTokenContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useERC20 */ .X_)(ifo.currency.address, false);
    // Continue to fetch 2 more minutes / is vesting need get latest data
    const isRecentlyActive = (publicIfoData.status !== "finished" || publicIfoData.status === "finished" && secondsUntilEnd >= -120 || publicIfoData.status === "finished" && ifo.version >= 3.2 && (publicIfoData[config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolBasic */ .vr.poolBasic].vestingInformation.percentage > 0 || publicIfoData[config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited].vestingInformation.percentage > 0)) && ifo.isActive;
    const onApprove = (0,_hooks_useIfoApprove__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(ifo, contract.address);
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* .useToast */ .p)();
    const { fetchWithCatchTxError  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const isWindowVisible = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useIsWindowVisible */ .yr)();
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])((isRecentlyActive || !isPublicIfoDataInitialized) && currentBlock && [
        "fetchPublicIfoData",
        currentBlock
    ], async ()=>{
        fetchPublicIfoData(currentBlock);
    });
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])(isWindowVisible && (isRecentlyActive || !isWalletDataInitialized) && account && "fetchWalletIfoData", async ()=>{
        fetchWalletIfoData();
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_9__/* .FAST_INTERVAL */ .sR
    });
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        if (!account && isWalletDataInitialized) {
            resetWalletIfoData();
        }
    }, [
        account,
        isWalletDataInitialized,
        resetWalletIfoData
    ]);
    const handleApprove = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            setEnableStatus(_types__WEBPACK_IMPORTED_MODULE_20__/* .EnableStatus.IS_ENABLING */ .W.IS_ENABLING);
            return onApprove();
        });
        if (receipt?.status) {
            toastSuccess(t("Successfully Enabled!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("You can now participate in the %symbol% IFO.", {
                    symbol: ifo.token.symbol
                })
            }));
            setEnableStatus(_types__WEBPACK_IMPORTED_MODULE_20__/* .EnableStatus.ENABLED */ .W.ENABLED);
        } else {
            setEnableStatus(_types__WEBPACK_IMPORTED_MODULE_20__/* .EnableStatus.DISABLED */ .W.DISABLED);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        const checkAllowance = async ()=>{
            const approvalRequired = await (0,utils_requiresApproval__WEBPACK_IMPORTED_MODULE_14__/* .requiresApproval */ .S)(raisingTokenContract, account, contract.address);
            setEnableStatus(approvalRequired ? _types__WEBPACK_IMPORTED_MODULE_20__/* .EnableStatus.DISABLED */ .W.DISABLED : _types__WEBPACK_IMPORTED_MODULE_20__/* .EnableStatus.ENABLED */ .W.ENABLED);
        };
        if (account) {
            checkAllowance();
        }
    }, [
        account,
        raisingTokenContract,
        contract,
        setEnableStatus
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCardBody, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_IfoCardStyles__WEBPACK_IMPORTED_MODULE_16__/* .CardsWrapper */ .Y2, {
                shouldReverse: ifo.version >= 3.1,
                singleCard: !publicIfoData.poolBasic || !walletIfoData.poolBasic,
                children: [
                    publicIfoData.poolBasic && walletIfoData.poolBasic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoPoolCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        poolId: config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolBasic */ .vr.poolBasic,
                        ifo: ifo,
                        publicIfoData: publicIfoData,
                        walletIfoData: walletIfoData,
                        onApprove: handleApprove,
                        enableStatus: enableStatus
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IfoPoolCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        poolId: config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolIds.poolUnlimited */ .vr.poolUnlimited,
                        ifo: ifo,
                        publicIfoData: publicIfoData,
                        walletIfoData: walletIfoData,
                        onApprove: handleApprove,
                        enableStatus: enableStatus
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoFoldableCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ EnableStatus)
/* harmony export */ });
var EnableStatus;
(function(EnableStatus) {
    EnableStatus["ENABLED"] = "enabled";
    EnableStatus["DISABLED"] = "disabled";
    EnableStatus["IS_ENABLING"] = "is_enabling";
})(EnableStatus || (EnableStatus = {}));


/***/ }),

/***/ 8615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d": () => (/* binding */ IfoLayoutWrapper)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const IfoLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-22840f40-0"
})`
  > div:not(.sticky-header) {
    margin-bottom: 32px;
  }
`;
const IfoLayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(IfoLayout).withConfig({
    componentId: "sc-22840f40-1"
})`
  column-gap: 32px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;

  ${({ theme  })=>theme.mediaQueries.xl} {
    grid-template-columns: minmax(300px, 1fr) minmax(462px, 2fr);
  }

  > div {
    margin: 0 auto;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TransWithElement = ({ text , element , keyword  })=>{
    const { 0: head , 1: tail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return text.split(keyword);
    }, [
        text,
        keyword
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            head,
            element,
            tail
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransWithElement);


/***/ }),

/***/ 90991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ IfoProvider),
/* harmony export */   "ZR": () => (/* binding */ useConfig)
/* harmony export */ });
/* unused harmony export IfoContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IfoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useConfig() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IfoContext);
}
function IfoProvider({ children  }) {
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IfoContext.Provider, {
        value: {
            isExpanded,
            setIsExpanded
        },
        children: children
    });
}


/***/ }),

/***/ 35669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getStatus)
/* harmony export */ });
const getStatus = (currentBlock, startBlock, endBlock)=>{
    // Add an extra check to currentBlock because it takes awhile to fetch so the initial value is 0
    // making the UI change to an inaccurate status
    if (currentBlock === 0) {
        return "idle";
    }
    if (currentBlock < startBlock) {
        return "coming_soon";
    }
    if (currentBlock >= startBlock && currentBlock <= endBlock) {
        return "live";
    }
    if (currentBlock > endBlock) {
        return "finished";
    }
    return "idle";
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ 5225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85576);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// Retrieve IFO allowance
const useIfoAllowance = (tokenContract, spenderAddress, dependency)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { 0: allowance , 1: setAllowance  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_3__/* .BIG_ZERO */ .HW);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetch = async ()=>{
            try {
                const res = await tokenContract.allowance(account, spenderAddress);
                setAllowance(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(res.toString()));
            } catch (e) {
                console.error(e);
            }
        };
        if (account) {
            fetch();
        }
    }, [
        account,
        spenderAddress,
        tokenContract,
        dependency
    ]);
    return allowance;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIfoAllowance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80361);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_3__]);
hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useIfoApprove = (ifo, spenderAddress)=>{
    const raisingTokenContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20 */ .X_)(ifo.currency.address);
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_2__/* .useCallWithMarketGasPrice */ .r)();
    const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        return callWithMarketGasPrice(raisingTokenContract, "approve", [
            spenderAddress,
            _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.MaxUint256
        ]);
    }, [
        spenderAddress,
        raisingTokenContract,
        callWithMarketGasPrice
    ]);
    return onApprove;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIfoApprove);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85576);



const useIfoVesting = ({ poolId , publicIfoData , walletIfoData  })=>{
    const publicPool = publicIfoData[poolId];
    const userPool = walletIfoData[poolId];
    const vestingPercentage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(publicPool.vestingInformation.percentage).times(0.01), [
        publicPool
    ]);
    const releasedAtSaleEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userPool.offeringAmountInToken).times(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(1).minus(vestingPercentage));
    }, [
        userPool,
        vestingPercentage
    ]);
    const amountReleased = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(releasedAtSaleEnd).plus(userPool.vestingReleased).plus(userPool.vestingComputeReleasableAmount);
    }, [
        userPool,
        releasedAtSaleEnd
    ]);
    const amountInVesting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userPool.offeringAmountInToken).minus(amountReleased);
    }, [
        userPool,
        amountReleased
    ]);
    const amountAvailableToClaim = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return userPool.isVestingInitialized ? userPool.vestingComputeReleasableAmount : releasedAtSaleEnd;
    }, [
        userPool,
        releasedAtSaleEnd
    ]);
    const amountAlreadyClaimed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const released = userPool.isVestingInitialized ? releasedAtSaleEnd : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
        return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(released).plus(userPool.vestingReleased);
    }, [
        releasedAtSaleEnd,
        userPool
    ]);
    return {
        vestingPercentage,
        releasedAtSaleEnd,
        amountReleased,
        amountInVesting,
        amountAvailableToClaim,
        amountAlreadyClaimed
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIfoVesting);


/***/ }),

/***/ 43755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCriterias)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const mapCriteriasToQualifications = {
    needQualifiedNFT: "isQualifiedNFT",
    needQualifiedPoints: "isQualifiedPoints"
};
function useCriterias(userBasicPoolInfo, ifoCriterias) {
    const criterias = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object.keys(ifoCriterias).filter((key)=>ifoCriterias[key]).map((key)=>({
                type: mapCriteriasToQualifications[key],
                value: Boolean(userBasicPoolInfo[mapCriteriasToQualifications[key]])
            })), [
        ifoCriterias,
        userBasicPoolInfo
    ]);
    const isEligible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>criterias.some((criteria)=>criteria?.value), [
        criterias
    ]);
    return {
        isEligible,
        criterias
    };
}


/***/ }),

/***/ 13796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7599);
/* harmony import */ var config_abi_ifoV2_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4554);
/* harmony import */ var config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49795);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72502);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85576);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25152);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__]);
state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










// https://github.com/pancakeswap/pancake-contracts/blob/master/projects/ifo/contracts/IFOV2.sol#L431
// 1,000,000,000 / 100
const TAX_PRECISION = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(10000000000);
const NO_QUALIFIED_NFT_ADDRESS = "0x0000000000000000000000000000000000000000";
const formatPool = (pool)=>({
        raisingAmountPool: pool ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(pool[0].toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
        offeringAmountPool: pool ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(pool[1].toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
        limitPerUserInLP: pool ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(pool[2].toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
        hasTax: pool ? pool[3] : false,
        totalAmountPool: pool ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(pool[4].toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
        sumTaxesOverflow: pool ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(pool[5].toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW
    });
const formatVestingInfo = (pool)=>({
        percentage: pool ? pool[0].toNumber() : 0,
        cliff: pool ? pool[1].toNumber() : 0,
        duration: pool ? pool[2].toNumber() : 0,
        slicePeriodSeconds: pool ? pool[3].toNumber() : 0
    });
/**
 * Gets all public data of an IFO
 */ const useGetPublicIfoData = (ifo)=>{
    const { address , releaseBlockNumber , version  } = ifo;
    const cakePriceUsd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePriceCakeBusd */ .Iu)();
    const lpTokenPriceInUsd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useLpTokenPrice */ .w5)(ifo.currency.symbol);
    const currencyPriceInUSD = ifo.currency === _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_5__/* .bscTokens.cake */ .ds.cake ? cakePriceUsd : lpTokenPriceInUsd;
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isInitialized: false,
        status: "idle",
        blocksRemaining: 0,
        secondsUntilStart: 0,
        progress: 5,
        secondsUntilEnd: 0,
        poolBasic: {
            raisingAmountPool: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            offeringAmountPool: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            limitPerUserInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            taxRate: 0,
            totalAmountPool: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            sumTaxesOverflow: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            pointThreshold: 0,
            admissionProfile: undefined,
            vestingInformation: {
                percentage: 0,
                cliff: 0,
                duration: 0,
                slicePeriodSeconds: 0
            }
        },
        poolUnlimited: {
            raisingAmountPool: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            offeringAmountPool: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            limitPerUserInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            taxRate: 0,
            totalAmountPool: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            sumTaxesOverflow: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW,
            vestingInformation: {
                percentage: 0,
                cliff: 0,
                duration: 0,
                slicePeriodSeconds: 0
            }
        },
        thresholdPoints: undefined,
        startBlockNum: 0,
        endBlockNum: 0,
        numberPoints: 0,
        vestingStartTime: 0
    });
    const abi = version >= 3.1 ? config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_4__ : config_abi_ifoV2_json__WEBPACK_IMPORTED_MODULE_3__ // ifoV2Abi use for version 3.0
    ;
    const fetchIfoData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (currentBlock)=>{
        const [startBlock, endBlock, poolBasic, poolUnlimited, taxRate, numberPoints, thresholdPoints, admissionProfile, pointThreshold, vestingStartTime, basicVestingInformation, unlimitedVestingInformation, ] = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_8__/* .multicallv2 */ .v)({
            abi,
            calls: [
                {
                    address,
                    name: "startBlock"
                },
                {
                    address,
                    name: "endBlock"
                },
                {
                    address,
                    name: "viewPoolInformation",
                    params: [
                        0
                    ]
                },
                {
                    address,
                    name: "viewPoolInformation",
                    params: [
                        1
                    ]
                },
                {
                    address,
                    name: "viewPoolTaxRateOverflow",
                    params: [
                        1
                    ]
                },
                {
                    address,
                    name: "numberPoints"
                },
                {
                    address,
                    name: "thresholdPoints"
                },
                version >= 3.1 && {
                    address,
                    name: "admissionProfile"
                },
                version >= 3.1 && {
                    address,
                    name: "pointThreshold"
                },
                version === 3.2 && {
                    address,
                    name: "vestingStartTime"
                },
                version === 3.2 && {
                    address,
                    name: "viewPoolVestingInformation",
                    params: [
                        0
                    ]
                },
                version === 3.2 && {
                    address,
                    name: "viewPoolVestingInformation",
                    params: [
                        1
                    ]
                }, 
            ].filter(Boolean)
        });
        const poolBasicFormatted = formatPool(poolBasic);
        const poolUnlimitedFormatted = formatPool(poolUnlimited);
        const startBlockNum = startBlock ? startBlock[0].toNumber() : 0;
        const endBlockNum = endBlock ? endBlock[0].toNumber() : 0;
        const taxRateNum = taxRate ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(taxRate[0]._hex).div(TAX_PRECISION).toNumber() : 0;
        const status = (0,_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getStatus */ .l)(currentBlock, startBlockNum, endBlockNum);
        const totalBlocks = endBlockNum - startBlockNum;
        const blocksRemaining = endBlockNum - currentBlock;
        // Calculate the total progress until finished or until start
        const progress = currentBlock > startBlockNum ? (currentBlock - startBlockNum) / totalBlocks * 100 : (currentBlock - releaseBlockNumber) / (startBlockNum - releaseBlockNumber) * 100;
        setState((prev)=>({
                ...prev,
                isInitialized: true,
                secondsUntilEnd: blocksRemaining * config__WEBPACK_IMPORTED_MODULE_2__/* .BSC_BLOCK_TIME */ .hJ,
                secondsUntilStart: (startBlockNum - currentBlock) * config__WEBPACK_IMPORTED_MODULE_2__/* .BSC_BLOCK_TIME */ .hJ,
                poolBasic: {
                    ...poolBasicFormatted,
                    taxRate: 0,
                    pointThreshold: pointThreshold ? pointThreshold[0].toNumber() : 0,
                    admissionProfile: Boolean(admissionProfile && admissionProfile[0]) && admissionProfile[0] !== NO_QUALIFIED_NFT_ADDRESS ? admissionProfile[0] : undefined,
                    vestingInformation: formatVestingInfo(basicVestingInformation)
                },
                poolUnlimited: {
                    ...poolUnlimitedFormatted,
                    taxRate: taxRateNum,
                    vestingInformation: formatVestingInfo(unlimitedVestingInformation)
                },
                status,
                progress,
                blocksRemaining,
                startBlockNum,
                endBlockNum,
                thresholdPoints: thresholdPoints && thresholdPoints[0],
                numberPoints: numberPoints ? numberPoints[0].toNumber() : 0,
                vestingStartTime: vestingStartTime ? vestingStartTime[0].toNumber() : 0
            }));
    }, [
        releaseBlockNumber,
        address,
        version,
        abi
    ]);
    return {
        ...state,
        currencyPriceInUSD,
        fetchIfoData
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetPublicIfoData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25152);
/* harmony import */ var config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49795);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34376);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36204);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85576);
/* harmony import */ var _useIfoAllowance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_pools__WEBPACK_IMPORTED_MODULE_6__, state__WEBPACK_IMPORTED_MODULE_7__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__, _useIfoAllowance__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_pools__WEBPACK_IMPORTED_MODULE_6__, state__WEBPACK_IMPORTED_MODULE_7__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__, _useIfoAllowance__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const initialState = {
    isInitialized: false,
    poolBasic: {
        amountTokenCommittedInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        offeringAmountInToken: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        refundingAmountInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        taxAmountInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        hasClaimed: false,
        isPendingTx: false,
        vestingReleased: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        vestingAmountTotal: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        isVestingInitialized: false,
        vestingId: "0",
        vestingComputeReleasableAmount: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW
    },
    poolUnlimited: {
        amountTokenCommittedInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        offeringAmountInToken: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        refundingAmountInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        taxAmountInLP: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        hasClaimed: false,
        isPendingTx: false,
        vestingReleased: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        vestingAmountTotal: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
        isVestingInitialized: false,
        vestingId: "0",
        vestingComputeReleasableAmount: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW
    }
};
/**
 * Gets all data from an IFO related to a wallet
 */ const useGetWalletIfoData = (ifo)=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const credit = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useIfoCredit */ .cq)();
    const { address , currency , version  } = ifo;
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const contract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useIfoV3Contract */ .Dm)(address);
    const currencyContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20 */ .X_)(currency.address, false);
    const allowance = (0,_useIfoAllowance__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(currencyContract, address);
    const setPendingTx = (status, poolId)=>setState((prevState)=>({
                ...prevState,
                [poolId]: {
                    ...prevState[poolId],
                    isPendingTx: status
                }
            }));
    const setIsClaimed = (poolId)=>{
        setState((prevState)=>({
                ...prevState,
                [poolId]: {
                    ...prevState[poolId],
                    hasClaimed: true
                }
            }));
    };
    const fetchIfoData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        const ifoCalls = [
            "viewUserInfo",
            "viewUserOfferingAndRefundingAmountsForPools"
        ].map((method)=>({
                address,
                name: method,
                params: [
                    account,
                    [
                        0,
                        1
                    ]
                ]
            }));
        let basicId = null;
        let unlimitedId = null;
        if (version >= 3.2) {
            const [[basicIdData], [unlimitedIdData]] = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
                abi: config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_5__,
                calls: [
                    {
                        address,
                        name: "computeVestingScheduleIdForAddressAndPid",
                        params: [
                            account,
                            0
                        ]
                    },
                    {
                        address,
                        name: "computeVestingScheduleIdForAddressAndPid",
                        params: [
                            account,
                            1
                        ]
                    }, 
                ],
                options: {
                    requireSuccess: false
                }
            });
            basicId = basicIdData;
            unlimitedId = unlimitedIdData;
        }
        const ifov3Calls = version >= 3.1 ? [
            {
                address,
                name: "isQualifiedNFT",
                params: [
                    account
                ]
            },
            {
                address,
                name: "isQualifiedPoints",
                params: [
                    account
                ]
            },
            version === 3.2 && {
                address,
                name: "getVestingSchedule",
                params: [
                    basicId
                ]
            },
            version === 3.2 && {
                address,
                name: "getVestingSchedule",
                params: [
                    unlimitedId
                ]
            },
            version === 3.2 && {
                address,
                name: "computeReleasableAmount",
                params: [
                    basicId
                ]
            },
            version === 3.2 && {
                address,
                name: "computeReleasableAmount",
                params: [
                    unlimitedId
                ]
            }, 
        ].filter(Boolean) : [];
        dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_6__/* .fetchCakeVaultUserData */ .x$)({
            account
        }));
        const [userInfo, amounts, isQualifiedNFT, isQualifiedPoints, basicSchedule, unlimitedSchedule, basicReleasableAmount, unlimitedReleasableAmount, ] = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
            abi: config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_5__,
            calls: [
                ...ifoCalls,
                ...ifov3Calls
            ],
            options: {
                requireSuccess: false
            }
        });
        setState((prevState)=>({
                ...prevState,
                isInitialized: true,
                poolBasic: {
                    ...prevState.poolBasic,
                    amountTokenCommittedInLP: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userInfo[0][0].toString()),
                    offeringAmountInToken: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amounts[0][0][0].toString()),
                    refundingAmountInLP: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amounts[0][0][1].toString()),
                    taxAmountInLP: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amounts[0][0][2].toString()),
                    hasClaimed: userInfo[1][0],
                    isQualifiedNFT: isQualifiedNFT ? isQualifiedNFT[0] : false,
                    isQualifiedPoints: isQualifiedPoints ? isQualifiedPoints[0] : false,
                    vestingReleased: basicSchedule ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(basicSchedule[0].released.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
                    vestingAmountTotal: basicSchedule ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(basicSchedule[0].amountTotal.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
                    isVestingInitialized: basicSchedule ? basicSchedule[0].isVestingInitialized : false,
                    vestingId: basicId ? basicId.toString() : "0",
                    vestingComputeReleasableAmount: basicReleasableAmount ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(basicReleasableAmount.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW
                },
                poolUnlimited: {
                    ...prevState.poolUnlimited,
                    amountTokenCommittedInLP: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userInfo[0][1].toString()),
                    offeringAmountInToken: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amounts[0][1][0].toString()),
                    refundingAmountInLP: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amounts[0][1][1].toString()),
                    taxAmountInLP: new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amounts[0][1][2].toString()),
                    hasClaimed: userInfo[1][1],
                    vestingReleased: unlimitedSchedule ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(unlimitedSchedule[0].released.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
                    vestingAmountTotal: unlimitedSchedule ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(unlimitedSchedule[0].amountTotal.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW,
                    isVestingInitialized: unlimitedSchedule ? unlimitedSchedule[0].isVestingInitialized : false,
                    vestingId: unlimitedId ? unlimitedId.toString() : "0",
                    vestingComputeReleasableAmount: unlimitedReleasableAmount ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(unlimitedReleasableAmount.toString()) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW
                }
            }));
    }, [
        account,
        address,
        dispatch,
        version
    ]);
    const resetIfoData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setState({
            ...initialState
        });
    }, []);
    const creditLeftWithNegative = credit.minus(state.poolUnlimited.amountTokenCommittedInLP);
    const ifoCredit = {
        credit,
        creditLeft: bignumber_js__WEBPACK_IMPORTED_MODULE_2___default().maximum(_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW, creditLeftWithNegative)
    };
    return {
        ...state,
        allowance,
        contract,
        setPendingTx,
        setIsClaimed,
        fetchIfoData,
        resetIfoData,
        ifoCredit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetWalletIfoData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ IfoPageLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69866);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52634);
/* harmony import */ var _contexts_IfoContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _components_Hero__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _components_Hero__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const IfoPageLayout = ({ children  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isExact = router.route === "/ifo";
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFetchIfo */ .FM)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_contexts_IfoContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* .PageMeta */ .V, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                items: [
                    {
                        label: t("Latest"),
                        href: "/ifo"
                    },
                    {
                        label: t("Finished"),
                        href: "/ifo/history"
                    }, 
                ],
                activeItem: isExact ? "/ifo" : "/ifo/history"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 37424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-5ed8a823-0"
})`
  border-top: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
CardFooter.defaultProps = {
    p: "24px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardFooter);


/***/ }),

/***/ 27387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97131);


const TokenImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cc5dea0d-0"
})`
  &:before {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 7;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenImage);


/***/ }),

/***/ 83548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Image_TokenPairImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Image/types.ts
const variants = {
    DEFAULT: "default",
    INVERTED: "inverted"
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Image/TokenImage.tsx
var TokenImage = __webpack_require__(27387);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Image/styles.tsx




const StyledPrimaryImage = external_styled_components_default()(TokenImage/* default */.Z).withConfig({
    componentId: "sc-d928f27a-0"
})`
  position: absolute;
  width: ${({ variant  })=>variant === variants.DEFAULT ? "92%" : "82%"}; // 92, 82 are arbitrary numbers to fit the variant

  ${(0,external_styled_system_.variant)({
    variants: {
        [variants.DEFAULT]: {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5
        },
        [variants.INVERTED]: {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6
        }
    }
})}
`;
const StyledSecondaryImage = external_styled_components_default()(TokenImage/* default */.Z).withConfig({
    componentId: "sc-d928f27a-1"
})`
  position: absolute;
  width: 50%;

  ${(0,external_styled_system_.variant)({
    variants: {
        [variants.DEFAULT]: {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6
        },
        [variants.INVERTED]: {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5
        }
    }
})}
`;

// EXTERNAL MODULE: ../../packages/uikit/src/components/Image/Wrapper.tsx
var Wrapper = __webpack_require__(58457);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Image/TokenPairImage.tsx





const TokenPairImage = ({ primarySrc , secondarySrc , width , height , variant =variants.DEFAULT , primaryImageProps ={} , secondaryImageProps ={} , ...props })=>{
    const secondaryImageSize = Math.floor(width / 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
        position: "relative",
        width: width,
        height: height,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledPrimaryImage, {
                variant: variant,
                src: primarySrc,
                width: width,
                height: height,
                ...primaryImageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledSecondaryImage, {
                variant: variant,
                src: secondarySrc,
                width: secondaryImageSize,
                height: secondaryImageSize,
                ...secondaryImageProps
            })
        ]
    });
};
/* harmony default export */ const Image_TokenPairImage = (TokenPairImage);


/***/ }),

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

/***/ 63799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__]);
_Box__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FlexGap = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8934bb38-0"
})`
  gap: ${({ gap  })=>gap};
  row-gap: ${({ rowGap  })=>rowGap};
  column-gap: ${({ columnGap  })=>columnGap};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexGap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Progress_Progress)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Progress/StyledProgress.tsx + 1 modules
var StyledProgress = __webpack_require__(60609);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/ProgressBunnyWrapper.tsx

const ProgressBunnyWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a698ef92-0"
})`
  display: flex;
  z-index: 2;
  top: -65%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: left 200ms ease-out;
`;
/* harmony default export */ const Progress_ProgressBunnyWrapper = (ProgressBunnyWrapper);

// EXTERNAL MODULE: ../../packages/uikit/src/components/Svg/Svg.tsx
var Svg = __webpack_require__(44259);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Svg/Icons/ProgressBunny.tsx



const Icon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Svg/* default */.Z, {
        viewBox: "0 0 34 38",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "8.83594",
                width: "5.30132",
                height: "17.3191",
                rx: "2.65066",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "19.4385",
                width: "5.30132",
                height: "17.3191",
                rx: "2.65066",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "12.3696",
                cy: "19.9172",
                rx: "1.76711",
                ry: "2.59786",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "21.2056",
                cy: "19.9172",
                rx: "1.76711",
                ry: "2.59786",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const ProgressBunny = (Icon);

// EXTERNAL MODULE: ../../packages/uikit/src/components/Progress/types.ts
var types = __webpack_require__(78649);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/Progress.tsx






const stepGuard = (step)=>{
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
const Progress = ({ variant =types/* variants.ROUND */.o.ROUND , scale =types/* scales.MD */.Q.MD , primaryStep =0 , secondaryStep =null , showProgressBunny =false , useDark =true , children ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledProgress/* default */.Z, {
        $useDark: useDark,
        variant: variant,
        scale: scale,
        children: children || /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                showProgressBunny && /*#__PURE__*/ jsx_runtime_.jsx(Progress_ProgressBunnyWrapper, {
                    style: {
                        left: `${stepGuard(primaryStep)}%`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProgressBunny, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledProgress/* Bar */.$, {
                    $useDark: useDark,
                    primary: true,
                    style: {
                        width: `${stepGuard(primaryStep)}%`
                    }
                }),
                secondaryStep ? /*#__PURE__*/ jsx_runtime_.jsx(StyledProgress/* Bar */.$, {
                    $useDark: useDark,
                    style: {
                        width: `${stepGuard(secondaryStep)}%`
                    }
                }) : null
            ]
        })
    });
};
/* harmony default export */ const Progress_Progress = (Progress);


/***/ }),

/***/ 60609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Bar),
  "Z": () => (/* binding */ Progress_StyledProgress)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
// EXTERNAL MODULE: ../../packages/uikit/src/theme/colors.ts
var colors = __webpack_require__(84859);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Progress/types.ts
var types = __webpack_require__(78649);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/themes.ts

const styleVariants = {
    [types/* variants.ROUND */.o.ROUND]: {
        borderRadius: "32px"
    },
    [types/* variants.FLAT */.o.FLAT]: {
        borderRadius: 0
    }
};
const styleScales = {
    [types/* scales.MD */.Q.MD]: {
        height: "16px"
    },
    [types/* scales.SM */.Q.SM]: {
        height: "8px"
    }
};
/* harmony default export */ const themes = ((/* unused pure expression or super */ null && (styleVariants)));

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/StyledProgress.tsx





const Bar = external_styled_components_default().div.withConfig({
    componentId: "sc-347a4242-0"
})`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme , $useDark , primary , $background  })=>{
    if ($background) return $background;
    if ($useDark) return primary ? theme.colors.secondary : `${theme.colors.secondary80}`;
    return primary ? colors/* lightColors.secondary */.C.secondary : `${colors/* lightColors.secondary80 */.C.secondary80}`;
}};
  height: 100%;
  transition: width 200ms ease;
`;
Bar.defaultProps = {
    primary: false
};
const StyledProgress = external_styled_components_default().div.withConfig({
    componentId: "sc-347a4242-1"
})`
  position: relative;
  background-color: ${({ theme , $useDark  })=>$useDark ? theme.colors.input : colors/* lightColors.input */.C.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  overflow: hidden;

  ${Bar} {
    border-top-left-radius: ${({ variant  })=>variant === types/* variants.FLAT */.o.FLAT ? "0" : "32px"};
    border-bottom-left-radius: ${({ variant  })=>variant === types/* variants.FLAT */.o.FLAT ? "0" : "32px"};
  }

  ${(0,external_styled_system_.variant)({
    variants: styleVariants
})}
  ${(0,external_styled_system_.variant)({
    prop: "scale",
    variants: styleScales
})}
  ${external_styled_system_.space}
`;
/* harmony default export */ const Progress_StyledProgress = (StyledProgress);


/***/ }),

/***/ 78649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ scales),
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
const variants = {
    ROUND: "round",
    FLAT: "flat"
};
const scales = {
    MD: "md",
    SM: "sm"
};


/***/ }),

/***/ 5438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44259);



const Icon = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 14.2619C9.69993 14.2619 7.57238 14.6197 5.98327 15.2327C5.19201 15.5379 4.48317 15.9258 3.95486 16.4076C3.42611 16.8898 3 17.544 3 18.3476C3 20.0992 4.33478 21.5622 6.07901 21.7223L6.21662 21.735C10.0641 22.0883 13.9359 22.0883 17.7834 21.735L17.921 21.7223C19.6652 21.5622 21 20.0992 21 18.3476C21 17.544 20.5739 16.8898 20.0451 16.4076C19.5168 15.9258 18.808 15.5379 18.0167 15.2327C16.4276 14.6197 14.3001 14.2619 12 14.2619ZM5 18.3476C5 18.2991 5.0216 18.1416 5.3025 17.8854C5.58383 17.6289 6.04656 17.3519 6.70302 17.0987C8.00934 16.5948 9.88179 16.2619 12 16.2619C14.1182 16.2619 15.9907 16.5948 17.297 17.0987C17.9534 17.3519 18.4162 17.6289 18.6975 17.8854C18.9784 18.1416 19 18.2991 19 18.3476C19 19.0655 18.453 19.6651 17.7381 19.7307L17.6005 19.7434C13.8747 20.0855 10.1253 20.0855 6.39952 19.7434L6.26191 19.7307C5.54705 19.6651 5 19.0655 5 18.3476Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.5 7.7619C17.5 10.7995 15.0376 13.2619 12 13.2619C8.96243 13.2619 6.5 10.7995 6.5 7.7619C6.5 4.72433 8.96243 2.2619 12 2.2619C15.0376 2.2619 17.5 4.72433 17.5 7.7619ZM15.5 7.7619C15.5 9.6949 13.933 11.2619 12 11.2619C10.067 11.2619 8.5 9.6949 8.5 7.7619C8.5 5.82891 10.067 4.2619 12 4.2619C13.933 4.2619 15.5 5.82891 15.5 7.7619Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 67013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44259);




const Icon = (props)=>{
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        viewBox: "0 0 72 72",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z",
                fill: primaryColor
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                id: "mask0",
                "mask-type": "alpha",
                maskUnits: "userSpaceOnUse",
                x: "3",
                y: "3",
                width: "66",
                height: "66",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z",
                    fill: "#C4C4C4"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                mask: "url(#mask0)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z",
                        fill: primaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z",
                        fill: primaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z",
                        fill: secondaryColor
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z",
                fill: secondaryColor
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 20201:
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
            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 93661:
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
            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 53175:
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
            d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 67854:
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 198 199",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z",
                fill: "#633001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z",
                fill: "#FEDC90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "eye",
                d: "M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z",
                fill: "#633001"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 87514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74486);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44259);




const Icon = (props)=>{
    const id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("svg");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        viewBox: "0 0 48 48",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: `url(#${id})`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z",
                        fill: "#FFAF00"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z",
                        fill: "#EB8C00"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z",
                        fill: "#FFAF00"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z",
                        fill: "#FFD800"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z",
                        fill: "#FFE971"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z",
                        fill: "#EB8C00"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z",
                        fill: "#FFD800"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z",
                        fill: "#FFE971"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z",
                        fill: "#FFC700"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z",
                        fill: "#E7E8E8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z",
                        fill: "#E7E8E8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z",
                        fill: "#452A7A"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z",
                        fill: "#452A7A"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z",
                        fill: "#452A7A"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z",
                        fill: "#EB8C00"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z",
                        fill: "#FFC700"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z",
                        fill: "#FFD800"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z",
                        fill: "#FFE971"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: id,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "48",
                        height: "48",
                        fill: "white",
                        transform: "matrix(-1 0 0 1 48 0)"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 13128:
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
        viewBox: "0 0 48 48",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 22573:
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
            d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 45698:
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
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M10 0C4.478 0 0 4.478 0 9.99 0 15.511 4.478 20 10 20s10-4.488 10-10.01C20 4.477 15.522 0 10 0zm4.925 6.28c-.064.927-1.78 7.856-1.78 7.856s-.107.406-.48.416a.644.644 0 01-.49-.192c-.395-.33-1.29-.97-2.132-1.556a.953.953 0 01-.107.096c-.192.17-.48.416-.789.714a10.7 10.7 0 00-.373.352l-.01.01a2.214 2.214 0 01-.193.171c-.415.341-.458.053-.458-.096l.224-2.441v-.021l.01-.022c.011-.032.033-.043.033-.043s4.36-3.88 4.477-4.296c.01-.021-.021-.042-.074-.021-.288.096-5.31 3.273-5.864 3.625-.032.02-.128.01-.128.01l-2.441-.8s-.288-.117-.192-.383c.021-.053.053-.107.17-.181.544-.384 10-3.785 10-3.785s.267-.085.427-.032c.074.032.117.064.16.17.01.043.021.128.021.224 0 .054-.01.118-.01.224z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 59235:
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
        viewBox: "0 0 18 15",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=2605.js.map