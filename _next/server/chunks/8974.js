"use strict";
exports.id = 8974;
exports.ids = [8974];
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

/***/ 76306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72744);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const TeamAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
    componentId: "sc-c5c8ef7c-0"
})`
  border: 1px solid ${({ theme  })=>theme.card.background};
  border-radius: 50%;
  bottom: 0px;
  position: absolute;
  right: 0px;
  min-width: 20px;
  min-height: 20px;
  width: 37.5%;
  height: 37.5%;
  z-index: 5;

  ${({ theme  })=>theme.mediaQueries.sm} {
    border-width: 2px;
  }
`;
const AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c5c8ef7c-1"
})`
  background: url('${({ bg  })=>bg}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 100%;
  height: 100%;

  & > img {
    border-radius: 50%;
  }
`;
// TODO: replace with no profile avatar icon
const AvatarInactive = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c5c8ef7c-2"
})`
  width: 100%;
  height: 100%;
`;
const ProfileAvatarWithTeam = ({ profile  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AvatarWrapper, {
        bg: profile.nft?.image.thumbnail,
        children: [
            !profile.isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AvatarInactive, {}),
            profile.team && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TeamAvatar, {
                src: `/images/teams/${profile.team.images.alt}`,
                alt: profile.team.name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAvatarWithTeam);

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

/***/ 68298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NoNftsImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9689af5c-0"
})`
  background: url('/images/nfts/no-profile-md.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 96px;
  height: 96px;

  & > img {
    border-radius: 50%;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoNftsImage);


/***/ }),

/***/ 69893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useNftsForAddress),
/* harmony export */   "n": () => (/* binding */ useCollectionsNftsForAddress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93304);
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88587);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46737);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15941);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6429);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30433);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65726);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_5__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_7__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_5__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useNftsForAddress = (account, profile, isProfileFetching)=>{
    const { data: collections  } = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useGetCollections */ .t8)();
    const { nfts , isLoading , refresh  } = useCollectionsNftsForAddress(account, profile, isProfileFetching, collections);
    return {
        nfts,
        isLoading,
        refresh
    };
};
const useCollectionsNftsForAddress = (account, profile, isProfileFetching, collections)=>{
    const resetLaggyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const previousAccount = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_8__/* .usePreviousValue */ .zP)(account);
    if (resetLaggyRef.current && previousAccount !== account) {
        resetLaggyRef.current();
    }
    const hasProfileNft = profile?.tokenId;
    const profileNftTokenId = profile?.tokenId?.toString();
    const profileNftCollectionAddress = profile?.collectionAddress;
    const profileNftWithCollectionAddress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (hasProfileNft) {
            return {
                tokenId: profileNftTokenId,
                collectionAddress: profileNftCollectionAddress,
                nftLocation: state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .NftLocation.PROFILE */ .Fb.PROFILE
            };
        }
        return null;
    }, [
        profileNftTokenId,
        profileNftCollectionAddress,
        hasProfileNft
    ]);
    // @ts-ignore
    const { status , data , mutate , resetLaggy  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(!isProfileFetching && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(collections) && (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(account) ? [
        account,
        "userNfts"
    ] : null, async ()=>(0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCompleteAccountNftData */ .A8)(account, collections, profileNftWithCollectionAddress), {
        use: [
            hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_7__/* .laggyMiddleware */ .XS
        ]
    });
    resetLaggyRef.current = resetLaggy;
    return {
        nfts: data ?? [],
        isLoading: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_6__/* .FetchStatus.Fetched */ .iF.Fetched,
        refresh: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78950);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46775);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88886);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ApproveCakePage = ({ goToChange , onDismiss  })=>{
    const { profile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProfile */ .Un)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { fetchWithCatchTxError , loading: isApproving  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { costs: { numberCakeToUpdate , numberCakeToReactivate  } ,  } = (0,views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { signer: cakeContract  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useCake */ .kL)();
    if (!profile) {
        return null;
    }
    const cost = profile.isActive ? numberCakeToUpdate : numberCakeToReactivate;
    const handleApprove = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return cakeContract.approve((0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(), cost.mul(2).toString());
        });
        if (receipt?.status) {
            goToChange();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "24px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: profile.isActive ? t("Cost to update:") : t("Cost to reactivate:")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatBigNumber */ .dp)(cost),
                            " CAKE"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                disabled: isApproving,
                isLoading: isApproving,
                endIcon: isApproving ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    spin: true,
                    color: "currentColor"
                }) : null,
                width: "100%",
                mb: "8px",
                onClick: handleApprove,
                children: t("Enable")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                variant: "text",
                width: "100%",
                onClick: onDismiss,
                disabled: isApproving,
                children: t("Close Window")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApproveCakePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97344);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36576);
/* harmony import */ var hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64850);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80361);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74860);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93304);
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88587);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46775);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70627);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12895);
/* harmony import */ var views_ProfileCreation_SelectionCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81359);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Nft_market_hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_3__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_9__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_11__, views_ProfileCreation_SelectionCard__WEBPACK_IMPORTED_MODULE_14__, _Nft_market_hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_3__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_9__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_11__, views_ProfileCreation_SelectionCard__WEBPACK_IMPORTED_MODULE_14__, _Nft_market_hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const ChangeProfilePicPage = ({ onDismiss , onSuccess ,  })=>{
    const { 0: selectedNft , 1: setSelectedNft  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
        tokenId: null,
        collectionAddress: null
    });
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_15__.useSigner)();
    const { isLoading: isProfileLoading , profile , refresh: refreshProfile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useProfile */ .Un)();
    const { nfts , isLoading  } = (0,_Nft_market_hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_16__/* .useNftsForAddress */ .L)(account, profile, isProfileLoading);
    const profileContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useProfileContract */ .wr)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .useToast */ .p)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_6__/* .useCallWithMarketGasPrice */ .r)();
    const nftsInWallet = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>nfts.filter((nft)=>nft.location === state_nftMarket_types__WEBPACK_IMPORTED_MODULE_10__/* .NftLocation.WALLET */ .Fb.WALLET), [
        nfts
    ]);
    const { data  } = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useApprovalNfts */ .mN)(nftsInWallet);
    const isAlreadyApproved = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>{
        return data ? !!data[selectedNft.tokenId] : false;
    }, [
        data,
        selectedNft.tokenId
    ]);
    const { isApproving , isApproved , isConfirmed , isConfirming , handleApprove , handleConfirm  } = (0,hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        onApprove: ()=>{
            const contract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_13__/* .getErc721Contract */ .vE)(selectedNft.collectionAddress, signer);
            return callWithMarketGasPrice(contract, "approve", [
                (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_12__/* .getPancakeProfileAddress */ .Re)(),
                selectedNft.tokenId
            ]);
        },
        onConfirm: ()=>{
            if (!profile.isActive) {
                return callWithMarketGasPrice(profileContract, "reactivateProfile", [
                    selectedNft.collectionAddress,
                    selectedNft.tokenId, 
                ]);
            }
            return callWithMarketGasPrice(profileContract, "updateProfile", [
                selectedNft.collectionAddress,
                selectedNft.tokenId, 
            ]);
        },
        onSuccess: async ({ receipt  })=>{
            // Re-fetch profile
            refreshProfile();
            toastSuccess(t("Profile Updated!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
            onSuccess?.();
            onDismiss?.();
        }
    });
    const alreadyApproved = isApproved || isAlreadyApproved;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                as: "p",
                color: "textSubtle",
                mb: "24px",
                children: t("Choose a new Collectible to use as your profile pic.")
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                width: "100%",
                height: "80px",
                mb: "16px"
            }) : nftsInWallet.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                maxHeight: "300px",
                overflowY: "scroll",
                children: nftsInWallet.map((walletNft)=>{
                    const handleChange = ()=>{
                        setSelectedNft({
                            tokenId: walletNft.tokenId,
                            collectionAddress: walletNft.collectionAddress
                        });
                    };
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ProfileCreation_SelectionCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        name: "profilePicture",
                        value: walletNft.tokenId,
                        image: walletNft.image.thumbnail,
                        isChecked: walletNft.tokenId === selectedNft.tokenId,
                        onChange: handleChange,
                        disabled: isApproving || isConfirming || isConfirmed,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            bold: true,
                            children: walletNft.name
                        })
                    }, `${walletNft.collectionAddress}#${walletNft.tokenId}`);
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        as: "p",
                        color: "textSubtle",
                        mb: "16px",
                        children: t("Sorry! You don’t have any eligible Collectibles in your wallet to use!")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        as: "p",
                        color: "textSubtle",
                        mb: "24px",
                        children: t("Make sure you have a Pancake Collectible in your wallet and try again!")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ApproveConfirmButtons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                isApproveDisabled: isConfirmed || isConfirming || alreadyApproved || selectedNft.tokenId === null,
                isApproving: isApproving,
                isConfirmDisabled: !alreadyApproved || isConfirmed || selectedNft.tokenId === null,
                isConfirming: isConfirming,
                onApprove: handleApprove,
                onConfirm: handleConfirm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                mt: "8px",
                variant: "text",
                width: "100%",
                onClick: onDismiss,
                disabled: isApproving || isConfirming,
                children: t("Close Window")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeProfilePicPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88886);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46775);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74860);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80361);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78950);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36576);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_3__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_8__, components_Toast__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_3__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_8__, components_Toast__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PauseProfilePage = ({ onDismiss , onSuccess  })=>{
    const { 0: isAcknowledged , 1: setIsAcknowledged  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { profile , refresh: refreshProfile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProfile */ .Un)();
    const { costs: { numberCakeToReactivate  } ,  } = (0,views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const pancakeProfileContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useProfileContract */ .wr)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_7__/* .useCallWithMarketGasPrice */ .r)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: isConfirming  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const handleChange = ()=>setIsAcknowledged(!isAcknowledged);
    const handleDeactivateProfile = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return callWithMarketGasPrice(pancakeProfileContract, "pauseProfile");
        });
        if (receipt?.status) {
            // Re-fetch profile
            refreshProfile();
            toastSuccess(t("Profile Paused!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_9__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
            onSuccess?.();
            onDismiss?.();
        }
    };
    if (!profile) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                as: "p",
                color: "failure",
                mb: "24px",
                children: t("This will suspend your profile and send your Collectible back to your wallet")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                as: "p",
                color: "textSubtle",
                mb: "24px",
                children: t("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                as: "p",
                color: "textSubtle",
                mb: "24px",
                children: t("Cost to reactivate in the future: %cost% CAKE", {
                    cost: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatBigNumber */ .dp)(numberCakeToReactivate)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "acknowledgement",
                style: {
                    cursor: "pointer",
                    display: "block",
                    marginBottom: "24px"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            id: "acknowledgement",
                            checked: isAcknowledged,
                            onChange: handleChange,
                            scale: "sm"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            ml: "8px",
                            children: t("I understand")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                width: "100%",
                isLoading: isConfirming,
                endIcon: isConfirming ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    spin: true,
                    color: "currentColor"
                }) : null,
                disabled: !isAcknowledged || isConfirming,
                onClick: handleDeactivateProfile,
                mb: "8px",
                children: t("Confirm")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "text",
                width: "100%",
                onClick: onDismiss,
                children: t("Close Window")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseProfilePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13249:
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
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55817);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74860);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15318);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24953);
/* harmony import */ var views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88886);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6429);
/* harmony import */ var utils_requiresApproval__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63103);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46775);
/* harmony import */ var components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__, views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_9__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_12__, components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__, views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_9__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_12__, components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const DangerOutline = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).attrs({
    variant: "secondary"
}).withConfig({
    componentId: "sc-89c4031b-0"
})`
  border-color: ${({ theme  })=>theme.colors.failure};
  color: ${({ theme  })=>theme.colors.failure};
  margin-bottom: 24px;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    border-color: ${({ theme  })=>theme.colors.failure};
    opacity: 0.8;
  }
`;
const AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-89c4031b-1"
})`
  height: 64px;
  width: 64px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    height: 128px;
    width: 128px;
  }
`;
const StartPage = ({ goToApprove , goToChange , goToRemove  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { reader: cakeContract  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useCake */ .kL)();
    const { profile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useProfile */ .Un)();
    const { balance: cakeBalance , fetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__/* .useGetCakeBalance */ .Nn)();
    const { costs: { numberCakeToUpdate , numberCakeToReactivate  } , isLoading: isProfileCostsLoading ,  } = (0,views_Profile_hooks_useGetProfileCosts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { 0: needsApproval , 1: setNeedsApproval  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const minimumCakeRequired = profile?.isActive ? numberCakeToUpdate : numberCakeToReactivate;
    const hasMinimumCakeRequired = fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_10__/* .FetchStatus.Fetched */ .iF.Fetched && cakeBalance.gte(minimumCakeRequired);
    /**
   * Check if the wallet has the required CAKE allowance to change their profile pic or reactivate
   * If they don't, we send them to the approval screen first
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const checkApprovalStatus = async ()=>{
            const approvalNeeded = await (0,utils_requiresApproval__WEBPACK_IMPORTED_MODULE_11__/* .requiresApproval */ .S)(cakeContract, account, (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(), minimumCakeRequired);
            setNeedsApproval(approvalNeeded);
        };
        if (account && !isProfileCostsLoading) {
            checkApprovalStatus();
        }
    }, [
        account,
        minimumCakeRequired,
        setNeedsApproval,
        cakeContract,
        isProfileCostsLoading
    ]);
    if (!profile) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AvatarWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    profile: profile
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                alignItems: "center",
                style: {
                    height: "48px"
                },
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    as: "p",
                    color: "failure",
                    children: !isProfileCostsLoading && !hasMinimumCakeRequired && t("%minimum% CAKE required to change profile pic", {
                        minimum: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatBigNumber */ .dp)(minimumCakeRequired)
                    })
                })
            }),
            profile.isActive ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        variant: "warning",
                        mb: "16px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .MessageText */ .Y, {
                            children: t("Before editing your profile, please make sure you've claimed all the unspent CAKE from previous IFOs!")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        width: "100%",
                        mb: "8px",
                        onClick: needsApproval === true ? goToApprove : goToChange,
                        disabled: isProfileCostsLoading || !hasMinimumCakeRequired || needsApproval === null,
                        children: t("Change Profile Pic")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DangerOutline, {
                        width: "100%",
                        onClick: goToRemove,
                        children: t("Remove Profile Pic")
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                width: "100%",
                mb: "8px",
                onClick: needsApproval === true ? goToApprove : goToChange,
                disabled: isProfileCostsLoading || !hasMinimumCakeRequired || needsApproval === null,
                children: t("Reactivate Profile")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19757);
/* harmony import */ var _StartView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13249);
/* harmony import */ var _PauseProfileView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71455);
/* harmony import */ var _ChangeProfilePicView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32985);
/* harmony import */ var _ApproveCakeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StartView__WEBPACK_IMPORTED_MODULE_3__, _PauseProfileView__WEBPACK_IMPORTED_MODULE_4__, _ChangeProfilePicView__WEBPACK_IMPORTED_MODULE_5__, _ApproveCakeView__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_StartView__WEBPACK_IMPORTED_MODULE_3__, _PauseProfileView__WEBPACK_IMPORTED_MODULE_4__, _ChangeProfilePicView__WEBPACK_IMPORTED_MODULE_5__, _ApproveCakeView__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const viewTitle = (t, currentView)=>{
    switch(currentView){
        case _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.START */ .k.START:
            return t("Edit Profile");
        case _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.CHANGE */ .k.CHANGE:
            return t("Change Profile Pic");
        case _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.REMOVE */ .k.REMOVE:
            return t("Remove Profile Pic");
        case _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.APPROVE */ .k.APPROVE:
            return t("Enable CAKE");
        default:
            return "";
    }
};
const EditProfileModal = ({ onDismiss , onSuccess  })=>{
    const { currentView , goToChange , goToRemove , goToApprove , goPrevious  } = (0,_reducer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const isStartView = currentView === _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.START */ .k.START;
    const handleBack = isStartView ? null : ()=>goPrevious();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        title: viewTitle(t, currentView),
        onBack: handleBack,
        onDismiss: onDismiss,
        hideCloseButton: !isStartView,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                maxWidth: "400px"
            },
            children: [
                currentView === _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.START */ .k.START && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StartView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    goToApprove: goToApprove,
                    goToChange: goToChange,
                    goToRemove: goToRemove,
                    onDismiss: onDismiss
                }),
                currentView === _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.REMOVE */ .k.REMOVE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PauseProfileView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    onDismiss: onDismiss,
                    onSuccess: onSuccess
                }),
                currentView === _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.CHANGE */ .k.CHANGE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChangeProfilePicView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    onDismiss: onDismiss,
                    onSuccess: onSuccess
                }),
                currentView === _reducer__WEBPACK_IMPORTED_MODULE_2__/* .Views.APPROVE */ .k.APPROVE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ApproveCakeView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    goToChange: goToChange,
                    onDismiss: onDismiss
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfileModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ Views)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Views;
(function(Views) {
    Views["START"] = "start";
    Views["CHANGE"] = "change";
    Views["REMOVE"] = "remove";
    Views["APPROVE"] = "approve";
})(Views || (Views = {}));
const reducer = (state, action)=>{
    switch(action.type){
        case "set_view":
            return {
                ...state,
                currentView: action.view,
                previousView: state.currentView
            };
        case "go_previous":
            return {
                ...state,
                currentView: state.previousView,
                previousView: state.currentView
            };
        default:
            return state;
    }
};
const useEditProfile = ()=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, {
        currentView: Views.START,
        previousView: null
    });
    const goToStart = ()=>dispatch({
            type: "set_view",
            view: Views.START
        });
    const goToChange = ()=>dispatch({
            type: "set_view",
            view: Views.CHANGE
        });
    const goToRemove = ()=>dispatch({
            type: "set_view",
            view: Views.REMOVE
        });
    const goToApprove = ()=>dispatch({
            type: "set_view",
            view: Views.APPROVE
        });
    const goPrevious = ()=>dispatch({
            type: "go_previous"
        });
    return {
        ...state,
        goToStart,
        goToChange,
        goToRemove,
        goToApprove,
        goPrevious
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditProfile);


/***/ }),

/***/ 88886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25152);
/* harmony import */ var config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92335);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91397);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useGetProfileCosts = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { 0: costs , 1: setCosts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        numberCakeToReactivate: _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero,
        numberCakeToRegister: _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero,
        numberCakeToUpdate: _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero
    });
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .p)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchCosts = async ()=>{
            try {
                const calls = [
                    "numberCakeToReactivate",
                    "numberCakeToRegister",
                    "numberCakeToUpdate"
                ].map((method)=>({
                        address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(),
                        name: method
                    }));
                const [[numberCakeToReactivate], [numberCakeToRegister], [numberCakeToUpdate]] = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_3__/* .multicallv2 */ .v)({
                    abi: config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_4__,
                    calls
                });
                setCosts({
                    numberCakeToReactivate,
                    numberCakeToRegister,
                    numberCakeToUpdate
                });
                setIsLoading(false);
            } catch (error) {
                toastError(t("Error"), t("Could not retrieve CAKE costs for profile"));
            }
        };
        fetchCosts();
    }, [
        setCosts,
        toastError,
        t
    ]);
    return {
        costs,
        isLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetProfileCosts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
    componentId: "sc-f89ddf15-0"
})`
  cursor: ${({ isDisabled  })=>isDisabled ? "not-allowed" : "pointer"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ isDisabled  })=>isDisabled ? "0.6" : "1"};
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f89ddf15-1"
})`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 80px;
  padding: 8px 16px;
`;
const Children = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f89ddf15-2"
})`
  margin-left: 16px;
`;
const StyledBackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f89ddf15-3"
})`
  align-self: stretch;
  background-image: url('${({ src  })=>src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex: none;
  width: 80px;
`;
const SelectionCard = ({ name , value , isChecked =false , image , onChange , disabled , children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        isSuccess: isChecked,
        isDisabled: disabled,
        mb: "16px",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Label, {
            isDisabled: disabled,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Body, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            name: name,
                            checked: isChecked,
                            value: value,
                            onChange: (e)=>onChange(e.target.value),
                            disabled: disabled,
                            style: {
                                flex: "none"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Children, {
                            children: children
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBackgroundImage, {
                    src: image
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/types.ts
const scales = {
    SM: "sm",
    MD: "md"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/Checkbox.tsx


const getScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
const Checkbox = external_styled_components_default().input.attrs({
    type: "checkbox"
}).withConfig({
    componentId: "sc-11bd21f1-0"
})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:checked {
    background-color: ${({ theme  })=>theme.colors.success};
    &:after {
      border-color: white;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
Checkbox.defaultProps = {
    scale: scales.MD
};
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);


/***/ }),

/***/ 55817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ MessageText),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84507);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24674);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61179);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_9__]);
_Box__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MessageContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    variant: "success"
});
const Icons = {
    warning: _Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    danger: _Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    success: _Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
};
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-462695fe-0"
})`
  background-color: gray;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__.space}
  ${(0,styled_system__WEBPACK_IMPORTED_MODULE_3__.variant)({
    variants: _theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
})}
`;
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-462695fe-1"
})`
  display: flex;
`;
const colors = {
    // these color names should be place in the theme once the palette is finalized
    warning: "#D67E0A",
    success: "#129E7D",
    danger: "failure"
};
const MessageText = ({ children , ...props })=>{
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MessageContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        fontSize: "14px",
        color: colors[ctx?.variant],
        ...props,
        children: children
    });
};
const Message = ({ children , variant , icon , action , actionInline , ...props })=>{
    const Icon = Icons[variant];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageContext.Provider, {
        value: {
            variant
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
            variant: variant,
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Flex, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            mr: "12px",
                            children: icon ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                color: _theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[variant].borderColor,
                                width: "24px"
                            })
                        }),
                        children,
                        actionInline && action
                    ]
                }),
                !actionInline && action
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const variants = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning"
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure"
    },
    success: {
        background: "rgba(49, 208, 170, 0.1)",
        borderColor: "success"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variants);


/***/ }),

/***/ 61179:
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
            d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


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

/***/ 24674:
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
            d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72744:
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
        viewBox: "0 0 32 32",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",
                fill: primaryColor
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                id: "A",
                "mask-type": "alpha",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",
                    fill: "#c4c4c4"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                mask: "url(#A)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        cx: "12.308",
                        cy: "14.846",
                        rx: "1.026",
                        ry: "1.538",
                        fill: primaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        cx: "19.385",
                        cy: "14.846",
                        rx: "1.026",
                        ry: "1.538",
                        fill: primaryColor
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 84507:
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
            d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=8974.js.map