"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5366],{45366:function(n,e,t){t.d(e,{WP:function(){return $},uK:function(){return K}});var o=t(70865),i=t(96670),r=t(26297),u=t(87394),l=t(92228),a=t(52322),d=t(2784),s=t(90902),c=t(98813),v=t(8659),p=t(95134),C=t(89495),f=t(76903),m=t(83931),R=t(81916),g=t(77651),N=t(48608),A=t(47265),h=t(29420),y=t(3411),q=t(65957),Z=t(34508),E=t(36695),_=t(37926),x=t(9270),U=t(92794),w=t(87e3),Y=t(86849),T=t(33472),S=t(36099),k=t(94250),b=t(27156),I=t(77253),B=t(39999),j=t(91790),P=t(26830),D=t(51991),M=t(84785),L=t(23365);function Q(){var n=(0,l.Z)(["\n  height: 24px;\n"]);return Q=function(){return n},n}var O=(0,y.ZP)(P.m0).withConfig({componentId:"sc-31608496-0"})(Q()),V=function(n){var e=n.currency0,t=n.currency1,o=n.token0Deposited,i=n.token1Deposited,r=(0,E.ZP)(e),u=(0,E.ZP)(t),l=o&&r?(0,_.a)(r,parseFloat(o.toSignificant(6))):null,a=i&&u?(0,_.a)(u,parseFloat(i.toSignificant(6))):null;return l&&a?l+a:null},F=function(n){var e=n.userPoolBalance,t=n.totalPoolTokens;return e&&t&&s.QA.greaterThanOrEqual(t.quotient,e.quotient)?new s.gG(e.quotient,t.quotient):void 0},G=function(n){var e=n.useLPValuesHook,t=n.hookArgFn;return function(n){return function(r){var l=(0,x.Ge)().account,s=r.showUnwrapped?r.pair.token0:(0,k.Bv)(r.pair.token0),c=r.showUnwrapped?r.pair.token1:(0,k.Bv)(r.pair.token1),v=(0,T.mM)(null!=l?l:void 0,r.pair.liquidityToken),p=(0,Z.Z)(r.pair.liquidityToken),C=F({totalPoolTokens:p,userPoolBalance:v}),f=(0,d.useMemo)(function(){return t({userPoolBalance:v,pair:r.pair,totalPoolTokens:p})},[v,r.pair,p]),m=(0,u.Z)(e(f),2),R=m[0],g=m[1],N=V({currency0:s,currency1:c,token0Deposited:R,token1Deposited:g});return(0,a.jsx)(n,(0,i.Z)((0,o.Z)({},r),{currency0:s,currency1:c,token0Deposited:R,token1Deposited:g,totalUSDValue:N,userPoolBalance:v,poolTokenPercentage:C}))}}},z=G({useLPValuesHook:function(n){var e,t=n.pair,o=n.totalPoolTokens,i=n.userPoolBalance,r=(0,u.Z)(t&&o&&i&&s.QA.greaterThanOrEqual(o.quotient,i.quotient)?[t.getLiquidityValue(t.token0,o,i,!1),t.getLiquidityValue(t.token1,o,i,!1),]:[void 0,void 0],2);return[r[0],r[1]]},hookArgFn:function(n){var e,t=n.pair;return{pair:t,userPoolBalance:n.userPoolBalance,totalPoolTokens:n.totalPoolTokens}}}),X=G({useLPValuesHook:w.N,hookArgFn:function(n){var e,t=n.userPoolBalance;return{lpAmount:null==t?void 0:null===(e=t.quotient)||void 0===e?void 0:e.toString()}}});function H(n){var e=n.pair,t=n.currency0,u=n.currency1,l=n.token0Deposited,p=n.token1Deposited,y=n.totalUSDValue,Z=n.userPoolBalance,E=n.poolTokenPercentage,_=(0,r.Z)(n,["pair","currency0","currency1","token0Deposited","token1Deposited","totalUSDValue","userPoolBalance","poolTokenPercentage"]),x=(0,d.useContext)(Y.UA),w=(0,q.$G)().t,T=(0,L.aT)(e),k=(0,c.Z)(w("Based on last 7 days' performance. Does not account for impermanent loss"),{placement:"bottom"}),b=k.targetRef,Q=k.tooltip,V=k.tooltipVisible,F=(0,d.useState)(!1),G=F[0],z=F[1];return(0,a.jsxs)(v.Z,(0,i.Z)((0,o.Z)({},_),{children:[(0,a.jsxs)(f.Z,{justifyContent:"space-between",role:"button",onClick:function(){return z(!G)},p:"16px",children:[(0,a.jsxs)(f.Z,{flexDirection:"column",children:[(0,a.jsxs)(f.Z,{alignItems:"center",mb:"4px",children:[(0,a.jsx)(j.ge,{currency0:t,currency1:u,size:20}),(0,a.jsx)(C.Z,{bold:!0,ml:"8px",children:t&&u?"".concat(t.symbol,"/").concat(u.symbol):(0,a.jsx)(D.Z,{children:w("Loading")})}),x?(0,a.jsxs)(C.Z,{color:"textSubtle",ml:"4px",children:[" ","- Stable"]}):null]}),(0,a.jsx)(C.Z,{fontSize:"14px",color:"textSubtle",children:null==Z?void 0:Z.toSignificant(4)}),Number.isFinite(y)&&(0,a.jsx)(C.Z,{small:!0,color:"textSubtle",children:"(~".concat(y.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," USD)")})]}),G?(0,a.jsx)(R.Z,{}):(0,a.jsx)(g.Z,{})]}),G&&(0,a.jsxs)(I.Tz,{gap:"8px",style:{padding:"16px"},children:[x?null:(0,a.jsxs)(O,{children:[(0,a.jsxs)(P.DA,{children:[(0,a.jsx)(B.Z,{size:"20px",currency:t}),(0,a.jsxs)(C.Z,{color:"textSubtle",ml:"4px",children:[w("Pooled %asset%",{asset:t.symbol}),":"]})]}),l?(0,a.jsx)(P.DA,{children:(0,a.jsx)(C.Z,{ml:"6px",children:null==l?void 0:l.toSignificant(6)})}):"-"]}),x?null:(0,a.jsxs)(O,{children:[(0,a.jsxs)(P.DA,{children:[(0,a.jsx)(B.Z,{size:"20px",currency:u}),(0,a.jsxs)(C.Z,{color:"textSubtle",ml:"4px",children:[w("Pooled %asset%",{asset:u.symbol}),":"]})]}),p?(0,a.jsx)(P.DA,{children:(0,a.jsx)(C.Z,{ml:"6px",children:null==p?void 0:p.toSignificant(6)})}):"-"]}),T&&(0,a.jsxs)(O,{children:[(0,a.jsxs)(P.DA,{children:[(0,a.jsxs)(m.Z,{ref:b,color:"textSubtle",children:[w("LP reward APR"),":"]}),V&&Q]}),(0,a.jsxs)(C.Z,{children:[(0,M.d)(T.lpApr7d),"%"]})]}),(0,a.jsxs)(O,{children:[(0,a.jsx)(C.Z,{color:"textSubtle",children:w("Share of Pool")}),(0,a.jsx)(C.Z,{children:E?"".concat("0.00"===E.toFixed(2)?"<0.01":E.toFixed(2),"%"):"-"})]}),Z&&s.QA.greaterThan(Z.quotient,U.iV)&&(0,a.jsxs)(f.Z,{flexDirection:"column",children:[(0,a.jsx)(N.Z,{as:A.Z,to:"/remove/".concat((0,S.H)(t),"/").concat((0,S.H)(u)).concat(x?"?stable=1":""),variant:"primary",width:"100%",mb:"8px",children:w("Remove")}),(0,a.jsx)(N.Z,{as:A.Z,to:"/add/".concat((0,S.H)(t),"/").concat((0,S.H)(u),"?step=1"),variant:"text",startIcon:(0,a.jsx)(h.Z,{color:"primary"}),width:"100%",children:w("Add liquidity instead")})]})]})]}))}var $=z(function(n){var e=n.pair,t=n.currency0,o=n.currency1,i=n.token0Deposited,r=n.token1Deposited,u=n.totalUSDValue,l=n.userPoolBalance,R=n.poolTokenPercentage,g=(0,d.useContext)(Y.UA),N=(0,q.$G)().t,A=(0,L.aT)(e),h=(0,c.Z)(N("Based on last 7 days' performance. Does not account for impermanent loss"),{placement:"bottom"}),y=h.targetRef,Z=h.tooltip,E=h.tooltipVisible;return(0,a.jsx)(a.Fragment,{children:l&&s.QA.greaterThan(l.quotient,U.iV)?(0,a.jsx)(v.Z,{children:(0,a.jsx)(p.Z,{children:(0,a.jsxs)(I.Tz,{gap:"16px",children:[(0,a.jsx)(O,{children:(0,a.jsx)(P.DA,{children:(0,a.jsx)(C.Z,{color:"secondary",bold:!0,children:N("LP tokens in your wallet")})})}),(0,a.jsxs)(O,{children:[(0,a.jsxs)(P.DA,{children:[(0,a.jsx)(j.ge,{currency0:t,currency1:o,margin:!0,size:20}),(0,a.jsxs)(C.Z,{small:!0,color:"textSubtle",children:[t.symbol,"-",o.symbol," LP"]})]}),(0,a.jsx)(P.DA,{children:(0,a.jsxs)(f.Z,{flexDirection:"column",alignItems:"flex-end",children:[(0,a.jsx)(C.Z,{children:l?l.toSignificant(4):"-"}),Number.isFinite(u)&&(0,a.jsx)(C.Z,{small:!0,color:"textSubtle",children:"(~".concat(u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," USD)")})]})})]}),(0,a.jsxs)(I.Tz,{gap:"4px",children:[A&&(0,a.jsxs)(O,{children:[(0,a.jsxs)(m.Z,{ref:y,color:"textSubtle",small:!0,children:[N("LP reward APR"),":"]}),E&&Z,(0,a.jsxs)(C.Z,{children:[(0,M.d)(A.lpApr7d),"%"]})]}),(0,a.jsxs)(O,{children:[(0,a.jsxs)(C.Z,{color:"textSubtle",small:!0,children:[N("Share of Pool"),":"]}),(0,a.jsx)(C.Z,{children:R?"".concat(R.toFixed(6),"%"):"-"})]}),g?null:(0,a.jsxs)(O,{children:[(0,a.jsxs)(C.Z,{color:"textSubtle",small:!0,children:[N("Pooled %asset%",{asset:t.symbol}),":"]}),i?(0,a.jsx)(P.DA,{children:(0,a.jsx)(C.Z,{ml:"6px",children:null==i?void 0:i.toSignificant(6)})}):"-"]}),g?null:(0,a.jsxs)(O,{children:[(0,a.jsxs)(C.Z,{color:"textSubtle",small:!0,children:[N("Pooled %asset%",{asset:o.symbol}),":"]}),r?(0,a.jsx)(P.DA,{children:(0,a.jsx)(C.Z,{ml:"6px",children:null==r?void 0:r.toSignificant(6)})}):"-"]})]})]})})}):(0,a.jsx)(b.hl,{children:(0,a.jsxs)(C.Z,{fontSize:"14px",style:{textAlign:"center"},children:[(0,a.jsx)("span",{role:"img","aria-label":"pancake-icon",children:"\uD83E\uDD5E"})," ",N("By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.")]})})})}),W=X(H),K=function(n){var e,t,i=(0,Y.ZP)({tokenA:null===(e=n.pair)||void 0===e?void 0:e.token0,tokenB:null===(t=n.pair)||void 0===t?void 0:t.token1}),u=i.stableSwapConfig,l=(0,r.Z)(i,["stableSwapConfig"]);return u?(0,a.jsx)(Y.UA.Provider,{value:(0,o.Z)({stableSwapConfig:u},l),children:(0,a.jsx)(W,(0,o.Z)({},n))}):null};e.ZP=z(H)},34508:function(n,e,t){var o=t(2784),i=t(90902),r=t(76269),u=t(87070);e.Z=function(n){var e,t,l,a=(0,r.Ib)((null==n?void 0:n.isToken)?n.address:void 0,!1),d=null===(e=(0,u.Wk)(a,"totalSupply"))||void 0===e?void 0:null===(t=e.result)||void 0===t?void 0:null===(l=t[0])||void 0===l?void 0:l.toString();return(0,o.useMemo)(function(){return(null==n?void 0:n.isToken)&&d?i.ih.fromRawAmount(n,d):void 0},[n,d])}},12847:function(n,e,t){t.d(e,{GF:function(){return N},Vx:function(){return g},Xi:function(){return R}});var o=t(47842),i=t(87394),r=t(90902),u=t(2784),l=t(43997),a=t(65342),d=t(94250),s=t(82055),c=t(34508),v=t(65957),p=t(27757),C=t(88700),f=t(33472),m=t(80194);function R(){return(0,l.v9)(function(n){return n.burn})}function g(n,e,t,l,C){var g,N,A,h,y,q,Z,E,_=(0,a.Z)(),x=_.account,U=_.chainId,w=R(),Y=w.independentField,T=w.typedValue,S=(0,v.$G)().t,k=(0,i.Z)((0,s.yX)(n,e),2)[1],b=(0,f.Z)(null!=x?x:void 0,[null==k?void 0:k.liquidityToken]),I=null==b?void 0:b[null!==(h=null==k?void 0:null===(g=k.liquidityToken)||void 0===g?void 0:g.address)&&void 0!==h?h:""],B=[(0,d.pu)(n,U),(0,d.pu)(e,U)],j=B[0],P=B[1],D=(y={},(0,o.Z)(y,m.g.CURRENCY_A,j),(0,o.Z)(y,m.g.CURRENCY_B,P),(0,o.Z)(y,m.g.LIQUIDITY,null==k?void 0:k.liquidityToken),y),M=(0,c.Z)(null==k?void 0:k.liquidityToken),L=k&&M&&I&&j&&r.QA.greaterThanOrEqual(M.quotient,I.quotient)?r.ih.fromRawAmount(j,k.getLiquidityValue(j,M,I,!1).quotient):void 0,Q=k&&M&&I&&P&&r.QA.greaterThanOrEqual(M.quotient,I.quotient)?r.ih.fromRawAmount(P,k.getLiquidityValue(P,M,I,!1).quotient):void 0,O=(q={},(0,o.Z)(q,m.g.CURRENCY_A,L),(0,o.Z)(q,m.g.CURRENCY_B,Q),q),V=new r.gG("0","100");if(Y===m.g.LIQUIDITY_PERCENT)V=new r.gG(T,"100");else if(Y===m.g.LIQUIDITY){if(null==k?void 0:k.liquidityToken){var F=(0,p.Z)(T,k.liquidityToken);F&&I&&!F.greaterThan(I)&&(V=new r.gG(F.quotient,I.quotient))}}else if(D[Y]){var G=(0,p.Z)(T,D[Y]),z=O[Y];G&&z&&!G.greaterThan(z)&&(V=new r.gG(G.quotient,z.quotient))}var X=I&&V&&V.greaterThan("0")?r.ih.fromRawAmount(I.currency,V.multiply(I.quotient).quotient):void 0,H=t&&l?void 0:t?null===(N=D[m.g.CURRENCY_A])||void 0===N?void 0:N.address:null===(A=D[m.g.CURRENCY_B])||void 0===A?void 0:A.address,$=j&&V&&V.greaterThan("0")&&L?r.ih.fromRawAmount(j,V.multiply(L.quotient).quotient):void 0,W=P&&V&&V.greaterThan("0")&&Q?r.ih.fromRawAmount(P,V.multiply(Q.quotient).quotient):void 0,K=t&&l?void 0:t?W:$,J=(0,u.useMemo)(function(){if(k&&K)try{return k.getOutputAmount(K)[0]}catch(n){}},[k,K]),nn=(Z={},(0,o.Z)(Z,m.g.LIQUIDITY_PERCENT,V),(0,o.Z)(Z,m.g.LIQUIDITY,X),(0,o.Z)(Z,m.g.CURRENCY_A,C?$&&t&&!l&&J?r.ih.fromRawAmount(j,r.QA.add(V.multiply(L.quotient).quotient,J.quotient)):t?$:void 0:$),(0,o.Z)(Z,m.g.CURRENCY_B,C?W&&l&&!t&&J?r.ih.fromRawAmount(P,r.QA.add(V.multiply(Q.quotient).quotient,J.quotient)):l?W:void 0:W),Z);return x||(E=S("Connect Wallet")),nn[m.g.LIQUIDITY]&&(!t||nn[m.g.CURRENCY_A])&&(!l||nn[m.g.CURRENCY_B])||(E=null!=E?E:S("Enter an amount")),{pair:k,parsedAmounts:nn,error:E,tokenToReceive:H,estimateZapOutAmount:J}}function N(){var n=(0,C.TL)();return{onUserInput:(0,u.useCallback)(function(e,t){n((0,m.L)({field:e,typedValue:t}))},[n])}}},39113:function(n,e,t){t.d(e,{OA:function(){return U},OY:function(){return x},Qw:function(){return w},eM:function(){return S}});var o=t(47842),i=t(87394),r=t(10528),u=t(59656),l=t(65957),a=t(90902),d=t(92794),s=t(6429),c=t(19061),v=t(76269),p=t(5369),C=t(82055),f=t(98838),m=t(30433),R=t(34508),g=t(2784),N=t(43997),A=t(72135),h=t(95707),y=t(27757),q=t(9270),Z=t(88700),E=t(33472),_=t(84709);function x(){return(0,N.v9)(function(n){return n.mint})}function U(n){var e=(0,Z.TL)(),t=(0,g.useCallback)(function(t){e((0,_.LC)({field:_.gN.CURRENCY_A,typedValue:t,noLiquidity:!0===n}))},[e,n]),o=(0,g.useCallback)(function(t){e((0,_.LC)({field:_.gN.CURRENCY_B,typedValue:t,noLiquidity:!0===n}))},[e,n]);return{onFieldAInput:t,onFieldBInput:o}}function w(n,e){var t,r,u,s,c,v,p,f,m,N=(0,q.Ge)().account,A=(0,l.$G)().t,h=x(),Z=h.independentField,U=h.typedValue,w=h.otherTypedValue,Y=Z===_.gN.CURRENCY_A?_.gN.CURRENCY_B:_.gN.CURRENCY_A,T=(0,g.useMemo)(function(){var t;return t={},(0,o.Z)(t,_.gN.CURRENCY_A,null!=n?n:void 0),(0,o.Z)(t,_.gN.CURRENCY_B,null!=e?e:void 0),t},[n,e]),S=(0,i.Z)((0,C.yX)(T[_.gN.CURRENCY_A],T[_.gN.CURRENCY_B]),2),k=S[0],b=S[1],I=(0,R.Z)(null==b?void 0:b.liquidityToken),B=k===C._G.NOT_EXISTS||Boolean(I&&a.QA.equal(I.quotient,d.iV))||Boolean(k===C._G.EXISTS&&b&&a.QA.equal(b.reserve0.quotient,d.iV)&&a.QA.equal(b.reserve1.quotient,d.iV)),j=(0,E.K5)(null!=N?N:void 0,[T[_.gN.CURRENCY_A],T[_.gN.CURRENCY_B],]),P=(c={},(0,o.Z)(c,_.gN.CURRENCY_A,j[0]),(0,o.Z)(c,_.gN.CURRENCY_B,j[1]),c),D=(0,y.Z)(U,T[Z]),M=(0,g.useMemo)(function(){if(B)return w&&T[Y]?(0,y.Z)(w,T[Y]):void 0;if(D){var t=null==D?void 0:D.wrapped,o=[null==n?void 0:n.wrapped,null==e?void 0:e.wrapped],i=o[0],r=o[1];if(i&&r&&t&&b){var u=Y===_.gN.CURRENCY_B?e:n,l=Y===_.gN.CURRENCY_B?b.priceOf(i).quote(t):b.priceOf(r).quote(t);return(null==u?void 0:u.isNative)?a.ih.fromRawAmount(u,l.quotient):l}}},[B,w,T,Y,D,n,e,b]),L=(0,g.useMemo)(function(){var n;return n={},(0,o.Z)(n,_.gN.CURRENCY_A,Z===_.gN.CURRENCY_A?D:M),(0,o.Z)(n,_.gN.CURRENCY_B,Z===_.gN.CURRENCY_A?M:D),n},[M,D,Z]),Q=(0,g.useMemo)(function(){if(B){var e=L[_.gN.CURRENCY_A],t=L[_.gN.CURRENCY_B];return e&&t?new a.tA(e.currency,t.currency,e.quotient,t.quotient):void 0}var o=null==n?void 0:n.wrapped;return b&&o?b.priceOf(o):void 0},[n,B,b,L]),O=(0,g.useMemo)(function(){var n=L[_.gN.CURRENCY_A],e=L[_.gN.CURRENCY_B],t=[null==n?void 0:n.wrapped,null==e?void 0:e.wrapped],o=t[0],i=t[1];if(b&&I&&o&&i)try{return b.getLiquidityMinted(I,o,i)}catch(r){console.error(r)}},[L,b,I]),V=(0,g.useMemo)(function(){if(O&&I)return new a.gG(O.quotient,I.add(O).quotient)},[O,I]);N||(v=A("Connect Wallet")),k===C._G.INVALID&&(v=null!=v?v:A("Choose a valid pair"));var F=L[_.gN.CURRENCY_A],G=L[_.gN.CURRENCY_B];return F&&G&&(null==P?void 0:null===(t=P[_.gN.CURRENCY_A])||void 0===t?void 0:t.equalTo(0))&&(null==P?void 0:null===(r=P[_.gN.CURRENCY_B])||void 0===r?void 0:r.equalTo(0))&&(v=null!=v?v:A("No token balance")),L[_.gN.CURRENCY_A]&&L[_.gN.CURRENCY_B]||(p=A("Enter an amount")),F&&(null==P?void 0:null===(u=P[_.gN.CURRENCY_A])||void 0===u?void 0:u.lessThan(F))&&(p=A("Insufficient %symbol% balance",{symbol:null===(f=T[_.gN.CURRENCY_A])||void 0===f?void 0:f.symbol})),G&&(null==P?void 0:null===(s=P[_.gN.CURRENCY_B])||void 0===s?void 0:s.lessThan(G))&&(p=A("Insufficient %symbol% balance",{symbol:null===(m=T[_.gN.CURRENCY_B])||void 0===m?void 0:m.symbol})),{dependentField:Y,currencies:T,pair:b,pairState:k,currencyBalances:P,parsedAmounts:L,price:Q,noLiquidity:B,liquidityMinted:O,poolTokenPercentage:V,error:v,addError:p}}var Y=a.QA.BigInt(50),T=function(n,e){return n&&e&&n.involvesToken(e)&&a.QA.divide(n.reserveOf(e).quotient,Y)};function S(n){var e,t,d,C,N,q,Z,E,w,S,k,b,I,B,j,P,D,M,L=n.canZap,Q=n.currencyA,O=n.currencyB,V=n.pair,F=n.currencyBalances,G=n.zapTokenCheckedA,z=n.zapTokenCheckedB,X=n.maxAmounts,H=(0,l.$G)().t,$=(0,g.useState)(!1),W=$[0],K=$[1],J=(0,f.zP)(W),nn=(0,g.useState)(!1),ne=nn[0],nt=nn[1],no=x(),ni=no.independentField,nr=no.typedValue,nu=ni===_.gN.CURRENCY_A?_.gN.CURRENCY_B:_.gN.CURRENCY_A,nl=(0,g.useMemo)(function(){var n;return n={},(0,o.Z)(n,_.gN.CURRENCY_A,null!=Q?Q:void 0),(0,o.Z)(n,_.gN.CURRENCY_B,null!=O?O:void 0),n},[Q,O]),na=(0,y.Z)(nr,nl[ni]),nd=(0,g.useMemo)(function(){if(L&&na){var n=null==na?void 0:na.wrapped,e=[null==Q?void 0:Q.wrapped,null==O?void 0:O.wrapped],t=e[0],o=e[1];if(t&&o&&n&&V){var i=nu===_.gN.CURRENCY_B?O:Q,r=nu===_.gN.CURRENCY_B?V.priceOf(t).quote(n):V.priceOf(o).quote(n);return i.isNative?a.ih.fromRawAmount(i,r.quotient):r}}},[L,Q,O,nu,na,V]),ns=X[nu]&&nd&&(null==nd?void 0:nd.greaterThan(X[nu])),nc=(0,g.useMemo)(function(){return ns?X[nu]:nd},[ns,X,nu,nd]),nv=(0,g.useMemo)(function(){var n;return n={},(0,o.Z)(n,_.gN.CURRENCY_A,G?ni===_.gN.CURRENCY_A?na:nc:void 0),(0,o.Z)(n,_.gN.CURRENCY_B,z?ni===_.gN.CURRENCY_A?nc:na:void 0),n},[nc,na,ni,G,z]),np=(0,g.useMemo)(function(){var n,e,t;return t={},(0,o.Z)(t,_.gN.CURRENCY_A,null===(n=nv[_.gN.CURRENCY_A])||void 0===n?void 0:n.wrapped),(0,o.Z)(t,_.gN.CURRENCY_B,null===(e=nv[_.gN.CURRENCY_B])||void 0===e?void 0:e.wrapped),t},[nv]),nC=(0,v.n9)(),nf=!!G&&!!z&&!!nv[_.gN.CURRENCY_A]&&!!nv[_.gN.CURRENCY_B],nm=!nf&&z&&nv[_.gN.CURRENCY_B]?_.gN.CURRENCY_B:_.gN.CURRENCY_A,nR=(0,g.useMemo)(function(){return np[nm]},[nm,np]),ng=(0,g.useMemo)(function(){if(!nf)return!1;if(np[ni]&&np[nu]){if(!ns)return!0;var n=[null==Q?void 0:Q.wrapped,null==O?void 0:O.wrapped],e=n[0],t=n[1];if(e&&t&&np[ni]&&V)return np[nu].equalTo(nu===_.gN.CURRENCY_B?V.priceOf(e).quote(np[ni]):V.priceOf(t).quote(np[ni]))}},[Q,O,nu,ni,ns,V,nf,np,]),nN=(0,m.Av)(L&&!ng&&nC&&nR&&(null==nR?void 0:nR.currency)&&V&&!nf&&{contract:nC,methodName:"estimateZapInSwap",params:[nR.currency.address,nR.quotient.toString(),V.liquidityToken.address,]},{onError:function(n){console.error(n)}}),nA=(0,m.Av)(L&&nC&&!ng&&np&&np[_.gN.CURRENCY_A]&&np[_.gN.CURRENCY_B]&&V&&nf&&{contract:nC,methodName:"estimateZapInRebalancingSwap",params:[np[_.gN.CURRENCY_A].currency.address,np[_.gN.CURRENCY_B].currency.address,np[_.gN.CURRENCY_A].quotient.toString(),null===(e=np[_.gN.CURRENCY_B])||void 0===e?void 0:null===(t=e.quotient)||void 0===t?void 0:t.toString(),V.liquidityToken.address,]},{onError:function(n){console.error(n)}}),nh=(0,g.useMemo)(function(){var n,e,t,o,i,r;return((null==nA?void 0:nA.data)||(null==nN?void 0:nN.data))&&{swapAmountIn:nf?null===(n=nA.data)||void 0===n?void 0:n.swapAmountIn:null===(e=nN.data)||void 0===e?void 0:e.swapAmountIn,swapAmountOut:nf?null===(t=nA.data)||void 0===t?void 0:t.swapAmountOut:null===(o=nN.data)||void 0===o?void 0:o.swapAmountOut,isToken0Sold:nf?null===(i=nA.data)||void 0===i?void 0:i.sellToken0:(null===(r=nN.data)||void 0===r?void 0:r.swapTokenOut)===(null==nR?void 0:nR.currency.address)}},[nf,nA.data,nN.data,null==nR?void 0:nR.currency.address]),ny=(0,g.useMemo)(function(){return nA.data?nA.data.sellToken0:V&&np[_.gN.CURRENCY_A]&&np[_.gN.CURRENCY_B]?V.token0.equals(np[_.gN.CURRENCY_A].currency)?a.QA.greaterThan(a.QA.multiply(np[_.gN.CURRENCY_A].quotient,V.reserve1.quotient),a.QA.multiply(np[_.gN.CURRENCY_B].quotient,V.reserve0.quotient)):a.QA.greaterThan(a.QA.multiply(np[_.gN.CURRENCY_B].quotient,V.reserve0.quotient),a.QA.multiply(np[_.gN.CURRENCY_A].quotient,V.reserve1.quotient)):void 0},[V,nA.data,np]),nq=nf?ny?_.gN.CURRENCY_A:_.gN.CURRENCY_B:nm,nZ=nq===_.gN.CURRENCY_A?_.gN.CURRENCY_B:_.gN.CURRENCY_A,nE=(0,g.useMemo)(function(){var n,e,t;return t={},(0,o.Z)(t,nq,null===(n=nl[nq])||void 0===n?void 0:n.wrapped),(0,o.Z)(t,nZ,null===(e=nl[nZ])||void 0===e?void 0:e.wrapped),t},[nl,nZ,nq]),n_=(0,g.useMemo)(function(){return nf?nA.error:nN.error},[nf,nA.error,nN.error]),nx=(0,g.useMemo)(function(){return nf?nA.status:nN.status},[nf,nA.status,nN.status]),nU=(0,g.useMemo)(function(){if(nh){var n=a.ih.fromRawAmount(nE[nq],nh.swapAmountIn.toString()),e=a.ih.fromRawAmount(nE[nZ],nh.swapAmountOut.toString()),t=new a.tA(nE[nq],nE[nZ],V.token0.equals(nE[nq])?V.reserve0.quotient:V.reserve1.quotient,V.token0.equals(nE[nq])?V.reserve1.quotient:V.reserve0.quotient);return(0,a.oc)(t,n,e)}},[V,nZ,nq,nE,nh]),nw=(0,g.useMemo)(function(){return!!nh&&a.QA.lessThan(a.QA.divide(V.reserveOf(nE[nq]).quotient,a.QA.BigInt(nh.swapAmountIn.toString())),Y)},[V,nE,nh,nq])||n_?4:nU?(0,h.oX)(nU):0,nY=U(!1),nT=nY.onFieldAInput,nS=nY.onFieldBInput,nk=(0,g.useMemo)(function(){return function(n,e,t){if(!t){if(e){var o=T(n,e.currency);return o&&a.QA.multiply(o,a.QA.BigInt(2))}return}if(e&&t){var r=T(n,e.currency);if(!r)return;var u=(0,i.Z)(n.getInputAmount(a.ih.fromRawAmount(e.currency,r)),2),l=(u[0],u[1]);return a.QA.add(r,a.QA.divide(a.QA.multiply(t.quotient,l.reserveOf(e.currency).quotient),l.reserveOf(t.currency).quotient))}}(V,np[nq],nf?np[nZ]:void 0)},[V,np,nq,nf,nZ]),nb=(0,g.useCallback)(function(){if(nk&&X[nq]){var n,e=(0,u.formatUnits)(a.QA.greaterThan(X[nq].quotient,nk)?nk.toString():X[nq].quotient.toString(),null===(n=X[nq])||void 0===n?void 0:n.currency.decimals);nq===_.gN.CURRENCY_A?nT(e):nS(e)}},[X,nk,nT,nS,nq]),nI=(0,R.Z)(null==V?void 0:V.liquidityToken),nB=(0,g.useMemo)(function(){if(V&&nE[nq]&&nE[nZ]&&(null==nh?void 0:nh.swapAmountIn)&&(null==nh?void 0:nh.swapAmountOut)&&np[nq]&&V&&nI)try{var n=np[nq].greaterThan(nh.swapAmountIn.toString())?np[nq].subtract(a.ih.fromRawAmount(nE[nq],nh.swapAmountIn.toString())):np[nq],e=a.ih.fromRawAmount(nE[nZ],nh.swapAmountOut.toString());return np[nZ]&&(e=e.add(np[nZ])),V.getLiquidityMinted(nI,n,e)}catch(t){console.error(t)}},[V,nE,nq,nZ,null==nh?void 0:nh.swapAmountIn,null==nh?void 0:nh.swapAmountOut,np,nI,]),nj=(0,g.useMemo)(function(){return np[nq]&&a.QA.lessThan(np[nq].quotient,a.Xh)},[nq,np]),nP=(0,g.useMemo)(function(){return np[nZ]&&a.QA.lessThan(np[nZ].quotient,a.Xh)},[nZ,np]),nD=(0,g.useMemo)(function(){if(nB&&nI)return new a.gG(nB.quotient,nI.add(nB).quotient)},[nB,nI]),nM=(S=(0,g.useMemo)(function(){return nh?a.ih.fromRawAmount(nE[nq],nh.swapAmountIn.toString()):null},[nq,nE,nh]),I=(0,A.Fh)(),B=(0,p.Z)(),j=(0,u.formatUnits)(I?r.O$.from(I).mul("500000"):"0"),P=S?(0,y.Z)(j,B):void 0,D=(null==S?void 0:S.currency.symbol)==="BNB",null!==(b=null==(M=(0,c.AU)(P,D?null:null==S?void 0:S.currency))?void 0:null===(k=M.outputAmount)||void 0===k?void 0:k.greaterThan(null==S?void 0:S.quotient))&&void 0!==b&&b);(0,g.useEffect)(function(){!ne&&nv[nq]&&nk&&!J&&W&&!nf&&a.QA.greaterThan(nv[nq].quotient,nk)&&(nb(),nt(!0))},[nb,W,nk,nv,J,nf,nR,nq,ne,]);var nL=(0,g.useCallback)(function(){K(!0)},[]);return n_&&(N=H("Cannot estimate zap amount")),(nj||nf&&nP)&&(N=H("Zap in amount too low")),np[nq]&&(null===(d=F[nq])||void 0===d?void 0:d.lessThan(np[nq]))&&(N=H("Insufficient %token% balance",{token:null!==(Z=null===(q=np[nq])||void 0===q?void 0:q.currency.symbol)&&void 0!==Z?Z:""})),np[nZ]&&nf&&(null===(C=F[nZ])||void 0===C?void 0:C.lessThan(np[nZ]))&&(N=H("Insufficient %token% balance",{token:null!==(w=null===(E=np[nZ])||void 0===E?void 0:E.currency.symbol)&&void 0!==w?w:""})),{zapInEstimating:nx!==s.iF.Fetched,zapInEstimatedError:n_,zapInEstimated:nh,error:N,liquidityMinted:nB,poolTokenPercentage:nD,parsedAmounts:nv,swapTokenField:nq,swapOutTokenField:nZ,priceSeverity:nw,convertToMaxZappable:nb,rebalancing:nf,noNeedZap:ng,gasOverhead:nM,isDependentAmountGreaterThanMaxAmount:ns,onInputBlurOnce:nL}}},70343:function(n,e,t){t.d(e,{L:function(){return h},o:function(){return A}});var o=t(98788),i=t(47842),r=t(5163),u=t(65957),l=t(90902),a=t(92794),d=t(82055),s=t(34508),c=t(2784),v=t(27757),p=t(84709),C=t(33472),f=t(86849),m=t(20247),R=t(49857),g=t(39113),N=t(9270);function A(n,e){var t,o=(0,c.useContext)(f.UA),i=o.stableSwapConfig,r=o.stableSwapContract,u=null===(t=(0,v.Z)("1",n))||void 0===t?void 0:t.quotient,a=(0,m.GS)({estimatedCurrency:e,quotient:null==u?void 0:u.toString(),stableSwapContract:r,stableSwapConfig:i}).data,s=(0,c.useMemo)(function(){var t=u&&a,o=l.ih.fromRawAmount(e,"0"),r=t?new l.tA(n,e,u,a.quotient):o;return{liquidityToken:(null==i?void 0:i.liquidityToken)||null,tokenAmounts:[],token0:n,token1:e,priceOf:function(e){return t?(null==e?void 0:e.address)===(null==n?void 0:n.address)?r:r.invert():o},token0Price:function(){return r},token1Price:function(){return r.invert()},reserve1:o,reserve0:o,getLiquidityValue:function(){return o}}},[null==i?void 0:i.liquidityToken,n,e,u,a]);return i?{pairState:d._G.EXISTS,pair:s}:{pairState:d._G.NOT_EXISTS,pair:void 0}}function h(n,e){var t,h,y,q,Z,E,_,x,U,w,Y,T,S,k,b,I,B,j,P=(0,N.Ge)().account,D=(0,u.$G)().t,M=(0,g.OY)(),L=M.independentField,Q=M.typedValue,O=M.otherTypedValue,V=L===p.gN.CURRENCY_A?p.gN.CURRENCY_B:p.gN.CURRENCY_A,F=(0,c.useMemo)(function(){var t;return t={},(0,i.Z)(t,p.gN.CURRENCY_A,null!=n?n:void 0),(0,i.Z)(t,p.gN.CURRENCY_B,null!=e?e:void 0),t},[n,e]),G=A(null==n?void 0:n.wrapped,null==e?void 0:e.wrapped),z=G.pairState,X=G.pair,H=(0,s.Z)(null==X?void 0:X.liquidityToken),$=z===d._G.NOT_EXISTS||Boolean(H&&l.QA.equal(H.quotient,a.iV)),W=(0,C.K5)(null!=P?P:void 0,[n,e]),K=(Z={},(0,i.Z)(Z,p.gN.CURRENCY_A,W[0]),(0,i.Z)(Z,p.gN.CURRENCY_B,W[1]),Z),J=(0,v.Z)(Q,F[L]),nn=(0,v.Z)(O,F[V]),ne=(0,c.useMemo)(function(){var n;return n={},(0,i.Z)(n,p.gN.CURRENCY_A,L===p.gN.CURRENCY_A?J:nn),(0,i.Z)(n,p.gN.CURRENCY_B,L===p.gN.CURRENCY_A?nn:J),n},[nn,J,L]),nt=(0,c.useContext)(f.UA),no=nt.stableSwapConfig,ni=nt.stableSwapContract,nr=nt.stableSwapInfoContract,nu=ne[p.gN.CURRENCY_A],nl=ne[p.gN.CURRENCY_B],na=null==nu?void 0:nu.quotient,nd=null==nl?void 0:nl.quotient,ns=(0,m.GS)({estimatedCurrency:na?e:n,quotient:na?null==na?void 0:na.toString():null==nd?void 0:nd.toString(),stableSwapConfig:no,stableSwapContract:ni}).data,nc=(0,c.useMemo)(function(){var t=null==ns?void 0:ns.equalTo(0);if((na||nd)&&ns&&!t)return na?new l.tA(n,e,na,ns.quotient):new l.tA(n,e,ns.quotient,nd)},[ns,n,e,nd,na]),nv=(Y=(w={stableSwapAddress:null==no?void 0:no.stableSwapAddress,stableSwapInfoContract:nr,stableSwapConfig:no,currencyInput:na?n:e,currencyInputAmount:na||nd,currencyOutputAmount:na?nd:na}).stableSwapInfoContract,T=w.stableSwapConfig,S=w.stableSwapAddress,k=w.currencyInput,b=w.currencyInputAmount,I=w.currencyOutputAmount,B=null==b?void 0:b.toString(),j=null==I?void 0:I.toString(),(0,R.ZP)(S&&B&&j?["get_add_liquidity_mint_amount",S,B,j]:null,(0,o.Z)(function(){var n,e,t;return(0,r.__generator)(this,function(e){return t=(null==T?void 0:null===(n=T.token0)||void 0===n?void 0:n.address)===(null==k?void 0:k.address)?[B,j]:[j,B],[2,Y.get_add_liquidity_mint_amount(S,t)]})}))).data,np=(0,c.useMemo)(function(){if((null==X?void 0:X.liquidityToken)&&H&&nv)try{return l.ih.fromRawAmount(null==X?void 0:X.liquidityToken,null==nv?void 0:nv.toString())}catch(n){console.error(n)}},[null==X?void 0:X.liquidityToken,H,nv]),nC=(0,c.useMemo)(function(){if(np&&H)return new l.gG(np.quotient,H.add(np).quotient)},[np,H]);return P||(E=D("Connect Wallet")),z===d._G.INVALID&&(E=null!=E?E:D("Choose a valid pair")),nu&&nl&&(null==K?void 0:null===(t=K[p.gN.CURRENCY_A])||void 0===t?void 0:t.equalTo(0))&&(null==K?void 0:null===(h=K[p.gN.CURRENCY_B])||void 0===h?void 0:h.equalTo(0))&&(E=null!=E?E:D("No token balance")),ne[p.gN.CURRENCY_A]&&ne[p.gN.CURRENCY_B]||(_=D("Enter an amount")),nu&&(null==K?void 0:null===(y=K[p.gN.CURRENCY_A])||void 0===y?void 0:y.lessThan(nu))&&(_=D("Insufficient %symbol% balance",{symbol:null===(x=F[p.gN.CURRENCY_A])||void 0===x?void 0:x.symbol})),nl&&(null==K?void 0:null===(q=K[p.gN.CURRENCY_B])||void 0===q?void 0:q.lessThan(nl))&&(_=D("Insufficient %symbol% balance",{symbol:null===(U=F[p.gN.CURRENCY_B])||void 0===U?void 0:U.symbol})),{dependentField:V,currencies:F,pair:X,pairState:z,currencyBalances:K,parsedAmounts:ne,price:nc,noLiquidity:$,liquidityMinted:np,poolTokenPercentage:nC,error:E,addError:_}}},87e3:function(n,e,t){t.d(e,{D:function(){return g},N:function(){return R}});var o=t(98788),i=t(47842),r=t(87394),u=t(5163),l=t(90902),a=t(65957),d=t(80194),s=t(33472),c=t(12847),v=t(70343),p=t(86849),C=t(49857),f=t(2784),m=t(9270);function R(n){var e,t=n.lpAmount,i=(0,f.useContext)(p.UA),r=i.stableSwapInfoContract,a=i.stableSwapConfig,d=(0,C.ZP)(t?["stableSwapInfoContract","calc_coins_amount",null==a?void 0:a.stableSwapAddress,t]:null,(0,o.Z)(function(){return(0,u.__generator)(this,function(n){return[2,r.calc_coins_amount(null==a?void 0:a.stableSwapAddress,t)]})})).data;if(!Array.isArray(d))return[];return[l.ih.fromRawAmount(null==a?void 0:a.token0,d[0].toString()),l.ih.fromRawAmount(null==a?void 0:a.token1,d[1].toString())]}function g(n,e){var t,o,u,p,C,f=(0,m.Ge)().account,g=(0,c.Xi)(),N=g.independentField,A=g.typedValue,h=(0,a.$G)().t,y=(0,v.o)(null==n?void 0:n.wrapped,null==e?void 0:e.wrapped).pair,q=(0,s.Z)(null!=f?f:void 0,[null==y?void 0:y.liquidityToken]),Z=null==q?void 0:q[null!==(u=null==y?void 0:null===(t=y.liquidityToken)||void 0===t?void 0:t.address)&&void 0!==u?u:""],E=new l.gG("0","100");N===d.g.LIQUIDITY_PERCENT&&(E=new l.gG(A,"100"));var _=Z&&E&&E.greaterThan("0")?l.ih.fromRawAmount(Z.currency,E.multiply(Z.quotient).quotient):void 0,x=(0,r.Z)(R({lpAmount:null==_?void 0:null===(o=_.quotient)||void 0===o?void 0:o.toString()}),2),U=x[0],w=x[1],Y=(p={},(0,i.Z)(p,d.g.LIQUIDITY_PERCENT,E),(0,i.Z)(p,d.g.LIQUIDITY,_),(0,i.Z)(p,d.g.CURRENCY_A,U),(0,i.Z)(p,d.g.CURRENCY_B,w),p);return f||(C=h("Connect Wallet")),Y[d.g.LIQUIDITY]||(C=null!=C?C:h("Enter an amount")),{pair:y,parsedAmounts:Y,error:C}}},95134:function(n,e,t){var o=t(92228),i=t(3411),r=t(78545);function u(){var n=(0,o.Z)(["\n  ","\n"]);return u=function(){return n},n}var l=i.ZP.div.withConfig({componentId:"sc-df4f0a61-0"})(u(),r.Dh);l.defaultProps={p:"24px"},e.Z=l},29420:function(n,e,t){var o=t(70865),i=t(96670),r=t(52322);t(2784);var u=t(62923),l=function(n){return(0,r.jsx)(u.Z,(0,i.Z)((0,o.Z)({viewBox:"0 0 24 24"},n),{children:(0,r.jsx)("path",{d:"M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"})}))};e.Z=l},81916:function(n,e,t){var o=t(70865),i=t(96670),r=t(52322);t(2784);var u=t(62923),l=function(n){return(0,r.jsx)(u.Z,(0,i.Z)((0,o.Z)({viewBox:"0 0 24 24"},n),{children:(0,r.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))};e.Z=l},83931:function(n,e,t){var o=t(92228),i=t(3411),r=t(89495);function u(){var n=(0,o.Z)(["\n  text-decoration: underline dotted;\n  text-decoration-color: ",";\n  text-underline-offset: 0.1em;\n"]);return u=function(){return n},n}var l=(0,i.ZP)(r.Z).withConfig({componentId:"sc-5b87ff15-0"})(u(),function(n){var e,t=n.theme,o=n.decorationColor;return"".concat((null==t?void 0:t.colors)&&o?t.colors[o]:null==t?void 0:null===(e=t.colors)||void 0===e?void 0:e.textSubtle)});e.Z=l}}]);
//# sourceMappingURL=5366-bfd4ffb6ddb46227.js.map