!function webpackUniversalModuleDefinition(n,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],i):"object"==typeof exports?exports["react-awesome-slider"]=i(require("prop-types"),require("react")):n["react-awesome-slider"]=i(n.PropTypes,n.React)}(this,(function(n,i){return function(n){var i={};function __webpack_require__(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,__webpack_require__),s.l=!0,s.exports}return __webpack_require__.m=n,__webpack_require__.c=i,__webpack_require__.d=function(n,i,a){__webpack_require__.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:a})},__webpack_require__.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_require__.t=function(n,i){if(1&i&&(n=__webpack_require__(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var s in n)__webpack_require__.d(a,s,function(i){return n[i]}.bind(null,s));return a},__webpack_require__.n=function(n){var i=n&&n.__esModule?function getDefault(){return n.default}:function getModuleExports(){return n};return __webpack_require__.d(i,"a",i),i},__webpack_require__.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=10)}([function(n,i,a){"use strict";function _defineProperties(n,i){for(var a=0;a<i.length;a++){var s=i[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}a.d(i,"a",(function(){return s})),a.d(i,"b",(function(){return classToModules})),a.d(i,"c",(function(){return getClassName}));var s=function(){function MediaLoader(){!function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,MediaLoader),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return function _createClass(n,i,a){return i&&_defineProperties(n.prototype,i),a&&_defineProperties(n,a),n}(MediaLoader,[{key:"events",value:function events(){var n=this;this.video.addEventListener("loadeddata",(function(){return n.resolve&&n.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return n.resolve&&n.resolve(!1)})),this.image.onload=function(){return n.resolve&&n.resolve(!0)},this.image.onerror=function(){return n.resolve&&n.resolve(!1)}}},{key:"load",value:function load(n){var i=this;return new Promise((function(a){n||a(!0),i.resolve=a,i.loading=!0,i.ended=!1,n.match(/\.(mp4|webm)/i)&&i.video.setAttribute("src",n),n.match(/\.(png|jp(e)?g|gif|webp)/i)&&(i.image.src=n,(i.image.width>0||i.image.height>0)&&a(!0))}))}},{key:"loadImage",value:function loadImage(n){var i=this,a=new Image,s=!1;a.onload=function(){s||i.pumpLoaded()},a.onerror=function(){s||i.pumpLoaded()},a.src=n,!1===s&&(a.width>0||a.height>0)&&(s=!0,this.pumpLoaded())}},{key:"loadVideo",value:function loadVideo(n){var i=this,a=document.createElement("video");a.addEventListener("loadeddata",(function(){i.pumpLoaded()})),a.addEventListener("error",(function(){i.pumpLoaded()})),a.setAttribute("src",n)}},{key:"pumpLoaded",value:function pumpLoaded(){this.loaded+=1,this.loaded===this.toLoad&&this.resolver(!0)}},{key:"startLoad",value:function startLoad(n){n.match(/\.(mp4|webm)/i)&&this.loadVideo(n),n.match(/\.(png|jp(e)?g|gif|webp)/i)&&this.loadImage(n)}},{key:"loadMultiple",value:function loadMultiple(n){var i=this;return this.loaded=0,this.toLoad=n.length,new Promise((function(a){i.resolver=a,n.forEach((function(n){i.startLoad(n)}))}))}}]),MediaLoader}();function classToModules(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1?arguments[1]:void 0;if(!i)return n.join(" ").trim();for(var a=[],s=n.length;s--;)i[n[s]]&&a.push(i[n[s]]);return a}function getClassName(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0;return i&&i[n]||n}},function(n,i,a){"use strict";a.d(i,"a",(function(){return u})),a.d(i,"b",(function(){return l})),a.d(i,"c",(function(){return f})),a.d(i,"e",(function(){return d})),a.d(i,"d",(function(){return getRootClassName})),a.d(i,"g",(function(){return transformChildren})),a.d(i,"f",(function(){return setupClassNames}));var s=a(0);function _toConsumableArray(n){return function _arrayWithoutHoles(n){if(Array.isArray(n)){for(var i=0,a=new Array(n.length);i<n.length;i++)a[i]=n[i];return a}}(n)||function _iterableToArray(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ownKeys(n,i){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),a.push.apply(a,s)}return a}function _objectSpread(n){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(a),!0).forEach((function(i){_defineProperty(n,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(a,i))}))}return n}function _defineProperty(n,i,a){return i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}var u=function classListAdd(n,i){"string"==typeof i&&n&&i.split(" ").forEach((function(i){n.classList.add(i)}))},l=function classListRemove(n,i){"string"==typeof i&&n&&i.split(" ").forEach((function(i){n.classList.remove(i)}))},f=function getAnyClassName(n){return"string"==typeof n&&n.split(" ")[0]||""},d=function mergeStyles(n){var i=Array.isArray(n)?n:[n];if(1===i.length)return i[0];for(var a=_objectSpread({},i[0]),s=1;s<i.length;s+=1){for(var u in a)i[s][u]&&(a[u]=[a[u],i[s][u]].join(" "));for(var l in i[s])a[l]||(a[l]=i[s][l])}return a};function getRootClassName(n){var i,a=n.rootElement,u=n.cssModule,l=n.disabled,f=n.organicArrows,d=n.className,p=n.total,_=n.current,m=n.infinite,b=n.animation,y=n.fillParent,v=[a];(b&&v.push("".concat(a,"--").concat(b)),!0===f&&v.push("".concat(a,"--organic-arrows")),!0===l&&v.push("".concat(a,"--disabled")),y&&v.push("".concat(a,"--fill-parent")),!1===m&&(0===_&&v.push("".concat(a,"--first")),_===p-1&&v.push("".concat(a,"--last"))),u&&u[a]&&(v=Object(s.b)(v,u)),d)&&(i=v).push.apply(i,_toConsumableArray(d.split(" ")));return v.join(" ").trim().replace(/[\s]+/gi," ")}function transformChildren(n){var i=[];return(n.constructor===Array?n:[n]).forEach((function(n){var a=_objectSpread({},n.props);n.props["data-src"]&&(a.source=n.props["data-src"]),n.props["data-slug"]&&(a.slug=n.props["data-slug"]),i.push(a)})),i}function setupClassNames(n,i){return{boxA:Object(s.c)("".concat(n,"__boxA"),i),boxB:Object(s.c)("".concat(n,"__boxB"),i),box:Object(s.c)("".concat(n,"__box"),i),container:Object(s.c)("".concat(n,"__container"),i),wrapper:Object(s.c)("".concat(n,"__wrapper"),i),bar:Object(s.c)("".concat(n,"__bar"),i),barActive:Object(s.c)("".concat(n,"__bar--active"),i),barEnd:Object(s.c)("".concat(n,"__bar--end"),i),content:Object(s.c)("".concat(n,"__content"),i),contentStatic:Object(s.c)("".concat(n,"__content--static"),i),contentMoveLeft:Object(s.c)("".concat(n,"__content--moveLeft"),i),contentMoveRight:Object(s.c)("".concat(n,"__content--moveRight"),i),controlsHidden:Object(s.c)("".concat(n,"__controls--hidden"),i),controlsActive:Object(s.c)("".concat(n,"__controls--active"),i),animated:Object(s.c)("".concat(n,"--animated"),i),animatedMobile:Object(s.c)("".concat(n,"--animated-mobile"),i),contentExit:Object(s.c)("".concat(n,"__content--exit"),i),exit:Object(s.c)("".concat(n,"--exit"),i),active:Object(s.c)("".concat(n,"--active"),i),moveLeft:Object(s.c)("".concat(n,"--moveLeft"),i),moveRight:Object(s.c)("".concat(n,"--moveRight"),i),startUp:Object(s.c)("".concat(n,"__startUp"),i),bulletsLoading:Object(s.c)("".concat(n,"__bullets--loading"),i)}}},function(i,a){i.exports=n},function(n,a){n.exports=i},function(n,i,a){n.exports=function(n){var i={};function t(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=n,t.c=i,t.d=function(n,i,a){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(1&i&&(n=t(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var s in n)t.d(a,s,function(i){return n[i]}.bind(null,s));return a},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=0)}([function(n,i,a){"use strict";function o(n,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=a.tolerance,u=void 0===s?0:s,l=a.propertyName;return new Promise((function(a){if(n){var s=null,f=i.charAt(0).toUpperCase()+i.slice(1),d=0;void 0!==n.style["Webkit"+f]&&(s="webkit"+f+"End"),void 0!==n.style.OTransition&&(s="o"+i+"End"),void 0!==n.style[i]&&(s=i+"end"),n.clearCssEndEvent&&n.clearCssEndEvent(),n.clearCssEndEvent=function(){n.removeEventListener(s,c)},n.addEventListener(s,c)}else a(!1);function c(i){if((i.srcElement||i.target)===n){if(d>=u){if(l&&l!==i.propertyName)return;n.removeEventListener(s,c),a(i)}d+=1}}}))}function r(n){window&&window.requestAnimationFrame((function(){window.requestAnimationFrame(n)}))}Object.defineProperty(i,"__esModule",{value:!0}),i.setCssEndEvent=o,i.beforeCssLayout=function(n){window&&window.requestAnimationFrame(n)},i.beforeNextCssLayout=r,i.beforeFutureCssLayout=function(n,i){!function e(n,i){window&&n&&Number.isInteger(n)&&n>0?window.requestAnimationFrame((function(){e(n-1,i)})):i()}(n+1,i)},i.onceNextCssLayout=function(){return new Promise((function(n){r(n)}))},i.onceTransitionEnd=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a){o(n,"transition",i).then(a)}))},i.onceAnimationEnd=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a){o(n,"animation",i).then(a)}))}}])},,,,,,function(n,i,a){n.exports=a(11)},function(n,i,a){"use strict";a.r(i),a.d(i,"default",(function(){return AutoplayHoc}));var s=a(3),u=a.n(s),l=a(4),f=a(2),d=a.n(f),p=a(0),_=a(1);function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(n){return typeof n}:function _typeof(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function _extends(){return(_extends=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n}).apply(this,arguments)}function _objectWithoutProperties(n,i){if(null==n)return{};var a,s,u=function _objectWithoutPropertiesLoose(n,i){if(null==n)return{};var a,s,u={},l=Object.keys(n);for(s=0;s<l.length;s++)a=l[s],i.indexOf(a)>=0||(u[a]=n[a]);return u}(n,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)a=l[s],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(u[a]=n[a])}return u}function _defineProperties(n,i){for(var a=0;a<i.length;a++){var s=i[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function _possibleConstructorReturn(n,i){return!i||"object"!==_typeof(i)&&"function"!=typeof i?function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):i}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _setPrototypeOf(n,i){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(n,i){return n.__proto__=i,n})(n,i)}function _defineProperty(n,i,a){return i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}function AutoplayHoc(n){var i,a;return a=i=function(i){function _class(n){var i;return function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,_class),(i=_possibleConstructorReturn(this,_getPrototypeOf(_class).call(this,n))).forceStop=!1,i.rootElement=n.rootElement||"awssld",i.mergedStyles=Object(_.e)(n.cssModule),i.state={selected:0},i}return function _inherits(n,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),i&&_setPrototypeOf(n,i)}(_class,i),function _createClass(n,i,a){return i&&_defineProperties(n.prototype,i),a&&_defineProperties(n,a),n}(_class,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(n){this.mergedStyles=Object(_.e)(n.cssModule),this.checkStartStatus(n)}},{key:"setInfo",value:function setInfo(n){this.currentInfo=n,n.currentIndex!==this.state.selected&&this.setState({selected:n.currentIndex})}},{key:"setTimer",value:function setTimer(n){var i=this;if(!0!==this.forceStop){var a=n.querySelector(".".concat(Object(_.c)(Object(p.c)("".concat(this.rootElement,"__timer"),this.mergedStyles)))),s=n.querySelector("div");s&&(a||(a=this.createBarElement(),s.appendChild(a)),a.classList.remove(Object(p.c)("".concat(this.rootElement,"__timer--animated"),this.mergedStyles)),Object(l.onceNextCssLayout)().then((function(){a.classList.remove(Object(p.c)("".concat(i.rootElement,"__timer--run"),i.mergedStyles)),a.classList.remove(Object(p.c)("".concat(i.rootElement,"__timer--fast"),i.mergedStyles)),Object(l.onceNextCssLayout)().then((function(){a.classList.add(Object(p.c)("".concat(i.rootElement,"__timer--animated"),i.mergedStyles)),Object(l.onceNextCssLayout)().then((function(){a.classList.add(Object(p.c)("".concat(i.rootElement,"__timer--run"),i.mergedStyles)),Object(l.onceTransitionEnd)(a).then((function(){i.clearBarAnimation(a),!0!==i.forceStop&&!1!==i.props.play&&i.goTonext()}))}))}))})))}}},{key:"getBarFromSlide",value:function getBarFromSlide(n){return n.querySelector(".".concat(Object(_.c)(Object(p.c)("".concat(this.rootElement,"__timer"),this.mergedStyles))))||null}},{key:"checkStartStatus",value:function checkStartStatus(n){this.currentInfo&&this.props.play!==n.play&&(!0===n.play&&this.currentInfo&&this.setTimer(this.currentInfo.currentSlide),!1===n.play&&this.forceClearBar(this.currentInfo))}},{key:"createBarElement",value:function createBarElement(){var n=document.createElement("div");return n.classList.add(Object(p.c)("".concat(this.rootElement,"__timer"),this.mergedStyles)),n.style.setProperty("--timer-delay","".concat(this.props.interval,"ms")),n.style.setProperty("--timer-height",this.props.timerHeight),n.style.setProperty("--timer-background-color",this.props.timerBackgroundColor),n}},{key:"clearBar",value:function clearBar(n){var i=this,a=this.getBarFromSlide(n.currentSlide);a&&(a.clearCssEndEvent&&a.clearCssEndEvent(),a.classList.add(Object(p.c)("".concat(this.rootElement,"__timer--fast"),this.mergedStyles)),Object(l.onceTransitionEnd)(a).then((function(){i.clearBarAnimation(a)})))}},{key:"clearBarAnimation",value:function clearBarAnimation(n){n.classList.remove(Object(p.c)("".concat(this.rootElement,"__timer--animated"),this.mergedStyles))}},{key:"restartBarAnimation",value:function restartBarAnimation(n){n.classList.remove(Object(p.c)("".concat(this.rootElement,"__timer--run"),this.mergedStyles)),n.classList.remove(Object(p.c)("".concat(this.rootElement,"__timer--fast"),this.mergedStyles))}},{key:"forceClearBar",value:function forceClearBar(n){var i=this.getBarFromSlide(n.currentSlide);this.restartBarAnimation(i)}},{key:"goTonext",value:function goTonext(){var n=this.currentInfo,i=n.currentIndex+1,a=i>n.slides-1?0:i;a!==this.state.selected?this.setState({selected:a}):this.forceClearBar(this.currentInfo)}},{key:"render",value:function render(){var i=this,a=this.props,s=(a.inverval,a.play),l=a.cancelOnInteraction,f=(a.showTimer,a.onTransitionStart),d=a.onTransitionEnd,p=a.onFirstMount,_=a.onTransitionRequest,m=_objectWithoutProperties(a,["inverval","play","cancelOnInteraction","showTimer","onTransitionStart","onTransitionEnd","onFirstMount","onTransitionRequest"]);return u.a.createElement(n,_extends({},m,{selected:this.state.selected,onFirstMount:function onFirstMount(n){p&&p(n),m.startupScreen||(i.setInfo(n),!0===s&&i.setTimer(n.currentSlide))},onTransitionStart:function onTransitionStart(n){var a=i.getBarFromSlide(n.nextSlide);a&&i.restartBarAnimation(a),f&&f(n)},onTransitionRequest:function onTransitionRequest(n){i.clearBar(n),i.currentInfo=n,!0===l&&(i.forceStop=!0),_&&_(n)},onTransitionEnd:function onTransitionEnd(n){i.setInfo(n),!0===s&&i.setTimer(n.currentSlide),d&&d(n)}}))}}]),_class}(s.Component),_defineProperty(i,"propTypes",{interval:d.a.number,cssModule:d.a.any,play:d.a.bool,cancelOnInteraction:d.a.bool,timerHeight:d.a.string,timerBackgroundColor:d.a.string,showTimer:d.a.bool,onTransitionStart:d.a.func,onTransitionEnd:d.a.func,onTransitionRequest:d.a.func,rootElement:d.a.string}),_defineProperty(i,"defaultProps",{interval:2e3,play:!1,cancelOnInteraction:!1,timerHeight:"6px",cssModule:null,timerBackgroundColor:"rgba(0, 0, 0, 0.15)",showTimer:!0,onTransitionStart:null,onTransitionEnd:null,onTransitionRequest:null,rootElement:"awssld"}),a}}])}));