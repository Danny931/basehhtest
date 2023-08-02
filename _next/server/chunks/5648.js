"use strict";
exports.id = 5648;
exports.ids = [5648];
exports.modules = {

/***/ 24278:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__]);
_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Flex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-32d5f017-0"
})`
  display: flex;
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flex);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledCard__WEBPACK_IMPORTED_MODULE_2__]);
_StyledCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Card = ({ ribbon , children , background , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_2__/* .StyledCard */ .r, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_2__/* .StyledCardInner */ .R, {
            background: background,
            hasCustomBorder: !!props.borderBackground,
            children: [
                ribbon,
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ StyledCardInner),
/* harmony export */   "r": () => (/* binding */ StyledCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__]);
_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PromotedGradient = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;
/**
 * Priority: Warning --> Success --> Active
 */ const getBorderColor = ({ isActive , isSuccess , isWarning , borderBackground , theme  })=>{
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`;
    }
    return theme.colors.cardBorder;
};
const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-eecfaa46-0"
})`
  background: ${getBorderColor};
  border-radius: ${({ theme  })=>theme.radii.card};
  color: ${({ theme , isDisabled  })=>theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;

  ${({ isActive  })=>isActive && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      animation: ${PromotedGradient} 3s ease infinite;
      background-size: 400% 400%;
    `}

  padding: 1px 1px 3px 1px;

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
`;
const StyledCardInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-eecfaa46-1"
})`
  width: 100%;
  height: 100%;
  overflow: ${({ hasCustomBorder  })=>hasCustomBorder ? "initial" : "inherit"};
  background: ${({ theme , background  })=>background ?? theme.card.background};
  border-radius: ${({ theme  })=>theme.radii.card};
`;
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=5648.js.map