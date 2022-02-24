(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{9917:function(e,t,n){"use strict";var i=n(3038),r=n(319);t.Image=E;var o=d(n(2784)),a=d(n(639)),c=n(8997),l=n(5809),s=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){u(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=new Set;var m=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,b=v.deviceSizes,y=v.imageSizes,w=v.loader,x=v.path,A=(v.domains,[].concat(r(b),r(y)));function k(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:A.filter((function(e){return e>=b[0]*c})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(o,i,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:a,width:u[f]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=m.get(w);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "blitz.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(w))}function E(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,u=e.priority,d=void 0!==u&&u,m=e.loading,v=e.lazyBoundary,b=void 0===v?"200px":v,y=e.className,w=e.quality,x=e.width,A=e.height,E=e.objectFit,j=e.objectPosition,O=e.onLoadingComplete,L=e.loader,_=void 0===L?S:L,I=e.placeholder,R=void 0===I?"empty":I,M=e.blurDataURL,P=p(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in P&&(P.layout&&(C=P.layout),delete P.layout);var D="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var q=h(t)?t.default:t;if(!q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(q)));if(M=M||q.blurDataURL,D=q.src,(!C||"fill"!==C)&&(A=A||q.height,x=x||q.width,!q.height||!q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(q)))}t="string"===typeof t?t:D;var N=z(x),U=z(A),B=z(w),W=!d&&("lazy"===m||"undefined"===typeof m);t.startsWith("data:")&&(l=!0,W=!1),g.has(t)&&(W=!1);var H,T,K,F=s.useIntersection({rootMargin:b,disabled:!W}),V=i(F,2),J=V[0],G=V[1],Q=!W||G,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:j},Y="blur"===R?{filter:"blur(20px)",backgroundSize:E||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:j||"0% 0%"}:{};if("fill"===C)H={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof N&&"undefined"!==typeof U){var Z=U/N,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===C?(H={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={display:"block",boxSizing:"border-box",paddingTop:$}):"intrinsic"===C?(H={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={boxSizing:"border-box",display:"block",maxWidth:"100%"},K='<svg width="'.concat(N,'" height="').concat(U,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(H={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:U})}else 0;var ee={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};Q&&(ee=k({src:t,unoptimized:l,layout:C,width:N,quality:B,sizes:n,loader:_}));var te=t;return o.default.createElement("div",{style:H},T?o.default.createElement("div",{style:T},K?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(K))}):null):null,!Q&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},P,k({src:t,unoptimized:l,layout:C,width:N,quality:B,sizes:n,loader:_}),{decoding:"async","data-nimg":!0,style:X,className:y}))),o.default.createElement("img",Object.assign({},P,ee,{decoding:"async","data-nimg":!0,className:y,ref:function(e){J(e),function(e,t,n,i){if(e){var r=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),g.add(t),i){var r=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:r,naturalHeight:o})}}))};e.complete?r():e.onload=r}}(e,te,R,O)},style:f({},X,Y)})),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,imagesrcset:ee.srcSet,imagesizes:ee.sizes})):null)}function j(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var i=n(3038);t.Link=d;var r,o=(r=n(2784))&&r.__esModule?r:{default:r},a=n(1063),c=n(4651),l=n(7426);var s={};function u(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;s[t+"%"+n+(r?"%"+r:"")]=!0}}function d(e){var t,n=!1!==e.prefetch,r=c.useRouter(),d=o.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),n=i(t,2),o=n[0],c=n[1];return{href:o,as:e.as?a.resolveHref(r,e.as):c||o}}),[r,e.href,e.as]),f=d.href,p=d.as,g=e.children,m=e.replace,h=e.shallow,v=e.scroll,b=e.locale;"string"===typeof g&&(g=o.default.createElement("a",null,g));var y=(t=o.default.Children.only(g))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=i(w,2),A=x[0],k=x[1],z=o.default.useCallback((function(e){A(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,A]);o.default.useEffect((function(){var e=k&&n&&a.isLocalURL(f),t="undefined"!==typeof b?b:r&&r.locale,i=s[f+"%"+p+(t?"%"+t:"")];e&&!i&&u(r,f,p,{locale:t})}),[p,f,k,b,n,r]);var S={ref:z,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&i.indexOf("#")>=0&&(c=!1),t[r?"replace":"push"](n,i,{shallow:o,locale:l,scroll:c}))}(e,r,f,p,m,h,v,b)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:r&&r.locale,j=r&&r.isLocaleDomain&&a.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);S.href=j||a.addBasePath(a.addLocale(p,E,r&&r.defaultLocale))}return o.default.cloneElement(t,S)}},7426:function(e,t,n){"use strict";var i=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=r.useRef(),s=r.useState(!1),u=i(s,2),d=u[0],f=u[1],p=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[p,d]};var r=n(2784),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9527:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)}}]);