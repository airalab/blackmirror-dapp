(function(e){function t(t){for(var c,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var b=s;o.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"0037":function(e,t,n){},"0819":function(e,t,n){"use strict";n("bec8")},1:function(e,t,n){e.exports=n("56d7")},"19b2":function(e,t,n){"use strict";n("0037")},2:function(e,t){},3:function(e,t){},"3e74":function(e,t,n){"use strict";n("58fb")},4:function(e,t){},"4ca7":function(e,t,n){"use strict";n("65af")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"app"},o=Object(c["g"])("div",{class:"app-title"},[Object(c["g"])("div",{class:"layout"},[Object(c["g"])("h1",null,[Object(c["h"])(" Try it out dapp > "),Object(c["g"])("a",{href:"https://robonomics.academy/",target:"_blank"},"Online Robonomics school 2022")])])],-1);function a(e,t,n,a,i,s){var u=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["f"])("div",r,[o,Object(c["i"])(u)])}var i=n("1da1"),s=(n("96cf"),n("fe43")),u=n.n(s),b=n("e79d"),l=n("0b67"),d={endpoint:"wss://kusama.rpc.robonomics.network/",isDevelopmentAccounts:!1,subscription:"4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r",stream:"https://www.youtube.com/embed/live_stream?channel=UCrSiho1uB-1n6F8cZpCLhjQ&autoplay=1&mute=1&controls=0",discord:"https://discord.com/invite/5UWNGNaAUf"},f=new b["Robonomics"]({endpoint:d.endpoint});f.setAccountManager(new u.a(l["a"]));var p=f,j={name:"App",created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.run();case 2:return e.next=4,u.a.initPlugin(p.accountManager.keyring,{isDevelopment:d.isDevelopmentAccounts});case 4:case"end":return e.stop()}}),e)})))()}},O=(n("3e74"),n("6b0d")),h=n.n(O);const v=h()(j,[["render",a]]);var g=v,m=n("6c02"),y=function(e){return Object(c["u"])("data-v-5469d782"),e=e(),Object(c["s"])(),e},k={class:"dark",id:"video"},w={class:"layout"},x={id:"video-sticky"},R={class:"video-sticky-title"},S=y((function(){return Object(c["g"])("span",null,"Black mirror live",-1)})),_={class:"dark"},A={class:"layout"},P=y((function(){return Object(c["g"])("h2",{class:"text-typing"},"Welcome to black mirror",-1)})),T=y((function(){return Object(c["g"])("p",{class:"animate-show-up animate-show-up-1"}," This decentralized application made for students of Robonomics winter school 2022. It shows you that decentralized cloud over blockchain already works. ",-1)})),M=y((function(){return Object(c["g"])("li",{class:"animate-show-up animate-show-up-2"},[Object(c["h"])(" Create or activate your Polkadot account in "),Object(c["g"])("a",{href:"https://polkadot.js.org/extension/",target:"_blank"},"Polkadot.js extension")],-1)})),L={class:"animate-show-up animate-show-up-3"},V=Object(c["h"])(" Ask "),C=["href"],I=Object(c["h"])(" to add your account to the Learning Winter School 2022 subscription. "),U=y((function(){return Object(c["g"])("li",{class:"animate-show-up animate-show-up-4"}," Type here your text message, sign and send it to our retro TV ",-1)})),D={class:"animate-show-up animate-show-up-5"},J=Object(c["h"])(" Make sure your transaction with datalog succesfully "),Y=Object(c["h"])("sent"),E=y((function(){return Object(c["g"])("li",{class:"animate-show-up animate-show-up-6"}," Watch QR, it should change ",-1)})),W={class:"layout"},H={key:1};function N(e,t,n,r,o,a){var i=Object(c["y"])("Video"),s=Object(c["y"])("router-link"),u=Object(c["y"])("Account"),b=Object(c["y"])("Sender");return Object(c["r"])(),Object(c["f"])("div",null,[Object(c["g"])("section",k,[Object(c["g"])("div",w,[Object(c["i"])(i,{class:"block"})])]),Object(c["H"])(Object(c["g"])("section",x,[Object(c["g"])("div",R,[S,Object(c["g"])("button",{class:"video-sticky-unstick","aria-label":"Close popup",onClick:t[0]||(t[0]=function(e){return a.closePopupVideo()})},"x")]),Object(c["i"])(i,{class:"block"})],512),[[c["E"],o.videoStick]]),Object(c["g"])("section",_,[Object(c["g"])("div",A,[P,T,Object(c["g"])("ol",null,[M,Object(c["g"])("li",L,[V,Object(c["g"])("a",{href:o.discord,target:"_blank"},"in Discord",8,C),I]),U,Object(c["g"])("li",D,[J,Object(c["i"])(s,{to:{name:"users"},target:"_blank"},{default:Object(c["G"])((function(){return[Y]})),_:1})]),E])])]),Object(c["g"])("section",null,[Object(c["g"])("div",W,[o.isReady?(Object(c["r"])(),Object(c["f"])(c["a"],{key:0},[Object(c["i"])(u,{class:"block"}),Object(c["i"])(b)],64)):(Object(c["r"])(),Object(c["f"])("div",H,"..."))])])])}var q={class:"videoWrapper"},z=["src"];function B(e,t,n,r,o,a){return Object(c["r"])(),Object(c["f"])("div",q,[Object(c["g"])("iframe",{width:"100%",height:"450",src:o.src,title:"YouTube video player",frameborder:"0",allowfullscreen:""},null,8,z)])}var G={data:function(){return{src:d.stream}}};n("59dc");const F=h()(G,[["render",B],["__scopeId","data-v-4b799bde"]]);var Q=F,Z=(n("b0c0"),function(e){return Object(c["u"])("data-v-0b248dd0"),e=e(),Object(c["s"])(),e}),K={style:{"margin-bottom":"0"}},$=Z((function(){return Object(c["g"])("h3",null,"1. Your account",-1)})),X=Z((function(){return Object(c["g"])("p",null,[Object(c["g"])("i",null,"[Robonomics parachain format]")],-1)})),ee=["value"],te={key:1},ne={class:"account"},ce=Z((function(){return Object(c["g"])("br",null,null,-1)})),re=Z((function(){return Object(c["g"])("span",{class:"copy"},"Copy address",-1)})),oe=Z((function(){return Object(c["g"])("span",{class:"copied"},"Address copied!",-1)})),ae=[re,oe],ie={key:2},se=Object(c["h"])(" Create or activate your account in "),ue=Z((function(){return Object(c["g"])("a",{href:"https://polkadot.js.org/extension/",target:"_blank"},"Polkadot.js extension",-1)})),be=[se,ue];function le(e,t,n,r,o,a){return Object(c["r"])(),Object(c["f"])("section",K,[$,X,Object(c["g"])("section",null,[o.accounts.length>1?Object(c["H"])((Object(c["r"])(),Object(c["f"])("select",{key:0,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.account=e})},[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.accounts,(function(e,t){return Object(c["r"])(),Object(c["f"])("option",{key:t,value:e.address},Object(c["A"])(e.meta.isTesting?"dev":"")+" "+Object(c["A"])(e.meta.name),9,ee)})),128))],512)),[[c["C"],o.account]]):Object(c["e"])("",!0),o.accounts.length>0?(Object(c["r"])(),Object(c["f"])("p",te,[Object(c["g"])("b",ne,Object(c["A"])(o.account),1),ce,Object(c["g"])("a",{class:"copyLink",href:"javascript:;",onClick:t[1]||(t[1]=Object(c["I"])((function(e){return a.clipboard(o.account,e)}),["prevent"]))},ae)])):Object(c["e"])("",!0),0===o.accounts.length?(Object(c["r"])(),Object(c["f"])("p",ie,be)):Object(c["e"])("",!0)])])}n("d81d"),n("d3b7"),n("25f0"),n("caad"),n("2532");var de={data:function(){return{account:null,accounts:[],devices:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.rws.getDevices(d.subscription);case 2:n=t.sent,n.isEmpty||(e.devices=n.toArray().map((function(e){return e.toString()}))),p.accountManager.onReady((function(){e.accounts=p.accountManager.getAccounts(),e.accounts.length&&(e.account=e.accounts[0].address)}));case 5:case"end":return t.stop()}}),t)})))()},computed:{isRws:function(){return!!this.devices.includes(this.account)}},watch:{account:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.accountManager.selectAccountByAddress(e);case 2:case"end":return t.stop()}}),t)})))()},isRws:function(){this.isRws?p.accountManager.useSubscription(d.subscription):p.accountManager.useSubscription(!1)}},methods:{clipboard:function(e,t){navigator.clipboard.writeText(e).then((function(){t.target.closest("a").classList.add("on"),setTimeout((function(){t.target.closest("a").classList.remove("on")}),5e3)}))}}};n("19b2");const fe=h()(de,[["render",le],["__scopeId","data-v-0b248dd0"]]);var pe=fe,je=function(e){return Object(c["u"])("data-v-0ef99453"),e=e(),Object(c["s"])(),e},Oe=je((function(){return Object(c["g"])("h3",null,"2. Your message to the device",-1)})),he=je((function(){return Object(c["g"])("p",null,[Object(c["g"])("i",null,"[Test Robonomics IoT subscription: type here your text, send and view it on device]")],-1)})),ve={key:0,class:"msg"},ge=je((function(){return Object(c["g"])("h4",null,"Your message has been sent",-1)})),me=["href"],ye=Object(c["h"])("View list of succesfully written accounts"),ke={key:1};function we(e,t,n,r,o,a){var i=Object(c["y"])("Form"),s=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["f"])("div",null,[Oe,he,Object(c["i"])(i,{onSubmit:a.send,loader:o.loader},null,8,["onSubmit","loader"]),o.result?(Object(c["r"])(),Object(c["f"])("div",ve,[ge,Object(c["g"])("ol",null,[Object(c["g"])("li",null,[Object(c["g"])("a",{href:"https://robonomics.subscan.io/extrinsic/".concat(o.result),target:"_blank"},"View tx explorer",8,me)]),Object(c["g"])("li",null,[Object(c["i"])(s,{to:{name:"users"},target:"_blank"},{default:Object(c["G"])((function(){return[ye]})),_:1})])])])):Object(c["e"])("",!0),o.error?(Object(c["r"])(),Object(c["f"])("div",ke,Object(c["A"])(o.error),1)):Object(c["e"])("",!0)])}n("e9c4"),n("99af");var xe={key:0,disabled:""},Re=["disabled"],Se={key:2,class:"error"},_e={key:3,class:"tip"},Ae=Object(c["h"])(" You need IoT subscription for transaction fee. Ask in "),Pe=["href"],Te=Object(c["h"])(" to add your account to the Learning Winter School 2022 subscription. ");function Me(e,t,n,r,o,a){return Object(c["r"])(),Object(c["f"])("section",null,[Object(c["H"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.text=e}),placeholder:"Type your message here, 50 characters max",required:"",maxlength:"50"},null,512),[[c["D"],o.text]]),n.loader?(Object(c["r"])(),Object(c["f"])("button",xe,"...")):(Object(c["r"])(),Object(c["f"])("button",{key:1,onClick:t[1]||(t[1]=function(){return a.submit&&a.submit.apply(a,arguments)}),disabled:!o.isSubscription||o.error}," Sign and send ",8,Re)),o.error?(Object(c["r"])(),Object(c["f"])("div",Se,Object(c["A"])(o.error),1)):Object(c["e"])("",!0),o.isSubscription?Object(c["e"])("",!0):(Object(c["r"])(),Object(c["f"])("div",_e,[Ae,Object(c["g"])("a",{href:o.discord,target:"_blank"},"Discord",8,Pe),Te]))])}var Le={props:["loader"],data:function(){return{text:"",isSubscription:!1,discord:d.discord,error:!1}},created:function(){var e=this;setInterval((function(){e.isSubscription=p.accountManager.subscription}),1e3)},watch:{text:function(){this.text.length>50?this.error="Attention: Maximum string length 50 characters":this.error=!1}},methods:{submit:function(){this.error||this.$emit("submit",this.text)}}};n("b095");const Ve=h()(Le,[["render",Me],["__scopeId","data-v-54322902"]]);var Ce=Ve,Ie={components:{Form:Ce},data:function(){return{result:null,error:null,unsubscribe:null,loader:!1}},unmounted:function(){this.unsubscribe&&this.unsubscribe()},methods:{send:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.error="",t.result="",t.loader=!0,n.prev=3,c=p.datalog.write(JSON.stringify({blackmirror:e})),n.next=7,p.accountManager.signAndSend(c);case 7:r=n.sent,t.result="".concat(r.blockNumber,"-").concat(r.txIndex),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](3),t.error=n.t0.message;case 14:t.loader=!1;case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}};n("0819");const Ue=h()(Ie,[["render",we],["__scopeId","data-v-0ef99453"]]);var De=Ue,Je={components:{Video:Q,Account:pe,Sender:De},data:function(){return{isReady:!1,discord:d.discord,videoStick:!1}},methods:{stickPopupVideo:function(){var e,t=document.querySelector("#video"),n=this;window.clearTimeout(e),e=setTimeout((function(){n.videoStick=window.pageYOffset-t.offsetTop>800}),66)},closePopupVideo:function(){this.videoStick=!1,window.removeEventListener("scroll",this.stickPopupVideo)}},created:function(){var e=this;p.onReady((function(){e.isReady=!0}))},mounted:function(){window.addEventListener("scroll",this.stickPopupVideo)}};n("4ca7");const Ye=h()(Je,[["render",N],["__scopeId","data-v-5469d782"]]);var Ee=Ye,We={class:"layout"},He={key:1};function Ne(e,t,n,r,o,a){var i=Object(c["y"])("Users",!0);return Object(c["r"])(),Object(c["f"])("section",null,[Object(c["g"])("div",We,[o.isReady?(Object(c["r"])(),Object(c["d"])(i,{key:0})):(Object(c["r"])(),Object(c["f"])("div",He,"..."))])])}var qe={key:0},ze={key:1};function Be(e,t,n,r,o,a){return o.isLoader?(Object(c["r"])(),Object(c["f"])("div",ze,"...")):(Object(c["r"])(),Object(c["f"])("ul",qe,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.devices,(function(e,t){return Object(c["r"])(),Object(c["f"])("li",{key:t},Object(c["A"])(e),1)})),128))]))}var Ge=n("b85c"),Fe={data:function(){return{devices:[],isLoader:!0}},created:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,c,r,o,a,i,s,u,b,l,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoader=!0,n=[],t.next=4,p.rws.getDevices(d.subscription);case 4:if(c=t.sent,c.isEmpty){t.next=49;break}r=c.toArray().map((function(e){return e.toString()})),o=Object(Ge["a"])(r),t.prev=8,o.s();case 10:if((a=o.n()).done){t.next=41;break}return i=a.value,t.next=14,p.datalog.read(i);case 14:s=t.sent,u=Object(Ge["a"])(s),t.prev=16,u.s();case 18:if((b=u.n()).done){t.next=31;break}if(l=b.value,t.prev=20,f=JSON.parse(l[1].toHuman()),!f.blackmirror||n.includes(i)){t.next=25;break}return n.push(i),t.abrupt("break",31);case 25:t.next=29;break;case 27:t.prev=27,t.t0=t["catch"](20);case 29:t.next=18;break;case 31:t.next=36;break;case 33:t.prev=33,t.t1=t["catch"](16),u.e(t.t1);case 36:return t.prev=36,u.f(),t.finish(36);case 39:t.next=10;break;case 41:t.next=46;break;case 43:t.prev=43,t.t2=t["catch"](8),o.e(t.t2);case 46:return t.prev=46,o.f(),t.finish(46);case 49:e.devices=n,e.isLoader=!1;case 51:case"end":return t.stop()}}),t,null,[[8,43,46,49],[16,33,36,39],[20,27]])})))()}}};const Qe=h()(Fe,[["render",Be]]);var Ze=Qe,Ke={components:{Users:Ze},data:function(){return{isReady:!1}},created:function(){var e=this;p.onReady((function(){e.isReady=!0}))}};const $e=h()(Ke,[["render",Ne]]);var Xe=$e,et=Object(m["a"])({history:Object(m["b"])(),routes:[{path:"/",name:"main",component:Ee},{path:"/users",name:"users",component:Xe}]}),tt=et;Object(c["c"])(g).use(tt).mount("#app")},"58fb":function(e,t,n){},"59dc":function(e,t,n){"use strict";n("d98d")},"65af":function(e,t,n){},b095:function(e,t,n){"use strict";n("d567")},bec8:function(e,t,n){},d567:function(e,t,n){},d98d:function(e,t,n){}});
//# sourceMappingURL=app.29c8fc45.js.map