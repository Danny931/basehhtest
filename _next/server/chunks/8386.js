"use strict";
exports.id = 8386;
exports.ids = [8386];
exports.modules = {

/***/ 27156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h2": () => (/* binding */ GreyCard),
/* harmony export */   "hl": () => (/* binding */ LightCard),
/* harmony export */   "m5": () => (/* binding */ LightGreyCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-21be8dee-0"
})`
  width: ${({ width  })=>width ?? "100%"};
  padding: ${({ padding  })=>padding ?? "1.25rem"};
  border: ${({ border  })=>border};
  border-radius: ${({ borderRadius  })=>borderRadius ?? "16px"};
  background-color: ${({ theme  })=>theme.colors.background};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
const LightCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-1"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
`;
const LightGreyCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-2"
})`
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  background-color: ${({ theme  })=>theme.colors.background};
`;
const GreyCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
    componentId: "sc-21be8dee-3"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22672);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55817);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59536);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85306);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72135);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([state_user_hooks__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ExpertModal = ({ setShowConfirmExpertModal , setShowExpertModeAcknowledgement ,  })=>{
    const [, toggleExpertMode] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useExpertModeManager */ .DG)();
    const { 0: isRememberChecked , 1: setIsRememberChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isMobile  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        title: t("Expert Mode"),
        onBack: ()=>setShowConfirmExpertModal(false),
        onDismiss: ()=>setShowConfirmExpertModal(false),
        headerBackground: "gradientCardHeader",
        style: {
            width: isMobile ? "100%" : "436px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                variant: "warning",
                mb: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: t("Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                mb: "24px",
                children: t("Only use this mode if you know what you’re doing.")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                alignItems: "center",
                mb: "24px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        name: "confirmed",
                        type: "checkbox",
                        checked: isRememberChecked,
                        onChange: ()=>setIsRememberChecked(!isRememberChecked),
                        scale: "sm"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        ml: "10px",
                        color: "textSubtle",
                        style: {
                            userSelect: "none"
                        },
                        children: t("Don’t show this again")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                mb: "8px",
                id: "confirm-expert-mode",
                onClick: ()=>{
                    // eslint-disable-next-line no-alert
                    if (window.prompt(`Please type the word "confirm" to enable expert mode.`) === "confirm") {
                        toggleExpertMode();
                        setShowConfirmExpertModal(false);
                        if (isRememberChecked) {
                            setShowExpertModeAcknowledgement(false);
                        }
                    }
                },
                children: t("Turn On Expert Mode")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                variant: "secondary",
                onClick: ()=>{
                    setShowConfirmExpertModal(false);
                },
                children: t("Cancel")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpertModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h": () => (/* binding */ withCustomOnDismiss)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31436);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63961);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54908);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41022);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76071);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72135);
/* harmony import */ var config_constants_supportChains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20277);
/* harmony import */ var state_swap_useSwapActionHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2468);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76166);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24953);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19081);
/* harmony import */ var _TransactionSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21427);
/* harmony import */ var _ExpertModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51297);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73501);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_3__, state_swap_useSwapActionHandlers__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_6__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, _TransactionSettings__WEBPACK_IMPORTED_MODULE_9__, _ExpertModal__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__]);
([state_user_hooks__WEBPACK_IMPORTED_MODULE_3__, state_swap_useSwapActionHandlers__WEBPACK_IMPORTED_MODULE_5__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_6__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, _TransactionSettings__WEBPACK_IMPORTED_MODULE_9__, _ExpertModal__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ScrollableContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
    componentId: "sc-103f964c-0"
})`
  flex-direction: column;
  height: auto;
  ${({ theme  })=>theme.mediaQueries.xs} {
    max-height: 90vh;
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    max-height: none;
  }
`;
const withCustomOnDismiss = (Component)=>({ onDismiss , customOnDismiss , mode , ...props })=>{
        const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
            onDismiss?.();
            if (customOnDismiss) {
                customOnDismiss();
            }
        }, [
            customOnDismiss,
            onDismiss
        ]);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...props,
            mode: mode,
            onDismiss: handleDismiss
        });
    };
const SettingsModal = ({ onDismiss , mode  })=>{
    const { 0: showConfirmExpertModal , 1: setShowConfirmExpertModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useUserExpertModeAcknowledgementShow */ .wX)();
    const [expertMode, toggleExpertMode] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useExpertModeManager */ .DG)();
    const [singleHopOnly, setSingleHopOnly] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useUserSingleHopOnly */ .RO)();
    const [audioPlay, toggleSetAudioMode] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAudioModeManager */ .TO)();
    const [zapMode, toggleZapMode] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useZapModeManager */ .$f)();
    const [subgraphHealth, setSubgraphHealth] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSubgraphHealthIndicatorManager */ .YF)();
    const { onChangeRecipient  } = (0,state_swap_useSwapActionHandlers__WEBPACK_IMPORTED_MODULE_5__/* .useSwapActionHandlers */ ._)();
    const { chainId  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_6__/* .useActiveChainId */ .g)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$G)();
    const { isDark , setTheme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)();
    if (showConfirmExpertModal) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExpertModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            setShowConfirmExpertModal: setShowConfirmExpertModal,
            onDismiss: onDismiss,
            setShowExpertModeAcknowledgement: setShowExpertModeAcknowledgement
        });
    }
    const handleExpertModeToggle = ()=>{
        if (expertMode) {
            onChangeRecipient(null);
            toggleExpertMode();
        } else if (!showExpertModeAcknowledgement) {
            onChangeRecipient(null);
            toggleExpertMode();
        } else {
            setShowConfirmExpertModal(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        title: t("Settings"),
        headerBackground: "gradientCardHeader",
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScrollableContainer, {
            children: [
                mode === _types__WEBPACK_IMPORTED_MODULE_11__/* .SettingsMode.GLOBAL */ .a.GLOBAL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        pb: "24px",
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                bold: true,
                                textTransform: "uppercase",
                                fontSize: "18px",
                                color: "secondary",
                                mb: "24px",
                                children: t("Global")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                justifyContent: "space-between",
                                mb: "24px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        children: t("Dark mode")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        isDark: isDark,
                                        toggleTheme: ()=>setTheme(isDark ? "light" : "dark")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: "24px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                children: t("Subgraph Health Indicator")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .QuestionHelper */ .s, {
                                                text: t("Turn on NFT market subgraph health indicator all the time. Default is to show the indicator only when the network is delayed"),
                                                placement: "top-start",
                                                ml: "4px"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        id: "toggle-subgraph-health-button",
                                        checked: subgraphHealth,
                                        scale: "md",
                                        onChange: ()=>{
                                            setSubgraphHealth(!subgraphHealth);
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                }),
                mode === _types__WEBPACK_IMPORTED_MODULE_11__/* .SettingsMode.SWAP_LIQUIDITY */ .a.SWAP_LIQUIDITY && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            pt: "3px",
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    bold: true,
                                    textTransform: "uppercase",
                                    fontSize: "18px",
                                    color: "secondary",
                                    mb: "24px",
                                    children: t("Swaps & Liquidity")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionSettings__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                            ]
                        }),
                        config_constants_supportChains__WEBPACK_IMPORTED_MODULE_4__/* .SUPPORT_ZAP.includes */ .K.includes(chainId) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "24px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            children: t("Zap (Beta)")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .QuestionHelper */ .s, {
                                            text: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        children: t("Zap enables simple liquidity provision. Add liquidity with one token and one click, without manual swapping or token balancing.")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        children: t("If you experience any issue when adding or removing liquidity, please disable Zap and retry.")
                                                    })
                                                ]
                                            }),
                                            placement: "top-start",
                                            ml: "4px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    checked: zapMode,
                                    scale: "md",
                                    onChange: ()=>{
                                        toggleZapMode(!zapMode);
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "24px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            children: t("Expert Mode")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .QuestionHelper */ .s, {
                                            text: t("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."),
                                            placement: "top-start",
                                            ml: "4px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    id: "toggle-expert-mode-button",
                                    scale: "md",
                                    checked: expertMode,
                                    onChange: handleExpertModeToggle
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "24px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            children: t("Disable Multihops")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .QuestionHelper */ .s, {
                                            text: t("Restricts swaps to direct pairs only."),
                                            placement: "top-start",
                                            ml: "4px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    id: "toggle-disable-multihop-button",
                                    checked: singleHopOnly,
                                    scale: "md",
                                    onChange: ()=>{
                                        setSingleHopOnly(!singleHopOnly);
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "24px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            children: t("Flippy sounds")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .QuestionHelper */ .s, {
                                            text: t("Fun sounds to make a truly immersive pancake-flipping trading experience"),
                                            placement: "top-start",
                                            ml: "4px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    checked: audioPlay,
                                    onChange: toggleSetAudioMode,
                                    scale: "md"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5305);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54908);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85306);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94866);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






var SlippageError;
(function(SlippageError) {
    SlippageError["InvalidInput"] = "InvalidInput";
    SlippageError["RiskyLow"] = "RiskyLow";
    SlippageError["RiskyHigh"] = "RiskyHigh";
})(SlippageError || (SlippageError = {}));
var DeadlineError;
(function(DeadlineError) {
    DeadlineError["InvalidInput"] = "InvalidInput";
})(DeadlineError || (DeadlineError = {}));
const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
;
const THREE_DAYS_IN_SECONDS = 60 * 60 * 24 * 3;
const SlippageTabs = ()=>{
    const [userSlippageTolerance, setUserSlippageTolerance] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useUserSlippageTolerance */ .$2)();
    const [ttl, setTtl] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useUserTransactionTTL */ .A6)();
    const { 0: slippageInput , 1: setSlippageInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: deadlineInput , 1: setDeadlineInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const slippageInputIsValid = slippageInput === "" || (userSlippageTolerance / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2);
    const deadlineInputIsValid = deadlineInput === "" || (ttl / 60).toString() === deadlineInput;
    let slippageError;
    if (slippageInput !== "" && !slippageInputIsValid) {
        slippageError = SlippageError.InvalidInput;
    } else if (slippageInputIsValid && userSlippageTolerance < 50) {
        slippageError = SlippageError.RiskyLow;
    } else if (slippageInputIsValid && userSlippageTolerance > 500) {
        slippageError = SlippageError.RiskyHigh;
    } else {
        slippageError = undefined;
    }
    let deadlineError;
    if (deadlineInput !== "" && !deadlineInputIsValid) {
        deadlineError = DeadlineError.InvalidInput;
    } else {
        deadlineError = undefined;
    }
    const parseCustomSlippage = (value)=>{
        if (value === "" || inputRegex.test((0,utils__WEBPACK_IMPORTED_MODULE_2__/* .escapeRegExp */ .hr)(value))) {
            setSlippageInput(value);
            try {
                const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString());
                if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
                    setUserSlippageTolerance(valueAsIntFromRoundedFloat);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    const parseCustomDeadline = (value)=>{
        setDeadlineInput(value);
        try {
            const valueAsInt = Number.parseInt(value) * 60;
            if (!Number.isNaN(valueAsInt) && valueAsInt > 60 && valueAsInt < THREE_DAYS_IN_SECONDS) {
                setTtl(valueAsInt);
            } else {
                deadlineError = DeadlineError.InvalidInput;
            }
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                flexDirection: "column",
                mb: "24px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        mb: "12px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: t("Slippage Tolerance")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .QuestionHelper */ .s, {
                                text: t("Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."),
                                placement: "top-start",
                                ml: "4px"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        flexWrap: "wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                mt: "4px",
                                mr: "4px",
                                scale: "sm",
                                onClick: ()=>{
                                    setSlippageInput("");
                                    setUserSlippageTolerance(10);
                                },
                                variant: userSlippageTolerance === 10 ? "primary" : "tertiary",
                                children: "0.1%"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                mt: "4px",
                                mr: "4px",
                                scale: "sm",
                                onClick: ()=>{
                                    setSlippageInput("");
                                    setUserSlippageTolerance(50);
                                },
                                variant: userSlippageTolerance === 50 ? "primary" : "tertiary",
                                children: "0.5%"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                mr: "4px",
                                mt: "4px",
                                scale: "sm",
                                onClick: ()=>{
                                    setSlippageInput("");
                                    setUserSlippageTolerance(100);
                                },
                                variant: userSlippageTolerance === 100 ? "primary" : "tertiary",
                                children: "1.0%"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        width: "76px",
                                        mt: "4px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            scale: "sm",
                                            inputMode: "decimal",
                                            pattern: "^[0-9]*[.,]?[0-9]{0,2}$",
                                            placeholder: (userSlippageTolerance / 100).toFixed(2),
                                            value: slippageInput,
                                            onBlur: ()=>{
                                                parseCustomSlippage((userSlippageTolerance / 100).toFixed(2));
                                            },
                                            onChange: (event)=>{
                                                if (event.currentTarget.validity.valid) {
                                                    parseCustomSlippage(event.target.value.replace(/,/g, "."));
                                                }
                                            },
                                            isWarning: !slippageInputIsValid,
                                            isSuccess: ![
                                                10,
                                                50,
                                                100
                                            ].includes(userSlippageTolerance)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        color: "primary",
                                        bold: true,
                                        ml: "2px",
                                        children: "%"
                                    })
                                ]
                            })
                        ]
                    }),
                    !!slippageError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        fontSize: "14px",
                        color: slippageError === SlippageError.InvalidInput ? "red" : "#F3841E",
                        mt: "8px",
                        children: slippageError === SlippageError.InvalidInput ? t("Enter a valid slippage percentage") : slippageError === SlippageError.RiskyLow ? t("Your transaction may fail") : t("Your transaction may be frontrun")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: t("Tx deadline (mins)")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* .QuestionHelper */ .s, {
                                text: t("Your transaction will revert if it is left confirming for longer than this time."),
                                placement: "top-start",
                                ml: "4px"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            width: "52px",
                            mt: "4px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                scale: "sm",
                                inputMode: "numeric",
                                pattern: "^[0-9]+$",
                                isWarning: !!deadlineError,
                                onBlur: ()=>{
                                    parseCustomDeadline((ttl / 60).toString());
                                },
                                placeholder: (ttl / 60).toString(),
                                value: deadlineInput,
                                onChange: (event)=>{
                                    if (event.currentTarget.validity.valid) {
                                        parseCustomDeadline(event.target.value);
                                    }
                                }
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlippageTabs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68015);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11324);
/* harmony import */ var _SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SettingsModal__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_SettingsModal__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const GlobalSettings = ({ color , mr ="8px" , mode  })=>{
    const [onPresentSettingsModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SettingsModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        mode: mode
    }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            onClick: onPresentSettingsModal,
            variant: "text",
            scale: "sm",
            mr: mr,
            id: `open-settings-dialog-button-${mode}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                height: 24,
                width: 24,
                color: color || "textSubtle"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ SettingsMode)
/* harmony export */ });
var SettingsMode;
(function(SettingsMode) {
    SettingsMode["GLOBAL"] = "GLOBAL";
    SettingsMode["SWAP_LIQUIDITY"] = "SWAP_LIQUIDITY";
})(SettingsMode || (SettingsMode = {}));


/***/ }),

/***/ 20277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dm": () => (/* binding */ SUPPORT_ONLY_BSC),
/* harmony export */   "K": () => (/* binding */ SUPPORT_ZAP),
/* harmony export */   "RD": () => (/* binding */ SUPPORT_FARMS)
/* harmony export */ });
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43086);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__);

const SUPPORT_ONLY_BSC = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC
];
const SUPPORT_FARMS = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.ETHEREUM,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.GOERLI
];
const SUPPORT_ZAP = [
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC,
    _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.BSC_TESTNET
];


/***/ }),

/***/ 2468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useSwapActionHandlers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57246);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);
_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useSwapActionHandlers() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const onSwitchTokens = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__/* .switchCurrencies */ .KS)());
    }, [
        dispatch
    ]);
    const onCurrencySelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field, currency)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__/* .selectCurrency */ .j)({
            field,
            currencyId: currency?.isToken ? currency.address : currency?.isNative ? currency.symbol : ""
        }));
    }, [
        dispatch
    ]);
    const onUserInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field, typedValue)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__/* .typeInput */ .LC)({
            field,
            typedValue
        }));
    }, [
        dispatch
    ]);
    const onChangeRecipient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((recipient)=>{
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__/* .setRecipient */ .He)({
            recipient
        }));
    }, [
        dispatch
    ]);
    return {
        onSwitchTokens,
        onCurrencySelection,
        onUserInput,
        onChangeRecipient
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fn": () => (/* binding */ useAllSortedRecentTransactions),
/* harmony export */   "UA": () => (/* binding */ useNonBscFarmPendingTransaction),
/* harmony export */   "VQ": () => (/* binding */ usePendingTransactions),
/* harmony export */   "h7": () => (/* binding */ useTransactionAdder),
/* harmony export */   "kf": () => (/* binding */ useAllTransactions),
/* harmony export */   "tm": () => (/* binding */ useAllChainTransactions),
/* harmony export */   "ub": () => (/* binding */ useIsTransactionPending),
/* harmony export */   "wB": () => (/* binding */ useHasPendingApproval)
/* harmony export */ });
/* unused harmony exports useAllActiveChainTransactions, isTransactionRecent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65342);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9941);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63385);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9270);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12238);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// helper that can take a ethers library transaction response and add it to the list of transactions
function useTransactionAdder() {
    const { chainId , account  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .TL)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((response, { summary , translatableSummary , approval , claim , type , order , nonBscFarm  } = {})=>{
        if (!account) return;
        if (!chainId) return;
        const { hash  } = response;
        if (!hash) {
            throw Error("No transaction hash found.");
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__/* .addTransaction */ .dT)({
            hash,
            from: account,
            chainId,
            approval,
            summary,
            translatableSummary,
            claim,
            type,
            order,
            nonBscFarm
        }));
    }, [
        dispatch,
        chainId,
        account
    ]);
}
// returns all the transactions
function useAllTransactions() {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3React */ .Ge)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((s)=>s.transactions);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(state, (transactions)=>lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(transactions, (transactionDetails)=>transactionDetails.from.toLowerCase() === account?.toLowerCase()));
    }, [
        account,
        state
    ]);
}
function useAllSortedRecentTransactions() {
    const allTransactions = useAllTransactions();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return lodash_omitBy__WEBPACK_IMPORTED_MODULE_7___default()(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(allTransactions, (transactions)=>lodash_keyBy__WEBPACK_IMPORTED_MODULE_5___default()(lodash_orderBy__WEBPACK_IMPORTED_MODULE_6___default()(lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(transactions, (trxDetails)=>isTransactionRecent(trxDetails)), [
                "addedTime"
            ], "desc"), "hash")), (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()));
    }, [
        allTransactions
    ]);
}
// returns all the transactions for the current chain
function useAllActiveChainTransactions() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return useAllChainTransactions(chainId);
}
function useAllChainTransactions(chainId) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3React */ .Ge)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((s)=>s.transactions);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (chainId && state[chainId]) {
            return lodash_pickBy__WEBPACK_IMPORTED_MODULE_3___default()(state[chainId], (transactionDetails)=>transactionDetails.from.toLowerCase() === account?.toLowerCase());
        }
        return {};
    }, [
        account,
        chainId,
        state
    ]);
}
function useIsTransactionPending(transactionHash) {
    const transactions = useAllActiveChainTransactions();
    if (!transactionHash || !transactions[transactionHash]) return false;
    return !transactions[transactionHash].receipt;
}
/**
 * Returns whether a transaction happened in the last day (86400 seconds * 1000 milliseconds / second)
 * @param tx to check for recency
 */ function isTransactionRecent(tx) {
    return new Date().getTime() - tx.addedTime < 86400000;
}
// returns whether a token has a pending approval transaction
function useHasPendingApproval(tokenAddress, spender) {
    const allTransactions = useAllActiveChainTransactions();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>typeof tokenAddress === "string" && typeof spender === "string" && Object.keys(allTransactions).some((hash)=>{
            const tx = allTransactions[hash];
            if (!tx) return false;
            if (tx.receipt) {
                return false;
            }
            const { approval  } = tx;
            if (!approval) return false;
            return approval.spender === spender && approval.tokenAddress === tokenAddress && isTransactionRecent(tx);
        }), [
        allTransactions,
        spender,
        tokenAddress
    ]);
}
// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a, b) {
    return b.addedTime - a.addedTime;
}
function usePendingTransactions() {
    const allTransactions = useAllTransactions();
    const sortedRecentTransactions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const txs = Object.values(allTransactions).flatMap((trxObjects)=>Object.values(trxObjects));
        return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
    }, [
        allTransactions
    ]);
    const pending = sortedRecentTransactions.filter((tx)=>!tx.receipt || tx?.nonBscFarm?.status === _actions__WEBPACK_IMPORTED_MODULE_10__/* .FarmTransactionStatus.PENDING */ .np.PENDING).map((tx)=>tx.hash);
    const hasPendingTransactions = !!pending.length;
    const nonBscFarmPendingList = sortedRecentTransactions.filter((tx)=>pending.includes(tx.hash) && !!tx.nonBscFarm).map((tx)=>({
            txid: tx.hash,
            lpAddress: tx.nonBscFarm.lpAddress,
            type: tx.nonBscFarm.type
        }));
    return {
        hasPendingTransactions,
        nonBscFarmPendingList,
        pendingNumber: pending.length
    };
}
function useNonBscFarmPendingTransaction(lpAddress) {
    const { nonBscFarmPendingList  } = usePendingTransactions();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return nonBscFarmPendingList.filter((tx)=>tx.lpAddress.toLocaleLowerCase() === lpAddress.toLocaleLowerCase());
    }, [
        lpAddress,
        nonBscFarmPendingList
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/types.ts
const scales = {
    SM: "sm",
    MD: "md"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/Checkbox.tsx


const getScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
const Checkbox = external_styled_components_default().input.attrs({
    type: "checkbox"
}).withConfig({
    componentId: "sc-11bd21f1-0"
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
  border-radius: 8px;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
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
      border-color: white;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
Checkbox.defaultProps = {
    scale: scales.MD
};
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);


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

/***/ 18086:
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



const NotificationDotRoot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-a93f15de-0"
})`
  display: inline-flex;
  position: relative;
`;
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-a93f15de-1"
})`
  display: ${({ show  })=>show ? "inline-flex" : "none"};
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  pointer-events: none;
  border: 2px solid ${({ theme  })=>theme.colors.invertedContrast};
  border-radius: 50%;
  background-color: ${({ theme , color  })=>theme.colors[color]};
`;
const NotificationDot = ({ show =false , color ="failure" , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NotificationDotRoot, {
        children: [
            react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, props)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                show: show,
                color: color
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationDot);


/***/ }),

/***/ 76071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PancakeToggle_PancakeToggle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/PancakeToggle/types.ts
const scales = {
    SM: "sm",
    MD: "md",
    LG: "lg"
};
const scaleKeys = {
    pancakeSize: "pancakeSize",
    travelDistance: "travelDistance",
    toggleHeight: "toggleHeight",
    toggleWidth: "toggleWidth",
    pancakeThickness: "pancakeThickness",
    pancakeTwoOffset: "pancakeTwoOffset",
    pancakeThreeOffset: "pancakeThreeOffset",
    butterTop: "butterTop",
    butterLeft: "butterLeft",
    butterWidth: "butterWidth",
    butterHeight: "butterHeight",
    butterThickness: "butterThickness",
    butterRadius: "butterRadius",
    butterSmearOneTop: "butterSmearOneTop",
    butterSmearOneLeft: "butterSmearOneLeft",
    butterSmearTwoTop: "butterSmearTwoTop",
    butterSmearTwoRight: "butterSmearTwoRight"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/PancakeToggle/StyledPancakeToggle.tsx


const scaleKeyValues = {
    sm: {
        pancakeSize: "14px",
        travelDistance: "14px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px"
    },
    md: {
        pancakeSize: "24px",
        travelDistance: "24px",
        toggleHeight: "32px",
        toggleWidth: "56px",
        pancakeThickness: "1.5px",
        pancakeTwoOffset: "-1px",
        pancakeThreeOffset: "-6px",
        butterTop: "5px",
        butterLeft: "13px",
        butterWidth: "10px",
        butterHeight: "8px",
        butterThickness: "0.75px",
        butterRadius: "3px",
        butterSmearOneTop: "15px",
        butterSmearOneLeft: "3.75px",
        butterSmearTwoTop: "16px",
        butterSmearTwoRight: "3.75px"
    },
    lg: {
        pancakeSize: "31px",
        travelDistance: "31px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px"
    }
};
const getScale = (property)=>({ scale =scales.LG  })=>{
        return scaleKeyValues[scale][property];
    };
const PancakeStack = external_styled_components_default().div.withConfig({
    componentId: "sc-f7c89142-0"
})`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .pancakes {
    position: absolute;
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .pancake {
    background: #e27c31;
    border-radius: 50%;
    width: ${getScale("pancakeSize")};
    height: ${getScale("pancakeSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("pancakeThickness")} 0 ${getScale("pancakeThickness")} #fbbe7c;
  }

  .pancake:nth-child(1) {
    background: ${({ theme  })=>theme.pancakeToggle.handleBackground};
    box-shadow: 0 ${getScale("pancakeThickness")} 0 ${getScale("pancakeThickness")}
      ${({ theme  })=>theme.pancakeToggle.handleShadow};
  }

  .pancake:nth-child(2) {
    left: 0;
    top: ${getScale("pancakeTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .pancake:nth-child(3) {
    top: ${getScale("pancakeThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .pancake:nth-child(3):before,
  .pancake:nth-child(3):after {
    content: "";
    position: absolute;
    background: #ef8927;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .pancake:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .pancake:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }

  .butter {
    width: ${getScale("butterWidth")};
    height: ${getScale("butterHeight")};
    background: #fbdb60;
    top: ${getScale("butterTop")};
    left: ${getScale("butterLeft")};
    position: absolute;
    border-radius: ${getScale("butterRadius")};
    box-shadow: 0 ${getScale("butterThickness")} 0 ${getScale("butterThickness")} #d67823;
    transform: scale(0);
    transition: 0.2s ease;
  }
`;
const PancakeInput = external_styled_components_default().input.withConfig({
    componentId: "sc-f7c89142-1"
})`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:checked + label .pancakes {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .pancake:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${getScale("pancakeThickness")} 0 ${getScale("pancakeThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .pancake:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .pancake:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;
const PancakeLabel = external_styled_components_default().label.withConfig({
    componentId: "sc-f7c89142-2"
})`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme , checked  })=>theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;

;// CONCATENATED MODULE: ../../packages/uikit/src/components/PancakeToggle/PancakeToggle.tsx




const PancakeToggle = ({ checked , scale =scales.LG , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PancakeStack, {
        scale: scale,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PancakeInput, {
                id: props.id || "pancake-toggle",
                scale: scale,
                type: "checkbox",
                checked: checked,
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PancakeLabel, {
                scale: scale,
                checked: checked,
                htmlFor: props.id || "pancake-toggle",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pancakes",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pancake"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pancake"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pancake"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "butter"
                        })
                    ]
                })
            })
        ]
    });
/* harmony default export */ const PancakeToggle_PancakeToggle = (PancakeToggle);


/***/ }),

/***/ 54908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ QuestionHelper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10898);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42791);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const QuestionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-35be06be-0"
})`
  :hover,
  :focus {
    opacity: 0.7;
  }
`;
const QuestionHelper = ({ text , placement ="right-end" , size ="16px" , ...props })=>{
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(text, {
        placement
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuestionWrapper, {
                ref: targetRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    width: size
                })
            })
        ]
    });
};

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

/***/ 11324:
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
            d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
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

/***/ 6753:
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
            d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 22292:
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
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 63961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22292);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6753);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41022);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Toggle__WEBPACK_IMPORTED_MODULE_2__]);
_Toggle__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ThemeSwitcher = ({ isDark , toggleTheme  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toggle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        checked: isDark,
        defaultColor: "textDisabled",
        checkedColor: "textDisabled",
        onChange: ()=>toggleTheme(!isDark),
        scale: "md",
        startIcon: (isActive = false)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: isActive ? "warning" : "backgroundAlt"
            }),
        endIcon: (isActive = false)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: isActive ? "secondary" : "backgroundAlt"
            })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ThemeSwitcher, (prev, next)=>prev.isDark === next.isDark));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HH": () => (/* binding */ Handle),
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49190);


const scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px"
    },
    md: {
        handleHeight: "26px",
        handleWidth: "26px",
        handleLeft: "3px",
        handleTop: "3px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "32px",
        toggleWidth: "56px"
    },
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px"
    }
};
const getScale = (property)=>({ scale =_types__WEBPACK_IMPORTED_MODULE_1__/* .scales.LG */ .Q.LG  })=>{
        return scaleKeyValues[scale][property];
    };
const Handle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4d215cc-0"
})`
  background-color: ${({ theme  })=>theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-4d215cc-1"
})`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }
`;
const StyledToggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-4d215cc-2"
})`
  align-items: center;
  background-color: ${({ theme , $checked , $checkedColor , $defaultColor  })=>theme.colors[$checked ? $checkedColor : $defaultColor]};
  border-radius: 24px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledToggle);


/***/ }),

/***/ 41022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _StyledToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83503);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_4__]);
_Box__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Toggle = ({ checked , defaultColor ="input" , checkedColor ="success" , scale =_types__WEBPACK_IMPORTED_MODULE_2__/* .scales.LG */ .Q.LG , startIcon , endIcon , ...props })=>{
    const isChecked = !!checked;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        $checked: isChecked,
        $checkedColor: checkedColor,
        $defaultColor: defaultColor,
        scale: scale,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                checked: checked,
                scale: scale,
                ...props,
                type: "checkbox"
            }),
            startIcon && endIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* .Handle */ .HH, {
                        scale: scale,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            children: checked ? endIcon(checked) : startIcon(!checked)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        width: "100%",
                        height: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        children: [
                            startIcon(),
                            endIcon()
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledToggle__WEBPACK_IMPORTED_MODULE_3__/* .Handle */ .HH, {
                scale: scale
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ scales)
/* harmony export */ });
/* unused harmony export scaleKeys */
const scales = {
    SM: "sm",
    MD: "md",
    LG: "lg"
};
const scaleKeys = {
    handleHeight: "handleHeight",
    handleWidth: "handleWidth",
    handleLeft: "handleLeft",
    handleTop: "handleTop",
    checkedLeft: "checkedLeft",
    toggleHeight: "toggleHeight",
    toggleWidth: "toggleWidth"
};


/***/ })

};
;
//# sourceMappingURL=8386.js.map