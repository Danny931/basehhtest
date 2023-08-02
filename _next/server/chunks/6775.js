"use strict";
exports.id = 6775;
exports.ids = [6775];
exports.modules = {

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


/***/ })

};
;
//# sourceMappingURL=6775.js.map