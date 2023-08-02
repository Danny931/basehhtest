"use strict";
(() => {
var exports = {};
exports.id = 1455;
exports.ids = [1455,2336,8618];
exports.modules = {

/***/ 29491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94866);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var components_Loader_CircleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







var ResultStatus;
(function(ResultStatus) {
    ResultStatus[ResultStatus["NOT_VALID"] = 0] = "NOT_VALID";
    ResultStatus[ResultStatus["FOUND"] = 1] = "FOUND";
    ResultStatus[ResultStatus["NOT_FOUND"] = 2] = "NOT_FOUND";
})(ResultStatus || (ResultStatus = {}));
const SubMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-64ff24db-0"
})`
  align-items: center;
  background: ${({ theme  })=>theme.colors.input};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 0 0 ${({ theme  })=>theme.radii.default} ${({ theme  })=>theme.radii.default};
  left: 0;
  padding-bottom: 8px;
  padding-top: 16px;
  position: absolute;
  top: calc(100% - 12px);
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  width: 100%;
  z-index: 15;

  ${({ isOpen  })=>isOpen && `
    height: auto;
    opacity: 1;
    transform: scaleY(1);
  `}
`;
const AddressLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-64ff24db-1"
})`
  cursor: pointer;
  overflow-wrap: break-word;
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
`;
const initialState = {
    isFetching: false,
    resultFound: ResultStatus.NOT_VALID,
    value: ""
};
const defaultValidAddressHandler = ()=>Promise.resolve(true);
const AddressInputSelect = ({ onValidAddress =defaultValidAddressHandler , onAddressClick , ...props })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { isFetching , resultFound , value  } = state;
    const handleChange = (evt)=>{
        const { value: newValue  } = evt.target;
        setState((prevState)=>({
                ...prevState,
                value: newValue
            }));
    };
    const handleClick = ()=>{
        setState(initialState);
        onAddressClick(state.value);
    };
    // When we have a valid address fetch the data
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isValidAddress = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(value) !== false;
        const validAddressHandler = async ()=>{
            try {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: true
                    }));
                const hasResults = await onValidAddress(value);
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false,
                        resultFound: hasResults ? ResultStatus.FOUND : ResultStatus.NOT_FOUND
                    }));
            } catch  {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false
                    }));
            }
        };
        if (isValidAddress) {
            validAddressHandler();
        } else {
            setState((prevState)=>({
                    ...prevState,
                    resultFound: ResultStatus.NOT_VALID
                }));
        }
    }, [
        value,
        onValidAddress,
        setState
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        position: "relative",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                placeholder: t("Search %subject%", {
                    subject: t("Address").toLowerCase()
                }),
                value: state.value,
                onChange: handleChange,
                style: {
                    position: "relative",
                    zIndex: 16,
                    paddingRight: "40px"
                }
            }),
            isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                position: "absolute",
                top: "12px",
                right: "16px",
                style: {
                    zIndex: 17
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_CircleLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenu, {
                isOpen: resultFound !== ResultStatus.NOT_VALID,
                children: resultFound === ResultStatus.FOUND ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddressLink, {
                    onClick: handleClick,
                    children: state.value
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    px: "16px",
                    fontWeight: "bold",
                    children: t("No results found.")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressInputSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CircleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const rotate = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledSVG = styled_components__WEBPACK_IMPORTED_MODULE_1___default().svg.withConfig({
    componentId: "sc-fa227f0-0"
})`
  animation: 2s ${rotate} linear infinite;
  height: ${({ size  })=>size};
  width: ${({ size  })=>size};
  path {
    stroke: ${({ stroke , theme  })=>stroke ?? theme.colors.primary};
  }
`;
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */ function CircleLoader({ size ="16px" , stroke , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSVG, {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        size: size,
        stroke: stroke,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}


/***/ }),

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

/***/ 9655:
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
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46737);
/* harmony import */ var views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// eslint-disable-next-line camelcase



const CollectionPage = ({ fallback ={}  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {
        value: {
            fallback
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
const getStaticPaths = async ()=>{
    return {
        fallback: true,
        paths: []
    };
};
const getStaticProps = async ({ params  })=>{
    const { collectionAddress  } = params;
    if (typeof collectionAddress !== "string") {
        return {
            notFound: true
        };
    }
    try {
        const collectionData = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getCollection */ ._N)(collectionAddress);
        if (collectionData) {
            return {
                props: {
                    fallback: {
                        [(0,swr__WEBPACK_IMPORTED_MODULE_1__.unstable_serialize)([
                            "nftMarket",
                            "collections",
                            collectionAddress.toLowerCase()
                        ])]: {
                            ...collectionData
                        }
                    }
                },
                revalidate: 60 * 60 * 6
            };
        }
        return {
            notFound: true,
            revalidate: 60
        };
    } catch (error) {
        return {
            notFound: true,
            revalidate: 60
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60760);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_3__]);
([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CollectionPageRouter = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionPageRouter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64548);
/* harmony import */ var _components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42202);
/* harmony import */ var _components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36142);
/* harmony import */ var _components_StatBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75102);
/* harmony import */ var _components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81729);
/* harmony import */ var _components_BannerHeader_AvatarImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82253);
/* harmony import */ var _components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12668);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36806);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11931);
/* harmony import */ var _LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7187);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__, _components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__, _components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__, _components_StatBox__WEBPACK_IMPORTED_MODULE_7__, _components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__, _components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__, _TopBar__WEBPACK_IMPORTED_MODULE_12__, _LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__]);
([components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__, _components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__, _components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__, _components_StatBox__WEBPACK_IMPORTED_MODULE_7__, _components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__, _components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__, _TopBar__WEBPACK_IMPORTED_MODULE_12__, _LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Header = ({ collection  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const collectionAddress = router.query.collectionAddress;
    const { totalSupply , numberTokensListed , totalVolumeBNB , banner , avatar  } = collection;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const volume = totalVolumeBNB ? parseFloat(totalVolumeBNB).toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }) : "0";
    const itemsConfig = [
        {
            label: t("Items"),
            href: `${_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .V}/collections/${collectionAddress}`
        },
        {
            label: t("Traits"),
            href: `${_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .V}/collections/${collectionAddress}#traits`
        },
        {
            label: t("Activity"),
            href: `${_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .V}/collections/${collectionAddress}#activity`
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopBar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        bannerImage: banner.large,
                        avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BannerHeader_AvatarImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            src: avatar
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        address: collection.address,
                        title: collection.name,
                        description: collection.description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            children: t(collection.description)
                        }) : null,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* .StatBoxItem */ .B, {
                                    title: t("Items"),
                                    stat: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(Number(totalSupply), 0, 0)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* .StatBoxItem */ .B, {
                                    title: t("Items listed"),
                                    stat: numberTokensListed ? (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(Number(numberTokensListed), 0, 0) : "0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    collectionAddress: collection.address
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* .StatBoxItem */ .B, {
                                    title: t("Vol. (%symbol%)", {
                                        symbol: "BNB"
                                    }),
                                    stat: volume
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    items: itemsConfig,
                    activeItem: router.asPath,
                    mt: "24px",
                    mb: "8px"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__]);
state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ClearAllButton = ({ collectionAddress , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { removeAllItemFilters  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__/* .useNftStorage */ .q)();
    const clearAll = ()=>{
        removeAllItemFilters(collectionAddress);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "text",
        scale: "sm",
        onClick: clearAll,
        ...props,
        children: t("Clear")
    }, "clear-all");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearAllButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11218);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67013);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91229);
/* harmony import */ var _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37569);
/* harmony import */ var _hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61721);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__, _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__, _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CollectionNfts = ({ collection  })=>{
    const { address: collectionAddress  } = collection || {};
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { nfts , isFetchingNfts , page , setPage , resultSize , isLastPage  } = (0,_hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__/* .useCollectionNfts */ .X)(collectionAddress);
    const handleLoadMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setPage(page + 1);
    }, [
        setPage,
        page
    ]);
    if ((!nfts || nfts?.length === 0) && isFetchingNfts) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            resultSize && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                p: "16px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    bold: true,
                    children: [
                        resultSize,
                        " ",
                        t("Results")
                    ]
                })
            }),
            nfts.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        gridGap: "16px",
                        gridTemplateColumns: [
                            "1fr",
                            null,
                            "repeat(3, 1fr)",
                            null,
                            "repeat(4, 1fr)"
                        ],
                        alignItems: "start",
                        children: nfts.map((nft)=>{
                            const currentAskPriceAsNumber = nft.marketData && parseFloat(nft?.marketData?.currentAskPrice);
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__/* .CollectibleLinkCard */ .ts, {
                                nft: nft,
                                currentAskPrice: currentAskPriceAsNumber > 0 ? currentAskPriceAsNumber : undefined
                            }, nft.tokenId);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        mt: "60px",
                        mb: "12px",
                        justifyContent: "center",
                        children: !isLastPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            onClick: handleLoadMore,
                            scale: "sm",
                            disabled: isFetchingNfts,
                            endIcon: isFetchingNfts ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                spin: true,
                                color: "currentColor"
                            }) : undefined,
                            children: isFetchingNfts ? t("Loading") : t("Load more")
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                alignItems: "center",
                py: "48px",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        width: "96px",
                        mb: "24px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontWeight: 600,
                        children: t("No NFTs found")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionNfts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25717);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64548);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93438);
/* harmony import */ var _CollectionNfts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__, _Filters__WEBPACK_IMPORTED_MODULE_3__, _CollectionNfts__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__, _Filters__WEBPACK_IMPORTED_MODULE_3__, _CollectionNfts__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CollectionWrapper = ({ collection  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        py: "32px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                px: [
                    0,
                    null,
                    "24px"
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Filters__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    address: collection?.address || "",
                    attributes: collection?.attributes
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollectionNfts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    collection: collection
                })
            }),
            /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), document.body)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93438:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64349);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74813);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93304);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24953);
/* harmony import */ var views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37806);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11095);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82578);
/* harmony import */ var _ClearAllButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15382);
/* harmony import */ var _SortSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__, _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__, _ClearAllButton__WEBPACK_IMPORTED_MODULE_11__, _SortSelect__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__, _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__, _ClearAllButton__WEBPACK_IMPORTED_MODULE_11__, _SortSelect__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-0"
})`
  margin-bottom: 16px;
  padding: 0 16px;
  grid-gap: 8px 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'filterByTitle .'
    'attributeFilters attributeFilters'
    '. sortByTitle'
    'filterByControls sortByControls';
  ${({ theme  })=>theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'filterByTitle . .'
      'attributeFilters attributeFilters attributeFilters'
      '. . sortByTitle'
      'filterByControls . sortByControls';
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    grid-template-columns: 2fr 5fr 1fr;
    grid-template-areas:
      'filterByTitle . .'
      'filterByControls attributeFilters attributeFilters'
      '. . sortByTitle'
      '. . sortByControls';
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    grid-template-columns: 1.3fr 5fr 1fr;
    grid-template-areas:
      'filterByTitle . sortByTitle'
      'filterByControls attributeFilters sortByControls';
  }
  ${({ theme  })=>theme.mediaQueries.xxl} {
    grid-template-columns: 1fr 5fr 1fr;
  }
`;
const FilterByTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-1"
})`
  grid-area: filterByTitle;
`;
const FilterByControls = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-2"
})`
  grid-area: filterByControls;
`;
const SortByTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-3"
})`
  grid-area: sortByTitle;
`;
const SortByControls = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-4"
})`
  grid-area: sortByControls;
`;
const ScrollableFlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-5"
})`
  grid-area: attributeFilters;
  align-items: center;
  flex: 1;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-wrap: wrap;
    overflow-x: revert;
  }
`;
const Filters = ({ address , attributes  })=>{
    const { data  } = (0,_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(address);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const showOnlyNftsOnSale = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetNftShowOnlyOnSale */ .q4)(address);
    const { setShowOnlyOnSale  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__/* .useNftStorage */ .q)();
    const { 0: activeButtonIndex , 1: setActiveButtonIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showOnlyNftsOnSale ? 1 : 0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setActiveButtonIndex(showOnlyNftsOnSale ? 1 : 0);
    }, [
        showOnlyNftsOnSale
    ]);
    const onActiveButtonChange = (newIndex)=>{
        setShowOnlyOnSale({
            collection: address,
            showOnlyOnSale: newIndex === 1
        });
    };
    const nftFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetNftFilters */ .DI)(address);
    const attrsByType = attributes ? lodash_groupBy__WEBPACK_IMPORTED_MODULE_9___default()(attributes, (attr)=>attr.traitType) : null;
    const uniqueTraitTypes = attrsByType ? Object.keys(attrsByType) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GridContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FilterByTitle, {
                textTransform: "uppercase",
                color: "textSubtle",
                fontSize: "12px",
                bold: true,
                children: t("Filter by")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FilterByControls, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    scale: "sm",
                    activeIndex: activeButtonIndex,
                    onItemClick: onActiveButtonChange,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            children: t("All")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            children: t("On Sale")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SortByTitle, {
                fontSize: "12px",
                textTransform: "uppercase",
                color: "textSubtle",
                fontWeight: 600,
                mb: "4px",
                children: t("Sort By")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SortByControls, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SortSelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    collectionAddress: address
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScrollableFlexContainer, {
                children: [
                    uniqueTraitTypes.map((traitType)=>{
                        const attrs = attrsByType[traitType];
                        const items = attrs.map((attr)=>({
                                label: lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default()(attr.value),
                                count: data && data[traitType] ? data[traitType][attr.value] : undefined,
                                attr
                            }));
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__/* .ListTraitFilter */ .y, {
                            title: lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default()(traitType),
                            traitType: traitType,
                            items: items,
                            collectionAddress: address
                        }, traitType);
                    }),
                    !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(nftFilters) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClearAllButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        collectionAddress: address,
                        mb: "4px"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1695);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37569);
/* harmony import */ var _hooks_useAllPancakeBunnyNfts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86329);
/* harmony import */ var _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__, _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__, _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PancakeBunniesCollectionNfts = ({ address , sortBy ="updatedAt" ,  })=>{
    const allPancakeBunnyNfts = (0,_hooks_useAllPancakeBunnyNfts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(address);
    const sortedNfts = allPancakeBunnyNfts ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(allPancakeBunnyNfts, (nft)=>nft.meta[sortBy] ? Number(nft?.meta[sortBy]) : 0, [
        sortBy === "currentAskPrice" ? "asc" : "desc", 
    ]) : [];
    if (!sortedNfts.length) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            gridGap: "16px",
            gridTemplateColumns: [
                "1fr",
                null,
                "repeat(3, 1fr)",
                null,
                "repeat(4, 1fr)"
            ],
            alignItems: "start",
            children: sortedNfts.map((nft)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__/* .CollectibleLinkCard */ .ts, {
                    nft: nft
                }, `${nft?.tokenId}-${nft?.collectionName}`);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PancakeBunniesCollectionNfts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88618);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11095);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SortSelect = ({ collectionAddress  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { setOrdering  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__/* .useNftStorage */ .q)();
    const selectedOrder = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetNftOrdering */ .D7)(collectionAddress);
    const handleChange = (newOption)=>{
        const { field , direction  } = newOption.value;
        setOrdering({
            collection: collectionAddress,
            field,
            direction
        });
    };
    const sortByItems = [
        {
            label: t("Recently listed"),
            value: {
                field: "updatedAt",
                direction: "desc"
            }
        },
        {
            label: t("Lowest price"),
            value: {
                field: "currentAskPrice",
                direction: "asc"
            }
        },
        {
            label: t("Highest price"),
            value: {
                field: "currentAskPrice",
                direction: "desc"
            }
        },
        {
            label: t("Token ID"),
            value: {
                field: "tokenId",
                direction: "asc"
            }
        }, 
    ];
    const defaultOptionIndex = sortByItems.findIndex((option)=>option.value.field === selectedOrder.field && option.value.direction === selectedOrder.direction);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        options: sortByItems,
        onOptionChange: handleChange,
        defaultOptionIndex: defaultOptionIndex !== -1 ? defaultOptionIndex : undefined
    }, defaultOptionIndex !== -1 ? defaultOptionIndex : undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79049:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88618);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93304);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64548);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36806);
/* harmony import */ var _PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14091);
/* harmony import */ var _CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14441);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__, _PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__, _CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__, _PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__, _CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Items = ()=>{
    const collectionAddress = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query.collectionAddress;
    const { 0: sortBy , 1: setSortBy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("updatedAt");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetCollection */ .YD)(collectionAddress);
    const isPBCollection = (0,utils__WEBPACK_IMPORTED_MODULE_6__/* .isAddress */ .UJ)(collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_7__/* .pancakeBunniesAddress */ .J;
    const sortByItems = [
        {
            label: t("Recently listed"),
            value: "updatedAt"
        },
        {
            label: t("Lowest price"),
            value: "currentAskPrice"
        }, 
    ];
    const handleChange = (newOption)=>{
        setSortBy(newOption.value);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isPBCollection ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            mb: "24px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: [
                        "flex-start",
                        null,
                        null,
                        "flex-end"
                    ],
                    mb: "24px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        minWidth: "165px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontWeight: 600,
                                mb: "4px",
                                children: t("Sort By")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                options: sortByItems,
                                onOptionChange: handleChange
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    address: collection?.address,
                    sortBy: sortBy
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            collection: collection
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Items);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15941);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46737);
/* harmony import */ var _components_StatBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, _components_StatBox__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, _components_StatBox__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const LowestPriceStatBoxItem = ({ collectionAddress , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { data: lowestCollectionPrice = null  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(collectionAddress ? [
        collectionAddress,
        "lowestPrice"
    ] : null, ()=>(0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getLeastMostPriceInCollection */ .Um)(collectionAddress));
    const formattedLowestPrice = lowestCollectionPrice !== null ? lowestCollectionPrice ? lowestCollectionPrice.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }) : "-" : null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_4__/* .StatBoxItem */ .B, {
        title: t("Lowest (%symbol%)", {
            symbol: "BNB"
        }),
        stat: formattedLowestPrice,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LowestPriceStatBoxItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12849);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40996);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36806);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BackLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3c2b94de-0"
})`
  align-items: center;
  color: ${({ theme  })=>theme.colors.primary};
  display: inline-flex;
  font-weight: 600;
`;
const TopBar = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        mb: "24px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BackLink, {
                to: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_3__/* .nftsBaseUrl */ .V}/collections`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        color: "primary",
                        width: "24px"
                    }),
                    t("All Collections")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ REQUEST_SIZE)
/* harmony export */ });
const REQUEST_SIZE = 100;


/***/ }),

/***/ 5222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60760);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52993);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25237);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93304);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39666);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__, _Header__WEBPACK_IMPORTED_MODULE_7__, _Items__WEBPACK_IMPORTED_MODULE_8__]);
([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__, _Header__WEBPACK_IMPORTED_MODULE_7__, _Items__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Traits = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 3970).then(__webpack_require__.bind(__webpack_require__, 3970)), {
    loadableGenerated: {
        modules: [
            "../views/Nft/market/Collection/index.tsx -> " + "./Traits"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
});
const Activity = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7379), __webpack_require__.e(4512), __webpack_require__.e(1436), __webpack_require__.e(8015), __webpack_require__.e(6775), __webpack_require__.e(2328), __webpack_require__.e(2920)]).then(__webpack_require__.bind(__webpack_require__, 12920)), {
    loadableGenerated: {
        modules: [
            "../views/Nft/market/Collection/index.tsx -> " + "./Activity"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
});
const getHashFromRouter = (router)=>router.asPath.match(/#([a-z0-9]+)/gi);
const Collection = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const collectionAddress = router.query.collectionAddress;
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetCollection */ .YD)(collectionAddress);
    const hash = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>getHashFromRouter(router)?.[0], [
        router
    ]);
    if (!collection) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
    }
    let content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Items__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
    if (hash === "#traits") {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Traits, {});
    }
    if (hash === "#activity") {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Activity, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* .PageMeta */ .V, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                collection: collection
            }),
            content
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.attrs(({ alt  })=>({
        alt
    })).withConfig({
    componentId: "sc-20e79e7-0"
})`
  background: url('${({ src  })=>src}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 96px;
  height: 96px;
  border: 4px ${({ borderColor  })=>borderColor || "#f2ecf2"} solid;

  & > img {
    border-radius: 50%;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarImage);


/***/ }),

/***/ 57093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBannerImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c46f9cd7-0"
})`
  ${({ theme  })=>`background-color: ${theme.colors.cardBorder}`};
  flex: none;
  position: relative;
  width: 100%;
  border-radius: 32px;
  height: 123px;
  overflow: hidden;

  ${({ theme  })=>theme.mediaQueries.sm} {
    height: 192px;
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    height: 256px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledBannerImageWrapper);


/***/ }),

/***/ 81729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BannerImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57093);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const BannerHeader = ({ bannerImage , bannerAlt , avatar , children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        flexDirection: "column",
        mb: "24px",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            position: "relative",
            pb: "56px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BannerImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: bannerImage,
                        alt: bannerAlt,
                        layout: "fill",
                        objectFit: "cover",
                        priority: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    position: "absolute",
                    bottom: 0,
                    left: -4,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        alignItems: "flex-end",
                        children: [
                            avatar,
                            children
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69866);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BaseSubMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8f8e612f-0"
})`
  background-color: transparent;
  border-bottom: 1px ${({ theme  })=>theme.colors.cardBorder} solid;

  > div {
    background-color: transparent;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSubMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68166:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const FilterFooter = ({ children , ...props })=>/*#__PURE__*/ _jsx(Grid, {
        gridGap: "16px",
        gridTemplateColumns: "repeat(2,1fr)",
        ...props,
        px: "24px",
        py: "16px",
        borderTop: "1px solid",
        borderTopColor: "cardBorder",
        children: children
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FilterFooter)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ak": () => (/* binding */ StyledItemRow),
/* harmony export */   "Lb": () => (/* binding */ FilterButton),
/* harmony export */   "PZ": () => (/* binding */ CloseButton),
/* harmony export */   "Re": () => (/* binding */ ItemImage),
/* harmony export */   "_8": () => (/* binding */ SearchWrapper),
/* harmony export */   "yR": () => (/* binding */ TriggerButton)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledItemRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-0"
})`
  cursor: pointer;
  user-select: none;
`;
const ItemImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-1"
})`
  border-radius: 50%;
`;
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-2"
})`
  background: ${({ theme  })=>theme.colors.dropdown};
  border-radius: 24px 24px 0 0;
`;
const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-3"
})`
  align-items: center;
  cursor: pointer;
  user-select: none;

  svg {
    pointer-events: none;
  }
`;
const TriggerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-4"
})`
  white-space: nowrap;
  ${({ hasItem  })=>hasItem && `  
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 8px;
  `}
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-5"
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ListTraitFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72897);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4161);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88800);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94722);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(60789);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93304);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11095);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88864);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61916);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__, _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__, _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TriggerButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6650057c-0"
})`
  ${({ hasItem  })=>hasItem && `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 8px;
  `}
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6650057c-1"
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
const ListTraitFilter = ({ title , traitType , items , collectionAddress ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { updateItemFilters  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__/* .useNftStorage */ .q)();
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: orderState , 1: setOrderState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        orderKey: "count",
        orderDir: "asc"
    });
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nftFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useGetNftFilters */ .DI)(collectionAddress);
    const { orderKey , orderDir  } = orderState;
    const traitFilter = nftFilters[traitType];
    const isTraitSelected = !!traitFilter;
    const filteredItems = query && query.length > 1 ? items.filter((item)=>item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1) : items;
    const handleClearItem = ()=>{
        const newFilters = {
            ...nftFilters
        };
        delete newFilters[traitType];
        updateItemFilters({
            collectionAddress,
            nftFilters: newFilters
        });
    };
    const handleMenuClick = ()=>setIsOpen(!isOpen);
    const handleChange = (evt)=>{
        const { value  } = evt.target;
        setQuery(value);
    };
    const handleItemSelect = ({ attr  })=>{
        updateItemFilters({
            collectionAddress,
            nftFilters: {
                ...nftFilters,
                [traitType]: attr
            }
        });
    };
    const toggleSort = (newOrderKey)=>()=>{
            setOrderState((prevOrderDir)=>{
                if (prevOrderDir.orderKey !== newOrderKey) {
                    return {
                        orderKey: newOrderKey,
                        orderDir: "asc"
                    };
                }
                return {
                    orderKey: newOrderKey,
                    orderDir: prevOrderDir.orderDir === "asc" ? "desc" : "asc"
                };
            });
        };
    // @TODO Fix this in the Toolkit
    // This is a fix to ensure the "isOpen" value is aligned with the menus's (to avoid a double click)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = ({ target  })=>{
            if (wrapperRef.current && menuRef.current && !menuRef.current.contains(target) && !wrapperRef.current.contains(target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        setIsOpen,
        wrapperRef,
        menuRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        alignItems: "center",
        mr: "4px",
        mb: "4px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                ref: wrapperRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TriggerButton, {
                        onClick: handleMenuClick,
                        variant: isTraitSelected ? "subtle" : "light",
                        scale: "sm",
                        hasItem: isTraitSelected,
                        children: title
                    }),
                    isOpen: isOpen,
                    options: {
                        placement: "bottom"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        maxWidth: "375px",
                        ref: menuRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .SearchWrapper */ ._8, {
                                alignItems: "center",
                                p: "16px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        color: "textSubtle"
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        name: "query",
                                        placeholder: t("Search"),
                                        onChange: handleChange,
                                        value: query
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                alignItems: "center",
                                p: "16px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .FilterButton */ .Lb, {
                                        onClick: toggleSort("label"),
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "secondary",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                children: t("Name")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                width: "18px",
                                                children: [
                                                    orderKey === "label" && orderDir === "asc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    }),
                                                    orderKey === "label" && orderDir === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .FilterButton */ .Lb, {
                                        onClick: toggleSort("count"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "secondary",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                children: t("Count")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                width: "18px",
                                                children: [
                                                    orderKey === "count" && orderDir === "asc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    }),
                                                    orderKey === "count" && orderDir === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                height: "240px",
                                overflowY: "auto",
                                children: filteredItems.length > 0 ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(filteredItems, orderKey, orderDir).map((filteredItem)=>{
                                    const handleSelect = ()=>handleItemSelect(filteredItem);
                                    const isItemSelected = traitFilter ? traitFilter.value === filteredItem.attr.value : false;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .TraitItemRow */ .u, {
                                        item: filteredItem,
                                        isSelected: isItemSelected,
                                        onSelect: handleSelect
                                    }, filteredItem.label);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "230px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        color: "textDisabled",
                                        textAlign: "center",
                                        children: t("No results found")
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            isTraitSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseButton, {
                variant: isTraitSelected ? "subtle" : "light",
                scale: "sm",
                onClick: handleClearItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    color: "currentColor",
                    width: "18px"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ TraitItemRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25306);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var _ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__]);
_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TraitItemRow = ({ item , isSelected , onSelect  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledItemRow */ .Ak, {
        alignItems: "center",
        px: "16px",
        py: "8px",
        onClick: onSelect,
        children: [
            item.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__/* .ItemImage */ .Re, {
                src: item.image,
                height: 48,
                width: 48,
                mr: "16px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                style: {
                    flex: 1
                },
                children: item.label
            }),
            item.count !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: "textSubtle",
                px: "8px",
                children: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(item.count, 0, 0)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                name: "item-select",
                scale: "sm",
                checked: isSelected,
                value: item.label,
                onChange: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
                ml: "24px"
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export MinMaxFilter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _FilterFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68166);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FilterFooter__WEBPACK_IMPORTED_MODULE_3__]);
_FilterFooter__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MinMaxFilter = ({ onApply , onClear , max , min =0 , ...props })=>{
    const { t  } = useTranslation();
    const { 0: currentMax , 1: setCurrentMax  } = useState(max);
    const { 0: currentMin , 1: setCurrentMin  } = useState(min);
    const { 0: isError , 1: setIsError  } = useState(min > max);
    const handleMinChange = (newMin)=>{
        setCurrentMin(newMin ? parseFloat(newMin) : 0);
    };
    const handleMaxChange = (newMax)=>{
        setCurrentMax(parseFloat(newMax));
    };
    const handleApply = ()=>{
        onApply(currentMin, currentMax);
    };
    // TODO: circle back to this
    const handleClear = ()=>{
        setCurrentMax(max);
        setCurrentMin(min);
        if (onClear) {
            onClear();
        }
    };
    // If a change comes down from the top update local state
    useEffect(()=>{
        setCurrentMax(max);
    }, [
        max,
        setCurrentMax
    ]);
    useEffect(()=>{
        setCurrentMin(min);
    }, [
        min,
        setCurrentMin
    ]);
    useEffect(()=>{
        setIsError(currentMin > currentMax);
    }, [
        currentMin,
        currentMax,
        setIsError
    ]);
    return /*#__PURE__*/ _jsx(InlineMenu, {
        component: /*#__PURE__*/ _jsx(Button, {
            variant: "light",
            scale: "sm",
            children: t("Price")
        }),
        ...props,
        children: /*#__PURE__*/ _jsxs(Box, {
            width: "320px",
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    px: "24px",
                    py: "16px",
                    children: /*#__PURE__*/ _jsxs(Grid, {
                        gridGap: "16px",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        children: [
                            /*#__PURE__*/ _jsx(TextField, {
                                label: t("Min"),
                                value: currentMin,
                                onUserInput: handleMinChange,
                                isWarning: isError
                            }),
                            /*#__PURE__*/ _jsx(TextField, {
                                label: t("Max"),
                                value: currentMax,
                                onUserInput: handleMaxChange,
                                isWarning: isError
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs(FilterFooter, {
                    children: [
                        /*#__PURE__*/ _jsx(Button, {
                            variant: "secondary",
                            onClick: handleClear,
                            children: t("Clear")
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: handleApply,
                            disabled: isError,
                            children: t("Apply")
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7948);
/* harmony import */ var _MinMaxFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__, _MinMaxFilter__WEBPACK_IMPORTED_MODULE_1__]);
([_ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__, _MinMaxFilter__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GridPlaceholderItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1695);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4354);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const GridPlaceholderItem = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                height: "258px",
                mb: "8px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                width: "30%",
                mb: "4px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                width: "45%",
                mb: "16px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
const GridPlaceholder = ({ numItems =12 , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        gridGap: "16px",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            "repeat(4, 1fr)"
        ],
        ...props,
        children: lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(numItems).map((itemKey)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridPlaceholderItem, {}, itemKey))
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridPlaceholder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9778);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
([hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const MarketPageHeader = (props)=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    const background = theme.isDark ? "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)" : "linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        background: background,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketPageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1695);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55817);
/* harmony import */ var config_constants_nftsCollections_delist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27801);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MarketPageTitle = ({ title , description , children , address , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        gridGap: "16px",
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            null,
            "repeat(2, 1fr)"
        ],
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        as: "h1",
                        scale: "xl",
                        color: "secondary",
                        mb: "16px",
                        children: title
                    }),
                    config_constants_nftsCollections_delist__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z[address] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        variant: "danger",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .MessageText */ .Y, {
                            children: t("This collection has been inactived for a while. Trade at your own risk.")
                        })
                    }) : description
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketPageTitle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29491);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__]);
components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SearchBar = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleAddressClick = (value)=>{
        router.push(`/profile/${value}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onAddressClick: handleAddressClick,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ StatBoxItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33430);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const StatBoxItem = ({ title , stat , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fontSize: "12px",
                color: "textSubtle",
                textAlign: "center",
                children: title
            }),
            stat === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                height: "24px",
                width: "50%",
                mx: "auto"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fontWeight: "600",
                textAlign: "center",
                children: stat
            })
        ]
    });
const StatBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5a83567f-0"
})`
  align-items: center;
  background: ${({ theme  })=>theme.colors.invertedContrast};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: ${({ theme  })=>theme.radii.card};
  justify-content: space-around;
  padding: 8px;
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5305);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46737);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36806);




// If collection is PancakeBunnies - gets all available bunnies, otherwise - null
const useAllPancakeBunnyNfts = (collectionAddress)=>{
    const { 0: allPancakeBunnyNfts , 1: setAllPancakeBunnyNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const isPBCollection = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .isAddress */ .UJ)(collectionAddress) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .pancakeBunniesAddress */ .J;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchPancakeBunnies = async ()=>{
            // In order to not define special TS type just for PancakeBunnies display we're hacking a little bit into NftToken type.
            // On this page we just want to display all bunnies with their lowest prices and updates on the market
            // Since some bunnies might not be on the market at all, we don't refer to the redux nfts state (which stores NftToken with actual token ids)
            // We merely request from API all available bunny ids with their metadata and query subgraph for lowest price and latest updates.
            const response = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .pancakeBunniesAddress */ .J);
            if (!response) return;
            const { data  } = response;
            const bunnyIds = Object.keys(data);
            const [lowestPrices, latestUpdates] = await Promise.all([
                (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getAllPancakeBunniesLowestPrice */ .LU)(bunnyIds),
                (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getAllPancakeBunniesRecentUpdatedAt */ .nP)(bunnyIds), 
            ]);
            const allBunnies = bunnyIds.map((bunnyId)=>{
                return {
                    // tokenId here is just a dummy one to satisfy TS. TokenID does not play any role in gird display below
                    tokenId: data[bunnyId].name,
                    name: data[bunnyId].name,
                    description: data[bunnyId].description,
                    collectionAddress: _constants__WEBPACK_IMPORTED_MODULE_3__/* .pancakeBunniesAddress */ .J,
                    collectionName: data[bunnyId].collection.name,
                    image: data[bunnyId].image,
                    attributes: [
                        {
                            traitType: "bunnyId",
                            value: bunnyId,
                            displayType: null
                        }, 
                    ],
                    meta: {
                        currentAskPrice: lowestPrices[bunnyId],
                        updatedAt: latestUpdates[bunnyId]
                    }
                };
            });
            setAllPancakeBunnyNfts(allBunnies);
        };
        if (isPBCollection && !allPancakeBunnyNfts) {
            fetchPancakeBunnies();
        }
    }, [
        isPBCollection,
        allPancakeBunnyNfts
    ]);
    return allPancakeBunnyNfts;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAllPancakeBunnyNfts);


/***/ }),

/***/ 61721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useCollectionNfts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93304);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46737);
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91448);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Collection_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__, swr_infinite__WEBPACK_IMPORTED_MODULE_4__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__, swr_infinite__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const fetchTokenIdsFromFilter = async (address, settings)=>{
    const filterObject = settings.nftFilters;
    const attrParams = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default()(Object.values(filterObject).map((attr)=>[
            attr.traitType,
            attr.value
        ]));
    const attrFilters = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(attrParams) ? await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .fetchNftsFiltered */ .nh)(address, attrParams) : null;
    return attrFilters ? Object.values(attrFilters.data).map((apiToken)=>apiToken.tokenId) : null;
};
const fetchMarketDataNfts = async (collection, settings, page, tokenIdsFromFilter)=>{
    const whereClause = tokenIdsFromFilter ? {
        collection: collection.address.toLowerCase(),
        isTradable: true,
        tokenId_in: tokenIdsFromFilter
    } : {
        collection: collection.address.toLowerCase(),
        isTradable: true
    };
    const subgraphRes = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftsMarketData */ .T5)(whereClause, _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z, settings.field, settings.direction, page * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z);
    const apiRequestPromises = subgraphRes.map((marketNft)=>(0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftApi */ .hb)(collection.address, marketNft.tokenId));
    const apiResponses = await Promise.all(apiRequestPromises);
    const newNfts = apiResponses.reduce((acc, apiNft)=>{
        if (apiNft) {
            acc.push({
                ...apiNft,
                collectionAddress: collection.address,
                collectionName: apiNft.collection.name,
                marketData: subgraphRes.find((marketNft)=>marketNft.tokenId === apiNft.tokenId)
            });
        }
        return acc;
    }, []);
    return newNfts;
};
const tokenIdsFromFallback = (collection, tokenIdsFromFilter, fetchedNfts, fallbackPage)=>{
    let tokenIds = [];
    const startIndex = fallbackPage * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z;
    const endIndex = (fallbackPage + 1) * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z;
    if (tokenIdsFromFilter) {
        tokenIds = tokenIdsFromFilter.filter((tokenId)=>!fetchedNfts.some((fetchedNft)=>fetchedNft.tokenId === tokenId)).slice(startIndex, endIndex);
    } else {
        const totalSupply = parseInt(collection?.totalSupply);
        let counter = startIndex;
        let index = startIndex;
        while(counter < endIndex){
            if (index > totalSupply) {
                break;
            }
            // eslint-disable-next-line no-loop-func
            if (!fetchedNfts.some((fetchedNft)=>parseInt(fetchedNft.tokenId) === index)) {
                tokenIds.push(index.toString());
                counter++;
            }
            index++;
        }
    }
    return tokenIds;
};
const fetchAllNfts = async (collection, settings, page, tokenIdsFromFilter, fetchedNfts, nftFallbackMode, nftFallbackPage)=>{
    const newNfts = [];
    let tokenIds = [];
    let collectionNftsResponse = null;
    let fallbackMode = nftFallbackMode;
    let fallbackPage = nftFallbackPage;
    if (settings.field !== "tokenId" && !fallbackMode) {
        const marketDataNfts = await fetchMarketDataNfts(collection, settings, page, tokenIdsFromFilter);
        if (marketDataNfts.length) {
            newNfts.push(...marketDataNfts);
        }
        if (newNfts.length < _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z) {
            // eslint-disable-next-line no-param-reassign
            fallbackMode = true;
            fetchedNfts.push(...newNfts);
        } else {
            return {
                nfts: newNfts,
                fallbackMode,
                fallbackPage
            };
        }
    }
    if (fallbackMode) {
        tokenIds = tokenIdsFromFallback(collection, tokenIdsFromFilter, fetchedNfts, fallbackPage);
        // eslint-disable-next-line no-param-reassign
        fallbackPage += 1;
    } else if (tokenIdsFromFilter) {
        tokenIds = tokenIdsFromFilter.slice(page * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z, (page + 1) * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z);
    } else {
        collectionNftsResponse = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftsFromCollectionApi */ .Rq)(collection.address, _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z, page + 1);
        if (collectionNftsResponse?.data) {
            tokenIds = Object.values(collectionNftsResponse.data).map((nft)=>nft.tokenId);
        }
    }
    if (tokenIds.length) {
        const nftsMarket = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDataForTokenIds */ .Z1)(collection.address, tokenIds);
        const responsesPromises = tokenIds.map(async (id)=>{
            const apiMetadata = collectionNftsResponse ? collectionNftsResponse.data[id] : await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftApi */ .hb)(collection.address, id);
            if (apiMetadata) {
                const marketData = nftsMarket.find((nft)=>nft.tokenId === id);
                return {
                    tokenId: id,
                    name: apiMetadata.name,
                    description: apiMetadata.description,
                    collectionName: apiMetadata.collection.name,
                    collectionAddress: collection.address,
                    image: apiMetadata.image,
                    attributes: apiMetadata.attributes,
                    marketData
                };
            }
            return null;
        });
        const responseNfts = (await Promise.all(responsesPromises)).filter((x)=>x);
        newNfts.push(...responseNfts);
        return {
            nfts: newNfts,
            fallbackMode,
            fallbackPage
        };
    }
    return {
        nfts: [],
        fallbackMode,
        fallbackPage
    };
};
const useCollectionNfts = (collectionAddress)=>{
    const fetchedNfts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const fallbackMode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const fallbackModePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const isLastPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetCollection */ .YD)(collectionAddress);
    const { field , direction  } = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetNftOrdering */ .D7)(collectionAddress);
    const showOnlyNftsOnSale = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetNftShowOnlyOnSale */ .q4)(collectionAddress);
    const nftFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetNftFilters */ .DI)(collectionAddress);
    const { 0: itemListingSettings , 1: setItemListingSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        field,
        direction,
        showOnlyNftsOnSale,
        nftFilters
    });
    // We don't know the amount in advance if nft filters exist
    const resultSize = !Object.keys(nftFilters).length && collection ? showOnlyNftsOnSale ? collection.numberTokensListed : collection?.totalSupply : null;
    const itemListingSettingsJson = JSON.stringify(itemListingSettings);
    const filtersJson = JSON.stringify(nftFilters);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setItemListingSettings(()=>({
                field,
                direction,
                showOnlyNftsOnSale,
                nftFilters: JSON.parse(filtersJson)
            }));
        fallbackMode.current = false;
        fallbackModePage.current = 0;
        fetchedNfts.current = [];
        isLastPage.current = false;
    }, [
        field,
        direction,
        showOnlyNftsOnSale,
        filtersJson
    ]);
    const { data: nfts , status , size , setSize ,  } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_4__["default"])((pageIndex, previousPageData)=>{
        if (pageIndex !== 0 && previousPageData && !previousPageData.length) return null;
        return [
            collectionAddress,
            itemListingSettingsJson,
            pageIndex,
            "collectionNfts"
        ];
    }, async (address, settingsJson, page)=>{
        const settings = JSON.parse(settingsJson);
        const tokenIdsFromFilter = await fetchTokenIdsFromFilter(collection?.address, settings);
        let newNfts = [];
        if (settings.showOnlyNftsOnSale) {
            newNfts = await fetchMarketDataNfts(collection, settings, page, tokenIdsFromFilter);
        } else {
            const { nfts: allNewNfts , fallbackMode: newFallbackMode , fallbackPage: newFallbackPage ,  } = await fetchAllNfts(collection, settings, page, tokenIdsFromFilter, fetchedNfts.current, fallbackMode.current, fallbackModePage.current);
            newNfts = allNewNfts;
            fallbackMode.current = newFallbackMode;
            fallbackModePage.current = newFallbackPage;
        }
        if (newNfts.length < _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z) {
            isLastPage.current = true;
        }
        return newNfts;
    }, {
        revalidateAll: true
    });
    const uniqueNftList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>nfts ? lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6___default()(nfts.flat(), "tokenId") : [], [
        nfts
    ]);
    fetchedNfts.current = uniqueNftList;
    return {
        nfts: uniqueNftList,
        isFetchingNfts: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched,
        page: size,
        setPage: setSize,
        resultSize,
        isLastPage: isLastPage.current
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q": () => (/* binding */ useGetCollectionDistributionPB)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46737);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70627);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25152);
/* harmony import */ var config_abi_pancakeBunnies_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60664);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79847);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6429);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_5__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const useGetCollectionDistribution = (collectionAddress)=>{
    const { data , status  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(collectionAddress ? [
        "distribution",
        collectionAddress
    ] : null, async ()=>(await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getCollectionDistributionApi */ .iE)(collectionAddress)).data);
    return {
        data,
        isFetching: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_6__/* .FetchStatus.Fetched */ .iF.Fetched
    };
};
const useGetCollectionDistributionPB = ()=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isFetching: false,
        data: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchTokens = async ()=>{
            setState((prevState)=>({
                    ...prevState,
                    isFetching: true
                }));
            let apiResponse;
            try {
                apiResponse = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .pancakeBunniesAddress */ .J);
                if (!apiResponse) {
                    setState((prevState)=>({
                            ...prevState,
                            isFetching: false
                        }));
                    return;
                }
            } catch (error) {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false
                    }));
                return;
            }
            // Use on chain data to get most updated totalSupply and bunnyCount data. Nft Api Data not updated frequently.
            const tokenIds = Object.keys(apiResponse.attributesDistribution);
            const bunnyCountCalls = tokenIds.map((tokenId)=>({
                    address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getPancakeBunniesAddress */ .GI)(),
                    name: "bunnyCount",
                    params: [
                        tokenId
                    ]
                }));
            try {
                const response = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_3__/* .multicallv2 */ .v)({
                    abi: config_abi_pancakeBunnies_json__WEBPACK_IMPORTED_MODULE_4__,
                    calls: bunnyCountCalls
                });
                const tokenListResponse = response.reduce((obj, tokenCount, index)=>{
                    return {
                        ...obj,
                        [tokenIds[index]]: {
                            ...apiResponse.data[index],
                            tokenCount: tokenCount[0].toNumber()
                        }
                    };
                }, {});
                setState({
                    isFetching: false,
                    data: tokenListResponse
                });
            } catch (error1) {
                // Use nft api data if on chain multicall fails
                const tokenListResponse1 = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default()(Object.entries(apiResponse.data).map(([tokenId, tokenData])=>{
                    return [
                        tokenId,
                        {
                            ...tokenData,
                            tokenCount: apiResponse.attributesDistribution[tokenId]
                        }
                    ];
                }));
                setState({
                    isFetching: false,
                    data: tokenListResponse1
                });
            }
        };
        fetchTokens();
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetCollectionDistribution);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68948:
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
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23940);
/* harmony import */ var _util_getPortalRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_5__]);
_styles__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BaseMenu = ({ component , options , children , isOpen =false  })=>{
    const { 0: targetElement , 1: setTargetElement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: menuElement , 1: setMenuElement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const placement = options?.placement ?? "bottom";
    const offset = options?.offset ?? [
        0,
        10
    ];
    const padding = options?.padding ?? {
        left: 16,
        right: 16
    };
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isOpen);
    const toggle = ()=>{
        setIsMenuOpen((prev)=>!prev);
    };
    const open = ()=>{
        setIsMenuOpen(true);
    };
    const close = ()=>{
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMenuOpen(isOpen);
    }, [
        isOpen,
        setIsMenuOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (menuElement !== null && targetElement !== null) {
            const handleClickOutside = ({ target  })=>{
                if (target instanceof Node && !menuElement.contains(target) && !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            };
            document.addEventListener("click", handleClickOutside);
            return ()=>{
                document.removeEventListener("click", handleClickOutside);
            };
        }
        return undefined;
    }, [
        menuElement,
        targetElement
    ]);
    const { styles , attributes  } = (0,react_popper__WEBPACK_IMPORTED_MODULE_3__.usePopper)(targetElement, menuElement, {
        placement,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding
                }
            }, 
        ]
    });
    const menu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: setMenuElement,
        style: styles.popper,
        ...attributes.popper,
        children: typeof children === "function" ? children({
            toggle,
            open,
            close
        }) : children
    });
    const portal = (0,_util_getPortalRoot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const renderMenu = portal ? /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(menu, portal) : menu;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ClickableElementContainer */ .j5, {
                ref: setTargetElement,
                onClick: toggle,
                children: component
            }),
            isMenuOpen && renderMenu
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68948);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BaseMenu__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__]);
([_BaseMenu__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const InlineMenu = ({ children , component , isOpen =false , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseMenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        options: {
            placement: "bottom"
        },
        component: component,
        isOpen: isOpen,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .InlineMenuContainer */ .xm, {
            ...props,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j5": () => (/* binding */ ClickableElementContainer),
/* harmony export */   "lz": () => (/* binding */ SubMenuContainer),
/* harmony export */   "vE": () => (/* binding */ SubMenuItem),
/* harmony export */   "xm": () => (/* binding */ InlineMenuContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__]);
([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const InlineMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-be5f5450-0"
})`
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
  border-radius: ${({ theme  })=>theme.radii.card};
  box-shadow: ${({ theme  })=>theme.shadows.tooltip};
`;
const SubMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-be5f5450-1"
})`
  flex-direction: column;
  overflow: hidden;
  min-width: 136px;
  background: ${({ theme  })=>theme.colors.input};
  border-radius: ${({ theme  })=>theme.radii.default};
  border: ${({ theme  })=>`1px solid ${theme.colors.inputSecondary}`};
`;
const ClickableElementContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-be5f5450-2"
})`
  cursor: pointer;
  display: inline-flex;
`;
const SubMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-be5f5450-3"
})`
  border: 0;
  outline: 0;
  cursor: pointer;
  background: transparent;
  padding: 8px 16px;
  color: ${({ theme  })=>theme.colors.text};
  width: 100%;
  font-size: 16px;
  text-align: left;

  &:hover {
    background-color: ${({ theme  })=>theme.colors.inputSecondary};
    text-decoration: none;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4161:
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
/* harmony import */ var _Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94866);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_Box__WEBPACK_IMPORTED_MODULE_4__]);
_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getPadding = (scale, hasIcon)=>{
    if (!hasIcon) {
        return "16px";
    }
    switch(scale){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.SM */ .Q.SM:
            return "32px";
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.LG */ .Q.LG:
            return "56px";
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.MD */ .Q.MD:
        default:
            return "48px";
    }
};
const StyledInputGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-148bad35-0"
})`
  ${_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z} {
    padding-left: ${({ hasStartIcon , scale  })=>getPadding(scale, hasStartIcon)};
    padding-right: ${({ hasEndIcon , scale  })=>getPadding(scale, hasEndIcon)};
  }
`;
const InputIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-148bad35-1"
})`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;

  ${({ isEndIcon , scale  })=>isEndIcon ? `
    right: ${scale === _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.SM */ .Q.SM ? "8px" : "16px"};
  ` : `
    left: ${scale === _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.SM */ .Q.SM ? "8px" : "16px"};
  `}
`;
const InputGroup = ({ scale =_types__WEBPACK_IMPORTED_MODULE_3__/* .scales.MD */ .Q.MD , startIcon , endIcon , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInputGroup, {
        scale: scale,
        width: "100%",
        position: "relative",
        hasStartIcon: !!startIcon,
        hasEndIcon: !!endIcon,
        ...props,
        children: [
            startIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputIcon, {
                scale: scale,
                children: startIcon
            }),
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
                scale
            }),
            endIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputIcon, {
                scale: scale,
                isEndIcon: true,
                children: endIcon
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ MessageText),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84507);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24674);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61179);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_9__]);
_Box__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MessageContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    variant: "success"
});
const Icons = {
    warning: _Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    danger: _Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    success: _Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
};
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-462695fe-0"
})`
  background-color: gray;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__.space}
  ${(0,styled_system__WEBPACK_IMPORTED_MODULE_3__.variant)({
    variants: _theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
})}
`;
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-462695fe-1"
})`
  display: flex;
`;
const colors = {
    // these color names should be place in the theme once the palette is finalized
    warning: "#D67E0A",
    success: "#129E7D",
    danger: "failure"
};
const MessageText = ({ children , ...props })=>{
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MessageContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        fontSize: "14px",
        color: colors[ctx?.variant],
        ...props,
        children: children
    });
};
const Message = ({ children , variant , icon , action , actionInline , ...props })=>{
    const Icon = Icons[variant];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageContext.Provider, {
        value: {
            variant
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
            variant: variant,
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Flex, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            mr: "12px",
                            children: icon ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                color: _theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[variant].borderColor,
                                width: "24px"
                            })
                        }),
                        children,
                        actionInline && action
                    ]
                }),
                !actionInline && action
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const variants = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning"
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure"
    },
    success: {
        background: "rgba(49, 208, 170, 0.1)",
        borderColor: "success"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variants);


/***/ }),

/***/ 25717:
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
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85306);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88800);






const FixedContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-46c49c22-0"
})`
  position: fixed;
  right: 5%;
  bottom: calc(110px + env(safe-area-inset-bottom));
`;
const ScrollToTopButtonV2 = ()=>{
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const scrollToTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const toggleVisible = ()=>{
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 500) {
                setVisible(true);
            } else if (scrolled <= 500) {
                setVisible(false);
            }
        };
        const throttledToggleVisible = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(toggleVisible, 200);
        window.addEventListener("scroll", throttledToggleVisible);
        return ()=>window.removeEventListener("scroll", throttledToggleVisible);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FixedContainer, {
        style: {
            display: visible ? "inline" : "none"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: 48,
            height: 48,
            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "white",
                style: {
                    marginLeft: 0
                }
            }),
            onClick: scrollToTop
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTopButtonV2);


/***/ }),

/***/ 88618:
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
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49019);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_3__]);
_Box__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DropDownHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ac4f9611-0"
})`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme  })=>theme.colors.input};
  transition: border-radius 0.15s;
`;
const DropDownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ac4f9611-1"
})`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  background: ${({ theme  })=>theme.colors.input};
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }
`;
const DropDownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ac4f9611-2"
})`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }

  ${(props)=>props.isOpen && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      ${DropDownHeader} {
        border-bottom: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
        box-shadow: ${({ theme  })=>theme.tooltip.boxShadow};
        border-radius: 16px 16px 0 0;
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
        border-top-width: 0;
        border-radius: 0 0 16px 16px;
        box-shadow: ${({ theme  })=>theme.tooltip.boxShadow};
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const DropDownList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-ac4f9611-3"
})`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
`;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
    componentId: "sc-ac4f9611-4"
})`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    background: ${({ theme  })=>theme.colors.inputSecondary};
  }
`;
const Select = ({ options , onOptionChange , defaultOptionIndex =0 , placeHolderText , ...props })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: optionSelected , 1: setOptionSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedOptionIndex , 1: setSelectedOptionIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOptionIndex);
    const toggling = (event)=>{
        setIsOpen(!isOpen);
        event.stopPropagation();
    };
    const onOptionClicked = (selectedIndex)=>()=>{
            setSelectedOptionIndex(selectedIndex);
            setIsOpen(false);
            setOptionSelected(true);
            if (onOptionChange) {
                onOptionChange(options[selectedIndex]);
            }
        };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = ()=>{
            setIsOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultOptionIndex) {
            setSelectedOptionIndex(defaultOptionIndex - 1);
            setOptionSelected(true);
        }
    }, [
        defaultOptionIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropDownContainer, {
        isOpen: isOpen,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownHeader, {
                onClick: toggling,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    color: !optionSelected && placeHolderText ? "text" : undefined,
                    children: !optionSelected && placeHolderText ? placeHolderText : options[selectedOptionIndex].label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "text",
                onClick: toggling
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownListContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownList, {
                    children: options.map((option, index)=>placeHolderText || index !== selectedOptionIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            onClick: onOptionClicked(index),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: option.label
                            })
                        }, option.label) : null)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 49019:
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
            d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
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

/***/ 11218:
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
            d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 61179:
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
            d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 24674:
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
            d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72993:
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
            d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 8483:
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 84507:
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
            d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 74909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getPortalRoot = ()=> false && (0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPortalRoot);


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

/***/ 59969:
/***/ ((module) => {

module.exports = require("lodash/capitalize");

/***/ }),

/***/ 90221:
/***/ ((module) => {

module.exports = require("lodash/chunk");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

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

/***/ 50541:
/***/ ((module) => {

module.exports = require("lodash/memoize");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 87553:
/***/ ((module) => {

module.exports = require("lodash/noop");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 64042:
/***/ ((module) => {

module.exports = require("lodash/range");

/***/ }),

/***/ 9822:
/***/ ((module) => {

module.exports = require("lodash/reduce");

/***/ }),

/***/ 19318:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ 95594:
/***/ ((module) => {

module.exports = require("lodash/sum");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 59819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ }),

/***/ 91448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4248,274,9097,6577,5237,7775,9660,3480,3579,2993,5648,2672,5186,7131,5503,3430,4866,433,8393,9860,6737,9866,3424,7013,5306,9778,7569], () => (__webpack_exec__(9655)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[collectionAddress].js.map