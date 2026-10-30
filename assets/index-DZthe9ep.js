import{g0 as Qw,V as Fe,bb as Oi,bc as on,gH as bn,cu as eh,cs as _u,ak as Kw,gI as nb,ao as ib,cS as ab,cF as rb,aj as Ha,cn as $w,aJ as Si,aq as xn,ba as fu,cP as du,gJ as Vd,gK as ov,b9 as sb,bj as Fl,gL as GS,ap as Jw,gM as ob,gN as e2}from"./index-3Ha73GA2.js";import{ab as t2}from"./XRGazeInput-CoGJi33n.js";var Hm={exports:{}},zc={};var VS;function n2(){if(VS)return zc;VS=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:d,ref:l!==void 0?l:null,props:c}}return zc.Fragment=e,zc.jsx=i,zc.jsxs=i,zc}var kS;function i2(){return kS||(kS=1,Hm.exports=n2()),Hm.exports}var U=i2(),Gm={exports:{}},_t={};var XS;function a2(){if(XS)return _t;XS=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),S=Symbol.iterator;function b(H){return H===null||typeof H!="object"?null:(H=S&&H[S]||H["@@iterator"],typeof H=="function"?H:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,M={};function R(H,ue,ee){this.props=H,this.context=ue,this.refs=M,this.updater=ee||C}R.prototype.isReactComponent={},R.prototype.setState=function(H,ue){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ue,"setState")},R.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function I(){}I.prototype=R.prototype;function N(H,ue,ee){this.props=H,this.context=ue,this.refs=M,this.updater=ee||C}var k=N.prototype=new I;k.constructor=N,y(k,R.prototype),k.isPureReactComponent=!0;var L=Array.isArray;function P(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function V(H,ue,ee){var pe=ee.ref;return{$$typeof:a,type:H,key:ue,ref:pe!==void 0?pe:null,props:ee}}function F(H,ue){return V(H.type,ue,H.props)}function Z(H){return typeof H=="object"&&H!==null&&H.$$typeof===a}function te(H){var ue={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(ee){return ue[ee]})}var de=/\/+/g;function q(H,ue){return typeof H=="object"&&H!==null&&H.key!=null?te(""+H.key):ue.toString(36)}function G(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(P,P):(H.status="pending",H.then(function(ue){H.status==="pending"&&(H.status="fulfilled",H.value=ue)},function(ue){H.status==="pending"&&(H.status="rejected",H.reason=ue)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function X(H,ue,ee,pe,fe){var De=typeof H;(De==="undefined"||De==="boolean")&&(H=null);var we=!1;if(H===null)we=!0;else switch(De){case"bigint":case"string":case"number":we=!0;break;case"object":switch(H.$$typeof){case a:case e:we=!0;break;case _:return we=H._init,X(we(H._payload),ue,ee,pe,fe)}}if(we)return fe=fe(H),we=pe===""?"."+q(H,0):pe,L(fe)?(ee="",we!=null&&(ee=we.replace(de,"$&/")+"/"),X(fe,ue,ee,"",function(ht){return ht})):fe!=null&&(Z(fe)&&(fe=F(fe,ee+(fe.key==null||H&&H.key===fe.key?"":(""+fe.key).replace(de,"$&/")+"/")+we)),ue.push(fe)),1;we=0;var Me=pe===""?".":pe+":";if(L(H))for(var ke=0;ke<H.length;ke++)pe=H[ke],De=Me+q(pe,ke),we+=X(pe,ue,ee,De,fe);else if(ke=b(H),typeof ke=="function")for(H=ke.call(H),ke=0;!(pe=H.next()).done;)pe=pe.value,De=Me+q(pe,ke++),we+=X(pe,ue,ee,De,fe);else if(De==="object"){if(typeof H.then=="function")return X(G(H),ue,ee,pe,fe);throw ue=String(H),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.")}return we}function K(H,ue,ee){if(H==null)return H;var pe=[],fe=0;return X(H,pe,"","",function(De){return ue.call(ee,De,fe++)}),pe}function he(H){if(H._status===-1){var ue=H._result,ee=ue();ee.then(function(pe){(H._status===0||H._status===-1)&&(H._status=1,H._result=pe,ee.status===void 0&&(ee.status="fulfilled",ee.value=pe))},function(pe){(H._status===0||H._status===-1)&&(H._status=2,H._result=pe,ee.status===void 0&&(ee.status="rejected",ee.reason=pe))}),H._status===-1&&(H._status=0,H._result=ee)}if(H._status===1)return H._result.default;throw H._result}var me=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ue=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ue))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function be(H){var ue=E.T,ee={};ee.types=ue!==null?ue.types:null,E.T=ee;try{var pe=H(),fe=E.S;fe!==null&&fe(ee,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(P,me)}catch(De){me(De)}finally{ue!==null&&ee.types!==null&&(ue.types=ee.types),E.T=ue}}function Le(H){var ue=E.T;if(ue!==null){var ee=ue.types;ee===null?ue.types=[H]:ee.indexOf(H)===-1&&ee.push(H)}else be(Le.bind(null,H))}var lt={map:K,forEach:function(H,ue,ee){K(H,function(){ue.apply(this,arguments)},ee)},count:function(H){var ue=0;return K(H,function(){ue++}),ue},toArray:function(H){return K(H,function(ue){return ue})||[]},only:function(H){if(!Z(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return _t.Activity=g,_t.Children=lt,_t.Component=R,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=N,_t.StrictMode=s,_t.Suspense=p,_t.ViewTransition=v,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,_t.__COMPILER_RUNTIME={__proto__:null,c:function(H){return E.H.useMemoCache(H)}},_t.addTransitionType=Le,_t.cache=function(H){return function(){return H.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(H,ue,ee){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var pe=y({},H.props),fe=H.key;if(ue!=null)for(De in ue.key!==void 0&&(fe=""+ue.key),ue)!O.call(ue,De)||De==="key"||De==="__self"||De==="__source"||De==="ref"&&ue.ref===void 0||(pe[De]=ue[De]);var De=arguments.length-2;if(De===1)pe.children=ee;else if(1<De){for(var we=Array(De),Me=0;Me<De;Me++)we[Me]=arguments[Me+2];pe.children=we}return V(H.type,fe,pe)},_t.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:c,_context:H},H},_t.createElement=function(H,ue,ee){var pe,fe={},De=null;if(ue!=null)for(pe in ue.key!==void 0&&(De=""+ue.key),ue)O.call(ue,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(fe[pe]=ue[pe]);var we=arguments.length-2;if(we===1)fe.children=ee;else if(1<we){for(var Me=Array(we),ke=0;ke<we;ke++)Me[ke]=arguments[ke+2];fe.children=Me}if(H&&H.defaultProps)for(pe in we=H.defaultProps,we)fe[pe]===void 0&&(fe[pe]=we[pe]);return V(H,De,fe)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(H){return{$$typeof:h,render:H}},_t.isValidElement=Z,_t.lazy=function(H){return{$$typeof:_,_payload:{_status:-1,_result:H},_init:he}},_t.memo=function(H,ue){return{$$typeof:m,type:H,compare:ue===void 0?null:ue}},_t.startTransition=be,_t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},_t.use=function(H){return E.H.use(H)},_t.useActionState=function(H,ue,ee){return E.H.useActionState(H,ue,ee)},_t.useCallback=function(H,ue){return E.H.useCallback(H,ue)},_t.useContext=function(H){return E.H.useContext(H)},_t.useDebugValue=function(){},_t.useDeferredValue=function(H,ue){return E.H.useDeferredValue(H,ue)},_t.useEffect=function(H,ue){return E.H.useEffect(H,ue)},_t.useEffectEvent=function(H){return E.H.useEffectEvent(H)},_t.useId=function(){return E.H.useId()},_t.useImperativeHandle=function(H,ue,ee){return E.H.useImperativeHandle(H,ue,ee)},_t.useInsertionEffect=function(H,ue){return E.H.useInsertionEffect(H,ue)},_t.useLayoutEffect=function(H,ue){return E.H.useLayoutEffect(H,ue)},_t.useMemo=function(H,ue){return E.H.useMemo(H,ue)},_t.useOptimistic=function(H,ue){return E.H.useOptimistic(H,ue)},_t.useReducer=function(H,ue,ee){return E.H.useReducer(H,ue,ee)},_t.useRef=function(H){return E.H.useRef(H)},_t.useState=function(H){return E.H.useState(H)},_t.useSyncExternalStore=function(H,ue,ee){return E.H.useSyncExternalStore(H,ue,ee)},_t.useTransition=function(){return E.H.useTransition()},_t.version="19.3.1",_t}var jS;function lv(){return jS||(jS=1,Gm.exports=a2()),Gm.exports}var xt=lv();const Tt=Qw(xt);var dn="-ms-",lu="-moz-",Yt="-webkit-",lb="comm",th="rule",cv="decl",r2="@import",s2="@namespace",cb="@keyframes",o2="@layer",ub=Math.abs,uv=String.fromCharCode,ag=Object.assign;function l2(a,e){return Pn(a,0)^45?(((e<<2^Pn(a,0))<<2^Pn(a,1))<<2^Pn(a,2))<<2^Pn(a,3):0}function fb(a){return a.trim()}function hr(a,e){return(a=e.exec(a))?a[0]:a}function Ct(a,e,i){return a.replace(e,i)}function Cd(a,e,i){return a.indexOf(e,i)}function Pn(a,e){return a.charCodeAt(e)|0}function io(a,e,i){return a.slice(e,i)}function ha(a){return a.length}function db(a){return a.length}function iu(a,e){return e.push(a),a}function c2(a,e){return a.map(e).join("")}function qS(a,e){return a.filter(function(i){return!hr(i,e)})}var nh=1,Nl=1,hb=0,Ji=0,Dn=0,Bl="";function ih(a,e,i,s,l,c,d,h){return{value:a,root:e,parent:i,type:s,props:l,children:c,line:nh,column:Nl,length:d,return:"",siblings:h}}function cs(a,e){return ag(ih("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},e)}function Zo(a){for(;a.root;)a=cs(a.root,{children:[a]});iu(a,a.siblings)}function u2(){return Dn}function f2(){return Dn=Ji>0?Pn(Bl,--Ji):0,Nl--,Dn===10&&(Nl=1,nh--),Dn}function _a(){return Dn=Ji<hb?Pn(Bl,Ji++):0,Nl++,Dn===10&&(Nl=1,nh++),Dn}function fs(){return Pn(Bl,Ji)}function Dd(){return Ji}function ah(a,e){return io(Bl,a,e)}function hu(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d2(a){return nh=Nl=1,hb=ha(Bl=a),Ji=0,[]}function h2(a){return Bl="",a}function Vm(a){return fb(ah(Ji-1,rg(a===91?a+2:a===40?a+1:a)))}function p2(a){for(;(Dn=fs())&&Dn<33;)_a();return hu(a)>2||hu(Dn)>3?"":" "}function m2(a,e){for(;--e&&_a()&&!(Dn<48||Dn>102||Dn>57&&Dn<65||Dn>70&&Dn<97););return ah(a,Dd()+(e<6&&fs()==32&&_a()==32))}function rg(a){for(;_a();)switch(Dn){case a:return Ji;case 34:case 39:a!==34&&a!==39&&rg(Dn);break;case 40:a===41&&rg(a);break;case 92:_a();break}return Ji}function g2(a,e){for(;_a()&&a+Dn!==57;)if(a+Dn===84&&fs()===47)break;return"/*"+ah(e,Ji-1)+"*"+uv(a===47?a:_a())}function v2(a){for(;!hu(fs());)_a();return ah(a,Ji)}function _2(a){return h2(Nd("",null,null,null,[""],a=d2(a),0,[0],a))}function Nd(a,e,i,s,l,c,d,h,p){for(var m=0,_=0,g=d,v=0,S=0,b=0,C=1,y=1,M=1,R=0,I="",N=l,k=c,L=s,P=I;y;)switch(b=R,R=_a()){case 40:if(b!=108&&Pn(P,g-1)==58){Cd(P+=Ct(Vm(R),"&","&\f"),"&\f",ub(m?h[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:P+=Vm(R);break;case 9:case 10:case 13:case 32:P+=p2(b);break;case 92:P+=m2(Dd()-1,7);continue;case 47:switch(fs()){case 42:case 47:iu(x2(g2(_a(),Dd()),e,i,p),p),(hu(b||1)==5||hu(fs()||1)==5)&&ha(P)&&io(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*C:h[m++]=ha(P)*M;case 125*C:case 59:case 0:switch(R){case 0:case 125:y=0;case 59+_:M==-1&&(P=Ct(P,/\f/g,"")),S>0&&(ha(P)-g||C===0&&b===47)&&iu(S>32?YS(P+";",s,i,g-1,p):YS(Ct(P," ","")+";",s,i,g-2,p),p);break;case 59:P+=";";default:if(iu(L=WS(P,e,i,m,_,l,h,I,N=[],k=[],g,c),c),R===123)if(_===0)Nd(P,e,L,L,N,c,g,h,k);else{switch(v){case 99:if(Pn(P,3)===110)break;case 108:if(Pn(P,2)===97)break;default:_=0;case 100:case 109:case 115:}_?Nd(a,L,L,s&&iu(WS(a,L,L,0,0,l,h,I,l,N=[],g,k),k),l,k,g,h,s?N:k):Nd(P,L,L,L,[""],k,0,h,k)}}m=_=S=0,C=M=1,I=P="",g=d;break;case 58:g=1+ha(P),S=b;default:if(C<1){if(R==123)--C;else if(R==125&&C++==0&&f2()==125)continue}switch(P+=uv(R),R*C){case 38:M=_>0?1:(P+="\f",-1);break;case 44:h[m++]=(ha(P)-1)*M,M=1;break;case 64:fs()===45&&(P+=Vm(_a())),v=fs(),_=g=ha(I=P+=v2(Dd())),R++;break;case 45:b===45&&ha(P)==2&&(C=0)}}return c}function WS(a,e,i,s,l,c,d,h,p,m,_,g){for(var v=l-1,S=l===0?c:[""],b=db(S),C=0,y=0,M=0;C<s;++C)for(var R=0,I=io(a,v+1,v=ub(y=d[C])),N=a;R<b;++R)(N=fb(y>0?S[R]+" "+I:Ct(I,/&\f/g,S[R])))&&(p[M++]=N);return ih(a,e,i,l===0?th:h,p,m,_,g)}function x2(a,e,i,s){return ih(a,e,i,lb,uv(u2()),io(a,2,-2),0,s)}function YS(a,e,i,s,l){return ih(a,e,i,cv,io(a,0,s),io(a,s+1,-1),s,l)}function pb(a,e,i){switch(l2(a,e)){case 5103:return Yt+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Yt+a+a;case 4855:return Yt+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return lu+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Yt+a+lu+a+dn+a+a;case 5936:switch(Pn(a,e+11)){case 114:return Yt+a+dn+Ct(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Yt+a+dn+Ct(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Yt+a+dn+Ct(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Yt+a+dn+a+a;case 6165:return Yt+a+dn+"flex-"+a+a;case 5187:return Yt+a+Ct(a,/(\w+).+(:[^]+)/,Yt+"box-$1$2"+dn+"flex-$1$2")+a;case 5443:return Yt+a+dn+"flex-item-"+Ct(a,/flex-|-self/g,"")+(hr(a,/flex-|baseline/)?"":dn+"grid-row-"+Ct(a,/flex-|-self/g,""))+a;case 4675:return Yt+a+dn+"flex-line-pack"+Ct(a,/align-content|flex-|-self/g,"")+a;case 5548:return Yt+a+dn+Ct(a,"shrink","negative")+a;case 5292:return Yt+a+dn+Ct(a,"basis","preferred-size")+a;case 6060:return Yt+"box-"+Ct(a,"-grow","")+Yt+a+dn+Ct(a,"grow","positive")+a;case 4554:return Yt+Ct(a,/([^-])(transform)/g,"$1"+Yt+"$2")+a;case 6187:return Ct(Ct(Ct(a,/(zoom-|grab)/,Yt+"$1"),/(image-set)/,Yt+"$1"),a,"")+a;case 5495:case 3959:return Ct(a,/(image-set\([^]*)/,Yt+"$1$`$1");case 4968:return Ct(Ct(a,/(.+:)(flex-)?(.*)/,Yt+"box-pack:$3"+dn+"flex-pack:$3"),/space-between/,"justify")+Yt+a+a;case 4200:if(!hr(a,/flex-|baseline/))return dn+"grid-column-align"+io(a,e)+a;break;case 2592:case 3360:return dn+Ct(a,"template-","")+a;case 4384:case 3616:return i&&i.some(function(s,l){return e=l,hr(s.props,/grid-\w+-end/)})?~Cd(a+(i=i[e].value),"span",0)?a:dn+Ct(a,"-start","")+a+dn+"grid-row-span:"+(~Cd(i,"span",0)?hr(i,/\d+/):+hr(i,/\d+/)-+hr(a,/\d+/))+";":dn+Ct(a,"-start","")+a;case 4896:case 4128:return i&&i.some(function(s){return hr(s.props,/grid-\w+-start/)})?a:dn+Ct(Ct(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Ct(a,/(.+)-inline(.+)/,Yt+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ha(a)-1-e>6)switch(Pn(a,e+1)){case 109:if(Pn(a,e+4)!==45)break;case 102:return Ct(a,/(.+:)(.+)-([^]+)/,"$1"+Yt+"$2-$3$1"+lu+(Pn(a,e+3)==108?"$3":"$2-$3"))+a;case 115:return~Cd(a,"stretch",0)?pb(Ct(a,"stretch","fill-available"),e,i)+a:a}break;case 5152:case 5920:return Ct(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,c,d,h,p,m){return dn+l+":"+c+m+(d?dn+l+"-span:"+(h?p:+p-+c)+m:"")+a});case 4949:if(Pn(a,e+6)===121)return Ct(a,":",":"+Yt)+a;break;case 6444:switch(Pn(a,Pn(a,14)===45?18:11)){case 120:return Ct(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Yt+(Pn(a,14)===45?"inline-":"")+"box$3$1"+Yt+"$2$3$1"+dn+"$2box$3")+a;case 100:return Ct(a,":",":"+dn)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ct(a,"scroll-","scroll-snap-")+a}return a}function kd(a,e){for(var i="",s=0;s<a.length;s++)i+=e(a[s],s,a,e)||"";return i}function y2(a,e,i,s){switch(a.type){case o2:if(a.children.length)break;case r2:case s2:case cv:return a.return=a.return||a.value;case lb:return"";case cb:return a.return=a.value+"{"+kd(a.children,s)+"}";case th:if(!ha(a.value=a.props.join(",")))return""}return ha(i=kd(a.children,s))?a.return=a.value+"{"+i+"}":""}function S2(a){var e=db(a);return function(i,s,l,c){for(var d="",h=0;h<e;h++)d+=a[h](i,s,l,c)||"";return d}}function M2(a){return function(e){e.root||(e=e.return)&&a(e)}}function b2(a,e,i,s){if(a.length>-1&&!a.return)switch(a.type){case cv:a.return=pb(a.value,a.length,i);return;case cb:return kd([cs(a,{value:Ct(a.value,"@","@"+Yt)})],s);case th:if(a.length)return c2(i=a.props,function(l){switch(hr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zo(cs(a,{props:[Ct(l,/:(read-\w+)/,":"+lu+"$1")]})),Zo(cs(a,{props:[l]})),ag(a,{props:qS(i,s)});break;case"::placeholder":Zo(cs(a,{props:[Ct(l,/:(plac\w+)/,":"+Yt+"input-$1")]})),Zo(cs(a,{props:[Ct(l,/:(plac\w+)/,":"+lu+"$1")]})),Zo(cs(a,{props:[Ct(l,/:(plac\w+)/,dn+"input-$1")]})),Zo(cs(a,{props:[l]})),ag(a,{props:qS(i,s)});break}return""})}}var Al={};function Hl(a,...e){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${a} for more information.${e.length>0?` Args: ${e.join(", ")}`:""}`)}var km,Xm;const Ul=typeof process<"u"&&Al!==void 0&&(Al.REACT_APP_SC_ATTR||Al.SC_ATTR)||"data-styled",mb="active",gb="data-styled-version",rh="6.6.0",fv=`/*!sc*/
`,cu=typeof window<"u"&&typeof document<"u";if(!Tt.createContext)throw Hl(19);function ZS(a){if(typeof process<"u"&&Al!==void 0){const e=Al[a];if(e!==void 0&&e!=="")return e!=="false"}}const E2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Xm=(km=ZS("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&km!==void 0?km:ZS("SC_DISABLE_SPEEDY"))!==null&&Xm!==void 0?Xm:typeof process<"u"&&Al!==void 0&&!1),T2="sc-keyframes-";let Ud=new Map,Xd=new Map,Ld=1;const Wf=a=>{if(Ud.has(a))return Ud.get(a);for(;Xd.has(Ld);)Ld++;const e=Ld++;return Ud.set(a,e),Xd.set(e,a),e},A2=a=>Xd.get(a),w2=(a,e)=>{Ld=e+1,Ud.set(a,e),Xd.set(e,a)},dv=Object.freeze([]),Ll=Object.freeze({});function R2(a,e,i=Ll){return a.theme!==i.theme&&a.theme||e||i.theme}const C2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D2=/(^-|-$)/g;function vb(a){return a.replace(C2,"-").replace(D2,"")}const N2=/(a)(d)/gi,QS=a=>String.fromCharCode(a+(a>25?39:97));function _b(a){let e,i="";for(e=Math.abs(a);e>52;e=e/52|0)i=QS(e%52)+i;return(QS(e%52)+i).replace(N2,"$1-$2")}const sg=5381,to=(a,e)=>{let i=e.length;for(;i;)a=33*a^e.charCodeAt(--i);return a},xb=a=>to(sg,a);function U2(a){return _b(xb(a)>>>0)}function L2(a){return a.displayName||a.name||"Component"}function og(a){return typeof a=="string"&&!0}function P2(a){return og(a)?`styled.${a}`:`Styled(${L2(a)})`}const yb=Symbol.for("react.memo"),O2=Symbol.for("react.forward_ref"),z2={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},I2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F2={[O2]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[yb]:Sb};function KS(a){return("type"in(e=a)&&e.type.$$typeof)===yb?Sb:"$$typeof"in a?F2[a.$$typeof]:z2;var e}const B2=Object.defineProperty,H2=Object.getOwnPropertyNames,G2=Object.getOwnPropertySymbols,V2=Object.getOwnPropertyDescriptor,k2=Object.getPrototypeOf,X2=Object.prototype;function Mb(a,e,i){if(typeof e!="string"){const s=k2(e);s&&s!==X2&&Mb(a,s,i);const l=H2(e).concat(G2(e)),c=KS(a),d=KS(e);for(let h=0;h<l.length;++h){const p=l[h];if(!(p in I2||i&&i[p]||d&&p in d||c&&p in c)){const m=V2(e,p);try{B2(a,p,m)}catch{}}}}return a}function sh(a){return typeof a=="function"}const j2=Symbol.for("react.forward_ref");function bb(a){return a!=null&&(typeof a=="object"||typeof a=="function")&&a.$$typeof===j2&&"styledComponentId"in a}function au(a,e){return a&&e?a+" "+e:a||e||""}function $S(a,e){return a.join("")}function pu(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function lg(a,e,i=!1){if(!i&&!pu(a)&&!Array.isArray(a))return e;if(Array.isArray(e))for(let s=0;s<e.length;s++)a[s]=lg(a[s],e[s]);else if(pu(e))for(const s in e)a[s]=lg(a[s],e[s]);return a}function Eb(a,e){Object.defineProperty(a,"toString",{value:e})}const q2=class{constructor(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a,this._cGroup=0,this._cIndex=0}indexOfGroup(a){if(a===this._cGroup)return this._cIndex;let e=this._cIndex;if(a>this._cGroup)for(let i=this._cGroup;i<a;i++)e+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=a;i--)e-=this.groupSizes[i];return this._cGroup=a,this._cIndex=e,e}insertRules(a,e){if(a>=this.groupSizes.length){const l=this.groupSizes,c=l.length;let d=c;for(;a>=d;)if(d<<=1,d<0)throw Hl(16,`${a}`);this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(let h=c;h<d;h++)this.groupSizes[h]=0}let i=this.indexOfGroup(a+1),s=0;for(let l=0,c=e.length;l<c;l++)this.tag.insertRule(i,e[l])&&(this.groupSizes[a]++,i++,s++);s>0&&this._cGroup>a&&(this._cIndex+=s)}clearGroup(a){if(a<this.length){const e=this.groupSizes[a],i=this.indexOfGroup(a),s=i+e;this.groupSizes[a]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);e>0&&this._cGroup>a&&(this._cIndex-=e)}}getGroup(a){let e="";if(a>=this.length||this.groupSizes[a]===0)return e;const i=this.groupSizes[a],s=this.indexOfGroup(a),l=s+i;for(let c=s;c<l;c++)e+=this.tag.getRule(c)+fv;return e}},W2=`style[${Ul}][${gb}="${rh}"]`,Y2=new RegExp(`^${Ul}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),JS=a=>typeof ShadowRoot<"u"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11,cg=a=>{if(!a)return document;if(JS(a))return a;if("getRootNode"in a){const e=a.getRootNode();if(JS(e))return e}return document},Z2=(a,e,i)=>{const s=i.split(",");let l;for(let c=0,d=s.length;c<d;c++)(l=s[c])&&a.registerName(e,l)},Q2=(a,e)=>{var i;const s=((i=e.textContent)!==null&&i!==void 0?i:"").split(fv),l=[];for(let c=0,d=s.length;c<d;c++){const h=s[c].trim();if(!h)continue;const p=h.match(Y2);if(p){const m=0|parseInt(p[1],10),_=p[2];m!==0&&(w2(_,m),Z2(a,_,p[3]),a.getTag().insertRules(m,l)),l.length=0}else l.push(h)}},jm=a=>{const i=cg(a.options.target).querySelectorAll(W2);for(let s=0,l=i.length;s<l;s++){const c=i[s];c&&c.getAttribute(Ul)!==mb&&(Q2(a,c),c.parentNode&&c.parentNode.removeChild(c))}};let Ic=!1;function K2(){if(Ic!==!1)return Ic;if(typeof document<"u"){const a=document.head.querySelector('meta[property="csp-nonce"]');if(a)return Ic=a.nonce||a.getAttribute("content")||void 0;const e=document.head.querySelector('meta[name="sc-nonce"]');if(e)return Ic=e.getAttribute("content")||void 0}return Ic=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Tb=(a,e)=>{if(typeof document>"u")throw Hl(20);const i=document.head,s=a||i,l=document.createElement("style"),c=(p=>{const m=Array.from(p.querySelectorAll(`style[${Ul}]`));return m[m.length-1]})(s),d=c!==void 0?c.nextSibling:null;l.setAttribute(Ul,mb),l.setAttribute(gb,rh);const h=e||K2();return h&&l.setAttribute("nonce",h),s.insertBefore(l,d),l},$2=class{constructor(a,e){this.element=Tb(a,e),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let c=0,d=l.length;c<d;c++){const h=l[c];if(h.ownerNode===i)return h}throw Hl(17)})(this.element),this.length=0}insertRule(a,e){try{return this.sheet.insertRule(e,a),this.length++,!0}catch{return!1}}deleteRule(a){this.sheet.deleteRule(a),this.length--}getRule(a){const e=this.sheet.cssRules[a];return e&&e.cssText?e.cssText:""}},J2=class{constructor(a,e){this.element=Tb(a,e),this.nodes=this.element.childNodes,this.length=0}insertRule(a,e){if(a<=this.length&&a>=0){const i=document.createTextNode(e);return this.element.insertBefore(i,this.nodes[a]||null),this.length++,!0}return!1}deleteRule(a){this.element.removeChild(this.nodes[a]),this.length--}getRule(a){return a<this.length?this.nodes[a].textContent:""}};let e1=cu;const e3={isServer:!cu,useCSSOMInjection:!E2};class oh{static registerId(e){return Wf(e)}constructor(e=Ll,i={},s){this.options=Object.assign(Object.assign({},e3),e),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!e.isServer,!this.server&&cu&&e1&&(e1=!1,jm(this)),Eb(this,()=>(l=>{const c=l.getTag(),{length:d}=c;let h="";for(let p=0;p<d;p++){const m=A2(p);if(m===void 0)continue;const _=l.names.get(m);if(_===void 0||!_.size)continue;const g=c.getGroup(p);if(g.length===0)continue;const v=Ul+".g"+p+'[id="'+m+'"]';let S="";for(const b of _)b.length>0&&(S+=b+",");h+=g+v+'{content:"'+S+'"}'+fv}return h})(this))}rehydrate(){!this.server&&cu&&jm(this)}reconstructWithOptions(e,i=!0){const s=new oh(Object.assign(Object.assign({},this.options),e),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&cu&&e.target!==this.options.target&&cg(this.options.target)!==cg(e.target)&&jm(s),s}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new $2(s,l):new J2(s,l))(this.options),new q2(e)));var e}hasNameForId(e,i){var s,l;return(l=(s=this.names.get(e))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(e,i){Wf(e),e.startsWith(T2)&&this.keyframeIds.add(e);const s=this.names.get(e);s?s.add(i):this.names.set(e,new Set([i]))}insertRules(e,i,s){this.registerName(e,i),this.getTag().insertRules(Wf(e),s)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Wf(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Ab=new WeakSet,t3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function n3(a,e){return e==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||a in t3||a.startsWith("--")?String(e).trim():e+"px"}const Zs=47;function t1(a){if(a.charCodeAt(0)===45&&a.charCodeAt(1)===45)return a;let e="";for(let i=0;i<a.length;i++){const s=a.charCodeAt(i);e+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):a[i]}return e.startsWith("ms-")?"-"+e:e}const i3=Symbol.for("sc-keyframes");function a3(a){return typeof a=="object"&&a!==null&&i3 in a}function wb(a){return sh(a)&&!(a.prototype&&a.prototype.isReactComponent)}const Rb=a=>a==null||a===!1||a==="",r3=Symbol.for("react.client.reference");function n1(a){return a.$$typeof===r3}function Cb(a,e){for(const i in a){const s=a[i];a.hasOwnProperty(i)&&!Rb(s)&&(Array.isArray(s)&&Ab.has(s)||sh(s)?e.push(t1(i)+":",s,";"):pu(s)?(e.push(i+" {"),Cb(s,e),e.push("}")):e.push(t1(i)+": "+n3(i,s)+";"))}}function no(a,e,i,s,l=[]){if(Rb(a))return l;const c=typeof a;if(c==="string")return l.push(a),l;if(c==="function"){if(n1(a))return l;if(wb(a)&&e){const d=a(e);return no(d,e,i,s,l)}return l.push(a),l}if(Array.isArray(a)){for(let d=0;d<a.length;d++)no(a[d],e,i,s,l);return l}return bb(a)?(l.push(`.${a.styledComponentId}`),l):a3(a)?(i?(a.inject(i,s),l.push(a.getName(s))):l.push(a),l):n1(a)?l:pu(a)?a.toString!==Object.prototype.toString?(l.push(a.toString()),l):(Cb(a,l),l):(l.push(a.toString()),l)}const s3=xb(rh);class o3{constructor(e,i,s){this.rules=e,this.componentId=i,this.baseHash=to(s3,i),this.baseStyle=s,oh.registerId(i)}generateAndInjectStyles(e,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,s):"";{let c="";for(let d=0;d<this.rules.length;d++){const h=this.rules[d];if(typeof h=="string")c+=h;else if(h)if(wb(h)){const p=h(e);typeof p=="string"?c+=p:p!=null&&p!==!1&&(c+=$S(no(p,e,i,s)))}else c+=$S(no(h,e,i,s))}if(c){this.dynamicNameCache||(this.dynamicNameCache=new Map);const d=s.hash?s.hash+c:c;let h=this.dynamicNameCache.get(d);if(!h){if(h=_b(to(to(this.baseHash,s.hash),c)>>>0),this.dynamicNameCache.size>=200){const p=this.dynamicNameCache.keys().next().value;p!==void 0&&this.dynamicNameCache.delete(p)}this.dynamicNameCache.set(d,h)}if(!i.hasNameForId(this.componentId,h)){const p=s(c,"."+h,void 0,this.componentId);i.insertRules(this.componentId,h,p)}l=au(l,h)}}return l}}const l3=/&/g;function Db(a,e){let i=0;for(;--e>=0&&a.charCodeAt(e)===92;)i++;return!(1&~i)}function qm(a){const e=a.length;let i="",s=0,l=0,c=0,d=!1,h=!1;for(let p=0;p<e;p++){const m=a.charCodeAt(p);if(c!==0||d||m!==Zs||a.charCodeAt(p+1)!==42)if(d)m===42&&a.charCodeAt(p+1)===Zs&&(d=!1,p++);else if(m!==34&&m!==39||Db(a,p)){if(c===0)if(m===123)l++;else if(m===125){if(l--,l<0){h=!0;let _=p+1;for(;_<e;){const g=a.charCodeAt(_);if(g===59||g===10)break;_++}_<e&&a.charCodeAt(_)===59&&_++,l=0,p=_-1,s=_;continue}l===0&&(i+=a.substring(s,p+1),s=p+1)}else m===59&&l===0&&(i+=a.substring(s,p+1),s=p+1)}else c===0?c=m:c===m&&(c=0);else d=!0,p++}return h||l!==0||c!==0?(s<e&&l===0&&c===0&&(i+=a.substring(s)),i):a}function Nb(a,e){const i=e+" ",s=","+i;for(let l=0;l<a.length;l++){const c=a[l];if(c.type==="rule"){c.value=(i+c.value).replaceAll(",",s);const d=c.props,h=[];for(let p=0;p<d.length;p++)h[p]=i+d[p];c.props=h}Array.isArray(c.children)&&c.type!=="@keyframes"&&Nb(c.children,e)}return a}function Ub({options:a=Ll,plugins:e=dv}=Ll){let i,s,l;const c=(v,S,b)=>b.startsWith(s)&&b.endsWith(s)&&b.replaceAll(s,"").length>0?`.${i}`:v,d=e.slice();d.push(v=>{v.type===th&&v.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),v.props[0]=v.props[0].replace(l3,s).replace(l,c))}),a.prefix&&d.push(b2),d.push(y2);let h=[];const p=S2(d.concat(M2(v=>h.push(v)))),m=(v,S="",b="",C="&")=>{i=C,s=S,l=void 0;const y=(function(R){const I=R.indexOf("//")!==-1,N=R.indexOf("}")!==-1;if(!I&&!N)return R;if(!I)return qm(R);const k=R.length;let L="",P=0,E=0,O=0,V=0,F=0,Z=!1;for(;E<k;){const te=R.charCodeAt(E);if(te!==34&&te!==39||Db(R,E))if(O===0)if(te===Zs&&E+1<k&&R.charCodeAt(E+1)===42){for(E+=2;E+1<k&&(R.charCodeAt(E)!==42||R.charCodeAt(E+1)!==Zs);)E++;E+=2}else if(te!==40)if(te!==41)if(V>0)E++;else if(te===42&&E+1<k&&R.charCodeAt(E+1)===Zs)L+=R.substring(P,E),E+=2,P=E,Z=!0;else if(te===Zs&&E+1<k&&R.charCodeAt(E+1)===Zs){for(L+=R.substring(P,E);E<k&&R.charCodeAt(E)!==10;)E++;P=E,Z=!0}else te===123?F++:te===125&&F--,E++;else V>0&&V--,E++;else V++,E++;else E++;else O===0?O=te:O===te&&(O=0),E++}return Z?(P<k&&(L+=R.substring(P)),F===0?L:qm(L)):F===0?R:qm(R)})(v);let M=_2(b||S?b+" "+S+" { "+y+" }":y);return a.namespace&&(M=Nb(M,a.namespace)),h=[],kd(M,p),h},_=a;let g=sg;for(let v=0;v<e.length;v++)e[v].name||Hl(15),g=to(g,e[v].name);return _?.namespace&&(g=to(g,_.namespace)),_?.prefix&&(g=to(g,"p")),m.hash=g!==sg?g.toString():"",m}const c3=new oh,u3=Ub(),hv=Tt.createContext({shouldForwardProp:void 0,styleSheet:c3,stylis:u3,stylisPlugins:void 0});hv.Consumer;function Lb(){return Tt.useContext(hv)}function Pb(a){var e;const i=Lb(),{styleSheet:s}=i,l=Tt.useMemo(()=>{let m=s;return a.sheet?m=a.sheet:a.target?m=m.reconstructWithOptions(a.nonce!==void 0?{target:a.target,nonce:a.nonce}:{target:a.target},!1):a.nonce!==void 0&&(m=m.reconstructWithOptions({nonce:a.nonce})),a.disableCSSOMInjection&&(m=m.reconstructWithOptions({useCSSOMInjection:!1})),m},[a.disableCSSOMInjection,a.nonce,a.sheet,a.target,s]),c=Tt.useMemo(()=>{var m;return a.stylisPlugins===void 0&&a.namespace===void 0&&a.enableVendorPrefixes===void 0?i.stylis:Ub({options:{namespace:a.namespace,prefix:a.enableVendorPrefixes},plugins:(m=a.stylisPlugins)!==null&&m!==void 0?m:i.stylisPlugins})},[a.enableVendorPrefixes,a.namespace,a.stylisPlugins,i.stylis,i.stylisPlugins]),d="shouldForwardProp"in a?a.shouldForwardProp:i.shouldForwardProp,h=(e=a.stylisPlugins)!==null&&e!==void 0?e:i.stylisPlugins,p=Tt.useMemo(()=>({shouldForwardProp:d,styleSheet:l,stylis:c,stylisPlugins:h}),[d,l,c,h]);return Tt.createElement(hv.Provider,{value:p},a.children)}const Ob=Tt.createContext(void 0);Ob.Consumer;const Wm={};function f3(a,e){const i=typeof a!="string"?"sc":vb(a);Wm[i]=(Wm[i]||0)+1;const s=i+"-"+U2(rh+i+Wm[i]);return e?e+"-"+s:s}function d3(a,e,i){const s=bb(a),l=a,c=!og(a),{attrs:d=dv,componentId:h=f3(e.displayName,e.parentComponentId),displayName:p=P2(a)}=e,m=e.displayName&&e.componentId?vb(e.displayName)+"-"+e.componentId:e.componentId||h,_=s&&l.attrs?l.attrs.concat(d).filter(Boolean):d;let{shouldForwardProp:g}=e;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(e.shouldForwardProp){const y=e.shouldForwardProp;g=(M,R)=>C(M,R)&&y(M,R)}else g=C}const v=new o3(i,m,s?l.componentStyle:void 0);function S(C,y){return(function(M,R,I){const{attrs:N,componentStyle:k,defaultProps:L,foldedComponentIds:P,styledComponentId:E,target:O}=M,V=Tt.useContext(Ob),F=Lb(),Z=M.shouldForwardProp||F.shouldForwardProp,te=R2(R,V,L)||Ll,[de,q]=(function(be,Le,lt){const H=Object.assign(Object.assign({},Le),{className:void 0,theme:lt});let ue=null;const ee=be.length>1;for(let pe=0;pe<be.length;pe++){const fe=be[pe],De=sh(fe)?fe(ee?Object.assign({},H):H):fe;for(const we in De)we==="className"?H.className=au(H.className,De[we]):we==="style"?H.style=Object.assign(Object.assign({},H.style),De[we]):De[we]===void 0?we in H&&(H[we]!==void 0&&(ue||(ue=[])).push(we),H[we]=void 0):H[we]=De[we]}return"className"in Le&&typeof Le.className=="string"&&(H.className=au(H.className,Le.className)),[H,ue]})(N,R,te),G=k.generateAndInjectStyles(de,F.styleSheet,F.stylis),X=de.as||O,K=og(X),he=(function(be,Le,lt,H,ue,ee){const pe={};for(const fe in be)fe[0]==="$"||fe==="as"||fe==="theme"&&be.theme===lt||(fe==="forwardedAs"?be.forwardedAs!==void 0&&(pe.as=be.forwardedAs):be[fe]===void 0?fe==="className"||ue||ee!==null&&ee.indexOf(fe)!==-1||H&&!H(fe,Le)||(pe[fe]=void 0):H&&!H(fe,Le)||(pe[fe]=be[fe]));return pe})(de,X,te,Z,K,q);let me=au(P,E);return G&&(me+=" "+G),de.className&&(me+=" "+de.className),he[K&&X.includes("-")?"class":"className"]=me,I&&(he.ref=I),xt.createElement(X,he)})(b,C,y)}S.displayName=p;let b=Tt.forwardRef(S);return b.attrs=_,b.componentStyle=v,b.displayName=p,b.shouldForwardProp=g,b.foldedComponentIds=s?au(l.foldedComponentIds,l.styledComponentId):"",b.styledComponentId=m,b.target=s?l.target:a,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(y,...M){for(const R of M)lg(y,R,!0);return y})({},l.defaultProps,C):C}}),Eb(b,()=>`.${b.styledComponentId}`),c&&Mb(b,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var h3=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function i1(a,e){const i=[a[0]];for(let s=0,l=e.length;s<l;s+=1)i.push(e[s],a[s+1]);return i}const a1=a=>(Ab.add(a),a);function p3(a,...e){if(sh(a)||pu(a))return a1(no(i1(dv,[a,...e])));const i=a;return e.length===0&&i.length===1&&typeof i[0]=="string"?no(i):a1(no(i1(i,e)))}function ug(a,e,i=Ll){if(!e)throw Hl(1,e);const s=(l,...c)=>a(e,i,p3(l,...c));return s.attrs=l=>ug(a,e,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>ug(a,e,Object.assign(Object.assign({},i),l)),s}const zb=a=>ug(d3,a),Ke=zb;h3.forEach(a=>{Ke[a]=zb(a)});const Ce={textWhite:"#EDEDED",textGrey:"#9C9C9C",textTertiary:"#6B6B6E",dangerRed:"rgba(243, 151, 143, 1)",dangerRedPressed:"rgba(240, 97, 84,1)",accent:"#2D7FF9",accentGlow:"rgba(45, 127, 249, 0.35)",panelBackground:"rgba(38, 38, 38, 0.72)",panelBorder:"rgba(61, 61, 63, 0.7)",buttonBackground:"rgba(61, 61, 63, 0.6)",buttonPressed:"rgba(61, 61, 63, 1)",gradientGreyTranslucent:"linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))"},kn={height:"30px",minWidth:"30px",fontSize:"14px",radiusMiddle:"3px",radiusSolo:"10px",radiusFirst:"10px 3px 3px 10px",radiusLast:"3px 10px 10px 3px",widthLong:"70px",gap:"3px"},r1=Ke.button`
  background: ${Ce.gradientGreyTranslucent};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${Ce.textWhite};
  border: 1px solid transparent;
  border-radius: ${kn.radiusMiddle};
  font-size: ${kn.fontSize};
  height: ${kn.height};
  min-width: ${kn.minWidth};
  transition: all 0.2s ease-in-out;
  text-transform: none;
  box-shadow: none;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:first-child {
    border-radius: ${({$reverse:a})=>a?kn.radiusLast:kn.radiusFirst};
  }

  &:last-child {
    border-radius: ${({$reverse:a})=>a?kn.radiusFirst:kn.radiusLast};
  }

  &:first-child:last-child {
    border-radius: ${kn.radiusSolo};
  }
`,fg=Ke.div`
  padding: 4px;
  display: flex;
  gap: 2px;
  background-color: ${Ce.panelBackground};
  border: 1px solid ${Ce.panelBorder};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  justify-content: center;
  pointer-events: all;
  border-radius: 14px;
  align-items: center;
`,ei=Ke.button`
  background-color: ${({$active:a,$open:e})=>a?"rgba(45, 127, 249, 0.18)":e?"rgba(255, 255, 255, 0.1)":"transparent"};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({$active:a})=>a?Ce.accent:Ce.textWhite};
  border-radius: 8px;
  height: 28px;
  min-width: 28px;
  padding: 0 6px;
  transition: all 0.15s ease-in-out;
  text-transform: none;
  box-shadow: none;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:hover:not(:disabled) {
    background-color: ${({$active:a,$open:e})=>a?"rgba(45, 127, 249, 0.24)":e?"rgba(255, 255, 255, 0.14)":"rgba(255, 255, 255, 0.06)"};
  }

  &:active:not(:disabled) {
    background-color: ${({$active:a,$open:e})=>a?"rgba(45, 127, 249, 0.32)":e?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.1)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${Ce.accent};
    outline-offset: 1px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  &:disabled:hover,
  &:disabled:active {
    background-color: transparent;
  }
`,Qs=Ke.div`
  background-color: ${({$pressed:a})=>a?Ce.buttonPressed:Ce.buttonBackground};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Ce.textWhite};
  border-radius: 8px;
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  height: 30px;
  width: 30px;
  transition: all 0.2s ease-in-out;
`,jd=Ke.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`,pv=Ke.div`
  flex: none;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${Ce.panelBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 9px;
  font-weight: 600;
  color: ${Ce.textGrey};
`;Ke.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 3px;
  justify-content: flex-start;
  flex-direction: ${({$reverse:a})=>a?"row-reverse":"row"};

  &:last-child {
    margin-bottom: 0;
  }
`;Ke.div`
  display: flex;
  flex-direction: ${({$reverse:a})=>a?"row-reverse":"row"};
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: ${({$reverse:a})=>a?"0 5px 0 0":"0 0 0 5px"};
  gap: 3px;
`;Ke.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  pointer-events: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin: 0 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;Ke.div`
  position: absolute;
  background-color: ${Ce.accent};
  box-shadow: 0 0 8px ${Ce.accentGlow};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  pointer-events: auto;
`;Ke.input.attrs({type:"range"})`
  -webkit-appearance: none;
  appearance: none;
  background: ${Ce.gradientGreyTranslucent};
  border: none;
  height: 100%;
  width: ${kn.widthLong};
  cursor: pointer;
  margin: 0;
  transition: all 0.2s ease-in-out;
  border-radius: ${({$reverse:a})=>a?kn.radiusFirst:kn.radiusLast};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 30px;
    background-color: ${Ce.accent};
    border-radius: ${kn.radiusMiddle};
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 30px;
    background-color: ${Ce.accent};
    border-radius: ${kn.radiusMiddle};
  }

  &::-ms-thumb {
    width: 8px;
    height: 24px;
    background-color: ${Ce.accent};
    border-radius: ${kn.radiusMiddle};
  }
`;Ke.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$reverse:a})=>a?"flex-start":"flex-end"};
  justify-content: center;
  margin: ${({$reverse:a})=>a?"2px -26px 0 0":"2px 0 0 -26px"};
`;Ke.div`
  display: flex;
  flex-direction: ${({$reverse:a})=>a?"row-reverse":"row"};
  align-items: center;
  justify-content: center;
`;const je={labelW:"40px",fieldW:"52px",gap:"4px",rowH:"26px",cellRadius:"8px",inset:"rgba(0, 0, 0, 0.25)",accentSoft:"rgba(45, 127, 249, 0.45)",accentTint:"rgba(45, 127, 249, 0.18)"},lh=Ke.span`
  flex: none;
  width: ${je.labelW};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  color: ${Ce.textGrey};
`,ch=Ke.div`
  position: fixed;
  padding: 5px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: ${Ce.textWhite};
  pointer-events: all;
  background-color: ${Ce.panelBackground};
  border: 1px solid ${Ce.panelBorder};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,pa=Ke.hr`
  width: ${({$horizontal:a=!0})=>a?"unset":"1px"};
  height: ${({$horizontal:a=!0})=>a?"1px":"unset"};
  background-color: ${Ce.panelBorder};
  margin: 5px 3px;
  border: none;
`,hs=Ke.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({$isRed:a})=>a?Ce.dangerRed:Ce.textWhite};
  font-size: 12px;
  padding: 3px;
  text-transform: none;
  box-shadow: none;

  &:hover {
    color: ${({$isRed:a})=>a?Ce.dangerRedPressed:"#ffffff"};
  }

  &:active {
    color: ${({$isRed:a})=>a?Ce.dangerRedPressed:"#ffffff"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${Ce.accent};
    outline-offset: 1px;
  }
`,m3=Ke.div`
  display: flex;
  flex-direction: row;
  gap: ${je.gap};
  height: ${je.rowH};
`,dg=Ke.input.attrs({type:"text"})`
  width: ${je.fieldW};
  outline: none;
  background: ${je.inset};
  border: 1px solid ${Ce.panelBorder};
  border-radius: ${je.cellRadius};
  height: ${je.rowH};
  color: ${Ce.textWhite};
  padding: 0 10px 0 5px;
  box-sizing: border-box;
  font-size: 10px;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

  &:focus-visible {
    outline: 2px solid ${Ce.accent};
    outline-offset: 1px;
  }

  &:read-only {
    background: ${je.inset};
    cursor: default;
  }

  &:invalid {
    background-color: ${Ce.dangerRed};
  }
`,hg=Ke.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${Ce.textGrey};
  font-size: 10px;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
`;const g3=a=>a?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function v3(a,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:g3(a),size:24,node:e,...i.length>0?{aliases:i}:{}}}const _3=a=>{let e="",i=!1;for(const s of a){if(s==="-"||s==="_"||s<=" "){i=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=i?s.toUpperCase():s,i=!1}return e};const x3=a=>{const e=_3(a);return e.charAt(0).toUpperCase()+e.slice(1)};const pg=(...a)=>a.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const Is={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Ym(a){return a!=null}function y3(a,e={}){const i=e.attributeNames??{},s=v=>i[v]??v,l=a.size??a.width??Is.width,c=a.size??a.height??Is.height,d=a.aliases?.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`)??[],h=[...a.name?[`lucide-${a.name}`]:[],...d],p=e.className?.split(" ").filter(Boolean)??[],m=e.includeDefaultClasses===!1?pg(...p):pg("lucide",...h,...p),_=e.absoluteStrokeWidth?Number(e.strokeWidth??Is["stroke-width"])*Number(a.size??a.width??Is.width)/Number(e.size??e.width??Is.width):e.strokeWidth??Is["stroke-width"];return["svg",{...Object.entries(Is).reduce((v,[S,b])=>(v[s(S)]=b,v),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&Ym(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&Ym(e.width)&&{[s("width")]:e.width},..."height"in e&&Ym(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:_,...m&&{[s("class")]:m},[s("viewBox")]:`0 0 ${l} ${c}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},a.node.map(v=>{const[S,b,C]=v,y=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...b}:b;return C?[S,y,C]:[S,y]})]}function S3(a,e={}){return y3(a,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}const M3=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},b3=xt.createContext({}),E3=()=>xt.useContext(b3),T3=xt.forwardRef(({color:a,size:e,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:c,nonScalingStroke:d,className:h="",children:p,iconNode:m=[],icon:_={node:m,aliases:[],size:24},...g},v)=>{const{size:S=24,strokeWidth:b=2,absoluteStrokeWidth:C=!1,nonScalingStroke:y=!1,color:M="currentColor",className:R=""}=E3()??{},I=!!p||M3(g),[N,k,L=[]]=S3(_,{color:a??M,width:i??e??S,height:s??e??S,strokeWidth:l??b,absoluteStrokeWidth:c??C,nonScalingStroke:d??y,className:pg(R,h),hasA11yProp:I,attributes:g});return xt.createElement(N,{ref:v,...k},[...L.map(([P,E])=>xt.createElement(P,E)),...Array.isArray(p)?p:[p]])});function Ut(a,e=[],i=[]){const s=typeof a=="string"?v3(a,e,i):a,l=xt.forwardRef(({className:c,...d},h)=>xt.createElement(T3,{ref:h,icon:s,className:c,...d}));return s.name&&(l.displayName=x3(s.name)),l}const Ib={name:"armchair",size:24,node:[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]};Ib.node;const A3=Ut(Ib);const Fb={name:"arrow-big-up",size:24,node:[["path",{d:"M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z",key:"106j91"}]]};Fb.node;const w3=Ut(Fb);const Bb={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};Bb.node;const R3=Ut(Bb);const Hb={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Hb.node;const C3=Ut(Hb);const Gb={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Gb.node;const D3=Ut(Gb);const Vb={name:"arrow-right-to-line",size:24,node:[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]};Vb.node;const N3=Ut(Vb);const kb={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};kb.node;const U3=Ut(kb);const Xb={name:"atom",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]};Xb.node;const L3=Ut(Xb);const jb={name:"ban",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]]};jb.node;const P3=Ut(jb);const qb={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};qb.node;const O3=Ut(qb);const Wb={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};Wb.node;const z3=Ut(Wb);const Yb={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Yb.node;const I3=Ut(Yb);const Zb={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Zb.node;const F3=Ut(Zb);const Qb={name:"circle-dot",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};Qb.node;const B3=Ut(Qb);const Kb={name:"circle-play",size:24,node:[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["play-circle"]};Kb.node;const H3=Ut(Kb);const $b={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};$b.node;const G3=Ut($b);const Jb={name:"corner-down-left",size:24,node:[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]};Jb.node;const V3=Ut(Jb);const eE={name:"delete",size:24,node:[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]};eE.node;const k3=Ut(eE);const tE={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};tE.node;const X3=Ut(tE);const nE={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};nE.node;const j3=Ut(nE);const iE={name:"glasses",size:24,node:[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]};iE.node;const q3=Ut(iE);const aE={name:"hand",size:24,node:[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]};aE.node;const W3=Ut(aE);const rE={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};rE.node;const Y3=Ut(rE);const sE={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};sE.node;const Z3=Ut(sE);const oE={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};oE.node;const Q3=Ut(oE);const lE={name:"mouse-left",size:24,node:[["path",{d:"M12 7.318V10",key:"17s7lh"}],["path",{d:"M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7",key:"imk5ea"}],["circle",{cx:"7",cy:"4",r:"2",key:"ra7k3"}]]};lE.node;const K3=Ut(lE);const cE={name:"mouse-right",size:24,node:[["path",{d:"M12 7.318V10",key:"17s7lh"}],["path",{d:"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7",key:"2es5nn"}],["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}]]};cE.node;const $3=Ut(cE);const uE={name:"mouse",size:24,node:[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]};uE.node;const J3=Ut(uE);const fE={name:"pin",size:24,node:[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]};fE.node;const eR=Ut(fE);const dE={name:"plug",size:24,node:[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",key:"1xoxul"}],["path",{d:"M9 8V2",key:"14iosj"}]]};dE.node;const tR=Ut(dE);const hE={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};hE.node;const nR=Ut(hE);const pE={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};pE.node;const iR=Ut(pE);const mE={name:"scan-eye",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]};mE.node;const aR=Ut(mE);const gE={name:"scan",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]};gE.node;const rR=Ut(gE);const vE={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};vE.node;const sR=Ut(vE);const _E={name:"shapes",size:24,node:[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]};_E.node;const oR=Ut(_E);const xE={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};xE.node;const lR=Ut(xE);const yE={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};yE.node;const cR=Ut(yE),uR={"rotate-ccw":nR,"circle-play":H3,"gamepad-2":j3,hand:W3,eye:X3,keyboard:Y3,armchair:A3,layers:Z3,box:O3,shapes:oR,save:iR,scan:rR,"scan-eye":aR,"log-out":Q3,atom:L3,bug:z3,x:cR,settings:sR,"circle-x":G3,plug:tR,glasses:q3,video:lR,pin:eR,"circle-dot":B3,"chevron-left":I3,"chevron-right":F3,ban:P3,mouse:J3,"mouse-left":K3,"mouse-right":$3,"corner-down-left":V3,"arrow-big-up":w3,"arrow-up":U3,"arrow-down":R3,"arrow-left":C3,"arrow-right":D3,"arrow-right-to-line":N3,delete:k3},fR=({size:a,color:e,style:i})=>U.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 14 14",fill:"none",style:i,children:[U.jsx("path",{fill:e,d:"M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"}),U.jsx("path",{fill:e,fillRule:"evenodd",d:"M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z"})]}),at=({name:a,size:e=16,color:i="currentColor",strokeWidth:s=2,style:l})=>{if(a==="iwer")return U.jsx(fR,{size:e,color:i,style:l});const c=uR[a];return c?U.jsx(c,{size:e,color:i,strokeWidth:s,style:l}):null},Ia={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:U.jsx(at,{name:"arrow-right-to-line",size:15}),Backspace:U.jsx(at,{name:"delete",size:15}),Enter:U.jsx(at,{name:"corner-down-left",size:15}),ShiftLeft:U.jsx(at,{name:"arrow-big-up",size:15}),ShiftRight:U.jsx(at,{name:"arrow-big-up",size:15}),Space:" ",ArrowUp:U.jsx(at,{name:"arrow-up",size:15}),ArrowDown:U.jsx(at,{name:"arrow-down",size:15}),ArrowLeft:U.jsx(at,{name:"arrow-left",size:15}),ArrowRight:U.jsx(at,{name:"arrow-right",size:15}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:U.jsx(at,{name:"mouse-left",size:15}),MouseRight:U.jsx(at,{name:"mouse-right",size:15})},s1=a=>{let e;const i=new Set,s=(m,_)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const v=e;e=_??(typeof g!="object"||g===null)?g:Object.assign({},e,g),i.forEach(S=>S(e,v))}},l=()=>e,h={setState:s,getState:l,getInitialState:()=>p,subscribe:m=>(i.add(m),()=>i.delete(m))},p=e=a(s,l,h);return h},dR=(a=>a?s1(a):s1),hR=a=>a;function pR(a,e=hR){const i=Tt.useSyncExternalStore(a.subscribe,Tt.useCallback(()=>e(a.getState()),[a,e]),Tt.useCallback(()=>e(a.getInitialState()),[a,e]));return Tt.useDebugValue(i),i}const o1=a=>{const e=dR(a),i=s=>pR(e,s);return Object.assign(i,e),i},uh=(a=>a?o1(a):o1),mR="iwer-prefs";function Pa(a){if(typeof window>"u"||!a)return;const e=window.location.origin==="null"?"*":window.location.origin;window.postMessage({channel:mR,scope:"origin",patch:a},e)}let Yf=null,Qo=null;function Qz(a,e=200){typeof window>"u"||!a||(Qo={...Qo??{},...a},Yf!=null&&clearTimeout(Yf),Yf=setTimeout(()=>{const i=Qo;Qo=null,Yf=null,i&&Pa(i)},e))}let SE=null;function Kz(a){SE=a}function gR(){return SE}const vR={thumbstick:"Press",trigger:"Trig",squeeze:"Grip","x-button":"X","y-button":"Y","a-button":"A","b-button":"B",thumbrest:"Rest",pose:"Pose",pinch:"Pinch"},_R=a=>{var e;return(e=vR[a])!==null&&e!==void 0?e:a},l1={"thumbstick-up":"arrow-up","thumbstick-down":"arrow-down","thumbstick-left":"arrow-left","thumbstick-right":"arrow-right"},xR=["thumbstick-up","thumbstick-down","thumbstick-left","thumbstick-right","thumbstick"],c1=["trigger","squeeze","a-button","b-button","x-button","y-button","thumbrest","pose","pinch"],u1={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE",pinch:"MouseLeft",pose:"KeyF"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight",pinch:"MouseRight",pose:"Backslash"}},mv=uh(a=>({keyMap:u1,bindKey:(e,i,s="Unmapped")=>{Pa({keymap:{[e]:{[i]:s}}}),a(l=>({keyMap:{...l.keyMap,[e]:{...l.keyMap[e],[i]:s}}}))},resetKeyMap:e=>{const i={...u1[e]};Pa({keymap:{[e]:i}}),a(s=>({keyMap:{...s.keyMap,[e]:i}}))}})),yR=Ke.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background-color: ${je.inset};
  border-radius: ${je.cellRadius};
  margin-bottom: ${je.gap};
  color: ${Ce.textTertiary};
  font-size: 10px;
  line-height: 1.3;
`,f1=Ke.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${Ce.textTertiary};
  margin: 4px 0 1px;
`,SR=Ke.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${je.gap};
  height: ${je.rowH};
  margin-bottom: ${je.gap};
`,MR=Ke.div`
  flex: none;
  width: ${je.labelW};
  height: ${je.rowH};
  display: flex;
  align-items: center;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  color: ${Ce.textGrey};
`,bR=Ke.button`
  flex: 1 1 auto;
  height: ${je.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${je.cellRadius};
  border: 1px solid
    ${({$listening:a})=>a?Ce.accent:Ce.panelBorder};
  background-color: ${({$listening:a})=>a?je.accentTint:Ce.buttonBackground};
  color: ${({$listening:a})=>a?Ce.accent:Ce.textWhite};
  cursor: pointer;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12px;
  transition: all 0.12s ease;

  &:hover {
    background-color: ${({$listening:a})=>a?je.accentTint:Ce.buttonPressed};
  }
  &:focus {
    outline: none;
  }
`,ER=Ke.button`
  flex: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: ${Ce.textGrey};
  cursor: pointer;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: ${Ce.textWhite};
  }
  &:focus {
    outline: none;
  }
`,TR=Ke.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: ${je.rowH};
  border: none;
  border-radius: ${je.cellRadius};
  background-color: transparent;
  color: ${Ce.textGrey};
  cursor: pointer;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  font-size: 12px;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: ${Ce.textWhite};
  }
  &:focus {
    outline: none;
  }
`,ME=({handedness:a,actions:e})=>{var i;const{keyMap:s,bindKey:l,resetKeyMap:c}=mv(),[d,h]=xt.useState(null);xt.useEffect(()=>{if(!d)return;const S=y=>{Ia[y.code]&&(l(a,d,y.code),h(null))},b=y=>{const M=y.button===0?"MouseLeft":y.button===2?"MouseRight":null;M&&Ia[M]&&(l(a,d,M),h(null))},C=y=>y.preventDefault();return window.addEventListener("keydown",S),window.addEventListener("mousedown",b),window.addEventListener("contextmenu",C),()=>{window.removeEventListener("keydown",S),window.removeEventListener("mousedown",b),window.removeEventListener("contextmenu",C)}},[d,a,l]);const p=(i=s[a])!==null&&i!==void 0?i:{},m=Object.keys(p).filter(S=>e.includes(S)),_=xR.filter(S=>m.includes(S)),g=m.filter(S=>!S.startsWith("thumbstick")).sort((S,b)=>c1.indexOf(S)-c1.indexOf(b)),v=S=>{const b=Ia[p[S]];return U.jsxs(SR,{children:[U.jsx(MR,{children:l1[S]?U.jsx(at,{name:l1[S],size:14}):_R(S)}),U.jsx(bR,{type:"button",$listening:d===S,onClick:()=>h(d===S?null:S),onContextMenu:C=>C.preventDefault(),title:"Click, then press a key or mouse button",children:d===S?"press a key…":b??"—"}),U.jsx(ER,{type:"button",onClick:()=>l(a,S),onContextMenu:C=>C.preventDefault(),title:"Clear binding",children:U.jsx(at,{name:"ban",size:12})})]},S)};return U.jsxs(U.Fragment,{children:[U.jsx(pa,{}),U.jsxs(yR,{children:[U.jsx(at,{name:"keyboard",size:12}),"Click a binding, then press a key or mouse button"]}),_.length>0&&U.jsx(f1,{children:"Thumbstick"}),_.map(v),g.length>0&&_.length>0&&U.jsx(f1,{children:"Buttons"}),g.map(v),U.jsx(pa,{}),U.jsxs(TR,{type:"button",onClick:()=>c(a),children:[U.jsx(at,{name:"rotate-ccw",size:12}),"Reset to defaults"]})]})},Fc=16,AR=Ke.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0;
  margin-bottom: ${je.gap};
`,wR=Ke.div`
  position: relative;
  flex: none;
  width: ${je.fieldW};
  height: ${je.fieldW};
  border-radius: 50%;
  background-color: ${je.inset};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`,RR=Ke.div`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${Ce.accent};
  box-shadow: 0 0 8px ${Ce.accentGlow};
  cursor: grab;
  pointer-events: auto;
`,CR=Ke.div`
  display: flex;
  flex-direction: column;
  gap: ${je.gap};
  flex: 1 1 auto;
  /* Joystick occupies column 1 (= label-width's first field). Offset the X/Y
     stack by one grid gap so the fields land exactly in columns 2 and 3,
     lining up with the Position/Rotation fields above. */
  margin-left: ${je.gap};
`,d1=Ke.div`
  display: flex;
  gap: ${je.gap};
  align-items: center;
`,h1=Ke.div`
  position: relative;
  display: inline-block;
  height: ${je.rowH};
`,DR=Ke.div`
  flex: 1 1 auto;
  height: ${je.rowH};
  border-radius: ${je.cellRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-size: 11px;
  color: ${Ce.textWhite};
  background-color: ${({$active:a})=>a?je.accentTint:je.inset};
  transition: background-color 0.12s ease;
`,p1=Ke.button`
  flex: none;
  width: 22px;
  height: ${je.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({$active:a})=>a?je.accentTint:"transparent"};
  color: ${({$active:a})=>a?Ce.accent:Ce.textGrey};

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:focus {
    outline: none;
  }
`,NR=Ke.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: ${je.gap};
  margin-left: ${je.gap};
`,UR=({xrController:a,pointerLocked:e,buttonId:i,mappedKeyUp:s,mappedKeyDown:l,mappedKeyLeft:c,mappedKeyRight:d,mappedKeyPressed:h})=>{const p=xt.useRef(null),m=xt.useRef({x:0,y:0}),_=xt.useRef(!1),[g,v]=xt.useState({x:0,y:0}),[S,b]=xt.useState(!1),[C,y]=xt.useState(!1),M=xt.useRef(!1);M.current=C;const[R,I]=xt.useState(!1),[N,k]=xt.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),L=xt.useRef(N);L.current=N;const P=F=>{const Z=p.current;if(!Z)return;const te=Z.getBoundingClientRect();m.current={x:te.left+te.width/2,y:te.top+te.height/2},_.current=!0,F.preventDefault()};xt.useEffect(()=>{const F=te=>{if(!_.current||!p.current)return;const de=te.clientX-m.current.x,q=te.clientY-m.current.y,G=Math.sqrt(de*de+q*q);let X=de,K=q;if(G>Fc){const be=Math.atan2(q,de);X=Math.cos(be)*Fc,K=Math.sin(be)*Fc}p.current.style.transform=`translate(${X}px, ${K}px)`;const he=X/Fc,me=K/Fc;a.updateAxes(i,he,me),v({x:he,y:me})},Z=()=>{_.current&&(_.current=!1,p.current&&(p.current.style.transform="translate(0, 0)"),a.updateAxes(i,0,0),v({x:0,y:0}))};return document.addEventListener("mousemove",F),document.addEventListener("mouseup",Z),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",Z)}},[i,a]),xt.useEffect(()=>{const F=()=>{S&&!M.current&&(b(!1),a.updateButtonValue(i,0))};return window.addEventListener("mouseup",F),()=>window.removeEventListener("mouseup",F)},[S,i,a]),xt.useEffect(()=>{if(!e)return;const F=K=>{const he=(K.right?1:0)-(K.left?1:0),me=(K.down?1:0)-(K.up?1:0),be=Math.sqrt(he*he+me*me);be===0?a.updateAxes(i,0,0):a.updateAxes(i,he/be,me/be)},Z=(K,he)=>{if(!K)return;const me={...L.current};let be=!1;K===s&&(me.up=he,be=!0),K===l&&(me.down=he,be=!0),K===c&&(me.left=he,be=!0),K===d&&(me.right=he,be=!0),K===h&&(me.pressed=he,be=!0,a.updateButtonValue(i,he?1:0)),be&&(k(me),F(me))},te=K=>K.button===0?"MouseLeft":K.button===2?"MouseRight":null,de=K=>Z(K.code,!0),q=K=>Z(K.code,!1),G=K=>Z(te(K),!0),X=K=>Z(te(K),!1);return window.addEventListener("keydown",de),window.addEventListener("keyup",q),window.addEventListener("mousedown",G),window.addEventListener("mouseup",X),()=>{window.removeEventListener("keydown",de),window.removeEventListener("keyup",q),window.removeEventListener("mousedown",G),window.removeEventListener("mouseup",X)}},[e,s,l,c,d,h,i,a]);const E=()=>{C||(b(!0),a.updateButtonValue(i,1))},O=()=>{const F=!C;y(F),b(F),a.updateButtonValue(i,F?1:0)},V=()=>{const F=!R;I(F),a.updateButtonTouch(i,F)};return e?U.jsxs(U.Fragment,{children:[U.jsxs(jd,{children:[U.jsx(pv,{children:"Stick"}),U.jsx(Qs,{$pressed:N.up,children:Ia[s]}),U.jsx(Qs,{$pressed:N.pressed,children:Ia[h]})]}),U.jsxs(jd,{children:[U.jsx(Qs,{$pressed:N.left,children:Ia[c]}),U.jsx(Qs,{$pressed:N.down,children:Ia[l]}),U.jsx(Qs,{$pressed:N.right,children:Ia[d]})]})]}):U.jsxs(AR,{children:[U.jsx(lh,{children:"Stick"}),U.jsx(wR,{children:U.jsx(RR,{ref:p,onMouseDown:P})}),U.jsxs(CR,{children:[U.jsxs(d1,{children:[U.jsxs(h1,{children:[U.jsx(dg,{readOnly:!0,value:g.x.toFixed(2)}),U.jsx(hg,{children:"X"})]}),U.jsxs(h1,{children:[U.jsx(dg,{readOnly:!0,value:g.y.toFixed(2)}),U.jsx(hg,{children:"Y"})]})]}),U.jsxs(d1,{style:{gap:0},children:[U.jsx(DR,{$active:S||C,onMouseDown:E,children:"click"}),U.jsxs(NR,{children:[U.jsx(p1,{$active:C,onClick:O,type:"button",title:"Hold (latch)",children:U.jsx(at,{name:"pin",size:12})}),U.jsx(p1,{$active:R,onClick:V,type:"button",title:"Toggle touch state",children:U.jsx(at,{name:"circle-dot",size:12})})]})]})]})]})},LR=Ke.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  height: ${je.rowH};
  margin-bottom: ${je.gap};

  &:last-child {
    margin-bottom: 0;
  }
`,PR=Ke.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: ${je.gap};
  margin-left: ${je.gap};
`,OR=Ke.div`
  position: relative;
  flex: 1 1 auto;
  height: ${je.rowH};
  border-radius: ${je.cellRadius};
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  user-select: none;
  background-color: ${({$active:a})=>a?je.accentTint:je.inset};
  transition: background-color 0.12s ease;
`,zR=Ke.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${je.accentSoft};
  pointer-events: none;
`,IR=Ke.span`
  position: relative;
  z-index: 1;
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 11px;
  color: ${Ce.textWhite};
  pointer-events: none;
`,m1=Ke.button`
  flex: none;
  width: 22px;
  height: ${je.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({$active:a})=>a?je.accentTint:"transparent"};
  color: ${({$active:a})=>a?Ce.accent:Ce.textGrey};
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:focus {
    outline: none;
  }
`,bE=({label:a,analog:e,supportsTouch:i,mappedKey:s,pointerLocked:l,onValue:c,onTouch:d})=>{const[h,p]=xt.useState(0),[m,_]=xt.useState(!1),[g,v]=xt.useState(!1),[S,b]=xt.useState(!1),C=xt.useRef(null),y=xt.useRef(!1),M=xt.useRef(!1);M.current=m;const R=P=>{const E=Math.min(1,Math.max(0,P));p(E),c(E)};xt.useEffect(()=>{if(!l)return;const P=te=>{c(te?1:0),b(te)},E=te=>s==="MouseLeft"&&te.button===0||s==="MouseRight"&&te.button===2,O=te=>{te.code===s&&P(!0)},V=te=>{te.code===s&&P(!1)},F=te=>{E(te)&&P(!0)},Z=te=>{E(te)&&P(!1)};return window.addEventListener("keydown",O),window.addEventListener("keyup",V),window.addEventListener("mousedown",F),window.addEventListener("mouseup",Z),()=>{window.removeEventListener("keydown",O),window.removeEventListener("keyup",V),window.removeEventListener("mousedown",F),window.removeEventListener("mouseup",Z)}},[s,l,c]),xt.useEffect(()=>{const P=O=>{if(!y.current||!e||!C.current)return;const V=C.current.getBoundingClientRect();R((O.clientX-V.left)/V.width)},E=()=>{y.current&&(y.current=!1,M.current||R(0))};return window.addEventListener("mousemove",P),window.addEventListener("mouseup",E),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",E)}},[e]);const I=()=>{m||(y.current=!0,R(1))},N=()=>{const P=!m;_(P),R(P?h>0?h:1:0)},k=()=>{const P=!g;v(P),d?.(P)};if(l)return U.jsxs(jd,{children:[U.jsx(pv,{children:a}),U.jsx(Qs,{$pressed:S,children:Ia[s]})]});const L=e?h.toFixed(2):m?"hold":"press";return U.jsxs(LR,{children:[U.jsx(lh,{children:a}),U.jsxs(OR,{ref:C,$active:!e&&h>0,onMouseDown:I,title:"Click to press; drag to set value",children:[e&&U.jsx(zR,{style:{width:`${h*100}%`}}),U.jsx(IR,{children:L})]}),U.jsxs(PR,{children:[U.jsx(m1,{$active:m,onClick:N,title:"Hold (latch)",type:"button",children:U.jsx(at,{name:"pin",size:12})}),i&&U.jsx(m1,{$active:g,onClick:k,title:"Toggle touch state",type:"button",children:U.jsx(at,{name:"circle-dot",size:12})})]})]})};function Ko(a,e){const i=Math.pow(10,e);return Math.round(a*i)/i}const FR=Ke.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({$mb:a})=>a??"0"};
`,BR=Ke.div`
  position: relative;
  display: inline-block;
  height: 26px;
`,mu=({vector:a,label:e="",multiplier:i=1,precision:s=2,onValidInput:l=()=>{},marginBottom:c="0"})=>{const[d,h]=xt.useState({x:(a.x/i).toFixed(s),y:(a.y/i).toFixed(s),z:(a.z/i).toFixed(s)}),p=xt.useRef({x:Ko(a.x/i,s),y:Ko(a.y/i,s),z:Ko(a.z/i,s)}),m=xt.useRef(null),_=xt.useRef({x:0,y:0,z:0}),g=()=>{const S=_.current;S.x=Ko(a.x/i,s),S.y=Ko(a.y/i,s),S.z=Ko(a.z/i,s);const{x:b,y:C,z:y}=p.current;(S.x!==b||S.y!==C||S.z!==y)&&(p.current={x:S.x,y:S.y,z:S.z},h({x:S.x.toFixed(s),y:S.y.toFixed(s),z:S.z.toFixed(s)})),m.current=requestAnimationFrame(g)};xt.useEffect(()=>(m.current=requestAnimationFrame(g),()=>{m.current&&cancelAnimationFrame(m.current)}),[a,i,s]);const v=S=>b=>{const C=b.target.value,y=parseFloat(C);h(M=>({...M,[S]:C})),isNaN(y)||(p.current[S]=y,a[S]=y*i,l())};return U.jsxs(FR,{$mb:c,children:[U.jsx(lh,{children:e}),U.jsx(m3,{children:["x","y","z"].map(S=>U.jsxs(BR,{children:[U.jsx(dg,{value:d[S],onChange:v(S),className:parseFloat(d[S])!==p.current[S]?"invalid":void 0}),U.jsx(hg,{children:S.toUpperCase()})]},`${e}-${S}`))})]})},g1={thumbstick:"Stick",trigger:"Trig",squeeze:"Grip","a-button":"A","b-button":"B","x-button":"X","y-button":"Y",thumbrest:"Rest",menu:"Menu"};function HR(a){return g1[a]?g1[a]:a.charAt(0).toUpperCase()+a.slice(1).replace(/-button$/,"")}function GR(a){const e=new Set;for(const s of a.axes)s&&s.id&&e.add(s.id);const i=a.buttons.filter(s=>s!==null).map(s=>({id:s.id,type:s.type,hasAxes:e.has(s.id)}));return i.sort((s,l)=>s.hasAxes&&!l.hasAxes?-1:!s.hasAxes&&l.hasAxes?1:0),i}const VR=({controller:a,handle:e,handedness:i,pointerLocked:s})=>{const{keyMap:l}=mv(),[c,d]=Tt.useState(a.connected),[h,p]=Tt.useState(!1),m=GR(a.gamepadConfig),_=m.flatMap(g=>g.hasAxes?[`${g.id}-left`,`${g.id}-right`,`${g.id}-up`,`${g.id}-down`,g.id]:g.id);return Tt.useEffect(()=>{s&&p(!1)},[s]),U.jsxs(ch,{style:i==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!s&&U.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[U.jsxs("div",{style:{fontSize:"14px",fontWeight:600,display:"flex",flexDirection:"row",alignItems:"center",gap:"6px"},children:[U.jsx(at,{name:"gamepad-2",size:15}),"Controller [",i==="left"?"L":"R","]"]}),U.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:c?U.jsxs(U.Fragment,{children:[U.jsx(hs,{title:`Click to ${h?"close":"change"} key bindings`,onClick:()=>p(!h),children:U.jsx(at,{name:"settings",size:14})}),U.jsx(hs,{title:`Click to disconnect ${i} controller`,$isRed:!0,onClick:()=>{a.connected=!1,d(!1)},children:U.jsx(at,{name:"circle-x",size:14})})]}):U.jsx(hs,{title:`Click to reconnect ${i} controller`,onClick:()=>{a.connected=!0,d(!0)},style:{marginLeft:"5px"},children:U.jsx(at,{name:"plug",size:14})})})]}),c&&!s&&U.jsxs(U.Fragment,{children:[!h&&U.jsxs(U.Fragment,{children:[U.jsx(pa,{}),U.jsx(mu,{vector:e.position,label:"Pos",marginBottom:je.gap}),U.jsx(mu,{vector:e.rotation,label:"Rot"})]}),U.jsx(pa,{})]}),c&&(h?U.jsx(ME,{handedness:i,actions:_}):m.map(g=>{const v=l[i];return g.hasAxes?U.jsx(UR,{xrController:a,pointerLocked:s,buttonId:g.id,mappedKeyUp:v[`${g.id}-up`],mappedKeyDown:v[`${g.id}-down`],mappedKeyLeft:v[`${g.id}-left`],mappedKeyRight:v[`${g.id}-right`],mappedKeyPressed:v[g.id]},g.id):U.jsx(bE,{label:HR(g.id),analog:g.type==="analog",supportsTouch:!0,mappedKey:v[g.id],pointerLocked:s,onValue:S=>a.updateButtonValue(g.id,S),onTouch:S=>a.updateButtonTouch(g.id,S)},g.id)}))]},i)},$o=["default","pinch","point"],kR=Ke.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  height: ${je.rowH};
  margin-bottom: ${je.gap};
`,XR=Ke.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${je.gap};
  height: ${je.rowH};
`,v1=Ke.button`
  flex: none;
  width: 22px;
  height: ${je.rowH};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${je.inset};
  color: ${Ce.textGrey};

  &:hover {
    color: ${Ce.textWhite};
  }
  &:focus {
    outline: none;
  }
`,jR=Ke.div`
  flex: 1 1 auto;
  height: ${je.rowH};
  border-radius: ${je.cellRadius};
  background-color: ${je.inset};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${Ce.textWhite};
`,qR=({hand:a,pointerLocked:e,mappedKey:i})=>{const[s,l]=xt.useState(a.poseId),[c,d]=xt.useState(!1),h=a.inputSource.handedness,p=m=>{const g=($o.indexOf(a.poseId)+$o.length+m)%$o.length;l($o[g]),a.poseId=$o[g],Pa({handPoses:{[h]:$o[g]}})};return xt.useEffect(()=>{const m=b=>i==="MouseLeft"&&b.button===0||i==="MouseRight"&&b.button===2,_=b=>{b.repeat||b.code===i&&(p(1),d(!0))},g=b=>{b.code===i&&d(!1)},v=b=>{m(b)&&(p(1),d(!0))},S=b=>{m(b)&&d(!1)};return e&&(window.addEventListener("keydown",_),window.addEventListener("keyup",g),window.addEventListener("mousedown",v),window.addEventListener("mouseup",S)),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",g),window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",S)}},[i,e,a]),e?U.jsxs(jd,{children:[U.jsx(pv,{children:"Pose"}),U.jsx(Qs,{$pressed:c,children:Ia[i]})]}):U.jsxs(kR,{children:[U.jsx(lh,{children:"Pose"}),U.jsxs(XR,{children:[U.jsx(v1,{type:"button",onClick:()=>p(-1),title:"Previous pose",children:U.jsx(at,{name:"chevron-left",size:14})}),U.jsx(jR,{children:s}),U.jsx(v1,{type:"button",onClick:()=>p(1),title:"Next pose",children:U.jsx(at,{name:"chevron-right",size:14})})]})]})},WR=({hand:a,handle:e,handedness:i,pointerLocked:s})=>{const{keyMap:l}=mv(),[c,d]=Tt.useState(a.connected),[h,p]=Tt.useState(!1);return Tt.useEffect(()=>{s&&p(!1)},[s]),U.jsxs(ch,{style:i==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!s&&U.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[U.jsxs("div",{style:{fontSize:"14px",fontWeight:600,display:"flex",flexDirection:"row",alignItems:"center",gap:"6px"},children:[U.jsx(at,{name:"hand",size:15}),"Hand [",i==="left"?"L":"R","]"]}),U.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:c?U.jsxs(U.Fragment,{children:[U.jsx(hs,{title:`Click to ${h?"close":"change"} key bindings`,onClick:()=>p(!h),children:U.jsx(at,{name:"settings",size:14})}),U.jsx(hs,{title:`Click to disconnect ${i} hand`,$isRed:!0,onClick:()=>{a.connected=!1,d(!1)},children:U.jsx(at,{name:"circle-x",size:14})})]}):U.jsx(hs,{title:`Click to reconnect ${i} hand`,onClick:()=>{a.connected=!0,d(!0)},style:{marginLeft:"5px"},children:U.jsx(at,{name:"plug",size:14})})})]}),c&&!s&&U.jsxs(U.Fragment,{children:[!h&&U.jsxs(U.Fragment,{children:[U.jsx(pa,{}),U.jsx(mu,{vector:e.position,label:"Pos",marginBottom:je.gap}),U.jsx(mu,{vector:e.rotation,label:"Rot"})]}),U.jsx(pa,{})]}),c&&(h?U.jsx(ME,{handedness:i,actions:["pose","pinch"]}):U.jsxs(U.Fragment,{children:[U.jsx(qR,{hand:a,pointerLocked:s,mappedKey:l[i].pose}),U.jsx(bE,{label:"Pinch",analog:!0,supportsTouch:!1,mappedKey:l[i].pinch,pointerLocked:s,onValue:m=>a.updatePinchValue(m)})]}))]},i)},uu=uh(a=>({inputMode:"controller",setInputMode:e=>a(()=>({inputMode:e}))})),YR=({xrDevice:a,inputLayer:e,pointerLocked:i})=>{const s=uu(l=>l.inputMode);return U.jsx(U.Fragment,{children:s==="controller"?Object.entries(a.controllers).map(([l,c])=>U.jsx(VR,{controller:c,handle:e.transformHandles.get(l),handedness:l,pointerLocked:i},`controller-${l}`)):Object.entries(a.hands).map(([l,c])=>U.jsx(WR,{hand:c,handle:e.transformHandles.get(l),handedness:l,pointerLocked:i},`hand-${l}`))})},Oa=uh(a=>({mode:"off",commitHand:"right",setMode:e=>a({mode:e}),setCommitHand:e=>a({commitHand:e})}));function ZR(a,e,i,s,l){if(i.width<=0||i.height<=0)return[0,0,-1];const c=s?i.width/2:i.width,d=a-i.left,p=(s&&d>=c?d-c:d)/c*2-1,m=1-(e-i.top)/i.height*2,_=Math.tan(l/2),g=c/i.height,v=p*g*_,S=m*_,b=-1,C=Math.hypot(v,S,b);return[v/C,S/C,b/C]}const Zm=Ke.td`
  text-align: right;
  color: ${Ce.textWhite};
  padding: 0 8px 0 0;
  font-weight: bold;
`,Qm=Ke.td`
  text-align: left;
  color: ${Ce.textGrey};
  padding: 0;
`,mg=248,Zf=Ke(ch)`
  position: absolute;
  top: calc(100% + 8px);
  left: ${({$left:a})=>`${a}px`};
  width: ${mg}px;
  box-sizing: border-box;
  gap: ${kn.gap};
  padding: 8px;
  overflow: visible;
  z-index: 10;
`,Km=Ke.div`
  min-height: 26px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 2px 4px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${Ce.accent};
    outline-offset: 1px;
    border-radius: ${je.cellRadius};
  }
`,_1=Ke.strong`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
`,$m=Ke.button`
  width: 100%;
  min-height: 42px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid
    ${({$selected:a})=>a?je.accentSoft:"rgba(255, 255, 255, 0.04)"};
  border-radius: ${je.cellRadius};
  background: ${({$selected:a})=>a?je.accentTint:"transparent"};
  color: ${({$selected:a,$unavailable:e})=>e?Ce.textGrey:a?Ce.accent:Ce.textWhite};
  cursor: ${({$unavailable:a})=>a?"default":"pointer"};
  text-align: left;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  &:hover {
    background: ${({$selected:a,$unavailable:e})=>e?a?je.accentTint:"transparent":a?"rgba(45, 127, 249, 0.24)":"rgba(255, 255, 255, 0.07)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${Ce.accent};
    outline-offset: 1px;
  }
`,Jm=Ke.span`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,e0=Ke.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
`,Fs=Ke.span`
  color: ${Ce.textGrey};
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
`,t0=Ke.div`
  padding: 5px 2px 3px;
  color: ${Ce.textGrey};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,x1=Ke.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 2px;
  padding: 2px;
  border-radius: ${je.cellRadius};
  background: ${({$unavailable:a})=>a?"rgba(20, 20, 22, 0.42)":je.inset};
`,y1=Ke.button`
  height: ${je.rowH};
  min-width: 0;
  padding: 0 6px;
  overflow: hidden;
  border: 1px solid
    ${({$selected:a,$unavailable:e})=>a?e?"rgba(255, 255, 255, 0.08)":je.accentSoft:"transparent"};
  border-radius: 6px;
  background: ${({$selected:a,$unavailable:e})=>a?e?"rgba(255, 255, 255, 0.04)":je.accentTint:"transparent"};
  color: ${({$selected:a,$unavailable:e})=>e?Ce.textGrey:a?Ce.accent:Ce.textGrey};
  cursor: ${({$unavailable:a})=>a?"not-allowed":"pointer"};
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    color: ${({$unavailable:a})=>a?Ce.textGrey:Ce.textWhite};
    background: ${({$selected:a,$unavailable:e})=>e?a?"rgba(255, 255, 255, 0.04)":"transparent":a?"rgba(45, 127, 249, 0.24)":"rgba(255, 255, 255, 0.06)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${Ce.accent};
    outline-offset: 1px;
  }
`,QR=Ke.div`
  display: grid;
  grid-template-columns: 8px minmax(0, 1fr);
  align-items: start;
  gap: 7px;
  padding: 7px 8px;
  border-radius: ${je.cellRadius};
  background: ${je.inset};
  color: ${Ce.textGrey};
  font-size: 10px;
  line-height: 14px;
`,KR=Ke.span`
  width: 6px;
  height: 6px;
  margin-top: 4px;
  border-radius: 50%;
  background: ${({$tone:a})=>a==="active"?Ce.accent:a==="error"?Ce.dangerRed:Ce.textGrey};
  box-shadow: ${({$tone:a})=>a==="active"?`0 0 6px ${Ce.accentGlow}`:"none"};
`,$R=Ke.div`
  display: grid;
  gap: 4px;
  padding: 2px;
`,Qf=Ke.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 7px;
  color: ${Ce.textGrey};
  font-size: 10px;
  line-height: 13px;

  > :first-child {
    justify-self: center;
  }
`,JR=Ke.span`
  min-width: 20px;
  box-sizing: border-box;
  padding: 2px 4px;
  border: 1px solid ${Ce.panelBorder};
  border-radius: 5px;
  color: ${Ce.textWhite};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10px;
  text-align: center;
`;function S1(a){var e;const i=a.activeSession;return{supported:t2(a.supportedFeatures),sessionActive:i!=null,negotiated:!!i?.enabledFeatures.some(s=>s==="gaze-tracking"||s==="eye-tracking"),connected:!!(!((e=a.gaze)===null||e===void 0)&&e.connected)}}function eC(a){const[e,i]=Tt.useState(()=>S1(a));return Tt.useEffect(()=>{const s=()=>{const c=S1(a);i(d=>d.supported===c.supported&&d.sessionActive===c.sessionActive&&d.negotiated===c.negotiated&&d.connected===c.connected?d:c)};s();const l=window.setInterval(s,500);return()=>window.clearInterval(l)},[a]),e}function Kf(a,e){const[i,s]=Tt.useState(0);return Tt.useLayoutEffect(()=>{if(!a)return;const l=()=>{const c=e.current,d=c?.offsetParent;if(!c||!d)return;const h=c.getBoundingClientRect(),p=d.getBoundingClientRect(),m=Math.max(8,Math.min(h.left+h.width/2-mg/2,window.innerWidth-mg-8));s(m-p.left)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[a,e]),i}function $f(a,e){Tt.useEffect(()=>{if(!a)return;const i=window.requestAnimationFrame(()=>{var s;const l=e.current,c=l?.querySelector('[data-autofocus="true"]'),d=l?.querySelector("button:not([disabled]), input:not([disabled])");(s=c??d)===null||s===void 0||s.focus()});return()=>window.cancelAnimationFrame(i)},[a,e])}const tC=["meeting_room","living_room","music_room","office_large","office_small"];function nC(a){var e;const i=a.sem,s=(e=i?.environments)!==null&&e!==void 0?e:tC,l=s.filter(d=>{var h,p;return((p=(h=i?.environmentInfo)===null||h===void 0?void 0:h.call(i,d))===null||p===void 0?void 0:p.kind)==="legacy-scan"}),c=s.filter(d=>!l.includes(d));return!c.length||!l.length?[{label:void 0,ids:s}]:[{label:void 0,ids:c},{label:"Legacy scans",ids:l}]}const iC=Ke.div`
  color: ${Ce.textGrey};
  font-size: 10px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 8px 10px 2px;
`,aC=uh(a=>({infoPanelOpen:!1,envDropDownOpen:!1,headsetOpen:!1,inputMenuOpen:!1,gazePanelOpen:!1,setInfoPanelOpen:e=>a(()=>({infoPanelOpen:e})),setEnvDropDownOpen:e=>a(()=>({envDropDownOpen:e})),setHeadsetOpen:e=>a(()=>({headsetOpen:e})),setInputMenuOpen:e=>a(()=>({inputMenuOpen:e})),setGazePanelOpen:e=>a(()=>({gazePanelOpen:e}))}));function rC(a){return a.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}const Bc=[{value:"off",label:"Off"},{value:"cursor",label:"Cursor"},{value:"head-locked",label:"Head"}],Hc=[{value:"left",label:"Left"},{value:"right",label:"Right"}],sC=({xrDevice:a,inputLayer:e})=>{var i,s,l;const[c,d]=Tt.useState(!!(!((i=a.sem)===null||i===void 0)&&i.planesVisible)),[h,p]=Tt.useState(!!(!((s=a.sem)===null||s===void 0)&&s.boundingBoxesVisible)),[m,_]=Tt.useState(!!(!((l=a.sem)===null||l===void 0)&&l.meshesVisible)),g=a.visibilityMask!==void 0,[v,S]=Tt.useState(a.visibilityMaskEnabled),{inputMode:b,setInputMode:C}=uu(),y=Oa(z=>z.mode),M=Oa(z=>z.setMode),R=Oa(z=>z.commitHand),I=Oa(z=>z.setCommitHand),N=eC(a),k=Tt.useRef(null),L=Tt.useRef(null),P=Tt.useRef(null),E=Tt.useRef(null),O=Tt.useRef(null),V=Tt.useRef(null),F=Tt.useRef(null),Z=Tt.useRef(null),te=Tt.useRef(null),{infoPanelOpen:de,setInfoPanelOpen:q,envDropDownOpen:G,setEnvDropDownOpen:X,headsetOpen:K,setHeadsetOpen:he,inputMenuOpen:me,setInputMenuOpen:be,gazePanelOpen:Le,setGazePanelOpen:lt}=aC(),H=Kf(me,L),ue=Kf(Le,P),ee=Kf(K,E),pe=Kf(G,O);$f(me,V),$f(Le,F),$f(K,Z),$f(G,te),Tt.useEffect(()=>{if(!(me||Le||K||G))return;const pt=()=>{be(!1),lt(!1),he(!1),X(!1)},Qe=Ee=>{const Bt=k.current;Bt&&Ee.composedPath().includes(Bt)||pt()},ut=Ee=>{if(Ee.key!=="Escape")return;const Bt=!!(k.current&&Ee.composedPath().includes(k.current)),D=me?L.current:Le?P.current:K?E.current:O.current;pt(),Bt&&D?.focus()};return document.addEventListener("pointerdown",Qe,!0),document.addEventListener("keydown",ut),()=>{document.removeEventListener("pointerdown",Qe,!0),document.removeEventListener("keydown",ut)}},[G,Le,K,me,X,lt,he,be]);const fe=y==="off"?b:b==="hand"&&y==="cursor"?"gaze-hands":null,we=y!=="off"&&N.sessionActive&&N.negotiated&&N.connected?"active":y!=="off"&&N.sessionActive&&N.negotiated&&!N.connected?"error":"idle",Me=N.supported?y==="off"?"Off · the app receives no gaze input":N.sessionActive?N.negotiated?N.connected?"Streaming to the XR session":"Source disconnected · far rays are active":"Session didn't request gaze-tracking":"Ready · enter XR to publish gaze":"No eye tracking on this profile · choose a gaze-capable device",ke=z=>{e.setGazeMode(z),M(e.currentGazeMode),Pa({gazeMode:z})},ht=z=>{e.setGazeCommitHand(z),I(z),Pa({gazeCommitHand:z})},Ot=(z,pt)=>{const Qe=z==="controller"?"controller":"hand",ut=z==="gaze-hands"?"cursor":"off";C(Qe),a.primaryInputMode=Qe,e.setGazeMode(ut),M(e.currentGazeMode),Pa({inputMode:Qe,gazeMode:ut}),be(!1),pt&&window.requestAnimationFrame(()=>{var Ee;return(Ee=L.current)===null||Ee===void 0?void 0:Ee.focus()})},Ft=z=>{N.supported&&ke(z)},ft=(z,pt)=>{var Qe,ut;if(!N.supported)return;const Ee=z.key==="ArrowRight"?1:z.key==="ArrowLeft"?-1:0;if(Ee===0)return;z.preventDefault();const Bt=Bc.findIndex(ne=>ne.value===pt),D=Bc[(Bt+Ee+Bc.length)%Bc.length];Ft(D.value);const T=(Qe=z.currentTarget.parentElement)===null||Qe===void 0?void 0:Qe.querySelectorAll('[role="radio"]');(ut=T?.[D.value==="off"?0:D.value==="cursor"?1:2])===null||ut===void 0||ut.focus()},Dt=(z,pt)=>{var Qe,ut;if(y==="off"||!N.supported)return;const Ee=z.key==="ArrowRight"?1:z.key==="ArrowLeft"?-1:0;if(Ee===0)return;z.preventDefault();const Bt=Hc.findIndex(ne=>ne.value===pt),D=Hc[(Bt+Ee+Hc.length)%Hc.length];ht(D.value);const T=(Qe=z.currentTarget.parentElement)===null||Qe===void 0?void 0:Qe.querySelectorAll('[role="radio"]');(ut=T?.[D.value==="left"?0:1])===null||ut===void 0||ut.focus()},ct=z=>z?Ce.accent:Ce.textGrey,ln=z=>U.jsx(ei,{style:{fontSize:"12px",width:"100%",justifyContent:"start",borderRadius:"8px",padding:"6px 10px"},onClick:pt=>{var Qe;const ut=gR();ut?ut(z):z==="none"?a.sem.deleteAll():(Qe=a.sem.loadDefaultEnvironment(z))===null||Qe===void 0||Qe.catch(Ee=>console.error(`Could not load environment ${z}`,Ee)),Pa({environment:z}),X(!1),pt.detail===0&&window.requestAnimationFrame(()=>{var Ee;return(Ee=O.current)===null||Ee===void 0?void 0:Ee.focus()})},children:rC(z)},z);return U.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",gap:"6px",padding:"8px"},children:[U.jsxs("div",{ref:k,style:{position:"relative"},children:[U.jsxs(fg,{children:[U.jsx(ei,{title:"Reset device transforms",onClick:()=>e.resetDeviceTransforms(),children:U.jsx(at,{name:"rotate-ccw",size:16})}),U.jsx(ei,{title:y==="cursor"?"Pointer lock is unavailable while cursor gaze is active":"Play mode (lock pointer)",disabled:y==="cursor",onClick:()=>{e.lockPointer(),X(!1),q(!1)},children:U.jsx(at,{name:"circle-play",size:16})}),U.jsx(ei,{ref:L,title:"Select input mode","aria-expanded":me,"aria-controls":me?"iwer-input-mode-menu":void 0,$open:me,onClick:()=>{be(!me),he(!1),lt(!1),X(!1),q(!1)},children:U.jsx(at,{name:b==="hand"&&y==="cursor"?"eye":b==="controller"?"gamepad-2":"hand",size:16})}),U.jsx(ei,{ref:P,title:"Configure gaze emulation","aria-expanded":Le,"aria-controls":Le?"iwer-gaze-settings":void 0,$active:y!=="off",$open:Le,onClick:()=>{lt(!Le),he(!1),be(!1),X(!1),q(!1)},children:U.jsx(at,{name:"scan-eye",size:16,color:we==="error"?Ce.dangerRed:void 0})}),U.jsx(ei,{ref:E,title:"Headset position","aria-expanded":K,"aria-controls":K?"iwer-headset-settings":void 0,$open:K,onClick:()=>{he(!K),be(!1),lt(!1),X(!1),q(!1)},children:U.jsx(at,{name:"glasses",size:16})}),U.jsx(ei,{"aria-label":"Field-of-view mask","aria-pressed":v,disabled:!g,title:g?(v?"Disable":"Enable")+" field-of-view mask":"Field-of-view mask unavailable for this device profile",onClick:()=>{a.visibilityMaskEnabled=!a.visibilityMaskEnabled,S(a.visibilityMaskEnabled),Pa({visibilityMaskEnabled:a.visibilityMaskEnabled})},children:U.jsx(at,{name:"scan",size:16,color:g?v?Ce.accent:Ce.textGrey:Ce.textTertiary})}),a.sem&&U.jsxs(U.Fragment,{children:[U.jsx(pa,{$horizontal:!1}),U.jsx(ei,{ref:O,title:"Select emulated environment","aria-expanded":G,"aria-controls":G?"iwer-environment-menu":void 0,$open:G,onClick:()=>{X(!G),be(!1),lt(!1),he(!1),q(!1)},children:U.jsx(at,{name:"armchair",size:16})}),U.jsx(ei,{title:"Toggle plane visibility",onClick:()=>{a.sem.planesVisible=!c,d(!c)},children:U.jsx(at,{name:"layers",size:16,color:ct(c)})}),U.jsx(ei,{title:"Toggle bounding-box visibility",onClick:()=>{a.sem.boundingBoxesVisible=!h,p(!h)},children:U.jsx(at,{name:"box",size:16,color:ct(h)})}),U.jsx(ei,{title:"Toggle mesh visibility",onClick:()=>{a.sem.meshesVisible=!m,_(!m)},children:U.jsx(at,{name:"shapes",size:16,color:ct(m)})})]}),U.jsx(pa,{$horizontal:!1}),U.jsx(ei,{title:"Save current device pose as the default for this site",onClick:()=>{const z=e.captureDefaultPose();e.applyDefaultPose(z),Pa({defaultPose:z})},children:U.jsx(at,{name:"save",size:16})}),U.jsx(pa,{$horizontal:!1}),U.jsx(ei,{title:"Exit XR session",onClick:()=>{var z;return(z=a.activeSession)===null||z===void 0?void 0:z.end()},children:U.jsx(at,{name:"log-out",size:16})})]}),me&&U.jsxs(Zf,{ref:V,id:"iwer-input-mode-menu",role:"group","aria-label":"Input mode",$left:H,children:[U.jsxs(Km,{children:[U.jsx(at,{name:"gamepad-2",size:15}),U.jsx(_1,{children:"Input setup"})]}),U.jsxs($m,{type:"button","aria-pressed":fe==="controller","data-autofocus":fe==="controller",$selected:fe==="controller",onClick:z=>Ot("controller",z.detail===0),children:[U.jsx(at,{name:"gamepad-2",size:15}),U.jsxs(Jm,{children:[U.jsx(e0,{children:"Controllers"}),U.jsx(Fs,{children:"Ray + trigger"})]}),fe==="controller"?U.jsx(at,{name:"circle-dot",size:14,color:Ce.accent}):U.jsx("span",{"aria-hidden":"true"})]}),U.jsxs($m,{type:"button","aria-pressed":fe==="hand","data-autofocus":fe==="hand",$selected:fe==="hand",onClick:z=>Ot("hand",z.detail===0),children:[U.jsx(at,{name:"hand",size:15}),U.jsxs(Jm,{children:[U.jsx(e0,{children:"Hands"}),U.jsx(Fs,{children:"Ray, poke + grab"})]}),fe==="hand"?U.jsx(at,{name:"circle-dot",size:14,color:Ce.accent}):U.jsx("span",{"aria-hidden":"true"})]}),U.jsxs($m,{type:"button","aria-pressed":fe==="gaze-hands","data-autofocus":fe==="gaze-hands","aria-disabled":!N.supported,"aria-describedby":N.supported?void 0:"iwer-gaze-preset-hint",$selected:fe==="gaze-hands",$unavailable:!N.supported,title:N.supported?"Use cursor gaze with hand pinch":"Select a gaze-capable device profile first",onClick:z=>{N.supported&&Ot("gaze-hands",z.detail===0)},children:[U.jsx(at,{name:"eye",size:15}),U.jsxs(Jm,{children:[U.jsx(e0,{children:"Gaze + Hands"}),U.jsx(Fs,{children:"Look, then pinch"})]}),fe==="gaze-hands"?U.jsx(at,{name:"circle-dot",size:14,color:Ce.accent}):U.jsx("span",{"aria-hidden":"true"})]}),!N.supported&&U.jsx(Fs,{id:"iwer-gaze-preset-hint",style:{padding:"4px"},children:"Needs an eye-tracking profile, such as Meta Quest Pro."}),fe==null&&U.jsxs(Fs,{style:{padding:"5px 4px 2px"},children:["Custom · ",b==="controller"?"Controllers":"Hands"," + ",y==="head-locked"?"head gaze":"cursor gaze"]})]}),Le&&U.jsxs(Zf,{ref:F,id:"iwer-gaze-settings",role:"group","aria-label":"Gaze emulation settings",$left:ue,children:[U.jsxs(Km,{children:[U.jsx(at,{name:"eye",size:15}),U.jsx(_1,{children:"Gaze emulation"}),U.jsx(hs,{title:"Close gaze settings",onClick:z=>{var pt;lt(!1),z.detail===0&&((pt=P.current)===null||pt===void 0||pt.focus())},children:U.jsx(at,{name:"circle-x",size:14})})]}),U.jsxs(QR,{"aria-live":"polite",children:[U.jsx(KR,{$tone:we}),U.jsx("span",{children:Me})]}),U.jsx(t0,{id:"iwer-gaze-mode-label",children:"Gaze mode"}),U.jsx(x1,{role:"radiogroup","aria-label":"Gaze mode","aria-labelledby":"iwer-gaze-mode-label","aria-disabled":!N.supported,$unavailable:!N.supported,children:Bc.map(({value:z,label:pt})=>U.jsx(y1,{type:"button",role:"radio","aria-checked":y===z,"aria-disabled":!N.supported,tabIndex:y===z?0:-1,"data-autofocus":y===z,$selected:y===z,$unavailable:!N.supported,onClick:()=>Ft(z),onKeyDown:Qe=>ft(Qe,z),children:pt},z))}),U.jsx(t0,{id:"iwer-gaze-hand-label",children:"Commit hand"}),U.jsx(x1,{role:"radiogroup","aria-label":"Gaze commit hand","aria-labelledby":"iwer-gaze-hand-label","aria-disabled":y==="off"||!N.supported,$unavailable:y==="off"||!N.supported,children:Hc.map(({value:z,label:pt})=>U.jsx(y1,{type:"button",role:"radio","aria-checked":R===z,"aria-disabled":y==="off"||!N.supported,tabIndex:R===z?0:-1,$selected:R===z,$unavailable:y==="off"||!N.supported,onClick:()=>{y!=="off"&&N.supported&&ht(z)},onKeyDown:Qe=>Dt(Qe,z),children:pt},z))}),U.jsxs(Fs,{style:{padding:"3px 2px 1px"},children:[b==="hand"?"Pinch":"Trigger"," confirms the gaze target."]}),y==="cursor"&&N.sessionActive&&N.connected&&U.jsxs(U.Fragment,{children:[U.jsx(pa,{}),U.jsx(t0,{children:"Cursor controls"}),U.jsxs($R,{children:[U.jsxs(Qf,{children:[U.jsx(at,{name:"mouse-left",size:14}),U.jsxs("span",{children:["Aim + commit · drag to move"," ",b==="hand"?"hand":"controller"]})]}),U.jsxs(Qf,{children:[U.jsx(at,{name:"mouse-right",size:14}),U.jsx("span",{children:"Drag to look around"})]}),U.jsxs(Qf,{children:[U.jsx(at,{name:"mouse",size:14}),U.jsx("span",{children:"While held, wheel to adjust depth"})]}),U.jsxs(Qf,{children:[U.jsx(JR,{children:"Space"}),U.jsx("span",{children:"Reset commit-hand pose"})]})]}),U.jsx(Fs,{style:{padding:"3px 2px 1px"},children:"Play mode is unavailable while cursor gaze is on."})]})]}),K&&U.jsxs(Zf,{ref:Z,id:"iwer-headset-settings",role:"group","aria-label":"Headset position",$left:ee,children:[U.jsxs(Km,{tabIndex:-1,"data-autofocus":"true",style:{fontSize:"13px",fontWeight:600},children:[U.jsx(at,{name:"glasses",size:15}),a.name]}),U.jsx(pa,{}),U.jsx(mu,{vector:e.combinedCameraPosition,label:"Pos"})]}),G&&U.jsxs(Zf,{ref:te,id:"iwer-environment-menu",role:"group","aria-label":"Emulated environment",$left:pe,children:[nC(a).map(({label:z,ids:pt})=>{const Qe=pt.map(ln);if(!z)return U.jsx(Tt.Fragment,{children:Qe},"current");const ut="iwer-environment-group-"+z.replace(/\W+/g,"-");return U.jsxs("div",{role:"group","aria-labelledby":ut,children:[U.jsx(iC,{id:ut,children:z}),Qe]},z)}),ln("none")]})]}),U.jsxs(fg,{children:[U.jsx(ei,{title:"About IWER",onClick:()=>{q(!de),be(!1),lt(!1),he(!1),X(!1)},children:U.jsx(at,{name:"iwer",size:16})}),U.jsx(ei,{title:"Report issues",onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/issues","_blank"),children:U.jsx(at,{name:"bug",size:16})})]}),de&&U.jsxs(ch,{style:{top:"50vh",left:"50vw",transform:"translate(-50%, -50%)",maxWidth:"240px",gap:"4px",padding:"16px"},children:[U.jsx("div",{style:{display:"flex",justifyContent:"end"},children:U.jsx(hs,{$isRed:!0,onClick:()=>q(!1),children:U.jsx(at,{name:"circle-x",size:14})})}),U.jsx("div",{style:{display:"flex",justifyContent:"center"},children:U.jsx(at,{name:"iwer",size:72})}),U.jsxs("p",{style:{textAlign:"center",padding:"0 5px",margin:"0"},children:[U.jsx("b",{children:"Immersive Web Emulation Runtime"})," (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc."]}),U.jsx("table",{style:{width:"100%",borderCollapse:"collapse",display:"flex",justifyContent:"center",fontSize:"12px",padding:"8px"},children:U.jsxs("tbody",{children:[U.jsxs("tr",{children:[U.jsx(Zm,{children:"IWER"}),U.jsxs(Qm,{children:["v",a.version]})]}),U.jsxs("tr",{children:[U.jsx(Zm,{children:"DevUI"}),U.jsxs(Qm,{children:["v",a.devui.version]})]}),a.sem&&U.jsxs("tr",{children:[U.jsx(Zm,{children:"SEM"}),U.jsxs(Qm,{children:["v",a.sem.version]})]})]})}),U.jsx(r1,{style:{borderRadius:kn.radiusSolo},onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE","_blank"),children:"MIT License"}),U.jsx(r1,{style:{borderRadius:kn.radiusSolo},onClick:()=>window.open("https://github.com/meta-quest/immersive-web-emulation-runtime","_blank"),children:"View Source on GitHub"})]})]})};const gv="184",oC=0,M1=1,lC=2,Pd=1,cC=2,ru=3,_r=0,yi=1,pr=2,gr=0,wl=1,b1=2,E1=3,T1=4,uC=5,Ks=100,fC=101,dC=102,hC=103,pC=104,mC=200,gC=201,vC=202,_C=203,gg=204,vg=205,xC=206,yC=207,SC=208,MC=209,bC=210,EC=211,TC=212,AC=213,wC=214,_g=0,xg=1,yg=2,Pl=3,Sg=4,Mg=5,bg=6,Eg=7,EE=0,RC=1,CC=2,Ga=0,TE=1,AE=2,wE=3,RE=4,CE=5,DE=6,NE=7,UE=300,ao=301,Ol=302,n0=303,i0=304,fh=306,Tg=1e3,mr=1001,Ag=1002,Qn=1003,DC=1004,Jf=1005,ti=1006,a0=1007,Js=1008,Ki=1009,LE=1010,PE=1011,gu=1012,vv=1013,Xa=1014,Fa=1015,xr=1016,_v=1017,xv=1018,vu=1020,OE=35902,zE=35899,IE=1021,FE=1022,va=1023,yr=1026,eo=1027,BE=1028,yv=1029,ro=1030,Sv=1031,Mv=1033,Od=33776,zd=33777,Id=33778,Fd=33779,wg=35840,Rg=35841,Cg=35842,Dg=35843,Ng=36196,Ug=37492,Lg=37496,Pg=37488,Og=37489,qd=37490,zg=37491,Ig=37808,Fg=37809,Bg=37810,Hg=37811,Gg=37812,Vg=37813,kg=37814,Xg=37815,jg=37816,qg=37817,Wg=37818,Yg=37819,Zg=37820,Qg=37821,Kg=36492,$g=36494,Jg=36495,ev=36283,tv=36284,Wd=36285,nv=36286,NC=3200,A1=0,UC=1,us="",Zi="srgb",Yd="srgb-linear",Zd="linear",tn="srgb",Jo=7680,w1=519,LC=512,PC=513,OC=514,bv=515,zC=516,IC=517,Ev=518,FC=519,R1=35044,C1="300 es",Ba=2e3,Qd=2001;function BC(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Kd(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function HC(){const a=Kd("canvas");return a.style.display="block",a}const D1={};function N1(...a){const e="THREE."+a.shift();console.log(e,...a)}function HE(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function vt(...a){a=HE(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function jt(...a){a=HE(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function iv(...a){const e=a.join(" ");e in D1||(D1[e]=!0,vt(...a))}function GC(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const VC={[_g]:xg,[yg]:bg,[Sg]:Eg,[Pl]:Mg,[xg]:_g,[bg]:yg,[Eg]:Sg,[Mg]:Pl};class so{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],r0=Math.PI/180,av=180/Math.PI;function xu(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return($n[a&255]+$n[a>>8&255]+$n[a>>16&255]+$n[a>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[i&63|128]+$n[i>>8&255]+"-"+$n[i>>16&255]+$n[i>>24&255]+$n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]).toLowerCase()}function Vt(a,e,i){return Math.max(e,Math.min(i,a))}function kC(a,e){return(a%e+e)%e}function s0(a,e,i){return(1-i)*a+i*e}function Gc(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function _i(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Lv=class Lv{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Vt(this.x,e.x,i.x),this.y=Vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Vt(this.x,e,i),this.y=Vt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lv.prototype.isVector2=!0;let nn=Lv;class ma{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let p=s[l+0],m=s[l+1],_=s[l+2],g=s[l+3],v=c[d+0],S=c[d+1],b=c[d+2],C=c[d+3];if(g!==C||p!==v||m!==S||_!==b){let y=p*v+m*S+_*b+g*C;y<0&&(v=-v,S=-S,b=-b,C=-C,y=-y);let M=1-h;if(y<.9995){const R=Math.acos(y),I=Math.sin(R);M=Math.sin(M*R)/I,h=Math.sin(h*R)/I,p=p*M+v*h,m=m*M+S*h,_=_*M+b*h,g=g*M+C*h}else{p=p*M+v*h,m=m*M+S*h,_=_*M+b*h,g=g*M+C*h;const R=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=R,m*=R,_*=R,g*=R}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],p=s[l+1],m=s[l+2],_=s[l+3],g=c[d],v=c[d+1],S=c[d+2],b=c[d+3];return e[i]=h*b+_*g+p*S-m*v,e[i+1]=p*b+_*v+m*g-h*S,e[i+2]=m*b+_*S+h*v-p*g,e[i+3]=_*b-h*g-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),_=h(l/2),g=h(c/2),v=p(s/2),S=p(l/2),b=p(c/2);switch(d){case"XYZ":this._x=v*_*g+m*S*b,this._y=m*S*g-v*_*b,this._z=m*_*b+v*S*g,this._w=m*_*g-v*S*b;break;case"YXZ":this._x=v*_*g+m*S*b,this._y=m*S*g-v*_*b,this._z=m*_*b-v*S*g,this._w=m*_*g+v*S*b;break;case"ZXY":this._x=v*_*g-m*S*b,this._y=m*S*g+v*_*b,this._z=m*_*b+v*S*g,this._w=m*_*g-v*S*b;break;case"ZYX":this._x=v*_*g-m*S*b,this._y=m*S*g+v*_*b,this._z=m*_*b-v*S*g,this._w=m*_*g+v*S*b;break;case"YZX":this._x=v*_*g+m*S*b,this._y=m*S*g+v*_*b,this._z=m*_*b-v*S*g,this._w=m*_*g-v*S*b;break;case"XZY":this._x=v*_*g-m*S*b,this._y=m*S*g-v*_*b,this._z=m*_*b+v*S*g,this._w=m*_*g+v*S*b;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],g=i[10],v=s+h+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(d-l)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(_-p)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+m)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-m)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(d-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+d*h+l*m-c*p,this._y=l*_+d*p+c*h-s*m,this._z=c*_+d*m+s*p-l*h,this._w=d*_-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pv=class Pv{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U1.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U1.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),_=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+p*m+d*g-h*_,this.y=s+p*_+h*m-c*g,this.z=l+p*g+c*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Vt(this.x,e.x,i.x),this.y=Vt(this.y,e.y,i.y),this.z=Vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Vt(this.x,e,i),this.y=Vt(this.y,e,i),this.z=Vt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return o0.copy(this).projectOnVector(e),this.sub(o0)}reflect(e){return this.sub(o0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pv.prototype.isVector3=!0;let ce=Pv;const o0=new ce,U1=new ma,Ov=class Ov{constructor(e,i,s,l,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,p,m)}set(e,i,s,l,c,d,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],_=s[4],g=s[7],v=s[2],S=s[5],b=s[8],C=l[0],y=l[3],M=l[6],R=l[1],I=l[4],N=l[7],k=l[2],L=l[5],P=l[8];return c[0]=d*C+h*R+p*k,c[3]=d*y+h*I+p*L,c[6]=d*M+h*N+p*P,c[1]=m*C+_*R+g*k,c[4]=m*y+_*I+g*L,c[7]=m*M+_*N+g*P,c[2]=v*C+S*R+b*k,c[5]=v*y+S*I+b*L,c[8]=v*M+S*N+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*d*_-i*h*m-s*c*_+s*h*p+l*c*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],g=_*d-h*m,v=h*p-_*c,S=m*c-d*p,b=i*g+s*v+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(l*m-_*s)*C,e[2]=(h*s-l*d)*C,e[3]=v*C,e[4]=(_*i-l*p)*C,e[5]=(l*c-h*i)*C,e[6]=S*C,e[7]=(s*p-m*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(l0.makeScale(e,i)),this}rotate(e){return this.premultiply(l0.makeRotation(-e)),this}translate(e,i){return this.premultiply(l0.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ov.prototype.isMatrix3=!0;let St=Ov;const l0=new St,L1=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P1=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XC(){const a={enabled:!0,workingColorSpace:Yd,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===tn&&(l.r=vr(l.r),l.g=vr(l.g),l.b=vr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===tn&&(l.r=Rl(l.r),l.g=Rl(l.g),l.b=Rl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?Zd:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return iv("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return iv("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Yd]:{primaries:e,whitePoint:s,transfer:Zd,toXYZ:L1,fromXYZ:P1,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zi},outputColorSpaceConfig:{drawingBufferColorSpace:Zi}},[Zi]:{primaries:e,whitePoint:s,transfer:tn,toXYZ:L1,fromXYZ:P1,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zi}}}),a}const Gt=XC();function vr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Rl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let el;class jC{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{el===void 0&&(el=Kd("canvas")),el.width=e.width,el.height=e.height;const l=el.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=el}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kd("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=vr(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(vr(i[s]/255)*255):i[s]=vr(i[s]);return{data:i,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qC=0;class Tv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=xu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(c0(l[d].image)):c.push(c0(l[d]))}else c=c0(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function c0(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jC.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let WC=0;const u0=new ce;class ui extends so{constructor(e=ui.DEFAULT_IMAGE,i=ui.DEFAULT_MAPPING,s=mr,l=mr,c=ti,d=Js,h=va,p=Ki,m=ui.DEFAULT_ANISOTROPY,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WC++}),this.uuid=xu(),this.name="",this.source=new Tv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new nn(0,0),this.repeat=new nn(1,1),this.center=new nn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(u0).x}get height(){return this.source.getSize(u0).y}get depth(){return this.source.getSize(u0).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){vt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tg:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Ag:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tg:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Ag:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=UE;ui.DEFAULT_ANISOTROPY=1;const zv=class zv{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],_=p[4],g=p[8],v=p[1],S=p[5],b=p[9],C=p[2],y=p[6],M=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+C)<.1&&Math.abs(b+y)<.1&&Math.abs(m+S+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,N=(S+1)/2,k=(M+1)/2,L=(_+v)/4,P=(g+C)/4,E=(b+y)/4;return I>N&&I>k?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=L/s,c=P/s):N>k?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=L/l,c=E/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=P/c,l=E/c),this.set(s,l,c,i),this}let R=Math.sqrt((y-b)*(y-b)+(g-C)*(g-C)+(v-_)*(v-_));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(g-C)/R,this.z=(v-_)/R,this.w=Math.acos((m+S+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Vt(this.x,e.x,i.x),this.y=Vt(this.y,e.y,i.y),this.z=Vt(this.z,e.z,i.z),this.w=Vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Vt(this.x,e,i),this.y=Vt(this.y,e,i),this.z=Vt(this.z,e,i),this.w=Vt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zv.prototype.isVector4=!0;let Mn=zv;class YC extends so{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Mn(0,0,e,i),this.scissorTest=!1,this.viewport=new Mn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new ui(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Tv(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends YC{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class GE extends ui{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZC extends ui{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=class Jd{constructor(e,i,s,l,c,d,h,p,m,_,g,v,S,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,p,m,_,g,v,S,b,C,y)}set(e,i,s,l,c,d,h,p,m,_,g,v,S,b,C,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=d,M[9]=h,M[13]=p,M[2]=m,M[6]=_,M[10]=g,M[14]=v,M[3]=S,M[7]=b,M[11]=C,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jd().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/tl.setFromMatrixColumn(e,0).length(),c=1/tl.setFromMatrixColumn(e,1).length(),d=1/tl.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=d*_,S=d*g,b=h*_,C=h*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=S+b*m,i[5]=v-C*m,i[9]=-h*p,i[2]=C-v*m,i[6]=b+S*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*_,S=p*g,b=m*_,C=m*g;i[0]=v+C*h,i[4]=b*h-S,i[8]=d*m,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=S*h-b,i[6]=C+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*_,S=p*g,b=m*_,C=m*g;i[0]=v-C*h,i[4]=-d*g,i[8]=b+S*h,i[1]=S+b*h,i[5]=d*_,i[9]=C-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*_,S=d*g,b=h*_,C=h*g;i[0]=p*_,i[4]=b*m-S,i[8]=v*m+C,i[1]=p*g,i[5]=C*m+v,i[9]=S*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,S=d*m,b=h*p,C=h*m;i[0]=p*_,i[4]=C-v*g,i[8]=b*g+S,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=S*g+b,i[10]=v-C*g}else if(e.order==="XZY"){const v=d*p,S=d*m,b=h*p,C=h*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=v*g+C,i[5]=d*_,i[9]=S*g-b,i[2]=b*g-S,i[6]=h*_,i[10]=C*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QC,e,KC)}lookAt(e,i,s){const l=this.elements;return Ni.subVectors(e,i),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),es.crossVectors(s,Ni),es.lengthSq()===0&&(Math.abs(s.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),es.crossVectors(s,Ni)),es.normalize(),ed.crossVectors(Ni,es),l[0]=es.x,l[4]=ed.x,l[8]=Ni.x,l[1]=es.y,l[5]=ed.y,l[9]=Ni.y,l[2]=es.z,l[6]=ed.z,l[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],_=s[1],g=s[5],v=s[9],S=s[13],b=s[2],C=s[6],y=s[10],M=s[14],R=s[3],I=s[7],N=s[11],k=s[15],L=l[0],P=l[4],E=l[8],O=l[12],V=l[1],F=l[5],Z=l[9],te=l[13],de=l[2],q=l[6],G=l[10],X=l[14],K=l[3],he=l[7],me=l[11],be=l[15];return c[0]=d*L+h*V+p*de+m*K,c[4]=d*P+h*F+p*q+m*he,c[8]=d*E+h*Z+p*G+m*me,c[12]=d*O+h*te+p*X+m*be,c[1]=_*L+g*V+v*de+S*K,c[5]=_*P+g*F+v*q+S*he,c[9]=_*E+g*Z+v*G+S*me,c[13]=_*O+g*te+v*X+S*be,c[2]=b*L+C*V+y*de+M*K,c[6]=b*P+C*F+y*q+M*he,c[10]=b*E+C*Z+y*G+M*me,c[14]=b*O+C*te+y*X+M*be,c[3]=R*L+I*V+N*de+k*K,c[7]=R*P+I*F+N*q+k*he,c[11]=R*E+I*Z+N*G+k*me,c[15]=R*O+I*te+N*X+k*be,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],_=e[2],g=e[6],v=e[10],S=e[14],b=e[3],C=e[7],y=e[11],M=e[15],R=p*S-m*v,I=h*S-m*g,N=h*v-p*g,k=d*S-m*_,L=d*v-p*_,P=d*g-h*_;return i*(C*R-y*I+M*N)-s*(b*R-y*k+M*L)+l*(b*I-C*k+M*P)-c*(b*N-C*L+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],g=e[9],v=e[10],S=e[11],b=e[12],C=e[13],y=e[14],M=e[15],R=i*h-s*d,I=i*p-l*d,N=i*m-c*d,k=s*p-l*h,L=s*m-c*h,P=l*m-c*p,E=_*C-g*b,O=_*y-v*b,V=_*M-S*b,F=g*y-v*C,Z=g*M-S*C,te=v*M-S*y,de=R*te-I*Z+N*F+k*V-L*O+P*E;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/de;return e[0]=(h*te-p*Z+m*F)*q,e[1]=(l*Z-s*te-c*F)*q,e[2]=(C*P-y*L+M*k)*q,e[3]=(v*L-g*P-S*k)*q,e[4]=(p*V-d*te-m*O)*q,e[5]=(i*te-l*V+c*O)*q,e[6]=(y*N-b*P-M*I)*q,e[7]=(_*P-v*N+S*I)*q,e[8]=(d*Z-h*V+m*E)*q,e[9]=(s*V-i*Z-c*E)*q,e[10]=(b*L-C*N+M*R)*q,e[11]=(g*N-_*L-S*R)*q,e[12]=(h*O-d*F-p*E)*q,e[13]=(i*F-s*O+l*E)*q,e[14]=(C*I-b*k-y*R)*q,e[15]=(_*k-g*I+v*R)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,p=e.z,m=c*d,_=c*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+s,_*p-l*d,0,m*p-l*h,_*p+l*d,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,_=d+d,g=h+h,v=c*m,S=c*_,b=c*g,C=d*_,y=d*g,M=h*g,R=p*m,I=p*_,N=p*g,k=s.x,L=s.y,P=s.z;return l[0]=(1-(C+M))*k,l[1]=(S+N)*k,l[2]=(b-I)*k,l[3]=0,l[4]=(S-N)*L,l[5]=(1-(v+M))*L,l[6]=(y+R)*L,l[7]=0,l[8]=(b+I)*P,l[9]=(y-R)*P,l[10]=(1-(v+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=tl.set(l[0],l[1],l[2]).length();const h=tl.set(l[4],l[5],l[6]).length(),p=tl.set(l[8],l[9],l[10]).length();c<0&&(d=-d),la.copy(this);const m=1/d,_=1/h,g=1/p;return la.elements[0]*=m,la.elements[1]*=m,la.elements[2]*=m,la.elements[4]*=_,la.elements[5]*=_,la.elements[6]*=_,la.elements[8]*=g,la.elements[9]*=g,la.elements[10]*=g,i.setFromRotationMatrix(la),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,l,c,d,h=Ba,p=!1){const m=this.elements,_=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),S=(s+l)/(s-l);let b,C;if(p)b=c/(d-c),C=d*c/(d-c);else if(h===Ba)b=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Qd)b=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Ba,p=!1){const m=this.elements,_=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),S=-(s+l)/(s-l);let b,C;if(p)b=1/(d-c),C=d/(d-c);else if(h===Ba)b=-2/(d-c),C=-(d+c)/(d-c);else if(h===Qd)b=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Jd.prototype.isMatrix4=!0;let On=Jd;const tl=new ce,la=new On,QC=new ce(0,0,0),KC=new ce(1,1,1),es=new ce,ed=new ce,Ni=new ce,O1=new On,z1=new ma;class ps{constructor(e=0,i=0,s=0,l=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],g=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return O1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O1,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return z1.setFromEuler(this),this.setFromQuaternion(z1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class VE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $C=0;const I1=new ce,nl=new ma,or=new On,td=new ce,Vc=new ce,JC=new ce,eD=new ma,F1=new ce(1,0,0),B1=new ce(0,1,0),H1=new ce(0,0,1),G1={type:"added"},tD={type:"removed"},il={type:"childadded",child:null},f0={type:"childremoved",child:null};class Pi extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$C++}),this.uuid=xu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pi.DEFAULT_UP.clone();const e=new ce,i=new ps,s=new ma,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new On},normalMatrix:{value:new St}}),this.matrix=new On,this.matrixWorld=new On,this.matrixAutoUpdate=Pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return nl.setFromAxisAngle(e,i),this.quaternion.multiply(nl),this}rotateOnWorldAxis(e,i){return nl.setFromAxisAngle(e,i),this.quaternion.premultiply(nl),this}rotateX(e){return this.rotateOnAxis(F1,e)}rotateY(e){return this.rotateOnAxis(B1,e)}rotateZ(e){return this.rotateOnAxis(H1,e)}translateOnAxis(e,i){return I1.copy(e).applyQuaternion(this.quaternion),this.position.add(I1.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F1,e)}translateY(e){return this.translateOnAxis(B1,e)}translateZ(e){return this.translateOnAxis(H1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?td.copy(e):td.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(Vc,td,this.up):or.lookAt(td,Vc,this.up),this.quaternion.setFromRotationMatrix(or),l&&(or.extractRotation(l.matrixWorld),nl.setFromRotationMatrix(or),this.quaternion.premultiply(nl.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G1),il.child=e,this.dispatchEvent(il),il.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(tD),f0.child=e,this.dispatchEvent(f0),f0.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G1),il.child=e,this.dispatchEvent(il),il.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vc,e,JC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vc,eD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),g=d(e.shapes),v=d(e.skeletons),S=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Pi.DEFAULT_UP=new ce(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nD={type:"move"};class d0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),M=this._getHandJoint(m,C);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,b=.005;m.inputState.pinching&&v>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(nD)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Tl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const kE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},nd={h:0,s:0,l:0};function h0(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class sn{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Gt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Gt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Gt.workingColorSpace){if(e=kC(e,1),i=Vt(i,0,1),s=Vt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=h0(d,c,e+1/3),this.g=h0(d,c,e),this.b=h0(d,c,e-1/3)}return Gt.colorSpaceToWorking(this,l),this}setStyle(e,i=Zi){function s(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:vt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Zi){const s=kE[e.toLowerCase()];return s!==void 0?this.setHex(s,i):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Rl(e.r),this.g=Rl(e.g),this.b=Rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zi){return Gt.workingToColorSpace(Jn.copy(this),e),Math.round(Vt(Jn.r*255,0,255))*65536+Math.round(Vt(Jn.g*255,0,255))*256+Math.round(Vt(Jn.b*255,0,255))}getHexString(e=Zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Gt.workingColorSpace){Gt.workingToColorSpace(Jn.copy(this),i);const s=Jn.r,l=Jn.g,c=Jn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=_<=.5?g/(d+h):g/(2-d-h),d){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Gt.workingColorSpace){return Gt.workingToColorSpace(Jn.copy(this),i),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Zi){Gt.workingToColorSpace(Jn.copy(this),e);const i=Jn.r,s=Jn.g,l=Jn.b;return e!==Zi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+i,ts.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ts),e.getHSL(nd);const s=s0(ts.h,nd.h,i),l=s0(ts.s,nd.s,i),c=s0(ts.l,nd.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new sn;sn.NAMES=kE;class iD extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ca=new ce,lr=new ce,p0=new ce,cr=new ce,al=new ce,rl=new ce,V1=new ce,m0=new ce,g0=new ce,v0=new ce,_0=new Mn,x0=new Mn,y0=new Mn;class ga{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),ca.subVectors(e,i),l.cross(ca);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){ca.subVectors(l,i),lr.subVectors(s,i),p0.subVectors(e,i);const d=ca.dot(ca),h=ca.dot(lr),p=ca.dot(p0),m=lr.dot(lr),_=lr.dot(p0),g=d*m-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,S=(m*p-h*_)*v,b=(d*_-h*p)*v;return c.set(1-S-b,b,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,i,s,l,c,d,h,p){return this.getBarycoord(e,i,s,l,cr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,cr.x),p.addScaledVector(d,cr.y),p.addScaledVector(h,cr.z),p)}static getInterpolatedAttribute(e,i,s,l,c,d){return _0.setScalar(0),x0.setScalar(0),y0.setScalar(0),_0.fromBufferAttribute(e,i),x0.fromBufferAttribute(e,s),y0.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(_0,c.x),d.addScaledVector(x0,c.y),d.addScaledVector(y0,c.z),d}static isFrontFacing(e,i,s,l){return ca.subVectors(s,i),lr.subVectors(e,i),ca.cross(lr).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ca.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),ca.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ga.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ga.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return ga.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return ga.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ga.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;al.subVectors(l,s),rl.subVectors(c,s),m0.subVectors(e,s);const p=al.dot(m0),m=rl.dot(m0);if(p<=0&&m<=0)return i.copy(s);g0.subVectors(e,l);const _=al.dot(g0),g=rl.dot(g0);if(_>=0&&g<=_)return i.copy(l);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(s).addScaledVector(al,d);v0.subVectors(e,c);const S=al.dot(v0),b=rl.dot(v0);if(b>=0&&S<=b)return i.copy(c);const C=S*m-p*b;if(C<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(s).addScaledVector(rl,h);const y=_*b-S*g;if(y<=0&&g-_>=0&&S-b>=0)return V1.subVectors(c,l),h=(g-_)/(g-_+(S-b)),i.copy(l).addScaledVector(V1,h);const M=1/(y+C+v);return d=C*M,h=v*M,i.copy(s).addScaledVector(al,d).addScaledVector(rl,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yu{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(ua.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(ua.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=ua.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ua):ua.fromBufferAttribute(c,d),ua.applyMatrix4(e.matrixWorld),this.expandByPoint(ua);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),id.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),id.copy(s.boundingBox)),id.applyMatrix4(e.matrixWorld),this.union(id)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ua),ua.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kc),ad.subVectors(this.max,kc),sl.subVectors(e.a,kc),ol.subVectors(e.b,kc),ll.subVectors(e.c,kc),ns.subVectors(ol,sl),is.subVectors(ll,ol),Bs.subVectors(sl,ll);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Bs.z,Bs.y,ns.z,0,-ns.x,is.z,0,-is.x,Bs.z,0,-Bs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Bs.y,Bs.x,0];return!S0(i,sl,ol,ll,ad)||(i=[1,0,0,0,1,0,0,0,1],!S0(i,sl,ol,ll,ad))?!1:(rd.crossVectors(ns,is),i=[rd.x,rd.y,rd.z],S0(i,sl,ol,ll,ad))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ua).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ua).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],ua=new ce,id=new yu,sl=new ce,ol=new ce,ll=new ce,ns=new ce,is=new ce,Bs=new ce,kc=new ce,ad=new ce,rd=new ce,Hs=new ce;function S0(a,e,i,s,l){for(let c=0,d=a.length-3;c<=d;c+=3){Hs.fromArray(a,c);const h=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),p=e.dot(Hs),m=i.dot(Hs),_=s.dot(Hs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const Cn=new ce,sd=new nn;let aD=0;class ka extends so{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aD++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=R1,this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sd.fromBufferAttribute(this,i),sd.applyMatrix3(e),this.setXY(i,sd.x,sd.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Gc(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=_i(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Gc(i,this.array)),i}setX(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Gc(i,this.array)),i}setY(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Gc(i,this.array)),i}setZ(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Gc(i,this.array)),i}setW(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=_i(i,this.array),s=_i(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=_i(i,this.array),s=_i(s,this.array),l=_i(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=_i(i,this.array),s=_i(s,this.array),l=_i(l,this.array),c=_i(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R1&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class XE extends ka{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class jE extends ka{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $i extends ka{constructor(e,i,s){super(new Float32Array(e),i,s)}}const rD=new yu,Xc=new ce,M0=new ce;class Av{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):rD.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xc.subVectors(e,this.center);const i=Xc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xc,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(M0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xc.copy(e.center).add(M0)),this.expandByPoint(Xc.copy(e.center).sub(M0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sD=0;const qi=new On,b0=new Pi,cl=new ce,Ui=new yu,jc=new yu,Vn=new ce;class Wa extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sD++}),this.uuid=xu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BC(e)?jE:XE)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new St().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,i,s){return qi.makeTranslation(e,i,s),this.applyMatrix4(qi),this}scale(e,i,s){return qi.makeScale(e,i,s),this.applyMatrix4(qi),this}lookAt(e){return b0.lookAt(e),b0.updateMatrix(),this.applyMatrix4(b0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cl).negate(),this.translate(cl.x,cl.y,cl.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $i(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Av);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];jc.setFromBufferAttribute(h),this.morphTargetsRelative?(Vn.addVectors(Ui.min,jc.min),Ui.expandByPoint(Vn),Vn.addVectors(Ui.max,jc.max),Ui.expandByPoint(Vn)):(Ui.expandByPoint(jc.min),Ui.expandByPoint(jc.max))}Ui.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)Vn.fromBufferAttribute(h,m),p&&(cl.fromBufferAttribute(e,m),Vn.add(cl)),l=Math.max(l,s.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ka(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let E=0;E<s.count;E++)h[E]=new ce,p[E]=new ce;const m=new ce,_=new ce,g=new ce,v=new nn,S=new nn,b=new nn,C=new ce,y=new ce;function M(E,O,V){m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,O),g.fromBufferAttribute(s,V),v.fromBufferAttribute(c,E),S.fromBufferAttribute(c,O),b.fromBufferAttribute(c,V),_.sub(m),g.sub(m),S.sub(v),b.sub(v);const F=1/(S.x*b.y-b.x*S.y);isFinite(F)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(F),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(F),h[E].add(C),h[O].add(C),h[V].add(C),p[E].add(y),p[O].add(y),p[V].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let E=0,O=R.length;E<O;++E){const V=R[E],F=V.start,Z=V.count;for(let te=F,de=F+Z;te<de;te+=3)M(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const I=new ce,N=new ce,k=new ce,L=new ce;function P(E){k.fromBufferAttribute(l,E),L.copy(k);const O=h[E];I.copy(O),I.sub(k.multiplyScalar(k.dot(O))).normalize(),N.crossVectors(L,O);const F=N.dot(p[E])<0?-1:1;d.setXYZW(E,I.x,I.y,I.z,F)}for(let E=0,O=R.length;E<O;++E){const V=R[E],F=V.start,Z=V.count;for(let te=F,de=F+Z;te<de;te+=3)P(e.getX(te+0)),P(e.getX(te+1)),P(e.getX(te+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ka(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new ce,c=new ce,d=new ce,h=new ce,p=new ce,m=new ce,_=new ce,g=new ce;if(e)for(let v=0,S=e.count;v<S;v+=3){const b=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,y),h.add(_),p.add(_),m.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Vn.fromBufferAttribute(e,i),Vn.normalize(),e.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,g=h.normalized,v=new m.constructor(p.length*_);let S=0,b=0;for(let C=0,y=p.length;C<y;C++){h.isInterleavedBufferAttribute?S=p[C]*h.data.stride+h.offset:S=p[C]*_;for(let M=0;M<_;M++)v[b++]=m[S++]}return new ka(v,_,g)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wa,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,g=m.length;_<g;_++){const v=m[_],S=e(v,s);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const S=m[g];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oD=0;class dh extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oD++}),this.uuid=xu(),this.name="",this.type="Material",this.blending=wl,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gg,this.blendDst=vg,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new sn(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){vt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wl&&(s.blending=this.blending),this.side!==_r&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gg&&(s.blendSrc=this.blendSrc),this.blendDst!==vg&&(s.blendDst=this.blendDst),this.blendEquation!==Ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w1&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Jo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Jo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fr=new ce,E0=new ce,od=new ce,as=new ce,T0=new ce,ld=new ce,A0=new ce;class lD{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fr.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,i),fr.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){E0.copy(e).add(i).multiplyScalar(.5),od.copy(i).sub(e).normalize(),as.copy(this.origin).sub(E0);const c=e.distanceTo(i)*.5,d=-this.direction.dot(od),h=as.dot(this.direction),p=-as.dot(od),m=as.lengthSq(),_=Math.abs(1-d*d);let g,v,S,b;if(_>0)if(g=d*p-h,v=d*h-p,b=c*_,g>=0)if(v>=-b)if(v<=b){const C=1/_;g*=C,v*=C,S=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=c,g=Math.max(0,-(d*v+h)),S=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(d*v+h)),S=-g*g+v*(v+2*p)+m;else v<=-b?(g=Math.max(0,-(-d*c+h)),v=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+m):v<=b?(g=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(g=Math.max(0,-(d*c+h)),v=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+m);else v=d>0?-c:c,g=Math.max(0,-(d*v+h)),S=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(E0).addScaledVector(od,v),S}intersectSphere(e,i){fr.subVectors(e.center,this.origin);const s=fr.dot(this.direction),l=fr.dot(fr)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),_>=0?(c=(e.min.y-v.y)*_,d=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,d=(e.min.y-v.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,i,s,l,c){T0.subVectors(i,e),ld.subVectors(s,e),A0.crossVectors(T0,ld);let d=this.direction.dot(A0),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;as.subVectors(this.origin,e);const p=h*this.direction.dot(ld.crossVectors(as,ld));if(p<0)return null;const m=h*this.direction.dot(T0.cross(as));if(m<0||p+m>d)return null;const _=-h*as.dot(A0);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wv extends dh{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=EE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const k1=new On,Gs=new lD,cd=new Av,X1=new ce,ud=new ce,fd=new ce,dd=new ce,w0=new ce,hd=new ce,j1=new ce,pd=new ce;class ja extends Pi{constructor(e=new Wa,i=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){hd.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],g=c[p];_!==0&&(w0.fromBufferAttribute(g,e),d?hd.addScaledVector(w0,_):hd.addScaledVector(w0.sub(i),_))}i.add(hd)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cd.copy(s.boundingSphere),cd.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!(cd.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(cd,X1)===null||Gs.origin.distanceToSquared(X1)>(e.far-e.near)**2))&&(k1.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(k1),!(s.boundingBox!==null&&Gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=v.length;b<C;b++){const y=v[b],M=d[y.materialIndex],R=Math.max(y.start,S.start),I=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let N=R,k=I;N<k;N+=3){const L=h.getX(N),P=h.getX(N+1),E=h.getX(N+2);l=md(this,M,e,s,m,_,g,L,P,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let y=b,M=C;y<M;y+=3){const R=h.getX(y),I=h.getX(y+1),N=h.getX(y+2);l=md(this,d,e,s,m,_,g,R,I,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,C=v.length;b<C;b++){const y=v[b],M=d[y.materialIndex],R=Math.max(y.start,S.start),I=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let N=R,k=I;N<k;N+=3){const L=N,P=N+1,E=N+2;l=md(this,M,e,s,m,_,g,L,P,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=b,M=C;y<M;y+=3){const R=y,I=y+1,N=y+2;l=md(this,d,e,s,m,_,g,R,I,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function cD(a,e,i,s,l,c,d,h){let p;if(e.side===yi?p=s.intersectTriangle(d,c,l,!0,h):p=s.intersectTriangle(l,c,d,e.side===_r,h),p===null)return null;pd.copy(h),pd.applyMatrix4(a.matrixWorld);const m=i.ray.origin.distanceTo(pd);return m<i.near||m>i.far?null:{distance:m,point:pd.clone(),object:a}}function md(a,e,i,s,l,c,d,h,p,m){a.getVertexPosition(h,ud),a.getVertexPosition(p,fd),a.getVertexPosition(m,dd);const _=cD(a,e,i,s,ud,fd,dd,j1);if(_){const g=new ce;ga.getBarycoord(j1,ud,fd,dd,g),l&&(_.uv=ga.getInterpolatedAttribute(l,h,p,m,g,new nn)),c&&(_.uv1=ga.getInterpolatedAttribute(c,h,p,m,g,new nn)),d&&(_.normal=ga.getInterpolatedAttribute(d,h,p,m,g,new ce),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new ce,materialIndex:0};ga.getNormal(ud,fd,dd,v.normal),_.face=v,_.barycoord=g}return _}class uD extends ui{constructor(e=null,i=1,s=1,l,c,d,h,p,m=Qn,_=Qn,g,v){super(null,d,h,p,m,_,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const R0=new ce,fD=new ce,dD=new St;class Ys{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=R0.subVectors(s,i).cross(fD.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(R0),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||dD.getNormalMatrix(e),l=this.coplanarPoint(R0).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Av,hD=new nn(.5,.5),gd=new ce;class qE{constructor(e=new Ys,i=new Ys,s=new Ys,l=new Ys,c=new Ys,d=new Ys){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ba,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],_=c[4],g=c[5],v=c[6],S=c[7],b=c[8],C=c[9],y=c[10],M=c[11],R=c[12],I=c[13],N=c[14],k=c[15];if(l[0].setComponents(m-d,S-_,M-b,k-R).normalize(),l[1].setComponents(m+d,S+_,M+b,k+R).normalize(),l[2].setComponents(m+h,S+g,M+C,k+I).normalize(),l[3].setComponents(m-h,S-g,M-C,k-I).normalize(),s)l[4].setComponents(p,v,y,N).normalize(),l[5].setComponents(m-p,S-v,M-y,k-N).normalize();else if(l[4].setComponents(m-p,S-v,M-y,k-N).normalize(),i===Ba)l[5].setComponents(m+p,S+v,M+y,k+N).normalize();else if(i===Qd)l[5].setComponents(p,v,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=hD.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gd.x=l.normal.x>0?e.max.x:e.min.x,gd.y=l.normal.y>0?e.max.y:e.min.y,gd.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gd)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class WE extends ui{constructor(e=[],i=ao,s,l,c,d,h,p,m,_){super(e,i,s,l,c,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zl extends ui{constructor(e,i,s=Xa,l,c,d,h=Qn,p=Qn,m,_=yr,g=1){if(_!==yr&&_!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,d,h,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pD extends zl{constructor(e,i=Xa,s=ao,l,c,d=Qn,h=Qn,p,m=yr){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,c,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class YE extends ui{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Su extends Wa{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],_=[],g=[];let v=0,S=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new $i(m,3)),this.setAttribute("normal",new $i(_,3)),this.setAttribute("uv",new $i(g,2));function b(C,y,M,R,I,N,k,L,P,E,O){const V=N/P,F=k/E,Z=N/2,te=k/2,de=L/2,q=P+1,G=E+1;let X=0,K=0;const he=new ce;for(let me=0;me<G;me++){const be=me*F-te;for(let Le=0;Le<q;Le++){const lt=Le*V-Z;he[C]=lt*R,he[y]=be*I,he[M]=de,m.push(he.x,he.y,he.z),he[C]=0,he[y]=0,he[M]=L>0?1:-1,_.push(he.x,he.y,he.z),g.push(Le/P),g.push(1-me/E),X+=1}}for(let me=0;me<E;me++)for(let be=0;be<P;be++){const Le=v+be+q*me,lt=v+be+q*(me+1),H=v+(be+1)+q*(me+1),ue=v+(be+1)+q*me;p.push(Le,lt,ue),p.push(lt,H,ue),K+=6}h.addGroup(S,K,O),S+=K,v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hh extends Wa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,_=p+1,g=e/h,v=i/p,S=[],b=[],C=[],y=[];for(let M=0;M<_;M++){const R=M*v-d;for(let I=0;I<m;I++){const N=I*g-c;b.push(N,-R,0),C.push(0,0,1),y.push(I/h),y.push(1-M/p)}}for(let M=0;M<p;M++)for(let R=0;R<h;R++){const I=R+m*M,N=R+m*(M+1),k=R+1+m*(M+1),L=R+1+m*M;S.push(I,N,L),S.push(N,k,L)}this.setIndex(S),this.setAttribute("position",new $i(b,3)),this.setAttribute("normal",new $i(C,3)),this.setAttribute("uv",new $i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rv extends Wa{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const h=[],p=[],m=[],_=[];let g=e;const v=(i-e)/l,S=new ce,b=new nn;for(let C=0;C<=l;C++){for(let y=0;y<=s;y++){const M=c+y/s*d;S.x=g*Math.cos(M),S.y=g*Math.sin(M),p.push(S.x,S.y,S.z),m.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}g+=v}for(let C=0;C<l;C++){const y=C*(s+1);for(let M=0;M<s;M++){const R=M+y,I=R,N=R+s+1,k=R+s+2,L=R+1;h.push(I,N,L),h.push(N,k,L)}}this.setIndex(h),this.setAttribute("position",new $i(p,3)),this.setAttribute("normal",new $i(m,3)),this.setAttribute("uv",new $i(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rv(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Il(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];if(q1(l))l.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(q1(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function li(a){const e={};for(let i=0;i<a.length;i++){const s=Il(a[i]);for(const l in s)e[l]=s[l]}return e}function q1(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function mD(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function ZE(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const gD={clone:Il,merge:li};var vD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_D=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends dh{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vD,this.fragmentShader=_D,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Il(e.uniforms),this.uniformsGroups=mD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xD extends qa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yD extends dh{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SD extends dh{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vd=new ce,_d=new ma,Na=new ce;class QE extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new On,this.projectionMatrix=new On,this.projectionMatrixInverse=new On,this.coordinateSystem=Ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vd,_d,Na),Na.x===1&&Na.y===1&&Na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vd,_d,Na.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(vd,_d,Na),Na.x===1&&Na.y===1&&Na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vd,_d,Na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new ce,W1=new nn,Y1=new nn;class Qi extends QE{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=av*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(r0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return av*2*Math.atan(Math.tan(r0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,i){return this.getViewBounds(e,W1,Y1),i.subVectors(Y1,W1)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(r0*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class KE extends QE{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ul=-90,fl=1;class MD extends Pi{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qi(ul,fl,e,i);l.layers=this.layers,this.add(l);const c=new Qi(ul,fl,e,i);c.layers=this.layers,this.add(c);const d=new Qi(ul,fl,e,i);d.layers=this.layers,this.add(d);const h=new Qi(ul,fl,e,i);h.layers=this.layers,this.add(h);const p=new Qi(ul,fl,e,i);p.layers=this.layers,this.add(p);const m=new Qi(ul,fl,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===Ba)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Qd)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(g,v,S),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class bD extends Qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Iv=class Iv{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Iv.prototype.isMatrix2=!0;let Z1=Iv;function Q1(a,e,i,s){const l=ED(s);switch(i){case IE:return a*e;case BE:return a*e/l.components*l.byteLength;case yv:return a*e/l.components*l.byteLength;case ro:return a*e*2/l.components*l.byteLength;case Sv:return a*e*2/l.components*l.byteLength;case FE:return a*e*3/l.components*l.byteLength;case va:return a*e*4/l.components*l.byteLength;case Mv:return a*e*4/l.components*l.byteLength;case Od:case zd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Id:case Fd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rg:case Dg:return Math.max(a,16)*Math.max(e,8)/4;case wg:case Cg:return Math.max(a,8)*Math.max(e,8)/2;case Ng:case Ug:case Pg:case Og:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Lg:case qd:case zg:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ig:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fg:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Bg:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Hg:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Gg:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Vg:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case kg:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Xg:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case jg:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case qg:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Wg:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Yg:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Zg:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Qg:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Kg:case $g:case Jg:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ev:case tv:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Wd:case nv:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ED(a){switch(a){case Ki:case LE:return{byteLength:1,components:1};case gu:case PE:case xr:return{byteLength:2,components:1};case _v:case xv:return{byteLength:2,components:4};case Xa:case vv:case Fa:return{byteLength:4,components:1};case OE:case zE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gv}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gv);function $E(){let a=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&a!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function TD(a){const e=new WeakMap;function i(h,p){const m=h.array,_=h.usage,g=m.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,m,_),h.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const _=p.array,g=p.updateRanges;if(a.bindBuffer(m,h),g.length===0)a.bufferSubData(m,0,_);else{g.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<g.length;S++){const b=g[v],C=g[S];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,g[v]=C)}g.length=v+1;for(let S=0,b=g.length;S<b;S++){const C=g[S];a.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var AD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ND=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,OD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ID=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ZD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$D=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nN="gl_FragColor = linearToOutputTexel( gl_FragColor );",iN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_N=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yN=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RN=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ON=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$N=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_U=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$U=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:AD,alphahash_pars_fragment:wD,alphamap_fragment:RD,alphamap_pars_fragment:CD,alphatest_fragment:DD,alphatest_pars_fragment:ND,aomap_fragment:UD,aomap_pars_fragment:LD,batching_pars_vertex:PD,batching_vertex:OD,begin_vertex:zD,beginnormal_vertex:ID,bsdfs:FD,iridescence_fragment:BD,bumpmap_pars_fragment:HD,clipping_planes_fragment:GD,clipping_planes_pars_fragment:VD,clipping_planes_pars_vertex:kD,clipping_planes_vertex:XD,color_fragment:jD,color_pars_fragment:qD,color_pars_vertex:WD,color_vertex:YD,common:ZD,cube_uv_reflection_fragment:QD,defaultnormal_vertex:KD,displacementmap_pars_vertex:$D,displacementmap_vertex:JD,emissivemap_fragment:eN,emissivemap_pars_fragment:tN,colorspace_fragment:nN,colorspace_pars_fragment:iN,envmap_fragment:aN,envmap_common_pars_fragment:rN,envmap_pars_fragment:sN,envmap_pars_vertex:oN,envmap_physical_pars_fragment:_N,envmap_vertex:lN,fog_vertex:cN,fog_pars_vertex:uN,fog_fragment:fN,fog_pars_fragment:dN,gradientmap_pars_fragment:hN,lightmap_pars_fragment:pN,lights_lambert_fragment:mN,lights_lambert_pars_fragment:gN,lights_pars_begin:vN,lights_toon_fragment:xN,lights_toon_pars_fragment:yN,lights_phong_fragment:SN,lights_phong_pars_fragment:MN,lights_physical_fragment:bN,lights_physical_pars_fragment:EN,lights_fragment_begin:TN,lights_fragment_maps:AN,lights_fragment_end:wN,lightprobes_pars_fragment:RN,logdepthbuf_fragment:CN,logdepthbuf_pars_fragment:DN,logdepthbuf_pars_vertex:NN,logdepthbuf_vertex:UN,map_fragment:LN,map_pars_fragment:PN,map_particle_fragment:ON,map_particle_pars_fragment:zN,metalnessmap_fragment:IN,metalnessmap_pars_fragment:FN,morphinstance_vertex:BN,morphcolor_vertex:HN,morphnormal_vertex:GN,morphtarget_pars_vertex:VN,morphtarget_vertex:kN,normal_fragment_begin:XN,normal_fragment_maps:jN,normal_pars_fragment:qN,normal_pars_vertex:WN,normal_vertex:YN,normalmap_pars_fragment:ZN,clearcoat_normal_fragment_begin:QN,clearcoat_normal_fragment_maps:KN,clearcoat_pars_fragment:$N,iridescence_pars_fragment:JN,opaque_fragment:eU,packing:tU,premultiplied_alpha_fragment:nU,project_vertex:iU,dithering_fragment:aU,dithering_pars_fragment:rU,roughnessmap_fragment:sU,roughnessmap_pars_fragment:oU,shadowmap_pars_fragment:lU,shadowmap_pars_vertex:cU,shadowmap_vertex:uU,shadowmask_pars_fragment:fU,skinbase_vertex:dU,skinning_pars_vertex:hU,skinning_vertex:pU,skinnormal_vertex:mU,specularmap_fragment:gU,specularmap_pars_fragment:vU,tonemapping_fragment:_U,tonemapping_pars_fragment:xU,transmission_fragment:yU,transmission_pars_fragment:SU,uv_pars_fragment:MU,uv_pars_vertex:bU,uv_vertex:EU,worldpos_vertex:TU,background_vert:AU,background_frag:wU,backgroundCube_vert:RU,backgroundCube_frag:CU,cube_vert:DU,cube_frag:NU,depth_vert:UU,depth_frag:LU,distance_vert:PU,distance_frag:OU,equirect_vert:zU,equirect_frag:IU,linedashed_vert:FU,linedashed_frag:BU,meshbasic_vert:HU,meshbasic_frag:GU,meshlambert_vert:VU,meshlambert_frag:kU,meshmatcap_vert:XU,meshmatcap_frag:jU,meshnormal_vert:qU,meshnormal_frag:WU,meshphong_vert:YU,meshphong_frag:ZU,meshphysical_vert:QU,meshphysical_frag:KU,meshtoon_vert:$U,meshtoon_frag:JU,points_vert:eL,points_frag:tL,shadow_vert:nL,shadow_frag:iL,sprite_vert:aL,sprite_frag:rL},Ve={common:{diffuse:{value:new sn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new sn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new sn(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},za={basic:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)},specular:{value:new sn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:li([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:li([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:li([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:li([Ve.points,Ve.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:li([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:li([Ve.common,Ve.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:li([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:li([Ve.sprite,Ve.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:li([Ve.common,Ve.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:li([Ve.lights,Ve.fog,{color:{value:new sn(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};za.physical={uniforms:li([za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new sn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new sn(0)},specularColor:{value:new sn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const xd={r:0,b:0,g:0},sL=new On,JE=new St;JE.set(-1,0,0,0,1,0,0,0,1);function oL(a,e,i,s,l,c){const d=new sn(0);let h=l===!0?0:1,p,m,_=null,g=0,v=null;function S(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const N=R.backgroundBlurriness>0;I=e.get(I,N)}return I}function b(R){let I=!1;const N=S(R);N===null?y(d,h):N&&N.isColor&&(y(N,1),I=!0);const k=a.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(R,I){const N=S(I);N&&(N.isCubeTexture||N.mapping===fh)?(m===void 0&&(m=new ja(new Su(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Il(za.backgroundCube.uniforms),vertexShader:za.backgroundCube.vertexShader,fragmentShader:za.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(sL.makeRotationFromEuler(I.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(JE),m.material.toneMapped=Gt.getTransfer(N.colorSpace)!==tn,(_!==N||g!==N.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,_=N,g=N.version,v=a.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ja(new hh(2,2),new qa({name:"BackgroundMaterial",uniforms:Il(za.background.uniforms),vertexShader:za.background.vertexShader,fragmentShader:za.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(N.colorSpace)!==tn,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||g!==N.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,_=N,g=N.version,v=a.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function y(R,I){R.getRGB(xd,ZE(a)),i.buffers.color.setClear(xd.r,xd.g,xd.b,I,c)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,I=1){d.set(R),h=I,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(d,h)},render:b,addToRenderList:C,dispose:M}}function lL(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function h(F,Z,te,de,q){let G=!1;const X=g(F,de,te,Z);c!==X&&(c=X,m(c.object)),G=S(F,de,te,q),G&&b(F,de,te,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,N(F,Z,te,de),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function p(){return a.createVertexArray()}function m(F){return a.bindVertexArray(F)}function _(F){return a.deleteVertexArray(F)}function g(F,Z,te,de){const q=de.wireframe===!0;let G=s[Z.id];G===void 0&&(G={},s[Z.id]=G);const X=F.isInstancedMesh===!0?F.id:0;let K=G[X];K===void 0&&(K={},G[X]=K);let he=K[te.id];he===void 0&&(he={},K[te.id]=he);let me=he[q];return me===void 0&&(me=v(p()),he[q]=me),me}function v(F){const Z=[],te=[],de=[];for(let q=0;q<i;q++)Z[q]=0,te[q]=0,de[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:de,object:F,attributes:{},index:null}}function S(F,Z,te,de){const q=c.attributes,G=Z.attributes;let X=0;const K=te.getAttributes();for(const he in K)if(K[he].location>=0){const be=q[he];let Le=G[he];if(Le===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(Le=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(Le=F.instanceColor)),be===void 0||be.attribute!==Le||Le&&be.data!==Le.data)return!0;X++}return c.attributesNum!==X||c.index!==de}function b(F,Z,te,de){const q={},G=Z.attributes;let X=0;const K=te.getAttributes();for(const he in K)if(K[he].location>=0){let be=G[he];be===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(be=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(be=F.instanceColor));const Le={};Le.attribute=be,be&&be.data&&(Le.data=be.data),q[he]=Le,X++}c.attributes=q,c.attributesNum=X,c.index=de}function C(){const F=c.newAttributes;for(let Z=0,te=F.length;Z<te;Z++)F[Z]=0}function y(F){M(F,0)}function M(F,Z){const te=c.newAttributes,de=c.enabledAttributes,q=c.attributeDivisors;te[F]=1,de[F]===0&&(a.enableVertexAttribArray(F),de[F]=1),q[F]!==Z&&(a.vertexAttribDivisor(F,Z),q[F]=Z)}function R(){const F=c.newAttributes,Z=c.enabledAttributes;for(let te=0,de=Z.length;te<de;te++)Z[te]!==F[te]&&(a.disableVertexAttribArray(te),Z[te]=0)}function I(F,Z,te,de,q,G,X){X===!0?a.vertexAttribIPointer(F,Z,te,q,G):a.vertexAttribPointer(F,Z,te,de,q,G)}function N(F,Z,te,de){C();const q=de.attributes,G=te.getAttributes(),X=Z.defaultAttributeValues;for(const K in G){const he=G[K];if(he.location>=0){let me=q[K];if(me===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),me!==void 0){const be=me.normalized,Le=me.itemSize,lt=e.get(me);if(lt===void 0)continue;const H=lt.buffer,ue=lt.type,ee=lt.bytesPerElement,pe=ue===a.INT||ue===a.UNSIGNED_INT||me.gpuType===vv;if(me.isInterleavedBufferAttribute){const fe=me.data,De=fe.stride,we=me.offset;if(fe.isInstancedInterleavedBuffer){for(let Me=0;Me<he.locationSize;Me++)M(he.location+Me,fe.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<he.locationSize;Me++)y(he.location+Me);a.bindBuffer(a.ARRAY_BUFFER,H);for(let Me=0;Me<he.locationSize;Me++)I(he.location+Me,Le/he.locationSize,ue,be,De*ee,(we+Le/he.locationSize*Me)*ee,pe)}else{if(me.isInstancedBufferAttribute){for(let fe=0;fe<he.locationSize;fe++)M(he.location+fe,me.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let fe=0;fe<he.locationSize;fe++)y(he.location+fe);a.bindBuffer(a.ARRAY_BUFFER,H);for(let fe=0;fe<he.locationSize;fe++)I(he.location+fe,Le/he.locationSize,ue,be,Le*ee,Le/he.locationSize*fe*ee,pe)}}else if(X!==void 0){const be=X[K];if(be!==void 0)switch(be.length){case 2:a.vertexAttrib2fv(he.location,be);break;case 3:a.vertexAttrib3fv(he.location,be);break;case 4:a.vertexAttrib4fv(he.location,be);break;default:a.vertexAttrib1fv(he.location,be)}}}}R()}function k(){O();for(const F in s){const Z=s[F];for(const te in Z){const de=Z[te];for(const q in de){const G=de[q];for(const X in G)_(G[X].object),delete G[X];delete de[q]}}delete s[F]}}function L(F){if(s[F.id]===void 0)return;const Z=s[F.id];for(const te in Z){const de=Z[te];for(const q in de){const G=de[q];for(const X in G)_(G[X].object),delete G[X];delete de[q]}}delete s[F.id]}function P(F){for(const Z in s){const te=s[Z];for(const de in te){const q=te[de];if(q[F.id]===void 0)continue;const G=q[F.id];for(const X in G)_(G[X].object),delete G[X];delete q[F.id]}}}function E(F){for(const Z in s){const te=s[Z],de=F.isInstancedMesh===!0?F.id:0,q=te[de];if(q!==void 0){for(const G in q){const X=q[G];for(const K in X)_(X[K].object),delete X[K];delete q[G]}delete te[de],Object.keys(te).length===0&&delete s[Z]}}}function O(){V(),d=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:V,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function cL(a,e,i){let s;function l(p){s=p}function c(p,m){a.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,_){_!==0&&(a.drawArraysInstanced(s,p,m,_),i.update(m,s,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let v=0;for(let S=0;S<_;S++)v+=m[S];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function uL(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==va&&s.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const E=P===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ki&&s.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fa&&!E)}function p(P){if(P==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(vt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),k=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:N,maxSamples:k,samples:L}}function fL(a){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ys,h=new St,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||l;return l=v,s=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,S){const b=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,M=a.get(g);if(!l||b===null||b.length===0||c&&!y)c?_(null):m();else{const R=c?0:s,I=R*4;let N=M.clippingState||null;p.value=N,N=_(b,v,I,S);for(let k=0;k!==I;++k)N[k]=i[k];M.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,v,S,b){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=p.value,b!==!0||y===null){const M=S+C*4,R=v.matrixWorldInverse;h.getNormalMatrix(R),(y===null||y.length<M)&&(y=new Float32Array(M));for(let I=0,N=S;I!==C;++I,N+=4)d.copy(g[I]).applyMatrix4(R,h),d.normal.toArray(y,N),y[N+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const ds=4,K1=[.125,.215,.35,.446,.526,.582],$s=20,dL=256,qc=new KE,$1=new sn;let C0=null,D0=0,N0=0,U0=!1;const hL=new ce;class J1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=hL}=c;C0=this._renderer.getRenderTarget(),D0=this._renderer.getActiveCubeFace(),N0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(C0,D0,N0),this._renderer.xr.enabled=U0,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ao||e.mapping===Ol?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),C0=this._renderer.getRenderTarget(),D0=this._renderer.getActiveCubeFace(),N0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:xr,format:va,colorSpace:Yd,depthBuffer:!1},l=eM(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eM(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pL(c)),this._blurMaterial=gL(c,e,i),this._ggxMaterial=mL(c,e,i)}return l}_compileMaterial(e){const i=new ja(new Wa,e);this._renderer.compile(i,qc)}_sceneToCubeUV(e,i,s,l,c){const p=new Qi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor($1),g.toneMapping=Ga,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ja(new Su,new wv({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let M=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,M=!0):(y.color.copy($1),M=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[I],c.y,c.z)):N===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[I]));const k=this._cubeSize;dl(l,N*k,I>2?k:0,k,k),g.setRenderTarget(l),M&&g.render(C,p),g.render(e,p)}g.toneMapping=S,g.autoClear=v,e.background=R}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ao||e.mapping===Ol;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tM());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;dl(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,qc)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-_*_),v=0+m*1.25,S=g*v,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-ds?s-b+ds:0),M=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=b-i,dl(c,y,M,3*C,2*C),l.setRenderTarget(c),l.render(h,qc),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-s,dl(e,y,M,3*C,2*C),l.setRenderTarget(e),l.render(h,qc)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=m;const v=m.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*$s-1),C=c/b,y=isFinite(c)?1+Math.floor(_*C):$s;y>$s&&vt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$s}`);const M=[];let R=0;for(let P=0;P<$s;++P){const E=P/C,O=Math.exp(-E*E/2);M.push(O),P===0?R+=O:P<y&&(R+=2*O)}for(let P=0;P<M.length;P++)M[P]=M[P]/R;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:I}=this;v.dTheta.value=b,v.mipInt.value=I-s;const N=this._sizeLods[l],k=3*N*(l>I-ds?l-I+ds:0),L=4*(this._cubeSize-N);dl(i,k,L,3*N,2*N),p.setRenderTarget(i),p.render(g,qc)}}function pL(a){const e=[],i=[],s=[];let l=a;const c=a-ds+1+K1.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let p=1/h;d>a-ds?p=K1[d-a+ds-1]:d===0&&(p=0),i.push(p);const m=1/(h-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,b=6,C=3,y=2,M=1,R=new Float32Array(C*b*S),I=new Float32Array(y*b*S),N=new Float32Array(M*b*S);for(let L=0;L<S;L++){const P=L%3*2/3-1,E=L>2?0:-1,O=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];R.set(O,C*b*L),I.set(v,y*b*L);const V=[L,L,L,L,L,L];N.set(V,M*b*L)}const k=new Wa;k.setAttribute("position",new ka(R,C)),k.setAttribute("uv",new ka(I,y)),k.setAttribute("faceIndex",new ka(N,M)),s.push(new ja(k,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function eM(a,e,i){const s=new Va(a,e,i);return s.texture.mapping=fh,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function dl(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function mL(a,e,i){return new qa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function gL(a,e,i){const s=new Float32Array($s),l=new ce(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function tM(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function nM(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class eT extends Va{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new WE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Su(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Il(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:yi,blending:gr});c.uniforms.tEquirect.value=i;const d=new ja(l,c),h=i.minFilter;return i.minFilter===Js&&(i.minFilter=ti),new MD(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function vL(a){let e=new WeakMap,i=new WeakMap,s=null;function l(v,S=!1){return v==null?null:S?d(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===n0||S===i0)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new eT(b.height);return C.fromEquirectangularTexture(a,v),e.set(v,C),v.addEventListener("dispose",m),h(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const S=v.mapping,b=S===n0||S===i0,C=S===ao||S===Ol;if(b||C){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return s===null&&(s=new J1(a)),y=b?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const R=v.image;return b&&R&&R.height>0||C&&R&&p(R)?(s===null&&(s=new J1(a)),y=b?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function h(v,S){return S===n0?v.mapping=ao:S===i0&&(v.mapping=Ol),v}function p(v){let S=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&S++;return S===b}function m(v){const S=v.target;S.removeEventListener("dispose",m);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function _L(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&iv("WebGLRenderer: "+s+" extension not supported."),l}}}function xL(a,e,i,s){const l={},c=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",d),delete l[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function m(g){const v=[],S=g.index,b=g.attributes.position;let C=0;if(b===void 0)return;if(S!==null){const R=S.array;C=S.version;for(let I=0,N=R.length;I<N;I+=3){const k=R[I+0],L=R[I+1],P=R[I+2];v.push(k,L,L,P,P,k)}}else{const R=b.array;C=b.version;for(let I=0,N=R.length/3-1;I<N;I+=3){const k=I+0,L=I+1,P=I+2;v.push(k,L,L,P,P,k)}}const y=new(b.count>=65535?jE:XE)(v,1);y.version=C;const M=c.get(g);M&&e.remove(M),c.set(g,y)}function _(g){const v=c.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function yL(a,e,i){let s;function l(g){s=g}let c,d;function h(g){c=g.type,d=g.bytesPerElement}function p(g,v){a.drawElements(s,v,c,g*d),i.update(v,s,1)}function m(g,v,S){S!==0&&(a.drawElementsInstanced(s,v,c,g*d,S),i.update(v,s,S))}function _(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,g,0,S);let C=0;for(let y=0;y<S;y++)C+=v[y];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function SL(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:jt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ML(a,e,i){const s=new WeakMap,l=new Mn;function c(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let O=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let I=0;S===!0&&(I=1),b===!0&&(I=2),C===!0&&(I=3);let N=h.attributes.position.count*I,k=1;N>e.maxTextureSize&&(k=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*k*4*g),P=new GE(L,N,k,g);P.type=Fa,P.needsUpdate=!0;const E=I*4;for(let V=0;V<g;V++){const F=y[V],Z=M[V],te=R[V],de=N*k*4*V;for(let q=0;q<F.count;q++){const G=q*E;S===!0&&(l.fromBufferAttribute(F,q),L[de+G+0]=l.x,L[de+G+1]=l.y,L[de+G+2]=l.z,L[de+G+3]=0),b===!0&&(l.fromBufferAttribute(Z,q),L[de+G+4]=l.x,L[de+G+5]=l.y,L[de+G+6]=l.z,L[de+G+7]=0),C===!0&&(l.fromBufferAttribute(te,q),L[de+G+8]=l.x,L[de+G+9]=l.y,L[de+G+10]=l.z,L[de+G+11]=te.itemSize===4?l.w:1)}}v={count:g,texture:P,size:new nn(N,k)},s.set(h,v),h.addEventListener("dispose",O)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",d.morphTexture,i);else{let S=0;for(let C=0;C<m.length;C++)S+=m[C];const b=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(a,"morphTargetBaseInfluence",b),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function bL(a,e,i,s,l){let c=new WeakMap;function d(m){const _=l.render.frame,g=m.geometry,v=e.get(m,g);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return v}function h(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const EL={[TE]:"LINEAR_TONE_MAPPING",[AE]:"REINHARD_TONE_MAPPING",[wE]:"CINEON_TONE_MAPPING",[RE]:"ACES_FILMIC_TONE_MAPPING",[DE]:"AGX_TONE_MAPPING",[NE]:"NEUTRAL_TONE_MAPPING",[CE]:"CUSTOM_TONE_MAPPING"};function TL(a,e,i,s,l){const c=new Va(e,i,{type:a,depthBuffer:s,stencilBuffer:l,depthTexture:s?new zl(e,i):void 0}),d=new Va(e,i,{type:xr,depthBuffer:!1,stencilBuffer:!1}),h=new Wa;h.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $i([0,2,0,0,2,0],2));const p=new xD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new ja(h,p),_=new KE(-1,1,1,-1,0,1);let g=null,v=null,S=!1,b,C=null,y=[],M=!1;this.setSize=function(R,I){c.setSize(R,I),d.setSize(R,I);for(let N=0;N<y.length;N++){const k=y[N];k.setSize&&k.setSize(R,I)}},this.setEffects=function(R){y=R,M=y.length>0&&y[0].isRenderPass===!0;const I=c.width,N=c.height;for(let k=0;k<y.length;k++){const L=y[k];L.setSize&&L.setSize(I,N)}},this.begin=function(R,I){if(S||R.toneMapping===Ga&&y.length===0)return!1;if(C=I,I!==null){const N=I.width,k=I.height;(c.width!==N||c.height!==k)&&this.setSize(N,k)}return M===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=Ga,!0},this.hasRenderPass=function(){return M},this.end=function(R,I){R.toneMapping=b,S=!0;let N=c,k=d;for(let L=0;L<y.length;L++){const P=y[L];if(P.enabled!==!1&&(P.render(R,k,N,I),P.needsSwap!==!1)){const E=N;N=k,k=E}}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,p.defines={},Gt.getTransfer(g)===tn&&(p.defines.SRGB_TRANSFER="");const L=EL[v];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,R.setRenderTarget(C),R.render(m,_),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),p.dispose()}}const tT=new ui,rv=new zl(1,1),nT=new GE,iT=new ZC,aT=new WE,iM=[],aM=[],rM=new Float32Array(16),sM=new Float32Array(9),oM=new Float32Array(4);function Gl(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=iM[l];if(c===void 0&&(c=new Float32Array(l),iM[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,a[d].toArray(c,h)}return c}function zn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function In(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function mh(a,e){let i=aM[e];i===void 0&&(i=new Int32Array(e),aM[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function AL(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function wL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(zn(i,e))return;a.uniform2fv(this.addr,e),In(i,e)}}function RL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(zn(i,e))return;a.uniform3fv(this.addr,e),In(i,e)}}function CL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(zn(i,e))return;a.uniform4fv(this.addr,e),In(i,e)}}function DL(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(zn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),In(i,e)}else{if(zn(i,s))return;oM.set(s),a.uniformMatrix2fv(this.addr,!1,oM),In(i,s)}}function NL(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(zn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),In(i,e)}else{if(zn(i,s))return;sM.set(s),a.uniformMatrix3fv(this.addr,!1,sM),In(i,s)}}function UL(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(zn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),In(i,e)}else{if(zn(i,s))return;rM.set(s),a.uniformMatrix4fv(this.addr,!1,rM),In(i,s)}}function LL(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function PL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(zn(i,e))return;a.uniform2iv(this.addr,e),In(i,e)}}function OL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(zn(i,e))return;a.uniform3iv(this.addr,e),In(i,e)}}function zL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(zn(i,e))return;a.uniform4iv(this.addr,e),In(i,e)}}function IL(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function FL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(zn(i,e))return;a.uniform2uiv(this.addr,e),In(i,e)}}function BL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(zn(i,e))return;a.uniform3uiv(this.addr,e),In(i,e)}}function HL(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(zn(i,e))return;a.uniform4uiv(this.addr,e),In(i,e)}}function GL(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(rv.compareFunction=i.isReversedDepthBuffer()?Ev:bv,c=rv):c=tT,i.setTexture2D(e||c,l)}function VL(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||iT,l)}function kL(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||aT,l)}function XL(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||nT,l)}function jL(a){switch(a){case 5126:return AL;case 35664:return wL;case 35665:return RL;case 35666:return CL;case 35674:return DL;case 35675:return NL;case 35676:return UL;case 5124:case 35670:return LL;case 35667:case 35671:return PL;case 35668:case 35672:return OL;case 35669:case 35673:return zL;case 5125:return IL;case 36294:return FL;case 36295:return BL;case 36296:return HL;case 35678:case 36198:case 36298:case 36306:case 35682:return GL;case 35679:case 36299:case 36307:return VL;case 35680:case 36300:case 36308:case 36293:return kL;case 36289:case 36303:case 36311:case 36292:return XL}}function qL(a,e){a.uniform1fv(this.addr,e)}function WL(a,e){const i=Gl(e,this.size,2);a.uniform2fv(this.addr,i)}function YL(a,e){const i=Gl(e,this.size,3);a.uniform3fv(this.addr,i)}function ZL(a,e){const i=Gl(e,this.size,4);a.uniform4fv(this.addr,i)}function QL(a,e){const i=Gl(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function KL(a,e){const i=Gl(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function $L(a,e){const i=Gl(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function JL(a,e){a.uniform1iv(this.addr,e)}function eP(a,e){a.uniform2iv(this.addr,e)}function tP(a,e){a.uniform3iv(this.addr,e)}function nP(a,e){a.uniform4iv(this.addr,e)}function iP(a,e){a.uniform1uiv(this.addr,e)}function aP(a,e){a.uniform2uiv(this.addr,e)}function rP(a,e){a.uniform3uiv(this.addr,e)}function sP(a,e){a.uniform4uiv(this.addr,e)}function oP(a,e,i){const s=this.cache,l=e.length,c=mh(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));let d;this.type===a.SAMPLER_2D_SHADOW?d=rv:d=tT;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function lP(a,e,i){const s=this.cache,l=e.length,c=mh(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||iT,c[d])}function cP(a,e,i){const s=this.cache,l=e.length,c=mh(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||aT,c[d])}function uP(a,e,i){const s=this.cache,l=e.length,c=mh(i,l);zn(s,c)||(a.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||nT,c[d])}function fP(a){switch(a){case 5126:return qL;case 35664:return WL;case 35665:return YL;case 35666:return ZL;case 35674:return QL;case 35675:return KL;case 35676:return $L;case 5124:case 35670:return JL;case 35667:case 35671:return eP;case 35668:case 35672:return tP;case 35669:case 35673:return nP;case 5125:return iP;case 36294:return aP;case 36295:return rP;case 36296:return sP;case 35678:case 36198:case 36298:case 36306:case 35682:return oP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return cP;case 36289:case 36303:case 36311:case 36292:return uP}}class dP{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=jL(i.type)}}class hP{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fP(i.type)}}class pP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const L0=/(\w+)(\])?(\[|\.)?/g;function lM(a,e){a.seq.push(e),a.map[e.id]=e}function mP(a,e,i){const s=a.name,l=s.length;for(L0.lastIndex=0;;){const c=L0.exec(s),d=L0.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){lM(i,m===void 0?new dP(h,a,e):new hP(h,a,e));break}else{let g=i.map[h];g===void 0&&(g=new pP(h),lM(i,g)),i=g}}}class Bd{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);mP(h,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function cM(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const gP=37297;let vP=0;function _P(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const uM=new St;function xP(a){Gt._getMatrix(uM,Gt.workingColorSpace,a);const e=`mat3( ${uM.elements.map(i=>i.toFixed(4))} )`;switch(Gt.getTransfer(a)){case Zd:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function fM(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+_P(a.getShaderSource(e),h)}else return c}function yP(a,e){const i=xP(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const SP={[TE]:"Linear",[AE]:"Reinhard",[wE]:"Cineon",[RE]:"ACESFilmic",[DE]:"AgX",[NE]:"Neutral",[CE]:"Custom"};function MP(a,e){const i=SP[e];return i===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const yd=new ce;function bP(){Gt.getLuminanceCoefficients(yd);const a=yd.x.toFixed(4),e=yd.y.toFixed(4),i=yd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EP(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(su).join(`
`)}function TP(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function AP(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),d=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:a.getAttribLocation(e,d),locationSize:h}}return i}function su(a){return a!==""}function dM(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hM(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wP=/^[ \t]*#include +<([\w\d./]+)>/gm;function sv(a){return a.replace(wP,CP)}const RP=new Map;function CP(a,e){let i=Rt[e];if(i===void 0){const s=RP.get(e);if(s!==void 0)i=Rt[s],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sv(i)}const DP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pM(a){return a.replace(DP,NP)}function NP(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function mM(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UP={[Pd]:"SHADOWMAP_TYPE_PCF",[ru]:"SHADOWMAP_TYPE_VSM"};function LP(a){return UP[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PP={[ao]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE",[fh]:"ENVMAP_TYPE_CUBE_UV"};function OP(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":PP[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const zP={[Ol]:"ENVMAP_MODE_REFRACTION"};function IP(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":zP[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FP={[EE]:"ENVMAP_BLENDING_MULTIPLY",[RC]:"ENVMAP_BLENDING_MIX",[CC]:"ENVMAP_BLENDING_ADD"};function BP(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":FP[a.combine]||"ENVMAP_BLENDING_NONE"}function HP(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function GP(a,e,i,s){const l=a.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=LP(i),m=OP(i),_=IP(i),g=BP(i),v=HP(i),S=EP(i),b=TP(c),C=l.createProgram();let y,M,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(su).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(su).join(`
`),M.length>0&&(M+=`
`)):(y=[mM(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(su).join(`
`),M=[mM(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?Rt.tonemapping_pars_fragment:"",i.toneMapping!==Ga?MP("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,yP("linearToOutputTexel",i.outputColorSpace),bP(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(su).join(`
`)),d=sv(d),d=dM(d,i),d=hM(d,i),h=sv(h),h=dM(h,i),h=hM(h,i),d=pM(d),h=pM(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===C1?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const I=R+y+d,N=R+M+h,k=cM(l,l.VERTEX_SHADER,I),L=cM(l,l.FRAGMENT_SHADER,N);l.attachShader(C,k),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(F){if(a.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",te=l.getShaderInfoLog(k)||"",de=l.getShaderInfoLog(L)||"",q=Z.trim(),G=te.trim(),X=de.trim();let K=!0,he=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(K=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,C,k,L);else{const me=fM(l,k,"vertex"),be=fM(l,L,"fragment");jt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+me+`
`+be)}else q!==""?vt("WebGLProgram: Program Info Log:",q):(G===""||X==="")&&(he=!1);he&&(F.diagnostics={runnable:K,programLog:q,vertexShader:{log:G,prefix:y},fragmentShader:{log:X,prefix:M}})}l.deleteShader(k),l.deleteShader(L),E=new Bd(l,C),O=AP(l,C)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(C,gP)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vP++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=L,this}let VP=0;class kP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new XP(e),i.set(e,s)),s}}class XP{constructor(e){this.id=VP++,this.code=e,this.usedTimes=0}}function jP(a){return a===ro||a===qd||a===Wd}function qP(a,e,i,s,l,c){const d=new VE,h=new kP,p=new Set,m=[],_=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return p.add(E),E===0?"uv":`uv${E}`}function C(E,O,V,F,Z,te){const de=F.fog,q=Z.geometry,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,K=e.get(E.envMap||G,X),he=K&&K.mapping===fh?K.image.height:null,me=S[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Le=be!==void 0?be.length:0;let lt=0;q.morphAttributes.position!==void 0&&(lt=1),q.morphAttributes.normal!==void 0&&(lt=2),q.morphAttributes.color!==void 0&&(lt=3);let H,ue,ee,pe;if(me){const ot=za[me];H=ot.vertexShader,ue=ot.fragmentShader}else H=E.vertexShader,ue=E.fragmentShader,h.update(E),ee=h.getVertexShaderID(E),pe=h.getFragmentShaderID(E);const fe=a.getRenderTarget(),De=a.state.buffers.depth.getReversed(),we=Z.isInstancedMesh===!0,Me=Z.isBatchedMesh===!0,ke=!!E.map,ht=!!E.matcap,Ot=!!K,Ft=!!E.aoMap,ft=!!E.lightMap,Dt=!!E.bumpMap,ct=!!E.normalMap,ln=!!E.displacementMap,z=!!E.emissiveMap,pt=!!E.metalnessMap,Qe=!!E.roughnessMap,ut=E.anisotropy>0,Ee=E.clearcoat>0,Bt=E.dispersion>0,D=E.iridescence>0,T=E.sheen>0,ne=E.transmission>0,ve=ut&&!!E.anisotropyMap,Te=Ee&&!!E.clearcoatMap,Ne=Ee&&!!E.clearcoatNormalMap,ze=Ee&&!!E.clearcoatRoughnessMap,ge=D&&!!E.iridescenceMap,Se=D&&!!E.iridescenceThicknessMap,He=T&&!!E.sheenColorMap,qe=T&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Ue=!!E.specularColorMap,rt=!!E.specularIntensityMap,yt=ne&&!!E.transmissionMap,Ht=ne&&!!E.thicknessMap,W=!!E.gradientMap,Re=!!E.alphaMap,ye=E.alphaTest>0,Xe=!!E.alphaHash,Oe=!!E.extensions;let Ae=Ga;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Je={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:ue,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Me,batchingColor:Me&&Z._colorsTexture!==null,instancing:we,instancingColor:we&&Z.instanceColor!==null,instancingMorph:we&&Z.morphTexture!==null,outputColorSpace:fe===null?a.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:ht,envMap:Ot,envMapMode:Ot&&K.mapping,envMapCubeUVHeight:he,aoMap:Ft,lightMap:ft,bumpMap:Dt,normalMap:ct,displacementMap:ln,emissiveMap:z,normalMapObjectSpace:ct&&E.normalMapType===UC,normalMapTangentSpace:ct&&E.normalMapType===A1,packedNormalMap:ct&&E.normalMapType===A1&&jP(E.normalMap.format),metalnessMap:pt,roughnessMap:Qe,anisotropy:ut,anisotropyMap:ve,clearcoat:Ee,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ze,dispersion:Bt,iridescence:D,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:T,sheenColorMap:He,sheenRoughnessMap:qe,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:rt,transmission:ne,transmissionMap:yt,thicknessMap:Ht,gradientMap:W,opaque:E.transparent===!1&&E.blending===wl&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:ye,alphaHash:Xe,combine:E.combine,mapUv:ke&&b(E.map.channel),aoMapUv:Ft&&b(E.aoMap.channel),lightMapUv:ft&&b(E.lightMap.channel),bumpMapUv:Dt&&b(E.bumpMap.channel),normalMapUv:ct&&b(E.normalMap.channel),displacementMapUv:ln&&b(E.displacementMap.channel),emissiveMapUv:z&&b(E.emissiveMap.channel),metalnessMapUv:pt&&b(E.metalnessMap.channel),roughnessMapUv:Qe&&b(E.roughnessMap.channel),anisotropyMapUv:ve&&b(E.anisotropyMap.channel),clearcoatMapUv:Te&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&b(E.sheenRoughnessMap.channel),specularMapUv:Pe&&b(E.specularMap.channel),specularColorMapUv:Ue&&b(E.specularColorMap.channel),specularIntensityMapUv:rt&&b(E.specularIntensityMap.channel),transmissionMapUv:yt&&b(E.transmissionMap.channel),thicknessMapUv:Ht&&b(E.thicknessMap.channel),alphaMapUv:Re&&b(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ct||ut),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(ke||Re),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&ct===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:De,skinning:Z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:lt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&Gt.getTransfer(E.map.colorSpace)===tn,decodeVideoTextureEmissive:z&&E.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(E.emissiveMap.colorSpace)===tn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pr,flipSided:E.side===yi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Oe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&E.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function y(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)O.push(V),O.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(M(O,E),R(O,E),O.push(a.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function M(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function R(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),E.push(d.mask)}function I(E){const O=S[E.type];let V;if(O){const F=za[O];V=gD.clone(F.uniforms)}else V=E.uniforms;return V}function N(E,O){let V=_.get(O);return V!==void 0?++V.usedTimes:(V=new GP(a,O,E,l),m.push(V),_.set(O,V)),V}function k(E){if(--E.usedTimes===0){const O=m.indexOf(E);m[O]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function L(E){h.remove(E)}function P(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:I,acquireProgram:N,releaseProgram:k,releaseShaderCache:L,programs:m,dispose:P}}function WP(){let a=new WeakMap;function e(d){return a.has(d)}function i(d){let h=a.get(d);return h===void 0&&(h={},a.set(d,h)),h}function s(d){a.delete(d)}function l(d,h,p){a.get(d)[h]=p}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function YP(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function gM(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function vM(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function h(v,S,b,C,y,M){let R=a[e];return R===void 0?(R={id:v.id,object:v,geometry:S,material:b,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:M},a[e]=R):(R.id=v.id,R.object=v,R.geometry=S,R.material=b,R.materialVariant=d(v),R.groupOrder=C,R.renderOrder=v.renderOrder,R.z=y,R.group=M),e++,R}function p(v,S,b,C,y,M){const R=h(v,S,b,C,y,M);b.transmission>0?s.push(R):b.transparent===!0?l.push(R):i.push(R)}function m(v,S,b,C,y,M){const R=h(v,S,b,C,y,M);b.transmission>0?s.unshift(R):b.transparent===!0?l.unshift(R):i.unshift(R)}function _(v,S){i.length>1&&i.sort(v||YP),s.length>1&&s.sort(S||gM),l.length>1&&l.sort(S||gM)}function g(){for(let v=e,S=a.length;v<S;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:g,sort:_}}function ZP(){let a=new WeakMap;function e(s,l){const c=a.get(s);let d;return c===void 0?(d=new vM,a.set(s,[d])):l>=c.length?(d=new vM,c.push(d)):d=c[l],d}function i(){a=new WeakMap}return{get:e,dispose:i}}function QP(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new sn};break;case"SpotLight":i={position:new ce,direction:new ce,color:new sn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new sn,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new sn,groundColor:new sn};break;case"RectAreaLight":i={color:new sn,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return a[e.id]=i,i}}}function KP(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let $P=0;function JP(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function eO(a){const e=new QP,i=KP(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ce);const l=new ce,c=new On,d=new On;function h(m){let _=0,g=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let S=0,b=0,C=0,y=0,M=0,R=0,I=0,N=0,k=0,L=0,P=0;m.sort(JP);for(let O=0,V=m.length;O<V;O++){const F=m[O],Z=F.color,te=F.intensity,de=F.distance;let q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ro?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=Z.r*te,g+=Z.g*te,v+=Z.b*te;else if(F.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(F.sh.coefficients[G],te);P++}else if(F.isDirectionalLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const X=F.shadow,K=i.get(F);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=q,s.directionalShadowMatrix[S]=F.shadow.matrix,R++}s.directional[S]=G,S++}else if(F.isSpotLight){const G=e.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(Z).multiplyScalar(te),G.distance=de,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,s.spot[C]=G;const X=F.shadow;if(F.map&&(s.spotLightMap[k]=F.map,k++,X.updateMatrices(F),F.castShadow&&L++),s.spotLightMatrix[C]=X.matrix,F.castShadow){const K=i.get(F);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,s.spotShadow[C]=K,s.spotShadowMap[C]=q,N++}C++}else if(F.isRectAreaLight){const G=e.get(F);G.color.copy(Z).multiplyScalar(te),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=G,y++}else if(F.isPointLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const X=F.shadow,K=i.get(F);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=q,s.pointShadowMatrix[b]=F.shadow.matrix,I++}s.point[b]=G,b++}else if(F.isHemisphereLight){const G=e.get(F);G.skyColor.copy(F.color).multiplyScalar(te),G.groundColor.copy(F.groundColor).multiplyScalar(te),s.hemi[M]=G,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==S||E.pointLength!==b||E.spotLength!==C||E.rectAreaLength!==y||E.hemiLength!==M||E.numDirectionalShadows!==R||E.numPointShadows!==I||E.numSpotShadows!==N||E.numSpotMaps!==k||E.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=M,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=N+k-L,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=P,E.directionalLength=S,E.pointLength=b,E.spotLength=C,E.rectAreaLength=y,E.hemiLength=M,E.numDirectionalShadows=R,E.numPointShadows=I,E.numSpotShadows=N,E.numSpotMaps=k,E.numLightProbes=P,s.version=$P++)}function p(m,_){let g=0,v=0,S=0,b=0,C=0;const y=_.matrixWorldInverse;for(let M=0,R=m.length;M<R;M++){const I=m[M];if(I.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),g++}else if(I.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(y),d.identity(),c.copy(I.matrixWorld),c.premultiply(y),d.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(I.isPointLight){const N=s.point[v];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(y),v++}else if(I.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:h,setupView:p,state:s}}function _M(a){const e=new eO(a),i=[],s=[],l=[];function c(v){g.camera=v,i.length=0,s.length=0,l.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function _(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:_,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function tO(a){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new _M(a),e.set(l,[h])):c>=d.length?(h=new _M(a),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const nO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aO=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],rO=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],xM=new On,Wc=new ce,P0=new ce;function sO(a,e,i){let s=new qE;const l=new nn,c=new nn,d=new Mn,h=new yD,p=new SD,m={},_=i.maxTextureSize,g={[_r]:yi,[yi]:_r,[pr]:pr},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:nO,fragmentShader:iO}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new Wa;b.setAttribute("position",new ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ja(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let M=this.type;this.render=function(L,P,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===cC&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pd);const O=a.getRenderTarget(),V=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(gr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=M!==this.type;te&&P.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(q=>q.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,q=L.length;de<q;de++){const G=L[de],X=G.shadow;if(X===void 0){vt("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const K=X.getFrameExtents();l.multiply(K),c.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/K.x),l.x=c.x*K.x,X.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/K.y),l.y=c.y*K.y,X.mapSize.y=c.y));const he=a.state.buffers.depth.getReversed();if(X.camera._reversedDepth=he,X.map===null||te===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ru){if(G.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Va(l.x,l.y,{format:ro,type:xr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new zl(l.x,l.y,Fa),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=yr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qn,X.map.depthTexture.magFilter=Qn}else G.isPointLight?(X.map=new eT(l.x),X.map.depthTexture=new pD(l.x,Xa)):(X.map=new Va(l.x,l.y),X.map.depthTexture=new zl(l.x,l.y,Xa)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=yr,this.type===Pd?(X.map.depthTexture.compareFunction=he?Ev:bv,X.map.depthTexture.minFilter=ti,X.map.depthTexture.magFilter=ti):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qn,X.map.depthTexture.magFilter=Qn);X.camera.updateProjectionMatrix()}const me=X.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<me;be++){if(X.map.isWebGLCubeRenderTarget)a.setRenderTarget(X.map,be),a.clear();else{be===0&&(a.setRenderTarget(X.map),a.clear());const Le=X.getViewport(be);d.set(c.x*Le.x,c.y*Le.y,c.x*Le.z,c.y*Le.w),Z.viewport(d)}if(G.isPointLight){const Le=X.camera,lt=X.matrix,H=G.distance||Le.far;H!==Le.far&&(Le.far=H,Le.updateProjectionMatrix()),Wc.setFromMatrixPosition(G.matrixWorld),Le.position.copy(Wc),P0.copy(Le.position),P0.add(aO[be]),Le.up.copy(rO[be]),Le.lookAt(P0),Le.updateMatrixWorld(),lt.makeTranslation(-Wc.x,-Wc.y,-Wc.z),xM.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),X._frustum.setFromProjectionMatrix(xM,Le.coordinateSystem,Le.reversedDepth)}else X.updateMatrices(G);s=X.getFrustum(),N(P,E,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===ru&&R(X,E),X.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(O,V,F)};function R(L,P){const E=e.update(C);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Va(l.x,l.y,{format:ro,type:xr})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(P,null,E,v,C,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(P,null,E,S,C,null)}function I(L,P,E,O){let V=null;const F=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)V=F;else if(V=E.isPointLight===!0?p:h,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Z=V.uuid,te=P.uuid;let de=m[Z];de===void 0&&(de={},m[Z]=de);let q=de[te];q===void 0&&(q=V.clone(),de[te]=q,P.addEventListener("dispose",k)),V=q}if(V.visible=P.visible,V.wireframe=P.wireframe,O===ru?V.side=P.shadowSide!==null?P.shadowSide:P.side:V.side=P.shadowSide!==null?P.shadowSide:g[P.side],V.alphaMap=P.alphaMap,V.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,V.map=P.map,V.clipShadows=P.clipShadows,V.clippingPlanes=P.clippingPlanes,V.clipIntersection=P.clipIntersection,V.displacementMap=P.displacementMap,V.displacementScale=P.displacementScale,V.displacementBias=P.displacementBias,V.wireframeLinewidth=P.wireframeLinewidth,V.linewidth=P.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=a.properties.get(V);Z.light=E}return V}function N(L,P,E,O,V){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===ru)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const te=e.update(L),de=L.material;if(Array.isArray(de)){const q=te.groups;for(let G=0,X=q.length;G<X;G++){const K=q[G],he=de[K.materialIndex];if(he&&he.visible){const me=I(L,he,O,V);L.onBeforeShadow(a,L,P,E,te,me,K),a.renderBufferDirect(E,null,te,me,L,K),L.onAfterShadow(a,L,P,E,te,me,K)}}}else if(de.visible){const q=I(L,de,O,V);L.onBeforeShadow(a,L,P,E,te,q,null),a.renderBufferDirect(E,null,te,q,L,null),L.onAfterShadow(a,L,P,E,te,q,null)}}const Z=L.children;for(let te=0,de=Z.length;te<de;te++)N(Z[te],P,E,O,V)}function k(L){L.target.removeEventListener("dispose",k);for(const E in m){const O=m[E],V=L.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function oO(a,e){function i(){let W=!1;const Re=new Mn;let ye=null;const Xe=new Mn(0,0,0,0);return{setMask:function(Oe){ye!==Oe&&!W&&(a.colorMask(Oe,Oe,Oe,Oe),ye=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,Ae,Je,ot,Zt){Zt===!0&&(Oe*=ot,Ae*=ot,Je*=ot),Re.set(Oe,Ae,Je,ot),Xe.equals(Re)===!1&&(a.clearColor(Oe,Ae,Je,ot),Xe.copy(Re))},reset:function(){W=!1,ye=null,Xe.set(-1,0,0,0)}}}function s(){let W=!1,Re=!1,ye=null,Xe=null,Oe=null;return{setReversed:function(Ae){if(Re!==Ae){const Je=e.get("EXT_clip_control");Ae?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Re=Ae;const ot=Oe;Oe=null,this.setClear(ot)}},getReversed:function(){return Re},setTest:function(Ae){Ae?fe(a.DEPTH_TEST):De(a.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!W&&(a.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(Re&&(Ae=VC[Ae]),Xe!==Ae){switch(Ae){case _g:a.depthFunc(a.NEVER);break;case xg:a.depthFunc(a.ALWAYS);break;case yg:a.depthFunc(a.LESS);break;case Pl:a.depthFunc(a.LEQUAL);break;case Sg:a.depthFunc(a.EQUAL);break;case Mg:a.depthFunc(a.GEQUAL);break;case bg:a.depthFunc(a.GREATER);break;case Eg:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Xe=Ae}},setLocked:function(Ae){W=Ae},setClear:function(Ae){Oe!==Ae&&(Oe=Ae,Re&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){W=!1,ye=null,Xe=null,Oe=null,Re=!1}}}function l(){let W=!1,Re=null,ye=null,Xe=null,Oe=null,Ae=null,Je=null,ot=null,Zt=null;return{setTest:function(Mt){W||(Mt?fe(a.STENCIL_TEST):De(a.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!W&&(a.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,ea,zi){(ye!==Mt||Xe!==ea||Oe!==zi)&&(a.stencilFunc(Mt,ea,zi),ye=Mt,Xe=ea,Oe=zi)},setOp:function(Mt,ea,zi){(Ae!==Mt||Je!==ea||ot!==zi)&&(a.stencilOp(Mt,ea,zi),Ae=Mt,Je=ea,ot=zi)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Zt!==Mt&&(a.clearStencil(Mt),Zt=Mt)},reset:function(){W=!1,Re=null,ye=null,Xe=null,Oe=null,Ae=null,Je=null,ot=null,Zt=null}}}const c=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let _={},g={},v={},S=new WeakMap,b=[],C=null,y=!1,M=null,R=null,I=null,N=null,k=null,L=null,P=null,E=new sn(0,0,0),O=0,V=!1,F=null,Z=null,te=null,de=null,q=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const he=a.getParameter(a.VERSION);he.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(he)[1]),X=K>=1):he.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),X=K>=2);let me=null,be={};const Le=a.getParameter(a.SCISSOR_BOX),lt=a.getParameter(a.VIEWPORT),H=new Mn().fromArray(Le),ue=new Mn().fromArray(lt);function ee(W,Re,ye,Xe){const Oe=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(W,Ae),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Je=0;Je<ye;Je++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,Xe,0,a.RGBA,a.UNSIGNED_BYTE,Oe):a.texImage2D(Re+Je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Oe);return Ae}const pe={};pe[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),pe[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),pe[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(a.DEPTH_TEST),d.setFunc(Pl),Dt(!1),ct(M1),fe(a.CULL_FACE),Ft(gr);function fe(W){_[W]!==!0&&(a.enable(W),_[W]=!0)}function De(W){_[W]!==!1&&(a.disable(W),_[W]=!1)}function we(W,Re){return v[W]!==Re?(a.bindFramebuffer(W,Re),v[W]=Re,W===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Re),W===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Me(W,Re){let ye=b,Xe=!1;if(W){ye=S.get(Re),ye===void 0&&(ye=[],S.set(Re,ye));const Oe=W.textures;if(ye.length!==Oe.length||ye[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Je=Oe.length;Ae<Je;Ae++)ye[Ae]=a.COLOR_ATTACHMENT0+Ae;ye.length=Oe.length,Xe=!0}}else ye[0]!==a.BACK&&(ye[0]=a.BACK,Xe=!0);Xe&&a.drawBuffers(ye)}function ke(W){return C!==W?(a.useProgram(W),C=W,!0):!1}const ht={[Ks]:a.FUNC_ADD,[fC]:a.FUNC_SUBTRACT,[dC]:a.FUNC_REVERSE_SUBTRACT};ht[hC]=a.MIN,ht[pC]=a.MAX;const Ot={[mC]:a.ZERO,[gC]:a.ONE,[vC]:a.SRC_COLOR,[gg]:a.SRC_ALPHA,[bC]:a.SRC_ALPHA_SATURATE,[SC]:a.DST_COLOR,[xC]:a.DST_ALPHA,[_C]:a.ONE_MINUS_SRC_COLOR,[vg]:a.ONE_MINUS_SRC_ALPHA,[MC]:a.ONE_MINUS_DST_COLOR,[yC]:a.ONE_MINUS_DST_ALPHA,[EC]:a.CONSTANT_COLOR,[TC]:a.ONE_MINUS_CONSTANT_COLOR,[AC]:a.CONSTANT_ALPHA,[wC]:a.ONE_MINUS_CONSTANT_ALPHA};function Ft(W,Re,ye,Xe,Oe,Ae,Je,ot,Zt,Mt){if(W===gr){y===!0&&(De(a.BLEND),y=!1);return}if(y===!1&&(fe(a.BLEND),y=!0),W!==uC){if(W!==M||Mt!==V){if((R!==Ks||k!==Ks)&&(a.blendEquation(a.FUNC_ADD),R=Ks,k=Ks),Mt)switch(W){case wl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case b1:a.blendFunc(a.ONE,a.ONE);break;case E1:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case T1:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:jt("WebGLState: Invalid blending: ",W);break}else switch(W){case wl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case b1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case E1:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T1:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",W);break}I=null,N=null,L=null,P=null,E.set(0,0,0),O=0,M=W,V=Mt}return}Oe=Oe||Re,Ae=Ae||ye,Je=Je||Xe,(Re!==R||Oe!==k)&&(a.blendEquationSeparate(ht[Re],ht[Oe]),R=Re,k=Oe),(ye!==I||Xe!==N||Ae!==L||Je!==P)&&(a.blendFuncSeparate(Ot[ye],Ot[Xe],Ot[Ae],Ot[Je]),I=ye,N=Xe,L=Ae,P=Je),(ot.equals(E)===!1||Zt!==O)&&(a.blendColor(ot.r,ot.g,ot.b,Zt),E.copy(ot),O=Zt),M=W,V=!1}function ft(W,Re){W.side===pr?De(a.CULL_FACE):fe(a.CULL_FACE);let ye=W.side===yi;Re&&(ye=!ye),Dt(ye),W.blending===wl&&W.transparent===!1?Ft(gr):Ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Xe=W.stencilWrite;h.setTest(Xe),Xe&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(a.SAMPLE_ALPHA_TO_COVERAGE):De(a.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(W){F!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),F=W)}function ct(W){W!==oC?(fe(a.CULL_FACE),W!==Z&&(W===M1?a.cullFace(a.BACK):W===lC?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):De(a.CULL_FACE),Z=W}function ln(W){W!==te&&(X&&a.lineWidth(W),te=W)}function z(W,Re,ye){W?(fe(a.POLYGON_OFFSET_FILL),(de!==Re||q!==ye)&&(de=Re,q=ye,d.getReversed()&&(Re=-Re),a.polygonOffset(Re,ye))):De(a.POLYGON_OFFSET_FILL)}function pt(W){W?fe(a.SCISSOR_TEST):De(a.SCISSOR_TEST)}function Qe(W){W===void 0&&(W=a.TEXTURE0+G-1),me!==W&&(a.activeTexture(W),me=W)}function ut(W,Re,ye){ye===void 0&&(me===null?ye=a.TEXTURE0+G-1:ye=me);let Xe=be[ye];Xe===void 0&&(Xe={type:void 0,texture:void 0},be[ye]=Xe),(Xe.type!==W||Xe.texture!==Re)&&(me!==ye&&(a.activeTexture(ye),me=ye),a.bindTexture(W,Re||pe[W]),Xe.type=W,Xe.texture=Re)}function Ee(){const W=be[me];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Bt(){try{a.compressedTexImage2D(...arguments)}catch(W){jt("WebGLState:",W)}}function D(){try{a.compressedTexImage3D(...arguments)}catch(W){jt("WebGLState:",W)}}function T(){try{a.texSubImage2D(...arguments)}catch(W){jt("WebGLState:",W)}}function ne(){try{a.texSubImage3D(...arguments)}catch(W){jt("WebGLState:",W)}}function ve(){try{a.compressedTexSubImage2D(...arguments)}catch(W){jt("WebGLState:",W)}}function Te(){try{a.compressedTexSubImage3D(...arguments)}catch(W){jt("WebGLState:",W)}}function Ne(){try{a.texStorage2D(...arguments)}catch(W){jt("WebGLState:",W)}}function ze(){try{a.texStorage3D(...arguments)}catch(W){jt("WebGLState:",W)}}function ge(){try{a.texImage2D(...arguments)}catch(W){jt("WebGLState:",W)}}function Se(){try{a.texImage3D(...arguments)}catch(W){jt("WebGLState:",W)}}function He(W){return g[W]!==void 0?g[W]:a.getParameter(W)}function qe(W,Re){g[W]!==Re&&(a.pixelStorei(W,Re),g[W]=Re)}function Pe(W){H.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),H.copy(W))}function Ue(W){ue.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),ue.copy(W))}function rt(W,Re){let ye=m.get(Re);ye===void 0&&(ye=new WeakMap,m.set(Re,ye));let Xe=ye.get(W);Xe===void 0&&(Xe=a.getUniformBlockIndex(Re,W.name),ye.set(W,Xe))}function yt(W,Re){const Xe=m.get(Re).get(W);p.get(Re)!==Xe&&(a.uniformBlockBinding(Re,Xe,W.__bindingPointIndex),p.set(Re,Xe))}function Ht(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),d.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},g={},me=null,be={},v={},S=new WeakMap,b=[],C=null,y=!1,M=null,R=null,I=null,N=null,k=null,L=null,P=null,E=new sn(0,0,0),O=0,V=!1,F=null,Z=null,te=null,de=null,q=null,H.set(0,0,a.canvas.width,a.canvas.height),ue.set(0,0,a.canvas.width,a.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:De,bindFramebuffer:we,drawBuffers:Me,useProgram:ke,setBlending:Ft,setMaterial:ft,setFlipSided:Dt,setCullFace:ct,setLineWidth:ln,setPolygonOffset:z,setScissorTest:pt,activeTexture:Qe,bindTexture:ut,unbindTexture:Ee,compressedTexImage2D:Bt,compressedTexImage3D:D,texImage2D:ge,texImage3D:Se,pixelStorei:qe,getParameter:He,updateUBOMapping:rt,uniformBlockBinding:yt,texStorage2D:Ne,texStorage3D:ze,texSubImage2D:T,texSubImage3D:ne,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:Pe,viewport:Ue,reset:Ht}}function lO(a,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new nn,_=new WeakMap,g=new Set;let v;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,T){return b?new OffscreenCanvas(D,T):Kd("canvas")}function y(D,T,ne){let ve=1;const Te=Bt(D);if((Te.width>ne||Te.height>ne)&&(ve=ne/Math.max(Te.width,Te.height)),ve<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ne=Math.floor(ve*Te.width),ze=Math.floor(ve*Te.height);v===void 0&&(v=C(Ne,ze));const ge=T?C(Ne,ze):v;return ge.width=Ne,ge.height=ze,ge.getContext("2d").drawImage(D,0,0,Ne,ze),vt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Ne+"x"+ze+")."),ge}else return"data"in D&&vt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),D;return D}function M(D){return D.generateMipmaps}function R(D){a.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(D,T,ne,ve,Te,Ne=!1){if(D!==null){if(a[D]!==void 0)return a[D];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ze;ve&&(ze=e.get("EXT_texture_norm16"),ze||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=T;if(T===a.RED&&(ne===a.FLOAT&&(ge=a.R32F),ne===a.HALF_FLOAT&&(ge=a.R16F),ne===a.UNSIGNED_BYTE&&(ge=a.R8),ne===a.UNSIGNED_SHORT&&ze&&(ge=ze.R16_EXT),ne===a.SHORT&&ze&&(ge=ze.R16_SNORM_EXT)),T===a.RED_INTEGER&&(ne===a.UNSIGNED_BYTE&&(ge=a.R8UI),ne===a.UNSIGNED_SHORT&&(ge=a.R16UI),ne===a.UNSIGNED_INT&&(ge=a.R32UI),ne===a.BYTE&&(ge=a.R8I),ne===a.SHORT&&(ge=a.R16I),ne===a.INT&&(ge=a.R32I)),T===a.RG&&(ne===a.FLOAT&&(ge=a.RG32F),ne===a.HALF_FLOAT&&(ge=a.RG16F),ne===a.UNSIGNED_BYTE&&(ge=a.RG8),ne===a.UNSIGNED_SHORT&&ze&&(ge=ze.RG16_EXT),ne===a.SHORT&&ze&&(ge=ze.RG16_SNORM_EXT)),T===a.RG_INTEGER&&(ne===a.UNSIGNED_BYTE&&(ge=a.RG8UI),ne===a.UNSIGNED_SHORT&&(ge=a.RG16UI),ne===a.UNSIGNED_INT&&(ge=a.RG32UI),ne===a.BYTE&&(ge=a.RG8I),ne===a.SHORT&&(ge=a.RG16I),ne===a.INT&&(ge=a.RG32I)),T===a.RGB_INTEGER&&(ne===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),ne===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),ne===a.UNSIGNED_INT&&(ge=a.RGB32UI),ne===a.BYTE&&(ge=a.RGB8I),ne===a.SHORT&&(ge=a.RGB16I),ne===a.INT&&(ge=a.RGB32I)),T===a.RGBA_INTEGER&&(ne===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),ne===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),ne===a.UNSIGNED_INT&&(ge=a.RGBA32UI),ne===a.BYTE&&(ge=a.RGBA8I),ne===a.SHORT&&(ge=a.RGBA16I),ne===a.INT&&(ge=a.RGBA32I)),T===a.RGB&&(ne===a.UNSIGNED_SHORT&&ze&&(ge=ze.RGB16_EXT),ne===a.SHORT&&ze&&(ge=ze.RGB16_SNORM_EXT),ne===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),ne===a.UNSIGNED_INT_10F_11F_11F_REV&&(ge=a.R11F_G11F_B10F)),T===a.RGBA){const Se=Ne?Zd:Gt.getTransfer(Te);ne===a.FLOAT&&(ge=a.RGBA32F),ne===a.HALF_FLOAT&&(ge=a.RGBA16F),ne===a.UNSIGNED_BYTE&&(ge=Se===tn?a.SRGB8_ALPHA8:a.RGBA8),ne===a.UNSIGNED_SHORT&&ze&&(ge=ze.RGBA16_EXT),ne===a.SHORT&&ze&&(ge=ze.RGBA16_SNORM_EXT),ne===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),ne===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function k(D,T){let ne;return D?T===null||T===Xa||T===vu?ne=a.DEPTH24_STENCIL8:T===Fa?ne=a.DEPTH32F_STENCIL8:T===gu&&(ne=a.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xa||T===vu?ne=a.DEPTH_COMPONENT24:T===Fa?ne=a.DEPTH_COMPONENT32F:T===gu&&(ne=a.DEPTH_COMPONENT16),ne}function L(D,T){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qn&&D.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function P(D){const T=D.target;T.removeEventListener("dispose",P),O(T),T.isVideoTexture&&_.delete(T),T.isHTMLTexture&&g.delete(T)}function E(D){const T=D.target;T.removeEventListener("dispose",E),F(T)}function O(D){const T=s.get(D);if(T.__webglInit===void 0)return;const ne=D.source,ve=S.get(ne);if(ve){const Te=ve[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&V(D),Object.keys(ve).length===0&&S.delete(ne)}s.remove(D)}function V(D){const T=s.get(D);a.deleteTexture(T.__webglTexture);const ne=D.source,ve=S.get(ne);delete ve[T.__cacheKey],d.memory.textures--}function F(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Te=0;Te<T.__webglFramebuffer[ve].length;Te++)a.deleteFramebuffer(T.__webglFramebuffer[ve][Te]);else a.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)a.deleteFramebuffer(T.__webglFramebuffer[ve]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=D.textures;for(let ve=0,Te=ne.length;ve<Te;ve++){const Ne=s.get(ne[ve]);Ne.__webglTexture&&(a.deleteTexture(Ne.__webglTexture),d.memory.textures--),s.remove(ne[ve])}s.remove(D)}let Z=0;function te(){Z=0}function de(){return Z}function q(D){Z=D}function G(){const D=Z;return D>=l.maxTextures&&vt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Z+=1,D}function X(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function K(D,T){const ne=s.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ne.__version!==D.version){const ve=D.image;if(ve===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(ne,D,T);return}}else D.isExternalTexture&&(ne.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,ne.__webglTexture,a.TEXTURE0+T)}function he(D,T){const ne=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){De(ne,D,T);return}else D.isExternalTexture&&(ne.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,ne.__webglTexture,a.TEXTURE0+T)}function me(D,T){const ne=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){De(ne,D,T);return}i.bindTexture(a.TEXTURE_3D,ne.__webglTexture,a.TEXTURE0+T)}function be(D,T){const ne=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&ne.__version!==D.version){we(ne,D,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture,a.TEXTURE0+T)}const Le={[Tg]:a.REPEAT,[mr]:a.CLAMP_TO_EDGE,[Ag]:a.MIRRORED_REPEAT},lt={[Qn]:a.NEAREST,[DC]:a.NEAREST_MIPMAP_NEAREST,[Jf]:a.NEAREST_MIPMAP_LINEAR,[ti]:a.LINEAR,[a0]:a.LINEAR_MIPMAP_NEAREST,[Js]:a.LINEAR_MIPMAP_LINEAR},H={[LC]:a.NEVER,[FC]:a.ALWAYS,[PC]:a.LESS,[bv]:a.LEQUAL,[OC]:a.EQUAL,[Ev]:a.GEQUAL,[zC]:a.GREATER,[IC]:a.NOTEQUAL};function ue(D,T){if(T.type===Fa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===a0||T.magFilter===Jf||T.magFilter===Js||T.minFilter===ti||T.minFilter===a0||T.minFilter===Jf||T.minFilter===Js)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,Le[T.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,Le[T.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,Le[T.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,lt[T.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,lt[T.minFilter]),T.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==Jf&&T.minFilter!==Js||T.type===Fa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ee(D,T){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",P));const ve=T.source;let Te=S.get(ve);Te===void 0&&(Te={},S.set(ve,Te));const Ne=X(T);if(Ne!==D.__cacheKey){Te[Ne]===void 0&&(Te[Ne]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),Te[Ne].usedTimes++;const ze=Te[D.__cacheKey];ze!==void 0&&(Te[D.__cacheKey].usedTimes--,ze.usedTimes===0&&V(T)),D.__cacheKey=Ne,D.__webglTexture=Te[Ne].texture}return ne}function pe(D,T,ne){return Math.floor(Math.floor(D/ne)/T)}function fe(D,T,ne,ve){const Ne=D.updateRanges;if(Ne.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,ne,ve,T.data);else{Ne.sort((qe,Pe)=>qe.start-Pe.start);let ze=0;for(let qe=1;qe<Ne.length;qe++){const Pe=Ne[ze],Ue=Ne[qe],rt=Pe.start+Pe.count,yt=pe(Ue.start,T.width,4),Ht=pe(Pe.start,T.width,4);Ue.start<=rt+1&&yt===Ht&&pe(Ue.start+Ue.count-1,T.width,4)===yt?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++ze,Ne[ze]=Ue)}Ne.length=ze+1;const ge=i.getParameter(a.UNPACK_ROW_LENGTH),Se=i.getParameter(a.UNPACK_SKIP_PIXELS),He=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let qe=0,Pe=Ne.length;qe<Pe;qe++){const Ue=Ne[qe],rt=Math.floor(Ue.start/4),yt=Math.ceil(Ue.count/4),Ht=rt%T.width,W=Math.floor(rt/T.width),Re=yt,ye=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(a.UNPACK_SKIP_ROWS,W),i.texSubImage2D(a.TEXTURE_2D,0,Ht,W,Re,ye,ne,ve,T.data)}D.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,ge),i.pixelStorei(a.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(a.UNPACK_SKIP_ROWS,He)}}function De(D,T,ne){let ve=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=a.TEXTURE_3D);const Te=ee(D,T),Ne=T.source;i.bindTexture(ve,D.__webglTexture,a.TEXTURE0+ne);const ze=s.get(Ne);if(Ne.version!==ze.__version||Te===!0){if(i.activeTexture(a.TEXTURE0+ne),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ye=Gt.getPrimaries(Gt.workingColorSpace),Xe=T.colorSpace===us?null:Gt.getPrimaries(T.colorSpace),Oe=T.colorSpace===us||ye===Xe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}i.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment);let Se=y(T.image,!1,l.maxTextureSize);Se=Ee(T,Se);const He=c.convert(T.format,T.colorSpace),qe=c.convert(T.type);let Pe=N(T.internalFormat,He,qe,T.normalized,T.colorSpace,T.isVideoTexture);ue(ve,T);let Ue;const rt=T.mipmaps,yt=T.isVideoTexture!==!0,Ht=ze.__version===void 0||Te===!0,W=Ne.dataReady,Re=L(T,Se);if(T.isDepthTexture)Pe=k(T.format===eo,T.type),Ht&&(yt?i.texStorage2D(a.TEXTURE_2D,1,Pe,Se.width,Se.height):i.texImage2D(a.TEXTURE_2D,0,Pe,Se.width,Se.height,0,He,qe,null));else if(T.isDataTexture)if(rt.length>0){yt&&Ht&&i.texStorage2D(a.TEXTURE_2D,Re,Pe,rt[0].width,rt[0].height);for(let ye=0,Xe=rt.length;ye<Xe;ye++)Ue=rt[ye],yt?W&&i.texSubImage2D(a.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,He,qe,Ue.data):i.texImage2D(a.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,He,qe,Ue.data);T.generateMipmaps=!1}else yt?(Ht&&i.texStorage2D(a.TEXTURE_2D,Re,Pe,Se.width,Se.height),W&&fe(T,Se,He,qe)):i.texImage2D(a.TEXTURE_2D,0,Pe,Se.width,Se.height,0,He,qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){yt&&Ht&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Pe,rt[0].width,rt[0].height,Se.depth);for(let ye=0,Xe=rt.length;ye<Xe;ye++)if(Ue=rt[ye],T.format!==va)if(He!==null)if(yt){if(W)if(T.layerUpdates.size>0){const Oe=Q1(Ue.width,Ue.height,T.format,T.type);for(const Ae of T.layerUpdates){const Je=Ue.data.subarray(Ae*Oe/Ue.data.BYTES_PER_ELEMENT,(Ae+1)*Oe/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,Ae,Ue.width,Ue.height,1,He,Je)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,Se.depth,He,Ue.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ye,Pe,Ue.width,Ue.height,Se.depth,0,Ue.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?W&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,Se.depth,He,qe,Ue.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ye,Pe,Ue.width,Ue.height,Se.depth,0,He,qe,Ue.data)}else{yt&&Ht&&i.texStorage2D(a.TEXTURE_2D,Re,Pe,rt[0].width,rt[0].height);for(let ye=0,Xe=rt.length;ye<Xe;ye++)Ue=rt[ye],T.format!==va?He!==null?yt?W&&i.compressedTexSubImage2D(a.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,He,Ue.data):i.compressedTexImage2D(a.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,Ue.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?W&&i.texSubImage2D(a.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,He,qe,Ue.data):i.texImage2D(a.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,He,qe,Ue.data)}else if(T.isDataArrayTexture)if(yt){if(Ht&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Pe,Se.width,Se.height,Se.depth),W)if(T.layerUpdates.size>0){const ye=Q1(Se.width,Se.height,T.format,T.type);for(const Xe of T.layerUpdates){const Oe=Se.data.subarray(Xe*ye/Se.data.BYTES_PER_ELEMENT,(Xe+1)*ye/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Xe,Se.width,Se.height,1,He,qe,Oe)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,He,qe,Se.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,Se.width,Se.height,Se.depth,0,He,qe,Se.data);else if(T.isData3DTexture)yt?(Ht&&i.texStorage3D(a.TEXTURE_3D,Re,Pe,Se.width,Se.height,Se.depth),W&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,He,qe,Se.data)):i.texImage3D(a.TEXTURE_3D,0,Pe,Se.width,Se.height,Se.depth,0,He,qe,Se.data);else if(T.isFramebufferTexture){if(Ht)if(yt)i.texStorage2D(a.TEXTURE_2D,Re,Pe,Se.width,Se.height);else{let ye=Se.width,Xe=Se.height;for(let Oe=0;Oe<Re;Oe++)i.texImage2D(a.TEXTURE_2D,Oe,Pe,ye,Xe,0,He,qe,null),ye>>=1,Xe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in a){const ye=a.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),Se.parentNode!==ye){ye.appendChild(Se),g.add(T),ye.onpaint=ot=>{const Zt=ot.changedElements;for(const Mt of g)Zt.includes(Mt.image)&&(Mt.needsUpdate=!0)},ye.requestPaint();return}const Xe=0,Oe=a.RGBA,Ae=a.RGBA,Je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Xe,Oe,Ae,Je,Se),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(rt.length>0){if(yt&&Ht){const ye=Bt(rt[0]);i.texStorage2D(a.TEXTURE_2D,Re,Pe,ye.width,ye.height)}for(let ye=0,Xe=rt.length;ye<Xe;ye++)Ue=rt[ye],yt?W&&i.texSubImage2D(a.TEXTURE_2D,ye,0,0,He,qe,Ue):i.texImage2D(a.TEXTURE_2D,ye,Pe,He,qe,Ue);T.generateMipmaps=!1}else if(yt){if(Ht){const ye=Bt(Se);i.texStorage2D(a.TEXTURE_2D,Re,Pe,ye.width,ye.height)}W&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,He,qe,Se)}else i.texImage2D(a.TEXTURE_2D,0,Pe,He,qe,Se);M(T)&&R(ve),ze.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function we(D,T,ne){if(T.image.length!==6)return;const ve=ee(D,T),Te=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+ne);const Ne=s.get(Te);if(Te.version!==Ne.__version||ve===!0){i.activeTexture(a.TEXTURE0+ne);const ze=Gt.getPrimaries(Gt.workingColorSpace),ge=T.colorSpace===us?null:Gt.getPrimaries(T.colorSpace),Se=T.colorSpace===us||ze===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const He=T.isCompressedTexture||T.image[0].isCompressedTexture,qe=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let Ae=0;Ae<6;Ae++)!He&&!qe?Pe[Ae]=y(T.image[Ae],!0,l.maxCubemapSize):Pe[Ae]=qe?T.image[Ae].image:T.image[Ae],Pe[Ae]=Ee(T,Pe[Ae]);const Ue=Pe[0],rt=c.convert(T.format,T.colorSpace),yt=c.convert(T.type),Ht=N(T.internalFormat,rt,yt,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Re=Ne.__version===void 0||ve===!0,ye=Te.dataReady;let Xe=L(T,Ue);ue(a.TEXTURE_CUBE_MAP,T);let Oe;if(He){W&&Re&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Xe,Ht,Ue.width,Ue.height);for(let Ae=0;Ae<6;Ae++){Oe=Pe[Ae].mipmaps;for(let Je=0;Je<Oe.length;Je++){const ot=Oe[Je];T.format!==va?rt!==null?W?ye&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,ot.width,ot.height,rt,ot.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,Ht,ot.width,ot.height,0,ot.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,ot.width,ot.height,rt,yt,ot.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,Ht,ot.width,ot.height,0,rt,yt,ot.data)}}}else{if(Oe=T.mipmaps,W&&Re){Oe.length>0&&Xe++;const Ae=Bt(Pe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Xe,Ht,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(qe){W?ye&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Pe[Ae].width,Pe[Ae].height,rt,yt,Pe[Ae].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Ht,Pe[Ae].width,Pe[Ae].height,0,rt,yt,Pe[Ae].data);for(let Je=0;Je<Oe.length;Je++){const Zt=Oe[Je].image[Ae].image;W?ye&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,Zt.width,Zt.height,rt,yt,Zt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,Ht,Zt.width,Zt.height,0,rt,yt,Zt.data)}}else{W?ye&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,rt,yt,Pe[Ae]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Ht,rt,yt,Pe[Ae]);for(let Je=0;Je<Oe.length;Je++){const ot=Oe[Je];W?ye&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,rt,yt,ot.image[Ae]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,Ht,rt,yt,ot.image[Ae])}}}M(T)&&R(a.TEXTURE_CUBE_MAP),Ne.__version=Te.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Me(D,T,ne,ve,Te,Ne){const ze=c.convert(ne.format,ne.colorSpace),ge=c.convert(ne.type),Se=N(ne.internalFormat,ze,ge,ne.normalized,ne.colorSpace),He=s.get(T),qe=s.get(ne);if(qe.__renderTarget=T,!He.__hasExternalTextures){const Pe=Math.max(1,T.width>>Ne),Ue=Math.max(1,T.height>>Ne);Te===a.TEXTURE_3D||Te===a.TEXTURE_2D_ARRAY?i.texImage3D(Te,Ne,Se,Pe,Ue,T.depth,0,ze,ge,null):i.texImage2D(Te,Ne,Se,Pe,Ue,0,ze,ge,null)}i.bindFramebuffer(a.FRAMEBUFFER,D),Qe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,Te,qe.__webglTexture,0,pt(T)):(Te===a.TEXTURE_2D||Te>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,Te,qe.__webglTexture,Ne),i.bindFramebuffer(a.FRAMEBUFFER,null)}function ke(D,T,ne){if(a.bindRenderbuffer(a.RENDERBUFFER,D),T.depthBuffer){const ve=T.depthTexture,Te=ve&&ve.isDepthTexture?ve.type:null,Ne=k(T.stencilBuffer,Te),ze=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Qe(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,pt(T),Ne,T.width,T.height):ne?a.renderbufferStorageMultisample(a.RENDERBUFFER,pt(T),Ne,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ne,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ze,a.RENDERBUFFER,D)}else{const ve=T.textures;for(let Te=0;Te<ve.length;Te++){const Ne=ve[Te],ze=c.convert(Ne.format,Ne.colorSpace),ge=c.convert(Ne.type),Se=N(Ne.internalFormat,ze,ge,Ne.normalized,Ne.colorSpace);Qe(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,pt(T),Se,T.width,T.height):ne?a.renderbufferStorageMultisample(a.RENDERBUFFER,pt(T),Se,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Se,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(D,T,ne){const ve=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(T.depthTexture);if(Te.__renderTarget=T,(!Te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),Te.__webglTexture===void 0){Te.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,Te.__webglTexture),ue(a.TEXTURE_CUBE_MAP,T.depthTexture);const He=c.convert(T.depthTexture.format),qe=c.convert(T.depthTexture.type);let Pe;T.depthTexture.format===yr?Pe=a.DEPTH_COMPONENT24:T.depthTexture.format===eo&&(Pe=a.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,T.width,T.height,0,He,qe,null)}}else K(T.depthTexture,0);const Ne=Te.__webglTexture,ze=pt(T),ge=ve?a.TEXTURE_CUBE_MAP_POSITIVE_X+ne:a.TEXTURE_2D,Se=T.depthTexture.format===eo?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===yr)Qe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,ge,Ne,0,ze):a.framebufferTexture2D(a.FRAMEBUFFER,Se,ge,Ne,0);else if(T.depthTexture.format===eo)Qe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,ge,Ne,0,ze):a.framebufferTexture2D(a.FRAMEBUFFER,Se,ge,Ne,0);else throw new Error("Unknown depthTexture format")}function Ot(D){const T=s.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ve=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Te)};ve.addEventListener("dispose",Te),T.__depthDisposeCallback=Te}T.__boundDepthTexture=ve}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(ne)for(let ve=0;ve<6;ve++)ht(T.__webglFramebuffer[ve],D,ve);else{const ve=D.texture.mipmaps;ve&&ve.length>0?ht(T.__webglFramebuffer[0],D,0):ht(T.__webglFramebuffer,D,0)}else if(ne){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=a.createRenderbuffer(),ke(T.__webglDepthbuffer[ve],D,!1);else{const Te=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,Ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,Ne)}}else{const ve=D.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ke(T.__webglDepthbuffer,D,!1);else{const Te=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,Ne)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ft(D,T,ne){const ve=s.get(D);T!==void 0&&Me(ve.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ne!==void 0&&Ot(D)}function ft(D){const T=D.texture,ne=s.get(D),ve=s.get(T);D.addEventListener("dispose",E);const Te=D.textures,Ne=D.isWebGLCubeRenderTarget===!0,ze=Te.length>1;if(ze||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=T.version,d.memory.textures++),Ne){ne.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[ge]=[];for(let Se=0;Se<T.mipmaps.length;Se++)ne.__webglFramebuffer[ge][Se]=a.createFramebuffer()}else ne.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)ne.__webglFramebuffer[ge]=a.createFramebuffer()}else ne.__webglFramebuffer=a.createFramebuffer();if(ze)for(let ge=0,Se=Te.length;ge<Se;ge++){const He=s.get(Te[ge]);He.__webglTexture===void 0&&(He.__webglTexture=a.createTexture(),d.memory.textures++)}if(D.samples>0&&Qe(D)===!1){ne.__webglMultisampledFramebuffer=a.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ge=0;ge<Te.length;ge++){const Se=Te[ge];ne.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ne.__webglColorRenderbuffer[ge]);const He=c.convert(Se.format,Se.colorSpace),qe=c.convert(Se.type),Pe=N(Se.internalFormat,He,qe,Se.normalized,Se.colorSpace,D.isXRRenderTarget===!0),Ue=pt(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Pe,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,ne.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=a.createRenderbuffer(),ke(ne.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),ue(a.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)Me(ne.__webglFramebuffer[ge][Se],D,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else Me(ne.__webglFramebuffer[ge],D,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);M(T)&&R(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let ge=0,Se=Te.length;ge<Se;ge++){const He=Te[ge],qe=s.get(He);let Pe=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Pe,qe.__webglTexture),ue(Pe,He),Me(ne.__webglFramebuffer,D,He,a.COLOR_ATTACHMENT0+ge,Pe,0),M(He)&&R(Pe)}i.unbindTexture()}else{let ge=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(ge,ve.__webglTexture),ue(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)Me(ne.__webglFramebuffer[Se],D,T,a.COLOR_ATTACHMENT0,ge,Se);else Me(ne.__webglFramebuffer,D,T,a.COLOR_ATTACHMENT0,ge,0);M(T)&&R(ge),i.unbindTexture()}D.depthBuffer&&Ot(D)}function Dt(D){const T=D.textures;for(let ne=0,ve=T.length;ne<ve;ne++){const Te=T[ne];if(M(Te)){const Ne=I(D),ze=s.get(Te).__webglTexture;i.bindTexture(Ne,ze),R(Ne),i.unbindTexture()}}}const ct=[],ln=[];function z(D){if(D.samples>0){if(Qe(D)===!1){const T=D.textures,ne=D.width,ve=D.height;let Te=a.COLOR_BUFFER_BIT;const Ne=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ze=s.get(D),ge=T.length>1;if(ge)for(let He=0;He<T.length;He++)i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+He,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+He,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Se=D.texture.mipmaps;Se&&Se.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let He=0;He<T.length;He++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Te|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Te|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ze.__webglColorRenderbuffer[He]);const qe=s.get(T[He]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,ne,ve,0,0,ne,ve,Te,a.NEAREST),p===!0&&(ct.length=0,ln.length=0,ct.push(a.COLOR_ATTACHMENT0+He),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ct.push(Ne),ln.push(Ne),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ln)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ct))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let He=0;He<T.length;He++){i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+He,a.RENDERBUFFER,ze.__webglColorRenderbuffer[He]);const qe=s.get(T[He]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+He,a.TEXTURE_2D,qe,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function pt(D){return Math.min(l.maxSamples,D.samples)}function Qe(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ut(D){const T=d.render.frame;_.get(D)!==T&&(_.set(D,T),D.update())}function Ee(D,T){const ne=D.colorSpace,ve=D.format,Te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ne!==Yd&&ne!==us&&(Gt.getTransfer(ne)===tn?(ve!==va||Te!==Ki)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",ne)),T}function Bt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=G,this.resetTextureUnits=te,this.getTextureUnits=de,this.setTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=he,this.setTexture3D=me,this.setTextureCube=be,this.rebindTextures=Ft,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function cO(a,e){function i(s,l=us){let c;const d=Gt.getTransfer(l);if(s===Ki)return a.UNSIGNED_BYTE;if(s===_v)return a.UNSIGNED_SHORT_4_4_4_4;if(s===xv)return a.UNSIGNED_SHORT_5_5_5_1;if(s===OE)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===zE)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===LE)return a.BYTE;if(s===PE)return a.SHORT;if(s===gu)return a.UNSIGNED_SHORT;if(s===vv)return a.INT;if(s===Xa)return a.UNSIGNED_INT;if(s===Fa)return a.FLOAT;if(s===xr)return a.HALF_FLOAT;if(s===IE)return a.ALPHA;if(s===FE)return a.RGB;if(s===va)return a.RGBA;if(s===yr)return a.DEPTH_COMPONENT;if(s===eo)return a.DEPTH_STENCIL;if(s===BE)return a.RED;if(s===yv)return a.RED_INTEGER;if(s===ro)return a.RG;if(s===Sv)return a.RG_INTEGER;if(s===Mv)return a.RGBA_INTEGER;if(s===Od||s===zd||s===Id||s===Fd)if(d===tn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Od)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Id)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Od)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zd)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Id)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fd)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wg||s===Rg||s===Cg||s===Dg)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wg)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rg)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cg)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dg)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ng||s===Ug||s===Lg||s===Pg||s===Og||s===qd||s===zg)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ng||s===Ug)return d===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Lg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Pg)return c.COMPRESSED_R11_EAC;if(s===Og)return c.COMPRESSED_SIGNED_R11_EAC;if(s===qd)return c.COMPRESSED_RG11_EAC;if(s===zg)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ig||s===Fg||s===Bg||s===Hg||s===Gg||s===Vg||s===kg||s===Xg||s===jg||s===qg||s===Wg||s===Yg||s===Zg||s===Qg)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ig)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qg)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kg||s===$g||s===Jg)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Kg)return d===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$g)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jg)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ev||s===tv||s===Wd||s===nv)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ev)return c.COMPRESSED_RED_RGTC1_EXT;if(s===tv)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nv)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vu?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const uO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new YE(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qa({vertexShader:uO,fragmentShader:fO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ja(new hh(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hO extends so{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,_=null,g=null,v=null,S=null,b=null;const C=typeof XRWebGLBinding<"u",y=new dO,M={},R=i.getContextAttributes();let I=null,N=null;const k=[],L=[],P=new nn;let E=null;const O=new Qi;O.viewport=new Mn;const V=new Qi;V.viewport=new Mn;const F=[O,V],Z=new bD;let te=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=k[ee];return pe===void 0&&(pe=new d0,k[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=k[ee];return pe===void 0&&(pe=new d0,k[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=k[ee];return pe===void 0&&(pe=new d0,k[ee]=pe),pe.getHandSpace()};function q(ee){const pe=L.indexOf(ee.inputSource);if(pe===-1)return;const fe=k[pe];fe!==void 0&&(fe.update(ee.inputSource,ee.frame,m||d),fe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function G(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",X);for(let ee=0;ee<k.length;ee++){const pe=L[ee];pe!==null&&(L[ee]=null,k[ee].disconnect(pe))}te=null,de=null,y.reset();for(const ee in M)delete M[ee];e.setRenderTarget(I),S=null,v=null,g=null,l=null,N=null,ue.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,s.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",G),l.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,we=null;R.depth&&(we=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,fe=R.stencil?eo:yr,De=R.stencil?vu:Xa);const Me={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Me),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Va(v.textureWidth,v.textureHeight,{format:va,type:Ki,depthTexture:new zl(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const fe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,fe),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Va(S.framebufferWidth,S.framebufferHeight,{format:va,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),ue.setContext(l),ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(ee){for(let pe=0;pe<ee.removed.length;pe++){const fe=ee.removed[pe],De=L.indexOf(fe);De>=0&&(L[De]=null,k[De].disconnect(fe))}for(let pe=0;pe<ee.added.length;pe++){const fe=ee.added[pe];let De=L.indexOf(fe);if(De===-1){for(let Me=0;Me<k.length;Me++)if(Me>=L.length){L.push(fe),De=Me;break}else if(L[Me]===null){L[Me]=fe,De=Me;break}if(De===-1)break}const we=k[De];we&&we.connect(fe)}}const K=new ce,he=new ce;function me(ee,pe,fe){K.setFromMatrixPosition(pe.matrixWorld),he.setFromMatrixPosition(fe.matrixWorld);const De=K.distanceTo(he),we=pe.projectionMatrix.elements,Me=fe.projectionMatrix.elements,ke=we[14]/(we[10]-1),ht=we[14]/(we[10]+1),Ot=(we[9]+1)/we[5],Ft=(we[9]-1)/we[5],ft=(we[8]-1)/we[0],Dt=(Me[8]+1)/Me[0],ct=ke*ft,ln=ke*Dt,z=De/(-ft+Dt),pt=z*-ft;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(pt),ee.translateZ(z),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Qe=ke+z,ut=ht+z,Ee=ct-pt,Bt=ln+(De-pt),D=Ot*ht/ut*Qe,T=Ft*ht/ut*Qe;ee.projectionMatrix.makePerspective(Ee,Bt,D,T,Qe,ut),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function be(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let pe=ee.near,fe=ee.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),Z.near=V.near=O.near=pe,Z.far=V.far=O.far=fe,(te!==Z.near||de!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),te=Z.near,de=Z.far),Z.layers.mask=ee.layers.mask|6,O.layers.mask=Z.layers.mask&-5,V.layers.mask=Z.layers.mask&-3;const De=ee.parent,we=Z.cameras;be(Z,De);for(let Me=0;Me<we.length;Me++)be(we[Me],De);we.length===2?me(Z,O,V):Z.projectionMatrix.copy(O.projectionMatrix),Le(ee,Z,De)};function Le(ee,pe,fe){fe===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(fe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=av*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(ee){p=ee,v!==null&&(v.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ee){return M[ee]};let lt=null;function H(ee,pe){if(_=pe.getViewerPose(m||d),b=pe,_!==null){const fe=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let De=!1;fe.length!==Z.cameras.length&&(Z.cameras.length=0,De=!0);for(let ht=0;ht<fe.length;ht++){const Ot=fe[ht];let Ft=null;if(S!==null)Ft=S.getViewport(Ot);else{const Dt=g.getViewSubImage(v,Ot);Ft=Dt.viewport,ht===0&&(e.setRenderTargetTextures(N,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(N))}let ft=F[ht];ft===void 0&&(ft=new Qi,ft.layers.enable(ht),ft.viewport=new Mn,F[ht]=ft),ft.matrix.fromArray(Ot.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ot.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ht===0&&(Z.matrix.copy(ft.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),De===!0&&Z.cameras.push(ft)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const ht=g.getDepthInformation(fe[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,l.renderState)}if(we&&we.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let ht=0;ht<fe.length;ht++){const Ot=fe[ht].camera;if(Ot){let Ft=M[Ot];Ft||(Ft=new YE,M[Ot]=Ft);const ft=g.getCameraImage(Ot);Ft.sourceTexture=ft}}}}for(let fe=0;fe<k.length;fe++){const De=L[fe],we=k[fe];De!==null&&we!==void 0&&we.update(De,pe,m||d)}lt&&lt(ee,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),b=null}const ue=new $E;ue.setAnimationLoop(H),this.setAnimationLoop=function(ee){lt=ee},this.dispose=function(){}}}const pO=new On,rT=new St;rT.set(-1,0,0,0,1,0,0,0,1);function mO(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,ZE(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function l(y,M,R,I,N){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),g(y,M)):M.isMeshPhongMaterial?(c(y,M),_(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&S(y,M,N)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),C(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(d(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?p(y,M,R,I):M.isSpriteMaterial?m(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===yi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===yi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const R=e.get(M),I=R.envMap,N=R.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(pO.makeRotationFromEuler(N)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(rT),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function p(y,M,R,I){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*R,y.scale.value=I*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function _(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function g(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function S(y,M,R){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===yi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function C(y,M){const R=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function gO(a,e,i,s){let l={},c={},d=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,I){const N=I.program;s.uniformBlockBinding(R,N)}function m(R,I){let N=l[R.id];N===void 0&&(b(R),N=_(R),l[R.id]=N,R.addEventListener("dispose",y));const k=I.program;s.updateUBOMapping(R,k);const L=e.render.frame;c[R.id]!==L&&(v(R),c[R.id]=L)}function _(R){const I=g();R.__bindingPointIndex=I;const N=a.createBuffer(),k=R.__size,L=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,k,L),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,N),N}function g(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const I=l[R.id],N=R.uniforms,k=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let L=0,P=N.length;L<P;L++){const E=Array.isArray(N[L])?N[L]:[N[L]];for(let O=0,V=E.length;O<V;O++){const F=E[O];if(S(F,L,O,k)===!0){const Z=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let de=0;for(let q=0;q<te.length;q++){const G=te[q],X=C(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,Z+de,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):ArrayBuffer.isView(G)?F.__data.set(new G.constructor(G.buffer,G.byteOffset,F.__data.length)):(G.toArray(F.__data,de),de+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Z,F.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(R,I,N,k){const L=R.value,P=I+"_"+N;if(k[P]===void 0)return typeof L=="number"||typeof L=="boolean"?k[P]=L:ArrayBuffer.isView(L)?k[P]=L.slice():k[P]=L.clone(),!0;{const E=k[P];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return k[P]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(E.equals(L)===!1)return E.copy(L),!0}}return!1}function b(R){const I=R.uniforms;let N=0;const k=16;for(let P=0,E=I.length;P<E;P++){const O=Array.isArray(I[P])?I[P]:[I[P]];for(let V=0,F=O.length;V<F;V++){const Z=O[V],te=Array.isArray(Z.value)?Z.value:[Z.value];for(let de=0,q=te.length;de<q;de++){const G=te[de],X=C(G),K=N%k,he=K%X.boundary,me=K+he;N+=he,me!==0&&k-me<X.storage&&(N+=k-me),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=X.storage}}}const L=N%k;return L>0&&(N+=k-L),R.__size=N,R.__cache={},this}function C(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",R),I}function y(R){const I=R.target;I.removeEventListener("dispose",y);const N=d.indexOf(I.__bindingPointIndex);d.splice(N,1),a.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function M(){for(const R in l)a.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:p,update:m,dispose:M}}const vO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ua=null;function _O(){return Ua===null&&(Ua=new uD(vO,16,16,ro,xr),Ua.name="DFG_LUT",Ua.minFilter=ti,Ua.magFilter=ti,Ua.wrapS=mr,Ua.wrapT=mr,Ua.generateMipmaps=!1,Ua.needsUpdate=!0),Ua}class xO{constructor(e={}){const{canvas:i=HC(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Ki}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const C=S,y=new Set([Mv,Sv,yv]),M=new Set([Ki,Xa,gu,vu,_v,xv]),R=new Uint32Array(4),I=new Int32Array(4),N=new ce;let k=null,L=null;const P=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let F=!1,Z=null;this._outputColorSpace=Zi;let te=0,de=0,q=null,G=-1,X=null;const K=new Mn,he=new Mn;let me=null;const be=new sn(0);let Le=0,lt=i.width,H=i.height,ue=1,ee=null,pe=null;const fe=new Mn(0,0,lt,H),De=new Mn(0,0,lt,H);let we=!1;const Me=new qE;let ke=!1,ht=!1;const Ot=new On,Ft=new ce,ft=new Mn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ln(){return q===null?ue:1}let z=s;function pt(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gv}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",Je,!1),i.addEventListener("webglcontextcreationerror",ot,!1),z===null){const Y="webgl2";if(z=pt(Y,w),z===null)throw pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw jt("WebGLRenderer: "+w.message),w}let Qe,ut,Ee,Bt,D,T,ne,ve,Te,Ne,ze,ge,Se,He,qe,Pe,Ue,rt,yt,Ht,W,Re,ye;function Xe(){Qe=new _L(z),Qe.init(),W=new cO(z,Qe),ut=new uL(z,Qe,e,W),Ee=new oO(z,Qe),ut.reversedDepthBuffer&&v&&Ee.buffers.depth.setReversed(!0),Bt=new SL(z),D=new WP,T=new lO(z,Qe,Ee,D,ut,W,Bt),ne=new vL(V),ve=new TD(z),Re=new lL(z,ve),Te=new xL(z,ve,Bt,Re),Ne=new bL(z,Te,ve,Re,Bt),rt=new ML(z,ut,T),qe=new fL(D),ze=new qP(V,ne,Qe,ut,Re,qe),ge=new mO(V,D),Se=new ZP,He=new tO(Qe),Ue=new oL(V,ne,Ee,Ne,b,p),Pe=new sO(V,Ne,ut),ye=new gO(z,Bt,ut,Ee),yt=new cL(z,Qe,Bt),Ht=new yL(z,Qe,Bt),Bt.programs=ze.programs,V.capabilities=ut,V.extensions=Qe,V.properties=D,V.renderLists=Se,V.shadowMap=Pe,V.state=Ee,V.info=Bt}Xe(),C!==Ki&&(O=new TL(C,i.width,i.height,l,c));const Oe=new hO(V,z);this.xr=Oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(w){w!==void 0&&(ue=w,this.setSize(lt,H,!1))},this.getSize=function(w){return w.set(lt,H)},this.setSize=function(w,Y,se=!0){if(Oe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=w,H=Y,i.width=Math.floor(w*ue),i.height=Math.floor(Y*ue),se===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(lt*ue,H*ue).floor()},this.setDrawingBufferSize=function(w,Y,se){lt=w,H=Y,ue=se,i.width=Math.floor(w*se),i.height=Math.floor(Y*se),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(C===Ki){jt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){vt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,Y,se,ae){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,Y,se,ae),Ee.viewport(K.copy(fe).multiplyScalar(ue).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,Y,se,ae){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,Y,se,ae),Ee.scissor(he.copy(De).multiplyScalar(ue).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){Ee.setScissorTest(we=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,se=!0){let ae=0;if(w){let oe=!1;if(q!==null){const Ge=q.texture.format;oe=y.has(Ge)}if(oe){const Ge=q.texture.type,Ye=M.has(Ge),Be=Ue.getClearColor(),$e=Ue.getClearAlpha(),nt=Be.r,mt=Be.g,gt=Be.b;Ye?(R[0]=nt,R[1]=mt,R[2]=gt,R[3]=$e,z.clearBufferuiv(z.COLOR,0,R)):(I[0]=nt,I[1]=mt,I[2]=gt,I[3]=$e,z.clearBufferiv(z.COLOR,0,I))}else ae|=z.COLOR_BUFFER_BIT}Y&&(ae|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ae|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",Je,!1),i.removeEventListener("webglcontextcreationerror",ot,!1),Ue.dispose(),Se.dispose(),He.dispose(),D.dispose(),ne.dispose(),Ne.dispose(),Re.dispose(),ye.dispose(),ze.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",ms),Oe.removeEventListener("sessionend",gs),ni.stop()};function Ae(w){w.preventDefault(),N1("WebGLRenderer: Context Lost."),F=!0}function Je(){N1("WebGLRenderer: Context Restored."),F=!1;const w=Bt.autoReset,Y=Pe.enabled,se=Pe.autoUpdate,ae=Pe.needsUpdate,oe=Pe.type;Xe(),Bt.autoReset=w,Pe.enabled=Y,Pe.autoUpdate=se,Pe.needsUpdate=ae,Pe.type=oe}function ot(w){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zt(w){const Y=w.target;Y.removeEventListener("dispose",Zt),Mt(Y)}function Mt(w){ea(w),D.remove(w)}function ea(w){const Y=D.get(w).programs;Y!==void 0&&(Y.forEach(function(se){ze.releaseProgram(se)}),w.isShaderMaterial&&ze.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,se,ae,oe,Ge){Y===null&&(Y=Dt);const Ye=oe.isMesh&&oe.matrixWorld.determinant()<0,Be=Eu(w,Y,se,ae,oe);Ee.setMaterial(ae,Ye);let $e=se.index,nt=1;if(ae.wireframe===!0){if($e=Te.getWireframeAttribute(se),$e===void 0)return;nt=2}const mt=se.drawRange,gt=se.attributes.position;let tt=mt.start*nt,kt=(mt.start+mt.count)*nt;Ge!==null&&(tt=Math.max(tt,Ge.start*nt),kt=Math.min(kt,(Ge.start+Ge.count)*nt)),$e!==null?(tt=Math.max(tt,0),kt=Math.min(kt,$e.count)):gt!=null&&(tt=Math.max(tt,0),kt=Math.min(kt,gt.count));const an=kt-tt;if(an<0||an===1/0)return;Re.setup(oe,ae,Be,se,$e);let At,Qt=yt;if($e!==null&&(At=ve.get($e),Qt=Ht,Qt.setIndex(At)),oe.isMesh)ae.wireframe===!0?(Ee.setLineWidth(ae.wireframeLinewidth*ln()),Qt.setMode(z.LINES)):Qt.setMode(z.TRIANGLES);else if(oe.isLine){let Nn=ae.linewidth;Nn===void 0&&(Nn=1),Ee.setLineWidth(Nn*ln()),oe.isLineSegments?Qt.setMode(z.LINES):oe.isLineLoop?Qt.setMode(z.LINE_LOOP):Qt.setMode(z.LINE_STRIP)}else oe.isPoints?Qt.setMode(z.POINTS):oe.isSprite&&Qt.setMode(z.TRIANGLES);if(oe.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Qt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Nn=oe._multiDrawStarts,We=oe._multiDrawCounts,yn=oe._multiDrawCount,wt=$e?ve.get($e).bytesPerElement:1,di=D.get(ae).currentProgram.getUniforms();for(let Mi=0;Mi<yn;Mi++)di.setValue(z,"_gl_DrawID",Mi),Qt.render(Nn[Mi]/wt,We[Mi])}else if(oe.isInstancedMesh)Qt.renderInstances(tt,an,oe.count);else if(se.isInstancedBufferGeometry){const Nn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,We=Math.min(se.instanceCount,Nn);Qt.renderInstances(tt,an,We)}else Qt.render(tt,an)};function zi(w,Y,se){w.transparent===!0&&w.side===pr&&w.forceSinglePass===!1?(w.side=yi,w.needsUpdate=!0,Tr(w,Y,se),w.side=_r,w.needsUpdate=!0,Tr(w,Y,se),w.side=pr):Tr(w,Y,se)}this.compile=function(w,Y,se=null){se===null&&(se=w),L=He.get(se),L.init(Y),E.push(L),se.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),w!==se&&w.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),L.setupLights();const ae=new Set;return w.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ge=oe.material;if(Ge)if(Array.isArray(Ge))for(let Ye=0;Ye<Ge.length;Ye++){const Be=Ge[Ye];zi(Be,se,oe),ae.add(Be)}else zi(Ge,se,oe),ae.add(Ge)}),L=E.pop(),ae},this.compileAsync=function(w,Y,se=null){const ae=this.compile(w,Y,se);return new Promise(oe=>{function Ge(){if(ae.forEach(function(Ye){D.get(Ye).currentProgram.isReady()&&ae.delete(Ye)}),ae.size===0){oe(w);return}setTimeout(Ge,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Vl=null;function oo(w){Vl&&Vl(w)}function ms(){ni.stop()}function gs(){ni.start()}const ni=new $E;ni.setAnimationLoop(oo),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){Vl=w,Oe.setAnimationLoop(w),w===null?ni.stop():ni.start()},Oe.addEventListener("sessionstart",ms),Oe.addEventListener("sessionend",gs),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;Z!==null&&Z.renderStart(w,Y);const se=Oe.enabled===!0&&Oe.isPresenting===!0,ae=O!==null&&(q===null||se)&&O.begin(V,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Y),Y=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,Y,q),L=He.get(w,E.length),L.init(Y),L.state.textureUnits=T.getTextureUnits(),E.push(L),Ot.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Me.setFromProjectionMatrix(Ot,Ba,Y.reversedDepth),ht=this.localClippingEnabled,ke=qe.init(this.clippingPlanes,ht),k=Se.get(w,P.length),k.init(),P.push(k),Oe.enabled===!0&&Oe.isPresenting===!0){const Ye=V.xr.getDepthSensingMesh();Ye!==null&&br(Ye,Y,-1/0,V.sortObjects)}br(w,Y,0,V.sortObjects),k.finish(),V.sortObjects===!0&&k.sort(ee,pe),ct=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ct&&Ue.addToRenderList(k,w),this.info.render.frame++,ke===!0&&qe.beginShadows();const oe=L.state.shadowsArray;if(Pe.render(oe,w,Y),ke===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&O.hasRenderPass())===!1){const Ye=k.opaque,Be=k.transmissive;if(L.setupLights(),Y.isArrayCamera){const $e=Y.cameras;if(Be.length>0)for(let nt=0,mt=$e.length;nt<mt;nt++){const gt=$e[nt];kl(Ye,Be,w,gt)}ct&&Ue.render(w);for(let nt=0,mt=$e.length;nt<mt;nt++){const gt=$e[nt];Er(k,w,gt,gt.viewport)}}else Be.length>0&&kl(Ye,Be,w,Y),ct&&Ue.render(w),Er(k,w,Y)}q!==null&&de===0&&(T.updateMultisampleRenderTarget(q),T.updateRenderTargetMipmap(q)),ae&&O.end(V),w.isScene===!0&&w.onAfterRender(V,w,Y),Re.resetDefaultState(),G=-1,X=null,E.pop(),E.length>0?(L=E[E.length-1],T.setTextureUnits(L.state.textureUnits),ke===!0&&qe.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?k=P[P.length-1]:k=null,Z!==null&&Z.renderEnd()};function br(w,Y,se,ae){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Me.intersectsSprite(w)){ae&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ot);const Ye=Ne.update(w),Be=w.material;Be.visible&&k.push(w,Ye,Be,se,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Me.intersectsObject(w))){const Ye=Ne.update(w),Be=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ft.copy(Ye.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(Ot)),Array.isArray(Be)){const $e=Ye.groups;for(let nt=0,mt=$e.length;nt<mt;nt++){const gt=$e[nt],tt=Be[gt.materialIndex];tt&&tt.visible&&k.push(w,Ye,tt,se,ft.z,gt)}}else Be.visible&&k.push(w,Ye,Be,se,ft.z,null)}}const Ge=w.children;for(let Ye=0,Be=Ge.length;Ye<Be;Ye++)br(Ge[Ye],Y,se,ae)}function Er(w,Y,se,ae){const{opaque:oe,transmissive:Ge,transparent:Ye}=w;L.setupLightsView(se),ke===!0&&qe.setGlobalState(V.clippingPlanes,se),ae&&Ee.viewport(K.copy(ae)),oe.length>0&&lo(oe,Y,se),Ge.length>0&&lo(Ge,Y,se),Ye.length>0&&lo(Ye,Y,se),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function kl(w,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const tt=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Va(1,1,{generateMipmaps:!0,type:tt?xr:Ki,minFilter:Js,samples:Math.max(4,ut.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const Ge=L.state.transmissionRenderTarget[ae.id],Ye=ae.viewport||K;Ge.setSize(Ye.z*V.transmissionResolutionScale,Ye.w*V.transmissionResolutionScale);const Be=V.getRenderTarget(),$e=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(Ge),V.getClearColor(be),Le=V.getClearAlpha(),Le<1&&V.setClearColor(16777215,.5),V.clear(),ct&&Ue.render(se);const mt=V.toneMapping;V.toneMapping=Ga;const gt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),ke===!0&&qe.setGlobalState(V.clippingPlanes,ae),lo(w,se,ae),T.updateMultisampleRenderTarget(Ge),T.updateRenderTargetMipmap(Ge),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let kt=0,an=Y.length;kt<an;kt++){const At=Y[kt],{object:Qt,geometry:Nn,material:We,group:yn}=At;if(We.side===pr&&Qt.layers.test(ae.layers)){const wt=We.side;We.side=yi,We.needsUpdate=!0,Xl(Qt,se,ae,Nn,We,yn),We.side=wt,We.needsUpdate=!0,tt=!0}}tt===!0&&(T.updateMultisampleRenderTarget(Ge),T.updateRenderTargetMipmap(Ge))}V.setRenderTarget(Be,$e,nt),V.setClearColor(be,Le),gt!==void 0&&(ae.viewport=gt),V.toneMapping=mt}function lo(w,Y,se){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Ge=w.length;oe<Ge;oe++){const Ye=w[oe],{object:Be,geometry:$e,group:nt}=Ye;let mt=Ye.material;mt.allowOverride===!0&&ae!==null&&(mt=ae),Be.layers.test(se.layers)&&Xl(Be,Y,se,$e,mt,nt)}}function Xl(w,Y,se,ae,oe,Ge){w.onBeforeRender(V,Y,se,ae,oe,Ge),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),oe.onBeforeRender(V,Y,se,ae,w,Ge),oe.transparent===!0&&oe.side===pr&&oe.forceSinglePass===!1?(oe.side=yi,oe.needsUpdate=!0,V.renderBufferDirect(se,Y,ae,oe,w,Ge),oe.side=_r,oe.needsUpdate=!0,V.renderBufferDirect(se,Y,ae,oe,w,Ge),oe.side=pr):V.renderBufferDirect(se,Y,ae,oe,w,Ge),w.onAfterRender(V,Y,se,ae,oe,Ge)}function Tr(w,Y,se){Y.isScene!==!0&&(Y=Dt);const ae=D.get(w),oe=L.state.lights,Ge=L.state.shadowsArray,Ye=oe.state.version,Be=ze.getParameters(w,oe.state,Ge,Y,se,L.state.lightProbeGridArray),$e=ze.getProgramCacheKey(Be);let nt=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const mt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=ne.get(w.envMap||ae.environment,mt),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",Zt),nt=new Map,ae.programs=nt);let gt=nt.get($e);if(gt!==void 0){if(ae.currentProgram===gt&&ae.lightsStateVersion===Ye)return Mu(w,Be),gt}else Be.uniforms=ze.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,se,Be),w.onBeforeCompile(Be,V),gt=ze.acquireProgram(Be,$e),nt.set($e,gt),ae.uniforms=Be.uniforms;const tt=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=qe.uniform),Mu(w,Be),ae.needsLights=jl(w),ae.lightsStateVersion=Ye,ae.needsLights&&(tt.ambientLightColor.value=oe.state.ambient,tt.lightProbe.value=oe.state.probe,tt.directionalLights.value=oe.state.directional,tt.directionalLightShadows.value=oe.state.directionalShadow,tt.spotLights.value=oe.state.spot,tt.spotLightShadows.value=oe.state.spotShadow,tt.rectAreaLights.value=oe.state.rectArea,tt.ltc_1.value=oe.state.rectAreaLTC1,tt.ltc_2.value=oe.state.rectAreaLTC2,tt.pointLights.value=oe.state.point,tt.pointLightShadows.value=oe.state.pointShadow,tt.hemisphereLights.value=oe.state.hemi,tt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,tt.spotLightMatrix.value=oe.state.spotLightMatrix,tt.spotLightMap.value=oe.state.spotLightMap,tt.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=gt,ae.uniformsList=null,gt}function Ar(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Bd.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Mu(w,Y){const se=D.get(w);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function bu(w,Y){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;N.setFromMatrixPosition(Y.matrixWorld);for(let se=0,ae=w.length;se<ae;se++){const oe=w[se];if(oe.texture!==null&&oe.boundingBox.containsPoint(N))return oe}return null}function Eu(w,Y,se,ae,oe){Y.isScene!==!0&&(Y=Dt),T.resetTextureUnits();const Ge=Y.fog,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,Be=q===null?V.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Gt.workingColorSpace,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,nt=ne.get(ae.envMap||Ye,$e),mt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,gt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),tt=!!se.morphAttributes.position,kt=!!se.morphAttributes.normal,an=!!se.morphAttributes.color;let At=Ga;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(At=V.toneMapping);const Qt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Nn=Qt!==void 0?Qt.length:0,We=D.get(ae),yn=L.state.lights;if(ke===!0&&(ht===!0||w!==X)){const qt=w===X&&ae.id===G;qe.setState(ae,w,qt)}let wt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==yn.state.version||We.outputColorSpace!==Be||oe.isBatchedMesh&&We.batching===!1||!oe.isBatchedMesh&&We.batching===!0||oe.isBatchedMesh&&We.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&We.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&We.instancing===!1||!oe.isInstancedMesh&&We.instancing===!0||oe.isSkinnedMesh&&We.skinning===!1||!oe.isSkinnedMesh&&We.skinning===!0||oe.isInstancedMesh&&We.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&We.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&We.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&We.instancingMorph===!1&&oe.morphTexture!==null||We.envMap!==nt||ae.fog===!0&&We.fog!==Ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==qe.numPlanes||We.numIntersection!==qe.numIntersection)||We.vertexAlphas!==mt||We.vertexTangents!==gt||We.morphTargets!==tt||We.morphNormals!==kt||We.morphColors!==an||We.toneMapping!==At||We.morphTargetsCount!==Nn||!!We.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,We.__version=ae.version);let di=We.currentProgram;wt===!0&&(di=Tr(ae,Y,oe),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,di,We));let Mi=!1,ta=!1,wr=!1;const it=di.getUniforms(),hn=We.uniforms;if(Ee.useProgram(di.program)&&(Mi=!0,ta=!0,wr=!0),ae.id!==G&&(G=ae.id,ta=!0),We.needsLights){const qt=bu(L.state.lightProbeGridArray,oe);We.lightProbeGrid!==qt&&(We.lightProbeGrid=qt,ta=!0)}if(Mi||X!==w){Ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),it.setValue(z,"projectionMatrix",w.projectionMatrix),it.setValue(z,"viewMatrix",w.matrixWorldInverse);const Fn=it.map.cameraPosition;Fn!==void 0&&Fn.setValue(z,Ft.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&it.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&it.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,ta=!0,wr=!0)}if(We.needsLights&&(yn.state.directionalShadowMap.length>0&&it.setValue(z,"directionalShadowMap",yn.state.directionalShadowMap,T),yn.state.spotShadowMap.length>0&&it.setValue(z,"spotShadowMap",yn.state.spotShadowMap,T),yn.state.pointShadowMap.length>0&&it.setValue(z,"pointShadowMap",yn.state.pointShadowMap,T)),oe.isSkinnedMesh){it.setOptional(z,oe,"bindMatrix"),it.setOptional(z,oe,"bindMatrixInverse");const qt=oe.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),it.setValue(z,"boneTexture",qt.boneTexture,T))}oe.isBatchedMesh&&(it.setOptional(z,oe,"batchingTexture"),it.setValue(z,"batchingTexture",oe._matricesTexture,T),it.setOptional(z,oe,"batchingIdTexture"),it.setValue(z,"batchingIdTexture",oe._indirectTexture,T),it.setOptional(z,oe,"batchingColorTexture"),oe._colorsTexture!==null&&it.setValue(z,"batchingColorTexture",oe._colorsTexture,T));const bi=se.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&rt.update(oe,se,di),(ta||We.receiveShadow!==oe.receiveShadow)&&(We.receiveShadow=oe.receiveShadow,it.setValue(z,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=_O()),ta){if(it.setValue(z,"toneMappingExposure",V.toneMappingExposure),We.needsLights&&Tu(hn,wr),Ge&&ae.fog===!0&&ge.refreshFogUniforms(hn,Ge),ge.refreshMaterialUniforms(hn,ae,ue,H,L.state.transmissionRenderTarget[w.id]),We.needsLights&&We.lightProbeGrid){const qt=We.lightProbeGrid;hn.probesSH.value=qt.texture,hn.probesMin.value.copy(qt.boundingBox.min),hn.probesMax.value.copy(qt.boundingBox.max),hn.probesResolution.value.copy(qt.resolution)}Bd.upload(z,Ar(We),hn,T)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bd.upload(z,Ar(We),hn,T),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&it.setValue(z,"center",oe.center),it.setValue(z,"modelViewMatrix",oe.modelViewMatrix),it.setValue(z,"normalMatrix",oe.normalMatrix),it.setValue(z,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const qt=ae.uniformsGroups;for(let Fn=0,En=qt.length;Fn<En;Fn++){const Wl=qt[Fn];ye.update(Wl,di),ye.bind(Wl,di)}}return di}function Tu(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,Y,se){const ae=D.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),D.get(w.texture).__webglTexture=Y,D.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const se=D.get(w);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const ql=z.createFramebuffer();this.setRenderTarget=function(w,Y=0,se=0){q=w,te=Y,de=se;let ae=null,oe=!1,Ge=!1;if(w){const Be=D.get(w);if(Be.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(z.FRAMEBUFFER,Be.__webglFramebuffer),K.copy(w.viewport),he.copy(w.scissor),me=w.scissorTest,Ee.viewport(K),Ee.scissor(he),Ee.setScissorTest(me),G=-1;return}else if(Be.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Be.__hasExternalTextures)T.rebindTextures(w,D.get(w.texture).__webglTexture,D.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const mt=w.depthTexture;if(Be.__boundDepthTexture!==mt){if(mt!==null&&D.has(mt)&&(w.width!==mt.image.width||w.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ge=!0);const nt=D.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?ae=nt[Y][se]:ae=nt[Y],oe=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?ae=D.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?ae=nt[se]:ae=nt,K.copy(w.viewport),he.copy(w.scissor),me=w.scissorTest}else K.copy(fe).multiplyScalar(ue).floor(),he.copy(De).multiplyScalar(ue).floor(),me=we;if(se!==0&&(ae=ql),Ee.bindFramebuffer(z.FRAMEBUFFER,ae)&&Ee.drawBuffers(w,ae),Ee.viewport(K),Ee.scissor(he),Ee.setScissorTest(me),oe){const Be=D.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,se)}else if(Ge){const Be=Y;for(let $e=0;$e<w.textures.length;$e++){const nt=D.get(w.textures[$e]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$e,nt.__webglTexture,se,Be)}}else if(w!==null&&se!==0){const Be=D.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,se)}G=-1},this.readRenderTargetPixels=function(w,Y,se,ae,oe,Ge,Ye,Be=0){if(!(w&&w.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&($e=$e[Ye]),$e){Ee.bindFramebuffer(z.FRAMEBUFFER,$e);try{const nt=w.textures[Be],mt=nt.format,gt=nt.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Be),!ut.textureFormatReadable(mt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(gt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ae&&se>=0&&se<=w.height-oe&&z.readPixels(Y,se,ae,oe,W.convert(mt),W.convert(gt),Ge)}finally{const nt=q!==null?D.get(q).__webglFramebuffer:null;Ee.bindFramebuffer(z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,se,ae,oe,Ge,Ye,Be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&($e=$e[Ye]),$e)if(Y>=0&&Y<=w.width-ae&&se>=0&&se<=w.height-oe){Ee.bindFramebuffer(z.FRAMEBUFFER,$e);const nt=w.textures[Be],mt=nt.format,gt=nt.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Be),!ut.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,tt),z.bufferData(z.PIXEL_PACK_BUFFER,Ge.byteLength,z.STREAM_READ),z.readPixels(Y,se,ae,oe,W.convert(mt),W.convert(gt),0);const kt=q!==null?D.get(q).__webglFramebuffer:null;Ee.bindFramebuffer(z.FRAMEBUFFER,kt);const an=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await GC(z,an,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,tt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ge),z.deleteBuffer(tt),z.deleteSync(an),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,se=0){const ae=Math.pow(2,-se),oe=Math.floor(w.image.width*ae),Ge=Math.floor(w.image.height*ae),Ye=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;T.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Ye,Be,oe,Ge),Ee.unbindTexture()};const Au=z.createFramebuffer(),wu=z.createFramebuffer();this.copyTextureToTexture=function(w,Y,se=null,ae=null,oe=0,Ge=0){let Ye,Be,$e,nt,mt,gt,tt,kt,an;const At=w.isCompressedTexture?w.mipmaps[Ge]:w.image;if(se!==null)Ye=se.max.x-se.min.x,Be=se.max.y-se.min.y,$e=se.isBox3?se.max.z-se.min.z:1,nt=se.min.x,mt=se.min.y,gt=se.isBox3?se.min.z:0;else{const hn=Math.pow(2,-oe);Ye=Math.floor(At.width*hn),Be=Math.floor(At.height*hn),w.isDataArrayTexture?$e=At.depth:w.isData3DTexture?$e=Math.floor(At.depth*hn):$e=1,nt=0,mt=0,gt=0}ae!==null?(tt=ae.x,kt=ae.y,an=ae.z):(tt=0,kt=0,an=0);const Qt=W.convert(Y.format),Nn=W.convert(Y.type);let We;Y.isData3DTexture?(T.setTexture3D(Y,0),We=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(T.setTexture2DArray(Y,0),We=z.TEXTURE_2D_ARRAY):(T.setTexture2D(Y,0),We=z.TEXTURE_2D),Ee.activeTexture(z.TEXTURE0),Ee.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ee.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ee.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const yn=Ee.getParameter(z.UNPACK_ROW_LENGTH),wt=Ee.getParameter(z.UNPACK_IMAGE_HEIGHT),di=Ee.getParameter(z.UNPACK_SKIP_PIXELS),Mi=Ee.getParameter(z.UNPACK_SKIP_ROWS),ta=Ee.getParameter(z.UNPACK_SKIP_IMAGES);Ee.pixelStorei(z.UNPACK_ROW_LENGTH,At.width),Ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,At.height),Ee.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),Ee.pixelStorei(z.UNPACK_SKIP_ROWS,mt),Ee.pixelStorei(z.UNPACK_SKIP_IMAGES,gt);const wr=w.isDataArrayTexture||w.isData3DTexture,it=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const hn=D.get(w),bi=D.get(Y),qt=D.get(hn.__renderTarget),Fn=D.get(bi.__renderTarget);Ee.bindFramebuffer(z.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let En=0;En<$e;En++)wr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,D.get(w).__webglTexture,oe,gt+En),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,Ge,an+En)),z.blitFramebuffer(nt,mt,Ye,Be,tt,kt,Ye,Be,z.DEPTH_BUFFER_BIT,z.NEAREST);Ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||w.isRenderTargetTexture||D.has(w)){const hn=D.get(w),bi=D.get(Y);Ee.bindFramebuffer(z.READ_FRAMEBUFFER,Au),Ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,wu);for(let qt=0;qt<$e;qt++)wr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,oe,gt+qt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,oe),it?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bi.__webglTexture,Ge,an+qt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bi.__webglTexture,Ge),oe!==0?z.blitFramebuffer(nt,mt,Ye,Be,tt,kt,Ye,Be,z.COLOR_BUFFER_BIT,z.NEAREST):it?z.copyTexSubImage3D(We,Ge,tt,kt,an+qt,nt,mt,Ye,Be):z.copyTexSubImage2D(We,Ge,tt,kt,nt,mt,Ye,Be);Ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else it?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(We,Ge,tt,kt,an,Ye,Be,$e,Qt,Nn,At.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(We,Ge,tt,kt,an,Ye,Be,$e,Qt,At.data):z.texSubImage3D(We,Ge,tt,kt,an,Ye,Be,$e,Qt,Nn,At):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ge,tt,kt,Ye,Be,Qt,Nn,At.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ge,tt,kt,At.width,At.height,Qt,At.data):z.texSubImage2D(z.TEXTURE_2D,Ge,tt,kt,Ye,Be,Qt,Nn,At);Ee.pixelStorei(z.UNPACK_ROW_LENGTH,yn),Ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),Ee.pixelStorei(z.UNPACK_SKIP_PIXELS,di),Ee.pixelStorei(z.UNPACK_SKIP_ROWS,Mi),Ee.pixelStorei(z.UNPACK_SKIP_IMAGES,ta),Ge===0&&Y.generateMipmaps&&z.generateMipmap(We),Ee.unbindTexture()},this.initRenderTarget=function(w){D.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){te=0,de=0,q=null,Ee.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Gt._getUnpackColorSpace()}}function sT(a,e,i){return Math.max(e,Math.min(i,a))}const O0=new Oi,yO=new Oi,SO={x:"XYZ",y:"YXZ",z:"ZXY"};function Cv(a,e,i,s,l,c){O0.copy(i),l!=null&&O0.premultiply(yO.copy(l).invert());const d=new Fe,h=new on,p=new Fe;O0.decompose(d,h,p),MM(d,s.initialTargetPosition,c.translate??!0);let m;const _=c.rotate??!0;if(_===!1)h.copy(s.initialTargetQuaternion),m=s.initialTargetRotation.clone();else if(Array.isArray(_)||_===!0||typeof _!="string"&&!Array.isArray(_)&&_.x===!0&&_.y===!0&&_.z===!0)m=new bn().setFromQuaternion(h,s.initialTargetRotation.order);else if(typeof _=="string"){const g=SO[_];m=new bn().setFromQuaternion(h,g);for(const v of g){const S=v.toLowerCase();S!==_&&(m[S]=0)}m.order=s.initialTargetRotation.order,h.setFromEuler(m)}else m=TO(h,s.initialTargetRotation,_);return typeof c.scale!="object"||!c.scale.uniform?MM(p,s.initialTargetScale,c.scale??!0):RO(p,s.initialTargetScale,c.scale),{pointerAmount:e,position:d,quaternion:h,rotation:m,scale:p,time:a}}const hl=new eh,pl=new Fe,ml=new Fe,MO=new Fe,bO=new on;function yM(a,e,i){return hl.normal.copy(a),hl.constant=0,EO(pl,hl.normal),ml.copy(pl),ml.applyQuaternion(bO.copy(e).invert().premultiply(i)),hl.projectPoint(pl,pl).normalize(),hl.projectPoint(ml,ml).normalize(),(MO.crossVectors(pl,hl.normal).dot(ml)<0?1:-1)*pl.angleTo(ml)}function EO(a,e){if(e.x===0){a.set(1,0,0);return}if(e.y===0){a.set(0,1,0);return}if(e.z===0){a.set(0,0,1);return}a.set(-e.y,e.x,0)}function TO(a,e,i){let s="",l="";for(const h of e.order)i[h.toLowerCase()]===!1?l+=h:s+=h;const c=s+l,d=new bn().setFromQuaternion(a,c);for(const h of c){const p=h.toLowerCase();d[p]=Hd(p,d[p],e[p],i)}return a.setFromEuler(d),d}const z0=new Fe,SM=new eh,AO=new Fe,wO=new Fe;function MM(a,e,i){if(Array.isArray(i)){switch(i.length){case 0:a.copy(e);return;case 1:a.sub(e),oT(a,i[0]instanceof Fe?i[0]:z0.fromArray(i[0])),a.add(e);return;case 2:z0.crossVectors(i[0]instanceof Fe?i[0]:AO.fromArray(i[0]),i[1]instanceof Fe?i[1]:wO.fromArray(i[1])),SM.setFromNormalAndCoplanarPoint(z0,e),SM.projectPoint(a,a);return}return}a.x=Hd("x",a.x,e.x,i),a.y=Hd("y",a.y,e.y,i),a.z=Hd("z",a.z,e.z,i)}function RO(a,e,i){if(Array.isArray(i))return;let s=-1/0,l=1/0;for(const d of["x","y","z"]){const h=i[d],p=e[d];if(!Array.isArray(h)||p===0)continue;const m=h[0]/p,_=h[1]/p;s=Math.max(s,Math.min(m,_)),l=Math.min(l,Math.max(m,_))}if(s===-1/0&&l===1/0)return;const c=a.length()/e.length();a.copy(e).multiplyScalar(sT(c,s,l))}function Hd(a,e,i,s){if(typeof s=="boolean")return s?e:i;if(typeof s=="string")return s===a?e:i;const l=s[a];return l===!1?i:Array.isArray(l)?sT(e,...l):e}function Cl(a=!0,e,i,s,l,c){if(a){switch(e.length){case 0:case 3:return;case 1:DO(i,...e,s,l,c);return;case 2:CO(...e,i,s,l,c);return}throw new Error(`space cannot be ${e.length}D but received (${e.map(d=>d.toArray().join("/")).join("; ")})`)}}const Gd={x:new Fe(1,0,0),y:new Fe(0,1,0),z:new Fe(0,0,1)};function Dl(a,e,i,s,l){if(s!==!1){if(s===!0){a[0]=Gd.x,a[1]=Gd.y,a[2]=Gd.z;return}if(typeof s=="string"){Yc(a,e,i,s,l);return}if(Array.isArray(s)){for(const c of s)Yc(a,e,i,c,l);return}s.x!==!1&&Yc(a,e,i,"x",l),s.y!==!1&&Yc(a,e,i,"y",l),s.z!==!1&&Yc(a,e,i,"z",l)}}const ks=new on,Sd=new bn,fa=new Fe,gl=new Fe,Xs=new Fe;function Yc(a,e,i,s,l){if(Array.isArray(s)?fa.set(...s):s instanceof Fe?fa.copy(s):fa.copy(Gd[s]),l==="translate"){fa.applyQuaternion(e),Md(a,fa);return}if(l==="scale"){Array.isArray(s)?ks.identity():ks.setFromEuler(i),ks.premultiply(e),fa.applyQuaternion(ks),Md(a,fa);return}if(Array.isArray(s))Sd.set(0,0,0);else{Sd.copy(i);for(let c=2;c>=0;c--){const d=i.order[c].toLowerCase();if(Sd[d]=0,d===s)break}}ks.setFromEuler(Sd).premultiply(e),fa.normalize(),gl.set(0,1,0),fa.dot(gl)>.99&&gl.set(0,0,1),Xs.crossVectors(fa,gl).normalize(),gl.copy(Xs),Xs.applyQuaternion(ks),Md(a,Xs),Xs.crossVectors(fa,gl).normalize(),Xs.applyQuaternion(ks),Md(a,Xs)}const bM=new Fe;function Md(a,e){if(a.length!==3){if(a.length===0){a.push(e.clone());return}if(a.length===1){Math.abs(a[0].dot(e))<.999&&a.push(e.clone());return}bM.crossVectors(a[0],a[1]),!(Math.abs(bM.dot(e))<.001)&&a.push(e.clone())}}const Zc=new eh,I0=new Fe,ou=new Fe;function CO(a,e,i,s,l,c){I0.crossVectors(a,e).normalize(),Zc.setFromNormalAndCoplanarPoint(I0,i);const d=c==null?0:Math.abs(I0.dot(c));if(c==null||d<.01){Zc.projectPoint(l,l);return}const p=-Zc.distanceToPoint(s)/c.dot(Zc.normal);if(p<0){Zc.projectPoint(l,l);return}ou.copy(l),l.copy(s).addScaledVector(c,p)}function DO(a,e,i,s,l){const c=l==null?0:1-Math.abs(e.dot(l));if(l==null||c<.001){EM(s,a,e);return}ou.subVectors(i,a);const d=e.dot(l),h=e.dot(ou),p=l.dot(ou),m=1-d*d,_=(h-d*p)/m;if((d*h-p)/m<0){EM(s,a,e);return}ou.copy(s),s.copy(a).addScaledVector(e,_)}function EM(a,e,i){a.sub(e),oT(a,i),a.add(e)}function oT(a,e){const i=a.dot(e);a.copy(e).multiplyScalar(i)}const F0=new Oi,bd=new Oi,Ed=new Fe,NO=new Fe,js=new on,UO=new Fe(1,1,1),B0=[];function LO(a,e,i,s,l){return s==null?js.identity():s.decompose(Ed,js,NO),B0.length=0,Dl(B0,js,i.initialTargetRotation,l.translate??!0,"translate"),bd.makeRotationFromQuaternion(js.copy(e.initialPointerWorldQuaternion).invert()).multiply(F0.makeTranslation(Ed.copy(e.initialPointerWorldPoint).negate())),i.initialTargetParentWorldMatrix!=null&&bd.multiply(i.initialTargetParentWorldMatrix),Cl(l.projectRays,B0,e.initialPointerWorldPoint,e.pointerWorldOrigin,Ed.copy(e.pointerWorldPoint),e.pointerWorldDirection),js.copy(e.pointerWorldQuaternion),(l.rotate??!0)===!1&&js.copy(e.initialPointerWorldQuaternion),F0.compose(Ed,js,UO).multiply(bd).multiply(bd.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale)),Cv(a,1,F0,i,s,l)}const vl=new Fe,Qc=new Fe,Ln=new Fe,ss=new Fe,PO=new Fe,TM=new Fe,_l=new Fe,AM=new Oi,Kc=new Oi,Td=new Oi,La=new on,$c=new on,xl=[];function OO(a,e,i,s,l,c){l==null?La.identity():l.decompose(Ln,La,ss),xl.length=0,Dl(xl,La,s.initialTargetRotation,c.translate??!0,"translate"),Dl(xl,La,s.initialTargetRotation,c.rotate??!0,"rotate"),Dl(xl,La,s.initialTargetRotation,c.scale??!0,"scale"),Cl(c.projectRays,xl,e.initialPointerWorldPoint,e.pointerWorldOrigin,Ln.copy(e.pointerWorldPoint),e.pointerWorldDirection),Cl(c.projectRays,xl,i.initialPointerWorldPoint,i.pointerWorldOrigin,ss.copy(i.pointerWorldPoint),i.pointerWorldDirection),vl.copy(i.initialPointerWorldPoint).sub(e.initialPointerWorldPoint),Qc.copy(ss).sub(Ln),Ln.copy(vl),s.prevTwoPointerDeltaRotation!=null&&Ln.applyQuaternion(s.prevTwoPointerDeltaRotation),Ln.normalize(),ss.copy(Qc).normalize(),La.setFromUnitVectors(Ln,ss),s.prevTwoPointerDeltaRotation==null?s.prevTwoPointerDeltaRotation=new on:La.multiply(s.prevTwoPointerDeltaRotation),s.prevTwoPointerDeltaRotation.copy(La);const d=(yM(ss,e.prevPointerWorldQuaternion,e.pointerWorldQuaternion)+yM(ss,i.prevPointerWorldQuaternion,i.pointerWorldQuaternion))*.5+(s.prevAngle??0);if(s.prevAngle=d,La.premultiply($c.setFromAxisAngle(ss,d)),Td.compose(s.initialTargetPosition,s.initialTargetQuaternion,s.initialTargetScale),s.initialTargetParentWorldMatrix!=null&&Td.premultiply(s.initialTargetParentWorldMatrix),typeof c.scale=="object"&&(c.scale.uniform??!1))_l.setScalar(Qc.length()/vl.length());else{Td.decompose(PO,$c,TM),Ln.copy(vl).applyQuaternion($c.invert()).divide(TM),Ln.x=Math.abs(Ln.x),Ln.y=Math.abs(Ln.y),Ln.z=Math.abs(Ln.z);const h=Math.max(...Ln.toArray());Ln.divideScalar(h),_l.set(1,1,1),_l.addScaledVector(Ln,Qc.length()/vl.length()-1)}return AM.makeTranslation(Ln.copy(Qc).multiplyScalar(.5).add(e.pointerWorldPoint)).multiply(Kc.makeRotationFromQuaternion(La)).multiply(Kc.makeRotationFromQuaternion($c.invert())).multiply(Kc.makeScale(_l.x,_l.y,_l.z)).multiply(Kc.makeRotationFromQuaternion($c.invert())).multiply(Kc.makeTranslation(Ln.copy(vl).multiplyScalar(.5).add(e.initialPointerWorldPoint).negate())).multiply(Td),Cv(a,2,AM,s,l,c)}const gn=new Fe,Wi=new Fe,H0=new Fe,os=new Fe,qs=new Fe,Yi=new on,Li=new on,ls=new Oi,dr=new Fe,yl=[];function zO(a,e,i,s,l,c){if(l==null?Yi.identity():l.decompose(gn,Yi,Wi),yl.length=0,c.translate==="as-scale"&&Dl(yl,Yi,i.initialTargetRotation,c.scale??!0,"scale"),c.translate!="as-scale"&&Dl(yl,Yi,i.initialTargetRotation,c.rotate??!0,"rotate"),ls.makeTranslation(i.initialTargetPosition),i.initialTargetParentWorldMatrix!=null&&ls.premultiply(i.initialTargetParentWorldMatrix),os.setFromMatrixPosition(ls),Cl(c.projectRays,yl,e.initialPointerWorldPoint,e.pointerWorldOrigin,os,void 0),os.negate().add(e.initialPointerWorldPoint),qs.setFromMatrixPosition(s),Cl(c.projectRays,yl,e.initialPointerWorldPoint,e.pointerWorldOrigin,qs,void 0),Cl(c.projectRays,yl,e.initialPointerWorldPoint,e.pointerWorldOrigin,Wi.copy(e.pointerWorldPoint),e.pointerWorldDirection),qs.negate().add(Wi),c.translate==="as-scale"?Yi.copy(i.initialTargetQuaternion):(gn.copy(os),i.prevTranslateAsDeltaRotation!=null&&gn.applyQuaternion(i.prevTranslateAsDeltaRotation),gn.normalize(),Wi.copy(qs).normalize(),Yi.setFromUnitVectors(gn,Wi),i.prevTranslateAsDeltaRotation==null?i.prevTranslateAsDeltaRotation=new on:Yi.multiply(i.prevTranslateAsDeltaRotation),i.prevTranslateAsDeltaRotation.copy(Yi),i.initialTargetParentWorldMatrix!=null&&(Li.setFromRotationMatrix(i.initialTargetParentWorldMatrix),Yi.multiply(Li.normalize()),Yi.premultiply(Li.invert())),Yi.multiply(i.initialTargetQuaternion)),c.translate==="as-rotate")dr.set(1,1,1);else if(typeof c.scale=="object"&&(c.scale.uniform??!1))dr.setScalar(qs.length()/os.length());else if(c.translate==="as-rotate-and-scale"){ls.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale),i.initialTargetParentWorldMatrix!=null&&ls.premultiply(i.initialTargetParentWorldMatrix),ls.decompose(Wi,Li,H0),gn.copy(os).applyQuaternion(Li.invert()).divide(H0),gn.x=Math.abs(gn.x),gn.y=Math.abs(gn.y),gn.z=Math.abs(gn.z);const d=Math.max(...gn.toArray());gn.divideScalar(d),dr.set(1,1,1),dr.addScaledVector(gn,qs.length()/os.length()-1)}else i.initialTargetParentWorldMatrix!=null?(i.initialTargetParentWorldMatrix.decompose(gn,Li,Wi),Li.multiply(i.initialTargetQuaternion)):Li.copy(i.initialTargetQuaternion),gn.copy(os).applyQuaternion(Li.invert()),l!=null?(l.decompose(Wi,Li,H0),Li.multiply(i.initialTargetQuaternion)):Li.copy(i.initialTargetQuaternion),Wi.copy(qs).applyQuaternion(Li.invert()),dr.x=Math.abs(gn.x)<.001?1:Math.abs(Wi.x/gn.x),dr.y=Math.abs(gn.y)<.001?1:Math.abs(Wi.y/gn.y),dr.z=Math.abs(gn.z)<.001?1:Math.abs(Wi.z/gn.z);return dr.multiply(i.initialTargetScale),ls.compose(i.initialTargetPosition,Yi,dr),Cv(a,1,ls,i,void 0,c)}class wM{t1;t2;_position;_quaternion;_rotation;_scale;constructor(e,i){this.t1=e,this.t2=i}get time(){return this.t1.time-this.t2.time}get position(){return this._position??=this.t1.position.clone().sub(this.t2.position)}get quaternion(){return this._quaternion??=this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion)}get rotation(){return this._rotation??=new bn().setFromQuaternion(this.quaternion)}get scale(){return this._scale??=this.t1.scale.clone().sub(this.t2.scale)}}class IO{cancel;previous;memo;event;initial;current;first;last;_delta;_offset;constructor(e){this.cancel=e}start(e,i){this.event=e,this.previous=void 0,this.current=i,this.initial=i,this.first=!0,this.last=!1,this.memo=void 0,this._delta=void 0,this._offset=void 0}update(e,i){this.event=e,this.previous=this.current,this.current=i,this.first=!1,this.last=!1,this._delta=void 0,this._offset=void 0}end(e){this.event=e,this.first=!1,this.last=!0,this._delta=void 0,this._offset=void 0}get delta(){if(this.previous!=null)return this._delta??=new wM(this.current,this.previous)}get offset(){return this._offset??=new wM(this.current,this.initial)}}function RM(a,e){if(a.details.type==="sphere")return!1;if(a.details.type==="lines"){const{line:i}=a.details;return e.copy(i.end).sub(i.start).normalize(),!0}return a.details.type==="screen-ray"?(e.copy(a.details.direction),!0):(e.set(0,0,-1).applyQuaternion(a.pointerQuaternion),!0)}const CM=new Fe;class FO{target;getOptions;outputState;latestMoveEvent;inputState=new Map;capturedObjects=new Map;initialTargetPosition=new Fe;initialTargetQuaternion=new on;initialTargetRotation=new bn;initialTargetScale=new Fe;initialTargetParentWorldMatrix;prevTwoPointerDeltaRotation;prevTranslateAsDeltaRotation;prevAngle;handlers={onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerEnd:this.onPointerEnd.bind(this)};constructor(e,i=()=>({})){this.target=e,this.getOptions=i,this.outputState=new IO(this.cancel.bind(this))}firstOnPointer(e){const i=this.getTarget();if(i==null)return;const s=RM(e,CM)?CM.clone():void 0;e.intersection.details.type,this.inputState.set(e.pointerId,{pointerWorldDirection:s,pointerWorldPoint:e.point,pointerWorldOrigin:e.pointerPosition,pointerWorldQuaternion:e.pointerQuaternion,initialPointerWorldPoint:e.point.clone(),initialPointerWorldDirection:s?.clone(),initialPointerWorldQuaternion:e.pointerQuaternion.clone(),prevPointerWorldQuaternion:e.pointerQuaternion}),this.save(),this.inputState.size===1&&this.outputState.start(e,{pointerAmount:1,time:e.timeStamp,position:this.initialTargetPosition.clone(),quaternion:this.initialTargetQuaternion.clone(),rotation:this.initialTargetRotation.clone(),scale:this.initialTargetScale.clone()}),this.outputState.memo=this.apply(i)}onPointerDown(e){this.getOptions().filter?.(e)!==!1&&(this.stopPropagation(e),this.capturePointer(e.pointerId,e.object)&&this.firstOnPointer(e))}onPointerMove(e){if(!this.capturedObjects.has(e.pointerId))return;this.stopPropagation(e);const i=this.inputState.get(e.pointerId);if(i==null){this.firstOnPointer(e);return}this.latestMoveEvent=e,i.pointerWorldPoint=e.point,i.prevPointerWorldQuaternion=i.pointerWorldQuaternion,i.pointerWorldQuaternion=e.pointerQuaternion,i.pointerWorldOrigin=e.pointerPosition,i.pointerWorldDirection!=null&&RM(e,i.pointerWorldDirection)}cancel(){if(this.capturedObjects.size===0)return;for(const[i,s]of this.capturedObjects)s.releasePointerCapture(i);this.capturedObjects.clear(),this.inputState.clear(),this.outputState.end(void 0);const e=this.getTarget();e!=null&&this.apply(e)}onPointerEnd(e){const i=this.capturedObjects.get(e.pointerId);i!=null&&(this.stopPropagation(e),this.releasePointer(e.pointerId,i,e))}update(e){const i=this.getTarget();if(i==null||this.inputState.size===0||this.latestMoveEvent==null&&(this.getOptions().alwaysUpdate??!1)===!1)return;const s=this.getOptions();let l;if(s.translate==="as-rotate"||s.translate==="as-rotate-and-scale"||s.translate==="as-scale"){s.translate,this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0;const[c]=this.inputState.values(),d=i.matrixWorld,h=i.parent?.matrixWorld;l=zO(e,c,this,d,h,s)}else if(this.inputState.size===1){this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0,this.prevTranslateAsDeltaRotation=void 0;const[c]=this.inputState.values();l=LO(e,c,this,i.parent?.matrixWorld,s)}else{this.prevTranslateAsDeltaRotation=void 0;const[c,d]=this.inputState.values();l=OO(e,c,d,this,i.parent?.matrixWorld,s)}this.outputState.update(this.latestMoveEvent,l),this.outputState.memo=this.apply(i),this.latestMoveEvent=void 0}getTarget(){return this.target instanceof _u?this.target:this.target?.current}capturePointer(e,i){if(this.capturedObjects.has(e))return!1;const{multitouch:s,translate:l}=this.getOptions();return((s??!0)===!1||typeof l=="string")&&this.capturedObjects.size===1?!1:(this.capturedObjects.set(e,i),i.setPointerCapture(e),!0)}releasePointer(e,i,s){const l=this.getTarget();if(!(l==null||!this.capturedObjects.delete(e))){if(this.inputState.delete(e),i.releasePointerCapture(e),this.inputState.size>0){this.save();return}this.outputState.end(s),this.apply(l)}}stopPropagation(e){e==null||!(this.getOptions()?.stopPropagation??!0)||e.stopPropagation()}apply(e){return(this.getOptions().apply??lT)(this.outputState,e)}getState(){return this.inputState.size===0?void 0:this.outputState}save(){const e=this.getTarget();if(e!=null){e.updateWorldMatrix(!0,!1),this.prevAngle=void 0,this.prevTwoPointerDeltaRotation=void 0,this.prevTranslateAsDeltaRotation=void 0,this.initialTargetParentWorldMatrix=e.parent?.matrixWorld.clone(),e.matrixAutoUpdate?(this.initialTargetPosition.copy(e.position),this.initialTargetQuaternion.copy(e.quaternion),this.initialTargetRotation.copy(e.rotation),this.initialTargetScale.copy(e.scale)):(e.matrix.decompose(this.initialTargetPosition,this.initialTargetQuaternion,this.initialTargetScale),this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion,e.rotation.order));for(const i of this.inputState.values())i.pointerWorldDirection!=null&&i.initialPointerWorldDirection?.copy(i.pointerWorldDirection),i.initialPointerWorldPoint.copy(i.pointerWorldPoint),i.initialPointerWorldQuaternion.copy(i.pointerWorldQuaternion)}}bind(e){const{onPointerDown:i,onPointerMove:s,onPointerEnd:l}=this.handlers;return e.addEventListener("pointerdown",i),e.addEventListener("pointermove",s),e.addEventListener("pointercancel",l),e.addEventListener("pointerup",l),()=>{e.removeEventListener("pointerdown",i),e.removeEventListener("pointermove",s),e.removeEventListener("pointercancel",l),e.removeEventListener("pointerup",l),this.cancel()}}capture(e,i){return this.capturePointer(e,i)?()=>this.releasePointer(e,i,void 0):BO}}function BO(){}function lT(a,e){e.position.copy(a.current.position),e.rotation.order=a.current.rotation.order,e.quaternion.copy(a.current.quaternion),e.scale.copy(a.current.scale)}class HO{target;getOptions;handles=[];hoveredTagMap=new Map;hoverSubscriptions=[];applySubscriptions=[];space;constructor(e,i){this.target=e,this.getOptions=i}getSpace(){return this.space??"world"}getTarget(){return this.target instanceof _u?this.target:this.target.current}getHandleOptions(e,i){const s=this.getOptions?.(),l=i?.();return{...s,...l,apply:(c,d)=>(this.onApply(e,c,d),(l?.apply??s?.apply??lT)?.(c,d))}}registerHandle(e,i,s){const l={object:i,store:e,tag:s};this.handles.push(l);const c=e.bind(i),d=this.onPointerEnter.bind(this,s),h=this.onPointerLeave.bind(this);return i.addEventListener("pointerenter",d),i.addEventListener("pointerleave",h),()=>{const p=this.handles.indexOf(l);p!=-1&&this.handles.splice(p,1),c(),e.cancel()}}subscribeHover(e){return this.hoverSubscriptions.push(e),e(Array.from(this.hoveredTagMap.values())),()=>{const i=this.hoverSubscriptions.indexOf(e);i!==-1&&this.hoverSubscriptions.splice(i,1)}}subscribeApply(e){return this.applySubscriptions.push(e),()=>{const i=this.applySubscriptions.indexOf(e);i!==-1&&this.applySubscriptions.splice(i,1)}}update(e){for(const{store:i}of this.handles)i.update(e)}onPointerEnter(e,i){this.hoveredTagMap.set(i.pointerId,e),this.updateHover()}onPointerLeave(e){this.hoveredTagMap.delete(e.pointerId),this.updateHover()}updateHover(){const e=Array.from(this.hoveredTagMap.values());for(const i of this.hoverSubscriptions)i(e)}onApply(e,i,s){for(const l of this.applySubscriptions)l(e,i,s)}}const fi={depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0};function xa(a,e,i,{color:s,hoverColor:l,hoverOpacity:c,opacity:d,disabled:h=!1}){if(l==null&&c==null||h){e.color.set(s),e.opacity=d??1,h&&(e.opacity*=.5,e.color.lerp(new Kw(1,1,1),.5));return}return l??=s,a.subscribeHover(p=>{const m=p.some(_=>_.includes(i));e.color.set(m?l:s),e.opacity=(m?c:d)??1})}const Ad=new on,cT=new ib;cT.setAttribute("position",new rb([-1e3,0,0,1e3,0,0],3));class G0 extends nb{context;rotationOffset;constructor(e,i){super(cT),this.context=e,this.rotationOffset=i,this.renderOrder=1/0}update(){this.quaternion.setFromEuler(this.rotationOffset);const e=this.context.getTarget();this.context.getSpace()==="world"&&e!=null&&(e.getWorldQuaternion(Ad).invert(),this.quaternion.premultiply(Ad))}bind(e){this.material=new ab({...fi,color:this.material.color??"white",opacity:this.material.opacity??1});const i=this.context.subscribeHover(l=>{const c=l.some(d=>d.includes(e));this.visible=c}),s=this.context.subscribeApply((l,c)=>{if(c.last){this.position.set(0,0,0);return}this.position.copy(c.initial.position).sub(c.current.position);const d=this.context.getTarget();d!=null&&(Ad.copy(d.quaternion).invert(),this.position.applyQuaternion(Ad))});return()=>{this.material.dispose(),i(),s()}}}class Sr extends Ha{context;axis;store;options;tag;constructor(e,i,s,l){super(),this.context=e,this.axis=i,this.tag=(s??"")+i,this.store=new FO(e.target,()=>e.getHandleOptions(this.tag,l))}}function Mr(a,e=!0){if(e===!1)return{options:!1,disabled:!0};if(e===!0){const l={x:!1,y:!1,z:!1,e:!1};for(const c of a)l[c]=!0;return{options:l,disabled:!1}}if(e==="disabled")return{options:{x:!0,y:!0,z:!0,e:!0},disabled:!0};if(typeof e=="string")return{options:e===a?{x:!1,y:!1,z:!1,e:!1,[a]:!0}:!1,disabled:!1};const i={x:!1,y:!1,z:!1,e:!1};let s=!1;for(const l of a){let c=e[l]??!0;if(c===!1)return{options:!1,disabled:!0};c==="disabled"&&(s=!0,c=!0),i[l]=c}return{options:i,disabled:s}}const DM=new Fe,NM=new Fe;function Dv(a,e,i,s){if(!i)return s;let l;return e instanceof $w?l=(e.top-e.bottom)/e.zoom:(e.getWorldPosition(DM),a.getWorldPosition(NM),l=DM.distanceTo(NM)*Math.min(1.9*Math.tan(Math.PI*e.fov/360)/e.zoom,7)),l*s/4}const uT=new fu(0,.04,.1,12);uT.translate(0,.05,0);const fT=new fu(.0075,.0075,.5,3);fT.translate(0,.25,0);const GO=new bn(0,0,-Math.PI/2),VO=new bn(0,0,Math.PI/2);class Sl extends Sr{invert;showArrowBody;constructor(e,i,s="",l,c=!1,d=!0){super(e,i,s,()=>({scale:!1,rotate:!1,translate:l!=null?[l]:this.options,multitouch:!1})),this.invert=c,this.showArrowBody=d}bind(e,i,s){const{options:l,disabled:c}=Mr(this.axis,s);if(l===!1)return;this.options=l;const d=this.invert?VO:GO,h=new Si(fi),p=xa(this.context,h,this.tag,{color:e,hoverColor:i,disabled:c}),m=new xn(uT,h);m.renderOrder=1/0,m.position.x=this.invert?-.5:.5,m.rotation.copy(d),this.add(m);let _,g;if(this.showArrowBody){const b=new Si(fi);_=xa(this.context,b,this.tag,{color:e,hoverColor:16777024,disabled:c}),g=new xn(fT,b),g.renderOrder=1/0,g.rotation.copy(d),this.add(g)}const v=new xn(new fu(.13,0,.6,4));v.pointerEventsOrder=1/0,v.position.x=this.invert?-.3:.3,v.rotation.copy(d),v.visible=!1,this.add(v);const S=c?void 0:this.context.registerHandle(this.store,v,this.tag);return()=>{h.dispose(),S?.(),p?.(),_?.(),this.remove(m),g!=null&&this.remove(g),this.remove(v)}}}class V0 extends Sr{constructor(e,i,s="",l){super(e,i,s,()=>({translate:l??this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e,i,s){const{options:l,disabled:c}=Mr(this.axis,s);if(l===!1)return;this.options=l;const d=new Si(fi),h=xa(this.context,d,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:i,disabled:c}),p=new xn(new du(.2,.2,.01),d);p.renderOrder=1/0,p.pointerEventsOrder=1/0,p.position.set(.15,.15,0);const m=c?void 0:this.context.registerHandle(this.store,p,this.tag);return this.add(p),()=>{d.dispose(),p.geometry.dispose(),m?.(),h?.(),this.remove(p)}}}const UM=new on;function kO(a,e){const i=new xn(new Vd(.01,2),new Si(fi));i.renderOrder=1/0,i.visible=!1,a.add(i);const s=new xn(new Vd(.01,2),new Si(fi));s.renderOrder=1/0,s.visible=!1,a.add(s);const l=new ib;l.setAttribute("position",new rb([0,0,0,1,1,1],3));const c=new nb(l,new ab(fi));c.renderOrder=1/0,c.visible=!1,a.add(c);const d=e.subscribeApply((h,p)=>{s.position.set(0,0,0),i.position.copy(p.initial.position).sub(p.current.position);const m=e.getTarget();m!=null&&(UM.copy(m.quaternion).invert(),i.position.applyQuaternion(UM)),c.position.set(0,0,0),c.scale.copy(i.position),i.visible=!p.last,c.visible=!p.last,s.visible=!p.last});return()=>{i.geometry.dispose(),i.material.dispose(),s.geometry.dispose(),s.material.dispose(),c.geometry.dispose(),c.material.dispose(),a.remove(i),a.remove(s),a.remove(c),d()}}class XO extends Sr{constructor(e){super(e,"xyz","",()=>({translate:this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e){const{options:i,disabled:s}=Mr(this.axis,e);if(i===!1)return;this.options=i;const l=new Si(fi),c=xa(this.context,l,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,hoverOpacity:1,disabled:s}),d=new xn(new Vd(.1,0),l);d.renderOrder=1/0,this.add(d);const h=new xn(new Vd(.2,0));h.pointerEventsOrder=1/0,h.visible=!1,this.add(h);const p=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{l.dispose(),d.geometry.dispose(),h.geometry.dispose(),p?.(),c?.(),this.remove(d),this.remove(h)}}}const LM=new Fe,oi=new on,PM=new on,OM=new on().setFromEuler(new bn(0,0,Math.PI/2)),zM=new on().setFromEuler(new bn(0,-Math.PI/2,0)),jO=new on,qO=new on().setFromEuler(new bn(0,-Math.PI/2,0)),WO=new on().setFromEuler(new bn(Math.PI/2,0,0));class YO extends Ha{context;size;fixed;free;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;scaleGroup=new Ha;xAxis=new Fe;yAxis=new Fe;zAxis=new Fe;negXAxis=new Fe;negYAxis=new Fe;negZAxis=new Fe;constructor(e,i,s){super(),this.context=e,this.size=i,this.fixed=s,this.add(this.scaleGroup),this.free=new XO(this.context),this.scaleGroup.add(this.free),this.translationX=new Sl(this.context,"x",void 0,this.xAxis),this.scaleGroup.add(this.translationX),this.translationY=new Sl(this.context,"y",void 0,this.yAxis),this.scaleGroup.add(this.translationY),this.translationZ=new Sl(this.context,"z",void 0,this.zAxis),this.scaleGroup.add(this.translationZ),this.translationNegX=new Sl(this.context,"x",void 0,this.negXAxis,!0,!1),this.scaleGroup.add(this.translationNegX),this.translationNegY=new Sl(this.context,"y",void 0,this.negYAxis,!0,!1),this.scaleGroup.add(this.translationNegY),this.translationNegZ=new Sl(this.context,"z",void 0,this.negZAxis,!0,!1),this.scaleGroup.add(this.translationNegZ),this.translationXY=new V0(this.context,"xy",void 0,[this.xAxis,this.yAxis]),this.scaleGroup.add(this.translationXY),this.translationXZ=new V0(this.context,"xz",void 0,[this.xAxis,this.zAxis]),this.scaleGroup.add(this.translationXZ),this.translationYZ=new V0(this.context,"yz",void 0,[this.yAxis,this.zAxis]),this.scaleGroup.add(this.translationYZ)}update(e){this.updateWorldMatrix(!0,!1),this.xAxis.set(1,0,0),this.yAxis.set(0,1,0),this.zAxis.set(0,0,1),this.free.quaternion.identity(),this.translationX.quaternion.copy(PM),this.translationY.quaternion.copy(OM),this.translationZ.quaternion.copy(zM),this.translationNegX.quaternion.copy(PM),this.translationNegY.quaternion.copy(OM),this.translationNegZ.quaternion.copy(zM),this.translationXY.quaternion.copy(jO),this.translationYZ.quaternion.copy(qO),this.translationXZ.quaternion.copy(WO);const i=this.context.getSpace(),s=this.context.getTarget();i=="world"&&s!=null?(s.getWorldQuaternion(oi).invert(),this.free.quaternion.premultiply(oi),this.translationX.quaternion.premultiply(oi),this.translationY.quaternion.premultiply(oi),this.translationZ.quaternion.premultiply(oi),this.translationNegX.quaternion.premultiply(oi),this.translationNegY.quaternion.premultiply(oi),this.translationNegZ.quaternion.premultiply(oi),this.translationXY.quaternion.premultiply(oi),this.translationYZ.quaternion.premultiply(oi),this.translationXZ.quaternion.premultiply(oi),s.parent!=null&&(s.parent.getWorldQuaternion(oi).invert(),this.xAxis.applyQuaternion(oi),this.yAxis.applyQuaternion(oi),this.zAxis.applyQuaternion(oi))):s!=null&&(this.xAxis.applyQuaternion(s.quaternion),this.yAxis.applyQuaternion(s.quaternion),this.zAxis.applyQuaternion(s.quaternion)),this.negXAxis.copy(this.xAxis).negate(),this.negYAxis.copy(this.yAxis).negate(),this.negZAxis.copy(this.zAxis).negate(),this.scaleGroup.scale.setScalar(1),s!=null&&(s.getWorldScale(LM),this.scaleGroup.scale.divide(LM)),this.scaleGroup.scale.multiplyScalar(Dv(this,e,this.fixed??!0,this.size??1))}bind(e){const i=kO(this,this.context),s=this.translationX.bind(16711680,16776960,e),l=this.translationY.bind(65280,16776960,e),c=this.translationZ.bind(255,16776960,e),d=this.translationNegX.bind(16711680,16776960,e),h=this.translationNegY.bind(65280,16776960,e),p=this.translationNegZ.bind(255,16776960,e),m=this.translationXY.bind(255,16776960,e),_=this.translationYZ.bind(16711680,16776960,e),g=this.translationXZ.bind(65280,16776960,e),v=this.free.bind(e);return()=>{i(),s?.(),l?.(),c?.(),d?.(),h?.(),p?.(),m?.(),_?.(),g?.(),v?.()}}}const ZO=new bn(0,0,-Math.PI/2),QO=new bn(0,0,Math.PI/2);class Ml extends Sr{invert;showHandleLine;constructor(e,i,s="",l=!1,c=!0){super(e,i,s,()=>({scale:this.options,rotate:!1,translate:"as-scale",multitouch:!1})),this.invert=l,this.showHandleLine=c}bind(e,i,s){const{options:l,disabled:c}=Mr(this.axis,s);if(l===!1)return;this.options=l;const d=this.invert?QO:ZO,h=new Ha;h.position.x=this.invert?-.5:.5,h.rotation.copy(d),this.add(h);const p=new Si(fi),m=xa(this.context,p,this.tag,{color:e,hoverColor:i,disabled:c}),_=new xn(new du(.08,.08,.08),p);_.renderOrder=1/0,_.rotation.copy(d),h.add(_);let g,v,S;if(this.showHandleLine){S=new Ha,S.rotation.copy(d),this.add(S);const M=new Si(fi);g=xa(this.context,M,this.tag,{color:e,hoverColor:i,disabled:c}),v=new xn(new fu(.0075,.0075,.5,3),M),v.renderOrder=1/0,v.position.y=.25,S.add(v)}const b=new Ha;b.visible=!1,b.rotation.copy(d),b.position.x=this.invert?-.3:.3,this.add(b);const C=new xn(new fu(.2,0,.5,4));C.pointerEventsOrder=1/0,C.position.y=.04,b.add(C);const y=c?void 0:this.context.registerHandle(this.store,C,this.tag);return()=>{p.dispose(),C.geometry.dispose(),_.geometry.dispose(),v?.geometry.dispose(),y?.(),m?.(),g?.(),S!=null&&this.remove(S),this.remove(b),this.remove(h)}}}class k0 extends Sr{constructor(e,i,s=""){super(e,i,s,()=>({translate:"as-scale",scale:this.options,rotate:!1,multitouch:!1}))}bind(e,i,s){const{options:l,disabled:c}=Mr(this.axis,s);if(l===!1)return;this.options=l;const d=new Si(fi),h=xa(this.context,d,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:i,disabled:c}),p=new xn(new du(.2,.2,.01),d);p.renderOrder=1/0,p.pointerEventsOrder=1/0,p.position.set(.15,.15,0);const m=c?void 0:this.context.registerHandle(this.store,p,this.tag);return this.add(p),()=>{d.dispose(),p.geometry.dispose(),m?.(),h?.(),this.remove(p)}}}const KO=new bn(0,0,-Math.PI/2),$O=new bn(0,0,Math.PI/2);class bl extends Sr{actualAxis;invert;constructor(e,i="",s,l=!1){super(e,"xyz",i,()=>({scale:{uniform:!0,...this.options},rotate:!1,translate:"as-scale",multitouch:!1})),this.actualAxis=s,this.invert=l}bind(e,i,s){const{options:l,disabled:c}=Mr(this.actualAxis,s);if(l===!1)return;this.options=l;const d=this.invert?$O:KO,h=new Ha;h.position.x=this.invert?-.7:.7,h.rotation.copy(d),this.add(h);const p=new Si(fi),m=xa(this.context,p,this.tag,{color:e,hoverColor:i,opacity:.5,hoverOpacity:1,disabled:c}),_=new xn(new du(.08,.08,.08),p);_.renderOrder=1/0,_.rotation.copy(d),h.add(_);const g=new xn(new du(.15,.15,.15),p);g.visible=!1,g.pointerEventsOrder=1/0,g.rotation.copy(d),h.add(g);const v=c?void 0:this.context.registerHandle(this.store,g,this.tag);return()=>{p.dispose(),_.geometry.dispose(),v?.(),m?.(),this.remove(h)}}}const IM=new Fe;class JO extends Ha{context;size;fixed;scaleX;scaleY;scaleZ;scaleNegX;scaleNegY;scaleNegZ;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;constructor(e,i,s){super(),this.context=e,this.size=i,this.fixed=s,this.scaleX=new bl(this.context,void 0,"x"),this.add(this.scaleX),this.scaleY=new bl(this.context,void 0,"y"),this.scaleY.rotation.z=Math.PI/2,this.add(this.scaleY),this.scaleZ=new bl(this.context,void 0,"z"),this.scaleZ.rotation.y=-Math.PI/2,this.add(this.scaleZ),this.scaleNegX=new bl(this.context,void 0,"x",!0),this.add(this.scaleNegX),this.scaleNegY=new bl(this.context,void 0,"y",!0),this.scaleNegY.rotation.z=Math.PI/2,this.add(this.scaleNegY),this.scaleNegZ=new bl(this.context,void 0,"z",!0),this.scaleNegZ.rotation.y=-Math.PI/2,this.add(this.scaleNegZ),this.translationX=new Ml(this.context,"x"),this.add(this.translationX),this.translationY=new Ml(this.context,"y"),this.translationY.rotation.z=Math.PI/2,this.add(this.translationY),this.translationZ=new Ml(this.context,"z"),this.translationZ.rotation.y=-Math.PI/2,this.add(this.translationZ),this.translationNegX=new Ml(this.context,"x",void 0,!0,!1),this.add(this.translationNegX),this.translationNegY=new Ml(this.context,"y",void 0,!0,!1),this.translationNegY.rotation.z=Math.PI/2,this.add(this.translationNegY),this.translationNegZ=new Ml(this.context,"z",void 0,!0,!1),this.translationNegZ.rotation.y=-Math.PI/2,this.add(this.translationNegZ),this.translationXY=new k0(this.context,"xy"),this.add(this.translationXY),this.translationXZ=new k0(this.context,"xz"),this.translationXZ.rotation.x=Math.PI/2,this.add(this.translationXZ),this.translationYZ=new k0(this.context,"yz"),this.translationYZ.rotation.y=-Math.PI/2,this.add(this.translationYZ)}update(e){this.updateWorldMatrix(!0,!1),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(IM),this.scale.divide(IM)),this.scale.multiplyScalar(Dv(this,e,this.fixed??!0,this.size??1))}bind(e){const i=this.scaleX.bind(16777215,16776960,e),s=this.scaleY.bind(16777215,16776960,e),l=this.scaleZ.bind(16777215,16776960,e),c=this.scaleNegX.bind(16777215,16776960,e),d=this.scaleNegY.bind(16777215,16776960,e),h=this.scaleNegZ.bind(16777215,16776960,e),p=this.translationX.bind(16711680,16776960,e),m=this.translationY.bind(65280,16776960,e),_=this.translationZ.bind(255,16776960,e),g=this.translationNegX.bind(16711680,16776960,e),v=this.translationNegY.bind(65280,16776960,e),S=this.translationNegZ.bind(255,16776960,e),b=this.translationXY.bind(255,16776960,e),C=this.translationYZ.bind(16711680,16776960,e),y=this.translationXZ.bind(65280,16776960,e);return()=>{p?.(),m?.(),_?.(),g?.(),v?.(),S?.(),b?.(),C?.(),y?.(),i?.(),s?.(),l?.(),c?.(),d?.(),h?.()}}}const FM={x:{vector1:new Fe(0,0,-1),vector2:new Fe(0,-1,0),rotationOffset:new on,axis:[1,0,0]},y:{vector1:new Fe(0,0,-1),vector2:new Fe(-1,0,-1),rotationOffset:new on().setFromEuler(new bn(0,0,Math.PI/2)),axis:[0,1,0]},z:{vector1:new Fe(-1,0,0),vector2:new Fe(0,-1,0),rotationOffset:new on().setFromEuler(new bn(0,Math.PI/2,0)),axis:[0,0,1]}},X0=new Fe,Jc=new Fe,wd=new Fe,Ws=new Fe,da=new on;class j0 extends Sr{direction=new Fe(1,0,0);constructor(e,i,s=""){super(e,i,s,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}))}update(e){const{rotationOffset:i,vector1:s,vector2:l}=FM[this.axis];e.getWorldPosition(X0),this.getWorldPosition(Jc).sub(X0),wd.copy(s),Ws.copy(l);const c=this.context.getTarget(),d=this.context.getSpace();d==="local"&&c!=null&&(c.getWorldQuaternion(da),wd.applyQuaternion(da),Ws.applyQuaternion(da)),Ws.crossVectors(wd,Ws);const h=Jc.dot(Ws);Ws.multiplyScalar(h),Jc.sub(Ws),this.quaternion.setFromUnitVectors(wd,Jc.normalize()),d==="local"&&c!=null&&(c.getWorldQuaternion(da),this.quaternion.multiply(da)),this.quaternion.multiply(i),c?.parent!=null?(c.parent.matrixWorld.decompose(X0,da,Jc),da.invert(),this.quaternion.premultiply(da)):da.identity(),this.store.getState()==null&&(this.direction.fromArray(FM[this.axis].axis),this.direction.applyQuaternion(d==="local"&&c!=null?c?.quaternion:da)),c!=null&&this.quaternion.premultiply(da.copy(c.quaternion).invert())}bind(e,i){const{options:s,disabled:l}=Mr(this.axis,i);if(s===!1)return;this.options=s;const c=new Si(fi),d=xa(this.context,c,this.tag,{color:e,hoverColor:16776960,disabled:l}),h=new xn(Nv(.5,.5),c);h.renderOrder=1/0,this.add(h);const p=new xn(new ov(.5,.1,4,24));p.visible=!1,p.pointerEventsOrder=1/0,p.rotation.set(0,-Math.PI/2,-Math.PI/2),this.add(p);const m=l?void 0:this.context.registerHandle(this.store,p,this.tag);return()=>{c.dispose(),p.geometry.dispose(),h.geometry.dispose(),m?.(),d?.(),this.remove(p),this.remove(h)}}}const q0=new Fe,W0=new Fe,ez=new Fe(1,0,0),eu=new on;class tz extends Sr{constructor(e,i=""){super(e,"xyz",i,()=>({scale:!1,translate:"as-rotate",rotate:this.options,multitouch:!1}))}update(e){e.getWorldPosition(q0),this.getWorldPosition(W0).sub(q0),this.quaternion.setFromUnitVectors(ez,W0.normalize());const i=this.context.getTarget();i?.parent!=null&&(i.parent.matrixWorld.decompose(q0,eu,W0),eu.invert(),this.quaternion.premultiply(eu)),i!=null&&(eu.copy(i.quaternion).invert(),this.quaternion.premultiply(eu))}bind(e){const{options:i,disabled:s}=Mr(this.axis,e);if(i===!1)return;this.options=i;const l=new Si(fi),c=xa(this.context,l,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,disabled:s}),d=new xn(Nv(.5,1),l);d.renderOrder=1/0,this.add(d);const h=new xn(new sb(.25,10,8));h.visible=!1,h.pointerEventsOrder=1/0,this.add(h);const p=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{this.pointerEvents="none",l.dispose(),h.geometry.dispose(),d.geometry.dispose(),p?.(),c?.(),this.remove(h),this.remove(d)}}}const Y0=new Fe,nz=new Fe,iz=new Fe(1,0,0),El=new on;class az extends Sr{direction=new Fe(1,0,0);constructor(e,i=""){super(e,"e",i,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}))}update(e){e.getWorldPosition(Y0),this.getWorldPosition(this.direction).sub(Y0).normalize(),this.quaternion.setFromUnitVectors(iz,this.direction);const i=this.context.getTarget();i?.parent!=null&&(i.parent.matrixWorld.decompose(Y0,El,nz),El.invert(),this.quaternion.premultiply(El),this.direction.applyQuaternion(El)),i!=null&&(El.copy(i.quaternion).invert(),this.quaternion.premultiply(El)),this.direction.negate()}bind(e){const{options:i,disabled:s}=Mr(this.axis,e);if(i===!1)return;this.options=i;const l=new Si(fi),c=xa(this.context,l,this.tag,{color:16776960,hoverColor:16776960,opacity:.5,disabled:s}),d=new xn(Nv(.75,1),l);d.renderOrder=1/0,this.add(d);const h=new xn(new ov(.75,.1,2,24),new Si({color:"white"}));h.visible=!1,h.rotation.y=Math.PI/2,h.pointerEventsOrder=1/0,this.add(h);const p=s?void 0:this.context.registerHandle(this.store,h,this.tag);return()=>{l.dispose(),h.geometry.dispose(),d.geometry.dispose(),p?.(),c?.(),this.remove(h),this.remove(d)}}}function Nv(a,e){const i=new ov(a,.0075,3,64,e*Math.PI*2);return i.rotateY(Math.PI/2),i.rotateX(Math.PI/2),i}const BM=new Fe;class rz extends Ha{context;fixed;size;rotationX;rotationY;rotationZ;free;screen;constructor(e,i,s){super(),this.context=e,this.fixed=i,this.size=s,this.rotationX=new j0(this.context,"x"),this.add(this.rotationX),this.rotationY=new j0(this.context,"y"),this.add(this.rotationY),this.rotationZ=new j0(this.context,"z"),this.add(this.rotationZ),this.free=new tz(this.context),this.add(this.free),this.screen=new az(this.context),this.add(this.screen)}update(e){this.updateWorldMatrix(!0,!1),this.rotationX.update(e),this.rotationY.update(e),this.rotationZ.update(e),this.free.update(e),this.screen.update(e),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(BM),this.scale.divide(BM)),this.scale.multiplyScalar(Dv(this,e,this.fixed??!0,this.size??1))}bind(e){const i=this.rotationX.bind(16711680,e),s=this.rotationY.bind(65280,e),l=this.rotationZ.bind(255,e),c=this.screen.bind(e),d=this.free.bind(e);return()=>{i?.(),s?.(),l?.(),c?.(),d?.()}}}const sz=new bn,oz=new bn(0,0,Math.PI/2),lz=new bn(0,-Math.PI/2,0);class cz extends Ha{xAxisHighlight;yAxisHighlight;zAxisHighlight;handles;context;constructor(e){super(),this.context=new HO(this,e),this.xAxisHighlight=new G0(this.context,sz),this.add(this.xAxisHighlight),this.yAxisHighlight=new G0(this.context,oz),this.add(this.yAxisHighlight),this.zAxisHighlight=new G0(this.context,lz),this.add(this.zAxisHighlight)}set space(e){this.context.space=e}get space(){return this.context.space}update(e,i){this.context.update(e),this.xAxisHighlight.update(),this.yAxisHighlight.update(),this.zAxisHighlight.update(),this.handles?.update(i)}bind(e,i){const s=this.xAxisHighlight.bind("x"),l=this.yAxisHighlight.bind("y"),c=this.zAxisHighlight.bind("z");switch(e){case"rotate":this.handles=new rz(this.context);break;case"scale":this.handles=new JO(this.context);break;case"translate":this.handles=new YO(this.context);break}this.add(this.handles);const d=this.handles.bind(i);return()=>{this.handles!=null&&this.remove(this.handles),this.handles=void 0,d(),s(),l(),c()}}}class uz{nativeEvent;NONE=0;CAPTURING_PHASE=1;AT_TARGET=2;BUBBLING_PHASE=3;relatedTarget=null;get altKey(){return this.getFromNative("altKey",!1)}get button(){return this.getFromNative("button",0)}get buttons(){return this.getFromNative("buttons",0)}get clientX(){return this.getFromNative("clientX",0)}get clientY(){return this.getFromNative("clientY",0)}get ctrlKey(){return this.getFromNative("ctrlKey",!1)}get layerX(){return this.getFromNative("layerX",0)}get layerY(){return this.getFromNative("layerY",0)}get metaKey(){return this.getFromNative("metaKey",!1)}get movementX(){return this.getFromNative("movementX",0)}get movementY(){return this.getFromNative("movementY",0)}get offsetX(){return this.getFromNative("offsetX",0)}get offsetY(){return this.getFromNative("offsetY",0)}get pageX(){return this.getFromNative("pageX",0)}get pageY(){return this.getFromNative("pageY",0)}get screenX(){return this.getFromNative("screenX",0)}get screenY(){return this.getFromNative("screenY",0)}get shiftKey(){return this.getFromNative("shiftKey",!1)}get x(){return this.getFromNative("x",0)}get y(){return this.getFromNative("y",0)}get detail(){return this.getFromNative("detail",0)}get view(){return this.getFromNative("view",null)}get which(){return this.getFromNative("which",0)}get cancelBubble(){return this.getFromNative("cancelBubble",!1)}get composed(){return this.getFromNative("composed",!1)}get eventPhase(){return this.getFromNative("eventPhase",0)}get isTrusted(){return this.getFromNative("isTrusted",!1)}get returnValue(){return this.getFromNative("returnValue",!1)}get timeStamp(){return this.getFromNative("timeStamp",0)}get cancelable(){return this.getFromNative("cancelable",!1)}get defaultPrevented(){return this.getFromNative("defaultPrevented",!1)}constructor(e){this.nativeEvent=e}getFromNative(e,i){return e in this.nativeEvent?this.nativeEvent[e]:i}}const Z0=new Fe;class ci extends uz{type;bubbles;internalPointer;intersection;camera;currentObject;object;propagationState;get pointerId(){return this.internalPointer.id}get pointerType(){return this.internalPointer.type}get pointerState(){return this.internalPointer.state}get distance(){return this.intersection.distance}get distanceToRay(){return this.intersection.distanceToRay}get point(){return this.intersection.point}get index(){return this.intersection.index}get face(){return this.intersection.face}get faceIndex(){return this.intersection.faceIndex}get uv(){return this.intersection.uv}get uv1(){return this.intersection.uv1}get normal(){return this.intersection.normal}get instanceId(){return this.intersection.instanceId}get pointOnLine(){return this.intersection.pointOnLine}get batchId(){return this.intersection.batchId}get pointerPosition(){return this.intersection.pointerPosition}get pointerQuaternion(){return this.intersection.pointerQuaternion}get pointOnFace(){return this.intersection.pointOnFace}get localPoint(){return this.intersection.localPoint}get details(){return this.intersection.details}get target(){return this.object}get currentTarget(){return this.currentObject}get eventObject(){return this.currentObject}get srcElement(){return this.currentObject}_pointer;get pointer(){return this._pointer==null&&(Z0.copy(this.intersection.point).project(this.camera),this._pointer=new Fl(Z0.x,Z0.y)),this._pointer}_ray;get ray(){if(this._ray!=null)return this._ray;switch(this.intersection.details.type){case"screen-ray":case"ray":case"sphere":return this._ray=new GS(this.intersection.pointerPosition,new Fe(0,0,-1).applyQuaternion(this.intersection.pointerQuaternion));case"lines":return this._ray=new GS(this.intersection.details.line.start,this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize())}}_intersections=[];get intersections(){return this._intersections==null&&(this._intersections=[{...this.intersection,eventObject:this.currentObject}]),this._intersections}_unprojectedPoint;get unprojectedPoint(){if(this._unprojectedPoint==null){const e=this.pointer;this._unprojectedPoint=new Fe(e.x,e.y,0).unproject(this.camera)}return this._unprojectedPoint}get stopped(){return this.propagationState.stoppedImmediate||this.propagationState.stopped}get stoppedImmediate(){return this.propagationState.stoppedImmediate}get delta(){throw new Error("not supported")}constructor(e,i,s,l,c,d,h=c.object,p=h,m={stopped:!i,stoppedImmediate:!1}){super(s),this.type=e,this.bubbles=i,this.internalPointer=l,this.intersection=c,this.camera=d,this.currentObject=h,this.object=p,this.propagationState=m}stopPropagation(){this.propagationState.stopped=!0}stopImmediatePropagation(){this.propagationState.stoppedImmediate=!0}retarget(e){return new ci(this.type,this.bubbles,this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target,this.propagationState)}}class $d extends ci{get deltaX(){return this.nativeEvent.deltaX}get deltaY(){return this.nativeEvent.deltaY}get deltaZ(){return this.nativeEvent.deltaZ}constructor(e,i,s,l,c,d){super("wheel",!0,e,i,s,l,c,d)}retarget(e){return new $d(this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target)}}function xi(a){dT(a,a.currentObject)}function dT(a,e){if(e==null)return;const i=dz(e,a.type);if(i!=null&&i.length>0){const s=a.retarget(e),l=i.length;for(let c=0;c<l&&!s.stoppedImmediate;c++)i[c](s)}a.stopped||dT(a,e.parent)}const hT={click:"onClick",contextmenu:"onContextMenu",dblclick:"onDoubleClick",pointercancel:"onPointerCancel",pointerdown:"onPointerDown",pointerenter:"onPointerEnter",pointerleave:"onPointerLeave",pointermove:"onPointerMove",pointerout:"onPointerOut",pointerover:"onPointerOver",pointerup:"onPointerUp",wheel:"onWheel"},fz=Object.keys(hT);function dz(a,e){if(a._listeners!=null&&e in a._listeners)return a._listeners[e];let i;if(a.isVoidObject&&e==="click"&&a.parent?.__r3f!=null&&(i=a.parent.__r3f.root.getState().onPointerMissed),a.__r3f!=null&&(i=a.__r3f.handlers[hT[e]]),i!=null)return[i]}const hz=1e10,pz=new sb(hz),HM=new Map;function mz(a){let e=HM.get(a);return e==null&&(e=new xn(pz),e.isVoidObject=!0,e.parent=a,e.pointerEventsOrder=-1/0,HM.set(a,e)),e}function gz(a,e,i){const s=e.normal??e.face?.normal;return s==null?!1:(a.setFromNormalAndCoplanarPoint(s,e.localPoint),a.applyMatrix4(i),!0)}function vz(a,e,i){if(e==="none"||e==="listener"&&!a)return!1;if(i==="all")return!0;if(typeof i=="function")return({id:c,type:d,state:h})=>i(c,d,h);let s,l;return"deny"in i?(l=!0,s=i.deny):(l=!1,s=i.allow),Array.isArray(s)?c=>GM(s.includes(c.type),l):c=>GM(s===c.type,l)}function GM(a,e){return e?!a:a}function pT(a,e,i,s=!1,l,c,d){const h=s||_z(a,e),p=e.pointerEvents??l,m=p??e.defaultPointerEvents??"listener",_=e.pointerEventsType??c??"all",g=e.pointerEventsOrder??d??0,v=vz(h,m,_),S=i.length;if(S===1)(v===!0||typeof v=="function"&&v(i[0]))&&Q0(i[0],e,m,_,g);else if(v===!0)for(let y=0;y<S;y++)Q0(i[y],e,m,_,g);else if(typeof v=="function")for(let y=0;y<S;y++){const M=i[y];v(M)&&Q0(M,e,m,_,g)}if(e.children.length===0||e.intersectChildren===!1)return;const b=e.interactableDescendants??e.children,C=b.length;for(let y=0;y<C;y++)pT(a,b[y],i,h,p,_,g)}function _z(a,e){if(e.ancestorsHaveListeners||a==="pointer"&&e.ancestorsHavePointerListeners||a==="wheel"&&e.ancestorsHaveWheelListeners||e.__r3f!=null&&e.__r3f?.eventCount>0&&(a==="wheel"&&e.__r3f.handlers.onWheel!=null||a==="pointer"&&Object.keys(e.__r3f.handlers).some(l=>l!="onWheel")))return!0;if(e._listeners==null)return!1;if(a==="wheel"){const l=e._listeners.wheel;return l!=null&&l.length>0}const i=Object.entries(e._listeners),s=i.length;for(let l=0;l<s;l++){const c=i[l];if(c[0]!=="wheel"&&fz.includes(c[0])&&c[1]!=null&&c[1].length>0)return!0}return!1}function Q0({intersector:a,options:e},i,s,l,c){e.filter?.(i,s,l,c)!==!1&&a.executeIntersection(i,c)}function xz(a,e,{customSort:i=yz}={},s){let l,c,d;const h=a.length;for(let p=0;p<h;p++){const m=a[p],_=e?.[p];(l==null||i(m,_,l,c)<0)&&(d=p,l=m,c=_)}return d}function yz(a,e=0,i,s=0){return e!=s?s-e:a.distance-i.distance}const VM=1e7;function Sz(a,e,i,s,l,c=0){const d=e.direction.clone().multiplyScalar(VM),h=VM;return{distance:h+c,object:mz(a),point:d,normal:e.origin.clone().sub(d).normalize(),details:i(d,h),pointerPosition:s,pointerQuaternion:l,pointOnFace:d,localPoint:d}}function Mz(a,e,i){for(;i>0;)a.push(e),--i}const K0=Symbol("buttonsDownTime"),bz=Symbol("buttonsClickTime");globalThis.pointerEventspointerMap??=new Map;_u.prototype.setPointerCapture=function(a){Uv(a)?.setCapture(this)};_u.prototype.releasePointerCapture=function(a){const e=Uv(a);e==null||!e.hasCaptured(this)||e.setCapture(void 0)};_u.prototype.hasPointerCapture=function(a){return Uv(a)?.hasCaptured(this)??!1};function Uv(a){return globalThis.pointerEventspointerMap?.get(a)}class Ez{id;type;state;intersector;getCamera;onMoveCommited;parentSetPointerCapture;parentReleasePointerCapture;options;prevIntersection;intersection;prevEnabled=!0;enabled=!0;wheelIntersection;pointerEntered=[];pointerEnteredHelper=[];pointerCapture;buttonsDownTime=new Map;buttonsDown=new Set;wasMoved=!1;onFirstMove=[];constructor(e,i,s,l,c,d,h,p,m={}){this.id=e,this.type=i,this.state=s,this.intersector=l,this.getCamera=c,this.onMoveCommited=d,this.parentSetPointerCapture=h,this.parentReleasePointerCapture=p,this.options=m,globalThis.pointerEventspointerMap?.set(e,this)}getPointerCapture(){return this.pointerCapture}hasCaptured(e){return this.pointerCapture?.object===e}setCapture(e){this.pointerCapture?.object!==e&&(this.clearPointerCapture(),e!=null&&this.intersection!=null&&(this.pointerCapture={object:e,intersection:this.intersection},this.parentSetPointerCapture?.()))}getButtonsDown(){return this.buttonsDown}getIntersection(){return this.intersection}getEnabled(){return this.enabled}setEnabled(e,i,s=!0){this.enabled!==e&&(!e&&this.pointerCapture!=null&&this.clearPointerCapture(),this.enabled=e,s&&this.commit(i,!1))}computeIntersection(e,i,s){return this.pointerCapture!=null?this.intersector.intersectPointerCapture(this.pointerCapture,s):(this.intersector.startIntersection(s),pT(e,i,[this]),this.intersector.finalizeIntersection(i))}setIntersection(e){this.intersection=e}commit(e,i){const s=this.getCamera(),l=this.prevEnabled?this.prevIntersection:void 0,c=this.enabled?this.intersection:void 0;l!=null&&l.object!=c?.object&&xi(new ci("pointerout",!0,e,this,l,s));const d=this.pointerEntered;this.pointerEntered=[],this.pointerEnteredHelper.length=0,mT(c?.object,this.pointerEntered,d,this.pointerEnteredHelper);const h=d.length;for(let p=0;p<h;p++){const m=d[p];xi(new ci("pointerleave",!1,e,this,l,s,m))}c!=null&&l?.object!=c.object&&xi(new ci("pointerover",!0,e,this,c,s));for(let p=this.pointerEnteredHelper.length-1;p>=0;p--){const m=this.pointerEnteredHelper[p];xi(new ci("pointerenter",!1,e,this,c,s,m))}if(i&&c!=null&&xi(new ci("pointermove",!0,e,this,c,s)),this.prevIntersection=this.intersection,this.prevEnabled=this.enabled,!this.wasMoved&&this.intersector.isReady()){this.wasMoved=!0;const p=this.onFirstMove.length;for(let m=0;m<p;m++)this.onFirstMove[m](s);this.onFirstMove.length=0}this.onMoveCommited?.(this)}move(e,i){this.intersection=this.computeIntersection("pointer",e,i),this.commit(i,!0)}over(e,i){this.wasMoved||(this.intersection=this.computeIntersection("pointer",e,i),this.commit(i,!1))}emitMove(e){this.intersection!=null&&xi(new ci("pointermove",!0,e,this,this.intersection,this.getCamera()))}down(e){if(this.buttonsDown.add(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.down.bind(this,e));return}if(this.intersection==null)return;xi(new ci("pointerdown",!0,e,this,this.intersection,this.getCamera()));const{object:i}=this.intersection;i[K0]??=new Map,i[K0].set(e.button,e.timeStamp),this.buttonsDownTime.set(e.button,e.timeStamp)}up(e){if(this.buttonsDown.delete(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.up.bind(this,e));return}if(this.intersection==null)return;const{clickThesholdMs:i,contextMenuButton:s=2,dblClickThresholdMs:l=500,clickThresholdMs:c=i??300}=this.options;this.clearPointerCapture();const d=Tz(this.buttonsDownTime,this.intersection.object[K0],e.button,e.timeStamp,c),h=this.getCamera();if(d&&e.button===s&&xi(new ci("contextmenu",!0,e,this,this.intersection,h)),xi(new ci("pointerup",!0,e,this,this.intersection,h)),!d||e.button===s)return;xi(new ci("click",!0,e,this,this.intersection,h));const{object:p}=this.intersection,m=p[bz]??=new Map,_=m.get(e.button);if(_==null||e.timeStamp-_>l){m.set(e.button,e.timeStamp);return}xi(new ci("dblclick",!0,e,this,this.intersection,h)),m.delete(e.button)}cancel(e){this.buttonsDown.clear(),this.buttonsDownTime.clear(),this.clearPointerCapture(),this.onFirstMove.length=0,!(!this.enabled||!this.wasMoved||this.intersection==null)&&xi(new ci("pointercancel",!0,e,this,this.intersection,this.getCamera()))}wheel(e,i,s=!1){if(!this.enabled)return;if(!this.wasMoved&&s){this.onFirstMove.push(this.wheel.bind(this,e,i,s));return}s||(this.wheelIntersection=this.computeIntersection("wheel",e,i));const l=s?this.intersection:this.wheelIntersection;l!=null&&xi(new $d(i,this,l,this.getCamera()))}emitWheel(e,i=!1){if(!this.enabled)return;if(!this.wasMoved&&i){this.onFirstMove.push(this.emitWheel.bind(this,e,i));return}const s=i?this.intersection:this.wheelIntersection;s!=null&&xi(new $d(e,this,s,this.getCamera()))}exit(e){(this.buttonsDown.size>0||this.pointerCapture!=null)&&this.cancel(e),this.wasMoved&&(this.intersection=void 0,this.commit(e,!1)),this.onFirstMove.length=0,this.wasMoved=!1}clearPointerCapture(){this.pointerCapture!=null&&(this.parentReleasePointerCapture?.(),this.pointerCapture=void 0)}}function mT(a,e,i,s){if(a==null)return;const l=i.indexOf(a);l!=-1?i.splice(l,1):s.push(a),e.push(a),mT(a.parent,e,i,s)}function Tz(a,e,i,s,l){if(e==null)return!1;const c=e.get(i);return!(c==null||s-c>l||c!=a.get(i))}const tu=new ob,$0=new ob,kM=new Fl,XM=new Fl,jM=new Fl,J0=new Fe,Az=new Oi,Rd=new Fe;function wz(a,e,i){Rd.copy(e).applyMatrix4(Az.copy(i.matrixWorld).invert());const s=i.geometry.attributes.uv;if(s==null||!(s instanceof Jw))return!1;let l;return Rz(i,(c,d,h)=>{i.getVertexPosition(c,tu.a),i.getVertexPosition(d,tu.b),i.getVertexPosition(h,tu.c);const p=tu.closestPointToPoint(Rd,J0).distanceTo(Rd);l!=null&&p>=l||(l=p,$0.copy(tu),kM.fromBufferAttribute(s,c),XM.fromBufferAttribute(s,d),jM.fromBufferAttribute(s,h))}),l==null?!1:($0.closestPointToPoint(Rd,J0),$0.getInterpolation(J0,kM,XM,jM,a),!0)}function Rz(a,e){const i=a.geometry.drawRange;if(a.geometry.index!=null){const d=a.geometry.index,h=Math.max(0,i.start),p=Math.min(d.count,i.start+i.count);for(let m=h;m<p;m+=3)e(d.getX(m),d.getX(m+1),d.getX(m+2));return}const s=a.geometry.attributes.position;if(s==null)return;const l=Math.max(0,i.start),c=Math.min(s.count,i.start+i.count);for(let d=l;d<c;d+=3)e(d,d+1,d+2)}new Oi;const qM=new Oi,Cz=new Fe,WM=new Fl,Dz=new Fe;class Nz{prepareTransformation;options;raycaster=new e2;cameraQuaternion=new on;fromPosition=new Fe;fromQuaternion=new on;coords=new Fl;viewPlane=new eh;intersects=[];pointerEventsOrders=[];constructor(e,i){this.prepareTransformation=e,this.options=i}isReady(){return!0}intersectPointerCapture({intersection:e,object:i},s){const l=e.details;if(l.type!="screen-ray")throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a camera ray intersector`);if(!this.startIntersection(s))return e;this.viewPlane.constant-=l.distanceViewPlane;const c=this.raycaster.ray.intersectPlane(this.viewPlane,new Fe);if(c==null)return e;e.object.updateWorldMatrix(!0,!1),gz(this.viewPlane,e,e.object.matrixWorld);let d=e.uv;return e.object instanceof xn&&wz(WM,c,e.object)&&(d=WM.clone()),{...e,details:{...l,direction:this.raycaster.ray.direction.clone(),screenPoint:this.coords.clone()},uv:d,object:i,point:c,pointOnFace:c,pointerPosition:this.raycaster.ray.origin.clone(),pointerQuaternion:this.cameraQuaternion.clone()}}startIntersection(e){const i=this.prepareTransformation(e,this.coords);return i==null?!1:(i.updateWorldMatrix(!0,!1),i.matrixWorld.decompose(this.fromPosition,this.fromQuaternion,Cz),this.raycaster.setFromCamera(this.coords,i),this.viewPlane.setFromNormalAndCoplanarPoint(i.getWorldDirection(Dz),this.raycaster.ray.origin),!0)}executeIntersection(e,i){const s=this.intersects.length;e.raycast(this.raycaster,this.intersects),Mz(this.pointerEventsOrders,i,this.intersects.length-s)}finalizeIntersection(e){const i=this.fromPosition.clone(),s=this.cameraQuaternion.clone(),l=this.raycaster.ray.direction.clone(),c=xz(this.intersects,this.pointerEventsOrders,this.options),d=c==null?void 0:this.intersects[c];return this.intersects.length=0,this.pointerEventsOrders.length=0,d==null?Sz(e,this.raycaster.ray,(h,p)=>({type:"screen-ray",distanceViewPlane:p,screenPoint:this.coords.clone(),direction:l}),i,s):(d.object.updateWorldMatrix(!0,!1),qM.copy(d.object.matrixWorld).invert(),Object.assign(d,{details:{type:"screen-ray",distanceViewPlane:this.viewPlane.distanceToPoint(d.point),screenPoint:this.coords.clone(),direction:l},pointOnFace:d.point,pointerPosition:i,pointerQuaternion:s,localPoint:d.point.clone().applyMatrix4(qM)}))}}new Oi;new Oi;let Uz=23412;function Lz(){return Uz++}function Pz(a,e,i){if(!(e instanceof globalThis.MouseEvent))return i.set(0,0);const{width:s,height:l,top:c,left:d}=a.getBoundingClientRect(),h=e.clientX-d,p=e.clientY-c;return i.set(h/s*2-1,-(p/l)*2+1)}function Oz(a,e,i,s){return zz(a,typeof e=="function"?e:()=>e,i,Pz.bind(null,a),l=>{try{a.setPointerCapture(l)}catch(c){if(!(c instanceof DOMException&&c.name==="NotFoundError"))throw c}},l=>{a.hasPointerCapture(l)&&a.releasePointerCapture(l)},{pointerTypePrefix:"screen-",...s})}function zz(a,e,i,s,l,c,d={}){const h=d?.forwardPointerCapture??!0,p=new Map,m=d.pointerTypePrefix??"forward-",_=(E,O)=>{let V=p.get(E.pointerId);return V!=null||(V=new Ez(Lz(),`${m}${E.pointerType}`,E.pointerState,new Nz((F,Z)=>(s(F,Z),e()),d),e,void 0,h?l.bind(null,E.pointerId):void 0,h?c.bind(null,E.pointerId):void 0,d),O!="move"&&O!="wheel"&&(V.setIntersection(V.computeIntersection("pointer",i,E)),V.commit(E,!1)),p.set(E.pointerId,V)),V},g=new Map,v=new Map,S=[],b=[],C=(E,O,V)=>{switch(E){case"move":V.move(i,O);return;case"over":V.move(i,O);return;case"wheel":V.wheel(i,O);return;case"cancel":V.cancel(O);return;case"down":if(!YM(O))return;V.down(O);return;case"up":if(!YM(O))return;V.up(O);return;case"exit":v.delete(V),g.delete(V),V.exit(O);return}},y=(E,O)=>{const V=_(O,E);E==="move"&&v.set(V,O),E==="wheel"&&g.set(V,O),d.batchEvents??!0?b.push({type:E,event:O}):C(E,O,V)},M=y.bind(null,"move"),R=y.bind(null,"over"),I=y.bind(null,"cancel"),N=y.bind(null,"down"),k=y.bind(null,"up"),L=y.bind(null,"wheel"),P=y.bind(null,"exit");return a.addEventListener("pointermove",M),a.addEventListener("pointerover",R),a.addEventListener("pointercancel",I),a.addEventListener("pointerdown",N),a.addEventListener("pointerup",k),a.addEventListener("wheel",L),a.addEventListener("pointerleave",P),{destroy(){a.removeEventListener("pointermove",M),a.removeEventListener("pointerover",R),a.removeEventListener("pointercancel",I),a.removeEventListener("pointerdown",N),a.removeEventListener("pointerup",k),a.removeEventListener("wheel",L),a.removeEventListener("pointerleave",P),v.clear(),g.clear()},update(){const E=b.length;for(let O=0;O<E;O++){const{type:V,event:F}=b[O],Z=_(F,V);if(V==="move"&&(S.push(Z),v.get(Z)!=F)){Z.emitMove(F);continue}if(V==="wheel"&&g.get(Z)!=F){Z.emitWheel(F);continue}C(V,F,Z)}if(b.length=0,d.intersectEveryFrame??!1)for(const[O,V]of v.entries())S.includes(O)||O.move(i,V);S.length=0}}}function YM(a){return a.button!=null}const Iz=2;class Fz{constructor(e){var i;this.xrDevice=e,this.combinedCameraPosition=new ce,this.isPointerLocked=!1,this.vec3=new ce,this.quat=new ma,this.quatB=new ma,this.quatInv=new ma,this.quatMouse=new ma,this.euler=new ps,this.keyState={ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},this.lastTime=0,this.preferredConnectedGazeMode="head-locked",this.gazeCommitHand="right",this.gazePointerId=null,this.gazeHeadsetDragActive=!1,this.gazeLastPointer={x:0,y:0},this.gazeForward=new ce(0,0,-1),this.gazeDirection=new ce,this.gazeQuaternion=new ma,this.isInProgrammaticMode=!1,this.interactionsEnabled=!0,this.scene=new iD,this.gazeMode=!((i=e.gaze)===null||i===void 0)&&i.connected?"head-locked":"off",this.camera=new Qi(50,window.innerWidth/window.innerHeight,.1,40),this.playerRig=new Tl,this.cameraRig=new Tl,this.scene.add(this.playerRig),this.playerRig.add(this.cameraRig),this.cameraRig.position.fromArray(e.position.vec3),this.cameraRig.quaternion.fromArray(e.quaternion.quat),this.cameraRig.add(this.camera),this.camera.position.x-=e.ipd/2;const s=new ja(new Rv(.25,.27,32),new wv({color:16777215,side:_r}));s.rotateX(-Math.PI/2),this.scene.add(s),this.renderer=new xO({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.transformHandles=new Map,["left","right"].forEach(l=>{const c=new cz;c.scale.setScalar(.1),c.position.fromArray(e.controllers[l].position.vec3),c.quaternion.fromArray(e.controllers[l].quaternion.quat),this.cameraRig.attach(c),c.userData={defaultPosition:c.position.toArray(),defaultQuaternion:c.quaternion.toArray()},c.userData.setMode=d=>{var h,p;(p=(h=c.userData).modeCleanup)===null||p===void 0||p.call(h),c.userData.modeCleanup=c.bind(d),c.userData.mode=d},c.userData.setMode("translate"),c.space="local",this.transformHandles.set(l,c),c.addEventListener("click",()=>{c.userData.mode==="translate"?c.userData.setMode("rotate"):c.userData.setMode("translate")})}),window.transformHandles=this.transformHandles,this.mouseMoveHandler=l=>{if(!this.isPointerLocked||this.isInProgrammaticMode)return;const c=l.movementX||l.mozMovementX||l.webkitMovementX||0,d=l.movementY||l.mozMovementY||l.webkitMovementY||0;this.playerRig.rotation.y-=c*.002,this.cameraRig.rotation.x-=d*.002,e.quaternion.copy(this.cameraRig.getWorldQuaternion(this.quatMouse))},this.cameraRig.getWorldPosition(this.combinedCameraPosition),this.headsetDefaultPosition=this.cameraRig.position.clone(),this.headsetDefaultQuaternion=this.cameraRig.quaternion.clone(),this.forwardHtmlEvents=Oz(this.renderer.domElement,()=>this.camera,this.scene).update,this.pointerLockChangeHandlerBound=this.pointerLockChangeHandler.bind(this),this.gazePointerDownHandlerBound=this.gazePointerDownHandler.bind(this),this.gazePointerMoveHandlerBound=this.gazePointerMoveHandler.bind(this),this.gazePointerUpHandlerBound=this.gazePointerUpHandler.bind(this),this.gazeWheelHandlerBound=this.gazeWheelHandler.bind(this),this.gazeContextMenuHandlerBound=this.gazeContextMenuHandler.bind(this),this.windowBlurHandlerBound=()=>{this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1},this.documentVisibilityHandlerBound=()=>{document.visibilityState!=="visible"&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1)},this.keyDownHandlerBound=this.keyDownHandler.bind(this),this.keyUpHandlerBound=this.keyUpHandler.bind(this),document.addEventListener("pointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.addEventListener("keydown",this.keyDownHandlerBound,!1),document.addEventListener("keyup",this.keyUpHandlerBound,!1),this.renderer.domElement.addEventListener("pointerdown",this.gazePointerDownHandlerBound),this.renderer.domElement.addEventListener("pointermove",this.gazePointerMoveHandlerBound),this.renderer.domElement.addEventListener("pointerup",this.gazePointerUpHandlerBound),this.renderer.domElement.addEventListener("pointercancel",this.gazePointerUpHandlerBound),this.renderer.domElement.addEventListener("wheel",this.gazeWheelHandlerBound,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",this.gazeContextMenuHandlerBound),window.addEventListener("blur",this.windowBlurHandlerBound),document.addEventListener("visibilitychange",this.documentVisibilityHandlerBound)}lockPointer(){this.isInProgrammaticMode||!this.interactionsEnabled||this.gazeMode==="cursor"||(this.renderer.domElement.requestPointerLock=this.renderer.domElement.requestPointerLock||this.renderer.domElement.mozRequestPointerLock||this.renderer.domElement.webkitRequestPointerLock,this.renderer.domElement.requestPointerLock())}pointerLockChangeHandler(){this.isPointerLocked=document.pointerLockElement===this.renderer.domElement||document.mozPointerLockElement===this.renderer.domElement||document.webkitPointerLockElement===this.renderer.domElement,this.isPointerLocked?document.addEventListener("mousemove",this.mouseMoveHandler,!1):document.removeEventListener("mousemove",this.mouseMoveHandler,!1)}get currentGazeMode(){return this.gazeMode}get currentGazeCommitHand(){return this.gazeCommitHand}applyGazeModePresentation(e){var i;this.gazeMode=e,e==="cursor"&&this.isPointerLocked&&((i=document.exitPointerLock)===null||i===void 0||i.call(document));const s=e==="cursor";this.renderer.domElement.style.cursor=s?"crosshair":"",this.renderer.domElement.style.touchAction=s?"none":"",this.setTransformHandleRoutingSuppressed(s)}setGazeMode(e){this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1;const i=this.xrDevice.gaze;if(!i){this.applyGazeModePresentation("off");return}e!=="off"&&(this.preferredConnectedGazeMode=e),i.connected=e!=="off",e==="head-locked"&&i.quaternion.set(0,0,0,1),this.applyGazeModePresentation(e)}setProgrammaticMode(e){const i=this.isInProgrammaticMode;if(this.isInProgrammaticMode=e,!i||e)return;const s=this.xrDevice.gaze,l=s?.connected?this.preferredConnectedGazeMode:"off";l!==this.gazeMode&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1,this.applyGazeModePresentation(l))}setGazeCommitHand(e){e!==this.gazeCommitHand&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1,this.gazeCommitHand=e)}onSessionEnd(){this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1}setTransformHandleRoutingSuppressed(e){this.transformHandles.forEach(i=>{var s,l;e&&!i.userData.gazeSuppressed?((l=(s=i.userData).modeCleanup)===null||l===void 0||l.call(s),i.userData.modeCleanup=void 0,i.userData.gazeSuppressed=!0):!e&&i.userData.gazeSuppressed&&(i.userData.gazeSuppressed=!1,i.userData.setMode(i.userData.mode))})}gazeInteractionEnabled(){var e;return this.gazeMode==="cursor"&&!!(!((e=this.xrDevice.gaze)===null||e===void 0)&&e.connected)&&this.xrDevice.visibilityState==="visible"&&this.interactionsEnabled&&!this.isInProgrammaticMode&&!!this.xrDevice.activeSession}updateGazeFromPointer(e,i){if(!this.gazeInteractionEnabled()||this.gazeCommitActive)return;const s=this.renderer.domElement.getBoundingClientRect(),l=ZR(e,i,s,this.xrDevice.stereoEnabled,this.xrDevice.fovy);this.gazeDirection.fromArray(l),this.gazeQuaternion.setFromUnitVectors(this.gazeForward,this.gazeDirection),this.xrDevice.gaze.quaternion.copy(this.gazeQuaternion)}beginGazeCommit(){if(this.gazeCommitActive||this.gazeCommitPendingRelease)return;const e=this.xrDevice.primaryInputMode,i=this.gazeCommitHand,s=e==="hand"?this.xrDevice.hands[i]:this.xrDevice.controllers[i];s?.connected&&(this.writeGazeCommitValue({mode:e,handedness:i},1,!1),this.gazeCommitActive={mode:e,handedness:i})}writeGazeCommitValue(e,i,s){if(e.mode==="hand"){const l=this.xrDevice.hands[e.handedness];s?l?.setPinchValueImmediate(i):l?.updatePinchValue(i)}else{const l=this.xrDevice.controllers[e.handedness];s?l?.setButtonValueImmediate("trigger",i):l?.updateButtonValue("trigger",i)}}releaseGazeCommit(e){var i,s,l,c,d;const h=this.gazeCommitActive,p=(i=this.gazeCommitPendingRelease)===null||i===void 0?void 0:i.source,m=this.gazePointerId;if(this.gazePointerId=null,m!==null&&(!((l=(s=this.renderer.domElement).hasPointerCapture)===null||l===void 0)&&l.call(s,m))&&((d=(c=this.renderer.domElement).releasePointerCapture)===null||d===void 0||d.call(c,m)),e){this.gazeCommitPendingRelease=void 0,p&&this.writeGazeCommitValue(p,0,!0),h&&h!==p&&this.writeGazeCommitValue(h,0,!0),this.gazeCommitActive=void 0;return}h&&(this.gazeCommitPendingRelease={source:h,queuedForFrame:!1},this.gazeCommitActive=void 0)}schedulePendingGazeRelease(){const e=this.gazeCommitPendingRelease;e&&queueMicrotask(()=>{this.gazeCommitPendingRelease===e&&(e.queuedForFrame?this.gazeCommitPendingRelease=void 0:(this.writeGazeCommitValue(e.source,0,!1),e.queuedForFrame=!0))})}gazeCommitSourceIsActive(){const e=this.gazeCommitActive;if(!e||this.xrDevice.primaryInputMode!==e.mode)return!1;const i=e.mode==="hand"?this.xrDevice.hands[e.handedness]:this.xrDevice.controllers[e.handedness];return!!i?.connected}moveCommitInput(e,i){const s=this.gazeCommitActive;if(!s)return;const l=this.transformHandles.get(s.handedness);if(!l)return;const c=this.renderer.domElement.getBoundingClientRect(),d=Math.max(.25,Math.abs(l.position.z)),h=2*Math.tan(this.xrDevice.fovy/2)*d/Math.max(c.height,1);l.position.x+=e*h,l.position.y-=i*h,this.syncDeviceTransforms()}moveCommitInputDepth(e){const i=this.gazeCommitActive;if(!i)return;const s=this.transformHandles.get(i.handedness);if(!s)return;const l=this.renderer.domElement.getBoundingClientRect(),c=Math.max(.25,Math.abs(s.position.z)),d=2*Math.tan(this.xrDevice.fovy/2)*c/Math.max(l.height,1);s.position.z-=e*d*.5,this.syncDeviceTransforms()}gazePointerDownHandler(e){var i,s;this.gazePointerId===null&&this.gazeInteractionEnabled()&&(e.button!==0&&e.button!==2||(e.preventDefault(),e.stopPropagation(),this.gazePointerId=e.pointerId,this.gazeLastPointer={x:e.clientX,y:e.clientY},(s=(i=this.renderer.domElement).setPointerCapture)===null||s===void 0||s.call(i,e.pointerId),e.button===0?(this.updateGazeFromPointer(e.clientX,e.clientY),this.beginGazeCommit()):this.gazeHeadsetDragActive=!0))}gazePointerMoveHandler(e){if(this.gazePointerId!==null&&this.gazePointerId!==e.pointerId)return;const i=e.clientX-this.gazeLastPointer.x,s=e.clientY-this.gazeLastPointer.y;if(this.gazeLastPointer={x:e.clientX,y:e.clientY},!!this.gazeInteractionEnabled()){if(this.gazeCommitActive){e.preventDefault(),this.moveCommitInput(i,s);return}if(this.gazeHeadsetDragActive){e.preventDefault(),this.playerRig.rotation.y-=i*.002,this.cameraRig.rotation.x-=s*.002,this.xrDevice.quaternion.copy(this.cameraRig.getWorldQuaternion(this.quatMouse));return}this.updateGazeFromPointer(e.clientX,e.clientY)}}gazePointerUpHandler(e){var i,s,l,c;this.gazePointerId===e.pointerId&&(this.gazeCommitActive&&this.releaseGazeCommit(!1),this.gazeHeadsetDragActive=!1,this.gazePointerId=null,!((s=(i=this.renderer.domElement).hasPointerCapture)===null||s===void 0)&&s.call(i,e.pointerId)&&((c=(l=this.renderer.domElement).releasePointerCapture)===null||c===void 0||c.call(l,e.pointerId)))}gazeWheelHandler(e){!this.gazeInteractionEnabled()||!this.gazeCommitActive||(e.preventDefault(),e.stopPropagation(),this.moveCommitInputDepth(e.deltaY))}gazeContextMenuHandler(e){this.gazeMode==="cursor"&&e.preventDefault()}resetInputTransform(e){const i=this.transformHandles.get(e);i&&(i.position.fromArray(i.userData.defaultPosition),i.quaternion.fromArray(i.userData.defaultQuaternion),this.syncDeviceTransforms())}keyDownHandler(e){const{keyState:i}=this;if(e.code in i&&(i[e.code]=!0),!this.isInProgrammaticMode){if(this.gazeMode==="cursor"&&e.code==="Space"){if(e.composedPath().some(l=>{if(typeof l!="object"||l===null)return!1;const c=l;return c.isContentEditable===!0||typeof c.tagName=="string"&&["A","BUTTON","INPUT","SELECT","TEXTAREA"].includes(c.tagName)}))return;e.preventDefault(),this.resetInputTransform(this.gazeCommitHand);return}i.ShiftLeft&&i.ArrowUp&&(this.cameraRig.position.y+=.05),i.ShiftLeft&&i.ArrowDown&&(this.cameraRig.position.y-=.05)}}keyUpHandler(e){const{keyState:i}=this;e.code in i&&(i[e.code]=!1)}movePlayerRig(e){const{playerRig:i,keyState:s,vec3:l}=this;l.set((s.KeyD?1:0)-(s.KeyA?1:0),0,(s.KeyS?1:0)-(s.KeyW?1:0)),l.lengthSq()>0&&s.ShiftLeft&&(l.normalize().multiplyScalar(Iz*e).applyQuaternion(i.quaternion),i.position.add(l))}resetDeviceTransforms(){const{playerRig:e,cameraRig:i,transformHandles:s}=this;i.position.copy(this.headsetDefaultPosition),i.quaternion.copy(this.headsetDefaultQuaternion),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),s.forEach(l=>{l.position.fromArray(l.userData.defaultPosition),l.quaternion.fromArray(l.userData.defaultQuaternion)})}captureDefaultPose(){const e=this.cameraRig.getWorldPosition(this.vec3).toArray(),i=this.cameraRig.getWorldQuaternion(this.quat).toArray(),s={},l={};return this.transformHandles.forEach((c,d)=>{const h=c.getWorldPosition(this.vec3).toArray(),p=c.getWorldQuaternion(this.quat).toArray(),m={position:h,quaternion:p};s[d]=m,l[d]={position:[...h],quaternion:[...p]}}),{headset:{position:e,quaternion:i},controllers:s,hands:l}}applyDefaultPose(e){const{headset:i,controllers:s,hands:l}=e;this.headsetDefaultPosition.fromArray(i.position),this.headsetDefaultQuaternion.fromArray(i.quaternion),this.quatInv.copy(this.headsetDefaultQuaternion).invert(),this.transformHandles.forEach((c,d)=>{var h;const p=(h=s?.[d])!==null&&h!==void 0?h:l?.[d];p&&(this.vec3.fromArray(p.position).sub(this.headsetDefaultPosition).applyQuaternion(this.quatInv),this.quat.fromArray(p.quaternion).premultiply(this.quatInv),c.userData.defaultPosition=this.vec3.toArray(),c.userData.defaultQuaternion=this.quat.toArray())}),this.resetDeviceTransforms(),this.combinedCameraPosition.copy(this.headsetDefaultPosition)}syncDeviceTransforms(){const{xrDevice:e,cameraRig:i,transformHandles:s}=this;e.position.copy(i.getWorldPosition(this.vec3)),e.quaternion.copy(i.getWorldQuaternion(this.quat)),s.forEach((l,c)=>{const d=e.primaryInputMode==="controller"?e.controllers[c]:e.hands[c];d.position.copy(l.getWorldPosition(this.vec3)),d.quaternion.copy(l.getWorldQuaternion(this.quat))})}syncFromDevice(){const{xrDevice:e,playerRig:i,cameraRig:s,transformHandles:l}=this;this.syncGazeModeFromDevice();const c=e.position,d=e.quaternion;this.combinedCameraPosition.set(c.x,c.y,c.z),this.quatB.set(d.x,d.y,d.z,d.w),this.euler.setFromQuaternion(this.quatB,"YXZ"),i.position.set(c.x,0,c.z),i.rotation.set(0,this.euler.y,0),s.position.set(0,c.y,0),this.quat.setFromEuler(this.euler.set(0,this.euler.y,0,"YXZ")),s.quaternion.multiplyQuaternions(this.quat.invert(),this.quatB),i.updateMatrixWorld(!0),s.getWorldQuaternion(this.quatInv).invert(),l.forEach((h,p)=>{const m=e.primaryInputMode==="controller"?e.controllers[p]:e.hands[p],_=this.vec3.set(m.position.x,m.position.y,m.position.z);s.worldToLocal(_),h.position.copy(_),this.quatB.set(m.quaternion.x,m.quaternion.y,m.quaternion.z,m.quaternion.w),this.quatB.premultiply(this.quatInv),h.quaternion.copy(this.quatB)})}syncGazeModeFromDevice(){var e;const i=!((e=this.xrDevice.gaze)===null||e===void 0)&&e.connected?"head-locked":"off";i!==this.gazeMode&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1,this.applyGazeModePresentation(i))}setInteractionsEnabled(e){this.interactionsEnabled=e,e||(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1),!e&&this.isPointerLocked&&document.exitPointerLock()}renderScene(e){this.gazeCommitActive&&(!this.gazeInteractionEnabled()||!this.gazeCommitSourceIsActive())&&(this.releaseGazeCommit(!0),this.gazeHeadsetDragActive=!1),this.schedulePendingGazeRelease();const i=this.xrDevice.fovy/Math.PI*180;let s=!1;this.camera.fov!==i&&(this.camera.fov=i,s=!0);const l=this.xrDevice.canvasDimensions;if(l){const d=this.renderer.domElement;(d.width!==l.width||d.height!==l.height)&&(this.camera.aspect=l.width/l.height,this.renderer.setSize(l.width,l.height),s=!0)}s&&this.camera.updateProjectionMatrix(),this.isInProgrammaticMode||(this.isPointerLocked?this.cameraRig.getWorldPosition(this.combinedCameraPosition):(this.cameraRig.position.y=this.combinedCameraPosition.y,this.playerRig.position.x=this.combinedCameraPosition.x,this.playerRig.position.z=this.combinedCameraPosition.z)),this.gazeMode!=="cursor"&&this.forwardHtmlEvents(),this.transformHandles.forEach((d,h)=>{const p=this.xrDevice.primaryInputMode==="controller"?this.xrDevice.controllers[h]:this.xrDevice.hands[h],m=!!p?.connected;d.visible=m&&!this.isPointerLocked&&!this.isInProgrammaticMode&&this.gazeMode!=="cursor",m&&d.update(e,this.camera)});const c=Math.min((e-this.lastTime)/1e3,.1);this.isInProgrammaticMode||(this.movePlayerRig(c),this.syncDeviceTransforms()),this.renderer.render(this.scene,this.camera),this.lastTime=e}get domElement(){return this.renderer.domElement}dispose(){this.releaseGazeCommit(!0),this.setTransformHandleRoutingSuppressed(!1),this.renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandlerBound,!1),document.removeEventListener("mousemove",this.mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandlerBound,!1),document.removeEventListener("keyup",this.keyUpHandlerBound,!1),this.renderer.domElement.removeEventListener("pointerdown",this.gazePointerDownHandlerBound),this.renderer.domElement.removeEventListener("pointermove",this.gazePointerMoveHandlerBound),this.renderer.domElement.removeEventListener("pointerup",this.gazePointerUpHandlerBound),this.renderer.domElement.removeEventListener("pointercancel",this.gazePointerUpHandlerBound),this.renderer.domElement.removeEventListener("wheel",this.gazeWheelHandlerBound),this.renderer.domElement.removeEventListener("contextmenu",this.gazeContextMenuHandlerBound),window.removeEventListener("blur",this.windowBlurHandlerBound),document.removeEventListener("visibilitychange",this.documentVisibilityHandlerBound)}}const Bz="2.6.0";var eg={exports:{}},nu={},tg={exports:{}},ng={};var ZM;function Hz(){return ZM||(ZM=1,(function(a){function e(G,X){var K=G.length;G.push(X);e:for(;0<K;){var he=K-1>>>1,me=G[he];if(0<l(me,X))G[he]=X,G[K]=me,K=he;else break e}}function i(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var X=G[0],K=G.pop();if(K!==X){G[0]=K;e:for(var he=0,me=G.length,be=me>>>1;he<be;){var Le=2*(he+1)-1,lt=G[Le],H=Le+1,ue=G[H];if(0>l(lt,K))H<me&&0>l(ue,lt)?(G[he]=ue,G[H]=K,he=H):(G[he]=lt,G[Le]=K,he=Le);else if(H<me&&0>l(ue,K))G[he]=ue,G[H]=K,he=H;else break e}}return X}function l(G,X){var K=G.sortIndex-X.sortIndex;return K!==0?K:G.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,g=null,v=3,S=!1,b=!1,C=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(G){for(var X=i(m);X!==null;){if(X.callback===null)s(m);else if(X.startTime<=G)s(m),X.sortIndex=X.expirationTime,e(p,X);else break;X=i(m)}}function k(G){if(C=!1,N(G),!b)if(i(p)!==null)b=!0,L||(L=!0,Z());else{var X=i(m);X!==null&&q(k,X.startTime-G)}}var L=!1,P=-1,E=5,O=-1;function V(){return y?!0:!(a.unstable_now()-O<E)}function F(){if(y=!1,L){var G=a.unstable_now();O=G;var X=!0;try{e:{b=!1,C&&(C=!1,R(P),P=-1),S=!0;var K=v;try{t:{for(N(G),g=i(p);g!==null&&!(g.expirationTime>G&&V());){var he=g.callback;if(typeof he=="function"){g.callback=null,v=g.priorityLevel;var me=he(g.expirationTime<=G);if(G=a.unstable_now(),typeof me=="function"){g.callback=me,N(G),X=!0;break t}g===i(p)&&s(p),N(G)}else s(p);g=i(p)}if(g!==null)X=!0;else{var be=i(m);be!==null&&q(k,be.startTime-G),X=!1}}break e}finally{g=null,v=K,S=!1}X=void 0}}finally{X?Z():L=!1}}}var Z;if(typeof I=="function")Z=function(){I(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,de=te.port2;te.port1.onmessage=F,Z=function(){de.postMessage(null)}}else Z=function(){M(F,0)};function q(G,X){P=M(function(){G(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(G){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var K=v;v=X;try{return G()}finally{v=K}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var K=v;v=G;try{return X()}finally{v=K}},a.unstable_scheduleCallback=function(G,X,K){var he=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?he+K:he):K=he,G){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=K+me,G={id:_++,callback:X,priorityLevel:G,startTime:K,expirationTime:me,sortIndex:-1},K>he?(G.sortIndex=K,e(m,G),i(p)===null&&G===i(m)&&(C?(R(P),P=-1):C=!0,q(k,K-he))):(G.sortIndex=me,e(p,G),b||S||(b=!0,L||(L=!0,Z()))),G},a.unstable_shouldYield=V,a.unstable_wrapCallback=function(G){var X=v;return function(){var K=v;v=X;try{return G.apply(this,arguments)}finally{v=K}}}})(ng)),ng}var QM;function Gz(){return QM||(QM=1,tg.exports=Hz()),tg.exports}var ig={exports:{}},Zn={};var KM;function Vz(){if(KM)return Zn;KM=1;var a=lv();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,g,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===d?d:""+S,children:_,containerInfo:g,implementation:v}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Zn.browser=function(_){return{$$typeof:c,_reason:_}},Zn.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(_,g,null,v)},Zn.flushSync=function(_){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=g,s.p=v,s.d.f()}},Zn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},Zn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Zn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:b,fetchPriority:C}):v==="script"&&s.d.X(_,{crossOrigin:S,integrity:b,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Zn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},Zn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin);s.d.L(_,v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Zn.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},Zn.requestFormReset=function(_){s.d.r(_)},Zn.unstable_batchedUpdates=function(_,g){return _(g)},Zn.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},Zn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Zn.version="19.3.1",Zn}var $M;function kz(){if($M)return ig.exports;$M=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ig.exports=Vz(),ig.exports}var JM;function Xz(){if(JM)return nu;JM=1;var a=Gz(),e=lv(),i=kz();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,r=n;r&&!r.alternate;)n=r,(n.flags&4098)!==0&&(t=n.return),r=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=f;else{for(var x=!1,A=u.child;A;){if(A===r){x=!0,r=u,o=f;break}if(A===o){x=!0,o=u,r=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===r){x=!0,r=f,o=u;break}if(A===o){x=!0,o=f,r=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,r,o,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&r(t,o,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,r,o,u,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],r=v(t);return r===null||C(n,t,r.child,{foundSelf:!1}),n}function C(t,n,r,o){for(;r!==null;){if(r===n)o.foundSelf=!0;else if(r.tag===5||r.tag===27||r.tag===6){if(o.foundSelf)return t[1]=r,!0;t[0]=r}else if((r.tag!==22||r.memoizedState===null)&&C(t,n,r.child,o))return!0;r=r.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var M=null,R=null;function I(t,n,r){return t===r?!0:t===n?(M=t,!0):!1}function N(t,n,r){return t===r?(R=t,!1):t===n?(R!==null&&(M=t),!0):!1}function k(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function L(t,n,r){for(var o=0,u=t;u;u=r(u))o++;u=0;for(var f=n;f;f=r(f))u++;for(;0<o-u;)t=r(t),o--;for(;0<u-o;)n=r(n),u--;for(;o--;){if(t===n||n!==null&&t===n.alternate)return t;t=r(t),n=r(n)}return null}var P=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),de=Symbol.for("react.consumer"),q=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Le=Symbol.for("react.legacy_hidden"),lt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),ue=Symbol.for("react.recoverable"),ee=Symbol.iterator;function pe(t){return t===null||typeof t!="object"?null:(t=ee&&t[ee]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function De(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case te:return"Profiler";case Z:return"StrictMode";case X:return"Suspense";case K:return"SuspenseList";case be:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case q:return t.displayName||"Context";case de:return(t._context.displayName||"Context")+".Consumer";case G:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return n=t.displayName||null,n!==null?n:De(t.type)||"Memo";case me:n=t._payload,t=t._init;try{return De(t(n))}catch{}}return null}var we=Array.isArray,Me=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ke=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},Ot=[],Ft=-1;function ft(t){return{current:t}}function Dt(t){0>Ft||(t.current=Ot[Ft],Ot[Ft]=null,Ft--)}function ct(t,n){Ft++,Ot[Ft]=t.current,t.current=n}var ln=ft(null),z=ft(null),pt=ft(null),Qe=ft(null);function ut(t,n){switch(ct(pt,n),ct(z,t),ct(ln,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qy(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qy(n),t=Ky(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Dt(ln),ct(ln,t)}function Ee(){Dt(ln),Dt(z),Dt(pt)}function Bt(t){var n=t.memoizedState;n!==null&&(qo._currentValue=n.memoizedState,ct(Qe,t)),n=ln.current;var r=Ky(n,t.type);n!==r&&(ct(z,t),ct(ln,r))}function D(t){z.current===t&&(Dt(ln),Dt(z)),Qe.current===t&&(Dt(Qe),qo._currentValue=ht)}var T,ne;function ve(t){if(T===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",ne=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+t+ne}var Te=!1;function Ne(t,n){if(!t||Te)return"";Te=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(Ie){var Q=Ie}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(Ie){Q=Ie}xe=!1;try{var re=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xe=!0,new t}finally{xe&&(re!==void 0?Object.defineProperty(t.prototype,"props",re):delete t.prototype.props)}}}else{try{throw Error()}catch(Ie){Q=Ie}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(Ie){if(Ie&&Q&&typeof Ie.stack=="string")return[Ie.stack,Q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var B=x.split(`
`),J=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var le=`
`+B[o].replace(" at new "," at ");return t.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",t.displayName)),le}while(1<=o&&0<=u);break}}}finally{Te=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?ve(r):""}function ze(t,n){switch(t.tag){case 26:case 27:case 5:return ve(t.type);case 16:return ve("Lazy");case 13:return t.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return Ne(t.type,!1);case 11:return Ne(t.type.render,!1);case 1:return Ne(t.type,!0);case 31:return ve("Activity");case 30:return ve("ViewTransition");default:return""}}function ge(t){try{var n="",r=null;do n+=ze(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Se=Object.prototype.hasOwnProperty,He=a.unstable_scheduleCallback,qe=a.unstable_cancelCallback,Pe=a.unstable_shouldYield,Ue=a.unstable_requestPaint,rt=a.unstable_now,yt=a.unstable_getCurrentPriorityLevel,Ht=a.unstable_ImmediatePriority,W=a.unstable_UserBlockingPriority,Re=a.unstable_NormalPriority,ye=a.unstable_LowPriority,Xe=a.unstable_IdlePriority,Oe=a.log,Ae=a.unstable_setDisableYieldValue,Je=null,ot=null;function Zt(t){if(typeof Oe=="function"&&Ae(t),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Je,t)}catch{}}var Mt=Math.clz32?Math.clz32:Vl,ea=Math.log,zi=Math.LN2;function Vl(t){return t>>>=0,t===0?32:31-(ea(t)/zi|0)|0}var oo=256,ms=262144,gs=4194304;function ni(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function br(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=ni(o):(x&=A,x!==0?u=ni(x):r||(r=A&~t,r!==0&&(u=ni(r))))):(A=o&~f,A!==0?u=ni(A):x!==0?u=ni(x):r||(r=o&~t,r!==0&&(u=ni(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function Er(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function kl(t,n){(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var o=31-Mt(r),u=1<<o;n|=t[o],r&=~u}return n}function lo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xl(){var t=gs;return gs<<=1,(gs&62914560)===0&&(gs=4194304),t}function Tr(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Ar(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mu(t,n,r,o,u,f){var x=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(r=x&~r;0<r;){var le=31-Mt(r),xe=1<<le;A[le]=0,B[le]=-1;var Q=J[le];if(Q!==null)for(J[le]=null,le=0;le<Q.length;le++){var re=Q[le];re!==null&&(re.lane&=-536870913)}r&=~xe}o!==0&&bu(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function bu(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Mt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Eu(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Mt(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function Tu(t,n){var r=n&-n;return r=(r&42)!==0?1:jl(r),(r&(t.suspendedLanes|n))!==0?0:r}function jl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ql(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Au(){var t=ke.p;return t!==0?t:(t=window.event,t===void 0?32:PS(t.type))}function wu(t,n){var r=ke.p;try{return ke.p=t,n()}finally{ke.p=r}}var w=Math.random().toString(36).slice(2),Y="__reactFiber$"+w,se="__reactProps$"+w,ae="__reactContainer$"+w,oe="__reactEvents$"+w,Ge="__reactListeners$"+w,Ye="__reactHandles$"+w,Be="__reactResources$"+w,$e="__reactMarker$"+w,nt="__reactLoad$"+w;function mt(t){delete t[Y],delete t[se],delete t[Ge],delete t[Ye]}function gt(t){var n;if(n=t[Y])return n;for(var r=t.parentNode;r;){if(n=r[ae]||r[Y]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=pS(t);t!==null;){if(r=t[Y])return r;t=pS(t)}return n}t=r,r=t.parentNode}return null}function tt(t){if(t=t[Y]||t[ae]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function an(t){var n=t[Be];return n||(n=t[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function At(t){t[$e]=!0}function Qt(t){t[nt]=void 0}var Nn=new Set,We={};function yn(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(We[t]=n,t=0;t<n.length;t++)Nn.add(n[t])}var di=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mi={},ta={};function wr(t){return Se.call(ta,t)?!0:Se.call(Mi,t)?!1:di.test(t)?ta[t]=!0:(Mi[t]=!0,!1)}var it=!1;function hn(){var t=it;return it=!1,t}function bi(t,n,r){if(wr(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,r)}}function qt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,r)}}function Fn(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,o)}}function En(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wl(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gT(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function gh(t){if(!t._valueTracker){var n=Wl(t)?"checked":"value";t._valueTracker=gT(t,n,""+t[n])}}function Fv(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Wl(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}var vT=/[\n"\\]/g;function Ii(t){return t.replace(vT,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vh(t,n,r,o,u,f,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+En(n)):t.value!==""+En(n)&&(t.value=""+En(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?x==="number"&&t.value==n?_h(t,En(t.value)):_h(t,En(n)):r!=null?_h(t,En(r)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+En(A):t.removeAttribute("name")}function Bv(t,n,r,o,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){gh(t);return}r=r!=null?""+En(r):"",n=n!=null?""+En(n):r,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),gh(t)}function _h(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function co(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+En(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hv(t,n,r){if(n!=null&&(n=""+En(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+En(r):""}function Gv(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(we(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=En(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),gh(t)}function uo(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var _T=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vv(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||_T.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function kv(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",it=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&(Vv(t,u,o),it=!0)}else for(var f in n)n.hasOwnProperty(f)&&Vv(t,f,n[f])}function xh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ru(t){return yT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ya(){}var yh=null;function Sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fo=null,ho=null;function Xv(t){var n=tt(t);if(n&&(t=n.stateNode)){var r=t[se]||null;e:switch(t=n.stateNode,n.type){case"input":if(vh(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ii(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[se]||null;if(!u)throw Error(s(90));vh(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Fv(o)}break e;case"textarea":Hv(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&co(t,!!r.multiple,n,!1)}}}var Mh=!1;function jv(t,n,r){if(Mh)return t(n,r);Mh=!0;try{var o=t(n);return o}finally{if(Mh=!1,(fo!==null||ho!==null)&&(Cf(),fo&&(n=fo,t=ho,ho=fo=null,Xv(n),t)))for(n=0;n<t.length;n++)Xv(t[n])}}function Yl(t,n){var r=t.stateNode;if(r===null)return null;var o=r[se]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var Ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=!1;if(Ya)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){bh=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{bh=!1}var Rr=null,Eh=null,Cu=null;function qv(){if(Cu)return Cu;var t,n=Eh,r=n.length,o,u="value"in Rr?Rr.value:Rr.textContent,f=u.length;for(t=0;t<r&&n[t]===u[t];t++);var x=r-t;for(o=1;o<=x&&n[r-o]===u[f-o];o++);return Cu=u.slice(t,1<o?1-o:void 0)}function Du(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function Wv(){return!1}function ii(t){function n(r,o,u,f,x){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Nu:Wv,this.isPropagationStopped=Wv,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),n}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=ii(Cr),Ql=P({},Cr,{view:0,detail:0}),ST=ii(Ql),Th,Ah,Kl,Lu=P({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kl&&(Kl&&t.type==="mousemove"?(Th=t.screenX-Kl.screenX,Ah=t.screenY-Kl.screenY):Ah=Th=0,Kl=t),Th)},movementY:function(t){return"movementY"in t?t.movementY:Ah}}),Yv=ii(Lu),MT=P({},Lu,{dataTransfer:0}),bT=ii(MT),ET=P({},Ql,{relatedTarget:0}),wh=ii(ET),TT=P({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),AT=ii(TT),wT=P({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RT=ii(wT),CT=P({},Cr,{data:0}),Zv=ii(CT),DT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LT(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=UT[t])?!!n[t]:!1}function Rh(){return LT}var PT=P({},Ql,{key:function(t){if(t.key){var n=DT[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(t){return t.type==="keypress"?Du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OT=ii(PT),zT=P({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=ii(zT),IT=P({},Cr,{submitter:0}),FT=ii(IT),BT=P({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),HT=ii(BT),GT=P({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),VT=ii(GT),kT=P({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XT=ii(kT),jT=P({},Cr,{newState:0,oldState:0,source:0}),qT=ii(jT),WT=[9,13,27,32],Ch=Ya&&"CompositionEvent"in window,$l=null;Ya&&"documentMode"in document&&($l=document.documentMode);var YT=Ya&&"TextEvent"in window&&!$l,Kv=Ya&&(!Ch||$l&&8<$l&&11>=$l),$v=" ",Jv=!1;function e_(t,n){switch(t){case"keyup":return WT.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var po=!1;function ZT(t,n){switch(t){case"compositionend":return t_(n);case"keypress":return n.which!==32?null:(Jv=!0,$v);case"textInput":return t=n.data,t===$v&&Jv?null:t;default:return null}}function QT(t,n){if(po)return t==="compositionend"||!Ch&&e_(t,n)?(t=qv(),Cu=Eh=Rr=null,po=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kv&&n.locale!=="ko"?null:n.data;default:return null}}var KT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n_(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!KT[t.type]:n==="textarea"}function i_(t,n,r,o){fo?ho?ho.push(o):ho=[o]:fo=o,n=Of(n,"onChange"),0<n.length&&(r=new Uu("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Jl=null,ec=null;function $T(t){Xy(t,0)}function Pu(t){var n=kt(t);if(Fv(n))return t}function a_(t,n){if(t==="change")return n}var r_=!1;if(Ya){var Dh;if(Ya){var Nh="oninput"in document;if(!Nh){var s_=document.createElement("div");s_.setAttribute("oninput","return;"),Nh=typeof s_.oninput=="function"}Dh=Nh}else Dh=!1;r_=Dh&&(!document.documentMode||9<document.documentMode)}function o_(){Jl&&(Jl.detachEvent("onpropertychange",l_),ec=Jl=null)}function l_(t){if(t.propertyName==="value"&&Pu(ec)){var n=[];i_(n,ec,t,Sh(t)),jv($T,n)}}function JT(t,n,r){t==="focusin"?(o_(),Jl=n,ec=r,Jl.attachEvent("onpropertychange",l_)):t==="focusout"&&o_()}function eA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(ec)}function tA(t,n){if(t==="click")return Pu(n)}function nA(t,n){if(t==="input"||t==="change")return Pu(n)}function iA(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ei=typeof Object.is=="function"?Object.is:iA;function tc(t,n){if(Ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Se.call(n,u)||!Ei(t[u],n[u]))return!1}return!0}function Uh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function c_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function u_(t,n){var r=c_(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=c_(r)}}function f_(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?f_(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function d_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Uh(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Uh(t.document)}return n}function Lh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aA=Ya&&"documentMode"in document&&11>=document.documentMode,mo=null,Ph=null,nc=null,Oh=!1;function h_(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Oh||mo==null||mo!==Uh(o)||(o=mo,"selectionStart"in o&&Lh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),nc&&tc(nc,o)||(nc=o,o=Of(Ph,"onSelect"),0<o.length&&(n=new Uu("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=mo)))}function vs(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var go={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},zh={},p_={};Ya&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function _s(t){if(zh[t])return zh[t];if(!go[t])return t;var n=go[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in p_)return zh[t]=n[r];return t}var m_=_s("animationend"),g_=_s("animationiteration"),v_=_s("animationstart"),rA=_s("transitionrun"),sA=_s("transitionstart"),oA=_s("transitioncancel"),__=_s("transitionend"),x_=new Map,Ih="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ih.push("scrollEnd");function na(t,n){x_.set(t,n),yn(n,[t])}var lA=0;function Za(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=sa.identifierPrefix;var r=lA++;return t="_"+t+"t_"+r.toString(32)+"_",n.autoName=t}function y_(t){if(t==null||typeof t=="string")return t;var n=null,r=zo;if(r!==null)for(var o=0;o<r.length;o++){var u=t[r[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function Qa(t,n){return t=y_(t),n=y_(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Ou=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Fi=[],vo=0,Fh=0;function zu(){for(var t=vo,n=Fh=vo=0;n<t;){var r=Fi[n];Fi[n++]=null;var o=Fi[n];Fi[n++]=null;var u=Fi[n];Fi[n++]=null;var f=Fi[n];if(Fi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&S_(r,u,f)}}function Iu(t,n,r,o){Fi[vo++]=t,Fi[vo++]=n,Fi[vo++]=r,Fi[vo++]=o,Fh|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Bh(t,n,r,o){return Iu(t,n,r,o),Fu(t)}function xs(t,n){return Iu(t,null,null,n),Fu(t)}function S_(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,f=t.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Mt(r),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),f):null}function Fu(t){if(50<Ec)throw Ec=0,Rf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _o={};function cA(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,n,r,o){return new cA(t,n,r,o)}function Hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ka(t,n){var r=t.alternate;return r===null?(r=hi(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&1206910976,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function M_(t,n){t.flags&=1206910978;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Bu(t,n,r,o,u,f){var x=0;if(o=t,typeof o=="function")Hh(o)&&(x=1);else if(typeof o=="string")x=Iw(t,r,ln.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case be:return t=hi(31,r,n,u),t.elementType=be,t.lanes=f,t;case F:return ys(r.children,u,f,n);case Z:x=8,u|=24;break;case te:return t=hi(12,r,n,u|2),t.elementType=te,t.lanes=f,t;case X:return t=hi(13,r,n,u),t.elementType=X,t.lanes=f,t;case K:return t=hi(19,r,n,u),t.elementType=K,t.lanes=f,t;case Le:case H:return t=u|32,t=hi(30,r,n,t),t.elementType=H,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case q:x=10;break e;case de:x=9;break e;case G:x=11;break e;case he:x=14;break e;case me:x=16,o=null;break e}x=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=hi(x,r,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ys(t,n,r,o){return t=hi(7,t,o,n),t.lanes=r,t}function Gh(t,n,r){return t=hi(6,t,null,n),t.lanes=r,t}function b_(t){var n=hi(18,null,null,0);return n.stateNode=t,n}function Vh(t,n,r){return n=hi(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var E_=new WeakMap;function Bi(t,n){if(typeof t=="object"&&t!==null){var r=E_.get(t);return r!==void 0?r:(n={value:t,source:n,stack:ge(n)},E_.set(t,n),n)}return{value:t,source:n,stack:ge(n)}}var xo=[],yo=0,Hu=null,ic=0,Hi=[],Gi=0,Dr=null,Sa=1,Ma="";function $a(t,n){xo[yo++]=ic,xo[yo++]=Hu,Hu=t,ic=n}function T_(t,n,r){Hi[Gi++]=Sa,Hi[Gi++]=Ma,Hi[Gi++]=Dr,Dr=t;var o=Sa;t=Ma;var u=32-Mt(o)-1;o&=~(1<<u),r+=1;var f=32-Mt(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Sa=1<<32-Mt(n)+u|r<<u|o,Ma=f+t}else Sa=1<<f|r<<u|o,Ma=t}function Gu(t){t.return!==null&&($a(t,1),T_(t,1,0))}function kh(t){for(;t===Hu;)Hu=xo[--yo],xo[yo]=null,ic=xo[--yo],xo[yo]=null;for(;t===Dr;)Dr=Hi[--Gi],Hi[Gi]=null,Ma=Hi[--Gi],Hi[Gi]=null,Sa=Hi[--Gi],Hi[Gi]=null}function A_(t,n){Hi[Gi++]=Sa,Hi[Gi++]=Ma,Hi[Gi++]=Dr,Sa=n.id,Ma=n.overflow,Dr=t}var Bn=null,un=null,Nt=!1,Nr=null,Vi=!1,Xh=Error(s(519));function Ur(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ac(Bi(n,t)),Xh}function w_(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[Y]=t,n[se]=o,r){case"dialog":Pt("cancel",n),Pt("close",n);break;case"iframe":case"object":case"embed":Pt("load",n);break;case"video":case"audio":for(r=0;r<Ac.length;r++)Pt(Ac[r],n);break;case"source":Pt("error",n);break;case"img":case"image":case"link":Pt("error",n),Pt("load",n);break;case"details":Pt("toggle",n);break;case"input":Pt("invalid",n),Bv(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pt("invalid",n);break;case"textarea":Pt("invalid",n),Gv(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Yy(n.textContent,r)?(o.popover!=null&&(Pt("beforetoggle",n),Pt("toggle",n)),o.onScroll!=null&&Pt("scroll",n),o.onScrollEnd!=null&&Pt("scrollend",n),o.onClick!=null&&(n.onclick=ya),n=!0):n=!1,n||Ur(t,!0)}function Vu(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Bn=Bn.return}}function So(t){if(t!==Bn)return!1;if(!Nt)return Vu(t),Nt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||ym(t.type,t.memoizedProps)),r=!r),r&&un&&Ur(t),Vu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));un=hS(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));un=hS(t)}else n===27?(n=un,Yr(t.type)?(t=Cm,Cm=null,un=t):un=n):un=Bn?Xi(t.stateNode.nextSibling):null;return!0}function Ss(){un=Bn=null,Nt=!1}function jh(){var t=Nr;return t!==null&&(gi===null?gi=t:gi.push.apply(gi,t),Nr=null),t}function ac(t){Nr===null?Nr=[t]:Nr.push(t)}var qh=ft(null),Ms=null,Ja=null;function Lr(t,n,r){ct(qh,n._currentValue),n._currentValue=r}function er(t){t._currentValue=qh.current,Dt(qh)}function ku(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Wh(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=r,A=f.alternate,A!==null&&(A.lanes|=r),ku(f.return,r,t),o||(x=null);break e}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=r,f=x.alternate,f!==null&&(f.lanes|=r),ku(x,r,t),x=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=r,x=u.alternate,x!==null&&(x.lanes|=r),ku(u.return,r,t),x=u.child,x=x!==null?x.sibling:null):x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function bs(t,n,r,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Ei(u.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(u===Qe.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}u=u.return}return t!==null&&Wh(n,t,r,o),n.flags|=262144,t!==null}function Xu(t){for(t=t.firstContext;t!==null;){if(!Ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Es(t){Ms=t,Ja=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return R_(Ms,t)}function ju(t,n){return Ms===null&&Es(t),R_(t,n)}function R_(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ja===null){if(t===null)throw Error(s(308));Ja=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ja=Ja.next=n;return r}var uA=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},fA=a.unstable_scheduleCallback,dA=a.unstable_NormalPriority,Tn={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yh(){return{controller:new uA,data:new Map,refCount:0}}function rc(t){t.refCount--,t.refCount===0&&fA(dA,function(){t.controller.abort()})}function C_(t,n){if((t.pendingLanes&4194048)!==0){var r=t.transitionTypes;for(r===null&&(r=t.transitionTypes=[]),t=0;t<n.length;t++){var o=n[t];r.indexOf(o)===-1&&r.push(o)}}}var sc=null;function hA(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var oc=null,Zh=0,Ts=0,Mo=null;function pA(t,n){if(oc===null){var r=oc=[];Zh=0,Ts=fm(),Mo={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Zh++,n.then(D_,D_),n}function D_(){if(--Zh===0&&(sc=null,oc!==null)){Mo!==null&&(Mo.status="fulfilled");var t=oc;oc=null,Ts=0,Mo=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mA(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var N_=Me.S;Me.S=function(t,n){if(by=rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pA(t,n),sc!==null)for(var r=Ho;r!==null;)C_(r,sc),r=r.next;if(r=t.types,r!==null){for(var o=Ho;o!==null;)C_(o,r),o=o.next;if(Ts!==0){o=sc,o===null&&(o=sc=[]);for(var u=0;u<r.length;u++){var f=r[u];o.indexOf(f)===-1&&o.push(f)}}}N_!==null&&N_(t,n)};var As=ft(null);function Qh(){var t=As.current;return t!==null?t:cn.pooledCache}function qu(t,n){n===null?ct(As,As.current):ct(As,n.pool)}function U_(){var t=Qh();return t===null?null:{parent:Tn._currentValue,pool:t}}var bo=Error(s(460)),Kh=Error(s(474)),Wu=Error(s(542)),Yu={then:function(){}};function L_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function P_(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(ya,ya),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,z_(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ya,ya);else{if(t=cn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,z_(t),t}throw Rs=n,bo}}function ws(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Rs=r,bo):r}}var Rs=null;function O_(){if(Rs===null)throw Error(s(459));var t=Rs;return Rs=null,t}function z_(t){if(t===bo||t===Wu)throw Error(s(483))}var Eo=null,lc=0;function Zu(t){var n=lc;return lc+=1,Eo===null&&(Eo=[]),P_(Eo,t,n)}function Pr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Qu(t,n){throw n.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function I_(t){function n($,j){if(t){var ie=$.deletions;ie===null?($.deletions=[j],$.flags|=16):ie.push(j)}}function r($,j){if(!t)return null;for(;j!==null;)n($,j),j=j.sibling;return null}function o($){for(var j=new Map;$!==null;)$.key===null?j.set($.index,$):j.set($.key,$),$=$.sibling;return j}function u($,j){return $=Ka($,j),$.index=0,$.sibling=null,$}function f($,j,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<j?($.flags|=2,j):ie):($.flags|=134217730,j)):($.flags|=1048576,j)}function x($){return t&&$.alternate===null&&($.flags|=134217730),$}function A($,j,ie,_e){return j===null||j.tag!==6?(j=Gh(ie,$.mode,_e),j.return=$,j):(j=u(j,ie),j.return=$,j)}function B($,j,ie,_e){var Ze=ie.type;return Ze===F?($=le($,j,ie.props.children,_e,ie.key),Pr($,ie),$):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===me&&ws(Ze)===j.type)?(j=u(j,ie.props),Pr(j,ie),j.return=$,j):(j=Bu(ie.type,ie.key,ie.props,null,$.mode,_e),Pr(j,ie),j.return=$,j)}function J($,j,ie,_e){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Vh(ie,$.mode,_e),j.return=$,j):(j=u(j,ie.children||[]),j.return=$,j)}function le($,j,ie,_e,Ze){return j===null||j.tag!==7?(j=ys(ie,$.mode,_e,Ze),j.return=$,j):(j=u(j,ie),j.return=$,j)}function xe($,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Gh(""+j,$.mode,ie),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return ie=Bu(j.type,j.key,j.props,null,$.mode,ie),Pr(ie,j),ie.return=$,ie;case V:return j=Vh(j,$.mode,ie),j.return=$,j;case me:return j=ws(j),xe($,j,ie)}if(we(j)||pe(j))return j=ys(j,$.mode,ie,null),j.return=$,j;if(typeof j.then=="function")return xe($,Zu(j),ie);if(j.$$typeof===q)return xe($,ju($,j),ie);Qu($,j)}return null}function Q($,j,ie,_e){var Ze=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Ze!==null?null:A($,j,""+ie,_e);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case O:return ie.key===Ze?B($,j,ie,_e):null;case V:return ie.key===Ze?J($,j,ie,_e):null;case me:return ie=ws(ie),Q($,j,ie,_e)}if(we(ie)||pe(ie))return Ze!==null?null:le($,j,ie,_e,null);if(typeof ie.then=="function")return Q($,j,Zu(ie),_e);if(ie.$$typeof===q)return Q($,j,ju($,ie),_e);Qu($,ie)}return null}function re($,j,ie,_e,Ze){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return $=$.get(ie)||null,A(j,$,""+_e,Ze);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case O:return $=$.get(_e.key===null?ie:_e.key)||null,B(j,$,_e,Ze);case V:return $=$.get(_e.key===null?ie:_e.key)||null,J(j,$,_e,Ze);case me:return _e=ws(_e),re($,j,ie,_e,Ze)}if(we(_e)||pe(_e))return $=$.get(ie)||null,le(j,$,_e,Ze,null);if(typeof _e.then=="function")return re($,j,ie,Zu(_e),Ze);if(_e.$$typeof===q)return re($,j,ie,ju(j,_e),Ze);Qu(j,_e)}return null}function Ie($,j,ie,_e){for(var Ze=null,It=null,st=j,dt=j=0,Rn=null;st!==null&&dt<ie.length;dt++){st.index>dt?(Rn=st,st=null):Rn=st.sibling;var Xt=Q($,st,ie[dt],_e);if(Xt===null){st===null&&(st=Rn);break}t&&st&&Xt.alternate===null&&n($,st),j=f(Xt,j,dt),It===null?Ze=Xt:It.sibling=Xt,It=Xt,st=Rn}if(dt===ie.length)return r($,st),Nt&&$a($,dt),Ze;if(st===null){for(;dt<ie.length;dt++)st=xe($,ie[dt],_e),st!==null&&(j=f(st,j,dt),It===null?Ze=st:It.sibling=st,It=st);return Nt&&$a($,dt),Ze}for(st=o(st);dt<ie.length;dt++)Rn=re(st,$,dt,ie[dt],_e),Rn!==null&&(t&&(Xt=Rn.alternate,Xt!==null&&st.delete(Xt.key===null?dt:Xt.key)),j=f(Rn,j,dt),It===null?Ze=Rn:It.sibling=Rn,It=Rn);return t&&st.forEach(function(Jr){return n($,Jr)}),Nt&&$a($,dt),Ze}function et($,j,ie,_e){if(ie==null)throw Error(s(151));for(var Ze=null,It=null,st=j,dt=j=0,Rn=null,Xt=ie.next();st!==null&&!Xt.done;dt++,Xt=ie.next()){st.index>dt?(Rn=st,st=null):Rn=st.sibling;var Jr=Q($,st,Xt.value,_e);if(Jr===null){st===null&&(st=Rn);break}t&&st&&Jr.alternate===null&&n($,st),j=f(Jr,j,dt),It===null?Ze=Jr:It.sibling=Jr,It=Jr,st=Rn}if(Xt.done)return r($,st),Nt&&$a($,dt),Ze;if(st===null){for(;!Xt.done;dt++,Xt=ie.next())Xt=xe($,Xt.value,_e),Xt!==null&&(j=f(Xt,j,dt),It===null?Ze=Xt:It.sibling=Xt,It=Xt);return Nt&&$a($,dt),Ze}for(st=o(st);!Xt.done;dt++,Xt=ie.next())Xt=re(st,$,dt,Xt.value,_e),Xt!==null&&(t&&(Rn=Xt.alternate,Rn!==null&&st.delete(Rn.key===null?dt:Rn.key)),j=f(Xt,j,dt),It===null?Ze=Xt:It.sibling=Xt,It=Xt);return t&&st.forEach(function(Zw){return n($,Zw)}),Nt&&$a($,dt),Ze}function Et($,j,ie,_e){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case O:e:{for(var Ze=ie.key;j!==null;){if(j.key===Ze){if(Ze=ie.type,Ze===F){if(j.tag===7){r($,j.sibling),_e=u(j,ie.props.children),Pr(_e,ie),_e.return=$,$=_e;break e}}else if(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===me&&ws(Ze)===j.type){r($,j.sibling),_e=u(j,ie.props),Pr(_e,ie),_e.return=$,$=_e;break e}r($,j);break}else n($,j);j=j.sibling}ie.type===F?(_e=ys(ie.props.children,$.mode,_e,ie.key),Pr(_e,ie),_e.return=$,$=_e):(_e=Bu(ie.type,ie.key,ie.props,null,$.mode,_e),Pr(_e,ie),_e.return=$,$=_e)}return x($);case V:e:{for(Ze=ie.key;j!==null;){if(j.key===Ze)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){r($,j.sibling),_e=u(j,ie.children||[]),_e.return=$,$=_e;break e}else{r($,j);break}else n($,j);j=j.sibling}_e=Vh(ie,$.mode,_e),_e.return=$,$=_e}return x($);case me:return ie=ws(ie),Et($,j,ie,_e)}if(we(ie))return Ie($,j,ie,_e);if(pe(ie)){if(Ze=pe(ie),typeof Ze!="function")throw Error(s(150));return ie=Ze.call(ie),et($,j,ie,_e)}if(typeof ie.then=="function")return Et($,j,Zu(ie),_e);if(ie.$$typeof===q)return Et($,j,ju($,ie),_e);Qu($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(r($,j.sibling),_e=u(j,ie),_e.return=$,$=_e):(r($,j),_e=Gh(ie,$.mode,_e),_e.return=$,$=_e),x($)):r($,j)}return function($,j,ie,_e){try{lc=0;var Ze=Et($,j,ie,_e);return Eo=null,Ze}catch(st){if(st===bo||st===Wu)throw st;var It=hi(29,st,null,$.mode);return It.lanes=_e,It.return=$,It}}}var Cs=I_(!0),F_=I_(!1),Or=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Fu(t),S_(t,null,r),n}return Iu(t,o,n,r),Fu(t)}function cc(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Eu(t,r)}}function ep(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var tp=!1;function uc(){if(tp){var t=Mo;if(t!==null)throw t}}function fc(t,n,r,o){tp=!1;var u=t.updateQueue;Or=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,J=B.next;B.next=null,x===null?f=J:x.next=J,x=B;var le=t.alternate;le!==null&&(le=le.updateQueue,A=le.lastBaseUpdate,A!==x&&(A===null?le.firstBaseUpdate=J:A.next=J,le.lastBaseUpdate=B))}if(f!==null){var xe=u.baseState;x=0,le=J=B=null,A=f;do{var Q=A.lane&-536870913,re=Q!==A.lane;if(re?(zt&Q)===Q:(o&Q)===Q){Q!==0&&Q===Ts&&(tp=!0),le!==null&&(le=le.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ie=t,et=A;Q=n;var Et=r;switch(et.tag){case 1:if(Ie=et.payload,typeof Ie=="function"){xe=Ie.call(Et,xe,Q);break e}xe=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=et.payload,Q=typeof Ie=="function"?Ie.call(Et,xe,Q):Ie,Q==null)break e;xe=P({},xe,Q);break e;case 2:Or=!0}}Q=A.callback,Q!==null&&(t.flags|=64,re&&(t.flags|=8192),re=u.callbacks,re===null?u.callbacks=[Q]:re.push(Q))}else re={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},le===null?(J=le=re,B=xe):le=le.next=re,x|=Q;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;re=A,A=re.next,re.next=null,u.lastBaseUpdate=re,u.shared.pending=null}}while(!0);le===null&&(B=xe),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=le,f===null&&(u.shared.lanes=0),Xr|=x,t.lanes=x,t.memoizedState=xe}}function B_(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function H_(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)B_(r[t],n)}var Fr=ft(null),Ku=ft(0);function G_(t,n){t=rr,ct(Ku,t),ct(Fr,n),rr=t|n.baseLanes}function np(){ct(Ku,rr),ct(Fr,Fr.current)}function ip(){rr=Ku.current,Dt(Fr),Dt(Ku)}var jn=ft(null),Kn=null;function Br(t){var n=t.alternate;ct(qn,qn.current&1),ct(jn,t),Kn===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(Kn=t)}function ap(t){ct(qn,qn.current),ct(jn,t),Kn===null&&(Kn=t)}function V_(t){t.tag===22?(ct(qn,qn.current),ct(jn,t),Kn===null&&(Kn=t)):Hr()}function Hr(){ct(qn,qn.current),ct(jn,jn.current)}function Ti(t){Dt(jn),Kn===t&&(Kn=null),Dt(qn)}var qn=ft(0);function dc(t,n){ct(jn,jn.current),ct(qn,n)}function rp(t){Dt(qn),Dt(jn),Kn===t&&(Kn=null)}function $u(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||wm(r)||Rm(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var tr=0,bt=null,rn=null,An=null,Ju=!1,To=!1,Ds=!1,ef=0,hc=0,Ao=null,gA=0;function vn(){throw Error(s(321))}function sp(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Ei(t[r],n[r]))return!1;return!0}function op(t,n,r,o,u,f){return tr=f,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Me.H=t===null||t.memoizedState===null?Tx:Ax,Ds=!1,f=r(o,u),Ds=!1,To&&(f=X_(n,r,o,u)),k_(t),f}function k_(t){Me.H=lf;var n=rn!==null&&rn.next!==null;if(tr=0,An=rn=bt=null,Ju=!1,hc=0,Ao=null,n)throw Error(s(300));t===null||wn||(t=t.dependencies,t!==null&&Xu(t)&&(wn=!0))}function X_(t,n,r,o){bt=t;var u=0;do{if(To&&(Ao=null),hc=0,To=!1,25<=u)throw Error(s(301));if(u+=1,An=rn=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Me.H=EA,f=n(r,o)}while(To);return f}function vA(){var t=Me.H,n=t.useState()[0];return n=typeof n.then=="function"?pc(n):n,t=t.useState()[0],(rn!==null?rn.memoizedState:null)!==t&&(bt.flags|=1024),n}function lp(){var t=ef!==0;return ef=0,t}function cp(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function up(t){if(Ju){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ju=!1}tr=0,An=rn=bt=null,To=!1,hc=ef=0,Ao=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?bt.memoizedState=An=t:An=An.next=t,An}function Sn(){if(rn===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var n=An===null?bt.memoizedState:An.next;if(n!==null)An=n,rn=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},An===null?bt.memoizedState=An=t:An=An.next=t}return An}function tf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pc(t){var n=hc;return hc+=1,Ao===null&&(Ao=[]),t=P_(Ao,t,n),n=bt,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,Me.H=n===null||n.memoizedState===null?Tx:Ax),t}function nf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pc(t);if(t.$$typeof===ue)return;if(t.$$typeof===q)return Xn(t)}throw Error(s(438,String(t)))}function fp(t){var n=null,r=bt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=tf(),bt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=lt;return n.index++,r}function nr(t,n){return typeof n=="function"?n(t):n}function af(t){var n=Sn();return dp(n,rn,t)}function dp(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=x=null,B=null,J=n,le=!1;do{var xe=J.lane&-536870913;if(xe!==J.lane?(zt&xe)===xe:(tr&xe)===xe){var Q=J.revertLane;if(Q===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),xe===Ts&&(le=!0);else if((tr&Q)===Q){J=J.next,Q===Ts&&(le=!0);continue}else xe={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=xe,x=f):B=B.next=xe,bt.lanes|=Q,Xr|=Q;xe=J.action,Ds&&r(f,xe),f=J.hasEagerState?J.eagerState:r(f,xe)}else Q={lane:xe,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=Q,x=f):B=B.next=Q,bt.lanes|=xe,Xr|=xe;J=J.next}while(J!==null&&J!==n);if(B===null?x=f:B.next=A,!Ei(f,t.memoizedState)&&(wn=!0,le&&(r=Mo,r!==null)))throw r;t.memoizedState=f,t.baseState=x,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hp(t){var n=Sn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Ei(f,n.memoizedState)||(wn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function j_(t,n,r){var o=bt,u=Sn(),f=Nt;if(f){if(r===void 0)throw Error(s(407));r=r()}else r=n();var x=!Ei((rn||u).memoizedState,r);if(x&&(u.memoizedState=r,wn=!0),u=u.queue,gp(Y_.bind(null,o,u,t),[t]),t=u.getSnapshot!==n||x||An!==null&&(An.memoizedState.tag&1)!==0,wo(t?9:8,{destroy:void 0},W_.bind(null,o,u,r,n),null),t){if(o.flags|=2048,cn===null)throw Error(s(349));f||(tr&127)!==0||q_(o,n,r)}return r}function q_(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=bt.updateQueue,n===null?(n=tf(),bt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function W_(t,n,r,o){n.value=r,n.getSnapshot=o,Z_(n)&&Q_(t)}function Y_(t,n,r){return r(function(){Z_(n)&&Q_(t)})}function Z_(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Ei(t,r)}catch{return!0}}function Q_(t){var n=xs(t,2);n!==null&&vi(n,t,2)}function pp(t){var n=ai();if(typeof t=="function"){var r=t;if(t=r(),Ds){Zt(!0);try{r()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:t},n}function K_(t,n,r,o){return t.baseState=r,dp(t,rn,typeof o=="function"?o:nr)}function _A(t,n,r,o,u){if(of(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};Me.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,$_(n,f)):(f.next=r.next,n.pending=r.next=f)}}function $_(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=Me.T,x={};x.types=f!==null?f.types:null,Me.T=x;try{var A=r(u,o),B=Me.S;B!==null&&B(x,A),J_(t,n,A)}catch(J){mp(t,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),Me.T=f}}else try{f=r(u,o),J_(t,n,f)}catch(J){mp(t,n,J)}}function J_(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){ex(t,n,o)},function(o){return mp(t,n,o)}):ex(t,n,r)}function ex(t,n,r){n.status="fulfilled",n.value=r,tx(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,$_(t,r)))}function mp(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,tx(n),n=n.next;while(n!==o)}t.action=null}function tx(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function nx(t,n){return n}function ix(t,n){if(Nt){var r=cn.formState;if(r!==null){e:{var o=bt;if(Nt){if(un){t:{for(var u=un,f=Vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){un=Xi(u.nextSibling),o=u.data==="F!";break e}}Ur(o)}o=!1}o&&(n=r[0])}}return r=ai(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nx,lastRenderedState:n},r.queue=o,r=Mx.bind(null,bt,o),o.dispatch=r,o=pp(!1),f=Sp.bind(null,bt,!1,o.queue),o=ai(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=_A.bind(null,bt,u,f,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function ax(t){var n=Sn();return rx(n,rn,t)}function rx(t,n,r){if(n=dp(t,n,nx)[0],t=af(nr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=pc(n)}catch(x){throw x===bo?Wu:x}else o=n;n=Sn();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(bt.flags|=2048,wo(9,{destroy:void 0},xA.bind(null,u,r),null)),[o,f,t]}function xA(t,n){t.action=n}function sx(t){var n=Sn(),r=rn;if(r!==null)return rx(n,r,t);Sn(),n=n.memoizedState,r=Sn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function wo(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=tf(),bt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function ox(){return Sn().memoizedState}function rf(t,n,r,o){var u=ai();bt.flags|=t,u.memoizedState=wo(1|n,{destroy:void 0},r,o===void 0?null:o)}function sf(t,n,r,o){var u=Sn();o=o===void 0?null:o;var f=u.memoizedState.inst;rn!==null&&o!==null&&sp(o,rn.memoizedState.deps)?u.memoizedState=wo(n,f,r,o):(bt.flags|=t,u.memoizedState=wo(1|n,f,r,o))}function lx(t,n){rf(8390656,8,t,n)}function gp(t,n){sf(2048,8,t,n)}function yA(t){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=tf(),bt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function cx(t){var n=Sn().memoizedState;return yA({ref:n,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ux(t,n){return sf(4,2,t,n)}function fx(t,n){return sf(4,4,t,n)}function dx(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function hx(t,n,r){r=r!=null?r.concat([t]):null,sf(4,4,dx.bind(null,n,t),r)}function vp(){}function px(t,n){var r=Sn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&sp(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function mx(t,n){var r=Sn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&sp(n,o[1]))return o[0];if(o=t(),Ds){Zt(!0);try{t()}finally{Zt(!1)}}return r.memoizedState=[o,n],o}function _p(t,n,r){return r===void 0||(tr&1073741824)!==0&&(zt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=Ty(),bt.lanes|=t,Xr|=t,r)}function gx(t,n,r,o){return Ei(r,n)?r:Fr.current!==null?(t=_p(t,r,o),Ei(t,n)||(wn=!0),t):(tr&106)===0||(tr&1073741824)!==0&&(zt&261930)===0?(wn=!0,t.memoizedState=r):(t=Ty(),bt.lanes|=t,Xr|=t,n)}function vx(t,n,r,o,u){var f=ke.p;ke.p=f!==0&&8>f?f:8;var x=Me.T,A={};A.types=x!==null?x.types:null,Me.T=A,Sp(t,!1,n,r);try{var B=u(),J=Me.S;if(J!==null&&J(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var le=mA(B,o);mc(t,n,le,Ci(t))}else mc(t,n,o,Ci(t))}catch(xe){mc(t,n,{then:function(){},status:"rejected",reason:xe},Ci())}finally{ke.p=f,x!==null&&A.types!==null&&(x.types=A.types),Me.T=x}}function SA(){}function xp(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=_x(t).queue;vx(t,u,n,ht,r===null?SA:function(){return xx(t),r(o)})}function _x(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:ht},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function xx(t){var n=_x(t);n.next===null&&(n=t.alternate.memoizedState),mc(t,n.next.queue,{},Ci())}function yp(){return Xn(qo)}function yx(){return Sn().memoizedState}function Sx(){return Sn().memoizedState}function MA(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=Ci();t=zr(r);var o=Ir(n,t,r);o!==null&&(vi(o,n,r),cc(o,n,r)),n={cache:Yh()},t.payload=n;return}n=n.return}}function bA(t,n,r){var o=Ci();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},of(t)?bx(n,r):(r=Bh(t,n,r,o),r!==null&&(vi(r,t,o),Ex(r,n,o)))}function Mx(t,n,r){var o=Ci();mc(t,n,r,o)}function mc(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(of(t))bx(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,r);if(u.hasEagerState=!0,u.eagerState=A,Ei(A,x))return Iu(t,n,u,0),cn===null&&zu(),!1}catch{}if(r=Bh(t,n,u,o),r!==null)return vi(r,t,o),Ex(r,n,o),!0}return!1}function Sp(t,n,r,o){if(o={lane:2,revertLane:fm(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},of(t)){if(n)throw Error(s(479))}else n=Bh(t,r,o,2),n!==null&&vi(n,t,2)}function of(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function bx(t,n){To=Ju=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Ex(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Eu(t,r)}}var lf={readContext:Xn,use:nf,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn,useEffectEvent:vn},Tx={readContext:Xn,use:nf,useCallback:function(t,n){return ai().memoizedState=[t,n===void 0?null:n],t},useContext:Xn,useEffect:lx,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,rf(4194308,4,dx.bind(null,n,t),r)},useLayoutEffect:function(t,n){return rf(4194308,4,t,n)},useInsertionEffect:function(t,n){rf(4,2,t,n)},useMemo:function(t,n){var r=ai();n=n===void 0?null:n;var o=t();if(Ds){Zt(!0);try{t()}finally{Zt(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=ai();if(r!==void 0){var u=r(n);if(Ds){Zt(!0);try{r(n)}finally{Zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=bA.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=ai();return t={current:t},n.memoizedState=t},useState:function(t){t=pp(t);var n=t.queue,r=Mx.bind(null,bt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:vp,useDeferredValue:function(t,n){var r=ai();return _p(r,t,n)},useTransition:function(){var t=pp(!1);return t=vx.bind(null,bt,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=bt,u=ai();if(Nt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),cn===null)throw Error(s(349));(zt&127)!==0||q_(o,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,lx(Y_.bind(null,o,f,t),[t]),o.flags|=2048,wo(9,{destroy:void 0},W_.bind(null,o,f,r,n),null),r},useId:function(){var t=ai(),n=cn.identifierPrefix;if(Nt){var r=Ma,o=Sa;r=(o&~(1<<32-Mt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=ef++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=gA++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yp,useFormState:ix,useActionState:ix,useOptimistic:function(t){var n=ai();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Sp.bind(null,bt,!0,r),r.dispatch=n,[t,n]},useMemoCache:fp,useCacheRefresh:function(){return ai().memoizedState=MA.bind(null,bt)},useEffectEvent:function(t){var n=ai(),r={impl:t};return n.memoizedState=r,function(){if((Wt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Ax={readContext:Xn,use:nf,useCallback:px,useContext:Xn,useEffect:gp,useImperativeHandle:hx,useInsertionEffect:ux,useLayoutEffect:fx,useMemo:mx,useReducer:af,useRef:ox,useState:function(){return af(nr)},useDebugValue:vp,useDeferredValue:function(t,n){var r=Sn();return gx(r,rn.memoizedState,t,n)},useTransition:function(){var t=af(nr)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:pc(t),n]},useSyncExternalStore:j_,useId:yx,useHostTransitionStatus:yp,useFormState:ax,useActionState:ax,useOptimistic:function(t,n){var r=Sn();return K_(r,rn,t,n)},useMemoCache:fp,useCacheRefresh:Sx,useEffectEvent:cx},EA={readContext:Xn,use:nf,useCallback:px,useContext:Xn,useEffect:gp,useImperativeHandle:hx,useInsertionEffect:ux,useLayoutEffect:fx,useMemo:mx,useReducer:hp,useRef:ox,useState:function(){return hp(nr)},useDebugValue:vp,useDeferredValue:function(t,n){var r=Sn();return rn===null?_p(r,t,n):gx(r,rn.memoizedState,t,n)},useTransition:function(){var t=hp(nr)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:pc(t),n]},useSyncExternalStore:j_,useId:yx,useHostTransitionStatus:yp,useFormState:sx,useActionState:sx,useOptimistic:function(t,n){var r=Sn();return rn!==null?K_(r,rn,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:fp,useCacheRefresh:Sx,useEffectEvent:cx};function Mp(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:P({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var bp={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=Ci(),u=zr(o);u.payload=n,r!=null&&(u.callback=r),n=Ir(t,u,o),n!==null&&(vi(n,t,o),cc(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=Ci(),u=zr(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ir(t,u,o),n!==null&&(vi(n,t,o),cc(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=Ci(),o=zr(r);o.tag=2,n!=null&&(o.callback=n),n=Ir(t,o,r),n!==null&&(vi(n,t,r),cc(n,t,r))}};function wx(t,n,r,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!tc(r,o)||!tc(u,f):!0}function Rx(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&bp.enqueueReplaceState(n,n.state,null)}function Ns(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=P({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function Cx(t){Ou(t)}function Dx(t){console.error(t)}function Nx(t){Ou(t)}function cf(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ux(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ep(t,n,r){return r=zr(r),r.tag=3,r.payload={element:null},r.callback=function(){cf(t,n)},r}function Lx(t){return t=zr(t),t.tag=3,t}function Px(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Ux(n,r,o)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Ux(n,r,o),typeof u!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function TA(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&bs(n,r,u,!0),r=jn.current,r!==null){switch(r.tag){case 31:case 13:case 19:return Kn===null?Df():r.alternate===null&&_n===0&&(_n=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Yu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),lm(t,o,u)),!1;case 22:return r.flags|=65536,o===Yu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),lm(t,o,u)),!1}throw Error(s(435,r.tag))}return lm(t,o,u),Df(),!1}if(Nt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xh&&(t=Error(s(422),{cause:o}),ac(Bi(t,r)))):(o!==Xh&&(n=Error(s(423),{cause:o}),ac(Bi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Bi(o,r),u=Ep(t.stateNode,o,u),ep(t,u),_n!==4&&(_n=2)),!1;var f=Error(s(520),{cause:o});if(f=Bi(f,r),bc===null?bc=[f]:bc.push(f),_n!==4&&(_n=2),n===null)return!0;o=Bi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Ep(r.stateNode,o,t),ep(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(jr===null||!jr.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Lx(u),Px(u,t,r,o),ep(r,u),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}var Tp=Error(s(461)),wn=!1;function Un(t,n,r,o){n.child=t===null?F_(n,null,r,o):Cs(n,t.child,r,o)}function Ox(t,n,r,o,u){r=r.render;var f=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Es(n),o=op(t,n,r,x,f,u),A=lp(),t!==null&&!wn?(cp(t,n,u),ir(t,n,u)):(Nt&&A&&Gu(n),n.flags|=1,Un(t,n,o,u),n.child)}function zx(t,n,r,o,u){if(t===null){var f=r.type;return typeof f=="function"&&!Hh(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Ix(t,n,f,o,u)):(t=Bu(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lp(t,u)){var x=f.memoizedProps;if(r=r.compare,r=r!==null?r:tc,r(x,o)&&t.ref===n.ref)return ir(t,n,u)}return n.flags|=1,t=Ka(f,o),t.ref=n.ref,t.return=n,n.child=t}function Ix(t,n,r,o,u){if(t!==null){var f=t.memoizedProps;if(tc(f,o)&&t.ref===n.ref)if(wn=!1,n.pendingProps=o=f,Lp(t,u))(t.flags&131072)!==0&&(wn=!0);else return n.lanes=t.lanes,ir(t,n,u)}return Ap(t,n,r,o,u)}function Fx(t,n,r,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Bx(t,n,f,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&qu(n,f!==null?f.cachePool:null),f!==null?G_(n,f):np(),V_(n);else return o=n.lanes=536870912,Bx(t,n,f!==null?f.baseLanes|r:r,r,o)}else f!==null?(qu(n,f.cachePool),G_(n,f),Hr(),n.memoizedState=null):(t!==null&&qu(n,null),np(),Hr());return Un(t,n,u,r),n.child}function gc(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bx(t,n,r,o,u){var f=Qh();return f=f===null?null:{parent:Tn._currentValue,pool:f},n.memoizedState={baseLanes:r,cachePool:f},t!==null&&qu(n,null),np(),V_(n),t!==null&&bs(t,n,o,!0),n.childLanes=u,null}function uf(t,n){return n=ff({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hx(t,n,r){return Cs(n,t.child,null,r),t=uf(n,n.pendingProps),t.flags|=2,Ti(n),n.memoizedState=null,t}function AA(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Nt){if(o.mode==="hidden")return t=uf(n,o),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},gc(null,t);if(ap(n),(t=un)?(t=dS(t,Vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Dr!==null?{id:Sa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},r=b_(t),r.return=n,n.child=r,Bn=n,un=null)):t=null,t===null)throw Ur(n);return n.lanes=536870912,null}return uf(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(ap(n),u)if(n.flags&256)n.flags&=-257,n=Hx(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(wn||bs(t,n,r,!1),u=(r&t.childLanes)!==0,wn||u){if(Fr.current===null){if(o=cn,o!==null&&(x=Tu(o,r),x!==0&&x!==f.retryLane))throw f.retryLane=x,xs(t,x),vi(o,t,x),Tp;Df()}n=Hx(t,n,r)}else t=f.treeContext,un=Xi(x.nextSibling),Bn=n,Nt=!0,Nr=null,Vi=!1,t!==null&&A_(n,t),n=uf(n,o),n.flags|=134221824;return n}return t=Ka(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ro(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Ap(t,n,r,o,u){return Es(n),r=op(t,n,r,o,void 0,u),o=lp(),t!==null&&!wn?(cp(t,n,u),ir(t,n,u)):(Nt&&o&&Gu(n),n.flags|=1,Un(t,n,r,u),n.child)}function Gx(t,n,r,o,u,f){return Es(n),n.updateQueue=null,r=X_(n,o,r,u),k_(t),o=lp(),t!==null&&!wn?(cp(t,n,f),ir(t,n,f)):(Nt&&o&&Gu(n),n.flags|=1,Un(t,n,r,f),n.child)}function Vx(t,n,r,o,u){if(Es(n),n.stateNode===null){var f=_o,x=r.contextType;typeof x=="object"&&x!==null&&(f=Xn(x)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bp,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},$h(n),x=r.contextType,f.context=typeof x=="object"&&x!==null?Xn(x):_o,f.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Mp(n,r,x,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&bp.enqueueReplaceState(f,f.state,null),fc(n,o,f,u),uc(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=Ns(r,A);f.props=B;var J=f.context,le=r.contextType;x=_o,typeof le=="object"&&le!==null&&(x=Xn(le));var xe=r.getDerivedStateFromProps;le=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,le||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==x)&&Rx(n,f,o,x),Or=!1;var Q=n.memoizedState;f.state=Q,fc(n,o,f,u),uc(),J=n.memoizedState,A||Q!==J||Or?(typeof xe=="function"&&(Mp(n,r,xe,o),J=n.memoizedState),(B=Or||wx(n,r,B,o,Q,J,x))?(le||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Jh(t,n),x=n.memoizedProps,le=Ns(r,x),f.props=le,xe=n.pendingProps,Q=f.context,J=r.contextType,B=_o,typeof J=="object"&&J!==null&&(B=Xn(J)),A=r.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xe||Q!==B)&&Rx(n,f,o,B),Or=!1,Q=n.memoizedState,f.state=Q,fc(n,o,f,u),uc();var re=n.memoizedState;x!==xe||Q!==re||Or||t!==null&&t.dependencies!==null&&Xu(t.dependencies)?(typeof A=="function"&&(Mp(n,r,A,o),re=n.memoizedState),(le=Or||wx(n,r,le,o,Q,re,B)||t!==null&&t.dependencies!==null&&Xu(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,re,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,re,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=re),f.props=o,f.state=re,f.context=B,o=le):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ro(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Cs(n,t.child,null,u),n.child=Cs(n,null,r,u)):Un(t,n,r,u),n.memoizedState=f.state,t=n.child):t=ir(t,n,u),t}function kx(t,n,r,o){return Ss(),n.flags|=256,Un(t,n,r,o),n.child}var wp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rp(t){return{baseLanes:t,cachePool:U_()}}function Cp(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Ri),t}function Xx(t,n,r){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(qn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Br(n):Hr(),(t=un)?(t=dS(t,Vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Dr!==null?{id:Sa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},r=b_(t),r.return=n,n.child=r,Bn=n,un=null)):t=null,t===null)throw Ur(n);return Rm(t)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(Hr(),u=n.mode,f=ff({mode:"hidden",children:f},u),o=ys(o,u,r,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=Rp(r),o.childLanes=Cp(t,x,r),n.memoizedState=wp,gc(null,o)):(Br(n),Dp(n,f))}var A=t.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return wA(t,n,f,x,o,B,A,r)}return u?(Hr(),u=o.fallback,f=n.mode,A=t.child,B=A.sibling,o=Ka(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&1206910976,B!==null?u=Ka(B,u):(u=ys(u,f,r,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,gc(null,o),o=n.child,u=t.child.memoizedState,u===null?u=Rp(r):(f=u.cachePool,f!==null?(A=Tn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=U_(),u={baseLanes:u.baseLanes|r,cachePool:f}),o.memoizedState=u,o.childLanes=Cp(t,x,r),n.memoizedState=wp,gc(t.child,o)):(Br(n),r=t.child,t=r.sibling,r=Ka(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=r,n.memoizedState=null,r)}function Dp(t,n){return n=ff({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ff(t,n){return t=hi(22,t,null,n),t.lanes=0,t}function df(t,n,r){return Cs(n,t.child,null,r),t=Dp(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function wA(t,n,r,o,u,f,x,A){if(r)return n.flags&256?(Br(n),n.flags&=-257,df(t,n,A)):n.memoizedState!==null?(Hr(),n.child=t.child,n.flags|=128,null):(Hr(),f=u.fallback,x=n.mode,u=ff({mode:"visible",children:u.children},x),f=ys(f,x,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Cs(n,t.child,null,A),u=n.child,u.memoizedState=Rp(A),u.childLanes=Cp(t,o,A),n.memoizedState=wp,gc(null,u));if(Br(n),Rm(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var B=o.dgst;return o=B,o!==""&&(u=Error(s(419)),u.stack="",u.digest=o,ac({value:u,source:null,stack:null})),df(t,n,A)}if(wn||bs(t,n,A,!1),o=(A&t.childLanes)!==0,wn||o){if(Fr.current!==null)return df(t,n,A);if(o=cn,o!==null&&(u=Tu(o,A),u!==0&&u!==x.retryLane))throw x.retryLane=u,xs(t,u),vi(o,t,u),Tp;return wm(f)||Df(),df(t,n,A)}return wm(f)?(n.flags|=192,n.child=t.child,null):(t=x.treeContext,un=Xi(f.nextSibling),Bn=n,Nt=!0,Nr=null,Vi=!1,t!==null&&A_(n,t),n=Dp(n,u.children),n.flags|=134221824,n)}function jx(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,r)}function qx(t){for(var n=null;t!==null;){var r=t.alternate;r!==null&&$u(r)===null&&(n=t),t=t.sibling}return n}function hf(t,n,r,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=r,x.tailMode=u,x.treeForkCount=f)}function Np(t){var n=t.child;for(t.child=null;n!==null;){var r=n.sibling;n.sibling=t.child,t.child=n,n=r}}function Up(t,n,r){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=qn.current;if(n.flags&128)return dc(n,x),null;var A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,dc(n,x),u==="backwards"&&t!==null?(Np(t),Un(t,n,o,r),Np(t)):Un(t,n,o,r),o=Nt?ic:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jx(t,r,n);else if(t.tag===19)jx(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":r=qx(n.child),r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null,Np(n)),hf(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&$u(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}hf(n,!0,r,null,f,o);break;case"together":hf(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:r=qx(n.child),r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),hf(n,!1,u,r,f,o)}return n.child}function Wx(t,n,r){var o=n.pendingProps;return Lr(n,n.type,o.value),Un(t,n,o.children,r),n.child}function ir(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Xr|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(bs(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Ka(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Ka(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Lp(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xu(t)))}function RA(t,n,r){switch(n.tag){case 3:ut(n,n.stateNode.containerInfo),Lr(n,Tn,t.memoizedState.cache),Ss();break;case 27:case 5:Bt(n);break;case 4:ut(n,n.stateNode.containerInfo);break;case 10:Lr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ap(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Br(n),n.flags|=128,null;o=bs(t,n,r,!1);var u=n.child.childLanes;return o||(r&u)!==0?Xx(t,n,r):(Br(n),t=ir(t,n,r),t!==null?t.sibling:null)}Br(n);break;case 19:if(n.flags&128)return Up(t,n,r);if(u=(t.flags&128)!==0,o=(r&n.childLanes)!==0,o||(bs(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Up(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),dc(n,qn.current),o)break;return null;case 22:return n.lanes=0,Fx(t,n,r,n.pendingProps);case 24:Lr(n,Tn,t.memoizedState.cache)}return ir(t,n,r)}function Yx(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)wn=!0;else{if(!Lp(t,r)&&(n.flags&128)===0)return wn=!1,RA(t,n,r);wn=(t.flags&131072)!==0}else wn=!1,Nt&&(n.flags&1048576)!==0&&T_(n,ic,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")Hh(t)?(o=Ns(t,o),n.tag=1,n=Vx(null,n,t,o,r)):(n.tag=0,n=Ap(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===G){n.tag=11,n=Ox(null,n,t,o,r);break e}else if(u===he){n.tag=14,n=zx(null,n,t,o,r);break e}else if(u===q){n.tag=10,n.type=t,n=Wx(null,n,r);break e}}throw n=De(t)||t,Error(s(306,n,""))}}return n;case 0:return Ap(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Ns(o,n.pendingProps),Vx(t,n,o,u,r);case 3:e:{if(ut(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Jh(t,n),fc(n,o,null,r);var x=n.memoizedState;if(o=x.cache,Lr(n,Tn,o),o!==f.cache&&Wh(n,[Tn],r,!0),uc(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=kx(t,n,o,r);break e}else if(o!==u){u=Bi(Error(s(424)),n),ac(u),n=kx(t,n,o,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,un=Xi(t.firstChild),Bn=n,Nt=!0,Nr=null,Vi=!0,r=F_(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling;else{if(Ss(),o===u){n=ir(t,n,r);break e}Un(t,n,o,r)}n=n.child}return n;case 26:return Ro(t,n),t===null?(r=xS(n.type,null,n.pendingProps,null))?n.memoizedState=r:Nt||(n.stateNode=$y(n.type,n.pendingProps,pt.current,n)):n.memoizedState=xS(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Bt(n),t===null&&Nt&&(o=n.stateNode=mS(n.type,n.pendingProps,pt.current),Bn=n,Vi=!0,u=un,Yr(n.type)?(Cm=u,un=Xi(o.firstChild)):un=u),Un(t,n,n.pendingProps.children,r),Ro(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=un)&&(o=Mw(o,n.type,n.pendingProps,Vi),o!==null?(n.stateNode=o,Bn=n,un=Xi(o.firstChild),Vi=!1,u=!0):u=!1),u||Ur(n)),Bt(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,ym(u,f)?o=null:x!==null&&ym(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=op(t,n,vA,null,null,r),qo._currentValue=u),Ro(t,n),Un(t,n,o,r),n.child;case 6:return t===null&&Nt&&((t=r=un)&&(r=bw(r,n.pendingProps,Vi),r!==null?(n.stateNode=r,Bn=n,un=null,t=!0):t=!1),t||Ur(n)),null;case 13:return Xx(t,n,r);case 4:return ut(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Cs(n,null,o,r):Un(t,n,o,r),n.child;case 11:return Ox(t,n,n.type,n.pendingProps,r);case 7:return o=n.pendingProps,Ro(t,n),Un(t,n,o,r),n.child;case 8:return Un(t,n,n.pendingProps.children,r),n.child;case 12:return Un(t,n,n.pendingProps.children,r),n.child;case 10:return Wx(t,n,r);case 9:return u=n.type._context,o=n.pendingProps.children,Es(n),u=Xn(u),o=o(u),n.flags|=1,Un(t,n,o,r),n.child;case 14:return zx(t,n,n.type,n.pendingProps,r);case 15:return Ix(t,n,n.type,n.pendingProps,r);case 19:return Up(t,n,r);case 31:return AA(t,n,r);case 22:return Fx(t,n,r,n.pendingProps);case 24:return Es(n),o=Xn(Tn),t===null?(u=Qh(),u===null&&(u=cn,f=Yh(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:o,cache:u},$h(n),Lr(n,Tn,u)):((t.lanes&r)!==0&&(Jh(t,n),fc(n,null,null,r),uc()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Lr(n,Tn,o)):(o=f.cache,Lr(n,Tn,o),o!==u.cache&&Wh(n,[Tn],r,!0))),Un(t,n,n.pendingProps.children,r),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=t===null?18882560:18874368:Nt&&Gu(n),t!==null&&t.memoizedProps.name!==o.name?n.flags|=4194816:Ro(t,n),Un(t,n,o.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ar(t){t.flags|=4}function Pp(t,n,r,o,u){var f;if((f=(t.mode&32)!==0)&&(f=r===null?bS(n,o):bS(n,o)&&(o.src!==r.src||o.srcSet!==r.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Cy())t.flags|=8192;else throw Rs=Yu,Kh}else t.flags&=-16777217}function Zx(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ES(n))if(Cy())t.flags|=8192;else throw Rs=Yu,Kh}function pf(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Xl():536870912,t.lanes|=n,Lo|=n)}function vc(t,n){if(!Nt)switch(t.tailMode){case"visible":break;case"collapsed":for(var r=t.tail,o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(n=t.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null}}function fn(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function CA(t,n,r){var o=n.pendingProps;switch(kh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(n),null;case 1:return fn(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),er(Tn),Ee(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(So(n)?ar(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jh())),fn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ar(n),f!==null?(fn(n),Zx(n,f)):(fn(n),Pp(n,u,null,o,r))):f?f!==t.memoizedState?(ar(n),fn(n),Zx(n,f)):(fn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ar(n),fn(n),Pp(n,u,t,o,r)),null;case 27:if(D(n),r=pt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ar(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return fn(n),n.subtreeFlags&=-33554433,null}t=ln.current,So(n)?w_(n):(t=mS(u,o,r),n.stateNode=t,ar(n))}return fn(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ar(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return fn(n),n.subtreeFlags&=-33554433,null}if(f=ln.current,So(n))w_(n);else{var x=Rc(pt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[Y]=n,f[se]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Yn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ar(n)}}return fn(n),n.subtreeFlags&=-33554433,Pp(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ar(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=pt.current,So(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Y]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Yy(t.nodeValue,r)),t||Ur(n,!0)}else t=Rc(t).createTextNode(o),t[Y]=n,n.stateNode=t}return fn(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=So(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Y]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),t=!1}else r=jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(Ti(n),n):(Ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return fn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=So(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Y]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),u=!1}else u=jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ti(n),n):(Ti(n),null)}return Ti(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),pf(n,n.updateQueue),fn(n),null);case 4:return Ee(),t===null&&mm(n.stateNode.containerInfo),n.flags|=67108864,fn(n),null;case 10:return er(n.type),fn(n),null;case 19:if(rp(n),o=n.memoizedState,o===null)return fn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vc(o,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=$u(t),f!==null){for(n.flags|=128,vc(o,!1),t=f.updateQueue,n.updateQueue=t,pf(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)M_(r,t),r=r.sibling;return dc(n,qn.current&1|2),Nt&&$a(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&rt()>Af&&(n.flags|=128,u=!0,vc(o,!1),n.lanes=4194304)}else{if(!u)if(t=$u(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,pf(n,t),vc(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!Nt)return fn(n),null}else 2*rt()-o.renderingStartTime>Af&&r!==536870912&&(n.flags|=128,u=!0,vc(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){t=o.tail;e:{for(r=t;r!==null;){if(r.alternate!==null){r=!1;break e}r=r.sibling}r=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=rt(),t.sibling=null,f=qn.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!r||Nt?dc(n,f):(r=f,ct(jn,n),ct(qn,r),Kn===null&&(Kn=n)),Nt&&$a(n,o.treeForkCount),t}return fn(n),null;case 22:case 23:return Ti(n),ip(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(fn(n),n.subtreeFlags&6&&(n.flags|=8192)):fn(n),r=n.updateQueue,r!==null&&pf(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&Dt(As),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),er(Tn),fn(n),null;case 25:return null;case 30:return n.flags|=33554432,fn(n),null}throw Error(s(156,n.tag))}function DA(t,n){switch(kh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return er(Tn),Ee(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(Ti(n),n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return rp(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return Ee(),null;case 10:return er(n.type),null;case 22:case 23:return Ti(n),ip(),t!==null&&Dt(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return er(Tn),null;case 25:return null;default:return null}}function Qx(t,n){switch(kh(n),n.tag){case 3:er(Tn),Ee();break;case 26:case 27:case 5:D(n);break;case 4:Ee();break;case 31:n.memoizedState!==null&&Ti(n);break;case 13:Ti(n);break;case 19:rp(n);break;case 10:er(n.type);break;case 22:case 23:Ti(n),ip(),t!==null&&Dt(As);break;case 24:er(Tn)}}function _c(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var f=r.create,x=r.inst;o=f(),x.destroy=o}r=r.next}while(r!==u)}}catch(A){Jt(n,n.return,A)}}function Gr(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var B=r,J=A;try{J()}catch(le){Jt(u,B,le)}}}o=o.next}while(o!==f)}}catch(le){Jt(n,n.return,le)}}function Kx(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{H_(n,r)}catch(o){Jt(t,t.return,o)}}}function $x(t,n,r){r.props=Ns(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Jt(t,n,o)}}function ba(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var u=t.stateNode,f=Za(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=rS(f)),o=u.ref;break;case 7:if(t.stateNode===null){var x=new Di(t);g(t.child,!1,yw,x,void 0,void 0),t.stateNode=x}o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(A){Jt(t,n,A)}}function Wn(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Jt(t,n,u)}else r.current=null}function mf(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var r=0;r<n.length;r++)fS(t.stateNode,n[r])}function Jx(t){for(var n=t.return;n!==null&&(zp(n)&&fS(t.stateNode,n.stateNode),!Op(n));)n=n.return}function xc(t){for(var n=t.return;n!==null&&(zp(n)&&Sw(t.stateNode,n.stateNode),!Op(n));)n=n.return}function Op(t){return t.tag===5||t.tag===3||t.tag===27}function zp(t){return t&&t.tag===7&&t.stateNode!==null}function Ip(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Jt(t,t.return,u)}}function Fp(t,n,r){try{var o=t.stateNode;nw(o,t.type,r,n),o[se]=n}catch(u){Jt(t,t.return,u)}}function ey(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Yr(t.type)||t.tag===4}function Bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ey(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Yr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hp(t,n,r,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(u,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(u),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ya)),mf(t,o),it=!0;else if(u!==4&&(u===27&&(mf(t,o),o=null,Yr(t.type)&&(r=t.stateNode,n=null)),t=t.child,t!==null))for(Hp(t,n,r,o),t=t.sibling;t!==null;)Hp(t,n,r,o),t=t.sibling}function gf(t,n,r,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?r.insertBefore(u,n):r.appendChild(u),mf(t,o),it=!0;else if(u!==4&&(u===27&&(mf(t,o),o=null,Yr(t.type)&&(r=t.stateNode)),t=t.child,t!==null))for(gf(t,n,r,o),t=t.sibling;t!==null;)gf(t,n,r,o),t=t.sibling}function ty(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Yn(n,o,r),n[Y]=t,n[se]=r}catch(f){Jt(t,t.return,f)}}var vf=!1,Ai=null;function ny(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(vf=!0)}var Ea=null;function iy(){var t=Ea;return Ea=null,t}var pi=0;function Co(t,n,r,o,u){return pi=0,ay(t.child,n,r,o,u)}function ay(t,n,r,o,u){for(var f=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(o!==null){var A=bm(x);o.push(A),A.view&&(f=!0)}else f||bm(x).view&&(f=!0);vf=!0,iS(x,pi===0?n:n+"_"+pi,r),pi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||ay(t.child,n,r,o,u)&&(f=!0));t=t.sibling}return f}function Ta(t,n){for(;t!==null;)t.tag===5?aS(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ta(t.child,n)),t=t.sibling}function _f(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(_f(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var r=n.name;n=Qa(n.default,n.share),n!=="none"&&(Co(t,r,n,null,!1)||Ta(t.child,!1))}t=t.sibling}}function Gp(t,n){if(t.tag===30){var r=t.stateNode,o=t.memoizedProps,u=Za(o,r),f=Qa(o.default,r.paired?o.share:o.enter);f!=="none"?Co(t,u,f,null,!1)?(_f(t),r.paired||n||Io(t,o.onEnter)):Ta(t.child,!1):_f(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gp(t,n),t=t.sibling;else _f(t)}function Vp(t){if(Ai!==null&&Ai.size!==0){var n=Ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var r=t.memoizedProps,o=r.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=Qa(r.default,r.share);if(f!=="none"&&(Co(t,o,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Io(t,r.onShare)):Ta(t.child,!1)),n.delete(o),n.size===0)break}}}Vp(t)}t=t.sibling}}}function kp(t){if(t.tag===30){var n=t.memoizedProps,r=Za(n,t.stateNode),o=Ai!==null?Ai.get(r):void 0,u=Qa(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Co(t,r,u,null,!1)?o!==void 0?(u=t.stateNode,o.paired=u,u.paired=o,Ai.delete(r),Io(t,n.onShare)):Io(t,n.onExit):Ta(t.child,!1)),Ai!==null&&Vp(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)kp(t),t=t.sibling;else Ai!==null&&Vp(t)}function ry(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,r=Za(n,t.stateNode);n=Qa(n.default,n.update),t.flags&=-5,n!=="none"&&Co(t,r,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&ry(t);t=t.sibling}}function Xp(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ta(t.child,!1))}Xp(t)}t=t.sibling}}function xf(t){if(t.tag===30)t.stateNode.paired=null,Ta(t.child,!1),Xp(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xf(t),t=t.sibling;else Xp(t)}function sy(t){for(t=t.child;t!==null;)t.tag===30?Ta(t.child,!1):(t.subtreeFlags&33554432)!==0&&sy(t),t=t.sibling}function jp(t,n,r,o,u,f,x){for(var A=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&pi<f.length){var J=f[pi],le=bm(B);(J.view||le.view)&&(A=!0);var xe;if(xe=(t.flags&4)===0)if(le.clip)xe=!0;else{xe=J.rect;var Q=le.rect;xe=xe.y!==Q.y||xe.x!==Q.x||xe.height!==Q.height||xe.width!==Q.width}xe&&(t.flags|=4),le.abs?le=!J.abs:(J=J.rect,le=le.rect,le=J.height!==le.height||J.width!==le.width),le&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&iS(B,pi===0?r:r+"_"+pi,u),A&&(t.flags&4)!==0||(Ea===null&&(Ea=[]),Ea.push(B,pi===0?o:o+"_"+pi,n.memoizedProps)),pi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?t.flags|=n.flags&32:jp(t,n.child,r,o,u,f,x)&&(A=!0));n=n.sibling}return A}function oy(t,n){for(t=t.child;t!==null;){if(t.tag===30){var r=t.memoizedProps,o=t.stateNode,u=Za(r,o),f=Qa(r.default,r.update),x;x=t.memoizedState,t.memoizedState=null,o=t;var A=t.child;pi=0,u=jp(o,A,u,u,f,x,!1),(t.flags&4)!==0&&u&&Io(t,r.onUpdate)}else(t.subtreeFlags&33554432)!==0&&oy(t);t=t.sibling}}var Hn=!1,Kt=!1,Aa=!1,qp=!1,ly=typeof WeakSet=="function"?WeakSet:Set,Gn=null,wa=!1,yc=!1,yf=!1,Wp=!1;function NA(t,n,r){if(t=t.containerInfo,_m=Wo,t=d_(t),Lh(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var A=0,B=-1,J=-1,le=0,xe=0,Q=t,re=null;t:for(;;){for(var Ie;Q!==o||f!==0&&Q.nodeType!==3||(B=A+f),Q!==x||u!==0&&Q.nodeType!==3||(J=A+u),Q.nodeType===3&&(A+=Q.nodeValue.length),(Ie=Q.firstChild)!==null;)re=Q,Q=Ie;for(;;){if(Q===t)break t;if(re===o&&++le===f&&(B=A),re===x&&++xe===u&&(J=A),(Ie=Q.nextSibling)!==null)break;Q=re,re=Q.parentNode}Q=Ie}o=B===-1||J===-1?null:{start:B,end:J}}else o=null}o=o||{start:0,end:0}}else o=null;for(xm={focusedElem:t,selectionRange:o},Wo=!1,r=(r&335544064)===r,Gn=n,n=r?9270:1024;Gn!==null;){if(t=Gn,r&&(o=t.deletions,o!==null))for(f=0;f<o.length;f++)r&&kp(o[f]);if(t.alternate===null&&(t.flags&2)!==0)r&&ny(t),Sf(r);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&r&&kp(o),Sf(r);continue}else if(o!==null&&o.memoizedState!==null){r&&ny(t),Sf(r);continue}}o=t.child,(t.subtreeFlags&n)!==0&&o!==null?(o.return=t,Gn=o):(r&&ry(t),Sf(r))}}Ai=null}function Sf(t){for(;Gn!==null;){var n=Gn,r=t,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){r=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var x=Ns(n.type,u);r=f.getSnapshotBeforeUpdate(x,o),f.__reactInternalSnapshotBeforeUpdate=r}catch(A){Jt(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,r=o.nodeType,r===9)Am(o);else if(r===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Am(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&o!==null&&(r=Za(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=Qa(u.default,u.update),u!=="none"&&Co(o,r,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,Gn=o;break}Gn=n.return}}function cy(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(t,r),o&4&&_c(5,r);break;case 1:if(Ra(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(x){Jt(r,r.return,x)}else{var u=Ns(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Jt(r,r.return,x)}}o&64&&Kx(r),o&512&&ba(r,r.return);break;case 3:if(Ra(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{H_(t,n)}catch(x){Jt(r,r.return,x)}}break;case 27:n===null&&o&4&&ty(r);case 26:case 5:Ra(t,r),n===null&&o&4&&Ip(r),o&512&&ba(r,r.return);break;case 12:Ra(t,r);break;case 31:Ra(t,r),o&4&&hy(t,r);break;case 13:Ra(t,r),o&4&&py(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=kA.bind(null,r),Ew(t,r))));break;case 22:if(o=r.memoizedState!==null||Hn,!o){var f=n!==null&&n.memoizedState!==null||Kt;n=Hn,u=Kt,Hn=o,(Kt=f)&&!u?(o=2,(r.subtreeFlags&8772)!==0&&(o|=1),ra(t,r,o)):Ra(t,r),Hn=n,Kt=u}break;case 30:Ra(t,r),o&512&&ba(r,r.return);break;case 7:o&512&&ba(r,r.return);default:Ra(t,r)}}function Yp(t,n){for(t=t.child;t!==null;)uy(t,n),t=t.sibling}function uy(t,n){switch(t.tag){case 5:case 26:try{var r=t.stateNode;if(n){var o=r.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(B){Jt(t,t.return,B)}Zp(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,it=!0}catch(B){Jt(t,t.return,B)}break;case 18:try{var A=t.stateNode;n?nS(A,!0):nS(t.stateNode,!1)}catch(B){Jt(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Yp(t,n);break;default:Yp(t,n)}}function Zp(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var r=t,o=n;switch(r.tag){case 4:uy(r,o);break e;case 22:r.memoizedState===null&&Zp(r,o);break e;default:Zp(r,o)}}t=t.sibling}}function fy(t){var n=t.alternate;n!==null&&(t.alternate=null,fy(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&mt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,mi=!1;function ia(t,n,r){for(r=r.child;r!==null;)dy(t,n,r),r=r.sibling}function dy(t,n,r){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Je,r)}catch{}switch(r.tag){case 26:Kt||Wn(r,n),ia(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&!Kt&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Kt||Wn(r,n),xc(r);var o=pn,u=mi;Yr(r.type)&&(pn=r.stateNode,mi=!1),ia(t,n,r),gS(r.stateNode,r.type,r.memoizedProps),pn=o,mi=u;break;case 5:Kt||Wn(r,n),xc(r);case 6:if(r.tag===6&&xc(r),o=pn,u=mi,pn=null,ia(t,n,r),pn=o,mi=u,pn!==null)if(mi)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(r.stateNode),it=!0}catch(f){Jt(r,n,f)}else try{pn.removeChild(r.stateNode),it=!0}catch(f){Jt(r,n,f)}break;case 18:pn!==null&&(mi?(t=pn,tS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Yo(t)):tS(pn,r.stateNode));break;case 4:o=pn,u=mi,pn=r.stateNode.containerInfo,mi=!0,ia(t,n,r),pn=o,mi=u;break;case 0:case 11:case 14:case 15:Gr(2,r,n),Kt||Gr(4,r,n),ia(t,n,r);break;case 1:Kt||(Wn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&$x(r,n,o)),ia(t,n,r);break;case 21:ia(t,n,r);break;case 22:Kt=(o=Kt)||r.memoizedState!==null,ia(t,n,r),Kt=o;break;case 30:Wn(r,n),ia(t,n,r);break;case 7:Kt||Wn(r,n),ia(t,n,r);break;default:ia(t,n,r)}}function hy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Yo(t)}catch(r){Jt(n,n.return,r)}}}function py(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yo(t)}catch(r){Jt(n,n.return,r)}}function UA(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ly),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ly),n;default:throw Error(s(435,t.tag))}}function Mf(t,n){var r=UA(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=XA.bind(null,t,o);o.then(u,u)}})}function ri(t,n,r){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],x=t,A=n,B=A;e:for(;B!==null;){switch(B.tag){case 27:if(Yr(B.type)){pn=B.stateNode,mi=!1;break e}break;case 5:pn=B.stateNode,mi=!1;break e;case 3:case 4:pn=B.stateNode.containerInfo,mi=!0;break e}B=B.return}if(pn===null)throw Error(s(160));dy(x,A,f),pn=null,mi=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)my(n,t,r),n=n.sibling}var aa=null;function my(t,n,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var x=o[f];x.ref.impl=x.nextImpl}ri(n,t,r),si(t),u&4&&(Gr(3,t,t.return),_c(3,t),Gr(5,t,t.return));break;case 1:ri(n,t,r),si(t),u&512&&(Kt||o===null||Wn(o,o.return)),u&64&&Hn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:if(f=aa,ri(n,t,r),si(t),u&512&&(Kt||o===null||Wn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null)if(Hn)t.stateNode=$y(t.type,t.memoizedProps,n.containerInfo,t);else{e:{n=t.type,r=t.memoizedProps,u=f.ownerDocument||f;t:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[$e]||o[Y]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),Yn(o,n,r),o[Y]=t,At(o),n=o;break e;case"link":if(f=MS("link","href",u).get(n+(r.href||""))){for(x=0;x<f.length;x++)if(o=f[x],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){f.splice(x,1);break t}}o=u.createElement(n),Yn(o,n,r),u.head.appendChild(o);break;case"meta":if(f=MS("meta","content",u).get(n+(r.content||""))){for(x=0;x<f.length;x++)if(o=f[x],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){f.splice(x,1);break t}}o=u.createElement(n),Yn(o,n,r),u.head.appendChild(o);break;default:throw Error(s(468,n))}o[Y]=t,At(o),n=o}t.stateNode=n}else Hn||Lm(f,t.type,t.stateNode);else t.stateNode=SS(f,r,t.memoizedProps);else u!==r?(u===null?(n=o.stateNode,n===null||Kt||n.parentNode.removeChild(n)):u.count--,r===null?Hn||Lm(f,t.type,t.stateNode):SS(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Fp(t,t.memoizedProps,o.memoizedProps);break;case 27:ri(n,t,r),si(t),u&512&&(Kt||o===null||Wn(o,o.return)),o!==null&&u&4&&Fp(t,t.memoizedProps,o.memoizedProps);break;case 5:if(f=Aa,Aa=!1,ri(n,t,r),Aa=f,si(t),u&512&&(Kt||o===null||Wn(o,o.return)),t.flags&32){n=t.stateNode;try{uo(n,""),it=!0}catch(le){Jt(t,t.return,le)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Fp(t,n,o!==null?o.memoizedProps:n)),u&1024&&(qp=!0);break;case 6:if(ri(n,t,r),si(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,r=t.stateNode;try{r.nodeValue=n,it=!0}catch(le){Jt(t,t.return,le)}}break;case 3:if(it=!1,If=null,f=aa,aa=Cc(n.containerInfo),ri(n,t,r),aa=f,si(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Yo(n.containerInfo)}catch(le){Jt(t,t.return,le)}qp&&(qp=!1,gy(t)),it=!1;break;case 4:u=Aa,Aa=Hn,o=hn(),f=aa,aa=Cc(t.stateNode.containerInfo),ri(n,t,r),si(t),aa=f,it&&yc&&(yf=!0),it=o,Aa=u;break;case 12:ri(n,t,r),si(t);break;case 31:ri(n,t,r),si(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mf(t,n)));break;case 13:ri(n,t,r),si(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Tf=rt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mf(t,n)));break;case 22:f=t.memoizedState!==null,x=o!==null&&o.memoizedState!==null;var A=Hn,B=Kt,J=Aa;Hn=A||f,Aa=J||f,Kt=B||x,ri(n,t,r),Kt=B,Aa=J,Hn=A,si(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||x||Hn||Kt||(n=x||Kt,r=Hn,o=Kt,Hn=f||Hn,Kt=n,Vr(t,2),Hn=r,Kt=o),!f&&Aa||Yp(t,f)),u&4&&(n=t.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,Mf(t,r))));break;case 19:ri(n,t,r),si(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mf(t,n)));break;case 30:u&512&&(Kt||o===null||Wn(o,o.return)),u=hn(),f=yc,x=(r&335544064)===r,A=t.memoizedProps,yc=x&&Qa(A.default,A.update)!=="none",ri(n,t,r),si(t),x&&o!==null&&it&&(t.flags|=4),yc=f,it=u;break;case 21:break;case 7:u&512&&(Kt||o===null||Wn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:ri(n,t,r),si(t)}}function si(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(ey(o)){r=o;break}o=o.return}o=null;for(var u=t.return;u!==null;){if(zp(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(Op(u))break;u=u.return}var x=o;if(r==null)throw Error(s(160));switch(r.tag){case 27:var A=r.stateNode,B=Bp(t);gf(t,B,A,x);break;case 5:var J=r.stateNode;r.flags&32&&(uo(J,""),r.flags&=-33);var le=Bp(t);gf(t,le,J,x);break;case 3:case 4:var xe=r.stateNode.containerInfo,Q=Bp(t);Hp(t,Q,xe,x);break;default:throw Error(s(161))}}catch(re){Jt(t,t.return,re)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gy(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Wo=!0,n.reset(),Wo=!1),t=t.sibling}}function Do(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)vy(n,t),n=n.sibling;else oy(n)}function vy(t,n){var r=t.alternate;if(r===null)Gp(t,!1);else switch(t.tag){case 3:if(Wp=wa=!1,iy(),Do(n,t),!wa&&!yf){if(t=Ea,t!==null)for(var o=0;o<t.length;o+=3){r=t[o];var u=t[o+1];aS(r,t[o+2]),r=r.ownerDocument.documentElement,r!==null&&r.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Wp=!0}Ea=null;break;case 5:Do(n,t);break;case 4:o=wa,wa=!1,Do(n,t),wa&&(yf=!0),wa=o;break;case 22:t.memoizedState===null&&(r.memoizedState!==null?Gp(t,!1):Do(n,t));break;case 30:o=wa,u=iy(),wa=!1,Do(n,t),wa&&(t.flags|=4);var f=t.memoizedProps,x=t.stateNode;n=Za(f,x),x=Za(r.memoizedProps,x);var A=Qa(f.default,f.update);A==="none"?n=!1:(f=r.memoizedState,r.memoizedState=null,r=t.child,pi=0,n=jp(t,r,n,x,A,f,!0),pi!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Io(t,t.memoizedProps.onUpdate),Ea=u):u!==null&&(u.push.apply(u,Ea),Ea=u),wa=(t.flags&32)!==0?!0:o;break;default:Do(n,t)}}function Ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cy(t,n.alternate,n),n=n.sibling}function Vr(t,n){for(t=t.child;t!==null;){var r=t,o=n;switch(r.tag){case 0:case 11:case 14:case 15:Gr(4,r,r.return),Vr(r,o);break;case 1:Wn(r,r.return);var u=r.stateNode;typeof u.componentWillUnmount=="function"&&$x(r,r.return,u),Vr(r,o);break;case 27:(o&2)!==0&&gS(r.stateNode,r.type,r.memoizedProps);case 5:Wn(r,r.return),r.tag!==5&&r.tag!==27||xc(r),Vr(r,o);break;case 6:xc(r);break;case 26:Wn(r,r.return),u=r.stateNode,r.memoizedState!==null||u===null||Kt||u.parentNode.removeChild(u),Vr(r,o);break;case 22:r.memoizedState===null&&Vr(r,o);break;case 30:Wn(r,r.return),Vr(r,o);break;case 7:Wn(r,r.return);default:Vr(r,o)}t=t.sibling}}function ra(t,n,r){for(r=(n.subtreeFlags&8772)!==0?r:r&-2,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags,A=(r&1)!==0;switch(f.tag){case 0:case 11:case 15:ra(u,f,r),_c(4,f);break;case 1:if(ra(u,f,r),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Jt(o,o.return,le)}if(o=f,u=o.updateQueue,u!==null){var B=o.stateNode;try{var J=u.shared.hiddenCallbacks;if(J!==null)for(u.shared.hiddenCallbacks=null,u=0;u<J.length;u++)B_(J[u],B)}catch(le){Jt(o,o.return,le)}}A&&x&64&&Kx(f),ba(f,f.return);break;case 27:(r&2)!==0&&ty(f);case 5:f.tag!==5&&f.tag!==27||Jx(f),ra(u,f,r),A&&o===null&&x&4&&Ip(f),ba(f,f.return);break;case 6:Jx(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Hn||Lm(Cc(B.ownerDocument),f.type,B),ra(u,f,r),A&&o===null&&x&4&&Ip(f),ba(f,f.return);break;case 12:ra(u,f,r);break;case 31:ra(u,f,r),A&&x&4&&hy(u,f);break;case 13:ra(u,f,r),A&&x&4&&py(u,f);break;case 22:f.memoizedState===null&&ra(u,f,r),ba(f,f.return);break;case 30:ra(u,f,r),ba(f,f.return);break;case 7:ba(f,f.return);default:ra(u,f,r)}n=n.sibling}}function Qp(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&rc(r))}function Kp(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rc(t))}function ki(t,n,r,o){var u=(r&335544064)===r;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)_y(t,n,r,o),n=n.sibling;else u&&sy(n)}function _y(t,n,r,o){var u=(r&335544064)===r;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xf(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:ki(t,n,r,o),f&2048&&_c(9,n);break;case 1:ki(t,n,r,o);break;case 3:ki(t,n,r,o),u&&Wp&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&rc(f)));break;case 12:if(f&2048){ki(t,n,r,o),f=n.stateNode;try{var x=n.memoizedProps,A=x.id,B=x.onPostCommit;typeof B=="function"&&B(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(J){Jt(n,n.return,J)}}else ki(t,n,r,o);break;case 31:ki(t,n,r,o);break;case 13:ki(t,n,r,o);break;case 23:break;case 22:x=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&xf(A),x._visibility&2?ki(t,n,r,o):Sc(t,n)):(u&&A!==null&&A.memoizedState!==null&&xf(n),x._visibility&2?ki(t,n,r,o):(x._visibility|=2,No(t,n,r,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Qp(A,n);break;case 24:ki(t,n,r,o),f&2048&&Kp(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Ta(f.child,!0),Ta(n.child,!0))),ki(t,n,r,o);break;default:ki(t,n,r,o)}}function No(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,A=r,B=o,J=x.flags;switch(x.tag){case 0:case 11:case 15:No(f,x,A,B,u),_c(8,x);break;case 23:break;case 22:var le=x.stateNode;x.memoizedState!==null?le._visibility&2?No(f,x,A,B,u):Sc(f,x):(le._visibility|=2,No(f,x,A,B,u)),u&&J&2048&&Qp(x.alternate,x);break;case 24:No(f,x,A,B,u),u&&J&2048&&Kp(x.alternate,x);break;default:No(f,x,A,B,u)}n=n.sibling}}function Sc(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Sc(r,o),u&2048&&Qp(o.alternate,o);break;case 24:Sc(r,o),u&2048&&Kp(o.alternate,o);break;default:Sc(r,o)}n=n.sibling}}var Us=8192;function Ls(t,n,r){if(t.subtreeFlags&Us)for(t=t.child;t!==null;)xy(t,n,r),t=t.sibling}function xy(t,n,r){switch(t.tag){case 26:Ls(t,n,r),t.flags&Us&&(t.memoizedState!==null?Fw(r,aa,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&AS(r,t)));break;case 5:Ls(t,n,r),t.flags&Us&&(t=t.stateNode,(n&335544128)===n&&AS(r,t));break;case 3:case 4:var o=aa;aa=Cc(t.stateNode.containerInfo),Ls(t,n,r),aa=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Us,Us=16777216,Ls(t,n,r),Us=o):Ls(t,n,r));break;case 30:if((t.flags&Us)!==0&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var u=t.stateNode;u.paired=null,Ai===null&&(Ai=new Map),Ai.set(o,u)}Ls(t,n,r);break;default:Ls(t,n,r)}}function yy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Gn=o,My(o,t)}yy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sy(t),t=t.sibling}function Sy(t){switch(t.tag){case 0:case 11:case 15:Mc(t),t.flags&2048&&Gr(9,t,t.return);break;case 3:Mc(t);break;case 12:Mc(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bf(t)):Mc(t);break;default:Mc(t)}}function bf(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Gn=o,My(o,t)}yy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Gr(8,n,n.return),bf(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,bf(n));break;default:bf(n)}t=t.sibling}}function My(t,n){for(;Gn!==null;){var r=Gn;switch(r.tag){case 0:case 11:case 15:Gr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:rc(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Gn=o;else e:for(r=t;Gn!==null;){o=Gn;var u=o.sibling,f=o.return;if(fy(o),o===r){Gn=null;break e}if(u!==null){u.return=f,Gn=u;break e}Gn=f}}}var LA={getCacheForType:function(t){var n=Xn(Tn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return Xn(Tn).controller.signal}},PA=typeof WeakMap=="function"?WeakMap:Map,Wt=0,cn=null,Lt=null,zt=0,$t=0,wi=null,kr=!1,Uo=!1,$p=!1,rr=0,_n=0,Xr=0,Ps=0,Ef=0,Ri=0,Lo=0,bc=null,gi=null,Jp=!1,Tf=0,by=0,Af=1/0,wf=null,jr=null,mn=0,sa=null,Os=null,Ca=0,em=0,tm=null,Ey=null,Po=null,Oo=null,zo=null,Ec=0,Rf=null;function Ci(){return(Wt&2)!==0&&zt!==0?zt&-zt:Me.T!==null?fm():Au()}function Ty(){if(Ri===0)if((zt&536870912)===0||Nt){var t=ms;ms<<=1,(ms&3932160)===0&&(ms=262144),Ri=t}else Ri=536870912;return t=jn.current,t!==null&&(t.flags|=32),Ri}function Io(t,n){if(n!=null){var r=t.stateNode,o=r.ref;o===null&&(o=r.ref=rS(Za(t.memoizedProps,r))),Oo===null&&(Oo=[]),Oo.push(n.bind(null,o))}}function vi(t,n,r){(t===cn&&($t===2||$t===9)||t.cancelPendingCommit!==null)&&(Fo(t,0),qr(t,zt,Ri,!1)),Ar(t,r),((Wt&2)===0||t!==cn)&&(t===cn&&((Wt&2)===0&&(Ps|=r),_n===4&&qr(t,zt,Ri,!1)),Da(t))}function Ay(t,n,r){if((Wt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Er(t,n),u=o?IA(t,n):im(t,n,!0),f=o;do{if(u===0){Uo&&!o&&qr(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!OA(r)){u=im(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;u=bc;var B=A.current.memoizedState.isDehydrated;if(B&&(Fo(A,x).flags|=256),x=im(A,x,!1),x!==2&&x!==6){if($p&&!B){A.errorRecoveryDisabledLanes|=f,Ps|=f,u=4;break e}f=gi,gi=u,f!==null&&(gi===null?gi=f:gi.push.apply(gi,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Fo(t,0),qr(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qr(o,n,Ri,!kr);break e;case 2:gi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Tf+300-rt(),10<u)){if(qr(o,n,Ri,!kr),br(o,0,!0)!==0)break e;Ca=n,o.timeoutHandle=Mm(wy.bind(null,o,r,gi,wf,Jp,n,Ri,Ps,Lo,kr,f,"Throttled",-0,0),u);break e}wy(o,r,gi,wf,Jp,n,Ri,Ps,Lo,kr,f,null,-0,0)}}break}while(!0);Da(t)}function wy(t,n,r,o,u,f,x,A,B,J,le,xe,Q,re){t.timeoutHandle=-1;var Ie=n.subtreeFlags,et=(f&335544064)===f;if(xe=null,(et||Ie&8192||(Ie&16785408)===16785408)&&(xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},Ai=null,xy(n,f,xe),et&&(Ie=xe,et=t.containerInfo,et=(et.nodeType===9?et:et.ownerDocument).__reactViewTransition,et!=null&&(Ie.count++,Ie.waitingForViewTransition=!0,Ie=Uc.bind(Ie),et.finished.then(Ie,Ie))),Ie=(f&62914560)===f?Tf-rt():(f&4194048)===f?by-rt():0,Ie=Bw(xe,Ie),Ie!==null)){Ca=f,t.cancelPendingCommit=Ie(Oy.bind(null,t,n,f,r,o,u,x,A,B,J,le,xe,null,Q,re)),qr(t,f,x,!J);return}Oy(t,n,f,r,o,u,x,A,B,J,le,xe)}function OA(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],f=u.getSnapshot;u=u.value;try{if(!Ei(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qr(t,n,r,o){n=kl(t,n),n&=~Ef,n&=~Ps,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Mt(u),x=1<<f;o[f]=-1,u&=~x}r!==0&&bu(t,r,n)}function Cf(){return(Wt&6)===0?(Tc(0),!1):!0}function nm(){if(Lt!==null){if($t===0)var t=Lt.return;else t=Lt,Ja=Ms=null,up(t),Eo=null,lc=0,t=Lt;for(;t!==null;)Qx(t.alternate,t),t=t.return;Lt=null}}function Fo(t,n){var r=t.timeoutHandle;return r!==-1&&(t.timeoutHandle=-1,rw(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ca=0,nm(),cn=t,Lt=r=Ka(t.current,null),zt=n,$t=0,wi=null,kr=!1,Uo=Er(t,n),$p=!1,Lo=Ri=Ef=Ps=Xr=_n=0,gi=bc=null,Jp=!1,rr=kl(t,n),zu(),r}function Ry(t,n){bt=null,Me.H=lf,n===bo||n===Wu?(n=O_(),$t=3):n===Kh?(n=O_(),$t=4):$t=n===Tp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wi=n,Lt===null&&(_n=1,cf(t,Bi(n,t.current)))}function Cy(){var t=jn.current;return t===null?!0:(zt&4194048)===zt?Kn===null:(zt&62914560)===zt||(zt&536870912)!==0?t===Kn:!1}function Dy(){var t=Me.H;return Me.H=lf,t===null?lf:t}function Ny(){var t=Me.A;return Me.A=LA,t}function Df(){_n=4,kr||(zt&4194048)!==zt&&jn.current!==null||(Uo=!0),(Xr&134217727)===0&&(Ps&134217727)===0||cn===null||qr(cn,zt,Ri,!1)}function im(t,n,r){var o=Wt;Wt|=2;var u=Dy(),f=Ny();(cn!==t||zt!==n)&&(wf=null,Fo(t,n)),n=!1;var x=_n;e:do try{if($t!==0&&Lt!==null){var A=Lt,B=wi;switch($t){case 8:nm(),x=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var J=$t;if($t=0,wi=null,Bo(t,A,B,J),r&&Uo){x=0;break e}break;default:J=$t,$t=0,wi=null,Bo(t,A,B,J)}}zA(),x=_n;break}catch(le){Ry(t,le)}while(!0);return n&&t.shellSuspendCounter++,Ja=Ms=null,Wt=o,Me.H=u,Me.A=f,Lt===null&&(cn=null,zt=0,zu()),x}function zA(){for(;Lt!==null;)Uy(Lt)}function IA(t,n){var r=Wt;Wt|=2;var o=Dy(),u=Ny();cn!==t||zt!==n?(wf=null,Af=rt()+500,Fo(t,n)):Uo=Er(t,n);e:do try{if($t!==0&&Lt!==null){n=Lt;var f=wi;t:switch($t){case 1:$t=0,wi=null,Bo(t,n,f,1);break;case 2:case 9:if(L_(f)){$t=0,wi=null,Ly(n);break}n=function(){$t!==2&&$t!==9||cn!==t||($t=7),Da(t)},f.then(n,n);break e;case 3:$t=7;break e;case 4:$t=5;break e;case 7:L_(f)?($t=0,wi=null,Ly(n)):($t=0,wi=null,Bo(t,n,f,7));break;case 5:var x=null;switch(Lt.tag){case 26:x=Lt.memoizedState;case 5:case 27:var A=Lt;if(x?ES(x):A.stateNode.complete){$t=0,wi=null;var B=A.sibling;if(B!==null)Lt=B;else{var J=A.return;J!==null?(Lt=J,Nf(J)):Lt=null}break t}}$t=0,wi=null,Bo(t,n,f,5);break;case 6:$t=0,wi=null,Bo(t,n,f,6);break;case 8:nm(),_n=6;break e;default:throw Error(s(462))}}FA();break}catch(le){Ry(t,le)}while(!0);return Ja=Ms=null,Me.H=o,Me.A=u,Wt=r,Lt!==null?0:(cn=null,zt=0,zu(),_n)}function FA(){for(;Lt!==null&&!Pe();)Uy(Lt)}function Uy(t){var n=Yx(t.alternate,t,rr);t.memoizedProps=t.pendingProps,n===null?Nf(t):Lt=n}function Ly(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Gx(r,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=Gx(r,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:up(n);var o=n;o===Bn&&(Nt?(Vu(o),o.tag===5&&o.stateNode!=null&&(un=o.stateNode)):(Vu(o),Nt=!0));default:Qx(r,n),n=Lt=M_(n,rr),n=Yx(r,n,rr)}t.memoizedProps=t.pendingProps,n===null?Nf(t):Lt=n}function Bo(t,n,r,o){Ja=Ms=null,up(n),Eo=null,lc=0;var u=n.return;try{if(TA(t,u,n,r,zt)){_n=1,cf(t,Bi(r,t.current)),Lt=null;return}}catch(f){if(u!==null)throw Lt=u,f;_n=1,cf(t,Bi(r,t.current)),Lt=null;return}n.flags&32768?(Nt||o===1?t=!0:Uo||(zt&536870912)!==0?t=!1:(kr=t=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Py(n,t)):Nf(n)}function Nf(t){var n=t;do{if((n.flags&32768)!==0){Py(n,kr);return}t=n.return;var r=CA(n.alternate,n,rr);if(r!==null){Lt=r;return}if(n=n.sibling,n!==null){Lt=n;return}Lt=n=t}while(n!==null);_n===0&&(_n=5)}function Py(t,n){do{var r=DA(t.alternate,t);if(r!==null){r.flags&=32767,Lt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=r}while(t!==null);_n=6,Lt=null}function Oy(t,n,r,o,u,f,x,A,B,J,le,xe){t.cancelPendingCommit=null;do Uf();while(mn!==0);if((Wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===cn&&(Lt=cn=null,zt=0),Os=n,sa=t,Ca=r,tm=u,Ey=o,BA(t,n,r,x,A,B,xe)}}function BA(t,n,r,o,u,f,x){var A=n.lanes|n.childLanes;if(em=A,A|=Fh,Mu(t,r,A,o,u,f),Oo=null,(r&335544064)===r?(zo=hA(t),o=10262):(zo=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(t.callbackNode=null,t.callbackPriority=0,jA(Re,function(){return om(),null})):(t.callbackNode=null,t.callbackPriority=0),vf=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Me.T,Me.T=null,u=ke.p,ke.p=2,f=Wt,Wt|=4;try{NA(t,n,r)}finally{Wt=f,ke.p=u,Me.T=o}}mn=1,vf?Po=fw(x,t.containerInfo,zo,am,rm,GA,sm,om,HA):(am(),rm(),sm())}function HA(t){if(mn!==0){var n=sa.onRecoverableError;n(t,{componentStack:null})}}function GA(){mn===3&&(mn=0,vy(Os,sa),mn=4)}function am(){if(mn===1){mn=0;var t=sa,n=Os,r=Ca,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Me.T,Me.T=null;var u=ke.p;ke.p=2;var f=Wt;Wt|=4;try{yc=yf=!1,my(n,t,r),r=xm;var x=d_(t.containerInfo),A=r.focusedElem,B=r.selectionRange;if(x!==A&&A&&A.ownerDocument&&f_(A.ownerDocument.documentElement,A)){if(B!==null&&Lh(A)){var J=B.start,le=B.end;if(le===void 0&&(le=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(le,A.value.length);else{var xe=A.ownerDocument||document,Q=xe&&xe.defaultView||window;if(Q.getSelection){var re=Q.getSelection(),Ie=A.textContent.length,et=Math.min(B.start,Ie),Et=B.end===void 0?et:Math.min(B.end,Ie);!re.extend&&et>Et&&(x=Et,Et=et,et=x);var $=u_(A,et),j=u_(A,Et);if($&&j&&(re.rangeCount!==1||re.anchorNode!==$.node||re.anchorOffset!==$.offset||re.focusNode!==j.node||re.focusOffset!==j.offset)){var ie=xe.createRange();ie.setStart($.node,$.offset),re.removeAllRanges(),et>Et?(re.addRange(ie),re.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),re.addRange(ie))}}}}for(xe=[],re=A;re=re.parentNode;)re.nodeType===1&&xe.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var _e=xe[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Wo=!!_m,xm=_m=null}finally{Wt=f,ke.p=u,Me.T=o}}t.current=n,mn=2}}function rm(){if(mn===2){mn=0;var t=sa,n=Os,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=Me.T,Me.T=null;var o=ke.p;ke.p=2;var u=Wt;Wt|=4;try{cy(t,n.alternate,n)}finally{Wt=u,ke.p=o,Me.T=r}}mn=3}}function sm(){if(mn===4||mn===3){mn=0;var t=Po;Po=null,Ue();var n=sa,r=Os,o=Ca,u=Ey,f=(o&335544064)===o?10262:10256;if((r.subtreeFlags&f)!==0||(r.flags&f)!==0?mn=5:(mn=0,Os=sa=null,zy(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(jr=null),ql(o),r=r.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Je,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Me.T,f=ke.p,ke.p=2,Me.T=null;try{for(var x=n.onRecoverableError,A=0;A<u.length;A++){var B=u[A];x(B.value,{componentStack:B.stack})}}finally{Me.T=r,ke.p=f}}if(u=Oo,x=zo,zo=null,u!==null&&(Oo=null,x===null&&(x=[]),t!==null))for(B=0;B<u.length;B++)r=(0,u[B])(x),r!==void 0&&t.finished.finally(r);(Ca&3)!==0&&Uf(),Da(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Rf?Ec++:(Ec=0,Rf=n):(Ec=0,Rf=null),Tc(0)}}function zy(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,rc(n)))}function Uf(){return Po!==null&&(Po.skipTransition(),Po=null),am(),rm(),sm(),om()}function om(){if(mn!==5)return!1;var t=sa,n=em;em=0;var r=ql(Ca),o=Me.T,u=ke.p;try{ke.p=32>r?32:r,Me.T=null,r=tm,tm=null;var f=sa,x=Ca;if(mn=0,Os=sa=null,Ca=0,(Wt&6)!==0)throw Error(s(331));var A=Wt;if(Wt|=4,Sy(f.current),_y(f,f.current,x,r),Wt=A,Tc(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Je,f)}catch{}return!0}finally{ke.p=u,Me.T=o,zy(t,n)}}function Iy(t,n,r){n=Bi(r,n),n=Ep(t.stateNode,n,2),t=Ir(t,n,2),t!==null&&(Ar(t,2),Da(t))}function Jt(t,n,r){if(t.tag===3)Iy(t,t,r);else for(;n!==null;){if(n.tag===3){Iy(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(jr===null||!jr.has(o))){t=Bi(r,t),r=Lx(2),o=Ir(n,r,2),o!==null&&(Px(r,o,n,t),Ar(o,2),Da(o));break}}n=n.return}}function lm(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new PA;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||($p=!0,u.add(r),t=VA.bind(null,t,n,r),n.then(t,t))}function VA(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,cn===t&&(zt&r)===r&&((_n===4||_n===3&&(zt&62914560)===zt&&300>rt()-Tf)&&(Wt&2)===0?Fo(t,0):Ef|=r,Lo===zt&&(Lo=0)),Da(t)}function Fy(t,n){n===0&&(n=Xl()),t=xs(t,n),t!==null&&(Ar(t,n),Da(t))}function kA(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Fy(t,r)}function XA(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Fy(t,r)}function jA(t,n){return He(t,n)}var Ho=null,Go=null,cm=!1,Lf=!1,um=!1,Wr=0;function Da(t){t!==Go&&t.next===null&&(Go===null?Ho=Go=t:Go=Go.next=t),Lf=!0,cm||(cm=!0,WA())}function Tc(t,n){if(!um&&Lf){um=!0;do for(var r=!1,o=Ho;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Mt(42|t)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Vy(o,f))}else f=zt,f=br(o,o===cn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Er(o,f)||(r=!0,Vy(o,f));o=o.next}while(r);um=!1}}function qA(){By()}function By(){Lf=cm=!1;var t=0;Wr!==0&&aw()&&(t=Wr);for(var n=rt(),r=null,o=Ho;o!==null;){var u=o.next,f=Hy(o,n);f===0?(o.next=null,r===null?Ho=u:r.next=u,u===null&&(Go=r)):(r=o,(t!==0||(f&3)!==0)&&(Lf=!0)),o=u}mn!==0&&mn!==5||Tc(t),Wr!==0&&(Wr=0)}function Hy(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Mt(f),A=1<<x,B=u[x];B===-1?((A&r)===0||(A&o)!==0)&&(u[x]=lo(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=cn,r=zt,r=br(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&($t===2||$t===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qe(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Er(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&qe(o),ql(r)){case 2:case 8:r=W;break;case 32:r=Re;break;case 268435456:r=Xe;break;default:r=Re}return o=Gy.bind(null,t),r=He(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&qe(o),t.callbackPriority=2,t.callbackNode=null,2}function Gy(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Uf()&&t.callbackNode!==r)return null;var o=zt;return o=br(t,t===cn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ay(t,o,n),Hy(t,rt()),t.callbackNode!=null&&t.callbackNode===r?Gy.bind(null,t):null)}function Vy(t,n){if(Uf())return null;Ay(t,n,!0)}function WA(){sw(function(){(Wt&6)!==0?He(Ht,qA):By()})}function fm(){if(Wr===0){var t=Ts;t===0&&(t=oo,oo<<=1,(oo&261888)===0&&(oo=256)),Wr=t}return Wr}function ky(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ru(t)}function YA(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var f=ky((u[se]||null).action),x=o.submitter;x&&(n=(n=x[se]||null)?ky(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new Uu("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wr!==0){var B=new FormData(u,x);xp(r,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=new FormData(u,x),xp(r,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var dm=0;dm<Ih.length;dm++){var hm=Ih[dm],ZA=hm.toLowerCase(),QA=hm[0].toUpperCase()+hm.slice(1);na(ZA,"on"+QA)}na(m_,"onAnimationEnd"),na(g_,"onAnimationIteration"),na(v_,"onAnimationStart"),na("dblclick","onDoubleClick"),na("focusin","onFocus"),na("focusout","onBlur"),na(rA,"onTransitionRun"),na(sA,"onTransitionStart"),na(oA,"onTransitionCancel"),na(__,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ac));function Xy(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],B=A.instance,J=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=J;try{f(u)}catch(le){Ou(le)}u.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(A=o[x],B=A.instance,J=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=J;try{f(u)}catch(le){Ou(le)}u.currentTarget=null,f=B}}}}function Pt(t,n){var r=n[oe];r===void 0&&(r=n[oe]=new Set);var o=t+"__bubble";r.has(o)||(jy(n,t,2,!1),r.add(o))}function pm(t,n,r){var o=0;n&&(o|=4),jy(r,t,o,n)}var Pf="_reactListening"+Math.random().toString(36).slice(2);function mm(t){if(!t[Pf]){t[Pf]=!0,Nn.forEach(function(r){r!=="selectionchange"&&(KA.has(r)||pm(r,!1,t),pm(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pf]||(n[Pf]=!0,pm("selectionchange",!1,n))}}function jy(t,n,r,o){switch(PS(n)){case 2:var u=kw;break;case 8:u=Xw;break;default:u=Om}r=u.bind(null,n,r,t),u=void 0,!bh||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function gm(t,n,r,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=gt(A),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue e}A=A.parentNode}}o=o.return}jv(function(){var J=f,le=Sh(r),xe=[];e:{var Q=x_.get(t);if(Q!==void 0){var re=Uu,Ie=t;switch(t){case"keypress":if(Du(r)===0)break e;case"keydown":case"keyup":re=OT;break;case"focusin":Ie="focus",re=wh;break;case"focusout":Ie="blur",re=wh;break;case"beforeblur":case"afterblur":re=wh;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=bT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=HT;break;case m_:case g_:case v_:re=AT;break;case __:re=VT;break;case"scroll":case"scrollend":re=ST;break;case"wheel":re=XT;break;case"copy":case"cut":case"paste":re=RT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Qv;break;case"submit":re=FT;break;case"toggle":case"beforetoggle":re=qT}var et=(n&4)!==0,Et=!et&&(t==="scroll"||t==="scrollend"),$=et?Q!==null?Q+"Capture":null:Q;et=[];for(var j=J,ie;j!==null;){var _e=j;if(ie=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ie===null||$===null||(_e=Yl(j,$),_e!=null&&et.push(wc(j,_e,ie))),Et)break;j=j.return}0<et.length&&(Q=new re(Q,Ie,null,r,le),xe.push({event:Q,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",re&&r!==yh&&(Ie=r.relatedTarget||r.fromElement)&&(gt(Ie)||Ie[ae]))break e;(Q||re)&&(Ie=le.window===le?le:(re=le.ownerDocument)?re.defaultView||re.parentWindow:window,Q?(re=r.relatedTarget||r.toElement,Q=J,re=re?gt(re):null,re!==null&&(Et=c(re),et=re.tag,re!==Et||et!==5&&et!==27&&et!==6)&&(re=null)):(Q=null,re=J),Q!==re&&(et=Yv,_e="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(et=Qv,_e="onPointerLeave",$="onPointerEnter",j="pointer"),Et=Q==null?Ie:kt(Q),ie=re==null?Ie:kt(re),Ie=new et(_e,j+"leave",Q,r,le),Ie.target=Et,Ie.relatedTarget=ie,_e=null,gt(le)===J&&(et=new et($,j+"enter",re,r,le),et.target=ie,et.relatedTarget=Et,_e=et),Et=_e,et=Q&&re?L(Q,re,$A):null,Q!==null&&qy(xe,Ie,Q,et,!1),re!==null&&Et!==null&&qy(xe,Et,re,et,!0)))}e:{if(Q=J?kt(J):window,re=Q.nodeName&&Q.nodeName.toLowerCase(),re==="select"||re==="input"&&Q.type==="file")var Ze=a_;else if(n_(Q))if(r_)Ze=nA;else{Ze=eA;var It=JT}else re=Q.nodeName,!re||re.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?J&&xh(J.elementType)&&(Ze=a_):Ze=tA;if(Ze&&(Ze=Ze(t,J))){i_(xe,Ze,r,le);break e}It&&It(t,Q,J)}switch(It=J?kt(J):window,t){case"focusin":(n_(It)||It.contentEditable==="true")&&(mo=It,Ph=J,nc=null);break;case"focusout":nc=Ph=mo=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,h_(xe,r,le);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":h_(xe,r,le)}var st;if(Ch)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else po?e_(t,r)&&(dt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(dt="onCompositionStart");dt&&(Kv&&r.locale!=="ko"&&(po||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&po&&(st=qv()):(Rr=le,Eh="value"in Rr?Rr.value:Rr.textContent,po=!0)),It=Of(J,dt),0<It.length&&(dt=new Zv(dt,t,null,r,le),xe.push({event:dt,listeners:It}),st?dt.data=st:(st=t_(r),st!==null&&(dt.data=st)))),(st=YT?ZT(t,r):QT(t,r))&&(dt=Of(J,"onBeforeInput"),0<dt.length&&(It=new Zv("onBeforeInput","beforeinput",null,r,le),xe.push({event:It,listeners:dt}),It.data=st)),YA(xe,t,J,r,le)}Xy(xe,n)})}function wc(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Of(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yl(t,r),u!=null&&o.unshift(wc(t,u,f)),u=Yl(t,n),u!=null&&o.push(wc(t,u,f))),t.tag===3)return o;t=t.return}return[]}function $A(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qy(t,n,r,o,u){for(var f=n._reactName,x=[];r!==null&&r!==o;){var A=r,B=A.alternate,J=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||J===null||(B=J,u?(J=Yl(r,f),J!=null&&x.unshift(wc(r,J,B))):u||(J=Yl(r,f),J!=null&&x.push(wc(r,J,B)))),r=r.return}x.length!==0&&t.push({event:n,listeners:x})}var JA=/\r\n?/g,ew=/\u0000|\uFFFD/g;function Wy(t){return(typeof t=="string"?t:""+t).replace(JA,`
`).replace(ew,"")}function Yy(t,n){return n=Wy(n),Wy(t)===n}function en(t,n,r,o,u,f){switch(r){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||uo(t,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&uo(t,""+o);else return;break;case"className":qt(t,"class",o);break;case"tabIndex":qt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(t,r,o);break;case"style":kv(t,o,f);return;case"data":if(n!=="object"){qt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ru(o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&en(t,n,"name",u.name,u,null),en(t,n,"formEncType",u.formEncType,u,null),en(t,n,"formMethod",u.formMethod,u,null),en(t,n,"formTarget",u.formTarget,u,null)):(en(t,n,"encType",u.encType,u,null),en(t,n,"method",u.method,u,null),en(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ru(o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=ya);return;case"onScroll":o!=null&&Pt("scroll",t);return;case"onScrollEnd":o!=null&&Pt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));f?.__html!==r&&(t.innerHTML=r)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Ru(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Pt("beforetoggle",t),Pt("toggle",t),bi(t,"popover",o);break;case"xlinkActuate":Fn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Fn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Fn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Fn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Fn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Fn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bi(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")r=xT.get(r)||r,bi(t,r,o);else return}it=!0}function vm(t,n,r,o,u,f){switch(r){case"style":kv(t,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));f?.__html!==r&&(t.innerHTML=r)}}break;case"children":if(typeof o=="string")uo(t,o);else if(typeof o=="number"||typeof o=="bigint")uo(t,""+o);else return;break;case"onScroll":o!=null&&Pt("scroll",t);return;case"onScrollEnd":o!=null&&Pt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=ya);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!We.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),f=r.slice(2,u?r.length-7:void 0),n=t[se]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(f,o,u);break e}it=!0,r in t?t[r]=o:o===!0?t.setAttribute(r,""):bi(t,r,o)}return}it=!0}function Yn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pt("error",t),Pt("load",t);var o=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var x=r[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(t,n,f,x,r,null)}}u&&en(t,n,"srcSet",r.srcSet,r,null),o&&en(t,n,"src",r.src,r,null);return;case"input":Pt("invalid",t);var A=f=x=u=null,B=null,J=null;for(o in r)if(r.hasOwnProperty(o)){var le=r[o];if(le!=null)switch(o){case"name":u=le;break;case"type":x=le;break;case"checked":B=le;break;case"defaultChecked":J=le;break;case"value":f=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:en(t,n,o,le,r,null)}}Bv(t,f,A,B,J,x,u,!1);return;case"select":Pt("invalid",t),o=x=f=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:en(t,n,u,A,r,null)}n=f,r=x,t.multiple=!!o,n!=null?co(t,!!o,n,!1):r!=null&&co(t,!!o,r,!0);return;case"textarea":Pt("invalid",t),f=u=o=null;for(x in r)if(r.hasOwnProperty(x)&&(A=r[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:en(t,n,x,A,r,null)}Gv(t,o,u,f);return;case"option":for(B in r)r.hasOwnProperty(B)&&(o=r[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":en(t,n,B,o,r,null));return;case"dialog":Pt("beforetoggle",t),Pt("toggle",t),Pt("cancel",t),Pt("close",t);break;case"iframe":case"object":Pt("load",t);break;case"video":case"audio":for(o=0;o<Ac.length;o++)Pt(Ac[o],t);break;case"image":Pt("error",t),Pt("load",t);break;case"details":Pt("toggle",t);break;case"embed":case"source":case"link":Pt("error",t),Pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in r)if(r.hasOwnProperty(J)&&(o=r[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(t,n,J,o,r,null)}return;default:if(xh(n)){for(le in r)r.hasOwnProperty(le)&&(o=r[le],o!==void 0&&vm(t,n,le,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&en(t,n,A,o,r,null))}var tw={};function nw(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,B=null,J=null,le=null;for(re in r){var xe=r[re];if(r.hasOwnProperty(re)&&xe!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":B=xe;default:o.hasOwnProperty(re)||en(t,n,re,null,o,xe)}}for(var Q in o){var re=o[Q];if(xe=r[Q],o.hasOwnProperty(Q)&&(re!=null||xe!=null))switch(Q){case"type":re!==xe&&(it=!0),f=re;break;case"name":re!==xe&&(it=!0),u=re;break;case"checked":re!==xe&&(it=!0),J=re;break;case"defaultChecked":re!==xe&&(it=!0),le=re;break;case"value":re!==xe&&(it=!0),x=re;break;case"defaultValue":re!==xe&&(it=!0),A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:re!==xe&&en(t,n,Q,re,o,xe)}}vh(t,x,A,B,J,le,f,u);return;case"select":re=x=A=Q=null;for(f in r)if(B=r[f],r.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":re=B;default:o.hasOwnProperty(f)||en(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=r[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":f!==B&&(it=!0),Q=f;break;case"defaultValue":f!==B&&(it=!0),A=f;break;case"multiple":f!==B&&(it=!0),x=f;default:f!==B&&en(t,n,u,f,o,B)}n=A,r=x,o=re,Q!=null?co(t,!!r,Q,!1):!!o!=!!r&&(n!=null?co(t,!!r,n,!0):co(t,!!r,r?[]:"",!1));return;case"textarea":re=Q=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:en(t,n,A,null,o,u)}for(x in o)if(u=o[x],f=r[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":u!==f&&(it=!0),Q=u;break;case"defaultValue":u!==f&&(it=!0),re=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&en(t,n,x,u,o,f)}Hv(t,Q,re);return;case"option":for(var Ie in r)Q=r[Ie],r.hasOwnProperty(Ie)&&Q!=null&&!o.hasOwnProperty(Ie)&&(Ie==="selected"?t.selected=!1:en(t,n,Ie,null,o,Q));for(B in o)Q=o[B],re=r[B],o.hasOwnProperty(B)&&Q!==re&&(Q!=null||re!=null)&&(B==="selected"?(Q!==re&&(it=!0),t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol"):en(t,n,B,Q,o,re));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in r)Q=r[et],r.hasOwnProperty(et)&&Q!=null&&!o.hasOwnProperty(et)&&en(t,n,et,null,o,Q);for(J in o)if(Q=o[J],re=r[J],o.hasOwnProperty(J)&&Q!==re&&(Q!=null||re!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:en(t,n,J,Q,o,re)}return;default:if(xh(n)){for(var Et in r)Q=r[Et],r.hasOwnProperty(Et)&&Q!==void 0&&!o.hasOwnProperty(Et)&&vm(t,n,Et,void 0,o,Q);for(le in o)Q=o[le],re=r[le],!o.hasOwnProperty(le)||Q===re||Q===void 0&&re===void 0||vm(t,n,le,Q,o,re);return}}for(var $ in r)Q=r[$],r.hasOwnProperty($)&&Q!=null&&!o.hasOwnProperty($)&&en(t,n,$,null,o,Q);for(xe in o)Q=o[xe],re=r[xe],!o.hasOwnProperty(xe)||Q===re||Q==null&&re==null||en(t,n,xe,Q,o,re)}function Zy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&Zy(x)){for(x=0,A=u.responseEnd,o+=1;o<r.length;o++){var B=r[o],J=B.startTime;if(J>A)break;var le=B.transferSize,xe=B.initiatorType;le&&Zy(xe)&&(B=B.responseEnd,x+=le*(B<A?1:(A-J)/(B-J)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _m=null,xm=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function Qy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ky(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function $y(t,n,r,o){return r=Rc(r).createElement(t),r[Y]=o,r[se]=n,Yn(r,t,n),At(r),r}function ym(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sm=null;function aw(){var t=window.event;return t&&t.type==="popstate"?t===Sm?!1:(Sm=t,!0):(Sm=null,!1)}var Mm=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,Jy=typeof Promise=="function"?Promise:void 0,eS=typeof requestAnimationFrame=="function"?requestAnimationFrame:Mm,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jy<"u"?function(t){return Jy.resolve(null).then(t).catch(ow)}:Mm;function ow(t){setTimeout(function(){throw t})}function Yr(t){return t==="head"}function tS(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),Yo(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Dm(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Dm(r);for(var f=r.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[$e]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=x}}else r==="body"&&Dm(t.ownerDocument.body);r=u}while(r);Yo(n)}function nS(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function iS(t,n,r){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,r!=null&&(t.style.viewTransitionClass=r),r=getComputedStyle(t),r.display==="inline"){if(n=t.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+r.paddingTop,t.marginBottom="-"+r.paddingBottom)}}function aS(t,n){t=t.style,n=n.style;var r=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=r==null||typeof r=="boolean"?"":(""+r).trim(),r=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=r==null||typeof r=="boolean"?"":(""+r).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(r=n.display,t.display=r==null||typeof r=="boolean"?"":r,r=n.margin,r!=null?t.margin=r:(r=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=r==null||typeof r=="boolean"?"":r,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function lw(t,n,r){return r=r.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=r.innerHeight&&t.left<=r.innerWidth}}function bm(t){var n=t.getBoundingClientRect(),r=getComputedStyle(t);return lw(n,r,t)}function cw(t){return t.documentElement.clientHeight}function uw(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fw(t,n,r,o,u,f,x,A,B){var J=n.nodeType===9?n:n.ownerDocument;try{var le=J.startViewTransition({update:function(){var Q=J.defaultView,re=Q.navigation&&Q.navigation.transition,Ie=J.fonts.status;o();var et=[];if(Ie==="loaded"&&(cw(J),J.fonts.status==="loading"&&et.push(J.fonts.ready)),Ie=et.length,t!==null)for(var Et=t.suspenseyImages,$=0,j=0;j<Et.length;j++){var ie=Et[j];if(!ie.complete){var _e=ie.getBoundingClientRect();if(0<_e.bottom&&0<_e.right&&_e.top<Q.innerHeight&&_e.left<Q.innerWidth){if($+=TS(ie),$>Ff){et.length=Ie;break}ie=new Promise(uw.bind(ie)),et.push(ie)}}}if(0<et.length)return Q=Promise.race([Promise.all(et),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(u,u),(re?Promise.allSettled([re.finished,Q]):Q).then(f,f);if(u(),re)return re.finished.then(f,f);f()},types:r});J.__reactViewTransition=le;var xe=[];return le.ready.then(function(){for(var Q=J.documentElement.getAnimations({subtree:!0}),re=0;re<Q.length;re++){var Ie=Q[re],et=Ie.effect,Et=et.pseudoElement;if(Et!=null&&Et.startsWith("::view-transition")){xe.push(Ie),Ie=et.getKeyframes();for(var $=Et=void 0,j=!0,ie=0;ie<Ie.length;ie++){var _e=Ie[ie],Ze=_e.width;if(Et===void 0)Et=Ze;else if(Et!==Ze){j=!1;break}if(Ze=_e.height,$===void 0)$=Ze;else if($!==Ze){j=!1;break}delete _e.width,delete _e.height,_e.transform==="none"&&delete _e.transform}j&&Et!==void 0&&$!==void 0&&(et.setKeyframes(Ie),j=getComputedStyle(et.target,et.pseudoElement),j.width!==Et||j.height!==$)&&(j=Ie[0],j.width=Et,j.height=$,j=Ie[Ie.length-1],j.width=Et,j.height=$,et.setKeyframes(Ie))}}x()},function(Q){J.__reactViewTransition===le&&(J.__reactViewTransition=null);try{typeof Q=="object"&&Q!==null&&Q.name==="InvalidStateError"&&(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null),Q!==null&&B(Q)}finally{o(),u(),x()}}),le.finished.finally(function(){for(var Q=0;Q<xe.length;Q++)xe[Q].cancel();J.__reactViewTransition===le&&(J.__reactViewTransition=null),A()}),le}catch{return o(),u(),x(),null}}function zs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}zs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},zs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,r=t.getAnimations({subtree:!0}),o=[],u=0;u<r.length;u++){var f=r[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&o.push(r[u])}return o},zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function rS(t){return{name:t,group:new zs("group",t),imagePair:new zs("image-pair",t),old:new zs("old",t),new:new zs("new",t)}}function Di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Di.prototype.addEventListener=function(t,n,r){var o=null,u=null;if(!(r!=null&&typeof r!="boolean"&&(o=r.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(oS(f,t,n,r)===-1){var x=this,A=n;r!=null&&typeof r!="boolean"&&r.once===!0&&(A=function(B){x.removeEventListener(t,n,r),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),o!==null&&(u=x.removeEventListener.bind(x,t,n,r),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=Vo(r),f.push({type:t,listener:n,optionsOrUseCapture:r,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,dw,t,A,o)}this._eventListeners=f}};function dw(t,n,r,o){return y(t).addEventListener(n,r,o),!1}Di.prototype.removeEventListener=function(t,n,r){var o=this._eventListeners;if(o!==null&&(n=oS(o,t,n,r),n!==-1)){var u=o[n];r=u.attachedListener;var f=u.cleanup;u=Vo(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,hw,t,r,u),o.splice(n,1),f!==null&&f()}};function hw(t,n,r,o){return y(t).removeEventListener(n,r,o),!1}function Vo(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function sS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function oS(t,n,r,o){if(t.length===0)return-1;o=sS(o);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===r&&sS(f.optionsOrUseCapture)===o)return u}return-1}Di.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var r=this._eventListeners;if(r!==null&&0<r.length||!t.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(r)for(var u=0;u<r.length;u++){var f=r[u];o.addEventListener(f.type,f.attachedListener,Vo(f.optionsOrUseCapture))}if(n.appendChild(o),t=o.dispatchEvent(t),r)for(u=0;u<r.length;u++)f=r[u],o.removeEventListener(f.type,f.attachedListener,Vo(f.optionsOrUseCapture));return n.removeChild(o),t}return n.dispatchEvent(t)},Di.prototype.focus=function(t){g(this._fragmentFiber.child,!0,lS,t,void 0,void 0)};function lS(t,n){return t.tag===6?!1:(t=y(t),Tw(t,n))}Di.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,Em,n,void 0,void 0);for(var r=n.length-1;0<=r&&!lS(n[r],t);r--);};function Em(t,n){return n.push(t),!1}Di.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=y(t),t=Rc(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,pw,t,void 0,void 0))};function pw(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}Di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,mw,t,void 0,void 0)};function mw(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}Di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,gw,t,void 0,void 0);for(var r=n=0;r<oa.length;r++){var o=oa[r];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):oa[n++]=o}oa.length=n}};function gw(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var oa=[],Tm=!1;function vw(t,n,r){oa.push({fragmentInstance:t,observer:n,instance:r}),Tm||(Tm=!0,Aw(function(){Tm=!1;var o=oa;oa=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}Di.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,_w,t,void 0,void 0),t};function _w(t,n){if(t.tag===6){t=t.stateNode;var r=t.ownerDocument.createRange();r.selectNodeContents(t),n.push.apply(n,r.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}Di.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},Di.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var r=[];g(this._fragmentFiber.child,!1,Em,r,void 0,void 0);var o=y(n);if(r.length===0){if(r=o,S(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(r=n)}n=this._fragmentFiber;var u=o=r.compareDocumentPosition(t);return r===t?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(r=b(n)[1],r===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(r).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(r[0]),u=y(r[r.length-1]);var f=S(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),B=x&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=o&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===t||f&&u===t||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||xw(n,this._fragmentFiber,r[0],r[r.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function xw(t,n,r,o,u){var f=gt(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(r=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){r=!0;break e}f=f.return}r=!1}return r}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;e:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===r)&&(n=L(r,f,k),n===null?n=!1:(g(n,!0,I,f,r),f=M,M=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=L(o,f,k),n===null?n=!1:(g(n,!0,N,f,o),f=M,R=M=null,n=f!==null)),n):!1}function cS(t,n){var r=t.ownerDocument.createRange();r.selectNodeContents(t),t=r.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Em,n,void 0,void 0);var r=t!==!1;if(n.length===0){var o=b(this._fragmentFiber);if(o=r?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=y(o),cS(t,r);return}if(o=y(o),o.nodeType!==9){if(o.nodeType===11){r="host"in o?o.host:null,r!==null&&r.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=r?n.length-1:0;o!==(r?-1:n.length);){var u=n[o];u.tag===6?(u=y(u),cS(u,r)):y(u).scrollIntoView(t),o+=r?-1:1}};function yw(t,n){return t=y(t),uS(t,n),!1}function uS(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function fS(t,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];t.addEventListener(u.type,u.attachedListener,Vo(u.optionsOrUseCapture))}t.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(f){for(var x=0,A=0;A<oa.length;A++){var B=oa[A];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(oa[x++]=B)}oa.length=x,f.observe(t)}),uS(t,n))}function Sw(t,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];t.removeEventListener(u.type,u.attachedListener,Vo(u.optionsOrUseCapture))}t.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(f){typeof f.rootMargin=="string"?vw(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Am(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Am(r),mt(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Mw(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[$e])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function bw(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Xi(t.nextSibling),t===null))return null;return t}function dS(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Xi(t.nextSibling),t===null))return null;return t}function wm(t){return t.data==="$?"||t.data==="$~"}function Rm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ew(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Cm=null;function hS(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Xi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function pS(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function Tw(t,n){function r(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",r,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",r,!0)}return o}function Aw(t){eS(function(){eS(function(n){return t(n)})})}function mS(t,n,r){switch(n=Rc(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function gS(t,n,r){for(var o in r){var u=r[o];r.hasOwnProperty(o)&&u!=null&&en(t,n,o,null,tw,u)}r.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ya&&(t.onclick=null),mt(t)}function Dm(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);mt(t)}var ji=new Map,vS=new Set;function Cc(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var sr=ke.d;ke.d={f:ww,r:Rw,D:Cw,C:Dw,L:Nw,m:Uw,X:Pw,S:Lw,M:Ow};function ww(){var t=sr.f(),n=Cf();return t||n}function Rw(t){var n=tt(t);n!==null&&n.tag===5&&n.type==="form"?xx(n):sr.r(t)}var ko=typeof document>"u"?null:document;function _S(t,n,r){var o=ko;if(o&&typeof n=="string"&&n){var u=Ii(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),vS.has(u)||(vS.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Yn(n,"link",t),At(n),o.head.appendChild(n)))}}function Cw(t){sr.D(t),_S("dns-prefetch",t,null)}function Dw(t,n){sr.C(t,n),_S("preconnect",t,n)}function Nw(t,n,r){sr.L(t,n,r);var o=ko;if(o&&t&&n){var u='link[rel="preload"][as="'+Ii(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Ii(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Ii(r.imageSizes)+'"]')):u+='[href="'+Ii(t)+'"]';var f=u;switch(n){case"style":f=Xo(t);break;case"script":f=jo(t)}if(!(ji.has(f)||(t=P({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),ji.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Dc(f))||n==="script"&&o.querySelector(Nc(f))))){var x=o.createElement("link");Yn(x,"link",t),n==="style"&&(x[nt]=!0,x.onload=x.onerror=function(){Qt(x)}),At(x),o.head.appendChild(x)}}}function Uw(t,n){sr.m(t,n);var r=ko;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ii(o)+'"][href="'+Ii(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=jo(t)}if(!ji.has(f)&&(t=P({rel:"modulepreload",href:t},n),ji.set(f,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Nc(f)))return}o=r.createElement("link"),Yn(o,"link",t),At(o),r.head.appendChild(o)}}}function Lw(t,n,r){sr.S(t,n,r);var o=ko;if(o&&t){var u=an(o).hoistableStyles,f=Xo(t);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Dc(f)))A.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},r),(r=ji.get(f))&&Nm(t,r);var B=x=o.createElement("link");At(B),Yn(B,"link",t),B._p=new Promise(function(J,le){B.onload=J,B.onerror=le}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,zf(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function Pw(t,n){sr.X(t,n);var r=ko;if(r&&t){var o=an(r).hoistableScripts,u=jo(t),f=o.get(u);f||(f=r.querySelector(Nc(u)),f||(t=P({src:t,async:!0},n),(n=ji.get(u))&&Um(t,n),f=r.createElement("script"),At(f),Yn(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ow(t,n){sr.M(t,n);var r=ko;if(r&&t){var o=an(r).hoistableScripts,u=jo(t),f=o.get(u);f||(f=r.querySelector(Nc(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=ji.get(u))&&Um(t,n),f=r.createElement("script"),At(f),Yn(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xS(t,n,r,o){var u=(u=pt.current)?Cc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(r=Xo(r.href),n=an(u).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Xo(r.href);var f=an(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(Dc(t)))?f._p||(x.instance=f,x.state.loading=5):(f=ji.get(t),f||(f={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ji.set(t,f)),zw(u,t,f,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(r=jo(r),n=an(u).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xo(t){return'href="'+Ii(t)+'"'}function Dc(t){return'link[rel="stylesheet"]['+t+"]"}function yS(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function zw(t,n,r,o){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[nt]!==!0){o.loading=1;return}}else n=t.createElement("link"),n[nt]=!0,n.onload=n.onerror=Qt.bind(null,n),Yn(n,"link",r),At(n),t.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function jo(t){return'[src="'+Ii(t)+'"]'}function Nc(t){return"script[async]"+t}function SS(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ii(r.href)+'"]');if(o)return n.instance=o,At(o),o;var u=P({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),At(o),Yn(o,"style",u),zf(o,r.precedence,t),n.instance=o;case"stylesheet":u=Xo(r.href);var f=t.querySelector(Dc(u));if(f)return n.state.loading|=4,n.instance=f,At(f),f;o=yS(r),(u=ji.get(u))&&Nm(o,u),f=(t.ownerDocument||t).createElement("link"),At(f);var x=f;return x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Yn(f,"link",o),n.state.loading|=4,zf(f,r.precedence,t),n.instance=f;case"script":return f=jo(r.src),(u=t.querySelector(Nc(f)))?(n.instance=u,At(u),u):(o=r,(u=ji.get(f))&&(o=P({},r),Um(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),At(u),Yn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,zf(o,r.precedence,t));return n.instance}function zf(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Nm(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Um(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var If=null;function MS(t,n,r){if(If===null){var o=new Map,u=If=new Map;u.set(r,o)}else u=If,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var f=r[u];if(!(f[$e]||f[Y]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(f):o.set(x,[f])}}return o}function Lm(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Iw(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bS(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function ES(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function TS(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function AS(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=TS(n),t.suspenseyImages.push(n)),t=Hw.bind(t),n.decode().then(t,t))}function Fw(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Xo(o.href),f=n.querySelector(Dc(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Uc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=f,At(f);return}f=n.ownerDocument||n,o=yS(o),(u=ji.get(u))&&Nm(o,u),f=f.createElement("link"),At(f);var x=f;x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Yn(f,"link",o),r.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Uc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Ff=0;function Bw(t,n){return t.stylesheets&&t.count===0&&Hf(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Hf(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*iw());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hf(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function wS(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hf(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Uc(){this.count--,wS(this)}function Hw(){this.imgCount--,wS(this)}var Bf=null;function Hf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bf=new Map,n.forEach(Gw,t),Bf=null,Uc.call(t))}function Gw(t,n){if(!(n.state.loading&4)){var r=Bf.get(t);if(r)var o=r.get(null);else{r=new Map,Bf.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),o=x)}o&&r.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=r.get(x)||o,f===o&&r.set(null,u),r.set(x,u),this.count++,o=Uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var qo={$$typeof:q,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function Vw(t,n,r,o,u,f,x,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.hiddenUpdates=Tr(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function RS(t,n,r,o,u,f,x,A,B,J,le,xe){return t=new Vw(t,n,r,x,B,J,le,xe,A),n=1,f===!0&&(n|=24),f=hi(3,null,null,n),t.current=f,f.stateNode=t,n=Yh(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},$h(f),t}function CS(t){return t?(t=_o,t):_o}function DS(t,n,r,o,u,f){u=CS(u),o.context===null?o.context=u:o.pendingContext=u,o=zr(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Ir(t,o,n),r!==null&&(vi(r,t,n),cc(r,t,n))}function NS(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Pm(t,n){NS(t,n),(t=t.alternate)&&NS(t,n)}function US(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&vi(n,t,67108864),Pm(t,67108864)}}function LS(t){if(t.tag===13||t.tag===31){var n=Ci();n=jl(n);var r=xs(t,n);r!==null&&vi(r,t,n),Pm(t,n)}}var Wo=!0;function kw(t,n,r,o){var u=Me.T;Me.T=null;var f=ke.p;try{ke.p=2,Om(t,n,r,o)}finally{ke.p=f,Me.T=u}}function Xw(t,n,r,o){var u=Me.T;Me.T=null;var f=ke.p;try{ke.p=8,Om(t,n,r,o)}finally{ke.p=f,Me.T=u}}function Om(t,n,r,o){if(Wo){var u=zm(o);if(u===null)gm(t,n,o,Gf,r),OS(t,o);else if(qw(u,t,n,r,o))o.stopPropagation();else if(OS(t,o),n&4&&-1<jw.indexOf(t)){for(;u!==null;){var f=tt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=ni(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var B=1<<31-Mt(x);A.entanglements[1]|=B,x&=~B}Da(f),(Wt&6)===0&&(Af=rt()+500,Tc(0))}}break;case 31:case 13:A=xs(f,2),A!==null&&vi(A,f,2),Cf(),Pm(f,2)}if(f=zm(o),f===null&&gm(t,n,o,Gf,r),f===u)break;u=f}u!==null&&o.stopPropagation()}else gm(t,n,o,null,r)}}function zm(t){return t=Sh(t),Im(t)}var Gf=null;function Im(t){if(Gf=null,t=gt(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=d(n),t!==null)return t;t=null}else if(r===31){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gf=t,null}function PS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case Ht:return 2;case W:return 8;case Re:case ye:return 32;case Xe:return 268435456;default:return 32}default:return 32}}var Fm=!1,Zr=null,Qr=null,Kr=null,Lc=new Map,Pc=new Map,$r=[],jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function OS(t,n){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Lc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(n.pointerId)}}function Oc(t,n,r,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=tt(n),n!==null&&US(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qw(t,n,r,o,u){switch(n){case"focusin":return Zr=Oc(Zr,t,n,r,o,u),!0;case"dragenter":return Qr=Oc(Qr,t,n,r,o,u),!0;case"mouseover":return Kr=Oc(Kr,t,n,r,o,u),!0;case"pointerover":var f=u.pointerId;return Lc.set(f,Oc(Lc.get(f)||null,t,n,r,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Pc.set(f,Oc(Pc.get(f)||null,t,n,r,o,u)),!0}return!1}function zS(t){var n=gt(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){t.blockedOn=n,wu(t.priority,function(){LS(r)});return}}else if(n===31){if(n=h(r),n!==null){t.blockedOn=n,wu(t.priority,function(){LS(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vf(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=zm(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);yh=o,r.target.dispatchEvent(o),yh=null}else return n=tt(r),n!==null&&US(n),t.blockedOn=r,!1;n.shift()}return!0}function IS(t,n,r){Vf(t)&&r.delete(n)}function Ww(){Fm=!1,Zr!==null&&Vf(Zr)&&(Zr=null),Qr!==null&&Vf(Qr)&&(Qr=null),Kr!==null&&Vf(Kr)&&(Kr=null),Lc.forEach(IS),Pc.forEach(IS)}function kf(t,n){t.blockedOn===n&&(t.blockedOn=null,Fm||(Fm=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ww)))}var Xf=null;function FS(t){Xf!==t&&(Xf=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Xf===t&&(Xf=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Im(o||r)===null)continue;break}var f=tt(r);f!==null&&(t.splice(n,3),n-=3,xp(f,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Yo(t){function n(B){return kf(B,t)}Zr!==null&&kf(Zr,t),Qr!==null&&kf(Qr,t),Kr!==null&&kf(Kr,t),Lc.forEach(n),Pc.forEach(n);for(var r=0;r<$r.length;r++){var o=$r[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$r.length&&(r=$r[0],r.blockedOn===null);)zS(r),r.blockedOn===null&&$r.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],f=r[o+1],x=u[se]||null;if(typeof f=="function")x||FS(r);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[se]||null)A=x.formAction;else if(Im(u)!==null)continue}else A=x.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),FS(r)}}}function BS(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bm(t){this._internalRoot=t}jf.prototype.render=Bm.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=Ci();DS(r,o,t,n,null,null)},jf.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;DS(t.current,2,null,t,null,null),Cf(),n[ae]=null}};function jf(t){this._internalRoot=t}jf.prototype.unstable_scheduleHydration=function(t){if(t){var n=Au();t={blockedOn:null,target:t,priority:n};for(var r=0;r<$r.length&&n!==0&&n<$r[r].priority;r++);$r.splice(r,0,t),r===0&&zS(t)}};var HS=e.version;if(HS!=="19.3.1")throw Error(s(527,HS,"19.3.1"));ke.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Yw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Me,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qf.isDisabled&&qf.supportsFiber)try{Je=qf.inject(Yw),ot=qf}catch{}}return nu.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=Cx,f=Dx,x=Nx;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=RS(t,1,!1,null,null,r,o,null,u,f,x,BS),t[ae]=n.current,mm(t),new Bm(n)},nu.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",f=Cx,x=Dx,A=Nx,B=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),n=RS(t,1,!0,n,r??null,o,u,B,f,x,A,BS),n.context=CS(null),r=n.current,o=Ci(),o=jl(o),u=zr(o),u.callback=null,Ir(r,u,o),r=o,n.current.lanes=r,Ar(n,r),Da(n),t[ae]=n.current,mm(t),new jf(n)},nu.version="19.3.1",nu}var eb;function jz(){if(eb)return eg.exports;eb=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),eg.exports=Xz(),eg.exports}var tb=jz();class $z{constructor(e){this.version=Bz,e.ipd=0,uu.getState().setInputMode(e.primaryInputMode),this.devUIContainer=document.createElement("div"),this.devUIContainer.style.position="fixed",this.devUIContainer.style.width="100vw",this.devUIContainer.style.height="100vh",this.devUIContainer.style.top="50vh",this.devUIContainer.style.left="50vw",this.devUIContainer.style.transform="translate(-50%, -50%)",this.devUIContainer.style.pointerEvents="none";const i=this.devUIContainer.attachShadow({mode:"open"});this.inputLayer=new Fz(e),Oa.setState({mode:this.inputLayer.currentGazeMode,commitHand:this.inputLayer.currentGazeCommitHand}),this.unsubscribeControlMode=e.onControlModeChange(c=>{c==="programmatic"?(this.inputLayer.setProgrammaticMode(!0),this.inputLayer.syncFromDevice(),uu.getState().setInputMode(e.primaryInputMode),Oa.getState().setMode(this.inputLayer.currentGazeMode),this.inputLayer.setInteractionsEnabled(!1)):(this.inputLayer.setProgrammaticMode(!1),this.inputLayer.setInteractionsEnabled(!0),Oa.getState().setMode(this.inputLayer.currentGazeMode))}),this.unsubscribeStateChange=e.onStateChange(()=>{this.inputLayer.isInProgrammaticMode&&(this.inputLayer.syncFromDevice(),uu.getState().setInputMode(e.primaryInputMode),Oa.getState().setMode(this.inputLayer.currentGazeMode))}),tb.createRoot(i).render(U.jsx(qz,{xrDevice:e,inputLayer:this.inputLayer,shadowRoot:i}));const l=()=>{const c=document.createElement("div");document.body.appendChild(c);const d=c.attachShadow({mode:"open"});tb.createRoot(d).render(U.jsx(Wz,{xrDevice:e,shadowRoot:d}))};document.body?l():window.onload=l}render(e){this.inputLayer.renderScene(e)}applyDefaultPose(e){this.inputLayer.applyDefaultPose(e)}setGazeMode(e){this.inputLayer.setGazeMode(e),Oa.getState().setMode(this.inputLayer.currentGazeMode)}setGazeCommitHand(e){this.inputLayer.setGazeCommitHand(e),Oa.getState().setCommitHand(e)}onSessionEnd(){this.inputLayer.onSessionEnd()}dispose(){this.unsubscribeControlMode(),this.unsubscribeStateChange(),this.inputLayer.dispose()}get devUICanvas(){return this.inputLayer.domElement}}const qz=({xrDevice:a,inputLayer:e,shadowRoot:i})=>{const[s,l]=xt.useState(!1),[c,d]=xt.useState(a.controlMode);return xt.useEffect(()=>{const h=()=>{const m=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;l(!!m)};document.addEventListener("pointerlockchange",h,!1),document.addEventListener("mozpointerlockchange",h,!1),document.addEventListener("webkitpointerlockchange",h,!1);const p=a.onControlModeChange(m=>{d(m)});return()=>{document.removeEventListener("pointerlockchange",h,!1),document.removeEventListener("mozpointerlockchange",h,!1),document.removeEventListener("webkitpointerlockchange",h,!1),p()}},[a]),U.jsx(Pb,{target:i,disableCSSOMInjection:!0,children:U.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"},children:[c==="programmatic"&&U.jsxs(U.Fragment,{children:[U.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:999,boxShadow:"inset 0 0 20px 5px rgba(59, 130, 246, 0.5)"}}),U.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",backgroundColor:"rgba(59, 130, 246, 0.9)",color:"white",padding:"6px 16px",borderRadius:"16px",fontSize:"12px",fontFamily:"system-ui, sans-serif",fontWeight:500,zIndex:1e3,display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"},children:[U.jsx("span",{style:{fontSize:"14px"},children:"●"}),"Remote Control Active"]})]}),c!=="programmatic"&&U.jsxs(U.Fragment,{children:[U.jsx(sC,{xrDevice:a,inputLayer:e}),U.jsx(YR,{xrDevice:a,inputLayer:e,pointerLocked:s})]})]})})},Wz=({xrDevice:a,shadowRoot:e})=>{const[i,s]=Tt.useState(a.sessionOffered&&!a.activeSession);return Tt.useEffect(()=>{const l=setInterval(()=>{s(a.sessionOffered&&!a.activeSession)},1e3);return()=>{clearInterval(l)}},[]),U.jsx(Pb,{target:e,disableCSSOMInjection:!0,children:U.jsxs(fg,{style:{zIndex:899,position:"fixed",top:"8px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"space-between",left:"50vw",transform:i?"translateX(-50%)":"translateX(-50%) translateY(calc(-100% - 12px))",transition:"transform 0.2s ease-in-out",paddingLeft:"5px",gap:"3px"},children:[U.jsx(at,{name:"iwer",size:24}),U.jsx(ei,{onClick:()=>{a.grantOfferedSession()},style:{fontSize:"16px"},children:"Enter XR"})]})})};export{u1 as DEFAULT_KEYMAP,$z as DevUI,mR as IWE_PREFS_CHANNEL,Bz as VERSION,ZR as cursorToViewerDirection,Pa as emitPrefsPatch,Qz as emitPrefsPatchDebounced,gR as getEnvironmentLoader,Kz as setEnvironmentLoader,mv as useKeyMapStore};
