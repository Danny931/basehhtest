"use strict";
exports.id = 6737;
exports.ids = [6737];
exports.modules = {

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

/***/ 36806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ pancakeBunniesAddress),
/* harmony export */   "V": () => (/* binding */ nftsBaseUrl)
/* harmony export */ });
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70627);

const nftsBaseUrl = "/nfts";
const pancakeBunniesAddress = (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_0__/* .getPancakeBunniesAddress */ .GI)();


/***/ })

};
;
//# sourceMappingURL=6737.js.map