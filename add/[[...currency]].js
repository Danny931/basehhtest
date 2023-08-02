"use strict";
(() => {
var exports = {};
exports.id = 6619;
exports.ids = [6619,2179];
exports.modules = {

/***/ 49384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ CommitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41774);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82451);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76166);
/* harmony import */ var _NetworkModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96081);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__, _NetworkModal__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__, _NetworkModal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const wrongNetworkProps = {
    variant: "danger",
    disabled: false,
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: "Wrong Network"
    })
};
const CommitButton = (props)=>{
    const { isWrongNetwork  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__/* .useActiveChainId */ .g)();
    const [switchNetworkLoading] = (0,hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__/* .useSwitchNetworkLoading */ .c)();
    const setHideWrongNetwork = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useSetAtom)(_NetworkModal__WEBPACK_IMPORTED_MODULE_4__/* .hideWrongNetworkModalAtom */ .v);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...props,
        onClick: (e)=>{
            if (isWrongNetwork) {
                setHideWrongNetwork(false);
            } else {
                props.onClick?.(e);
            }
        },
        ...switchNetworkLoading && {
            disabled: true
        },
        ...isWrongNetwork && wrongNetworkProps
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ZapCheckbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59536);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const ZapCheckBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
    componentId: "sc-4a3af06d-0"
})`
  display: grid;
  place-content: center;
  background: ${({ theme  })=>theme.colors.background};
  border-radius: 8px 0px 0px 0px;
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-right: none;
  width: 40px;
`;
const ZapCheckbox = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ZapCheckBoxWrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            scale: "sm",
            ...props
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ CurrencySelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49019);
/* harmony import */ var components_SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20917);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33472);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9270);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87573);
/* harmony import */ var _Layout_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_2__, state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, _Logo__WEBPACK_IMPORTED_MODULE_8__, _Layout_Row__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([components_SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_2__, state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, _Logo__WEBPACK_IMPORTED_MODULE_8__, _Layout_Row__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const DropDownHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-75fec827-0"
})`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme  })=>theme.colors.input};
  transition: border-radius 0.15s;
`;
const DropDownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-75fec827-1"
})`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }

  .down-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const CurrencySelect = ({ onCurrencySelect , selectedCurrency , otherSelectedCurrency , showCommonBases , commonBasesType , hideBalance , ...props })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .useWeb3React */ .Ge)();
    const selectedCurrencyBalance = (0,state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useCurrencyBalance */ ._h)(account ?? undefined, !hideBalance && selectedCurrency ? selectedCurrency : undefined);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const [onPresentCurrencyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        onCurrencySelect: onCurrencySelect,
        selectedCurrency: selectedCurrency,
        otherSelectedCurrency: otherSelectedCurrency,
        showCommonBases: showCommonBases,
        commonBasesType: commonBasesType
    }));
    const price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(selectedCurrencyBalance && selectedCurrency ? selectedCurrency : undefined);
    const quoted = selectedCurrencyBalance && price?.quote(selectedCurrencyBalance);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "100%",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropDownContainer, {
                p: 0,
                onClick: onPresentCurrencyModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownHeader, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            id: "pair",
                            color: !selectedCurrency ? "text" : undefined,
                            children: !selectedCurrency ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: t("Select")
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyLogo */ .Xw, {
                                        currency: selectedCurrency,
                                        size: "24px",
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        id: "pair",
                                        bold: true,
                                        children: selectedCurrency && selectedCurrency.symbol && selectedCurrency.symbol.length > 20 ? `${selectedCurrency.symbol.slice(0, 4)}...${selectedCurrency.symbol.slice(selectedCurrency.symbol.length - 5, selectedCurrency.symbol.length)}` : selectedCurrency?.symbol
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "text",
                        className: "down-icon"
                    })
                ]
            }),
            account && !!selectedCurrency && !hideBalance && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_9__/* .AutoRow */ .BA, {
                        justify: "space-between",
                        gap: "2px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                fontSize: "12px",
                                children: [
                                    t("Balance"),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                children: selectedCurrencyBalance?.toSignificant(6) ?? t("Loading")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_9__/* .RowBetween */ .m0, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                            Number.isFinite(+quoted?.toExact()) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                children: [
                                    "~$",
                                    (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(+quoted.toExact())
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnsupportedCurrencyFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79631);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87573);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65342);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5305);
/* harmony import */ var utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94250);
/* harmony import */ var _hooks_Tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__, components_Logo__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, _hooks_Tokens__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__, components_Logo__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, _hooks_Tokens__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const DetailsFooter = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-99e78957-0"
})`
  padding: 8px 0;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({ theme  })=>theme.colors.text};
  background-color: ${({ theme  })=>theme.colors.invertedContrast};
  text-align: center;
`;
const UnsupportedModal = ({ currencies , onDismiss  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const tokens = chainId && currencies ? currencies.map((currency)=>{
        return (0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_8__/* .wrappedCurrency */ .pu)(currency, chainId);
    }) : [];
    const unsupportedTokens = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_9__/* .useUnsupportedTokens */ .l6)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
        title: t("Unsupported Assets"),
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
            gap: "lg",
            children: [
                tokens.map((token)=>{
                    return token && unsupportedTokens && Object.keys(unsupportedTokens).includes(token.address) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
                        gap: "10px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__/* .AutoRow */ .BA, {
                                gap: "5px",
                                align: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyLogo */ .Xw, {
                                        currency: token,
                                        size: "24px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        children: token.symbol
                                    })
                                ]
                            }),
                            chainId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                external: true,
                                small: true,
                                color: "primaryDark",
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_7__/* .getBlockExploreLink */ .C)(token.address, "address", chainId),
                                children: token.address
                            })
                        ]
                    }, token.address?.concat("not-supported"));
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
                    gap: "lg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: t("Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons.")
                    })
                })
            ]
        })
    });
};
function UnsupportedCurrencyFooter({ currencies  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const [onPresentModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UnsupportedModal, {
        currencies: currencies
    }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsFooter, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            variant: "text",
            onClick: onPresentModal,
            children: t("Read more about unsupported assets")
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCurrentBlockTimestamp)
/* harmony export */ });
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87070);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__, _useContract__WEBPACK_IMPORTED_MODULE_1__]);
([_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__, _useContract__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// gets the current timestamp from the blockchain
function useCurrentBlockTimestamp() {
    const multicall = (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useMulticallContract */ .gq)();
    return (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(multicall, "getCurrentBlockTimestamp")?.result?.[0];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTransactionDeadline)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2904);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__]);
_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction
function useTransactionDeadline() {
    const ttl = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.user.userDeadline);
    const blockTimestamp = (0,_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (blockTimestamp && ttl) return blockTimestamp.add(ttl);
        return undefined;
    }, [
        blockTimestamp,
        ttl
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72502);
/* harmony import */ var hooks_Tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31196);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5369);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36204);
/* harmony import */ var state_mint_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84709);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40495);
/* harmony import */ var views_AddLiquidity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4131);
/* harmony import */ var views_AddLiquidity_AddStableLiquidity_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16662);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_Tokens__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_4__, state__WEBPACK_IMPORTED_MODULE_7__, views_AddLiquidity__WEBPACK_IMPORTED_MODULE_10__, views_AddLiquidity_AddStableLiquidity_index__WEBPACK_IMPORTED_MODULE_11__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_12__]);
([hooks_Tokens__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_4__, state__WEBPACK_IMPORTED_MODULE_7__, views_AddLiquidity__WEBPACK_IMPORTED_MODULE_10__, views_AddLiquidity_AddStableLiquidity_index__WEBPACK_IMPORTED_MODULE_11__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const AddLiquidityPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [currencyIdA, currencyIdB] = router.query.currency || [
        native.symbol,
        _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_1__/* .CAKE */ .cr[chainId]?.address ?? _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn[chainId]?.address, 
    ];
    const currencyA = (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_2__/* .useCurrency */ .U8)(currencyIdA);
    const currencyB = (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_2__/* .useCurrency */ .U8)(currencyIdB);
    const { stableSwapConfig , ...stableConfig } = (0,views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)({
        tokenA: currencyA,
        tokenB: currencyB
    });
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!currencyIdA && !currencyIdB) {
            dispatch((0,state_mint_actions__WEBPACK_IMPORTED_MODULE_8__/* .resetMintState */ .dA)());
        }
    }, [
        dispatch,
        currencyIdA,
        currencyIdB
    ]);
    return stableSwapConfig ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_12__/* .StableConfigContext.Provider */ .UA.Provider, {
        value: {
            stableSwapConfig,
            ...stableConfig
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AddLiquidity_AddStableLiquidity_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            currencyA: currencyA,
            currencyB: currencyB
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AddLiquidity__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        currencyA: currencyA,
        currencyB: currencyB
    });
};
AddLiquidityPage.chains = utils_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .CHAIN_IDS */ .vo;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddLiquidityPage);
const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40}|BNB)-(0x[a-fA-F0-9]{40}|BNB)$/;
const getStaticPaths = ()=>{
    return {
        paths: [
            {
                params: {
                    currency: []
                }
            }
        ],
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const { currency =[]  } = params;
    const [currencyIdA, currencyIdB] = currency;
    const match = currencyIdA?.match(OLD_PATH_STRUCTURE);
    if (match?.length) {
        return {
            redirect: {
                statusCode: 301,
                destination: `/add/${match[1]}/${match[2]}`
            }
        };
    }
    if (currencyIdA && currencyIdB && currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
        return {
            redirect: {
                statusCode: 303,
                destination: `/add/${currencyIdA}`
            }
        };
    }
    return {
        props: {}
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sA": () => (/* binding */ harvestFarm),
  "qq": () => (/* binding */ nonBscStakeFarm),
  "zv": () => (/* binding */ nonBscUnstakeFarm),
  "AQ": () => (/* binding */ stakeFarm),
  "dU": () => (/* binding */ unstakeFarm)
});

// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(34215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(7599);
// EXTERNAL MODULE: ../../packages/utils/bigNumber.ts
var bigNumber = __webpack_require__(85576);
// EXTERNAL MODULE: ./src/utils/contractHelpers.ts + 29 modules
var contractHelpers = __webpack_require__(12895);
;// CONCATENATED MODULE: ./src/views/Farms/hooks/getNonBscVaultFee.ts



var MessageTypes;
(function(MessageTypes) {
    MessageTypes[MessageTypes["Deposit"] = 0] = "Deposit";
    MessageTypes[MessageTypes["Withdraw"] = 1] = "Withdraw";
    MessageTypes[MessageTypes["EmergencyWithdraw"] = 2] = "EmergencyWithdraw";
    MessageTypes[MessageTypes["Claim"] = 3] = "Claim";
})(MessageTypes || (MessageTypes = {}));
var Chains;
(function(Chains) {
    Chains[Chains["EVM"] = 0] = "EVM";
    Chains[Chains["BSC"] = 1] = "BSC";
})(Chains || (Chains = {}));
const COMPENSATION_PRECISION = 1e5;
const ORACLE_PRECISION = 1e18;
const BNB_CHANGE = 5000000000000000;
const BUFFER = 1.3;
const WITHDRAW_BUFFER = 1.4;
const getNonBscVaultContractFee = async ({ pid , amount , chainId , userAddress , messageType , oraclePrice , gasPrice  })=>{
    try {
        const nonBscVaultContract = (0,contractHelpers/* getNonBscVaultContract */.aM)(null, chainId);
        const crossFarmingAddress = (0,contractHelpers/* getCrossFarmingSenderContract */.bd)(null, chainId);
        const exchangeRate = new (external_bignumber_js_default())(ORACLE_PRECISION).div(oraclePrice).times(ORACLE_PRECISION) // invert into BNB/ETH price
        ;
        const getNonce = await crossFarmingAddress.nonces(userAddress, pid);
        const nonce = new (external_bignumber_js_default())(getNonce.toString()).toJSON();
        const [encodeMessage, hasFirstTime, estimateGaslimit] = await Promise.all([
            nonBscVaultContract.encodeMessage(userAddress, pid, amount, messageType, nonce),
            crossFarmingAddress.is1st(userAddress),
            crossFarmingAddress.estimateGaslimit(Chains.BSC, userAddress, messageType), 
        ]);
        const calcFee = await nonBscVaultContract.calcFee(encodeMessage);
        const msgBusFee = new (external_bignumber_js_default())(calcFee.toString());
        const destTxFee = new (external_bignumber_js_default())(gasPrice).times(estimateGaslimit.toString()).times(exchangeRate).times(COMPENSATION_PRECISION).div(new (external_bignumber_js_default())(ORACLE_PRECISION).times(COMPENSATION_PRECISION));
        const totalFee = new (external_bignumber_js_default())(msgBusFee).plus(destTxFee);
        if (!hasFirstTime) {
            const depositFee = new (external_bignumber_js_default())(BNB_CHANGE).times(exchangeRate).div(ORACLE_PRECISION);
            return totalFee.plus(depositFee).times(BUFFER).toFixed(0);
        }
        if (messageType >= MessageTypes.Withdraw) {
            const estimateEvmGaslimit = await crossFarmingAddress.estimateGaslimit(Chains.EVM, userAddress, messageType);
            const fee = msgBusFee.times(exchangeRate).div(ORACLE_PRECISION);
            const total = new (external_bignumber_js_default())(gasPrice).times(estimateEvmGaslimit.toString()).plus(fee);
            return totalFee.plus(total).times(WITHDRAW_BUFFER).toFixed(0);
        }
        return totalFee.times(BUFFER).toFixed(0);
    } catch (error) {
        console.error("Failed to fetch non BscVault fee", error);
        return bigNumber/* BIG_ZERO.toJSON */.HW.toJSON();
    }
};

;// CONCATENATED MODULE: ./src/utils/calls/farms.ts



const options = {
    gasLimit: config/* BOOSTED_FARM_GAS_LIMIT */.ZM
};
const stakeFarm = async (masterChefContract, pid, amount)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    return masterChefContract.deposit(pid, value, options);
};
const unstakeFarm = async (masterChefContract, pid, amount)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    return masterChefContract.withdraw(pid, value, options);
};
const harvestFarm = async (masterChefContract, pid)=>{
    return masterChefContract.deposit(pid, "0", options);
};
const nonBscStakeFarm = async (contract, pid, amount, gasPrice, account, oraclePrice, chainId)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    const totalFee = await getNonBscVaultContractFee({
        pid,
        chainId,
        gasPrice,
        oraclePrice,
        amount: value,
        userAddress: account,
        messageType: MessageTypes.Deposit
    });
    console.info(totalFee, "stake totalFee");
    return contract.deposit(pid, value, {
        value: totalFee
    });
};
const nonBscUnstakeFarm = async (contract, pid, amount, gasPrice, account, oraclePrice, chainId)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    const totalFee = await getNonBscVaultContractFee({
        pid,
        chainId,
        gasPrice,
        oraclePrice,
        amount: value,
        userAddress: account,
        messageType: MessageTypes.Withdraw
    });
    console.info(totalFee, "unstake totalFee");
    return contract.withdraw(pid, value, {
        value: totalFee
    });
};


/***/ }),

/***/ 72179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zj": () => (/* reexport */ callWithEstimateGas),
  "yp": () => (/* reexport */ getActivePools),
  "sA": () => (/* reexport */ farms/* harvestFarm */.sA),
  "qq": () => (/* reexport */ farms/* nonBscStakeFarm */.qq),
  "zv": () => (/* reexport */ farms/* nonBscUnstakeFarm */.zv),
  "AQ": () => (/* reexport */ farms/* stakeFarm */.AQ),
  "dU": () => (/* reexport */ farms/* unstakeFarm */.dU)
});

// UNUSED EXPORTS: estimateGas

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5305);
;// CONCATENATED MODULE: ./src/utils/calls/estimateGas.ts

/**
 * Estimate the gas needed to call a function, and add a 10% margin
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param gasMarginPer10000 The gasMargin per 10000 (i.e. 10% -> 1000)
 * @param args An array of arguments to pass to the method
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */ const estimateGas = async (contract, methodName, methodArgs, overrides = {}, gasMarginPer10000)=>{
    if (!contract[methodName]) {
        throw new Error(`Method ${methodName} doesn't exist on ${contract.address}`);
    }
    const rawGasEstimation = await contract.estimateGas[methodName](...methodArgs, overrides);
    // By convention, BigNumber values are multiplied by 1000 to avoid dealing with real numbers
    const gasEstimation = (0,utils/* calculateGasMargin */.yC)(rawGasEstimation, gasMarginPer10000);
    return gasEstimation;
};
/**
 * Perform a contract call with a gas value returned from estimateGas
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param methodArgs An array of arguments to pass to the method
 * @param overrides An overrides object to pass to the method
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */ const callWithEstimateGas = async (contract, methodName, methodArgs, overrides = {}, gasMarginPer10000 = 1000)=>{
    const gasEstimation = await estimateGas(contract, methodName, methodArgs, overrides, gasMarginPer10000);
    const tx = await contract[methodName](...methodArgs, {
        gasLimit: gasEstimation,
        ...overrides
    });
    return tx;
};

// EXTERNAL MODULE: ./src/utils/calls/farms.ts + 1 modules
var farms = __webpack_require__(54221);
// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(34215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
// EXTERNAL MODULE: ./src/config/constants/pools.tsx
var pools = __webpack_require__(73486);
// EXTERNAL MODULE: ./src/config/abi/sousChefV2.json
var sousChefV2 = __webpack_require__(9022);
// EXTERNAL MODULE: ./src/utils/multicall.ts
var multicall = __webpack_require__(25152);
// EXTERNAL MODULE: ./src/utils/providers.ts
var providers = __webpack_require__(11536);
// EXTERNAL MODULE: ./src/utils/addressHelpers.ts
var addressHelpers = __webpack_require__(70627);
;// CONCATENATED MODULE: ./src/utils/calls/pools.ts
/* eslint-disable import/prefer-default-export */ 





/**
 * Returns the total number of pools that were active at a given block
 */ const getActivePools = async (block)=>{
    const eligiblePools = pools/* default.filter */.ZP.filter((pool)=>pool.sousId !== 0).filter((pool)=>pool.isFinished === false || pool.isFinished === undefined);
    const blockNumber = block || await providers/* bscRpcProvider.getBlockNumber */.v.getBlockNumber();
    const startBlockCalls = eligiblePools.map(({ contractAddress  })=>({
            address: (0,addressHelpers/* getAddress */.Kn)(contractAddress, 56),
            name: "startBlock"
        }));
    const endBlockCalls = eligiblePools.map(({ contractAddress  })=>({
            address: (0,addressHelpers/* getAddress */.Kn)(contractAddress, 56),
            name: "bonusEndBlock"
        }));
    const [startBlocks, endBlocks] = await Promise.all([
        (0,multicall/* default */.Z)(sousChefV2, startBlockCalls),
        (0,multicall/* default */.Z)(sousChefV2, endBlockCalls), 
    ]);
    return eligiblePools.reduce((accum, poolCheck, index)=>{
        const startBlock = startBlocks[index] ? new (external_bignumber_js_default())(startBlocks[index]) : null;
        const endBlock = endBlocks[index] ? new (external_bignumber_js_default())(endBlocks[index]) : null;
        if (!startBlock || !endBlock) {
            return accum;
        }
        if (startBlock.gte(blockNumber) || endBlock.lte(blockNumber)) {
            return accum;
        }
        return [
            ...accum,
            poolCheck
        ];
    }, []);
};

;// CONCATENATED MODULE: ./src/utils/calls/index.ts





/***/ }),

/***/ 50288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getLPSymbol)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);

const getLPSymbol = (token0Symbol, token1Symbol, chainId)=>{
    if (token0Symbol === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId].symbol) {
        return `${_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol}-${token1Symbol} LP`;
    }
    if (token1Symbol === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId].symbol) {
        return `${token0Symbol}-${_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol} LP`;
    }
    return `${token0Symbol}-${token1Symbol} LP`;
};


/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ maxAmountSpend)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92794);


/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */ function maxAmountSpend(currencyAmount) {
    if (!currencyAmount) return undefined;
    if (currencyAmount.currency?.isNative) {
        if (_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.greaterThan(currencyAmount.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_1__/* .MIN_BNB */ .Uz)) {
            return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currencyAmount.currency, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.subtract(currencyAmount.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_1__/* .MIN_BNB */ .Uz));
        }
        return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currencyAmount.currency, config_constants_exchange__WEBPACK_IMPORTED_MODULE_1__/* .BIG_INT_ZERO */ .iV);
    }
    return currencyAmount;
}


/***/ }),

/***/ 38662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ transactionErrorToUserReadableMessage)
/* harmony export */ });
/**
 * This is hacking out the revert reason from the ethers provider thrown error however it can.
 * This object seems to be undocumented by ethers.
 * @param error an error from the ethers provider
 * @param t Translation function
 */ function transactionErrorToUserReadableMessage(error, t) {
    let reason;
    while(error){
        reason = error.reason ?? error.data?.message ?? error.message ?? reason;
        // eslint-disable-next-line no-param-reassign
        error = error.error ?? error.data?.originalError;
    }
    if (reason?.indexOf("execution reverted: ") === 0) reason = reason.substring("execution reverted: ".length);
    switch(reason){
        case "PancakeRouter: EXPIRED":
            return t("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");
        case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
        case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
        case "PancakeRouter: INSUFFICIENT_A_AMOUNT":
        case "PancakeRouter: INSUFFICIENT_B_AMOUNT":
            return t("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
        case "TransferHelper: TRANSFER_FROM_FAILED":
            return t("The input token cannot be transferred. There may be an issue with the input token.");
        case "Pancake: TRANSFER_FAILED":
            return t("The output token cannot be transferred. There may be an issue with the output token.");
        default:
            if (reason?.indexOf("undefined is not an object") !== -1) {
                console.error(error, reason);
                return t("An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.");
            }
            return t("Unknown error%reason%. Try increasing your slippage tolerance.", {
                reason: reason ? `: "${reason}"` : ""
            });
    }
}


/***/ }),

/***/ 16662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddStableLiquidity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(85306);
/* harmony import */ var utils_sentry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20233);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
/* harmony import */ var components_CommitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49384);
/* harmony import */ var utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(38662);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11824);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27156);
/* harmony import */ var _components_Layout_Column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77253);
/* harmony import */ var _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46317);
/* harmony import */ var _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39480);
/* harmony import */ var _hooks_usePairs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82055);
/* harmony import */ var _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74727);
/* harmony import */ var _state_mint_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84709);
/* harmony import */ var _state_mint_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39113);
/* harmony import */ var _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52284);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72135);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5305);
/* harmony import */ var _utils_exchange__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23732);
/* harmony import */ var _utils_maxAmountSpend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6973);
/* harmony import */ var _components_Loader_Dots__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51991);
/* harmony import */ var _PoolPriceBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(31146);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27023);
/* harmony import */ var _components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(62897);
/* harmony import */ var _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(10650);
/* harmony import */ var _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(34188);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6338);
/* harmony import */ var _components_Layout_Row__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(79631);
/* harmony import */ var _components_PositionCard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(51355);
/* harmony import */ var _hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(70343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, components_CommitButton__WEBPACK_IMPORTED_MODULE_6__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_7__, components_Card__WEBPACK_IMPORTED_MODULE_8__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_10__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_11__, _hooks_usePairs__WEBPACK_IMPORTED_MODULE_12__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__, _state_mint_hooks__WEBPACK_IMPORTED_MODULE_15__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_16__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_17__, _utils_exchange__WEBPACK_IMPORTED_MODULE_19__, _PoolPriceBar__WEBPACK_IMPORTED_MODULE_22__, _Page__WEBPACK_IMPORTED_MODULE_23__, _components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_24__, _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_25__, _components_App__WEBPACK_IMPORTED_MODULE_27__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_28__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_29__, _hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, components_CommitButton__WEBPACK_IMPORTED_MODULE_6__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_7__, components_Card__WEBPACK_IMPORTED_MODULE_8__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_10__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_11__, _hooks_usePairs__WEBPACK_IMPORTED_MODULE_12__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__, _state_mint_hooks__WEBPACK_IMPORTED_MODULE_15__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_16__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_17__, _utils_exchange__WEBPACK_IMPORTED_MODULE_19__, _PoolPriceBar__WEBPACK_IMPORTED_MODULE_22__, _Page__WEBPACK_IMPORTED_MODULE_23__, _components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_24__, _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_25__, _components_App__WEBPACK_IMPORTED_MODULE_27__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_28__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_29__, _hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

































function AddStableLiquidity({ currencyA , currencyB  }) {
    const { account , chainId , isWrongNetwork  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const expertMode = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useIsExpertMode */ .LO)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    // mint state
    const { independentField , typedValue , otherTypedValue  } = (0,_state_mint_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useMintState */ .OY)();
    const { dependentField , currencies , pair , pairState , currencyBalances , parsedAmounts , price , noLiquidity , liquidityMinted , poolTokenPercentage , error , addError ,  } = (0,_hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_30__/* .useStableLPDerivedMintInfo */ .L)(currencyA ?? undefined, currencyB ?? undefined);
    const { onFieldAInput , onFieldBInput  } = (0,_state_mint_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useMintActionHandlers */ .OA)(true);
    // modal and loading
    const { 0: { attemptingTxn , liquidityErrorMessage , txHash  } , 1: setLiquidityState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        attemptingTxn: false,
        liquidityErrorMessage: undefined,
        txHash: undefined
    });
    // txn values
    const [allowedSlippage] = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useUserSlippageTolerance */ .$2)() // custom from users
    ;
    // get the max amounts user can add
    const maxAmounts = [
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A,
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B
    ].reduce((accumulator, field)=>{
        return {
            ...accumulator,
            [field]: (0,_utils_maxAmountSpend__WEBPACK_IMPORTED_MODULE_20__/* .maxAmountSpend */ .i)(currencyBalances[field])
        };
    }, {});
    const { handleCurrencyASelect , handleCurrencyBSelect  } = (0,_useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_25__/* .useCurrencySelectRoute */ .N)();
    // get formatted amounts
    const formattedAmounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            [independentField]: typedValue,
            [dependentField]: otherTypedValue
        }), [
        dependentField,
        independentField,
        otherTypedValue,
        typedValue
    ]);
    const atMaxAmounts = [
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A,
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B
    ].reduce((accumulator, field)=>{
        return {
            ...accumulator,
            [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? "0")
        };
    }, {});
    const { stableSwapContract , stableSwapConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_7__/* .StableConfigContext */ .UA);
    // check whether the user has approved tokens for addling LPs
    const [approvalA, approveACallback] = (0,_hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .useApproveCallback */ .qL)(parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A], stableSwapContract?.address);
    const [approvalB, approveBCallback] = (0,_hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .useApproveCallback */ .qL)(parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B], stableSwapContract?.address);
    const addTransaction = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useTransactionAdder */ .h7)();
    async function onAdd() {
        if (!chainId || !account || !stableSwapContract) return;
        const { [_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: parsedAmountA , [_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: parsedAmountB  } = parsedAmounts;
        if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB) {
            return;
        }
        const lpMintedSlippage = (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_19__/* .calculateSlippageAmount */ .uc)(liquidityMinted, noLiquidity ? 0 : allowedSlippage)[0];
        const estimate = stableSwapContract.estimateGas.add_liquidity;
        const method = stableSwapContract.add_liquidity;
        // Ensure the token order [token0, token1]
        const tokenAmounts = stableSwapConfig?.token0?.address === parsedAmountA?.currency?.wrapped?.address ? [
            parsedAmountA?.quotient?.toString(),
            parsedAmountB?.quotient?.toString()
        ] : [
            parsedAmountB?.quotient?.toString(),
            parsedAmountA?.quotient?.toString()
        ];
        const args = [
            tokenAmounts,
            lpMintedSlippage?.toString()
        ];
        const value = null;
        setLiquidityState({
            attemptingTxn: true,
            liquidityErrorMessage: undefined,
            txHash: undefined
        });
        await estimate(...args, value ? {
            value
        } : {}).then((estimatedGasLimit)=>method(...args, {
                ...value ? {
                    value
                } : {},
                gasLimit: (0,_utils__WEBPACK_IMPORTED_MODULE_18__/* .calculateGasMargin */ .yC)(estimatedGasLimit)
            }).then((response)=>{
                setLiquidityState({
                    attemptingTxn: false,
                    liquidityErrorMessage: undefined,
                    txHash: response.hash
                });
                const symbolA = currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol;
                const amountA = parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toSignificant(3);
                const symbolB = currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol;
                const amountB = parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toSignificant(3);
                addTransaction(response, {
                    summary: `Add ${amountA} ${symbolA} and ${amountB} ${symbolB}`,
                    translatableSummary: {
                        text: "Add %amountA% %symbolA% and %amountB% %symbolB%",
                        data: {
                            amountA,
                            symbolA,
                            amountB,
                            symbolB
                        }
                    },
                    type: "add-liquidity"
                });
            })).catch((err)=>{
            if (err && err.code !== 4001) {
                (0,utils_sentry__WEBPACK_IMPORTED_MODULE_3__/* .logError */ .H)(err);
                console.error(`Add Liquidity failed`, err, args, value);
            }
            setLiquidityState({
                attemptingTxn: false,
                liquidityErrorMessage: err && err.code !== 4001 ? t("Add liquidity failed: %message%", {
                    message: (0,utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_31__/* .transactionErrorToUserReadableMessage */ .e)(err, t)
                }) : undefined,
                txHash: undefined
            });
        });
    }
    const pendingText = t("Supplying %amountA% %symbolA% and %amountB% %symbolB%", {
        amountA: parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toSignificant(6) ?? "",
        symbolA: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol ?? "",
        amountB: parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toSignificant(6) ?? "",
        symbolB: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ?? ""
    });
    const handleDismissConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onFieldAInput("");
            onFieldBInput("");
        }
    }, [
        onFieldAInput,
        onFieldBInput,
        txHash
    ]);
    const [onPresentAddLiquidityModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        title: noLiquidity ? t("You are creating a pool") : t("You will receive"),
        customOnDismiss: handleDismissConfirmation,
        attemptingTxn: attemptingTxn,
        hash: txHash,
        pendingText: pendingText,
        currencyToAdd: pair?.liquidityToken,
        allowedSlippage: allowedSlippage,
        onAdd: onAdd,
        parsedAmounts: parsedAmounts,
        currencies: currencies,
        liquidityErrorMessage: liquidityErrorMessage,
        price: price,
        noLiquidity: noLiquidity,
        poolTokenPercentage: poolTokenPercentage,
        liquidityMinted: liquidityMinted,
        isStable: true
    }), true, true, "addLiquidityModal");
    let isValid = !error;
    let errorText = error;
    isValid = !error && !addError;
    errorText = error ?? addError;
    const buttonDisabled = !isValid || approvalA !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.APPROVED */ .UK.APPROVED || approvalB !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.APPROVED */ .UK.APPROVED;
    const showFieldAApproval = approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.NOT_APPROVED */ .UK.NOT_APPROVED || approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.PENDING */ .UK.PENDING;
    const showFieldBApproval = approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.NOT_APPROVED */ .UK.NOT_APPROVED || approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.PENDING */ .UK.PENDING;
    const shouldShowApprovalGroup = (showFieldAApproval || showFieldBApproval) && isValid;
    const oneCurrencyIsWNATIVE = Boolean(chainId && (currencyA && currencyA.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.WNATIVE[chainId]) || currencyB && currencyB.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.WNATIVE[chainId])));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Page__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App__WEBPACK_IMPORTED_MODULE_27__/* .AppBody */ .j, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App__WEBPACK_IMPORTED_MODULE_27__/* .AppHeader */ .t, {
                            title: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol && currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ? `${currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].symbol}-${currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].symbol} Stable LP` : t("Add Stable Liquidity"),
                            backTo: "/liquidity"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_9__/* .AutoColumn */ .Tz, {
                                gap: "20px",
                                children: [
                                    noLiquidity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_9__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                            variant: "warning",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                        bold: true,
                                                        mb: "8px",
                                                        children: t("You are the first liquidity provider.")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                        mb: "8px",
                                                        children: t("The ratio of tokens you add will set the price of this pool.")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                        children: t("Once you are happy with the rate click supply to review.")
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        showBUSD: true,
                                        onCurrencySelect: handleCurrencyASelect,
                                        zapStyle: "noZap",
                                        value: formattedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                                        onUserInput: onFieldAInput,
                                        onMax: ()=>{
                                            onFieldAInput(maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toExact() ?? "");
                                        },
                                        showMaxButton: !atMaxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                                        currency: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                                        id: "add-liquidity-input-tokena",
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_26__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_9__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                            width: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        showBUSD: true,
                                        onCurrencySelect: handleCurrencyBSelect,
                                        zapStyle: "noZap",
                                        value: formattedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                                        onUserInput: onFieldBInput,
                                        onMax: ()=>{
                                            onFieldBInput(maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toExact() ?? "");
                                        },
                                        showMaxButton: !atMaxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                                        currency: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                                        id: "add-liquidity-input-tokenb",
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_26__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    }),
                                    currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] && currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B] && pairState !== _hooks_usePairs__WEBPACK_IMPORTED_MODULE_12__/* .PairState.INVALID */ ._G.INVALID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_8__/* .LightCard */ .hl, {
                                            padding: "0px",
                                            borderRadius: "20px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_28__/* .RowBetween */ .m0, {
                                                    padding: "1rem",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                        fontSize: "14px",
                                                        children: noLiquidity ? t("Initial prices and pool share") : t("Prices and pool share")
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Card__WEBPACK_IMPORTED_MODULE_8__/* .LightCard */ .hl, {
                                                    padding: "1rem",
                                                    borderRadius: "20px",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolPriceBar__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                        currencies: currencies,
                                                        poolTokenPercentage: poolTokenPercentage,
                                                        noLiquidity: noLiquidity,
                                                        price: price
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_28__/* .RowBetween */ .m0, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                bold: true,
                                                fontSize: "12px",
                                                color: "secondary",
                                                children: t("Slippage Tolerance")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                                bold: true,
                                                color: "primary",
                                                children: [
                                                    allowedSlippage / 100,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}) : isWrongNetwork ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_6__/* .CommitButton */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_9__/* .AutoColumn */ .Tz, {
                                        gap: "md",
                                        children: [
                                            shouldShowApprovalGroup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_28__/* .RowBetween */ .m0, {
                                                style: {
                                                    gap: "8px"
                                                },
                                                children: [
                                                    showFieldAApproval && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                                                        onClick: approveACallback,
                                                        disabled: approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.PENDING */ .UK.PENDING,
                                                        width: "100%",
                                                        children: approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.PENDING */ .UK.PENDING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Dots__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                            children: t("Enabling %asset%", {
                                                                asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol
                                                            })
                                                        }) : t("Enable %asset%", {
                                                            asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol
                                                        })
                                                    }),
                                                    showFieldBApproval && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                                                        onClick: approveBCallback,
                                                        disabled: approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.PENDING */ .UK.PENDING,
                                                        width: "100%",
                                                        children: approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_13__/* .ApprovalState.PENDING */ .UK.PENDING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Dots__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                            children: t("Enabling %asset%", {
                                                                asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol
                                                            })
                                                        }) : t("Enable %asset%", {
                                                            asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_14__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_6__/* .CommitButton */ .A, {
                                                variant: !isValid ? "danger" : "primary",
                                                onClick: ()=>{
                                                    if (expertMode) {
                                                        onAdd();
                                                    } else {
                                                        setLiquidityState({
                                                            attemptingTxn: false,
                                                            liquidityErrorMessage: undefined,
                                                            txHash: undefined
                                                        });
                                                        onPresentAddLiquidityModal();
                                                    }
                                                },
                                                disabled: buttonDisabled,
                                                children: errorText || t("Supply")
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            pair && !noLiquidity && pairState !== _hooks_usePairs__WEBPACK_IMPORTED_MODULE_12__/* .PairState.INVALID */ ._G.INVALID ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_9__/* .AutoColumn */ .Tz, {
                style: {
                    minWidth: "20rem",
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PositionCard__WEBPACK_IMPORTED_MODULE_29__/* .MinimalPositionCard */ .WP, {
                    showUnwrapped: oneCurrencyIsWNATIVE,
                    pair: pair
                })
            }) : null
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ChoosePair)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37424);
/* harmony import */ var components_CommitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49384);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39480);
/* harmony import */ var components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38060);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79631);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65342);
/* harmony import */ var hooks_usePairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82055);
/* harmony import */ var state_swap_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26202);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84785);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6338);
/* harmony import */ var _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34188);
/* harmony import */ var _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_CommitButton__WEBPACK_IMPORTED_MODULE_2__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, hooks_usePairs__WEBPACK_IMPORTED_MODULE_7__, state_swap_hooks__WEBPACK_IMPORTED_MODULE_8__, _components_App__WEBPACK_IMPORTED_MODULE_10__, _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([components_CommitButton__WEBPACK_IMPORTED_MODULE_2__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, hooks_usePairs__WEBPACK_IMPORTED_MODULE_7__, state_swap_hooks__WEBPACK_IMPORTED_MODULE_8__, _components_App__WEBPACK_IMPORTED_MODULE_10__, _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ChoosePair({ currencyA , currencyB , error , onNext  }) {
    const { account  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const isValid = !error;
    const { handleCurrencyASelect , handleCurrencyBSelect  } = (0,_useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_12__/* .useCurrencySelectRoute */ .N)();
    const [, pair] = (0,hooks_usePairs__WEBPACK_IMPORTED_MODULE_7__/* .usePair */ .yX)(currencyA, currencyB);
    const poolData = (0,state_swap_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useLPApr */ .aT)(pair);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(t(`Based on last 7 days' performance. Does not account for impermanent loss`), {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App__WEBPACK_IMPORTED_MODULE_10__/* .AppHeader */ .t, {
                title: t("Add Liquidity"),
                subtitle: t("Receive LP tokens and earn 0.17% trading fees"),
                helper: t("Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool."),
                backTo: "/liquidity"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            textTransform: "uppercase",
                            color: "secondary",
                            bold: true,
                            small: true,
                            pb: "24px",
                            children: t("Choose a valid pair")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            gap: "4px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__/* .CurrencySelect */ .V, {
                                    id: "add-liquidity-select-tokena",
                                    selectedCurrency: currencyA,
                                    onCurrencySelect: handleCurrencyASelect,
                                    showCommonBases: true,
                                    commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_11__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    color: "textSubtle"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__/* .CurrencySelect */ .V, {
                                    id: "add-liquidity-select-tokenb",
                                    selectedCurrency: currencyB,
                                    onCurrencySelect: handleCurrencyBSelect,
                                    showCommonBases: true,
                                    commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_11__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                })
                            ]
                        }),
                        pair && poolData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                            mt: "24px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    ref: targetRef,
                                    bold: true,
                                    fontSize: "12px",
                                    color: "secondary",
                                    children: t("LP reward APR")
                                }),
                                tooltipVisible && tooltip,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    bold: true,
                                    color: "primary",
                                    children: [
                                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(poolData.lpApr7d),
                                        "%"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                children: !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    width: "100%"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_2__/* .CommitButton */ .A, {
                    "data-test": "choose-pair-next",
                    width: "100%",
                    variant: !isValid ? "danger" : "primary",
                    onClick: onNext,
                    disabled: !isValid,
                    children: error ?? t("Add Liquidity")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92794);
/* harmony import */ var _components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var _components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79631);
/* harmony import */ var _state_mint_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__]);
_components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function PoolPriceBar({ currencies , noLiquidity , poolTokenPercentage , price  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
        gap: "md",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__/* .AutoRow */ .BA, {
            justify: "space-around",
            gap: "4px",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
                    justify: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: price?.toSignificant(6) ?? "-"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            fontSize: "14px",
                            pt: 1,
                            children: t("%assetA% per %assetB%", {
                                assetA: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_5__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ?? "",
                                assetB: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_5__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol ?? ""
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
                    justify: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: price?.invert()?.toSignificant(6) ?? "-"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            fontSize: "14px",
                            pt: 1,
                            children: t("%assetA% per %assetB%", {
                                assetA: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_5__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol ?? "",
                                assetB: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_5__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ?? ""
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
                    justify: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: [
                                noLiquidity && price ? "100" : (poolTokenPercentage?.lessThan(config_constants_exchange__WEBPACK_IMPORTED_MODULE_2__/* .ONE_BIPS */ .IS) ? "<0.01" : poolTokenPercentage?.toFixed(2)) ?? "0",
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            fontSize: "14px",
                            pt: 1,
                            children: t("Share of Pool")
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoolPriceBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23475);
/* harmony import */ var state_burn_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80194);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__, _common__WEBPACK_IMPORTED_MODULE_6__]);
([components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__, _common__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ConfirmAddLiquidityModal = ({ title , onDismiss , customOnDismiss , attemptingTxn , hash , pendingText , price , currencies , noLiquidity , allowedSlippage , parsedAmounts , liquidityErrorMessage , onAdd , poolTokenPercentage , liquidityMinted , currencyToAdd , isStable ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    let percent = 0.5;
    // Calculate distribution percentage for display
    if (isStable && parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_A */ .g.CURRENCY_A] && parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_B */ .g.CURRENCY_B]) {
        const amountCurrencyA = lodash_toNumber__WEBPACK_IMPORTED_MODULE_5___default()(parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_A */ .g.CURRENCY_A].toSignificant(6));
        const amountCurrencyB = lodash_toNumber__WEBPACK_IMPORTED_MODULE_5___default()(parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_B */ .g.CURRENCY_B].toSignificant(6));
        percent = amountCurrencyA / (amountCurrencyA + amountCurrencyB);
    }
    const modalHeader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_6__/* .AddLiquidityModalHeader */ .A, {
            allowedSlippage: allowedSlippage,
            currencies: currencies,
            liquidityMinted: liquidityMinted,
            poolTokenPercentage: poolTokenPercentage,
            price: price,
            noLiquidity: noLiquidity,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_6__/* .PairDistribution */ .a, {
                title: t("Input"),
                percent: percent,
                currencyA: currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_A */ .g.CURRENCY_A],
                currencyAValue: parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(6),
                currencyB: currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_B */ .g.CURRENCY_B],
                currencyBValue: parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_4__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(6)
            })
        });
    }, [
        allowedSlippage,
        percent,
        currencies,
        liquidityMinted,
        noLiquidity,
        parsedAmounts,
        poolTokenPercentage,
        price,
        t
    ]);
    const modalBottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            width: "100%",
            onClick: onAdd,
            mt: "20px",
            children: noLiquidity ? t("Create Pool & Supply") : t("Confirm Supply")
        });
    }, [
        noLiquidity,
        onAdd,
        t
    ]);
    const confirmationContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>liquidityErrorMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__/* .TransactionErrorContent */ .ht, {
            onDismiss: onDismiss,
            message: liquidityErrorMessage
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__/* .ConfirmationModalContent */ .pM, {
            topContent: modalHeader,
            bottomContent: modalBottom
        }), [
        onDismiss,
        modalBottom,
        modalHeader,
        liquidityErrorMessage
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        minWidth: [
            "100%",
            ,
            "420px"
        ],
        title: title,
        onDismiss: onDismiss,
        customOnDismiss: customOnDismiss,
        attemptingTxn: attemptingTxn,
        currencyToAdd: currencyToAdd,
        hash: hash,
        content: confirmationContent,
        pendingText: pendingText
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmAddLiquidityModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94276:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94722);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23475);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77253);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79631);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87573);
/* harmony import */ var hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34508);
/* harmony import */ var utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94250);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65342);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18335);
/* harmony import */ var _ZapErrorMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_4__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_6__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_8__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__, _common__WEBPACK_IMPORTED_MODULE_11__, _ZapErrorMessage__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_4__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_6__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_8__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__, _common__WEBPACK_IMPORTED_MODULE_11__, _ZapErrorMessage__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const clamp = (num, min, max)=>Math.min(Math.max(num, min), max);
const ConfirmZapInModal = ({ title , onDismiss , customOnDismiss , attemptingTxn , hash , pendingText , price , currencies , zapSwapTokenField , zapSwapOutTokenField , allowedSlippage , parsedAmounts , liquidityErrorMessage , onAdd , poolTokenPercentage , liquidityMinted , pair , zapInEstimated , rebalancing , zapMode , toggleZapMode ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const totalPoolTokens = (0,hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(pair.liquidityToken);
    const swapInCurrencyAmount = parsedAmounts[zapSwapTokenField];
    const swapOutCurrencyAmount = parsedAmounts[zapSwapOutTokenField];
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(swapInCurrencyAmount && !swapOutCurrencyAmount ? t("There is no %token1% input. Half of %token0% input is converted into %token1% to add liquidity.", {
        token0: currencies[zapSwapTokenField]?.symbol,
        token1: currencies[zapSwapOutTokenField]?.symbol
    }) : t("There is not enough %token1% input to match 50/50. Some of %token0% will be converted to %token1%", {
        token0: currencies[zapSwapTokenField]?.symbol,
        token1: currencies[zapSwapOutTokenField]?.symbol
    }), {
        placement: "auto-start"
    });
    const [token0Deposited, token1Deposited] = !!pair && !!totalPoolTokens && !!liquidityMinted && // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.JSBI.greaterThanOrEqual(totalPoolTokens.quotient, liquidityMinted.quotient) ? [
        pair.getLiquidityValue(pair.token0, totalPoolTokens, liquidityMinted, false),
        pair.getLiquidityValue(pair.token1, totalPoolTokens, liquidityMinted, false), 
    ] : [
        undefined,
        undefined
    ];
    const swapInTokenAmount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>zapInEstimated && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.CurrencyAmount.fromRawAmount((0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_9__/* .wrappedCurrency */ .pu)(currencies[zapSwapTokenField], chainId), zapInEstimated.swapAmountIn.toString()), [
        chainId,
        currencies,
        zapInEstimated,
        zapSwapTokenField
    ]);
    const swapOutTokenAmount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>zapInEstimated?.swapAmountOut && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.CurrencyAmount.fromRawAmount((0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_9__/* .wrappedCurrency */ .pu)(currencies[zapSwapOutTokenField], chainId), zapInEstimated.swapAmountOut.toString()), [
        chainId,
        currencies,
        zapInEstimated?.swapAmountOut,
        zapSwapOutTokenField
    ]);
    const inputPercent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return swapInCurrencyAmount && swapOutCurrencyAmount ? clamp(// TODO: avoid use number
        +swapInCurrencyAmount.toExact() / +swapOutCurrencyAmount.toExact() / (+pair.priceOf(swapOutCurrencyAmount.currency.wrapped).toSignificant() + +swapInCurrencyAmount.toExact() / +swapOutCurrencyAmount.toExact()), 0.05, 0.95) : swapInCurrencyAmount && !swapOutCurrencyAmount ? 1 : undefined;
    }, [
        pair,
        swapInCurrencyAmount,
        swapOutCurrencyAmount
    ]);
    const tokenDeposited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            [zapSwapTokenField]: swapInTokenAmount?.currency && pair?.token0 ? pair.token0.equals(swapInTokenAmount.currency) ? token0Deposited : token1Deposited : undefined,
            [zapSwapOutTokenField]: swapOutTokenAmount?.currency && pair?.token1 ? pair.token1.equals(swapOutTokenAmount.currency) ? token1Deposited : token0Deposited : undefined
        }), [
        pair.token0,
        pair.token1,
        swapInTokenAmount?.currency,
        swapOutTokenAmount?.currency,
        token0Deposited,
        token1Deposited,
        zapSwapOutTokenField,
        zapSwapTokenField, 
    ]);
    const modalHeader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common__WEBPACK_IMPORTED_MODULE_11__/* .AddLiquidityModalHeader */ .A, {
            allowedSlippage: allowedSlippage,
            currencies: currencies,
            liquidityMinted: liquidityMinted,
            poolTokenPercentage: poolTokenPercentage,
            price: price,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_11__/* .PairDistribution */ .a, {
                    title: t("Input"),
                    percent: inputPercent,
                    currencyA: swapInCurrencyAmount ? currencies[zapSwapTokenField] : undefined,
                    currencyAValue: swapInCurrencyAmount?.toSignificant(6),
                    currencyB: swapOutCurrencyAmount ? currencies[zapSwapOutTokenField] : undefined,
                    currencyBValue: swapOutCurrencyAmount?.toSignificant(6)
                }),
                swapOutTokenAmount && swapInTokenAmount && currencies[zapSwapTokenField] && currencies[zapSwapOutTokenField] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_5__/* .AutoColumn */ .Tz, {
                    justify: "center",
                    gap: "16px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            color: "textSubtle"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_6__/* .AutoRow */ .BA, {
                            gap: "6px",
                            justify: "center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_6__/* .RowFixed */ .DA, {
                                    gap: "2px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            children: swapInTokenAmount?.toSignificant(6)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                            currency: currencies[zapSwapTokenField]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            children: currencies[zapSwapTokenField].symbol
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    children: t("to")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_6__/* .RowFixed */ .DA, {
                                    gap: "2px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            children: swapOutTokenAmount?.toSignificant(6)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                            currency: currencies[zapSwapOutTokenField]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            children: currencies[zapSwapOutTokenField].symbol
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            color: "textSubtle"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_5__/* .AutoColumn */ .Tz, {
                    gap: "4px",
                    children: [
                        tooltipVisible && tooltip,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_11__/* .PairDistribution */ .a, {
                            tooltipTargetRef: targetRef,
                            title: t("Pooled"),
                            percent: 0.5,
                            currencyA: currencies[zapSwapTokenField],
                            currencyAValue: tokenDeposited?.[zapSwapTokenField]?.toSignificant(6),
                            currencyB: currencies[zapSwapOutTokenField],
                            currencyBValue: tokenDeposited?.[zapSwapOutTokenField]?.toSignificant(6)
                        })
                    ]
                })
            ]
        });
    }, [
        allowedSlippage,
        currencies,
        liquidityMinted,
        poolTokenPercentage,
        price,
        t,
        inputPercent,
        swapInCurrencyAmount,
        zapSwapTokenField,
        swapOutCurrencyAmount,
        zapSwapOutTokenField,
        swapOutTokenAmount,
        swapInTokenAmount,
        tooltip,
        tooltipVisible,
        targetRef,
        tokenDeposited, 
    ]);
    const modalBottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            width: "100%",
            onClick: onAdd,
            mt: "20px",
            children: t("Confirm Supply")
        });
    }, [
        onAdd,
        t
    ]);
    const confirmationContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>liquidityErrorMessage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ZapErrorMessage__WEBPACK_IMPORTED_MODULE_12__/* .ZapErrorMessages */ .p, {
                    isSingleToken: !rebalancing,
                    zapMode: zapMode,
                    toggleZapMode: toggleZapMode,
                    onModalDismiss: onDismiss
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_4__/* .TransactionErrorContent */ .ht, {
                    onDismiss: onDismiss,
                    message: liquidityErrorMessage
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_4__/* .ConfirmationModalContent */ .pM, {
            topContent: modalHeader,
            bottomContent: modalBottom
        }), [
        liquidityErrorMessage,
        rebalancing,
        zapMode,
        toggleZapMode,
        onDismiss,
        modalHeader,
        modalBottom
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        minWidth: [
            "100%",
            ,
            "420px"
        ],
        title: title,
        onDismiss: onDismiss,
        customOnDismiss: customOnDismiss,
        attemptingTxn: attemptingTxn,
        currencyToAdd: pair?.liquidityToken,
        hash: hash,
        content: confirmationContent,
        pendingText: pendingText
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmZapInModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ZapErrorMessages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ZapErrorMessages = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ isSingleToken , zapMode , toggleZapMode , onModalDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { toastInfo  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .p)();
    const handleCloseButton = ()=>{
        onModalDismiss();
        if (zapMode) {
            toggleZapMode(!zapMode);
            toastInfo(t("Info"), t("Temporarily disabled Zap"));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        margin: "auto",
        width: [
            "100%",
            "100%",
            "380px"
        ],
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            variant: "warning",
            mb: "16px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .MessageText */ .Y, {
                        bold: true,
                        children: t("Currently using Zap for liquidity provisions.")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .MessageText */ .Y, {
                        small: true,
                        children: [
                            isSingleToken ? t("Zap does NOT support tokens with fees on transfers. If you experience any issues, click") : t(`Zap does NOT support tokens with fees on transfers. Please choose ’Don't convert’ and retry. If you experience any further issues, click`),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                p: "0 4px",
                                scale: "sm",
                                variant: "text",
                                height: "auto",
                                onClick: handleCloseButton,
                                children: t("here")
                            }),
                            t("to disable Zap temporarily.")
                        ]
                    })
                ]
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18335:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ AddLiquidityModalHeader),
/* harmony export */   "a": () => (/* binding */ PairDistribution)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44259);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79631);
/* harmony import */ var state_burn_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80194);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87573);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27156);
/* harmony import */ var utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, components_Card__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, components_Card__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Dot = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-7c8deb2-0"
})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
const CircleSvg = ({ percent =1 , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        width: "60px",
        height: "60px",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                filter: "url(#filter0_i_1147_113741)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        r: "10",
                        cx: "10",
                        cy: "10",
                        fill: "#7645D9"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        r: "5",
                        cx: "10",
                        cy: "10",
                        fill: "transparent",
                        stroke: "#1FC7D4",
                        strokeWidth: "10",
                        strokeDasharray: `calc(${percent * 100}px * 31.4 / 100) 31.4`,
                        transform: "rotate(-90) translate(-20)"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_i_1147_113741",
                    x: 0,
                    y: 0,
                    width: 60,
                    height: 60,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feOffset", {
                            dy: -2
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feComposite", {
                            in2: "hardAlpha",
                            operator: "arithmetic",
                            k2: -1,
                            k3: 1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                            in2: "shape",
                            result: "effect1_innerShadow_1147_113741"
                        })
                    ]
                })
            })
        ]
    });
const Subtitle = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        fontSize: "12px",
        textTransform: "uppercase",
        bold: true,
        color: "secondary",
        children: children
    });
};
const PairDistribution = ({ title , percent , currencyA , currencyB , currencyAValue , currencyBValue , tooltipTargetRef  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
        gap: "8px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subtitle, {
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                children: [
                    typeof percent !== "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: tooltipTargetRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CircleSvg, {
                            percent: percent,
                            mr: "34px"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
                        style: {
                            width: "100%"
                        },
                        children: [
                            currencyA && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .AutoRow */ .BA, {
                                        gap: "4px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                                                bg: "primary"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                                currency: currencyA
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                children: currencyA?.symbol
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        children: currencyAValue
                                    })
                                ]
                            }),
                            currencyB && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .AutoRow */ .BA, {
                                        gap: "4px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                                                bg: "secondary"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                                currency: currencyB
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                children: currencyB?.symbol
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        children: currencyBValue
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
const AddLiquidityModalHeader = ({ currencies , poolTokenPercentage , liquidityMinted , price , allowedSlippage , noLiquidity , children  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { tooltip , tooltipVisible , targetRef  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(t("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.", {
        slippage: allowedSlippage / 100
    }), {
        placement: "auto"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
        gap: "24px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
                gap: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subtitle, {
                        children: t("You will receive")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Card__WEBPACK_IMPORTED_MODULE_8__/* .GreyCard */ .h2, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .AutoRow */ .BA, {
                                    gap: "4px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .DoubleCurrencyLogo */ .ge, {
                                            currency0: currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A],
                                            currency1: currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B],
                                            size: 24
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            children: currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.symbol && currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.symbol && (0,utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_9__/* .getLPSymbol */ .z)(currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.symbol, currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.symbol, currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.chainId)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    ml: "8px",
                                    children: liquidityMinted?.toSignificant(6)
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subtitle, {
                        children: t("Your pool share")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: [
                            noLiquidity ? "100" : poolTokenPercentage?.toSignificant(4),
                            "%"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
                gap: "8px",
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subtitle, {
                                children: t("Rates")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: `1 ${currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.symbol}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                        style: {
                            justifyContent: "flex-end"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            children: `1 ${currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${currencies[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.symbol}`
                        })
                    })
                ]
            }),
            !noLiquidity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subtitle, {
                        children: t("Slippage Tolerance")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        ref: targetRef,
                        children: [
                            allowedSlippage / 100,
                            "%"
                        ]
                    }),
                    tooltipVisible && tooltip
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddLiquidity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(19193);
/* harmony import */ var utils_sentry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20233);
/* harmony import */ var hooks_Trades__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55643);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var components_UnsupportedCurrencyFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21834);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74860);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65342);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70627);
/* harmony import */ var components_CommitButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49384);
/* harmony import */ var utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50288);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72179);
/* harmony import */ var config_constants_supportChains__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20277);
/* harmony import */ var utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(38662);
/* harmony import */ var state_swap_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26202);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92794);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27156);
/* harmony import */ var _components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77253);
/* harmony import */ var _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46317);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6338);
/* harmony import */ var _components_PositionCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(51355);
/* harmony import */ var _components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(79631);
/* harmony import */ var _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(39480);
/* harmony import */ var _hooks_usePairs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(82055);
/* harmony import */ var _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(74727);
/* harmony import */ var _hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(61558);
/* harmony import */ var _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(84709);
/* harmony import */ var _state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39113);
/* harmony import */ var _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(52284);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(72135);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(5305);
/* harmony import */ var _utils_exchange__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(23732);
/* harmony import */ var _utils_maxAmountSpend__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(6973);
/* harmony import */ var _utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(94250);
/* harmony import */ var _components_Loader_Dots__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(51991);
/* harmony import */ var _PoolPriceBar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(31146);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(27023);
/* harmony import */ var _components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(62897);
/* harmony import */ var _components_ConfirmZapInModal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(94276);
/* harmony import */ var _ChoosePair__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(30214);
/* harmony import */ var _components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(14346);
/* harmony import */ var _utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(84785);
/* harmony import */ var _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(10650);
/* harmony import */ var _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(34188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_Trades__WEBPACK_IMPORTED_MODULE_5__, components_UnsupportedCurrencyFooter__WEBPACK_IMPORTED_MODULE_7__, hooks_useContract__WEBPACK_IMPORTED_MODULE_8__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__, components_CommitButton__WEBPACK_IMPORTED_MODULE_11__, state_swap_hooks__WEBPACK_IMPORTED_MODULE_16__, _components_Card__WEBPACK_IMPORTED_MODULE_18__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_20__, _components_App__WEBPACK_IMPORTED_MODULE_21__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_22__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_24__, _hooks_usePairs__WEBPACK_IMPORTED_MODULE_25__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__, _hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__, _state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_30__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_31__, _utils_exchange__WEBPACK_IMPORTED_MODULE_33__, _PoolPriceBar__WEBPACK_IMPORTED_MODULE_37__, _Page__WEBPACK_IMPORTED_MODULE_38__, _components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_39__, _components_ConfirmZapInModal__WEBPACK_IMPORTED_MODULE_40__, _ChoosePair__WEBPACK_IMPORTED_MODULE_41__, _components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_42__, _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_44__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_46__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__]);
([hooks_Trades__WEBPACK_IMPORTED_MODULE_5__, components_UnsupportedCurrencyFooter__WEBPACK_IMPORTED_MODULE_7__, hooks_useContract__WEBPACK_IMPORTED_MODULE_8__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__, components_CommitButton__WEBPACK_IMPORTED_MODULE_11__, state_swap_hooks__WEBPACK_IMPORTED_MODULE_16__, _components_Card__WEBPACK_IMPORTED_MODULE_18__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_20__, _components_App__WEBPACK_IMPORTED_MODULE_21__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_22__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_24__, _hooks_usePairs__WEBPACK_IMPORTED_MODULE_25__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__, _hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__, _state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_30__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_31__, _utils_exchange__WEBPACK_IMPORTED_MODULE_33__, _PoolPriceBar__WEBPACK_IMPORTED_MODULE_37__, _Page__WEBPACK_IMPORTED_MODULE_38__, _components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_39__, _components_ConfirmZapInModal__WEBPACK_IMPORTED_MODULE_40__, _ChoosePair__WEBPACK_IMPORTED_MODULE_41__, _components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_42__, _useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_44__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_46__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















































var Steps;
(function(Steps) {
    Steps[Steps["Choose"] = 0] = "Choose";
    Steps[Steps["Add"] = 1] = "Add";
})(Steps || (Steps = {}));
const zapAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getZapAddress */ ._M)();
function AddLiquidity({ currencyA , currencyB  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { account , chainId , isWrongNetwork  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const addPair = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_31__/* .usePairAdder */ .uB)();
    const [zapMode] = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_31__/* .useZapModeManager */ .$f)();
    const expertMode = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_31__/* .useIsExpertMode */ .LO)();
    const { 0: temporarilyZapMode , 1: setTemporarilyZapMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: steps , 1: setSteps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Steps.Choose);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query.step === "1") {
            setSteps(Steps.Add);
        }
    }, [
        router.query
    ]);
    const zapModeStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>!!zapMode && temporarilyZapMode, [
        zapMode,
        temporarilyZapMode
    ]);
    // mint state
    const { independentField , typedValue , otherTypedValue  } = (0,_state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__/* .useMintState */ .OY)();
    const { dependentField , currencies , pair , pairState , currencyBalances , parsedAmounts: mintParsedAmounts , price , noLiquidity , liquidityMinted , poolTokenPercentage , error , addError ,  } = (0,_state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__/* .useDerivedMintInfo */ .Qw)(currencyA ?? undefined, currencyB ?? undefined);
    const poolData = (0,state_swap_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useLPApr */ .aT)(pair);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z)(t(`Based on last 7 days' performance. Does not account for impermanent loss`), {
        placement: "bottom"
    });
    const { onFieldAInput , onFieldBInput  } = (0,_state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__/* .useMintActionHandlers */ .OA)(noLiquidity);
    // modal and loading
    const { 0: { attemptingTxn , liquidityErrorMessage , txHash  } , 1: setLiquidityState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        attemptingTxn: false,
        liquidityErrorMessage: undefined,
        txHash: undefined
    });
    // Zap state
    const { 0: zapTokenToggleA , 1: setZapTokenToggleA  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: zapTokenToggleB , 1: setZapTokenToggleB  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const zapTokenCheckedA = zapTokenToggleA && currencyBalances?.[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.greaterThan(0);
    const zapTokenCheckedB = zapTokenToggleB && currencyBalances?.[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.greaterThan(0);
    // txn values
    const deadline = (0,_hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)() // custom from users settings
    ;
    const [allowedSlippage] = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_31__/* .useUserSlippageTolerance */ .$2)() // custom from users
    ;
    // get the max amounts user can add
    const maxAmounts = [
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A,
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B
    ].reduce((accumulator, field)=>{
        return {
            ...accumulator,
            [field]: (0,_utils_maxAmountSpend__WEBPACK_IMPORTED_MODULE_34__/* .maxAmountSpend */ .i)(currencyBalances[field])
        };
    }, {});
    const canZap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>!!zapModeStatus && !noLiquidity && config_constants_supportChains__WEBPACK_IMPORTED_MODULE_15__/* .SUPPORT_ZAP.includes */ .K.includes(chainId) && !(pair && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(pair.reserve0.quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.MINIMUM_LIQUIDITY) || pair && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(pair.reserve1.quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.MINIMUM_LIQUIDITY)), [
        chainId,
        noLiquidity,
        pair,
        zapModeStatus
    ]);
    const { handleCurrencyASelect , handleCurrencyBSelect  } = (0,_useCurrencySelectRoute__WEBPACK_IMPORTED_MODULE_44__/* .useCurrencySelectRoute */ .N)();
    const { zapInEstimating , rebalancing , ...zapIn } = (0,_state_mint_hooks__WEBPACK_IMPORTED_MODULE_29__/* .useZapIn */ .eM)({
        pair,
        canZap,
        currencyA,
        currencyB,
        currencyBalances,
        zapTokenCheckedA,
        zapTokenCheckedB,
        maxAmounts
    });
    const parsedAmounts = canZap ? zapIn.parsedAmounts : mintParsedAmounts;
    const preferZapInstead = canZap && !zapIn.noNeedZap;
    // get formatted amounts
    const formattedAmounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            [independentField]: canZap && (independentField === _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A && !zapTokenCheckedA || independentField === _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B && !zapTokenCheckedB) ? "" : typedValue,
            [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? ""
        }), [
        canZap,
        dependentField,
        independentField,
        noLiquidity,
        otherTypedValue,
        parsedAmounts,
        typedValue,
        zapTokenCheckedA,
        zapTokenCheckedB, 
    ]);
    const atMaxAmounts = [
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A,
        _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B
    ].reduce((accumulator, field)=>{
        return {
            ...accumulator,
            [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? "0")
        };
    }, {});
    // check whether the user has approved the router on the tokens
    const [approvalA, approveACallback] = (0,_hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .useApproveCallback */ .qL)(parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A], preferZapInstead ? zapAddress : config_constants_exchange__WEBPACK_IMPORTED_MODULE_17__/* .ROUTER_ADDRESS */ .bR[chainId]);
    const [approvalB, approveBCallback] = (0,_hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .useApproveCallback */ .qL)(parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B], preferZapInstead ? zapAddress : config_constants_exchange__WEBPACK_IMPORTED_MODULE_17__/* .ROUTER_ADDRESS */ .bR[chainId]);
    const addTransaction = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_30__/* .useTransactionAdder */ .h7)();
    const routerContract = (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_33__/* .useRouterContract */ .Ti)();
    async function onAdd() {
        if (!chainId || !account || !routerContract) return;
        const { [_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: parsedAmountA , [_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: parsedAmountB  } = mintParsedAmounts;
        if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB || !deadline) {
            return;
        }
        const amountsMin = {
            [_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_33__/* .calculateSlippageAmount */ .uc)(parsedAmountA, noLiquidity ? 0 : allowedSlippage)[0],
            [_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_33__/* .calculateSlippageAmount */ .uc)(parsedAmountB, noLiquidity ? 0 : allowedSlippage)[0]
        };
        let estimate;
        let method;
        let args;
        let value;
        if (currencyA?.isNative || currencyB?.isNative) {
            const tokenBIsNative = currencyB?.isNative;
            estimate = routerContract.estimateGas.addLiquidityETH;
            method = routerContract.addLiquidityETH;
            args = [
                (tokenBIsNative ? currencyA : currencyB)?.wrapped?.address ?? "",
                (tokenBIsNative ? parsedAmountA : parsedAmountB).quotient.toString(),
                amountsMin[tokenBIsNative ? _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A : _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].toString(),
                amountsMin[tokenBIsNative ? _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].toString(),
                account,
                deadline.toHexString(), 
            ];
            value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from((tokenBIsNative ? parsedAmountB : parsedAmountA).quotient.toString());
        } else {
            estimate = routerContract.estimateGas.addLiquidity;
            method = routerContract.addLiquidity;
            args = [
                currencyA?.wrapped?.address ?? "",
                currencyB?.wrapped?.address ?? "",
                parsedAmountA.quotient.toString(),
                parsedAmountB.quotient.toString(),
                amountsMin[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].toString(),
                amountsMin[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].toString(),
                account,
                deadline.toHexString(), 
            ];
            value = null;
        }
        setLiquidityState({
            attemptingTxn: true,
            liquidityErrorMessage: undefined,
            txHash: undefined
        });
        await estimate(...args, value ? {
            value
        } : {}).then((estimatedGasLimit)=>method(...args, {
                ...value ? {
                    value
                } : {},
                gasLimit: (0,_utils__WEBPACK_IMPORTED_MODULE_32__/* .calculateGasMargin */ .yC)(estimatedGasLimit)
            }).then((response)=>{
                setLiquidityState({
                    attemptingTxn: false,
                    liquidityErrorMessage: undefined,
                    txHash: response.hash
                });
                const symbolA = currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol;
                const amountA = parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toSignificant(3);
                const symbolB = currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol;
                const amountB = parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toSignificant(3);
                addTransaction(response, {
                    summary: `Add ${amountA} ${symbolA} and ${amountB} ${symbolB}`,
                    translatableSummary: {
                        text: "Add %amountA% %symbolA% and %amountB% %symbolB%",
                        data: {
                            amountA,
                            symbolA,
                            amountB,
                            symbolB
                        }
                    },
                    type: "add-liquidity"
                });
                if (pair) {
                    addPair(pair);
                }
            })).catch((err)=>{
            if (err && err.code !== 4001) {
                (0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(err);
                console.error(`Add Liquidity failed`, err, args, value);
            }
            setLiquidityState({
                attemptingTxn: false,
                liquidityErrorMessage: err && err.code !== 4001 ? t("Add liquidity failed: %message%", {
                    message: (0,utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_47__/* .transactionErrorToUserReadableMessage */ .e)(err, t)
                }) : undefined,
                txHash: undefined
            });
        });
    }
    const pendingText = preferZapInstead ? t("Zapping %amountA% %symbolA% and %amountB% %symbolB%", {
        amountA: parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toSignificant(6) ?? "0",
        symbolA: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol ?? "",
        amountB: parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toSignificant(6) ?? "0",
        symbolB: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ?? ""
    }) : t("Supplying %amountA% %symbolA% and %amountB% %symbolB%", {
        amountA: parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toSignificant(6) ?? "",
        symbolA: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol ?? "",
        amountB: parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toSignificant(6) ?? "",
        symbolB: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ?? ""
    });
    const handleDismissConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onFieldAInput("");
        }
    }, [
        onFieldAInput,
        txHash
    ]);
    const addIsUnsupported = (0,hooks_Trades__WEBPACK_IMPORTED_MODULE_5__/* .useIsTransactionUnsupported */ .mP)(currencies?.CURRENCY_A, currencies?.CURRENCY_B);
    const addIsWarning = (0,hooks_Trades__WEBPACK_IMPORTED_MODULE_5__/* .useIsTransactionWarning */ .uK)(currencies?.CURRENCY_A, currencies?.CURRENCY_B);
    const zapContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_8__/* .useZapContract */ .n9)(true);
    const [onPresentAddLiquidityModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConfirmAddLiquidityModal__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
        title: noLiquidity ? t("You are creating a pool") : t("You will receive"),
        customOnDismiss: handleDismissConfirmation,
        attemptingTxn: attemptingTxn,
        hash: txHash,
        pendingText: pendingText,
        currencyToAdd: pair?.liquidityToken,
        allowedSlippage: allowedSlippage,
        onAdd: onAdd,
        parsedAmounts: parsedAmounts,
        currencies: currencies,
        liquidityErrorMessage: liquidityErrorMessage,
        price: price,
        noLiquidity: noLiquidity,
        poolTokenPercentage: poolTokenPercentage,
        liquidityMinted: liquidityMinted
    }), true, true, "addLiquidityModal");
    async function onZapIn() {
        if (!canZap || !parsedAmounts || !zapIn.zapInEstimated || !chainId || !zapContract) {
            return;
        }
        let method;
        let args;
        let value;
        let summary;
        let translatableSummary;
        const minAmountOut = zapIn.zapInEstimated.swapAmountOut.mul(10000 - allowedSlippage).div(10000);
        if (rebalancing) {
            const maxAmountIn = zapIn.zapInEstimated.swapAmountIn.mul(10000 + allowedSlippage).div(10000);
            const amountA = parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toSignificant(3);
            const symbolA = currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol;
            const amountB = parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toSignificant(3);
            const symbolB = currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol;
            summary = `Zap ${amountA} ${symbolA} and ${amountB} ${symbolB}`;
            translatableSummary = {
                text: "Zap %amountA% %symbolA% and %amountB% %symbolB%",
                data: {
                    amountA,
                    symbolA,
                    amountB,
                    symbolB
                }
            };
            if (currencyA?.isNative || currencyB?.isNative) {
                const tokenBIsBNB = currencyB?.isNative;
                method = "zapInBNBRebalancing";
                args = [
                    (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_35__/* .wrappedCurrency */ .pu)(currencies[tokenBIsBNB ? _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A : _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B], chainId).address,
                    parsedAmounts[tokenBIsBNB ? _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A : _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].quotient.toString(),
                    pair.liquidityToken.address,
                    maxAmountIn,
                    minAmountOut,
                    zapIn.zapInEstimated.isToken0Sold && !tokenBIsBNB
                ];
                value = parsedAmounts[tokenBIsBNB ? _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].quotient.toString();
            } else {
                method = "zapInTokenRebalancing";
                args = [
                    (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_35__/* .wrappedCurrency */ .pu)(currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A], chainId).address,
                    (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_35__/* .wrappedCurrency */ .pu)(currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B], chainId).address,
                    parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].quotient.toString(),
                    parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].quotient.toString(),
                    pair.liquidityToken.address,
                    maxAmountIn,
                    minAmountOut,
                    zapIn.zapInEstimated.isToken0Sold
                ];
            }
        } else if (currencies[zapIn.swapTokenField]?.isNative) {
            method = "zapInBNB";
            args = [
                pair.liquidityToken.address,
                minAmountOut
            ];
            const amount = parsedAmounts[zapIn.swapTokenField]?.toSignificant(3);
            const symbol = (0,utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_12__/* .getLPSymbol */ .z)(pair.token0.symbol, pair.token1.symbol, chainId);
            summary = `Zap in ${amount} BNB for ${symbol}`;
            translatableSummary = {
                text: "Zap in %amount% BNB for %symbol%",
                data: {
                    amount,
                    symbol
                }
            };
            value = parsedAmounts[zapIn.swapTokenField].quotient.toString();
        } else {
            method = "zapInToken";
            args = [
                (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_35__/* .wrappedCurrency */ .pu)(currencies[zapIn.swapTokenField], chainId).address,
                parsedAmounts[zapIn.swapTokenField].quotient.toString(),
                pair.liquidityToken.address,
                minAmountOut, 
            ];
            const amount1 = parsedAmounts[zapIn.swapTokenField]?.toSignificant(3);
            const { symbol: symbol1  } = currencies[zapIn.swapTokenField];
            const lpSymbol = (0,utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_12__/* .getLPSymbol */ .z)(pair.token0.symbol, pair.token1.symbol, chainId);
            summary = `Zap in ${amount1} ${symbol1} for ${lpSymbol}`;
            translatableSummary = {
                text: "Zap in %amount% %symbol% for %lpSymbol%",
                data: {
                    amount: amount1,
                    symbol: symbol1,
                    lpSymbol
                }
            };
        }
        setLiquidityState({
            attemptingTxn: true,
            liquidityErrorMessage: undefined,
            txHash: undefined
        });
        (0,utils_calls__WEBPACK_IMPORTED_MODULE_14__/* .callWithEstimateGas */ .Zj)(zapContract, method, args, value ? {
            value
        } : {}).then((response)=>{
            setLiquidityState({
                attemptingTxn: false,
                liquidityErrorMessage: undefined,
                txHash: response.hash
            });
            addTransaction(response, {
                summary,
                translatableSummary,
                type: "add-liquidity"
            });
            if (pair) {
                addPair(pair);
            }
        }).catch((err)=>{
            if (err && err.code !== 4001) {
                (0,utils_sentry__WEBPACK_IMPORTED_MODULE_4__/* .logError */ .H)(err);
                console.error(`Add Liquidity failed`, err, args, value);
            }
            setLiquidityState({
                attemptingTxn: false,
                liquidityErrorMessage: err && err.code !== 4001 ? t("Add liquidity failed: %message%", {
                    message: (0,utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_47__/* .transactionErrorToUserReadableMessage */ .e)(err, t)
                }) : undefined,
                txHash: undefined
            });
        });
    }
    const [onPresentZapInModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConfirmZapInModal__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
        title: t("You will receive"),
        customOnDismiss: handleDismissConfirmation,
        attemptingTxn: attemptingTxn,
        hash: txHash,
        pendingText: pendingText,
        pair: pair,
        allowedSlippage: allowedSlippage,
        onAdd: onZapIn,
        parsedAmounts: parsedAmounts,
        currencies: currencies,
        liquidityErrorMessage: liquidityErrorMessage,
        price: price,
        poolTokenPercentage: zapIn.poolTokenPercentage,
        liquidityMinted: zapIn.liquidityMinted,
        zapSwapTokenField: zapIn.swapTokenField,
        zapSwapOutTokenField: zapIn.swapOutTokenField,
        zapInEstimated: zapIn.zapInEstimated,
        rebalancing: rebalancing,
        zapMode: zapModeStatus,
        toggleZapMode: setTemporarilyZapMode
    }), true, true, "zapInModal");
    const handleEnableZap = ()=>{
        if (!zapMode) {
            setTemporarilyZapMode(!zapMode);
        }
    };
    let isValid = !error;
    let errorText = error;
    if (preferZapInstead) {
        isValid = !error && !zapIn.error;
        errorText = error ?? zapIn.error;
    } else {
        isValid = !error && !addError;
        errorText = error ?? addError;
    }
    const buttonDisabled = !isValid || (zapIn.parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] || !preferZapInstead && zapTokenCheckedA) && approvalA !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.APPROVED */ .UK.APPROVED || (zapIn.parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B] || !preferZapInstead && zapTokenCheckedB) && approvalB !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.APPROVED */ .UK.APPROVED || zapIn.priceSeverity > 3 && preferZapInstead;
    const showFieldAApproval = (zapTokenCheckedA || !preferZapInstead) && (approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.NOT_APPROVED */ .UK.NOT_APPROVED || approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.PENDING */ .UK.PENDING);
    const showFieldBApproval = (zapTokenCheckedB || !preferZapInstead) && (approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.NOT_APPROVED */ .UK.NOT_APPROVED || approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.PENDING */ .UK.PENDING);
    const shouldShowApprovalGroup = (showFieldAApproval || showFieldBApproval) && isValid;
    const oneCurrencyIsWNATIVE = Boolean(chainId && (currencyA && currencyA.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.WNATIVE[chainId]) || currencyB && currencyB.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.WNATIVE[chainId])));
    const noAnyInputAmount = !parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] && !parsedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B];
    const showAddLiquidity = !!currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] && !!currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B] && steps === Steps.Add || !canZap;
    const showZapWarning = preferZapInstead && !noAnyInputAmount && (!rebalancing && !(!zapTokenCheckedA && !zapTokenCheckedB) || rebalancing && zapIn.priceSeverity > 3);
    const showReduceZapTokenButton = preferZapInstead && (zapIn.priceSeverity > 3 || zapIn.zapInEstimatedError) && maxAmounts[zapIn.swapTokenField];
    const showRebalancingConvert = !showZapWarning && !noAnyInputAmount && !showReduceZapTokenButton && preferZapInstead && zapIn.isDependentAmountGreaterThanMaxAmount && rebalancing;
    const showZapIsAvailable = !zapMode && !showZapWarning && !noAnyInputAmount && (!zapTokenCheckedA || !zapTokenCheckedB) && !noLiquidity && !(pair && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(pair.reserve0.quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.MINIMUM_LIQUIDITY) || pair && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(pair.reserve1.quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.MINIMUM_LIQUIDITY));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Page__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_App__WEBPACK_IMPORTED_MODULE_21__/* .AppBody */ .j, {
                children: [
                    !showAddLiquidity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChoosePair__WEBPACK_IMPORTED_MODULE_41__/* .ChoosePair */ .E, {
                        error: error,
                        currencyA: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                        currencyB: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                        onNext: ()=>setSteps(Steps.Add)
                    }),
                    showAddLiquidity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App__WEBPACK_IMPORTED_MODULE_21__/* .AppHeader */ .t, {
                                title: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol && currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol ? `${(0,utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_12__/* .getLPSymbol */ .z)(currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].symbol, currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].symbol, chainId)}` : t("Add Liquidity"),
                                subtitle: t("Receive LP tokens and earn 0.17% trading fees"),
                                helper: t("Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool."),
                                backTo: canZap ? ()=>setSteps(Steps.Choose) : "/liquidity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__/* .AutoColumn */ .Tz, {
                                    gap: "20px",
                                    children: [
                                        noLiquidity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__/* .ColumnCenter */ .lg, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                                variant: "warning",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                            bold: true,
                                                            mb: "8px",
                                                            children: t("You are the first liquidity provider.")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                            mb: "8px",
                                                            children: t("The ratio of tokens you add will set the price of this pool.")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                            children: t("Once you are happy with the rate click supply to review.")
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            disableCurrencySelect: canZap,
                                            showBUSD: true,
                                            onInputBlur: canZap ? zapIn.onInputBlurOnce : undefined,
                                            error: zapIn.priceSeverity > 3 && zapIn.swapTokenField === _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A,
                                            disabled: canZap && !zapTokenCheckedA,
                                            beforeButton: canZap && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_42__/* .ZapCheckbox */ .y, {
                                                disabled: currencyBalances?.[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.equalTo(0),
                                                checked: zapTokenCheckedA,
                                                onChange: (e)=>{
                                                    setZapTokenToggleA(e.target.checked);
                                                }
                                            }),
                                            onCurrencySelect: handleCurrencyASelect,
                                            zapStyle: canZap ? "zap" : "noZap",
                                            value: formattedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                                            onUserInput: onFieldAInput,
                                            onPercentInput: (percent)=>{
                                                if (maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]) {
                                                    onFieldAInput(maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.multiply(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.Percent(percent, 100)).toExact() ?? "");
                                                }
                                            },
                                            onMax: ()=>{
                                                onFieldAInput(maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.toExact() ?? "");
                                            },
                                            showQuickInputButton: true,
                                            showMaxButton: !atMaxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                                            currency: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
                                            id: "add-liquidity-input-tokena",
                                            showCommonBases: true,
                                            commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_45__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__/* .ColumnCenter */ .lg, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                width: "16px"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            showBUSD: true,
                                            onInputBlur: canZap ? zapIn.onInputBlurOnce : undefined,
                                            disabled: canZap && !zapTokenCheckedB,
                                            error: zapIn.priceSeverity > 3 && zapIn.swapTokenField === _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B,
                                            beforeButton: canZap && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_42__/* .ZapCheckbox */ .y, {
                                                disabled: currencyBalances?.[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.equalTo(0),
                                                checked: zapTokenCheckedB,
                                                onChange: (e)=>{
                                                    setZapTokenToggleB(e.target.checked);
                                                }
                                            }),
                                            onCurrencySelect: handleCurrencyBSelect,
                                            disableCurrencySelect: canZap,
                                            zapStyle: canZap ? "zap" : "noZap",
                                            value: formattedAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                                            onUserInput: onFieldBInput,
                                            onPercentInput: (percent)=>{
                                                if (maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]) {
                                                    onFieldBInput(maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.multiply(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.Percent(percent, 100)).toExact() ?? "");
                                                }
                                            },
                                            onMax: ()=>{
                                                onFieldBInput(maxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.toExact() ?? "");
                                            },
                                            showQuickInputButton: true,
                                            showMaxButton: !atMaxAmounts[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                                            currency: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B],
                                            id: "add-liquidity-input-tokenb",
                                            showCommonBases: true,
                                            commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_45__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                        }),
                                        showZapWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                            variant: zapIn.priceSeverity > 3 ? "danger" : "warning",
                                            children: zapIn.priceSeverity > 3 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* .MessageText */ .Y, {
                                                children: [
                                                    t("Price Impact Too High."),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: t("Reduce amount of %token% to maximum limit", {
                                                            token: currencies[zapIn.swapTokenField]?.symbol
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* .MessageText */ .Y, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: t("No %token% input.", {
                                                            token: currencies[zapIn.swapOutTokenField]?.symbol
                                                        })
                                                    }),
                                                    " ",
                                                    t("Some of your %token0% will be converted to %token1%.", {
                                                        token0: currencies[zapIn.swapTokenField]?.symbol,
                                                        token1: currencies[zapIn.swapOutTokenField]?.symbol
                                                    })
                                                ]
                                            })
                                        }),
                                        showReduceZapTokenButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__/* .RowFixed */ .DA, {
                                            style: {
                                                margin: "auto"
                                            },
                                            onClick: ()=>zapIn.convertToMaxZappable(),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                                variant: "secondary",
                                                scale: "sm",
                                                children: t("Reduce %token%", {
                                                    token: currencies[zapIn.swapTokenField]?.symbol
                                                })
                                            })
                                        }),
                                        showZapIsAvailable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                            variant: "warning",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* .MessageText */ .Y, {
                                                children: [
                                                    t("Zap allows you to add liquidity with only 1 single token. Click"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                                        p: "0 4px",
                                                        scale: "sm",
                                                        variant: "text",
                                                        height: "auto",
                                                        onClick: handleEnableZap,
                                                        children: t("here")
                                                    }),
                                                    t("to try.")
                                                ]
                                            })
                                        }),
                                        showRebalancingConvert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                            variant: "warning",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__/* .AutoColumn */ .Tz, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* .MessageText */ .Y, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: t("Not enough %token%.", {
                                                                token: currencies[zapIn.swapOutTokenField]?.symbol
                                                            })
                                                        }),
                                                        " ",
                                                        zapIn.gasOverhead ? t("Some of your %token0% will be converted to %token1% before adding liquidity, but this may cause higher gas fees.", {
                                                            token0: currencies[zapIn.swapTokenField]?.symbol,
                                                            token1: currencies[zapIn.swapOutTokenField]?.symbol
                                                        }) : t("Some of your %token0% will be converted to %token1%.", {
                                                            token0: currencies[zapIn.swapTokenField]?.symbol,
                                                            token1: currencies[zapIn.swapOutTokenField]?.symbol
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        showRebalancingConvert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__/* .RowFixed */ .DA, {
                                            style: {
                                                margin: "auto"
                                            },
                                            onClick: ()=>{
                                                if (dependentField === _state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A) {
                                                    onFieldAInput(maxAmounts[dependentField]?.toExact() ?? "");
                                                } else {
                                                    onFieldBInput(maxAmounts[dependentField]?.toExact() ?? "");
                                                }
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                                variant: "secondary",
                                                scale: "sm",
                                                children: t("Don’t convert")
                                            })
                                        }),
                                        currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] && currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B] && pairState !== _hooks_usePairs__WEBPACK_IMPORTED_MODULE_25__/* .PairState.INVALID */ ._G.INVALID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_18__/* .LightCard */ .hl, {
                                                padding: "0px",
                                                borderRadius: "20px",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__/* .RowBetween */ .m0, {
                                                        padding: "1rem",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                            fontSize: "14px",
                                                            children: noLiquidity ? t("Initial prices and pool share") : t("Prices and pool share")
                                                        })
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_18__/* .LightCard */ .hl, {
                                                        padding: "1rem",
                                                        borderRadius: "20px",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolPriceBar__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                                                            currencies: currencies,
                                                            poolTokenPercentage: preferZapInstead ? zapIn.poolTokenPercentage : poolTokenPercentage,
                                                            noLiquidity: noLiquidity,
                                                            price: price
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__/* .RowBetween */ .m0, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                    bold: true,
                                                    fontSize: "12px",
                                                    color: "secondary",
                                                    children: t("Slippage Tolerance")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                    bold: true,
                                                    color: "primary",
                                                    children: [
                                                        allowedSlippage / 100,
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        }),
                                        pair && poolData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__/* .RowBetween */ .m0, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .Z, {
                                                    ref: targetRef,
                                                    bold: true,
                                                    fontSize: "12px",
                                                    color: "secondary",
                                                    children: t("LP reward APR")
                                                }),
                                                tooltipVisible && tooltip,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                    bold: true,
                                                    color: "primary",
                                                    children: [
                                                        (0,_utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_43__/* .formatAmount */ .d)(poolData.lpApr7d),
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        }),
                                        addIsUnsupported || addIsWarning ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                            disabled: true,
                                            mb: "4px",
                                            children: t("Unsupported Asset")
                                        }) : !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}) : isWrongNetwork ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_11__/* .CommitButton */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__/* .AutoColumn */ .Tz, {
                                            gap: "md",
                                            children: [
                                                shouldShowApprovalGroup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_23__/* .RowBetween */ .m0, {
                                                    style: {
                                                        gap: "8px"
                                                    },
                                                    children: [
                                                        showFieldAApproval && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                                            onClick: approveACallback,
                                                            disabled: approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.PENDING */ .UK.PENDING,
                                                            width: "100%",
                                                            children: approvalA === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.PENDING */ .UK.PENDING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Dots__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                                                children: t("Enabling %asset%", {
                                                                    asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol
                                                                })
                                                            }) : t("Enable %asset%", {
                                                                asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol
                                                            })
                                                        }),
                                                        showFieldBApproval && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                                            onClick: approveBCallback,
                                                            disabled: approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.PENDING */ .UK.PENDING,
                                                            width: "100%",
                                                            children: approvalB === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_26__/* .ApprovalState.PENDING */ .UK.PENDING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Dots__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                                                children: t("Enabling %asset%", {
                                                                    asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol
                                                                })
                                                            }) : t("Enable %asset%", {
                                                                asset: currencies[_state_mint_actions__WEBPACK_IMPORTED_MODULE_28__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_11__/* .CommitButton */ .A, {
                                                    isLoading: preferZapInstead && zapInEstimating,
                                                    variant: !isValid || zapIn.priceSeverity > 2 ? "danger" : "primary",
                                                    onClick: ()=>{
                                                        if (preferZapInstead) {
                                                            setLiquidityState({
                                                                attemptingTxn: false,
                                                                liquidityErrorMessage: undefined,
                                                                txHash: undefined
                                                            });
                                                            onPresentZapInModal();
                                                            return;
                                                        }
                                                        if (expertMode) {
                                                            onAdd();
                                                        } else {
                                                            setLiquidityState({
                                                                attemptingTxn: false,
                                                                liquidityErrorMessage: undefined,
                                                                txHash: undefined
                                                            });
                                                            onPresentAddLiquidityModal();
                                                        }
                                                    },
                                                    disabled: buttonDisabled,
                                                    children: errorText || t("Supply")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            !(addIsUnsupported || addIsWarning) ? pair && !noLiquidity && pairState !== _hooks_usePairs__WEBPACK_IMPORTED_MODULE_25__/* .PairState.INVALID */ ._G.INVALID ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_19__/* .AutoColumn */ .Tz, {
                style: {
                    minWidth: "20rem",
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PositionCard__WEBPACK_IMPORTED_MODULE_22__/* .MinimalPositionCard */ .WP, {
                    showUnwrapped: oneCurrencyIsWNATIVE,
                    pair: pair
                })
            }) : null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UnsupportedCurrencyFooter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                currencies: [
                    currencies.CURRENCY_A,
                    currencies.CURRENCY_B
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useCurrencySelectRoute)
/* harmony export */ });
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5369);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_currencyId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36099);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_0__]);
hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useCurrencySelectRoute = ()=>{
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [currencyIdA, currencyIdB] = router.query.currency || [];
    const handleCurrencyASelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((currencyA_)=>{
        const newCurrencyIdA = (0,utils_currencyId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(currencyA_);
        if (newCurrencyIdA === currencyIdB) {
            router.replace(`/add/${currencyIdB}/${currencyIdA}`, undefined, {
                shallow: true
            });
        } else if (currencyIdB) {
            router.replace(`/add/${newCurrencyIdA}/${currencyIdB}`, undefined, {
                shallow: true
            });
        } else {
            router.replace(`/add/${newCurrencyIdA}`, undefined, {
                shallow: true
            });
        }
    }, [
        currencyIdB,
        router,
        currencyIdA
    ]);
    const handleCurrencyBSelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((currencyB_)=>{
        const newCurrencyIdB = (0,utils_currencyId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(currencyB_);
        if (currencyIdA === newCurrencyIdB) {
            if (currencyIdB) {
                router.replace(`/add/${currencyIdB}/${newCurrencyIdB}`, undefined, {
                    shallow: true
                });
            } else {
                router.replace(`/add/${newCurrencyIdB}`, undefined, {
                    shallow: true
                });
            }
        } else {
            router.replace(`/add/${currencyIdA || native.symbol}/${newCurrencyIdB}`, undefined, {
                shallow: true
            });
        }
    }, [
        currencyIdA,
        router,
        currencyIdB,
        native
    ]);
    return {
        handleCurrencyASelect,
        handleCurrencyBSelect
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 49019:
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
            d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 6187:
/***/ ((module) => {

module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 51541:
/***/ ((module) => {

module.exports = require("@ethersproject/address");

/***/ }),

/***/ 65757:
/***/ ((module) => {

module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 49935:
/***/ ((module) => {

module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 26644:
/***/ ((module) => {

module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 90399:
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 76693:
/***/ ((module) => {

module.exports = require("@ethersproject/solidity");

/***/ }),

/***/ 49213:
/***/ ((module) => {

module.exports = require("@ethersproject/strings");

/***/ }),

/***/ 93138:
/***/ ((module) => {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ 90615:
/***/ ((module) => {

module.exports = require("@gelatonetwork/limit-orders-lib");

/***/ }),

/***/ 18310:
/***/ ((module) => {

module.exports = require("@gnosis.pm/safe-apps-wagmi");

/***/ }),

/***/ 72324:
/***/ ((module) => {

module.exports = require("@radix-ui/react-slot");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 58097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 51554:
/***/ ((module) => {

module.exports = require("@uniswap/token-lists");

/***/ }),

/***/ 46171:
/***/ ((module) => {

module.exports = require("@vanilla-extract/recipes/createRuntimeFn");

/***/ }),

/***/ 61382:
/***/ ((module) => {

module.exports = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");

/***/ }),

/***/ 75888:
/***/ ((module) => {

module.exports = require("ajv");

/***/ }),

/***/ 22575:
/***/ ((module) => {

module.exports = require("big.js");

/***/ }),

/***/ 34215:
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ 68103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 74146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 97312:
/***/ ((module) => {

module.exports = require("decimal.js-light");

/***/ }),

/***/ 64175:
/***/ ((module) => {

module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 52424:
/***/ ((module) => {

module.exports = require("jsbi");

/***/ }),

/***/ 72607:
/***/ ((module) => {

module.exports = require("local-storage");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 90221:
/***/ ((module) => {

module.exports = require("lodash/chunk");

/***/ }),

/***/ 38190:
/***/ ((module) => {

module.exports = require("lodash/flatMap");

/***/ }),

/***/ 57626:
/***/ ((module) => {

module.exports = require("lodash/fromPairs");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 51546:
/***/ ((module) => {

module.exports = require("lodash/kebabCase");

/***/ }),

/***/ 63385:
/***/ ((module) => {

module.exports = require("lodash/keyBy");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 50541:
/***/ ((module) => {

module.exports = require("lodash/memoize");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 9822:
/***/ ((module) => {

module.exports = require("lodash/reduce");

/***/ }),

/***/ 4354:
/***/ ((module) => {

module.exports = require("lodash/times");

/***/ }),

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 88032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 43860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 23599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 80551:
/***/ ((module) => {

module.exports = require("react-window");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 60656:
/***/ ((module) => {

module.exports = require("tiny-warning");

/***/ }),

/***/ 86350:
/***/ ((module) => {

module.exports = require("toformat");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 22216:
/***/ ((module) => {

module.exports = require("wagmi/chains");

/***/ }),

/***/ 51276:
/***/ ((module) => {

module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ 74738:
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ 79035:
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ 61556:
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ 21176:
/***/ ((module) => {

module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 82451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

module.exports = import("swr/immutable");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,6577,7454,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,4866,7379,4512,433,8393,1436,8015,9460,9860,5639,4303,9480,1051,8386,9800,917,5366,9818,6081], () => (__webpack_exec__(93809)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[[...currency]].js.map