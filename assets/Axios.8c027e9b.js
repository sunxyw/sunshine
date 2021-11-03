import{_ as Ae}from"./index.90a98571.js";import{d as Re,k as Z,g as Q,H as _e,c as A,b as C,i as ee,w as B,p as $e,a as je,o as R,I as Ne,h as D,J as L,j as Pe}from"./vendor.709084e2.js";var I={exports:{}},re=function(e,t){return function(){for(var s=new Array(arguments.length),o=0;o<s.length;o++)s[o]=arguments[o];return e.apply(t,s)}},ke=re,w=Object.prototype.toString;function q(r){return w.call(r)==="[object Array]"}function F(r){return typeof r=="undefined"}function Te(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Ue(r){return w.call(r)==="[object ArrayBuffer]"}function Be(r){return typeof FormData!="undefined"&&r instanceof FormData}function De(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Le(r){return typeof r=="string"}function Ie(r){return typeof r=="number"}function te(r){return r!==null&&typeof r=="object"}function _(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function qe(r){return w.call(r)==="[object Date]"}function Fe(r){return w.call(r)==="[object File]"}function He(r){return w.call(r)==="[object Blob]"}function ne(r){return w.call(r)==="[object Function]"}function Me(r){return te(r)&&ne(r.pipe)}function Je(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Ve(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ze(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function H(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),q(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.call(null,r[s],s,r)}function M(){var r={};function e(s,o){_(r[o])&&_(s)?r[o]=M(r[o],s):_(s)?r[o]=M({},s):q(s)?r[o]=s.slice():r[o]=s}for(var t=0,n=arguments.length;t<n;t++)H(arguments[t],e);return r}function Ke(r,e,t){return H(e,function(s,o){t&&typeof s=="function"?r[o]=ke(s,t):r[o]=s}),r}function Xe(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var m={isArray:q,isArrayBuffer:Ue,isBuffer:Te,isFormData:Be,isArrayBufferView:De,isString:Le,isNumber:Ie,isObject:te,isPlainObject:_,isUndefined:F,isDate:qe,isFile:Fe,isBlob:He,isFunction:ne,isStream:Me,isURLSearchParams:Je,isStandardBrowserEnv:ze,forEach:H,merge:M,extend:Ke,trim:Ve,stripBOM:Xe},E=m;function se(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ae=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(E.isURLSearchParams(t))s=t.toString();else{var o=[];E.forEach(t,function(a,h){a===null||typeof a=="undefined"||(E.isArray(a)?h=h+"[]":a=[a],E.forEach(a,function(f){E.isDate(f)?f=f.toISOString():E.isObject(f)&&(f=JSON.stringify(f)),o.push(se(h)+"="+se(f))}))}),s=o.join("&")}if(s){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},We=m;function $(){this.handlers=[]}$.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){We.forEach(this.handlers,function(n){n!==null&&e(n)})};var Ge=$,Ye=m,Ze=function(e,t){Ye.forEach(e,function(s,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=s,delete e[o])})},oe=function(e,t,n,s,o){return e.config=t,n&&(e.code=n),e.request=s,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},Qe=oe,ie=function(e,t,n,s,o){var i=new Error(e);return Qe(i,t,n,s,o)},er=ie,rr=function(e,t,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(er("Request failed with status code "+n.status,n.config,null,n.request,n))},j=m,tr=j.isStandardBrowserEnv()?function(){return{write:function(t,n,s,o,i,u){var a=[];a.push(t+"="+encodeURIComponent(n)),j.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),j.isString(o)&&a.push("path="+o),j.isString(i)&&a.push("domain="+i),u===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),nr=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},sr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},ar=nr,or=sr,ir=function(e,t){return e&&!ar(t)?or(e,t):t},J=m,ur=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],cr=function(e){var t={},n,s,o;return e&&J.forEach(e.split(`
`),function(u){if(o=u.indexOf(":"),n=J.trim(u.substr(0,o)).toLowerCase(),s=J.trim(u.substr(o+1)),n){if(t[n]&&ur.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([s]):t[n]=t[n]?t[n]+", "+s:s}}),t},ue=m,lr=ue.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function s(o){var i=o;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=s(window.location.href),function(i){var u=ue.isString(i)?s(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),N=m,fr=rr,dr=tr,pr=ae,hr=ir,mr=cr,vr=lr,V=ie,ce=function(e){return new Promise(function(n,s){var o=e.data,i=e.headers,u=e.responseType;N.isFormData(o)&&delete i["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(h+":"+y)}var f=hr(e.baseURL,e.url);a.open(e.method.toUpperCase(),pr(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function l(){if(!!a){var b="getAllResponseHeaders"in a?mr(a.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?a.responseText:a.response,S={data:g,status:a.status,statusText:a.statusText,headers:b,config:e,request:a};fr(n,s,S),a=null}}if("onloadend"in a?a.onloadend=l:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(l)},a.onabort=function(){!a||(s(V("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){s(V("Network Error",e,null,a)),a=null},a.ontimeout=function(){var g="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),s(V(g,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},N.isStandardBrowserEnv()){var c=(e.withCredentials||vr(f))&&e.xsrfCookieName?dr.read(e.xsrfCookieName):void 0;c&&(i[e.xsrfHeaderName]=c)}"setRequestHeader"in a&&N.forEach(i,function(g,S){typeof o=="undefined"&&S.toLowerCase()==="content-type"?delete i[S]:a.setRequestHeader(S,g)}),N.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),u&&u!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(g){!a||(a.abort(),s(g),a=null)}),o||(o=null),a.send(o)})},d=m,le=Ze,br=oe,yr={"Content-Type":"application/x-www-form-urlencoded"};function fe(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function gr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ce),r}function wr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var P={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:gr(),transformRequest:[function(e,t){return le(t,"Accept"),le(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(fe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||t&&t["Content-Type"]==="application/json"?(fe(t,"application/json"),wr(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,o=!n&&this.responseType==="json";if(o||s&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o)throw i.name==="SyntaxError"?br(i,this,"E_JSON_PARSE"):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};P.headers={common:{Accept:"application/json, text/plain, */*"}};d.forEach(["delete","get","head"],function(e){P.headers[e]={}});d.forEach(["post","put","patch"],function(e){P.headers[e]=d.merge(yr)});var z=P,Er=m,xr=z,Sr=function(e,t,n){var s=this||xr;return Er.forEach(n,function(i){e=i.call(s,e,t)}),e},de=function(e){return!!(e&&e.__CANCEL__)},pe=m,K=Sr,Cr=de,Or=z;function X(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var Ar=function(e){X(e),e.headers=e.headers||{},e.data=K.call(e,e.data,e.headers,e.transformRequest),e.headers=pe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pe.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var t=e.adapter||Or.adapter;return t(e).then(function(s){return X(e),s.data=K.call(e,s.data,s.headers,e.transformResponse),s},function(s){return Cr(s)||(X(e),s&&s.response&&(s.response.data=K.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},p=m,he=function(e,t){t=t||{};var n={},s=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function a(l,c){return p.isPlainObject(l)&&p.isPlainObject(c)?p.merge(l,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function h(l){p.isUndefined(t[l])?p.isUndefined(e[l])||(n[l]=a(void 0,e[l])):n[l]=a(e[l],t[l])}p.forEach(s,function(c){p.isUndefined(t[c])||(n[c]=a(void 0,t[c]))}),p.forEach(o,h),p.forEach(i,function(c){p.isUndefined(t[c])?p.isUndefined(e[c])||(n[c]=a(void 0,e[c])):n[c]=a(void 0,t[c])}),p.forEach(u,function(c){c in t?n[c]=a(e[c],t[c]):c in e&&(n[c]=a(void 0,e[c]))});var y=s.concat(o).concat(i).concat(u),f=Object.keys(e).concat(Object.keys(t)).filter(function(c){return y.indexOf(c)===-1});return p.forEach(f,h),n};const Rr="axios",_r="0.21.4",$r="Promise based HTTP client for the browser and node.js",jr="index.js",Nr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Pr={type:"git",url:"https://github.com/axios/axios.git"},kr=["xhr","http","ajax","promise","node"],Tr="Matt Zabriskie",Ur="MIT",Br={url:"https://github.com/axios/axios/issues"},Dr="https://axios-http.com",Lr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Ir={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},qr="dist/axios.min.js",Fr="dist/axios.min.js",Hr="./index.d.ts",Mr={"follow-redirects":"^1.14.0"},Jr=[{path:"./dist/axios.min.js",threshold:"5kB"}];var Vr={name:Rr,version:_r,description:$r,main:jr,scripts:Nr,repository:Pr,keywords:kr,author:Tr,license:Ur,bugs:Br,homepage:Dr,devDependencies:Lr,browser:Ir,jsdelivr:qr,unpkg:Fr,typings:Hr,dependencies:Mr,bundlesize:Jr},me=Vr,W={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){W[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var ve={},zr=me.version.split(".");function be(r,e){for(var t=e?e.split("."):zr,n=r.split("."),s=0;s<3;s++){if(t[s]>n[s])return!0;if(t[s]<n[s])return!1}return!1}W.transitional=function(e,t,n){var s=t&&be(t);function o(i,u){return"[Axios v"+me.version+"] Transitional option '"+i+"'"+u+(n?". "+n:"")}return function(i,u,a){if(e===!1)throw new Error(o(u," has been removed in "+t));return s&&!ve[u]&&(ve[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,u,a):!0}};function Kr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),s=n.length;s-- >0;){var o=n[s],i=e[o];if(i){var u=r[o],a=u===void 0||i(u,o,r);if(a!==!0)throw new TypeError("option "+o+" must be "+a);continue}if(t!==!0)throw Error("Unknown option "+o)}}var Xr={isOlderVersion:be,assertOptions:Kr,validators:W},ye=m,Wr=ae,ge=Ge,we=Ar,k=he,Ee=Xr,x=Ee.validators;function O(r){this.defaults=r,this.interceptors={request:new ge,response:new ge}}O.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=k(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&Ee.assertOptions(t,{silentJSONParsing:x.transitional(x.boolean,"1.0.0"),forcedJSONParsing:x.transitional(x.boolean,"1.0.0"),clarifyTimeoutError:x.transitional(x.boolean,"1.0.0")},!1);var n=[],s=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(e)===!1||(s=s&&l.synchronous,n.unshift(l.fulfilled,l.rejected))});var o=[];this.interceptors.response.forEach(function(l){o.push(l.fulfilled,l.rejected)});var i;if(!s){var u=[we,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(o),i=Promise.resolve(e);u.length;)i=i.then(u.shift(),u.shift());return i}for(var a=e;n.length;){var h=n.shift(),y=n.shift();try{a=h(a)}catch(f){y(f);break}}try{i=we(a)}catch(f){return Promise.reject(f)}for(;o.length;)i=i.then(o.shift(),o.shift());return i};O.prototype.getUri=function(e){return e=k(this.defaults,e),Wr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ye.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(t,n){return this.request(k(n||{},{method:e,url:t,data:(n||{}).data}))}});ye.forEach(["post","put","patch"],function(e){O.prototype[e]=function(t,n,s){return this.request(k(s||{},{method:e,url:t,data:n}))}});var Gr=O;function G(r){this.message=r}G.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};G.prototype.__CANCEL__=!0;var xe=G,Yr=xe;function T(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var t=this;r(function(s){t.reason||(t.reason=new Yr(s),e(t.reason))})}T.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};T.source=function(){var e,t=new T(function(s){e=s});return{token:t,cancel:e}};var Zr=T,Qr=function(e){return function(n){return e.apply(null,n)}},et=function(e){return typeof e=="object"&&e.isAxiosError===!0},Se=m,rt=re,U=Gr,tt=he,nt=z;function Ce(r){var e=new U(r),t=rt(U.prototype.request,e);return Se.extend(t,U.prototype,e),Se.extend(t,e),t}var v=Ce(nt);v.Axios=U;v.create=function(e){return Ce(tt(v.defaults,e))};v.Cancel=xe;v.CancelToken=Zr;v.isCancel=de;v.all=function(e){return Promise.all(e)};v.spread=Qr;v.isAxiosError=et;I.exports=v;I.exports.default=v;var st=I.exports;const at="https://api.github.com",Y=st.create({baseURL:at,timeout:1e3*20});Y.interceptors.request.use(r=>r,r=>Promise.reject(r));Y.interceptors.response.use(r=>r,r=>{const{$message:e}=window;if(r.response&&r.response.data){const t=r.response.status,n=r.response.data.message;e.error(`Code: ${t}, Message: ${n}`),console.error("[Axios Error]",r.response)}else e.error(`${r}`);return Promise.reject(r)});const ot=Re({name:"Axios",setup(){const r=Z(null),e=Z(!1);return{userInfo:r,loading:e,getUserInfo:()=>{e.value=!0,Y.get("/users/XPoet").then(n=>{console.log("response: ",n.data),r.value=n.data,e.value=!1}).catch(n=>{e.value=!1,console.error(n)})}}}}),Oe=r=>($e("data-v-3dbd4432"),r=r(),je(),r),it={class:"axios-container page-container"},ut=Oe(()=>C("div",{class:"page-title"},"Axios Test Page",-1)),ct={class:"user-info-container"},lt={class:"card-header"},ft=Oe(()=>C("span",null,"XPoet",-1)),dt=Pe("\u70B9\u51FB\u83B7\u53D6XPoet\u4FE1\u606F "),pt={class:"info-list-box"},ht={key:0,class:"text item"},mt={key:1,class:"text item"},vt={key:2,class:"text item"};function bt(r,e,t,n,s,o){const i=Q("el-button"),u=Q("el-card"),a=_e("loading");return R(),A("div",it,[ut,C("div",ct,[ee(u,{class:"box-card"},{header:B(()=>[C("div",lt,[ft,ee(i,{class:"button",type:"text",onClick:r.getUserInfo},{default:B(()=>[dt]),_:1},8,["onClick"])])]),default:B(()=>{var h,y,f,l,c,b;return[Ne(C("div",pt,[((h=r.userInfo)==null?void 0:h.name)?(R(),A("div",ht,"name: "+D((y=r.userInfo)==null?void 0:y.name),1)):L("",!0),((f=r.userInfo)==null?void 0:f.bio)?(R(),A("div",mt,"bio: "+D((l=r.userInfo)==null?void 0:l.bio),1)):L("",!0),((c=r.userInfo)==null?void 0:c.blog)?(R(),A("div",vt,"blog: "+D((b=r.userInfo)==null?void 0:b.blog),1)):L("",!0)],512),[[a,r.loading]])]}),_:1})])])}var wt=Ae(ot,[["render",bt],["__scopeId","data-v-3dbd4432"]]);export{wt as default};
