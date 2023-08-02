"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 23533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/astronaut-bunny.eacc4c8c.png","height":1024,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAklEQVR42mOAgT3V4RMPL5hyhgEO1rL8//+fmeF2TqbW1Xn5vdeWeJ5d2z3nf1nxrlCQ9KyelS2Tu3eZMTzwzdd6Ptn/15G++P8T0tt+91Yf/J++5M3C//8ZmHqm3RVhAIHzCZvWbkrs+b80L+1HU+Oe/5VX/x8AiX89pqQKsT9j/+Y1yQX/qzILfk9aeev/vl2PXk+ffjKDAQQOZB+XM2cIFm0s6Zm3ZtHJf7tXXPm/7NTH/wf23+r8/4eBk2Fhwdr/mxatzznct0Pn6NxV6ysmr2hYdPDGrQubb5y4Nv2wFUNpfF/a3LbZTjNyl6X6xTHwg0w90Tw7amn6UmsGhuesAGVcfzzJuCBgAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 83106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useCompetitionStatus)
/* harmony export */ });
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants_trading_competition_phases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82926);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__]);
([swr_immutable__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useCompetitionStatus = ()=>{
    const tradingCompetitionContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useTradingCompetitionContractMoD */ .o$)(false);
    const { data: state  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__["default"])("competitionStatus", async ()=>{
        const competitionStatus = await tradingCompetitionContract.currentStatus();
        return config_constants_trading_competition_phases__WEBPACK_IMPORTED_MODULE_2__/* .SmartContractPhases */ .YT[competitionStatus].state;
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (state === config_constants_trading_competition_phases__WEBPACK_IMPORTED_MODULE_2__/* .REGISTRATION */ .th) {
            return "soon";
        }
        if (state === config_constants_trading_competition_phases__WEBPACK_IMPORTED_MODULE_2__/* .LIVE */ .wI) {
            return "live";
        }
        return null;
    }, [
        state
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72744);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const TeamAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
    componentId: "sc-c5c8ef7c-0"
})`
  border: 1px solid ${({ theme  })=>theme.card.background};
  border-radius: 50%;
  bottom: 0px;
  position: absolute;
  right: 0px;
  min-width: 20px;
  min-height: 20px;
  width: 37.5%;
  height: 37.5%;
  z-index: 5;

  ${({ theme  })=>theme.mediaQueries.sm} {
    border-width: 2px;
  }
`;
const AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c5c8ef7c-1"
})`
  background: url('${({ bg  })=>bg}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 100%;
  height: 100%;

  & > img {
    border-radius: 50%;
  }
`;
// TODO: replace with no profile avatar icon
const AvatarInactive = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c5c8ef7c-2"
})`
  width: 100%;
  height: 100%;
`;
const ProfileAvatarWithTeam = ({ profile  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AvatarWrapper, {
        bg: profile.nft?.image.thumbnail,
        children: [
            !profile.isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AvatarInactive, {}),
            profile.team && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TeamAvatar, {
                src: `/images/teams/${profile.team.images.alt}`,
                alt: profile.team.name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAvatarWithTeam);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BY": () => (/* binding */ LP_HOLDERS_FEE),
/* harmony export */   "Bq": () => (/* binding */ ONE_DAY_UNIX),
/* harmony export */   "DY": () => (/* binding */ PCS_ETH_START),
/* harmony export */   "MV": () => (/* binding */ WEEKS_IN_YEAR),
/* harmony export */   "OZ": () => (/* binding */ MINIMUM_SEARCH_CHARACTERS),
/* harmony export */   "Rr": () => (/* binding */ PCS_V2_START),
/* harmony export */   "Tb": () => (/* binding */ ONE_HOUR_SECONDS),
/* harmony export */   "Vd": () => (/* binding */ ETH_TOKEN_BLACKLIST),
/* harmony export */   "hT": () => (/* binding */ TREASURY_FEE),
/* harmony export */   "om": () => (/* binding */ TOTAL_FEE),
/* harmony export */   "si": () => (/* binding */ ITEMS_PER_INFO_TABLE_PAGE),
/* harmony export */   "tE": () => (/* binding */ TOKEN_BLACKLIST),
/* harmony export */   "xy": () => (/* binding */ BUYBACK_FEE)
/* harmony export */ });
const MINIMUM_SEARCH_CHARACTERS = 2;
const WEEKS_IN_YEAR = 52.1429;
const TOTAL_FEE = 0.0025;
const LP_HOLDERS_FEE = 0.0017;
const TREASURY_FEE = 0.000225;
const BUYBACK_FEE = 0.000575;
const PCS_V2_START = 1619136000 // April 23, 2021, 12:00:00 AM
;
const PCS_ETH_START = 1664130827 // Sep 23, 2022, 02:33:47 AM
;
const ONE_DAY_UNIX = 86400 // 24h * 60m * 60s
;
const ONE_HOUR_SECONDS = 3600;
const ITEMS_PER_INFO_TABLE_PAGE = 10;
// These tokens are either incorrectly priced or have some other issues that spoil the query data
// None of them present any interest as they have almost 0 daily trade volume
const TOKEN_BLACKLIST = [
    // These ones are copied from v1 info
    "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
    "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
    "0xe31debd7abff90b06bca21010dd860d8701fd901",
    "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
    "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007",
    "0xfd158609228b43aa380140b46fff3cdf9ad315de",
    "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea",
    "0x205969b3ad459f7eba0dee07231a6357183d3fb6",
    "0x0bd67d358636fd7b0597724aa4f20beedbf3073a",
    "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075",
    "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30",
    "0x041929a760d7049edaef0db246fa76ec975e90cc",
    "0xba098df8c6409669f5e6ec971ac02cd5982ac108",
    "0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94",
    "0xe99512305bf42745fae78003428dcaf662afb35d",
    "0xbE609EAcbFca10F6E5504D39E3B113F808389056",
    "0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e",
    "0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b",
    // These ones are newly found
    "0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653",
    "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b", 
];
const ETH_TOKEN_BLACKLIST = [
    "0x72b169ad8af6c4fb53056b6a2a85602ad6863864"
];


/***/ }),

/***/ 82926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1": () => (/* binding */ OVER),
/* harmony export */   "EF": () => (/* binding */ CompetitionSteps),
/* harmony export */   "YT": () => (/* binding */ SmartContractPhases),
/* harmony export */   "_H": () => (/* binding */ FINISHED),
/* harmony export */   "mq": () => (/* binding */ CompetitionPhases),
/* harmony export */   "ql": () => (/* binding */ CLAIM),
/* harmony export */   "th": () => (/* binding */ REGISTRATION),
/* harmony export */   "wI": () => (/* binding */ LIVE)
/* harmony export */ });
const REGISTRATION = "REGISTRATION";
const LIVE = "LIVE";
const FINISHED = "FINISHED";
const CLAIM = "CLAIM";
const OVER = "OVER";
const CompetitionPhases = {
    REGISTRATION: {
        state: REGISTRATION,
        // 2022–05–17 07:59 AM UTC
        ends: 1652774399000,
        step: {
            index: 0,
            text: "Entry"
        }
    },
    LIVE: {
        state: LIVE,
        // 2022–05–24 07:59 AM UTC
        ends: 1653379199000,
        step: {
            index: 1,
            text: "Live"
        }
    },
    FINISHED: {
        state: FINISHED,
        ends: null,
        step: {
            index: 2,
            text: "End"
        }
    },
    CLAIM: {
        state: CLAIM,
        ends: null,
        step: {
            index: 2,
            text: "End"
        }
    },
    OVER: {
        state: OVER,
        ends: null,
        step: {
            index: 2,
            text: "End"
        }
    }
};
const CompetitionSteps = [
    CompetitionPhases.REGISTRATION.step,
    CompetitionPhases.LIVE.step,
    CompetitionPhases.FINISHED.step, 
];
const SmartContractPhases = {
    0: CompetitionPhases.REGISTRATION,
    1: CompetitionPhases.LIVE,
    2: CompetitionPhases.FINISHED,
    3: CompetitionPhases.CLAIM,
    4: CompetitionPhases.OVER
};


/***/ }),

/***/ 20380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FLAG_FARM)
/* harmony export */ });
const FLAG_FARM = "pkg";


/***/ }),

/***/ 21791:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useActiveIfoWithBlocks)
/* harmony export */ });
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79847);
/* harmony import */ var _config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49795);
/* harmony import */ var _utils_multicall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25152);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_0__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const activeIfo = _config_constants__WEBPACK_IMPORTED_MODULE_3__/* .ifosConfig.find */ .Q2.find((ifo)=>ifo.isActive);
const useActiveIfoWithBlocks = ()=>{
    const { data: currentIfoBlocks = {
        startBlock: 0,
        endBlock: 0
    }  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__["default"])(activeIfo ? [
        "ifo",
        "currentIfo"
    ] : null, async ()=>{
        const abi = _config_abi_ifoV3_json__WEBPACK_IMPORTED_MODULE_1__;
        const [startBlock, endBlock] = await (0,_utils_multicall__WEBPACK_IMPORTED_MODULE_2__/* .multicallv2 */ .v)({
            abi,
            calls: [
                {
                    address: activeIfo.address,
                    name: "startBlock"
                },
                {
                    address: activeIfo.address,
                    name: "endBlock"
                }, 
            ],
            options: {
                requireSuccess: false
            }
        });
        return {
            startBlock: startBlock ? startBlock[0].toNumber() : 0,
            endBlock: endBlock ? endBlock[0].toNumber() : 0
        };
    });
    return activeIfo ? {
        ...activeIfo,
        ...currentIfoBlocks
    } : null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 53887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useVaultApy)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56648);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toString__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7599);
/* harmony import */ var config_abi_masterchef_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84951);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11496);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79847);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70627);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85576);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73486);
/* harmony import */ var _utils_multicall__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const masterChefAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getMasterChefAddress */ .Oc)();
// default
const DEFAULT_PERFORMANCE_FEE_DECIMALS = 2;
const PRECISION_FACTOR = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from("1000000000000");
const getFlexibleApy = (totalCakePoolEmissionPerYear, pricePerFullShare, totalShares)=>totalCakePoolEmissionPerYear.mulUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.WeiPerEther)).divUnsafe(pricePerFullShare).divUnsafe(totalShares).mulUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(100));
const _getBoostFactor = (boostWeight, duration, durationFactor)=>{
    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(boostWeight).mulUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(Math.max(duration, 0))).divUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(durationFactor)).divUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(PRECISION_FACTOR));
};
const getLockedApy = (flexibleApy, boostFactor)=>_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(flexibleApy).mulUnsafe(boostFactor.addUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from("1")));
const cakePoolPID = 0;
function useVaultApy({ duration =config_constants_pools__WEBPACK_IMPORTED_MODULE_10__/* .MAX_LOCK_DURATION */ .VO  } = {}) {
    const { totalShares =_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW , pricePerFullShare =_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW , fees: { performanceFeeAsDecimal  } = {
        performanceFeeAsDecimal: DEFAULT_PERFORMANCE_FEE_DECIMALS
    } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useCakeVault */ .Xo)();
    const totalSharesAsEtherBN = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(totalShares.toString()), [
        totalShares
    ]);
    const pricePerFullShareAsEtherBN = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(pricePerFullShare.toString()), [
        pricePerFullShare
    ]);
    const { data: totalCakePoolEmissionPerYear  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])("masterChef-total-cake-pool-emission", async ()=>{
        const calls = [
            {
                address: masterChefAddress,
                name: "cakePerBlock",
                params: [
                    false
                ]
            },
            {
                address: masterChefAddress,
                name: "poolInfo",
                params: [
                    cakePoolPID
                ]
            },
            {
                address: masterChefAddress,
                name: "totalSpecialAllocPoint"
            }, 
        ];
        const [[specialFarmsPerBlock], cakePoolInfo, [totalSpecialAllocPoint]] = await (0,_utils_multicall__WEBPACK_IMPORTED_MODULE_11__/* .multicallv2 */ .v)({
            abi: config_abi_masterchef_json__WEBPACK_IMPORTED_MODULE_4__,
            calls
        });
        const cakePoolSharesInSpecialFarms = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(cakePoolInfo.allocPoint).divUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(totalSpecialAllocPoint));
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(specialFarmsPerBlock).mulUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(config__WEBPACK_IMPORTED_MODULE_3__/* .BLOCKS_PER_YEAR */ .Bi)).mulUnsafe(cakePoolSharesInSpecialFarms);
    });
    const flexibleApy = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>totalCakePoolEmissionPerYear && !pricePerFullShareAsEtherBN.isZero() && !totalSharesAsEtherBN.isZero() && getFlexibleApy(totalCakePoolEmissionPerYear, pricePerFullShareAsEtherBN, totalSharesAsEtherBN).toString(), [
        pricePerFullShareAsEtherBN,
        totalCakePoolEmissionPerYear,
        totalSharesAsEtherBN
    ]);
    const boostFactor = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>_getBoostFactor(config_constants_pools__WEBPACK_IMPORTED_MODULE_10__/* .BOOST_WEIGHT */ .xt, duration, config_constants_pools__WEBPACK_IMPORTED_MODULE_10__/* .DURATION_FACTOR */ .A0), [
        duration
    ]);
    const lockedApy = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return flexibleApy && getLockedApy(flexibleApy, boostFactor).toString();
    }, [
        boostFactor,
        flexibleApy
    ]);
    const getBoostFactor = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((adjustDuration)=>_getBoostFactor(config_constants_pools__WEBPACK_IMPORTED_MODULE_10__/* .BOOST_WEIGHT */ .xt, adjustDuration, config_constants_pools__WEBPACK_IMPORTED_MODULE_10__/* .DURATION_FACTOR */ .A0), []);
    const flexibleApyNoFee = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (flexibleApy && performanceFeeAsDecimal) {
            const rewardPercentageNoFee = lodash_toString__WEBPACK_IMPORTED_MODULE_2___default()(1 - performanceFeeAsDecimal / 100);
            return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(flexibleApy).mulUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from(rewardPercentageNoFee)).toString();
        }
        return flexibleApy;
    }, [
        flexibleApy,
        performanceFeeAsDecimal
    ]);
    return {
        flexibleApy: flexibleApyNoFee,
        lockedApy,
        getLockedApy: (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((adjustDuration)=>flexibleApy && getLockedApy(flexibleApy, getBoostFactor(adjustDuration)).toString(), [
            flexibleApy,
            getBoostFactor
        ]),
        boostFactor: (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>boostFactor.addUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from("1")), [
            boostFactor
        ]),
        getBoostFactor: (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((adjustDuration)=>getBoostFactor(adjustDuration).addUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.FixedNumber.from("1")), [
            getBoostFactor
        ])
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15941);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70627);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12895);
/* harmony import */ var utils_getBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33992);
/* harmony import */ var utils_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25997);
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__, _views_Home__WEBPACK_IMPORTED_MODULE_10__]);
([swr__WEBPACK_IMPORTED_MODULE_5__, _views_Home__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const IndexPage = ({ totalTx30Days , addressCount30Days , tvl  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_5__.SWRConfig, {
        value: {
            fallback: {
                totalTx30Days,
                addressCount30Days,
                tvl
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_Home__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
    });
};
// Values fetched from TheGraph and BitQuery jan 24, 2022
const txCount = 54780336;
const addressCount = 4425459;
const tvl = 6082955532.115718;
const getStaticProps = async ()=>{
    const totalTxQuery = graphql_request__WEBPACK_IMPORTED_MODULE_4__.gql`
    query TotalTransactions($id: ID!, $block: Block_height) {
      pancakeFactory(id: $id, block: $block) {
        totalTransactions
      }
    }
  `;
    const days30Ago = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.sub)(new Date(), {
        days: 30
    });
    const results = {
        totalTx30Days: txCount,
        addressCount30Days: addressCount,
        tvl
    };
    if (process.env.SF_HEADER) {
        try {
            const [days30AgoBlock] = await (0,utils_getBlocksFromTimestamps__WEBPACK_IMPORTED_MODULE_8__/* .getBlocksFromTimestamps */ .z)([
                (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.getUnixTime)(days30Ago)
            ]);
            if (!days30AgoBlock) {
                throw new Error("No block found for 30 days ago");
            }
            const totalTx = await utils_graphql__WEBPACK_IMPORTED_MODULE_9__/* .infoServerClient.request */ .yH.request(totalTxQuery, {
                id: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.FACTORY_ADDRESS
            });
            const totalTx30DaysAgo = await utils_graphql__WEBPACK_IMPORTED_MODULE_9__/* .infoServerClient.request */ .yH.request(totalTxQuery, {
                block: {
                    number: days30AgoBlock.number
                },
                id: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.FACTORY_ADDRESS
            });
            if (totalTx?.pancakeFactory?.totalTransactions && totalTx30DaysAgo?.pancakeFactory?.totalTransactions && parseInt(totalTx.pancakeFactory.totalTransactions) > parseInt(totalTx30DaysAgo.pancakeFactory.totalTransactions)) {
                results.totalTx30Days = parseInt(totalTx.pancakeFactory.totalTransactions) - parseInt(totalTx30DaysAgo.pancakeFactory.totalTransactions);
            }
        } catch (error) {
            if (true) {
                console.error("Error when fetching total tx count", error);
            }
        }
    }
    const usersQuery = graphql_request__WEBPACK_IMPORTED_MODULE_4__.gql`
    query userCount($since: ISO8601DateTime, $till: ISO8601DateTime) {
      ethereum(network: bsc) {
        dexTrades(exchangeName: { in: ["Pancake", "Pancake v2"] }, date: { since: $since, till: $till }) {
          count(uniq: senders)
        }
      }
    }
  `;
    if (process.env.BIT_QUERY_HEADER) {
        try {
            const result = await utils_graphql__WEBPACK_IMPORTED_MODULE_9__/* .bitQueryServerClient.request */ .iR.request(usersQuery, {
                since: days30Ago.toISOString(),
                till: new Date().toISOString()
            });
            if (result?.ethereum?.dexTrades?.[0]?.count) {
                results.addressCount30Days = result.ethereum.dexTrades[0].count;
            }
        } catch (error1) {
            if (true) {
                console.error("Error when fetching address count", error1);
            }
        }
    }
    try {
        const result1 = await utils_graphql__WEBPACK_IMPORTED_MODULE_9__/* .infoServerClient.request */ .yH.request(graphql_request__WEBPACK_IMPORTED_MODULE_4__.gql`
      query tvl {
        pancakeFactories(first: 1) {
          totalLiquidityUSD
        }
      }
    `);
        const cake = await (await fetch("https://farms.pancake-swap.workers.dev/price/cake")).json();
        const { totalLiquidityUSD  } = result1.pancakeFactories[0];
        const cakeVaultV2 = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_6__/* .getCakeVaultAddress */ .O9)();
        const cakeContract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getCakeContract */ .XT)();
        const totalCakeInVault = await cakeContract.balanceOf(cakeVaultV2);
        results.tvl = parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.formatEther)(totalCakeInVault)) * cake.price + parseFloat(totalLiquidityUSD);
    } catch (error2) {
        if (true) {
            console.error("Error when fetching tvl stats", error2);
        }
    }
    return {
        props: results,
        revalidate: 60 * 60 * 24 * 30
    };
};
IndexPage.chains = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mm": () => (/* binding */ useChainCurrentBlock),
/* harmony export */   "Xh": () => (/* binding */ useInitialBlock),
/* harmony export */   "hd": () => (/* binding */ usePollBlockNumber),
/* harmony export */   "je": () => (/* binding */ useCurrentBlock)
/* harmony export */ });
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17943);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15941);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79847);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, swr_immutable__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, swr_immutable__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// eslint-disable-next-line camelcase




const REFRESH_BLOCK_INTERVAL = 6000;
const usePollBlockNumber = ()=>{
    const { cache , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__.useSWRConfig)();
    const { chainId , provider  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(chainId && [
        "blockNumberFetcher",
        chainId
    ], async ()=>{
        const blockNumber = await provider.getBlockNumber();
        mutate([
            "blockNumber",
            chainId
        ], blockNumber);
        if (!cache.get((0,swr__WEBPACK_IMPORTED_MODULE_1__.unstable_serialize)([
            "initialBlockNumber",
            chainId
        ]))) {
            mutate([
                "initialBlockNumber",
                chainId
            ], blockNumber);
        }
        return blockNumber;
    }, {
        refreshInterval: REFRESH_BLOCK_INTERVAL
    });
    (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(chainId && [
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .FAST_INTERVAL */ .sR,
        "blockNumber",
        chainId
    ], async ()=>{
        return data;
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_0__/* .FAST_INTERVAL */ .sR
    });
    (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(chainId && [
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOW_INTERVAL */ .KI,
        "blockNumber",
        chainId
    ], async ()=>{
        return data;
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOW_INTERVAL */ .KI
    });
};
const useCurrentBlock = ()=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: currentBlock = 0  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_2__["default"])([
        "blockNumber",
        chainId
    ]);
    return currentBlock;
};
const useChainCurrentBlock = (chainId)=>{
    const { chainId: activeChainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useProvider)({
        chainId
    });
    const { data: currentBlock = 0  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(chainId ? activeChainId === chainId ? [
        "blockNumber",
        chainId
    ] : [
        "chainBlockNumber",
        chainId
    ] : null, activeChainId !== chainId ? async ()=>{
        const blockNumber = await provider.getBlockNumber();
        return blockNumber;
    } : undefined, activeChainId !== chainId ? {
        refreshInterval: REFRESH_BLOCK_INTERVAL
    } : undefined);
    return currentBlock;
};
const useInitialBlock = ()=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: initialBlock = 0  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_2__["default"])([
        "initialBlockNumber",
        chainId
    ]);
    return initialBlock;
};

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

/***/ 79467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dw": () => (/* binding */ multiChainPaths),
/* harmony export */   "Ho": () => (/* binding */ multiChainQueryEndPoint),
/* harmony export */   "J5": () => (/* binding */ checkIsStableSwap),
/* harmony export */   "OO": () => (/* binding */ multiChainBlocksClient),
/* harmony export */   "Pi": () => (/* binding */ multiChainId),
/* harmony export */   "WR": () => (/* binding */ multiChainQueryMainToken),
/* harmony export */   "YM": () => (/* binding */ multiChainStartTime),
/* harmony export */   "nA": () => (/* binding */ multiChainScan),
/* harmony export */   "rf": () => (/* binding */ getMultiChainQueryEndPointWithStableSwap),
/* harmony export */   "z2": () => (/* binding */ multiChainTokenBlackList)
/* harmony export */ });
/* unused harmony export multiChainQueryClient */
/* harmony import */ var utils_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25997);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10494);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43437);




const multiChainQueryMainToken = {
    BSC: "BNB",
    ETH: "ETH"
};
const multiChainBlocksClient = {
    BSC: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .BLOCKS_CLIENT */ .I0,
    ETH: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .BLOCKS_CLIENT_ETH */ .Hs
};
const multiChainStartTime = {
    BSC: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .PCS_V2_START */ .Rr,
    ETH: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .PCS_ETH_START */ .DY
};
const multiChainId = {
    BSC: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC,
    ETH: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM
};
const multiChainPaths = {
    [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC]: "",
    [_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.ETHEREUM]: "/eth"
};
const multiChainQueryClient = {
    BSC: utils_graphql__WEBPACK_IMPORTED_MODULE_0__/* .infoClient */ .dQ,
    ETH: utils_graphql__WEBPACK_IMPORTED_MODULE_0__/* .infoClientETH */ .GJ
};
const multiChainQueryEndPoint = {
    BSC: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .INFO_CLIENT */ .JY,
    ETH: config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .INFO_CLIENT_ETH */ .EC
};
const multiChainScan = {
    BSC: "BscScan",
    ETH: "EtherScan"
};
const multiChainTokenBlackList = {
    BSC: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .TOKEN_BLACKLIST */ .tE,
    ETH: config_constants_info__WEBPACK_IMPORTED_MODULE_3__/* .ETH_TOKEN_BLACKLIST */ .Vd
};
const getMultiChainQueryEndPointWithStableSwap = (chainName)=>{
    const isStableSwap = checkIsStableSwap();
    if (isStableSwap) return utils_graphql__WEBPACK_IMPORTED_MODULE_0__/* .infoStableSwapClient */ .MS;
    return multiChainQueryClient[chainName];
};
const checkIsStableSwap = ()=>window.location.href.includes("stableSwap");


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

/***/ 87799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ck": () => (/* binding */ REWARD_RATE),
/* harmony export */   "ND": () => (/* binding */ FUTURE_ROUND_COUNT),
/* harmony export */   "eQ": () => (/* binding */ LEADERBOARD_MIN_ROUNDS_PLAYED),
/* harmony export */   "fq": () => (/* binding */ ROUND_BUFFER),
/* harmony export */   "v9": () => (/* binding */ PAST_ROUND_COUNT),
/* harmony export */   "yg": () => (/* binding */ ROUNDS_PER_PAGE)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7599);

const REWARD_RATE = 0.97;
// Estimated number of seconds it takes to submit a transaction (3 blocks) in seconds
const ROUND_BUFFER = config__WEBPACK_IMPORTED_MODULE_0__/* .BSC_BLOCK_TIME */ .hJ * 3;
const PAST_ROUND_COUNT = 5;
const FUTURE_ROUND_COUNT = 2;
const ROUNDS_PER_PAGE = 200;
const LEADERBOARD_MIN_ROUNDS_PLAYED = 10;


/***/ }),

/***/ 51014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ub": () => (/* binding */ LEADERBOARD_RESULTS_PER_PAGE),
  "x4": () => (/* binding */ Result),
  "oO": () => (/* binding */ fetchUserRounds),
  "t$": () => (/* binding */ fetchUsersRoundsLength),
  "Fr": () => (/* binding */ getBetHistory),
  "jG": () => (/* binding */ getClaimStatuses),
  "fq": () => (/* binding */ getFilteredBets),
  "HJ": () => (/* binding */ getHasRoundFailed),
  "Tq": () => (/* binding */ getLedgerData),
  "n": () => (/* binding */ getPredictionData),
  "s9": () => (/* binding */ getPredictionUser),
  "D": () => (/* binding */ getPredictionUsers),
  "yz": () => (/* binding */ getRoundResult),
  "$8": () => (/* binding */ getRoundsData),
  "yn": () => (/* binding */ getTotalWon),
  "CM": () => (/* binding */ makeFutureRoundResponse),
  "a8": () => (/* binding */ makeLedgerData),
  "D5": () => (/* binding */ makeRoundData),
  "zN": () => (/* binding */ parseBigNumberObj),
  "WB": () => (/* binding */ serializePredictionsRoundsResponse),
  "ld": () => (/* binding */ transformBetResponse),
  "r3": () => (/* binding */ transformUserResponse)
});

// UNUSED EXPORTS: serializePredictionsLedgerResponse

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
// EXTERNAL MODULE: ./src/config/constants/endpoints.ts
var endpoints = __webpack_require__(10494);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(65757);
// EXTERNAL MODULE: ./src/state/types.ts
var types = __webpack_require__(93638);
// EXTERNAL MODULE: ./src/utils/multicall.ts
var multicall = __webpack_require__(25152);
// EXTERNAL MODULE: ./src/utils/contractHelpers.ts + 29 modules
var contractHelpers = __webpack_require__(12895);
// EXTERNAL MODULE: ./src/config/abi/predictions.json
var predictions = __webpack_require__(45883);
// EXTERNAL MODULE: external "@ethersproject/constants"
var constants_ = __webpack_require__(26644);
;// CONCATENATED MODULE: ./src/state/predictions/bnbQueries.ts
/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */ const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`;
const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedBNB
 claimedNetBNB
 createdAt
 updatedAt
`;
const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalBNB
  totalBNBBull
  totalBNBBear
  totalBetsClaimed
  totalBNBClaimed
  winRate
  averageBNB
  netBNB
`;

;// CONCATENATED MODULE: ./src/state/predictions/cakeQueries.ts
/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */ const cakeQueries_roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`;
const cakeQueries_betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedCAKE
 claimedNetCAKE
 createdAt
 updatedAt
`;
const cakeQueries_userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalCAKE
  totalCAKEBull
  totalCAKEBear
  totalBetsClaimed
  totalCAKEClaimed
  winRate
  averageCAKE
  netCAKE
`;

;// CONCATENATED MODULE: ./src/state/predictions/queries.ts


const getRoundBaseFields = (tokenSymbol)=>tokenSymbol === "CAKE" ? cakeQueries_roundBaseFields : roundBaseFields;
const getBetBaseFields = (tokenSymbol)=>tokenSymbol === "CAKE" ? cakeQueries_betBaseFields : betBaseFields;
const getUserBaseFields = (tokenSymbol)=>tokenSymbol === "CAKE" ? cakeQueries_userBaseFields : userBaseFields;

// EXTERNAL MODULE: ./src/state/predictions/config.ts
var config = __webpack_require__(87799);
;// CONCATENATED MODULE: ./src/utils/numberOrNull.ts
const numberOrNull = (value)=>{
    if (value === null) {
        return null;
    }
    const valueNum = Number(value);
    return Number.isNaN(valueNum) ? null : valueNum;
};
/* harmony default export */ const utils_numberOrNull = (numberOrNull);

;// CONCATENATED MODULE: ./src/state/predictions/cakeTransformers.ts


const getRoundPosition = (positionResponse)=>{
    if (positionResponse === "Bull") {
        return types/* BetPosition.BULL */.Tu.BULL;
    }
    if (positionResponse === "Bear") {
        return types/* BetPosition.BEAR */.Tu.BEAR;
    }
    if (positionResponse === "House") {
        return types/* BetPosition.HOUSE */.Tu.HOUSE;
    }
    return null;
};
const transformBetResponseCAKE = (betResponse)=>{
    const bet = {
        id: betResponse.id,
        hash: betResponse.hash,
        block: utils_numberOrNull(betResponse.block),
        amount: betResponse.amount ? parseFloat(betResponse.amount) : 0,
        position: betResponse.position === "Bull" ? types/* BetPosition.BULL */.Tu.BULL : types/* BetPosition.BEAR */.Tu.BEAR,
        claimed: betResponse.claimed,
        claimedAt: utils_numberOrNull(betResponse.claimedAt),
        claimedBlock: utils_numberOrNull(betResponse.claimedBlock),
        claimedHash: betResponse.claimedHash,
        claimedBNB: betResponse.claimedCAKE ? parseFloat(betResponse.claimedCAKE) : 0,
        claimedNetBNB: betResponse.claimedNetCAKE ? parseFloat(betResponse.claimedNetCAKE) : 0,
        createdAt: utils_numberOrNull(betResponse.createdAt),
        updatedAt: utils_numberOrNull(betResponse.updatedAt)
    };
    if (betResponse.user) {
        bet.user = transformUserResponseCAKE(betResponse.user);
    }
    if (betResponse.round) {
        bet.round = transformRoundResponseCAKE(betResponse.round);
    }
    return bet;
};
const transformUserResponseCAKE = (userResponse)=>{
    const { id , createdAt , updatedAt , block , totalBets , totalBetsBull , totalBetsBear , totalCAKE , totalCAKEBull , totalCAKEBear , totalBetsClaimed , totalCAKEClaimed , winRate , averageCAKE , netCAKE ,  } = userResponse || {};
    return {
        id,
        createdAt: utils_numberOrNull(createdAt),
        updatedAt: utils_numberOrNull(updatedAt),
        block: utils_numberOrNull(block),
        totalBets: utils_numberOrNull(totalBets),
        totalBetsBull: utils_numberOrNull(totalBetsBull),
        totalBetsBear: utils_numberOrNull(totalBetsBear),
        totalBNB: totalCAKE ? parseFloat(totalCAKE) : 0,
        totalBNBBull: totalCAKEBull ? parseFloat(totalCAKEBull) : 0,
        totalBNBBear: totalCAKEBear ? parseFloat(totalCAKEBear) : 0,
        totalBetsClaimed: utils_numberOrNull(totalBetsClaimed),
        totalBNBClaimed: totalCAKEClaimed ? parseFloat(totalCAKEClaimed) : 0,
        winRate: winRate ? parseFloat(winRate) : 0,
        averageBNB: averageCAKE ? parseFloat(averageCAKE) : 0,
        netBNB: netCAKE ? parseFloat(netCAKE) : 0
    };
};
const transformRoundResponseCAKE = (roundResponse)=>{
    const { id , epoch , failed , position , startAt , startBlock , startHash , lockAt , lockBlock , lockHash , lockPrice , lockRoundId , closeAt , closeBlock , closeHash , closePrice , closeRoundId , totalBets , totalAmount , bullBets , bullAmount , bearBets , bearAmount , bets =[] ,  } = roundResponse;
    return {
        id,
        failed,
        startHash,
        lockHash,
        lockRoundId,
        closeRoundId,
        closeHash,
        position: getRoundPosition(position),
        epoch: utils_numberOrNull(epoch),
        startAt: utils_numberOrNull(startAt),
        startBlock: utils_numberOrNull(startBlock),
        lockAt: utils_numberOrNull(lockAt),
        lockBlock: utils_numberOrNull(lockBlock),
        lockPrice: lockPrice ? parseFloat(lockPrice) : 0,
        closeAt: utils_numberOrNull(closeAt),
        closeBlock: utils_numberOrNull(closeBlock),
        closePrice: closePrice ? parseFloat(closePrice) : 0,
        totalBets: utils_numberOrNull(totalBets),
        totalAmount: totalAmount ? parseFloat(totalAmount) : 0,
        bullBets: utils_numberOrNull(bullBets),
        bullAmount: bullAmount ? parseFloat(bullAmount) : 0,
        bearBets: utils_numberOrNull(bearBets),
        bearAmount: bearAmount ? parseFloat(bearAmount) : 0,
        bets: bets.map(transformBetResponseCAKE)
    };
};

;// CONCATENATED MODULE: ./src/state/predictions/bnbTransformers.ts


const bnbTransformers_getRoundPosition = (positionResponse)=>{
    if (positionResponse === "Bull") {
        return types/* BetPosition.BULL */.Tu.BULL;
    }
    if (positionResponse === "Bear") {
        return types/* BetPosition.BEAR */.Tu.BEAR;
    }
    if (positionResponse === "House") {
        return types/* BetPosition.HOUSE */.Tu.HOUSE;
    }
    return null;
};
const transformBetResponseBNB = (betResponse)=>{
    const bet = {
        id: betResponse.id,
        hash: betResponse.hash,
        block: utils_numberOrNull(betResponse.block),
        amount: betResponse.amount ? parseFloat(betResponse.amount) : 0,
        position: betResponse.position === "Bull" ? types/* BetPosition.BULL */.Tu.BULL : types/* BetPosition.BEAR */.Tu.BEAR,
        claimed: betResponse.claimed,
        claimedAt: utils_numberOrNull(betResponse.claimedAt),
        claimedBlock: utils_numberOrNull(betResponse.claimedBlock),
        claimedHash: betResponse.claimedHash,
        claimedBNB: betResponse.claimedBNB ? parseFloat(betResponse.claimedBNB) : 0,
        claimedNetBNB: betResponse.claimedNetBNB ? parseFloat(betResponse.claimedNetBNB) : 0,
        createdAt: utils_numberOrNull(betResponse.createdAt),
        updatedAt: utils_numberOrNull(betResponse.updatedAt)
    };
    if (betResponse.user) {
        bet.user = transformUserResponseBNB(betResponse.user);
    }
    if (betResponse.round) {
        bet.round = transformRoundResponseBNB(betResponse.round);
    }
    return bet;
};
const transformUserResponseBNB = (userResponse)=>{
    const { id , createdAt , updatedAt , block , totalBets , totalBetsBull , totalBetsBear , totalBNB , totalBNBBull , totalBNBBear , totalBetsClaimed , totalBNBClaimed , winRate , averageBNB , netBNB ,  } = userResponse || {};
    return {
        id,
        createdAt: utils_numberOrNull(createdAt),
        updatedAt: utils_numberOrNull(updatedAt),
        block: utils_numberOrNull(block),
        totalBets: utils_numberOrNull(totalBets),
        totalBetsBull: utils_numberOrNull(totalBetsBull),
        totalBetsBear: utils_numberOrNull(totalBetsBear),
        totalBNB: totalBNB ? parseFloat(totalBNB) : 0,
        totalBNBBull: totalBNBBull ? parseFloat(totalBNBBull) : 0,
        totalBNBBear: totalBNBBear ? parseFloat(totalBNBBear) : 0,
        totalBetsClaimed: utils_numberOrNull(totalBetsClaimed),
        totalBNBClaimed: totalBNBClaimed ? parseFloat(totalBNBClaimed) : 0,
        winRate: winRate ? parseFloat(winRate) : 0,
        averageBNB: averageBNB ? parseFloat(averageBNB) : 0,
        netBNB: netBNB ? parseFloat(netBNB) : 0
    };
};
const transformRoundResponseBNB = (roundResponse)=>{
    const { id , epoch , failed , position , startAt , startBlock , startHash , lockAt , lockBlock , lockHash , lockPrice , lockRoundId , closeAt , closeBlock , closeHash , closePrice , closeRoundId , totalBets , totalAmount , bullBets , bullAmount , bearBets , bearAmount , bets =[] ,  } = roundResponse;
    return {
        id,
        failed,
        startHash,
        lockHash,
        lockRoundId,
        closeRoundId,
        closeHash,
        position: bnbTransformers_getRoundPosition(position),
        epoch: utils_numberOrNull(epoch),
        startAt: utils_numberOrNull(startAt),
        startBlock: utils_numberOrNull(startBlock),
        lockAt: utils_numberOrNull(lockAt),
        lockBlock: utils_numberOrNull(lockBlock),
        lockPrice: lockPrice ? parseFloat(lockPrice) : 0,
        closeAt: utils_numberOrNull(closeAt),
        closeBlock: utils_numberOrNull(closeBlock),
        closePrice: closePrice ? parseFloat(closePrice) : 0,
        totalBets: utils_numberOrNull(totalBets),
        totalAmount: totalAmount ? parseFloat(totalAmount) : 0,
        bullBets: utils_numberOrNull(bullBets),
        bullAmount: bullAmount ? parseFloat(bullAmount) : 0,
        bearBets: utils_numberOrNull(bearBets),
        bearAmount: bearAmount ? parseFloat(bearAmount) : 0,
        bets: bets.map(transformBetResponseBNB)
    };
};

;// CONCATENATED MODULE: ./src/state/predictions/helpers.ts












var Result;
(function(Result) {
    Result["WIN"] = "win";
    Result["LOSE"] = "lose";
    Result["CANCELED"] = "canceled";
    Result["HOUSE"] = "house";
    Result["LIVE"] = "live";
})(Result || (Result = {}));
const transformBetResponse = (tokenSymbol)=>tokenSymbol === "CAKE" ? transformBetResponseCAKE : transformBetResponseBNB;
const transformUserResponse = (tokenSymbol)=>tokenSymbol === "CAKE" ? transformUserResponseCAKE : transformUserResponseBNB;
const getRoundResult = (bet, currentEpoch)=>{
    const { round  } = bet;
    if (round.failed) {
        return Result.CANCELED;
    }
    if (round.epoch >= currentEpoch - 1) {
        return Result.LIVE;
    }
    if (bet.round.position === types/* BetPosition.HOUSE */.Tu.HOUSE) {
        return Result.HOUSE;
    }
    const roundResultPosition = round.closePrice > round.lockPrice ? types/* BetPosition.BULL */.Tu.BULL : types/* BetPosition.BEAR */.Tu.BEAR;
    return bet.position === roundResultPosition ? Result.WIN : Result.LOSE;
};
const getFilteredBets = (bets, filter)=>{
    switch(filter){
        case types/* HistoryFilter.COLLECTED */.dZ.COLLECTED:
            return bets.filter((bet)=>bet.claimed === true);
        case types/* HistoryFilter.UNCOLLECTED */.dZ.UNCOLLECTED:
            return bets.filter((bet)=>{
                return !bet.claimed && (bet.position === bet.round.position || bet.round.failed === true);
            });
        case types/* HistoryFilter.ALL */.dZ.ALL:
        default:
            return bets;
    }
};
const getTotalWonMarket = (market, tokenSymbol)=>{
    const total = market[`total${tokenSymbol}`] ? parseFloat(market[`total${tokenSymbol}`]) : 0;
    const totalTreasury = market[`total${tokenSymbol}Treasury`] ? parseFloat(market[`total${tokenSymbol}Treasury`]) : 0;
    return Math.max(total - totalTreasury, 0);
};
const getTotalWon = async ()=>{
    const [{ market: BNBMarket , market: CAKEMarket  }] = await Promise.all([
        (0,external_graphql_request_.request)(endpoints/* GRAPH_API_PREDICTION_BNB */.GZ, external_graphql_request_.gql`
        query getTotalWonData {
          market(id: 1) {
            totalBNB
            totalBNBTreasury
          }
        }
      `),
        (0,external_graphql_request_.request)(endpoints/* GRAPH_API_PREDICTION_CAKE */.fO, external_graphql_request_.gql`
        query getTotalWonData {
          market(id: 1) {
            totalCAKE
            totalCAKETreasury
          }
        }
      `), 
    ]);
    const totalWonBNB = getTotalWonMarket(BNBMarket, "BNB");
    const totalWonCAKE = getTotalWonMarket(CAKEMarket, "CAKE");
    return {
        totalWonBNB,
        totalWonCAKE
    };
};
const getBetHistory = async (where = {}, first = 1000, skip = 0, api, tokenSymbol)=>{
    const response = await (0,external_graphql_request_.request)(api, external_graphql_request_.gql`
      query getBetHistory($first: Int!, $skip: Int!, $where: Bet_filter) {
        bets(first: $first, skip: $skip, where: $where, order: createdAt, orderDirection: desc) {
          ${getBetBaseFields(tokenSymbol)}
          round {
            ${getRoundBaseFields(tokenSymbol)}
          }
          user {
            ${getUserBaseFields(tokenSymbol)}
          }
        }
      }
    `, {
        first,
        skip,
        where
    });
    return response.bets;
};
const getLedgerData = async (account, epochs, address)=>{
    const ledgerCalls = epochs.map((epoch)=>({
            address,
            name: "ledger",
            params: [
                epoch,
                account
            ]
        }));
    const response = await (0,multicall/* multicallv2 */.v)({
        abi: predictions,
        calls: ledgerCalls
    });
    return response;
};
const LEADERBOARD_RESULTS_PER_PAGE = 20;
const defaultPredictionUserOptions = {
    skip: 0,
    first: LEADERBOARD_RESULTS_PER_PAGE,
    orderBy: "createdAt",
    orderDir: "desc"
};
const getHasRoundFailed = (oracleCalled, closeTimestamp, buffer)=>{
    if (!oracleCalled) {
        const closeTimestampMs = (closeTimestamp + buffer) * 1000;
        if (Number.isFinite(closeTimestampMs)) {
            return Date.now() > closeTimestampMs;
        }
    }
    return false;
};
const getPredictionUsers = async (options = {}, api, tokenSymbol)=>{
    const { first , skip , where , orderBy , orderDir  } = {
        ...defaultPredictionUserOptions,
        ...options
    };
    const response = await (0,external_graphql_request_.request)(api, external_graphql_request_.gql`
      query getUsers($first: Int!, $skip: Int!, $where: User_filter, $orderBy: User_orderBy, $orderDir: OrderDirection) {
        users(first: $first, skip: $skip, where: $where, orderBy: $orderBy, orderDirection: $orderDir) {
          ${getUserBaseFields(tokenSymbol)}
        }
      }
    `, {
        first,
        skip,
        where,
        orderBy,
        orderDir
    });
    return response.users;
};
const getPredictionUser = async (account, api, tokenSymbol)=>{
    const response = await (0,external_graphql_request_.request)(api, external_graphql_request_.gql`
      query getUser($id: ID!) {
        user(id: $id) {
          ${getUserBaseFields(tokenSymbol)}
        }
      }
  `, {
        id: account.toLowerCase()
    });
    return response.user;
};
const getClaimStatuses = async (account, epochs, address)=>{
    const claimableCalls = epochs.map((epoch)=>({
            address,
            name: "claimable",
            params: [
                epoch,
                account
            ]
        }));
    const claimableResponses = await (0,multicall/* multicallv2 */.v)({
        abi: predictions,
        calls: claimableCalls
    });
    return claimableResponses.reduce((accum, claimableResponse, index)=>{
        const epoch = epochs[index];
        const [claimable] = claimableResponse;
        return {
            ...accum,
            [epoch]: claimable
        };
    }, {});
};
const getPredictionData = async (address)=>{
    const staticCalls = [
        "currentEpoch",
        "intervalSeconds",
        "minBetAmount",
        "paused"
    ].map((method)=>({
            address,
            name: method
        }));
    const [[currentEpoch], [intervalSeconds], [minBetAmount], [paused]] = await (0,multicall/* multicallv2 */.v)({
        abi: predictions,
        calls: staticCalls
    });
    return {
        status: paused ? types/* PredictionStatus.PAUSED */.Gw.PAUSED : types/* PredictionStatus.LIVE */.Gw.LIVE,
        currentEpoch: currentEpoch.toNumber(),
        intervalSeconds: intervalSeconds.toNumber(),
        minBetAmount: minBetAmount.toString()
    };
};
const getRoundsData = async (epochs, address)=>{
    const calls = epochs.map((epoch)=>({
            address,
            name: "rounds",
            params: [
                epoch
            ]
        }));
    const response = await (0,multicall/* multicallv2 */.v)({
        abi: predictions,
        calls
    });
    return response;
};
const makeFutureRoundResponse = (epoch, startTimestamp)=>{
    return {
        epoch,
        startTimestamp,
        lockTimestamp: null,
        closeTimestamp: null,
        lockPrice: null,
        closePrice: null,
        totalAmount: constants_.Zero.toJSON(),
        bullAmount: constants_.Zero.toJSON(),
        bearAmount: constants_.Zero.toJSON(),
        rewardBaseCalAmount: constants_.Zero.toJSON(),
        rewardAmount: constants_.Zero.toJSON(),
        oracleCalled: false,
        lockOracleId: null,
        closeOracleId: null
    };
};
const makeRoundData = (rounds)=>{
    return rounds.reduce((accum, round)=>{
        return {
            ...accum,
            [round.epoch.toString()]: round
        };
    }, {});
};
const serializePredictionsLedgerResponse = (ledgerResponse)=>({
        position: ledgerResponse.position === 0 ? types/* BetPosition.BULL */.Tu.BULL : types/* BetPosition.BEAR */.Tu.BEAR,
        amount: ledgerResponse.amount.toJSON(),
        claimed: ledgerResponse.claimed
    });
const makeLedgerData = (account, ledgers, epochs)=>{
    return ledgers.reduce((accum, ledgerResponse, index)=>{
        if (!ledgerResponse) {
            return accum;
        }
        // If the amount is zero that means the user did not bet
        if (ledgerResponse.amount.eq(0)) {
            return accum;
        }
        const epoch = epochs[index].toString();
        return {
            ...accum,
            [account]: {
                ...accum[account],
                [epoch]: serializePredictionsLedgerResponse(ledgerResponse)
            }
        };
    }, {});
};
/**
 * Serializes the return from the "rounds" call for redux
 */ const serializePredictionsRoundsResponse = (response)=>{
    const { epoch , startTimestamp , lockTimestamp , closeTimestamp , lockPrice , closePrice , totalAmount , bullAmount , bearAmount , rewardBaseCalAmount , rewardAmount , oracleCalled , lockOracleId , closeOracleId ,  } = response;
    return {
        oracleCalled,
        epoch: epoch.toNumber(),
        startTimestamp: startTimestamp.eq(0) ? null : startTimestamp.toNumber(),
        lockTimestamp: lockTimestamp.eq(0) ? null : lockTimestamp.toNumber(),
        closeTimestamp: closeTimestamp.eq(0) ? null : closeTimestamp.toNumber(),
        lockPrice: lockPrice.eq(0) ? null : lockPrice.toJSON(),
        closePrice: closePrice.eq(0) ? null : closePrice.toJSON(),
        totalAmount: totalAmount.toJSON(),
        bullAmount: bullAmount.toJSON(),
        bearAmount: bearAmount.toJSON(),
        rewardBaseCalAmount: rewardBaseCalAmount.toJSON(),
        rewardAmount: rewardAmount.toJSON(),
        lockOracleId: lockOracleId.toString(),
        closeOracleId: closeOracleId.toString()
    };
};
/**
 * Parse serialized values back into BigNumber
 * BigNumber values are stored with the "toJSON()" method, e.g  { type: "BigNumber", hex: string }
 */ const parseBigNumberObj = (data)=>{
    return Object.keys(data).reduce((accum, key)=>{
        const value = data[key];
        if (value && value?.type === "BigNumber") {
            return {
                ...accum,
                [key]: bignumber_.BigNumber.from(value)
            };
        }
        return {
            ...accum,
            [key]: value
        };
    }, {});
};
const fetchUsersRoundsLength = async (account, address)=>{
    try {
        const contract = (0,contractHelpers/* getPredictionsContract */.qi)(address);
        const length = await contract.getUserRoundsLength(account);
        return length;
    } catch  {
        return constants_.Zero;
    }
};
/**
 * Fetches rounds a user has participated in
 */ const fetchUserRounds = async (account, cursor = 0, size = config/* ROUNDS_PER_PAGE */.yg, address)=>{
    const contract = (0,contractHelpers/* getPredictionsContract */.qi)(address);
    try {
        const [rounds, ledgers] = await contract.getUserRounds(account, cursor, size);
        return rounds.reduce((accum, round, index)=>{
            return {
                ...accum,
                [round.toString()]: serializePredictionsLedgerResponse(ledgers[index])
            };
        }, {});
    } catch  {
        // When the results run out the contract throws an error.
        return null;
    }
};


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

/***/ 33992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getBlocksFromTimestamps)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_info_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79467);
/* harmony import */ var _views_Info_utils_infoQueryHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56615);




const getBlockSubqueries = (timestamps)=>timestamps.map((timestamp)=>{
        return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${timestamp}, timestamp_lt: ${timestamp + 600} }) {
      number
    }`;
    });
const blocksQueryConstructor = (subqueries)=>{
    return graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`query blocks {
    ${subqueries}
  }`;
};
/**
 * @notice Fetches block objects for an array of timestamps.
 * @param {Array} timestamps
 */ const getBlocksFromTimestamps = async (timestamps, sortDirection = "desc", skipCount = 500, chainName = "BSC")=>{
    if (timestamps?.length === 0) {
        return [];
    }
    const fetchedData = await (0,_views_Info_utils_infoQueryHelpers__WEBPACK_IMPORTED_MODULE_3__/* .multiQuery */ .L)(blocksQueryConstructor, getBlockSubqueries(timestamps), state_info_constant__WEBPACK_IMPORTED_MODULE_2__/* .multiChainBlocksClient */ .OO[chainName], skipCount);
    const blocks = [];
    if (fetchedData) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key of Object.keys(fetchedData)){
            if (fetchedData[key].length > 0) {
                blocks.push({
                    timestamp: key.split("t")[1],
                    number: parseInt(fetchedData[key][0].number, 10)
                });
            }
        }
        // graphql-request does not guarantee same ordering of batched requests subqueries, hence manual sorting
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(blocks, (block)=>block.number, sortDirection);
    }
    return blocks;
};


/***/ }),

/***/ 96141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ perpLangMap)
/* harmony export */ });
/* unused harmony export perpetualLangs */
const perpetualLangs = {
    en: "en",
    ko: "ko",
    ja: "ja",
    de: "de",
    fr: "fr",
    id: "id",
    tr: "tr",
    hi: "hi",
    ru: "ru",
    vi: "vi",
    pl: "pl",
    uk: "uk-UA",
    "es-ES": "es",
    "zh-cn": "zh-CN",
    "pt-br": "pt-BR"
};
const perpLangMap = (languageCode)=>{
    if (!languageCode) {
        return "en";
    }
    if (perpetualLangs[languageCode]) {
        return perpetualLangs[languageCode];
    }
    return "en";
};


/***/ }),

/***/ 16741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ perpTheme)
/* harmony export */ });
const perpTheme = (isDark)=>{
    return isDark ? "dark" : "light";
};


/***/ }),

/***/ 25997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GJ": () => (/* binding */ infoClientETH),
/* harmony export */   "MS": () => (/* binding */ infoStableSwapClient),
/* harmony export */   "dQ": () => (/* binding */ infoClient),
/* harmony export */   "iR": () => (/* binding */ bitQueryServerClient),
/* harmony export */   "vA": () => (/* binding */ getGQLHeaders),
/* harmony export */   "yH": () => (/* binding */ infoServerClient)
/* harmony export */ });
/* unused harmony exports infoClientWithChain, stableSwapClient */
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10494);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);



// Extra headers
// Mostly for dev environment
// No production env check since production preview might also need them
const getGQLHeaders = (endpoint)=>{
    if (endpoint === config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY) {
        return {
            "X-Sf": process.env.NEXT_PUBLIC_SF_HEADER || // hack for inject CI secret on window
             false && // @ts-ignore
            0
        };
    }
    return undefined;
};
const infoClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY, {
    headers: getGQLHeaders(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY)
});
const infoClientWithChain = (chainId)=>{
    return new GraphQLClient(INFO_CLIENT_WITH_CHAIN[chainId], {
        headers: getGQLHeaders(INFO_CLIENT_WITH_CHAIN[chainId])
    });
};
const infoClientETH = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT_ETH */ .EC);
const infoStableSwapClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .STABLESWAP_SUBGRAPH_CLIENT */ .gr);
const infoServerClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .INFO_CLIENT */ .JY, {
    headers: {
        "X-Sf": process.env.SF_HEADER
    },
    timeout: 5000
});
const stableSwapClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .STABLESWAP_SUBGRAPH_CLIENT */ .gr, {
    headers: getGQLHeaders(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .STABLESWAP_SUBGRAPH_CLIENT */ .gr)
});
const bitQueryServerClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .BIT_QUERY */ .d$, {
    headers: {
        // only server, no `NEXT_PUBLIC` not going to expose in client
        "X-API-KEY": process.env.BIT_QUERY_HEADER
    },
    timeout: 5000
});


/***/ }),

/***/ 10549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const requestWithTimeout = (graphQLClient, request, variables, timeout = 30000)=>{
    return Promise.race([
        variables ? graphQLClient.request(request, variables) : graphQLClient.request(request),
        new Promise((_, reject)=>{
            setTimeout(()=>{
                reject(new Error(`Request timed out after ${timeout} milliseconds`));
            }, timeout);
        }), 
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestWithTimeout);


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

/***/ 50340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12486);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83670);
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Styled__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_Styled__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-58e0db14-0"
})`
  position: absolute;
  right: 0;
  bottom: -10px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    right: 1px;
    bottom: -18px;
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    right: 0px;
    bottom: -21px;
  }
`;
const AptosTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-58e0db14-1"
})`
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 110%;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 21px;
  margin-top: 16px;

  @media screen and (max-width: 375px) {
    font-size: 21px;
  }
  ${({ theme  })=>theme.mediaQueries.sm} {
    font-size: 35px;
    margin-top: 10px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    font-size: 40px;
  }
`;
const AptosBanner = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_5__/* .Wrapper */ .im, {
        style: {
            background: `linear-gradient(180deg, #00BFA5 0%, #005A5A 100%)`,
            overflow: isMobile ? "hidden" : "visible"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_5__/* .Inner */ .Nh, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_5__/* .LeftWrapper */ .Sp, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_4__/* .AptosXPancakeSwap */ .tv,
                                alt: "aptosXPancakeSwapImage",
                                width: 211,
                                height: 18,
                                placeholder: "blur"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AptosTitle, {
                            children: t("Hello Aptos Project Teams!")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            minHeight: "48px",
                            onClick: ()=>window?.open("https://docs.pancakeswap.finance/aptos-deployment", "_blank", "noopener noreferrer"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    color: "invertedContrast",
                                    bold: true,
                                    fontSize: "16px",
                                    mr: "4px",
                                    children: [
                                        "\uD83D\uDC4B ",
                                        t("Get in Touch")
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    color: "invertedContrast"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightWrapper, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _images__WEBPACK_IMPORTED_MODULE_4__/* .Aptos */ .gZ,
                        alt: "aptosImage",
                        width: isMobile ? 1100 : 930,
                        height: isMobile ? 250 : 231,
                        placeholder: "blur"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AptosBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83670);
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Styled__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_Styled__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-df5947dc-0"
})`
  position: absolute;
  right: 0;
  bottom: -7px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    bottom: 0px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    bottom: 9px;
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    bottom: -30px;
  }
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Styled__WEBPACK_IMPORTED_MODULE_6__/* .StyledHeading */ .wh).withConfig({
    componentId: "sc-df5947dc-1"
})`
  font-size: 20px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    font-size: 40px;
  }
`;
const TradingCompetition = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Styled__WEBPACK_IMPORTED_MODULE_6__/* .StyledSubheading */ .EZ).withConfig({
    componentId: "sc-df5947dc-2"
})`
  font-size: 16px;
  margin: 10px 0 0 4px;
  align-self: center;
  ${({ theme  })=>theme.mediaQueries.sm} {
    font-size: 24px;
  }
`;
const CompetitionBanner = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { isDesktop , isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_6__/* .Wrapper */ .im, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_6__/* .Inner */ .Nh, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_6__/* .LeftWrapper */ .Sp, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _images__WEBPACK_IMPORTED_MODULE_5__/* .modWhiteLogo */ .qM,
                                    alt: "ModLogo",
                                    width: isMobile ? "68px" : "112px",
                                    height: isMobile ? "18px" : "33px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradingCompetition, {
                                    children: t("Trading Competition")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                            width: [
                                "150px",
                                "150px",
                                "auto"
                            ],
                            children: t("$120,000 in Prizes!")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            to: "/competition",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        color: "invertedContrast",
                                        bold: true,
                                        fontSize: "16px",
                                        mr: "4px",
                                        children: t("Trade Now")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        color: "invertedContrast"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightWrapper, {
                    children: isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _images__WEBPACK_IMPORTED_MODULE_5__/* .modImage */ .yC,
                        alt: "CompetitionBanner",
                        width: 632,
                        height: 338,
                        placeholder: "blur"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _images__WEBPACK_IMPORTED_MODULE_5__/* .modMobileImage */ .HN,
                        alt: "CompetitionBanner",
                        width: 206,
                        height: 201,
                        placeholder: "blur"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(CompetitionBanner));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21791);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26488);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Ifos_hooks_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35669);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83670);
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_3__, state_block_hooks__WEBPACK_IMPORTED_MODULE_6__, _Styled__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_3__, state_block_hooks__WEBPACK_IMPORTED_MODULE_6__, _Styled__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const IFOHeaderMobileLimitHeight = 36;
const IFOHeaderMobileLimitWidth = 335;
const shineAnimation = styled_components__WEBPACK_IMPORTED_MODULE_7__.keyframes`
	0% {transform:translateX(-100%);}
  20% {transform:translateX(100%);}
	100% {transform:translateX(100%);}
`;
const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-73170bd2-0"
})`
  position: absolute;
  right: 1px;
  bottom: 18px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    bottom: -3px;
    right: 0;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    bottom: 9px;
    right: 67px;
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    bottom: -3px;
    right: 67px;
  }
  z-index: 0;
`;
const IFOIconImage = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-73170bd2-1"
})`
  position: absolute;
  background-image: ${({ src  })=>`url("${src}")`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 35px;
  height: 35px;
  bottom: 35px;
  right: 95px;
  overflow: hidden;
  border-radius: 50%;
  z-index: 2;
  ${({ theme  })=>theme.mediaQueries.sm} {
    width: 60px;
    height: 60px;
    bottom: 25px;
    right: 196px;
    z-index: 2;
  }
  &::after {
    content: '';
    top: 0;
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: ${shineAnimation} 5s infinite 1s;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    );
  }
`;
const IFOBanner = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useChainCurrentBlock */ .Mm)(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC);
    const activeIfoWithBlocks = (0,hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_3__/* .useActiveIfoWithBlocks */ .A)();
    const ifoName = activeIfoWithBlocks?.name ?? "XXX";
    const isIfoAlive = !!(currentBlock && activeIfoWithBlocks && activeIfoWithBlocks.endBlock > currentBlock);
    const status = isIfoAlive ? (0,_Ifos_hooks_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getStatus */ .l)(currentBlock, activeIfoWithBlocks.startBlock, activeIfoWithBlocks.endBlock) : null;
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!headingRef.current) return;
        if (!isMobile) headingRef.current.style.fontSize = "";
        else if (headingRef.current.offsetHeight > IFOHeaderMobileLimitHeight || headingRef.current.offsetWidth > IFOHeaderMobileLimitWidth) {
            headingRef.current.style.fontSize = "20px";
        }
    }, [
        isMobile
    ]);
    return isIfoAlive && status ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_9__/* .Wrapper */ .im, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_9__/* .Inner */ .Nh, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_9__/* .LeftWrapper */ .Sp, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_9__/* .StyledSubheading */ .EZ, {
                            children: status === "live" ? t("Live") : t("Soon")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_9__/* .StyledHeading */ .wh, {
                            scale: "xl",
                            ref: headingRef,
                            children: [
                                ifoName,
                                " ",
                                t("IFO")
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            to: "/ifo",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        color: "invertedContrast",
                                        bold: true,
                                        fontSize: "16px",
                                        mr: "4px",
                                        children: t("Go to IFO")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        color: "invertedContrast"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RightWrapper, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IFOIconImage, {
                            src: `/images/tokens/${activeIfoWithBlocks.token.address}.png`,
                            onError: (event)=>{
                                // @ts-ignore
                                // eslint-disable-next-line no-param-reassign
                                event.target.style.display = "none";
                            }
                        }),
                        !isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: _images__WEBPACK_IMPORTED_MODULE_8__/* .IFOImage */ .r_,
                            alt: `IFO ${activeIfoWithBlocks?.id ?? "XXX"}`,
                            width: 291,
                            height: 211,
                            placeholder: "blur"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: _images__WEBPACK_IMPORTED_MODULE_8__/* .IFOMobileImage */ .MV,
                            alt: `IFO ${activeIfoWithBlocks?.id ?? "XXX"}`,
                            width: 150,
                            height: 150,
                            placeholder: "blur"
                        })
                    ]
                })
            ]
        })
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(IFOBanner));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export StyledSubheading */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24761);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15941);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24671);
/* harmony import */ var utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10037);
/* harmony import */ var views_Lottery_components_Countdown_Timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36487);
/* harmony import */ var views_Lottery_hooks_useGetNextLotteryEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29899);
/* harmony import */ var _hooks_useNextEventCountdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84213);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83670);
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_8__, views_Lottery_components_Countdown_Timer__WEBPACK_IMPORTED_MODULE_10__, _Styled__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_8__, views_Lottery_components_Countdown_Timer__WEBPACK_IMPORTED_MODULE_10__, _Styled__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-84a895a2-0"
})`
  position: absolute;
  right: 0;
  bottom: -8px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    right: 1px;
    bottom: 1px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    right: 0px;
    bottom: 8px;
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    right: 0px;
    bottom: -5px;
  }
`;
const TimerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-84a895a2-1"
})`
  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-bottom: 16px;
  }
  margin-bottom: 8px;
  .custom-timer {
    background: url('/images/decorations/countdownBg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 10px 7px;
    display: inline-flex;
    white-space: nowrap;
    transform: scale(0.88);
    transform-origin: top left;
  }
`;
const StyledSubheading = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-84a895a2-2"
})`
  font-size: 20px;
  color: white;
  ${({ theme  })=>theme.mediaQueries.xs} {
    font-size: 24px;
    &.lottery {
      font-size: 20px;
    }
  }
  ${({ theme  })=>theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`;
const isLotteryLive = (status)=>status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .LotteryStatus.OPEN */ .p3.OPEN;
const LotteryPrice = ()=>{
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])([
        "currentLottery"
    ]);
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePriceCakeBusd */ .Iu)();
    const prizeInBusd = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(data.amountCollectedInCake).times(cakePriceBusd);
    const prizeTotal = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_9__/* .getBalanceNumber */ .mW)(prizeInBusd);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    if (isLotteryLive(data.status)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: prizeInBusd.isNaN() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                height: 20,
                width: 90,
                display: "inline-block"
            }) : t("Win $%prize% in Lottery", {
                prize: prizeTotal.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                })
            })
        });
    }
    return null;
};
const LotteryCountDownTimer = ()=>{
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])([
        "currentLottery"
    ]);
    const endTimeAsInt = parseInt(data.endTime, 10);
    const { nextEventTime  } = (0,views_Lottery_hooks_useGetNextLotteryEvent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(endTimeAsInt, data.status);
    const secondsRemaining = (0,_hooks_useNextEventCountdown__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(nextEventTime);
    const { days , hours , minutes , seconds  } = (0,utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(secondsRemaining);
    if (isLotteryLive(data.status)) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Lottery_components_Countdown_Timer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        wrapperClassName: "custom-timer",
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
    });
    return null;
};
const LotteryBanner = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const { data , status  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])([
        "currentLottery"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_14__/* .Wrapper */ .im, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_14__/* .Inner */ .Nh, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_14__/* .LeftWrapper */ .Sp, {
                    children: [
                        status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched && isLotteryLive(data.status) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSubheading, {
                                    className: "lottery",
                                    style: {
                                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LotteryPrice, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimerWrapper, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LotteryCountDownTimer, {})
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_14__/* .StyledSubheading */ .EZ, {
                                    children: t("Lottery")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_14__/* .StyledHeading */ .wh, {
                                    scale: "xl",
                                    children: t("Preparing")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                            to: "/lottery",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        color: "invertedContrast",
                                        bold: true,
                                        fontSize: "16px",
                                        mr: "4px",
                                        children: status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched && isLotteryLive(data.status) ? t("Play Now") : t("Check Now")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        color: "invertedContrast"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightWrapper, {
                    children: isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: _images__WEBPACK_IMPORTED_MODULE_13__/* .lotteryImage */ .us,
                        alt: "LotteryBanner",
                        width: 1112,
                        height: 192 + 32,
                        placeholder: "blur"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "mobile",
                        src: _images__WEBPACK_IMPORTED_MODULE_13__/* .lotteryMobileImage */ .LM,
                        alt: "LotteryBanner",
                        width: 190,
                        height: 144,
                        placeholder: "blur"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(LotteryBanner));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78985);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73221);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53015);
/* harmony import */ var _hooks_useMultipleBannerConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, _hooks_useMultipleBannerConfig__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, _hooks_useMultipleBannerConfig__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const BannerPlaceHolder = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-175c111c-0"
})`
  position: relative;
  height: 179px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    height: 221px;
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    height: 232px;
  }
  &::before {
    content: '';
    border-radius: 32px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: -webkit-linear-gradient(#7645d9 0%, #452a7a 100%);
    ${({ theme  })=>theme.mediaQueries.sm} {
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
    }
  }
  margin-top: ${({ walletConnected  })=>walletConnected ? "250px" : "0px"};
  margin-bottom: ${({ walletConnected  })=>walletConnected ? "-220px" : "0px"};
  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-top: ${({ walletConnected  })=>walletConnected ? "190px" : "-32px"};
    margin-bottom: 30px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    margin-top: ${({ walletConnected  })=>walletConnected ? "90px" : "-32px"};
    margin-bottom: ${({ walletConnected  })=>walletConnected ? "40px" : "30px"};
  }
  ${({ theme  })=>theme.mediaQueries.lg},${({ theme  })=>theme.mediaQueries.md} {
    padding-top: 0;
    margin-top: ${({ walletConnected  })=>walletConnected ? "60px" : "-32px"};
    margin-bottom: ${({ walletConnected  })=>walletConnected ? "60px" : "30px"};
  }
`;
const StyledSwiper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper).withConfig({
    componentId: "sc-175c111c-1"
})`
  position: relative;
  overflow: visible;
  opacity: 0;
  animation: ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .appearAnimation */ .Oz} 0.3s ease-in-out 0.7s forwards;
  .swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    width: 108px;
    bottom: 12px;
    ${({ theme  })=>theme.mediaQueries.sm} {
      bottom: 35px;
    }
    ${({ theme  })=>theme.mediaQueries.md} {
      bottom: 45px;
    }
    ${({ theme  })=>theme.mediaQueries.lg} {
      bottom: 35px;
    }
  }
  .swiper-pagination-bullet {
    background-color: white;
    flex-basis: 108px;
    margin: 0 !important;
    border-radius: 0px;
    &:first-child {
      border-radius: 4px 0px 0px 4px;
    }
    &:last-child {
      border-radius: 0px 4px 4px 0px;
    }
  }
`;
const MultipleBanner = ()=>{
    const bannerList = (0,_hooks_useMultipleBannerConfig__WEBPACK_IMPORTED_MODULE_6__/* .useMultipleBannerConfig */ .Z)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { isDesktop , isTablet  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { 0: swiperRef , 1: setSwiperRef  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* .useIsomorphicEffect */ .Y)(()=>{
        if (swiperRef) {
            if (bannerList.length > 1 && !swiperRef.autoplay?.running) {
                swiperRef.autoplay?.start();
            } else if (bannerList.length <= 1 && swiperRef.autoplay?.running) {
                swiperRef.autoplay?.stop();
            }
        }
    }, [
        bannerList,
        swiperRef
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerPlaceHolder, {
        walletConnected: Boolean(account),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSwiper, {
            onSwiper: setSwiperRef,
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
                swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade
            ],
            spaceBetween: 50,
            observer: true,
            slidesPerView: 1,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            speed: 500,
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            },
            loop: true,
            pagination: {
                clickable: true
            },
            children: bannerList.map((banner, index)=>{
                const childKey = `Banner${index}`;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                    style: {
                        padding: isDesktop || isTablet ? 20 : 0
                    },
                    children: banner
                }, childKey);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73221);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getPerpetualLanguageCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96141);
/* harmony import */ var utils_getPerpetualTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16741);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83670);
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Styled__WEBPACK_IMPORTED_MODULE_7__]);
_Styled__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-a5b69f2e-0"
})`
  position: absolute;
  min-height: 100%;
  right: 0;
  bottom: 0px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    bottom: 8.2px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    bottom: 9px;
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    bottom: -2px;
  }
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Styled__WEBPACK_IMPORTED_MODULE_7__/* .StyledHeading */ .wh).withConfig({
    componentId: "sc-a5b69f2e-1"
})`
  font-size: 20px;
  min-height: 44px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    font-size: 40px;
    min-height: auto;
  }
`;
const HEADING_ONE_LINE_HEIGHT = 27;
const PerpetualBanner = ()=>{
    const { t , currentLanguage: { code  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { isDesktop , isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { isDark  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const perpetualUrl = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>`https://perp.pancakeswap.finance/${(0,utils_getPerpetualLanguageCode__WEBPACK_IMPORTED_MODULE_5__/* .perpLangMap */ .o)(code)}/futures/BTCUSDT?theme=${(0,utils_getPerpetualTheme__WEBPACK_IMPORTED_MODULE_9__/* .perpTheme */ .Z)(isDark)}`, [
        code,
        isDark
    ]);
    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .useIsomorphicEffect */ .Y)(()=>{
        const target = headerRef.current;
        target.style.fontSize = "" // reset
        ;
        target.style.lineHeight = "";
        if (!target || !isMobile) return;
        if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
            target.style.fontSize = "18px";
            target.style.lineHeight = `${HEADING_ONE_LINE_HEIGHT}px`;
        }
    }, [
        isMobile,
        code
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_7__/* .Wrapper */ .im, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_7__/* .Inner */ .Nh, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_7__/* .LeftWrapper */ .Sp, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Styled__WEBPACK_IMPORTED_MODULE_7__/* .StyledSubheading */ .EZ, {
                            ref: headerRef,
                            children: t("Perpetual Futures")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                            width: [
                                "160px",
                                "160px",
                                "auto"
                            ],
                            children: t("Up to 100\xd7 Leverage")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            href: perpetualUrl,
                            external: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        color: "invertedContrast",
                                        bold: true,
                                        fontSize: "16px",
                                        mr: "4px",
                                        children: t("Trade Now")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        color: "invertedContrast"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightWrapper, {
                    children: isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _images__WEBPACK_IMPORTED_MODULE_6__/* .perpetualImage */ .gX,
                        alt: "PerpetualBanner",
                        width: 392,
                        height: 232,
                        placeholder: "blur"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _images__WEBPACK_IMPORTED_MODULE_6__/* .perpetualMobileImage */ .VF,
                        alt: "PerpetualBanner",
                        width: 208,
                        height: 208,
                        placeholder: "blur"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(PerpetualBanner));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EZ": () => (/* binding */ StyledSubheading),
/* harmony export */   "Nh": () => (/* binding */ Inner),
/* harmony export */   "Sp": () => (/* binding */ LeftWrapper),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "wh": () => (/* binding */ StyledHeading)
/* harmony export */ });
/* unused harmony export RightWrapper */
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledSubheading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6100e55a-0"
})`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 20px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
  ${({ theme  })=>theme.mediaQueries.xs} {
    font-size: 24px;
  }
  ${({ theme  })=>theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`;
const StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6100e55a-1"
})`
  color: #ffffff;
  background: -webkit-linear-gradient(#7645d9 0%, #452a7a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  margin-bottom: 8px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-bottom: 16px;
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6100e55a-2"
})`
  border-radius: 32px;
  width: 100%;
  max-height: max-content;
  overflow: visible;
  ${({ theme  })=>theme.mediaQueries.sm} {
    overflow: visible;
  }
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6100e55a-3"
})`
  position: relative;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  max-height: 192px;
`;
const LeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6100e55a-4"
})`
  z-index: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${({ theme  })=>theme.mediaQueries.md} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-6100e55a-5"
})`
  position: absolute;
  right: -17px;
  opacity: 0.9;
  transform: translate(0, -50%);
  top: 50%;

  img {
    height: 100%;
    width: 500px;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 24px;
    bottom: 0;
    transform: unset;
    opacity: 1;
    top: unset;
    height: 211px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Menu_hooks_useCompetitionStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83106);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Menu_hooks_useCompetitionStatus__WEBPACK_IMPORTED_MODULE_0__]);
components_Menu_hooks_useCompetitionStatus__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useIsRenderCompetitionBanner = ()=>{
    const competitionStatus = (0,components_Menu_hooks_useCompetitionStatus__WEBPACK_IMPORTED_MODULE_0__/* .useCompetitionStatus */ .U)();
    return competitionStatus !== null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsRenderCompetitionBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26488);
/* harmony import */ var hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21791);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_block_hooks__WEBPACK_IMPORTED_MODULE_0__, hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_1__]);
([state_block_hooks__WEBPACK_IMPORTED_MODULE_0__, hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useIsRenderIfoBanner = ()=>{
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useChainCurrentBlock */ .Mm)(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC);
    const activeIfoWithBlocks = (0,hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_1__/* .useActiveIfoWithBlocks */ .A)();
    return !!(currentBlock && activeIfoWithBlocks && activeIfoWithBlocks.endBlock > currentBlock);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsRenderIfoBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15941);
/* harmony import */ var state_lottery_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61374);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30433);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useIsRenderLotteryBanner = ()=>{
    const { data: currentLotteryId , status: currentLotteryIdStatus  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])([
        "currentLotteryId"
    ], state_lottery_helpers__WEBPACK_IMPORTED_MODULE_1__/* .fetchCurrentLotteryId */ .kC, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_4__/* .SLOW_INTERVAL */ .KI,
        use: [
            hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__/* .immutableMiddleware */ .NW
        ]
    });
    const { status: currentLotteryStatus  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(currentLotteryId ? [
        "currentLottery"
    ] : null, async ()=>(0,state_lottery_helpers__WEBPACK_IMPORTED_MODULE_1__/* .fetchLottery */ .JE)(currentLotteryId.toString()), {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_4__/* .FAST_INTERVAL */ .sR,
        use: [
            hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__/* .immutableMiddleware */ .NW
        ]
    });
    return currentLotteryIdStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched && currentLotteryStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsRenderLotteryBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMultipleBannerConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CompetitionBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68270);
/* harmony import */ var _IFOBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41831);
/* harmony import */ var _LotteryBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48847);
/* harmony import */ var _PerpetualBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43131);
/* harmony import */ var _useIsRenderIFOBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35645);
/* harmony import */ var _useIsRenderLotteryBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34932);
/* harmony import */ var _useIsRenderCompetitionBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48511);
/* harmony import */ var _AptosBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50340);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CompetitionBanner__WEBPACK_IMPORTED_MODULE_3__, _IFOBanner__WEBPACK_IMPORTED_MODULE_4__, _LotteryBanner__WEBPACK_IMPORTED_MODULE_5__, _PerpetualBanner__WEBPACK_IMPORTED_MODULE_6__, _useIsRenderIFOBanner__WEBPACK_IMPORTED_MODULE_7__, _useIsRenderLotteryBanner__WEBPACK_IMPORTED_MODULE_8__, _useIsRenderCompetitionBanner__WEBPACK_IMPORTED_MODULE_9__, _AptosBanner__WEBPACK_IMPORTED_MODULE_10__]);
([_CompetitionBanner__WEBPACK_IMPORTED_MODULE_3__, _IFOBanner__WEBPACK_IMPORTED_MODULE_4__, _LotteryBanner__WEBPACK_IMPORTED_MODULE_5__, _PerpetualBanner__WEBPACK_IMPORTED_MODULE_6__, _useIsRenderIFOBanner__WEBPACK_IMPORTED_MODULE_7__, _useIsRenderLotteryBanner__WEBPACK_IMPORTED_MODULE_8__, _useIsRenderCompetitionBanner__WEBPACK_IMPORTED_MODULE_9__, _AptosBanner__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */ const useMultipleBannerConfig = ()=>{
    const isRenderIFOBanner = (0,_useIsRenderIFOBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const isRenderLotteryBanner = (0,_useIsRenderLotteryBanner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const isRenderCompetitionBanner = (0,_useIsRenderCompetitionBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const NO_SHUFFLE_BANNERS = [
            {
                shouldRender: true,
                banner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AptosBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            },
            {
                shouldRender: isRenderIFOBanner,
                banner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IFOBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            }, 
        ];
        const SHUFFLE_BANNERS = [
            {
                shouldRender: isRenderCompetitionBanner,
                banner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompetitionBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            },
            {
                shouldRender: isRenderLotteryBanner,
                banner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LotteryBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            },
            {
                shouldRender: true,
                banner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PerpetualBanner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }, 
        ];
        return [
            ...NO_SHUFFLE_BANNERS,
            ...lodash_shuffle__WEBPACK_IMPORTED_MODULE_2___default()(SHUFFLE_BANNERS)
        ].filter((bannerConfig)=>bannerConfig.shouldRender).map((bannerConfig)=>bannerConfig.banner);
    }, [
        isRenderIFOBanner,
        isRenderLotteryBanner,
        isRenderCompetitionBanner
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useNextEventCountdown = (nextEventTime)=>{
    const { 0: secondsRemaining , 1: setSecondsRemaining  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const currentSeconds = Math.floor(Date.now() / 1000);
        const secondsRemainingCalc = Math.max(nextEventTime - currentSeconds, 0);
        setSecondsRemaining(secondsRemainingCalc);
        timer.current = setInterval(()=>{
            setSecondsRemaining((prevSecondsRemaining)=>Math.max(prevSecondsRemaining - 1, 0));
        }, 1000);
        return ()=>clearInterval(timer.current);
    }, [
        nextEventTime
    ]);
    return secondsRemaining;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNextEventCountdown);


/***/ }),

/***/ 83670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gZ": () => (/* reexport */ Aptos),
  "tv": () => (/* reexport */ AptosXPancakeSwap),
  "r_": () => (/* reexport */ IFO),
  "MV": () => (/* reexport */ IFOMobile),
  "us": () => (/* reexport */ lottery),
  "LM": () => (/* reexport */ lotteryMobile),
  "yC": () => (/* reexport */ mod_tc_desktop),
  "HN": () => (/* reexport */ mod_tc_mobile),
  "qM": () => (/* reexport */ mod_white_logo),
  "gX": () => (/* reexport */ perpetual),
  "VF": () => (/* reexport */ perpetualMobile)
});

// UNUSED EXPORTS: competitionImage, competitionMobileImage

;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/lottery.png
/* harmony default export */ const lottery = ({"src":"/_next/static/media/lottery.77a09738.png","height":456,"width":2291,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR42mOAgxcXOLof3jO5vXO27rWlmxtuHqgounKsxYbhztq7jCD566tvqO04dlfv4MRZzqc2rnxxZtukpafXzPMHAI1WH+57dZ/iAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/IFO.png
/* harmony default export */ const IFO = ({"src":"/_next/static/media/IFO.7b008469.png","height":422,"width":582,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AbDX4QFOKB7/2QD9DazP+GLR5QAo0PP8CNz1/S8AJOaGAf///wGRu8H/T0U/FrHR6m8A9wIF/xUUBBTP0fwz9sv6AQAAAAEAAAAL////9C0BAQa4u4NV5hRKnAbl7HsZ27zyAeDb3WUEBQSN/wAA5tGhie0LKTT8By1EPs66yNIfb1ZuAero64gEAwN3+vv8ALOxsgDiCx4A+yUw/vfV1QIov6pUAdTHy5cCAQBo+vb197OsrAP79e0G++ve/hQaLAIeIy5fEQ1hlSTn6gcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/IFOMobile.png
/* harmony default export */ const IFOMobile = ({"src":"/_next/static/media/IFOMobile.a93e96d8.png","height":346,"width":338,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAklEQVR42mPABqp6bwkF9bzUtOy84MGw9eBJRgePBcz//99kmnH3R23B4c9HLLZ92ciz5OtGpeVPT6HonPfuv+bS1asCTjz/1rr9/pfee1N7Ghkmt/Txb5w3z2rb6tXWaxgYNNYyMDjePLbqyq7D5+6cndyezvDs8ZPoV8+f/3/75t3/09vXvV9cXXr76PX77xdf+vh7YmLRO4aXL95kv3j28v/bF2/+b1q/7X9e4+T/2csO/k9Ye/5PUd/avwxHNm5oOLN716sr+/cfW1Bff6cpOflbb0LE/84g9/9zExP/M3QwMMgxMDDwMABBDQMD7+K5O5Vn9SzxnVE3o25OQc96AFPLh2ccO3aiAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/competition.png
/* harmony default export */ const competition = ({"src":"/_next/static/media/competition.67316e07.png","height":426,"width":2252,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOklEQVR42mMAgXj7BYwgWkM2RrTM+2jJ7sUHTpzf2/KgPGTiKgY0wFQcvDZ+Tsfig0eXlT/qKO+qAgBSTBTvrbglSwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/competitionMobile.png
/* harmony default export */ const competitionMobile = ({"src":"/_next/static/media/competitionMobile.48f2da21.png","height":364,"width":676,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAcUlEQVR42mOAgRdnahlh7JdXGa7ePOF+MEIyZypY4NOJmWDJ/9cmczzbPz3/4fk57w8ujLswLa/qP1jBtg2zmUD0+u0zlPctXvD/+O6z69dN2FK1c+bR/www8HtzDFjRjmD2nicnGDavnNt+KTdg2TMA6TQzLcAU8r8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/mod-tc-desktop.png
/* harmony default export */ const mod_tc_desktop = ({"src":"/_next/static/media/mod-tc-desktop.e1700017.png","height":677,"width":1290,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgElEQVR42mNABld76/j+H9nKDuP/v/KfleHQ9lvCcQxZbEAu4+rIgMSFURGT/hsxiN05d1/z4fnXzQyLp+w1WlC4JH9Rw9olweGe81Iry64saMk9vDAvuvnfz/9yDFNWfmKdlTO7oa26tTeuJGOa67TedRXdzTEH0qwnnl2+kwcATX44UG7gXEAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/mod-tc-mobile.png
/* harmony default export */ const mod_tc_mobile = ({"src":"/_next/static/media/mod-tc-mobile.92900d89.png","height":403,"width":412,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42mNABmfbJzBvZ2BgfLfkP+vz4+/Cn+x+IwOWKA9czrirZioTTOGJA1e73979/P/9ie/ZKCZcac42v92eHbZ10cask3tvTft/+78ASJyxzXeSGgPDf6YFETGTliQl/0/Vj3FH0Tkpdc6MqcXrp9Ta+dfOjLL935SdvOJYXfTux6U6ixg2F22WXVa2/P22efsvRpmalGXbGrwqbm/uak7w/3+wO7AabEKObvj2iriKh46l+f9bMqL+b6lI+V+elfA/f9MaY7CCDiM7+d45E9YlVBTMmpoftvxsnsmmgwFiVccYGHgAZVpmxlmVVcEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/lotteryMobile.png
/* harmony default export */ const lotteryMobile = ({"src":"/_next/static/media/lotteryMobile.7ad41ede.png","height":278,"width":376,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AcLP/wEIAPT/EPbjIu/e8wI2VMbc/QYHFuzm2YX49ODzAc2/2QACAf8xBQUGIgfs1mX02PLSEEwOjvzrr+f5/+XVAZa8/w495529CvPkw/oJF0gDEQX+6ggUwgkAe2kOChTvAZqm2Swn3LK3DSAQGv4hHfsKB+IH1ckemC0rkxsSEyDXAbCiyib56AAgCS3uePUF+Ska4+t/0N8h4jMo73QJAPwOAcq21jnl6fDd4LSrBPkbIBUyRw/R6eclQg/z4wEmBdflwCZgu7ev0Q0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/mod-white-logo.png
/* harmony default export */ const mod_white_logo = ({"src":"/_next/static/media/mod-white-logo.02856f5f.png","height":134,"width":489,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP4J/NP55/6P+1/pv8M/un+E2L4F/6v7l/Gv9R/5f9K/9X88wcAT/wUeIPmTSsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/perpetual.png
/* harmony default export */ const perpetual = ({"src":"/_next/static/media/perpetual.fd0aa080.png","height":464,"width":784,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AQDk/wDvaJ0hBu/7/wuLZeno1lChBeW0g95Pd9OlHkUAAe9MohH+//aJB8IAztKxEAgF/fCPD/LT2+EKA1ZFSGTlAfBElFAAAgX28Ae65AxJ79X7ISEA2AcdmkEWLg93EgXuAehIgwgEBR0yBdXW7PeULcL3Ed4VqAcNpXkFICc/+fh6Aes0lAABFwmqC7UGd/LxTavs48n7KxDwwU79B/+yz/OLcipOBbkGdywAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/perpetualMobile.png
/* harmony default export */ const perpetualMobile = ({"src":"/_next/static/media/perpetualMobile.79f3069c.png","height":416,"width":384,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AfQTjQHyVxADGZbVAAAAjv7slTPF/vz2fAISHL0B0IDHAiDFzjf6ChEqvnAaGzT0u4EI7+SzAPPh5AHrUponBu8JO/U12+TzPg2o6Q0XDwP88AIg9LjAAfFWnzTy4PpeCFK0OQEj/TQCCQ4A8wEMuh7htEcB/6C7BMBgyh4ve9+x+SoHLP8a/gD5BOa/If1YqAHh6OMEBdjw/BIeG1fm/OWo8ffH9vP71EY+Az9lAfHl7QQGEhL8+/f1XfXy7KLs78ngLQ7/sD34BuQB8dHMAf3s6//+BwkZAgbtS+sK9uFvDQUz/wwToJyEdJoheIt2AAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/Aptos.png
/* harmony default export */ const Aptos = ({"src":"/_next/static/media/Aptos.5b502f26.png","height":526,"width":2252,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAL0lEQVR42mNAB1OXRXMzXFvPcW9vy9RN0yJKUCR56yoZwYxwBu7T+xctr9w2dw8Ad2EOuYLgbLgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/AptosXPancakeSwap.png
/* harmony default export */ const AptosXPancakeSwap = ({"src":"/_next/static/media/AptosXPancakeSwap.e487f52c.png","height":73,"width":845,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJUlEQVR4nGM8Padmkkly88Z/f/9yMTIxMTMwMNwD4udArArE/ADUKQlFihUEdQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./src/views/Home/components/Banners/images/index.ts
















/***/ }),

/***/ 58240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98841);
/* harmony import */ var config_abi_cake_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93361);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72502);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25152);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15941);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17943);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const StyledColumn = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d4f22be1-0"
})`
  flex-direction: column;
  ${({ noMobileBorder , theme  })=>noMobileBorder ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       ` : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}

  ${({ noDesktopBorder , theme  })=>noDesktopBorder && `${theme.mediaQueries.md} {
           padding: 0;
           border-left: none;
         }
       `}
`;
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-d4f22be1-1"
})`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'a d'
    'b e'
    'c f';

  ${({ theme  })=>theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    grid-template-areas:
      'a b c'
      'd e f';
    grid-gap: 32px;
    grid-template-columns: repeat(3, auto);
  }
`;
const emissionsPerBlock = 11.16;
/**
 * User (Planet Finance) built a contract on top of our original manual CAKE pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * https://planetfinanceio.medium.com/pancakeswap-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/PancakeSwap/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */ const planetFinanceBurnedTokensWei = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_12__.BigNumber.from("637407922445268000000000");
const cakeVault = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_13__/* .getCakeVaultV2Contract */ .OJ)();
const CakeDataRow = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { 0: loadData , 1: setLoadData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { data: { cakeSupply , burnedBalance , circulatingSupply  } = {
        cakeSupply: 0,
        burnedBalance: 0,
        circulatingSupply: 0
    } ,  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])(loadData ? [
        "cakeDataRow"
    ] : null, async ()=>{
        const totalSupplyCall = {
            address: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .bscTokens.cake.address */ .ds.cake.address,
            name: "totalSupply"
        };
        const burnedTokenCall = {
            address: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .bscTokens.cake.address */ .ds.cake.address,
            name: "balanceOf",
            params: [
                "0x000000000000000000000000000000000000dEaD"
            ]
        };
        const [tokenDataResultRaw, totalLockedAmount] = await Promise.all([
            (0,utils_multicall__WEBPACK_IMPORTED_MODULE_9__/* .multicallv2 */ .v)({
                abi: config_abi_cake_json__WEBPACK_IMPORTED_MODULE_1__,
                calls: [
                    totalSupplyCall,
                    burnedTokenCall
                ],
                options: {
                    requireSuccess: false
                }
            }),
            cakeVault.totalLockedAmount(), 
        ]);
        const [totalSupply, burned] = tokenDataResultRaw.flat();
        const totalBurned = planetFinanceBurnedTokensWei.add(burned);
        const circulating = totalSupply.sub(totalBurned.add(totalLockedAmount));
        return {
            cakeSupply: totalSupply && burned ? +(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .formatBigNumber */ .dp)(totalSupply.sub(totalBurned)) : 0,
            burnedBalance: burned ? +(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .formatBigNumber */ .dp)(totalBurned) : 0,
            circulatingSupply: circulating ? +(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .formatBigNumber */ .dp)(circulating) : 0
        };
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_11__/* .SLOW_INTERVAL */ .KI
    });
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePriceCakeBusd */ .Iu)();
    const mcap = cakePriceBusd.times(circulatingSupply);
    const mcapString = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .formatLocalisedCompactNumber */ .uI)(mcap.toNumber());
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (isIntersecting) {
            setLoadData(true);
        }
    }, [
        isIntersecting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Grid, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                flexDirection: "column",
                style: {
                    gridArea: "a"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        children: t("Circulating Supply")
                    }),
                    circulatingSupply ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        decimals: 0,
                        lineHeight: "1.1",
                        fontSize: "24px",
                        bold: true,
                        value: circulatingSupply
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        height: 24,
                        width: 126,
                        my: "4px"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledColumn, {
                noMobileBorder: true,
                style: {
                    gridArea: "b"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        children: t("Total supply")
                    }),
                    cakeSupply ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        decimals: 0,
                        lineHeight: "1.1",
                        fontSize: "24px",
                        bold: true,
                        value: cakeSupply
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: observerRef
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                height: 24,
                                width: 126,
                                my: "4px"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledColumn, {
                noMobileBorder: true,
                style: {
                    gridArea: "c"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        children: t("Max Supply")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        decimals: 0,
                        lineHeight: "1.1",
                        fontSize: "24px",
                        bold: true,
                        value: 750000000
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledColumn, {
                noDesktopBorder: true,
                style: {
                    gridArea: "d"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        children: t("Market cap")
                    }),
                    mcap?.gt(0) && mcapString ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        scale: "lg",
                        children: t("$%marketCap%", {
                            marketCap: mcapString
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        height: 24,
                        width: 126,
                        my: "4px"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledColumn, {
                style: {
                    gridArea: "e"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        children: t("Burned to date")
                    }),
                    burnedBalance ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        decimals: 0,
                        lineHeight: "1.1",
                        fontSize: "24px",
                        bold: true,
                        value: burnedBalance
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        height: 24,
                        width: 126,
                        my: "4px"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledColumn, {
                style: {
                    gridArea: "f"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        children: t("Current emissions")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        scale: "lg",
                        children: t("%cakeEmissions%/block", {
                            cakeEmissions: emissionsPerBlock
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CakeDataRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98841);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__]);
hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ColoredWordHeading = ({ text , firstColor , mb ="24px" , ...props })=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    const split = text.split(" ");
    const firstWord = split[0];
    const remainingWords = split.slice(1).join(" ");
    const displayedColor = theme.colors[firstColor] ?? theme.colors.secondary;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        scale: "xl",
        mb: mb,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                style: {
                    color: displayedColor
                },
                children: [
                    firstWord,
                    " "
                ]
            }),
            remainingWords
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColoredWordHeading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getImageUrl, getSrcSet */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const floatingAnim = (x, y)=>styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(${x}, ${y});
  }
  to {
    transform: translate(0, 0px);
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dd92527b-0"
})`
  position: relative;
  max-height: ${({ maxHeight  })=>maxHeight};

  & :nth-child(2) {
    animation: ${floatingAnim("3px", "15px")} 3s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${floatingAnim("5px", "10px")} 3s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${floatingAnim("6px", "5px")} 3s ease-in-out infinite;
    animation-delay: 0.33s;
  }

  & :nth-child(5) {
    animation: ${floatingAnim("4px", "12px")} 3s ease-in-out infinite;
    animation-delay: 0s;
  }
`;
const DummyImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
    componentId: "sc-dd92527b-1"
})`
  max-height: ${({ maxHeight  })=>maxHeight};
  visibility: hidden;
`;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dd92527b-2"
})`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    max-height: 100%;
    width: auto;
  }
`;
var Resolution;
(function(Resolution) {
    Resolution["MD"] = "1.5x";
    Resolution["LG"] = "2x";
})(Resolution || (Resolution = {}));
const getImageUrl = (base, imageSrc, resolution, extension = ".png")=>`${base}${imageSrc}${resolution ? `@${resolution}${extension}` : extension}`;
const getSrcSet = (base, imageSrc, extension = ".png")=>{
    return `${getImageUrl(base, imageSrc, undefined, extension)} 512w,
  ${getImageUrl(base, imageSrc, Resolution.MD, extension)} 768w,
  ${getImageUrl(base, imageSrc, Resolution.LG, extension)} 1024w,`;
};
const CompositeImage = ({ path , attributes , maxHeight ="512px" ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        maxHeight: maxHeight,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DummyImg, {
                srcSet: getSrcSet(path, attributes[0].src, ".webp"),
                maxHeight: maxHeight,
                loading: "lazy",
                decoding: "async",
                onError: (e)=>{
                    const fallbackSrcSet = getSrcSet(path, attributes[0].src);
                    if (e.currentTarget.srcset !== "" && e.currentTarget.srcset !== fallbackSrcSet) {
                        // eslint-disable-next-line no-param-reassign
                        e.currentTarget.srcset = fallbackSrcSet;
                    } else {
                        const fallbackSrc = getImageUrl(path, attributes[0].src);
                        if (e.currentTarget.srcset !== "" && !e.currentTarget.src.endsWith(fallbackSrc)) {
                            // eslint-disable-next-line no-param-reassign
                            e.currentTarget.srcset = "";
                            // eslint-disable-next-line no-param-reassign
                            e.currentTarget.src = fallbackSrc;
                        }
                    }
                }
            }),
            attributes.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageWrapper, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        srcSet: getSrcSet(path, image.src, ".webp"),
                        alt: image.alt,
                        onError: (e)=>{
                            const fallbackSrcSet = getSrcSet(path, image.src);
                            if (e.currentTarget.srcset !== "" && e.currentTarget.srcset !== fallbackSrcSet) {
                                // eslint-disable-next-line no-param-reassign
                                e.currentTarget.srcset = fallbackSrcSet;
                            } else {
                                const fallbackSrc = getImageUrl(path, image.src);
                                if (e.currentTarget.srcset !== "" && !e.currentTarget.src.endsWith(fallbackSrc)) {
                                    // eslint-disable-next-line no-param-reassign
                                    e.currentTarget.srcset = "";
                                    // eslint-disable-next-line no-param-reassign
                                    e.currentTarget.src = fallbackSrc;
                                }
                            }
                        }
                    })
                }, image.src))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompositeImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98841);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__]);
hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const RowHeading = ({ text , ...props })=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    const split = text.split(" ");
    const firstWord = split[0];
    const remainingWords = split.slice(1).join(" ");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: [
            firstWord,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                style: {
                    color: theme.colors.secondary
                },
                children: [
                    " ",
                    remainingWords
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowHeading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38960:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-25a86b75-0"
})`
  position: relative;
`;
const AbsoluteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-25a86b75-1"
})`
  position: absolute;
  top: ${({ topOffset  })=>topOffset};
  opacity: ${({ visible  })=>visible ? 1 : 0};
  margin-top: ${({ visible  })=>visible ? 0 : `50%`};
  transition: opacity, margin-top, 0.4s ease-out;
  flex-direction: column;

  ${({ index , theme  })=>index > 0 ? `
         ${theme.mediaQueries.sm} {
           height: 80px;
           top: 0;
           padding-left: 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       ` : `padding-right: 16px;`}
`;
const TopFarmPool = ({ title , percentage , index , visible , isApy ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const topOffset = ()=>{
        if (index >= 0 && index < 2) {
            return "0px";
        }
        if (index >= 2 && index < 3) {
            return "80px";
        }
        return "160px";
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        index: index,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AbsoluteWrapper, {
            index: index,
            visible: visible,
            topOffset: topOffset(),
            children: [
                title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    bold: true,
                    mb: "8px",
                    fontSize: "12px",
                    color: "secondary",
                    children: title
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: 80,
                    height: 12,
                    mb: "8px"
                }),
                percentage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    gap: "4px",
                    children: [
                        isApy && t("Up to"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            lineHeight: "1.1",
                            fontSize: "16px",
                            bold: true,
                            unit: "%",
                            value: percentage
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: 60,
                    height: 16
                }),
                percentage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    fontSize: "16px",
                    color: "textSubtle",
                    children: isApy ? t("APY") : t("APR")
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: 30,
                    height: 16,
                    mt: "4px"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopFarmPool);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 976:
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
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76166);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35293);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52908);
/* harmony import */ var views_Home_hooks_useGetTopFarmsByApr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42045);
/* harmony import */ var views_Home_hooks_useGetTopPoolsByApr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43694);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73486);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53887);
/* harmony import */ var _TopFarmPool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38960);
/* harmony import */ var _RowHeading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_4__, hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__, views_Home_hooks_useGetTopFarmsByApr__WEBPACK_IMPORTED_MODULE_7__, views_Home_hooks_useGetTopPoolsByApr__WEBPACK_IMPORTED_MODULE_8__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_10__, _TopFarmPool__WEBPACK_IMPORTED_MODULE_11__, _RowHeading__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_4__, hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__, views_Home_hooks_useGetTopFarmsByApr__WEBPACK_IMPORTED_MODULE_7__, views_Home_hooks_useGetTopPoolsByApr__WEBPACK_IMPORTED_MODULE_8__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_10__, _TopFarmPool__WEBPACK_IMPORTED_MODULE_11__, _RowHeading__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Grid = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e04089ab-0"
})`
  display: grid;
  grid-template-columns: repeat(2, auto);

  ${({ theme  })=>theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(5, auto);
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    grid-gap: 32px;
  }
`;
const FarmsPoolsRow = ()=>{
    const { 0: showFarms , 1: setShowFarms  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_4__/* .useActiveChainId */ .g)();
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { topFarms , fetched  } = (0,views_Home_hooks_useGetTopFarmsByApr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(isIntersecting);
    const { topPools  } = (0,views_Home_hooks_useGetTopPoolsByApr__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(fetched && isIntersecting);
    const { lockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_10__/* .useVaultApy */ .o)();
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isLoaded = topFarms[0] && topPools[0];
    const startTimer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        timer.current = setInterval(()=>{
            setShowFarms((prev)=>!prev);
        }, 6000);
    }, [
        timer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLoaded) {
            startTimer();
        }
        return ()=>{
            clearInterval(timer.current);
        };
    }, [
        timer,
        isLoaded,
        startTimer
    ]);
    const getPoolText = (pool)=>{
        if (pool.vaultKey) {
            return config_constants_pools__WEBPACK_IMPORTED_MODULE_9__/* .vaultPoolConfig */ .Y4[pool.vaultKey].name;
        }
        return t("Stake %stakingSymbol% - Earn %earningSymbol%", {
            earningSymbol: pool.earningToken.symbol,
            stakingSymbol: pool.stakingToken.symbol
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: observerRef,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            flexDirection: "column",
            mt: "24px",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    mb: "24px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RowHeading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            text: showFarms ? t("Top Farms") : t("Top Syrup Pools")
                        }),
                        chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.ChainId.BSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            variant: "text",
                            height: "100%",
                            width: "auto",
                            onClick: ()=>{
                                setShowFarms((prev)=>!prev);
                                clearInterval(timer.current);
                                startTimer();
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                height: "24px",
                                width: "24px",
                                color: "textSubtle"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    height: [
                        "240px",
                        null,
                        "80px"
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Grid, {
                            children: topFarms.map((topFarm, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopFarmPool__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    title: topFarm?.lpSymbol,
                                    percentage: topFarm?.apr + topFarm?.lpRewardsApr,
                                    index: index,
                                    visible: showFarms
                                }, index))
                        }),
                        chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.ChainId.BSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Grid, {
                            children: topPools.map((topPool, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopFarmPool__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    title: topPool && getPoolText(topPool),
                                    percentage: topPool?.sousId === 0 ? +lockedApy : topPool?.apr,
                                    index: index,
                                    isApy: topPool?.sousId === 0,
                                    visible: !showFarms
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FarmsPoolsRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39480);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64548);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9270);
/* harmony import */ var _SunburstSvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52899);
/* harmony import */ var _CompositeImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__, _SunburstSvg__WEBPACK_IMPORTED_MODULE_6__, _CompositeImage__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__, _SunburstSvg__WEBPACK_IMPORTED_MODULE_6__, _CompositeImage__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-dcf4ec8f-0"
})`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;
const StyledSunburst = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_SunburstSvg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dcf4ec8f-1"
})`
  height: 350%;
  width: 350%;

  ${({ theme  })=>theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dcf4ec8f-2"
})`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const FloatingPancakesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dcf4ec8f-3"
})`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme  })=>theme.mediaQueries.md} {
    visibility: visible;
  }
`;
const TopLeftImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dcf4ec8f-4"
})`
  position: absolute;
  left: 0;
  top: 0;
`;
const BottomRightImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dcf4ec8f-5"
})`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const topLeftImage = {
    path: "/images/home/flying-pancakes/",
    attributes: [
        {
            src: "1-bottom",
            alt: "Pancake flying on the bottom"
        },
        {
            src: "1-left",
            alt: "Pancake flying on the left"
        },
        {
            src: "1-top",
            alt: "Pancake flying on the top"
        }, 
    ]
};
const bottomRightImage = {
    path: "/images/home/flying-pancakes/",
    attributes: [
        {
            src: "2-bottom",
            alt: "Pancake flying on the bottom"
        },
        {
            src: "2-top",
            alt: "Pancake flying on the top"
        },
        {
            src: "2-right",
            alt: "Pancake flying on the right"
        }, 
    ]
};
const Footer = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3React */ .Ge)();
    const { isTablet , isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BgWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSunburst, {})
                })
            }),
            (isTablet || isDesktop) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FloatingPancakesWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLeftImgWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompositeImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                            ...topLeftImage,
                            maxHeight: "256px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomRightImgWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompositeImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                            ...bottomRightImage,
                            maxHeight: "256px"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        mb: "24px",
                        scale: "xl",
                        color: "white",
                        children: t("Start in seconds.")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        textAlign: "center",
                        color: "white",
                        children: t("Connect your crypto wallet to start using the app in seconds.")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        mb: "24px",
                        bold: true,
                        color: "white",
                        children: t("No registration needed.")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        external: true,
                        href: "https://docs.pancakeswap.finance/",
                        children: t("Learn how to start")
                    }),
                    !account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        mt: "24px"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const GradientLogo = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        viewBox: "0 0 48 48",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.9024 0C10.8947 0 7.87179 3.60289 8.60749 7.50271L10.3484 16.7306C4.45101 19.3061 0 23.7533 0 29.3333V32.7273C0 37.3405 3.08306 41.2029 7.39317 43.8102C11.7369 46.4379 17.6132 48 24 48C30.3868 48 36.2631 46.4379 40.6068 43.8102C44.9169 41.2029 48 37.3405 48 32.7273V29.3333C48 23.7236 43.5028 19.2593 37.5552 16.6889L39.2882 7.50271C40.0239 3.6029 37.001 0 32.9933 0C29.4567 0 26.5896 2.83809 26.5896 6.33904V14.147C25.7386 14.0899 24.8746 14.0606 24 14.0606C23.0897 14.0606 22.1908 14.0923 21.3061 14.1541V6.33904C21.3061 2.83809 18.4391 0 14.9024 0ZM17.8776 28.3637C17.8776 30.372 16.7811 32 15.4286 32C14.0761 32 12.9796 30.372 12.9796 28.3637C12.9796 26.3554 14.0761 24.7273 15.4286 24.7273C16.7811 24.7273 17.8776 26.3554 17.8776 28.3637ZM34.7757 28.3637C34.7757 30.372 33.6792 32 32.3267 32C30.9742 32 29.8777 30.372 29.8777 28.3637C29.8777 26.3554 30.9742 24.7273 32.3267 24.7273C33.6792 24.7273 34.7757 26.3554 34.7757 28.3637Z",
                fill: "url(#paint0_linear)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "24",
                    y1: "0",
                    x2: "24",
                    y2: "48",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "#7645D9"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "#5121B1"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientLogo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39480);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_images_home_lunar_bunny_astronaut_bunny_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23533);
/* harmony import */ var _CompositeImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67826);
/* harmony import */ var _SlideSvg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71674);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, _CompositeImage__WEBPACK_IMPORTED_MODULE_8__, _SlideSvg__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, _CompositeImage__WEBPACK_IMPORTED_MODULE_8__, _SlideSvg__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const flyingAnim = ()=>styled_components__WEBPACK_IMPORTED_MODULE_6__.keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`;
const fading = ()=>styled_components__WEBPACK_IMPORTED_MODULE_6__.keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`;
const BgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-de6de21c-0"
})`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`;
const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-de6de21c-1"
})`
  position: absolute;
  width: 100%;
  bottom: -3px;
`;
const BunnyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-de6de21c-2"
})`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`;
const StarsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-de6de21c-3"
})`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`;
const starsImage = {
    path: "/images/home/lunar-bunny/",
    attributes: [
        {
            src: "star-l",
            alt: "3D Star"
        },
        {
            src: "star-r",
            alt: "3D Star"
        },
        {
            src: "star-top-r",
            alt: "3D Star"
        }, 
    ]
};
const Hero = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "17b87fe7f0af5ff",
                children: '.slide-svg-dark{display:none}.slide-svg-light{display:block}[data-theme="dark"] .slide-svg-dark{display:block}[data-theme="dark"] .slide-svg-light{display:none}'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BgWrapper, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InnerWrapper, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SlideSvg__WEBPACK_IMPORTED_MODULE_9__/* .SlideSvgDark */ .U, {
                            className: "slide-svg-dark",
                            width: "100%"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SlideSvg__WEBPACK_IMPORTED_MODULE_9__/* .SlideSvgLight */ .s, {
                            className: "slide-svg-light",
                            width: "100%"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                position: "relative",
                flexDirection: [
                    "column-reverse",
                    null,
                    null,
                    "row"
                ],
                alignItems: [
                    "flex-end",
                    null,
                    null,
                    "center"
                ],
                justifyContent: "center",
                mt: [
                    account ? "280px" : "50px",
                    null,
                    0
                ],
                id: "homepage-hero",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        flex: "1",
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                scale: "xxl",
                                color: "secondary",
                                mb: "24px",
                                children: t("The moon is made of pancakes.")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                scale: "md",
                                mb: "24px",
                                children: t("Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                children: [
                                    !account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        mr: "8px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        to: "/swap",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            variant: !account ? "secondary" : "primary",
                                            children: t("Trade Now")
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        height: [
                            "192px",
                            null,
                            null,
                            "100%"
                        ],
                        width: [
                            "192px",
                            null,
                            null,
                            "100%"
                        ],
                        flex: [
                            null,
                            null,
                            null,
                            "1"
                        ],
                        mb: [
                            "24px",
                            null,
                            null,
                            "0"
                        ],
                        position: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BunnyWrapper, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: _public_images_home_lunar_bunny_astronaut_bunny_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                    priority: true,
                                    placeholder: "blur",
                                    alt: t("Lunar bunny")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StarsWrapper, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompositeImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                                    ...starsImage
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dafe503b-0"
})`
  height: fit-content;
  padding: 1px 1px 4px 1px;
  box-sizing: border-box;

  ${({ theme  })=>theme.mediaQueries.md} {
    ${({ rotation  })=>rotation ? `transform: rotate(${rotation});` : ""}
  }
`;
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dafe503b-1"
})`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme  })=>theme.mediaQueries.md} {
    ${({ rotation  })=>rotation ? `transform: rotate(${rotation});` : ""}
  }
`;
const IconCard = ({ icon , background , borderColor , rotation , children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCard, {
        background: background,
        borderBackground: borderColor,
        rotation: rotation,
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
                    rotation: rotation,
                    children: icon
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StatCardContent = ({ headingText , bodyText , highlightColor  })=>{
    const { isMobile , isTablet  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const isSmallerScreen = isMobile || isTablet;
    const split = headingText.split(" ");
    const lastWord = split.pop();
    const remainingWords = split.slice(0, split.length).join(" ");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        minHeight: [
            null,
            null,
            null,
            "168px"
        ],
        minWidth: "232px",
        width: "fit-content",
        flexDirection: "column",
        justifyContent: "flex-end",
        mt: [
            null,
            null,
            null,
            "64px"
        ],
        children: [
            isSmallerScreen && remainingWords.length > 13 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                scale: "lg",
                children: remainingWords
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                scale: "xl",
                children: remainingWords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: highlightColor,
                scale: "xl",
                mb: "24px",
                children: lastWord
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: "textSubtle",
                children: bodyText
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatCardContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95121);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95555);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63824);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19081);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24671);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79847);
/* harmony import */ var _IconCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97492);
/* harmony import */ var _StatCardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85380);
/* harmony import */ var _GradientLogoSvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43778);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, swr_immutable__WEBPACK_IMPORTED_MODULE_4__, _IconCard__WEBPACK_IMPORTED_MODULE_5__, _StatCardContent__WEBPACK_IMPORTED_MODULE_6__, _GradientLogoSvg__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, swr_immutable__WEBPACK_IMPORTED_MODULE_4__, _IconCard__WEBPACK_IMPORTED_MODULE_5__, _StatCardContent__WEBPACK_IMPORTED_MODULE_6__, _GradientLogoSvg__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Stats = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    const { data: tvl  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_4__["default"])("tvl");
    const { data: txCount  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_4__["default"])("totalTx30Days");
    const { data: addressCount  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_4__["default"])("addressCount30Days");
    const trades = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatLocalisedCompactNumber */ .uI)(txCount);
    const users = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatLocalisedCompactNumber */ .uI)(addressCount);
    const tvlString = tvl ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .formatLocalisedCompactNumber */ .uI)(tvl) : "-";
    const tvlText = t("And those users are now entrusting the platform with over $%tvl% in funds.", {
        tvl: tvlString
    });
    const [entrusting, inFunds] = tvlText.split(tvlString);
    const UsersCardData = {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            color: "secondary",
            width: "36px"
        })
    };
    const TradesCardData = {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            color: "primary",
            width: "36px"
        })
    };
    const StakedCardData = {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            color: "failure",
            width: "36px"
        })
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GradientLogoSvg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                height: "48px",
                width: "48px",
                mb: "24px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                textAlign: "center",
                scale: "xl",
                children: t("Used by millions.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                textAlign: "center",
                scale: "xl",
                mb: "32px",
                children: t("Trusted with billions.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                textAlign: "center",
                color: "textSubtle",
                children: t("PancakeSwap has the most users of any decentralized platform, ever.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                flexWrap: "wrap",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    display: "inline",
                    textAlign: "center",
                    color: "textSubtle",
                    mb: "20px",
                    children: [
                        entrusting,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: tvl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: tvlString
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                display: "inline-block",
                                height: 16,
                                width: 70,
                                mt: "2px"
                            })
                        }),
                        inFunds
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                textAlign: "center",
                color: "textSubtle",
                bold: true,
                mb: "32px",
                children: t("Will you join them?")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                flexDirection: [
                    "column",
                    null,
                    null,
                    "row"
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ...UsersCardData,
                        mr: [
                            null,
                            null,
                            null,
                            "16px"
                        ],
                        mb: [
                            "16px",
                            null,
                            null,
                            "0"
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StatCardContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            headingText: t("%users% users", {
                                users
                            }),
                            bodyText: t("in the last 30 days"),
                            highlightColor: theme.colors.secondary
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ...TradesCardData,
                        mr: [
                            null,
                            null,
                            null,
                            "16px"
                        ],
                        mb: [
                            "16px",
                            null,
                            null,
                            "0"
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StatCardContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            headingText: t("%trades% trades", {
                                trades
                            }),
                            bodyText: t("made in the last 30 days"),
                            highlightColor: theme.colors.primary
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ...StakedCardData,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StatCardContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            headingText: t("$%tvl% staked", {
                                tvl: tvlString
                            }),
                            bodyText: t("Total Value Locked"),
                            highlightColor: theme.colors.failure
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu": () => (/* binding */ cakeSectionData),
/* harmony export */   "hk": () => (/* binding */ swapSectionData),
/* harmony export */   "pH": () => (/* binding */ earnSectionData)
/* harmony export */ });
const swapSectionData = (t)=>({
        headingText: t("Trade anything. No registration, no hassle."),
        bodyText: t("Trade any token on BNB Smart Chain in seconds, just by connecting your wallet."),
        reverse: false,
        primaryButton: {
            to: "/swap",
            text: t("Trade Now"),
            external: false
        },
        secondaryButton: {
            to: "https://docs.pancakeswap.finance/",
            text: t("Learn"),
            external: true
        },
        images: {
            path: "/images/home/trade/",
            attributes: [
                {
                    src: "BNB",
                    alt: t("BNB token")
                },
                {
                    src: "BTC",
                    alt: t("BTC token")
                },
                {
                    src: "CAKE",
                    alt: t("CAKE token")
                }, 
            ]
        }
    });
const earnSectionData = (t)=>({
        headingText: t("Earn passive income with crypto."),
        bodyText: t("PancakeSwap makes it easy to make your crypto work for you."),
        reverse: true,
        primaryButton: {
            to: "/farms",
            text: t("Explore"),
            external: false
        },
        secondaryButton: {
            to: "https://docs.pancakeswap.finance/products/yield-farming",
            text: t("Learn"),
            external: true
        },
        images: {
            path: "/images/home/earn/",
            attributes: [
                {
                    src: "pie",
                    alt: t("Pie chart")
                },
                {
                    src: "stonks",
                    alt: t("Stocks chart")
                },
                {
                    src: "folder",
                    alt: t("Folder with cake token")
                }, 
            ]
        }
    });
const cakeSectionData = (t)=>({
        headingText: t("CAKE makes our world go round."),
        bodyText: t("CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!"),
        reverse: false,
        primaryButton: {
            to: "/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56",
            text: t("Buy CAKE"),
            external: false
        },
        secondaryButton: {
            to: "https://docs.pancakeswap.finance/tokenomics/cake",
            text: t("Learn"),
            external: true
        },
        images: {
            path: "/images/home/cake/",
            attributes: [
                {
                    src: "bottom-right",
                    alt: t("Small 3d pancake")
                },
                {
                    src: "top-right",
                    alt: t("Small 3d pancake")
                },
                {
                    src: "coin",
                    alt: t("CAKE token")
                },
                {
                    src: "top-left",
                    alt: t("Small 3d pancake")
                }, 
            ]
        }
    });


/***/ }),

/***/ 34692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12849);
/* harmony import */ var _CompositeImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67826);
/* harmony import */ var _ColoredWordHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CompositeImage__WEBPACK_IMPORTED_MODULE_1__, _ColoredWordHeading__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_CompositeImage__WEBPACK_IMPORTED_MODULE_1__, _ColoredWordHeading__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SalesSection = (props)=>{
    const { headingText , bodyText , reverse , primaryButton , secondaryButton , images  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            flexDirection: [
                "column-reverse",
                null,
                null,
                reverse ? "row-reverse" : "row"
            ],
            alignItems: [
                "flex-end",
                null,
                null,
                "center"
            ],
            justifyContent: "center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    flexDirection: "column",
                    flex: "1",
                    ml: [
                        null,
                        null,
                        null,
                        reverse && "64px"
                    ],
                    mr: [
                        null,
                        null,
                        null,
                        !reverse && "64px"
                    ],
                    alignSelf: [
                        "flex-start",
                        null,
                        null,
                        "center"
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColoredWordHeading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            text: headingText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            mb: "24px",
                            children: bodyText
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    mr: "16px",
                                    children: primaryButton.external ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        external: true,
                                        href: primaryButton.to,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            color: "card",
                                            bold: true,
                                            fontSize: "16px",
                                            children: primaryButton.text
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        to: primaryButton.to,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            color: "card",
                                            bold: true,
                                            fontSize: "16px",
                                            children: primaryButton.text
                                        })
                                    })
                                }),
                                secondaryButton.external ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    external: true,
                                    href: secondaryButton.to,
                                    children: secondaryButton.text
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    to: secondaryButton.to,
                                    children: secondaryButton.text
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    height: [
                        "192px",
                        null,
                        null,
                        "100%"
                    ],
                    width: [
                        "192px",
                        null,
                        null,
                        "100%"
                    ],
                    flex: [
                        null,
                        null,
                        null,
                        "1"
                    ],
                    mb: [
                        "24px",
                        null,
                        null,
                        "0"
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompositeImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        ...images
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalesSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ SlideSvgDark),
/* harmony export */   "s": () => (/* binding */ SlideSvgLight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const SlideSvgLight = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        viewBox: "0 0 1660 339",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z",
                fill: "url(#paint0_linear_light)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_light",
                    x1: "830",
                    y1: "84",
                    x2: "830",
                    y2: "339",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "white",
                            stopOpacity: "0.48"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "0.566389",
                            stopColor: "white",
                            stopOpacity: "0.35"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "white"
                        })
                    ]
                })
            })
        ]
    });
};
const SlideSvgDark = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        viewBox: "0 0 1660 339",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z",
                fill: "url(#paint0_linear_dark)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_dark",
                    x1: "830",
                    y1: "83.5",
                    x2: "830",
                    y2: "338.5",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "#08060B",
                            stopOpacity: "0.2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "0.545554",
                            stopColor: "#08060B",
                            stopOpacity: "0.5"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "#08060B"
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44259);


const SunburstSvg = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        viewBox: "0 0 1956 1956",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                filter: "url(#filter0_f)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M978 20L987.526 796.229L1078.14 25.248L1006.47 798.221L1177.18 40.9346L1025.11 802.182L1274.04 66.8879L1043.23 808.07L1367.65 102.823L1060.64 815.819L1457 148.348L1077.14 825.345L1541.1 202.962L1092.55 836.544L1619.03 266.067L1106.71 849.292L1689.93 336.973L1119.46 863.451L1753.04 414.902L1130.65 878.865L1807.65 499L1140.18 895.365L1853.18 588.346L1147.93 912.77L1889.11 681.962L1153.82 930.89L1915.07 778.821L1157.78 949.526L1930.75 877.862L1159.77 968.474L1936 978L1159.77 987.526L1930.75 1078.14L1157.78 1006.47L1915.07 1177.18L1153.82 1025.11L1889.11 1274.04L1147.93 1043.23L1853.18 1367.65L1140.18 1060.64L1807.65 1457L1130.65 1077.14L1753.04 1541.1L1119.46 1092.55L1689.93 1619.03L1106.71 1106.71L1619.03 1689.93L1092.55 1119.46L1541.1 1753.04L1077.14 1130.65L1457 1807.65L1060.64 1140.18L1367.65 1853.18L1043.23 1147.93L1274.04 1889.11L1025.11 1153.82L1177.18 1915.07L1006.47 1157.78L1078.14 1930.75L987.526 1159.77L978 1936L968.474 1159.77L877.862 1930.75L949.526 1157.78L778.821 1915.07L930.89 1153.82L681.962 1889.11L912.77 1147.93L588.346 1853.18L895.365 1140.18L499 1807.65L878.865 1130.65L414.902 1753.04L863.451 1119.46L336.973 1689.93L849.292 1106.71L266.067 1619.03L836.544 1092.55L202.962 1541.1L825.345 1077.14L148.348 1457L815.819 1060.64L102.823 1367.65L808.07 1043.23L66.8879 1274.04L802.182 1025.11L40.9346 1177.18L798.221 1006.47L25.248 1078.14L796.229 987.526L20 978L796.229 968.474L25.248 877.862L798.221 949.526L40.9346 778.821L802.182 930.89L66.8879 681.962L808.07 912.77L102.823 588.346L815.819 895.365L148.348 499L825.345 878.865L202.962 414.902L836.544 863.451L266.067 336.973L849.292 849.292L336.973 266.067L863.451 836.544L414.902 202.962L878.865 825.345L499 148.348L895.365 815.819L588.346 102.823L912.77 808.07L681.962 66.8879L930.89 802.182L778.821 40.9346L949.526 798.221L877.862 25.248L968.474 796.229L978 20Z",
                    fill: "url(#paint0_radial)",
                    fillOpacity: "0.1"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "filter0_f",
                        x: "0",
                        y: "0",
                        width: "1956",
                        height: "1956",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                                stdDeviation: "10",
                                result: "effect1_foregroundBlur"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        id: "paint0_radial",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(978 978) rotate(90) scale(958)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.114547",
                                stopColor: "white",
                                stopOpacity: "0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.374975",
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SunburstSvg);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getEarningsText)
/* harmony export */ });
const getEarningsText = (numFarmsToCollect, hasCakePoolToCollect, earningsBusd, t)=>{
    const data = {
        earningsBusd: earningsBusd.toString(),
        count: numFarmsToCollect
    };
    let earningsText = t("%earningsBusd% to collect", data);
    if (numFarmsToCollect > 0 && hasCakePoolToCollect) {
        if (numFarmsToCollect > 1) {
            earningsText = t("%earningsBusd% to collect from %count% farms and CAKE pool", data);
        } else {
            earningsText = t("%earningsBusd% to collect from %count% farm and CAKE pool", data);
        }
    } else if (numFarmsToCollect > 0) {
        if (numFarmsToCollect > 1) {
            earningsText = t("%earningsBusd% to collect from %count% farms", data);
        } else {
            earningsText = t("%earningsBusd% to collect from %count% farm", data);
        }
    } else if (hasCakePoolToCollect) {
        earningsText = t("%earningsBusd% to collect from CAKE pool", data);
    }
    return earningsText;
};


/***/ }),

/***/ 74402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11218);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78950);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72179);
/* harmony import */ var views_Home_hooks_useFarmsWithBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79077);
/* harmony import */ var _EarningsText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, views_Home_hooks_useFarmsWithBalance__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, views_Home_hooks_useFarmsWithBalance__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-944198b5-0"
})`
  width: 100%;
  height: fit-content;
`;
const HarvestCard = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { farmsWithStakedBalance , earningsSum: farmEarningsSum  } = (0,views_Home_hooks_useFarmsWithBalance__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePriceCakeBusd */ .Iu)();
    const earningsBusd = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(farmEarningsSum).multipliedBy(cakePriceBusd);
    const numTotalToCollect = farmsWithStakedBalance.length;
    const numFarmsToCollect = farmsWithStakedBalance.filter((value)=>value.pid !== 0).length;
    const hasCakePoolToCollect = numTotalToCollect - numFarmsToCollect > 0;
    const earningsText = (0,_EarningsText__WEBPACK_IMPORTED_MODULE_12__/* .getEarningsText */ .D)(numFarmsToCollect, hasCakePoolToCollect, earningsBusd, t);
    const [preText, toCollectText] = earningsText.split(earningsBusd.toString());
    const harvestAllFarms = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ()=>{
        for(let i = 0; i < farmsWithStakedBalance.length; i++){
            const farmWithBalance = farmsWithStakedBalance[i];
            // eslint-disable-next-line no-await-in-loop
            const receipt = await fetchWithCatchTxError(()=>{
                return (0,utils_calls__WEBPACK_IMPORTED_MODULE_8__/* .harvestFarm */ .sA)(farmWithBalance.contract, farmWithBalance.pid);
            });
            if (receipt?.status) {
                toastSuccess(`${t("Harvested")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your %symbol% earnings have been sent to your wallet!", {
                        symbol: "CAKE"
                    })
                }));
            }
        }
    }, [
        farmsWithStakedBalance,
        toastSuccess,
        t,
        fetchWithCatchTxError
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCard, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                flexDirection: [
                    "column",
                    null,
                    null,
                    "row"
                ],
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        alignItems: [
                            "center",
                            null,
                            null,
                            "flex-start"
                        ],
                        children: [
                            preText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                mb: "4px",
                                color: "textSubtle",
                                children: preText
                            }),
                            !earningsBusd.isNaN() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                decimals: earningsBusd.gt(0) ? 2 : 0,
                                fontSize: "24px",
                                bold: true,
                                prefix: earningsBusd.gt(0) ? "~$" : "$",
                                lineHeight: "1.1",
                                value: earningsBusd.toNumber()
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                width: 96,
                                height: 24,
                                my: "2px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                mb: [
                                    "16px",
                                    null,
                                    null,
                                    "0"
                                ],
                                color: "textSubtle",
                                children: toCollectText
                            })
                        ]
                    }),
                    numTotalToCollect <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        to: "farms",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                            width: [
                                "100%",
                                null,
                                null,
                                "auto"
                            ],
                            variant: "secondary",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    color: "primary",
                                    bold: true,
                                    children: t("Start earning")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                    ml: "4px",
                                    color: "primary"
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        width: [
                            "100%",
                            null,
                            null,
                            "auto"
                        ],
                        id: "harvest-all",
                        isLoading: pendingTx,
                        endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            spin: true,
                            color: "currentColor"
                        }) : null,
                        disabled: pendingTx,
                        onClick: harvestAllFarms,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            color: "invertedContrast",
                            bold: true,
                            children: pendingTx ? t("Harvesting") : t("Harvest all")
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HarvestCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72744);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46775);
/* harmony import */ var components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__, components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__, components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Desktop = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b6e59d6d-0"
})`
  align-items: center;
  display: none;
  ${({ theme  })=>theme.mediaQueries.md} {
    display: flex;
  }
`;
const Mobile = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b6e59d6d-1"
})`
  ${({ theme  })=>theme.mediaQueries.md} {
    display: none;
  }
`;
const Sticker = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b6e59d6d-2"
})`
  height: 92px;
  width: 92px;
  background-color: ${({ theme  })=>theme.colors.invertedContrast};
  border: 3px solid ${({ theme  })=>theme.colors.invertedContrast};
  border-radius: ${({ theme  })=>theme.radii.circle};
  box-shadow: ${({ theme  })=>theme.card.boxShadow};
`;
const StyledNoProfileAvatarIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b6e59d6d-3"
})`
  height: 100%;
  width: 100%;
`;
const UserDetail = ()=>{
    const { profile , isLoading  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useProfile */ .Un)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { isMobile , isTablet , isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (isTablet || isDesktop) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desktop, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        mr: "24px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Sticker, {
                            children: profile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ProfileAvatarWithTeam__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                profile: profile
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledNoProfileAvatarIcon, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            profile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                scale: "xl",
                                children: t("Hi, %userName%!", {
                                    userName: profile.username
                                })
                            }) : isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                width: 200,
                                height: 40,
                                my: "4px"
                            }) : null,
                            isLoading || !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                width: 160,
                                height: 16,
                                my: "4px"
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                fontSize: "16px",
                                children: [
                                    " ",
                                    t("Connected with %address%", {
                                        address: (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(account)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mobile, {
                children: profile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    mb: "18px",
                    textAlign: "center",
                    children: t("Hi, %userName%!", {
                        userName: profile.username
                    })
                }) : isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    width: 120,
                    height: 20,
                    mt: "2px",
                    mb: "18px"
                }) : null
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HarvestCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74402);
/* harmony import */ var _UserDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81963);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HarvestCard__WEBPACK_IMPORTED_MODULE_2__, _UserDetail__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_HarvestCard__WEBPACK_IMPORTED_MODULE_2__, _UserDetail__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5a24e908-0"
})`
  border-bottom: 1px ${({ theme  })=>theme.colors.secondary} solid;
  border-left: 1px ${({ theme  })=>theme.colors.secondary} solid;
  border-right: 1px ${({ theme  })=>theme.colors.secondary} solid;
  border-radius: ${({ theme  })=>`0 0 ${theme.radii.card} ${theme.radii.card}`};
  background: ${({ theme  })=>theme.isDark ? "linear-gradient(360deg, rgba(49, 61, 92, 0.9) 0%, rgba(61, 42, 84, 0.9) 100%)" : "linear-gradient(180deg, rgba(202, 194, 236, 0.9) 0%,  rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)"};
`;
const UserBanner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCard, {
        p: [
            "16px",
            null,
            null,
            "24px"
        ],
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            alignItems: "center",
            justifyContent: "center",
            flexDirection: [
                "column",
                null,
                null,
                "row"
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    flex: "1",
                    mr: [
                        null,
                        null,
                        null,
                        "32px"
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserDetail__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    flex: "1",
                    width: [
                        "100%",
                        null,
                        "auto"
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N5": () => (/* binding */ InnerWedgeWrapper),
/* harmony export */   "SH": () => (/* binding */ WedgeTopRight),
/* harmony export */   "UK": () => (/* binding */ WedgeTopLeft),
/* harmony export */   "vx": () => (/* binding */ OuterWedgeWrapper)
/* harmony export */ });
/* unused harmony exports WedgeBottomRight, WedgeBottomLeft */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44259);



const OuterWedgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-cbf3a528-0"
})`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0px;
  top: 0px;
`;
const InnerWedgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.attrs({
    className: "inner-wedge"
}).withConfig({
    componentId: "sc-cbf3a528-1"
})`
  position: absolute;
  display: flex;
  width: 100%;
  ${({ top  })=>top ? "top: 0px" : "bottom: 0px"};

  svg {
    fill: ${({ theme  })=>theme.colors.background};
    width: ${({ width  })=>width || "100%"};
    height: 100%;
    max-height: 48px;
  }
`;
const WedgeTopLeft = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 1660 48",
        ...props,
        preserveAspectRatio: "none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"
        })
    });
};
const WedgeTopRight = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 1660 48",
        ...props,
        preserveAspectRatio: "none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"
        })
    });
};
const WedgeBottomRight = (props)=>{
    return /*#__PURE__*/ _jsx(Svg, {
        viewBox: "0 0 1660 48",
        ...props,
        preserveAspectRatio: "none",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0C520.985 1.81132 1323.74 32.7547 1660 48H0V0Z"
        })
    });
};
const WedgeBottomLeft = (props)=>{
    return /*#__PURE__*/ _jsx(Svg, {
        viewBox: "0 0 1660 48",
        ...props,
        preserveAspectRatio: "none",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M1660 0C1139.02 1.81132 336.256 32.7547 0 48H1660V0Z"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52908);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57268);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_lottery_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61374);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24671);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17943);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f5050f29-0"
})`
  width: 100%;
`;
const StyledBalance = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f5050f29-1"
})`
  background: ${({ theme  })=>theme.colors.gradientGold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LotteryCardContent = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: loadData , 1: setLoadData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePriceCakeBusd */ .Iu)({
        forceMainnet: true
    });
    const { data: currentLotteryId  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_9__["default"])(loadData ? [
        "currentLotteryId"
    ] : null, state_lottery_helpers__WEBPACK_IMPORTED_MODULE_6__/* .fetchCurrentLotteryId */ .kC, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_8__/* .SLOW_INTERVAL */ .KI
    });
    const { data: currentLottery  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_9__["default"])(currentLotteryId ? [
        "currentLottery"
    ] : null, async ()=>(0,state_lottery_helpers__WEBPACK_IMPORTED_MODULE_6__/* .fetchLottery */ .JE)(currentLotteryId.toString()), {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_8__/* .SLOW_INTERVAL */ .KI
    });
    const cakePrizesText = t("%cakePrizeInUsd% in CAKE prizes this round", {
        cakePrizeInUsd: cakePriceBusd.toString()
    });
    const [pretext, prizesThisRound] = cakePrizesText.split(cakePriceBusd.toString());
    const amountCollectedInCake = currentLottery ? parseFloat(currentLottery.amountCollectedInCake) : null;
    const currentLotteryPrize = amountCollectedInCake ? cakePriceBusd.times(amountCollectedInCake) : null;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isIntersecting) {
            setLoadData(true);
        }
    }, [
        isIntersecting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                flexDirection: "column",
                mt: "48px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "white",
                        bold: true,
                        fontSize: "16px",
                        children: t("Lottery")
                    }),
                    pretext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "white",
                        mt: "12px",
                        bold: true,
                        fontSize: "16px",
                        children: pretext
                    }),
                    currentLotteryPrize && currentLotteryPrize.gt(0) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBalance, {
                        fontSize: "40px",
                        bold: true,
                        prefix: "$",
                        decimals: 0,
                        value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceAmount */ .U4)(currentLotteryPrize).toNumber()
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                width: 200,
                                height: 40,
                                my: "8px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: observerRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "white",
                        mb: "24px",
                        bold: true,
                        fontSize: "16px",
                        children: prizesThisRound
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "white",
                        mb: "40px",
                        children: t("Buy tickets with CAKE, win CAKE if your numbers match")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                    to: "/lottery",
                    id: "homepage-prediction-cta",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        width: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                bold: true,
                                color: "invertedContrast",
                                children: t("Buy Tickets")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                ml: "4px",
                                color: "invertedContrast"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LotteryCardContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17743:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52908);
/* harmony import */ var state_predictions_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51014);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36695);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37926);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15941);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__, swr__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__, swr__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fe4addea-0"
})`
  width: 100%;
`;
const PredictionCardHeader = ({ preText , won ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        color: "#280D5F",
        my: "8px",
        scale: "xl",
        bold: true,
        children: [
            preText,
            won
        ]
    });
};
const PredictionCardContent = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: loadData , 1: setLoadData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__/* .useBNBBusdPrice */ .Hf)({
        forceMainnet: true
    });
    const cakePriceBusd = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__/* .useCakeBusdPrice */ .S9)({
        forceMainnet: true
    });
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])(loadData ? [
        "prediction",
        "tokenWon"
    ] : null, state_predictions_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getTotalWon */ .yn, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_9__/* .SLOW_INTERVAL */ .KI
    });
    const bnbWonInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_12__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, data?.totalWonBNB || 0);
    const cakeWonInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_12__/* .multiplyPriceByAmount */ .a)(cakePriceBusd, data?.totalWonCAKE || 0);
    const localisedBnbUsdString = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatLocalisedCompactNumber */ .uI)(bnbWonInUsd + cakeWonInUsd);
    const bnbWonText = t("$%wonInUsd% in BNB + CAKE won so far", {
        wonInUsd: localisedBnbUsdString
    });
    const [pretext, wonSoFar] = bnbWonText.split(localisedBnbUsdString);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isIntersecting) {
            setLoadData(true);
        }
    }, [
        isIntersecting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                flexDirection: "column",
                mt: "48px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        color: "#280D5F",
                        bold: true,
                        fontSize: "16px",
                        children: t("Prediction")
                    }),
                    bnbWonInUsd ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PredictionCardHeader, {
                        preText: pretext,
                        won: localisedBnbUsdString
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                width: 230,
                                height: 40,
                                my: "8px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: observerRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        color: "#280D5F",
                        mb: "24px",
                        bold: true,
                        fontSize: "16px",
                        children: wonSoFar
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        color: "#280D5F",
                        mb: "40px",
                        children: t("Predict the price trend of BNB or CAKE to win")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                    to: "/prediction",
                    id: "homepage-prediction-cta",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        width: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                bold: true,
                                color: "invertedContrast",
                                children: t("Play")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                ml: "4px",
                                color: "invertedContrast"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PredictionCardContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88798);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34659);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
/* harmony import */ var _ColoredWordHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97261);
/* harmony import */ var _IconCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97492);
/* harmony import */ var _PredictionCardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17743);
/* harmony import */ var _LotteryCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94936);
/* harmony import */ var _CompositeImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, _ColoredWordHeading__WEBPACK_IMPORTED_MODULE_4__, _IconCard__WEBPACK_IMPORTED_MODULE_5__, _PredictionCardContent__WEBPACK_IMPORTED_MODULE_6__, _LotteryCardContent__WEBPACK_IMPORTED_MODULE_7__, _CompositeImage__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, _ColoredWordHeading__WEBPACK_IMPORTED_MODULE_4__, _IconCard__WEBPACK_IMPORTED_MODULE_5__, _PredictionCardContent__WEBPACK_IMPORTED_MODULE_6__, _LotteryCardContent__WEBPACK_IMPORTED_MODULE_7__, _CompositeImage__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TransparentFrame = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e5f8f124-0"
})`
  background: ${({ theme  })=>theme.isDark ? "rgba(8, 6, 11, 0.6)" : " rgba(255, 255, 255, 0.6)"};
  padding: 16px;
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme  })=>theme.mediaQueries.md} {
    padding: 40px;
  }
`;
const BgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e5f8f124-1"
})`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;
const BottomLeftImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e5f8f124-2"
})`
  position: absolute;
  left: 0;
  bottom: -64px;
  max-width: 192px;

  ${({ theme  })=>theme.mediaQueries.md} {
    max-width: 100%;
  }
`;
const TopRightImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e5f8f124-3"
})`
  position: absolute;
  right: 0;
  top: -64px;

  max-width: 192px;

  ${({ theme  })=>theme.mediaQueries.md} {
    max-width: 100%;
  }
`;
const PredictionCardData = {
    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        width: "36px",
        color: "inverseContrast"
    }),
    background: "linear-gradient(180deg, #ffb237 0%, #ffcd51 51.17%, #ffe76a 100%);",
    borderColor: "#ffb237",
    rotation: "-2.36deg"
};
const LotteryCardData = {
    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        color: "white",
        width: "36px"
    }),
    background: " linear-gradient(180deg, #7645D9 0%, #5121B1 100%);",
    borderColor: "#3C1786",
    rotation: "1.43deg"
};
const bottomLeftImage = {
    path: "/images/home/prediction-cards/",
    attributes: [
        {
            src: "bottom-left",
            alt: "CAKE card"
        },
        {
            src: "green",
            alt: "Green CAKE card with up arrow"
        },
        {
            src: "red",
            alt: "Red Cake card with down arrow"
        },
        {
            src: "top-right",
            alt: "CAKE card"
        }, 
    ]
};
const topRightImage = {
    path: "/images/home/lottery-balls/",
    attributes: [
        {
            src: "2",
            alt: "Lottery ball number 2"
        },
        {
            src: "4",
            alt: "Lottery ball number 4"
        },
        {
            src: "6",
            alt: "Lottery ball number 6"
        },
        {
            src: "7",
            alt: "Lottery ball number 7"
        },
        {
            src: "9",
            alt: "Lottery ball number 9"
        }, 
    ]
};
const WinSection = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BgWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomLeftImgWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompositeImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                            ...bottomLeftImage
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopRightImgWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompositeImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                            ...topRightImage
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransparentFrame, {
                isDark: theme.isDark,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColoredWordHeading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            textAlign: "center",
                            text: t("Win millions in prizes")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            children: t("Provably fair, on-chain games.")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            mb: "40px",
                            color: "textSubtle",
                            children: t("Win big with PancakeSwap.")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            m: "0 auto",
                            flexDirection: [
                                "column",
                                null,
                                null,
                                "row"
                            ],
                            maxWidth: "600px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    flex: "1",
                                    maxWidth: [
                                        "275px",
                                        null,
                                        null,
                                        "100%"
                                    ],
                                    mr: [
                                        null,
                                        null,
                                        null,
                                        "24px"
                                    ],
                                    mb: [
                                        "32px",
                                        null,
                                        null,
                                        "0"
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        ...PredictionCardData,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PredictionCardContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    flex: "1",
                                    maxWidth: [
                                        "275px",
                                        null,
                                        null,
                                        "100%"
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        ...LotteryCardData,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LotteryCardContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25152);
/* harmony import */ var config_abi_masterchef_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84951);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17943);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7599);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15941);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57268);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65498);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74860);
/* harmony import */ var utils_verifyBscNetwork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30375);
/* harmony import */ var _Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62704);
/* harmony import */ var _Farms_components_YieldBooster_helpers_splitProxyFarms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_6__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useContract__WEBPACK_IMPORTED_MODULE_8__, _Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_10__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_6__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useContract__WEBPACK_IMPORTED_MODULE_8__, _Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useFarmsWithBalance = ()=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { data: poolLength  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useFarmsLength */ .f5)();
    const { proxyAddress  } = (0,_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_10__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const bCakeProxy = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_8__/* .useBCakeProxyContract */ .DE)(proxyAddress);
    const masterChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_8__/* .useMasterchef */ .y8)();
    const getFarmsWithBalances = async (farms, accountToCheck, contract)=>{
        const calls = farms.map((farm)=>({
                address: masterChefContract.address,
                name: "pendingCake",
                params: [
                    farm.pid,
                    accountToCheck
                ]
            }));
        const rawResults = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(config_abi_masterchef_json__WEBPACK_IMPORTED_MODULE_3__, calls);
        const results = farms.map((farm, index)=>({
                ...farm,
                balance: new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(rawResults[index])
            }));
        const farmsWithBalances = results.filter((balanceType)=>balanceType.balance.gt(0)).map((farm)=>({
                ...farm,
                contract
            }));
        const totalEarned = farmsWithBalances.reduce((accum, earning)=>{
            const earningNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(earning.balance);
            if (earningNumber.eq(0)) {
                return accum;
            }
            return accum + earningNumber.div(config__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_TOKEN_DECIMAL */ .o3).toNumber();
        }, 0);
        return {
            farmsWithBalances,
            totalEarned
        };
    };
    const { data: { farmsWithStakedBalance , earningsSum  } = {
        farmsWithStakedBalance: [],
        earningsSum: null
    } ,  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(account && poolLength && chainId ? [
        account,
        "farmsWithBalance",
        chainId,
        poolLength
    ] : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_12__.getFarmConfig)(chainId);
        const farmsCanFetch = farmsConfig.filter((f)=>poolLength > f.pid);
        const normalBalances = await getFarmsWithBalances(farmsCanFetch, account, masterChefContract);
        if (proxyAddress && farmsCanFetch?.length && (0,utils_verifyBscNetwork__WEBPACK_IMPORTED_MODULE_9__/* .verifyBscNetwork */ .H)(chainId)) {
            const { farmsWithProxy  } = (0,_Farms_components_YieldBooster_helpers_splitProxyFarms__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(farmsCanFetch);
            const proxyBalances = await getFarmsWithBalances(farmsWithProxy, proxyAddress, bCakeProxy);
            return {
                farmsWithStakedBalance: [
                    ...normalBalances.farmsWithBalances,
                    ...proxyBalances.farmsWithBalances
                ],
                earningsSum: normalBalances.totalEarned + proxyBalances.totalEarned
            };
        }
        return {
            farmsWithStakedBalance: normalBalances.farmsWithBalances,
            earningsSum: normalBalances.totalEarned
        };
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_4__/* .FAST_INTERVAL */ .sR
    });
    return {
        farmsWithStakedBalance,
        earningsSum
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFarmsWithBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57268);
/* harmony import */ var hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34195);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36204);
/* harmony import */ var state_farms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44868);
/* harmony import */ var utils_apr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27544);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useGetTopFarmsByApr = (isIntersecting)=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { data: farms , regularCakePerBlock  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFarms */ .E2)();
    const { 0: fetchStatus , 1: setFetchStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Idle */ .iF.Idle);
    const { 0: fetched , 1: setFetched  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: topFarms , 1: setTopFarms  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([
        null,
        null,
        null,
        null,
        null
    ]);
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_2__/* .usePriceCakeBusd */ .Iu)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_3__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_3__/* .featureFarmApiAtom */ .x);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchFarmData = async ()=>{
            const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_9__.getFarmConfig)(chainId);
            setFetchStatus(config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetching */ .iF.Fetching);
            const activeFarms = farmsConfig.filter((farm)=>farm.pid !== 0);
            try {
                await dispatch((0,state_farms__WEBPACK_IMPORTED_MODULE_5__/* .fetchFarmsPublicDataAsync */ .eG)({
                    pids: activeFarms.map((farm)=>farm.pid),
                    chainId,
                    flag: farmFlag
                }));
                setFetchStatus(config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched);
            } catch (e) {
                console.error(e);
                setFetchStatus(config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Failed */ .iF.Failed);
            }
        };
        if (isIntersecting && fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Idle */ .iF.Idle) {
            fetchFarmData();
        }
    }, [
        dispatch,
        setFetchStatus,
        fetchStatus,
        topFarms,
        isIntersecting,
        chainId,
        farmFlag
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getTopFarmsByApr = (farmsState)=>{
            const farmsWithPrices = farmsState.filter((farm)=>farm.lpTotalInQuoteToken && farm.quoteTokenPriceBusd && farm.pid !== 0 && farm.multiplier && farm.multiplier !== "0X");
            const farmsWithApr = farmsWithPrices.map((farm)=>{
                const totalLiquidity = farm.lpTotalInQuoteToken.times(farm.quoteTokenPriceBusd);
                const { cakeRewardsApr , lpRewardsApr  } = (0,utils_apr__WEBPACK_IMPORTED_MODULE_6__/* .getFarmApr */ .yW)(chainId, farm.poolWeight, cakePriceBusd, totalLiquidity, farm.lpAddress, regularCakePerBlock);
                return {
                    ...farm,
                    apr: cakeRewardsApr,
                    lpRewardsApr
                };
            });
            const sortedByApr = lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default()(farmsWithApr, (farm)=>farm.apr + farm.lpRewardsApr, "desc");
            setTopFarms(sortedByApr.slice(0, 5));
            setFetched(true);
        };
        if (fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched && !topFarms[0] && farms?.length > 0) {
            getTopFarmsByApr(farms);
        }
    }, [
        setTopFarms,
        farms,
        fetchStatus,
        cakePriceBusd,
        topFarms,
        regularCakePerBlock,
        chainId
    ]);
    return {
        topFarms,
        fetched
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetTopFarmsByApr);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36204);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34376);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11496);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26488);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6429);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state_pools__WEBPACK_IMPORTED_MODULE_6__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, state_block_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([state__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state_pools__WEBPACK_IMPORTED_MODULE_6__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, state_block_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useGetTopPoolsByApr = (isIntersecting)=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .TL)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { 0: fetchStatus , 1: setFetchStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config_constants_types__WEBPACK_IMPORTED_MODULE_9__/* .FetchStatus.Idle */ .iF.Idle);
    const { 0: topPools , 1: setTopPools  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([
        null,
        null,
        null,
        null,
        null
    ]);
    const initialBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useInitialBlock */ .Xh)();
    const { pools  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__/* .usePoolsWithVault */ .f6)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchPoolsPublicData = async ()=>{
            setFetchStatus(config_constants_types__WEBPACK_IMPORTED_MODULE_9__/* .FetchStatus.Fetching */ .iF.Fetching);
            try {
                // It should all be blocking calls since data only fetched once
                await Promise.all([
                    dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_6__/* .fetchCakeVaultFees */ .HX)()),
                    dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_6__/* .fetchCakeVaultPublicData */ .P4)()),
                    dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_6__/* .fetchPoolsPublicDataAsync */ .ht)(initialBlock, chainId)), 
                ]);
                setFetchStatus(config_constants_types__WEBPACK_IMPORTED_MODULE_9__/* .FetchStatus.Fetched */ .iF.Fetched);
            } catch (e) {
                console.error(e);
                setFetchStatus(config_constants_types__WEBPACK_IMPORTED_MODULE_9__/* .FetchStatus.Failed */ .iF.Failed);
            }
        };
        if (isIntersecting && fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_9__/* .FetchStatus.Idle */ .iF.Idle && initialBlock > 0) {
            fetchPoolsPublicData();
        }
    }, [
        dispatch,
        setFetchStatus,
        fetchStatus,
        topPools,
        isIntersecting,
        initialBlock,
        chainId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const [cakePools, otherPools] = lodash_partition__WEBPACK_IMPORTED_MODULE_4___default()(pools, (pool)=>pool.sousId === 0);
        const masterCakePool = cakePools.filter((cakePool)=>cakePool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault);
        const getTopPoolsByApr = (activePools)=>{
            const sortedByApr = lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(activePools, (pool)=>pool.apr || 0, "desc");
            setTopPools([
                ...masterCakePool,
                ...sortedByApr.slice(0, 4)
            ]);
        };
        if (fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_9__/* .FetchStatus.Fetched */ .iF.Fetched && !topPools[0]) {
            getTopPoolsByApr(otherPools);
        }
    }, [
        setTopPools,
        pools,
        fetchStatus,
        topPools
    ]);
    return {
        topPools
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetTopPoolsByApr);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86909);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9270);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19081);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64548);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52993);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24953);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76166);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56010);
/* harmony import */ var _components_SalesSection_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84832);
/* harmony import */ var _components_MetricsSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13957);
/* harmony import */ var _components_SalesSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34692);
/* harmony import */ var _components_WinSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41224);
/* harmony import */ var _components_FarmsPoolsRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(976);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24337);
/* harmony import */ var _components_CakeDataRow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(58240);
/* harmony import */ var _components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33730);
/* harmony import */ var _components_UserBanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14012);
/* harmony import */ var _components_Banners_MultipleBanner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(82417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_PageSection__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_4__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_7__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_9__, _components_Hero__WEBPACK_IMPORTED_MODULE_11__, _components_MetricsSection__WEBPACK_IMPORTED_MODULE_12__, _components_SalesSection__WEBPACK_IMPORTED_MODULE_13__, _components_WinSection__WEBPACK_IMPORTED_MODULE_14__, _components_FarmsPoolsRow__WEBPACK_IMPORTED_MODULE_15__, _components_Footer__WEBPACK_IMPORTED_MODULE_16__, _components_CakeDataRow__WEBPACK_IMPORTED_MODULE_17__, _components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__, _components_UserBanner__WEBPACK_IMPORTED_MODULE_19__, _components_Banners_MultipleBanner__WEBPACK_IMPORTED_MODULE_20__]);
([components_PageSection__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_4__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_7__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_9__, _components_Hero__WEBPACK_IMPORTED_MODULE_11__, _components_MetricsSection__WEBPACK_IMPORTED_MODULE_12__, _components_SalesSection__WEBPACK_IMPORTED_MODULE_13__, _components_WinSection__WEBPACK_IMPORTED_MODULE_14__, _components_FarmsPoolsRow__WEBPACK_IMPORTED_MODULE_15__, _components_Footer__WEBPACK_IMPORTED_MODULE_16__, _components_CakeDataRow__WEBPACK_IMPORTED_MODULE_17__, _components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__, _components_UserBanner__WEBPACK_IMPORTED_MODULE_19__, _components_Banners_MultipleBanner__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const StyledHeroSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a6b462a3-0"
})`
  padding-top: 16px;

  ${({ theme  })=>theme.mediaQueries.md} {
    padding-top: 48px;
  }
`;
const UserBannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a6b462a3-1"
})`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme  })=>theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const Home = ()=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3React */ .Ge)();
    const { chainId  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_9__/* .useActiveChainId */ .g)();
    const HomeSectionContainerStyles = {
        margin: "0",
        width: "100%",
        maxWidth: "968px"
    };
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_7__/* .PageMeta */ .V, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "9271fe9fa2fd49af",
                children: '#home-1 .page-bg{background:-webkit-linear-gradient(310.27deg,#e6fdff 0%,#f3efff 100%);background:-moz-linear-gradient(310.27deg,#e6fdff 0%,#f3efff 100%);background:-o-linear-gradient(310.27deg,#e6fdff 0%,#f3efff 100%);background:linear-gradient(139.73deg,#e6fdff 0%,#f3efff 100%)}[data-theme="dark"] #home-1 .page-bg{background:-webkit-radial-gradient(50%50%,103.12%50%,#21193a 0%,#191326 100%);background:-moz-radial-gradient(50%50%,103.12%50%,#21193a 0%,#191326 100%);background:-o-radial-gradient(50%50%,103.12%50%,#21193a 0%,#191326 100%);background:radial-gradient(103.12%50%at 50%50%,#21193a 0%,#191326 100%)}#home-2 .page-bg{background:-webkit-linear-gradient(top,#fff 22%,#d7caec 100%);background:-moz-linear-gradient(top,#fff 22%,#d7caec 100%);background:-o-linear-gradient(top,#fff 22%,#d7caec 100%);background:linear-gradient(180deg,#fff 22%,#d7caec 100%)}[data-theme="dark"] #home-2 .page-bg{background:-webkit-linear-gradient(top,#09070c 22%,#201335 100%);background:-moz-linear-gradient(top,#09070c 22%,#201335 100%);background:-o-linear-gradient(top,#09070c 22%,#201335 100%);background:linear-gradient(180deg,#09070c 22%,#201335 100%)}#home-3 .page-bg{background:-webkit-linear-gradient(top,#6fb6f1 0%,#eaf2f6 100%);background:-moz-linear-gradient(top,#6fb6f1 0%,#eaf2f6 100%);background:-o-linear-gradient(top,#6fb6f1 0%,#eaf2f6 100%);background:linear-gradient(180deg,#6fb6f1 0%,#eaf2f6 100%)}[data-theme="dark"] #home-3 .page-bg{background:-webkit-linear-gradient(top,#0b4576 0%,#091115 100%);background:-moz-linear-gradient(top,#0b4576 0%,#091115 100%);background:-o-linear-gradient(top,#0b4576 0%,#091115 100%);background:linear-gradient(180deg,#0b4576 0%,#091115 100%)}#home-4 .inner-wedge svg{fill:#d8cbed}[data-theme="dark"] #home-4 .inner-wedge svg{fill:#201335}'
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledHeroSection, {
                innerProps: {
                    style: {
                        margin: "0",
                        width: "100%"
                    }
                },
                containerProps: {
                    id: "home-1"
                },
                index: 2,
                hasCurvedDivider: false,
                children: [
                    account && chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_10__.ChainId.BSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserBannerWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UserBanner__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banners_MultipleBanner__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                innerProps: {
                    style: {
                        margin: "0",
                        width: "100%"
                    }
                },
                containerProps: {
                    id: "home-2"
                },
                index: 2,
                hasCurvedDivider: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MetricsSection__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                innerProps: {
                    style: HomeSectionContainerStyles
                },
                background: theme.colors.background,
                containerProps: {
                    id: "home-4"
                },
                index: 2,
                hasCurvedDivider: false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__/* .OuterWedgeWrapper */ .vx, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__/* .InnerWedgeWrapper */ .N5, {
                            top: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__/* .WedgeTopLeft */ .UK, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SalesSection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        ...(0,_components_SalesSection_data__WEBPACK_IMPORTED_MODULE_21__/* .swapSectionData */ .hk)(t)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                innerProps: {
                    style: HomeSectionContainerStyles
                },
                background: theme.colors.gradientCardHeader,
                index: 2,
                hasCurvedDivider: false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__/* .OuterWedgeWrapper */ .vx, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__/* .InnerWedgeWrapper */ .N5, {
                            width: "150%",
                            top: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WedgeSvgs__WEBPACK_IMPORTED_MODULE_18__/* .WedgeTopRight */ .SH, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SalesSection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        ...(0,_components_SalesSection_data__WEBPACK_IMPORTED_MODULE_21__/* .earnSectionData */ .pH)(t)
                    }),
                    chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_10__.ChainId.BSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FarmsPoolsRow__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                innerProps: {
                    style: HomeSectionContainerStyles
                },
                containerProps: {
                    id: "home-3"
                },
                index: 2,
                hasCurvedDivider: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WinSection__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                innerProps: {
                    style: HomeSectionContainerStyles
                },
                background: theme.colors.background,
                index: 2,
                hasCurvedDivider: false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SalesSection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        ...(0,_components_SalesSection_data__WEBPACK_IMPORTED_MODULE_21__/* .cakeSectionData */ .Tu)(t)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CakeDataRow__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_PageSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                innerProps: {
                    style: HomeSectionContainerStyles
                },
                background: "linear-gradient(180deg, #7645D9 0%, #5121B1 100%)",
                index: 2,
                hasCurvedDivider: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getStatus)
/* harmony export */ });
const getStatus = (currentBlock, startBlock, endBlock)=>{
    // Add an extra check to currentBlock because it takes awhile to fetch so the initial value is 0
    // making the UI change to an inaccurate status
    if (currentBlock === 0) {
        return "idle";
    }
    if (currentBlock < startBlock) {
        return "coming_soon";
    }
    if (currentBlock >= startBlock && currentBlock <= endBlock) {
        return "live";
    }
    if (currentBlock > endBlock) {
        return "finished";
    }
    return "idle";
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ 56615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ multiQuery)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25997);
/* harmony import */ var utils_requestWithTimeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10549);



/**
 * Helper function to get large amount GraphQL subqueries
 * @param queryConstructor constructor function that combines subqueries
 * @param subqueries individual queries
 * @param endpoint GraphQL endpoint
 * @param skipCount how many subqueries to fire at a time
 * @returns
 */ const multiQuery = async (queryConstructor, subqueries, endpoint, skipCount = 1000)=>{
    let fetchedData = {};
    let allFound = false;
    let skip = 0;
    const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint, {
        headers: (0,utils_graphql__WEBPACK_IMPORTED_MODULE_1__/* .getGQLHeaders */ .vA)(endpoint)
    });
    try {
        while(!allFound){
            let end = subqueries.length;
            if (skip + skipCount < subqueries.length) {
                end = skip + skipCount;
            }
            const subqueriesSlice = subqueries.slice(skip, end);
            // eslint-disable-next-line no-await-in-loop
            const result = await (0,utils_requestWithTimeout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(client, queryConstructor(subqueriesSlice));
            fetchedData = {
                ...fetchedData,
                ...result
            };
            allFound = Object.keys(result).length < skipCount || skip + skipCount > subqueries.length;
            skip += skipCount;
        }
        return fetchedData;
    } catch (error) {
        console.error("Failed to fetch info data", error);
        return null;
    }
};


/***/ }),

/***/ 36487:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StyledTimerFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a9e55172-0"
})`
  ${({ theme , showTooltip  })=>showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``}
  div:last-of-type {
    margin-right: 0;
  }
`;
const StyledTimerText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a9e55172-1"
})`
  background: ${({ theme  })=>theme.colors.gradientGold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Wrapper = ({ minutes , hours , days , seconds , wrapperClassName ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTimerFlex, {
        alignItems: "flex-end",
        className: wrapperClassName,
        children: [
            Boolean(days) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mb: "-4px",
                        scale: "xl",
                        mr: "4px",
                        children: days
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mr: "12px",
                        children: t("d")
                    })
                ]
            }),
            Boolean(hours) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mb: "-4px",
                        scale: "xl",
                        mr: "4px",
                        children: hours
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mr: "12px",
                        children: t("h")
                    })
                ]
            }),
            Boolean(minutes) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mb: "-4px",
                        scale: "xl",
                        mr: "4px",
                        children: minutes
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mr: "12px",
                        children: t("m")
                    })
                ]
            }),
            Boolean(seconds) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mb: "-4px",
                        scale: "xl",
                        mr: "4px",
                        children: seconds
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimerText, {
                        mr: "12px",
                        children: t("s")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const vrfRequestTime = 180 // 3 mins
;
const secondsBetweenRounds = 300 // 5 mins
;
const transactionResolvingBuffer = 30 // Delay countdown by 30s to ensure contract transactions have been calculated and broadcast
;
const useGetNextLotteryEvent = (endTime, status)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        // Current lottery is active
        if (status === config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .LotteryStatus.OPEN */ .p3.OPEN) {
            return {
                nextEventTime: endTime + transactionResolvingBuffer,
                preCountdownText: null,
                postCountdownText: t("until the draw")
            };
        }
        // Current lottery has finished but not yet claimable
        if (status === config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .LotteryStatus.CLOSE */ .p3.CLOSE) {
            return {
                nextEventTime: endTime + transactionResolvingBuffer + vrfRequestTime,
                preCountdownText: t("Winners announced in"),
                postCountdownText: null
            };
        }
        // Current lottery claimable. Next lottery has not yet started
        if (status === config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .LotteryStatus.CLAIMABLE */ .p3.CLAIMABLE) {
            return {
                nextEventTime: endTime + transactionResolvingBuffer + secondsBetweenRounds,
                preCountdownText: t("Tickets on sale in"),
                postCountdownText: null
            };
        }
        return {
            nextEventTime: null,
            preCountdownText: null,
            postCountdownText: null
        };
    }, [
        endTime,
        status,
        t
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetNextLotteryEvent);


/***/ }),

/***/ 41742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);




const Balance = ({ value , color ="text" , decimals =3 , isDisabled =false , unit , prefix , onClick , ...props })=>{
    const prefixProp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>prefix ? {
            prefix
        } : {}, [
        prefix
    ]);
    const suffixProp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>unit ? {
            suffix: unit
        } : {}, [
        unit
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
        start: 0,
        preserveValue: true,
        delay: 0,
        end: value,
        ...prefixProp,
        ...suffixProp,
        decimals: decimals,
        duration: 1,
        separator: ",",
        children: ({ countUpRef  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: isDisabled ? "textDisabled" : color,
                onClick: onClick,
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    ref: countUpRef
                })
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Balance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 63824:
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
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 95121:
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
            d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72744:
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
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44259);




const Icon = (props)=>{
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        viewBox: "0 0 32 32",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",
                fill: primaryColor
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                id: "A",
                "mask-type": "alpha",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",
                    fill: "#c4c4c4"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                mask: "url(#A)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        cx: "12.308",
                        cy: "14.846",
                        rx: "1.026",
                        ry: "1.538",
                        fill: primaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        cx: "19.385",
                        cy: "14.846",
                        rx: "1.026",
                        ry: "1.538",
                        fill: primaryColor
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 88798:
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
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 95555:
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
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 35293:
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
        viewBox: "0 0 24 25",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 34659:
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
            d: "M1.4144 13.4824L9.36944 5.52736L10.0765 6.23446C10.3694 6.52736 10.8443 6.52736 11.1372 6.23446C11.4301 5.94157 11.4301 5.4667 11.1372 5.1738L10.4301 4.4667L12.7281 2.16869C13.5092 1.38764 14.7755 1.38764 15.5565 2.16869L16.6173 3.22943C16.8125 3.42465 16.8125 3.74115 16.6173 3.93637C15.641 4.91268 15.641 6.49559 16.6173 7.4719C17.5936 8.44821 19.1765 8.44821 20.1528 7.4719C20.348 7.27669 20.6645 7.27669 20.8597 7.4719L21.9205 8.53265C22.7015 9.3137 22.7015 10.58 21.9205 11.3611L19.6224 13.6592L18.9153 12.9521C18.6224 12.6592 18.1475 12.6592 17.8546 12.9521C17.5617 13.245 17.5617 13.7198 17.8546 14.0127L18.5617 14.7198L10.6068 22.6748C9.82574 23.4558 8.55941 23.4558 7.77836 22.6748L6.7177 21.6141C6.52244 21.4189 6.52244 21.1023 6.7177 20.907C7.69401 19.9307 7.69401 18.3478 6.7177 17.3715C5.74139 16.3952 4.15848 16.3952 3.18217 17.3715C2.9869 17.5667 2.67032 17.5667 2.47506 17.3715L1.4144 16.3108C0.633351 15.5298 0.633351 14.2634 1.4144 13.4824ZM13.2584 7.29521C12.9655 7.00232 12.4907 7.00232 12.1978 7.29521C11.9049 7.5881 11.9049 8.06298 12.1978 8.35587L12.9049 9.06298C13.1978 9.35587 13.6727 9.35587 13.9655 9.06298C14.2584 8.77009 14.2584 8.29521 13.9655 8.00232L13.2584 7.29521ZM15.0262 10.1236C15.3191 9.83075 15.794 9.83074 16.0869 10.1236L16.794 10.8307C17.0869 11.1236 17.0869 11.5985 16.794 11.8914C16.5011 12.1843 16.0262 12.1843 15.7333 11.8914L15.0262 11.1843C14.7333 10.8914 14.7333 10.4165 15.0262 10.1236Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 84507:
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
            d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 74909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getPortalRoot = ()=> false && (0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPortalRoot);


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

/***/ 74146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 64150:
/***/ ((module) => {

module.exports = require("date-fns/addSeconds");

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

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

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

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

/***/ }),

/***/ 56648:
/***/ ((module) => {

module.exports = require("lodash/toString");

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

/***/ 10609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 23599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

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

/***/ 99816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

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

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,6577,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,3430,7379,4512,433,8393,1436,5639,9480,6737,6775,7134,5288,2179], () => (__webpack_exec__(53386)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=index.js.map