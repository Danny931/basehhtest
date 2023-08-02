"use strict";
exports.id = 9818;
exports.ids = [9818,3424];
exports.modules = {

/***/ 5054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ AddToWalletTextOptions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92238);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72315);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94608);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87528);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41120);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11542);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33108);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__, _utils_wallet__WEBPACK_IMPORTED_MODULE_4__]);
([components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__, _utils_wallet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






var AddToWalletTextOptions;
(function(AddToWalletTextOptions) {
    AddToWalletTextOptions[AddToWalletTextOptions["NO_TEXT"] = 0] = "NO_TEXT";
    AddToWalletTextOptions[AddToWalletTextOptions["TEXT"] = 1] = "TEXT";
    AddToWalletTextOptions[AddToWalletTextOptions["TEXT_WITH_ASSET"] = 2] = "TEXT_WITH_ASSET";
})(AddToWalletTextOptions || (AddToWalletTextOptions = {}));
const Icons = {
    // TODO: Brave
    Binance: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    "Coinbase Wallet": _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    Opera: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    TokenPocket: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    "Trust Wallet": _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    MetaMask: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
};
const getWalletText = (textOptions, tokenSymbol, t)=>{
    return textOptions !== AddToWalletTextOptions.NO_TEXT && (textOptions === AddToWalletTextOptions.TEXT ? t("Add to Wallet") : t("Add %asset% to Wallet", {
        asset: tokenSymbol
    }));
};
const getWalletIcon = (marginTextBetweenLogo, name)=>{
    const iconProps = {
        width: "16px",
        ...marginTextBetweenLogo && {
            ml: marginTextBetweenLogo
        }
    };
    if (name && Icons[name]) {
        const Icon = Icons[name];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isTrust) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isCoinbaseWallet) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isTokenPocket) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isMetaMask) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        ...iconProps
    });
};
const AddToWalletButton = ({ tokenAddress , tokenSymbol , tokenDecimals , tokenLogo , textOptions =AddToWalletTextOptions.NO_TEXT , marginTextBetweenLogo ="0px" , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { connector , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();
    const isCanRegisterToken = (0,_utils_wallet__WEBPACK_IMPORTED_MODULE_4__/* .canRegisterToken */ .U)();
    if (connector && connector.name === "Binance") return null;
    if (!(connector && connector.watchAsset && isConnected)) return null;
    if (!isCanRegisterToken) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        ...props,
        onClick: ()=>{
            const image = tokenLogo ? components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__/* .BAD_SRCS */ .X[tokenLogo] ? undefined : tokenLogo : undefined;
            connector.watchAsset?.({
                address: tokenAddress,
                symbol: tokenSymbol,
                image,
                // @ts-ignore
                decimals: tokenDecimals
            });
        },
        children: [
            getWalletText(textOptions, tokenSymbol, t),
            getWalletIcon(marginTextBetweenLogo, connector?.name)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWalletButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CurrencyInputPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33231);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64313);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59711);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3256);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9270);
/* harmony import */ var _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33472);
/* harmony import */ var _SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20917);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87573);
/* harmony import */ var _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5054);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__, _SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_9__, _Logo__WEBPACK_IMPORTED_MODULE_10__, _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__, _SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_9__, _Logo__WEBPACK_IMPORTED_MODULE_10__, _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const InputRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-b8572d6c-0"
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ selected  })=>selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"};
`;
const CurrencySelectButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).attrs({
    variant: "text",
    scale: "sm"
}).withConfig({
    componentId: "sc-b8572d6c-1"
})`
  padding: 0 0.5rem;
  ${({ zapStyle , theme  })=>zapStyle && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: 8px;
      background: ${theme.colors.background};
      border: 1px solid ${theme.colors.cardBorder};
      border-radius: ${zapStyle === "zap" ? "0px" : "8px"} 8px 0px 0px;
      height: auto;
    `};
`;
const LabelRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-b8572d6c-2"
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme  })=>theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
`;
const InputPanel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-b8572d6c-3"
})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
  z-index: 1;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-b8572d6c-4"
})`
  border-radius: 16px;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme , error  })=>theme.shadows[error ? "warning" : "inset"]};
  ${({ zapStyle  })=>!!zapStyle && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      border-radius: 0px 16px 16px 16px;
    `};
`;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-b8572d6c-5"
})`
  position: absolute;
  inset: 0;
  opacity: 0.6;
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
`;
function CurrencyInputPanel({ value , onUserInput , onInputBlur , onPercentInput , onMax , showQuickInputButton =false , showMaxButton , label , onCurrencySelect , currency , disableCurrencySelect =false , hideBalance =false , zapStyle , beforeButton , pair =null , otherCurrency , id , showCommonBases , commonBasesType , disabled , error , showBUSD  }) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .useWeb3React */ .Ge)();
    const selectedCurrencyBalance = (0,_state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrencyBalance */ ._h)(account ?? undefined, currency ?? undefined);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const token = pair ? pair.liquidityToken : currency?.isToken ? currency : null;
    const tokenAddress = token ? (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(token.address) : null;
    const amountInDollar = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__/* .useBUSDCurrencyAmount */ .vB)(showBUSD ? currency : undefined, Number.isFinite(+value) ? +value : undefined);
    const [onPresentCurrencyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchModal_CurrencySearchModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        onCurrencySelect: onCurrencySelect,
        selectedCurrency: currency,
        otherSelectedCurrency: otherCurrency,
        showCommonBases: showCommonBases,
        commonBasesType: commonBasesType
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        position: "relative",
        id: id,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        children: [
                            beforeButton,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrencySelectButton, {
                                zapStyle: zapStyle,
                                className: "open-currency-select-button",
                                selected: !!currency,
                                onClick: ()=>{
                                    if (!disableCurrencySelect) {
                                        onPresentCurrencyModal();
                                    }
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [
                                        pair ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_10__/* .DoubleCurrencyLogo */ .ge, {
                                            currency0: pair.token0,
                                            currency1: pair.token1,
                                            size: 16,
                                            margin: true
                                        }) : currency ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyLogo */ .Xw, {
                                            currency: currency,
                                            size: "24px",
                                            style: {
                                                marginRight: "8px"
                                            }
                                        }) : null,
                                        pair ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            id: "pair",
                                            bold: true,
                                            children: [
                                                pair?.token0.symbol,
                                                ":",
                                                pair?.token1.symbol
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            id: "pair",
                                            bold: true,
                                            children: (currency && currency.symbol && currency.symbol.length > 20 ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(currency.symbol.length - 5, currency.symbol.length)}` : currency?.symbol) || t("Select a currency")
                                        }),
                                        !disableCurrencySelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                                    ]
                                })
                            }),
                            token && tokenAddress ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                style: {
                                    gap: "4px"
                                },
                                ml: "4px",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* .CopyButton */ .q, {
                                        width: "16px",
                                        buttonColor: "textSubtle",
                                        text: tokenAddress,
                                        tooltipMessage: t("Token address copied"),
                                        tooltipTop: -20,
                                        tooltipRight: 40,
                                        tooltipFontSize: 12
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        variant: "text",
                                        p: "0",
                                        height: "auto",
                                        width: "fit-content",
                                        tokenAddress: tokenAddress,
                                        tokenSymbol: token.symbol,
                                        tokenDecimals: token.decimals,
                                        tokenLogo: token instanceof _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__/* .WrappedTokenInfo */ .DT ? token.logoURI : undefined
                                    })
                                ]
                            }) : null
                        ]
                    }),
                    account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        onClick: !disabled && onMax,
                        color: "textSubtle",
                        fontSize: "14px",
                        style: {
                            display: "inline",
                            cursor: "pointer"
                        },
                        children: !hideBalance && !!currency ? t("Balance: %balance%", {
                            balance: selectedCurrencyBalance?.toSignificant(6) ?? t("Loading")
                        }) : " -"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputPanel, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                        as: "label",
                        zapStyle: zapStyle,
                        error: error,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LabelRow, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* .NumericalInput */ .$, {
                                    error: error,
                                    disabled: disabled,
                                    className: "token-amount-input",
                                    value: value,
                                    onBlur: onInputBlur,
                                    onUserInput: (val)=>{
                                        onUserInput(val);
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputRow, {
                                selected: disableCurrencySelect,
                                children: [
                                    !!currency && showBUSD && Number.isFinite(amountInDollar) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        fontSize: "12px",
                                        color: "textSubtle",
                                        mr: "12px",
                                        children: [
                                            "~",
                                            (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(amountInDollar),
                                            " USD"
                                        ]
                                    }),
                                    account && currency && selectedCurrencyBalance?.greaterThan(0) && !disabled && label !== "To" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        alignItems: "right",
                                        justifyContent: "right",
                                        children: [
                                            showQuickInputButton && onPercentInput && [
                                                25,
                                                50,
                                                75
                                            ].map((percent)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    onClick: ()=>{
                                                        onPercentInput(percent);
                                                    },
                                                    scale: "xs",
                                                    mr: "5px",
                                                    variant: "secondary",
                                                    style: {
                                                        textTransform: "uppercase"
                                                    },
                                                    children: [
                                                        percent,
                                                        "%"
                                                    ]
                                                }, `btn_quickCurrency${percent}`)),
                                            showMaxButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    onMax?.();
                                                },
                                                scale: "xs",
                                                variant: "secondary",
                                                style: {
                                                    textTransform: "uppercase"
                                                },
                                                children: t("Max")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Overlay, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ht": () => (/* binding */ TransactionErrorContent),
/* harmony export */   "pM": () => (/* binding */ ConfirmationModalContent),
/* harmony export */   "rD": () => (/* binding */ TransactionSubmittedContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88800);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24674);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94250);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3256);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77253);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5054);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_6__, _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_6__, _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-1b68f794-0"
})`
  width: 100%;
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_Column__WEBPACK_IMPORTED_MODULE_7__/* .AutoColumn */ .Tz).withConfig({
    componentId: "sc-1b68f794-1"
})`
  padding: 24px;
`;
const ConfirmedIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_Column__WEBPACK_IMPORTED_MODULE_7__/* .ColumnCenter */ .lg).withConfig({
    componentId: "sc-1b68f794-2"
})`
  padding: 24px 0;
`;
function ConfirmationPendingContent({ pendingText  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmedIcon, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_7__/* .AutoColumn */ .Tz, {
                gap: "12px",
                justify: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        fontSize: "20px",
                        children: t("Waiting For Confirmation")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Column__WEBPACK_IMPORTED_MODULE_7__/* .AutoColumn */ .Tz, {
                        gap: "12px",
                        justify: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            bold: true,
                            small: true,
                            textAlign: "center",
                            children: pendingText
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        small: true,
                        color: "textSubtle",
                        textAlign: "center",
                        children: t("Confirm this transaction in your wallet")
                    })
                ]
            })
        ]
    });
}
function TransactionSubmittedContent({ onDismiss , chainId , hash , currencyToAdd  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const token = (0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_5__/* .wrappedCurrency */ .pu)(currencyToAdd, chainId);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Section, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmedIcon, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        strokeWidth: 0.5,
                        width: "90px",
                        color: "primary"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_7__/* .AutoColumn */ .Tz, {
                    gap: "12px",
                    justify: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            fontSize: "20px",
                            children: t("Transaction Submitted")
                        }),
                        chainId && hash && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            external: true,
                            small: true,
                            href: (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(hash, "transaction", chainId),
                            children: t("View on %site%", {
                                site: (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreName */ .X0)(chainId)
                            })
                        }),
                        currencyToAdd && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            variant: "tertiary",
                            mt: "12px",
                            width: "fit-content",
                            marginTextBetweenLogo: "6px",
                            textOptions: _AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_9__/* .AddToWalletTextOptions.TEXT_WITH_ASSET */ .L.TEXT_WITH_ASSET,
                            tokenAddress: token.address,
                            tokenSymbol: currencyToAdd.symbol,
                            tokenDecimals: token.decimals,
                            tokenLogo: token instanceof _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_6__/* .WrappedTokenInfo */ .DT ? token.logoURI : undefined
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            onClick: onDismiss,
                            mt: "20px",
                            children: t("Close")
                        })
                    ]
                })
            ]
        })
    });
}
function ConfirmationModalContent({ bottomContent , topContent  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                children: topContent()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                children: bottomContent()
            })
        ]
    });
}
function TransactionErrorContent({ message , onDismiss  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_7__/* .AutoColumn */ .Tz, {
                justify: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        color: "failure",
                        width: "64px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        color: "failure",
                        style: {
                            textAlign: "center",
                            width: "85%",
                            wordBreak: "break-word"
                        },
                        children: message
                    })
                ]
            }),
            onDismiss ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                justifyContent: "center",
                pt: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    onClick: onDismiss,
                    children: t("Dismiss")
                })
            }) : null
        ]
    });
}
const TransactionConfirmationModal = ({ title , onDismiss , customOnDismiss , attemptingTxn , hash , pendingText , content , currencyToAdd , ...props })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (customOnDismiss) {
            customOnDismiss();
        }
        onDismiss?.();
    }, [
        customOnDismiss,
        onDismiss
    ]);
    if (!chainId) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
        title: title,
        headerBackground: "gradientCardHeader",
        ...props,
        onDismiss: handleDismiss,
        children: attemptingTxn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmationPendingContent, {
            pendingText: pendingText
        }) : hash ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransactionSubmittedContent, {
            chainId: chainId,
            hash: hash,
            onDismiss: handleDismiss,
            currencyToAdd: currencyToAdd
        }) : content()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionConfirmationModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gelatonetwork_limit_orders_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90615);
/* harmony import */ var _gelatonetwork_limit_orders_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gelatonetwork_limit_orders_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92794);
/* harmony import */ var hooks_useProviderOrSigner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40395);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useProviderOrSigner__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useProviderOrSigner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useGelatoLimitOrdersLib = ()=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const providerOrSigner = (0,hooks_useProviderOrSigner__WEBPACK_IMPORTED_MODULE_5__/* .useProviderOrSigner */ .J)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!chainId || !providerOrSigner) {
            console.error("Could not instantiate GelatoLimitOrders: missing chainId or library");
            return undefined;
        }
        if (chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC) return undefined;
        try {
            return new _gelatonetwork_limit_orders_lib__WEBPACK_IMPORTED_MODULE_2__.GelatoLimitOrders(chainId, providerOrSigner, config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__/* .GELATO_HANDLER */ .uX, false);
        } catch (error) {
            console.error(`Could not instantiate GelatoLimitOrders: ${error.message}`);
            return undefined;
        }
    }, [
        chainId,
        providerOrSigner
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGelatoLimitOrdersLib);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UK": () => (/* binding */ ApprovalState),
/* harmony export */   "qL": () => (/* binding */ useApproveCallback),
/* harmony export */   "re": () => (/* binding */ useApproveCallbackFromTrade),
/* harmony export */   "tz": () => (/* binding */ useApproveCallbackFromInputCurrencyAmount)
/* harmony export */ });
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92794);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_sentry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20233);
/* harmony import */ var _state_swap_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57246);
/* harmony import */ var _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52284);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var _utils_exchange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23732);
/* harmony import */ var _limitOrders_useGelatoLimitOrdersLib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39780);
/* harmony import */ var _useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80361);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74860);
/* harmony import */ var _useTokenAllowance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__, _utils_exchange__WEBPACK_IMPORTED_MODULE_9__, _limitOrders_useGelatoLimitOrdersLib__WEBPACK_IMPORTED_MODULE_10__, _useContract__WEBPACK_IMPORTED_MODULE_12__, _useTokenAllowance__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__, _utils_exchange__WEBPACK_IMPORTED_MODULE_9__, _limitOrders_useGelatoLimitOrdersLib__WEBPACK_IMPORTED_MODULE_10__, _useContract__WEBPACK_IMPORTED_MODULE_12__, _useTokenAllowance__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















var ApprovalState;
(function(ApprovalState) {
    ApprovalState[ApprovalState["UNKNOWN"] = 0] = "UNKNOWN";
    ApprovalState[ApprovalState["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApprovalState[ApprovalState["PENDING"] = 2] = "PENDING";
    ApprovalState[ApprovalState["APPROVED"] = 3] = "APPROVED";
})(ApprovalState || (ApprovalState = {}));
// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
function useApproveCallback(amountToApprove, spender) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { callWithMarketGasPrice  } = (0,_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_11__/* .useCallWithMarketGasPrice */ .r)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .useToast */ .p)();
    const token = amountToApprove?.currency?.isToken ? amountToApprove.currency : undefined;
    const currentAllowance = (0,_useTokenAllowance__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(token, account ?? undefined, spender);
    const pendingApproval = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useHasPendingApproval */ .wB)(token?.address, spender);
    // check the current approval status
    const approvalState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
        if (amountToApprove.currency?.isNative) return ApprovalState.APPROVED;
        // we might not have enough data to know whether or not we need to approve
        if (!currentAllowance) return ApprovalState.UNKNOWN;
        // amountToApprove will be defined if currentAllowance is
        return currentAllowance.lessThan(amountToApprove) ? pendingApproval ? ApprovalState.PENDING : ApprovalState.NOT_APPROVED : ApprovalState.APPROVED;
    }, [
        amountToApprove,
        currentAllowance,
        pendingApproval,
        spender
    ]);
    const tokenContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_12__/* .useTokenContract */ .Ib)(token?.address);
    const addTransaction = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useTransactionAdder */ .h7)();
    const approve = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        if (approvalState !== ApprovalState.NOT_APPROVED) {
            toastError(t("Error"), t("Approve was called unnecessarily"));
            console.error("approve was called unnecessarily");
            return undefined;
        }
        if (!token) {
            toastError(t("Error"), t("No token"));
            console.error("no token");
            return undefined;
        }
        if (!tokenContract) {
            toastError(t("Error"), t("Cannot find contract of the token %tokenAddress%", {
                tokenAddress: token?.address
            }));
            console.error("tokenContract is null");
            return undefined;
        }
        if (!amountToApprove) {
            toastError(t("Error"), t("Missing amount to approve"));
            console.error("missing amount to approve");
            return undefined;
        }
        if (!spender) {
            toastError(t("Error"), t("No spender"));
            console.error("no spender");
            return undefined;
        }
        let useExact = false;
        const estimatedGas = await tokenContract.estimateGas.approve(spender, _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256).catch(()=>{
            // general fallback for tokens who restrict approval amounts
            useExact = true;
            return tokenContract.estimateGas.approve(spender, amountToApprove.quotient.toString());
        });
        return callWithMarketGasPrice(tokenContract, "approve", [
            spender,
            useExact ? amountToApprove.quotient.toString() : _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.MaxUint256
        ], {
            gasLimit: (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .calculateGasMargin */ .yC)(estimatedGas)
        }).then((response)=>{
            addTransaction(response, {
                summary: `Approve ${amountToApprove.currency.symbol}`,
                translatableSummary: {
                    text: "Approve %symbol%",
                    data: {
                        symbol: amountToApprove.currency.symbol
                    }
                },
                approval: {
                    tokenAddress: token.address,
                    spender
                },
                type: "approve"
            });
        }).catch((error)=>{
            (0,utils_sentry__WEBPACK_IMPORTED_MODULE_5__/* .logError */ .H)(error);
            console.error("Failed to approve token", error);
            if (error?.code !== 4001) {
                toastError(t("Error"), error.message);
            }
            throw error;
        });
    }, [
        approvalState,
        token,
        tokenContract,
        amountToApprove,
        spender,
        addTransaction,
        callWithMarketGasPrice,
        t,
        toastError, 
    ]);
    return [
        approvalState,
        approve
    ];
}
// wraps useApproveCallback in the context of a swap
function useApproveCallbackFromTrade(trade, allowedSlippage = 0, chainId) {
    const amountToApprove = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>trade ? (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_9__/* .computeSlippageAdjustedAmounts */ .b5)(trade, allowedSlippage)[_state_swap_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.INPUT */ .gN.INPUT] : undefined, [
        trade,
        allowedSlippage
    ]);
    return useApproveCallback(amountToApprove, config_constants_exchange__WEBPACK_IMPORTED_MODULE_3__/* .ROUTER_ADDRESS */ .bR[chainId]);
}
// Wraps useApproveCallback in the context of a Gelato Limit Orders
function useApproveCallbackFromInputCurrencyAmount(currencyAmountIn) {
    const gelatoLibrary = (0,_limitOrders_useGelatoLimitOrdersLib__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    return useApproveCallback(currencyAmountIn, gelatoLibrary?.erc20OrderRouter.address ?? undefined);
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

/***/ 76744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87070);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useContract__WEBPACK_IMPORTED_MODULE_2__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__]);
([_useContract__WEBPACK_IMPORTED_MODULE_2__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useTokenAllowance(token, owner, spender) {
    const contract = (0,_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useTokenContract */ .Ib)(token?.address, false);
    const inputs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            owner,
            spender
        ], [
        owner,
        spender
    ]);
    const allowance = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSingleCallResult */ .Wk)(contract, "allowance", inputs).result;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>token && allowance ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token, allowance.toString()) : undefined, [
        token,
        allowance
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTokenAllowance);

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

/***/ 54319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ canRegisterToken)
/* harmony export */ });
/* unused harmony export registerToken */
/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Logo_Logo__WEBPACK_IMPORTED_MODULE_0__]);
components_Logo_Logo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Set of helper functions to facilitate wallet setup

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */ const registerToken = async (tokenAddress, tokenSymbol, tokenDecimals, tokenLogo)=>{
    // better leave this undefined for default image instead of broken image url
    const image = tokenLogo ? BAD_SRCS[tokenLogo] ? undefined : tokenLogo : undefined;
    const tokenAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
            type: "ERC20",
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image
            }
        }
    });
    return tokenAdded;
};
const canRegisterToken = ()=> false && (0);

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

/***/ 43424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Spinner_Spinner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Svg/Svg.tsx
var Svg = __webpack_require__(44259);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Spinner/PanIcon.tsx



const Icon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Svg/* default */.Z, {
        viewBox: "0 0 256 256",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",
                fill: "#464649"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",
                fill: "#606063"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",
                fill: "#464649"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",
                fill: "#464649"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",
                fill: "#606063"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",
                fill: "#464649"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",
                fill: "#464649"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",
                fill: "#979797"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",
                fill: "#464649"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",
                fill: "#737373"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",
                fill: "#606063"
            })
        ]
    });
};
/* harmony default export */ const PanIcon = (Icon);

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Spinner/PancakeIcon.tsx



const PancakeIcon_Icon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Svg/* default */.Z, {
        viewBox: "0 0 128 128",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "128",
            height: "128",
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",
                    fill: "#FEDC90",
                    stroke: "#D1884F",
                    strokeWidth: "2.89134"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",
                    fill: "#D1884F",
                    stroke: "#633001",
                    strokeWidth: "2.89134"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",
                    fill: "#633001"
                })
            ]
        })
    });
};
/* harmony default export */ const PancakeIcon = (PancakeIcon_Icon);

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Spinner/Spinner.tsx





const rotate = external_styled_components_.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner_float = external_styled_components_.keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-da0aae9d-0"
})`
  position: relative;
`;
const RotatingPancakeIcon = external_styled_components_default()(PancakeIcon).withConfig({
    componentId: "sc-da0aae9d-1"
})`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;
const FloatingPanIcon = external_styled_components_default()(PanIcon).withConfig({
    componentId: "sc-da0aae9d-2"
})`
  animation: ${Spinner_float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;
const Spinner = ({ size =128  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(RotatingPancakeIcon, {
                width: `${size * 0.5}px`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FloatingPanIcon, {
                width: `${size}px`
            })
        ]
    });
};
/* harmony default export */ const Spinner_Spinner = (Spinner);


/***/ }),

/***/ 24761:
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
            d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 88800:
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
            d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 92238:
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
        viewBox: "0 0 40 40",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z",
            fill: "#F1BA0D"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72315:
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
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0, 0, 400,400",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            stroke: "none",
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M193.4 60.265C87.303 66.651 25.782 181.12 79.826 271.586c57.163 95.688 198.154 89.201 246.382-11.336C371.654 165.512 297.595 53.993 193.4 60.265m47.221 95.946c1.213.75 2.418 1.955 3.168 3.168l1.211 1.958v77.326l-1.211 1.958c-.75 1.213-1.955 2.418-3.168 3.168L238.663 245h-77.326l-1.958-1.211c-1.213-.75-2.418-1.955-3.168-3.168L155 238.663l-.119-37.831c-.08-25.344.018-38.306.297-39.267.685-2.365 2.559-4.562 4.876-5.717l2.127-1.06 38.241.106 38.241.106 1.958 1.211",
                    fill: "#fbfbfc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M183.6.43C41.847 12.741-42.613 163.705 21.396 290.354c49.819 98.572 170.31 138.107 268.958 88.25 98.572-49.819 138.107-170.31 88.25-268.958C348.052 49.197 290.688 9.389 222 .97c-6.325-.775-31.6-1.13-38.4-.54M218 60.975c81.04 11.263 135.239 87.02 119.351 166.825-15.844 79.589-97.673 129.334-175.893 106.929-74.141-21.237-117.409-99.181-96.187-173.271C81.09 106.232 129.39 66.081 186.8 60.433c5.76-.567 25.716-.22 31.2.542m-57.4 94.781c-1.92.838-3.855 2.682-4.648 4.427-.974 2.145-1.175 76.834-.213 79.13.828 1.974 2.657 3.923 4.444 4.735 2.145.974 76.834 1.175 79.13.213 1.974-.828 3.923-2.657 4.735-4.444.974-2.145 1.175-76.834.213-79.13-.828-1.974-2.657-3.923-4.444-4.735-2.115-.96-77.043-1.146-79.217-.196",
                    fill: "#0454fc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M181.5 155.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108M154.992 200c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5m90 0c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5M181.5 245.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108",
                    fill: "#5286fc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M192.7 60.282a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173M60.109 193.6c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-279.6 12.8c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-238.926 92.5c1.658 1.766 2.017 2.084 2.017 1.783 0-.064-.855-.919-1.9-1.9L99 297l1.783 1.9m198.017.1c-.972.99-1.677 1.8-1.567 1.8.11 0 .995-.81 1.967-1.8.972-.99 1.677-1.8 1.567-1.8-.11 0-.995.81-1.967 1.8m-106.1 40.882a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173",
                    fill: "#84acfc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M100.786 101.1l-2.186 2.3 2.3-2.186c2.137-2.032 2.483-2.414 2.186-2.414-.062 0-1.097 1.035-2.3 2.3M298.8 101c1.195 1.21 2.263 2.2 2.373 2.2.11 0-.778-.99-1.973-2.2-1.195-1.21-2.263-2.2-2.373-2.2-.11 0 .778.99 1.973 2.2",
                    fill: "#7cacfc"
                })
            ]
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

/***/ 11542:
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
        viewBox: "0 0 40 40",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z",
                fill: "#E17726"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z",
                fill: "#D5BFB2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z",
                fill: "#D5BFB2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z",
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z",
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z",
                fill: "#C0AC9D"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z",
                fill: "#161616"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z",
                fill: "#763E1A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z",
                fill: "#763E1A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z",
                fill: "#F5841F"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 94608:
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
        x: "0px",
        y: "0px",
        viewBox: "0 0 1000 1000",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: 416.6229,
                y1: 16.304,
                x2: 416.6229,
                y2: 985.446,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.3,
                        stopColor: "#ff1b2d"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.4381,
                        stopColor: "#fa1a2c"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.5939,
                        stopColor: "#ed1528"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.7581,
                        stopColor: "#d60e21"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.9272,
                        stopColor: "#b70519"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 1,
                        stopColor: "#a70014"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M335.4 781.8c-55.3-65.3-91.1-161.7-93.5-270v-23.6c2.4-108.3 38.2-204.7 93.5-270C407.2 125.1 513.8 66 632.8 66c73.2 0 141.8 22.4 200.4 61.3C745.2 48.5 629.2.5 501.9 0H500C223.9 0 0 223.9 0 500c0 268.2 211.1 487 476.2 499.4 7.9.4 15.8.6 23.8.6 128 0 244.8-48.1 333.2-127.2-58.6 38.8-127.1 61.2-200.4 61.2-119 0-225.6-59.1-297.4-152.2z",
                fill: "url(#a)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "b",
                gradientUnits: "userSpaceOnUse",
                x1: 667.7092,
                y1: 73.4257,
                x2: 667.7092,
                y2: 930.5844,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0,
                        stopColor: "#9c0000"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.7,
                        stopColor: "#ff4b4b"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M335.4 218.2c45.9-54.2 105.1-86.8 169.9-86.8 145.6 0 263.5 165 263.5 368.6s-118 368.6-263.5 368.6c-64.7 0-124-32.7-169.9-86.8C407.2 874.9 513.8 934 632.8 934c73.2 0 141.8-22.4 200.4-61.2C935.6 781.2 1000 648.1 1000 500c0-148.1-64.4-281.2-166.8-372.7C774.6 88.4 706.1 66 632.8 66c-119 0-225.6 59.1-297.4 152.2z",
                fill: "url(#b)"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 87528:
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
        viewBox: "0 0 1024 1024",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1041.52 0H-27V1024H1041.52V0Z",
                        fill: "#2980FE"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        clipPath: "url(#clip0_408_225)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M406.796 438.643H406.927C406.796 437.857 406.796 436.94 406.796 436.154V438.643Z",
                                fill: "#29AEFF"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M667.602 463.533H523.249V724.076C523.249 736.389 533.204 746.345 545.517 746.345H645.333C657.647 746.345 667.602 736.389 667.602 724.076V463.533Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M453.563 277H448.716H190.269C177.955 277 168 286.955 168 299.269V389.653C168 401.967 177.955 411.922 190.269 411.922H250.918H275.021V438.644V724.731C275.021 737.045 284.976 747 297.289 747H392.128C404.441 747 414.396 737.045 414.396 724.731V438.644V436.156V411.922H438.499H448.323H453.17C490.372 411.922 520.631 381.663 520.631 344.461C521.024 307.259 490.765 277 453.563 277Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M667.735 463.533V645.35C672.713 646.529 677.821 647.446 683.061 648.232C690.397 649.28 697.994 649.935 705.592 650.066C705.985 650.066 706.378 650.066 706.902 650.066V505.45C685.026 504.009 667.735 485.801 667.735 463.533Z",
                                fill: "url(#paint0_linear_408_225)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M709.781 277C606.822 277 523.249 360.573 523.249 463.533C523.249 552.084 584.946 626.225 667.733 645.35V463.533C667.733 440.347 686.596 421.484 709.781 421.484C732.967 421.484 751.83 440.347 751.83 463.533C751.83 483.051 738.6 499.425 720.523 504.14C717.117 505.057 713.449 505.581 709.781 505.581V650.066C713.449 650.066 716.986 649.935 720.523 649.804C818.505 644.171 896.314 562.956 896.314 463.533C896.445 360.573 812.872 277 709.781 277Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M709.78 650.066V505.581C708.733 505.581 707.816 505.581 706.768 505.45V650.066C707.816 650.066 708.864 650.066 709.78 650.066Z",
                                fill: "white"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint0_linear_408_225",
                        x1: "709.844",
                        y1: "556.827",
                        x2: "667.753",
                        y2: "556.827",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.9667",
                                stopColor: "white",
                                stopOpacity: "0.3233"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip0_408_225",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "728.448",
                            height: "470",
                            fill: "white",
                            transform: "translate(168 277)"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 41120:
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
        viewBox: "0 0 40 40",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            opacity: "0.9",
            d: "M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z",
            fill: "#3688EB"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=9818.js.map