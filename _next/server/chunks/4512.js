"use strict";
exports.id = 4512;
exports.ids = [4512];
exports.modules = {

/***/ 54933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q4": () => (/* binding */ unmountAnimation),
/* harmony export */   "SE": () => (/* binding */ mountAnimation),
/* harmony export */   "qt": () => (/* binding */ DrawerContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/prefer-default-export */ 
const mountAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
    0% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0%);
    }
  `;
const unmountAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(20%);
    }
  `;
const DrawerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a4321cba-0"
})`
  width: 100%;
  height: 80vh;
  bottom: 0;
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  position: fixed;
  animation: ${mountAnimation} 350ms ease forwards;
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  will-change: transform;
  z-index: 21;
  ${({ isUnmounting  })=>isUnmounting && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      animation: ${unmountAnimation} 350ms ease forwards;
    `}
`;


/***/ }),

/***/ 45201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Overlay */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_3__]);
_Box__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const unmountAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;
const mountAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
    0% {
     opacity: 0;
    }
    100% {
     opacity: 1;
    }
  `;
const StyledOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-de82043-0"
})`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme  })=>`${theme.colors.text99}`};
  z-index: 20;
  will-change: opacity;
  animation: ${mountAnimation} 350ms ease forwards;
  ${({ isUnmounting  })=>isUnmounting && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      animation: ${unmountAnimation} 350ms ease forwards;
    `}
`;
const BodyLock = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.body.style.cssText = `
      overflow: hidden;
    `;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `;
        };
    }, []);
    return null;
};
const Overlay = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BodyLock, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledOverlay, {
                role: "presentation",
                ...props
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_y": () => (/* binding */ Context),
/* harmony export */   "iI": () => (/* binding */ StyledModalWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BottomDrawer_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54933);
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45201);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73221);
/* harmony import */ var _util_animationToolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78985);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _styles__WEBPACK_IMPORTED_MODULE_5__, _components_Overlay__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _styles__WEBPACK_IMPORTED_MODULE_5__, _components_Overlay__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div).withConfig({
    componentId: "sc-318d5b1d-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme  })=>theme.zIndices.modal - 1};
  will-change: opacity;
  opacity: 0;
  &.appear {
    animation: ${_util_animationToolkit__WEBPACK_IMPORTED_MODULE_4__/* .appearAnimation */ .Oz} 0.3s ease-in-out forwards;
    ${_styles__WEBPACK_IMPORTED_MODULE_5__/* .ModalContainer */ .F0} {
      animation: ${_components_BottomDrawer_styles__WEBPACK_IMPORTED_MODULE_6__/* .mountAnimation */ .SE} 0.3s ease-in-out forwards;
      ${({ theme  })=>theme.mediaQueries.md} {
        animation: none;
      }
    }
  }
  &.disappear {
    animation: ${_util_animationToolkit__WEBPACK_IMPORTED_MODULE_4__/* .disappearAnimation */ .a4} 0.3s ease-in-out forwards;
    ${_styles__WEBPACK_IMPORTED_MODULE_5__/* .ModalContainer */ .F0} {
      animation: ${_components_BottomDrawer_styles__WEBPACK_IMPORTED_MODULE_6__/* .unmountAnimation */ .Q4} 0.3s ease-in-out forwards;
      ${({ theme  })=>theme.mediaQueries.md} {
        animation: none;
      }
    }
  }
`;
const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: ()=>null,
    onPresent: ()=>null,
    onDismiss: ()=>null
});
const ModalProvider = ({ children  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: modalNode , 1: setModalNode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: nodeId , 1: setNodeId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: closeOnOverlayClick , 1: setCloseOnOverlayClick  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const animationRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useIsomorphicEffect */ .Y)(()=>{
        const setViewportHeight = ()=>{
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setViewportHeight();
        window.addEventListener("resize", setViewportHeight);
        return ()=>window.removeEventListener("resize", setViewportHeight);
    }, []);
    const handlePresent = (node, newNodeId, closeOverlayClick)=>{
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
        setCloseOnOverlayClick(closeOverlayClick);
    };
    const handleDismiss = ()=>{
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
        setCloseOnOverlayClick(true);
    };
    const handleOverlayDismiss = ()=>{
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Context.Provider, {
        value: {
            isOpen,
            nodeId,
            modalNode,
            setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.LazyMotion, {
                features: framer_motion__WEBPACK_IMPORTED_MODULE_1__.domMax,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                    children: isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledModalWrapper, {
                        ref: animationRef,
                        onAnimationStart: ()=>(0,_util_animationToolkit__WEBPACK_IMPORTED_MODULE_4__/* .animationHandler */ .BI)(animationRef.current),
                        ..._util_animationToolkit__WEBPACK_IMPORTED_MODULE_4__/* .animationMap */ .Gc,
                        variants: _util_animationToolkit__WEBPACK_IMPORTED_MODULE_4__/* .animationVariants */ .ji,
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Overlay__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                onClick: handleOverlayDismiss
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(modalNode) && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(modalNode, {
                                // @ts-ignore
                                onDismiss: handleDismiss
                            })
                        ]
                    })
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F0": () => (/* binding */ ModalContainer),
/* harmony export */   "fe": () => (/* binding */ ModalBody),
/* harmony export */   "ol": () => (/* binding */ ModalCloseButton),
/* harmony export */   "r6": () => (/* binding */ ModalTitle),
/* harmony export */   "vy": () => (/* binding */ ModalBackButton),
/* harmony export */   "xB": () => (/* binding */ ModalHeader)
/* harmony export */ });
/* unused harmony export mobileFooterHeight */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Box_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24278);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23992);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60789);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83852);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box_Flex__WEBPACK_IMPORTED_MODULE_3__, _components_Box__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Box_Flex__WEBPACK_IMPORTED_MODULE_3__, _components_Box__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const mobileFooterHeight = 73;
const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-7630ff66-0"
})`
  align-items: center;
  background: transparent;
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  display: flex;
  padding: 12px 24px;

  ${({ theme  })=>theme.mediaQueries.md} {
    background: ${({ background  })=>background || "transparent"};
  }
`;
const ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_Box_Flex__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-7630ff66-1"
})`
  align-items: center;
  flex: 1;
`;
const ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_Box_Flex__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-7630ff66-2"
})`
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(90vh - ${mobileFooterHeight}px);
  ${({ theme  })=>theme.mediaQueries.md} {
    display: flex;
    max-height: 90vh;
  }
`;
const ModalCloseButton = ({ onDismiss ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        variant: "text",
        onClick: onDismiss,
        "aria-label": "Close the dialog",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            color: "primary"
        })
    });
};
const ModalBackButton = ({ onBack  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        variant: "text",
        onClick: onBack,
        "area-label": "go back",
        mr: "8px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "primary"
        })
    });
};
const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_Box__WEBPACK_IMPORTED_MODULE_7__/* .MotionBox */ .u).withConfig({
    componentId: "sc-7630ff66-3"
})`
  overflow: hidden;
  background: ${({ theme  })=>theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 32px 32px 0px 0px;
  width: 100%;
  max-height: calc(var(--vh, 1vh) * 100);
  z-index: ${({ theme  })=>theme.zIndices.modal};
  position: absolute;
  min-width: ${({ $minWidth  })=>$minWidth};
  bottom: 0;
  max-width: none !important;
  min-height: 300px;

  ${({ theme  })=>theme.mediaQueries.md} {
    width: auto;
    position: auto;
    bottom: auto;
    border-radius: 32px;
    max-height: 100vh;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=4512.js.map