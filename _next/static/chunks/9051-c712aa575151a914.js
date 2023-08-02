"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9051],{79051:function(n,e,t){t.d(e,{Z:function(){return en}});var r,o=t(47842),i=t(92228),s=t(52322),c=t(2784),l=t(26033),a=t(62392),u=t(62208),d=t(48497),h=t(48608),f=t(3411),x=t(98838),m=t(65957),p=t(87394),v=t(50930),g=t(13670),Z=t(89495),j=t(13023),b=t(65342),w=t(5369),k=t(7083),y=t(72640),C=t(72135),I=t(5305),S=t(31196),T=t(77253),L=t(26830),R=t(72963),E=t(92794),P=t(91790),U=t(34188);function D(){var n=(0,i.Z)(["\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n"]);return D=function(){return n},n}function A(){var n=(0,i.Z)(["\n  border: 1px solid ",";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n  align-items: center;\n  :hover {\n    cursor: ",";\n    background-color: ",";\n  }\n  background-color: ",";\n  opacity: ",";\n"]);return A=function(){return n},n}function B(){var n=(0,i.Z)(["\n  white-space: nowrap;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  &::-webkit-scrollbar {\n    display: none;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n"]);return B=function(){return n},n}var M=f.ZP.div.withConfig({componentId:"sc-ac2ddbdc-0"})(D()),z=f.ZP.div.withConfig({componentId:"sc-ac2ddbdc-1"})(A(),function(n){var e=n.theme;return n.disable?"transparent":e.colors.dropdown},function(n){return!n.disable&&"pointer"},function(n){var e=n.theme;return!n.disable&&e.colors.background},function(n){var e=n.theme;return n.disable&&e.colors.dropdown},function(n){return n.disable&&"0.4"}),H=f.ZP.div.withConfig({componentId:"sc-ac2ddbdc-2"})(B());function N(n){var e=n.chainId,t=n.onSelect,r=n.selectedCurrency,o=n.commonBasesType,i=(0,w.Z)(),c=(0,m.$G)().t,l=c(o===U.L0.SWAP_LIMITORDER?"Common tokens":"Common bases");return(0,s.jsxs)(T.Tz,{gap:"md",children:[(0,s.jsxs)(L.BA,{children:[(0,s.jsx)(Z.Z,{fontSize:"14px",children:l}),o===U.L0.LIQUIDITY&&(0,s.jsx)(R.s,{text:c("These tokens are commonly paired with other tokens."),ml:"4px"})]}),(0,s.jsxs)(H,{children:[(0,s.jsx)(M,{children:(0,s.jsxs)(z,{onClick:function(){r&&r.isNative||t(i)},disable:null==r?void 0:r.isNative,children:[(0,s.jsx)(P.Xw,{currency:i,style:{marginRight:8}}),(0,s.jsx)(Z.Z,{children:null==i?void 0:i.symbol})]})}),(e&&E.kx[e]||[]).map(function(n){var e=null==r?void 0:r.equals(n);return(0,s.jsx)(M,{children:(0,s.jsxs)(z,{onClick:function(){return!e&&t(n)},disable:e,children:[(0,s.jsx)(P.Xw,{currency:n,style:{marginRight:8,borderRadius:"50%"}}),(0,s.jsx)(Z.Z,{children:n.symbol})]})},"buttonBase#".concat(n.address))})]})]})}var _=t(36979),V=t(94250),G=t(27156),O=t(9270),$=t(33472),W=t(88549),X=t(10396),Q=t(39999);function Y(){var n=(0,i.Z)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 10px;\n  align-items: center;\n\n  opacity: ",";\n\n  "," {\n    grid-gap: 16px;\n  }\n"]);return Y=function(){return n},n}function q(){var n=(0,i.Z)(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ",";\n"]);return q=function(){return n},n}function J(){var n=(0,i.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n"]);return J=function(){return n},n}var F=f.ZP.div.withConfig({componentId:"sc-46a7a6c2-0"})(Y(),function(n){return n.dim?"0.4":"1"},function(n){return n.theme.mediaQueries.md}),K=(0,f.ZP)(X.Z).withConfig({componentId:"sc-46a7a6c2-1"})(q(),function(n){return n.theme.colors.success}),nn=f.ZP.div.withConfig({componentId:"sc-46a7a6c2-2"})(J());function ne(n){var e,t,r=n.token,o=n.style,i=n.dim,c=n.showImportView,l=n.setImportToken,u=(0,b.Z)().chainId,d=(0,a.Z)().isMobile,f=(0,m.$G)().t,x=(0,k.qB)(),p=u&&(null==x?void 0:null===(e=x[u])||void 0===e?void 0:null===(t=e[r.address])||void 0===t?void 0:t.list),v=(0,S.EH)(r),g=(0,S.ZN)(r);return(0,s.jsxs)(F,{style:o,children:[(0,s.jsx)(Q.Z,{currency:r,size:d?"20px":"24px",style:{opacity:i?"0.6":"1"}}),(0,s.jsxs)(T.Tz,{gap:"4px",style:{opacity:i?"0.6":"1"},children:[(0,s.jsxs)(L.BA,{children:[(0,s.jsx)(Z.Z,{mr:"8px",children:r.symbol}),(0,s.jsx)(Z.Z,{color:"textDisabled",children:(0,s.jsx)(nn,{title:r.name,children:r.name})})]}),p&&p.logoURI&&(0,s.jsxs)(L.DA,{children:[(0,s.jsxs)(Z.Z,{fontSize:d?"10px":"14px",mr:"4px",color:"textSubtle",children:[f("via")," ",p.name]}),(0,s.jsx)(P._r,{logoURI:p.logoURI,size:"12px"})]})]}),g||v?(0,s.jsxs)(L.DA,{style:{minWidth:"fit-content"},children:[(0,s.jsx)(K,{}),(0,s.jsx)(Z.Z,{color:"success",children:"Active"})]}):(0,s.jsx)(h.Z,{scale:d?"sm":"md",width:"fit-content",onClick:function(){l&&l(r),c()},children:f("Import")})]})}function nt(){var n=(0,i.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);return nt=function(){return n},n}function nr(){var n=(0,i.Z)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-gap: 16px;\n  align-items: center;\n"]);return nr=function(){return n},n}function no(){var n=(0,i.Z)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);\n  grid-gap: 8px;\n  cursor: ",";\n  pointer-events: ",";\n  :hover {\n    background-color: ",";\n  }\n  opacity: ",";\n"]);return no=function(){return n},n}function ni(n){return(null==n?void 0:n.isToken)?n.address:(null==n?void 0:n.isNative)?n.symbol:""}var ns=(0,f.ZP)(Z.Z).withConfig({componentId:"sc-f4f79ca7-0"})(nt()),nc=f.ZP.div.withConfig({componentId:"sc-f4f79ca7-1"})(nr());function nl(n){var e=n.balance;return(0,s.jsx)(ns,{title:e.toExact(),children:e.toSignificant(4)})}var na=(0,f.ZP)(L.m0).withConfig({componentId:"sc-f4f79ca7-2"})(no(),function(n){return!n.disabled&&"pointer"},function(n){return n.disabled&&"none"},function(n){var e=n.theme;return!n.disabled&&e.colors.background},function(n){var e=n.disabled,t=n.selected;return e||t?.5:1});function nu(n){var e=n.currency,t=n.onSelect,r=n.isSelected,o=n.otherSelected,i=n.style,c=(0,O.Ge)().account,l=(0,m.$G)().t,a=ni(e),u=(0,k.z0)(),d=(0,I.wK)(u,e),h=(0,S.EH)(e),f=(0,$._h)(null!=c?c:void 0,e);return(0,s.jsxs)(na,{style:i,className:"token-item-".concat(a),onClick:function(){return r?null:t()},disabled:r,selected:o,children:[(0,s.jsx)(P.Xw,{currency:e,size:"24px"}),(0,s.jsxs)(T.ZP,{children:[(0,s.jsx)(Z.Z,{bold:!0,children:e.symbol}),(0,s.jsxs)(Z.Z,{color:"textSubtle",small:!0,ellipsis:!0,maxWidth:"200px",children:[!d&&h&&"".concat(l("Added by user")," •")," ",e.name]})]}),(0,s.jsx)(L.DA,{style:{justifySelf:"flex-end"},children:f?(0,s.jsx)(nl,{balance:f}):c?(0,s.jsx)(W.Z,{}):null})]})}function nd(n){var e=n.height,t=n.currencies,r=n.inactiveCurrencies,o=n.selectedCurrency,i=n.onCurrencySelect,l=n.otherCurrency,a=n.fixedListRef,u=n.showNative,d=n.showImportView,h=n.setImportToken,f=n.breakIndex,x=(0,w.Z)(),p=(0,c.useMemo)(function(){var n=u?[x].concat((0,v.Z)(t),(0,v.Z)(r)):(0,v.Z)(t).concat((0,v.Z)(r));return void 0!==f&&(n=(0,v.Z)(n.slice(0,f)).concat([void 0],(0,v.Z)(n.slice(f,n.length)))),n},[f,t,r,u,x]),g=(0,b.Z)().chainId,j=(0,m.$G)().t,k=(0,c.useCallback)(function(n){var e=n.data,r=n.index,c=n.style,a=e[r],u=Boolean(o&&a&&o.equals(a)),x=Boolean(l&&a&&l.equals(a)),m=function(){return i(a)},p=(0,V.pu)(a,g),v=r>t.length;return r!==f&&e?v&&p?(0,s.jsx)(ne,{style:c,token:p,showImportView:d,setImportToken:h,dim:!0}):(0,s.jsx)(nu,{style:c,currency:a,isSelected:u,onSelect:m,otherSelected:x}):(0,s.jsx)(nc,{style:c,children:(0,s.jsx)(G.m5,{padding:"8px 12px",borderRadius:"8px",children:(0,s.jsxs)(L.m0,{children:[(0,s.jsx)(Z.Z,{small:!0,children:j("Expanded results from inactive Token Lists")}),(0,s.jsx)(R.s,{text:j("Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."),ml:"4px"})]})})})},[o,l,g,t.length,f,i,j,d,h,]),y=(0,c.useCallback)(function(n,e){return ni(e[n])},[]);return(0,s.jsx)(_.t7,{height:e,ref:a,width:"100%",itemData:p,itemCount:p.length,itemSize:56,itemKey:y,children:k})}function nh(n){var e=(0,I.UJ)(n);if(e){var t=e.toLowerCase();return function(n){return"address"in n&&t===n.address.toLowerCase()}}var r=n.toLowerCase().split(/\s+/).filter(function(n){return n.length>0});if(0===r.length)return function(){return!0};var o=function(n){var e=n.toLowerCase().split(/\s+/).filter(function(n){return n.length>0});return r.every(function(n){return 0===n.length||e.some(function(e){return e.startsWith(n)||e.endsWith(n)})})};return function(n){var e=n.symbol,t=n.name;return e&&o(e)||t&&o(t)}}var nf=function(n){var e=(0,$.uD)(),t=(0,c.useMemo)(function(){var n;return n=null!=e?e:{},function(e,t){var r,o,i=n[e.address],s=n[t.address],c=i&&s?i.greaterThan(s)?-1:i.equalTo(s)?0:1:i&&i.greaterThan("0")?-1:s&&s.greaterThan("0")?1:0;return 0!==c?c:e.symbol&&t.symbol?e.symbol.toLowerCase()<t.symbol.toLowerCase()?-1:1:e.symbol?-1:t.symbol?-1:0}},[e]);return(0,c.useMemo)(function(){return n?function(n,e){return -1*t(n,e)}:t},[n,t])},nx=function(n){var e,t,o=n.selectedCurrency,i=n.onCurrencySelect,l=n.otherSelectedCurrency,u=n.showCommonBases,d=n.commonBasesType,h=n.showImportView,f=n.setImportToken,R=n.height,E=(0,m.$G)().t,P=(0,b.Z)().chainId,U=(0,c.useRef)(),D=(0,c.useState)(""),A=D[0],B=D[1],M=(0,x.Nr)(A,200),z=(0,c.useState)(!1)[0],H=(0,S.e_)(),_=(0,S.dQ)(M),V=(0,S.EH)(_),G=(0,a.Z)().isMobile,O=(0,p.Z)((0,C.TO)(),1)[0],$=(0,w.Z)(),W=(0,c.useMemo)(function(){var n,e,t,r=M.toLowerCase().trim();return $&&(null===(n=$.symbol)||void 0===n?void 0:null===(e=n.toLowerCase)||void 0===e?void 0:null===(t=e.call(n))||void 0===t?void 0:t.indexOf(r))!==-1},[M,$]),X=(e=(0,c.useMemo)(function(){var n=nh(M);return Object.values(H).filter(n)},[H,M]),(0,c.useMemo)(function(){if(!e)return[];var n=M.toLowerCase().trim(),t=n.split(/\s+/).filter(function(n){return n.length>0});if(t.length>1)return e;var r=[],o=[],i=[];return e.forEach(function(e){var s,c,l=null===(s=e.symbol)||void 0===s?void 0:s.toLowerCase();return l===t[0]||(null===(c=e.name)||void 0===c?void 0:c.toLowerCase())===n?r.push(e):l.startsWith(n)?o.push(e):i.push(e)}),(0,v.Z)(r).concat((0,v.Z)(o),(0,v.Z)(i))},[e,M])),Q=nf(z),Y=(0,c.useMemo)(function(){return(0,v.Z)(X).sort(Q)},[X,Q]),q=(0,c.useCallback)(function(n){i(n),O&&(r||(r=new Audio("https://cdn.pancakeswap.com/swap.mp3")),r).play()},[O,i]),J=(0,c.useRef)();(0,c.useEffect)(function(){G||J.current.focus()},[G]);var F=(0,c.useCallback)(function(n){var e,t=n.target.value;B((0,I.UJ)(t)||t),null===(e=U.current)||void 0===e||e.scrollTo(0)},[]),K=(0,c.useCallback)(function(n){if("Enter"===n.key){var e;M.toLowerCase().trim()===$.symbol.toLowerCase().trim()?q($):Y.length>0&&((null===(e=Y[0].symbol)||void 0===e?void 0:e.toLowerCase())===M.trim().toLowerCase()||1===Y.length)&&q(Y[0])}},[M,Y,q,$]),nn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=(0,k.R0)(),r=(0,k.eu)(),o=(0,b.Z)().chainId,i=(0,S.e_)();return(0,c.useMemo)(function(){if(!n||0===n.trim().length)return[];var s=nh(n),c=[],l=[],a={},u=n.toLowerCase().trim(),d=!0,h=!1,f=void 0;try{for(var x,m=r[Symbol.iterator]();!(d=(x=m.next()).done);d=!0){var p=t[x.value].current;if(p){var g=!0,Z=!1,j=void 0;try{for(var b,w=p.tokens[Symbol.iterator]();!(g=(b=w.next()).done);g=!0){var k=b.value;if(k.chainId===o&&!(k.address in i)&&!a[k.address]&&s(k)){var C,I,S=new y.DT(k);a[S.address]=!0,(null===(C=k.name)||void 0===C?void 0:C.toLowerCase())===u||(null===(I=k.symbol)||void 0===I?void 0:I.toLowerCase())===u?c.push(S):l.push(S)}}}catch(T){Z=!0,j=T}finally{try{g||null==w.return||w.return()}finally{if(Z)throw j}}}}}catch(L){h=!0,f=L}finally{try{d||null==m.return||m.return()}finally{if(h)throw f}}return(0,v.Z)(c).concat((0,v.Z)(l)).slice(0,e)},[i,o,r,t,e,n])}(M),nt=Boolean(null==nn?void 0:nn.length),nr=(0,c.useCallback)(function(){return!_||V||nt?Boolean(null==Y?void 0:Y.length)||nt?(0,s.jsx)(g.Z,{margin:"24px -24px",children:(0,s.jsx)(nd,{height:G?u?R||250:R?R+80:350:390,showNative:W,currencies:Y,inactiveCurrencies:nn,breakIndex:Boolean(null==nn?void 0:nn.length)&&Y?Y.length:void 0,onCurrencySelect:q,otherCurrency:l,selectedCurrency:o,fixedListRef:U,showImportView:h,setImportToken:f})}):(0,s.jsx)(T.ZP,{style:{padding:"20px",height:"100%"},children:(0,s.jsx)(Z.Z,{color:"textSubtle",textAlign:"center",mb:"20px",children:E("No results found.")})}):(0,s.jsx)(T.ZP,{style:{padding:"20px 0",height:"100%"},children:(0,s.jsx)(ne,{token:_,showImportView:h,setImportToken:f})})},[nn,Y,q,nt,l,_,V,o,f,W,h,E,u,G,R,]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(T.Tz,{gap:"16px",children:[(0,s.jsx)(L.ZP,{children:(0,s.jsx)(j.Z,{id:"token-search-input",placeholder:E("Search name or paste address"),scale:"lg",autoComplete:"off",value:A,ref:J,onChange:F,onKeyDown:K})}),u&&(0,s.jsx)(N,{chainId:P,onSelect:q,selectedCurrency:o,commonBasesType:d})]}),nr()]})},nm=t(95940),np=t(2448),nv=t(97984),ng=t(98788),nZ=t(5163),nj=t(98813),nb=t(35378),nw=t(46178),nk=t(46098),ny=t(53274),nC=t(7964),nI=t(33419),nS=t(50222),nT=t(12241);function nL(){var n=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n"]);return nL=function(){return n},n}function nR(){var n=(0,i.Z)(["\n  background-color: ",";\n  border: solid 1px;\n  border-color: ",";\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n  opacity: ",";\n"]);return nR=function(){return n},n}function nE(){var n=(0,i.Z)(["\n  padding: 1rem 0;\n  height: 100%;\n  overflow: auto;\n"]);return nE=function(){return n},n}var nP=(0,f.ZP)(T.ZP).withConfig({componentId:"sc-b66bd3d6-0"})(nL()),nU=(0,f.ZP)(L.ZP).withConfig({componentId:"sc-b66bd3d6-1"})(nR(),function(n){var e=n.active,t=n.theme;return e?"".concat(t.colors.success19):"transparent"},function(n){var e=n.active,t=n.theme;return e?t.colors.success:t.colors.tertiary},function(n){return n.hasActiveTokens?1:.4}),nD=(0,c.memo)(function(n){var e,t,r=n.listUrl,o=(0,b.Z)().chainId,i=(0,m.$G)().t,l=(0,k.EF)(r),a=(0,nI.Dv)(k.Ti),u=(0,p.Z)((0,nS.n)(),2)[1],d=a[r],f=d.current,x=d.pendingUpdate,v=(0,c.useMemo)(function(){return f&&o?f.tokens.reduce(function(n,e){return e.chainId===o?n+1:n},0):0},[o,f]),g=(0,c.useCallback)(function(){x&&u((0,y.xJ)(r))},[u,r,x]),j=(0,c.useCallback)(function(){window.confirm("Please confirm you would like to remove this list")&&u((0,y.J_)(r))},[u,r]),w=(0,c.useCallback)(function(){u((0,y.ic)(r))},[u,r]),C=(0,c.useCallback)(function(){u((0,y.K$)(r))},[u,r]),I=(0,nj.Z)((0,s.jsxs)("div",{children:[(0,s.jsx)(Z.Z,{children:f&&(t=f.version,"v".concat(t.major,".").concat(t.minor,".").concat(t.patch))}),(0,s.jsx)(nb.Z,{external:!0,href:"https://tokenlists.org/token-list?url=".concat(r),children:i("See")}),(0,s.jsx)(h.Z,{variant:"danger",scale:"xs",onClick:j,disabled:1===Object.keys(a).length,children:i("Remove")}),x&&(0,s.jsx)(h.Z,{variant:"text",onClick:g,style:{fontSize:"12px"},children:i("Update list")})]}),{placement:"right-end",trigger:"click"}),S=I.targetRef,R=I.tooltip,E=I.tooltipVisible;return f?(0,s.jsxs)(nU,{active:l,hasActiveTokens:v>0,id:"list-row-".concat(r.replace(/\./g,"-")),children:[E&&R,f.logoURI?(0,s.jsx)(P._r,{size:"40px",style:{marginRight:"1rem"},logoURI:f.logoURI,alt:"".concat(f.name," list logo")}):(0,s.jsx)("div",{style:{width:"24px",height:"24px",marginRight:"1rem"}}),(0,s.jsxs)(T.ZP,{style:{flex:"1"},children:[(0,s.jsx)(L.ZP,{children:(0,s.jsx)(Z.Z,{bold:!0,children:f.name})}),(0,s.jsxs)(L.DA,{mt:"4px",children:[(0,s.jsxs)(Z.Z,{fontSize:"12px",mr:"6px",textTransform:"lowercase",children:[f.tokens.length," ",i("Tokens")]}),(0,s.jsx)("span",{ref:S,children:(0,s.jsx)(nw.Z,{color:"text",width:"12px"})})]})]}),(0,s.jsx)(nk.Z,{checked:l,onChange:function(){l?C():w()}})]},r):null}),nA=f.ZP.div.withConfig({componentId:"sc-b66bd3d6-2"})(nE()),nB=function(n){var e=n.setModalView,t=n.setImportList,r=n.setListUrl,o=(0,c.useState)(""),i=o[0],l=o[1],a=(0,m.$G)().t,u=(0,k.R0)(),d=(0,k.v0)(),f=(0,c.useState)(),x=f[0],p=f[1];(0,c.useEffect)(function(){!x&&d&&p(d)},[x,d]);var v=(0,c.useCallback)(function(n){l(n.target.value)},[]),g=(0,y.jn)(nS.l),b=(0,c.useMemo)(function(){return(0,nT.Z)(i).length>0},[i]),w=(0,c.useMemo)(function(){return Object.keys(u).filter(function(n){return Boolean(u[n].current)&&!nC.US.includes(n)}).sort(function(n,e){var t=u[n].current,r=u[e].current;if((null==x?void 0:x.includes(n))&&!(null==x?void 0:x.includes(e)))return -1;if(!(null==x?void 0:x.includes(n))&&(null==x?void 0:x.includes(e)))return 1;if(t&&r){var o="pancakeswap";return t.name.toLowerCase().includes(o)||r.name.toLowerCase().includes(o)?-1:t.name.toLowerCase()<r.name.toLowerCase()?-1:t.name.toLowerCase()===r.name.toLowerCase()?0:1}return t?-1:r?1:0})},[u,x]),C=(0,c.useState)(),I=C[0],S=C[1],R=(0,c.useState)(),E=R[0],D=R[1];(0,c.useEffect)(function(){function n(){return(n=(0,ng.Z)(function(){return(0,nZ.__generator)(this,function(n){return g(i,!1).then(function(n){return S(n)}).catch(function(){return D("Error importing list")}),[2]})})).apply(this,arguments)}b?function(){return n.apply(this,arguments)}():(S(void 0),""!==i&&D("Enter valid list location")),""===i&&D(void 0)},[g,i,b]);var A=Object.keys(u).includes(i),B=(0,c.useCallback)(function(){I&&(t(I),e(U.Hv.importList),r(i))},[i,t,r,e,I]);return(0,s.jsxs)(nP,{children:[(0,s.jsxs)(T.Tz,{gap:"14px",children:[(0,s.jsx)(L.ZP,{children:(0,s.jsx)(j.Z,{id:"list-add-input",scale:"lg",placeholder:a("https:// or ipfs://"),value:i,onChange:v})}),E?(0,s.jsx)(Z.Z,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:E}):null]}),I&&(0,s.jsx)(T.Tz,{style:{paddingTop:0},children:(0,s.jsx)(G.ZP,{padding:"12px 20px",children:(0,s.jsxs)(L.m0,{children:[(0,s.jsxs)(L.DA,{children:[I.logoURI&&(0,s.jsx)(P._r,{logoURI:I.logoURI,size:"40px"}),(0,s.jsxs)(T.Tz,{gap:"4px",style:{marginLeft:"20px"},children:[(0,s.jsx)(Z.Z,{bold:!0,children:I.name}),(0,s.jsxs)(Z.Z,{color:"textSubtle",small:!0,textTransform:"lowercase",children:[I.tokens.length," ",a("Tokens")]})]})]}),A?(0,s.jsxs)(L.DA,{children:[(0,s.jsx)(ny.Z,{width:"16px",mr:"10px"}),(0,s.jsx)(Z.Z,{children:a("Loaded")})]}):(0,s.jsx)(h.Z,{width:"fit-content",onClick:B,children:a("Import")})]})})}),(0,s.jsx)(nA,{children:(0,s.jsx)(T.Tz,{gap:"md",children:w.map(function(n){return(0,s.jsx)(nD,{listUrl:n},n)})})})]})},nM=t(73697),nz=t(93058),nH=t(54231),nN=t(18534);function n_(){var n=(0,i.Z)(["\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n"]);return n_=function(){return n},n}function nV(){var n=(0,i.Z)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return nV=function(){return n},n}var nG=f.ZP.div.withConfig({componentId:"sc-3eca3fc-0"})(n_()),nO=f.ZP.div.withConfig({componentId:"sc-3eca3fc-1"})(nV());function n$(n){var e=n.setModalView,t=n.setImportToken,r=(0,b.Z)().chainId,o=(0,m.$G)().t,i=(0,c.useState)(""),l=i[0],a=i[1],u=(0,c.useRef)(),d=(0,c.useCallback)(function(n){var e=n.target.value;a((0,I.UJ)(e)||e)},[]),f=(0,S.dQ)(l),x=(0,nN.Z)(),p=(0,C.QG)(),v=(0,c.useCallback)(function(){r&&x&&x.forEach(function(n){return p(r,n.address)})},[p,x,r]),g=(0,c.useMemo)(function(){return r&&x.map(function(n){return(0,s.jsxs)(L.m0,{width:"100%",children:[(0,s.jsxs)(L.DA,{children:[(0,s.jsx)(P.Xw,{currency:n,size:"20px"}),(0,s.jsx)(nM.Z,{external:!0,href:(0,I.C)(n.address,"address",r),color:"textSubtle",ml:"10px",children:n.symbol})]}),(0,s.jsxs)(L.DA,{children:[(0,s.jsx)(nz.Z,{variant:"text",onClick:function(){return p(r,n.address)},children:(0,s.jsx)(nH.Z,{})}),(0,s.jsx)(nb.Z,{href:(0,I.C)(n.address,"address",r)})]})]},n.address)})},[x,r,p]),w=""===l||(0,I.UJ)(l);return(0,s.jsx)(nG,{children:(0,s.jsxs)(T.ZP,{style:{width:"100%",flex:"1 1"},children:[(0,s.jsxs)(T.Tz,{gap:"14px",children:[(0,s.jsx)(L.ZP,{children:(0,s.jsx)(j.Z,{id:"token-search-input",scale:"lg",placeholder:"0x0000",value:l,autoComplete:"off",ref:u,onChange:d,isWarning:!w})}),!w&&(0,s.jsx)(Z.Z,{color:"failure",children:o("Enter valid token address")}),f&&(0,s.jsx)(ne,{token:f,showImportView:function(){return e(U.Hv.importToken)},setImportToken:t,style:{height:"fit-content"}})]}),g,(0,s.jsxs)(nO,{children:[(0,s.jsxs)(Z.Z,{bold:!0,color:"textSubtle",children:[null==x?void 0:x.length," ",o(1===x.length?"Custom Token":"Custom Tokens")]}),x.length>0&&(0,s.jsx)(h.Z,{variant:"tertiary",onClick:v,children:o("Clear all")})]})]})})}function nW(){var n=(0,i.Z)(["\n  width: 100%;\n"]);return nW=function(){return n},n}var nX=(0,f.ZP)(np.Z).withConfig({componentId:"sc-e2a99e21-0"})(nW());function nQ(n){var e=n.setModalView,t=n.setImportList,r=n.setImportToken,o=n.setListUrl,i=(0,c.useState)(!0),a=i[0],u=i[1],d=(0,m.$G)().t;return(0,s.jsxs)(l.fe,{children:[(0,s.jsxs)(nX,{activeIndex:a?0:1,onItemClick:function(){return u(function(n){return!n})},scale:"sm",variant:"subtle",mb:"32px",children:[(0,s.jsx)(nv.Z,{width:"50%",children:d("Lists")}),(0,s.jsx)(nv.Z,{width:"50%",children:d("Tokens")})]}),a?(0,s.jsx)(nB,{setModalView:e,setImportList:t,setListUrl:o}):(0,s.jsx)(n$,{setModalView:e,setImportToken:r})]})}var nY=t(76660),nq=t(76903),nJ=t(7887),nF=t(19081);function nK(){var n=(0,i.Z)(["\n  position: relative;\n  width: 100%;\n"]);return nK=function(){return n},n}function n0(){var n=(0,i.Z)(["\n  height: 3px;\n  width: 3px;\n  background-color: ",";\n  border-radius: 50%;\n"]);return n0=function(){return n},n}var n1=f.ZP.div.withConfig({componentId:"sc-73e63f60-0"})(nK()),n2=f.ZP.div.withConfig({componentId:"sc-73e63f60-1"})(n0(),function(n){return n.theme.colors.text}),n4=function(n){var e,t=n.listURL,r=n.list,o=n.onImport,i=(0,nF.ZP)().theme,l=(0,p.Z)((0,nS.n)(),2)[1],a=(0,m.$G)().t,u=(0,c.useState)(!1),d=u[0],f=u[1],x=(0,k.R0)(),v=(0,y.jn)(nS.l),g=Boolean(null===(e=x[t])||void 0===e?void 0:e.loadingRequestId),j=(0,c.useState)(null),b=j[0],w=j[1],C=(0,c.useCallback)(function(){g||(w(null),v(t).then(function(){l((0,y.ic)(t)),o()}).catch(function(n){w(n.message),l((0,y.J_)(t))}))},[g,l,v,t,o]);return(0,s.jsx)(n1,{children:(0,s.jsx)(T.Tz,{gap:"md",children:(0,s.jsxs)(T.Tz,{gap:"md",children:[(0,s.jsx)(G.ZP,{padding:"12px 20px",children:(0,s.jsx)(L.m0,{children:(0,s.jsxs)(L.DA,{children:[r.logoURI&&(0,s.jsx)(P._r,{logoURI:r.logoURI,size:"40px"}),(0,s.jsxs)(T.Tz,{gap:"sm",style:{marginLeft:"20px"},children:[(0,s.jsxs)(L.DA,{children:[(0,s.jsx)(Z.Z,{bold:!0,mr:"6px",children:r.name}),(0,s.jsx)(n2,{}),(0,s.jsxs)(Z.Z,{small:!0,color:"textSubtle",ml:"6px",children:[r.tokens.length," tokens"]})]}),(0,s.jsx)(nM.Z,{small:!0,external:!0,ellipsis:!0,maxWidth:"90%",href:"https://tokenlists.org/token-list?url=".concat(t),children:t})]})]})})}),(0,s.jsx)(nY.Z,{variant:"danger",children:(0,s.jsxs)(nq.Z,{flexDirection:"column",children:[(0,s.jsx)(Z.Z,{fontSize:"20px",textAlign:"center",color:i.colors.failure,mb:"16px",children:a("Import at your own risk")}),(0,s.jsx)(Z.Z,{color:i.colors.failure,mb:"8px",children:a("By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.")}),(0,s.jsx)(Z.Z,{bold:!0,color:i.colors.failure,mb:"16px",children:a("If you purchase a token from this list, you may not be able to sell it back.")}),(0,s.jsxs)(nq.Z,{alignItems:"center",children:[(0,s.jsx)(nJ.Z,{name:"confirmed",type:"checkbox",checked:d,onChange:function(){return f(!d)},scale:"sm"}),(0,s.jsx)(Z.Z,{ml:"10px",style:{userSelect:"none"},children:a("I understand")})]})]})}),(0,s.jsx)(h.Z,{disabled:!d,onClick:C,children:a("Import")}),b?(0,s.jsx)(Z.Z,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:b}):null]})})})};function n6(){var n=(0,i.Z)(["\n  width: 100%;\n  background-color: ",";\n  text-align: center;\n"]);return n6=function(){return n},n}function n3(){var n=(0,i.Z)(["\n  width: 100%;\n  min-width: 320px;\n  max-width: 420px !important;\n  min-height: calc(var(--vh, 1vh) * 90);\n  "," {\n    min-height: auto;\n  }\n"]);return n3=function(){return n},n}function n7(){var n=(0,i.Z)(["\n  padding: 24px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return n7=function(){return n},n}var n9=f.ZP.div.withConfig({componentId:"sc-15102242-0"})(n6(),function(n){return n.theme.colors.backgroundAlt}),n5=(0,f.ZP)(l.F0).withConfig({componentId:"sc-15102242-1"})(n3(),function(n){return n.theme.mediaQueries.md}),n8=(0,f.ZP)(l.fe).withConfig({componentId:"sc-15102242-2"})(n7());function en(n){var e,t=n.onDismiss,r=void 0===t?function(){return null}:t,i=n.onCurrencySelect,f=n.selectedCurrency,p=n.otherSelectedCurrency,v=n.showCommonBases,g=n.commonBasesType,Z=(0,c.useState)(U.Hv.search),j=Z[0],b=Z[1],w=(0,c.useCallback)(function(n){null==r||r(),i(n)},[r,i]),k=(0,x.zP)(j),y=(0,c.useState)(),C=y[0],I=y[1],S=(0,c.useState)(),T=S[0],L=S[1],R=(0,c.useState)(),E=R[0],P=R[1],D=(0,m.$G)().t,A=(e={},(0,o.Z)(e,U.Hv.search,{title:D("Select a Token"),onBack:void 0}),(0,o.Z)(e,U.Hv.manage,{title:D("Manage"),onBack:function(){return b(U.Hv.search)}}),(0,o.Z)(e,U.Hv.importToken,{title:D("Import Tokens"),onBack:function(){return b(k&&k!==U.Hv.importToken?k:U.Hv.search)}}),(0,o.Z)(e,U.Hv.importList,{title:D("Import List"),onBack:function(){return b(U.Hv.search)}}),e),B=(0,a.Z)().isMobile,M=(0,c.useRef)(null),z=(0,c.useState)(void 0),H=z[0],N=z[1];return(0,c.useEffect)(function(){M.current&&N(M.current.offsetHeight-330)},[]),(0,s.jsxs)(n5,{drag:!!B&&"y",dragConstraints:{top:0,bottom:600},dragElastic:{top:0},dragSnapToOrigin:!0,onDragStart:function(){M.current&&(M.current.style.animation="none")},onDragEnd:function(n,e){e.velocity.y>u.dl&&r&&r()},ref:M,children:[(0,s.jsxs)(l.xB,{children:[(0,s.jsxs)(l.r6,{children:[A[j].onBack&&(0,s.jsx)(l.vy,{onBack:A[j].onBack}),(0,s.jsx)(d.Z,{children:A[j].title})]}),(0,s.jsx)(l.ol,{onDismiss:r})]}),(0,s.jsxs)(n8,{children:[j===U.Hv.search?(0,s.jsx)(nx,{onCurrencySelect:w,selectedCurrency:f,otherSelectedCurrency:p,showCommonBases:void 0===v||v,commonBasesType:g,showImportView:function(){return b(U.Hv.importToken)},setImportToken:I,height:H}):j===U.Hv.importToken&&C?(0,s.jsx)(nm.Z,{tokens:[C],handleCurrencySelect:w}):j===U.Hv.importList&&T&&E?(0,s.jsx)(n4,{list:T,listURL:E,onImport:function(){return b(U.Hv.manage)}}):j===U.Hv.manage?(0,s.jsx)(nQ,{setModalView:b,setImportToken:I,setImportList:L,setListUrl:P}):"",j===U.Hv.search&&(0,s.jsx)(n9,{children:(0,s.jsx)(h.Z,{scale:"sm",variant:"text",onClick:function(){return b(U.Hv.manage)},className:"list-token-manage-button",children:D("Manage Tokens")})})]})]})}},95940:function(n,e,t){var r=t(52322),o=t(2784),i=t(90902),s=t(76660),c=t(89495),l=t(5917),a=t(57432),u=t(33441),d=t(76903),h=t(73697),f=t(7887),x=t(48608),m=t(77253),p=t(72135),v=t(5305),g=t(34766),Z=t(65342),j=t(7083),b=t(91790),w=t(65957),k=t(47945);e.Z=function(n){var e,t,y=n.tokens,C=n.handleCurrencySelect,I=(0,Z.Z)().chainId,S=(0,w.$G)().t,T=(0,o.useState)(!1),L=T[0],R=T[1],E=(0,p._E)(),P=(0,j.qB)();return(0,r.jsxs)(m.Tz,{gap:"lg",children:[(0,r.jsx)(s.Z,{variant:"warning",children:(0,r.jsxs)(c.Z,{children:[S("Anyone can create a %standard% token on %network% with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.",{standard:I!==i.a_.BSC&&I!==i.a_.BSC_TESTNET?"ERC20":"BEP20",network:null===(e=k.p5.find(function(n){return n.id===I}))||void 0===e?void 0:e.name}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),S("If you purchase an arbitrary token, you may be unable to sell it back.")]})}),y.map(function(n){var e,t,o=I&&(null==P?void 0:null===(e=P[I])||void 0===e?void 0:null===(t=e[n.address])||void 0===t?void 0:t.list),i=n.address?"".concat((0,g.Z)(n.address)):null;return(0,r.jsxs)(l.Z,{gridTemplateRows:"1fr 1fr 1fr",gridGap:"4px",children:[void 0!==o?(0,r.jsxs)(a.Z,{variant:"success",outline:!0,scale:"sm",startIcon:o.logoURI&&(0,r.jsx)(b._r,{logoURI:o.logoURI,size:"12px"}),children:[S("via")," ",o.name]}):(0,r.jsx)(a.Z,{variant:"failure",outline:!0,scale:"sm",startIcon:(0,r.jsx)(u.Z,{color:"failure"}),children:S("Unknown Source")}),(0,r.jsxs)(d.Z,{alignItems:"center",children:[(0,r.jsx)(c.Z,{mr:"8px",children:n.name}),(0,r.jsxs)(c.Z,{children:["(",n.symbol,")"]})]}),I&&(0,r.jsxs)(d.Z,{justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(c.Z,{mr:"4px",children:i}),(0,r.jsxs)(h.Z,{href:(0,v.C)(n.address,"address",I),external:!0,children:["(",S("View on %site%",{site:(0,v.X0)(I)}),")"]})]})]},n.address)}),(0,r.jsxs)(d.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,r.jsxs)(d.Z,{alignItems:"center",onClick:function(){return R(!L)},children:[(0,r.jsx)(f.Z,{scale:"sm",name:"confirmed",type:"checkbox",checked:L,onChange:function(){return R(!L)}}),(0,r.jsx)(c.Z,{ml:"8px",style:{userSelect:"none"},children:S("I understand")})]}),(0,r.jsx)(x.Z,{variant:"danger",disabled:!L,onClick:function(){y.forEach(function(n){return E(n)}),C&&C(y[0])},className:".token-dismiss-button",children:S("Import")})]})]})}},34188:function(n,e,t){var r,o,i,s;t.d(e,{Hv:function(){return i},L0:function(){return s}}),(r=i||(i={}))[r.search=0]="search",r[r.manage=1]="manage",r[r.importToken=2]="importToken",r[r.importList=3]="importList",(o=s||(s={})).LIQUIDITY="LIQUIDITY",o.SWAP_LIMITORDER="SWAP_LIMITORDER"},57432:function(n,e,t){t.d(e,{Z:function(){return w}});var r,o,i=t(70865),s=t(96670),c=t(26297),l=t(52322),a=t(2784),u={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",TEXTDISABLED:"textDisabled",TEXTSUBTLE:"textSubtle",BINANCE:"binance",FAILURE:"failure",WARNING:"warning"},d={MD:"md",SM:"sm"},h=t(92228),f=t(3411),x=t(78545),m=t(47842),p=(r={},(0,m.Z)(r,d.MD,{height:"28px",padding:"0 8px",fontSize:"14px"}),(0,m.Z)(r,d.SM,{height:"24px",padding:"0 4px",fontSize:"12px"}),r),v=(o={},(0,m.Z)(o,u.PRIMARY,{backgroundColor:"primary"}),(0,m.Z)(o,u.SECONDARY,{backgroundColor:"secondary"}),(0,m.Z)(o,u.SUCCESS,{backgroundColor:"success"}),(0,m.Z)(o,u.TEXTDISABLED,{backgroundColor:"textDisabled"}),(0,m.Z)(o,u.TEXTSUBTLE,{backgroundColor:"textSubtle"}),(0,m.Z)(o,u.BINANCE,{backgroundColor:"binance"}),(0,m.Z)(o,u.FAILURE,{backgroundColor:"failure"}),(0,m.Z)(o,u.WARNING,{backgroundColor:"warning"}),o);function g(){var n=(0,h.Z)(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n\n  ","\n"]);return g=function(){return n},n}var Z=function(n){var e=n.outline,t=n.theme,r=n.variant,o=void 0===r?u.PRIMARY:r;if(e){var i=v[o].backgroundColor,s=t.colors[i];return"\n      color: ".concat(s,";\n      background: ").concat(t.colors.background,";\n      border: 2px solid ").concat(s,";\n    ")}return""},j=f.ZP.div.withConfig({componentId:"sc-26d88be7-0"})(g(),function(n){var e=n.textTransform;return e&&"text-transform: ".concat(e,";")},(0,x.bU)({prop:"scale",variants:p}),(0,x.bU)({variants:v}),x.Dh,x.cp,Z),b=function(n){var e=n.startIcon,t=n.endIcon,r=n.children,o=(0,c.Z)(n,["startIcon","endIcon","children"]);return(0,l.jsxs)(j,(0,s.Z)((0,i.Z)({},o),{children:[a.isValidElement(e)&&a.cloneElement(e,{mr:"0.5em"}),r,a.isValidElement(t)&&a.cloneElement(t,{ml:"0.5em"})]}))};b.defaultProps={variant:"primary",scale:d.MD,outline:!1};var w=b}}]);
//# sourceMappingURL=9051-c712aa575151a914.js.map