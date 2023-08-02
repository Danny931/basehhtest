"use strict";
(() => {
var exports = {};
exports.id = 9700;
exports.ids = [9700,5306,2179,7854,1995];
exports.modules = {

/***/ 60760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43424);
/* harmony import */ var _Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Page__WEBPACK_IMPORTED_MODULE_2__]);
_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5ad34a86-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLoader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13702);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78344);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_3__]);
_styles__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ReactMarkdown = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
        remarkPlugins: [
            (remark_gfm__WEBPACK_IMPORTED_MODULE_2___default())
        ],
        components: _styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactMarkdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default().table.withConfig({
    componentId: "sc-a3180c5f-0"
})`
  margin-bottom: 32px;
  margin-top: 32px;
  width: 100%;

  td,
  th {
    color: ${({ theme  })=>theme.colors.text};
    padding: 8px;
  }
`;
const TableBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-a3180c5f-1"
})`
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
const ThemedComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-a3180c5f-2"
})`
  color: ${({ theme  })=>theme.colors.text};
  margin-bottom: 16px;
  margin-top: 16px;

  li {
    margin-bottom: 8px;
  }
`;
const Pre = styled_components__WEBPACK_IMPORTED_MODULE_1___default().pre.withConfig({
    componentId: "sc-a3180c5f-3"
})`
  color: ${({ theme  })=>theme.colors.text};
  margin-bottom: 16px;
  margin-top: 16px;
  max-width: 100%;
  overflow-x: auto;
`;
const AStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-a3180c5f-4"
})`
  word-break: break-all;
`;
const Title = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        as: "h4",
        scale: "lg",
        my: "16px",
        ...props
    });
};
const markdownComponents = {
    h1: Title,
    h2: Title,
    h3: Title,
    h4: Title,
    h5: Title,
    h6: Title,
    p: (props)=>{
        // @ts-ignore
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            as: "p",
            my: "16px",
            ...props
        });
    },
    table: ({ ...props })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableBox, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Table, {
                children: props.children
            })
        });
    },
    ol: (props)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemedComponent, {
            as: "ol",
            ...props
        });
    },
    ul: (props)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemedComponent, {
            as: "ul",
            ...props
        });
    },
    pre: Pre,
    a: AStyle
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markdownComponents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 71652:
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15941);
/* harmony import */ var state_voting_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25215);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93638);
/* harmony import */ var views_Voting_Proposal_Overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, views_Voting_Proposal_Overview__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, views_Voting_Proposal_Overview__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// eslint-disable-next-line camelcase





const ProposalPage = ({ fallback ={}  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {
        value: {
            fallback
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Voting_Proposal_Overview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
};
const getStaticPaths = ()=>{
    return {
        fallback: true,
        paths: []
    };
};
const getStaticProps = async ({ params  })=>{
    const { id  } = params;
    if (typeof id !== "string") {
        return {
            notFound: true
        };
    }
    try {
        const fetchedProposal = await (0,state_voting_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getProposal */ .pU)(id);
        if (!fetchedProposal) {
            return {
                notFound: true,
                revalidate: 1
            };
        }
        return {
            props: {
                fallback: {
                    [(0,swr__WEBPACK_IMPORTED_MODULE_1__.unstable_serialize)([
                        "proposal",
                        id
                    ])]: fetchedProposal
                }
            },
            revalidate: fetchedProposal.state === state_types__WEBPACK_IMPORTED_MODULE_3__/* .ProposalState.CLOSED */ .r7.CLOSED ? 60 * 60 * 12 // 12 hour
             : 3
        };
    } catch (error) {
        return {
            props: {
                fallback: {}
            },
            revalidate: 60
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProposalPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bp": () => (/* binding */ getProposals),
/* harmony export */   "pU": () => (/* binding */ getProposal),
/* harmony export */   "uy": () => (/* binding */ getAllVotes)
/* harmony export */ });
/* unused harmony export getVotes */
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10494);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93638);
/* eslint-disable no-await-in-loop */ /* eslint-disable no-restricted-syntax */ 


const getProposals = async (first = 5, skip = 0, state = state_types__WEBPACK_IMPORTED_MODULE_2__/* .ProposalState.ACTIVE */ .r7.ACTIVE)=>{
    const response = await graphql_request__WEBPACK_IMPORTED_MODULE_1___default()(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .SNAPSHOT_API */ .TY, graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
      query getProposals($first: Int!, $skip: Int!, $state: String!, $orderDirection: OrderDirection) {
        proposals(
          first: $first
          skip: $skip
          orderBy: "end"
          orderDirection: $orderDirection
          where: { space_in: "cakevote.eth", state: $state }
        ) {
          id
          title
          body
          choices
          start
          end
          snapshot
          state
          author
        }
      }
    `, {
        first,
        skip,
        state,
        orderDirection: state === state_types__WEBPACK_IMPORTED_MODULE_2__/* .ProposalState.CLOSED */ .r7.CLOSED ? "desc" : "asc"
    });
    return response.proposals;
};
const getProposal = async (id)=>{
    const response = await graphql_request__WEBPACK_IMPORTED_MODULE_1___default()(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .SNAPSHOT_API */ .TY, graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
      query getProposal($id: String) {
        proposal(id: $id) {
          id
          title
          body
          choices
          start
          end
          snapshot
          state
          author
          votes
        }
      }
    `, {
        id
    });
    return response.proposal;
};
const getVotes = async (first, skip, where)=>{
    const response = await graphql_request__WEBPACK_IMPORTED_MODULE_1___default()(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .SNAPSHOT_API */ .TY, graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
      query getVotes($first: Int, $skip: Int, $where: VoteWhere) {
        votes(first: $first, skip: $skip, where: $where) {
          id
          voter
          created
          choice
          proposal {
            choices
          }
          vp
        }
      }
    `, {
        first,
        skip,
        where
    });
    return response.votes;
};
// TODO: lazy get all votes when user click load more
const getAllVotes = async (proposal, votesPerChunk = 30000)=>{
    const voters = await new Promise((resolve, reject)=>{
        let votes = [];
        const fetchVoteChunk = async (newSkip)=>{
            try {
                const voteChunk = await getVotes(votesPerChunk, newSkip, {
                    proposal: proposal.id
                });
                if (voteChunk.length === 0) {
                    resolve(votes);
                } else {
                    votes = [
                        ...votes,
                        ...voteChunk
                    ];
                    fetchVoteChunk(newSkip + votesPerChunk);
                }
            } catch (error) {
                reject(error);
            }
        };
        fetchVoteChunk(0);
    });
    return voters.map((v)=>({
            ...v,
            metadata: {
                votingPower: String(v.vp) || "0"
            }
        }));
};


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

/***/ 81995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67854);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85306);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__]);
components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const StyledNotFound = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-27d142db-0"
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`;
const NotFound = ({ statusCode =404  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledNotFound, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: "64px",
                    mb: "8px"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    scale: "xxl",
                    children: statusCode
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    mb: "16px",
                    children: t("Oops, page not found.")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        as: "a",
                        scale: "sm",
                        children: t("Back Home")
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84281);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55834);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36957);
/* harmony import */ var _components_Proposals_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Proposals_tags__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Proposals_tags__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DetailBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
    componentId: "sc-97c77ecf-0"
})`
  background-color: ${({ theme  })=>theme.colors.background};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
`;
const Details = ({ proposal  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const startDate = new Date(proposal.start * 1000);
    const endDate = new Date(proposal.end * 1000);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        mb: "16px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    as: "h3",
                    scale: "md",
                    children: t("Details")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        alignItems: "center",
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: t("Identifier")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                href: `${_config__WEBPACK_IMPORTED_MODULE_5__/* .IPFS_GATEWAY */ .Gs}/${proposal.id}`,
                                ml: "8px",
                                children: proposal.id.slice(0, 8)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        alignItems: "center",
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: t("Creator")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getBlockExploreLink */ .C)(proposal.author, "address"),
                                ml: "8px",
                                children: (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(proposal.author)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        alignItems: "center",
                        mb: "16px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                children: t("Snapshot")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getBlockExploreLink */ .C)(proposal.snapshot, "block"),
                                ml: "8px",
                                children: proposal.snapshot
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DetailBox, {
                        p: "16px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Proposals_tags__WEBPACK_IMPORTED_MODULE_6__/* .ProposalStateTag */ .U, {
                                proposalState: proposal.state,
                                mb: "8px"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        fontSize: "14px",
                                        children: t("Start Date")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        ml: "8px",
                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(startDate, "yyyy-MM-dd HH:mm")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        fontSize: "14px",
                                        children: t("End Date")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        ml: "8px",
                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(endDate, "yyyy-MM-dd HH:mm")
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(83852);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(98841);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52993);
/* harmony import */ var state_voting_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25215);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79847);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93638);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24953);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64548);
/* harmony import */ var components_ReactMarkdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43666);
/* harmony import */ var views_NotFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81995);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60760);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6429);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49942);
/* harmony import */ var _components_Proposals_tags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49918);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96612);
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46339);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34770);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76695);
/* harmony import */ var _Votes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(91638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, swr_immutable__WEBPACK_IMPORTED_MODULE_4__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_9__, components_ReactMarkdown__WEBPACK_IMPORTED_MODULE_10__, views_NotFound__WEBPACK_IMPORTED_MODULE_11__, components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__, _components_Proposals_tags__WEBPACK_IMPORTED_MODULE_15__, _Details__WEBPACK_IMPORTED_MODULE_17__, _Results__WEBPACK_IMPORTED_MODULE_18__, _Vote__WEBPACK_IMPORTED_MODULE_19__, _Votes__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, swr_immutable__WEBPACK_IMPORTED_MODULE_4__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_9__, components_ReactMarkdown__WEBPACK_IMPORTED_MODULE_10__, views_NotFound__WEBPACK_IMPORTED_MODULE_11__, components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__, _components_Proposals_tags__WEBPACK_IMPORTED_MODULE_15__, _Details__WEBPACK_IMPORTED_MODULE_17__, _Results__WEBPACK_IMPORTED_MODULE_18__, _Vote__WEBPACK_IMPORTED_MODULE_19__, _Votes__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const Overview = ()=>{
    const { query , isFallback  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const id = query.id;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { status: proposalLoadingStatus , data: proposal , error ,  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_4__["default"])(id ? [
        "proposal",
        id
    ] : null, ()=>(0,state_voting_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getProposal */ .pU)(id));
    const { status: votesLoadingStatus , data: votes , mutate: refetch ,  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_4__["default"])(proposal ? [
        "proposal",
        proposal,
        "votes"
    ] : null, async ()=>(0,state_voting_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getAllVotes */ .uy)(proposal));
    const hasAccountVoted = account && votes && votes.some((vote)=>vote.voter.toLowerCase() === account.toLowerCase());
    const isPageLoading = votesLoadingStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_13__/* .FetchStatus.Fetching */ .iF.Fetching || proposalLoadingStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_13__/* .FetchStatus.Fetching */ .iF.Fetching;
    if (!proposal && error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_NotFound__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {});
    }
    if (isFallback || !proposal) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        py: "40px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_1__/* .PageMeta */ .V, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                mb: "40px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "/voting",
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        as: "a",
                        variant: "text",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            color: "primary",
                            width: "24px"
                        }),
                        px: "0",
                        children: t("Back to Vote Overview")
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                mb: "32px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        mb: "8px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Proposals_tags__WEBPACK_IMPORTED_MODULE_15__/* .ProposalStateTag */ .U, {
                                                proposalState: proposal.state
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Proposals_tags__WEBPACK_IMPORTED_MODULE_15__/* .ProposalTypeTag */ .g, {
                                                isCoreProposal: (0,_helpers__WEBPACK_IMPORTED_MODULE_14__/* .isCoreProposal */ .md)(proposal),
                                                ml: "8px"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                        as: "h1",
                                        scale: "xl",
                                        mb: "16px",
                                        children: proposal.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ReactMarkdown__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            children: proposal.body
                                        })
                                    })
                                ]
                            }),
                            !isPageLoading && !hasAccountVoted && proposal.state === state_types__WEBPACK_IMPORTED_MODULE_5__/* .ProposalState.ACTIVE */ .r7.ACTIVE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vote__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                proposal: proposal,
                                onSuccess: refetch,
                                mb: "16px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Votes__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                votes: votes,
                                totalVotes: votes?.length ?? proposal.votes,
                                votesLoadingStatus: votesLoadingStatus
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        position: "sticky",
                        top: "60px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Details__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                proposal: proposal
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Results__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                choices: proposal.choices,
                                votes: votes,
                                votesLoadingStatus: votesLoadingStatus
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20201);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59045);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6429);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49942);
/* harmony import */ var _components_TextEllipsis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68920);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, _components_TextEllipsis__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, _components_TextEllipsis__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Results = ({ choices , votes , votesLoadingStatus  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const results = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .calculateVoteResults */ .zn)(votes);
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const totalVotes = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getTotalFromVotes */ .Z$)(votes);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    as: "h3",
                    scale: "md",
                    children: t("Current Results")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: [
                    votesLoadingStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .FetchStatus.Fetched */ .iF.Fetched && choices.map((choice, index)=>{
                        const choiceVotes = results[choice] || [];
                        const totalChoiceVote = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getTotalFromVotes */ .Z$)(choiceVotes);
                        const progress = totalVotes === 0 ? 0 : totalChoiceVote / totalVotes * 100;
                        const hasVoted = choiceVotes.some((vote)=>{
                            return account && vote.voter.toLowerCase() === account.toLowerCase();
                        });
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            mt: index > 0 ? "24px" : "0px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    mb: "8px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextEllipsis__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            mb: "4px",
                                            title: choice,
                                            children: choice
                                        }),
                                        hasVoted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            variant: "success",
                                            outline: true,
                                            ml: "8px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    mr: "4px"
                                                }),
                                                " ",
                                                t("Voted")
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    mb: "4px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        primaryStep: progress,
                                        scale: "sm"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            color: "textSubtle",
                                            children: t("%total% Votes", {
                                                total: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(totalChoiceVote, 0, 2)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            children: [
                                                progress.toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }),
                                                "%"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, choice);
                    }),
                    votesLoadingStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .FetchStatus.Fetching */ .iF.Fetching && choices.map((choice, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            mt: index > 0 ? "24px" : "0px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    mb: "8px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextEllipsis__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        mb: "4px",
                                        title: choice,
                                        children: choice
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    mb: "4px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        height: "36px",
                                        mb: "4px"
                                    })
                                })
                            ]
                        }, choice);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Results);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76695:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15713);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39480);
/* harmony import */ var _components_CastVoteModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_5__, _components_CastVoteModal__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_5__, _components_CastVoteModal__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Choice = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
    componentId: "sc-1aee476-0"
})`
  align-items: center;
  border: 1px solid ${({ theme , isChecked  })=>theme.colors[isChecked ? "success" : "cardBorder"]};
  border-radius: 16px;
  cursor: ${({ isDisabled  })=>isDisabled ? "not-allowed" : "pointer"};
  display: flex;
  margin-bottom: 16px;
  padding: 16px;
`;
const ChoiceText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-1aee476-1"
})`
  flex: 1;
  padding-left: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0;
`;
const Vote = ({ proposal , onSuccess , ...props })=>{
    const { 0: vote , 1: setVote  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .useToast */ .p)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const handleSuccess = async ()=>{
        toastSuccess(t("Vote cast!"));
        onSuccess?.();
    };
    const [presentCastVoteModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CastVoteModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onSuccess: handleSuccess,
        proposalId: proposal.id,
        vote: vote,
        block: Number(proposal.snapshot)
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    as: "h3",
                    scale: "md",
                    children: t("Cast your vote")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                children: [
                    proposal.choices.map((choice, index)=>{
                        const isChecked = index + 1 === vote?.value;
                        const handleChange = ()=>{
                            setVote({
                                label: choice,
                                value: index + 1
                            });
                        };
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Choice, {
                            isChecked: isChecked,
                            isDisabled: !account,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        scale: "sm",
                                        value: choice,
                                        checked: isChecked,
                                        onChange: handleChange,
                                        disabled: !account
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChoiceText, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        as: "span",
                                        title: choice,
                                        children: choice
                                    })
                                })
                            ]
                        }, choice);
                    }),
                    account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        onClick: presentCastVoteModal,
                        disabled: vote === null,
                        children: t("Cast Vote")
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vote);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23726);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60525);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65474);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33231);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6429);
/* harmony import */ var _components_Proposal_VotesLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18075);
/* harmony import */ var _components_Proposal_VoteRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35189);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _components_Proposal_VotesLoading__WEBPACK_IMPORTED_MODULE_6__, _components_Proposal_VoteRow__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _components_Proposal_VotesLoading__WEBPACK_IMPORTED_MODULE_6__, _components_Proposal_VoteRow__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const VOTES_PER_VIEW = 20;
const parseVotePower = (incomingVote)=>{
    let votingPower = parseFloat(incomingVote?.metadata?.votingPower);
    if (!votingPower) votingPower = 0;
    return votingPower;
};
const Votes = ({ votes , votesLoadingStatus , totalVotes  })=>{
    const { 0: showAll , 1: setShowAll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const orderedVotes = lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(votes, [
        parseVotePower,
        "created"
    ], [
        "desc",
        "desc"
    ]);
    const displayVotes = showAll ? orderedVotes : orderedVotes.slice(0, VOTES_PER_VIEW);
    const isFetched = votesLoadingStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_5__/* .FetchStatus.Fetched */ .iF.Fetched;
    const handleClick = ()=>{
        setShowAll(!showAll);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            as: "h3",
                            scale: "md",
                            children: t("Votes (%count%)", {
                                count: totalVotes ? totalVotes.toLocaleString() : "-"
                            })
                        }),
                        !isFetched && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            spin: true,
                            width: "22px"
                        })
                    ]
                })
            }),
            !isFetched && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Proposal_VotesLoading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            isFetched && displayVotes.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    displayVotes.map((vote)=>{
                        const isVoter = account && vote.voter.toLowerCase() === account.toLowerCase();
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Proposal_VoteRow__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            vote: vote,
                            isVoter: isVoter
                        }, vote.id);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        alignItems: "center",
                        justifyContent: "center",
                        py: "8px",
                        px: "24px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            width: "100%",
                            onClick: handleClick,
                            variant: "text",
                            endIcon: showAll ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                color: "primary",
                                width: "21px"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                color: "primary",
                                width: "21px"
                            }),
                            disabled: !isFetched,
                            children: showAll ? t("Hide") : t("See All")
                        })
                    })
                ]
            }),
            isFetched && displayVotes.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "center",
                py: "32px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    as: "h5",
                    children: t("No votes found")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Votes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42791);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94207);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2904);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const StyledLinkExternal = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-61244fc9-0"
})`
  display: inline-flex;
  font-size: 14px;
  > svg {
    width: 14px;
  }
`;
const FixedTermWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-61244fc9-1"
})`
  width: 100%;
  margin: 16px 0;
  padding: 1px 1px 3px 1px;
  background: ${({ theme , expired  })=>expired ? theme.colors.warning : "linear-gradient(180deg, #53dee9, #7645d9)"};
  border-radius: ${({ theme  })=>theme.radii.default};
`;
const FixedTermCardInner = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-61244fc9-2"
})`
  position: relative;
  z-index: 1;
  padding: 8px 12px;
  background: ${({ theme  })=>theme.colors.backgroundAlt};
  border-radius: ${({ theme  })=>theme.radii.default};

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-radius: ${({ theme  })=>theme.radii.default};
    background: ${({ theme , expired  })=>expired ? "rgba(255, 178, 55, 0.098)" : theme.colors.gradientBubblegum};
  }
`;
const StyleLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
    componentId: "sc-61244fc9-3"
})`
  text-decoration: underline;
`;
const DetailsView = ({ total , cakeBalance , cakeVaultBalance , cakePoolBalance , poolsBalance , cakeBnbLpBalance , ifoPoolBalance , lockedCakeBalance , lockedEndTime , block ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const blockTimestamp = (0,hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const isBoostingExpired = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return lockedEndTime !== 0 && new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(blockTimestamp?.toString()).gte(lockedEndTime);
    }, [
        blockTimestamp,
        lockedEndTime
    ]);
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Number.isFinite(lockedCakeBalance) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    children: isBoostingExpired ? t("Your vCAKE boosting was expired at the snapshot block. Renew your fixed-term staking position to activate the boost for future voting proposals.") : t("Voting power is calculated using the staking amount and remaining staking duration of the fixed-term CAKE staking position at the block.")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    bold: true,
                    m: "10px 0",
                    children: `${t("CAKE locked:")} ${(0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(lockedCakeBalance, 0, 2)}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyleLink, {
                    href: "/pools",
                    children: t("Go to Pools")
                })
            ]
        })
    }), {
        placement: "bottom"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ModalInner */ .IM, {
        mb: "0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                as: "p",
                mb: "24px",
                fontSize: "14px",
                color: "textSubtle",
                children: t("Your voting power is determined by the amount of CAKE you held and the remaining duration on the fixed-term staking position (if you have one) at the block detailed below. CAKE held in other places does not contribute to your voting power.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                color: "secondary",
                textTransform: "uppercase",
                mb: "4px",
                bold: true,
                fontSize: "14px",
                children: t("Overview")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .VotingBoxBorder */ .jb, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .VotingBoxCardInner */ .K7, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            color: "secondary",
                            children: t("Your Voting Power")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            bold: true,
                            fontSize: "20px",
                            children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(total, 0, 3)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                color: "secondary",
                textTransform: "uppercase",
                mb: "4px",
                bold: true,
                fontSize: "14px",
                children: [
                    t("Your voting power at block"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                        href: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreLink */ .C)(block, "block"),
                        ml: "8px",
                        children: block
                    })
                ]
            }),
            Number.isFinite(cakeBalance) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "16px",
                        children: t("Wallet")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        textAlign: "right",
                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(cakeBalance, 0, 3)
                    })
                ]
            }),
            Number.isFinite(cakeVaultBalance) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "16px",
                        children: t("Flexible CAKE Staking")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        textAlign: "right",
                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(cakeVaultBalance, 0, 3)
                    })
                ]
            }),
            Number.isFinite(cakePoolBalance) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: lockedCakeBalance === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "4px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    color: "textSubtle",
                                    fontSize: "16px",
                                    children: t("Fixed Term CAKE Staking")
                                }),
                                tooltipVisible && tooltip,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    ref: targetRef,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        ml: "4px",
                                        width: "20px",
                                        height: "20px",
                                        color: "textSubtle"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            color: "failure",
                            textAlign: "right",
                            children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(cakePoolBalance, 0, 3)
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FixedTermWrapper, {
                    expired: isBoostingExpired,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedTermCardInner, {
                        expired: isBoostingExpired,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        fontSize: "16px",
                                        mr: "auto",
                                        children: t("Fixed Term CAKE Staking")
                                    }),
                                    tooltipVisible && tooltip,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        ref: targetRef,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            ml: "4px",
                                            width: "20px",
                                            height: "20px",
                                            color: "textSubtle"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                mt: "10px",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        bold: true,
                                        color: isBoostingExpired ? "warning" : "secondary",
                                        fontSize: "16px",
                                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(cakePoolBalance, 0, 3)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                color: isBoostingExpired ? "warning" : "secondary",
                                                width: "15px",
                                                height: "15px"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                ml: "4px",
                                                color: isBoostingExpired ? "warning" : "secondary",
                                                fontSize: "12px",
                                                children: isBoostingExpired ? t("Boosting Expired") : t("Boosted by vCAKE")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            Number.isFinite(ifoPoolBalance) && Number(ifoPoolBalance) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "16px",
                        children: t("IFO Pool")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        textAlign: "right",
                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(ifoPoolBalance, 0, 3)
                    })
                ]
            }),
            Number.isFinite(poolsBalance) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "16px",
                        children: t("Other Syrup Pools")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        textAlign: "right",
                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(poolsBalance, 0, 3)
                    })
                ]
            }),
            Number.isFinite(cakeBnbLpBalance) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        fontSize: "16px",
                        children: t("CAKE BNB LP")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        textAlign: "right",
                        children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(cakeBnbLpBalance, 0, 3)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94207);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(83502);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2904);
/* harmony import */ var _TextEllipsis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68920);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_5__, _TextEllipsis__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_5__, _TextEllipsis__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const MainView = ({ vote , total , isPending , isLoading , isError , onConfirm , onViewDetails , onDismiss , disabled , lockedCakeBalance , lockedEndTime ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const blockTimestamp = (0,hooks_useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const hasLockedCake = lockedCakeBalance > 0;
    const isBoostingExpired = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return lockedEndTime !== 0 && new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(blockTimestamp?.toString()).gte(lockedEndTime);
    }, [
        blockTimestamp,
        lockedEndTime
    ]);
    const hasBoosted = hasLockedCake && !isBoostingExpired;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ModalInner */ .IM, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        color: "secondary",
                        mb: "8px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        bold: true,
                        children: t("Voting For")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextEllipsis__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        bold: true,
                        fontSize: "20px",
                        mb: "8px",
                        title: vote.label,
                        children: vote.label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        color: "secondary",
                        mb: "8px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        bold: true,
                        children: t("Your Voting Power")
                    }),
                    isLoading && !isError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        height: "64px",
                        mb: "12px"
                    }) : isError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "danger",
                        mb: "12px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            color: "text",
                            children: t("Error occurred, please try again later")
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .VotingBoxBorder */ .jb, {
                                hasBoosted: hasBoosted,
                                onClick: onViewDetails,
                                style: {
                                    cursor: "pointer"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .VotingBoxCardInner */ .K7, {
                                    hasBoosted: hasBoosted,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            flexDirection: "column",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    bold: true,
                                                    fontSize: "20px",
                                                    color: total === 0 ? "failure" : "text",
                                                    children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(total, 0, 3)
                                                }),
                                                hasLockedCake && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            color: isBoostingExpired ? "warning" : "secondary",
                                                            width: "15px",
                                                            height: "15px"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            ml: "4px",
                                                            bold: true,
                                                            color: isBoostingExpired ? "warning" : "secondary",
                                                            fontSize: "14px",
                                                            children: isBoostingExpired ? t("Boosting Expired") : t("Boosted by vCAKE")
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            scale: "sm",
                                            variant: "text",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                width: "24px"
                                            })
                                        })
                                    ]
                                })
                            }),
                            total === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "danger",
                                mb: "12px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    color: "danger",
                                    children: t("Hold some CAKE in your wallet or on PancakeSwap at the snapshot block to get voting power for future proposals.")
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                as: "p",
                                color: "textSubtle",
                                fontSize: "14px",
                                children: t("Are you sure you want to vote for the above choice? This action cannot be undone.")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                isLoading: isPending,
                endIcon: isPending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    spin: true,
                    color: "currentColor"
                }) : null,
                disabled: disabled || isLoading || total === 0,
                width: "100%",
                mb: "8px",
                onClick: onConfirm,
                children: t("Confirm Vote")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                variant: "secondary",
                width: "100%",
                onClick: onDismiss,
                children: t("Cancel")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9270);
/* harmony import */ var _snapshot_labs_snapshot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7248);
/* harmony import */ var _snapshot_labs_snapshot_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_snapshot_labs_snapshot_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var views_Voting_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36957);
/* harmony import */ var _hooks_useGetVotingPower__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93860);
/* harmony import */ var _DetailsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36765);
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72449);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__, _hooks_useGetVotingPower__WEBPACK_IMPORTED_MODULE_7__, _DetailsView__WEBPACK_IMPORTED_MODULE_8__, _MainView__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__, _hooks_useGetVotingPower__WEBPACK_IMPORTED_MODULE_7__, _DetailsView__WEBPACK_IMPORTED_MODULE_8__, _MainView__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const hub = "https://hub.snapshot.org";
const client = new (_snapshot_labs_snapshot_js__WEBPACK_IMPORTED_MODULE_3___default().Client712)(hub);
const CastVoteModal = ({ onSuccess , proposalId , vote , block , onDismiss ,  })=>{
    const { 0: view , 1: setView  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.MAIN */ .u.MAIN);
    const { 0: modalIsOpen , 1: setModalIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const { 0: isPending , 1: setIsPending  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const library = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3LibraryContext */ .Hp)();
    const { toastError  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* .useToast */ .p)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    const { isLoading , isError , total , cakeBalance , cakeVaultBalance , cakePoolBalance , poolsBalance , cakeBnbLpBalance , ifoPoolBalance , lockedCakeBalance , lockedEndTime ,  } = (0,_hooks_useGetVotingPower__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(block, modalIsOpen);
    const isStartView = view === _types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.MAIN */ .u.MAIN;
    const handleBack = isStartView ? null : ()=>setView(_types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.MAIN */ .u.MAIN);
    const handleViewDetails = ()=>setView(_types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.DETAILS */ .u.DETAILS);
    const title = {
        [_types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.MAIN */ .u.MAIN]: t("Confirm Vote"),
        [_types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.DETAILS */ .u.DETAILS]: t("Voting Power")
    };
    const handleDismiss = ()=>{
        setModalIsOpen(false);
        onDismiss();
    };
    const handleConfirmVote = async ()=>{
        try {
            setIsPending(true);
            await client.vote(library, account, {
                space: views_Voting_config__WEBPACK_IMPORTED_MODULE_6__/* .PANCAKE_SPACE */ .Q8,
                choice: vote.value,
                reason: "",
                type: "single-choice",
                proposal: proposalId,
                app: "snapshot"
            });
            await onSuccess();
            handleDismiss();
        } catch (error) {
            toastError(t("Error"), error?.message ?? t("Error occurred, please try again"));
            console.error(error);
        } finally{
            setIsPending(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
        title: title[view],
        onBack: handleBack,
        onDismiss: onDismiss,
        hideCloseButton: !isStartView,
        headerBackground: theme.colors.gradientCardHeader,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            mb: "24px",
            children: [
                view === _types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.MAIN */ .u.MAIN && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainView__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    vote: vote,
                    isError: isError,
                    isLoading: isLoading,
                    isPending: isPending,
                    total: total,
                    lockedCakeBalance: lockedCakeBalance,
                    lockedEndTime: lockedEndTime,
                    onConfirm: handleConfirmVote,
                    onViewDetails: handleViewDetails,
                    onDismiss: handleDismiss
                }),
                view === _types__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmVoteView.DETAILS */ .u.DETAILS && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DetailsView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    total: total,
                    cakeBalance: cakeBalance,
                    ifoPoolBalance: ifoPoolBalance,
                    cakeVaultBalance: cakeVaultBalance,
                    cakePoolBalance: cakePoolBalance,
                    poolsBalance: poolsBalance,
                    cakeBnbLpBalance: cakeBnbLpBalance,
                    block: block,
                    lockedCakeBalance: lockedCakeBalance,
                    lockedEndTime: lockedEndTime
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CastVoteModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IM": () => (/* binding */ ModalInner),
/* harmony export */   "K7": () => (/* binding */ VotingBoxCardInner),
/* harmony export */   "jb": () => (/* binding */ VotingBoxBorder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const VotingBoxBorder = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ce8c554-0"
})`
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 1px 1px 3px 1px;
  border: ${({ hasBoosted  })=>hasBoosted ? "0px" : "1px"};
  border-style: solid;
  border-color: ${({ theme , hasBoosted  })=>hasBoosted ? "transparent" : theme.colors.cardBorder};
  background: ${({ hasBoosted  })=>hasBoosted ? "linear-gradient(180deg, #53dee9, #7645d9)" : "transparent"};
`;
const VotingBoxCardInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ce8c554-1"
})`
  height: 64px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  border-radius: 12px;
  justify-content: space-between;
  background: ${({ theme , hasBoosted  })=>hasBoosted ? theme.colors.gradientBubblegum : "transparent"};
`;
const ModalInner = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mb: "24px",
        maxWidth: [
            "100%",
            "100%",
            "100%",
            "320px"
        ],
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ConfirmVoteView)
/* harmony export */ });
var ConfirmVoteView;
(function(ConfirmVoteView) {
    ConfirmVoteView["MAIN"] = "main";
    ConfirmVoteView["DETAILS"] = "details";
})(ConfirmVoteView || (ConfirmVoteView = {}));


/***/ }),

/***/ 96612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Layout = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-930753e4-0"
})`
  align-items: start;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: minmax(0, 1fr);

  ${({ theme  })=>theme.mediaQueries.lg} {
    grid-template-columns: 1fr 332px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 98341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* binding */ ChoiceColumn),
/* harmony export */   "W2": () => (/* binding */ VotingPowerColumn),
/* harmony export */   "W6": () => (/* binding */ AddressColumn),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const AddressColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).attrs({
    alignItems: "center"
}).withConfig({
    componentId: "sc-6b2d99e6-0"
})`
  grid-area: address;
`;
const ChoiceColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6b2d99e6-1"
})`
  grid-area: choice;
  overflow: hidden;
`;
const VotingPowerColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6b2d99e6-2"
})`
  justify-self: end;
  grid-area: vote;
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6b2d99e6-3"
})`
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  grid-gap: 8px;
  grid-template-areas:
    'address address address'
    'choice choice vote';
  grid-template-columns: 1fr 1fr 120px;
  padding: 8px 16px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-areas: 'address choice vote';
    padding: 16px 24px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20201);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55834);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36957);
/* harmony import */ var _TextEllipsis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68920);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98341);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TextEllipsis__WEBPACK_IMPORTED_MODULE_4__, _Row__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_TextEllipsis__WEBPACK_IMPORTED_MODULE_4__, _Row__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const VoteRow = ({ vote , isVoter  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const hasVotingPower = !!vote.metadata?.votingPower;
    const votingPower = hasVotingPower ? parseFloat(vote.metadata.votingPower).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3
    }) : "--";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Row__WEBPACK_IMPORTED_MODULE_5__/* .AddressColumn */ .W6, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            href: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getBlockExploreLink */ .C)(vote.voter, "address"),
                            children: (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(vote.voter)
                        }),
                        isVoter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            variant: "success",
                            outline: true,
                            ml: "8px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    mr: "4px"
                                }),
                                " ",
                                t("Voted")
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Row__WEBPACK_IMPORTED_MODULE_5__/* .ChoiceColumn */ .A0, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextEllipsis__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: vote.proposal.choices[vote.choice - 1],
                    children: vote.proposal.choices[vote.choice - 1]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Row__WEBPACK_IMPORTED_MODULE_5__/* .VotingPowerColumn */ .W2, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: "end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            title: vote.metadata.votingPower,
                            children: votingPower
                        }),
                        hasVotingPower && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            href: `${_config__WEBPACK_IMPORTED_MODULE_3__/* .IPFS_GATEWAY */ .Gs}/${vote.id}`
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoteRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23992);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4354);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Row = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3b23a182-0"
})`
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  padding: 16px 24px;
`;
const StyledSkeleton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3b23a182-1"
})`
  flex: 1;
`;
const VotesLoading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(10).map((index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        height: "21px",
                        mr: "32px",
                        width: "100px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSkeleton, {
                        height: "21px",
                        mr: "32px",
                        width: "100%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSkeleton, {
                        height: "21px",
                        width: "100%"
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VotesLoading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ProposalStateTag),
/* harmony export */   "g": () => (/* binding */ ProposalTypeTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32317);
/* harmony import */ var state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const { ClosedTag , CommunityTag , CoreTag , SoonTag , VoteNowTag  } = _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* .Farm.Tags */ .l.Tags;
const ProposalStateTag = ({ proposalState , ...props })=>{
    if (proposalState === state_types__WEBPACK_IMPORTED_MODULE_1__/* .ProposalState.ACTIVE */ .r7.ACTIVE) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VoteNowTag, {
            ...props
        });
    }
    if (proposalState === state_types__WEBPACK_IMPORTED_MODULE_1__/* .ProposalState.PENDING */ .r7.PENDING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SoonTag, {
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClosedTag, {
        ...props
    });
};
const ProposalTypeTag = ({ isCoreProposal , ...props })=>{
    if (isCoreProposal) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoreTag, {
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CommunityTag, {
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);


const TextEllipsis = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-aef14575-0"
})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEllipsis);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 49942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zn": () => (/* binding */ calculateVoteResults),
  "JY": () => (/* binding */ filterProposalsByState),
  "LJ": () => (/* binding */ filterProposalsByType),
  "Z$": () => (/* binding */ getTotalFromVotes),
  "u$": () => (/* binding */ getVotingPower),
  "md": () => (/* binding */ isCoreProposal)
});

// UNUSED EXPORTS: VOTING_POWER_BLOCK, generateMetaData, generatePayloadData, getVotingPowerByCakeStrategy, sendSnapshotData

// EXTERNAL MODULE: external "@ethersproject/providers"
var providers_ = __webpack_require__(90399);
// EXTERNAL MODULE: ../../packages/tokens/src/index.ts + 6 modules
var src = __webpack_require__(72502);
// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(34215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
// EXTERNAL MODULE: ./src/config/abi/cakeVaultV2.json
var cakeVaultV2 = __webpack_require__(93293);
// EXTERNAL MODULE: ./src/config/constants/endpoints.ts
var endpoints = __webpack_require__(10494);
// EXTERNAL MODULE: external "lodash/fromPairs"
var fromPairs_ = __webpack_require__(57626);
// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(98492);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);
// EXTERNAL MODULE: ./src/state/types.ts
var types = __webpack_require__(93638);
// EXTERNAL MODULE: ./src/utils/addressHelpers.ts
var addressHelpers = __webpack_require__(70627);
// EXTERNAL MODULE: ./src/utils/multicall.ts
var multicall = __webpack_require__(25152);
// EXTERNAL MODULE: ./src/views/Pools/helpers.tsx
var helpers = __webpack_require__(9681);
// EXTERNAL MODULE: ./src/views/Voting/config.ts
var config = __webpack_require__(36957);
;// CONCATENATED MODULE: ./src/views/Voting/getScores.ts
async function getScores_getScores(space, strategies, network, addresses, snapshot = "latest", scoreApiUrl = "https://score.snapshot.org/api/scores") {
    try {
        const params = {
            space,
            network,
            snapshot,
            strategies,
            addresses
        };
        const res = await fetch(scoreApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                params
            })
        });
        const obj = await res.json();
        return obj.result.scores;
    } catch (e) {
        return Promise.reject(e);
    }
}

;// CONCATENATED MODULE: ./src/views/Voting/strategies.ts
const votePowerAddress = {
    v0: "0xc0FeBE244cE1ea66d27D23012B3D616432433F42",
    v1: "0x67Dfbb197602FDB9A9D305cC7A43b95fB63a0A56"
};
const cakeBalanceStrategy = (version)=>({
        name: "contract-call",
        params: {
            address: votePowerAddress[version],
            decimals: 18,
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_user",
                        type: "address"
                    }, 
                ],
                name: "getCakeBalance",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    });
const cakeVaultBalanceStrategy = (version)=>({
        name: "contract-call",
        params: {
            address: votePowerAddress[version],
            decimals: 18,
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_user",
                        type: "address"
                    }, 
                ],
                name: "getCakeVaultBalance",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    });
const ifoPoolBalanceStrategy = {
    name: "contract-call",
    params: {
        address: votePowerAddress.v0,
        decimals: 18,
        methodABI: {
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address"
                }, 
            ],
            name: "getIFOPoolBalancee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        }
    }
};
const cakePoolBalanceStrategy = (version)=>({
        name: "contract-call",
        params: {
            address: votePowerAddress[version],
            decimals: 18,
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_user",
                        type: "address"
                    }, 
                ],
                name: "getCakePoolBalance",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    });
const cakeBnbLpBalanceStrategy = (version)=>({
        name: "contract-call",
        params: {
            address: votePowerAddress[version],
            decimals: 18,
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_user",
                        type: "address"
                    }, 
                ],
                name: "getCakeBnbLpBalance",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    });
function createPoolsBalanceStrategy(poolAddress, version) {
    return {
        name: "contract-call",
        params: {
            address: votePowerAddress[version],
            decimals: 18,
            args: [
                "%{address}",
                poolAddress
            ],
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_user",
                        type: "address"
                    },
                    {
                        internalType: "address[]",
                        name: "_pools",
                        type: "address[]"
                    }, 
                ],
                name: "getPoolsBalance",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    };
}
function createTotalStrategy(poolAddress, version) {
    return {
        name: "contract-call",
        params: {
            address: votePowerAddress[version],
            decimals: 18,
            args: [
                "%{address}",
                poolAddress
            ],
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "_user",
                        type: "address"
                    },
                    {
                        internalType: "address[]",
                        name: "_pools",
                        type: "address[]"
                    }, 
                ],
                name: "getVotingPower",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    };
}
function lockedCakeUser(cakeVaultAddress, outputName) {
    return {
        name: "contract-call",
        params: {
            address: cakeVaultAddress,
            decimals: 0,
            output: outputName,
            args: [
                "%{address}"
            ],
            methodABI: {
                inputs: [
                    {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, 
                ],
                name: "userInfo",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "shares",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "lastDepositedTime",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "cakeAtLastUserAction",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "lastUserActionTime",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "lockStartTime",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "lockEndTime",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "userBoostedShare",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "locked",
                        type: "bool"
                    },
                    {
                        internalType: "uint256",
                        name: "lockedAmount",
                        type: "uint256"
                    }, 
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    };
}
function lockedCakeShare(cakeVaultAddress) {
    return {
        name: "contract-call",
        params: {
            address: cakeVaultAddress,
            decimals: 0,
            methodABI: {
                inputs: [],
                name: "getPricePerFullShare",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }
                ],
                stateMutability: "view",
                type: "function"
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/views/Voting/helpers.ts














const isCoreProposal = (proposal)=>{
    return config/* ADMINS.includes */.F_.includes(proposal.author.toLowerCase());
};
const filterProposalsByType = (proposals, proposalType)=>{
    if (proposals) {
        switch(proposalType){
            case types/* ProposalType.COMMUNITY */.nK.COMMUNITY:
                return proposals.filter((proposal)=>!isCoreProposal(proposal));
            case types/* ProposalType.CORE */.nK.CORE:
                return proposals.filter((proposal)=>isCoreProposal(proposal));
            case types/* ProposalType.ALL */.nK.ALL:
            default:
                return proposals;
        }
    } else {
        return [];
    }
};
const filterProposalsByState = (proposals, state)=>{
    return proposals.filter((proposal)=>proposal.state === state);
};
const STRATEGIES = [
    {
        name: "cake",
        params: {
            symbol: "CAKE",
            address: src/* bscTokens.cake.address */.ds.cake.address,
            decimals: 18,
            max: 300
        }
    }, 
];
const NETWORK = "56";
/**
 * Generates metadata required by snapshot to validate payload
 */ const generateMetaData = ()=>{
    return {
        plugins: {},
        network: 56,
        strategies: STRATEGIES
    };
};
/**
 * Returns data that is required on all snapshot payloads
 */ const generatePayloadData = ()=>{
    return {
        version: SNAPSHOT_VERSION,
        timestamp: (Date.now() / 1e3).toFixed(),
        space: PANCAKE_SPACE
    };
};
/**
 * General function to send commands to the snapshot api
 */ const sendSnapshotData = async (message)=>{
    const response = await fetch(SNAPSHOT_HUB_API, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error_description);
    }
    const data = await response.json();
    return data;
};
const VOTING_POWER_BLOCK = {
    v0: 16300686,
    v1: 17137653
};
const nodeRealProvider = new providers_.JsonRpcProvider("https://bsc-mainnet.nodereal.io/v1/5a516406afa140ffa546ee10af7c9b24", 56);
const getVotingPower = async (account, poolAddresses, blockNumber)=>{
    if (blockNumber && (blockNumber >= VOTING_POWER_BLOCK.v0 || blockNumber >= VOTING_POWER_BLOCK.v1)) {
        const cakeVaultAddress = (0,addressHelpers/* getCakeVaultAddress */.O9)();
        const version = blockNumber >= VOTING_POWER_BLOCK.v1 ? "v1" : "v0";
        const [pricePerShare, { shares , lockEndTime , userBoostedShare  }] = await (0,multicall/* multicallv2 */.v)({
            abi: cakeVaultV2,
            provider: nodeRealProvider,
            calls: [
                {
                    address: cakeVaultAddress,
                    name: "getPricePerFullShare"
                },
                {
                    address: cakeVaultAddress,
                    params: [
                        account
                    ],
                    name: "userInfo"
                }, 
            ],
            options: {
                blockTag: blockNumber
            }
        });
        const [cakeBalance, cakeBnbLpBalance, cakePoolBalance, cakeVaultBalance, poolsBalance, total, ifoPoolBalance] = await getScores_getScores(config/* PANCAKE_SPACE */.Q8, [
            cakeBalanceStrategy(version),
            cakeBnbLpBalanceStrategy(version),
            cakePoolBalanceStrategy(version),
            cakeVaultBalanceStrategy(version),
            createPoolsBalanceStrategy(poolAddresses, version),
            createTotalStrategy(poolAddresses, version),
            ifoPoolBalanceStrategy, 
        ], NETWORK, [
            account
        ], blockNumber);
        const lockedCakeBalance = (0,helpers/* convertSharesToCake */.ur)(new (external_bignumber_js_default())(shares.toString()), new (external_bignumber_js_default())(pricePerShare.toString()), 18, 3, new (external_bignumber_js_default())(userBoostedShare.toString()))?.cakeAsNumberBalance;
        const versionOne = version === "v0" ? {
            ifoPoolBalance: ifoPoolBalance[account] ? ifoPoolBalance[account] : 0
        } : {};
        return {
            ...versionOne,
            voter: account,
            total: total[account] ? total[account] : 0,
            poolsBalance: poolsBalance[account] ? poolsBalance[account] : 0,
            cakeBalance: cakeBalance[account] ? cakeBalance[account] : 0,
            cakePoolBalance: cakePoolBalance[account] ? cakePoolBalance[account] : 0,
            cakeBnbLpBalance: cakeBnbLpBalance[account] ? cakeBnbLpBalance[account] : 0,
            cakeVaultBalance: cakeVaultBalance[account] ? cakeVaultBalance[account] : 0,
            lockedCakeBalance: Number.isFinite(lockedCakeBalance) ? lockedCakeBalance : 0,
            lockedEndTime: lockEndTime ? +lockEndTime.toString() : 0
        };
    }
    const [total1] = await getScores_getScores(config/* PANCAKE_SPACE */.Q8, STRATEGIES, NETWORK, [
        account
    ], blockNumber);
    return {
        total: total1[account] ? total1[account] : 0,
        voter: account
    };
};
const calculateVoteResults = (votes)=>{
    if (votes) {
        const result = groupBy_default()(votes, (vote)=>vote.proposal.choices[vote.choice - 1]);
        return result;
    }
    return {};
};
const getTotalFromVotes = (votes)=>{
    if (votes) {
        return votes.reduce((accum, vote)=>{
            let power = parseFloat(vote.metadata?.votingPower);
            if (!power) {
                power = 0;
            }
            return accum + power;
        }, 0);
    }
    return 0;
};
/**
 * Get voting power by a list of voters, only total
 */ async function getVotingPowerByCakeStrategy(voters, blockNumber) {
    const strategyResponse = await getScores(PANCAKE_SPACE, STRATEGIES, NETWORK, voters, blockNumber);
    const result = fromPairs(voters.map((voter)=>{
        const defaultTotal = strategyResponse.reduce((total, scoreList)=>total + (scoreList[voter] ? scoreList[voter] : 0), 0);
        return [
            voter,
            defaultTotal
        ];
    }));
    return result;
}


/***/ }),

/***/ 93860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79847);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70627);
/* harmony import */ var utils_calls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72179);
/* harmony import */ var utils_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11536);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, swr_immutable__WEBPACK_IMPORTED_MODULE_3__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, swr_immutable__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useGetVotingPower = (block, isActive = true)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const { data , status , error  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_3__["default"])(account && isActive ? [
        account,
        block,
        "votingPower"
    ] : null, async ()=>{
        const blockNumber = block || await utils_providers__WEBPACK_IMPORTED_MODULE_6__/* .bscRpcProvider.getBlockNumber */ .v.getBlockNumber();
        const eligiblePools = await (0,utils_calls__WEBPACK_IMPORTED_MODULE_5__/* .getActivePools */ .yp)(blockNumber);
        const poolAddresses = eligiblePools.map(({ contractAddress  })=>(0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_4__/* .getAddress */ .Kn)(contractAddress, _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC));
        const { cakeBalance , cakeBnbLpBalance , cakePoolBalance , total , poolsBalance , cakeVaultBalance , ifoPoolBalance , lockedCakeBalance , lockedEndTime ,  } = await (0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getVotingPower */ .u$)(account, poolAddresses, blockNumber);
        return {
            cakeBalance,
            cakeBnbLpBalance,
            cakePoolBalance,
            poolsBalance,
            cakeVaultBalance,
            ifoPoolBalance,
            total,
            lockedCakeBalance,
            lockedEndTime
        };
    });
    if (error) console.error(error);
    return {
        ...data,
        isLoading: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched,
        isError: status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Failed */ .iF.Failed
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetVotingPower);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-df4f0a61-0"
})`
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
CardBody.defaultProps = {
    p: "24px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);


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

/***/ 59045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Progress_Progress)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Progress/StyledProgress.tsx + 1 modules
var StyledProgress = __webpack_require__(60609);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/ProgressBunnyWrapper.tsx

const ProgressBunnyWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a698ef92-0"
})`
  display: flex;
  z-index: 2;
  top: -65%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: left 200ms ease-out;
`;
/* harmony default export */ const Progress_ProgressBunnyWrapper = (ProgressBunnyWrapper);

// EXTERNAL MODULE: ../../packages/uikit/src/components/Svg/Svg.tsx
var Svg = __webpack_require__(44259);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Svg/Icons/ProgressBunny.tsx



const Icon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Svg/* default */.Z, {
        viewBox: "0 0 34 38",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "8.83594",
                width: "5.30132",
                height: "17.3191",
                rx: "2.65066",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "19.4385",
                width: "5.30132",
                height: "17.3191",
                rx: "2.65066",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "12.3696",
                cy: "19.9172",
                rx: "1.76711",
                ry: "2.59786",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "21.2056",
                cy: "19.9172",
                rx: "1.76711",
                ry: "2.59786",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const ProgressBunny = (Icon);

// EXTERNAL MODULE: ../../packages/uikit/src/components/Progress/types.ts
var types = __webpack_require__(78649);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/Progress.tsx






const stepGuard = (step)=>{
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
const Progress = ({ variant =types/* variants.ROUND */.o.ROUND , scale =types/* scales.MD */.Q.MD , primaryStep =0 , secondaryStep =null , showProgressBunny =false , useDark =true , children ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledProgress/* default */.Z, {
        $useDark: useDark,
        variant: variant,
        scale: scale,
        children: children || /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                showProgressBunny && /*#__PURE__*/ jsx_runtime_.jsx(Progress_ProgressBunnyWrapper, {
                    style: {
                        left: `${stepGuard(primaryStep)}%`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProgressBunny, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledProgress/* Bar */.$, {
                    $useDark: useDark,
                    primary: true,
                    style: {
                        width: `${stepGuard(primaryStep)}%`
                    }
                }),
                secondaryStep ? /*#__PURE__*/ jsx_runtime_.jsx(StyledProgress/* Bar */.$, {
                    $useDark: useDark,
                    style: {
                        width: `${stepGuard(secondaryStep)}%`
                    }
                }) : null
            ]
        })
    });
};
/* harmony default export */ const Progress_Progress = (Progress);


/***/ }),

/***/ 60609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Bar),
  "Z": () => (/* binding */ Progress_StyledProgress)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
// EXTERNAL MODULE: ../../packages/uikit/src/theme/colors.ts
var colors = __webpack_require__(84859);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Progress/types.ts
var types = __webpack_require__(78649);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/themes.ts

const styleVariants = {
    [types/* variants.ROUND */.o.ROUND]: {
        borderRadius: "32px"
    },
    [types/* variants.FLAT */.o.FLAT]: {
        borderRadius: 0
    }
};
const styleScales = {
    [types/* scales.MD */.Q.MD]: {
        height: "16px"
    },
    [types/* scales.SM */.Q.SM]: {
        height: "8px"
    }
};
/* harmony default export */ const themes = ((/* unused pure expression or super */ null && (styleVariants)));

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Progress/StyledProgress.tsx





const Bar = external_styled_components_default().div.withConfig({
    componentId: "sc-347a4242-0"
})`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme , $useDark , primary , $background  })=>{
    if ($background) return $background;
    if ($useDark) return primary ? theme.colors.secondary : `${theme.colors.secondary80}`;
    return primary ? colors/* lightColors.secondary */.C.secondary : `${colors/* lightColors.secondary80 */.C.secondary80}`;
}};
  height: 100%;
  transition: width 200ms ease;
`;
Bar.defaultProps = {
    primary: false
};
const StyledProgress = external_styled_components_default().div.withConfig({
    componentId: "sc-347a4242-1"
})`
  position: relative;
  background-color: ${({ theme , $useDark  })=>$useDark ? theme.colors.input : colors/* lightColors.input */.C.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  overflow: hidden;

  ${Bar} {
    border-top-left-radius: ${({ variant  })=>variant === types/* variants.FLAT */.o.FLAT ? "0" : "32px"};
    border-bottom-left-radius: ${({ variant  })=>variant === types/* variants.FLAT */.o.FLAT ? "0" : "32px"};
  }

  ${(0,external_styled_system_.variant)({
    variants: styleVariants
})}
  ${(0,external_styled_system_.variant)({
    prop: "scale",
    variants: styleScales
})}
  ${external_styled_system_.space}
`;
/* harmony default export */ const Progress_StyledProgress = (StyledProgress);


/***/ }),

/***/ 78649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ scales),
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
const variants = {
    ROUND: "round",
    FLAT: "flat"
};
const scales = {
    MD: "md",
    SM: "sm"
};


/***/ }),

/***/ 25306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Radio_Radio)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Radio/types.ts
const scales = {
    SM: "sm",
    MD: "md"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Radio/Radio.tsx



const getScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
const getCheckedScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "12px";
        case scales.MD:
        default:
            return "20px";
    }
};
const Radio = external_styled_components_default().input.attrs({
    type: "radio"
}).withConfig({
    componentId: "sc-407ed64c-0"
})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 50%;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};

  &:after {
    border-radius: 50%;
    content: "";
    height: ${getCheckedScale};
    left: 6px;
    position: absolute;
    top: 6px;
    width: ${getCheckedScale};
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:checked {
    background-color: ${({ theme  })=>theme.colors.success};
    &:after {
      background-color: ${({ theme  })=>theme.radio.handleBackground};
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${external_styled_system_.space}
`;
Radio.defaultProps = {
    scale: scales.MD,
    m: 0
};
/* harmony default export */ const Radio_Radio = (Radio);


/***/ }),

/***/ 20201:
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
            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
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

/***/ 67854:
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
        viewBox: "0 0 198 199",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z",
                fill: "#633001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z",
                fill: "#FEDC90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "eye",
                d: "M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z",
                fill: "#633001"
            })
        ]
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

/***/ 7248:
/***/ ((module) => {

module.exports = require("@snapshot-labs/snapshot.js");

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

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 13702:
/***/ ((module) => {

module.exports = require("react-markdown");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

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

/***/ 78344:
/***/ ((module) => {

module.exports = require("remark-gfm");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,3430,4866,7379,4512,8393,1436,8015,9460,9860,5639,4303,9480,3424,2317], () => (__webpack_exec__(71652)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[id].js.map