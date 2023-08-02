"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7553],{19061:function(n,e,t){t.d(e,{mP:function(){return M},uK:function(){return k},AU:function(){return b},in:function(){return v}});var a=t(87394),i=t(50930),u=t(92794);function r(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.fI;if(n&&!e)return!1;if(e&&!n)return!0;if(n&&e){if(n.tradeType!==e.tradeType||!n.inputAmount.currency.equals(e.inputAmount.currency)||!n.outputAmount.currency.equals(e.outputAmount.currency))throw Error("Trades are not comparable");return t.equalTo(u.fI)?n.executionPrice.lessThan(e.executionPrice):n.executionPrice.asFraction.multiply(t.add(u.yC)).lessThan(e.executionPrice)}}var p=t(90902),y=t(35838),s=t.n(y),o=t(2784),l=t(65342),d=t(72135),m=t(82055),T=t(94250),c=t(31196);function f(n,e){var t=(0,l.Z)().chainId,r=(0,a.Z)(t?[(0,T.pu)(n,t),(0,T.pu)(e,t)]:[void 0,void 0],2),p=r[0],y=r[1],d=(0,o.useMemo)(function(){if(!t)return[];var n,e,a,r,s,o=null!==(a=u.lM[t])&&void 0!==a?a:[],l=p&&null!==(r=null===(n=u.ck[t])||void 0===n?void 0:n[p.address])&&void 0!==r?r:[],d=y&&null!==(s=null===(e=u.ck[t])||void 0===e?void 0:e[y.address])&&void 0!==s?s:[];return(0,i.Z)(o).concat((0,i.Z)(l),(0,i.Z)(d))},[t,p,y]),c=(0,o.useMemo)(function(){return s()(d,function(n){return d.map(function(e){return[n,e]})})},[d]),f=(0,o.useMemo)(function(){return p&&y?[[p,y],].concat((0,i.Z)(d.map(function(n){return[p,n]})),(0,i.Z)(d.map(function(n){return[y,n]})),(0,i.Z)(c)).filter(function(n){return Boolean(n[0]&&n[1])}).filter(function(n){var e=(0,a.Z)(n,2),t=e[0],i=e[1];return t.address!==i.address}).filter(function(n){var e=(0,a.Z)(n,2),i=e[0],r=e[1];if(!t)return!0;var p=u.IP[t],y=null==p?void 0:p[i.address],s=null==p?void 0:p[r.address];return!y&&!s||(!y||!!y.find(function(n){return r.equals(n)}))&&(!s||!!s.find(function(n){return i.equals(n)}))}):[]},[p,y,d,c,t]),b=(0,m.z$)(f);return(0,o.useMemo)(function(){return Object.values(b.filter(function(n){return Boolean(n[0]===m._G.EXISTS&&n[1])}).reduce(function(n,e){var t,i=(0,a.Z)(e,2)[1];return n[i.liquidityToken.address]=null!==(t=n[i.liquidityToken.address])&&void 0!==t?t:i,n},{}))},[b])}function b(n,e){var t=f(null==n?void 0:n.currency,e),i=(0,a.Z)((0,d.RO)(),1)[0];return(0,o.useMemo)(function(){if(n&&e&&t.length>0){if(i){var a;return null!==(a=p.ho.bestTradeExactIn(t,n,e,{maxHops:1,maxNumResults:1})[0])&&void 0!==a?a:null}for(var y=null,s=1;s<=3;s++){var o,l=null!==(o=p.ho.bestTradeExactIn(t,n,e,{maxHops:s,maxNumResults:1})[0])&&void 0!==o?o:null;r(y,l,u.Ru)&&(y=l)}return y}return null},[t,n,e,i])}function v(n,e){var t=f(n,null==e?void 0:e.currency),i=(0,a.Z)((0,d.RO)(),1)[0];return(0,o.useMemo)(function(){if(n&&e&&t.length>0){if(i){var a;return null!==(a=p.ho.bestTradeExactOut(t,n,e,{maxHops:1,maxNumResults:1})[0])&&void 0!==a?a:null}for(var y=null,s=1;s<=3;s++){var o,l=null!==(o=p.ho.bestTradeExactOut(t,n,e,{maxHops:s,maxNumResults:1})[0])&&void 0!==o?o:null;r(y,l,u.Ru)&&(y=l)}return y}return null},[n,e,t,i])}function M(n,e){var t=(0,c.l6)(),a=(0,l.Z)().chainId,i=(0,T.pu)(n,a),u=(0,T.pu)(e,a);return!!(t&&(i&&Object.keys(t).includes(i.address)||u&&Object.keys(t).includes(u.address)))}function k(n,e){var t=(0,c.zd)(),a=(0,l.Z)().chainId,i=(0,T.pu)(n,a),u=(0,T.pu)(e,a);return!!(t&&(i&&Object.keys(t).includes(i.address)||u&&Object.keys(t).includes(u.address)))}},95707:function(n,e,t){t.d(e,{P4:function(){return o},uc:function(){return l},b5:function(){return T},U7:function(){return m},Kh:function(){return f},Ti:function(){return d},oX:function(){return c}});var a=t(47842),i=t(90902),u=JSON.parse('[{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}]'),r=t(92794),p=t(76166),y=t(76269),s=t(57246);function o(n){return new i.gG(i.QA.BigInt(n),r.PM)}function l(n,e){if(e<0||e>1e4)throw Error("Unexpected slippage value: ".concat(e));return[i.QA.divide(i.QA.multiply(n.quotient,i.QA.BigInt(1e4-e)),r.PM),i.QA.divide(i.QA.multiply(n.quotient,i.QA.BigInt(1e4+e)),r.PM),]}function d(){var n=(0,p.g)().chainId;return(0,y.cq)(r.bR[n],u,!0)}function m(n){var e,t=n?r.yC.subtract(n.route.pairs.reduce(function(n){return n.multiply(r.Zw)},r.yC)):void 0,a=n&&t?n.priceImpact.subtract(t):void 0,u=a?new i.gG(null==a?void 0:a.numerator,null==a?void 0:a.denominator):void 0;return{priceImpactWithoutFee:u,realizedLPFee:t&&n&&i.ih.fromRawAmount(n.inputAmount.currency,t.multiply(n.inputAmount.quotient).quotient)}}function T(n,e){var t,i=o(e);return t={},(0,a.Z)(t,s.gN.INPUT,null==n?void 0:n.maximumAmountIn(i)),(0,a.Z)(t,s.gN.OUTPUT,null==n?void 0:n.minimumAmountOut(i)),t}function c(n){return(null==n?void 0:n.lessThan(r.lN))?(null==n?void 0:n.lessThan(r.Uf))?(null==n?void 0:n.lessThan(r.p9))?(null==n?void 0:n.lessThan(r.Bz))?0:1:2:3:4}function f(n,e){return n?e?"".concat(n.executionPrice.invert().toSignificant(6)," ").concat(n.inputAmount.currency.symbol," / ").concat(n.outputAmount.currency.symbol):"".concat(n.executionPrice.toSignificant(6)," ").concat(n.outputAmount.currency.symbol," / ").concat(n.inputAmount.currency.symbol):""}},27757:function(n,e,t){var a=t(59656),i=t(13320);e.Z=function(n,e){if(n&&e)try{var t=(0,a.parseUnits)(n,e.decimals).toString();if("0"!==t)return i.ih.fromRawAmount(e,i.QA.BigInt(t))}catch(u){console.debug('Failed to parse input amount: "'.concat(n,'"'),u)}}}}]);
//# sourceMappingURL=7553-35f0eaeda3743519.js.map