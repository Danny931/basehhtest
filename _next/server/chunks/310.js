"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 10886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ChainLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77454);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42791);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const ChainLogo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ chainId , width =24 , height =24  })=>{
    if ((0,utils_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .isChainSupported */ .MR)(chainId)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            alt: `chain-${chainId}`,
            style: {
                maxHeight: `${height}px`
            },
            src: `/images/chains/${chainId}.png`,
            width: width,
            height: height,
            unoptimized: true
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        width: width,
        height: height
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43437);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87434);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_2__]);
state_info_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TOKEN_SEARCH = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query tokens($symbol: String, $name: String, $id: String) {
    asSymbol: tokens(first: 10, where: { symbol_contains: $symbol }, orderBy: tradeVolumeUSD, orderDirection: desc) {
      id
    }
    asName: tokens(first: 10, where: { name_contains: $name }, orderBy: tradeVolumeUSD, orderDirection: desc) {
      id
    }
    asAddress: tokens(first: 1, where: { id: $id }, orderBy: tradeVolumeUSD, orderDirection: desc) {
      id
    }
  }
`;
const POOL_SEARCH = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query pools($tokens: [Bytes]!, $id: String) {
    as0: pairs(first: 10, where: { token0_in: $tokens }) {
      id
    }
    as1: pairs(first: 10, where: { token1_in: $tokens }) {
      id
    }
    asAddress: pairs(first: 1, where: { id: $id }) {
      id
    }
  }
`;
const getIds = (entityArrays)=>{
    const ids = entityArrays.flat().map((entity)=>entity.id);
    return Array.from(new Set(ids));
};
const useFetchSearchResults = (searchString)=>{
    const { 0: searchResults , 1: setSearchResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        tokens: [],
        pools: [],
        loading: false,
        error: false
    });
    const searchStringTooShort = searchString.length < config_constants_info__WEBPACK_IMPORTED_MODULE_4__/* .MINIMUM_SEARCH_CHARACTERS */ .OZ;
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useGetChainName */ .qg)();
    // New value received, reset state
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSearchResults({
            tokens: [],
            pools: [],
            loading: !searchStringTooShort,
            error: false
        });
    }, [
        searchString,
        searchStringTooShort
    ]);
    const tokenQuery = TOKEN_SEARCH;
    const poolQuery = POOL_SEARCH;
    const queryClient = (0,_constant__WEBPACK_IMPORTED_MODULE_3__/* .getMultiChainQueryEndPointWithStableSwap */ .rf)(chainName);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const search = async ()=>{
            try {
                const tokens = await queryClient.request(tokenQuery, {
                    symbol: searchString.toUpperCase(),
                    // Most well known tokens have first letter capitalized
                    name: searchString.charAt(0).toUpperCase() + searchString.slice(1),
                    id: searchString.toLowerCase()
                });
                const tokenIds = getIds([
                    tokens.asAddress,
                    tokens.asSymbol,
                    tokens.asName
                ]);
                const pools = await queryClient.request(poolQuery, {
                    tokens: tokenIds,
                    id: searchString.toLowerCase()
                });
                setSearchResults({
                    tokens: tokenIds,
                    pools: getIds([
                        pools.asAddress,
                        pools.as0,
                        pools.as1
                    ]),
                    loading: false,
                    error: false
                });
            } catch (error) {
                console.error(`Search failed for ${searchString}`, error);
                setSearchResults({
                    tokens: [],
                    pools: [],
                    loading: false,
                    error: true
                });
            }
        };
        if (!searchStringTooShort) {
            search();
        }
    }, [
        searchString,
        searchStringTooShort,
        chainName,
        tokenQuery,
        poolQuery,
        queryClient
    ]);
    // Save ids to Redux
    // Token and Pool updater will then go fetch full data for these addresses
    // These hooks in turn will return data of tokens that have been fetched
    const tokenDatasFull = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useTokenDatasSWR */ .ZF)(searchResults.tokens);
    const poolDatasFull = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_2__/* .usePoolDatasSWR */ .gw)(searchResults.pools);
    // If above hooks returned not all tokens/pools it means
    // that some requests for full data are in progress
    const tokensLoading = tokenDatasFull.length !== searchResults.tokens.length || searchResults.loading;
    const poolsLoading = poolDatasFull.length !== searchResults.pools.length || searchResults.loading;
    return {
        tokens: tokenDatasFull,
        pools: poolDatasFull,
        tokensLoading,
        poolsLoading,
        error: searchResults.error
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchSearchResults);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42791);



const BAD_SRCS = [];
/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback to HelpIcon
 */ const LogoLoader = ({ src , alt , ...rest })=>{
    const { 1: refresh  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const srcFailedLoading = BAD_SRCS.includes(src);
    if (src && !srcFailedLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            ...rest,
            alt: alt,
            src: src,
            onError: ()=>{
                if (src) BAD_SRCS.push(src);
                refresh((i)=>i + 1);
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoLoader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ CurrencyLogo),
/* harmony export */   "g": () => (/* binding */ DoubleCurrencyLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79467);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getTokenLogoURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3063);
/* harmony import */ var _LogoLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LogoLoader__WEBPACK_IMPORTED_MODULE_6__]);
_LogoLoader__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_LogoLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8b5b01e5-0"
})`
  width: ${({ size  })=>size};
  height: ${({ size  })=>size};
  border-radius: ${({ size  })=>size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme  })=>theme.colors.background};
  color: ${({ theme  })=>theme.colors.text};
`;
const CurrencyLogo = ({ address , size ="24px" , chainName ="BSC" , ...rest })=>{
    const src = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return (0,_utils_getTokenLogoURL__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.Token(state_info_constant__WEBPACK_IMPORTED_MODULE_3__/* .multiChainId */ .Pi[chainName], address, 18, ""));
    }, [
        address,
        chainName
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLogo, {
        size: size,
        src: src,
        alt: "token logo",
        ...rest
    });
};
const DoubleCurrencyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-8b5b01e5-1"
})`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32px;
`;
const DoubleCurrencyLogo = ({ address0 , address1 , size =16 , chainName ="BSC" ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DoubleCurrencyWrapper, {
        children: [
            address0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrencyLogo, {
                address: address0,
                size: `${size.toString()}px`,
                chainName: chainName
            }),
            address1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrencyLogo, {
                address: address1,
                size: `${size.toString()}px`,
                chainName: chainName
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NetworkSwitcher */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74813);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(67817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var views_Info_components_InfoSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95570);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87434);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79467);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40495);
/* harmony import */ var components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10886);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_wagmi_chains__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Info_components_InfoSearch__WEBPACK_IMPORTED_MODULE_5__, state_info_hooks__WEBPACK_IMPORTED_MODULE_6__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([views_Info_components_InfoSearch__WEBPACK_IMPORTED_MODULE_5__, state_info_hooks__WEBPACK_IMPORTED_MODULE_6__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-48d44bdb-0"
})`
  background: ${({ theme  })=>theme.colors.gradientCardHeader};
  justify-content: space-between;
  padding: 20px 16px;
  flex-direction: column;
  gap: 8px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    padding: 20px 40px;
    flex-direction: row;
  }
`;
const InfoNav = ({ isStableSwap  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const chainPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useMultiChainPath */ .hb)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3React */ .Ge)();
    const isPools = router.pathname === `/info${chainPath && `/[chainName]`}/pools`;
    const isTokens = router.pathname === `/info${chainPath && `/[chainName]`}/tokens`;
    const stableSwapQuery = isStableSwap ? "?type=stableSwap" : "";
    let activeIndex = 0;
    if (isPools) {
        activeIndex = 1;
    }
    if (isTokens) {
        activeIndex = 2;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavWrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            activeIndex: activeIndex,
                            scale: "sm",
                            variant: "subtle",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                                    to: `/info${chainPath}${stableSwapQuery}`,
                                    children: t("Overview")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                                    to: `/info${chainPath}/pools${stableSwapQuery}`,
                                    children: t("Pools")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                                    to: `/info${chainPath}/tokens${stableSwapQuery}`,
                                    children: t("Tokens")
                                })
                            ]
                        })
                    }),
                    !account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NetworkSwitcher, {
                        activeIndex: activeIndex
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                width: [
                    "100%",
                    "100%",
                    "250px"
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    });
};
const targetChains = [
    _pancakeswap_wagmi_chains__WEBPACK_IMPORTED_MODULE_11__/* .mainnet */ .RJ,
    _pancakeswap_wagmi_chains__WEBPACK_IMPORTED_MODULE_11__/* .bsc */ .eG
];
const NetworkSwitcher = ({ activeIndex  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetChainName */ .qg)();
    const foundChain = utils_wagmi__WEBPACK_IMPORTED_MODULE_8__/* .chains.find */ .p5.find((d)=>d.id === state_info_constant__WEBPACK_IMPORTED_MODULE_7__/* .multiChainId */ .Pi[chainName]);
    const symbol = foundChain?.nativeCurrency?.symbol;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const switchNetwork = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((chainPath)=>{
        if (activeIndex === 0) router.push(`/info${chainPath}`);
        if (activeIndex === 1) router.push(`/info${chainPath}/pools`);
        if (activeIndex === 2) router.push(`/info${chainPath}/tokens`);
    }, [
        router,
        activeIndex
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
        alignItems: "top",
        ml: "8px",
        avatarSrc: `/images/chains/${state_info_constant__WEBPACK_IMPORTED_MODULE_7__/* .multiChainId */ .Pi[chainName]}.png`,
        text: foundChain ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    display: [
                        "none",
                        null,
                        null,
                        null,
                        null,
                        "block"
                    ],
                    children: foundChain.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    display: [
                        "block",
                        null,
                        null,
                        null,
                        null,
                        "none"
                    ],
                    children: symbol
                })
            ]
        }) : t("Select a Network"),
        children: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NetworkSelect, {
                chainId: state_info_constant__WEBPACK_IMPORTED_MODULE_7__/* .multiChainId */ .Pi[chainName],
                switchNetwork: switchNetwork
            })
    });
};
const NetworkSelect = ({ switchNetwork , chainId ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                px: "16px",
                py: "8px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    children: t("Select a Network")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* .UserMenuDivider */ .v, {}),
            targetChains.map((chain)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* .UserMenuItem */ .l, {
                    style: {
                        justifyContent: "flex-start"
                    },
                    onClick: ()=>{
                        if (chain.id !== chainId) switchNetwork(state_info_constant__WEBPACK_IMPORTED_MODULE_7__/* .multiChainPaths */ .Dw[chain.id]);
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_9__/* .ChainLogo */ .E, {
                            chainId: chain.id
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            color: chain.id === chainId ? "secondary" : "text",
                            bold: chain.id === chainId,
                            pl: "12px",
                            children: chain.name
                        })
                    ]
                }, chain.id))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65726);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43437);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87434);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79467);
/* harmony import */ var state_info_queries_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70672);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72135);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84785);
/* harmony import */ var views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80675);
/* harmony import */ var views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_info_hooks__WEBPACK_IMPORTED_MODULE_6__, state_info_queries_search__WEBPACK_IMPORTED_MODULE_8__, state_user_hooks__WEBPACK_IMPORTED_MODULE_9__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_12__, views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([state_info_hooks__WEBPACK_IMPORTED_MODULE_6__, state_info_queries_search__WEBPACK_IMPORTED_MODULE_8__, state_user_hooks__WEBPACK_IMPORTED_MODULE_9__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_12__, views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Container = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-0"
})`
  position: relative;
  z-index: 30;
  width: 100%;
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2f1efc5c-1"
})`
  z-index: 9999;
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
`;
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-2"
})`
  display: ${({ hide  })=>hide ? "none" : "flex"};
  flex-direction: column;
  z-index: 9999;
  width: 100%;
  top: 50px;
  max-height: 400px;
  overflow: auto;
  right: 0;
  padding: 1.5rem;
  padding-bottom: 2.5rem;
  position: absolute;
  background: ${({ theme  })=>theme.colors.background};
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.04);
  border: 1px solid ${({ theme  })=>theme.colors.secondary};
  margin-top: 4px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-top: 0;
    width: 500px;
    max-height: 600px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    margin-top: 0;
    width: 800px;
    max-height: 600px;
  }
`;
const Blackout = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-3"
})`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: black;
  opacity: 0.7;
  left: 0;
  top: 0;
`;
const ResponsiveGrid = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-4"
})`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  margin: 8px 0;
  align-items: center;
  ${({ theme  })=>theme.mediaQueries.sm} {
    grid-template-columns: 1.5fr repeat(3, 1fr);
  }
`;
const Break = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-5"
})`
  height: 1px;
  background-color: ${({ theme  })=>theme.colors.cardBorder};
  width: 100%;
  margin: 16px 0;
`;
const HoverText = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-6"
})`
  color: ${({ theme  })=>theme.colors.secondary};
  display: ${({ hide  })=>hide ? "none" : "block"};
  margin-top: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const HoverRowLink = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-7"
})`
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const OptionButton = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-2f1efc5c-8"
})`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 8px;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme , enabled  })=>enabled ? theme.colors.primary : "transparent"};
  color: ${({ theme , enabled  })=>enabled ? theme.card.background : theme.colors.secondary};
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
const tokenIncludesSearchTerm = (token, value)=>{
    return token.address.toLowerCase().includes(value.toLowerCase()) || token.symbol.toLowerCase().includes(value.toLowerCase()) || token.name.toLowerCase().includes(value.toLowerCase());
};
const poolIncludesSearchTerm = (pool, value)=>{
    return pool.address.toLowerCase().includes(value.toLowerCase()) || tokenIncludesSearchTerm(pool.token0, value) || tokenIncludesSearchTerm(pool.token1, value);
};
const Search = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const showMoreRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { 0: showMenu , 1: setShowMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const debouncedSearchTerm = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useDebounce */ .Nr)(value, 600);
    const { tokens , pools , tokensLoading , poolsLoading , error  } = (0,state_info_queries_search__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(debouncedSearchTerm);
    const { 0: tokensShown , 1: setTokensShown  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);
    const { 0: poolsShown , 1: setPoolsShown  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setTokensShown(3);
        setPoolsShown(3);
    }, [
        debouncedSearchTerm
    ]);
    const handleOutsideClick = (e)=>{
        const menuClick = menuRef.current && menuRef.current.contains(e.target);
        const inputCLick = inputRef.current && inputRef.current.contains(e.target);
        const showMoreClick = showMoreRef.current && showMoreRef.current.contains(e.target);
        if (!menuClick && !inputCLick && !showMoreClick) {
            setPoolsShown(3);
            setTokensShown(3);
            setShowMenu(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (showMenu) {
            document.addEventListener("click", handleOutsideClick);
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.removeEventListener("click", handleOutsideClick);
            document.querySelector("body").style.overflow = "visible";
        }
        return ()=>{
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [
        showMenu
    ]);
    // watchlist
    const [savedTokens, addSavedToken] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useWatchlistTokens */ .z6)();
    const [savedPools, addSavedPool] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useWatchlistPools */ .Hx)();
    const handleItemClick = (to)=>{
        setShowMenu(false);
        setPoolsShown(3);
        setTokensShown(3);
        router.push(to);
    };
    // get date for watchlist
    const watchListTokenData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useTokenDatasSWR */ .ZF)(savedTokens);
    const watchListPoolData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePoolDatasSWR */ .gw)(savedPools);
    const watchListPoolLoading = watchListPoolData.length !== savedPools.length;
    // filter on view
    const { 0: showWatchlist , 1: setShowWatchlist  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const tokensForList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (showWatchlist) {
            return watchListTokenData.filter((token)=>tokenIncludesSearchTerm(token, value));
        }
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(tokens, (token)=>token.volumeUSD, "desc");
    }, [
        showWatchlist,
        tokens,
        watchListTokenData,
        value
    ]);
    const poolForList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (showWatchlist) {
            return watchListPoolData.filter((pool)=>poolIncludesSearchTerm(pool, value));
        }
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(pools, (pool)=>pool.volumeUSD, "desc");
    }, [
        pools,
        showWatchlist,
        watchListPoolData,
        value
    ]);
    const contentUnderTokenList = ()=>{
        const isLoading = tokensLoading;
        const noTokensFound = tokensForList.length === 0 && !isLoading && debouncedSearchTerm.length >= config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .MINIMUM_SEARCH_CHARACTERS */ .OZ;
        const noWatchlistTokens = tokensForList.length === 0 && !isLoading;
        const showMessage = showWatchlist ? noWatchlistTokens : noTokensFound;
        const noTokensMessage = t("No results");
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                showMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    children: noTokensMessage
                }),
                !showWatchlist && debouncedSearchTerm.length < config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .MINIMUM_SEARCH_CHARACTERS */ .OZ && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    children: t("Search pools or tokens")
                })
            ]
        });
    };
    const contentUnderPoolList = ()=>{
        const isLoading = showWatchlist ? watchListPoolLoading : poolsLoading;
        const noPoolsFound = poolForList.length === 0 && !poolsLoading && debouncedSearchTerm.length >= config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .MINIMUM_SEARCH_CHARACTERS */ .OZ;
        const noWatchlistPools = poolForList.length === 0 && !isLoading;
        const showMessage = showWatchlist ? noWatchlistPools : noPoolsFound;
        const noPoolsMessage = showWatchlist ? t("Saved tokens will appear here") : t("No results");
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                showMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    children: noPoolsMessage
                }),
                !showWatchlist && debouncedSearchTerm.length < config_constants_info__WEBPACK_IMPORTED_MODULE_16__/* .MINIMUM_SEARCH_CHARACTERS */ .OZ && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    children: t("Search pools or tokens")
                })
            ]
        });
    };
    const chainPath = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useMultiChainPath */ .hb)();
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetChainName */ .qg)();
    const stableSwapQuery = (0,state_info_constant__WEBPACK_IMPORTED_MODULE_7__/* .checkIsStableSwap */ .J5)() ? "?type=stableSwap" : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showMenu ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Blackout, {}) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                        type: "text",
                        value: value,
                        onChange: (e)=>{
                            setValue(e.target.value);
                        },
                        placeholder: t("Search pools or tokens"),
                        ref: inputRef,
                        onFocus: ()=>{
                            setShowMenu(true);
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Menu, {
                        hide: !showMenu,
                        ref: menuRef,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                mb: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OptionButton, {
                                        enabled: !showWatchlist,
                                        onClick: ()=>setShowWatchlist(false),
                                        children: t("Search")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OptionButton, {
                                        enabled: showWatchlist,
                                        onClick: ()=>setShowWatchlist(true),
                                        children: t("Watchlist")
                                    })
                                ]
                            }),
                            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                color: "failure",
                                children: t("Error occurred, please try again")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "secondary",
                                        children: t("Tokens")
                                    }),
                                    !isXs && !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        textAlign: "end",
                                        fontSize: "12px",
                                        children: t("Price")
                                    }),
                                    !isXs && !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        textAlign: "end",
                                        fontSize: "12px",
                                        children: t("Volume 24H")
                                    }),
                                    !isXs && !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        textAlign: "end",
                                        fontSize: "12px",
                                        children: t("Liquidity")
                                    })
                                ]
                            }),
                            tokensForList.slice(0, tokensShown).map((token)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverRowLink, {
                                    onClick: ()=>handleItemClick(`/info${chainPath}/tokens/${token.address}${stableSwapQuery}`),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_12__/* .CurrencyLogo */ .X, {
                                                        address: token.address,
                                                        chainName: chainName
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        ml: "10px",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                            children: `${token.name} (${token.symbol})`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                        id: "watchlist-icon",
                                                        style: {
                                                            marginLeft: "8px"
                                                        },
                                                        fill: savedTokens.includes(token.address),
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            addSavedToken(token.address);
                                                        }
                                                    })
                                                ]
                                            }),
                                            !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                textAlign: "end",
                                                children: [
                                                    "$",
                                                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__/* .formatAmount */ .d)(token.priceUSD)
                                                ]
                                            }),
                                            !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                textAlign: "end",
                                                children: [
                                                    "$",
                                                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__/* .formatAmount */ .d)(token.volumeUSD)
                                                ]
                                            }),
                                            !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                textAlign: "end",
                                                children: [
                                                    "$",
                                                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__/* .formatAmount */ .d)(token.liquidityUSD)
                                                ]
                                            })
                                        ]
                                    })
                                }, `searchTokenResult${token.address}`);
                            }),
                            contentUnderTokenList(),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverText, {
                                onClick: ()=>{
                                    setTokensShown(tokensShown + 5);
                                },
                                hide: tokensForList.length <= tokensShown,
                                ref: showMoreRef,
                                children: t("See more...")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Break, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "secondary",
                                        mb: "8px",
                                        children: t("Pools")
                                    }),
                                    !isXs && !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        textAlign: "end",
                                        fontSize: "12px",
                                        children: t("Volume 24H")
                                    }),
                                    !isXs && !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        textAlign: "end",
                                        fontSize: "12px",
                                        children: t("Volume 7D")
                                    }),
                                    !isXs && !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        textAlign: "end",
                                        fontSize: "12px",
                                        children: t("Liquidity")
                                    })
                                ]
                            }),
                            poolForList.slice(0, poolsShown).map((p)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverRowLink, {
                                    onClick: ()=>handleItemClick(`/info${chainPath}/pools/${p.address}${stableSwapQuery}`),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResponsiveGrid, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_12__/* .DoubleCurrencyLogo */ .g, {
                                                        address0: p.token0.address,
                                                        address1: p.token1.address,
                                                        chainName: chainName
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        ml: "10px",
                                                        style: {
                                                            whiteSpace: "nowrap"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                            children: `${p.token0.symbol} / ${p.token1.symbol}`
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                        id: "watchlist-icon",
                                                        style: {
                                                            marginLeft: "10px"
                                                        },
                                                        fill: savedPools.includes(p.address),
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            addSavedPool(p.address);
                                                        }
                                                    })
                                                ]
                                            }),
                                            !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                textAlign: "end",
                                                children: [
                                                    "$",
                                                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__/* .formatAmount */ .d)(p.volumeUSD)
                                                ]
                                            }),
                                            !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                textAlign: "end",
                                                children: [
                                                    "$",
                                                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__/* .formatAmount */ .d)(p.volumeUSDWeek)
                                                ]
                                            }),
                                            !isXs && !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                textAlign: "end",
                                                children: [
                                                    "$",
                                                    (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_11__/* .formatAmount */ .d)(p.liquidityUSD)
                                                ]
                                            })
                                        ]
                                    })
                                }, `searchPoolResult${p.address}`);
                            }),
                            contentUnderPoolList(),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverText, {
                                onClick: ()=>{
                                    setPoolsShown(poolsShown + 5);
                                },
                                hide: poolForList.length <= poolsShown,
                                ref: showMoreRef,
                                children: t("See more...")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eh": () => (/* binding */ Arrow),
/* harmony export */   "Ob": () => (/* binding */ PageButtons),
/* harmony export */   "SS": () => (/* binding */ Break),
/* harmony export */   "_J": () => (/* binding */ ClickableColumnHeader),
/* harmony export */   "y6": () => (/* binding */ TableWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ClickableColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4dd460a5-0"
})`
  cursor: pointer;
`;
const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4dd460a5-1"
})`
  width: 100%;
  padding-top: 16px;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme  })=>theme.card.background};
  border-radius: ${({ theme  })=>theme.radii.card};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
`;
const PageButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4dd460a5-2"
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 1.2em;
`;
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4dd460a5-3"
})`
  color: ${({ theme  })=>theme.colors.primary};
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;
const Break = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4dd460a5-4"
})`
  height: 1px;
  background-color: ${({ theme  })=>theme.colors.cardBorder};
  width: 100%;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8285);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2410);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const HoverIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-aaa78dec-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const SaveIcon = ({ fill =false , ...rest })=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverIcon, {
        ...rest,
        children: fill ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            stroke: theme.colors.warning,
            color: theme.colors.warning
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            stroke: theme.colors.textDisabled
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ InfoPageLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69866);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87434);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_InfoNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, state_info_hooks__WEBPACK_IMPORTED_MODULE_6__, _components_InfoNav__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, state_info_hooks__WEBPACK_IMPORTED_MODULE_6__, _components_InfoNav__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const InfoPageLayout = ({ children  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const chainName = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetChainName */ .qg)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (account && chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC && router.query.chainName === "eth") router.replace("/info", undefined, {
            shallow: true
        });
        if (account && chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM && router.query.chainName !== "eth") router.replace("/info/eth", undefined, {
            shallow: true
        });
    }, [
        chainId,
        account,
        chainName,
        router
    ]);
    const isStableSwap = router.query.type === "stableSwap";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            chainName === "BSC" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                items: [
                    {
                        label: t("Swap"),
                        href: "/info"
                    },
                    {
                        label: t("StableSwap"),
                        href: "/info?type=stableSwap"
                    }, 
                ],
                activeItem: isStableSwap ? "/info?type=stableSwap" : "/info"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InfoNav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                isStableSwap: isStableSwap
            }),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 1239:
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
            d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 8285:
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 2410:
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 8483:
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 83435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports NoProfileMenuIcon, PendingMenuIcon, WarningMenuIcon, DangerMenuIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84533);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97131);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8483);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1239);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84507);






const MenuIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e5a41a22-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.background};
  border-color: ${({ theme , borderColor  })=>theme.colors[borderColor]};
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: flex;
  height: 32px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
  z-index: 102;
`;
const ProfileIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e5a41a22-1"
})`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`;
const NoProfileMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            color: "primary",
            width: "24px"
        })
    });
const PendingMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "secondary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            color: "secondary",
            width: "24px",
            spin: true
        })
    });
const WarningMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "warning",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "warning",
            width: "24px"
        })
    });
const DangerMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "failure",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "failure",
            width: "24px"
        })
    });
const MenuIcon = ({ avatarSrc , variant ,  })=>{
    if (variant === _types__WEBPACK_IMPORTED_MODULE_7__/* .variants.DANGER */ .o.DANGER) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DangerMenuIcon, {});
    }
    if (variant === _types__WEBPACK_IMPORTED_MODULE_7__/* .variants.WARNING */ .o.WARNING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WarningMenuIcon, {});
    }
    if (variant === _types__WEBPACK_IMPORTED_MODULE_7__/* .variants.PENDING */ .o.PENDING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PendingMenuIcon, {});
    }
    if (!avatarSrc) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoProfileMenuIcon, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileIcon, {
        src: avatarSrc,
        height: 32,
        width: 32
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);


/***/ }),

/***/ 67817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports StyledUserMenu, LabelText */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33231);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84533);
/* harmony import */ var _MenuIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83435);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_4__, _components_Box__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Box__WEBPACK_IMPORTED_MODULE_4__, _components_Box__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledUserMenu = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-69f0d58f-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.tertiary};
  border-radius: 16px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 32px;
  padding-right: 8px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`;
const LabelText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-69f0d58f-1"
})`
  color: ${({ theme  })=>theme.colors.text};
  display: none;
  font-weight: 600;

  ${({ theme  })=>theme.mediaQueries.sm} {
    display: block;
    margin-left: 8px;
    margin-right: 4px;
  }
`;
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-69f0d58f-2"
})`
  background-color: ${({ theme  })=>theme.card.background};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  width: 280px;
  visibility: visible;
  z-index: 1001;

  ${({ isOpen  })=>!isOpen && `
    pointer-events: none;
    visibility: hidden;
  `}

  ${_styles__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${_styles__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l}:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
const UserMenu = ({ account , text , avatarSrc , variant =_types__WEBPACK_IMPORTED_MODULE_6__/* .variants.DEFAULT */ .o.DEFAULT , children , disabled , placement ="bottom-end" , ...props })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: targetRef , 1: setTargetRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tooltipRef , 1: setTooltipRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const accountEllipsis = account ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : null;
    const { styles , attributes  } = (0,react_popper__WEBPACK_IMPORTED_MODULE_2__.usePopper)(targetRef, tooltipRef, {
        strategy: "fixed",
        placement,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        0
                    ]
                }
            }
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const showDropdownMenu = ()=>{
            setIsOpen(true);
        };
        const hideDropdownMenu = (evt)=>{
            const target = evt.target;
            if (target && !tooltipRef?.contains(target)) {
                setIsOpen(false);
                evt.stopPropagation();
            }
        };
        targetRef?.addEventListener("mouseenter", showDropdownMenu);
        targetRef?.addEventListener("mouseleave", hideDropdownMenu);
        return ()=>{
            targetRef?.removeEventListener("mouseenter", showDropdownMenu);
            targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [
        targetRef,
        tooltipRef,
        setIsOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alignItems: "center",
        height: "100%",
        ref: setTargetRef,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledUserMenu, {
                onTouchStart: ()=>{
                    setIsOpen((s)=>!s);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        avatarSrc: avatarSrc,
                        variant: variant
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LabelText, {
                        title: typeof text === "string" ? text || account : account,
                        children: text || accountEllipsis
                    }),
                    !disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        color: "text",
                        width: "24px"
                    })
                ]
            }),
            !disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                style: styles.popper,
                ref: setTooltipRef,
                ...attributes.popper,
                isOpen: isOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    onClick: ()=>setIsOpen(false),
                    children: children?.({
                        isOpen
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ UserMenuItem),
/* harmony export */   "v": () => (/* binding */ UserMenuDivider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const UserMenuDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
    componentId: "sc-41c17261-0"
})`
  border-color: ${({ theme  })=>theme.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`;
const UserMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-41c17261-1"
})`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme , disabled  })=>theme.colors[disabled ? "textDisabled" : "textSubtle"]};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  &:is(button) {
    cursor: ${({ disabled  })=>disabled ? "not-allowed" : "pointer"};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme  })=>theme.colors.tertiary};
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;


/***/ }),

/***/ 84533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
const variants = {
    DEFAULT: "default",
    WARNING: "warning",
    DANGER: "danger",
    PENDING: "pending"
};


/***/ })

};
;
//# sourceMappingURL=310.js.map