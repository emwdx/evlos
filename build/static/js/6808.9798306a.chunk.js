"use strict";(self.webpackChunkfitcoin_app=self.webpackChunkfitcoin_app||[]).push([[6808],{63955:function(r,t,e){e.d(t,{S:function(){return i}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),s=e(95360),o=e(48905),i=function(){function r(t,e,u){var i=this;(0,c.Z)(this,r),(0,s._)(this,"contractWrapper",void 0),(0,s._)(this,"storage",void 0),(0,s._)(this,"erc20",void 0),(0,s._)(this,"_chainId",void 0),(0,s._)(this,"transfer",(0,o.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.erc20.transfer.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,s._)(this,"transferFrom",(0,o.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.erc20.transferFrom.prepare(t,e,a));case 1:case"end":return r.stop()}}),r)})));return function(t,e,n){return r.apply(this,arguments)}}())),(0,s._)(this,"setAllowance",(0,o.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.erc20.setAllowance.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,s._)(this,"transferBatch",(0,o.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.erc20.transferBatch.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),this.contractWrapper=t,this.storage=e,this.erc20=new o.ao(this.contractWrapper,this.storage,u),this._chainId=u}return(0,u.Z)(r,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"get",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc20.get());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"balance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.erc20.balance();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc20.balanceOf(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.erc20.totalSupply();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"allowance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.erc20.allowance(t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"allowanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.erc20.allowanceOf(t,e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()}]),r}()},36808:function(r,t,e){e.r(t),e.d(t,{TokenDrop:function(){return v}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),s=e(97326),o=e(60136),i=e(29388),p=e(95360),f=e(48905),h=e(63955),l=e(68624),v=(e(80518),e(66315),e(13631),e(49675),e(84255),e(20737),e(78262),function(r){(0,o.Z)(e,r);var t=(0,i.Z)(e);function e(r,u,o){var i,h;(0,c.Z)(this,e);var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},v=arguments.length>4?arguments[4]:void 0,Z=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.c_(r,u,v,l);return i=t.call(this,d,o,Z),h=(0,s.Z)(i),(0,p._)((0,s.Z)(i),"abi",void 0),(0,p._)((0,s.Z)(i),"metadata",void 0),(0,p._)((0,s.Z)(i),"app",void 0),(0,p._)((0,s.Z)(i),"roles",void 0),(0,p._)((0,s.Z)(i),"encoder",void 0),(0,p._)((0,s.Z)(i),"estimator",void 0),(0,p._)((0,s.Z)(i),"sales",void 0),(0,p._)((0,s.Z)(i),"platformFees",void 0),(0,p._)((0,s.Z)(i),"events",void 0),(0,p._)((0,s.Z)(i),"claimConditions",void 0),(0,p._)((0,s.Z)(i),"interceptor",void 0),(0,p._)((0,s.Z)(i),"claim",(0,f.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=!(a.length>1&&void 0!==a[1])||a[1],r.t0=h.claimTo,r.next=4,h.contractWrapper.getSignerAddress();case 4:return r.t1=r.sent,r.t2=t,r.t3=e,r.abrupt("return",r.t0.prepare.call(r.t0,r.t1,r.t2,r.t3));case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,p._)((0,s.Z)(i),"claimTo",(0,f.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){var a,c=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=!(c.length>2&&void 0!==c[2])||c[2],r.abrupt("return",h.erc20.claimTo.prepare(t,e,{checkERC20Allowance:a}));case 2:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,p._)((0,s.Z)(i),"delegateTo",(0,f.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=f.aT,r.t1=i.contractWrapper,r.next=4,(0,f.cT)(t);case 4:return r.t2=r.sent,r.t3=[r.t2],r.t4={contractWrapper:r.t1,method:"delegate",args:r.t3},r.abrupt("return",r.t0.fromContractWrapper.call(r.t0,r.t4));case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,p._)((0,s.Z)(i),"burnTokens",(0,f.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.erc20.burn.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,p._)((0,s.Z)(i),"burnFrom",(0,f.cS)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.erc20.burnFrom.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),i.abi=f.e.parse(v||[]),i.metadata=new f.ah(i.contractWrapper,f.dd,i.storage),i.app=new f.aV(i.contractWrapper,i.metadata,i.storage),i.roles=new f.ai(i.contractWrapper,e.contractRoles),i.encoder=new f.ag(i.contractWrapper),i.estimator=new f.aN(i.contractWrapper),i.events=new f.aO(i.contractWrapper),i.sales=new f.ak(i.contractWrapper),i.platformFees=new f.aQ(i.contractWrapper),i.interceptor=new f.aP(i.contractWrapper),i.claimConditions=new f.am(i.contractWrapper,i.metadata,i.storage),i}return(0,u.Z)(e,[{key:"getVoteBalance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this,r.next=3,this.contractWrapper.getSignerAddress();case 3:return r.t1=r.sent,r.next=6,r.t0.getVoteBalanceOf.call(r.t0,r.t1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getVoteBalanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this.erc20,r.t1=this.contractWrapper.readContract,r.next=4,(0,f.cT)(t);case 4:return r.t2=r.sent,r.next=7,r.t1.getVotes.call(r.t1,r.t2);case 7:return r.t3=r.sent,r.next=10,r.t0.getValue.call(r.t0,r.t3);case 10:return r.abrupt("return",r.sent);case 11:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getDelegation",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this,r.next=3,this.contractWrapper.getSignerAddress();case 3:return r.t1=r.sent,r.next=6,r.t0.getDelegationOf.call(r.t0,r.t1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getDelegationOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this.contractWrapper.readContract,r.next=3,(0,f.cT)(t);case 3:return r.t1=r.sent,r.next=6,r.t0.delegates.call(r.t0,r.t1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.bp)("transfer"),l.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.contractWrapper.call(t,e,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()}]),e}(h.S));(0,p._)(v,"contractRoles",["admin","transfer"])}}]);
//# sourceMappingURL=6808.9798306a.chunk.js.map