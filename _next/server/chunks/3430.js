"use strict";
exports.id = 3430;
exports.ids = [3430];
exports.modules = {

/***/ 33430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ SkeletonV2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22884);
/* harmony import */ var _util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78985);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const waves = styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;
const pulse = styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;
const AnimationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div).withConfig({
    componentId: "sc-eba41aa1-0"
})`
  position: relative;
  will-change: opacity;
  opacity: 0;
  &.appear {
    animation: ${_util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .appearAnimation */ .Oz} 0.3s ease-in-out forwards;
  }
  &.disappear {
    animation: ${_util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .disappearAnimation */ .a4} 0.3s ease-in-out forwards;
  }
`;
const SkeletonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-eba41aa1-1"
})`
  position: relative;
  ${styled_system__WEBPACK_IMPORTED_MODULE_4__.layout}
  ${styled_system__WEBPACK_IMPORTED_MODULE_4__.space}
  overflow: hidden;
`;
const Root = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-eba41aa1-2"
})`
  min-height: 20px;
  display: block;
  background-color: ${({ theme  })=>theme.colors.backgroundDisabled};
  border-radius: ${({ variant , theme  })=>variant === _types__WEBPACK_IMPORTED_MODULE_6__/* .variant.CIRCLE */ .b.CIRCLE ? theme.radii.circle : variant === _types__WEBPACK_IMPORTED_MODULE_6__/* .variant.ROUND */ .b.ROUND ? theme.radii.default : theme.radii.small};
  ${styled_system__WEBPACK_IMPORTED_MODULE_4__.layout}
  ${styled_system__WEBPACK_IMPORTED_MODULE_4__.space}
  ${styled_system__WEBPACK_IMPORTED_MODULE_4__.borderRadius}
`;
const Pulse = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Root).withConfig({
    componentId: "sc-eba41aa1-3"
})`
  animation: ${pulse} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
`;
const Waves = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Root).withConfig({
    componentId: "sc-eba41aa1-4"
})`
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
const Skeleton = ({ variant =_types__WEBPACK_IMPORTED_MODULE_6__/* .variant.RECT */ .b.RECT , animation =_types__WEBPACK_IMPORTED_MODULE_6__/* .animation.PULSE */ .o.PULSE , ...props })=>{
    if (animation === _types__WEBPACK_IMPORTED_MODULE_6__/* .animation.WAVES */ .o.WAVES) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Waves, {
            variant: variant,
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Pulse, {
        variant: variant,
        ...props
    });
};
const SkeletonV2 = ({ variant =_types__WEBPACK_IMPORTED_MODULE_6__/* .variant.RECT */ .b.RECT , animation =_types__WEBPACK_IMPORTED_MODULE_6__/* .animation.PULSE */ .o.PULSE , isDataReady =false , children , wrapperProps , skeletonTop ="0" , skeletonLeft ="0" , width , height , mr , ml , ...props })=>{
    const animationRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const skeletonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkeletonWrapper, {
        width: width,
        height: height,
        mr: mr,
        ml: ml,
        ...wrapperProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.LazyMotion, {
            features: framer_motion__WEBPACK_IMPORTED_MODULE_1__.domAnimation,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                children: [
                    isDataReady && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimationWrapper, {
                        ref: animationRef,
                        onAnimationStart: ()=>(0,_util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .animationHandler */ .BI)(animationRef.current),
                        ..._util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .animationMap */ .Gc,
                        variants: _util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .animationVariants */ .ji,
                        transition: {
                            duration: 0.3
                        },
                        children: children
                    }, "content"),
                    !isDataReady && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimationWrapper, {
                        style: {
                            position: "absolute",
                            top: skeletonTop,
                            left: skeletonLeft
                        },
                        ref: skeletonRef,
                        onAnimationStart: ()=>(0,_util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .animationHandler */ .BI)(skeletonRef.current),
                        ..._util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .animationMap */ .Gc,
                        variants: _util_animationToolkit__WEBPACK_IMPORTED_MODULE_5__/* .animationVariants */ .ji,
                        transition: {
                            duration: 0.3
                        },
                        children: animation === _types__WEBPACK_IMPORTED_MODULE_6__/* .animation.WAVES */ .o.WAVES ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Waves, {
                            variant: variant,
                            ...props,
                            width: width,
                            height: height
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Pulse, {
                            variant: variant,
                            ...props,
                            width: width,
                            height: height
                        })
                    }, "skeleton")
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ variant),
/* harmony export */   "o": () => (/* binding */ animation)
/* harmony export */ });
const animation = {
    WAVES: "waves",
    PULSE: "pulse"
};
const variant = {
    RECT: "rect",
    ROUND: "round",
    CIRCLE: "circle"
};


/***/ })

};
;
//# sourceMappingURL=3430.js.map