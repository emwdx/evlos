"use strict";(self.webpackChunkfitcoin_app=self.webpackChunkfitcoin_app||[]).push([[7407],{97407:function(t,r,e){e.r(r),e.d(r,{MarketplaceV3:function(){return p}});var i=e(74165),n=e(15861),a=e(15671),s=e(43144),c=e(95360),o=e(48905),p=(e(80518),e(66315),e(13631),e(49675),e(84255),e(20737),e(78262),function(){function t(r,e,i){(0,a.Z)(this,t);var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.c_(r,e,s,n);(0,c._)(this,"abi",void 0),(0,c._)(this,"contractWrapper",void 0),(0,c._)(this,"storage",void 0),(0,c._)(this,"encoder",void 0),(0,c._)(this,"events",void 0),(0,c._)(this,"estimator",void 0),(0,c._)(this,"platformFees",void 0),(0,c._)(this,"metadata",void 0),(0,c._)(this,"app",void 0),(0,c._)(this,"roles",void 0),(0,c._)(this,"interceptor",void 0),(0,c._)(this,"_chainId",void 0),this._chainId=p,this.abi=o.e.parse(s||[]),this.contractWrapper=h,this.storage=i,this.metadata=new o.ah(this.contractWrapper,o.d1,this.storage),this.app=new o.aV(this.contractWrapper,this.metadata,this.storage),this.roles=new o.ai(this.contractWrapper,t.contractRoles),this.encoder=new o.ag(this.contractWrapper),this.estimator=new o.aN(this.contractWrapper),this.events=new o.aO(this.contractWrapper),this.platformFees=new o.aQ(this.contractWrapper),this.interceptor=new o.aP(this.contractWrapper)}return(0,s.Z)(t,[{key:"directListings",get:function(){return(0,o.bM)(this.detectDirectListings(),o.d2)}},{key:"englishAuctions",get:function(){return(0,o.bM)(this.detectEnglishAuctions(),o.d3)}},{key:"offers",get:function(){return(0,o.bM)(this.detectOffers(),o.d4)}},{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"prepare",value:function(){var t=(0,n.Z)((0,i.Z)().mark((function t(r,e,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,i){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,n.Z)((0,i.Z)().mark((function t(r,e,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,n));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,i){return t.apply(this,arguments)}}()},{key:"detectDirectListings",value:function(){if((0,o.bN)(this.contractWrapper,"DirectListings"))return new o.aJ(this.contractWrapper,this.storage)}},{key:"detectEnglishAuctions",value:function(){if((0,o.bN)(this.contractWrapper,"EnglishAuctions"))return new o.aK(this.contractWrapper,this.storage)}},{key:"detectOffers",value:function(){if((0,o.bN)(this.contractWrapper,"Offers"))return new o.aL(this.contractWrapper,this.storage)}}]),t}());(0,c._)(p,"contractRoles",["admin","lister","asset"])}}]);
//# sourceMappingURL=7407.c2a61aa0.chunk.js.map