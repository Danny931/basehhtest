"use strict";
exports.id = 7775;
exports.ids = [7775];
exports.modules = {

/***/ 65726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Nr": () => (/* reexport */ useDebounce),
  "ai": () => (/* reexport */ useHttpLocations),
  "Yz": () => (/* reexport */ useInterval),
  "tm": () => (/* reexport */ useIsMounted),
  "yr": () => (/* reexport */ useIsWindowVisible),
  "sP": () => (/* reexport */ src_useLastUpdated),
  "uE": () => (/* reexport */ usePreloadImages),
  "zP": () => (/* reexport */ src_usePreviousValue)
});

// UNUSED EXPORTS: useDebouncedChangeHandler

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ../../packages/hooks/src/usePreviousValue.ts

/**
 * Returns the previous value of the given value
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */ const usePreviousValue = (value)=>{
    const ref = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
};
/* harmony default export */ const src_usePreviousValue = (usePreviousValue);

;// CONCATENATED MODULE: ../../packages/hooks/src/useLastUpdated.ts


/**
 * A helper hook to keep track of the time between events
 * Can also be used to force an effect to re-run
 */ const useLastUpdated = ()=>{
    const { 0: lastUpdated , 1: setStateLastUpdated  } = (0,external_react_.useState)(()=>Date.now());
    const previousLastUpdated = src_usePreviousValue(lastUpdated);
    const setLastUpdated = (0,external_react_.useCallback)(()=>{
        setStateLastUpdated(Date.now());
    }, [
        setStateLastUpdated
    ]);
    return {
        lastUpdated,
        previousLastUpdated,
        setLastUpdated
    };
};
/* harmony default export */ const src_useLastUpdated = (useLastUpdated);

// EXTERNAL MODULE: ../../packages/utils/isUndefinedOrNull.ts
var isUndefinedOrNull = __webpack_require__(45366);
;// CONCATENATED MODULE: ../../packages/hooks/src/useInterval.ts



function useInterval(callback, delay, leading = true, initiateUpdate = true) {
    const { 0: runImmediate , 1: setRunImmediate  } = (0,external_react_.useState)(leading);
    const { 0: runAfter , 1: setRunAfter  } = (0,external_react_.useState)(delay);
    const savedCallback = (0,external_react_.useRef)(callback);
    const { 0: isReadyForUpdate , 1: setIsReadyForUpdate  } = (0,external_react_.useState)(false);
    const { lastUpdated , setLastUpdated: refresh  } = src_useLastUpdated();
    // Use props indirectly to not render set up timeout effect twice if both props changed.
    (0,external_react_.useEffect)(()=>{
        setRunImmediate(leading);
        setRunAfter(delay);
    }, [
        leading,
        delay
    ]);
    const tick = (0,external_react_.useCallback)(()=>{
        setIsReadyForUpdate(true);
    }, []);
    // Remember the latest callback.
    (0,external_react_.useEffect)(()=>{
        savedCallback.current = callback;
    }, [
        callback
    ]);
    (0,external_react_.useEffect)(()=>{
        if (initiateUpdate && isReadyForUpdate) {
            savedCallback.current?.();
            setIsReadyForUpdate(false);
            setRunImmediate(false);
            refresh();
        }
    }, [
        initiateUpdate,
        isReadyForUpdate,
        refresh
    ]);
    // Set up the timeout.
    (0,external_react_.useEffect)(()=>{
        if (!(0,isUndefinedOrNull/* default */.Z)(runAfter)) {
            if (runImmediate) tick();
            else {
                const id = setTimeout(tick, runAfter);
                return ()=>{
                    setIsReadyForUpdate(false);
                    clearTimeout(id);
                };
            }
        }
        return ()=>setIsReadyForUpdate(false);
    }, [
        runAfter,
        runImmediate,
        lastUpdated,
        tick
    ]);
}

;// CONCATENATED MODULE: ../../packages/hooks/src/useIsWindowVisible.ts

function isWindowVisible() {
    if (!(typeof document !== "undefined" && "visibilityState" in document)) {
        return true;
    }
    return document.visibilityState === "visible";
}
/**
 * Returns whether the window is currently visible to the user.
 */ function useIsWindowVisible() {
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(()=>isWindowVisible());
    (0,external_react_.useEffect)(()=>{
        if (!("visibilityState" in document)) return undefined;
        const handleVisibilityChange = ()=>{
            setIsVisible(isWindowVisible());
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>{
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [
        setIsVisible
    ]);
    return isVisible;
}

;// CONCATENATED MODULE: ../../packages/hooks/src/useDebounce.ts

// modified from https://usehooks.com/useDebounce/
function useDebounce(value, delay) {
    const { 0: debouncedValue , 1: setDebouncedValue  } = (0,external_react_.useState)(value);
    (0,external_react_.useEffect)(()=>{
        // Update debounced value after delay
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}

// EXTERNAL MODULE: ../../packages/utils/uriToHttp.ts
var uriToHttp = __webpack_require__(86287);
;// CONCATENATED MODULE: ../../packages/hooks/src/useHttpLocations.ts


function useHttpLocations(uri) {
    return (0,external_react_.useMemo)(()=>{
        return uri ? (0,uriToHttp/* default */.Z)(uri) : [];
    }, [
        uri
    ]);
}

;// CONCATENATED MODULE: ../../packages/hooks/src/useDebouncedChangeHandler.ts

/**
 * Easy way to debounce the handling of a rapidly changing value, e.g. a changing slider input
 * @param value value that is rapidly changing
 * @param onChange change handler that should receive the debounced updates to the value
 * @param debouncedMs how long we should wait for changes to be applied
 */ function useDebouncedChangeHandler(value, onChange, debouncedMs = 100) {
    const { 0: inner , 1: setInner  } = useState(()=>value);
    const timer = useRef();
    const onChangeInner = useCallback((newValue)=>{
        setInner(newValue);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(()=>{
            onChange(newValue);
            timer.current = undefined;
        }, debouncedMs);
    }, [
        debouncedMs,
        onChange
    ]);
    useEffect(()=>{
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = undefined;
        }
        setInner(value);
    }, [
        value
    ]);
    return [
        inner,
        onChangeInner
    ];
}

;// CONCATENATED MODULE: ../../packages/hooks/src/useIsMounted.ts

function useIsMounted() {
    const { 0: isMounted , 1: setIsMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    return isMounted;
}

;// CONCATENATED MODULE: ../../packages/hooks/src/usePreloadImage.ts

const preloadImageMap = new Map();
const usePreloadImages = (imageSources)=>{
    (0,external_react_.useEffect)(()=>{
        // eslint-disable-next-line no-restricted-syntax
        for (const src of imageSources){
            if (!preloadImageMap.has(src)) {
                preloadImageMap.set(src, true);
                const img = new Image();
                img.src = src;
            }
        }
    }, [
        imageSources
    ]);
};

;// CONCATENATED MODULE: ../../packages/hooks/src/index.ts











/***/ }),

/***/ 24953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iL": () => (/* reexport */ LanguageProvider),
  "cC": () => (/* reexport */ Trans),
  "jq": () => (/* reexport */ getLanguageCodeFromLS),
  "s0": () => (/* reexport */ config_languages),
  "$G": () => (/* reexport */ src_useTranslation)
});

// UNUSED EXPORTS: LS_KEY, LanguageContext, fetchLocale, translations

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ../../packages/hooks/src/index.ts + 9 modules
var src = __webpack_require__(65726);
// EXTERNAL MODULE: external "lodash/memoize"
var memoize_ = __webpack_require__(50541);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize_);
// EXTERNAL MODULE: external "lodash/omitBy"
var omitBy_ = __webpack_require__(66011);
var omitBy_default = /*#__PURE__*/__webpack_require__.n(omitBy_);
// EXTERNAL MODULE: external "lodash/reduce"
var reduce_ = __webpack_require__(9822);
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce_);
// EXTERNAL MODULE: ../../packages/utils/isUndefinedOrNull.ts
var isUndefinedOrNull = __webpack_require__(45366);
;// CONCATENATED MODULE: ../../packages/localization/src/config/languages.ts
const AR = {
    locale: "ar-SA",
    language: "العربية",
    code: "ar"
};
const BN = {
    locale: "bn-BD",
    language: "বাংলা",
    code: "bn"
};
const EN = {
    locale: "en-US",
    language: "English",
    code: "en"
};
const DE = {
    locale: "de-DE",
    language: "Deutsch",
    code: "de"
};
const EL = {
    locale: "el-GR",
    language: "Ελληνικά",
    code: "el"
};
const ESES = {
    locale: "es-ES",
    language: "Espa\xf1ol",
    code: "es-ES"
};
const FI = {
    locale: "fi-FI",
    language: "Suomalainen",
    code: "fi"
};
const FIL = {
    locale: "fil-PH",
    language: "Filipino",
    code: "fil"
};
const FR = {
    locale: "fr-FR",
    language: "Fran\xe7ais",
    code: "fr"
};
const HI = {
    locale: "hi-IN",
    language: "हिंदी",
    code: "hi"
};
const HU = {
    locale: "hu-HU",
    language: "Magyar",
    code: "hu"
};
const ID = {
    locale: "id-ID",
    language: "Bahasa Indonesia",
    code: "id"
};
const IT = {
    locale: "it-IT",
    language: "Italiano",
    code: "it"
};
const JA = {
    locale: "ja-JP",
    language: "日本語",
    code: "ja"
};
const KO = {
    locale: "ko-KR",
    language: "한국어",
    code: "ko"
};
const NL = {
    locale: "nl-NL",
    language: "Nederlands",
    code: "nl"
};
const PL = {
    locale: "pl-PL",
    language: "Polski",
    code: "pl"
};
const PTBR = {
    locale: "pt-BR",
    language: "Portugu\xeas (Brazil)",
    code: "pt-br"
};
const PTPT = {
    locale: "pt-PT",
    language: "Portugu\xeas",
    code: "pt-pt"
};
const RO = {
    locale: "ro-RO",
    language: "Rom\xe2nă",
    code: "ro"
};
const RU = {
    locale: "ru-RU",
    language: "Русский",
    code: "ru"
};
const SVSE = {
    locale: "sv-SE",
    language: "Svenska",
    code: "sv"
};
const TA = {
    locale: "ta-IN",
    language: "தமிழ்",
    code: "ta"
};
const TR = {
    locale: "tr-TR",
    language: "T\xfcrk\xe7e",
    code: "tr"
};
const UK = {
    locale: "uk-UA",
    language: "Українська",
    code: "uk"
};
const VI = {
    locale: "vi-VN",
    language: "Tiếng Việt",
    code: "vi"
};
const ZHCN = {
    locale: "zh-CN",
    language: "简体中文",
    code: "zh-cn"
};
const ZHTW = {
    locale: "zh-TW",
    language: "繁體中文",
    code: "zh-tw"
};
const languages = {
    "ar-SA": AR,
    "bn-BD": BN,
    "en-US": EN,
    "de-DE": DE,
    "el-GR": EL,
    "es-ES": ESES,
    "fi-FI": FI,
    "fil-PH": FIL,
    "fr-FR": FR,
    "hi-IN": HI,
    "hu-HU": HU,
    "id-ID": ID,
    "it-IT": IT,
    "ja-JP": JA,
    "ko-KR": KO,
    "nl-NL": NL,
    "pl-PL": PL,
    "pt-BR": PTBR,
    "pt-PT": PTPT,
    "ro-RO": RO,
    "ru-RU": RU,
    "sv-SE": SVSE,
    "ta-IN": TA,
    "tr-TR": TR,
    "uk-UA": UK,
    "vi-VN": VI,
    "zh-CN": ZHCN,
    "zh-TW": ZHTW
};
const languageList = Object.values(languages);
/* harmony default export */ const config_languages = (languageList);

;// CONCATENATED MODULE: ../../packages/localization/src/helpers.ts

const publicUrl = process.env.NEXT_PUBLIC_APEX_URL || "";
const LS_KEY = "pancakeswap_language";
const fetchLocale = async (locale)=>{
    const response = await fetch(`${publicUrl}/locales/${locale}.json`);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    console.error(`API: Failed to fetch locale ${locale}`, response.statusText);
    return null;
};
const getLanguageCodeFromLS = ()=>{
    try {
        const codeFromStorage = localStorage.getItem(LS_KEY);
        return codeFromStorage || EN.locale;
    } catch  {
        return EN.locale;
    }
};

;// CONCATENATED MODULE: ../../packages/localization/src/Provider.tsx









const initialState = {
    isFetching: true,
    currentLanguage: EN
};
const includesVariableRegex = new RegExp(/%\S+?%/, "gm");
const translatedTextIncludesVariable = memoize_default()((translatedText)=>{
    return !!translatedText?.match(includesVariableRegex);
});
const getRegExpForDataKey = memoize_default()((dataKey)=>{
    return new RegExp(`%${dataKey}%`, "g");
});
// Export the translations directly
const languageMap = new Map();
languageMap.set(EN.locale, {});
const LanguageContext = /*#__PURE__*/ (0,external_react_.createContext)(undefined);
const LanguageProvider = ({ children  })=>{
    const { lastUpdated , setLastUpdated: refresh  } = (0,src/* useLastUpdated */.sP)();
    const { 0: state , 1: setState  } = (0,external_react_.useState)(()=>{
        const codeFromStorage = getLanguageCodeFromLS();
        return {
            ...initialState,
            currentLanguage: languages[codeFromStorage] || EN
        };
    });
    const { currentLanguage  } = state;
    (0,external_react_.useEffect)(()=>{
        const fetchInitialLocales = async ()=>{
            const codeFromStorage = getLanguageCodeFromLS();
            if (codeFromStorage !== EN.locale) {
                const currentLocale = await fetchLocale(codeFromStorage);
                if (currentLocale) {
                    languageMap.set(codeFromStorage, currentLocale);
                    refresh();
                }
            }
            setState((prevState)=>({
                    ...prevState,
                    isFetching: false
                }));
        };
        fetchInitialLocales();
    }, [
        refresh
    ]);
    const setLanguage = (0,external_react_.useCallback)(async (language)=>{
        if (!languageMap.has(language.locale)) {
            setState((prevState)=>({
                    ...prevState,
                    isFetching: true
                }));
            const locale = await fetchLocale(language.locale);
            if (locale) {
                languageMap.set(language.locale, locale);
                localStorage?.setItem(LS_KEY, language.locale);
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false,
                        currentLanguage: language
                    }));
            } else {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false
                    }));
            }
        } else {
            localStorage?.setItem(LS_KEY, language.locale);
            setState((prevState)=>({
                    ...prevState,
                    isFetching: false,
                    currentLanguage: language
                }));
        }
    }, []);
    const translate = (0,external_react_.useCallback)((key, data)=>{
        const translationSet = languageMap.get(currentLanguage.locale) ?? {};
        const translatedText = translationSet?.[key] || key;
        if (data) {
            // Check the existence of at least one combination of %%, separated by 1 or more non space characters
            const includesVariable = translatedTextIncludesVariable(key);
            if (includesVariable) {
                return reduce_default()(omitBy_default()(data, isUndefinedOrNull/* default */.Z), (result, dataValue, dataKey)=>{
                    return result.replace(getRegExpForDataKey(dataKey), dataValue.toString());
                }, translatedText);
            }
        }
        return translatedText;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        currentLanguage,
        lastUpdated
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(LanguageContext.Provider, {
        value: {
            ...state,
            setLanguage,
            t: translate
        },
        children: children
    });
};

;// CONCATENATED MODULE: ../../packages/localization/src/useTranslation.ts


const useTranslation = ()=>{
    const languageContext = (0,external_react_.useContext)(LanguageContext);
    if (languageContext === undefined) {
        throw new Error("Language context is undefined");
    }
    return languageContext;
};
/* harmony default export */ const src_useTranslation = (useTranslation);

;// CONCATENATED MODULE: ../../packages/localization/src/Trans.tsx


const Trans = ({ children , ...props })=>{
    const { t  } = src_useTranslation();
    if (typeof children !== "string") {
        throw new Error("children not string in Trans is not supported yet");
    }
    return /*#__PURE__*/ (0,external_react_.createElement)(external_react_.Fragment, {}, t(children, props));
};

;// CONCATENATED MODULE: ../../packages/localization/src/config/translations.json
const translations_namespaceObject = {};
;// CONCATENATED MODULE: ../../packages/localization/src/index.tsx








/***/ }),

/***/ 51036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_getThemeValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89310);



const getColor = ({ color , theme  })=>{
    return (0,_util_getThemeValue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(theme, `colors.${color}`, color);
};
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c56ebc7d-0"
})`
  color: ${getColor};
  font-weight: ${({ bold  })=>bold ? 600 : 400};
  line-height: 1.5;
  ${({ textTransform  })=>textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis  })=>ellipsis && `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.space}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.typography}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.layout}

  ${({ small  })=>small && `font-size: 14px;`}
`;
Text.defaultProps = {
    color: "text",
    small: false,
    fontSize: "16px",
    ellipsis: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 89310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);

const getThemeValue = (theme, path, fallback)=>lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(theme, path, fallback);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getThemeValue);


/***/ }),

/***/ 45366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isUndefinedOrNull)
/* harmony export */ });
function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}


/***/ }),

/***/ 86287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ uriToHttp)
/* harmony export */ });
/* eslint-disable no-case-declarations */ /**
 * Given a URI that may be ipfs, ipns, http, or https protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */ function uriToHttp(uri) {
    const protocol = uri.split(":")[0].toLowerCase();
    switch(protocol){
        case "https":
            return [
                uri
            ];
        case "http":
            return [
                `https${uri.substring(4)}`,
                uri
            ];
        case "ipfs":
            const hash = uri.match(/^ipfs:(\/\/)?(.*)$/i)?.[2];
            return [
                `https://cloudflare-ipfs.com/ipfs/${hash}/`,
                `https://ipfs.io/ipfs/${hash}/`
            ];
        case "ipns":
            const name = uri.match(/^ipns:(\/\/)?(.*)$/i)?.[2];
            return [
                `https://cloudflare-ipfs.com/ipns/${name}/`,
                `https://ipfs.io/ipns/${name}/`
            ];
        default:
            return [];
    }
}


/***/ })

};
;
//# sourceMappingURL=7775.js.map