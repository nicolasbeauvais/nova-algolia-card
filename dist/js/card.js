!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){Nova.booting(function(e,t){e.component("nova-algolia-card",r(2))})},function(e,t,r){var n=r(8)(r(9),r(11),!1,function(e){r(3)},"data-v-34f1b085",null);e.exports=n.exports},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("602c17b2",n,!0,{})},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".nova-algolia-card-title[data-v-34f1b085]{color:#5468ff}.nova-algolia-card-title .nova-algolia-card-title-logo[data-v-34f1b085]{width:1.8rem;margin-right:.2rem;display:inline;vertical-align:middle}.nova-algolia-card-index[data-v-34f1b085]{display:inline-block;background-color:#f1f5f8;padding:0 5px;border-radius:5px}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(7),i={},a=n&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,u=!1,c=function(){},f=null,d="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(v(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(v(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(m){var o=s++;n=l||(l=h()),t=_.bind(null,n,o,!1),r=_.bind(null,n,o,!0)}else n=h(),t=function(e,t){var r=t.css,n=t.media,o=t.sourceMap;n&&e.setAttribute("media",n);f.ssrId&&e.setAttribute(d,t.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,t,r,n){u=r,f=n||{};var a=o(e,t);return p(a),function(t){for(var r=[],n=0;n<a.length;n++){var l=a[n];(s=i[l.id]).refs--,r.push(s)}t?p(a=o(e,t)):a=[];for(n=0;n<r.length;n++){var s;if(0===(s=r[n]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],l={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}},function(e,t){e.exports=function(e,t,r,n,o,i){var a,l=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,l=e.default);var u,c="function"==typeof l?l.options:l;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):n&&(u=n),u){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=u,c.render=function(e,t){return u.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:l,options:c}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),o=r.n(n);t.default={props:["card"],data:function(){return{entries:null,index:null}},mounted:function(){var e=this;Nova.request().get("/nova-vendor/nicolasbeauvais/nova-algolia-card/"+(this.card.index||""),{params:{model:this.card.model}}).then(function(t){var r=t.data;e.entries=r.entries,e.index=r.index})},computed:{formattedEntries:function(){if(!this.entries)return"";var e=o()(this.entries);return e.value()>1e3?e.format("(0.00a)"):this.entries}}}},function(e,t,r){var n,o;void 0===(o="function"==typeof(n=function(){var e,t,r,n,o,i={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},s={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(r){var n,o,a,l;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(s.zeroFormat&&r===s.zeroFormat)n=0;else if(s.nullFormat&&r===s.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(o in i)if((l="function"==typeof i[o].regexps.unformat?i[o].regexps.unformat():i[o].regexps.unformat)&&r.match(l)){a=i[o].unformat;break}n=(a=a||e._.stringToNumber)(r)}else n=Number(r)||null;return new u(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,r,n){var o,i,l,s,u,c,f,d,m=a[e.options.currentLocale],p=!1,h=!1,v="",b="",g=!1;if(t=t||0,l=Math.abs(t),e._.includes(r,"(")?(p=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(c=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],e._.includes(r," a")&&(v=" "),r=r.replace(new RegExp(v+"a[kmbt]?"),""),l>=1e12&&!i||"t"===i?(v+=m.abbreviations.trillion,t/=1e12):l<1e12&&l>=1e9&&!i||"b"===i?(v+=m.abbreviations.billion,t/=1e9):l<1e9&&l>=1e6&&!i||"m"===i?(v+=m.abbreviations.million,t/=1e6):(l<1e6&&l>=1e3&&!i||"k"===i)&&(v+=m.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(h=!0,r=r.replace("[.]",".")),s=t.toString().split(".")[0],u=r.split(".")[1],f=r.indexOf(","),o=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),b=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):b=e._.toFixed(t,u.length,n),s=b.split(".")[0],b=e._.includes(b,".")?m.delimiters.decimal+b.split(".")[1]:"",h&&0===Number(b.slice(1))&&(b="")):s=e._.toFixed(t,0,n),v&&!i&&Number(s)>=1e3&&v!==m.abbreviations.trillion)switch(s=String(Number(s)/1e3),v){case m.abbreviations.thousand:v=m.abbreviations.million;break;case m.abbreviations.million:v=m.abbreviations.billion;break;case m.abbreviations.billion:v=m.abbreviations.trillion}if(e._.includes(s,"-")&&(s=s.slice(1),g=!0),s.length<o)for(var _=o-s.length;_>0;_--)s="0"+s;return f>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(s=""),d=s+b+(v||""),p?d=(p&&g?"(":"")+d+(p&&g?")":""):c>=0?d=0===c?(g?"-":"+")+d:d+(g?"-":"+"):g&&(d="-"+d),d},stringToNumber:function(e){var t,r,n,o=a[s.currentLocale],i=e,l={thousand:3,million:6,billion:9,trillion:12};if(s.zeroFormat&&e===s.zeroFormat)r=0;else if(s.nullFormat&&e===s.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<o;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,r){var n=t.multiplier(r);return e>n?e:n},1)},toFixed:function(e,t,r,n){var o,i,a,l,s=e.toString().split("."),u=t-(n||0);return o=2===s.length?Math.min(Math.max(s[1].length,u),t):u,a=Math.pow(10,o),l=(r(e+"e+"+o)/a).toFixed(o),n>t-o&&(i=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),l=l.replace(i,"")),l}},e.options=s,e.formats=i,e.locales=a,e.locale=function(e){return e&&(s.currentLocale=e.toLowerCase()),s.currentLocale},e.localeData=function(e){if(!e)return a[s.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in l)s[e]=l[e]},e.zeroFormat=function(e){s.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){s.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){s.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,o,i,a,l,s,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(t){u=e.localeData(e.locale())}return i=u.currency.symbol,l=u.abbreviations,n=u.delimiters.decimal,o="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(c=t.match(/^[^\d]+/))||(t=t.substr(1),c[0]===i))&&((null===(c=t.match(/[^\d]+$/))||(t=t.slice(0,-1),c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(s=new RegExp(o+"{2}"),!t.match(/[^\d.,]/g)&&(!((a=t.split(n)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(s):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(s)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(s)&&!!a[1].match(/^\d+$/)))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,r){var n,o,a,l=this._value,u=t||s.defaultFormat;if(r=r||Math.round,0===l&&null!==s.zeroFormat)o=s.zeroFormat;else if(null===l&&null!==s.nullFormat)o=s.nullFormat;else{for(n in i)if(u.match(i[n].regexps.format)){a=i[n].format;break}o=(a=a||e._.numberToFormat)(l,u,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],function(e,t,n,o){return e+Math.round(r*t)},0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],function(e,t,n,o){return e-Math.round(r*t)},Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)},1),this},divide:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var o,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},o="("+(o=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter(function(e){return r.suffixes.indexOf(e)<0})).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(t,o,i){var a,l,s,u=e._.includes(o,"ib")?n:r,c=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=u.suffixes.length;a++)if(l=Math.pow(u.base,a),s=Math.pow(u.base,a+1),null===t||0===t||t>=l&&t<s){c+=u.suffixes[a],l>0&&(t/=l);break}return e._.numberToFormat(t,o,i)+c},unformat:function(t){var o,i,a=e._.stringToNumber(t);if(a){for(o=r.suffixes.length-1;o>=0;o--){if(e._.includes(t,r.suffixes[o])){i=Math.pow(r.base,o);break}if(e._.includes(t,n.suffixes[o])){i=Math.pow(n.base,o);break}}a*=i||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var o,i,a=e.locales[e.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,r,n),t>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":o=i===l.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(l.after.length-(1+i)));break;case" ":o=i===l.after.length-1?o+" ":e._.insert(o," ",-(l.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var o=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),r,n)+"e"+o[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),o=Number(r[1]);return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],function(t,r,n,o){var i=e._.correctionFactor(t,r);return t*i*(r*i)/(i*i)},1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var o=e.locales[e.options.currentLocale],i=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=o.ordinal(t),e._.numberToFormat(t,r,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var o,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=o)},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card relative metric px-6 py-4 relative card-panel"},[r("div",{staticClass:"flex mb-4"},[r("h3",{staticClass:"text-lg font-bold nova-algolia-card-title"},[r("svg",{staticClass:"nova-algolia-card-title-logo",attrs:{"data-icon":"algolia",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"#5468ff",d:"M229.3 182.6c-49.3 0-89.2 39.9-89.2 89.2 0 49.3 39.9 89.2 89.2 89.2s89.2-39.9 89.2-89.2c0-49.3-40-89.2-89.2-89.2zm62.7 56.6l-58.9 30.6c-1.8.9-3.8-.4-3.8-2.3V201c0-1.5 1.3-2.7 2.7-2.6 26.2 1 48.9 15.7 61.1 37.1.7 1.3.2 3-1.1 3.7zM389.1 32H58.9C26.4 32 0 58.4 0 90.9V421c0 32.6 26.4 59 58.9 59H389c32.6 0 58.9-26.4 58.9-58.9V90.9C448 58.4 421.6 32 389.1 32zm-202.6 84.7c0-10.8 8.7-19.5 19.5-19.5h45.3c10.8 0 19.5 8.7 19.5 19.5v15.4c0 1.8-1.7 3-3.3 2.5-12.3-3.4-25.1-5.1-38.1-5.1-13.5 0-26.7 1.8-39.4 5.5-1.7.5-3.4-.8-3.4-2.5v-15.8zm-84.4 37l9.2-9.2c7.6-7.6 19.9-7.6 27.5 0l7.7 7.7c1.1 1.1 1 3-.3 4-6.2 4.5-12.1 9.4-17.6 14.9-5.4 5.4-10.4 11.3-14.8 17.4-1 1.3-2.9 1.5-4 .3l-7.7-7.7c-7.6-7.5-7.6-19.8 0-27.4zm127.2 244.8c-70 0-126.6-56.7-126.6-126.6s56.7-126.6 126.6-126.6c70 0 126.6 56.6 126.6 126.6 0 69.8-56.7 126.6-126.6 126.6z"}})]),e._v("\n      Algolia\n    ")])]),e._v(" "),r("p",{staticClass:"flex items-center text-4xl mb-4"},[e._v("\n    "+e._s(e.formattedEntries)+"\n  ")]),e._v(" "),r("div",{staticClass:"flex items-center"},[r("p",{staticClass:"text-80 font-bold"},[e.index?r("span",[e._v("Records in "),r("span",{staticClass:"nova-algolia-card-index"},[e._v(e._s(e.index))])]):r("span",[e._v("Total indexed records")])])])])},staticRenderFns:[]}}]);