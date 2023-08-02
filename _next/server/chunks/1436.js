"use strict";
exports.id = 1436;
exports.ids = [1436];
exports.modules = {

/***/ 31436:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AB": () => (/* binding */ ModalWrapper),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dl": () => (/* binding */ MODAL_SWIPE_TO_CLOSE_VELOCITY)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98841);
/* harmony import */ var _util_getThemeValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89310);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63815);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_4__]);
_styles__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const MODAL_SWIPE_TO_CLOSE_VELOCITY = 300;
const ModalWrapper = ({ children , onDismiss , minWidth , ...props })=>{
    const { isMobile  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return(// @ts-ignore
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalContainer */ .F0, {
        drag: isMobile ? "y" : false,
        dragConstraints: {
            top: 0,
            bottom: 600
        },
        dragElastic: {
            top: 0
        },
        dragSnapToOrigin: true,
        onDragStart: ()=>{
            if (wrapperRef.current) wrapperRef.current.style.animation = "none";
        },
        onDragEnd: (e, info)=>{
            if (info.velocity.y > MODAL_SWIPE_TO_CLOSE_VELOCITY && onDismiss) onDismiss();
        },
        ref: wrapperRef,
        $minWidth: minWidth,
        ...props,
        children: children
    }));
};
const Modal = ({ title , onDismiss , onBack , children , hideCloseButton =false , bodyPadding ="24px" , headerBackground ="transparent" , minWidth ="320px" , ...props })=>{
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalWrapper, {
        minWidth: minWidth,
        onDismiss: onDismiss,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalHeader */ .xB, {
                background: (0,_util_getThemeValue__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(theme, `colors.${headerBackground}`, headerBackground),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalTitle */ .r6, {
                        children: [
                            onBack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalBackButton */ .vy, {
                                onBack: onBack
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: title
                            })
                        ]
                    }),
                    !hideCloseButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalCloseButton */ .ol, {
                        onDismiss: onDismiss
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalBody */ .fe, {
                p: bodyPadding,
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=1436.js.map