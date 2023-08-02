"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 30433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Av": () => (/* binding */ useSWRContract),
/* harmony export */   "NW": () => (/* binding */ immutableMiddleware),
/* harmony export */   "PI": () => (/* binding */ localStorageMiddleware),
/* harmony export */   "XS": () => (/* binding */ laggyMiddleware),
/* harmony export */   "d5": () => (/* binding */ useSWRMulticall),
/* harmony export */   "qf": () => (/* binding */ fetchStatusMiddleware)
/* harmony export */ });
/* unused harmony export loggerMiddleware */
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6187);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-param-reassign */ 




const fetchStatusMiddleware = (useSWRNext)=>{
    return (key, fetcher, config)=>{
        const swr = useSWRNext(key, fetcher, config);
        return Object.defineProperty(swr, "status", {
            get () {
                let status = config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Idle */ .iF.Idle;
                if (!swr.isValidating && !swr.error && !swr.data) {
                    status = config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Idle */ .iF.Idle;
                } else if (swr.isValidating && !swr.error && !swr.data) {
                    status = config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Fetching */ .iF.Fetching;
                } else if (swr.data) {
                    status = config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Fetched */ .iF.Fetched;
                } else if (swr.error && !swr.data) {
                    status = config_constants_types__WEBPACK_IMPORTED_MODULE_0__/* .FetchStatus.Failed */ .iF.Failed;
                }
                return status;
            }
        });
    };
};
const getContractKey = (key)=>{
    if (Array.isArray(key)) {
        const [contract, methodName, params] = key || [];
        return {
            contract,
            methodName,
            params
        };
    }
    return key;
};
const serializesContractKey = (key)=>{
    const { contract , methodName , params  } = getContractKey(key) || {};
    const serializedKeys = key && contract && methodName ? {
        address: contract.address,
        interfaceFormat: contract.interface.format(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__.FormatTypes.full),
        methodName,
        callData: contract.interface.encodeFunctionData(methodName, params)
    } : null;
    return serializedKeys;
};
/**
 * @example
 * const key = [contract, 'methodName', [params]]
 * const key = { contract, methodName, params }
 * const { data, error, mutate } = useSWRContract(key)
 */ function useSWRContract(key, config = {}) {
    const { contract , methodName , params  } = getContractKey(key) || {};
    const serializedKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>serializesContractKey(key), [
        key
    ]);
    return (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(serializedKeys, async ()=>{
        if (!contract || !methodName) return null;
        if (!params) return contract[methodName]();
        return contract[methodName](...params);
    }, config);
}
const immutableMiddleware = (useSWRNext)=>(key, fetcher, config)=>{
        config.revalidateOnFocus = false;
        config.revalidateIfStale = false;
        config.revalidateOnReconnect = false;
        return useSWRNext(key, fetcher, config);
    };
function useSWRMulticall(abi, calls, options) {
    const { requireSuccess =true , ...config } = options || {};
    return (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(calls, ()=>(0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
            abi,
            calls,
            options: {
                requireSuccess
            }
        }), {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        ...config
    });
}
const localStorageMiddleware = (useSWRNext)=>(key, fetcher, config)=>{
        const swr = useSWRNext(key, fetcher, config);
        const { data  } = swr;
        const serializedKey = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,swr__WEBPACK_IMPORTED_MODULE_3__.unstable_serialize)(key), [
            key
        ]);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (data) {
                try {
                    const stringify = JSON.stringify(data);
                    localStorage?.setItem(serializedKey, stringify);
                } catch (error) {
                //
                }
            }
        }, [
            data,
            serializedKey
        ]);
        let localStorageDataParsed;
        if (!data && "undefined" !== "undefined") {}
        return Object.defineProperty(swr, "data", {
            value: data || localStorageDataParsed
        });
    };
// This is a SWR middleware for keeping the data even if key changes.
const laggyMiddleware = (useSWRNext)=>{
    return (key, fetcher, config)=>{
        // Use a ref to store previous returned data.
        const laggyDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
        // Actual SWR hook.
        const swr = useSWRNext(key, fetcher, config);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            // Update ref if data is not undefined.
            if (swr.data !== undefined) {
                laggyDataRef.current = swr.data;
            }
        }, [
            swr.data
        ]);
        // Expose a method to clear the laggy data, if any.
        const resetLaggy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
            laggyDataRef.current = undefined;
        }, []);
        // Fallback to previous data if the current data is undefined.
        const dataOrLaggyData = swr.data === undefined ? laggyDataRef.current : swr.data;
        // Is it showing previous data?
        const isLagging = swr.data === undefined && laggyDataRef.current !== undefined;
        // Also add a `isLagging` field to SWR.
        Object.defineProperty(swr, "isLagging", {
            value: isLagging
        });
        Object.defineProperty(swr, "resetLaggy", {
            value: resetLaggy
        });
        Object.defineProperty(swr, "data", {
            value: dataOrLaggyData
        });
        return swr;
    };
};
// dev only
const loggerMiddleware = (useSWRNext)=>{
    return (key, fetcher, config)=>{
        // Add logger to the original fetcher.
        const extendedFetcher = fetcher ? (...args)=>{
            console.debug("SWR Request:", key);
            return fetcher(...args);
        } : null;
        // Execute the hook with the new fetcher.
        return useSWRNext(key, extendedFetcher, config);
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=433.js.map