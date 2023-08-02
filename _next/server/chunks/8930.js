"use strict";
exports.id = 8930;
exports.ids = [8930,6775,7013,5306];
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


/***/ }),

/***/ 46301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36806);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var config_constants_nftsCollections_delist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27801);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_styles__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_shared_styles__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// Initial stage when user wants to edit already listed NFT (i.e. adjust price or remove from sale)
const EditStage = ({ nftToSell , lowestPrice , continueToAdjustPriceStage , continueToRemoveFromMarketStage ,  })=>{
    const isDelist = Boolean(config_constants_nftsCollections_delist__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z[nftToSell?.collectionAddress]);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const itemPageUrlId = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(nftToSell.collectionAddress) === views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_2__/* .pancakeBunniesAddress */ .J ? nftToSell.attributes[0].value : nftToSell.tokenId;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                p: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_5__/* .RoundedImage */ ._v, {
                        src: nftToSell.image.thumbnail,
                        height: 68,
                        width: 68,
                        mr: "8px"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        flex: "1",
                        gridTemplateColumns: "1fr 1fr",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                bold: true,
                                children: nftToSell.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                textAlign: "right",
                                children: nftToSell?.collectionName
                            }),
                            lowestPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        small: true,
                                        color: "textSubtle",
                                        children: t("Lowest price")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                width: 16,
                                                height: 16,
                                                mr: "4px"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                small: true,
                                                children: lowestPrice
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Your price")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                alignItems: "center",
                                justifyContent: "flex-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        width: 16,
                                        height: 16,
                                        mr: "4px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        small: true,
                                        children: nftToSell?.marketData?.currentAskPrice
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                px: "16px",
                mt: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        flex: "2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            small: true,
                            color: "textSubtle",
                            children: t("Token ID: %id%", {
                                id: nftToSell.tokenId
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        flex: "3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                p: "0px",
                                height: "16px",
                                external: true,
                                variant: "text",
                                href: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_2__/* .nftsBaseUrl */ .V}/collections/${nftToSell.collectionAddress}/${itemPageUrlId}`,
                                children: t("View Item")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_5__/* .HorizontalDivider */ .EL, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                p: "0px",
                                height: "16px",
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getBscScanLinkForNft */ .z)(nftToSell.collectionAddress, nftToSell.tokenId),
                                children: "BscScan"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .iz, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                flexDirection: "column",
                px: "16px",
                pb: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        disabled: isDelist,
                        mb: "8px",
                        onClick: continueToAdjustPriceStage,
                        children: t("Adjust Sale Price")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "danger",
                        onClick: continueToRemoveFromMarketStage,
                        children: t("Remove from Market")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_styles__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_shared_styles__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const RemoveStage = ({ continueToNextStage  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                p: "16px",
                maxWidth: "360px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fontSize: "24px",
                        bold: true,
                        children: t("Remove from Market")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        mt: "24px",
                        color: "textSubtle",
                        children: t("Removing this NFT from the marketplace will return it to your wallet.")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        mt: "16px",
                        color: "textSubtle",
                        children: t("Continue?")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_2__/* .Divider */ .iz, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                flexDirection: "column",
                px: "16px",
                pb: "16px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    mb: "8px",
                    onClick: continueToNextStage,
                    children: t("Confirm")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36806);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9032);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46775);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_4__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__, _shared_styles__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_4__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__, _shared_styles__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// Initial stage when user wants to put their NFT for sale or transfer to another wallet
const SellStage = ({ nftToSell , lowestPrice , continueToNextStage , continueToTransferStage , onSuccessEditProfile ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { hasProfile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useProfile */ .Un)();
    const itemPageUrlId = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(nftToSell.collectionAddress) === views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_2__/* .pancakeBunniesAddress */ .J ? nftToSell.attributes[0].value : nftToSell.tokenId;
    const [onEditProfileModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        onSuccess: onSuccessEditProfile
    }), false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                p: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_6__/* .RoundedImage */ ._v, {
                        src: nftToSell.image.thumbnail,
                        height: 68,
                        width: 68,
                        mr: "8px"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        flex: "1",
                        gridTemplateColumns: "1fr 1fr",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                bold: true,
                                children: nftToSell.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                textAlign: "right",
                                children: nftToSell?.collectionName
                            }),
                            lowestPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        small: true,
                                        color: "textSubtle",
                                        children: t("Lowest price")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                width: 16,
                                                height: 16,
                                                mr: "4px"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                small: true,
                                                children: lowestPrice.toLocaleString(undefined, {
                                                    minimumFractionDigits: 3,
                                                    maximumFractionDigits: 3
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                px: "16px",
                mt: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        flex: "2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            small: true,
                            color: "textSubtle",
                            children: t("Token ID: %id%", {
                                id: nftToSell.tokenId
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        flex: "3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                                p: "0px",
                                height: "16px",
                                external: true,
                                variant: "text",
                                href: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_2__/* .nftsBaseUrl */ .V}/collections/${nftToSell.collectionAddress}/${itemPageUrlId}`,
                                children: t("View Item")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_6__/* .HorizontalDivider */ .EL, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                p: "0px",
                                height: "16px",
                                href: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getBscScanLinkForNft */ .z)(nftToSell.collectionAddress, nftToSell.tokenId),
                                children: "BscScan"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_6__/* .Divider */ .iz, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                flexDirection: "column",
                px: "16px",
                pb: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        mb: "8px",
                        onClick: continueToNextStage,
                        children: t("Sell")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        mb: "8px",
                        variant: "secondary",
                        onClick: continueToTransferStage,
                        children: t("Transfer")
                    }),
                    hasProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        variant: "secondary",
                        onClick: onEditProfileModal,
                        children: t("Set as Profile Pic")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24674);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85306);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37926);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36695);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93304);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20237);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__, _shared_styles__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__, _shared_styles__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MIN_PRICE = 0.005;
const MAX_PRICE = 10000;
const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
;
// Stage where user puts price for NFT they're about to put on sale
// Also shown when user wants to adjust the price of already listed NFT
const SetPriceStage = ({ nftToSell , variant , lowestPrice , currentPrice , price , setPrice , continueToNextStage ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const adjustedPriceIsTheSame = variant === "adjust" && parseFloat(currentPrice) === parseFloat(price);
    const priceIsValid = !price || Number.isNaN(parseFloat(price)) || parseFloat(price) <= 0;
    const { creatorFee ="" , tradingFee =""  } = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetCollection */ .YD)(nftToSell.collectionAddress) || {};
    const creatorFeeAsNumber = parseFloat(creatorFee);
    const tradingFeeAsNumber = parseFloat(tradingFee);
    const bnbPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__/* .useBNBBusdPrice */ .Hf)();
    const priceAsFloat = parseFloat(price);
    const priceInUsd = (0,utils_prices__WEBPACK_IMPORTED_MODULE_8__/* .multiplyPriceByAmount */ .a)(bnbPrice, priceAsFloat);
    const priceIsOutOfRange = priceAsFloat > MAX_PRICE || priceAsFloat < MIN_PRICE;
    const enforcer = (nextUserInput)=>{
        if (nextUserInput === "" || inputRegex.test((0,utils__WEBPACK_IMPORTED_MODULE_2__/* .escapeRegExp */ .hr)(nextUserInput))) {
            setPrice(nextUserInput);
        }
    };
    const { tooltip , tooltipVisible , targetRef  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: t("When selling NFTs from this collection, a portion of the BNB paid will be diverted before reaching the seller:")
            }),
            creatorFeeAsNumber > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: t("%percentage%% royalties to the collection owner", {
                    percentage: creatorFee
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: t("%percentage%% trading fee will be used to buy & burn CAKE", {
                    percentage: tradingFee
                })
            })
        ]
    }), {
        placement: "auto"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        inputRef
    ]);
    const getButtonText = ()=>{
        if (variant === "adjust") {
            if (adjustedPriceIsTheSame || priceIsValid) {
                return t("Input New Sale Price");
            }
            return t("Confirm");
        }
        return t("Enable Listing");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                fontSize: "24px",
                bold: true,
                p: "16px",
                children: variant === "set" ? t("Set Price") : t("Adjust Sale Price")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .GreyedOutContainer */ .V0, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "secondary",
                        textTransform: "uppercase",
                        bold: true,
                        children: t("Set Price")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                flex: "1",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        width: 24,
                                        height: 24,
                                        mr: "4px"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        bold: true,
                                        children: "WBNB"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                flex: "2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RightAlignedInput */ .Bp, {
                                    scale: "sm",
                                    type: "text",
                                    pattern: "^[0-9]*[.,]?[0-9]*$",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    spellCheck: "false",
                                    inputMode: "decimal",
                                    value: price,
                                    ref: inputRef,
                                    isWarning: priceIsOutOfRange,
                                    onChange: (e)=>{
                                        enforcer(e.target.value.replace(/,/g, "."));
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        alignItems: "center",
                        height: "21px",
                        justifyContent: "flex-end",
                        children: !Number.isNaN(priceInUsd) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            color: "textSubtle",
                            children: `$${priceInUsd.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}`
                        })
                    }),
                    priceIsOutOfRange && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "failure",
                        children: t("Allowed price range is between %minPrice% and %maxPrice% WBNB", {
                            minPrice: MIN_PRICE,
                            maxPrice: MAX_PRICE
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        mt: "8px",
                        children: Number.isFinite(creatorFeeAsNumber) && Number.isFinite(tradingFeeAsNumber) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    small: true,
                                    color: "textSubtle",
                                    mr: "8px",
                                    children: t("Seller pays %percentage%% platform fee on sale", {
                                        percentage: creatorFeeAsNumber + tradingFeeAsNumber
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    ref: targetRef,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                                }),
                                tooltipVisible && tooltip
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            width: "70%"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "16px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Platform fee if sold")
                            }),
                            Number.isFinite(creatorFeeAsNumber) && Number.isFinite(tradingFeeAsNumber) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FeeAmountCell */ .tz, {
                                bnbAmount: priceAsFloat,
                                creatorFee: creatorFeeAsNumber,
                                tradingFee: tradingFeeAsNumber
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                width: 40
                            })
                        ]
                    }),
                    lowestPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "16px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Lowest price on market")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .BnbAmountCell */ .U2, {
                                bnbAmount: lowestPrice
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                gridTemplateColumns: "32px 1fr",
                p: "16px",
                maxWidth: "360px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        alignSelf: "flex-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            width: 24,
                            height: 24,
                            color: "textSubtle"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("The NFT will be removed from your wallet and put on sale at this price.")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Sales are in WBNB. You can swap WBNB to BNB 1:1 for free with PancakeSwap.")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_6__/* .Divider */ .iz, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                flexDirection: "column",
                px: "16px",
                pb: "16px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    mb: "8px",
                    onClick: continueToNextStage,
                    disabled: priceIsValid || adjustedPriceIsTheSame || priceIsOutOfRange,
                    children: getButtonText()
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetPriceStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24674);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9270);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var _shared_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20237);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, _shared_styles__WEBPACK_IMPORTED_MODULE_4__, _styles__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__, _shared_styles__WEBPACK_IMPORTED_MODULE_4__, _styles__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const TransferStage = ({ nftToSell , lowestPrice , transferAddress , setTransferAddress , isInvalidTransferAddress , continueToNextStage ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3React */ .Ge)();
    const transferAddressEqualsConnectedAddress = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(transferAddress) === (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(account);
    const getErrorText = ()=>{
        if (isInvalidTransferAddress) {
            return t("That’s not a BNB Smart Chain wallet address.");
        }
        if (transferAddressEqualsConnectedAddress) {
            return t("This address is the one that is currently connected");
        }
        return null;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                fontSize: "24px",
                bold: true,
                px: "16px",
                pt: "16px",
                children: t("Transfer to New Wallet")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                p: "16px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_4__/* .RoundedImage */ ._v, {
                        src: nftToSell.image.thumbnail,
                        height: 68,
                        width: 68,
                        mr: "8px"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        flex: "1",
                        gridTemplateColumns: "1fr 1fr",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                bold: true,
                                children: nftToSell.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                textAlign: "right",
                                children: nftToSell?.collectionName
                            }),
                            lowestPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        small: true,
                                        color: "textSubtle",
                                        children: t("Lowest price")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                width: 16,
                                                height: 16,
                                                mr: "4px"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                small: true,
                                                children: lowestPrice
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .GreyedOutContainer */ .V0, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "secondary",
                        textTransform: "uppercase",
                        bold: true,
                        children: t("Receiving address")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        scale: "sm",
                        isWarning: isInvalidTransferAddress || transferAddressEqualsConnectedAddress,
                        placeholder: t("Paste BSC address"),
                        value: transferAddress,
                        onChange: (e)=>setTransferAddress(e.target.value)
                    }),
                    isInvalidTransferAddress || transferAddressEqualsConnectedAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "failure",
                        mt: "4px",
                        children: getErrorText()
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                gridTemplateColumns: "32px 1fr",
                p: "16px",
                maxWidth: "360px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        alignSelf: "flex-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            width: 24,
                            height: 24,
                            color: "textSubtle"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        small: true,
                        color: "textSubtle",
                        children: t("This action will send your NFT to the address you have indicated above. Make sure it’s the correct")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_styles__WEBPACK_IMPORTED_MODULE_4__/* .Divider */ .iz, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                flexDirection: "column",
                px: "16px",
                pb: "16px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    mb: "8px",
                    onClick: continueToNextStage,
                    disabled: isInvalidTransferAddress || transferAddress.length === 0 || transferAddressEqualsConnectedAddress,
                    children: t("Confirm")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export modalTitles */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9270);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36576);
/* harmony import */ var hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64850);
/* harmony import */ var hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80361);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74860);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5305);
/* harmony import */ var views_Nft_market_hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35407);
/* harmony import */ var _shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15459);
/* harmony import */ var _shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66853);
/* harmony import */ var _shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24410);
/* harmony import */ var _EditStage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46301);
/* harmony import */ var _RemoveStage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46787);
/* harmony import */ var _SellStage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28860);
/* harmony import */ var _SetPriceStage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94083);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8641);
/* harmony import */ var _TransferStage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5267);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(95229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, views_Nft_market_hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_11__, _shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_12__, _shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_13__, _shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_14__, _EditStage__WEBPACK_IMPORTED_MODULE_15__, _RemoveStage__WEBPACK_IMPORTED_MODULE_16__, _SellStage__WEBPACK_IMPORTED_MODULE_17__, _SetPriceStage__WEBPACK_IMPORTED_MODULE_18__, _styles__WEBPACK_IMPORTED_MODULE_19__, _TransferStage__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, components_Toast__WEBPACK_IMPORTED_MODULE_4__, hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__, hooks_useContract__WEBPACK_IMPORTED_MODULE_7__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, views_Nft_market_hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_11__, _shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_12__, _shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_13__, _shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_14__, _EditStage__WEBPACK_IMPORTED_MODULE_15__, _RemoveStage__WEBPACK_IMPORTED_MODULE_16__, _SellStage__WEBPACK_IMPORTED_MODULE_17__, _SetPriceStage__WEBPACK_IMPORTED_MODULE_18__, _styles__WEBPACK_IMPORTED_MODULE_19__, _TransferStage__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const modalTitles = (stage, t)=>{
    switch(stage){
        // Sell flow
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SELL */ ._.SELL:
            return t("Details");
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SET_PRICE */ ._.SET_PRICE:
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.APPROVE_AND_CONFIRM_SELL */ ._.APPROVE_AND_CONFIRM_SELL:
            return t("Back");
        // Adjust price flow
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.EDIT */ ._.EDIT:
            return t("Details");
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE:
            return t("Back");
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_ADJUST_PRICE */ ._.CONFIRM_ADJUST_PRICE:
            return t("Confirm transaction");
        // Remove from market flow
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET:
            return t("Back");
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET:
            return t("Confirm transaction");
        // Transfer flow
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TRANSFER */ ._.TRANSFER:
            return t("Back");
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER:
            return t("Confirm transaction");
        // Common
        case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TX_CONFIRMED */ ._.TX_CONFIRMED:
            return t("Transaction Confirmed");
        default:
            return "";
    }
};
const getToastText = (variant, stage, t)=>{
    if (stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET) {
        return t("Your NFT has been returned to your wallet");
    }
    if (stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER) {
        return t("Your NFT has been transferred to another wallet");
    }
    if (variant === "sell") {
        return t("Your NFT has been listed for sale!");
    }
    return t("Your NFT listing has been changed.");
};
const SellModal = ({ variant , nftToSell , onDismiss , onSuccessSale , onSuccessEditProfile ,  })=>{
    const { 0: stage , 1: setStage  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(variant === "sell" ? _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SELL */ ._.SELL : _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.EDIT */ ._.EDIT);
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(variant === "sell" ? "" : nftToSell?.marketData?.currentAskPrice);
    const { 0: transferAddress , 1: setTransferAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    const { 0: confirmedTxHash , 1: setConfirmedTxHash  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { callWithMarketGasPrice  } = (0,hooks_useCallWithMarketGasPrice__WEBPACK_IMPORTED_MODULE_6__/* .useCallWithMarketGasPrice */ .r)();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* .useToast */ .p)();
    const { reader: collectionContractReader , signer: collectionContractSigner  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useErc721CollectionContract */ .HQ)(nftToSell.collectionAddress);
    const nftMarketContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__/* .useNftMarketContract */ .DU)();
    const isInvalidTransferAddress = transferAddress.length > 0 && !(0,utils__WEBPACK_IMPORTED_MODULE_10__/* .isAddress */ .UJ)(transferAddress);
    const { lowestPrice  } = (0,views_Nft_market_hooks_useGetLowestPrice__WEBPACK_IMPORTED_MODULE_11__/* .useGetLowestPriceFromNft */ .O3)(nftToSell);
    const goBack = ()=>{
        switch(stage){
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SET_PRICE */ ._.SET_PRICE:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SELL */ ._.SELL);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.APPROVE_AND_CONFIRM_SELL */ ._.APPROVE_AND_CONFIRM_SELL:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SET_PRICE */ ._.SET_PRICE);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE:
                setPrice(nftToSell?.marketData?.currentAskPrice);
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.EDIT */ ._.EDIT);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_ADJUST_PRICE */ ._.CONFIRM_ADJUST_PRICE:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.EDIT */ ._.EDIT);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TRANSFER */ ._.TRANSFER:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SELL */ ._.SELL);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TRANSFER */ ._.TRANSFER);
                break;
            default:
                break;
        }
    };
    const continueToNextStage = ()=>{
        switch(stage){
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SELL */ ._.SELL:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SET_PRICE */ ._.SET_PRICE);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SET_PRICE */ ._.SET_PRICE:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.APPROVE_AND_CONFIRM_SELL */ ._.APPROVE_AND_CONFIRM_SELL);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.EDIT */ ._.EDIT:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_ADJUST_PRICE */ ._.CONFIRM_ADJUST_PRICE);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TRANSFER */ ._.TRANSFER:
                setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER);
                break;
            default:
                break;
        }
    };
    const continueToRemoveFromMarketStage = ()=>{
        setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET);
    };
    const continueToTransferStage = ()=>{
        setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TRANSFER */ ._.TRANSFER);
    };
    const { isApproving , isApproved , isConfirming , handleApprove , handleConfirm  } = (0,hooks_useApproveConfirmTransaction__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        onRequiresApproval: async ()=>{
            try {
                const approvedForContract = await collectionContractReader.isApprovedForAll(account, nftMarketContract.address);
                return !approvedForContract;
            } catch (error) {
                return true;
            }
        },
        onApprove: ()=>{
            return callWithMarketGasPrice(collectionContractSigner, "setApprovalForAll", [
                nftMarketContract.address,
                true
            ]);
        },
        onApproveSuccess: async ({ receipt  })=>{
            toastSuccess(t("Contract approved - you can now put your NFT for sale!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
        },
        onConfirm: ()=>{
            if (stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET) {
                return callWithMarketGasPrice(nftMarketContract, "cancelAskOrder", [
                    nftToSell.collectionAddress,
                    nftToSell.tokenId, 
                ]);
            }
            if (stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER) {
                return callWithMarketGasPrice(collectionContractSigner, "safeTransferFrom(address,address,uint256)", [
                    account,
                    transferAddress,
                    nftToSell.tokenId, 
                ]);
            }
            const methodName = variant === "sell" ? "createAskOrder" : "modifyAskOrder";
            const askPrice = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.parseUnits)(price);
            return callWithMarketGasPrice(nftMarketContract, methodName, [
                nftToSell.collectionAddress,
                nftToSell.tokenId,
                askPrice, 
            ]);
        },
        onSuccess: async ({ receipt  })=>{
            toastSuccess(getToastText(variant, stage, t), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastDescriptionWithTx */ .Y, {
                txHash: receipt.transactionHash
            }));
            onSuccessSale();
            setConfirmedTxHash(receipt.transactionHash);
            setStage(_types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TX_CONFIRMED */ ._.TX_CONFIRMED);
        }
    });
    const showBackButton = _styles__WEBPACK_IMPORTED_MODULE_19__/* .stagesWithBackButton.includes */ .BF.includes(stage) && !isConfirming && !isApproving;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_19__/* .StyledModal */ .oA, {
        title: modalTitles(stage, t),
        stage: stage,
        onDismiss: onDismiss,
        onBack: showBackButton ? goBack : null,
        headerBackground: theme.colors.gradientCardHeader,
        children: [
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SELL */ ._.SELL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SellStage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                nftToSell: nftToSell,
                lowestPrice: lowestPrice,
                continueToNextStage: continueToNextStage,
                continueToTransferStage: continueToTransferStage,
                onSuccessEditProfile: onSuccessEditProfile
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.SET_PRICE */ ._.SET_PRICE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SetPriceStage__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                nftToSell: nftToSell,
                variant: "set",
                continueToNextStage: continueToNextStage,
                lowestPrice: lowestPrice,
                price: price,
                setPrice: setPrice
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.APPROVE_AND_CONFIRM_SELL */ ._.APPROVE_AND_CONFIRM_SELL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ApproveAndConfirmStage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                variant: "sell",
                isApproved: isApproved,
                isApproving: isApproving,
                isConfirming: isConfirming,
                handleApprove: handleApprove,
                handleConfirm: handleConfirm
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TX_CONFIRMED */ ._.TX_CONFIRMED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_TransactionConfirmed__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                txHash: confirmedTxHash,
                onDismiss: onDismiss
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.EDIT */ ._.EDIT && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditStage__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                nftToSell: nftToSell,
                lowestPrice: lowestPrice,
                continueToAdjustPriceStage: continueToNextStage,
                continueToRemoveFromMarketStage: continueToRemoveFromMarketStage
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SetPriceStage__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                nftToSell: nftToSell,
                variant: "adjust",
                continueToNextStage: continueToNextStage,
                currentPrice: nftToSell?.marketData?.currentAskPrice,
                lowestPrice: lowestPrice,
                price: price,
                setPrice: setPrice
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_ADJUST_PRICE */ ._.CONFIRM_ADJUST_PRICE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                isConfirming: isConfirming,
                handleConfirm: handleConfirm
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RemoveStage__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                continueToNextStage: continueToNextStage
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                isConfirming: isConfirming,
                handleConfirm: handleConfirm
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.TRANSFER */ ._.TRANSFER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransferStage__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                nftToSell: nftToSell,
                lowestPrice: lowestPrice,
                continueToNextStage: continueToNextStage,
                transferAddress: transferAddress,
                setTransferAddress: setTransferAddress,
                isInvalidTransferAddress: isInvalidTransferAddress
            }),
            stage === _types__WEBPACK_IMPORTED_MODULE_21__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ConfirmStage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                isConfirming: isConfirming,
                handleConfirm: handleConfirm
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BF": () => (/* binding */ stagesWithBackButton),
/* harmony export */   "Bp": () => (/* binding */ RightAlignedInput),
/* harmony export */   "U2": () => (/* binding */ BnbAmountCell),
/* harmony export */   "V0": () => (/* binding */ GreyedOutContainer),
/* harmony export */   "oA": () => (/* binding */ StyledModal),
/* harmony export */   "tz": () => (/* binding */ FeeAmountCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36695);
/* harmony import */ var utils_prices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37926);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const stagesWithBackButton = [
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.SET_PRICE */ ._.SET_PRICE,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.ADJUST_PRICE */ ._.ADJUST_PRICE,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.APPROVE_AND_CONFIRM_SELL */ ._.APPROVE_AND_CONFIRM_SELL,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.CONFIRM_ADJUST_PRICE */ ._.CONFIRM_ADJUST_PRICE,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.REMOVE_FROM_MARKET */ ._.REMOVE_FROM_MARKET,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.CONFIRM_REMOVE_FROM_MARKET */ ._.CONFIRM_REMOVE_FROM_MARKET,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.TRANSFER */ ._.TRANSFER,
    _types__WEBPACK_IMPORTED_MODULE_3__/* .SellingStage.CONFIRM_TRANSFER */ ._.CONFIRM_TRANSFER, 
];
const StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP).withConfig({
    componentId: "sc-dfe31e60-0"
})`
  width: 360px;
  & > div:last-child {
    padding: 0;
  }
  & h2:first-of-type {
    ${({ stage , theme  })=>stagesWithBackButton.includes(stage) ? `color: ${theme.colors.textSubtle}` : null};
  }
  & svg:first-of-type {
    ${({ stage , theme  })=>stagesWithBackButton.includes(stage) ? `fill: ${theme.colors.textSubtle}` : null};
  }
`;
const GreyedOutContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dfe31e60-1"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
  padding: 16px;
`;
const RightAlignedInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-dfe31e60-2"
})`
  text-align: right;
`;
const BnbAmountCell = ({ bnbAmount  })=>{
    const bnbBusdPrice = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_2__/* .useBNBBusdPrice */ .Hf)();
    if (!bnbAmount || bnbAmount === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            alignItems: "center",
            justifyContent: "flex-end",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    width: 16,
                    height: 16,
                    mr: "4px"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    bold: true,
                    mr: "4px",
                    children: "-"
                })
            ]
        });
    }
    const usdAmount = (0,utils_prices__WEBPACK_IMPORTED_MODULE_10__/* .multiplyPriceByAmount */ .a)(bnbBusdPrice, bnbAmount);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "flex-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                width: 16,
                height: 16,
                mr: "4px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                bold: true,
                mr: "4px",
                children: `${bnbAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3
                })}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                small: true,
                color: "textSubtle",
                textAlign: "right",
                children: `($${usdAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })})`
            })
        ]
    });
};
const FeeAmountCell = ({ bnbAmount , creatorFee , tradingFee ,  })=>{
    if (!bnbAmount || bnbAmount === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            alignItems: "center",
            justifyContent: "flex-end",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    width: 16,
                    height: 16,
                    mr: "4px"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    bold: true,
                    mr: "4px",
                    children: "-"
                })
            ]
        });
    }
    const totalFee = creatorFee + tradingFee;
    const totalFeeAsDecimal = totalFee / 100;
    const feeAmount = bnbAmount * totalFeeAsDecimal;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "flex-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                width: 16,
                height: 16,
                mr: "4px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                bold: true,
                mr: "4px",
                children: `${feeAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 6
                })}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                small: true,
                color: "textSubtle",
                textAlign: "right",
                children: [
                    "(",
                    totalFee,
                    "%)"
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ SellingStage)
/* harmony export */ });
var SellingStage;
(function(SellingStage) {
    SellingStage[SellingStage[// Sell flow
    "SELL"] = 0] = "SELL";
    SellingStage[SellingStage["SET_PRICE"] = 1] = "SET_PRICE";
    SellingStage[SellingStage["APPROVE_AND_CONFIRM_SELL"] = 2] = "APPROVE_AND_CONFIRM_SELL";
    SellingStage[SellingStage[// Adjust price flow
    "EDIT"] = 3] = "EDIT";
    SellingStage[SellingStage["ADJUST_PRICE"] = 4] = "ADJUST_PRICE";
    SellingStage[SellingStage["CONFIRM_ADJUST_PRICE"] = 5] = "CONFIRM_ADJUST_PRICE";
    SellingStage[SellingStage[// Remove from market flow
    "REMOVE_FROM_MARKET"] = 6] = "REMOVE_FROM_MARKET";
    SellingStage[SellingStage["CONFIRM_REMOVE_FROM_MARKET"] = 7] = "CONFIRM_REMOVE_FROM_MARKET";
    SellingStage[SellingStage[// Transfer flow
    "TRANSFER"] = 8] = "TRANSFER";
    SellingStage[SellingStage["CONFIRM_TRANSFER"] = 9] = "CONFIRM_TRANSFER";
    SellingStage[SellingStage[// Common
    "TX_CONFIRMED"] = 10] = "TX_CONFIRMED";
})(SellingStage || (SellingStage = {}));


/***/ }),

/***/ 15459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Buy Flow:
// Shown if user wants to pay with WBNB and contract isn't approved yet
// Sell Flow:
// Shown the first time user puts NFT for sale
const ApproveAndConfirmStage = ({ variant , isApproved , isApproving , isConfirming , handleApprove , handleConfirm ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        p: "16px",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                mb: "8px",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepIndicator */ .OR, {
                                        success: isApproved,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            fontSize: "20px",
                                            bold: true,
                                            color: "invertedContrast",
                                            children: "1"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        fontSize: "20px",
                                        color: isApproved ? "success" : "secondary",
                                        bold: true,
                                        children: isApproved ? t("Enabled") : t("Enable")
                                    })
                                ]
                            }),
                            !isApproved && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                mt: "8px",
                                maxWidth: "275px",
                                small: true,
                                color: "textSubtle",
                                children: variant === "buy" ? t("Please enable WBNB spending in your wallet") : t("Please enable your NFT to be sent to the market")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        flex: "0 0 64px",
                        width: "64px",
                        children: isApproving && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            size: 64
                        })
                    })
                ]
            }),
            !isApproved && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                variant: "secondary",
                disabled: isApproving,
                onClick: handleApprove,
                children: isApproving ? `${t("Enabling")}...` : t("Enable")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                alignItems: "center",
                mt: "8px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                alignItems: "center",
                                mt: "16px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepIndicator */ .OR, {
                                        success: !!0,
                                        disabled: !isApproved,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            fontSize: "20px",
                                            bold: true,
                                            color: !isApproved ? "textDisabled" : "invertedContrast",
                                            children: "2"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        fontSize: "20px",
                                        bold: true,
                                        color: isApproved ? "secondary" : "textDisabled",
                                        children: t("Confirm")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                small: true,
                                color: isApproved ? "textSubtle" : "textDisabled",
                                children: t("Please confirm the transaction in your wallet")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        flex: "0 0 64px",
                        width: "64px",
                        children: isConfirming && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            size: 64
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                mt: "16px",
                disabled: !isApproved || isConfirming,
                onClick: handleConfirm,
                variant: "secondary",
                children: isConfirming ? t("Confirming") : t("Confirm")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApproveAndConfirmStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43424);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Buy Flow:
// Shown in case user wants to pay with BNB
// or if user wants to pay with WBNB and it is already approved
// Sell Flow:
// Shown if user adjusts the price or removes NFT from the market
const ConfirmStage = ({ isConfirming , handleConfirm  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        p: "16px",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    fontSize: "20px",
                                    bold: true,
                                    color: "secondary",
                                    children: t("Confirm")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Please confirm the transaction in your wallet")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        flex: "0 0 64px",
                        height: "72px",
                        width: "64px",
                        children: isConfirming && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            size: 64
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                mt: "24px",
                disabled: isConfirming,
                onClick: handleConfirm,
                variant: "secondary",
                children: isConfirming ? `${t("Confirming")}...` : t("Confirm")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmStage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88800);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65342);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const TransactionConfirmed = ({ txHash , onDismiss  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                p: "16px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "150px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        width: "64px",
                        height: "64px",
                        color: "primary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        bold: true,
                        children: t("Transaction Confirmed")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        href: (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .getBlockExploreLink */ .C)(txHash, "transaction", chainId),
                        children: t("View on BscScan")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Divider */ .iz, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                px: "16px",
                pb: "16px",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    onClick: onDismiss,
                    variant: "secondary",
                    width: "100%",
                    children: t("Close")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionConfirmed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EL": () => (/* binding */ HorizontalDivider),
/* harmony export */   "OR": () => (/* binding */ StepIndicator),
/* harmony export */   "_v": () => (/* binding */ RoundedImage),
/* harmony export */   "iz": () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const RoundedImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fd207d6c-0"
})`
  border-radius: ${({ theme  })=>theme.radii.small};
  overflow: hidden;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fd207d6c-1"
})`
  margin: 16px 0;
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
`;
const HorizontalDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fd207d6c-2"
})`
  border-right: 1px solid ${({ theme  })=>theme.colors.cardBorder};
`;
const StepIndicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fd207d6c-3"
})`
  border-radius: 50%;
  background-color: ${({ theme , success , disabled  })=>{
    if (disabled) {
        return "none";
    }
    return success ? theme.colors.success : theme.colors.secondary;
}};
  border: ${({ theme , disabled  })=>disabled ? `1px solid ${theme.colors.textDisabled}` : "none"};
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export StyledModal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80423);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84281);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5305);
/* harmony import */ var _BuySellModals_shared_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20237);
/* harmony import */ var _Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9032);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__, _BuySellModals_shared_styles__WEBPACK_IMPORTED_MODULE_5__, _Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__, _BuySellModals_shared_styles__WEBPACK_IMPORTED_MODULE_5__, _Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP).withConfig({
    componentId: "sc-8e6ebc6a-0"
})`
  & > div:last-child {
    padding: 0;
  }
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8e6ebc6a-1"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
`;
const ProfileNftModal = ({ nft , onDismiss , onSuccess  })=>{
    const [onEditProfileModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Profile_components_EditProfileModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onSuccess: onSuccess
    }), false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    const itemPageUrlId = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .UJ)(nft.collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_7__/* .pancakeBunniesAddress */ .J ? nft.attributes[0].value : nft.tokenId;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModal, {
        title: t("Details"),
        onDismiss: onDismiss,
        headerBackground: theme.colors.gradientCardHeader,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            flexDirection: "column",
            maxWidth: "420px",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    p: "16px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BuySellModals_shared_styles__WEBPACK_IMPORTED_MODULE_5__/* .RoundedImage */ ._v, {
                            src: nft.image.thumbnail,
                            height: 68,
                            width: 68,
                            mr: "16px"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            flex: "1",
                            gridTemplateColumns: "1fr 1fr",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    bold: true,
                                    children: nft.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    textAlign: "right",
                                    children: nft?.collectionName
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    px: "16px",
                    mb: "16px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            flex: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                small: true,
                                color: "textSubtle",
                                children: t("Token ID: %id%", {
                                    id: nft.tokenId
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            flex: "3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                                    p: "0px",
                                    height: "16px",
                                    external: true,
                                    variant: "text",
                                    href: `${_constants__WEBPACK_IMPORTED_MODULE_7__/* .nftsBaseUrl */ .V}/collections/${nft.collectionAddress}/${itemPageUrlId}`,
                                    children: t("View Item")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BuySellModals_shared_styles__WEBPACK_IMPORTED_MODULE_5__/* .HorizontalDivider */ .EL, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    p: "0px",
                                    height: "16px",
                                    href: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getBscScanLinkForNft */ .z)(nft.collectionAddress, nft.tokenId),
                                    children: "BscScan"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TextWrapper, {
                    p: "24px 16px",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            mb: "16px",
                            children: t("You're using this NFT as your Pancake Profile picture")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            mb: "16px",
                            fontSize: "14px",
                            children: t("Removing it will suspend your profile, and you won’t be able to earn points, participate in team activities, or be eligible for new NFT drops.")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            fontSize: "14px",
                            children: t("Go to your profile page to continue.")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    flexDirection: "column",
                    py: "16px",
                    px: "16px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        onClick: onEditProfileModal,
                        width: "100%",
                        variant: "secondary",
                        children: t("Remove Profile Pic")
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileNftModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 67013:
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
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44259);




const Icon = (props)=>{
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        viewBox: "0 0 72 72",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z",
                fill: primaryColor
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                id: "mask0",
                "mask-type": "alpha",
                maskUnits: "userSpaceOnUse",
                x: "3",
                y: "3",
                width: "66",
                height: "66",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z",
                    fill: "#C4C4C4"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                mask: "url(#mask0)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z",
                        fill: primaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z",
                        fill: primaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z",
                        fill: secondaryColor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z",
                        fill: secondaryColor
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z",
                fill: secondaryColor
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;
//# sourceMappingURL=8930.js.map