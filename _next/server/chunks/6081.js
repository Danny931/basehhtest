"use strict";
exports.id = 6081;
exports.ids = [6081];
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

/***/ 72766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95555);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13745);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98706);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84208);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55733);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45867);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87837);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71892);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22702);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64820);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36806);
/* harmony import */ var utils_getPerpetualLanguageCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96141);
/* harmony import */ var utils_getPerpetualTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16741);
/* harmony import */ var config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20277);





const addMenuItemSupported = (item, chainId)=>{
    if (!chainId || !item.supportChainIds) {
        return item;
    }
    if (item.supportChainIds?.includes(chainId)) {
        return item;
    }
    return {
        ...item,
        disabled: true
    };
};
const config = (t, isDark, languageCode, chainId)=>[
        {
            label: t("Trade"),
            icon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            fillIcon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            href: "/swap",
            showItemsOnMobile: false,
            items: [
                {
                    label: t("Swap"),
                    href: "/swap"
                },
                {
                    label: t("Limit"),
                    href: "/limit-orders",
                    supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
                    image: "/images/decorations/3d-coin.png"
                },
                {
                    label: t("Liquidity"),
                    href: "/liquidity"
                },
                {
                    label: t("Perpetual"),
                    href: `https://perp.pancakeswap.finance/${(0,utils_getPerpetualLanguageCode__WEBPACK_IMPORTED_MODULE_1__/* .perpLangMap */ .o)(languageCode)}/futures/BTCUSDT?theme=${(0,utils_getPerpetualTheme__WEBPACK_IMPORTED_MODULE_5__/* .perpTheme */ .Z)(isDark)}`,
                    supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
                    type: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItemType.EXTERNAL_LINK */ .l.EXTERNAL_LINK
                },
                {
                    label: t("Bridge"),
                    href: "https://bridge.pancakeswap.finance/",
                    type: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItemType.EXTERNAL_LINK */ .l.EXTERNAL_LINK
                }, 
            ].map((item)=>addMenuItemSupported(item, chainId))
        },
        {
            label: t("Earn"),
            href: "/farms",
            icon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            fillIcon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            image: "/images/decorations/pe2.png",
            items: [
                {
                    label: t("Farms"),
                    href: "/farms"
                },
                {
                    label: t("Pools"),
                    href: "/pools",
                    supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm
                }, 
            ].map((item)=>addMenuItemSupported(item, chainId))
        },
        {
            label: t("Win"),
            href: "/prediction",
            icon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            fillIcon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
            items: [
                {
                    label: t("Trading Competition"),
                    href: "/competition",
                    image: "/images/decorations/tc.png",
                    hideSubNav: true
                },
                {
                    label: t("Prediction (BETA)"),
                    href: "/prediction",
                    image: "/images/decorations/prediction.png"
                },
                {
                    label: t("Lottery"),
                    href: "/lottery",
                    image: "/images/decorations/lottery.png"
                },
                {
                    label: t("Pottery (BETA)"),
                    href: "/pottery",
                    image: "/images/decorations/lottery.png"
                }, 
            ]
        },
        {
            label: t("NFT"),
            href: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_0__/* .nftsBaseUrl */ .V}`,
            icon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
            fillIcon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
            image: "/images/decorations/nft.png",
            items: [
                {
                    label: t("Overview"),
                    href: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_0__/* .nftsBaseUrl */ .V}`
                },
                {
                    label: t("Collections"),
                    href: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_0__/* .nftsBaseUrl */ .V}/collections`
                },
                {
                    label: t("Activity"),
                    href: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_0__/* .nftsBaseUrl */ .V}/activity`
                }, 
            ]
        },
        {
            label: "",
            href: "/info",
            icon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
            hideSubNav: true,
            items: [
                {
                    label: t("Info"),
                    href: "/info"
                },
                {
                    label: t("IFO"),
                    href: "/ifo",
                    supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
                    image: "/images/ifos/ifo-bunny.png"
                },
                {
                    label: t("Voting"),
                    href: "/voting",
                    supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
                    image: "/images/voting/voting-bunny.png"
                },
                {
                    type: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItemType.DIVIDER */ .l.DIVIDER
                },
                {
                    label: t("Leaderboard"),
                    href: "/teams",
                    supportChainIds: config_constants_supportChains__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORT_ONLY_BSC */ .Dm,
                    image: "/images/decorations/leaderboard.png"
                },
                {
                    type: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItemType.DIVIDER */ .l.DIVIDER
                },
                {
                    label: t("Blog"),
                    href: "https://medium.com/pancakeswap",
                    type: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItemType.EXTERNAL_LINK */ .l.EXTERNAL_LINK
                },
                {
                    label: t("Docs"),
                    href: "https://docs.pancakeswap.finance",
                    type: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItemType.EXTERNAL_LINK */ .l.EXTERNAL_LINK
                }, 
            ].map((item)=>addMenuItemSupported(item, chainId))
        }, 
    ].map((item)=>addMenuItemSupported(item, chainId));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 59277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useMenuItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _useMenuItemsStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9219);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, _useMenuItemsStatus__WEBPACK_IMPORTED_MODULE_4__, _config_config__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, _useMenuItemsStatus__WEBPACK_IMPORTED_MODULE_4__, _config_config__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useMenuItems = ()=>{
    const { t , currentLanguage: { code: languageCode  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { isDark  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const menuItemsStatus = (0,_useMenuItemsStatus__WEBPACK_IMPORTED_MODULE_4__/* .useMenuItemsStatus */ .J)();
    const menuItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return (0,_config_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(t, isDark, languageCode, chainId);
    }, [
        t,
        isDark,
        languageCode,
        chainId
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (menuItemsStatus && Object.keys(menuItemsStatus).length) {
            return menuItems.map((item)=>{
                const innerItems = item.items.map((innerItem)=>{
                    const itemStatus = menuItemsStatus[innerItem.href];
                    if (itemStatus) {
                        let itemMenuStatus;
                        if (itemStatus === "soon") {
                            itemMenuStatus = {
                                text: t("Soon"),
                                color: "warning"
                            };
                        } else if (itemStatus === "live") {
                            itemMenuStatus = {
                                text: t("Live"),
                                color: "failure"
                            };
                        } else if (itemStatus === "vote_now") {
                            itemMenuStatus = {
                                text: t("Vote Now"),
                                color: "success"
                            };
                        } else if (itemStatus === "pot_open") {
                            itemMenuStatus = {
                                text: t("Pot Open"),
                                color: "success"
                            };
                        } else {
                            itemMenuStatus = {
                                text: t("New"),
                                color: "success"
                            };
                        }
                        return {
                            ...innerItem,
                            status: itemMenuStatus
                        };
                    }
                    return innerItem;
                });
                return {
                    ...item,
                    items: innerItems
                };
            });
        }
        return menuItems;
    }, [
        t,
        menuItems,
        menuItemsStatus
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useMenuItemsStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21791);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26488);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93638);
/* harmony import */ var views_Ifos_hooks_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35669);
/* harmony import */ var _usePotteryStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40683);
/* harmony import */ var _useCompetitionStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83106);
/* harmony import */ var _useVotingStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_2__, state_block_hooks__WEBPACK_IMPORTED_MODULE_3__, _usePotteryStatus__WEBPACK_IMPORTED_MODULE_5__, _useCompetitionStatus__WEBPACK_IMPORTED_MODULE_6__, _useVotingStatus__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_2__, state_block_hooks__WEBPACK_IMPORTED_MODULE_3__, _usePotteryStatus__WEBPACK_IMPORTED_MODULE_5__, _useCompetitionStatus__WEBPACK_IMPORTED_MODULE_6__, _useVotingStatus__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useMenuItemsStatus = ()=>{
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useChainCurrentBlock */ .Mm)(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC);
    const activeIfo = (0,hooks_useActiveIfoWithBlocks__WEBPACK_IMPORTED_MODULE_2__/* .useActiveIfoWithBlocks */ .A)();
    const competitionStatus = (0,_useCompetitionStatus__WEBPACK_IMPORTED_MODULE_6__/* .useCompetitionStatus */ .U)();
    const potteryStatus = (0,_usePotteryStatus__WEBPACK_IMPORTED_MODULE_5__/* .usePotteryStatus */ .I)();
    const votingStatus = (0,_useVotingStatus__WEBPACK_IMPORTED_MODULE_7__/* .useVotingStatus */ .I)();
    const ifoStatus = currentBlock && activeIfo && activeIfo.endBlock > currentBlock ? (0,views_Ifos_hooks_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getStatus */ .l)(currentBlock, activeIfo.startBlock, activeIfo.endBlock) : null;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return {
            "/competition": competitionStatus,
            "/ifo": ifoStatus === "coming_soon" ? "soon" : ifoStatus,
            ...potteryStatus === state_types__WEBPACK_IMPORTED_MODULE_4__/* .PotteryDepositStatus.BEFORE_LOCK */ .lS.BEFORE_LOCK && {
                "/pottery": "pot_open"
            },
            ...votingStatus && {
                "/voting": "vote_now"
            }
        };
    }, [
        competitionStatus,
        ifoStatus,
        potteryStatus,
        votingStatus
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ usePotteryStatus)
/* harmony export */ });
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79847);
/* harmony import */ var state_pottery_fetchPottery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27041);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_0__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const usePotteryStatus = ()=>{
    const { data: potteryStatus  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__["default"])("potteryLastStatus", async ()=>{
        const lastVaultAddress = await (0,state_pottery_fetchPottery__WEBPACK_IMPORTED_MODULE_1__/* .fetchLastVaultAddress */ .lS)();
        const potteryVaultContract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getPotteryVaultContract */ .s4)(lastVaultAddress);
        return potteryVaultContract.getStatus();
    });
    return potteryStatus;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useVotingStatus)
/* harmony export */ });
/* unused harmony export getActiveCoreProposal */
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79847);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93638);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10494);
/* harmony import */ var views_Voting_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36957);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_0__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const getActiveCoreProposal = async ()=>{
    const response = await graphql_request__WEBPACK_IMPORTED_MODULE_2___default()(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .SNAPSHOT_API */ .TY, graphql_request__WEBPACK_IMPORTED_MODULE_2__.gql`
      query getProposals($first: Int!, $skip: Int!, $state: String!, $admins: [String]!) {
        proposals(first: $first, skip: $skip, where: { author_in: $admins, space_in: "${views_Voting_config__WEBPACK_IMPORTED_MODULE_4__/* .PANCAKE_SPACE */ .Q8}", state: $state }) {
          id
        }
      }
    `, {
        first: 1,
        skip: 0,
        state: state_types__WEBPACK_IMPORTED_MODULE_1__/* .ProposalState.ACTIVE */ .r7.ACTIVE,
        admins: views_Voting_config__WEBPACK_IMPORTED_MODULE_4__/* .ADMINS */ .F_
    });
    return response.proposals;
};
const useVotingStatus = ()=>{
    const { data: proposals = []  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__["default"])("anyActiveCoreProposals", getActiveCoreProposal);
    return Boolean(proposals.length);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getActiveMenuItem),
/* harmony export */   "u": () => (/* binding */ getActiveSubMenuItem)
/* harmony export */ });
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_0__);

const getActiveMenuItem = ({ pathname , menuConfig  })=>menuConfig.find((menuItem)=>pathname.startsWith(menuItem.href) || getActiveSubMenuItem({
            menuItem,
            pathname
        }));
const getActiveSubMenuItem = ({ pathname , menuItem  })=>{
    const activeSubMenuItems = menuItem?.items.filter((subMenuItem)=>pathname.startsWith(subMenuItem.href)) ?? [];
    // Pathname doesn't include any submenu item href - return undefined
    if (!activeSubMenuItems || activeSubMenuItems.length === 0) {
        return undefined;
    }
    // Pathname includes one sub menu item href - return it
    if (activeSubMenuItems.length === 1) {
        return activeSubMenuItems[0];
    }
    // Pathname includes multiple sub menu item hrefs - find the most specific match
    const mostSpecificMatch = lodash_orderBy__WEBPACK_IMPORTED_MODULE_0___default()(activeSubMenuItems, (subMenuItem)=>subMenuItem.href.length, "desc")[0];
    return mostSpecificMatch;
};


/***/ }),

/***/ 60276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ NetworkModal),
/* harmony export */   "v": () => (/* binding */ hideWrongNetworkModalAtom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19206);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40495);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82451);
/* harmony import */ var config_constants_supportChains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20277);
/* harmony import */ var _UnsupportedNetworkModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2501);
/* harmony import */ var _WrongNetworkModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42010);
/* harmony import */ var _PageNetworkSupportModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54077);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_6__, _UnsupportedNetworkModal__WEBPACK_IMPORTED_MODULE_8__, _WrongNetworkModal__WEBPACK_IMPORTED_MODULE_9__, _PageNetworkSupportModal__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_6__, _UnsupportedNetworkModal__WEBPACK_IMPORTED_MODULE_8__, _WrongNetworkModal__WEBPACK_IMPORTED_MODULE_9__, _PageNetworkSupportModal__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const hideWrongNetworkModalAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.atom)(false);
const NetworkModal = ({ pageSupportedChains =config_constants_supportChains__WEBPACK_IMPORTED_MODULE_7__/* .SUPPORT_ONLY_BSC */ .Dm  })=>{
    const { chainId , chain , isWrongNetwork  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { chains  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useNetwork)();
    const [dismissWrongNetwork, setDismissWrongNetwork] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(hideWrongNetworkModalAtom);
    const isBNBOnlyPage = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        return pageSupportedChains?.length === 1 && pageSupportedChains[0] === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__.ChainId.BSC;
    }, [
        pageSupportedChains
    ]);
    const isPageNotSupported = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>Boolean(pageSupportedChains.length) && !pageSupportedChains.includes(chainId), [
        chainId,
        pageSupportedChains
    ]);
    if (isPageNotSupported && isBNBOnlyPage) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .ModalV2 */ .k, {
            isOpen: true,
            closeOnOverlayClick: false,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageNetworkSupportModal__WEBPACK_IMPORTED_MODULE_10__/* .PageNetworkSupportModal */ .w, {})
        });
    }
    if ((chain?.unsupported ?? false) || isPageNotSupported) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .ModalV2 */ .k, {
            isOpen: true,
            closeOnOverlayClick: false,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnsupportedNetworkModal__WEBPACK_IMPORTED_MODULE_8__/* .UnsupportedNetworkModal */ .a, {
                pageSupportedChains: pageSupportedChains?.length ? pageSupportedChains : utils_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .CHAIN_IDS */ .vo
            })
        });
    }
    if (isWrongNetwork && !dismissWrongNetwork) {
        const currentChain = chains.find((c)=>c.id === chainId);
        if (!currentChain) return null;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .ModalV2 */ .k, {
            isOpen: isWrongNetwork,
            closeOnOverlayClick: true,
            onDismiss: ()=>setDismissWrongNetwork(true),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WrongNetworkModal__WEBPACK_IMPORTED_MODULE_9__/* .WrongNetworkModal */ .u, {
                currentChain: currentChain,
                onDismiss: ()=>setDismissWrongNetwork(true)
            })
        });
    }
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ PageNetworkSupportModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77454);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35643);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65342);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40495);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var contexts_HistoryContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12071);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59277);
/* harmony import */ var components_Menu_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4376);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_10__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__, components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_10__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function PageNetworkSupportModal() {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const { switchNetworkAsync , isLoading , canSwitch  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__/* .useSwitchNetwork */ .g)();
    const switchNetworkLocal = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__/* .useSwitchNetworkLocal */ .n)();
    const { chainId , isConnected , isWrongNetwork  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const foundChain = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>utils_wagmi__WEBPACK_IMPORTED_MODULE_5__/* .chains.find */ .p5.find((c)=>c.id === chainId), [
        chainId
    ]);
    const historyManager = (0,contexts_HistoryContext__WEBPACK_IMPORTED_MODULE_8__/* .useHistory */ .k)();
    const lastValidPath = historyManager?.history?.find((h)=>[
            "/swap",
            "liquidity",
            "/",
            "/info"
        ].includes(h));
    const menuItems = (0,components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_10__/* .useMenuItems */ .J)();
    const { pathname , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { title , image  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        const activeMenuItem = (0,components_Menu_utils__WEBPACK_IMPORTED_MODULE_11__/* .getActiveMenuItem */ .t)({
            menuConfig: menuItems,
            pathname
        });
        const activeSubMenuItem = (0,components_Menu_utils__WEBPACK_IMPORTED_MODULE_11__/* .getActiveSubMenuItem */ .u)({
            menuItem: activeMenuItem,
            pathname
        });
        return {
            title: activeSubMenuItem?.disabled ? activeSubMenuItem?.label : activeMenuItem?.label,
            image: activeSubMenuItem?.image || activeMenuItem?.image
        };
    }, [
        menuItems,
        pathname
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
        title: title || t("Check your network"),
        hideCloseButton: true,
        headerBackground: "gradientCardHeader",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            style: {
                gap: "16px"
            },
            maxWidth: "360px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    bold: true,
                    children: t("It’s a BNB Smart Chain only feature")
                }),
                image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    mx: "auto",
                    my: "8px",
                    position: "relative",
                    width: "100%",
                    minHeight: "250px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: image,
                        alt: "feature",
                        fill: true,
                        style: {
                            objectFit: "contain"
                        },
                        unoptimized: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    small: true,
                    children: t("Our Pools, Limit, Trading Competition, Prediction, Lottery and NFTs features are currently available only on BNB Chain! Come over and join the community in the fun!")
                }),
                canSwitch ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    variant: foundChain && lastValidPath ? "secondary" : "primary",
                    isLoading: isLoading,
                    onClick: ()=>isWrongNetwork ? switchNetworkLocal(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC) : switchNetworkAsync(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC),
                    children: t("Switch to %chain%", {
                        chain: "BNB Smart Chain"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    variant: "danger",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* .MessageText */ .Y, {
                        children: t("Unable to switch network. Please try it on your wallet")
                    })
                }),
                isConnected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    variant: "secondary",
                    onClick: ()=>logout().then(()=>{
                            push("/");
                        }),
                    children: t("Disconnect Wallet")
                }),
                foundChain && lastValidPath && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                    href: lastValidPath,
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        as: "a",
                        children: t("Stay on %chain%", {
                            chain: foundChain.name
                        })
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ UnsupportedNetworkModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85306);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76166);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35643);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16895);
/* harmony import */ var components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59277);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Menu_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4376);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Loader_Dots__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_1__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_1__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














// Where chain is not supported or page not supported
function UnsupportedNetworkModal({ pageSupportedChains  }) {
    const { switchNetworkAsync , isLoading , canSwitch  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__/* .useSwitchNetwork */ .g)();
    const switchNetworkLocal = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_3__/* .useSwitchNetworkLocal */ .n)();
    const { chains  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useNetwork)();
    const chainId = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_1__/* .useLocalNetworkChain */ .Z)() || _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC;
    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const menuItems = (0,components_Menu_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_6__/* .useMenuItems */ .J)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const title = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(()=>{
        const activeMenuItem = (0,components_Menu_utils__WEBPACK_IMPORTED_MODULE_8__/* .getActiveMenuItem */ .t)({
            menuConfig: menuItems,
            pathname
        });
        const activeSubMenuItem = (0,components_Menu_utils__WEBPACK_IMPORTED_MODULE_8__/* .getActiveSubMenuItem */ .u)({
            menuItem: activeMenuItem,
            pathname
        });
        return activeSubMenuItem?.label || activeMenuItem?.label;
    }, [
        menuItems,
        pathname
    ]);
    const supportedMainnetChains = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(()=>chains.filter((chain)=>!chain.testnet && pageSupportedChains?.includes(chain.id)), [
        chains,
        pageSupportedChains
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        title: t("Check your network"),
        hideCloseButton: true,
        headerBackground: "gradientCardHeader",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            style: {
                gap: "16px"
            },
            maxWidth: "336px",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    children: [
                        t("Currently %feature% only supported in", {
                            feature: typeof title === "string" ? title : "this page"
                        }),
                        " ",
                        supportedMainnetChains?.map((c)=>c.name).join(", ")
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        layout: "fixed",
                        width: "194px",
                        height: "175px",
                        src: "/images/check-your-network.png",
                        alt: "check your network"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    variant: "warning",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .MessageText */ .Y, {
                        children: t("Please switch your network to continue.")
                    })
                }),
                canSwitch ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    isLoading: isLoading,
                    onClick: ()=>{
                        if (supportedMainnetChains.map((c)=>c.id).includes(chainId)) {
                            switchNetworkAsync(chainId);
                        } else {
                            switchNetworkAsync(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC);
                        }
                    },
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_Dots__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: t("Switch network in wallet")
                    }) : t("Switch network in wallet")
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    variant: "danger",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .MessageText */ .Y, {
                        children: t("Unable to switch network. Please try it on your wallet")
                    })
                }),
                isConnected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    variant: "secondary",
                    onClick: ()=>logout().then(()=>{
                            switchNetworkLocal(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_11__.ChainId.BSC);
                        }),
                    children: t("Disconnect Wallet")
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ WrongNetworkModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24761);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85306);
/* harmony import */ var components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10886);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16895);
/* harmony import */ var hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30914);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35643);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77454);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Loader_Dots__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__, hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__, hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// Where page network is not equal to wallet network
function WrongNetworkModal({ currentChain , onDismiss  }) {
    const { switchNetworkAsync , isLoading , canSwitch  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_6__/* .useSwitchNetwork */ .g)();
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useNetwork)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)();
    const [, setSessionChainId] = (0,hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__/* .useSessionChainId */ .o)();
    const chainId = currentChain.id || _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__.ChainId.BSC;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const switchText = t("Switch to %network%", {
        network: currentChain.name
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
        title: t("You are in wrong network"),
        headerBackground: "gradientCardHeader",
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            style: {
                gap: "16px"
            },
            maxWidth: "336px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    children: t("This page is located for %network%.", {
                        network: currentChain.name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    children: t("You are under %network% now, please switch the network to continue.", {
                        network: chain?.name ?? ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                        width: 184,
                        height: 140,
                        src: "/images/decorations/3d-pan-bunny.png",
                        alt: "check your network"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    variant: "warning",
                    icon: false,
                    p: "8px 12px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* .MessageText */ .Y, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            gap: "12px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    gap: "6px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_3__/* .ChainLogo */ .E, {
                                            chainId: chain?.id
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            color: "#D67E0A"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_3__/* .ChainLogo */ .E, {
                                            chainId: chainId
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: t("Switch network to continue.")
                                })
                            ]
                        })
                    })
                }),
                canSwitch ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    isLoading: isLoading,
                    onClick: ()=>switchNetworkAsync(chainId),
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_Dots__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: switchText
                    }) : switchText
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    variant: "danger",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* .MessageText */ .Y, {
                        children: t("Unable to switch network. Please try it on your wallet")
                    })
                }),
                isConnected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    onClick: ()=>logout().then(()=>{
                            setSessionChainId(chainId);
                        }),
                    variant: "secondary",
                    children: t("Disconnect Wallet")
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* reexport safe */ _NetworkModal__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "v": () => (/* reexport safe */ _NetworkModal__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _NetworkModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NetworkModal__WEBPACK_IMPORTED_MODULE_0__]);
_NetworkModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 12071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ HistoryManagerProvider),
/* harmony export */   "k": () => (/* binding */ useHistory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const historyManagerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
function HistoryManagerProvider({ children  }) {
    const value = useHistoryManager();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(historyManagerContext.Provider, {
        value: value,
        children: children
    });
}
const useHistory = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(historyManagerContext);
function useHistoryManager() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: history , 1: setHistory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>[
            router?.asPath
        ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleRouteChange = (url, { shallow  })=>{
            if (!shallow) {
                setHistory((prevState)=>[
                        ...prevState,
                        url
                    ]);
            }
        };
        router.beforePopState(()=>{
            setHistory((prevState)=>prevState.slice(0, -2));
            return true;
        });
        router.events.on("routeChangeStart", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        history,
        canGoBack: ()=>history.length > 1
    };
}


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

/***/ 35643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useSwitchNetwork),
/* harmony export */   "n": () => (/* binding */ useSwitchNetworkLocal)
/* harmony export */ });
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91397);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92151);
/* harmony import */ var config_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86930);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useSessionChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30914);
/* harmony import */ var _useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([config_wallet__WEBPACK_IMPORTED_MODULE_3__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, _useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([config_wallet__WEBPACK_IMPORTED_MODULE_3__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, _useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable consistent-return */ 








function useSwitchNetworkLocal() {
    const [, setSessionChainId] = (0,_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__/* .useSessionChainId */ .o)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((chainId)=>{
        setSessionChainId(chainId);
        (0,_pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("chainId", chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.BSC ? null : chainId);
    }, [
        setSessionChainId
    ]);
}
function useSwitchNetwork() {
    const [loading, setLoading] = (0,_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_6__/* .useSwitchNetworkLoading */ .c)();
    const { switchNetworkAsync: _switchNetworkAsync , isLoading: _isLoading , switchNetwork: _switchNetwork , ...switchNetworkArgs } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSwitchNetwork)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* .useToast */ .p)();
    const { isConnected , connector  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();
    const switchNetworkLocal = useSwitchNetworkLocal();
    const isLoading = _isLoading || loading;
    const switchNetworkAsync = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (chainId)=>{
        if (isConnected && typeof _switchNetworkAsync === "function") {
            if (isLoading) return;
            setLoading(true);
            return _switchNetworkAsync(chainId).then((c)=>{
                // well token pocket
                if (window.ethereum?.isTokenPocket === true) {
                    switchNetworkLocal(chainId);
                    window.location.reload();
                }
                return c;
            }).catch(()=>{
                // TODO: review the error
                toastError(t("Error connecting, please retry and confirm in wallet!"));
            }).finally(()=>setLoading(false));
        }
        return new Promise(()=>{
            switchNetworkLocal(chainId);
        });
    }, [
        isConnected,
        _switchNetworkAsync,
        isLoading,
        setLoading,
        toastError,
        t,
        switchNetworkLocal
    ]);
    const switchNetwork = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((chainId)=>{
        if (isConnected && typeof _switchNetwork === "function") {
            return _switchNetwork(chainId);
        }
        return switchNetworkLocal(chainId);
    }, [
        _switchNetwork,
        isConnected,
        switchNetworkLocal
    ]);
    const canSwitch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>isConnected ? !!_switchNetworkAsync && connector.id !== config_wallet__WEBPACK_IMPORTED_MODULE_3__/* .ConnectorNames.WalletConnect */ .Mt.WalletConnect && !( false && // @ts-ignore // TODO: add type later
        (0)) : true, [
        _switchNetworkAsync,
        isConnected,
        connector
    ]);
    return {
        ...switchNetworkArgs,
        switchNetwork,
        switchNetworkAsync,
        isLoading,
        canSwitch
    };
}

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

/***/ 36957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4": () => (/* binding */ PROPOSALS_TO_SHOW),
/* harmony export */   "F_": () => (/* binding */ ADMINS),
/* harmony export */   "Gs": () => (/* binding */ IPFS_GATEWAY),
/* harmony export */   "Q8": () => (/* binding */ PANCAKE_SPACE),
/* harmony export */   "V5": () => (/* binding */ VOTE_THRESHOLD)
/* harmony export */ });
/* unused harmony export SNAPSHOT_VERSION */
const PROPOSALS_TO_SHOW = 10;
const ADMINS = [
    "0x842B508681eE336E74600974B4623B709477d29D",
    "0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7",
    "0xa3D2124E4023ea5c74dC749012E0B46E42bDD648"
].map((address)=>address.toLowerCase());
const IPFS_GATEWAY = "https://gateway.ipfs.io/ipfs";
const SNAPSHOT_VERSION = "0.1.3";
const PANCAKE_SPACE = "cakevote.eth";
const VOTE_THRESHOLD = 10;


/***/ }),

/***/ 98706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ DropdownMenuItemType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DropdownMenuItemType;
(function(DropdownMenuItemType) {
    DropdownMenuItemType[DropdownMenuItemType["INTERNAL_LINK"] = 0] = "INTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["EXTERNAL_LINK"] = 1] = "EXTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["BUTTON"] = 2] = "BUTTON";
    DropdownMenuItemType[DropdownMenuItemType["DIVIDER"] = 3] = "DIVIDER";
})(DropdownMenuItemType || (DropdownMenuItemType = {}));


/***/ }),

/***/ 84208:
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
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 55733:
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
        viewBox: "0 0 22 20",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.207 17.836a1 1 0 011-1v-2a1 1 0 01-1-1v-2a1 1 0 011-1h2.404l-1.904-3.728a6 6 0 00-3.234-2.889l1.05-2.801a.75.75 0 00-.825-1.004l-5.24.874a.75.75 0 00-.547 1.075l.945 1.889a6 6 0 00-3.15 2.856l-2.042 4c-2.038 3.992.861 8.728 5.344 8.728h4.398c.635 0 1.239-.095 1.801-.27v-1.73zM8.171 7.086a.75.75 0 01.75.75v.302a2.25 2.25 0 011.476 1.082l.14.244a.75.75 0 11-1.303.745l-.14-.245a.75.75 0 00-.65-.378h-.487a.75.75 0 100 1.5h.687a2.25 2.25 0 01.277 4.484v.266a.75.75 0 01-1.5 0v-.3a2.25 2.25 0 01-1.476-1.083l-.14-.244a.75.75 0 011.303-.745l.14.245a.75.75 0 00.65.377h.746a.75.75 0 100-1.5h-.687a2.25 2.25 0 01-.536-4.435v-.315a.75.75 0 01.75-.75z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.707 14.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 11.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 17.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 64820:
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
            d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
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

/***/ 22702:
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
        viewBox: "0 0 19 20",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M9.853.8a1 1 0 00-1.706 0L4.43 6.882a1 1 0 00.853 1.522h7.434a1 1 0 00.853-1.522L9.853.8zm4.647 9.604c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zM0 16.904a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H2a2 2 0 00-2 2v4z"
        })
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

/***/ 13745:
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
        viewBox: "0 0 20 20",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1.87 6.163a.75.75 0 01-1.06-1.06l2.608-2.61H1.694a.75.75 0 110-1.5h3.535a.75.75 0 01.75.75V5.28a.75.75 0 11-1.5 0V3.554L1.87 6.164zM13.072 1.976a5 5 0 01.421 9.983A6.505 6.505 0 008.09 6.555a5 5 0 014.982-4.579z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.072 12.976a5 5 0 10-10 0 5 5 0 0010 0zM19.26 14.213a.75.75 0 010 1.061l-2.61 2.609h1.726a.75.75 0 010 1.5H14.84a.75.75 0 01-.75-.75v-3.536a.75.75 0 011.5 0v1.725l2.609-2.609a.75.75 0 011.06 0z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 45867:
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
        viewBox: "0 0 19 17",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.5 2h-2a2 2 0 00-2-2h-6a2 2 0 00-2 2h-2c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 008.5 12.9V15h-3a1 1 0 100 2h8a1 1 0 100-2h-3v-2.1a5.01 5.01 0 003.61-2.96C16.58 9.63 18.5 7.55 18.5 5V4c0-1.1-.9-2-2-2zm-14 3V4h2v3.82C3.34 7.4 2.5 6.3 2.5 5zm7 6c-1.65 0-3-1.35-3-3V2h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V4h2v1z"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 87837:
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
        viewBox: "0 0 18 20",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.95.446a1.5 1.5 0 00-1.11 1.808c.08.327.457 1.213.877 2.15H2c-1.1 0-2 .9-2 2v1c0 .319.03.63.087.931.401 2.111 2.142 3.738 4.303 4.009A5.01 5.01 0 008 15.304v2.1H5a1 1 0 100 2h8.006a1 1 0 00-.006-2h-3v-2.1a5.013 5.013 0 003.61-2.96c.309-.039.609-.105.898-.197C16.53 11.507 18 9.635 18 7.404v-1c0-1.1-.9-2-2-2h-3.718c.42-.937.798-1.823.877-2.15a1.5 1.5 0 00-2.918-.7l-.683 2.85H8.442l-.684-2.85A1.5 1.5 0 005.949.446zM16 7.404c0 1.3-.84 2.4-2 2.82v-3.82h2v1zm-12 2.82c-1.16-.42-2-1.52-2-2.82v-1h2v3.82z"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=6081.js.map