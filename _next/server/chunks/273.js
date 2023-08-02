"use strict";
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 44864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78950);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19081);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36204);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34376);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var _hooks_useHarvestPool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__, state__WEBPACK_IMPORTED_MODULE_6__, state_pools__WEBPACK_IMPORTED_MODULE_7__, _hooks_useHarvestPool__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__, state__WEBPACK_IMPORTED_MODULE_6__, state_pools__WEBPACK_IMPORTED_MODULE_7__, _hooks_useHarvestPool__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CollectModal = ({ formattedBalance , earningToken , earningsDollarValue , sousId , isBnbPool , onDismiss ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .useToast */ .p)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { onReward  } = (0,_hooks_useHarvestPool__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(sousId, isBnbPool);
    const handleHarvestConfirm = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            return onReward();
        });
        if (receipt?.status) {
            toastSuccess(`${t("Harvested")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash,
                children: t("Your %symbol% earnings have been sent to your wallet!", {
                    symbol: earningToken.symbol
                })
            }));
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_7__/* .updateUserStakedBalance */ .cR)({
                sousId,
                account
            }));
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_7__/* .updateUserPendingReward */ .J4)({
                sousId,
                account
            }));
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_7__/* .updateUserBalance */ .yi)({
                sousId,
                account
            }));
            onDismiss?.();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        title: `${earningToken.symbol} ${t("Harvest")}`,
        onDismiss: onDismiss,
        headerBackground: theme.colors.gradientCardHeader,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: [
                            t("Harvesting"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                children: [
                                    formattedBalance,
                                    " ",
                                    earningToken.symbol
                                ]
                            }),
                            earningsDollarValue > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                children: `~${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .formatNumber */ .uf)(earningsDollarValue)} USD`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                mt: "8px",
                onClick: handleHarvestConfirm,
                isLoading: pendingTx,
                endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    spin: true,
                    color: "currentColor"
                }) : null,
                children: pendingTx ? t("Confirming") : t("Confirm")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                variant: "text",
                onClick: onDismiss,
                pb: "0px",
                children: t("Close Window")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85306);



const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-18a1699-0"
})`
  flex-grow: 1;
`;
const PercentageButton = ({ children , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
        scale: "xs",
        mx: "2px",
        p: "4px 16px",
        variant: "tertiary",
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercentageButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2892);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(84373);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(21762);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(67891);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78950);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36204);
/* harmony import */ var state_pools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34376);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90712);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24671);
/* harmony import */ var _hooks_useStakePool__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9551);
/* harmony import */ var _hooks_useUnstakePool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95402);
/* harmony import */ var _PercentageButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__, state__WEBPACK_IMPORTED_MODULE_8__, state_pools__WEBPACK_IMPORTED_MODULE_9__, _hooks_useStakePool__WEBPACK_IMPORTED_MODULE_12__, _hooks_useUnstakePool__WEBPACK_IMPORTED_MODULE_13__, _PercentageButton__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__, state__WEBPACK_IMPORTED_MODULE_8__, state_pools__WEBPACK_IMPORTED_MODULE_9__, _hooks_useStakePool__WEBPACK_IMPORTED_MODULE_12__, _hooks_useUnstakePool__WEBPACK_IMPORTED_MODULE_13__, _PercentageButton__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8a904f9a-0"
})`
  width: 100%;
`;
const AnnualRoiContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8a904f9a-1"
})`
  cursor: pointer;
`;
const AnnualRoiDisplay = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8a904f9a-2"
})`
  width: 72px;
  max-width: 72px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
`;
const StakeModal = ({ isBnbPool , pool , stakingTokenBalance , stakingTokenPrice , isRemovingStake =false , onDismiss ,  })=>{
    const { sousId , stakingToken , earningTokenPrice , apr , userData , stakingLimit , earningToken  } = pool;
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .TL)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)();
    const { onStake  } = (0,_hooks_useStakePool__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(sousId, isBnbPool);
    const { onUnstake  } = (0,_hooks_useUnstakePool__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(sousId, pool.enableEmergencyWithdraw);
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading: pendingTx  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: stakeAmount , 1: setStakeAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: hasReachedStakeLimit , 1: setHasReachedStakedLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: percent , 1: setPercent  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
    const { 0: showRoiCalculator , 1: setShowRoiCalculator  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const getCalculatedStakingLimit = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(()=>{
        if (isRemovingStake) {
            return userData.stakedBalance;
        }
        if (stakingLimit.gt(0)) {
            const stakingLimitLeft = stakingLimit.minus(userData.stakedBalance);
            if (stakingTokenBalance.gt(stakingLimitLeft)) {
                return stakingLimitLeft;
            }
        }
        return stakingTokenBalance;
    }, [
        userData.stakedBalance,
        stakingTokenBalance,
        stakingLimit,
        isRemovingStake
    ]);
    const fullDecimalStakeAmount = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getDecimalAmount */ .Qe)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(stakeAmount), stakingToken.decimals);
    const userNotEnoughToken = isRemovingStake ? userData.stakedBalance.lt(fullDecimalStakeAmount) : userData.stakingTokenBalance.lt(fullDecimalStakeAmount);
    const usdValueStaked = new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(stakeAmount).times(stakingTokenPrice);
    const formattedUsdValueStaked = !usdValueStaked.isNaN() && (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .formatNumber */ .uf)(usdValueStaked.toNumber());
    const interestBreakdown = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_19__/* .getInterestBreakdown */ .A1)({
        principalInUSD: !usdValueStaked.isNaN() ? usdValueStaked.toNumber() : 0,
        apr,
        earningTokenPrice
    });
    const annualRoi = interestBreakdown[3] * pool.earningTokenPrice;
    const formattedAnnualRoi = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .formatNumber */ .uf)(annualRoi, annualRoi > 10000 ? 0 : 2, annualRoi > 10000 ? 0 : 2);
    const getTokenLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : "/swap";
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (stakingLimit.gt(0) && !isRemovingStake) {
            setHasReachedStakedLimit(fullDecimalStakeAmount.plus(userData.stakedBalance).gt(stakingLimit));
        }
    }, [
        stakeAmount,
        stakingLimit,
        userData,
        stakingToken,
        isRemovingStake,
        setHasReachedStakedLimit,
        fullDecimalStakeAmount, 
    ]);
    const handleStakeInputChange = (input)=>{
        if (input) {
            const convertedInput = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getDecimalAmount */ .Qe)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(input), stakingToken.decimals);
            const percentage = Math.floor(convertedInput.dividedBy(getCalculatedStakingLimit()).multipliedBy(100).toNumber());
            setPercent(Math.min(percentage, 100));
        } else {
            setPercent(0);
        }
        setStakeAmount(input);
    };
    const handleChangePercent = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((sliderPercent)=>{
        if (sliderPercent > 0) {
            const percentageOfStakingMax = getCalculatedStakingLimit().dividedBy(100).multipliedBy(sliderPercent);
            const amountToStake = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getFullDisplayBalance */ .NJ)(percentageOfStakingMax, stakingToken.decimals, stakingToken.decimals);
            setStakeAmount(amountToStake);
        } else {
            setStakeAmount("");
        }
        setPercent(sliderPercent);
    }, [
        getCalculatedStakingLimit,
        stakingToken.decimals
    ]);
    const handleConfirmClick = async ()=>{
        const receipt = await fetchWithCatchTxError(()=>{
            if (isRemovingStake) {
                return onUnstake(stakeAmount, stakingToken.decimals);
            }
            return onStake(stakeAmount, stakingToken.decimals);
        });
        if (receipt?.status) {
            if (isRemovingStake) {
                toastSuccess(`${t("Unstaked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your %symbol% earnings have also been harvested to your wallet!", {
                        symbol: earningToken.symbol
                    })
                }));
            } else {
                toastSuccess(`${t("Staked")}!`, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: receipt.transactionHash,
                    children: t("Your %symbol% funds have been staked in the pool!", {
                        symbol: stakingToken.symbol
                    })
                }));
            }
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_9__/* .updateUserStakedBalance */ .cR)({
                sousId,
                account
            }));
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_9__/* .updateUserPendingReward */ .J4)({
                sousId,
                account
            }));
            dispatch((0,state_pools__WEBPACK_IMPORTED_MODULE_9__/* .updateUserBalance */ .yi)({
                sousId,
                account
            }));
            onDismiss?.();
        }
    };
    if (showRoiCalculator) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            account: account,
            earningTokenPrice: earningTokenPrice,
            stakingTokenPrice: stakingTokenPrice,
            apr: apr,
            linkLabel: t("Get %symbol%", {
                symbol: stakingToken.symbol
            }),
            linkHref: getTokenLink,
            stakingTokenBalance: userData.stakedBalance.plus(stakingTokenBalance),
            stakingTokenSymbol: stakingToken.symbol,
            earningTokenSymbol: earningToken.symbol,
            onBack: ()=>setShowRoiCalculator(false),
            initialValue: stakeAmount
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
        minWidth: "346px",
        title: isRemovingStake ? t("Unstake") : t("Stake in Pool"),
        onDismiss: onDismiss,
        headerBackground: theme.colors.gradientCardHeader,
        children: [
            stakingLimit.gt(0) && !isRemovingStake && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                color: "secondary",
                bold: true,
                mb: "24px",
                style: {
                    textAlign: "center"
                },
                fontSize: "16px",
                children: t("Max stake for this pool: %amount% %token%", {
                    amount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getFullDisplayBalance */ .NJ)(stakingLimit, stakingToken.decimals, 0),
                    token: stakingToken.symbol
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "8px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        bold: true,
                        children: [
                            isRemovingStake ? t("Unstake") : t("Stake"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        alignItems: "center",
                        minWidth: "70px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                src: `/images/tokens/${stakingToken.address}.png`,
                                width: 24,
                                height: 24,
                                alt: stakingToken.symbol
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                ml: "4px",
                                bold: true,
                                children: stakingToken.symbol
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                value: stakeAmount,
                onUserInput: handleStakeInputChange,
                currencyValue: stakingTokenPrice !== 0 && `~${formattedUsdValueStaked || 0} USD`,
                isWarning: hasReachedStakeLimit || userNotEnoughToken,
                decimals: stakingToken.decimals
            }),
            hasReachedStakeLimit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                color: "failure",
                fontSize: "12px",
                style: {
                    textAlign: "right"
                },
                mt: "4px",
                children: t("Maximum total stake: %amount% %token%", {
                    amount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getFullDisplayBalance */ .NJ)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(stakingLimit), stakingToken.decimals, 0),
                    token: stakingToken.symbol
                })
            }),
            userNotEnoughToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                color: "failure",
                fontSize: "12px",
                style: {
                    textAlign: "right"
                },
                mt: "4px",
                children: t("Insufficient %symbol% balance", {
                    symbol: stakingToken.symbol
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                ml: "auto",
                color: "textSubtle",
                fontSize: "12px",
                mb: "8px",
                children: t("Balance: %balance%", {
                    balance: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_11__/* .getFullDisplayBalance */ .NJ)(isRemovingStake ? userData.stakedBalance : stakingTokenBalance, stakingToken.decimals)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                min: 0,
                max: 100,
                value: percent,
                onValueChanged: handleChangePercent,
                name: "stake",
                valueLabel: `${percent}%`,
                step: 1
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mt: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PercentageButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        onClick: ()=>handleChangePercent(25),
                        children: "25%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PercentageButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        onClick: ()=>handleChangePercent(50),
                        children: "50%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PercentageButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        onClick: ()=>handleChangePercent(75),
                        children: "75%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PercentageButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        onClick: ()=>handleChangePercent(100),
                        children: t("Max")
                    })
                ]
            }),
            !isRemovingStake && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                mt: "24px",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                variant: "text",
                                scale: "sm",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                    color: "textSubtle",
                                    width: "18px"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                        width: 60
                    })
                ]
            }),
            isRemovingStake && pool.enableEmergencyWithdraw && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                maxWidth: "346px",
                mt: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    textAlign: "center",
                    children: t("This pool was misconfigured. Please unstake your tokens from it, emergencyWithdraw method will be used. Your tokens will be returned to your wallet, however rewards will not be harvested.")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                isLoading: pendingTx,
                endIcon: pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    spin: true,
                    color: "currentColor"
                }) : null,
                onClick: handleConfirmClick,
                disabled: !stakeAmount || parseFloat(stakeAmount) === 0 || hasReachedStakeLimit || userNotEnoughToken,
                mt: "24px",
                children: pendingTx ? t("Confirming") : t("Confirm")
            }),
            !isRemovingStake && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                external: true,
                href: getTokenLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    width: "100%",
                    mt: "8px",
                    variant: "secondary",
                    children: t("Get %symbol%", {
                        symbol: stakingToken.symbol
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(42791);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11496);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27240);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85576);
/* harmony import */ var _Harvest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38457);
/* harmony import */ var _Stake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56002);
/* harmony import */ var _AutoHarvest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55746);
/* harmony import */ var _Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63992);
/* harmony import */ var _LockedPool_Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53331);
/* harmony import */ var _LockedPool_Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28274);
/* harmony import */ var _LockedPool_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8810);
/* harmony import */ var _CakeVaultApr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1306);
/* harmony import */ var _PoolStatsInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, _Harvest__WEBPACK_IMPORTED_MODULE_8__, _Stake__WEBPACK_IMPORTED_MODULE_9__, _AutoHarvest__WEBPACK_IMPORTED_MODULE_10__, _Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__, _LockedPool_Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_12__, _LockedPool_Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_13__, _CakeVaultApr__WEBPACK_IMPORTED_MODULE_15__, _PoolStatsInfo__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, _Harvest__WEBPACK_IMPORTED_MODULE_8__, _Stake__WEBPACK_IMPORTED_MODULE_9__, _AutoHarvest__WEBPACK_IMPORTED_MODULE_10__, _Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__, _LockedPool_Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_12__, _LockedPool_Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_13__, _CakeVaultApr__WEBPACK_IMPORTED_MODULE_15__, _PoolStatsInfo__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const { CompoundingPoolTag , ManualPoolTag  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .Farm.Tags */ .l.Tags;
const expandAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 1000px;
  }
`;
const collapseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    max-height: 1000px;
  }
  to {
    max-height: 0px;
  }
`;
const StyledActionPanel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-33b31809-0"
})`
  animation: ${({ expanded  })=>expanded ? styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
          ${expandAnimation} 300ms linear forwards
        ` : styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme  })=>theme.colors.dropdown};
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 12px;

  ${({ theme  })=>theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`;
const ActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-33b31809-1"
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;

  ${({ theme  })=>theme.mediaQueries.sm} {
    flex-direction: row;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    flex-direction: ${({ isAutoVault  })=>isAutoVault ? "row" : null};
    align-items: ${({ isAutoVault , hasBalance  })=>isAutoVault ? hasBalance ? "flex-start" : "stretch" : "center"};
  }
`;
const InfoSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
    componentId: "sc-33b31809-2"
})`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  padding: 8px 8px;
  ${({ theme  })=>theme.mediaQueries.lg} {
    padding: 0;
    flex-basis: 230px;
    ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z} {
      font-size: 14px;
    }
  }
`;
const YieldBoostDurationRow = ({ lockEndTime , lockStartTime  })=>{
    const { weekDuration , secondDuration  } = (0,_LockedPool_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)({
        lockEndTime,
        lockStartTime
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_YieldBoostRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                secondDuration: secondDuration
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_LockDurationRow__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                weekDuration: weekDuration
            })
        ]
    });
};
const ActionPanel = ({ account , pool , expanded  })=>{
    const { userData , vaultKey  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)();
    const vaultData = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const { userData: { balance: { cakeAsBigNumber  } ,  } ,  } = vaultData;
    const vaultPosition = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_3__/* .getVaultPosition */ .cP)(vaultData.userData);
    const stakingTokenBalance = userData?.stakingTokenBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(userData.stakingTokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW;
    const stakedBalance = userData?.stakedBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW;
    const poolStakingTokenBalance = vaultKey ? cakeAsBigNumber.plus(stakingTokenBalance) : stakedBalance.plus(stakingTokenBalance);
    const manualTooltipText = t("You must harvest and compound your earnings from this pool manually.");
    const autoTooltipText = t("Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.");
    const { targetRef: tagTargetRef , tooltip: tagTooltip , tooltipVisible: tagTooltipVisible ,  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(vaultKey ? autoTooltipText : manualTooltipText, {
        placement: "bottom-start"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledActionPanel, {
        expanded: expanded,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoSection, {
                children: [
                    isMobile && vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault && vaultData.userData.locked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        mb: "16px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(YieldBoostDurationRow, {
                            lockEndTime: vaultData.userData.lockEndTime,
                            lockStartTime: vaultData.userData.lockStartTime
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        mb: "8px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PoolStatsInfo__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            pool: pool,
                            account: account,
                            showTotalStaked: isMobile,
                            alignLinksToRight: isMobile
                        })
                    }),
                    vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CompoundingPoolTag, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ManualPoolTag, {}),
                    tagTooltipVisible && tagTooltip,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        ref: tagTargetRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            ml: "4px",
                            width: "20px",
                            height: "20px",
                            color: "textSubtle"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ActionContainer, {
                children: [
                    isMobile && vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault && vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_3__/* .VaultPosition.None */ .PS.None && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CakeVaultApr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        pool: pool,
                        userData: vaultData.userData,
                        vaultPosition: vaultPosition
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        width: "100%",
                        children: [
                            pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultPositionTag__WEBPACK_IMPORTED_MODULE_11__/* .VaultPositionTagWithLabel */ .X, {
                                userData: vaultData.userData,
                                width: [
                                    "auto",
                                    ,
                                    "fit-content"
                                ],
                                ml: [
                                    "12px",
                                    ,
                                    ,
                                    ,
                                    ,
                                    "32px"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ActionContainer, {
                                isAutoVault: !!pool.vaultKey,
                                hasBalance: poolStakingTokenBalance.gt(0),
                                children: [
                                    pool.vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AutoHarvest__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        ...pool
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Harvest__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        ...pool
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Stake__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        pool: pool
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41731);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9681);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27240);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53887);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52861);
/* harmony import */ var _CakeVaultCard_UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45690);
/* harmony import */ var _LockedPool_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _CakeVaultCard_UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _CakeVaultCard_UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const AutoHarvestAction = ({ userDataLoaded , earningTokenPrice , vaultKey ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const vaultData = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const { userData: { userShares , cakeAtLastUserAction  } , pricePerFullShare ,  } = vaultData;
    const { hasAutoEarnings , autoCakeToDisplay , autoUsdToDisplay  } = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getCakeVaultEarnings */ .UN)(account, cakeAtLastUserAction, userShares, pricePerFullShare, earningTokenPrice, vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData.currentPerformanceFee.plus(vaultData.userData.currentOverdueFee).plus(vaultData.userData.userBoostedShare) : null);
    const { secondDuration , weekDuration  } = (0,_LockedPool_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
        lockStartTime: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData?.lockStartTime ?? "0" : "0",
        lockEndTime: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData?.lockEndTime ?? "0" : "0"
    });
    const { boostFactor  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_7__/* .useVaultApy */ .o)({
        duration: secondDuration
    });
    const vaultPosition = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .getVaultPosition */ .cP)(vaultData.userData);
    const actionTitle = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        fontSize: "12px",
        bold: true,
        color: "secondary",
        as: "span",
        textTransform: "uppercase",
        children: t("Recent CAKE profit")
    });
    if (!account) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionTitles */ .Ad, {
                    children: actionTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: "0"
                    })
                })
            ]
        });
    }
    if (!userDataLoaded) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionTitles */ .Ad, {
                    children: actionTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        width: 180,
                        height: "32px",
                        marginTop: 14
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .RowActionContainer */ .W_, {
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                width: "100%",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionTitles */ .Ad, {
                        children: actionTitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionContent */ .O6, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                flex: "1",
                                flexDirection: "column",
                                alignSelf: "flex-start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: hasAutoEarnings ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                lineHeight: "1",
                                                bold: true,
                                                fontSize: "20px",
                                                decimals: 5,
                                                value: autoCakeToDisplay
                                            }),
                                            Number.isFinite(earningTokenPrice) && earningTokenPrice > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                display: "inline",
                                                fontSize: "12px",
                                                color: "textSubtle",
                                                decimals: 2,
                                                prefix: "~",
                                                value: autoUsdToDisplay,
                                                unit: " USD"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                color: "textDisabled",
                                                children: "0"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "textDisabled",
                                                children: "0 USD"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                flex: "1.3",
                                flexDirection: "column",
                                alignSelf: "flex-start",
                                alignItems: "flex-start",
                                children: [
                                    utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .VaultPosition.Flexible */ .PS.Flexible,
                                    utils_cakePool__WEBPACK_IMPORTED_MODULE_6__/* .VaultPosition.None */ .PS.None
                                ].includes(vaultPosition) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CakeVaultCard_UnstakingFeeCountdownRow__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    vaultKey: vaultKey,
                                    isTableVariant: true
                                })
                            })
                        ]
                    })
                ]
            }),
            !isMobile && vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault && vaultData.userData.locked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                minWidth: "123px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionTitles */ .Ad, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            bold: true,
                            color: "secondary",
                            as: "span",
                            textTransform: "uppercase",
                            children: t("Yield boost")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ActionContent */ .O6, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            flex: "1",
                            flexDirection: "column",
                            alignSelf: "flex-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    color: "text",
                                    lineHeight: "1",
                                    bold: true,
                                    fontSize: "20px",
                                    value: boostFactor ? boostFactor?.toString() : "0",
                                    decimals: 2,
                                    unit: "x"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    children: t("Lock for %duration%", {
                                        duration: weekDuration
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoHarvestAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67891);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93638);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53887);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27240);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73486);
/* harmony import */ var _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CakeVaultApr = ({ pool , userData , vaultPosition  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { flexibleApy , lockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__/* .useVaultApy */ .o)({
        duration: vaultPosition > utils_cakePool__WEBPACK_IMPORTED_MODULE_4__/* .VaultPosition.Flexible */ .PS.Flexible ? +userData.lockEndTime - +userData.lockStartTime : config_constants_pools__WEBPACK_IMPORTED_MODULE_5__/* .MAX_LOCK_DURATION */ .VO
    });
    const [onPresentFlexibleApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_6__/* .VaultRoiCalculatorModal */ .E, {
        pool: pool
    }));
    const [onPresentLockedApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_6__/* .VaultRoiCalculatorModal */ .E, {
        pool: pool,
        initialView: 1
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                marginX: "8px",
                mb: "8px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            fontSize: "16px",
                            color: "textSubtle",
                            textAlign: "left",
                            children: t("Flexible APY")
                        }),
                        flexibleApy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            alignItems: "center",
                            justifyContent: "flex-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    fontSize: "16px",
                                    value: parseFloat(flexibleApy),
                                    decimals: 2,
                                    unit: "%",
                                    fontWeight: "600"
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
                })
            }),
            pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_2__/* .VaultKey.CakeVault */ .om.CakeVault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                marginX: "8px",
                mb: "8px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            fontSize: "16px",
                            color: "textSubtle",
                            textAlign: "left",
                            children: t("Locked APY")
                        }),
                        lockedApy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            alignItems: "center",
                            justifyContent: "flex-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    fontSize: "16px",
                                    style: {
                                        whiteSpace: "nowrap"
                                    },
                                    fontWeight: "600",
                                    children: t("Up to")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    ml: "7px",
                                    fontSize: "16px",
                                    value: parseFloat(lockedApy),
                                    decimals: 2,
                                    unit: "%",
                                    fontWeight: "600"
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
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            width: "80px",
                            height: "16px"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CakeVaultApr);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41742);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85576);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52861);
/* harmony import */ var _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_7__, _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_7__, _Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const HarvestAction = ({ sousId , poolCategory , earningToken , userData , userDataLoaded , earningTokenPrice ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const earnings = userData?.pendingReward ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.pendingReward) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_6__/* .BIG_ZERO */ .HW;
    const earningTokenBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getBalanceNumber */ .mW)(earnings, earningToken.decimals);
    const earningTokenDollarBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getBalanceNumber */ .mW)(earnings.multipliedBy(earningTokenPrice), earningToken.decimals);
    const hasEarnings = earnings.gt(0);
    const fullBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getFullDisplayBalance */ .NJ)(earnings, earningToken.decimals);
    const formattedBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(earningTokenBalance, 3, 3);
    const isBnbPool = poolCategory === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .PoolCategory.BINANCE */ .jh.BINANCE;
    const [onPresentCollect] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_CollectModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        formattedBalance: formattedBalance,
        fullBalance: fullBalance,
        earningToken: earningToken,
        earningsDollarValue: earningTokenDollarBalance,
        sousId: sousId,
        isBnbPool: isBnbPool
    }));
    const actionTitle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                fontSize: "12px",
                bold: true,
                color: "secondary",
                as: "span",
                textTransform: "uppercase",
                children: [
                    earningToken.symbol,
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                fontSize: "12px",
                bold: true,
                color: "textSubtle",
                as: "span",
                textTransform: "uppercase",
                children: t("Earned")
            })
        ]
    });
    if (!account) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionTitles */ .Ad, {
                    children: actionTitle
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionContent */ .O6, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            children: "0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            disabled: true,
                            children: t("Harvest")
                        })
                    ]
                })
            ]
        });
    }
    if (!userDataLoaded) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionTitles */ .Ad, {
                    children: actionTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        width: 180,
                        height: "32px",
                        marginTop: 14
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionContainer */ .sX, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionTitles */ .Ad, {
                children: actionTitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ActionContent */ .O6, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        flex: "1",
                        flexDirection: "column",
                        alignSelf: "flex-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: hasEarnings ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        lineHeight: "1",
                                        bold: true,
                                        fontSize: "20px",
                                        decimals: 5,
                                        value: earningTokenBalance
                                    }),
                                    earningTokenPrice > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        color: "textDisabled",
                                        children: "0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        fontSize: "12px",
                                        color: "textDisabled",
                                        children: "0 USD"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        disabled: !hasEarnings,
                        onClick: onPresentCollect,
                        children: t("Harvest")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HarvestAction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(93314);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39480);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6429);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74860);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93638);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27240);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24671);
/* harmony import */ var views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7818);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(45366);
/* harmony import */ var views_Pools_components_LockedPool_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8810);
/* harmony import */ var _hooks_useApprove__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90474);
/* harmony import */ var _CakeVaultCard_VaultStakeModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83115);
/* harmony import */ var _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69688);
/* harmony import */ var _Modals_StakeModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94197);
/* harmony import */ var _ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28425);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52861);
/* harmony import */ var _Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(68528);
/* harmony import */ var _LockedPool_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85569);
/* harmony import */ var _LockedPool_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(17464);
/* harmony import */ var _LockedPool_Common_AfterLockedActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19775);
/* harmony import */ var _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85074);
/* harmony import */ var _LockedPool_Common_BurningCountDown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(30344);
/* harmony import */ var _LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(26595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_13__, _hooks_useApprove__WEBPACK_IMPORTED_MODULE_15__, _CakeVaultCard_VaultStakeModal__WEBPACK_IMPORTED_MODULE_16__, _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_17__, _Modals_StakeModal__WEBPACK_IMPORTED_MODULE_18__, _ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_19__, _styles__WEBPACK_IMPORTED_MODULE_20__, _Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_21__, _LockedPool_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_22__, _LockedPool_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_23__, _LockedPool_Common_AfterLockedActions__WEBPACK_IMPORTED_MODULE_24__, _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_25__, _LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_27__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_6__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__, views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_13__, _hooks_useApprove__WEBPACK_IMPORTED_MODULE_15__, _CakeVaultCard_VaultStakeModal__WEBPACK_IMPORTED_MODULE_16__, _Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_17__, _Modals_StakeModal__WEBPACK_IMPORTED_MODULE_18__, _ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_19__, _styles__WEBPACK_IMPORTED_MODULE_20__, _Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_21__, _LockedPool_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_22__, _LockedPool_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_23__, _LockedPool_Common_AfterLockedActions__WEBPACK_IMPORTED_MODULE_24__, _LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_25__, _LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_27__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























const IconButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-fce4d01c-0"
})`
  display: flex;
`;
const Staked = ({ pool  })=>{
    const { sousId , stakingToken , earningToken , stakingLimit , isFinished , poolCategory , userData , stakingTokenPrice , vaultKey , profileRequirement , userDataLoaded ,  } = pool;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)();
    const stakingTokenContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useERC20 */ .X_)(stakingToken.address || "");
    const { handleApprove: handlePoolApprove , pendingTx: pendingPoolTx  } = (0,_hooks_useApprove__WEBPACK_IMPORTED_MODULE_15__/* .useApprovePool */ .iB)(stakingTokenContract, sousId, earningToken.symbol);
    const { isVaultApproved , setLastUpdated  } = (0,_hooks_useApprove__WEBPACK_IMPORTED_MODULE_15__/* .useCheckVaultApprovalStatus */ .dI)(vaultKey);
    const { handleApprove: handleVaultApprove , pendingTx: pendingVaultTx  } = (0,_hooks_useApprove__WEBPACK_IMPORTED_MODULE_15__/* .useVaultApprove */ .Le)(vaultKey, setLastUpdated);
    const handleApprove = vaultKey ? handleVaultApprove : handlePoolApprove;
    const pendingTx = vaultKey ? pendingVaultTx : pendingPoolTx;
    const isBnbPool = poolCategory === config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .PoolCategory.BINANCE */ .jh.BINANCE;
    const allowance = userData?.allowance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userData.allowance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_11__/* .BIG_ZERO */ .HW;
    const stakedBalance = userData?.stakedBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_11__/* .BIG_ZERO */ .HW;
    const isNotVaultAndHasStake = !vaultKey && stakedBalance.gt(0);
    const stakingTokenBalance = userData?.stakingTokenBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userData.stakingTokenBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_11__/* .BIG_ZERO */ .HW;
    const stakedTokenBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__/* .getBalanceNumber */ .mW)(stakedBalance, stakingToken.decimals);
    const stakedTokenDollarBalance = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__/* .getBalanceNumber */ .mW)(stakedBalance.multipliedBy(stakingTokenPrice), stakingToken.decimals);
    const vaultData = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { userData: { userShares , balance: { cakeAsBigNumber , cakeAsNumberBalance  } ,  } ,  } = vaultData;
    const { lockEndDate , remainingTime , burnStartTime  } = (0,views_Pools_components_LockedPool_hooks_useUserDataInVaultPresenter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)({
        lockStartTime: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_8__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData?.lockStartTime ?? "0" : "0",
        lockEndTime: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_8__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData?.lockEndTime ?? "0" : "0",
        burnStartTime: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_8__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData?.burnStartTime ?? "0" : "0"
    });
    const hasSharesStaked = userShares.gt(0);
    const isVaultWithShares = vaultKey && hasSharesStaked;
    const stakedAutoDollarValue = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__/* .getBalanceNumber */ .mW)(cakeAsBigNumber.multipliedBy(stakingTokenPrice), stakingToken.decimals);
    const needsApproval = vaultKey ? !isVaultApproved : !allowance.gt(0) && !isBnbPool;
    const [onPresentTokenRequired] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_NotEnoughTokensModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        tokenSymbol: stakingToken.symbol
    }));
    const [onPresentStake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_StakeModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        isBnbPool: isBnbPool,
        pool: pool,
        stakingTokenBalance: stakingTokenBalance,
        stakingTokenPrice: stakingTokenPrice
    }));
    const [onPresentVaultStake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CakeVaultCard_VaultStakeModal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        stakingMax: stakingTokenBalance,
        pool: pool
    }));
    const [onPresentUnstake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modals_StakeModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        stakingTokenBalance: stakingTokenBalance,
        isBnbPool: isBnbPool,
        pool: pool,
        stakingTokenPrice: stakingTokenPrice,
        isRemovingStake: true
    }));
    const [onPresentVaultUnstake] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CakeVaultCard_VaultStakeModal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        stakingMax: cakeAsBigNumber,
        pool: pool,
        isRemovingStake: true
    }));
    const [openPresentLockedStakeModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Modals_LockedStakeModal__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        currentBalance: stakingTokenBalance,
        stakingToken: stakingToken,
        stakingTokenBalance: stakingTokenBalance
    }));
    const { notMeetRequired , notMeetThreshold  } = (0,views_Pools_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_13__/* .useProfileRequirement */ .f)(profileRequirement);
    const onStake = ()=>{
        if (vaultKey) {
            onPresentVaultStake();
        } else {
            onPresentStake();
        }
    };
    const onUnstake = ()=>{
        if (vaultKey) {
            onPresentVaultUnstake();
        } else {
            onPresentUnstake();
        }
    };
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z)(t("You've already staked the maximum amount you can stake in this pool!"), {
        placement: "bottom"
    });
    const tooltipContentOfBurn = t("After Burning starts at %burnStartTime%. You need to renew your fix-term position, to initiate a new lock or convert your staking position to flexible before it starts. Otherwise all the rewards will be burned within the next 90 days.", {
        burnStartTime
    });
    const { targetRef: tagTargetRefOfBurn , tooltip: tagTooltipOfBurn , tooltipVisible: tagTooltipVisibleOfBurn ,  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z)(tooltipContentOfBurn, {
        placement: "bottom"
    });
    const reachStakingLimit = stakingLimit.gt(0) && userData.stakedBalance.gte(stakingLimit);
    if (!account) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionTitles */ .Ad, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        bold: true,
                        color: "textSubtle",
                        as: "span",
                        textTransform: "uppercase",
                        children: t("Start staking")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        width: "100%"
                    })
                })
            ]
        });
    }
    if (!userDataLoaded) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionTitles */ .Ad, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        bold: true,
                        color: "textSubtle",
                        as: "span",
                        textTransform: "uppercase",
                        children: t("Start staking")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                        width: 180,
                        height: "32px",
                        marginTop: 14
                    })
                })
            ]
        });
    }
    if (notMeetRequired || notMeetThreshold) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionTitles */ .Ad, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        bold: true,
                        color: "textSubtle",
                        as: "span",
                        textTransform: "uppercase",
                        children: t("Enable pool")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileRequirementWarning__WEBPACK_IMPORTED_MODULE_19__/* .ProfileRequirementWarning */ .Q, {
                        profileRequirement: profileRequirement
                    })
                })
            ]
        });
    }
    if (needsApproval) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContainer */ .sX, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionTitles */ .Ad, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        bold: true,
                        color: "textSubtle",
                        as: "span",
                        textTransform: "uppercase",
                        children: t("Enable pool")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                        width: "100%",
                        disabled: pendingTx,
                        onClick: handleApprove,
                        variant: "secondary",
                        children: t("Enable")
                    })
                })
            ]
        });
    }
    // Wallet connected, user data loaded and approved
    if (isNotVaultAndHasStake || isVaultWithShares) {
        const vaultPosition = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .getVaultPosition */ .cP)(vaultData.userData);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContainer */ .sX, {
                    flex: vaultPosition > 1 ? 1.5 : 1,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                        mt: 0,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                flex: "1",
                                flexDirection: "column",
                                alignSelf: "flex-start",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionTitles */ .Ad, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                bold: true,
                                                color: "secondary",
                                                as: "span",
                                                textTransform: "uppercase",
                                                children: [
                                                    stakingToken.symbol,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                bold: true,
                                                color: "textSubtle",
                                                as: "span",
                                                textTransform: "uppercase",
                                                children: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_8__/* .VaultKey.CakeVault */ .om.CakeVault && vaultData.userData.locked ? t("Locked") : t("Staked")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                            position: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                                    lineHeight: "1",
                                                    bold: true,
                                                    fontSize: "20px",
                                                    decimals: 5,
                                                    value: vaultKey ? cakeAsNumberBalance : stakedTokenBalance
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_32__/* .SkeletonV2 */ .i, {
                                                    isDataReady: Number.isFinite(vaultKey ? stakedAutoDollarValue : stakedTokenDollarBalance),
                                                    width: 120,
                                                    wrapperProps: {
                                                        height: "20px"
                                                    },
                                                    skeletonTop: "2px",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                                                        fontSize: "12px",
                                                        display: "inline",
                                                        color: "textSubtle",
                                                        decimals: 2,
                                                        value: vaultKey ? stakedAutoDollarValue : stakedTokenDollarBalance,
                                                        unit: " USD",
                                                        prefix: "~"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.Locked */ .PS.Locked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                        mt: "16px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Buttons_AddCakeButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            lockEndTime: vaultData.userData.lockEndTime,
                                            lockStartTime: vaultData.userData.lockStartTime,
                                            currentLockedAmount: cakeAsBigNumber,
                                            stakingToken: stakingToken,
                                            currentBalance: stakingTokenBalance,
                                            stakingTokenBalance: stakingTokenBalance
                                        })
                                    })
                                ]
                            }),
                            vaultPosition >= utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.Locked */ .PS.Locked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                flex: "1",
                                ml: "20px",
                                flexDirection: "column",
                                alignSelf: "flex-start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                        fontSize: "12px",
                                        bold: true,
                                        color: "textSubtle",
                                        as: "span",
                                        textTransform: "uppercase",
                                        children: t("Unlocks In")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                        lineHeight: "1",
                                        mt: "8px",
                                        bold: true,
                                        fontSize: "20px",
                                        color: vaultPosition >= utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.LockedEnd */ .PS.LockedEnd ? "#D67E0A" : "text",
                                        children: [
                                            vaultPosition >= utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.LockedEnd */ .PS.LockedEnd ? t("Unlocked") : remainingTime,
                                            tagTooltipVisibleOfBurn && tagTooltipOfBurn,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                ref: tagTargetRefOfBurn,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                                                    ml: "4px",
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "textSubtle"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                        height: "20px",
                                        fontSize: "12px",
                                        display: "inline",
                                        color: vaultPosition >= utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.LockedEnd */ .PS.LockedEnd ? "#D67E0A" : "text",
                                        children: t("On %date%", {
                                            date: lockEndDate
                                        })
                                    }),
                                    vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.Locked */ .PS.Locked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                                        mt: "16px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Buttons_ExtendDurationButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                            lockEndTime: vaultData.userData.lockEndTime,
                                            lockStartTime: vaultData.userData.lockStartTime,
                                            stakingToken: stakingToken,
                                            currentBalance: stakingTokenBalance,
                                            currentLockedAmount: cakeAsNumberBalance,
                                            children: t("Extend")
                                        })
                                    })
                                ]
                            }),
                            (vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.Flexible */ .PS.Flexible || !vaultKey) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconButtonWrapper, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                                        variant: "secondary",
                                        onClick: onUnstake,
                                        mr: "6px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                            color: "primary",
                                            width: "14px"
                                        })
                                    }),
                                    reachStakingLimit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        ref: targetRef,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                                            variant: "secondary",
                                            disabled: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                                                color: "textDisabled",
                                                width: "24px",
                                                height: "24px"
                                            })
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                                        variant: "secondary",
                                        onClick: stakingTokenBalance.gt(0) ? onStake : onPresentTokenRequired,
                                        disabled: isFinished,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                                            color: "primary",
                                            width: "14px"
                                        })
                                    })
                                ]
                            }),
                            !isMobile && vaultPosition >= utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.LockedEnd */ .PS.LockedEnd && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                flex: "1",
                                ml: "20px",
                                flexDirection: "column",
                                alignSelf: "flex-start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                        fontSize: "12px",
                                        bold: true,
                                        color: "textSubtle",
                                        as: "span",
                                        textTransform: "uppercase",
                                        children: vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.AfterBurning */ .PS.AfterBurning ? t("After Burning") : t("After Burning In")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                        lineHeight: "1",
                                        mt: "8px",
                                        bold: true,
                                        fontSize: "20px",
                                        color: "failure",
                                        children: vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.AfterBurning */ .PS.AfterBurning ? (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z)(vaultData.userData.currentOverdueFee) ? "-" : t("%amount% Burned", {
                                            amount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__/* .getFullDisplayBalance */ .NJ)(vaultData.userData.currentOverdueFee, 18, 5)
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_BurningCountDown__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                            lockEndTime: vaultData.userData.lockEndTime
                                        })
                                    })
                                ]
                            }),
                            tooltipVisible && tooltip
                        ]
                    })
                }),
                isMobile && vaultPosition >= utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.LockedEnd */ .PS.LockedEnd && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    mb: "24px",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                            fontSize: "14px",
                            color: "failure",
                            as: "span",
                            children: vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.AfterBurning */ .PS.AfterBurning ? t("After Burning") : t("After Burning In")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                            fontSize: "14px",
                            bold: true,
                            color: "failure",
                            children: vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.AfterBurning */ .PS.AfterBurning ? (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z)(vaultData.userData.currentOverdueFee) ? "-" : t("%amount% Burned", {
                                amount: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_12__/* .getFullDisplayBalance */ .NJ)(vaultData.userData.currentOverdueFee, 18, 5)
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_BurningCountDown__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                lockEndTime: vaultData.userData.lockEndTime
                            })
                        })
                    ]
                }),
                [
                    utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.AfterBurning */ .PS.AfterBurning,
                    utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.LockedEnd */ .PS.LockedEnd
                ].includes(vaultPosition) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                    width: "100%",
                    mt: [
                        "0",
                        "0",
                        "24px",
                        "24px",
                        "24px"
                    ],
                    ml: [
                        "0",
                        "0",
                        "12px",
                        "12px",
                        "12px",
                        "32px"
                    ],
                    mr: [
                        "0",
                        "0",
                        "12px",
                        "12px",
                        "12px",
                        "0px"
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_AfterLockedActions__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                        isInline: true,
                        position: vaultPosition,
                        currentLockedAmount: cakeAsNumberBalance,
                        stakingToken: stakingToken,
                        lockEndTime: "0",
                        lockStartTime: "0"
                    })
                }),
                vaultKey === state_types__WEBPACK_IMPORTED_MODULE_8__/* .VaultKey.CakeVault */ .om.CakeVault && vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_9__/* .VaultPosition.Flexible */ .PS.Flexible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                    width: "100%",
                    mt: [
                        "0",
                        "0",
                        "24px",
                        "24px",
                        "24px"
                    ],
                    ml: [
                        "0",
                        "0",
                        "12px",
                        "12px",
                        "32px"
                    ],
                    mr: [
                        "0",
                        "0",
                        "12px",
                        "12px",
                        "0"
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LockedPool_Common_ConvertToLock__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                        stakingToken: stakingToken,
                        currentStakedAmount: cakeAsNumberBalance,
                        isInline: true
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContainer */ .sX, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionTitles */ .Ad, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        bold: true,
                        color: "secondary",
                        as: "span",
                        textTransform: "uppercase",
                        children: [
                            t("Stake"),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        bold: true,
                        color: "textSubtle",
                        as: "span",
                        textTransform: "uppercase",
                        children: stakingToken.symbol
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_20__/* .ActionContent */ .O6, {
                children: vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultStakeButtonGroup__WEBPACK_IMPORTED_MODULE_21__/* .VaultStakeButtonGroup */ .w, {
                    onFlexibleClick: stakingTokenBalance.gt(0) ? onStake : onPresentTokenRequired,
                    onLockedClick: vaultKey === state_types__WEBPACK_IMPORTED_MODULE_8__/* .VaultKey.CakeVault */ .om.CakeVault ? openPresentLockedStakeModal : null
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                    width: "100%",
                    onClick: stakingTokenBalance.gt(0) ? onStake : onPresentTokenRequired,
                    variant: "secondary",
                    disabled: isFinished,
                    children: t("Stake")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Staked);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ad": () => (/* binding */ ActionTitles),
/* harmony export */   "O6": () => (/* binding */ ActionContent),
/* harmony export */   "W_": () => (/* binding */ RowActionContainer),
/* harmony export */   "sX": () => (/* binding */ ActionContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f91bd6da-0"
})`
  flex-direction: column;
  padding: 16px;
  border: 2px solid ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  margin-bottom: 16px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
  }
}

  ${({ theme  })=>theme.mediaQueries.xl} {
    margin-left: 32px;
    margin-right: 0;
  }
`;
ActionContainer.defaultProps = {
    flex: 1
};
const RowActionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ActionContainer).withConfig({
    componentId: "sc-f91bd6da-1"
})`
  flex-direction: row;
`;
const ActionTitles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-f91bd6da-2"
})`
  font-weight: 600;
  font-size: 12px;
`;
const ActionContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f91bd6da-3"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
ActionContent.defaultProps = {
    mt: "8px"
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85576);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39708);
/* harmony import */ var _Apr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97421);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BaseCell__WEBPACK_IMPORTED_MODULE_4__, _Apr__WEBPACK_IMPORTED_MODULE_5__]);
([_BaseCell__WEBPACK_IMPORTED_MODULE_4__, _Apr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AprCell = ({ pool  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { userData  } = pool;
    const stakedBalance = userData?.stakedBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__/* .BIG_ZERO */ .HW;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseCell__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        role: "cell",
        flex: [
            "1 0 50px",
            "1 0 50px",
            "2 0 100px",
            "2 0 100px",
            "1 0 120px"
        ],
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_4__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: t("APR")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Apr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    pool: pool,
                    stakedBalance: stakedBalance,
                    showIcon: !isMobile
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AprCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67891);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63799);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53887);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73486);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27240);
/* harmony import */ var _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18666);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_8__, _BaseCell__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__, _Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_8__, _BaseCell__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const AprLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c23fd31b-0"
})`
  &:hover {
    opacity: 0.5;
  }
`;
const AutoAprCell = ({ pool  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { userData  } = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const vaultPosition = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_7__/* .getVaultPosition */ .cP)(userData);
    const { flexibleApy , lockedApy  } = (0,hooks_useVaultApy__WEBPACK_IMPORTED_MODULE_3__/* .useVaultApy */ .o)({
        duration: vaultPosition > utils_cakePool__WEBPACK_IMPORTED_MODULE_7__/* .VaultPosition.Flexible */ .PS.Flexible ? +userData.lockEndTime - +userData.lockStartTime : config_constants_pools__WEBPACK_IMPORTED_MODULE_6__/* .MAX_LOCK_DURATION */ .VO
    });
    const [onPresentFlexibleApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_8__/* .VaultRoiCalculatorModal */ .E, {
        pool: pool
    }));
    const [onPresentLockedApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vault_VaultRoiCalculatorModal__WEBPACK_IMPORTED_MODULE_8__/* .VaultRoiCalculatorModal */ .E, {
        pool: pool,
        initialView: 1
    }), true, true, pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault ? "LockedVaultRoiCalculatorModal" : "FlexibleSideVaultRoiCalculatorModal");
    if (pool.vaultKey === state_types__WEBPACK_IMPORTED_MODULE_5__/* .VaultKey.CakeVault */ .om.CakeVault && vaultPosition === utils_cakePool__WEBPACK_IMPORTED_MODULE_7__/* .VaultPosition.None */ .PS.None) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    role: "cell",
                    flex: [
                        "1 0 50px",
                        "4.5",
                        "1 0 120px",
                        null,
                        "2 0 100px"
                    ],
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_9__/* .CellContent */ .J, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                textAlign: "left",
                                children: t("Flexible APY")
                            }),
                            flexibleApy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AprLabelContainer, {
                                alignItems: "center",
                                justifyContent: "flex-start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        fontSize: [
                                            "14px",
                                            "14px",
                                            "16px"
                                        ],
                                        value: parseFloat(flexibleApy),
                                        decimals: 2,
                                        unit: "%",
                                        fontWeight: [
                                            600,
                                            400
                                        ]
                                    }),
                                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onPresentFlexibleApyModal();
                                        },
                                        variant: "text",
                                        width: "20px",
                                        height: "20px",
                                        padding: "0px",
                                        marginLeft: "4px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            width: "20px"
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                width: "80px",
                                height: "16px"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    role: "cell",
                    flex: [
                        "1 0 50px",
                        "1 0 50px",
                        "2 0 100px",
                        null,
                        "1 0 120px"
                    ],
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_9__/* .CellContent */ .J, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                textAlign: "left",
                                children: t("Locked APY")
                            }),
                            lockedApy ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AprLabelContainer, {
                                alignItems: "center",
                                justifyContent: "flex-start",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    gap: "4px",
                                    flexWrap: "wrap",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            fontSize: [
                                                "14px",
                                                "14px",
                                                "16px"
                                            ],
                                            style: {
                                                whiteSpace: "nowrap"
                                            },
                                            fontWeight: [
                                                500,
                                                400
                                            ],
                                            children: t("Up to")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            fontSize: [
                                                "14px",
                                                "14px",
                                                "16px"
                                            ],
                                            value: parseFloat(lockedApy),
                                            decimals: 2,
                                            unit: "%",
                                            fontWeight: [
                                                600,
                                                400
                                            ]
                                        }),
                                        !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onPresentLockedApyModal();
                                            },
                                            variant: "text",
                                            width: "20px",
                                            height: "20px",
                                            padding: "0px",
                                            marginLeft: "4px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                color: "textSubtle",
                                                width: "20px"
                                            })
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                width: "80px",
                                height: "16px"
                            })
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        role: "cell",
        flex: [
            "1 0 50px",
            "1 0 50px",
            "2 0 100px",
            "2 0 100px",
            "1 0 120px"
        ],
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_9__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: t("APY")
                }),
                flexibleApy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AprLabelContainer, {
                    alignItems: "center",
                    justifyContent: "flex-start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            fontSize: "16px",
                            value: vaultPosition > utils_cakePool__WEBPACK_IMPORTED_MODULE_7__/* .VaultPosition.Flexible */ .PS.Flexible ? parseFloat(lockedApy) : parseFloat(flexibleApy),
                            decimals: 2,
                            unit: "%"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            onClick: (e)=>{
                                e.stopPropagation();
                                return vaultPosition > utils_cakePool__WEBPACK_IMPORTED_MODULE_7__/* .VaultPosition.Flexible */ .PS.Flexible ? onPresentLockedApyModal() : onPresentFlexibleApyModal();
                            },
                            variant: "text",
                            width: "20px",
                            height: "20px",
                            padding: "0px",
                            marginLeft: "4px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                width: "20px"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "16px"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoAprCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41742);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42791);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93638);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11496);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var views_Pools_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9681);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39708);
/* harmony import */ var _AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _BaseCell__WEBPACK_IMPORTED_MODULE_6__, _AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__, _BaseCell__WEBPACK_IMPORTED_MODULE_6__, _AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-663622e-0"
})`
  flex: 4.5;
  ${({ theme  })=>theme.mediaQueries.sm} {
    flex: 1 0 120px;
  }
`;
const HelpIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-663622e-1"
})`
  align-self: center;
`;
const AutoEarningsCell = ({ pool , account  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { earningTokenPrice , vaultKey  } = pool;
    const vaultData = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useVaultPoolByKey */ .eB)(vaultKey);
    const { userData: { userShares , cakeAtLastUserAction , isLoading  } , pricePerFullShare ,  } = vaultData;
    const { hasAutoEarnings , autoCakeToDisplay , autoUsdToDisplay  } = (0,views_Pools_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCakeVaultEarnings */ .UN)(account, cakeAtLastUserAction, userShares, pricePerFullShare, earningTokenPrice, vaultKey === state_types__WEBPACK_IMPORTED_MODULE_2__/* .VaultKey.CakeVault */ .om.CakeVault ? vaultData.userData.currentPerformanceFee.plus(vaultData.userData.currentOverdueFee).plus(vaultData.userData.userBoostedShare) : null);
    const labelText = t("Recent CAKE profit");
    const earningTokenBalance = autoCakeToDisplay;
    const hasEarnings = hasAutoEarnings;
    const earningTokenDollarBalance = autoUsdToDisplay;
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AutoEarningsBreakdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        pool: pool,
        account: account
    }), {
        placement: "bottom"
    });
    if (vaultKey === state_types__WEBPACK_IMPORTED_MODULE_2__/* .VaultKey.CakeVault */ .om.CakeVault && !userShares.gt(0)) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCell, {
        role: "cell",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_6__/* .CellContent */ .J, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    textAlign: "left",
                    children: labelText
                }),
                isLoading && account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    width: "80px",
                    height: "16px"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        tooltipVisible && tooltip,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    mr: "8px",
                                    height: "32px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            mt: "4px",
                                            bold: !isMobile,
                                            fontSize: isMobile ? "14px" : "16px",
                                            color: hasEarnings ? "primary" : "textDisabled",
                                            decimals: hasEarnings ? 5 : 1,
                                            value: hasEarnings ? earningTokenBalance : 0
                                        }),
                                        hasEarnings ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: earningTokenPrice > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                display: "inline",
                                                fontSize: "12px",
                                                color: "textSubtle",
                                                decimals: 2,
                                                prefix: "~",
                                                value: earningTokenDollarBalance,
                                                unit: " USD"
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            mt: "4px",
                                            fontSize: "12px",
                                            color: "textDisabled",
                                            children: "0 USD"
                                        })
                                    ]
                                }),
                                hasEarnings && !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HelpIconWrapper, {
                                    ref: targetRef,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        color: "textSubtle"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoEarningsCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ CellContent),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51036);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BaseCell = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2af072c6-0"
})`
  color: black;

  padding: 24px 8px;

  flex-direction: column;
  justify-content: flex-start;
`;
const CellContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2af072c6-1"
})`
  flex-direction: column;
  justify-content: center;
  max-height: 40px;
  ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z} {
    line-height: 1;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33231);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BaseCell__WEBPACK_IMPORTED_MODULE_3__]);
_BaseCell__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-45602ce3-0"
})`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding-right: 12px;
  padding-left: 0px;
  ${({ theme  })=>theme.mediaQueries.md} {
    flex: 0 0 120px;
    padding-right: 32px;
    padding-left: 8px;
  }
`;
const ArrowIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-45602ce3-1"
})`
  transform: ${({ toggled  })=>toggled ? "rotate(180deg)" : "rotate(0)"};
  height: 24px;
`;
const ExpandActionCell = ({ expanded , isFullLayout  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCell, {
        role: "cell",
        children: [
            isFullLayout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "primary",
                bold: true,
                children: expanded ? t("Hide") : t("Details")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowIcon, {
                color: "primary",
                toggled: expanded
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandActionCell);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export StakedCakeStatus */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83548);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33430);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_TokenImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46684);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73486);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93638);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85576);
/* harmony import */ var utils_cakePool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27240);
/* harmony import */ var _BaseCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__, _BaseCell__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__]);
([components_TokenImage__WEBPACK_IMPORTED_MODULE_2__, state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__, _BaseCell__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_BaseCell__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d5fdac6e-0"
})`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`;
const NameCell = ({ pool  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { sousId , stakingToken , earningToken , userData , isFinished , vaultKey , totalStaked  } = pool;
    const vaultData = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useVaultPoolByKey */ .eB)(pool.vaultKey);
    const { userData: { userShares  } , totalCakeInVault ,  } = vaultData;
    const hasVaultShares = userShares.gt(0);
    const stakingTokenSymbol = stakingToken.symbol;
    const earningTokenSymbol = earningToken.symbol;
    const stakedBalance = userData?.stakedBalance ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(userData.stakedBalance) : _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW;
    const isStaked = stakedBalance.gt(0);
    const showStakedTag = vaultKey ? hasVaultShares : isStaked;
    let title = `${t("Earn")} ${earningTokenSymbol}`;
    let subtitle = `${t("Stake")} ${stakingTokenSymbol}`;
    const showSubtitle = sousId !== 0 || sousId === 0 && !isMobile;
    if (vaultKey) {
        title = config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .vaultPoolConfig */ .Y4[vaultKey].name;
        subtitle = config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .vaultPoolConfig */ .Y4[vaultKey].description;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCell, {
        role: "cell",
        children: totalStaked && totalStaked.gte(0) || totalCakeInVault && totalCakeInVault.gte(0) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                vaultKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    ...config_constants_pools__WEBPACK_IMPORTED_MODULE_3__/* .vaultPoolConfig */ .Y4[vaultKey].tokenImage,
                    mr: "8px",
                    width: 40,
                    height: 40
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TokenImage__WEBPACK_IMPORTED_MODULE_2__/* .TokenPairImage */ .q, {
                    primaryToken: earningToken,
                    secondaryToken: stakingToken,
                    mr: "8px",
                    width: 40,
                    height: 40
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_11__/* .CellContent */ .J, {
                    children: [
                        showStakedTag && (vaultKey === state_types__WEBPACK_IMPORTED_MODULE_7__/* .VaultKey.CakeVault */ .om.CakeVault ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StakedCakeStatus, {
                            userShares: userShares,
                            locked: vaultData.userData.locked,
                            lockEndTime: vaultData.userData.lockEndTime
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            bold: true,
                            color: isFinished ? "failure" : "secondary",
                            textTransform: "uppercase",
                            children: t("Staked")
                        })),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            bold: !isMobile,
                            small: isMobile,
                            children: title
                        }),
                        showSubtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            color: "textSubtle",
                            children: subtitle
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    mr: "8px",
                    width: 36,
                    height: 36,
                    variant: "circle"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BaseCell__WEBPACK_IMPORTED_MODULE_11__/* .CellContent */ .J, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            width: 30,
                            height: 12,
                            mb: "4px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            width: 65,
                            height: 12
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameCell);
const stakedStatus = {
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_10__/* .VaultPosition.None */ .PS.None]: {
        text: "",
        color: "secondary"
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_10__/* .VaultPosition.Locked */ .PS.Locked]: {
        text: "Locked",
        color: "secondary"
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_10__/* .VaultPosition.LockedEnd */ .PS.LockedEnd]: {
        text: "Locked End",
        color: "secondary"
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_10__/* .VaultPosition.AfterBurning */ .PS.AfterBurning]: {
        text: "After Burning",
        color: "failure"
    },
    [utils_cakePool__WEBPACK_IMPORTED_MODULE_10__/* .VaultPosition.Flexible */ .PS.Flexible]: {
        text: "Flexible",
        color: "success"
    }
};
const StakedCakeStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(({ userShares , locked , lockEndTime  })=>{
    const vaultPosition = (0,utils_cakePool__WEBPACK_IMPORTED_MODULE_10__/* .getVaultPosition */ .cP)({
        userShares,
        locked,
        lockEndTime
    });
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        fontSize: "12px",
        bold: true,
        color: stakedStatus[vaultPosition].color,
        textTransform: "uppercase",
        children: t(stakedStatus[vaultPosition].text)
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ProfileRequirementWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ProfileRequirementWarning({ profileRequirement  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { notMeetRequired , notMeetThreshold  } = (0,_hooks_useProfileRequirement__WEBPACK_IMPORTED_MODULE_2__/* .useProfileRequirement */ .f)(profileRequirement);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "warning",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* .MessageText */ .Y, {
                    children: [
                        notMeetRequired && notMeetThreshold && t("This pool requires active Pancake Profile and %amount% profile points.", {
                            amount: profileRequirement.thresholdPoints.toNumber().toLocaleString()
                        }),
                        notMeetRequired && !notMeetThreshold && t("This pool requires active Pancake Profile"),
                        !notMeetRequired && notMeetThreshold && t("This pool requires %amount% profile points.", {
                            amount: profileRequirement.thresholdPoints.toNumber().toLocaleString()
                        })
                    ]
                }),
                (notMeetRequired || notMeetThreshold) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* .MessageText */ .Y, {
                    bold: true,
                    children: notMeetRequired ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        style: {
                            textDecoration: "underline"
                        },
                        to: "/create-profile",
                        children: [
                            t("Create Profile"),
                            " \xbb"
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        style: {
                            textDecoration: "underline"
                        },
                        to: "/profile",
                        children: [
                            t("Go to Profile"),
                            " \xbb"
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85576);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const options = {
    gasLimit: config__WEBPACK_IMPORTED_MODULE_3__/* .BOOSTED_FARM_GAS_LIMIT */ .ZM
};
const harvestPool = async (sousChefContract)=>{
    return sousChefContract.deposit("0", options);
};
const harvestPoolBnb = async (sousChefContract)=>{
    return sousChefContract.deposit({
        ...options,
        value: _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_1__/* .BIG_ZERO */ .HW
    });
};
const useHarvestPool = (sousId, isUsingBnb = false)=>{
    const sousChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useSousChef */ .AP)(sousId);
    const handleHarvest = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (isUsingBnb) {
            return harvestPoolBnb(sousChefContract);
        }
        return harvestPool(sousChefContract);
    }, [
        isUsingBnb,
        sousChefContract
    ]);
    return {
        onReward: handleHarvest
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHarvestPool);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProfileRequirement)
/* harmony export */ });
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46775);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_profile_hooks__WEBPACK_IMPORTED_MODULE_0__]);
state_profile_hooks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useProfileRequirement(profileRequirement) {
    const { profile , hasActiveProfile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useProfile */ .Un)();
    const notMeetRequired = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>profileRequirement && profileRequirement.required && !hasActiveProfile, [
        profileRequirement,
        hasActiveProfile
    ]);
    const notMeetThreshold = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>profileRequirement && profileRequirement.thresholdPoints.gt(0) && profileRequirement.thresholdPoints.gt(profile?.points ?? 0), [
        profileRequirement,
        profile
    ]);
    return {
        notMeetRequired,
        notMeetThreshold
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7599);
/* harmony import */ var _pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38766);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_4__]);
hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const options = {
    gasLimit: config__WEBPACK_IMPORTED_MODULE_2__/* .BOOSTED_FARM_GAS_LIMIT */ .ZM
};
const sousStake = async (sousChefContract, amount, decimals = 18)=>{
    return sousChefContract.deposit(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(amount).times((0,_pancakeswap_utils_getFullDecimalMultiplier__WEBPACK_IMPORTED_MODULE_3__/* .getFullDecimalMultiplier */ .t)(decimals)).toString(), options);
};
const sousStakeBnb = async (sousChefContract, amount)=>{
    return sousChefContract.deposit(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(amount).times(config__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_TOKEN_DECIMAL */ .o3).toString(), options);
};
const useStakePool = (sousId, isUsingBnb = false)=>{
    const sousChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useSousChef */ .AP)(sousId);
    const handleStake = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (amount, decimals)=>{
        if (isUsingBnb) {
            return sousStakeBnb(sousChefContract, amount);
        }
        return sousStake(sousChefContract, amount, decimals);
    }, [
        isUsingBnb,
        sousChefContract
    ]);
    return {
        onStake: handleStake
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStakePool);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const sousUnstake = (sousChefContract, amount, decimals)=>{
    const units = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.parseUnits)(amount, decimals);
    return sousChefContract.withdraw(units.toString());
};
const sousEmergencyUnstake = (sousChefContract)=>{
    return sousChefContract.emergencyWithdraw();
};
const useUnstakePool = (sousId, enableEmergencyWithdraw = false)=>{
    const sousChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useSousChef */ .AP)(sousId);
    const handleUnstake = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (amount, decimals)=>{
        if (enableEmergencyWithdraw) {
            return sousEmergencyUnstake(sousChefContract);
        }
        return sousUnstake(sousChefContract, amount, decimals);
    }, [
        enableEmergencyWithdraw,
        sousChefContract
    ]);
    return {
        onUnstake: handleUnstake
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnstakePool);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=273.js.map