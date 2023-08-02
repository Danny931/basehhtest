"use strict";
exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 43871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommonBases)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54908);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5369);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92794);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77253);
/* harmony import */ var _Layout_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79631);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87573);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_2__, _Layout_Row__WEBPACK_IMPORTED_MODULE_6__, _Logo__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_2__, _Layout_Row__WEBPACK_IMPORTED_MODULE_6__, _Logo__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-ac2ddbdc-0"
})`
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
`;
const BaseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-ac2ddbdc-1"
})`
  border: 1px solid ${({ theme , disable  })=>disable ? "transparent" : theme.colors.dropdown};
  border-radius: 10px;
  display: flex;
  padding: 6px;
  align-items: center;
  :hover {
    cursor: ${({ disable  })=>!disable && "pointer"};
    background-color: ${({ theme , disable  })=>!disable && theme.colors.background};
  }
  background-color: ${({ theme , disable  })=>disable && theme.colors.dropdown};
  opacity: ${({ disable  })=>disable && "0.4"};
`;
const RowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-ac2ddbdc-2"
})`
  white-space: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
function CommonBases({ chainId , onSelect , selectedCurrency , commonBasesType  }) {
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const pinTokenDescText = commonBasesType === _types__WEBPACK_IMPORTED_MODULE_8__/* .CommonBasesType.SWAP_LIMITORDER */ .L0.SWAP_LIMITORDER ? t("Common tokens") : t("Common bases");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_5__/* .AutoColumn */ .Tz, {
        gap: "md",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_6__/* .AutoRow */ .BA, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        fontSize: "14px",
                        children: pinTokenDescText
                    }),
                    commonBasesType === _types__WEBPACK_IMPORTED_MODULE_8__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .QuestionHelper */ .s, {
                        text: t("These tokens are commonly paired with other tokens."),
                        ml: "4px"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonWrapper, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BaseWrapper, {
                            onClick: ()=>{
                                if (!selectedCurrency || !selectedCurrency.isNative) {
                                    onSelect(native);
                                }
                            },
                            disable: selectedCurrency?.isNative,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                    currency: native,
                                    style: {
                                        marginRight: 8
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    children: native?.symbol
                                })
                            ]
                        })
                    }),
                    (chainId ? config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__/* .SUGGESTED_BASES */ .kx[chainId] || [] : []).map((token)=>{
                        const selected = selectedCurrency?.equals(token);
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonWrapper, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BaseWrapper, {
                                onClick: ()=>!selected && onSelect(token),
                                disable: selected,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                        currency: token,
                                        style: {
                                            marginRight: 8,
                                            borderRadius: "50%"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        children: token.symbol
                                    })
                                ]
                            })
                        }, `buttonBase#${token.address}`);
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CurrencyList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(54908);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94250);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27156);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9270);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5369);
/* harmony import */ var _state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26680);
/* harmony import */ var _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33472);
/* harmony import */ var _hooks_Tokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31196);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77253);
/* harmony import */ var _Layout_Row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79631);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87573);
/* harmony import */ var _Loader_CircleLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88549);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5305);
/* harmony import */ var _ImportRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_9__, _state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__, _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__, _hooks_Tokens__WEBPACK_IMPORTED_MODULE_12__, _Layout_Row__WEBPACK_IMPORTED_MODULE_14__, _Logo__WEBPACK_IMPORTED_MODULE_15__, _ImportRow__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([components_Card__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_9__, _state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__, _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__, _hooks_Tokens__WEBPACK_IMPORTED_MODULE_12__, _Layout_Row__WEBPACK_IMPORTED_MODULE_14__, _Logo__WEBPACK_IMPORTED_MODULE_15__, _ImportRow__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















function currencyKey(currency) {
    return currency?.isToken ? currency.address : currency?.isNative ? currency.symbol : "";
}
const StyledBalanceText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f4f79ca7-0"
})`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`;
const FixedContentRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-f4f79ca7-1"
})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
`;
function Balance({ balance  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBalanceText, {
        title: balance.toExact(),
        children: balance.toSignificant(4)
    });
}
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowBetween */ .m0).withConfig({
    componentId: "sc-f4f79ca7-2"
})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);
  grid-gap: 8px;
  cursor: ${({ disabled  })=>!disabled && "pointer"};
  pointer-events: ${({ disabled  })=>disabled && "none"};
  :hover {
    background-color: ${({ theme , disabled  })=>!disabled && theme.colors.background};
  }
  opacity: ${({ disabled , selected  })=>disabled || selected ? 0.5 : 1};
`;
function CurrencyRow({ currency , onSelect , isSelected , otherSelected , style  }) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const key = currencyKey(currency);
    const selectedTokenList = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useCombinedActiveList */ .z0)();
    const isOnSelectedList = (0,_utils__WEBPACK_IMPORTED_MODULE_17__/* .isTokenOnList */ .wK)(selectedTokenList, currency);
    const customAdded = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_12__/* .useIsUserAddedToken */ .EH)(currency);
    const balance = (0,_state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useCurrencyBalance */ ._h)(account ?? undefined, currency);
    // only show add or remove buttons if not on selected list
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuItem, {
        style: style,
        className: `token-item-${key}`,
        onClick: ()=>isSelected ? null : onSelect(),
        disabled: isSelected,
        selected: otherSelected,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_15__/* .CurrencyLogo */ .Xw, {
                currency: currency,
                size: "24px"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        bold: true,
                        children: currency.symbol
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        small: true,
                        ellipsis: true,
                        maxWidth: "200px",
                        children: [
                            !isOnSelectedList && customAdded && `${t("Added by user")} •`,
                            " ",
                            currency.name
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowFixed */ .DA, {
                style: {
                    justifySelf: "flex-end"
                },
                children: balance ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Balance, {
                    balance: balance
                }) : account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_CircleLoader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}) : null
            })
        ]
    });
}
function CurrencyList({ height , currencies , inactiveCurrencies , selectedCurrency , onCurrencySelect , otherCurrency , fixedListRef , showNative , showImportView , setImportToken , breakIndex  }) {
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const itemData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        let formatted = showNative ? [
            native,
            ...currencies,
            ...inactiveCurrencies
        ] : [
            ...currencies,
            ...inactiveCurrencies
        ];
        if (breakIndex !== undefined) {
            formatted = [
                ...formatted.slice(0, breakIndex),
                undefined,
                ...formatted.slice(breakIndex, formatted.length)
            ];
        }
        return formatted;
    }, [
        breakIndex,
        currencies,
        inactiveCurrencies,
        showNative,
        native
    ]);
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const Row = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ data , index , style  })=>{
        const currency = data[index];
        const isSelected = Boolean(selectedCurrency && currency && selectedCurrency.equals(currency));
        const otherSelected = Boolean(otherCurrency && currency && otherCurrency.equals(currency));
        const handleSelect = ()=>onCurrencySelect(currency);
        const token = (0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_4__/* .wrappedCurrency */ .pu)(currency, chainId);
        const showImport = index > currencies.length;
        if (index === breakIndex || !data) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FixedContentRow, {
                style: style,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Card__WEBPACK_IMPORTED_MODULE_5__/* .LightGreyCard */ .m5, {
                    padding: "8px 12px",
                    borderRadius: "8px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowBetween */ .m0, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                small: true,
                                children: t("Expanded results from inactive Token Lists")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* .QuestionHelper */ .s, {
                                text: t("Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."),
                                ml: "4px"
                            })
                        ]
                    })
                })
            });
        }
        if (showImport && token) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImportRow__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                style: style,
                token: token,
                showImportView: showImportView,
                setImportToken: setImportToken,
                dim: true
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrencyRow, {
            style: style,
            currency: currency,
            isSelected: isSelected,
            onSelect: handleSelect,
            otherSelected: otherSelected
        });
    }, [
        selectedCurrency,
        otherCurrency,
        chainId,
        currencies.length,
        breakIndex,
        onCurrencySelect,
        t,
        showImportView,
        setImportToken, 
    ]);
    const itemKey = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index, data)=>currencyKey(data[index]), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_window__WEBPACK_IMPORTED_MODULE_3__.FixedSizeList, {
        height: height,
        ref: fixedListRef,
        width: "100%",
        itemData: itemData,
        itemCount: itemData.length,
        itemSize: 56,
        itemKey: itemKey,
        children: Row
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(94866);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65726);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5369);
/* harmony import */ var state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26680);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3256);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72135);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5305);
/* harmony import */ var _hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31196);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77253);
/* harmony import */ var _Layout_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79631);
/* harmony import */ var _CommonBases__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43871);
/* harmony import */ var _CurrencyList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66425);
/* harmony import */ var _filtering__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17246);
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14383);
/* harmony import */ var _swapSound__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89631);
/* harmony import */ var _ImportRow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(62676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_5__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_7__, state_user_hooks__WEBPACK_IMPORTED_MODULE_8__, _hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__, _Layout_Row__WEBPACK_IMPORTED_MODULE_12__, _CommonBases__WEBPACK_IMPORTED_MODULE_13__, _CurrencyList__WEBPACK_IMPORTED_MODULE_14__, _sorting__WEBPACK_IMPORTED_MODULE_16__, _ImportRow__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_5__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_7__, state_user_hooks__WEBPACK_IMPORTED_MODULE_8__, _hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__, _Layout_Row__WEBPACK_IMPORTED_MODULE_12__, _CommonBases__WEBPACK_IMPORTED_MODULE_13__, _CurrencyList__WEBPACK_IMPORTED_MODULE_14__, _sorting__WEBPACK_IMPORTED_MODULE_16__, _ImportRow__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-restricted-syntax */ 



















function useSearchInactiveTokenLists(search, minResults = 10) {
    const lists = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAllLists */ .R0)();
    const inactiveUrls = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useInactiveListUrls */ .eu)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const activeTokens = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__/* .useAllTokens */ .e_)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!search || search.trim().length === 0) return [];
        const filterToken = (0,_filtering__WEBPACK_IMPORTED_MODULE_15__/* .createFilterToken */ .SR)(search);
        const exactMatches = [];
        const rest = [];
        const addressSet = {};
        const trimmedSearchQuery = search.toLowerCase().trim();
        for (const url of inactiveUrls){
            const list = lists[url].current;
            // eslint-disable-next-line no-continue
            if (!list) continue;
            for (const tokenInfo of list.tokens){
                if (tokenInfo.chainId === chainId && !(tokenInfo.address in activeTokens) && !addressSet[tokenInfo.address] && filterToken(tokenInfo)) {
                    const wrapped = new _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_7__/* .WrappedTokenInfo */ .DT(tokenInfo);
                    addressSet[wrapped.address] = true;
                    if (tokenInfo.name?.toLowerCase() === trimmedSearchQuery || tokenInfo.symbol?.toLowerCase() === trimmedSearchQuery) {
                        exactMatches.push(wrapped);
                    } else {
                        rest.push(wrapped);
                    }
                }
            }
        }
        return [
            ...exactMatches,
            ...rest
        ].slice(0, minResults);
    }, [
        activeTokens,
        chainId,
        inactiveUrls,
        lists,
        minResults,
        search
    ]);
}
function CurrencySearch({ selectedCurrency , onCurrencySelect , otherSelectedCurrency , showCommonBases , commonBasesType , showImportView , setImportToken , height  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    // refs for fixed size lists
    const fixedList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: searchQuery , 1: setSearchQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const debouncedQuery = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useDebounce */ .Nr)(searchQuery, 200);
    const { 0: invertSearchOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const allTokens = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__/* .useAllTokens */ .e_)();
    // if they input an address, use it
    const searchToken = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__/* .useToken */ .dQ)(debouncedQuery);
    const searchTokenIsAdded = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_10__/* .useIsUserAddedToken */ .EH)(searchToken);
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const [audioPlay] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAudioModeManager */ .TO)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const showNative = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const s = debouncedQuery.toLowerCase().trim();
        return native && native.symbol?.toLowerCase?.()?.indexOf(s) !== -1;
    }, [
        debouncedQuery,
        native
    ]);
    const filteredTokens = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const filterToken = (0,_filtering__WEBPACK_IMPORTED_MODULE_15__/* .createFilterToken */ .SR)(debouncedQuery);
        return Object.values(allTokens).filter(filterToken);
    }, [
        allTokens,
        debouncedQuery
    ]);
    const filteredQueryTokens = (0,_filtering__WEBPACK_IMPORTED_MODULE_15__/* .useSortedTokensByQuery */ .T2)(filteredTokens, debouncedQuery);
    const tokenComparator = (0,_sorting__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(invertSearchOrder);
    const filteredSortedTokens = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            ...filteredQueryTokens
        ].sort(tokenComparator);
    }, [
        filteredQueryTokens,
        tokenComparator
    ]);
    const handleCurrencySelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currency)=>{
        onCurrencySelect(currency);
        if (audioPlay) {
            (0,_swapSound__WEBPACK_IMPORTED_MODULE_19__/* .getSwapSound */ .C)().play();
        }
    }, [
        audioPlay,
        onCurrencySelect
    ]);
    // manage focus on modal show
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isMobile) inputRef.current.focus();
    }, [
        isMobile
    ]);
    const handleInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const input = event.target.value;
        const checksummedInput = (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(input);
        setSearchQuery(checksummedInput || input);
        fixedList.current?.scrollTo(0);
    }, []);
    const handleEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (e.key === "Enter") {
            const s = debouncedQuery.toLowerCase().trim();
            if (s === native.symbol.toLowerCase().trim()) {
                handleCurrencySelect(native);
            } else if (filteredSortedTokens.length > 0) {
                if (filteredSortedTokens[0].symbol?.toLowerCase() === debouncedQuery.trim().toLowerCase() || filteredSortedTokens.length === 1) {
                    handleCurrencySelect(filteredSortedTokens[0]);
                }
            }
        }
    }, [
        debouncedQuery,
        filteredSortedTokens,
        handleCurrencySelect,
        native
    ]);
    // if no results on main list, show option to expand into inactive
    const filteredInactiveTokens = useSearchInactiveTokenLists(debouncedQuery);
    const hasFilteredInactiveTokens = Boolean(filteredInactiveTokens?.length);
    const getCurrencyListRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (searchToken && !searchTokenIsAdded && !hasFilteredInactiveTokens) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                style: {
                    padding: "20px 0",
                    height: "100%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImportRow__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    token: searchToken,
                    showImportView: showImportView,
                    setImportToken: setImportToken
                })
            });
        }
        return Boolean(filteredSortedTokens?.length) || hasFilteredInactiveTokens ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            margin: "24px -24px",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurrencyList__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                height: isMobile ? showCommonBases ? height || 250 : height ? height + 80 : 350 : 390,
                showNative: showNative,
                currencies: filteredSortedTokens,
                inactiveCurrencies: filteredInactiveTokens,
                breakIndex: Boolean(filteredInactiveTokens?.length) && filteredSortedTokens ? filteredSortedTokens.length : undefined,
                onCurrencySelect: handleCurrencySelect,
                otherCurrency: otherSelectedCurrency,
                selectedCurrency: selectedCurrency,
                fixedListRef: fixedList,
                showImportView: showImportView,
                setImportToken: setImportToken
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
            style: {
                padding: "20px",
                height: "100%"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                color: "textSubtle",
                textAlign: "center",
                mb: "20px",
                children: t("No results found.")
            })
        });
    }, [
        filteredInactiveTokens,
        filteredSortedTokens,
        handleCurrencySelect,
        hasFilteredInactiveTokens,
        otherSelectedCurrency,
        searchToken,
        searchTokenIsAdded,
        selectedCurrency,
        setImportToken,
        showNative,
        showImportView,
        t,
        showCommonBases,
        isMobile,
        height, 
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* .AutoColumn */ .Tz, {
                gap: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                            id: "token-search-input",
                            placeholder: t("Search name or paste address"),
                            scale: "lg",
                            autoComplete: "off",
                            value: searchQuery,
                            ref: inputRef,
                            onChange: handleInput,
                            onKeyDown: handleEnter
                        })
                    }),
                    showCommonBases && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommonBases__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        chainId: chainId,
                        onSelect: handleCurrencySelect,
                        selectedCurrency: selectedCurrency,
                        commonBasesType: commonBasesType
                    })
                ]
            }),
            getCurrencyListRows()
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencySearch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CurrencySearchModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63815);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85306);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65726);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var _CurrencySearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63685);
/* harmony import */ var _ImportToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95940);
/* harmony import */ var _Manage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61519);
/* harmony import */ var _ImportList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48050);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CurrencySearch__WEBPACK_IMPORTED_MODULE_5__, _ImportToken__WEBPACK_IMPORTED_MODULE_6__, _Manage__WEBPACK_IMPORTED_MODULE_7__, _ImportList__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_CurrencySearch__WEBPACK_IMPORTED_MODULE_5__, _ImportToken__WEBPACK_IMPORTED_MODULE_6__, _Manage__WEBPACK_IMPORTED_MODULE_7__, _ImportList__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-15102242-0"
})`
  width: 100%;
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
  text-align: center;
`;
const StyledModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalContainer */ .F0).withConfig({
    componentId: "sc-15102242-1"
})`
  width: 100%;
  min-width: 320px;
  max-width: 420px !important;
  min-height: calc(var(--vh, 1vh) * 90);
  ${({ theme  })=>theme.mediaQueries.md} {
    min-height: auto;
  }
`;
const StyledModalBody = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalBody */ .fe).withConfig({
    componentId: "sc-15102242-2"
})`
  padding: 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function CurrencySearchModal({ onDismiss =()=>null , onCurrencySelect , selectedCurrency , otherSelectedCurrency , showCommonBases =true , commonBasesType  }) {
    const { 0: modalView , 1: setModalView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search);
    const handleCurrencySelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currency)=>{
        onDismiss?.();
        onCurrencySelect(currency);
    }, [
        onDismiss,
        onCurrencySelect
    ]);
    // for token import view
    const prevView = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePreviousValue */ .zP)(modalView);
    // used for import token flow
    const { 0: importToken , 1: setImportToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // used for import list
    const { 0: importList , 1: setImportList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: listURL , 1: setListUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const config = {
        [_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search]: {
            title: t("Select a Token"),
            onBack: undefined
        },
        [_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.manage */ .Hv.manage]: {
            title: t("Manage"),
            onBack: ()=>setModalView(_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search)
        },
        [_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.importToken */ .Hv.importToken]: {
            title: t("Import Tokens"),
            onBack: ()=>setModalView(prevView && prevView !== _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.importToken */ .Hv.importToken ? prevView : _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search)
        },
        [_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.importList */ .Hv.importList]: {
            title: t("Import List"),
            onBack: ()=>setModalView(_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search)
        }
    };
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!wrapperRef.current) return;
        setHeight(wrapperRef.current.offsetHeight - 330);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledModalContainer, {
        drag: isMobile ? "y" : false,
        dragConstraints: {
            top: 0,
            bottom: 600
        },
        dragElastic: {
            top: 0
        },
        dragSnapToOrigin: true,
        onDragStart: ()=>{
            if (wrapperRef.current) wrapperRef.current.style.animation = "none";
        },
        // @ts-ignore
        onDragEnd: (e, info)=>{
            if (info.velocity.y > _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* .MODAL_SWIPE_TO_CLOSE_VELOCITY */ .dl && onDismiss) onDismiss();
        },
        ref: wrapperRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalHeader */ .xB, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalTitle */ .r6, {
                        children: [
                            config[modalView].onBack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalBackButton */ .vy, {
                                onBack: config[modalView].onBack
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: config[modalView].title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalCloseButton */ .ol, {
                        onDismiss: onDismiss
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledModalBody, {
                children: [
                    modalView === _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurrencySearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onCurrencySelect: handleCurrencySelect,
                        selectedCurrency: selectedCurrency,
                        otherSelectedCurrency: otherSelectedCurrency,
                        showCommonBases: showCommonBases,
                        commonBasesType: commonBasesType,
                        showImportView: ()=>setModalView(_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.importToken */ .Hv.importToken),
                        setImportToken: setImportToken,
                        height: height
                    }) : modalView === _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.importToken */ .Hv.importToken && importToken ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImportToken__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        tokens: [
                            importToken
                        ],
                        handleCurrencySelect: handleCurrencySelect
                    }) : modalView === _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.importList */ .Hv.importList && importList && listURL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImportList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        list: importList,
                        listURL: listURL,
                        onImport: ()=>setModalView(_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.manage */ .Hv.manage)
                    }) : modalView === _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.manage */ .Hv.manage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Manage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        setModalView: setModalView,
                        setImportToken: setImportToken,
                        setImportList: setImportList,
                        setListUrl: setListUrl
                    }) : "",
                    modalView === _types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.search */ .Hv.search && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            scale: "sm",
                            variant: "text",
                            onClick: ()=>setModalView(_types__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModalView.manage */ .Hv.manage),
                            className: "list-token-manage-button",
                            children: t("Manage Tokens")
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48050:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85306);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27156);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79631);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87573);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3256);
/* harmony import */ var state_lists_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26680);
/* harmony import */ var state_lists_lists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1698);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_2__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__, components_Logo__WEBPACK_IMPORTED_MODULE_5__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_8__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_9__, state_lists_lists__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([components_Card__WEBPACK_IMPORTED_MODULE_2__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__, components_Logo__WEBPACK_IMPORTED_MODULE_5__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_8__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_9__, state_lists_lists__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
    componentId: "sc-73e63f60-0"
})`
  position: relative;
  width: 100%;
`;
const TextDot = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
    componentId: "sc-73e63f60-1"
})`
  height: 3px;
  width: 3px;
  background-color: ${({ theme  })=>theme.colors.text};
  border-radius: 50%;
`;
function ImportList({ listURL , list , onImport  }) {
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)();
    const [, dispatch] = (0,state_lists_lists__WEBPACK_IMPORTED_MODULE_10__/* .useListState */ .n)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    // user must accept
    const { 0: confirmed , 1: setConfirmed  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const lists = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useAllLists */ .R0)();
    const fetchList = (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_8__/* .useFetchListCallback */ .jn)(state_lists_lists__WEBPACK_IMPORTED_MODULE_10__/* .listsAtom */ .l);
    // monitor is list is loading
    const adding = Boolean(lists[listURL]?.loadingRequestId);
    const { 0: addError , 1: setAddError  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const handleAddList = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(()=>{
        if (adding) return;
        setAddError(null);
        fetchList(listURL).then(()=>{
            dispatch((0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_8__/* .enableList */ .ic)(listURL));
            onImport();
        }).catch((error)=>{
            setAddError(error.message);
            dispatch((0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_8__/* .removeList */ .J_)(listURL));
        });
    }, [
        adding,
        dispatch,
        fetchList,
        listURL,
        onImport
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
            gap: "md",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
                gap: "md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                        padding: "12px 20px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__/* .RowBetween */ .m0, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__/* .RowFixed */ .DA, {
                                children: [
                                    list.logoURI && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .ListLogo */ ._r, {
                                        logoURI: list.logoURI,
                                        size: "40px"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
                                        gap: "sm",
                                        style: {
                                            marginLeft: "20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_4__/* .RowFixed */ .DA, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        bold: true,
                                                        mr: "6px",
                                                        children: list.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextDot, {}),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        small: true,
                                                        color: "textSubtle",
                                                        ml: "6px",
                                                        children: [
                                                            list.tokens.length,
                                                            " tokens"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                small: true,
                                                external: true,
                                                ellipsis: true,
                                                maxWidth: "90%",
                                                href: `https://tokenlists.org/token-list?url=${listURL}`,
                                                children: listURL
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        variant: "danger",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    fontSize: "20px",
                                    textAlign: "center",
                                    color: theme.colors.failure,
                                    mb: "16px",
                                    children: t("Import at your own risk")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    color: theme.colors.failure,
                                    mb: "8px",
                                    children: t("By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    bold: true,
                                    color: theme.colors.failure,
                                    mb: "16px",
                                    children: t("If you purchase a token from this list, you may not be able to sell it back.")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            name: "confirmed",
                                            type: "checkbox",
                                            checked: confirmed,
                                            onChange: ()=>setConfirmed(!confirmed),
                                            scale: "sm"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            ml: "10px",
                                            style: {
                                                userSelect: "none"
                                            },
                                            children: t("I understand")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        disabled: !confirmed,
                        onClick: handleAddList,
                        children: t("Import")
                    }),
                    addError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        color: "failure",
                        style: {
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        },
                        children: addError
                    }) : null
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImportRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20201);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79631);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var components_Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39999);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87573);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
/* harmony import */ var state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26680);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31196);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Row__WEBPACK_IMPORTED_MODULE_1__, components_Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_3__, components_Logo__WEBPACK_IMPORTED_MODULE_4__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__, hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__]);
([components_Layout_Row__WEBPACK_IMPORTED_MODULE_1__, components_Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_3__, components_Logo__WEBPACK_IMPORTED_MODULE_4__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__, hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const TokenSection = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-46a7a6c2-0"
})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto;
  grid-gap: 10px;
  align-items: center;

  opacity: ${({ dim  })=>dim ? "0.4" : "1"};

  ${({ theme  })=>theme.mediaQueries.md} {
    grid-gap: 16px;
  }
`;
const CheckIcon = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-46a7a6c2-1"
})`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  stroke: ${({ theme  })=>theme.colors.success};
`;
const NameOverflow = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-46a7a6c2-2"
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
  font-size: 12px;
`;
function ImportRow({ token , style , dim , showImportView , setImportToken  }) {
    // globals
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_9__/* .useTranslation */ .$G)();
    // check if token comes from list
    const inactiveTokenList = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useCombinedInactiveList */ .qB)();
    const list = chainId && inactiveTokenList?.[chainId]?.[token.address]?.list;
    // check if already active on list or local storage tokens
    const isAdded = (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__/* .useIsUserAddedToken */ .EH)(token);
    const isActive = (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__/* .useIsTokenActive */ .ZN)(token);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TokenSection, {
        style: style,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                currency: token,
                size: isMobile ? "20px" : "24px",
                style: {
                    opacity: dim ? "0.6" : "1"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_2__/* .AutoColumn */ .Tz, {
                gap: "4px",
                style: {
                    opacity: dim ? "0.6" : "1"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_1__/* .AutoRow */ .BA, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                mr: "8px",
                                children: token.symbol
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                color: "textDisabled",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NameOverflow, {
                                    title: token.name,
                                    children: token.name
                                })
                            })
                        ]
                    }),
                    list && list.logoURI && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_1__/* .RowFixed */ .DA, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                fontSize: isMobile ? "10px" : "14px",
                                mr: "4px",
                                color: "textSubtle",
                                children: [
                                    t("via"),
                                    " ",
                                    list.name
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_4__/* .ListLogo */ ._r, {
                                logoURI: list.logoURI,
                                size: "12px"
                            })
                        ]
                    })
                ]
            }),
            !isActive && !isAdded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                scale: isMobile ? "sm" : "md",
                width: "fit-content",
                onClick: ()=>{
                    if (setImportToken) {
                        setImportToken(token);
                    }
                    showImportView();
                },
                children: t("Import")
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_1__/* .RowFixed */ .DA, {
                style: {
                    minWidth: "fit-content"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        color: "success",
                        children: "Active"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95940:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24674);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85306);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72135);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55834);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65342);
/* harmony import */ var state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26680);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87573);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24953);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__, components_Logo__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__, components_Logo__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const getStandard = (chainId)=>chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC && chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC_TESTNET ? "ERC20" : "BEP20";
function ImportToken({ tokens , handleCurrencySelect  }) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_9__/* .useTranslation */ .$G)();
    const { 0: confirmed , 1: setConfirmed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const addToken = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAddUserToken */ ._E)();
    // use for showing import source on inactive tokens
    const inactiveTokenList = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCombinedInactiveList */ .qB)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_3__/* .AutoColumn */ .Tz, {
        gap: "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                variant: "warning",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    children: [
                        t("Anyone can create a %standard% token on %network% with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.", {
                            standard: getStandard(chainId),
                            network: utils_wagmi__WEBPACK_IMPORTED_MODULE_10__/* .chains.find */ .p5.find((c)=>c.id === chainId)?.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        t("If you purchase an arbitrary token, you may be unable to sell it back.")
                    ]
                })
            }),
            tokens.map((token)=>{
                const list = chainId && inactiveTokenList?.[chainId]?.[token.address]?.list;
                const address = token.address ? `${(0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(token.address)}` : null;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    gridTemplateRows: "1fr 1fr 1fr",
                    gridGap: "4px",
                    children: [
                        list !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            variant: "success",
                            outline: true,
                            scale: "sm",
                            startIcon: list.logoURI && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_8__/* .ListLogo */ ._r, {
                                logoURI: list.logoURI,
                                size: "12px"
                            }),
                            children: [
                                t("via"),
                                " ",
                                list.name
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            variant: "failure",
                            outline: true,
                            scale: "sm",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                color: "failure"
                            }),
                            children: t("Unknown Source")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    mr: "8px",
                                    children: token.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    children: [
                                        "(",
                                        token.symbol,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        chainId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            width: "100%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    mr: "4px",
                                    children: address
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    href: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreLink */ .C)(token.address, "address", chainId),
                                    external: true,
                                    children: [
                                        "(",
                                        t("View on %site%", {
                                            site: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreName */ .X0)(chainId)
                                        }),
                                        ")"
                                    ]
                                })
                            ]
                        })
                    ]
                }, token.address);
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        alignItems: "center",
                        onClick: ()=>setConfirmed(!confirmed),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                scale: "sm",
                                name: "confirmed",
                                type: "checkbox",
                                checked: confirmed,
                                onChange: ()=>setConfirmed(!confirmed)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                ml: "8px",
                                style: {
                                    userSelect: "none"
                                },
                                children: t("I understand")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        variant: "danger",
                        disabled: !confirmed,
                        onClick: ()=>{
                            tokens.forEach((token)=>addToken(token));
                            if (handleCurrencySelect) {
                                handleCurrencySelect(tokens[0]);
                            }
                        },
                        className: ".token-dismiss-button",
                        children: t("Import")
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportToken);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61519:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Manage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63815);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74813);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _ManageLists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14916);
/* harmony import */ var _ManageTokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ManageLists__WEBPACK_IMPORTED_MODULE_4__, _ManageTokens__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_ManageLists__WEBPACK_IMPORTED_MODULE_4__, _ManageTokens__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const StyledButtonMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e2a99e21-0"
})`
  width: 100%;
`;
function Manage({ setModalView , setImportList , setImportToken , setListUrl  }) {
    const { 0: showLists , 1: setShowLists  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .ModalBody */ .fe, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledButtonMenu, {
                activeIndex: showLists ? 0 : 1,
                onItemClick: ()=>setShowLists((prev)=>!prev),
                scale: "sm",
                variant: "subtle",
                mb: "32px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        width: "50%",
                        children: t("Lists")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        width: "50%",
                        children: t("Tokens")
                    })
                ]
            }),
            showLists ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ManageLists__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                setModalView: setModalView,
                setImportList: setImportList,
                setListUrl: setListUrl
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ManageTokens__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                setModalView: setModalView,
                setImportToken: setImportToken
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11324);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41022);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30486);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27156);
/* harmony import */ var config_constants_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7964);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var state_lists_lists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1698);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3256);
/* harmony import */ var _pancakeswap_utils_uriToHttp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86287);
/* harmony import */ var _state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26680);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77253);
/* harmony import */ var _Layout_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79631);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87573);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, state_lists_lists__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__, _state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__, _Layout_Row__WEBPACK_IMPORTED_MODULE_12__, _Logo__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([components_Card__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, state_lists_lists__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__, _state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__, _Layout_Row__WEBPACK_IMPORTED_MODULE_12__, _Logo__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function listVersionLabel(version) {
    return `v${version.major}.${version.minor}.${version.patch}`;
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP).withConfig({
    componentId: "sc-b66bd3d6-0"
})`
  width: 100%;
  height: 100%;
`;
const RowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP).withConfig({
    componentId: "sc-b66bd3d6-1"
})`
  background-color: ${({ active , theme  })=>active ? `${theme.colors.success19}` : "transparent"};
  border: solid 1px;
  border-color: ${({ active , theme  })=>active ? theme.colors.success : theme.colors.tertiary};
  transition: 200ms;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  opacity: ${({ hasActiveTokens  })=>hasActiveTokens ? 1 : 0.4};
`;
function listUrlRowHTMLId(listUrl) {
    return `list-row-${listUrl.replace(/\./g, "-")}`;
}
const ListRow = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_6__.memo)(function ListRow({ listUrl  }) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const isActive = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useIsListActive */ .EF)(listUrl);
    const listsByUrl = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__/* .selectorByUrlsAtom */ .Ti);
    const [, dispatch] = (0,state_lists_lists__WEBPACK_IMPORTED_MODULE_7__/* .useListState */ .n)();
    const { current: list , pendingUpdate: pending  } = listsByUrl[listUrl];
    const activeTokensOnThisChain = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        if (!list || !chainId) {
            return 0;
        }
        return list.tokens.reduce((acc, cur)=>cur.chainId === chainId ? acc + 1 : acc, 0);
    }, [
        chainId,
        list
    ]);
    const handleAcceptListUpdate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        if (!pending) return;
        dispatch((0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .acceptListUpdate */ .xJ)(listUrl));
    }, [
        dispatch,
        listUrl,
        pending
    ]);
    const handleRemoveList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        // eslint-disable-next-line no-alert
        if (window.confirm("Please confirm you would like to remove this list")) {
            dispatch((0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .removeList */ .J_)(listUrl));
        }
    }, [
        dispatch,
        listUrl
    ]);
    const handleEnableList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        dispatch((0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .enableList */ .ic)(listUrl));
    }, [
        dispatch,
        listUrl
    ]);
    const handleDisableList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        dispatch((0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .disableList */ .K$)(listUrl));
    }, [
        dispatch,
        listUrl
    ]);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                children: list && listVersionLabel(list.version)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                external: true,
                href: `https://tokenlists.org/token-list?url=${listUrl}`,
                children: t("See")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                variant: "danger",
                scale: "xs",
                onClick: handleRemoveList,
                disabled: Object.keys(listsByUrl).length === 1,
                children: t("Remove")
            }),
            pending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                variant: "text",
                onClick: handleAcceptListUpdate,
                style: {
                    fontSize: "12px"
                },
                children: t("Update list")
            })
        ]
    }), {
        placement: "right-end",
        trigger: "click"
    });
    if (!list) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowWrapper, {
        active: isActive,
        hasActiveTokens: activeTokensOnThisChain > 0,
        id: listUrlRowHTMLId(listUrl),
        children: [
            tooltipVisible && tooltip,
            list.logoURI ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_13__/* .ListLogo */ ._r, {
                size: "40px",
                style: {
                    marginRight: "1rem"
                },
                logoURI: list.logoURI,
                alt: `${list.name} list logo`
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "24px",
                    height: "24px",
                    marginRight: "1rem"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                style: {
                    flex: "1"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            bold: true,
                            children: list.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* .RowFixed */ .DA, {
                        mt: "4px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                mr: "6px",
                                textTransform: "lowercase",
                                children: [
                                    list.tokens.length,
                                    " ",
                                    t("Tokens")
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                ref: targetRef,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    color: "text",
                                    width: "12px"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                checked: isActive,
                onChange: ()=>{
                    if (isActive) {
                        handleDisableList();
                    } else {
                        handleEnableList();
                    }
                }
            })
        ]
    }, listUrl);
});
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-b66bd3d6-2"
})`
  padding: 1rem 0;
  height: 100%;
  overflow: auto;
`;
function ManageLists({ setModalView , setImportList , setListUrl  }) {
    const { 0: listUrlInput , 1: setListUrlInput  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const lists = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useAllLists */ .R0)();
    // sort by active but only if not visible
    const activeListUrls = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useActiveListUrls */ .v0)();
    const { 0: activeCopy , 1: setActiveCopy  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!activeCopy && activeListUrls) {
            setActiveCopy(activeListUrls);
        }
    }, [
        activeCopy,
        activeListUrls
    ]);
    const handleInput = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((e)=>{
        setListUrlInput(e.target.value);
    }, []);
    const fetchList = (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .useFetchListCallback */ .jn)(state_lists_lists__WEBPACK_IMPORTED_MODULE_7__/* .listsAtom */ .l);
    const validUrl = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        return (0,_pancakeswap_utils_uriToHttp__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(listUrlInput).length > 0;
    }, [
        listUrlInput
    ]);
    const sortedLists = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        const listUrls = Object.keys(lists);
        return listUrls.filter((listUrl)=>{
            // only show loaded lists, hide unsupported lists
            return Boolean(lists[listUrl].current) && !config_constants_lists__WEBPACK_IMPORTED_MODULE_3__/* .UNSUPPORTED_LIST_URLS.includes */ .US.includes(listUrl);
        }).sort((u1, u2)=>{
            const { current: l1  } = lists[u1];
            const { current: l2  } = lists[u2];
            // first filter on active lists
            if (activeCopy?.includes(u1) && !activeCopy?.includes(u2)) {
                return -1;
            }
            if (!activeCopy?.includes(u1) && activeCopy?.includes(u2)) {
                return 1;
            }
            if (l1 && l2) {
                // Always make PancakeSwap list in top.
                const keyword = "pancakeswap";
                if (l1.name.toLowerCase().includes(keyword) || l2.name.toLowerCase().includes(keyword)) {
                    return -1;
                }
                return l1.name.toLowerCase() < l2.name.toLowerCase() ? -1 : l1.name.toLowerCase() === l2.name.toLowerCase() ? 0 : 1;
            }
            if (l1) return -1;
            if (l2) return 1;
            return 0;
        });
    }, [
        lists,
        activeCopy
    ]);
    // temporary fetched list for import flow
    const { 0: tempList , 1: setTempList  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { 0: addError , 1: setAddError  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function fetchTempList() {
            fetchList(listUrlInput, false).then((list)=>setTempList(list)).catch(()=>setAddError("Error importing list"));
        }
        // if valid url, fetch details for card
        if (validUrl) {
            fetchTempList();
        } else {
            setTempList(undefined);
            if (listUrlInput !== "") {
                setAddError("Enter valid list location");
            }
        }
        // reset error
        if (listUrlInput === "") {
            setAddError(undefined);
        }
    }, [
        fetchList,
        listUrlInput,
        validUrl
    ]);
    // check if list is already imported
    const isImported = Object.keys(lists).includes(listUrlInput);
    // set list values and have parent modal switch to import list view
    const handleImport = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        if (!tempList) return;
        setImportList(tempList);
        setModalView(_types__WEBPACK_IMPORTED_MODULE_14__/* .CurrencyModalView.importList */ .Hv.importList);
        setListUrl(listUrlInput);
    }, [
        listUrlInput,
        setImportList,
        setListUrl,
        setModalView,
        tempList
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* .AutoColumn */ .Tz, {
                gap: "14px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                            id: "list-add-input",
                            scale: "lg",
                            placeholder: t("https:// or ipfs://"),
                            value: listUrlInput,
                            onChange: handleInput
                        })
                    }),
                    addError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        color: "failure",
                        style: {
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        },
                        children: addError
                    }) : null
                ]
            }),
            tempList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* .AutoColumn */ .Tz, {
                style: {
                    paddingTop: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                    padding: "12px 20px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* .RowBetween */ .m0, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* .RowFixed */ .DA, {
                                children: [
                                    tempList.logoURI && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_13__/* .ListLogo */ ._r, {
                                        logoURI: tempList.logoURI,
                                        size: "40px"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* .AutoColumn */ .Tz, {
                                        gap: "4px",
                                        style: {
                                            marginLeft: "20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                bold: true,
                                                children: tempList.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                color: "textSubtle",
                                                small: true,
                                                textTransform: "lowercase",
                                                children: [
                                                    tempList.tokens.length,
                                                    " ",
                                                    t("Tokens")
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            isImported ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_12__/* .RowFixed */ .DA, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        width: "16px",
                                        mr: "10px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        children: t("Loaded")
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                width: "fit-content",
                                onClick: handleImport,
                                children: t("Import")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* .AutoColumn */ .Tz, {
                    gap: "md",
                    children: sortedLists.map((listUrl)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListRow, {
                            listUrl: listUrl
                        }, listUrl))
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageLists);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ManageTokens)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60789);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85306);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79631);
/* harmony import */ var hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31196);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72135);
/* harmony import */ var state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18534);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87573);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24953);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77253);
/* harmony import */ var _ImportRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62676);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__, hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__, state_user_hooks__WEBPACK_IMPORTED_MODULE_5__, state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_6__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__, _ImportRow__WEBPACK_IMPORTED_MODULE_12__]);
([components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__, hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__, state_user_hooks__WEBPACK_IMPORTED_MODULE_5__, state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_6__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__, _ImportRow__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-3eca3fc-0"
})`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-3eca3fc-1"
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function ManageTokens({ setModalView , setImportToken  }) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .$G)();
    const { 0: searchQuery , 1: setSearchQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // manage focus on modal show
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const input = event.target.value;
        const checksummedInput = (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .isAddress */ .UJ)(input);
        setSearchQuery(checksummedInput || input);
    }, []);
    // if they input an address, use it
    const searchToken = (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__/* .useToken */ .dQ)(searchQuery);
    // all tokens for local list
    const userAddedTokens = (0,state_user_hooks_useUserAddedTokens__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const removeToken = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRemoveUserAddedToken */ .QG)();
    const handleRemoveAll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (chainId && userAddedTokens) {
            userAddedTokens.forEach((token)=>{
                return removeToken(chainId, token.address);
            });
        }
    }, [
        removeToken,
        userAddedTokens,
        chainId
    ]);
    const tokenList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return chainId && userAddedTokens.map((token)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__/* .RowBetween */ .m0, {
                width: "100%",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__/* .RowFixed */ .DA, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                currency: token,
                                size: "20px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                external: true,
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(token.address, "address", chainId),
                                color: "textSubtle",
                                ml: "10px",
                                children: token.symbol
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__/* .RowFixed */ .DA, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                variant: "text",
                                onClick: ()=>removeToken(chainId, token.address),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(token.address, "address", chainId)
                            })
                        ]
                    })
                ]
            }, token.address));
    }, [
        userAddedTokens,
        chainId,
        removeToken
    ]);
    const isAddressValid = searchQuery === "" || (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .isAddress */ .UJ)(searchQuery);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
            style: {
                width: "100%",
                flex: "1 1"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_11__/* .AutoColumn */ .Tz, {
                    gap: "14px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Row__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                id: "token-search-input",
                                scale: "lg",
                                placeholder: "0x0000",
                                value: searchQuery,
                                autoComplete: "off",
                                ref: inputRef,
                                onChange: handleInput,
                                isWarning: !isAddressValid
                            })
                        }),
                        !isAddressValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                            color: "failure",
                            children: t("Enter valid token address")
                        }),
                        searchToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImportRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            token: searchToken,
                            showImportView: ()=>setModalView(_types__WEBPACK_IMPORTED_MODULE_13__/* .CurrencyModalView.importToken */ .Hv.importToken),
                            setImportToken: setImportToken,
                            style: {
                                height: "fit-content"
                            }
                        })
                    ]
                }),
                tokenList,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Footer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                            bold: true,
                            color: "textSubtle",
                            children: [
                                userAddedTokens?.length,
                                " ",
                                userAddedTokens.length === 1 ? t("Custom Token") : t("Custom Tokens")
                            ]
                        }),
                        userAddedTokens.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            variant: "tertiary",
                            onClick: handleRemoveAll,
                            children: t("Clear all")
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SR": () => (/* binding */ createFilterToken),
/* harmony export */   "T2": () => (/* binding */ useSortedTokensByQuery)
/* harmony export */ });
/* unused harmony export filterTokens */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);


function filterTokens(tokens, search) {
    if (search.length === 0) return tokens;
    const searchingAddress = isAddress(search);
    if (searchingAddress) {
        return tokens.filter((token)=>token.address === searchingAddress);
    }
    const lowerSearchParts = search.toLowerCase().split(/\s+/).filter((s)=>s.length > 0);
    if (lowerSearchParts.length === 0) {
        return tokens;
    }
    const matchesSearch = (s)=>{
        const sParts = s.toLowerCase().split(/\s+/).filter((s_)=>s_.length > 0);
        return lowerSearchParts.every((p)=>p.length === 0 || sParts.some((sp)=>sp.startsWith(p) || sp.endsWith(p)));
    };
    return tokens.filter((token)=>{
        const { symbol , name  } = token;
        return symbol && matchesSearch(symbol) || name && matchesSearch(name);
    });
}
function createFilterToken(search) {
    const searchingAddress = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(search);
    if (searchingAddress) {
        const address = searchingAddress.toLowerCase();
        return (t)=>"address" in t && address === t.address.toLowerCase();
    }
    const lowerSearchParts = search.toLowerCase().split(/\s+/).filter((s)=>s.length > 0);
    if (lowerSearchParts.length === 0) {
        return ()=>true;
    }
    const matchesSearch = (s)=>{
        const sParts = s.toLowerCase().split(/\s+/).filter((s_)=>s_.length > 0);
        return lowerSearchParts.every((p)=>p.length === 0 || sParts.some((sp)=>sp.startsWith(p) || sp.endsWith(p)));
    };
    return (token)=>{
        const { symbol , name  } = token;
        return symbol && matchesSearch(symbol) || name && matchesSearch(name);
    };
}
function useSortedTokensByQuery(tokens, searchQuery) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!tokens) {
            return [];
        }
        const trimmedSearchQuery = searchQuery.toLowerCase().trim();
        const symbolMatch = trimmedSearchQuery.split(/\s+/).filter((s)=>s.length > 0);
        if (symbolMatch.length > 1) {
            return tokens;
        }
        const exactMatches = [];
        const symbolSubstrings = [];
        const rest = [];
        // sort tokens by exact match -> substring on symbol match -> rest
        tokens.forEach((token)=>{
            const tokenSymbol = token.symbol?.toLowerCase();
            if (tokenSymbol === symbolMatch[0] || token.name?.toLowerCase() === trimmedSearchQuery) {
                return exactMatches.push(token);
            }
            if (tokenSymbol.startsWith(trimmedSearchQuery)) {
                return symbolSubstrings.push(token);
            }
            return rest.push(token);
        });
        return [
            ...exactMatches,
            ...symbolSubstrings,
            ...rest
        ];
    }, [
        tokens,
        searchQuery
    ]);
}


/***/ }),

/***/ 14383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33472);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_wallet_hooks__WEBPACK_IMPORTED_MODULE_1__]);
_state_wallet_hooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// compare two token amounts with highest one coming first
function balanceComparator(balanceA, balanceB) {
    if (balanceA && balanceB) {
        return balanceA.greaterThan(balanceB) ? -1 : balanceA.equalTo(balanceB) ? 0 : 1;
    }
    if (balanceA && balanceA.greaterThan("0")) {
        return -1;
    }
    if (balanceB && balanceB.greaterThan("0")) {
        return 1;
    }
    return 0;
}
function getTokenComparator(balances) {
    return function sortTokens(tokenA, tokenB) {
        // -1 = a is first
        // 1 = b is first
        // sort by balances
        const balanceA = balances[tokenA.address];
        const balanceB = balances[tokenB.address];
        const balanceComp = balanceComparator(balanceA, balanceB);
        if (balanceComp !== 0) return balanceComp;
        if (tokenA.symbol && tokenB.symbol) {
            // sort by symbol
            return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1;
        }
        return tokenA.symbol ? -1 : tokenB.symbol ? -1 : 0;
    };
}
function useTokenComparator(inverted) {
    const balances = (0,_state_wallet_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAllTokenBalances */ .uD)();
    const comparator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>getTokenComparator(balances ?? {}), [
        balances
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (inverted) {
            return (tokenA, tokenB)=>comparator(tokenA, tokenB) * -1;
        }
        return comparator;
    }, [
        inverted,
        comparator
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTokenComparator);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getSwapSound)
/* harmony export */ });
let swapSound;
const swapSoundURL = "https://cdn.pancakeswap.com/swap.mp3";
const getSwapSound = ()=>{
    if (!swapSound) {
        swapSound = new Audio(swapSoundURL);
    }
    return swapSound;
};


/***/ }),

/***/ 34188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hv": () => (/* binding */ CurrencyModalView),
/* harmony export */   "L0": () => (/* binding */ CommonBasesType)
/* harmony export */ });
var CurrencyModalView;
(function(CurrencyModalView) {
    CurrencyModalView[CurrencyModalView["search"] = 0] = "search";
    CurrencyModalView[CurrencyModalView["manage"] = 1] = "manage";
    CurrencyModalView[CurrencyModalView["importToken"] = 2] = "importToken";
    CurrencyModalView[CurrencyModalView["importList"] = 3] = "importList";
})(CurrencyModalView || (CurrencyModalView = {}));
var CommonBasesType;
(function(CommonBasesType) {
    CommonBasesType["LIQUIDITY"] = "LIQUIDITY";
    CommonBasesType["SWAP_LIMITORDER"] = "SWAP_LIMITORDER";
})(CommonBasesType || (CommonBasesType = {}));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CurrencyModalView)));


/***/ }),

/***/ 1695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__]);
_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b3fe3fbc-0"
})`
  display: grid;
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.grid}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 72362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tag_Tag)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/types.ts
const variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning"
};
const scales = {
    MD: "md",
    SM: "sm"
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/theme.ts

const scaleVariants = {
    [scales.MD]: {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px"
    },
    [scales.SM]: {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px"
    }
};
const styleVariants = {
    [variants.PRIMARY]: {
        backgroundColor: "primary"
    },
    [variants.SECONDARY]: {
        backgroundColor: "secondary"
    },
    [variants.SUCCESS]: {
        backgroundColor: "success"
    },
    [variants.TEXTDISABLED]: {
        backgroundColor: "textDisabled"
    },
    [variants.TEXTSUBTLE]: {
        backgroundColor: "textSubtle"
    },
    [variants.BINANCE]: {
        backgroundColor: "binance"
    },
    [variants.FAILURE]: {
        backgroundColor: "failure"
    },
    [variants.WARNING]: {
        backgroundColor: "warning"
    }
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/StyledTag.tsx




const getOutlineStyles = ({ outline , theme , variant: variantKey = variants.PRIMARY  })=>{
    if (outline) {
        const themeColorKey = styleVariants[variantKey].backgroundColor;
        const color = theme.colors[themeColorKey];
        return `
      color: ${color};
      background: ${theme.colors.background};
      border: 2px solid ${color};
    `;
    }
    return "";
};
const StyledTag = external_styled_components_default().div.withConfig({
    componentId: "sc-26d88be7-0"
})`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({ textTransform  })=>textTransform && `text-transform: ${textTransform};`}

  ${(0,external_styled_system_.variant)({
    prop: "scale",
    variants: scaleVariants
})}
  ${(0,external_styled_system_.variant)({
    variants: styleVariants
})}
  ${external_styled_system_.space}
  ${external_styled_system_.typography}

  ${getOutlineStyles}
`;
/* harmony default export */ const Tag_StyledTag = (null);

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/Tag.tsx




const Tag = ({ startIcon , endIcon , children , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTag, {
        ...props,
        children: [
            /*#__PURE__*/ external_react_default().isValidElement(startIcon) && /*#__PURE__*/ external_react_default().cloneElement(startIcon, {
                // @ts-ignore
                mr: "0.5em"
            }),
            children,
            /*#__PURE__*/ external_react_default().isValidElement(endIcon) && /*#__PURE__*/ external_react_default().cloneElement(endIcon, {
                // @ts-ignore
                ml: "0.5em"
            })
        ]
    });
/* eslint-disable react/default-props-match-prop-types */ Tag.defaultProps = {
    variant: "primary",
    scale: scales.MD,
    outline: false
};
/* harmony default export */ const Tag_Tag = (Tag);


/***/ })

};
;
//# sourceMappingURL=917.js.map