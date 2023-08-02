"use strict";
exports.id = 5306;
exports.ids = [5306];
exports.modules = {

/***/ 25306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Radio_Radio)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Radio/types.ts
const scales = {
    SM: "sm",
    MD: "md"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Radio/Radio.tsx



const getScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
const getCheckedScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "12px";
        case scales.MD:
        default:
            return "20px";
    }
};
const Radio = external_styled_components_default().input.attrs({
    type: "radio"
}).withConfig({
    componentId: "sc-407ed64c-0"
})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 50%;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};

  &:after {
    border-radius: 50%;
    content: "";
    height: ${getCheckedScale};
    left: 6px;
    position: absolute;
    top: 6px;
    width: ${getCheckedScale};
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme  })=>theme.shadows.focus};
  }

  &:checked {
    background-color: ${({ theme  })=>theme.colors.success};
    &:after {
      background-color: ${({ theme  })=>theme.radio.handleBackground};
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${external_styled_system_.space}
`;
Radio.defaultProps = {
    scale: scales.MD,
    m: 0
};
/* harmony default export */ const Radio_Radio = (Radio);


/***/ })

};
;
//# sourceMappingURL=5306.js.map