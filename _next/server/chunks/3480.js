"use strict";
exports.id = 3480;
exports.ids = [3480];
exports.modules = {

/***/ 23992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "u": () => (/* binding */ MotionBox)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66197);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const MotionBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.m.div).withConfig({
    componentId: "sc-b492d839-0"
})`
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.background}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.border}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.layout}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.position}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.space}
`;
const Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-b492d839-1"
})`
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.background}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.border}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.layout}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.position}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.space}
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__.color}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../packages/uikit/src/components/Text/Text.tsx
var Text = __webpack_require__(51036);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Heading/types.ts
const tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6"
};
const scales = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Heading/Heading.tsx



const style = {
    [scales.MD]: {
        fontSize: "20px",
        fontSizeLg: "20px"
    },
    [scales.LG]: {
        fontSize: "24px",
        fontSizeLg: "24px"
    },
    [scales.XL]: {
        fontSize: "32px",
        fontSizeLg: "40px"
    },
    [scales.XXL]: {
        fontSize: "48px",
        fontSizeLg: "64px"
    }
};
const Heading = external_styled_components_default()(Text/* default */.Z).attrs({
    bold: true
}).withConfig({
    componentId: "sc-4eb7e0a9-0"
})`
  font-size: ${({ scale  })=>style[scale || scales.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${({ theme  })=>theme.mediaQueries.lg} {
    font-size: ${({ scale  })=>style[scale || scales.MD].fontSizeLg};
  }
`;
Heading.defaultProps = {
    as: tags.H2
};
/* harmony default export */ const Heading_Heading = (Heading);


/***/ }),

/***/ 44259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_getThemeValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89310);



const rotate = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const spinStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  animation: ${rotate} 2s linear infinite;
`;
const Svg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
    componentId: "sc-4ba21b47-0"
})`
  align-self: center; // Safari fix
  fill: ${({ theme , color  })=>(0,_util_getThemeValue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(theme, `colors.${color}`, color)};
  flex-shrink: 0;
  ${({ spin  })=>spin && spinStyle};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space};

  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`;
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg);


/***/ })

};
;
//# sourceMappingURL=3480.js.map