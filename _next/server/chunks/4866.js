"use strict";
exports.id = 4866;
exports.ids = [4866];
exports.modules = {

/***/ 94866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);


/**
 * Priority: Warning --> Success
 */ const getBoxShadow = ({ isSuccess =false , isWarning =false , theme  })=>{
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
const getHeight = ({ scale =_types__WEBPACK_IMPORTED_MODULE_1__/* .scales.MD */ .Q.MD  })=>{
    switch(scale){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .scales.SM */ .Q.SM:
            return "32px";
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .scales.LG */ .Q.LG:
            return "48px";
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .scales.MD */ .Q.MD:
        default:
            return "40px";
    }
};
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-c22a9310-0"
})`
  background-color: ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme  })=>theme.colors.text};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};

  &::placeholder {
    color: ${({ theme  })=>theme.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({ theme  })=>theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme  })=>theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme , isWarning , isSuccess  })=>{
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.focus;
}};
  }
`;
Input.defaultProps = {
    scale: _types__WEBPACK_IMPORTED_MODULE_1__/* .scales.MD */ .Q.MD,
    isSuccess: false,
    isWarning: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ scales)
/* harmony export */ });
const scales = {
    SM: "sm",
    MD: "md",
    LG: "lg"
};


/***/ })

};
;
//# sourceMappingURL=4866.js.map