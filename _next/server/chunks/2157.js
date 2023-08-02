"use strict";
exports.id = 2157;
exports.ids = [2157,7854];
exports.modules = {

/***/ 10886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ChainLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77454);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42791);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const ChainLogo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ chainId , width =24 , height =24  })=>{
    if ((0,utils_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .isChainSupported */ .MR)(chainId)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            alt: `chain-${chainId}`,
            style: {
                maxHeight: `${height}px`
            },
            src: `/images/chains/${chainId}.png`,
            width: width,
            height: height,
            unoptimized: true
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        width: width,
        height: height
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1239);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20201);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41194);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12486);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36204);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var state_global_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18770);
/* harmony import */ var state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12238);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([state__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const TxnIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c50b9819-0"
})`
  align-items: center;
  flex: none;
  width: 24px;
`;
const Summary = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c50b9819-1"
})`
  flex: 1;
  padding: 0 8px;
`;
const TxnLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c50b9819-2"
})`
  cursor: pointer;
  align-items: center;
  color: ${({ theme  })=>theme.colors.text};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`;
const renderIcon = (txn)=>{
    const { receipt , nonBscFarm  } = txn;
    if (!txn.receipt || nonBscFarm?.status === state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__/* .FarmTransactionStatus.PENDING */ .np.PENDING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            spin: true,
            width: "24px"
        });
    }
    const isFarmStatusSuccess = nonBscFarm ? nonBscFarm.status === state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__/* .FarmTransactionStatus.SUCCESS */ .np.SUCCESS : true;
    return receipt?.status === 1 && isFarmStatusSuccess || typeof receipt?.status === "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        color: "success",
        width: "24px"
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "failure",
        width: "24px"
    });
};
const TransactionRow = ({ txn , chainId , type , onDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const onClickTransaction = ()=>{
        if (type === "non-bsc-farm") {
            onDismiss();
            dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_4__/* .pickFarmTransactionTx */ .CF)({
                tx: txn.hash,
                chainId
            }));
        } else {
            const url = (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .getBlockExploreLink */ .C)(txn.hash, "transaction", chainId);
            window.open(url, "_blank", "noopener noreferrer");
        }
    };
    if (!txn) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TxnLink, {
        onClick: onClickTransaction,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TxnIcon, {
                children: renderIcon(txn)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Summary, {
                children: txn.translatableSummary ? t(txn.translatableSummary.text, txn.translatableSummary.data) : txn.summary ?? txn.hash
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TxnIcon, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    width: "24px",
                    color: "primary"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82795);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16895);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5369);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15318);
/* harmony import */ var components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10886);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24671);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const COLORS = {
    ETH: "#627EEA",
    BNB: "#14151A"
};
const WalletInfo = ({ hasLowNativeBalance , onDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { account , chainId , chain  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const isBSC = chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC;
    const bnbBalance = (0,wagmi__WEBPACK_IMPORTED_MODULE_11__.useBalance)({
        addressOrName: account,
        chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC
    });
    const nativeBalance = (0,wagmi__WEBPACK_IMPORTED_MODULE_11__.useBalance)({
        addressOrName: account,
        enabled: !isBSC
    });
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { balance: cakeBalance , fetchStatus: cakeFetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__/* .useGetCakeBalance */ .Nn)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const handleLogout = ()=>{
        onDismiss?.();
        logout();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                color: "secondary",
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: "bold",
                mb: "8px",
                children: t("Your Address")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* .CopyAddress */ .g, {
                tooltipMessage: t("Copied"),
                account: account,
                mb: "24px"
            }),
            hasLowNativeBalance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "warning",
                mb: "24px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            fontWeight: "bold",
                            children: t("%currency% Balance Low", {
                                currency: native.symbol
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            as: "p",
                            children: t("You need %currency% for transaction fees.", {
                                currency: native.symbol
                            })
                        })
                    ]
                })
            }),
            !isBSC && chain && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                mb: "12px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                bg: COLORS.ETH,
                                borderRadius: "16px",
                                pl: "4px",
                                pr: "8px",
                                py: "2px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__/* .ChainLogo */ .E, {
                                        chainId: chain.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        color: "white",
                                        ml: "4px",
                                        children: chain.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBlockExploreLink */ .C)(account, "address", chainId),
                                children: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBlockExploreName */ .X0)(chainId)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: [
                                    native.symbol,
                                    " ",
                                    t("Balance")
                                ]
                            }),
                            !nativeBalance.isFetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                height: "22px",
                                width: "60px"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .formatBigNumber */ .dp)(nativeBalance.data.value, 6)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                mb: "24px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                bg: COLORS.BNB,
                                borderRadius: "16px",
                                pl: "4px",
                                pr: "8px",
                                py: "2px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__/* .ChainLogo */ .E, {
                                        chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        color: "white",
                                        ml: "4px",
                                        children: "BNB Smart Chain"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBlockExploreLink */ .C)(account, "address", _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC),
                                children: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBlockExploreName */ .X0)(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: [
                                    "BNB ",
                                    t("Balance")
                                ]
                            }),
                            !bnbBalance.isFetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                height: "22px",
                                width: "60px"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .formatBigNumber */ .dp)(bnbBalance.data.value, 6)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: t("CAKE Balance")
                            }),
                            cakeFetchStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                height: "22px",
                                width: "60px"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .formatBigNumber */ .dp)(cakeBalance, 3)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                variant: "secondary",
                width: "100%",
                onClick: handleLogout,
                children: t("Disconnect Wallet")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L9": () => (/* binding */ WalletView),
/* harmony export */   "Mc": () => (/* binding */ LOW_NATIVE_BALANCE),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63815);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74813);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60789);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WalletInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66959);
/* harmony import */ var _WalletTransactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66020);
/* harmony import */ var _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _WalletInfo__WEBPACK_IMPORTED_MODULE_7__, _WalletTransactions__WEBPACK_IMPORTED_MODULE_8__, _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _WalletInfo__WEBPACK_IMPORTED_MODULE_7__, _WalletTransactions__WEBPACK_IMPORTED_MODULE_8__, _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











var WalletView;
(function(WalletView) {
    WalletView[WalletView["WALLET_INFO"] = 0] = "WALLET_INFO";
    WalletView[WalletView["TRANSACTIONS"] = 1] = "TRANSACTIONS";
    WalletView[WalletView["WRONG_NETWORK"] = 2] = "WRONG_NETWORK";
})(WalletView || (WalletView = {}));
const LOW_NATIVE_BALANCE = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.parseUnits)("0.002", "ether");
const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalHeader */ .xB).withConfig({
    componentId: "sc-de24e5d6-0"
})`
  background: ${({ theme  })=>theme.colors.gradientBubblegum};
`;
const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-de24e5d6-1"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  padding: 16px 24px;
`;
const WalletModal = ({ initialView =WalletView.WALLET_INFO , onDismiss ,  })=>{
    const { 0: view , 1: setView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialView);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { data , isFetched  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useBalance)({
        addressOrName: account
    });
    const hasLowNativeBalance = isFetched && data && data.value.lte(LOW_NATIVE_BALANCE);
    const handleClick = (newIndex)=>{
        setView(newIndex);
    };
    const TabsComponent = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tabs, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                scale: "sm",
                variant: "subtle",
                onItemClick: handleClick,
                activeIndex: view,
                fullWidth: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: t("Wallet")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: t("Transactions")
                    })
                ]
            })
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalContainer */ .F0, {
        title: t("Welcome!"),
        $minWidth: "360px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalTitle */ .r6, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            children: t("Your Wallet")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        variant: "text",
                        onClick: onDismiss,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            width: "24px",
                            color: "text"
                        })
                    })
                ]
            }),
            view !== WalletView.WRONG_NETWORK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabsComponent, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalBody */ .fe, {
                p: "24px",
                width: "100%",
                children: [
                    view === WalletView.WALLET_INFO && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletInfo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        hasLowNativeBalance: hasLowNativeBalance,
                        switchView: handleClick,
                        onDismiss: onDismiss
                    }),
                    view === WalletView.TRANSACTIONS && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletTransactions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        onDismiss: onDismiss
                    }),
                    view === WalletView.WRONG_NETWORK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        onDismiss: onDismiss
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36204);
/* harmony import */ var state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52284);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12238);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TransactionRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55587);
/* harmony import */ var _utils_wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state__WEBPACK_IMPORTED_MODULE_2__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__, _TransactionRow__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([state__WEBPACK_IMPORTED_MODULE_2__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__, _TransactionRow__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TransactionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f56ba040-0"
})`
  max-height: 300px;
  overflow-y: auto;
`;
const WalletTransactions = ({ onDismiss  })=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const sortedTransactions = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAllSortedRecentTransactions */ .Fn)();
    const hasTransactions = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(sortedTransactions);
    const handleClearAll = ()=>{
        dispatch((0,state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__/* .clearAllTransactions */ .fY)());
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        minHeight: "120px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "24px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        children: t("Recent Transactions")
                    }),
                    hasTransactions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        scale: "sm",
                        onClick: handleClearAll,
                        variant: "text",
                        px: "0",
                        children: t("Clear all")
                    })
                ]
            }),
            hasTransactions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransactionsContainer, {
                children: Object.entries(sortedTransactions).map(([chainId, transactions])=>{
                    const chainIdNumber = Number(chainId);
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                mb: "4px",
                                children: _utils_wagmi__WEBPACK_IMPORTED_MODULE_8__/* .chains.find */ .p5.find((c)=>c.id === chainIdNumber)?.name ?? "Unknown network"
                            }),
                            Object.values(transactions).map((txn)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionRow__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    txn: txn,
                                    chainId: chainIdNumber,
                                    type: txn.type,
                                    onDismiss: onDismiss
                                }, txn.hash))
                        ]
                    }, chainId);
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                textAlign: "center",
                children: t("No recent transactions")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletTransactions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30419:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35643);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-76fe519d-0"
})`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`;
const WalletWrongNetwork = ({ onDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { switchNetworkAsync , canSwitch  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__/* .useSwitchNetwork */ .g)();
    const handleSwitchNetwork = async ()=>{
        await switchNetworkAsync(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.ChainId.BSC);
        onDismiss?.();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                mb: "24px",
                children: t("You’re connected to the wrong network.")
            }),
            canSwitch ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                onClick: handleSwitchNetwork,
                mb: "24px",
                children: t("Switch Network")
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                variant: "danger",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* .MessageText */ .Y, {
                    children: t("Unable to switch network. Please try it on your wallet")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                href: "https://docs.pancakeswap.finance/get-started/connection-guide",
                external: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    width: "100%",
                    variant: "secondary",
                    children: [
                        t("Learn How"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            color: "primary",
                            ml: "6px"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletWrongNetwork);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 20277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dm": () => (/* binding */ SUPPORT_ONLY_BSC),
/* harmony export */   "K": () => (/* binding */ SUPPORT_ZAP),
/* harmony export */   "RD": () => (/* binding */ SUPPORT_FARMS)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);

const SUPPORT_ONLY_BSC = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC
];
const SUPPORT_FARMS = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.GOERLI
];
const SUPPORT_ZAP = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET
];


/***/ }),

/***/ 35643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useSwitchNetwork),
/* harmony export */   "n": () => (/* binding */ useSwitchNetworkLocal)
/* harmony export */ });
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91397);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92151);
/* harmony import */ var config_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86930);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useSessionChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30914);
/* harmony import */ var _useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([config_wallet__WEBPACK_IMPORTED_MODULE_3__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, _useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([config_wallet__WEBPACK_IMPORTED_MODULE_3__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, _useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable consistent-return */ 








function useSwitchNetworkLocal() {
    const [, setSessionChainId] = (0,_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__/* .useSessionChainId */ .o)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((chainId)=>{
        setSessionChainId(chainId);
        (0,_pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("chainId", chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC ? null : chainId);
    }, [
        setSessionChainId
    ]);
}
function useSwitchNetwork() {
    const [loading, setLoading] = (0,_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__/* .useSwitchNetworkLoading */ .c)();
    const { switchNetworkAsync: _switchNetworkAsync , isLoading: _isLoading , switchNetwork: _switchNetwork , ...switchNetworkArgs } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSwitchNetwork)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* .useToast */ .p)();
    const { isConnected , connector  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();
    const switchNetworkLocal = useSwitchNetworkLocal();
    const isLoading = _isLoading || loading;
    const switchNetworkAsync = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (chainId)=>{
        if (isConnected && typeof _switchNetworkAsync === "function") {
            if (isLoading) return;
            setLoading(true);
            return _switchNetworkAsync(chainId).then((c)=>{
                // well token pocket
                if (window.ethereum?.isTokenPocket === true) {
                    switchNetworkLocal(chainId);
                    window.location.reload();
                }
                return c;
            }).catch(()=>{
                // TODO: review the error
                toastError(t("Error connecting, please retry and confirm in wallet!"));
            }).finally(()=>setLoading(false));
        }
        return new Promise(()=>{
            switchNetworkLocal(chainId);
        });
    }, [
        isConnected,
        _switchNetworkAsync,
        isLoading,
        setLoading,
        toastError,
        t,
        switchNetworkLocal
    ]);
    const switchNetwork = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((chainId)=>{
        if (isConnected && typeof _switchNetwork === "function") {
            return _switchNetwork(chainId);
        }
        return switchNetworkLocal(chainId);
    }, [
        _switchNetwork,
        isConnected,
        switchNetworkLocal
    ]);
    const canSwitch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>isConnected ? !!_switchNetworkAsync && connector.id !== config_wallet__WEBPACK_IMPORTED_MODULE_3__/* .ConnectorNames.WalletConnect */ .Mt.WalletConnect && !( false && // @ts-ignore // TODO: add type later
        (0)) : true, [
        _switchNetworkAsync,
        isConnected,
        connector
    ]);
    return {
        ...switchNetworkArgs,
        switchNetwork,
        switchNetworkAsync,
        isLoading,
        canSwitch
    };
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

/***/ 52284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fn": () => (/* binding */ useAllSortedRecentTransactions),
/* harmony export */   "UA": () => (/* binding */ useNonBscFarmPendingTransaction),
/* harmony export */   "VQ": () => (/* binding */ usePendingTransactions),
/* harmony export */   "h7": () => (/* binding */ useTransactionAdder),
/* harmony export */   "kf": () => (/* binding */ useAllTransactions),
/* harmony export */   "tm": () => (/* binding */ useAllChainTransactions),
/* harmony export */   "ub": () => (/* binding */ useIsTransactionPending),
/* harmony export */   "wB": () => (/* binding */ useHasPendingApproval)
/* harmony export */ });
/* unused harmony exports useAllActiveChainTransactions, isTransactionRecent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9941);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63385);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9270);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12238);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// helper that can take a ethers library transaction response and add it to the list of transactions
function useTransactionAdder() {
    const { chainId , account  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((response, { summary , translatableSummary , approval , claim , type , order , nonBscFarm  } = {})=>{
        if (!account) return;
        if (!chainId) return;
        const { hash  } = response;
        if (!hash) {
            throw Error("No transaction hash found.");
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__/* .addTransaction */ .dT)({
            hash,
            from: account,
            chainId,
            approval,
            summary,
            translatableSummary,
            claim,
            type,
            order,
            nonBscFarm
        }));
    }, [
        dispatch,
        chainId,
        account
    ]);
}
// returns all the transactions
function useAllTransactions() {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3React */ .Ge)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((s)=>s.transactions);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(state, (transactions)=>lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(transactions, (transactionDetails)=>transactionDetails.from.toLowerCase() === account?.toLowerCase()));
    }, [
        account,
        state
    ]);
}
function useAllSortedRecentTransactions() {
    const allTransactions = useAllTransactions();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return lodash_omitBy__WEBPACK_IMPORTED_MODULE_7___default()(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(allTransactions, (transactions)=>lodash_keyBy__WEBPACK_IMPORTED_MODULE_5___default()(lodash_orderBy__WEBPACK_IMPORTED_MODULE_6___default()(lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(transactions, (trxDetails)=>isTransactionRecent(trxDetails)), [
                "addedTime"
            ], "desc"), "hash")), (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()));
    }, [
        allTransactions
    ]);
}
// returns all the transactions for the current chain
function useAllActiveChainTransactions() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return useAllChainTransactions(chainId);
}
function useAllChainTransactions(chainId) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3React */ .Ge)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((s)=>s.transactions);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (chainId && state[chainId]) {
            return lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(state[chainId], (transactionDetails)=>transactionDetails.from.toLowerCase() === account?.toLowerCase());
        }
        return {};
    }, [
        account,
        chainId,
        state
    ]);
}
function useIsTransactionPending(transactionHash) {
    const transactions = useAllActiveChainTransactions();
    if (!transactionHash || !transactions[transactionHash]) return false;
    return !transactions[transactionHash].receipt;
}
/**
 * Returns whether a transaction happened in the last day (86400 seconds * 1000 milliseconds / second)
 * @param tx to check for recency
 */ function isTransactionRecent(tx) {
    return new Date().getTime() - tx.addedTime < 86400000;
}
// returns whether a token has a pending approval transaction
function useHasPendingApproval(tokenAddress, spender) {
    const allTransactions = useAllActiveChainTransactions();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>typeof tokenAddress === "string" && typeof spender === "string" && Object.keys(allTransactions).some((hash)=>{
            const tx = allTransactions[hash];
            if (!tx) return false;
            if (tx.receipt) {
                return false;
            }
            const { approval  } = tx;
            if (!approval) return false;
            return approval.spender === spender && approval.tokenAddress === tokenAddress && isTransactionRecent(tx);
        }), [
        allTransactions,
        spender,
        tokenAddress
    ]);
}
// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a, b) {
    return b.addedTime - a.addedTime;
}
function usePendingTransactions() {
    const allTransactions = useAllTransactions();
    const sortedRecentTransactions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const txs = Object.values(allTransactions).flatMap((trxObjects)=>Object.values(trxObjects));
        return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
    }, [
        allTransactions
    ]);
    const pending = sortedRecentTransactions.filter((tx)=>!tx.receipt || tx?.nonBscFarm?.status === _actions__WEBPACK_IMPORTED_MODULE_10__/* .FarmTransactionStatus.PENDING */ .np.PENDING).map((tx)=>tx.hash);
    const hasPendingTransactions = !!pending.length;
    const nonBscFarmPendingList = sortedRecentTransactions.filter((tx)=>pending.includes(tx.hash) && !!tx.nonBscFarm).map((tx)=>({
            txid: tx.hash,
            lpAddress: tx.nonBscFarm.lpAddress,
            type: tx.nonBscFarm.type
        }));
    return {
        hasPendingTransactions,
        nonBscFarmPendingList,
        pendingNumber: pending.length
    };
}
function useNonBscFarmPendingTransaction(lpAddress) {
    const { nonBscFarmPendingList  } = usePendingTransactions();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return nonBscFarmPendingList.filter((tx)=>tx.lpAddress.toLocaleLowerCase() === lpAddress.toLocaleLowerCase());
    }, [
        lpAddress,
        nonBscFarmPendingList
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 84196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ FarmsContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9778);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(41022);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(88618);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(59176);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(21836);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(78448);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(25717);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52993);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57268);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11496);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52908);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24953);
/* harmony import */ var utils_apr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27544);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var utils_latinise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93508);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72135);
/* harmony import */ var state_user_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15444);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74470);
/* harmony import */ var _components_FarmTable_FarmTable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41161);
/* harmony import */ var _components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(59709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_8__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_10__, hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__, state_user_hooks__WEBPACK_IMPORTED_MODULE_16__, components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_19__, _components_FarmTable_FarmTable__WEBPACK_IMPORTED_MODULE_20__, _components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_8__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_10__, hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__, state_user_hooks__WEBPACK_IMPORTED_MODULE_16__, components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_19__, _components_FarmTable_FarmTable__WEBPACK_IMPORTED_MODULE_20__, _components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-ae9a8673-0"
})`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`;
const FarmFlexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ae9a8673-1"
})`
  flex-wrap: wrap;
  ${({ theme  })=>theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
`;
const FarmH1 = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ae9a8673-2"
})`
  font-size: 32px;
  margin-bottom: 8px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    font-size: 64px;
    margin-bottom: 24px;
  }
`;
const FarmH2 = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ae9a8673-3"
})`
  font-size: 16px;
  margin-bottom: 8px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    font-size: 24px;
    margin-bottom: 18px;
  }
`;
const ToggleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-ae9a8673-4"
})`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z} {
    margin-left: 8px;
  }
`;
const LabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-ae9a8673-5"
})`
  > ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z} {
    font-size: 12px;
  }
`;
const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-ae9a8673-6"
})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`;
const ViewControls = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-ae9a8673-7"
})`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`;
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ae9a8673-8"
})`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`;
const FinishedTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ae9a8673-9"
})`
  padding-bottom: 32px;
  flex-direction: column;
  ${({ theme  })=>theme.mediaQueries.md} {
    flex-direction: row;
  }
`;
const FinishedTextLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ae9a8673-10"
})`
  font-weight: 400;
  white-space: nowrap;
  text-decoration: underline;
`;
const NUMBER_OF_FARMS_VISIBLE = 12;
const Farms = ({ children  })=>{
    const { pathname , query: urlQuery  } = (0,next_router__WEBPACK_IMPORTED_MODULE_18__.useRouter)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_12__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { data: farmsLP , userDataLoaded , poolLength , regularCakePerBlock  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useFarms */ .E2)();
    const cakePrice = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__/* .usePriceCakeBusd */ .Iu)();
    const { 0: _query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const normalizedUrlSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>typeof urlQuery?.search === "string" ? urlQuery.search : "", [
        urlQuery
    ]);
    const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query;
    const [viewMode, setViewMode] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useUserFarmsViewMode */ .y9)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3React */ .Ge)();
    const { 0: sortOption , 1: setSortOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hot");
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const chosenFarmsLength = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const isArchived = pathname.includes("archived");
    const isInactive = pathname.includes("history");
    const isActive = !isInactive && !isArchived;
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useCakeVaultUserData */ .Es)();
    (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__/* .usePollFarmsWithUserData */ .Cs)();
    // Users with no wallet connected should see 0 as Earned amount
    // Connected users should see loading indicator until first userData has loaded
    const userDataReady = !account || !!account && userDataLoaded;
    const [stakedOnly, setStakedOnly] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useUserFarmStakedOnly */ .XD)(isActive);
    const { 0: boostedOnly , 1: setBoostedOnly  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const activeFarms = farmsLP.filter((farm)=>farm.pid !== 0 && farm.multiplier !== "0X" && (!poolLength || poolLength > farm.pid));
    const inactiveFarms = farmsLP.filter((farm)=>farm.pid !== 0 && farm.multiplier === "0X");
    const archivedFarms = farmsLP;
    const stakedOnlyFarms = activeFarms.filter((farm)=>farm.userData && (new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.userData.stakedBalance).isGreaterThan(0) || new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.userData.proxy?.stakedBalance).isGreaterThan(0)));
    const stakedInactiveFarms = inactiveFarms.filter((farm)=>farm.userData && (new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.userData.stakedBalance).isGreaterThan(0) || new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.userData.proxy?.stakedBalance).isGreaterThan(0)));
    const stakedArchivedFarms = archivedFarms.filter((farm)=>farm.userData && (new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.userData.stakedBalance).isGreaterThan(0) || new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.userData.proxy?.stakedBalance).isGreaterThan(0)));
    const farmsList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((farmsToDisplay)=>{
        let farmsToDisplayWithAPR = farmsToDisplay.map((farm)=>{
            if (!farm.lpTotalInQuoteToken || !farm.quoteTokenPriceBusd) {
                return farm;
            }
            const totalLiquidity = new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceBusd);
            const { cakeRewardsApr , lpRewardsApr  } = isActive ? (0,utils_apr__WEBPACK_IMPORTED_MODULE_13__/* .getFarmApr */ .yW)(chainId, new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(farm.poolWeight), cakePrice, totalLiquidity, farm.lpAddress, regularCakePerBlock) : {
                cakeRewardsApr: 0,
                lpRewardsApr: 0
            };
            return {
                ...farm,
                apr: cakeRewardsApr,
                lpRewardsApr,
                liquidity: totalLiquidity
            };
        });
        if (query) {
            const lowercaseQuery = (0,utils_latinise__WEBPACK_IMPORTED_MODULE_15__/* .latinise */ .b)(query.toLowerCase());
            farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm)=>{
                return (0,utils_latinise__WEBPACK_IMPORTED_MODULE_15__/* .latinise */ .b)(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery);
            });
        }
        return farmsToDisplayWithAPR;
    }, [
        query,
        isActive,
        chainId,
        cakePrice,
        regularCakePerBlock
    ]);
    const handleChangeQuery = (event)=>{
        setQuery(event.target.value);
    };
    const { 0: numberOfFarmsVisible , 1: setNumberOfFarmsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(NUMBER_OF_FARMS_VISIBLE);
    const chosenFarms = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        let chosenFs = [];
        if (isActive) {
            chosenFs = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms);
        }
        if (isInactive) {
            chosenFs = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms);
        }
        if (isArchived) {
            chosenFs = stakedOnly ? farmsList(stakedArchivedFarms) : farmsList(archivedFarms);
        }
        if (boostedOnly) {
            chosenFs = chosenFs.filter((f)=>f.boosted);
        }
        return chosenFs;
    }, [
        activeFarms,
        farmsList,
        inactiveFarms,
        archivedFarms,
        isActive,
        isInactive,
        isArchived,
        stakedArchivedFarms,
        stakedInactiveFarms,
        stakedOnly,
        stakedOnlyFarms,
        boostedOnly, 
    ]);
    const chosenFarmsMemoized = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const sortFarms = (farms)=>{
            switch(sortOption){
                case "apr":
                    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_14___default()(farms, (farm)=>farm.apr + farm.lpRewardsApr, "desc");
                case "multiplier":
                    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_14___default()(farms, (farm)=>farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0, "desc");
                case "earned":
                    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_14___default()(farms, (farm)=>farm.userData ? Number(farm.userData.earnings) : 0, "desc");
                case "liquidity":
                    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_14___default()(farms, (farm)=>Number(farm.liquidity), "desc");
                case "latest":
                    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_14___default()(farms, (farm)=>Number(farm.pid), "desc");
                default:
                    return farms;
            }
        };
        return sortFarms(chosenFarms).slice(0, numberOfFarmsVisible);
    }, [
        chosenFarms,
        sortOption,
        numberOfFarmsVisible
    ]);
    chosenFarmsLength.current = chosenFarmsMemoized.length;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isIntersecting) {
            setNumberOfFarmsVisible((farmsCurrentlyVisible)=>{
                if (farmsCurrentlyVisible <= chosenFarmsLength.current) {
                    return farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE;
                }
                return farmsCurrentlyVisible;
            });
        }
    }, [
        isIntersecting
    ]);
    const handleSortOptionChange = (option)=>{
        setSortOption(option.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FarmsContext.Provider, {
        value: {
            chosenFarmsMemoized
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FarmFlexWrapper, {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmH1, {
                                    as: "h1",
                                    scale: "xxl",
                                    color: "secondary",
                                    mb: "24px",
                                    children: t("Farms")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmH2, {
                                    scale: "lg",
                                    color: "text",
                                    children: t("Stake LP tokens to earn.")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                    to: "/farms/auction",
                                    prefetch: false,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                        p: "0",
                                        variant: "text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                color: "primary",
                                                bold: true,
                                                fontSize: "16px",
                                                mr: "4px",
                                                children: t("Community Auctions")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                                color: "primary"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.ChainId.BSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_21__/* .BCakeBoosterCard */ .Tn, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ControlContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ViewControls, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        idPrefix: "clickFarm",
                                        viewMode: viewMode,
                                        onToggle: setViewMode
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToggleWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                                                id: "staked-only-farms",
                                                checked: stakedOnly,
                                                onChange: ()=>setStakedOnly(!stakedOnly),
                                                scale: "sm"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                children: [
                                                    " ",
                                                    t("Staked only")
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToggleWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                                                id: "staked-only-farms",
                                                checked: boostedOnly,
                                                onChange: ()=>setBoostedOnly((prev)=>!prev),
                                                scale: "sm"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                children: [
                                                    " ",
                                                    t("Booster Available")
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* .Farm.FarmTabButtons */ .l.FarmTabButtons, {
                                        hasStakeInFinishedFarms: stakedInactiveFarms.length > 0
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FilterContainer, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LabelWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                textTransform: "uppercase",
                                                children: t("Sort by")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                                options: [
                                                    {
                                                        label: t("Hot"),
                                                        value: "hot"
                                                    },
                                                    {
                                                        label: t("APR"),
                                                        value: "apr"
                                                    },
                                                    {
                                                        label: t("Multiplier"),
                                                        value: "multiplier"
                                                    },
                                                    {
                                                        label: t("Earned"),
                                                        value: "earned"
                                                    },
                                                    {
                                                        label: t("Liquidity"),
                                                        value: "liquidity"
                                                    },
                                                    {
                                                        label: t("Latest"),
                                                        value: "latest"
                                                    }, 
                                                ],
                                                onOptionChange: handleSortOptionChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LabelWrapper, {
                                        style: {
                                            marginLeft: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                textTransform: "uppercase",
                                                children: t("Search")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                initialValue: normalizedUrlSearch,
                                                onChange: handleChangeQuery,
                                                placeholder: "Search Farms"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    isInactive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FinishedTextContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                fontSize: [
                                    "16px",
                                    null,
                                    "20px"
                                ],
                                color: "failure",
                                pr: "4px",
                                children: t("Don't see the farm you are staking?")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FinishedTextLink, {
                                        href: "/migration",
                                        fontSize: [
                                            "16px",
                                            null,
                                            "20px"
                                        ],
                                        color: "failure",
                                        children: t("Go to migration page")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                        fontSize: [
                                            "16px",
                                            null,
                                            "20px"
                                        ],
                                        color: "failure",
                                        padding: "0px 4px",
                                        children: "or"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FinishedTextLink, {
                                        external: true,
                                        color: "failure",
                                        fontSize: [
                                            "16px",
                                            null,
                                            "20px"
                                        ],
                                        href: "https://v1-farms.pancakeswap.finance/farms/history",
                                        children: [
                                            t("check out v1 farms"),
                                            "."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    viewMode === state_user_actions__WEBPACK_IMPORTED_MODULE_17__/* .ViewMode.TABLE */ .wO.TABLE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FarmTable_FarmTable__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        farms: chosenFarmsMemoized,
                        cakePrice: cakePrice,
                        userDataReady: userDataReady
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                        children: children
                    }),
                    account && !userDataLoaded && stakedOnly && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {})
                    }),
                    poolLength && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: observerRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                        src: "/images/decorations/3dpan.png",
                        alt: "Pancake illustration",
                        width: 120,
                        height: 103
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {}), document.body)
        ]
    });
};
const FarmsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    chosenFarmsMemoized: []
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Farms);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "et": () => (/* binding */ BCakeMigrateModal)
/* harmony export */ });
/* unused harmony exports StepperCircle, StepperText, StepperWrapper, FooterBox, InfoBox, InfoText, InfoIconBox */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(67854);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(30486);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11218);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74860);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var _hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62704);
/* harmony import */ var _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4619);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_5__, _hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_5__, _hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const StepperCircle = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-0"
})`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 20px;
  padding: 2px;
  box-sizing: border-box;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const StepperText = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-1"
})`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s color ease-in-out;
  will-change: color;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;
const StepperWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-2"
})`
  position: relative;
  height: 20px;
  width: 20px;
  display: inline-block;
  vertical-align: top;
  &:not(:last-child) {
    margin-right: calc((100% - 60px) / 2);
    &::before {
      position: absolute;
      content: '';
      width: calc(((100vw / 2) - 108px));
      height: 2px;
      top: 9px;
      left: 30px;
      transition: 0.3s background-color ease-in-out;
      will-change: background-color;
      background-color: ${({ theme , finished  })=>finished ? theme.colors.textSubtle : theme.colors.disabled};
    }
    ${({ theme  })=>theme.mediaQueries.md} {
      &::before {
        width: 104px;
      }
    }
  }
  ${StepperCircle} {
    background: ${({ theme , finished  })=>finished ? theme.colors.textSubtle : theme.colors.disabled};
  }
  ${StepperText} {
    color: ${({ theme , active , finished  })=>active ? theme.colors.primary : finished ? theme.colors.textSubtle : theme.colors.disabled};
  }
`;
const FooterBox = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-3"
})`
  margin-top: 24px;
  padding-top: 24px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    top: 0px;
    left: 0px;
    background-color: ${({ theme  })=>theme.colors.cardBorder};
  }
`;
const InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-4"
})`
  padding: 16px;
  background: ${({ theme  })=>theme.colors.background};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
  font-size: 12px;
  color: ${({ theme  })=>theme.colors.textSubtle};
  line-height: 120%;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme  })=>theme.mediaQueries.md} {
    width: 372px;
  }
`;
const InfoText = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-5"
})``;
const InfoIconBox = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-678b1d6-6"
})`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var Steps;
(function(Steps) {
    Steps[Steps["Unstake"] = 0] = "Unstake";
    Steps[Steps["Enable"] = 1] = "Enable";
    Steps[Steps["Stake"] = 2] = "Stake";
})(Steps || (Steps = {}));
const BCakeMigrateModal = ({ lpContract , stakedBalance , onDismiss , onUnStack , pid ,  })=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { 0: activatedState , 1: setActivatedState  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Steps.Unstake);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: isApproved , 1: setIsApproved  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const steps = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>({
            [Steps.Unstake]: t("Unstake"),
            [Steps.Enable]: t("Enable"),
            [Steps.Stake]: t("Stake")
        }), [
        t
    ]);
    const migrationSteps = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>({
            [Steps.Unstake]: t("Unstake LP tokens from the farm"),
            [Steps.Enable]: t("Enable staking with yield booster"),
            [Steps.Stake]: t("Stake LP tokens back to the farm")
        }), [
        t
    ]);
    const migrationStepsKeys = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>Object.keys(migrationSteps), [
        migrationSteps
    ]);
    const fullBalance = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getFullDisplayBalance */ .NJ)(stakedBalance);
    }, [
        stakedBalance
    ]);
    const { proxyAddress  } = (0,_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const { onApprove , onDone , onStake  } = (0,_YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(pid, lpContract);
    const bCakeProxy = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_5__/* .useBCakeProxyContract */ .DE)(proxyAddress);
    const { fetchWithCatchTxError , loading  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .useToast */ .p)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: t("To enable farm yield boosters, you must follow the guide and migrate your current farming positions. However, for each farm, you will only need to migrate once.")
    }), {
        placement: "right"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!bCakeProxy) return;
        bCakeProxy.lpApproved(lpContract.address).then((enabled)=>{
            setIsApproved(enabled);
        });
    }, [
        lpContract,
        bCakeProxy
    ]);
    const onStepChange = async ()=>{
        if (activatedState === Steps.Unstake) {
            setIsLoading(true);
            onUnStack(fullBalance, ()=>{
                if (isApproved) setActivatedState(Steps.Stake);
                else setActivatedState(Steps.Enable);
                setIsLoading(false);
            });
        } else if (activatedState === Steps.Enable) {
            const receipt = await fetchWithCatchTxError(onApprove);
            if (receipt?.status) {
                toastSuccess(t("Contract Enabled"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash
                }));
                setActivatedState(Steps.Stake);
                onDone();
            }
        } else {
            setIsLoading(true);
            try {
                const receipt1 = await fetchWithCatchTxError(()=>onStake(fullBalance));
                if (receipt1?.status) {
                    toastSuccess(`${t("Staked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                        txHash: receipt1.transactionHash,
                        children: t("Your funds have been staked in the farm")
                    }));
                    onDone();
                    onDismiss?.();
                }
            } catch (error) {
                console.error(error);
            } finally{
                setIsLoading(false);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
        title: t("Migrate your stakings"),
        width: "420px",
        onDismiss: onDismiss,
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoBox, {
                ref: targetRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoText, {
                        children: t("You will need to migrate your stakings before activating yield booster for a farm")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoIconBox, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                pb: 20,
                pl: 38,
                pr: 30,
                children: migrationStepsKeys.map((step, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StepperWrapper, {
                        active: step === activatedState.toString(),
                        finished: parseInt(step) < parseInt(activatedState.toString()),
                        children: [
                            step === activatedState.toString() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                width: 22
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepperCircle, {
                                children: parseInt(step) < parseInt(activatedState.toString()) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    color: "white",
                                    width: 16
                                }) : index + 1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepperText, {
                                children: steps[step]
                            })
                        ]
                    }, step);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterBox, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        mb: "16px",
                        textAlign: "center",
                        children: [
                            activatedState + 1,
                            ". ",
                            t(migrationSteps[activatedState])
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        onClick: onStepChange,
                        isLoading: isLoading || loading,
                        width: "100%",
                        endIcon: isLoading || loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            spin: true,
                            color: "currentColor"
                        }) : undefined,
                        children: isLoading || loading ? t("Confirming...") : t(steps[activatedState])
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FarmTable_Actions_HarvestAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71489);
/* harmony import */ var _FarmTable_Actions_StakedAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89884);
/* harmony import */ var _YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6933);
/* harmony import */ var _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65563);
/* harmony import */ var _HarvestAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50338);
/* harmony import */ var _StakeAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, _FarmTable_Actions_HarvestAction__WEBPACK_IMPORTED_MODULE_6__, _FarmTable_Actions_StakedAction__WEBPACK_IMPORTED_MODULE_7__, _YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__, _HarvestAction__WEBPACK_IMPORTED_MODULE_10__, _StakeAction__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, _FarmTable_Actions_HarvestAction__WEBPACK_IMPORTED_MODULE_6__, _FarmTable_Actions_StakedAction__WEBPACK_IMPORTED_MODULE_7__, _YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__, _HarvestAction__WEBPACK_IMPORTED_MODULE_10__, _StakeAction__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Action = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-29f14caa-0"
})`
  padding-top: 16px;
`;
const ActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-29f14caa-1"
})`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardActions = ({ farm , account , addLiquidityUrl , lpLabel , displayApr ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { pid , token , quoteToken , vaultPid , lpSymbol , lpAddress  } = farm;
    const { earnings  } = farm.userData || {};
    const { shouldUseProxyFarm  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__/* .YieldBoosterStateContext */ ._);
    const isReady = farm.multiplier !== undefined;
    const { stakedBalance , tokenBalance , proxy  } = farm.userData;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Action, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "secondary",
                        fontSize: "12px",
                        pr: "4px",
                        children: "CAKE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: t("Earned")
                    })
                ]
            }),
            shouldUseProxyFarm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FarmTable_Actions_HarvestAction__WEBPACK_IMPORTED_MODULE_6__/* .ProxyHarvestActionContainer */ .nG, {
                lpAddress: lpAddress,
                earnings: earnings,
                pid: pid,
                vaultPid: vaultPid,
                token: token,
                quoteToken: quoteToken,
                lpSymbol: lpSymbol,
                children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestAction__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        ...props
                    })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FarmTable_Actions_HarvestAction__WEBPACK_IMPORTED_MODULE_6__/* .HarvestActionContainer */ .ln, {
                earnings: earnings,
                pid: pid,
                vaultPid: vaultPid,
                token: token,
                quoteToken: quoteToken,
                lpSymbol: lpSymbol,
                children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestAction__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        ...props
                    })
            }),
            farm.boosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: (status)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                bold: true,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                pr: "4px",
                                children: t("Yield Booster")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                bold: true,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                children: status
                            })
                        ]
                    }),
                desc: (actionBtn)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionContainer, {
                        children: actionBtn
                    }),
                farmPid: farm.pid,
                lpTotalSupply: farm.lpTotalSupply,
                userBalanceInFarm: (stakedBalance.plus(tokenBalance).gt(0) ? stakedBalance.plus(tokenBalance) : proxy?.stakedBalance.plus(proxy?.tokenBalance)) ?? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(0)
            }),
            isReady ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "secondary",
                        fontSize: "12px",
                        pr: "4px",
                        children: farm.lpSymbol
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: t("Staked")
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                width: 80,
                height: 18,
                mb: "4px"
            }),
            !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                mt: "8px",
                width: "100%"
            }) : shouldUseProxyFarm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FarmTable_Actions_StakedAction__WEBPACK_IMPORTED_MODULE_7__/* .ProxyStakedContainer */ .sf, {
                ...farm,
                lpLabel: lpLabel,
                addLiquidityUrl: addLiquidityUrl,
                displayApr: displayApr,
                children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakeAction__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        ...props
                    })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FarmTable_Actions_StakedAction__WEBPACK_IMPORTED_MODULE_7__/* .StakedContainer */ .pK, {
                ...farm,
                lpLabel: lpLabel,
                addLiquidityUrl: addLiquidityUrl,
                displayApr: displayApr,
                children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakeAction__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        ...props
                    })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46684);
/* harmony import */ var _YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11816);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, _YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, _YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { FarmAuctionTag , CoreTag , StableFarmTag  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* .Farm.Tags */ .l.Tags;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-879c7ec1-0"
})`
  svg {
    margin-right: 4px;
  }
`;
const MultiplierTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-879c7ec1-1"
})`
  margin-left: 4px;
`;
const CardHeading = ({ lpLabel , multiplier , isCommunityFarm , token , quoteToken , boosted , isStable ,  })=>{
    const isReady = multiplier !== undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: "12px",
        children: [
            isReady ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_2__/* .TokenPairImage */ .q, {
                variant: "inverted",
                primaryToken: token,
                secondaryToken: quoteToken,
                width: 64,
                height: 64
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                mr: "8px",
                width: 63,
                height: 63,
                variant: "circle"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                flexDirection: "column",
                alignItems: "flex-end",
                children: [
                    isReady ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        mb: "4px",
                        children: lpLabel.split(" ")[0]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        mb: "4px",
                        width: 60,
                        height: 18
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        justifyContent: "center",
                        children: [
                            isStable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StableFarmTag, {
                                mr: "4px"
                            }) : null,
                            isReady ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                children: isCommunityFarm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmAuctionTag, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoreTag, {})
                            }) : null,
                            boosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ml: "4px"
                            }),
                            isReady ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MultiplierTag, {
                                variant: "secondary",
                                children: multiplier
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                ml: "4px",
                                width: 42,
                                height: 28
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(65624);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79467);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7599);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3763);
/* harmony import */ var _ApyButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74637);
/* harmony import */ var _CardActionsContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88399);
/* harmony import */ var _CardHeading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63613);
/* harmony import */ var _YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _ApyButton__WEBPACK_IMPORTED_MODULE_10__, _CardActionsContainer__WEBPACK_IMPORTED_MODULE_11__, _CardHeading__WEBPACK_IMPORTED_MODULE_12__, _YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _ApyButton__WEBPACK_IMPORTED_MODULE_10__, _CardActionsContainer__WEBPACK_IMPORTED_MODULE_11__, _CardHeading__WEBPACK_IMPORTED_MODULE_12__, _YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const { DetailsSection  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .Farm.FarmCard */ .l.FarmCard;
const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5359a8a1-0"
})`
  align-self: baseline;
  max-width: 100%;
  margin: 0 0 24px 0;
  ${({ theme  })=>theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`;
const FarmCardInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5359a8a1-1"
})`
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
`;
const ExpandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-5359a8a1-2"
})`
  padding: 24px;
  border-top: 2px solid ${({ theme  })=>theme.colors.cardBorder};
  overflow: hidden;
`;
const FarmCard = ({ farm , displayApr , removed , cakePrice , account , originalLiquidity ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: showExpandableSection , 1: setShowExpandableSection  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const liquidity = farm?.liquidity && originalLiquidity?.gt(0) ? farm.liquidity.plus(originalLiquidity) : farm.liquidity;
    const totalValueFormatted = liquidity && liquidity.gt(0) ? `$${liquidity.toNumber().toLocaleString(undefined, {
        maximumFractionDigits: 0
    })}` : "";
    const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace("PANCAKE", "");
    const earnLabel = farm.dual ? farm.dual.earnLabel : t("CAKE + Fees");
    const liquidityUrlPathParts = (0,utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
        quoteTokenAddress: farm.quoteToken.address,
        tokenAddress: farm.token.address,
        chainId
    });
    const addLiquidityUrl = `${config__WEBPACK_IMPORTED_MODULE_4__/* .BASE_ADD_LIQUIDITY_URL */ .wI}/${liquidityUrlPathParts}`;
    const { lpAddress  } = farm;
    const isPromotedFarm = farm.token.symbol === "CAKE";
    const { stakedBalance , proxy , tokenBalance  } = farm.userData;
    const toggleExpandableSection = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        setShowExpandableSection((prev)=>!prev);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCard, {
        isActive: isPromotedFarm,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FarmCardInnerContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardHeading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        lpLabel: lpLabel,
                        multiplier: farm.multiplier,
                        isCommunityFarm: farm.isCommunity,
                        token: farm.token,
                        quoteToken: farm.quoteToken,
                        boosted: farm.boosted,
                        isStable: farm.isStable
                    }),
                    !removed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                children: [
                                    t("APR"),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                bold: true,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: farm.apr ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        farm.boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            mr: "4px",
                                            lpRewardsApr: farm.lpRewardsApr,
                                            apr: farm.apr,
                                            pid: farm?.pid,
                                            lpTotalSupply: farm.lpTotalSupply,
                                            userBalanceInFarm: (stakedBalance.plus(tokenBalance).gt(0) ? stakedBalance?.plus(tokenBalance) : proxy?.stakedBalance.plus(proxy?.tokenBalance)) ?? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(0)
                                        }) : null,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ApyButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            variant: "text-and-button",
                                            pid: farm.pid,
                                            lpTokenPrice: farm.lpTokenPrice,
                                            lpSymbol: farm.lpSymbol,
                                            multiplier: farm.multiplier,
                                            lpLabel: lpLabel,
                                            addLiquidityUrl: addLiquidityUrl,
                                            cakePrice: cakePrice,
                                            apr: farm.apr,
                                            displayApr: displayApr,
                                            lpRewardsApr: farm.lpRewardsApr,
                                            strikethrough: farm.boosted,
                                            useTooltipText: true,
                                            boosted: farm.boosted
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    height: 24,
                                    width: 80
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                children: [
                                    t("Earn"),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                bold: true,
                                children: earnLabel
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardActionsContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        farm: farm,
                        lpLabel: lpLabel,
                        account: account,
                        addLiquidityUrl: addLiquidityUrl,
                        displayApr: displayApr
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ExpandingWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        onClick: toggleExpandableSection,
                        expanded: showExpandableSection
                    }),
                    showExpandableSection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsSection, {
                        removed: removed,
                        scanAddressLink: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(lpAddress, "address", chainId),
                        infoAddress: `/info${state_info_constant__WEBPACK_IMPORTED_MODULE_3__/* .multiChainPaths */ .Dw[chainId]}/pools/${lpAddress}`,
                        totalValueFormatted: totalValueFormatted,
                        lpLabel: lpLabel,
                        addLiquidityUrl: addLiquidityUrl,
                        isCommunity: farm.isCommunity,
                        auctionHostingEndDate: farm.auctionHostingEndDate
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FarmCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78950);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const HarvestAction = ({ pid , token , quoteToken , vaultPid , earnings , proxyCakeBalance , lpSymbol , onReward , onDone ,  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const cakePrice = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePriceCakeBusd */ .Iu)();
    const rawEarningsBalance = account ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getBalanceAmount */ .U4)(earnings) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW;
    const displayBalance = rawEarningsBalance.toFixed(5, (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default().ROUND_DOWN));
    const earningsBusd = rawEarningsBalance ? rawEarningsBalance.multipliedBy(cakePrice).toNumber() : 0;
    const tooltipBalance = rawEarningsBalance.isGreaterThan(new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(0.00001)) ? displayBalance : "< 0.00001";
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(`${tooltipBalance} ${t(`CAKE has been harvested to the farm booster contract and will be automatically sent to your wallet upon the next harvest.`)}`, {
        placement: "bottom"
    });
    const onClickHarvestButton = ()=>{
        if (vaultPid) {
            onPresentNonBscHarvestModal();
        } else {
            handleHarvest();
        }
    };
    const handleHarvest = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return onReward();
        });
        if (receipt?.status) {
            toastSuccess(`${t("Harvested")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your %symbol% earnings have been sent to your wallet!", {
                    symbol: "CAKE"
                })
            }));
            onDone?.();
        }
    };
    const [onPresentNonBscHarvestModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        pid: pid,
        token: token,
        lpSymbol: lpSymbol,
        quoteToken: quoteToken,
        earningsBigNumber: earnings,
        earningsBusd: earningsBusd
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        mb: "8px",
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                flexDirection: "column",
                alignItems: "flex-start",
                children: [
                    proxyCakeBalance ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                ref: targetRef,
                                decorationColor: "secondary",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    color: rawEarningsBalance.eq(0) ? "textDisabled" : "text",
                                    children: displayBalance
                                })
                            }),
                            tooltipVisible && tooltip
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: rawEarningsBalance.eq(0) ? "textDisabled" : "text",
                        children: displayBalance
                    }),
                    earningsBusd > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        decimals: 2,
                        value: earningsBusd,
                        unit: " USD",
                        prefix: "~"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                disabled: rawEarningsBalance.eq(0) || pendingTx,
                onClick: onClickHarvestButton,
                children: pendingTx ? t("Harvesting") : t("Harvest")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HarvestAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(93314);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(24278);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78950);
/* harmony import */ var views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85207);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57268);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36204);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7599);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5369);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24671);
/* harmony import */ var state_global_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18770);
/* harmony import */ var state_transactions_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52284);
/* harmony import */ var state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12238);
/* harmony import */ var components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56150);
/* harmony import */ var _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(65563);
/* harmony import */ var _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4430);
/* harmony import */ var _hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(26069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_4__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__, state__WEBPACK_IMPORTED_MODULE_9__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_14__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_17__, components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_19__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_20__, _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_21__, _hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_4__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__, state__WEBPACK_IMPORTED_MODULE_9__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_14__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_17__, components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_19__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_20__, _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_21__, _hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const IconButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-74b92d45-0"
})`
  display: flex;
  svg {
    width: 20px;
  }
`;
const StakeAction = ({ pid , vaultPid , quoteToken , token , lpSymbol , lpTokenPrice , multiplier , apr , lpAddress , displayApr , addLiquidityUrl , lpLabel , lpTotalSupply , tokenAmountTotal , quoteTokenAmountTotal , userData , onStake , onUnstake , onDone , onApprove , isApproved ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const addTransaction = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useTransactionAdder */ .h7)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const { tokenBalance , stakedBalance  } = userData;
    const cakePrice = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__/* .usePriceCakeBusd */ .Iu)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* .useToast */ .p)();
    const { fetchWithCatchTxError , fetchTxResponse , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { boosterState  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_20__/* .YieldBoosterStateContext */ ._);
    const { 0: bCakeMultiplier , 1: setBCakeMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>null);
    const pendingFarm = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useNonBscFarmPendingTransaction */ .UA)(lpAddress);
    const { isFirstTime  } = (0,_hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_22__/* .useFirstTimeCrossFarming */ .E)(vaultPid);
    const crossChainWarningText = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return isFirstTime ? t("A small amount of %nativeToken% is required for the first-time setup of cross-chain CAKE farming.", {
            nativeToken: native.symbol
        }) : t("For safety, cross-chain transactions will take around 30 minutes to confirm.");
    }, [
        isFirstTime,
        native,
        t
    ]);
    const isStakeReady = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return [
            "history",
            "archived"
        ].some((item)=>router.pathname.includes(item)) || pendingFarm.length > 0;
    }, [
        pendingFarm,
        router
    ]);
    const handleStake = async (amount)=>{
        if (vaultPid) {
            await handleNonBscStake(amount);
        } else {
            const receipt = await fetchWithCatchTxError(()=>onStake(amount));
            if (receipt?.status) {
                toastSuccess(`${t("Staked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your funds have been staked in the farm")
                }));
                onDone();
            }
        }
    };
    const handleNonBscStake = async (amountValue)=>{
        const receipt = await fetchTxResponse(()=>onStake(amountValue));
        const amountAsBigNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(amountValue).times(config__WEBPACK_IMPORTED_MODULE_13__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
        const amount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_15__/* .formatLpBalance */ .O$)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(amountAsBigNumber));
        if (receipt) {
            addTransaction(receipt, {
                type: "non-bsc-farm",
                translatableSummary: {
                    text: "Stake %amount% %lpSymbol% Token",
                    data: {
                        amount,
                        lpSymbol
                    }
                },
                nonBscFarm: {
                    type: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .NonBscFarmStepType.STAKE */ .Ly.STAKE,
                    status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING,
                    amount,
                    lpSymbol,
                    lpAddress,
                    steps: [
                        {
                            step: 1,
                            chainId,
                            tx: receipt.hash,
                            isFirstTime: !isFirstTime,
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        },
                        {
                            step: 2,
                            tx: "",
                            chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC,
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        }, 
                    ]
                }
            });
            dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_16__/* .pickFarmTransactionTx */ .CF)({
                tx: receipt.hash,
                chainId
            }));
            onDone();
        }
    };
    const handleUnstake = async (amount)=>{
        if (vaultPid) {
            await handleNonBscUnStake(amount);
        } else {
            const receipt = await fetchWithCatchTxError(()=>onUnstake(amount));
            if (receipt?.status) {
                toastSuccess(`${t("Unstaked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your earnings have also been harvested to your wallet")
                }));
                onDone();
            }
        }
    };
    const handleNonBscUnStake = async (amountValue)=>{
        const receipt = await fetchTxResponse(()=>onUnstake(amountValue));
        const amountAsBigNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(amountValue).times(config__WEBPACK_IMPORTED_MODULE_13__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
        const amount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_15__/* .formatLpBalance */ .O$)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(amountAsBigNumber));
        if (receipt) {
            addTransaction(receipt, {
                type: "non-bsc-farm",
                translatableSummary: {
                    text: "Unstake %amount% %lpSymbol% Token",
                    data: {
                        amount,
                        lpSymbol
                    }
                },
                nonBscFarm: {
                    type: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .NonBscFarmStepType.UNSTAKE */ .Ly.UNSTAKE,
                    status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING,
                    amount,
                    lpSymbol,
                    lpAddress,
                    steps: [
                        {
                            step: 1,
                            chainId,
                            tx: receipt.hash,
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        },
                        {
                            step: 2,
                            chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC,
                            tx: "",
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        },
                        {
                            step: 3,
                            chainId,
                            tx: "",
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_18__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        }, 
                    ]
                }
            });
            dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_16__/* .pickFarmTransactionTx */ .CF)({
                tx: receipt.hash,
                chainId
            }));
            onDone();
        }
    };
    const handleApprove = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return onApprove();
        });
        if (receipt?.status) {
            toastSuccess(t("Contract Enabled"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
            onDone();
        }
    }, [
        onApprove,
        t,
        toastSuccess,
        fetchWithCatchTxError,
        onDone
    ]);
    const bCakeCalculatorSlot = (calculatorBalance)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            targetInputBalance: calculatorBalance,
            earningTokenPrice: cakePrice.toNumber(),
            lpTotalSupply: lpTotalSupply,
            setBCakeMultiplier: setBCakeMultiplier
        });
    const [onPresentDeposit] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* .Farm.DepositModal */ .l.DepositModal, {
        account: account,
        pid: pid,
        lpTotalSupply: lpTotalSupply,
        max: tokenBalance,
        stakedBalance: stakedBalance,
        onConfirm: handleStake,
        tokenName: lpSymbol,
        multiplier: multiplier,
        lpPrice: lpTokenPrice,
        lpLabel: lpLabel,
        apr: apr,
        displayApr: displayApr,
        addLiquidityUrl: addLiquidityUrl,
        cakePrice: cakePrice,
        showActiveBooster: boosterState === _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_21__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE,
        bCakeMultiplier: bCakeMultiplier,
        bCakeCalculatorSlot: bCakeCalculatorSlot,
        showCrossChainFarmWarning: chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC && chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC_TESTNET,
        crossChainWarningText: crossChainWarningText
    }));
    const [onPresentWithdraw] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* .Farm.WithdrawModal */ .l.WithdrawModal, {
        showActiveBooster: boosterState === _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_21__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE,
        max: stakedBalance,
        onConfirm: handleUnstake,
        tokenName: lpSymbol,
        showCrossChainFarmWarning: chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC && chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC_TESTNET
    }));
    const renderStakingButtons = ()=>{
        return stakedBalance.eq(0) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            onClick: onPresentDeposit,
            disabled: isStakeReady,
            children: t("Stake LP")
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconButtonWrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                    mr: "6px",
                    variant: "tertiary",
                    disabled: pendingFarm.length > 0,
                    onClick: onPresentWithdraw,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                        color: "primary",
                        width: "14px"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                    variant: "tertiary",
                    onClick: onPresentDeposit,
                    disabled: isStakeReady,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        color: "primary",
                        width: "14px"
                    })
                })
            ]
        });
    };
    const [onPresentTransactionModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
        initialView: components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_19__/* .WalletView.TRANSACTIONS */ .L9.TRANSACTIONS
    }));
    const onClickLoadingIcon = ()=>{
        const { length  } = pendingFarm;
        if (length) {
            if (length > 1) {
                onPresentTransactionModal();
            } else {
                dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_16__/* .pickFarmTransactionTx */ .CF)({
                    tx: pendingFarm[0].txid,
                    chainId
                }));
            }
        }
    };
    // TODO: Move this out to prevent unnecessary re-rendered
    if (!isApproved) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            mt: "8px",
            width: "100%",
            disabled: pendingTx,
            onClick: handleApprove,
            children: t("Enable Contract")
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* .Farm.StakedLP */ .l.StakedLP, {
                stakedBalance: stakedBalance,
                quoteTokenSymbol: quoteToken.symbol,
                tokenSymbol: token.symbol,
                lpTotalSupply: lpTotalSupply,
                lpTokenPrice: lpTokenPrice,
                tokenAmountTotal: tokenAmountTotal,
                quoteTokenAmountTotal: quoteTokenAmountTotal,
                pendingFarmLength: pendingFarm.length,
                onClickLoadingIcon: onClickLoadingIcon
            }),
            renderStakingButtons()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakeAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51036);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3763);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79467);
/* harmony import */ var _YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6933);
/* harmony import */ var _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65563);
/* harmony import */ var _Apr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76694);
/* harmony import */ var _Liquidity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85396);
/* harmony import */ var _Multiplier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94357);
/* harmony import */ var _HarvestAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71489);
/* harmony import */ var _StakedAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89884);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__, _Apr__WEBPACK_IMPORTED_MODULE_10__, _Liquidity__WEBPACK_IMPORTED_MODULE_11__, _Multiplier__WEBPACK_IMPORTED_MODULE_12__, _HarvestAction__WEBPACK_IMPORTED_MODULE_13__, _StakedAction__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__, _Apr__WEBPACK_IMPORTED_MODULE_10__, _Liquidity__WEBPACK_IMPORTED_MODULE_11__, _Multiplier__WEBPACK_IMPORTED_MODULE_12__, _HarvestAction__WEBPACK_IMPORTED_MODULE_13__, _StakedAction__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const expandAnimation = styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 700px;
  }
`;
const collapseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes`
  from {
    max-height: 700px;
  }
  to {
    max-height: 0px;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-682aa7ff-0"
})`
  animation: ${({ expanded  })=>expanded ? styled_components__WEBPACK_IMPORTED_MODULE_4__.css`
          ${expandAnimation} 300ms linear forwards
        ` : styled_components__WEBPACK_IMPORTED_MODULE_4__.css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme  })=>theme.colors.dropdown};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme  })=>theme.mediaQueries.lg} {
    flex-direction: row;
    align-items: center;
    padding: 16px 32px;
  }
`;
const StyledLinkExternal = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
    componentId: "sc-682aa7ff-1"
})`
  font-weight: 400;
`;
const StakeContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-682aa7ff-2"
})`
  color: ${({ theme  })=>theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme  })=>theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`;
const ActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-682aa7ff-3"
})`
  display: flex;
  flex-direction: column;

  ${({ theme  })=>theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    flex-wrap: wrap;
  }
`;
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-682aa7ff-4"
})`
  min-width: 200px;
`;
const ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-682aa7ff-5"
})``;
const ValueWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-682aa7ff-6"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`;
const ActionPanel = ({ details , apr , multiplier , liquidity , userDataReady , expanded ,  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { proxyFarm , shouldUseProxyFarm  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_9__/* .YieldBoosterStateContext */ ._);
    const farm = details;
    const { isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)();
    const { t , currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const isActive = farm.multiplier !== "0X";
    const { quoteToken , token  } = farm;
    const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace("PANCAKE", "");
    const liquidityUrlPathParts = (0,utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        quoteTokenAddress: quoteToken.address,
        tokenAddress: token.address,
        chainId
    });
    const { lpAddress  } = farm;
    const bsc = (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreLink */ .C)(lpAddress, "address", chainId);
    const info = `/info${state_info_constant__WEBPACK_IMPORTED_MODULE_7__/* .multiChainPaths */ .Dw[chainId]}/pools/${lpAddress}`;
    const { stakedBalance , tokenBalance , proxy  } = farm.userData;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        expanded: expanded,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ValueContainer, {
                        children: [
                            farm.isCommunity && farm.auctionHostingEndDate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ValueWrapper, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        children: t("Auction Hosting Ends")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        paddingLeft: "4px",
                                        children: new Date(farm.auctionHostingEndDate).toLocaleString(locale, {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    })
                                ]
                            }),
                            !isDesktop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ValueWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                children: t("APR")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Apr__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                ...apr,
                                                useTooltipText: false,
                                                boosted: farm.boosted
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ValueWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                children: t("Multiplier")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Multiplier__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                ...multiplier
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ValueWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                children: t("Liquidity")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Liquidity__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                ...liquidity
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StakeContainer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                            href: `/add/${liquidityUrlPathParts}`,
                            children: t("Get %symbol%", {
                                symbol: lpLabel
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                        href: bsc,
                        children: t("View Contract")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                        href: info,
                        children: t("See Pair Info")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ActionContainer, {
                children: [
                    shouldUseProxyFarm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestAction__WEBPACK_IMPORTED_MODULE_13__/* .ProxyHarvestActionContainer */ .nG, {
                        ...proxyFarm,
                        userDataReady: userDataReady,
                        children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestAction__WEBPACK_IMPORTED_MODULE_13__/* .HarvestAction */ .xO, {
                                ...props
                            })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestAction__WEBPACK_IMPORTED_MODULE_13__/* .HarvestActionContainer */ .ln, {
                        ...farm,
                        userDataReady: userDataReady,
                        children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestAction__WEBPACK_IMPORTED_MODULE_13__/* .HarvestAction */ .xO, {
                                ...props
                            })
                    }),
                    farm?.boosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_15__/* .ActionContainer */ .sX, {
                        style: {
                            minHeight: 124.5
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            title: (status)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_15__/* .ActionTitles */ .Ad, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            mr: "3px",
                                            bold: true,
                                            textTransform: "uppercase",
                                            color: "textSubtle",
                                            fontSize: "12px",
                                            children: t("Yield Booster")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            bold: true,
                                            textTransform: "uppercase",
                                            color: "secondary",
                                            fontSize: "12px",
                                            children: status
                                        })
                                    ]
                                }),
                            desc: (actionBtn)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_15__/* .ActionContent */ .O6, {
                                    children: actionBtn
                                }),
                            farmPid: farm?.pid,
                            lpTotalSupply: farm?.lpTotalSupply,
                            userBalanceInFarm: stakedBalance.plus(tokenBalance).gt(0) ? stakedBalance.plus(tokenBalance) : proxy.stakedBalance.plus(proxy.tokenBalance)
                        })
                    }),
                    shouldUseProxyFarm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakedAction__WEBPACK_IMPORTED_MODULE_14__/* .ProxyStakedContainer */ .sf, {
                        ...proxyFarm,
                        userDataReady: userDataReady,
                        lpLabel: lpLabel,
                        displayApr: apr.value,
                        children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakedAction__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                                ...props
                            })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakedAction__WEBPACK_IMPORTED_MODULE_14__/* .StakedContainer */ .pK, {
                        ...farm,
                        userDataReady: userDataReady,
                        lpLabel: lpLabel,
                        displayApr: apr.value,
                        children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakedAction__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                                ...props
                            })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ln": () => (/* binding */ HarvestActionContainer),
/* harmony export */   "nG": () => (/* binding */ ProxyHarvestActionContainer),
/* harmony export */   "xO": () => (/* binding */ HarvestAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85306);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74860);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36204);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44868);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57268);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24671);
/* harmony import */ var views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19262);
/* harmony import */ var _hooks_useHarvestFarm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(83346);
/* harmony import */ var _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4619);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_5__, state__WEBPACK_IMPORTED_MODULE_6__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_10__, views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_13__, _hooks_useHarvestFarm__WEBPACK_IMPORTED_MODULE_14__, _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_5__, state__WEBPACK_IMPORTED_MODULE_6__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_10__, views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_13__, _hooks_useHarvestFarm__WEBPACK_IMPORTED_MODULE_14__, _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const ProxyHarvestActionContainer = ({ children , ...props })=>{
    const { lpAddress  } = props;
    const lpContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_5__/* .useERC20 */ .X_)(lpAddress);
    const { onReward , onDone , proxyCakeBalance  } = (0,_YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(props.pid, lpContract);
    return children({
        ...props,
        onReward,
        proxyCakeBalance,
        onDone
    });
};
const HarvestActionContainer = ({ children , ...props })=>{
    const { onReward  } = (0,_hooks_useHarvestFarm__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(props.pid);
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const onDone = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(()=>dispatch((0,state_farms__WEBPACK_IMPORTED_MODULE_7__/* .fetchFarmUserDataAsync */ .IV)({
            account,
            pids: [
                props.pid
            ],
            chainId
        })), [
        account,
        dispatch,
        chainId,
        props.pid
    ]);
    return children({
        ...props,
        onDone,
        onReward
    });
};
const HarvestAction = ({ pid , token , quoteToken , vaultPid , userData , userDataReady , proxyCakeBalance , lpSymbol , onReward , onDone ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const earningsBigNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userData.earnings);
    const cakePrice = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_10__/* .usePriceCakeBusd */ .Iu)();
    let earnings = _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_11__/* .BIG_ZERO */ .HW;
    let earningsBusd = 0;
    let displayBalance = userDataReady ? earnings.toFixed(5, (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default().ROUND_DOWN)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        width: 60
    });
    // If user didn't connect wallet default balance will be 0
    if (!earningsBigNumber.isZero()) {
        earnings = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__/* .getBalanceAmount */ .U4)(earningsBigNumber);
        earningsBusd = earnings.multipliedBy(cakePrice).toNumber();
        displayBalance = earnings.toFixed(5, (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default().ROUND_DOWN));
    }
    const toolTipBalance = !userDataReady ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        width: 60
    }) : earnings.isGreaterThan(new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(0.00001)) ? earnings.toFixed(5, (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default().ROUND_DOWN)) : `< 0.00001`;
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(`${toolTipBalance} ${t(`CAKE has been harvested to the farm booster contract and will be automatically sent to your wallet upon the next harvest.`)}`, {
        placement: "bottom"
    });
    const onClickHarvestButton = ()=>{
        if (vaultPid) {
            onPresentNonBscHarvestModal();
        } else {
            handleHarvest();
        }
    };
    const handleHarvest = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return onReward();
        });
        if (receipt?.status) {
            toastSuccess(`${t("Harvested")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your %symbol% earnings have been sent to your wallet!", {
                    symbol: "CAKE"
                })
            }));
            onDone?.();
        }
    };
    const [onPresentNonBscHarvestModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Farms_components_MultiChainHarvestModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        pid: pid,
        token: token,
        lpSymbol: lpSymbol,
        quoteToken: quoteToken,
        earningsBigNumber: earningsBigNumber,
        earningsBusd: earningsBusd
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .ActionContainer */ .sX, {
        style: {
            minHeight: 124.5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .ActionTitles */ .Ad, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "secondary",
                        fontSize: "12px",
                        pr: "4px",
                        children: "CAKE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: t("Earned")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .ActionContent */ .O6, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            proxyCakeBalance ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        ref: targetRef,
                                        decorationColor: "secondary",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                            children: displayBalance
                                        })
                                    }),
                                    tooltipVisible && tooltip
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                children: displayBalance
                            }),
                            earningsBusd > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                decimals: 2,
                                value: earningsBusd,
                                unit: " USD",
                                prefix: "~"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                        ml: "4px",
                        disabled: earnings.eq(0) || pendingTx || !userDataReady,
                        onClick: onClickHarvestButton,
                        children: pendingTx ? t("Harvesting") : t("Harvest")
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HarvestAction)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pK": () => (/* binding */ StakedContainer),
/* harmony export */   "sf": () => (/* binding */ ProxyStakedContainer)
/* harmony export */ });
/* unused harmony export useStakedActions */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(93314);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(33430);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39480);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7599);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74860);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36204);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44868);
/* harmony import */ var state_transactions_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52284);
/* harmony import */ var state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12238);
/* harmony import */ var state_global_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18770);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57268);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85207);
/* harmony import */ var utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3763);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5369);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56150);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9270);
/* harmony import */ var _hooks_useApproveFarm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(34039);
/* harmony import */ var _hooks_useStakeFarms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(82476);
/* harmony import */ var _hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85441);
/* harmony import */ var _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(65563);
/* harmony import */ var _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(4619);
/* harmony import */ var _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(4430);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(57159);
/* harmony import */ var _hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(26069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_6__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, state__WEBPACK_IMPORTED_MODULE_10__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_12__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_15__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_17__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_20__, components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_24__, _hooks_useStakeFarms__WEBPACK_IMPORTED_MODULE_26__, _hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_27__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_28__, _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_29__, _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_30__, _hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__]);
([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_6__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, state__WEBPACK_IMPORTED_MODULE_10__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_12__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_15__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_17__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_20__, components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_24__, _hooks_useStakeFarms__WEBPACK_IMPORTED_MODULE_26__, _hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_27__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_28__, _YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_29__, _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_30__, _hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


































const IconButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
    componentId: "sc-d8302b2f-0"
})`
  display: flex;
`;
const StyledActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionContainer */ .sX).withConfig({
    componentId: "sc-d8302b2f-1"
})`
  &:nth-child(3) {
    flex-basis: 100%;
  }
  min-height: 124.5px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    &:nth-child(3) {
      margin-top: 16px;
    }
  }
`;
function useStakedActions(lpContract, pid, vaultPid) {
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { onStake  } = (0,_hooks_useStakeFarms__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(pid, vaultPid);
    const { onUnstake  } = (0,_hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(pid, vaultPid);
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .TL)();
    const { onApprove  } = (0,_hooks_useApproveFarm__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(lpContract, chainId);
    const onDone = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(()=>dispatch((0,state_farms__WEBPACK_IMPORTED_MODULE_11__/* .fetchFarmUserDataAsync */ .IV)({
            account,
            pids: [
                pid
            ],
            chainId
        })), [
        account,
        pid,
        chainId,
        dispatch
    ]);
    return {
        onStake,
        onUnstake,
        onApprove,
        onDone
    };
}
const ProxyStakedContainer = ({ children , ...props })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_24__/* .useWeb3React */ .Ge)();
    const { lpAddress  } = props;
    const lpContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useERC20 */ .X_)(lpAddress);
    const { onStake , onUnstake , onApprove , onDone  } = (0,_YieldBooster_hooks_useProxyStakedActions__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(props.pid, lpContract);
    const { allowance  } = props.userData || {};
    const isApproved = account && allowance && allowance.isGreaterThan(0);
    return children({
        ...props,
        onStake,
        onDone,
        onUnstake,
        onApprove,
        isApproved
    });
};
const StakedContainer = ({ children , ...props })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_24__/* .useWeb3React */ .Ge)();
    const { lpAddress  } = props;
    const lpContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useERC20 */ .X_)(lpAddress);
    const { onStake , onUnstake , onApprove , onDone  } = useStakedActions(lpContract, props.pid, props.vaultPid);
    const { allowance  } = props.userData || {};
    const isApproved = account && allowance && allowance.isGreaterThan(0);
    return children({
        ...props,
        onStake,
        onDone,
        onUnstake,
        onApprove,
        isApproved
    });
};
const Staked = ({ pid , apr , vaultPid , multiplier , lpSymbol , lpLabel , lpAddress , lpTokenPrice , quoteToken , token , userDataReady , displayApr , lpTotalSupply , tokenAmountTotal , quoteTokenAmountTotal , userData , onDone , onStake , onUnstake , onApprove , isApproved ,  })=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .TL)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)();
    const pendingFarm = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useNonBscFarmPendingTransaction */ .UA)(lpAddress);
    const { boosterState  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_28__/* .YieldBoosterStateContext */ ._);
    const { isFirstTime  } = (0,_hooks_useFirstTimeCrossFarming__WEBPACK_IMPORTED_MODULE_32__/* .useFirstTimeCrossFarming */ .E)(vaultPid);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* .useToast */ .p)();
    const addTransaction = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useTransactionAdder */ .h7)();
    const { fetchWithCatchTxError , fetchTxResponse , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { tokenBalance , stakedBalance  } = userData || {};
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const cakePrice = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_15__/* .usePriceCakeBusd */ .Iu)();
    const { 0: bCakeMultiplier , 1: setBCakeMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(()=>null);
    const liquidityUrlPathParts = (0,utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)({
        quoteTokenAddress: quoteToken.address,
        tokenAddress: token.address,
        chainId
    });
    const addLiquidityUrl = `${config__WEBPACK_IMPORTED_MODULE_4__/* .BASE_ADD_LIQUIDITY_URL */ .wI}/${liquidityUrlPathParts}`;
    const isStakeReady = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>{
        return [
            "history",
            "archived"
        ].some((item)=>router.pathname.includes(item)) || pendingFarm.length > 0;
    }, [
        pendingFarm,
        router
    ]);
    const crossChainWarningText = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>{
        return isFirstTime ? t("A small amount of %nativeToken% is required for the first-time setup of cross-chain CAKE farming.", {
            nativeToken: native.symbol
        }) : t("For safety, cross-chain transactions will take around 30 minutes to confirm.");
    }, [
        isFirstTime,
        native,
        t
    ]);
    const handleStake = async (amount)=>{
        if (vaultPid) {
            await handleNonBscStake(amount);
        } else {
            const receipt = await fetchWithCatchTxError(()=>onStake(amount));
            if (receipt?.status) {
                toastSuccess(`${t("Staked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your funds have been staked in the farm")
                }));
                onDone();
            }
        }
    };
    const handleNonBscStake = async (amountValue)=>{
        const receipt = await fetchTxResponse(()=>onStake(amountValue));
        const amountAsBigNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_19___default())(amountValue).times(config__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
        const amount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_21__/* .formatLpBalance */ .O$)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_19___default())(amountAsBigNumber));
        if (receipt) {
            addTransaction(receipt, {
                type: "non-bsc-farm",
                translatableSummary: {
                    text: "Stake %amount% %lpSymbol% Token",
                    data: {
                        amount,
                        lpSymbol
                    }
                },
                nonBscFarm: {
                    type: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .NonBscFarmStepType.STAKE */ .Ly.STAKE,
                    status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING,
                    amount,
                    lpSymbol,
                    lpAddress,
                    steps: [
                        {
                            step: 1,
                            chainId,
                            tx: receipt.hash,
                            isFirstTime: !isFirstTime,
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        },
                        {
                            step: 2,
                            tx: "",
                            chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__.ChainId.BSC,
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        }, 
                    ]
                }
            });
            dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_14__/* .pickFarmTransactionTx */ .CF)({
                tx: receipt.hash,
                chainId
            }));
            onDone();
        }
    };
    const handleUnstake = async (amount)=>{
        if (vaultPid) {
            await handleNonBscUnStake(amount);
        } else {
            const receipt = await fetchWithCatchTxError(()=>onUnstake(amount));
            if (receipt?.status) {
                toastSuccess(`${t("Unstaked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your earnings have also been harvested to your wallet")
                }));
                onDone();
            }
        }
    };
    const handleNonBscUnStake = async (amountValue)=>{
        const receipt = await fetchTxResponse(()=>onUnstake(amountValue));
        const amountAsBigNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_19___default())(amountValue).times(config__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
        const amount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_21__/* .formatLpBalance */ .O$)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_19___default())(amountAsBigNumber));
        if (receipt) {
            addTransaction(receipt, {
                type: "non-bsc-farm",
                translatableSummary: {
                    text: "Unstake %amount% %lpSymbol% Token",
                    data: {
                        amount,
                        lpSymbol
                    }
                },
                nonBscFarm: {
                    type: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .NonBscFarmStepType.UNSTAKE */ .Ly.UNSTAKE,
                    status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING,
                    amount,
                    lpSymbol,
                    lpAddress,
                    steps: [
                        {
                            step: 1,
                            chainId,
                            tx: receipt.hash,
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        },
                        {
                            step: 2,
                            chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__.ChainId.BSC,
                            tx: "",
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        },
                        {
                            step: 3,
                            chainId,
                            tx: "",
                            status: state_transactions_actions__WEBPACK_IMPORTED_MODULE_13__/* .FarmTransactionStatus.PENDING */ .np.PENDING
                        }, 
                    ]
                }
            });
            dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_14__/* .pickFarmTransactionTx */ .CF)({
                tx: receipt.hash,
                chainId
            }));
            onDone();
        }
    };
    const bCakeCalculatorSlot = (calculatorBalance)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            targetInputBalance: calculatorBalance,
            earningTokenPrice: cakePrice.toNumber(),
            lpTotalSupply: lpTotalSupply,
            setBCakeMultiplier: setBCakeMultiplier
        });
    const [onPresentDeposit] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* .Farm.DepositModal */ .l.DepositModal, {
        account: account,
        pid: pid,
        lpTotalSupply: lpTotalSupply,
        max: tokenBalance,
        lpPrice: lpTokenPrice,
        lpLabel: lpLabel,
        apr: apr,
        displayApr: displayApr,
        stakedBalance: stakedBalance,
        onConfirm: handleStake,
        tokenName: lpSymbol,
        multiplier: multiplier,
        addLiquidityUrl: addLiquidityUrl,
        cakePrice: cakePrice,
        showActiveBooster: boosterState === _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_30__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE,
        bCakeMultiplier: bCakeMultiplier,
        bCakeCalculatorSlot: bCakeCalculatorSlot,
        showCrossChainFarmWarning: chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__.ChainId.BSC && chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__.ChainId.BSC_TESTNET,
        crossChainWarningText: crossChainWarningText
    }));
    const [onPresentWithdraw] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* .Farm.WithdrawModal */ .l.WithdrawModal, {
        showActiveBooster: boosterState === _YieldBooster_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_30__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE,
        max: stakedBalance,
        onConfirm: handleUnstake,
        tokenName: lpSymbol,
        showCrossChainFarmWarning: chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__.ChainId.BSC && chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_22__.ChainId.BSC_TESTNET
    }));
    const handleApprove = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return onApprove();
        });
        if (receipt?.status) {
            toastSuccess(t("Contract Enabled"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
            onDone();
        }
    }, [
        onApprove,
        t,
        toastSuccess,
        fetchWithCatchTxError,
        onDone
    ]);
    const [onPresentTransactionModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP, {
        initialView: components_Menu_UserMenu_WalletModal__WEBPACK_IMPORTED_MODULE_23__/* .WalletView.TRANSACTIONS */ .L9.TRANSACTIONS
    }));
    const onClickLoadingIcon = ()=>{
        const { length  } = pendingFarm;
        if (length) {
            if (length > 1) {
                onPresentTransactionModal();
            } else {
                dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_14__/* .pickFarmTransactionTx */ .CF)({
                    tx: pendingFarm[0].txid,
                    chainId
                }));
            }
        }
    };
    if (!account) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledActionContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionTitles */ .Ad, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: t("Start Farming")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        width: "100%"
                    })
                })
            ]
        });
    }
    if (isApproved) {
        if (stakedBalance.gt(0)) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledActionContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionTitles */ .Ad, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                bold: true,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                pr: "4px",
                                children: lpSymbol
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                bold: true,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: t("Staked")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionContent */ .O6, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* .Farm.StakedLP */ .l.StakedLP, {
                                stakedBalance: stakedBalance,
                                quoteTokenSymbol: quoteToken.symbol,
                                tokenSymbol: token.symbol,
                                lpTotalSupply: lpTotalSupply,
                                lpTokenPrice: lpTokenPrice,
                                tokenAmountTotal: tokenAmountTotal,
                                quoteTokenAmountTotal: quoteTokenAmountTotal,
                                pendingFarmLength: pendingFarm.length,
                                onClickLoadingIcon: onClickLoadingIcon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconButtonWrapper, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                                        mr: "6px",
                                        variant: "secondary",
                                        disabled: pendingFarm.length > 0,
                                        onClick: onPresentWithdraw,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                                            color: "primary",
                                            width: "14px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                                        variant: "secondary",
                                        onClick: onPresentDeposit,
                                        disabled: isStakeReady,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                            color: "primary",
                                            width: "14px"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledActionContainer, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionTitles */ .Ad, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                            bold: true,
                            textTransform: "uppercase",
                            color: "textSubtle",
                            fontSize: "12px",
                            pr: "4px",
                            children: t("Stake")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                            bold: true,
                            textTransform: "uppercase",
                            color: "secondary",
                            fontSize: "12px",
                            children: lpSymbol
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                        width: "100%",
                        onClick: onPresentDeposit,
                        variant: "secondary",
                        disabled: isStakeReady,
                        children: t("Stake LP")
                    })
                })
            ]
        });
    }
    if (!userDataReady) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledActionContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionTitles */ .Ad, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: t("Start Farming")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                        width: 180,
                        marginBottom: 28,
                        marginTop: 14
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledActionContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionTitles */ .Ad, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                    bold: true,
                    textTransform: "uppercase",
                    color: "textSubtle",
                    fontSize: "12px",
                    children: t("Enable Farm")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_31__/* .ActionContent */ .O6, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                    width: "100%",
                    disabled: pendingTx,
                    onClick: handleApprove,
                    variant: "secondary",
                    children: t("Enable")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Staked);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ad": () => (/* binding */ ActionTitles),
/* harmony export */   "O6": () => (/* binding */ ActionContent),
/* harmony export */   "sX": () => (/* binding */ ActionContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-376364f5-0"
})`
  padding: 16px;
  border: 2px solid ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 12px;
    /* max-height: 130px; */
  }

  ${({ theme  })=>theme.mediaQueries.xl} {
    margin-right: 0;
    margin-bottom: 0;
    /* max-height: 130px; */
  }
`;
const ActionTitles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-376364f5-1"
})`
  display: flex;
  margin-bottom: 8px;
`;
const ActionContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-376364f5-2"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


/***/ }),

/***/ 82708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-554acf73-0"
})`
  font-size: 12px;
  color: ${({ theme  })=>theme.colors.textSubtle};
  text-align: left;
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-554acf73-1"
})`
  min-height: 24px;
  display: flex;
  align-items: center;
`;
const CellLayout = ({ label ="" , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentContainer, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CellLayout);


/***/ }),

/***/ 30167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33231);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f9481682-0"
})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 8px;
  color: ${({ theme  })=>theme.colors.primary};

  ${({ theme  })=>theme.mediaQueries.sm} {
    padding-right: 0px;
  }
`;
const ArrowIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f9481682-1"
})`
  transform: ${({ toggled  })=>toggled ? "rotate(180deg)" : "rotate(0)"};
  height: 20px;
`;
const Details = ({ actionPanelToggled  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            !isDesktop && t("Details"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowIcon, {
                color: "primary",
                toggled: actionPanelToggled
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Amount = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-883b06dd-0"
})`
  color: ${({ earned , theme  })=>earned ? theme.colors.text : theme.colors.textDisabled};
  display: flex;
  align-items: center;
`;
const Earned = ({ earnings , userDataReady ,  })=>{
    if (userDataReady) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Amount, {
            earned: earnings,
            children: earnings.toLocaleString()
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Amount, {
        earned: 0,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            width: 60
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Earned);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57268);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__, components_TokenImage__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__, components_TokenImage__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const { StableFarmTag  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .Farm.Tags */ .l.Tags;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a7d9e45-0"
})`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme  })=>theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`;
const TokenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a7d9e45-1"
})`
  padding-right: 8px;
  width: 32px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    width: 40px;
  }
`;
const Farm = ({ token , quoteToken , label , pid , isReady , isStable ,  })=>{
    const { stakedBalance  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFarmUser */ .Dx)(pid);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const rawStakedBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getBalanceNumber */ .mW)(stakedBalance);
    const handleRenderFarming = ()=>{
        if (rawStakedBalance) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                color: "secondary",
                fontSize: "12px",
                bold: true,
                textTransform: "uppercase",
                children: t("Farming")
            });
        }
        return null;
    };
    if (!isReady) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    mr: "8px",
                    width: 32,
                    height: 32,
                    variant: "circle"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            width: 40,
                            height: 10,
                            mb: "4px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            width: 60,
                            height: 24
                        })
                    ]
                })
            ]
        });
    }
    const pairContainer = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_5__/* .TokenPairImage */ .q, {
                    variant: "inverted",
                    primaryToken: token,
                    secondaryToken: quoteToken,
                    width: 40,
                    height: 40
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    handleRenderFarming(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        bold: true,
                        children: label
                    })
                ]
            })
        ]
    });
    return isStable ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            pairContainer,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StableFarmTag, {
                mt: "4px"
            })
        ]
    }) : pairContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Farm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_latinise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93508);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85576);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _getDisplayApr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6774);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66424);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67859);
/* harmony import */ var _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Row__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__]);
([_Row__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-c224d04d-0"
})`
  width: 100%;
  background: ${({ theme  })=>theme.card.background};
  border-radius: 16px;
  margin: 16px 0px;
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
`;
const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-c224d04d-1"
})`
  overflow: visible;
  scroll-margin-top: 64px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_3___default().table.withConfig({
    componentId: "sc-c224d04d-2"
})`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
const TableBody = styled_components__WEBPACK_IMPORTED_MODULE_3___default().tbody.withConfig({
    componentId: "sc-c224d04d-3"
})`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`;
const TableContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-c224d04d-4"
})`
  position: relative;
`;
const FarmTable = ({ farms , cakePrice , userDataReady  })=>{
    const tableWrapperEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>_types__WEBPACK_IMPORTED_MODULE_9__/* .DesktopColumnSchema.map */ .X.map((column)=>({
                id: column.id,
                name: column.name,
                label: column.label,
                sort: (a, b)=>{
                    switch(column.name){
                        case "farm":
                            return b.id - a.id;
                        case "apr":
                            if (a.original.apr.value && b.original.apr.value) {
                                return Number(a.original.apr.value) - Number(b.original.apr.value);
                            }
                            return 0;
                        case "earned":
                            return a.original.earned.earnings - b.original.earned.earnings;
                        default:
                            return 1;
                    }
                },
                sortable: column.sortable
            })), []);
    const getFarmEarnings = (farm)=>{
        let earnings = _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_6__/* .BIG_ZERO */ .HW;
        const existingEarnings = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(farm.userData.earnings);
        if (farm.boosted) {
            const proxyEarnings = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(farm.userData?.proxy?.earnings);
            earnings = proxyEarnings.gt(0) ? proxyEarnings : existingEarnings;
        } else {
            earnings = existingEarnings;
        }
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(earnings);
    };
    const generateRow = (farm)=>{
        const { token , quoteToken  } = farm;
        const tokenAddress = token.address;
        const quoteTokenAddress = quoteToken.address;
        const lpLabel = farm.lpSymbol && farm.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE", "");
        const lowercaseQuery = (0,utils_latinise__WEBPACK_IMPORTED_MODULE_2__/* .latinise */ .b)(typeof query?.search === "string" ? query.search.toLowerCase() : "");
        const initialActivity = (0,utils_latinise__WEBPACK_IMPORTED_MODULE_2__/* .latinise */ .b)(lpLabel?.toLowerCase()) === lowercaseQuery;
        const row = {
            apr: {
                value: (0,_getDisplayApr__WEBPACK_IMPORTED_MODULE_11__/* .getDisplayApr */ .V)(farm.apr, farm.lpRewardsApr),
                pid: farm.pid,
                multiplier: farm.multiplier,
                lpLabel,
                lpSymbol: farm.lpSymbol,
                lpTokenPrice: farm.lpTokenPrice,
                tokenAddress,
                quoteTokenAddress,
                cakePrice,
                lpRewardsApr: farm.lpRewardsApr,
                originalValue: farm.apr
            },
            farm: {
                label: lpLabel,
                pid: farm.pid,
                token: farm.token,
                quoteToken: farm.quoteToken,
                isReady: farm.multiplier !== undefined,
                isStable: farm.isStable
            },
            earned: {
                earnings: getFarmEarnings(farm),
                pid: farm.pid
            },
            liquidity: {
                liquidity: farm?.liquidity
            },
            multiplier: {
                multiplier: farm.multiplier
            },
            type: farm.isCommunity ? "community" : "core",
            details: farm,
            initialActivity
        };
        return row;
    };
    const rowData = farms.map((farm)=>generateRow(farm));
    const generateSortedRow = (row)=>{
        // @ts-ignore
        const newRow = {};
        columns.forEach((column)=>{
            if (!(column.name in row)) {
                throw new Error(`Invalid row data, ${column.name} not found`);
            }
            newRow[column.name] = row[column.name];
        });
        newRow.initialActivity = row.initialActivity;
        return newRow;
    };
    const sortedRows = rowData.map(generateSortedRow);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        id: "farms-table",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableContainer, {
            id: "table-container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableWrapper, {
                ref: tableWrapperEl,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTable, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableBody, {
                        children: sortedRows.map((row)=>{
                            return row?.details?.boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                farm: row.details,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Row__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    ...row,
                                    userDataReady: userDataReady
                                })
                            }, `table-row-${row.farm.pid}`) : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                ...row,
                                userDataReady: userDataReady,
                                key: `table-row-${row.farm.pid}`
                            });
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FarmTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ReferenceElement = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-cf44f1b9-0"
})`
  display: inline-block;
`;
const LiquidityWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-cf44f1b9-1"
})`
  min-width: 110px;
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${({ theme  })=>theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-cf44f1b9-2"
})`
  display: flex;
  align-items: center;
`;
const Liquidity = ({ liquidity  })=>{
    const displayLiquidity = liquidity && liquidity.gt(0) ? `$${Number(liquidity).toLocaleString(undefined, {
        maximumFractionDigits: 0
    })}` : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: 60
    });
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(t("Total value of the funds in this farm’s liquidity pool"), {
        placement: "top-end",
        tooltipOffset: [
            20,
            10
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LiquidityWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: displayLiquidity
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReferenceElement, {
                ref: targetRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    color: "textSubtle"
                })
            }),
            tooltipVisible && tooltip
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Liquidity);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ReferenceElement = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2fce27a8-0"
})`
  display: inline-block;
`;
const MultiplierWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2fce27a8-1"
})`
  color: ${({ theme  })=>theme.colors.text};
  width: 36px;
  text-align: right;
  margin-right: 14px;

  ${({ theme  })=>theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2fce27a8-2"
})`
  display: flex;
  align-items: center;
`;
const Multiplier = ({ multiplier  })=>{
    const displayMultiplier = multiplier ? multiplier.toLowerCase() : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: 30
    });
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const tooltipContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: t("The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                my: "24px",
                children: t("For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: t("This amount is already included in all APR calculations for the farm.")
            })
        ]
    });
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(tooltipContent, {
        placement: "top-end",
        tooltipOffset: [
            20,
            10
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MultiplierWrapper, {
                children: displayMultiplier
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReferenceElement, {
                ref: targetRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    color: "textSubtle"
                })
            }),
            tooltipVisible && tooltip
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Multiplier);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66424:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var hooks_useDelayedUnmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99381);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57268);
/* harmony import */ var _Apr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76694);
/* harmony import */ var _Farm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78245);
/* harmony import */ var _Earned__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61426);
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30167);
/* harmony import */ var _Multiplier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94357);
/* harmony import */ var _Liquidity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85396);
/* harmony import */ var _Actions_ActionPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31803);
/* harmony import */ var _CellLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82708);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67859);
/* harmony import */ var _YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19315);
/* harmony import */ var _YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11816);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_farms_hooks__WEBPACK_IMPORTED_MODULE_5__, _Apr__WEBPACK_IMPORTED_MODULE_6__, _Farm__WEBPACK_IMPORTED_MODULE_7__, _Earned__WEBPACK_IMPORTED_MODULE_8__, _Details__WEBPACK_IMPORTED_MODULE_9__, _Multiplier__WEBPACK_IMPORTED_MODULE_10__, _Liquidity__WEBPACK_IMPORTED_MODULE_11__, _Actions_ActionPanel__WEBPACK_IMPORTED_MODULE_12__, _YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_15__, _YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__]);
([state_farms_hooks__WEBPACK_IMPORTED_MODULE_5__, _Apr__WEBPACK_IMPORTED_MODULE_6__, _Farm__WEBPACK_IMPORTED_MODULE_7__, _Earned__WEBPACK_IMPORTED_MODULE_8__, _Details__WEBPACK_IMPORTED_MODULE_9__, _Multiplier__WEBPACK_IMPORTED_MODULE_10__, _Liquidity__WEBPACK_IMPORTED_MODULE_11__, _Actions_ActionPanel__WEBPACK_IMPORTED_MODULE_12__, _YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_15__, _YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const { FarmAuctionTag , CoreTag  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .Farm.Tags */ .l.Tags;
const cells = {
    apr: _Apr__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    farm: _Farm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    earned: _Earned__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    details: _Details__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    multiplier: _Multiplier__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    liquidity: _Liquidity__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
};
const CellInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-130c569e-0"
})`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme  })=>theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`;
const StyledTr = styled_components__WEBPACK_IMPORTED_MODULE_2___default().tr.withConfig({
    componentId: "sc-130c569e-1"
})`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme  })=>theme.colors.disabled};
  }
`;
const EarnedMobileCell = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
    componentId: "sc-130c569e-2"
})`
  padding: 16px 0 24px 16px;
`;
const AprMobileCell = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
    componentId: "sc-130c569e-3"
})`
  padding-top: 16px;
  padding-bottom: 24px;
`;
const FarmMobileCell = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
    componentId: "sc-130c569e-4"
})`
  padding-top: 24px;
`;
const Row = (props)=>{
    const { details , initialActivity , multiplier  } = props;
    const { stakedBalance , proxy , tokenBalance  } = props.details.userData;
    const userDataReady = multiplier.multiplier !== undefined;
    const hasSetInitialValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const hasStakedAmount = !!(0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFarmUser */ .Dx)(details.pid).stakedBalance.toNumber();
    const { 0: actionPanelExpanded , 1: setActionPanelExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(hasStakedAmount);
    const shouldRenderChild = (0,hooks_useDelayedUnmount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(actionPanelExpanded, 300);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const toggleActionPanel = ()=>{
        setActionPanelExpanded(!actionPanelExpanded);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setActionPanelExpanded(hasStakedAmount);
    }, [
        hasStakedAmount
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (initialActivity && hasSetInitialValue.current === false) {
            setActionPanelExpanded(initialActivity);
            hasSetInitialValue.current = true;
        }
    }, [
        initialActivity
    ]);
    const { isDesktop , isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const isSmallerScreen = !isDesktop;
    const tableSchema = isSmallerScreen ? _types__WEBPACK_IMPORTED_MODULE_14__/* .MobileColumnSchema */ .W : _types__WEBPACK_IMPORTED_MODULE_14__/* .DesktopColumnSchema */ .X;
    const columnNames = tableSchema.map((column)=>column.name);
    const handleRenderRow = ()=>{
        if (!isMobile) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTr, {
                onClick: toggleActionPanel,
                children: Object.keys(props).map((key)=>{
                    const columnIndex = columnNames.indexOf(key);
                    if (columnIndex === -1) {
                        return null;
                    }
                    switch(key){
                        case "type":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: userDataReady ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CellInner, {
                                    style: {
                                        width: "140px"
                                    },
                                    children: [
                                        props[key] === "community" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmAuctionTag, {
                                            scale: "sm"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoreTag, {
                                            scale: "sm"
                                        }),
                                        props?.details?.boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            scale: "sm",
                                            ml: "16px"
                                        }) : null
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    width: 60,
                                    height: 24
                                })
                            }, key);
                        case "details":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CellInner, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CellLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Details__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            actionPanelToggled: actionPanelExpanded
                                        })
                                    })
                                })
                            }, key);
                        case "apr":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CellInner, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CellLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        label: t("APR"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Apr__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                ...props.apr,
                                                hideButton: isSmallerScreen,
                                                strikethrough: props?.details?.boosted,
                                                boosted: props?.details?.boosted
                                            }),
                                            props?.details?.boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                lpRewardsApr: props?.apr?.lpRewardsApr,
                                                apr: props?.apr?.originalValue,
                                                pid: props.farm?.pid,
                                                lpTotalSupply: props.details?.lpTotalSupply,
                                                userBalanceInFarm: stakedBalance.plus(tokenBalance).gt(0) ? stakedBalance.plus(tokenBalance) : proxy.stakedBalance.plus(proxy.tokenBalance)
                                            }) : null
                                        ]
                                    })
                                })
                            }, key);
                        default:
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CellInner, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CellLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        label: t(tableSchema[columnIndex].label),
                                        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(cells[key], {
                                            ...props[key],
                                            userDataReady
                                        })
                                    })
                                })
                            }, key);
                    }
                })
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: toggleActionPanel,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmMobileCell, {
                        colSpan: 3,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Farm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    ...props.farm
                                }),
                                props.type === "community" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmAuctionTag, {
                                    marginRight: "16px",
                                    scale: "sm"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    style: {
                                        marginRight: "16px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoreTag, {
                                            scale: "sm"
                                        }),
                                        props?.details?.boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            style: {
                                                verticalAlign: "bottom"
                                            },
                                            scale: "sm",
                                            ml: "4px"
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTr, {
                    onClick: toggleActionPanel,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            width: "33%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EarnedMobileCell, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CellLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    label: t("Earned"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Earned__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        ...props.earned,
                                        userDataReady: userDataReady
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            width: "33%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AprMobileCell, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CellLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    label: t("APR"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Apr__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            ...props.apr,
                                            hideButton: true,
                                            strikethrough: props?.details?.boosted,
                                            boosted: props?.details?.boosted
                                        }),
                                        props?.details?.boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_BoostedApr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            lpRewardsApr: props?.apr?.lpRewardsApr,
                                            apr: props?.apr?.originalValue,
                                            pid: props.farm?.pid,
                                            lpTotalSupply: props.details?.lpTotalSupply,
                                            userBalanceInFarm: stakedBalance.plus(tokenBalance).gt(0) ? stakedBalance.plus(tokenBalance) : proxy.stakedBalance.plus(proxy.tokenBalance)
                                        }) : null
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            width: "33%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CellInner, {
                                style: {
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Details__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    actionPanelToggled: actionPanelExpanded
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            handleRenderRow(),
            shouldRenderChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    colSpan: 7,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Actions_ActionPanel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        ...props,
                        expanded: actionPanelExpanded
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35643);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78950);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46684);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(11218);
/* harmony import */ var components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10886);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24671);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27156);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36576);
/* harmony import */ var views_Farms_hooks_useFarmCProxyAddress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7817);
/* harmony import */ var views_Farms_hooks_useNonBscHarvestFarm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46206);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__, components_TokenImage__WEBPACK_IMPORTED_MODULE_9__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_10__, components_Card__WEBPACK_IMPORTED_MODULE_12__, components_Toast__WEBPACK_IMPORTED_MODULE_13__, views_Farms_hooks_useFarmCProxyAddress__WEBPACK_IMPORTED_MODULE_14__, views_Farms_hooks_useNonBscHarvestFarm__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__, components_TokenImage__WEBPACK_IMPORTED_MODULE_9__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_10__, components_Card__WEBPACK_IMPORTED_MODULE_12__, components_Toast__WEBPACK_IMPORTED_MODULE_13__, views_Farms_hooks_useFarmCProxyAddress__WEBPACK_IMPORTED_MODULE_14__, views_Farms_hooks_useNonBscHarvestFarm__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const TokenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-bc52e44b-0"
})`
  padding-right: 8px;
  width: 32px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    width: 40px;
  }
`;
const MultiChainHarvestModal = ({ pid , token , lpSymbol , quoteToken , earningsBigNumber , earningsBusd , onDismiss ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .useToast */ .p)();
    const { account , chainId , isWrongNetwork  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { switchNetworkAsync  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__/* .useSwitchNetwork */ .g)();
    const { cProxyAddress  } = (0,views_Farms_hooks_useFarmCProxyAddress__WEBPACK_IMPORTED_MODULE_14__/* .useFarmCProxyAddress */ .b)(account, chainId);
    const { onReward  } = (0,views_Farms_hooks_useNonBscHarvestFarm__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(pid, cProxyAddress);
    const { fetchWithCatchTxError , loading: isPending  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const earnings = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getBalanceAmount */ .U4)(earningsBigNumber);
    const displayBalance = earnings.toFixed(5, bignumber_js__WEBPACK_IMPORTED_MODULE_3__.BigNumber.ROUND_DOWN);
    const isTestnet = state_farms__WEBPACK_IMPORTED_MODULE_16__/* .farmFetcher.isTestnet */ .H.isTestnet(chainId);
    const network = isTestnet ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC_TESTNET : _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC;
    const isBscNetwork = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>chainId === network, [
        chainId,
        network
    ]);
    const handleCancel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onDismiss?.();
    }, [
        onDismiss
    ]);
    const handleSwitchNetwork = ()=>{
        switchNetworkAsync(network);
    };
    const handleHarvest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>onReward());
        if (receipt?.status) {
            toastSuccess(`${t("Harvested")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_13__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your %symbol% earnings have been sent to your wallet!", {
                    symbol: "CAKE"
                })
            }));
            handleCancel();
        }
    }, [
        t,
        onReward,
        fetchWithCatchTxError,
        toastSuccess,
        handleCancel
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
        title: isBscNetwork ? t("Harvest now!") : t("Switch chain to harvest"),
        style: {
            maxWidth: "340px"
        },
        onDismiss: handleCancel,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    mb: "16px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenWrapper, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_9__/* .TokenPairImage */ .q, {
                                width: 40,
                                height: 40,
                                variant: "inverted",
                                primaryToken: token,
                                secondaryToken: quoteToken
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            bold: true,
                            fontSize: "24px",
                            children: lpSymbol
                        })
                    ]
                }),
                !isBscNetwork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    mb: "16px",
                    variant: "warning",
                    icon: false,
                    p: "8px 12px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* .MessageText */ .Y, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                            gap: "12px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    gap: "6px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_10__/* .ChainLogo */ .E, {
                                            chainId: chainId
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                            color: "#D67E0A"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_10__/* .ChainLogo */ .E, {
                                            chainId: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: t("Harvest on BNB Smart Chain")
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_12__/* .LightGreyCard */ .m5, {
                    padding: "16px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                            mb: "8px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    color: "secondary",
                                    bold: true,
                                    as: "span",
                                    children: t("CAKE")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    ml: "4px",
                                    bold: true,
                                    as: "span",
                                    children: t("Earned")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                    fontSize: "20px",
                                    lineHeight: "110%",
                                    bold: true,
                                    children: displayBalance
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                    mb: "16px",
                                    prefix: "~",
                                    unit: " USD",
                                    decimals: 2,
                                    value: earningsBusd,
                                    fontSize: "12px",
                                    color: "textSubtle"
                                }),
                                isBscNetwork ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                    width: "100%",
                                    variant: "secondary",
                                    disabled: isPending || !account || isWrongNetwork,
                                    endIcon: isPending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                        spin: true,
                                        color: "currentColor"
                                    }) : null,
                                    onClick: handleHarvest,
                                    children: isPending ? t("Harvesting") : t("Harvest")
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                    width: "100%",
                                    variant: "secondary",
                                    onClick: handleSwitchNetwork,
                                    children: t("Switch to BNB Smart Chain")
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiChainHarvestModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94529:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-33d0425a-0"
})`
  margin-right: 4px;
`;
const BoosterTooltip = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            t(`Boost multiplier is calculated based on the staking conditions from both Farms and fixed-term CAKE syrup pool and will be automatically updated upon user actions.`),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                href: "https://docs.pancakeswap.finance/products/yield-farming/bcake/faq#how-are-the-bcake-multipliers-calculated",
                external: true,
                children: t("Learn More")
            })
        ]
    });
};
const ActionButton = ({ title , description , button , ...props })=>{
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    let btn = null;
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoosterTooltip, {}), {
        placement: "top",
        ...isMobile && {
            hideTimeout: 1500
        }
    });
    if (button) {
        btn = button;
    } else if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(props)) {
        btn = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            ...props
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                mr: "4px",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ref: targetRef,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    width: "20px",
                                    height: "20px"
                                })
                            }),
                            tooltipVisible && tooltip
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "12px",
                        children: description
                    })
                ]
            }),
            btn
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11218);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useBoosterFarmHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78609);
/* harmony import */ var _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83117);
/* harmony import */ var _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4430);
/* harmony import */ var _hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16406);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94529);
/* harmony import */ var _CreateProxyButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41732);
/* harmony import */ var _MigrateActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76985);
/* harmony import */ var _ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useBoosterFarmHandlers__WEBPACK_IMPORTED_MODULE_3__, _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_4__, _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__, _hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_6__, _ActionButton__WEBPACK_IMPORTED_MODULE_7__, _CreateProxyButton__WEBPACK_IMPORTED_MODULE_8__, _MigrateActionButton__WEBPACK_IMPORTED_MODULE_9__, _ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_useBoosterFarmHandlers__WEBPACK_IMPORTED_MODULE_3__, _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_4__, _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__, _hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_6__, _ActionButton__WEBPACK_IMPORTED_MODULE_7__, _CreateProxyButton__WEBPACK_IMPORTED_MODULE_8__, _MigrateActionButton__WEBPACK_IMPORTED_MODULE_9__, _ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const BoostedAction = ({ farmPid , title , desc , userBalanceInFarm , lpTotalSupply ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { boosterState , refreshActivePool , refreshProxyAddress , proxyAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_10__/* .YieldBoosterStateContext */ ._);
    const { isConfirming , ...handlers } = (0,_hooks_useBoosterFarmHandlers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(farmPid, refreshActivePool);
    const boostMultiplierFromSC = (0,_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        pid: farmPid,
        boosterState,
        proxyAddress
    });
    const boostedMultiplierFromFE = (0,_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_4__/* .useGetBoostedMultiplier */ .ax)(userBalanceInFarm, lpTotalSupply);
    const boostMultiplier = userBalanceInFarm.eq(0) ? boostMultiplierFromSC : boostedMultiplierFromFE;
    const boostMultiplierDisplay = boostMultiplier.toLocaleString(undefined, {
        maximumFractionDigits: 3
    });
    const renderBtn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        switch(boosterState){
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.UNCONNECTED */ .M.UNCONNECTED:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${t("Up to")} ${boostMultiplierDisplay}x`,
                    description: t("Connect wallet to activate yield booster")
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.NO_LOCKED */ .M.NO_LOCKED:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${t("Up to")} ${boostMultiplierDisplay}x`,
                    description: t("Lock CAKE to activate yield booster"),
                    style: {
                        whiteSpace: "nowrap"
                    },
                    button: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        to: "/pools",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            children: [
                                " ",
                                t("Go to Pool")
                            ]
                        })
                    })
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.LOCKED_END */ .M.LOCKED_END:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${t("Up to")} ${boostMultiplierDisplay}x`,
                    description: t("Lock CAKE is ended. Re-lock CAKE to activate yield booster"),
                    style: {
                        whiteSpace: "nowrap"
                    },
                    button: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        to: "/pools",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            children: [
                                " ",
                                t("Go to Pool")
                            ]
                        })
                    })
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.NO_PROXY_CREATED */ .M.NO_PROXY_CREATED:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${boostMultiplierDisplay}x`,
                    description: t("One-time setup is required for activating farm yield boosters"),
                    button: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateProxyButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        onDone: refreshProxyAddress,
                        width: "auto"
                    })
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.NO_MIGRATE */ .M.NO_MIGRATE:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${boostMultiplierDisplay}x`,
                    description: t("Migration required to activate boost"),
                    button: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MigrateActionButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        pid: farmPid
                    })
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.NO_LP */ .M.NO_LP:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${boostMultiplierDisplay}x`,
                    description: t("Stake LP tokens to start boosting"),
                    disabled: true,
                    children: t("Boost")
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.DEACTIVE */ .M.DEACTIVE:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    disabled: isConfirming,
                    onClick: handlers.activate,
                    title: `${boostMultiplierDisplay}x`,
                    isLoading: isConfirming,
                    description: t("Yield booster available"),
                    endIcon: isConfirming && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        spin: true,
                        color: "currentColor"
                    }),
                    children: t("Boost")
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE:
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.ACTIVE_AND_NO_LP */ .M.ACTIVE_AND_NO_LP:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    disabled: isConfirming,
                    onClick: handlers.deactivate,
                    title: `${boostMultiplierDisplay}x`,
                    isLoading: isConfirming,
                    description: t("Active"),
                    endIcon: isConfirming && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        spin: true,
                        color: "currentColor"
                    }),
                    children: t("Unset")
                });
            case _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.MAX */ .M.MAX:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: `${boostMultiplierDisplay}x`,
                    description: t("Unset other boosters to activate"),
                    disabled: true,
                    children: t("Boost")
                });
            default:
                return null;
        }
    }, [
        boosterState,
        t,
        handlers.activate,
        handlers.deactivate,
        isConfirming,
        farmPid,
        refreshProxyAddress,
        boostMultiplierDisplay, 
    ]);
    let status = null;
    if ([
        _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.NO_MIGRATE */ .M.NO_MIGRATE,
        _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.DEACTIVE */ .M.DEACTIVE
    ].includes(boosterState)) {
        status = t("Ready");
    } else if ([
        _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE,
        _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_5__/* .YieldBoosterState.ACTIVE_AND_NO_LP */ .M.ACTIVE_AND_NO_LP
    ].includes(boosterState)) {
        status = t("Active");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            title && title(status),
            desc && desc(renderBtn())
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoostedAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94207);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45366);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var _hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16406);
/* harmony import */ var _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83117);
/* harmony import */ var _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4430);
/* harmony import */ var _ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_5__, _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_6__, _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_7__, _ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_5__, _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_6__, _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_7__, _ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function BoostedApr(props) {
    const { lpRewardsApr , apr , pid , userBalanceInFarm , lpTotalSupply , ...rest } = props;
    const { boosterState , proxyAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_8__/* .YieldBoosterStateContext */ ._);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const boostedAprFromFE = (0,_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(userBalanceInFarm, lpTotalSupply, apr, lpRewardsApr);
    const multiplier = (0,_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        pid,
        boosterState,
        proxyAddress
    });
    const boostedAprFromSC = !(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(multiplier) && !(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(apr) && (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(apr) * Number(multiplier) + (!(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(lpRewardsApr) ? lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(lpRewardsApr) : 0)) || "0";
    const msg = boosterState === _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_7__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE ? `${boostedAprFromSC}%` : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                bold: true,
                color: "success",
                ...rest,
                fontSize: 14,
                display: "inline-block",
                mr: "3px",
                children: t("Up to")
            }),
            `${userBalanceInFarm.eq(0) ? boostedAprFromSC : boostedAprFromFE}%`
        ]
    });
    // if (boostedAPR === '0') {
    //   return null
    // }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                m: "4px",
                color: "success"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                bold: true,
                color: "success",
                ...rest,
                fontSize: 16,
                children: msg
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(BoostedApr));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94207);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const BoostedTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "success",
        style: {
            background: "none"
        },
        outline: true,
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: "18px",
            color: "success",
            mr: "4px"
        }),
        ...props,
        children: t("Boosted")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(BoostedTag));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36576);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74860);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36204);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44868);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57268);
/* harmony import */ var _hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85441);
/* harmony import */ var _BCakeMigrateModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_5__, state__WEBPACK_IMPORTED_MODULE_6__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__, _hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_9__, _BCakeMigrateModal__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useContract__WEBPACK_IMPORTED_MODULE_5__, state__WEBPACK_IMPORTED_MODULE_6__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__, _hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_9__, _BCakeMigrateModal__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const MigrateActionButton = ({ pid  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .useToast */ .p)();
    const { fetchWithCatchTxError  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { onUnstake  } = (0,_hooks_useUnstakeFarms__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(pid);
    const { stakedBalance  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useFarmUser */ .Dx)(pid);
    const { lpAddress  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useFarmFromPid */ .f6)(pid);
    const lpContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_5__/* .useERC20 */ .X_)(lpAddress);
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const handleUnstakeWithCallback = async (amount, callback)=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return onUnstake(amount);
        });
        if (receipt?.status) {
            toastSuccess(`${t("Unstaked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your earnings have also been harvested to your wallet")
            }));
            callback();
            dispatch((0,state_farms__WEBPACK_IMPORTED_MODULE_7__/* .fetchFarmUserDataAsync */ .IV)({
                account,
                pids: [
                    pid
                ],
                chainId
            }));
        }
    };
    const [onPresentMigrate] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BCakeMigrateModal__WEBPACK_IMPORTED_MODULE_10__/* .BCakeMigrateModal */ .et, {
        pid: pid,
        stakedBalance: stakedBalance,
        lpContract: lpContract,
        onUnStack: handleUnstakeWithCallback
    }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        onClick: onPresentMigrate,
        children: t("Migrate")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MigrateActionButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74860);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78950);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_1__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_2__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_1__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useBoosterFarmHandlers = (farmPid, onDone)=>{
    const farmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useBCakeFarmBoosterContract */ .gh)();
    const { fetchWithCatchTxError , loading: isConfirming  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_3__/* .useCallWithMarketGasPrice */ .r)();
    const activate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return callWithMarketGasPrice(farmBoosterContract, "activate", [
                farmPid
            ]);
        });
        if (receipt?.status && onDone) {
            onDone();
        }
    }, [
        farmPid,
        farmBoosterContract,
        callWithMarketGasPrice,
        fetchWithCatchTxError,
        onDone
    ]);
    const deactivate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return callWithMarketGasPrice(farmBoosterContract, "deactive", [
                farmPid
            ]);
        });
        if (receipt?.status && onDone) {
            onDone();
        }
    }, [
        farmPid,
        farmBoosterContract,
        callWithMarketGasPrice,
        fetchWithCatchTxError,
        onDone
    ]);
    return {
        activate,
        deactivate,
        isConfirming
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBoosterFarmHandlers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65342);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30433);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12895);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62704);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useProxyCAKEBalance = ()=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { proxyAddress  } = (0,views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_4__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const cakeContract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getCakeContract */ .XT)();
    const { data , mutate  } = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__/* .useSWRContract */ .Av)([
        cakeContract,
        "balanceOf",
        [
            proxyAddress
        ]
    ]);
    return {
        refreshProxyCakeBalance: mutate,
        proxyCakeBalance: data ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceNumber */ .mW)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_5___default())(data.toString())) : 0
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProxyCAKEBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useProxyStakedActions)
/* harmony export */ });
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74860);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36204);
/* harmony import */ var utils_calls_farms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54221);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44868);
/* harmony import */ var views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62704);
/* harmony import */ var _hooks_useApproveFarm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34039);
/* harmony import */ var _useProxyCAKEBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31019);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_0__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, state__WEBPACK_IMPORTED_MODULE_3__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__, _useProxyCAKEBalance__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_0__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, state__WEBPACK_IMPORTED_MODULE_3__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__, _useProxyCAKEBalance__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function useProxyStakedActions(pid, lpContract) {
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { proxyAddress  } = (0,views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const bCakeProxy = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useBCakeProxyContract */ .DE)(proxyAddress);
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const { proxyCakeBalance , refreshProxyCakeBalance  } = (0,_useProxyCAKEBalance__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const onDone = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        refreshProxyCakeBalance();
        dispatch((0,state_farms__WEBPACK_IMPORTED_MODULE_5__/* .fetchFarmUserDataAsync */ .IV)({
            account,
            pids: [
                pid
            ],
            chainId,
            proxyAddress
        }));
    }, [
        account,
        proxyAddress,
        chainId,
        pid,
        dispatch,
        refreshProxyCakeBalance
    ]);
    const { onApprove  } = (0,_hooks_useApproveFarm__WEBPACK_IMPORTED_MODULE_7__/* .useApproveBoostProxyFarm */ .J)(lpContract, proxyAddress);
    const onStake = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>(0,utils_calls_farms__WEBPACK_IMPORTED_MODULE_4__/* .stakeFarm */ .AQ)(bCakeProxy, pid, value), [
        bCakeProxy,
        pid
    ]);
    const onUnstake = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>(0,utils_calls_farms__WEBPACK_IMPORTED_MODULE_4__/* .unstakeFarm */ .dU)(bCakeProxy, pid, value), [
        bCakeProxy,
        pid
    ]);
    const onReward = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>(0,utils_calls_farms__WEBPACK_IMPORTED_MODULE_4__/* .harvestFarm */ .sA)(bCakeProxy, pid), [
        bCakeProxy,
        pid
    ]);
    return {
        onStake,
        onUnstake,
        onReward,
        onApprove,
        onDone,
        proxyCakeBalance
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ MobileColumnSchema),
/* harmony export */   "X": () => (/* binding */ DesktopColumnSchema)
/* harmony export */ });
const MobileColumnSchema = [
    {
        id: 1,
        name: "farm",
        sortable: true,
        label: ""
    },
    {
        id: 2,
        name: "earned",
        sortable: true,
        label: "Earned"
    },
    {
        id: 3,
        name: "apr",
        sortable: true,
        label: "APR"
    },
    {
        id: 6,
        name: "details",
        sortable: true,
        label: ""
    }, 
];
const DesktopColumnSchema = [
    {
        id: 1,
        name: "farm",
        sortable: true,
        label: ""
    },
    {
        id: 2,
        name: "type",
        sortable: false,
        label: ""
    },
    {
        id: 3,
        name: "earned",
        sortable: true,
        label: "Earned"
    },
    {
        id: 4,
        name: "apr",
        sortable: true,
        label: "APR"
    },
    {
        id: 5,
        name: "liquidity",
        sortable: true,
        label: "Liquidity"
    },
    {
        id: 6,
        name: "multiplier",
        sortable: true,
        label: "Multiplier"
    },
    {
        id: 7,
        name: "details",
        sortable: true,
        label: ""
    }, 
];


/***/ }),

/***/ 7817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useFarmCProxyAddress)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15941);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_farms_fetchFarmUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91367);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useFarmCProxyAddress = (account, chainId)=>{
    const multiCallChainId = state_farms__WEBPACK_IMPORTED_MODULE_3__/* .farmFetcher.isTestnet */ .H.isTestnet(chainId) ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC_TESTNET : _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC;
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(account && chainId && [
        "proxyAddress"
    ], async ()=>(0,state_farms_fetchFarmUser__WEBPACK_IMPORTED_MODULE_2__/* .fetchCProxyAddress */ .gs)(account, multiCallChainId));
    return {
        cProxyAddress: data
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useFirstTimeCrossFarming)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15941);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useFirstTimeCrossFarming = (vaultPid)=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const crossFarmingAddress = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getCrossFarmingSenderContract */ .bd)(null, chainId);
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(account && vaultPid && chainId && [
        "isFirstTimeCrossFarming"
    ], async ()=>{
        const firstTimeDeposit = await crossFarmingAddress.is1st(account);
        return !firstTimeDeposit;
    });
    return {
        isFirstTime: data
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72179);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useHarvestFarm = (farmPid)=>{
    const masterChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useMasterchef */ .y8)();
    const handleHarvest = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        return (0,utils_calls__WEBPACK_IMPORTED_MODULE_1__/* .harvestFarm */ .sA)(masterChefContract, farmPid);
    }, [
        farmPid,
        masterChefContract
    ]);
    return {
        onReward: handleHarvest
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHarvestFarm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_1__]);
hooks_useContract__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useNonBscHarvestFarm = (farmPid, cProxyAddress)=>{
    const contract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useCrossFarmingProxy */ .GT)(cProxyAddress);
    const handleHarvest = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        return contract.harvest(farmPid);
    }, [
        contract,
        farmPid
    ]);
    return {
        onReward: handleHarvest
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNonBscHarvestFarm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* reexport safe */ _Farms__WEBPACK_IMPORTED_MODULE_1__.G),
/* harmony export */   "S": () => (/* binding */ FarmsPageLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Farms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Farms__WEBPACK_IMPORTED_MODULE_1__]);
_Farms__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FarmsPageLayout = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Farms__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: children
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ CopyAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CopyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64313);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__, _Box__WEBPACK_IMPORTED_MODULE_3__, _CopyButton__WEBPACK_IMPORTED_MODULE_4__]);
([_Box__WEBPACK_IMPORTED_MODULE_2__, _Box__WEBPACK_IMPORTED_MODULE_3__, _CopyButton__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-7bc01336-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.dropdown};
  border-radius: 16px;
  position: relative;
`;
const Address = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-7bc01336-1"
})`
  flex: 1;
  position: relative;
  padding-left: 16px;

  & > input {
    background: transparent;
    border: 0;
    color: ${({ theme  })=>theme.colors.text};
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    background: linear-gradient(
      to right,
      ${({ theme  })=>theme.colors.background}00,
      ${({ theme  })=>theme.colors.background}E6
    );
    content: "";
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`;
const CopyAddress = ({ account , tooltipMessage , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        position: "relative",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Address, {
                    title: account,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        readOnly: true,
                        value: account
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    margin: "12px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CopyButton__WEBPACK_IMPORTED_MODULE_4__/* .CopyButton */ .q, {
                        width: "24px",
                        text: account,
                        tooltipMessage: tooltipMessage,
                        tooltipTop: -40
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36394);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _copyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16499);





const Tooltip = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b990ce65-0"
})`
  display: ${({ isTooltipDisplayed  })=>isTooltipDisplayed ? "inline" : "none"};
  position: absolute;
  padding: 8px;
  top: ${({ tooltipTop  })=>`${tooltipTop}px`};
  right: ${({ tooltipRight  })=>tooltipRight ? `${tooltipRight}px` : 0};
  text-align: center;
  font-size: ${({ tooltipFontSize  })=>`${tooltipFontSize}px` ?? 0};
  background-color: ${({ theme  })=>theme.colors.contrast};
  color: ${({ theme  })=>theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
  width: max-content;
`;
const CopyButton = ({ text , tooltipMessage , width , tooltipTop , tooltipRight , tooltipFontSize , buttonColor ="primary" , ...props })=>{
    const { 0: isTooltipDisplayed , 1: setIsTooltipDisplayed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const displayTooltip = ()=>{
        setIsTooltipDisplayed(true);
        setTimeout(()=>{
            setIsTooltipDisplayed(false);
        }, 1000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                style: {
                    cursor: "pointer"
                },
                color: buttonColor,
                width: width,
                onClick: ()=>(0,_copyText__WEBPACK_IMPORTED_MODULE_4__/* .copyText */ .z)(text, displayTooltip),
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tooltip, {
                isTooltipDisplayed: isTooltipDisplayed,
                tooltipTop: tooltipTop,
                tooltipRight: tooltipRight,
                tooltipFontSize: tooltipFontSize,
                children: tooltipMessage
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ copyText)
/* harmony export */ });
const copyText = (text, cb)=>{
    if (navigator.clipboard && navigator.permissions) {
        navigator.clipboard.writeText(text).then(cb);
    } else if (document.queryCommandSupported("copy")) {
        const ele = document.createElement("textarea");
        ele.value = text;
        document.body.appendChild(ele);
        ele.select();
        document.execCommand("copy");
        document.body.removeChild(ele);
        cb?.();
    }
};


/***/ }),

/***/ 65624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65474);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33231);






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f6ef6042-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme  })=>theme.colors.primary};
  }
`;
const ExpandableSectionButton = ({ onClick , expanded =false ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const handleOnClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>onClick?.(), [
        onClick
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        "aria-label": t("Hide or show expandable content"),
        role: "button",
        onClick: handleOnClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: "primary",
                bold: true,
                children: expanded ? t("Hide") : t("Details")
            }),
            expanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandableSectionButton);


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

/***/ 36394:
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
            d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"
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


/***/ })

};
;
//# sourceMappingURL=2157.js.map