"use strict";
(() => {
var exports = {};
exports.id = 6928;
exports.ids = [6928,2179];
exports.modules = {

/***/ 49384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ CommitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41774);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82451);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76166);
/* harmony import */ var _NetworkModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96081);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__, _NetworkModal__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__, _NetworkModal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const wrongNetworkProps = {
    variant: "danger",
    disabled: false,
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: "Wrong Network"
    })
};
const CommitButton = (props)=>{
    const { isWrongNetwork  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__/* .useActiveChainId */ .g)();
    const [switchNetworkLoading] = (0,hooks_useSwitchNetworkLoading__WEBPACK_IMPORTED_MODULE_1__/* .useSwitchNetworkLoading */ .c)();
    const setHideWrongNetwork = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useSetAtom)(_NetworkModal__WEBPACK_IMPORTED_MODULE_4__/* .hideWrongNetworkModalAtom */ .v);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...props,
        onClick: (e)=>{
            if (isWrongNetwork) {
                setHideWrongNetwork(false);
            } else {
                props.onClick?.(e);
            }
        },
        ...switchNetworkLoading && {
            disabled: true
        },
        ...isWrongNetwork && wrongNetworkProps
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ZapCheckbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59536);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const ZapCheckBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
    componentId: "sc-4a3af06d-0"
})`
  display: grid;
  place-content: center;
  background: ${({ theme  })=>theme.colors.background};
  border-radius: 8px 0px 0px 0px;
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-right: none;
  width: 40px;
`;
const ZapCheckbox = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ZapCheckBoxWrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            scale: "sm",
            ...props
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const StyledInternalLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()("a").withConfig({
    componentId: "sc-ce36bfda-0"
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme  })=>theme.colors.primary};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`;
const InternalLink = ({ children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInternalLink, {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InternalLink);


/***/ }),

/***/ 2904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCurrentBlockTimestamp)
/* harmony export */ });
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87070);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__, _useContract__WEBPACK_IMPORTED_MODULE_1__]);
([_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__, _useContract__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// gets the current timestamp from the blockchain
function useCurrentBlockTimestamp() {
    const multicall = (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useMulticallContract */ .gq)();
    return (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(multicall, "getCurrentBlockTimestamp")?.result?.[0];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebouncedChangeHandler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Easy way to debounce the handling of a rapidly changing value, e.g. a changing slider input
 * @param value value that is rapidly changing
 * @param onChange change handler that should receive the debounced updates to the value
 * @param debouncedMs how long we should wait for changes to be applied
 */ function useDebouncedChangeHandler(value, onChange, debouncedMs = 100) {
    const { 0: inner , 1: setInner  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>value);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const onChangeInner = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue)=>{
        setInner(newValue);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(()=>{
            onChange(newValue);
            timer.current = undefined;
        }, debouncedMs);
    }, [
        debouncedMs,
        onChange
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = undefined;
        }
        setInner(value);
    }, [
        value
    ]);
    return [
        inner,
        onChangeInner
    ];
}


/***/ }),

/***/ 61558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTransactionDeadline)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2904);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__]);
_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction
function useTransactionDeadline() {
    const ttl = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.user.userDeadline);
    const blockTimestamp = (0,_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (blockTimestamp && ttl) return blockTimestamp.add(ttl);
        return undefined;
    }, [
        blockTimestamp,
        ttl
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6657:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31196);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40495);
/* harmony import */ var views_RemoveLiquidity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29549);
/* harmony import */ var views_RemoveLiquidity_RemoveStableLiquidity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13226);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_Tokens__WEBPACK_IMPORTED_MODULE_1__, views_RemoveLiquidity__WEBPACK_IMPORTED_MODULE_4__, views_RemoveLiquidity_RemoveStableLiquidity__WEBPACK_IMPORTED_MODULE_5__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__]);
([hooks_Tokens__WEBPACK_IMPORTED_MODULE_1__, views_RemoveLiquidity__WEBPACK_IMPORTED_MODULE_4__, views_RemoveLiquidity_RemoveStableLiquidity__WEBPACK_IMPORTED_MODULE_5__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const RemoveLiquidityPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [currencyIdA, currencyIdB] = router.query.currency || [];
    const [currencyA, currencyB] = [
        (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_1__/* .useCurrency */ .U8)(currencyIdA) ?? undefined,
        (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_1__/* .useCurrency */ .U8)(currencyIdB) ?? undefined
    ];
    const { stableSwapConfig , ...config } = (0,views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)({
        tokenA: currencyA,
        tokenB: currencyB
    });
    const props = {
        currencyIdA,
        currencyIdB,
        currencyA,
        currencyB
    };
    return stableSwapConfig && router.query.stable === "1" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_6__/* .StableConfigContext.Provider */ .UA.Provider, {
        value: {
            stableSwapConfig,
            ...config
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RemoveLiquidity_RemoveStableLiquidity__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            ...props
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RemoveLiquidity__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props
    });
};
RemoveLiquidityPage.chains = utils_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .CHAIN_IDS */ .vo;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveLiquidityPage);
const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
const getStaticPaths = ()=>{
    return {
        paths: [],
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const currency = params.currency || [];
    if (currency.length === 0) {
        return {
            notFound: true
        };
    }
    if (currency.length === 1) {
        if (!OLD_PATH_STRUCTURE.test(currency[0])) {
            return {
                redirect: {
                    statusCode: 307,
                    destination: `/pool`
                }
            };
        }
        const split = currency[0].split("-");
        if (split.length > 1) {
            const [currency0, currency1] = split;
            return {
                redirect: {
                    statusCode: 307,
                    destination: `/remove/${currency0}/${currency1}`
                }
            };
        }
    }
    return {
        props: {}
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 50288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getLPSymbol)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);

const getLPSymbol = (token0Symbol, token1Symbol, chainId)=>{
    if (token0Symbol === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId].symbol) {
        return `${_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol}-${token1Symbol} LP`;
    }
    if (token1Symbol === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId].symbol) {
        return `${token0Symbol}-${_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol} LP`;
    }
    return `${token0Symbol}-${token1Symbol} LP`;
};


/***/ }),

/***/ 38662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ transactionErrorToUserReadableMessage)
/* harmony export */ });
/**
 * This is hacking out the revert reason from the ethers provider thrown error however it can.
 * This object seems to be undocumented by ethers.
 * @param error an error from the ethers provider
 * @param t Translation function
 */ function transactionErrorToUserReadableMessage(error, t) {
    let reason;
    while(error){
        reason = error.reason ?? error.data?.message ?? error.message ?? reason;
        // eslint-disable-next-line no-param-reassign
        error = error.error ?? error.data?.originalError;
    }
    if (reason?.indexOf("execution reverted: ") === 0) reason = reason.substring("execution reverted: ".length);
    switch(reason){
        case "PancakeRouter: EXPIRED":
            return t("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");
        case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
        case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
        case "PancakeRouter: INSUFFICIENT_A_AMOUNT":
        case "PancakeRouter: INSUFFICIENT_B_AMOUNT":
            return t("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
        case "TransferHelper: TRANSFER_FROM_FAILED":
            return t("The input token cannot be transferred. There may be an issue with the input token.");
        case "Pancake: TRANSFER_FAILED":
            return t("The output token cannot be transferred. There may be an issue with the output token.");
        default:
            if (reason?.indexOf("undefined is not an object") !== -1) {
                console.error(error, reason);
                return t("An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.");
            }
            return t("Unknown error%reason%. Try increasing your slippage tolerance.", {
                reason: reason ? `: "${reason}"` : ""
            });
    }
}


/***/ }),

/***/ 97794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ZapErrorMessages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ZapErrorMessages = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ isSingleToken , zapMode , toggleZapMode , onModalDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { toastInfo  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .p)();
    const handleCloseButton = ()=>{
        onModalDismiss();
        if (zapMode) {
            toggleZapMode(!zapMode);
            toastInfo(t("Info"), t("Temporarily disabled Zap"));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        margin: "auto",
        width: [
            "100%",
            "100%",
            "380px"
        ],
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            variant: "warning",
            mb: "16px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .MessageText */ .Y, {
                        bold: true,
                        children: t("Currently using Zap for liquidity provisions.")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .MessageText */ .Y, {
                        small: true,
                        children: [
                            isSingleToken ? t("Zap does NOT support tokens with fees on transfers. If you experience any issues, click") : t(`Zap does NOT support tokens with fees on transfers. Please choose ’Don't convert’ and retry. If you experience any further issues, click`),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                p: "0 4px",
                                scale: "sm",
                                variant: "text",
                                height: "auto",
                                onClick: handleCloseButton,
                                children: t("here")
                            }),
                            t("to disable Zap temporarily.")
                        ]
                    })
                ]
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RemoveStableLiquidity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(21762);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(94722);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(52142);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5369);
/* harmony import */ var components_CommitButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49384);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24953);
/* harmony import */ var utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(38662);
/* harmony import */ var views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11824);
/* harmony import */ var _components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77253);
/* harmony import */ var _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46317);
/* harmony import */ var _components_PositionCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51355);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6338);
/* harmony import */ var _components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79631);
/* harmony import */ var _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39480);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27156);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87573);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(65342);
/* harmony import */ var _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(52284);
/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41692);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5305);
/* harmony import */ var _utils_exchange__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23732);
/* harmony import */ var _utils_currencyId__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(36099);
/* harmony import */ var _hooks_useDebouncedChangeHandler__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(804);
/* harmony import */ var _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(74727);
/* harmony import */ var _components_Loader_Dots__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51991);
/* harmony import */ var _state_burn_hooks__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12847);
/* harmony import */ var _state_burn_actions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(80194);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(72135);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(27023);
/* harmony import */ var _Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(86557);
/* harmony import */ var _utils_sentry__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(20233);
/* harmony import */ var _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(34188);
/* harmony import */ var _hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(87000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__, components_CommitButton__WEBPACK_IMPORTED_MODULE_7__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_11__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_12__, _components_App__WEBPACK_IMPORTED_MODULE_13__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_15__, _components_Card__WEBPACK_IMPORTED_MODULE_16__, _components_Logo__WEBPACK_IMPORTED_MODULE_17__, _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_18__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_19__, _utils_exchange__WEBPACK_IMPORTED_MODULE_22__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__, _state_burn_hooks__WEBPACK_IMPORTED_MODULE_26__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_28__, _Page__WEBPACK_IMPORTED_MODULE_29__, _Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_30__, _hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__]);
([hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__, components_CommitButton__WEBPACK_IMPORTED_MODULE_7__, views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_11__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_12__, _components_App__WEBPACK_IMPORTED_MODULE_13__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_15__, _components_Card__WEBPACK_IMPORTED_MODULE_16__, _components_Logo__WEBPACK_IMPORTED_MODULE_17__, _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_18__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_19__, _utils_exchange__WEBPACK_IMPORTED_MODULE_22__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__, _state_burn_hooks__WEBPACK_IMPORTED_MODULE_26__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_28__, _Page__WEBPACK_IMPORTED_MODULE_29__, _Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_30__, _hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_33__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





































const BorderCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-38b183cf-0"
})`
  border: solid 1px ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`;
function RemoveStableLiquidity({ currencyA , currencyB , currencyIdA , currencyIdB  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { account , chainId , isWrongNetwork  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_34__/* .useToast */ .p)();
    const { 0: tokenA , 1: tokenB  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            currencyA?.wrapped,
            currencyB?.wrapped
        ], [
        currencyA,
        currencyB
    ]);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .$G)();
    // burn state
    const { independentField , typedValue  } = (0,_state_burn_hooks__WEBPACK_IMPORTED_MODULE_26__/* .useBurnState */ .Xi)();
    const { pair , parsedAmounts , error  } = (0,_hooks_useStableDerivedBurnInfo__WEBPACK_IMPORTED_MODULE_33__/* .useStableDerivedBurnInfo */ .D)(currencyA ?? undefined, currencyB ?? undefined);
    const { onUserInput: _onUserInput  } = (0,_state_burn_hooks__WEBPACK_IMPORTED_MODULE_26__/* .useBurnActionHandlers */ .GF)();
    const isValid = !error;
    // NOTE: Disable detail page for now
    // modal and loading
    const { 0: showDetailed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: { attemptingTxn , liquidityErrorMessage , txHash  } , 1: setLiquidityState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        attemptingTxn: false,
        liquidityErrorMessage: undefined,
        txHash: undefined
    });
    // txn values
    const [allowedSlippage] = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_28__/* .useUserSlippageTolerance */ .$2)();
    const formattedAmounts = {
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT]: parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].equalTo("0") ? "0" : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].lessThan(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.Percent("1", "100")) ? "<1" : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].toFixed(0),
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY]: independentField === _state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY ? typedValue : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY]?.toSignificant(6) ?? "",
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: independentField === _state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A ? typedValue : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(6) ?? "",
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: independentField === _state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B ? typedValue : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(6) ?? ""
    };
    const atMaxAmount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT]?.equalTo(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.Percent("1"));
    const { stableSwapConfig , stableSwapContract  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(views_Swap_StableSwap_hooks_useStableConfig__WEBPACK_IMPORTED_MODULE_9__/* .StableConfigContext */ .UA);
    const [approval, approveCallback] = (0,_hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .useApproveCallback */ .qL)(parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY], stableSwapConfig?.stableSwapAddress);
    // wrapped onUserInput to clear signatures
    const onUserInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((field, value)=>{
        return _onUserInput(field, value);
    }, [
        _onUserInput
    ]);
    const onLiquidityInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY, value), [
        onUserInput
    ]);
    const onCurrencyAInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A, value), [
        onUserInput
    ]);
    const onCurrencyBInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B, value), [
        onUserInput
    ]);
    // tx sending
    const addTransaction = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useTransactionAdder */ .h7)();
    async function onRemove() {
        if (!chainId || !account) throw new Error("missing dependencies");
        const { [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: currencyAmountA , [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: currencyAmountB  } = parsedAmounts;
        if (!currencyAmountA || !currencyAmountB) {
            toastError(t("Error"), t("Missing currency amounts"));
            throw new Error("missing currency amounts");
        }
        const amountsMin = {
            [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_22__/* .calculateSlippageAmount */ .uc)(currencyAmountA, allowedSlippage)[0],
            [_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_22__/* .calculateSlippageAmount */ .uc)(currencyAmountB, allowedSlippage)[0]
        };
        if (!currencyA || !currencyB) {
            toastError(t("Error"), t("Missing tokens"));
            throw new Error("missing tokens");
        }
        const liquidityAmount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY];
        if (!liquidityAmount) {
            toastError(t("Error"), t("Missing liquidity amount"));
            throw new Error("missing liquidity amount");
        }
        if (!tokenA || !tokenB) {
            toastError(t("Error"), t("Could not wrap"));
            throw new Error("could not wrap");
        }
        let methodNames;
        let args;
        // we have approval, use normal remove liquidity
        if (approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .ApprovalState.APPROVED */ .UK.APPROVED) {
            methodNames = [
                "remove_liquidity"
            ];
            args = [
                liquidityAmount.quotient.toString(),
                [
                    amountsMin[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A].toString(),
                    amountsMin[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B].toString()
                ], 
            ];
        } else {
            toastError(t("Error"), t("Attempting to confirm without approval or a signature"));
            throw new Error("Attempting to confirm without approval or a signature");
        }
        let methodSafeGasEstimate;
        for(let i = 0; i < methodNames.length; i++){
            let safeGasEstimate;
            try {
                // eslint-disable-next-line no-await-in-loop
                safeGasEstimate = (0,_utils__WEBPACK_IMPORTED_MODULE_21__/* .calculateGasMargin */ .yC)(await stableSwapContract.estimateGas[methodNames[i]](...args));
            } catch (e) {
                console.error(`estimateGas failed`, methodNames[i], args, e);
            }
            if (_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__.BigNumber.isBigNumber(safeGasEstimate)) {
                methodSafeGasEstimate = {
                    methodName: methodNames[i],
                    safeGasEstimate
                };
                break;
            }
        }
        // all estimations failed...
        if (!methodSafeGasEstimate) {
            toastError(t("Error"), t("This transaction would fail"));
        } else {
            const { methodName , safeGasEstimate: safeGasEstimate1  } = methodSafeGasEstimate;
            setLiquidityState({
                attemptingTxn: true,
                liquidityErrorMessage: undefined,
                txHash: undefined
            });
            await stableSwapContract[methodName](...args, {
                gasLimit: safeGasEstimate1
            }).then((response)=>{
                setLiquidityState({
                    attemptingTxn: false,
                    liquidityErrorMessage: undefined,
                    txHash: response.hash
                });
                const amountA = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(3);
                const amountB = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(3);
                addTransaction(response, {
                    summary: `Remove ${amountA} ${currencyA?.symbol} and ${amountB} ${currencyB?.symbol}`,
                    translatableSummary: {
                        text: "Remove %amountA% %symbolA% and %amountB% %symbolB%",
                        data: {
                            amountA,
                            symbolA: currencyA?.symbol,
                            amountB,
                            symbolB: currencyB?.symbol
                        }
                    },
                    type: "remove-liquidity"
                });
            }).catch((err)=>{
                if (err && err.code !== 4001) {
                    (0,_utils_sentry__WEBPACK_IMPORTED_MODULE_31__/* .logError */ .H)(err);
                    console.error(`Remove Liquidity failed`, err, args);
                }
                setLiquidityState({
                    attemptingTxn: false,
                    liquidityErrorMessage: err && err?.code !== 4001 ? t("Remove liquidity failed: %message%", {
                        message: (0,utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_35__/* .transactionErrorToUserReadableMessage */ .e)(err, t)
                    }) : undefined,
                    txHash: undefined
                });
            });
        }
    }
    const pendingText = t("Removing %amountA% %symbolA% and %amountB% %symbolB%", {
        amountA: parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(6) ?? "",
        symbolA: currencyA?.symbol ?? "",
        amountB: parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(6) ?? "",
        symbolB: currencyB?.symbol ?? ""
    });
    const liquidityPercentChangeCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, value.toString());
    }, [
        onUserInput
    ]);
    const oneCurrencyIsNative = currencyA?.isNative || currencyB?.isNative;
    const oneCurrencyIsWNative = Boolean(chainId && (currencyA && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]?.equals(currencyA) || currencyB && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]?.equals(currencyB)));
    const handleSelectCurrencyA = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currency)=>{
        if (currencyIdB && (0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_36__/* .currencyId */ .H)(currency) === currencyIdB) {
            router.replace(`/remove/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_36__/* .currencyId */ .H)(currency)}/${currencyIdA}`, undefined, {
                shallow: true
            });
        } else {
            router.replace(`/remove/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_36__/* .currencyId */ .H)(currency)}/${currencyIdB}`, undefined, {
                shallow: true
            });
        }
    }, [
        currencyIdA,
        currencyIdB,
        router
    ]);
    const handleSelectCurrencyB = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currency)=>{
        if (currencyIdA && (0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_36__/* .currencyId */ .H)(currency) === currencyIdA) {
            router.replace(`/remove/${currencyIdB}/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_36__/* .currencyId */ .H)(currency)}`, undefined, {
                shallow: true
            });
        } else {
            router.replace(`/remove/${currencyIdA}/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_36__/* .currencyId */ .H)(currency)}`, undefined, {
                shallow: true
            });
        }
    }, [
        currencyIdA,
        currencyIdB,
        router
    ]);
    const handleDismissConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "0");
        }
    }, [
        onUserInput,
        txHash
    ]);
    const [innerLiquidityPercentage, setInnerLiquidityPercentage] = (0,_hooks_useDebouncedChangeHandler__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(Number.parseInt(parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].toFixed(0)), liquidityPercentChangeCallback);
    const handleChangePercent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>setInnerLiquidityPercentage(Math.ceil(value)), [
        setInnerLiquidityPercentage
    ]);
    const [onPresentRemoveLiquidity] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        title: t("You will receive"),
        customOnDismiss: handleDismissConfirmation,
        attemptingTxn: attemptingTxn,
        hash: txHash || "",
        allowedSlippage: allowedSlippage,
        onRemove: onRemove,
        pendingText: pendingText,
        approval: approval,
        tokenA: tokenA,
        tokenB: tokenB,
        liquidityErrorMessage: liquidityErrorMessage,
        parsedAmounts: parsedAmounts,
        currencyA: currencyA,
        currencyB: currencyB
    }), true, true, "removeLiquidityModal");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Page__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_App__WEBPACK_IMPORTED_MODULE_13__/* .AppBody */ .j, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App__WEBPACK_IMPORTED_MODULE_13__/* .AppHeader */ .t, {
                        backTo: "/liquidity",
                        title: t("Remove %assetA%-%assetB% liquidity", {
                            assetA: currencyA?.symbol ?? "",
                            assetB: currencyB?.symbol ?? ""
                        }),
                        subtitle: t("To receive %assetA% and %assetB%", {
                            assetA: currencyA?.symbol ?? "",
                            assetB: currencyB?.symbol ?? ""
                        }),
                        noConfig: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .AutoColumn */ .Tz, {
                                gap: "20px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowBetween */ .m0, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                            children: t("Amount")
                                        })
                                    }),
                                    !showDetailed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BorderCard, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                fontSize: "40px",
                                                bold: true,
                                                mb: "16px",
                                                style: {
                                                    lineHeight: 1
                                                },
                                                children: [
                                                    formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT],
                                                    "%"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                                                name: "lp-amount",
                                                min: 0,
                                                max: 100,
                                                value: innerLiquidityPercentage,
                                                onValueChanged: handleChangePercent,
                                                mb: "16px"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                flexWrap: "wrap",
                                                justifyContent: "space-evenly",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "25"),
                                                        children: "25%"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "50"),
                                                        children: "50%"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "75"),
                                                        children: "75%"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100"),
                                                        children: t("Max")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !showDetailed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            width: "24px",
                                            my: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .AutoColumn */ .Tz, {
                                        gap: "10px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                bold: true,
                                                color: "secondary",
                                                fontSize: "12px",
                                                textTransform: "uppercase",
                                                children: t("Receive")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_16__/* .LightGreyCard */ .m5, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                        justifyContent: "space-between",
                                                        mb: "8px",
                                                        as: "label",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_17__/* .CurrencyLogo */ .Xw, {
                                                                        currency: currencyA
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        color: "textSubtle",
                                                                        id: "remove-liquidity-tokena-symbol",
                                                                        ml: "4px",
                                                                        children: currencyA?.symbol
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        bold: true,
                                                                        children: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A] || "0"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        ml: "4px",
                                                                        children: "50%"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                        justifyContent: "space-between",
                                                        as: "label",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_17__/* .CurrencyLogo */ .Xw, {
                                                                        currency: currencyB
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        color: "textSubtle",
                                                                        id: "remove-liquidity-tokenb-symbol",
                                                                        ml: "4px",
                                                                        children: currencyB?.symbol
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                                        bold: true,
                                                                        small: true,
                                                                        children: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B] || "0"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        ml: "4px",
                                                                        children: "50%"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    chainId && (oneCurrencyIsWNative || oneCurrencyIsNative) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowBetween */ .m0, {
                                                        style: {
                                                            justifyContent: "flex-end",
                                                            fontSize: "14px"
                                                        },
                                                        children: oneCurrencyIsNative ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Links__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                            href: `/remove/${currencyA?.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]?.address : currencyIdA}/${currencyB?.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]?.address : currencyIdB}`,
                                                            children: t("Receive %currency%", {
                                                                currency: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]?.symbol
                                                            })
                                                        }) : oneCurrencyIsWNative ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Links__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                            href: `/remove/${currencyA && currencyA.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]) ? native?.symbol : currencyIdA}/${currencyB && currencyB.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_4__.WNATIVE[chainId]) ? native?.symbol : currencyIdB}`,
                                                            children: t("Receive %currency%", {
                                                                currency: native?.symbol
                                                            })
                                                        }) : null
                                                    }) : null
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            showDetailed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                                my: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        value: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY */ .g.LIQUIDITY],
                                        onUserInput: onLiquidityInput,
                                        onMax: ()=>{
                                            onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100");
                                        },
                                        showMaxButton: !atMaxAmount,
                                        disableCurrencySelect: true,
                                        currency: pair?.liquidityToken,
                                        pair: pair,
                                        id: "liquidity-amount",
                                        onCurrencySelect: ()=>null,
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_32__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                                            width: "24px",
                                            my: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        hideBalance: true,
                                        value: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A],
                                        onUserInput: onCurrencyAInput,
                                        onMax: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100"),
                                        showMaxButton: !atMaxAmount,
                                        currency: currencyA,
                                        label: t("Output"),
                                        onCurrencySelect: handleSelectCurrencyA,
                                        id: "remove-liquidity-tokena",
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_32__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z, {
                                            width: "24px",
                                            my: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        hideBalance: true,
                                        value: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B],
                                        onUserInput: onCurrencyBInput,
                                        onMax: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100"),
                                        showMaxButton: !atMaxAmount,
                                        currency: currencyB,
                                        label: t("Output"),
                                        onCurrencySelect: handleSelectCurrencyB,
                                        id: "remove-liquidity-tokenb",
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_32__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    })
                                ]
                            }),
                            pair && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .AutoColumn */ .Tz, {
                                gap: "10px",
                                style: {
                                    marginTop: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Prices")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_16__/* .LightGreyCard */ .m5, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                justifyContent: "space-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                        small: true,
                                                        color: "textSubtle",
                                                        children: [
                                                            "1 ",
                                                            currencyA?.symbol,
                                                            " ="
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                        small: true,
                                                        children: [
                                                            tokenA ? pair.priceOf(tokenA).toSignificant(6) : "-",
                                                            " ",
                                                            currencyB?.symbol
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                                                justifyContent: "space-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                        small: true,
                                                        color: "textSubtle",
                                                        children: [
                                                            "1 ",
                                                            currencyB?.symbol,
                                                            " ="
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                                        small: true,
                                                        children: [
                                                            tokenB ? pair.priceOf(tokenB).toSignificant(6) : "-",
                                                            " ",
                                                            currencyA?.symbol
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowBetween */ .m0, {
                                mt: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        children: t("Slippage Tolerance")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "primary",
                                        children: [
                                            allowedSlippage / 100,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                                position: "relative",
                                mt: "16px",
                                children: !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    width: "100%"
                                }) : isWrongNetwork ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_7__/* .CommitButton */ .A, {
                                    width: "100%"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_14__/* .RowBetween */ .m0, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                                            variant: approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .ApprovalState.APPROVED */ .UK.APPROVED ? "success" : "primary",
                                            onClick: approveCallback,
                                            disabled: approval !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .ApprovalState.NOT_APPROVED */ .UK.NOT_APPROVED,
                                            width: "100%",
                                            mr: "0.5rem",
                                            children: approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .ApprovalState.PENDING */ .UK.PENDING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Dots__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                                children: t("Enabling")
                                            }) : approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .ApprovalState.APPROVED */ .UK.APPROVED ? t("Enabled") : t("Enable")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                                            variant: !isValid && !!parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_A */ .g.CURRENCY_A] && !!parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_27__/* .Field.CURRENCY_B */ .g.CURRENCY_B] ? "danger" : "primary",
                                            onClick: ()=>{
                                                setLiquidityState({
                                                    attemptingTxn: false,
                                                    liquidityErrorMessage: undefined,
                                                    txHash: undefined
                                                });
                                                onPresentRemoveLiquidity();
                                            },
                                            width: "100%",
                                            disabled: !isValid || approval !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_24__/* .ApprovalState.APPROVED */ .UK.APPROVED,
                                            children: error || t("Remove")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            pair ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_10__/* .AutoColumn */ .Tz, {
                style: {
                    minWidth: "20rem",
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PositionCard__WEBPACK_IMPORTED_MODULE_12__/* .MinimalPositionCard */ .WP, {
                    showUnwrapped: oneCurrencyIsWNative,
                    pair: pair
                })
            }) : null
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RemoveLiquidity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49935);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(21762);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(94722);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(59536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(19193);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9270);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72179);
/* harmony import */ var utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50288);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5369);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70627);
/* harmony import */ var components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14346);
/* harmony import */ var components_CommitButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49384);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24953);
/* harmony import */ var state_swap_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26202);
/* harmony import */ var config_constants_exchange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92794);
/* harmony import */ var utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(38662);
/* harmony import */ var _components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77253);
/* harmony import */ var _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46317);
/* harmony import */ var _components_PositionCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51355);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6338);
/* harmony import */ var _components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79631);
/* harmony import */ var _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(39480);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27156);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87573);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(65342);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(74860);
/* harmony import */ var _hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(61558);
/* harmony import */ var _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(52284);
/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(41692);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5305);
/* harmony import */ var _utils_exchange__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(23732);
/* harmony import */ var _utils_currencyId__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(36099);
/* harmony import */ var _hooks_useDebouncedChangeHandler__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(804);
/* harmony import */ var _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(74727);
/* harmony import */ var _components_Loader_Dots__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(51991);
/* harmony import */ var _state_burn_hooks__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(12847);
/* harmony import */ var _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(80194);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(72135);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(27023);
/* harmony import */ var _Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(86557);
/* harmony import */ var _utils_sentry__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(20233);
/* harmony import */ var _utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(84785);
/* harmony import */ var _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(34188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_10__, components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_12__, components_CommitButton__WEBPACK_IMPORTED_MODULE_13__, state_swap_hooks__WEBPACK_IMPORTED_MODULE_15__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_18__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_19__, _components_App__WEBPACK_IMPORTED_MODULE_20__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_22__, _components_Card__WEBPACK_IMPORTED_MODULE_23__, _components_Logo__WEBPACK_IMPORTED_MODULE_24__, _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_25__, _hooks_useContract__WEBPACK_IMPORTED_MODULE_26__, _hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_28__, _utils_exchange__WEBPACK_IMPORTED_MODULE_31__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__, _state_burn_hooks__WEBPACK_IMPORTED_MODULE_35__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_37__, _Page__WEBPACK_IMPORTED_MODULE_38__, _Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_39__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_47__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_55__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_10__, components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_12__, components_CommitButton__WEBPACK_IMPORTED_MODULE_13__, state_swap_hooks__WEBPACK_IMPORTED_MODULE_15__, _components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_18__, _components_PositionCard__WEBPACK_IMPORTED_MODULE_19__, _components_App__WEBPACK_IMPORTED_MODULE_20__, _components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__, _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_22__, _components_Card__WEBPACK_IMPORTED_MODULE_23__, _components_Logo__WEBPACK_IMPORTED_MODULE_24__, _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_25__, _hooks_useContract__WEBPACK_IMPORTED_MODULE_26__, _hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__, _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_28__, _utils_exchange__WEBPACK_IMPORTED_MODULE_31__, _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__, _state_burn_hooks__WEBPACK_IMPORTED_MODULE_35__, _state_user_hooks__WEBPACK_IMPORTED_MODULE_37__, _Page__WEBPACK_IMPORTED_MODULE_38__, _Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_39__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_47__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_55__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














































const BorderCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-55cd2174-0"
})`
  border: solid 1px ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`;
const zapSupportedChainId = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.ChainId.BSC,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.ChainId.BSC_TESTNET
];
function RemoveLiquidity({ currencyA , currencyB , currencyIdA , currencyIdB  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const [zapMode] = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_37__/* .useZapModeManager */ .$f)();
    const { 0: temporarilyZapMode , 1: setTemporarilyZapMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { account , chainId , isWrongNetwork  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
    const library = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3LibraryContext */ .Hp)();
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_43__/* .useToast */ .p)();
    const { 0: tokenA , 1: tokenB  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            currencyA?.wrapped,
            currencyB?.wrapped
        ], [
        currencyA,
        currencyB
    ]);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_14__/* .useTranslation */ .$G)();
    const canZapOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>zapSupportedChainId.includes(chainId) && zapMode, [
        chainId,
        zapMode
    ]);
    const zapModeStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>canZapOut && !!zapMode && temporarilyZapMode, [
        canZapOut,
        zapMode,
        temporarilyZapMode
    ]);
    // burn state
    const { independentField , typedValue  } = (0,_state_burn_hooks__WEBPACK_IMPORTED_MODULE_35__/* .useBurnState */ .Xi)();
    const { 0: removalCheckedA , 1: setRemovalCheckedA  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: removalCheckedB , 1: setRemovalCheckedB  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { pair , parsedAmounts , error , tokenToReceive , estimateZapOutAmount  } = (0,_state_burn_hooks__WEBPACK_IMPORTED_MODULE_35__/* .useDerivedBurnInfo */ .Vx)(currencyA ?? undefined, currencyB ?? undefined, removalCheckedA, removalCheckedB, zapModeStatus);
    const isZap = (!removalCheckedA || !removalCheckedB) && zapModeStatus;
    const poolData = (0,state_swap_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useLPApr */ .aT)(pair);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z)(t(`Based on last 7 days' performance. Does not account for impermanent loss`), {
        placement: "bottom"
    });
    const { onUserInput: _onUserInput  } = (0,_state_burn_hooks__WEBPACK_IMPORTED_MODULE_35__/* .useBurnActionHandlers */ .GF)();
    const isValid = !error;
    // modal and loading
    const { 0: showDetailed , 1: setShowDetailed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: { attemptingTxn , liquidityErrorMessage , txHash  } , 1: setLiquidityState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        attemptingTxn: false,
        liquidityErrorMessage: undefined,
        txHash: undefined
    });
    // txn values
    const deadline = (0,_hooks_useTransactionDeadline__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)();
    const [allowedSlippage] = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_37__/* .useUserSlippageTolerance */ .$2)();
    const formattedAmounts = {
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT]: parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].equalTo("0") ? "0" : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].lessThan(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.Percent("1", "100")) ? "<1" : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].toFixed(0),
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY]: independentField === _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY ? typedValue : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY]?.toSignificant(6) ?? "",
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: independentField === _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A ? typedValue : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(6) ?? "",
        [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: independentField === _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B ? typedValue : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(6) ?? ""
    };
    const atMaxAmount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT]?.equalTo(new _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.Percent("1"));
    // pair contract
    const pairContractRead = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_26__/* .usePairContract */ .t0)(pair?.liquidityToken?.address, false);
    const pairContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_26__/* .usePairContract */ .t0)(pair?.liquidityToken?.address);
    // allowance handling
    const { 0: signatureData , 1: setSignatureData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [approval, approveCallback] = (0,_hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .useApproveCallback */ .qL)(parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY], isZap ? (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_11__/* .getZapAddress */ ._M)() : config_constants_exchange__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER_ADDRESS */ .bR[chainId]);
    async function onAttemptToApprove() {
        if (!pairContract || !pairContractRead || !pair || !library || !deadline) throw new Error("missing dependencies");
        const liquidityAmount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY];
        if (!liquidityAmount) {
            toastError(t("Error"), t("Missing liquidity amount"));
            throw new Error("missing liquidity amount");
        }
        // try to gather a signature for permission
        const nonce = await pairContractRead.nonces(account);
        const EIP712Domain = [
            {
                name: "name",
                type: "string"
            },
            {
                name: "version",
                type: "string"
            },
            {
                name: "chainId",
                type: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address"
            }, 
        ];
        const domain = {
            name: "Pancake LPs",
            version: "1",
            chainId,
            verifyingContract: pair.liquidityToken.address
        };
        const Permit = [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            },
            {
                name: "value",
                type: "uint256"
            },
            {
                name: "nonce",
                type: "uint256"
            },
            {
                name: "deadline",
                type: "uint256"
            }, 
        ];
        const message = {
            owner: account,
            spender: config_constants_exchange__WEBPACK_IMPORTED_MODULE_16__/* .ROUTER_ADDRESS */ .bR[chainId],
            value: liquidityAmount.quotient.toString(),
            nonce: nonce.toHexString(),
            deadline: deadline.toNumber()
        };
        const data = JSON.stringify({
            types: {
                EIP712Domain,
                Permit
            },
            domain,
            primaryType: "Permit",
            message
        });
        library.send("eth_signTypedData_v4", [
            account,
            data
        ]).then(_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.splitSignature).then((signature)=>{
            setSignatureData({
                v: signature.v,
                r: signature.r,
                s: signature.s,
                deadline: deadline.toNumber()
            });
        }).catch((err)=>{
            // for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
            if (err?.code !== 4001) {
                approveCallback();
            }
        });
    }
    // wrapped onUserInput to clear signatures
    const onUserInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((field, value)=>{
        setSignatureData(null);
        return _onUserInput(field, value);
    }, [
        _onUserInput
    ]);
    const onLiquidityInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY, value), [
        onUserInput
    ]);
    const onCurrencyAInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A, value), [
        onUserInput
    ]);
    const onCurrencyBInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B, value), [
        onUserInput
    ]);
    const zapContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_26__/* .useZapContract */ .n9)(true);
    // tx sending
    const addTransaction = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_28__/* .useTransactionAdder */ .h7)();
    const routerContract = (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .useRouterContract */ .Ti)();
    async function onZapOut() {
        if (!chainId || !library || !account || !estimateZapOutAmount) throw new Error("missing dependencies");
        if (!zapContract) throw new Error("missing zap contract");
        if (!tokenToReceive) throw new Error("missing tokenToReceive");
        if (!currencyA || !currencyB) {
            toastError(t("Error"), t("Missing tokens"));
            throw new Error("missing tokens");
        }
        const liquidityAmount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY];
        if (!liquidityAmount) {
            toastError(t("Error"), t("Missing liquidity amount"));
            throw new Error("missing liquidity amount");
        }
        if (!tokenA || !tokenB) {
            toastError(t("Error"), t("Could not wrap"));
            throw new Error("could not wrap");
        }
        const totalTokenAmountOut = removalCheckedA && !removalCheckedB ? parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A] : parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B];
        let methodName;
        let args;
        if (oneCurrencyIsNative && tokenToReceive.toLowerCase() === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId].address.toLowerCase()) {
            methodName = "zapOutBNB";
            args = [
                pair.liquidityToken.address,
                parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY].quotient.toString(),
                (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .calculateSlippageAmount */ .uc)(estimateZapOutAmount, allowedSlippage)[0].toString(),
                (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .calculateSlippageAmount */ .uc)(totalTokenAmountOut, allowedSlippage)[0].toString(), 
            ];
        } else {
            methodName = "zapOutToken";
            args = [
                pair.liquidityToken.address,
                tokenToReceive,
                parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY].quotient.toString(),
                (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .calculateSlippageAmount */ .uc)(estimateZapOutAmount, allowedSlippage)[0].toString(),
                (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .calculateSlippageAmount */ .uc)(totalTokenAmountOut, allowedSlippage)[0].toString(), 
            ];
        }
        setLiquidityState({
            attemptingTxn: true,
            liquidityErrorMessage: undefined,
            txHash: undefined
        });
        (0,utils_calls__WEBPACK_IMPORTED_MODULE_8__/* .callWithEstimateGas */ .Zj)(zapContract, methodName, args).then((response)=>{
            setLiquidityState({
                attemptingTxn: false,
                liquidityErrorMessage: undefined,
                txHash: response.hash
            });
            const amount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY].toSignificant(3);
            const symbol = (0,utils_getLpSymbol__WEBPACK_IMPORTED_MODULE_9__/* .getLPSymbol */ .z)(pair.token0.symbol, pair.token1.symbol, chainId);
            addTransaction(response, {
                summary: `Remove ${amount} ${symbol}`,
                translatableSummary: {
                    text: "Remove %amount% %symbol%",
                    data: {
                        amount,
                        symbol
                    }
                },
                type: "remove-liquidity"
            });
        }).catch((err)=>{
            if (err && err.code !== 4001) {
                console.error(`Remove Liquidity failed`, err, args);
            }
            setLiquidityState({
                attemptingTxn: false,
                liquidityErrorMessage: err && err?.code !== 4001 ? `Remove Liquidity failed: ${err.message}` : undefined,
                txHash: undefined
            });
        });
    }
    async function onRemove() {
        if (!chainId || !account || !deadline || !routerContract) throw new Error("missing dependencies");
        const { [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: currencyAmountA , [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: currencyAmountB  } = parsedAmounts;
        if (!currencyAmountA || !currencyAmountB) {
            toastError(t("Error"), t("Missing currency amounts"));
            throw new Error("missing currency amounts");
        }
        const amountsMin = {
            [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A]: (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .calculateSlippageAmount */ .uc)(currencyAmountA, allowedSlippage)[0],
            [_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B]: (0,_utils_exchange__WEBPACK_IMPORTED_MODULE_31__/* .calculateSlippageAmount */ .uc)(currencyAmountB, allowedSlippage)[0]
        };
        if (!currencyA || !currencyB) {
            toastError(t("Error"), t("Missing tokens"));
            throw new Error("missing tokens");
        }
        const liquidityAmount = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY];
        if (!liquidityAmount) {
            toastError(t("Error"), t("Missing liquidity amount"));
            throw new Error("missing liquidity amount");
        }
        const currencyBIsNative = currencyB?.isNative;
        const oneCurrencyIsNative = currencyA?.isNative || currencyBIsNative;
        if (!tokenA || !tokenB) {
            toastError(t("Error"), t("Could not wrap"));
            throw new Error("could not wrap");
        }
        let methodNames;
        let args;
        // we have approval, use normal remove liquidity
        if (approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.APPROVED */ .UK.APPROVED) {
            // removeLiquidityETH
            if (oneCurrencyIsNative) {
                methodNames = [
                    "removeLiquidityETH",
                    "removeLiquidityETHSupportingFeeOnTransferTokens"
                ];
                args = [
                    currencyBIsNative ? tokenA.address : tokenB.address,
                    liquidityAmount.quotient.toString(),
                    amountsMin[currencyBIsNative ? _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A : _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B].toString(),
                    amountsMin[currencyBIsNative ? _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B : _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A].toString(),
                    account,
                    deadline.toHexString(), 
                ];
            } else {
                methodNames = [
                    "removeLiquidity"
                ];
                args = [
                    tokenA.address,
                    tokenB.address,
                    liquidityAmount.quotient.toString(),
                    amountsMin[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A].toString(),
                    amountsMin[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B].toString(),
                    account,
                    deadline.toHexString(), 
                ];
            }
        } else if (signatureData !== null) {
            // removeLiquidityETHWithPermit
            if (oneCurrencyIsNative) {
                methodNames = [
                    "removeLiquidityETHWithPermit",
                    "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"
                ];
                args = [
                    currencyBIsNative ? tokenA.address : tokenB.address,
                    liquidityAmount.quotient.toString(),
                    amountsMin[currencyBIsNative ? _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A : _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B].toString(),
                    amountsMin[currencyBIsNative ? _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B : _state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A].toString(),
                    account,
                    signatureData.deadline,
                    false,
                    signatureData.v,
                    signatureData.r,
                    signatureData.s, 
                ];
            } else {
                methodNames = [
                    "removeLiquidityWithPermit"
                ];
                args = [
                    tokenA.address,
                    tokenB.address,
                    liquidityAmount.quotient.toString(),
                    amountsMin[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A].toString(),
                    amountsMin[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B].toString(),
                    account,
                    signatureData.deadline,
                    false,
                    signatureData.v,
                    signatureData.r,
                    signatureData.s, 
                ];
            }
        } else {
            toastError(t("Error"), t("Attempting to confirm without approval or a signature"));
            throw new Error("Attempting to confirm without approval or a signature");
        }
        let methodSafeGasEstimate;
        for(let i = 0; i < methodNames.length; i++){
            let safeGasEstimate;
            try {
                // eslint-disable-next-line no-await-in-loop
                safeGasEstimate = (0,_utils__WEBPACK_IMPORTED_MODULE_30__/* .calculateGasMargin */ .yC)(await routerContract.estimateGas[methodNames[i]](...args));
            } catch (e) {
                console.error(`estimateGas failed`, methodNames[i], args, e);
            }
            if (_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__.BigNumber.isBigNumber(safeGasEstimate)) {
                methodSafeGasEstimate = {
                    methodName: methodNames[i],
                    safeGasEstimate
                };
                break;
            }
        }
        // all estimations failed...
        if (!methodSafeGasEstimate) {
            toastError(t("Error"), t("This transaction would fail"));
        } else {
            const { methodName , safeGasEstimate: safeGasEstimate1  } = methodSafeGasEstimate;
            setLiquidityState({
                attemptingTxn: true,
                liquidityErrorMessage: undefined,
                txHash: undefined
            });
            await routerContract[methodName](...args, {
                gasLimit: safeGasEstimate1
            }).then((response)=>{
                setLiquidityState({
                    attemptingTxn: false,
                    liquidityErrorMessage: undefined,
                    txHash: response.hash
                });
                const amountA = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(3);
                const amountB = parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(3);
                addTransaction(response, {
                    summary: `Remove ${amountA} ${currencyA?.symbol} and ${amountB} ${currencyB?.symbol}`,
                    translatableSummary: {
                        text: "Remove %amountA% %symbolA% and %amountB% %symbolB%",
                        data: {
                            amountA,
                            symbolA: currencyA?.symbol,
                            amountB,
                            symbolB: currencyB?.symbol
                        }
                    },
                    type: "remove-liquidity"
                });
            }).catch((err)=>{
                if (err && err.code !== 4001) {
                    (0,_utils_sentry__WEBPACK_IMPORTED_MODULE_40__/* .logError */ .H)(err);
                    console.error(`Remove Liquidity failed`, err, args);
                }
                setLiquidityState({
                    attemptingTxn: false,
                    liquidityErrorMessage: err && err?.code !== 4001 ? t("Remove liquidity failed: %message%", {
                        message: (0,utils_transactionErrorToUserReadableMessage__WEBPACK_IMPORTED_MODULE_45__/* .transactionErrorToUserReadableMessage */ .e)(err, t)
                    }) : undefined,
                    txHash: undefined
                });
            });
        }
    }
    const pendingText = t("Removing %amountA% %symbolA% and %amountB% %symbolB%", {
        amountA: parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(6) ?? "",
        symbolA: currencyA?.symbol ?? "",
        amountB: parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(6) ?? "",
        symbolB: currencyB?.symbol ?? ""
    });
    const liquidityPercentChangeCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, value.toString());
    }, [
        onUserInput
    ]);
    const oneCurrencyIsNative = currencyA?.isNative || currencyB?.isNative;
    const oneCurrencyIsWNative = Boolean(chainId && (currencyA && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]?.equals(currencyA) || currencyB && _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]?.equals(currencyB)));
    const handleSelectCurrencyA = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currency)=>{
        if (currencyIdB && (0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_46__/* .currencyId */ .H)(currency) === currencyIdB) {
            router.replace(`/remove/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_46__/* .currencyId */ .H)(currency)}/${currencyIdA}`, undefined, {
                shallow: true
            });
        } else {
            router.replace(`/remove/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_46__/* .currencyId */ .H)(currency)}/${currencyIdB}`, undefined, {
                shallow: true
            });
        }
    }, [
        currencyIdA,
        currencyIdB,
        router
    ]);
    const handleSelectCurrencyB = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currency)=>{
        if (currencyIdA && (0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_46__/* .currencyId */ .H)(currency) === currencyIdA) {
            router.replace(`/remove/${currencyIdB}/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_46__/* .currencyId */ .H)(currency)}`, undefined, {
                shallow: true
            });
        } else {
            router.replace(`/remove/${currencyIdA}/${(0,_utils_currencyId__WEBPACK_IMPORTED_MODULE_46__/* .currencyId */ .H)(currency)}`, undefined, {
                shallow: true
            });
        }
    }, [
        currencyIdA,
        currencyIdB,
        router
    ]);
    const handleDismissConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setSignatureData(null) // important that we clear signature data to avoid bad sigs
        ;
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "0");
        }
    }, [
        onUserInput,
        txHash
    ]);
    const [innerLiquidityPercentage, setInnerLiquidityPercentage] = (0,_hooks_useDebouncedChangeHandler__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)(Number.parseInt(parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT].toFixed(0)), liquidityPercentChangeCallback);
    const handleChangePercent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>setInnerLiquidityPercentage(Math.ceil(value)), [
        setInnerLiquidityPercentage
    ]);
    const [onPresentRemoveLiquidity] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Swap_components_ConfirmRemoveLiquidityModal__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
        title: t("You will receive"),
        customOnDismiss: handleDismissConfirmation,
        attemptingTxn: attemptingTxn,
        hash: txHash || "",
        allowedSlippage: allowedSlippage,
        onRemove: isZap ? onZapOut : onRemove,
        isZap: isZap,
        pendingText: pendingText,
        approval: approval,
        signatureData: signatureData,
        tokenA: tokenA,
        tokenB: tokenB,
        liquidityErrorMessage: liquidityErrorMessage,
        parsedAmounts: parsedAmounts,
        currencyA: currencyA,
        currencyB: currencyB,
        toggleZapMode: setTemporarilyZapMode
    }), true, true, "removeLiquidityModal");
    const isZapOutA = isZap && !removalCheckedB && removalCheckedA;
    const isZapOutB = isZap && !removalCheckedA && removalCheckedB;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Page__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_App__WEBPACK_IMPORTED_MODULE_20__/* .AppBody */ .j, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App__WEBPACK_IMPORTED_MODULE_20__/* .AppHeader */ .t, {
                        backTo: "/liquidity",
                        title: t("Remove %assetA%-%assetB% liquidity", {
                            assetA: currencyA?.symbol ?? "",
                            assetB: currencyB?.symbol ?? ""
                        }),
                        subtitle: t("To receive %assetA% and %assetB%", {
                            assetA: currencyA?.symbol ?? "",
                            assetB: currencyB?.symbol ?? ""
                        }),
                        noConfig: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .AutoColumn */ .Tz, {
                                gap: "20px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__/* .RowBetween */ .m0, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                children: t("Amount")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                                variant: "text",
                                                scale: "sm",
                                                onClick: ()=>setShowDetailed(!showDetailed),
                                                children: showDetailed ? t("Simple") : t("Detailed")
                                            })
                                        ]
                                    }),
                                    !showDetailed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BorderCard, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                fontSize: "40px",
                                                bold: true,
                                                mb: "16px",
                                                style: {
                                                    lineHeight: 1
                                                },
                                                children: [
                                                    formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT],
                                                    "%"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                                                name: "lp-amount",
                                                min: 0,
                                                max: 100,
                                                value: innerLiquidityPercentage,
                                                onValueChanged: handleChangePercent,
                                                mb: "16px"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                flexWrap: "wrap",
                                                justifyContent: "space-evenly",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "25"),
                                                        children: "25%"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "50"),
                                                        children: "50%"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "75"),
                                                        children: "75%"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100"),
                                                        children: t("Max")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !showDetailed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            width: "24px",
                                            my: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .AutoColumn */ .Tz, {
                                        gap: "10px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                bold: true,
                                                color: "secondary",
                                                fontSize: "12px",
                                                textTransform: "uppercase",
                                                children: t("Receive")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_23__/* .LightGreyCard */ .m5, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                        justifyContent: "space-between",
                                                        mb: "8px",
                                                        as: "label",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                                alignItems: "center",
                                                                children: [
                                                                    zapModeStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                                        mr: "9px",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .Z, {
                                                                            disabled: isZapOutA,
                                                                            scale: "sm",
                                                                            checked: removalCheckedA,
                                                                            onChange: (e)=>setRemovalCheckedA(e.target.checked)
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyLogo */ .Xw, {
                                                                        currency: currencyA
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        color: "textSubtle",
                                                                        id: "remove-liquidity-tokena-symbol",
                                                                        ml: "4px",
                                                                        children: currencyA?.symbol
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        bold: true,
                                                                        children: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A] || "0"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        ml: "4px",
                                                                        children: [
                                                                            "(",
                                                                            isZapOutA ? "100" : !isZap ? "50" : "0",
                                                                            "%)"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                        justifyContent: "space-between",
                                                        as: "label",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                                alignItems: "center",
                                                                children: [
                                                                    zapModeStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                                        mr: "9px",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .Z, {
                                                                            disabled: isZapOutB,
                                                                            scale: "sm",
                                                                            checked: removalCheckedB,
                                                                            onChange: (e)=>setRemovalCheckedB(e.target.checked)
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyLogo */ .Xw, {
                                                                        currency: currencyB
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        color: "textSubtle",
                                                                        id: "remove-liquidity-tokenb-symbol",
                                                                        ml: "4px",
                                                                        children: currencyB?.symbol
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                                        bold: true,
                                                                        small: true,
                                                                        children: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B] || "0"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                                        small: true,
                                                                        ml: "4px",
                                                                        children: [
                                                                            "(",
                                                                            isZapOutB ? "100" : !isZap ? "50" : "0",
                                                                            "%)"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    chainId && (oneCurrencyIsWNative || oneCurrencyIsNative) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__/* .RowBetween */ .m0, {
                                                        style: {
                                                            justifyContent: "flex-end",
                                                            fontSize: "14px"
                                                        },
                                                        children: oneCurrencyIsNative ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Links__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                                            href: `/remove/${currencyA?.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]?.address : currencyIdA}/${currencyB?.isNative ? _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]?.address : currencyIdB}`,
                                                            children: t("Receive %currency%", {
                                                                currency: _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]?.symbol
                                                            })
                                                        }) : oneCurrencyIsWNative ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Links__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                                            href: `/remove/${currencyA && currencyA.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]) ? native?.symbol : currencyIdA}/${currencyB && currencyB.equals(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_5__.WNATIVE[chainId]) ? native?.symbol : currencyIdB}`,
                                                            children: t("Receive %currency%", {
                                                                currency: native?.symbol
                                                            })
                                                        }) : null
                                                    }) : null
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            showDetailed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .Z, {
                                my: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        value: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY */ .g.LIQUIDITY],
                                        onUserInput: onLiquidityInput,
                                        onPercentInput: (percent)=>{
                                            onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, percent.toString());
                                        },
                                        onMax: ()=>{
                                            onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100");
                                        },
                                        showQuickInputButton: true,
                                        showMaxButton: !atMaxAmount,
                                        disableCurrencySelect: true,
                                        currency: pair?.liquidityToken,
                                        pair: pair,
                                        id: "liquidity-amount",
                                        onCurrencySelect: ()=>null,
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_42__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
                                            width: "24px",
                                            my: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        beforeButton: zapModeStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_12__/* .ZapCheckbox */ .y, {
                                            disabled: !removalCheckedB && removalCheckedA,
                                            checked: removalCheckedA,
                                            onChange: (e)=>{
                                                setRemovalCheckedA(e.target.checked);
                                            }
                                        }),
                                        zapStyle: "zap",
                                        hideBalance: true,
                                        disabled: isZap && !removalCheckedA,
                                        value: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A],
                                        onUserInput: onCurrencyAInput,
                                        onMax: ()=>onUserInput(_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.LIQUIDITY_PERCENT */ .g.LIQUIDITY_PERCENT, "100"),
                                        showMaxButton: !atMaxAmount,
                                        currency: currencyA,
                                        label: t("Output"),
                                        onCurrencySelect: handleSelectCurrencyA,
                                        id: "remove-liquidity-tokena",
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_42__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .ColumnCenter */ .lg, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_56__/* ["default"] */ .Z, {
                                            width: "24px",
                                            my: "16px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrencyInputPanel__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        beforeButton: zapModeStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CurrencyInputPanel_ZapCheckbox__WEBPACK_IMPORTED_MODULE_12__/* .ZapCheckbox */ .y, {
                                            disabled: !removalCheckedA && removalCheckedB,
                                            checked: removalCheckedB,
                                            onChange: (e)=>{
                                                setRemovalCheckedB(e.target.checked);
                                            }
                                        }),
                                        zapStyle: "zap",
                                        hideBalance: true,
                                        disabled: isZap && !removalCheckedB,
                                        value: formattedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B],
                                        onUserInput: onCurrencyBInput,
                                        showMaxButton: false,
                                        currency: currencyB,
                                        label: t("Output"),
                                        onCurrencySelect: handleSelectCurrencyB,
                                        id: "remove-liquidity-tokenb",
                                        showCommonBases: true,
                                        commonBasesType: _components_SearchModal_types__WEBPACK_IMPORTED_MODULE_42__/* .CommonBasesType.LIQUIDITY */ .L0.LIQUIDITY
                                    })
                                ]
                            }),
                            pair && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .AutoColumn */ .Tz, {
                                gap: "10px",
                                style: {
                                    marginTop: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Prices")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_23__/* .LightGreyCard */ .m5, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                justifyContent: "space-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                        small: true,
                                                        color: "textSubtle",
                                                        children: [
                                                            "1 ",
                                                            currencyA?.symbol,
                                                            " ="
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                        small: true,
                                                        children: [
                                                            tokenA ? pair.priceOf(tokenA).toSignificant(6) : "-",
                                                            " ",
                                                            currencyB?.symbol
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
                                                justifyContent: "space-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                        small: true,
                                                        color: "textSubtle",
                                                        children: [
                                                            "1 ",
                                                            currencyB?.symbol,
                                                            " ="
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                                        small: true,
                                                        children: [
                                                            tokenB ? pair.priceOf(tokenB).toSignificant(6) : "-",
                                                            " ",
                                                            currencyA?.symbol
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__/* .RowBetween */ .m0, {
                                mt: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        children: t("Slippage Tolerance")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "primary",
                                        children: [
                                            allowedSlippage / 100,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            poolData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__/* .RowBetween */ .m0, {
                                mt: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_57__/* ["default"] */ .Z, {
                                        ref: targetRef,
                                        bold: true,
                                        fontSize: "12px",
                                        color: "secondary",
                                        children: t("LP reward APR")
                                    }),
                                    tooltipVisible && tooltip,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: "primary",
                                        children: [
                                            (0,_utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_41__/* .formatAmount */ .d)(poolData.lpApr7d),
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .Z, {
                                position: "relative",
                                mt: "16px",
                                children: !account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    width: "100%"
                                }) : isWrongNetwork ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CommitButton__WEBPACK_IMPORTED_MODULE_13__/* .CommitButton */ .A, {
                                    width: "100%"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Row__WEBPACK_IMPORTED_MODULE_21__/* .RowBetween */ .m0, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                            variant: approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.APPROVED */ .UK.APPROVED || !isZap && signatureData !== null ? "success" : "primary",
                                            onClick: isZap ? approveCallback : onAttemptToApprove,
                                            disabled: approval !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.NOT_APPROVED */ .UK.NOT_APPROVED || !isZap && signatureData !== null,
                                            width: "100%",
                                            mr: "0.5rem",
                                            children: approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.PENDING */ .UK.PENDING ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Dots__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                                                children: t("Enabling")
                                            }) : approval === _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.APPROVED */ .UK.APPROVED || !isZap && signatureData !== null ? t("Enabled") : t("Enable")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                                            variant: !isValid && !!parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_A */ .g.CURRENCY_A] && !!parsedAmounts[_state_burn_actions__WEBPACK_IMPORTED_MODULE_36__/* .Field.CURRENCY_B */ .g.CURRENCY_B] ? "danger" : "primary",
                                            onClick: ()=>{
                                                setLiquidityState({
                                                    attemptingTxn: false,
                                                    liquidityErrorMessage: undefined,
                                                    txHash: undefined
                                                });
                                                onPresentRemoveLiquidity();
                                            },
                                            width: "100%",
                                            disabled: !isValid || !isZap && signatureData === null && approval !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.APPROVED */ .UK.APPROVED || isZap && approval !== _hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_33__/* .ApprovalState.APPROVED */ .UK.APPROVED,
                                            children: error || t("Remove")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            pair ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Column__WEBPACK_IMPORTED_MODULE_17__/* .AutoColumn */ .Tz, {
                style: {
                    minWidth: "20rem",
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PositionCard__WEBPACK_IMPORTED_MODULE_19__/* .MinimalPositionCard */ .WP, {
                    showUnwrapped: oneCurrencyIsWNative,
                    pair: pair
                })
            }) : null
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52142);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23475);
/* harmony import */ var components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79631);
/* harmony import */ var state_burn_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80194);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87573);
/* harmony import */ var hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74727);
/* harmony import */ var _AddLiquidity_components_ZapErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_8__, _AddLiquidity_components_ZapErrorMessage__WEBPACK_IMPORTED_MODULE_9__]);
([components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__, components_Logo__WEBPACK_IMPORTED_MODULE_7__, hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_8__, _AddLiquidity_components_ZapErrorMessage__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ConfirmRemoveLiquidityModal = ({ title , onDismiss , customOnDismiss , attemptingTxn , pair , hash , approval , signatureData , pendingText , parsedAmounts , allowedSlippage , onRemove , liquidityErrorMessage , tokenA , tokenB , currencyA , currencyB , isZap , toggleZapMode ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const modalHeader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Column__WEBPACK_IMPORTED_MODULE_4__/* .AutoColumn */ .Tz, {
            gap: "md",
            children: [
                parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                    align: "flex-end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            fontSize: "24px",
                            children: parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A]?.toSignificant(6)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowFixed */ .DA, {
                            gap: "4px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                    currency: currencyA,
                                    size: "24px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    fontSize: "24px",
                                    ml: "10px",
                                    children: currencyA?.symbol
                                })
                            ]
                        })
                    ]
                }),
                parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_A */ .g.CURRENCY_A] && parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowFixed */ .DA, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        width: "16px"
                    })
                }),
                parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                    align: "flex-end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            fontSize: "24px",
                            children: parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.CURRENCY_B */ .g.CURRENCY_B]?.toSignificant(6)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowFixed */ .DA, {
                            gap: "4px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .Xw, {
                                    currency: currencyB,
                                    size: "24px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    fontSize: "24px",
                                    ml: "10px",
                                    children: currencyB?.symbol
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    small: true,
                    textAlign: "left",
                    pt: "12px",
                    children: t("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.", {
                        slippage: allowedSlippage / 100
                    })
                })
            ]
        });
    }, [
        allowedSlippage,
        currencyA,
        currencyB,
        parsedAmounts,
        t
    ]);
    const modalBottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            children: t("%assetA%/%assetB% Burned", {
                                assetA: currencyA?.symbol ?? "",
                                assetB: currencyB?.symbol ?? ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowFixed */ .DA, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .DoubleCurrencyLogo */ .ge, {
                                    currency0: currencyA,
                                    currency1: currencyB,
                                    margin: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: parsedAmounts[state_burn_actions__WEBPACK_IMPORTED_MODULE_6__/* .Field.LIQUIDITY */ .g.LIQUIDITY]?.toSignificant(6)
                                })
                            ]
                        })
                    ]
                }),
                pair && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: t("Price")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: [
                                        "1 ",
                                        currencyA?.symbol,
                                        " = ",
                                        tokenA ? pair.priceOf(tokenA).toSignificant(6) : "-",
                                        " ",
                                        currencyB?.symbol
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Row__WEBPACK_IMPORTED_MODULE_5__/* .RowBetween */ .m0, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: [
                                        "1 ",
                                        currencyB?.symbol,
                                        " = ",
                                        tokenB ? pair.priceOf(tokenB).toSignificant(6) : "-",
                                        " ",
                                        currencyA?.symbol
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    width: "100%",
                    mt: "20px",
                    disabled: !(approval === hooks_useApproveCallback__WEBPACK_IMPORTED_MODULE_8__/* .ApprovalState.APPROVED */ .UK.APPROVED || signatureData !== null),
                    onClick: onRemove,
                    children: t("Confirm")
                })
            ]
        });
    }, [
        currencyA,
        currencyB,
        parsedAmounts,
        approval,
        onRemove,
        pair,
        tokenA,
        tokenB,
        t,
        signatureData
    ]);
    const confirmationContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>liquidityErrorMessage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                isZap && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddLiquidity_components_ZapErrorMessage__WEBPACK_IMPORTED_MODULE_9__/* .ZapErrorMessages */ .p, {
                    isSingleToken: true,
                    zapMode: isZap,
                    toggleZapMode: toggleZapMode,
                    onModalDismiss: onDismiss
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__/* .TransactionErrorContent */ .ht, {
                    onDismiss: onDismiss,
                    message: liquidityErrorMessage
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__/* .ConfirmationModalContent */ .pM, {
            topContent: modalHeader,
            bottomContent: modalBottom
        }), [
        liquidityErrorMessage,
        isZap,
        toggleZapMode,
        onDismiss,
        modalHeader,
        modalBottom
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_TransactionConfirmationModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        title: title,
        onDismiss: onDismiss,
        customOnDismiss: customOnDismiss,
        attemptingTxn: attemptingTxn,
        hash: hash,
        content: confirmationContent,
        pendingText: pendingText
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmRemoveLiquidityModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 49213:
/***/ ((module) => {

module.exports = require("@ethersproject/strings");

/***/ }),

/***/ 93138:
/***/ ((module) => {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ 90615:
/***/ ((module) => {

module.exports = require("@gelatonetwork/limit-orders-lib");

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

/***/ 46171:
/***/ ((module) => {

module.exports = require("@vanilla-extract/recipes/createRuntimeFn");

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

/***/ 38190:
/***/ ((module) => {

module.exports = require("lodash/flatMap");

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

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 51546:
/***/ ((module) => {

module.exports = require("lodash/kebabCase");

/***/ }),

/***/ 63385:
/***/ ((module) => {

module.exports = require("lodash/keyBy");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 50541:
/***/ ((module) => {

module.exports = require("lodash/memoize");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 9822:
/***/ ((module) => {

module.exports = require("lodash/reduce");

/***/ }),

/***/ 4354:
/***/ ((module) => {

module.exports = require("lodash/times");

/***/ }),

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

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

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 88032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 43860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 23599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 80551:
/***/ ((module) => {

module.exports = require("react-window");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,6577,7454,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,4866,7379,4512,433,8393,1436,8015,9460,9860,5639,4303,9480,1051,8386,9800,917,5366,9818,6081], () => (__webpack_exec__(6657)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[[...currency]].js.map