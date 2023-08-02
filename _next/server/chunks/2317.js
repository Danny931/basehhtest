"use strict";
exports.id = 2317;
exports.ids = [2317];
exports.modules = {

/***/ 41742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);




const Balance = ({ value , color ="text" , decimals =3 , isDisabled =false , unit , prefix , onClick , ...props })=>{
    const prefixProp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>prefix ? {
            prefix
        } : {}, [
        prefix
    ]);
    const suffixProp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>unit ? {
            suffix: unit
        } : {}, [
        unit
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
        start: 0,
        preserveValue: true,
        delay: 0,
        end: value,
        ...prefixProp,
        ...suffixProp,
        decimals: decimals,
        duration: 1,
        separator: ",",
        children: ({ countUpRef  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: isDisabled ? "textDisabled" : color,
                onClick: onClick,
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    ref: countUpRef
                })
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Balance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35293);
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94970);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, _Box__WEBPACK_IMPORTED_MODULE_3__, _Box__WEBPACK_IMPORTED_MODULE_4__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, _Box__WEBPACK_IMPORTED_MODULE_3__, _Box__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BalanceInput = ({ value , placeholder ="0.0" , onUserInput , currencyValue , inputProps , innerRef , isWarning =false , decimals =18 , unit , switchEditingUnits , ...props })=>{
    const handleOnChange = (e)=>{
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledBalanceInput */ .FX, {
        isWarning: isWarning,
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            justifyContent: "flex-end",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledInput */ .Fy, {
                                    pattern: `^[0-9]*[.,]?[0-9]{0,${decimals}}$`,
                                    inputMode: "decimal",
                                    min: "0",
                                    value: value,
                                    onChange: handleOnChange,
                                    placeholder: placeholder,
                                    ref: innerRef,
                                    ...inputProps
                                }),
                                unit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .UnitContainer */ .HH, {
                                    children: unit
                                })
                            ]
                        }),
                        currencyValue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            textAlign: "right",
                            color: "textSubtle",
                            children: currencyValue
                        })
                    ]
                }),
                switchEditingUnits && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    alignItems: "center",
                    pl: "12px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .SwitchUnitsButton */ .sN, {
                        scale: "sm",
                        variant: "text",
                        onClick: switchEditingUnits,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            color: "textSubtle"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FX": () => (/* binding */ StyledBalanceInput),
/* harmony export */   "Fy": () => (/* binding */ StyledInput),
/* harmony export */   "HH": () => (/* binding */ UnitContainer),
/* harmony export */   "sN": () => (/* binding */ SwitchUnitsButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94866);
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51036);
/* harmony import */ var _Button_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_Box__WEBPACK_IMPORTED_MODULE_3__]);
_Box_Box__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SwitchUnitsButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e3b8048d-0"
})`
  width: 16px;
`;
const UnitContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e3b8048d-1"
})`
  margin-left: 4px;
  text-align: right;
  color: ${({ theme  })=>theme.colors.textSubtle};
  white-space: nowrap;
`;
const StyledBalanceInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e3b8048d-2"
})`
  background-color: ${({ theme  })=>theme.colors.input};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 16px;
  box-shadow: ${({ theme , isWarning  })=>theme.shadows[isWarning ? "warning" : "inset"]};
  padding: 8px 16px;
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e3b8048d-3"
})`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  text-align: ${({ textAlign ="right"  })=>textAlign};
  border: none;

  ::placeholder {
    color: ${({ theme  })=>theme.colors.textSubtle};
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__]);
_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b3fe3fbc-0"
})`
  display: grid;
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.grid}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ExpandableLabel),
/* harmony export */   "N": () => (/* binding */ ExpandableButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65474);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33231);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85306);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98119);





const ExpandableButton = ({ onClick , expanded , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_IconButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        "aria-label": "Hide or show expandable content",
        onClick: onClick,
        children: [
            children,
            expanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "invertedContrast"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: "invertedContrast"
            })
        ]
    });
};
ExpandableButton.defaultProps = {
    expanded: false
};
const ExpandableLabel = ({ onClick , expanded , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        variant: "text",
        "aria-label": "Hide or show expandable content",
        onClick: onClick,
        endIcon: expanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            color: "primary"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            color: "primary"
        }),
        children: children
    });
};
ExpandableLabel.defaultProps = {
    expanded: false
};


/***/ }),

/***/ 59536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/types.ts
const scales = {
    SM: "sm",
    MD: "md"
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Checkbox/Checkbox.tsx


const getScale = ({ scale  })=>{
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
const Checkbox = external_styled_components_default().input.attrs({
    type: "checkbox"
}).withConfig({
    componentId: "sc-11bd21f1-0"
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
  border-radius: 8px;
  background-color: ${({ theme  })=>theme.colors.input};
  box-shadow: ${({ theme  })=>theme.shadows.inset};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
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
      border-color: white;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
Checkbox.defaultProps = {
    scale: scales.MD
};
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);


/***/ }),

/***/ 55817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ MessageText),
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
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84507);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24674);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61179);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51036);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_9__]);
_Box__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MessageContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    variant: "success"
});
const Icons = {
    warning: _Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    danger: _Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    success: _Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
};
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-462695fe-0"
})`
  background-color: gray;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__.space}
  ${(0,styled_system__WEBPACK_IMPORTED_MODULE_3__.variant)({
    variants: _theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
})}
`;
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-462695fe-1"
})`
  display: flex;
`;
const colors = {
    // these color names should be place in the theme once the palette is finalized
    warning: "#D67E0A",
    success: "#129E7D",
    danger: "failure"
};
const MessageText = ({ children , ...props })=>{
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MessageContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        fontSize: "14px",
        color: colors[ctx?.variant],
        ...props,
        children: children
    });
};
const Message = ({ children , variant , icon , action , actionInline , ...props })=>{
    const Icon = Icons[variant];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageContext.Provider, {
        value: {
            variant
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
            variant: variant,
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Flex, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            mr: "12px",
                            children: icon ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                color: _theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[variant].borderColor,
                                width: "24px"
                            })
                        }),
                        children,
                        actionInline && action
                    ]
                }),
                !actionInline && action
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const variants = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning"
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure"
    },
    success: {
        background: "rgba(49, 208, 170, 0.1)",
        borderColor: "success"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variants);


/***/ }),

/***/ 12849:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const A = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-2686b0b6-0"
})``;
/**
 * temporary solution for migrating React Router to Next.js Link
 */ const NextLinkFromReactRouter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ to , replace , children , prefetch , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: to,
        replace: replace,
        passHref: true,
        prefetch: prefetch,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(A, {
            ref: ref,
            ...props,
            children: children
        })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextLinkFromReactRouter);


/***/ }),

/***/ 18086:
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



const NotificationDotRoot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-a93f15de-0"
})`
  display: inline-flex;
  position: relative;
`;
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-a93f15de-1"
})`
  display: ${({ show  })=>show ? "inline-flex" : "none"};
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  pointer-events: none;
  border: 2px solid ${({ theme  })=>theme.colors.invertedContrast};
  border-radius: 50%;
  background-color: ${({ theme , color  })=>theme.colors[color]};
`;
const NotificationDot = ({ show =false , color ="failure" , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NotificationDotRoot, {
        children: [
            react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, props)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                show: show,
                color: color
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationDot);


/***/ }),

/***/ 1142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75784);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94722);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_3__]);
_Box__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const rotate = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  0% {
    transform: scale(1);
    stroke-width: 0;
  }
  50% {
    transform: scale(1.3);
    stroke-width: 2;
  }
  100% {
    transform: scale(1);
    stroke-width: 0;
  }
`;
const ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e16e7c36-0"
})`
  & > svg {
    animation: 0.2s ${rotate} linear;
    stroke: ${({ theme  })=>`${theme.colors.primary3D}`};
    stroke-width: 0;
  }
`;
const AnimatedArrow = ({ calculatorState  })=>{
    const { 0: key , 1: setKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("roiArrow-0");
    const { mode  } = calculatorState.controls;
    // Trigger animation on state change
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setKey((prevKey)=>{
            const prevId = parseInt(prevKey.split("-")[1], 10);
            return `roiArrow-${prevId + 1}`;
        });
    }, [
        calculatorState
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowContainer, {
        justifyContent: "center",
        my: "24px",
        children: mode === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_4__/* .CalculatorMode.ROI_BASED_ON_PRINCIPAL */ .ee.ROI_BASED_ON_PRINCIPAL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            width: "24px",
            height: "24px",
            color: "textSubtle"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            width: "24px",
            height: "24px",
            color: "textSubtle"
        })
    }, key);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedArrow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90712);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23992);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1695);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42791);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84281);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63157);
/* harmony import */ var _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10898);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_4__, _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_5__, _Box__WEBPACK_IMPORTED_MODULE_8__, _Box__WEBPACK_IMPORTED_MODULE_9__]);
([_Box__WEBPACK_IMPORTED_MODULE_4__, _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_5__, _Box__WEBPACK_IMPORTED_MODULE_8__, _Box__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4df3ec10-0"
})`
  width: 100%;
  background: ${({ theme  })=>theme.colors.dropdown};
`;
const BulletList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-4df3ec10-1"
})`
  list-style-type: none;
  margin-top: 16px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: "•";
    margin-right: 4px;
    color: ${({ theme  })=>theme.colors.textSubtle};
  }
  li::marker {
    font-size: 12px;
  }
`;
const RoiCalculatorFooter = ({ isFarm , apr =0 , apy =0 , displayApr , autoCompoundFrequency , multiplier , linkLabel , linkHref , performanceFee ,  })=>{
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { targetRef: multiplierRef , tooltip: multiplierTooltip , tooltipVisible: multiplierTooltipVisible ,  } = (0,_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: t("The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                my: "24px",
                children: t("For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: t("This amount is already included in all APR calculations for the farm.")
            })
        ]
    }), {
        placement: "top-end",
        tooltipOffset: [
            20,
            10
        ]
    });
    const gridRowCount = isFarm ? 4 : 2;
    const lpRewardsAPR = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>isFarm ? Number.isFinite(Number(displayApr)) && Number.isFinite(apr) ? Math.max(Number(displayApr) - apr, 0).toFixed(2) : null : null, [
        isFarm,
        displayApr,
        apr
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Footer, {
        p: "16px",
        flexDirection: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_7__/* .ExpandableLabel */ .L, {
                expanded: isExpanded,
                onClick: ()=>setIsExpanded((prev)=>!prev),
                children: isExpanded ? t("Hide") : t("Details")
            }),
            isExpanded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                px: "8px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        gridTemplateColumns: "2.5fr 1fr",
                        gridRowGap: "8px",
                        gridTemplateRows: `repeat(${gridRowCount}, auto)`,
                        children: [
                            isFarm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        small: true,
                                        children: t("APR (incl. LP rewards)")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        small: true,
                                        textAlign: "right",
                                        children: [
                                            displayApr,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            !Number.isFinite(apy) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                small: true,
                                children: [
                                    "*",
                                    isFarm ? t("Base APR (CAKE yield only)") : t("APR")
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                small: true,
                                children: t("APY")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                small: true,
                                textAlign: "right",
                                children: [
                                    (apy ?? apr).toFixed(2),
                                    "%"
                                ]
                            }),
                            isFarm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        small: true,
                                        children: [
                                            "*",
                                            t("LP Rewards APR")
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        small: true,
                                        textAlign: "right",
                                        children: [
                                            lpRewardsAPR === "0" ? "-" : lpRewardsAPR,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            !Number.isFinite(apy) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                color: "textSubtle",
                                small: true,
                                children: t("APY (%compoundTimes%x daily compound)", {
                                    compoundTimes: autoCompoundFrequency > 0 ? autoCompoundFrequency : 1
                                })
                            }),
                            !Number.isFinite(apy) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                small: true,
                                textAlign: "right",
                                children: [
                                    ((0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getApy */ .g5)(apr, autoCompoundFrequency > 0 ? autoCompoundFrequency : 1, 365, performanceFee) * 100).toFixed(2),
                                    "%"
                                ]
                            }),
                            isFarm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        small: true,
                                        children: t("Farm Multiplier")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        justifyContent: "flex-end",
                                        alignItems: "flex-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                small: true,
                                                textAlign: "right",
                                                mr: "4px",
                                                children: multiplier
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                ref: multiplierRef,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    color: "textSubtle",
                                                    width: "16px",
                                                    height: "16px"
                                                })
                                            }),
                                            multiplierTooltipVisible && multiplierTooltip
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BulletList, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    textAlign: "center",
                                    color: "textSubtle",
                                    display: "inline",
                                    lineHeight: 1.1,
                                    children: t("Calculated based on current rates.")
                                })
                            }),
                            isFarm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    textAlign: "center",
                                    color: "textSubtle",
                                    display: "inline",
                                    children: t("LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    fontSize: "12px",
                                    textAlign: "center",
                                    color: "textSubtle",
                                    display: "inline",
                                    lineHeight: 1.1,
                                    children: t("All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.")
                                })
                            }),
                            performanceFee > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    mt: "14px",
                                    fontSize: "12px",
                                    textAlign: "center",
                                    color: "textSubtle",
                                    display: "inline",
                                    children: t("All estimated rates take into account this pool’s %fee%% performance fee", {
                                        fee: performanceFee
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        justifyContent: "center",
                        mt: "24px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            href: linkHref,
                            children: linkLabel
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoiCalculatorFooter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RoiCalculatorFooter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96650);
/* harmony import */ var _RoiCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20246);
/* harmony import */ var _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75784);
/* harmony import */ var _AnimatedArrow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1142);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24278);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51036);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42791);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85306);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59536);
/* harmony import */ var _widgets_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31436);
/* harmony import */ var _BalanceInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84373);
/* harmony import */ var _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10898);
/* harmony import */ var _ButtonMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64349);
/* harmony import */ var _ButtonMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_Modal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_8__, _Box__WEBPACK_IMPORTED_MODULE_9__, _BalanceInput__WEBPACK_IMPORTED_MODULE_11__, _AnimatedArrow__WEBPACK_IMPORTED_MODULE_16__, _RoiCard__WEBPACK_IMPORTED_MODULE_17__, _RoiCalculatorFooter__WEBPACK_IMPORTED_MODULE_18__]);
([_widgets_Modal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_8__, _Box__WEBPACK_IMPORTED_MODULE_9__, _BalanceInput__WEBPACK_IMPORTED_MODULE_11__, _AnimatedArrow__WEBPACK_IMPORTED_MODULE_16__, _RoiCard__WEBPACK_IMPORTED_MODULE_17__, _RoiCalculatorFooter__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_widgets_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP).withConfig({
    componentId: "sc-8fa6448c-0"
})`
  & > :nth-child(2) {
    padding: 0;
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    width: 380px;
  }
`;
const ScrollableContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-8fa6448c-1"
})`
  padding: 24px;
  max-height: 500px;
  overflow-y: auto;
  ${({ theme  })=>theme.mediaQueries.sm} {
    max-height: none;
  }
`;
const FullWidthButtonMenu = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_ButtonMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8fa6448c-2"
})`
  width: 100%;

  & > button {
    width: 100%;
  }

  opacity: ${({ disabled  })=>disabled ? 0.5 : 1};
`;
const RoiCalculatorModal = ({ account , earningTokenPrice , apr , apy , displayApr , linkLabel , linkHref , stakingTokenBalance , stakingTokenSymbol , stakingTokenPrice , multiplier , initialValue , earningTokenSymbol ="CAKE" , autoCompoundFrequency =0 , performanceFee =0 , isFarm =false , initialState , strategy , header , children , onBack , onDismiss , bCakeCalculatorSlot ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const balanceInputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { state , setPrincipalFromUSDValue , setPrincipalFromTokenValue , setStakingDuration , toggleCompounding , toggleEditingCurrency , setCompoundingFrequency , setCalculatorMode , setTargetRoi , dispatch ,  } = (0,_useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
        stakingTokenPrice,
        earningTokenPrice,
        autoCompoundFrequency
    }, initialState);
    const { compounding , activeCompoundingIndex , stakingDuration , editingCurrency  } = state.controls;
    const { principalAsUSD , principalAsToken  } = state.data;
    // Auto-focus input on opening modal
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (balanceInputRef.current) {
            balanceInputRef.current.focus();
        }
    }, []);
    // If user comes to calculator from staking modal - initialize with whatever they put in there
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (initialValue) {
            setPrincipalFromTokenValue(initialValue);
        }
    }, [
        initialValue,
        setPrincipalFromTokenValue
    ]);
    const { targetRef , tooltip , tooltipVisible  } = (0,_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(isFarm ? t("“My Balance” here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.") : t("“My Balance” here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.", {
        assetSymbol: stakingTokenSymbol
    }), {
        placement: "top-end",
        tooltipOffset: [
            20,
            10
        ]
    });
    const onBalanceFocus = ()=>{
        setCalculatorMode(_useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .CalculatorMode.ROI_BASED_ON_PRINCIPAL */ .ee.ROI_BASED_ON_PRINCIPAL);
    };
    const editingUnit = editingCurrency === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .EditingCurrency.TOKEN */ .We.TOKEN ? stakingTokenSymbol : "USD";
    const editingValue = editingCurrency === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .EditingCurrency.TOKEN */ .We.TOKEN ? principalAsToken : principalAsUSD;
    const conversionUnit = editingCurrency === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .EditingCurrency.TOKEN */ .We.TOKEN ? "USD" : stakingTokenSymbol;
    const conversionValue = editingCurrency === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .EditingCurrency.TOKEN */ .We.TOKEN ? principalAsUSD : principalAsToken;
    const onUserInput = editingCurrency === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .EditingCurrency.TOKEN */ .We.TOKEN ? setPrincipalFromTokenValue : setPrincipalFromUSDValue;
    const DURATION = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            t("1D"),
            t("7D"),
            t("30D"),
            t("1Y"),
            t("5Y")
        ], [
        t
    ]);
    const isDisableMyBalance = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return !Number.isFinite(stakingTokenPrice) || !stakingTokenBalance.isFinite() || stakingTokenBalance.lte(0) || !account;
    }, [
        account,
        stakingTokenBalance,
        stakingTokenPrice
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledModal, {
        title: t("ROI Calculator"),
        onDismiss: onBack || onDismiss,
        onBack: onBack,
        headerBackground: "gradientCardHeader",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScrollableContainer, {
                children: [
                    strategy ? strategy(state, dispatch) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .DefaultCompoundStrategy */ .dw, {
                        state: state,
                        apr: apy ?? apr,
                        dispatch: dispatch,
                        earningTokenPrice: earningTokenPrice,
                        performanceFee: performanceFee,
                        stakingTokenPrice: stakingTokenPrice
                    }),
                    header,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        flexDirection: "column",
                        mb: "8px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                color: "secondary",
                                bold: true,
                                fontSize: "12px",
                                textTransform: "uppercase",
                                children: t("%asset% staked", {
                                    asset: stakingTokenSymbol
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BalanceInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                inputProps: {
                                    scale: "sm"
                                },
                                currencyValue: `${conversionValue} ${conversionUnit}`,
                                innerRef: balanceInputRef,
                                placeholder: "0.00",
                                value: editingValue,
                                unit: editingUnit,
                                onUserInput: onUserInput,
                                switchEditingUnits: toggleEditingCurrency,
                                onFocus: onBalanceFocus
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                justifyContent: "space-between",
                                mt: "8px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        scale: "xs",
                                        p: "4px 16px",
                                        width: "68px",
                                        variant: "tertiary",
                                        onClick: ()=>setPrincipalFromUSDValue("100"),
                                        children: "$100"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        scale: "xs",
                                        p: "4px 16px",
                                        width: "68px",
                                        variant: "tertiary",
                                        onClick: ()=>setPrincipalFromUSDValue("1000"),
                                        children: "$1000"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        scale: "xs",
                                        p: "4px 16px",
                                        width: "128px",
                                        variant: "tertiary",
                                        style: {
                                            textTransform: "uppercase"
                                        },
                                        disabled: isDisableMyBalance,
                                        onClick: ()=>setPrincipalFromUSDValue((0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(stakingTokenBalance.times(stakingTokenPrice)).toString()),
                                        children: t("My Balance")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        ref: targetRef,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            width: "16px",
                                            height: "16px",
                                            color: "textSubtle"
                                        })
                                    }),
                                    tooltipVisible && tooltip
                                ]
                            }),
                            children || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        color: "secondary",
                                        bold: true,
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Staked for")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FullWidthButtonMenu, {
                                        activeIndex: stakingDuration,
                                        onItemClick: setStakingDuration,
                                        scale: "sm",
                                        children: DURATION.map((duration)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                variant: "tertiary",
                                                children: duration
                                            }, duration))
                                    })
                                ]
                            }),
                            bCakeCalculatorSlot && bCakeCalculatorSlot(principalAsToken),
                            autoCompoundFrequency === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        color: "secondary",
                                        bold: true,
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Compounding every")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                flex: "1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                    scale: "sm",
                                                    checked: compounding,
                                                    onChange: toggleCompounding
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                flex: "6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FullWidthButtonMenu, {
                                                    scale: "sm",
                                                    disabled: !compounding,
                                                    activeIndex: activeCompoundingIndex,
                                                    onItemClick: setCompoundingFrequency,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            children: t("1D")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            children: t("7D")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            children: t("14D")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            children: t("30D")
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedArrow__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        calculatorState: state
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoiCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            calculatorState: state,
                            earningTokenSymbol: earningTokenSymbol,
                            setTargetRoi: setTargetRoi,
                            setCalculatorMode: setCalculatorMode
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoiCalculatorFooter__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                isFarm: isFarm,
                apr: apr,
                apy: apy,
                displayApr: displayApr,
                autoCompoundFrequency: autoCompoundFrequency,
                multiplier: multiplier,
                linkLabel: linkLabel,
                linkHref: linkHref,
                performanceFee: performanceFee
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoiCalculatorModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75784);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23992);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24278);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94866);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98119);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30486);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_5__]);
([_Box__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MILLION = 1000000;
const TRILLION = 1000000000000;
const RoiCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57bb3358-0"
})`
  background: linear-gradient(180deg, #53dee9, #7645d9);
  padding: 1px;
  width: 100%;
  border-radius: ${({ theme  })=>theme.radii.default};
`;
const RoiCardInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57bb3358-1"
})`
  min-height: 120px;
  padding: 24px;
  border-radius: ${({ theme  })=>theme.radii.default};
  background: ${({ theme  })=>theme.colors.gradientBubblegum};
`;
const RoiInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57bb3358-2"
})`
  position: relative;
  & > input {
    padding-left: 28px;
    max-width: 70%;
  }
  &:before {
    position: absolute;
    content: "$";
    color: ${({ theme  })=>theme.colors.textSubtle};
    left: 16px;
    top: 8px;
  }
`;
const RoiDisplayContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57bb3358-3"
})`
  max-width: 82%;
  margin-right: 8px;
`;
const RoiDollarAmount = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57bb3358-4"
})`
  position: relative;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 0px;
  }

  ${({ fadeOut , theme  })=>fadeOut && `
      &:after {
        background: linear-gradient(
          to right,
          ${theme.colors.background}00,
          ${theme.colors.background}E6
        );
        content: '';
        height: 100%;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
      }
  `}
`;
const RoiCard = ({ earningTokenSymbol , calculatorState , setTargetRoi , setCalculatorMode ,  })=>{
    const { 0: expectedRoi , 1: setExpectedRoi  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { roiUSD , roiTokens , roiPercentage  } = calculatorState.data;
    const { mode  } = calculatorState.controls;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (mode === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .CalculatorMode.PRINCIPAL_BASED_ON_ROI */ .ee.PRINCIPAL_BASED_ON_ROI && inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        mode
    ]);
    const onEnterEditing = ()=>{
        setCalculatorMode(_useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .CalculatorMode.PRINCIPAL_BASED_ON_ROI */ .ee.PRINCIPAL_BASED_ON_ROI);
        setExpectedRoi(roiUSD.toLocaleString("en", {
            minimumFractionDigits: roiUSD > MILLION ? 0 : 2,
            maximumFractionDigits: roiUSD > MILLION ? 0 : 2
        }));
    };
    const onExitRoiEditing = ()=>{
        setCalculatorMode(_useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .CalculatorMode.ROI_BASED_ON_PRINCIPAL */ .ee.ROI_BASED_ON_PRINCIPAL);
    };
    const handleExpectedRoiChange = (event)=>{
        if (event.currentTarget.validity.valid) {
            const roiAsString = event.target.value.replace(/,/g, ".");
            setTargetRoi(roiAsString);
            setExpectedRoi(roiAsString);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoiCardWrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoiCardInner, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "secondary",
                    bold: true,
                    textTransform: "uppercase",
                    children: t("ROI at current rates")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    mt: "4px",
                    height: "36px",
                    children: mode === _useRoiCalculatorReducer__WEBPACK_IMPORTED_MODULE_7__/* .CalculatorMode.PRINCIPAL_BASED_ON_ROI */ .ee.PRINCIPAL_BASED_ON_ROI ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoiInputContainer, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    ref: inputRef,
                                    type: "text",
                                    inputMode: "decimal",
                                    pattern: "^[0-9]+[.,]?[0-9]*$",
                                    scale: "sm",
                                    value: expectedRoi,
                                    placeholder: "0.0",
                                    onChange: handleExpectedRoiChange
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                scale: "sm",
                                variant: "text",
                                onClick: onExitRoiEditing,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    color: "primary"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoiDisplayContainer, {
                                onClick: onEnterEditing,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        fontSize: "24px",
                                        bold: true,
                                        children: "$"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoiDollarAmount, {
                                        fontSize: "24px",
                                        bold: true,
                                        fadeOut: roiUSD > TRILLION,
                                        children: roiUSD.toLocaleString("en", {
                                            minimumFractionDigits: roiUSD > MILLION ? 0 : 2,
                                            maximumFractionDigits: roiUSD > MILLION ? 0 : 2
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                scale: "sm",
                                variant: "text",
                                onClick: onEnterEditing,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    color: "primary"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fontSize: "12px",
                    color: "textSubtle",
                    children: [
                        "~ ",
                        roiTokens,
                        " ",
                        earningTokenSymbol,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            fontSize: "12px",
                            color: "textSubtle",
                            ml: "3px",
                            display: "inline-block",
                            maxWidth: "100%",
                            style: {
                                lineBreak: "anywhere"
                            },
                            children: [
                                "(",
                                roiPercentage.toLocaleString("en", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }),
                                "%)"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoiCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "We": () => (/* binding */ EditingCurrency),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dw": () => (/* binding */ DefaultCompoundStrategy),
/* harmony export */   "ee": () => (/* binding */ CalculatorMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90712);




/**
 * This hook is handling all the calculator state and calculations.
 * UI connected to it is merely representation of the data and buttons to trigger actions
 */ // Mapping from the compounding frequency button index to actual compounding frequency
// in number of compounds per day
const compoundingIndexToFrequency = {
    0: 1,
    1: 0.142857142,
    2: 0.071428571,
    3: 0.033333333
};
const TOKEN_PRECISION = 10;
const USD_PRECISION = 2;
var EditingCurrency;
(function(EditingCurrency) {
    EditingCurrency[EditingCurrency["TOKEN"] = 0] = "TOKEN";
    EditingCurrency[EditingCurrency["USD"] = 1] = "USD";
})(EditingCurrency || (EditingCurrency = {}));
var CalculatorMode;
(function(CalculatorMode) {
    CalculatorMode[CalculatorMode["ROI_BASED_ON_PRINCIPAL"] = 0] = "ROI_BASED_ON_PRINCIPAL";
    CalculatorMode[CalculatorMode["PRINCIPAL_BASED_ON_ROI"] = 1] = "PRINCIPAL_BASED_ON_ROI";
})(CalculatorMode || (CalculatorMode = {}));
const defaultState = {
    controls: {
        compounding: true,
        compoundingFrequency: 1,
        activeCompoundingIndex: 0,
        stakingDuration: 3,
        mode: CalculatorMode.ROI_BASED_ON_PRINCIPAL,
        editingCurrency: EditingCurrency.USD
    },
    data: {
        principalAsToken: "0.00",
        principalAsUSD: "",
        roiUSD: 0,
        roiTokens: 0,
        roiPercentage: 0
    }
};
const roiCalculatorReducer = (state, action)=>{
    switch(action.type){
        case "setStakingDuration":
            {
                const controls = {
                    ...state.controls,
                    stakingDuration: action.payload
                };
                return {
                    ...state,
                    controls
                };
            }
        case "toggleCompounding":
            {
                const toggledCompounding = !state.controls.compounding;
                const controls1 = {
                    ...state.controls,
                    compounding: toggledCompounding
                };
                return {
                    ...state,
                    controls: controls1
                };
            }
        case "setCompoundingFrequency":
            {
                const { index , autoCompoundFrequency  } = action.payload;
                if (autoCompoundFrequency) {
                    return {
                        ...state,
                        controls: {
                            ...state.controls,
                            compoundingFrequency: autoCompoundFrequency
                        }
                    };
                }
                const compoundingFrequency = compoundingIndexToFrequency[index];
                const controls2 = {
                    ...state.controls,
                    compoundingFrequency,
                    activeCompoundingIndex: index
                };
                return {
                    ...state,
                    controls: controls2
                };
            }
        case "setPrincipal":
            {
                const { principalAsUSD , principalAsToken  } = action.payload;
                const data = {
                    ...state.data,
                    principalAsUSD,
                    principalAsToken
                };
                const controls3 = {
                    ...state.controls,
                    mode: CalculatorMode.ROI_BASED_ON_PRINCIPAL
                };
                return {
                    controls: controls3,
                    data
                };
            }
        case "setPrincipalForTargetRoi":
            {
                const { principalAsUSD: principalAsUSD1 , principalAsToken: principalAsToken1 , roiPercentage  } = action.payload;
                const data1 = {
                    ...state.data,
                    principalAsUSD: principalAsUSD1,
                    principalAsToken: principalAsToken1,
                    roiPercentage
                };
                return {
                    ...state,
                    data: data1
                };
            }
        case "setCalculatorMode":
            {
                const mode = action.payload;
                const controls4 = {
                    ...state.controls,
                    mode
                };
                if (mode === CalculatorMode.PRINCIPAL_BASED_ON_ROI) {
                    const roiUSD = parseFloat(state.data.roiUSD.toFixed(USD_PRECISION));
                    const data2 = {
                        ...state.data,
                        roiUSD
                    };
                    return {
                        controls: controls4,
                        data: data2
                    };
                }
                return {
                    ...state,
                    controls: controls4
                };
            }
        case "setRoi":
            {
                const data3 = {
                    ...state.data,
                    ...action.payload
                };
                return {
                    ...state,
                    data: data3
                };
            }
        case "setTargetRoi":
            {
                const { roiUSD: roiUSD1 , roiTokens  } = action.payload;
                const data4 = {
                    ...state.data,
                    roiUSD: roiUSD1,
                    roiTokens
                };
                const controls5 = {
                    ...state.controls,
                    mode: CalculatorMode.PRINCIPAL_BASED_ON_ROI
                };
                return {
                    controls: controls5,
                    data: data4
                };
            }
        case "toggleEditingCurrency":
            {
                const currencyAfterChange = state.controls.editingCurrency === EditingCurrency.USD ? EditingCurrency.TOKEN : EditingCurrency.USD;
                const controls6 = {
                    ...state.controls,
                    editingCurrency: currencyAfterChange
                };
                return {
                    ...state,
                    controls: controls6
                };
            }
        default:
            return state;
    }
};
const useRoiCalculatorReducer = ({ stakingTokenPrice , earningTokenPrice , autoCompoundFrequency  }, initialState)=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(roiCalculatorReducer, lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(defaultState, initialState));
    // If pool is auto-compounding set state's compounding frequency to this pool's auto-compound frequency
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoCompoundFrequency > 0) {
            dispatch({
                type: "setCompoundingFrequency",
                payload: {
                    autoCompoundFrequency
                }
            });
        }
    }, [
        autoCompoundFrequency
    ]);
    // Handler for compounding frequency buttons
    const setCompoundingFrequency = (index)=>{
        dispatch({
            type: "setCompoundingFrequency",
            payload: {
                index
            }
        });
    };
    // Handler for principal input when in USD mode
    const setPrincipalFromUSDValue = (amount)=>{
        const principalAsTokenBN = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amount).div(stakingTokenPrice);
        const principalAsToken = principalAsTokenBN.gt(0) ? principalAsTokenBN.toFixed(TOKEN_PRECISION) : "0.00";
        dispatch({
            type: "setPrincipal",
            payload: {
                principalAsUSD: amount,
                principalAsToken
            }
        });
    };
    // Handler for principal input when in Token mode
    const setPrincipalFromTokenValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((amount)=>{
        const principalAsUsdBN = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amount).times(stakingTokenPrice);
        const principalAsUsdString = principalAsUsdBN.gt(0) ? principalAsUsdBN.toFixed(USD_PRECISION) : "0.00";
        dispatch({
            type: "setPrincipal",
            payload: {
                principalAsUSD: principalAsUsdString,
                principalAsToken: amount
            }
        });
    }, [
        stakingTokenPrice
    ]);
    // Handler for staking duration buttons
    const setStakingDuration = (stakingDurationIndex)=>{
        dispatch({
            type: "setStakingDuration",
            payload: stakingDurationIndex
        });
    };
    // Handler for compounding checkbox
    const toggleCompounding = ()=>{
        dispatch({
            type: "toggleCompounding"
        });
    };
    // Handler for principal input mode switch
    const toggleEditingCurrency = ()=>{
        dispatch({
            type: "toggleEditingCurrency"
        });
    };
    const setCalculatorMode = (modeToSet)=>{
        dispatch({
            type: "setCalculatorMode",
            payload: modeToSet
        });
    };
    // Handler for ROI input
    const setTargetRoi = (amount)=>{
        const targetRoiAsTokens = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amount).div(earningTokenPrice);
        dispatch({
            type: "setTargetRoi",
            payload: {
                roiUSD: +amount,
                roiTokens: targetRoiAsTokens.isNaN() ? 0 : targetRoiAsTokens.toNumber()
            }
        });
    };
    return {
        state,
        setPrincipalFromUSDValue,
        setPrincipalFromTokenValue,
        setStakingDuration,
        toggleCompounding,
        toggleEditingCurrency,
        setCompoundingFrequency,
        setCalculatorMode,
        setTargetRoi,
        dispatch
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRoiCalculatorReducer);
function DefaultCompoundStrategy({ state , apr =0 , earningTokenPrice , stakingTokenPrice , performanceFee , dispatch  }) {
    const { principalAsUSD , roiUSD  } = state.data;
    const { compounding , compoundingFrequency , stakingDuration , mode  } = state.controls;
    // Calculates and sets ROI whenever related values change
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (mode === CalculatorMode.ROI_BASED_ON_PRINCIPAL) {
            const principalInUSDAsNumber = parseFloat(principalAsUSD);
            const compoundFrequency = compounding ? compoundingFrequency : 0;
            const interestBreakdown = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getInterestBreakdown */ .A1)({
                principalInUSD: principalInUSDAsNumber,
                apr,
                earningTokenPrice,
                compoundFrequency,
                performanceFee
            });
            const hasInterest = !Number.isNaN(interestBreakdown[stakingDuration]);
            const roiTokens = hasInterest ? interestBreakdown[stakingDuration] : 0;
            const roiAsUSD = hasInterest ? roiTokens * earningTokenPrice : 0;
            const roiPercentage = hasInterest ? (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getRoi */ .Lu)({
                amountEarned: roiAsUSD,
                amountInvested: principalInUSDAsNumber
            }) : 0;
            dispatch({
                type: "setRoi",
                payload: {
                    roiUSD: roiAsUSD,
                    roiTokens,
                    roiPercentage
                }
            });
        }
    }, [
        principalAsUSD,
        apr,
        stakingDuration,
        earningTokenPrice,
        performanceFee,
        compounding,
        compoundingFrequency,
        mode,
        dispatch, 
    ]);
    // Calculates and sets principal based on expected ROI value
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (mode === CalculatorMode.PRINCIPAL_BASED_ON_ROI) {
            const principalForExpectedRoi = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getPrincipalForInterest */ ._b)(roiUSD, apr, compounding ? compoundingFrequency : 0, performanceFee);
            const principalUSD = !Number.isNaN(principalForExpectedRoi[stakingDuration]) ? principalForExpectedRoi[stakingDuration] : 0;
            const principalToken = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(principalUSD).div(stakingTokenPrice);
            const roiPercentage = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getRoi */ .Lu)({
                amountEarned: roiUSD,
                amountInvested: principalUSD
            });
            dispatch({
                type: "setPrincipalForTargetRoi",
                payload: {
                    principalAsUSD: principalUSD.toFixed(USD_PRECISION),
                    principalAsToken: principalToken.toFixed(TOKEN_PRECISION),
                    roiPercentage
                }
            });
        }
    }, [
        stakingDuration,
        apr,
        compounding,
        compoundingFrequency,
        mode,
        roiUSD,
        stakingTokenPrice,
        performanceFee,
        dispatch, 
    ]);
    return null;
}


/***/ }),

/***/ 94722:
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
            d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 88800:
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
            d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 41194:
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
            d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 67891:
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.25 7.72H6.25V9.22H11.25V7.72Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18 15.75H13V17.25H18V15.75Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18 13.25H13V14.75H18V13.25Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 30486:
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
            d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 61179:
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
            d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 33231:
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
            d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 65474:
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
            d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 95121:
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
            d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 24674:
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
            d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 33621:
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
        viewBox: "0 0 19 19",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 1239:
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
            d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 35293:
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
        viewBox: "0 0 24 25",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 47418:
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
            d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 97861:
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
            d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 82362:
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
            d: "M2 21.8966H12C12.55 21.8966 13 22.3466 13 22.8966C13 23.4466 12.55 23.8966 12 23.8966H2C1.45 23.8966 1 23.4466 1 22.8966C1 22.3466 1.45 21.8966 2 21.8966ZM5.24 8.96661L8.07 6.13661L20.8 18.8666C21.58 19.6466 21.58 20.9166 20.8 21.6966C20.02 22.4766 18.75 22.4766 17.97 21.6966L5.24 8.96661ZM13.73 3.30661L16.56 6.13661C17.34 6.91661 17.34 8.18661 16.56 8.96661L15.14 10.3866L9.49 4.72661L10.9 3.31661C11.68 2.52661 12.95 2.52661 13.73 3.30661ZM3.83 10.3766L9.49 16.0366L8.08 17.4466C7.3 18.2266 6.03 18.2266 5.25 17.4466L2.42 14.6166C1.64 13.8366 1.64 12.5666 2.42 11.7866L3.83 10.3766Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 72362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tag_Tag)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/types.ts
const variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning"
};
const scales = {
    MD: "md",
    SM: "sm"
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/theme.ts

const scaleVariants = {
    [scales.MD]: {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px"
    },
    [scales.SM]: {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px"
    }
};
const styleVariants = {
    [variants.PRIMARY]: {
        backgroundColor: "primary"
    },
    [variants.SECONDARY]: {
        backgroundColor: "secondary"
    },
    [variants.SUCCESS]: {
        backgroundColor: "success"
    },
    [variants.TEXTDISABLED]: {
        backgroundColor: "textDisabled"
    },
    [variants.TEXTSUBTLE]: {
        backgroundColor: "textSubtle"
    },
    [variants.BINANCE]: {
        backgroundColor: "binance"
    },
    [variants.FAILURE]: {
        backgroundColor: "failure"
    },
    [variants.WARNING]: {
        backgroundColor: "warning"
    }
};

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/StyledTag.tsx




const getOutlineStyles = ({ outline , theme , variant: variantKey = variants.PRIMARY  })=>{
    if (outline) {
        const themeColorKey = styleVariants[variantKey].backgroundColor;
        const color = theme.colors[themeColorKey];
        return `
      color: ${color};
      background: ${theme.colors.background};
      border: 2px solid ${color};
    `;
    }
    return "";
};
const StyledTag = external_styled_components_default().div.withConfig({
    componentId: "sc-26d88be7-0"
})`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({ textTransform  })=>textTransform && `text-transform: ${textTransform};`}

  ${(0,external_styled_system_.variant)({
    prop: "scale",
    variants: scaleVariants
})}
  ${(0,external_styled_system_.variant)({
    variants: styleVariants
})}
  ${external_styled_system_.space}
  ${external_styled_system_.typography}

  ${getOutlineStyles}
`;
/* harmony default export */ const Tag_StyledTag = (null);

;// CONCATENATED MODULE: ../../packages/uikit/src/components/Tag/Tag.tsx




const Tag = ({ startIcon , endIcon , children , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTag, {
        ...props,
        children: [
            /*#__PURE__*/ external_react_default().isValidElement(startIcon) && /*#__PURE__*/ external_react_default().cloneElement(startIcon, {
                // @ts-ignore
                mr: "0.5em"
            }),
            children,
            /*#__PURE__*/ external_react_default().isValidElement(endIcon) && /*#__PURE__*/ external_react_default().cloneElement(endIcon, {
                // @ts-ignore
                ml: "0.5em"
            })
        ]
    });
/* eslint-disable react/default-props-match-prop-types */ Tag.defaultProps = {
    variant: "primary",
    scale: scales.MD,
    outline: false
};
/* harmony default export */ const Tag_Tag = (Tag);


/***/ }),

/***/ 19193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51036);


const TooltipText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5b87ff15-0"
})`
  text-decoration: underline dotted;
  text-decoration-color: ${({ theme , decorationColor  })=>`${theme?.colors && decorationColor ? theme.colors[decorationColor] : theme?.colors?.textSubtle}`};
  text-underline-offset: 0.1em;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipText);


/***/ }),

/***/ 32317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Farm)
/* harmony export */ });
/* harmony import */ var _components_FarmTabButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58379);
/* harmony import */ var _components_FarmApyButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47057);
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16841);
/* harmony import */ var _components_FarmCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44974);
/* harmony import */ var _components_StakedLP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54255);
/* harmony import */ var _components_DepositModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43857);
/* harmony import */ var _components_WithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FarmApyButton__WEBPACK_IMPORTED_MODULE_1__, _components_Tags__WEBPACK_IMPORTED_MODULE_2__, _components_FarmCard__WEBPACK_IMPORTED_MODULE_3__, _components_StakedLP__WEBPACK_IMPORTED_MODULE_4__, _components_DepositModal__WEBPACK_IMPORTED_MODULE_5__, _components_WithdrawModal__WEBPACK_IMPORTED_MODULE_6__]);
([_components_FarmApyButton__WEBPACK_IMPORTED_MODULE_1__, _components_Tags__WEBPACK_IMPORTED_MODULE_2__, _components_FarmCard__WEBPACK_IMPORTED_MODULE_3__, _components_StakedLP__WEBPACK_IMPORTED_MODULE_4__, _components_DepositModal__WEBPACK_IMPORTED_MODULE_5__, _components_WithdrawModal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Farm = {
    FarmTabButtons: _components_FarmTabButtons__WEBPACK_IMPORTED_MODULE_0__/* .FarmTabButtons */ .A,
    FarmApyButton: _components_FarmApyButton__WEBPACK_IMPORTED_MODULE_1__/* .FarmApyButton */ .I,
    Tags: _components_Tags__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    FarmCard: _components_FarmCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    StakedLP: _components_StakedLP__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    DepositModal: _components_DepositModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    WithdrawModal: _components_WithdrawModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10582);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24671);
/* harmony import */ var _pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90712);
/* harmony import */ var _pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85576);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19206);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31436);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63815);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54198);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38962);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24278);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23992);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51036);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98119);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(85306);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84281);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33430);
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55817);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24674);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(67891);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11218);
/* harmony import */ var _components_RoiCalculatorModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_8__, _Modal_index__WEBPACK_IMPORTED_MODULE_11__, _components_RoiCalculatorModal__WEBPACK_IMPORTED_MODULE_12__, _Modal_index__WEBPACK_IMPORTED_MODULE_13__, _Modal_index__WEBPACK_IMPORTED_MODULE_14__, _Modal_index__WEBPACK_IMPORTED_MODULE_15__, _components_Message__WEBPACK_IMPORTED_MODULE_16__, _components_Skeleton__WEBPACK_IMPORTED_MODULE_20__, _components_Box__WEBPACK_IMPORTED_MODULE_21__]);
([_components_Box__WEBPACK_IMPORTED_MODULE_8__, _Modal_index__WEBPACK_IMPORTED_MODULE_11__, _components_RoiCalculatorModal__WEBPACK_IMPORTED_MODULE_12__, _Modal_index__WEBPACK_IMPORTED_MODULE_13__, _Modal_index__WEBPACK_IMPORTED_MODULE_14__, _Modal_index__WEBPACK_IMPORTED_MODULE_15__, _components_Message__WEBPACK_IMPORTED_MODULE_16__, _components_Skeleton__WEBPACK_IMPORTED_MODULE_20__, _components_Box__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const AnnualRoiContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5cb739ac-0"
})`
  cursor: pointer;
`;
const AnnualRoiDisplay = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5cb739ac-1"
})`
  width: 72px;
  max-width: 72px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
`;
const DepositModal = ({ account , max , stakedBalance , onConfirm , onDismiss , tokenName ="" , multiplier , displayApr , lpPrice , lpLabel ="" , apr =0 , addLiquidityUrl ="" , cakePrice =_pancakeswap_utils_bigNumber__WEBPACK_IMPORTED_MODULE_7__/* .BIG_ZERO */ .HW , showActiveBooster , bCakeMultiplier , showCrossChainFarmWarning , crossChainWarningText , bCakeCalculatorSlot ,  })=>{
    const { 0: val , 1: setVal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: pendingTx , 1: setPendingTx  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showRoiCalculator , 1: setShowRoiCalculator  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const fullBalance = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .getFullDisplayBalance */ .NJ)(max);
    }, [
        max
    ]);
    const lpTokensToStake = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(val);
    const fullBalanceNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(fullBalance);
    const usdToStake = lpTokensToStake.times(lpPrice);
    const interestBreakdown = (0,_pancakeswap_utils_compoundApyHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getInterestBreakdown */ .A1)({
        principalInUSD: !lpTokensToStake.isNaN() ? usdToStake.toNumber() : 0,
        apr,
        earningTokenPrice: cakePrice.toNumber()
    });
    const annualRoi = cakePrice.times(interestBreakdown[3]);
    const annualRoiAsNumber = annualRoi.toNumber();
    const formattedAnnualRoi = (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .uf)(annualRoiAsNumber, annualRoi.gt(10000) ? 0 : 2, annualRoi.gt(10000) ? 0 : 2);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        if (e.currentTarget.validity.valid) {
            setVal(e.currentTarget.value.replace(/,/g, "."));
        }
    }, [
        setVal
    ]);
    const handleSelectMax = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setVal(fullBalance);
    }, [
        fullBalance,
        setVal
    ]);
    if (showRoiCalculator) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_11__/* .ModalV2 */ .k, {
            isOpen: showRoiCalculator,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RoiCalculatorModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                account: account,
                linkLabel: t("Get %symbol%", {
                    symbol: lpLabel
                }),
                stakingTokenBalance: stakedBalance.plus(max),
                stakingTokenSymbol: tokenName,
                stakingTokenPrice: lpPrice.toNumber(),
                earningTokenPrice: cakePrice.toNumber(),
                apr: bCakeMultiplier ? apr * bCakeMultiplier : apr,
                multiplier: multiplier,
                displayApr: bCakeMultiplier ? (lodash_toNumber__WEBPACK_IMPORTED_MODULE_4___default()(displayApr) - apr + apr * bCakeMultiplier).toFixed(2) : displayApr,
                linkHref: addLiquidityUrl,
                isFarm: true,
                initialValue: val,
                onBack: ()=>setShowRoiCalculator(false),
                bCakeCalculatorSlot: bCakeCalculatorSlot
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        title: t("Stake LP tokens"),
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal_index__WEBPACK_IMPORTED_MODULE_14__/* .ModalBody */ .fe, {
            width: [
                "100%",
                "100%",
                "100%",
                "420px"
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    value: val,
                    onSelectMax: handleSelectMax,
                    onChange: handleChange,
                    max: fullBalance,
                    symbol: tokenName,
                    addLiquidityUrl: addLiquidityUrl,
                    inputTitle: t("Stake")
                }),
                showActiveBooster ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    variant: "warning",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        width: "24px",
                        color: "warning"
                    }),
                    mt: "32px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_16__/* .MessageText */ .Y, {
                        children: t("The yield booster multiplier will be updated based on the latest staking conditions.")
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    mt: "24px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            mr: "8px",
                            color: "textSubtle",
                            children: [
                                t("Annual ROI at current rates"),
                                ":"
                            ]
                        }),
                        Number.isFinite(annualRoiAsNumber) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnnualRoiContainer, {
                            alignItems: "center",
                            onClick: ()=>{
                                setShowRoiCalculator(true);
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnnualRoiDisplay, {
                                    children: [
                                        "$",
                                        formattedAnnualRoi
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                    variant: "text",
                                    scale: "sm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        color: "textSubtle",
                                        width: "18px"
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            width: 60
                        })
                    ]
                }),
                showCrossChainFarmWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    mt: "15px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        variant: "warning",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_16__/* .MessageText */ .Y, {
                            children: crossChainWarningText
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal_index__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            variant: "secondary",
                            onClick: onDismiss,
                            width: "100%",
                            disabled: pendingTx,
                            children: t("Cancel")
                        }),
                        pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            width: "100%",
                            isLoading: pendingTx,
                            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                spin: true,
                                color: "currentColor"
                            }),
                            children: t("Confirming")
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            width: "100%",
                            disabled: !lpTokensToStake.isFinite() || lpTokensToStake.eq(0) || lpTokensToStake.gt(fullBalanceNumber),
                            onClick: async ()=>{
                                setPendingTx(true);
                                await onConfirm(val);
                                onDismiss?.();
                                setPendingTx(false);
                            },
                            children: t("Confirm")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                    href: addLiquidityUrl,
                    style: {
                        alignSelf: "center"
                    },
                    children: t("Get %symbol%", {
                        symbol: tokenName
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepositModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47057:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ FarmApyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24278);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67891);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_2__]);
_components_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ApyLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6e4f849b-0"
})`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const FarmApyButton = ({ hideButton , variant , strikethrough , handleClickButton , children ,  })=>{
    const handleClick = (event)=>{
        if (hideButton) return;
        handleClickButton(event);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        flexDirection: "column",
        alignItems: "flex-start",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ApyLabelContainer, {
            alignItems: "center",
            style: {
                textDecoration: strikethrough ? "line-through" : "initial"
            },
            onClick: handleClick,
            children: [
                children,
                variant === "text-and-button" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    variant: "text",
                    scale: "sm",
                    ml: "4px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        width: "18px"
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ DetailsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24278);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33430);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_4__, _components_Skeleton__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Box__WEBPACK_IMPORTED_MODULE_4__, _components_Skeleton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-d5991636-0"
})`
  margin-top: 24px;
`;
const StyledLinkExternal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d5991636-1"
})`
  font-weight: 400;
`;
const DetailsSection = ({ scanAddressLink , infoAddress , removed , totalValueFormatted , lpLabel , addLiquidityUrl , isCommunity , auctionHostingEndDate ,  })=>{
    const { t , currentLanguage: { locale  } ,  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            isCommunity && auctionHostingEndDate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            t("Auction Hosting Ends"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: new Date(auctionHostingEndDate).toLocaleString(locale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: [
                            t("Total Liquidity"),
                            ":"
                        ]
                    }),
                    totalValueFormatted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: totalValueFormatted
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        width: 75,
                        height: 25
                    })
                ]
            }),
            !removed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                href: addLiquidityUrl,
                children: t("Get %symbol%", {
                    symbol: lpLabel
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                href: scanAddressLink,
                children: t("View Contract")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLinkExternal, {
                href: infoAddress,
                children: t("See Pair Info")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailsSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DetailsSection__WEBPACK_IMPORTED_MODULE_0__]);
_DetailsSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const FarmCard = {
    DetailsSection: _DetailsSection__WEBPACK_IMPORTED_MODULE_0__/* .DetailsSection */ .j
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FarmCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ FarmTabButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24953);
/* harmony import */ var _components_NextLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12849);
/* harmony import */ var _components_NotificationDot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18086);
/* harmony import */ var _components_ButtonMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64349);
/* harmony import */ var _components_ButtonMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74813);








const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-f1179f75-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`;
const FarmTabButtons = ({ hasStakeInFinishedFarms  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    let activeIndex;
    switch(router.pathname){
        case "/farms":
            activeIndex = 0;
            break;
        case "/farms/history":
            activeIndex = 1;
            break;
        case "/_mp/farms/history":
            activeIndex = 1;
            break;
        case "/farms/archived":
            activeIndex = 2;
            break;
        default:
            activeIndex = 0;
            break;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ButtonMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            activeIndex: activeIndex,
            scale: "sm",
            variant: "subtle",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    as: _components_NextLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                    to: "/farms",
                    children: t("Live")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NotificationDot__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    show: hasStakeInFinishedFarms,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        as: _components_NextLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                        to: "/farms/history",
                        id: "finished-farms-button",
                        children: t("Finished")
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 54255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24671);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41742);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98841);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_3__, _components_Balance__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Box__WEBPACK_IMPORTED_MODULE_3__, _components_Balance__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const StakedLP = ({ stakedBalance , quoteTokenSymbol , tokenSymbol , lpTotalSupply , lpTokenPrice , tokenAmountTotal , quoteTokenAmountTotal , pendingFarmLength , onClickLoadingIcon ,  })=>{
    const displayBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatLpBalance */ .O$)(stakedBalance);
    }, [
        stakedBalance
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        flexDirection: "column",
        alignItems: "flex-start",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        color: stakedBalance.eq(0) ? "textDisabled" : "text",
                        children: displayBalance
                    }),
                    pendingFarmLength > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        style: {
                            cursor: "pointer"
                        },
                        spin: true,
                        onClick: onClickLoadingIcon
                    })
                ]
            }),
            stakedBalance.gt(0) && lpTokenPrice.gt(0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Balance__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        fontSize: "12px",
                        color: "textSubtle",
                        decimals: 2,
                        value: (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .getBalanceNumber */ .mW)(lpTokenPrice.times(stakedBalance)),
                        unit: " USD",
                        prefix: "~"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        style: {
                            gap: "4px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Balance__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                decimals: 2,
                                value: stakedBalance.div(lpTotalSupply).times(tokenAmountTotal).toNumber(),
                                unit: ` ${tokenSymbol}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Balance__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                decimals: 2,
                                value: stakedBalance.div(lpTotalSupply).times(quoteTokenAmountTotal).toNumber(),
                                unit: ` ${quoteTokenSymbol}`
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakedLP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51036);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19193);
/* harmony import */ var _components_Tag_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72362);
/* harmony import */ var _hooks_useTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10898);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97861);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95121);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1239);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11218);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82362);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47418);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41194);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const CoreTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "secondary",
        style: {
            background: "none"
        },
        outline: true,
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: "18px",
            color: "secondary",
            mr: "4px"
        }),
        ...props,
        children: t("Core")
    });
};
const FarmAuctionTagToolTipContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        color: "text",
        children: t("Farm Auction Winner, add liquidity at your own risk.")
    });
});
const FarmAuctionTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FarmAuctionTagToolTipContent, {}), {
        placement: "right"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                ref: targetRef,
                style: {
                    textDecoration: "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    variant: "failure",
                    outline: true,
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        width: "18px",
                        color: "failure",
                        mr: "4px"
                    }),
                    ...props,
                    children: t("Farm Auction")
                })
            })
        ]
    });
};
const StableFarmTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("Fees are lower for stable LP", {
        placement: "right"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                ref: targetRef,
                style: {
                    textDecoration: "none",
                    alignSelf: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    variant: "failure",
                    outline: true,
                    ...props,
                    children: t("Stable LP")
                })
            })
        ]
    });
};
const CommunityTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "failure",
        outline: true,
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            width: "18px",
            color: "failure",
            mr: "4px"
        }),
        ...props,
        children: t("Community")
    });
};
const DualTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "textSubtle",
        outline: true,
        ...props,
        children: t("Dual")
    });
};
const ManualPoolTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "secondary",
        outline: true,
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            width: "18px",
            color: "secondary",
            mr: "4px"
        }),
        ...props,
        children: t("Manual")
    });
};
const CompoundingPoolTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "success",
        outline: true,
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            width: "18px",
            color: "success",
            mr: "4px"
        }),
        ...props,
        children: t("Auto")
    });
};
const VoteNowTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "success",
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            width: "18px",
            color: "success",
            mr: "4px"
        }),
        ...props,
        children: t("Vote Now")
    });
};
const SoonTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "binance",
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            width: "18px",
            color: "success",
            mr: "4px"
        }),
        ...props,
        children: t("Soon")
    });
};
const ClosedTag = (props)=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "textDisabled",
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            width: "18px",
            color: "textDisabled",
            mr: "4px"
        }),
        ...props,
        children: t("Closed")
    });
};
const Tags = {
    CoreTag,
    FarmAuctionTag,
    DualTag,
    ManualPoolTag,
    CompoundingPoolTag,
    VoteNowTag,
    SoonTag,
    ClosedTag,
    CommunityTag,
    StableFarmTag
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24953);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85306);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11218);
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55817);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23992);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31436);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63815);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54198);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal_index__WEBPACK_IMPORTED_MODULE_5__, _Modal_index__WEBPACK_IMPORTED_MODULE_6__, _Modal_index__WEBPACK_IMPORTED_MODULE_7__, _components_Message__WEBPACK_IMPORTED_MODULE_8__, _components_Box__WEBPACK_IMPORTED_MODULE_9__]);
([_Modal_index__WEBPACK_IMPORTED_MODULE_5__, _Modal_index__WEBPACK_IMPORTED_MODULE_6__, _Modal_index__WEBPACK_IMPORTED_MODULE_7__, _components_Message__WEBPACK_IMPORTED_MODULE_8__, _components_Box__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const WithdrawModal = ({ onConfirm , onDismiss , max , tokenName ="" , showActiveBooster , showCrossChainFarmWarning ,  })=>{
    const { 0: val , 1: setVal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: pendingTx , 1: setPendingTx  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const fullBalance = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .getFullDisplayBalance */ .NJ)(max);
    }, [
        max
    ]);
    const valNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(val);
    const fullBalanceNumber = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(fullBalance);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        if (e.currentTarget.validity.valid) {
            setVal(e.currentTarget.value.replace(/,/g, "."));
        }
    }, [
        setVal
    ]);
    const handleSelectMax = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setVal(fullBalance);
    }, [
        fullBalance,
        setVal
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        title: t("Unstake LP tokens"),
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal_index__WEBPACK_IMPORTED_MODULE_6__/* .ModalBody */ .fe, {
            width: [
                "100%",
                "100%",
                "100%",
                "420px"
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    onSelectMax: handleSelectMax,
                    onChange: handleChange,
                    value: val,
                    max: fullBalance,
                    symbol: tokenName,
                    inputTitle: t("Unstake")
                }),
                showActiveBooster ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    variant: "warning",
                    mt: "8px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_8__/* .MessageText */ .Y, {
                        children: t("The yield booster multiplier will be updated based on the latest staking conditions.")
                    })
                }) : null,
                showCrossChainFarmWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    mt: "15px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        variant: "warning",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Message__WEBPACK_IMPORTED_MODULE_8__/* .MessageText */ .Y, {
                            children: t("For safety, cross-chain transactions will take around 30 minutes to confirm.")
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            variant: "secondary",
                            onClick: onDismiss,
                            width: "100%",
                            disabled: pendingTx,
                            children: t("Cancel")
                        }),
                        pendingTx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            width: "100%",
                            isLoading: pendingTx,
                            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                spin: true,
                                color: "currentColor"
                            }),
                            children: t("Confirming")
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            width: "100%",
                            disabled: !valNumber.isFinite() || valNumber.eq(0) || valNumber.gt(fullBalanceNumber),
                            onClick: async ()=>{
                                setPendingTx(true);
                                await onConfirm(val);
                                onDismiss?.();
                                setPendingTx(false);
                            },
                            children: t("Confirm")
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithdrawModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Modal_ModalActions)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../packages/uikit/src/widgets/Modal/Spacer.tsx



const Spacer = ({ size ="md"  })=>{
    const { spacing  } = (0,external_react_.useContext)(external_styled_components_.ThemeContext);
    let s;
    switch(size){
        case "lg":
            s = spacing[6];
            break;
        case "sm":
            s = spacing[2];
            break;
        case "md":
        default:
            s = spacing[4];
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledSpacer, {
        size: s
    });
};
const StyledSpacer = external_styled_components_default().div.withConfig({
    componentId: "sc-ef2329f3-0"
})`
  height: ${(props)=>props.size};
  width: ${(props)=>props.size};
`;
/* harmony default export */ const Modal_Spacer = (Spacer);

;// CONCATENATED MODULE: ../../packages/uikit/src/widgets/Modal/ModalActions.tsx




const ModalActions = ({ children  })=>{
    const l = external_react_.Children.toArray(children).length;
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledModalActions, {
        children: external_react_.Children.map(children, (child, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledModalAction, {
                        children: child
                    }),
                    i < l - 1 && /*#__PURE__*/ jsx_runtime_.jsx(Modal_Spacer, {})
                ]
            }))
    });
};
const StyledModalActions = external_styled_components_default().div.withConfig({
    componentId: "sc-d6150695-0"
})`
  align-items: center;
  background-color: ${(props)=>props.theme.colors.primaryDark}00;
  display: flex;
  margin: 0;
  padding: ${(props)=>props.theme.spacing[4]} 0;
`;
const StyledModalAction = external_styled_components_default().div.withConfig({
    componentId: "sc-d6150695-1"
})`
  flex: 1;
`;
/* harmony default export */ const Modal_ModalActions = (ModalActions);


/***/ }),

/***/ 54198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24953);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24671);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24278);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51036);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80423);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85306);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_7__]);
_components_Box__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const StyledTokenInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-6c1adf1d-0"
})`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  box-shadow: ${({ theme , isWarning  })=>isWarning ? theme.colors.warning : theme.shadows.inset};
  color: ${({ theme  })=>theme.colors.text};
  padding: 8px 16px 8px 0;
  width: 100%;
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6c1adf1d-1"
})`
  box-shadow: none;
  width: 60px;
  margin: 0 8px;
  padding: 0 8px;
  border: none;

  ${({ theme  })=>theme.mediaQueries.xs} {
    width: 80px;
  }

  ${({ theme  })=>theme.mediaQueries.sm} {
    width: auto;
  }
`;
const StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6c1adf1d-2"
})`
  position: absolute;
  bottom: -22px;
  a {
    display: inline;
  }
`;
const ModalInput = ({ max , symbol , onChange , onSelectMax , value , addLiquidityUrl , inputTitle , decimals =18 ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const isBalanceZero = max === "0" || !max;
    const displayBalance = (balance)=>{
        if (isBalanceZero) {
            return "0";
        }
        const balanceUnits = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_3__.parseUnits)(balance, decimals);
        return (0,_pancakeswap_utils_formatBalance__WEBPACK_IMPORTED_MODULE_4__/* .formatBigNumber */ .dp)(balanceUnits, decimals, decimals);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTokenInput, {
                isWarning: isBalanceZero,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        justifyContent: "space-between",
                        pl: "16px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                fontSize: "14px",
                                children: inputTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                fontSize: "14px",
                                children: t("Balance: %balance%", {
                                    balance: displayBalance(max)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                pattern: `^[0-9]*[.,]?[0-9]{0,${decimals}}$`,
                                inputMode: "decimal",
                                step: "any",
                                min: "0",
                                onChange: onChange,
                                placeholder: "0",
                                value: value
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                scale: "sm",
                                onClick: onSelectMax,
                                mr: "8px",
                                children: t("Max")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                fontSize: "16px",
                                children: symbol
                            })
                        ]
                    })
                ]
            }),
            isBalanceZero && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledErrorMessage, {
                fontSize: "14px",
                color: "failure",
                children: [
                    t("No tokens to stake"),
                    ":",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        fontSize: "14px",
                        bold: false,
                        href: addLiquidityUrl,
                        external: true,
                        color: "failure",
                        children: t("Get %symbol%", {
                            symbol
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1": () => (/* binding */ getInterestBreakdown),
/* harmony export */   "Lu": () => (/* binding */ getRoi),
/* harmony export */   "_b": () => (/* binding */ getPrincipalForInterest),
/* harmony export */   "g5": () => (/* binding */ getApy)
/* harmony export */ });
// 1 day, 7 days, 30 days, 1 year, 5 years
const DAYS_TO_CALCULATE_AGAINST = [
    1,
    7,
    30,
    365,
    1825
];
/**
 *
 * @param principalInUSD - amount user wants to invest in USD
 * @param apr - farm or pool apr as percentage. If its farm APR its only cake rewards APR without LP rewards APR
 * @param earningTokenPrice - price of reward token
 * @param compoundFrequency - how many compounds per 1 day, e.g. 1 = one per day, 0.142857142 - once per week
 * @param performanceFee - performance fee as percentage
 * @returns an array of token values earned as interest, with each element representing interest earned over a different period of time (DAYS_TO_CALCULATE_AGAINST)
 */ const getInterestBreakdown = ({ principalInUSD , apr , earningTokenPrice , compoundFrequency =1 , performanceFee =0  })=>{
    // Everything here is worked out relative to a year, with the asset compounding at the compoundFrequency rate. 1 = once per day
    const timesCompounded = 365 * compoundFrequency;
    // We use decimal values rather than % in the math for both APY and the number of days being calculates as a proportion of the year
    const aprAsDecimal = apr / 100;
    // special handling for tokens like tBTC or BIFI where the daily token rewards for $1000 dollars will be less than 0.001 of that token
    // and also cause rounding errors
    const isHighValueToken = Math.round(earningTokenPrice / 1000) > 0;
    const roundingDecimalsNew = isHighValueToken ? 5 : 3;
    return DAYS_TO_CALCULATE_AGAINST.map((days)=>{
        const daysAsDecimalOfYear = days / 365;
        // Calculate the starting TOKEN balance with a dollar balance of principalInUSD.
        const principal = principalInUSD / earningTokenPrice;
        let interestEarned = principal * aprAsDecimal * (days / 365);
        if (timesCompounded !== 0) {
            // This is a translation of the typical mathematical compounding APY formula. Details here: https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
            const accruedAmount = principal * (1 + aprAsDecimal / timesCompounded) ** (timesCompounded * daysAsDecimalOfYear);
            // To get the TOKEN amount earned, deduct the amount after compounding (accruedAmount) from the starting TOKEN balance (principal)
            interestEarned = accruedAmount - principal;
            if (performanceFee) {
                const performanceFeeAsDecimal = performanceFee / 100;
                const performanceFeeAsAmount = interestEarned * performanceFeeAsDecimal;
                interestEarned -= performanceFeeAsAmount;
            }
        }
        return parseFloat(interestEarned.toFixed(roundingDecimalsNew));
    });
};
/**
 * @param interest how much USD amount you aim to make
 * @param apr APR of farm/pool
 * @param compoundingFrequency how many compounds per 1 day, e.g. 1 = one per day, 0.142857142 - once per week
 * @returns an array of principal values needed to reach target interest, with each element representing principal needed for a different period of time (DAYS_TO_CALCULATE_AGAINST)
 */ const getPrincipalForInterest = (interest, apr, compoundingFrequency, performanceFee = 0)=>{
    return DAYS_TO_CALCULATE_AGAINST.map((days)=>{
        const apyAsDecimal = getApy(apr, compoundingFrequency, days, performanceFee);
        // console.log('inside', interest, apyAsDecimal)
        // const apyAsBN = new BigNumber(apyAsDecimal).decimalPlaces(6, BigNumber.ROUND_DOWN).toNumber()
        return parseFloat((interest / apyAsDecimal).toFixed(2));
    });
};
/**
 * Given APR returns APY
 * @param apr APR as percentage
 * @param compoundFrequency how many compounds per day
 * @param days if other than 365 adjusts (A)PY for period less than a year
 * @param performanceFee performance fee as percentage
 * @returns APY as decimal
 */ const getApy = (apr, compoundFrequency = 1, days = 365, performanceFee = 0)=>{
    const daysAsDecimalOfYear = days / 365;
    const aprAsDecimal = apr / 100;
    const timesCompounded = 365 * compoundFrequency;
    let apyAsDecimal = apr / 100 * daysAsDecimalOfYear;
    if (timesCompounded > 0) {
        apyAsDecimal = (1 + aprAsDecimal / timesCompounded) ** (timesCompounded * daysAsDecimalOfYear) - 1;
    }
    if (performanceFee) {
        const performanceFeeAsDecimal = performanceFee / 100;
        const takenAsPerformanceFee = apyAsDecimal * performanceFeeAsDecimal;
        apyAsDecimal -= takenAsPerformanceFee;
    }
    return apyAsDecimal;
};
const getRoi = ({ amountEarned , amountInvested  })=>{
    if (amountInvested === 0) {
        return 0;
    }
    const percentage = amountEarned / amountInvested * 100;
    return percentage;
};


/***/ })

};
;
//# sourceMappingURL=2317.js.map