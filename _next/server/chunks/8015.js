"use strict";
exports.id = 8015;
exports.ids = [8015];
exports.modules = {

/***/ 68015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalContext__WEBPACK_IMPORTED_MODULE_2__]);
_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useModal = (modal, closeOnOverlayClick = true, updateOnPropsChange = false, modalId = "defaultNodeId")=>{
    const { isOpen , nodeId , modalNode , setModalNode , onPresent , onDismiss  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .Context */ ._y);
    const onPresentCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onPresent(modal, modalId, closeOnOverlayClick);
    }, [
        modal,
        modalId,
        onPresent,
        closeOnOverlayClick
    ]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is static there is no need for updates, use when you expect props to change
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            const modalProps = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(modal, "props");
            const oldModalProps = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(modalNode, "props");
            // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
            // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
            // and online diff checker says both objects are identical but lodash isEqual thinks they are different
            // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
            // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
            // would be great to simplify the logic here
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [
        updateOnPropsChange,
        nodeId,
        modalId,
        isOpen,
        modal,
        modalNode,
        setModalNode
    ]);
    return [
        onPresentCallback,
        onDismiss
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=8015.js.map