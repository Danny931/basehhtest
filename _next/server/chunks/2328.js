"use strict";
exports.id = 2328;
exports.ids = [2328];
exports.modules = {

/***/ 27156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h2": () => (/* binding */ GreyCard),
/* harmony export */   "hl": () => (/* binding */ LightCard),
/* harmony export */   "m5": () => (/* binding */ LightGreyCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-21be8dee-0"
})`
  width: ${({ width  })=>width ?? "100%"};
  padding: ${({ padding  })=>padding ?? "1.25rem"};
  border: ${({ border  })=>border};
  border-radius: ${({ borderRadius  })=>borderRadius ?? "16px"};
  background-color: ${({ theme  })=>theme.colors.background};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
const LightCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-1"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
`;
const LightGreyCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-2"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  background-color: ${({ theme  })=>theme.colors.background};
`;
const GreyCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-3"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23805);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const GridItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-9db8e40d-0"
})`
  align-items: center;
`;
const LoadingRow = ()=>{
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridItem, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        height: [
                            162,
                            null,
                            64
                        ],
                        width: [
                            80,
                            null,
                            200
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridItem, {
                    justifyContent: "flex-end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        height: [
                            66,
                            null,
                            24
                        ],
                        width: 64
                    })
                })
            }),
            isXs || isSm ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Td, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridItem, {
                            justifyContent: "flex-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                height: 42,
                                width: 64
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Td, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridItem, {
                            justifyContent: "flex-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                height: 48,
                                width: 124
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridItem, {
                    justifyContent: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        height: [
                            36,
                            null,
                            24
                        ],
                        width: [
                            80,
                            null,
                            120
                        ]
                    })
                })
            })
        ]
    });
};
const TableLoader = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRow, {})
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableLoader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ActivityFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60789);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88587);
/* harmony import */ var _state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const TriggerButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-34bde88d-0"
})`
  white-space: nowrap;
  ${({ hasItem  })=>hasItem && `  
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 8px;
  `}
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-34bde88d-1"
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
const eventName = (t, eventType)=>{
    switch(eventType){
        case _state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.CANCEL */ .YG.CANCEL:
            return t("Delisted");
        case _state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.MODIFY */ .YG.MODIFY:
            return t("Modified");
        case _state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.NEW */ .YG.NEW:
            return t("Listed");
        case _state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.SELL */ .YG.SELL:
            return t("Sold");
        default:
            return "";
    }
};
const ActivityFilter = ({ eventType , collectionAddress , nftActivityFilters ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { addActivityTypeFilters , removeActivityTypeFilters  } = (0,_state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__/* .useNftStorage */ .q)();
    const isEventSelected = nftActivityFilters.typeFilters.some((nftActivityFilter)=>nftActivityFilter === eventType);
    const handleMenuClick = ()=>{
        if (!isEventSelected) {
            addActivityTypeFilters({
                collection: collectionAddress,
                field: eventType
            });
        }
    };
    const handleClearItem = ()=>{
        removeActivityTypeFilters({
            collection: collectionAddress,
            field: eventType
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        alignItems: "center",
        mr: "4px",
        mb: "4px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TriggerButton, {
                    onClick: handleMenuClick,
                    variant: isEventSelected ? "subtle" : "light",
                    scale: "sm",
                    hasItem: isEventSelected,
                    children: eventName(t, eventType)
                })
            }),
            isEventSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseButton, {
                variant: isEventSelected ? "subtle" : "light",
                scale: "sm",
                onClick: handleClearItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    color: "currentColor",
                    width: "18px"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Container */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88587);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Filters_ListCollectionFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35333);
/* harmony import */ var _ActivityFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62887);
/* harmony import */ var _ClearAllButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Filters_ListCollectionFilter__WEBPACK_IMPORTED_MODULE_5__, _ActivityFilter__WEBPACK_IMPORTED_MODULE_6__, _ClearAllButton__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Filters_ListCollectionFilter__WEBPACK_IMPORTED_MODULE_5__, _ActivityFilter__WEBPACK_IMPORTED_MODULE_6__, _ClearAllButton__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fa27af2-0"
})`
  gap: 16px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    align-items: center;
    flex-grow: 2;
  }
`;
const ScrollableFlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fa27af2-1"
})`
  align-items: center;
  flex: 1;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-wrap: wrap;
    overflow-x: revert;
  }
`;
const ActivityFilters = ({ address , nftActivityFilters  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        justifyContent: "space-between",
        flexDirection: [
            "column",
            "column",
            "row"
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                textTransform: "uppercase",
                color: "textSubtle",
                fontSize: "12px",
                bold: true,
                children: t("Filter by")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScrollableFlexContainer, {
                children: [
                    address === "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Filters_ListCollectionFilter__WEBPACK_IMPORTED_MODULE_5__/* .ListCollectionFilter */ .H, {
                        nftActivityFilters: nftActivityFilters
                    }),
                    [
                        state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.NEW */ .YG.NEW,
                        state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.CANCEL */ .YG.CANCEL,
                        state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.MODIFY */ .YG.MODIFY,
                        state_nftMarket_types__WEBPACK_IMPORTED_MODULE_3__/* .MarketEvent.SELL */ .YG.SELL
                    ].map((eventType)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityFilter__WEBPACK_IMPORTED_MODULE_6__/* .ActivityFilter */ .N, {
                            eventType: eventType,
                            collectionAddress: address,
                            nftActivityFilters: nftActivityFilters
                        }, eventType);
                    })
                ]
            }),
            !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(nftActivityFilters.typeFilters) || !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(nftActivityFilters.collectionFilters) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClearAllButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                collectionAddress: address
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityFilters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36204);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(57706);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(23805);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24761);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46737);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64548);
/* harmony import */ var components_TableLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9101);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24953);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36695);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19081);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65726);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93304);
/* harmony import */ var _components_PaginationButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29089);
/* harmony import */ var _components_Activity_NoNftsImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68298);
/* harmony import */ var _ActivityFilters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52169);
/* harmony import */ var _components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8308);
/* harmony import */ var _utils_sortActivity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51661);
/* harmony import */ var _utils_fetchActivityNftMetadata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__, components_TableLoader__WEBPACK_IMPORTED_MODULE_6__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_11__, _ActivityFilters__WEBPACK_IMPORTED_MODULE_14__, _components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([state__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__, components_TableLoader__WEBPACK_IMPORTED_MODULE_6__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_11__, _ActivityFilters__WEBPACK_IMPORTED_MODULE_14__, _components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const MAX_PER_PAGE = 8;
const MAX_PER_QUERY = 100;
const ActivityHistory = ({ collection  })=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const { address: collectionAddress  } = collection || {
        address: ""
    };
    const nftActivityFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useGetNftActivityFilters */ .ly)(collectionAddress);
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$G)();
    const { 0: paginationData , 1: setPaginationData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        activity: [],
        currentPage: 1,
        maxPage: 1
    });
    const { 0: activitiesSlice , 1: setActivitiesSlice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: nftMetadata , 1: setNftMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: isInitialized , 1: setIsInitialized  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: queryPage , 1: setQueryPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { lastUpdated , setLastUpdated: refresh  } = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useLastUpdated */ .sP)();
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__/* .useBNBBusdPrice */ .Hf)();
    const { isXs , isSm , isMd  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const nftActivityFiltersString = JSON.stringify(nftActivityFilters);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchCollectionActivity = async ()=>{
            try {
                setIsLoading(true);
                const nftActivityFiltersParsed = JSON.parse(nftActivityFiltersString);
                const collectionActivity = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCollectionActivity */ .Du)(collectionAddress.toLowerCase(), nftActivityFiltersParsed, MAX_PER_QUERY);
                const activity = (0,_utils_sortActivity__WEBPACK_IMPORTED_MODULE_16__/* .sortActivity */ .f)(collectionActivity);
                setPaginationData({
                    activity,
                    currentPage: 1,
                    maxPage: Math.ceil(activity.length / MAX_PER_PAGE) || 1
                });
                setIsLoading(false);
                setIsInitialized(true);
            } catch (error) {
                console.error("Failed to fetch collection activity", error);
            }
        };
        if (collectionAddress && (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(collectionAddress) || collectionAddress === "") {
            fetchCollectionActivity();
        }
    }, [
        dispatch,
        collectionAddress,
        nftActivityFiltersString,
        lastUpdated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchNftMetadata = async ()=>{
            const nfts = await (0,_utils_fetchActivityNftMetadata__WEBPACK_IMPORTED_MODULE_17__/* .fetchActivityNftMetadata */ .M)(activitiesSlice);
            setNftMetadata(nfts);
        };
        if (activitiesSlice.length > 0) {
            fetchNftMetadata();
        }
    }, [
        activitiesSlice
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const slice = paginationData.activity.slice(MAX_PER_PAGE * (paginationData.currentPage - 1), MAX_PER_PAGE * paginationData.currentPage);
        setActivitiesSlice(slice);
    }, [
        paginationData
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        py: "32px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                px: [
                    0,
                    null,
                    "24px"
                ],
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    style: {
                        gap: "16px",
                        padding: "0 16px"
                    },
                    alignItems: [
                        null,
                        null,
                        "center"
                    ],
                    flexDirection: [
                        "column",
                        "column",
                        "row"
                    ],
                    flexWrap: isMd ? "wrap" : "nowrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityFilters__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            address: collection?.address || "",
                            nftActivityFilters: nftActivityFilters
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            scale: "sm",
                            disabled: isLoading,
                            onClick: ()=>{
                                refresh();
                            },
                            ...isMd && {
                                width: "100%"
                            },
                            children: t("Refresh")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                style: {
                    overflowX: "auto"
                },
                children: paginationData.activity.length === 0 && nftMetadata.length === 0 && activitiesSlice.length === 0 && !isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    p: "24px",
                    flexDirection: "column",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Activity_NoNftsImage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                            pt: "8px",
                            bold: true,
                            children: t("No NFT market history found")
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {
                                                textAlign: [
                                                    "center",
                                                    null,
                                                    "left"
                                                ],
                                                children: [
                                                    " ",
                                                    t("Item")
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {
                                                textAlign: "right",
                                                children: [
                                                    " ",
                                                    t("Event")
                                                ]
                                            }),
                                            isXs || isSm ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {
                                                        textAlign: "right",
                                                        children: [
                                                            " ",
                                                            t("Price")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {
                                                        textAlign: "center",
                                                        children: [
                                                            " ",
                                                            t("From")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {
                                                        textAlign: "center",
                                                        children: [
                                                            " ",
                                                            t("To")
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {
                                                textAlign: "center",
                                                children: [
                                                    " ",
                                                    t("Date")
                                                ]
                                            }),
                                            isXs || isSm ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__.Th, {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: !isInitialized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TableLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : activitiesSlice.map((activity)=>{
                                        const nftMeta = nftMetadata.find((metaNft)=>metaNft.tokenId === activity.nft.tokenId && (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(metaNft.collectionAddress) === (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(activity.nft?.collection.id));
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            activity: activity,
                                            nft: nftMeta,
                                            bnbBusdPrice: bnbBusdPrice
                                        }, `${activity.marketEvent}#${activity.nft.tokenId}#${activity.timestamp}#${activity.tx}`);
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            borderTop: `1px ${theme.colors.cardBorder} solid`,
                            pt: "24px",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_12__/* .PageButtons */ .O, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_12__/* .Arrow */ .E, {
                                        onClick: ()=>{
                                            if (paginationData.currentPage !== 1) {
                                                setPaginationData((prevState)=>({
                                                        ...prevState,
                                                        currentPage: prevState.currentPage - 1
                                                    }));
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                            color: paginationData.currentPage === 1 ? "textDisabled" : "primary"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        children: t("Page %page% of %maxPage%", {
                                            page: paginationData.currentPage,
                                            maxPage: paginationData.maxPage
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_12__/* .Arrow */ .E, {
                                        onClick: async ()=>{
                                            if (paginationData.currentPage !== paginationData.maxPage) {
                                                setPaginationData((prevState)=>({
                                                        ...prevState,
                                                        currentPage: prevState.currentPage + 1
                                                    }));
                                                if (paginationData.maxPage - paginationData.currentPage === 1 && paginationData.activity.length === MAX_PER_QUERY * queryPage) {
                                                    try {
                                                        setIsLoading(true);
                                                        const nftActivityFiltersParsed = JSON.parse(nftActivityFiltersString);
                                                        const collectionActivity = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCollectionActivity */ .Du)(collectionAddress.toLowerCase(), nftActivityFiltersParsed, MAX_PER_QUERY * (queryPage + 1));
                                                        const activity = (0,_utils_sortActivity__WEBPACK_IMPORTED_MODULE_16__/* .sortActivity */ .f)(collectionActivity);
                                                        setPaginationData((prevState)=>{
                                                            return {
                                                                ...prevState,
                                                                activity,
                                                                maxPage: Math.ceil(activity.length / MAX_PER_PAGE) || 1
                                                            };
                                                        });
                                                        setIsLoading(false);
                                                        setQueryPage((prevState)=>prevState + 1);
                                                    } catch (error) {
                                                        console.error("Failed to fetch collection activity", error);
                                                    }
                                                }
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                            color: paginationData.currentPage === paginationData.maxPage ? "textDisabled" : "primary"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityHistory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__]);
state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ClearAllButton = ({ collectionAddress , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { removeAllActivityFilters  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__/* .useNftStorage */ .q)();
    const clearAll = ()=>{
        removeAllActivityFilters(collectionAddress);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "text",
        scale: "sm",
        onClick: clearAll,
        style: {
            whiteSpace: "nowrap"
        },
        ...props,
        children: t("Clear")
    }, "clear-all");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearAllButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ fetchActivityNftMetadata)
/* harmony export */ });
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46737);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36806);





const fetchActivityNftMetadata = async (activities)=>{
    const [pbCollections, nonPBCollections] = lodash_partition__WEBPACK_IMPORTED_MODULE_2___default()(activities, (activity)=>(0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(activity.nft.collection.id) === _constants__WEBPACK_IMPORTED_MODULE_4__/* .pancakeBunniesAddress */ .J);
    const activityNftTokenIds = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default()(nonPBCollections.map((activity)=>{
        return {
            tokenId: activity.nft.tokenId,
            collectionAddress: activity.nft.collection.id
        };
    }), (tokenWithCollectionAddress)=>`${tokenWithCollectionAddress.tokenId}#${tokenWithCollectionAddress.collectionAddress}`);
    const [bunniesMetadata, nfts] = await Promise.all([
        pbCollections.length ? (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .pancakeBunniesAddress */ .J) : Promise.resolve(null),
        (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getNftsFromDifferentCollectionsApi */ ._C)(activityNftTokenIds), 
    ]);
    const pbNfts = bunniesMetadata ? pbCollections.map((activity)=>{
        const { name: collectionName  } = bunniesMetadata.data[activity.nft.otherId].collection;
        return {
            ...bunniesMetadata.data[activity.nft.otherId],
            tokenId: activity.nft.tokenId,
            attributes: [
                {
                    traitType: "bunnyId",
                    value: activity.nft.otherId
                }
            ],
            collectionAddress: activity.nft.collection.id,
            collectionName
        };
    }) : [];
    return nfts.concat(pbNfts);
};


/***/ }),

/***/ 51661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ sortActivity)
/* harmony export */ });
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88587);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);


const sortActivity = ({ askOrders =[] , transactions =[]  })=>{
    const getAskOrderEvent = (orderType)=>{
        switch(orderType){
            case state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .AskOrderType.CANCEL */ .cP.CANCEL:
                return state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .MarketEvent.CANCEL */ .YG.CANCEL;
            case state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .AskOrderType.MODIFY */ .cP.MODIFY:
                return state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .MarketEvent.MODIFY */ .YG.MODIFY;
            case state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .AskOrderType.NEW */ .cP.NEW:
                return state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .MarketEvent.NEW */ .YG.NEW;
            default:
                return state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .MarketEvent.MODIFY */ .YG.MODIFY;
        }
    };
    const transformTransactions = (transactionsHistory)=>{
        const transformedTransactions = transactionsHistory.map((transactionHistory)=>{
            const marketEvent = state_nftMarket_types__WEBPACK_IMPORTED_MODULE_0__/* .MarketEvent.SELL */ .YG.SELL;
            const { timestamp , nft  } = transactionHistory;
            const price = transactionHistory.askPrice;
            const tx = transactionHistory.id;
            const buyer = transactionHistory.buyer.id;
            const seller = transactionHistory.seller.id;
            return {
                marketEvent,
                price,
                timestamp,
                nft,
                tx,
                buyer,
                seller
            };
        });
        return transformedTransactions;
    };
    const transformAskOrders = (askOrdersHistory)=>{
        const transformedAskOrders = askOrdersHistory.map((askOrderHistory)=>{
            const marketEvent = getAskOrderEvent(askOrderHistory.orderType);
            const price = askOrderHistory.askPrice;
            const { timestamp , nft  } = askOrderHistory;
            const tx = askOrderHistory.id;
            const seller = askOrderHistory?.seller.id;
            return {
                marketEvent,
                price,
                timestamp,
                nft,
                tx,
                seller
            };
        });
        return transformedAskOrders;
    };
    const allActivity = [
        ...transformAskOrders(askOrders),
        ...transformTransactions(transactions)
    ];
    if (allActivity.length > 0) {
        const sortedByMostRecent = lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(allActivity, (activity)=>parseInt(activity.timestamp, 10), "desc");
        return sortedByMostRecent;
    }
    return [];
};


/***/ }),

/***/ 13336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _state_nftMarket_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88587);




const ActivityEventText = ({ marketEvent , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const events = {
        [_state_nftMarket_types__WEBPACK_IMPORTED_MODULE_2__/* .MarketEvent.NEW */ .YG.NEW]: {
            text: t("Listed"),
            color: "textSubtle"
        },
        [_state_nftMarket_types__WEBPACK_IMPORTED_MODULE_2__/* .MarketEvent.CANCEL */ .YG.CANCEL]: {
            text: t("Delisted"),
            color: "textSubtle"
        },
        [_state_nftMarket_types__WEBPACK_IMPORTED_MODULE_2__/* .MarketEvent.MODIFY */ .YG.MODIFY]: {
            text: t("Modified"),
            color: "textSubtle"
        },
        [_state_nftMarket_types__WEBPACK_IMPORTED_MODULE_2__/* .MarketEvent.BUY */ .YG.BUY]: {
            text: t("Bought"),
            color: "success"
        },
        [_state_nftMarket_types__WEBPACK_IMPORTED_MODULE_2__/* .MarketEvent.SELL */ .YG.SELL]: {
            text: t("Sold"),
            color: "failure"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        color: events[marketEvent].color,
        children: events[marketEvent].text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityEventText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33430);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ActivityPrice = ({ bnbBusdPrice , price  })=>{
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_1__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, price);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        flexDirection: "column",
        alignItems: "flex-end",
        children: price ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    justifySelf: "flex-start",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            width: "12px",
                            height: "12px",
                            mr: "4px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            maxWidth: "80px",
                            bold: true,
                            children: price.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 5
                            })
                        })
                    ]
                }),
                priceInUsd ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    children: `(~$${priceInUsd.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })})`
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    height: "18px",
                    width: "42px"
                })
            ]
        }) : "-"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityPrice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23805);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12486);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2984);
/* harmony import */ var _MobileModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9199);
/* harmony import */ var _ActivityPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35166);
/* harmony import */ var _ActivityEventText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13336);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36806);
/* harmony import */ var _NFTMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_3__, _MobileModal__WEBPACK_IMPORTED_MODULE_4__, _ActivityPrice__WEBPACK_IMPORTED_MODULE_5__, _ActivityEventText__WEBPACK_IMPORTED_MODULE_6__, _NFTMedia__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_3__, _MobileModal__WEBPACK_IMPORTED_MODULE_4__, _ActivityPrice__WEBPACK_IMPORTED_MODULE_5__, _ActivityEventText__WEBPACK_IMPORTED_MODULE_6__, _NFTMedia__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ActivityRow = ({ activity , bnbBusdPrice , nft , isUserActivity =false , isNftActivity =false ,  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const priceAsFloat = parseFloat(activity.price);
    const timestampAsMs = parseFloat(activity.timestamp) * 1000;
    const localeTimestamp = new Date(timestampAsMs).toLocaleString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
    const [onPresentMobileModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        nft: nft,
        activity: activity,
        localeTimestamp: localeTimestamp,
        bnbBusdPrice: bnbBusdPrice,
        isUserActivity: isUserActivity
    }));
    const isPBCollection = nft ? (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(nft.collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_7__/* .pancakeBunniesAddress */ .J : false;
    const tokenId = nft && isPBCollection ? nft.attributes.find((attribute)=>attribute.traitType === "bunnyId")?.value : nft ? nft.tokenId : null;
    const onClickProp = nft ? {
        onClick: onPresentMobileModal
    } : {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        ...(isXs || isSm) && onClickProp,
        "data-test": "nft-activity-row",
        children: [
            !isNftActivity ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                ...(isXs || isSm) && {
                    onClick: (event)=>{
                        event.stopPropagation();
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: [
                        "column",
                        null,
                        "row"
                    ],
                    children: !nft ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        height: [
                            138,
                            null,
                            64
                        ],
                        width: [
                            80,
                            null,
                            249
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                width: 64,
                                height: 64,
                                mr: [
                                    0,
                                    null,
                                    "16px"
                                ],
                                mb: [
                                    "8px",
                                    null,
                                    0
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    to: `${_constants__WEBPACK_IMPORTED_MODULE_7__/* .nftsBaseUrl */ .V}/collections/${nft.collectionAddress}/${tokenId}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NFTMedia__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        nft: nft,
                                        width: 64,
                                        height: 64
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                flexDirection: "column",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                                        to: `${_constants__WEBPACK_IMPORTED_MODULE_7__/* .nftsBaseUrl */ .V}/collections/${nft.collectionAddress}`,
                                        textAlign: [
                                            "center",
                                            null,
                                            "left"
                                        ],
                                        color: "textSubtle",
                                        fontSize: "14px",
                                        children: nft.collectionName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                                        to: `${_constants__WEBPACK_IMPORTED_MODULE_7__/* .nftsBaseUrl */ .V}/collections/${nft.collectionAddress}/${tokenId}`,
                                        textAlign: [
                                            "center",
                                            null,
                                            "left"
                                        ],
                                        bold: true,
                                        children: nft.name
                                    })
                                ]
                            })
                        ]
                    })
                })
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        alignItems: "center",
                        justifyContent: "flex-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityEventText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            marketEvent: activity.marketEvent
                        })
                    }),
                    isXs || isSm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityPrice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        price: priceAsFloat,
                        bnbBusdPrice: bnbBusdPrice
                    }) : null
                ]
            }),
            isXs || isSm ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityPrice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            price: priceAsFloat,
                            bnbBusdPrice: bnbBusdPrice
                        })
                    }),
                    isUserActivity ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            justifyContent: "center",
                            alignItems: "center",
                            children: activity.otherParty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                accountAddress: activity.otherParty
                            }) : "-"
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: activity.seller ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        accountAddress: activity.seller
                                    }) : "-"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: activity.buyer ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        accountAddress: activity.buyer
                                    }) : "-"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    justifyContent: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        textAlign: "center",
                        fontSize: isXs || isSm ? "12px" : "16px",
                        children: localeTimestamp
                    })
                })
            }),
            isXs || isSm ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__.Td, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                    external: true,
                    href: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getBlockExploreLink */ .C)(activity.tx, "transaction", chainId),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        width: "18px"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85306);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27156);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55834);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37926);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var _ActivityEventText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13336);
/* harmony import */ var _NFTMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__, components_Card__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, _ActivityEventText__WEBPACK_IMPORTED_MODULE_6__, _NFTMedia__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__, components_Card__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, _ActivityEventText__WEBPACK_IMPORTED_MODULE_6__, _NFTMedia__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MobileModal = ({ nft , activity , bnbBusdPrice , localeTimestamp , onDismiss , isUserActivity =false ,  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    const priceAsFloat = parseFloat(activity.price);
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_8__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, priceAsFloat);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
        title: t("Transaction Details"),
        onDismiss: onDismiss,
        headerBackground: theme.colors.gradientCardHeader,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    alignItems: "center",
                    mb: "16px",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            width: 68,
                            mr: "16px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NFTMedia__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                nft: nft,
                                width: 68,
                                height: 68
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    textAlign: "right",
                                    children: nft?.collectionName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    bold: true,
                                    textAlign: "right",
                                    children: nft?.name
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_2__/* .LightGreyCard */ .m5, {
                    p: "16px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            mb: "24px",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityEventText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    fontSize: "14px",
                                    marketEvent: activity.marketEvent
                                }),
                                priceAsFloat ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            width: "12px",
                                            height: "12px",
                                            mr: "4px"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            mr: "4px",
                                            bold: true,
                                            children: priceAsFloat
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            children: `(~$${priceInUsd.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })})`
                                        })
                                    ]
                                }) : "-"
                            ]
                        }),
                        isUserActivity ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            mb: "24px",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    fontSize: "14px",
                                    color: "textSubtle",
                                    children: t("From/To")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    children: activity.otherParty ? (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(activity.otherParty) : "-"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    mb: "24px",
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            fontSize: "14px",
                                            color: "textSubtle",
                                            children: t("From")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            children: activity.seller ? (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(activity.seller) : "-"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    mb: "24px",
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            fontSize: "14px",
                                            color: "textSubtle",
                                            children: t("To")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            children: activity.buyer ? (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(activity.buyer) : "-"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    fontSize: "14px",
                                    color: "textSubtle",
                                    children: t("Date")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    children: localeTimestamp
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    flexDirection: "column",
                    pt: "16px",
                    alignItems: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        as: "a",
                        external: true,
                        href: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreLink */ .C)(activity.tx, "transaction", chainId),
                        children: t("View on BscScan")
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NoNftsImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9689af5c-0"
})`
  background: url('/images/nfts/no-profile-md.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 96px;
  height: 96px;

  & > img {
    border-radius: 50%;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoNftsImage);


/***/ }),

/***/ 35333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ListCollectionFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72897);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4161);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88800);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94722);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60789);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93304);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11095);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
/* harmony import */ var _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88864);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75003);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__, _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__, _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ListCollectionFilter = ({ nftActivityFilters ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: orderState , 1: setOrderState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        orderKey: "label",
        orderDir: "asc"
    });
    const { data: collections  } = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetCollections */ .t8)();
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { addActivityCollectionFilters , removeActivityCollectionFilters , removeAllActivityCollectionFilters  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_4__/* .useNftStorage */ .q)();
    const { orderKey , orderDir  } = orderState;
    const isAnyCollectionSelected = nftActivityFilters.collectionFilters.length > 0;
    const filteredCollections = (query && query.length > 1 ? Object.values(collections).filter((item)=>item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) : Object.values(collections)).map((item)=>{
        const isItemSelected = nftActivityFilters.collectionFilters.some((collectionAddress)=>{
            return (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(item.address) === (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(collectionAddress);
        });
        return {
            ...item,
            isSelected: isItemSelected
        };
    });
    const handleClearFilter = ()=>{
        removeAllActivityCollectionFilters();
    };
    const handleMenuClick = ()=>setIsOpen(!isOpen);
    const handleChange = (evt)=>{
        const { value  } = evt.target;
        setQuery(value);
    };
    const handleItemClick = (evt, collection)=>{
        if (evt.target.checked) {
            addActivityCollectionFilters({
                collection: collection.address.toLowerCase()
            });
        } else {
            removeActivityCollectionFilters({
                collection: collection.address.toLowerCase()
            });
        }
    };
    const toggleSort = (newOrderKey)=>()=>{
            setOrderState((prevOrderDir)=>{
                if (prevOrderDir.orderKey !== newOrderKey) {
                    return {
                        orderKey: newOrderKey,
                        orderDir: "asc"
                    };
                }
                return {
                    orderKey: newOrderKey,
                    orderDir: prevOrderDir.orderDir === "asc" ? "desc" : "asc"
                };
            });
        };
    // @TODO Fix this in the Toolkit
    // This is a fix to ensure the "isOpen" value is aligned with the menus's (to avoid a double click)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = ({ target  })=>{
            if (wrapperRef.current && menuRef.current && !menuRef.current.contains(target) && !wrapperRef.current.contains(target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        setIsOpen,
        wrapperRef,
        menuRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        alignItems: "center",
        mr: "4px",
        mb: "4px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ref: wrapperRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .TriggerButton */ .yR, {
                        onClick: handleMenuClick,
                        variant: isAnyCollectionSelected ? "subtle" : "light",
                        scale: "sm",
                        hasItem: isAnyCollectionSelected,
                        children: t("Collection")
                    }),
                    isOpen: isOpen,
                    options: {
                        placement: "bottom"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        maxWidth: "375px",
                        ref: menuRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .SearchWrapper */ ._8, {
                                alignItems: "center",
                                p: "16px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        color: "textSubtle"
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        name: "query",
                                        placeholder: t("Search"),
                                        onChange: handleChange,
                                        value: query
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                alignItems: "center",
                                p: "16px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .FilterButton */ .Lb, {
                                        onClick: toggleSort("name"),
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "secondary",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                children: t("Name")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                width: "18px",
                                                children: [
                                                    orderKey === "name" && orderDir === "asc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    }),
                                                    orderKey === "name" && orderDir === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .FilterButton */ .Lb, {
                                        onClick: toggleSort("isSelected"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "secondary",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                children: t("Filter")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                width: "18px",
                                                children: [
                                                    orderKey === "isSelected" && orderDir === "asc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    }),
                                                    orderKey === "isSelected" && orderDir === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                height: "240px",
                                overflowY: "auto",
                                children: filteredCollections.length > 0 ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default()(filteredCollections, orderKey, orderDir).map((collection)=>{
                                    const handleClick = (evt)=>handleItemClick(evt, collection);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .CollectionItemRow */ .t, {
                                        item: {
                                            label: collection.name,
                                            collectionAddress: collection.address
                                        },
                                        isSelected: collection.isSelected,
                                        onClick: handleClick
                                    }, collection.address);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "230px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        color: "textDisabled",
                                        textAlign: "center",
                                        children: t("No results found")
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            isAnyCollectionSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .CloseButton */ .PZ, {
                variant: isAnyCollectionSelected ? "subtle" : "light",
                scale: "sm",
                onClick: handleClearFilter,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    color: "currentColor",
                    width: "18px"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ CollectionItemRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59536);
/* harmony import */ var _ListFilter_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListFilter_styles__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_ListFilter_styles__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const CollectionItemRow = ({ item , isSelected , onClick ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_1__/* .StyledItemRow */ .Ak, {
        alignItems: "center",
        px: "16px",
        py: "8px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                style: {
                    flex: 1
                },
                children: item.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ml: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    name: "item-select",
                    scale: "sm",
                    onChange: onClick,
                    checked: isSelected,
                    value: item.collectionAddress
                })
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Arrow),
/* harmony export */   "O": () => (/* binding */ PageButtons)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aaa8dc2f-0"
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aaa8dc2f-1"
})`
  color: ${({ theme  })=>theme.colors.primary};
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;


/***/ }),

/***/ 2984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61576);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55834);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_profile_hooks__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([state_profile_hooks__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-203f5972-0"
})`
  align-items: center;
  transition: opacity 200ms ease-in;

  &:hover {
    opacity: 0.5;
  }
`;
const ProfileCell = ({ accountAddress  })=>{
    const { profile , isFetching  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useProfileForAddress */ .lC)(accountAddress);
    const profileName = profile?.username || "-";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        to: `/profile/${accountAddress}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledFlex, {
            children: [
                !isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: 32,
                    height: 32,
                    mr: [
                        "4px",
                        null,
                        "12px"
                    ],
                    src: profile?.nft?.image?.thumbnail,
                    style: {
                        minWidth: "32px",
                        minHeight: "32px"
                    }
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    variant: "circle",
                    width: "32px",
                    height: "32px",
                    mr: [
                        "4px",
                        null,
                        "12px"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    display: "inline",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            lineHeight: "1.25",
                            children: (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(accountAddress)
                        }),
                        isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            lineHeight: "1.25",
                            children: profileName
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/types.ts
const scales = {
    SM: "sm",
    MD: "md"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/Checkbox.tsx


const getScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
const Checkbox = external_styled_components_default().input.attrs({
    type: "checkbox"
}).withConfig({
    componentId: "sc-11bd21f1-0"
})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:checked {
    background-color: ${({ theme  })=>theme.colors.success};
    &:after {
      border-color: white;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
Checkbox.defaultProps = {
    scale: scales.MD
};
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);


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

/***/ 23805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Td": () => (/* binding */ Td),
/* harmony export */   "Th": () => (/* binding */ Th)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Td = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
    componentId: "sc-ea0e7240-0"
})`
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  color: ${({ theme  })=>theme.colors.text};
  padding: 16px;
  vertical-align: middle;

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.typography}
`;
const Th = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Td).attrs({
    as: "th"
}).withConfig({
    componentId: "sc-ea0e7240-1"
})`
  color: ${({ theme  })=>theme.colors.secondary};
  font-size: 12px;
  text-transform: uppercase;
`;


/***/ }),

/***/ 57706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23805);



const Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default().table.withConfig({
    componentId: "sc-4fe367f7-0"
})`
  max-width: 100%;
  width: 100%;

  tbody tr:last-child {
    ${_Cell__WEBPACK_IMPORTED_MODULE_2__.Td} {
      border-bottom: 0;
    }
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ })

};
;
//# sourceMappingURL=2328.js.map