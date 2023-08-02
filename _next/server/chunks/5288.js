"use strict";
exports.id = 5288;
exports.ids = [5288];
exports.modules = {

/***/ 26172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67523);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__]);
_svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-82a6e052-0"
})`
  background: ${({ theme , dividerFill  })=>{
    if (theme.isDark) {
        return dividerFill?.dark || dividerFill?.light || "none";
    }
    return dividerFill?.light || dividerFill?.dark || "none";
}};
  z-index: ${({ index  })=>index};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
const ComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-82a6e052-1"
})`
  z-index: ${({ index  })=>index + 1};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CurvedDivider = ({ index , dividerPosition , dividerComponent , concave , clipFill , dividerFill ,  })=>{
    const showConvexTop = dividerPosition === "top" && !concave;
    const showConvexBottom = dividerPosition === "bottom" && !concave;
    const showConcaveTop = dividerPosition === "top" && concave;
    const showConcaveBottom = dividerPosition === "bottom" && concave;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        index: index,
        dividerFill: dividerFill,
        children: [
            dividerComponent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ComponentWrapper, {
                index: index,
                children: dividerComponent
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    showConcaveTop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__/* .ConcaveTop */ .n6, {
                        clipFill: clipFill
                    }),
                    showConcaveBottom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__/* .ConcaveBottom */ .CT, {
                        clipFill: clipFill
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    showConvexTop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__/* .ConvexTop */ .Z5, {
                        clipFill: clipFill
                    }),
                    showConvexBottom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CurvedSvg__WEBPACK_IMPORTED_MODULE_2__/* .ConvexBottom */ .kZ, {
                        clipFill: clipFill
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurvedDivider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86909:
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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23992);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64548);
/* harmony import */ var _CurvedDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Container__WEBPACK_IMPORTED_MODULE_3__, _CurvedDivider__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([components_Layout_Container__WEBPACK_IMPORTED_MODULE_3__, _CurvedDivider__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BackgroundColor = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).attrs({
    className: "page-bg"
}).withConfig({
    componentId: "sc-308e1ef1-0"
})`
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: ${({ index  })=>index - 1};
  padding: ${({ padding  })=>padding};
`;
const ChildrenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_Layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-308e1ef1-1"
})`
  min-height: auto;
  padding-top: 16px;
  padding-bottom: 16px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  ${({ theme  })=>theme.mediaQueries.lg} {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;
const PageSection = ({ children , svgFill , index =1 , dividerComponent , dividerPosition ="bottom" , hasCurvedDivider =true , concaveDivider =false , clipFill , dividerFill , containerProps , innerProps , ...props })=>{
    const padding = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        // No curved divider
        if (!hasCurvedDivider) {
            return "48px 0";
        }
        // Bottom curved divider
        // Less bottom padding, as the divider is present there
        if (dividerPosition === "bottom") {
            return "48px 0 14px";
        }
        // Top curved divider
        // Less top padding, as the divider is present there
        if (dividerPosition === "top") {
            return "14px 0 48px";
        }
        return "48px 0";
    }, [
        dividerPosition,
        hasCurvedDivider
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...containerProps,
        children: [
            hasCurvedDivider && dividerPosition === "top" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurvedDivider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                svgFill: svgFill,
                index: index,
                concave: concaveDivider,
                dividerPosition: dividerPosition,
                dividerComponent: dividerComponent,
                clipFill: clipFill,
                dividerFill: dividerFill
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundColor, {
                index: index,
                padding: padding,
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChildrenWrapper, {
                    ...innerProps,
                    children: children
                })
            }),
            hasCurvedDivider && dividerPosition === "bottom" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurvedDivider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                svgFill: svgFill,
                index: index,
                concave: concaveDivider,
                dividerPosition: dividerPosition,
                dividerComponent: dividerComponent,
                clipFill: clipFill,
                dividerFill: dividerFill
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* binding */ ConcaveBottom),
/* harmony export */   "Z5": () => (/* binding */ ConvexTop),
/* harmony export */   "kZ": () => (/* binding */ ConvexBottom),
/* harmony export */   "n6": () => (/* binding */ ConcaveTop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const sharedStyles = (theme, clipPath, clipFill)=>styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
  width: 100%;
  height: 20px;
  clip-path: url(${clipPath});

  background: ${()=>{
        if (theme.isDark) {
            return clipFill?.dark || clipFill?.light || theme.colors.background;
        }
        return clipFill?.light || theme.colors.background;
    }};

  & svg {
    display: block;
  }
`;
const ConcaveContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f0d6319c-0"
})`
  ${({ theme , clipPath , clipFill  })=>sharedStyles(theme, clipPath, clipFill)}
  transform: ${({ clipPath  })=>clipPath === "#bottomConcaveCurve" ? "translate(0, -13px)" : "translate(0, 1px)"};
`;
const ConvexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f0d6319c-1"
})`
  ${({ theme , clipPath , clipFill  })=>sharedStyles(theme, clipPath, clipFill)}
  transform: ${({ clipPath  })=>clipPath === "#bottomConvexCurve" ? "translate(0, -13px)" : "translate(0, -1px)"};
`;
const ConvexTop = ({ clipFill  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConvexContainer, {
        clipFill: clipFill,
        clipPath: "#topConvexCurve",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "0",
            height: "0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "topConvexCurve",
                    clipPathUnits: "objectBoundingBox",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"
                    })
                })
            })
        })
    });
const ConvexBottom = ({ clipFill  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConvexContainer, {
        clipFill: clipFill,
        clipPath: "#bottomConvexCurve",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "0",
            height: "0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "bottomConvexCurve",
                    clipPathUnits: "objectBoundingBox",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"
                    })
                })
            })
        })
    });
const ConcaveTop = ({ clipFill  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConcaveContainer, {
        clipFill: clipFill,
        clipPath: "#topConcaveCurve",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "0",
            height: "0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "topConcaveCurve",
                    clipPathUnits: "objectBoundingBox",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"
                    })
                })
            })
        })
    });
const ConcaveBottom = ({ clipFill  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConcaveContainer, {
        clipFill: clipFill,
        clipPath: "#bottomConcaveCurve",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "0",
            height: "0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "bottomConcaveCurve",
                    clipPathUnits: "objectBoundingBox",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"
                    })
                })
            })
        })
    });

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

/***/ })

};
;
//# sourceMappingURL=5288.js.map