(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4976],{96795:function(n,e,t){var i=t(36740)(function(n,e,t){n[t?0:1].push(e)},function(){return[[],[]]});n.exports=i},74470:function(n,e,t){"use strict";var i=t(92228),o=t(52322),r=t(2784),a=t(3411),s=t(93058),l=t(23766),c=t(3549),u=t(15444);function d(){var n=(0,i.Z)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"]);return d=function(){return n},n}var x=a.ZP.div.withConfig({componentId:"sc-ad63ee3f-0"})(d(),function(n){return n.theme.mediaQueries.sm}),p=function(n){var e=n.idPrefix,t=n.viewMode,i=n.onToggle,a=(0,r.useCallback)(function(){t!==u.wO.CARD&&i(u.wO.CARD)},[i,t]),d=(0,r.useCallback)(function(){t!==u.wO.TABLE&&i(u.wO.TABLE)},[i,t]);return(0,o.jsxs)(x,{children:[(0,o.jsx)(s.Z,{variant:"text",scale:"sm",id:"".concat(e,"CardView"),onClick:a,children:(0,o.jsx)(l.Z,{color:t===u.wO.CARD?"primary":"textDisabled"})}),(0,o.jsx)(s.Z,{variant:"text",scale:"sm",id:"".concat(e,"TableView"),onClick:d,children:(0,o.jsx)(c.Z,{color:t===u.wO.TABLE?"primary":"textDisabled"})})]})};e.Z=p},52908:function(n,e,t){"use strict";var i=t(87394),o=t(21147),r=t(2784),a=function(){var n=(0,r.useState)(null),e=n[0],t=n[1],a=(0,r.useRef)(null),s=(0,r.useState)(!1),l=s[0],c=s[1];return(0,o.Y)(function(){if(window.IntersectionObserver){if(!a.current&&e){var n=function(n){c((0,i.Z)(n,1)[0].isIntersecting)};a.current=new window.IntersectionObserver(n,{rootMargin:"0px",threshold:1}),a.current.observe(e)}a.current&&!e&&(a.current.disconnect(),c(!1))}else c(!0);return function(){a.current&&a.current.disconnect()}},[e]),{observerRef:t,isIntersecting:l}};e.Z=a},93508:function(n,e,t){"use strict";t.d(e,{b:function(){return o}});var i={latin_map:{τ:"t",Τ:"T"}},o=function(n){return n.replace(/[^A-Za-z0-9[\] ]/g,function(n){return i.latin_map[n]||n})}},44976:function(n,e,t){"use strict";t.d(e,{Z:function(){return eS}});var i=t(87394),o=t(92228),r=t(52322),a=t(2784),s=t(28316),l=t(3411),c=t(10528),u=t(59656),d=t(6391),x=t.n(d),p=t(9270),f=t(28543),h=t(89495),m=t(76903),g=t(73697),Z=t(45349),j=t(48497),v=t(3433),b=t(35890),k=t(8549),w=t(96469),y=t(79569),S=t(34498),C=t.n(S),P=t(96795),T=t.n(P),I=t(65957),D=t(52908),B=t(99225),A=t(93508),z=t(98757),F=t(93638),L=t(72135),R=t(15444),K=t(5632),E=t(26488),M=t(7599),N=t(12752),O=t(74009),W=t(95134),X=t(39480),G=t(81834),V=t(46684),$=t(98813),U=t(83931),H=t(97421),Y=function(n){var e=n.pool,t=n.stakedBalance,i=n.performanceFee,o=n.showIcon,a=(0,I.$G)().t,s=e.vaultKey,l=a(s?"APY includes compounding, APR doesn’t. This pool’s CAKE is compounded automatically, so we show APY.":"This pool’s rewards aren’t compounded automatically, so we show APR"),c=(0,$.Z)(l,{placement:"bottom-start"}),u=c.targetRef,d=c.tooltip,x=c.tooltipVisible;return(0,r.jsxs)(m.Z,{alignItems:"center",justifyContent:"space-between",children:[x&&d,(0,r.jsx)(U.Z,{ref:u,children:s?"".concat(a("APY"),":"):"".concat(a("APR"),":")}),(0,r.jsx)(H.Z,{pool:e,stakedBalance:t,performanceFee:void 0===i?0:i,showIcon:void 0===o||o})]})},J=t(43912),Q=t(45249),_=t(36728),q=t(13670),nn=t(6429),ne=t(7818),nt=t(48608),ni=t(73685),no=t(76269),nr=t(33431),na=function(n){var e=n.pool,t=n.isLoading,i=e.sousId,o=e.stakingToken,a=e.earningToken,s=(0,I.$G)().t,l=(0,no.X_)(o.address||""),c=(0,nr.iB)(l,i,a.symbol),u=c.handleApprove,d=c.pendingTx;return(0,r.jsx)(r.Fragment,{children:void 0!==t&&t?(0,r.jsx)(O.Z,{width:"100%",height:"52px"}):(0,r.jsx)(nt.Z,{isLoading:d,endIcon:d?(0,r.jsx)(ni.Z,{spin:!0,color:"currentColor"}):null,disabled:d,onClick:u,width:"100%",children:s("Enable")})})},ns=t(11298),nl=t(64343),nc=t(93058),nu=t(99269),nd=t(29420),nx=t(18426),np=t(69688),nf=t(32610),nh=function(n){var e=n.pool,t=n.stakingTokenBalance,o=n.stakedBalance,a=n.isBnbPool,s=n.isStaked,l=n.isLoading,c=e.stakingToken,u=e.stakingTokenPrice,d=e.stakingLimit,x=e.isFinished,p=e.userData,f=(0,I.$G)().t,g=(0,nx.mW)(o,c.decimals),Z=(0,nx.mW)(o.multipliedBy(u),c.decimals),j=(0,i.Z)((0,ns.Z)((0,r.jsx)(np.Z,{tokenSymbol:c.symbol})),1)[0],v=(0,i.Z)((0,ns.Z)((0,r.jsx)(nf.Z,{isBnbPool:a,pool:e,stakingTokenBalance:t,stakingTokenPrice:u})),1)[0],b=(0,i.Z)((0,ns.Z)((0,r.jsx)(nf.Z,{stakingTokenBalance:t,isBnbPool:a,pool:e,stakingTokenPrice:u,isRemovingStake:!0})),1)[0],k=(0,$.Z)(f("You’ve already staked the maximum amount you can stake in this pool!"),{placement:"bottom"}),w=k.targetRef,y=k.tooltip,S=k.tooltipVisible,C=d.gt(0)&&p.stakedBalance.gte(d);return(0,r.jsx)(m.Z,{flexDirection:"column",children:void 0!==l&&l?(0,r.jsx)(O.Z,{width:"100%",height:"52px"}):s?(0,r.jsxs)(m.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(m.Z,{flexDirection:"column",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nl.Z,{bold:!0,fontSize:"20px",decimals:3,value:g}),0!==u&&(0,r.jsx)(h.Z,{fontSize:"12px",color:"textSubtle",children:(0,r.jsx)(nl.Z,{fontSize:"12px",color:"textSubtle",decimals:2,value:Z,prefix:"~",unit:" USD"})})]})}),(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(nc.Z,{variant:"secondary",onClick:b,mr:"6px",children:(0,r.jsx)(nu.Z,{color:"primary",width:"24px"})}),C?(0,r.jsx)("span",{ref:w,children:(0,r.jsx)(nc.Z,{variant:"secondary",disabled:!0,children:(0,r.jsx)(nd.Z,{color:"textDisabled",width:"24px",height:"24px"})})}):(0,r.jsx)(nc.Z,{variant:"secondary",onClick:t.gt(0)?v:j,disabled:x,children:(0,r.jsx)(nd.Z,{color:"primary",width:"24px",height:"24px"})})]}),S&&y]}):(0,r.jsx)(nt.Z,{disabled:x,onClick:t.gt(0)?v:j,children:f("Stake")})})},nm=t(42279),ng=function(n){var e=n.earnings,t=n.earningToken,o=n.sousId,a=n.isBnbPool,s=n.earningTokenPrice,l=n.isLoading,c=(0,I.$G)().t,u=(0,nx.mW)(e,t.decimals),d=(0,nx.uf)(u,3,3),x=(0,nx.mW)(e.multipliedBy(s),t.decimals),p=(0,nx.NJ)(e,t.decimals),f=e.toNumber()>0,g=(0,i.Z)((0,ns.Z)((0,r.jsx)(nm.Z,{formattedBalance:d,fullBalance:p,earningToken:t,earningsDollarValue:x,sousId:o,isBnbPool:a})),1)[0];return(0,r.jsxs)(m.Z,{justifyContent:"space-between",alignItems:"center",mb:"16px",children:[(0,r.jsx)(m.Z,{flexDirection:"column",children:void 0!==l&&l?(0,r.jsx)(O.Z,{width:"80px",height:"48px"}):(0,r.jsx)(r.Fragment,{children:f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nl.Z,{bold:!0,fontSize:"20px",decimals:5,value:u}),s>0&&(0,r.jsx)(nl.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:x,unit:" USD"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{color:"textDisabled",children:"0"}),(0,r.jsx)(h.Z,{fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})}),(0,r.jsx)(nt.Z,{disabled:!f,onClick:g,children:c("Harvest")})]})},nZ=t(28425);function nj(){var n=(0,o.Z)(["\n  display: inline;\n"]);return nj=function(){return n},n}var nv=(0,l.ZP)(h.Z).withConfig({componentId:"sc-93bade5c-0"})(nj()),nb=function(n){var e=n.pool,t=n.stakedBalance,i=e.sousId,o=e.stakingToken,a=e.earningToken,s=e.poolCategory,l=e.userData,c=e.earningTokenPrice,u=e.profileRequirement,d=s===nn.jh.BINANCE,p=(0,I.$G)().t,f=(null==l?void 0:l.allowance)?new(x())(l.allowance):G.HW,h=(null==l?void 0:l.stakingTokenBalance)?new(x())(l.stakingTokenBalance):G.HW,g=(null==l?void 0:l.pendingReward)?new(x())(l.pendingReward):G.HW,Z=!f.gt(0)&&!d,j=t.gt(0),v=!l,b=(0,ne.f)(u),k=b.notMeetRequired,w=b.notMeetThreshold;return(0,r.jsx)(m.Z,{flexDirection:"column",children:(0,r.jsxs)(m.Z,{flexDirection:"column",children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(q.Z,{display:"inline",children:[(0,r.jsx)(nv,{color:"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:"".concat(a.symbol," ")}),(0,r.jsx)(nv,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:p("Earned")})]}),(0,r.jsx)(ng,{earnings:g,earningToken:a,sousId:i,earningTokenPrice:c,isBnbPool:d,isLoading:v})]}),(0,r.jsxs)(q.Z,{display:"inline",children:[(0,r.jsxs)(nv,{color:j?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[j?o.symbol:p("Stake")," "]}),(0,r.jsx)(nv,{color:j?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:j?p("Staked"):"".concat(o.symbol)})]}),k||w?(0,r.jsx)(nZ.Q,{profileRequirement:u}):Z?(0,r.jsx)(na,{pool:e,isLoading:v}):(0,r.jsx)(nh,{isLoading:v,pool:e,stakingTokenBalance:h,stakedBalance:t,isBnbPool:d,isStaked:j})]})})},nk=function(n){var e=n.pool,t=n.account,i=e.sousId,o=e.stakingToken,a=e.earningToken,s=e.isFinished,l=e.userData,c=e.totalStaked,u=(0,I.$G)().t,d=(null==l?void 0:l.stakedBalance)?new(x())(l.stakedBalance):G.HW,p=d.gt(0),f="CAKE"===a.symbol&&"CAKE"===o.symbol;return(0,r.jsxs)(J.r,{isFinished:s&&0!==i,ribbon:s&&(0,r.jsx)(N.Z,{variantColor:"textDisabled",text:u("Finished")}),children:[(0,r.jsx)(_.Z,{isStaking:p,isFinished:s&&0!==i,children:c&&c.gte(0)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.e,{title:f?u("Manual"):u("Earn %asset%",{asset:a.symbol}),subTitle:f?u("Earn CAKE, stake CAKE"):u("Stake %symbol%",{symbol:o.symbol})}),(0,r.jsx)(V.q,{primaryToken:a,secondaryToken:o,width:64,height:64})]}):(0,r.jsxs)(m.Z,{width:"100%",justifyContent:"space-between",children:[(0,r.jsxs)(m.Z,{flexDirection:"column",children:[(0,r.jsx)(O.Z,{width:100,height:26,mb:"4px"}),(0,r.jsx)(O.Z,{width:65,height:20})]}),(0,r.jsx)(O.Z,{width:58,height:58,variant:"circle"})]})}),(0,r.jsxs)(W.Z,{children:[(0,r.jsx)(Y,{pool:e,stakedBalance:d}),(0,r.jsx)(m.Z,{mt:"24px",flexDirection:"column",children:t?(0,r.jsx)(nb,{pool:e,stakedBalance:d}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:u("Start earning")}),(0,r.jsx)(X.Z,{})]})})]}),(0,r.jsx)(Q.Z,{pool:e,account:t})]})},nw=t(5312),ny=t(74470),nS=t(2448),nC=t(97984),nP=t(47265),nT=t(49714),nI=t(46098);function nD(){var n=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return nD=function(){return n},n}function nB(){var n=(0,o.Z)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"]);return nB=function(){return n},n}function nA(){var n=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"]);return nA=function(){return n},n}var nz=l.ZP.div.withConfig({componentId:"sc-ca4d4ac7-0"})(nD(),h.Z),nF=l.ZP.div.withConfig({componentId:"sc-ca4d4ac7-1"})(nB(),function(n){return n.theme.mediaQueries.sm}),nL=l.ZP.div.withConfig({componentId:"sc-ca4d4ac7-2"})(nA(),function(n){return n.theme.mediaQueries.sm}),nR=function(n){var e=n.stakedOnly,t=n.setStakedOnly,i=n.hasStakeInFinishedPools,o=n.viewMode,a=n.setViewMode,s=(0,K.useRouter)(),l=(0,I.$G)().t,c="/pools"===s.pathname||"/_mp/pools"===s.pathname,u=(0,r.jsx)(ny.Z,{idPrefix:"clickPool",viewMode:o,onToggle:a}),d=(0,r.jsx)(nL,{children:(0,r.jsxs)(nS.Z,{activeIndex:c?0:1,scale:"sm",variant:"subtle",children:[(0,r.jsx)(nC.Z,{as:nP.Z,to:"/pools",replace:!0,children:l("Live")}),(0,r.jsx)(nT.Z,{show:i,children:(0,r.jsx)(nC.Z,{id:"finished-pools-button",as:nP.Z,to:"/pools/history",replace:!0,children:l("Finished")})})]})}),x=(0,r.jsxs)(nz,{children:[(0,r.jsx)(nI.Z,{checked:e,onChange:function(){return t(!e)},scale:"sm"}),(0,r.jsxs)(h.Z,{children:[" ",l("Staked only")]})]});return(0,r.jsxs)(nF,{children:[u,x,d]})},nK=t(62392),nE=t(5251),nM=t(39708);function nN(){var n=(0,o.Z)(["\n  flex: 4.5;\n  "," {\n    flex: 1 0 120px;\n  }\n"]);return nN=function(){return n},n}var nO=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-902eea7d-0"})(nN(),function(n){return n.theme.mediaQueries.sm}),nW=function(n){var e=n.pool,t=n.account,o=(0,I.$G)().t,a=(0,nK.Z)().isMobile,s=e.sousId,l=e.earningToken,c=e.poolCategory,u=e.userData,d=e.earningTokenPrice,p=(null==u?void 0:u.pendingReward)?new(x())(u.pendingReward):G.HW,f=(0,nx.mW)(p,l.decimals),g=(0,nx.mW)(p.multipliedBy(d),l.decimals),Z=t&&p.gt(0),j=(0,nx.NJ)(p,l.decimals),v=(0,nx.uf)(f,3,3),b=c===nn.jh.BINANCE,k=o("%asset% Earned",{asset:l.symbol}),w=(0,i.Z)((0,ns.Z)((0,r.jsx)(nm.Z,{formattedBalance:v,fullBalance:j,earningToken:l,earningsDollarValue:g,sousId:s,isBnbPool:b})),1)[0],y=function(n){n.stopPropagation(),w()};return(0,r.jsx)(nO,{role:"cell",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(h.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:k}),!e.userDataLoaded&&t?(0,r.jsx)(O.Z,{width:"80px",height:"16px"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{children:(0,r.jsxs)(q.Z,{mr:"8px",height:"32px",onClick:Z?y:void 0,children:[(0,r.jsx)(nl.Z,{mt:"4px",bold:!a,fontSize:a?"14px":"16px",color:Z?"primary":"textDisabled",decimals:Z?5:1,value:Z?f:0}),Z?(0,r.jsx)(r.Fragment,{children:d>0&&(0,r.jsx)(nl.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:g,unit:" USD"})}):(0,r.jsx)(h.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},nX=t(51110);function nG(){var n=(0,o.Z)(["\n  flex: 2 0 100px;\n"]);return nG=function(){return n},n}var nV=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-375678ec-0"})(nG()),n$=function(n){var e=n.pool,t=(0,I.$G)().t,i=e.stakingToken,o=e.totalStaked,s=e.vaultKey,l=(0,B.eB)(s).totalCakeInVault,c=(0,a.useMemo)(function(){return s?(0,nx.mW)(l,i.decimals):(0,nx.mW)(o,i.decimals)},[s,l,o,i.decimals]);return(0,r.jsx)(nV,{role:"cell",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(h.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:t("Total staked")}),o&&o.gte(0)?(0,r.jsx)(m.Z,{height:"20px",alignItems:"center",children:(0,r.jsx)(nl.Z,{fontSize:"16px",value:c,decimals:0,unit:" ".concat(i.symbol)})}):(0,r.jsx)(O.Z,{width:"80px",height:"16px"})]})})},nU=t(70581),nH=t(5305),nY=t(9681);function nJ(){var n=(0,o.Z)(["\n  flex: 2 0 100px;\n"]);return nJ=function(){return n},n}var nQ=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-48e2b69d-0"})(nJ()),n_=function(n){var e=n.pool,t=e.sousId,i=e.totalStaked,o=e.startBlock,a=e.endBlock,s=e.isFinished,l=(0,E.je)(),c=(0,I.$G)().t,u=(0,nY.zy)(e,l),d=u.shouldShowBlockCountdown,x=u.blocksUntilStart,p=u.blocksRemaining,f=u.hasPoolStarted,Z=u.blocksToDisplay,j=d?(0,r.jsxs)(m.Z,{alignItems:"center",children:[(0,r.jsxs)(m.Z,{flex:"1.3",children:[(0,r.jsx)(nl.Z,{fontSize:"16px",value:Z,decimals:0}),(0,r.jsx)(h.Z,{ml:"4px",textTransform:"lowercase",children:c("Blocks")})]}),(0,r.jsx)(m.Z,{flex:"1",children:(0,r.jsx)(g.Z,{external:!0,href:(0,nH.C)(f?a:o,"countdown"),onClick:function(n){return n.stopPropagation()},children:(0,r.jsx)(nU.Z,{ml:"4px"})})})]}):(0,r.jsx)(h.Z,{children:"-"}),v=f&&!i.gt(0)||!l||!p&&!x;return(0,r.jsx)(nQ,{role:"cell",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(h.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:c(f||!d?"Ends in":"Starts in")}),v&&0!==t&&!s?(0,r.jsx)(O.Z,{width:"80px",height:"16px"}):j]})})},nq=t(1108),n0=t(42863),n1=t(14085);function n2(){var n=(0,o.Z)([""]);return n2=function(){return n},n}var n4=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-ff85cccd-0"})(n2()),n9=function(n){var e=n.pool,t=n.account,i=(0,I.$G)().t,o=(0,nK.Z)().isMobile,a=(0,B.eB)(e.vaultKey),s=a.userData,l=s.userShares,c=s.balance,u=c.cakeAsBigNumber,d=c.cakeAsNumberBalance,p=s.isLoading,f=l.gt(0),g=e.vaultKey&&f,Z=e.stakingTokenPrice,j=e.stakingToken,v=e.userData,b=(0,nx.mW)(u.multipliedBy(Z),j.decimals),k=(null==v?void 0:v.stakedBalance)?new(x())(v.stakedBalance):G.HW,w=(0,nx.mW)(k,j.decimals),y=(0,nx.mW)(k.multipliedBy(Z),j.decimals),S="".concat(e.stakingToken.symbol," ").concat(i(e.vaultKey===F.om.CakeVault&&a.userData.locked?"Locked":"Staked")),C=t&&(k.gt(0)||g),P=e.vaultKey?p:!e.userDataLoaded;return(0,r.jsx)(n4,{role:"cell",flex:e.vaultKey===F.om.CakeFlexibleSideVault?"1 0 162px":e.vaultKey!==F.om.CakeVault||C?"2 0 100px":"1 0 120px",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(h.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:S}),P&&t?(0,r.jsx)(O.Z,{width:"80px",height:"16px"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{children:(0,r.jsxs)(q.Z,{mr:"8px",height:"32px",children:[(0,r.jsx)(nl.Z,{mt:"4px",bold:!o,fontSize:o?"14px":"16px",color:C?"primary":"textDisabled",decimals:C?5:1,value:C?e.vaultKey?Number.isNaN(d)?0:d:w:0}),C?(0,r.jsx)(nl.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:e.vaultKey?b:y,unit:" USD"}):(0,r.jsx)(h.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},n6=t(99381),n8=t(27594);function n3(){var n=(0,o.Z)(["\n  background-color: transparent;\n  display: flex;\n  cursor: pointer;\n"]);return n3=function(){return n},n}var n5=l.ZP.div.withConfig({componentId:"sc-dd7146e0-0"})(n3()),n7=function(n){var e=n.children,t=n.panel,i=n.initialActivity,o=(0,a.useRef)(!1),s=(0,nK.Z)(),l=s.isTablet,c=s.isDesktop,u=(0,a.useState)(i),d=u[0],x=u[1],p=(0,n6.Z)(d,300),f=(0,a.useCallback)(function(){x(function(n){return!n})},[]);return(0,a.useEffect)(function(){i&&!1===o.current&&(x(i),o.current=!0)},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n5,{role:"row",onClick:f,children:[e,(0,r.jsx)(n8.Z,{expanded:d,isFullLayout:l||c})]}),p&&t]})},en=(0,a.memo)(n7),ee=(0,a.memo)(function(n){var e=n.vaultKey,t=n.account,i=n.initialActivity,o=(0,nK.Z)(),a=o.isXs,s=o.isSm,l=o.isMd,c=o.isLg,u=o.isXl,d=o.isXxl,x=u||d,p=(0,B.YX)(e);return(0,r.jsxs)(en,{initialActivity:i,panel:(0,r.jsx)(nq.Z,{account:t,pool:p,expanded:!0,breakpoints:{isXs:a,isSm:s,isMd:l,isLg:c,isXl:u,isXxl:d}}),children:[(0,r.jsx)(nE.Z,{pool:p}),x&&(0,r.jsx)(n0.Z,{pool:p,account:t}),x?(0,r.jsx)(n9,{pool:p,account:t}):null,(0,r.jsx)(n1.Z,{pool:p}),(c||u||d)&&(0,r.jsx)(n$,{pool:p})]})}),et=function(n){var e=n.sousId,t=n.account,i=n.initialActivity,o=(0,nK.Z)(),a=o.isXs,s=o.isSm,l=o.isMd,c=o.isLg,u=o.isXl,d=o.isXxl,x=o.isDesktop,p=(0,B.AI)(e).pool;return(0,r.jsxs)(en,{initialActivity:i,panel:(0,r.jsx)(nq.Z,{account:t,pool:p,expanded:!0,breakpoints:{isXs:a,isSm:s,isMd:l,isLg:c,isXl:u,isXxl:d}}),children:[(0,r.jsx)(nE.Z,{pool:p}),(0,r.jsx)(nW,{pool:p,account:t}),(c||u||d)&&(0,r.jsx)(n$,{pool:p}),(0,r.jsx)(nX.Z,{pool:p}),x&&(0,r.jsx)(n_,{pool:p})]})},ei=(0,a.memo)(et);function eo(){var n=(0,o.Z)(["\n  border-radius: ",";\n  scroll-margin-top: 64px;\n\n  background-color: ",";\n  > div:not(:last-child) {\n    border-bottom: 2px solid ",";\n  }\n"]);return eo=function(){return n},n}function er(){var n=(0,o.Z)(["\n  border-radius: ",";\n  background-color: ",";\n  padding: 1px 1px 3px 1px;\n  background-size: 400% 400%;\n"]);return er=function(){return n},n}var ea=l.ZP.div.withConfig({componentId:"sc-a3ab40d2-0"})(eo(),function(n){return n.theme.radii.card},function(n){return n.theme.card.background},function(n){return n.theme.colors.disabled}),es=l.ZP.div.withConfig({componentId:"sc-a3ab40d2-1"})(er(),function(n){return n.theme.radii.card},function(n){return n.theme.colors.cardBorder}),el=function(n){var e=n.pools,t=n.account,i=n.urlSearch,o=(0,a.useRef)(null);return(0,r.jsx)(es,{children:(0,r.jsx)(ea,{id:"pools-table",role:"table",ref:o,children:e.map(function(n){var e,o;return n.vaultKey?(0,r.jsx)(ee,{initialActivity:i.toLowerCase()===(null===(e=n.earningToken.symbol)||void 0===e?void 0:e.toLowerCase()),vaultKey:n.vaultKey,account:t},n.vaultKey):(0,r.jsx)(ei,{initialActivity:i.toLowerCase()===(null===(o=n.earningToken.symbol)||void 0===o?void 0:o.toLowerCase()),sousId:n.sousId,account:t},n.sousId)})})})};function ec(){var n=(0,o.Z)(["\n  justify-content: center;\n"]);return ec=function(){return n},n}function eu(){var n=(0,o.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"]);return eu=function(){return n},n}function ed(){var n=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"]);return ed=function(){return n},n}function ex(){var n=(0,o.Z)(["\n  > "," {\n    font-size: 12px;\n  }\n"]);return ex=function(){return n},n}function ep(){var n=(0,o.Z)(["\n  > div {\n    flex: 1;\n  }\n"]);return ep=function(){return n},n}function ef(){var n=(0,o.Z)(["\n  padding-bottom: 32px;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return ef=function(){return n},n}function eh(){var n=(0,o.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  text-decoration: underline;\n"]);return eh=function(){return n},n}var em=(0,l.ZP)(f.Z).withConfig({componentId:"sc-2906d9ef-0"})(ec()),eg=l.ZP.div.withConfig({componentId:"sc-2906d9ef-1"})(eu(),function(n){return n.theme.mediaQueries.sm}),eZ=l.ZP.div.withConfig({componentId:"sc-2906d9ef-2"})(ed(),function(n){return n.theme.mediaQueries.sm}),ej=l.ZP.div.withConfig({componentId:"sc-2906d9ef-3"})(ex(),h.Z),ev=(0,l.ZP)(m.Z).withConfig({componentId:"sc-2906d9ef-4"})(ep()),eb=(0,l.ZP)(m.Z).withConfig({componentId:"sc-2906d9ef-5"})(ef(),function(n){return n.theme.mediaQueries.md}),ek=(0,l.ZP)(g.Z).withConfig({componentId:"sc-2906d9ef-6"})(eh()),ew=function(n,e,t,i){switch(e){case"apr":return C()(i,function(n){return n.apr?n.apr:0},"desc");case"earned":return C()(i,function(e){if(!e.userData||!e.earningTokenPrice)return 0;if(e.vaultKey){var t=e.userData,i=e.pricePerFullShare;return t&&t.userShares?(0,nY.UN)(n,t.cakeAtLastUserAction,t.userShares,i,e.earningTokenPrice,e.vaultKey===F.om.CakeVault?e.userData.currentPerformanceFee.plus(e.userData.currentOverdueFee):null).autoUsdToDisplay:0}return e.userData.pendingReward.times(e.earningTokenPrice).toNumber()},"desc");case"totalStaked":return C()(i,function(n){var e,t=Number.NaN;return n.vaultKey?n.stakingTokenPrice&&n.totalCakeInVault.isFinite()&&(t=+(0,u.formatUnits)(c.O$.from(n.totalCakeInVault.toString()),n.stakingToken.decimals)*n.stakingTokenPrice):(null===(e=n.totalStaked)||void 0===e?void 0:e.isFinite())&&n.stakingTokenPrice&&(t=+(0,u.formatUnits)(c.O$.from(n.totalStaked.toString()),n.stakingToken.decimals)*n.stakingTokenPrice),Number.isFinite(t)?t:0},"desc");case"latest":return C()(i,function(n){return Number(n.sousId)},"desc");default:return i}},ey=60/M.hJ*4,eS=function(){var n,e=(0,K.useRouter)(),t=(0,I.$G)().t,o=(0,p.Ge)().account,l=(0,B.f6)(),c=l.pools,u=l.userDataLoaded,d=(0,i.Z)((0,L.tw)(),2),f=d[0],g=d[1],S=(0,i.Z)((0,L.Yi)(),2),C=S[0],P=S[1],F=(0,a.useState)(12),M=F[0],N=F[1],O=(0,D.Z)(),W=O.observerRef,X=O.isIntersecting,G=(0,a.useMemo)(function(){var n;return"string"==typeof(null==e?void 0:null===(n=e.query)||void 0===n?void 0:n.search)?e.query.search:""},[e.query]),V=(0,a.useState)(""),$=V[0],U=V[1],H=G&&!$?G:$,Y=(0,a.useState)("hot"),J=Y[0],Q=Y[1],_=(0,a.useRef)(0),q=(0,E.Xh)(),nn=(0,a.useMemo)(function(){return T()(c,function(n){return n.isFinished})},[c]),ne=nn[0],nt=nn[1],ni=(0,a.useMemo)(function(){return nt.filter(function(n){return!(q>0)||!n.startBlock||Number(n.startBlock)<q+ey})},[q,nt]),no=(0,a.useMemo)(function(){return ne.filter(function(n){return n.vaultKey?n.userData.userShares.gt(0):n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})},[ne]),nr=(0,a.useCallback)(function(){return ni.filter(function(n){return n.vaultKey?n.userData.userShares.gt(0):n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})},[ni]),na=no.length>0;(0,B.l7)(),(0,a.useEffect)(function(){X&&N(function(n){return n<=_.current?n+12:n})},[X]);var ns=e.pathname.includes("history"),nl=(0,a.useCallback)(function(n){return U(n.target.value)},[]),nc=(0,a.useCallback)(function(n){return Q(n.value)},[]);n=ns?f?no:ne:f?nr():ni,n=(0,a.useMemo)(function(){var e=ew(o,J,c,n).slice(0,M);if(H){var t=(0,A.b)(H.toLowerCase());return e.filter(function(n){return(0,A.b)(n.earningToken.symbol.toLowerCase()).includes(t)})}return e},[o,J,c,n,M,H]),_.current=n.length;var nu=(0,r.jsx)(em,{children:n.map(function(n){return n.vaultKey?(0,r.jsx)(nw.Z,{pool:n,showStakedOnly:f},n.vaultKey):(0,r.jsx)(nk,{pool:n,account:o},n.sousId)})}),nd=(0,r.jsx)(el,{urlSearch:G,pools:n,account:o});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(m.Z,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:(0,r.jsxs)(m.Z,{flex:"1",flexDirection:"column",mr:["8px",0],children:[(0,r.jsx)(j.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:t("Syrup Pools")}),(0,r.jsx)(j.Z,{scale:"md",color:"text",children:t("Just stake some tokens to earn.")}),(0,r.jsx)(j.Z,{scale:"md",color:"text",children:t("High APR, low risk.")})]})})}),(0,r.jsxs)(z.Z,{children:[(0,r.jsxs)(eg,{children:[(0,r.jsx)(nR,{stakedOnly:f,setStakedOnly:g,hasStakeInFinishedPools:na,viewMode:C,setViewMode:P}),(0,r.jsxs)(eZ,{children:[(0,r.jsxs)(ej,{children:[(0,r.jsx)(h.Z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:t("Sort by")}),(0,r.jsx)(ev,{children:(0,r.jsx)(v.Z,{options:[{label:t("Hot"),value:"hot"},{label:t("APR"),value:"apr"},{label:t("Earned"),value:"earned"},{label:t("Total staked"),value:"totalStaked"},{label:t("Latest"),value:"latest"},],onOptionChange:nc})})]}),(0,r.jsxs)(ej,{style:{marginLeft:16},children:[(0,r.jsx)(h.Z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:t("Search")}),(0,r.jsx)(b.Z,{initialValue:H,onChange:nl,placeholder:"Search Pools"})]})]})]}),ns&&(0,r.jsxs)(eb,{children:[(0,r.jsx)(h.Z,{fontSize:["16px",null,"20px"],color:"failure",pr:"4px",children:t("Looking for v1 CAKE syrup pools?")}),(0,r.jsxs)(ek,{href:"/migration",fontSize:["16px",null,"20px"],color:"failure",children:[t("Go to migration page"),"."]})]}),o&&!u&&f&&(0,r.jsx)(m.Z,{justifyContent:"center",mb:"4px",children:(0,r.jsx)(k.Z,{})}),C===R.wO.CARD?nu:nd,(0,r.jsx)("div",{ref:W}),(0,r.jsx)(w.Z,{mx:"auto",mt:"12px",src:"/images/decorations/3d-syrup-bunnies.png",alt:"Pancake illustration",width:192,height:184.5})]}),(0,s.createPortal)((0,r.jsx)(y.Z,{}),document.body)]})}},12752:function(n,e,t){"use strict";var i=t(70865),o=t(96670),r=t(26297),a=t(92228),s=t(52322);t(2784);var l=t(3411);function c(){var n=(0,a.Z)(["\n  z-index: ",";\n  background-color: ",";\n  color: white;\n  margin: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ",";\n  top: 0;\n  text-align: center;\n  transform: ",";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n']);return c=function(){return n},n}var u=l.ZP.div.withConfig({componentId:"sc-e1bdbf71-0"})(c(),function(n){return n.theme.zIndices.ribbon},function(n){var e=n.variantColor;return n.theme.colors[void 0===e?"secondary":e]},function(n){return"right"===n.ribbonPosition?0:"auto"},function(n){return"right"===n.ribbonPosition?"translateX(30%) translateY(0%) rotate(45deg)":"translateX(0%) translateY(200%) rotate(-45deg)"},function(n){var e=n.variantColor;return n.theme.colors[void 0===e?"secondary":e]}),d=function(n){var e=n.variantColor,t=n.text,a=n.ribbonPosition,l=(0,r.Z)(n,["variantColor","text","ribbonPosition"]);return(0,s.jsx)(u,(0,o.Z)((0,i.Z)({variantColor:e,ribbonPosition:a},l),{children:(0,s.jsx)("div",{title:t,children:t})}))};d.defaultProps={ribbonPosition:"right"},e.Z=d}}]);
//# sourceMappingURL=4976-e3b166e932e521e1.js.map