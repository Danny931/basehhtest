"use strict";
exports.id = 1448;
exports.ids = [1448,9778,8618];
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

/***/ 74470:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77399);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94416);
/* harmony import */ var state_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15444);





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ad63ee3f-0"
})`
  margin-left: -8px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-left: 0;
  }
`;
const ToggleView = ({ idPrefix , viewMode , onToggle ,  })=>{
    const handleToggleCard = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (viewMode !== state_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode.CARD */ .wO.CARD) {
            onToggle(state_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode.CARD */ .wO.CARD);
        }
    }, [
        onToggle,
        viewMode
    ]);
    const handleToggleTable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (viewMode !== state_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode.TABLE */ .wO.TABLE) {
            onToggle(state_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode.TABLE */ .wO.TABLE);
        }
    }, [
        onToggle,
        viewMode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "text",
                scale: "sm",
                id: `${idPrefix}CardView`,
                onClick: handleToggleCard,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    color: viewMode === state_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode.CARD */ .wO.CARD ? "primary" : "textDisabled"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "text",
                scale: "sm",
                id: `${idPrefix}TableView`,
                onClick: handleToggleTable,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    color: viewMode === state_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode.TABLE */ .wO.TABLE ? "primary" : "textDisabled"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ TokenImage),
/* harmony export */   "q": () => (/* binding */ TokenPairImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83548);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27387);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);



const getImageUrlFromToken = (token)=>{
    const address = token?.isNative ? token.wrapped.address : token.address;
    if (token.chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC) {
        return `/images/${token.chainId}/tokens/${address}.png`;
    }
    return `/images/tokens/${address}.png`;
};
const TokenPairImage = ({ primaryToken , secondaryToken , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        primarySrc: getImageUrlFromToken(primaryToken),
        secondarySrc: getImageUrlFromToken(secondaryToken),
        ...props
    });
};
const TokenImage = ({ token , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        src: getImageUrlFromToken(token),
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FLAG_FARM)
/* harmony export */ });
const FLAG_FARM = "pkg";


/***/ }),

/***/ 99381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Use this hook when you want to animate something when it appears on the screen (e.g. when some prop set to true)
 * but when its not on the screen you want it to be fully unmounted and not just hidden or height 0.
 * This is especially useful when you have a table of 100s rows and each row has expandable element that appears on click.
 * If you just set the expanding animation while keeping inactive elements mounted all those 100 elements will load the DOM,
 * and if they all receive updates via props you're looking at 100 DOM updates for hidden elements.
 * This hook "shows" element immediately when the isMounted is true
 * but keeps element mounted for delayTime to let unmounting animation happen, after which you unmount element completely.
 * delayTime should be the same as animation time in most cases.
 */ const useDelayedUnmount = (isMounted, delayTime)=>{
    const { 0: shouldRender , 1: setShouldRender  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let timeoutId;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(()=>setShouldRender(false), delayTime);
        }
        return ()=>clearTimeout(timeoutId);
    }, [
        isMounted,
        delayTime,
        shouldRender
    ]);
    return shouldRender;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDelayedUnmount);


/***/ }),

/***/ 34195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ featureFarmApiAtom),
/* harmony export */   "y": () => (/* binding */ useFeatureFlag)
/* harmony export */ });
/* harmony import */ var config_flag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20380);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const storage = {
    ...(0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>sessionStorage),
    delayInit: true
};
const featureFarmApiAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)("feature-farm-api", config_flag__WEBPACK_IMPORTED_MODULE_2__/* .FLAG_FARM */ .u, // @ts-ignore
storage);
featureFarmApiAtom.onMount = (set)=>{
    const params = new URL(window.location.href).searchParams;
    const flag = params.get("use");
    if (flag === "farmApi") {
        set("api");
    }
};
function useFeatureFlag(featureAtom) {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtomValue)(featureAtom);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 68175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useSlowRefreshEffect),
/* harmony export */   "a": () => (/* binding */ useFastRefreshEffect)
/* harmony export */ });
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17943);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15941);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const EMPTY_ARRAY = [];
function useFastRefreshEffect(effect, deps) {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data =0  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(chainId && [
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .FAST_INTERVAL */ .sR,
        "blockNumber",
        chainId
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect.bind(null, data), [
        data,
        ...deps || EMPTY_ARRAY
    ]);
}
function useSlowRefreshEffect(effect, deps) {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data =0  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(chainId && [
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOW_INTERVAL */ .KI,
        "blockNumber",
        chainId
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect.bind(null, data), [
        data,
        ...deps || EMPTY_ARRAY
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cs": () => (/* binding */ usePollFarmsWithUserData),
/* harmony export */   "Dx": () => (/* binding */ useFarmUser),
/* harmony export */   "E2": () => (/* binding */ useFarms),
/* harmony export */   "Iu": () => (/* binding */ usePriceCakeBusd),
/* harmony export */   "f5": () => (/* binding */ useFarmsLength),
/* harmony export */   "f6": () => (/* binding */ useFarmFromPid),
/* harmony export */   "w5": () => (/* binding */ useLpTokenPrice)
/* harmony export */ });
/* unused harmony exports usePollCoreFarmData, useFarmsPoolLength, useFarmFromLpSymbol, useBusdPriceFromPid */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17943);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36695);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36204);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79847);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85576);
/* harmony import */ var views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62704);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12895);
/* harmony import */ var hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68175);
/* harmony import */ var hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34195);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65498);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44868);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__, _selectors__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__, _selectors__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function useFarmsLength() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(chainId ? [
        "farmsLength",
        chainId
    ] : null, async ()=>{
        const mc = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getMasterchefContract */ .aE)(undefined, chainId);
        return (await mc.poolLength()).toNumber();
    });
}
const usePollFarmsWithUserData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { proxyAddress , proxyCreated , isLoading: isProxyContractLoading ,  } = (0,views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .featureFarmApiAtom */ .x);
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(chainId ? [
        "publicFarmData",
        chainId
    ] : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__.getFarmConfig)(chainId);
        const pids = farmsConfig.map((farmToFetch)=>farmToFetch.pid);
        dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmsPublicDataAsync */ .eG)({
            pids,
            chainId,
            flag: farmFlag
        }));
    }, {
        refreshInterval: farmFlag === "api" ? 50 * 1000 : config_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOW_INTERVAL */ .KI
    });
    const name = proxyCreated ? [
        "farmsWithUserData",
        account,
        proxyAddress,
        chainId
    ] : [
        "farmsWithUserData",
        account,
        chainId
    ];
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(account && chainId && !isProxyContractLoading ? name : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__.getFarmConfig)(chainId);
        const pids = farmsConfig.map((farmToFetch)=>farmToFetch.pid);
        const params = proxyCreated ? {
            account,
            pids,
            proxyAddress,
            chainId
        } : {
            account,
            pids,
            chainId
        };
        dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmUserDataAsync */ .IV)(params));
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOW_INTERVAL */ .KI
    });
};
/**
 * Fetches the "core" farm data used globally
 * 2 = CAKE-BNB LP
 * 3 = BUSD-BNB LP
 */ const coreFarmPIDs = {
    56: [
        2,
        3
    ],
    97: [
        4,
        10
    ],
    5: [
        13,
        11
    ],
    1: [
        124,
        125
    ]
};
const usePollCoreFarmData = ()=>{
    const dispatch = useAppDispatch();
    const { chainId  } = useActiveWeb3React();
    const farmFlag = useFeatureFlag(featureFarmApiAtom);
    useEffect(()=>{
        if (chainId) {
            dispatch(fetchInitialFarmsData({
                chainId
            }));
        }
    }, [
        chainId,
        dispatch
    ]);
    useFastRefreshEffect(()=>{
        if (chainId && farmFlag !== "api") {
            dispatch(fetchFarmsPublicDataAsync({
                pids: coreFarmPIDs[chainId],
                chainId,
                flag: farmFlag
            }));
        }
    }, [
        dispatch,
        chainId,
        farmFlag
    ]);
};
const useFarms = ()=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .farmSelector */ .b4)(chainId), [
        chainId
    ]));
};
const useFarmsPoolLength = ()=>{
    return useSelector((state)=>state.farms.poolLength);
};
const useFarmFromPid = (pid)=>{
    const farmFromPid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeFarmFromPidSelector */ .Fy)(pid), [
        pid
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(farmFromPid);
};
const useFarmFromLpSymbol = (lpSymbol)=>{
    const farmFromLpSymbol = useMemo(()=>farmFromLpSymbolSelector(lpSymbol), [
        lpSymbol
    ]);
    return useSelector(farmFromLpSymbol);
};
const useFarmUser = (pid)=>{
    const farmFromPidUser = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeUserFarmFromPidSelector */ .RL)(pid), [
        pid
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(farmFromPidUser);
};
// Return the base token price for a farm, from a given pid
const useBusdPriceFromPid = (pid)=>{
    const busdPriceFromPid = useMemo(()=>makeBusdPriceFromPidSelector(pid), [
        pid
    ]);
    return useSelector(busdPriceFromPid);
};
const useLpTokenPrice = (symbol)=>{
    const lpTokenPriceFromLpSymbol = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeLpTokenPriceFromLpSymbolSelector */ .Ud)(symbol), [
        symbol
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(lpTokenPriceFromLpSymbol);
};
/**
 * @deprecated use the BUSD hook in /hooks
 */ const usePriceCakeBusd = ({ forceMainnet  } = {
    forceMainnet: false
})=>{
    const price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__/* .useCakeBusdPrice */ .S9)({
        forceMainnet
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>price ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(price.toSignificant(6)) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_8__/* .BIG_ZERO */ .HW, [
        price
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fy": () => (/* binding */ makeFarmFromPidSelector),
/* harmony export */   "RL": () => (/* binding */ makeUserFarmFromPidSelector),
/* harmony export */   "Ud": () => (/* binding */ makeLpTokenPriceFromLpSymbolSelector),
/* harmony export */   "b4": () => (/* binding */ farmSelector)
/* harmony export */ });
/* unused harmony exports makeBusdPriceFromPidSelector, priceCakeFromPidSelector, farmFromLpSymbolSelector */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64150);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45366);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3256);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__]);
_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const deserializeFarmUserData = (farm)=>{
    return {
        allowance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.allowance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        tokenBalance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.tokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        stakedBalance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        earnings: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.earnings) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        proxy: {
            allowance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.allowance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            tokenBalance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.tokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            stakedBalance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            earnings: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.earnings) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW
        }
    };
};
const deserializeFarm = (farm)=>{
    const { lpAddress , lpSymbol , pid , vaultPid , dual , multiplier , isCommunity , auctionHostingStartSeconds , quoteTokenPriceBusd , tokenPriceBusd , boosted , infoStableSwapAddress ,  } = farm;
    const auctionHostingStartDate = !(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(auctionHostingStartSeconds) ? new Date(auctionHostingStartSeconds * 1000) : null;
    const auctionHostingEndDate = auctionHostingStartDate ? date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1___default()(auctionHostingStartDate, _config_constants__WEBPACK_IMPORTED_MODULE_6__/* .FARM_AUCTION_HOSTING_IN_SECONDS */ .ki) : null;
    const now = Date.now();
    const isFarmCommunity = isCommunity || !!(auctionHostingStartDate && auctionHostingEndDate && auctionHostingStartDate.getTime() < now && auctionHostingEndDate.getTime() > now);
    return {
        lpAddress,
        lpSymbol,
        pid,
        vaultPid,
        dual,
        multiplier,
        isCommunity: isFarmCommunity,
        auctionHostingEndDate: auctionHostingEndDate?.toJSON(),
        quoteTokenPriceBusd,
        tokenPriceBusd,
        token: (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__/* .deserializeToken */ .iG)(farm.token),
        quoteToken: (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_4__/* .deserializeToken */ .iG)(farm.quoteToken),
        userData: deserializeFarmUserData(farm),
        tokenAmountTotal: farm.tokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenAmountTotal) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        quoteTokenAmountTotal: farm.quoteTokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.quoteTokenAmountTotal) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTotalInQuoteToken: farm.lpTotalInQuoteToken ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalInQuoteToken) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTotalSupply: farm.lpTotalSupply ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalSupply) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTokenPrice: farm.lpTokenPrice ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTokenPrice) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        tokenPriceVsQuote: farm.tokenPriceVsQuote ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenPriceVsQuote) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        poolWeight: farm.poolWeight ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.poolWeight) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        boosted,
        isStable: Boolean(infoStableSwapAddress)
    };
};
const selectCakeFarm = (state)=>state.farms.data.find((f)=>f.pid === 2);
const selectFarmByKey = (key, value)=>(state)=>state.farms.data.find((f)=>f[key] === value);
const makeFarmFromPidSelector = (pid)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("pid", pid)
    ], (farm)=>deserializeFarm(farm));
const makeBusdPriceFromPidSelector = (pid)=>createSelector([
        selectFarmByKey("pid", pid)
    ], (farm)=>{
        return farm && new BigNumber(farm.tokenPriceBusd);
    });
const makeUserFarmFromPidSelector = (pid)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("pid", pid)
    ], (farm)=>{
        const { allowance , tokenBalance , stakedBalance , earnings , proxy  } = deserializeFarmUserData(farm);
        return {
            allowance,
            tokenBalance,
            stakedBalance,
            earnings,
            proxy
        };
    });
const priceCakeFromPidSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
    selectCakeFarm
], (cakeBnbFarm)=>{
    const cakePriceBusdAsString = cakeBnbFarm?.tokenPriceBusd;
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(cakePriceBusdAsString);
});
const farmFromLpSymbolSelector = (lpSymbol)=>createSelector([
        selectFarmByKey("lpSymbol", lpSymbol)
    ], (farm)=>deserializeFarm(farm));
const makeLpTokenPriceFromLpSymbolSelector = (lpSymbol)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("lpSymbol", lpSymbol)
    ], (farm)=>{
        let lpTokenPrice = _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
        if (farm) {
            const lpTotalInQuoteToken = farm.lpTotalInQuoteToken ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalInQuoteToken) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
            const lpTotalSupply = farm.lpTotalSupply ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalSupply) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
            if (lpTotalSupply.gt(0) && lpTotalInQuoteToken.gt(0)) {
                const farmTokenPriceInUsd = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenPriceBusd);
                const tokenAmountTotal = farm.tokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenAmountTotal) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
                // Total value of base token in LP
                const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(tokenAmountTotal);
                // Double it to get overall value in LP
                const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2);
                // Divide total value of all tokens, by the number of LP tokens
                const totalLpTokens = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceAmount */ .U4)(lpTotalSupply);
                lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens);
            }
        }
        return lpTokenPrice;
    });
const farmSelector = (chainId)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)((state)=>state.farms, (farms)=>{
        const deserializedFarmsData = farms.data.map(deserializeFarm).filter((farm)=>farm.token.chainId === chainId);
        const { loadArchivedFarmsData , userDataLoaded , poolLength , regularCakePerBlock  } = farms;
        return {
            loadArchivedFarmsData,
            userDataLoaded,
            data: deserializedFarmsData,
            poolLength,
            regularCakePerBlock
        };
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ usePool),
/* harmony export */   "Es": () => (/* binding */ useCakeVaultUserData),
/* harmony export */   "FM": () => (/* binding */ useFetchIfo),
/* harmony export */   "Xo": () => (/* binding */ useCakeVault),
/* harmony export */   "YX": () => (/* binding */ useDeserializedPoolByVaultKey),
/* harmony export */   "cq": () => (/* binding */ useIfoCredit),
/* harmony export */   "dd": () => (/* binding */ useIfoCeiling),
/* harmony export */   "eB": () => (/* binding */ useVaultPoolByKey),
/* harmony export */   "f6": () => (/* binding */ usePoolsWithVault),
/* harmony export */   "l7": () => (/* binding */ usePoolsPageFetch),
/* harmony export */   "uf": () => (/* binding */ useCakeVaultPublicData)
/* harmony export */ });
/* unused harmony export useFetchPublicPoolsData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36204);
/* harmony import */ var hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68175);
/* harmony import */ var hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34195);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17943);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79847);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65498);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73486);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34376);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93638);
/* harmony import */ var _farms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44868);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, ___WEBPACK_IMPORTED_MODULE_10__, _selectors__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_8__, ___WEBPACK_IMPORTED_MODULE_10__, _selectors__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const lPoolAddresses = config_constants_pools__WEBPACK_IMPORTED_MODULE_9__/* .livePools.filter */ .$$.filter(({ sousId  })=>sousId !== 0).map(({ earningToken  })=>earningToken.address);
// Only fetch farms for live pools
const getActiveFarms = async (chainId)=>{
    const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_14__.getFarmConfig)(chainId);
    return farmsConfig.filter(({ token , pid , quoteToken  })=>pid !== 0 && (token.symbol === "CAKE" && quoteToken.symbol === "WBNB" || token.symbol === "BUSD" && quoteToken.symbol === "WBNB" || lPoolAddresses.find((poolAddress)=>poolAddress === token.address))).map((farm)=>farm.pid);
};
const getCakePriceFarms = async (chainId)=>{
    const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_14__.getFarmConfig)(chainId);
    return farmsConfig.filter(({ token , pid , quoteToken  })=>pid !== 0 && (token.symbol === "CAKE" && quoteToken.symbol === "WBNB" || token.symbol === "BUSD" && quoteToken.symbol === "WBNB")).map((farm)=>farm.pid);
};
const useFetchPublicPoolsData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .featureFarmApiAtom */ .x);
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useSlowRefreshEffect */ .X)((currentBlock)=>{
        const fetchPoolsDataWithFarms = async ()=>{
            const activeFarms = await getActiveFarms(chainId);
            await dispatch((0,_farms__WEBPACK_IMPORTED_MODULE_12__/* .fetchFarmsPublicDataAsync */ .eG)({
                pids: activeFarms,
                chainId,
                flag: farmFlag
            }));
            (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchPoolsPublicDataAsync */ .ht)(currentBlock, chainId));
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchPoolsStakingLimitsAsync */ .E$)());
            });
        };
        fetchPoolsDataWithFarms();
    }, [
        dispatch,
        chainId,
        farmFlag
    ]);
};
const usePool = (sousId)=>{
    const poolWithUserDataLoadingSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_13__/* .makePoolWithUserDataLoadingSelector */ .Eo)(sousId), [
        sousId
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(poolWithUserDataLoadingSelector);
};
const usePoolsWithVault = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_13__/* .poolsWithVaultSelector */ .l_);
};
const useDeserializedPoolByVaultKey = (vaultKey)=>{
    const vaultPoolWithKeySelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_13__/* .makeVaultPoolWithKeySelector */ .Fs)(vaultKey), [
        vaultKey
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(vaultPoolWithKeySelector);
};
const usePoolsPageFetch = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    useFetchPublicPoolsData();
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useFastRefreshEffect */ .a)(()=>{
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultPublicData */ .P4)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeFlexibleSideVaultPublicData */ .i)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchIfoPublicDataAsync */ .aG)());
            if (account) {
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchPoolsUserDataAsync */ .XK)(account));
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                    account
                }));
                dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeFlexibleSideVaultUserData */ .dU)({
                    account
                }));
            }
        });
    }, [
        account,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultFees */ .HX)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeFlexibleSideVaultFees */ .qd)());
        });
    }, [
        dispatch
    ]);
};
const useCakeVaultUserData = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useFastRefreshEffect */ .a)(()=>{
        if (account) {
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
        }
    }, [
        account,
        dispatch
    ]);
};
const useCakeVaultPublicData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_5__/* .useFastRefreshEffect */ .a)(()=>{
        dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultPublicData */ .P4)());
    }, [
        dispatch
    ]);
};
const useFetchIfo = ()=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_6__/* .featureFarmApiAtom */ .x);
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])("fetchIfoPublicData", async ()=>{
        const cakePriceFarms = await getCakePriceFarms(chainId);
        await dispatch((0,_farms__WEBPACK_IMPORTED_MODULE_12__/* .fetchFarmsPublicDataAsync */ .eG)({
            pids: cakePriceFarms,
            chainId,
            flag: farmFlag
        }));
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakePoolPublicDataAsync */ .PE)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultPublicData */ .P4)());
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchIfoPublicDataAsync */ .aG)());
        });
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_7__/* .FAST_INTERVAL */ .sR
    });
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])(account && "fetchIfoUserData", async ()=>{
        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(()=>{
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakePoolUserDataAsync */ .wI)(account));
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
            dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchUserIfoCreditDataAsync */ .Ck)(account));
        });
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_7__/* .FAST_INTERVAL */ .sR
    });
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__["default"])("fetchCakeVaultFees", async ()=>{
        dispatch((0,___WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultFees */ .HX)());
    });
};
const useCakeVault = ()=>{
    return useVaultPoolByKey(_types__WEBPACK_IMPORTED_MODULE_11__/* .VaultKey.CakeVault */ .om.CakeVault);
};
const useVaultPoolByKey = (key)=>{
    const vaultPoolByKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_13__/* .makeVaultPoolByKey */ .SN)(key), [
        key
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(vaultPoolByKey);
};
const useIfoCredit = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_13__/* .ifoCreditSelector */ .BZ);
};
const useIfoCeiling = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_13__/* .ifoCeilingSelector */ .C8);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BZ": () => (/* binding */ ifoCreditSelector),
/* harmony export */   "C8": () => (/* binding */ ifoCeilingSelector),
/* harmony export */   "Eo": () => (/* binding */ makePoolWithUserDataLoadingSelector),
/* harmony export */   "Fs": () => (/* binding */ makeVaultPoolWithKeySelector),
/* harmony export */   "SN": () => (/* binding */ makeVaultPoolByKey),
/* harmony export */   "l_": () => (/* binding */ poolsWithVaultSelector)
/* harmony export */ });
/* unused harmony export poolsWithUserDataLoadingSelector */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85576);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93638);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90438);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34376);
/* harmony import */ var _utils_cakePool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27240);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__]);
([_helpers__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const selectPoolsData = (state)=>state.pools.data;
const selectPoolData = (sousId)=>(state)=>state.pools.data.find((p)=>p.sousId === sousId);
const selectUserDataLoaded = (state)=>state.pools.userDataLoaded;
const selectVault = (key)=>(state)=>key ? state.pools[key] : _index__WEBPACK_IMPORTED_MODULE_5__/* .initialPoolVaultState */ .XW;
const selectIfo = (state)=>state.pools.ifo;
const selectIfoUserCredit = (state)=>state.pools.ifo.credit ?? _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__/* .BIG_ZERO */ .HW;
const makePoolWithUserDataLoadingSelector = (sousId)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
        selectPoolData(sousId),
        selectUserDataLoaded
    ], (pool, userDataLoaded)=>{
        return {
            pool: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .transformPool */ .xK)(pool),
            userDataLoaded
        };
    });
const poolsWithUserDataLoadingSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    selectPoolsData,
    selectUserDataLoaded
], (pools, userDataLoaded)=>{
    return {
        pools: pools.map(_helpers__WEBPACK_IMPORTED_MODULE_4__/* .transformPool */ .xK),
        userDataLoaded
    };
});
const makeVaultPoolByKey = (key)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
        selectVault(key)
    ], (vault)=>(0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .transformVault */ .LJ)(key, vault));
const poolsWithVaultSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    poolsWithUserDataLoadingSelector,
    makeVaultPoolByKey(_types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeVault */ .om.CakeVault),
    makeVaultPoolByKey(_types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeFlexibleSideVault */ .om.CakeFlexibleSideVault), 
], (poolsWithUserDataLoading, deserializedLockedCakeVault, deserializedFlexibleSideCakeVault)=>{
    const { pools , userDataLoaded  } = poolsWithUserDataLoading;
    const cakePool = pools.find((pool)=>!pool.isFinished && pool.sousId === 0);
    const withoutCakePool = pools.filter((pool)=>pool.sousId !== 0);
    const cakeAutoVault = {
        ...cakePool,
        ...deserializedLockedCakeVault,
        vaultKey: _types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeVault */ .om.CakeVault,
        userData: {
            ...cakePool.userData,
            ...deserializedLockedCakeVault.userData
        }
    };
    const lockedVaultPosition = (0,_utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .getVaultPosition */ .cP)(deserializedLockedCakeVault.userData);
    const hasFlexibleSideSharesStaked = deserializedFlexibleSideCakeVault.userData.userShares.gt(0);
    const cakeAutoFlexibleSideVault = lockedVaultPosition > _utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .VaultPosition.Flexible */ .PS.Flexible || hasFlexibleSideSharesStaked ? [
        {
            ...cakePool,
            ...deserializedFlexibleSideCakeVault,
            vaultKey: _types__WEBPACK_IMPORTED_MODULE_3__/* .VaultKey.CakeFlexibleSideVault */ .om.CakeFlexibleSideVault,
            userData: {
                ...cakePool.userData,
                ...deserializedFlexibleSideCakeVault.userData
            }
        }, 
    ] : [];
    return {
        pools: [
            cakeAutoVault,
            ...cakeAutoFlexibleSideVault,
            ...withoutCakePool
        ],
        userDataLoaded
    };
});
const makeVaultPoolWithKeySelector = (vaultKey)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(poolsWithVaultSelector, ({ pools  })=>pools.find((p)=>p.vaultKey === vaultKey));
const ifoCreditSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    selectIfoUserCredit
], (ifoUserCredit)=>{
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(ifoUserCredit);
});
const ifoCeilingSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)([
    selectIfo
], (ifoData)=>{
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(ifoData.ceiling);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IM": () => (/* binding */ isStaked),
/* harmony export */   "PS": () => (/* binding */ VaultPosition),
/* harmony export */   "cP": () => (/* binding */ getVaultPosition),
/* harmony export */   "p1": () => (/* binding */ isLocked)
/* harmony export */ });
/* unused harmony exports isLockedEnd, isAfterBurning */
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73486);

const isStaked = ({ userShares  })=>userShares && userShares.gt(0);
const isLocked = ({ userShares , locked  })=>isStaked({
        userShares
    }) && Boolean(locked) // && !isAfter(new Date(lockEndTime * 1000), new Date())
;
const isLockedEnd = ({ userShares , locked , lockEndTime  })=>lockEndTime && lockEndTime !== "0" && isLocked({
        userShares,
        locked
    }) && Date.now() >= parseInt(lockEndTime) * 1000 && Date.now() <= new Date(parseInt(lockEndTime) * 1000).getTime() + config_constants_pools__WEBPACK_IMPORTED_MODULE_0__/* .UNLOCK_FREE_DURATION */ .by * 1000;
const isAfterBurning = ({ userShares , locked , lockEndTime  })=>lockEndTime && lockEndTime !== "0" && isLocked({
        userShares,
        locked
    }) && Date.now() > new Date(parseInt(lockEndTime) * 1000).getTime() + config_constants_pools__WEBPACK_IMPORTED_MODULE_0__/* .UNLOCK_FREE_DURATION */ .by * 1000;
var VaultPosition;
(function(VaultPosition) {
    VaultPosition[VaultPosition["None"] = 0] = "None";
    VaultPosition[VaultPosition["Flexible"] = 1] = "Flexible";
    VaultPosition[VaultPosition["Locked"] = 2] = "Locked";
    VaultPosition[VaultPosition["LockedEnd"] = 3] = "LockedEnd";
    VaultPosition[VaultPosition["AfterBurning"] = 4] = "AfterBurning";
})(VaultPosition || (VaultPosition = {}));
const getVaultPosition = (params)=>{
    if (isAfterBurning(params)) {
        return VaultPosition.AfterBurning;
    }
    if (isLockedEnd(params)) {
        return VaultPosition.LockedEnd;
    }
    if (isLocked(params)) {
        return VaultPosition.Locked;
    }
    if (isStaked(params)) {
        return VaultPosition.Flexible;
    }
    return VaultPosition.None;
};


/***/ }),

/***/ 93508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ latinise)
/* harmony export */ });
/* unused harmony export Latinise */
const Latinise = {
    latin_map: {
        τ: "t",
        Τ: "T"
    }
};
const latinise = (input)=>{
    return input.replace(/[^A-Za-z0-9[\] ]/g, (x)=>Latinise.latin_map[x] || x);
};


/***/ }),

/***/ 62704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useBCakeProxyContractAddress)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15941);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17943);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_farms_src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65267);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useBCakeProxyContractAddress = (account, chainId)=>{
    const bCakeFarmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useBCakeFarmBoosterContract */ .gh)();
    const isSupportedChain = _pancakeswap_farms_src_index__WEBPACK_IMPORTED_MODULE_4__/* .bCakeSupportedChainId.includes */ .P4.includes(chainId);
    const { data , status , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(account && isSupportedChain && [
        "proxyAddress",
        account
    ], async ()=>bCakeFarmBoosterContract.proxyContract(account));
    const isLoading = isSupportedChain ? status !== config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .FetchStatus.Fetched */ .iF.Fetched : false;
    return {
        proxyAddress: data,
        isLoading,
        proxyCreated: data && data !== config_constants__WEBPACK_IMPORTED_MODULE_1__/* .NO_PROXY_CONTRACT */ .h5,
        refreshProxyAddress: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAvgLockDuration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73486);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38766);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7599);
/* harmony import */ var _utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__]);
state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function useAvgLockDuration() {
    const { totalLockedAmount , totalShares , totalCakeInVault , pricePerFullShare  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCakeVault */ .Xo)();
    const avgLockDurationsInSeconds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const flexibleCakeAmount = totalCakeInVault.minus(totalLockedAmount);
        const flexibleCakeShares = flexibleCakeAmount.div(pricePerFullShare).times(config__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
        const lockedCakeBoostedShares = totalShares.minus(flexibleCakeShares);
        const lockedCakeOriginalShares = totalLockedAmount.div(pricePerFullShare).times(config__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOKEN_DECIMAL */ .o3);
        const avgBoostRatio = lockedCakeBoostedShares.div(lockedCakeOriginalShares);
        return avgBoostRatio.minus(1).times(new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(config_constants_pools__WEBPACK_IMPORTED_MODULE_1__/* .DURATION_FACTOR.toString */ .A0.toString())).div(new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(config_constants_pools__WEBPACK_IMPORTED_MODULE_1__/* .BOOST_WEIGHT.toString */ .xt.toString()).div((0,_pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_5__/* .getFullDecimalMultiplier */ .t)(12))).toFixed(0);
    }, [
        totalCakeInVault,
        totalLockedAmount,
        pricePerFullShare,
        totalShares
    ]);
    const avgLockDurationsInWeeks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(avgLockDurationsInSeconds), [
        avgLockDurationsInSeconds
    ]);
    return {
        avgLockDurationsInWeeks,
        avgLockDurationsInSeconds: lodash_toNumber__WEBPACK_IMPORTED_MODULE_3___default()(avgLockDurationsInSeconds)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AS": () => (/* binding */ weeksToSeconds),
/* harmony export */   "Ot": () => (/* binding */ secondsToWeeks),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i8": () => (/* binding */ secondsToDays)
/* harmony export */ });
/* harmony import */ var date_fns_formatDuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99615);
/* harmony import */ var date_fns_formatDuration__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDuration__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_differenceInWeeks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49449);
/* harmony import */ var date_fns_differenceInWeeks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_differenceInWeeks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_differenceInDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69674);
/* harmony import */ var date_fns_differenceInDays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_differenceInDays__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64150);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3__);




const secondsToWeeks = (seconds)=>{
    const now = new Date();
    const addedDate = date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3___default()(now, seconds);
    return date_fns_differenceInWeeks__WEBPACK_IMPORTED_MODULE_1___default()(new Date(addedDate), now, {
        roundingMethod: "round"
    });
};
const secondsToDays = (seconds)=>{
    const now = new Date();
    const addedDate = date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3___default()(now, seconds);
    return date_fns_differenceInDays__WEBPACK_IMPORTED_MODULE_2___default()(new Date(addedDate), now);
};
const weeksToSeconds = (weeks)=>weeks * 7 * 24 * 60 * 60;
const formatSecondsToWeeks = (secondDuration)=>date_fns_formatDuration__WEBPACK_IMPORTED_MODULE_0___default()({
        weeks: secondsToWeeks(secondDuration)
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatSecondsToWeeks);


/***/ }),

/***/ 37424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-5ed8a823-0"
})`
  border-top: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
CardFooter.defaultProps = {
    p: "24px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardFooter);


/***/ }),

/***/ 27387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97131);


const TokenImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cc5dea0d-0"
})`
  &:before {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 7;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenImage);


/***/ }),

/***/ 83548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Image_TokenPairImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Image/types.ts
const variants = {
    DEFAULT: "default",
    INVERTED: "inverted"
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Image/TokenImage.tsx
var TokenImage = __webpack_require__(27387);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Image/styles.tsx




const StyledPrimaryImage = external_styled_components_default()(TokenImage/* default */.Z).withConfig({
    componentId: "sc-d928f27a-0"
})`
  position: absolute;
  width: ${({ variant  })=>variant === variants.DEFAULT ? "92%" : "82%"}; // 92, 82 are arbitrary numbers to fit the variant

  ${(0,external_styled_system_.variant)({
    variants: {
        [variants.DEFAULT]: {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5
        },
        [variants.INVERTED]: {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6
        }
    }
})}
`;
const StyledSecondaryImage = external_styled_components_default()(TokenImage/* default */.Z).withConfig({
    componentId: "sc-d928f27a-1"
})`
  position: absolute;
  width: 50%;

  ${(0,external_styled_system_.variant)({
    variants: {
        [variants.DEFAULT]: {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6
        },
        [variants.INVERTED]: {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5
        }
    }
})}
`;

// EXTERNAL MODULE: ../../packages/uikit/src/components/Image/Wrapper.tsx
var Wrapper = __webpack_require__(58457);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Image/TokenPairImage.tsx





const TokenPairImage = ({ primarySrc , secondarySrc , width , height , variant =variants.DEFAULT , primaryImageProps ={} , secondaryImageProps ={} , ...props })=>{
    const secondaryImageSize = Math.floor(width / 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* default */.Z, {
        position: "relative",
        width: width,
        height: height,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledPrimaryImage, {
                variant: variant,
                src: primarySrc,
                width: width,
                height: height,
                ...primaryImageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledSecondaryImage, {
                variant: variant,
                src: secondarySrc,
                width: secondaryImageSize,
                height: secondaryImageSize,
                ...secondaryImageProps
            })
        ]
    });
};
/* harmony default export */ const Image_TokenPairImage = (TokenPairImage);


/***/ }),

/***/ 22422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__]);
_Box__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = ({ children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        px: [
            "16px",
            "24px"
        ],
        mx: "auto",
        maxWidth: "1200px",
        ...props,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FlexLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e26f7166-0"
})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 32px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexLayout);


/***/ }),

/***/ 63799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__]);
_Box__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FlexGap = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8934bb38-0"
})`
  gap: ${({ gap  })=>gap};
  row-gap: ${({ rowGap  })=>rowGap};
  column-gap: ${({ columnGap  })=>columnGap};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexGap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
/* harmony import */ var _Layouts_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__, _Layouts_Container__WEBPACK_IMPORTED_MODULE_3__]);
([_Box__WEBPACK_IMPORTED_MODULE_2__, _Layouts_Container__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Outer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a56468b1-0"
})`
  background: ${({ theme , background  })=>background || theme.colors.gradientBubblegum};
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Layouts_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a56468b1-1"
})`
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
`;
const PageHeader = ({ background , children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Outer, {
        background: background,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inner, {
            children: children
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25717:
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
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85306);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88800);






const FixedContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-46c49c22-0"
})`
  position: fixed;
  right: 5%;
  bottom: calc(110px + env(safe-area-inset-bottom));
`;
const ScrollToTopButtonV2 = ()=>{
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const scrollToTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const toggleVisible = ()=>{
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 500) {
                setVisible(true);
            } else if (scrolled <= 500) {
                setVisible(false);
            }
        };
        const throttledToggleVisible = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(toggleVisible, 200);
        window.addEventListener("scroll", throttledToggleVisible);
        return ()=>window.removeEventListener("scroll", throttledToggleVisible);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FixedContainer, {
        style: {
            display: visible ? "inline" : "none"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: 48,
            height: 48,
            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "white",
                style: {
                    marginLeft: 0
                }
            }),
            onClick: scrollToTop
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTopButtonV2);


/***/ }),

/***/ 59176:
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
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94866);






const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-bff0c546-0"
})`
  border-radius: 16px;
  margin-left: auto;
`;
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-bff0c546-1"
})`
  position: relative;
  ${({ theme  })=>theme.mediaQueries.sm} {
    display: block;
  }
`;
const SearchInput = ({ onChange: onChangeCallback , placeholder ="Search" , initialValue ,  })=>{
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const debouncedOnChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((e)=>onChangeCallback(e), 500), [
        onChangeCallback
    ]);
    const onChange = (e)=>{
        setSearchText(e.target.value);
        debouncedOnChange(e);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (initialValue) {
            setSearchText(initialValue);
        }
    }, [
        initialValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputWrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
            value: searchText,
            onChange: onChange,
            placeholder: t(placeholder)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88618:
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
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49019);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_3__]);
_Box__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DropDownHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ac4f9611-0"
})`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme  })=>theme.colors.input};
  transition: border-radius 0.15s;
`;
const DropDownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ac4f9611-1"
})`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  background: ${({ theme  })=>theme.colors.input};
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }
`;
const DropDownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ac4f9611-2"
})`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }

  ${(props)=>props.isOpen && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      ${DropDownHeader} {
        border-bottom: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
        box-shadow: ${({ theme  })=>theme.tooltip.boxShadow};
        border-radius: 16px 16px 0 0;
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
        border-top-width: 0;
        border-radius: 0 0 16px 16px;
        box-shadow: ${({ theme  })=>theme.tooltip.boxShadow};
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const DropDownList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-ac4f9611-3"
})`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
`;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
    componentId: "sc-ac4f9611-4"
})`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    background: ${({ theme  })=>theme.colors.inputSecondary};
  }
`;
const Select = ({ options , onOptionChange , defaultOptionIndex =0 , placeHolderText , ...props })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: optionSelected , 1: setOptionSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedOptionIndex , 1: setSelectedOptionIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOptionIndex);
    const toggling = (event)=>{
        setIsOpen(!isOpen);
        event.stopPropagation();
    };
    const onOptionClicked = (selectedIndex)=>()=>{
            setSelectedOptionIndex(selectedIndex);
            setIsOpen(false);
            setOptionSelected(true);
            if (onOptionChange) {
                onOptionChange(options[selectedIndex]);
            }
        };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = ()=>{
            setIsOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultOptionIndex) {
            setSelectedOptionIndex(defaultOptionIndex - 1);
            setOptionSelected(true);
        }
    }, [
        defaultOptionIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropDownContainer, {
        isOpen: isOpen,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownHeader, {
                onClick: toggling,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    color: !optionSelected && placeHolderText ? "text" : undefined,
                    children: !optionSelected && placeHolderText ? placeHolderText : options[selectedOptionIndex].label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "text",
                onClick: toggling
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownListContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownList, {
                    children: options.map((option, index)=>placeHolderText || index !== selectedOptionIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            onClick: onOptionClicked(index),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: option.label
                            })
                        }, option.label) : null)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 49019:
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
            d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 77399:
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
            d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 94416:
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
            d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 93314:
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
            d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 83503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HH": () => (/* binding */ Handle),
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49190);


const scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px"
    },
    md: {
        handleHeight: "26px",
        handleWidth: "26px",
        handleLeft: "3px",
        handleTop: "3px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "32px",
        toggleWidth: "56px"
    },
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px"
    }
};
const getScale = (property)=>({ scale =_types__WEBPACK_IMPORTED_MODULE_1__/* .scales.LG */ .Q.LG  })=>{
        return scaleKeyValues[scale][property];
    };
const Handle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4d215cc-0"
})`
  background-color: ${({ theme  })=>theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-4d215cc-1"
})`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }
`;
const StyledToggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4d215cc-2"
})`
  align-items: center;
  background-color: ${({ theme , $checked , $checkedColor , $defaultColor  })=>theme.colors[$checked ? $checkedColor : $defaultColor]};
  border-radius: 24px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledToggle);


/***/ }),

/***/ 41022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _StyledToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83503);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_4__]);
_Box__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Toggle = ({ checked , defaultColor ="input" , checkedColor ="success" , scale =_types__WEBPACK_IMPORTED_MODULE_2__/* .scales.LG */ .Q.LG , startIcon , endIcon , ...props })=>{
    const isChecked = !!checked;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        $checked: isChecked,
        $checkedColor: checkedColor,
        $defaultColor: defaultColor,
        scale: scale,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                checked: checked,
                scale: scale,
                ...props,
                type: "checkbox"
            }),
            startIcon && endIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* .Handle */ .HH, {
                        scale: scale,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            children: checked ? endIcon(checked) : startIcon(!checked)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        width: "100%",
                        height: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        children: [
                            startIcon(),
                            endIcon()
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* .Handle */ .HH, {
                scale: scale
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ scales)
/* harmony export */ });
/* unused harmony export scaleKeys */
const scales = {
    SM: "sm",
    MD: "md",
    LG: "lg"
};
const scaleKeys = {
    handleHeight: "handleHeight",
    handleWidth: "handleWidth",
    handleLeft: "handleLeft",
    handleTop: "handleTop",
    checkedLeft: "checkedLeft",
    toggleHeight: "toggleHeight",
    toggleWidth: "toggleWidth"
};


/***/ })

};
;
//# sourceMappingURL=1448.js.map