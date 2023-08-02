"use strict";
exports.id = 2993;
exports.ids = [2993];
exports.modules = {

/***/ 64548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = ({ children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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

/***/ 52993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PageMeta),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var config_constants_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68101);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36695);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64548);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _Container__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__, _Container__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d9db784e-0"
})`
  width: 100%;
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme  })=>theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;
const PageMeta = ({ symbol  })=>{
    const { t , currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const cakePriceUsd = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_6__/* .useCakeBusdPrice */ .S9)({
        forceMainnet: true
    });
    const cakePriceUsdDisplay = cakePriceUsd ? `$${cakePriceUsd.toFixed(3)}` : "...";
    const pageMeta = (0,config_constants_meta__WEBPACK_IMPORTED_MODULE_5__/* .getCustomMeta */ .S)(pathname, t, locale) || {};
    const { title , description , image  } = {
        ...config_constants_meta__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_META */ .k,
        ...pageMeta
    };
    let pageTitle = cakePriceUsdDisplay ? [
        title,
        cakePriceUsdDisplay
    ].join(" - ") : title;
    if (symbol) {
        pageTitle = [
            symbol,
            title
        ].join(" - ");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: pageTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: image
            })
        ]
    });
};
const Page = ({ children , symbol , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageMeta, {
                symbol: symbol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledPage, {
                ...props,
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getCustomMeta),
/* harmony export */   "k": () => (/* binding */ DEFAULT_META)
/* harmony export */ });
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50541);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_META = {
    title: "PancakeSwap",
    description: "The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.",
    image: "https://pancakeswap.finance/images/hero.png"
};
const getPathList = (t)=>{
    return {
        paths: {
            "/": {
                title: t("Home")
            },
            "/swap": {
                basePath: true,
                title: t("Exchange")
            },
            "/limit-orders": {
                basePath: true,
                title: t("Limit Orders")
            },
            "/add": {
                basePath: true,
                title: t("Add Liquidity")
            },
            "/remove": {
                basePath: true,
                title: t("Remove Liquidity")
            },
            "/liquidity": {
                title: t("Liquidity")
            },
            "/find": {
                title: t("Import Pool")
            },
            "/competition": {
                title: t("Trading Battle")
            },
            "/prediction": {
                title: t("Prediction")
            },
            "/prediction/leaderboard": {
                title: t("Leaderboard")
            },
            "/farms": {
                title: t("Farms")
            },
            "/farms/auction": {
                title: t("Farm Auctions")
            },
            "/pools": {
                title: t("Pools")
            },
            "/lottery": {
                title: t("Lottery")
            },
            "/ifo": {
                title: t("Initial Farm Offering")
            },
            "/teams": {
                basePath: true,
                title: t("Leaderboard")
            },
            "/voting": {
                basePath: true,
                title: t("Voting")
            },
            "/voting/proposal": {
                title: t("Proposals")
            },
            "/voting/proposal/create": {
                title: t("Make a Proposal")
            },
            "/info": {
                title: t("Overview"),
                description: "View statistics for Pancakeswap exchanges."
            },
            "/info/pools": {
                title: t("Pools"),
                description: "View statistics for Pancakeswap exchanges."
            },
            "/info/tokens": {
                title: t("Tokens"),
                description: "View statistics for Pancakeswap exchanges."
            },
            "/nfts/collections": {
                basePath: true,
                title: t("Collections")
            },
            "/nfts/activity": {
                title: t("Activity")
            },
            "/profile": {
                basePath: true,
                title: t("Profile")
            },
            "/pancake-squad": {
                basePath: true,
                title: t("Pancake Squad")
            },
            "/pottery": {
                basePath: true,
                title: t("Pottery")
            }
        },
        defaultTitleSuffix: t("PancakeSwap")
    };
};
const getCustomMeta = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()((path, t, _)=>{
    const pathList = getPathList(t);
    const pathMetadata = pathList.paths[path] ?? pathList.paths[Object.entries(pathList.paths).find(([url, data])=>data.basePath && path.startsWith(url))?.[0]];
    if (pathMetadata) {
        return {
            title: `${pathMetadata.title} | ${t(pathList.defaultTitleSuffix)}`,
            ...pathMetadata.description && {
                description: pathMetadata.description
            }
        };
    }
    return null;
}, (path, t, locale)=>`${path}#${locale}`);


/***/ }),

/***/ 36695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hf": () => (/* binding */ useBNBBusdPrice),
/* harmony export */   "S9": () => (/* binding */ useCakeBusdPrice),
/* harmony export */   "Tx": () => (/* binding */ useBUSDCakeAmount),
/* harmony export */   "ZP": () => (/* binding */ useBUSDPrice),
/* harmony export */   "vB": () => (/* binding */ useBUSDCurrencyAmount)
/* harmony export */ });
/* unused harmony export usePriceByPairs */
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17943);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72502);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15941);
/* harmony import */ var utils_getLpAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73396);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37926);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40495);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74860);
/* harmony import */ var _usePairs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_5__, _useContract__WEBPACK_IMPORTED_MODULE_9__, _usePairs__WEBPACK_IMPORTED_MODULE_10__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_5__, _useContract__WEBPACK_IMPORTED_MODULE_9__, _usePairs__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












/**
 * Returns the price in BUSD of the input currency
 * @param currency currency to compute the BUSD price of
 */ function useBUSDPrice(currency) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const wrapped = currency?.wrapped;
    const wnative = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId];
    const stable = _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .BUSD */ .lz[chainId] || _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .USDC */ .gn[chainId];
    const tokenPairs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[
            [
                chainId && wrapped && wnative?.equals(wrapped) ? undefined : currency,
                chainId ? wnative : undefined
            ],
            [
                stable && wrapped?.equals(stable) ? undefined : wrapped,
                stable
            ],
            [
                chainId ? wnative : undefined,
                stable
            ], 
        ], [
        wnative,
        stable,
        chainId,
        currency,
        wrapped
    ]);
    const [[bnbPairState, bnbPair], [busdPairState, busdPair], [busdBnbPairState, busdBnbPair]] = (0,_usePairs__WEBPACK_IMPORTED_MODULE_10__/* .usePairs */ .z$)(tokenPairs);
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!currency || !wrapped || !chainId || !wnative) {
            return undefined;
        }
        const isBUSDPairExist = busdPair && busdPairState === _usePairs__WEBPACK_IMPORTED_MODULE_10__/* .PairState.EXISTS */ ._G.EXISTS && busdPair.reserve0.greaterThan("0") && busdPair.reserve1.greaterThan("0");
        // handle wbnb/bnb
        if (wrapped.equals(wnative)) {
            if (isBUSDPairExist) {
                const price = busdPair.priceOf(wnative);
                return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(currency, stable, price.denominator, price.numerator);
            }
            return undefined;
        }
        // handle busd
        if (wrapped.equals(stable)) {
            return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(stable, stable, "1", "1");
        }
        const isBnbPairExist = bnbPair && bnbPairState === _usePairs__WEBPACK_IMPORTED_MODULE_10__/* .PairState.EXISTS */ ._G.EXISTS && bnbPair.reserve0.greaterThan("0") && bnbPair.reserve1.greaterThan("0");
        const isBusdBnbPairExist = busdBnbPair && busdBnbPairState === _usePairs__WEBPACK_IMPORTED_MODULE_10__/* .PairState.EXISTS */ ._G.EXISTS && busdBnbPair.reserve0.greaterThan("0") && busdBnbPair.reserve1.greaterThan("0");
        const bnbPairBNBAmount = isBnbPairExist && bnbPair?.reserveOf(wnative);
        const bnbPairBNBBUSDValue = bnbPairBNBAmount && isBUSDPairExist && isBusdBnbPairExist ? busdBnbPair.priceOf(wnative).quote(bnbPairBNBAmount).quotient : _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(0);
        // all other tokens
        // first try the busd pair
        if (isBUSDPairExist && busdPair.reserveOf(stable).greaterThan(bnbPairBNBBUSDValue)) {
            const price1 = busdPair.priceOf(wrapped);
            return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(currency, stable, price1.denominator, price1.numerator);
        }
        if (isBnbPairExist && isBusdBnbPairExist) {
            if (busdBnbPair.reserveOf(stable).greaterThan("0") && bnbPair.reserveOf(wnative).greaterThan("0")) {
                const bnbBusdPrice = busdBnbPair.priceOf(stable);
                const currencyBnbPrice = bnbPair.priceOf(wnative);
                const busdPrice = bnbBusdPrice.multiply(currencyBnbPrice).invert();
                return new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(currency, stable, busdPrice.denominator, busdPrice.numerator);
            }
        }
        return undefined;
    }, [
        currency,
        wrapped,
        chainId,
        wnative,
        stable,
        bnbPair,
        busdBnbPair,
        busdPairState,
        busdPair,
        bnbPairState,
        busdBnbPairState, 
    ]);
}
const usePriceByPairs = (currencyA, currencyB)=>{
    const [tokenA, tokenB] = [
        currencyA?.wrapped,
        currencyB?.wrapped
    ];
    const pairAddress = (0,utils_getLpAddress__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(tokenA, tokenB);
    const pairContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_9__/* .usePairContract */ .t0)(pairAddress);
    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useProvider)({
        chainId: currencyA.chainId
    });
    const { data: price  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(currencyA && currencyB && [
        "pair-price",
        currencyA,
        currencyB
    ], async ()=>{
        const reserves = await pairContract.connect(provider).getReserves();
        if (!reserves) {
            return null;
        }
        const { reserve0 , reserve1  } = reserves;
        const [token0, token1] = tokenA.sortsBefore(tokenB) ? [
            tokenA,
            tokenB
        ] : [
            tokenB,
            tokenA
        ];
        const pair = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Pair(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token0, reserve0.toString()), _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token1, reserve1.toString()));
        return pair.priceOf(tokenB);
    }, {
        dedupingInterval: config_constants__WEBPACK_IMPORTED_MODULE_1__/* .FAST_INTERVAL */ .sR,
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_1__/* .FAST_INTERVAL */ .sR
    });
    return price;
};
const useBUSDCurrencyAmount = (currency, amount)=>{
    const busdPrice = useBUSDPrice(currency);
    if (!amount) {
        return undefined;
    }
    if (busdPrice) {
        return (0,utils_prices__WEBPACK_IMPORTED_MODULE_11__/* .multiplyPriceByAmount */ .a)(busdPrice, amount);
    }
    return undefined;
};
const useBUSDCakeAmount = (amount)=>{
    const cakeBusdPrice = useCakeBusdPrice();
    if (cakeBusdPrice) {
        return (0,utils_prices__WEBPACK_IMPORTED_MODULE_11__/* .multiplyPriceByAmount */ .a)(cakeBusdPrice, amount);
    }
    return undefined;
};
// @Note: only fetch from one pair
const useCakeBusdPrice = ({ forceMainnet  } = {
    forceMainnet: false
})=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const isTestnet = !forceMainnet && (0,utils_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .isChainTestnet */ .gW)(chainId);
    // Return bsc testnet cake if chain is testnet
    const cake = isTestnet ? _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .CAKE */ .cr[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET] : _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .CAKE */ .cr[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC];
    return usePriceByPairs(_pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .BUSD */ .lz[cake.chainId], cake);
};
// @Note: only fetch from one pair
const useBNBBusdPrice = ({ forceMainnet  } = {
    forceMainnet: false
})=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const isTestnet = !forceMainnet && (0,utils_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .isChainTestnet */ .gW)(chainId);
    // Return bsc testnet wbnb if chain is testnet
    const wbnb = isTestnet ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WBNB[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET] : _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WBNB[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC];
    return usePriceByPairs(_pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .BUSD */ .lz[wbnb.chainId], wbnb);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_G": () => (/* binding */ PairState),
/* harmony export */   "yX": () => (/* binding */ usePair),
/* harmony export */   "z$": () => (/* binding */ usePairs)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_abi_IPancakePair_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93725);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6187);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87070);
/* harmony import */ var _utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PAIR_INTERFACE = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__.Interface(config_abi_IPancakePair_json__WEBPACK_IMPORTED_MODULE_2__);
var PairState;
(function(PairState) {
    PairState[PairState["LOADING"] = 0] = "LOADING";
    PairState[PairState["NOT_EXISTS"] = 1] = "NOT_EXISTS";
    PairState[PairState["EXISTS"] = 2] = "EXISTS";
    PairState[PairState["INVALID"] = 3] = "INVALID";
})(PairState || (PairState = {}));
function usePairs(currencies) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const tokens = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>currencies.map(([currencyA, currencyB])=>[
                (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_6__/* .wrappedCurrency */ .pu)(currencyA, chainId),
                (0,_utils_wrappedCurrency__WEBPACK_IMPORTED_MODULE_6__/* .wrappedCurrency */ .pu)(currencyB, chainId), 
            ]), [
        chainId,
        currencies
    ]);
    const pairAddresses = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>tokens.map(([tokenA, tokenB])=>{
            try {
                return tokenA && tokenB && !tokenA.equals(tokenB) ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Pair.getAddress(tokenA, tokenB) : undefined;
            } catch (error) {
                // Debug Invariant failed related to this line
                console.error(error.msg, `- pairAddresses: ${tokenA?.address}-${tokenB?.address}`, `chainId: ${tokenA?.chainId}`);
                return undefined;
            }
        }), [
        tokens
    ]);
    const results = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useMultipleContractSingleData */ ._Y)(pairAddresses, PAIR_INTERFACE, "getReserves");
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return results.map((result, i)=>{
            const { result: reserves , loading  } = result;
            const tokenA = tokens[i][0];
            const tokenB = tokens[i][1];
            if (loading) return [
                PairState.LOADING,
                null
            ];
            if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [
                PairState.INVALID,
                null
            ];
            if (!reserves) return [
                PairState.NOT_EXISTS,
                null
            ];
            const { reserve0 , reserve1  } = reserves;
            const [token0, token1] = tokenA.sortsBefore(tokenB) ? [
                tokenA,
                tokenB
            ] : [
                tokenB,
                tokenA
            ];
            return [
                PairState.EXISTS,
                new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Pair(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token0, reserve0.toString()), _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token1, reserve1.toString())), 
            ];
        });
    }, [
        results,
        tokens
    ]);
}
function usePair(tokenA, tokenB) {
    const pairCurrencies = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            [
                tokenA,
                tokenB
            ]
        ], [
        tokenA,
        tokenB
    ]);
    return usePairs(pairCurrencies)[0];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DB": () => (/* binding */ NEVER_RELOAD),
/* harmony export */   "Wk": () => (/* binding */ useSingleCallResult),
/* harmony export */   "_Y": () => (/* binding */ useMultipleContractSingleData),
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36204);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22284);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function isMethodArg(x) {
    return [
        "string",
        "number"
    ].indexOf(typeof x) !== -1;
}
function isValidMethodArgs(x) {
    return x === undefined || Array.isArray(x) && x.every((xi)=>isMethodArg(xi) || Array.isArray(xi) && xi.every(isMethodArg));
}
const INVALID_RESULT = {
    valid: false,
    blockNumber: undefined,
    data: undefined
};
// use this options object
const NEVER_RELOAD = {
    blocksPerFetch: Infinity
};
// the lowest level call for subscribing to contract data
function useCallsData(calls, options) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const callResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.multicall.callResults);
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const serializedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>JSON.stringify(calls?.filter((c)=>Boolean(c))?.map(_actions__WEBPACK_IMPORTED_MODULE_5__/* .toCallKey */ .kG)?.sort() ?? []), [
        calls
    ]);
    // update listeners when there is an actual change that persists for at least 100ms
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const callKeys = JSON.parse(serializedCallKeys);
        if (!chainId || callKeys.length === 0) return undefined;
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const calls = callKeys.map((key)=>(0,_actions__WEBPACK_IMPORTED_MODULE_5__/* .parseCallKey */ .gl)(key));
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__/* .addMulticallListeners */ .Dd)({
            chainId,
            calls,
            options
        }));
        return ()=>{
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__/* .removeMulticallListeners */ .$x)({
                chainId,
                calls,
                options
            }));
        };
    }, [
        chainId,
        dispatch,
        options,
        serializedCallKeys
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>calls.map((call)=>{
            if (!chainId || !call) return INVALID_RESULT;
            const result = callResults[chainId]?.[(0,_actions__WEBPACK_IMPORTED_MODULE_5__/* .toCallKey */ .kG)(call)];
            let data;
            if (result?.data && result?.data !== "0x") {
                // eslint-disable-next-line prefer-destructuring
                data = result.data;
            }
            return {
                valid: true,
                data,
                blockNumber: result?.blockNumber
            };
        }), [
        callResults,
        calls,
        chainId
    ]);
}
const INVALID_CALL_STATE = {
    valid: false,
    result: undefined,
    loading: false,
    syncing: false,
    error: false
};
const LOADING_CALL_STATE = {
    valid: true,
    result: undefined,
    loading: true,
    syncing: true,
    error: false
};
function toCallState(callResult, contractInterface, fragment, latestBlockNumber) {
    if (!callResult) return INVALID_CALL_STATE;
    const { valid , data , blockNumber  } = callResult;
    if (!valid) return INVALID_CALL_STATE;
    if (valid && !blockNumber) return LOADING_CALL_STATE;
    if (!contractInterface || !fragment || !latestBlockNumber) return LOADING_CALL_STATE;
    const success = data && data.length > 2;
    const syncing = (blockNumber ?? 0) < latestBlockNumber;
    let result;
    if (success && data) {
        try {
            result = contractInterface.decodeFunctionResult(fragment, data);
        } catch (error) {
            console.debug("Result data parsing failed", fragment, data);
            return {
                valid: true,
                loading: false,
                error: true,
                syncing,
                result
            };
        }
    }
    return {
        valid: true,
        loading: false,
        syncing,
        result,
        error: !success
    };
}
function useSingleContractMultipleData(contract, methodName, callInputs, options) {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const fragment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contract?.interface?.getFunction(methodName), [
        contract,
        methodName
    ]);
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contract && fragment && callInputs && callInputs.length > 0 ? callInputs.map((inputs)=>{
            return {
                address: contract.address,
                callData: contract.interface.encodeFunctionData(fragment, inputs)
            };
        }) : [], [
        callInputs,
        contract,
        fragment
    ]);
    const results = useCallsData(calls, options);
    const { cache  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.useSWRConfig)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const currentBlockNumber = cache.get((0,swr__WEBPACK_IMPORTED_MODULE_3__.unstable_serialize)([
            "blockNumber",
            chainId
        ]));
        return results.map((result)=>toCallState(result, contract?.interface, fragment, currentBlockNumber));
    }, [
        cache,
        chainId,
        results,
        contract?.interface,
        fragment
    ]);
}
function useMultipleContractSingleData(addresses, contractInterface, methodName, callInputs, options) {
    const fragment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contractInterface.getFunction(methodName), [
        contractInterface,
        methodName
    ]);
    const callData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>fragment && isValidMethodArgs(callInputs) ? contractInterface.encodeFunctionData(fragment, callInputs) : undefined, [
        callInputs,
        contractInterface,
        fragment
    ]);
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>fragment && addresses && addresses.length > 0 && callData ? addresses.map((address)=>{
            return address && callData ? {
                address,
                callData
            } : undefined;
        }) : [], [
        addresses,
        callData,
        fragment
    ]);
    const results = useCallsData(calls, options);
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { cache  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.useSWRConfig)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const currentBlockNumber = cache.get((0,swr__WEBPACK_IMPORTED_MODULE_3__.unstable_serialize)([
            "blockNumber",
            chainId
        ]));
        return results.map((result)=>toCallState(result, contractInterface, fragment, currentBlockNumber));
    }, [
        cache,
        chainId,
        results,
        contractInterface,
        fragment
    ]);
}
function useSingleCallResult(contract, methodName, inputs, options) {
    const fragment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contract?.interface?.getFunction(methodName), [
        contract,
        methodName
    ]);
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return contract && fragment && isValidMethodArgs(inputs) ? [
            {
                address: contract.address,
                callData: contract.interface.encodeFunctionData(fragment, inputs)
            }, 
        ] : [];
    }, [
        contract,
        fragment,
        inputs
    ]);
    const result = useCallsData(calls, options)[0];
    const { cache  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.useSWRConfig)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const currentBlockNumber = cache.get((0,swr__WEBPACK_IMPORTED_MODULE_3__.unstable_serialize)([
            "blockNumber",
            chainId
        ]));
        return toCallState(result, contract?.interface, fragment, currentBlockNumber);
    }, [
        cache,
        chainId,
        result,
        contract?.interface,
        fragment
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);


const getLpAddress = (token1, token2, chainId = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC)=>{
    let token1AsTokenInstance = token1;
    let token2AsTokenInstance = token2;
    if (!token1 || !token2) {
        return null;
    }
    if (typeof token1 === "string" || token1 instanceof String) {
        const checksummedToken1Address = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(token1);
        if (!checksummedToken1Address) {
            return null;
        }
        token1AsTokenInstance = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ERC20Token(chainId, checksummedToken1Address, 18, "Cake-LP");
    }
    if (typeof token2 === "string" || token2 instanceof String) {
        const checksummedToken2Address = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(token2);
        if (!checksummedToken2Address) {
            return null;
        }
        token2AsTokenInstance = new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ERC20Token(chainId, checksummedToken2Address, 18, "Cake-LP");
    }
    return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Pair.getAddress(token1AsTokenInstance, token2AsTokenInstance);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLpAddress);


/***/ }),

/***/ 37926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ multiplyPriceByAmount)
/* harmony export */ });
/**
 * Helper to multiply a Price object by an arbitrary amount
 */ const multiplyPriceByAmount = (price, amount, significantDigits = 18)=>{
    if (!price) {
        return 0;
    }
    try {
        return parseFloat(price.toSignificant(significantDigits)) * amount;
    } catch (error) {
        return 0;
    }
};


/***/ }),

/***/ 94250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bv": () => (/* binding */ unwrappedToken),
/* harmony export */   "pu": () => (/* binding */ wrappedCurrency)
/* harmony export */ });
/* unused harmony export wrappedCurrencyAmount */
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);

function wrappedCurrency(currency, chainId) {
    return chainId && currency?.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId] : currency?.isToken ? currency : undefined;
}
function wrappedCurrencyAmount(currencyAmount, chainId) {
    const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined;
    return token && currencyAmount ? CurrencyAmount.fromRawAmount(token, currencyAmount.quotient) : undefined;
}
function unwrappedToken(token) {
    if (token.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[token.chainId])) return _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.Native.onChain(token.chainId);
    return token;
}


/***/ })

};
;
//# sourceMappingURL=2993.js.map