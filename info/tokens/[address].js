"use strict";
(() => {
var exports = {};
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 14080:
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
/* harmony import */ var views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66307);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var views_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__, views_Info__WEBPACK_IMPORTED_MODULE_3__]);
([views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__, views_Info__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const TokenPage = ({ address  })=>{
    if (!address) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        routeAddress: address
    });
};
TokenPage.Layout = views_Info__WEBPACK_IMPORTED_MODULE_3__/* .InfoPageLayout */ .O;
TokenPage.chains = [] // set all
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenPage);
const getStaticPaths = ()=>{
    return {
        paths: [],
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const address = params?.address;
    // In case somebody pastes checksummed address into url (since GraphQL expects lowercase address)
    if (!address || !(0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(String(address).toLowerCase())) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            address
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14979);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(43424);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55834);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(43437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79467);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87434);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72135);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84785);
/* harmony import */ var views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80675);
/* harmony import */ var views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66107);
/* harmony import */ var views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66937);
/* harmony import */ var views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38073);
/* harmony import */ var views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2227);
/* harmony import */ var views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43488);
/* harmony import */ var views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_info_hooks__WEBPACK_IMPORTED_MODULE_5__, state_user_hooks__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_10__, views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_11__, views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__, views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_14__, views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_15__, views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_info_hooks__WEBPACK_IMPORTED_MODULE_5__, state_user_hooks__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_10__, views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_11__, views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__, views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_14__, views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_15__, views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-nested-ternary */ 



















const ContentLayout = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-9d1d789-0"
})`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-gap: 1em;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const StyledCMCLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
    componentId: "sc-9d1d789-1"
})`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  & :hover {
    opacity: 0.8;
  }
`;
const DEFAULT_TIME_WINDOW = {
    weeks: 1
};
const TokenPage = ({ routeAddress  })=>{
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    // In case somebody pastes checksummed address into url (since GraphQL expects lowercase address)
    const address = routeAddress.toLowerCase();
    const cmcLink = (0,views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(address);
    const tokenData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTokenDataSWR */ .b6)(address);
    const poolsForToken = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePoolsForTokenSWR */ .P6)(address);
    const poolDatas = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePoolDatasSWR */ .gw)(poolsForToken ?? []);
    const transactions = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTokenTransactionsSWR */ .nT)(address);
    const chartData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTokenChartDataSWR */ .Jj)(address);
    // pricing data
    const priceData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTokenPriceDataSWR */ .QB)(address, config_constants_info__WEBPACK_IMPORTED_MODULE_19__/* .ONE_HOUR_SECONDS */ .Tb, DEFAULT_TIME_WINDOW);
    const adjustedPriceData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        // Include latest available price
        if (priceData && tokenData && priceData.length > 0) {
            return [
                ...priceData,
                {
                    time: new Date().getTime() / 1000,
                    open: priceData[priceData.length - 1].close,
                    close: tokenData?.priceUSD,
                    high: tokenData?.priceUSD,
                    low: priceData[priceData.length - 1].close
                }, 
            ];
        }
        return undefined;
    }, [
        priceData,
        tokenData
    ]);
    const [watchlistTokens, addWatchlistToken] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useWatchlistTokens */ .z6)();
    const chainPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useMultiChainPath */ .hb)();
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetChainName */ .qg)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        symbol: tokenData?.symbol,
        children: tokenData ? !tokenData.exists ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                p: "16px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    children: [
                        t("No pool has been created with this token yet. Create one"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            style: {
                                display: "inline",
                                marginLeft: "6px"
                            },
                            to: `/add/${address}`,
                            children: t("here.")
                        })
                    ]
                })
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    mb: "24px",
                    flexDirection: [
                        "column",
                        "column",
                        "row"
                    ],
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                            mb: "32px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    to: `/info${chainPath}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        color: "primary",
                                        children: t("Info")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    to: `/info${chainPath}/tokens`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        color: "primary",
                                        children: t("Tokens")
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            mr: "8px",
                                            children: tokenData.symbol
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            children: `(${(0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(address)})`
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                            justifyContent: [
                                null,
                                null,
                                "flex-end"
                            ],
                            mt: [
                                "8px",
                                "8px",
                                0
                            ],
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                    mr: "8px",
                                    color: "primary",
                                    href: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(address, "address", state_info_constant__WEBPACK_IMPORTED_MODULE_4__/* .multiChainId */ .Pi[chainName]),
                                    children: t("View on %site%", {
                                        site: state_info_constant__WEBPACK_IMPORTED_MODULE_4__/* .multiChainScan */ .nA[chainName]
                                    })
                                }),
                                cmcLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCMCLink, {
                                    href: cmcLink,
                                    rel: "noopener noreferrer nofollow",
                                    target: "_blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        src: "/images/CMC-logo.svg",
                                        height: 22,
                                        width: 22,
                                        alt: t("View token on CoinMarketCap")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    fill: watchlistTokens.includes(address),
                                    onClick: ()=>addWatchlistToken(address)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    flexDirection: [
                        "column",
                        "column",
                        "column",
                        "row"
                    ],
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            mb: [
                                "8px",
                                null
                            ],
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyLogo */ .X, {
                                            size: "32px",
                                            address: address
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            ml: "12px",
                                            bold: true,
                                            lineHeight: "0.7",
                                            fontSize: isXs || isSm ? "24px" : "40px",
                                            id: "info-token-name-title",
                                            children: tokenData.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            ml: "12px",
                                            lineHeight: "1",
                                            color: "textSubtle",
                                            fontSize: isXs || isSm ? "14px" : "20px",
                                            children: [
                                                "(",
                                                tokenData.symbol,
                                                ")"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                    mt: "8px",
                                    ml: "46px",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            mr: "16px",
                                            bold: true,
                                            fontSize: "24px",
                                            children: [
                                                "$",
                                                (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(tokenData.priceUSD, {
                                                    notation: "standard"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            value: tokenData.priceUSDChange,
                                            fontWeight: 600
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    to: `/add/${address}?chainId=${state_info_constant__WEBPACK_IMPORTED_MODULE_4__/* .multiChainId */ .Pi[chainName]}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                        mr: "8px",
                                        variant: "secondary",
                                        children: t("Add Liquidity")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    to: `/swap?inputCurrency=${address}&chainId=${state_info_constant__WEBPACK_IMPORTED_MODULE_4__/* .multiChainId */ .Pi[chainName]}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                        children: t("Trade")
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentLayout, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                p: "24px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        small: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Liquidity")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(tokenData.liquidityUSD)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        value: tokenData.liquidityUSDChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Volume 24H")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        textTransform: "uppercase",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(tokenData.volumeUSD)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        value: tokenData.volumeUSDChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Volume 7D")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(tokenData.volumeUSDWeek)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Transactions 24H")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        children: (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_9__/* .formatAmount */ .d)(tokenData.txCount, {
                                            isInteger: true
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            variant: "token",
                            chartData: chartData,
                            tokenData: tokenData,
                            tokenPriceData: adjustedPriceData
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                    scale: "lg",
                    mb: "16px",
                    mt: "40px",
                    children: t("Pools")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    poolDatas: poolDatas
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                    scale: "lg",
                    mb: "16px",
                    mt: "40px",
                    children: t("Transactions")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    transactions: transactions
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            mt: "80px",
            justifyContent: "center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_0__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// endpoint to check asset exists and get url to CMC page
// returns 400 status code if token is not on CMC
const CMC_ENDPOINT = "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address=";
/**
 * Check if asset exists on CMC, if exists
 * return url, if not return undefined
 * @param address token address (all lowercase, checksummed are not supported by CMC)
 */ const useCMCLink = (address)=>{
    const { data: cmcPageUrl  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__["default"])(address ? [
        "cmcLink",
        address
    ] : null, async ()=>{
        const response = await fetch(`${CMC_ENDPOINT}${address}`);
        if (response.ok) {
            return (await response.json()).data.url;
        }
        return undefined;
    });
    return cmcPageUrl;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCMCLink);

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

/***/ 51554:
/***/ ((module) => {

module.exports = require("@uniswap/token-lists");

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

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

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

/***/ 9822:
/***/ ((module) => {

module.exports = require("lodash/reduce");

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 23655:
/***/ ((module) => {

module.exports = require("recharts");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,7454,5237,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,3430,4866,7379,9460,9860,9866,1051,3424,5306,310,4979,6937,9402], () => (__webpack_exec__(14080)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[address].js.map