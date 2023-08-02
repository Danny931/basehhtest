"use strict";
exports.id = 7073;
exports.ids = [7073,2179];
exports.modules = {

/***/ 88210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/boosterCardImage.c6eac1af.png","height":368,"width":190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAeklEQVR42mMAgc5HRaYND/NjGGAg71F+eOb9rJkMMLDncn765osFC8GcK5eviVxZmfX4/NyE/weWzrZjuLF/hfeWSSH/ZxdL/986uaGC4dPTk0ILWiOvd2fb/p8/qdKXAQS2Tc4r3zAhdS0DDLzZlGD46USqEwMDAwMAVm0zycEPAAMAAAAASUVORK5CYII=","blurWidth":4,"blurHeight":8});

/***/ }),

/***/ 54221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sA": () => (/* binding */ harvestFarm),
  "qq": () => (/* binding */ nonBscStakeFarm),
  "zv": () => (/* binding */ nonBscUnstakeFarm),
  "AQ": () => (/* binding */ stakeFarm),
  "dU": () => (/* binding */ unstakeFarm)
});

// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(34215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(7599);
// EXTERNAL MODULE: ../../packages/utils/bigNumber.ts
var bigNumber = __webpack_require__(85576);
// EXTERNAL MODULE: ./src/utils/contractHelpers.ts + 29 modules
var contractHelpers = __webpack_require__(12895);
;// CONCATENATED MODULE: ./src/views/Farms/hooks/getNonBscVaultFee.ts



var MessageTypes;
(function(MessageTypes) {
    MessageTypes[MessageTypes["Deposit"] = 0] = "Deposit";
    MessageTypes[MessageTypes["Withdraw"] = 1] = "Withdraw";
    MessageTypes[MessageTypes["EmergencyWithdraw"] = 2] = "EmergencyWithdraw";
    MessageTypes[MessageTypes["Claim"] = 3] = "Claim";
})(MessageTypes || (MessageTypes = {}));
var Chains;
(function(Chains) {
    Chains[Chains["EVM"] = 0] = "EVM";
    Chains[Chains["BSC"] = 1] = "BSC";
})(Chains || (Chains = {}));
const COMPENSATION_PRECISION = 1e5;
const ORACLE_PRECISION = 1e18;
const BNB_CHANGE = 5000000000000000;
const BUFFER = 1.3;
const WITHDRAW_BUFFER = 1.4;
const getNonBscVaultContractFee = async ({ pid , amount , chainId , userAddress , messageType , oraclePrice , gasPrice  })=>{
    try {
        const nonBscVaultContract = (0,contractHelpers/* getNonBscVaultContract */.aM)(null, chainId);
        const crossFarmingAddress = (0,contractHelpers/* getCrossFarmingSenderContract */.bd)(null, chainId);
        const exchangeRate = new (external_bignumber_js_default())(ORACLE_PRECISION).div(oraclePrice).times(ORACLE_PRECISION) // invert into BNB/ETH price
        ;
        const getNonce = await crossFarmingAddress.nonces(userAddress, pid);
        const nonce = new (external_bignumber_js_default())(getNonce.toString()).toJSON();
        const [encodeMessage, hasFirstTime, estimateGaslimit] = await Promise.all([
            nonBscVaultContract.encodeMessage(userAddress, pid, amount, messageType, nonce),
            crossFarmingAddress.is1st(userAddress),
            crossFarmingAddress.estimateGaslimit(Chains.BSC, userAddress, messageType), 
        ]);
        const calcFee = await nonBscVaultContract.calcFee(encodeMessage);
        const msgBusFee = new (external_bignumber_js_default())(calcFee.toString());
        const destTxFee = new (external_bignumber_js_default())(gasPrice).times(estimateGaslimit.toString()).times(exchangeRate).times(COMPENSATION_PRECISION).div(new (external_bignumber_js_default())(ORACLE_PRECISION).times(COMPENSATION_PRECISION));
        const totalFee = new (external_bignumber_js_default())(msgBusFee).plus(destTxFee);
        if (!hasFirstTime) {
            const depositFee = new (external_bignumber_js_default())(BNB_CHANGE).times(exchangeRate).div(ORACLE_PRECISION);
            return totalFee.plus(depositFee).times(BUFFER).toFixed(0);
        }
        if (messageType >= MessageTypes.Withdraw) {
            const estimateEvmGaslimit = await crossFarmingAddress.estimateGaslimit(Chains.EVM, userAddress, messageType);
            const fee = msgBusFee.times(exchangeRate).div(ORACLE_PRECISION);
            const total = new (external_bignumber_js_default())(gasPrice).times(estimateEvmGaslimit.toString()).plus(fee);
            return totalFee.plus(total).times(WITHDRAW_BUFFER).toFixed(0);
        }
        return totalFee.times(BUFFER).toFixed(0);
    } catch (error) {
        console.error("Failed to fetch non BscVault fee", error);
        return bigNumber/* BIG_ZERO.toJSON */.HW.toJSON();
    }
};

;// CONCATENATED MODULE: ./src/utils/calls/farms.ts



const options = {
    gasLimit: config/* BOOSTED_FARM_GAS_LIMIT */.ZM
};
const stakeFarm = async (masterChefContract, pid, amount)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    return masterChefContract.deposit(pid, value, options);
};
const unstakeFarm = async (masterChefContract, pid, amount)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    return masterChefContract.withdraw(pid, value, options);
};
const harvestFarm = async (masterChefContract, pid)=>{
    return masterChefContract.deposit(pid, "0", options);
};
const nonBscStakeFarm = async (contract, pid, amount, gasPrice, account, oraclePrice, chainId)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    const totalFee = await getNonBscVaultContractFee({
        pid,
        chainId,
        gasPrice,
        oraclePrice,
        amount: value,
        userAddress: account,
        messageType: MessageTypes.Deposit
    });
    console.info(totalFee, "stake totalFee");
    return contract.deposit(pid, value, {
        value: totalFee
    });
};
const nonBscUnstakeFarm = async (contract, pid, amount, gasPrice, account, oraclePrice, chainId)=>{
    const value = new (external_bignumber_js_default())(amount).times(config/* DEFAULT_TOKEN_DECIMAL */.o3).toString();
    const totalFee = await getNonBscVaultContractFee({
        pid,
        chainId,
        gasPrice,
        oraclePrice,
        amount: value,
        userAddress: account,
        messageType: MessageTypes.Withdraw
    });
    console.info(totalFee, "unstake totalFee");
    return contract.withdraw(pid, value, {
        value: totalFee
    });
};


/***/ }),

/***/ 72179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zj": () => (/* reexport */ callWithEstimateGas),
  "yp": () => (/* reexport */ getActivePools),
  "sA": () => (/* reexport */ farms/* harvestFarm */.sA),
  "qq": () => (/* reexport */ farms/* nonBscStakeFarm */.qq),
  "zv": () => (/* reexport */ farms/* nonBscUnstakeFarm */.zv),
  "AQ": () => (/* reexport */ farms/* stakeFarm */.AQ),
  "dU": () => (/* reexport */ farms/* unstakeFarm */.dU)
});

// UNUSED EXPORTS: estimateGas

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5305);
;// CONCATENATED MODULE: ./src/utils/calls/estimateGas.ts

/**
 * Estimate the gas needed to call a function, and add a 10% margin
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param gasMarginPer10000 The gasMargin per 10000 (i.e. 10% -> 1000)
 * @param args An array of arguments to pass to the method
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */ const estimateGas = async (contract, methodName, methodArgs, overrides = {}, gasMarginPer10000)=>{
    if (!contract[methodName]) {
        throw new Error(`Method ${methodName} doesn't exist on ${contract.address}`);
    }
    const rawGasEstimation = await contract.estimateGas[methodName](...methodArgs, overrides);
    // By convention, BigNumber values are multiplied by 1000 to avoid dealing with real numbers
    const gasEstimation = (0,utils/* calculateGasMargin */.yC)(rawGasEstimation, gasMarginPer10000);
    return gasEstimation;
};
/**
 * Perform a contract call with a gas value returned from estimateGas
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param methodArgs An array of arguments to pass to the method
 * @param overrides An overrides object to pass to the method
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */ const callWithEstimateGas = async (contract, methodName, methodArgs, overrides = {}, gasMarginPer10000 = 1000)=>{
    const gasEstimation = await estimateGas(contract, methodName, methodArgs, overrides, gasMarginPer10000);
    const tx = await contract[methodName](...methodArgs, {
        gasLimit: gasEstimation,
        ...overrides
    });
    return tx;
};

// EXTERNAL MODULE: ./src/utils/calls/farms.ts + 1 modules
var farms = __webpack_require__(54221);
// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(34215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
// EXTERNAL MODULE: ./src/config/constants/pools.tsx
var pools = __webpack_require__(73486);
// EXTERNAL MODULE: ./src/config/abi/sousChefV2.json
var sousChefV2 = __webpack_require__(9022);
// EXTERNAL MODULE: ./src/utils/multicall.ts
var multicall = __webpack_require__(25152);
// EXTERNAL MODULE: ./src/utils/providers.ts
var providers = __webpack_require__(11536);
// EXTERNAL MODULE: ./src/utils/addressHelpers.ts
var addressHelpers = __webpack_require__(70627);
;// CONCATENATED MODULE: ./src/utils/calls/pools.ts
/* eslint-disable import/prefer-default-export */ 





/**
 * Returns the total number of pools that were active at a given block
 */ const getActivePools = async (block)=>{
    const eligiblePools = pools/* default.filter */.ZP.filter((pool)=>pool.sousId !== 0).filter((pool)=>pool.isFinished === false || pool.isFinished === undefined);
    const blockNumber = block || await providers/* bscRpcProvider.getBlockNumber */.v.getBlockNumber();
    const startBlockCalls = eligiblePools.map(({ contractAddress  })=>({
            address: (0,addressHelpers/* getAddress */.Kn)(contractAddress, 56),
            name: "startBlock"
        }));
    const endBlockCalls = eligiblePools.map(({ contractAddress  })=>({
            address: (0,addressHelpers/* getAddress */.Kn)(contractAddress, 56),
            name: "bonusEndBlock"
        }));
    const [startBlocks, endBlocks] = await Promise.all([
        (0,multicall/* default */.Z)(sousChefV2, startBlockCalls),
        (0,multicall/* default */.Z)(sousChefV2, endBlockCalls), 
    ]);
    return eligiblePools.reduce((accum, poolCheck, index)=>{
        const startBlock = startBlocks[index] ? new (external_bignumber_js_default())(startBlocks[index]) : null;
        const endBlock = endBlocks[index] ? new (external_bignumber_js_default())(endBlocks[index]) : null;
        if (!startBlock || !endBlock) {
            return accum;
        }
        if (startBlock.gte(blockNumber) || endBlock.lte(blockNumber)) {
            return accum;
        }
        return [
            ...accum,
            poolCheck
        ];
    }, []);
};

;// CONCATENATED MODULE: ./src/utils/calls/index.ts





/***/ }),

/***/ 3763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.

const getLiquidityUrlPathParts = ({ quoteTokenAddress , tokenAddress , chainId  })=>{
    const wNativeAddress = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId];
    const firstPart = !quoteTokenAddress || quoteTokenAddress === wNativeAddress?.address ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol : quoteTokenAddress;
    const secondPart = !tokenAddress || tokenAddress === wNativeAddress?.address ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol : tokenAddress;
    return `${firstPart}/${secondPart}?chainId=${chainId}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLiquidityUrlPathParts);


/***/ }),

/***/ 59709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tn": () => (/* binding */ BCakeBoosterCard),
/* harmony export */   "k2": () => (/* binding */ useBCakeTooltipContent)
/* harmony export */ });
/* unused harmony exports CardWrapper, ImageWrapper */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94207);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(24278);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39480);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62704);
/* harmony import */ var _hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92516);
/* harmony import */ var _hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82159);
/* harmony import */ var _images_boosterCardImage_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88210);
/* harmony import */ var _YieldBooster_components_CreateProxyButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_7__, _hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_8__, _hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_9__, _YieldBooster_components_CreateProxyButton__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_7__, _hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_8__, _hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_9__, _YieldBooster_components_CreateProxyButton__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-71a91acc-0"
})`
  position: relative;
  width: 100%;
  margin-top: 10px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    width: 296px;
    margin-left: 50px;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    margin-top: 0px;
  }
`;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-71a91acc-1"
})`
  position: absolute;
  top: -50px;
  transform: translateY(-50%) scale(75%);
  right: 10px;
  ${({ theme  })=>theme.mediaQueries.sm} {
    right: auto;
    top: 50%;
    left: -70px;
    transform: translateY(-50%);
  }
  z-index: 2;
`;
const StyledCardBody = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-71a91acc-2"
})`
  border-bottom: none;
`;
const StyledCardFooter = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
    componentId: "sc-71a91acc-3"
})`
  border-top: none;
  position: relative;
  padding: 8px 24px 16px;
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: calc(100% - 48px);
    top: 0px;
    left: 24px;
    background-color: ${({ theme  })=>theme.colors.cardBorder};
  }
`;
const useBCakeTooltipContent = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const tooltipContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                mb: "20px",
                children: t("Yield Boosters allow you to boost your farming yields by locking CAKE in the fixed-term staking CAKE pool. The more CAKE you lock, and the longer you lock them, the higher the boost you will receive.")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: [
                    t("To learn more, check out the"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        target: "_blank",
                        href: "https://medium.com/pancakeswap/introducing-bcake-farm-yield-boosters-b27b7a6f0f84",
                        children: t("Medium Article")
                    })
                ]
            })
        ]
    });
    return tooltipContent;
};
const BCakeBoosterCard = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
    const tooltipContent = useBCakeTooltipContent();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start",
        ...isMobile && {
            hideTimeout: 1500
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _images_boosterCardImage_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                    alt: "boosterCardImage",
                    width: 99,
                    height: 191,
                    placeholder: "blur"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                p: "0px",
                style: {
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCardBody, {
                        style: {
                            padding: "15px 24px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                fontSize: 22,
                                bold: true,
                                color: "text",
                                marginBottom: "-12px",
                                display: "inline-block",
                                ml: "7px",
                                children: t("Yield Booster")
                            }),
                            tooltipVisible && tooltip,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                ref: targetRef,
                                style: {
                                    float: "right",
                                    position: "relative",
                                    top: "6px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    color: theme.colors.textSubtle
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCardFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardContent, {})
                    })
                ]
            })
        ]
    });
};
const CardContent = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { proxyCreated , refreshProxyAddress  } = (0,_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_7__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const { maxBoostCounts , remainingCounts  } = (0,_hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_8__/* .useUserBoosterStatus */ .p)(account);
    const { locked , lockedEnd  } = (0,_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_9__/* .useUserLockedCakeStatus */ .u)();
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                bold: true,
                children: t("Connect wallet to view booster")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                mb: "16px",
                children: t("An active fixed-term CAKE staking position is required for activating farm yield boosters.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                width: "100%",
                style: {
                    backgroundColor: theme.colors.textSubtle
                }
            })
        ]
    });
    if (!locked) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                bold: true,
                children: t("No CAKE locked")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                mb: "16px",
                children: t("An active fixed-term CAKE staking position is required for activating farm yield boosters.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: "/pools",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    as: "a",
                    width: "100%",
                    style: {
                        backgroundColor: theme.colors.textSubtle
                    },
                    children: t("Go to Pool")
                })
            })
        ]
    });
    if (lockedEnd === "0" || new Date() > new Date(parseInt(lockedEnd) * 1000)) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                bold: true,
                children: t("Locked staking is ended")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                mb: "16px",
                children: t("An active fixed-term CAKE staking position is required for activating farm yield boosters.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: "/pools",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    as: "a",
                    width: "100%",
                    style: {
                        backgroundColor: theme.colors.textSubtle
                    },
                    children: t("Go to Pool")
                })
            })
        ]
    });
    if (!proxyCreated) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    fontSize: 12,
                    bold: true,
                    children: t("Available Yield Booster")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    fontSize: 12,
                    mb: "16px",
                    children: t("A one-time setup is required for enabling farm yield boosters.")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YieldBooster_components_CreateProxyButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    onDone: refreshProxyAddress,
                    style: {
                        backgroundColor: theme.colors.textSubtle
                    }
                })
            ]
        });
    }
    if (remainingCounts > 0) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "5px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: 12,
                        bold: true,
                        textTransform: "uppercase",
                        children: t("Available Yield Booster")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: 16,
                        bold: true,
                        textTransform: "uppercase",
                        children: [
                            remainingCounts,
                            "/",
                            maxBoostCounts
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                children: t("You will be able to activate the yield booster on an additional %num% farm(s).", {
                    num: remainingCounts
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: 12,
                        bold: true,
                        textTransform: "uppercase",
                        children: t("Available Yield Booster")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: 12,
                        bold: true,
                        textTransform: "uppercase",
                        children: "0"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                color: "textSubtle",
                fontSize: 12,
                children: t("To activate yield boosters on additional farms, unset yield boosters on some currently boosted farms.")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2892);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32317);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19193);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85207);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57268);
/* harmony import */ var _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65563);
/* harmony import */ var _YieldBooster_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16406);
/* harmony import */ var _YieldBooster_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_5__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_7__, _YieldBooster_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_5__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__, _YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_7__, _YieldBooster_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_8__, _YieldBooster_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ApyButton = ({ variant , pid , lpLabel , lpTokenPrice , lpSymbol , cakePrice , apr , multiplier , displayApr , lpRewardsApr , addLiquidityUrl , strikethrough , useTooltipText , hideButton , boosted ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { account  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { 0: bCakeMultiplier , 1: setBCakeMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>null);
    const { tokenBalance , stakedBalance , proxy  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useFarmUser */ .Dx)(pid);
    const { lpTotalSupply  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useFarmFromPid */ .f6)(pid);
    const { boosterState , proxyAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_YieldBooster_components_ProxyFarmContainer__WEBPACK_IMPORTED_MODULE_7__/* .YieldBoosterStateContext */ ._);
    const userBalanceInFarm = stakedBalance.plus(tokenBalance).gt(0) ? stakedBalance.plus(tokenBalance) : proxy.stakedBalance.plus(proxy.tokenBalance);
    const boosterMultiplierFromFE = (0,_YieldBooster_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_9__/* .useGetBoostedMultiplier */ .ax)(userBalanceInFarm, lpTotalSupply);
    const boostMultiplierFromSC = (0,_YieldBooster_hooks_useBoostMultiplier__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        pid,
        boosterState,
        proxyAddress
    });
    const boostMultiplier = userBalanceInFarm.eq(0) ? boostMultiplierFromSC : boosterMultiplierFromFE;
    const boostMultiplierDisplay = boostMultiplier.toLocaleString(undefined, {
        maximumFractionDigits: 3
    });
    const [onPresentApyModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        account: account,
        pid: pid,
        linkLabel: t("Get %symbol%", {
            symbol: lpLabel
        }),
        stakingTokenBalance: userBalanceInFarm,
        stakingTokenSymbol: lpSymbol,
        stakingTokenPrice: lpTokenPrice.toNumber(),
        earningTokenPrice: cakePrice.toNumber(),
        apr: bCakeMultiplier ? apr * bCakeMultiplier : apr,
        multiplier: multiplier,
        displayApr: bCakeMultiplier ? (lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default()(displayApr) - apr + apr * bCakeMultiplier).toFixed(2) : displayApr,
        linkHref: addLiquidityUrl,
        isFarm: true,
        bCakeCalculatorSlot: (calculatorBalance)=>boosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                targetInputBalance: calculatorBalance,
                earningTokenPrice: cakePrice.toNumber(),
                lpTotalSupply: lpTotalSupply,
                setBCakeMultiplier: setBCakeMultiplier
            }) : null
    }), false, true, `FarmModal${pid}`);
    const handleClickButton = (event)=>{
        event.stopPropagation();
        onPresentApyModal();
    };
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                children: [
                    t("APR (incl. LP rewards)"),
                    ":",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        style: {
                            display: "inline-block"
                        },
                        color: strikethrough && "secondary",
                        children: strikethrough ? `${(apr * boostMultiplier + lpRewardsApr).toFixed(2)}%` : `${displayApr}%`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                ml: "5px",
                children: [
                    "*",
                    t("Base APR (CAKE yield only)"),
                    ":",
                    " ",
                    strikethrough ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        style: {
                            display: "inline-block"
                        },
                        color: "secondary",
                        children: `${(apr * boostMultiplier).toFixed(2)}%`
                    }) : `${apr.toFixed(2)}%`
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                ml: "5px",
                children: [
                    "*",
                    t("LP Rewards APR"),
                    ": ",
                    lpRewardsApr === 0 ? "-" : lpRewardsApr,
                    "%"
                ]
            }),
            strikethrough && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                children: [
                    t("Available Boosted"),
                    ":",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "secondary",
                        style: {
                            display: "inline-block"
                        },
                        children: t("Up to %boostMultiplier%x", {
                            boostMultiplier: boostMultiplierDisplay
                        })
                    })
                ]
            }),
            strikethrough && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                color: "secondary",
                children: t("Boost only applies to base APR (CAKE yield)")
            })
        ]
    }), {
        placement: "top"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .Farm.FarmApyButton */ .l.FarmApyButton, {
        variant: variant,
        hideButton: hideButton,
        strikethrough: strikethrough,
        handleClickButton: handleClickButton,
        children: useTooltipText ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    ref: targetRef,
                    decorationColor: "secondary",
                    children: [
                        displayApr,
                        "%"
                    ]
                }),
                tooltipVisible && tooltip
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                displayApr,
                "%"
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApyButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var views_Farms_components_FarmCard_ApyButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74637);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7599);
/* harmony import */ var utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3763);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33430);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Farms_components_FarmCard_ApyButton__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([views_Farms_components_FarmCard_ApyButton__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e0aad916-0"
})`
  display: flex;
  align-items: center;
  color: ${({ theme  })=>theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme  })=>theme.colors.textSubtle};
      }
    }
  }
`;
const AprWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e0aad916-1"
})`
  min-width: 60px;
  text-align: left;
`;
const Apr = ({ value , pid , lpLabel , lpSymbol , lpTokenPrice , multiplier , tokenAddress , quoteTokenAddress , cakePrice , originalValue , hideButton =false , strikethrough , lpRewardsApr , useTooltipText =true , boosted ,  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const liquidityUrlPathParts = (0,utils_getLiquidityUrlPathParts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        quoteTokenAddress,
        tokenAddress,
        chainId
    });
    const addLiquidityUrl = `${config__WEBPACK_IMPORTED_MODULE_3__/* .BASE_ADD_LIQUIDITY_URL */ .wI}/${liquidityUrlPathParts}`;
    return originalValue !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: originalValue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Farms_components_FarmCard_ApyButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            variant: hideButton ? "text" : "text-and-button",
            pid: pid,
            lpSymbol: lpSymbol,
            lpLabel: lpLabel,
            lpTokenPrice: lpTokenPrice,
            multiplier: multiplier,
            cakePrice: cakePrice,
            apr: originalValue,
            displayApr: value,
            lpRewardsApr: lpRewardsApr,
            addLiquidityUrl: addLiquidityUrl,
            strikethrough: strikethrough,
            useTooltipText: useTooltipText,
            hideButton: hideButton,
            boosted: boosted
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AprWrapper, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                width: 60
            })
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AprWrapper, {
            children: [
                originalValue,
                "%"
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apr);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getBCakeMultiplier),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75784);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41022);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(84373);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7599);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24671);
/* harmony import */ var views_Farms_components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59709);
/* harmony import */ var views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82159);
/* harmony import */ var views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14457);
/* harmony import */ var _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83117);
/* harmony import */ var _BCakeLockedDuration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, views_Farms_components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_9__, views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_10__, _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_12__, _BCakeLockedDuration__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, views_Farms_components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_9__, views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_10__, _hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_12__, _BCakeLockedDuration__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const BCakeBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-2891997b-0"
})`
  background-color: ${({ theme  })=>theme.colors.background};
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 16px;
`;
const BCakeCalculator = ({ targetInputBalance , earningTokenPrice , initialState , stakingTokenSymbol ="CAKE" , lpTotalSupply , setBCakeMultiplier ,  })=>{
    const { 0: isShow , 1: setIsShow  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { 0: duration , 1: setDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>(0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_11__/* .weeksToSeconds */ .AS)(1));
    const { isLoading , lockedAmount , lockedStart , lockedEnd  } = (0,views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_10__/* .useUserLockedCakeStatus */ .u)();
    const { state , setPrincipalFromUSDValue , setPrincipalFromTokenValue , toggleEditingCurrency , setCalculatorMode  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        stakingTokenPrice: earningTokenPrice,
        earningTokenPrice,
        autoCompoundFrequency: 0
    }, initialState);
    const { editingCurrency  } = state.controls;
    const { principalAsUSD , principalAsToken  } = state.data;
    const onBalanceFocus = ()=>{
        setCalculatorMode(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .CalculatorMode.ROI_BASED_ON_PRINCIPAL */ .ee.ROI_BASED_ON_PRINCIPAL);
    };
    const userBalanceInFarm = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(targetInputBalance).multipliedBy(config__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOKEN_DECIMAL */ .o3), [
        targetInputBalance
    ]);
    const userLockedAmount = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(principalAsToken).multipliedBy(config__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOKEN_DECIMAL */ .o3), [
        principalAsToken
    ]);
    const bCakeMultiplier = (0,_hooks_useGetBoostedAPR__WEBPACK_IMPORTED_MODULE_12__/* .useGetCalculatorMultiplier */ .yK)(userBalanceInFarm, lpTotalSupply, userLockedAmount, duration);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setBCakeMultiplier(bCakeMultiplier);
    }, [
        bCakeMultiplier,
        setBCakeMultiplier
    ]);
    const editingUnit = editingCurrency === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .EditingCurrency.TOKEN */ .We.TOKEN ? stakingTokenSymbol : "USD";
    const editingValue = editingCurrency === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .EditingCurrency.TOKEN */ .We.TOKEN ? principalAsToken : principalAsUSD;
    const conversionUnit = editingCurrency === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .EditingCurrency.TOKEN */ .We.TOKEN ? "USD" : stakingTokenSymbol;
    const conversionValue = editingCurrency === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .EditingCurrency.TOKEN */ .We.TOKEN ? principalAsUSD : principalAsToken;
    const onUserInput = editingCurrency === _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .EditingCurrency.TOKEN */ .We.TOKEN ? setPrincipalFromTokenValue : setPrincipalFromUSDValue;
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const tooltipContent = (0,views_Farms_components_BCakeBoosterCard__WEBPACK_IMPORTED_MODULE_9__/* .useBCakeTooltipContent */ .k2)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(tooltipContent, {
        placement: "bottom-start"
    });
    const { targetRef: myBalanceTargetRef , tooltip: myBalanceTooltip , tooltipVisible: myBalanceTooltipVisible ,  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(t("Boost multiplier calculation does not include profit from CAKE staking pool"), {
        placement: "bottom-start"
    });
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: "secondary",
                bold: true,
                fontSize: "12px",
                textTransform: "uppercase",
                mt: "24px",
                mb: "8px",
                children: t("Yield Booster")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                scale: "md",
                checked: isShow,
                onClick: ()=>setIsShow(!isShow)
            }),
            isShow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BCakeBlock, {
                        style: {
                            marginTop: 24
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                color: "secondary",
                                bold: true,
                                fontSize: "12px",
                                textTransform: "uppercase",
                                children: t("Cake locked")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                inputProps: {
                                    scale: "sm"
                                },
                                currencyValue: `${conversionValue} ${conversionUnit}`,
                                // innerRef={balanceInputRef}
                                placeholder: "0.00",
                                value: editingValue,
                                unit: editingUnit,
                                onUserInput: onUserInput,
                                switchEditingUnits: toggleEditingCurrency,
                                onFocus: onBalanceFocus
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                justifyContent: "space-between",
                                mt: "8px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        scale: "xs",
                                        p: "4px 16px",
                                        width: "68px",
                                        variant: "tertiary",
                                        onClick: ()=>setPrincipalFromUSDValue("100"),
                                        children: "$100"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        scale: "xs",
                                        p: "4px 16px",
                                        width: "68px",
                                        variant: "tertiary",
                                        onClick: ()=>setPrincipalFromUSDValue("1000"),
                                        children: "$1000"
                                    }),
                                    myBalanceTooltipVisible && myBalanceTooltip,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        ref: myBalanceTargetRef,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            disabled: !account || isLoading || lockedAmount.eq(0),
                                            scale: "xs",
                                            p: "4px 16px",
                                            width: "128px",
                                            variant: "tertiary",
                                            style: {
                                                textTransform: "uppercase"
                                            },
                                            onClick: ()=>setPrincipalFromUSDValue((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_8__/* .getBalanceNumber */ .mW)(lockedAmount.times(earningTokenPrice)).toFixed(2)),
                                            children: t("My Balance")
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BCakeLockedDuration__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                duration: duration,
                                setDuration: setDuration,
                                currentDuration: lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default()(lockedEnd) - lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default()(lockedStart),
                                isOverMax: false
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BCakeBlock, {
                        style: {
                            marginTop: 16
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                color: "secondary",
                                bold: true,
                                fontSize: "12px",
                                textTransform: "uppercase",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: t("Boost Multiplier")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                color: "text",
                                bold: true,
                                fontSize: "20px",
                                textTransform: "uppercase",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            bCakeMultiplier,
                                            "X"
                                        ]
                                    }),
                                    tooltipVisible && tooltip,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        ref: targetRef,
                                        marginLeft: "3px",
                                        display: "inline-block",
                                        position: "relative",
                                        top: "3px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            color: theme.colors.textSubtle
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                fontSize: 12,
                                children: t("The estimated boost multiplier is calculated using live data. The actual boost multiplier may change upon activation.")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BCakeCalculator);
const CA = 0.5;
const CB = 5;
const getBCakeMultiplier = (userBalanceInFarm, userLockAmount, userLockDuration, totalLockAmount, lpBalanceOfFarm, averageLockDuration)=>{
    const dB = userBalanceInFarm.times(CA);
    const aBPart1 = lpBalanceOfFarm.times(userLockAmount).times(userLockDuration);
    const aBPart3 = totalLockAmount.times(averageLockDuration);
    const aB = aBPart1.dividedBy(CB).dividedBy(aBPart3);
    const bigNumberResult = dB.plus(aB).gt(userBalanceInFarm) ? userBalanceInFarm.dividedBy(dB) : dB.plus(aB).dividedBy(dB);
    return bigNumberResult;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55817);
/* harmony import */ var config_constants_pools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73486);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const DURATIONS = [
    1,
    5,
    10,
    25,
    52
];
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5fbc963e-0"
})`
  text-align: right;
  box-sizing: border-box;
  padding-right: 55px;
`;
const LockDurationField = ({ duration , setDuration , isOverMax , currentDuration , currentDurationLeft ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const maxAvailableDuration = currentDurationLeft ? config_constants_pools__WEBPACK_IMPORTED_MODULE_2__/* .MAX_LOCK_DURATION */ .VO - currentDurationLeft : config_constants_pools__WEBPACK_IMPORTED_MODULE_2__/* .MAX_LOCK_DURATION */ .VO;
    // When user extends the duration due to time passed when approving
    // transaction the extended duration will be a couple of seconds off to max duration,
    // therefore it is better to compare based on weeks
    const currentDurationInWeeks = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>currentDuration && (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToWeeks */ .Ot)(currentDuration), [
        currentDuration
    ]);
    const maxDurationInWeeks = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToWeeks */ .Ot)(config_constants_pools__WEBPACK_IMPORTED_MODULE_2__/* .MAX_LOCK_DURATION */ .VO), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                mb: "16px",
                mt: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        mb: "8px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            color: "textSubtle",
                            bold: true,
                            textTransform: "uppercase",
                            children: t("locked for")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        children: DURATIONS.map((week)=>{
                            const weekSeconds = (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .weeksToSeconds */ .AS)(week);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                onClick: ()=>{
                                    setDuration(weekSeconds);
                                },
                                pl: "12px",
                                pr: "12px",
                                scale: "sm",
                                disabled: weekSeconds > maxAvailableDuration,
                                variant: weekSeconds === duration ? "subtle" : "light",
                                children: [
                                    week,
                                    "W"
                                ]
                            }, week);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                mb: "8px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        mr: "8px",
                        width: "50%",
                        position: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                value: (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToWeeks */ .Ot)(duration),
                                autoComplete: "off",
                                pattern: "^[0-9]+$",
                                inputMode: "numeric",
                                scale: "sm",
                                onChange: (e)=>{
                                    const weeks = lodash_toNumber__WEBPACK_IMPORTED_MODULE_3___default()(e?.target?.value);
                                    if (e.currentTarget.validity.valid && weeks < 53) {
                                        setDuration((0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .weeksToSeconds */ .AS)(lodash_toNumber__WEBPACK_IMPORTED_MODULE_3___default()(e?.target?.value)));
                                    }
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                position: "absolute",
                                width: "60px",
                                top: "8px",
                                right: "0px",
                                color: theme.colors.text,
                                style: {
                                    textAlign: "center"
                                },
                                children: t("Weeks")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        onClick: ()=>{
                            setDuration(currentDuration);
                        },
                        scale: "sm",
                        disabled: currentDuration === 0,
                        variant: "tertiary",
                        width: "50%",
                        children: t("My Duration")
                    }, "max")
                ]
            }),
            isOverMax && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                fontSize: "12px",
                textAlign: "right",
                color: "failure",
                children: t("Total lock duration exceeds 52 weeks")
            }),
            currentDurationLeft && currentDurationInWeeks === maxDurationInWeeks ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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

/***/ 41732:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11218);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36576);
/* harmony import */ var hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78950);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74860);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([components_Toast__WEBPACK_IMPORTED_MODULE_2__, hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MAX_GAS_LIMIT = 2500000;
const CreateProxyButton = ({ onDone , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const farmBoosterProxyFactoryContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useBCakeFarmBoosterProxyFactoryContract */ .lZ)();
    const { 0: isCreateProxyLoading , 1: setIsCreateProxyLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .p)();
    const { fetchWithCatchTxError , loading  } = (0,hooks_useCatchTxError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        width: "100%",
        ...props,
        onClick: async ()=>{
            try {
                setIsCreateProxyLoading(true);
                const receipt = await fetchWithCatchTxError(()=>farmBoosterProxyFactoryContract.createFarmBoosterProxy({
                        gasLimit: MAX_GAS_LIMIT
                    }));
                if (receipt?.status) {
                    toastSuccess(t("Contract Enabled"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_2__/* .ToastDescriptionWithTx */ .Y, {
                        txHash: receipt.transactionHash
                    }));
                }
            } catch (error) {
                console.error(error);
            } finally{
                setIsCreateProxyLoading(false);
                onDone?.();
            }
        },
        isLoading: isCreateProxyLoading || loading,
        endIcon: isCreateProxyLoading || loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            spin: true,
            color: "currentColor"
        }) : undefined,
        children: isCreateProxyLoading || loading ? t("Confirming...") : t("Enable")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(CreateProxyButton));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ YieldBoosterStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const YieldBoosterStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    boosterState: _hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_3__/* .YieldBoosterState.UNCONNECTED */ .M.UNCONNECTED,
    refreshActivePool: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
    proxyFarm: {},
    shouldUseProxyFarm: false,
    refreshProxyAddress: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
    proxyAddress: ""
});
const ProxyFarmContainer = ({ children , farm  })=>{
    const { state: boosterState , refreshActivePool , shouldUseProxyFarm , refreshProxyAddress , proxyAddress ,  } = (0,_hooks_useYieldBoosterState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        farmPid: farm.pid
    });
    const proxyFarm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...farm,
            userData: farm.userData.proxy
        }), [
        farm
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(YieldBoosterStateContext.Provider, {
        value: {
            proxyAddress,
            boosterState,
            refreshActivePool,
            refreshProxyAddress,
            proxyFarm,
            shouldUseProxyFarm
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ProxyFarmContainer));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useBoostMultiplier)
/* harmony export */ });
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74860);
/* harmony import */ var config_abi_farmBooster_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74551);
/* harmony import */ var config_abi_masterchef_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84951);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15941);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9270);
/* harmony import */ var _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__, _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__, _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PRECISION_FACTOR = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from("1000000000000") // 1e12
;
async function getPublicMultiplier({ farmBoosterContract  }) {
    const calls = [
        {
            address: farmBoosterContract.address,
            name: "cA"
        },
        {
            address: farmBoosterContract.address,
            name: "CA_PRECISION"
        },
        {
            address: farmBoosterContract.address,
            name: "BOOST_PRECISION"
        }, 
    ];
    const data = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
        abi: config_abi_farmBooster_json__WEBPACK_IMPORTED_MODULE_1__,
        calls
    });
    if (!data) return 0;
    const [[cA], [CA_PRECISION], [BOOST_PRECISION]] = data;
    const MAX_BOOST_PRECISION = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from(CA_PRECISION).divUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from(cA)).mulUnsafe(PRECISION_FACTOR).subUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from(BOOST_PRECISION));
    const boostPercent = PRECISION_FACTOR.addUnsafe(MAX_BOOST_PRECISION).divUnsafe(PRECISION_FACTOR);
    return lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(boostPercent.round(3).toString());
}
async function getUserMultiplier({ farmBoosterContract , account , pid  }) {
    const calls = [
        {
            address: farmBoosterContract.address,
            name: "getUserMultiplier",
            params: [
                account,
                pid
            ]
        },
        {
            address: farmBoosterContract.address,
            name: "BOOST_PRECISION"
        }, 
    ];
    const data = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
        abi: config_abi_farmBooster_json__WEBPACK_IMPORTED_MODULE_1__,
        calls
    });
    if (!data) return 0;
    const [[multiplier], [BOOST_PRECISION]] = data;
    return lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(PRECISION_FACTOR.addUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from(multiplier)).subUnsafe(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from(BOOST_PRECISION)).divUnsafe(PRECISION_FACTOR).round(3).toString());
}
async function getMultiplierFromMC({ pid , proxyAddress , masterChefContract  }) {
    const calls = [
        {
            address: masterChefContract.address,
            name: "getBoostMultiplier",
            params: [
                proxyAddress,
                pid
            ]
        }, 
    ];
    const data = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
        abi: config_abi_masterchef_json__WEBPACK_IMPORTED_MODULE_2__,
        calls
    });
    if (!data?.length) return 0;
    const [[boostMultiplier]] = data;
    return lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.FixedNumber.from(boostMultiplier).divUnsafe(PRECISION_FACTOR).round(3).toString());
}
function useBoostMultiplier({ pid , boosterState , proxyAddress  }) {
    const farmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useBCakeFarmBoosterContract */ .gh)();
    const masterChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useMasterchef */ .y8)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_8__/* .useWeb3React */ .Ge)();
    const shouldGetFromSC = [
        _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__/* .YieldBoosterState.DEACTIVE */ .M.DEACTIVE,
        _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__/* .YieldBoosterState.ACTIVE */ .M.ACTIVE,
        _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__/* .YieldBoosterState.MAX */ .M.MAX
    ].includes(boosterState);
    const should1X = [
        _useYieldBoosterState__WEBPACK_IMPORTED_MODULE_9__/* .YieldBoosterState.LOCKED_END */ .M.LOCKED_END
    ].includes(boosterState);
    const getMultiplier = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ()=>{
        if (shouldGetFromSC) {
            return getMultiplierFromMC({
                pid,
                masterChefContract,
                proxyAddress
            });
        }
        return should1X ? getUserMultiplier({
            farmBoosterContract,
            pid,
            account
        }) : getPublicMultiplier({
            farmBoosterContract
        });
    }, [
        farmBoosterContract,
        masterChefContract,
        should1X,
        shouldGetFromSC,
        pid,
        account,
        proxyAddress
    ]);
    const cacheName = shouldGetFromSC ? `proxy${pid}` : should1X ? `user${pid}` : `public${pid}`;
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])([
        "boostMultiplier",
        cacheName
    ], getMultiplier);
    return data || 0;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ax": () => (/* binding */ useGetBoostedMultiplier),
/* harmony export */   "yK": () => (/* binding */ useGetCalculatorMultiplier)
/* harmony export */ });
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11496);
/* harmony import */ var views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85207);
/* harmony import */ var views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82159);
/* harmony import */ var views_Pools_components_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22557);
/* harmony import */ var views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_3__, views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_4__, views_Pools_components_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__]);
([state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__, views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_3__, views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_4__, views_Pools_components_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useGetBoostedMultiplier = (userBalanceInFarm, lpTotalSupply)=>{
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCakeVaultPublicData */ .uf)();
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCakeVaultUserData */ .Es)();
    const { avgLockDurationsInSeconds  } = (0,views_Pools_components_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { isLoading , lockedAmount , totalLockedAmount , lockedStart , lockedEnd  } = (0,views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_4__/* .useUserLockedCakeStatus */ .u)();
    const bCakeMultiplier = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const result = (0,views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_3__/* .getBCakeMultiplier */ .K)(userBalanceInFarm, lockedAmount, (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToDays */ .i8)(lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default()(lockedEnd) - lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default()(lockedStart)), totalLockedAmount, lpTotalSupply, avgLockDurationsInSeconds ? (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToDays */ .i8)(avgLockDurationsInSeconds) : 280);
        return result.toString() === "NaN" || isLoading ? "1.000" : result.toFixed(3);
    }, [
        userBalanceInFarm,
        lpTotalSupply,
        totalLockedAmount,
        avgLockDurationsInSeconds,
        lockedAmount,
        lockedEnd,
        lockedStart,
        isLoading, 
    ]);
    return lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default()(bCakeMultiplier);
};
const useGetCalculatorMultiplier = (userBalanceInFarm, lpTotalSupply, lockedAmount, userLockDuration)=>{
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCakeVaultPublicData */ .uf)();
    (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCakeVaultUserData */ .Es)();
    const { avgLockDurationsInSeconds  } = (0,views_Pools_components_LockedPool_hooks_useAvgLockDuration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { isLoading , totalLockedAmount  } = (0,views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_4__/* .useUserLockedCakeStatus */ .u)();
    const bCakeMultiplier = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const result = (0,views_Farms_components_YieldBooster_components_BCakeCalculator__WEBPACK_IMPORTED_MODULE_3__/* .getBCakeMultiplier */ .K)(userBalanceInFarm, lockedAmount, (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToDays */ .i8)(userLockDuration), totalLockedAmount, lpTotalSupply, avgLockDurationsInSeconds ? (0,views_Pools_components_utils_formatSecondsToWeeks__WEBPACK_IMPORTED_MODULE_6__/* .secondsToDays */ .i8)(avgLockDurationsInSeconds) : 280);
        return result.toString() === "NaN" || isLoading ? "1.000" : result.toFixed(3);
    }, [
        userBalanceInFarm,
        lpTotalSupply,
        totalLockedAmount,
        avgLockDurationsInSeconds,
        lockedAmount,
        isLoading,
        userLockDuration, 
    ]);
    return lodash_toNumber__WEBPACK_IMPORTED_MODULE_0___default()(bCakeMultiplier);
};
const useGetBoostedAPR = (userBalanceInFarm, lpTotalSupply, apr, lpRewardsApr)=>{
    const bCakeMultiplier = useGetBoostedMultiplier(userBalanceInFarm, lpTotalSupply);
    return (apr * bCakeMultiplier + lpRewardsApr).toFixed(2);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetBoostedAPR);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ YieldBoosterState),
/* harmony export */   "Z": () => (/* binding */ useYieldBoosterState)
/* harmony export */ });
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65342);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57268);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74860);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30433);
/* harmony import */ var config_abi_farmBooster_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74551);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45366);
/* harmony import */ var views_Farms_hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92516);
/* harmony import */ var views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62704);
/* harmony import */ var views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82159);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9270);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__, views_Farms_hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_5__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__, views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__, views_Farms_hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_5__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__, views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











var YieldBoosterState;
(function(YieldBoosterState) {
    YieldBoosterState[YieldBoosterState["UNCONNECTED"] = 0] = "UNCONNECTED";
    YieldBoosterState[YieldBoosterState["NO_LOCKED"] = 1] = "NO_LOCKED";
    YieldBoosterState[YieldBoosterState["LOCKED_END"] = 2] = "LOCKED_END";
    YieldBoosterState[YieldBoosterState["NO_PROXY_CREATED"] = 3] = "NO_PROXY_CREATED";
    YieldBoosterState[YieldBoosterState["NO_MIGRATE"] = 4] = "NO_MIGRATE";
    YieldBoosterState[YieldBoosterState["NO_LP"] = 5] = "NO_LP";
    YieldBoosterState[YieldBoosterState["DEACTIVE"] = 6] = "DEACTIVE";
    YieldBoosterState[YieldBoosterState["ACTIVE"] = 7] = "ACTIVE";
    YieldBoosterState[YieldBoosterState["ACTIVE_AND_NO_LP"] = 8] = "ACTIVE_AND_NO_LP";
    YieldBoosterState[YieldBoosterState["MAX"] = 9] = "MAX";
})(YieldBoosterState || (YieldBoosterState = {}));
function useIsPoolActive(pid) {
    const farmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useBCakeFarmBoosterContract */ .gh)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3React */ .Ge)();
    const { data , mutate  } = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_3__/* .useSWRMulticall */ .d5)(config_abi_farmBooster_json__WEBPACK_IMPORTED_MODULE_4__, [
        {
            address: farmBoosterContract.address,
            name: "isBoostedPool",
            params: [
                account,
                pid
            ]
        }
    ], {
        isPaused: ()=>!account
    });
    return {
        isActivePool: Array.isArray(data) ? data[0][0] : false,
        refreshIsPoolActive: mutate
    };
}
function useYieldBoosterState(yieldBoosterStateArgs) {
    const { farmPid  } = yieldBoosterStateArgs;
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { remainingCounts , refreshActivePools  } = (0,views_Farms_hooks_useUserBoosterStatus__WEBPACK_IMPORTED_MODULE_5__/* .useUserBoosterStatus */ .p)(account);
    const { locked , lockedEnd  } = (0,views_Farms_hooks_useUserLockedCakeStatus__WEBPACK_IMPORTED_MODULE_7__/* .useUserLockedCakeStatus */ .u)();
    const { stakedBalance , proxy  } = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useFarmUser */ .Dx)(farmPid);
    const { isActivePool , refreshIsPoolActive  } = useIsPoolActive(farmPid);
    const { proxyCreated , refreshProxyAddress , proxyAddress  } = (0,views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_6__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const refreshActivePool = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(()=>{
        refreshActivePools();
        refreshIsPoolActive();
    }, [
        refreshActivePools,
        refreshIsPoolActive
    ]);
    let state = null;
    if (!account || (0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(locked)) {
        state = YieldBoosterState.UNCONNECTED;
    } else if (!locked && stakedBalance.eq(0)) {
        // NOTE: depend on useCakeVaultUserData in Farm Component to check state
        state = YieldBoosterState.NO_LOCKED;
    } else if (!proxyCreated) {
        state = YieldBoosterState.NO_PROXY_CREATED;
    } else if (stakedBalance.gt(0)) {
        state = YieldBoosterState.NO_MIGRATE;
    } else if (lockedEnd === "0" || new Date() > new Date(parseInt(lockedEnd) * 1000)) {
        // NOTE: duplicate logic in BCakeBoosterCard
        state = YieldBoosterState.LOCKED_END;
    } else if (!isActivePool && proxy?.stakedBalance.eq(0)) {
        state = YieldBoosterState.NO_LP;
    } else if (!isActivePool && remainingCounts === 0) {
        state = YieldBoosterState.MAX;
    } else if (isActivePool && proxy?.stakedBalance.eq(0)) {
        state = YieldBoosterState.ACTIVE_AND_NO_LP;
    } else if (isActivePool) {
        state = YieldBoosterState.ACTIVE;
    } else {
        state = YieldBoosterState.DEACTIVE;
    }
    return {
        state,
        shouldUseProxyFarm: proxyCreated && stakedBalance.eq(0),
        refreshActivePool,
        refreshProxyAddress,
        proxyAddress
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getDisplayApr)
/* harmony export */ });
const getDisplayApr = (cakeRewardsApr, lpRewardsApr)=>{
    if (cakeRewardsApr && lpRewardsApr) {
        return (cakeRewardsApr + lpRewardsApr).toLocaleString("en-US", {
            maximumFractionDigits: 2
        });
    }
    if (cakeRewardsApr) {
        return cakeRewardsApr.toLocaleString("en-US", {
            maximumFractionDigits: 2
        });
    }
    return null;
};


/***/ }),

/***/ 34039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useApproveBoostProxyFarm),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70627);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80361);
/* harmony import */ var utils_verifyBscNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30375);





const useApproveFarm = (lpContract, chainId)=>{
    const isBscNetwork = (0,utils_verifyBscNetwork__WEBPACK_IMPORTED_MODULE_4__/* .verifyBscNetwork */ .H)(chainId);
    const contractAddress = isBscNetwork ? (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getMasterChefAddress */ .Oc)(chainId) : (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getNonBscVaultAddress */ .$N)(chainId);
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_3__/* .useCallWithMarketGasPrice */ .r)();
    const handleApprove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        return callWithMarketGasPrice(lpContract, "approve", [
            contractAddress,
            _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.MaxUint256
        ]);
    }, [
        lpContract,
        contractAddress,
        callWithMarketGasPrice
    ]);
    return {
        onApprove: handleApprove
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApproveFarm);
const useApproveBoostProxyFarm = (lpContract, proxyAddress)=>{
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_3__/* .useCallWithMarketGasPrice */ .r)();
    const handleApprove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        return proxyAddress && callWithMarketGasPrice(lpContract, "approve", [
            proxyAddress,
            _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.MaxUint256
        ]);
    }, [
        lpContract,
        proxyAddress,
        callWithMarketGasPrice
    ]);
    return {
        onApprove: handleApprove
    };
};


/***/ }),

/***/ 50256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useOraclePrice)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12895);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30433);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const getOracleAddress = (chainId)=>{
    switch(chainId){
        case _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM:
        case _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.GOERLI:
            return "0x63D407F32Aa72E63C7209ce1c2F5dA40b3AaE726" // ETH/BNB pair
            ;
        default:
            return "";
    }
};
const useOraclePrice = (chainId)=>{
    const tokenAddress = getOracleAddress(chainId);
    const chainlinkOracleContract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_1__/* .getChainlinkOracleContract */ .Qr)(tokenAddress, null, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC);
    // Can refactor to subscription later
    const { data: price  } = (0,hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_2__/* .useSWRContract */ .Av)([
        chainlinkOracleContract,
        "latestAnswer"
    ], {
        refreshWhenHidden: true,
        refreshWhenOffline: true,
        fallbackData: _ethersproject_constants__WEBPACK_IMPORTED_MODULE_3__.Zero
    });
    return price.toString();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72179);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72135);
/* harmony import */ var views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50256);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStakeFarms = (pid, vaultPid)=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const gasPrice = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useGasPrice */ .Fh)();
    const oraclePrice = (0,views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__/* .useOraclePrice */ .L)(chainId);
    const masterChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useMasterchef */ .y8)();
    const nonBscVaultContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useNonBscVault */ .LZ)();
    const handleStake = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (amount)=>{
        return (0,utils_calls__WEBPACK_IMPORTED_MODULE_2__/* .stakeFarm */ .AQ)(masterChefContract, pid, amount);
    }, [
        masterChefContract,
        pid
    ]);
    const handleStakeNonBsc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (amount)=>{
        return (0,utils_calls__WEBPACK_IMPORTED_MODULE_2__/* .nonBscStakeFarm */ .qq)(nonBscVaultContract, vaultPid, amount, gasPrice, account, oraclePrice, chainId);
    }, [
        nonBscVaultContract,
        vaultPid,
        gasPrice,
        account,
        oraclePrice,
        chainId
    ]);
    return {
        onStake: vaultPid ? handleStakeNonBsc : handleStake
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStakeFarms);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65342);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72179);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74860);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72135);
/* harmony import */ var views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50256);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useContract__WEBPACK_IMPORTED_MODULE_3__, state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useUnstakeFarms = (pid, vaultPid)=>{
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const gasPrice = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useGasPrice */ .Fh)();
    const oraclePrice = (0,views_Farms_hooks_useFetchOraclePrice__WEBPACK_IMPORTED_MODULE_5__/* .useOraclePrice */ .L)(chainId);
    const masterChefContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useMasterchef */ .y8)();
    const nonBscVaultContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useNonBscVault */ .LZ)();
    const handleUnstake = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (amount)=>{
        return (0,utils_calls__WEBPACK_IMPORTED_MODULE_2__/* .unstakeFarm */ .dU)(masterChefContract, pid, amount);
    }, [
        masterChefContract,
        pid
    ]);
    const handleUnstakeNonBsc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (amount)=>{
        return (0,utils_calls__WEBPACK_IMPORTED_MODULE_2__/* .nonBscUnstakeFarm */ .zv)(nonBscVaultContract, vaultPid, amount, gasPrice, account, oraclePrice, chainId);
    }, [
        nonBscVaultContract,
        vaultPid,
        gasPrice,
        account,
        oraclePrice,
        chainId
    ]);
    return {
        onUnstake: vaultPid ? handleUnstakeNonBsc : handleUnstake
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnstakeFarms);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useUserBoosterStatus)
/* harmony export */ });
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74860);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15941);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useContract__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_2__, swr_immutable__WEBPACK_IMPORTED_MODULE_3__]);
([hooks_useContract__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_2__, swr_immutable__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useUserBoosterStatus = (account)=>{
    const farmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useBCakeFarmBoosterContract */ .gh)();
    const { data: MAX_BOOST_POOL , status: maxBoostStatus  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_3__["default"])("maxBoostFarm", ()=>farmBoosterContract.MAX_BOOST_POOL());
    const { data: activatedPools , status , mutate ,  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(account && [
        "activatedBoostFarm",
        [
            account
        ]
    ], ()=>farmBoosterContract.activedPools(account));
    return {
        maxBoostCounts: MAX_BOOST_POOL?.toNumber() ?? 0,
        activatedPoolsCounts: activatedPools?.length ?? 0,
        remainingCounts: (MAX_BOOST_POOL?.toNumber() ?? 0) - (activatedPools?.length ?? 0),
        isLoading: maxBoostStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Fetched */ .iF.Fetched || status !== config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Fetched */ .iF.Fetched,
        refreshActivePools: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useUserLockedCakeStatus)
/* harmony export */ });
/* harmony import */ var state_pools_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11496);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_pools_hooks__WEBPACK_IMPORTED_MODULE_0__]);
state_pools_hooks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUserLockedCakeStatus = ()=>{
    const vaultPool = (0,state_pools_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useVaultPoolByKey */ .eB)(state_types__WEBPACK_IMPORTED_MODULE_1__/* .VaultKey.CakeVault */ .om.CakeVault);
    return {
        totalCakeInVault: vaultPool?.totalCakeInVault,
        totalLockedAmount: vaultPool?.totalLockedAmount,
        isLoading: vaultPool?.userData?.isLoading,
        locked: Boolean(vaultPool?.userData?.locked),
        lockedEnd: vaultPool?.userData?.lockEndTime,
        lockedAmount: vaultPool?.userData?.lockedAmount,
        lockBalance: vaultPool?.userData?.balance,
        lockedStart: vaultPool?.userData?.lockStartTime
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 94207:
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
        viewBox: "0 0 15 15",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.34588 13.6273C8.0575 13.8656 7.63823 13.7399 7.49172 13.3958L6.78828 11.7438C7.73587 11.3939 8.62311 10.9234 9.44396 10.3744C9.44396 10.3744 9.66966 11.6436 9.38982 12.3723C9.20938 12.8421 8.73469 13.3061 8.34588 13.6273ZM3.25141 8.2087L1.60451 7.50815C1.25825 7.36086 1.1335 6.93831 1.37577 6.6505C1.69974 6.26564 2.16489 5.79794 2.63298 5.61886C3.35861 5.34125 4.62149 5.55437 4.62149 5.55437C4.07225 6.3748 3.60147 7.26158 3.25141 8.2087ZM12.8903 2.10977C12.8903 2.10977 9.90266 0.830267 6.4865 4.2453C5.1647 5.56643 4.37403 7.02028 3.861 8.29315C3.69201 8.7456 3.80668 9.24027 4.13864 9.57809L5.42423 10.857C5.75619 11.1948 6.25111 11.3034 6.70378 11.1345C8.22388 10.5552 9.6041 9.66087 10.7537 8.51033C14.1699 5.09589 12.8903 2.10977 12.8903 2.10977ZM8.62311 6.3748C8.15233 5.90426 8.15233 5.13812 8.62311 4.66758C9.09389 4.19704 9.86042 4.19704 10.3312 4.66758C10.7959 5.13812 10.802 5.90426 10.3312 6.3748C9.86042 6.84534 9.09389 6.84534 8.62311 6.3748Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.77609 10.3019C3.54971 10.0756 3.23604 9.92849 2.92949 10.0208C2.22706 10.2322 1.71542 10.8838 1.71542 11.6548L1.71542 13.361H3.42253C4.19392 13.361 4.84581 12.8496 5.05736 12.1476C5.14968 11.8412 5.00246 11.5277 4.77608 11.3014L3.77609 10.3019Z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 74551:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_cake","type":"address"},{"internalType":"address","name":"_cakePool","type":"address"},{"internalType":"address","name":"_v2","type":"address"},{"internalType":"uint256","name":"_max","type":"uint256"},{"internalType":"uint256","name":"_cA","type":"uint256"},{"internalType":"uint256","name":"_cB","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"proxy","type":"address"},{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"}],"name":"ActiveFarmPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"proxy","type":"address"},{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"}],"name":"DeactiveFarmPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"proxy","type":"address"},{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"}],"name":"Refresh","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"factory","type":"address"}],"name":"UpdateBoostFactory","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"UpdateBoostFarms","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"proxy","type":"address"}],"name":"UpdateBoostProxy","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldCA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCA","type":"uint256"}],"name":"UpdateCA","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldCB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCB","type":"uint256"}],"name":"UpdateCB","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"lockedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockedDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalLockedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxLockDuration","type":"uint256"}],"name":"UpdateCakePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"factory","type":"uint256"}],"name":"UpdateMaxBoostPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"oldMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMultiplier","type":"uint256"}],"name":"UpdatePoolBoostMultiplier","type":"event"},{"inputs":[],"name":"BOOSTER_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BOOST_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BOOST_RATIO_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BOOST_WEIGHT_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CAKE_POOL","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CA_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASTER_CHEF","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BOOST_POOL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BOOST_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_CA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_CB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_CA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_CB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"activedPools","outputs":[{"internalType":"uint256[]","name":"pools","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"avgLockDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"deactive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getUserMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"isBoostedPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_lockedAmount","type":"uint256"},{"internalType":"uint256","name":"_lockedDuration","type":"uint256"},{"internalType":"uint256","name":"_totalLockedAmount","type":"uint256"},{"internalType":"uint256","name":"_maxLockDuration","type":"uint256"}],"name":"onCakePoolUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"proxyContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"refresh","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"setBoostFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"setBoosterFarms","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cA","type":"uint256"}],"name":"setCA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cB","type":"uint256"}],"name":"setCB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setMaxBoostPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePoolBoostMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"size","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;
//# sourceMappingURL=7073.js.map