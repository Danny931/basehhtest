"use strict";
exports.id = 7131;
exports.ids = [7131];
exports.modules = {

/***/ 97131:
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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97391);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58457);
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54518);






const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
    componentId: "sc-8ebf47af-0"
})`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
const Image = ({ src , alt , width , height , fallbackSrc , ...props })=>{
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: isLoaded , 1: setIsLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let observer;
        const isSupported =  false && 0;
        if (imgRef.current && isSupported) {
            observer = new window.IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    const { isIntersecting  } = entry;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        if (typeof observer?.disconnect === "function") {
                            observer.disconnect();
                        }
                    }
                });
            }, _options__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
            observer.observe(imgRef.current);
        }
        return ()=>{
            if (typeof observer?.disconnect === "function") {
                observer.disconnect();
            }
        };
    }, [
        src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Wrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ref: imgRef,
        height: height,
        width: width,
        ...props,
        children: isLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
            src: error && fallbackSrc ? fallbackSrc : src,
            alt: alt,
            onError: ()=>setError(true)
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Placeholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    }, src);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ })

};
;
//# sourceMappingURL=7131.js.map