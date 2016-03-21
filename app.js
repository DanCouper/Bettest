!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},o={}.hasOwnProperty,a=/^\.\.?(\/|$)/,s=function(e,t){for(var n,r=[],o=(a.test(t)?e+"/"+t:t).split("/"),s=0,u=o.length;u>s;s++)n=o[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(n){var r=s(u(t),n);return e.require(r,t)}},l=function(e,t){var r={id:e,exports:{}};return n[e]=r,t(r.exports,i(e),r),r.exports},c=function(e){return r[e]?c(r[e]):e},d=function(e,r){null==r&&(r="/");var a=c(e);if(o.call(n,a))return n[a].exports;if(o.call(t,a))return l(a,t[a]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,t){r[t]=e},d.reset=function(){t={},n={},r={}};var f=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,_=function(e){if(f.test(e)){var t=e.replace(f,"");o.call(r,t)&&r[t].replace(f,"")!==t+"/index"||(r[t]=e)}if(p.test(e)){var n=e.replace(p,"");o.call(r,n)||(r[n]=e)}};d.register=d.define=function(e,r){if("object"==typeof e)for(var a in e)o.call(e,a)&&d.register(a,e[a]);else t[e]=r,delete n[e],_(e)},d.list=function(){var e=[];for(var n in t)o.call(t,n)&&e.push(n);return e},d.brunch=!0,d._cache=n,e.require=d}}(),require.register("actions/fetchBets.js",function(e,t,n){"use strict";function r(){return{type:u.FETCH_BETS_REQUEST}}function o(){var e=arguments.length<=0||void 0===arguments[0]?"https://bedefetechtest.herokuapp.com/v1/markets":arguments[0];return function(t){return t(r),fetch(e).then(i.checkStatus).then(i.parseJSON).then(function(e){return t(s(e))})["catch"](function(e){return t(a(e))})}}function a(){var e=arguments.length<=0||void 0===arguments[0]?"Sorry, there was an error loading.":arguments[0];return{type:u.FETCH_BETS_ERROR,message:e}}function s(e){return{type:u.FETCH_BETS_SUCCESS,bets:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.fetchBets=o,e.fetchBetsError=a,e.fetchBetsSuccess=s;var u=t("../constants/actionTypes"),i=t("../helpers");t("whatwg-fetch")}),require.register("actions/oddsFormat.js",function(e,t,n){"use strict";function r(){return{type:a.VIEW_AS_FRACTIONAL}}function o(){return{type:a.VIEW_AS_DECIMAL}}Object.defineProperty(e,"__esModule",{value:!0}),e.viewAsFractional=r,e.viewAsDecimal=o;var a=t("../constants/actionTypes")}),require.register("actions/postBets.js",function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return{type:c.POST_BET_REQUEST,id:e}}function a(e){return[].concat(r(e.keys())).map(function(t){return{bet_id:e.getIn([t,"bet_id"]),odds:{numerator:e.getIn([t,"odds","numerator"]),denominator:e.getIn([t,"odds","denominator"])},stake:e.getIn([t,"stake"])}})}function s(e){var t=arguments.length<=1||void 0===arguments[1]?"https://bedefetechtest.herokuapp.com/v1/bets":arguments[1];return function(n){var r=a(e),s=!0,c=!1,p=void 0;try{for(var _,m=function(){var e=_.value,r=e.bet_id;return n(o(r)),{v:fetch(t,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then(d.checkStatus).then(function(e){n(i(r,e)),n((0,f.unsetSlipBet)(r))})["catch"](function(e){return n(u(r,e))})}},E=r[Symbol.iterator]();!(s=(_=E.next()).done);s=!0){var S=m();if("object"===("undefined"==typeof S?"undefined":l(S)))return S.v}}catch(b){c=!0,p=b}finally{try{!s&&E["return"]&&E["return"]()}finally{if(c)throw p}}}}function u(e){var t=arguments.length<=1||void 0===arguments[1]?"Sorry, there was an error posting.":arguments[1];return{type:c.POST_BET_ERROR,id:e,message:t}}function i(e,t){return{type:c.POST_BET_SUCCESS,id:e,parsedResponse:t}}Object.defineProperty(e,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};e.postBets=s,e.postBetError=u,e.postBetSuccess=i;var c=t("../constants/actionTypes"),d=t("../helpers"),f=t("./slipBets");t("whatwg-fetch")}),require.register("actions/slipBets.js",function(e,t,n){"use strict";function r(e,t){return{type:u.SET_SLIP_BET,id:e,value:t}}function o(e){return{type:u.UNSET_SLIP_BET,id:e}}function a(){return{type:u.CLEAR_SLIP_BETS}}function s(e,t){return{type:u.SET_STAKE,id:e,value:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setSlipBet=r,e.unsetSlipBet=o,e.clearSlipBets=a,e.setStake=s;var u=t("../constants/actionTypes")}),require.register("components/App.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=t("react"),l=r(i),c=t("../containers/OptionsContainer"),d=r(c),f=t("../containers/BetsContainer"),p=r(f),_=t("../containers/SlipContainer"),m=r(_),E=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"betting-app__main__wrapper"},l["default"].createElement(d["default"],null),l["default"].createElement("main",{className:"betting-app__main"},l["default"].createElement(p["default"],null),l["default"].createElement(m["default"],null)))}}]),t}(l["default"].Component);e["default"]=E}),require.register("components/Bet.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.bet,n=e.oddsFormat,r=e.onSetSlipBetClick,o=(0,u.oddsFormatter)(n,t.getIn(["odds","numerator"]),t.getIn(["odds","denominator"]));return s["default"].createElement("li",{className:"bet bet--available",onClick:r},s["default"].createElement("p",{className:"bet__text"},s["default"].createElement("strong",{className:"bet__name"},t.get("name"))," to win the ",s["default"].createElement("strong",{className:"bet__event"},t.get("event"))," at ",s["default"].createElement("strong",{className:"bet__odds"},o)))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var a=t("react"),s=r(a),u=t("../helpers")}),require.register("components/Bets.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.bets,n=e.status,r=e.oddsFormat,o=e.onLoadBetsClick,a=e.onSetSlipBetClick,u=n.get("loading")?s["default"].createElement("li",null,"Bets loading..."):n.get("loadError")?s["default"].createElement("li",null,"There was an error loading the bets, please refresh and try again."):t.keySeq().map(function(e){return s["default"].createElement(i["default"],{key:e,bet:t.get(e),oddsFormat:r,onSetSlipBetClick:function(){return a(e,t.get(e))}})});return s["default"].createElement("section",{className:"betting-app__main-section betting-app__bets"},s["default"].createElement("ul",{className:"bets"},u),n.get("loaded")?void 0:s["default"].createElement("div",{className:"btn__group bet__controls"},s["default"].createElement("button",{className:"btn bet__control",onClick:o},"Load Bets")))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=t("react"),s=r(a),u=t("./Bet"),i=r(u);e["default"]=o}),require.register("components/Options.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.oddsFormat,n=e.onViewAsFractionalClick,r=e.onViewAsDecimalClick;return s["default"].createElement("nav",{className:"btn__nav-group"},s["default"].createElement("button",{className:"btn"},"View Bet history"),"FRACTIONAL"===t?s["default"].createElement("button",{onClick:function(){return r()},className:"btn"},"Show decimal odds"):s["default"].createElement("button",{onClick:function(){return n()},className:"btn"},"Show fractional odds"))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var a=t("react"),s=r(a)}),require.register("components/Slip.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.slipBets,n=e.oddsFormat,r=e.onUnsetSlipBetClick,o=e.onClearSlipBetsClick,a=e.onSetStakeClick,u=e.onPostBetsClick;return s["default"].createElement("section",{className:"betting-app__main-section betting-app__slip"},s["default"].createElement("ul",{className:"bets"},0===t.size?s["default"].createElement("li",{className:"notabet"},s["default"].createElement("p",null,"No bets on your slip.")):t.keySeq().map(function(e){return s["default"].createElement(i["default"],{key:e,slipBet:t.get(e),oddsFormat:n,onUnsetSlipBetClick:function(){return r(e)},onSetStakeClick:a})})),t.size>0?s["default"].createElement("div",{className:"btn__group bet__controls"},s["default"].createElement("button",{className:"btn bet__control",onClick:o},"Clear all bets on slip"),s["default"].createElement("button",{className:"btn btn--request bet__control",onClick:function(){return u(t)}},"Submit these bets")):void 0)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=t("react"),s=r(a),u=t("./SlipBet"),i=r(u);e["default"]=o}),require.register("components/SlipBet.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=t("react"),l=r(i),c=t("../helpers"),d=function(e){function t(){var e,n,r,s;o(this,t);for(var u=arguments.length,i=Array(u),l=0;u>l;l++)i[l]=arguments[l];return n=r=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={stake:r.props.slipBet.get("stake"),payout:0},r.handleStakeChange=function(e){return r.setState({stake:e.target.value,payout:(0,c.payoutCalculator)(e.target.value,r.props.slipBet.getIn(["odds","numerator"]),r.props.slipBet.getIn(["odds","denominator"]))})},s=n,a(r,s)}return s(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props.slipBet.get("stake")>0?"bet--submittable":"bet--unsubmittable",n=(0,c.oddsFormatter)(this.props.oddsFormat,this.props.slipBet.getIn(["odds","numerator"]),this.props.slipBet.getIn(["odds","denominator"]));return l["default"].createElement("li",{className:"bet bet--onslip "+t},l["default"].createElement("div",{className:"bet__text"},l["default"].createElement("p",{className:"bet__reminder"},l["default"].createElement("strong",{className:"bet__name"},this.props.slipBet.get("name"))," to win the ",l["default"].createElement("strong",{className:"bet__event"},this.props.slipBet.get("event"))," at ",l["default"].createElement("strong",{className:"bet__odds"},n)),l["default"].createElement("p",{className:"bet__stake"},"A bet of ",l["default"].createElement("strong",null,"£",l["default"].createElement("input",{className:"text-input bet__stake__input",onBlur:function(){return e.props.onSetStakeClick(e.props.slipBet.get("bet_id"),e.state.stake)},onChange:this.handleStakeChange,value:this.state.stake}))," nets you ",l["default"].createElement("strong",{className:"bet__payout"},"£",this.state.payout))),l["default"].createElement("div",{className:"btn__group bet__controls"},l["default"].createElement("button",{className:"btn bet__control",onClick:this.props.onUnsetSlipBetClick},"Remove bet from slip"),l["default"].createElement("button",{className:"btn btn--request bet__control",onClick:function(){return e.props.onSetStakeClick(e.props.slipBet.get("bet_id"),e.state.stake)}},"Set stake")))}}]),t}(i.Component);e["default"]=d}),require.register("constants/actionTypes.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FETCH_BETS_REQUEST="FETCH_BETS_REQUEST",e.FETCH_BETS_ERROR="FETCH_BETS_ERROR",e.FETCH_BETS_SUCCESS="FETCH_BETS_SUCCESS",e.SET_SLIP_BET="SET_SLIP_BET",e.UNSET_SLIP_BET="UNSET_SLIP_BET",e.CLEAR_SLIP_BETS="CLEAR_SLIP_BETS",e.SET_STAKE="SET_STAKE",e.POST_BET_REQUEST="POST_BET_REQUEST",e.POST_BET_ERROR="POST_BET_ERROR",e.POST_BET_SUCCESS="POST_BET_SUCCESS",e.VIEW_AS_DECIMAL="VIEW_AS_DECIMAL",e.VIEW_AS_FRACTIONAL="VIEW_AS_FRACTIONAL"}),require.register("containers/BetsContainer.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("react"),a=(r(o),t("react-redux")),s=t("../components/Bets"),u=r(s),i=t("../actions/fetchBets"),l=t("../actions/slipBets"),c=function(e){return{bets:e.bets.filterNot(function(t,n){return e.slipBets.keySeq().includes(n)}),oddsFormat:e.oddsFormat,status:e.status}},d=function(e){return{onLoadBetsClick:function(){return e((0,i.fetchBets)())},onSetSlipBetClick:function(t,n){return e((0,l.setSlipBet)(t,n))}}};e["default"]=(0,a.connect)(c,d)(u["default"])}),require.register("containers/OptionsContainer.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("react"),a=(r(o),t("react-redux")),s=t("../actions/oddsFormat"),u=t("../components/Options"),i=r(u),l=function(e){return{oddsFormat:e.oddsFormat,postedBets:e.postedBets}},c=function(e){return{onViewAsFractionalClick:function(){return e((0,s.viewAsFractional)())},onViewAsDecimalClick:function(){return e((0,s.viewAsDecimal)())}}};e["default"]=(0,a.connect)(l,c)(i["default"])}),require.register("containers/SlipContainer.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("react"),a=(r(o),t("react-redux")),s=t("../components/Slip"),u=r(s),i=t("../actions/slipBets"),l=t("../actions/postBets"),c=function(e){return{slipBets:e.slipBets,oddsFormat:e.oddsFormat}},d=function(e){return{onClearSlipBetsClick:function(){return e((0,i.clearSlipBets)())},onUnsetSlipBetClick:function(t){return e((0,i.unsetSlipBet)(t))},onSetStakeClick:function(t,n){return e((0,i.setStake)(t,n))},onPostBetsClick:function(t){return e((0,l.postBets)(t))}}};e["default"]=(0,a.connect)(c,d)(u["default"])}),require.register("helpers.js",function(e,t,n){"use strict";function r(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function o(e){return e.json()}function a(e,t,n){var r=t/n*Number(e)+Number(e);return r.toFixed(2)}function s(e,t,n){return new Map([["FRACTIONAL",t+"-"+n],["DECIMAL",""+Number((t/n+1).toFixed(2))]]).get(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.checkStatus=r,e.parseJSON=o,e.payoutCalculator=a,e.oddsFormatter=s}),require.register("initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=t("react-dom"),a=r(o),s=t("react"),u=r(s),i=t("react-redux"),l=t("redux"),c=t("redux-thunk"),d=r(c),f=t("redux-logger"),p=r(f),_=t("./reducers"),m=r(_),E=t("components/App"),S=r(E),b=(0,p["default"])(),v=(0,l.createStore)(m["default"],(0,l.applyMiddleware)(d["default"],b));document.addEventListener("DOMContentLoaded",function(){a["default"].render(u["default"].createElement(i.Provider,{store:v},u["default"].createElement(S["default"],null)),document.querySelector("#root"))})}),require.register("reducers/bets.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){var t=new Map(e.reduce(function(e,t){return[].concat(o(e),[[t.bet_id,t]])},[]));return i["default"].fromJS(t)}function s(){var e=arguments.length<=0||void 0===arguments[0]?i["default"].Map():arguments[0],t=arguments[1];switch(t.type){case l.FETCH_BETS_REQUEST:return e;case l.FETCH_BETS_SUCCESS:return e.merge(a(t.bets));case l.FETCH_BETS_ERROR:return e;default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var u=t("immutable"),i=r(u),l=t("../constants/actionTypes");t("../actions/fetchBets")}),require.register("reducers/index.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var o=t("redux"),a=t("./bets"),s=r(a),u=t("./slipBets"),i=r(u),l=t("./oddsFormat"),c=r(l),d=t("./postedBets"),f=r(d),p=t("./status"),_=r(p);e["default"]=(0,o.combineReducers)({bets:s["default"],slipBets:i["default"],oddsFormat:c["default"],postedBets:f["default"],status:_["default"]})}),require.register("reducers/oddsFormat.js",function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?"FRACTIONAL":arguments[0],t=arguments[1];switch(t.type){case o.VIEW_AS_DECIMAL:return"DECIMAL";case o.VIEW_AS_FRACTIONAL:return"FRACTIONAL";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=t("../constants/actionTypes");t("../actions/oddsFormat")}),require.register("reducers/postedBets.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return i["default"].fromJS(o({},e.bet_id,e))}function s(){var e=arguments.length<=0||void 0===arguments[0]?i["default"].Map():arguments[0],t=arguments[1];switch(t.type){case l.POST_BET_REQUEST:return e;case l.POST_BET_SUCCESS:return e.merge(a(t.parsedResponse));case l.POST_BET_ERROR:return e;default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var u=t("immutable"),i=r(u),l=t("../constants/actionTypes")}),require.register("reducers/slipBets.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e.set("stake",0).set("payout",0)}function a(){var e=arguments.length<=0||void 0===arguments[0]?u["default"].Map():arguments[0],t=arguments[1];switch(t.type){case i.SET_SLIP_BET:return e.set(t.id,o(t.value));case i.UNSET_SLIP_BET:return e["delete"](t.id);case i.CLEAR_SLIP_BETS:return e.clear();case i.POST_BETS_SUCCESS:return e["delete"](t.id);case i.SET_STAKE:var n=e.getIn([t.id,"odds","numerator"]),r=e.getIn([t.id,"odds","denominator"]);return e.setIn([t.id,"stake"],t.value).setIn([t.id,"payout"],(0,l.payoutCalculator)(t.value,n,r));default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a;var s=t("immutable"),u=r(s),i=t("../constants/actionTypes"),l=t("../helpers")}),require.register("reducers/status.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?s["default"].Map([["loading",!1],["loaded",!1],["loadError",!1]]):arguments[0],t=arguments[1];switch(t.type){case u.FETCH_BETS_REQUEST:return e.set("loading",!0);case u.FETCH_BETS_SUCCESS:return e.set("loading",!1).set("loaded",!0);case u.FETCH_BETS_ERROR:return e.set("loading",!1).set("loadError",!0);default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var a=t("immutable"),s=r(a),u=t("../constants/actionTypes")});