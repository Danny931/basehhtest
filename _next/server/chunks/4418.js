"use strict";
exports.id = 4418;
exports.ids = [4418,6737,6775];
exports.modules = {

/***/ 5054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ AddToWalletTextOptions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92238);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72315);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94608);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87528);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41120);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11542);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33108);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__, _utils_wallet__WEBPACK_IMPORTED_MODULE_4__]);
([components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__, _utils_wallet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






var AddToWalletTextOptions;
(function(AddToWalletTextOptions) {
    AddToWalletTextOptions[AddToWalletTextOptions["NO_TEXT"] = 0] = "NO_TEXT";
    AddToWalletTextOptions[AddToWalletTextOptions["TEXT"] = 1] = "TEXT";
    AddToWalletTextOptions[AddToWalletTextOptions["TEXT_WITH_ASSET"] = 2] = "TEXT_WITH_ASSET";
})(AddToWalletTextOptions || (AddToWalletTextOptions = {}));
const Icons = {
    // TODO: Brave
    Binance: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    "Coinbase Wallet": _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    Opera: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    TokenPocket: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    "Trust Wallet": _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    MetaMask: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
};
const getWalletText = (textOptions, tokenSymbol, t)=>{
    return textOptions !== AddToWalletTextOptions.NO_TEXT && (textOptions === AddToWalletTextOptions.TEXT ? t("Add to Wallet") : t("Add %asset% to Wallet", {
        asset: tokenSymbol
    }));
};
const getWalletIcon = (marginTextBetweenLogo, name)=>{
    const iconProps = {
        width: "16px",
        ...marginTextBetweenLogo && {
            ml: marginTextBetweenLogo
        }
    };
    if (name && Icons[name]) {
        const Icon = Icons[name];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isTrust) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isCoinbaseWallet) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isTokenPocket) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    if (window?.ethereum?.isMetaMask) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            ...iconProps
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        ...iconProps
    });
};
const AddToWalletButton = ({ tokenAddress , tokenSymbol , tokenDecimals , tokenLogo , textOptions =AddToWalletTextOptions.NO_TEXT , marginTextBetweenLogo ="0px" , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { connector , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();
    const isCanRegisterToken = (0,_utils_wallet__WEBPACK_IMPORTED_MODULE_4__/* .canRegisterToken */ .U)();
    if (connector && connector.name === "Binance") return null;
    if (!(connector && connector.watchAsset && isConnected)) return null;
    if (!isCanRegisterToken) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        ...props,
        onClick: ()=>{
            const image = tokenLogo ? components_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__/* .BAD_SRCS */ .X[tokenLogo] ? undefined : tokenLogo : undefined;
            connector.watchAsset?.({
                address: tokenAddress,
                symbol: tokenSymbol,
                image,
                // @ts-ignore
                decimals: tokenDecimals
            });
        },
        children: [
            getWalletText(textOptions, tokenSymbol, t),
            getWalletIcon(marginTextBetweenLogo, connector?.name)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToWalletButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
    componentId: "sc-d9299de2-0"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 33108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ BAD_SRCS),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42791);



const BAD_SRCS = {};
/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */ const Logo = ({ srcs , alt , ...rest })=>{
    const { 1: refresh  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const src = srcs.find((s)=>!BAD_SRCS[s]);
    if (src) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            ...rest,
            alt: alt,
            src: src,
            onError: ()=>{
                if (src) BAD_SRCS[src] = true;
                refresh((i)=>i + 1);
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ campaignMap)
/* harmony export */ });
/**
 * id: The campaign id (required)
 * type: The type of the achievement
 * title: A string or an object to be translated.
 * Note: If the value is a string it is likely used as data in a translation object
 *
 * badge: Achievement avatar
 */ const campaigns = [
    {
        id: "511110000",
        type: "ifo",
        title: "Kalmar",
        badge: "ifo-kalm.svg"
    },
    {
        id: "511100000",
        type: "ifo",
        title: "Hotcross",
        badge: "ifo-hotcross.svg"
    },
    {
        id: "511090000",
        type: "ifo",
        title: "Horizon Protocol",
        badge: "ifo-hzn.svg"
    },
    {
        id: "511080000",
        type: "ifo",
        title: "Belt",
        badge: "ifo-belt.svg"
    },
    {
        id: "511070000",
        type: "ifo",
        title: "Yieldwatch",
        badge: "ifo-watch.svg"
    },
    {
        id: "511060000",
        type: "ifo",
        title: "Berry",
        badge: "ifo-bry.svg"
    },
    {
        id: "511050000",
        type: "ifo",
        title: "Soteria",
        badge: "ifo-wsote.svg"
    },
    {
        id: "511040000",
        type: "ifo",
        title: "Helmet",
        badge: "ifo-helmet.svg"
    },
    {
        id: "511030000",
        type: "ifo",
        title: "Tenet",
        badge: "ifo-ten.svg"
    },
    {
        id: "511020000",
        type: "ifo",
        title: "Ditto",
        badge: "ifo-ditto.svg"
    },
    {
        id: "511010000",
        type: "ifo",
        title: "Blink",
        badge: "ifo-blink.svg"
    },
    {
        id: "512010001",
        type: "teambattle",
        title: "Easter Champion: Gold",
        badge: "easter-champion-gold.svg"
    },
    {
        id: "512010002",
        type: "teambattle",
        title: "Easter Top 500: Gold",
        badge: "easter-top-500-gold.svg"
    },
    {
        id: "512010003",
        type: "teambattle",
        title: "Easter Top 500: Gold",
        badge: "easter-top-500-gold.svg"
    },
    {
        id: "512010004",
        type: "teambattle",
        title: "Easter Top 500: Gold",
        badge: "easter-top-500-gold.svg"
    },
    {
        id: "512010005",
        type: "teambattle",
        title: "Easter Participant: Gold",
        badge: "easter-participant-gold.svg"
    },
    {
        id: "512010006",
        type: "teambattle",
        title: "Easter Champion: Silver",
        badge: "easter-champion-silver.svg"
    },
    {
        id: "512010007",
        type: "teambattle",
        title: "Easter Top 500: Silver",
        badge: "easter-top-500-silver.svg"
    },
    {
        id: "512010008",
        type: "teambattle",
        title: "Easter Top 500: Silver",
        badge: "easter-top-500-silver.svg"
    },
    {
        id: "512010009",
        type: "teambattle",
        title: "Easter Top 500: Silver",
        badge: "easter-top-500-silver.svg"
    },
    {
        id: "512010010",
        type: "teambattle",
        title: "Easter Participant: Silver",
        badge: "easter-participant-silver.svg"
    },
    {
        id: "512010011",
        type: "teambattle",
        title: "Easter Champion: Bronze",
        badge: "easter-champion-bronze.svg"
    },
    {
        id: "512010012",
        type: "teambattle",
        title: "Easter Top 500: Bronze",
        badge: "easter-top-500-bronze.svg"
    },
    {
        id: "512010013",
        type: "teambattle",
        title: "Easter Top 500: Bronze",
        badge: "easter-top-500-bronze.svg"
    },
    {
        id: "512010014",
        type: "teambattle",
        title: "Easter Top 500: Bronze",
        badge: "easter-top-500-bronze.svg"
    },
    {
        id: "512010015",
        type: "teambattle",
        title: "Easter Participant: Bronze",
        badge: "easter-participant-bronze.svg"
    },
    {
        id: "513010001",
        type: "participation",
        title: "Syrup Soaker",
        description: "Took a dip in the early days of the Auto CAKE Pool",
        badge: "syrup-soaker.svg"
    },
    {
        id: "514010001",
        type: "participation",
        title: "Clairvoyant",
        description: "Played a round of Prediction before round 12,120",
        badge: "clairvoyant.svg"
    },
    {
        id: "515010001",
        type: "participation",
        title: "Lottie",
        description: "Joined a round in the early days of Lottery V2",
        badge: "lottie.svg"
    },
    {
        id: "515020001",
        type: "participation",
        title: "Lucky",
        description: "Won a round in the early days of Lottery V2",
        badge: "lucky.svg"
    },
    {
        id: "515030001",
        type: "participation",
        title: "Baller",
        description: "Top 100 ticket buyer in the early days of Lottery V2",
        badge: "baller.svg"
    },
    {
        id: "516010001",
        type: "participation",
        title: "1 Year",
        description: "Joined PancakeSwap during the first year of our journey!",
        badge: "1-year.svg"
    },
    {
        id: "516020001",
        type: "participation",
        title: "2 Year",
        description: "Celebrate our 2nd birthday with us",
        badge: "2-year.svg"
    },
    {
        id: "511120000",
        type: "ifo",
        title: "Duelist King",
        badge: "ifo-dkt.svg"
    },
    {
        id: "511130000",
        type: "ifo",
        title: "Mines of Dalarnia",
        badge: "ifo-dar.svg"
    },
    {
        id: "511140000",
        type: "ifo",
        title: "FC Porto Fan Token",
        badge: "ifo-porto.svg"
    },
    {
        id: "511150000",
        type: "ifo",
        title: "FC Santos Fan Token",
        badge: "ifo-santos.svg"
    },
    {
        id: "512020001",
        type: "teambattle",
        title: "Fan Token Champion: Gold",
        badge: "fan-token-champion-gold.svg"
    },
    {
        id: "512020002",
        type: "teambattle",
        title: "Fan Token Top 10: Gold",
        badge: "fan-token-top-10-gold.svg"
    },
    {
        id: "512020003",
        type: "teambattle",
        title: "Fan Token Top 100: Gold",
        badge: "fan-token-top-100-gold.svg"
    },
    {
        id: "512020004",
        type: "teambattle",
        title: "Fan Token Top 500: Gold",
        badge: "fan-token-top-500-gold.svg"
    },
    {
        id: "512020005",
        type: "teambattle",
        title: "Fan Token Participant: Gold",
        badge: "fan-token-participant-gold.svg"
    },
    {
        id: "512020006",
        type: "teambattle",
        title: "Fan Token Champion: Silver",
        badge: "fan-token-champion-silver.svg"
    },
    {
        id: "512020007",
        type: "teambattle",
        title: "Fan Token Top 10: Silver",
        badge: "fan-token-top-10-silver.svg"
    },
    {
        id: "512020008",
        type: "teambattle",
        title: "Fan Token Top 100: Silver",
        badge: "fan-token-top-100-silver.svg"
    },
    {
        id: "512020009",
        type: "teambattle",
        title: "Fan Token Top 500: Silver",
        badge: "fan-token-top-500-silver.svg"
    },
    {
        id: "512020010",
        type: "teambattle",
        title: "Fan Token Participant: Silver",
        badge: "fan-token-participant-silver.svg"
    },
    {
        id: "512020011",
        type: "teambattle",
        title: "Fan Token Champion: Bronze",
        badge: "fan-token-champion-bronze.svg"
    },
    {
        id: "512020012",
        type: "teambattle",
        title: "Fan Token Top 10: Bronze",
        badge: "fan-token-top-10-bronze.svg"
    },
    {
        id: "512020013",
        type: "teambattle",
        title: "Fan Token Top 100: Bronze",
        badge: "fan-token-top-100-bronze.svg"
    },
    {
        id: "512020014",
        type: "teambattle",
        title: "Fan Token Top 500: Bronze",
        badge: "fan-token-top-500-bronze.svg"
    },
    {
        id: "512020015",
        type: "teambattle",
        title: "Fan Token Participant: Bronze",
        badge: "fan-token-participant-bronze.svg"
    },
    {
        id: "511160000",
        type: "ifo",
        title: "Diviner Protocol",
        badge: "ifo-dpt.svg"
    },
    {
        id: "511170000",
        type: "ifo",
        title: "Froyo Games",
        badge: "ifo-froyo.svg"
    },
    {
        id: "511180000",
        type: "ifo",
        title: "Era7",
        badge: "ifo-era.svg"
    },
    {
        id: "511190000",
        type: "ifo",
        title: "Duet",
        badge: "ifo-duet.svg"
    },
    {
        id: "511200000",
        type: "ifo",
        title: "Trivia",
        badge: "ifo-trivia.svg"
    },
    {
        id: "511300000",
        type: "ifo",
        title: "Peel",
        badge: "ifo-peel.svg"
    },
    {
        id: "511400000",
        type: "ifo",
        title: "Wom",
        badge: "ifo-wom.svg"
    },
    {
        id: "511500000",
        type: "ifo",
        title: "Hoop",
        badge: "ifo-hoop.svg"
    },
    {
        id: "511600000",
        type: "ifo",
        title: "CO",
        badge: "ifo-co.svg"
    },
    {
        id: "511700000",
        type: "ifo",
        title: "KRS",
        badge: "ifo-krs.svg"
    },
    {
        id: "511800000",
        type: "ifo",
        title: "WMX",
        badge: "ifo-wmx.svg"
    },
    {
        id: "511900000",
        type: "ifo",
        title: "MGP",
        badge: "ifo-mgp.svg"
    },
    {
        id: "512030001",
        type: "teambattle",
        title: "Mobox Champion: Gold",
        badge: "MBOX-champion-gold.svg"
    },
    {
        id: "512030002",
        type: "teambattle",
        title: "Mobox Top 10: Gold",
        badge: "MBOX-top-10-gold.svg"
    },
    {
        id: "512030003",
        type: "teambattle",
        title: "Mobox Top 100: Gold",
        badge: "MBOX-top-100-gold.svg"
    },
    {
        id: "512030004",
        type: "teambattle",
        title: "Mobox Top 500: Gold",
        badge: "MBOX-top-500-gold.svg"
    },
    {
        id: "512030005",
        type: "teambattle",
        title: "Mobox Participant: Gold",
        badge: "MBOX-participant-gold.svg"
    },
    {
        id: "512030006",
        type: "teambattle",
        title: "Mobox Champion: Silver",
        badge: "MBOX-champion-silver.svg"
    },
    {
        id: "512030007",
        type: "teambattle",
        title: "Mobox Top 10: Silver",
        badge: "MBOX-top-10-silver.svg"
    },
    {
        id: "512030008",
        type: "teambattle",
        title: "Mobox Top 100: Silver",
        badge: "MBOX-top-100-silver.svg"
    },
    {
        id: "512030009",
        type: "teambattle",
        title: "Mobox Top 500: Silver",
        badge: "MBOX-top-500-silver.svg"
    },
    {
        id: "512030010",
        type: "teambattle",
        title: "Mobox Participant: Silver",
        badge: "MBOX-participant-silver.svg"
    },
    {
        id: "512030011",
        type: "teambattle",
        title: "Mobox Champion: Bronze",
        badge: "MBOX-champion-bronze.svg"
    },
    {
        id: "512030012",
        type: "teambattle",
        title: "Mobox Top 10: Bronze",
        badge: "MBOX-top-10-bronze.svg"
    },
    {
        id: "512030013",
        type: "teambattle",
        title: "Mobox Top 100: Bronze",
        badge: "MBOX-top-100-bronze.svg"
    },
    {
        id: "512030014",
        type: "teambattle",
        title: "Mobox Top 500: Bronze",
        badge: "MBOX-top-500-bronze.svg"
    },
    {
        id: "512030015",
        type: "teambattle",
        title: "Mobox Participant: Bronze",
        badge: "MBOX-participant-bronze.svg"
    },
    {
        id: "512040001",
        type: "teambattle",
        title: "MoD Champion: Gold",
        badge: "MoD-champion-gold.svg"
    },
    {
        id: "512040002",
        type: "teambattle",
        title: "MoD Top 10: Gold",
        badge: "MoD-top-10-gold.svg"
    },
    {
        id: "512040003",
        type: "teambattle",
        title: "MoD Top 100: Gold",
        badge: "MoD-top-100-gold.svg"
    },
    {
        id: "512040004",
        type: "teambattle",
        title: "MoD Top 500: Gold",
        badge: "MoD-top-500-gold.svg"
    },
    {
        id: "512040005",
        type: "teambattle",
        title: "MoD Participant: Gold",
        badge: "MoD-participant-gold.svg"
    },
    {
        id: "512040006",
        type: "teambattle",
        title: "MoD Champion: Silver",
        badge: "MoD-champion-silver.svg"
    },
    {
        id: "512040007",
        type: "teambattle",
        title: "MoD Top 10: Silver",
        badge: "MoD-top-10-silver.svg"
    },
    {
        id: "512040008",
        type: "teambattle",
        title: "MoD Top 100: Silver",
        badge: "MoD-top-100-silver.svg"
    },
    {
        id: "512040009",
        type: "teambattle",
        title: "MoD Top 500: Silver",
        badge: "MoD-top-500-silver.svg"
    },
    {
        id: "512040010",
        type: "teambattle",
        title: "MoD Participant: Silver",
        badge: "MoD-participant-silver.svg"
    },
    {
        id: "512040011",
        type: "teambattle",
        title: "MoD Champion: Bronze",
        badge: "MoD-champion-bronze.svg"
    },
    {
        id: "512040012",
        type: "teambattle",
        title: "MoD Top 10: Bronze",
        badge: "MoD-top-10-bronze.svg"
    },
    {
        id: "512040013",
        type: "teambattle",
        title: "MoD Top 100: Bronze",
        badge: "MoD-top-100-bronze.svg"
    },
    {
        id: "512040014",
        type: "teambattle",
        title: "MoD Top 500: Bronze",
        badge: "MoD-top-500-bronze.svg"
    },
    {
        id: "512040015",
        type: "teambattle",
        title: "MoD Participant: Bronze",
        badge: "MoD-participant-bronze.svg"
    }, 
];
/**
 * Transform the campaign config into a map. Keeps the config the same
 * as the others and allows easy access to a campaign by id
 */ const campaignMap = new Map();
campaigns.forEach((campaign)=>{
    campaignMap.set(campaign.id, campaign);
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (campaigns)));


/***/ }),

/***/ 27801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DELIST_COLLECTIONS = {
    "0x4D89eBf7b1F66806A4C99Df71D22b7b9efC6bB0b": {
        active: false,
        address: "0x4D89eBf7b1F66806A4C99Df71D22b7b9efC6bB0b",
        avatar: "",
        banner: {
            large: "",
            small: ""
        },
        createdAt: "",
        creatorAddress: "",
        creatorFee: "",
        description: "",
        id: "0x4d89ebf7b1f66806a4c99df71d22b7b9efc6bb0b",
        name: "Baked Potatoes",
        numberTokensListed: "76",
        owner: "0xCd1B0abBc3E55E91FCC5AEE393525e68478C2952",
        symbol: "POT",
        totalSupply: "",
        totalTrades: "",
        totalVolumeBNB: "",
        tradingFee: "",
        updatedAt: "",
        verified: true,
        whitelistChecker: ""
    },
    "0xC448498DDC536ad6F5d437325725dCf504d2d964": {
        active: false,
        address: "0xC448498DDC536ad6F5d437325725dCf504d2d964",
        avatar: "",
        banner: {
            large: "",
            small: ""
        },
        createdAt: "",
        creatorAddress: "",
        creatorFee: "",
        description: "",
        id: "0xC448498DDC536ad6F5d437325725dCf504d2d964",
        name: "Catbread",
        numberTokensListed: "9385",
        owner: "0xC9A81c56eb07397989907fa6BcC121B593d8f141",
        symbol: "CATBREADNFT",
        totalSupply: "",
        totalTrades: "",
        totalVolumeBNB: "",
        tradingFee: "",
        updatedAt: "",
        verified: true,
        whitelistChecker: ""
    },
    "0x44d85770aEa263F9463418708125Cd95e308299B": {
        active: false,
        address: "0x44d85770aEa263F9463418708125Cd95e308299B",
        avatar: "",
        banner: {
            large: "",
            small: ""
        },
        createdAt: "",
        creatorAddress: "",
        creatorFee: "",
        description: "",
        id: "0x44d85770aEa263F9463418708125Cd95e308299B",
        name: "BornBadBoys",
        numberTokensListed: "1846",
        owner: "0x952B8A6AC7957B769C6cAD934b128f2d27368565",
        symbol: "BBB",
        totalSupply: "",
        totalTrades: "",
        totalVolumeBNB: "",
        tradingFee: "",
        updatedAt: "",
        verified: true,
        whitelistChecker: ""
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DELIST_COLLECTIONS);


/***/ }),

/***/ 47296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7599);

const teams = [
    {
        id: 1,
        name: "Syrup Storm",
        description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
        images: {
            lg: "syrup-storm-lg.png",
            md: "syrup-storm-md.png",
            sm: "syrup-storm-sm.png",
            alt: "syrup-storm-alt.png",
            ipfs: `${_index__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY */ .Gs}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png`
        },
        background: "syrup-storm-bg.svg",
        textColor: "#191326",
        users: 0,
        points: 0
    },
    {
        id: 2,
        name: "Fearsome Flippers",
        description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!",
        images: {
            lg: "fearsome-flippers-lg.png",
            md: "fearsome-flippers-md.png",
            sm: "fearsome-flippers-sm.png",
            alt: "fearsome-flippers-alt.png",
            ipfs: `${_index__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY */ .Gs}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png`
        },
        background: "fearsome-flippers-bg.svg",
        textColor: "#FFFFFF",
        users: 0,
        points: 0
    },
    {
        id: 3,
        name: "Chaotic Cakers",
        description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!",
        images: {
            lg: "chaotic-cakers-lg.png",
            md: "chaotic-cakers-md.png",
            sm: "chaotic-cakers-sm.png",
            alt: "chaotic-cakers-alt.png",
            ipfs: `${_index__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY */ .Gs}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png`
        },
        background: "chaotic-cakers-bg.svg",
        textColor: "#191326",
        users: 0,
        points: 0
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teams);


/***/ }),

/***/ 91240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useCakeApprovalStatus */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// TODO: refactor as useTokenApprovalStatus for generic use
const useCakeApprovalStatus = (spender)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { reader: cakeContract  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useCake */ .kL)();
    const key = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>account && spender ? {
            contract: cakeContract,
            methodName: "allowance",
            params: [
                account,
                spender
            ]
        } : null, [
        account,
        cakeContract,
        spender
    ]);
    const { data , mutate  } = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__/* .useSWRContract */ .Av)(key);
    return {
        isVaultApproved: data ? data.gt(0) : false,
        setLastUpdated: mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCakeApprovalStatus);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91397);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80361);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78950);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36576);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, components_Toast__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, components_Toast__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useCakeApprove = (setLastUpdated, spender, successMsg)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_4__/* .useCallWithMarketGasPrice */ .r)();
    const { signer: cakeContract  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useCake */ .kL)();
    const handleApprove = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return callWithMarketGasPrice(cakeContract, "approve", [
                spender,
                _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.MaxUint256
            ]);
        });
        if (receipt?.status) {
            toastSuccess(t("Contract Enabled"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_6__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: successMsg
            }));
            setLastUpdated();
        }
    };
    return {
        handleApprove,
        pendingTx
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCakeApprove);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jV": () => (/* binding */ COOKIE_THEME_KEY),
/* harmony export */   "zE": () => (/* binding */ THEME_DOMAIN)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const COOKIE_THEME_KEY = "theme";
const THEME_DOMAIN = ".pancakeswap.finance";
const useTheme = ()=>{
    const { resolvedTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    const handleSwitchTheme = (themeValue)=>{
        try {
            setTheme(themeValue);
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(COOKIE_THEME_KEY, themeValue, {
                domain: THEME_DOMAIN
            });
        } catch (err) {
        // ignore set cookie error for perp theme
        }
    };
    return {
        isDark: resolvedTheme === "dark",
        theme,
        setTheme: handleSwitchTheme
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

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

/***/ 95519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ getAchievements)
/* harmony export */ });
/* unused harmony export getUserPointIncreaseEvents */
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69820);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10494);
/* harmony import */ var utils_achievements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67624);




/**
 * Gets all user point increase events on the profile filtered by wallet address
 */ const getUserPointIncreaseEvents = async (account)=>{
    try {
        const { user  } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .GRAPH_API_PROFILE */ .YP, graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
        query getUserPointIncreaseEvents($account: ID!) {
          user(id: $account) {
            points {
              id
              campaignId
              points
            }
          }
        }
      `, {
            account: account.toLowerCase()
        });
        return user.points;
    } catch (error) {
        return null;
    }
};
/**
 * Gets all user point increase events and adds achievement meta
 */ const getAchievements = async (account)=>{
    const pointIncreaseEvents = await getUserPointIncreaseEvents(account);
    if (!pointIncreaseEvents) {
        return [];
    }
    return pointIncreaseEvents.reduce((accum, userPoint)=>{
        if (!config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.has */ .T.has(userPoint.campaignId)) {
            return accum;
        }
        const campaignMeta = config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.get */ .T.get(userPoint.campaignId);
        accum.push({
            id: userPoint.campaignId,
            type: campaignMeta.type,
            address: userPoint.id,
            title: (0,utils_achievements__WEBPACK_IMPORTED_MODULE_3__/* .getAchievementTitle */ .hi)(campaignMeta),
            description: (0,utils_achievements__WEBPACK_IMPORTED_MODULE_3__/* .getAchievementDescription */ .A9)(campaignMeta),
            badge: campaignMeta.badge,
            points: Number(userPoint.points)
        });
        return accum;
    }, []);
};


/***/ }),

/***/ 44409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oy": () => (/* reexport safe */ _pools__WEBPACK_IMPORTED_MODULE_1__.Oy)
/* harmony export */ });
/* harmony import */ var _farms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44868);
/* harmony import */ var _pools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34376);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pools__WEBPACK_IMPORTED_MODULE_1__]);
_pools__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



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

/***/ 46737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HD": () => (/* binding */ combineApiAndSgResponseToNftToken),
  "nh": () => (/* binding */ fetchNftsFiltered),
  "LU": () => (/* binding */ getAllPancakeBunniesLowestPrice),
  "nP": () => (/* binding */ getAllPancakeBunniesRecentUpdatedAt),
  "_N": () => (/* binding */ getCollection),
  "Du": () => (/* binding */ getCollectionActivity),
  "iE": () => (/* binding */ getCollectionDistributionApi),
  "bG": () => (/* binding */ getCollections),
  "A8": () => (/* binding */ getCompleteAccountNftData),
  "dk": () => (/* binding */ getLatestListedNfts),
  "Um": () => (/* binding */ getLeastMostPriceInCollection),
  "Z1": () => (/* binding */ getMarketDataForTokenIds),
  "M2": () => (/* binding */ getMetadataWithFallback),
  "hb": () => (/* binding */ getNftApi),
  "Rq": () => (/* binding */ getNftsFromCollectionApi),
  "_C": () => (/* binding */ getNftsFromDifferentCollectionsApi),
  "T5": () => (/* binding */ getNftsMarketData),
  "DS": () => (/* binding */ getNftsOnChainMarketData),
  "tU": () => (/* binding */ getNftsUpdatedMarketData),
  "rD": () => (/* binding */ getPancakeBunniesAttributesField),
  "AC": () => (/* binding */ getTokenActivity),
  "_z": () => (/* binding */ getUserActivity)
});

// UNUSED EXPORTS: attachMarketDataToWalletNfts, combineCollectionData, combineNftMarketAndMetadata, fetchWalletTokenIdsForCollections, getAccountNftsOnChainMarketData, getCollectionApi, getCollectionSg, getCollectionsApi, getCollectionsSg, getNftLocationForMarketNft, getNftsByBunnyIdSg, getNftsFromCollectionSg

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(59819);
// EXTERNAL MODULE: ./src/config/constants/endpoints.ts
var endpoints = __webpack_require__(10494);
// EXTERNAL MODULE: ./src/utils/multicall.ts
var multicall = __webpack_require__(25152);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5305);
// EXTERNAL MODULE: ./src/config/abi/erc721.json
var erc721 = __webpack_require__(53400);
// EXTERNAL MODULE: external "lodash/range"
var range_ = __webpack_require__(64042);
var range_default = /*#__PURE__*/__webpack_require__.n(range_);
// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(98492);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);
// EXTERNAL MODULE: ./src/utils/contractHelpers.ts + 29 modules
var contractHelpers = __webpack_require__(12895);
// EXTERNAL MODULE: ./src/config/constants/index.ts
var constants = __webpack_require__(17943);
// EXTERNAL MODULE: ./src/config/constants/nftsCollections/delist.ts
var delist = __webpack_require__(27801);
// EXTERNAL MODULE: ./src/views/Nft/market/constants.ts
var market_constants = __webpack_require__(36806);
// EXTERNAL MODULE: ../../packages/utils/formatBalance.ts
var formatBalance = __webpack_require__(24671);
// EXTERNAL MODULE: ./src/utils/addressHelpers.ts
var addressHelpers = __webpack_require__(70627);
// EXTERNAL MODULE: ./src/config/abi/nftMarket.json
var nftMarket = __webpack_require__(60290);
// EXTERNAL MODULE: external "lodash/fromPairs"
var fromPairs_ = __webpack_require__(57626);
var fromPairs_default = /*#__PURE__*/__webpack_require__.n(fromPairs_);
// EXTERNAL MODULE: ./src/state/nftMarket/types.ts
var types = __webpack_require__(88587);
;// CONCATENATED MODULE: ./src/state/nftMarket/queries.ts
const queries_baseNftFields = `
  tokenId
  metadataUrl
  currentAskPrice
  currentSeller
  latestTradedPriceInBNB
  tradeVolumeBNB
  totalTrades
  isTradable
  updatedAt
  otherId
  collection {
    id
  }
`;
const baseTransactionFields = `
  id
  block
  timestamp
  askPrice
  netPrice
  withBNB
  buyer {
    id
  }
  seller {
    id
  }
`;
const collectionBaseFields = `
  id
  name
  symbol
  active
  totalTrades
  totalVolumeBNB
  numberTokensListed
  creatorAddress
  tradingFee
  creatorFee
  whitelistChecker
`;

;// CONCATENATED MODULE: ./src/state/nftMarket/helpers.ts


















/**
 * API HELPERS
 */ /**
 * Fetch static data from all collections using the API
 * @returns
 */ const getCollectionsApi = async ()=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections`);
    if (res.ok) {
        const json = await res.json();
        return json;
    }
    console.error("Failed to fetch NFT collections", res.statusText);
    return null;
};
const fetchCollectionsTotalSupply = async (collections)=>{
    const totalSupplyCalls = collections.filter((collection)=>collection?.address).map((collection)=>({
            address: collection.address.toLowerCase(),
            name: "totalSupply"
        }));
    if (totalSupplyCalls.length > 0) {
        const totalSupplyRaw = await (0,multicall/* multicallv2 */.v)({
            abi: erc721,
            calls: totalSupplyCalls,
            options: {
                requireSuccess: false
            }
        });
        const totalSupply = totalSupplyRaw.flat();
        return totalSupply.map((totalCount)=>totalCount ? totalCount.toNumber() : 0);
    }
    return [];
};
/**
 * Fetch all collections data by combining data from the API (static metadata) and the Subgraph (dynamic market data)
 */ const getCollections = async ()=>{
    try {
        const [collections, collectionsMarket] = await Promise.all([
            getCollectionsApi(),
            getCollectionsSg()
        ]);
        const collectionApiData = collections?.data ?? [];
        const collectionsTotalSupply = await fetchCollectionsTotalSupply(collectionApiData);
        const collectionApiDataCombinedOnChain = collectionApiData.map((collection, index)=>{
            const totalSupplyFromApi = Number(collection?.totalSupply) || 0;
            const totalSupplyFromOnChain = collectionsTotalSupply[index];
            return {
                ...collection,
                totalSupply: Math.max(totalSupplyFromApi, totalSupplyFromOnChain).toString()
            };
        });
        return combineCollectionData(collectionApiDataCombinedOnChain, collectionsMarket);
    } catch (error) {
        console.error("Unable to fetch data:", error);
        return null;
    }
};
/**
 * Fetch collection data by combining data from the API (static metadata) and the Subgraph (dynamic market data)
 */ const getCollection = async (collectionAddress)=>{
    try {
        const [collection, collectionMarket] = await Promise.all([
            getCollectionApi(collectionAddress),
            getCollectionSg(collectionAddress), 
        ]);
        const collectionsTotalSupply = await fetchCollectionsTotalSupply([
            collection
        ]);
        const totalSupplyFromApi = Number(collection?.totalSupply) || 0;
        const totalSupplyFromOnChain = collectionsTotalSupply[0];
        const collectionApiDataCombinedOnChain = {
            ...collection,
            totalSupply: Math.max(totalSupplyFromApi, totalSupplyFromOnChain).toString()
        };
        return combineCollectionData([
            collectionApiDataCombinedOnChain
        ], [
            collectionMarket
        ]);
    } catch (error) {
        console.error("Unable to fetch data:", error);
        return null;
    }
};
/**
 * Fetch static data from a collection using the API
 * @returns
 */ const getCollectionApi = async (collectionAddress)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}`);
    if (res.ok) {
        const json = await res.json();
        return json.data;
    }
    console.error(`API: Failed to fetch NFT collection ${collectionAddress}`, res.statusText);
    return null;
};
/**
 * Fetch static data for all nfts in a collection using the API
 * @param collectionAddress
 * @param size
 * @param page
 * @returns
 */ const getNftsFromCollectionApi = async (collectionAddress, size = 100, page = 1)=>{
    const isPBCollection = (0,utils/* isAddress */.UJ)(collectionAddress) === market_constants/* pancakeBunniesAddress */.J;
    const requestPath = `${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/tokens${!isPBCollection ? `?page=${page}&size=${size}` : ``}`;
    try {
        const res = await fetch(requestPath);
        if (res.ok) {
            const data = await res.json();
            const filteredAttributesDistribution = Object.entries(data.attributesDistribution).filter(([, value])=>Boolean(value));
            const filteredData = Object.entries(data.data).filter(([, value])=>Boolean(value));
            const filteredTotal = filteredData.length;
            return {
                ...data,
                total: filteredTotal,
                attributesDistribution: fromPairs_default()(filteredAttributesDistribution),
                data: fromPairs_default()(filteredData)
            };
        }
        console.error(`API: Failed to fetch NFT tokens for ${collectionAddress} collection`, res.statusText);
        return null;
    } catch (error) {
        console.error(`API: Failed to fetch NFT tokens for ${collectionAddress} collection`, error);
        return null;
    }
};
/**
 * Fetch a single NFT using the API
 * @param collectionAddress
 * @param tokenId
 * @returns NFT from API
 */ const getNftApi = async (collectionAddress, tokenId)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/tokens/${tokenId}`);
    if (res.ok) {
        const json = await res.json();
        return json.data;
    }
    console.error(`API: Can't fetch NFT token ${tokenId} in ${collectionAddress}`, res.status);
    return null;
};
/**
 * Fetch a list of NFT from different collections
 * @param from Array of { collectionAddress: string; tokenId: string }
 * @returns Array of NFT from API
 */ const getNftsFromDifferentCollectionsApi = async (from)=>{
    const promises = from.map((nft)=>getNftApi(nft.collectionAddress, nft.tokenId));
    const responses = await Promise.all(promises);
    // Sometimes API can't find some tokens (e.g. 404 response)
    // at least return the ones that returned successfully
    return responses.filter((resp)=>resp).map((res, index)=>({
            tokenId: res.tokenId,
            name: res.name,
            collectionName: res.collection.name,
            collectionAddress: from[index].collectionAddress,
            description: res.description,
            attributes: res.attributes,
            createdAt: res.createdAt,
            updatedAt: res.updatedAt,
            image: res.image
        }));
};
/**
 * SUBGRAPH HELPERS
 */ /**
 * Fetch market data from a collection using the Subgraph
 * @returns
 */ const getCollectionSg = async (collectionAddress)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getCollectionData($collectionAddress: String!) {
          collection(id: $collectionAddress) {
            ${collectionBaseFields}
          }
        }
      `, {
            collectionAddress: collectionAddress.toLowerCase()
        });
        return res.collection;
    } catch (error) {
        console.error("Failed to fetch collection", error);
        return null;
    }
};
/**
 * Fetch market data from all collections using the Subgraph
 * @returns
 */ const getCollectionsSg = async ()=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        {
          collections {
            ${collectionBaseFields}
          }
        }
      `);
        return res.collections;
    } catch (error) {
        console.error("Failed to fetch NFT collections", error);
        return [];
    }
};
/**
 * Fetch market data for nfts in a collection using the Subgraph
 * @param collectionAddress
 * @param first
 * @param skip
 * @returns
 */ const getNftsFromCollectionSg = async (collectionAddress, first = 1000, skip = 0)=>{
    // Squad to be sorted by tokenId as this matches the order of the paginated API return. For PBs - get the most recent,
    const isPBCollection = isAddress(collectionAddress) === pancakeBunniesAddress;
    try {
        const res = await request(GRAPH_API_NFTMARKET, gql`
        query getNftCollectionMarketData($collectionAddress: String!) {
          collection(id: $collectionAddress) {
            id
            nfts(orderBy:${isPBCollection ? "updatedAt" : "tokenId"}, skip: $skip, first: $first) {
             ${baseNftFields}
            }
          }
        }
      `, {
            collectionAddress: collectionAddress.toLowerCase(),
            skip,
            first
        });
        return res.collection.nfts;
    } catch (error) {
        console.error("Failed to fetch NFTs from collection", error);
        return [];
    }
};
/**
 * Fetch market data for PancakeBunnies NFTs by bunny id using the Subgraph
 * @param bunnyId - bunny id to query
 * @param existingTokenIds - tokens that are already loaded into redux
 * @returns
 */ const getNftsByBunnyIdSg = async (bunnyId, existingTokenIds, orderDirection)=>{
    try {
        const where = existingTokenIds.length > 0 ? {
            otherId: bunnyId,
            isTradable: true,
            tokenId_not_in: existingTokenIds
        } : {
            otherId: bunnyId,
            isTradable: true
        };
        const res = await request(GRAPH_API_NFTMARKET, gql`
        query getNftsByBunnyIdSg($collectionAddress: String!, $where: NFT_filter, $orderDirection: String!) {
          nfts(first: 30, where: $where, orderBy: currentAskPrice, orderDirection: $orderDirection) {
            ${baseNftFields}
          }
        }
      `, {
            collectionAddress: pancakeBunniesAddress.toLowerCase(),
            where,
            orderDirection
        });
        return res.nfts;
    } catch (error) {
        console.error(`Failed to fetch collection NFTs for bunny id ${bunnyId}`, error);
        return [];
    }
};
/**
 * Fetch market data for PancakeBunnies NFTs by bunny id using the Subgraph
 * @param bunnyId - bunny id to query
 * @param existingTokenIds - tokens that are already loaded into redux
 * @returns
 */ const getMarketDataForTokenIds = async (collectionAddress, existingTokenIds)=>{
    try {
        if (existingTokenIds.length === 0) {
            return [];
        }
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getMarketDataForTokenIds($collectionAddress: String!, $where: NFT_filter) {
          collection(id: $collectionAddress) {
            id
            nfts(first: 1000, where: $where) {
              ${queries_baseNftFields}
            }
          }
        }
      `, {
            collectionAddress: collectionAddress.toLowerCase(),
            where: {
                tokenId_in: existingTokenIds
            }
        });
        return res.collection.nfts;
    } catch (error) {
        console.error(`Failed to fetch market data for NFTs stored tokens`, error);
        return [];
    }
};
const getNftsOnChainMarketData = async (collectionAddress, tokenIds)=>{
    try {
        const nftMarketContract = (0,contractHelpers/* getNftMarketContract */.X$)();
        const response = await nftMarketContract.viewAsksByCollectionAndTokenIds(collectionAddress.toLowerCase(), tokenIds);
        const askInfo = response?.askInfo;
        if (!askInfo) return [];
        return askInfo.map((tokenAskInfo, index)=>{
            if (!tokenAskInfo.seller || !tokenAskInfo.price) return null;
            const currentSeller = tokenAskInfo.seller;
            const isTradable = currentSeller.toLowerCase() !== constants/* NOT_ON_SALE_SELLER */.Vc;
            const currentAskPrice = tokenAskInfo.price && (0,formatBalance/* formatBigNumber */.dp)(tokenAskInfo.price);
            return {
                collection: {
                    id: collectionAddress.toLowerCase()
                },
                tokenId: tokenIds[index],
                currentSeller,
                isTradable,
                currentAskPrice
            };
        }).filter(Boolean);
    } catch (error) {
        console.error("Failed to fetch NFTs onchain market data", error);
        return [];
    }
};
const getNftsUpdatedMarketData = async (collectionAddress, tokenIds)=>{
    try {
        const nftMarketContract = (0,contractHelpers/* getNftMarketContract */.X$)();
        const response = await nftMarketContract.viewAsksByCollectionAndTokenIds(collectionAddress.toLowerCase(), tokenIds);
        const askInfo = response?.askInfo;
        if (!askInfo) return null;
        return askInfo.map((tokenAskInfo, index)=>{
            const isTradable = tokenAskInfo.seller ? tokenAskInfo.seller.toLowerCase() !== constants/* NOT_ON_SALE_SELLER */.Vc : false;
            return {
                tokenId: tokenIds[index],
                currentSeller: tokenAskInfo.seller,
                isTradable,
                currentAskPrice: tokenAskInfo.price
            };
        });
    } catch (error) {
        console.error("Failed to fetch updated NFT market data", error);
        return null;
    }
};
const getAccountNftsOnChainMarketData = async (collections, account)=>{
    try {
        const nftMarketAddress = (0,addressHelpers/* getNftMarketAddress */.D4)();
        const collectionList = Object.values(collections);
        const askCalls = collectionList.map((collection)=>{
            const { address: collectionAddress  } = collection;
            return {
                address: nftMarketAddress,
                name: "viewAsksByCollectionAndSeller",
                params: [
                    collectionAddress,
                    account,
                    0,
                    1000
                ]
            };
        });
        const askCallsResultsRaw = await (0,multicall/* multicallv2 */.v)({
            abi: nftMarket,
            calls: askCalls,
            options: {
                requireSuccess: false
            }
        });
        const askCallsResults = askCallsResultsRaw.map((askCallsResultRaw, askCallIndex)=>{
            if (!askCallsResultRaw?.tokenIds || !askCallsResultRaw?.askInfo || !collectionList[askCallIndex]?.address) return null;
            return askCallsResultRaw.tokenIds.map((tokenId, tokenIdIndex)=>{
                if (!tokenId || !askCallsResultRaw.askInfo[tokenIdIndex] || !askCallsResultRaw.askInfo[tokenIdIndex].price) return null;
                const currentAskPrice = (0,formatBalance/* formatBigNumber */.dp)(askCallsResultRaw.askInfo[tokenIdIndex].price);
                return {
                    collection: {
                        id: collectionList[askCallIndex].address.toLowerCase()
                    },
                    tokenId: tokenId.toString(),
                    account,
                    isTradable: true,
                    currentAskPrice
                };
            }).filter(Boolean);
        }).flat().filter(Boolean);
        return askCallsResults;
    } catch (error) {
        console.error("Failed to fetch NFTs onchain market data", error);
        return [];
    }
};
const getNftsMarketData = async (where = {}, first = 1000, orderBy = "id", orderDirection = "desc", skip = 0)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getNftsMarketData($first: Int, $skip: Int!, $where: NFT_filter, $orderBy: NFT_orderBy, $orderDirection: OrderDirection) {
          nfts(where: $where, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, skip: $skip) {
            ${queries_baseNftFields}
            transactionHistory {
              ${baseTransactionFields}
            }
          }
        }
      `, {
            where,
            first,
            skip,
            orderBy,
            orderDirection
        });
        return res.nfts;
    } catch (error) {
        console.error("Failed to fetch NFTs market data", error);
        return [];
    }
};
const getAllPancakeBunniesLowestPrice = async (bunnyIds)=>{
    try {
        const singlePancakeBunnySubQueries = bunnyIds.map((bunnyId)=>`b${bunnyId}:nfts(first: 1, where: { otherId: ${bunnyId}, isTradable: true }, orderBy: currentAskPrice, orderDirection: asc) {
        currentAskPrice
      }
    `);
        const rawResponse = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getAllPancakeBunniesLowestPrice {
          ${singlePancakeBunnySubQueries}
        }
      `);
        return fromPairs_default()(Object.keys(rawResponse).map((subQueryKey)=>{
            const bunnyId = subQueryKey.split("b")[1];
            return [
                bunnyId,
                rawResponse[subQueryKey].length > 0 ? parseFloat(rawResponse[subQueryKey][0].currentAskPrice) : Infinity, 
            ];
        }));
    } catch (error) {
        console.error("Failed to fetch PancakeBunnies lowest prices", error);
        return {};
    }
};
const getAllPancakeBunniesRecentUpdatedAt = async (bunnyIds)=>{
    try {
        const singlePancakeBunnySubQueries = bunnyIds.map((bunnyId)=>`b${bunnyId}:nfts(first: 1, where: { otherId: ${bunnyId}, isTradable: true }, orderBy: updatedAt, orderDirection: desc) {
        updatedAt
      }
    `);
        const rawResponse = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getAllPancakeBunniesLowestPrice {
          ${singlePancakeBunnySubQueries}
        }
      `);
        return fromPairs_default()(Object.keys(rawResponse).map((subQueryKey)=>{
            const bunnyId = subQueryKey.split("b")[1];
            return [
                bunnyId,
                rawResponse[subQueryKey].length > 0 ? Number(rawResponse[subQueryKey][0].updatedAt) : -Infinity, 
            ];
        }));
    } catch (error) {
        console.error("Failed to fetch PancakeBunnies latest market updates", error);
        return {};
    }
};
/**
 * Returns the lowest/highest price of any NFT in a collection
 */ const getLeastMostPriceInCollection = async (collectionAddress, orderDirection = "asc")=>{
    try {
        const response = await getNftsMarketData({
            collection: collectionAddress.toLowerCase(),
            isTradable: true
        }, 1, "currentAskPrice", orderDirection);
        if (response.length === 0) {
            return 0;
        }
        const [nftSg] = response;
        return parseFloat(nftSg.currentAskPrice);
    } catch (error) {
        console.error(`Failed to lowest price NFTs in collection ${collectionAddress}`, error);
        return 0;
    }
};
/**
 * Fetch user trading data for buyTradeHistory, sellTradeHistory and askOrderHistory from the Subgraph
 * @param where a User_filter where condition
 * @returns a UserActivity object
 */ const getUserActivity = async (address)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getUserActivity($address: String!) {
          user(id: $address) {
            buyTradeHistory(first: 250, orderBy: timestamp, orderDirection: desc) {
              ${baseTransactionFields}
              nft {
                ${queries_baseNftFields}
              }
            }
            sellTradeHistory(first: 250, orderBy: timestamp, orderDirection: desc) {
              ${baseTransactionFields}
              nft {
                ${queries_baseNftFields}
              }
            }
            askOrderHistory(first: 500, orderBy: timestamp, orderDirection: desc) {
              id
              block
              timestamp
              orderType
              askPrice
              nft {
                ${queries_baseNftFields}
              }
            }
          }
        }
      `, {
            address
        });
        return res.user || {
            askOrderHistory: [],
            buyTradeHistory: [],
            sellTradeHistory: []
        };
    } catch (error) {
        console.error("Failed to fetch user Activity", error);
        return {
            askOrderHistory: [],
            buyTradeHistory: [],
            sellTradeHistory: []
        };
    }
};
const getCollectionActivity = async (address, nftActivityFilter, itemPerQuery)=>{
    const getAskOrderEvent = (orderType)=>{
        switch(orderType){
            case types/* MarketEvent.CANCEL */.YG.CANCEL:
                return types/* AskOrderType.CANCEL */.cP.CANCEL;
            case types/* MarketEvent.MODIFY */.YG.MODIFY:
                return types/* AskOrderType.MODIFY */.cP.MODIFY;
            case types/* MarketEvent.NEW */.YG.NEW:
                return types/* AskOrderType.NEW */.cP.NEW;
            default:
                return types/* AskOrderType.MODIFY */.cP.MODIFY;
        }
    };
    const isFetchAllCollections = address === "";
    const hasCollectionFilter = nftActivityFilter.collectionFilters.length > 0;
    const collectionFilterGql = !isFetchAllCollections ? `collection: ${JSON.stringify(address)}` : hasCollectionFilter ? `collection_in: ${JSON.stringify(nftActivityFilter.collectionFilters)}` : ``;
    const askOrderTypeFilter = nftActivityFilter.typeFilters.filter((marketEvent)=>marketEvent !== types/* MarketEvent.SELL */.YG.SELL).map((marketEvent)=>getAskOrderEvent(marketEvent));
    const askOrderIncluded = nftActivityFilter.typeFilters.length === 0 || askOrderTypeFilter.length > 0;
    const askOrderTypeFilterGql = askOrderTypeFilter.length > 0 ? `orderType_in: ${JSON.stringify(askOrderTypeFilter)}` : ``;
    const transactionIncluded = nftActivityFilter.typeFilters.length === 0 || nftActivityFilter.typeFilters.some((marketEvent)=>marketEvent === types/* MarketEvent.BUY */.YG.BUY || marketEvent === types/* MarketEvent.SELL */.YG.SELL);
    let askOrderQueryItem = itemPerQuery / 2;
    let transactionQueryItem = itemPerQuery / 2;
    if (!askOrderIncluded || !transactionIncluded) {
        askOrderQueryItem = !askOrderIncluded ? 0 : itemPerQuery;
        transactionQueryItem = !transactionIncluded ? 0 : itemPerQuery;
    }
    const askOrderGql = askOrderIncluded ? `askOrders(first: ${askOrderQueryItem}, orderBy: timestamp, orderDirection: desc, where:{
            ${collectionFilterGql}, ${askOrderTypeFilterGql}
          }) {
              id
              block
              timestamp
              orderType
              askPrice
              seller {
                id
              }
              nft {
                ${queries_baseNftFields}
              }
          }` : ``;
    const transactionGql = transactionIncluded ? `transactions(first: ${transactionQueryItem}, orderBy: timestamp, orderDirection: desc, where:{
            ${collectionFilterGql}
          }) {
            ${baseTransactionFields}
              nft {
                ${queries_baseNftFields}
              }
          }` : ``;
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getCollectionActivity {
          ${askOrderGql}
          ${transactionGql}
        }
      `);
        return res || {
            askOrders: [],
            transactions: []
        };
    } catch (error) {
        console.error("Failed to fetch collection Activity", error);
        return {
            askOrders: [],
            transactions: []
        };
    }
};
const getTokenActivity = async (tokenId, collectionAddress)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getCollectionActivity($tokenId: BigInt!, $address: ID!) {
          nfts(where:{tokenId: $tokenId, collection: $address}) {
            transactionHistory(orderBy: timestamp, orderDirection: desc) {
              ${baseTransactionFields}
                nft {
                  ${queries_baseNftFields}
                }
            }
            askHistory(orderBy: timestamp, orderDirection: desc) {
                id
                block
                timestamp
                orderType
                askPrice
                seller {
                  id
                }
                nft {
                  ${queries_baseNftFields}
                }
            }
          }
        }
      `, {
            tokenId,
            address: collectionAddress
        });
        if (res.nfts.length > 0) {
            return {
                askOrders: res.nfts[0].askHistory,
                transactions: res.nfts[0].transactionHistory
            };
        }
        return {
            askOrders: [],
            transactions: []
        };
    } catch (error) {
        console.error("Failed to fetch token Activity", error);
        return {
            askOrders: [],
            transactions: []
        };
    }
};
/**
 * Get the most recently listed NFTs
 * @param first Number of nfts to retrieve
 * @returns NftTokenSg[]
 */ const getLatestListedNfts = async (first)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getLatestNftMarketData($first: Int) {
          nfts(where: { isTradable: true }, orderBy: updatedAt , orderDirection: desc, first: $first) {
            ${queries_baseNftFields}
            collection {
              id
            }
          }
        }
      `, {
            first
        });
        return res.nfts;
    } catch (error) {
        console.error("Failed to fetch NFTs market data", error);
        return [];
    }
};
/**
 * Filter NFTs from a collection
 * @param collectionAddress
 * @returns
 */ const fetchNftsFiltered = async (collectionAddress, filters)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/filter?${(0,external_querystring_.stringify)(filters)}`);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    console.error(`API: Failed to fetch NFT collection ${collectionAddress}`, res.statusText);
    return null;
};
/**
 * OTHER HELPERS
 */ const getMetadataWithFallback = (apiMetadata, bunnyId)=>{
    // The fallback is just for the testnet where some bunnies don't exist
    return apiMetadata[bunnyId] ?? {
        name: "",
        description: "",
        collection: {
            name: "Pancake Bunnies"
        },
        image: {
            original: "",
            thumbnail: ""
        }
    };
};
const getPancakeBunniesAttributesField = (bunnyId)=>{
    // Generating attributes field that is not returned by API
    // but can be "faked" since objects are keyed with bunny id
    return [
        {
            traitType: "bunnyId",
            value: bunnyId,
            displayType: null
        }, 
    ];
};
const combineApiAndSgResponseToNftToken = (apiMetadata, marketData, attributes)=>{
    return {
        tokenId: marketData.tokenId,
        name: apiMetadata.name,
        description: apiMetadata.description,
        collectionName: apiMetadata.collection.name,
        collectionAddress: market_constants/* pancakeBunniesAddress */.J,
        image: apiMetadata.image,
        marketData,
        attributes
    };
};
const fetchWalletTokenIdsForCollections = async (account, collections)=>{
    const balanceOfCalls = Object.values(collections).map((collection)=>{
        const { address: collectionAddress  } = collection;
        return {
            address: collectionAddress,
            name: "balanceOf",
            params: [
                account
            ]
        };
    });
    const balanceOfCallsResultRaw = await (0,multicall/* multicallv2 */.v)({
        abi: erc721,
        calls: balanceOfCalls,
        options: {
            requireSuccess: false
        }
    });
    const balanceOfCallsResult = balanceOfCallsResultRaw.flat();
    const tokenIdCalls = Object.values(collections).map((collection, index)=>{
        const balanceOf = balanceOfCallsResult[index]?.toNumber() ?? 0;
        const { address: collectionAddress  } = collection;
        return range_default()(balanceOf).map((tokenIndex)=>{
            return {
                address: collectionAddress,
                name: "tokenOfOwnerByIndex",
                params: [
                    account,
                    tokenIndex
                ]
            };
        });
    }).flat();
    const tokenIdResultRaw = await (0,multicall/* multicallv2 */.v)({
        abi: erc721,
        calls: tokenIdCalls,
        options: {
            requireSuccess: false
        }
    });
    const tokenIdResult = tokenIdResultRaw.flat();
    const nftLocation = types/* NftLocation.WALLET */.Fb.WALLET;
    const walletNfts = tokenIdResult.reduce((acc, tokenIdBn, index)=>{
        if (tokenIdBn) {
            const { address: collectionAddress  } = tokenIdCalls[index];
            acc.push({
                tokenId: tokenIdBn.toString(),
                collectionAddress,
                nftLocation
            });
        }
        return acc;
    }, []);
    return walletNfts;
};
/**
 * Helper to combine data from the collections' API and subgraph
 */ const combineCollectionData = (collectionApiData, collectionSgData)=>{
    const collectionsMarketObj = fromPairs_default()(collectionSgData.map((current)=>[
            current.id,
            current
        ]));
    return fromPairs_default()(collectionApiData.filter((collection)=>collection?.address).map((current)=>{
        const collectionMarket = collectionsMarketObj[current.address.toLowerCase()];
        const collection = {
            ...current,
            ...collectionMarket
        };
        if (current.name) {
            collection.name = current.name;
        }
        return [
            current.address,
            collection
        ];
    }));
};
/**
 * Evaluate whether a market NFT is in a users wallet, their profile picture, or on sale
 * @param tokenId string
 * @param tokenIdsInWallet array of tokenIds in wallet
 * @param tokenIdsForSale array of tokenIds on sale
 * @param profileNftId Optional tokenId of users' profile picture
 * @returns NftLocation enum value
 */ const getNftLocationForMarketNft = (tokenId, tokenIdsInWallet, tokenIdsForSale, profileNftId)=>{
    if (tokenId === profileNftId) {
        return types/* NftLocation.PROFILE */.Fb.PROFILE;
    }
    if (tokenIdsForSale.includes(tokenId)) {
        return types/* NftLocation.FORSALE */.Fb.FORSALE;
    }
    if (tokenIdsInWallet.includes(tokenId)) {
        return types/* NftLocation.WALLET */.Fb.WALLET;
    }
    console.error(`Cannot determine location for tokenID ${tokenId}, defaulting to NftLocation.WALLET`);
    return types/* NftLocation.WALLET */.Fb.WALLET;
};
/**
 * Construct complete TokenMarketData entities with a users' wallet NFT ids and market data for their wallet NFTs
 * @param walletNfts TokenIdWithCollectionAddress
 * @param marketDataForWalletNfts TokenMarketData[]
 * @returns TokenMarketData[]
 */ const attachMarketDataToWalletNfts = (walletNfts, marketDataForWalletNfts)=>{
    const walletNftsWithMarketData = walletNfts.map((walletNft)=>{
        const marketData = marketDataForWalletNfts.find((marketNft)=>marketNft.tokenId === walletNft.tokenId && marketNft.collection.id.toLowerCase() === walletNft.collectionAddress.toLowerCase());
        return marketData ?? {
            tokenId: walletNft.tokenId,
            collection: {
                id: walletNft.collectionAddress.toLowerCase()
            },
            nftLocation: walletNft.nftLocation,
            metadataUrl: null,
            transactionHistory: null,
            currentSeller: null,
            isTradable: null,
            currentAskPrice: null,
            latestTradedPriceInBNB: null,
            tradeVolumeBNB: null,
            totalTrades: null,
            otherId: null
        };
    });
    return walletNftsWithMarketData;
};
/**
 * Attach TokenMarketData and location to NftToken
 * @param nftsWithMetadata NftToken[] with API metadata
 * @param nftsForSale  market data for nfts that are on sale (i.e. not in a user's wallet)
 * @param walletNfts market data for nfts in a user's wallet
 * @param tokenIdsInWallet array of token ids in user's wallet
 * @param tokenIdsForSale array of token ids of nfts that are on sale
 * @param profileNftId profile picture token id
 * @returns NFT[]
 */ const combineNftMarketAndMetadata = (nftsWithMetadata, nftsForSale, walletNfts, tokenIdsInWallet, tokenIdsForSale, profileNftId)=>{
    const completeNftData = nftsWithMetadata.map((nft)=>{
        // Get metadata object
        let marketData = nftsForSale.find((forSaleNft)=>forSaleNft.tokenId === nft.tokenId && forSaleNft.collection && forSaleNft.collection.id === nft.collectionAddress);
        if (!marketData) {
            marketData = walletNfts.find((marketNft)=>marketNft.collection && marketNft.collection.id === nft.collectionAddress && marketNft.tokenId === nft.tokenId);
        }
        const location = getNftLocationForMarketNft(nft.tokenId, tokenIdsInWallet, tokenIdsForSale, profileNftId);
        return {
            ...nft,
            marketData,
            location
        };
    });
    return completeNftData;
};
const fetchWalletMarketData = async (walletNftsByCollection)=>{
    const walletMarketDataRequests = Object.entries(walletNftsByCollection).map(async ([collectionAddress, tokenIdsWithCollectionAddress])=>{
        const tokenIdIn = tokenIdsWithCollectionAddress.map((walletNft)=>walletNft.tokenId);
        const [nftsOnChainMarketData, nftsMarketData] = await Promise.all([
            getNftsOnChainMarketData(collectionAddress.toLowerCase(), tokenIdIn),
            getNftsMarketData({
                tokenId_in: tokenIdIn,
                collection: collectionAddress.toLowerCase()
            }), 
        ]);
        return tokenIdIn.map((tokenId)=>{
            const nftMarketData = nftsMarketData.find((tokenMarketData)=>tokenMarketData.tokenId === tokenId);
            const onChainMarketData = nftsOnChainMarketData.find((onChainTokenMarketData)=>onChainTokenMarketData.tokenId === tokenId);
            if (!nftMarketData && !onChainMarketData) return null;
            return {
                ...nftMarketData,
                ...onChainMarketData
            };
        }).filter(Boolean);
    });
    const walletMarketDataResponses = await Promise.all(walletMarketDataRequests);
    return walletMarketDataResponses.flat();
};
/**
 * Get in-wallet, on-sale & profile pic NFT metadata, complete with market data for a given account
 * @param account
 * @param collections
 * @param profileNftWithCollectionAddress
 * @returns Promise<NftToken[]>
 */ const getCompleteAccountNftData = async (account, collections, profileNftWithCollectionAddress)=>{
    // Add delist collections to allow user reclaim their NFTs
    const collectionsWithDelist = {
        ...collections,
        ...delist/* default */.Z
    };
    const [walletNftIdsWithCollectionAddress, onChainForSaleNfts] = await Promise.all([
        fetchWalletTokenIdsForCollections(account, collectionsWithDelist),
        getAccountNftsOnChainMarketData(collectionsWithDelist, account), 
    ]);
    if (profileNftWithCollectionAddress?.tokenId) {
        walletNftIdsWithCollectionAddress.unshift(profileNftWithCollectionAddress);
    }
    const walletNftsByCollection = groupBy_default()(walletNftIdsWithCollectionAddress, (walletNftId)=>walletNftId.collectionAddress);
    const walletMarketData = await fetchWalletMarketData(walletNftsByCollection);
    const walletNftsWithMarketData = attachMarketDataToWalletNfts(walletNftIdsWithCollectionAddress, walletMarketData);
    const walletTokenIds = walletNftIdsWithCollectionAddress.filter((walletNft)=>{
        // Profile Pic NFT is no longer wanted in this array, hence the filter
        return profileNftWithCollectionAddress?.tokenId !== walletNft.tokenId;
    }).map((nft)=>nft.tokenId);
    const tokenIdsForSale = onChainForSaleNfts.map((nft)=>nft.tokenId);
    const forSaleNftIds = onChainForSaleNfts.map((nft)=>{
        return {
            collectionAddress: nft.collection.id,
            tokenId: nft.tokenId
        };
    });
    const metadataForAllNfts = await getNftsFromDifferentCollectionsApi([
        ...forSaleNftIds,
        ...walletNftIdsWithCollectionAddress, 
    ]);
    const completeNftData = combineNftMarketAndMetadata(metadataForAllNfts, onChainForSaleNfts, walletNftsWithMarketData, walletTokenIds, tokenIdsForSale, profileNftWithCollectionAddress?.tokenId);
    return completeNftData;
};
/**
 * Fetch distribution information for a collection
 * @returns
 */ const getCollectionDistributionApi = async (collectionAddress)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/distribution`);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    console.error(`API: Failed to fetch NFT collection ${collectionAddress} distribution`, res.statusText);
    return null;
};


/***/ }),

/***/ 88587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* binding */ NftLocation),
/* harmony export */   "YG": () => (/* binding */ MarketEvent),
/* harmony export */   "cP": () => (/* binding */ AskOrderType)
/* harmony export */ });
var AskOrderType;
(function(AskOrderType) {
    AskOrderType["NEW"] = "New";
    AskOrderType["MODIFY"] = "Modify";
    AskOrderType["CANCEL"] = "Cancel";
})(AskOrderType || (AskOrderType = {}));
var NftLocation;
(function(NftLocation) {
    NftLocation["FORSALE"] = "For Sale";
    NftLocation["PROFILE"] = "Profile Pic";
    NftLocation["WALLET"] = "In Wallet";
})(NftLocation || (NftLocation = {}));
var MarketEvent;
(function(MarketEvent) {
    MarketEvent["NEW"] = "NEW";
    MarketEvent["CANCEL"] = "CANCEL";
    MarketEvent["MODIFY"] = "MODIFY";
    MarketEvent["BUY"] = "BUY";
    MarketEvent["SELL"] = "SELL";
})(MarketEvent || (MarketEvent = {}));


/***/ }),

/***/ 66325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getProfile)
/* harmony export */ });
/* unused harmony export getUsername */
/* harmony import */ var config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92335);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10494);
/* harmony import */ var state_teams_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98521);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46737);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25152);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);






const transformProfileResponse = (profileResponse)=>{
    const { 0: userId , 1: numberPoints , 2: teamId , 3: collectionAddress , 4: tokenId , 5: isActive  } = profileResponse;
    return {
        userId: userId.toNumber(),
        points: numberPoints.toNumber(),
        teamId: teamId.toNumber(),
        tokenId: tokenId.toNumber(),
        collectionAddress,
        isActive
    };
};
const getUsername = async (address)=>{
    try {
        const response = await fetch(`${config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_PROFILE */ .dm}/api/users/${address.toLowerCase()}`);
        if (!response.ok) {
            return "";
        }
        const { username =""  } = await response.json();
        return username;
    } catch (error) {
        return "";
    }
};
const getProfile = async (address)=>{
    try {
        const profileCalls = [
            "hasRegistered",
            "getUserProfile"
        ].map((method)=>{
            return {
                address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(),
                name: method,
                params: [
                    address
                ]
            };
        });
        const profileCallsResult = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
            abi: config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_0__,
            calls: profileCalls,
            options: {
                requireSuccess: false
            }
        });
        const [[hasRegistered], profileResponse] = profileCallsResult;
        if (!hasRegistered) {
            return {
                hasRegistered,
                profile: null
            };
        }
        const { userId , points , teamId , tokenId , collectionAddress , isActive  } = transformProfileResponse(profileResponse);
        const [team, username, nftRes] = await Promise.all([
            (0,state_teams_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getTeam */ .V)(teamId),
            getUsername(address),
            isActive ? (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftApi */ .hb)(collectionAddress, tokenId.toString()) : Promise.resolve(null), 
        ]);
        let nftToken;
        // If the profile is not active the tokenId returns 0, which is still a valid token id
        // so only fetch the nft data if active
        if (nftRes) {
            nftToken = {
                tokenId: nftRes.tokenId,
                name: nftRes.name,
                collectionName: nftRes.collection.name,
                collectionAddress,
                description: nftRes.description,
                attributes: nftRes.attributes,
                createdAt: nftRes.createdAt,
                updatedAt: nftRes.updatedAt,
                image: {
                    original: nftRes.image?.original,
                    thumbnail: nftRes.image?.thumbnail
                }
            };
        }
        const profile = {
            userId,
            points,
            teamId,
            tokenId,
            username,
            collectionAddress,
            isActive,
            nft: nftToken,
            team
        };
        return {
            hasRegistered,
            profile
        };
    } catch (e) {
        console.error(e);
        return null;
    }
};


/***/ }),

/***/ 46775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ useAchievementsForAddress),
/* harmony export */   "Un": () => (/* binding */ useProfile),
/* harmony export */   "lC": () => (/* binding */ useProfileForAddress)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9270);
/* harmony import */ var state_achievements_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95519);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30433);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79847);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_3__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_3__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useProfileForAddress = (address, fetchConfiguration = {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
})=>{
    const { data , status , mutate , isValidating  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(address ? [
        address,
        "profile"
    ] : null, ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getProfile */ .A)(address), fetchConfiguration);
    const { profile  } = data ?? {
        profile: null
    };
    return {
        profile,
        isFetching: status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetching */ .iF.Fetching,
        isValidating,
        refresh: mutate
    };
};
const useAchievementsForAddress = (address)=>{
    const { data , status , mutate  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(address ? [
        address,
        "achievements"
    ] : null, ()=>(0,state_achievements_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getAchievements */ .j)(address));
    return {
        achievements: data || [],
        isFetching: status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetching */ .iF.Fetching,
        refresh: mutate
    };
};
const useProfile = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { data , status , mutate  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(account ? [
        account,
        "profile"
    ] : null, ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getProfile */ .A)(account), {
        use: [
            hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__/* .localStorageMiddleware */ .PI
        ]
    });
    const { profile , hasRegistered  } = data ?? {
        profile: null,
        hasRegistered: false
    };
    const isLoading = status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetching */ .iF.Fetching;
    const isInitialized = status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched || status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Failed */ .iF.Failed;
    const hasProfile = isInitialized && hasRegistered;
    const hasActiveProfile = hasProfile && profile?.isActive;
    return {
        profile,
        hasProfile,
        hasActiveProfile,
        isInitialized,
        isLoading,
        refresh: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getTeams),
/* harmony export */   "V": () => (/* binding */ getTeam)
/* harmony export */ });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_teams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47296);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12895);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25152);
/* harmony import */ var config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92335);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6__);







const profileContract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getProfileContract */ .Y4)();
const getTeam = async (teamId)=>{
    try {
        const { 0: teamName , 2: numberUsers , 3: numberPoints , 4: isJoinable  } = await profileContract.getTeamProfile(teamId);
        const staticTeamInfo = config_constants_teams__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find((staticTeam)=>staticTeam.id === teamId);
        return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, staticTeamInfo, {
            isJoinable,
            name: teamName,
            users: numberUsers.toNumber(),
            points: numberPoints.toNumber()
        });
    } catch (error) {
        return null;
    }
};
/**
 * Gets on-chain data and merges it with the existing static list of teams
 */ const getTeams = async ()=>{
    try {
        const teamsById = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6___default()(config_constants_teams__WEBPACK_IMPORTED_MODULE_1__/* ["default"].map */ .Z.map((team)=>[
                team.id,
                team
            ]));
        const nbTeams = await profileContract.numberTeams();
        const calls = [];
        for(let i = 1; i <= nbTeams.toNumber(); i++){
            calls.push({
                address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(),
                name: "getTeamProfile",
                params: [
                    i
                ]
            });
        }
        const teamData = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_3__/* .multicallv2 */ .v)({
            abi: config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_4__,
            calls
        });
        const onChainTeamData = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_6___default()(teamData.map((team, index)=>{
            const { 0: teamName , 2: numberUsers , 3: numberPoints , 4: isJoinable  } = team;
            return [
                index + 1,
                {
                    name: teamName,
                    users: numberUsers.toNumber(),
                    points: numberPoints.toNumber(),
                    isJoinable
                }, 
            ];
        }));
        return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, teamsById, onChainTeamData);
    } catch (error) {
        return null;
    }
};


/***/ }),

/***/ 67624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* binding */ getAchievementDescription),
/* harmony export */   "Cl": () => (/* binding */ getClaimableIfoData),
/* harmony export */   "hi": () => (/* binding */ getAchievementTitle)
/* harmony export */ });
/* harmony import */ var config_constants_ifo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87840);
/* harmony import */ var config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69820);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25152);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70627);
/* harmony import */ var config_abi_pointCenterIfo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58750);





const getAchievementTitle = (campaign)=>{
    switch(campaign.type){
        case "ifo":
            return {
                key: "IFO Shopper: %title%",
                data: {
                    title: campaign.title
                }
            };
        default:
            return campaign.title;
    }
};
const getAchievementDescription = (campaign)=>{
    switch(campaign.type){
        case "ifo":
            return {
                key: "Committed more than $5 in the %title% IFO",
                data: {
                    title: campaign.title
                }
            };
        default:
            return campaign.description;
    }
};
/**
 * Checks if a wallet is eligible to claim points from valid IFO's
 */ const getClaimableIfoData = async (account)=>{
    const ifoCampaigns = config_constants_ifo__WEBPACK_IMPORTED_MODULE_0__/* ["default"].filter */ .Z.filter((ifoItem)=>ifoItem.campaignId !== undefined);
    // Returns the claim status of every IFO with a campaign ID
    const claimStatusCalls = ifoCampaigns.map(({ address  })=>{
        return {
            address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getPointCenterIfoAddress */ .Cf)(),
            name: "checkClaimStatus",
            params: [
                account,
                address
            ]
        };
    });
    const claimStatuses = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_2__/* .multicallv2 */ .v)({
        abi: config_abi_pointCenterIfo_json__WEBPACK_IMPORTED_MODULE_4__,
        calls: claimStatusCalls,
        options: {
            requireSuccess: false
        }
    });
    // Get IFO data for all IFO's that are eligible to claim
    const claimableIfoData = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_2__/* .multicallv2 */ .v)({
        abi: config_abi_pointCenterIfo_json__WEBPACK_IMPORTED_MODULE_4__,
        calls: claimStatuses.reduce((accum, claimStatusArr, index)=>{
            if (claimStatusArr === null) {
                return accum;
            }
            const [claimStatus] = claimStatusArr;
            if (claimStatus === true) {
                return [
                    ...accum,
                    {
                        address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getPointCenterIfoAddress */ .Cf)(),
                        name: "ifos",
                        params: [
                            ifoCampaigns[index].address
                        ]
                    }
                ];
            }
            return accum;
        }, [])
    });
    // Transform response to an Achievement
    return claimableIfoData.reduce((accum, claimableIfoDataItem)=>{
        const claimableCampaignId = claimableIfoDataItem.campaignId.toString();
        if (!config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.has */ .T.has(claimableCampaignId)) {
            return accum;
        }
        const campaignMeta = config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.get */ .T.get(claimableCampaignId);
        const { address  } = ifoCampaigns.find((ifoCampaign)=>ifoCampaign.campaignId === claimableCampaignId);
        return [
            ...accum,
            {
                address,
                id: claimableCampaignId,
                type: "ifo",
                title: getAchievementTitle(campaignMeta),
                description: getAchievementDescription(campaignMeta),
                badge: campaignMeta.badge,
                points: claimableIfoDataItem.numberPoints.toNumber()
            }, 
        ];
    }, []);
};


/***/ }),

/***/ 10037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ DAY_IN_SECONDS)
/* harmony export */ });
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = 3600;
const DAY_IN_SECONDS = 86400;
const MONTH_IN_SECONDS = 2629800;
const YEAR_IN_SECONDS = 31557600;
/**
 * Format number of seconds into year, month, day, hour, minute, seconds
 *
 * @param seconds
 */ const getTimePeriods = (seconds)=>{
    let delta = Math.abs(seconds);
    const timeLeft = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    if (delta >= YEAR_IN_SECONDS) {
        timeLeft.years = Math.floor(delta / YEAR_IN_SECONDS);
        delta -= timeLeft.years * YEAR_IN_SECONDS;
    }
    if (delta >= MONTH_IN_SECONDS) {
        timeLeft.months = Math.floor(delta / MONTH_IN_SECONDS);
        delta -= timeLeft.months * MONTH_IN_SECONDS;
    }
    if (delta >= DAY_IN_SECONDS) {
        timeLeft.days = Math.floor(delta / DAY_IN_SECONDS);
        delta -= timeLeft.days * DAY_IN_SECONDS;
    }
    if (delta >= HOUR_IN_SECONDS) {
        timeLeft.hours = Math.floor(delta / HOUR_IN_SECONDS);
        delta -= timeLeft.hours * HOUR_IN_SECONDS;
    }
    if (delta >= MINUTE_IN_SECONDS) {
        timeLeft.minutes = Math.floor(delta / MINUTE_IN_SECONDS);
        delta -= timeLeft.minutes * MINUTE_IN_SECONDS;
    }
    timeLeft.seconds = delta;
    return timeLeft;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTimePeriods);


/***/ }),

/***/ 40907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "At": () => (/* binding */ distanceToNowStrict),
/* harmony export */   "Ch": () => (/* binding */ secondsToDay),
/* harmony export */   "Eg": () => (/* binding */ convertTimeToSeconds),
/* harmony export */   "rE": () => (/* binding */ distanceToNowStrictWithUnit)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

const secondsToDay = (s)=>Math.floor(s / (24 * 60 * 60));
const convertTimeToSeconds = (time)=>{
    return parseInt(time) * 1000;
};
// https://date-fns.org/v2.28.0/docs/formatDistanceToNowStrict
const distanceToNowStrict = (timeInMilliSeconds)=>{
    const endTime = new Date(timeInMilliSeconds);
    return new Date() > endTime || !Number.isFinite(timeInMilliSeconds) ? `0 seconds` : (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistanceToNowStrict)(endTime, {
        unit: "day"
    });
};
const distanceToNowStrictWithUnit = (timeInMilliSeconds, unit)=>{
    const endTime = new Date(timeInMilliSeconds);
    return new Date() > endTime || !Number.isFinite(timeInMilliSeconds) ? `0 seconds` : (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistanceToNowStrict)(endTime, {
        unit
    });
};


/***/ }),

/***/ 54319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ canRegisterToken)
/* harmony export */ });
/* unused harmony export registerToken */
/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Logo_Logo__WEBPACK_IMPORTED_MODULE_0__]);
components_Logo_Logo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Set of helper functions to facilitate wallet setup

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */ const registerToken = async (tokenAddress, tokenSymbol, tokenDecimals, tokenLogo)=>{
    // better leave this undefined for default image instead of broken image url
    const image = tokenLogo ? BAD_SRCS[tokenLogo] ? undefined : tokenLogo : undefined;
    const tokenAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
            type: "ERC20",
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image
            }
        }
    });
    return tokenAdded;
};
const canRegisterToken = ()=> false && (0);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ pancakeBunniesAddress),
/* harmony export */   "V": () => (/* binding */ nftsBaseUrl)
/* harmony export */ });
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70627);

const nftsBaseUrl = "/nfts";
const pancakeBunniesAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_0__/* .getPancakeBunniesAddress */ .GI)();


/***/ }),

/***/ 97421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2892);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67891);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85576);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73486);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26488);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state_block_hooks__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, state_block_hooks__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const AprLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-64c53709-0"
})`
  &:hover {
    opacity: 0.5;
  }
`;
const Apr = ({ pool , showIcon , stakedBalance , fontSize ="16px" , performanceFee =0 , ...props })=>{
    const { stakingToken , earningToken , isFinished , earningTokenPrice , stakingTokenPrice , userData , apr , rawApr , vaultKey ,  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { account  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentBlock */ .je)();
    const { shouldShowBlockCountdown , hasPoolStarted  } = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getPoolBlockInfo */ .zy)(pool, currentBlock);
    const stakingTokenBalance = userData?.stakingTokenBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(userData.stakingTokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_5__/* .BIG_ZERO */ .HW;
    const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : "/swap";
    const [onPresentApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        account: account,
        earningTokenPrice: earningTokenPrice,
        stakingTokenPrice: stakingTokenPrice,
        stakingTokenBalance: stakedBalance.plus(stakingTokenBalance),
        apr: vaultKey ? rawApr : apr,
        stakingTokenSymbol: stakingToken.symbol,
        linkLabel: t("Get %symbol%", {
            symbol: stakingToken.symbol
        }),
        linkHref: apyModalLink,
        earningTokenSymbol: earningToken.symbol,
        autoCompoundFrequency: config_constants_pools__WEBPACK_IMPORTED_MODULE_6__/* .vaultPoolConfig */ .Y4[vaultKey]?.autoCompoundFrequency ?? 0,
        performanceFee: performanceFee
    }));
    const openRoiModal = (event)=>{
        event.stopPropagation();
        onPresentApyModal();
    };
    const isValidate = apr !== undefined && !Number.isNaN(apr);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AprLabelContainer, {
        alignItems: "center",
        justifyContent: "flex-start",
        ...props,
        children: isValidate || isFinished ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: hasPoolStarted || !shouldShowBlockCountdown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        onClick: (event)=>{
                            if (!showIcon) return;
                            openRoiModal(event);
                        },
                        fontSize: fontSize,
                        isDisabled: isFinished,
                        value: isFinished ? 0 : apr,
                        decimals: 2,
                        unit: "%"
                    }),
                    !isFinished && showIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        onClick: openRoiModal,
                        variant: "text",
                        width: "20px",
                        height: "20px",
                        padding: "0px",
                        marginLeft: "4px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            width: "20px"
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                children: "-"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            width: "80px",
            height: "16px"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apr);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93638);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AutoEarningsBreakdown = ({ pool , account  })=>{
    const { t , currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { earningTokenPrice  } = pool;
    const { pricePerFullShare , userData  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { autoCakeToDisplay , autoUsdToDisplay  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCakeVaultEarnings */ .UN)(account, userData.cakeAtLastUserAction, userData.userShares, pricePerFullShare, earningTokenPrice, pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_4__/* .VaultKey.CakeVault */ .om.CakeVault ? userData.currentPerformanceFee.plus(userData.currentOverdueFee).plus(userData.userBoostedShare) : null);
    const lastActionInMs = userData.lastUserActionTime ? parseInt(userData.lastUserActionTime) * 1000 : 0;
    const hourDiffSinceLastAction = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInHours)(Date.now(), lastActionInMs);
    const earnedCakePerHour = hourDiffSinceLastAction ? autoCakeToDisplay / hourDiffSinceLastAction : 0;
    const earnedUsdPerHour = hourDiffSinceLastAction ? autoUsdToDisplay / hourDiffSinceLastAction : 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: [
                    t("Earned since your last action"),
                    ":"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                bold: true,
                children: new Date(lastActionInMs).toLocaleString(locale, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                })
            }),
            hourDiffSinceLastAction ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                mt: "12px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: [
                            t("Hourly Average"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        bold: true,
                        children: [
                            earnedCakePerHour < 0.01 ? "<0.01" : earnedCakePerHour.toFixed(2),
                            " CAKE",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                display: "inline-block",
                                ml: "5px",
                                children: [
                                    "(",
                                    earnedUsdPerHour < 0.01 ? "<0.01" : `~${earnedUsdPerHour.toFixed(2)}`,
                                    " USD)"
                                ]
                            })
                        ]
                    })
                ]
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoEarningsBreakdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11496);
/* harmony import */ var utils_timeHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40907);
/* harmony import */ var _hooks_useWithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41551);
/* harmony import */ var _UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, _UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, _UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const FeeSummary = ({ stakingTokenSymbol , stakeAmount , vaultKey ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { fees: { withdrawalFee , withdrawalFeePeriod  } , userData: { lastDepositedTime  } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const feeAsDecimal = withdrawalFee / 100;
    const feeInCake = (parseFloat(stakeAmount) * (feeAsDecimal / 100)).toFixed(4);
    const withdrawalDayPeriod = withdrawalFeePeriod ? (0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_3__/* .secondsToDay */ .Ch)(withdrawalFeePeriod) : "-";
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                bold: true,
                mb: "4px",
                children: t("Unstaking fee: %fee%%", {
                    fee: feeAsDecimal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: t("Only applies within %num% days of staking. Unstaking after %num% days will not include a fee. Timer resets every time you stake new CAKE in the pool.", {
                    num: withdrawalDayPeriod
                })
            })
        ]
    }), {
        placement: "top-start"
    });
    const hasFeeToPay = lastDepositedTime && (0,_hooks_useWithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_4__/* .getHasWithdrawFee */ .D)(parseInt(lastDepositedTime, 10), withdrawalFeePeriod);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                mt: "24px",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    tooltipVisible && tooltip,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        ref: targetRef,
                        small: true,
                        children: t("Unstaking Fee")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontSize: "14px",
                        children: [
                            stakeAmount && hasFeeToPay ? feeInCake : "-",
                            " ",
                            stakingTokenSymbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                vaultKey: vaultKey
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeeSummary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var views_Pools_hooks_useWithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41551);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11496);
/* harmony import */ var utils_timeHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40907);
/* harmony import */ var _WithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__, _WithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__, _WithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const UnstakingFeeCountdownRow = ({ isTableVariant , vaultKey ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { userData: { lastDepositedTime , userShares  } , fees: { withdrawalFee , withdrawalFeePeriod  } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const feeAsDecimal = withdrawalFee / 100 || "-";
    const withdrawalDayPeriod = withdrawalFeePeriod ? (0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_6__/* .secondsToDay */ .Ch)(withdrawalFeePeriod) : "-";
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                bold: true,
                mb: "4px",
                children: t("Unstaking fee: %fee%%", {
                    fee: feeAsDecimal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: t("Only applies within %num% days of staking. Unstaking after %num% days will not include a fee. Timer resets every time you stake new CAKE in the pool.", {
                    num: withdrawalDayPeriod
                })
            })
        ]
    }), {
        placement: "bottom-start"
    });
    const { secondsRemaining , hasUnstakingFee  } = (0,views_Pools_hooks_useWithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(parseInt(lastDepositedTime, 10), userShares, withdrawalFeePeriod);
    // The user has made a deposit, but has no fee
    const noFeeToPay = lastDepositedTime && !hasUnstakingFee && userShares.gt(0);
    // Show the timer if a user is connected, has deposited, and has an unstaking fee
    const shouldShowTimer = account && lastDepositedTime && hasUnstakingFee;
    const withdrawalFeePeriodHour = withdrawalFeePeriod ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.secondsToHours)(withdrawalFeePeriod) : "-";
    const getRowText = ()=>{
        if (noFeeToPay) {
            return t("Unstaking Fee");
        }
        if (shouldShowTimer) {
            return t("unstaking fee before");
        }
        return t("unstaking fee if withdrawn within %num%h", {
            num: withdrawalFeePeriodHour
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        alignItems: isTableVariant ? "flex-start" : "center",
        justifyContent: "space-between",
        flexDirection: isTableVariant ? "column" : "row",
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                ref: targetRef,
                small: true,
                textTransform: "lowercase",
                children: [
                    noFeeToPay ? "0" : feeAsDecimal,
                    "% ",
                    getRowText()
                ]
            }),
            shouldShowTimer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                secondsRemaining: secondsRemaining
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnstakingFeeCountdownRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83115:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(84373);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(21762);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(67891);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36204);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11496);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53887);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74860);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19081);
/* harmony import */ var views_Pools_hooks_useWithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41551);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24671);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78950);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34376);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93638);
/* harmony import */ var _pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90712);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36576);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73486);
/* harmony import */ var _pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38766);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80361);
/* harmony import */ var _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18666);
/* harmony import */ var _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85074);
/* harmony import */ var _FeeSummary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51408);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_5__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_8__, hooks_useContract__WEBPACK_IMPORTED_MODULE_9__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_10__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_14__, state_pools__WEBPACK_IMPORTED_MODULE_15__, components_Toast__WEBPACK_IMPORTED_MODULE_17__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_21__, _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_22__, _FeeSummary__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, state__WEBPACK_IMPORTED_MODULE_5__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_8__, hooks_useContract__WEBPACK_IMPORTED_MODULE_9__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_10__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_14__, state_pools__WEBPACK_IMPORTED_MODULE_15__, components_Toast__WEBPACK_IMPORTED_MODULE_17__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_21__, _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_22__, _FeeSummary__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4a880e2d-0"
})`
  flex-grow: 1;
`;
const AnnualRoiContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4a880e2d-1"
})`
  cursor: pointer;
`;
const AnnualRoiDisplay = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4a880e2d-2"
})`
  width: 72px;
  max-width: 72px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
`;
const VaultStakeModal = ({ pool , stakingMax , performanceFee , isRemovingStake =false , onDismiss ,  })=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .TL)();
    const { stakingToken , earningTokenPrice , vaultKey  } = pool;
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const vaultPoolContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_9__/* .useVaultPoolContract */ .Ak)(pool.vaultKey);
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_20__/* .useCallWithMarketGasPrice */ .r)();
    const { pricePerFullShare , userData: { lastDepositedTime , userShares , balance: { cakeAsBigNumber , cakeAsNumberBalance  } ,  } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* .useToast */ .p)();
    const { 0: stakeAmount , 1: setStakeAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: percent , 1: setPercent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: showRoiCalculator , 1: setShowRoiCalculator  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { hasUnstakingFee  } = (0,views_Pools_hooks_useWithdrawalFeeTimer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(parseInt(lastDepositedTime, 10), userShares);
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePriceCakeBusd */ .Iu)();
    const usdValueStaked = new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(stakeAmount).times(cakePriceBusd);
    const formattedUsdValueStaked = cakePriceBusd.gt(0) && stakeAmount ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_13__/* .formatNumber */ .uf)(usdValueStaked.toNumber()) : "";
    const { flexibleApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_8__/* .useVaultApy */ .o)();
    const callOptions = {
        gasLimit: config_constants_pools__WEBPACK_IMPORTED_MODULE_18__/* .vaultPoolConfig */ .Y4[pool.vaultKey].gasLimit
    };
    const interestBreakdown = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_29__/* .getInterestBreakdown */ .A1)({
        principalInUSD: !usdValueStaked.isNaN() ? usdValueStaked.toNumber() : 0,
        apr: +flexibleApy,
        earningTokenPrice,
        performanceFee,
        compoundFrequency: 0
    });
    const annualRoi = interestBreakdown[3] * pool.earningTokenPrice;
    const formattedAnnualRoi = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_13__/* .formatNumber */ .uf)(annualRoi, annualRoi > 10000 ? 0 : 2, annualRoi > 10000 ? 0 : 2);
    const getTokenLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : "/swap";
    const convertedStakeAmount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_13__/* .getDecimalAmount */ .Qe)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(stakeAmount), stakingToken.decimals);
    const handleStakeInputChange = (input)=>{
        if (input) {
            const convertedInput = new (bignumber_js__WEBPACK_IMPORTED_MODULE_12___default())(input).multipliedBy((0,_pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_19__/* .getFullDecimalMultiplier */ .t)(stakingToken.decimals));
            const percentage = Math.floor(convertedInput.dividedBy(stakingMax).multipliedBy(100).toNumber());
            setPercent(percentage > 100 ? 100 : percentage);
        } else {
            setPercent(0);
        }
        setStakeAmount(input);
    };
    const handleChangePercent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((sliderPercent)=>{
        if (sliderPercent > 0) {
            const percentageOfStakingMax = stakingMax.dividedBy(100).multipliedBy(sliderPercent);
            const amountToStake = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_13__/* .getFullDisplayBalance */ .NJ)(percentageOfStakingMax, stakingToken.decimals, stakingToken.decimals);
            setStakeAmount(amountToStake);
        } else {
            setStakeAmount("");
        }
        setPercent(sliderPercent);
    }, [
        stakingMax,
        stakingToken.decimals
    ]);
    const handleWithdrawal = async ()=>{
        // trigger withdrawAll function if the withdrawal will leave 0.00001 CAKE or less
        const isWithdrawingAll = stakingMax.minus(convertedStakeAmount).lte(_helpers__WEBPACK_IMPORTED_MODULE_24__/* .MIN_LOCK_AMOUNT */ .dF);
        const receipt = await fetchWithCatchTxError(()=>{
            // .toString() being called to fix a BigNumber error in prod
            // as suggested here https://github.com/ChainSafe/web3.js/issues/2077
            if (isWithdrawingAll) {
                return callWithMarketGasPrice(vaultPoolContract, "withdrawAll", undefined, callOptions);
            }
            if (pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_16__/* .VaultKey.CakeFlexibleSideVault */ .om.CakeFlexibleSideVault) {
                const { sharesAsBigNumber  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_24__/* .convertCakeToShares */ .CE)(convertedStakeAmount, pricePerFullShare);
                return callWithMarketGasPrice(vaultPoolContract, "withdraw", [
                    sharesAsBigNumber.toString()
                ], callOptions);
            }
            return callWithMarketGasPrice(vaultPoolContract, "withdrawByAmount", [
                convertedStakeAmount.toString()
            ], callOptions);
        });
        if (receipt?.status) {
            toastSuccess(t("Unstaked!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_17__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your earnings have also been harvested to your wallet")
            }));
            onDismiss?.();
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_15__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
        }
    };
    const handleDeposit = async (lockDuration = 0)=>{
        const receipt = await fetchWithCatchTxError(()=>{
            // .toString() being called to fix a BigNumber error in prod
            // as suggested here https://github.com/ChainSafe/web3.js/issues/2077
            const extraArgs = pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_16__/* .VaultKey.CakeVault */ .om.CakeVault ? [
                lockDuration.toString()
            ] : [];
            const methodArgs = [
                convertedStakeAmount.toString(),
                ...extraArgs
            ];
            return callWithMarketGasPrice(vaultPoolContract, "deposit", methodArgs, callOptions);
        });
        if (receipt?.status) {
            toastSuccess(t("Staked!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_17__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your funds have been staked in the pool")
            }));
            onDismiss?.();
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_15__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
        }
    };
    const handleConfirmClick = async ()=>{
        if (isRemovingStake) {
            // unstaking
            handleWithdrawal();
        } else {
            // staking
            handleDeposit();
        }
    };
    if (showRoiCalculator) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_21__/* .VaultRoiCalculatorModal */ .E, {
            pool: pool,
            linkLabel: t("Get %symbol%", {
                symbol: stakingToken.symbol
            }),
            linkHref: getTokenLink,
            stakingTokenBalance: cakeAsBigNumber.plus(stakingMax),
            onBack: ()=>setShowRoiCalculator(false),
            initialValue: stakeAmount,
            performanceFee: performanceFee
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP, {
        title: isRemovingStake ? t("Unstake") : t("Stake in Pool"),
        onDismiss: onDismiss,
        headerBackground: theme.colors.gradientCardHeader,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "8px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                        bold: true,
                        children: [
                            isRemovingStake ? t("Unstake") : t("Stake"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        alignItems: "center",
                        minWidth: "70px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                src: `/images/tokens/${stakingToken.address}.png`,
                                width: 24,
                                height: 24,
                                alt: stakingToken.symbol
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                ml: "4px",
                                bold: true,
                                children: stakingToken.symbol
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                value: stakeAmount,
                onUserInput: handleStakeInputChange,
                currencyValue: cakePriceBusd.gt(0) && `~${formattedUsdValueStaked || 0} USD`,
                decimals: stakingToken.decimals
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                mt: "8px",
                ml: "auto",
                color: "textSubtle",
                fontSize: "12px",
                mb: "8px",
                children: t("Balance: %balance%", {
                    balance: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_13__/* .getFullDisplayBalance */ .NJ)(stakingMax, stakingToken.decimals)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                min: 0,
                max: 100,
                value: percent,
                onValueChanged: handleChangePercent,
                name: "stake",
                valueLabel: `${percent}%`,
                step: 1
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mt: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(25),
                        children: "25%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(50),
                        children: "50%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(75),
                        children: "75%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(100),
                        children: t("Max")
                    })
                ]
            }),
            isRemovingStake && hasUnstakingFee && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FeeSummary__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                vaultKey: vaultKey,
                stakingTokenSymbol: stakingToken.symbol,
                stakeAmount: stakeAmount
            }),
            !isRemovingStake && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                mt: "24px",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                        mr: "8px",
                        color: "textSubtle",
                        children: [
                            t("Annual ROI at current rates"),
                            ":"
                        ]
                    }),
                    Number.isFinite(annualRoi) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnnualRoiContainer, {
                        alignItems: "center",
                        onClick: ()=>{
                            setShowRoiCalculator(true);
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnnualRoiDisplay, {
                                children: [
                                    "$",
                                    formattedAnnualRoi
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                variant: "text",
                                scale: "sm",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                    color: "textSubtle",
                                    width: "18px"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                        width: 60
                    })
                ]
            }),
            pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_16__/* .VaultKey.CakeVault */ .om.CakeVault && cakeAsNumberBalance ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                mt: "8px",
                maxWidth: "370px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    stakingToken: stakingToken,
                    currentStakedAmount: cakeAsNumberBalance
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                isLoading: pendingTx,
                endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                    spin: true,
                    color: "currentColor"
                }) : null,
                onClick: handleConfirmClick,
                disabled: !stakeAmount || parseFloat(stakeAmount) === 0 || stakingMax.lt(convertedStakeAmount),
                mt: "24px",
                children: pendingTx ? t("Confirming") : t("Confirm")
            }),
            !isRemovingStake && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                mt: "8px",
                as: "a",
                external: true,
                href: getTokenLink,
                variant: "secondary",
                children: t("Get %symbol%", {
                    symbol: stakingToken.symbol
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VaultStakeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10037);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);




const WithdrawalFeeTimer = ({ secondsRemaining  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { days , hours , minutes  } = (0,utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(secondsRemaining);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        bold: true,
        fontSize: "14px",
        children: t("%day%d:%hour%h:%minute%m", {
            day: days,
            hour: hours,
            minute: minutes
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithdrawalFeeTimer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11496);
/* harmony import */ var _Modals_AddAmountModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10189);
/* harmony import */ var _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _Modals_AddAmountModal__WEBPACK_IMPORTED_MODULE_4__, _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _Modals_AddAmountModal__WEBPACK_IMPORTED_MODULE_4__, _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AddCakeButton = ({ currentBalance , stakingToken , currentLockedAmount , lockEndTime , lockStartTime , stakingTokenBalance ,  })=>{
    const { pool: { userDataLoaded  } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePool */ .AI)(0);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const [openAddAmountModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_AddAmountModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        currentLockedAmount: currentLockedAmount,
        currentBalance: currentBalance,
        stakingToken: stakingToken,
        lockStartTime: lockStartTime,
        lockEndTime: lockEndTime,
        stakingTokenBalance: stakingTokenBalance
    }), true, true, "AddAmountModal");
    const [onPresentTokenRequired] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        tokenSymbol: stakingToken.symbol
    }));
    const handleClicked = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return currentBalance.gt(0) ? openAddAmountModal() : onPresentTokenRequired();
    }, [
        currentBalance,
        openAddAmountModal,
        onPresentTokenRequired
    ]);
    return userDataLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        onClick: handleClicked,
        width: "100%",
        style: {
            whiteSpace: "nowrap",
            paddingLeft: 0,
            paddingRight: 0
        },
        children: t("Add CAKE")
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        height: 48
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AddCakeButton));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67891);
/* harmony import */ var _Modals_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3518);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modals_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_2__]);
_Modals_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CalculatorButton = ()=>{
    const setShowRoiCalculator = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Modals_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_2__/* .RoiCalculatorModalContext */ .G);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "text",
        scale: "sm",
        mr: "-8px",
        onClick: ()=>setShowRoiCalculator && setShowRoiCalculator(true),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            color: "textSubtle",
            width: "18px"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36576);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73486);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80361);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74860);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36204);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34376);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__, hooks_useContract__WEBPACK_IMPORTED_MODULE_8__, state__WEBPACK_IMPORTED_MODULE_9__, state_pools__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__, hooks_useContract__WEBPACK_IMPORTED_MODULE_8__, state__WEBPACK_IMPORTED_MODULE_9__, state_pools__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ConvertToFlexibleButton = (props)=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .TL)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const vaultPoolContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_8__/* .useVaultPoolContract */ .Ak)(state_types__WEBPACK_IMPORTED_MODULE_11__/* .VaultKey.CakeVault */ .om.CakeVault);
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_6__/* .useCallWithMarketGasPrice */ .r)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* .useToast */ .p)();
    const handleUnlock = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const callOptions = {
            gasLimit: config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .vaultPoolConfig */ .Y4[state_types__WEBPACK_IMPORTED_MODULE_11__/* .VaultKey.CakeVault */ .om.CakeVault].gasLimit
        };
        const receipt = await fetchWithCatchTxError(()=>{
            const methodArgs = [
                account
            ];
            return callWithMarketGasPrice(vaultPoolContract, "unlock", methodArgs, callOptions);
        });
        if (receipt?.status) {
            toastSuccess(t("Staked!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your funds have been staked in the pool")
            }));
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
        }
    }, [
        t,
        toastSuccess,
        account,
        callWithMarketGasPrice,
        dispatch,
        fetchWithCatchTxError,
        vaultPoolContract
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        width: "100%",
        disabled: pendingTx,
        onClick: handleUnlock,
        variant: "secondary",
        ...props,
        children: pendingTx ? t("Converting...") : t("Convert to Flexible")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(ConvertToFlexibleButton));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73486);
/* harmony import */ var _Modals_ExtendDurationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modals_ExtendDurationModal__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_Modals_ExtendDurationModal__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ExtendDurationButton = ({ modalTitle , stakingToken , currentLockedAmount , currentBalance , lockEndTime , lockStartTime , children , ...rest })=>{
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const currentDuration = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Number(lockEndTime) - Number(lockStartTime), [
        lockEndTime,
        lockStartTime
    ]);
    const currentDurationLeft = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Math.max(Number(lockEndTime) - nowInSeconds, 0), [
        lockEndTime,
        nowInSeconds
    ]);
    const [openExtendDurationModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_ExtendDurationModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        modalTitle: modalTitle,
        stakingToken: stakingToken,
        lockStartTime: lockStartTime,
        currentBalance: currentBalance,
        currentLockedAmount: currentLockedAmount,
        currentDuration: currentDuration,
        currentDurationLeft: currentDurationLeft
    }), true, true, "ExtendDurationModal");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        disabled: Number.isFinite(currentDurationLeft) && config_constants_pools__WEBPACK_IMPORTED_MODULE_2__/* .MAX_LOCK_DURATION */ .VO - currentDurationLeft < config_constants_pools__WEBPACK_IMPORTED_MODULE_2__/* .ONE_WEEK_DEFAULT */ .kp,
        onClick: openExtendDurationModal,
        width: "100%",
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtendDurationButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var components_Trans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60471);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27240);
/* harmony import */ var _Buttons_ConvertToFlexibleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94353);
/* harmony import */ var _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17464);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Buttons_ConvertToFlexibleButton__WEBPACK_IMPORTED_MODULE_5__, _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_Buttons_ConvertToFlexibleButton__WEBPACK_IMPORTED_MODULE_5__, _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const msg = {
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.None */ .PS.None]: null,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Flexible */ .PS.Flexible]: null,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Locked */ .PS.Locked]: null,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.LockedEnd */ .PS.LockedEnd]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: "The lock period has ended. Convert to flexible staking or renew your position to start a new lock staking."
    }),
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.AfterBurning */ .PS.AfterBurning]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: "The lock period has ended. To avoid more rewards being burned, convert to flexible staking or renew your position to start a new lock staking."
    })
};
const AfterLockedActions = ({ currentLockedAmount , stakingToken , position , isInline ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const isDesktopView = isInline && isDesktop;
    const Container = isDesktopView ? _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z : _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        variant: "warning",
        mb: "16px",
        action: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            mt: !isDesktopView && "8px",
            ml: "10px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    modalTitle: t("Renew"),
                    lockEndTime: "0",
                    lockStartTime: "0",
                    stakingToken: stakingToken,
                    currentLockedAmount: currentLockedAmount,
                    minWidth: "186px",
                    variant: "primary",
                    mr: isDesktopView && "14px",
                    mb: !isDesktopView && "8px",
                    children: t("Renew")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_ConvertToFlexibleButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    minWidth: isDesktopView && "200px"
                })
            ]
        }),
        actionInline: isDesktopView,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .MessageText */ .Y, {
            children: msg[position]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AfterLockedActions));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84373);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21762);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38766);
/* harmony import */ var _hooks_useUserEnoughCakeValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f9d76ea2-0"
})`
  flex-grow: 1;
`;
const BalanceField = ({ stakingAddress , stakingSymbol , stakingDecimals , lockedAmount , stakingMax , setLockedAmount , usedValueStaked , stakingTokenBalance ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { userNotEnoughCake , notEnoughErrorMessage  } = (0,_hooks_useUserEnoughCakeValidator__WEBPACK_IMPORTED_MODULE_7__/* .useUserEnoughCakeValidator */ .S)(lockedAmount, stakingTokenBalance);
    const percent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        const amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(lockedAmount);
        if (amount.gt(0)) {
            const convertedInput = amount.multipliedBy((0,_pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_6__/* .getFullDecimalMultiplier */ .t)(stakingDecimals));
            const percentage = Math.floor(convertedInput.dividedBy(stakingMax).multipliedBy(100).toNumber());
            return percentage > 100 ? 100 : percentage;
        }
        return 0;
    }, [
        lockedAmount,
        stakingDecimals,
        stakingMax
    ]);
    const handleStakeInputChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((input)=>{
        setLockedAmount(input);
    }, [
        setLockedAmount
    ]);
    const handleChangePercent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((sliderPercent)=>{
        if (sliderPercent > 0) {
            const percentageOfStakingMax = stakingMax.dividedBy(100).multipliedBy(sliderPercent);
            const amountToStake = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getFullDisplayBalance */ .NJ)(percentageOfStakingMax, stakingDecimals, stakingDecimals);
            setLockedAmount(amountToStake);
        } else {
            setLockedAmount("");
        }
    }, [
        stakingMax,
        setLockedAmount,
        stakingDecimals
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textTransform: "uppercase",
                        bold: true,
                        fontSize: "12px",
                        children: t("CAKE to lock")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        alignItems: "center",
                        minWidth: "70px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                src: `/images/tokens/${stakingAddress}.png`,
                                width: 24,
                                height: 24,
                                alt: stakingSymbol
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ml: "4px",
                                bold: true,
                                children: stakingSymbol
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                isWarning: userNotEnoughCake,
                value: lockedAmount,
                onUserInput: handleStakeInputChange,
                currencyValue: `~${usedValueStaked || 0} USD`,
                decimals: stakingDecimals
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "flex-end",
                mt: "4px",
                mb: "12px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    children: userNotEnoughCake && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "failure",
                        children: notEnoughErrorMessage
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                mt: "8px",
                textAlign: "end",
                color: "textSubtle",
                fontSize: "12px",
                mb: "8px",
                children: t("Balance: %balance%", {
                    balance: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getFullDisplayBalance */ .NJ)(stakingMax, stakingDecimals)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                min: 0,
                max: 100,
                value: percent,
                onValueChanged: handleChangePercent,
                name: "stake",
                valueLabel: `${percent}%`,
                step: 1
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mt: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(25),
                        children: "25%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(50),
                        children: "50%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(75),
                        children: "75%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: ()=>handleChangePercent(100),
                        children: t("Max")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(BalanceField));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65726);
/* harmony import */ var utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10037);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73486);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64150);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22789);
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_timeHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40907);








const BurningCountDown = ({ lockEndTime  })=>{
    const { 0: remainingSeconds , 1: setRemainingSeconds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // 1 week after lockEndTime
    const burnDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_4___default()((0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_6__/* .convertTimeToSeconds */ .Eg)(lockEndTime), config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .UNLOCK_FREE_DURATION */ .by), [
        lockEndTime
    ]);
    const updateRemainingSeconds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setRemainingSeconds(date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5___default()(burnDate, new Date()));
    }, [
        burnDate
    ]);
    // Update every minute
    (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useInterval */ .Yz)(updateRemainingSeconds, 1000 * 60);
    const { days , hours , minutes  } = (0,utils_getTimePeriods__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(remainingSeconds);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: `${days}d: ${hours}h: ${minutes}m`
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BurningCountDown));


/***/ }),

/***/ 85074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53887);
/* harmony import */ var _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17464);
/* harmony import */ var _hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ConvertToLock = ({ stakingToken , currentStakedAmount , isInline ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const isTableView = isInline && !isMobile;
    const { avgLockDurationsInSeconds  } = (0,_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { lockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__/* .useVaultApy */ .o)({
        duration: avgLockDurationsInSeconds
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        variant: "warning",
        action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            mt: !isTableView && "8px",
            flexGrow: 1,
            ml: isTableView && "80px",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                modalTitle: t("Convert to Lock"),
                lockEndTime: "0",
                lockStartTime: "0",
                stakingToken: stakingToken,
                currentLockedAmount: currentStakedAmount,
                children: t("Convert to Lock")
            })
        }),
        actionInline: isTableView,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .MessageText */ .Y, {
            children: t("Lock staking users are earning an average of %amount%% APY. More benefits are coming soon.", {
                amount: lockedApy ? parseFloat(lockedApy).toFixed(2) : 0
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(ConvertToLock));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55817);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73486);
/* harmony import */ var _utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const DURATIONS = [
    1,
    5,
    10,
    25
];
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-79aefbd4-0"
})`
  text-align: right;
  margin-right: 8px;
`;
const LockDurationField = ({ duration , setDuration , isOverMax , currentDuration , currentDurationLeft ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { 0: isMaxSelected , 1: setIsMaxSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const maxAvailableDuration = currentDurationLeft ? config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO - currentDurationLeft : config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isMaxSelected) {
            setDuration(maxAvailableDuration);
        }
    }, [
        isMaxSelected,
        maxAvailableDuration,
        setDuration
    ]);
    // When user extends the duration due to time passed when approving
    // transaction the extended duration will be a couple of seconds off to max duration,
    // therefore it is better to compare based on weeks
    const currentDurationInWeeks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>currentDuration && (0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToWeeks */ .Ot)(currentDuration), [
        currentDuration
    ]);
    const maxDurationInWeeks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToWeeks */ .Ot)(config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                mb: "16px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "secondary",
                                bold: true,
                                mr: "2px",
                                textTransform: "uppercase",
                                children: t("Add")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                bold: true,
                                textTransform: "uppercase",
                                children: t("duration")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        flexWrap: "wrap",
                        children: [
                            DURATIONS.map((week)=>{
                                const weekSeconds = (0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .weeksToSeconds */ .AS)(week);
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    onClick: ()=>{
                                        setIsMaxSelected(false);
                                        setDuration(weekSeconds);
                                    },
                                    mt: "4px",
                                    mr: [
                                        "2px",
                                        "2px",
                                        "4px",
                                        "4px"
                                    ],
                                    scale: "sm",
                                    disabled: weekSeconds > maxAvailableDuration,
                                    variant: weekSeconds === duration ? "subtle" : "tertiary",
                                    children: [
                                        week,
                                        "W"
                                    ]
                                }, week);
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                onClick: ()=>{
                                    setIsMaxSelected(true);
                                },
                                mt: "4px",
                                mr: [
                                    "2px",
                                    "2px",
                                    "4px",
                                    "4px"
                                ],
                                scale: "sm",
                                disabled: maxAvailableDuration < config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .ONE_WEEK_DEFAULT */ .kp,
                                variant: isMaxSelected ? "subtle" : "tertiary",
                                children: t("Max")
                            }, "max")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                mb: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                        value: (0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToWeeks */ .Ot)(duration),
                        autoComplete: "off",
                        pattern: "^[0-9]+$",
                        inputMode: "numeric",
                        onChange: (e)=>{
                            setIsMaxSelected(false);
                            const weeks = lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default()(e?.target?.value);
                            // Prevent large number input which cause NaN
                            // Why 530, just want to avoid user get laggy experience
                            // For example, allow user put 444 which they still get warning no more than 52
                            if (e.currentTarget.validity.valid && weeks < 530) {
                                setDuration((0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .weeksToSeconds */ .AS)(lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default()(e?.target?.value)));
                            }
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: t("Week")
                    })
                ]
            }),
            isOverMax && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                fontSize: "12px",
                textAlign: "right",
                color: "failure",
                children: t("Total lock duration exceeds 52 weeks")
            }),
            currentDurationLeft && currentDurationInWeeks === maxDurationInWeeks && !isMaxSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                variant: "warning",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* .MessageText */ .Y, {
                    maxWidth: "240px",
                    children: t('Recommend choosing "MAX" to renew your staking position in order to keep similar yield boost.')
                })
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockDurationField);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LockDurationRow = ({ weekDuration  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "textSubtle",
                textTransform: "uppercase",
                bold: true,
                fontSize: "12px",
                children: t("Lock Duration")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "text",
                bold: true,
                fontSize: "16px",
                children: weekDuration
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockDurationRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25237);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11218);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73486);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11496);
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97552);
/* harmony import */ var _LockDurationField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65878);
/* harmony import */ var _hooks_useLockedPool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16447);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, _Overview__WEBPACK_IMPORTED_MODULE_8__, _LockDurationField__WEBPACK_IMPORTED_MODULE_9__, _hooks_useLockedPool__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, _Overview__WEBPACK_IMPORTED_MODULE_8__, _LockDurationField__WEBPACK_IMPORTED_MODULE_9__, _hooks_useLockedPool__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ExtendEnable = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../views/Pools/components/LockedPool/Common/LockedModalBody.tsx -> " + "./ExtendEnable"
        ]
    },
    ssr: false
});
const LockedModalBody = ({ stakingToken , onDismiss , lockedAmount , currentBalance , currentDuration , currentDurationLeft , editAmountOnly , prepConfirmArg , validator , customOverview ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const ceiling = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useIfoCeiling */ .dd)();
    const { usdValueStaked , duration , setDuration , pendingTx , handleConfirmClick  } = (0,_hooks_useLockedPool__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
        stakingToken,
        onDismiss,
        lockedAmount,
        prepConfirmArg
    });
    const { isValidAmount , isValidDuration , isOverMax  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return typeof validator === "function" ? validator({
            duration
        }) : {
            isValidAmount: lockedAmount?.toNumber() > 0 && (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .getBalanceAmount */ .U4)(currentBalance).gte(lockedAmount),
            isValidDuration: duration > 0 && duration <= config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO,
            isOverMax: duration > config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO
        };
    }, [
        validator,
        currentBalance,
        lockedAmount,
        duration
    ]);
    const cakeNeeded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>isValidDuration && currentDuration && currentDuration + duration > config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO, [
        isValidDuration,
        currentDuration,
        duration
    ]);
    const hasEnoughBalanceToExtend = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>currentBalance?.gte(_helpers__WEBPACK_IMPORTED_MODULE_11__/* .ENABLE_EXTEND_LOCK_AMOUNT */ .iL), [
        currentBalance
    ]);
    const needsEnable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>cakeNeeded && !hasEnoughBalanceToExtend, [
        cakeNeeded,
        hasEnoughBalanceToExtend
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                mb: "16px",
                children: editAmountOnly || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockDurationField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        isOverMax: isOverMax,
                        currentDuration: currentDuration,
                        currentDurationLeft: currentDurationLeft,
                        setDuration: setDuration,
                        duration: duration
                    })
                })
            }),
            customOverview ? customOverview({
                isValidDuration,
                duration
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Overview__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                isValidDuration: isValidDuration,
                openCalculator: (lodash_noop__WEBPACK_IMPORTED_MODULE_3___default()),
                duration: duration,
                lockedAmount: lockedAmount?.toNumber(),
                usdValueStaked: usdValueStaked,
                showLockWarning: true,
                ceiling: ceiling
            }),
            cakeNeeded ? hasEnoughBalanceToExtend ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                fontSize: "12px",
                mt: "24px",
                children: t("0.0001 CAKE will be spent to extend")
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "warning",
                mt: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .MessageText */ .Y, {
                    maxWidth: "200px",
                    children: t("0.0001 CAKE required for enabling extension")
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                mt: "24px",
                children: needsEnable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExtendEnable, {
                    isValidAmount: isValidAmount,
                    isValidDuration: isValidDuration
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    width: "100%",
                    isLoading: pendingTx,
                    endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        spin: true,
                        color: "currentColor"
                    }) : null,
                    onClick: handleConfirmClick,
                    disabled: !(isValidAmount && isValidDuration),
                    children: pendingTx ? t("Confirming") : t("Confirm")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockedModalBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45366);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CrossText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CrossText__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_CrossText__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const DiffBalance = ({ value , newValue , decimals , unit , prefix ,  })=>{
    if ((0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(newValue) || !value || value === newValue || lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(newValue) === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            bold: true,
            fontSize: "16px",
            value: value,
            decimals: decimals,
            unit: unit,
            prefix: prefix
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CrossText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    bold: true,
                    fontSize: "16px",
                    mr: "4px",
                    value: value,
                    decimals: decimals,
                    unit: unit,
                    prefix: prefix
                })
            }),
            `->`,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                bold: true,
                color: "failure",
                fontSize: "16px",
                ml: "4px",
                value: newValue,
                decimals: decimals,
                unit: unit,
                prefix: prefix
            })
        ]
    });
};
const BalanceRow = ({ title , value , newValue , unit , decimals , prefix , suffix , tooltipContent ,  })=>{
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            tooltipVisible && tooltip,
            tooltipContent ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    ref: targetRef,
                    color: "textSubtle",
                    textTransform: "uppercase",
                    bold: true,
                    fontSize: "12px",
                    children: title
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                color: "textSubtle",
                textTransform: "uppercase",
                bold: true,
                fontSize: "12px",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DiffBalance, {
                        newValue: newValue,
                        value: value,
                        decimals: decimals,
                        unit: unit,
                        prefix: prefix
                    }),
                    suffix
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BalanceRow));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const CrossText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4b9cfd09-0"
})`
  text-decoration: line-through;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrossText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const DateRow = ({ title , value , color  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const tooltipContent = t("You will be able to withdraw the staked CAKE and profit only when the staking position is unlocked, i.e. when the staking period ends.");
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    ref: targetRef,
                    color: "textSubtle",
                    textTransform: "uppercase",
                    bold: true,
                    fontSize: "12px",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                bold: true,
                color: color,
                children: value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(value, "MMM do, yyyy HH:mm") : "-"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45366);
/* harmony import */ var _CrossText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CrossText__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_CrossText__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const DiffText = ({ value , newValue  })=>{
    if ((0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(newValue) || (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(value) || value === newValue) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            bold: true,
            fontSize: "16px",
            children: value || "-"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CrossText__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                bold: true,
                fontSize: "16px",
                mr: "4px",
                children: value
            }),
            `->`,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                bold: true,
                color: "failure",
                ml: "4px",
                fontSize: "16px",
                children: newValue
            })
        ]
    });
};
const TextRow = ({ title , value , newValue  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "textSubtle",
                textTransform: "uppercase",
                bold: true,
                fontSize: "12px",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                alignItems: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DiffText, {
                    value: value,
                    newValue: newValue
                })
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97552:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55817);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27156);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53887);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_timeHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40907);
/* harmony import */ var _utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14457);
/* harmony import */ var _TextRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75700);
/* harmony import */ var _BalanceRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96915);
/* harmony import */ var _DateRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98446);
/* harmony import */ var _utils_formatRoi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30046);
/* harmony import */ var _utils_formatICake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10655);
/* harmony import */ var _Buttons_CalculatorButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_2__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_4__, _TextRow__WEBPACK_IMPORTED_MODULE_9__, _BalanceRow__WEBPACK_IMPORTED_MODULE_10__, _DateRow__WEBPACK_IMPORTED_MODULE_11__, _Buttons_CalculatorButton__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([components_Card__WEBPACK_IMPORTED_MODULE_2__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_4__, _TextRow__WEBPACK_IMPORTED_MODULE_9__, _BalanceRow__WEBPACK_IMPORTED_MODULE_10__, _DateRow__WEBPACK_IMPORTED_MODULE_11__, _Buttons_CalculatorButton__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Overview = ({ usdValueStaked , lockedAmount , duration , isValidDuration , newDuration , newLockedAmount , lockStartTime , lockEndTime , showLockWarning , ceiling ,  })=>{
    const { getLockedApy , getBoostFactor  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_4__/* .useVaultApy */ .o)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const lockedApy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getLockedApy(duration), [
        getLockedApy,
        duration
    ]);
    const boostFactor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getBoostFactor(duration), [
        getBoostFactor,
        duration
    ]);
    const newLockedApy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>newDuration && getLockedApy(newDuration) || 0, [
        getLockedApy,
        newDuration
    ]);
    const newBoost = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>newDuration && getBoostFactor(newDuration) || 0, [
        getBoostFactor,
        newDuration
    ]);
    const formattedRoi = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,_utils_formatRoi__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)({
            usdValueStaked,
            lockedApy,
            duration
        });
    }, [
        lockedApy,
        usdValueStaked,
        duration
    ]);
    const newFormattedRoi = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return newLockedApy && (0,_utils_formatRoi__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)({
            usdValueStaked,
            lockedApy: newLockedApy,
            duration: newDuration
        });
    }, [
        newLockedApy,
        usdValueStaked,
        newDuration
    ]);
    const now = new Date();
    const unlockDate = newDuration ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.addSeconds)(Number(lockStartTime) ? new Date((0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_7__/* .convertTimeToSeconds */ .Eg)(lockStartTime)) : now, newDuration) : Number(lockEndTime) ? new Date((0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_7__/* .convertTimeToSeconds */ .Eg)(lockEndTime)) : (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.addSeconds)(now, duration);
    const formattediCake = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,_utils_formatICake__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
            lockedAmount,
            duration,
            ceiling
        });
    }, [
        lockedAmount,
        duration,
        ceiling
    ]);
    const newFormattediCake = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const amount = Number(newLockedAmount) ? newLockedAmount : lockedAmount;
        const lockDuration = Number(newDuration) ? newDuration : duration;
        return (0,_utils_formatICake__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
            lockedAmount: amount,
            duration: lockDuration,
            ceiling
        });
    }, [
        lockedAmount,
        newLockedAmount,
        duration,
        newDuration,
        ceiling
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        mb: "4px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "secondary",
                                bold: true,
                                mr: "2px",
                                textTransform: "uppercase",
                                children: t("Lock")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                bold: true,
                                textTransform: "uppercase",
                                children: t("Overview")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_2__/* .LightGreyCard */ .m5, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BalanceRow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                title: t("Cake to be locked"),
                                value: lockedAmount,
                                newValue: newLockedAmount,
                                decimals: 2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BalanceRow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                title: "iCake",
                                decimals: 2,
                                value: formattediCake,
                                newValue: newFormattediCake
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BalanceRow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                title: "apy",
                                unit: "%",
                                value: lodash_toNumber__WEBPACK_IMPORTED_MODULE_6___default()(lockedApy),
                                decimals: 2,
                                newValue: lodash_toNumber__WEBPACK_IMPORTED_MODULE_6___default()(newLockedApy),
                                tooltipContent: t("Calculated based on current rates and subject to change based on pool conditions. It is an estimate provided for your convenience only, and by no means represents guaranteed returns.")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextRow__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                title: t("duration"),
                                value: isValidDuration && (0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(duration),
                                newValue: isValidDuration && newDuration && (0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(newDuration)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BalanceRow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                title: t("Yield boost"),
                                unit: "x",
                                value: lodash_toNumber__WEBPACK_IMPORTED_MODULE_6___default()(boostFactor),
                                decimals: 2,
                                newValue: lodash_toNumber__WEBPACK_IMPORTED_MODULE_6___default()(newBoost),
                                tooltipContent: t("Your yield will be boosted based on the total lock duration of your current fixed term staking position.")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DateRow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                color: lodash_toNumber__WEBPACK_IMPORTED_MODULE_6___default()(newDuration) ? "failure" : "text",
                                title: t("Unlock on"),
                                value: isValidDuration && unlockDate
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BalanceRow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                title: t("Expected ROI"),
                                value: formattedRoi,
                                newValue: newFormattedRoi,
                                prefix: "$",
                                decimals: 2,
                                suffix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_CalculatorButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                tooltipContent: t("Calculated based on current rates and subject to change based on pool conditions. It is an estimate provided for your convenience only, and by no means represents guaranteed returns.")
                            })
                        ]
                    })
                ]
            }),
            showLockWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                mt: "16px",
                maxWidth: "370px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    variant: "warning",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* .MessageText */ .Y, {
                        children: t("You will be able to withdraw the staked CAKE and profit only when the staking position is unlocked")
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97131);
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22868);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const StaticAmount = ({ stakingSymbol , stakingAddress , lockedAmount , usdValueStaked ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "textSubtle",
                textTransform: "uppercase",
                bold: true,
                fontSize: "12px",
                children: t("Add CAKE to lock")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "16px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                color: "text",
                                bold: true,
                                fontSize: "16px",
                                value: lockedAmount,
                                decimals: 2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                value: usdValueStaked,
                                fontSize: "12px",
                                color: "textSubtle",
                                decimals: 2,
                                prefix: "~",
                                unit: " USD"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        alignItems: "center",
                        minWidth: "70px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                src: `/images/tokens/${stakingAddress}.png`,
                                width: 24,
                                height: 24,
                                alt: stakingSymbol
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ml: "4px",
                                bold: true,
                                children: stakingSymbol
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Divider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaticAmount);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41731);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53887);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const YieldBoostRow = ({ secondDuration  })=>{
    const { boostFactor  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_1__/* .useVaultApy */ .o)({
        duration: secondDuration
    });
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const tooltipContent = t("Your yield will be boosted based on the total lock duration of your current fixed term staking position.");
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    ref: targetRef,
                    color: "textSubtle",
                    textTransform: "uppercase",
                    bold: true,
                    fontSize: "12px",
                    children: t("Yield boost")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                color: "text",
                bold: true,
                fontSize: "16px",
                value: boostFactor ? boostFactor?.toString() : "0",
                decimals: 2,
                unit: "x"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YieldBoostRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_timeHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40907);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23992);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11496);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19081);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24671);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73486);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85576);
/* harmony import */ var _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3518);
/* harmony import */ var _Common_BalanceField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60398);
/* harmony import */ var _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12556);
/* harmony import */ var _Common_Overview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_9__, _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__, _Common_BalanceField__WEBPACK_IMPORTED_MODULE_14__, _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_15__, _Common_Overview__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_9__, _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__, _Common_BalanceField__WEBPACK_IMPORTED_MODULE_14__, _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_15__, _Common_Overview__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const RenewDuration = ({ setCheckedState , checkedState  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !checkedState && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                variant: "warning",
                mb: "16px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .MessageText */ .Y, {
                    maxWidth: "320px",
                    children: t("Adding more CAKE will renew your lock, setting it to remaining duration. Due to shorter lock period, benefits decrease. To keep similar benefits, extend your lock.")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        checked: checkedState,
                        onChange: ()=>setCheckedState((prev)=>!prev),
                        scale: "sm"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        ml: "8px",
                        color: "text",
                        children: t("Renew and extend your lock to keep similar benefits.")
                    })
                ]
            })
        ]
    });
};
// add 60s buffer in order to make sure minimum duration by pass on renew extension
const MIN_DURATION_BUFFER = 60;
const AddAmountModal = ({ onDismiss , currentBalance , currentLockedAmount , stakingToken , lockStartTime , lockEndTime , stakingTokenBalance ,  })=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)();
    const ceiling = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useIfoCeiling */ .dd)();
    const { 0: lockedAmount , 1: setLockedAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: checkedState , 1: setCheckedState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const lockedAmountAsBigNumber = !Number.isNaN(new (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default())(lockedAmount).toNumber()) ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default())(lockedAmount) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_12__/* .BIG_ZERO */ .HW;
    const totalLockedAmount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .getBalanceNumber */ .mW)(currentLockedAmount.plus((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .getDecimalAmount */ .Qe)(lockedAmountAsBigNumber)));
    const currentLockedAmountAsBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .getBalanceAmount */ .U4)(currentLockedAmount);
    const usdValueStaked = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_9__/* .useBUSDCakeAmount */ .Tx)(lockedAmountAsBigNumber.toNumber());
    const usdValueNewStaked = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_9__/* .useBUSDCakeAmount */ .Tx)(totalLockedAmount);
    const remainingDuration = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInSeconds)(new Date((0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_3__/* .convertTimeToSeconds */ .Eg)(lockEndTime)), new Date(), {
        roundingMethod: "ceil"
    });
    const passedDuration = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInSeconds)(new Date(), new Date((0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_3__/* .convertTimeToSeconds */ .Eg)(lockStartTime)), {
        roundingMethod: "ceil"
    });
    // if you locked for 1 week, then add cake without renew the extension, it's possible that remainingDuration + passedDuration less than 1 week.
    const atLeastOneWeekNewDuration = Math.max(config_constants_pools__WEBPACK_IMPORTED_MODULE_11__/* .ONE_WEEK_DEFAULT */ .kp + MIN_DURATION_BUFFER, remainingDuration + passedDuration);
    const prepConfirmArg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const extendDuration = atLeastOneWeekNewDuration - remainingDuration;
        return {
            finalDuration: checkedState ? extendDuration : 0
        };
    }, [
        atLeastOneWeekNewDuration,
        checkedState,
        remainingDuration
    ]);
    const customOverview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Overview__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            isValidDuration: true,
            openCalculator: (lodash_noop__WEBPACK_IMPORTED_MODULE_4___default()),
            duration: remainingDuration,
            newDuration: checkedState ? atLeastOneWeekNewDuration : null,
            lockedAmount: currentLockedAmountAsBalance.toNumber(),
            newLockedAmount: totalLockedAmount,
            usdValueStaked: usdValueNewStaked,
            lockEndTime: lockEndTime,
            ceiling: ceiling
        }), [
        remainingDuration,
        checkedState,
        currentLockedAmountAsBalance,
        atLeastOneWeekNewDuration,
        totalLockedAmount,
        usdValueNewStaked,
        lockEndTime,
        ceiling, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        lockedAmount: lockedAmount,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
            title: t("Add CAKE"),
            onDismiss: onDismiss,
            headerBackground: theme.colors.gradientCardHeader,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    mb: "16px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_BalanceField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        stakingAddress: stakingToken.address,
                        stakingSymbol: stakingToken.symbol,
                        stakingDecimals: stakingToken.decimals,
                        lockedAmount: lockedAmount,
                        usedValueStaked: usdValueStaked,
                        stakingMax: currentBalance,
                        setLockedAmount: setLockedAmount,
                        stakingTokenBalance: stakingTokenBalance
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    currentBalance: currentBalance,
                    stakingToken: stakingToken,
                    onDismiss: onDismiss,
                    lockedAmount: lockedAmountAsBigNumber,
                    editAmountOnly: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenewDuration, {
                        checkedState: checkedState,
                        setCheckedState: setCheckedState
                    }),
                    prepConfirmArg: prepConfirmArg,
                    customOverview: customOverview
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddAmountModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23992);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36695);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73486);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24671);
/* harmony import */ var _Common_StaticAmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72234);
/* harmony import */ var _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12556);
/* harmony import */ var _Common_Overview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97552);
/* harmony import */ var _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3518);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__, _Common_StaticAmount__WEBPACK_IMPORTED_MODULE_10__, _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_11__, _Common_Overview__WEBPACK_IMPORTED_MODULE_12__, _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__, _Common_StaticAmount__WEBPACK_IMPORTED_MODULE_10__, _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_11__, _Common_Overview__WEBPACK_IMPORTED_MODULE_12__, _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const ExtendDurationModal = ({ modalTitle , stakingToken , onDismiss , currentLockedAmount , currentDuration , currentDurationLeft , currentBalance , lockStartTime ,  })=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const ceiling = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useIfoCeiling */ .dd)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const usdValueStaked = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_4__/* .useBUSDCakeAmount */ .Tx)(currentLockedAmount);
    const validator = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ duration  })=>{
        const isValidAmount = currentLockedAmount && currentLockedAmount > 0;
        const totalDuration = currentDurationLeft + duration;
        const isValidDuration = duration > 0 && totalDuration > 0 && totalDuration <= config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO;
        return {
            isValidAmount,
            isValidDuration,
            isOverMax: totalDuration > config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO
        };
    }, [
        currentLockedAmount,
        currentDurationLeft
    ]);
    const prepConfirmArg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ duration  })=>({
            finalDuration: duration,
            finalLockedAmount: currentDuration && currentDuration + duration > config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_9__/* .getBalanceAmount */ .U4)(_helpers__WEBPACK_IMPORTED_MODULE_14__/* .ENABLE_EXTEND_LOCK_AMOUNT */ .iL, stakingToken.decimals).toNumber() : 0
        }), [
        stakingToken.decimals,
        currentDuration
    ]);
    const customOverview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ isValidDuration , duration  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Overview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            lockStartTime: currentDuration + duration > config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO ? Math.floor(Date.now() / 1000).toString() : lockStartTime,
            isValidDuration: isValidDuration,
            openCalculator: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
            duration: currentDuration || duration,
            newDuration: currentDuration + duration > config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO ? currentDurationLeft + duration : currentDuration + duration,
            lockedAmount: currentLockedAmount,
            usdValueStaked: usdValueStaked,
            showLockWarning: !+lockStartTime,
            ceiling: ceiling
        }), [
        lockStartTime,
        currentDuration,
        currentLockedAmount,
        currentDurationLeft,
        usdValueStaked,
        ceiling
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        lockedAmount: currentLockedAmount,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
            title: modalTitle || t("Extend Lock"),
            onDismiss: onDismiss,
            headerBackground: theme.colors.gradientCardHeader,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    mb: "16px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_StaticAmount__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        stakingAddress: stakingToken.address,
                        stakingSymbol: stakingToken.symbol,
                        lockedAmount: currentLockedAmount,
                        usdValueStaked: usdValueStaked
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    stakingToken: stakingToken,
                    currentBalance: currentBalance,
                    currentDuration: currentDuration,
                    currentDurationLeft: currentDurationLeft,
                    onDismiss: onDismiss,
                    lockedAmount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(currentLockedAmount),
                    validator: validator,
                    prepConfirmArg: prepConfirmArg,
                    customOverview: customOverview
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtendDurationModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23992);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19081);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Common_BalanceField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60398);
/* harmony import */ var _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12556);
/* harmony import */ var _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3518);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, _Common_BalanceField__WEBPACK_IMPORTED_MODULE_7__, _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_8__, _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, _Common_BalanceField__WEBPACK_IMPORTED_MODULE_7__, _Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_8__, _RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const LockedStakeModal = ({ onDismiss , currentBalance , stakingToken , stakingTokenBalance ,  })=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    const { 0: lockedAmount , 1: setLockedAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const usdValueStaked = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__/* .useBUSDCakeAmount */ .Tx)(lodash_toNumber__WEBPACK_IMPORTED_MODULE_5___default()(lockedAmount));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoiCalculatorModalProvider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        lockedAmount: lockedAmount,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
            title: t("Lock CAKE"),
            onDismiss: onDismiss,
            headerBackground: theme.colors.gradientCardHeader,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    mb: "16px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_BalanceField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        stakingAddress: stakingToken.address,
                        stakingSymbol: stakingToken.symbol,
                        stakingDecimals: stakingToken.decimals,
                        lockedAmount: lockedAmount,
                        usedValueStaked: usdValueStaked,
                        stakingMax: currentBalance,
                        setLockedAmount: setLockedAmount,
                        stakingTokenBalance: stakingTokenBalance
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_LockedModalBody__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    currentBalance: currentBalance,
                    stakingToken: stakingToken,
                    onDismiss: onDismiss,
                    lockedAmount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default())(lockedAmount)
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockedStakeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ RoiCalculatorModalContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11496);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56648);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_toString__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_5__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const RoiCalculatorModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const RoiCalculatorModalProvider = ({ children , lockedAmount  })=>{
    const { 0: showRoiCalculator , 1: setShowRoiCalculator  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    // Get Vault pool
    const { pool  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePool */ .AI)(0);
    const stakingTokenAddress = pool?.stakingToken?.address ? pool.stakingToken.address.toLowerCase() : null;
    if (showRoiCalculator) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_5__/* .VaultRoiCalculatorModal */ .E, {
            pool: pool,
            linkLabel: t("Get %symbol%", {
                symbol: "CAKE"
            }),
            linkHref: stakingTokenAddress ? `/swap?outputCurrency=${stakingTokenAddress}` : "/swap",
            stakingTokenBalance: pool?.userData?.stakingTokenBalance,
            onBack: ()=>setShowRoiCalculator(false),
            initialValue: lodash_toString__WEBPACK_IMPORTED_MODULE_4___default()(lockedAmount),
            initialView: 1
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoiCalculatorModalContext.Provider, {
        value: setShowRoiCalculator,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoiCalculatorModalProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLockedPool)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36204);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36695);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74860);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91397);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78950);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34376);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73486);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93638);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__, state_pools__WEBPACK_IMPORTED_MODULE_10__, components_Toast__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__, state_pools__WEBPACK_IMPORTED_MODULE_10__, components_Toast__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function useLockedPool(hookArgs) {
    const { lockedAmount , stakingToken , onDismiss , prepConfirmArg  } = hookArgs;
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const vaultPoolContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useVaultPoolContract */ .Ak)(state_types__WEBPACK_IMPORTED_MODULE_12__/* .VaultKey.CakeVault */ .om.CakeVault);
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_14__/* .useCallWithMarketGasPrice */ .r)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* .useToast */ .p)();
    const { 0: duration , 1: setDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(config_constants_pools__WEBPACK_IMPORTED_MODULE_11__/* .ONE_WEEK_DEFAULT */ .kp);
    const usdValueStaked = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_5__/* .useBUSDCakeAmount */ .Tx)(lockedAmount.toNumber());
    const handleDeposit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (convertedStakeAmount, lockDuration)=>{
        const callOptions = {
            gasLimit: config_constants_pools__WEBPACK_IMPORTED_MODULE_11__/* .vaultPoolConfig */ .Y4[state_types__WEBPACK_IMPORTED_MODULE_12__/* .VaultKey.CakeVault */ .om.CakeVault].gasLimit
        };
        const receipt = await fetchWithCatchTxError(()=>{
            // .toString() being called to fix a BigNumber error in prod
            // as suggested here https://github.com/ChainSafe/web3.js/issues/2077
            const methodArgs = [
                convertedStakeAmount.toString(),
                lockDuration
            ];
            return callWithMarketGasPrice(vaultPoolContract, "deposit", methodArgs, callOptions);
        });
        if (receipt?.status) {
            toastSuccess(t("Staked!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_13__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your funds have been staked in the pool")
            }));
            onDismiss?.();
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_10__/* .fetchCakeVaultUserData */ .x$)({
                account
            }));
        }
    }, [
        fetchWithCatchTxError,
        toastSuccess,
        dispatch,
        onDismiss,
        account,
        vaultPoolContract,
        t,
        callWithMarketGasPrice
    ]);
    const handleConfirmClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const { finalLockedAmount =lockedAmount , finalDuration =duration  } = typeof prepConfirmArg === "function" ? prepConfirmArg({
            duration
        }) : {};
        const convertedStakeAmount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getDecimalAmount */ .Qe)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_7___default())(finalLockedAmount), stakingToken.decimals);
        handleDeposit(convertedStakeAmount, finalDuration);
    }, [
        prepConfirmArg,
        stakingToken,
        handleDeposit,
        duration,
        lockedAmount
    ]);
    return {
        usdValueStaked,
        duration,
        setDuration,
        pendingTx,
        handleConfirmClick
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24953);
/* harmony import */ var utils_timeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40907);
/* harmony import */ var _utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14457);



const useUserDataInVaultPresenter = ({ lockEndTime , lockStartTime  })=>{
    const { currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    const secondDuration = Number(lockEndTime) - Number(lockStartTime);
    const lockEndTimeSeconds = (0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_1__/* .convertTimeToSeconds */ .Eg)(lockEndTime);
    let lockEndDate = "";
    let burnStartTime = "";
    try {
        const _lockEndDate = new Date(lockEndTimeSeconds);
        lockEndDate = _lockEndDate.toLocaleString(locale, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
        const _burnStartTime = new Date(lockEndTimeSeconds + 7 * 24 * 60 * 60 * 1000);
        burnStartTime = _burnStartTime.toLocaleString(locale, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
    } catch (_) {
    // ignore invalid format
    }
    return {
        weekDuration: (0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(secondDuration),
        remainingTime: (0,utils_timeHelper__WEBPACK_IMPORTED_MODULE_1__/* .distanceToNowStrict */ .At)(lockEndTimeSeconds),
        lockEndDate,
        secondDuration,
        burnStartTime
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserDataInVaultPresenter);


/***/ }),

/***/ 39513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useUserEnoughCakeValidator)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const useUserEnoughCakeValidator = (cakeAmount, stakingTokenBalance)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const errorMessage = t("Insufficient CAKE balance");
    const userNotEnoughCake = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(cakeAmount).gt((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceAmount */ .U4)(stakingTokenBalance, 18))) return true;
        return false;
    }, [
        cakeAmount,
        stakingTokenBalance
    ]);
    return {
        userNotEnoughCake,
        notEnoughErrorMessage: errorMessage
    };
};


/***/ }),

/***/ 10655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ formatiCake)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

function formatiCake({ lockedAmount , duration , ceiling  }) {
    const durationAsBn = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(duration);
    if (durationAsBn.gte(ceiling)) {
        return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(lockedAmount).toNumber();
    }
    if (durationAsBn.lt(ceiling) && durationAsBn.gte(0)) {
        return durationAsBn.times(lockedAmount).div(ceiling).toNumber();
    }
    return 0;
}


/***/ }),

/***/ 30046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ formatRoi)
/* harmony export */ });
function formatRoi(roiArgs) {
    const { lockedApy , usdValueStaked , duration  } = roiArgs;
    const roi = usdValueStaked * (Number(lockedApy) / 100) * (duration / 31449600);
    const roiFractionDigits = roi > 10000 ? 0 : 2;
    return roi.toLocaleString("en", {
        minimumFractionDigits: roiFractionDigits,
        maximumFractionDigits: roiFractionDigits
    });
}


/***/ }),

/***/ 23019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47418);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MaxStakeRow = ({ small =false , stakingLimit , currentBlock , stakingLimitEndBlock , stakingToken , hasPoolStarted ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        small: small,
                        children: [
                            t("Max. stake per user"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        small: small,
                        children: `${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getFullDisplayBalance */ .NJ)(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`
                    })
                ]
            }),
            hasPoolStarted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        small: small,
                        children: [
                            t("Max. stake limit ends in"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        external: true,
                        href: (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .getBlockExploreLink */ .C)(stakingLimitEndBlock, "countdown"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                small: small,
                                value: Math.max(stakingLimitEndBlock - currentBlock, 0),
                                decimals: 0,
                                color: "primary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                small: small,
                                ml: "4px",
                                color: "primary",
                                textTransform: "lowercase",
                                children: t("Blocks")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                ml: "4px",
                                color: "primary"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxStakeRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12486);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f9a2dd70-0"
})`
  width: 100%;
`;
const NotEnoughTokensModal = ({ tokenSymbol , onDismiss ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        title: t("%symbol% required", {
            symbol: tokenSymbol
        }),
        onDismiss: onDismiss,
        headerBackground: theme.colors.gradientCardHeader,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                color: "failure",
                bold: true,
                children: t("Insufficient %symbol% balance", {
                    symbol: tokenSymbol
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                mt: "24px",
                children: t("You’ll need %symbol% to stake in this pool!", {
                    symbol: tokenSymbol
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: t("Buy some %symbol%, or make sure your %symbol% isn’t in another pool or LP.", {
                    symbol: tokenSymbol
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                mt: "24px",
                as: "a",
                external: true,
                href: "/swap",
                children: [
                    t("Buy"),
                    " ",
                    tokenSymbol
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                href: "https://yieldwatch.net",
                external: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    variant: "secondary",
                    mt: "8px",
                    width: "100%",
                    children: [
                        t("Locate Assets"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            color: "primary",
                            ml: "4px"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                variant: "text",
                onClick: onDismiss,
                children: t("Close Window")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEnoughTokensModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(47418);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(84281);
/* harmony import */ var components_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5054);
/* harmony import */ var _pancakeswap_wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82466);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26488);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93638);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5305);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70627);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85576);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9681);
/* harmony import */ var _MaxStakeRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23019);
/* harmony import */ var _Stat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_1__, state_block_hooks__WEBPACK_IMPORTED_MODULE_5__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__, _MaxStakeRow__WEBPACK_IMPORTED_MODULE_12__, _Stat__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([components_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_1__, state_block_hooks__WEBPACK_IMPORTED_MODULE_5__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__, _MaxStakeRow__WEBPACK_IMPORTED_MODULE_12__, _Stat__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const PoolStatsInfo = ({ pool , account , showTotalStaked =true , alignLinksToRight =true ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentBlock */ .je)();
    const { stakingToken , earningToken , totalStaked , startBlock , endBlock , stakingLimit , stakingLimitEndBlock , contractAddress , vaultKey , profileRequirement , isFinished , userData: poolUserData ,  } = pool;
    const stakedBalance = poolUserData?.stakedBalance ? poolUserData.stakedBalance : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_10__/* .BIG_ZERO */ .HW;
    const { totalCakeInVault , totalLockedAmount , fees: { performanceFeeAsDecimal  } , userData ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const tokenAddress = earningToken.address || "";
    const poolContractAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_9__/* .getAddress */ .Kn)(contractAddress);
    const cakeVaultContractAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_9__/* .getVaultPoolAddress */ .ZX)(vaultKey);
    const { shouldShowBlockCountdown , blocksUntilStart , blocksRemaining , hasPoolStarted , blocksToDisplay  } = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getPoolBlockInfo */ .zy)(pool, currentBlock);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            profileRequirement && (profileRequirement.required || profileRequirement.thresholdPoints.gt(0)) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "8px",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        small: true,
                        children: [
                            t("Requirement"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        small: true,
                        textAlign: "right",
                        children: [
                            profileRequirement.required && t("Pancake Profile"),
                            " ",
                            profileRequirement.thresholdPoints.gt(0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                small: true,
                                children: [
                                    profileRequirement.thresholdPoints.toNumber().toLocaleString(),
                                    " ",
                                    t("Profile Points")
                                ]
                            })
                        ]
                    })
                ]
            }),
            !vaultKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stat__WEBPACK_IMPORTED_MODULE_13__/* .AprInfo */ .mu, {
                pool: pool,
                stakedBalance: stakedBalance
            }),
            showTotalStaked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stat__WEBPACK_IMPORTED_MODULE_13__/* .TotalStaked */ .Rf, {
                totalStaked: vaultKey ? totalCakeInVault : totalStaked,
                stakingToken: stakingToken
            }),
            vaultKey === state_types__WEBPACK_IMPORTED_MODULE_7__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stat__WEBPACK_IMPORTED_MODULE_13__/* .TotalLocked */ .zb, {
                totalLocked: totalLockedAmount,
                lockedToken: stakingToken
            }),
            vaultKey === state_types__WEBPACK_IMPORTED_MODULE_7__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stat__WEBPACK_IMPORTED_MODULE_13__/* .DurationAvg */ .jr, {}),
            !isFinished && stakingLimit && stakingLimit.gt(0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MaxStakeRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                small: true,
                currentBlock: currentBlock,
                hasPoolStarted: hasPoolStarted,
                stakingLimit: stakingLimit,
                stakingLimitEndBlock: stakingLimitEndBlock,
                stakingToken: stakingToken
            }),
            shouldShowBlockCountdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "2px",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        small: true,
                        children: [
                            hasPoolStarted ? t("Ends in") : t("Starts in"),
                            ":"
                        ]
                    }),
                    blocksRemaining || blocksUntilStart ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            external: true,
                            href: (0,utils__WEBPACK_IMPORTED_MODULE_8__/* .getBlockExploreLink */ .C)(hasPoolStarted ? endBlock : startBlock, "countdown"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    small: true,
                                    value: blocksToDisplay,
                                    decimals: 0,
                                    color: "primary"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    small: true,
                                    ml: "4px",
                                    color: "primary",
                                    textTransform: "lowercase",
                                    children: t("Blocks")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    ml: "4px",
                                    color: "primary"
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        width: "54px",
                        height: "21px"
                    })
                ]
            }),
            vaultKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stat__WEBPACK_IMPORTED_MODULE_13__/* .PerformanceFee */ .FD, {
                userData: userData,
                performanceFeeAsDecimal: performanceFeeAsDecimal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "2px",
                justifyContent: alignLinksToRight ? "flex-end" : "flex-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    href: `/info/token/${earningToken.address}`,
                    bold: false,
                    small: true,
                    children: t("See Token Info")
                })
            }),
            !vaultKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "2px",
                justifyContent: alignLinksToRight ? "flex-end" : "flex-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    href: earningToken.projectLink,
                    bold: false,
                    small: true,
                    children: t("View Project Site")
                })
            }),
            vaultKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "2px",
                justifyContent: alignLinksToRight ? "flex-end" : "flex-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    href: "https://docs.pancakeswap.finance/products/syrup-pool/new-cake-pool",
                    bold: false,
                    small: true,
                    children: t("View Tutorial")
                })
            }),
            poolContractAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "2px",
                justifyContent: alignLinksToRight ? "flex-end" : "flex-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    href: `${_pancakeswap_wagmi_chains__WEBPACK_IMPORTED_MODULE_2__/* .bsc.blockExplorers["default"].url */ .eG.blockExplorers["default"].url}/address/${vaultKey ? cakeVaultContractAddress : poolContractAddress}`,
                    bold: false,
                    small: true,
                    children: t("View Contract")
                })
            }),
            account && tokenAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                justifyContent: alignLinksToRight ? "flex-end" : "flex-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    variant: "text",
                    p: "0",
                    height: "auto",
                    style: {
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "normal"
                    },
                    marginTextBetweenLogo: "4px",
                    textOptions: components_AddToWallet_AddToWalletButton__WEBPACK_IMPORTED_MODULE_1__/* .AddToWalletTextOptions.TEXT */ .L.TEXT,
                    tokenAddress: tokenAddress,
                    tokenSymbol: earningToken.symbol,
                    tokenDecimals: earningToken.decimals,
                    tokenLogo: `https://tokens.pancakeswap.finance/images/${tokenAddress}.png`
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(PoolStatsInfo));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FD": () => (/* binding */ PerformanceFee),
/* harmony export */   "Rf": () => (/* binding */ TotalStaked),
/* harmony export */   "jr": () => (/* binding */ DurationAvg),
/* harmony export */   "mu": () => (/* binding */ AprInfo),
/* harmony export */   "zb": () => (/* binding */ TotalLocked)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27240);
/* harmony import */ var _LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22557);
/* harmony import */ var _Apr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97421);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_4__, _Apr__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_4__, _Apr__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const StatWrapper = ({ children , label  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        mb: "2px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        children: [
            label,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                alignItems: "center",
                children: children
            })
        ]
    });
};
const PerformanceFee = ({ userData , performanceFeeAsDecimal  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(t("Performance fee only applies to the flexible staking rewards."), {
        placement: "bottom-start"
    });
    const isLock = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_3__/* .isLocked */ .p1)(userData);
    const isStake = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_3__/* .isStaked */ .IM)(userData);
    if (!performanceFeeAsDecimal || isLock) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StatWrapper, {
        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            ref: targetRef,
            small: true,
            children: t("Performance Fee")
        }),
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                ml: "4px",
                small: true,
                children: isStake ? `${performanceFeeAsDecimal}%` : `0~${performanceFeeAsDecimal}%`
            })
        ]
    });
};
const TotalToken = ({ total , token  })=>{
    if (total && total.gte(0)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            small: true,
            value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(total, token.decimals),
            decimals: 0,
            unit: ` ${token.symbol}`
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        width: "90px",
        height: "21px"
    });
};
const TotalLocked = ({ totalLocked , lockedToken ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatWrapper, {
        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            small: true,
            children: [
                t("Total locked"),
                ":"
            ]
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TotalToken, {
            total: totalLocked,
            token: lockedToken
        })
    });
};
const DurationAvg = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(t("The average lock duration of all the locked staking positions of other users"), {
        placement: "bottom-start"
    });
    const { avgLockDurationsInWeeks  } = (0,_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StatWrapper, {
        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            ref: targetRef,
            small: true,
            children: [
                t("Average lock duration"),
                ":"
            ]
        }),
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                ml: "4px",
                small: true,
                children: avgLockDurationsInWeeks
            })
        ]
    });
};
const TotalStaked = ({ totalStaked , stakingToken ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(t("Total amount of %symbol% staked in this pool", {
        symbol: stakingToken.symbol
    }), {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StatWrapper, {
        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            ref: targetRef,
            small: true,
            children: [
                t("Total staked"),
                ":"
            ]
        }),
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TotalToken, {
                total: totalStaked,
                token: stakingToken
            })
        ]
    });
};
const AprInfo = ({ pool , stakedBalance ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                small: true,
                children: [
                    t("APR"),
                    ":"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Apr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                pool: pool,
                showIcon: true,
                stakedBalance: stakedBalance,
                performanceFee: 0,
                fontSize: "14px"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ VaultPositionTagWithLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47714);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64363);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72727);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61089);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var components_Trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60471);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27240);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const tagConfig = {
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.None */ .PS.None]: {},
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Flexible */ .PS.Flexible]: {
        variant: "success"
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Locked */ .PS.Locked]: {
        variant: "secondary"
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.LockedEnd */ .PS.LockedEnd]: {
        variant: "secondary",
        outline: true
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.AfterBurning */ .PS.AfterBurning]: {
        variant: "failure",
        outline: true
    }
};
const iconConfig = {
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.None */ .PS.None]: null,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Flexible */ .PS.Flexible]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Locked */ .PS.Locked]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.LockedEnd */ .PS.LockedEnd]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.AfterBurning */ .PS.AfterBurning]: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
};
const positionLabel = {
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.None */ .PS.None]: "",
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Flexible */ .PS.Flexible]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: "Flexible"
    }),
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Locked */ .PS.Locked]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: "Locked"
    }),
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.LockedEnd */ .PS.LockedEnd]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: "Locked End"
    }),
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.AfterBurning */ .PS.AfterBurning]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: "After Burning"
    })
};
const VaultPositionTag = ({ position  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        ...tagConfig[position],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                as: iconConfig[position],
                mr: "4px"
            }),
            positionLabel[position]
        ]
    });
};
const VaultPositionTagWithLabel = ({ userData , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const position = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .getVaultPosition */ .cP)(userData), [
        userData
    ]);
    if (position) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            alignItems: "center",
            justifyContent: "space-between",
            marginX: "8px",
            mb: "8px",
            gap: "12px",
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "secondary",
                    textTransform: "uppercase",
                    bold: true,
                    children: t("My Position")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VaultPositionTag, {
                    position: position
                })
            ]
        });
    }
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ VaultRoiCalculatorModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74813);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2892);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75784);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53887);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93638);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90712);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65342);
/* harmony import */ var _LockedPool_Common_LockDurationField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65878);
/* harmony import */ var _utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, _LockedPool_Common_LockDurationField__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__, _LockedPool_Common_LockDurationField__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const VaultRoiCalculatorModal = ({ pool , initialView , ...rest })=>{
    const { userData: { balance: { cakeAsBigNumber  } ,  } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { getLockedApy , flexibleApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_2__/* .useVaultApy */ .o)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { account  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { 0: cakeVaultView , 1: setCakeVaultView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialView || 0);
    const { 0: duration , 1: setDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>(0,_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_8__/* .weeksToSeconds */ .AS)(1));
    const buttonMenuItems = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: t("Flexible")
            }, "Flexible"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: t("Locked")
            }, "Locked"), 
        ], [
        t
    ]);
    const apy = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return cakeVaultView === 0 ? flexibleApy : getLockedApy(duration);
    }, [
        cakeVaultView,
        getLockedApy,
        flexibleApy,
        duration
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        account: account,
        stakingTokenSymbol: pool.stakingToken.symbol,
        apy: +apy,
        initialState: {
            controls: {
                compounding: false
            }
        },
        linkHref: "/swap",
        linkLabel: t("Get %symbol%", {
            symbol: pool.stakingToken.symbol
        }),
        earningTokenPrice: pool.earningTokenPrice,
        stakingTokenPrice: pool.stakingTokenPrice,
        stakingTokenBalance: pool.userData?.stakingTokenBalance ? cakeAsBigNumber.plus(pool.userData?.stakingTokenBalance) : cakeAsBigNumber,
        autoCompoundFrequency: 1,
        strategy: cakeVaultView ? (state, dispatch)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LockedRoiStrategy, {
                state: state,
                dispatch: dispatch,
                stakingTokenPrice: pool.stakingTokenPrice,
                earningTokenPrice: pool.earningTokenPrice,
                duration: duration
            }) : null,
        header: pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_4__/* .VaultKey.CakeVault */ .om.CakeVault ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            mb: "24px",
            fullWidth: true,
            scale: "sm",
            variant: "subtle",
            activeIndex: cakeVaultView,
            onItemClick: setCakeVaultView,
            children: buttonMenuItems
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
        ...rest,
        children: cakeVaultView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            mt: "16px",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_LockDurationField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                duration: duration,
                setDuration: setDuration,
                isOverMax: false
            })
        })
    });
};
function LockedRoiStrategy({ state , dispatch , earningTokenPrice , duration , stakingTokenPrice  }) {
    const { getLockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_2__/* .useVaultApy */ .o)();
    const { principalAsUSD , roiUSD  } = state.data;
    const { compounding , compoundingFrequency , stakingDuration , mode  } = state.controls;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (mode === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* .CalculatorMode.ROI_BASED_ON_PRINCIPAL */ .ee.ROI_BASED_ON_PRINCIPAL) {
            const principalInUSDAsNumber = parseFloat(principalAsUSD);
            const interest = principalInUSDAsNumber / earningTokenPrice * (+getLockedApy(duration) / 100) * (duration / 31449600);
            const hasInterest = !Number.isNaN(interest);
            const roiTokens = hasInterest ? interest : 0;
            const roiAsUSD = hasInterest ? roiTokens * earningTokenPrice : 0;
            const roiPercentage = hasInterest ? (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_14__/* .getRoi */ .Lu)({
                amountEarned: roiAsUSD,
                amountInvested: principalInUSDAsNumber
            }) : 0;
            dispatch({
                type: "setRoi",
                payload: {
                    roiUSD: roiAsUSD,
                    roiTokens,
                    roiPercentage
                }
            });
        }
    }, [
        principalAsUSD,
        stakingDuration,
        earningTokenPrice,
        compounding,
        compoundingFrequency,
        mode,
        duration,
        dispatch,
        getLockedApy, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (mode === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* .CalculatorMode.PRINCIPAL_BASED_ON_ROI */ .ee.PRINCIPAL_BASED_ON_ROI) {
            const principalUSD = roiUSD / (+getLockedApy(duration) / 100) / (duration / 31449600);
            const roiPercentage = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_14__/* .getRoi */ .Lu)({
                amountEarned: roiUSD,
                amountInvested: principalUSD
            });
            const principalToken = principalUSD / stakingTokenPrice;
            dispatch({
                type: "setPrincipalForTargetRoi",
                payload: {
                    principalAsUSD: principalUSD.toFixed(2),
                    principalAsToken: principalToken.toFixed(10),
                    roiPercentage
                }
            });
        }
    }, [
        dispatch,
        duration,
        getLockedApy,
        mode,
        roiUSD,
        stakingTokenPrice
    ]);
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ VaultStakeButtonGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const VaultStakeButtonGroup = ({ onFlexibleClick , onLockedClick  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: t("Flexible staking offers flexibility for staking/unstaking whenever you want. Locked staking offers higher APY as well as other benefits.")
    }), {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                gap: "12px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        style: {
                            flex: 1
                        },
                        onClick: onFlexibleClick,
                        children: t("Flexible")
                    }),
                    onLockedClick && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        style: {
                            flex: 1
                        },
                        onClick: onLockedClick,
                        children: t("Locked")
                    })
                ]
            }),
            tooltipVisible && tooltip,
            onLockedClick && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                mt: "16px",
                small: true,
                ref: targetRef,
                children: t("What’s the difference?")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Le": () => (/* binding */ useVaultApprove),
/* harmony export */   "dI": () => (/* binding */ useCheckVaultApprovalStatus),
/* harmony export */   "iB": () => (/* binding */ useApprovePool)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36204);
/* harmony import */ var state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44409);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74860);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91397);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80361);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78950);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCakeApprovalStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91240);
/* harmony import */ var hooks_useCakeApprove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, state_actions__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__, components_Toast__WEBPACK_IMPORTED_MODULE_10__, hooks_useCakeApprovalStatus__WEBPACK_IMPORTED_MODULE_11__, hooks_useCakeApprove__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, state__WEBPACK_IMPORTED_MODULE_4__, state_actions__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__, components_Toast__WEBPACK_IMPORTED_MODULE_10__, hooks_useCakeApprovalStatus__WEBPACK_IMPORTED_MODULE_11__, hooks_useCakeApprove__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const useApprovePool = (lpContract, sousId, earningTokenSymbol)=>{
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_8__/* .useCallWithMarketGasPrice */ .r)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const sousChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useSousChef */ .AP)(sousId);
    const handleApprove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return callWithMarketGasPrice(lpContract, "approve", [
                sousChefContract.address,
                _ethersproject_constants__WEBPACK_IMPORTED_MODULE_3__.MaxUint256
            ]);
        });
        if (receipt?.status) {
            toastSuccess(t("Contract Enabled"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_10__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("You can now stake in the %symbol% pool!", {
                    symbol: earningTokenSymbol
                })
            }));
            dispatch((0,state_actions__WEBPACK_IMPORTED_MODULE_5__/* .updateUserAllowance */ .Oy)({
                sousId,
                account
            }));
        }
    }, [
        account,
        dispatch,
        lpContract,
        sousChefContract,
        sousId,
        earningTokenSymbol,
        t,
        toastSuccess,
        callWithMarketGasPrice,
        fetchWithCatchTxError, 
    ]);
    return {
        handleApprove,
        pendingTx
    };
};
// Approve CAKE auto pool
const useVaultApprove = (vaultKey, setLastUpdated)=>{
    const vaultPoolContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useVaultPoolContract */ .Ak)(vaultKey);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    return (0,hooks_useCakeApprove__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(setLastUpdated, vaultPoolContract?.address, t("You can now stake in the %symbol% vault!", {
        symbol: "CAKE"
    }));
};
const useCheckVaultApprovalStatus = (vaultKey)=>{
    const vaultPoolContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useVaultPoolContract */ .Ak)(vaultKey);
    return (0,hooks_useCakeApprovalStatus__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(vaultPoolContract?.address);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getHasWithdrawFee),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const getHasWithdrawFee = (lastDepositedTime, withdrawalFeePeriod = 259200)=>{
    const feeEndTime = lastDepositedTime + withdrawalFeePeriod;
    const currentSeconds = Math.floor(Date.now() / 1000);
    const secondsRemainingCalc = feeEndTime - currentSeconds;
    return secondsRemainingCalc > 0;
};
const useWithdrawalFeeTimer = (lastDepositedTime, userShares, withdrawalFeePeriod = 259200)=>{
    const { 0: secondsRemaining , 1: setSecondsRemaining  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: hasUnstakingFee , 1: setHasUnstakingFee  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: currentSeconds , 1: setCurrentSeconds  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>Math.floor(Date.now() / 1000));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const feeEndTime = lastDepositedTime + withdrawalFeePeriod;
        const secondsRemainingCalc = feeEndTime - currentSeconds;
        const doesUnstakingFeeApply = userShares.gt(0) && secondsRemainingCalc > 0;
        const tick = ()=>{
            setCurrentSeconds((prevSeconds)=>prevSeconds + 1);
        };
        const timerInterval = setInterval(()=>tick(), 1000);
        if (doesUnstakingFeeApply) {
            setSecondsRemaining(secondsRemainingCalc);
            setHasUnstakingFee(true);
        } else {
            setHasUnstakingFee(false);
            clearInterval(timerInterval);
        }
        return ()=>clearInterval(timerInterval);
    }, [
        lastDepositedTime,
        withdrawalFeePeriod,
        setSecondsRemaining,
        currentSeconds,
        userShares
    ]);
    return {
        hasUnstakingFee,
        secondsRemaining
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWithdrawalFeeTimer);


/***/ }),

/***/ 41731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33430);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45366);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68843);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34673);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56648);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_toString__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _Balance__WEBPACK_IMPORTED_MODULE_8__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _Balance__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BalanceWithLoading = ({ value , fontSize , ...props })=>{
    const isValueUndefinedOrNull = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(value), [
        value
    ]);
    const finalValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (isValueUndefinedOrNull) return null;
        const trimmedValue = lodash_replace__WEBPACK_IMPORTED_MODULE_4___default()(lodash_toString__WEBPACK_IMPORTED_MODULE_5___default()(value), /,/g, "");
        return lodash_isNaN__WEBPACK_IMPORTED_MODULE_3___default()(trimmedValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_3___default()(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(trimmedValue)) ? 0 : lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(trimmedValue);
    }, [
        value,
        isValueUndefinedOrNull
    ]);
    if (isValueUndefinedOrNull) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Balance__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        ...props,
        value: finalValue,
        fontSize: fontSize
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceWithLoading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e97edbbd-0"
})`
  background: ${({ theme , variant ="default"  })=>theme.card.cardHeaderBackground[variant]};
  border-radius: ${({ theme  })=>`${theme.radii.card} ${theme.radii.card} 0 0`};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
CardHeader.defaultProps = {
    p: "24px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeader);


/***/ }),

/***/ 21762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__]);
_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Slider = ({ name , min , max , value , onValueChanged , valueLabel , step ="any" , disabled =false , ...props })=>{
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ target  })=>{
        onValueChanged(parseFloat(target.value));
    }, [
        onValueChanged
    ]);
    const progressPercentage = value / max * 100;
    const isMax = value === max;
    let progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = `${progressPercentage + 0.5}%`;
    } else if (progressPercentage >= 90) {
        progressWidth = `${progressPercentage - 4}%`;
    } else if (progressPercentage >= 60) {
        progressWidth = `${progressPercentage - 2.5}%`;
    } else {
        progressWidth = `${progressPercentage}%`;
    }
    const labelProgress = isMax ? "calc(100% - 12px)" : `${progressPercentage}%`;
    const displayValueLabel = isMax ? "MAX" : valueLabel;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        position: "relative",
        height: "48px",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .BunnyButt */ .hb, {
                disabled: disabled
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .BunnySlider */ .aO, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .BarBackground */ .D0, {
                        disabled: disabled
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .BarProgress */ .lz, {
                        style: {
                            width: progressWidth
                        },
                        disabled: disabled
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledInput */ .Fy, {
                        name: name,
                        type: "range",
                        min: min,
                        max: max,
                        value: value,
                        step: step,
                        onChange: handleChange,
                        isMax: isMax,
                        disabled: disabled
                    })
                ]
            }),
            valueLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .SliderLabelContainer */ .dn, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .SliderLabel */ .PQ, {
                    progress: labelProgress,
                    children: displayValueLabel
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D0": () => (/* binding */ BarBackground),
/* harmony export */   "Fy": () => (/* binding */ StyledInput),
/* harmony export */   "PQ": () => (/* binding */ SliderLabel),
/* harmony export */   "aO": () => (/* binding */ BunnySlider),
/* harmony export */   "dn": () => (/* binding */ SliderLabelContainer),
/* harmony export */   "hb": () => (/* binding */ BunnyButt),
/* harmony export */   "lz": () => (/* binding */ BarProgress)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);


const getCursorStyle = ({ disabled =false  })=>{
    return disabled ? "not-allowed" : "cursor";
};
const bunnyHeadMax = `"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyOCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMTkiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxMSIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNOS41MDcgMjQuNzA2QzguMTQ2MzUgMjYuMDY2NiA5LjczNzk1IDI4LjIzMTMgMTEuNzU1NSAzMC4yNDg5QzEzLjc3MzEgMzIuMjY2NSAxNS45Mzc4IDMzLjg1ODEgMTcuMjk4NCAzMi40OTc0QzE4LjY1OTEgMzEuMTM2OCAxNy45Njg1IDI4LjA3MTEgMTUuOTUwOSAyNi4wNTM1QzEzLjkzMzMgMjQuMDM1OSAxMC44Njc2IDIzLjM0NTMgOS41MDcgMjQuNzA2WiIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNMTUuNTA3IDIyLjcwNkMxNC4xNDYzIDI0LjA2NjYgMTUuNzM3OSAyNi4yMzEzIDE3Ljc1NTUgMjguMjQ4OUMxOS43NzMxIDMwLjI2NjUgMjEuOTM3OCAzMS44NTgxIDIzLjI5ODQgMzAuNDk3NEMyNC42NTkxIDI5LjEzNjggMjMuOTY4NSAyNi4wNzExIDIxLjk1MDkgMjQuMDUzNUMxOS45MzMzIDIyLjAzNTkgMTYuODY3NiAyMS4zNDUzIDE1LjUwNyAyMi43MDZaIiBmaWxsPSIjMUZDN0Q0Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4xNDYgNi43NTE1OUMxNC4yMTA1IDcuMTA4OTYgMTQuMjcwMyA3LjQ4MTMxIDE0LjMyODEgNy44NjE2NEMxNC4yMTg5IDcuODU4NjUgMTQuMTA5NSA3Ljg1NzE0IDE0IDcuODU3MTRDMTMuMzgwMyA3Ljg1NzE0IDEyLjc2NDggNy45MDUzOSAxMi4xNTkgNy45OTc3OUMxMS44NzkgNy40MTQ1OCAxMS41NTQ3IDYuODIyNDYgMTEuMTg3MiA2LjIzMTQ1QzguNjk4OTcgMi4yMjk0NyA2LjUzODI2IDEuOTg2NzkgNC42Nzg4MiAyLjk4MzY2QzIuODE5MzggMy45ODA1MiAyLjg1NjI4IDYuNjc2NDQgNS4yNjY5NiA5LjQwNTM4QzUuNTgwNzYgOS43NjA2MSA1LjkwMDk3IDEwLjEzOTggNi4yMjQ3IDEwLjUyODZDMy42OTAxMyAxMi40NjU5IDIgMTUuMjY0NCAyIDE4LjI2OTVDMiAyMy44MjkyIDcuNzg1MTggMjUgMTQgMjVDMjAuMjE0OCAyNSAyNiAyMy44MjkyIDI2IDE4LjI2OTVDMjYgMTQuODY1OCAyMy44MzE4IDExLjcyNzIgMjAuNzI0MyA5LjgwNDc2QzIwLjkwMjIgOC44NjA0NCAyMSA3LjgzMDE5IDIxIDYuNzUxNTlDMjEgMi4xOTYxMiAxOS4yNTQ5IDEgMTcuMTAyMiAxQzE0Ljk0OTUgMSAxMy41MjYxIDMuMzE4NDcgMTQuMTQ2IDYuNzUxNTlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfYnVubnloZWFkX21heCkiLz4KPC9nPgo8cGF0aCBkPSJNMTEuNTA0NyAxNi4wNjM0QzEwLjk0MzUgMTQuNDQ1NiA4Ljc5Njg1IDE0LjQ0NTYgOC4wODEzMSAxNi4wNjM1IiBzdHJva2U9IiM0NTJBN0EiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjAuODg5NCAxNi4wNjM0QzIwLjMyODMgMTQuNDQ1NiAxOC4xODE2IDE0LjQ0NTYgMTcuNDY2MSAxNi4wNjM1IiBzdHJva2U9IiM0NTJBN0EiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQuNzI4NCAxNy40NDQ2QzE0Ljc5NiAxOC4zMTQ5IDE0LjQ0NDYgMjAuMDU1NiAxMi40OTggMjAuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE0Ljc0NTcgMTcuNDQ0NkMxNC42NzgxIDE4LjMxNDkgMTUuMDI5NiAyMC4wNTU2IDE2Ljk3NjEgMjAuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEzLjQ1MDUgMjAuMDc4N0MxMy40NTA1IDIxLjUwOTcgMTUuOTU1IDIxLjUwOTcgMTUuOTU1IDIwLjA3ODciIHN0cm9rZT0iIzQ1MkE3QSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjAiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC41IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl9idW5ueWhlYWRfbWF4IiB4MT0iMTQiIHkxPSIxIiB4Mj0iMTQiIHkyPSIyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNTNERUU5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFGQzdENCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg=="`;
const bunnyHeadMain = `"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyOCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMTkiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxMSIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNOS41MDcgMjQuNzA2QzguMTQ2MzUgMjYuMDY2NiA5LjczNzk1IDI4LjIzMTMgMTEuNzU1NSAzMC4yNDg5QzEzLjc3MzEgMzIuMjY2NSAxNS45Mzc4IDMzLjg1ODEgMTcuMjk4NCAzMi40OTc0QzE4LjY1OTEgMzEuMTM2OCAxNy45Njg1IDI4LjA3MTEgMTUuOTUwOSAyNi4wNTM1QzEzLjkzMzMgMjQuMDM1OSAxMC44Njc2IDIzLjM0NTMgOS41MDcgMjQuNzA2WiIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNMTUuNTA3IDIyLjcwNkMxNC4xNDYzIDI0LjA2NjYgMTUuNzM3OSAyNi4yMzEzIDE3Ljc1NTUgMjguMjQ4OUMxOS43NzMxIDMwLjI2NjUgMjEuOTM3OCAzMS44NTgxIDIzLjI5ODQgMzAuNDk3NEMyNC42NTkxIDI5LjEzNjggMjMuOTY4NSAyNi4wNzExIDIxLjk1MDkgMjQuMDUzNUMxOS45MzMzIDIyLjAzNTkgMTYuODY3NiAyMS4zNDUzIDE1LjUwNyAyMi43MDZaIiBmaWxsPSIjMUZDN0Q0Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4xNDYgNi43NTE1OUMxNC4yMTA1IDcuMTA4OTYgMTQuMjcwMyA3LjQ4MTMxIDE0LjMyODEgNy44NjE2NEMxNC4yMTg5IDcuODU4NjUgMTQuMTA5NSA3Ljg1NzE0IDE0IDcuODU3MTRDMTMuMzgwMyA3Ljg1NzE0IDEyLjc2NDggNy45MDUzOSAxMi4xNTkgNy45OTc3OUMxMS44NzkgNy40MTQ1OCAxMS41NTQ3IDYuODIyNDYgMTEuMTg3MiA2LjIzMTQ1QzguNjk4OTcgMi4yMjk0NyA2LjUzODI2IDEuOTg2NzkgNC42Nzg4MiAyLjk4MzY2QzIuODE5MzggMy45ODA1MiAyLjg1NjI4IDYuNjc2NDQgNS4yNjY5NiA5LjQwNTM4QzUuNTgwNzYgOS43NjA2MSA1LjkwMDk3IDEwLjEzOTggNi4yMjQ3IDEwLjUyODZDMy42OTAxMyAxMi40NjU5IDIgMTUuMjY0NCAyIDE4LjI2OTVDMiAyMy44MjkyIDcuNzg1MTggMjUgMTQgMjVDMjAuMjE0OCAyNSAyNiAyMy44MjkyIDI2IDE4LjI2OTVDMjYgMTQuODY1OCAyMy44MzE4IDExLjcyNzIgMjAuNzI0MyA5LjgwNDc2QzIwLjkwMjIgOC44NjA0NCAyMSA3LjgzMDE5IDIxIDYuNzUxNTlDMjEgMi4xOTYxMiAxOS4yNTQ5IDEgMTcuMTAyMiAxQzE0Ljk0OTUgMSAxMy41MjYxIDMuMzE4NDcgMTQuMTQ2IDYuNzUxNTlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfYnVubnloZWFkX21haW4pIi8+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMikiPgo8cGF0aCBkPSJNMTIuNzI4NCAxNi40NDQ2QzEyLjc5NiAxNy4zMTQ5IDEyLjQ0NDYgMTkuMDU1NiAxMC40OTggMTkuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjc0NTcgMTYuNDQ0NkMxMi42NzgxIDE3LjMxNDkgMTMuMDI5NiAxOS4wNTU2IDE0Ljk3NjEgMTkuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkgMTQuNUM5IDE1LjYwNDYgOC41NTIyOCAxNiA4IDE2QzcuNDQ3NzIgMTYgNyAxNS42MDQ2IDcgMTQuNUM3IDEzLjM5NTQgNy40NDc3MiAxMyA4IDEzQzguNTUyMjggMTMgOSAxMy4zOTU0IDkgMTQuNVoiIGZpbGw9IiM0NTJBN0EiLz4KPHBhdGggZD0iTTE4IDE0LjVDMTggMTUuNjA0NiAxNy41NTIzIDE2IDE3IDE2QzE2LjQ0NzcgMTYgMTYgMTUuNjA0NiAxNiAxNC41QzE2IDEzLjM5NTQgMTYuNDQ3NyAxMyAxNyAxM0MxNy41NTIzIDEzIDE4IDEzLjM5NTQgMTggMTQuNVoiIGZpbGw9IiM0NTJBN0EiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfYnVubnloZWFkX21haW4iIHgxPSIxNCIgeTE9IjEiIHgyPSIxNCIgeTI9IjI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM1M0RFRTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUZDN0Q0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="`;
const bunnyButt = `"data:image/svg+xml,%3Csvg width='15' height='32' viewBox='0 0 15 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z' fill='%230098A1'/%3E%3Cpath d='M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z' fill='%231FC7D4'/%3E%3Cpath d='M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z' fill='%2353DEE9'/%3E%3Cpath d='M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z' fill='%231FC7D4'/%3E%3C/svg%3E"`;
const getBaseThumbStyles = ({ isMax , disabled  })=>`
  -webkit-appearance: none;
  background-image: url(${isMax ? bunnyHeadMax : bunnyHeadMain});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 24px;
  height: 32px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, -2px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)"};
  }
`;
const SliderLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85e5838e-0"
})`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;
const SliderLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85e5838e-1"
})`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress  })=>progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;
const BunnyButt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85e5838e-2"
})`
  background: url(${bunnyButt}) no-repeat;
  height: 32px;
  filter: ${({ disabled  })=>disabled ? "grayscale(100%)" : "none"};
  position: absolute;
  width: 15px;
`;
const BunnySlider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85e5838e-3"
})`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-85e5838e-4"
})`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }
  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }
  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;
const BarBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85e5838e-5"
})`
  background-color: ${({ theme , disabled  })=>theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;
const BarProgress = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85e5838e-6"
})`
  background-color: ${({ theme  })=>theme.colors.primary};
  filter: ${({ disabled  })=>disabled ? "grayscale(100%)" : "none"};
  height: 10px;
  position: absolute;
  top: 18px;
`;


/***/ }),

/***/ 92238:
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
        viewBox: "0 0 40 40",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z",
            fill: "#F1BA0D"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72315:
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
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0, 0, 400,400",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            stroke: "none",
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M193.4 60.265C87.303 66.651 25.782 181.12 79.826 271.586c57.163 95.688 198.154 89.201 246.382-11.336C371.654 165.512 297.595 53.993 193.4 60.265m47.221 95.946c1.213.75 2.418 1.955 3.168 3.168l1.211 1.958v77.326l-1.211 1.958c-.75 1.213-1.955 2.418-3.168 3.168L238.663 245h-77.326l-1.958-1.211c-1.213-.75-2.418-1.955-3.168-3.168L155 238.663l-.119-37.831c-.08-25.344.018-38.306.297-39.267.685-2.365 2.559-4.562 4.876-5.717l2.127-1.06 38.241.106 38.241.106 1.958 1.211",
                    fill: "#fbfbfc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M183.6.43C41.847 12.741-42.613 163.705 21.396 290.354c49.819 98.572 170.31 138.107 268.958 88.25 98.572-49.819 138.107-170.31 88.25-268.958C348.052 49.197 290.688 9.389 222 .97c-6.325-.775-31.6-1.13-38.4-.54M218 60.975c81.04 11.263 135.239 87.02 119.351 166.825-15.844 79.589-97.673 129.334-175.893 106.929-74.141-21.237-117.409-99.181-96.187-173.271C81.09 106.232 129.39 66.081 186.8 60.433c5.76-.567 25.716-.22 31.2.542m-57.4 94.781c-1.92.838-3.855 2.682-4.648 4.427-.974 2.145-1.175 76.834-.213 79.13.828 1.974 2.657 3.923 4.444 4.735 2.145.974 76.834 1.175 79.13.213 1.974-.828 3.923-2.657 4.735-4.444.974-2.145 1.175-76.834.213-79.13-.828-1.974-2.657-3.923-4.444-4.735-2.115-.96-77.043-1.146-79.217-.196",
                    fill: "#0454fc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M181.5 155.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108M154.992 200c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5m90 0c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5M181.5 245.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108",
                    fill: "#5286fc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M192.7 60.282a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173M60.109 193.6c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-279.6 12.8c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-238.926 92.5c1.658 1.766 2.017 2.084 2.017 1.783 0-.064-.855-.919-1.9-1.9L99 297l1.783 1.9m198.017.1c-.972.99-1.677 1.8-1.567 1.8.11 0 .995-.81 1.967-1.8.972-.99 1.677-1.8 1.567-1.8-.11 0-.995.81-1.967 1.8m-106.1 40.882a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173",
                    fill: "#84acfc"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M100.786 101.1l-2.186 2.3 2.3-2.186c2.137-2.032 2.483-2.414 2.186-2.414-.062 0-1.097 1.035-2.3 2.3M298.8 101c1.195 1.21 2.263 2.2 2.373 2.2.11 0-.778-.99-1.973-2.2-1.195-1.21-2.263-2.2-2.373-2.2-.11 0 .778.99 1.973 2.2",
                    fill: "#7cacfc"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 61089:
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
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M11.3933 3.03997C10.9266 2.35331 10.3933 1.71331 9.79329 1.13997C9.55996 0.913306 9.16663 1.12664 9.23329 1.44664C9.35996 2.07331 9.49329 2.89997 9.49329 3.63997C9.49329 5.01331 8.59329 6.12664 7.21996 6.12664C6.19329 6.12664 5.35329 5.50664 4.98663 4.61997C4.91996 4.48664 4.89329 4.40664 4.85329 4.25997C4.77996 3.97997 4.41329 3.89331 4.25329 4.13997C4.13329 4.31997 4.01996 4.49997 3.91329 4.69331C3.11996 6.05331 2.66663 7.63997 2.66663 9.33331C2.66663 12.28 5.05329 14.6666 7.99996 14.6666C10.9466 14.6666 13.3333 12.28 13.3333 9.33331C13.3333 7.00664 12.6133 4.84664 11.3933 3.03997ZM7.80663 12.6666C6.61996 12.6666 5.65996 11.7333 5.65996 10.5733C5.65996 9.49331 6.35996 8.73331 7.53329 8.49331C8.51329 8.29331 9.51996 7.87331 10.22 7.21331C10.4066 7.03997 10.7133 7.11997 10.7666 7.36664C10.92 8.04664 11 8.75331 11 9.46664C11.0066 11.2333 9.57329 12.6666 7.80663 12.6666Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 64363:
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
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M7.99996 11.3334C8.73329 11.3334 9.33329 10.7334 9.33329 10.0001C9.33329 9.26675 8.73329 8.66675 7.99996 8.66675C7.26663 8.66675 6.66663 9.26675 6.66663 10.0001C6.66663 10.7334 7.26663 11.3334 7.99996 11.3334ZM12 5.33342H11.3333V4.00008C11.3333 2.16008 9.83996 0.666748 7.99996 0.666748C6.15996 0.666748 4.66663 2.16008 4.66663 4.00008V5.33342H3.99996C3.26663 5.33342 2.66663 5.93341 2.66663 6.66675V13.3334C2.66663 14.0667 3.26663 14.6667 3.99996 14.6667H12C12.7333 14.6667 13.3333 14.0667 13.3333 13.3334V6.66675C13.3333 5.93341 12.7333 5.33342 12 5.33342ZM5.93329 4.00008C5.93329 2.86008 6.85996 1.93341 7.99996 1.93341C9.13996 1.93341 10.0666 2.86008 10.0666 4.00008V5.33342H5.93329V4.00008ZM12 13.3334H3.99996V6.66675H12V13.3334Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 11542:
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
        viewBox: "0 0 40 40",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z",
                fill: "#E17726"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z",
                fill: "#E27625"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z",
                fill: "#D5BFB2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z",
                fill: "#D5BFB2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z",
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z",
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z",
                fill: "#CC6228"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z",
                fill: "#E27525"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z",
                fill: "#C0AC9D"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z",
                fill: "#161616"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z",
                fill: "#763E1A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z",
                fill: "#763E1A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z",
                fill: "#F5841F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z",
                fill: "#F5841F"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 94608:
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
        x: "0px",
        y: "0px",
        viewBox: "0 0 1000 1000",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: 416.6229,
                y1: 16.304,
                x2: 416.6229,
                y2: 985.446,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.3,
                        stopColor: "#ff1b2d"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.4381,
                        stopColor: "#fa1a2c"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.5939,
                        stopColor: "#ed1528"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.7581,
                        stopColor: "#d60e21"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.9272,
                        stopColor: "#b70519"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 1,
                        stopColor: "#a70014"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M335.4 781.8c-55.3-65.3-91.1-161.7-93.5-270v-23.6c2.4-108.3 38.2-204.7 93.5-270C407.2 125.1 513.8 66 632.8 66c73.2 0 141.8 22.4 200.4 61.3C745.2 48.5 629.2.5 501.9 0H500C223.9 0 0 223.9 0 500c0 268.2 211.1 487 476.2 499.4 7.9.4 15.8.6 23.8.6 128 0 244.8-48.1 333.2-127.2-58.6 38.8-127.1 61.2-200.4 61.2-119 0-225.6-59.1-297.4-152.2z",
                fill: "url(#a)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "b",
                gradientUnits: "userSpaceOnUse",
                x1: 667.7092,
                y1: 73.4257,
                x2: 667.7092,
                y2: 930.5844,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0,
                        stopColor: "#9c0000"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: 0.7,
                        stopColor: "#ff4b4b"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M335.4 218.2c45.9-54.2 105.1-86.8 169.9-86.8 145.6 0 263.5 165 263.5 368.6s-118 368.6-263.5 368.6c-64.7 0-124-32.7-169.9-86.8C407.2 874.9 513.8 934 632.8 934c73.2 0 141.8-22.4 200.4-61.2C935.6 781.2 1000 648.1 1000 500c0-148.1-64.4-281.2-166.8-372.7C774.6 88.4 706.1 66 632.8 66c-119 0-225.6 59.1-297.4 152.2z",
                fill: "url(#b)"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 47714:
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
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M9.333 2.667l1.527 1.526-1.92 1.92.947.947 1.92-1.92 1.526 1.527v-4h-4zm-2.666 0h-4v4L4.193 5.14l3.14 3.133v5.06h1.334V7.727L5.14 4.193l1.527-1.526z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 87528:
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
        viewBox: "0 0 1024 1024",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1041.52 0H-27V1024H1041.52V0Z",
                        fill: "#2980FE"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        clipPath: "url(#clip0_408_225)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M406.796 438.643H406.927C406.796 437.857 406.796 436.94 406.796 436.154V438.643Z",
                                fill: "#29AEFF"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M667.602 463.533H523.249V724.076C523.249 736.389 533.204 746.345 545.517 746.345H645.333C657.647 746.345 667.602 736.389 667.602 724.076V463.533Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M453.563 277H448.716H190.269C177.955 277 168 286.955 168 299.269V389.653C168 401.967 177.955 411.922 190.269 411.922H250.918H275.021V438.644V724.731C275.021 737.045 284.976 747 297.289 747H392.128C404.441 747 414.396 737.045 414.396 724.731V438.644V436.156V411.922H438.499H448.323H453.17C490.372 411.922 520.631 381.663 520.631 344.461C521.024 307.259 490.765 277 453.563 277Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M667.735 463.533V645.35C672.713 646.529 677.821 647.446 683.061 648.232C690.397 649.28 697.994 649.935 705.592 650.066C705.985 650.066 706.378 650.066 706.902 650.066V505.45C685.026 504.009 667.735 485.801 667.735 463.533Z",
                                fill: "url(#paint0_linear_408_225)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M709.781 277C606.822 277 523.249 360.573 523.249 463.533C523.249 552.084 584.946 626.225 667.733 645.35V463.533C667.733 440.347 686.596 421.484 709.781 421.484C732.967 421.484 751.83 440.347 751.83 463.533C751.83 483.051 738.6 499.425 720.523 504.14C717.117 505.057 713.449 505.581 709.781 505.581V650.066C713.449 650.066 716.986 649.935 720.523 649.804C818.505 644.171 896.314 562.956 896.314 463.533C896.445 360.573 812.872 277 709.781 277Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M709.78 650.066V505.581C708.733 505.581 707.816 505.581 706.768 505.45V650.066C707.816 650.066 708.864 650.066 709.78 650.066Z",
                                fill: "white"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint0_linear_408_225",
                        x1: "709.844",
                        y1: "556.827",
                        x2: "667.753",
                        y2: "556.827",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.9667",
                                stopColor: "white",
                                stopOpacity: "0.3233"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip0_408_225",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "728.448",
                            height: "470",
                            fill: "white",
                            transform: "translate(168 277)"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 41120:
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
        viewBox: "0 0 40 40",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            opacity: "0.9",
            d: "M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z",
            fill: "#3688EB"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72727:
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
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 11.333c.733 0 1.333-.6 1.333-1.333S8.733 8.667 8 8.667s-1.333.6-1.333 1.333.6 1.333 1.333 1.333zm4-6h-.667V4a3.335 3.335 0 00-6.666 0h1.266c0-1.14.927-2.067 2.067-2.067 1.14 0 2.067.927 2.067 2.067v1.333H4c-.733 0-1.333.6-1.333 1.334v6.666c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V6.667c0-.734-.6-1.334-1.333-1.334zm0 8H4V6.667h8v6.666z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=4418.js.map