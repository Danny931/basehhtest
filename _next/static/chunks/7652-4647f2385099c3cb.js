"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7652],{87752:function(n,e,t){t.d(e,{x:function(){return l},y:function(){return c}});var r=t(70865),o=t(96670),a=t(33419),u=t(68715),i=(0,o.Z)((0,r.Z)({},(0,u.FL)(function(){return sessionStorage})),{delayInit:!0}),l=(0,u.O4)("feature-farm-api","pkg",i);function c(n){return(0,a.Dv)(n)}l.onMount=function(n){"farmApi"===new URL(window.location.href).searchParams.get("use")&&n("api")}},68175:function(n,e,t){t.d(e,{X:function(){return s},a:function(){return c}});var r=t(50930),o=t(74086),a=t(2784),u=t(49857),i=t(65342),l=[];function c(n,e){var t=(0,i.Z)().chainId,c=(0,u.ZP)(t&&[o.sR,"blockNumber",t]).data,s=void 0===c?0:c;(0,a.useEffect)(n.bind(null,s),[s].concat((0,r.Z)(e||l)))}function s(n,e){var t=(0,i.Z)().chainId,c=(0,u.ZP)(t&&[o.KI,"blockNumber",t]).data,s=void 0===c?0:c;(0,a.useEffect)(n.bind(null,s),[s].concat((0,r.Z)(e||l)))}},8919:function(n,e,t){t.d(e,{f6:function(){return A},Dx:function(){return S},E2:function(){return B},f5:function(){return b},w5:function(){return L},Cs:function(){return I},Iu:function(){return M}});var r=t(98788),o=t(5163),a=t(6391),u=t.n(a),i=t(65342),l=t(74086),c=t(36695),s=t(2784),d=t(43997),f=t(88700),p=t(2303),v=t(81834),k=t(62704),m=t(80405);t(68175);var h=t(87752),w=t(24734),g=t(44868),Z=t(61973),T=t(18426),x=t(16844),y=t(72640),D=t(5994),P=function(n){var e,t,r,o,a,i,l,c;return{allowance:n.userData?new(u())(n.userData.allowance):v.HW,tokenBalance:n.userData?new(u())(n.userData.tokenBalance):v.HW,stakedBalance:n.userData?new(u())(n.userData.stakedBalance):v.HW,earnings:n.userData?new(u())(n.userData.earnings):v.HW,proxy:{allowance:(null==n?void 0:null===(e=n.userData)||void 0===e?void 0:e.proxy)?new(u())(null==n?void 0:null===(t=n.userData)||void 0===t?void 0:t.proxy.allowance):v.HW,tokenBalance:(null==n?void 0:null===(r=n.userData)||void 0===r?void 0:r.proxy)?new(u())(null==n?void 0:null===(o=n.userData)||void 0===o?void 0:o.proxy.tokenBalance):v.HW,stakedBalance:(null==n?void 0:null===(a=n.userData)||void 0===a?void 0:a.proxy)?new(u())(null==n?void 0:null===(i=n.userData)||void 0===i?void 0:i.proxy.stakedBalance):v.HW,earnings:(null==n?void 0:null===(l=n.userData)||void 0===l?void 0:l.proxy)?new(u())(null==n?void 0:null===(c=n.userData)||void 0===c?void 0:c.proxy.earnings):v.HW}}},C=function(n){var e=n.lpAddress,t=n.lpSymbol,r=n.pid,o=n.vaultPid,a=n.dual,i=n.multiplier,c=n.isCommunity,s=n.auctionHostingStartSeconds,d=n.quoteTokenPriceBusd,f=n.tokenPriceBusd,p=n.boosted,k=n.infoStableSwapAddress,m=(0,x.Z)(s)?null:new Date(1e3*s),h=m?(0,Z.Z)(m,l.ki):null,w=Date.now();return{lpAddress:e,lpSymbol:t,pid:r,vaultPid:o,dual:a,multiplier:i,isCommunity:c||!!(m&&h&&m.getTime()<w&&h.getTime()>w),auctionHostingEndDate:null==h?void 0:h.toJSON(),quoteTokenPriceBusd:d,tokenPriceBusd:f,token:(0,y.iG)(n.token),quoteToken:(0,y.iG)(n.quoteToken),userData:P(n),tokenAmountTotal:n.tokenAmountTotal?new(u())(n.tokenAmountTotal):v.HW,quoteTokenAmountTotal:n.quoteTokenAmountTotal?new(u())(n.quoteTokenAmountTotal):v.HW,lpTotalInQuoteToken:n.lpTotalInQuoteToken?new(u())(n.lpTotalInQuoteToken):v.HW,lpTotalSupply:n.lpTotalSupply?new(u())(n.lpTotalSupply):v.HW,lpTokenPrice:n.lpTokenPrice?new(u())(n.lpTokenPrice):v.HW,tokenPriceVsQuote:n.tokenPriceVsQuote?new(u())(n.tokenPriceVsQuote):v.HW,poolWeight:n.poolWeight?new(u())(n.poolWeight):v.HW,boosted:p,isStable:Boolean(k)}},H=function(n){return n.farms.data.find(function(n){return 2===n.pid})},W=function(n,e){return function(t){return t.farms.data.find(function(t){return t[n]===e})}};function b(){var n=(0,i.Z)().chainId;return(0,p.Z)(n?["farmsLength",n]:null,(0,r.Z)(function(){var e;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,m.aE)(void 0,n).poolLength()];case 1:return[2,e.sent().toNumber()]}})}))}(0,D.P1)([H],function(n){var e=null==n?void 0:n.tokenPriceBusd;return new(u())(e)});var I=function(){var n=(0,f.TL)(),e=(0,i.Z)(),t=e.account,a=e.chainId,u=(0,k.A)(t,a),c=u.proxyAddress,s=u.proxyCreated,d=u.isLoading,v=(0,h.y)(h.x);(0,p.Z)(a?["publicFarmData",a]:null,(0,r.Z)(function(){var e,t;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,w.getFarmConfig)(a)];case 1:return t=e.sent().map(function(n){return n.pid}),n((0,g.eG)({pids:t,chainId:a,flag:v})),[2]}})}),{refreshInterval:"api"===v?5e4:l.KI}),(0,p.Z)(t&&a&&!d?s?["farmsWithUserData",t,c,a]:["farmsWithUserData",t,a]:null,(0,r.Z)(function(){var e,r,u;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,w.getFarmConfig)(a)];case 1:return r=e.sent().map(function(n){return n.pid}),u=s?{account:t,pids:r,proxyAddress:c,chainId:a}:{account:t,pids:r,chainId:a},n((0,g.IV)(u)),[2]}})}),{refreshInterval:l.KI})},B=function(){var n=(0,i.Z)().chainId;return(0,d.v9)((0,s.useMemo)(function(){var e;return(0,D.P1)(function(n){return n.farms},function(e){var t,r=e.data.map(C).filter(function(e){return e.token.chainId===n}),o=e.loadArchivedFarmsData,a=e.userDataLoaded;return{loadArchivedFarmsData:o,userDataLoaded:a,data:r,poolLength:e.poolLength,regularCakePerBlock:e.regularCakePerBlock}})},[n]))},A=function(n){var e=(0,s.useMemo)(function(){var e;return(0,D.P1)([W("pid",n)],function(n){return C(n)})},[n]);return(0,d.v9)(e)},S=function(n){var e=(0,s.useMemo)(function(){var e;return(0,D.P1)([W("pid",n)],function(n){var e,t=P(n),r=t.allowance,o=t.tokenBalance,a=t.stakedBalance;return{allowance:r,tokenBalance:o,stakedBalance:a,earnings:t.earnings,proxy:t.proxy}})},[n]);return(0,d.v9)(e)},L=function(n){var e=(0,s.useMemo)(function(){var e;return(0,D.P1)([W("lpSymbol",n)],function(n){var e=v.HW;if(n){var t=n.lpTotalInQuoteToken?new(u())(n.lpTotalInQuoteToken):v.HW,r=n.lpTotalSupply?new(u())(n.lpTotalSupply):v.HW;if(r.gt(0)&&t.gt(0)){var o=new(u())(n.tokenPriceBusd),a=n.tokenAmountTotal?new(u())(n.tokenAmountTotal):v.HW,i=o.times(a).times(2),l=(0,T.U4)(r);e=i.div(l)}}return e})},[n]);return(0,d.v9)(e)},M=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceMainnet:!1}).forceMainnet,e=(0,c.S9)({forceMainnet:n});return(0,s.useMemo)(function(){return e?new(u())(e.toSignificant(6)):v.HW},[e])}},62704:function(n,e,t){t.d(e,{A:function(){return s}});var r=t(98788),o=t(5163),a=t(49857),u=t(74086),i=t(76269),l=t(6429),c=t(97640),s=function(n,e){var t=(0,i.gh)(),s=c.P4.includes(e),d=(0,a.ZP)(n&&s&&["proxyAddress",n],(0,r.Z)(function(){return(0,o.__generator)(this,function(e){return[2,t.proxyContract(n)]})})),f=d.data,p=d.status,v=d.mutate;return{proxyAddress:f,isLoading:!!s&&p!==l.iF.Fetched,proxyCreated:f&&f!==u.h5,refreshProxyAddress:v}}},64343:function(n,e,t){var r=t(70865),o=t(96670),a=t(26297),u=t(52322),i=t(89495),l=t(2784),c=t(76597),s=function(n){var e=n.value,t=n.color,s=void 0===t?"text":t,d=n.decimals,f=n.isDisabled,p=void 0!==f&&f,v=n.unit,k=n.prefix,m=n.onClick,h=(0,a.Z)(n,["value","color","decimals","isDisabled","unit","prefix","onClick"]),w=(0,l.useMemo)(function(){return k?{prefix:k}:{}},[k]),g=(0,l.useMemo)(function(){return v?{suffix:v}:{}},[v]);return(0,u.jsx)(c.ZP,(0,o.Z)((0,r.Z)({start:0,preserveValue:!0,delay:0,end:e},w,g),{decimals:void 0===d?3:d,duration:1,separator:",",children:function(n){var e=n.countUpRef;return(0,u.jsx)(i.Z,(0,o.Z)((0,r.Z)({color:p?"textDisabled":s,onClick:m},h),{children:(0,u.jsx)("span",{ref:e})}))}}))};e.Z=s},95134:function(n,e,t){var r=t(92228),o=t(3411),a=t(78545);function u(){var n=(0,r.Z)(["\n  ","\n"]);return u=function(){return n},n}var i=o.ZP.div.withConfig({componentId:"sc-df4f0a61-0"})(u(),a.Dh);i.defaultProps={p:"24px"},e.Z=i},58207:function(n,e,t){var r=t(70865),o=t(96670),a=t(52322);t(2784);var u=t(62923),i=function(n){return(0,a.jsx)(u.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 25"},n),{children:(0,a.jsx)("path",{d:"M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"})}))};e.Z=i}}]);
//# sourceMappingURL=7652-4647f2385099c3cb.js.map