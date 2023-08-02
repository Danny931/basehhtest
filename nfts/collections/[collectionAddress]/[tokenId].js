"use strict";
(() => {
var exports = {};
exports.id = 1026;
exports.ids = [1026,3424];
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

/***/ 60760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43424);
/* harmony import */ var _Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Page__WEBPACK_IMPORTED_MODULE_2__]);
_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5ad34a86-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLoader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);

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

/***/ 81603:
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
/* harmony import */ var views_Nft_market_Collection_IndividualNFTPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22225);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46737);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Nft_market_Collection_IndividualNFTPage__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_3__]);
([views_Nft_market_Collection_IndividualNFTPage__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// eslint-disable-next-line camelcase

const IndividualNFTPage = ({ fallback ={}  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {
        value: {
            fallback
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_Collection_IndividualNFTPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
};
const getStaticPaths = async ()=>{
    return {
        fallback: true,
        paths: []
    };
};
const getStaticProps = async ({ params  })=>{
    const { collectionAddress , tokenId  } = params;
    if (typeof collectionAddress !== "string" || typeof tokenId !== "string") {
        return {
            notFound: true
        };
    }
    const metadata = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getNftApi */ .hb)(collectionAddress, tokenId);
    const collection = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getCollection */ ._N)(collectionAddress);
    if (!metadata) {
        return {
            notFound: true,
            revalidate: 1
        };
    }
    const nft = {
        tokenId,
        collectionAddress,
        collectionName: metadata.collection.name,
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        attributes: metadata.attributes
    };
    return {
        props: {
            fallback: {
                [(0,swr__WEBPACK_IMPORTED_MODULE_3__.unstable_serialize)([
                    "nft",
                    nft.collectionAddress,
                    nft.tokenId
                ])]: nft,
                ...collection && {
                    [(0,swr__WEBPACK_IMPORTED_MODULE_3__.unstable_serialize)([
                        "nftMarket",
                        "collections",
                        collectionAddress.toLowerCase()
                    ])]: collection
                }
            }
        },
        revalidate: 60 * 60 * 6
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndividualNFTPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 68786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57706);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23805);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36695);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36204);
/* harmony import */ var _components_Activity_NoNftsImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68298);
/* harmony import */ var _components_TableLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9101);
/* harmony import */ var _components_PaginationButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29089);
/* harmony import */ var _state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46737);
/* harmony import */ var _ActivityHistory_utils_sortActivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51661);
/* harmony import */ var _components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__, _state__WEBPACK_IMPORTED_MODULE_5__, _components_TableLoader__WEBPACK_IMPORTED_MODULE_7__, _components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__, _state__WEBPACK_IMPORTED_MODULE_5__, _components_TableLoader__WEBPACK_IMPORTED_MODULE_7__, _components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const MAX_PER_PAGE = 5;
const ActivityCard = ({ nft  })=>{
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: maxPage , 1: setMaxPages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: activitiesSlice , 1: setActivitiesSlice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: sortedTokenActivities , 1: setSortedTokenActivities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__/* .useBNBBusdPrice */ .Hf)();
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchTokenActivity = async ()=>{
            try {
                const tokenActivity = await (0,_state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getTokenActivity */ .AC)(nft.tokenId, nft.collectionAddress.toLowerCase());
                setSortedTokenActivities((0,_ActivityHistory_utils_sortActivity__WEBPACK_IMPORTED_MODULE_10__/* .sortActivity */ .f)(tokenActivity));
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch address activity", error);
            }
        };
        fetchTokenActivity();
    }, [
        nft,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getMaxPages = ()=>{
            const max = Math.ceil(sortedTokenActivities.length / MAX_PER_PAGE);
            setMaxPages(max);
        };
        if (sortedTokenActivities.length > 0) {
            getMaxPages();
        }
        return ()=>{
            setActivitiesSlice([]);
            setMaxPages(1);
            setCurrentPage(1);
        };
    }, [
        sortedTokenActivities
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getActivitySlice = ()=>{
            const slice = sortedTokenActivities.slice(MAX_PER_PAGE * (currentPage - 1), MAX_PER_PAGE * currentPage);
            setActivitiesSlice(slice);
        };
        if (sortedTokenActivities.length > 0) {
            getActivitySlice();
        }
    }, [
        sortedTokenActivities,
        currentPage
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: sortedTokenActivities.length === 0 && activitiesSlice.length === 0 && !isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            p: "24px",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Activity_NoNftsImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    pt: "8px",
                    bold: true,
                    children: t("No NFT market history found")
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__.Th, {
                                        textAlign: "center",
                                        children: [
                                            " ",
                                            t("Event")
                                        ]
                                    }),
                                    isXs || isSm ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__.Th, {
                                                textAlign: "right",
                                                children: [
                                                    " ",
                                                    t("Price")
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__.Th, {
                                                textAlign: "center",
                                                children: [
                                                    " ",
                                                    t("From")
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__.Th, {
                                                textAlign: "center",
                                                children: [
                                                    " ",
                                                    t("To")
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__.Th, {
                                        textAlign: "center",
                                        children: [
                                            " ",
                                            t("Date")
                                        ]
                                    }),
                                    isXs || isSm ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__.Th, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableLoader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : activitiesSlice.map((activity)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Activity_ActivityRow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    activity: activity,
                                    nft: nft,
                                    bnbBusdPrice: bnbBusdPrice,
                                    isNftActivity: true
                                }, `${activity.nft.tokenId}${activity.timestamp}`);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    borderTop: `1px ${theme.colors.cardBorder} solid`,
                    pt: "24px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_8__/* .PageButtons */ .O, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_8__/* .Arrow */ .E, {
                                onClick: ()=>{
                                    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    color: currentPage === 1 ? "textDisabled" : "primary"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                children: t("Page %page% of %maxPage%", {
                                    page: currentPage,
                                    maxPage
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_8__/* .Arrow */ .E, {
                                onClick: ()=>{
                                    setCurrentPage(currentPage === maxPage ? currentPage : currentPage + 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    color: currentPage === maxPage ? "textDisabled" : "primary"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36695);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37926);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56847);
/* harmony import */ var views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9032);
/* harmony import */ var _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30694);
/* harmony import */ var _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90679);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36806);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75849);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__, views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_5__, _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__, _shared_styles__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__, views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_5__, _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__, _shared_styles__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const MainNFTCard = ({ nft , isOwnNft , nftIsProfilePic , onSuccess ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__/* .useBNBBusdPrice */ .Hf)();
    const currentAskPriceAsNumber = nft?.marketData?.currentAskPrice ? parseFloat(nft.marketData?.currentAskPrice) : 0;
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_10__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, currentAskPriceAsNumber);
    const [onPresentBuyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        nftToBuy: nft
    }));
    const [onPresentSellModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        variant: nft.marketData?.isTradable ? "edit" : "sell",
        nftToSell: nft,
        onSuccessSale: onSuccess
    }));
    const [onEditProfileModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), false);
    const ownerButtons = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        flexDirection: [
            "column",
            "column",
            "row"
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                disabled: nftIsProfilePic,
                minWidth: "168px",
                mr: "16px",
                width: [
                    "100%",
                    null,
                    "max-content"
                ],
                mt: "24px",
                onClick: onPresentSellModal,
                children: nft.marketData?.isTradable ? t("Adjust price") : t("List for sale")
            }),
            !nft.marketData?.isTradable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                minWidth: "168px",
                variant: "secondary",
                width: [
                    "100%",
                    null,
                    "max-content"
                ],
                mt: "24px",
                onClick: onEditProfileModal,
                children: nftIsProfilePic ? t("Change Profile Pic") : t("Set as Profile Pic")
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        mb: "40px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_styles__WEBPACK_IMPORTED_MODULE_9__/* .Container */ .W2, {
                flexDirection: [
                    "column-reverse",
                    null,
                    "row"
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        flex: "2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_9__/* .CollectionLink */ .Db, {
                                    to: `${_constants__WEBPACK_IMPORTED_MODULE_8__/* .nftsBaseUrl */ .V}/collections/${nft.collectionAddress}`,
                                    children: nft?.collectionName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    fontSize: "40px",
                                    bold: true,
                                    mt: "12px",
                                    children: nft.name
                                }),
                                nft.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    mt: [
                                        "16px",
                                        "16px",
                                        "48px"
                                    ],
                                    children: t(nft.description)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    color: "textSubtle",
                                    mt: [
                                        "16px",
                                        "16px",
                                        "48px"
                                    ],
                                    children: t("Price")
                                }),
                                currentAskPriceAsNumber > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    mt: "8px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            width: 18,
                                            height: 18,
                                            mr: "4px"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            fontSize: "24px",
                                            bold: true,
                                            mr: "4px",
                                            children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(currentAskPriceAsNumber, 0, 5)
                                        }),
                                        bnbBusdPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            children: `(~${priceInUsd.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })} USD)`
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                            width: "64px"
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    children: t("Not for sale")
                                }),
                                nftIsProfilePic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    color: "failure",
                                    children: t("This NFT is your profile picture, you must change it to some other NFT if you want to sell this one.")
                                }),
                                isOwnNft && ownerButtons,
                                !isOwnNft && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    minWidth: "168px",
                                    disabled: !nft.marketData?.isTradable,
                                    mr: "16px",
                                    width: [
                                        "100%",
                                        null,
                                        "max-content"
                                    ],
                                    mt: "24px",
                                    onClick: onPresentBuyModal,
                                    children: t("Buy")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        flex: "2",
                        justifyContent: [
                            "center",
                            null,
                            "flex-end"
                        ],
                        alignItems: "center",
                        maxWidth: 440,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            nft: nft,
                            width: 440,
                            height: 440
                        }, nft.tokenId)
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNFTCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82420);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37926);
/* harmony import */ var views_Nft_market_hooks_useNftOwner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63386);
/* harmony import */ var _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30694);
/* harmony import */ var _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90679);
/* harmony import */ var _components_ProfileCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2984);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75849);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__, views_Nft_market_hooks_useNftOwner__WEBPACK_IMPORTED_MODULE_6__, _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__, _components_ProfileCell__WEBPACK_IMPORTED_MODULE_9__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__, views_Nft_market_hooks_useNftOwner__WEBPACK_IMPORTED_MODULE_6__, _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__, _components_ProfileCell__WEBPACK_IMPORTED_MODULE_9__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6a957685-0"
})`
  width: 100%;
  & > div:first-child {
    display: flex;
    flex-direction: column;
  }
`;
const OwnerRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6a957685-1"
})`
  grid-template-columns: 2fr 2fr 1fr;
  grid-row-gap: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  align-items: center;
`;
const OwnerCard = ({ nft , isOwnNft , nftIsProfilePic , onSuccess ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__/* .useBNBBusdPrice */ .Hf)();
    const { owner , isLoadingOwner  } = (0,views_Nft_market_hooks_useNftOwner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(nft, isOwnNft);
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_13__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, parseFloat(nft?.marketData?.currentAskPrice));
    const [onPresentBuyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        nftToBuy: nft
    }));
    const [onPresentAdjustPriceModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        variant: nft.marketData?.isTradable ? "edit" : "sell",
        nftToSell: nft,
        onSuccessSale: onSuccess
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCard, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                flex: "0 1 auto",
                gridTemplateColumns: "34px 1fr",
                alignItems: "center",
                height: "72px",
                px: "24px",
                borderBottom: `1px solid ${theme.colors.cardBorder}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        width: "24px",
                        height: "24px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        bold: true,
                        children: t("Owner")
                    })
                ]
            }),
            owner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .TableHeading */ .cq, {
                        flex: "0 1 auto",
                        gridTemplateColumns: "2fr 2fr 1fr",
                        py: "12px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    textTransform: "uppercase",
                                    color: "textSubtle",
                                    bold: true,
                                    fontSize: "12px",
                                    px: "24px",
                                    children: t("Price")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                textTransform: "uppercase",
                                color: "textSubtle",
                                bold: true,
                                fontSize: "12px",
                                children: t("Owner")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OwnerRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                pl: "24px",
                                children: nft.marketData?.isTradable ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            justifySelf: "flex-start",
                                            alignItems: "center",
                                            width: "max-content",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                    width: "24px",
                                                    height: "24px",
                                                    mr: "8px"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                    bold: true,
                                                    children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(parseFloat(nft?.marketData?.currentAskPrice), 0, 5)
                                                })
                                            ]
                                        }),
                                        bnbBusdPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            fontSize: "12px",
                                            color: "textSubtle",
                                            children: `(~${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(priceInUsd, 2, 2)} USD)`
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            width: "86px",
                                            height: "12px",
                                            mt: "4px"
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    height: "100%",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        children: t("Not for sale")
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    width: "max-content",
                                    alignItems: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProfileCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        accountAddress: owner.toLowerCase()
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .ButtonContainer */ .qO, {
                                children: isOwnNft ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    disabled: nftIsProfilePic,
                                    scale: "sm",
                                    variant: "secondary",
                                    maxWidth: "128px",
                                    onClick: onPresentAdjustPriceModal,
                                    children: nft.marketData?.isTradable ? t("Manage") : t("Sell")
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    disabled: !nft.marketData?.isTradable,
                                    scale: "sm",
                                    variant: "secondary",
                                    maxWidth: "128px",
                                    onClick: onPresentBuyModal,
                                    children: t("Buy")
                                })
                            })
                        ]
                    })
                ]
            }),
            isLoadingOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
            !isLoadingOwner && !owner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                padding: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    children: t("Owner information is not available for this item")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OwnerCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81342:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24278);
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95594);
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_sum__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52993);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93304);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60760);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MainNFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57497);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75849);
/* harmony import */ var _shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41863);
/* harmony import */ var _shared_DetailsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59744);
/* harmony import */ var _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82578);
/* harmony import */ var _OwnerCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9842);
/* harmony import */ var _shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76497);
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68786);
/* harmony import */ var _hooks_useCompleteNft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23746);
/* harmony import */ var _shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_5__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__, components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_7__, _MainNFTCard__WEBPACK_IMPORTED_MODULE_9__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_11__, _shared_DetailsCard__WEBPACK_IMPORTED_MODULE_12__, _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_13__, _OwnerCard__WEBPACK_IMPORTED_MODULE_14__, _shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_15__, _ActivityCard__WEBPACK_IMPORTED_MODULE_16__, _hooks_useCompleteNft__WEBPACK_IMPORTED_MODULE_17__, _shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_5__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__, components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_7__, _MainNFTCard__WEBPACK_IMPORTED_MODULE_9__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_11__, _shared_DetailsCard__WEBPACK_IMPORTED_MODULE_12__, _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_13__, _OwnerCard__WEBPACK_IMPORTED_MODULE_14__, _shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_15__, _ActivityCard__WEBPACK_IMPORTED_MODULE_16__, _hooks_useCompleteNft__WEBPACK_IMPORTED_MODULE_17__, _shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const OwnerActivityContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f8ddff3f-0"
})`
  gap: 22px;
`;
const IndividualNFTPage = ({ collectionAddress , tokenId ,  })=>{
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetCollection */ .YD)(collectionAddress);
    const { data: distributionData , isFetching: isFetchingDistribution  } = (0,_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(collectionAddress);
    const { combinedNft: nft , isOwn: isOwnNft , isProfilePic , refetch  } = (0,_hooks_useCompleteNft__WEBPACK_IMPORTED_MODULE_17__/* .useCompleteNft */ .O)(collectionAddress, tokenId);
    const properties = nft?.attributes;
    const attributesRarity = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (distributionData && !isFetchingDistribution && properties) {
            return lodash_fromPairs__WEBPACK_IMPORTED_MODULE_8___default()(Object.keys(distributionData).map((traitType)=>{
                const total = lodash_sum__WEBPACK_IMPORTED_MODULE_3___default()(Object.values(distributionData[traitType]));
                const nftAttributeValue = properties.find((attribute)=>attribute.traitType === traitType)?.value;
                const count = distributionData[traitType][nftAttributeValue];
                const rarity = count / total * 100;
                return [
                    traitType,
                    rarity
                ];
            }));
        }
        return {};
    }, [
        properties,
        isFetchingDistribution,
        distributionData
    ]);
    if (!nft || !collection) {
        // Normally we already show a 404 page here if no nft, just put this checking here for safety.
        // For now this if is used to show loading spinner while we're getting the data
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainNFTCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                nft: nft,
                isOwnNft: isOwnNft,
                nftIsProfilePic: isProfilePic,
                onSuccess: refetch
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .TwoColumnsContainer */ .Tk, {
                flexDirection: [
                    "column",
                    "column",
                    "column",
                    "column",
                    "row"
                ],
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        width: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                collection: collection,
                                tokenId: tokenId,
                                onSuccess: isOwnNft ? refetch : (lodash_noop__WEBPACK_IMPORTED_MODULE_4___default())
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                properties: properties,
                                rarity: attributesRarity
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_DetailsCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                contractAddress: collectionAddress,
                                ipfsJson: nft?.marketData?.metadataUrl
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OwnerActivityContainer, {
                        flexDirection: "column",
                        width: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OwnerCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                nft: nft,
                                isOwnNft: isOwnNft,
                                nftIsProfilePic: isProfilePic,
                                onSuccess: refetch
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActivityCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                nft: nft
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                collectionAddress: collectionAddress,
                currentTokenName: nft.name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndividualNFTPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const countdownAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 113px;
  }
`;
const CountdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-72a5084-0"
})`
  position: relative;
  margin: auto;
  height: 40px;
  width: 40px;
  text-align: center;

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);

    & circle {
      stroke-dasharray: 113px;
      stroke-dashoffset: 0px;
      stroke-linecap: round;
      stroke-width: 2px;
      stroke: ${({ theme  })=>theme.colors.primaryBright};
      fill: none;
      animation: ${countdownAnimation} 10s linear infinite forwards;
    }
  }
`;
const CountdownCircle = ({ secondsRemaining , isUpdating  })=>{
    if (secondsRemaining < 1 || isUpdating) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            size: 42
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CountdownContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "textSubtle",
                lineHeight: "40px",
                display: "inline-block",
                children: secondsRemaining
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    r: "18",
                    cx: "20",
                    cy: "20"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownCircle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36695);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37926);
/* harmony import */ var views_Nft_market_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30694);
/* harmony import */ var views_Nft_market_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90679);
/* harmony import */ var views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2984);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5305);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75849);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__, views_Nft_market_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__, views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_8__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__, views_Nft_market_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__, views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_8__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const OwnersTableRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b34f027-0"
})`
  grid-template-columns: 2fr 2fr 1fr;
  grid-row-gap: 16px;
  margin-top: 16px;
  & > div {
    padding-bottom: 16px;
    border-bottom: ${({ theme  })=>`1px solid ${theme.colors.cardBorder}`};
  }
`;
const Row = ({ t , nft , bnbBusdPrice , account , onSuccessSale  })=>{
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_12__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, parseFloat(nft?.marketData?.currentAskPrice));
    const ownNft = account ? (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(nft.marketData.currentSeller) === (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(account) : false;
    const [onPresentBuyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        nftToBuy: nft
    }));
    const [onPresentAdjustPriceModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        variant: "edit",
        nftToSell: nft,
        onSuccessSale: onSuccessSale
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                pl: "24px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        justifySelf: "flex-start",
                        alignItems: "center",
                        width: "max-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                width: "24px",
                                height: "24px",
                                mr: "8px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                bold: true,
                                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(parseFloat(nft?.marketData?.currentAskPrice), 0, 5)
                            })
                        ]
                    }),
                    bnbBusdPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        children: `(~${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(priceInUsd, 2, 2)} USD)`
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        width: "86px",
                        height: "12px",
                        mt: "4px"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    width: "max-content",
                    alignItems: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_ProfileCell__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        accountAddress: nft.marketData.currentSeller
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .ButtonContainer */ .qO, {
                children: ownNft ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    disabled: !nft?.marketData?.isTradable,
                    scale: "sm",
                    variant: "danger",
                    maxWidth: "128px",
                    onClick: onPresentAdjustPriceModal,
                    children: t("Edit")
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    disabled: !nft?.marketData?.isTradable,
                    scale: "sm",
                    variant: "secondary",
                    maxWidth: "128px",
                    onClick: onPresentBuyModal,
                    children: t("Buy")
                })
            })
        ]
    });
};
const ForSaleTableRow = ({ nftsForSale , onSuccessSale  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__/* .useBNBBusdPrice */ .Hf)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OwnersTableRow, {
        children: nftsForSale.map((nft)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Row, {
                t: t,
                nft: nft,
                bnbBusdPrice: bnbBusdPrice,
                account: account,
                onSuccessSale: onSuccessSale
            }, nft.tokenId))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForSaleTableRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _CountdownCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CountdownCircle__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_CountdownCircle__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const UpdateIndicator = ({ isFetchingPancakeBunnies ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { 0: secondsRemaining , 1: setSecondsRemaining  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const { tooltip , tooltipVisible , targetRef  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(t("Items in the table update every 10 seconds"), {
        placement: "auto"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const intervalId = setInterval(()=>{
            setSecondsRemaining((prev)=>prev - 1);
        }, 1000);
        return ()=>{
            clearInterval(intervalId);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isFetchingPancakeBunnies) {
            setSecondsRemaining(10);
        }
    }, [
        isFetchingPancakeBunnies
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        justifyContent: "center",
        ref: targetRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountdownCircle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                secondsRemaining: secondsRemaining,
                isUpdating: isFetchingPancakeBunnies
            }),
            tooltipVisible && tooltip
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateIndicator);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60458:
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
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90221);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82420);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88800);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94722);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(43424);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19081);
/* harmony import */ var _ForSaleTableRows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20269);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75849);
/* harmony import */ var _UpdateIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79817);
/* harmony import */ var _components_PaginationButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29089);
/* harmony import */ var _hooks_usePancakeBunnyOnSaleNfts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__, _ForSaleTableRows__WEBPACK_IMPORTED_MODULE_7__, _shared_styles__WEBPACK_IMPORTED_MODULE_8__, _UpdateIndicator__WEBPACK_IMPORTED_MODULE_9__, _hooks_usePancakeBunnyOnSaleNfts__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__, _ForSaleTableRows__WEBPACK_IMPORTED_MODULE_7__, _shared_styles__WEBPACK_IMPORTED_MODULE_8__, _UpdateIndicator__WEBPACK_IMPORTED_MODULE_9__, _hooks_usePancakeBunnyOnSaleNfts__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ITEMS_PER_PAGE_DESKTOP = 10;
const ITEMS_PER_PAGE_MOBILE = 5;
const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-17d51af7-0"
})`
  width: 100%;
  & > div:first-child {
    ${({ hasManyPages  })=>hasManyPages ? "min-height: 480px;" : null}
    display: flex;
    flex-direction: column;
    ${({ theme  })=>theme.mediaQueries.md} {
      ${({ hasManyPages  })=>hasManyPages ? "min-height: 850px;" : null}
    }
  }
`;
const ForSaleTableCard = ({ bunnyId , nftMetadata , onSuccessSale ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;
    const { nfts , refresh , page , setPage , direction: priceSort , setDirection , isFetchingNfts , isLastPage , isValidating ,  } = (0,_hooks_usePancakeBunnyOnSaleNfts__WEBPACK_IMPORTED_MODULE_11__/* .usePancakeBunnyOnSaleNfts */ .o)(bunnyId, nftMetadata, itemsPerPage * 10);
    const { 0: internalPage , 1: setInternalPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const switchPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((pageNumber)=>{
        setInternalPage(pageNumber);
    }, []);
    const togglePriceSort = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setDirection(priceSort === "asc" ? "desc" : "asc");
        setInternalPage(1);
    }, [
        setDirection,
        priceSort
    ]);
    const totalNfts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return nfts ? nfts.flat().sort((nftA, nftB)=>{
            const priceA = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(nftA.marketData.currentAskPrice);
            const priceB = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(nftB.marketData.currentAskPrice);
            return priceA.gt(priceB) ? 1 * (priceSort === "desc" ? -1 : 1) : priceA.eq(priceB) ? 0 : -1 * (priceSort === "desc" ? -1 : 1);
        }) : [];
    }, [
        nfts,
        priceSort
    ]);
    const chunkedNfts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return lodash_chunk__WEBPACK_IMPORTED_MODULE_3___default()(totalNfts, itemsPerPage) ?? [];
    }, [
        totalNfts,
        itemsPerPage
    ]);
    const nftsOnCurrentPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return chunkedNfts[internalPage - 1] ?? [];
    }, [
        chunkedNfts,
        internalPage
    ]);
    const maxInternalPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return Math.max(1, Math.ceil(totalNfts.length / itemsPerPage));
    }, [
        totalNfts,
        itemsPerPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (maxInternalPage === internalPage && !isValidating && !isLastPage) {
            setPage(page + 1);
        }
    }, [
        internalPage,
        isLastPage,
        isValidating,
        maxInternalPage,
        page,
        setPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInternalPage(1);
    }, [
        bunnyId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // This is a workaround for when on sale nft's size decreased, page still indicates a data where nft's had larger size
        if (nfts && !isValidating && maxInternalPage < internalPage) {
            setInternalPage(maxInternalPage);
        }
    }, [
        nfts,
        page,
        setPage,
        isValidating,
        maxInternalPage,
        internalPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCard, {
        hasManyPages: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                flex: "0 1 auto",
                gridTemplateColumns: "34px 1fr 48px",
                alignItems: "center",
                height: "72px",
                px: "24px",
                borderBottom: `1px solid ${theme.colors.cardBorder}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        width: "24px",
                        height: "24px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        bold: true,
                        children: t("For Sale")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UpdateIndicator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        isFetchingPancakeBunnies: isValidating
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_styles__WEBPACK_IMPORTED_MODULE_8__/* .TableHeading */ .cq, {
                flex: "0 1 auto",
                gridTemplateColumns: "2fr 2fr 1fr",
                py: "12px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_8__/* .StyledSortButton */ .IB, {
                        type: "button",
                        onClick: togglePriceSort,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    textTransform: "uppercase",
                                    color: "textSubtle",
                                    bold: true,
                                    fontSize: "12px",
                                    px: "24px",
                                    children: t("Price")
                                }),
                                priceSort === "asc" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    color: "textSubtle"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    color: "textSubtle"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        textTransform: "uppercase",
                        color: "textSubtle",
                        bold: true,
                        fontSize: "12px",
                        children: t("Owner")
                    })
                ]
            }),
            nftsOnCurrentPage.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    flex: "1 1 auto",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ForSaleTableRows__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            nftsForSale: nftsOnCurrentPage,
                            onSuccessSale: ()=>{
                                refresh();
                                onSuccessSale?.();
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_10__/* .PageButtons */ .O, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_10__/* .Arrow */ .E, {
                                    onClick: ()=>{
                                        switchPage(internalPage === 1 ? internalPage : internalPage - 1);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        color: internalPage === 1 ? "textDisabled" : "primary"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    children: t("Page %page%", {
                                        page: internalPage
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_10__/* .Arrow */ .E, {
                                    onClick: ()=>{
                                        switchPage(internalPage === maxInternalPage ? internalPage : internalPage + 1);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        color: internalPage === maxInternalPage ? "textDisabled" : "primary"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : isFetchingNfts ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    size: 42
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    children: t("No items for sale")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForSaleTableCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37926);
/* harmony import */ var views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56847);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36695);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
/* harmony import */ var _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30694);
/* harmony import */ var _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90679);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36806);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75849);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, _components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__, _shared_styles__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const MainPancakeBunnyCard = ({ cheapestNft , nothingForSaleBunny , onSuccessSale ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__/* .useBNBBusdPrice */ .Hf)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const nftToDisplay = cheapestNft || nothingForSaleBunny;
    const onlyOwnNftsOnSale = account ? (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(cheapestNft?.marketData?.currentSeller) === (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(account) : false;
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_11__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, parseFloat(nftToDisplay?.marketData?.currentAskPrice));
    const [onPresentBuyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_BuyModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        nftToBuy: nftToDisplay
    }));
    const [onPresentAdjustPriceModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        variant: "edit",
        nftToSell: cheapestNft,
        onSuccessSale: onSuccessSale
    }));
    const actionButton = onlyOwnNftsOnSale ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        variant: "danger",
        minWidth: "168px",
        width: [
            "100%",
            null,
            "max-content"
        ],
        mt: "24px",
        onClick: onPresentAdjustPriceModal,
        children: t("Adjust Sale Price")
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        minWidth: "168px",
        width: [
            "100%",
            null,
            "max-content"
        ],
        mt: "24px",
        onClick: onPresentBuyModal,
        children: t("Buy")
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        mb: "40px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .Container */ .W2, {
                flexDirection: [
                    "column-reverse",
                    null,
                    "row"
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        flex: "2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .CollectionLink */ .Db, {
                                    to: `${_constants__WEBPACK_IMPORTED_MODULE_9__/* .nftsBaseUrl */ .V}/collections/${nftToDisplay.collectionAddress}`,
                                    children: nftToDisplay?.collectionName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    fontSize: "40px",
                                    bold: true,
                                    mt: "12px",
                                    children: nftToDisplay.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    mt: [
                                        "16px",
                                        "16px",
                                        "48px"
                                    ],
                                    children: t(nftToDisplay.description)
                                }),
                                cheapestNft && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            mt: [
                                                "16px",
                                                "16px",
                                                "48px"
                                            ],
                                            children: t("Lowest price")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            alignItems: "center",
                                            mt: "8px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                    width: 18,
                                                    height: 18,
                                                    mr: "4px"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                    fontSize: "24px",
                                                    bold: true,
                                                    mr: "4px",
                                                    children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(parseFloat(nftToDisplay?.marketData?.currentAskPrice), 0, 5)
                                                }),
                                                bnbBusdPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                    color: "textSubtle",
                                                    children: `(~${priceInUsd.toLocaleString(undefined, {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    })} USD)`
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                    width: "64px"
                                                })
                                            ]
                                        }),
                                        actionButton
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        flex: "2",
                        justifyContent: [
                            "center",
                            null,
                            "flex-end"
                        ],
                        alignItems: "center",
                        maxWidth: 440,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_NFTMedia__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            nft: nftToDisplay,
                            width: 440,
                            height: 440
                        }, nftToDisplay.name)
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPancakeBunnyCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93304);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46737);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60760);
/* harmony import */ var views_Nft_market_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82578);
/* harmony import */ var _MainPancakeBunnyCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64509);
/* harmony import */ var _shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41863);
/* harmony import */ var _shared_DetailsCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59744);
/* harmony import */ var _shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76497);
/* harmony import */ var _ForSaleTableCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60458);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36806);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75849);
/* harmony import */ var _hooks_usePancakeBunnyCheapestNfts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97012);
/* harmony import */ var _shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_6__, _MainPancakeBunnyCard__WEBPACK_IMPORTED_MODULE_7__, _shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_8__, _shared_DetailsCard__WEBPACK_IMPORTED_MODULE_9__, _shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_10__, _ForSaleTableCard__WEBPACK_IMPORTED_MODULE_11__, _shared_styles__WEBPACK_IMPORTED_MODULE_13__, _hooks_usePancakeBunnyCheapestNfts__WEBPACK_IMPORTED_MODULE_14__, _shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_6__, _MainPancakeBunnyCard__WEBPACK_IMPORTED_MODULE_7__, _shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_8__, _shared_DetailsCard__WEBPACK_IMPORTED_MODULE_9__, _shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_10__, _ForSaleTableCard__WEBPACK_IMPORTED_MODULE_11__, _shared_styles__WEBPACK_IMPORTED_MODULE_13__, _hooks_usePancakeBunnyCheapestNfts__WEBPACK_IMPORTED_MODULE_14__, _shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const IndividualPancakeBunnyPage = (props)=>{
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetCollection */ .YD)(_constants__WEBPACK_IMPORTED_MODULE_12__/* .pancakeBunniesAddress */ .J);
    if (!collection) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IndividualPancakeBunnyPageBase, {
        ...props
    });
};
const IndividualPancakeBunnyPageBase = ({ bunnyId ,  })=>{
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetCollection */ .YD)(_constants__WEBPACK_IMPORTED_MODULE_12__/* .pancakeBunniesAddress */ .J);
    const totalBunnyCount = Number(collection?.totalSupply);
    const { 0: nothingForSaleBunny , 1: setNothingForSaleBunny  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: nftMetadata , 1: setNftMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { data: cheapestBunny , isFetched: isFetchedCheapestBunny , refresh: refreshCheapestNft ,  } = (0,_hooks_usePancakeBunnyCheapestNfts__WEBPACK_IMPORTED_MODULE_14__/* .usePancakeBunnyCheapestNft */ .m)(bunnyId, nftMetadata);
    const { data: distributionData , isFetching: isFetchingDistribution  } = (0,views_Nft_market_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_6__/* .useGetCollectionDistributionPB */ .q)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchNftMetadata = async ()=>{
            const metadata = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_12__/* .pancakeBunniesAddress */ .J);
            setNftMetadata(metadata);
        };
        if (!nftMetadata) {
            fetchNftMetadata();
        }
    }, [
        nftMetadata
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchBasicBunnyData = async ()=>{
            setNothingForSaleBunny({
                // In this case tokenId doesn't matter, this token can't be bought
                tokenId: nftMetadata.data[bunnyId].name,
                name: nftMetadata.data[bunnyId].name,
                description: nftMetadata.data[bunnyId].description,
                collectionName: nftMetadata.data[bunnyId].collection.name,
                collectionAddress: _constants__WEBPACK_IMPORTED_MODULE_12__/* .pancakeBunniesAddress */ .J,
                image: nftMetadata.data[bunnyId].image,
                attributes: [
                    {
                        traitType: "bunnyId",
                        value: bunnyId,
                        displayType: null
                    }, 
                ]
            });
        };
        // If bunny id has no listings on the market - get basic bunny info
        if (isFetchedCheapestBunny && !cheapestBunny && nftMetadata && nftMetadata.data) {
            fetchBasicBunnyData();
        }
    }, [
        cheapestBunny,
        isFetchedCheapestBunny,
        nftMetadata,
        bunnyId
    ]);
    if (!cheapestBunny && !nothingForSaleBunny) {
        // TODO redirect to nft market page if collection or bunny id does not exist (came here from some bad url)
        // That would require tracking loading states and stuff...
        // For now this if is used to show loading spinner while we're getting the data
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    }
    const getBunnyIdCount = ()=>{
        if (distributionData && !isFetchingDistribution) {
            return distributionData[bunnyId].tokenCount;
        }
        return null;
    };
    const getBunnyIdRarity = ()=>{
        if (distributionData && !isFetchingDistribution) {
            return distributionData[bunnyId].tokenCount / totalBunnyCount * 100;
        }
        return null;
    };
    const properties = cheapestBunny?.attributes || nothingForSaleBunny?.attributes;
    const propertyRarity = {
        bunnyId: getBunnyIdRarity()
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainPancakeBunnyCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                cheapestNft: cheapestBunny,
                nothingForSaleBunny: nothingForSaleBunny,
                onSuccessSale: refreshCheapestNft
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_styles__WEBPACK_IMPORTED_MODULE_13__/* .TwoColumnsContainer */ .Tk, {
                flexDirection: [
                    "column",
                    "column",
                    "column",
                    "row"
                ],
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        width: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ManageNFTsCard__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                collection: collection,
                                tokenId: bunnyId,
                                lowestPrice: cheapestBunny?.marketData?.currentAskPrice
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_PropertiesCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                properties: properties,
                                rarity: propertyRarity
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_DetailsCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                contractAddress: _constants__WEBPACK_IMPORTED_MODULE_12__/* .pancakeBunniesAddress */ .J,
                                ipfsJson: cheapestBunny?.marketData?.metadataUrl,
                                rarity: propertyRarity?.bunnyId,
                                count: getBunnyIdCount()
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ForSaleTableCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        bunnyId: bunnyId,
                        nftMetadata: nftMetadata,
                        onSuccessSale: refreshCheapestNft
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_MoreFromThisCollection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                collectionAddress: _constants__WEBPACK_IMPORTED_MODULE_12__/* .pancakeBunniesAddress */ .J,
                currentTokenName: cheapestBunny?.name || nothingForSaleBunny?.name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndividualPancakeBunnyPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60760);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36806);
/* harmony import */ var _PancakeBunnyPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38429);
/* harmony import */ var _OneOfAKindNftPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__, _PancakeBunnyPage__WEBPACK_IMPORTED_MODULE_5__, _OneOfAKindNftPage__WEBPACK_IMPORTED_MODULE_6__]);
([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__, _PancakeBunnyPage__WEBPACK_IMPORTED_MODULE_5__, _OneOfAKindNftPage__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const IndividualNFTPageRouter = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // For PancakeBunnies tokenId in url is really bunnyId
    const { collectionAddress , tokenId  } = router.query;
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
    }
    const isPBCollection = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(String(collectionAddress)) === _constants__WEBPACK_IMPORTED_MODULE_4__/* .pancakeBunniesAddress */ .J;
    if (isPBCollection) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PancakeBunnyPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            bunnyId: String(tokenId)
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OneOfAKindNftPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        collectionAddress: String(collectionAddress),
        tokenId: String(tokenId)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndividualNFTPageRouter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72993);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_uriToHttp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86287);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
/* harmony import */ var _ExpandableCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _ExpandableCard__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _ExpandableCard__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LongTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b9e75b7a-0"
})`
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const DetailsCard = ({ contractAddress , ipfsJson , count , rarity ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const ipfsLink = ipfsJson ? (0,_pancakeswap_utils_uriToHttp__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ipfsJson)[0] : null;
    const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        p: "24px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        bold: true,
                        textTransform: "uppercase",
                        children: t("Contract address")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        external: true,
                        href: (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .getBlockExploreLink */ .C)(contractAddress, "address", chainId),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LongTextContainer, {
                            bold: true,
                            children: contractAddress
                        })
                    })
                ]
            }),
            ipfsLink && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        bold: true,
                        textTransform: "uppercase",
                        children: "IPFS JSON"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        external: true,
                        href: ipfsLink,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LongTextContainer, {
                            bold: true,
                            children: ipfsLink
                        })
                    })
                ]
            }),
            count && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "16px",
                mr: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        bold: true,
                        textTransform: "uppercase",
                        children: t("Supply Count")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LongTextContainer, {
                        bold: true,
                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(count, 0, 0)
                    })
                ]
            }),
            rarity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mr: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        bold: true,
                        textTransform: "uppercase",
                        children: t("Rarity")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LongTextContainer, {
                        bold: true,
                        children: `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(rarity, 0, 2)}%`
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExpandableCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: t("Details"),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            width: "24px",
            height: "24px"
        }),
        content: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41420:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65474);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33231);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const expandAnimation = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 720px;
  }
`;
const collapseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    max-height: 710px;
  }
  to {
    max-height: 0px;
  }
`;
const ExpandableCardBody = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-33f6b115-0"
})`
  animation: ${({ expanded  })=>expanded ? styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          ${expandAnimation} 300ms linear forwards
        ` : styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          ${collapseAnimation} 300ms linear forwards
        `};
`;
const FullWidthCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-33f6b115-1"
})`
  width: 100%;
`;
const ExpandableCard = ({ icon , title , content  })=>{
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FullWidthCard, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                gridTemplateColumns: "1fr 8fr 1fr",
                alignItems: "center",
                height: "72px",
                px: "24px",
                borderBottom: `1px solid ${theme.colors.cardBorder}`,
                children: [
                    icon,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        bold: true,
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        onClick: ()=>{
                            setExpanded((prev)=>!prev);
                        },
                        variant: "text",
                        maxWidth: "32px",
                        children: expanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            width: "24px",
                            height: "24px",
                            color: "textSubtle"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            width: "24px",
                            height: "24px",
                            color: "textSubtle"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExpandableCardBody, {
                expanded: expanded,
                children: content
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandableCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82420);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8483);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60586);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11324);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46775);
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88587);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39480);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24953);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75849);
/* harmony import */ var _components_ProfileNftModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71925);
/* harmony import */ var _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90679);
/* harmony import */ var _hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69893);
/* harmony import */ var _ExpandableCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_9__, _components_ProfileNftModal__WEBPACK_IMPORTED_MODULE_10__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_11__, _hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_12__, _ExpandableCard__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_9__, _components_ProfileNftModal__WEBPACK_IMPORTED_MODULE_10__, _components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_11__, _hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_12__, _ExpandableCard__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ScrollableContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2078bf78-0"
})`
  overflow-y: auto;
  max-height: 224px;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2078bf78-1"
})`
  margin: 16px 20px;
  border-bottom: ${({ theme  })=>`1px solid ${theme.colors.cardBorder}`};
`;
const LocationColors = {
    [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.FORSALE */ .Fb.FORSALE]: "failure",
    [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.WALLET */ .Fb.WALLET]: "secondary",
    [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.PROFILE */ .Fb.PROFILE]: "textSubtle"
};
const LocationIcons = {
    [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.FORSALE */ .Fb.FORSALE]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.WALLET */ .Fb.WALLET]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
    [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.PROFILE */ .Fb.PROFILE]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z
};
const CollectibleRow = ({ nft , lowestPrice , onSuccessSale ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$G)();
    const modalVariant = nft.location === state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.WALLET */ .Fb.WALLET ? "sell" : "edit";
    const [onPresentProfileNftModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProfileNftModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        nft: nft
    }));
    const [onPresentModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuySellModals_SellModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        variant: modalVariant,
        nftToSell: nft,
        onSuccessSale: onSuccessSale
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_9__/* .CollectibleRowContainer */ .u$, {
        gridTemplateColumns: "96px 1fr",
        px: "16px",
        pb: "8px",
        my: "16px",
        onClick: nft.location === state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.PROFILE */ .Fb.PROFILE ? onPresentProfileNftModal : onPresentModal,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_9__/* .SmallRoundedImage */ .em, {
                src: nft.image.thumbnail,
                width: 64,
                height: 64,
                mx: "16px"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                gridTemplateColumns: "1fr 1fr",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        bold: true,
                        children: nft.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        textAlign: "right",
                        children: nft?.collectionName
                    }),
                    lowestPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Lowest price")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                justifySelf: "flex-end",
                                width: "max-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        width: "16px",
                                        height: "16px",
                                        mr: "4px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        small: true,
                                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(parseFloat(lowestPrice), 0, 5)
                                    })
                                ]
                            })
                        ]
                    }),
                    nft.location === state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.FORSALE */ .Fb.FORSALE ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Your price")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                justifySelf: "flex-end",
                                width: "max-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        width: "16px",
                                        height: "16px",
                                        mr: "4px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        small: true,
                                        children: nft?.marketData?.currentAskPrice
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        small: true,
                        color: "textDisabled",
                        children: t("Not on sale")
                    })
                ]
            })
        ]
    });
};
const CollectiblesByLocation = ({ location , nfts , lowestPrice , onSuccessSale ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$G)();
    const IconComponent = LocationIcons[location];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                gridTemplateColumns: "32px 1fr",
                px: "16px",
                pb: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconComponent, {
                        color: LocationColors[location],
                        width: "24px",
                        height: "24px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        display: "inline",
                        bold: true,
                        color: LocationColors[location],
                        children: t(location)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollableContainer, {
                children: nfts.map((nft)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectibleRow, {
                        nft: nft,
                        lowestPrice: lowestPrice,
                        onSuccessSale: onSuccessSale
                    }, nft.tokenId))
            })
        ]
    });
};
const getNftFilter = (location)=>{
    return (nft, collectionAddress, tokenId)=>{
        return (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .isAddress */ .UJ)(nft.collectionAddress) === (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .isAddress */ .UJ)(collectionAddress) && (tokenId ? nft.attributes[0].value === tokenId : true) && nft.location === location;
    };
};
const ManageNFTsCard = ({ collection , tokenId , lowestPrice , onSuccess ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { isLoading: isProfileLoading , profile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useProfile */ .Un)();
    const { nfts: userNfts , isLoading , refresh ,  } = (0,_hooks_useNftsForAddress__WEBPACK_IMPORTED_MODULE_12__/* .useCollectionsNftsForAddress */ .n)(account, profile, isProfileLoading, {
        [collection.address]: collection
    });
    const walletFilter = getNftFilter(state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.WALLET */ .Fb.WALLET);
    const forSaleFilter = getNftFilter(state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.FORSALE */ .Fb.FORSALE);
    const profileFilter = getNftFilter(state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.PROFILE */ .Fb.PROFILE);
    const nftsInWallet = userNfts.filter((nft)=>walletFilter(nft, collection.address, tokenId));
    const nftsForSale = userNfts.filter((nft)=>forSaleFilter(nft, collection.address, tokenId));
    const profileNft = userNfts.filter((nft)=>profileFilter(nft, collection.address, tokenId));
    const userHasNoNfts = !isLoading && nftsInWallet.length === 0 && nftsForSale.length === 0 && profileNft.length === 0;
    const totalNfts = nftsInWallet.length + nftsForSale.length + profileNft.length;
    const totalNftsText = account && !userHasNoNfts ? ` (${totalNfts})` : "";
    const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        pt: "16px",
        children: [
            !account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                mb: "16px",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }),
            account && userHasNoNfts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                px: "16px",
                pb: "16px",
                color: "textSubtle",
                children: t("You don’t have any of this item.")
            }),
            account && isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                px: "16px",
                pb: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        mb: "8px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        mb: "8px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        mb: "8px"
                    })
                ]
            }),
            nftsForSale.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectiblesByLocation, {
                location: state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.FORSALE */ .Fb.FORSALE,
                nfts: nftsForSale,
                lowestPrice: lowestPrice,
                onSuccessSale: ()=>{
                    refresh();
                    onSuccess?.();
                }
            }),
            nftsInWallet.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    nftsForSale.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectiblesByLocation, {
                        location: state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.WALLET */ .Fb.WALLET,
                        nfts: nftsInWallet,
                        lowestPrice: lowestPrice,
                        onSuccessSale: ()=>{
                            refresh();
                            onSuccess?.();
                        }
                    })
                ]
            }),
            profileNft.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    (nftsForSale.length > 0 || nftsInWallet.length > 0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectiblesByLocation, {
                        location: state_nftMarket_types__WEBPACK_IMPORTED_MODULE_4__/* .NftLocation.PROFILE */ .Fb.PROFILE,
                        nfts: profileNft,
                        lowestPrice: lowestPrice,
                        onSuccessSale: ()=>{
                            refresh();
                            onSuccess?.();
                        }
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExpandableCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        title: `${tokenId ? t("Manage Yours") : t("Manage Yours in Collection")}${totalNftsText}`,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            width: "24px",
            height: "24px"
        }),
        content: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageNFTsCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24761);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79847);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46737);
/* harmony import */ var components_Trans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60471);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36806);
/* harmony import */ var _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37569);
/* harmony import */ var _hooks_useAllPancakeBunnyNfts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_6__, _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_6__, _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved









const INITIAL_SLIDE = 4;
const SwiperCircle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-3d0a047f-0"
})`
  background-color: ${({ theme , isActive  })=>isActive ? theme.colors.secondary : theme.colors.textDisabled};
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  cursor: pointer;
`;
const StyledSwiper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-3d0a047f-1"
})`
  ${({ theme  })=>theme.mediaQueries.md} {
    .swiper-wrapper {
      max-height: 390px;
    }
  }
`;
const MoreFromThisCollection = ({ collectionAddress , currentTokenName ="" , title =/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    children: "More from this collection"
}) ,  })=>{
    const { 0: swiperRef , 1: setSwiperRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { isMobile , isMd , isLg  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const allPancakeBunnyNfts = (0,_hooks_useAllPancakeBunnyNfts__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(collectionAddress);
    const isPBCollection = (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .isAddress */ .UJ)(collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_9__/* .pancakeBunniesAddress */ .J;
    const checkSummedCollectionAddress = (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .isAddress */ .UJ)(collectionAddress) || collectionAddress;
    const { data: collectionNfts  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_6__["default"])(!isPBCollection && checkSummedCollectionAddress ? [
        "nft",
        "moreFromCollection",
        checkSummedCollectionAddress
    ] : null, async ()=>{
        try {
            const nfts = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getNftsFromCollectionApi */ .Rq)(collectionAddress, 100, 1);
            if (!nfts?.data) {
                return [];
            }
            const tokenIds = Object.values(nfts.data).map((nft)=>nft.tokenId);
            const nftsMarket = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getMarketDataForTokenIds */ .Z1)(collectionAddress, tokenIds);
            return tokenIds.map((id)=>{
                const apiMetadata = nfts.data[id];
                const marketData = nftsMarket.find((nft)=>nft.tokenId === id);
                return {
                    tokenId: id,
                    name: apiMetadata.name,
                    description: apiMetadata.description,
                    collectionName: apiMetadata.collection.name,
                    collectionAddress,
                    image: apiMetadata.image,
                    attributes: apiMetadata.attributes,
                    marketData
                };
            });
        } catch (error) {
            console.error(`Failed to fetch collection NFTs for ${collectionAddress}`, error);
            return [];
        }
    });
    let nftsToShow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return lodash_shuffle__WEBPACK_IMPORTED_MODULE_2___default()(allPancakeBunnyNfts ? allPancakeBunnyNfts.filter((nft)=>nft.name !== currentTokenName) : collectionNfts?.filter((nft)=>nft.name !== currentTokenName && nft.marketData?.isTradable));
    }, [
        allPancakeBunnyNfts,
        collectionNfts,
        currentTokenName
    ]);
    if (!nftsToShow || nftsToShow.length === 0) {
        return null;
    }
    let slidesPerView = 4;
    let maxPageIndex = 3;
    if (isMd) {
        slidesPerView = 2;
        maxPageIndex = 6;
    }
    if (isLg) {
        slidesPerView = 3;
        maxPageIndex = 4;
    }
    if (isPBCollection) {
        // PancakeBunnies should display 1 card per bunny id
        nftsToShow = nftsToShow.reduce((nftArray, current)=>{
            const bunnyId = current.attributes[0].value;
            if (!nftArray.find((nft)=>nft.attributes[0].value === bunnyId)) {
                nftArray.push(current);
            }
            return nftArray;
        }, []);
    }
    nftsToShow = nftsToShow.slice(0, 12);
    const nextSlide = ()=>{
        if (activeIndex < maxPageIndex - 1) {
            setActiveIndex((index)=>index + 1);
            swiperRef.slideNext();
        }
    };
    const previousSlide = ()=>{
        if (activeIndex > 0) {
            setActiveIndex((index)=>index - 1);
            swiperRef.slidePrev();
        }
    };
    const goToSlide = (index)=>{
        setActiveIndex(index / slidesPerView);
        swiperRef.slideTo(index);
    };
    const updateActiveIndex = ({ activeIndex: newActiveIndex  })=>{
        if (newActiveIndex !== undefined) setActiveIndex(Math.ceil(newActiveIndex / slidesPerView));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        pt: "56px",
        mb: "52px",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                bold: true,
                mb: "24px",
                children: title
            }),
            isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSwiper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                    spaceBetween: 16,
                    slidesPerView: 1.5,
                    children: nftsToShow.map((nft)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_10__/* .CollectibleLinkCard */ .ts, {
                                nft: nft
                            })
                        }, nft.tokenId))
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledSwiper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                        onSwiper: setSwiperRef,
                        onActiveIndexChange: updateActiveIndex,
                        spaceBetween: 16,
                        slidesPerView: slidesPerView,
                        slidesPerGroup: slidesPerView,
                        initialSlide: INITIAL_SLIDE,
                        children: nftsToShow.map((nft)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_10__/* .CollectibleLinkCard */ .ts, {
                                    nft: nft,
                                    currentAskPrice: isPBCollection ? null : parseFloat(nft?.marketData?.currentAskPrice)
                                })
                            }, nft.tokenId))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        mt: "16px",
                        alignItems: "center",
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "text",
                                onClick: previousSlide,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                            }),
                            [
                                ...Array(maxPageIndex).keys()
                            ].map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwiperCircle, {
                                    onClick: ()=>goToSlide(index * slidesPerView),
                                    isActive: activeIndex === index
                                }, index)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "text",
                                onClick: nextSlide,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreFromThisCollection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71892);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _ExpandableCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ExpandableCard__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_ExpandableCard__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Map of known traits to human-readable text
const KNOWN_TRAITS_TEXT = {
    bunnyId: "Bunny ID"
};
const SingleProperty = ({ title , value , rarity ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                fontSize: "12px",
                color: "textSubtle",
                bold: true,
                textTransform: "uppercase",
                children: KNOWN_TRAITS_TEXT[title] ?? title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        bold: true,
                        textTransform: "uppercase",
                        mr: "4px",
                        children: value
                    }),
                    rarity && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        small: true,
                        color: "textSubtle",
                        children: [
                            "(",
                            rarity.toFixed(2),
                            "%)"
                        ]
                    })
                ]
            })
        ]
    });
};
const PropertiesCard = ({ properties , rarity  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        p: "24px",
        children: properties.map((property)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SingleProperty, {
                title: property.traitType,
                value: property.value,
                rarity: rarity[property.traitType]
            }, property.traitType))
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExpandableCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: t("Properties"),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            width: "24px",
            height: "24px"
        }),
        content: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertiesCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 70929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39480);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74813);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5305);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6429);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20237);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22332);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, _shared_styles__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, _shared_styles__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ReviewStage = ({ nftToBuy , paymentCurrency , setPaymentCurrency , nftPrice , walletBalance , walletFetchStatus , notEnoughBnbForPurchase , continueToNextStage ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                px: "24px",
                pt: "24px",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_6__/* .RoundedImage */ ._v, {
                                src: nftToBuy.image.thumbnail,
                                height: 68,
                                width: 68,
                                mr: "16px"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        fontSize: "12px",
                                        children: nftToBuy?.collectionName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        bold: true,
                                        children: nftToBuy.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "textSubtle",
                                                p: "0px",
                                                height: "16px",
                                                mr: "4px",
                                                children: t("Token ID:")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                                scale: "xs",
                                                px: "0px",
                                                pt: "2px",
                                                external: true,
                                                variant: "text",
                                                href: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getBscScanLinkForNft */ .z)(nftToBuy.collectionAddress, nftToBuy.tokenId),
                                                children: nftToBuy.tokenId
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .BorderedBox */ .wP, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Pay with")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                activeIndex: paymentCurrency,
                                onItemClick: (index)=>setPaymentCurrency(index),
                                scale: "sm",
                                variant: "subtle",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        children: "BNB"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        children: "WBNB"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Total payment")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .BnbAmountCell */ .U2, {
                                bnbAmount: nftPrice
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("%symbol% in wallet", {
                                    symbol: paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_8__/* .PaymentCurrency.BNB */ .s.BNB ? "BNB" : "WBNB"
                                })
                            }),
                            !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                justifySelf: "flex-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    scale: "sm"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .BnbAmountCell */ .U2, {
                                bnbAmount: walletBalance,
                                isLoading: walletFetchStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .FetchStatus.Fetched */ .iF.Fetched,
                                isInsufficient: walletFetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .FetchStatus.Fetched */ .iF.Fetched && notEnoughBnbForPurchase
                            })
                        ]
                    }),
                    walletFetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .FetchStatus.Fetched */ .iF.Fetched && notEnoughBnbForPurchase && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        p: "8px",
                        variant: "danger",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            children: t("Not enough %symbol% to purchase this NFT", {
                                symbol: paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_8__/* .PaymentCurrency.BNB */ .s.BNB ? "BNB" : "WBNB"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                my: "16px",
                                mr: "4px",
                                children: [
                                    t("Convert between BNB and WBNB for free"),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                p: "0px",
                                height: "16px",
                                external: true,
                                variant: "text",
                                href: "/swap?inputCurrency=BNB&outputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                                children: t("Convert")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_6__/* .Divider */ .iz, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                px: "24px",
                pb: "24px",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        onClick: continueToNextStage,
                        disabled: walletFetchStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .FetchStatus.Fetched */ .iF.Fetched || notEnoughBnbForPurchase,
                        mb: "8px",
                        children: t("Checkout")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                        external: true,
                        style: {
                            width: "100%"
                        },
                        href: "/swap?outputCurrency=BNB",
                        variant: "secondary",
                        children: t("Get %symbol1% or %symbol2%", {
                            symbol1: "BNB",
                            symbol2: "WBNB"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72502);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(91397);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36576);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65342);
/* harmony import */ var hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64850);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80361);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74860);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19081);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15318);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24671);
/* harmony import */ var utils_requiresApproval__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63103);
/* harmony import */ var _shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15459);
/* harmony import */ var _shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66853);
/* harmony import */ var _shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24410);
/* harmony import */ var _ReviewStage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70929);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(22332);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_6__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_8__, hooks_useContract__WEBPACK_IMPORTED_MODULE_10__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_11__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_12__, _shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_17__, _shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_18__, _shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_19__, _ReviewStage__WEBPACK_IMPORTED_MODULE_20__, _styles__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_6__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_8__, hooks_useContract__WEBPACK_IMPORTED_MODULE_10__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_11__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_12__, _shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_17__, _shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_18__, _shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_19__, _ReviewStage__WEBPACK_IMPORTED_MODULE_20__, _styles__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const modalTitles = (t)=>({
        [_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.REVIEW */ .q.REVIEW]: t("Review"),
        [_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.APPROVE_AND_CONFIRM */ .q.APPROVE_AND_CONFIRM]: t("Back"),
        [_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.CONFIRM */ .q.CONFIRM]: t("Back"),
        [_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.TX_CONFIRMED */ .q.TX_CONFIRMED]: t("Transaction Confirmed")
    });
// NFT WBNB in testnet contract is different
const TESTNET_WBNB_NFT_ADDRESS = "0x094616f0bdfb0b526bd735bf66eca0ad254ca81f";
const BuyModal = ({ nftToBuy , onDismiss  })=>{
    const { 0: stage , 1: setStage  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.REVIEW */ .q.REVIEW);
    const { 0: confirmedTxHash , 1: setConfirmedTxHash  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const { 0: paymentCurrency , 1: setPaymentCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(_types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.BNB */ .s.BNB);
    const { 0: isPaymentCurrentInitialized , 1: setIsPaymentCurrentInitialized  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_9__/* .useCallWithMarketGasPrice */ .r)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const wbnbAddress = chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.ChainId.BSC_TESTNET ? TESTNET_WBNB_NFT_ADDRESS : _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_5__/* .bscTokens.wbnb.address */ .ds.wbnb.address;
    const wbnbContractReader = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_10__/* .useERC20 */ .X_)(wbnbAddress, false);
    const wbnbContractApprover = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_10__/* .useERC20 */ .X_)(wbnbAddress);
    const nftMarketContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_10__/* .useNftMarketContract */ .DU)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* .useToast */ .p)();
    const nftPriceWei = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.parseUnits)(nftToBuy?.marketData?.currentAskPrice, "ether");
    const nftPrice = parseFloat(nftToBuy?.marketData?.currentAskPrice);
    // BNB - returns ethers.BigNumber
    const { balance: bnbBalance , fetchStatus: bnbFetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_12__/* .useGetBnbBalance */ .nu)();
    const formattedBnbBalance = parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatEther)(bnbBalance));
    // WBNB - returns BigNumber
    const { balance: wbnbBalance , fetchStatus: wbnbFetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(wbnbAddress);
    const formattedWbnbBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_15__/* .getBalanceNumber */ .mW)(wbnbBalance);
    const walletBalance = paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.BNB */ .s.BNB ? formattedBnbBalance : formattedWbnbBalance;
    const walletFetchStatus = paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.BNB */ .s.BNB ? bnbFetchStatus : wbnbFetchStatus;
    const notEnoughBnbForPurchase = paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.BNB */ .s.BNB ? bnbBalance.lt(nftPriceWei) : wbnbBalance.lt((0,_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_14__/* .ethersToBigNumber */ .i9)(nftPriceWei));
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        if (bnbBalance.lt(nftPriceWei) && wbnbBalance.gte((0,_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_14__/* .ethersToBigNumber */ .i9)(nftPriceWei)) && !isPaymentCurrentInitialized) {
            setPaymentCurrency(_types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.WBNB */ .s.WBNB);
            setIsPaymentCurrentInitialized(true);
        }
    }, [
        bnbBalance,
        wbnbBalance,
        nftPriceWei,
        isPaymentCurrentInitialized
    ]);
    const { isApproving , isApproved , isConfirming , handleApprove , handleConfirm  } = (0,hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        onRequiresApproval: async ()=>{
            return (0,utils_requiresApproval__WEBPACK_IMPORTED_MODULE_16__/* .requiresApproval */ .S)(wbnbContractReader, account, nftMarketContract.address);
        },
        onApprove: ()=>{
            return callWithMarketGasPrice(wbnbContractApprover, "approve", [
                nftMarketContract.address,
                _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.MaxUint256
            ]);
        },
        onApproveSuccess: async ({ receipt  })=>{
            toastSuccess(t("Contract approved - you can now buy NFT with WBNB!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_6__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
        },
        onConfirm: ()=>{
            const payAmount = Number.isNaN(nftPrice) ? _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero : (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.parseUnits)(nftToBuy?.marketData?.currentAskPrice);
            if (paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.BNB */ .s.BNB) {
                return callWithMarketGasPrice(nftMarketContract, "buyTokenUsingBNB", [
                    nftToBuy.collectionAddress,
                    nftToBuy.tokenId
                ], {
                    value: payAmount
                });
            }
            return callWithMarketGasPrice(nftMarketContract, "buyTokenUsingWBNB", [
                nftToBuy.collectionAddress,
                nftToBuy.tokenId,
                payAmount, 
            ]);
        },
        onSuccess: async ({ receipt  })=>{
            setConfirmedTxHash(receipt.transactionHash);
            setStage(_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.TX_CONFIRMED */ .q.TX_CONFIRMED);
            toastSuccess(t("Your NFT has been sent to your wallet"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_6__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
        }
    });
    const continueToNextStage = ()=>{
        if (paymentCurrency === _types__WEBPACK_IMPORTED_MODULE_22__/* .PaymentCurrency.WBNB */ .s.WBNB && !isApproved) {
            setStage(_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.APPROVE_AND_CONFIRM */ .q.APPROVE_AND_CONFIRM);
        } else {
            setStage(_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.CONFIRM */ .q.CONFIRM);
        }
    };
    const goBack = ()=>{
        setStage(_types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.REVIEW */ .q.REVIEW);
    };
    const showBackButton = stage === _types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.CONFIRM */ .q.CONFIRM || stage === _types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.APPROVE_AND_CONFIRM */ .q.APPROVE_AND_CONFIRM;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_21__/* .StyledModal */ .oA, {
        title: modalTitles(t)[stage],
        stage: stage,
        onDismiss: onDismiss,
        onBack: showBackButton ? goBack : null,
        headerBackground: theme.colors.gradientCardHeader,
        children: [
            stage === _types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.REVIEW */ .q.REVIEW && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewStage__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                nftToBuy: nftToBuy,
                paymentCurrency: paymentCurrency,
                setPaymentCurrency: setPaymentCurrency,
                nftPrice: nftPrice,
                walletBalance: walletBalance,
                walletFetchStatus: walletFetchStatus,
                notEnoughBnbForPurchase: notEnoughBnbForPurchase,
                continueToNextStage: continueToNextStage
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.APPROVE_AND_CONFIRM */ .q.APPROVE_AND_CONFIRM && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                variant: "buy",
                handleApprove: handleApprove,
                isApproved: isApproved,
                isApproving: isApproving,
                isConfirming: isConfirming,
                handleConfirm: handleConfirm
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.CONFIRM */ .q.CONFIRM && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                isConfirming: isConfirming,
                handleConfirm: handleConfirm
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_22__/* .BuyingStage.TX_CONFIRMED */ .q.TX_CONFIRMED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                txHash: confirmedTxHash,
                onDismiss: onDismiss
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U2": () => (/* binding */ BnbAmountCell),
/* harmony export */   "oA": () => (/* binding */ StyledModal),
/* harmony export */   "wP": () => (/* binding */ BorderedBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36695);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37926);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP).withConfig({
    componentId: "sc-2143ec6c-0"
})`
  & > div:last-child {
    padding: 0;
  }
  & h2:first-of-type {
    ${({ stage , theme  })=>stage === _types__WEBPACK_IMPORTED_MODULE_3__/* .BuyingStage.APPROVE_AND_CONFIRM */ .q.APPROVE_AND_CONFIRM || stage === _types__WEBPACK_IMPORTED_MODULE_3__/* .BuyingStage.CONFIRM */ .q.CONFIRM ? `color: ${theme.colors.textSubtle}` : null};
  }
  & svg:first-of-type {
    ${({ stage , theme  })=>stage === _types__WEBPACK_IMPORTED_MODULE_3__/* .BuyingStage.APPROVE_AND_CONFIRM */ .q.APPROVE_AND_CONFIRM || stage === _types__WEBPACK_IMPORTED_MODULE_3__/* .BuyingStage.CONFIRM */ .q.CONFIRM ? `fill: ${theme.colors.textSubtle}` : null};
  }
`;
const BorderedBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2143ec6c-1"
})`
  margin: 16px 0;
  padding: 16px;
  background-color: ${({ theme  })=>theme.colors.background};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: ${({ theme  })=>theme.radii.default};
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 8px;
`;
const BnbAmountCell = ({ bnbAmount , isLoading , isInsufficient ,  })=>{
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__/* .useBNBBusdPrice */ .Hf)();
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            flexDirection: "column",
            justifySelf: "flex-end",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    width: "86px",
                    height: "20px",
                    mb: "6px"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    width: "86px",
                    height: "20px"
                })
            ]
        });
    }
    const usdAmount = (0,utils_prices__WEBPACK_IMPORTED_MODULE_8__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, bnbAmount);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        justifySelf: "flex-end",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                justifyContent: "flex-end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        height: 16,
                        width: 16,
                        mr: "4px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        bold: true,
                        color: isInsufficient ? "failure" : "text",
                        children: `${bnbAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 3,
                            maximumFractionDigits: 5
                        })}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                small: true,
                color: "textSubtle",
                textAlign: "right",
                children: `($${usdAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })})`
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ BuyingStage),
/* harmony export */   "s": () => (/* binding */ PaymentCurrency)
/* harmony export */ });
var PaymentCurrency;
(function(PaymentCurrency) {
    PaymentCurrency[PaymentCurrency["BNB"] = 0] = "BNB";
    PaymentCurrency[PaymentCurrency["WBNB"] = 1] = "WBNB";
})(PaymentCurrency || (PaymentCurrency = {}));
var BuyingStage;
(function(BuyingStage) {
    BuyingStage[BuyingStage["REVIEW"] = 0] = "REVIEW";
    BuyingStage[BuyingStage["APPROVE_AND_CONFIRM"] = 1] = "APPROVE_AND_CONFIRM";
    BuyingStage[BuyingStage["CONFIRM"] = 2] = "CONFIRM";
    BuyingStage[BuyingStage["TX_CONFIRMED"] = 3] = "TX_CONFIRMED";
})(BuyingStage || (BuyingStage = {}));


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

/***/ 86329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46737);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36806);




// If collection is PancakeBunnies - gets all available bunnies, otherwise - null
const useAllPancakeBunnyNfts = (collectionAddress)=>{
    const { 0: allPancakeBunnyNfts , 1: setAllPancakeBunnyNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const isPBCollection = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .pancakeBunniesAddress */ .J;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchPancakeBunnies = async ()=>{
            // In order to not define special TS type just for PancakeBunnies display we're hacking a little bit into NftToken type.
            // On this page we just want to display all bunnies with their lowest prices and updates on the market
            // Since some bunnies might not be on the market at all, we don't refer to the redux nfts state (which stores NftToken with actual token ids)
            // We merely request from API all available bunny ids with their metadata and query subgraph for lowest price and latest updates.
            const response = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .pancakeBunniesAddress */ .J);
            if (!response) return;
            const { data  } = response;
            const bunnyIds = Object.keys(data);
            const [lowestPrices, latestUpdates] = await Promise.all([
                (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getAllPancakeBunniesLowestPrice */ .LU)(bunnyIds),
                (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getAllPancakeBunniesRecentUpdatedAt */ .nP)(bunnyIds), 
            ]);
            const allBunnies = bunnyIds.map((bunnyId)=>{
                return {
                    // tokenId here is just a dummy one to satisfy TS. TokenID does not play any role in gird display below
                    tokenId: data[bunnyId].name,
                    name: data[bunnyId].name,
                    description: data[bunnyId].description,
                    collectionAddress: _constants__WEBPACK_IMPORTED_MODULE_3__/* .pancakeBunniesAddress */ .J,
                    collectionName: data[bunnyId].collection.name,
                    image: data[bunnyId].image,
                    attributes: [
                        {
                            traitType: "bunnyId",
                            value: bunnyId,
                            displayType: null
                        }, 
                    ],
                    meta: {
                        currentAskPrice: lowestPrices[bunnyId],
                        updatedAt: latestUpdates[bunnyId]
                    }
                };
            });
            setAllPancakeBunnyNfts(allBunnies);
        };
        if (isPBCollection && !allPancakeBunnyNfts) {
            fetchPancakeBunnies();
        }
    }, [
        isPBCollection,
        allPancakeBunnyNfts
    ]);
    return allPancakeBunnyNfts;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAllPancakeBunnyNfts);


/***/ }),

/***/ 23746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useCompleteNft)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9270);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6429);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46737);
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88587);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46775);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15941);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17943);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_7__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useNftOwn = (collectionAddress, tokenId, marketData)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { reader: collectionContract  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useErc721CollectionContract */ .HQ)(collectionAddress);
    const { isInitialized: isProfileInitialized , profile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useProfile */ .Un)();
    const { data: tokenOwner  } = (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(collectionContract ? [
        "nft",
        "ownerOf",
        collectionAddress,
        tokenId
    ] : null, async ()=>collectionContract.ownerOf(tokenId));
    return (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(account && isProfileInitialized && tokenOwner ? [
        "nft",
        "own",
        collectionAddress,
        tokenId,
        marketData?.currentSeller
    ] : null, async ()=>{
        let isOwn = false;
        let nftIsProfilePic = false;
        let location;
        nftIsProfilePic = tokenId === profile?.tokenId?.toString() && collectionAddress === profile?.collectionAddress;
        const nftIsOnSale = marketData ? marketData?.currentSeller !== config_constants__WEBPACK_IMPORTED_MODULE_8__/* .NOT_ON_SALE_SELLER */ .Vc : false;
        if (nftIsOnSale) {
            isOwn = (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(marketData?.currentSeller) === (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(account);
            location = state_nftMarket_types__WEBPACK_IMPORTED_MODULE_5__/* .NftLocation.FORSALE */ .Fb.FORSALE;
        } else if (nftIsProfilePic) {
            isOwn = true;
            location = state_nftMarket_types__WEBPACK_IMPORTED_MODULE_5__/* .NftLocation.PROFILE */ .Fb.PROFILE;
        } else {
            isOwn = (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(tokenOwner) === (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .isAddress */ .UJ)(account);
            location = state_nftMarket_types__WEBPACK_IMPORTED_MODULE_5__/* .NftLocation.WALLET */ .Fb.WALLET;
        }
        return {
            isOwn,
            nftIsProfilePic,
            location
        };
    });
};
const useCompleteNft = (collectionAddress, tokenId)=>{
    const { data: nft , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(collectionAddress && tokenId ? [
        "nft",
        collectionAddress,
        tokenId
    ] : null, async ()=>{
        const metadata = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getNftApi */ .hb)(collectionAddress, tokenId);
        if (metadata) {
            const basicNft = {
                tokenId,
                collectionAddress,
                collectionName: metadata.collection.name,
                name: metadata.name,
                description: metadata.description,
                image: metadata.image,
                attributes: metadata.attributes
            };
            return basicNft;
        }
        return null;
    });
    const { data: marketData , mutate: refetchNftMarketData  } = (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(collectionAddress && tokenId ? [
        "nft",
        "marketData",
        collectionAddress,
        tokenId
    ] : null, async ()=>{
        const [onChainMarketDatas, marketDatas] = await Promise.all([
            (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getNftsOnChainMarketData */ .DS)(collectionAddress.toLowerCase(), [
                tokenId
            ]),
            (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getNftsMarketData */ .T5)({
                collection: collectionAddress.toLowerCase(),
                tokenId
            }, 1), 
        ]);
        const onChainMarketData = onChainMarketDatas[0];
        if (!marketDatas[0] && !onChainMarketData) return null;
        if (!onChainMarketData) return marketDatas[0];
        return {
            ...marketDatas[0],
            ...onChainMarketData
        };
    });
    const { data: nftOwn , mutate: refetchNftOwn , status  } = useNftOwn(collectionAddress, tokenId, marketData);
    const refetch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        await mutate();
        await refetchNftMarketData();
        await refetchNftOwn();
    }, [
        mutate,
        refetchNftMarketData,
        refetchNftOwn
    ]);
    return {
        combinedNft: nft ? {
            ...nft,
            marketData,
            location: nftOwn?.location ?? state_nftMarket_types__WEBPACK_IMPORTED_MODULE_5__/* .NftLocation.WALLET */ .Fb.WALLET
        } : undefined,
        isOwn: nftOwn?.isOwn || false,
        isProfilePic: nftOwn?.nftIsProfilePic || false,
        isLoading: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_1__/* .FetchStatus.Fetched */ .iF.Fetched,
        refetch
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q": () => (/* binding */ useGetCollectionDistributionPB)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46737);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70627);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25152);
/* harmony import */ var config_abi_pancakeBunnies_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60664);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79847);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6429);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_5__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const useGetCollectionDistribution = (collectionAddress)=>{
    const { data , status  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(collectionAddress ? [
        "distribution",
        collectionAddress
    ] : null, async ()=>(await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getCollectionDistributionApi */ .iE)(collectionAddress)).data);
    return {
        data,
        isFetching: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_6__/* .FetchStatus.Fetched */ .iF.Fetched
    };
};
const useGetCollectionDistributionPB = ()=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isFetching: false,
        data: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchTokens = async ()=>{
            setState((prevState)=>({
                    ...prevState,
                    isFetching: true
                }));
            let apiResponse;
            try {
                apiResponse = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .pancakeBunniesAddress */ .J);
                if (!apiResponse) {
                    setState((prevState)=>({
                            ...prevState,
                            isFetching: false
                        }));
                    return;
                }
            } catch (error) {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false
                    }));
                return;
            }
            // Use on chain data to get most updated totalSupply and bunnyCount data. Nft Api Data not updated frequently.
            const tokenIds = Object.keys(apiResponse.attributesDistribution);
            const bunnyCountCalls = tokenIds.map((tokenId)=>({
                    address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getPancakeBunniesAddress */ .GI)(),
                    name: "bunnyCount",
                    params: [
                        tokenId
                    ]
                }));
            try {
                const response = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_3__/* .multicallv2 */ .v)({
                    abi: config_abi_pancakeBunnies_json__WEBPACK_IMPORTED_MODULE_4__,
                    calls: bunnyCountCalls
                });
                const tokenListResponse = response.reduce((obj, tokenCount, index)=>{
                    return {
                        ...obj,
                        [tokenIds[index]]: {
                            ...apiResponse.data[index],
                            tokenCount: tokenCount[0].toNumber()
                        }
                    };
                }, {});
                setState({
                    isFetching: false,
                    data: tokenListResponse
                });
            } catch (error1) {
                // Use nft api data if on chain multicall fails
                const tokenListResponse1 = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default()(Object.entries(apiResponse.data).map(([tokenId, tokenData])=>{
                    return [
                        tokenId,
                        {
                            ...tokenData,
                            tokenCount: apiResponse.attributesDistribution[tokenId]
                        }
                    ];
                }));
                setState({
                    isFetching: false,
                    data: tokenListResponse1
                });
            }
        };
        fetchTokens();
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetCollectionDistribution);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9270);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70627);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17943);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15941);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useNftOwner = (nft, isOwnNft = false)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { 0: owner , 1: setOwner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoadingOwner , 1: setIsLoadingOwner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { reader: collectionContract  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useErc721CollectionContract */ .HQ)(nft.collectionAddress);
    const currentSeller = nft.marketData?.currentSeller;
    const pancakeProfileAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getPancakeProfileAddress */ .Re)();
    const { collectionAddress , tokenId  } = nft;
    const { data: tokenOwner  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(collectionContract ? [
        "nft",
        "ownerOf",
        collectionAddress,
        tokenId
    ] : null, async ()=>collectionContract.ownerOf(tokenId));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getOwner = async ()=>{
            try {
                if (isOwnNft && account) {
                    setOwner(account);
                } else if (tokenOwner && (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(tokenOwner) !== (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(pancakeProfileAddress)) {
                    setOwner(tokenOwner);
                } else {
                    setOwner(null);
                }
            } catch (error) {
                setOwner(null);
            } finally{
                setIsLoadingOwner(false);
            }
        };
        if (currentSeller && currentSeller !== config_constants__WEBPACK_IMPORTED_MODULE_4__/* .NOT_ON_SALE_SELLER */ .Vc) {
            setOwner(currentSeller);
            setIsLoadingOwner(false);
        } else {
            getOwner();
        }
    }, [
        account,
        isOwnNft,
        currentSeller,
        collectionContract,
        tokenId,
        tokenOwner,
        pancakeProfileAddress
    ]);
    return {
        owner,
        isLoadingOwner
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNftOwner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ usePancakeBunnyCheapestNft)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9270);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15941);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46737);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17943);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36806);
/* harmony import */ var _useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_1__, _useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_1__, _useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const fetchCheapestBunny = async (whereClause = {}, nftMetadata)=>{
    const nftsMarket = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getNftsMarketData */ .T5)(whereClause, 100, "currentAskPrice", "asc");
    if (!nftsMarket.length) return null;
    const nftsMarketTokenIds = nftsMarket.map((marketData)=>marketData.tokenId);
    const lowestPriceUpdatedBunny = await (0,_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__/* .getLowestUpdatedToken */ .AJ)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase(), nftsMarketTokenIds);
    const cheapestBunnyOfAccount = nftsMarket.filter((marketData)=>marketData.tokenId === lowestPriceUpdatedBunny?.tokenId).map((marketData)=>{
        const apiMetadata = (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getMetadataWithFallback */ .M2)(nftMetadata.data, marketData.otherId);
        const attributes = (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getPancakeBunniesAttributesField */ .rD)(marketData.otherId);
        const bunnyToken = (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .combineApiAndSgResponseToNftToken */ .HD)(apiMetadata, marketData, attributes);
        const updatedPrice = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatBigNumber */ .dp)(lowestPriceUpdatedBunny.currentAskPrice);
        return {
            ...bunnyToken,
            marketData: {
                ...bunnyToken.marketData,
                ...lowestPriceUpdatedBunny,
                currentAskPrice: updatedPrice
            }
        };
    });
    return cheapestBunnyOfAccount.length > 0 ? cheapestBunnyOfAccount[0] : null;
};
const usePancakeBunnyCheapestNft = (bunnyId, nftMetadata)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { data , status , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(nftMetadata && bunnyId ? [
        "cheapestBunny",
        bunnyId,
        account
    ] : null, async ()=>{
        const allCheapestBunnyClause = {
            collection: _constants__WEBPACK_IMPORTED_MODULE_6__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase(),
            otherId: bunnyId,
            isTradable: true
        };
        if (!account) {
            return fetchCheapestBunny(allCheapestBunnyClause, nftMetadata);
        }
        const cheapestBunnyOtherSellersClause = {
            collection: _constants__WEBPACK_IMPORTED_MODULE_6__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase(),
            currentSeller_not: account.toLowerCase(),
            otherId: bunnyId,
            isTradable: true
        };
        const cheapestBunnyOtherSellers = await fetchCheapestBunny(cheapestBunnyOtherSellersClause, nftMetadata);
        return cheapestBunnyOtherSellers ?? fetchCheapestBunny(allCheapestBunnyClause, nftMetadata);
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_3__/* .FAST_INTERVAL */ .sR
    });
    return {
        data,
        isFetched: [
            config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .FetchStatus.Failed */ .iF.Failed,
            config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .FetchStatus.Fetched */ .iF.Fetched
        ].includes(status),
        refresh: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ usePancakeBunnyOnSaleNfts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46737);
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91448);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17943);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_infinite__WEBPACK_IMPORTED_MODULE_2__]);
swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const fetchMarketDataNfts = async (bunnyId, nftMetadata, direction, page, itemsPerPage)=>{
    const whereClause = {
        collection: _constants__WEBPACK_IMPORTED_MODULE_7__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase(),
        otherId: bunnyId,
        isTradable: true
    };
    const nftsMarket = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsMarketData */ .T5)(whereClause, itemsPerPage, "currentAskPrice", direction, page * itemsPerPage);
    const moreTokensWithRequestedBunnyId = nftsMarket.map((marketData)=>{
        const apiMetadata = (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getMetadataWithFallback */ .M2)(nftMetadata.data, marketData.otherId);
        const attributes = (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getPancakeBunniesAttributesField */ .rD)(marketData.otherId);
        return (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .combineApiAndSgResponseToNftToken */ .HD)(apiMetadata, marketData, attributes);
    });
    return {
        newNfts: moreTokensWithRequestedBunnyId,
        isPageLast: moreTokensWithRequestedBunnyId.length < itemsPerPage
    };
};
const usePancakeBunnyOnSaleNfts = (bunnyId, nftMetadata, itemsPerPage)=>{
    const isLastPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const { 0: direction , 1: setDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("asc");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        isLastPage.current = false;
    }, [
        direction
    ]);
    const { data: nfts , status , size , setSize , isValidating , mutate ,  } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_2__["default"])((pageIndex, previousPageData)=>{
        if (!nftMetadata) return null;
        if (pageIndex !== 0 && previousPageData && !previousPageData.length) return null;
        return [
            bunnyId,
            direction,
            pageIndex,
            "pancakeBunnyOnSaleNfts"
        ];
    }, async (id, sortDirection, page)=>{
        const { newNfts , isPageLast  } = await fetchMarketDataNfts(id, nftMetadata, sortDirection, page, itemsPerPage);
        isLastPage.current = isPageLast;
        const nftsMarketTokenIds = newNfts.map((marketData)=>marketData.tokenId);
        const updatedMarketData = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsUpdatedMarketData */ .tU)(_constants__WEBPACK_IMPORTED_MODULE_7__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase(), nftsMarketTokenIds);
        if (!updatedMarketData) return newNfts;
        return updatedMarketData.sort((askInfoA, askInfoB)=>{
            return askInfoA.currentAskPrice.gt(askInfoB.currentAskPrice) ? 1 * (sortDirection === "desc" ? -1 : 1) : askInfoA.currentAskPrice.eq(askInfoB.currentAskPrice) ? 0 : -1 * (sortDirection === "desc" ? -1 : 1);
        }).map(({ tokenId , currentSeller , currentAskPrice  })=>{
            const nftData = newNfts.find((marketData)=>marketData.tokenId === tokenId);
            const isTradable = (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(currentSeller) !== config_constants__WEBPACK_IMPORTED_MODULE_5__/* .NOT_ON_SALE_SELLER */ .Vc;
            return {
                ...nftData,
                marketData: {
                    ...nftData.marketData,
                    isTradable,
                    currentSeller: isTradable ? currentSeller.toLowerCase() : nftData.marketData.currentSeller,
                    currentAskPrice: isTradable ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatBigNumber */ .dp)(currentAskPrice) : nftData.marketData.currentAskPrice
                }
            };
        });
    }, {
        refreshInterval: 10000,
        revalidateAll: true
    });
    return {
        nfts,
        refresh: mutate,
        isFetchingNfts: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .FetchStatus.Fetched */ .iF.Fetched,
        page: size,
        setPage: setSize,
        direction,
        setDirection,
        isLastPage: isLastPage.current,
        isValidating
    };
};

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

/***/ 94722:
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
            d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


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

/***/ 83502:
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
            d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"
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

/***/ 11324:
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
            d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 71892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44259);



const Icon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5ZM4.99999 15.5H8.99999V19.5H4.99999V15.5Z"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72993:
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
            d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"
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

/***/ 58097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

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

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

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

/***/ 50541:
/***/ ((module) => {

module.exports = require("lodash/memoize");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 87553:
/***/ ((module) => {

module.exports = require("lodash/noop");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 64042:
/***/ ((module) => {

module.exports = require("lodash/range");

/***/ }),

/***/ 9822:
/***/ ((module) => {

module.exports = require("lodash/reduce");

/***/ }),

/***/ 19318:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ 95594:
/***/ ((module) => {

module.exports = require("lodash/sum");

/***/ }),

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

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

/***/ 43860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 59819:
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ 53015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

module.exports = import("swr/immutable");;

/***/ }),

/***/ 91448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,6577,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,3430,4866,7379,4512,433,8393,1436,8015,9860,5639,4303,9480,6737,7569,8974,8930], () => (__webpack_exec__(81603)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[tokenId].js.map