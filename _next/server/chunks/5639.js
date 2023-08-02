"use strict";
exports.id = 5639;
exports.ids = [5639];
exports.modules = {

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

/***/ 13212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ types)
/* harmony export */ });
const types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info"
};


/***/ }),

/***/ 22398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ToastsProvider),
/* harmony export */   "i": () => (/* binding */ ToastsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51546);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13212);




const ToastsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const ToastsProvider = ({ children  })=>{
    const { 0: toasts , 1: setToasts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ title , description , type  })=>{
        setToasts((prevToasts)=>{
            const id = lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(title);
            // Remove any existing toasts with the same id
            const currentToasts = prevToasts.filter((prevToast)=>prevToast.id !== id);
            return [
                {
                    id,
                    title,
                    description,
                    type
                },
                ...currentToasts, 
            ];
        });
    }, [
        setToasts
    ]);
    const toastError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((title, description)=>{
        return toast({
            title,
            description,
            type: _components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .types.DANGER */ .V.DANGER
        });
    }, [
        toast
    ]);
    const toastInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((title, description)=>{
        return toast({
            title,
            description,
            type: _components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .types.INFO */ .V.INFO
        });
    }, [
        toast
    ]);
    const toastSuccess = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((title, description)=>{
        return toast({
            title,
            description,
            type: _components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .types.SUCCESS */ .V.SUCCESS
        });
    }, [
        toast
    ]);
    const toastWarning = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((title, description)=>{
        return toast({
            title,
            description,
            type: _components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .types.WARNING */ .V.WARNING
        });
    }, [
        toast
    ]);
    const clear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setToasts([]), []);
    const remove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>{
        setToasts((prevToasts)=>prevToasts.filter((prevToast)=>prevToast.id !== id));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToastsContext.Provider, {
        value: {
            toasts,
            clear,
            remove,
            toastError,
            toastInfo,
            toastSuccess,
            toastWarning
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22398);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Provider__WEBPACK_IMPORTED_MODULE_1__]);
_Provider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useToast = ()=>{
    const toastContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Provider__WEBPACK_IMPORTED_MODULE_1__/* .ToastsContext */ .i);
    if (toastContext === undefined) {
        throw new Error("Toasts context undefined");
    }
    return toastContext;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=5639.js.map