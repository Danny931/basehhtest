"use strict";
exports.id = 2336;
exports.ids = [2336];
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

/***/ })

};
;
//# sourceMappingURL=2336.js.map