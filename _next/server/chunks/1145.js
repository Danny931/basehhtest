"use strict";
exports.id = 1145;
exports.ids = [1145];
exports.modules = {

/***/ 99022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LocalContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const LocalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ children , store  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: store,
        context: LocalContext,
        children: children
    });
});


/***/ }),

/***/ 27094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocalDispatch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99022);



function useLocalDispatch() {
    const localContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Provider__WEBPACK_IMPORTED_MODULE_2__/* .LocalContext */ .A);
    const emptyFn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()), []);
    return localContext?.store?.dispatch || emptyFn;
}


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

/***/ 97913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WR": () => (/* binding */ useChartView),
  "Dh": () => (/* binding */ useCollectWinningModalProps),
  "n3": () => (/* binding */ useGetBetByEpoch),
  "XM": () => (/* binding */ useGetBufferSeconds),
  "dJ": () => (/* binding */ useGetCurrentEpoch),
  "Gc": () => (/* binding */ useGetCurrentHistoryPage),
  "ds": () => (/* binding */ useGetCurrentRoundCloseTimestamp),
  "sz": () => (/* binding */ useGetHasHistoryLoaded),
  "pw": () => (/* binding */ useGetHistory),
  "J7": () => (/* binding */ useGetHistoryFilter),
  "m3": () => (/* binding */ useGetIntervalSeconds),
  "Wx": () => (/* binding */ useGetIsClaimable),
  "dW": () => (/* binding */ useGetIsFetchingHistory),
  "YY": () => (/* binding */ useGetLeaderboardFilters),
  "Gy": () => (/* binding */ useGetLeaderboardHasMoreResults),
  "AC": () => (/* binding */ useGetLeaderboardLoadingState),
  "HF": () => (/* binding */ useGetLeaderboardResults),
  "Ok": () => (/* binding */ useGetLeaderboardSkip),
  "eI": () => (/* binding */ useGetMinBetAmount),
  "nB": () => (/* binding */ useGetOrFetchLeaderboardAddressResult),
  "hU": () => (/* binding */ useGetPredictionsStatus),
  "Aq": () => (/* binding */ useGetSortedRoundsCurrentEpoch),
  "YF": () => (/* binding */ useIsChartPaneOpen),
  "e": () => (/* binding */ useIsHistoryPaneOpen),
  "b1": () => (/* binding */ useStatModalProps)
});

// UNUSED EXPORTS: useGetAddressResult, useGetRoundsByCloseOracleId, useGetSelectedAddress, useGetSortedRounds

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(5305);
// EXTERNAL MODULE: ./src/contexts/LocalRedux/useLocalDispatch.ts
var useLocalDispatch = __webpack_require__(27094);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/contexts/LocalRedux/Provider.tsx
var Provider = __webpack_require__(99022);
;// CONCATENATED MODULE: ./src/contexts/LocalRedux/useSelector.ts


const useSelector_useSelector = (0,external_react_redux_.createSelectorHook)(Provider/* LocalContext */.A);
/* harmony default export */ const LocalRedux_useSelector = (useSelector_useSelector);

// EXTERNAL MODULE: ./src/state/predictions/index.ts
var predictions = __webpack_require__(85251);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(65757);
// EXTERNAL MODULE: external "lodash/orderBy"
var orderBy_ = __webpack_require__(49949);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy_);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: ./src/state/predictions/helpers.ts + 6 modules
var helpers = __webpack_require__(51014);
;// CONCATENATED MODULE: ./src/state/predictions/selectors.ts




const selectCurrentEpoch = (state)=>state.currentEpoch;
const selectRounds = (state)=>state.rounds;
const selectLedgers = (state)=>state.ledgers;
const selectClaimableStatuses = (state)=>state.claimableStatuses;
const selectMinBetAmount = (state)=>state.minBetAmount;
const selectIntervalSeconds = (state)=>state.intervalSeconds;
const makeGetBetByEpochSelector = (account, epoch)=>(0,toolkit_.createSelector)([
        selectLedgers
    ], (bets)=>{
        if (!bets[account]) {
            return null;
        }
        if (!bets[account][epoch]) {
            return null;
        }
        return (0,helpers/* parseBigNumberObj */.zN)(bets[account][epoch]);
    });
const makeGetIsClaimableSelector = (epoch)=>(0,toolkit_.createSelector)([
        selectClaimableStatuses
    ], (claimableStatuses)=>{
        return claimableStatuses[epoch] || false;
    });
const selectors_getRoundsByCloseOracleIdSelector = (0,toolkit_.createSelector)([
    selectRounds
], (rounds)=>{
    return Object.keys(rounds).reduce((accum, epoch)=>{
        const parsed = (0,helpers/* parseBigNumberObj */.zN)(rounds[epoch]);
        return {
            ...accum,
            [parsed.closeOracleId]: parsed
        };
    }, {});
});
const getBigNumberRounds = (0,toolkit_.createSelector)([
    selectRounds
], (rounds)=>{
    return Object.keys(rounds).reduce((accum, epoch)=>{
        return {
            ...accum,
            [epoch]: (0,helpers/* parseBigNumberObj */.zN)(rounds[epoch])
        };
    }, {});
});
const selectors_getSortedRoundsSelector = (0,toolkit_.createSelector)([
    getBigNumberRounds
], (rounds)=>{
    return orderBy_default()(Object.values(rounds), [
        "epoch"
    ], [
        "asc"
    ]);
});
const getSortedRoundsCurrentEpochSelector = (0,toolkit_.createSelector)([
    selectCurrentEpoch,
    selectors_getSortedRoundsSelector
], (currentEpoch, sortedRounds)=>{
    return {
        currentEpoch,
        rounds: sortedRounds
    };
});
const getMinBetAmountSelector = (0,toolkit_.createSelector)([
    selectMinBetAmount
], bignumber_.BigNumber.from);
const getCurrentRoundCloseTimestampSelector = (0,toolkit_.createSelector)([
    selectCurrentEpoch,
    getBigNumberRounds,
    selectIntervalSeconds
], (currentEpoch, rounds, intervalSeconds)=>{
    if (!currentEpoch) {
        return undefined;
    }
    const currentRound = rounds[currentEpoch - 1];
    if (!currentRound) {
        return undefined;
    }
    if (!currentRound.closeTimestamp) {
        return currentRound.lockTimestamp + intervalSeconds;
    }
    return currentRound.closeTimestamp;
});

;// CONCATENATED MODULE: ./src/state/predictions/hooks.ts






const useGetRoundsByCloseOracleId = ()=>{
    return useSelector(getRoundsByCloseOracleIdSelector);
};
const useGetSortedRounds = ()=>{
    return useSelector(getSortedRoundsSelector);
};
const useGetSortedRoundsCurrentEpoch = ()=>{
    return LocalRedux_useSelector(getSortedRoundsCurrentEpochSelector);
};
const useGetBetByEpoch = (account, epoch)=>{
    const getBetByEpochSelector = (0,external_react_.useMemo)(()=>makeGetBetByEpochSelector(account, epoch), [
        account,
        epoch
    ]);
    return LocalRedux_useSelector(getBetByEpochSelector);
};
const useGetIsClaimable = (epoch)=>{
    const getIsClaimableSelector = (0,external_react_.useMemo)(()=>makeGetIsClaimableSelector(epoch), [
        epoch
    ]);
    return LocalRedux_useSelector(getIsClaimableSelector);
};
const useIsHistoryPaneOpen = ()=>{
    return LocalRedux_useSelector((state)=>state.isHistoryPaneOpen);
};
const useIsChartPaneOpen = ()=>{
    return LocalRedux_useSelector((state)=>state.isChartPaneOpen);
};
const useChartView = ()=>{
    return LocalRedux_useSelector((state)=>state.chartView);
};
const useGetCurrentEpoch = ()=>{
    return LocalRedux_useSelector((state)=>state.currentEpoch);
};
const useGetIntervalSeconds = ()=>{
    return LocalRedux_useSelector((state)=>state.intervalSeconds);
};
const useGetPredictionsStatus = ()=>{
    return LocalRedux_useSelector((state)=>state.status);
};
const useGetHistoryFilter = ()=>{
    return LocalRedux_useSelector((state)=>state.historyFilter);
};
const useGetHasHistoryLoaded = ()=>{
    return LocalRedux_useSelector((state)=>state.hasHistoryLoaded);
};
const useGetCurrentHistoryPage = ()=>{
    return LocalRedux_useSelector((state)=>state.currentHistoryPage);
};
const useGetMinBetAmount = ()=>{
    return LocalRedux_useSelector(getMinBetAmountSelector);
};
const useGetBufferSeconds = ()=>{
    return LocalRedux_useSelector((state)=>state.bufferSeconds);
};
const useGetIsFetchingHistory = ()=>{
    return LocalRedux_useSelector((state)=>state.isFetchingHistory);
};
const useGetHistory = ()=>{
    return LocalRedux_useSelector((state)=>state.history);
};
/**
 * The current round's lock timestamp will not be set immediately so we return an estimate until then
 */ const useGetCurrentRoundCloseTimestamp = ()=>{
    return LocalRedux_useSelector(getCurrentRoundCloseTimestampSelector);
};
// Leaderboard
const useGetLeaderboardLoadingState = ()=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.loadingState);
};
const useGetLeaderboardResults = ()=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.results);
};
const useGetLeaderboardFilters = ()=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.filters);
};
const useGetLeaderboardSkip = ()=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.skip);
};
const useGetLeaderboardHasMoreResults = ()=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.hasMoreResults);
};
const useGetAddressResult = (account)=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.addressResults[account]);
};
const useGetOrFetchLeaderboardAddressResult = (account)=>{
    const addressResult = useGetAddressResult(account);
    const dispatch = (0,useLocalDispatch/* default */.Z)();
    (0,external_react_.useEffect)(()=>{
        const address = (0,utils/* isAddress */.UJ)(account);
        // If address result is null it means we already tried fetching the results and none came back
        if (!addressResult && addressResult !== null && address) {
            dispatch((0,predictions/* fetchAddressResult */.nI)(account));
        }
    }, [
        dispatch,
        account,
        addressResult
    ]);
    return addressResult;
};
const useGetSelectedAddress = ()=>{
    return LocalRedux_useSelector((state)=>state.leaderboard.selectedAddress);
};
// Because Modal Component is rendered outside the Prediction Page contexts
// We have to pass local state as props instead of retrieving directly in component
const useStatModalProps = (account)=>{
    const selectedAddress = useGetSelectedAddress();
    const address = account || selectedAddress;
    const result = useGetOrFetchLeaderboardAddressResult(address);
    const leaderboardLoadingState = useGetLeaderboardLoadingState();
    return {
        address,
        result,
        leaderboardLoadingState
    };
};
const useCollectWinningModalProps = ()=>{
    const isLoadingHistory = useGetIsFetchingHistory();
    const history = useGetHistory();
    return {
        isLoadingHistory,
        history
    };
};


/***/ }),

/***/ 85251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E3": () => (/* binding */ initialState),
/* harmony export */   "G$": () => (/* binding */ setLeaderboardFilter),
/* harmony export */   "Mk": () => (/* binding */ filterNextPageLeaderboard),
/* harmony export */   "S9": () => (/* binding */ fetchPredictionData),
/* harmony export */   "Ub": () => (/* binding */ fetchLedgerData),
/* harmony export */   "WB": () => (/* binding */ markAsCollected),
/* harmony export */   "Yq": () => (/* binding */ setHistoryFilter),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bq": () => (/* binding */ setChartView),
/* harmony export */   "dG": () => (/* binding */ filterLeaderboard),
/* harmony export */   "l3": () => (/* binding */ setSelectedAddress),
/* harmony export */   "nI": () => (/* binding */ fetchAddressResult),
/* harmony export */   "nQ": () => (/* binding */ setChartPaneState),
/* harmony export */   "uP": () => (/* binding */ fetchNodeHistory),
/* harmony export */   "uw": () => (/* binding */ initializePredictions),
/* harmony export */   "vR": () => (/* binding */ setHistoryPaneState)
/* harmony export */ });
/* unused harmony exports fetchHistory, predictionsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11341);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_maxBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64042);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93638);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6429);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87799);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51014);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18770);












const initialState = {
    status: state_types__WEBPACK_IMPORTED_MODULE_7__/* .PredictionStatus.INITIAL */ .Gw.INITIAL,
    chartView: state_types__WEBPACK_IMPORTED_MODULE_7__/* .PredictionsChartView.Chainlink */ .RU.Chainlink,
    isLoading: false,
    isHistoryPaneOpen: false,
    isChartPaneOpen: false,
    isFetchingHistory: false,
    historyFilter: state_types__WEBPACK_IMPORTED_MODULE_7__/* .HistoryFilter.ALL */ .dZ.ALL,
    currentEpoch: 0,
    intervalSeconds: 300,
    minBetAmount: "10000000000000",
    bufferSeconds: 60,
    rounds: {},
    history: [],
    totalHistory: 0,
    currentHistoryPage: 1,
    hasHistoryLoaded: false,
    ledgers: {},
    claimableStatuses: {},
    leaderboard: {
        selectedAddress: null,
        loadingState: config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Idle */ .iF.Idle,
        filters: {
            address: null,
            orderBy: "totalBets",
            timePeriod: "all"
        },
        skip: 0,
        hasMoreResults: true,
        addressResults: {},
        results: []
    }
};
const initializePredictions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/initialize", async (account = null, { extra  })=>{
    // Static values
    const marketData = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getPredictionData */ .n)(extra.address);
    const epochs = marketData.currentEpoch > _config__WEBPACK_IMPORTED_MODULE_9__/* .PAST_ROUND_COUNT */ .v9 ? lodash_range__WEBPACK_IMPORTED_MODULE_5___default()(marketData.currentEpoch, marketData.currentEpoch - _config__WEBPACK_IMPORTED_MODULE_9__/* .PAST_ROUND_COUNT */ .v9) : [
        marketData.currentEpoch
    ];
    // Round data
    const roundsResponse = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getRoundsData */ .$8)(epochs, extra.address);
    const initialRoundData = roundsResponse.reduce((accum, roundResponse)=>{
        const reduxNodeRound = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .serializePredictionsRoundsResponse */ .WB)(roundResponse);
        return {
            ...accum,
            [reduxNodeRound.epoch.toString()]: reduxNodeRound
        };
    }, {});
    const initializedData = {
        ...marketData,
        rounds: initialRoundData,
        ledgers: {},
        claimableStatuses: {}
    };
    if (!account) {
        return initializedData;
    }
    const [ledgerResponses, claimableStatuses] = await Promise.all([
        (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getLedgerData */ .Tq)(account, epochs, extra.address),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getClaimStatuses */ .jG)(account, epochs, extra.address)
    ]);
    return lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, initializedData, {
        ledgers: (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeLedgerData */ .a8)(account, ledgerResponses, epochs),
        claimableStatuses
    });
});
const fetchPredictionData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/fetchPredictionData", async (account = null, { extra  })=>{
    const { status , currentEpoch , intervalSeconds , minBetAmount  } = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getPredictionData */ .n)(extra.address);
    const liveCurrentAndRecent = [
        currentEpoch,
        currentEpoch - 1,
        currentEpoch - 2
    ];
    const roundsResponse = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getRoundsData */ .$8)(liveCurrentAndRecent, extra.address);
    const roundData = roundsResponse.reduce((accum, round)=>{
        if (!round) {
            return accum;
        }
        const reduxNodeRound = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .serializePredictionsRoundsResponse */ .WB)(round);
        return {
            ...accum,
            [reduxNodeRound.epoch.toString()]: reduxNodeRound
        };
    }, {});
    const publicData = {
        status,
        currentEpoch,
        intervalSeconds,
        minBetAmount,
        rounds: roundData,
        ledgers: {},
        claimableStatuses: {}
    };
    if (!account) {
        return publicData;
    }
    const epochs = currentEpoch > _config__WEBPACK_IMPORTED_MODULE_9__/* .PAST_ROUND_COUNT */ .v9 ? lodash_range__WEBPACK_IMPORTED_MODULE_5___default()(currentEpoch, currentEpoch - _config__WEBPACK_IMPORTED_MODULE_9__/* .PAST_ROUND_COUNT */ .v9) : [
        currentEpoch
    ];
    const [ledgerResponses, claimableStatuses] = await Promise.all([
        (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getLedgerData */ .Tq)(account, epochs, extra.address),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getClaimStatuses */ .jG)(account, epochs, extra.address)
    ]);
    return lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, publicData, {
        ledgers: (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeLedgerData */ .a8)(account, ledgerResponses, epochs),
        claimableStatuses
    });
});
const fetchLedgerData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/fetchLedgerData", async ({ account , epochs  }, { extra  })=>{
    const ledgers = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getLedgerData */ .Tq)(account, epochs, extra.address);
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeLedgerData */ .a8)(account, ledgers, epochs);
});
const fetchHistory = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/fetchHistory", async ({ account , claimed  }, { extra  })=>{
    const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getBetHistory */ .Fr)({
        user: account.toLowerCase(),
        claimed
    }, undefined, undefined, extra.api, extra.token.symbol);
    const transformer = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .transformBetResponse */ .ld)(extra.token.symbol);
    const bets = response.map(transformer);
    return {
        account,
        bets
    };
});
const fetchNodeHistory = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/fetchNodeHistory", async ({ account , page =1  }, { getState , extra  })=>{
    const userRoundsLength = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .fetchUsersRoundsLength */ .t$)(account, extra.address);
    const emptyResult = {
        bets: [],
        claimableStatuses: {},
        totalHistory: userRoundsLength.toNumber()
    };
    const maxPages = userRoundsLength.lte(_config__WEBPACK_IMPORTED_MODULE_9__/* .ROUNDS_PER_PAGE */ .yg) ? 1 : Math.ceil(userRoundsLength.toNumber() / _config__WEBPACK_IMPORTED_MODULE_9__/* .ROUNDS_PER_PAGE */ .yg);
    if (userRoundsLength.eq(0)) {
        return emptyResult;
    }
    if (page > maxPages) {
        return emptyResult;
    }
    const cursor = userRoundsLength.sub(_config__WEBPACK_IMPORTED_MODULE_9__/* .ROUNDS_PER_PAGE */ .yg * page);
    // If the page request is the final one we only want to retrieve the amount of rounds up to the next cursor.
    const size = maxPages === page ? userRoundsLength.sub(_config__WEBPACK_IMPORTED_MODULE_9__/* .ROUNDS_PER_PAGE */ .yg * (page - 1)) // Previous page's cursor
    .toNumber() : _config__WEBPACK_IMPORTED_MODULE_9__/* .ROUNDS_PER_PAGE */ .yg;
    const userRounds = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .fetchUserRounds */ .oO)(account, cursor.lt(0) ? 0 : cursor.toNumber(), size, extra.address);
    if (!userRounds) {
        return emptyResult;
    }
    const epochs = Object.keys(userRounds).map((epochStr)=>Number(epochStr));
    const [roundData, claimableStatuses] = await Promise.all([
        (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getRoundsData */ .$8)(epochs, extra.address),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getClaimStatuses */ .jG)(account, epochs, extra.address), 
    ]);
    // No need getState().predictions in local redux state
    const { bufferSeconds  } = getState();
    // Turn the data from the node into a Bet object that comes from the graph
    const bets = roundData.reduce((accum, round)=>{
        const reduxRound = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .serializePredictionsRoundsResponse */ .WB)(round);
        const ledger = userRounds[reduxRound.epoch];
        const ledgerAmount = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(ledger.amount);
        const closePrice = round.closePrice ? parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatUnits)(round.closePrice, 8)) : null;
        const lockPrice = round.lockPrice ? parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatUnits)(round.lockPrice, 8)) : null;
        const getRoundPosition = ()=>{
            if (!closePrice) {
                return null;
            }
            if (round.closePrice.eq(round.lockPrice)) {
                return state_types__WEBPACK_IMPORTED_MODULE_7__/* .BetPosition.HOUSE */ .Tu.HOUSE;
            }
            return round.closePrice.gt(round.lockPrice) ? state_types__WEBPACK_IMPORTED_MODULE_7__/* .BetPosition.BULL */ .Tu.BULL : state_types__WEBPACK_IMPORTED_MODULE_7__/* .BetPosition.BEAR */ .Tu.BEAR;
        };
        return [
            ...accum,
            {
                id: null,
                hash: null,
                amount: parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatUnits)(ledgerAmount)),
                position: ledger.position,
                claimed: ledger.claimed,
                claimedAt: null,
                claimedHash: null,
                claimedBNB: 0,
                claimedNetBNB: 0,
                createdAt: null,
                updatedAt: null,
                block: 0,
                round: {
                    id: null,
                    epoch: round.epoch.toNumber(),
                    failed: (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getHasRoundFailed */ .HJ)(reduxRound.oracleCalled, reduxRound.closeTimestamp, bufferSeconds),
                    startBlock: null,
                    startAt: round.startTimestamp ? round.startTimestamp.toNumber() : null,
                    startHash: null,
                    lockAt: round.lockTimestamp ? round.lockTimestamp.toNumber() : null,
                    lockBlock: null,
                    lockPrice,
                    lockHash: null,
                    lockRoundId: round.lockOracleId ? round.lockOracleId.toString() : null,
                    closeRoundId: round.closeOracleId ? round.closeOracleId.toString() : null,
                    closeHash: null,
                    closeAt: null,
                    closePrice,
                    closeBlock: null,
                    totalBets: 0,
                    totalAmount: parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatUnits)(round.totalAmount)),
                    bullBets: 0,
                    bullAmount: parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatUnits)(round.bullAmount)),
                    bearBets: 0,
                    bearAmount: parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__.formatUnits)(round.bearAmount)),
                    position: getRoundPosition()
                }
            }, 
        ];
    }, []);
    return {
        bets,
        claimableStatuses,
        page,
        totalHistory: userRoundsLength.toNumber()
    };
});
// Leaderboard
const filterLeaderboard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/filterLeaderboard", async ({ filters  }, { extra  })=>{
    const usersResponse = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getPredictionUsers */ .D)({
        skip: 0,
        orderBy: filters.orderBy,
        where: {
            totalBets_gte: _config__WEBPACK_IMPORTED_MODULE_9__/* .LEADERBOARD_MIN_ROUNDS_PLAYED */ .eQ,
            [`${filters.orderBy}_gt`]: 0
        }
    }, extra.api, extra.token.symbol);
    const transformer = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .transformUserResponse */ .r3)(extra.token.symbol);
    return {
        results: usersResponse.map(transformer)
    };
});
const fetchAddressResult = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/fetchAddressResult", async (account, { rejectWithValue , extra  })=>{
    const userResponse = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getPredictionUser */ .s9)(account, extra.api, extra.token.symbol);
    if (!userResponse) {
        return rejectWithValue(account);
    }
    return {
        account,
        data: (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .transformUserResponse */ .r3)(extra.token.symbol)(userResponse)
    };
});
const filterNextPageLeaderboard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("predictions/filterNextPageLeaderboard", async (skip, { getState , extra  })=>{
    const state = getState();
    const usersResponse = await (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getPredictionUsers */ .D)({
        skip,
        orderBy: state.leaderboard.filters.orderBy,
        where: {
            totalBets_gte: _config__WEBPACK_IMPORTED_MODULE_9__/* .LEADERBOARD_MIN_ROUNDS_PLAYED */ .eQ,
            [`${state.leaderboard.filters.orderBy}_gt`]: 0
        }
    }, extra.api, extra.token.symbol);
    const transformer = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .transformUserResponse */ .r3)(extra.token.symbol);
    return {
        results: usersResponse.map(transformer),
        skip
    };
});
const predictionsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "predictions",
    initialState,
    reducers: {
        setLeaderboardFilter: (state, action)=>{
            state.leaderboard.filters = {
                ...state.leaderboard.filters,
                ...action.payload
            };
            // Anytime we filters change we need to reset back to page 1
            state.leaderboard.skip = 0;
            state.leaderboard.hasMoreResults = true;
        },
        setHistoryPaneState: (state, action)=>{
            state.isHistoryPaneOpen = action.payload;
            state.historyFilter = state_types__WEBPACK_IMPORTED_MODULE_7__/* .HistoryFilter.ALL */ .dZ.ALL;
        },
        setChartPaneState: (state, action)=>{
            state.isChartPaneOpen = action.payload;
        },
        setChartView: (state, action)=>{
            state.chartView = action.payload;
        },
        setHistoryFilter: (state, action)=>{
            state.historyFilter = action.payload;
        },
        markAsCollected: (state, action)=>{
            state.claimableStatuses = {
                ...state.claimableStatuses,
                ...action.payload
            };
        },
        setSelectedAddress: (state, action)=>{
            state.leaderboard.selectedAddress = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_global_actions__WEBPACK_IMPORTED_MODULE_11__/* .resetUserState */ .tZ, (state)=>{
            state.claimableStatuses = {};
            state.ledgers = {};
            state.isFetchingHistory = false;
            state.history = [];
            state.hasHistoryLoaded = false;
            state.totalHistory = 0;
            state.currentHistoryPage = 1;
        });
        // Leaderboard filter
        builder.addCase(filterLeaderboard.pending, (state)=>{
            // Only mark as loading if we come from Fetched. This allows initialization.
            if (state.leaderboard.loadingState === config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched) {
                state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetching */ .iF.Fetching;
            }
        });
        builder.addCase(filterLeaderboard.fulfilled, (state, action)=>{
            const { results  } = action.payload;
            state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched;
            state.leaderboard.results = results;
            if (results.length < _helpers__WEBPACK_IMPORTED_MODULE_10__/* .LEADERBOARD_RESULTS_PER_PAGE */ .ub) {
                state.leaderboard.hasMoreResults = false;
            }
            // Populate address results to reduce calls
            state.leaderboard.addressResults = {
                ...state.leaderboard.addressResults,
                ...results.reduce((accum, result)=>{
                    return {
                        ...accum,
                        [result.id]: result
                    };
                }, {})
            };
        });
        // Leaderboard account result
        builder.addCase(fetchAddressResult.pending, (state)=>{
            state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetching */ .iF.Fetching;
        });
        builder.addCase(fetchAddressResult.fulfilled, (state, action)=>{
            const { account , data  } = action.payload;
            state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched;
            state.leaderboard.addressResults[account] = data;
        });
        builder.addCase(fetchAddressResult.rejected, (state, action)=>{
            state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched // TODO: should handle error
            ;
            state.leaderboard.addressResults[action.payload] = null;
        });
        // Leaderboard next page
        builder.addCase(filterNextPageLeaderboard.pending, (state)=>{
            state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetching */ .iF.Fetching;
        });
        builder.addCase(filterNextPageLeaderboard.fulfilled, (state, action)=>{
            const { results , skip  } = action.payload;
            state.leaderboard.loadingState = config_constants_types__WEBPACK_IMPORTED_MODULE_8__/* .FetchStatus.Fetched */ .iF.Fetched;
            state.leaderboard.results = [
                ...state.leaderboard.results,
                ...results
            ];
            state.leaderboard.skip = skip;
            if (results.length < _helpers__WEBPACK_IMPORTED_MODULE_10__/* .LEADERBOARD_RESULTS_PER_PAGE */ .ub) {
                state.leaderboard.hasMoreResults = false;
            }
        });
        // Ledger (bet) records
        builder.addCase(fetchLedgerData.fulfilled, (state, action)=>{
            state.ledgers = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, state.ledgers, action.payload);
        });
        // Get static market data
        builder.addCase(fetchPredictionData.fulfilled, (state, action)=>{
            const { status , currentEpoch , intervalSeconds , minBetAmount , rounds , claimableStatuses , ledgers  } = action.payload;
            const allRoundData = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, state.rounds, rounds);
            let newRounds = lodash_pickBy__WEBPACK_IMPORTED_MODULE_6___default()(allRoundData, (value, key)=>{
                return Number(key) > state.currentEpoch - _config__WEBPACK_IMPORTED_MODULE_9__/* .PAST_ROUND_COUNT */ .v9;
            });
            // If the round has change add a new future round
            if (state.currentEpoch !== currentEpoch) {
                const newestRound = lodash_maxBy__WEBPACK_IMPORTED_MODULE_3___default()(Object.values(state.rounds), "epoch");
                const futureRound = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeFutureRoundResponse */ .CM)(newestRound.epoch + 1, newestRound.startTimestamp + intervalSeconds + _config__WEBPACK_IMPORTED_MODULE_9__/* .ROUND_BUFFER */ .fq);
                newRounds = {
                    ...newRounds,
                    [futureRound.epoch]: futureRound
                };
            }
            state.status = status;
            state.currentEpoch = currentEpoch;
            state.intervalSeconds = intervalSeconds;
            state.minBetAmount = minBetAmount;
            state.claimableStatuses = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, state.claimableStatuses, claimableStatuses);
            state.ledgers = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, state.ledgers, ledgers);
            state.rounds = newRounds;
        });
        // Initialize predictions
        builder.addCase(initializePredictions.fulfilled, (state, action)=>{
            const { status , currentEpoch , intervalSeconds , rounds , claimableStatuses , ledgers  } = action.payload;
            const futureRounds = [];
            const currentRound = rounds[currentEpoch];
            for(let i = 1; i <= _config__WEBPACK_IMPORTED_MODULE_9__/* .FUTURE_ROUND_COUNT */ .ND; i++){
                futureRounds.push((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeFutureRoundResponse */ .CM)(currentEpoch + i, currentRound.startTimestamp + intervalSeconds * i));
            }
            return {
                ...state,
                status,
                currentEpoch,
                intervalSeconds,
                claimableStatuses,
                ledgers,
                rounds: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, rounds, (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .makeRoundData */ .D5)(futureRounds))
            };
        });
        // Show History
        builder.addCase(fetchHistory.pending, (state)=>{
            state.isFetchingHistory = true;
        });
        builder.addCase(fetchHistory.rejected, (state)=>{
            state.isFetchingHistory = false;
        });
        builder.addCase(fetchHistory.fulfilled, (state, action)=>{
            const { account , bets  } = action.payload;
            state.isFetchingHistory = false;
            state.history[account] = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()([], state.history[account] ?? [], bets);
        });
        // History from the node
        builder.addCase(fetchNodeHistory.pending, (state)=>{
            state.isFetchingHistory = true;
        });
        builder.addCase(fetchNodeHistory.rejected, (state)=>{
            state.isFetchingHistory = false;
        });
        builder.addCase(fetchNodeHistory.fulfilled, (state, action)=>{
            const { bets , claimableStatuses , page , totalHistory  } = action.payload;
            state.isFetchingHistory = false;
            state.history = page === 1 ? bets : [
                ...state.history,
                ...bets
            ];
            state.claimableStatuses = {
                ...state.claimableStatuses,
                ...claimableStatuses
            };
            state.hasHistoryLoaded = state.history.length === totalHistory || bets.length === 0;
            state.totalHistory = totalHistory;
            state.currentHistoryPage = page;
        });
    }
});
// Actions
const { setChartPaneState , setChartView , setHistoryFilter , setHistoryPaneState , markAsCollected , setLeaderboardFilter , setSelectedAddress ,  } = predictionsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (predictionsSlice.reducer);


/***/ }),

/***/ 17823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ ConfigProvider),
/* harmony export */   "ZR": () => (/* binding */ useConfig)
/* harmony export */ });
/* unused harmony export ConfigContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ConfigContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useConfig() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ConfigContext);
}
function ConfigProvider({ children , config  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfigContext.Provider, {
        value: config,
        children: children
    });
}


/***/ }),

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ context_PredictionConfigProviders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/contexts/LocalRedux/Provider.tsx
var Provider = __webpack_require__(99022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
;// CONCATENATED MODULE: ./src/contexts/LocalRedux/makeStore.ts

function makeStore(reducer, preloadedState = undefined, extraArgument) {
    return (0,toolkit_.configureStore)({
        reducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                thunk: {
                    extraArgument
                }
            }),
        preloadedState
    });
}

// EXTERNAL MODULE: ./src/state/types.ts
var types = __webpack_require__(93638);
// EXTERNAL MODULE: ./src/state/predictions/index.ts
var predictions = __webpack_require__(85251);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "lodash/toUpper"
var toUpper_ = __webpack_require__(19358);
var toUpper_default = /*#__PURE__*/__webpack_require__.n(toUpper_);
// EXTERNAL MODULE: ./src/views/Predictions/context/ConfigProvider.tsx
var ConfigProvider = __webpack_require__(17823);
// EXTERNAL MODULE: ./src/config/constants/contracts.ts
var contracts = __webpack_require__(51642);
// EXTERNAL MODULE: ./src/config/constants/endpoints.ts
var endpoints = __webpack_require__(10494);
// EXTERNAL MODULE: ./src/utils/addressHelpers.ts
var addressHelpers = __webpack_require__(70627);
// EXTERNAL MODULE: ../../packages/tokens/src/index.ts + 6 modules
var src = __webpack_require__(72502);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(65757);
;// CONCATENATED MODULE: ./src/views/Predictions/context/config.ts





const DEFAULT_MIN_PRICE_USD_DISPLAYED = bignumber_.BigNumber.from(10000);
/* harmony default export */ const context_config = ({
    BNB: {
        address: (0,addressHelpers/* getAddress */.Kn)(contracts/* default.predictionsBNB */.Z.predictionsBNB),
        api: endpoints/* GRAPH_API_PREDICTION_BNB */.GZ,
        chainlinkOracleAddress: (0,addressHelpers/* getAddress */.Kn)(contracts/* default.chainlinkOracleBNB */.Z.chainlinkOracleBNB),
        minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
        displayedDecimals: 4,
        token: src/* bscTokens.bnb */.ds.bnb
    },
    CAKE: {
        address: (0,addressHelpers/* getAddress */.Kn)(contracts/* default.predictionsCAKE */.Z.predictionsCAKE),
        api: endpoints/* GRAPH_API_PREDICTION_CAKE */.fO,
        chainlinkOracleAddress: (0,addressHelpers/* getAddress */.Kn)(contracts/* default.chainlinkOracleCAKE */.Z.chainlinkOracleCAKE),
        minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
        displayedDecimals: 4,
        token: src/* bscTokens.cake */.ds.cake
    }
});

;// CONCATENATED MODULE: ./src/views/Predictions/context/PredictionConfigProviders.tsx










const PREDICTION_TOKEN_KEY = "prediction-token";
const PredictionConfigProviders = ({ children  })=>{
    const { query  } = (0,router_.useRouter)();
    const { token  } = query;
    const { 0: selectedToken , 1: setConfig  } = (0,external_react_.useState)(()=>{
        const initToken = localStorage?.getItem(PREDICTION_TOKEN_KEY);
        if ([
            types/* PredictionSupportedSymbol.BNB */.ru.BNB,
            types/* PredictionSupportedSymbol.CAKE */.ru.CAKE
        ].includes(initToken)) {
            return initToken;
        }
        return types/* PredictionSupportedSymbol.CAKE */.ru.CAKE;
    });
    (0,external_react_.useEffect)(()=>{
        const upperToken = toUpper_default()(token);
        if ([
            types/* PredictionSupportedSymbol.BNB */.ru.BNB,
            types/* PredictionSupportedSymbol.CAKE */.ru.CAKE
        ].includes(upperToken)) {
            setConfig(upperToken);
            localStorage?.setItem(PREDICTION_TOKEN_KEY, upperToken);
        }
    }, [
        token
    ]);
    const config = (0,external_react_.useMemo)(()=>{
        return context_config[selectedToken];
    }, [
        selectedToken
    ]);
    const store = (0,external_react_.useMemo)(()=>{
        return makeStore(predictions/* default */.ZP, predictions/* initialState */.E3, config);
    }, [
        config
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(ConfigProvider/* default */.ZP, {
        config: config,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Provider/* default */.Z, {
            store: store,
            children: children
        })
    });
};
/* harmony default export */ const context_PredictionConfigProviders = (PredictionConfigProviders);


/***/ }),

/***/ 94722:
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
            d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 88800:
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
            d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 33231:
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
            d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 83502:
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
            d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 65474:
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
            d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=1145.js.map