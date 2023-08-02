"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 96932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87434);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72135);
/* harmony import */ var views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17456);
/* harmony import */ var views_Info_components_TopTokenMovers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_info_hooks__WEBPACK_IMPORTED_MODULE_4__, state_user_hooks__WEBPACK_IMPORTED_MODULE_5__, views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_TopTokenMovers__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_info_hooks__WEBPACK_IMPORTED_MODULE_4__, state_user_hooks__WEBPACK_IMPORTED_MODULE_5__, views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_TopTokenMovers__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const TokensOverview = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const allTokens = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAllTokenDataSWR */ .jF)();
    const formattedTokens = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return Object.values(allTokens).map((token)=>token.data).filter((token)=>token);
    }, [
        allTokens
    ]);
    const [savedTokens] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useWatchlistTokens */ .z6)();
    const watchListTokens = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useTokenDatasSWR */ .ZF)(savedTokens);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                scale: "lg",
                mb: "16px",
                children: t("Your Watchlist")
            }),
            watchListTokens.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                tokenDatas: watchListTokens
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    py: "16px",
                    px: "24px",
                    children: t("Saved tokens will appear here")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_TopTokenMovers__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                id: "info-tokens-title",
                children: t("All Tokens")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                tokenDatas: formattedTokens
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokensOverview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ScrollableRow */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23726);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87434);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84785);
/* harmony import */ var views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80675);
/* harmony import */ var views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_3__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([state_info_hooks__WEBPACK_IMPORTED_MODULE_3__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5c5f88bc-0"
})`
  display: inline-block;
  min-width: 190px;
  margin-left: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const TopMoverCard = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5c5f88bc-1"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: ${({ theme  })=>theme.radii.card};
  padding: 16px;
`;
const ScrollableRow = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-5c5f88bc-2"
})`
  width: 100%;
  overflow-x: auto;
  padding: 16px 0;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const DataCard = ({ tokenData  })=>{
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetChainName */ .qg)();
    const chainPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMultiChainPath */ .hb)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardWrapper, {
        to: `/info${chainPath}/tokens/${tokenData.address}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopMoverCard, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        width: "32px",
                        height: "32px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__/* .CurrencyLogo */ .X, {
                            address: tokenData.address,
                            size: "32px",
                            chainName: chainName
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        ml: "16px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                children: tokenData.symbol
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        fontSize: "14px",
                                        mr: "6px",
                                        lineHeight: "16px",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__/* .formatAmount */ .d)(tokenData.priceUSD)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        fontSize: "14px",
                                        value: tokenData.priceUSDChange
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const TopTokenMovers = ()=>{
    const allTokens = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAllTokenDataSWR */ .jF)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const topPriceIncrease = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return Object.values(allTokens).sort(({ data: a  }, { data: b  })=>{
            // eslint-disable-next-line no-nested-ternary
            return a && b ? Math.abs(a?.priceUSDChange) > Math.abs(b?.priceUSDChange) ? -1 : 1 : -1;
        }).slice(0, Math.min(20, Object.values(allTokens).length)).filter((d)=>d?.data?.exists);
    }, [
        allTokens
    ]);
    const increaseRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const moveLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const scrollInterval = setInterval(()=>{
            if (increaseRef.current) {
                if (increaseRef.current.scrollLeft === increaseRef.current.scrollWidth - increaseRef.current.clientWidth) {
                    moveLeftRef.current = false;
                } else if (increaseRef.current.scrollLeft === 0) {
                    moveLeftRef.current = true;
                }
                increaseRef.current.scrollTo(moveLeftRef.current ? increaseRef.current.scrollLeft + 1 : increaseRef.current.scrollLeft - 1, 0);
            }
        }, 30);
        return ()=>{
            clearInterval(scrollInterval);
        };
    }, []);
    if (topPriceIncrease.length === 0 || !topPriceIncrease.some((entry)=>entry.data)) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        my: "16px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                ml: "16px",
                mt: "8px",
                children: t("Top Movers")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollableRow, {
                ref: increaseRef,
                children: topPriceIncrease.map((entry)=>entry.data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataCard, {
                        tokenData: entry.data
                    }, `top-card-token-${entry.data?.address}`) : null)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopTokenMovers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83852:
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
            d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=65.js.map