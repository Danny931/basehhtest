"use strict";
exports.id = 6937;
exports.ids = [6937];
exports.modules = {

/***/ 66937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87434);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84785);
/* harmony import */ var views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80675);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_3__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__, _shared__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([state_info_hooks__WEBPACK_IMPORTED_MODULE_3__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__, _shared__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










/**
 *  Columns on different layouts
 *  5 = | # | Pool | TVL | Volume 24H | Volume 7D |
 *  4 = | # | Pool |     | Volume 24H | Volume 7D |
 *  3 = | # | Pool |     | Volume 24H |           |
 *  2 = |   | Pool |     | Volume 24H |           |
 */ const ResponsiveGrid = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-2835ea2f-0"
})`
  display: grid;
  grid-gap: 1em;
  align-items: center;
  grid-template-columns: 20px 3.5fr repeat(5, 1fr);

  padding: 0 24px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 1.5fr repeat(3, 1fr);
    & :nth-child(4),
    & :nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 20px 1.5fr repeat(1, 1fr);
    & :nth-child(4),
    & :nth-child(5),
    & :nth-child(6),
    & :nth-child(7) {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 2.5fr repeat(1, 1fr);
    > *:nth-child(1) {
      display: none;
    }
  }
`;
const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2835ea2f-1"
})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const SORT_FIELD = {
    volumeUSD: "volumeUSD",
    liquidityUSD: "liquidityUSD",
    volumeUSDWeek: "volumeUSDWeek",
    lpFees24h: "lpFees24h",
    lpApr7d: "lpApr7d"
};
const LoadingRow = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
const TableLoader = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {})
        ]
    });
const DataRow = ({ poolData , index  })=>{
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetChainName */ .qg)();
    const chainPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMultiChainPath */ .hb)();
    const stableSwapPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useStableSwapPath */ .U1)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrapper, {
        to: `/info${chainPath}/pools/${poolData.address}${stableSwapPath}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: index + 1
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_6__/* .DoubleCurrencyLogo */ .g, {
                            address0: poolData.token0.address,
                            address1: poolData.token1.address,
                            chainName: chainName
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            ml: "8px",
                            children: [
                                poolData.token0.symbol,
                                "/",
                                poolData.token1.symbol
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__/* .formatAmount */ .d)(poolData.volumeUSD)
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__/* .formatAmount */ .d)(poolData.volumeUSDWeek)
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__/* .formatAmount */ .d)(poolData.lpFees24h)
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__/* .formatAmount */ .d)(poolData.lpApr7d),
                        "%"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_5__/* .formatAmount */ .d)(poolData.liquidityUSD)
                    ]
                })
            ]
        })
    });
};
const PoolTable = ({ poolDatas , loading  })=>{
    // for sorting
    const { 0: sortField , 1: setSortField  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(SORT_FIELD.volumeUSD);
    const { 0: sortDirection , 1: setSortDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    // pagination
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: maxPage , 1: setMaxPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let extraPages = 1;
        if (poolDatas.length % config_constants_info__WEBPACK_IMPORTED_MODULE_12__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si === 0) {
            extraPages = 0;
        }
        setMaxPage(Math.floor(poolDatas.length / config_constants_info__WEBPACK_IMPORTED_MODULE_12__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si) + extraPages);
    }, [
        poolDatas
    ]);
    const sortedPools = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return poolDatas ? poolDatas.sort((a, b)=>{
            if (a && b) {
                return a[sortField] > b[sortField] ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1;
            }
            return -1;
        }).slice(config_constants_info__WEBPACK_IMPORTED_MODULE_12__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si * (page - 1), page * config_constants_info__WEBPACK_IMPORTED_MODULE_12__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si) : [];
    }, [
        page,
        poolDatas,
        sortDirection,
        sortField
    ]);
    const handleSort = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((newField)=>{
        setSortField(newField);
        setSortDirection(sortField !== newField ? true : !sortDirection);
    }, [
        sortDirection,
        sortField
    ]);
    const arrow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((field)=>{
        const directionArrow = !sortDirection ? "↑" : "↓";
        return sortField === field ? directionArrow : "";
    }, [
        sortDirection,
        sortField
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .TableWrapper */ .y6, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        children: "#"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        textTransform: "uppercase",
                        children: t("Pool")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.volumeUSD),
                        textTransform: "uppercase",
                        children: [
                            t("Volume 24H"),
                            " ",
                            arrow(SORT_FIELD.volumeUSD)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.volumeUSDWeek),
                        textTransform: "uppercase",
                        children: [
                            t("Volume 7D"),
                            " ",
                            arrow(SORT_FIELD.volumeUSDWeek)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.lpFees24h),
                        textTransform: "uppercase",
                        children: [
                            t("LP reward fees 24H"),
                            " ",
                            arrow(SORT_FIELD.lpFees24h)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.lpApr7d),
                        textTransform: "uppercase",
                        children: [
                            t("LP reward APR"),
                            " ",
                            arrow(SORT_FIELD.lpApr7d)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.liquidityUSD),
                        textTransform: "uppercase",
                        children: [
                            t("Liquidity"),
                            " ",
                            arrow(SORT_FIELD.liquidityUSD)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_7__/* .Break */ .SS, {}),
            sortedPools.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    sortedPools.map((poolData, i)=>{
                        if (poolData) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataRow, {
                                        index: (page - 1) * config_constants_info__WEBPACK_IMPORTED_MODULE_12__/* .ITEMS_PER_INFO_TABLE_PAGE */ .si + i,
                                        poolData: poolData
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_7__/* .Break */ .SS, {})
                                ]
                            }, poolData.address);
                        }
                        return null;
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_7__/* .PageButtons */ .Ob, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_7__/* .Arrow */ .Eh, {
                                onClick: ()=>{
                                    setPage(page === 1 ? page : page - 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    color: page === 1 ? "textDisabled" : "primary"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                children: t("Page %page% of %maxPage%", {
                                    page,
                                    maxPage
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_7__/* .Arrow */ .Eh, {
                                onClick: ()=>{
                                    setPage(page === maxPage ? page : page + 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    color: page === maxPage ? "textDisabled" : "primary"
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableLoader, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoolTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=6937.js.map