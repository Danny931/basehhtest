"use strict";
exports.id = 2672;
exports.ids = [2672];
exports.modules = {

/***/ 32117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AV": () => (/* binding */ breakpoints),
/* harmony export */   "w5": () => (/* binding */ mediaQueries)
/* harmony export */ });
/* unused harmony export breakpointNames */
const breakpoints = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200
};
const mediaQueries = {
    xs: ``,
    sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
    md: `@media screen and (min-width: ${breakpoints.md}px)`,
    lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
    xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
    xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`
};
const breakpointNames = Object.keys(breakpoints);


/***/ }),

/***/ 27069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kE": () => (/* binding */ MatchBreakpointsContext),
/* harmony export */   "mh": () => (/* binding */ MatchBreakpointsProvider)
/* harmony export */ });
/* unused harmony export getBreakpointChecks */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32117);
/* harmony import */ var _hooks_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73221);




/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */ const mediaQueries = (()=>{
    let prevMinWidth = 0;
    return Object.keys(_pancakeswap_ui__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints */ .AV).reduce((accum, size, index)=>{
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(_pancakeswap_ui__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints */ .AV).length - 1) {
            return {
                ...accum,
                [size]: `(min-width: ${prevMinWidth}px)`
            };
        }
        const minWidth = prevMinWidth;
        // @ts-ignore
        const breakpoint = _pancakeswap_ui__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints */ .AV[size];
        // Min width for next iteration
        prevMinWidth = breakpoint;
        return {
            ...accum,
            [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint - 1}px)`
        };
    }, {});
})();
const getKey = (size)=>`is${size.charAt(0).toUpperCase()}${size.slice(1)}`;
const getState = ()=>{
    const s = Object.keys(mediaQueries).reduce((accum, size)=>{
        const key = getKey(size);
        if (true) {
            return {
                ...accum,
                [key]: false
            };
        }
        const mql = typeof window?.matchMedia === "function" ? window.matchMedia(mediaQueries[size]) : null;
        return {
            ...accum,
            [key]: mql?.matches ?? false
        };
    }, {});
    return s;
};
const MatchBreakpointsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isMobile: false,
    isTablet: false,
    isDesktop: false
});
const getBreakpointChecks = (state)=>{
    return {
        ...state,
        isMobile: state.isXs || state.isSm,
        isTablet: state.isMd || state.isLg,
        isDesktop: state.isXl || state.isXxl
    };
};
const MatchBreakpointsProvider = ({ children  })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>getBreakpointChecks(getState()));
    (0,_hooks_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_3__/* .useIsomorphicEffect */ .Y)(()=>{
        // Create listeners for each media query returning a function to unsubscribe
        const handlers = Object.keys(mediaQueries).map((size)=>{
            let mql;
            let handler;
            if (typeof window?.matchMedia === "function") {
                mql = window.matchMedia(mediaQueries[size]);
                handler = (matchMediaQuery)=>{
                    const key = getKey(size);
                    setState((prevState)=>getBreakpointChecks({
                            ...prevState,
                            [key]: matchMediaQuery.matches
                        }));
                };
                // Safari < 14 fix
                if (mql.addEventListener) {
                    mql.addEventListener("change", handler);
                }
            }
            return ()=>{
                // Safari < 14 fix
                if (mql?.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        setState(getBreakpointChecks(getState()));
        return ()=>{
            handlers.forEach((unsubscribe)=>{
                unsubscribe();
            });
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MatchBreakpointsContext.Provider, {
        value: state,
        children: children
    });
};


/***/ }),

/***/ 22672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27069);


const useMatchBreakpoints = ()=>{
    const matchBreakpointContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Provider__WEBPACK_IMPORTED_MODULE_1__/* .MatchBreakpointsContext */ .kE);
    if (matchBreakpointContext === undefined) {
        throw new Error("Match Breakpoint context is undefined");
    }
    return matchBreakpointContext;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMatchBreakpoints);


/***/ }),

/***/ 73221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useIsomorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsomorphicEffect =  true ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : 0;


/***/ })

};
;
//# sourceMappingURL=2672.js.map