"use strict";
exports.id = 4283;
exports.ids = [4283];
exports.modules = {

/***/ 24283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ChartCardsContainer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23726);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87434);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var views_Info_components_InfoCharts_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34354);
/* harmony import */ var views_Info_components_InfoCharts_LineChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30017);
/* harmony import */ var views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66937);
/* harmony import */ var views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17456);
/* harmony import */ var views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38073);
/* harmony import */ var _components_InfoCharts_HoverableChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_info_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Info_components_InfoCharts_BarChart__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_InfoCharts_LineChart__WEBPACK_IMPORTED_MODULE_7__, views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_8__, views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_9__, views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_10__, _components_InfoCharts_HoverableChart__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_info_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Info_components_InfoCharts_BarChart__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_InfoCharts_LineChart__WEBPACK_IMPORTED_MODULE_7__, views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_8__, views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_9__, views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_10__, _components_InfoCharts_HoverableChart__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ChartCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-36b98476-0"
})`
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1em;

  & > * {
    width: 100%;
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-direction: row;
  } ;
`;
const Overview = ()=>{
    const { t , currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const protocolData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProtocolDataSWR */ .hw)();
    const chartData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProtocolChartDataSWR */ .Xx)();
    const transactions = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProtocolTransactionsSWR */ .H8)();
    const currentDate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new Date().toLocaleString(locale, {
            month: "short",
            year: "numeric",
            day: "numeric"
        }), [
        locale
    ]);
    const allTokens = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAllTokenDataSWR */ .jF)();
    const formattedTokens = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return Object.values(allTokens).map((token)=>token.data).filter((token)=>token.name !== "unknown");
    }, [
        allTokens
    ]);
    const allPoolData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAllPoolDataSWR */ .ft)();
    // const allPoolData = useAllPoolData()
    const poolDatas = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return Object.values(allPoolData).map((pool)=>pool.data).filter((pool)=>pool.token1.name !== "unknown" && pool.token0.name !== "unknown");
    }, [
        allPoolData
    ]);
    const somePoolsAreLoading = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return poolDatas.some((pool)=>!pool?.token0Price);
    }, [
        poolDatas
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                scale: "lg",
                mb: "16px",
                id: "info-overview-title",
                children: t("PancakeSwap Info & Analytics")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChartCardsContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InfoCharts_HoverableChart__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            chartData: chartData,
                            protocolData: protocolData,
                            currentDate: currentDate,
                            valueProperty: "liquidityUSD",
                            title: t("Liquidity"),
                            ChartComponent: views_Info_components_InfoCharts_LineChart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InfoCharts_HoverableChart__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            chartData: chartData,
                            protocolData: protocolData,
                            currentDate: currentDate,
                            valueProperty: "volumeUSD",
                            title: t("Volume 24H"),
                            ChartComponent: views_Info_components_InfoCharts_BarChart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: t("Top Tokens")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_TokensTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                tokenDatas: formattedTokens
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: t("Top Pools")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                poolDatas: poolDatas,
                loading: somePoolsAreLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: t("Transactions")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                transactions: transactions
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const BarChartLoaderSVG = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        width: "100%",
        height: "100%",
        viewBox: "0 0 50 25",
        preserveAspectRatio: "none",
        opacity: "0.1",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.9s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.9s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "10.222%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.8s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.8s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "20.444%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.7s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.7s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "30.666%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.6s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.6s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "40.888%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.5s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.5s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "51.11%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.4s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.4s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "61.332%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.3s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.3s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "71.554%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.2s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.2s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "81.776%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.1s"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite",
                        begin: "-0.1s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                x: "91.998%",
                width: "8%",
                fill: "#1FC7D4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "height",
                        dur: "0.9s",
                        values: "15%; 90%; 15%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                        attributeName: "y",
                        dur: "0.9s",
                        values: "85%; 10%; 85%",
                        keyTimes: "0; 0.55; 1",
                        repeatCount: "indefinite"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChartLoaderSVG);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43801:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const CandleChartLoaderSVG = (props)=>{
    return /*#__PURE__*/ _jsxs(Svg, {
        width: "100%",
        height: "100%",
        viewBox: "0 0 100 50",
        opacity: "0.1",
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("rect", {
                width: "5%",
                fill: "#31D0AA",
                children: [
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 40%; 40%; 10%; 10%",
                        keyTimes: "0; 0.125; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "y",
                        dur: "2s",
                        from: "50%",
                        to: "30%",
                        values: "30%; 10%; 10%; 25%; 25%",
                        keyTimes: "0; 0.125; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "32.5%; 32.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("rect", {
                width: "5%",
                fill: "#31D0AA",
                children: [
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 0%; 20%; 20%; 10%; 10%",
                        keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "y",
                        dur: "2s",
                        values: "15%; 15%; 5%; 5%; 25%; 25%",
                        keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "42.5%; 42.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("rect", {
                width: "5%",
                fill: "#ED4B9E",
                children: [
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 0%; 35%; 35%; 10%; 10%",
                        keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "y",
                        dur: "2s",
                        values: "25%; 25%; 10%; 10%; 25%; 25%",
                        keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "52.5%; 52.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("rect", {
                width: "5%",
                fill: "#31D0AA",
                children: [
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "height",
                        dur: "2s",
                        values: "0%; 0%; 35%; 35%; 10%; 10%",
                        keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "y",
                        dur: "2s",
                        values: "15%; 15%; 0%; 0%; 25%; 25%",
                        keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "rx",
                        dur: "2s",
                        values: "0%; 0%; 100%; 100%;",
                        keyTimes: "0; 0.6; 0.625; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "x",
                        dur: "2s",
                        values: "62.5%; 62.5%; 47.5%; 47.5%;",
                        keyTimes: "0; 0.7; 0.8; 1",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ _jsx("animate", {
                        attributeName: "opacity",
                        dur: "2s",
                        values: "1; 1; 0; 0;",
                        keyTimes: "0; 0.75; 0.9; 1",
                        repeatCount: "indefinite"
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CandleChartLoaderSVG)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const LineChartLoaderSVG = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        width: "100%",
        height: "100%",
        preserveAspectRatio: "none",
        viewBox: "0 0 100 50",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6",
                stroke: "#7645D9",
                strokeWidth: "0.2",
                strokeDasharray: "156",
                strokeDashoffset: "156",
                fill: "transparent",
                opacity: "0.5",
                filter: "url(#glow)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                    id: "firstline",
                    attributeName: "stroke-dashoffset",
                    dur: "2s",
                    from: "156",
                    to: "-156",
                    begin: "0s;firstline.end+0.5s"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6",
                stroke: "#7645D9",
                strokeWidth: "0.2",
                strokeDasharray: "156",
                strokeDashoffset: "156",
                fill: "transparent",
                opacity: "0.5",
                filter: "url(#glow)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                    id: "secondline",
                    attributeName: "stroke-dashoffset",
                    dur: "2s",
                    from: "156",
                    to: "-156",
                    begin: "1.3s;secondline.end+0.5s"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "glow",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                            className: "blur",
                            result: "coloredBlur",
                            stdDeviation: "4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("feMerge", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMergeNode", {
                                    in: "coloredBlur"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMergeNode", {
                                    in: "coloredBlur"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMergeNode", {
                                    in: "coloredBlur"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMergeNode", {
                                    in: "SourceGraphic"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartLoaderSVG);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M4": () => (/* binding */ BarChartLoader),
/* harmony export */   "fn": () => (/* binding */ LineChartLoader)
/* harmony export */ });
/* unused harmony export CandleChartLoader */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _LineChartLoaderSVG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56487);
/* harmony import */ var _BarChartLoaderSVG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24492);
/* harmony import */ var _CandleChartLoaderSVG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LineChartLoaderSVG__WEBPACK_IMPORTED_MODULE_3__, _BarChartLoaderSVG__WEBPACK_IMPORTED_MODULE_4__, _CandleChartLoaderSVG__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_LineChartLoaderSVG__WEBPACK_IMPORTED_MODULE_3__, _BarChartLoaderSVG__WEBPACK_IMPORTED_MODULE_4__, _CandleChartLoaderSVG__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LoadingText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-42fcc4ac-0"
})`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
`;
const LoadingIndicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-42fcc4ac-1"
})`
  height: 100%;
  position: relative;
`;
const BarChartLoader = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoadingIndicator, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BarChartLoaderSVG__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingText, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    fontSize: "20px",
                    children: t("Loading chart data...")
                })
            })
        ]
    });
};
const LineChartLoader = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoadingIndicator, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LineChartLoaderSVG__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingText, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    fontSize: "20px",
                    children: t("Loading chart data...")
                })
            })
        ]
    });
};
const CandleChartLoader = ()=>{
    const { t  } = useTranslation();
    return /*#__PURE__*/ _jsxs(LoadingIndicator, {
        children: [
            /*#__PURE__*/ _jsx(CandleChartLoaderSVG, {}),
            /*#__PURE__*/ _jsx(LoadingText, {
                children: /*#__PURE__*/ _jsx(Text, {
                    color: "textSubtle",
                    fontSize: "20px",
                    children: t("Loading chart data...")
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19081);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84785);
/* harmony import */ var views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81309);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CustomBar = ({ x , y , width , height , fill  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
            x: x,
            y: y,
            fill: fill,
            width: width,
            height: height,
            rx: "2"
        })
    });
};
const Chart = ({ data , setHoverValue , setHoverDate  })=>{
    const { currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    if (!data || data.length === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__/* .BarChartLoader */ .M4, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContainer, {
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_1__.BarChart, {
            data: data,
            margin: {
                top: 5,
                right: 15,
                left: 0,
                bottom: 5
            },
            onMouseLeave: ()=>{
                setHoverDate(undefined);
                setHoverValue(undefined);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {
                    dataKey: "time",
                    axisLine: false,
                    tickLine: false,
                    tickFormatter: (time)=>time.toLocaleDateString(undefined, {
                            day: "2-digit"
                        }),
                    minTickGap: 10
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {
                    dataKey: "value",
                    tickCount: 6,
                    scale: "linear",
                    axisLine: false,
                    tickLine: false,
                    color: theme.colors.textSubtle,
                    fontSize: "12px",
                    tickFormatter: (val)=>`$${(0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_3__/* .formatAmount */ .d)(val)}`,
                    orientation: "right",
                    tick: {
                        dx: 10,
                        fill: theme.colors.textSubtle
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                    cursor: {
                        fill: theme.colors.backgroundDisabled
                    },
                    contentStyle: {
                        display: "none"
                    },
                    formatter: (tooltipValue, name, props)=>{
                        setHoverValue(props.payload.value);
                        setHoverDate(props.payload.time.toLocaleString(locale, {
                            year: "numeric",
                            day: "numeric",
                            month: "short"
                        }));
                        return null;
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.Bar, {
                    dataKey: "value",
                    fill: theme.colors.primary,
                    shape: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomBar, {
                            height: props.height,
                            width: props.width,
                            x: props.x,
                            y: props.y,
                            fill: theme.colors.primary
                        })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33430);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84785);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const HoverableChart = ({ chartData , protocolData , currentDate , valueProperty , title , ChartComponent  })=>{
    const { 0: hover , 1: setHover  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: dateHover , 1: setDateHover  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    // Getting latest data to display on top of chart when not hovered
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setHover(null);
    }, [
        protocolData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (hover == null && protocolData) {
            setHover(protocolData[valueProperty]);
        }
    }, [
        protocolData,
        hover,
        valueProperty
    ]);
    const formattedData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (chartData) {
            return chartData.map((day)=>{
                return {
                    time: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.fromUnixTime)(day.date),
                    value: day[valueProperty]
                };
            });
        }
        return [];
    }, [
        chartData,
        valueProperty
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        p: [
            "16px",
            "16px",
            "24px"
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                bold: true,
                color: "secondary",
                children: title
            }),
            hover > -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                bold: true,
                fontSize: "24px",
                children: [
                    "$",
                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_3__/* .formatAmount */ .d)(hover)
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                width: "128px",
                height: "36px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: dateHover ?? currentDate
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                height: "250px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChartComponent, {
                    data: formattedData,
                    setHoverValue: setHover,
                    setHoverDate: setDateHover
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(HoverableChart));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19081);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84785);
/* harmony import */ var views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81309);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/**
 * Note: remember that it needs to be mounted inside the container with fixed height
 */ const LineChart = ({ data , setHoverValue , setHoverDate  })=>{
    const { currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    if (!data || data.length === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_ChartLoaders__WEBPACK_IMPORTED_MODULE_4__/* .LineChartLoader */ .fn, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContainer, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_1__.AreaChart, {
            data: data,
            width: 300,
            height: 308,
            margin: {
                top: 5,
                right: 15,
                left: 0,
                bottom: 5
            },
            onMouseLeave: ()=>{
                if (setHoverDate) setHoverDate(undefined);
                if (setHoverValue) setHoverValue(undefined);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "gradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "5%",
                                stopColor: theme.colors.inputSecondary,
                                stopOpacity: 0.5
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "100%",
                                stopColor: theme.colors.secondary,
                                stopOpacity: 0
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {
                    dataKey: "time",
                    axisLine: false,
                    tickLine: false,
                    tickFormatter: (time)=>time.toLocaleDateString(undefined, {
                            day: "2-digit"
                        }),
                    minTickGap: 10
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {
                    dataKey: "value",
                    tickCount: 6,
                    scale: "linear",
                    axisLine: false,
                    tickLine: false,
                    fontSize: "12px",
                    tickFormatter: (val)=>`$${(0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_3__/* .formatAmount */ .d)(val)}`,
                    orientation: "right",
                    tick: {
                        dx: 10,
                        fill: theme.colors.textSubtle
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                    cursor: {
                        stroke: theme.colors.secondary
                    },
                    contentStyle: {
                        display: "none"
                    },
                    formatter: (tooltipValue, name, props)=>{
                        setHoverValue(props.payload.value);
                        setHoverDate(props.payload.time.toLocaleString(locale, {
                            year: "numeric",
                            day: "numeric",
                            month: "short"
                        }));
                        return null;
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.Area, {
                    dataKey: "value",
                    type: "monotone",
                    stroke: theme.colors.secondary,
                    fill: "url(#gradient)",
                    strokeWidth: 2
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55834);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23992);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43437);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87434);
/* harmony import */ var state_info_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29209);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84785);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_5__, _shared__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([state_info_hooks__WEBPACK_IMPORTED_MODULE_5__, _shared__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// TODO PCS refactor ternaries
/* eslint-disable no-nested-ternary */ 













const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-48af84ea-0"
})`
  width: 100%;
`;
const ResponsiveGrid = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-48af84ea-1"
})`
  display: grid;
  grid-gap: 1em;
  align-items: center;
  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 940px) {
    grid-template-columns: 2fr repeat(4, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 2fr repeat(2, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 2fr 1fr;
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      display: none;
    }
    & > *:nth-child(2) {
      display: none;
    }
  }
`;
const RadioGroup = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-48af84ea-2"
})`
  align-items: center;
  margin-right: 16px;
  margin-top: 8px;
  cursor: pointer;
`;
const SORT_FIELD = {
    amountUSD: "amountUSD",
    timestamp: "timestamp",
    sender: "sender",
    amountToken0: "amountToken0",
    amountToken1: "amountToken1"
};
const TableLoader = ()=>{
    const loadingRow = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            loadingRow,
            loadingRow,
            loadingRow
        ]
    });
};
const DataRow = ({ transaction  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const abs0 = Math.abs(transaction.amountToken0);
    const abs1 = Math.abs(transaction.amountToken1);
    const outputTokenSymbol = transaction.amountToken0 < 0 ? transaction.token0Symbol : transaction.token1Symbol;
    const inputTokenSymbol = transaction.amountToken1 < 0 ? transaction.token0Symbol : transaction.token1Symbol;
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetChainName */ .qg)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(transaction.hash, "transaction", chainName === "ETH" && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    children: transaction.type === state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.MINT */ .i.MINT ? t("Add %token0% and %token1%", {
                        token0: transaction.token0Symbol,
                        token1: transaction.token1Symbol
                    }) : transaction.type === state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.SWAP */ .i.SWAP ? t("Swap %token0% for %token1%", {
                        token0: inputTokenSymbol,
                        token1: outputTokenSymbol
                    }) : t("Remove %token0% and %token1%", {
                        token0: transaction.token0Symbol,
                        token1: transaction.token1Symbol
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: [
                    "$",
                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(transaction.amountUSD)
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    children: `${(0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(abs0)} ${transaction.token0Symbol}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    children: `${(0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(abs1)} ${transaction.token1Symbol}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                href: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(transaction.sender, "address", chainName === "ETH" && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM),
                children: (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(transaction.sender)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.formatDistanceToNowStrict)(parseInt(transaction.timestamp, 10) * 1000)
            })
        ]
    });
};
const TransactionTable = ({ transactions  })=>{
    const { 0: sortField , 1: setSortField  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(SORT_FIELD.timestamp);
    const { 0: sortDirection , 1: setSortDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: maxPage , 1: setMaxPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: txFilter , 1: setTxFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
    const sortedTransactions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const toBeAbsList = [
            SORT_FIELD.amountToken0,
            SORT_FIELD.amountToken1
        ];
        return transactions ? transactions.slice().sort((a, b)=>{
            if (a && b) {
                const firstField = a[sortField];
                const secondField = b[sortField];
                const [first, second] = toBeAbsList.includes(sortField) ? [
                    Math.abs(firstField),
                    Math.abs(secondField)
                ] : [
                    firstField,
                    secondField
                ];
                return first > second ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1;
            }
            return -1;
        }).filter((x)=>{
            return txFilter === undefined || x.type === txFilter;
        }).slice(config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si * (page - 1), page * config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si) : [];
    }, [
        transactions,
        page,
        sortField,
        sortDirection,
        txFilter
    ]);
    // Update maxPage based on amount of items & applied filtering
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (transactions) {
            const filteredTransactions = transactions.filter((tx)=>{
                return txFilter === undefined || tx.type === txFilter;
            });
            if (filteredTransactions.length % config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si === 0) {
                setMaxPage(Math.floor(filteredTransactions.length / config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si));
            } else {
                setMaxPage(Math.floor(filteredTransactions.length / config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si) + 1);
            }
        }
    }, [
        transactions,
        txFilter
    ]);
    const handleFilter = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((newFilter)=>{
        if (newFilter !== txFilter) {
            setTxFilter(newFilter);
            setPage(1);
        }
    }, [
        txFilter
    ]);
    const handleSort = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((newField)=>{
        setSortField(newField);
        setSortDirection(sortField !== newField ? true : !sortDirection);
    }, [
        sortDirection,
        sortField
    ]);
    const arrow = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((field)=>{
        const directionArrow = !sortDirection ? "↑" : "↓";
        return sortField === field ? directionArrow : "";
    }, [
        sortDirection,
        sortField
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                mb: "16px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        flexDirection: [
                            "column",
                            "row"
                        ],
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RadioGroup, {
                                onClick: ()=>handleFilter(undefined),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        onChange: ()=>null,
                                        scale: "sm",
                                        checked: txFilter === undefined
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        ml: "8px",
                                        children: t("All")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RadioGroup, {
                                onClick: ()=>handleFilter(state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.SWAP */ .i.SWAP),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        onChange: ()=>null,
                                        scale: "sm",
                                        checked: txFilter === state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.SWAP */ .i.SWAP
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        ml: "8px",
                                        children: t("Swaps")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        flexDirection: [
                            "column",
                            "row"
                        ],
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RadioGroup, {
                                onClick: ()=>handleFilter(state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.MINT */ .i.MINT),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        onChange: ()=>null,
                                        scale: "sm",
                                        checked: txFilter === state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.MINT */ .i.MINT
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        ml: "8px",
                                        children: t("Adds")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RadioGroup, {
                                onClick: ()=>handleFilter(state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.BURN */ .i.BURN),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        onChange: ()=>null,
                                        scale: "sm",
                                        checked: txFilter === state_info_types__WEBPACK_IMPORTED_MODULE_6__/* .TransactionType.BURN */ .i.BURN
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        ml: "8px",
                                        children: t("Removes")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .TableWrapper */ .y6, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: true,
                                textTransform: "uppercase",
                                children: t("Action")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .ClickableColumnHeader */ ._J, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: true,
                                onClick: ()=>handleSort(SORT_FIELD.amountUSD),
                                textTransform: "uppercase",
                                children: [
                                    t("Total Value"),
                                    " ",
                                    arrow(SORT_FIELD.amountUSD)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .ClickableColumnHeader */ ._J, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: true,
                                onClick: ()=>handleSort(SORT_FIELD.amountToken0),
                                textTransform: "uppercase",
                                children: [
                                    t("Token Amount"),
                                    " ",
                                    arrow(SORT_FIELD.amountToken0)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .ClickableColumnHeader */ ._J, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: true,
                                onClick: ()=>handleSort(SORT_FIELD.amountToken1),
                                textTransform: "uppercase",
                                children: [
                                    t("Token Amount"),
                                    " ",
                                    arrow(SORT_FIELD.amountToken1)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .ClickableColumnHeader */ ._J, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: true,
                                onClick: ()=>handleSort(SORT_FIELD.sender),
                                textTransform: "uppercase",
                                children: [
                                    t("Account"),
                                    " ",
                                    arrow(SORT_FIELD.sender)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .ClickableColumnHeader */ ._J, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: true,
                                onClick: ()=>handleSort(SORT_FIELD.timestamp),
                                textTransform: "uppercase",
                                children: [
                                    t("Time"),
                                    " ",
                                    arrow(SORT_FIELD.timestamp)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_10__/* .Break */ .SS, {}),
                    transactions ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            sortedTransactions.map((transaction, index)=>{
                                if (transaction) {
                                    return(// eslint-disable-next-line react/no-array-index-key
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataRow, {
                                                transaction: transaction
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_10__/* .Break */ .SS, {})
                                        ]
                                    }, index));
                                }
                                return null;
                            }),
                            sortedTransactions.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                justifyContent: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    children: t("No Transactions")
                                })
                            }) : undefined,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_10__/* .PageButtons */ .Ob, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_10__/* .Arrow */ .Eh, {
                                        onClick: ()=>{
                                            setPage(page === 1 ? page : page - 1);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            color: page === 1 ? "textDisabled" : "primary"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        children: t("Page %page% of %maxPage%", {
                                            page,
                                            maxPage
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_10__/* .Arrow */ .Eh, {
                                        onClick: ()=>{
                                            setPage(page === maxPage ? page : page + 1);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                            color: page === maxPage ? "textDisabled" : "primary"
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableLoader, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80423);
/* harmony import */ var _Svg_Icons_OpenNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12486);




const LinkExternal = ({ children , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        external: true,
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icons_OpenNew__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: props.color ? props.color : "primary",
                ml: "4px"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkExternal);


/***/ })

};
;
//# sourceMappingURL=4283.js.map