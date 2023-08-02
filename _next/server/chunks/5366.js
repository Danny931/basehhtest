"use strict";
exports.id = 5366;
exports.ids = [5366];
exports.modules = {

/***/ 51991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Dots = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-818b03ea-0"
})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dots);


/***/ }),

/***/ 51355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WP": () => (/* binding */ MinimalPositionCard),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uK": () => (/* binding */ StableFullPositionCard)
/* harmony export */ });
/* unused harmony export StableFullPositionCardContainer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(65474);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(33231);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(52142);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34508);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36695);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37926);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9270);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92794);
/* harmony import */ var views_RemoveLiquidity_RemoveStableLiquidity_hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87000);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11824);
/* harmony import */ var _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33472);
/* harmony import */ var _utils_currencyId__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(36099);
/* harmony import */ var _utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94250);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27156);
/* harmony import */ var _Layout_Column__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77253);
/* harmony import */ var _Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39999);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87573);
/* harmony import */ var _Layout_Row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79631);
/* harmony import */ var _Loader_Dots__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51991);
/* harmony import */ var _utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84785);
/* harmony import */ var _state_swap_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(26202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, views_RemoveLiquidity_RemoveStableLiquidity_hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_9__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__, _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__, _Card__WEBPACK_IMPORTED_MODULE_13__, _Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_15__, _Logo__WEBPACK_IMPORTED_MODULE_16__, _Layout_Row__WEBPACK_IMPORTED_MODULE_17__, _state_swap_hooks__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__]);
([hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, views_RemoveLiquidity_RemoveStableLiquidity_hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_9__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__, _state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__, _Card__WEBPACK_IMPORTED_MODULE_13__, _Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_15__, _Logo__WEBPACK_IMPORTED_MODULE_16__, _Layout_Row__WEBPACK_IMPORTED_MODULE_17__, _state_swap_hooks__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const FixedHeightRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowBetween */ .m0).withConfig({
    componentId: "sc-31608496-0"
})`
  height: 24px;
`;
const useTokensDeposited = ({ pair , totalPoolTokens , userPoolBalance  })=>{
    const [token0Deposited, token1Deposited] = !!pair && !!totalPoolTokens && !!userPoolBalance && // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.JSBI.greaterThanOrEqual(totalPoolTokens.quotient, userPoolBalance.quotient) ? [
        pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
        pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false), 
    ] : [
        undefined,
        undefined
    ];
    return [
        token0Deposited,
        token1Deposited
    ];
};
const useTotalUSDValue = ({ currency0 , currency1 , token0Deposited , token1Deposited  })=>{
    const token0Price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(currency0);
    const token1Price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(currency1);
    const token0USDValue = token0Deposited && token0Price ? (0,utils_prices__WEBPACK_IMPORTED_MODULE_21__/* .multiplyPriceByAmount */ .a)(token0Price, parseFloat(token0Deposited.toSignificant(6))) : null;
    const token1USDValue = token1Deposited && token1Price ? (0,utils_prices__WEBPACK_IMPORTED_MODULE_21__/* .multiplyPriceByAmount */ .a)(token1Price, parseFloat(token1Deposited.toSignificant(6))) : null;
    return token0USDValue && token1USDValue ? token0USDValue + token1USDValue : null;
};
const usePoolTokenPercentage = ({ userPoolBalance , totalPoolTokens  })=>{
    return !!userPoolBalance && !!totalPoolTokens && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.JSBI.greaterThanOrEqual(totalPoolTokens.quotient, userPoolBalance.quotient) ? new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.Percent(userPoolBalance.quotient, totalPoolTokens.quotient) : undefined;
};
const withLPValuesFactory = ({ useLPValuesHook , hookArgFn  })=>(Component)=>(props)=>{
            const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .useWeb3React */ .Ge)();
            const currency0 = props.showUnwrapped ? props.pair.token0 : (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_12__/* .unwrappedToken */ .Bv)(props.pair.token0);
            const currency1 = props.showUnwrapped ? props.pair.token1 : (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_12__/* .unwrappedToken */ .Bv)(props.pair.token1);
            const userPoolBalance = (0,_state_wallet_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useTokenBalance */ .mM)(account ?? undefined, props.pair.liquidityToken);
            const totalPoolTokens = (0,hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(props.pair.liquidityToken);
            const poolTokenPercentage = usePoolTokenPercentage({
                totalPoolTokens,
                userPoolBalance
            });
            const args = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>hookArgFn({
                    userPoolBalance,
                    pair: props.pair,
                    totalPoolTokens
                }), [
                userPoolBalance,
                props.pair,
                totalPoolTokens
            ]);
            const [token0Deposited, token1Deposited] = useLPValuesHook(args);
            const totalUSDValue = useTotalUSDValue({
                currency0,
                currency1,
                token0Deposited,
                token1Deposited
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...props,
                currency0: currency0,
                currency1: currency1,
                token0Deposited: token0Deposited,
                token1Deposited: token1Deposited,
                totalUSDValue: totalUSDValue,
                userPoolBalance: userPoolBalance,
                poolTokenPercentage: poolTokenPercentage
            });
        };
const withLPValues = withLPValuesFactory({
    useLPValuesHook: useTokensDeposited,
    hookArgFn: ({ pair , userPoolBalance , totalPoolTokens  })=>({
            pair,
            userPoolBalance,
            totalPoolTokens
        })
});
const withStableLPValues = withLPValuesFactory({
    useLPValuesHook: views_RemoveLiquidity_RemoveStableLiquidity_hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_9__/* .useGetRemovedTokenAmounts */ .N,
    hookArgFn: ({ userPoolBalance  })=>({
            lpAmount: userPoolBalance?.quotient?.toString()
        })
});
function MinimalPositionCardView({ pair , currency0 , currency1 , token0Deposited , token1Deposited , totalUSDValue , userPoolBalance , poolTokenPercentage  }) {
    const isStableLP = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__/* .StableConfigContext */ .UA);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const poolData = (0,_state_swap_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useLPApr */ .aT)(pair);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(t(`Based on last 7 days' performance. Does not account for impermanent loss`), {
        placement: "bottom"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: userPoolBalance && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.JSBI.greaterThan(userPoolBalance.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_8__/* .BIG_INT_ZERO */ .iV) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_14__/* .AutoColumn */ .Tz, {
                    gap: "16px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FixedHeightRow, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                    color: "secondary",
                                    bold: true,
                                    children: t("LP tokens in your wallet")
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_16__/* .DoubleCurrencyLogo */ .ge, {
                                            currency0: currency0,
                                            currency1: currency1,
                                            margin: true,
                                            size: 20
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            small: true,
                                            color: "textSubtle",
                                            children: [
                                                currency0.symbol,
                                                "-",
                                                currency1.symbol,
                                                " LP"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                                children: userPoolBalance ? userPoolBalance.toSignificant(4) : "-"
                                            }),
                                            Number.isFinite(totalUSDValue) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                                small: true,
                                                color: "textSubtle",
                                                children: `(~${totalUSDValue.toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })} USD)`
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_14__/* .AutoColumn */ .Tz, {
                            gap: "4px",
                            children: [
                                poolData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                            ref: targetRef,
                                            color: "textSubtle",
                                            small: true,
                                            children: [
                                                t("LP reward APR"),
                                                ":"
                                            ]
                                        }),
                                        tooltipVisible && tooltip,
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            children: [
                                                (0,_utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_19__/* .formatAmount */ .d)(poolData.lpApr7d),
                                                "%"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            small: true,
                                            children: [
                                                t("Share of Pool"),
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            children: poolTokenPercentage ? `${poolTokenPercentage.toFixed(6)}%` : "-"
                                        })
                                    ]
                                }),
                                isStableLP ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            small: true,
                                            children: [
                                                t("Pooled %asset%", {
                                                    asset: currency0.symbol
                                                }),
                                                ":"
                                            ]
                                        }),
                                        token0Deposited ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                                ml: "6px",
                                                children: token0Deposited?.toSignificant(6)
                                            })
                                        }) : "-"
                                    ]
                                }),
                                isStableLP ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            small: true,
                                            children: [
                                                t("Pooled %asset%", {
                                                    asset: currency1.symbol
                                                }),
                                                ":"
                                            ]
                                        }),
                                        token1Deposited ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                                ml: "6px",
                                                children: token1Deposited?.toSignificant(6)
                                            })
                                        }) : "-"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_13__/* .LightCard */ .hl, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                fontSize: "14px",
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "pancake-icon",
                        children: "\uD83E\uDD5E"
                    }),
                    " ",
                    t("By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.")
                ]
            })
        })
    });
}
function FullPositionCard({ pair , currency0 , currency1 , token0Deposited , token1Deposited , totalUSDValue , userPoolBalance , poolTokenPercentage , ...props }) {
    const isStableLP = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__/* .StableConfigContext */ .UA);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const poolData = (0,_state_swap_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useLPApr */ .aT)(pair);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(t(`Based on last 7 days' performance. Does not account for impermanent loss`), {
        placement: "bottom"
    });
    const { 0: showMore , 1: setShowMore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                role: "button",
                onClick: ()=>setShowMore(!showMore),
                p: "16px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                alignItems: "center",
                                mb: "4px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_16__/* .DoubleCurrencyLogo */ .ge, {
                                        currency0: currency0,
                                        currency1: currency1,
                                        size: 20
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                        bold: true,
                                        ml: "8px",
                                        children: !currency0 || !currency1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_Dots__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            children: t("Loading")
                                        }) : `${currency0.symbol}/${currency1.symbol}`
                                    }),
                                    isStableLP ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        ml: "4px",
                                        children: [
                                            " ",
                                            "- Stable"
                                        ]
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: userPoolBalance?.toSignificant(4)
                            }),
                            Number.isFinite(totalUSDValue) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: `(~${totalUSDValue.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })} USD)`
                            })
                        ]
                    }),
                    showMore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {})
                ]
            }),
            showMore && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Column__WEBPACK_IMPORTED_MODULE_14__/* .AutoColumn */ .Tz, {
                gap: "8px",
                style: {
                    padding: "16px"
                },
                children: [
                    isStableLP ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        size: "20px",
                                        currency: currency0
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        ml: "4px",
                                        children: [
                                            t("Pooled %asset%", {
                                                asset: currency0.symbol
                                            }),
                                            ":"
                                        ]
                                    })
                                ]
                            }),
                            token0Deposited ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                    ml: "6px",
                                    children: token0Deposited?.toSignificant(6)
                                })
                            }) : "-"
                        ]
                    }),
                    isStableLP ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_CurrencyLogo__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        size: "20px",
                                        currency: currency1
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        ml: "4px",
                                        children: [
                                            t("Pooled %asset%", {
                                                asset: currency1.symbol
                                            }),
                                            ":"
                                        ]
                                    })
                                ]
                            }),
                            token1Deposited ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                    ml: "6px",
                                    children: token1Deposited?.toSignificant(6)
                                })
                            }) : "-"
                        ]
                    }),
                    poolData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Row__WEBPACK_IMPORTED_MODULE_17__/* .RowFixed */ .DA, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                        ref: targetRef,
                                        color: "textSubtle",
                                        children: [
                                            t("LP reward APR"),
                                            ":"
                                        ]
                                    }),
                                    tooltipVisible && tooltip
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                children: [
                                    (0,_utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_19__/* .formatAmount */ .d)(poolData.lpApr7d),
                                    "%"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedHeightRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: t("Share of Pool")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                children: poolTokenPercentage ? `${poolTokenPercentage.toFixed(2) === "0.00" ? "<0.01" : poolTokenPercentage.toFixed(2)}%` : "-"
                            })
                        ]
                    }),
                    userPoolBalance && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.JSBI.greaterThan(userPoolBalance.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_8__/* .BIG_INT_ZERO */ .iV) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
                                to: `/remove/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_32__/* .currencyId */ .H)(currency0)}/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_32__/* .currencyId */ .H)(currency1)}${isStableLP ? "?stable=1" : ""}`,
                                variant: "primary",
                                width: "100%",
                                mb: "8px",
                                children: t("Remove")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
                                to: `/add/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_32__/* .currencyId */ .H)(currency0)}/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_32__/* .currencyId */ .H)(currency1)}?step=1`,
                                variant: "text",
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                                    color: "primary"
                                }),
                                width: "100%",
                                children: t("Add liquidity instead")
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const MinimalPositionCard = withLPValues(MinimalPositionCardView);
const StableFullPositionCardContainer = withStableLPValues(FullPositionCard);
const StableFullPositionCard = (props)=>{
    const { stableSwapConfig , ...config } = (0,views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)({
        tokenA: props.pair?.token0,
        tokenB: props.pair?.token1
    });
    if (!stableSwapConfig) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_10__/* .StableConfigContext.Provider */ .UA.Provider, {
        value: {
            stableSwapConfig,
            ...config
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StableFullPositionCardContainer, {
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withLPValues(FullPositionCard));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useTotalSupply */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87070);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useContract__WEBPACK_IMPORTED_MODULE_2__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__]);
([_useContract__WEBPACK_IMPORTED_MODULE_2__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
function useTotalSupply(token) {
    const contract = (0,_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useTokenContract */ .Ib)(token?.isToken ? token.address : undefined, false);
    const totalSupplyStr = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSingleCallResult */ .Wk)(contract, "totalSupply")?.result?.[0]?.toString();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>token?.isToken && totalSupplyStr ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.CurrencyAmount.fromRawAmount(token, totalSupplyStr) : undefined, [
        token,
        totalSupplyStr
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTotalSupply);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GF": () => (/* binding */ useBurnActionHandlers),
/* harmony export */   "Vx": () => (/* binding */ useDerivedBurnInfo),
/* harmony export */   "Xi": () => (/* binding */ useBurnState)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94250);
/* harmony import */ var hooks_usePairs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82055);
/* harmony import */ var hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34508);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94396);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36204);
/* harmony import */ var _wallet_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33472);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80194);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_usePairs__WEBPACK_IMPORTED_MODULE_5__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_6__, _index__WEBPACK_IMPORTED_MODULE_9__, _wallet_hooks__WEBPACK_IMPORTED_MODULE_10__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_usePairs__WEBPACK_IMPORTED_MODULE_5__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_6__, _index__WEBPACK_IMPORTED_MODULE_9__, _wallet_hooks__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function useBurnState() {
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.burn);
}
function useDerivedBurnInfo(currencyA, currencyB, removalCheckedA, removalCheckedB, zapMode) {
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { independentField , typedValue  } = useBurnState();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$G)();
    // pair + totalsupply
    const [, pair] = (0,hooks_usePairs__WEBPACK_IMPORTED_MODULE_5__/* .usePair */ .yX)(currencyA, currencyB);
    // balances
    const relevantTokenBalances = (0,_wallet_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useTokenBalances */ .Z)(account ?? undefined, [
        pair?.liquidityToken
    ]);
    const userLiquidity = relevantTokenBalances?.[pair?.liquidityToken?.address ?? ""];
    const [tokenA, tokenB] = [
        (0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_4__/* .wrappedCurrency */ .pu)(currencyA, chainId),
        (0,utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_4__/* .wrappedCurrency */ .pu)(currencyB, chainId)
    ];
    const tokens = {
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: tokenA,
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: tokenB,
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.LIQUIDITY */ .g.LIQUIDITY]: pair?.liquidityToken
    };
    // liquidity values
    const totalSupply = (0,hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(pair?.liquidityToken);
    const liquidityValueA = pair && totalSupply && userLiquidity && tokenA && // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.greaterThanOrEqual(totalSupply.quotient, userLiquidity.quotient) ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(tokenA, pair.getLiquidityValue(tokenA, totalSupply, userLiquidity, false).quotient) : undefined;
    const liquidityValueB = pair && totalSupply && userLiquidity && tokenB && // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.greaterThanOrEqual(totalSupply.quotient, userLiquidity.quotient) ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(tokenB, pair.getLiquidityValue(tokenB, totalSupply, userLiquidity, false).quotient) : undefined;
    const liquidityValues = {
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: liquidityValueA,
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: liquidityValueB
    };
    let percentToRemove = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent("0", "100");
    // user specified a %
    if (independentField === _actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT) {
        percentToRemove = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(typedValue, "100");
    } else if (independentField === _actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.LIQUIDITY */ .g.LIQUIDITY) {
        if (pair?.liquidityToken) {
            const independentAmount = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(typedValue, pair.liquidityToken);
            if (independentAmount && userLiquidity && !independentAmount.greaterThan(userLiquidity)) {
                percentToRemove = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(independentAmount.quotient, userLiquidity.quotient);
            }
        }
    } else if (tokens[independentField]) {
        const independentAmount1 = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(typedValue, tokens[independentField]);
        const liquidityValue = liquidityValues[independentField];
        if (independentAmount1 && liquidityValue && !independentAmount1.greaterThan(liquidityValue)) {
            percentToRemove = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(independentAmount1.quotient, liquidityValue.quotient);
        }
    }
    const liquidityToRemove = userLiquidity && percentToRemove && percentToRemove.greaterThan("0") ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(userLiquidity.currency, percentToRemove.multiply(userLiquidity.quotient).quotient) : undefined;
    const tokenToReceive = removalCheckedA && removalCheckedB ? undefined : removalCheckedA ? tokens[_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.address : tokens[_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.address;
    const amountA = tokenA && percentToRemove && percentToRemove.greaterThan("0") && liquidityValueA ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(tokenA, percentToRemove.multiply(liquidityValueA.quotient).quotient) : undefined;
    const amountB = tokenB && percentToRemove && percentToRemove.greaterThan("0") && liquidityValueB ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(tokenB, percentToRemove.multiply(liquidityValueB.quotient).quotient) : undefined;
    const tokenAmountToZap = removalCheckedA && removalCheckedB ? undefined : removalCheckedA ? amountB : amountA;
    const estimateZapOutAmount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (pair && tokenAmountToZap) {
            try {
                return pair.getOutputAmount(tokenAmountToZap)[0];
            } catch (error) {
                return undefined;
            }
        }
        return undefined;
    }, [
        pair,
        tokenAmountToZap
    ]);
    const parsedAmounts = {
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT]: percentToRemove,
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.LIQUIDITY */ .g.LIQUIDITY]: liquidityToRemove,
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: !zapMode ? amountA : amountA && removalCheckedA && !removalCheckedB && estimateZapOutAmount ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(tokenA, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.add(percentToRemove.multiply(liquidityValueA.quotient).quotient, estimateZapOutAmount.quotient)) : !removalCheckedA ? undefined : amountA,
        [_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: !zapMode ? amountB : amountB && removalCheckedB && !removalCheckedA && estimateZapOutAmount ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(tokenB, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.add(percentToRemove.multiply(liquidityValueB.quotient).quotient, estimateZapOutAmount.quotient)) : !removalCheckedB ? undefined : amountB
    };
    let error;
    if (!account) {
        error = t("Connect Wallet");
    }
    if (!parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.LIQUIDITY */ .g.LIQUIDITY] || removalCheckedA && !parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_A */ .g.CURRENCY_A] || removalCheckedB && !parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_11__/* .Field.CURRENCY_B */ .g.CURRENCY_B]) {
        error = error ?? t("Enter an amount");
    }
    return {
        pair,
        parsedAmounts,
        error,
        tokenToReceive,
        estimateZapOutAmount
    };
}
function useBurnActionHandlers() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const onUserInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((field, typedValue)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_11__/* .typeInput */ .L)({
            field,
            typedValue
        }));
    }, [
        dispatch
    ]);
    return {
        onUserInput
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OA": () => (/* binding */ useMintActionHandlers),
/* harmony export */   "OY": () => (/* binding */ useMintState),
/* harmony export */   "Qw": () => (/* binding */ useDerivedMintInfo),
/* harmony export */   "eM": () => (/* binding */ useZapIn)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92794);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6429);
/* harmony import */ var hooks_Trades__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55643);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74860);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5369);
/* harmony import */ var hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82055);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65726);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30433);
/* harmony import */ var hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34508);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72135);
/* harmony import */ var utils_exchange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23732);
/* harmony import */ var _pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94396);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9270);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36204);
/* harmony import */ var _wallet_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33472);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_Trades__WEBPACK_IMPORTED_MODULE_6__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_8__, hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_12__, state_user_hooks__WEBPACK_IMPORTED_MODULE_15__, utils_exchange__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_18__, _index__WEBPACK_IMPORTED_MODULE_19__, _wallet_hooks__WEBPACK_IMPORTED_MODULE_20__]);
([hooks_Trades__WEBPACK_IMPORTED_MODULE_6__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_8__, hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_12__, state_user_hooks__WEBPACK_IMPORTED_MODULE_15__, utils_exchange__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_18__, _index__WEBPACK_IMPORTED_MODULE_19__, _wallet_hooks__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















function useMintState() {
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.mint);
}
function useMintActionHandlers(noLiquidity) {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_19__/* .useAppDispatch */ .TL)();
    const onFieldAInput = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((typedValue)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_21__/* .typeInput */ .LC)({
            field: _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A,
            typedValue,
            noLiquidity: noLiquidity === true
        }));
    }, [
        dispatch,
        noLiquidity
    ]);
    const onFieldBInput = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((typedValue)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_21__/* .typeInput */ .LC)({
            field: _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B,
            typedValue,
            noLiquidity: noLiquidity === true
        }));
    }, [
        dispatch,
        noLiquidity
    ]);
    return {
        onFieldAInput,
        onFieldBInput
    };
}
function useDerivedMintInfo(currencyA, currencyB) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_18__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { independentField , typedValue , otherTypedValue  } = useMintState();
    const dependentField = independentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A;
    // tokens
    const currencies = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>({
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyA ?? undefined,
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyB ?? undefined
        }), [
        currencyA,
        currencyB
    ]);
    // pair
    const [pairState, pair] = (0,hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__/* .usePair */ .yX)(currencies[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A], currencies[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]);
    const totalSupply = (0,hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(pair?.liquidityToken);
    const noLiquidity = pairState === hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__/* .PairState.NOT_EXISTS */ ._G.NOT_EXISTS || Boolean(totalSupply && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.equal(totalSupply.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__/* .BIG_INT_ZERO */ .iV)) || Boolean(pairState === hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__/* .PairState.EXISTS */ ._G.EXISTS && pair && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.equal(pair.reserve0.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__/* .BIG_INT_ZERO */ .iV) && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.equal(pair.reserve1.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_4__/* .BIG_INT_ZERO */ .iV));
    // balances
    const balances = (0,_wallet_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useCurrencyBalances */ .K5)(account ?? undefined, [
        currencies[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A],
        currencies[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B], 
    ]);
    const currencyBalances = {
        [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: balances[0],
        [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: balances[1]
    };
    // amounts
    const independentAmount = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(typedValue, currencies[independentField]);
    const dependentAmount = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (noLiquidity) {
            if (otherTypedValue && currencies[dependentField]) {
                return (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(otherTypedValue, currencies[dependentField]);
            }
            return undefined;
        }
        if (independentAmount) {
            // we wrap the currencies just to get the price in terms of the other token
            const wrappedIndependentAmount = independentAmount?.wrapped;
            const [tokenA, tokenB] = [
                currencyA?.wrapped,
                currencyB?.wrapped
            ];
            if (tokenA && tokenB && wrappedIndependentAmount && pair) {
                const dependentCurrency = dependentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B ? currencyB : currencyA;
                const dependentTokenAmount = dependentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B ? pair.priceOf(tokenA).quote(wrappedIndependentAmount) : pair.priceOf(tokenB).quote(wrappedIndependentAmount);
                return dependentCurrency?.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(dependentCurrency, dependentTokenAmount.quotient) : dependentTokenAmount;
            }
            return undefined;
        }
        return undefined;
    }, [
        noLiquidity,
        otherTypedValue,
        currencies,
        dependentField,
        independentAmount,
        currencyA,
        currencyB,
        pair
    ]);
    const parsedAmounts = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>({
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: independentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? independentAmount : dependentAmount,
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: independentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? dependentAmount : independentAmount
        }), [
        dependentAmount,
        independentAmount,
        independentField
    ]);
    const price = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (noLiquidity) {
            const { [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyAAmount , [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyBAmount  } = parsedAmounts;
            if (currencyAAmount && currencyBAmount) {
                return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.Price(currencyAAmount.currency, currencyBAmount.currency, currencyAAmount.quotient, currencyBAmount.quotient);
            }
            return undefined;
        }
        const wrappedCurrencyA = currencyA?.wrapped;
        return pair && wrappedCurrencyA ? pair.priceOf(wrappedCurrencyA) : undefined;
    }, [
        currencyA,
        noLiquidity,
        pair,
        parsedAmounts
    ]);
    // liquidity minted
    const liquidityMinted = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        const { [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyAAmount , [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyBAmount  } = parsedAmounts;
        const [tokenAmountA, tokenAmountB] = [
            currencyAAmount?.wrapped,
            currencyBAmount?.wrapped
        ];
        if (pair && totalSupply && tokenAmountA && tokenAmountB) {
            try {
                return pair.getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB);
            } catch (error) {
                console.error(error);
                return undefined;
            }
        }
        return undefined;
    }, [
        parsedAmounts,
        pair,
        totalSupply
    ]);
    const poolTokenPercentage = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (liquidityMinted && totalSupply) {
            return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.Percent(liquidityMinted.quotient, totalSupply.add(liquidityMinted).quotient);
        }
        return undefined;
    }, [
        liquidityMinted,
        totalSupply
    ]);
    let error;
    let addError;
    if (!account) {
        error = t("Connect Wallet");
    }
    if (pairState === hooks_usePairs__WEBPACK_IMPORTED_MODULE_9__/* .PairState.INVALID */ ._G.INVALID) {
        error = error ?? t("Choose a valid pair");
    }
    const { [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyAAmount , [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyBAmount  } = parsedAmounts;
    if (currencyAAmount && currencyBAmount && currencyBalances?.[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.equalTo(0) && currencyBalances?.[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.equalTo(0)) {
        error = error ?? t("No token balance");
    }
    if (!parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] || !parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]) {
        addError = t("Enter an amount");
    }
    if (currencyAAmount && currencyBalances?.[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.lessThan(currencyAAmount)) {
        addError = t("Insufficient %symbol% balance", {
            symbol: currencies[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol
        });
    }
    if (currencyBAmount && currencyBalances?.[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.lessThan(currencyBAmount)) {
        addError = t("Insufficient %symbol% balance", {
            symbol: currencies[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol
        });
    }
    return {
        dependentField,
        currencies,
        pair,
        pairState,
        currencyBalances,
        parsedAmounts,
        price,
        noLiquidity,
        liquidityMinted,
        poolTokenPercentage,
        error,
        addError
    };
}
const MAX_ZAP_REVERSE_RATIO = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.BigInt(50);
const getMaxZapSwapAmount = (pair, tokenZap)=>pair && tokenZap && pair.involvesToken(tokenZap) && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.divide(pair.reserveOf(tokenZap).quotient, MAX_ZAP_REVERSE_RATIO);
// simplify version to guess the zap in amount by swapInAmount from max zap reserves ratio 50
function guessMaxZappableAmount(pair, token0AmountIn, token1AmountIn) {
    if (!token1AmountIn) {
        if (token0AmountIn) {
            const maxSwapAmount = getMaxZapSwapAmount(pair, token0AmountIn.currency);
            return maxSwapAmount && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.multiply(maxSwapAmount, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.BigInt(2));
        }
        return undefined;
    }
    if (token0AmountIn && token1AmountIn) {
        const maxSwapAmount1 = getMaxZapSwapAmount(pair, token0AmountIn.currency);
        if (!maxSwapAmount1) {
            return undefined;
        }
        const [_, newPair] = pair.getInputAmount(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(token0AmountIn.currency, maxSwapAmount1));
        return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.add(maxSwapAmount1, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.divide(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.multiply(token1AmountIn.quotient, newPair.reserveOf(token0AmountIn.currency).quotient), newPair.reserveOf(token1AmountIn.currency).quotient));
    }
    return undefined;
}
// compare the gas is larger than swap in amount
function useZapInGasOverhead(inputAmount) {
    const gasPrice = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useGasPrice */ .Fh)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const requiredGas = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.formatUnits)(gasPrice ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(gasPrice).mul("500000") : "0");
    const requiredGasAsCurrencyAmount = inputAmount ? (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(requiredGas, native) : undefined;
    const inputIsBNB = inputAmount?.currency.symbol === "BNB";
    const gasCostInInputTokens = (0,hooks_Trades__WEBPACK_IMPORTED_MODULE_6__/* .useTradeExactIn */ .AU)(requiredGasAsCurrencyAmount, inputIsBNB ? null : inputAmount?.currency);
    return gasCostInInputTokens?.outputAmount?.greaterThan(inputAmount?.quotient) ?? false;
}
function useZapIn({ canZap , currencyA , currencyB , pair , currencyBalances , zapTokenCheckedA , zapTokenCheckedB , maxAmounts  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { 0: inputBlurOnce , 1: setInputBlurOnce  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const previousBlur = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_10__/* .usePreviousValue */ .zP)(inputBlurOnce);
    const { 0: triedAutoReduce , 1: setTriedAutoReduce  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const { independentField , typedValue  } = useMintState();
    const dependentField = independentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A;
    const currencies = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>({
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyA ?? undefined,
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyB ?? undefined
        }), [
        currencyA,
        currencyB
    ]);
    const independentAmount = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(typedValue, currencies[independentField]);
    const _dependentAmount = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (!canZap) {
            return undefined;
        }
        if (independentAmount) {
            const wrappedIndependentAmount = independentAmount?.wrapped;
            const [tokenA, tokenB] = [
                currencyA?.wrapped,
                currencyB?.wrapped
            ];
            if (tokenA && tokenB && wrappedIndependentAmount && pair) {
                const dependentCurrency = dependentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B ? currencyB : currencyA;
                const dependentTokenAmount = dependentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B ? pair.priceOf(tokenA).quote(wrappedIndependentAmount) : pair.priceOf(tokenB).quote(wrappedIndependentAmount);
                return dependentCurrency.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(dependentCurrency, dependentTokenAmount.quotient) : dependentTokenAmount;
            }
            return undefined;
        }
        return undefined;
    }, [
        canZap,
        currencyA,
        currencyB,
        dependentField,
        independentAmount,
        pair
    ]);
    const isDependentAmountGreaterThanMaxAmount = maxAmounts[dependentField] && _dependentAmount && _dependentAmount?.greaterThan(maxAmounts[dependentField]);
    // amounts
    const dependentAmount = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        return isDependentAmountGreaterThanMaxAmount ? maxAmounts[dependentField] : _dependentAmount;
    }, [
        isDependentAmountGreaterThanMaxAmount,
        maxAmounts,
        dependentField,
        _dependentAmount
    ]);
    const parsedAmounts = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>({
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: !zapTokenCheckedA ? undefined : independentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? independentAmount : dependentAmount,
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: !zapTokenCheckedB ? undefined : independentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? dependentAmount : independentAmount
        }), [
        dependentAmount,
        independentAmount,
        independentField,
        zapTokenCheckedA,
        zapTokenCheckedB
    ]);
    const wrappedParsedAmounts = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>({
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.wrapped,
            [_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.wrapped
        }), [
        parsedAmounts
    ]);
    const zapContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useZapContract */ .n9)();
    const rebalancing = !!zapTokenCheckedA && !!zapTokenCheckedB && !!parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] && !!parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B];
    const singleTokenToZapField = !rebalancing && zapTokenCheckedB && !!parsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B] ? _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A;
    const singleTokenToZapAmount = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>wrappedParsedAmounts[singleTokenToZapField], [
        singleTokenToZapField,
        wrappedParsedAmounts
    ]);
    const noNeedZap = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (!rebalancing) {
            return false;
        }
        if (!wrappedParsedAmounts[independentField] || !wrappedParsedAmounts[dependentField]) {
            return undefined;
        }
        if (!isDependentAmountGreaterThanMaxAmount) {
            return true;
        }
        const [tokenA, tokenB] = [
            currencyA?.wrapped,
            currencyB?.wrapped
        ];
        if (tokenA && tokenB && wrappedParsedAmounts[independentField] && pair) {
            return wrappedParsedAmounts[dependentField].equalTo(dependentField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B ? pair.priceOf(tokenA).quote(wrappedParsedAmounts[independentField]) : pair.priceOf(tokenB).quote(wrappedParsedAmounts[independentField]));
        }
        return undefined;
    }, [
        currencyA,
        currencyB,
        dependentField,
        independentField,
        isDependentAmountGreaterThanMaxAmount,
        pair,
        rebalancing,
        wrappedParsedAmounts, 
    ]);
    const singleZapEstimate = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__/* .useSWRContract */ .Av)(canZap && !noNeedZap && zapContract && singleTokenToZapAmount && singleTokenToZapAmount?.currency && pair && !rebalancing && {
        contract: zapContract,
        methodName: "estimateZapInSwap",
        params: [
            singleTokenToZapAmount.currency.address,
            singleTokenToZapAmount.quotient.toString(),
            pair.liquidityToken.address, 
        ]
    }, {
        onError (err) {
            console.error(err);
        }
    });
    const rebalancingZapEstimate = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__/* .useSWRContract */ .Av)(canZap && zapContract && !noNeedZap && wrappedParsedAmounts && wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] && wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B] && pair && rebalancing && {
        contract: zapContract,
        methodName: "estimateZapInRebalancingSwap",
        params: [
            wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].currency.address,
            wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].currency.address,
            wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].quotient.toString(),
            wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.quotient?.toString(),
            pair.liquidityToken.address, 
        ]
    }, {
        onError (err) {
            console.error(err);
        }
    });
    const zapInEstimated = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>(rebalancingZapEstimate?.data || singleZapEstimate?.data) && {
            swapAmountIn: rebalancing ? rebalancingZapEstimate.data?.swapAmountIn : singleZapEstimate.data?.swapAmountIn,
            swapAmountOut: rebalancing ? rebalancingZapEstimate.data?.swapAmountOut : singleZapEstimate.data?.swapAmountOut,
            isToken0Sold: rebalancing ? rebalancingZapEstimate.data?.sellToken0 : singleZapEstimate.data?.swapTokenOut === singleTokenToZapAmount?.currency.address
        }, [
        rebalancing,
        rebalancingZapEstimate.data,
        singleZapEstimate.data,
        singleTokenToZapAmount?.currency.address
    ]);
    const rebalancingSellToken0 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (rebalancingZapEstimate.data) {
            return rebalancingZapEstimate.data.sellToken0;
        }
        if (!pair || !wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] || !wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]) {
            return undefined;
        }
        const token0toZap = pair.token0.equals(wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].currency);
        if (token0toZap) {
            return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.greaterThan(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.multiply(wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].quotient, pair.reserve1.quotient), _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.multiply(wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].quotient, pair.reserve0.quotient));
        }
        return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.greaterThan(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.multiply(wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B].quotient, pair.reserve0.quotient), _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.multiply(wrappedParsedAmounts[_actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A].quotient, pair.reserve1.quotient));
    }, [
        pair,
        rebalancingZapEstimate.data,
        wrappedParsedAmounts
    ]);
    const swapTokenField = !rebalancing ? singleTokenToZapField : rebalancingSellToken0 ? _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A : _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B;
    const swapOutTokenField = swapTokenField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A;
    const swapTokens = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>({
            [swapTokenField]: currencies[swapTokenField]?.wrapped,
            [swapOutTokenField]: currencies[swapOutTokenField]?.wrapped
        }), [
        currencies,
        swapOutTokenField,
        swapTokenField
    ]);
    const zapInEstimatedError = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>rebalancing ? rebalancingZapEstimate.error : singleZapEstimate.error, [
        rebalancing,
        rebalancingZapEstimate.error,
        singleZapEstimate.error
    ]);
    const zapInEstimatedStatus = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>rebalancing ? rebalancingZapEstimate.status : singleZapEstimate.status, [
        rebalancing,
        rebalancingZapEstimate.status,
        singleZapEstimate.status
    ]);
    const priceImpact = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (!zapInEstimated) {
            return undefined;
        }
        const tokenAmountIn = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(swapTokens[swapTokenField], zapInEstimated.swapAmountIn.toString());
        const tokenAmountOut = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(swapTokens[swapOutTokenField], zapInEstimated.swapAmountOut.toString());
        const midPrice = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.Price(swapTokens[swapTokenField], swapTokens[swapOutTokenField], pair.token0.equals(swapTokens[swapTokenField]) ? pair.reserve0.quotient : pair.reserve1.quotient, pair.token0.equals(swapTokens[swapTokenField]) ? pair.reserve1.quotient : pair.reserve0.quotient);
        return (0,_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.computePriceImpact)(midPrice, tokenAmountIn, tokenAmountOut);
    }, [
        pair,
        swapOutTokenField,
        swapTokenField,
        swapTokens,
        zapInEstimated
    ]);
    const overLimitZapRatio = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (!zapInEstimated) {
            return false;
        }
        return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.divide(pair.reserveOf(swapTokens[swapTokenField]).quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.BigInt(zapInEstimated.swapAmountIn.toString())), MAX_ZAP_REVERSE_RATIO);
    }, [
        pair,
        swapTokens,
        zapInEstimated,
        swapTokenField
    ]);
    const priceSeverity = overLimitZapRatio || zapInEstimatedError ? 4 : priceImpact ? (0,utils_exchange__WEBPACK_IMPORTED_MODULE_16__/* .warningSeverity */ .oX)(priceImpact) : 0;
    const { onFieldAInput , onFieldBInput  } = useMintActionHandlers(false);
    const maxZappableAmount = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>guessMaxZappableAmount(pair, wrappedParsedAmounts[swapTokenField], rebalancing ? wrappedParsedAmounts[swapOutTokenField] : undefined), [
        pair,
        wrappedParsedAmounts,
        swapTokenField,
        rebalancing,
        swapOutTokenField
    ]);
    const convertToMaxZappable = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(()=>{
        if (maxZappableAmount) {
            if (maxAmounts[swapTokenField]) {
                const formatInput = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.formatUnits)(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.greaterThan(maxAmounts[swapTokenField].quotient, maxZappableAmount) ? maxZappableAmount.toString() : maxAmounts[swapTokenField].quotient.toString(), maxAmounts[swapTokenField]?.currency.decimals);
                if (swapTokenField === _actions__WEBPACK_IMPORTED_MODULE_21__/* .Field.CURRENCY_A */ .gN.CURRENCY_A) {
                    onFieldAInput(formatInput);
                } else {
                    onFieldBInput(formatInput);
                }
            }
        }
    }, [
        maxAmounts,
        maxZappableAmount,
        onFieldAInput,
        onFieldBInput,
        swapTokenField
    ]);
    const totalSupply = (0,hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(pair?.liquidityToken);
    // liquidity minted
    const liquidityMinted = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (!pair || !swapTokens[swapTokenField] || !swapTokens[swapOutTokenField] || !zapInEstimated?.swapAmountIn || !zapInEstimated?.swapAmountOut || !wrappedParsedAmounts[swapTokenField]) {
            return undefined;
        }
        if (pair && totalSupply) {
            try {
                // calc the tokenA amount after swap
                const zappedTokenAmountA = wrappedParsedAmounts[swapTokenField].greaterThan(zapInEstimated.swapAmountIn.toString()) ? wrappedParsedAmounts[swapTokenField].subtract(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(swapTokens[swapTokenField], zapInEstimated.swapAmountIn.toString())) : wrappedParsedAmounts[swapTokenField];
                let zappedTokenAmountB = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(swapTokens[swapOutTokenField], zapInEstimated.swapAmountOut.toString());
                if (wrappedParsedAmounts[swapOutTokenField]) {
                    zappedTokenAmountB = zappedTokenAmountB.add(wrappedParsedAmounts[swapOutTokenField]);
                }
                const lpMinted = pair.getLiquidityMinted(totalSupply, zappedTokenAmountA, zappedTokenAmountB);
                return lpMinted;
            } catch (error) {
                console.error(error);
                return undefined;
            }
        }
        return undefined;
    }, [
        pair,
        swapTokens,
        swapTokenField,
        swapOutTokenField,
        zapInEstimated?.swapAmountIn,
        zapInEstimated?.swapAmountOut,
        wrappedParsedAmounts,
        totalSupply, 
    ]);
    const swapTokenAmountTooLow = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>wrappedParsedAmounts[swapTokenField] && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(wrappedParsedAmounts[swapTokenField].quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.MINIMUM_LIQUIDITY), [
        swapTokenField,
        wrappedParsedAmounts
    ]);
    const swapOutAmountTooLow = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>wrappedParsedAmounts[swapOutTokenField] && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.lessThan(wrappedParsedAmounts[swapOutTokenField].quotient, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.MINIMUM_LIQUIDITY), [
        swapOutTokenField,
        wrappedParsedAmounts
    ]);
    const poolTokenPercentage = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        if (liquidityMinted && totalSupply) {
            return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.Percent(liquidityMinted.quotient, totalSupply.add(liquidityMinted).quotient);
        }
        return undefined;
    }, [
        liquidityMinted,
        totalSupply
    ]);
    const gasOverhead = useZapInGasOverhead((0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>zapInEstimated ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.CurrencyAmount.fromRawAmount(swapTokens[swapTokenField], zapInEstimated.swapAmountIn.toString()) : null, [
        swapTokenField,
        swapTokens,
        zapInEstimated
    ]));
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        if (!triedAutoReduce && parsedAmounts[swapTokenField] && maxZappableAmount && !previousBlur && inputBlurOnce && !rebalancing) {
            if (_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.JSBI.greaterThan(parsedAmounts[swapTokenField].quotient, maxZappableAmount)) {
                convertToMaxZappable();
                setTriedAutoReduce(true);
            }
        }
    }, [
        convertToMaxZappable,
        inputBlurOnce,
        maxZappableAmount,
        parsedAmounts,
        previousBlur,
        rebalancing,
        singleTokenToZapAmount,
        swapTokenField,
        triedAutoReduce, 
    ]);
    const onInputBlurOnce = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(()=>{
        setInputBlurOnce(true);
    }, []);
    let error;
    if (zapInEstimatedError) {
        error = t("Cannot estimate zap amount");
    }
    if (swapTokenAmountTooLow || rebalancing && swapOutAmountTooLow) {
        error = t("Zap in amount too low");
    }
    if (wrappedParsedAmounts[swapTokenField] && currencyBalances[swapTokenField]?.lessThan(wrappedParsedAmounts[swapTokenField])) {
        error = t("Insufficient %token% balance", {
            token: wrappedParsedAmounts[swapTokenField]?.currency.symbol ?? ""
        });
    }
    if (wrappedParsedAmounts[swapOutTokenField] && rebalancing && currencyBalances[swapOutTokenField]?.lessThan(wrappedParsedAmounts[swapOutTokenField])) {
        error = t("Insufficient %token% balance", {
            token: wrappedParsedAmounts[swapOutTokenField]?.currency.symbol ?? ""
        });
    }
    return {
        zapInEstimating: zapInEstimatedStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .FetchStatus.Fetched */ .iF.Fetched,
        zapInEstimatedError,
        zapInEstimated,
        error,
        liquidityMinted,
        poolTokenPercentage,
        parsedAmounts,
        swapTokenField,
        swapOutTokenField,
        priceSeverity,
        convertToMaxZappable,
        rebalancing,
        noNeedZap,
        gasOverhead,
        isDependentAmountGreaterThanMaxAmount,
        onInputBlurOnce
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useStableLPDerivedMintInfo),
/* harmony export */   "o": () => (/* binding */ useStablePair)
/* harmony export */ });
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92794);
/* harmony import */ var hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82055);
/* harmony import */ var hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34508);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94396);
/* harmony import */ var state_mint_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84709);
/* harmony import */ var state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33472);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11824);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableTradeExactIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20247);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15941);
/* harmony import */ var state_mint_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39113);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9270);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_4__, state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__, views_Swap_StableSwap_hooks_useStableTradeExactIn__WEBPACK_IMPORTED_MODULE_10__, swr__WEBPACK_IMPORTED_MODULE_11__, state_mint_hooks__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_13__]);
([hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__, hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_4__, state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__, views_Swap_StableSwap_hooks_useStableTradeExactIn__WEBPACK_IMPORTED_MODULE_10__, swr__WEBPACK_IMPORTED_MODULE_11__, state_mint_hooks__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function useStablePair(currencyA, currencyB) {
    const { stableSwapConfig , stableSwapContract  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__/* .StableConfigContext */ .UA);
    const currencyAAmountQuotient = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("1", currencyA)?.quotient;
    const { data: estimatedToken1Amount  } = (0,views_Swap_StableSwap_hooks_useStableTradeExactIn__WEBPACK_IMPORTED_MODULE_10__/* .useEstimatedAmount */ .GS)({
        estimatedCurrency: currencyB,
        quotient: currencyAAmountQuotient?.toString(),
        stableSwapContract,
        stableSwapConfig
    });
    const pair = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        const isPriceValid = currencyAAmountQuotient && estimatedToken1Amount;
        const ZERO_AMOUNT = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.CurrencyAmount.fromRawAmount(currencyB, "0");
        const token0Price = isPriceValid ? new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.Price(currencyA, currencyB, currencyAAmountQuotient, estimatedToken1Amount.quotient) : ZERO_AMOUNT;
        return {
            liquidityToken: stableSwapConfig?.liquidityToken || null,
            tokenAmounts: [],
            token0: currencyA,
            token1: currencyB,
            priceOf: (token)=>isPriceValid ? token?.address === currencyA?.address ? token0Price : token0Price.invert() : ZERO_AMOUNT,
            token0Price: ()=>token0Price,
            token1Price: ()=>token0Price.invert(),
            // NOTE: Stable Tokens don't need this
            reserve1: ZERO_AMOUNT,
            reserve0: ZERO_AMOUNT,
            getLiquidityValue: ()=>ZERO_AMOUNT
        };
    }, [
        stableSwapConfig?.liquidityToken,
        currencyA,
        currencyB,
        currencyAAmountQuotient,
        estimatedToken1Amount
    ]);
    if (!stableSwapConfig) {
        return {
            pairState: hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__/* .PairState.NOT_EXISTS */ ._G.NOT_EXISTS,
            pair: undefined
        };
    }
    return {
        pairState: hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__/* .PairState.EXISTS */ ._G.EXISTS,
        pair
    };
}
function useMintedStabelLP({ stableSwapInfoContract , stableSwapConfig , stableSwapAddress , currencyInput , currencyInputAmount , currencyOutputAmount ,  }) {
    const quotient0Str = currencyInputAmount?.toString();
    const quotient1Str = currencyOutputAmount?.toString();
    const isValid = !!stableSwapAddress && !!quotient0Str && !!quotient1Str;
    return (0,swr__WEBPACK_IMPORTED_MODULE_11__["default"])(isValid ? [
        "get_add_liquidity_mint_amount",
        stableSwapAddress,
        quotient0Str,
        quotient1Str
    ] : null, async ()=>{
        const isToken0 = stableSwapConfig?.token0?.address === currencyInput?.address;
        const amounts = isToken0 ? [
            quotient0Str,
            quotient1Str
        ] : [
            quotient1Str,
            quotient0Str
        ];
        return stableSwapInfoContract.get_add_liquidity_mint_amount(stableSwapAddress, amounts);
    });
}
function useStableLPDerivedMintInfo(currencyA, currencyB) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_13__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    const { independentField , typedValue , otherTypedValue  } = (0,state_mint_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useMintState */ .OY)();
    const dependentField = independentField === state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B : state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A;
    // tokens
    const currencies = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>({
            [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyA ?? undefined,
            [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyB ?? undefined
        }), [
        currencyA,
        currencyB
    ]);
    // pair
    const { pairState , pair  } = useStablePair(currencyA?.wrapped, currencyB?.wrapped);
    const totalSupply = (0,hooks_useTotalSupply__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(pair?.liquidityToken);
    const noLiquidity = pairState === hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__/* .PairState.NOT_EXISTS */ ._G.NOT_EXISTS || Boolean(totalSupply && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.equal(totalSupply.quotient, config_constants_exchange__WEBPACK_IMPORTED_MODULE_2__/* .BIG_INT_ZERO */ .iV));
    // balances
    const balances = (0,state_wallet_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrencyBalances */ .K5)(account ?? undefined, [
        currencyA,
        currencyB
    ]);
    const currencyBalances = {
        [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: balances[0],
        [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: balances[1]
    };
    // amounts
    const independentAmount = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(typedValue, currencies[independentField]);
    const dependentAmount = (0,_pancakeswap_utils_tryParseAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(otherTypedValue, currencies[dependentField]);
    const parsedAmounts = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>({
            [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: independentField === state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? independentAmount : dependentAmount,
            [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: independentField === state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A ? dependentAmount : independentAmount
        }), [
        dependentAmount,
        independentAmount,
        independentField
    ]);
    const { stableSwapConfig , stableSwapContract , stableSwapInfoContract  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__/* .StableConfigContext */ .UA);
    const { [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]: currencyAAmount , [state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]: currencyBAmount  } = parsedAmounts;
    const currencyAAmountQuotient = currencyAAmount?.quotient;
    const currencyBAmountQuotient = currencyBAmount?.quotient;
    const { data: estimatedOutputAmount  } = (0,views_Swap_StableSwap_hooks_useStableTradeExactIn__WEBPACK_IMPORTED_MODULE_10__/* .useEstimatedAmount */ .GS)({
        estimatedCurrency: currencyAAmountQuotient ? currencyB : currencyA,
        quotient: currencyAAmountQuotient ? currencyAAmountQuotient?.toString() : currencyBAmountQuotient?.toString(),
        stableSwapConfig,
        stableSwapContract
    });
    const price = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        const isEstimatedOutputAmountZero = estimatedOutputAmount?.equalTo(0);
        if ((currencyAAmountQuotient || currencyBAmountQuotient) && estimatedOutputAmount && !isEstimatedOutputAmountZero) {
            return currencyAAmountQuotient ? new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.Price(currencyA, currencyB, currencyAAmountQuotient, estimatedOutputAmount.quotient) : new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.Price(currencyA, currencyB, estimatedOutputAmount.quotient, currencyBAmountQuotient);
        }
        return undefined;
    }, [
        estimatedOutputAmount,
        currencyA,
        currencyB,
        currencyBAmountQuotient,
        currencyAAmountQuotient
    ]);
    const { data: lpMinted  } = useMintedStabelLP({
        stableSwapAddress: stableSwapConfig?.stableSwapAddress,
        stableSwapInfoContract,
        stableSwapConfig,
        currencyInput: currencyAAmountQuotient ? currencyA : currencyB,
        currencyInputAmount: currencyAAmountQuotient || currencyBAmountQuotient,
        currencyOutputAmount: currencyAAmountQuotient ? currencyBAmountQuotient : currencyAAmountQuotient
    });
    // liquidity minted
    const liquidityMinted = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (pair?.liquidityToken && totalSupply && lpMinted) {
            try {
                return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.CurrencyAmount.fromRawAmount(pair?.liquidityToken, lpMinted?.toString());
            } catch (error) {
                console.error(error);
                return undefined;
            }
        }
        return undefined;
    }, [
        pair?.liquidityToken,
        totalSupply,
        lpMinted
    ]);
    const poolTokenPercentage = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (liquidityMinted && totalSupply) {
            return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(liquidityMinted.quotient, totalSupply.add(liquidityMinted).quotient);
        }
        return undefined;
    }, [
        liquidityMinted,
        totalSupply
    ]);
    let error;
    let addError;
    if (!account) {
        error = t("Connect Wallet");
    }
    if (pairState === hooks_usePairs__WEBPACK_IMPORTED_MODULE_3__/* .PairState.INVALID */ ._G.INVALID) {
        error = error ?? t("Choose a valid pair");
    }
    if (currencyAAmount && currencyBAmount && currencyBalances?.[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.equalTo(0) && currencyBalances?.[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.equalTo(0)) {
        error = error ?? t("No token balance");
    }
    if (!parsedAmounts[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A] || !parsedAmounts[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]) {
        addError = t("Enter an amount");
    }
    if (currencyAAmount && currencyBalances?.[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.lessThan(currencyAAmount)) {
        addError = t("Insufficient %symbol% balance", {
            symbol: currencies[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_A */ .gN.CURRENCY_A]?.symbol
        });
    }
    if (currencyBAmount && currencyBalances?.[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.lessThan(currencyBAmount)) {
        addError = t("Insufficient %symbol% balance", {
            symbol: currencies[state_mint_actions__WEBPACK_IMPORTED_MODULE_7__/* .Field.CURRENCY_B */ .gN.CURRENCY_B]?.symbol
        });
    }
    return {
        dependentField,
        currencies,
        pair,
        pairState,
        currencyBalances,
        parsedAmounts,
        price,
        noLiquidity,
        liquidityMinted,
        poolTokenPercentage,
        error,
        addError
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useStableDerivedBurnInfo),
/* harmony export */   "N": () => (/* binding */ useGetRemovedTokenAmounts)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var state_burn_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80194);
/* harmony import */ var state_wallet_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33472);
/* harmony import */ var state_burn_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12847);
/* harmony import */ var views_AddLiquidity_AddStableLiquidity_hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70343);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11824);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15941);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9270);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_wallet_hooks__WEBPACK_IMPORTED_MODULE_3__, state_burn_hooks__WEBPACK_IMPORTED_MODULE_4__, views_AddLiquidity_AddStableLiquidity_hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_5__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__]);
([state_wallet_hooks__WEBPACK_IMPORTED_MODULE_3__, state_burn_hooks__WEBPACK_IMPORTED_MODULE_4__, views_AddLiquidity_AddStableLiquidity_hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_5__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function useGetRemovedTokenAmounts({ lpAmount  }) {
    const { stableSwapInfoContract , stableSwapConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__/* .StableConfigContext */ .UA);
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(!lpAmount ? null : [
        "stableSwapInfoContract",
        "calc_coins_amount",
        stableSwapConfig?.stableSwapAddress,
        lpAmount
    ], async ()=>{
        return stableSwapInfoContract.calc_coins_amount(stableSwapConfig?.stableSwapAddress, lpAmount);
    });
    if (!Array.isArray(data)) return [];
    const tokenAAmount = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(stableSwapConfig?.token0, data[0].toString());
    const tokenBAmount = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(stableSwapConfig?.token1, data[1].toString());
    return [
        tokenAAmount,
        tokenBAmount
    ];
}
function useStableDerivedBurnInfo(currencyA, currencyB) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3React */ .Ge)();
    const { independentField , typedValue  } = (0,state_burn_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useBurnState */ .Xi)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    // pair + totalsupply
    const { pair  } = (0,views_AddLiquidity_AddStableLiquidity_hooks_useStableLPDerivedMintInfo__WEBPACK_IMPORTED_MODULE_5__/* .useStablePair */ .o)(currencyA?.wrapped, currencyB?.wrapped);
    // balances
    const relevantTokenBalances = (0,state_wallet_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useTokenBalances */ .Z)(account ?? undefined, [
        pair?.liquidityToken
    ]);
    const userLiquidity = relevantTokenBalances?.[pair?.liquidityToken?.address ?? ""];
    let percentToRemove = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent("0", "100");
    // user specified a %
    if (independentField === state_burn_actions__WEBPACK_IMPORTED_MODULE_2__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT) {
        percentToRemove = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(typedValue, "100");
    }
    const liquidityToRemove = userLiquidity && percentToRemove && percentToRemove.greaterThan("0") ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(userLiquidity.currency, percentToRemove.multiply(userLiquidity.quotient).quotient) : undefined;
    const [amountA, amountB] = useGetRemovedTokenAmounts({
        lpAmount: liquidityToRemove?.quotient?.toString()
    });
    const parsedAmounts = {
        [state_burn_actions__WEBPACK_IMPORTED_MODULE_2__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT]: percentToRemove,
        [state_burn_actions__WEBPACK_IMPORTED_MODULE_2__/* .Field.LIQUIDITY */ .g.LIQUIDITY]: liquidityToRemove,
        [state_burn_actions__WEBPACK_IMPORTED_MODULE_2__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: amountA,
        [state_burn_actions__WEBPACK_IMPORTED_MODULE_2__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: amountB
    };
    let error;
    if (!account) {
        error = t("Connect Wallet");
    }
    if (!parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_2__/* .Field.LIQUIDITY */ .g.LIQUIDITY]) {
        error = error ?? t("Enter an amount");
    }
    return {
        pair,
        parsedAmounts,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UA": () => (/* binding */ StableConfigContext),
/* harmony export */   "ZP": () => (/* binding */ useStableConfig),
/* harmony export */   "f8": () => (/* binding */ useLPTokensWithBalanceByAccount),
/* harmony export */   "rS": () => (/* binding */ useStableFarms)
/* harmony export */ });
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74860);
/* harmony import */ var config_abi_stableSwap_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24722);
/* harmony import */ var config_abi_infoStableSwap_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98644);
/* harmony import */ var config_abi_stableLP_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32724);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33472);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65342);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79847);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65498);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3256);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_0__, state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_0__, state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function useStableFarms() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { data: stableFarms = []  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])(chainId && [
        "stable-farms",
        chainId
    ], async ()=>{
        const farms = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_10__.getStableConfig)(chainId);
        return farms.map(({ token , quoteToken , lpAddress , ...rest })=>({
                ...rest,
                liquidityToken: new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.ERC20Token(chainId, lpAddress, 18, "Stable-LP", "Pancake StableSwap LPs"),
                token0: (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .deserializeToken */ .iG)(token),
                token1: (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_9__/* .deserializeToken */ .iG)(quoteToken)
            }));
    });
    return stableFarms;
}
function useFindStablePair({ tokenA , tokenB  }) {
    const stableFarms = useStableFarms();
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>stableFarms.find((stablePair)=>{
            return tokenA && tokenB && (stablePair?.token0?.equals(tokenA) && stablePair?.token1?.equals(tokenB) || stablePair?.token1?.equals(tokenA) && stablePair?.token0?.equals(tokenB));
        }), [
        tokenA,
        tokenB,
        stableFarms
    ]);
}
function useLPTokensWithBalanceByAccount(account) {
    const lpTokens = useStableFarms();
    const [stableBalances] = (0,state_wallet_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTokenBalancesWithLoadingIndicator */ .v2)(account ?? undefined, lpTokens.map(({ liquidityToken  })=>liquidityToken));
    const lpTokensWithBalance = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>lpTokens.filter(({ liquidityToken  })=>stableBalances[liquidityToken.address]?.greaterThan("0")), [
        lpTokens,
        stableBalances
    ]);
    return lpTokensWithBalance.map((lpToken)=>({
            ...lpToken,
            tokenAmounts: [],
            reserve0: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.CurrencyAmount.fromRawAmount(lpToken?.token0, "0"),
            reserve1: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.CurrencyAmount.fromRawAmount(lpToken?.token1, "0"),
            getLiquidityValue: ()=>_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.CurrencyAmount.fromRawAmount(lpToken?.token0, "0")
        }));
}
const StableConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.createContext)(null);
function useStableConfig({ tokenA , tokenB  }) {
    const stablePair = useFindStablePair({
        tokenA,
        tokenB
    });
    const stableSwapContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useContract */ .cq)(stablePair?.stableSwapAddress, config_abi_stableSwap_json__WEBPACK_IMPORTED_MODULE_1__);
    const stableSwapInfoContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useContract */ .cq)(stablePair?.infoStableSwapAddress, config_abi_infoStableSwap_json__WEBPACK_IMPORTED_MODULE_2__);
    const stableSwapLPContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useContract */ .cq)(stablePair?.liquidityToken.address, config_abi_stableLP_json__WEBPACK_IMPORTED_MODULE_3__);
    return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>({
            stableSwapConfig: stablePair,
            stableSwapContract,
            stableSwapInfoContract,
            stableSwapLPContract
        }), [
        stablePair,
        stableSwapContract,
        stableSwapInfoContract,
        stableSwapLPContract
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GS": () => (/* binding */ useEstimatedAmount),
/* harmony export */   "ZP": () => (/* binding */ useStableTradeExactIn),
/* harmony export */   "y0": () => (/* binding */ useStableTradeResponse)
/* harmony export */ });
/* unused harmony exports maximumAmountInFactory, minimumAmountOutFactory */
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
/* harmony import */ var _useStableConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_3__, _useStableConfig__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_3__, _useStableConfig__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const maximumAmountInFactory = (currencyAmountIn, slippageTolerance)=>{
    const slippageAdjustedAmountIn = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Fraction(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ONE).add(slippageTolerance).multiply(currencyAmountIn.quotient).quotient;
    return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currencyAmountIn.currency, slippageAdjustedAmountIn);
};
const minimumAmountOutFactory = (currencyAmountOut, slippageTolerance)=>{
    const slippageAdjustedAmountOut = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Fraction(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ONE).add(slippageTolerance).invert().multiply(currencyAmountOut.quotient).quotient;
    return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currencyAmountOut.currency, slippageAdjustedAmountOut);
};
function useStableTradeResponse({ currencyAmountIn , currencyAmountOut , stableSwapConfig , tradeType  }) {
    const maximumAmountIn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((slippageTolerance)=>{
        if (tradeType === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.TradeType.EXACT_INPUT) {
            return currencyAmountIn;
        }
        return currencyAmountIn ? maximumAmountInFactory(currencyAmountIn, slippageTolerance) : _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currencyAmountIn.currency, "0");
    }, [
        currencyAmountIn,
        tradeType
    ]);
    const minimumAmountOut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((slippageTolerance)=>{
        if (tradeType === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.TradeType.EXACT_OUTPUT) {
            return currencyAmountOut;
        }
        return currencyAmountOut ? minimumAmountOutFactory(currencyAmountOut, slippageTolerance) : _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currencyAmountOut.currency, "0");
    }, [
        currencyAmountOut,
        tradeType
    ]);
    const isInvalid = !currencyAmountIn || !currencyAmountOut || !stableSwapConfig || !currencyAmountIn;
    const executionPrice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (isInvalid) return null;
        return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(currencyAmountIn.currency, currencyAmountOut.currency, currencyAmountIn.quotient, currencyAmountOut.quotient);
    }, [
        isInvalid,
        currencyAmountIn,
        currencyAmountOut
    ]);
    if (isInvalid) return null;
    return {
        tradeType: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.TradeType.EXACT_INPUT,
        inputAmount: currencyAmountIn,
        outputAmount: currencyAmountOut,
        executionPrice,
        priceImpact: null,
        maximumAmountIn,
        minimumAmountOut
    };
}
function useEstimatedAmount({ estimatedCurrency , stableSwapConfig , quotient , stableSwapContract  }) {
    const deferQuotient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useDeferredValue)(quotient);
    return (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(stableSwapConfig?.stableSwapAddress && estimatedCurrency && !!deferQuotient ? [
        "swapContract",
        stableSwapConfig?.stableSwapAddress,
        deferQuotient
    ] : null, async ()=>{
        const isToken0 = stableSwapConfig?.token0?.address === estimatedCurrency?.address;
        const args = isToken0 ? [
            1,
            0,
            deferQuotient
        ] : [
            0,
            1,
            deferQuotient
        ];
        const estimatedAmount = await stableSwapContract.get_dy(...args);
        return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(estimatedCurrency, estimatedAmount);
    }, {
        use: [
            hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_1__/* .laggyMiddleware */ .XS
        ]
    });
}
/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */ function useStableTradeExactIn(currencyAmountIn, currencyOut) {
    const { stableSwapContract , stableSwapConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_useStableConfig__WEBPACK_IMPORTED_MODULE_4__/* .StableConfigContext */ .UA);
    const currencyAmountInQuotient = currencyAmountIn?.quotient?.toString();
    const { data: currencyAmountOut  } = useEstimatedAmount({
        estimatedCurrency: currencyOut,
        quotient: currencyAmountInQuotient,
        stableSwapContract,
        stableSwapConfig
    });
    return useStableTradeResponse({
        currencyAmountIn,
        currencyAmountOut,
        stableSwapConfig,
        tradeType: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.TradeType.EXACT_INPUT
    });
}

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

/***/ 12849:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const A = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-2686b0b6-0"
})``;
/**
 * temporary solution for migrating React Router to Next.js Link
 */ const NextLinkFromReactRouter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ to , replace , children , prefetch , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: to,
        replace: replace,
        passHref: true,
        prefetch: prefetch,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(A, {
            ref: ref,
            ...props,
            children: children
        })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextLinkFromReactRouter);


/***/ }),

/***/ 52142:
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
            d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 65474:
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
            d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 19193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);


const TooltipText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5b87ff15-0"
})`
  text-decoration: underline dotted;
  text-decoration-color: ${({ theme , decorationColor  })=>`${theme?.colors && decorationColor ? theme.colors[decorationColor] : theme?.colors?.textSubtle}`};
  text-underline-offset: 0.1em;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipText);


/***/ }),

/***/ 98644:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"name":"FEE_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"N_COINS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"PRECISION_MUL","outputs":[{"internalType":"uint256[2]","name":"swapPRECISION_MUL","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"RATES","outputs":[{"internalType":"uint256[2]","name":"swapRATES","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"_balances","type":"uint256[2]"}],"name":"_xp_mem","outputs":[{"internalType":"uint256[2]","name":"result","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256[2]","name":"swapBalances","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"calc_coins_amount","outputs":[{"internalType":"uint256[2]","name":"","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"_balances","type":"uint256[2]"},{"internalType":"uint256","name":"amp","type":"uint256"}],"name":"get_D_mem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"}],"name":"get_add_liquidity_fee","outputs":[{"internalType":"uint256[2]","name":"liquidityFee","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"}],"name":"get_add_liquidity_mint_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"get_exchange_fee","outputs":[{"internalType":"uint256","name":"exFee","type":"uint256"},{"internalType":"uint256","name":"exAdminFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"}],"name":"get_remove_liquidity_imbalance_fee","outputs":[{"internalType":"uint256[2]","name":"liquidityFee","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256","name":"_token_amount","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"get_remove_liquidity_one_coin_fee","outputs":[{"internalType":"uint256","name":"adminFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');

/***/ }),

/***/ 32724:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"miner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 24722:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[2]","name":"token_amounts","type":"uint256[2]"},{"indexed":false,"internalType":"uint256[2]","name":"fees","type":"uint256[2]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token_supply","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"admin_fee","type":"uint256"}],"name":"CommitNewFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"admin_fee","type":"uint256"}],"name":"NewFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old_A","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"new_A","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initial_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"future_time","type":"uint256"}],"name":"RampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[2]","name":"token_amounts","type":"uint256[2]"},{"indexed":false,"internalType":"uint256[2]","name":"fees","type":"uint256[2]"},{"indexed":false,"internalType":"uint256","name":"token_supply","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[2]","name":"token_amounts","type":"uint256[2]"},{"indexed":false,"internalType":"uint256[2]","name":"fees","type":"uint256[2]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token_supply","type":"uint256"}],"name":"RemoveLiquidityImbalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"token_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"coin_amount","type":"uint256"}],"name":"RemoveLiquidityOne","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"A","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"t","type":"uint256"}],"name":"StopRampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"sold_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bought_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"TokenExchange","type":"event"},{"inputs":[],"name":"A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADMIN_ACTIONS_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KILL_DEADLINE_DT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_ADMIN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_A_CHANGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DECIMAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_RAMP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"N_COINS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PRECISION_MUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"RATES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STABLESWAP_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"},{"internalType":"uint256","name":"min_mint_amount","type":"uint256"}],"name":"add_liquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin_actions_deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"admin_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apply_new_fee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"},{"internalType":"bool","name":"deposit","type":"bool"}],"name":"calc_token_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_token_amount","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"calc_withdraw_one_coin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"coins","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"new_fee","type":"uint256"},{"internalType":"uint256","name":"new_admin_fee","type":"uint256"}],"name":"commit_new_fee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"donate_admin_fees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"},{"internalType":"uint256","name":"min_dy","type":"uint256"}],"name":"exchange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_A_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_admin_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"get_dy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"get_dy_underlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_virtual_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initial_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initial_A_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[2]","name":"_coins","type":"address[2]"},{"internalType":"uint256","name":"_A","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_admin_fee","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"is_killed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kill_deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kill_me","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_future_A","type":"uint256"},{"internalType":"uint256","name":"_future_time","type":"uint256"}],"name":"ramp_A","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256[2]","name":"min_amounts","type":"uint256[2]"}],"name":"remove_liquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"},{"internalType":"uint256","name":"max_burn_amount","type":"uint256"}],"name":"remove_liquidity_imbalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_token_amount","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"min_amount","type":"uint256"}],"name":"remove_liquidity_one_coin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revert_new_parameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stop_rampget_A","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract PancakeStableSwapLP","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unkill_me","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw_admin_fees","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

};
;
//# sourceMappingURL=5366.js.map