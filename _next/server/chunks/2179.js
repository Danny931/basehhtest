"use strict";
exports.id = 2179;
exports.ids = [2179];
exports.modules = {

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





/***/ })

};
;
//# sourceMappingURL=2179.js.map