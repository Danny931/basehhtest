"use strict";
exports.id = 7569;
exports.ids = [7569];
exports.modules = {

/***/ 52908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73221);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useIntersectionObserver = ()=>{
    const { 0: observerRefElement , 1: setObserverRefElement  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const intersectionObserverRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { 0: isIntersecting , 1: setIsIntersecting  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* .useIsomorphicEffect */ .Y)(()=>{
        const isSupported =  false && 0;
        if (isSupported) {
            if (!intersectionObserverRef.current && observerRefElement) {
                const checkObserverIsIntersecting = ([entry])=>{
                    setIsIntersecting(entry.isIntersecting);
                };
                intersectionObserverRef.current = new window.IntersectionObserver(checkObserverIsIntersecting, {
                    rootMargin: "0px",
                    threshold: 1
                });
                intersectionObserverRef.current.observe(observerRefElement);
            }
            if (intersectionObserverRef.current && !observerRefElement) {
                intersectionObserverRef.current.disconnect();
                setIsIntersecting(false);
            }
        } else {
            // If client doesnt support IntersectionObserver, set Intersecting to be true
            setIsIntersecting(true);
        }
        return ()=>{
            if (intersectionObserverRef.current) {
                intersectionObserverRef.current.disconnect();
            }
        };
    }, [
        observerRefElement
    ]);
    return {
        observerRef: setObserverRefElement,
        isIntersecting
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIntersectionObserver);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Su": () => (/* binding */ tryVideoNftMediaAtom),
/* harmony export */   "vE": () => (/* binding */ nftMarketFiltersAtom),
/* harmony export */   "xS": () => (/* binding */ nftMarketActivityFiltersAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const nftMarketFiltersAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const nftMarketActivityFiltersAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
const tryVideoNftMediaAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(true);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D7": () => (/* binding */ useGetNftOrdering),
/* harmony export */   "DI": () => (/* binding */ useGetNftFilters),
/* harmony export */   "IZ": () => (/* binding */ useGetShuffledCollections),
/* harmony export */   "YD": () => (/* binding */ useGetCollection),
/* harmony export */   "ly": () => (/* binding */ useGetNftActivityFilters),
/* harmony export */   "mN": () => (/* binding */ useApprovalNfts),
/* harmony export */   "q4": () => (/* binding */ useGetNftShowOnlyOnSale),
/* harmony export */   "t8": () => (/* binding */ useGetCollections),
/* harmony export */   "xm": () => (/* binding */ useTryVideoNftMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82451);
/* harmony import */ var config_abi_erc721_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53400);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30433);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15941);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79847);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46737);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, swr__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, _atoms__WEBPACK_IMPORTED_MODULE_12__]);
([jotai__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, swr__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, _atoms__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const DEFAULT_NFT_ORDERING = {
    field: "currentAskPrice",
    direction: "asc"
};
const DEFAULT_NFT_ACTIVITY_FILTER = {
    typeFilters: [],
    collectionFilters: []
};
const EMPTY_OBJECT = {};
const useGetCollections = ()=>{
    const { data , status  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])([
        "nftMarket",
        "collections"
    ], async ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollections */ .bG)());
    const collections = data ?? {};
    return {
        data: collections,
        status
    };
};
const useGetCollection = (collectionAddress)=>{
    const checksummedCollectionAddress = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(collectionAddress) || "";
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(checksummedCollectionAddress ? [
        "nftMarket",
        "collections",
        checksummedCollectionAddress.toLowerCase()
    ] : null, async ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollection */ ._N)(checksummedCollectionAddress));
    const collectionObject = data ?? {};
    return collectionObject[checksummedCollectionAddress];
};
const useGetShuffledCollections = ()=>{
    const { data  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])([
        "nftMarket",
        "collections"
    ], async ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollections */ .bG)());
    const collections = data ?? {};
    const { data: shuffledCollections , status  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(collections) ? [
        "nftMarket",
        "shuffledCollections"
    ] : null, ()=>{
        return lodash_shuffle__WEBPACK_IMPORTED_MODULE_9___default()(collections);
    });
    return {
        data: shuffledCollections,
        status
    };
};
const useApprovalNfts = (nftsInWallet)=>{
    const nftApprovalCalls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>nftsInWallet.map((nft)=>{
            const { tokenId , collectionAddress  } = nft;
            return {
                address: collectionAddress,
                name: "getApproved",
                params: [
                    tokenId
                ]
            };
        }), [
        nftsInWallet
    ]);
    const { data  } = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__/* .useSWRMulticall */ .d5)(config_abi_erc721_json__WEBPACK_IMPORTED_MODULE_3__, nftApprovalCalls);
    const profileAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)();
    const approvedTokenIds = Array.isArray(data) ? lodash_fromPairs__WEBPACK_IMPORTED_MODULE_10___default()(data.flat().map((address, index)=>[
            nftsInWallet[index].tokenId,
            profileAddress === address
        ])) : null;
    return {
        data: approvedTokenIds
    };
};
const useGetNftFilters = (collectionAddress)=>{
    const [nftMarketFilters] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_12__/* .nftMarketFiltersAtom */ .vE);
    return nftMarketFilters[collectionAddress]?.activeFilters ?? EMPTY_OBJECT;
};
const useGetNftOrdering = (collectionAddress)=>{
    const [nftMarketFilters] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_12__/* .nftMarketFiltersAtom */ .vE);
    return nftMarketFilters[collectionAddress]?.ordering ?? DEFAULT_NFT_ORDERING;
};
const useGetNftShowOnlyOnSale = (collectionAddress)=>{
    const [nftMarketFilters] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_12__/* .nftMarketFiltersAtom */ .vE);
    return nftMarketFilters[collectionAddress]?.showOnlyOnSale ?? true;
};
const useTryVideoNftMedia = ()=>{
    const [tryVideoNftMedia] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_12__/* .tryVideoNftMediaAtom */ .Su);
    return tryVideoNftMedia ?? true;
};
const useGetNftActivityFilters = (collectionAddress)=>{
    const [nftMarketActivityFilters] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_12__/* .nftMarketActivityFiltersAtom */ .xS);
    return nftMarketActivityFilters[collectionAddress] ?? DEFAULT_NFT_ACTIVITY_FILTER;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useNftStorage)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82451);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_nftMarket_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18504);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, state_nftMarket_atoms__WEBPACK_IMPORTED_MODULE_2__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, state_nftMarket_atoms__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const initialNftFilterState = {
    activeFilters: {},
    showOnlyOnSale: true,
    ordering: {
        field: "currentAskPrice",
        direction: "asc"
    }
};
const initialNftActivityFilterState = {
    typeFilters: [],
    collectionFilters: []
};
function useNftStorage() {
    const [nftMarketFilters, setNftMarketFilters] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(state_nftMarket_atoms__WEBPACK_IMPORTED_MODULE_2__/* .nftMarketFiltersAtom */ .vE);
    const [nftMarketActivityFilters, setNftMarketActivityFilters] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(state_nftMarket_atoms__WEBPACK_IMPORTED_MODULE_2__/* .nftMarketActivityFiltersAtom */ .xS);
    const [tryVideoNftMedia, setTryVideoNftMedia] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(state_nftMarket_atoms__WEBPACK_IMPORTED_MODULE_2__/* .tryVideoNftMediaAtom */ .Su);
    const addActivityTypeFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collection , field  })=>{
        if (nftMarketActivityFilters[collection]) {
            nftMarketActivityFilters[collection].typeFilters.push(field);
        } else {
            nftMarketActivityFilters[collection] = {
                ...lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftActivityFilterState),
                typeFilters: [
                    field
                ]
            };
        }
        setNftMarketActivityFilters({
            ...nftMarketActivityFilters
        });
    }, [
        setNftMarketActivityFilters,
        nftMarketActivityFilters
    ]);
    const addActivityCollectionFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collection  })=>{
        if (nftMarketActivityFilters[""]) {
            nftMarketActivityFilters[""].collectionFilters.push(collection);
        } else {
            nftMarketActivityFilters[""] = {
                ...lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftActivityFilterState),
                collectionFilters: [
                    collection
                ]
            };
        }
        setNftMarketActivityFilters({
            ...nftMarketActivityFilters
        });
    }, [
        setNftMarketActivityFilters,
        nftMarketActivityFilters
    ]);
    const removeActivityTypeFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collection , field  })=>{
        if (nftMarketActivityFilters[collection]) {
            nftMarketActivityFilters[collection].typeFilters = nftMarketActivityFilters[collection].typeFilters.filter((activeFilter)=>activeFilter !== field);
        }
        setNftMarketActivityFilters({
            ...nftMarketActivityFilters
        });
    }, [
        setNftMarketActivityFilters,
        nftMarketActivityFilters
    ]);
    const removeActivityCollectionFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collection  })=>{
        if (nftMarketActivityFilters[""]) {
            nftMarketActivityFilters[collection].collectionFilters = nftMarketActivityFilters[collection].collectionFilters.filter((activeFilter)=>activeFilter !== collection);
        }
        setNftMarketActivityFilters({
            ...nftMarketActivityFilters
        });
    }, [
        setNftMarketActivityFilters,
        nftMarketActivityFilters
    ]);
    const removeAllActivityFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((collectionAddress)=>{
        nftMarketActivityFilters[collectionAddress] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftActivityFilterState);
        setNftMarketActivityFilters({
            ...nftMarketActivityFilters
        });
    }, [
        nftMarketActivityFilters,
        setNftMarketActivityFilters
    ]);
    const removeAllActivityCollectionFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        nftMarketActivityFilters[""].collectionFilters = [];
        setNftMarketActivityFilters({
            ...nftMarketActivityFilters
        });
    }, [
        nftMarketActivityFilters,
        setNftMarketActivityFilters
    ]);
    const setShowOnlyOnSale = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collection , showOnlyOnSale  })=>{
        if (nftMarketFilters[collection]) {
            nftMarketFilters[collection].showOnlyOnSale = showOnlyOnSale;
        } else {
            nftMarketFilters[collection] = {
                ...lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftFilterState),
                showOnlyOnSale
            };
        }
        setNftMarketFilters({
            ...nftMarketFilters
        });
    }, [
        setNftMarketFilters,
        nftMarketFilters
    ]);
    const setOrdering = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collection , field , direction  })=>{
        if (nftMarketFilters[collection]) {
            nftMarketFilters[collection].ordering = {
                field,
                direction
            };
        } else {
            nftMarketFilters[collection] = {
                ...lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftFilterState),
                ordering: {
                    field,
                    direction
                }
            };
        }
        setNftMarketFilters({
            ...nftMarketFilters
        });
    }, [
        setNftMarketFilters,
        nftMarketFilters
    ]);
    const removeAllItemFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((collectionAddress)=>{
        nftMarketFilters[collectionAddress] = {
            ...lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftActivityFilterState)
        };
        setNftMarketFilters({
            ...nftMarketFilters
        });
    }, [
        nftMarketFilters,
        setNftMarketFilters
    ]);
    const updateItemFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ collectionAddress , nftFilters  })=>{
        if (nftMarketFilters[collectionAddress]) {
            nftMarketFilters[collectionAddress] = {
                ...nftMarketFilters[collectionAddress],
                activeFilters: {
                    ...nftFilters
                }
            };
        } else {
            nftMarketFilters[collectionAddress] = {
                ...lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(initialNftFilterState),
                activeFilters: {
                    ...nftFilters
                }
            };
        }
        setNftMarketFilters({
            ...nftMarketFilters
        });
    }, [
        nftMarketFilters,
        setNftMarketFilters
    ]);
    return {
        nftMarketFilters,
        nftMarketActivityFilters,
        tryVideoNftMedia,
        addActivityTypeFilters,
        addActivityCollectionFilters,
        removeActivityTypeFilters,
        removeActivityCollectionFilters,
        removeAllActivityFilters,
        removeAllActivityCollectionFilters,
        setShowOnlyOnSale,
        setOrdering,
        setTryVideoNftMedia,
        removeAllItemFilters,
        updateItemFilters
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Db": () => (/* binding */ CollectionLink),
/* harmony export */   "IB": () => (/* binding */ StyledSortButton),
/* harmony export */   "Tk": () => (/* binding */ TwoColumnsContainer),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "_v": () => (/* binding */ RoundedImage),
/* harmony export */   "cq": () => (/* binding */ TableHeading),
/* harmony export */   "em": () => (/* binding */ SmallRoundedImage),
/* harmony export */   "qO": () => (/* binding */ ButtonContainer),
/* harmony export */   "u$": () => (/* binding */ CollectibleRowContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const TwoColumnsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-0"
})`
  gap: 22px;
  align-items: flex-start;
  & > div:first-child {
    flex: 1;
    gap: 20px;
  }
  & > div:last-child {
    flex: 2;
  }
`;
const RoundedImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-1"
})`
  height: max-content;
  border-radius: ${({ theme  })=>theme.radii.default};
  overflow: hidden;
  & > img {
    object-fit: contain;
  }
`;
const SmallRoundedImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-2"
})`
  & > img {
    border-radius: ${({ theme  })=>theme.radii.default};
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-3"
})`
  gap: 24px;
`;
const CollectionLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-4"
})`
  color: ${({ theme  })=>theme.colors.primary};
  display: block;
  font-weight: 600;
  margin-top: 16px;

  ${({ theme  })=>theme.mediaQueries.lg} {
    margin-top: 50px;
  }
`;
const CollectibleRowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-5"
})`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
const StyledSortButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-754f5974-6"
})`
  border: none;
  cursor: pointer;
  background: none;
  color: ${({ theme  })=>theme.colors.secondary};
  font-weight: bold;
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-7"
})`
  text-align: right;
  padding-right: 24px;
`;
const TableHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-754f5974-8"
})`
  border-bottom: ${({ theme  })=>`1px solid ${theme.colors.cardBorder}`};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36695);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var _PreviewImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17801);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85235);
/* harmony import */ var _LocationTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52208);
/* harmony import */ var _hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35407);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36806);
/* harmony import */ var _NFTMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, _PreviewImage__WEBPACK_IMPORTED_MODULE_4__, _styles__WEBPACK_IMPORTED_MODULE_5__, _LocationTag__WEBPACK_IMPORTED_MODULE_6__, _hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__, _NFTMedia__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, _PreviewImage__WEBPACK_IMPORTED_MODULE_4__, _styles__WEBPACK_IMPORTED_MODULE_5__, _LocationTag__WEBPACK_IMPORTED_MODULE_6__, _hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__, _NFTMedia__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CollectibleCardBody = ({ nft , nftLocation , currentAskPrice , isUserNft ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { name  } = nft;
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__/* .useBNBBusdPrice */ .Hf)();
    const isPancakeBunny = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(nft.collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_8__/* .pancakeBunniesAddress */ .J;
    const { isFetching , lowestPrice  } = (0,_hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_7__/* .useGetLowestPriceFromNft */ .O3)(nft);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        p: "8px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NFTMedia__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                as: _PreviewImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                nft: nft,
                height: 320,
                width: 320,
                mb: "8px",
                borderRadius: "8px"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    nft?.collectionName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        mb: "8px",
                        children: nft?.collectionName
                    }),
                    nftLocation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocationTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        nftLocation: nftLocation
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                as: "h4",
                fontWeight: "600",
                mb: "8px",
                children: name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                borderTop: "1px solid",
                borderTopColor: "cardBorder",
                pt: "8px",
                children: [
                    isPancakeBunny && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .LowestPriceMetaRow */ .QG, {
                        lowestPrice: lowestPrice,
                        isFetching: isFetching,
                        bnbBusdPrice: bnbBusdPrice
                    }),
                    currentAskPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .MetaRow */ .Qf, {
                        title: isUserNft ? t("Your price") : t("Asking price"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .CostLabel */ .NR, {
                            cost: currentAskPrice,
                            bnbBusdPrice: bnbBusdPrice
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectibleCardBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85235);
/* harmony import */ var _CardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_1__, _CardBody__WEBPACK_IMPORTED_MODULE_2__]);
([_styles__WEBPACK_IMPORTED_MODULE_1__, _CardBody__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const CollectibleActionCard = ({ nft , nftLocation , currentAskPrice , isUserNft , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .StyledCollectibleCard */ .VD, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardBody__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            nft: nft,
            nftLocation: nftLocation,
            currentAskPrice: currentAskPrice,
            isUserNft: isUserNft
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectibleActionCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12849);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85235);
/* harmony import */ var _CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70134);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, _CardBody__WEBPACK_IMPORTED_MODULE_3__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, _CardBody__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CollectibleLinkCard = ({ nft , nftLocation , currentAskPrice , ...props })=>{
    const urlId = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(nft.collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_4__/* .pancakeBunniesAddress */ .J ? nft.attributes[0].value : nft.tokenId;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledCollectibleCard */ .VD, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            to: `${_constants__WEBPACK_IMPORTED_MODULE_4__/* .nftsBaseUrl */ .V}/collections/${nft.collectionAddress}/${urlId}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardBody__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                nft: nft,
                nftLocation: nftLocation,
                currentAskPrice: currentAskPrice
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectibleLinkCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CollectionAvatar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61576);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12849);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CollectionAvatar = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-65e3c008-0"
})`
  left: 0;
  position: absolute;
  top: -32px;
  border: 4px white solid;
`;
const StyledHotCollectionCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-65e3c008-1"
})`
  border-radius: 8px;
  border-bottom-left-radius: 56px;
  transition: opacity 200ms;

  & > div {
    border-radius: 8px;
    border-bottom-left-radius: 56px;
  }

  ${({ theme  })=>theme.mediaQueries.lg} {
    ${({ disabled  })=>disabled ? "" : styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
            &:hover {
              cursor: pointer;
              opacity: 0.6;
            }
          `}
  }
`;
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-65e3c008-2"
})`
  border-radius: 4px;
`;
const CollectionCard = ({ bgSrc , avatarSrc , collectionName , url , disabled , children ,  })=>{
    const renderBody = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            p: "8px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                    src: bgSrc,
                    height: 125,
                    width: 375
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    position: "relative",
                    height: "65px",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    py: "8px",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectionAvatar, {
                            src: avatarSrc,
                            width: 96,
                            height: 96
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            color: disabled ? "textDisabled" : "body",
                            as: "h3",
                            mb: children ? "8px" : "0",
                            children: collectionName
                        }),
                        children
                    ]
                })
            ]
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledHotCollectionCard, {
        disabled: disabled,
        "data-test": "hot-collection-card",
        children: url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            to: url,
            children: renderBody()
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                cursor: "default"
            },
            children: renderBody()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88587);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8483);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82420);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60586);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LocationTag = ({ nftLocation  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const WalletTag = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            justifyContent: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    height: "12px",
                    color: "secondary"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    color: "secondary",
                    fontSize: "14px",
                    children: t("Wallet")
                })
            ]
        });
    };
    const ForSaleTag = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            justifyContent: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    height: "12px",
                    color: "failure"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    color: "failure",
                    fontSize: "14px",
                    children: t("For sale")
                })
            ]
        });
    };
    const ProfilePicTag = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            justifyContent: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    height: "12px",
                    color: "textSubtle"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    fontSize: "14px",
                    children: t("Profile")
                })
            ]
        });
    };
    const tagsConfig = {
        [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_1__/* .NftLocation.WALLET */ .Fb.WALLET]: WalletTag(),
        [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_1__/* .NftLocation.PROFILE */ .Fb.PROFILE]: ProfilePicTag(),
        [state_nftMarket_types__WEBPACK_IMPORTED_MODULE_1__/* .NftLocation.FORSALE */ .Fb.FORSALE]: ForSaleTag()
    };
    return tagsConfig[nftLocation];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationTag);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlaceholderImage = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        style: {
            borderRadius: "8px",
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%"
        },
        alt: "nft placeholder",
        src: "data:image/png;base64,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"
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderImage);


/***/ }),

/***/ 17801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51000);
/* harmony import */ var _PlaceholderImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77981);



const PreviewImage = ({ height =64 , width =64 , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        loadingPlaceholder: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlaceholderImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
        height: height,
        width: width,
        style: {
            borderRadius: "8px"
        },
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VK": () => (/* reexport safe */ _CollectibleActionCard__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "ts": () => (/* reexport safe */ _CollectibleLinkCard__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "zt": () => (/* reexport safe */ _CollectionCard__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _CollectibleLinkCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68415);
/* harmony import */ var _CollectibleActionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10682);
/* harmony import */ var _CollectionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectibleLinkCard__WEBPACK_IMPORTED_MODULE_0__, _CollectibleActionCard__WEBPACK_IMPORTED_MODULE_1__, _CollectionCard__WEBPACK_IMPORTED_MODULE_2__]);
([_CollectibleLinkCard__WEBPACK_IMPORTED_MODULE_0__, _CollectibleActionCard__WEBPACK_IMPORTED_MODULE_1__, _CollectionCard__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kd": () => (/* binding */ BNBAmountLabel),
/* harmony export */   "NR": () => (/* binding */ CostLabel),
/* harmony export */   "QG": () => (/* binding */ LowestPriceMetaRow),
/* harmony export */   "Qf": () => (/* binding */ MetaRow),
/* harmony export */   "VD": () => (/* binding */ StyledCollectibleCard)
/* harmony export */ });
/* unused harmony exports Footer, NftTag, ProfileNftTag, WalletNftTag, SellingNftTag */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37926);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Footer = ({ children , ...props })=>/*#__PURE__*/ _jsx(Box, {
        borderTop: [
            null,
            null,
            null,
            "1px solid"
        ],
        borderColor: "cardBorder",
        pt: "8px",
        ...props,
        children: children
    });
const BNBAmountLabel = ({ amount , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        alignItems: "center",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                width: "16px",
                mx: "4px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fontWeight: "600",
                children: amount.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 5
                })
            })
        ]
    });
const CostLabel = ({ cost , bnbBusdPrice , ...props })=>{
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_6__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, cost);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        alignItems: "center",
        ...props,
        children: [
            priceInUsd > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fontSize: "12px",
                color: "textSubtle",
                children: `($${priceInUsd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })})`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BNBAmountLabel, {
                amount: cost
            })
        ]
    });
};
const MetaRow = ({ title , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fontSize: "12px",
                color: "textSubtle",
                maxWidth: "120px",
                ellipsis: true,
                title: title,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: children
            })
        ]
    });
const NftTag = ({ icon , color ="text" , children , ...props })=>/*#__PURE__*/ _jsxs(Flex, {
        display: "inline-flex",
        alignItems: "center",
        height: "24px",
        ...props,
        children: [
            icon,
            /*#__PURE__*/ _jsx(Text, {
                color: color,
                fontSize: "14px",
                fontWeight: "600",
                children: children
            })
        ]
    });
const ProfileNftTag = (props)=>{
    const { t  } = useTranslation();
    return /*#__PURE__*/ _jsx(NftTag, {
        icon: /*#__PURE__*/ _jsx(CameraIcon, {
            mr: "4px",
            width: "16px",
            color: "textSubtle"
        }),
        color: "textSubtle",
        ...props,
        children: t("Profile")
    });
};
const WalletNftTag = (props)=>{
    const { t  } = useTranslation();
    return /*#__PURE__*/ _jsx(NftTag, {
        icon: /*#__PURE__*/ _jsx(WalletFilledIcon, {
            mr: "4px",
            width: "16px",
            color: "secondary"
        }),
        color: "secondary",
        ...props,
        children: t("Wallet")
    });
};
const SellingNftTag = (props)=>{
    const { t  } = useTranslation();
    return /*#__PURE__*/ _jsx(NftTag, {
        icon: /*#__PURE__*/ _jsx(SellIcon, {
            mr: "4px",
            width: "16px",
            color: "failure"
        }),
        color: "failure",
        ...props,
        children: t("Selling")
    });
};
const StyledCollectibleCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-512543e8-0"
})`
  border-radius: 8px;
  max-width: 320px;
  transition: opacity 200ms;

  & > div {
    border-radius: 8px;
  }

  ${({ theme  })=>theme.mediaQueries.lg} {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
const LowestPriceMetaRow = ({ lowestPrice , isFetching , bnbBusdPrice  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    if (!isFetching && !lowestPrice) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetaRow, {
        title: t("Lowest price"),
        children: isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            height: "24px",
            width: "30px"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CostLabel, {
            cost: lowestPrice,
            bnbBusdPrice: bnbBusdPrice
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AspectRatio */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52908);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93304);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36204);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11095);
/* harmony import */ var _Collection_IndividualNFTPage_shared_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75849);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__, state__WEBPACK_IMPORTED_MODULE_5__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_6__, _Collection_IndividualNFTPage_shared_styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__, state__WEBPACK_IMPORTED_MODULE_5__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_6__, _Collection_IndividualNFTPage_shared_styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledAspectRatio = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a3c8320c-0"
})`
  position: absolute;
  inset: 0;
`;
const AspectRatio = ({ ratio , children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        width: "100%",
        height: 0,
        pb: `${100 / ratio}%`,
        position: "relative",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledAspectRatio, {
            children: children
        })
    });
const NFTMedia = ({ width , height , nft , borderRadius ="default" , as , ...props })=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { setTryVideoNftMedia  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_6__/* .useNftStorage */ .q)();
    const tryVideoNftMedia = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useTryVideoNftMedia */ .xm)();
    const vidRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (vidRef.current) {
            if (isIntersecting) {
                vidRef.current.play().catch((error)=>{
                    if (error instanceof DOMException && error.name === "NotAllowedError") {
                        setTryVideoNftMedia(false);
                    }
                });
            } else {
                vidRef.current.pause();
            }
        }
    }, [
        dispatch,
        isIntersecting,
        setTryVideoNftMedia
    ]);
    if (tryVideoNftMedia && (nft?.image.webm || nft?.image.mp4)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AspectRatio, {
            ratio: width / height,
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: observerRef
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    ref: vidRef,
                    borderRadius: borderRadius,
                    as: "video",
                    width: "100%",
                    height: "100%",
                    muted: true,
                    loop: true,
                    playsInline: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            src: nft.image.webm,
                            type: "video/webm"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            src: nft.image.mp4,
                            type: "video/mp4"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Collection_IndividualNFTPage_shared_styles__WEBPACK_IMPORTED_MODULE_7__/* .RoundedImage */ ._v, {
        width: width,
        height: height,
        src: nft?.image.gif || nft?.image.thumbnail,
        alt: nft?.name,
        as: as,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NFTMedia);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AJ": () => (/* binding */ getLowestUpdatedToken),
/* harmony export */   "O3": () => (/* binding */ useGetLowestPriceFromNft),
/* harmony export */   "lm": () => (/* binding */ useGetLowestPriceFromBunnyId)
/* harmony export */ });
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46737);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5305);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getBunnyIdFromNft = (nft)=>{
    const bunnyId = nft.attributes?.find((attr)=>attr.traitType === "bunnyId")?.value;
    return bunnyId ? bunnyId.toString() : null;
};
const getLowestUpdatedToken = async (collectionAddress, nftsMarketTokenIds)=>{
    const updatedMarketData = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsUpdatedMarketData */ .tU)(collectionAddress.toLowerCase(), nftsMarketTokenIds);
    if (!updatedMarketData) return null;
    return updatedMarketData.filter((tokenUpdatedPrice)=>{
        return tokenUpdatedPrice && tokenUpdatedPrice.currentAskPrice.gt(0) && tokenUpdatedPrice.isTradable;
    }).sort((askInfoA, askInfoB)=>{
        return askInfoA.currentAskPrice.gt(askInfoB.currentAskPrice) ? 1 : askInfoA.currentAskPrice.eq(askInfoB.currentAskPrice) ? 0 : -1;
    })[0];
};
const useGetLowestPriceFromBunnyId = (bunnyId)=>{
    const { data , status  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(bunnyId ? [
        "bunnyLowestPrice",
        bunnyId
    ] : null, async ()=>{
        const response = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsMarketData */ .T5)({
            otherId: bunnyId,
            isTradable: true
        }, 100, "currentAskPrice", "asc");
        if (!response.length) return null;
        const nftsMarketTokenIds = response.map((marketData)=>marketData.tokenId);
        const lowestPriceUpdatedBunny = await getLowestUpdatedToken(_constants__WEBPACK_IMPORTED_MODULE_5__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase(), nftsMarketTokenIds);
        if (lowestPriceUpdatedBunny) {
            return parseFloat((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatBigNumber */ .dp)(lowestPriceUpdatedBunny.currentAskPrice));
        }
        return null;
    });
    return {
        isFetching: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Fetched */ .iF.Fetched,
        lowestPrice: data
    };
};
const useGetLowestPriceFromNft = (nft)=>{
    const isPancakeBunny = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .UJ)(nft.collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_5__/* .pancakeBunniesAddress */ .J;
    const bunnyIdAttr = isPancakeBunny && getBunnyIdFromNft(nft);
    return useGetLowestPriceFromBunnyId(bunnyIdAttr);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 51000:
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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97391);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58457);
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54518);






const StyledBackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Wrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d4fed171-0"
})`
  background-repeat: no-repeat;
  background-size: contain;
`;
const BackgroundImage = ({ loadingPlaceholder , src , width , height , ...props })=>{
    const { 0: isLoaded , 1: setIsLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const placeholder = loadingPlaceholder || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Placeholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let observer;
        const isSupported =  false && 0;
        if (ref.current && isSupported) {
            const div = ref.current;
            observer = new window.IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    const { isIntersecting  } = entry;
                    if (isIntersecting) {
                        if (src) {
                            // Load the image via an image element so we can show a placeholder until the image is downloaded
                            const img = document.createElement("img");
                            img.onload = ()=>{
                                div.style.backgroundImage = `url("${src}")`;
                                setIsLoaded(true);
                            };
                            img.src = src;
                        }
                        observer.disconnect();
                    }
                });
            }, _options__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
            observer.observe(div);
        }
        return ()=>{
            if (observer) {
                observer.disconnect();
            }
        };
    }, [
        src,
        setIsLoaded
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBackgroundImage, {
        ref: ref,
        width: width,
        height: height,
        ...props,
        children: !isLoaded && placeholder
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundImage);


/***/ }),

/***/ 61576:
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
/* harmony import */ var _Svg_Icons_BunnyPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67013);
/* harmony import */ var _BackgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51000);





const StyledProfileAvatar = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c84637f9-0"
})`
  border-radius: 50%;
`;
const StyledBunnyPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Svg_Icons_BunnyPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c84637f9-1"
})`
  height: 100%;
  width: 100%;
`;
const ProfileAvatar = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledProfileAvatar, {
        loadingPlaceholder: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBunnyPlaceholder, {}),
        ...props
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAvatar);


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

/***/ 46822:
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
        viewBox: "0 0 96 96",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "48",
                cy: "48",
                r: "48",
                fill: "#F0B90B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 60586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44259);



const Icon = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15 12.1757C15 13.8325 13.6569 15.1757 12 15.1757C10.3431 15.1757 9 13.8325 9 12.1757C9 10.5188 10.3431 9.17566 12 9.17566C13.6569 9.17566 15 10.5188 15 12.1757Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.83 4.17566H20C21.1 4.17566 22 5.07566 22 6.17566V18.1757C22 19.2757 21.1 20.1757 20 20.1757H4C2.9 20.1757 2 19.2757 2 18.1757V6.17566C2 5.07566 2.9 4.17566 4 4.17566H7.17L8.4 2.82566C8.78 2.41566 9.32 2.17566 9.88 2.17566H14.12C14.68 2.17566 15.22 2.41566 15.59 2.82566L16.83 4.17566ZM7 12.1757C7 14.9357 9.24 17.1757 12 17.1757C14.76 17.1757 17 14.9357 17 12.1757C17 9.41566 14.76 7.17566 12 7.17566C9.24 7.17566 7 9.41566 7 12.1757Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 82420:
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
            d: "M21.9 9.78661L20.85 5.41661C20.63 4.51661 19.85 3.89661 18.94 3.89661H16.73H14.72H13H11H9.27999H7.25999H5.04999C4.14999 3.89661 3.35999 4.52661 3.14999 5.41661L2.09999 9.78661C1.85999 10.8066 2.07999 11.8466 2.71999 12.6666C2.79999 12.7766 2.90999 12.8566 2.99999 12.9566V19.8966C2.99999 20.9966 3.89999 21.8966 4.99999 21.8966H19C20.1 21.8966 21 20.9966 21 19.8966V12.9566C21.09 12.8666 21.2 12.7766 21.28 12.6766C21.92 11.8566 22.15 10.8066 21.9 9.78661ZM7.01999 5.89661L6.43999 10.7566C6.35999 11.4066 5.83999 11.8966 5.22999 11.8966C4.73999 11.8966 4.42999 11.6066 4.29999 11.4266C4.03999 11.0966 3.94999 10.6666 4.04999 10.2566L5.04999 5.89661H7.01999ZM18.91 5.88661L19.96 10.2566C20.06 10.6766 19.97 11.0966 19.71 11.4266C19.57 11.6066 19.27 11.8966 18.77 11.8966C18.16 11.8966 17.63 11.4066 17.56 10.7566L16.98 5.89661L18.91 5.88661ZM15.51 10.4166C15.56 10.8066 15.44 11.1966 15.18 11.4866C14.95 11.7466 14.63 11.8966 14.22 11.8966C13.55 11.8966 13 11.3066 13 10.5866V5.89661H14.96L15.51 10.4166ZM11 10.5866C11 11.3066 10.45 11.8966 9.70999 11.8966C9.36999 11.8966 9.05999 11.7466 8.81999 11.4866C8.56999 11.1966 8.44999 10.8066 8.48999 10.4166L9.03999 5.89661H11V10.5866ZM18 19.8966H5.99999C5.44999 19.8966 4.99999 19.4466 4.99999 18.8966V13.8666C5.07999 13.8766 5.14999 13.8966 5.22999 13.8966C6.09999 13.8966 6.88999 13.5366 7.46999 12.9466C8.06999 13.5466 8.86999 13.8966 9.77999 13.8966C10.65 13.8966 11.43 13.5366 12.01 12.9666C12.6 13.5366 13.4 13.8966 14.3 13.8966C15.14 13.8966 15.94 13.5466 16.54 12.9466C17.12 13.5366 17.91 13.8966 18.78 13.8966C18.86 13.8966 18.93 13.8766 19.01 13.8666V18.8966C19 19.4466 18.55 19.8966 18 19.8966Z"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=7569.js.map