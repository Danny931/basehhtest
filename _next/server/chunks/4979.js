"use strict";
exports.id = 4979;
exports.ids = [4979];
exports.modules = {

/***/ 14979:
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
/* harmony import */ var _Svg_Icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83502);
/* eslint-disable react/no-array-index-key */ 




const Separator = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b9c7047c-0"
})`
  align-items: center;
  color: ${({ theme  })=>theme.colors.textDisabled};
  display: flex;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    padding-left: 8px;
    padding-right: 8px;
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const StyledBreadcrumbs = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-b9c7047c-1"
})`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  a {
    color: ${({ theme  })=>theme.colors.primary};

    &:hover {
      color: ${({ theme  })=>theme.colors.primaryBright};
    }
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__.space}
`;
const insertSeparators = (items, separator)=>items.reduce((accum, item, index)=>{
        if (index === 0) {
            return [
                ...accum,
                item
            ];
        }
        return [
            ...accum,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {
                "aria-hidden": true,
                children: separator
            }, `separator-${index}`),
            item, 
        ];
    }, []);
const DefaultSeparator = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    color: "currentColor",
    width: "24px"
});
const Breadcrumbs = ({ separator =DefaultSeparator , children ,  })=>{
    const validItems = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).filter((child)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child));
    const items = insertSeparators(validItems, separator);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBreadcrumbs, {
        children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: item
            }, `child-${index}`))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ })

};
;
//# sourceMappingURL=4979.js.map