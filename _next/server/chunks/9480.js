"use strict";
exports.id = 9480;
exports.ids = [9480];
exports.modules = {

/***/ 60163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cb": () => (/* binding */ promotedGradientClass),
/* harmony export */   "Jb": () => (/* binding */ walletIconClass),
/* harmony export */   "Xz": () => (/* binding */ walletSelectWrapperClass),
/* harmony export */   "hC": () => (/* binding */ modalWrapperClass),
/* harmony export */   "xR": () => (/* binding */ desktopWalletSelectionClass)
/* harmony export */ });
var desktopWalletSelectionClass = '_6h9tv96';
var modalWrapperClass = '_6h9tv95 _6h9tv94';
var promotedGradientClass = '_1nzuaz73xv _6h9tv92';
var walletIconClass = '_6h9tv98';
var walletSelectWrapperClass = '_6h9tv97';

/***/ }),

/***/ 39480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85306);
/* harmony import */ var config_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86930);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76166);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16895);
/* harmony import */ var hooks_useEagerConnect_bmp_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22946);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([config_wallet__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__, hooks_useEagerConnect_bmp_ts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_10__]);
([config_wallet__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__, hooks_useEagerConnect_bmp_ts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// @ts-ignore
// eslint-disable-next-line import/extensions




const ConnectWalletButton = ({ children , ...props })=>{
    const handleActive = (0,hooks_useEagerConnect_bmp_ts__WEBPACK_IMPORTED_MODULE_5__/* .useActiveHandle */ .v0)();
    const { login  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { t , currentLanguage: { code  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useConnect)();
    const { chainId  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_3__/* .useActiveChainId */ .g)();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const docLink = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,config_wallet__WEBPACK_IMPORTED_MODULE_2__/* .getDocLink */ .N2)(code), [
        code
    ]);
    const handleClick = ()=>{
        if (typeof __NEZHA_BRIDGE__ !== "undefined") {
            handleActive();
        } else {
            setOpen(true);
        }
    };
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,config_wallet__WEBPACK_IMPORTED_MODULE_2__/* .createWallets */ .Ut)(chainId, connectAsync), [
        chainId,
        connectAsync
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                onClick: handleClick,
                ...props,
                children: children || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Trans__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    children: "Connect Wallet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_10__/* .WalletModalV2 */ .b2, {
                docText: t("Learn How to Connect"),
                docLink: docLink,
                isOpen: open,
                wallets: wallets,
                login: login,
                onDismiss: ()=>setOpen(false)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWalletButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mt": () => (/* binding */ ConnectorNames),
/* harmony export */   "N2": () => (/* binding */ getDocLink),
/* harmony export */   "Ut": () => (/* binding */ createWallets)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8483);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40495);



var ConnectorNames;
(function(ConnectorNames) {
    ConnectorNames["MetaMask"] = "metaMask";
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletConnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["Blocto"] = "blocto";
    ConnectorNames["WalletLink"] = "coinbaseWallet";
})(ConnectorNames || (ConnectorNames = {}));
const delay = (t)=>new Promise((resolve)=>setTimeout(resolve, t));
const createQrCode = (chainId, connect)=>async ()=>{
        connect({
            connector: _utils_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .walletConnectNoQrCodeConnector */ .kF,
            chainId
        });
        // wait for WalletConnect to setup in order to get the uri
        await delay(100);
        const { uri  } = (await _utils_wagmi__WEBPACK_IMPORTED_MODULE_1__/* .walletConnectNoQrCodeConnector.getProvider */ .kF.getProvider()).connector;
        return uri;
    };
const walletsConfig = ({ chainId , connect  })=>{
    const qrCode = createQrCode(chainId, connect);
    return [
        {
            id: "metamask",
            title: "Metamask",
            icon: "/images/wallets/metamask.png",
            installed:  false && 0,
            connectorId: ConnectorNames.MetaMask,
            deepLink: "https://metamask.app.link/dapp/pancakeswap.finance/",
            qrCode,
            downloadLink: "https://metamask.app.link/dapp/pancakeswap.finance/"
        },
        {
            id: "binance",
            title: "Binance Wallet",
            icon: "/images/wallets/binance.png",
            installed:  false && 0,
            connectorId: ConnectorNames.BSC,
            guide: {
                desktop: "https://www.bnbchain.org/en/binance-wallet"
            },
            downloadLink: {
                desktop: react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isFirefox ? "https://addons.mozilla.org/en-US/firefox/addon/binance-chain/?src=search" : "https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp"
            }
        },
        {
            id: "coinbase",
            title: "Coinbase Wallet",
            icon: "/images/wallets/coinbase.png",
            connectorId: ConnectorNames.WalletLink
        },
        {
            id: "trust",
            title: "Trust Wallet",
            icon: "/images/wallets/trust.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && // SafePal has isTrust flag
            (0),
            deepLink: "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://pancakeswap.finance/",
            downloadLink: {
                desktop: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph/related"
            },
            qrCode
        },
        {
            id: "walletconnect",
            title: "WalletConnect",
            icon: "/images/wallets/walletconnect.png",
            connectorId: ConnectorNames.WalletConnect
        },
        {
            id: "opera",
            title: "Opera Wallet",
            icon: "/images/wallets/opera.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && 0,
            downloadLink: "https://www.opera.com/crypto/next"
        },
        {
            id: "brave",
            title: "Brave Wallet",
            icon: "/images/wallets/brave.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && 0
        },
        {
            id: "math",
            title: "MathWallet",
            icon: "/images/wallets/mathwallet.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && 0,
            qrCode
        },
        {
            id: "tokenpocket",
            title: "TokenPocket",
            icon: "/images/wallets/tokenpocket.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && 0,
            qrCode
        },
        {
            id: "safepal",
            title: "SafePal",
            icon: "/images/wallets/safepal.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && 0,
            qrCode
        },
        {
            id: "coin98",
            title: "Coin98",
            icon: "/images/wallets/coin98.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && (0),
            qrCode
        },
        {
            id: "blocto",
            title: "Blocto",
            icon: "/images/wallets/blocto.png",
            connectorId: ConnectorNames.Injected,
            installed:  false && 0,
            qrCode
        }, 
    ];
};
const createWallets = (chainId, connect)=>{
    const hasInjected =  false && 0;
    const config = walletsConfig({
        chainId,
        connect
    });
    return hasInjected && config.some((c)=>c.installed && c.connectorId === ConnectorNames.Injected) ? config // add injected icon if none of injected type wallets installed
     : [
        ...config,
        {
            id: "injected",
            title: "Injected",
            icon: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            connectorId: ConnectorNames.Injected,
            installed:  false && 0
        }, 
    ];
};
const docLangCodeMapping = {
    it: "italian",
    ja: "japanese",
    fr: "french",
    tr: "turkish",
    vi: "vietnamese",
    id: "indonesian",
    "zh-cn": "chinese",
    "pt-br": "portuguese-brazilian"
};
const getDocLink = (code)=>docLangCodeMapping[code] ? `https://docs.pancakeswap.finance/v/${docLangCodeMapping[code]}/get-started/connection-guide` : `https://docs.pancakeswap.finance/get-started/connection-guide`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30016);
/* harmony import */ var _pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92151);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36204);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_clearUserStates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22944);
/* harmony import */ var _useActiveChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76166);
/* harmony import */ var _useSessionChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state__WEBPACK_IMPORTED_MODULE_2__, _utils_clearUserStates__WEBPACK_IMPORTED_MODULE_4__, _useActiveChainId__WEBPACK_IMPORTED_MODULE_5__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_9__]);
([state__WEBPACK_IMPORTED_MODULE_2__, _utils_clearUserStates__WEBPACK_IMPORTED_MODULE_4__, _useActiveChainId__WEBPACK_IMPORTED_MODULE_5__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useAuth = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const { connectAsync , connectors  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)();
    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();
    const { chainId  } = (0,_useActiveChainId__WEBPACK_IMPORTED_MODULE_5__/* .useActiveChainId */ .g)();
    const [, setSessionChainId] = (0,_useSessionChainId__WEBPACK_IMPORTED_MODULE_6__/* .useSessionChainId */ .o)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    const login = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (connectorID)=>{
        const findConnector = connectors.find((c)=>c.id === connectorID);
        try {
            const connected = await connectAsync({
                connector: findConnector,
                chainId
            });
            if (!connected.chain.unsupported && connected.chain.id !== chainId) {
                (0,_pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("chainId", connected.chain.id);
                setSessionChainId(connected.chain.id);
            }
            return connected;
        } catch (error) {
            window?.localStorage?.removeItem(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* .connectorLocalStorageKey */ .O);
            if (error instanceof wagmi__WEBPACK_IMPORTED_MODULE_3__.ConnectorNotFoundError) {
                throw new _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_9__/* .WalletConnectorNotFoundError */ .nx();
            }
            if (error instanceof wagmi__WEBPACK_IMPORTED_MODULE_3__.SwitchChainNotSupportedError || error instanceof wagmi__WEBPACK_IMPORTED_MODULE_3__.SwitchChainError) {
                throw new _pancakeswap_ui_wallets__WEBPACK_IMPORTED_MODULE_9__/* .WalletSwitchChainError */ .sB(t("Unable to switch network. Please try it on your wallet"));
            }
        }
        return undefined;
    }, [
        connectors,
        connectAsync,
        chainId,
        setSessionChainId,
        t
    ]);
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            await disconnectAsync();
        } catch (error) {
            console.error(error);
        } finally{
            (0,_utils_clearUserStates__WEBPACK_IMPORTED_MODULE_4__/* .clearUserStates */ .J)(dispatch, {
                chainId: chain?.id,
                isDeactive: true
            });
        }
    }, [
        disconnectAsync,
        dispatch,
        chain?.id
    ]);
    return {
        login,
        logout
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D0": () => (/* binding */ getAccount),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "v0": () => (/* binding */ useActiveHandle)
/* harmony export */ });
/* unused harmony export useEagerConnect */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91397);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_wagmi_connectors_miniProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88475);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_mpBridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79319);
/* harmony import */ var _utils_wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-console */ 






const injected = new _pancakeswap_wagmi_connectors_miniProgram__WEBPACK_IMPORTED_MODULE_2__/* .MiniProgramConnector */ .M({
    chains: _utils_wagmi__WEBPACK_IMPORTED_MODULE_5__/* .chains */ .p5,
    getWeb3Provider: utils_mpBridge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP
});
const getAccount = ()=>injected.getAccount();
const useActive = ()=>{
    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>connectAsync({
            connector: injected
        }).catch((error)=>{
            console.log("\uD83D\uDE80 ~ file: useEagerConnect.ts ~ line 183 ~ activate ~ error", error);
        // captureException(error)
        }), [
        connectAsync
    ]);
};
const useEagerConnect = ()=>{
// noop
};
const useActiveHandle = ()=>{
    const handleActive = useActive();
    const { toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .p)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const main = async ()=>{
        /**
     *  backward
     */ console.log("~ before getAccount");
        const address = await getAccount();
        console.log("~ after getAccount", address);
        return new Promise((resolve)=>{
            handleActive().then(resolve);
        });
    };
    return async (showToast = true)=>{
        await main();
        const address = await getAccount();
        if (address && showToast) {
            toastSuccess(t("Success"), "Wallet connected");
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEagerConnect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ clearUserStates)
/* harmony export */ });
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18770);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17943);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30016);
/* harmony import */ var _localStorageOrders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4085);
/* harmony import */ var _getLocalStorageItemKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26995);






const clearUserStates = (dispatch, { chainId , newChainId , isDeactive =false  })=>{
    dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_1__/* .resetUserState */ .tZ)({
        chainId,
        newChainId
    }));
    dispatch((0,state_global_actions__WEBPACK_IMPORTED_MODULE_1__/* .toggleFarmTransactionModal */ .Xw)({
        showModal: false
    }));
    (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.configureScope)((scope)=>scope.setUser(null));
    // Only clear localStorage when user disconnect,switch address no need clear it.
    if (isDeactive) {
        window?.localStorage?.removeItem(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* .connectorLocalStorageKey */ .O);
    }
    const lsOrderKeys = (0,_getLocalStorageItemKeys__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_localStorageOrders__WEBPACK_IMPORTED_MODULE_3__/* .LS_ORDERS */ .EM);
    lsOrderKeys.forEach((lsOrderKey)=>window?.localStorage?.removeItem(lsOrderKey));
    window?.localStorage?.removeItem(config_constants__WEBPACK_IMPORTED_MODULE_2__/* .PREDICTION_TOOLTIP_DISMISS_KEY */ .bF);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getLocalStorageItemKeys = (prefix)=>{
    const result = [];
    for(let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).startsWith(prefix)) {
            result.push(localStorage.key(i));
        }
    }
    return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocalStorageItemKeys);


/***/ }),

/***/ 79319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$1": () => (/* binding */ useInterceptLink),
/* harmony export */   "$L": () => (/* binding */ useInjectI18n),
/* harmony export */   "P3": () => (/* binding */ useSystemInfo),
/* harmony export */   "Ux": () => (/* binding */ bridgeUtils),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "wj": () => (/* binding */ listenOnBnMessage)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable no-console */ const cbList = {};
const onCallbackIdList = {};
const listenOnBnMessage = ()=>{
    if (false) {}
};
let id = 0;
const prefix = Math.random() * 1000;
const postMessage = ({ action , payload , cb  })=>{
    const finalId = `${prefix}-${id}`;
    window.bn.miniProgram.postMessage({
        action,
        id: finalId,
        payload
    });
    cbList[finalId] = cb;
    id++;
    return finalId;
};
function getWeb3Provider() {
    return {
        on (event, cb) {
            postMessage({
                action: "on",
                payload: {
                    event
                }
            });
            onCallbackIdList[event] = cb;
        },
        request (params) {
            return new Promise((resolve, reject)=>{
                postMessage({
                    action: "request",
                    payload: params,
                    cb: (payload)=>{
                        if (payload?.error) {
                            reject(payload?.message);
                        } else {
                            resolve(payload);
                        }
                    }
                });
            });
        },
        removeEventListener (event) {
            if (onCallbackIdList[event]) {
                onCallbackIdList[event] = undefined;
            }
        }
    };
}
const _bridgeUtils = {
    jump (payload) {
        return new Promise((resolve)=>{
            postMessage({
                action: "jump",
                payload,
                cb: resolve
            });
        });
    },
    getSystemInfo () {
        return new Promise((resolve)=>{
            postMessage({
                action: "getSystemInfo",
                cb: resolve
            });
        });
    },
    toExternal (payload) {
        return new Promise((resolve)=>{
            postMessage({
                action: "toExternal",
                payload,
                cb: resolve
            });
        });
    }
};
const bridgeUtils = {
    toWallet () {
        return new Promise((resolve)=>{
            postMessage({
                action: "toWallet",
                cb: resolve
            });
        });
    }
};
// Need to call getSystemInfo only once
let globalInfo;
const useSystemInfo = ()=>{
    const { 0: info , 1: setInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(globalInfo);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!globalInfo && typeof __NEZHA_BRIDGE__ !== "undefined") {
            _bridgeUtils.getSystemInfo().then((value)=>{
                globalInfo = value;
                setInfo(value);
            });
        }
    }, []);
    return info;
};
const mpWebviewPath = new Set([
    "/farms/history",
    "/pools/history"
]);
const handleLinkClick = (e, router)=>{
    // @ts-ignore
    const href = e.target?.closest("a")?.href || "";
    if (href) {
        const url = new URL(href);
        const [entry, ...params] = url.pathname.slice(1).split("/");
        if (entry === "add") {
            const [currency1, currency2] = params;
            _bridgeUtils.jump({
                path: entry,
                query: {
                    currency1,
                    currency2
                }
            });
        } else if (url.pathname === "/swap") {
            const query = url.search ? url.search.slice(1).split("=") : undefined;
            _bridgeUtils.jump({
                path: "swap",
                query: query ? {
                    [query[0]]: query[1]
                } : undefined
            });
        } else if (url.pathname === "/pools") {
            _bridgeUtils.jump({
                path: "pools"
            });
        } else if (url.pathname === "/farms") {
            _bridgeUtils.jump({
                path: "farms"
            });
        } else if (mpWebviewPath.has(url.pathname)) {
            const newPathname = `/_mp${url.pathname}`;
            router.push(newPathname);
        } else {
            _bridgeUtils.toExternal({
                url: url.href
            });
        }
        e.stopPropagation();
        e.preventDefault();
    }
};
const useInterceptLink = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handle = (e)=>{
            handleLinkClick(e, router);
        };
        document.body.addEventListener("click", handle, true);
        return ()=>{
            document.body.removeEventListener("click", handle, true);
        };
    }, [
        router
    ]);
};
const code2Lang = _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .languageList.reduce */ .s0.reduce((prev, next)=>{
    // eslint-disable-next-line no-param-reassign
    prev[next.code.toLowerCase()] = next;
    return prev;
}, {});
const useInjectI18n = ()=>{
    const { 0: injected , 1: setInjected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const systemInfo = useSystemInfo();
    const { setLanguage  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const main = async ()=>{
            if (systemInfo) {
                const { language  } = systemInfo;
                const currLanguage = code2Lang[language.toLowerCase()];
                if (currLanguage) {
                    await setLanguage(currLanguage);
                }
                setInjected(true);
            }
        };
        main();
    }, [
        systemInfo,
        setLanguage
    ]);
    return {
        injected
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeb3Provider);


/***/ }),

/***/ 83536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b2": () => (/* binding */ WalletModalV2),
/* harmony export */   "nx": () => (/* binding */ WalletConnectorNotFoundError),
/* harmony export */   "sB": () => (/* binding */ WalletSwitchChainError)
/* harmony export */ });
/* unused harmony exports useSelectedWallet, walletLocalStorageKey */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65726);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52981);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3125);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64492);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19206);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(84281);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84507);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79917);
/* harmony import */ var _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _components_Intro__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([jotai__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _components_Intro__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Qrcode = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.lazy)(()=>__webpack_require__.e(/* import() */ 8668).then(__webpack_require__.bind(__webpack_require__, 8668)));
class WalletConnectorNotFoundError extends Error {
}
class WalletSwitchChainError extends Error {
}
const errorAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)("");
const selectedWalletAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)(null);
function useSelectedWallet() {
    // @ts-ignore
    return (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(selectedWalletAtom);
}
const TabContainer = ({ children , docLink , docText  })=>{
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
        position: "relative",
        zIndex: "modal",
        className: _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__/* .modalWrapperClass */ .hC,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                position: "absolute",
                style: {
                    top: "-50px"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    activeIndex: index,
                    onItemClick: setIndex,
                    gap: "0px",
                    isColorInverse: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            children: t("Connect Wallet")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            children: t("What’s a Web3 Wallet?")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                display: "flex",
                position: "relative",
                background: "gradientCardHeader",
                borderRadius: "card",
                borderBottomRadius: {
                    xs: "0",
                    md: "card"
                },
                zIndex: "modal",
                width: "full",
                children: [
                    index === 0 && children,
                    index === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_10__/* .StepIntro */ .r, {
                        docLink: docLink,
                        docText: docText
                    })
                ]
            })
        ]
    });
};
const MOBILE_DEFAULT_DISPLAY_COUNT = 6;
function MobileModal({ wallets , connectWallet , docLink , docText  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const [selected] = useSelectedWallet();
    const [error] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(errorAtom);
    const installedWallets = wallets.filter((w)=>w.installed);
    const walletsToShow = wallets.filter((w)=>{
        if (installedWallets.length) {
            return w.installed;
        }
        return w.installed !== false || w.deepLink;
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
        width: "full",
        children: [
            error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                style: {
                    gap: "24px"
                },
                textAlign: "center",
                p: "24px",
                children: [
                    selected && typeof selected.icon === "string" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        src: selected.icon,
                        width: 108,
                        height: 108
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            maxWidth: "246px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                            message: error
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                color: "textSubtle",
                small: true,
                p: "24px",
                children: t("Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                flex: 1,
                py: "16px",
                style: {
                    maxHeight: "230px"
                },
                overflow: "auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletSelect, {
                    displayCount: MOBILE_DEFAULT_DISPLAY_COUNT,
                    wallets: walletsToShow,
                    onClick: (wallet)=>{
                        connectWallet(wallet);
                        if (wallet.deepLink && wallet.installed === false) {
                            window.open(wallet.deepLink);
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                p: "24px",
                borderTop: "1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            textAlign: "center",
                            color: "textSubtle",
                            as: "p",
                            mb: "24px",
                            children: t("Haven’t got a crypto wallet yet?")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        as: "a",
                        href: docLink,
                        variant: "subtle",
                        width: "100%",
                        external: true,
                        children: docText
                    })
                ]
            })
        ]
    });
}
function WalletSelect({ wallets , onClick , displayCount =5  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { 0: showMore , 1: setShowMore  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const walletsToShow = showMore ? wallets : wallets.slice(0, displayCount);
    const [selected] = useSelectedWallet();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
        display: "grid",
        overflowY: "auto",
        overflowX: "hidden",
        px: {
            xs: "16px",
            sm: "48px"
        },
        pb: "12px",
        className: _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__/* .walletSelectWrapperClass */ .Xz,
        children: [
            walletsToShow.map((wallet)=>{
                const isImage = typeof wallet.icon === "string";
                const Icon = wallet.icon;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    variant: "text",
                    height: "auto",
                    as: _pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p,
                    display: "flex",
                    alignItems: "center",
                    style: {
                        justifyContent: "flex-start",
                        letterSpacing: "normal",
                        padding: "0"
                    },
                    flexDirection: "column",
                    onClick: ()=>onClick(wallet),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                            className: wallet.installed && _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__/* .promotedGradientClass */ .Cb,
                            p: "2px",
                            borderRadius: "12px",
                            mb: "4px",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                                bgc: "dropdown",
                                display: "flex",
                                position: "relative",
                                justifyContent: "center",
                                alignItems: "center",
                                className: _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__/* .walletIconClass */ .Jb,
                                style: {
                                    borderRadius: "13px"
                                },
                                children: [
                                    isImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        src: Icon,
                                        width: 50,
                                        height: 50
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                        width: 24,
                                        height: 24,
                                        color: "textSubtle"
                                    }),
                                    wallet.id === selected?.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                                        position: "absolute",
                                        inset: "0",
                                        bgc: "secondary",
                                        opacity: "0.5",
                                        borderRadius: "12px"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            textAlign: "center",
                            children: wallet.title
                        })
                    ]
                }, wallet.id);
            }),
            !showMore && wallets.length > displayCount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    height: "auto",
                    variant: "text",
                    as: _pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p,
                    flexDirection: "column",
                    onClick: ()=>setShowMore(true),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                            className: _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__/* .walletIconClass */ .Jb,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bgc: "dropdown",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                color: "text"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            textAlign: "center",
                            mt: "4px",
                            children: t("More")
                        })
                    ]
                })
            })
        ]
    });
}
const walletLocalStorageKey = "wallet";
const lastUsedWalletNameAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)("");
lastUsedWalletNameAtom.onMount = (set)=>{
    const preferred = localStorage?.getItem(walletLocalStorageKey);
    if (preferred) {
        set(preferred);
    }
};
function sortWallets(wallets, lastUsedWalletName) {
    const sorted = [
        ...wallets
    ].sort((a, b)=>{
        if (a.installed === b.installed) return 0;
        return a.installed === true ? -1 : 1;
    });
    if (!lastUsedWalletName) {
        return sorted;
    }
    const foundLastUsedWallet = wallets.find((w)=>w.title === lastUsedWalletName);
    if (!foundLastUsedWallet) return sorted;
    return [
        foundLastUsedWallet,
        ...sorted.filter((w)=>w.id !== foundLastUsedWallet.id)
    ];
}
function DesktopModal({ wallets: wallets_ , connectWallet , docLink , docText  }) {
    const wallets = wallets_.filter((w)=>{
        return w.installed !== false || !w.installed && (w.guide || w.downloadLink || w.qrCode);
    });
    const [selected] = useSelectedWallet();
    const [error] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(errorAtom);
    const { 0: qrCode , 1: setQrCode  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const connectToWallet = (wallet)=>{
        connectWallet(wallet);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                display: "flex",
                flexDirection: "column",
                bg: "backgroundAlt",
                py: "32px",
                zIndex: "modal",
                borderRadius: "card",
                className: _WalletModal_css__WEBPACK_IMPORTED_MODULE_6__/* .desktopWalletSelectionClass */ .xR,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                        px: "48px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                color: "color",
                                as: "h4",
                                children: t("Connect Wallet")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                small: true,
                                pt: "24px",
                                pb: "32px",
                                children: t("Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletSelect, {
                        wallets: wallets,
                        onClick: (w)=>{
                            connectToWallet(w);
                            setQrCode(undefined);
                            if (w.qrCode) {
                                w.qrCode().then((uri)=>{
                                    setQrCode(uri);
                                });
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                flex: 1,
                mx: "24px",
                display: {
                    xs: "none",
                    sm: "flex"
                },
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    style: {
                        gap: "24px"
                    },
                    textAlign: "center",
                    children: [
                        !selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Intro, {
                            docLink: docLink,
                            docText: docText
                        }),
                        selected && selected.installed !== false && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                typeof selected.icon === "string" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    src: selected.icon,
                                    width: 108,
                                    height: 108
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    as: "h1",
                                    fontSize: "20px",
                                    color: "secondary",
                                    children: [
                                        t("Opening"),
                                        " ",
                                        selected.title
                                    ]
                                }),
                                error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorContent, {
                                    message: error,
                                    onRetry: ()=>connectToWallet(selected)
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    children: t("Please confirm in %wallet%", {
                                        wallet: selected.title
                                    })
                                })
                            ]
                        }),
                        selected && selected.installed === false && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotInstalled, {
                            qrCode: qrCode,
                            wallet: selected
                        })
                    ]
                })
            })
        ]
    });
}
function WalletModalV2(props) {
    const { wallets: _wallets , login , docLink , docText , ...rest } = props;
    const [lastUsedWalletName] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(lastUsedWalletNameAtom);
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>sortWallets(_wallets, lastUsedWalletName), [
        _wallets,
        lastUsedWalletName
    ]);
    const [, setSelected] = useSelectedWallet();
    const [, setError] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(errorAtom);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const imageSources = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>wallets.map((w)=>w.icon).filter((icon)=>typeof icon === "string").concat("https://cdn.pancakeswap.com/wallets/wallet_intro.png"), [
        wallets
    ]);
    (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_1__/* .usePreloadImages */ .uE)(imageSources.slice(0, MOBILE_DEFAULT_DISPLAY_COUNT));
    const connectWallet = (wallet)=>{
        setSelected(wallet);
        setError("");
        if (wallet.installed !== false) {
            login(wallet.connectorId).then((v)=>{
                if (v) {
                    localStorage.setItem(walletLocalStorageKey, wallet.title);
                }
            }).catch((err)=>{
                if (err instanceof WalletConnectorNotFoundError) {
                    setError(t("no provider found"));
                } else if (err instanceof WalletSwitchChainError) {
                    setError(err.message);
                } else {
                    setError(t("Error connecting, please authorize wallet to access."));
                }
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .ModalV2 */ .k, {
        closeOnOverlayClick: true,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* .ModalWrapper */ .AB, {
            onDismiss: props.onDismiss,
            style: {
                overflow: "visible",
                border: "none"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                position: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabContainer, {
                    docLink: docLink,
                    docText: docText,
                    children: react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileModal, {
                        connectWallet: connectWallet,
                        wallets: wallets,
                        docLink: docLink,
                        docText: docText
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopModal, {
                        connectWallet: connectWallet,
                        wallets: wallets,
                        docLink: docLink,
                        docText: docText
                    })
                })
            })
        })
    });
}
const Intro = ({ docLink , docText  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                as: "h1",
                fontSize: "20px",
                color: "secondary",
                children: t("Haven’t got a wallet yet?")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                src: "https://cdn.pancakeswap.com/wallets/wallet_intro.png",
                width: 198,
                height: 178
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                color: "backgroundAlt",
                variant: "subtle",
                href: docLink,
                children: docText
            })
        ]
    });
};
const NotInstalled = ({ wallet , qrCode  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                as: "h1",
                fontSize: "20px",
                color: "secondary",
                children: t("%wallet% is not installed", {
                    wallet: wallet.title
                })
            }),
            qrCode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_7__/* .AtomBox */ .p, {
                    overflow: "hidden",
                    borderRadius: "card",
                    style: {
                        width: "288px",
                        height: "288px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Qrcode, {
                        url: qrCode,
                        image: typeof wallet.icon === "string" ? wallet.icon : undefined
                    })
                })
            }),
            !qrCode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                maxWidth: "246px",
                m: "auto",
                children: t("Please install the %wallet% browser extension to connect the %wallet% wallet.", {
                    wallet: wallet.title
                })
            }),
            wallet.guide && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                variant: "subtle",
                as: "a",
                href: getDesktopLink(wallet.guide),
                external: true,
                children: getDesktopText(wallet.guide, t("Setup Guide"))
            }),
            wallet.downloadLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                variant: "subtle",
                as: "a",
                href: getDesktopLink(wallet.downloadLink),
                external: true,
                children: getDesktopText(wallet.downloadLink, t("Install"))
            })
        ]
    });
};
const ErrorMessage = ({ message  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        bold: true,
        color: "failure",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                width: "16px",
                color: "failure",
                style: {
                    verticalAlign: "middle"
                }
            }),
            " ",
            message
        ]
    });
const ErrorContent = ({ onRetry , message  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                message: message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                variant: "subtle",
                onClick: onRetry,
                children: t("Retry")
            })
        ]
    });
};
const getDesktopLink = (linkDevice)=>typeof linkDevice === "string" ? linkDevice : typeof linkDevice.desktop === "string" ? linkDevice.desktop : linkDevice.desktop?.url;
const getDesktopText = (linkDevice, fallback)=>typeof linkDevice === "string" ? fallback : typeof linkDevice.desktop === "string" ? fallback : linkDevice.desktop?.text ?? fallback;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ StepIntro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52981);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98841);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97131);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84281);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





const IntroSteps = [
    {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
            children: "Your first step in the DeFi world"
        }),
        icon: "https://cdn.pancakeswap.com/wallets/wallet_intro.png",
        description: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
            children: "A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more."
        })
    },
    {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
            children: "Login using a wallet connection"
        }),
        icon: "https://cdn.pancakeswap.com/wallets/world_lock.png",
        description: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
            children: "Instead of setting up new accounts and passwords for every website, simply set up your wallet in one go, and connect it to your favorite DApps."
        })
    }, 
];
const StepDot = ({ active , place , onClick  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_3__/* .AtomBox */ .p, {
        padding: "4px",
        onClick: onClick,
        cursor: "pointer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_3__/* .AtomBox */ .p, {
            bgc: active ? "secondary" : "inputSecondary",
            width: "56px",
            height: "8px",
            borderLeftRadius: place === "left" ? "card" : "0",
            borderRightRadius: place === "right" ? "card" : "0"
        })
    });
const StepIntro = ({ docLink , docText  })=>{
    const { 0: step , 1: setStep  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const introStep = IntroSteps[step];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_3__/* .AtomBox */ .p, {
        display: "flex",
        width: "full",
        flexDirection: "column",
        style: {
            gap: "24px"
        },
        mx: "auto",
        my: "48px",
        textAlign: "center",
        alignItems: "center",
        children: [
            introStep && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        as: "h2",
                        color: "secondary",
                        children: introStep.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        m: "auto",
                        src: introStep.icon,
                        width: 198,
                        height: 178
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        maxWidth: "368px",
                        m: "auto",
                        small: true,
                        color: "textSubtle",
                        children: introStep.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_ui_components_AtomBox__WEBPACK_IMPORTED_MODULE_3__/* .AtomBox */ .p, {
                display: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepDot, {
                        place: "left",
                        active: step === 0,
                        onClick: ()=>setStep(0)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepDot, {
                        place: "right",
                        active: step === 1,
                        onClick: ()=>setStep(1)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                minHeight: 40,
                variant: "subtle",
                external: true,
                as: _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                color: "backgroundAlt",
                href: docLink,
                children: docText
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64492:
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
            d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
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

/***/ 12841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const getBorderRadius = ({ scale  })=>scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0";
const getPadding = ({ scale  })=>scale === "md" ? "8px" : "16px";
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-e10c0dd0-0"
})`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: ${getPadding};
  border-radius: ${getBorderRadius};
  font-size: 16px;
  font-weight: 600;

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-grow: 0;
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.color}
`;
Tab.defaultProps = {
    scale: "md"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);


/***/ }),

/***/ 3125:
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
/* harmony import */ var _Box_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_Flex__WEBPACK_IMPORTED_MODULE_3__]);
_Box_Flex__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box_Flex__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-28993f86-0"
})`
  border-bottom: 2px solid ${({ theme  })=>theme.colors.input};
  overflow-x: scroll;
  padding: ${({ fullWidth  })=>fullWidth ? 0 : "16px"};

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box_Flex__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-28993f86-1"
})`
  justify-content: space-between;

  & > button + button {
    margin-left: ${({ gap  })=>gap || "4px"};
  }

  & > button {
    flex-grow: ${({ fullWidth  })=>fullWidth ? 1 : 0};
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-grow: ${({ fullWidth  })=>fullWidth ? 1 : 0};
  }

  flex-grow: ${({ fullWidth  })=>fullWidth ? 1 : 0};
`;
const ButtonMenu = ({ activeIndex =0 , onItemClick , children , fullWidth , gap , isColorInverse =false ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        p: [
            "0 4px",
            "0 16px"
        ],
        fullWidth: fullWidth,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inner, {
            fullWidth: fullWidth,
            gap: gap,
            children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
                const isActive = activeIndex === index;
                const color = isActive ? "backgroundAlt" : "textSubtle";
                const inverseColor = isActive ? "textSubtle" : "backgroundAlt";
                const backgroundColor = isActive ? "textSubtle" : "input";
                const inverseBackgroundColor = isActive ? "input" : "textSubtle";
                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, {
                    isActive,
                    onClick: onItemClick ? ()=>onItemClick(index) : undefined,
                    color: isColorInverse ? inverseColor : color,
                    backgroundColor: isColorInverse ? inverseBackgroundColor : backgroundColor
                });
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ModalV2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45201);
/* harmony import */ var _util_animationToolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78985);
/* harmony import */ var _util_getPortalRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74909);
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _ModalContext__WEBPACK_IMPORTED_MODULE_5__, _components_Overlay__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _ModalContext__WEBPACK_IMPORTED_MODULE_5__, _components_Overlay__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ModalV2({ isOpen , onDismiss , closeOnOverlayClick , children , ...props }) {
    const animationRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleOverlayDismiss = ()=>{
        if (closeOnOverlayClick) {
            onDismiss?.();
        }
    };
    const portal = (0,_util_getPortalRoot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    if (portal) {
        if (!isOpen) return null;
        return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.LazyMotion, {
            features: framer_motion__WEBPACK_IMPORTED_MODULE_1__.domMax,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                children: isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ModalContext__WEBPACK_IMPORTED_MODULE_5__/* .StyledModalWrapper */ .iI, {
                    ref: animationRef,
                    // @ts-ignore
                    onAnimationStart: ()=>(0,_util_animationToolkit__WEBPACK_IMPORTED_MODULE_6__/* .animationHandler */ .BI)(animationRef.current),
                    ..._util_animationToolkit__WEBPACK_IMPORTED_MODULE_6__/* .animationMap */ .Gc,
                    variants: _util_animationToolkit__WEBPACK_IMPORTED_MODULE_6__/* .animationVariants */ .ji,
                    transition: {
                        duration: 0.3
                    },
                    ...props,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Overlay__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            onClick: handleOverlayDismiss
                        }),
                        children
                    ]
                })
            })
        }), portal);
    }
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ connectorLocalStorageKey)
/* harmony export */ });
/* unused harmony export walletLocalStorageKey */
const connectorLocalStorageKey = "connectorIdv2";
const walletLocalStorageKey = "wallet";


/***/ }),

/***/ 92151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const replaceBrowserHistory = (key, value)=>{
    const url = new URL(window.location.href);
    if (!value) {
        url.searchParams.delete(key);
    } else {
        url.searchParams.set(key, String(value));
    }
    window.history.replaceState({}, "", url);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceBrowserHistory);


/***/ }),

/***/ 88475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ MiniProgramConnector)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51541);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8906);
/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74738);
// connectors/miniProgram/miniProgram.ts



var MiniProgramConnector = class extends wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector {
  constructor({ chains, getWeb3Provider }) {
    const options = {
      name: "BnInjected",
      shimDisconnect: false,
      shimChainChangedDisconnect: false
    };
    super({
      chains,
      options
    });
    this.id = "miniprogram";
    this.ready = typeof window !== "undefined" && !!window.bn;
    this.getWeb3Provider = getWeb3Provider;
  }
  async connect({ chainId } = {}) {
    try {
      const provider = await this.getProvider();
      if (!provider)
        throw new wagmi__WEBPACK_IMPORTED_MODULE_1__.ConnectorNotFoundError();
      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect);
      }
      this.emit("message", { type: "connecting" });
      const account = await this.getAccount();
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }
      return { account, chain: { id, unsupported }, provider };
    } catch (error) {
      if (this.isUserRejectedRequestError(error))
        throw new wagmi__WEBPACK_IMPORTED_MODULE_1__.UserRejectedRequestError(error);
      if (error.code === -32002)
        throw new wagmi__WEBPACK_IMPORTED_MODULE_1__.ResourceUnavailableError(error);
      throw error;
    }
  }
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider)
      throw new wagmi__WEBPACK_IMPORTED_MODULE_1__.ConnectorNotFoundError();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_0__.getAddress)(accounts[0]);
  }
  async getChainId() {
    return 56;
  }
  async getProvider() {
    if (typeof window !== "undefined") {
      this.provider = this.getWeb3Provider();
    }
    return this.provider;
  }
};



/***/ })

};
;
//# sourceMappingURL=9480.js.map