import{R as qt,r as F,j as t,L as S,c as Aa,g as Ca,P as Oa}from"./index-4c1d16e4.js";import{P as O,N as We,l as Sa,j as Xt,f as Ea,A as D,a as Pa,H as Ta,F as Ia,G as za}from"./GoToTop-efff73e9.js";import{s as Da,a as Ma,b as La}from"./services-3-6dc3687c.js";import{s as Ra}from"./solutionImg-5c4e3c7a.js";function xt(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),s.push.apply(s,r)}return s}function _(e){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?xt(Object(s),!0).forEach(function(r){z(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):xt(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pe(e)}function Fa(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function bt(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wa(e,n,s){return n&&bt(e.prototype,n),s&&bt(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}function z(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function rt(e,n){return Ua(e)||Ba(e,n)||Gt(e,n)||qa()}function ge(e){return Ha(e)||Ya(e)||Gt(e)||Va()}function Ha(e){if(Array.isArray(e))return qe(e)}function Ua(e){if(Array.isArray(e))return e}function Ya(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ba(e,n){var s=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(s!=null){var r=[],c=!0,f=!1,h,m;try{for(s=s.call(e);!(c=(h=s.next()).done)&&(r.push(h.value),!(n&&r.length===n));c=!0);}catch(p){f=!0,m=p}finally{try{!c&&s.return!=null&&s.return()}finally{if(f)throw m}}return r}}function Gt(e,n){if(e){if(typeof e=="string")return qe(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);if(s==="Object"&&e.constructor&&(s=e.constructor.name),s==="Map"||s==="Set")return Array.from(e);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return qe(e,n)}}function qe(e,n){(n==null||n>e.length)&&(n=e.length);for(var s=0,r=new Array(n);s<n;s++)r[s]=e[s];return r}function Va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wt=function(){},ot={},Qt={},Kt=null,Zt={mark:wt,measure:wt};try{typeof window<"u"&&(ot=window),typeof document<"u"&&(Qt=document),typeof MutationObserver<"u"&&(Kt=MutationObserver),typeof performance<"u"&&(Zt=performance)}catch{}var Xa=ot.navigator||{},jt=Xa.userAgent,_t=jt===void 0?"":jt,X=ot,T=Qt,Nt=Kt,xe=Zt;X.document;var B=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Jt=~_t.indexOf("MSIE")||~_t.indexOf("Trident/"),be,we,je,_e,Ne,H="___FONT_AWESOME___",Xe=16,$t="fa",ea="svg-inline--fa",$="data-fa-i2svg",Ge="data-fa-pseudo-element",Ga="data-fa-pseudo-element-pending",lt="data-prefix",ct="data-icon",kt="fontawesome-i2svg",Qa="async",Ka=["HTML","HEAD","STYLE","SCRIPT"],ta=function(){try{return!0}catch{return!1}}(),P="classic",I="sharp",ut=[P,I];function ve(e){return new Proxy(e,{get:function(s,r){return r in s?s[r]:s[P]}})}var fe=ve((be={},z(be,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),z(be,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),be)),de=ve((we={},z(we,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z(we,I,{solid:"fass",regular:"fasr",light:"fasl"}),we)),he=ve((je={},z(je,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z(je,I,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),je)),Za=ve((_e={},z(_e,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z(_e,I,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_e)),Ja=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,aa="fa-layers-text",$a=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,en=ve((Ne={},z(Ne,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z(Ne,I,{900:"fass",400:"fasr",300:"fasl"}),Ne)),na=[1,2,3,4,5,6,7,8,9,10],tn=na.concat([11,12,13,14,15,16,17,18,19,20]),an=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},me=new Set;Object.keys(de[P]).map(me.add.bind(me));Object.keys(de[I]).map(me.add.bind(me));var nn=[].concat(ut,ge(me),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(na.map(function(e){return"".concat(e,"x")})).concat(tn.map(function(e){return"w-".concat(e)})),ce=X.FontAwesomeConfig||{};function sn(e){var n=T.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function rn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var on=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];on.forEach(function(e){var n=rt(e,2),s=n[0],r=n[1],c=rn(sn(s));c!=null&&(ce[r]=c)})}var ia={styleDefault:"solid",familyDefault:"classic",cssPrefix:$t,replacementClass:ea,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ce.familyPrefix&&(ce.cssPrefix=ce.familyPrefix);var re=_(_({},ia),ce);re.autoReplaceSvg||(re.observeMutations=!1);var A={};Object.keys(ia).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(s){re[e]=s,ue.forEach(function(r){return r(A)})},get:function(){return re[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(n){re.cssPrefix=n,ue.forEach(function(s){return s(A)})},get:function(){return re.cssPrefix}});X.FontAwesomeConfig=A;var ue=[];function ln(e){return ue.push(e),function(){ue.splice(ue.indexOf(e),1)}}var V=Xe,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cn(e){if(!(!e||!B)){var n=T.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var s=T.head.childNodes,r=null,c=s.length-1;c>-1;c--){var f=s[c],h=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(r=f)}return T.head.insertBefore(n,r),e}}var un="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pe(){for(var e=12,n="";e-- >0;)n+=un[Math.random()*62|0];return n}function oe(e){for(var n=[],s=(e||[]).length>>>0;s--;)n[s]=e[s];return n}function ft(e){return e.classList?oe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function sa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fn(e){return Object.keys(e||{}).reduce(function(n,s){return n+"".concat(s,'="').concat(sa(e[s]),'" ')},"").trim()}function De(e){return Object.keys(e||{}).reduce(function(n,s){return n+"".concat(s,": ").concat(e[s].trim(),";")},"")}function dt(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function dn(e){var n=e.transform,s=e.containerWidth,r=e.iconWidth,c={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(n.x*32,", ").concat(n.y*32,") "),h="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),p={transform:"".concat(f," ").concat(h," ").concat(m)},j={transform:"translate(".concat(r/2*-1," -256)")};return{outer:c,inner:p,path:j}}function hn(e){var n=e.transform,s=e.width,r=s===void 0?Xe:s,c=e.height,f=c===void 0?Xe:c,h=e.startCentered,m=h===void 0?!1:h,p="";return m&&Jt?p+="translate(".concat(n.x/V-r/2,"em, ").concat(n.y/V-f/2,"em) "):m?p+="translate(calc(-50% + ".concat(n.x/V,"em), calc(-50% + ").concat(n.y/V,"em)) "):p+="translate(".concat(n.x/V,"em, ").concat(n.y/V,"em) "),p+="scale(".concat(n.size/V*(n.flipX?-1:1),", ").concat(n.size/V*(n.flipY?-1:1),") "),p+="rotate(".concat(n.rotate,"deg) "),p}var mn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ra(){var e=$t,n=ea,s=A.cssPrefix,r=A.replacementClass,c=mn;if(s!==e||r!==n){var f=new RegExp("\\.".concat(e,"\\-"),"g"),h=new RegExp("\\--".concat(e,"\\-"),"g"),m=new RegExp("\\.".concat(n),"g");c=c.replace(f,".".concat(s,"-")).replace(h,"--".concat(s,"-")).replace(m,".".concat(r))}return c}var At=!1;function He(){A.autoAddCss&&!At&&(cn(ra()),At=!0)}var pn={mixout:function(){return{dom:{css:ra,insertCss:He}}},hooks:function(){return{beforeDOMElementCreation:function(){He()},beforeI2svg:function(){He()}}}},U=X||{};U[H]||(U[H]={});U[H].styles||(U[H].styles={});U[H].hooks||(U[H].hooks={});U[H].shims||(U[H].shims=[]);var L=U[H],oa=[],gn=function e(){T.removeEventListener("DOMContentLoaded",e),Te=1,oa.map(function(n){return n()})},Te=!1;B&&(Te=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Te||T.addEventListener("DOMContentLoaded",gn));function vn(e){B&&(Te?setTimeout(e,0):oa.push(e))}function ye(e){var n=e.tag,s=e.attributes,r=s===void 0?{}:s,c=e.children,f=c===void 0?[]:c;return typeof e=="string"?sa(e):"<".concat(n," ").concat(fn(r),">").concat(f.map(ye).join(""),"</").concat(n,">")}function Ct(e,n,s){if(e&&e[n]&&e[n][s])return{prefix:n,iconName:s,icon:e[n][s]}}var yn=function(n,s){return function(r,c,f,h){return n.call(s,r,c,f,h)}},Ue=function(n,s,r,c){var f=Object.keys(n),h=f.length,m=c!==void 0?yn(s,c):s,p,j,w;for(r===void 0?(p=1,w=n[f[0]]):(p=0,w=r);p<h;p++)j=f[p],w=m(w,n[j],j,n);return w};function xn(e){for(var n=[],s=0,r=e.length;s<r;){var c=e.charCodeAt(s++);if(c>=55296&&c<=56319&&s<r){var f=e.charCodeAt(s++);(f&64512)==56320?n.push(((c&1023)<<10)+(f&1023)+65536):(n.push(c),s--)}else n.push(c)}return n}function Qe(e){var n=xn(e);return n.length===1?n[0].toString(16):null}function bn(e,n){var s=e.length,r=e.charCodeAt(n),c;return r>=55296&&r<=56319&&s>n+1&&(c=e.charCodeAt(n+1),c>=56320&&c<=57343)?(r-55296)*1024+c-56320+65536:r}function Ot(e){return Object.keys(e).reduce(function(n,s){var r=e[s],c=!!r.icon;return c?n[r.iconName]=r.icon:n[s]=r,n},{})}function Ke(e,n){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=s.skipHooks,c=r===void 0?!1:r,f=Ot(n);typeof L.hooks.addPack=="function"&&!c?L.hooks.addPack(e,Ot(n)):L.styles[e]=_(_({},L.styles[e]||{}),f),e==="fas"&&Ke("fa",n)}var ke,Ae,Ce,ae=L.styles,wn=L.shims,jn=(ke={},z(ke,P,Object.values(he[P])),z(ke,I,Object.values(he[I])),ke),ht=null,la={},ca={},ua={},fa={},da={},_n=(Ae={},z(Ae,P,Object.keys(fe[P])),z(Ae,I,Object.keys(fe[I])),Ae);function Nn(e){return~nn.indexOf(e)}function kn(e,n){var s=n.split("-"),r=s[0],c=s.slice(1).join("-");return r===e&&c!==""&&!Nn(c)?c:null}var ha=function(){var n=function(f){return Ue(ae,function(h,m,p){return h[p]=Ue(m,f,{}),h},{})};la=n(function(c,f,h){if(f[3]&&(c[f[3]]=h),f[2]){var m=f[2].filter(function(p){return typeof p=="number"});m.forEach(function(p){c[p.toString(16)]=h})}return c}),ca=n(function(c,f,h){if(c[h]=h,f[2]){var m=f[2].filter(function(p){return typeof p=="string"});m.forEach(function(p){c[p]=h})}return c}),da=n(function(c,f,h){var m=f[2];return c[h]=h,m.forEach(function(p){c[p]=h}),c});var s="far"in ae||A.autoFetchSvg,r=Ue(wn,function(c,f){var h=f[0],m=f[1],p=f[2];return m==="far"&&!s&&(m="fas"),typeof h=="string"&&(c.names[h]={prefix:m,iconName:p}),typeof h=="number"&&(c.unicodes[h.toString(16)]={prefix:m,iconName:p}),c},{names:{},unicodes:{}});ua=r.names,fa=r.unicodes,ht=Me(A.styleDefault,{family:A.familyDefault})};ln(function(e){ht=Me(e.styleDefault,{family:A.familyDefault})});ha();function mt(e,n){return(la[e]||{})[n]}function An(e,n){return(ca[e]||{})[n]}function J(e,n){return(da[e]||{})[n]}function ma(e){return ua[e]||{prefix:null,iconName:null}}function Cn(e){var n=fa[e],s=mt("fas",e);return n||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function G(){return ht}var pt=function(){return{prefix:null,iconName:null,rest:[]}};function Me(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.family,r=s===void 0?P:s,c=fe[r][e],f=de[r][e]||de[r][c],h=e in L.styles?e:null;return f||h||null}var St=(Ce={},z(Ce,P,Object.keys(he[P])),z(Ce,I,Object.keys(he[I])),Ce);function Le(e){var n,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.skipLookups,c=r===void 0?!1:r,f=(n={},z(n,P,"".concat(A.cssPrefix,"-").concat(P)),z(n,I,"".concat(A.cssPrefix,"-").concat(I)),n),h=null,m=P;(e.includes(f[P])||e.some(function(j){return St[P].includes(j)}))&&(m=P),(e.includes(f[I])||e.some(function(j){return St[I].includes(j)}))&&(m=I);var p=e.reduce(function(j,w){var N=kn(A.cssPrefix,w);if(ae[w]?(w=jn[m].includes(w)?Za[m][w]:w,h=w,j.prefix=w):_n[m].indexOf(w)>-1?(h=w,j.prefix=Me(w,{family:m})):N?j.iconName=N:w!==A.replacementClass&&w!==f[P]&&w!==f[I]&&j.rest.push(w),!c&&j.prefix&&j.iconName){var o=h==="fa"?ma(j.iconName):{},y=J(j.prefix,j.iconName);o.prefix&&(h=null),j.iconName=o.iconName||y||j.iconName,j.prefix=o.prefix||j.prefix,j.prefix==="far"&&!ae.far&&ae.fas&&!A.autoFetchSvg&&(j.prefix="fas")}return j},pt());return(e.includes("fa-brands")||e.includes("fab"))&&(p.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(p.prefix="fad"),!p.prefix&&m===I&&(ae.fass||A.autoFetchSvg)&&(p.prefix="fass",p.iconName=J(p.prefix,p.iconName)||p.iconName),(p.prefix==="fa"||h==="fa")&&(p.prefix=G()||"fas"),p}var On=function(){function e(){Fa(this,e),this.definitions={}}return Wa(e,[{key:"add",value:function(){for(var s=this,r=arguments.length,c=new Array(r),f=0;f<r;f++)c[f]=arguments[f];var h=c.reduce(this._pullDefinitions,{});Object.keys(h).forEach(function(m){s.definitions[m]=_(_({},s.definitions[m]||{}),h[m]),Ke(m,h[m]);var p=he[P][m];p&&Ke(p,h[m]),ha()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,r){var c=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(c).map(function(f){var h=c[f],m=h.prefix,p=h.iconName,j=h.icon,w=j[2];s[m]||(s[m]={}),w.length>0&&w.forEach(function(N){typeof N=="string"&&(s[m][N]=j)}),s[m][p]=j}),s}}]),e}(),Et=[],ne={},se={},Sn=Object.keys(se);function En(e,n){var s=n.mixoutsTo;return Et=e,ne={},Object.keys(se).forEach(function(r){Sn.indexOf(r)===-1&&delete se[r]}),Et.forEach(function(r){var c=r.mixout?r.mixout():{};if(Object.keys(c).forEach(function(h){typeof c[h]=="function"&&(s[h]=c[h]),Pe(c[h])==="object"&&Object.keys(c[h]).forEach(function(m){s[h]||(s[h]={}),s[h][m]=c[h][m]})}),r.hooks){var f=r.hooks();Object.keys(f).forEach(function(h){ne[h]||(ne[h]=[]),ne[h].push(f[h])})}r.provides&&r.provides(se)}),s}function Ze(e,n){for(var s=arguments.length,r=new Array(s>2?s-2:0),c=2;c<s;c++)r[c-2]=arguments[c];var f=ne[e]||[];return f.forEach(function(h){n=h.apply(null,[n].concat(r))}),n}function ee(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];var c=ne[e]||[];c.forEach(function(f){f.apply(null,s)})}function Y(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return se[e]?se[e].apply(null,n):void 0}function Je(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,s=e.prefix||G();if(n)return n=J(s,n)||n,Ct(pa.definitions,s,n)||Ct(L.styles,s,n)}var pa=new On,Pn=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,ee("noAuto")},Tn={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(ee("beforeI2svg",n),Y("pseudoElements2svg",n),Y("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=n.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,vn(function(){zn({autoReplaceSvgRoot:s}),ee("watch",n)})}},In={icon:function(n){if(n===null)return null;if(Pe(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:J(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var s=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],r=Me(n[0]);return{prefix:r,iconName:J(r,s)||s}}if(typeof n=="string"&&(n.indexOf("".concat(A.cssPrefix,"-"))>-1||n.match(Ja))){var c=Le(n.split(" "),{skipLookups:!0});return{prefix:c.prefix||G(),iconName:J(c.prefix,c.iconName)||c.iconName}}if(typeof n=="string"){var f=G();return{prefix:f,iconName:J(f,n)||n}}}},M={noAuto:Pn,config:A,dom:Tn,parse:In,library:pa,findIconDefinition:Je,toHtml:ye},zn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=n.autoReplaceSvgRoot,r=s===void 0?T:s;(Object.keys(L.styles).length>0||A.autoFetchSvg)&&B&&A.autoReplaceSvg&&M.dom.i2svg({node:r})};function Re(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ye(r)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Dn(e){var n=e.children,s=e.main,r=e.mask,c=e.attributes,f=e.styles,h=e.transform;if(dt(h)&&s.found&&!r.found){var m=s.width,p=s.height,j={x:m/p/2,y:.5};c.style=De(_(_({},f),{},{"transform-origin":"".concat(j.x+h.x/16,"em ").concat(j.y+h.y/16,"em")}))}return[{tag:"svg",attributes:c,children:n}]}function Mn(e){var n=e.prefix,s=e.iconName,r=e.children,c=e.attributes,f=e.symbol,h=f===!0?"".concat(n,"-").concat(A.cssPrefix,"-").concat(s):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},c),{},{id:h}),children:r}]}]}function gt(e){var n=e.icons,s=n.main,r=n.mask,c=e.prefix,f=e.iconName,h=e.transform,m=e.symbol,p=e.title,j=e.maskId,w=e.titleId,N=e.extra,o=e.watchable,y=o===void 0?!1:o,b=r.found?r:s,x=b.width,d=b.height,a=c==="fak",i=[A.replacementClass,f?"".concat(A.cssPrefix,"-").concat(f):""].filter(function(E){return N.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(N.classes).join(" "),l={children:[],attributes:_(_({},N.attributes),{},{"data-prefix":c,"data-icon":f,class:i,role:N.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(d)})},u=a&&!~N.classes.indexOf("fa-fw")?{width:"".concat(x/d*16*.0625,"em")}:{};y&&(l.attributes[$]=""),p&&(l.children.push({tag:"title",attributes:{id:l.attributes["aria-labelledby"]||"title-".concat(w||pe())},children:[p]}),delete l.attributes.title);var g=_(_({},l),{},{prefix:c,iconName:f,main:s,mask:r,maskId:j,transform:h,symbol:m,styles:_(_({},u),N.styles)}),v=r.found&&s.found?Y("generateAbstractMask",g)||{children:[],attributes:{}}:Y("generateAbstractIcon",g)||{children:[],attributes:{}},k=v.children,C=v.attributes;return g.children=k,g.attributes=C,m?Mn(g):Dn(g)}function Pt(e){var n=e.content,s=e.width,r=e.height,c=e.transform,f=e.title,h=e.extra,m=e.watchable,p=m===void 0?!1:m,j=_(_(_({},h.attributes),f?{title:f}:{}),{},{class:h.classes.join(" ")});p&&(j[$]="");var w=_({},h.styles);dt(c)&&(w.transform=hn({transform:c,startCentered:!0,width:s,height:r}),w["-webkit-transform"]=w.transform);var N=De(w);N.length>0&&(j.style=N);var o=[];return o.push({tag:"span",attributes:j,children:[n]}),f&&o.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),o}function Ln(e){var n=e.content,s=e.title,r=e.extra,c=_(_(_({},r.attributes),s?{title:s}:{}),{},{class:r.classes.join(" ")}),f=De(r.styles);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[n]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}var Ye=L.styles;function $e(e){var n=e[0],s=e[1],r=e.slice(4),c=rt(r,1),f=c[0],h=null;return Array.isArray(f)?h={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Z.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Z.PRIMARY),fill:"currentColor",d:f[1]}}]}:h={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:n,height:s,icon:h}}var Rn={found:!1,width:512,height:512};function Fn(e,n){!ta&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function et(e,n){var s=n;return n==="fa"&&A.styleDefault!==null&&(n=G()),new Promise(function(r,c){if(Y("missingIconAbstract"),s==="fa"){var f=ma(e)||{};e=f.iconName||e,n=f.prefix||n}if(e&&n&&Ye[n]&&Ye[n][e]){var h=Ye[n][e];return r($e(h))}Fn(e,n),r(_(_({},Rn),{},{icon:A.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var Tt=function(){},tt=A.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:Tt,measure:Tt},le='FA "6.4.2"',Wn=function(n){return tt.mark("".concat(le," ").concat(n," begins")),function(){return ga(n)}},ga=function(n){tt.mark("".concat(le," ").concat(n," ends")),tt.measure("".concat(le," ").concat(n),"".concat(le," ").concat(n," begins"),"".concat(le," ").concat(n," ends"))},vt={begin:Wn,end:ga},Se=function(){};function It(e){var n=e.getAttribute?e.getAttribute($):null;return typeof n=="string"}function Hn(e){var n=e.getAttribute?e.getAttribute(lt):null,s=e.getAttribute?e.getAttribute(ct):null;return n&&s}function Un(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Yn(){if(A.autoReplaceSvg===!0)return Ee.replace;var e=Ee[A.autoReplaceSvg];return e||Ee.replace}function Bn(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function Vn(e){return T.createElement(e)}function va(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.ceFn,r=s===void 0?e.tag==="svg"?Bn:Vn:s;if(typeof e=="string")return T.createTextNode(e);var c=r(e.tag);Object.keys(e.attributes||[]).forEach(function(h){c.setAttribute(h,e.attributes[h])});var f=e.children||[];return f.forEach(function(h){c.appendChild(va(h,{ceFn:r}))}),c}function qn(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ee={replace:function(n){var s=n[0];if(s.parentNode)if(n[1].forEach(function(c){s.parentNode.insertBefore(va(c),s)}),s.getAttribute($)===null&&A.keepOriginalSource){var r=T.createComment(qn(s));s.parentNode.replaceChild(r,s)}else s.remove()},nest:function(n){var s=n[0],r=n[1];if(~ft(s).indexOf(A.replacementClass))return Ee.replace(n);var c=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var f=r[0].attributes.class.split(" ").reduce(function(m,p){return p===A.replacementClass||p.match(c)?m.toSvg.push(p):m.toNode.push(p),m},{toNode:[],toSvg:[]});r[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",f.toNode.join(" "))}var h=r.map(function(m){return ye(m)}).join(`
`);s.setAttribute($,""),s.innerHTML=h}};function zt(e){e()}function ya(e,n){var s=typeof n=="function"?n:Se;if(e.length===0)s();else{var r=zt;A.mutateApproach===Qa&&(r=X.requestAnimationFrame||zt),r(function(){var c=Yn(),f=vt.begin("mutate");e.map(c),f(),s()})}}var yt=!1;function xa(){yt=!0}function at(){yt=!1}var Ie=null;function Dt(e){if(Nt&&A.observeMutations){var n=e.treeCallback,s=n===void 0?Se:n,r=e.nodeCallback,c=r===void 0?Se:r,f=e.pseudoElementsCallback,h=f===void 0?Se:f,m=e.observeMutationsRoot,p=m===void 0?T:m;Ie=new Nt(function(j){if(!yt){var w=G();oe(j).forEach(function(N){if(N.type==="childList"&&N.addedNodes.length>0&&!It(N.addedNodes[0])&&(A.searchPseudoElements&&h(N.target),s(N.target)),N.type==="attributes"&&N.target.parentNode&&A.searchPseudoElements&&h(N.target.parentNode),N.type==="attributes"&&It(N.target)&&~an.indexOf(N.attributeName))if(N.attributeName==="class"&&Hn(N.target)){var o=Le(ft(N.target)),y=o.prefix,b=o.iconName;N.target.setAttribute(lt,y||w),b&&N.target.setAttribute(ct,b)}else Un(N.target)&&c(N.target)})}}),B&&Ie.observe(p,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xn(){Ie&&Ie.disconnect()}function Gn(e){var n=e.getAttribute("style"),s=[];return n&&(s=n.split(";").reduce(function(r,c){var f=c.split(":"),h=f[0],m=f.slice(1);return h&&m.length>0&&(r[h]=m.join(":").trim()),r},{})),s}function Qn(e){var n=e.getAttribute("data-prefix"),s=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",c=Le(ft(e));return c.prefix||(c.prefix=G()),n&&s&&(c.prefix=n,c.iconName=s),c.iconName&&c.prefix||(c.prefix&&r.length>0&&(c.iconName=An(c.prefix,e.innerText)||mt(c.prefix,Qe(e.innerText))),!c.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(c.iconName=e.firstChild.data)),c}function Kn(e){var n=oe(e.attributes).reduce(function(c,f){return c.name!=="class"&&c.name!=="style"&&(c[f.name]=f.value),c},{}),s=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(s?n["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||pe()):(n["aria-hidden"]="true",n.focusable="false")),n}function Zn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=Qn(e),r=s.iconName,c=s.prefix,f=s.rest,h=Kn(e),m=Ze("parseNodeAttributes",{},e),p=n.styleParser?Gn(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:c,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:p,attributes:h}},m)}var Jn=L.styles;function ba(e){var n=A.autoReplaceSvg==="nest"?Mt(e,{styleParser:!1}):Mt(e);return~n.extra.classes.indexOf(aa)?Y("generateLayersText",e,n):Y("generateSvgReplacementMutation",e,n)}var Q=new Set;ut.map(function(e){Q.add("fa-".concat(e))});Object.keys(fe[P]).map(Q.add.bind(Q));Object.keys(fe[I]).map(Q.add.bind(Q));Q=ge(Q);function Lt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var s=T.documentElement.classList,r=function(N){return s.add("".concat(kt,"-").concat(N))},c=function(N){return s.remove("".concat(kt,"-").concat(N))},f=A.autoFetchSvg?Q:ut.map(function(w){return"fa-".concat(w)}).concat(Object.keys(Jn));f.includes("fa")||f.push("fa");var h=[".".concat(aa,":not([").concat($,"])")].concat(f.map(function(w){return".".concat(w,":not([").concat($,"])")})).join(", ");if(h.length===0)return Promise.resolve();var m=[];try{m=oe(e.querySelectorAll(h))}catch{}if(m.length>0)r("pending"),c("complete");else return Promise.resolve();var p=vt.begin("onTree"),j=m.reduce(function(w,N){try{var o=ba(N);o&&w.push(o)}catch(y){ta||y.name==="MissingIcon"&&console.error(y)}return w},[]);return new Promise(function(w,N){Promise.all(j).then(function(o){ya(o,function(){r("active"),r("complete"),c("pending"),typeof n=="function"&&n(),p(),w()})}).catch(function(o){p(),N(o)})})}function $n(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ba(e).then(function(s){s&&ya([s],n)})}function ei(e){return function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:Je(n||{}),c=s.mask;return c&&(c=(c||{}).icon?c:Je(c||{})),e(r,_(_({},s),{},{mask:c}))}}var ti=function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,c=r===void 0?R:r,f=s.symbol,h=f===void 0?!1:f,m=s.mask,p=m===void 0?null:m,j=s.maskId,w=j===void 0?null:j,N=s.title,o=N===void 0?null:N,y=s.titleId,b=y===void 0?null:y,x=s.classes,d=x===void 0?[]:x,a=s.attributes,i=a===void 0?{}:a,l=s.styles,u=l===void 0?{}:l;if(n){var g=n.prefix,v=n.iconName,k=n.icon;return Re(_({type:"icon"},n),function(){return ee("beforeDOMElementCreation",{iconDefinition:n,params:s}),A.autoA11y&&(o?i["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(b||pe()):(i["aria-hidden"]="true",i.focusable="false")),gt({icons:{main:$e(k),mask:p?$e(p.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:_(_({},R),c),symbol:h,title:o,maskId:w,titleId:b,extra:{attributes:i,styles:u,classes:d}})})}},ai={mixout:function(){return{icon:ei(ti)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=Lt,s.nodeCallback=$n,s}}},provides:function(n){n.i2svg=function(s){var r=s.node,c=r===void 0?T:r,f=s.callback,h=f===void 0?function(){}:f;return Lt(c,h)},n.generateSvgReplacementMutation=function(s,r){var c=r.iconName,f=r.title,h=r.titleId,m=r.prefix,p=r.transform,j=r.symbol,w=r.mask,N=r.maskId,o=r.extra;return new Promise(function(y,b){Promise.all([et(c,m),w.iconName?et(w.iconName,w.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var d=rt(x,2),a=d[0],i=d[1];y([s,gt({icons:{main:a,mask:i},prefix:m,iconName:c,transform:p,symbol:j,maskId:N,title:f,titleId:h,extra:o,watchable:!0})])}).catch(b)})},n.generateAbstractIcon=function(s){var r=s.children,c=s.attributes,f=s.main,h=s.transform,m=s.styles,p=De(m);p.length>0&&(c.style=p);var j;return dt(h)&&(j=Y("generateAbstractTransformGrouping",{main:f,transform:h,containerWidth:f.width,iconWidth:f.width})),r.push(j||f.icon),{children:r,attributes:c}}}},ni={mixout:function(){return{layer:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=r.classes,f=c===void 0?[]:c;return Re({type:"layer"},function(){ee("beforeDOMElementCreation",{assembler:s,params:r});var h=[];return s(function(m){Array.isArray(m)?m.map(function(p){h=h.concat(p.abstract)}):h=h.concat(m.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(ge(f)).join(" ")},children:h}]})}}}},ii={mixout:function(){return{counter:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=r.title,f=c===void 0?null:c,h=r.classes,m=h===void 0?[]:h,p=r.attributes,j=p===void 0?{}:p,w=r.styles,N=w===void 0?{}:w;return Re({type:"counter",content:s},function(){return ee("beforeDOMElementCreation",{content:s,params:r}),Ln({content:s.toString(),title:f,extra:{attributes:j,styles:N,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(ge(m))}})})}}}},si={mixout:function(){return{text:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=r.transform,f=c===void 0?R:c,h=r.title,m=h===void 0?null:h,p=r.classes,j=p===void 0?[]:p,w=r.attributes,N=w===void 0?{}:w,o=r.styles,y=o===void 0?{}:o;return Re({type:"text",content:s},function(){return ee("beforeDOMElementCreation",{content:s,params:r}),Pt({content:s,transform:_(_({},R),f),title:m,extra:{attributes:N,styles:y,classes:["".concat(A.cssPrefix,"-layers-text")].concat(ge(j))}})})}}},provides:function(n){n.generateLayersText=function(s,r){var c=r.title,f=r.transform,h=r.extra,m=null,p=null;if(Jt){var j=parseInt(getComputedStyle(s).fontSize,10),w=s.getBoundingClientRect();m=w.width/j,p=w.height/j}return A.autoA11y&&!c&&(h.attributes["aria-hidden"]="true"),Promise.resolve([s,Pt({content:s.innerHTML,width:m,height:p,transform:f,title:c,extra:h,watchable:!0})])}}},ri=new RegExp('"',"ug"),Rt=[1105920,1112319];function oi(e){var n=e.replace(ri,""),s=bn(n,0),r=s>=Rt[0]&&s<=Rt[1],c=n.length===2?n[0]===n[1]:!1;return{value:Qe(c?n[0]:n),isSecondary:r||c}}function Ft(e,n){var s="".concat(Ga).concat(n.replace(":","-"));return new Promise(function(r,c){if(e.getAttribute(s)!==null)return r();var f=oe(e.children),h=f.filter(function(k){return k.getAttribute(Ge)===n})[0],m=X.getComputedStyle(e,n),p=m.getPropertyValue("font-family").match($a),j=m.getPropertyValue("font-weight"),w=m.getPropertyValue("content");if(h&&!p)return e.removeChild(h),r();if(p&&w!=="none"&&w!==""){var N=m.getPropertyValue("content"),o=~["Sharp"].indexOf(p[2])?I:P,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(p[2])?de[o][p[2].toLowerCase()]:en[o][j],b=oi(N),x=b.value,d=b.isSecondary,a=p[0].startsWith("FontAwesome"),i=mt(y,x),l=i;if(a){var u=Cn(x);u.iconName&&u.prefix&&(i=u.iconName,y=u.prefix)}if(i&&!d&&(!h||h.getAttribute(lt)!==y||h.getAttribute(ct)!==l)){e.setAttribute(s,l),h&&e.removeChild(h);var g=Zn(),v=g.extra;v.attributes[Ge]=n,et(i,y).then(function(k){var C=gt(_(_({},g),{},{icons:{main:k,mask:pt()},prefix:y,iconName:l,extra:v,watchable:!0})),E=T.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=C.map(function(W){return ye(W)}).join(`
`),e.removeAttribute(s),r()}).catch(c)}else r()}else r()})}function li(e){return Promise.all([Ft(e,"::before"),Ft(e,"::after")])}function ci(e){return e.parentNode!==document.head&&!~Ka.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ge)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wt(e){if(B)return new Promise(function(n,s){var r=oe(e.querySelectorAll("*")).filter(ci).map(li),c=vt.begin("searchPseudoElements");xa(),Promise.all(r).then(function(){c(),at(),n()}).catch(function(){c(),at(),s()})})}var ui={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=Wt,s}}},provides:function(n){n.pseudoElements2svg=function(s){var r=s.node,c=r===void 0?T:r;A.searchPseudoElements&&Wt(c)}}},Ht=!1,fi={mixout:function(){return{dom:{unwatch:function(){xa(),Ht=!0}}}},hooks:function(){return{bootstrap:function(){Dt(Ze("mutationObserverCallbacks",{}))},noAuto:function(){Xn()},watch:function(s){var r=s.observeMutationsRoot;Ht?at():Dt(Ze("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ut=function(n){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(r,c){var f=c.toLowerCase().split("-"),h=f[0],m=f.slice(1).join("-");if(h&&m==="h")return r.flipX=!0,r;if(h&&m==="v")return r.flipY=!0,r;if(m=parseFloat(m),isNaN(m))return r;switch(h){case"grow":r.size=r.size+m;break;case"shrink":r.size=r.size-m;break;case"left":r.x=r.x-m;break;case"right":r.x=r.x+m;break;case"up":r.y=r.y-m;break;case"down":r.y=r.y+m;break;case"rotate":r.rotate=r.rotate+m;break}return r},s)},di={mixout:function(){return{parse:{transform:function(s){return Ut(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,r){var c=r.getAttribute("data-fa-transform");return c&&(s.transform=Ut(c)),s}}},provides:function(n){n.generateAbstractTransformGrouping=function(s){var r=s.main,c=s.transform,f=s.containerWidth,h=s.iconWidth,m={transform:"translate(".concat(f/2," 256)")},p="translate(".concat(c.x*32,", ").concat(c.y*32,") "),j="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),w="rotate(".concat(c.rotate," 0 0)"),N={transform:"".concat(p," ").concat(j," ").concat(w)},o={transform:"translate(".concat(h/2*-1," -256)")},y={outer:m,inner:N,path:o};return{tag:"g",attributes:_({},y.outer),children:[{tag:"g",attributes:_({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),y.path)}]}]}}}},Be={x:0,y:0,width:"100%",height:"100%"};function Yt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function hi(e){return e.tag==="g"?e.children:[e]}var mi={hooks:function(){return{parseNodeAttributes:function(s,r){var c=r.getAttribute("data-fa-mask"),f=c?Le(c.split(" ").map(function(h){return h.trim()})):pt();return f.prefix||(f.prefix=G()),s.mask=f,s.maskId=r.getAttribute("data-fa-mask-id"),s}}},provides:function(n){n.generateAbstractMask=function(s){var r=s.children,c=s.attributes,f=s.main,h=s.mask,m=s.maskId,p=s.transform,j=f.width,w=f.icon,N=h.width,o=h.icon,y=dn({transform:p,containerWidth:N,iconWidth:j}),b={tag:"rect",attributes:_(_({},Be),{},{fill:"white"})},x=w.children?{children:w.children.map(Yt)}:{},d={tag:"g",attributes:_({},y.inner),children:[Yt(_({tag:w.tag,attributes:_(_({},w.attributes),y.path)},x))]},a={tag:"g",attributes:_({},y.outer),children:[d]},i="mask-".concat(m||pe()),l="clip-".concat(m||pe()),u={tag:"mask",attributes:_(_({},Be),{},{id:i,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,a]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:l},children:hi(o)},u]};return r.push(g,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(l,")"),mask:"url(#".concat(i,")")},Be)}),{children:r,attributes:c}}}},pi={provides:function(n){var s=!1;X.matchMedia&&(s=X.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var r=[],c={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var h=_(_({},f),{},{attributeName:"opacity"}),m={tag:"circle",attributes:_(_({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||m.children.push({tag:"animate",attributes:_(_({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},h),{},{values:"1;0;1;1;0;1;"})}),r.push(m),r.push({tag:"path",attributes:_(_({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:_(_({},h),{},{values:"1;0;0;0;0;1;"})}]}),s||r.push({tag:"path",attributes:_(_({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},h),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gi={hooks:function(){return{parseNodeAttributes:function(s,r){var c=r.getAttribute("data-fa-symbol"),f=c===null?!1:c===""?!0:c;return s.symbol=f,s}}}},vi=[pn,ai,ni,ii,si,ui,fi,di,mi,pi,gi];En(vi,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;var nt=M.parse;M.findIconDefinition;M.toHtml;var yi=M.icon;M.layer;M.text;M.counter;function Bt(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),s.push.apply(s,r)}return s}function q(e){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?Bt(Object(s),!0).forEach(function(r){ie(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Bt(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function ze(e){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ze(e)}function ie(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function xi(e,n){if(e==null)return{};var s={},r=Object.keys(e),c,f;for(f=0;f<r.length;f++)c=r[f],!(n.indexOf(c)>=0)&&(s[c]=e[c]);return s}function bi(e,n){if(e==null)return{};var s=xi(e,n),r,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(c=0;c<f.length;c++)r=f[c],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function it(e){return wi(e)||ji(e)||_i(e)||Ni()}function wi(e){if(Array.isArray(e))return st(e)}function ji(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _i(e,n){if(e){if(typeof e=="string")return st(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);if(s==="Object"&&e.constructor&&(s=e.constructor.name),s==="Map"||s==="Set")return Array.from(e);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return st(e,n)}}function st(e,n){(n==null||n>e.length)&&(n=e.length);for(var s=0,r=new Array(n);s<n;s++)r[s]=e[s];return r}function Ni(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ki(e){var n,s=e.beat,r=e.fade,c=e.beatFade,f=e.bounce,h=e.shake,m=e.flash,p=e.spin,j=e.spinPulse,w=e.spinReverse,N=e.pulse,o=e.fixedWidth,y=e.inverse,b=e.border,x=e.listItem,d=e.flip,a=e.size,i=e.rotation,l=e.pull,u=(n={"fa-beat":s,"fa-fade":r,"fa-beat-fade":c,"fa-bounce":f,"fa-shake":h,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":w,"fa-spin-pulse":j,"fa-pulse":N,"fa-fw":o,"fa-inverse":y,"fa-border":b,"fa-li":x,"fa-flip":d===!0,"fa-flip-horizontal":d==="horizontal"||d==="both","fa-flip-vertical":d==="vertical"||d==="both"},ie(n,"fa-".concat(a),typeof a<"u"&&a!==null),ie(n,"fa-rotate-".concat(i),typeof i<"u"&&i!==null&&i!==0),ie(n,"fa-pull-".concat(l),typeof l<"u"&&l!==null),ie(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(u).map(function(g){return u[g]?g:null}).filter(function(g){return g})}function Ai(e){return e=e-0,e===e}function wa(e){return Ai(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,s){return s?s.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ci=["style"];function Oi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Si(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,s){var r=s.indexOf(":"),c=wa(s.slice(0,r)),f=s.slice(r+1).trim();return c.startsWith("webkit")?n[Oi(c)]=f:n[c]=f,n},{})}function ja(e,n){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var r=(n.children||[]).map(function(p){return ja(e,p)}),c=Object.keys(n.attributes||{}).reduce(function(p,j){var w=n.attributes[j];switch(j){case"class":p.attrs.className=w,delete n.attributes.class;break;case"style":p.attrs.style=Si(w);break;default:j.indexOf("aria-")===0||j.indexOf("data-")===0?p.attrs[j.toLowerCase()]=w:p.attrs[wa(j)]=w}return p},{attrs:{}}),f=s.style,h=f===void 0?{}:f,m=bi(s,Ci);return c.attrs.style=q(q({},c.attrs.style),h),e.apply(void 0,[n.tag,q(q({},c.attrs),m)].concat(it(r)))}var _a=!1;try{_a=!0}catch{}function Ei(){if(!_a&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vt(e){if(e&&ze(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(nt.icon)return nt.icon(e);if(e===null)return null;if(e&&ze(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ve(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?ie({},e,n):{}}var Fe=qt.forwardRef(function(e,n){var s=e.icon,r=e.mask,c=e.symbol,f=e.className,h=e.title,m=e.titleId,p=e.maskId,j=Vt(s),w=Ve("classes",[].concat(it(ki(e)),it(f.split(" ")))),N=Ve("transform",typeof e.transform=="string"?nt.transform(e.transform):e.transform),o=Ve("mask",Vt(r)),y=yi(j,q(q(q(q({},w),N),o),{},{symbol:c,title:h,titleId:m,maskId:p}));if(!y)return Ei("Could not find icon",j),null;var b=y.abstract,x={ref:n};return Object.keys(e).forEach(function(d){Fe.defaultProps.hasOwnProperty(d)||(x[d]=e[d])}),Pi(b[0],x)});Fe.displayName="FontAwesomeIcon";Fe.propTypes={beat:O.bool,border:O.bool,beatFade:O.bool,bounce:O.bool,className:O.string,fade:O.bool,flash:O.bool,mask:O.oneOfType([O.object,O.array,O.string]),maskId:O.string,fixedWidth:O.bool,inverse:O.bool,flip:O.oneOf([!0,!1,"horizontal","vertical","both"]),icon:O.oneOfType([O.object,O.array,O.string]),listItem:O.bool,pull:O.oneOf(["right","left"]),pulse:O.bool,rotation:O.oneOf([0,90,180,270]),shake:O.bool,size:O.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:O.bool,spinPulse:O.bool,spinReverse:O.bool,symbol:O.oneOfType([O.bool,O.string]),title:O.string,titleId:O.string,transform:O.oneOfType([O.string,O.object]),swapOpacity:O.bool};Fe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Pi=ja.bind(null,qt.createElement);const Ti=()=>{const[e,n]=F.useState("home"),[s,r]=F.useState(!1);F.useEffect(()=>{const f=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[]);const c=f=>{n(f)};return t.jsx("header",{className:"header-area",children:t.jsx("div",{className:s?"navbar-area navbar-area-two is-sticky":"navbar-area navbar-area-two",children:t.jsx("div",{className:"main-nav",children:t.jsx("div",{className:"container",children:t.jsxs(We,{collapseOnSelect:!0,expand:"lg",className:"navbar navbar-dark navbar-expand-lg",children:[t.jsx(S,{to:"/",className:"navbar-brand",children:t.jsx("img",{src:Sa,alt:"Logo"})}),t.jsx(We.Toggle,{"aria-controls":"responsive-navbar-nav"}),t.jsxs(We.Collapse,{id:"responsive-navbar-nav",children:[t.jsxs("ul",{className:"navbar-nav m-auto",children:[t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/",className:e==="home"?"nav-link active":"nav-link",onClick:()=>{c("home")},children:"Home"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:e==="about"?"nav-link active":"nav-link",onClick:()=>{c("about")},children:"About Us"})}),t.jsxs("li",{className:"nav-item",children:[t.jsxs("a",{style:{cursor:"pointer"},className:e==="services"?"nav-link active":"nav-link",onClick:()=>{c("services")},children:["Services",t.jsx("i",{className:"bx bx-chevron-down"})]}),t.jsxs("ul",{className:"dropdown-menu",children:[t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/services/complete-it-management",className:"nav-link",children:"Complete IT Management"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/services/managed-cyber-security",className:"nav-link",children:"Managed Cyber security"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/services/cloud-and-infrastructure",className:"nav-link",children:"Cloud & Infrastructure"})})]})]}),t.jsxs("li",{className:"nav-item",children:[t.jsxs("a",{style:{cursor:"pointer"},className:e==="solutions"?"nav-link active":"nav-link",onClick:()=>{c("solutions")},children:["Solutions",t.jsx("i",{className:"bx bx-chevron-down"})]}),t.jsxs("ul",{className:"dropdown-menu",children:[t.jsxs("li",{className:"nav-item",children:[t.jsxs(S,{to:"/solutions/risk-and-compliance",className:"nav-link",children:["Risk & Compliance",t.jsx("i",{className:"bx bx-chevron-right"})]}),t.jsxs("ul",{className:"dropdown-menu",children:[t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/risk-and-compliance#cyber-risk",className:"nav-link",children:"Cyber risk"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/risk-and-compliance#cis-18-assessments",className:"nav-link",children:"CIS-18 assessments"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/risk-and-compliance#soc-2-assessment",className:"nav-link",children:"SOC-2 assessments"})})]})]}),t.jsxs("li",{className:"nav-item",children:[t.jsxs(S,{to:"/solutions/web-security",className:"nav-link",children:["Web security",t.jsx("i",{className:"bx bx-chevron-right"})]}),t.jsxs("ul",{className:"dropdown-menu",children:[t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/web-security#penetration",className:"nav-link",children:"Penetration"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/web-security#infrastructure",className:"nav-link",children:"Infrastructure"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/web-security#mob-app",className:"nav-link",children:"Mobile Applications & Web Applications"})})]})]}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/email-security",className:"nav-link",children:"Email security"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/data-security",className:"nav-link",children:"Data security"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/cloud-security",className:"nav-link",children:"Cloud security"})}),t.jsx("li",{className:"nav-item",children:t.jsx(S,{to:"/solutions/end-point-security",className:"nav-link",children:"End-point security"})})]})]}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:e==="blog"?"nav-link active":"nav-link",onClick:()=>{c("blog")},children:"Blog"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:e==="contact"?"nav-link active":"nav-link",onClick:()=>{c("contact")},children:"Contact Us"})})]}),t.jsx("div",{className:"others-option",children:t.jsx("div",{className:"get-quote",children:t.jsx("a",{href:"#",className:"default-btn",children:t.jsx("span",{children:"Get a Quote"})})})})]})]})})})})})};const Ii=()=>(F.useEffect(()=>{Xt(document.querySelectorAll(".jarallax"),{speed:.3})},[]),t.jsx("section",{className:"challenges-area pt-100 pb-70 jarallax","data-jarallax":!0,children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title white-title",children:[t.jsx("span",{children:"Our Challenges"}),t.jsx("h2",{children:"You Can Protect Your Organization’s Cybersecurity By Us"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-threat"}),t.jsx("h3",{children:"Identify threats"}),t.jsx("p",{children:"We analyze a security ecosystem at the holistic level to find malicious users, abnormal activity and anything that could compromise a network."}),t.jsx("span",{className:"flaticon-threat"})]})})}),t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-cyber"}),t.jsx("h3",{children:"Risk assessment "}),t.jsx("p",{children:"A highly rigorous risk assessment is carried out by VaDigiTeCx to recognize, evaluate, and rank risks associated with information and information systems."}),t.jsx("span",{className:"flaticon-cyber"})]})})}),t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-cyber-security-1"}),t.jsx("h3",{children:"Testing cyber security"}),t.jsx("p",{children:"We employ a variety of approaches and strategies, you can gauge the effectiveness of your cybersecurity strategy in the face of a potential attack."}),t.jsx("span",{className:"flaticon-cyber-security-1"})]})})}),t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-password"}),t.jsx("h3",{children:"Managing cloud security"}),t.jsx("p",{children:"We guarantee that your users are granted access solely to the data essential for their specific roles and responsibilities, all while keeping a close watch on user activities."}),t.jsx("span",{className:"flaticon-password"})]})})})]})]})})),zi="/assets/services-4-d8ec575e.jpg",Di=()=>t.jsx("section",{className:"services-area pt-100 pb-70",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title",children:[t.jsx("span",{children:"Cyber Security Services"}),t.jsx("h2",{style:{fontWeight:"700",color:"#000219",fontSize:"30px"},children:"You Can Protect Your Organization’s Cybersecurity By Services Us"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsxs("div",{className:"single-services",children:[t.jsx("div",{className:"services-img",children:t.jsx(S,{to:"/services/1",children:t.jsx("img",{src:Da,alt:"serviceImg"})})}),t.jsxs("div",{className:"services-content cloud",children:[t.jsx("h3",{children:t.jsx(S,{to:"/services/complete-it-management",children:"Complete IT Management"})}),t.jsxs("div",{className:"content",children:[t.jsxs("p",{children:[" ","We provide complete IT management, which comprises end-to-end supervision of your organization's technology infrastructure."]}),t.jsxs(S,{to:"/services/complete-it-management",className:"read-more",children:["Read More",t.jsx("i",{className:"flaticon-right-arrow"})]})]})]})]})}),t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsxs("div",{className:"single-services",children:[t.jsx("div",{className:"services-img",children:t.jsx(S,{to:"/services/2",children:t.jsx("img",{src:Ma,alt:"servicesImg"})})}),t.jsxs("div",{className:"services-content cloud",children:[t.jsx("h3",{children:t.jsx(S,{to:"/services/managed-cyber-security",children:"Managed Cyber Security"})}),t.jsx("p",{children:"Experience peace of mind with our Managed Cyber Security services. We provide round-the-clock protection against cyber threats."}),t.jsxs(S,{to:"/services/managed-cyber-security",className:"read-more",children:["Read More",t.jsx("i",{className:"flaticon-right-arrow"})]})]})]})}),t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsxs("div",{className:"single-services",children:[t.jsx("div",{className:"services-img",children:t.jsx(S,{to:"/services/3",children:t.jsx("img",{src:La,alt:"servicesImg"})})}),t.jsxs("div",{className:"services-content ",children:[t.jsx("h3",{children:t.jsx(S,{to:"/services/cloud-and-infrastructure",children:"Cloud & Infrastructure"})}),t.jsx("p",{children:"Let us design, deploy, and manage a scalable cloud environment tailored to your unique needs."}),t.jsxs(S,{to:"/services/cloud-and-infrastructure",className:"read-more",children:["Read More",t.jsx("i",{className:"flaticon-right-arrow"})]})]})]})}),t.jsx("div",{className:"col-lg-3 col-sm-6",children:t.jsxs("div",{className:"single-services",children:[t.jsx("div",{className:"services-img",children:t.jsx(S,{to:"/solutions/1",children:t.jsx("img",{src:zi,alt:"servicesImg"})})}),t.jsxs("div",{className:"services-content",children:[t.jsx("h3",{children:t.jsx(S,{to:"/solutions/risk-and-compliance",children:"Risk & Compliance"})}),t.jsx("p",{children:"Mitigate risks and demonstrate regulatory adherence with our tailored strategies and meticulous assessments."}),t.jsxs(S,{to:"/solutions/risk-and-compliance",className:"read-more",children:["Read More",t.jsx("i",{className:"flaticon-right-arrow"})]})]})]})})]})]})}),Mi=()=>t.jsx("section",{className:"solution-area pb-70",children:t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsxs("div",{className:"solution-content",children:[t.jsxs("div",{className:"solution-title",children:[t.jsx("span",{children:"All-in Solution"}),t.jsx("h2",{children:"Our experts are providing and planning 24/7 technical support services with product and security consultation."})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-12 col-md-6",children:t.jsx("div",{className:"single-solution overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("h3",{children:t.jsx("a",{href:"#",children:"Risk & Compliance"})}),t.jsx("p",{children:"Mitigate risks and ensure regulatory adherence with our expert Risk & Compliance services. Our tailored strategies and meticulous assessments keep your business resilient in the face of evolving challenges"}),t.jsx("span",{children:"01"})]})})}),t.jsx("div",{className:"col-lg-12 col-md-6",children:t.jsx("div",{className:"single-solution overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("h3",{children:t.jsx("a",{href:"#",children:"Web security "})}),t.jsx("p",{children:"Protect your digital assets with robust web security solutions. Our expert team employs cutting-edge technology and proactive strategies to safeguard your online presence"}),t.jsx("span",{children:"02"})]})})}),t.jsx("div",{className:"col-lg-12 col-md-6",children:t.jsx("div",{className:"single-solution overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("h3",{children:t.jsx("a",{href:"#",children:"Email security"})}),t.jsx("p",{children:"Safeguard your communication channels with our Email Security solutions. We employ advanced threat detection and encryption protocols to shield your inbox from phishing attacks, malware, and other cyber threats."}),t.jsx("span",{children:"03"})]})})}),t.jsx("div",{className:"col-lg-12 col-md-6",children:t.jsx("div",{className:"single-solution overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("h3",{children:t.jsx("a",{href:"#",children:"Data security"})}),t.jsx("p",{children:"Protect your most valuable asset - your data. Our Data Security solutions employ advanced encryption, access controls, and monitoring to safeguard sensitive information."}),t.jsx("span",{children:"04"})]})})}),t.jsx("div",{className:"col-lg-12 col-md-6",children:t.jsx("div",{className:"single-solution overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("h3",{children:t.jsx("a",{href:"#",children:"Cloud security"})}),t.jsx("p",{children:"Raise your cloud environment's security with our comprehensive Cloud Security solutions. We employ advanced encryption, access controls, and threat monitoring to safeguard your data and applications in the cloud.t."}),t.jsx("span",{children:"05"})]})})}),t.jsx("div",{className:"col-lg-12 col-md-6",children:t.jsx("div",{className:"single-solution overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("h3",{children:t.jsx("a",{href:"#",children:"End-point security"})}),t.jsx("p",{children:"Secure your network's last line of defence with our End-point Security solutions. We employ advanced threat detection, firewalls, and encryption to fortify your devices against cyber threats."}),t.jsx("span",{children:"06"})]})})})]})]})}),t.jsx("div",{className:"col-lg-6 pr-0",children:t.jsx("div",{className:"homeSolutionImg",children:t.jsx("img",{src:Ra,alt:"solutionImg"})})})]})})}),Li=()=>(F.useEffect(()=>{Xt(document.querySelectorAll(".jarallax"),{speed:.3})},[]),t.jsx("section",{className:"get-in-touch-area ptb-100 jarallax","data-jarallax":!0,children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title white-title",children:[t.jsx("span",{children:"Get In Touch"}),t.jsx("h2",{children:"Contact Us Today To Speak With An Expert About Your Specific Needs"})]}),t.jsxs("form",{className:"get-in-touch-form",children:[t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Name"}),t.jsx("input",{type:"text",className:"form-control",id:"First-Name"})]})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",className:"form-control",id:"Email"})]})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",className:"form-control",id:"Number"})]})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",className:"form-control",id:"Company"})]})})]}),t.jsx("button",{type:"submit",className:"default-btn",children:t.jsx("span",{children:"Consultation"})})]})]})})),Ri="/assets/protect-img-3ec93d78.jpg",Fi=()=>t.jsx("section",{className:"protect-area pt-100 pb-70",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6",children:t.jsxs("div",{className:"protect-content",children:[t.jsxs("div",{className:"protect-title",children:[t.jsx("span",{children:"End-point security"}),t.jsx("h2",{children:"Protecting devices like desktops, laptops, mobile phones, and tablets from malicious threats and cyberattacks."})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-database"}),t.jsx("h3",{children:"Database Security"}),t.jsx("p",{children:"Protecting devices like desktops, laptops, mobile phones, and tablets from malicious threats and cyberattacks."}),t.jsx("span",{className:"flaticon-database"})]})})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-application"}),t.jsx("h3",{children:"Database Security"}),t.jsx("p",{children:"Security mechanism for restricting access to the data base by unauthorized users."}),t.jsx("span",{className:"flaticon-application"})]})})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-security"}),t.jsx("h3",{children:"Web Security"}),t.jsx("p",{children:"Protecting networks and computer systems from damage to or the theft of software, hardware, or data."}),t.jsx("span",{className:"flaticon-security"})]})})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsx("div",{className:"single-challenges overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsx("i",{className:"flaticon-security-1"}),t.jsx("h3",{children:"Server Security"}),t.jsx("p",{children:"Protecting data and resources held on the servers with tools and techniques that help prevent intrusions, hacking and other malicious actions."}),t.jsx("span",{className:"flaticon-security-1"})]})})})]})]})}),t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"protect-img",children:t.jsx("img",{src:Ri,alt:"Image"})})})]})})});var Na={exports:{}};(function(e,n){(function(s,r){e.exports=r(F)})(Aa,function(s){var r="default"in s?s.default:s;/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0

	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.

	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,y){o.__proto__=y}||function(o,y){for(var b in y)y.hasOwnProperty(b)&&(o[b]=y[b])};function f(o,y){c(o,y);function b(){this.constructor=o}o.prototype=y===null?Object.create(y):(b.prototype=y.prototype,new b)}var h=Object.assign||function(y){for(var b,x=1,d=arguments.length;x<d;x++){b=arguments[x];for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&(y[a]=b[a])}return y};function m(o,y){var b={};for(var x in o)Object.prototype.hasOwnProperty.call(o,x)&&y.indexOf(x)<0&&(b[x]=o[x]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,x=Object.getOwnPropertySymbols(o);d<x.length;d++)y.indexOf(x[d])<0&&(b[x[d]]=o[x[d]]);return b}(function(o,y,b,x){function d(a,i){this.settings=null,this.options=o.extend({},d.Defaults,i),this.$element=o(a),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},o.each(["onResize","onThrottledResize"],o.proxy(function(l,u){this._handlers[u]=o.proxy(this[u],this)},this)),o.each(d.Plugins,o.proxy(function(l,u){this._plugins[l.charAt(0).toLowerCase()+l.slice(1)]=new u(this)},this)),o.each(d.Workers,o.proxy(function(l,u){this._pipe.push({filter:u.filter,run:o.proxy(u.run,this)})},this)),this.setup(),this.initialize()}d.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:y,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},d.Width={Default:"default",Inner:"inner",Outer:"outer"},d.Type={Event:"event",State:"state"},d.Plugins={},d.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var i=this.settings.margin||"",l=!this.settings.autoWidth,u=this.settings.rtl,g={width:"auto","margin-left":u?i:"","margin-right":u?"":i};!l&&this.$stage.children().css(g),a.css=g}},{filter:["width","items","settings"],run:function(a){var i=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,l=null,u=this._items.length,g=!this.settings.autoWidth,v=[];for(a.items={merge:!1,width:i};u--;)l=this._mergers[u],l=this.settings.mergeFit&&Math.min(l,this.settings.items)||l,a.items.merge=l>1||a.items.merge,v[u]=g?i*l:this._items[u].width();this._widths=v}},{filter:["items","settings"],run:function(){var a=[],i=this._items,l=this.settings,u=Math.max(l.items*2,4),g=Math.ceil(i.length/2)*2,v=l.loop&&i.length?l.rewind?u:Math.max(u,g):0,k="",C="";for(v/=2;v>0;)a.push(this.normalize(a.length/2,!0)),k=k+i[a[a.length-1]][0].outerHTML,a.push(this.normalize(i.length-1-(a.length-1)/2,!0)),C=i[a[a.length-1]][0].outerHTML+C,v-=1;this._clones=a,o(k).addClass("cloned").appendTo(this.$stage),o(C).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,i=this._clones.length+this._items.length,l=-1,u=0,g=0,v=[];++l<i;)u=v[l-1]||0,g=this._widths[this.relative(l)]+this.settings.margin,v.push(u+g*a);this._coordinates=v}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,i=this._coordinates,l={width:Math.ceil(Math.abs(i[i.length-1]))+a*2,"padding-left":a||"","padding-right":a||""};this.$stage.css(l)}},{filter:["width","items","settings"],run:function(a){var i=this._coordinates.length,l=!this.settings.autoWidth,u=this.$stage.children();if(l&&a.items.merge)for(;i--;)a.css.width=this._widths[this.relative(i)],u.eq(i).css(a.css);else l&&(a.css.width=a.items.width,u.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a=this.settings.rtl?1:-1,i=this.settings.stagePadding*2,l=this.coordinates(this.current())+i,u=l+this.width()*a,g,v,k=[],C,E;for(C=0,E=this._coordinates.length;C<E;C++)g=this._coordinates[C-1]||0,v=Math.abs(this._coordinates[C])+i*a,(this.op(g,"<=",l)&&this.op(g,">",u)||this.op(v,"<",l)&&this.op(v,">",u))&&k.push(C);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+k.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],d.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),!this.$stage.length&&(this.$element.addClass(this.options.loadingClass),this.$stage=o("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(o("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},d.prototype.initializeItems=function(){var a=this.$element.find(".owl-item");if(a.length){this._items=a.get().map(function(i){return o(i)}),this._mergers=this._items.map(function(){return 1}),this.refresh();return}this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},d.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,i,l;a=this.$element.find("img"),i=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:x,l=this.$element.children(i).width(),a.length&&l<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},d.prototype.isVisible=function(){return this.settings.checkVisibility?this.$element.is(":visible"):!0},d.prototype.setup=function(){var a=this.viewport(),i=this.options.responsive,l=-1,u=null;i?(o.each(i,function(g){g<=a&&g>l&&(l=Number(g))}),u=o.extend({},this.options,i[l]),typeof u.stagePadding=="function"&&(u.stagePadding=u.stagePadding()),delete u.responsive,u.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+l))):u=o.extend({},this.options),this.trigger("change",{property:{name:"settings",value:u}}),this._breakpoint=l,this.settings=u,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},d.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},d.prototype.prepare=function(a){var i=this.trigger("prepare",{content:a});return i.data||(i.data=o("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(a)),this.trigger("prepared",{content:i.data}),i.data},d.prototype.update=function(){for(var a=0,i=this._pipe.length,l=o.proxy(function(g){return this[g]},this._invalidated),u={};a<i;)(this._invalidated.all||o.grep(this._pipe[a].filter,l).length>0)&&this._pipe[a].run(u),a++;this._invalidated={},!this.is("valid")&&this.enter("valid")},d.prototype.width=function(a){switch(a=a||d.Width.Default,a){case d.Width.Inner:case d.Width.Outer:return this._width;default:return this._width-this.settings.stagePadding*2+this.settings.margin}},d.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},d.prototype.onThrottledResize=function(){y.clearTimeout(this.resizeTimer),this.resizeTimer=y.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},d.prototype.onResize=function(){if(!this._items.length||this._width===this.$element.width()||!this.isVisible())return!1;if(this.enter("resizing"),this.trigger("resize").isDefaultPrevented())return this.leave("resizing"),!1;this.invalidate("width"),this.refresh(),this.leave("resizing"),this.trigger("resized")},d.prototype.registerEventHandlers=function(){o.support.transition&&this.$stage.on(o.support.transition.end+".owl.core",o.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(y,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",o.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",o.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",o.proxy(this.onDragEnd,this)))},d.prototype.onDragStart=function(a){var i=null;a.which!==3&&(o.support.transform?(i=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),i={x:i[i.length===16?12:4],y:i[i.length===16?13:5]}):(i=this.$stage.position(),i={x:this.settings.rtl?i.left+this.$stage.width()-this.width()+this.settings.margin:i.left,y:i.top}),this.is("animating")&&(o.support.transform?this.animate(i.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,a.type==="mousedown"),this.speed(0),this._drag.time=new Date().getTime(),this._drag.target=o(a.target),this._drag.stage.start=i,this._drag.stage.current=i,this._drag.pointer=this.pointer(a),o(b).on("mouseup.owl.core touchend.owl.core",o.proxy(this.onDragEnd,this)),o(b).one("mousemove.owl.core touchmove.owl.core",o.proxy(function(l){var u=this.difference(this._drag.pointer,this.pointer(l));o(b).on("mousemove.owl.core touchmove.owl.core",o.proxy(this.onDragMove,this)),!(Math.abs(u.x)<Math.abs(u.y)&&this.is("valid"))&&(l.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},d.prototype.onDragMove=function(a){var i=null,l=null,u=null,g=this.difference(this._drag.pointer,this.pointer(a)),v=this.difference(this._drag.stage.start,g);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(i=this.coordinates(this.minimum()),l=this.coordinates(this.maximum()+1)-i,v.x=((v.x-i)%l+l)%l+i):(i=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),l=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),u=this.settings.pullDrag?-1*g.x/5:0,v.x=Math.max(Math.min(v.x,i+u),l+u)),this._drag.stage.current=v,this.animate(v.x))},d.prototype.onDragEnd=function(a){var i=this.difference(this._drag.pointer,this.pointer(a)),l=this._drag.stage.current,u=i.x>0^this.settings.rtl?"left":"right";o(b).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(i.x!==0&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(l.x,i.x!==0?u:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=u,(Math.abs(i.x)>3||new Date().getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},d.prototype.closest=function(a,i){var l=-1,u=30,g=this.width(),v=this.coordinates();return this.settings.freeDrag||o.each(v,o.proxy(function(k,C){return i==="left"&&a>C-u&&a<C+u?l=k:i==="right"&&a>C-g-u&&a<C-g+u?l=k+1:this.op(a,"<",C)&&this.op(a,">",v[k+1]!==x?v[k+1]:C-g)&&(l=i==="left"?k+1:k),l===-1},this)),this.settings.loop||(this.op(a,">",v[this.minimum()])?l=a=this.minimum():this.op(a,"<",v[this.maximum()])&&(l=a=this.maximum())),l},d.prototype.animate=function(a){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),o.support.transform3d&&o.support.transition?this.$stage.css({transform:"translate3d("+a+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):i?this.$stage.animate({left:a+"px"},this.speed(),this.settings.fallbackEasing,o.proxy(this.onTransitionEnd,this)):this.$stage.css({left:a+"px"})},d.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},d.prototype.current=function(a){if(a===x)return this._current;if(this._items.length===0)return x;if(a=this.normalize(a),this._current!==a){var i=this.trigger("change",{property:{name:"position",value:a}});i.data!==x&&(a=this.normalize(i.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},d.prototype.invalidate=function(a){return o.type(a)==="string"&&(this._invalidated[a]=!0,this.is("valid")&&this.leave("valid")),o.map(this._invalidated,function(i,l){return l})},d.prototype.reset=function(a){a=this.normalize(a),a!==x&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},d.prototype.normalize=function(a,i){var l=this._items.length,u=i?0:this._clones.length;return!this.isNumeric(a)||l<1?a=x:(a<0||a>=l+u)&&(a=((a-u/2)%l+l)%l+u/2),a},d.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},d.prototype.maximum=function(a){var i=this.settings,l=this._coordinates.length,u,g,v;if(i.loop)l=this._clones.length/2+this._items.length-1;else if(i.autoWidth||i.merge){if(u=this._items.length,u)for(g=this._items[--u].width(),v=this.$element.width();u--&&(g+=this._items[u].width()+this.settings.margin,!(g>v)););l=u+1}else i.center?l=this._items.length-1:l=this._items.length-i.items;return a&&(l-=this._clones.length/2),Math.max(l,0)},d.prototype.minimum=function(a){return a?0:this._clones.length/2},d.prototype.items=function(a){return a===x?this._items.slice():(a=this.normalize(a,!0),this._items[a])},d.prototype.mergers=function(a){return a===x?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},d.prototype.clones=function(a){var i=this._clones.length/2,l=i+this._items.length,u=function(g){return g%2===0?l+g/2:i-(g+1)/2};return a===x?o.map(this._clones,function(g,v){return u(v)}):o.map(this._clones,function(g,v){return g===a?u(v):null})},d.prototype.speed=function(a){return a!==x&&(this._speed=a),this._speed},d.prototype.coordinates=function(a){var i=1,l=a-1,u;return a===x?o.map(this._coordinates,o.proxy(function(g,v){return this.coordinates(v)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,l=a+1),u=this._coordinates[a],u+=(this.width()-u+(this._coordinates[l]||0))/2*i):u=this._coordinates[l]||0,u=Math.ceil(u),u)},d.prototype.duration=function(a,i,l){return l===0?0:Math.min(Math.max(Math.abs(i-a),1),6)*Math.abs(l||this.settings.smartSpeed)},d.prototype.to=function(a,i){var l=this.current(),u=null,g=a-this.relative(l),v=(g>0)-(g<0),k=this._items.length,C=this.minimum(),E=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(g)>k/2&&(g+=v*-1*k),a=l+g,u=((a-C)%k+k)%k+C,u!==a&&u-g<=E&&u-g>0&&(l=u-g,a=u,this.reset(l))):this.settings.rewind?(E+=1,a=(a%E+E)%E):a=Math.max(C,Math.min(E,a)),this.speed(this.duration(l,a,i)),this.current(a),this.isVisible()&&this.update()},d.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},d.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},d.prototype.onTransitionEnd=function(a){if(a!==x&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},d.prototype.viewport=function(){var a;return this.options.responsiveBaseElement!==y?a=o(this.options.responsiveBaseElement).width():y.innerWidth?a=y.innerWidth:b.documentElement&&b.documentElement.clientWidth?a=b.documentElement.clientWidth:console.warn("Can not detect viewport width."),a},d.prototype.replace=function(a){this.$stage.empty(),this._items=[],a&&(a=a instanceof jQuery?a:o(a)),this.settings.nestedItemSelector&&(a=a.find("."+this.settings.nestedItemSelector)),a.filter(function(){return this.nodeType===1}).each(o.proxy(function(i,l){l=this.prepare(l),this.$stage.append(l),this._items.push(l),this._mergers.push(l.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},d.prototype.add=function(a,i){var l=this.relative(this._current);i=i===x?this._items.length:this.normalize(i,!0),a=a instanceof jQuery?a:o(a),this.trigger("add",{content:a,position:i}),a=this.prepare(a),this._items.length===0||i===this._items.length?(this._items.length===0&&this.$stage.append(a),this._items.length!==0&&this._items[i-1].after(a),this._items.push(a),this._mergers.push(a.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1)):(this._items[i].before(a),this._items.splice(i,0,a),this._mergers.splice(i,0,a.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1)),this._items[l]&&this.reset(this._items[l].index()),this.invalidate("items"),this.trigger("added",{content:a,position:i})},d.prototype.remove=function(a){a=this.normalize(a,!0),a!==x&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},d.prototype.preloadAutoWidthImages=function(a){a.each(o.proxy(function(i,l){this.enter("pre-loading"),l=o(l),o(new Image).one("load",o.proxy(function(u){l.attr("src",u.target.src),l.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",l.attr("src")||l.attr("data-src")||l.attr("data-src-retina"))},this))},d.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),o(b).off(".owl.core"),this.settings.responsive!==!1&&(y.clearTimeout(this.resizeTimer),this.off(y,"resize",this._handlers.onThrottledResize));for(var a in this._plugins)this._plugins[a].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},d.prototype.op=function(a,i,l){var u=this.settings.rtl;switch(i){case"<":return u?a>l:a<l;case">":return u?a<l:a>l;case">=":return u?a<=l:a>=l;case"<=":return u?a>=l:a<=l}},d.prototype.on=function(a,i,l,u){a.addEventListener?a.addEventListener(i,l,u):a.attachEvent&&a.attachEvent("on"+i,l)},d.prototype.off=function(a,i,l,u){a.removeEventListener?a.removeEventListener(i,l,u):a.detachEvent&&a.detachEvent("on"+i,l)},d.prototype.trigger=function(a,i,l,u,g){var v={item:{count:this._items.length,index:this.current()}},k=o.camelCase(o.grep(["on",a,l],function(E){return E}).join("-").toLowerCase()),C=o.Event([a,"owl",l||"carousel"].join(".").toLowerCase(),o.extend({relatedTarget:this},v,i));return this._supress[a]||(o.each(this._plugins,function(E,W){W.onTrigger&&W.onTrigger(C)}),this.register({type:d.Type.Event,name:a}),this.$element.trigger(C),this.settings&&typeof this.settings[k]=="function"&&this.settings[k].call(this,C)),C},d.prototype.enter=function(a){o.each([a].concat(this._states.tags[a]||[]),o.proxy(function(i,l){this._states.current[l]===x&&(this._states.current[l]=0),this._states.current[l]++},this))},d.prototype.leave=function(a){o.each([a].concat(this._states.tags[a]||[]),o.proxy(function(i,l){this._states.current[l]--},this))},d.prototype.register=function(a){if(a.type===d.Type.Event){if(o.event.special[a.name]||(o.event.special[a.name]={}),!o.event.special[a.name].owl){var i=o.event.special[a.name]._default;o.event.special[a.name]._default=function(l){return i&&i.apply&&(!l.namespace||l.namespace.indexOf("owl")===-1)?i.apply(this,arguments):l.namespace&&l.namespace.indexOf("owl")>-1},o.event.special[a.name].owl=!0}}else a.type===d.Type.State&&(this._states.tags[a.name]?this._states.tags[a.name]=this._states.tags[a.name].concat(a.tags):this._states.tags[a.name]=a.tags,this._states.tags[a.name]=o.grep(this._states.tags[a.name],o.proxy(function(l,u){return o.inArray(l,this._states.tags[a.name])===u},this)))},d.prototype.suppress=function(a){o.each(a,o.proxy(function(i,l){this._supress[l]=!0},this))},d.prototype.release=function(a){o.each(a,o.proxy(function(i,l){delete this._supress[l]},this))},d.prototype.pointer=function(a){var i={x:null,y:null};return a=a.originalEvent||a||y.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(i.x=a.pageX,i.y=a.pageY):(i.x=a.clientX,i.y=a.clientY),i},d.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},d.prototype.difference=function(a,i){return{x:a.x-i.x,y:a.y-i.y}},o.fn.owlCarousel=function(a){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var l=o(this),u=l.data("owl.carousel");u||(u=new d(this,typeof a=="object"&&a),l.data("owl.carousel",u),o.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(g,v){u.register({type:d.Type.Event,name:v}),u.$element.on(v+".owl.carousel.core",o.proxy(function(k){k.namespace&&k.relatedTarget!==this&&(this.suppress([v]),u[v].apply(this,[].slice.call(arguments,1)),this.release([v]))},u))})),typeof a=="string"&&a.charAt(0)!=="_"&&u[a].apply(u,i)})},o.fn.owlCarousel.Constructor=d})(window.Zepto||window.jQuery,window,document),function(o,y,b,x){var d=function(a){this._core=a,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=o.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers)};d.Defaults={autoRefresh:!0,autoRefreshInterval:500},d.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=y.setInterval(o.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},d.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},d.prototype.destroy=function(){var a,i;y.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.AutoRefresh=d}(window.Zepto||window.jQuery,window),function(o,y,b,x){var d=function(a){this._core=a,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":o.proxy(function(i){if(i.namespace&&!(!this._core.settings||!this._core.settings.lazyLoad)&&(i.property&&i.property.name=="position"||i.type=="initialized")){var l=this._core.settings,u=l.center&&Math.ceil(l.items/2)||l.items,g=l.center&&u*-1||0,v=(i.property&&i.property.value!==x?i.property.value:this._core.current())+g,k=this._core.clones().length,C=o.proxy(function(E,W){this.load(W)},this);for(l.lazyLoadEager>0&&(u+=l.lazyLoadEager,l.loop&&(v-=l.lazyLoadEager,u++));g++<u;)this.load(k/2+this._core.relative(v)),k&&o.each(this._core.clones(this._core.relative(v)),C),v++}},this)},this._core.options=o.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers)};d.Defaults={lazyLoad:!1,lazyLoadEager:0},d.prototype.load=function(a){var i=this._core.$stage.children().eq(a),l=i&&i.find(".owl-lazy");!l||o.inArray(i.get(0),this._loaded)>-1||(l.each(o.proxy(function(u,g){var v=o(g),k,C=y.devicePixelRatio>1&&v.attr("data-src-retina")||v.attr("data-src")||v.attr("data-srcset");this._core.trigger("load",{element:v,url:C},"lazy"),v.is("img")?v.one("load.owl.lazy",o.proxy(function(){v.css("opacity",1),this._core.trigger("loaded",{element:v,url:C},"lazy")},this)).attr("src",C):v.is("source")?v.one("load.owl.lazy",o.proxy(function(){this._core.trigger("loaded",{element:v,url:C},"lazy")},this)).attr("srcset",C):(k=new Image,k.onload=o.proxy(function(){v.css({"background-image":'url("'+C+'")',opacity:"1"}),this._core.trigger("loaded",{element:v,url:C},"lazy")},this),k.src=C)},this)),this._loaded.push(i.get(0)))},d.prototype.destroy=function(){var a,i;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.Lazy=d}(window.Zepto||window.jQuery,window),function(o,y,b,x){var d=function(a){this._core=a,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":o.proxy(function(l){l.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":o.proxy(function(l){l.namespace&&this._core.settings.autoHeight&&l.property.name==="position"&&this.update()},this),"loaded.owl.lazy":o.proxy(function(l){l.namespace&&this._core.settings.autoHeight&&l.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=o.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var i=this;o(y).on("load",function(){i._core.settings.autoHeight&&i.update()}),o(y).resize(function(){i._core.settings.autoHeight&&(i._intervalId!=null&&clearTimeout(i._intervalId),i._intervalId=setTimeout(function(){i.update()},250))})};d.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},d.prototype.update=function(){var a=this._core._current,i=a+this._core.settings.items,l=this._core.settings.lazyLoad,u=this._core.$stage.children().toArray().slice(a,i),g=[],v=0;o.each(u,function(k,C){g.push(o(C).height())}),v=Math.max.apply(null,g),v<=1&&l&&this._previousHeight&&(v=this._previousHeight),this._previousHeight=v,this._core.$stage.parent().height(v).addClass(this._core.settings.autoHeightClass)},d.prototype.destroy=function(){var a,i;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.AutoHeight=d}(window.Zepto||window.jQuery,window),function(o,y,b,x){var d=function(a){this._core=a,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":o.proxy(function(i){i.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.video&&this.isInFullScreen()&&i.preventDefault()},this),"refreshed.owl.carousel":o.proxy(function(i){i.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":o.proxy(function(i){i.namespace&&i.property.name==="position"&&this._playing&&this.stop()},this),"prepared.owl.carousel":o.proxy(function(i){if(i.namespace){var l=o(i.content).find(".owl-video");l.length&&(l.css("display","none"),this.fetch(l,o(i.content)))}},this)},this._core.options=o.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",o.proxy(function(i){this.play(i)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,i){var l=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),u=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),g=a.attr("data-width")||this._core.settings.videoWidth,v=a.attr("data-height")||this._core.settings.videoHeight,k=a.attr("href");if(k){if(u=k.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),u[3].indexOf("youtu")>-1)l="youtube";else if(u[3].indexOf("vimeo")>-1)l="vimeo";else if(u[3].indexOf("vzaar")>-1)l="vzaar";else throw new Error("Video URL not supported.");u=u[6]}else throw new Error("Missing video URL.");this._videos[k]={type:l,id:u,width:g,height:v},i.attr("data-video",k),this.thumbnail(a,this._videos[k])},d.prototype.thumbnail=function(a,i){var l,u,g,v=i.width&&i.height?"width:"+i.width+"px;height:"+i.height+"px;":"",k=a.find("img"),C="src",E="",W=this._core.settings,K=function(te){u='<div class="owl-video-play-icon"></div>',W.lazyLoad?l=o("<div/>",{class:"owl-video-tn "+E,srcType:te}):l=o("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+te+")"}),a.after(l),a.after(u)};if(a.wrap(o("<div/>",{class:"owl-video-wrapper",style:v})),this._core.settings.lazyLoad&&(C="data-src",E="owl-lazy"),k.length)return K(k.attr(C)),k.remove(),!1;i.type==="youtube"?(g="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",K(g)):i.type==="vimeo"?o.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(te){g=te[0].thumbnail_large,K(g)}}):i.type==="vzaar"&&o.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(te){g=te.framegrab_url,K(g)}})},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},d.prototype.play=function(a){var i=o(a.target),l=i.closest("."+this._core.settings.itemClass),u=this._videos[l.attr("data-video")],g=u.width||"100%",v=u.height||this._core.$stage.height(),k;this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),l=this._core.items(this._core.relative(l.index())),this._core.reset(l.index()),k=o('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),k.attr("height",v),k.attr("width",g),u.type==="youtube"?k.attr("src","//www.youtube.com/embed/"+u.id+"?autoplay=1&rel=0&v="+u.id):u.type==="vimeo"?k.attr("src","//player.vimeo.com/video/"+u.id+"?autoplay=1"):u.type==="vzaar"&&k.attr("src","//view.vzaar.com/"+u.id+"/player?autoplay=true"),o(k).wrap('<div class="owl-video-frame" />').insertAfter(l.find(".owl-video")),this._playing=l.addClass("owl-video-playing"))},d.prototype.isInFullScreen=function(){var a=b.fullscreenElement||b.mozFullScreenElement||b.webkitFullscreenElement;return a&&o(a).parent().hasClass("owl-video-frame")},d.prototype.destroy=function(){var a,i;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(o,y,b,x){var d=function(a){this.core=a,this.core.options=o.extend({},d.Defaults,this.core.options),this.swapping=!0,this.previous=x,this.next=x,this.handlers={"change.owl.carousel":o.proxy(function(i){i.namespace&&i.property.name=="position"&&(this.previous=this.core.current(),this.next=i.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":o.proxy(function(i){i.namespace&&(this.swapping=i.type=="translated")},this),"translate.owl.carousel":o.proxy(function(i){i.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};d.Defaults={animateOut:!1,animateIn:!1},d.prototype.swap=function(){if(this.core.settings.items===1&&!(!o.support.animation||!o.support.transition)){this.core.speed(0);var a,i=o.proxy(this.clear,this),l=this.core.$stage.children().eq(this.previous),u=this.core.$stage.children().eq(this.next),g=this.core.settings.animateIn,v=this.core.settings.animateOut;this.core.current()!==this.previous&&(v&&(a=this.core.coordinates(this.previous)-this.core.coordinates(this.next),l.one(o.support.animation.end,i).css({left:a+"px"}).addClass("animated owl-animated-out").addClass(v)),g&&u.one(o.support.animation.end,i).addClass("animated owl-animated-in").addClass(g))}},d.prototype.clear=function(a){o(a.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},d.prototype.destroy=function(){var a,i;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.Animate=d}(window.Zepto||window.jQuery),function(o,y,b,x){var d=function(a){this._core=a,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":o.proxy(function(i){i.namespace&&i.property.name==="settings"?this._core.settings.autoplay?this.play():this.stop():i.namespace&&i.property.name==="position"&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":o.proxy(function(i,l,u){i.namespace&&this.play(l,u)},this),"stop.owl.autoplay":o.proxy(function(i){i.namespace&&this.stop()},this),"mouseover.owl.autoplay":o.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":o.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":o.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":o.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=o.extend({},d.Defaults,this._core.options)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype._next=function(a){this._call=y.setTimeout(o.proxy(this._next,this,a),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),!(this._core.is("interacting")||b.hidden)&&this._core.next(a||this._core.settings.autoplaySpeed)},d.prototype.read=function(){return new Date().getTime()-this._time},d.prototype.play=function(a,i){var l;this._core.is("rotating")||this._core.enter("rotating"),a=a||this._core.settings.autoplayTimeout,l=Math.min(this._time%(this._timeout||a),a),this._paused?(this._time=this.read(),this._paused=!1):y.clearTimeout(this._call),this._time+=this.read()%a-l,this._timeout=a,this._call=y.setTimeout(o.proxy(this._next,this,i),a-l)},d.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,y.clearTimeout(this._call),this._core.leave("rotating"))},d.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,y.clearTimeout(this._call))},d.prototype.destroy=function(){var a,i;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(o,y,b,x){var d=function(a){this._core=a,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+o(i.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.dotsData&&this._templates.splice(i.position,0,this._templates.pop())},this),"remove.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.dotsData&&this._templates.splice(i.position,1)},this),"changed.owl.carousel":o.proxy(function(i){i.namespace&&i.property.name=="position"&&this.draw()},this),"initialized.owl.carousel":o.proxy(function(i){i.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":o.proxy(function(i){i.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=o.extend({},d.Defaults,this._core.options),this.$element.on(this._handlers)};d.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},d.prototype.initialize=function(){var a,i=this._core.settings;this._controls.$relative=(i.navContainer?o(i.navContainer):o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=o("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",o.proxy(function(l){this.prev(i.navSpeed)},this)),this._controls.$next=o("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",o.proxy(function(l){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?o(i.dotsContainer):o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",o.proxy(function(l){var u=o(l.target).parent().is(this._controls.$absolute)?o(l.target).index():o(l.target).parent().index();l.preventDefault(),this.to(u,i.dotsSpeed)},this));for(a in this._overrides)this._core[a]=o.proxy(this[a],this)},d.prototype.destroy=function(){var a,i,l,u,g;g=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(i in this._controls)i==="$relative"&&g.navContainer?this._controls[i].html(""):this._controls[i].remove();for(u in this.overides)this._core[u]=this._overrides[u];for(l in Object.getOwnPropertyNames(this))typeof this[l]!="function"&&(this[l]=null)},d.prototype.update=function(){var a,i,l=this._core.clones().length/2,u=l+this._core.items().length,g=this._core.maximum(!0),v=this._core.settings,k=v.center||v.autoWidth||v.dotsData?1:v.dotsEach||v.items;if(v.slideBy!=="page"&&(v.slideBy=Math.min(v.slideBy,v.items)),v.dots||v.slideBy=="page")for(this._pages=[],a=l,i=0,0;a<u;a++){if(i>=k||i===0){if(this._pages.push({start:Math.min(g,a-l),end:a-l+k-1}),Math.min(g,a-l)===g)break;i=0}i+=this._core.mergers(this._core.relative(a))}},d.prototype.draw=function(){var a,i=this._core.settings,l=this._core.items().length<=i.items,u=this._core.relative(this._core.current()),g=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||l),i.nav&&(this._controls.$previous.toggleClass("disabled",!g&&u<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!g&&u>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||l),i.dots&&(a=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&a!==0?this._controls.$absolute.html(this._templates.join("")):a>0?this._controls.$absolute.append(new Array(a+1).join(this._templates[0])):a<0&&this._controls.$absolute.children().slice(a).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(o.inArray(this.current(),this._pages)).addClass("active"))},d.prototype.onTrigger=function(a){var i=this._core.settings;a.page={index:o.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},d.prototype.current=function(){var a=this._core.relative(this._core.current());return o.grep(this._pages,o.proxy(function(i,l){return i.start<=a&&i.end>=a},this)).pop()},d.prototype.getPosition=function(a){var i,l,u=this._core.settings;return u.slideBy=="page"?(i=o.inArray(this.current(),this._pages),l=this._pages.length,a?++i:--i,i=this._pages[(i%l+l)%l].start):(i=this._core.relative(this._core.current()),l=this._core.items().length,a?i+=u.slideBy:i-=u.slideBy),i},d.prototype.next=function(a){o.proxy(this._overrides.to,this._core)(this.getPosition(!0),a)},d.prototype.prev=function(a){o.proxy(this._overrides.to,this._core)(this.getPosition(!1),a)},d.prototype.to=function(a,i,l){var u;!l&&this._pages.length?(u=this._pages.length,o.proxy(this._overrides.to,this._core)(this._pages[(a%u+u)%u].start,i)):o.proxy(this._overrides.to,this._core)(a,i)},o.fn.owlCarousel.Constructor.Plugins.Navigation=d}(window.Zepto||window.jQuery),function(o,y,b,x){var d=function(a){this._core=a,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":o.proxy(function(i){i.namespace&&this._core.settings.startPosition==="URLHash"&&o(y).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":o.proxy(function(i){if(i.namespace){var l=o(i.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!l)return;this._hashes[l]=i.content}},this),"changed.owl.carousel":o.proxy(function(i){if(i.namespace&&i.property.name==="position"){var l=this._core.items(this._core.relative(this._core.current())),u=o.map(this._hashes,function(g,v){return g===l?v:null}).join();if(!u||y.location.hash.slice(1)===u)return;y.location.hash=u}},this)},this._core.options=o.extend({},d.Defaults,this._core.options),this.$element.on(this._handlers),o(y).on("hashchange.owl.navigation",o.proxy(function(i){var l=y.location.hash.substring(1),u=this._core.$stage.children(),g=this._hashes[l]&&u.index(this._hashes[l]);g===x||g===this._core.current()||this._core.to(this._core.relative(g),!1,!0)},this))};d.Defaults={URLhashListener:!1},d.prototype.destroy=function(){var a,i;o(y).off("hashchange.owl.navigation");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(i in Object.getOwnPropertyNames(this))typeof this[i]!="function"&&(this[i]=null)},o.fn.owlCarousel.Constructor.Plugins.Hash=d}(window.Zepto||window.jQuery,window),function(o,y,b,x){var d=o("<support>").get(0).style,a="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},l={csstransforms:function(){return!!u("transform")},csstransforms3d:function(){return!!u("perspective")},csstransitions:function(){return!!u("transition")},cssanimations:function(){return!!u("animation")}};function u(v,k){var C=!1,E=v.charAt(0).toUpperCase()+v.slice(1);return o.each((v+" "+a.join(E+" ")+E).split(" "),function(W,K){if(d[K]!==x)return C=k?K:!0,!1}),C}function g(v){return u(v,!0)}l.csstransitions()&&(o.support.transition=new String(g("transition")),o.support.transition.end=i.transition.end[o.support.transition]),l.cssanimations()&&(o.support.animation=new String(g("animation")),o.support.animation.end=i.animation.end[o.support.animation]),l.csstransforms()&&(o.support.transform=new String(g("transform")),o.support.transform3d=l.csstransforms3d())}(window.Zepto||window.jQuery);var p=window.jQuery,j=function(o){f(y,o);function y(b){var x=o.call(this,b)||this;x.containerRef=function(l){x.container=l};var d=N(x.props),a=d[0],i=d[1];return x.options=a,x.propsWithoutOptions=i,x}return y.prototype.componentDidMount=function(){this.$ele=p(this.container),this.create()},y.prototype.UNSAFE_componentWillReceiveProps=function(){this.destory()},y.prototype.componentDidUpdate=function(){var b=N(this.props),x=b[0],d=b[1];this.options=x,this.propsWithoutOptions=d,this.create()},y.prototype.next=function(b){if(!this.$ele)throw new Error("OwlCarousel is not created");typeof b=="number"?this.$ele.trigger("next.owl.carousel",[b]):this.$ele.trigger("next.owl.carousel",b)},y.prototype.prev=function(b){if(!this.$ele)throw new Error("OwlCarousel is not created");typeof b=="number"?this.$ele.trigger("prev.owl.carousel",[b]):this.$ele.trigger("prev.owl.carousel",b)},y.prototype.to=function(b,x){if(!this.$ele)throw new Error("OwlCarousel is not created");typeof b=="number"&&typeof x=="number"?this.$ele.trigger("to.owl.carousel",[b,x]):this.$ele.trigger("to.owl.carousel")},y.prototype.create=function(b){if(!this.$ele)throw new Error("OwlCarousel is not created");this.$ele.owlCarousel(b||this.options)},y.prototype.destory=function(){if(!this.$ele)throw new Error("OwlCarousel is not created");this.$ele.trigger("destroy.owl.carousel")},y.prototype.play=function(b,x){if(!this.$ele)throw new Error("OwlCarousel is not created");typeof b=="number"&&typeof x=="number"?this.$ele.trigger("play.owl.autoplay",[b,x]):this.$ele.trigger("play.owl.autoplay")},y.prototype.stop=function(){if(!this.$ele)throw new Error("OwlCarousel is not created");this.$ele.trigger("stop.owl.autoplay")},y.prototype.render=function(){var b=this.propsWithoutOptions,x=b.className,d=m(b,["className"]);return r.createElement("div",h({className:"owl-carousel "+x,ref:this.containerRef},d))},y}(s.Component),w=new Set(["items","margin","loop","center","mouseDrag","touchDrag","pullDrag","freeDrag","stagePadding","merge","mergeFit","autoWidth","startPosition","URLhashListener","nav","rewind","navText","navElement","slideBy","dots","dotsEach","dotData","lazyLoad","lazyContent","autoplay","autoplayTimeout","autoplayHoverPause","smartSpeed","fluidSpeed","autoplaySpeed","navSpeed","dotsSpeed","dragEndSpeed","callbacks","responsive","responsiveRefreshRate","responsiveBaseElement","video","videoHeight","videoWidth","animateOut","animateIn","fallbackEasing","info","nestedItemSelector","itemElement","stageElement","navContainer","dotsContainer","refreshClass","loadingClass","loadedClass","rtlClass","dragClass","grabClass","stageClass","stageOuterClass","navContainerClass","navClass","controlsClass","dotClass","dotsClass","autoHeightClass","responsiveClass","onInitialize","onInitialized","onResize","onResized","onRefresh","onRefreshed","onDrag","onDragged","onTranslate","onTranslated","onChange","onChanged","onLoadLazy","onLoadedLazy","onStopVideo","onPlayVideo"]);function N(o){var y={},b={};return Object.keys(o).forEach(function(x){w.has(x)?y[x]=o[x]:b[x]=o[x]}),[y,b]}return j})})(Na);var Wi=Na.exports;const ka=Ca(Wi);const Hi=()=>{const e={items:1,loop:!0,margin:0,nav:!0,dots:!1,autoplay:!0,smartSpeed:1e3,autoplayHoverPause:!0,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"]};return t.jsx("section",{className:"testimonials-area ptb-100 jarallax","data-jarallax":'{"speed": 0.3}',children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"testimonials",children:[t.jsx("span",{children:"What our customers say"}),t.jsxs(ka,{className:"testimonials-slider owl-carousel",...e,children:[t.jsxs("div",{className:"testimonials-item",children:[t.jsx("i",{className:"flaticon-quote"}),t.jsx("p",{children:"For over a year, we've relied on VaDigiTeCx, and in this period, our experience has been free from any security concerns. VaDigiTeCx delivered a technological harmony to our operations, ensuring efficiency and productivity. Knowing that our IT system can autonomously contain malware offers a reassuring sense of security. I wholeheartedly endorse VaDigiTeCx for any enterprise in search of protection against unidentified threats."}),t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})})]}),t.jsx("h3",{children:"Jastin Anderson"}),t.jsx("span",{children:"CEO"})]}),t.jsxs("div",{className:"testimonials-item",children:[t.jsx("i",{className:"flaticon-quote"}),t.jsx("p",{children:"We've had the pleasure of being a repeat customer, where we have consistently enjoyed a high level Data-Security with VaDigiTeCx. Demonstrated its value as a partner in our ongoing risk assessment and security endeavors, showcasing a superb grasp of the tasks at hand and their meticulous execution gave us a seamless, end-to-end managed IT services design that elevated our business."}),t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bxs-star"})})]}),t.jsx("h3",{children:"Juhon Anderson"}),t.jsx("span",{children:"Manager"})]})]})]})})})},Ui="/assets/partner-1-0e22de79.png",Yi="/assets/partner-2-67ee8018.png",Bi="/assets/partner-3-e85f645c.png",Vi="/assets/partner-4-2cc13e76.png",qi="/assets/partner-5-0b6e270c.png",Xi=()=>{const e={loop:!0,margin:30,nav:!1,dots:!1,autoplay:!0,smartSpeed:1e3,autoplayHoverPause:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:2},576:{items:3},768:{items:4},1200:{items:5}}};return t.jsx("div",{className:"partner-area ptb-100",children:t.jsx("div",{className:"container",children:t.jsxs(ka,{className:"partner-slider owl-carousel",...e,children:[t.jsx("div",{className:"partner-item",children:t.jsx("a",{href:"#",children:t.jsx("img",{src:Ui,alt:"partnerImg"})})}),t.jsx("div",{className:"partner-item",children:t.jsx("a",{href:"#",children:t.jsx("img",{src:Yi,alt:"partnerImg"})})}),t.jsx("div",{className:"partner-item",children:t.jsx("a",{href:"#",children:t.jsx("img",{src:Bi,alt:"partnerImg"})})}),t.jsx("div",{className:"partner-item",children:t.jsx("a",{href:"#",children:t.jsx("img",{src:Vi,alt:"partnerImg"})})}),t.jsx("div",{className:"partner-item",children:t.jsx("a",{href:"#",children:t.jsx("img",{src:qi,alt:"partnerImg"})})})]})})})},Gi="/assets/blog1-7a2dc960.jpg",Qi="/assets/blog2-db7cf552.jpg",Ki="/assets/blog3-a42bb7be.jpg",Zi=()=>t.jsx("section",{className:"blog-area pb-70",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title",children:[t.jsx("span",{children:"Latest News"}),t.jsx("h2",{style:{fontWeight:"700",color:"#000219"},children:"Read The Latest Articles From Us"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-4 col-md-6",children:t.jsxs("div",{className:"single-blog",children:[t.jsx("div",{className:"blog-img",children:t.jsx("a",{href:"blog-details.html",children:t.jsx("img",{src:Gi,alt:"blogImage"})})}),t.jsxs("div",{className:"blog-content",children:[t.jsx("span",{children:"January 20, 2021"}),t.jsx("h3",{children:t.jsx("a",{href:"blog-details.html",children:"The security risks of changing package owners"})})]})]})}),t.jsx("div",{className:"col-lg-4 col-md-6",children:t.jsxs("div",{className:"single-blog",children:[t.jsx("div",{className:"blog-img",children:t.jsx("a",{href:"blog-details.html",children:t.jsx("img",{src:Qi,alt:"blogImage"})})}),t.jsxs("div",{className:"blog-content",children:[t.jsx("span",{children:"January 19, 2021"}),t.jsx("h3",{children:t.jsx("a",{href:"blog-details.html",children:"Tips to Protecting Your Business and Family"})})]})]})}),t.jsx("div",{className:"col-lg-4 col-md-6 offset-md-3 offset-lg-0",children:t.jsxs("div",{className:"single-blog",children:[t.jsx("div",{className:"blog-img",children:t.jsx("a",{href:"blog-details.html",children:t.jsx("img",{src:Ki,alt:"blogImage"})})}),t.jsxs("div",{className:"blog-content",children:[t.jsx("span",{children:"January 18, 2021"}),t.jsx("h3",{children:t.jsx("a",{href:"blog-details.html",children:"Protect Your Workplace from Cyber Attacks"})})]})]})})]})]})}),Ji="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABCCAMAAAA8CkXxAAABwlBMVEUAAAAYGBgAAAA1NTXKysoAAAAAAAAAAAAAAADd3d0BAQEEBAQAAAAAAAADAwMPDw9DQ0P29vbj4+MNDQ2lpaUcHBwAAAAAAAAAAADY2NgJCQkJCQkXFxciIiInJycAAADz8/Pw8PDr6+vp6enV1dXOzs7BwcETExOenp5ra2szMzMAAABdXV0AAAAAAAAAAAAAAAAAAAAAAADr6+vf398CAgK6urq2trazs7OOjo5/f385OTkvLy9XV1fI0sodHx3R0dFITknGxsaxsbGSkpKRkZGHh4dmZmZ3d3dzc3M2NjZTU1NLS0sAAAAAAAAAAAAAAADj7eWuwLIMDQzLy8uosarQ0NCsrKyXl5eTk5M2NjZJSUkAAAD///8AAADR69X40eMZHRrr9u2fn59vb29PT0+/v7/++fvw8PD9/PwfHx8CAwP5+fn4+Pj39/eqv61OWE/j4+Pb29vP6dPM5c/D28e70r6htqVkZGRDTEQ3Ozf98fb97/X74+7p9ev63eq2traUp5eOjo5te29daV8jKCQQEhENDg3Z7tzOzs7Dw8OtwrClpaWNn5B8i35ycnJlcWdcXFxVYFdKU0s7QjwwNTAYvObAAAAAXXRSTlMA1MDK5/z6kPjy9OlpWu/dzv3039vVyXEw7uTj19PSTv36+Pfs6eTa18/Pz866eEIVDwn98vHi4N7U0tDPzvbr6unl3tXV09HQ0M/Oy5iIXR7++/Ps7Onc29TOzT7mlnV/AAADJ0lEQVRIx83TZ1fTUBzH8RSaEFNogTIqLcpSkKEICCK4B0OWe/5/BQSklqLsvZd7+35NQkJq2ws3feT39Jzm5vRzmjsiHJKvRpJqfEJSnZMhq59zydiTEtLq6tIgnUzK9mjfPUnoDAlnBb2zkDJsWlGzphZt6V4R+dYoH2Ivv00H0hljDiumx9wReXV+gjlmaPPgSdRsvFb4djjhmXrJPGl93Sm26u6zbK0LfoeNAoqrNmqJHGSrxqjlS0OqPXwMaf8hDr2OK8SL1/oTtMaHl/sTtsyFlxLjJS5MK4nsCiXGdXn2Vzuvbt+ez4N9jLzzhnXbx4qk6doq5D6zjz05UlWtUAV/VkUUjoyaHY7pKaoEAGca0UVG9XswG2LjesmR7QUEaNqZRUZFi2/MNold2cMC6LhNQjXZrKEAjhMaduZIuGzPHnchNytVx3RTxl0ymhzRm6TRkZg+jv9jycB0UUYm6U2EoReeGEZs84Y95cKJMTrA1KQYOjI/rDcf+Twc27ph3bq1MJ1W0BkinpxuVGrWwrqu5NDm7yxsPk3rGNH6K2YT+7ZFtxa25jIJdj+ILpprE4vpsbqK45tDrL59MHclDlv7x+6JdR4szKn1k8jGlF2AQDHbVhMLm7rc1KE7heWZZWR0S8QZYmFTe1Fesn/lgJp8Kc6yMZV64S3VntINOTVVBlrrieiOiEvExpb2wEORF4D3GtE1L+BqpDKolgdTccBT5gEy9VdwPBMQ24pbm4kD6zUruFBhDiouALnZxIlHK4FAgzVuCADuHD58owBidYiiClWLQFeEA3dIcDVRTE0uwHP8KFxaCBSWUFwl6n2l+XB80wW5nRLWLgOdRWwcugz4ncTI6Qf8N1j4WDnQUkTMip4DcgeZtejY2k/lNh3abSVqRa5r+P7qoNq968DVK4NHdOUq8OCRdrX6/p2G3wbVPu0A29PBI5veBsLfp7TLA/w1jN2NIFcbu8CfWQvPLACL6piv2UVg74uJ5wYQ3poKcje1FQZ+Tv+CIOF3GANzQVupf4edAUmoAbAwE7SXPlHUCD4ZGEgiQPYJgi9FRBKJKT7hL6MLEZ+03W8gAAAAAElFTkSuQmCC",$i=()=>t.jsx("section",{className:"subscribe-area pb-100",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"subscribe-bg",children:t.jsxs("div",{className:"row align-items-center",children:[t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsxs("div",{className:"subscribe-content",children:[t.jsx("img",{src:Ji,alt:"Image"}),t.jsx("h3",{children:"Sing up for newsletter"}),t.jsx("span",{style:{color:"#4b5280"},children:"Subscribe to the newsletter for all the latest updates"})]})}),t.jsx("div",{className:"col-lg-6 col-sm-6",children:t.jsxs("form",{className:"newsletter-form","data-toggle":"validator",children:[t.jsx("input",{type:"email",className:"form-control",placeholder:"Enter email address",name:"EMAIL",required:!0,autoComplete:"off"}),t.jsx("button",{className:"default-btn",type:"submit",children:"Subscribe"}),t.jsx("div",{id:"validator-newsletter",className:"form-result"})]})})]})})})}),es="/assets/about-img-a801eb6d.jpg",ts=()=>{const[e,n]=F.useState(0),s=["Our Experience","Why VaDigiTeCx","Approach"];console.log(e);const r=c=>{n(c)};return t.jsx("section",{className:"about-us-area pb-70",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row align-items-center",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"about-img",children:t.jsx("img",{src:es,alt:"Image"})})}),t.jsx("div",{className:"col-lg-6",children:t.jsxs("div",{className:"about-content",children:[t.jsxs("div",{className:"about-title",children:[t.jsx("span",{children:"About Us"}),t.jsx("h2",{children:"VaDigiTeCx provides you with an exceptional and uninterrupted technology experience, taking from our expertise, to prevent threats such as theft or harm."})]}),t.jsxs("div",{className:"tab",children:[t.jsx("ul",{className:"tabs",children:s.map((c,f)=>t.jsx("li",{className:e===f?"current":"",onClick:()=>r(f),children:c},f))}),t.jsxs("div",{className:"tab_content",children:[e===0&&t.jsxs("div",{className:"tabs_item",children:[t.jsx("p",{children:"The swift adoption and implementation of the internet have revolutionized the way we create and disseminate information in the present era."}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Trusted Partner"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Product Security"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"System Security"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Operational Security"]})]})]}),e===1&&t.jsxs("div",{className:"tabs_item",children:[t.jsx("p",{children:"Delivers intelligent security, authentication, and assurance services to empower businesses and consumers, enabling the establishment and maintenance of trust in online transactions."}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Trusted Partner"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Product Security"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"System Security"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Operational Security"]})]})]}),e===2&&t.jsxs("div",{className:"tabs_item",children:[t.jsx("p",{children:"VaDigiTeCx analyzes and offers a range of security features designed to detect and prevent any form of malicious activity from infiltrating the system."}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Trusted Partner"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Product Security"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"System Security"]}),t.jsxs("li",{children:[t.jsx("i",{className:"bx bx-check-circle"}),"Operational Security"]})]})]})]})]})]})})]})})})},as=()=>t.jsxs("section",{className:"faq-area white-bg ptb-100",children:[t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row align-items-center",children:[t.jsx("div",{className:"col-lg-6",children:t.jsx("div",{className:"faq-img",children:t.jsx("img",{src:Ea,alt:"Image"})})}),t.jsx("div",{className:"col-lg-6",children:t.jsxs("div",{className:"faq-accordion",children:[t.jsxs("div",{className:"faq-title",children:[t.jsx("h2",{children:"Frequently asked questions"}),t.jsx("span",{children:"Just find your answers below"})]}),t.jsxs(D,{children:[t.jsxs(D.Item,{eventKey:"0",children:[t.jsx(D.Header,{children:"What is a managed security service?"}),t.jsx(D.Body,{children:"A managed security service is a comprehensive cybersecurity solution provided by a third-party provider. It involves outsourcing the management and monitoring of an organization's security infrastructure and policies to safeguard against cyber threats. This service typically includes real-time threat detection, incident response, security updates, and expert analysis, allowing businesses to enhance their security posture while focusing on their core operations."})]}),t.jsxs(D.Item,{eventKey:"1",children:[t.jsx(D.Header,{children:"Why does a company need cybersecurity?"}),t.jsx(D.Body,{children:"Cybersecurity is essential to protect digital systems, data, and infrastructure from a wide range of threats, including cyberattacks, data breaches, and unauthorized access. It safeguards sensitive information, ensures business continuity, and maintains the trust of customers and partners. In an increasingly digital world, the need for cybersecurity is paramount to mitigate risks and maintain the integrity, confidentiality, and availability of critical assets."})]}),t.jsxs(D.Item,{eventKey:"2",children:[t.jsx(D.Header,{children:"How are companies securing their information systems?"}),t.jsx(D.Body,{children:"Companies are securing their information systems through a multifaceted approach, which includes implementing measures such as firewalls, encryption, regular software updates, access controls, employee training, and incident response plans. These strategies protect against data breaches, cyberattacks, and unauthorized access, ensuring the confidentiality, integrity, and availability of sensitive information. Additionally, security audits, third-party services, and physical security measures play essential roles in safeguarding information systems from various threats."})]}),t.jsxs(D.Item,{eventKey:"3",children:[t.jsx(D.Header,{children:"What are the costs of a cyber attack?"}),t.jsx(D.Body,{children:"The costs of a cyber attack can vary widely depending on the nature and scale of the attack, the organization's preparedness, and the specific consequences."})]}),t.jsxs(D.Item,{eventKey:"4",children:[t.jsx(D.Header,{children:"Why is it important to browse the Web safely?"}),t.jsx(D.Body,{children:"Safe web browsing is crucial for protecting your personal information, financial security, and privacy, as well as for preventing cyberattacks and maintaining a good online reputation. By adopting safe browsing practices and utilizing adequate security measures, you can significantly reduce the risks associated with the online world."})]})]})]})})]})}),t.jsx("div",{className:"faq-right-shape shape-three",children:t.jsx("img",{src:Pa,alt:"Image"})})]}),ns="/assets/banner-img1-f885b5a7.jpg",is=()=>t.jsx("section",{className:"banner-area bg-1",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row align-items-center",children:[t.jsx("div",{className:"col-lg-6 col-md-12",children:t.jsxs("div",{className:"banner-content",children:[t.jsx("h4",{children:"IT Solutions Designed to Drive Business Results - Achieve technological harmony by teaming up with a comprehensive, full-service managed IT provider offering a range of complete IT solutions."}),t.jsxs("p",{children:[t.jsx("strong",{children:"VaDigiTeCx,"})," is your trusted partner for comprehensive, results-driven IT solutions specializing in delivering seamless, end-to-end managed IT services designed to elevate your business. With a full suite of offerings, we bring technological harmony to your operations, ensuring efficiency and productivity."]}),t.jsx("div",{className:"banner-btn",children:t.jsx("a",{href:"#",className:"default-btn",children:t.jsx("span",{children:"About Us"})})})]})}),t.jsx("div",{className:"col-lg-6 col-md-12",children:t.jsx("div",{className:"banner-image",children:t.jsx("img",{src:ns,alt:"image"})})})]})})}),Oe="/assets/feature-shape-180cf1ea.png",ss=()=>t.jsx("section",{className:"feature-area feature-area-two pt-100 pb-70",children:t.jsxs("div",{className:"container",children:[t.jsx("h6",{style:{textAlign:"center",marginBottom:"25px",color:"#e21f36",fontWeight:"600"},children:"Our Services Include"}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6 col-md-12 col-sm-12",children:t.jsx("div",{className:"single-feature overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsxs("div",{className:"title",children:[t.jsx("i",{className:"flaticon-testing"}),t.jsx("h3",{children:"Complete IT Management"})]}),t.jsx("p",{children:"From procurement to maintenance, we oversee every aspect of your IT infrastructure. This allows you to focus on what you do best while we optimize your technology investments."}),t.jsx("div",{className:"feature-shape",children:t.jsx("img",{src:Oe,alt:"Image"})})]})})}),t.jsx("div",{className:"col-lg-6 col-md-12 col-sm-12",children:t.jsx("div",{className:"single-feature overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsxs("div",{className:"title",children:[t.jsx("i",{className:"flaticon-cybercrime"}),t.jsx("h3",{children:"Managed Cyber Security"})]}),t.jsx("p",{children:"Stay ahead of evolving cyber threats with our round-the-clock protection. Our expert team employs advanced technology and proactive strategies to safeguard your digital assets."}),t.jsx("div",{className:"feature-shape",children:t.jsx("img",{src:Oe,alt:"Image"})})]})})}),t.jsx("div",{className:"col-lg-6 col-md-12 col-sm-12",children:t.jsx("div",{className:"single-feature overly-one",children:t.jsxs("div",{className:"overly-two",children:[t.jsxs("div",{className:"title",children:[t.jsx("i",{className:"flaticon-cybercrime"}),t.jsx("h3",{children:"Cloud & Infrastructure"})]}),t.jsx("p",{children:"Let us design, deploy, and manage a scalable cloud environment tailored to your unique needs. Whether public, private, or hybrid, we ensure optimal performance, security, and cost-efficiency."}),t.jsx("div",{className:"feature-shape",children:t.jsx("img",{src:Oe,alt:"Image"})})]})})}),t.jsx("div",{className:"col-lg-6 col-md-12 col-sm-12 ",children:t.jsx("div",{className:"single-feature overly-one",children:t.jsxs("div",{className:"overly-3",children:[t.jsxs("div",{className:"title",children:[t.jsx("i",{className:"flaticon-cyber-security"}),t.jsx("h3",{children:"Risk & Compliance"})]}),t.jsx("p",{children:"Mitigate risks and demonstrate regulatory adherence with our tailored strategies and meticulous assessments. We provide comprehensive solutions that meet industry best practices to instill confidence in stakeholders. Explore our offerings and experience the difference a dedicated IT partner can make. With VaDigiTeCx, achieve a technological synergy that drives tangible business results."}),t.jsx("div",{className:"feature-shape",children:t.jsx("img",{src:Oe,alt:"Image"})})]})})})]})]})}),us=()=>{const[e,n]=F.useState(window.innerWidth);return F.useEffect(()=>{const s=()=>{n(window.innerWidth)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),F.useEffect(()=>{const s=document.querySelector(".preloader");s&&s.classList.add("preloader-deactivate")},[]),t.jsxs(t.Fragment,{children:[t.jsx(Oa,{}),e>991?t.jsx(Ti,{}):t.jsx(Ta,{}),t.jsx(is,{}),t.jsx(ss,{}),t.jsx(ts,{}),t.jsx(Ii,{}),t.jsx(Di,{}),t.jsx(Mi,{}),t.jsx(Li,{}),t.jsx(Fi,{}),t.jsx(Hi,{}),t.jsx(Xi,{}),t.jsx(Zi,{}),t.jsx($i,{}),t.jsx(as,{}),t.jsx(Ia,{}),t.jsx(za,{})]})};export{us as default};
