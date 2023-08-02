"use strict";
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 46045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41742);
/* harmony import */ var _AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const RecentCakeProfitBalance = ({ cakeToDisplay , pool , account ,  })=>{
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        pool: pool,
        account: account
    }), {
        placement: "bottom-end"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ref: targetRef,
                small: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    fontSize: "14px",
                    value: cakeToDisplay
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentCakeProfitBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57268);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9681);
/* harmony import */ var _RecentCakeProfitBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46045);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _RecentCakeProfitBalance__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _RecentCakeProfitBalance__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const RecentCakeProfitCountdownRow = ({ pool  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { pricePerFullShare , userData  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePriceCakeBusd */ .Iu)();
    const { hasAutoEarnings , autoCakeToDisplay  } = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getCakeVaultEarnings */ .UN)(account, userData.cakeAtLastUserAction, userData.userShares, pricePerFullShare, cakePriceBusd.toNumber(), pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault ? userData.currentPerformanceFee.plus(userData.currentOverdueFee) : null);
    if (!(userData.userShares.gt(0) && account)) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                fontSize: "14px",
                children: `${t("Recent CAKE profit")}:`
            }),
            hasAutoEarnings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecentCakeProfitBalance__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                cakeToDisplay: autoCakeToDisplay,
                pool: pool,
                account: account
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentCakeProfitCountdownRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ StakingApy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67891);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63799);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27156);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53887);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_1__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([components_Card__WEBPACK_IMPORTED_MODULE_1__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const AprLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e707b195-0"
})`
  &:hover {
    opacity: 0.5;
  }
`;
const StakingApy = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(({ pool  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { flexibleApy , lockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__/* .useVaultApy */ .o)();
    const [onPresentFlexibleApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_7__/* .VaultRoiCalculatorModal */ .E, {
        pool: pool
    }));
    const [onPresentLockedApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_7__/* .VaultRoiCalculatorModal */ .E, {
        pool: pool,
        initialView: 1
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_1__/* .LightGreyCard */ .m5, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textTransform: "uppercase",
                        bold: true,
                        fontSize: "12px",
                        children: [
                            t("Flexible"),
                            " APY:"
                        ]
                    }),
                    flexibleApy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AprLabelContainer, {
                        alignItems: "center",
                        justifyContent: "flex-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                fontSize: "16px",
                                value: parseFloat(flexibleApy),
                                decimals: 2,
                                unit: "%",
                                bold: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onPresentFlexibleApyModal();
                                },
                                variant: "text",
                                width: "20px",
                                height: "20px",
                                padding: "0px",
                                marginLeft: "4px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    color: "textSubtle",
                                    width: "20px"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        width: "80px",
                        height: "16px"
                    })
                ]
            }),
            pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textTransform: "uppercase",
                        bold: true,
                        fontSize: "12px",
                        children: [
                            t("Locked"),
                            " APY:"
                        ]
                    }),
                    lockedApy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        gap: "4px",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                style: {
                                    whiteSpace: "nowrap"
                                },
                                bold: true,
                                children: t("Up to")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AprLabelContainer, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        fontSize: "16px",
                                        value: parseFloat(lockedApy),
                                        decimals: 2,
                                        unit: "%",
                                        bold: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onPresentLockedApyModal();
                                        },
                                        variant: "text",
                                        width: "20px",
                                        height: "20px",
                                        padding: "0px",
                                        marginLeft: "4px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            width: "20px"
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        width: "80px",
                        height: "16px"
                    })
                ]
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93314);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24671);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93638);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57268);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69688);
/* harmony import */ var _VaultStakeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83115);
/* harmony import */ var _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__, _VaultStakeModal__WEBPACK_IMPORTED_MODULE_6__, _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__, _VaultStakeModal__WEBPACK_IMPORTED_MODULE_6__, _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const HasSharesActions = ({ pool , stakingTokenBalance , performanceFee ,  })=>{
    const { userData: { balance: { cakeAsBigNumber , cakeAsNumberBalance  } ,  } ,  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { stakingToken  } = pool;
    const cakePriceBusd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePriceCakeBusd */ .Iu)();
    const stakedDollarValue = cakePriceBusd.gt(0) ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_1__/* .getBalanceNumber */ .mW)(cakeAsBigNumber.multipliedBy(cakePriceBusd), stakingToken.decimals) : 0;
    const [onPresentTokenRequired] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        tokenSymbol: stakingToken.symbol
    }));
    const [onPresentStake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VaultStakeModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        stakingMax: stakingTokenBalance,
        performanceFee: performanceFee,
        pool: pool
    }));
    const [onPresentUnstake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VaultStakeModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        stakingMax: cakeAsBigNumber,
        pool: pool,
        isRemovingStake: true
    }), true, true, "withdraw-vault");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                mb: "16px",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                fontSize: "20px",
                                bold: true,
                                value: cakeAsNumberBalance,
                                decimals: 5
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                fontSize: "12px",
                                color: "textSubtle",
                                flexWrap: "wrap",
                                children: cakePriceBusd.gt(0) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    value: stakedDollarValue,
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    decimals: 2,
                                    prefix: "~",
                                    unit: " USD"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    mt: "1px",
                                    height: 16,
                                    width: 64
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                variant: "secondary",
                                onClick: onPresentUnstake,
                                mr: "6px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    color: "primary",
                                    width: "24px"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                variant: "secondary",
                                onClick: stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    color: "primary",
                                    width: "24px",
                                    height: "24px"
                                })
                            })
                        ]
                    })
                ]
            }),
            pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_2__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                mb: "16px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    stakingToken: stakingToken,
                    currentStakedAmount: cakeAsNumberBalance
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HasSharesActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _hooks_useApprove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useApprove__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_hooks_useApprove__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const VaultApprovalAction = ({ vaultKey , isLoading =false , setLastUpdated ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { handleApprove , pendingTx  } = (0,_hooks_useApprove__WEBPACK_IMPORTED_MODULE_2__/* .useVaultApprove */ .Le)(vaultKey, setLastUpdated);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            width: "100%",
            height: "52px"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            isLoading: pendingTx,
            endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                spin: true,
                color: "currentColor"
            }) : null,
            disabled: pendingTx,
            onClick: handleApprove,
            width: "100%",
            children: t("Enable")
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VaultApprovalAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33430);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93638);
/* harmony import */ var _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69688);
/* harmony import */ var _Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68528);
/* harmony import */ var _VaultStakeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83115);
/* harmony import */ var _LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26595);
/* harmony import */ var _HasSharesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_2__, _Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_3__, _VaultStakeModal__WEBPACK_IMPORTED_MODULE_4__, _LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_5__, _HasSharesActions__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_2__, _Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_3__, _VaultStakeModal__WEBPACK_IMPORTED_MODULE_4__, _LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_5__, _HasSharesActions__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const VaultStakeActions = ({ pool , stakingTokenBalance , accountHasSharesStaked , performanceFee ,  })=>{
    const { stakingToken , userDataLoaded  } = pool;
    const [onPresentTokenRequired] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        tokenSymbol: stakingToken.symbol
    }));
    const [onPresentStake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VaultStakeModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        stakingMax: stakingTokenBalance,
        pool: pool,
        performanceFee: performanceFee
    }));
    const [openPresentLockedStakeModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        currentBalance: stakingTokenBalance,
        stakingToken: stakingToken,
        stakingTokenBalance: stakingTokenBalance
    }));
    const renderStakeAction = ()=>{
        return accountHasSharesStaked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HasSharesActions__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            pool: pool,
            stakingTokenBalance: stakingTokenBalance,
            performanceFee: performanceFee
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_3__/* .VaultStakeButtonGroup */ .w, {
            onFlexibleClick: stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired,
            onLockedClick: pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_1__/* .VaultKey.CakeVault */ .om.CakeVault ? openPresentLockedStakeModal : null
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: userDataLoaded ? renderStakeAction() : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            width: "100%",
            height: "52px"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VaultStakeActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85576);
/* harmony import */ var _VaultApprovalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39866);
/* harmony import */ var _VaultStakeActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36989);
/* harmony import */ var _hooks_useApprove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VaultApprovalAction__WEBPACK_IMPORTED_MODULE_5__, _VaultStakeActions__WEBPACK_IMPORTED_MODULE_6__, _hooks_useApprove__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_VaultApprovalAction__WEBPACK_IMPORTED_MODULE_5__, _VaultStakeActions__WEBPACK_IMPORTED_MODULE_6__, _hooks_useApprove__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const InlineText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d09e18e9-0"
})`
  display: inline;
`;
const CakeVaultCardActions = ({ pool , accountHasSharesStaked , isLoading , performanceFee  })=>{
    const { stakingToken , userData  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const stakingTokenBalance = userData?.stakingTokenBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.stakingTokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__/* .BIG_ZERO */ .HW;
    const { isVaultApproved , setLastUpdated  } = (0,_hooks_useApprove__WEBPACK_IMPORTED_MODULE_7__/* .useCheckVaultApprovalStatus */ .dI)(pool.vaultKey);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    display: "inline",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InlineText, {
                            color: accountHasSharesStaked ? "secondary" : "textSubtle",
                            textTransform: "uppercase",
                            bold: true,
                            fontSize: "12px",
                            children: [
                                accountHasSharesStaked ? stakingToken.symbol : t("Stake"),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InlineText, {
                            color: accountHasSharesStaked ? "textSubtle" : "secondary",
                            textTransform: "uppercase",
                            bold: true,
                            fontSize: "12px",
                            children: accountHasSharesStaked ? t("Staked") : `${stakingToken.symbol}`
                        })
                    ]
                }),
                isVaultApproved ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VaultStakeActions__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    pool: pool,
                    stakingTokenBalance: stakingTokenBalance,
                    accountHasSharesStaked: accountHasSharesStaked,
                    performanceFee: performanceFee
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VaultApprovalAction__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    vaultKey: pool.vaultKey,
                    isLoading: isLoading,
                    setLastUpdated: setLastUpdated
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CakeVaultCardActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ CakeVaultDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63799);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(83548);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39480);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73486);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93638);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PoolCard_CardFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45249);
/* harmony import */ var _PoolCard_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36728);
/* harmony import */ var _PoolCard_StyledCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43912);
/* harmony import */ var _Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63992);
/* harmony import */ var _UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45690);
/* harmony import */ var _RecentCakeProfitRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52052);
/* harmony import */ var _StakingApy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77110);
/* harmony import */ var _VaultCardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8457);
/* harmony import */ var _LockedPool_LockedStakingApy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__, _PoolCard_CardFooter__WEBPACK_IMPORTED_MODULE_8__, _PoolCard_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__, _PoolCard_StyledCard__WEBPACK_IMPORTED_MODULE_10__, _Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__, _UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_12__, _RecentCakeProfitRow__WEBPACK_IMPORTED_MODULE_13__, _StakingApy__WEBPACK_IMPORTED_MODULE_14__, _VaultCardActions__WEBPACK_IMPORTED_MODULE_15__, _LockedPool_LockedStakingApy__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__, _PoolCard_CardFooter__WEBPACK_IMPORTED_MODULE_8__, _PoolCard_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__, _PoolCard_StyledCard__WEBPACK_IMPORTED_MODULE_10__, _Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__, _UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_12__, _RecentCakeProfitRow__WEBPACK_IMPORTED_MODULE_13__, _StakingApy__WEBPACK_IMPORTED_MODULE_14__, _VaultCardActions__WEBPACK_IMPORTED_MODULE_15__, _LockedPool_LockedStakingApy__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const StyledCardBody = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4d3d7af2-0"
})`
  min-height: ${({ isLoading  })=>isLoading ? "0" : "254px"};
`;
const CakeVaultDetail = ({ isLoading =false , account , pool , vaultPool , accountHasSharesStaked , showICake , performanceFeeAsDecimal , defaultFooterExpanded ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCardBody, {
                isLoading: isLoading,
                children: [
                    account && pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_6__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__/* .VaultPositionTagWithLabel */ .X, {
                        userData: vaultPool.userData
                    }),
                    account && pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_6__/* .VaultKey.CakeVault */ .om.CakeVault && vaultPool.userData.locked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_LockedStakingApy__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        userData: vaultPool.userData,
                        stakingToken: pool?.stakingToken,
                        stakingTokenBalance: pool?.userData?.stakingTokenBalance,
                        showICake: showICake
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakingApy__WEBPACK_IMPORTED_MODULE_14__/* .StakingApy */ .E, {
                                pool: pool
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                mt: "16px",
                                gap: "24px",
                                flexDirection: accountHasSharesStaked ? "column-reverse" : "column",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        children: [
                                            account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                mb: "8px",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    vaultKey: pool.vaultKey
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecentCakeProfitRow__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                pool: pool
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        flexDirection: "column",
                                        children: account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VaultCardActions__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            pool: pool,
                                            accountHasSharesStaked: accountHasSharesStaked,
                                            isLoading: isLoading,
                                            performanceFee: performanceFeeAsDecimal
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                    mb: "10px",
                                                    textTransform: "uppercase",
                                                    fontSize: "12px",
                                                    color: "textSubtle",
                                                    bold: true,
                                                    children: t("Start earning")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolCard_CardFooter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                defaultExpanded: defaultFooterExpanded,
                pool: pool,
                account: account
            })
        ]
    });
};
const CakeVaultCard = ({ pool , showStakedOnly , defaultFooterExpanded , showICake =false , showSkeleton =true , ...props })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const vaultPool = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { totalStaked  } = pool;
    const { userData: { userShares , isLoading: isVaultUserDataLoading  } , fees: { performanceFeeAsDecimal  } ,  } = vaultPool;
    const accountHasSharesStaked = userShares && userShares.gt(0);
    const isLoading = !pool.userData || isVaultUserDataLoading;
    if (showStakedOnly && !accountHasSharesStaked) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PoolCard_StyledCard__WEBPACK_IMPORTED_MODULE_10__/* .StyledCard */ .r, {
        isActive: true,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolCard_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                isStaking: accountHasSharesStaked,
                children: !showSkeleton || totalStaked && totalStaked.gte(0) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolCard_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__/* .PoolCardHeaderTitle */ .e, {
                            title: config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .vaultPoolConfig */ .Y4[pool.vaultKey].name,
                            subTitle: config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .vaultPoolConfig */ .Y4[pool.vaultKey].description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                            ...config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .vaultPoolConfig */ .Y4[pool.vaultKey].tokenImage,
                            width: 64,
                            height: 64
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    width: "100%",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    width: 100,
                                    height: 26,
                                    mb: "4px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    width: 65,
                                    height: 20
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            width: 58,
                            height: 58,
                            variant: "circle"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CakeVaultDetail, {
                isLoading: isLoading,
                account: account,
                pool: pool,
                vaultPool: vaultPool,
                accountHasSharesStaked: accountHasSharesStaked,
                showICake: showICake,
                performanceFeeAsDecimal: performanceFeeAsDecimal,
                defaultFooterExpanded: defaultFooterExpanded
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CakeVaultCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const InlineLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dfdf4783-0"
})`
  display: inline;
`;
const IfoCakeRow = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const credit = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useIfoCredit */ .cq)();
    const ceiling = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useIfoCeiling */ .dd)();
    const weeksDisplay = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getICakeWeekDisplay */ .XW)(ceiling);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: t("The number of iCAKE equals the locked staking amount if the staking duration is longer than %weeks% weeks. If the staking duration is less than %weeks% weeks, it will linearly decrease based on the staking duration.", {
                    weeks: weeksDisplay
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InlineLink, {
                external: true,
                href: "https://docs.pancakeswap.finance/products/ifo-initial-farm-offering/icake",
                children: t("Learn more about iCAKE")
            })
        ]
    }), {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    ref: targetRef,
                    color: "textSubtle",
                    bold: true,
                    fontSize: "12px",
                    children: t("iCAKE")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                color: "text",
                bold: true,
                fontSize: "16px",
                decimals: 3,
                value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getBalanceNumber */ .mW)(credit)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IfoCakeRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23992);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27240);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var _Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85569);
/* harmony import */ var _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17464);
/* harmony import */ var _AfterLockedActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_7__, _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_8__, _AfterLockedActions__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_7__, _Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_8__, _AfterLockedActions__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const LockedActions = ({ userShares , locked , lockEndTime , lockStartTime , stakingToken , stakingTokenBalance , lockedAmount ,  })=>{
    const position = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,utils_cakePool__WEBPACK_IMPORTED_MODULE_3__/* .getVaultPosition */ .cP)({
            userShares,
            locked,
            lockEndTime
        }), [
        userShares,
        locked,
        lockEndTime
    ]);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const lockedAmountAsNumber = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .getBalanceNumber */ .mW)(lockedAmount);
    const currentBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>stakingTokenBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(stakingTokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__/* .BIG_ZERO */ .HW, [
        stakingTokenBalance
    ]);
    if (position === utils_cakePool__WEBPACK_IMPORTED_MODULE_3__/* .VaultPosition.Locked */ .PS.Locked) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    width: "100%",
                    mr: "4px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        lockEndTime: lockEndTime,
                        lockStartTime: lockStartTime,
                        currentLockedAmount: lockedAmount,
                        stakingToken: stakingToken,
                        currentBalance: currentBalance,
                        stakingTokenBalance: stakingTokenBalance
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    width: "100%",
                    ml: "4px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        lockEndTime: lockEndTime,
                        lockStartTime: lockStartTime,
                        stakingToken: stakingToken,
                        currentBalance: currentBalance,
                        currentLockedAmount: lockedAmountAsNumber,
                        children: t("Extend")
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AfterLockedActions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        lockEndTime: lockEndTime,
        lockStartTime: lockStartTime,
        position: position,
        currentLockedAmount: lockedAmountAsNumber,
        stakingToken: stakingToken
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockedActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27240);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19193);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27156);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53887);
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22868);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(45366);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var _Common_BurningCountDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30344);
/* harmony import */ var _Common_LockedActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78018);
/* harmony import */ var _Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53331);
/* harmony import */ var _Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28274);
/* harmony import */ var _Common_IfoCakeRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60515);
/* harmony import */ var _hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Card__WEBPACK_IMPORTED_MODULE_3__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__, _Common_LockedActions__WEBPACK_IMPORTED_MODULE_10__, _Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_11__, _Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_12__, _Common_IfoCakeRow__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__]);
([components_Card__WEBPACK_IMPORTED_MODULE_3__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_5__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__, _Common_LockedActions__WEBPACK_IMPORTED_MODULE_10__, _Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_11__, _Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_12__, _Common_IfoCakeRow__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const LockedStakingApy = ({ stakingToken , stakingTokenBalance , userData , showICake ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const position = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .getVaultPosition */ .cP)({
            userShares: userData?.userShares,
            locked: userData?.locked,
            lockEndTime: userData?.lockEndTime
        }), [
        userData
    ]);
    const currentLockedAmountAsBigNumber = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return userData?.balance?.cakeAsBigNumber;
    }, [
        userData?.balance?.cakeAsBigNumber
    ]);
    const currentLockedAmount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getBalanceNumber */ .mW)(currentLockedAmountAsBigNumber);
    const usdValueStaked = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_7__/* .useBUSDCakeAmount */ .Tx)(currentLockedAmount);
    const { weekDuration , lockEndDate , secondDuration , remainingTime , burnStartTime  } = (0,_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)({
        lockStartTime: userData?.lockStartTime,
        lockEndTime: userData?.lockEndTime,
        burnStartTime: userData?.burnStartTime
    });
    const { lockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_5__/* .useVaultApy */ .o)({
        duration: secondDuration
    });
    // earningTokenBalance includes overdue fee if any
    const earningTokenBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getBalanceNumber */ .mW)(currentLockedAmountAsBigNumber.minus(userData?.cakeAtLastUserAction));
    }, [
        currentLockedAmountAsBigNumber,
        userData?.cakeAtLastUserAction
    ]);
    const tooltipContent = t("Calculated based on current rates and subject to change based on pool conditions. It is an estimate provided for your convenience only, and by no means represents guaranteed returns.");
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    const tooltipContentOfBurn = t("After Burning starts at %burnStartTime%. You need to renew your fix-term position, to initiate a new lock or convert your staking position to flexible before it starts. Otherwise all the rewards will be burned within the next 90 days.", {
        burnStartTime
    });
    const { targetRef: tagTargetRefOfBurn , tooltip: tagTooltipOfBurn , tooltipVisible: tagTooltipVisibleOfBurn ,  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(tooltipContentOfBurn, {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Card__WEBPACK_IMPORTED_MODULE_3__/* .LightGreyCard */ .m5, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                mb: "16px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                textTransform: "uppercase",
                                bold: true,
                                fontSize: "12px",
                                children: t("CAKE locked")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                color: "text",
                                bold: true,
                                fontSize: "16px",
                                value: currentLockedAmount,
                                decimals: 5
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                value: usdValueStaked,
                                fontSize: "12px",
                                color: "textSubtle",
                                decimals: 2,
                                prefix: "~",
                                unit: " USD"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                textTransform: "uppercase",
                                bold: true,
                                fontSize: "12px",
                                children: t("Unlocks In")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                color: position >= utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.LockedEnd */ .PS.LockedEnd ? "#D67E0A" : "text",
                                bold: true,
                                fontSize: "16px",
                                children: [
                                    position >= utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.LockedEnd */ .PS.LockedEnd ? t("Unlocked") : remainingTime,
                                    tagTooltipVisibleOfBurn && tagTooltipOfBurn,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        ref: tagTargetRefOfBurn,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            ml: "4px",
                                            width: "20px",
                                            height: "20px",
                                            color: "textSubtle"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                color: position >= utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.LockedEnd */ .PS.LockedEnd ? "#D67E0A" : "text",
                                fontSize: "12px",
                                children: t("On %date%", {
                                    date: lockEndDate
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                mb: "16px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_LockedActions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    userShares: userData?.userShares,
                    locked: userData?.locked,
                    lockEndTime: userData?.lockEndTime,
                    lockStartTime: userData?.lockStartTime,
                    stakingToken: stakingToken,
                    stakingTokenBalance: stakingTokenBalance,
                    lockedAmount: currentLockedAmountAsBigNumber
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Divider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            ![
                utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.LockedEnd */ .PS.LockedEnd,
                utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.AfterBurning */ .PS.AfterBurning
            ].includes(position) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    tooltipVisible && tooltip,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            ref: targetRef,
                            color: "textSubtle",
                            textTransform: "uppercase",
                            bold: true,
                            fontSize: "12px",
                            children: t("APY")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        color: "text",
                        bold: true,
                        fontSize: "16px",
                        value: parseFloat(lockedApy),
                        decimals: 2,
                        unit: "%"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                weekDuration: weekDuration
            }),
            ![
                utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.LockedEnd */ .PS.LockedEnd,
                utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.AfterBurning */ .PS.AfterBurning
            ].includes(position) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                secondDuration: secondDuration
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textTransform: "uppercase",
                        bold: true,
                        fontSize: "12px",
                        children: t("Recent CAKE profit")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        color: "text",
                        bold: true,
                        fontSize: "16px",
                        value: earningTokenBalance,
                        decimals: 5
                    })
                ]
            }),
            position === utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.LockedEnd */ .PS.LockedEnd && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textTransform: "uppercase",
                        bold: true,
                        fontSize: "12px",
                        children: t("After Burning In")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        color: "failure",
                        bold: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_BurningCountDown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            lockEndTime: userData?.lockEndTime
                        })
                    })
                ]
            }),
            position === utils_cakePool__WEBPACK_IMPORTED_MODULE_2__/* .VaultPosition.AfterBurning */ .PS.AfterBurning && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        textTransform: "uppercase",
                        bold: true,
                        fontSize: "12px",
                        children: t("After burning")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        color: "failure",
                        bold: true,
                        children: (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(userData?.currentOverdueFee) ? "-" : t("%amount% Burned", {
                            amount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getFullDisplayBalance */ .NJ)(userData?.currentOverdueFee, 18, 5)
                        })
                    })
                ]
            }),
            showICake && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_IfoCakeRow__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(LockedStakingApy));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87813:
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
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var views_Pools_components_Apr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97421);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Pools_components_Apr__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([views_Pools_components_Apr__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AprRow = ({ pool , stakedBalance , performanceFee =0 , showIcon =true ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { vaultKey  } = pool;
    const tooltipContent = vaultKey ? t("APY includes compounding, APR doesn’t. This pool’s CAKE is compounded automatically, so we show APY.") : t("This pool’s rewards aren’t compounded automatically, so we show APR");
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ref: targetRef,
                children: vaultKey ? `${t("APY")}:` : `${t("APR")}:`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Pools_components_Apr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pool: pool,
                stakedBalance: stakedBalance,
                performanceFee: performanceFee,
                showIcon: showIcon
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AprRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var _hooks_useApprove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, _hooks_useApprove__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, _hooks_useApprove__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ApprovalAction = ({ pool , isLoading =false  })=>{
    const { sousId , stakingToken , earningToken  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const stakingTokenContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC20 */ .X_)(stakingToken.address || "");
    const { handleApprove , pendingTx  } = (0,_hooks_useApprove__WEBPACK_IMPORTED_MODULE_3__/* .useApprovePool */ .iB)(stakingTokenContract, sousId, earningToken.symbol);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: "100%",
            height: "52px"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            isLoading: pendingTx,
            endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                spin: true,
                color: "currentColor"
            }) : null,
            disabled: pendingTx,
            onClick: handleApprove,
            width: "100%",
            children: t("Enable")
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApprovalAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modals_CollectModal__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_Modals_CollectModal__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const HarvestActions = ({ earnings , earningToken , sousId , isBnbPool , earningTokenPrice , isLoading =false ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const earningTokenBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(earnings, earningToken.decimals);
    const formattedBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(earningTokenBalance, 3, 3);
    const earningTokenDollarBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(earnings.multipliedBy(earningTokenPrice), earningToken.decimals);
    const fullBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getFullDisplayBalance */ .NJ)(earnings, earningToken.decimals);
    const hasEarnings = earnings.toNumber() > 0;
    const [onPresentCollect] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_CollectModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        formattedBalance: formattedBalance,
        fullBalance: fullBalance,
        earningToken: earningToken,
        earningsDollarValue: earningTokenDollarBalance,
        sousId: sousId,
        isBnbPool: isBnbPool
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: "16px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                flexDirection: "column",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "48px"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: hasEarnings ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                bold: true,
                                fontSize: "20px",
                                decimals: 5,
                                value: earningTokenBalance
                            }),
                            earningTokenPrice > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                display: "inline",
                                fontSize: "12px",
                                color: "textSubtle",
                                decimals: 2,
                                prefix: "~",
                                value: earningTokenDollarBalance,
                                unit: " USD"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                color: "textDisabled",
                                children: "0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textDisabled",
                                children: "0 USD"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                disabled: !hasEarnings,
                onClick: onPresentCollect,
                children: t("Harvest")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HarvestActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93314);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69688);
/* harmony import */ var _Modals_StakeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_3__, _Modals_StakeModal__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_3__, _Modals_StakeModal__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const StakeAction = ({ pool , stakingTokenBalance , stakedBalance , isBnbPool , isStaked , isLoading =false ,  })=>{
    const { stakingToken , stakingTokenPrice , stakingLimit , isFinished , userData  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const stakedTokenBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(stakedBalance, stakingToken.decimals);
    const stakedTokenDollarBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(stakedBalance.multipliedBy(stakingTokenPrice), stakingToken.decimals);
    const [onPresentTokenRequired] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        tokenSymbol: stakingToken.symbol
    }));
    const [onPresentStake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_StakeModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        isBnbPool: isBnbPool,
        pool: pool,
        stakingTokenBalance: stakingTokenBalance,
        stakingTokenPrice: stakingTokenPrice
    }));
    const [onPresentUnstake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_StakeModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        stakingTokenBalance: stakingTokenBalance,
        isBnbPool: isBnbPool,
        pool: pool,
        stakingTokenPrice: stakingTokenPrice,
        isRemovingStake: true
    }));
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(t("You’ve already staked the maximum amount you can stake in this pool!"), {
        placement: "bottom"
    });
    const reachStakingLimit = stakingLimit.gt(0) && userData.stakedBalance.gte(stakingLimit);
    const renderStakeAction = ()=>{
        return isStaked ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            justifyContent: "space-between",
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    flexDirection: "column",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                bold: true,
                                fontSize: "20px",
                                decimals: 3,
                                value: stakedTokenBalance
                            }),
                            stakingTokenPrice !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    decimals: 2,
                                    value: stakedTokenDollarBalance,
                                    prefix: "~",
                                    unit: " USD"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            variant: "secondary",
                            onClick: onPresentUnstake,
                            mr: "6px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                color: "primary",
                                width: "24px"
                            })
                        }),
                        reachStakingLimit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            ref: targetRef,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "secondary",
                                disabled: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    color: "textDisabled",
                                    width: "24px",
                                    height: "24px"
                                })
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            variant: "secondary",
                            onClick: stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired,
                            disabled: isFinished,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                color: "primary",
                                width: "24px",
                                height: "24px"
                            })
                        })
                    ]
                }),
                tooltipVisible && tooltip
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            disabled: isFinished,
            onClick: stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired,
            children: t("Stake")
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            width: "100%",
            height: "52px"
        }) : renderStakeAction()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakeAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6429);
/* harmony import */ var views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7818);
/* harmony import */ var _ApprovalAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65209);
/* harmony import */ var _StakeActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24981);
/* harmony import */ var _HarvestActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81141);
/* harmony import */ var _ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_6__, _ApprovalAction__WEBPACK_IMPORTED_MODULE_7__, _StakeActions__WEBPACK_IMPORTED_MODULE_8__, _HarvestActions__WEBPACK_IMPORTED_MODULE_9__, _ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_6__, _ApprovalAction__WEBPACK_IMPORTED_MODULE_7__, _StakeActions__WEBPACK_IMPORTED_MODULE_8__, _HarvestActions__WEBPACK_IMPORTED_MODULE_9__, _ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const InlineText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-93bade5c-0"
})`
  display: inline;
`;
const CardActions = ({ pool , stakedBalance  })=>{
    const { sousId , stakingToken , earningToken , poolCategory , userData , earningTokenPrice , profileRequirement  } = pool;
    // Pools using native BNB behave differently than pools using a token
    const isBnbPool = poolCategory === config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .PoolCategory.BINANCE */ .jh.BINANCE;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const allowance = userData?.allowance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.allowance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_3__/* .BIG_ZERO */ .HW;
    const stakingTokenBalance = userData?.stakingTokenBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.stakingTokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_3__/* .BIG_ZERO */ .HW;
    const earnings = userData?.pendingReward ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.pendingReward) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_3__/* .BIG_ZERO */ .HW;
    const needsApproval = !allowance.gt(0) && !isBnbPool;
    const isStaked = stakedBalance.gt(0);
    const isLoading = !userData;
    const { notMeetRequired , notMeetThreshold  } = (0,views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_6__/* .useProfileRequirement */ .f)(profileRequirement);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            display: "inline",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InlineText, {
                                    color: "secondary",
                                    textTransform: "uppercase",
                                    bold: true,
                                    fontSize: "12px",
                                    children: `${earningToken.symbol} `
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InlineText, {
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    bold: true,
                                    fontSize: "12px",
                                    children: t("Earned")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HarvestActions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            earnings: earnings,
                            earningToken: earningToken,
                            sousId: sousId,
                            earningTokenPrice: earningTokenPrice,
                            isBnbPool: isBnbPool,
                            isLoading: isLoading
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    display: "inline",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InlineText, {
                            color: isStaked ? "secondary" : "textSubtle",
                            textTransform: "uppercase",
                            bold: true,
                            fontSize: "12px",
                            children: [
                                isStaked ? stakingToken.symbol : t("Stake"),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InlineText, {
                            color: isStaked ? "textSubtle" : "secondary",
                            textTransform: "uppercase",
                            bold: true,
                            fontSize: "12px",
                            children: isStaked ? t("Staked") : `${stakingToken.symbol}`
                        })
                    ]
                }),
                notMeetRequired || notMeetThreshold ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_10__/* .ProfileRequirementWarning */ .Q, {
                    profileRequirement: profileRequirement
                }) : needsApproval ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ApprovalAction__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    pool: pool,
                    isLoading: isLoading
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StakeActions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    isLoading: isLoading,
                    pool: pool,
                    stakingTokenBalance: stakingTokenBalance,
                    stakedBalance: stakedBalance,
                    isBnbPool: isBnbPool,
                    isStaked: isStaked
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardActions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45249:
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
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63157);
/* harmony import */ var _PoolStatsInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PoolStatsInfo__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_PoolStatsInfo__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const { CompoundingPoolTag , ManualPoolTag  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .Farm.Tags */ .l.Tags;
const ExpandableButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b1498612-0"
})`
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0;
  }
`;
const ExpandedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b1498612-1"
})`
  svg {
    height: 14px;
    width: 14px;
  }
`;
const Footer = ({ pool , account , defaultExpanded , children  })=>{
    const { vaultKey  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultExpanded || false);
    const manualTooltipText = t("You must harvest and compound your earnings from this pool manually.");
    const autoTooltipText = t("Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.");
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(vaultKey ? autoTooltipText : manualTooltipText, {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ExpandableButtonWrapper, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: [
                            vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CompoundingPoolTag, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ManualPoolTag, {}),
                            tooltipVisible && tooltip,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                ref: targetRef,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    ml: "4px",
                                    width: "20px",
                                    height: "20px",
                                    color: "textSubtle"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ExpandableLabel */ .L, {
                        expanded: isExpanded,
                        onClick: ()=>setIsExpanded(!isExpanded),
                        children: isExpanded ? t("Hide") : t("Details")
                    })
                ]
            }),
            isExpanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExpandedWrapper, {
                flexDirection: "column",
                children: children || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolStatsInfo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    pool: pool,
                    account: account
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ PoolCardHeaderTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e9cda6aa-0"
})`
  background: ${({ isFinished , background , theme  })=>isFinished ? theme.colors.backgroundDisabled : theme.colors[background]};
  border-radius: ${({ theme  })=>`${theme.radii.card} ${theme.radii.card} 0 0`};
`;
const PoolCardHeader = ({ isFinished =false , isStaking =false , children  })=>{
    const background = isStaking ? "gradientBubblegum" : "gradientCardHeader";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        isFinished: isFinished,
        background: background,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            alignItems: "center",
            justifyContent: "space-between",
            children: children
        })
    });
};
const PoolCardHeaderTitle = ({ isFinished , title , subTitle  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: isFinished ? "textDisabled" : "body",
                scale: "lg",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fontSize: "14px",
                color: isFinished ? "textDisabled" : "textSubtle",
                children: subTitle
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoolCardHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ StyledCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-34431ece-0"
})`
  min-width: 280px;
  max-width: 100%;
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished , theme  })=>theme.colors[isFinished ? "textDisabled" : "secondary"]};

  ${({ theme  })=>theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (StyledCard)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84737);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51036);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39480);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85576);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46684);
/* harmony import */ var _AprRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87813);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43912);
/* harmony import */ var _CardFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45249);
/* harmony import */ var _PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36728);
/* harmony import */ var _CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97887);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, components_TokenImage__WEBPACK_IMPORTED_MODULE_5__, _AprRow__WEBPACK_IMPORTED_MODULE_6__, _StyledCard__WEBPACK_IMPORTED_MODULE_7__, _CardFooter__WEBPACK_IMPORTED_MODULE_8__, _PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__, _CardActions__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, components_TokenImage__WEBPACK_IMPORTED_MODULE_5__, _AprRow__WEBPACK_IMPORTED_MODULE_6__, _StyledCard__WEBPACK_IMPORTED_MODULE_7__, _CardFooter__WEBPACK_IMPORTED_MODULE_8__, _PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__, _CardActions__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const PoolCard = ({ pool , account ,  })=>{
    const { sousId , stakingToken , earningToken , isFinished , userData , totalStaked  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const stakedBalance = userData?.stakedBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__/* .BIG_ZERO */ .HW;
    const accountHasStakedBalance = stakedBalance.gt(0);
    const isCakePool = earningToken.symbol === "CAKE" && stakingToken.symbol === "CAKE";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_7__/* .StyledCard */ .r, {
        isFinished: isFinished && sousId !== 0,
        ribbon: isFinished && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            variantColor: "textDisabled",
            text: t("Finished")
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                isStaking: accountHasStakedBalance,
                isFinished: isFinished && sousId !== 0,
                children: totalStaked && totalStaked.gte(0) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolCardHeader__WEBPACK_IMPORTED_MODULE_9__/* .PoolCardHeaderTitle */ .e, {
                            title: isCakePool ? t("Manual") : t("Earn %asset%", {
                                asset: earningToken.symbol
                            }),
                            subTitle: isCakePool ? t("Earn CAKE, stake CAKE") : t("Stake %symbol%", {
                                symbol: stakingToken.symbol
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_5__/* .TokenPairImage */ .q, {
                            primaryToken: earningToken,
                            secondaryToken: stakingToken,
                            width: 64,
                            height: 64
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    width: "100%",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    width: 100,
                                    height: 26,
                                    mb: "4px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    width: 65,
                                    height: 20
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            width: 58,
                            height: 58,
                            variant: "circle"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AprRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        pool: pool,
                        stakedBalance: stakedBalance
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        mt: "24px",
                        flexDirection: "column",
                        children: account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardActions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            pool: pool,
                            stakedBalance: stakedBalance
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    mb: "10px",
                                    textTransform: "uppercase",
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    bold: true,
                                    children: t("Start earning")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardFooter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                pool: pool,
                account: account
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoolCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74470);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74813);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18086);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41022);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ToggleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ca4d4ac7-0"
})`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z} {
    margin-left: 8px;
  }
`;
const ViewControls = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ca4d4ac7-1"
})`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ca4d4ac7-2"
})`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`;
const PoolTabButtons = ({ stakedOnly , setStakedOnly , hasStakeInFinishedPools , viewMode , setViewMode  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const isExact = router.pathname === "/pools" || router.pathname === "/_mp/pools";
    const viewModeToggle = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ToggleView_ToggleView__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        idPrefix: "clickPool",
        viewMode: viewMode,
        onToggle: setViewMode
    });
    const liveOrFinishedSwitch = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            activeIndex: isExact ? 0 : 1,
            scale: "sm",
            variant: "subtle",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                    to: "/pools",
                    replace: true,
                    children: t("Live")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    show: hasStakeInFinishedPools,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        id: "finished-pools-button",
                        as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                        to: "/pools/history",
                        replace: true,
                        children: t("Finished")
                    })
                })
            ]
        })
    });
    const stakedOnlySwitch = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToggleWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                checked: stakedOnly,
                onChange: ()=>setStakedOnly(!stakedOnly),
                scale: "sm"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: [
                    " ",
                    t("Staked only")
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ViewControls, {
        children: [
            viewModeToggle,
            stakedOnlySwitch,
            liveOrFinishedSwitch
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoolTabButtons);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41742);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39708);
/* harmony import */ var _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BaseCell__WEBPACK_IMPORTED_MODULE_7__, _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([_BaseCell__WEBPACK_IMPORTED_MODULE_7__, _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-902eea7d-0"
})`
  flex: 4.5;
  ${({ theme  })=>theme.mediaQueries.sm} {
    flex: 1 0 120px;
  }
`;
const EarningsCell = ({ pool , account  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { sousId , earningToken , poolCategory , userData , earningTokenPrice  } = pool;
    const earnings = userData?.pendingReward ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userData.pendingReward) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_4__/* .BIG_ZERO */ .HW;
    const earningTokenBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(earnings, earningToken.decimals);
    const earningTokenDollarBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(earnings.multipliedBy(earningTokenPrice), earningToken.decimals);
    const hasEarnings = account && earnings.gt(0);
    const fullBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getFullDisplayBalance */ .NJ)(earnings, earningToken.decimals);
    const formattedBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(earningTokenBalance, 3, 3);
    const isBnbPool = poolCategory === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolCategory.BINANCE */ .jh.BINANCE;
    const labelText = t("%asset% Earned", {
        asset: earningToken.symbol
    });
    const [onPresentCollect] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        formattedBalance: formattedBalance,
        fullBalance: fullBalance,
        earningToken: earningToken,
        earningsDollarValue: earningTokenDollarBalance,
        sousId: sousId,
        isBnbPool: isBnbPool
    }));
    const handleEarningsClick = (event)=>{
        event.stopPropagation();
        onPresentCollect();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCell, {
        role: "cell",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_7__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: labelText
                }),
                !pool.userDataLoaded && account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "16px"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            mr: "8px",
                            height: "32px",
                            onClick: hasEarnings ? handleEarningsClick : undefined,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    mt: "4px",
                                    bold: !isMobile,
                                    fontSize: isMobile ? "14px" : "16px",
                                    color: hasEarnings ? "primary" : "textDisabled",
                                    decimals: hasEarnings ? 5 : 1,
                                    value: hasEarnings ? earningTokenBalance : 0
                                }),
                                hasEarnings ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: earningTokenPrice > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        display: "inline",
                                        fontSize: "12px",
                                        color: "textSubtle",
                                        decimals: 2,
                                        prefix: "~",
                                        value: earningTokenDollarBalance,
                                        unit: " USD"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    mt: "4px",
                                    fontSize: "12px",
                                    color: "textDisabled",
                                    children: "0 USD"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EarningsCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47418);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33430);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26488);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9681);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_block_hooks__WEBPACK_IMPORTED_MODULE_3__, _BaseCell__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([state_block_hooks__WEBPACK_IMPORTED_MODULE_3__, _BaseCell__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-48e2b69d-0"
})`
  flex: 2 0 100px;
`;
const EndsInCell = ({ pool  })=>{
    const { sousId , totalStaked , startBlock , endBlock , isFinished  } = pool;
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentBlock */ .je)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { shouldShowBlockCountdown , blocksUntilStart , blocksRemaining , hasPoolStarted , blocksToDisplay  } = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getPoolBlockInfo */ .zy)(pool, currentBlock);
    const isCakePool = sousId === 0;
    const renderBlocks = shouldShowBlockCountdown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                flex: "1.3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        fontSize: "16px",
                        value: blocksToDisplay,
                        decimals: 0
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        ml: "4px",
                        textTransform: "lowercase",
                        children: t("Blocks")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                flex: "1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    external: true,
                    href: (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .getBlockExploreLink */ .C)(hasPoolStarted ? endBlock : startBlock, "countdown"),
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        ml: "4px"
                    })
                })
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: "-"
    });
    // A bit hacky way to determine if public data is loading relying on totalStaked
    // Opted to go for this since we don't really need a separate publicDataLoaded flag
    // anywhere else
    const isLoadingBlockData = !currentBlock || !blocksRemaining && !blocksUntilStart;
    const isLoadingPublicData = hasPoolStarted ? !totalStaked.gt(0) || isLoadingBlockData : isLoadingBlockData;
    const showLoading = isLoadingPublicData && !isCakePool && !isFinished;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCell, {
        role: "cell",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_6__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: hasPoolStarted || !shouldShowBlockCountdown ? t("Ends in") : t("Starts in")
                }),
                showLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "16px"
                }) : renderBlocks
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndsInCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41742);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93638);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24671);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _BaseCell__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _BaseCell__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ff85cccd-0"
})``;
const StakedCell = ({ pool , account  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    // vault
    const vaultData = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { userData: { userShares , balance: { cakeAsBigNumber , cakeAsNumberBalance  } , isLoading ,  } ,  } = vaultData;
    const hasSharesStaked = userShares.gt(0);
    const isVaultWithShares = pool.vaultKey && hasSharesStaked;
    // pool
    const { stakingTokenPrice , stakingToken , userData  } = pool;
    const stakedAutoDollarValue = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(cakeAsBigNumber.multipliedBy(stakingTokenPrice), stakingToken.decimals);
    const stakedBalance = userData?.stakedBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_6__/* .BIG_ZERO */ .HW;
    const stakedTokenBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(stakedBalance, stakingToken.decimals);
    const stakedTokenDollarBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceNumber */ .mW)(stakedBalance.multipliedBy(stakingTokenPrice), stakingToken.decimals);
    const labelText = `${pool.stakingToken.symbol} ${pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_4__/* .VaultKey.CakeVault */ .om.CakeVault && vaultData.userData.locked ? t("Locked") : t("Staked")}`;
    const hasStaked = account && (stakedBalance.gt(0) || isVaultWithShares);
    const userDataLoading = pool.vaultKey ? isLoading : !pool.userDataLoaded;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCell, {
        role: "cell",
        flex: pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_4__/* .VaultKey.CakeFlexibleSideVault */ .om.CakeFlexibleSideVault ? "1 0 162px" : pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_4__/* .VaultKey.CakeVault */ .om.CakeVault && !hasStaked ? "1 0 120px" : "2 0 100px",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_8__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: labelText
                }),
                userDataLoading && account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "16px"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            mr: "8px",
                            height: "32px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    mt: "4px",
                                    bold: !isMobile,
                                    fontSize: isMobile ? "14px" : "16px",
                                    color: hasStaked ? "primary" : "textDisabled",
                                    decimals: hasStaked ? 5 : 1,
                                    value: hasStaked ? pool.vaultKey ? Number.isNaN(cakeAsNumberBalance) ? 0 : cakeAsNumberBalance : stakedTokenBalance : 0
                                }),
                                hasStaked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    display: "inline",
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    decimals: 2,
                                    prefix: "~",
                                    value: pool.vaultKey ? stakedAutoDollarValue : stakedTokenDollarBalance,
                                    unit: " USD"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    mt: "4px",
                                    fontSize: "12px",
                                    color: "textDisabled",
                                    children: "0 USD"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakedCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33430);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24671);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _BaseCell__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _BaseCell__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-375678ec-0"
})`
  flex: 2 0 100px;
`;
const TotalStakedCell = ({ pool  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { stakingToken , totalStaked , vaultKey  } = pool;
    const { totalCakeInVault  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const totalStakedBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (vaultKey) {
            return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(totalCakeInVault, stakingToken.decimals);
        }
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceNumber */ .mW)(totalStaked, stakingToken.decimals);
    }, [
        vaultKey,
        totalCakeInVault,
        totalStaked,
        stakingToken.decimals
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCell, {
        role: "cell",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_6__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: t("Total staked")
                }),
                totalStaked && totalStaked.gte(0) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    height: "20px",
                    alignItems: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        fontSize: "16px",
                        value: totalStakedBalance,
                        decimals: 0,
                        unit: ` ${stakingToken.symbol}`
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "16px"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalStakedCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61867:
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
/* harmony import */ var hooks_useDelayedUnmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99381);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22672);
/* harmony import */ var _Cells_ExpandActionCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cells_ExpandActionCell__WEBPACK_IMPORTED_MODULE_4__]);
_Cells_ExpandActionCell__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const StyledRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-dd7146e0-0"
})`
  background-color: transparent;
  display: flex;
  cursor: pointer;
`;
const ExpandRow = ({ children , panel , initialActivity  })=>{
    const hasSetInitialValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { isTablet , isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialActivity);
    const shouldRenderActionPanel = (0,hooks_useDelayedUnmount__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(expanded, 300);
    const toggleExpanded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setExpanded((prev)=>!prev);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (initialActivity && hasSetInitialValue.current === false) {
            setExpanded(initialActivity);
            hasSetInitialValue.current = true;
        }
    }, [
        initialActivity
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRow, {
                role: "row",
                onClick: toggleExpanded,
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_ExpandActionCell__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        expanded: expanded,
                        isFullLayout: isTablet || isDesktop
                    })
                ]
            }),
            shouldRenderActionPanel && panel
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ExpandRow));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "s": () => (/* binding */ VaultPoolRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22672);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11496);
/* harmony import */ var _Cells_NameCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5251);
/* harmony import */ var _Cells_EarningsCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46928);
/* harmony import */ var _Cells_AprCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51110);
/* harmony import */ var _Cells_TotalStakedCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69288);
/* harmony import */ var _Cells_EndsInCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68365);
/* harmony import */ var _ActionPanel_ActionPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90828);
/* harmony import */ var _Cells_AutoEarningsCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42863);
/* harmony import */ var _Cells_AutoAprCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14085);
/* harmony import */ var _Cells_StakedCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96137);
/* harmony import */ var _ExpandRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, _Cells_NameCell__WEBPACK_IMPORTED_MODULE_3__, _Cells_EarningsCell__WEBPACK_IMPORTED_MODULE_4__, _Cells_AprCell__WEBPACK_IMPORTED_MODULE_5__, _Cells_TotalStakedCell__WEBPACK_IMPORTED_MODULE_6__, _Cells_EndsInCell__WEBPACK_IMPORTED_MODULE_7__, _ActionPanel_ActionPanel__WEBPACK_IMPORTED_MODULE_8__, _Cells_AutoEarningsCell__WEBPACK_IMPORTED_MODULE_9__, _Cells_AutoAprCell__WEBPACK_IMPORTED_MODULE_10__, _Cells_StakedCell__WEBPACK_IMPORTED_MODULE_11__, _ExpandRow__WEBPACK_IMPORTED_MODULE_12__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, _Cells_NameCell__WEBPACK_IMPORTED_MODULE_3__, _Cells_EarningsCell__WEBPACK_IMPORTED_MODULE_4__, _Cells_AprCell__WEBPACK_IMPORTED_MODULE_5__, _Cells_TotalStakedCell__WEBPACK_IMPORTED_MODULE_6__, _Cells_EndsInCell__WEBPACK_IMPORTED_MODULE_7__, _ActionPanel_ActionPanel__WEBPACK_IMPORTED_MODULE_8__, _Cells_AutoEarningsCell__WEBPACK_IMPORTED_MODULE_9__, _Cells_AutoAprCell__WEBPACK_IMPORTED_MODULE_10__, _Cells_StakedCell__WEBPACK_IMPORTED_MODULE_11__, _ExpandRow__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const VaultPoolRow = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ vaultKey , account , initialActivity  })=>{
    const { isXs , isSm , isMd , isLg , isXl , isXxl  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const isLargerScreen = isLg || isXl || isXxl;
    const isXLargerScreen = isXl || isXxl;
    const pool = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useDeserializedPoolByVaultKey */ .YX)(vaultKey);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ExpandRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        initialActivity: initialActivity,
        panel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionPanel_ActionPanel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            account: account,
            pool: pool,
            expanded: true,
            breakpoints: {
                isXs,
                isSm,
                isMd,
                isLg,
                isXl,
                isXxl
            }
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_NameCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pool: pool
            }),
            isXLargerScreen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_AutoEarningsCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                pool: pool,
                account: account
            }),
            isXLargerScreen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_StakedCell__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                pool: pool,
                account: account
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_AutoAprCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                pool: pool
            }),
            isLargerScreen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_TotalStakedCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pool: pool
            })
        ]
    });
});
const PoolRow = ({ sousId , account , initialActivity ,  })=>{
    const { isXs , isSm , isMd , isLg , isXl , isXxl , isDesktop  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const isLargerScreen = isLg || isXl || isXxl;
    const { pool  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .usePool */ .AI)(sousId);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ExpandRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        initialActivity: initialActivity,
        panel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionPanel_ActionPanel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            account: account,
            pool: pool,
            expanded: true,
            breakpoints: {
                isXs,
                isSm,
                isMd,
                isLg,
                isXl,
                isXxl
            }
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_NameCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pool: pool
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_EarningsCell__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                pool: pool,
                account: account
            }),
            isLargerScreen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_TotalStakedCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pool: pool
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_AprCell__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                pool: pool
            }),
            isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cells_EndsInCell__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                pool: pool
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PoolRow));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11959:
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
/* harmony import */ var _PoolRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44783);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PoolRow__WEBPACK_IMPORTED_MODULE_3__]);
_PoolRow__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a3ab40d2-0"
})`
  border-radius: ${({ theme  })=>theme.radii.card};
  scroll-margin-top: 64px;

  background-color: ${({ theme  })=>theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme  })=>theme.colors.disabled};
  }
`;
const StyledTableBorder = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a3ab40d2-1"
})`
  border-radius: ${({ theme  })=>theme.radii.card};
  background-color: ${({ theme  })=>theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`;
const PoolsTable = ({ pools , account , urlSearch  })=>{
    const tableWrapperEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableBorder, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTable, {
            id: "pools-table",
            role: "table",
            ref: tableWrapperEl,
            children: pools.map((pool)=>pool.vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolRow__WEBPACK_IMPORTED_MODULE_3__/* .VaultPoolRow */ .s, {
                    initialActivity: urlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase(),
                    vaultKey: pool.vaultKey,
                    account: account
                }, pool.vaultKey) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolRow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    initialActivity: urlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase(),
                    sousId: pool.sousId,
                    account: account
                }, pool.sousId))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoolsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(21836);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9778);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(88618);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(59176);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(78448);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(25717);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24953);
/* harmony import */ var hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52908);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11496);
/* harmony import */ var utils_latinise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93508);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52993);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93638);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72135);
/* harmony import */ var state_user_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15444);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26488);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7599);
/* harmony import */ var _components_PoolCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(65584);
/* harmony import */ var _components_CakeVaultCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(72375);
/* harmony import */ var _components_PoolTabButtons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(15455);
/* harmony import */ var _components_PoolsTable_PoolsTable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11959);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_12__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_14__, state_user_hooks__WEBPACK_IMPORTED_MODULE_16__, state_block_hooks__WEBPACK_IMPORTED_MODULE_19__, _components_PoolCard__WEBPACK_IMPORTED_MODULE_21__, _components_CakeVaultCard__WEBPACK_IMPORTED_MODULE_22__, _components_PoolTabButtons__WEBPACK_IMPORTED_MODULE_23__, _components_PoolsTable_PoolsTable__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__, hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_12__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_14__, state_user_hooks__WEBPACK_IMPORTED_MODULE_16__, state_block_hooks__WEBPACK_IMPORTED_MODULE_19__, _components_PoolCard__WEBPACK_IMPORTED_MODULE_21__, _components_CakeVaultCard__WEBPACK_IMPORTED_MODULE_22__, _components_PoolTabButtons__WEBPACK_IMPORTED_MODULE_23__, _components_PoolsTable_PoolsTable__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const CardLayout = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2906d9ef-0"
})`
  justify-content: center;
`;
const PoolControls = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2906d9ef-1"
})`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`;
const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2906d9ef-2"
})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`;
const LabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2906d9ef-3"
})`
  > ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z} {
    font-size: 12px;
  }
`;
const ControlStretch = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2906d9ef-4"
})`
  > div {
    flex: 1;
  }
`;
const FinishedTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2906d9ef-5"
})`
  padding-bottom: 32px;
  flex-direction: column;
  ${({ theme  })=>theme.mediaQueries.md} {
    flex-direction: row;
  }
`;
const FinishedTextLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2906d9ef-6"
})`
  font-weight: 400;
  white-space: nowrap;
  text-decoration: underline;
`;
const NUMBER_OF_POOLS_VISIBLE = 12;
const sortPools = (account, sortOption, pools, poolsToSort)=>{
    switch(sortOption){
        case "apr":
            // Ternary is needed to prevent pools without APR (like MIX) getting top spot
            return lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default()(poolsToSort, (pool)=>pool.apr ? pool.apr : 0, "desc");
        case "earned":
            return lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default()(poolsToSort, (pool)=>{
                if (!pool.userData || !pool.earningTokenPrice) {
                    return 0;
                }
                if (pool.vaultKey) {
                    const { userData , pricePerFullShare  } = pool;
                    if (!userData || !userData.userShares) {
                        return 0;
                    }
                    return (0,_helpers__WEBPACK_IMPORTED_MODULE_25__/* .getCakeVaultEarnings */ .UN)(account, userData.cakeAtLastUserAction, userData.userShares, pricePerFullShare, pool.earningTokenPrice, pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_15__/* .VaultKey.CakeVault */ .om.CakeVault ? pool.userData.currentPerformanceFee.plus(pool.userData.currentOverdueFee) : null).autoUsdToDisplay;
                }
                return pool.userData.pendingReward.times(pool.earningTokenPrice).toNumber();
            }, "desc");
        case "totalStaked":
            {
                return lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default()(poolsToSort, (pool)=>{
                    let totalStaked = Number.NaN;
                    if (pool.vaultKey) {
                        const vault = pool;
                        if (pool.stakingTokenPrice && vault.totalCakeInVault.isFinite()) {
                            totalStaked = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatUnits)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(vault.totalCakeInVault.toString()), pool.stakingToken.decimals) * pool.stakingTokenPrice;
                        }
                    } else if (pool.totalStaked?.isFinite() && pool.stakingTokenPrice) {
                        totalStaked = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatUnits)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(pool.totalStaked.toString()), pool.stakingToken.decimals) * pool.stakingTokenPrice;
                    }
                    return Number.isFinite(totalStaked) ? totalStaked : 0;
                }, "desc");
            }
        case "latest":
            return lodash_orderBy__WEBPACK_IMPORTED_MODULE_8___default()(poolsToSort, (pool)=>Number(pool.sousId), "desc");
        default:
            return poolsToSort;
    }
};
const POOL_START_BLOCK_THRESHOLD = 60 / config__WEBPACK_IMPORTED_MODULE_20__/* .BSC_BLOCK_TIME */ .hJ * 4;
const Pools = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_18__.useRouter)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .useWeb3React */ .Ge)();
    const { pools , userDataLoaded  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_12__/* .usePoolsWithVault */ .f6)();
    const [stakedOnly, setStakedOnly] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useUserPoolStakedOnly */ .tw)();
    const [viewMode, setViewMode] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useUserPoolsViewMode */ .Yi)();
    const { 0: numberOfPoolsVisible , 1: setNumberOfPoolsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(NUMBER_OF_POOLS_VISIBLE);
    const { observerRef , isIntersecting  } = (0,hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const normalizedUrlSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>typeof router?.query?.search === "string" ? router.query.search : "", [
        router.query
    ]);
    const { 0: _searchQuery , 1: setSearchQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const searchQuery = normalizedUrlSearch && !_searchQuery ? normalizedUrlSearch : _searchQuery;
    const { 0: sortOption , 1: setSortOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hot");
    const chosenPoolsLength = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const initialBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useInitialBlock */ .Xh)();
    const { 0: finishedPools , 1: openPools  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>lodash_partition__WEBPACK_IMPORTED_MODULE_9___default()(pools, (pool)=>pool.isFinished), [
        pools
    ]);
    const openPoolsWithStartBlockFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>openPools.filter((pool)=>initialBlock > 0 && pool.startBlock ? Number(pool.startBlock) < initialBlock + POOL_START_BLOCK_THRESHOLD : true), [
        initialBlock,
        openPools
    ]);
    const stakedOnlyFinishedPools = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>finishedPools.filter((pool)=>{
            if (pool.vaultKey) {
                const vault = pool;
                return vault.userData.userShares.gt(0);
            }
            return pool.userData && new (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default())(pool.userData.stakedBalance).isGreaterThan(0);
        }), [
        finishedPools
    ]);
    const stakedOnlyOpenPools = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return openPoolsWithStartBlockFilter.filter((pool)=>{
            if (pool.vaultKey) {
                const vault = pool;
                return vault.userData.userShares.gt(0);
            }
            return pool.userData && new (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default())(pool.userData.stakedBalance).isGreaterThan(0);
        });
    }, [
        openPoolsWithStartBlockFilter
    ]);
    const hasStakeInFinishedPools = stakedOnlyFinishedPools.length > 0;
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_12__/* .usePoolsPageFetch */ .l7)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isIntersecting) {
            setNumberOfPoolsVisible((poolsCurrentlyVisible)=>{
                if (poolsCurrentlyVisible <= chosenPoolsLength.current) {
                    return poolsCurrentlyVisible + NUMBER_OF_POOLS_VISIBLE;
                }
                return poolsCurrentlyVisible;
            });
        }
    }, [
        isIntersecting
    ]);
    const showFinishedPools = router.pathname.includes("history");
    const handleChangeSearchQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>setSearchQuery(event.target.value), []);
    const handleSortOptionChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option)=>setSortOption(option.value), []);
    let chosenPools;
    if (showFinishedPools) {
        chosenPools = stakedOnly ? stakedOnlyFinishedPools : finishedPools;
    } else {
        chosenPools = stakedOnly ? stakedOnlyOpenPools() : openPoolsWithStartBlockFilter;
    }
    chosenPools = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const sortedPools = sortPools(account, sortOption, pools, chosenPools).slice(0, numberOfPoolsVisible);
        if (searchQuery) {
            const lowercaseQuery = (0,utils_latinise__WEBPACK_IMPORTED_MODULE_13__/* .latinise */ .b)(searchQuery.toLowerCase());
            return sortedPools.filter((pool)=>(0,utils_latinise__WEBPACK_IMPORTED_MODULE_13__/* .latinise */ .b)(pool.earningToken.symbol.toLowerCase()).includes(lowercaseQuery));
        }
        return sortedPools;
    }, [
        account,
        sortOption,
        pools,
        chosenPools,
        numberOfPoolsVisible,
        searchQuery
    ]);
    chosenPoolsLength.current = chosenPools.length;
    const cardLayout = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardLayout, {
        children: chosenPools.map((pool)=>pool.vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CakeVaultCard__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                pool: pool,
                showStakedOnly: stakedOnly
            }, pool.vaultKey) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PoolCard__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                pool: pool,
                account: account
            }, pool.sousId))
    });
    const tableLayout = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PoolsTable_PoolsTable__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        urlSearch: normalizedUrlSearch,
        pools: chosenPools,
        account: account
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    flexDirection: [
                        "column",
                        null,
                        null,
                        "row"
                    ],
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                        flex: "1",
                        flexDirection: "column",
                        mr: [
                            "8px",
                            0
                        ],
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                as: "h1",
                                scale: "xxl",
                                color: "secondary",
                                mb: "24px",
                                children: t("Syrup Pools")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                scale: "md",
                                color: "text",
                                children: t("Just stake some tokens to earn.")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                scale: "md",
                                color: "text",
                                children: t("High APR, low risk.")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Page__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PoolControls, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PoolTabButtons__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                stakedOnly: stakedOnly,
                                setStakedOnly: setStakedOnly,
                                hasStakeInFinishedPools: hasStakeInFinishedPools,
                                viewMode: viewMode,
                                setViewMode: setViewMode
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FilterContainer, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LabelWrapper, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                bold: true,
                                                color: "textSubtle",
                                                textTransform: "uppercase",
                                                children: t("Sort by")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ControlStretch, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                                                    options: [
                                                        {
                                                            label: t("Hot"),
                                                            value: "hot"
                                                        },
                                                        {
                                                            label: t("APR"),
                                                            value: "apr"
                                                        },
                                                        {
                                                            label: t("Earned"),
                                                            value: "earned"
                                                        },
                                                        {
                                                            label: t("Total staked"),
                                                            value: "totalStaked"
                                                        },
                                                        {
                                                            label: t("Latest"),
                                                            value: "latest"
                                                        }, 
                                                    ],
                                                    onOptionChange: handleSortOptionChange
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LabelWrapper, {
                                        style: {
                                            marginLeft: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                bold: true,
                                                color: "textSubtle",
                                                textTransform: "uppercase",
                                                children: t("Search")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                                                initialValue: searchQuery,
                                                onChange: handleChangeSearchQuery,
                                                placeholder: "Search Pools"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    showFinishedPools && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FinishedTextContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                fontSize: [
                                    "16px",
                                    null,
                                    "20px"
                                ],
                                color: "failure",
                                pr: "4px",
                                children: t("Looking for v1 CAKE syrup pools?")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FinishedTextLink, {
                                href: "/migration",
                                fontSize: [
                                    "16px",
                                    null,
                                    "20px"
                                ],
                                color: "failure",
                                children: [
                                    t("Go to migration page"),
                                    "."
                                ]
                            })
                        ]
                    }),
                    account && !userDataLoaded && stakedOnly && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                        justifyContent: "center",
                        mb: "4px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {})
                    }),
                    viewMode === state_user_actions__WEBPACK_IMPORTED_MODULE_17__/* .ViewMode.CARD */ .wO.CARD ? cardLayout : tableLayout,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: observerRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                        mx: "auto",
                        mt: "12px",
                        src: "/images/decorations/3d-syrup-bunnies.png",
                        alt: "Pancake illustration",
                        width: 192,
                        height: 184.5
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {}), document.body)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pools);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84737:
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



const StyledCardRibbon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e1bdbf71-0"
})`
  z-index: ${({ theme  })=>theme.zIndices.ribbon};
  background-color: ${({ variantColor ="secondary" , theme  })=>theme.colors[variantColor]};
  color: white;
  margin: 0;
  padding: 8px 0;
  position: absolute;
  right: ${({ ribbonPosition  })=>ribbonPosition === "right" ? 0 : "auto"};
  top: 0;
  text-align: center;
  transform: ${({ ribbonPosition  })=>ribbonPosition === "right" ? "translateX(30%) translateY(0%) rotate(45deg)" : "translateX(0%) translateY(200%) rotate(-45deg)"};
  transform-origin: top left;
  width: 96px;

  &:before,
  &:after {
    background-color: ${({ variantColor ="secondary" , theme  })=>theme.colors[variantColor]};
    content: "";
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`;
const CardRibbon = ({ variantColor , text , ribbonPosition , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCardRibbon, {
        variantColor: variantColor,
        ribbonPosition: ribbonPosition,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            title: text,
            children: text
        })
    });
};
CardRibbon.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    ribbonPosition: "right"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardRibbon);


/***/ })

};
;
//# sourceMappingURL=330.js.map