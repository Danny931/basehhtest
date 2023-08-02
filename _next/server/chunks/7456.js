"use strict";
exports.id = 7456;
exports.ids = [7456];
exports.modules = {

/***/ 17456:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23992);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87434);
/* harmony import */ var views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80675);
/* harmony import */ var views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2227);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84785);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_3__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_4__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_5__, _shared__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([state_info_hooks__WEBPACK_IMPORTED_MODULE_3__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_4__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_5__, _shared__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











/**
 *  Columns on different layouts
 *  6 = | # | Name | Price | Price Change | Volume 24H | TVL |
 *  5 = | # | Name | Price |              | Volume 24H | TVL |
 *  4 = | # | Name | Price |              | Volume 24H |     |
 *  2 = |   | Name |       |              | Volume 24H |     |
 *  On smallest screen Name is reduced to just symbol
 */ const ResponsiveGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-c0321ec2-0"
})`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  padding: 0 24px;

  grid-template-columns: 20px 3fr repeat(4, 1fr);

  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 2fr repeat(3, 1fr);
    & :nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 20px 2fr repeat(2, 1fr);
    & :nth-child(6) {
      display: none;
    }
  }

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
    > *:first-child {
      display: none;
    }
    > *:nth-child(3) {
      display: none;
    }
  }
`;
const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c0321ec2-1"
})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const ResponsiveLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyLogo */ .X).withConfig({
    componentId: "sc-c0321ec2-2"
})`
  @media screen and (max-width: 670px) {
    width: 16px;
    height: 16px;
  }
`;
const TableLoader = ()=>{
    const loadingRow = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
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
const DataRow = ({ tokenData , index  })=>{
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetChainName */ .qg)();
    const chianPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMultiChainPath */ .hb)();
    const stableSwapPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useStableSwapPath */ .U1)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrapper, {
        to: `/info${chianPath}/tokens/${tokenData.address}${stableSwapPath}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        children: index + 1
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResponsiveLogo, {
                            address: tokenData.address,
                            chainName: chainName
                        }),
                        (isXs || isSm) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            ml: "8px",
                            children: tokenData.symbol
                        }),
                        !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            marginLeft: "10px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    children: tokenData.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    ml: "8px",
                                    children: [
                                        "(",
                                        tokenData.symbol,
                                        ")"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    fontWeight: 400,
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.priceUSD, {
                            notation: "standard"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    fontWeight: 400,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        value: tokenData.priceUSDChange,
                        fontWeight: 400
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    fontWeight: 400,
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.volumeUSD)
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    fontWeight: 400,
                    children: [
                        "$",
                        (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.liquidityUSD)
                    ]
                })
            ]
        })
    });
};
const SORT_FIELD = {
    name: "name",
    volumeUSD: "volumeUSD",
    liquidityUSD: "liquidityUSD",
    priceUSD: "priceUSD",
    priceUSDChange: "priceUSDChange",
    priceUSDChangeWeek: "priceUSDChangeWeek"
};
const MAX_ITEMS = 10;
const TokenTable = ({ tokenDatas , maxItems =MAX_ITEMS  })=>{
    const { 0: sortField , 1: setSortField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SORT_FIELD.volumeUSD);
    const { 0: sortDirection , 1: setSortDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: maxPage , 1: setMaxPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let extraPages = 1;
        if (tokenDatas) {
            if (tokenDatas.length % maxItems === 0) {
                extraPages = 0;
            }
            setMaxPage(Math.floor(tokenDatas.length / maxItems) + extraPages);
        }
    }, [
        maxItems,
        tokenDatas
    ]);
    const sortedTokens = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return tokenDatas ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default()(tokenDatas, (tokenData)=>tokenData[sortField], sortDirection ? "desc" : "asc").slice(maxItems * (page - 1), page * maxItems) : [];
    }, [
        tokenDatas,
        maxItems,
        page,
        sortDirection,
        sortField
    ]);
    const handleSort = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newField)=>{
        setSortField(newField);
        setSortDirection(sortField !== newField ? true : !sortDirection);
    }, [
        sortDirection,
        sortField
    ]);
    const arrow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((field)=>{
        const directionArrow = !sortDirection ? "↑" : "↓";
        return sortField === field ? directionArrow : "";
    }, [
        sortDirection,
        sortField
    ]);
    if (!tokenDatas) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .TableWrapper */ .y6, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        children: "#"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.name),
                        textTransform: "uppercase",
                        children: [
                            t("Name"),
                            " ",
                            arrow(SORT_FIELD.name)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.priceUSD),
                        textTransform: "uppercase",
                        children: [
                            t("Price"),
                            " ",
                            arrow(SORT_FIELD.priceUSD)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .ClickableColumnHeader */ ._J, {
                        color: "secondary",
                        fontSize: "12px",
                        bold: true,
                        onClick: ()=>handleSort(SORT_FIELD.priceUSDChange),
                        textTransform: "uppercase",
                        children: [
                            t("Price Change"),
                            " ",
                            arrow(SORT_FIELD.priceUSDChange)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .ClickableColumnHeader */ ._J, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .ClickableColumnHeader */ ._J, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_9__/* .Break */ .SS, {}),
            sortedTokens.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    sortedTokens.map((data, i)=>{
                        if (data) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataRow, {
                                        index: (page - 1) * MAX_ITEMS + i,
                                        tokenData: data
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_9__/* .Break */ .SS, {})
                                ]
                            }, data.address);
                        }
                        return null;
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_9__/* .PageButtons */ .Ob, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_9__/* .Arrow */ .Eh, {
                                onClick: ()=>{
                                    setPage(page === 1 ? page : page - 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    color: page === 1 ? "textDisabled" : "primary"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                children: t("Page %page% of %maxPage%", {
                                    page,
                                    maxPage
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_9__/* .Arrow */ .Eh, {
                                onClick: ()=>{
                                    setPage(page === maxPage ? page : page + 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    color: page === maxPage ? "textDisabled" : "primary"
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableLoader, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);


const Percent = ({ value , ...rest })=>{
    if (!value || Number.isNaN(value)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            ...rest,
            children: "-"
        });
    }
    const isNegative = value < 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...rest,
        color: isNegative ? "failure" : "success",
        children: [
            isNegative ? "↓" : "↑",
            Math.abs(value).toFixed(2),
            "%"
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Percent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=7456.js.map