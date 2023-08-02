"use strict";
exports.id = 5186;
exports.ids = [5186];
exports.modules = {

/***/ 54518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-ba77ab76-0"
})`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placeholder);


/***/ }),

/***/ 58457:
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
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);




const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-c1f44966-0"
})`
  max-height: ${({ $height  })=>$height}px;
  max-width: ${({ $width  })=>$width}px;
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-top: ${({ $width , $height  })=>$height / $width * 100}%;
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__.space}
`;
const Wrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ width , height , ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        ref: ref,
        $width: width,
        $height: height,
        ...props
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);


/***/ }),

/***/ 97391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    root: null,
    rootMargin: "200px",
    threshold: 0
});


/***/ }),

/***/ 78985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BI": () => (/* binding */ animationHandler),
/* harmony export */   "Gc": () => (/* binding */ animationMap),
/* harmony export */   "Oz": () => (/* binding */ appearAnimation),
/* harmony export */   "a4": () => (/* binding */ disappearAnimation),
/* harmony export */   "ji": () => (/* binding */ animationVariants)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const appearAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from { opacity:0 }
  to { opacity:1 }
`;
const disappearAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from { opacity:1 }
  to { opacity:0 }
`;
const animationHandler = (element)=>{
    if (!element) return;
    if (element.classList.contains("appear")) {
        element.classList.remove("appear");
        element.classList.add("disappear");
    } else {
        element.classList.remove("disappear");
        element.classList.add("appear");
    }
};
const animationVariants = {
    initial: {
        transform: "translateX(0px)"
    },
    animate: {
        transform: "translateX(0px)"
    },
    exit: {
        transform: "translateX(0px)"
    }
};
const animationMap = {
    initial: "initial",
    animate: "animate",
    exit: "exit"
};


/***/ })

};
;
//# sourceMappingURL=5186.js.map